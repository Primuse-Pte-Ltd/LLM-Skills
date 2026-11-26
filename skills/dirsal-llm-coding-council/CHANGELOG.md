# Coding Council — native CLI integration

## 2026-11-27 — local review build

- Added one standard-library Python runner (`scripts/native_council.py`) for Claude Code, Codex and Antigravity/Gemini. Defaults reflect the operator's observed CLI versions and available models. Explicit model-family selection, independent parallel reviews, optional second-round anonymous critique, structured status and evidence manifests. The existing host is the chairman; no extra synthesis request or automatic implementation.
- Added bounded evidence-only review, explicit operator-approved live mode, per-seat deadlines and process-group cancellation on timeout, lock against concurrent runner instances, nested-invocation guard, no automatic retries or direct API fallback. No project writes or test execution by the native runner. Host restrictions must be verified locally; these controls do not constitute a complete OS security sandbox.
- Updated pair consult to use Codex and Antigravity instead of outdated CLI calls; preserved direct HTTP as explicit opt-in with exported credentials and current operator-supplied API model IDs. No dotenv auto-load. The old dashboard, six-lens workflow, specialist prompts, OpenCode and external CLI instruments remain available subject to the governing policy. No Git/worktree/API-backed path is automatically invoked by the native runner.
- Updated installation instructions and script: avoid new duplicate Gemini discovery links, recognize Antigravity CLI configuration, preserve existing legacy paths by default, exclude non-example env files from new copies and checksum enumeration. Existing duplicate directories and local configuration are not automatically removed. Antigravity IDE registration remains the existing layout; CLI discovery is unverified.
- Added `references/native-council.md` for usage, 4D pre/post-review and local permissions/MCP validation. No new 4D skill is included. Kept the original specialists and separate `dirsal-llm-council` untouched.
- Removed `.env.production` from the distributable without inspecting or printing values; kept `.env.example` with empty API key/model fields. No macOS metadata or bytecode in the ZIP. Existing local credentials should remain private.

## Validation

- 13 offline unittest cases passed with fake CLI executables (probes, independent and peer waves, model selection, failed seat, timeout, scope-change detection, blocked paths/symlinks, approval, recursion, lock, live argument requirements, command flags and malformed provider results).
- Python syntax compilation of existing and new scripts passed. No real provider requests, installed host configuration changes, Git commands, service starts, or project modifications were performed here.
- The old optional dashboard and OpenCode runtimes were preserved, not integration-tested. Local real CLI probe, exact model/flag availability, authentication/billing, full read-only enforcement, hooks and MCP verification remain required on the operator's Mac. A successful marker probe alone does not prove these controls. The full live review remains blocked until operator verification.
