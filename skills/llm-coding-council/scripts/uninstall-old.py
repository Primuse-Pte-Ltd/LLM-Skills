#!/usr/bin/env python3
"""Remove the llm-council skill from every coding agent on this machine.

It undoes what install.py did:
- removes the links in ~/.claude/skills, ~/.gemini/skills, ~/.cursor/skills
  and the old ~/.codex/skills
- removes the Antigravity folder in ~/.gemini/config/skills and its entry in
  Antigravity's skills manifest
- removes the clone in ~/.agents/skills/llm-council (that is what Codex reads)

It only deletes things that belong to this skill: a link that points at a
llm-council folder, or a folder whose SKILL.md says `name: llm-council`.
Anything else is left in place and reported.

Usage:
    python3 uninstall.py               # remove everything
    python3 uninstall.py --check       # show what would be removed, change nothing
    python3 uninstall.py --keep-clone  # remove the links, keep ~/.agents/skills/llm-council
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import sys
from pathlib import Path

HOME = Path.home()
SKILL = "llm-council"
CLONE = HOME / ".agents" / "skills" / SKILL
ANTIGRAVITY = HOME / ".gemini" / "config" / "skills" / SKILL
MANIFEST = ANTIGRAVITY.parent / ".datacloud_skills_manifest"

LINKS = {
    "claude": HOME / ".claude" / "skills" / SKILL,
    "gemini": HOME / ".gemini" / "skills" / SKILL,
    "cursor": HOME / ".cursor" / "skills" / SKILL,
    "codex (old location)": HOME / ".codex" / "skills" / SKILL,
}


def is_ours(path: Path) -> bool:
    """True if this folder holds the llm-council SKILL.md."""
    skill_md = path / "SKILL.md"
    try:
        head = skill_md.read_text(errors="ignore")[:500]
    except OSError:
        return False
    return f"name: {SKILL}" in head


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
        if target.name != SKILL and not is_ours(path):
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


def remove_manifest_entry(check: bool) -> str | None:
    if not MANIFEST.is_file():
        return None
    try:
        manifest = json.loads(MANIFEST.read_text())
    except (OSError, json.JSONDecodeError):
        return f"antigravity: could not read {MANIFEST}, left it alone"
    skills = manifest.get("skills", {})
    if SKILL not in skills:
        return None
    if check:
        return "antigravity: would remove the manifest entry"
    del skills[SKILL]
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    return "antigravity: removed the manifest entry"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--check", action="store_true", help="show what would be removed, change nothing")
    parser.add_argument("--keep-clone", action="store_true", help="keep ~/.agents/skills/llm-council")
    args = parser.parse_args()

    print(f"Home: {HOME}\n")
    for label, path in LINKS.items():
        print(remove_entry(label, path, args.check))

    print(remove_entry("antigravity", ANTIGRAVITY, args.check))
    note = remove_manifest_entry(args.check)
    if note:
        print(note)

    if args.keep_clone:
        print(f"codex: kept {CLONE} (--keep-clone), so Codex still sees the skill")
    else:
        # The clone is last, because this script may be running from inside it.
        print(remove_entry("codex + clone", CLONE, args.check))

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
