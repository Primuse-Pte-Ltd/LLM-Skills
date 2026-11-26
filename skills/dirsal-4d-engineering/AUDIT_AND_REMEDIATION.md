# 4D Engineering — Technical Audit and Remediation

This file defines review coverage and evidence requirements; it is not permission to change production code. Apply SKILL.md and all applicable current instructions. Use all four lenses for every applicable active unit or domain, and review connected code. A review lens is not a mandatory subagent. Use tools compatible with the actual languages and existing setup; candidate tools below are not mandatory installations. Establish what each tool can and cannot prove.

## 1. Discovery, inventory and baseline
- Read global/workspace/module rules, MEMORY.md, docs, existing tests and contract sources; inspect real code before conclusions. Map active modules, services, UIs, mobile apps, shared packages, public docs, support/AI, build/deployment config and integrations. Record legacy/read-only/retired units and reasons for exclusion; active dependencies of legacy code still require review. Never edit protected legacy copies. Verify real paths and repository boundaries, not names in stale docs. Resolve canonical real paths and deduplicate symlinks without deleting them. Record missing access and code-graph index freshness.
- Identify owners, API/event/schema producers and consumers, public versus private interfaces, deployment units, languages, package managers, tool versions and existing checks. Map cross-workspace connections and deployed external clients. Inspect package-local devDependencies and scripts; global absence is not proof of local absence.
- For baseline reproducibility without Git, use UTC timestamp, canonical workspace path, skill version/content hash, per-unit scoped file manifest and SHA-256 fingerprints (relative paths + content hashes, deterministic ordering), scope/exclusions, tool versions/commands/config identity and environment description. Store reproducible aggregate digest plus safe evidence location; use per-file manifest only when needed to identify changes. Exclude credentials, sensitive data, env files, private keys, .git, caches, installed dependencies and irrelevant generated output. Include generated contract artifacts when they are audit targets. Do not hash or print secret values; record presence/risk without disclosure. Fingerprints detect change, not correctness or commit identity. Use user-supplied release IDs if available, label them as supplied; never query Git. A safe file manifest may be stored as a machine-generated evidence artifact only if useful and authorized, not another governance file. Record unavailable or unstable inputs rather than pretending a snapshot is consistent.
- Baseline metrics: builds, types, lint, tests and critical invariant coverage; clone metrics with exact scope; dead-code candidates; dependency cycles and boundary violations; security/dependency/secret findings; contract/schema checks; performance/reliability where safe. Record pre-existing failures separately. Never use grep line counts as semantic counts. Compare same tool version/config/scope or explicitly label non-comparable measurements. No production access or services started by agents.
- Pilot: select one critical workflow and its dependencies; test the audit method, prove findings, identify gaps in tooling and determine safe initial gates. Include happy, boundary, unauthorized and failure paths where applicable. No pilot findings are asserted in advance.

## 2. Drift — architecture and ownership
Review lenses: architecture discovery, module boundaries, patterns, security, data access, infrastructure, configuration, docs and independent architecture review.
- Reconstruct approved intent versus current implementation. Ownership, API boundaries, dependency directions, domain logic placement, direct private data access, cache authority, authorization/tenant checks, error handling, logging, transactions, frameworks, configuration, deployment and design-system rules. Document actual versus intended; most common or newest pattern is not automatically authoritative. Legitimate language/framework differences are not drift.
- Inspect cross-module dependencies, circular imports, private imports, internal route leakage, direct DB accesses, competing sources of truth, duplicated framework infrastructure, inconsistent build/deploy and env usage. Check documented exceptions and migration state. Use code graph before raw search.
- Tools: existing linters, dependency-cruiser/Madge for compatible JS/TS, ESLint/custom rules, Nx module boundaries only if used, Semgrep/ast-grep, SonarQube if already suitable, Go package graph/import rules, go vet, staticcheck/golangci-lint when approved, Dart/Flutter analyzer, ArchUnit/ArchUnitNET or Import Linter if relevant. Prefer graph and native checks over new frameworks. Dependency tools cannot infer correct domain ownership.
- Fix: establish approved owner and dependency directions; use existing approved patterns, public APIs and contracts; remove violations incrementally with all relevant consumers verified. Record material architectural decisions in established ADR/MEMORY format only after approval. Avoid uniformity rewrites and speculative architecture. Treat unauthorized dependencies and architecture findings with severity based on actual impact.

