# Audit: col-7th-grade-math (7th Grade Maths Collections)

**Syllabus**: [`src/data/syllabi/high/7th_grade_maths_collections.md`](../../../src/data/syllabi/high/7th_grade_maths_collections.md)
**Track id**: `col-7th-grade-math` (also covers `col-7th-grade-ny-next-gen`, `col-get-ready-for-7th-grade`)
**Tier**: high (middle grade)
**Region**: US Common Core (frameworks list includes NCERT/KS3/ACARA but content is US-flavoured STAAR/NYSED)
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 1334

## Wiring problem (auto-FIX)

`col-7th-grade-math` is **NOT** in the `highMathTrackIds` set in [`questionCatalog/index.ts`](../../../src/data/questionCatalog/index.ts). It silently falls through to `'high-generated'`, which produces variant-cycled blueprints rather than the hand-authored Grade 7 STAAR/NYSED bank. The sibling track `col-class-7-math` is wired correctly to `highMath.ts` and gets the same syllabus aim but a different question pool. Add `col-7th-grade-math`, `col-7th-grade-ny-next-gen`, `col-get-ready-for-7th-grade` to `highMathTrackIds` and add a catalog entry in `highMath.ts` mapping them to `grade7MathExamBatchQuestions + schoolAssessmentGrade7MathQuestions + makeIllustrativeMath678Quiz()`.

## Coverage map (syllabus to questions, via the intended Grade 7 bank)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Rational Number Foundations | partial | One signed-arithmetic item; no number-line / absolute-value items. |
| 2. Operations With Rational Numbers | partial | Signed integer add only; missing fraction/decimal operations and conversions. |
| 3. Ratios, Rates, and Proportional Relationships | yes | Unit rate, scale factor, proportional prediction (STAAR sourced). |
| 4. Percent and Proportion Problem Solving | yes | Discount, simple interest items; no percent-change or markup. |
| 5. Expressions, Equations, and Inequalities | yes | Evaluate, two-step equation; no inequalities, no parentheses. |
| 6. Geometry, Scale, and Measurement | partial | Supplementary angles, circumference, scale map, two-rectangle area; no volume, no surface area. |
| 7. Statistics, Sampling, and Probability | yes | Simple probability, median; no sampling/bias items. |
| 8. Mathematical Problem-Solving Studio | no | No multi-step error-analysis prompts. |

Gaps: rational-number operations (Ch 2), inequalities, volume/surface area, sampling/bias.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`grade7MathExamBatch.ts`](../../../src/data/questionCatalog/grade7MathExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor explanations, plausible misconceptions, NYSED/STAAR sourced. Tagged `'Mathematics'` (correct — May 2026 finding's `'AP'` mistag applies to STAAR *science* batches, not this one). Add `region: 'US'`. |
| [`schoolAssessmentMathScienceImported.ts`](../../../src/data/questionCatalog/schoolAssessmentMathScienceImported.ts) (Grade 7 export) | 5 | **KEEP** | STAAR 2022 items with `sourceId`/`sourceUrl` metadata, real misconception distractors. Reference-quality. |
| [`colGapBuilders.ts → makeIllustrativeMath678Quiz`](../../../src/data/questionCatalog/colGapBuilders.ts) | 50 (10 stems × 5 variants) | **DELETE** | Only 10 unique stems repeated 5x with identical fallback distractors `'Not enough information'`, `'0'`, `'A nearby but wrong value'` — DEFAULT_FLAW pattern, cartoonish filler. Promote any salvageable stem into the hand-authored batch. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) (top-up) | up to 50 | **FIX** | Wiring bug forces this track into the generated pool. Once the wiring is corrected the top-up is still appended to pad to 50 — acceptable as makeweight but should not be the primary surface. |

## Open actions (priority order)

1. **Auto-FIX wiring** — add `col-7th-grade-math` (and ny-next-gen / get-ready siblings) to `highMathTrackIds` and `highMath.ts` catalog.
2. **DELETE `makeIllustrativeMath678Quiz`** and replace with 10 hand-authored prompts following `grade7MathExamBatch.ts` voice.
3. **Author ~8 questions** to close Chapter 2 (fraction/decimal operations), Chapter 5 (inequalities), Chapter 6 (volume/surface area), Chapter 7 (sampling/bias).
4. **Add `region: 'US'`** to the track entry — content is Common Core / STAAR; UK KS3 students would see imperial units and "$" prices.
5. **Promote duplicates**: `col-7th-grade-ny-next-gen` is a content duplicate of `col-7th-grade-math` and `col-class-7-math` — collapse into one canonical track.

## Estimated effort

~3 hours: 30 min wiring fix, 90 min DELETE + replacement authoring, 60 min gap authoring. The two hand-authored files are already at quality bar.
