# Ask the other agents

Default independent seats are Claude Code, OpenAI Codex and Google Antigravity running Gemini. The host remains chairman. Use `scripts/native_council.py` and [native-council.md](native-council.md) for commands, exact permissions caveats, model configuration and the two-round JSON contract. The native runner is the only automated seat path for the 4D program. It does not silently use HTTP APIs or the retired individual Gemini CLI access path.

| Seat | CLI | Default requested model |
|---|---|---|
| Claude | `claude -p` | `opus` |
| Codex | `codex exec` | `gpt-5.6-sol` |
| Antigravity | `agy` headless | `gemini-4-neon-high` |

Model flags, read-only requests, process management and output parsing are centralized in the runner. Do not bypass the runner by calling ad hoc shell commands during a council. Do not use auto mode or dangerous permission flags. A missing or failed seat stays missing; a lens from the chairman is not an independent provider. The other installed agents (Cursor, Gemini CLI for accounts that still support it) may act as hosts, not automatic independent seats. Do not assume the host's model family from its app name.

## Optional pair consult / HTTP API compatibility

`query_llms.py` remains the two-seat compatibility entrypoint. It invokes the same native runner for Codex and Antigravity and returns `chatgpt` and `gemini` objects with model, source, status and response. It no longer attempts `codex -p`, retired individual Gemini CLI, or silent paid fallback.

```bash
python3 scripts/query_llms.py --approved-context "<approved non-secret question>"
```

Explicit paid HTTP mode is separately available for authorized, non-secret context. Export `OPENAI_API_KEY`, `GEMINI_API_KEY`, `OPENAI_MODEL`, and `GEMINI_MODEL` in the operator's shell using current provider-supported IDs. No automatic dotenv reading, no default model IDs, no keys in the question or transcript. Only after explicit approval of API billing and sharing:

```bash
python3 scripts/query_llms.py --api --approved-context "<approved non-secret question>"
```

Do not use HTTP mode for 4D unless the operator explicitly changes the program's provider policy. The dashboard, OpenCode and external `the-llm-council` remain optional legacy instruments; they are not substitutes for required independent native seats. Never use a worktree/Git or API-backed instrument where the governing rules prohibit it.
