---
name: llm-council
description: "Run any question, idea, or decision through a council of 6 AI advisors who independently analyze it, peer-review each other anonymously, and synthesize a final verdict. Based on Karpathy's LLM Council methodology. Runs in Claude, Codex, Gemini, Cursor, and Antigravity. The host that loaded this skill is the chairman and spawns the advisors there. Do not switch the session to Claude. MANDATORY TRIGGERS: 'council this', 'run the council', 'war room this', 'pressure-test this', 'stress-test this', 'debate this'. STRONG TRIGGERS (use when combined with a real decision or tradeoff): 'should I X or Y', 'which option', 'what would you do', 'is this the right move', 'validate this', 'get multiple perspectives', 'I can't decide', 'I'm torn between'. Do NOT trigger on simple yes/no questions, factual lookups, or casual 'should I' without a meaningful tradeoff (e.g. 'should I use markdown' is not a council question). DO trigger when the user presents a genuine decision with stakes, multiple options, and context that suggests they want it pressure-tested from multiple angles. Do NOT trigger on code, architecture, API, schema, or production-change questions; those belong to llm-coding-council."
---

# LLM Council

You ask one AI a question, you get one answer. That answer might be great. It might be mid. You have no way to tell because you only saw one perspective.

The council fixes this. It runs your question through 6 independent advisors, each thinking from a fundamentally different angle. Then they review each other's work. Then a chairman synthesizes everything into a final recommendation that tells you where the advisors agree, where they clash, and what you should actually do.

This is adapted from Andrej Karpathy's LLM Council. He dispatches queries to multiple models, has them peer-review each other anonymously, then a chairman produces the final answer. This council does the same thing with sub-agents and different thinking lenses instead of different models. It runs in Claude, Codex, Gemini, Cursor, and Antigravity. The host that loaded this skill is the chairman. Spawn the advisors in that host. Do not hand the session to Claude.

Code, architecture, APIs, schemas, and production changes are not this council. Those go to `llm-coding-council`.

---

## when to run the council

The council is for questions where being wrong is expensive.

Good council questions:
- "Should I launch a $97 workshop or a $497 course?"
- "Which of these 3 positioning angles is strongest?"
- "I'm thinking of pivoting from X to Y. Am I crazy?"
- "Here's my landing page copy. What's weak?"
- "Should I hire a VA or build an automation first?"

Bad council questions:
- "What's the capital of France?" (one right answer, no need for perspectives)
- "Write me a tweet" (creation task, not a decision)
- "Summarize this article" (processing task, not judgment)
- "Council this change in the API" (a code or systems decision; use `llm-coding-council`)

The council shines when there's genuine uncertainty and the cost of a bad call is high. If you already know the answer and just want validation, the council will likely tell you things you don't want to hear. That's the point.

---

## the six advisors

Each advisor thinks from a different angle. They're not job titles or personas. They're thinking styles that naturally create tension with each other.

### 1. The User
Holds the actual person's goal, constraints, taste, and what they have already ruled out. Says when a plan does something other than what was asked, and when it breaks a constraint already in the question. Does not add scope and does not invent a new ambition. Also does not protect a bad idea out of loyalty: if the user's own plan has a hole they would hate in a month, say it in plain language.

### 2. The Contrarian
Actively looks for what's wrong, what's missing, what will fail. Assumes the idea has a fatal flaw and tries to find it. If everything looks solid, digs deeper. The Contrarian is not a pessimist. They're the friend who saves you from a bad deal by asking the questions you're avoiding.

### 3. The First Principles Thinker
Ignores the surface-level question and asks "what are we actually trying to solve here?" Strips away assumptions. Rebuilds the problem from the ground up. Sometimes the most valuable council output is the First Principles Thinker saying "you're asking the wrong question entirely."

### 4. The Expansionist
Looks for upside everyone else is missing. What could be bigger? What adjacent opportunity is hiding? What's being undervalued? The Expansionist doesn't care about risk (that's the Contrarian's job). They care about what happens if this works even better than expected.

### 5. The Outsider
Has zero context about you, your field, or your history. Responds purely to what's in front of them. This is the most underrated advisor. Experts develop blind spots. The Outsider catches the curse of knowledge: things that are obvious to you but confusing to everyone else.

### 6. The Executor
Only cares about one thing: can this actually be done, and what's the fastest path to doing it? Ignores theory, strategy, and big-picture thinking. The Executor looks at every idea through the lens of "OK but what do you do Monday morning?" If an idea sounds brilliant but has no clear first step, the Executor will say so.

