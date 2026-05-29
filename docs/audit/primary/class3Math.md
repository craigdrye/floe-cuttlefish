# Audit: class3Math

**Syllabus**: [`src/data/syllabi/primary/class_3_math.md`](../../../src/data/syllabi/primary/class_3_math.md)
**Track id**: `class3Math` (also `col-class-3-math`)
**Tier**: primary
**Region**: **Indian-curriculum-flavoured** (NCERT Class 3 + UK KS2 Year 3 + Common Core Grade 3 + ACARA). Not tagged. Diverges from `col-3rd-grade-math` (US-leaning), which runs the same year level.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Place Value to 1000 | ✅ | `makeClass3MathBank` rounds 372, 486, 519 to nearest 10 |
| 2. Addition and Subtraction With Regrouping | ✅ | 3-digit add/subtract (`287 + 345`, `642 - 318`) |
| 3. Multiplication Facts, Arrays, and Scaling | partial | Facts `3×7`, `4×8`; **no arrays, no scaling** ("3 times as many") |
| 4. Division, Sharing, and Remainders | partial | Equal-share facts; **no remainder interpretation in context** (lives in `primaryBuilders.ts` instead) |
| 5. Fractions as Equal Parts and Numbers | ✅ | Equivalent fractions, like-denominator add, "which is larger 1/3 vs 1/6" |
| 6. Measurement, Time, and Perimeter | ✅ | Rectangle perimeter/area builders, "45 minutes after 7", Roman numeral IX |
| 7. Geometry and Data Displays | partial | Right angle, bar chart; **no parallel/perpendicular, no pictogram, no tally** |
| 8. Word Problems and Mathematical Reasoning | partial | One-step contextual problems; **no two-step**, no "what method did you choose" |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `makeClass3MathBank` (exported as `class3Math`) | ~50 | **FIX** | Reasonable coverage, fraction questions are hand-written with topic-relevant distractors (`fractionQuestion` helper). Mixed-skill bucket inherits a 3-item `textWrong` pool (`['10', 'acute angle', 'IV']`) — same flaw as every other generated bank. The bare-arithmetic 3-digit add/subtract questions are functionally identical to `makeClass4MathBank`'s except for number size; consider whether one shared builder with a difficulty parameter would dedupe. |
| Khan / CK-12 filter `['multiplication', 'division', 'fractions intro', 'area', 'perimeter']` | varies | **FIX** | LaTeX rendering blocker. The `area` and `perimeter` Khan filter pulls in cleaner content than the local generation, but the `\\dfrac` notation is incompatible with a kids surface. Pre-process or exclude. |
| `col-class-3-math` overlap | shares wiring with `col-3rd-grade-math` audit | n/a here | Note the parallel-track issue: same year, two tracks, different cultural framing. |

## Open actions (priority order)

1. **Author 5 array questions** in plain ASCII or as "An array has 4 rows of 6 — what multiplication fact?" — closes Chapter 3 scaling/array gap.
2. **Author 4 two-step word problems** ("A baker makes 3 trays of 8 cookies, then 5 are sold — how many left?") — closes Chapter 8.
3. **Author 4 parallel/perpendicular line questions** ("Which letter has perpendicular lines: L, S, V?") — closes Chapter 7.
4. **Author 3 contextual-remainder questions** ("13 children share 4 cars equally; how many ride alone?") — closes Chapter 4 nuance.
5. **Fix mixed-skill `textWrong` pool** — same fix pattern as every primary-tier generated bank.
6. **Region tag** — Class 3 syllabus enumerates four frameworks; `region: 'IN'` is the closest single match, but explicit multi-region tagging would be honest.
7. **Mobile rendering**: confirmed plain ASCII fractions in this bank.

## Estimated effort

- Author 16 new questions: ~4 hours
- Distractor pool fix: ~30 min
- Region tag + Khan strip: shared cluster cost

**~1 working day**.

## Notes for next auditor

`makeClass3MathBank` is reused by `col3rdGrade`, `col3rdGradeNyNextGen`, and `colGetReadyFor4thGrade` (with different baseId seeds). One content change propagates to four tracks — both efficient and risky. The cluster-wide "shared `textWrong` mixed-skill pool" flaw originates here at Class 3 (alphabetically smallest grade in the generated set) and replicates upward.
