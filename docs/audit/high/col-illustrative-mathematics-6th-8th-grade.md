# Audit: col-illustrative-mathematics-6th-8th-grade (Pre-Algebra Collections)

**Syllabus**: [`src/data/syllabi/high/pre_algebra_collections.md`](../../../src/data/syllabi/high/pre_algebra_collections.md)
**Track id**: `col-illustrative-mathematics-6th-8th-grade` (also covers `col-pre-algebra`, `col-algebra-basics`)
**Tier**: high (middle grade / pre-algebra bridge)
**Region**: US — Illustrative Mathematics / Open Up Resources / Common Core. Not tagged.
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 1763

## Wiring

Only `col-illustrative-mathematics-6th-8th-grade` is registered in `highMathTrackIds` ([`questionCatalog/index.ts`](../../../src/data/questionCatalog/index.ts:18)). It is mapped in [`highMath.ts`](../../../src/data/questionCatalog/highMath.ts:53) to `makeIllustrativeMath678Quiz() + middleMathExamBatchQuestions`. The sibling collections `col-pre-algebra` and `col-algebra-basics` referenced by the syllabus are NOT wired and silently route to `'high-generated'`. Auto-FIX: add both to `highMathTrackIds` and the catalog mapping.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Number Sense, Integers, and Rational Numbers | partial | middleMathBatch: fraction multiplication, decimal multiplication; Illustrative: distance on number line, fraction add. No absolute value. |
| 2. Properties, Order of Operations, Expressions | partial | Combine like terms (middle batch). No nested operations, no distributive item. |
| 3. Equations and Inequalities | partial | x/4 = 9 one-step; inequality solution `x > -2`. No multi-step, no equations with variables on both sides. |
| 4. Ratios, Rates, Proportions, Percents | yes | Equivalent ratio (4:10 → 2:5); Illustrative recipe rate. No tax/tip/markup. |
| 5. Coordinate Plane, Slope, Linear Relationships | partial | Quadrant identification; Illustrative point-on-line. No slope calculation, no y=mx+b graphing. |
| 6. Geometry Foundations | partial | Triangle area (1/2 bh), rectangular-prism volume. No angle relationships, no surface area. |
| 7. Pythagorean Theorem, Exponents, Scientific Notation | no | Zero items in this collection — Pythagorean lives in `grade8MathExamBatch.ts` which is NOT pulled in here. |
| 8. Data, Review, Algebra Readiness | partial | Mean from total (5 numbers → 9). No box plots, no scatterplots, no line of best fit. |

Gaps: Pythagorean/exponents/scientific notation (entire Chapter 7), slope, distributive, data displays.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`middleMathExamBatch.ts`](../../../src/data/questionCatalog/middleMathExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor explanations covering ratios, fractions, decimals, expressions, equations, coordinate plane, triangle area, prism volume, mean, inequalities. NYSED/STAAR/OER-derived. Tagged `'Mathematics'` (not `'AP'` — May 2026 finding doesn't apply). |
| [`colGapBuilders.ts → makeIllustrativeMath678Quiz`](../../../src/data/questionCatalog/colGapBuilders.ts) (line 1271) | 50 (10 stems × 5 variants) | **DELETE** | Only 10 unique stems repeated 5x to pad to 50. Distractors are `'Not enough information'`, `'0'`, `'A nearby but wrong value'` — DEFAULT_FLAW pattern, cartoonish filler, fails the quality bar on every count. The 10 stems themselves (recipe rate, tank loss, fraction add, function rule, two-step solve, volume, triangle area, line membership, mean, distance) are useful — promote them into a hand-authored batch with per-distractor reasons. |

## Open actions (priority order)

1. **Auto-FIX wiring** — add `col-pre-algebra`, `col-algebra-basics` to `highMathTrackIds`.
2. **DELETE `makeIllustrativeMath678Quiz`** and replace with ~10 hand-authored prompts using the 10 existing stems and `middleMathExamBatch.ts` voice.
3. **Author Chapter 7 set** (~10 items): Pythagorean theorem, exponent rules, scientific notation, distance calculation — currently zero coverage in this collection.
4. **Add slope / linear-relationship items** (~6) for Chapter 5 — currently only coordinate-plane quadrant ID.
5. **Add `region: 'US'`** — Illustrative Mathematics and Open Up Resources are explicitly US Common Core. UK pre-algebra equivalents (KS3 Year 8/9) use different conventions.

## Estimated effort

~5 hours: 30 min wiring, 2 h DELETE + 10 hand-authored replacements, 90 min Chapter 7 authoring, 60 min slope authoring, 30 min region tag and dedupe with class-7/8.
