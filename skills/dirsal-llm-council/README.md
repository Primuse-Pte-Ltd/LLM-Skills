# LLM Council

Six advisors analyze a general decision independently, review each other anonymously, and the current host writes a verdict. The six lenses are The User, Contrarian, First Principles, Expansionist, Outsider and Executor. This is not the Coding Council: code, architecture, APIs, schemas and production changes belong in `dirsal-llm-coding-council`.

## Native multi-model integration

Two advisors per family, six separate sessions per round, two rounds. Claude (User, Expansionist), Codex (Contrarian, Executor), and Antigravity/Gemini (First Principles, Outsider). The current host remains chairman, even if it is Cursor. Requested default models are inherited from the sibling engine (currently `opus`, `gpt-5.6-sol`, `gemini-4-neon-high`); explicit per-family overrides are supported. Gemini CLI is not required. Antigravity must request a Gemini model, never Claude. No API fallback or silent provider substitution.

The runner imports the CLI transport from the updated sibling `dirsal-llm-coding-council/scripts/native_council.py` under the canonical LLM-Skills checkout. Install that update first; missing/incompatible engine stops execution. It reuses CLI arguments, output parsing, timeouts, family validation, environment handling and the same lock across both councils. The general runner owns only its six lenses, peer review and result assembly. Python 3.10+; no extra packages. No changes to the sibling are required. The original single-host protocol remains an explicitly approved, labeled fallback when local CLIs cannot run, not a substitute for independent family review.

## Install/update on your computer

Back up the existing folder and update these files in:

```text
~/.agents/LLM-Skills/skills/dirsal-llm-council/
```

Keep `~/.agents/skills/dirsal-llm-council` linked to this canonical folder. If absent, ask the operator to approve and create the symlink; do not overwrite an existing unrelated directory or link. The updated Coding Council must sit alongside it under `skills/`. Use the already installed local files; the agents must not run Git. Do not alter the Coding Council, other skills, or environment files.

Preview agent discovery:

```bash
python3 "$HOME/.agents/LLM-Skills/skills/dirsal-llm-council/scripts/install.py" --check
```

After operator approval, run the same command without `--check` only if links need updating (in particular refresh the Antigravity IDE copy of SKILL.md). Restart hosts after updating. Installer recognizes `agy`; it does not create redundant Gemini links or clean up old names by default. Use `--legacy-gemini-link` only if an old supported Gemini client actually requires it, and `--cleanup-legacy` only after operator review of existing paths. Review any pre-existing unrelated links or real directories manually. On Windows, symlink fallback may copy the skill; refresh copies after updates. The CLI and IDE discovery paths must be verified locally; this installer does not configure MCP or CLI permissions.

| Host | Discovery path |
|---|---|
| Claude Code | `~/.claude/skills/dirsal-llm-council` |
| Codex | `~/.agents/skills/dirsal-llm-council` |
| Gemini CLI (legacy) | Shared discovery by default; optional `~/.gemini/skills/dirsal-llm-council` |
| Antigravity IDE | `~/.gemini/config/skills/dirsal-llm-council` (real SKILL.md, linked companions) |
| Cursor | `~/.cursor/skills/dirsal-llm-council` |

For Claude app/cloud hosts without local CLIs, only the explicitly approved single-host fallback is available. An uploaded skill alone does not grant local CLI access.

## Validate and run

```bash
python3 "$HOME/.agents/LLM-Skills/skills/dirsal-llm-council/scripts/native_council.py" --probe
```

The probe sends harmless markers to three CLI seats, not a full six-lens session. Before any real session, inspect provider terms, subscription/overage settings, CLI hooks, effective tools, permissions and isolation. Existing subscription authentication is reused; free or unlimited use is not guaranteed. Both councils share the same local lock; do not overlap them. No nested councils, retries, API fallback, Git, project file reading, or changes. Six calls per round may consume quota. On failure, report missing seats rather than silently substituting models.

Public, non-sensitive sample:

```bash
python3 "$HOME/.agents/LLM-Skills/skills/dirsal-llm-council/scripts/native_council.py" --approved-context --timeout 300 'Should a small business validate demand with a pilot or launch a full product immediately?'
```

For actual briefs, prefer `--stdin --approved-context` to avoid exposing text in shell history or process arguments. Obtain operator approval for the exact framed question AND for sharing peer answers among all three providers. Do not send secrets, private source, personal records or unapproved context. The runner takes no project paths or live-workspace flags. The CLI working directory is disposable; native permission flags are requests, not proof of isolation. See the sibling `references/native-council.md` for verification of local restrictions; if restrictions cannot be enforced, stop. Avoid sharing sensitive data even after a successful probe. Outputs may be sensitive too. The host should not include unapproved chat history or inspect project files.

The runner emits JSON: six `initial` records, `peer_reviews`, requested family/model and status, and `anonymous_mapping_for_chairman`. Exit 0 means all requested responses arrived, not factual verification. Exit 2 or `partial_or_blocked` means failure or incomplete review. The host reconciles evidence, uncertainty and dissent (not majority voting) using the existing SKILL.md verdict format. Anonymity is best effort. If artifact writes are approved, preserve the original HTML report and Markdown transcript format, include missing responses and requested model IDs, and escape untrusted HTML content. Otherwise deliver in chat. Do not open files without authorization.

## Uninstall

Run `scripts/uninstall.py --check` first, inspect every target, then remove only after operator approval. The original uninstaller is retained; it removes this skill's links and Antigravity registration, not the Coding Council or LLM-Skills checkout. `--keep-clone` preserves the shared discovery link. Restart hosts. Never remove other skills or the shared transport as part of this uninstall.

## Omniroute and KisumAI

Omniroute's executable skill registry is a separate system; it does not directly execute this SKILL.md. KisumAI's live-entertainment council loads `ai-agent-chat/skills/council/prompts/*.md`, not this skill. Do not change its prompts, model variables or environment files. Neither runtime is migrated by this update.
