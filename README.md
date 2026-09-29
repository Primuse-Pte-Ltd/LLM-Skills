# LLM Council

The protocol is `SKILL.md`. The working team drafts the plan, the ledger lists every option, mistake, and bug, and six seats judge it. The consult script, the dashboard, and the OpenCode runner are in this repository: `scripts/query_llms.py`, `scripts/dashboard/`, and `opencode/`.

The source is GitHub, not a path inside someone's project:

```
https://github.com/Primuse-Pte-Ltd/llm-council
```

Each host runs its own model. Do not reuse an OpenAI model id on Claude, Cursor, Codex, Antigravity, or Gemini, and do not reuse a Gemini model id on the others. Leave the model flag off to keep the model that host is already using.

## Install

The agent does this. Do not ask the user to clone the repo, change directory, or run the script.

Clone outside the current project, then link that clone into every coding agent:

```bash
mkdir -p "$HOME/.agents/skills"
gh repo clone Primuse-Pte-Ltd/llm-council "$HOME/.agents/skills/llm-council"
python3 "$HOME/.agents/skills/llm-council/scripts/install.py"
```

If `$HOME/.agents/skills/llm-council` already exists, update it and link again:

```bash
git -C "$HOME/.agents/skills/llm-council" pull --ff-only
python3 "$HOME/.agents/skills/llm-council/scripts/install.py"
```

`install.py` creates the links below. A link that already points at the clone is left alone. A real directory that is not a link is left in place and reported. Do not delete that directory unless the user asked.

| Host | Where it reads the skill |
|---|---|
| Claude Code | `~/.claude/skills/llm-council` |
| Codex | `~/.agents/skills/llm-council` |
| Gemini CLI | `~/.gemini/skills/llm-council` |
| Antigravity | `~/.gemini/config/skills/llm-council` |
| Cursor | `~/.cursor/skills/llm-council` |

If `gemini` is on `PATH`, register the same clone:

```bash
gemini skills link "$HOME/.agents/skills/llm-council" --consent
```

Codex reads `~/.agents/skills` itself. `~/.codex/skills` is the old location, so this install does not add a second link there.

Then tell the user which hosts were linked and which were skipped. The host that is running is the chairman. The others are seats, asked read-only, each with its own model flag. Those commands are in `references/agents.md`.

## Omniroute

Omniroute does not load `SKILL.md`. `omniroute skills install` registers an executable skill: a JSON file with `name`, `schema.input`, `schema.output`, and a `handler` string that names code Omniroute can run. This council is instructions for an agent, not that kind of handler.

The install above is what Omniroute's agents read. Omniroute picks the upstream provider and that provider's model. The OpenAI and Gemini ladders in `SKILL.md` are only for the optional HTTP fallback, not for Omniroute routes.

If `omniroute` is on `PATH`, confirm its own registry:

```bash
omniroute skills list
```

## KisumAI

The Kisum chat service has its own live-entertainment council. It loads `ai-agent-chat/skills/council/prompts/*.md`, not this file. Models for that runtime are `COUNCIL_ADVISOR_MODEL`, `COUNCIL_REVIEWER_MODEL`, and `COUNCIL_CHAIRMAN_MODEL` in `ai-agent-chat/.env` and `.env.production`. Do not replace those prompt files with this skill, and do not set those variables to `gpt-5-nano` or `gemini-3-flash-preview`.

Coding agents in that repo use the links from the install above. Do not copy this skill into the Kisum tree.
