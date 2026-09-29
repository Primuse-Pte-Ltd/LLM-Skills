---
name: llm-council
description: >-
  Run a question, plan, architecture, implementation, or review through
  one strict LLM council. A working team drafts the plan. A decision
  ledger lists every real option, the mistake that kills it, and the bugs
  it carries. Six seats then answer and peer-review anonymously. The
  chairman picks only after every option is disposed. Seats are The User,
  Contrarian, First Principles, Expansionist, Outsider, and Executor.
  Team is router, researcher, architect, assessor, planner, implementer,
  test-designer, reviewer, red-team, and shipper. Installs into Claude,
  Codex, Gemini, Antigravity, Cursor, Omniroute, and KisumAI. Each host
  uses its own model. Use when the user says "council this", "run the council", "council
  run", "war room", "pressure-test", "stress-test", "debate this",
  "consult the council", "ask other models", "compare models", or
  "council dashboard", or brings a real tradeoff. Skip factual lookups,
  one-line fixes, and creation tasks with no decision.
---

# LLM Council

This is the one council. The working team drafts how the plan works. The decision ledger then writes down every real option, the mistake that kills each one, and the bugs already in the code or the plan. Six seats attack that record. A chairman issues one verdict only after every option has been kept, rejected, or blocked by a named unknown.

A verdict that skips an option, a mistake, or a bug on the ledger is not finished. "Perfect" here means the best call that survives that record, with the assumption that kills it written in the open. It does not mean the future was guaranteed.

The team are specialists: they design, sequence, score, and try to break the plan. The seats are the jury. They do not share the job of sounding reasonable. A seat that could have been written for any other user has failed. The chairman's job is a decision, not a blend.

The council is for work where a wrong call is expensive: a product bet, an architecture, a production change, a security review, a hire, a price, a pivot. Skip it for factual lookups, one-line edits, and creation tasks with no decision ("write the tweet", "summarize this").

If the ask is vague ("council this: my business"), ask one clarifying question. One. Then run.

Copy this checklist and keep it current:

```
Council:
- [ ] Discipline named, and the specialist criteria written down
- [ ] The artifacts that decide the question have been read
- [ ] Question framed with facts and stakes, and no opinion added
- [ ] Router classified the task and named the crew
- [ ] Working team wrote a Council Brief
- [ ] Decision ledger lists every option, the mistake that kills it, and the bugs
- [ ] Six seats launched in parallel on the brief and the ledger
- [ ] Ledger updated with anything peer review added
- [ ] A generic seat sent back once, then dropped if it is still generic
- [ ] Anonymous peer review completed
- [ ] Chairman named the call, what happened to the plan, and the assumption the call dies on
- [ ] Verdict posted in chat
- [ ] Transcript saved when the decision is worth reopening
```

## The bar

Every seat, in every mode, meets this bar. The chairman enforces it.

**Expert on this task.** Before anyone answers, name the discipline in one line: pricing, architecture, security, hiring, copy, sequencing, implementation, research, or a tighter name when the task is tighter. Write the three or four criteria a specialist in that discipline would actually use. Advisors who answer a different question are off-brief.

Specialist criteria, applied to the user's facts:

- **Pricing and offers.** Who pays, what they use instead, cost to serve, reversibility of the price, what the refund looks like.
- **Architecture.** Load, consistency, failure domain, operational cost, the first thing that breaks at ten times the current size.
- **Implementation.** Files and invariants that already exist, the behavior change, the test that must stay green, the rollback.
- **Review.** Defect, location, severity, whether it ships. Praise is optional and short. Findings come first.
- **Security.** Asset, actor, control that is missing, CWE when one fits, residual risk, the fix. Report enough to fix the system. Do not publish a how-to for attacking it.
- **Research.** Options, the criterion that separates them, a source or an explicit "unchecked" label. Never invent a citation, a benchmark, or a file.
- **Sequencing.** Critical path, what can run in parallel, the rollback, the signal that a phase is done.
- **Copy and positioning.** Who reads it, what they already believe, the single action the page is for.

**Straight.** No preamble, no compliment, no "great question", no "there are many factors." Do not open by agreeing with the user. Lean all the way into the assigned lens. Balance is the chairman's job, and even the chairman ends on a call.

**Evidenced.** A claim needs a mechanism, a number from the user's material, or a condition that would prove it wrong. "The market is crowded" is not a finding. "At $297 you are next to free tutorials, and your buyer does not know the product name" is a finding. If the number is not in the material, say it is an assumption.

