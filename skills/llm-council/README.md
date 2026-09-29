# LLM Council

Six advisors answer a decision, review each other without names, and a chairman writes one verdict. The six are The User, Contrarian, First Principles, Expansionist, Outsider, and Executor. This is not the coding council. Code, architecture, APIs, schemas, and production changes belong in `llm-coding-council`.

It runs in Claude, Codex, Gemini, Cursor, and Antigravity. The host that loaded the skill is the chairman. Each host uses its own model. Do not reuse an OpenAI model id on Claude, Cursor, Codex, Antigravity, or Gemini, and do not reuse a Gemini model id on the others.

The protocol is `SKILL.md`. A session writes two files:

- `council-report-[timestamp].html` — the page to read
- `council-transcript-[timestamp].md` — the full arguments

The council uses what the user said. It does not open project files.

## Install with a prompt

Paste this prompt into any agent. One install covers every agent installed on that computer, so you only need to run it once per computer. Run it from an agent on your own computer, not from a cloud chat: the script checks this and stops if it finds no agents.

```text
Install the llm-council skill from https://github.com/Primuse-Pte-Ltd/llm-council.
Follow the "Install" section of its README.md exactly: clone it to
~/.agents/skills/llm-council (or pull if it already exists), then run
python3 ~/.agents/skills/llm-council/scripts/install.py.
This writes outside the current project; ask me once to approve, then continue.
The script checks where it is running first. If it prints STOP, do not work
around it: tell me what it found and what I should do.
When done, tell me which agents were linked and which were skipped.
```

