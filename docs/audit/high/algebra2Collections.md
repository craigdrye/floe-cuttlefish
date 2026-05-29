# Audit: algebra2Collections (col-algebra-2)

**Syllabus**: [`src/data/syllabi/high/algebra_2_collections.md`](../../../src/data/syllabi/high/algebra_2_collections.md)
**Track id**: `col-algebra-2` (age catalog line 1488)
**Tier**: high (year 11)
**Region**: US-leaning (Common Core HS Mathematics)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Function Structure and Transformation | ✅ | `highBuilders.ts:makeColAlgebra2Quiz` Unit 1 (Introduction to functions) — direct match |
| 2. Quadratics, Complex Numbers, Algebraic Fluency | ✅ | Unit 5 (Quadratic relations, equations, and inequalities) |
| 3. Polynomial Functions and Identities | ⚠️ | Builder lacks an explicit polynomial-division unit; covered partly by exam batch |
| 4. Rational and Radical Expressions | ✅ | Units 6 (Square root), 7 (Cubic and cube root), 8 (Rational functions) |
| 5. Exponential and Logarithmic Models | ✅ | Units 9, 10 (Exponential and logarithmic functions) |
| 6. Sequences, Series, Recursive Reasoning | ⚠️ | Not in the Algebra 2 builder; need to lift from `makeColPrecalculusQuiz` or workout |
| 7. Conics, Coordinate Geometry, and Modeling | ❌ | No coverage in the Algebra 2 builder; conics live in the Precalculus builder Unit 6 |
| 8. Probability, Statistics, and Function Modeling Studio | ⚠️ | Unit 11 (Linear, quadratic, and exponential data models) partial; no statistics/probability items |

**Wiring is correct.** `col-algebra-2` is in `highMathTrackIds` (`index.ts:27`) and `highMath.ts:65` wires it to `makeColAlgebra2Quiz` + `algebra2ExamBatchQuestions` + Numbas/WeBWorK algebra imports. **Routing is fine** — first track in the cluster where the routing actually works as intended.

**Chapter taxonomy.** Builder uses 11 "Unit X" labels; syllabus uses 8 named chapters. Builder is at finer granularity but conics, sequences, and statistics are gaps relative to the syllabus.

## Per-file recommendations

| File | Items for col-algebra-2 | Bucket | Reason |
|---|---|---|---|
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColAlgebra2Quiz` (Units 1–11) | hand-authored | **KEEP** — gold standard | Per May 2026 audit, `highBuilders.ts` is the gold-standard hand-authored math reference. Protect. |
| [`algebra2ExamBatch.ts`](../../../src/data/questionCatalog/algebra2ExamBatch.ts) | ~50 | **KEEP** | Same Floe-native drill pattern as algebra1 batch; high-quality per-distractor. |
| [`numbasWebworkMathImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathImported.ts) (algebra slice) | imported | **KEEP/EVALUATE** | Numbas/WeBWorK is a respected open-question source; check for stripped-context items per the imports smell. |
| [`numbasWebworkMathAdditionalImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathAdditionalImported.ts) (algebra) | imported | **KEEP/EVALUATE** | Same as above. |
| [`numbasWebworkMathThirdImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathThirdImported.ts) (algebra) | imported | **KEEP/EVALUATE** | Sample for duplicate prompts across the three Numbas tranches. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) top-up | only if shortfall | **OK as floor** | Top-up only fires below 50 items; with the four sources above, generator should rarely engage here. |

## Open actions (priority order)

1. **Author 4–6 polynomial-division items** for Chapter 3 (long/synthetic division, Factor/Remainder Theorem). Builder is thin on this.
2. **Author 4–6 sequence/series items** for Chapter 6 (arithmetic vs geometric, recursive vs explicit, finite geometric series, financial growth).
3. **Author 4–6 conics items** for Chapter 7 (or lift from `makeColPrecalculusQuiz` Unit 6 "Conics").
4. **Author 4–6 probability/statistics items** for Chapter 8 (conditional probability, normal distribution z-scores, residuals).
5. **Realign chapter labels** to the eight syllabus chapter names (or fold the 11-unit structure into the syllabus's chapter framing).
6. **De-duplicate** across the three Numbas tranches — sample for overlap before keeping all three.

## Estimated effort

- Authoring 16–24 items across four chapter gaps: ~7–10 hours
- Chapter rename pass: ~1 hour
- Numbas dedupe audit: ~2 hours

## Notes for next auditor

This track is in better shape than `col-algebra-1` because the routing actually works. The remaining work is closing four chapter gaps (sequences, conics, statistics, polynomial division) and de-duplicating the three Numbas import tranches. Consider whether the three Numbas files can be consolidated into one.
