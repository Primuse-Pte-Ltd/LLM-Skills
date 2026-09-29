> **Note:** This repository is the working collection of skills for Claude, Codex, Gemini, Cursor, Antigravity, Omniroute, and KisumAI. For information about the Agent Skills standard, see [agentskills.io](http://agentskills.io).

# Skills
Skills are folders of instructions, scripts, and resources that an agent loads dynamically to improve performance on specialized tasks. Skills teach the agent how to complete specific tasks in a repeatable way, whether that's creating documents with your company's brand guidelines, analyzing data using your organization's specific workflows, or automating personal tasks.

These skills are written for:

- **Claude** (Claude Code, Claude.ai, and the Claude API)
- **Codex**
- **Gemini**
- **Cursor**
- **Antigravity**
- **Omniroute**
- **KisumAI**

The same skill folder works across those hosts. Each host loads it from its own skills directory and runs it on that host's model.

# Install every skill in every agent

## Install with a prompt

Paste this prompt into any coding agent. One install links every skill in [`skills/`](./skills) into every agent installed on that computer, so you only need to run it once per computer. Run it from an agent on your own computer, not from a cloud chat: the script checks this and stops if it finds no agents.

```text
Install all the skills from https://github.com/Primuse-Pte-Ltd/LLM-Skills
into every agent on this computer.
Follow the "Install" section of its README.md exactly:
clone https://github.com/Primuse-Pte-Ltd/LLM-Skills.git to ~/.agents/LLM-Skills
(or pull if that checkout already exists), then run
python3 ~/.agents/LLM-Skills/scripts/install.py.
This writes outside the current project; ask me once to approve, then continue.
The script checks where it is running first. If it prints STOP, do not work
around it: tell me what it found and what I should do.
When done, tell me which agents were linked, which were skipped, and any
skill the script reported as skipped or left in place.
```

| Host | Where to paste it | Notes |
|---|---|---|
| Claude Code | Terminal or IDE chat | Approve the shell commands when asked. Start a new session so the skills load. |
| Codex | Codex CLI or IDE chat | Codex may run commands in a sandbox that cannot write to `~`. Approve the command or allow full access for this step. Restart Codex after. |
| Cursor | Agent chat (Agent mode, not Ask) | Approve the terminal commands. Reload the window after. |
| Antigravity | Agent panel | Approve the terminal commands. Restart Antigravity so it lists the skills. |
| Gemini CLI | `gemini` chat | Approve the shell commands. The agent also runs `gemini skills link` for each skill when `gemini` is installed. |
| Claude app (claude.ai, desktop) | Not by prompt | Zip each skill folder and upload it in the app's Skills settings. The prompt install is for the agents above. |
| Omniroute | Not by prompt | See [Omniroute and KisumAI](#omniroute-and-kisumai). |
| KisumAI | Not by prompt | See [Omniroute and KisumAI](#omniroute-and-kisumai). |

To check it worked, ask the agent: "Which dirsal skills do you have?"

To update later, paste the same prompt again. It pulls the latest version and links again, including any skill added since the last install.

## Install

The agent does this. Do not ask the user to clone the repo, change directory, or run the script.

The install writes outside the current project (`~/.agents`, `~/.claude`, `~/.gemini`, `~/.cursor`). If the host asks for permission, ask the user once to approve those writes, then run the commands. Needs only `git` and `python3`. The repository is public, so no GitHub login is required.

Clone the repository once, outside the current project, then link every skill into every agent:

```bash
mkdir -p "$HOME/.agents"
if [ ! -d "$HOME/.agents/LLM-Skills/.git" ]; then
  git clone https://github.com/Primuse-Pte-Ltd/LLM-Skills.git "$HOME/.agents/LLM-Skills"
else
  git -C "$HOME/.agents/LLM-Skills" pull --ff-only
fi
python3 "$HOME/.agents/LLM-Skills/scripts/install.py"
```

Do not clone this repository into `~/.agents/skills` or any agent's skills folder. The repository root is not a skill; the script links each folder in `skills/` on its own.

`scripts/install.py` first checks where it is running, then links only the agents it finds:

- It reports the OS and whether this looks like a container, cloud sandbox, CI runner, or SSH session.
- An agent counts as installed only if its own folder exists in the home folder (`~/.claude`, `~/.codex`, `~/.gemini`, `~/.cursor`, `~/.gemini/antigravity`) or its app is installed. A command on `PATH` alone does not count, because sandboxes often ship a `claude` binary nobody has used.
- If it finds no agents, it prints `STOP`, links nothing, and exits with code 2. That means the agent is running somewhere other than the user's computer, such as a cloud chat or remote session. Tell the user to run the prompt from a coding agent on their own machine. Do not rerun with `--all` unless the user asks.
- If the home folder cannot be written, it prints `STOP` and exits with code 3. The agent is sandboxed. Ask the user to approve the command with full access.
- On Windows without symlink rights, it copies each skill instead of linking it. Run `install.py` again after every update.

Options: `--check` reports without changing anything. `--all` links every host even if it was not found.

Every folder in `skills/` that has a `SKILL.md` is linked, so a new skill is picked up on the next run. For the agents it finds, the script creates these links, one per skill:

| Host | Where it reads each skill |
|---|---|
| Claude Code | `~/.claude/skills/<skill-name>` |
| Codex | `~/.agents/skills/<skill-name>` |
| Gemini CLI | `~/.gemini/skills/<skill-name>` |
| Antigravity | `~/.gemini/config/skills/<skill-name>` (a real folder with a copied `SKILL.md` and links to the rest, because Antigravity skips symlinked skill folders) |
| Cursor | `~/.cursor/skills/<skill-name>` |

A link that already points at the skill is left alone. A real folder that already exists under the same name is left in place and reported. Nothing that isn't a link into this checkout is overwritten.

If `gemini` is on `PATH`, register each skill too:

```bash
for d in "$HOME/.agents/LLM-Skills/skills"/*/; do gemini skills link "$d" --consent; done
```

Codex reads `~/.agents/skills` itself. `~/.codex/skills` is the old location, so this install does not add a second link there, and it removes old links it left there.

Several skills were renamed with a `dirsal-` prefix (for example `llm-council` is now `dirsal-llm-council`). The script removes links left under those old names, but only when they point into an LLM-Skills checkout. An unrelated skill that shares an old name, such as another `frontend-design`, is never touched.

Then tell the user which hosts were linked and which were skipped.

`dirsal-llm-council` and `dirsal-llm-coding-council` also ship their own installer, for installing just that one skill. Their `README.md` files document it. Both installers create the same links, so using both is safe.

## Uninstall

Paste this prompt into a coding agent on the same computer:

```text
Uninstall all the LLM-Skills skills. Run
python3 ~/.agents/LLM-Skills/scripts/uninstall.py --check
show me what it would remove, ask me once to approve, then run it again
without --check. When done, tell me what was removed and what was left.
```

Or run it yourself:

```bash
python3 "$HOME/.agents/LLM-Skills/scripts/uninstall.py" --check   # preview, changes nothing
python3 "$HOME/.agents/LLM-Skills/scripts/uninstall.py"           # remove
```

`scripts/uninstall.py` removes, for every skill in `skills/` and its old name, the links in `~/.agents/skills`, `~/.claude/skills`, `~/.gemini/skills`, `~/.cursor/skills` and the old `~/.codex/skills`, plus the Antigravity folders and their manifest entries. It only deletes links that point into an LLM-Skills checkout, and Antigravity folders whose `SKILL.md` names one of these skills. It leaves the checkout at `~/.agents/LLM-Skills` in place; delete it yourself afterwards if you want. Restart each agent afterwards.

If you ran `gemini skills link` before, check `gemini skills list` and remove those entries there too. A skill uploaded to the Claude app is removed in the app's Skills settings.

For more information, check out:
- [What are skills?](https://support.claude.com/en/articles/12512176-what-are-skills)
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Equipping agents for the real world with Agent Skills](https://anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

# About This Repository

This repository contains the skills we maintain for the agents above. These skills range from creative applications (art, music, design) to technical tasks (testing web apps, MCP server generation) to enterprise workflows (communications, branding, etc.).

Each skill is self-contained in its own folder with a `SKILL.md` file containing the instructions and metadata the agent uses. Browse through these skills to get inspiration for your own skills or to understand different patterns and approaches.

Many skills in this repo are open source (Apache 2.0). The document creation and editing skills live in [`skills/docx`](./skills/docx), [`skills/pdf`](./skills/pdf), [`skills/pptx`](./skills/pptx), and [`skills/xlsx`](./skills/xlsx). These are source-available, not open source, and are included as a reference for more complex skills used in production.

## Disclaimer

**These skills are provided for demonstration and educational purposes only.** Behavior can differ by host: Claude, Codex, Gemini, Cursor, Antigravity, Omniroute, and KisumAI each load skills in their own way, and the result you get may differ from what a skill describes. These skills are meant to illustrate patterns and possibilities. Always test skills thoroughly in your own environment before relying on them for critical tasks.

# Skill Sets
- [./skills](./skills): Skill examples for Creative & Design, Development & Technical, Enterprise & Communication, and Document Skills
- [./spec](./spec): The Agent Skills specification
- [./template](./template): Skill template

# Use with Claude, Codex, Gemini, Cursor, Antigravity, Omniroute, and KisumAI

To install everything at once, use [Install every skill in every agent](#install-every-skill-in-every-agent). To install a single skill by hand, point the host at the skill folder (or a copy of it). After it is installed, mention the skill by name.

| Host | Where it reads skills |
|---|---|
| Claude Code | `~/.claude/skills/<skill-name>` |
| Codex | `~/.agents/skills/<skill-name>` |
| Gemini | `~/.gemini/skills/<skill-name>` |
| Cursor | `~/.cursor/skills/<skill-name>` |
| Antigravity | `~/.gemini/config/skills/<skill-name>` |
| Omniroute | Does not load `SKILL.md` directly. Agents behind Omniroute use the install paths above. `omniroute skills install` is for executable handler skills, not these instruction folders. |
| KisumAI | Coding agents in that environment use the install paths above. KisumAI chat runtimes load their own prompt files and are not a drop-in for `SKILL.md`. |

A skill that ships its own installer (for example `dirsal-llm-council` and `dirsal-llm-coding-council`) documents the exact prompt and link steps in that skill's `README.md`. Follow that file when it exists.

## Claude Code
You can register this repository as a Claude Code Plugin marketplace by running the following command in Claude Code:
```
/plugin marketplace add anthropics/skills
```

Then, to install a specific set of skills:
1. Select `Browse and install plugins`
2. Select `anthropic-agent-skills`
3. Select `document-skills` or `example-skills`
4. Select `Install now`

Alternatively, directly install either Plugin via:
```
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

After installing the plugin, you can use the skill by just mentioning it. For instance, if you install the `document-skills` plugin from the marketplace, you can ask Claude Code to do something like: "Use the PDF skill to extract the form fields from `path/to/some-file.pdf`"

## Claude.ai

To use any skill from this repository or upload custom skills, follow the instructions in [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude#h_a4222fa77b).

## Claude API

You can upload these skills, and use pre-built skills, via the Claude API. See the [Skills API Quickstart](https://docs.claude.com/en/api/skills-guide#creating-a-skill) for more.

## Codex, Gemini, Cursor, and Antigravity

Copy or symlink the skill folder into the host path in the table above, then start a new session so the agent reloads its skills. Codex reads `~/.agents/skills`. Cursor reads `~/.cursor/skills`. Gemini reads `~/.gemini/skills`. Antigravity reads `~/.gemini/config/skills`.

## Omniroute and KisumAI

Omniroute routes a request to an upstream agent. That agent is what loads `SKILL.md`, from the Claude, Codex, Gemini, Cursor, or Antigravity path already installed on the machine. KisumAI coding agents do the same. A KisumAI chat service that keeps its own prompt files does not replace those files with a skill folder from this repo.

# Creating a Basic Skill

Skills are simple to create - just a folder with a `SKILL.md` file containing YAML frontmatter and instructions. You can use the **template-skill** in this repository as a starting point:

```markdown
---
name: my-skill-name
description: A clear description of what this skill does and when to use it
---

# My Skill Name

[Add your instructions here that the agent will follow when this skill is active]

## Examples
- Example usage 1
- Example usage 2

## Guidelines
- Guideline 1
- Guideline 2
```

The frontmatter requires only two fields:
- `name` - A unique identifier for your skill (lowercase, hyphens for spaces)
- `description` - A complete description of what the skill does and when to use it

The markdown content below contains the instructions, examples, and guidelines that the agent will follow. For more details, see [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills).

# Partner Skills

Skills are a great way to teach these agents how to get better at using specific pieces of software. As we see awesome example skills from partners, we may highlight some of them here:

- **Notion** - [Notion Skills for Claude](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0)
