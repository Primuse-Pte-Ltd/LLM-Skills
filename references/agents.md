## Ask the other agents

The council seats are the installed agents, not a fixed OpenAI plus Gemini pair. A model id from one agent is invalid on the others. `gpt-5-nano` is an OpenAI API id. `gemini-3-flash-preview` is a Gemini API id. Claude will not accept either. Cursor, Codex, and Antigravity will not accept a Gemini id. KisumAI does not read either variable.

Leave the model flag off unless the user named a model for that agent. The omitted flag uses the model that agent is already configured to run. If you pass a model, pass that agent's own id, from that agent's list command.

| Agent | Ask, read-only | Model flag | Where the ids come from |
|---|---|---|---|
| Claude | `claude -p --bare --output-format text` | `--model` | Alias `fable`, `opus`, `sonnet`, or a full Claude name such as `claude-fable-5` |
| Codex | `codex exec --ephemeral --skip-git-repo-check -s read-only` | `-m` | The model configured in Codex. `codex exec -m <id>` |
| Gemini | `gemini -p --approval-mode plan --output-format text` | `-m` | A Gemini model id. `gemini -m <id>` |
| Antigravity | `agy --print --mode plan` | `--model` | `agy models` |
| Cursor | `agent -p --mode ask --output-format text` | `--model` | `agent --list-models`. Examples the CLI documents: `gpt-5`, `sonnet-4`, `sonnet-4-thinking` |

Do not add `--dangerously-skip-permissions`, `--yolo`, `--force`, or `--dangerously-bypass-approvals-and-sandbox`. Those flags let a member edit the machine. The council only needs the judgment.

Run the members you have, in parallel. Name any member that is not installed. Then you are the chairman: ledger, anonymous review, verdict. Attribute a claim to the agent that said it ("Claude: …", "Cursor: …"), not to a model family that agent does not run.

### OpenAI and Gemini HTTP APIs

Use this only when the user wants those two APIs and the agent CLIs above are not the seats. The script is `scripts/query_llms.py` in this skill. Run it from the skill directory, the folder that contains this file. It prefers the `codex` and `gemini` CLIs, then falls back to the APIs. It prints JSON with `chatgpt` and `gemini` objects (`model`, `source`, `response`). It imports `requests`. If that import fails, `python3 -m pip install requests` once, then rerun.

```bash
python3 scripts/query_llms.py "<framed question>"
```

When the CLIs are absent and the user still wants the HTTP APIs, put this in the working directory as `.env`. Never commit it. Never paste the keys into chat or into the task.

```
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=...
OPENAI_MODEL=gpt-5-nano
GEMINI_MODEL=gemini-3-flash-preview
```

Keys: https://platform.openai.com/api-keys and https://aistudio.google.com/app/apikey.

These ladders are API ids only. They are not the model list for Claude, Codex, Cursor, Antigravity, Omniroute, or KisumAI.

OpenAI API, lower capability to higher: `gpt-5-nano`, `gpt-5-mini`, `gpt-5.2`, `gpt-5.2-pro`.
Gemini API, lower to higher: `gemini-2.5-flash-lite`, `gemini-2.5-flash`, `gemini-3-flash-preview`, `gemini-3-pro-preview`.

Do not invent current prices. If cost matters, check that provider's pricing page before a heavier API model.

A direct test of the script, from the skill directory:

```bash
python3 scripts/query_llms.py "Test prompt"
```

Success is JSON with both responses. An error string inside a seat means that seat dropped. If both error, say so and run the lens council on this agent.
