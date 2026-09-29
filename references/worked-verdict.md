# Worked verdict

Match this density. The verdict in chat stays this sharp. Seats may be longer.

User: "Council this change: `IssueKey` treats an empty scope list as full admin. A proposal copies that key into a second service whose table has no tenant id, and treats HTTP 200 from list-events as proof the key belongs to that tenant. Ship the copy, or gate the scope catalog first?"

Discipline: architecture. Criteria: which tenant a credential is bound to, how far one secret reaches, whether a missing receiver blocks the first ship, and whether the live scope leak can wait.

The router keeps architect, assessor, reviewer, and red-team, and drops shipper. Nothing is being released yet. The team briefs a plan: add a developer page and one combined key, copied by hand until a receiver exists.

The ledger, before the seats speak:

- **Original idea.** One shared key, pasted into both services. Mistake: the second table cannot say which tenant the key belongs to. A 200 from list-events accepts a key from the wrong tenant.
- **Team plan.** Page, combined key, copy until a receiver. Mistake: config has no address for that receiver, so copy becomes the normal path.
- **Do nothing.** Leave the catalog as it is. Mistake: activation already unlocks platform-only scopes for every tenant. The leak is live.
- **Smallest test.** Gate the catalog so platform-only scopes are offered only to the partner tenant, and list keys that already have those scopes or an empty scope list. Revoke nothing.
- **Upside.** One key per link, redeemed by the caller, and no mint until the row stores the tenant id. Mistake: the second service has no column for that id yet, so minting now cannot be checked.
- **Unargued.** A generic connector copied from the existing empty-scope mint. Looked at `IssueKey`: empty scopes are full admin, so copying that handler copies the default.
- **Bug.** Already in the tree: empty scopes mean full admin. The proposal does not fix it. High. Location: `IssueKey`. The file was in the frame.

The council is asked to break that record, not to invent a seventh plan in the verdict.

The seats, compressed to the claim that matters:

- **The User.** The ask was which plan to ship without breaking what already works. The page adds a combined key and a copy bridge. That is a new product surface, not the leak fix.
- **Contrarian.** One key in two stores means the first rotation takes both down. A ban on empty scopes before any new key would also break the existing caller that passes an empty list on purpose.
- **First Principles.** Both plans ask how to deliver a key. The question is which row owns which tenant, and whether mint can refuse until that binding exists. The second service cannot store it yet.
- **Expansionist.** A generic connector, one key per link, push where a receiver exists and copy where it does not. The gate-only option is a delay.
- **Outsider.** A tenant owner should see only the powers that tenant can use. An on-call engineer should get a list of keys that already have too much power, including keys with no permission list. "Until a pipe exists" has no end date, because config has no address for that pipe.
- **Executor.** Monday is one helper that returns 503 when activation errors. That leaves "activation true means unlocked." The leak is the success path.

Chairman:

- **Agrees.** Do not ship the combined key. The two stores cannot share one secret, and a 200 check does not name the tenant. There is no receiver address, so copy would be the normal path.
- **Clashes.** Monday. The User and the Outsider want the catalog gate and the key list. The Executor wants a 503 on activation failure. The Contrarian wants a global empty-scope ban. The Expansionist wants the connector now.
- **Blind spot.** One review said the gate cannot run because there is no receiver URL. The gate is local to the catalog handler. It does not need that URL.
- **Discarded.** The combined key, the copy bridge, the generic connector, and a global empty-scope ban. The ban would break the caller that passes an empty list on purpose. No seat was dropped.
- **Plan.** Killed. The team's page does not survive the two stores.
- **Options.** Original idea rejected. Team plan rejected. Do nothing rejected (the leak is live). Upside kept as the later design, not Monday. Smallest test kept. Generic connector rejected.
- **Recommendation.** Gate the catalog. Platform-only scopes are offered only to the partner tenant. List keys that already have those scopes or an empty scope list. Revoke nothing. Do not mint a key into the second service until that table stores the tenant id and rejects a mismatch. This dies if that list shows live traffic already depends on a pasted key and the second table still has no tenant id. The gate can still ship.
- **First action.** Stop activation from unlocking platform-only scopes, and produce the read-only key list. Done when a non-partner tenant is rejected, the partner tenant is still allowed, and the list exists with nothing revoked.

That is the density the chairman owes the user. Seats may be longer. The verdict stays this sharp.
