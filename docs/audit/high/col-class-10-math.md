# Audit: col-class-10-math (Class 10 Math)

**Syllabus**: [`src/data/syllabi/high/class_10_math.md`](../../../src/data/syllabi/high/class_10_math.md)
**Track id**: `col-class-10-math`
**Tier**: high
**Region**: declared India NCERT Class 10 + UK KS4 Year 10; content is a mix and not tagged
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 1906

## Wiring

Correctly registered in `highMathTrackIds` ([`questionCatalog/index.ts`](../../../src/data/questionCatalog/index.ts:22)) and mapped in [`highMath.ts`](../../../src/data/questionCatalog/highMath.ts:60) to `makeIndiaClass10MathQuiz() + grade10MathExamBatchQuestions`. No STAAR companion (correct — STAAR doesn't run a Grade 10 math test).

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Real Numbers, Algebra Review, and Exam Habits | partial | India quiz: r^exp evaluation. No HCF/LCM by prime factors, no irrationality proof. |
| 2. Quadratic Equations and Polynomials | yes | Discriminant classification (one repeated real), vertex axis, factor → roots, product-of-roots. |
| 3. Systems of Equations and Algebraic Modeling | no | Zero items on substitution/elimination in either file. Major gap. |
| 4. Coordinate Geometry and Functions | yes | Midpoint, slope through points, x-axis reflection, point coordinate sum. |
| 5. Trigonometry and Right-Triangle Modeling | yes | Sine and cosine ratio items (NYSED); India quiz adds sin/cos/tan from leg pairs and a ladder problem. |
| 6. Triangles, Circles, and Geometric Proof | partial | Circle area, arc-length fraction, area-scale factor, interior+exterior angle sum. No tangent-radius theorem, no two-column proof. |
| 7. Mensuration, Statistics, and Probability | partial | Circle area, parallelogram/triangle area, arithmetic mean. No grouped statistics, no probability calculation. |
| 8. Modeling Studio and Exam Readiness | no | No multi-step modelling or exam-style mixed items. |

Gaps: systems of equations (Chapter 3, entirely missing), proof / tangent theorems (Chapter 6 weak), grouped statistics and probability (Chapter 7).

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`grade10MathExamBatch.ts`](../../../src/data/questionCatalog/grade10MathExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor, NYSED/STAAR/OER-derived. Tagged `'Mathematics'`. Reference quality across discriminant, vertex, trig, midpoint, similarity. |
| [`colGapBuilders.ts → makeIndiaClass10MathQuiz`](../../../src/data/questionCatalog/colGapBuilders.ts) | 50 | **FIX** | Mixed: arithmetic-mean and quadratic-roots subsections have per-distractor explanations (good); circle area, triangle area, ladder, exponent, reflection subsections rely on `numericWrong` (DEFAULT_FLAW). The trig subsection generates distractors `'1/2', '5/4', '7/24'` regardless of input — `'1/2'` can be the correct answer for some pairs (e.g., a 30°-60°-90° style ratio) and will collide. Ladder problem distractors include the hypotenuse itself, which is at least pedagogically defensible. |

## Open actions (priority order)

1. **Auto-FIX trig-distractor collision** in `makeIndiaClass10MathQuiz` — hardcoded fractional distractors collide with valid answers; generate per-prompt.
2. **Auto-FIX DEFAULT_FLAW** via shared `numericWrong`/`fractionWrong` rewrite (shared action with Class 7/8/9 audits).
3. **Author Chapter 3 set** (~8 items): substitution, elimination, graphical intersection, two-variable modelling. This is a flagship Class 10 board topic and currently has zero coverage.
4. **Author 6-8 circle-proof and tangent items** for Chapter 6; 4-6 grouped-statistics/probability items for Chapter 7.
5. **Jurisdiction tag** — India NCERT Class 10 is exam-critical and uses specific terminology (Euclid's division lemma, frustum mensuration, board command-words). UK KS4/GCSE uses different terminology. Either tag `region: 'IN'` and build a CBSE-faithful pool, or split into `col-class-10-math-india` and `col-gcse-maths-uk` (the latter already exists).

## Estimated effort

~7 hours: 60 min collision/DEFAULT_FLAW fixes, 2 h systems of equations authoring, 90 min circle proofs, 60 min stats/probability, 60 min jurisdiction tagging and dedupe with GCSE.