| Host | Where to paste it | Notes |
|---|---|---|
| Claude Code | Terminal or IDE chat | Approve the shell commands when asked. Start a new session so the skill loads. |
| Codex | Codex CLI or IDE chat | Codex may run commands in a sandbox that cannot write to `~`. Approve the command or allow full access for this step. Restart Codex after. |
| Cursor | Agent chat (Agent mode, not Ask) | Approve the terminal commands. Reload the window after. |
| Antigravity | Agent panel | Approve the terminal commands. Restart Antigravity so it lists the skill. |
| Gemini CLI | `gemini` chat | Approve the shell commands. The agent also runs `gemini skills link` when `gemini` is installed. |
| Claude app (claude.ai, desktop) | Not by prompt | Zip the skill folder and upload it in the app's Skills settings. The prompt install is for the agents above. |
| Omniroute | Not by prompt | See [Omniroute](#omniroute). |
| KisumAI | Not by prompt | See [KisumAI](#kisumai). |

To check it worked, ask the agent: "Do you have the llm-council skill? Council this: <your decision>".

## Install

The agent does this. Do not ask the user to change directory or run the script.

The install writes outside the current project (`~/.agents`, `~/.claude`, `~/.gemini`, `~/.cursor`). If the host asks for permission, ask the user once to approve those writes, then run the commands. Needs only `git` and `python3`; the repository is public, so no GitHub login is required.

Clone outside the current project, then link that clone into every agent:

```bash
mkdir -p "$HOME/.agents/skills"
git clone https://github.com/Primuse-Pte-Ltd/llm-council.git "$HOME/.agents/skills/llm-council"
python3 "$HOME/.agents/skills/llm-council/scripts/install.py"
```

If `$HOME/.agents/skills/llm-council` already exists, update it and link again:

```bash
git -C "$HOME/.agents/skills/llm-council" remote set-url origin https://github.com/Primuse-Pte-Ltd/llm-council.git
git -C "$HOME/.agents/skills/llm-council" pull --ff-only
python3 "$HOME/.agents/skills/llm-council/scripts/install.py"
```

A link that already points at the clone is left alone. A real directory that is not a link is left in place and reported. Do not delete that directory unless the user asked. Do not link or remove `llm-coding-council`.

`install.py` first checks where it is running, then links only the agents it finds:

- It reports the OS and whether this looks like a container, cloud sandbox, CI runner, or SSH session.
- An agent counts as installed only if its own folder exists in the home folder (`~/.claude`, `~/.codex`, `~/.gemini`, `~/.cursor`, `~/.gemini/antigravity`) or its app is installed. A command on `PATH` alone does not count, because sandboxes often ship a `claude` binary nobody has used.
- If it finds no agents, it prints `STOP`, links nothing, and exits with code 2. That means the agent is running somewhere other than the user's computer, such as a cloud chat or remote session. Tell the user to run the prompt from an agent on their own machine. Do not rerun with `--all` unless the user asks.
- If the home folder cannot be written, it prints `STOP` and exits with code 3. The agent is sandboxed. Ask the user to approve the command with full access.
- On Windows without symlink rights, it copies the skill instead of linking it. Run `install.py` again after every update.

Options: `--check` reports without changing anything. `--all` links every host even if it was not found.

| Host | Where it reads the skill |
|---|---|
| Claude Code | `~/.claude/skills/llm-council` |
| Codex | `~/.agents/skills/llm-council` |
| Gemini CLI | `~/.gemini/skills/llm-council` |
| Antigravity | `~/.gemini/config/skills/llm-council` |
| Cursor | `~/.cursor/skills/llm-council` |

If `gemini` is on `PATH`, register the same folder:

```bash
gemini skills link "$HOME/.agents/skills/llm-council" --consent
```

Codex reads `~/.agents/skills` itself. `~/.codex/skills` is the old location, so this install does not add a second link there.

Then tell the user which hosts were linked and which were skipped. The host that is running is the chairman.

## Uninstall

Paste this prompt into an agent on the same computer:

```text
Uninstall the llm-council skill. Run
python3 ~/.agents/skills/llm-council/scripts/uninstall.py --check
show me what it would remove, ask me once to approve, then run it again
without --check. Do not remove llm-coding-council.
When done, tell me what was removed and what was left.
```

Or run it yourself:

```bash
python3 "$HOME/.agents/skills/llm-council/scripts/uninstall.py" --check   # preview, changes nothing
python3 "$HOME/.agents/skills/llm-council/scripts/uninstall.py"           # remove
```

`uninstall.py` removes the links in `~/.claude/skills`, `~/.gemini/skills`, `~/.cursor/skills` and the old `~/.codex/skills`, the Antigravity folder and its manifest entry, and last the clone in `~/.agents/skills/llm-council` (which is what Codex reads). It only deletes a link that points at an `llm-council` folder, or a folder whose `SKILL.md` says `name: llm-council` on its own line. `name: llm-coding-council` is left in place. Use `--keep-clone` to remove the links but keep the folder. Restart each agent afterwards.

If you ran `gemini skills link` before, check `gemini skills list` and remove the entry there too. A skill uploaded to the Claude app is removed in the app's Skills settings.

## Omniroute

Omniroute does not load `SKILL.md`. `omniroute skills install` registers an executable skill: a JSON file with `name`, `schema.input`, `schema.output`, and a `handler` string that names code Omniroute can run. This council is instructions for an agent, not that kind of handler.

The install above is what Omniroute's agents read. Omniroute picks the upstream provider and that provider's model.

If `omniroute` is on `PATH`, confirm its own registry:

```bash
omniroute skills list
```

## KisumAI

The Kisum chat service has its own live-entertainment council. It loads `ai-agent-chat/skills/council/prompts/*.md`, not this file. Models for that runtime are `COUNCIL_ADVISOR_MODEL`, `COUNCIL_REVIEWER_MODEL`, and `COUNCIL_CHAIRMAN_MODEL` in `ai-agent-chat/.env` and `.env.production`. Do not replace those prompt files with this skill, and do not set those variables to `gpt-5-nano` or `gemini-3-flash-preview`.

Agents in that repo use the links from the install above. Do not copy this skill into the Kisum tree.