## 3. Duplication — exact, structural and semantic
Review lenses: clone analysis, semantic behavior, business logic, UI/design, contracts/types, dependency/package architecture, dead code and independent verification.
- Search within each unit and across connected units/workspaces for equivalent capabilities: functions, components, hooks, styles/design tokens, APIs, services, validators, DTOs, generated/manual types, translations, configuration, financial rules, authorization, inventory, lifecycle states and tests. Use symbols, call graphs, AST patterns, business concepts and consumer traces, not only matching text. Similar behavior may have different security or legal requirements. Generated artifacts, independent test fixtures, deliberately separate client architectures and bounded-context rules may be legitimate duplication.
- Tools: jscpd for exact/near textual clones; SonarQube duplication and quality if approved; Knip for JS/TS unused files/exports/dependencies with configured entry points; ast-grep/Semgrep structural patterns; dependency-cruiser/Madge; native Go/Dart analyzers; code graph and raw search fallback. None proves semantic equivalence or safe deletion. Validate tool configuration and inspect dynamic imports, routes, reflection, plugins, scripts, deployment jobs, external consumers and runtime entry points before declaring code dead. Distinguish actual unused code from unreferenced but public API or intentional fixtures.
- Consolidation hierarchy: (1) reuse existing verified canonical implementation; (2) consolidate inside owning module; (3) extend existing cohesive shared package; (4) create a new shared package only if stable reusable responsibility and real consumers justify it; (5) expose domain-owned capability through public service API/contract rather than duplicating business logic; (6) retain intentional differences where sharing creates coupling or weakens security. Select appropriate option based on ownership, not number of copies. Never move domain-specific financial, permission or inventory authority to a generic library merely because multiple consumers need it.
- Shared package proposal must distinguish algorithm from mutable policy parameters and assess effective-dated historical replay, local transaction/ACID requirements, failure semantics (fail closed where required), rollout version skew, security privilege/patch fan-out and CI/build fan-out. A shared library or monorepo does not guarantee atomic adoption; an owning API trades build coupling for runtime availability/latency and does not automatically eliminate skew. Shared specifications, conformance tests or generated artifacts may be justified where they preserve approved ownership without copying mutable authority; never use them to bypass single-owner financial/security rules. No automatic shared-service fallback or stale authorization cache. Shared package proposal must identify owner, responsibility, actual consumers, explicit public exports, dependency direction, independent tests, language/build/distribution compatibility, versioning/release strategy, deployment coupling, migration and rollback. Prefer existing UI packages, generated contract clients or owner APIs. Across separate repositories, do not assume a monorepo workspace package or symlink is a deployable solution. No new cross-product packages without explicit architectural approval. Avoid generic utils dumping grounds, unnecessary adapters and cycles. Preserve independent mobile architectures where prescribed. Do not force frontend convenience to bypass backend policy.
- Before removing an implementation, characterize behavior, prove affected callers and external compatibility, migrate all approved callers to canonical contract, verify obsolete references are gone and run relevant tests. Do not silently delete protected legacy or external compatibility code. Zero duplication is not a goal.

