# Audit: precalculusCollections (col-get-ready-for-precalculus)

**Syllabus**: [`src/data/syllabi/high/precalculus_collections.md`](../../../src/data/syllabi/high/precalculus_collections.md)
**Track id**: `col-get-ready-for-precalculus` (age catalog line 1895)
**Tier**: high (year 12)
**Region**: US-leaning (Common Core HS Mathematics; OpenStax Precalculus reference)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Function Families and Transformation Review | ✅ | `highBuilders.ts:makeColPrecalculusQuiz` Unit 7 (Functions and inverses) |
| 2. Polynomial, Rational, Exponential, Logarithmic Models | ✅ | Unit 3 (Rational and exponential functions) |
| 3. Trigonometric Foundations and Periodic Functions | ✅ | Unit 4 (Trigonometry) — two blocks, possibly duplicate-labeled like the trig builder |
| 4. Analytic Trigonometry and Oblique Triangles | ⚠️ | Light: covered via Unit 4 but identities and ambiguous case not deep |
| 5. Vectors, Complex Numbers, and Polar Form | ✅ | Units 1, 2 (Complex numbers and transformations; Vectors and matrices) |
| 6. Polar, Parametric, and Analytic Geometry | ✅ | Unit 6 (Conics) covers analytic geometry; parametric thin |
| 7. Matrices, Systems, and Discrete Structure | ✅ | Unit 8 (Matrices as transformations) |
| 8. Limits, Rates, and Calculus Readiness | ✅ | Unit 9 (Series and limits) |

**Wiring is correct... but the key is wrong, again.** `highMath.ts:67` binds `col-precalculus` to `makeColPrecalculusQuiz`. But the age catalog uses `col-get-ready-for-precalculus` (line 1895). The collection-id `col-precalculus` doesn't exist as a track. So the syllabus-aligned `col-get-ready-for-precalculus` falls through to `high-generated`. **Routing mismatch confirmed.**

The syllabus header names three "Covers" ids: `col-get-ready-for-precalculus`, `col-precalculus`, `col-get-ready-for-ap-calculus`. Only the first exists in the age catalog. The other two are dead references.

**Chapter taxonomy.** Builder uses 9 "Unit X" labels with two Unit 4 (Trigonometry) blocks. Same duplicate-label smell as `makeColTrigonometryQuiz`.

## Per-file recommendations

| File | Items for precalculus | Bucket | Reason |
|---|---|---|---|
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColPrecalculusQuiz` (Units 1–9, with duplicate Unit 4) | hand-authored | **KEEP/FIX** — gold standard | Per May 2026 audit, gold standard. Two "Unit 4: Trigonometry" blocks should be split (4a/4b) or renamed. |
| [`precalculusExamBatch.ts`](../../../src/data/questionCatalog/precalculusExamBatch.ts) | ~50 | **KEEP** | Floe-native drill pattern; per-distractor explanations. |
| [`numbasWebworkMathThirdImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathThirdImported.ts) (trig slice) | imported | **KEEP/EVALUATE** | Currently fed into the precalculus bundle via highMath.ts; sample for fit (precalc-level vs trig-level). |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) math blueprints (top-up) | up to 50 | **FIX (procedural generator)** | What `col-get-ready-for-precalculus` users see now due to routing mismatch. Should be displaced. |

## Open actions (priority order)

1. **Fix the routing key.** Rename `col-precalculus` → `col-get-ready-for-precalculus` in `highMath.ts:67`, or add the latter to `highMathTrackIds` and bundle map.
2. **Remove dead "Covers" references** to `col-precalculus` and `col-get-ready-for-ap-calculus` from the syllabus header — or stand the tracks up.
3. **De-duplicate "Unit 4: Trigonometry" labels** in `makeColPrecalculusQuiz` (same fix as the trig builder).
4. **Author 4–6 parametric-equation items** for Chapter 6 (eliminate parameter, parametric paths).
5. **Author 4–6 analytic-trig items** for Chapter 4 (ambiguous-case SSA, identity verification with constraints).
6. **Realign chapter labels** to the eight syllabus chapter names.

## Estimated effort

- Routing fix + dead-ref cleanup: ~1 hour
- Label dedup: ~30 minutes
- Authoring 8–12 items: ~4 hours
- Chapter rename: ~1 hour

## Notes for next auditor

Same routing-key smell as algebra1, trigonometry, apCalculus, microeconomics, macroeconomics. There is a **systematic gap** between how `highMath.ts`/`highAdvanced.ts` name their keys and how the age catalog names its track ids. Worth a catalog-wide reconciliation pass — likely 6–8 keys are wrong in `highMath.ts` alone (`col-eureka-math-*`, `col-algebra-1-ny-next-gen`, `col-precalculus`, `col-trigonometry`, `col-statistics-probability`).