**Specific.** Name the file, the price, the user, the phase, the failure. Advice that still works after deleting the user's nouns is rejected.

**One call.** The recommendation is a verb and an object. "It depends" is allowed only as the condition, followed by the call on each side of that condition. A compromise nobody argued for is not synthesis.

**Dissent survives.** Real disagreement stays visible. The chairman may side with one seat against the rest and must say why. Overruling The User means naming the constraint being broken. Do not average the council into mush.

## Choose the instrument

| Mode | Use when | Who answers |
|---|---|---|
| **Lens council** (default) | "council this", war room, pressure-test, stress-test, debate, a real tradeoff | Working team, then six seats: The User plus five lenses. No API keys. |
| **Pair consult** | "ask ChatGPT and Gemini", "consult other models" on a plan | `codex` and `gemini` CLIs, else OpenAI and Gemini APIs |
| **Dashboard** | live side-by-side comparison, anonymous model vote, "start the council dashboard" | AI Gateway models in the browser |
| **OpenCode council** | several configured models should answer, or propose and rank code in worktrees | OpenCode CLI |
| **CLI council** | production implementation, CWE review, architecture, tests, threat model, research, build-vs-buy, release notes | `the-llm-council` (`council run`) |

Lens council is the protocol in the next sections: working team, then the six seats, then peer review, then the chairman. Pair consult and OpenCode can replace the six seats in Stage 1 when the user wants other models' own words. Stages 2 and 3 still happen here. The dashboard is the comparison surface; bring a chairman verdict back when the user wants a decision, not only a grid. `council run` is an optional engine for the working-team roles when the package is installed. The six seats still sit on that output unless the user asked only for the CLI JSON.

If a model seat is missing a key or a CLI, name that seat and continue with whoever answered. If every external model fails, run the lens council and say that is what happened.

## Become expert before anyone speaks

The user's sentence is the tip. Read the material that would change the answer. Spend the time on the two or three sources that matter, not a tour of the repo.

Look for:

- `CLAUDE.md`, `AGENTS.md`, `.cursor/rules`, a `memory/` folder
- Files the user attached or named
- Recent `council-transcript-*.md` in the working directory or `active/`, so the council does not re-argue a settled point
- For a pricing or offer question: revenue notes, past launches, audience descriptions
- For a code question: the files in the request, the tests around them, the types and invariants they already obey
- For an architecture question: the current boundaries, the datastore, the deploy path

The framed question that every seat receives contains:

1. The decision, in one sentence.
2. The discipline and the specialist criteria.
3. Facts from the user.
4. Facts from the files, including numbers. Mark anything you inferred.
5. What is at stake, and what is hard to undo.
6. What a good answer is not allowed to do (for example: "do not propose a rewrite", "do not change the public API").

Do not put your own recommendation into the frame. Do not steer the seats toward the answer you already like.

## Working team — before the council

These roles draft the plan. They are not council seats. They do not issue the verdict. The assessor's recommendation and the architect's design are inputs the jury is allowed to kill.

Spawn them as sub-agents. Role contracts and JSON fields live in `subagents/` next to this file. When `the-llm-council` is installed and the user wants real multi-model drafts, the same roles can run through `council run` instead. Either way, their output becomes the Council Brief. The decision ledger is built from that brief before the six seats speak.

### Wave 0 — Router, alone

The router classifies the task before anyone else works. It returns the task type, the crew, complexity (`simple`, `moderate`, `complex`), why, the alternatives, and a confidence from 0 to 1.

A `simple` classification with high confidence means skip the council and do the work. Honor that.

```
You are the Router. Classify the task. Do not solve it.

---
[framed question]
---

Return:
- task_type
- complexity: simple, moderate, or complex
- crew: which of these must run, and which must not, with one sentence each
  researcher, architect, assessor, planner, implementer, test-designer, reviewer, red-team, shipper
- reasoning
- confidence from 0 to 1

Drop a role whose output cannot change the plan. A pricing decision does not need a release shipper. A "how does this get built" plan does not drop the builder.
```

### Wave 1 — builders, in parallel

Launch every role the router kept from this list, all at once. Each one gets the framed question, its contract below, and no other role's draft.

