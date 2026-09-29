#!/usr/bin/env python3
"""Link this skill into Claude, Codex, Gemini, and Antigravity."""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOME = Path.home()

TARGETS = {
    "claude": HOME / ".claude" / "skills" / "llm-council",
    "codex": HOME / ".codex" / "skills" / "llm-council",
    "gemini": HOME / ".gemini" / "skills" / "llm-council",
    "antigravity": HOME / ".gemini" / "antigravity" / "skills" / "llm-council",
}


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


def main() -> int:
    if not (ROOT / "SKILL.md").is_file():
        print("SKILL.md is missing next to scripts/", file=sys.stderr)
        return 1
    for name, dest in TARGETS.items():
        print(link(name, dest))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