## 4. Degradation — correctness, quality, security and reliability
Review lenses: code quality, independent tests, security, performance, data integrity, money/business, reliability/observability, dependency health, data lifecycle and recovery.
- Identify excessive complexity, premature abstraction, unused layers, misleading names, silent errors, unsafe casts/suppressed checks, incomplete implementations, fragile retries/timeouts, resource leaks, incorrect config, race conditions, missing transactions, non-idempotent handlers, tenant leaks, vulnerable dependencies, exposed secrets, unsafe migrations and insufficient monitoring. Distinguish necessary domain complexity from overengineering. Prefer simplest correct architecture, not smallest textual patch.
- Derive approved business invariants from existing product documentation/decisions and confirmed requirements; distinguish actual behavior from intended behavior. Validate monetary exactness (integer minor units or exact decimals, currency/rounding, approved tax/fee logic), legal historical snapshots, transaction integrity, state transitions, authorization and data ownership. Do not change financial or permission behavior based on majority code. Obtain independent tests from requirements; implementation and tests written from the same mistaken assumption are not independent proof.
- Use unit, integration, E2E, negative/boundary, property-based, mutation and concurrency testing as appropriate. Include cross-tenant denial, missing permissions, invalid inputs, replay/idempotency, duplicate messages, cancellation and failure recovery. Test with safe synthetic fixtures; no live payments, production load tests or uncontrolled service starts. Run targeted diagnostic/regression tests or equivalent reproduction before fixes where technically justified; record why a pre-fix test is unnecessary or unavailable. Full applicable post-fix verification is mandatory; avoid redundant test runs. Do not weaken tests, disable warnings or change expected behavior to disguise regression. Coverage percentage is not proof of invariant coverage. Document verified test limitations.
- Tools: native Go test/vet/race detector when safe and appropriate, existing JS/TS typecheck/Vitest/Jest, Playwright if its service-start behavior is allowed, flutter analyze/test, Stryker, fast-check/Hypothesis, SonarQube, Semgrep/CodeQL, Trivy, OSV-Scanner, govulncheck, Gitleaks, package manager audit, k6, Lighthouse CI, existing query analyzers and OpenTelemetry. Select only justified compatible tools and inspect side effects, Git use, network/data disclosure and licensing. Secret scans must redact values and never use discovered credentials. On suspected exposed credential, notify owner securely; confirm via safe evidence, recommend immediate rotation/revocation, coordinate removal with authorization and operator-owned history handling. Never print the secret or claim rotation was done.
- Performance and reliability: establish actual measured budgets per critical workflow; inspect query plans, N+1 calls, rendering/network costs, retry amplification, contention and resource usage. Track error/latency/throughput, structured logs, correlation IDs, metrics/traces and redaction. Do not invent thresholds. Review data lifecycle (retention, deletion, orphan records, migration safety, privacy), backup/restore, operator recovery ownership and approved RPO/RTO. Backup existence is not proof of restore; test restoration only in authorized isolated environment.
- Prioritize proven critical security/financial/data integrity failures; obtain approval for scoped fix, reproduce, add regression coverage, correct root cause, validate relevant consumers and independent review. Major upgrades and broad refactors require separate approval. No new shortcuts, silent fallbacks or fake success.

## 5. Desynchronization — contracts, schemas and coordinated change
Review lenses: API/schema compatibility, migrations, events, frontend/backend, configuration/deploy, localization/documentation, agent coordination and independent contract review.
- Identify canonical source, owner, producers, all consumers, compatibility promises, versioning, deployed states and migration/deployment order. Compare actual implementation with OpenAPI/AsyncAPI, generated SDKs/types, DTOs/enums/statuses, validation, permission policies, events, migrations, env key names, feature flags, translations/placeholders, docs, configs and package versions. Check stale generated files and manual copies, unimplemented documented routes and inconsistent error states. Trace producer/consumer across product boundaries, not only within a repo. Use actual code and spec; don't invent an API.
- Tools: OpenAPI/AsyncAPI, existing generator scripts, oasdiff, Pact, Schemathesis, GraphQL Inspector, Buf, language-native schema validation, sqlc, existing migration tooling (Prisma/Atlas when used), Changesets only if appropriate, build and package compatibility checks. Prefer existing generators to hand-maintained duplicated definitions. Inspect commands first: do not start a service, invoke Git or change env files implicitly. If generation requires a server, use a verified static alternative or request operator starts it; mark blocked until available. Never hand-edit generated sqlc outputs.
- Fix canonical source and all affected current callers directly; remove obsolete aliases, translation maps and hidden fallbacks. Compatibility only for genuine deployed consumers or approved staged migrations. Where independent deploys require a transition, document real consumers, version, deployment order, migration/rollback and removal conditions. Do not expose private database models as public contracts by default. Never modify applied migrations or run destructive migrations. Prefer expand/contract only when justified by deployment reality. Verify both supported transition states and final canonical state. Coordinate file writes without worktrees. Report mobile/store release needs and old-build impact.
- Cross-workspace pass: examine The Stage ↔ Nextkt/Kisum, Kisum ↔ Nextkt, P·Club ↔ Nextkt and other discovered interfaces. Verify each side's expected host, routes, auth, scopes, payloads, errors, retries, ownership and generated contracts. Respect permissions, external consumer constraints and protected repositories; inaccessible counterpart is an explicit coverage gap.

