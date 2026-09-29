#!/usr/bin/env python3
"""Link this skill into the coding agents installed on this machine.

Before changing anything, the script checks where it is running:
- the OS, and whether this looks like a container, cloud or remote sandbox
- whether the home folder can be written
- which agents are actually installed here (Claude Code, Codex, Gemini CLI,
  Antigravity, Cursor)

It links only the agents it finds. If it finds none, it stops and explains
why, because that almost always means it is running somewhere other than the
user's own machine (a cloud sandbox, a CI runner, a remote chat session).

Usage:
    python3 install.py           # detect, then link what was found
    python3 install.py --check   # detect and report only, change nothing
    python3 install.py --all     # link every host, even ones not detected

Exit codes: 0 ok, 1 broken skill folder, 2 no agents found, 3 home not writable.

Codex reads ~/.agents/skills directly. Do not also link ~/.codex/skills.
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

ROOT = Path(__file__).resolve().parents[1]
HOME = Path.home()
SKILL = "llm-council"
EXPECTED_ROOT = HOME / ".agents" / "skills" / SKILL

# Codex scans ~/.agents/skills, which is where the clone lives.
# ~/.codex/skills is the old location and is still scanned, so a second link
# would load this skill twice.
CODEX_LEGACY = HOME / ".codex" / "skills" / SKILL

# The Antigravity IDE lists skills from Gemini's config directory, not from
# ~/.gemini/antigravity/skills. The skill folder and SKILL.md must be real
# files. A symlink is skipped.
ANTIGRAVITY = HOME / ".gemini" / "config" / "skills" / SKILL
MANIFEST = ANTIGRAVITY.parent / ".datacloud_skills_manifest"
SKIP_NAMES = {".git", ".DS_Store", "temp", "__pycache__"}

# How each host is recognised: a config folder in HOME, a command on PATH,
# or an installed app. Any one is enough.
HOSTS = {
    "claude": {
        "dest": HOME / ".claude" / "skills" / SKILL,
        "dirs": [HOME / ".claude"],
        "bins": ["claude"],
        "apps": [],
    },
    "codex": {
        "dest": None,  # reads ~/.agents/skills, nothing to link
        "dirs": [HOME / ".codex"],
        "bins": ["codex"],
        "apps": [],
    },
    "gemini": {
        "dest": HOME / ".gemini" / "skills" / SKILL,
        "dirs": [HOME / ".gemini"],
        "bins": ["gemini"],
        "apps": [],
    },
    "antigravity": {
        "dest": ANTIGRAVITY,
        "dirs": [HOME / ".gemini" / "antigravity", HOME / ".antigravity"],
        "bins": ["antigravity"],
        "apps": ["/Applications/Antigravity.app"],
    },
    "cursor": {
        "dest": HOME / ".cursor" / "skills" / SKILL,
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
        cgroup = Path("/proc/1/cgroup").read_text()
        if any(k in cgroup for k in ("docker", "kubepods", "containerd", "lxc")):
            if "container" not in env["signals"]:
                env["signals"].append("container")
    except OSError:
        pass
    for var, label in REMOTE_ENV_VARS.items():
        if os.environ.get(var):
            env["signals"].append(label)
    try:
        cgroup_text = Path("/proc/1/cgroup").read_text()
    except OSError:
        cgroup_text = ""
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


# ---------------------------------------------------------------- linking


def link(name: str, dest: Path) -> str:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.is_symlink():
        if dest.resolve() == ROOT:
            return f"{name}: already linked"
        dest.unlink()
    elif dest.exists():
        return f"{name}: skipped, {dest} already exists and is not a link"
    try:
        dest.symlink_to(ROOT, target_is_directory=True)
        return f"{name}: linked {dest} -> {ROOT}"
    except OSError:
        # Windows without Developer Mode cannot create symlinks.
        shutil.copytree(ROOT, dest, ignore=shutil.ignore_patterns(*SKIP_NAMES))
        return f"{name}: copied to {dest} (symlinks not allowed here; run install.py again after every update)"


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


def register_antigravity(dest: Path) -> None:
    if not MANIFEST.is_file():
        return
    manifest = json.loads(MANIFEST.read_text())
    skills = manifest.setdefault("skills", {})
    skills[SKILL] = {
        "status": "installed",
        "checksum": skill_checksum(dest),
    }
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")


def link_antigravity(dest: Path) -> str:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.is_symlink():
        dest.unlink()
    elif dest.exists() and not dest.is_dir():
        return f"antigravity: skipped, {dest} exists and is not a directory"
    dest.mkdir(parents=True, exist_ok=True)
    skill_md = dest / "SKILL.md"
    if skill_md.is_symlink() or skill_md.is_file():
        skill_md.unlink()
    skill_md.write_bytes((ROOT / "SKILL.md").read_bytes())
    linked = 0
    for child in sorted(ROOT.iterdir()):
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
        linked += 1
    register_antigravity(dest)
    return f"antigravity: {dest} (real SKILL.md, {linked} links into {ROOT})"


def codex_status() -> str:
    notes = []
    if ROOT != EXPECTED_ROOT.resolve() and ROOT != EXPECTED_ROOT:
        notes.append(f"codex: WARNING, the clone is at {ROOT}, but Codex only reads {EXPECTED_ROOT}")
    if CODEX_LEGACY.is_symlink():
        CODEX_LEGACY.unlink()
        notes.append("codex: removed old ~/.codex/skills link; Codex reads ~/.agents/skills")
    elif CODEX_LEGACY.exists():
        notes.append(f"codex: left {CODEX_LEGACY} in place, it is not a link")
    if not notes:
        notes.append("codex: reads ~/.agents/skills directly, nothing to link")
    return "\n".join(notes)


# ---------------------------------------------------------------- main


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--check", action="store_true", help="detect and report only, change nothing")
    parser.add_argument("--all", action="store_true", help="link every host, even ones not detected")
    args = parser.parse_args()

    if not (ROOT / "SKILL.md").is_file():
        print("SKILL.md is missing next to scripts/", file=sys.stderr)
        return 1

    env = detect_environment()
    print(f"Environment: {env['os']}, home {HOME}")
    if env["signals"]:
        print(f"  Looks like: {', '.join(env['signals'])}")

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
        print("\nSTOP: no coding agents were found in this home folder.")
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
        if name == "codex":
            print(codex_status())
        elif name == "antigravity":
            print(link_antigravity(spec["dest"]))
        else:
            print(link(name, spec["dest"]))

    if found["gemini"] and shutil.which("gemini"):
        print("\ngemini is on PATH: also run")
        print(f'  gemini skills link "{ROOT}" --consent')
    print("\nRestart each linked agent so it loads the skill.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