**Why these six:** The User catches a plan that got too clever and left the original ask behind. The other five create three tensions. Contrarian vs Expansionist (downside vs upside). First Principles vs Executor (rethink everything vs just do it). The Outsider sits in the middle keeping everyone honest by seeing what fresh eyes see.

---

## how a council session works

### step 1: frame the question

When the user says "council this" (or any trigger phrase), frame the question before the advisors speak.

Take the user's raw question and reframe it as a clear, neutral prompt that all six advisors will receive. The framed question should include:

1. The core decision or question
2. Key context from the user's message
3. What's at stake (why this decision matters)

Don't add your own opinion. Don't steer it. Don't open project files, docs, configs, or past transcripts. Use what the user said in the message. If they pasted material into the message, use that.

If the question is too vague ("council this: my business"), ask one clarifying question. Just one. Then proceed.

Save the framed question for the transcript.

### step 2: convene the council (6 sub-agents in parallel)

Spawn all 6 advisors simultaneously as sub-agents of the host that is running (Claude, Codex, Gemini, Cursor, or Antigravity). Each gets:

1. Their advisor identity and thinking style (from the descriptions above)
2. The framed question
3. A clear instruction: respond independently. Do not hedge. Do not try to be balanced. Lean fully into your assigned perspective. If you see a fatal flaw, say it. If you see massive upside, say it. Your job is to represent your angle as strongly as possible. The synthesis comes later.

Each advisor should produce a response of 150-300 words. Long enough to be substantive, short enough to be scannable.

**Sub-agent prompt template:**

```
You are [Advisor Name] on an LLM Council.

Your thinking style: [advisor description from above]

A user has brought this question to the council:

---
[framed question]
---

Respond from your perspective. Be direct and specific. Don't hedge or try to be balanced. Lean fully into your assigned angle. The other advisors will cover the angles you're not covering.

Keep your response between 150-300 words. No preamble. Go straight into your analysis.
```

### step 3: peer review (6 sub-agents in parallel)

This is the step that makes the council more than just "ask 5 times." It's the core of Karpathy's insight.

Collect all 6 advisor responses. Anonymize them as Response A through F (randomize which advisor maps to which letter so there's no positional bias). The mapping stays hidden from reviewers, including which letter is The User.

Spawn 6 new sub-agents, one for each advisor. Each reviewer sees all 6 anonymized responses and answers three questions:

1. Which response is the strongest and why? (pick one)
2. Which response has the biggest blind spot and what is it?
3. What did ALL responses miss that the council should consider?

**Reviewer prompt template:**

```
You are reviewing the outputs of an LLM Council. Six advisors independently answered this question:

---
[framed question]
---

Here are their anonymized responses:

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

Answer these three questions. Be specific. Reference responses by letter.

1. Which response is the strongest? Why?
2. Which response has the biggest blind spot? What is it missing?
3. What did ALL six responses miss that the council should consider?

Keep your review under 200 words. Be direct.
```

### step 4: chairman synthesis

This is the final step. One agent gets everything: the original question, all 6 advisor responses (now de-anonymized so you can see which advisor said what), and all 6 peer reviews.

The chairman's job is to produce the final council output. It follows this structure:

**COUNCIL VERDICT**

1. **Where the council agrees** — the points that multiple advisors converged on independently. These are high-confidence signals.

2. **Where the council clashes** — the genuine disagreements. Don't smooth these over. Present both sides and explain why reasonable advisors disagree.

3. **Blind spots the council caught** — things that only emerged through the peer review round. Things individual advisors missed that other advisors flagged.

4. **The recommendation** — a clear, actionable recommendation. Not "it depends." Not "consider both sides." A real answer. The chairman can disagree with the majority if the reasoning supports it.

5. **The one thing you should do first** — a single concrete next step. Not a list of 10 things. One thing.

**Chairman prompt template:**

```
You are the Chairman of an LLM Council. Your job is to synthesize the work of 6 advisors and their peer reviews into a final verdict.

The question brought to the council:
---
[framed question]
---

ADVISOR RESPONSES:

**The User:**
[response]

**The Contrarian:**
[response]

**The First Principles Thinker:**
[response]

**The Expansionist:**
[response]

**The Outsider:**
[response]

**The Executor:**
[response]

PEER REVIEWS:
[all 6 peer reviews]

Produce the council verdict using this exact structure:

## Where the Council Agrees
[Points multiple advisors converged on independently. These are high-confidence signals.]

## Where the Council Clashes
[Genuine disagreements. Present both sides. Explain why reasonable advisors disagree.]

## Blind Spots the Council Caught
[Things that only emerged through peer review. Things individual advisors missed that others flagged.]

## The Recommendation
[A clear, direct recommendation. Not "it depends." A real answer with reasoning.]

## The One Thing to Do First
[A single concrete next step. Not a list. One thing.]

Be direct. Don't hedge. The whole point of the council is to give the user clarity they couldn't get from a single perspective.
```

### step 5: generate the council report

After the chairman synthesis is complete, generate a visual HTML report and save it to the user's workspace.

**File:** `council-report-[timestamp].html`

The report should be a single self-contained HTML file with inline CSS. Clean design, easy to scan. It should contain:

1. **The question** at the top
2. **The chairman's verdict** prominently displayed (this is what most people will read)
3. **An agreement/disagreement visual** — a simple visual showing which advisors aligned and which diverged. This could be a grid, a spectrum, or a simple breakdown showing advisor positions. Keep it clean and scannable.
4. **Collapsible sections** for each advisor's full response (collapsed by default so the page isn't overwhelming, but available if the user wants to dig in)
5. **Collapsible section** for the peer review highlights
6. **A footer** showing the timestamp and what was counciled

