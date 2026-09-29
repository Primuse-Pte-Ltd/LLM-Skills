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

The prompts are in `references/prompts.md`. Use them verbatim.

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

The review prompt is in `references/prompts.md`. Use it verbatim. With fewer than six seats, label only the answers you have. Reviewers still rank them and name the shared miss.

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

The chairman prompts, including the verdict headings and the code close, are in `references/prompts.md`. Use them verbatim.

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

## Other instruments

Read only the file for the mode in "Choose the instrument". Stages 2 and 3 still happen here unless the user asked only for raw runner output.

| Mode | Read |
|---|---|
| Pair consult, or asking Claude, Codex, Gemini, Antigravity, Cursor | `references/agents.md` |
| Dashboard | `references/dashboard.md` |
| OpenCode worktrees | `references/opencode.md` |
| `council run` | `references/cli-council.md` |

A filled verdict at the density this council owes is `references/worked-verdict.md`.

## Host members

When this skill is installed in Claude, Codex, Gemini, Antigravity, or Cursor, that host is the chairman. The others are optional seats. Ask them with the commands in `references/agents.md`, each on its own model. A missing CLI is a dropped seat, named in the verdict.

Omniroute is the router in front of those agents. It does not load this `SKILL.md`. The model Omniroute selects is the upstream provider's model, not the OpenAI/Gemini ladder in this file.

KisumAI's chat council is a separate runtime. Its models are `COUNCIL_ADVISOR_MODEL`, `COUNCIL_REVIEWER_MODEL`, and `COUNCIL_CHAIRMAN_MODEL` in `ai-agent-chat/.env`. Do not overwrite those with `gpt-5-nano` or `gemini-3-flash-preview`.

If the user asked only for a side-by-side comparison, bring the answers back and still build the ledger before calling it a decision.

## Install

The agent does this. Do not ask the user to clone the repo or run the script. The install writes outside the current project (`~/.agents`, `~/.claude`, `~/.gemini`, `~/.cursor`). If the host asks for permission, ask the user once to approve those writes, then run the commands. Needs only `git` and `python3`; the repository is public, so no GitHub login is required. The source is GitHub:

```
https://github.com/Primuse-Pte-Ltd/llm-council
```

Clone it outside the current project, then link that clone:

```bash
mkdir -p "$HOME/.agents/skills"
git clone https://github.com/Primuse-Pte-Ltd/llm-council.git "$HOME/.agents/skills/llm-council"
python3 "$HOME/.agents/skills/llm-council/scripts/install.py"
```

If that directory already exists, run `git -C "$HOME/.agents/skills/llm-council" remote set-url origin https://github.com/Primuse-Pte-Ltd/llm-council.git`, then `git -C "$HOME/.agents/skills/llm-council" pull --ff-only`, and run `install.py` again. A link that already points at the clone is left alone. A real directory that is not a link is left in place and reported. Do not delete it unless the user asked.

`install.py` checks where it is running first and links only the agents whose folder exists in the home folder. If it prints `STOP` (exit 2: no agents found, so this is a cloud or remote sandbox; exit 3: home folder not writable), do not work around it. Tell the user what it found and ask them to run the install from a coding agent on their own computer, or to approve full access. `--check` reports without changing anything.

| Host | Where it lands |
|---|---|
| Claude Code | `~/.claude/skills/llm-council` |
| Codex | `~/.agents/skills/llm-council` (Codex reads this directory; `~/.codex/skills` is the old location) |
| Gemini CLI | `~/.gemini/skills/llm-council` |
| Antigravity | `~/.gemini/config/skills/llm-council` |
| Cursor | `~/.cursor/skills/llm-council` |

The links point at the clone, so a later pull is what every host reads. Do not copy a second `SKILL.md` into those folders. If `gemini` is on `PATH`, also run `gemini skills link "$HOME/.agents/skills/llm-council" --consent`.

To remove the skill, run `python3 "$HOME/.agents/skills/llm-council/scripts/uninstall.py" --check`, show the user what it would remove, and run it without `--check` after they approve.

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