| Role | Writes |
|---|---|
| **Researcher** | External facts, a tradeoff matrix, a recommendation, and citations with real URLs. A citation without a URL is a defect. Mark unchecked claims. |
| **Architect** | Components, API and data model when they matter, technology choices with a reason, tradeoffs, and the build sequence. |
| **Assessor** | The decision, weighted criteria, scored options, the choice, and how the choice fails if a weight is wrong. |
| **Planner** | Phases, critical path, what can run in parallel, risks, rollback, and the signal that a phase is done. |
| **Implementer** | The files, the behavior change, the edge cases, the dependencies, and how to verify it. A proposal, not a merge. |
| **Test designer** | Strategy, scenarios with inputs and expected results, coverage gaps, and the edge cases that would embarrass the plan. |

```
You are the [Role] on the working team. You are drafting the plan the council will attack. You are not on the jury. Do not write a balanced verdict.

Discipline: [discipline]
Specialist criteria: [criteria]

---
[framed question]
---

Produce only your section of the plan. Use the facts in the frame. Name assumptions. No preamble. A specialist who already knows this codebase or this market should be able to build from what you write.
```

### Wave 2 — people who need a draft

Reviewer, red-team, and shipper read Wave 1. They do not invent a second plan. Run the ones the router kept, in parallel.

| Role | Writes |
|---|---|
| **Reviewer** | Findings first. Severity, location, CWE when it is a security defect, whether the plan ships. Praise is a last line, or absent. |
| **Red team** | Assets, actors, missing controls, CWE IDs, residual risk, and the fix. Enough to repair the plan. Not a procedure for attacking it. |
| **Shipper** | What would ship, what breaks, the migration, the deploy steps, and the rollback. Skip when nothing is being released. |

### The Council Brief

You assemble this. Do not add a recommendation of your own. Where the team disagrees, leave both versions in the brief and name who wrote each.

```
## Council Brief

### Proposed plan
The plan as the team wrote it, in one short section.

### How it works
Steps, components, or phases. Specific enough to attack.

### Options the team rejected
And the reason.

### Risks the team already owns
Including reviewer and red-team findings.

### Open assumptions
Facts nobody established.

### First build step
One action, from the planner or the implementer.

### Who wrote which part
Role and the claim they own.
```

If Wave 1 and Wave 2 disagree, the brief shows the disagreement. The council resolves it. The team does not get a second round to talk the jury out of a finding.

## Decision ledger — before anyone votes

Build this after the brief and before the six seats. The seats argue about this record. The chairman is not allowed to pick until every row has a disposition.

The ledger is not a second plan. It is the full set of ways this can go, and the specific way each one fails. If a real option is missing, the decision is incomplete. If a known bug is missing, the decision is incomplete.

### Options

Write every option that a specialist would actually consider. The minimum set:

1. The user's original idea, as they said it.
2. The working team's proposed plan.
3. Do nothing. Status quo, with the cost of waiting.
4. The smallest reversible test. One step that produces evidence, not a finished build.
5. The upside version. What this becomes if the Expansionist's case is right.
6. Any option the files or the research support that nobody at the table has argued yet. If you cannot name one, write what you looked at and why the set is closed.

Each option gets the same fields. Empty fields are failures. "N/A" is allowed only with the reason.

```
### Option: {name}
- What it is, in one sentence.
- Who it serves, and who it leaves out.
- Cost, time, and what is hard to undo.
- The mistake that kills it. Not "risk." The specific wrong assumption, wrong sequence, or wrong user that makes a competent person fail while doing the plan correctly.
- Bugs. For code, architecture, data, or security: file or component, trigger, wrong behavior, severity (high / medium / low), and whether this option fixes the bug or introduces it. For a non-code decision: the operational defect (wrong buyer, unmeasured outcome, no rollback). Write "no code surface" only when that is true.
- The fact that would make this the right call.
```

### Mistakes

Separate from bugs. A mistake is executing a reasonable plan and still being wrong.

Cover the ones that apply. Skip none of these without a sentence saying why it does not apply:

- **Wrong problem.** The plan solves a neighboring question.
- **Wrong sequence.** The right work, in an order that wastes the expensive part.
- **Missing prerequisite.** A fact, a permission, a test, or a buyer that the plan assumes is already there.
- **Measurement mistake.** The plan can ship and nobody can tell that it failed.
- **Constraint breach.** It violates something the user already ruled in or out.

### Bugs

Required when the task touches code, a schema, an API, a migration, auth, payments, or anything that runs in production. Read the files. Do not invent line numbers. If you did not open the file, say so and mark the bug as unverified.

Each bug:

- Location: path, symbol, or component. No invented lines.
- Trigger: the input, state, or order of calls that hits it.
- Wrong behavior: what actually happens.
- Severity.
- Owner: which option introduces it, which option fixes it, or "already in the tree."

A plan that adds a feature on top of a high-severity bug without saying so is not a candidate.

