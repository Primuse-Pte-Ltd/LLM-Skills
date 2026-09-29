# LLM Council

Six advisors answer a decision, review each other without names, and a chairman writes one verdict. The six are The User, Contrarian, First Principles, Expansionist, Outsider, and Executor. This is not the coding council. Code, architecture, APIs, schemas, and production changes belong in `dirsal-llm-coding-council`.

It runs in Claude, Codex, Gemini, Cursor, and Antigravity. The host that loaded the skill is the chairman. Each host uses its own model. Do not reuse an OpenAI model id on Claude, Cursor, Codex, Antigravity, or Gemini, and do not reuse a Gemini model id on the others.

The protocol is `SKILL.md`. A session writes two files:

- `council-report-[timestamp].html` — the page to read
- `council-transcript-[timestamp].md` — the full arguments

The council uses what the user said. It does not open project files.

## Install with a prompt

Paste this prompt into any agent. One install covers every agent installed on that computer, so you only need to run it once per computer. Run it from an agent on your own computer, not from a cloud chat: the script checks this and stops if it finds no agents.

```text
Install the dirsal-llm-council skill from https://github.com/Primuse-Pte-Ltd/LLM-Skills
(folder skills/dirsal-llm-council). It does not have its own repository.
Follow the "Install" section of skills/dirsal-llm-council/README.md exactly:
clone https://github.com/Primuse-Pte-Ltd/LLM-Skills.git to ~/.agents/LLM-Skills
(or pull if that checkout already exists), symlink
~/.agents/LLM-Skills/skills/dirsal-llm-council to ~/.agents/skills/dirsal-llm-council,
then run python3 ~/.agents/skills/dirsal-llm-council/scripts/install.py.
The skill used to be called llm-council. install.py removes links left under
that old name. Do not touch dirsal-llm-coding-council, and do not delete
~/.agents/LLM-Skills.
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

To check it worked, ask the agent: "Do you have the dirsal-llm-council skill? Council this: <your decision>".

## Install

The agent does this. Do not ask the user to change directory or run the script.

The install writes outside the current project (`~/.agents`, `~/.claude`, `~/.gemini`, `~/.cursor`). If the host asks for permission, ask the user once to approve those writes, then run the commands. Needs only `git` and `python3`. The repository is public, so no GitHub login is required.

This skill lives in [LLM-Skills](https://github.com/Primuse-Pte-Ltd/LLM-Skills), at `skills/dirsal-llm-council`. Clone that repository once, outside the current project, then symlink this folder into `~/.agents/skills`. One checkout serves every skill in the repo, including `dirsal-llm-coding-council`.

```bash
mkdir -p "$HOME/.agents/skills"
if [ ! -d "$HOME/.agents/LLM-Skills/.git" ]; then
  git clone https://github.com/Primuse-Pte-Ltd/LLM-Skills.git "$HOME/.agents/LLM-Skills"
else
  git -C "$HOME/.agents/LLM-Skills" pull --ff-only
fi
ln -sfn "$HOME/.agents/LLM-Skills/skills/dirsal-llm-council" "$HOME/.agents/skills/dirsal-llm-council"
python3 "$HOME/.agents/skills/dirsal-llm-council/scripts/install.py"
```

Do not clone this repository into `~/.agents/skills/dirsal-llm-council`. That path has to be the skill folder, and the repository root is not a skill. Do not link or remove `dirsal-llm-coding-council`.

A link that already points at this folder is left alone.

This skill was called `llm-council` before. `install.py` removes a link named `llm-council` in `~/.agents/skills`, `~/.claude/skills`, `~/.gemini/skills`, `~/.cursor/skills`, or `~/.codex/skills` when it points at this folder or at a `llm-council` folder that no longer exists. It also removes the old `llm-council` Antigravity folder and its manifest entry. A real `llm-council` directory, for example a checkout of the old standalone repo, is reported and left in place. Remove it after the user approves, or Codex loads the council twice.

`install.py` first checks where it is running, then links only the agents it finds:

- It reports the OS and whether this looks like a container, cloud sandbox, CI runner, or SSH session.
- An agent counts as installed only if its own folder exists in the home folder (`~/.claude`, `~/.codex`, `~/.gemini`, `~/.cursor`, `~/.gemini/antigravity`) or its app is installed. A command on `PATH` alone does not count, because sandboxes often ship a `claude` binary nobody has used.
- If it finds no agents, it prints `STOP`, links nothing, and exits with code 2. That means the agent is running somewhere other than the user's computer, such as a cloud chat or remote session. Tell the user to run the prompt from an agent on their own machine. Do not rerun with `--all` unless the user asks.
- If the home folder cannot be written, it prints `STOP` and exits with code 3. The agent is sandboxed. Ask the user to approve the command with full access.
- On Windows without symlink rights, it copies the skill instead of linking it. Run `install.py` again after every update.

Options: `--check` reports without changing anything. `--all` links every host even if it was not found.

| Host | Where it reads the skill |
|---|---|
| Claude Code | `~/.claude/skills/dirsal-llm-council` |
| Codex | `~/.agents/skills/dirsal-llm-council` |
| Gemini CLI | `~/.gemini/skills/dirsal-llm-council` |
| Antigravity | `~/.gemini/config/skills/dirsal-llm-council` |
| Cursor | `~/.cursor/skills/dirsal-llm-council` |

If `gemini` is on `PATH`, register the same folder:

```bash
gemini skills link "$HOME/.agents/skills/dirsal-llm-council" --consent
```

Codex reads `~/.agents/skills` itself. `~/.codex/skills` is the old location, so this install does not add a second link there.

Then tell the user which hosts were linked and which were skipped. The host that is running is the chairman.

## Uninstall

Paste this prompt into an agent on the same computer:

```text
Uninstall the dirsal-llm-council skill. Run
python3 ~/.agents/skills/dirsal-llm-council/scripts/uninstall.py --check
show me what it would remove, ask me once to approve, then run it again
without --check. Do not remove dirsal-llm-coding-council.
When done, tell me what was removed and what was left.
```

Or run it yourself:

```bash
python3 "$HOME/.agents/skills/dirsal-llm-council/scripts/uninstall.py" --check   # preview, changes nothing
python3 "$HOME/.agents/skills/dirsal-llm-council/scripts/uninstall.py"           # remove
```

`uninstall.py` removes the links in `~/.claude/skills`, `~/.gemini/skills`, `~/.cursor/skills` and the old `~/.codex/skills`, the Antigravity folder and its manifest entry, and last the symlink in `~/.agents/skills/dirsal-llm-council` (which is what Codex reads). It also removes the same links and Antigravity folder under the old name, `llm-council`. It only deletes a link that points at this skill (or a missing folder of the same name), or a folder whose `SKILL.md` says `name: dirsal-llm-council` or `name: llm-council` on its own line. `dirsal-llm-coding-council` is left in place. It does not delete `~/.agents/LLM-Skills`. Use `--keep-clone` to remove the links but keep the symlink. Restart each agent afterwards.

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