Use clean styling: white background, subtle borders, readable sans-serif font (system font stack), soft accent colors to distinguish advisor sections. Nothing flashy. It should look like a professional briefing document.

Open the HTML file after generating it so the user can see it immediately.

### step 6: save the full transcript

Save the complete council transcript as `council-transcript-[timestamp].md` in the same location. This includes:
- The original question
- The framed question
- All 6 advisor responses
- All 6 peer reviews (with anonymization mapping revealed)
- The chairman's full synthesis

This transcript is the artifact. If the user wants to run the council again on the same question after making changes, having the previous transcript lets them (or a future agent) see how the thinking evolved.

---

## output format

Every council session produces two files:

```
council-report-[timestamp].html    # visual report for scanning
council-transcript-[timestamp].md  # full transcript for reference
```

The user sees the HTML report. The transcript is there if they want to dig deeper or reference specific advisor arguments later.

---

## example: counciling a product decision

**User:** "Council this: I'm thinking of building a $297 course on Claude Code for beginners. My audience is mostly non-technical solopreneurs. Is this the right move?"

**The User:** "The ask was whether this is the right move for a non-technical audience. A plan that leads with the tool name ignores the audience already named. The $297 figure was a proposal, not a constraint. Don't add a community or a higher price unless that was asked."

**The Contrarian:** "The market is flooded with Claude courses right now. At $297, you're competing with free YouTube content. Your audience is non-technical, which means high support burden and refund risk. The people who would pay $297 are likely already past beginner level..."

**The First Principles Thinker:** "What are you actually trying to achieve? If it's revenue, a course is one of the slowest paths. If it's authority, a free resource might do more. If it's building a customer base for higher-ticket offers, the price point and audience might be mismatched..."

**The Expansionist:** "Beginner Claude for solopreneurs is a massive underserved market. Everyone's teaching advanced stuff. If you nail the beginner angle, you own the entry point to this entire space. The $297 might be low. What if this became a $997 program with community access..."

**The Outsider:** "I don't know what Claude Code is. If I saw '$297 course on Claude Code for beginners,' I wouldn't know if this is for me. The name means nothing to someone outside your world. Your landing page needs to sell the outcome, not the tool..."

**The Executor:** "A full course takes 4-8 weeks to produce properly. Before building anything, run a live workshop at $97 to 50 people. You validate demand, generate testimonials, and create the raw material for the course. If 50 people don't buy the workshop, 500 won't buy the course..."

**Chairman's Verdict:**

*Where the council agrees:* The beginner solopreneur angle has real demand, but the current framing (Claude Code course) is too tool-specific and won't resonate with non-technical buyers.

*Where the council clashes:* Price. The Contrarian says $297 is too high given competition. The Expansionist says it's too low for the value. The resolution likely depends on how much support and community access is bundled.

*Blind spots caught:* The Outsider's point that "Claude Code" means nothing to the target buyer is the single most important insight. Every advisor except the Outsider assumed the audience already knows what this is.

*Recommendation:* Don't build the course yet. Validate with a lower-commitment offer first. But reframe entirely: sell the outcome (automate your business, get 10 hours back per week), not the tool.

*One thing to do first:* Run a $97 live workshop called "How to automate your first business task with AI" to 50 people. Don't mention Claude Code in the title.

---

## Install

The agent does this. Do not ask the user to run the script. The install writes outside the current project (`~/.agents`, `~/.claude`, `~/.gemini`, `~/.cursor`). If the host asks for permission, ask the user once to approve those writes, then run the commands. Needs `git` and `python3`. The repository is public, so no GitHub login is required. This skill does not have its own repository. It is `skills/llm-council` inside:

```
https://github.com/Primuse-Pte-Ltd/LLM-Skills
```

