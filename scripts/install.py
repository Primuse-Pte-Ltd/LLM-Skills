#!/usr/bin/env python3
"""Link this skill into Claude, Codex, Gemini, Antigravity, and Cursor."""

from __future__ import annotations

import hashlib
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOME = Path.home()

TARGETS = {
    "claude": HOME / ".claude" / "skills" / "llm-council",
    "codex": HOME / ".codex" / "skills" / "llm-council",
    "gemini": HOME / ".gemini" / "skills" / "llm-council",
    "cursor": HOME / ".cursor" / "skills" / "llm-council",
}

# The Antigravity IDE lists skills from Gemini's config directory, not from
# ~/.gemini/antigravity/skills. The skill folder and SKILL.md must be real
# files. A symlink is skipped.
ANTIGRAVITY = HOME / ".gemini" / "config" / "skills" / "llm-council"
MANIFEST = ANTIGRAVITY.parent / ".datacloud_skills_manifest"
SKIP_NAMES = {".git", ".DS_Store", "temp"}


def link(name: str, dest: Path) -> str:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.is_symlink():
        if dest.resolve() == ROOT:
            return f"{name}: already linked"
        dest.unlink()
    elif dest.exists():
        return f"{name}: skipped, {dest} already exists and is not a link"
    dest.symlink_to(ROOT, target_is_directory=True)
    return f"{name}: linked {dest} -> {ROOT}"


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
    skills["llm-council"] = {
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
        target.symlink_to(child, target_is_directory=child.is_dir())
        linked += 1
    register_antigravity(dest)
    return f"antigravity: {dest} (real SKILL.md, {linked} links into {ROOT})"


def main() -> int:
    if not (ROOT / "SKILL.md").is_file():
        print("SKILL.md is missing next to scripts/", file=sys.stderr)
        return 1
    for name, dest in TARGETS.items():
        print(link(name, dest))
    print(link_antigravity(ANTIGRAVITY))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