### Unknowns

Facts that would change which option wins. Either resolve them from the files and the research, or leave them here. The chairman's killing assumption must be one of these, or a new one found in peer review.

## The six seats

The jury. They receive the framed question, the Council Brief, and the Decision Ledger. They are supposed to clash. They are not impressions of famous people. A seat that ignores an option or a high-severity bug on the ledger has not answered.

0. **The User.** Holds the actual person's goal, constraints, taste, and what they have already ruled out. Says when the plan does something other than what was asked, and when it violates a constraint already in the frame. Does not add scope and does not invent a new ambition. Also does not protect a bad idea out of loyalty: if the user's own plan has a hole they would hate in a month, say it in plain language.
1. **Contrarian.** Hunts the fatal flaw, the missing piece, and the way this fails in ninety days. Assumes there is a hole and looks until it is found or genuinely is not there. This is the person who stops a bad deal, not a pessimist performing doubt.
2. **First Principles Thinker.** Ignores the surface question and asks what is actually being solved. Strips assumptions. Rebuilds the problem. Allowed to say the question is the wrong question, and required to say what the right question is.
3. **Expansionist.** Looks for upside, the adjacent opportunity, and what is undervalued. Owns the case where this works better than expected. Does not do risk. That is the Contrarian's job.
4. **Outsider.** Has none of the insider vocabulary. Answers from what is literally in the frame and the brief. Catches the curse of knowledge: the thing that is obvious to the team and meaningless to the buyer, the new hire, or the on-call engineer.
5. **Executor.** Can this actually be done, and what is the first concrete step. Ignores strategy that does not change Monday. A brilliant plan with no first action is unfinished. Checks the team's "first build step" and says whether it is real.

Tensions to keep intact: The User against a plan that got too clever, Contrarian against Expansionist, First Principles against Executor, Outsider against everyone's assumptions.

Each seat still has to be an expert on the discipline in the frame. A Contrarian who only says "this might not work" has not done the job. A Contrarian who names the failure mode, who hits it, and the cost, has.

## Stage 1 — Convene the council

Spawn all six seats at the same time. Sequential calls let earlier answers leak into later ones. Each seat gets its role, the framed question, and the Council Brief. Nothing else. 150–300 words. No preamble.

The User:

```
You are The User on an LLM Council. You hold the actual person's goal, constraints, taste, and what they have already ruled out. You are not a strategist and not a second critic.

Discipline: [discipline]

Framed question:
---
[framed question]
---

The working team's plan:
---
[Council Brief]
---

Decision ledger (options, mistakes, bugs, unknowns):
---
[Decision Ledger]
---

Say whether this plan does the thing that was asked. Name the option on the ledger that matches what was actually asked. Name any option that smuggles in scope. Name any constraint it breaks. Name where it got clever and left the original ask behind. If the original idea has a hole the user would hate in a month, say that in plain language. Do not add scope. Do not invent a new ambition. Do not protect a bad idea out of loyalty.

150–300 words. No preamble.
```

Each lens:

```
You are [Advisor Name] on an LLM Council.

Discipline: [discipline]
Specialist criteria: [criteria]

Your thinking style: [lens description]

Framed question:
---
[framed question]
---

The working team's plan, which you are here to attack or defend from your lens only:
---
[Council Brief]
---

Decision ledger. Every option, mistake, and bug is in play. You may add one the ledger missed. You may not pretend a listed high-severity bug is absent.
---
[Decision Ledger]
---

Respond from your lens. Be direct and specific. Do not hedge. Do not try to be balanced. Do not compliment the user or the team. Lean fully into your assigned angle. The other seats cover the angles you are not covering.

Rules:
- Use the facts in the frame, the brief, and the ledger. If a fact is missing, name the assumption.
- Tie every material claim to a mechanism, a number, or a condition that would prove you wrong.
- Advice that would still fit after the user's names and numbers are deleted is a failed answer. Rewrite it.
- Name the option you would keep and the option you would kill. Point at the mistake or the bug that decides it.
- Say what should happen to the plan: adopt, amend, or kill. If amend, name the change.
- End with the single strongest action your lens demands.

150–300 words. No preamble. Start with the analysis.
```

On a pair consult or an OpenCode run, Stage 1 is the model runner. Treat each model answer as one seat. Do not edit those answers before review. If a model answer is generic, say so in the verdict. Do not quietly upgrade it.

### Reject a weak seat once

Before peer review, read each answer. Send a seat back once when any of these is true:

