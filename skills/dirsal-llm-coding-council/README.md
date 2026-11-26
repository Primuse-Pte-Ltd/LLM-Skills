# LLM Coding Council

This council is for code and systems: an architecture, an API, a schema, a migration, a production change, or a security review of code. Product bets, prices, hires, positioning, and pivots are out of scope. The protocol is `SKILL.md`. The working team drafts the plan, the ledger lists every option, mistake, and bug, and six seats judge it. The consult script, the dashboard, and the OpenCode runner are in this repository: `scripts/query_llms.py`, `scripts/dashboard/`, and `opencode/`.

The source is the skills repository, not a path inside someone's project and not a repository of its own:

```
https://github.com/Primuse-Pte-Ltd/LLM-Skills
```

This skill is the `skills/dirsal-llm-coding-council` folder in that repository.

## Native multi-model integration

The preferred cross-model path uses Claude Code (`opus`), Codex (`gpt-5.6-sol`) and Antigravity (`gemini-4-neon-high`) directly, with explicit models to preserve independence. `scripts/native_council.py` runs parallel independent reviews, then an optional anonymous critique round. The existing six-lens council and verdict remain available. The runner uses existing CLI authentication, not automatic API fallback. See [Native Council](references/native-council.md) for approval, permissions, tests, CLI commands and the 4D integration contract. Gemini CLI is not used for the native council. Existing dashboard/OpenCode/API modes remain opt-in and subject to policy.

## Update from this ZIP (operator-owned)

1. Keep a recoverable copy of the current canonical skill and its local configuration outside the replacement directory. Never overwrite a live installation during an active council. Preserve private `.env` files locally, not in this ZIP or a public repository.
2. Extract the ZIP to a staging folder. Compare the delivered files with the current canonical folder `~/.agents/LLM-Skills/skills/dirsal-llm-coding-council`; replace the skill files there only after approval. Do not create another checkout or pull over the delivered files. The operator owns any Git operations; the agents do not run them under a zero-Git policy.
3. Preview the existing installer with `python3 ~/.agents/LLM-Skills/skills/dirsal-llm-coding-council/scripts/install.py --check`. Existing shared symlinks should continue to work. Run the installer only if required and approved; Antigravity IDE copies may need refresh. It now avoids new duplicate Gemini links by default. A real conflicting directory must be examined, not removed automatically.
4. Run `python3 ~/.agents/LLM-Skills/skills/dirsal-llm-coding-council/scripts/native_council.py --probe`. Then follow the permission and model checks in the native reference before sending private code. Do not assume the successful probe proves read-only isolation.

Offline verification: `python3 -m unittest discover -s tests -v` from the skill folder. Tests use fake CLI processes only, never provider accounts. See CHANGELOG for delivery scope.

## New installation / host registration

The operator obtains the canonical skill from the existing LLM-Skills checkout or an approved ZIP. Do not ask an agent to clone or pull when Git is prohibited. Ensure `~/.agents/skills/dirsal-llm-coding-council` points to the canonical skill directory; verify it is not an independent copy before replacing anything. The existing local installer discovers installed hosts and links only those it finds. First run `scripts/install.py --check` and review the results. If approved, run `scripts/install.py` from the canonical skill. `--all` links even undetected hosts; only use if specifically authorized. `--legacy-gemini-link` is for older Gemini clients that truly require their own link; modern Gemini discovers the shared directory. `--cleanup-legacy` permits the original old-name cleanup; review paths and backups first. Real conflicting folders are reported rather than silently replaced. Do not touch the separate `dirsal-llm-council` skill.

| Host | Discovery location |
|---|---|
| Claude Code | `~/.claude/skills/dirsal-llm-coding-council` |
| Codex | `~/.agents/skills/dirsal-llm-coding-council` |
| Gemini CLI | shared `~/.agents/skills/`; legacy link only when explicitly required |
| Antigravity IDE | `~/.gemini/config/skills/dirsal-llm-coding-council` (existing installer layout; CLI discovery must be checked separately) |
| Cursor | `~/.cursor/skills/dirsal-llm-coding-council` |

The CLI runner does not depend on the child hosts loading this skill: it sends a bounded review prompt. For use of this skill directly within a host, restart the host and check discovery. Anthropic's app upload and the optional Omniroute/KisumAI paths are separate; a cloud chat cannot execute the local CLI runner. On Windows, symlink fallbacks may copy files; verify updated content before use. No secret files are intentionally linked/copied by the installer.

## Uninstall

Paste this prompt into a coding agent on the same computer:

```text
Uninstall the dirsal-llm-coding-council skill. Run
python3 ~/.agents/skills/dirsal-llm-coding-council/scripts/uninstall.py --check
show me what it would remove, ask me once to approve, then run it again
without --check. When done, tell me what was removed and what was left.
```

Or run it yourself:

```bash
python3 "$HOME/.agents/skills/dirsal-llm-coding-council/scripts/uninstall.py" --check   # preview, changes nothing
python3 "$HOME/.agents/skills/dirsal-llm-coding-council/scripts/uninstall.py"           # remove
```

`uninstall.py` removes the links in `~/.claude/skills`, `~/.gemini/skills`, `~/.cursor/skills` and the old `~/.codex/skills`, the Antigravity folder and its manifest entry, and last the symlink in `~/.agents/skills/dirsal-llm-coding-council` (which is what Codex reads). It also removes the same links and Antigravity folder under the old name, `llm-coding-council`. It only deletes a link that points at this skill (or a missing folder of the same name), or a folder whose `SKILL.md` says `name: dirsal-llm-coding-council` or `name: llm-coding-council`. `dirsal-llm-council` is a different skill and is left in place. It does not delete `~/.agents/LLM-Skills`. Use `--keep-clone` to remove the links but keep the symlink. Restart each agent afterwards.

If you ran `gemini skills link` before, check `gemini skills list` and remove the entry there too. A skill uploaded to the Claude app is removed in the app's Skills settings.

## Omniroute

Omniroute does not load `SKILL.md`. `omniroute skills install` registers an executable skill: a JSON file with `name`, `schema.input`, `schema.output`, and a `handler` string that names code Omniroute can run. This council is instructions for an agent, not that kind of handler.

The install above is what Omniroute's agents read. Omniroute picks the upstream provider and that provider's model. The optional HTTP compatibility path is explicitly authorized and uses operator-selected API model IDs, not Omniroute routes.

If `omniroute` is on `PATH`, confirm its own registry:

```bash
omniroute skills list
```

## KisumAI

The Kisum chat service has its own live-entertainment council. It loads `ai-agent-chat/skills/council/prompts/*.md`, not this file. Models for that runtime are `COUNCIL_ADVISOR_MODEL`, `COUNCIL_REVIEWER_MODEL`, and `COUNCIL_CHAIRMAN_MODEL` in `ai-agent-chat/.env` and `.env.production`. Do not replace those prompt files with this skill, and do not set those variables to `gpt-5-nano` or `gemini-3-flash-preview`.

Coding agents in that repo use the links from the install above. Do not copy this skill into the Kisum tree.
