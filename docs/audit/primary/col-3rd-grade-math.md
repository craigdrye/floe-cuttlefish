# Audit: col-3rd-grade-math

**Syllabus**: [`src/data/syllabi/primary/3rd_grade_maths_collections.md`](../../../src/data/syllabi/primary/3rd_grade_maths_collections.md)
**Track id**: `col-3rd-grade-math` (umbrella for `col-3rd-grade`, `col-3rd-grade-ny-next-gen`, `col-get-ready-for-3rd-grade`, Eureka 3rd–8th variants)
**Tier**: primary
**Region**: **US-first** (Common Core Grade 3 + NY Next Gen wired explicitly). Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Place Value to 1000 | ✅ | `primaryBuilders.ts` covers digit value, comparison, estimation 198 + 204 |
| 2. Addition and Subtraction Within 1000 | ✅ | Generated bank ships `287 + 345`, `642 - 318` etc with regrouping framing |
| 3. Multiplication as Equal Groups and Arrays | ✅ | Equal-groups story (4 bags × 3 marbles = 12) is the opening question — meets the syllabus tone |
| 4. Division, Sharing, and Remainders | ✅ | Sharing-equally narrative + missing-factor in `primaryBuilders.ts`; remainders in generated bank |
| 5. Fractions as Equal Parts and Numbers | ✅ | `1/4` shape fraction + `2/3 vs 3/4` comparison + equivalent-fraction hand-written distractors |
| 6. Measurement, Time, Area, and Perimeter | ✅ | Rectangle area, perimeter, "choose the unit", elapsed time |
| 7. Geometry and Data Displays | partial | Quadrilateral classification + bar-graph reading; **no line plots, no pictographs** |
| 8. Word Problems and Reasoning Studio | partial | Sharing/grouping stories present; no two-step problems |

Strongest coverage in the cluster — `primaryBuilders.ts` carries this course.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) `makeCol3rdGradeMathQuiz` | 15 | **KEEP** | **Gold standard for primary math.** Each question has `setup`, `prompt`, `fieldNote`, `mentorHint`, and hand-written per-distractor explanations naming the actual misconception ("That sticks the digits together instead of combining them mathematically"). This is the model — protect, do not regenerate. |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `col3rdGrade` + `col3rdGradeNyNextGen` | ~50 + ~50 | **FIX → MERGE** | Both exports are `makeClass3MathBank` with different baseId seeds. Content is fine (digit values, three-digit add/subtract, fractions, area). Per-distractor explanations are templated. Pick one, delete the other, layer in `primaryBuilders.ts` voice. The NY-Next-Gen variant should either be the same content (in which case alias) or filtered to NY-specific items (in which case author them). |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `colGetReadyFor3rdGrade` | ~50 | **KEEP** | Uses `makeClass2MathBank` content as deliberate prerequisite scaffolding. Matches the syllabus design note ("Get ready for 3rd grade items should use the same topics at the lower end of difficulty"). |
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) `makeEurekaMathFoundations38Quiz` + `makeEurekaMath38Quiz` | ~50 + ~50 | **FIX** | Pulls Eureka topics across grades 3–8 into one bank. Distractors are sampled from a 10-bank rotation regardless of question (`bank[group]`), so the same wrong answers cycle for every prompt in that group. Not a DEFAULT_FLAW constant but a structural equivalent. Either author per-question distractors or break apart into grade-specific banks. |
| Khan Academy + CK-12 filter (`filterQs(khan, ['multiplication','division','fractions intro','area','perimeter'])`) | varies (live count) | **FIX** | Khan content uses LaTeX (`$\\dfrac{1}{2}$`, `\\blueD{...}`) that will render as raw markup on the kids surface. Either render-pipeline must strip-or-style, or filter these out for primary. **Mobile-rendering blocker.** |

## Open actions (priority order)

1. **Strip LaTeX from Khan Academy feed for primary tier** — `\\dfrac`, `\\blueD`, `\\purpleD`, `\\maroonD` colour macros and dollar-sign math delimiters will reach kids as raw text. Either pre-process or exclude.
2. **Add 6 line-plot / pictograph questions** — closes Chapter 7 gap. Plain text with small ASCII bars is fine.
3. **Add 4 two-step word problems** ("Sam buys 3 packs of 6 stickers, then gives 5 away — how many left?") — closes Chapter 8.
4. **Consolidate `col3rdGrade` and `col3rdGradeNyNextGen`** unless content actually diverges by region.
5. **Region tag**: NY Next Gen branding makes the US assumption explicit — tag and stop fence-sitting.

## Estimated effort

- LaTeX strip: ~1 hour (pipeline change)
- Author line plots + two-step problems: ~3 hours (10 questions)
- Consolidation: ~30 min
- Per-distractor rewrite on Eureka banks: ~3 hours

**~1 working day**.

## Notes for next auditor

`primaryBuilders.ts` `makeCol3rdGradeMathQuiz` is **the** template. Every primary math course should be measured against it. Khan/CK-12 LaTeX issue applies cluster-wide; fix once.
