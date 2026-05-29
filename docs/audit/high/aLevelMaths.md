# Audit: alevelMaths

**Syllabus**: [`src/data/syllabi/high/a_level_maths.md`](../../../src/data/syllabi/high/a_level_maths.md)
**Track id**: `alevelMaths` (in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) line 187)
**Tier**: high
**Region**: **UK** (untagged — Edexcel/AQA/OCR routes; recommend `regions: ['UK']`)
**Status**: `playable` — but the dedicated content is four KS3-tier stubs, not A-level work.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Foundations, Proof, and Technology Habits | ❌ | No proof-by-contradiction, no exact-vs-decimal, no calculator-mode questions. |
| 2. Algebra, Functions, Coordinate Geometry | ⚠️ partial | The four stubs sit here (quadratic roots, f(4) for f(x)=2x+5, gradient, indices) — all GCSE Foundation difficulty. |
| 3. Sequences, Trig, Exponentials, Logarithms | ❌ | No content. |
| 4. Differentiation and Applications | ❌ | No content. |
| 5. Integration, Numerical Methods, Differential Equations | ❌ | No content. |
| 6. Statistics — Data, Probability, Distributions, Hypothesis Testing | ❌ | No content. |
| 7. Mechanics — Kinematics, Forces, Moments, Modelling | ❌ | No content. |
| 8. A-Level Maths Exam Studio | ❌ | No mark-scheme/command-word work. |

**Effective coverage: ~5% of one chapter at the wrong tier.** Topup via blueprint generators in `highGenerated.ts` pulls from generic `mathBlueprints()` (sticker robots, drone gradients, pancake puddles, quadratic factoring at x^2 − 5x + 6) — none of this hits A-Level pure/stats/mechanics rigour and none uses A-Level command words.

## Per-file recommendations

| File | A-Level Maths Q's | Bucket | Reason |
|---|---|---|---|
| [`highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) (alevelMaths block, lines 441–474) | 4 | **DELETE** | **DEFAULT_FLAW under-targeting flagged.** Questions like "If f(x) = 2x + 5, what is f(4)?" are KS3 substitution drills, not A-Level. The May 2026 audit called this exact specimen out. None of these belongs under an A-Level title. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) → `mathBlueprints()` topup | up to ~50 generated | **DELETE for this track** | The generic blueprints peak around early A-Level readiness (related rates pancake puddle, basic factoring). Wrapping them with the `alevelMaths` label misrepresents the difficulty. Exclude this track from the generic top-up. |
| [`calculusWorkoutGenerated.ts`](../../../src/data/questionCatalog/calculusWorkoutGenerated.ts) | 0 wired | **MERGE → alevelMaths** | Currently wired to `apCalculus`. Strong candidate for Chapter 4/5 coverage if differentiation/integration items are syllabus-aligned and tagged for UK exam-board language. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | 0 currently | **AUTHOR HERE** | This is the hand-authored model file per `CONTENT_AUDIT.md` — extend with A-Level questions per chapter. |

## Open actions (priority order)

1. **Delete the four stub questions** in `highAdvanced.ts` lines 441–474. They are actively misleading (A-Level title, KS3 difficulty).
2. **Author ~40–60 A-Level Maths questions** in `highBuilders.ts` covering all eight chapters. Use Edexcel/AQA command words ("Show that", "Hence", "Given that"), require exact answers, include radians/proof/Newton-Raphson/binomial/normal distribution items.
3. **Exclude `alevelMaths` from `highGenerated.ts` blueprint topup** (or build A-Level-specific blueprints) — generic math blueprints undershoot the syllabus.
4. **Add `regions: ['UK']`** to the track entry in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) line 187. The syllabus explicitly names Edexcel/AQA/OCR.
5. **Consider `status: 'soon'`** until real A-Level content lands; `playable` overpromises against four sub-level stubs.

## Estimated effort

- Stub deletion: ~10 min
- Authoring 50 A-Level questions across pure/stats/mechanics: ~16 hours (20 min/Q including per-distractor explanations + exact-answer working)
- Region tag + status adjustment + blueprint exclusion: ~30 min
- Re-grading `calculusWorkoutGenerated` items for UK syllabus alignment: ~3 hours

**~2.5 working days.** Worst per-track gap in the cluster — the four stubs are below GCSE Higher.

## Notes for next auditor

The same KS3-tier stub pattern applies to all seven sibling A-Level tracks (alevelBiology, alevelChemistry, alevelPhysics, alevelEconomics, alevelHistory, alevelEnglish, alevelComputerScience). All four-question stub blocks share the under-targeting flaw and should be deleted in one pass.
