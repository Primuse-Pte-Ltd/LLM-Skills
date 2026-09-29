#!/usr/bin/env python3
"""Link every skill in this repository into the agents installed on this machine.

Before changing anything, the script checks where it is running:
- the OS, and whether this looks like a container, cloud or remote sandbox
- whether the home folder can be written
- which agents are actually installed here (Claude Code, Codex, Gemini CLI,
  Antigravity, Cursor)

It links only the agents it finds. If it finds none, it stops and explains
why, because that almost always means it is running somewhere other than the
user's own machine (a cloud sandbox, a CI runner, a remote chat session).

Every folder in skills/ that has a SKILL.md is linked. A real folder that
already exists under the same name in an agent is left in place and reported.

Usage:
    python3 scripts/install.py           # detect, then link what was found
    python3 scripts/install.py --check   # detect and report only, change nothing
    python3 scripts/install.py --all     # link every host, even ones not detected

Exit codes: 0 ok, 1 no skills found, 2 no agents found, 3 home not writable.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import platform
import shutil
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
SKILLS_DIR = REPO / "skills"
HOME = Path.home()
RECOMMENDED_REPO = HOME / ".agents" / "LLM-Skills"
SKIP_NAMES = {".git", ".DS_Store", "temp", "__pycache__"}

# The Antigravity IDE lists skills from Gemini's config directory, not from
# ~/.gemini/antigravity/skills. Each skill folder and its SKILL.md must be real
# files. A symlinked skill folder is skipped.
ANTIGRAVITY_DIR = HOME / ".gemini" / "config" / "skills"
MANIFEST = ANTIGRAVITY_DIR / ".datacloud_skills_manifest"

# Codex scans ~/.agents/skills. ~/.codex/skills is the old location and is
# still scanned, so a second link there would load each skill twice.
CODEX_LEGACY_DIR = HOME / ".codex" / "skills"

AGENT_SKILL_DIRS = [
    HOME / ".agents" / "skills",
    HOME / ".claude" / "skills",
    HOME / ".gemini" / "skills",
    HOME / ".cursor" / "skills",
    CODEX_LEGACY_DIR,
]

# Skills that were renamed. Links left under the old name are removed, but only
# when they point into an LLM-Skills checkout, so an unrelated skill that
# happens to share the old name is never touched.
OLD_NAMES = {
    "brand-guidelines": "dirsal-brands-guidelines",
    "canvas-design": "dirsal-canvas-design",
    "frontend-design": "dirsal-frontend-design",
    "llm-coding-council": "dirsal-llm-coding-council",
    "llm-council": "dirsal-llm-council",
    "mcp-builder": "dirsal-mcp-builder",
    "theme-factory": "dirsal-theme-factory",
    "web-artifacts-builder": "dirsal-web-artifacts-builder",
    "webapp-testing": "dirsal-webapp-testing",
}
# Old names unique to this repo. A real folder under one of them is almost
# certainly an old standalone checkout, so it is worth reporting.
REPORT_REAL_OLD = {"llm-council", "llm-coding-council"}

# How each host is recognised: a config folder in HOME, a command on PATH,
# or an installed app. Any one is enough.
HOSTS = {
    "claude": {
        "skills_dir": HOME / ".claude" / "skills",
        "dirs": [HOME / ".claude"],
        "bins": ["claude"],
        "apps": [],
    },
    "codex": {
        "skills_dir": HOME / ".agents" / "skills",
        "dirs": [HOME / ".codex"],
        "bins": ["codex"],
        "apps": [],
    },
    "gemini": {
        "skills_dir": HOME / ".gemini" / "skills",
        "dirs": [HOME / ".gemini"],
        "bins": ["gemini"],
        "apps": [],
    },
    "antigravity": {
        "skills_dir": ANTIGRAVITY_DIR,
        "dirs": [HOME / ".gemini" / "antigravity", HOME / ".antigravity"],
        "bins": ["antigravity"],
        "apps": ["/Applications/Antigravity.app"],
    },
    "cursor": {
        "skills_dir": HOME / ".cursor" / "skills",
        "dirs": [HOME / ".cursor"],
        "bins": ["cursor", "cursor-agent"],
        "apps": ["/Applications/Cursor.app"],
    },
}

REMOTE_ENV_VARS = {
    "CODESPACES": "GitHub Codespaces",
    "GITPOD_WORKSPACE_ID": "Gitpod",
    "CLOUD_SHELL": "Google Cloud Shell",
    "CLAUDE_CODE_REMOTE": "Claude Code cloud session",
    "CI": "CI runner",
    "GITHUB_ACTIONS": "GitHub Actions",
}


# ---------------------------------------------------------------- detection


def detect_environment() -> dict:
    env: dict = {"os": platform.system() or "unknown", "signals": []}
    if Path("/.dockerenv").exists() or Path("/run/.containerenv").exists():
        env["signals"].append("container")
    try:
        cgroup_text = Path("/proc/1/cgroup").read_text()
    except OSError:
        cgroup_text = ""
    if any(k in cgroup_text for k in ("docker", "kubepods", "containerd", "lxc")):
        if "container" not in env["signals"]:
            env["signals"].append("container")
    for var, label in REMOTE_ENV_VARS.items():
        if os.environ.get(var):
            env["signals"].append(label)
    if "coworkd" in cgroup_text or os.environ.get("CLAUDE_CODE_TMPDIR"):
        env["signals"].append("Claude cloud or desktop sandbox")
    if str(HOME).startswith(("/sessions/", "/tmp/", "/workspace")):
        env["signals"].append(f"temporary home folder ({HOME})")
    if os.environ.get("SSH_CONNECTION"):
        env["signals"].append("SSH session")
    env["home_writable"] = os.access(HOME, os.W_OK)
    return env


def detect_host(spec: dict) -> tuple[str | None, str | None]:
    """Return (evidence, hint). Only a config folder or an installed app counts.

    A command on PATH alone is not enough: sandboxes often ship a `claude`
    binary that was never used by this user, and linking there helps nobody.
    """
    for d in spec["dirs"]:
        if d.is_dir():
            return f"found {d}", None
    for a in spec["apps"]:
        if Path(a).exists():
            return f"found {a}", None
    for b in spec["bins"]:
        path = shutil.which(b)
        if path:
            return None, f"`{b}` exists at {path}, but it has never been used in this home folder"
    return None, None


def find_skills() -> list[Path]:
    if not SKILLS_DIR.is_dir():
        return []
    return [
        d
        for d in sorted(SKILLS_DIR.iterdir())
        if d.is_dir() and d.name not in SKIP_NAMES and (d / "SKILL.md").is_file()
    ]


# ---------------------------------------------------------------- helpers


def link_target(path: Path) -> Path:
    target = Path(os.readlink(path))
    return target if target.is_absolute() else path.parent / target


def points_into_checkout(target: Path) -> bool:
    return REPO in target.parents or "LLM-Skills" in target.parts


def declared_name(path: Path) -> str | None:
    """The `name:` in a skill folder's SKILL.md, if this folder is one."""
    try:
        head = (path / "SKILL.md").read_text(errors="ignore")[:800]
    except OSError:
        return None
    for line in head.splitlines():
        if line.startswith("name:"):
            return line.split(":", 1)[1].strip().strip("'\"")
    return None


