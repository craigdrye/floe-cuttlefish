# Audit: trigonometry

**Syllabus**: [`src/data/syllabi/high/trigonometry.md`](../../../src/data/syllabi/high/trigonometry.md)
**Track id**: `trigonometry` (age catalog line 1565)
**Tier**: high (year 11)
**Region**: not jurisdiction-specific (OpenStax + Common Core alignment)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Right-Triangle Trigonometry | ✅ | `highBuilders.ts:makeColTrigonometryQuiz` Unit 1 (Right triangles and ratios) |
| 2. Radians, Arc Length, and the Unit Circle | ⚠️ | Unit 2 (Trigonometric functions) covers some unit-circle work; arc length/sector area thin |
| 3. Trigonometric Functions and Graphs | ✅ | Unit 2 (Trigonometric functions) covers amplitude, period, phase shift |
| 4. Inverse Trig and Trig Equations | ✅ | Units 5, 6 (Trigonometric equations and inequalities; Inverse trigonometric functions) |
| 5. Identities and Proof Habits | ✅ | Unit 4 (Trigonometric identities) |
| 6. Sum, Difference, Double-Angle, Half-Angle | ⚠️ | Touched in Unit 4 but no dedicated derivation/exact-value items |
| 7. Oblique Triangles and Vectors | ⚠️ | Unit 3 (Non-right triangles and trigonometry) covers law of sines/cosines; vectors not present |
| 8. Polar and Complex Extensions | ✅ | Unit 7 (Complex numbers in trigonometric form) |

**Wiring is correct.** `trigonometry` is NOT directly in any explicit set, BUT the trackId is `trigonometry` (not `col-trigonometry`), and `index.ts` `highMathTrackIds` lists `col-trigonometry` — so the camelCase `trigonometry` track in the age catalog falls through to `high-generated`. **Routing mismatch.** Like `apCalculus`/`microeconomics`, the hand-authored bank is bound to a key that doesn't match the user-facing track id.

Cross-reference: `highMath.ts:69` maps `col-trigonometry` to `makeColTrigonometryQuiz` + `trigonometryExamBatchQuestions` + Numbas trig imports. That collection-id has no track in the age catalog, so the bank serves no users.

**Chapter taxonomy.** Builder uses 7 "Unit X" labels with a duplicate "Unit 2: Trigonometric functions" repeated three times (lines 1673, 1691, 1709). That duplication suggests author intent to split sub-units but the labels collapsed; needs cleanup.

## Per-file recommendations

| File | Items for trigonometry | Bucket | Reason |
|---|---|---|---|
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColTrigonometryQuiz` (7 units, with duplicate Unit 2 labels) | hand-authored | **KEEP/FIX** — gold standard but label dedup needed | Per May 2026 audit, `highBuilders.ts` is the gold standard. Three blocks labeled "Unit 2: Trigonometric functions" should be split into Unit 2a/2b/2c or rebranded as Graph/Identity/Equation phases. |
| [`trigonometryExamBatch.ts`](../../../src/data/questionCatalog/trigonometryExamBatch.ts) | ~50 | **KEEP** | Floe-native drill pattern; per-distractor explanations. |
| [`numbasWebworkMathAdditionalImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathAdditionalImported.ts) (trig slice) | imported | **KEEP/EVALUATE** | Numbas trig content is reputable; sample for stripped-context. |
| [`numbasWebworkMathThirdImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathThirdImported.ts) (trig slice) | imported | **KEEP/EVALUATE** | Same as above; check for overlap with the additional tranche. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) math blueprints (top-up) | up to 50 | **FIX (procedural generator)** | What `trigonometry` users actually see today due to routing mismatch. Should be displaced once routing is fixed. |

## Open actions (priority order)

1. **Fix the routing key.** Either rename `col-trigonometry` to `trigonometry` in `highMath.ts`, or add `trigonometry` to `highMathTrackIds`. One line.
2. **De-duplicate the three "Unit 2" labels** in `makeColTrigonometryQuiz` — split into Graph / Identity / Equation phases (e.g., "Unit 2: Function graphs", "Unit 2a: Function values", etc).
3. **Author 4–6 vector items** for Chapter 7 (components, magnitude, dot product, navigation context).
4. **Author 4–6 sum/difference/double-angle items** for Chapter 6 (exact value for 75°, simplification, equation factoring).
5. **Author 2–4 unit-circle arc-length and sector-area items** for Chapter 2.
6. **Realign chapter labels** to the eight syllabus chapter names.

## Estimated effort

- Routing key fix: ~30 minutes
- Label dedup: ~30 minutes
- Authoring 10–14 items: ~5 hours
- Chapter rename: ~1 hour

## Notes for next auditor

The "Unit 2 × 3" label duplication in `highBuilders.ts:1673,1691,1709` is the only structural defect I found in an otherwise excellent file. Worth a 15-minute editor pass during the consolidation work. Same routing-key pattern as `apCalculus`/`microeconomics`/`macroeconomics` — fix as a single PR.