- It does not use a fact from the frame.
- It could apply to a different company, codebase, or user unchanged.
- It hedges instead of taking the lens.
- It answers a different question than the discipline named in the frame.
- It invents a metric, a citation, a file, a line number, or a user quote.
- It ignores a high-severity bug or an option that its lens exists to judge.

The retry prompt is the original prompt plus: "Your previous answer failed because [one sentence]. Answer again. Same seat. No preamble." If the second answer fails the same way, drop that seat, tell the user which seat dropped, and continue. Do not drop The User for being inconvenient. Drop The User only for inventing constraints that are not in the frame, or for refusing to name a hole in the user's own idea.

## Stage 2 — Anonymous peer review

Label the surviving answers Response A through F in random order. Six seats use six letters. The mapping stays hidden from reviewers, including which letter is The User. Spawn one reviewer per seat, all at once. Each reviewer sees only the letters.

Each review is under 200 words and answers three questions:

1. Which response is the strongest, and which specific claim makes it so?
2. Which response has the biggest blind spot, and what fact or failure is missing?
3. What did every response miss that would change the decision?

"Strongest" is not best written. It is the answer a specialist would bet on. "Blind spot" is a missing fact, a missing failure mode, or a false assumption. "Everyone missed" has to be capable of changing the call. If nothing would change the call, say that.

```
You are reviewing an LLM Council. The seats answered independently. You do not know which lens wrote which response.

Discipline: [discipline]
Specialist criteria: [criteria]

Question:
---
[framed question]
---

Plan under review:
---
[Council Brief]
---

Decision ledger:
---
[Decision Ledger]
---

**Response A:**
[response]

**Response B:**
[response]

**Response C:**
[response]

**Response D:**
[response]

**Response E:**
[response]

**Response F:**
[response]

Answer these three questions. Reference responses by letter. Be specific. Do not hedge.

1. Which response is the strongest? Which claim makes it the one a specialist would bet on?
2. Which response has the biggest blind spot? What exactly is missing?
3. What did ALL of the responses miss that would change the decision?

Under 200 words. No preamble.
```

With fewer than six seats, label only the answers you have. Reviewers still rank them and name the shared miss.

Code proposals from the OpenCode runner are ranked, not merely discussed. Each reviewer ends with this block and nothing after it. Letters only, each letter once, best first:

```
FINAL RANKING:
1. A
2. C
3. B
```

Valid labels are only the letters you assigned. No model names, no extra letters.

After the reviews, update the ledger before the chairman speaks. Add any option, mistake, or bug a review found that the ledger missed. Do not delete a row because it is inconvenient. Mark it answered when a review actually resolved it.

## Stage 3 — Chairman

You are the chairman. You receive the framed question, the ledger, the de-anonymized answers, and every review. You write the verdict the user will see. Do not soften it on the way into chat.

You may overrule the majority. If one seat's reasoning survives the reviews and the others do not, side with that seat and say so. Do not invent a middle path that no seat argued.

You do not get to decide until every option on the ledger has a disposition: kept, rejected, or blocked. A high-severity bug is either fixed by the call, explicitly accepted with the reason, or the reason the option died. Skipping a row is an unfinished verdict.

```
You are the Chairman of an LLM Council. Synthesize the seats and the peer reviews into one verdict.

Discipline: [discipline]
Specialist criteria: [criteria]

Question:
---
[framed question]
---

COUNCIL BRIEF:
[the working team's plan]

DECISION LEDGER:
[every option, mistake, bug, and unknown, including rows added after peer review]

SEATS:
[name + response for each surviving seat, including any seat dropped after a failed retry. The User is named here.]

PEER REVIEWS:
[all reviews, with the A–F mapping revealed]

Produce exactly this structure:

## Where the Council Agrees
Points two or more seats reached independently. These are the high-confidence signals. Quote the shared claim, not a vibe.

## Where the Council Clashes
The genuine disagreements. Both sides, each side's strongest reason, and why a reasonable specialist could hold either. Do not dissolve the clash into a compromise.

## Blind Spots the Council Caught
What appeared only in peer review. Name the seat that caught it and the seat that missed it.

## What was discarded
Answers or claims you threw out, and the reason. Include seats that failed the bar.

## What happened to the plan
Adopt, amend, or kill the working team's plan. If you amend it, name the change. If you overrule The User, name the constraint you are breaking and why the evidence won.

## Options
One line per ledger option: kept, rejected, or blocked. The reason is the mistake or the bug, not a vibe. Do nothing must appear.

## Mistakes and bugs that decided it
The few that actually changed the call. Location and trigger for any bug. A high-severity bug you are leaving in place must be named, with why.

## The Recommendation
One call. The reason. The assumption that kills this recommendation if it is wrong. That assumption must be an unknown from the ledger, or a new one the reviews established. Not "it depends" as the ending.

## The One Thing to Do First
A single next action with a done-condition. Not a list. One action a person can start now.

Be direct. Do not compliment the user. Do not hedge the last two sections.
```