def skill_checksum(skill_dir: Path) -> str:
    digest = hashlib.sha256()
    files = sorted(
        (path for path in skill_dir.rglob("*") if path.is_file()),
        key=lambda path: path.relative_to(skill_dir).as_posix(),
    )
    for path in files:
        digest.update(path.relative_to(skill_dir).as_posix().encode())
        digest.update(path.read_bytes())
    return digest.hexdigest()


def read_manifest() -> dict | None:
    if not MANIFEST.is_file():
        return None
    try:
        manifest = json.loads(MANIFEST.read_text())
    except (OSError, json.JSONDecodeError):
        return None
    return manifest if isinstance(manifest, dict) else None


# ---------------------------------------------------------------- linking


def link(skill: Path, dest: Path) -> tuple[str, str | None]:
    """Return (status, note). Status is linked, relinked, already, copied, or skipped."""
    dest.parent.mkdir(parents=True, exist_ok=True)
    status = "linked"
    if dest.is_symlink():
        if dest.resolve() == skill.resolve():
            return "already", None
        dest.unlink()
        status = "relinked"
    elif dest.exists():
        return "skipped", f"{dest} already exists and is not a link"
    try:
        dest.symlink_to(skill, target_is_directory=True)
        return status, None
    except OSError:
        # Windows without Developer Mode cannot create symlinks.
        shutil.copytree(skill, dest, ignore=shutil.ignore_patterns(*SKIP_NAMES))
        return "copied", f"{dest} is a copy; run install.py again after every update"


def link_antigravity(skill: Path, dest: Path) -> tuple[str, str | None]:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.is_symlink():
        dest.unlink()
    elif dest.exists() and not dest.is_dir():
        return "skipped", f"{dest} exists and is not a directory"
    elif dest.is_dir() and declared_name(dest) not in (skill.name, None):
        return "skipped", f"{dest} holds a different skill ({declared_name(dest)})"
    status = "updated" if dest.is_dir() else "linked"
    dest.mkdir(parents=True, exist_ok=True)
    skill_md = dest / "SKILL.md"
    if skill_md.is_symlink() or skill_md.is_file():
        skill_md.unlink()
    skill_md.write_bytes((skill / "SKILL.md").read_bytes())
    for child in sorted(skill.iterdir()):
        if child.name in SKIP_NAMES or child.name == "SKILL.md":
            continue
        target = dest / child.name
        if target.is_symlink():
            if target.resolve() == child.resolve():
                continue
            target.unlink()
        elif target.exists():
            continue
        try:
            target.symlink_to(child, target_is_directory=child.is_dir())
        except OSError:
            if child.is_dir():
                shutil.copytree(child, target, ignore=shutil.ignore_patterns(*SKIP_NAMES))
            else:
                shutil.copy2(child, target)
    manifest = read_manifest()
    if manifest is not None:
        manifest.setdefault("skills", {})[skill.name] = {
            "status": "installed",
            "checksum": skill_checksum(dest),
        }
        MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    return status, None


