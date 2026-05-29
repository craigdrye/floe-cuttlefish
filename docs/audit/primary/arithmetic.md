# Audit: arithmetic

**Syllabus**: [`src/data/syllabi/primary/arithmetic.md`](../../../src/data/syllabi/primary/arithmetic.md)
**Track id**: `arithmetic` (also wired as `col-arithmetic`)
**Tier**: primary
**Region**: UK/US blend (NCETM + Common Core Grade 2). Not currently tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Number Sense and Counting | partial | Counting-on appears via OpenTrivia rows; no subitising or "one more / one less to 100" coverage |
| 2. Place Value to 100 | ❌ | The arithmetic bank skips two-digit partitioning entirely (covered in class2Math instead) |
| 3. Addition as Joining and Counting On | ✅ | `makeArithmeticBank` ships add facts within 100 + "add ten" derived facts |
| 4. Subtraction as Taking Away and Difference | ✅ | Subtraction fluency pairs to 91 - 47 |
| 5. Mental Strategies and Fact Families | partial | No fact-family questions; no "use a known double" derivations |
| 6. Multiplication and Division Foundations | ✅ | Times tables 2/3/4/5/10 plus halving |
| 7. Word Problems and Mathematical Talk | ❌ | Zero word problems — all bare-number computation |
| 8. Estimation, Checking, and Fluency Games | ❌ | No "is this reasonable?" prompts; no estimation rounding |

**Capstone alignment**: the syllabus capstone ("Number Detective" stations with manipulative + sentence + check) presupposes models and explanations. The generated bank delivers neither.

## Per-file recommendations

| File | Arithmetic Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `makeArithmeticBank` | ~50 (capped) | **FIX** | Template-generated. Distractors come from `numericWrong()` with the canned line "This comes from a nearby arithmetic or counting slip." every time — a soft DEFAULT_FLAW pattern. Plausibility is decent for off-by-one but no real misconception modelling. Rewrite distractor explanations per-fact to call the specific bug (added tens not ones, swapped digits, doubled when halving). |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `colArithmetic` export | ~50 | **DELETE (or alias)** | Identical bank rebound at a different baseId for the `col-arithmetic` track. Pointless duplication — alias the export instead of regenerating with a new id seed. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) `arithmetic` track | ~15 | **DELETE** | Distractors are literal placeholder strings (`"XXXXXXX"`, `"XXXXXXXX"`) with a shared boilerplate "This choice does not match the arithmetic, measurement, or word-problem relationship" line on every wrong answer. This is a hard DEFAULT_FLAW and ships unusable on mobile. Stripped-context import per the "no consolidation" pattern. |
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) | 0 | n/a — **gold standard** | No arithmetic-track entries today, but the `[answer, whyWrong, nudge]` triple style here is the bar. Protect; do not regenerate. |

## Open actions (priority order)

1. **Delete the OpenTrivia arithmetic feed.** The `XXXXXXX` placeholder distractors are reputational risk if shipped — kids see literal Xs.
2. **Author 10 word problems** matching the syllabus "Mia has 24 stickers; she gives 9 to Sam — how many left?" style. Use the `primaryBuilders.ts` `setup / prompt / fieldNote / mentorHint / wrong` shape verbatim.
3. **Author 6 estimation questions** ("Is 187 + 412 closer to 500, 600, or 700?") — closes Chapter 8.
4. **Rewrite `numericWrong()` distractor lines** to name the actual bug for that fact (e.g. "9 + 6 = 14 swaps ones and tens place when bridging through 10"). One-time cost, replaces ~150 distractor explanations across the generated banks.
5. **Mobile rendering**: fractions render as plain ASCII (`"3/4"`) consistently across primary math — flag for design review whether stacked-fraction CSS is wanted for the kids surface. Currently fine but loses visual scaffolding the syllabus calls for.
6. **Add region tag** to the track entry — content mixes UK/US units and currency cues already.

## Estimated effort

- Delete OpenTrivia rows: ~10 min
- Author word problems + estimation: ~4 hours (16 questions × ~15 min)
- Rewrite generated-bank distractors: ~3 hours
- Region tag + status verification: ~15 min

**~1 working day to bring arithmetic to the `primaryBuilders.ts` bar.**

## Notes for next auditor

`makeArithmeticBank` is reused verbatim by `col-arithmetic`. Treat as one course. The "no word problems" gap repeats across the entire `primaryGeneratedMath.ts` family — solve once, apply pattern.