## 6. Evidence Before Modification — mandatory safety gate
For any proposed consolidation, removal or behavioral change, record:
1. Owner and all consumers (including dynamic, external and deployed consumers); discovery evidence and exact paths/symbols.
2. Approved requirements, business invariant and contract references; distinguish documentation/approved intent, implementation behavior and unresolved intent.
3. Existing variants and behavior under normal, edge, failure and unauthorized conditions; explain differences and whether intentional. E.g. two similar permission checks may intentionally grant different access. Never merge them on resemblance.
4. Confirmed root cause, severity, impact, evidence, alternative fixes and reason for canonical choice. Neither shortest, newest, most common nor most complex code is automatically correct.
5. Exact write scope, approval ID/reference, dependencies, acceptance criteria and rollback plan. Escalate ambiguous intent; do not change behavior until resolved.
6. Pre-change reproduction/characterization, independent requirement-based test plan for high risk, and post-change verification across affected consumers, including security/tenant denial and financial/concurrency invariants where applicable.
7. Actual verification outputs, relevant docs/memory/changelog, remaining risk and operator release/rollback actions. Review all affected files; do not claim independent review unless separate reviewer actually reviewed evidence.

Independent reviewer response format (engine returns text; require these explicit fields in the brief and validate them before recording; JSON preferred, never claim schema enforcement by the engine): finding ID or reviewer-local ID; stage PRE_FIX / POST_FIX / FINAL_COVERAGE; classification and severity; primary/related Ds; reviewer/family; requested model; workspace/scope and source fingerprint supplied by coordinator; exact file/line/symbol and redacted evidence; observed vs inferred vs unknown; approved expected behavior/invariant; owner and affected consumers; proposed correction or observed post-fix behavior; checks performed and actual outputs or NOT_RUN; verdict CONFIRMS / DISPUTES / NOT_RUN (pre-fix confirmation of reviewer-discovered finding, post-fix confirmation of actual corrected behavior; no-finding result must state reviewed scope and limitations); unresolved risks. Do not fabricate line numbers or execution results. The coordinator records model metadata and source fingerprints independently; reviewer text cannot attest sandbox or effective model identity. Reject incomplete material claims and reconcile them against code.

Finding classes: CONFIRMED (reproducible evidence and approved expected behavior), SUSPECTED (insufficient evidence), INTENTIONAL (documented or approved divergence), FALSE_POSITIVE (evidence disproves), BLOCKED (verification or access missing). Only confirmed and approved remediation is actionable. A scanner match alone is not a confirmed defect. Do not mix unverified values with verified metrics. Report unknowns clearly. Use one primary finding ID per root cause, link secondary D lenses. Mark prior findings stale if source changes invalidate evidence; never silently erase history. Priority based on business impact, likelihood, blast radius and dependencies, not scanner severity alone.

## 7. Product-specific audit anchors (verify current rules; not replacement policies)
These are known documented starting points from the reviewed workspace instructions; read actual current global/workspace/module files before using them as facts. Do not hardcode product paths or counts in generic tooling. Additional current rules apply.

### Kisum
- Auth owns identity, sessions, memberships and grants; Core owns companies/business units, subscriptions, catalog and commercial entitlements; persona services own domain data and enforce access, not entitlement truth. Admin proxies real upstream APIs; no direct Auth/Core DB access. Fail closed; verify canonical org context and membership. Nextkt is standalone, not a Core module.
- Finance is sole owner of legal tax rules. Net storage policy and exceptions in Kisum AGENTS.md: issued/approved invoices and ledger records retain legal historical tax; withholding not covered by sales-tax rule; ticket vendor reported tax handled per approved vendor gross_includes_tax policy; service charge is venue price rule, not tax. Validate dated tax mappings and incomeType/customer treatment behavior against current requirements; no duplicate tax rules. Never migrate stored values or alter business intent without evidence and approval.
- Read System-Kisum-Docs-Admin and required live https://docs.kisum.dev/ before architecture, API, ownership, permission, integration or docs work. Lead ensures authorized live-doc verification even when read agents lack access; if blocked, stop dependent work rather than assuming local docs current. Update dot connector plus affected repo/root docs, changelog and memory as required in same task; respect docs-site publication constraints. Include public developer docs without exposing internal details.
- Use per-module codebase-memory-mcp indexes. Review existing Kisum-UI/design system, FitAmount, MoneyInput/MoneyCurrencyInput and related implementations as reuse candidates; do not assume equivalent. Legacy Base may still own active unmigrated flows. Review Checkout, Xendit, Auth/Core, Finance, Promoters, Artists, Venues, Admin, AI/MCP and all other discovered active units. Respect env/database restrictions and exact user command format in SKILL.md.

