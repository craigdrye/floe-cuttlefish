# Audit: col-8th-grade-math (8th Grade Maths Collections)

**Syllabus**: [`src/data/syllabi/high/8th_grade_maths_collections.md`](../../../src/data/syllabi/high/8th_grade_maths_collections.md)
**Track id**: `col-8th-grade-math` (also covers `col-8th-grade-ny-next-gen`, `col-get-ready-for-8th-grade`)
**Tier**: high (middle grade)
**Region**: US Common Core / NYSED / STAAR (not currently tagged)
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 1994

## Wiring problem (auto-FIX)

Same defect as the Grade 7 sibling: `col-8th-grade-math` is missing from `highMathTrackIds` in [`questionCatalog/index.ts`](../../../src/data/questionCatalog/index.ts) and silently routes to `'high-generated'`. Meanwhile `col-class-8-math` is correctly wired and pulls the hand-authored Grade 8 batch. The 8th-grade and class-8 tracks have effectively identical Common Core / KS3 coverage — players see different question pools depending on which track they tap. Add `col-8th-grade-math`, `col-8th-grade-ny-next-gen`, `col-get-ready-for-8th-grade` to `highMathTrackIds` and the `highMath.ts` catalog mapping.

## Coverage map (against the intended Grade 8 bank)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Number Systems, Exponents, and Scientific Notation | yes | Exponent product, scientific notation. No irrational/cube-root classification. |
| 2. Linear Equations in One Variable | yes | One- and two-step solves. No "no solution / infinite solutions" classification. |
| 3. Proportional Relationships, Slope, and Lines | yes | Slope from points; STAAR linear-rate items in school assessment. |
| 4. Functions and Algebra Readiness | yes | f(x) evaluation; missing "is this a function?" classifier items. |
| 5. Systems of Linear Equations | partial | One substitution item; no graphing-systems or break-even modelling. |
| 6. Transformations, Congruence, and Similarity | partial | STAAR coordinate transformation item; no similarity / parallel-line angle. |
| 7. Pythagorean Theorem, Distance, and Volume | yes | Right-triangle hypotenuse, cylinder volume. |
| 8. Scatterplots, Association, and Modeling Studio | no | Zero scatterplot or two-way table items in the Grade 8 batch. |

Gaps: scatterplots / bivariate (whole chapter), similarity, no-solution classification, function relations.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`grade8MathExamBatch.ts`](../../../src/data/questionCatalog/grade8MathExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor explanations rooted in real misconceptions (e.g., "x^12 multiplies exponents instead of adding"). Tagged `'Mathematics'` — no `'AP'` mistag. Add `region: 'US'`. |
| [`schoolAssessmentMathScienceImported.ts`](../../../src/data/questionCatalog/schoolAssessmentMathScienceImported.ts) (Grade 8 export) | 5 | **KEEP** | STAAR 2022 items with proper `sourceId`/`sourceUrl`; financial literacy, transformation on coordinate plane, irrational-number classification. Reference-quality. |
| [`colGapBuilders.ts → makeIllustrativeMath678Quiz`](../../../src/data/questionCatalog/colGapBuilders.ts) | 50 (10 × 5) | **DELETE** | Same 10-stem repetition with `'Not enough information'`/`'0'`/`'A nearby but wrong value'` distractors. DEFAULT_FLAW. Auto-FIX. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) | up to 50 | **FIX** | Wiring fallback. Once fixed, treat as makeweight only. |

## Open actions (priority order)

1. **Auto-FIX wiring** — add the three 8th-grade ids to `highMathTrackIds` and `highMath.ts`.
2. **DELETE `makeIllustrativeMath678Quiz`** (shared with Grade 7 audit).
3. **Author ~10 scatterplot / two-way-table questions** to close Chapter 8, plus 3-4 similarity + parallel-line items for Chapter 6.
4. **Add `region: 'US'`** tag to track entry.
5. **Collapse duplicates**: `col-8th-grade-math`, `col-8th-grade-ny-next-gen`, `col-class-8-math` all serve the same Common Core Grade 8 curriculum.

## Estimated effort

~3 hours: 30 min wiring, 60 min DELETE+stem replacements, 90 min scatterplot/similarity authoring. Existing hand-authored files already meet the quality bar.
