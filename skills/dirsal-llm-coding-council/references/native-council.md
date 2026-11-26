# Native multi-model Coding Council

The existing six lenses, specialists, decision ledger, peer review, and chairman remain the decision protocol. This runner supplies real independent model seats using local installed CLIs, not simulated personas. No provider API fallback, package installation, Git commands, worktrees, automatic code changes, or service startup. Python 3.10+ (standard library only). Intended for personal local use under the providers' applicable terms, subscription quotas and account configuration; no guarantee of free or unlimited usage. Do not use this as a third-party authentication relay or service. Review paid overage settings in each host; the runner does not change them.

## Default seats and tested environment from operator logs

| Seat | Requested model | CLI observed |
|---|---|---|
| Claude | `opus` | 2.1.332 |
| Codex | `gpt-5.6-sol` | 0.172.0 |
| Antigravity | `gemini-4-neon-high` | 1.5.18 |

The operator's individual smoke tests worked; the exact orchestration flags, structured output and permissions still require local validation. Gemini CLI is not a default seat: the individual Code Assist account returned an unsupported-client error. Antigravity also offers Claude models; those are deliberately rejected for this seat. Model IDs are configurable (`--claude-model`, `--codex-model`, `--antigravity-model`); never silently substitute a family. Use `agy models` and the other hosts' own model lists. The result identifies requested models, not independently attested provider routing.

## Before running

1. Read and obey the current global and project rules, including the code-graph-first rule where applicable. Do not run the council recursively from a child; `DIRSAL_COUNCIL_CHILD` marks child invocations. Never run from a home/root workspace.
2. Obtain operator approval for exactly which files/brief and providers may receive private source. All three providers receive the same approved context. In round 2, they receive each other's answers too. Remove credentials, customer data, tokens, private keys, environment files and unnecessary source. A file-name exclusion is not a secret scanner. Do not use the council on data that is not authorized to leave the device. Outputs are sensitive too; do not forward or store them without approval.
3. Run `--probe` from a local terminal with no private project input. Verify the flags against each local `--help` if a seat fails. The probes do not attest filesystem isolation or MCP. Review subscription billing, hooks, plugins, CLI settings and allowed tools before any private data is sent. CLI startup may use existing settings and persist its own logs; the runner cannot police internal client behavior or billing. Common API key variables are removed from the native child environment; existing CLI authentication stays in place. Do not work around authentication or quota errors.
4. Default to evidence-only. The runner uses a disposable working directory, passes the approved question and explicit file contents by stdin, and tells reviewers not to use tools. Claude runs restricted with no built-in tools/MCP; Codex requests read-only sandbox; Antigravity requests plan plus terminal sandbox, with slash-command expansion disabled. These flags are **not a proof of full containment**. In particular, global hooks, MCP and Antigravity's pre-approved permissions may have side effects. If your policy requires technically enforced isolation, verify the local client restrictions before any real run. If not possible, do not invoke that seat on private code. The runner never loads `.env` or configures provider keys.
5. Live workspace mode is an explicit opt-in, only after the operator has verified all three clients' local permissions as below. It is not required for bounded evidence reviews. No automatic configuration edits. Do not equate an evidence-only run with a full workspace audit.

## Commands

Use the canonical location (not a second checkout). No Git operations are necessary to run.

```bash
python3 "$HOME/.agents/LLM-Skills/skills/dirsal-llm-coding-council/scripts/native_council.py" --probe
```

Evidence review, with an approved brief and explicit relative paths. Prefer an already approved private brief file to a shell argument. The brief should contain relevant verified instructions, exact business requirements and the neutral question, not the chairman's answer. Use the parent agent's approved graph discovery to select relevant consumers/tests/contracts. All file contents are sent; inspect them first.

```bash
python3 "$HOME/.agents/LLM-Skills/skills/dirsal-llm-coding-council/scripts/native_council.py" \
  --approved-context --workspace /absolute/project/path \
  --question-file /absolute/path/to/approved-brief.md \
  --evidence src/example.ts --evidence tests/example.test.ts
```

`--seats claude codex` selects two families when risk permits. `--rounds 1` performs only independent findings, useful for verification of a narrowly defined fix. Default two rounds = independent analysis, then anonymized peer critique. `--timeout 300` sets per-seat, per-round deadline (5–3600 seconds). At most six model requests with three seats and two rounds; no automatic retries, escalation or paid fallback. No simultaneous runner instances (lock in OS temp directory). If killed abruptly, inspect the recorded PID and remove a stale lock only after confirming no run is active. Output JSON goes to stdout, not to a project file. Do not pipe a sensitive report into an unauthorized log or external service.

