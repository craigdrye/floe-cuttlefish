# Audit: quant

**Syllabus**: [`src/data/syllabi/career/quant_interview_core.md`](../../../src/data/syllabi/career/quant_interview_core.md)
**Track id**: `quant`
**Tier**: career (`ageGroup: 'career-hopper'`)
**Region**: Jurisdiction-neutral (quant interview craft is global)
**Status**: `playable` — wired and serving questions

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Interview Map and Problem-Solving Protocol | ✅ | Clarify-before-solve, sanity-check magnitude, base-rate reasoning, silent-algebra communication (InterviewReasoningPolish) |
| 2. Probability Foundations | ✅ | Heavy coverage — Boy or Girl, Russian Roulette, Birthday, Drunk Passenger, Bayes (unfair coin), independent events, badge numbers, snack-table committee |
| 3. Counting and Combinatorics | ✅ | Aces distribution, two-typo resume, elevator collisions, panel combinations |
| 4. Expected Value and Games | ✅ | Dice game recursion, expected coffee damage, Coupon Collector, office-dice IPO, fair-game pricing |
| 5. Brainteasers and Invariants | ✅ | Screwy Pirates, Burning Ropes, Defective Ball, Light Switches, Mislabeled Bags, Shrinking Blotter invariant, gossip-committee logic |
| 6. Mental Math, Estimation, Market Numeracy | ⚠️ partial | Some symmetry/EV intuition covered; explicit order-of-magnitude and rate-of-return drills are thin |
| 7. Coding and Data Screen Basics | ⚠️ partial | Streaming Top Five (heap), duplicate-ticker triage (hash set), missing-integers algebraic trick — covered via Algorithms / Programming chapters in `quant.ts` |
| 8. Mock Interviews and Recovery | ✅ | InterviewReasoningPolish covers clarification, sanity check, conditional reasoning, communication |

**Chapter taxonomy near-mismatch.** `quant.ts` uses analytic chapter labels ("Brain Teasers", "Probability", "Calculus", "Linear Algebra", "Finance", "Algorithms", "Programming"). These don't literally match the syllabus's "Chapter N" naming, but they are clean academic categories and map well. `careerAgentGeneratedInterviewReasoningPolish.ts` uses prefixed "Quant Interview: …" labels — different again. Acceptable; the underlying content is strong enough that taxonomy realignment is cosmetic.

The track-split logic in `quant.ts` is worth flagging: `isQuantInterviewCoreQuestion()` routes by chapter (Brain Teasers, Probability) OR by a hand-maintained title allowlist. Anything not matching falls to `quantAdvanced`. The allowlist is fragile — a new question added under chapter "Finance" with a non-listed title silently flows to `quantAdvanced`, not `quant`. See open actions.

## Per-file recommendations

| File | Quant Q's | Bucket | Reason |
|---|---|---|---|
| [`quant.ts`](../../../src/data/questionCatalog/quant.ts) | ~30 routed to `quant` (out of ~250 total in the file) | **KEEP** | **Gold standard for the catalog.** Hand-authored, deep per-distractor explanations, multi-paragraph teaching lessons. Source attribution to classic quant interview material. Includes the title allowlist that splits between `quant` and `quantAdvanced`. Voice template for any new quant authoring. |
| [`careerAgentGeneratedInterviewReasoningPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedInterviewReasoningPolish.ts) (`quant` section) | 4 | **FIX** | Four meta-skill questions (clarify, sanity check, base rate, communication). Per-distractor distractor uses file-wide `DEFAULT_FLAW` constant → auto-FIX. Content concept is good and complements `quant.ts`'s pure-puzzle bank with explicit interview-protocol drills. |

**Net effect:** ~34 quant questions across 2 files → ~30 kept + 4 fixed = ~34 questions of consistently high quality. No deletion required.

## Open actions (priority order)

1. **Replace the title-allowlist split with explicit per-question `track` metadata.** The current `isQuantInterviewCoreQuestion()` filter uses a hand-maintained list of ~38 titles plus two chapter names. Any new question that doesn't match silently lands in `quantAdvanced`. Tag each question explicitly (core / advanced) at authoring time.
2. **Author 4–6 mental-math / estimation questions** for Chapter 6 (rapid arithmetic, orders of magnitude, bid-ask intuition, market-numeracy speed drills). The chapter is currently underweight relative to its syllabus role.
3. **Fix the 4 InterviewReasoningPolish questions' per-distractor explanations** to match the `quant.ts` standard (specific "why this is wrong" + reusable reasoning move).
4. **No `region` tag needed** — quant content is jurisdiction-neutral per the framework.
5. **No `lastReviewed` urgency** — math doesn't depreciate. (Code-screen patterns drift a little — a periodic refresh on `Algorithms` / `Programming` chapters is healthy but not blocking.)
6. **Audit chapter coverage of `Stochastic`, `Volatility`, `Derivatives`, and `Risk` content** — these flow to `quantAdvanced` per the title allowlist and overlap with `quantAdvanced`'s syllabus. See `quantAdvanced.md`.

## Estimated effort

- Title-allowlist → explicit `track` metadata migration: ~2 hours
- Mental-math / estimation authoring: ~2 hours (~6 questions)
- InterviewReasoningPolish per-distractor rewrite: ~30 min

**~0.5 working days at this depth.** This is by far the cleanest track in the cluster.

## Notes for next auditor

`quant.ts` is the model for the catalog's quality bar — its multi-paragraph lesson text, source attribution to canonical quant interview lore (Heard on the Street, Quant Job Interview Questions, etc.), and tight per-distractor reasoning should be the template for any new authoring on credentials-heavy tracks. The brain-burners and probability content reuses across `brainBurners` and `quant` (note the chapter-based routing in `career.ts` line 80–86). Don't break that share; just give every question an explicit track tag so the routing logic isn't fragile string matching.