### Nextkt (including P·Club where applicable)
- Begin with existing October root audit files AUDIT_COVERAGE.md, AUDIT_PROGRESS.md, AUDIT_TEST_RESULTS.md and NEXTKT_FULL_AUDIT_REPORT.md (reported 475 open findings, not independently verified current defects). Locate actual files and reuse equivalent records. Revalidate each finding and coverage against current code, requirements and consumers; preserve original references and record current disposition (confirmed, stale, already fixed with proof, intentional, false positive, blocked). Do not duplicate the audit or assume prior coverage remains valid; independently discover missing domains and newer changes. The stricter global zero-Git rule applies.
- One ticketing authority in Nextkt backend, separate buyer/operator/sysadmin/partner/network/first-party realms, fail-closed server-side checks, per-tenant scopes and event-specific tenant selection. Canonical promoter Event is external, referenced rather than re-owned. Validate approved SQL company_id scoping (documented company_id = $1 rule), SERIALIZABLE holds/oversell transaction boundaries, idempotent checkout and payment webhooks. Confirm inventory, ticket visibility, configured sale periods, sold-out status, ticket issuance, refund/cancellation, fee/tax/rounding/currency, settlement and reconciliation invariants against actual approved contracts, not invented rules.
- Partner-facing apps/docs/spec/emails/errors use partners.nextkt.com / localhost:4806 only. Never leak internal host names or :4801 to partner surfaces; internal first-party routes are distinct. Verify public route allowlist and actual consumers including links that lack X-API-Key. P·Club is first-party, not a partner, except its venue-key calls use the partner door. Preserve scope/acting-org distinctions and approval tiers. Use make sqlc/make genspec only after inspecting safety and per-project rules. No hand edits to generated outputs; applied migrations immutable.
- Include Admin, Storefront, SysAdmin, P·Club, scanner/POS/mobile apps, support/AI, infrastructure, docs, developer portal, realtime and all other active units. Distinct mobile architectures (GetX, BLoC, Riverpod, Expo) are intentional per AGENTS.md; no forced unification. Respect deployed mobile versions and legacy API/reference-only status as currently documented and verified. Prefer existing Nextkt UI packages where appropriate. Investigate documented secret exposure in P·Club mobile env-prod.txt as a high-priority security issue without reading or exposing values unnecessarily; report for authorized rotation/removal and operator history handling. This is a documented risk, not a new verification of the secret's current validity.
- Use existing TODO/TODO_vN.md for workspace program work, choose actual next version at execution, move verified resolved lines to TODO/done/history/ with evidence as required. Do not hardcode v32 or create competing root/module TODOs. Update internal docs, backend docs/spec and required memory/changelogs in same task.

### The Stage
- Active frontends call Backend-TheStage only; no third-party direct access from browser/server routes, no frontend DB access or secrets. Honor documented browser-only marketing/error tags and Xendit UI exception, and Complex same-origin proxy to Backend-TheStage using server-only key. Backend owns sessions, local data and external integrations; Nextkt owns ticketing/payments/refunds and partner roles. Separate customer and partner-team auth realms; backend permission verification and documented cookie/session behavior. Kisum owns venue-hire source integration; trace actual contracts.
- Verify OpenAPI generated clients, Prisma migration/generation, sanitizer and role-guard tests, venue maps, rate limits, integration scopes, error propagation and docs. Inspect generation scripts; `generate:api` reportedly needs Backend-TheStage running on localhost:2000. Do not start it or any other service; mark NOT_RUN until the operator starts it or an authorized static alternative is verified. Use operator-running service or authorized static alternative. Respect env restrictions. Existing vendored @thestage packages may be reuse candidates; no copied tooling/config from other products without authorization.
- Verify physical active/legacy paths; reported `Legacy/` (Backend-TheStage-v1, Frontend-TheStage-v1) and `Frontend-v2` are protected/retired; verify actual paths and current policy. Other Legacy folders reported by discovery must be classified before editing; do not assume they are deletable. Review all active frontends/backends and connected Nextkt/Kisum contracts. Do not move ticketing authority into The Stage.

## 8. Exact report templates — create only when authorized and no equivalent exists
Use existing conventions when an equivalent record exists. These are initial literal templates, with UNKNOWN/NOT_RUN fields intentionally representing absence of evidence. Fill from verified findings during the authorized audit, not during skill bootstrap. Do not create separate per-D TODOs or status/decision files. Keep coverage at the top of the audit report. Store raw machine evidence only as needed, redacted, in existing approved locations.