For code, the recommendation is the change that should land: paths, behavior, and what was rejected in the other proposals. Use this close when the seats produced diffs:

```
You are the Chairman of an LLM Council for a code change. Seats proposed changes and ranked each other anonymously.

Task:
---
[framed question]
---

PROPOSALS:
[each seat, de-anonymized, with the files and the behavior change]

PEER RANKINGS:
[rankings and the mapping]

Produce the verdict structure above. The Recommendation is the final change: which proposal wins, which pieces to take from the others, and which defects the reviews caught that the winner still has. Do not tell the user to merge. Describe the change. The user decides what lands in the tree.
```

## Quality gate

Before posting, check the verdict:

- Every ledger option has a disposition, including do nothing.
- Every high-severity bug is fixed by the call, accepted out loud, or the reason an option died.
- The verdict says whether the working team's plan was adopted, amended, or killed.
- The recommendation is one action, and a specialist in the named discipline would recognize it as competent.
- At least one fact from the user's material appears in the verdict.
- A real clash is stated, or the council's agreement is stated as agreement, not as false balance.
- The killing assumption is explicit.
- Nothing in the verdict invents a file, a metric, a quote, or a citation.
- Dropped seats are named.

If the verdict fails, rewrite it from the seat material. Do not convene a second full council to hide a weak chairman.

## Deliver

Always post the verdict in chat:

```
## Council Verdict: {short topic}

Discipline: {discipline}

### Where the Council Agrees
### Where the Council Clashes
### Blind Spots the Council Caught
### What was discarded
### What happened to the plan
### Options
### Mistakes and bugs that decided it
### The Recommendation
### The One Thing to Do First
```

On a pair consult, the Recommendation also carries a contribution line for each model that answered, tied to a specific claim: "ChatGPT: …", "Gemini: …". That attribution sits inside the verdict. It is not a second document.

Save `council-transcript-YYYYMMDD-HHMM.md` when the user asks, or when the decision is worth reopening later (a bet, an architecture, a production change, a security finding). Include the raw question, the framed question, the discipline and criteria, the router crew, the Council Brief, the Decision Ledger, every seat including dropped ones, the letter mapping, every review, and the verdict. If an `active/` directory exists, save there. Otherwise save in the working directory.

Write `council-report-YYYYMMDD-HHMM.html` only when the user asks for a report or a visual. One self-contained file, inline CSS, system font stack, white background, subtle borders, no decoration. Contents, in order:

1. The question and the discipline.
2. The chairman's verdict, placed so it can be read without scrolling through seats.
3. A plain agreement / clash breakdown: which seats aligned, which diverged, on which claim.
4. Each seat's full answer in a section collapsed by default.
5. Peer-review highlights in a section collapsed by default.
6. A footer with the timestamp and the question.

Open the file after writing it.

## Worked verdict

User: "Council this: I'm thinking of building a $297 course on Claude Code for beginners. My audience is mostly non-technical solopreneurs. Is this the right move?"

Discipline: offer design. Criteria: who the buyer is, what they already understand, the alternative they already have, cost to serve, reversibility.

The router keeps researcher, assessor, and planner, and drops implementer, test designer, reviewer, red team, and shipper. Nothing is being built yet. The team briefs a plan: record an eight-module $297 course and sell it to the existing list.

The ledger, before the seats speak:

- **Original idea.** $297 beginner course. Mistake: the title names a tool the buyer does not know. No code surface.
- **Team plan.** Eight modules to the existing list. Mistake: produces the expensive artifact before any proof of demand.
- **Do nothing.** Keep publishing as now. Mistake: the audience the user named stays unserved. Cost is time, not a build.
- **Smallest test.** One paid live workshop. Mistake: a full room of the wrong buyer (developers) would fake the signal.
- **Upside.** A larger program with support. Mistake: support cost is the thing that makes $297 fail, so bundling more support first scales the failure.
- **Unargued.** Sell the outcome as a service engagement to five buyers before any curriculum. Looked at the frame: no list, no past launch numbers, so a curriculum is not yet a closed set.
- **Bug.** No code surface. Operational defect: no way to tell a refund wave from a messaging failure.

