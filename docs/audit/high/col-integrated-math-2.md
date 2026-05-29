# Audit: col-integrated-math-2 (Integrated Math 2 & 3)

**Syllabus**: [`src/data/syllabi/high/integrated_math_2_and_3.md`](../../../src/data/syllabi/high/integrated_math_2_and_3.md)
**Track id**: `col-integrated-math-2` (syllabus also covers `col-integrated-math-3`)
**Tier**: high (Year 11, ages 15-16)
**Region**: US Common Core integrated pathway (California framing, plus NCTM/Illustrative resources)
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 1752

## Wiring problem (auto-FIX)

`col-integrated-math-2` and `col-integrated-math-3` are **NOT** in `highMathTrackIds` and **NOT** mapped in [`highMath.ts`](../../../src/data/questionCatalog/highMath.ts). Both silently route to `'high-generated'` and end up served by `mathBlueprints()` in [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts:205) — sticker robots, bracket rescue, factor trap, drone gradient, pancake puddle. The blueprint set is six items wide and cycles to fill 50 slots, which means players see the same six prompts repeatedly with numeric variation. This is the largest wiring gap in the cluster: a two-year syllabus (Int Math 2 *plus* Int Math 3) is currently served by a single generated fallback. Auto-FIX is urgent.

## Coverage map (against syllabus)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Quadratic Functions and Complex Solutions | partial | "Factor trap" blueprint (x^2 - 5x + 6); no completing the square, no complex numbers. |
| 2. Polynomials, Rational Expressions, and Algebraic Structure | no | No polynomial division, no rational equations, no extraneous-solution items. |
| 3. Function Analysis, Composition, and Inverses | no | No composition, no inverse function items, no piecewise. |
| 4. Coordinate Geometry, Proof, and Conics | partial | Drone gradient gives slope; no circle equations, no conics. |
| 5. Similarity, Right Triangles, and Trigonometry | no | No similarity, no trig in any form. |
| 6. Circles, Measurement, and Geometric Modeling | no | No arc length, no inscribed angles, no tangent-secant. |
| 7. Probability, Statistics, and Inference | partial | "Keys without replacement" blueprint covers conditional probability. No normal distribution, no inference. |
| 8. Exponential, Logarithmic, and Integrated Modeling Studio | partial | "Pancake puddle rate" is implicit-differentiation flavour (more calculus than logs). No logarithms, no exponential decay. |

Coverage is near-zero across two full years of an integrated curriculum.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| (no dedicated batch) | 0 | **n/a** | No `integratedMath2ExamBatch.ts` or `integratedMath3ExamBatch.ts` exists. |
| [`highGenerated.ts → mathBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) | up to 50 | **FIX** | Six blueprints cycled into 50 slots is a poor user experience for a Year-11 student. Per-distractor explanations exist (good) but coverage is incidental. |
| [`algebra2ExamBatchQuestions`, `geometryExamBatchQuestions`, `trigonometryExamBatchQuestions`, `statisticsExamBatchQuestions`, `precalculusExamBatchQuestions`](../../../src/data/questionCatalog/) | many | **MERGE → new integratedMath2 wiring** | Integrated Math 2 + 3 covers Algebra 2 + Geometry + Trigonometry + Stats. All four exam batches already exist in `highMath.ts` for other tracks. Wire `col-integrated-math-2` to a mix of them. |

## Open actions (priority order)

1. **Auto-FIX wiring** — add `col-integrated-math-2`, `col-integrated-math-3` to `highMathTrackIds` and map both in `highMath.ts` to `[...algebra2ExamBatchQuestions, ...geometryExamBatchQuestions, ...trigonometryExamBatchQuestions, ...statisticsExamBatchQuestions]`.
2. **Author missing chapters** — 8-12 conics for Chapter 4, 6-8 composition/inverse for Chapter 3, 6-8 exponential/log for Chapter 8, 4-6 similarity proofs for Chapter 5.
3. **Add `region: 'US'`** and reconsider whether one track serving "Math 2 & 3" is right or if they should be separate playable tracks.
4. **Verify `status`** — `playable` is misleading while the catalog is fallback-only.

## Estimated effort

~8 hours: 30 min wiring, 90 min adapting existing batches, 5 h authoring the four missing chapters, 30 min region/status. Largest effort in the cluster because it spans two years of advanced curriculum.