### Template: BASELINE.md
```markdown
# 4D Engineering — Baseline

Status: NOT_MEASURED
Workspace: NOT_VERIFIED
Canonical root: NOT_VERIFIED
Measured at (UTC): NOT_RECORDED
Skill version/content hash: NOT_RECORDED
Source scope and fingerprint: NOT_RECORDED
Operator-supplied release reference (if any): NOT_PROVIDED

## Inventory and scope
| Unit ID | Canonical relative path | Status (active/legacy/retired/unknown) | Stack | Owner/contract reference | Connected units | Graph status |
|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — |

## Measurement method
Record safe manifest scope, exclusions, hash method, tool versions, commands, configuration identity, environment and evidence locations. Never record secrets. Do not use Git.

## Verified measurements
No verified measurements yet.
| Unit/scope | Check | Tool/version/config | Command | Verified result | Evidence |
|---|---|---|---|---|---|

## Unavailable checks and known limitations
No checks attempted yet. Record NOT_RUN, blockers and reasons here, separately from verified measurements.

## Pilot
Domain: NOT_SELECTED
Scope, dependencies, evidence and proposed initial gates: NOT_RECORDED
Approval reference: NOT_RECORDED

## Baseline maintenance
Preserve original approved measurements. Append dated comparable measurements; explicitly explain changed scope/tool/config. Do not reset baseline to hide regressions.
```

### Template: AUDIT_REPORT.md
```markdown
# 4D Engineering — Audit Report

## Coverage and resume pointer
Status: NOT_STARTED
Workspace and source fingerprint: NOT_RECORDED
Current phase/slice: NOT_STARTED
Next approved task/slice: NONE
Baseline reference: NOT_RECORDED

| Unit/domain/integration | Drift | Duplication | Degradation | Desynchronization | Anchor/evidence | Scope or blocker |
|---|---|---|---|---|---|---|
| — | NOT_REVIEWED | NOT_REVIEWED | NOT_REVIEWED | NOT_REVIEWED | — | Inventory pending |

## Findings
No findings established. Use one primary ID per root cause and link related Ds.

### Finding template (copy per actual finding)
ID / classification / severity / primary and related D:
Source anchor, file paths, symbols and evidence:
Owning module, affected consumers and external/deployed contracts:
Approved intent and invariant references:
Observed behavior, differences and reproduction:
Impact, risk, alternatives and recommendation:
Dependencies, write scope, approval reference and linked existing TODO (if agreed):
Acceptance criteria and independent test plan:
Rollback, migration and operator requirements:
Verification evidence and reviewer:
Independent review (per stage): reviewer/family, requested model, effective model if verified, scope/fingerprint, verdict CONFIRMS / DISPUTES / NOT_RUN, file/line/symbol, evidence and limitations:
Operator-confirmed restore point (per affected repository, before writes):
Disposition / residual risk:

## Cross-workspace contracts
No interfaces verified yet. Record producer/consumer, authoritative contract, both-side evidence, compatibility and access limitations.

## Verification and baseline comparison
No checks executed yet. Record command/tool/version, scope, before/after results, PASS/FAIL/NOT_RUN/NOT_APPLICABLE, independent reviewer and evidence. Keep unavailable checks separate from verified metrics.

## Remaining risks, exceptions and exclusions
No risks verified yet. Record evidence, owner, authorization and expiry/conditions where relevant. Do not add unapproved discoveries to TODO.

## Final assessment
NOT_STARTED. Completion requires all active units and relevant connections covered or explicitly approved exclusions, verified approved remediation, required documentation and gates, and named remaining blockers.
```

Coverage statuses: NOT_REVIEWED, IN_REVIEW, REVIEWED (findings may remain), VERIFIED (applicable checks and remediation/dispositions verified), BLOCKED, EXCLUDED_APPROVED, NOT_APPLICABLE (reason required), STALE (changed evidence). Do not equate REVIEWED with VERIFIED. Record real unit inventory and all applicable connections, not merely a domain summary. A changed anchor requires impact-based refresh; do not declare whole workspace complete from a pilot. Keep report concise and link evidence rather than paste entire scan logs. If necessary split detailed findings by domain in approved existing locations, retaining a single authoritative coverage index and stable finding IDs; do not create competing trackers. An open agreed TODO remains in its existing tracker; report links it, not a competing task status.
