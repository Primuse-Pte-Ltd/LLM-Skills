#!/usr/bin/env python3
"""Remove every skill in this repository from the agents on this machine.

It undoes what scripts/install.py did, for each folder in skills/:
- removes the links in ~/.agents/skills (Codex), ~/.claude/skills,
  ~/.gemini/skills, ~/.cursor/skills and the old ~/.codex/skills
- removes the Antigravity folders in ~/.gemini/config/skills and their entries
  in Antigravity's skills manifest
- does the same for the skills' old names, when those links point into an
  LLM-Skills checkout

It only deletes links that point into an LLM-Skills checkout, and Antigravity
folders whose SKILL.md names one of these skills. A real folder that happens to
share a name is left in place and reported. The checkout itself is left in place.

Usage:
    python3 scripts/uninstall.py           # remove everything
    python3 scripts/uninstall.py --check   # show what would be removed, change nothing
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
SKILLS_DIR = REPO / "skills"
HOME = Path.home()
SKIP_NAMES = {".git", ".DS_Store", "temp", "__pycache__"}
ANTIGRAVITY_DIR = HOME / ".gemini" / "config" / "skills"
MANIFEST = ANTIGRAVITY_DIR / ".datacloud_skills_manifest"

AGENT_SKILL_DIRS = {
    "codex": HOME / ".agents" / "skills",
    "claude": HOME / ".claude" / "skills",
    "gemini": HOME / ".gemini" / "skills",
    "cursor": HOME / ".cursor" / "skills",
    "codex old location": HOME / ".codex" / "skills",
}

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


def find_skills() -> list[str]:
    if not SKILLS_DIR.is_dir():
        return []
    return [
        d.name
        for d in sorted(SKILLS_DIR.iterdir())
        if d.is_dir() and d.name not in SKIP_NAMES and (d / "SKILL.md").is_file()
    ]


def link_target(path: Path) -> Path:
    target = Path(os.readlink(path))
    return target if target.is_absolute() else path.parent / target


def points_into_checkout(target: Path) -> bool:
    return REPO in target.parents or "LLM-Skills" in target.parts


def declared_name(path: Path) -> str | None:
    try:
        head = (path / "SKILL.md").read_text(errors="ignore")[:800]
    except OSError:
        return None
    for line in head.splitlines():
        if line.startswith("name:"):
            return line.split(":", 1)[1].strip().strip("'\"")
    return None


def remove_link(label: str, path: Path, check: bool, quiet_if_foreign: bool = False) -> str | None:
    """Remove a link into an LLM-Skills checkout.

    quiet_if_foreign is for old names: an unrelated skill that shares one of
    those names is not worth reporting.
    """
    if path.is_symlink():
        target = link_target(path)
        if not points_into_checkout(target):
            if quiet_if_foreign:
                return None
            return f"{label}: left {path} in place, it links to {target}, not an LLM-Skills checkout"
        if check:
            return f"{label}: would remove {path}"
        path.unlink()
        return f"{label}: removed {path}"
    if path.exists() and not quiet_if_foreign:
        return f"{label}: left {path} in place, it is a real folder, not a link"
    return None


def remove_antigravity(name: str, check: bool, require_link_into_checkout: bool) -> str | None:
    path = ANTIGRAVITY_DIR / name
    if path.is_symlink() or not path.is_dir():
        return None
    if declared_name(path) != name:
        return f"antigravity: left {path} in place, it is a different skill"
    if require_link_into_checkout and not any(
        child.is_symlink() and points_into_checkout(link_target(child)) for child in path.iterdir()
    ):
        return f"antigravity: left {path} in place, it is not from an LLM-Skills checkout"
    if check:
        return f"antigravity: would remove {path}"
    # The folder holds links; rmtree removes the links, not their targets.
    shutil.rmtree(path)
    return f"antigravity: removed {path}"


def remove_manifest_entries(names: list[str], check: bool) -> str | None:
    if not MANIFEST.is_file():
        return None
    try:
        manifest = json.loads(MANIFEST.read_text())
    except (OSError, json.JSONDecodeError):
        return f"antigravity: could not read {MANIFEST}, left it alone"
    skills = manifest.get("skills", {})
    # After a real run, an entry is only dropped once its folder is gone.
    present = [n for n in names if n in skills and (check or not (ANTIGRAVITY_DIR / n).exists())]
    if not present:
        return None
    if check:
        return f"antigravity: would remove the manifest entries {', '.join(present)}"
    for n in present:
        del skills[n]
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    return f"antigravity: removed the manifest entries {', '.join(present)}"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--check", action="store_true", help="show what would be removed, change nothing")
    args = parser.parse_args()

    skills = find_skills()
    old_names = [old for old, new in OLD_NAMES.items() if new in skills]
    print(f"Home: {HOME}")
    print(f"Checkout: {REPO}")
    print(f"Skills ({len(skills)}): {', '.join(skills)}\n")

    notes = []
    for name in skills:
        for label, parent in AGENT_SKILL_DIRS.items():
            notes.append(remove_link(label, parent / name, args.check))
    for name in old_names:
        for label, parent in AGENT_SKILL_DIRS.items():
            notes.append(remove_link(label, parent / name, args.check, quiet_if_foreign=True))
    for name in skills:
        notes.append(remove_antigravity(name, args.check, require_link_into_checkout=False))
    for name in old_names:
        note = remove_antigravity(name, args.check, require_link_into_checkout=True)
        if note and "left" not in note:
            notes.append(note)
    notes.append(remove_manifest_entries(skills + old_names, args.check))

    printed = [n for n in notes if n]
    print("\n".join(printed) if printed else "Nothing to remove.")

    if shutil.which("gemini"):
        print("\ngemini is on PATH: if you ran `gemini skills link` before, check `gemini skills list`")
        print("and remove those entries there too.")
    print(f"\nThe checkout at {REPO} was left in place. Delete it yourself if you no longer need it.")
    if not args.check:
        print("Restart each agent so it stops loading the skills.")
    else:
        print("--check: nothing changed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
