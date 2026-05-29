# Audit: col-6th-grade-math

**Syllabus**: [`src/data/syllabi/primary/6th_grade_maths_collections.md`](../../../src/data/syllabi/primary/6th_grade_maths_collections.md)
**Track id**: `col-6th-grade-math` (umbrella for `col-6th-grade-ny-next-gen`, `col-get-ready-for-6th-grade`, Eureka variants)
**Tier**: primary (bridge to middle/secondary)
**Region**: **US-first** (Common Core Grade 6 + NY Next Gen). Dollars in `colGapBuilders`. Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Ratios, Rates, and Percent Reasoning | ✅ | `8:12 → 2:3`, recipe ratio, `120 mi / 3 hr = 40 mph`, `25% of 80 = 20` |
| 2. Fraction and Decimal Operations | ✅ | `2/3 × 3/5 = 2/5`, `18 ÷ 3/4 = 24`, GCF/LCM, distributive `4(9+2)` |
| 3. Integers, Rational Numbers, and the Coordinate Plane | ✅ | `-3 + 7 = 4`, absolute value, `(-2, 5)` placement, all four quadrants |
| 4. Expressions, Exponents, and Equivalent Forms | ✅ | `2^4`, `3x+2 at x=5`, `3(x+4) = 3x+12`, ticket-price expression |
| 5. Equations, Inequalities, and Relationships | partial | One-step `x + 9 = 15`, `4x = 28`, `x > 8` truth check; **no two-step equations, no dependent/independent variable framing, no inequality graphing** |
| 6. Area, Volume, Nets, and Surface Area | partial | Triangle area, surface area of cube, parallelogram area; **no nets, no fractional edge lengths, no compose/decompose problems** |
| 7. Statistics, Distribution, and Data Displays | ✅ | Mean, median, mode, range, IQR, histogram-as-grouped-intervals, statistical-question recognition |
| 8. Secondary Maths Readiness Studio | ❌ | **No mixed-topic synthesis questions.** The syllabus capstone is the entire purpose of Year 6, and no questions enact it |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) `makeCol6thGradeMathQuiz` | 10 | **KEEP** | Gold standard. `6/15` as a wrong answer for `2/3 × 3/5` with explanation "That is equivalent before simplification, but not the simplest form asked for" is precisely the per-distractor specificity the framework wants. |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `col6thGradeNyNextGen` (= `makeGrade6MathBank`) | ~50 | **FIX** | Best-organised generated bank in the cluster — split by ratio / number system / expressions / geometry / statistics. Distractors still pool by section but the section-level pool is at least topic-appropriate (`-4 / 3 / (2,-5)` for the number-system section, etc). Promote to "MERGE → KEEP" after per-question distractor rewrites. |
| Same file, `colGetReadyFor6thGrade` (= `makeGrade5MathBank(..., ready=true)`) | ~50 | **KEEP** | The `ready` flag relabels chapters as "Readiness:" prefixed — clean design, syllabus-aligned. |
| Same file, `class6Math` wiring | duplicates `makeCol6thGradeMathQuiz` + OpenTrivia | **FIX** | Remove the OpenTrivia spread (`XXXXXXX` distractors). Keep gold builder. |
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) Eureka 3rd–8th | shared | **FIX** | As prior. |
| Khan/CK-12 filter `['ratios','rates','negative numbers','equations','inequalities']` | varies | **FIX** | LaTeX rendering. **The percentage and rational-expression Khan questions ship raw `\\dfrac{15}{100}\\cdot\\maroonD{20}` to the kids surface.** Critical mobile blocker. |

## Open actions (priority order)

1. **Author 5 readiness-studio synthesis questions** ("A recipe for 4 people uses 300g flour. A baker scales it to feed 6 — how much flour?" — combines ratio + multi-step + units). Closes Chapter 8.
2. **Author 4 two-step equation questions** (`2x + 5 = 13`, with distractors that name `x = 9` / `x = 4` misconceptions). Closes Chapter 5.
3. **Author 3 net / surface-area questions** with text-rendered net description. Closes Chapter 6.
4. **Strip LaTeX from Khan feed for primary tier** — biggest mobile-rendering risk in the cluster.
5. **Remove OpenTrivia spread from `class6Math` wiring**.
6. **Region tag** — `mph` and `$` make US assumption explicit.

## Estimated effort

- Author 12 new questions: ~3 hours
- LaTeX strip: shared cost
- OpenTrivia removal: ~5 min
- Region tag: ~10 min

**~1 working day**.

## Notes for next auditor

`makeGrade6MathBank` is structurally the cleanest generated bank — chapters map to syllabus chapters, builders are short, each section's distractor pool is at least topically related. This is the architecture the other primary-math generated banks should adopt. The Chapter 8 gap (readiness-studio synthesis) is the same shape as the "Chapter 1 fund-math" gap in the VC roadmap audit — both are the syllabus's capstone strand left empty by template generation. Authoring effort should be the highest priority.
