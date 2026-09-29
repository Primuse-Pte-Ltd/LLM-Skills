## CLI council — the-llm-council

Use this when the working team should be real models instead of sub-agents. The roles are the same ones in `subagents/`. The package runs parallel drafts, adversarial critique, and a validated synthesis. Fold that JSON into the Council Brief, then convene the six seats unless the user asked only for the CLI output. If the JSON is generic, rerun once with a tighter task that includes the discipline, the criteria, and the files.

Install once:

```bash
pip install "the-llm-council>=0.5.0"
pip install "the-llm-council[anthropic,openai,google]"
council doctor
```

`command not found: council` means the package is not installed. `council doctor` checks providers. `council config` prints the active setup. `council run <subagent> "<task>" --verbose` when a run fails. `--no-artifacts` skips stored artifacts when speed matters.

One key is enough. OpenRouter is the path that reaches every model. Direct provider keys also work. Never put a key in the task text, the skill, or the transcript.

| Variable | Provider |
|---|---|
| `OPENROUTER_API_KEY` | All models through one key. Preferred. |
| `OPENAI_API_KEY` | GPT directly |
| `ANTHROPIC_API_KEY` | Claude directly |
| `GOOGLE_API_KEY` or `GEMINI_API_KEY` | Gemini directly |

```bash
export OPENROUTER_API_KEY="..."
export COUNCIL_MODELS="anthropic/claude-3.5-sonnet,openai/gpt-4o,google/gemini-pro"
council run drafter --mode arch "Design a caching layer for this API" \
  --models "anthropic/claude-3.5-sonnet,openai/gpt-4o,google/gemini-pro" --json
```

Optional packs: `COUNCIL_MODEL_FAST` for short classifications, `COUNCIL_MODEL_REASONING` for hard analysis, `COUNCIL_MODEL_CODE` for generation, `COUNCIL_MODEL_CRITIC` for the adversarial pass. Optional file `~/.config/llm-council/config.yaml`:

```yaml
providers:
  - name: openrouter
    api_key: ${OPENROUTER_API_KEY}
    default_model: anthropic/claude-3-opus
defaults:
  providers:
    - openrouter
  timeout: 120
  max_retries: 3
  summary_tier: actions
```

```bash
council run <subagent> "<task>" --json
```

| Flag | Effect |
|---|---|
| `--mode` | `impl`, `arch`, or `test` on drafter. `review` or `security` on critic. `plan` or `assess` on planner. |
| `--json` | Structured JSON. Use it. |
| `--verbose`, `-v` | Provider and timing log |
| `--models`, `-m` | Comma-separated model IDs for this run |
| `--providers`, `-p` | Comma-separated providers |
| `--no-artifacts` | Do not store artifacts |

If the right subagent is unclear, start with the router. It returns `task_type`, `recommended_subagent`, `complexity` (`simple`, `moderate`, `complex`), `reasoning`, `alternative_subagents`, and `confidence` from 0 to 1.

```bash
council run router "Should we use Redis or Memcached for this cache?" --json
```

A `simple` classification with high confidence is a signal to skip the council and just do the work. Honor that.

| Command | What a finished result contains |
|---|---|
| `drafter --mode impl` | Production feature, non-trivial bugfix, or refactor. `implementation` (files and changes), `rationale`, `test_plan`, `edge_cases`, `dependencies`, `confidence`. |
| `drafter --mode arch` | System design. `architecture`, `api_schema`, `data_models`, `technology_choices` with a rationale, `tradeoffs`, `implementation_phases`, `confidence`. |
| `drafter --mode test` | `test_strategy`, `test_scenarios` with inputs and expected results, `coverage_analysis`, `edge_cases`, `test_implementation_guide`, `confidence`. |
| `critic --mode review` | Findings first. Each finding has severity, CWE ID when it is a security defect, location, and message. Also `security_summary`, `complexity_flags`, `test_coverage_gaps`, `positive_findings`, `confidence`. |
| `critic --mode security` | Threat model: actors, attack surface, missing controls, CWE IDs, prioritized fixes, residual risk, `confidence`. Enough detail to fix the system. Not a procedure for exploiting it. |
| `planner --mode plan` | `phases` with objectives, tasks, and dependencies; `critical_path`; `parallelizable_work`; `risk_mitigation`; `rollback_plan`; `success_criteria`; `confidence`. |
| `planner --mode assess` | Build vs buy, go / no-go, or a scored vendor choice. `decision_question`, `options` with scores, pros, cons, costs, and risks; `evaluation_criteria` with weights; `recommendation`; `sensitivity_analysis`; `next_steps`; `confidence`. |
| `researcher` | `executive_summary`, `findings`, `tradeoff_matrix`, `recommendations` with rationale, `citations` with titles and URLs, `confidence`. A citation without a real URL is a defect. Mark it and do not repeat it as fact. |
| `synthesizer` | Merge and finalize earlier council outputs into one result. |
| `shipper` | Release notes, version, breaking changes with a migration, deployment notes, rollback, a short stakeholder summary. The v0.5 skill also lists `shipper` as a deprecated alias of `synthesizer`. If the CLI warns and merges instead of writing notes, follow the CLI and tell the user. |

```bash
council run drafter --mode impl "Add pagination to the users API" --json
council run critic --mode review "Review the authentication changes" --json
council run drafter --mode arch "Design a multi-tenant API with row-level security" --json
council run critic --mode security "Threat-model the OAuth implementation and list the fixes" --json
council run planner --mode plan "Plan the migration from MongoDB to PostgreSQL" --json
council run planner --mode assess "Build custom auth or use Auth0?" --json
council run researcher "Recommend an ORM for this FastAPI service" --json
council run drafter --mode test "Design tests for cursor-based pagination" --json
```

Legacy names still run and are scheduled to go away in v1.0. Prefer the current command. The old name is accepted when the user says it: `implementer` → `drafter --mode impl`, `architect` → `drafter --mode arch`, `test-designer` → `drafter --mode test`, `reviewer` → `critic --mode review`, `red-team` → `critic --mode security`, `assessor` → `planner --mode assess`. Field-level examples live in `subagents/`. There is no `synthesizer.md` in the bundle.

```python
from llm_council import Council
from llm_council.protocol.types import CouncilConfig

council = Council(config=CouncilConfig(providers=["openrouter"], mode="impl"))
result = await council.run(task="Build a login page with OAuth", subagent="drafter")
```

### How to chain a production task

Same waves as the working team. `planner --mode assess` is the assessor. `planner --mode plan` is the planner. `drafter --mode impl` is the implementer, `--mode arch` is the architect, `--mode test` is the test designer. `critic --mode review` is the reviewer. `critic --mode security` is the red team.

1. **Router.** If it says simple, do the work without a council.
2. **Wave 1.** Researcher, architect, assessor, planner, implementer, test designer. Only the roles the router kept.
3. **Wave 2.** Reviewer on every implementation. Red team when the plan touches auth, payments, PII, or infrastructure. Shipper only when something is being released. A person reads the red-team output before merge.
4. **Brief, then the six seats.** `synthesizer` may merge the JSON into one brief. A synthesis that dropped a high-severity finding is not the brief. Put the finding back. Then run the council.

Generated code is a proposal. It does not land because the council was confident. Confidence is a number in the JSON, not permission to merge.

Context is sent to external providers. Do not attach `.env` files, credentials, tokens, or customer data. Threat-model output can describe real holes in a real system. Keep it in the transcript and the chat. Do not repost it into a public place.
