## Dashboard — live multi-model council

Use this when the user wants to watch models side by side, vote, or compare. The server is stdlib Python. The UI is vanilla JS. No install step beyond the API key.

From the skill directory:

```bash
python3 scripts/dashboard/server.py
```

If something is already bound to the port, stop it or set `COUNCIL_PORT`. A health check after startup:

```bash
curl -s --max-time 5 http://localhost:8787/health
```

Open `http://localhost:8787`. Requires `AI_GATEWAY_API_KEY`. Requests go to `https://ai-gateway.happycapy.ai/api/v1` with a Bearer token. Model IDs use dots, not hyphens.

| Model | ID |
|---|---|
| Claude Sonnet 4.5 | `anthropic/claude-sonnet-4.5` |
| Claude Opus 4.5 | `anthropic/claude-opus-4.5` |
| GPT-4o | `openai/gpt-4o` |
| GPT-5.1 | `openai/gpt-5.1` |
| Gemini 2.5 Flash | `google/gemini-2.5-flash` |
| Gemini 2.5 Pro | `google/gemini-2.5-pro` |
| Grok 4 | `x-ai/grok-4` |
| Kimi K2.5 | `moonshotai/kimi-k2.5` |
| DeepSeek R1 | `deepseek/deepseek-r1` |

| Method | Path | What it does |
|---|---|---|
| GET | `/` | Dashboard |
| GET | `/api/models` | Model list |
| GET | `/health` | Health |
| POST | `/api/council/stream` | Parallel query, SSE, one event per model as it finishes, then `{"status":"done"}` |
| POST | `/api/council` | Same query, batch, no stream |
| POST | `/api/council/synthesize` | Agreements, divergences, a combined answer, confidence 1–10 |
| POST | `/api/council/vote` | Anonymous 1–10 scores, SSE |

Voting: each selected model scores every other response on accuracy, helpfulness, and quality, without the author's name. Labels are letters. The highest aggregate wins. The vote stream sends `: keepalive` comments about every 5 seconds so a proxy does not cut the connection (Cloudflare 524s show up when this is missing). The server is a `ThreadingHTTPServer` because the stream and the keepalive have to run together.

Files, all in this skill: `scripts/dashboard/server.py`, `scripts/dashboard/ai_gateway.py`, `scripts/dashboard/static/index.html`, `scripts/dashboard/static/app.js`. The model ids in the table above belong to that dashboard's gateway only. They are not Claude, Cursor, Codex, Antigravity, or Kisum model ids. Static files are served with `Cache-Control: no-store, no-cache`. After editing `app.js`, bump the `?v=` on the script tag in `index.html` or the browser will keep the old client.

The grid is not the verdict. When the user wants a decision, take the completed responses through Stage 2 and Stage 3 and post the chairman's verdict. The synthesis endpoint is a draft the chairman may overrule.
