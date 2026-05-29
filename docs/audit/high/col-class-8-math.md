# Audit: col-class-8-math (Class 8 Math)

**Syllabus**: [`src/data/syllabi/high/class_8_math.md`](../../../src/data/syllabi/high/class_8_math.md)
**Track id**: `col-class-8-math`
**Tier**: high (middle grade)
**Region**: claims UK KS3 / US Common Core / ACARA / India NCERT; content reads US/STAAR
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 1796

## Wiring

Correctly registered in `highMathTrackIds` ([`questionCatalog/index.ts`](../../../src/data/questionCatalog/index.ts:20)) and mapped in [`highMath.ts`](../../../src/data/questionCatalog/highMath.ts:58) to `makeIndiaClass8MathQuiz() + grade8MathExamBatchQuestions + schoolAssessmentGrade8MathQuestions`.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Algebraic Fluency and Linear Equations | yes | One- and two-step equation solves; India quiz adds x + b = a; expression evaluation. |
| 2. Functions, Tables, and Linear Graphs | partial | f(x)=2x+1 evaluation, slope from points, slope-through-origin. No table-to-equation translation. |
| 3. Systems and Simultaneous Constraints | partial | One substitution item (y=x+2, y=8). No graphical solutions, no break-even modelling. |
| 4. Exponents, Roots, and Scientific Notation | yes | Power evaluation, scientific notation, square area→side. No negative/zero exponents. |
| 5. Transformations, Congruence, and Similarity | partial | Transformation vocabulary classifier (translation/rotation/reflection). No coordinate rules, no scale-factor lengths. |
| 6. Pythagorean Theorem and Coordinate Geometry | yes | Triplets 3-4-5, 5-12-13 etc; STAAR transformation item. No distance-formula items. |
| 7. Volume, Surface Area, and Measurement Models | partial | Cylinder volume formula MCQ, rectangle area. No surface area, no cone/sphere. |
| 8. Statistics, Scatterplots, and Algebra Readiness Studio | partial | Mean. No scatterplot, no two-way table, no association classification. |

Gaps: scatterplots / bivariate (Chapter 8 essentially absent), graphical systems, distance formula, surface area.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`grade8MathExamBatch.ts`](../../../src/data/questionCatalog/grade8MathExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor explanations, NYSED/STAAR-derived. Tagged `'Mathematics'`. Reference quality. |
| [`schoolAssessmentMathScienceImported.ts`](../../../src/data/questionCatalog/schoolAssessmentMathScienceImported.ts) (Grade 8) | 5 | **KEEP** | STAAR 2022 with provenance metadata, real misconception distractors, financial literacy and transformations. |
| [`colGapBuilders.ts → makeIndiaClass8MathQuiz`](../../../src/data/questionCatalog/colGapBuilders.ts) | 50 | **FIX** | Same DEFAULT_FLAW pattern via `numericWrong`/`fractionWrong`. The transformation-vocabulary subsection uses per-distractor explanations (good) but most subsections recycle the same generic distractor reason. The slope-through-origin subsection always answers `'3'` regardless of the actual line, which is correct by construction (5/15, 7/21 etc all give slope 3) but loses pedagogical variety. |

## Open actions (priority order)

1. **Auto-FIX DEFAULT_FLAW** — shared with Class 7 audit; fix `numericWrong`/`fractionWrong` helpers in [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts:17).
2. **Author ~12 scatterplot / two-way-table items** for Chapter 8 (the biggest hole); 4 surface-area items for Chapter 7; 3 distance-formula items for Chapter 6.
3. **Diversify slope subsection** — vary the slope value across prompts so students see slope = 2, 1/2, -3, etc., not just 3.
4. **Jurisdiction tag** — current content is US-flavoured; add `region: 'US'` or split out an India-NCERT pool with Indian-context prompts.
5. **Collapse with `col-8th-grade-math`** — duplicate course concept, separate pools. Either dedupe or differentiate explicitly.

## Estimated effort

~5 hours: 2 h shared helper rewrite, 90 min scatterplot/surface-area authoring, 30 min slope-diversification, 60 min review.
