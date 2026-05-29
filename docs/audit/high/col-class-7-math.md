# Audit: col-class-7-math (Class 7 Math)

**Syllabus**: [`src/data/syllabi/high/class_7_math.md`](../../../src/data/syllabi/high/class_7_math.md)
**Track id**: `col-class-7-math`
**Tier**: high (middle grade)
**Region**: multi-jurisdiction — syllabus claims UK KS3, US Common Core, ACARA, India NCERT but content is US/STAAR-flavoured
**Status flag**: `playable` in [`high.ts`](../../../src/data/ageCatalog/high.ts) line 528

## Wiring

Correctly registered in `highMathTrackIds` in [`questionCatalog/index.ts`](../../../src/data/questionCatalog/index.ts:19) and mapped in [`highMath.ts`](../../../src/data/questionCatalog/highMath.ts:57) to `makeIndiaClass7MathQuiz() + grade7MathExamBatchQuestions + schoolAssessmentGrade7MathQuestions`.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Rational Numbers and the Number Line | partial | Signed integer add in Grade 7 batch; India quiz adds signed-int problems. No absolute-value-as-distance. |
| 2. Operations With Fractions, Decimals, and Integers | yes | India quiz: fraction-comparison, simplest-form, divisions, integer add. |
| 3. Ratio, Proportion, and Unit Rates | yes | Unit rate (swimmer), scale factor (map), STAAR unit-price. |
| 4. Percent and Financial Applications | yes | Discount, simple-interest STAAR items, fraction-of-quantity. |
| 5. Expressions, Equations, and Inequalities | partial | Two-step equation; India quiz adds 3x + b = v. No inequalities. |
| 6. Geometry, Angles, and Measurement | partial | Angle classifier (acute/right/obtuse), supplementary, perimeter, circumference. No volume of prisms. |
| 7. Statistics and Probability | partial | Median (two variants), simple probability. No mean/range, no theoretical vs experimental. |
| 8. Applications / Problem-Solving Studio | no | No multi-step modelling prompts. |

Gaps: inequalities, prism volume, mean/range, multi-step modelling.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`grade7MathExamBatch.ts`](../../../src/data/questionCatalog/grade7MathExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor explanations, NYSED/STAAR sourced, plausible misconceptions. Tagged `'Mathematics'` correctly. |
| [`schoolAssessmentMathScienceImported.ts`](../../../src/data/questionCatalog/schoolAssessmentMathScienceImported.ts) (Grade 7) | 5 | **KEEP** | STAAR 2022 with `sourceId`/`sourceUrl` and crisp misconception distractors. |
| [`colGapBuilders.ts → makeIndiaClass7MathQuiz`](../../../src/data/questionCatalog/colGapBuilders.ts) | 50 | **FIX** | Mechanically generated from numeric templates. **`numericWrong`/`fractionWrong` helpers emit identical explanations for all three distractors** ("That comes from using the wrong operation or skipping one step") — DEFAULT_FLAW pattern. Salvageable structure, but each distractor needs a real misconception line. Some prompts mismatch the syllabus: "GCF of a and b×correct" is awkwardly phrased; swimmer rate distractors use hardcoded `'0.5'`, `'7'`, `d+t` regardless of inputs. |

## Open actions (priority order)

1. **Auto-FIX the DEFAULT_FLAW helpers** — rewrite `numericWrong`/`fractionWrong` so each distractor carries a specific reason ("subtracted instead of multiplied", "swapped numerator and denominator", "added the lengths instead of squaring") — or replace with per-question hand-authored distractors. Affects every `makeIndiaClassNMathQuiz` (Class 1 through 12).
2. **Add jurisdiction tag** — currently the track claims UK/US/ACARA/India coverage but content uses `$`, `°F` not used, and STAAR provenance. Either narrow to `region: 'US'` or build a parallel India-NCERT pool with INR / metric / CBSE-style phrasing.
3. **Author ~6 missing-chapter items**: prism volume, inequalities on the number line, mean/range, one two-step modelling prompt.
4. **Verify track-vs-syllabus title mismatch** — the syllabus says "Year 7 (ages 11-12)" which is *middle school* in the US framework, but Floe places it under the "high" ageGroup. Consistent across cluster; document the convention.

## Estimated effort

~5 hours: 2 h rewriting `numericWrong`/`fractionWrong` helpers (or per-question hand-distractors for the India Class 7 50-item quiz), 1 h gap authoring, 30 min jurisdiction tagging, 90 min review/test.