## Live workspace mode — operator validation required

Only use `--live-verified --workspace /absolute/project/path --approved-context` once the operator confirms the following on the actual Mac and current CLI versions/configuration. It is an attestation flag, not a sandbox implementation.

- Explicitly allow read-only project discovery; deny file writes, arbitrary shell (including indirect Git), network/tools unrelated to the model call, remote agents, external connectors and unapproved MCP tools. Do not rely on plan mode alone. Verify local hooks/skills/plugins and startup behavior; a sandbox may allow workspace writes or be unsupported. Check effective rules with harmless negative tests in a disposable fixture, **not** production or active source. Verify that a permitted read succeeds and a fixture edit, arbitrary shell request, unauthorized MCP operation, and access outside approved paths fail. Do not actually run Git to test the prohibition; inspect effective command policy and startup configuration instead.
- Antigravity: inspect `~/.gemini/antigravity-cli/settings.json`; use explicit deny rules for write/command/web/other MCP as appropriate, plus plan mode. If settings cannot enforce the required restrictions, do not use live Antigravity. Never use auto or dangerous bypass flags. CLI docs: https://antigravity.google/docs/cli/reference/ and https://antigravity.google/docs/permissions/.
- Claude: live mode requests Read, Glob, Grep and plan. Review MCP/tool permission rules and hooks; only the approved graph read operations are allowed. Codex: read-only sandbox and approval never; review effective config, MCP, hooks and any shell capabilities. CLI docs: https://code.claude.com/docs/en/cli-reference and https://developers.openai.com/codex/cli/reference. No arbitrary commands are permitted by the council, even when a host sandbox would allow them.
- Verify `codebase-memory-mcp` access independently for each live reviewer where required. Index creation or mutation is not allowed inside the review. If a host cannot use the approved graph, use an operator-approved evidence pack or mark its full discovery blocked. Do not claim coverage of uninspected modules. Include canonical rules in the approved brief, confirm each host loaded applicable rules and read the same source revision; no concurrent writers. The parent must verify a comparable pre/post source manifest for the whole reviewed scope, excluding secrets; the runner only rechecks explicitly supplied evidence files.
- Ensure provider-approved authentication, no unexpected API billing or routing; do not pass API keys or tokens in prompts. Confirm all involved private files are approved, including files discovered through MCP. If any condition is not met, do not set `--live-verified`. If stricter global rules cannot be enforced, stop that seat rather than quietly downgrading safety.

## Orchestration contract for 4D and other skills

Use the runner at bounded domain level after the primary agent frames the question, but before exposing its conclusions. For independent pre-remediation review, send the original requirements and scope only. For post-remediation verification, send approved behavior, actual changed files and relevant dependents (not just the author's narrative), and actual test evidence when available. Reviewers must identify missing evidence, not approve changes based on confidence. The author does not count as independent merely because another Claude session runs.

Risk levels: normal tasks may use the lens council or no council; non-trivial cross-module/contract changes use at least one independent model family; critical auth, money, tenancy, inventory, architecture or security tasks request all three families and both rounds, unless the operator approves a different risk disposition. A failed seat is explicitly reported, never fabricated. Do not call critical review complete if required reviewers are missing. Do not auto-run full tests or implement changes from this runner. Implementation and tests remain operator-approved tasks owned by the parent agent; for 4D, follow the approved Opus/Haiku/Sonnet roles. Existing Engineering Policy wins over Ponytail or any other skill.

JSON contract: `initial[]` has seat, requested model, status, response, elapsed time, and error if applicable. `peer_reviews[]` is a second wave. `anonymous_mapping_for_chairman` stays hidden until reviewers return (anonymity is best effort, as model text can reveal its author). `evidence_manifest` lists SHA-256 only for approved files. `evidence_changed` invalidates the result. Exit 0 = all requested waves delivered; 2 = partial/blocked or input/config failure. `complete` means response collection, **not correctness or remediation completion**. The chairman must validate concrete findings against code and requirements, update the original ledger, keep dissent and decide based on evidence, not majority vote. Unresolved critical issues block approval. No automatic edits, no service startup, no Git, no deployment. The existing visual report is optional when the operator authorizes writing artifacts and opening them.
