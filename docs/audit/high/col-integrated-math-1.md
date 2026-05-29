# Audit: col-integrated-math-1 (Integrated Math 1 Collections)

**Syllabus**: [`src/data/syllabi/high/integrated_math_1_collections.md`](../../../src/data/syllabi/high/integrated_math_1_collections.md)
**Track id**: `col-integrated-math-1` (syllabus also lists `col-integrated-math-1-duplicate` — a self-acknowledged duplicate)
**Tier**: high (Year 10, ages 14-15)
**Region**: US Common Core integrated pathway (California/NCTM framing)
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 1400

## Wiring problem (auto-FIX)

`col-integrated-math-1` is **NOT** in `highMathTrackIds` and **NOT** mapped in [`highMath.ts`](../../../src/data/questionCatalog/highMath.ts). It silently routes to `'high-generated'`, which means players see variant-cycled blueprints from `mathBlueprints()` in [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts:205) — sticker robots, drone gradients, factor traps — that don't match the integrated-pathway syllabus structure (linear/exponential/transformation/statistics). The track is listed as `playable` despite having no first-class question bank. This is a major auto-FIX.

## Coverage map (against syllabus)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Quantities, Expressions, and Algebraic Structure | no | No first-class items; only what `mathBlueprints` happens to generate. |
| 2. Linear Equations and Inequalities | partial | Generated bracket-rescue blueprint exists; no inequality-specific items. |
| 3. Functions, Graphs, and Rate of Change | no | No function-notation items, no domain/range. |
| 4. Linear Functions and Modeling | partial | Drone-gradient blueprint covers slope; no residuals or model-limits. |
| 5. Systems and Constraints | no | No system-of-equations items routed here. |
| 6. Geometry Foundations and Transformations | no | Zero rigid-motion items. |
| 7. Coordinate Geometry, Measurement, Introductory Proof | no | Zero coordinate-proof items. |
| 8. Statistics, Exponential Patterns, Modeling Studio | partial | Probability "keys without replacement" blueprint; no exponential growth/decay. |

This is a coverage near-zero — the track is functionally a wrapper around generic blueprints.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| (none directly wired) | 0 | **n/a** | No dedicated `integratedMath1ExamBatch.ts` exists. |
| [`highGenerated.ts → mathBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) (fallback) | up to 50 | **FIX** | Six math blueprints exist (Ratios, Linear Equations, Probability, Coordinate Geometry, Quadratics, Calculus Readiness) that cycle into the variant generator. These have per-distractor explanations and decent voice, but they were authored as universal math fallback rather than integrated-pathway content. Acceptable as makeweight only — should not be the primary surface. |
| [`algebra1ExamBatchQuestions`, `geometryExamBatchQuestions`](../../../src/data/questionCatalog/) | ~20 combined | **MERGE → new integratedMath1 wiring** | Integrated Math 1 is essentially Algebra 1 + Geometry transformations + stats intro. The existing Algebra 1 and Geometry exam batches cover most of Chapters 1-7 already. Wire them in. |

## Open actions (priority order)

1. **Auto-FIX wiring** — add `col-integrated-math-1` to `highMathTrackIds` and map it in `highMath.ts` to `[...algebra1ExamBatchQuestions, ...geometryExamBatchQuestions, ...grade9MathExamBatchQuestions]` as a starting point. The integrated pathway parallels Algebra 1 content.
2. **Drop the `col-integrated-math-1-duplicate` reference** in the syllabus — confirm it's truly a duplicate and remove from `Covers` line.
3. **Author 8-10 transformation / rigid-motion items** for Chapter 6 — currently the largest hole. The integrated pathway introduces transformations in Year 1, not deferred to a Geometry course.
4. **Author 6-8 exponential-pattern items** for Chapter 8 (linear vs exponential pattern recognition, geometric sequences).
5. **Add `region: 'US'`** — Integrated Math 1 is a California-framework label; UK/India have no direct analogue.
6. **Verify `status: 'playable'`** — if no first-class wiring, demote to `'soon'` until catalog has substance.

## Estimated effort

~6 hours: 30 min wiring fix, 90 min selecting + adapting Algebra 1 + Geometry items, 2 h transformation authoring, 90 min exponential authoring, 30 min status/region tagging.