The council is asked to break that record, not to invent a sixth plan in the verdict.

The seats, compressed to the claim that matters:

- **The User.** The ask was whether this is the right move for a non-technical audience. A plan that leads with the tool name ignores the audience already named. The $297 figure was a proposal, not a constraint.
- **Contrarian.** At $297 the buyer is next to free tutorials. A non-technical audience means support load and refunds. The people who will pay $297 are likely past the beginner course already.
- **First Principles.** Name the goal. Revenue from a course is a slow path. Authority might come from a free artifact. A customer list for a higher offer does not require this price or this title.
- **Expansionist.** Beginners who are solopreneurs are underserved because the public material is aimed at developers. Own the entry. $297 may be low if support and a community are actually included.
- **Outsider.** "Claude Code" is meaningless to the buyer. The page is selling a tool name. The buyer buys an outcome.
- **Executor.** A full course is weeks of production. Sell a $97 live workshop to 50 people first. If 50 do not buy, 500 will not buy the course. The workshop becomes the raw material.

Chairman:

- **Agrees.** The audience is real. The title is the wrong product. The tool name does the selling, and the buyer does not know the tool.
- **Clashes.** Price. The Contrarian says $297 is high against free alternatives and a high support cost. The Expansionist says $297 is low if access and support are bundled. The split is about what is included, not about a magic number.
- **Blind spot.** Only the Outsider noticed that the product name is insider language. Every other seat argued price and format while assuming the buyer already wants "Claude Code."
- **Discarded.** "Build the full course now." No seat showed evidence of demand at that scope, and the Executor's test is cheaper.
- **Plan.** Killed. The team's eight-module course does not survive the audience the user already named.
- **Options.** Original idea rejected (tool name). Team plan rejected (sequence). Do nothing rejected (the audience is real). Upside rejected (scales the support problem). Smallest test kept. The service-engagement option stays open and blocked: no evidence in the frame about whether five buyers exist.
- **Recommendation.** Do not build the course yet. Validate with a smaller live offer, and sell the outcome (hours back, one business task automated), not the tool. This dies if a list of buyers has already paid for this exact beginner course. Nothing in the frame says that.
- **First action.** Run one $97 workshop, "Automate your first business task with AI," capped at 50 people. The tool name stays out of the title. Done means 50 purchase attempts recorded, or the offer pulled.

That is the density the chairman owes the user. Seats may be longer. The verdict stays this sharp.

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

## OpenCode council — models, history, and code

Use this when the user wants specific models through OpenCode, a TUI of the run, conversation history, or independent code proposals in git worktrees. The runner is `opencode/` in this skill. Run the commands below from the skill directory, the folder that contains this file. It needs the OpenCode CLI, Python 3.8+, and a git repository for worktree mode. First run creates a virtualenv at `opencode/.venv`. Manual setup: `python3 opencode/scripts/setup_environment.py`. Check it with `--check`.

Create `opencode/scripts/.env`:

```
COUNCIL_MODELS=opencode/openai/gpt-4,opencode/anthropic/claude-3-5-sonnet,opencode/google/gemini-pro
CHAIRMAN_MODEL=opencode/anthropic/claude-3-5-sonnet
```

`provider/model` is accepted; `opencode/` is the default prefix. Optional: `TITLE_MODEL`, `DASHBOARD_TIMEOUT` (seconds to leave the TUI up after the run), `DASHBOARD_REFRESH_RATE` (Hz). Change members by editing `COUNCIL_MODELS`. Change prompts in `opencode/scripts/prompts/templates.py` only when the user wants the rubric itself changed.

Stage 1 collects an independent answer from each member. In worktree mode each member edits in its own worktree. Stage 2 anonymizes those answers as letters and ranks them. Stage 3 is the chairman model. You still read the result and post the verdict in this session. If the chairman model smoothed a real defect out of the winning diff, say so. Do not pass a weak synthesis through unchallenged.

```bash
python3 opencode/scripts/run.py council_skill.py "<question>"
python3 opencode/scripts/run.py cli.py --dashboard "<question>"
python3 opencode/scripts/run.py council_skill.py --list
python3 opencode/scripts/run.py council_skill.py --show N
python3 opencode/scripts/run.py council_skill.py --continue N "<follow-up>"
python3 opencode/scripts/run.py council_skill.py --setup
```

