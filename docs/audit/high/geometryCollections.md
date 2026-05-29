# Audit: geometryCollections (col-geometry)

**Syllabus**: [`src/data/syllabi/high/geometry_collections.md`](../../../src/data/syllabi/high/geometry_collections.md)
**Track id**: `col-geometry` (age catalog line 1455)
**Tier**: high (year 10)
**Region**: US-leaning (Common Core HS Geometry)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Geometry Foundations and Proof Habits | ⚠️ | Builder Unit 17 ("Miscellaneous") catches some; no dedicated proof-structure items |
| 2. Transformations and Congruence | ✅ | Units 10, 11 (Transformations; Congruence) |
| 3. Triangles, Parallels, and Formal Proof | ✅ | Units 2, 4 (Angles; Triangles) |
| 4. Similarity, Dilations, and Scale | ✅ | Unit 12 (Similarity) |
| 5. Right Triangles and Trigonometry Basics | ✅ | Units 9, 13 (Pythagorean theorem; Trigonometry) |
| 6. Circles and Circular Measurement | ✅ | Unit 14 (Circles) |
| 7. Coordinate Geometry and Algebraic Proof | ✅ | Units 6, 15 (Coordinate plane; Analytic geometry) |
| 8. Area, Volume, and Geometry Modeling Studio | ✅ | Units 7, 8 (Area and perimeter; Volume and surface area) |

**Wiring is correct.** `col-geometry` is in `highMathTrackIds` (`index.ts:25`) and `highMath.ts:63` wires it to `makeColGeometryQuiz` + `geometryExamBatchQuestions`. Routing works. (Also `col-eureka-math-geometry` is bound to the same content — but that track id doesn't exist in the age catalog so it's a dead binding.)

**Chapter taxonomy.** Builder uses 17 "Unit X" labels following Khan/Common Core convention; syllabus uses 8 named chapters. Builder is at finer granularity.

## Per-file recommendations

| File | Items for col-geometry | Bucket | Reason |
|---|---|---|---|
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColGeometryQuiz` (Units 1–17) | hand-authored | **KEEP** — gold standard | Per May 2026 audit, `highBuilders.ts` is the gold-standard hand-authored math reference. Protect. 17-unit Khan-style structure provides depth. |
| [`geometryExamBatch.ts`](../../../src/data/questionCatalog/geometryExamBatch.ts) | ~50 | **KEEP** | Same Floe-native drill pattern as algebra1/2 batches; per-distractor explanations sourced from NYSED/STAAR style. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) top-up | only if shortfall | **OK as floor** | With ~100+ items already, top-up should rarely engage. |

## Open actions (priority order)

1. **Author 4–6 proof-habit items** for Chapter 1 (conditional statements, converse, counterexample, missing-reason proofs). The 17-unit builder is light on explicit proof structure.
2. **Add a Chapter 8 modeling-studio item set** that combines area/volume with measurement units, density, and realistic geometric design (3–4 items).
3. **Realign chapter labels** from "Unit 1–17" to the eight syllabus chapter names (or update the syllabus to acknowledge the 17-unit structure).
4. **Audit `col-eureka-math-geometry`** wiring — track id doesn't exist in the age catalog, so the binding in `highMath.ts:64` is dead code.
5. **Tag `region: 'US'`** on the track entry.

## Estimated effort

- Proof-habits + modeling-studio authoring (8–10 items): ~4–5 hours
- Chapter rename pass: ~1 hour
- Dead-binding cleanup: ~15 minutes

## Notes for next auditor

Geometry is well-served by `highBuilders.ts`. The Chapter 1 proof-habits gap is the only material content hole. Otherwise this is a coverage-complete track that just needs label alignment with the syllabus. Same dead-binding pattern (`col-eureka-math-*` ids referenced in `highMath.ts` but absent from age catalog) affects algebra1 and algebra2 too — fix in one pass.
