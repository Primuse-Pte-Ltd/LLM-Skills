#!/usr/bin/env python3
"""Remove the dirsal-llm-coding-council skill from every coding agent on this machine.

It undoes what install.py did:
- removes the links in ~/.claude/skills, ~/.gemini/skills, ~/.cursor/skills
  and the old ~/.codex/skills
- removes the Antigravity folder in ~/.gemini/config/skills and its entry in
  Antigravity's skills manifest
- removes the link in ~/.agents/skills/dirsal-llm-coding-council (that is what Codex reads)
- does the same for the old name, llm-coding-council

The LLM-Skills checkout at ~/.agents/LLM-Skills is left in place.

It only deletes things that belong to this skill: a link named after this
skill, or a folder whose SKILL.md says `name: dirsal-llm-coding-council` or
`name: llm-coding-council`. dirsal-llm-council is a different skill and is
left in place.

Usage:
    python3 uninstall.py               # remove everything
    python3 uninstall.py --check       # show what would be removed, change nothing
    python3 uninstall.py --keep-clone  # remove the links, keep ~/.agents/skills/dirsal-llm-coding-council
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import sys
from pathlib import Path

HOME = Path.home()
SKILL = "dirsal-llm-coding-council"
OLD_NAMES = ("llm-coding-council",)
NAMES = (SKILL, *OLD_NAMES)
CLONE = HOME / ".agents" / "skills" / SKILL
SKILLS_DIR_ANTIGRAVITY = HOME / ".gemini" / "config" / "skills"
MANIFEST = SKILLS_DIR_ANTIGRAVITY / ".datacloud_skills_manifest"

LINKS = {}
for _name in NAMES:
    suffix = "" if _name == SKILL else f" ({_name})"
    LINKS[f"claude{suffix}"] = HOME / ".claude" / "skills" / _name
    LINKS[f"gemini{suffix}"] = HOME / ".gemini" / "skills" / _name
    LINKS[f"cursor{suffix}"] = HOME / ".cursor" / "skills" / _name
    LINKS[f"codex old location{suffix}"] = HOME / ".codex" / "skills" / _name


def is_ours(path: Path) -> bool:
    """True if this folder holds this skill's SKILL.md, not dirsal-llm-council."""
    try:
        head = (path / "SKILL.md").read_text(errors="ignore")[:800]
    except OSError:
        return False
    for line in head.splitlines():
        if line.strip() in {f"name: {name}" for name in NAMES}:
            return True
    return False


def remove_path(path: Path) -> None:
    if path.is_symlink() or path.is_file():
        path.unlink()
    elif path.is_dir():
        # Antigravity's folder holds links; rmtree removes the links, not their targets.
        shutil.rmtree(path)


def remove_entry(label: str, path: Path, check: bool) -> str:
    if not path.exists() and not path.is_symlink():
        return f"{label}: nothing there"
    if path.is_symlink():
        target = Path(os.readlink(path))
        if target.name not in NAMES and not is_ours(path):
            return f"{label}: left {path} in place, it links to {target}, not this skill"
        what = f"link {path} -> {target}"
    elif path.is_dir():
        if not is_ours(path):
            return f"{label}: left {path} in place, it is not this skill"
        what = f"folder {path}"
    else:
        return f"{label}: left {path} in place, it is a file, not this skill"
    if check:
        return f"{label}: would remove {what}"
    remove_path(path)
    return f"{label}: removed {what}"


def remove_manifest_entries(check: bool) -> str | None:
    if not MANIFEST.is_file():
        return None
    try:
        manifest = json.loads(MANIFEST.read_text())
    except (OSError, json.JSONDecodeError):
        return f"antigravity: could not read {MANIFEST}, left it alone"
    skills = manifest.get("skills", {})
    present = [name for name in NAMES if name in skills]
    if not present:
        return None
    if check:
        return f"antigravity: would remove the manifest entries {', '.join(present)}"
    for name in present:
        del skills[name]
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    return f"antigravity: removed the manifest entries {', '.join(present)}"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--check", action="store_true", help="show what would be removed, change nothing")
    parser.add_argument("--keep-clone", action="store_true", help=f"keep ~/.agents/skills/{SKILL}")
    args = parser.parse_args()

    print(f"Home: {HOME}\n")
    for label, path in LINKS.items():
        print(remove_entry(label, path, args.check))

    for name in NAMES:
        label = "antigravity" if name == SKILL else f"antigravity ({name})"
        print(remove_entry(label, SKILLS_DIR_ANTIGRAVITY / name, args.check))
    note = remove_manifest_entries(args.check)
    if note:
        print(note)

    for name in OLD_NAMES:
        print(remove_entry(f"codex ({name})", HOME / ".agents" / "skills" / name, args.check))

    if args.keep_clone:
        print(f"codex: kept {CLONE} (--keep-clone), so Codex still sees the skill")
    else:
        # The link this script may be running through goes last.
        print(remove_entry("codex + skill link", CLONE, args.check))

    if shutil.which("gemini"):
        print("\ngemini is on PATH: if you ran `gemini skills link` before, check `gemini skills list`")
        print("and remove the entry there too.")
    if args.check:
        print("\n--check: nothing changed.")
    else:
        print("\nRestart each agent so it stops loading the skill.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