def install_host(name: str, spec: dict, skills: list[Path]) -> None:
    counts: dict[str, int] = {}
    notes: list[str] = []
    for skill in skills:
        dest = spec["skills_dir"] / skill.name
        if name == "antigravity":
            status, note = link_antigravity(skill, dest)
        else:
            status, note = link(skill, dest)
        counts[status] = counts.get(status, 0) + 1
        if note:
            notes.append(f"{skill.name}: {note}")
    summary = ", ".join(f"{n} {s}" for s, n in counts.items())
    print(f"{name}: {summary} ({spec['skills_dir']})")
    for note in notes:
        print(f"  {note}")


def cleanup_codex_legacy(skills: list[Path]) -> None:
    for skill in skills:
        path = CODEX_LEGACY_DIR / skill.name
        if path.is_symlink() and points_into_checkout(link_target(path)):
            path.unlink()
            print(f"codex: removed old {path}; Codex reads ~/.agents/skills")


def cleanup_old_names(skill_names: set[str]) -> None:
    """Remove what an install under a previous skill name left behind."""
    manifest = read_manifest()
    manifest_changed = False
    for old, new in OLD_NAMES.items():
        if new not in skill_names:
            continue
        for parent in AGENT_SKILL_DIRS:
            path = parent / old
            if path.is_symlink():
                target = link_target(path)
                renamed_here = path.resolve() == (SKILLS_DIR / new).resolve()
                dangling_ours = not target.exists() and target.name == old and points_into_checkout(target)
                if renamed_here or dangling_ours:
                    path.unlink()
                    print(f"old name: removed {path}")
            elif old in REPORT_REAL_OLD and path.is_dir() and declared_name(path) == old:
                print(f"old name: left {path} in place. It looks like the old {old} install;")
                print(f"  remove it after the user approves, or the agent loads {new} twice.")
        old_antigravity = ANTIGRAVITY_DIR / old
        if old_antigravity.is_dir() and not old_antigravity.is_symlink() and declared_name(old_antigravity) == old:
            ours = any(
                child.is_symlink() and points_into_checkout(link_target(child))
                for child in old_antigravity.iterdir()
            )
            if ours:
                shutil.rmtree(old_antigravity)
                print(f"old name: removed {old_antigravity}")
                if manifest is not None and old in manifest.get("skills", {}):
                    del manifest["skills"][old]
                    manifest_changed = True
    if manifest_changed:
        MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
        print("old name: removed the old Antigravity manifest entries")


# ---------------------------------------------------------------- main


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--check", action="store_true", help="detect and report only, change nothing")
    parser.add_argument("--all", action="store_true", help="link every host, even ones not detected")
    args = parser.parse_args()

    skills = find_skills()
    if not skills:
        print(f"No skills found in {SKILLS_DIR} (each needs a SKILL.md).", file=sys.stderr)
        return 1

    env = detect_environment()
    print(f"Environment: {env['os']}, home {HOME}")
    if env["signals"]:
        print(f"  Looks like: {', '.join(env['signals'])}")
    print(f"Checkout: {REPO}")
    if REPO != RECOMMENDED_REPO and REPO != RECOMMENDED_REPO.resolve():
        print(f"  Links will point here. Keep this folder in place, or clone to {RECOMMENDED_REPO} instead.")
    print(f"Skills ({len(skills)}): {', '.join(s.name for s in skills)}")

    if not env["home_writable"]:
        print(f"\nSTOP: cannot write to {HOME}. The agent is probably sandboxed.")
        print("Approve the command with full access, or run it yourself in a normal terminal.")
        return 3

    found = {}
    print("\nAgents on this machine:")
    for name, spec in HOSTS.items():
        why, hint = detect_host(spec)
        found[name] = why
        print(f"  {name:<12} {why or hint or 'not found'}")

    if not any(found.values()) and not args.all:
        print("\nSTOP: no agents were found in this home folder.")
        if env["signals"]:
            print(f"This looks like a {', '.join(env['signals'])}, not the machine where your agents live.")
        else:
            print("This is probably not the machine where your agents live.")
        print("Nothing was linked. Run the install from Claude Code, Codex, Cursor, Antigravity or")
        print("Gemini CLI on your own computer, or rerun with --all to link anyway.")
        return 2

    if args.check:
        print("\n--check: nothing changed.")
        return 0

    print("\nResult:")
    for name, spec in HOSTS.items():
        if not (found[name] or args.all):
            print(f"{name}: skipped, not installed here")
            continue
        install_host(name, spec, skills)

    cleanup_codex_legacy(skills)
    cleanup_old_names({s.name for s in skills})

    if found["gemini"] and shutil.which("gemini"):
        print("\ngemini is on PATH: also register each skill with")
        print(f'  for d in "{SKILLS_DIR}"/*/; do gemini skills link "$d" --consent; done')
    print("\nRestart each linked agent so it loads the skills.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