Clone that repository once, outside the current project, then symlink this folder. See `README.md` for the prompt, the host table, Omniroute, and KisumAI.

```bash
mkdir -p "$HOME/.agents/skills"
if [ ! -d "$HOME/.agents/LLM-Skills/.git" ]; then
  git clone https://github.com/Primuse-Pte-Ltd/LLM-Skills.git "$HOME/.agents/LLM-Skills"
else
  git -C "$HOME/.agents/LLM-Skills" pull --ff-only
fi
if [ -e "$HOME/.agents/skills/llm-council" ] && [ ! -L "$HOME/.agents/skills/llm-council" ]; then
  mv "$HOME/.agents/skills/llm-council" "$HOME/.agents/skills/llm-council.old-repo"
fi
ln -sfn "$HOME/.agents/LLM-Skills/skills/llm-council" "$HOME/.agents/skills/llm-council"
python3 "$HOME/.agents/skills/llm-council/scripts/install.py"
```

Do not clone the repository into `~/.agents/skills/llm-council`. Do not pull inside an old standalone checkout, and do not point that checkout at the old GitHub URL. A link that already points at the folder is left alone. The `mv` only runs when that path is a real directory left from the old standalone repo. Tell the user when it was moved to `llm-council.old-repo`. Do not link or remove `llm-coding-council`. That is a different skill.

`install.py` checks where it is running first and links only the agents whose folder exists in the home folder. If it prints `STOP` (exit 2: no agents found, so this is a cloud or remote sandbox; exit 3: home folder not writable), do not work around it. Tell the user what it found and ask them to run the install from an agent on their own computer, or to approve full access. `--check` reports without changing anything.

| Host | Where it lands |
|---|---|
| Claude Code | `~/.claude/skills/llm-council` |
| Codex | `~/.agents/skills/llm-council` (Codex reads this directory; `~/.codex/skills` is the old location) |
| Gemini CLI | `~/.gemini/skills/llm-council` |
| Antigravity | `~/.gemini/config/skills/llm-council` |
| Cursor | `~/.cursor/skills/llm-council` |

The links point at the skill folder inside `~/.agents/LLM-Skills`, so a later `git -C "$HOME/.agents/LLM-Skills" pull --ff-only` is what every host reads. Do not copy a second `SKILL.md` into those folders. If `gemini` is on `PATH`, also run `gemini skills link "$HOME/.agents/skills/llm-council" --consent`.

To remove the skill, run `python3 "$HOME/.agents/skills/llm-council/scripts/uninstall.py" --check`, show the user what it would remove, and run it without `--check` after they approve.

Omniroute does not load this `SKILL.md`. `omniroute skills install` is a different kind of skill. The links above are what Omniroute's agents read. Omniroute picks the upstream provider and that provider's model.

KisumAI's chat council is a separate runtime. It loads `ai-agent-chat/skills/council/prompts/*.md`, not this file. Its models are `COUNCIL_ADVISOR_MODEL`, `COUNCIL_REVIEWER_MODEL`, and `COUNCIL_CHAIRMAN_MODEL` in `ai-agent-chat/.env` and `.env.production`. Do not replace those prompt files with this skill, and do not set those variables to `gpt-5-nano` or `gemini-3-flash-preview`. Do not copy this skill into the Kisum tree.

## important notes

- **The host that loaded this skill is the chairman.** Claude, Codex, Gemini, Cursor, and Antigravity all run this council. Do not move it to a different agent. Omniroute and KisumAI do not load this file as their own council. See Install.
- **Always spawn all 6 advisors in parallel.** Sequential spawning wastes time and lets earlier responses bleed into later ones.
- **Always anonymize for peer review.** If reviewers know which advisor said what, they'll defer to certain thinking styles instead of evaluating on merit.
- **The chairman can disagree with the majority.** If 5 out of 6 advisors say "do it" but the reasoning of the 1 dissenter is strongest, the chairman should side with the dissenter and explain why. Overruling The User means naming the constraint being broken.
- **Don't council trivial questions.** If the user asks something with one right answer, just answer it. The council is for genuine uncertainty where multiple perspectives add value.
- **Don't open files.** Do not scan the repo, read configs, or look up past transcripts. The question is what the user said.
- **The visual report matters.** Most users will scan the report, not read the full transcript. Make the HTML output clean and scannable.

---

Methodology by [Andrej Karpathy](https://x.com/karpathy). The advisor session was adapted from a Claude Code version inspired by [@olelehmann](https://x.com/olelehmann) and published by [@tenfoldmarc](https://instagram.com/tenfoldmarc). This copy runs in Claude, Codex, Gemini, Cursor, and Antigravity.
