# Flagship Pedagogical Review: ventureCapitalRoadmap

**Reviewed**: 2026-05-18
**Track**: `ventureCapitalRoadmap`
**Source file**: [`src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) (VC section, lines ~43–510)
**Syllabus**: [`src/data/syllabi/career/venture_capital_roadmap.md`](../../../src/data/syllabi/career/venture_capital_roadmap.md)
**Prior audits**: [`ventureCapitalRoadmap.md`](../ventureCapitalRoadmap.md) (original cluster audit, Wave 4 input)

This document is the **template for future flagship reviews** — the unit of analysis Floe should apply to other career-changer flagships before shipping a beta. Read it once before reviewing the next flagship.

---

## 1. What the track looked like before this review

By the time this review opened, the VC bank had already absorbed two prior interventions:

- **Wave 4** had consolidated the RoadmapFinance triplet (base + TopOff + FinalTopOff) into one canonical file, eliminated the file-wide `DEFAULT_FLAW` constant, and closed the documented Chapter 1 (Fund Math) gap with 8 new questions.
- The voice register had been re-anchored on [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) — sharp, specific, vivid distractors, no boilerplate.

What that left:

- **37 questions** across the 6 syllabus chapters.
- **No capstone.** The syllabus explicitly describes one ("Build a venture investment pack for a fictional startup"), but no question simulated that work-output.
- **Several coverage gaps inside chapters** despite the headline coverage matrix reading "all green" — e.g. Chapter 2 covered market sizing four times but never the **"why now"** thesis question or the **competitive map gap-finding** skill; Chapter 3 had no **Rule of 40** read; Chapter 4 had no **switching-cost / parallel-tool** signal Q; Chapter 5 had no explicit **valuation reasoning** question.
- **Chapter 1 difficulty arc inverted.** The hardest fund-returner math problem opened the chapter (4200000), which is the wrong entry point for a career-changer.
- **A handful of distractors leaning toward strawman jokes** rather than real misconceptions — "Whether it improves the office playlist" (pay-to-play), "The office snack budget after closing" (option pool), "Whether all customers expand automatically after a birthday" (expansion math). These read as comedy beats, not pedagogical content. Wave 4 caught most of these but not all.

That was the starting state.

---

## 2. What changed in this review

Total movement is in the table below; rationale follows.

| Action | Count | Notes |
|---|---|---|
| Questions before | 37 | Across 6 chapters, no capstone |
| Questions after | 46 | Adds capstone chapter |
| New questions authored | 9 | 6 coverage gap-fillers + 3 capstone |
| Questions reordered | 1 chapter | Ch1 leads with ownership math, not power-law math |
| Distractors tightened | ~8 lines across 6 questions | Strawmen → real misconceptions |
| Lessons strengthened | ~5 | Added benchmark numbers / explicit reasoning |
| New chapter literal added | 1 | "Capstone: Investment Pack and Synthesis" |
| Build status | green | `npx tsc --noEmit` exit 0 |

### 2.1 Chapter 1 — Difficulty arc fixed

Reordered so the chapter opens with the easier, more concrete `Check size and ownership target` (4200006) — a clean one-step arithmetic question that introduces post-money math — before stepping up to the power-law fund-returner problem (4200000). The closing question (`Fund life and recycling`, 4200007) is the broadest synthesis question in the chapter, which is the right end-of-chapter target.

### 2.2 Chapter 2 — Coverage gaps filled

Added two new questions:

- **4280010 `Why now`** — tests whether the learner can identify a discrete enabler (regulation, cost curve, buyer behavior) as opposed to a category trend. Without this question, the chapter never asked the central sourcing question.
- **4280011 `Category map gaps`** — tests the analytical output of a market map (the gap, not the directory). This was a real syllabus concept ("market map with segments, key startups, incumbents, and open questions") that had no question.

Also tightened the third distractor on `Regulated market path` (4107312) — replaced a slightly cartoonish line about regulators with a specific operational misconception about deferring licensing as a "post-launch problem."

### 2.3 Chapter 3 — Added Rule of 40

Added **4280020 `Rule of 40 read`**. The syllabus key concepts list includes "burn, runway, growth efficiency" and this was the most-cited efficiency benchmark missing from the chapter. Also tightened two distractors on `Sales cycle clue` (4107313) and one on `Expansion math` (4107304) — the originals had "lawyers enjoy surprises" / "birthday" joke distractors that didn't reflect real associate-level misconceptions.

### 2.4 Chapter 4 — Switching cost evidence Q

Added **4280030 `Switching cost evidence`** — the "parallel-tool running six months in" scenario. This tests a *behavioral* signal from customer-call evidence that the chapter had not yet covered (the syllabus lists "switching cost, implementation friction" as key concepts). Also tightened one distractor each on `Reference call read` (4107302) and `Conflict under pressure` (4107773) to remove dismissive-strawman framing.

### 2.5 Chapter 5 — Valuation reasoning Q

Added **4280040 `Valuation reasoning`** — the chapter previously had cap-table mechanics (liq pref, pro rata, option pool, SAFE, pay-to-play) and memo-craft questions, but no explicit **valuation reasoning** prompt. This question forces a career-changer to anchor a $40M post-money / $400K ARR ask against forward-revenue multiples and category comps, which is one of the most common real-world associate tasks. Also tightened the second distractor on `Option pool shuffle` (4105061) and the second distractor on `Pay-to-play clause` (4107776) to remove the "snack budget" and "office playlist" jokes — both replaced with real associate-level misconceptions.

### 2.6 Chapter 6 — Markup signaling Q

Added **4280050 `Markup signaling`** — the "6x markup on Series B" scenario. The chapter previously covered runway, milestones, reserves, and bridges, but the syllabus explicitly lists "markups" as a key concept and no question addressed how to read or report them honestly. Also reordered the chapter to lead with `Runway math` (entry-friendly arithmetic) before the qualitative `Board update triage` question — same arc principle as Ch1.

### 2.7 Capstone chapter authored

New chapter literal: **"Capstone: Investment Pack and Synthesis"**. Three integrative questions, all set in the **same fictional company (FieldChart, Series A clinical-workflow SaaS)** so the learner follows one deal across all three:

- **4280100 `Memo structure under conflicting evidence`** — choose the right IC-memo structure given a deliberately mixed evidence pattern. Forces integration of Ch2 (thesis), Ch3 (metrics), Ch4 (founder), Ch5 (terms).
- **4280101 `Kill criterion under integrated diligence`** — pick the kill criterion most likely to break the thesis given the specific evidence pattern. Tests whether the learner can prioritize, not just list.
- **4280102 `Recommendation calibration`** — choose the right form of recommendation (conditional yes with named kill criteria and ownership target) rather than a binary yes/no. This is the actual work-product the syllabus capstone describes.

The shared scenario across all three is intentional: it mirrors how an associate experiences a real deal — same facts, three different decision points.

---

## 3. Pedagogical principles applied (use these as the template)

This is the explicit list of what made the review good. Apply the same checks to the next flagship.

### Principle 1 — Test understanding, not recall

Aim for ~70% application questions (apply a concept to a new scenario) and ~30% recall (definition pinning). Audit pass: every question in this bank now presents a scenario, not a definition, and asks the learner to make a *decision* the scenario data supports. The closest thing to a recall question (`Fund life and recycling`) still requires reasoning about *why* the convention exists rather than memorizing the number.

### Principle 2 — Difficulty arc per chapter

Open easy (one concept, concrete scenario), close hard (multi-concept integration or judgment under conflicting evidence). Specifically:

- First question: **entry-friendly** — one mechanic, clean arithmetic or single-concept read.
- Middle questions: **mechanic-stacking** — combine concepts within the chapter.
- Last question: **integration / synthesis** — points forward to the capstone.

This review reordered Chapters 1 and 6 to follow this arc.

### Principle 3 — Distractors are real misconceptions, not strawmen

The voice register from [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) uses metaphor in the **prompt** (whimsy / voice) but keeps the answer choices **plausible and substantive**. The test: every distractor should make a learner stop and think "is that actually wrong?" — not laugh and skip. Strawmen distractors ("the office snack budget", "lawyers enjoy surprises") test nothing and waste the question. Tightened ~8 of these.

### Principle 4 — Coverage vs syllabus is checked at the concept level, not the chapter level

A chapter can be "covered" (has questions in it) without covering the **key concepts** the syllabus lists for that chapter. Build the coverage matrix at the concept level (see Section 4 below), find the gaps, author to fill them.

### Principle 5 — Capstone simulates the work-output

Every career-changer course should have an explicit Capstone chapter whose questions integrate the full course around the **work-output** the syllabus describes. The capstone is not "harder questions" — it is **integrative** questions where the scenario forces choices across chapters. A shared fictional company across capstone questions is a strong pattern because it mirrors the real-deal experience.

### Principle 6 — Voice consistency across the bank

Match the canonical voice (here: `jargonBusters.ts`). Sharp, specific, vivid. No filler. No "office snack budget." Prompts can be playful; answer choices must be substantive.

### Principle 7 — Lesson lines carry value beyond the correct answer

A good `lesson` adds context the question itself doesn't carry: a benchmark number, a frame for next-level thinking, a connection to adjacent concepts. Several lesson lines were strengthened in this pass (e.g. CAC payback now cites "best-in-class under 18 months", DPI/TVPI lesson now frames "a fund is only as good as its eventual DPI").

---

## 4. Coverage matrix (syllabus concept → question id(s))

### Chapter 1 — Venture Model and Fund Math

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Power law | 4200000 | Fund-returner math |
| Fund size | 4200000, 4200002 | $200M scenario / fee drag |
| Ownership target | 4200006 | Check size at post-money — now opens the chapter |
| Reserves | 4200004 | $150M fund with 30 seed checks |
| Management fees | 4200002 | 2-and-20 over 10 years |
| Carry | 4200003 | 20% carry, 1x preferred, no catch-up |
| DPI | 4200001 | TVPI vs DPI gap |
| TVPI | 4200001 | same |
| (extension) Dilution | 4200005 | Compounding multiplicative dilution |
| (extension) Fund life | 4200007 | Why 10-year structure |

All listed concepts covered.

### Chapter 2 — Sourcing and Market Mapping

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Thesis | 4280010 (NEW) | "Why now" |
| Founder network | — | Not directly tested (see flag below) |
| Category map | 4280011 (NEW) | Map gap-finding |
| Buyer pain | 4105056 | Bottom-up TAM via target accounts |
| Timing | 4280010 (NEW) | Same as thesis |
| Wedge | 4107301 | Dental scheduling expansion logic |
| Competitive landscape | 4280011 (NEW) | Five-incumbent positioning map |
| (extension) Regulated TAM | 4107312 | Health fintech path-to-market |
| (extension) TAM hygiene | 4103001 | $500B email TAM cleanup |

All listed concepts now covered (founder-network sourcing flagged below).

### Chapter 3 — Startup Metrics and Diligence

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| ARR | 4107304, 4280040 (uses ARR in valuation) | Expansion / valuation reasoning |
| Growth | 4280020 (NEW) | Rule of 40 read |
| Retention | 4105058 | NRR vs logo retention |
| Churn | 4105058 | same |
| CAC payback | 4103003 | 6-month math |
| Burn | 4280020 (NEW), 4105062 | Rule of 40 / runway |
| Runway | 4105062 | $4.8M / $400K |
| Cohort quality | 4105059 | Day-30 retention |
| Usage | 4103004 | Pilot weekly logins |
| (extension) Services disguise | 4107305 | Untracked founder labor |
| (extension) Sales cycle | 4107313 | 9-month enterprise cycle |

All listed concepts covered.

### Chapter 4 — Founder, Product, and Customer Evidence

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Founder-market fit | 4105057 | Fintech risk-ops founder |
| Product pull | 4103004, 4280030 (NEW) | Pilot quality / switching cost |
| Reference calls | 4107302, 4107773 | Behavior patterns |
| Implementation friction | 4280030 (NEW) | Parallel-tool running |
| Switching cost | 4280030 (NEW) | same |
| Roadmap risk | 4107303 | Team-gap diligence |
| (extension) Coachability | 4103002 | Founder updating plan from data |

All listed concepts covered.

### Chapter 5 — Terms, Memo, and Investment Decision

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Valuation | 4280040 (NEW) | Forward ARR multiple + comps |
| Pre-money | 4280040 (NEW), 4105061 | Valuation / option pool |
| Post-money | 4200006 (Ch1), 4280040 (NEW) | Check sizing / valuation |
| Liquidation preference | 4103005 | 1x non-participating |
| Pro rata | 4105060 | Ownership defense |
| Board rights | 4107307 | Small-fund board seat ask |
| Allocation | 4200006 (Ch1) | Check size at ownership target |
| IC memo | 4103007, 4105064 | Memo structure / kill criteria |
| (extension) Option pool shuffle | 4105061 | Pre-money pool effect |
| (extension) SAFE conversion | 4107306 | Prior SAFEs |
| (extension) Pay-to-play | 4107776 | Conversion on non-participation |

All listed concepts covered.

### Chapter 6 — Portfolio Support and Follow-On Decisions

| Syllabus concept | Question id(s) | Notes |
|---|---|---|
| Board updates | 4103006 | 9-month runway triage |
| KPI tracking | 4105063 | Milestone planning |
| Hiring support | 4105063 | "Hire to milestones" lesson |
| Bridge round | 4107315 | 6-month runway / 2-quarter proof gap |
| Inside round | 4107315 | Same scenario tests inside-round logic implicitly |
| Markups | 4280050 (NEW) | 6x markup signaling |
| Reserves | 4107785 | Two-company allocation choice |

All listed concepts covered.

### Capstone — Investment Pack and Synthesis (NEW)

| Syllabus capstone work-output | Question id(s) | Notes |
|---|---|---|
| Sourcing thesis | 4280100 | Embedded in FieldChart scenario |
| Market map | 4280101 | Incumbents and competitive position |
| Diligence checklist | 4280101 | Kill-criterion prioritization |
| Customer-call plan | 4280100, 4280101 | Mid-decile customer-call sample |
| Fund-math note | 4280102 | 12% ownership target, check sizing |
| One-page recommendation | 4280102 | Conditional-yes form |

All capstone work-output elements addressed by one of the three questions.

---

## 5. Difficulty arc per chapter (post-review)

For each chapter, the entry question, midpoint, and closing question. The arc should move from one-concept to multi-concept.

- **Ch1 Fund Math** — open: `Check size and ownership target` (4200006, one-step post-money arithmetic) → mid: `Carry waterfall` (4200003, multi-step calculation) → close: `Fund life and recycling` (4200007, conceptual rationale).
- **Ch2 Sourcing** — open: `Why now` (4280010, single concept) → mid: `Bottom-up TAM` (4105056, applied calc) → close: `Regulated market path` (4107312, multi-factor diligence judgment).
- **Ch3 Metrics** — open: `CAC payback check` (4103003, clean math) → mid: `Retention shape` (4105058, two-metric synthesis) → close: `Rule of 40 read` (4280020, integration of growth and burn).
- **Ch4 Founder** — open: `Coachability signal` (4103002, single behavior read) → mid: `Reference call read` (4107302, pattern interpretation) → close: `Switching cost evidence` (4280030, customer-evidence synthesis).
- **Ch5 Terms** — open: `Liquidation preference` (4103005, one-term definition) → mid: `SAFE conversion` (4107306, cap-table mechanics) → close: `Kill criteria` (4105064, judgment).
- **Ch6 Portfolio** — open: `Runway math` (4105062, one-line arithmetic) → mid: `Milestone planning` (4105063, planning under runway constraint) → close: `Markup signaling` (4280050, honest reporting judgment).
- **Capstone** — three integrative questions on a shared deal (FieldChart). 4280100 → 4280101 → 4280102 maps directly to the syllabus work-output.

---

## 6. Capstone design rationale

The syllabus capstone work-output is six artifacts: sourcing thesis, market map, diligence checklist, customer-call plan, fund-math note, and one-page investment recommendation. A natural temptation is to author six questions — one per artifact. That would be wrong: the capstone is supposed to test **integration**, not **the ability to list six artifacts in a row**.

The three-question structure adopted here uses a **shared fictional company (FieldChart)** across all three, with each question targeting a different decision point on the same deal:

1. **Memo structure** — forces the learner to choose how to *present* mixed evidence. Integrates thesis, metrics, founder, and terms.
2. **Kill criterion choice** — forces the learner to *prioritize* what to test next given the specific evidence pattern. Diligence judgment, not list-making.
3. **Recommendation calibration** — forces the learner to pick the right *form* of the recommendation (conditional yes with named kill criteria and ownership). This is what the syllabus actually asks for.

This pattern — **shared scenario across capstone questions** — is the recommended template for other career-changer flagships. It mirrors the real associate experience (same deal, multiple decisions) far better than three unrelated questions on three unrelated deals.

---

## 7. Flags for human review

Items the next reviewer should look at:

1. **Founder network as a sourcing concept** is not directly tested by any question. The Wave 4 audit listed it as a Chapter 2 key concept but the syllabus framing is light. Decision: leave un-tested for now — the closest live concept is "thesis" (now covered by `Why now`). A future Q on the relationship-driven nature of pipeline could close this if a real gap surfaces in playtest.
2. **No regulatory text needs verification** — the bank cites no specific regulations or statutes. The closest is `Regulated market path` (4107312) which uses generic language ("sponsor-bank or state licensure") rather than naming specific authorities. Safe.
3. **The `Inside round` concept in Ch6** is implicitly covered by the bridge-round triage question (4107315) but not by name. Could add a dedicated Q if playtest shows the term confuses learners.
4. **Question 4280040 (Valuation reasoning)** uses a benchmark — "$40M on $400K is 100x trailing ARR" — that is grounded in current category norms but will date. Mark for `lastReviewed` once schema lands.
5. **No images or video adjuncts** authored in this pass. The flagship-review template should consider whether image-bearing schema additions (e.g. cap-table diagrams, waterfall illustrations) would lift Chapter 1 and Chapter 5 specifically. Out of scope for this pass.
6. **The 4280050 markup signaling Q** uses "6x" as the example — this is realistic for a strong Series B but not universal. Acceptable as a worked example; verify the language remains accurate if benchmarks shift over years.

---

## 8. What made this review good — the one-paragraph summary

The review separated three things that usually get conflated: **distractor quality** (Wave 4's job, already done), **coverage at the concept level** (genuinely missing in places the chapter-level audit said "covered"), and **pedagogical structure** (difficulty arc, capstone integration, voice consistency). The biggest wins were the three capstone questions (which the syllabus explicitly called for and the bank had never carried) and the six coverage gap-fills (Rule of 40, switching cost, valuation reasoning, why-now, market-map gap, markup signaling) — each of which addresses a real associate-level skill the chapter previously implied but did not test. Reorderings were small but real (Ch1 and Ch6 now lead with arithmetic, then build to judgment). Distractor tightenings removed the residual strawmen Wave 4 left behind. The total cost was ~9 new questions and ~5 light edits; the value is that the track now reads end-to-end as a career-changer course, not a question bank with the right tags on it. **That gap — between "a tagged bank" and "a course" — is the gap the flagship template is designed to close.**
