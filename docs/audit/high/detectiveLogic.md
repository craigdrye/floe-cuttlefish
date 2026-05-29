# Audit: detectiveLogic

**Syllabus**: [`src/data/syllabi/high/detective_logic.md`](../../../src/data/syllabi/high/detective_logic.md)
**Track id**: `detectiveLogic` (titled "Logic Puzzles" in the catalog, Year 10, ages 14-15)
**Tier**: high
**Region**: jurisdiction-neutral

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. The Detective's Question | partial | "Best clue" item covers separating fact from inference |
| 2. Deduction, Induction, and Abduction | weak | One sufficient-evidence item; no abduction or inference-to-best-explanation |
| 3. Evidence and Interpretation | weak | No direct/circumstantial/chain-of-custody/Locard items |
| 4. Fallacies, Bias, and False Leads | not covered | Confirmation bias, tunnel vision, hasty generalization in detective context all missing |
| 5. Probability and Competing Theories | not covered | Base-rate, conditional probability, updating, simplest sufficient theory all missing |
| 6. Sources, Witnesses, and Reliability | not covered | No eyewitness, motive, primary/secondary source items |
| 7. Codes, Timelines, and Logic Grids | weak | "Logic grid systematic tracking" item exists; no actual ciphers or timeline contradictions |
| 8. Building a Fair Mystery | not covered | Fair-play, clue placement, red herring design absent |

Track is in `highFunTrackIds` (`index.ts:70`) so it routes through `highFun.ts`, which contains 4 hand-authored items and then **tops up via `topUpHighGeneratedTrack`** to reach 50 questions. Top-up draws from `highGenerated`'s philosophy/creative fallback — i.e. dragon-syllogism + game core-loop, which makes Logic Puzzles bleed into game-design fluff.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highFun.ts -> detectiveLogic`](../../../src/data/questionCatalog/highFun.ts) (lines 143-176) | 4 hand-authored | **KEEP** | Sober per-distractor explanations (best clue, contradiction test, systematic process, sufficient evidence). Matches `jargonBusters.ts` quality bar. Voice is right for an enrichment course. |
| [`highGenerated.ts` top-up via `topUpHighGeneratedTrack`](../../../src/data/questionCatalog/highGenerated.ts) | ~46 cycled fallback items | **FIX** | Top-up reaches into `philosophyCreativeBlueprints` for an unrelated track, so players get core-loop and dragon syllogism items in their Logic Puzzles deck. Fix the family classifier (`familyFor` at `highGenerated.ts:174` already routes "logic puzzles" -> 'creative', then `philosophyCreativeBlueprints`). Either give Logic Puzzles its own blueprint set or top up from `logicArgumentationBlueprints` (which is genuinely on-topic). |
| `highLogicArgumentationOpenLogicBatch.ts` | 0 (not wired) | **MERGE -> detectiveLogic top-up** | These 10 quantifier/conditional/counterexample items are excellent puzzle reasoning material. Wire them in. |

## Open actions (priority order)

1. **Author a `detectiveBlueprints` set** (8-12 items) and dispatch to it from `blueprintsFor`. Cover the 8 syllabus chapters: clue vs inference, abduction, evidence types, bias in deduction, probability/base-rate, witness reliability, cipher/timeline, fair-play mystery design.
2. **Wire `highLogicArgumentationOpenLogicBatch.ts` into the top-up** for this track instead of (or alongside) the creative fallback.
3. **Author ~6 probability/base-rate items** specifically framed as detective cases (the syllabus emphasizes "How surprising is this clue under each theory?" — perfect Bayesian framing for teens).
4. **Author ~6 witness-reliability items** with motive, memory limit, corroboration — currently a total gap.
5. **Suppress the philosophyCreativeBlueprints fallback** for Logic Puzzles.

## Estimated effort

- Author 8-12 detective blueprint items: ~3 hours
- Wire Open Logic batch + suppress wrong fallback: ~1 hour
- Author 12 probability + witness items: ~3 hours

## Flags

- **Track title mismatch**: catalog title is "Logic Puzzles" (`high.ts:320`) but syllabus and id are "Detective Logic." Either rename or accept that "Logic Puzzles" is a friendlier UI label for an enrichment course.
- **Top-up pollution**: the `topUpHighGeneratedTrack` cycle injects philosophy fallback into a games track. The aggregator fix is one line in `familyFor`, but content authoring is the real solve.
- **Region**: jurisdiction-neutral but enrichment-coded — no civic specificity needed.