| Flag | Effect |
|---|---|
| `--dashboard`, `-d` | TUI: stage flow, member status, last log lines, API and error counts |
| `--worktrees` | One git worktree per member |
| `--dry-run` | Show the diff. Do not merge. This is the default posture for code. |
| `--auto-merge` | Merge the top-ranked proposal. Only when the user asked. |
| `--merge N` | Merge member N. Only when the user asked. |
| `--confirm` | Ask before the merge |
| `--no-commit` | Apply the change without staging |
| `--list` / `--show N` / `--continue N` | History, one session, follow-up |

```bash
python3 opencode/scripts/run.py council_skill.py --dry-run "Fix the bug in buggy.py"
python3 opencode/scripts/run.py council_skill.py --auto-merge --confirm "Add error handling"
python3 opencode/scripts/run.py council_skill.py --merge 2 "Refactor this"
python3 opencode/scripts/run.py council_skill.py --auto-merge --no-commit "Add tests"
```

Code seats must say what they changed and why, in the files they touched. Reviewers rank proposals and end on `FINAL RANKING`. "not a git repository" means initialize git or leave worktree mode off. Leftover worktrees: `git worktree prune`. History and logs live under `opencode/scripts/data/`.

Bring the ranking and the verdict back to chat. The user decides what lands in the tree.

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

## Host members

When this skill is installed in Claude, Codex, Gemini, Antigravity, or Cursor, that host is the chairman. The others are optional seats. Ask them with the commands in "Ask the other agents", each on its own model. A missing CLI is a dropped seat, named in the verdict.

Omniroute is the router in front of those agents. It does not load this `SKILL.md`. The model Omniroute selects is the upstream provider's model, not the OpenAI/Gemini ladder in this file.

KisumAI's chat council is a separate runtime. Its models are `COUNCIL_ADVISOR_MODEL`, `COUNCIL_REVIEWER_MODEL`, and `COUNCIL_CHAIRMAN_MODEL` in `ai-agent-chat/.env`. Do not overwrite those with `gpt-5-nano` or `gemini-3-flash-preview`.

If the user asked only for a side-by-side comparison, bring the answers back and still build the ledger before calling it a decision.

## Install

The agent does this. Do not ask the user to clone the repo or run the script. The source is GitHub:

```
https://github.com/Primuse-Pte-Ltd/llm-council
```

Clone it outside the current project, then link that clone:

```bash
mkdir -p "$HOME/.agents/skills"
gh repo clone Primuse-Pte-Ltd/llm-council "$HOME/.agents/skills/llm-council"
python3 "$HOME/.agents/skills/llm-council/scripts/install.py"
```

If that directory already exists, `git -C "$HOME/.agents/skills/llm-council" pull --ff-only` and run `install.py` again. A link that already points at the clone is left alone. A real directory that is not a link is left in place and reported. Do not delete it unless the user asked.

| Host | Where it lands |
|---|---|
| Claude Code | `~/.claude/skills/llm-council` |
| Codex | `~/.codex/skills/llm-council` |
| Gemini CLI | `~/.gemini/skills/llm-council` |
| Antigravity | `~/.gemini/config/skills/llm-council` |
| Cursor | `~/.cursor/skills/llm-council` |

The links point at the clone, so a later pull is what every host reads. Do not copy a second `SKILL.md` into those folders. If `gemini` is on `PATH`, also run `gemini skills link "$HOME/.agents/skills/llm-council" --consent`.

Omniroute and KisumAI do not take that link. See `README.md`.

## Rules

- The working team drafts the plan. The ledger lists the options, mistakes, and bugs. The six seats judge that record. Do not swap those jobs.
- Do not write the recommendation until every option, including do nothing, has a disposition.
- A high-severity bug is fixed, accepted out loud, or the reason an option died.
- Convene the six seats in parallel. Peer reviewers see letters, not names, including The User.
- A seat that fails the bar is retried once, then dropped in public.
- The chairman may overrule the majority and must say why.
- The chairman names the assumption that kills the recommendation.
- One failed model does not cancel the council.
- Do not council a question with a single right answer.
- Do not merge, commit, or apply code unless the user asked.
- After a CLI `impl` run, run `critic --mode review` before calling the change done.
- Do not send secrets to any external model. Do not invent sources, metrics, or file contents.
- Do not compliment the user. Do not hide a clash. Do not end on a list of ten next steps.

Methodology by Andrej Karpathy. This folder is the council: the six seats, the working team in `subagents/`, the decision ledger, the ChatGPT and Gemini consult, the dashboard, the OpenCode worktree council, and the `the-llm-council` CLI. The ledger is the part that makes the verdict earn the call.
