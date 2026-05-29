# Audit: class12Math

**Syllabus**: [`src/data/syllabi/university/class_12_math.md`](../../../src/data/syllabi/university/class_12_math.md)
**Track id**: `class12Math`
**Tier**: university
**Region**: India (CBSE/NCERT — implicit in chapter taxonomy). Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Relations, Functions, Inverse Trig | no | Not covered in routed banks |
| 2. Matrices, Determinants, Linear Systems | partial | Diagonal-matrix determinants only (5 templated items); no inverses, no Cramer, no matrix algebra |
| 3. Continuity, Differentiability, Derivative Techniques | partial | Power-rule derivatives (5 templated); no chain rule, no implicit, no parametric |
| 4. Applications of Derivatives | no | Not covered |
| 5. Integral Calculus | partial | Simple antiderivatives (5 templated, hand-authored distractors); no integration by parts, no definite integral, no FTC application |
| 6. Differential Equations | no | Not covered |
| 7. Vectors and 3D Geometry | no | Not covered |
| 8. Linear Programming, Probability | partial | Basic probability fraction-matching (5 templated, generic distractors); no Bayes', no random variables, no LP |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) `makeIndiaClass12MathQuiz` | ~25 prompts × 5 variants ≈ 125 | **FIX** | Same templated structure as `makeIndiaClass11MathQuiz` (lines 1065+). Mixed quality: derivative drills, antiderivative drills, and percent prompts have hand-authored distractor reasons; determinant, hypotenuse, root-finding, and probability prompts use `numericWrong()` / `fractionWrong()` (the `DEFAULT_FLAW` equivalent). Approximately 50% of distractors meet the bar, 50% need rewriting. |

Wired at `universityCollege.ts:54` and `:61`. No other files route to this track.

## Cross-cluster flags

- **`DEFAULT_FLAW` equivalent present**: `numericWrong()` / `fractionWrong()` in `colGapBuilders.ts:17-31` emit identical generic strings — shared problem with `class11Math`. **FLAGGED.**
- **Region**: NCERT Class 12 is India-only. The course covers vectors, 3D geometry, LP, and Bayes' — content that crosses with US Multivariable Calc + Linear Algebra + AP Stats. **Should carry `region: 'IN'`** but also presents as a natural feeder course into US college math, so the regional tag is more for filtering than exclusion.
- **Stage mismatch**: in India, Class 12 students are 17–18 (high school senior), not "University Sophomore" as the syllabus header claims. The catalog adaptation labels it `ageGroup: 'university'` — defensible but worth documenting.
- **Math notation**: ASCII (`x^2`, `[[2,0],[0,3]]`). Renderer-safe.
- **Coverage breadth is severe**: 8 chapters, 4 entirely uncovered, 4 partial. This is the **thinnest math track in the cluster**. A student loading `class12Math` would see 25 distinct prompts (each in 5 numeric variants) that touch only ~50% of the syllabus by chapter.

## Open actions (priority order)

1. **Rewrite `numericWrong()` / `fractionWrong()` helpers** in `colGapBuilders.ts` to demand per-distractor reasons — same fix as `class11Math`, single change covers both.
2. **Author chapter 7 content** (vectors and 3D geometry): dot/cross product, line equation in space, shortest distance between skew lines, plane equation (~8 items). Highest-value gap — this is the bridge to multivariable.
3. **Author chapter 6 content** (differential equations): order/degree, separable, first-order linear, initial-condition (~6 items).
4. **Author chapter 1 content** (relations and inverse trig): equivalence relation tests, principal-value branches, inverse-trig identities (~6 items).
5. **Author chapter 4 content** (applications of derivatives): increasing/decreasing, optimization, tangent/normal (~5 items).
6. **Add `region: 'IN'`** in [`src/data/ageCatalog/university.ts`](../../../src/data/ageCatalog/university.ts).

## Estimated effort

- Helper rewrite + call site updates: ~6 hours (shared with class11Math)
- Chapter 1/4/6/7 authoring: ~12 hours (25+ items × 30 min)
- Region tag: ~15 min

**~2 working days** for `class12Math` alone, or ~3 days if combined with `class11Math` (the helper rewrite is a once-only cost split across both).

## Notes for next auditor

`class11Math` and `class12Math` are a pair: same builder file, same templated-distractor problem, same India region tag gap. Audit-fix them as one work item. Once the helper rewrite is done and the chapter-6/7 gaps are filled, this track becomes a useful pre-multivariable feeder: NCERT Class 12 covers vectors + 3D + LP that map cleanly into US Calculus III and Linear Algebra. The audit should consider whether `class12Math` should explicitly recommend `multivariableCalculus` and `linearAlgebra` as next-step tracks once region tagging exists.
