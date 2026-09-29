## OpenCode council — models, history, and code

Use this when the user wants specific models through OpenCode, a TUI of the run, conversation history, or independent code proposals in git worktrees. The runner is `opencode/` in this skill. Run the commands below from the skill directory, the folder that contains this file. It needs the OpenCode CLI, Python 3.8+, and a git repository for worktree mode. First run creates a virtualenv at `opencode/.venv`. Manual setup: `python3 opencode/scripts/setup_environment.py`. Check it with `--check`.

Create `opencode/scripts/.env`:

```
COUNCIL_MODELS=opencode/openai/gpt-4,opencode/anthropic/claude-3-5-sonnet,opencode/google/gemini-pro
CHAIRMAN_MODEL=opencode/anthropic/claude-3-5-sonnet
```

`provider/model` is accepted; `opencode/` is the default prefix. Optional: `TITLE_MODEL`, `DASHBOARD_TIMEOUT` (seconds to leave the TUI up after the run), `DASHBOARD_REFRESH_RATE` (Hz). Change members by editing `COUNCIL_MODELS`. Change prompts in `opencode/scripts/prompts/templates.py` only when the user wants the rubric itself changed.

Stage 1 collects an independent answer from each member. In worktree mode each member edits in its own worktree. Stage 2 anonymizes those answers as letters and ranks them. Stage 3 is the chairman model. You still read the result and post the verdict in this session. If the chairman model smoothed a real defect out of the winning diff, say so. Do not pass a weak synthesis through unchallenged.

```bash
python3 opencode/scripts/run.py council_skill.py "<question>"
python3 opencode/scripts/run.py cli.py --dashboard "<question>"
python3 opencode/scripts/run.py council_skill.py --list
python3 opencode/scripts/run.py council_skill.py --show N
python3 opencode/scripts/run.py council_skill.py --continue N "<follow-up>"
python3 opencode/scripts/run.py council_skill.py --setup
```

| Flag | Effect |
|---|---|
| `--dashboard`, `-d` | TUI: stage flow, member status, last log lines, API and error counts |
| `--worktrees` | One git worktree per member |
| `--dry-run` | Show the diff. Do not merge. This is the default posture for code. |
| `--auto-merge` | Merge the top-ranked proposal. Only when the user asked. |
| `--merge N` | Merge member N. Only when the user asked. |
| `--confirm` | Ask before the merge |
| `--no-commit` | Apply the change without staging |
| `--list` / `--show N` / `--continue N` | History, one session, follow-up |

```bash
python3 opencode/scripts/run.py council_skill.py --dry-run "Fix the bug in buggy.py"
python3 opencode/scripts/run.py council_skill.py --auto-merge --confirm "Add error handling"
python3 opencode/scripts/run.py council_skill.py --merge 2 "Refactor this"
python3 opencode/scripts/run.py council_skill.py --auto-merge --no-commit "Add tests"
```

Code seats must say what they changed and why, in the files they touched. Reviewers rank proposals and end on `FINAL RANKING`. "not a git repository" means initialize git or leave worktree mode off. Leftover worktrees: `git worktree prune`. History and logs live under `opencode/scripts/data/`.

Bring the ranking and the verdict back to chat. The user decides what lands in the tree.
