# Audit: col-class-9-math (Class 9 Math)

**Syllabus**: [`src/data/syllabi/high/class_9_math.md`](../../../src/data/syllabi/high/class_9_math.md)
**Track id**: `col-class-9-math`
**Tier**: high
**Region**: declared UK KS3/KS4 + India NCERT Class 9; content mixes US algebra phrasing
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 1587

## Wiring

Correctly registered in `highMathTrackIds` ([`questionCatalog/index.ts`](../../../src/data/questionCatalog/index.ts:21)) and mapped in [`highMath.ts`](../../../src/data/questionCatalog/highMath.ts:59) to `makeIndiaClass9MathQuiz() + grade9MathExamBatchQuestions`. **No `schoolAssessment` companion exists for Grade 9** — STAAR ends at Grade 8 so this is structurally correct.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Number Sense, Exponents, and Surds | partial | sqrt(50) simplification, power-of-power. No irrational/rational classification, no standard form. |
| 2. Algebra Foundations and Expressions | partial | India quiz: GCF, evaluating ay. No expansion of brackets, no formula rearrangement. |
| 3. Linear Equations and Inequalities | yes | 4x - 7 = 21 multi-step, inequality graph (closed/open circle). |
| 4. Linear Functions and Graphs | yes | Slope-intercept form, slope from two points, y at given x for y=mx+b. |
| 5. Geometry Basics and Proof | no | Zero proof or angle-justification items. Major gap. |
| 6. Coordinate Geometry and Measurement | partial | Distance formula via (1,2)→(4,6); parallelogram area, Pythagorean triples. No midpoint, no compound-shape area. |
| 7. Polynomials and Factorisation Introduction | yes | Five x^2+bx+c factorisations + zero-product property. Solid. |
| 8. Data, Probability, and Mathematical Communication | partial | Scatterplot association (positive). No mean/median/mode, no probability calculation. |

Gaps: Chapter 5 (geometry proof, congruence) is essentially absent; descriptive statistics underweight.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`grade9MathExamBatch.ts`](../../../src/data/questionCatalog/grade9MathExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor, NYSED/STAAR/OER-sourced. Tagged `'Mathematics'`. Clean. |
| [`colGapBuilders.ts → makeIndiaClass9MathQuiz`](../../../src/data/questionCatalog/colGapBuilders.ts) | 50 | **FIX** | Mixed quality. The five factorisation prompts use **identical** distractor explanations — DEFAULT_FLAW. The system-of-equations subsection has per-distractor explanations (good). **Critical bug** in the quadratic subsection (line 822-826): the distractor `'x = 1 and x = 6'` is hardcoded, but for `x^2 - 7x + 6 = 0` that is the *correct* answer, not a distractor — duplicate-answer collision will occur. Same with `'x = -2 and x = -3'` for `x^2 + 5x + 6 = 0`. Several prompts use `'There is only one solution'` as a distractor for equations that genuinely have one solution at the discriminant boundary — needs scrubbing. |

## Open actions (priority order)

1. **Auto-FIX collision bugs** in `makeIndiaClass9MathQuiz` quadratic subsection — distractors are derived statically and conflict with at least two prompt variants. Generate distractors per-prompt or hand-author the five quadratic items.
2. **Auto-FIX DEFAULT_FLAW** via the shared `numericWrong`/`fractionWrong` helpers (shared action with Class 7/8 audits).
3. **Author Chapter 5 set** (~10 items): triangle congruence criteria, parallel-line angle reasoning, simple two-column proofs. This is the largest content hole.
4. **Author 4-6 descriptive-statistics items** (mean/median/mode/range, comparing two data sets).
5. **Jurisdiction tag** — currently mixes UK and India framings without flagging; pick one or split pools. Add `region` field.

## Estimated effort

~6 hours: 30 min collision bug fix, 2 h shared helper rewrite, 2 h geometry-proof authoring, 60 min stats authoring, 30 min jurisdiction.
