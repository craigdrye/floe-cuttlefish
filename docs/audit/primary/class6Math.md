# Audit: class6Math

**Syllabus**: [`src/data/syllabi/primary/class_6_math.md`](../../../src/data/syllabi/primary/class_6_math.md)
**Track id**: `class6Math` (also `col-class-6-math`)
**Tier**: primary (bridge to secondary)
**Region**: **Indian-curriculum-flavoured** (NCERT Class 6 + UK KS2 Year 6 + Common Core Grade 6 + ACARA). Not tagged. Parallel to `col-6th-grade-math` (US-leaning).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Number, Place Value, and Integers | partial | `-3 + 7 = 4`, absolute value, all-four-quadrants; **no ten-million-scale, no rounding-to-degree-of-accuracy** |
| 2. Calculation Fluency and Order of Operations | partial | `2^4`, exponents present; **no long-multiplication, no remainder-as-fraction context** |
| 3. Fractions, Decimals, and Percentages | ✅ | `2/3 × 3/5 = 2/5`, `18 ÷ 3/4 = 24`, `25% of 80 = 20`, `75% of 40 = 30` |
| 4. Ratios, Rates, and Proportion | ✅ | `8:12 → 2:3`, `120 mi / 3 hr = 40 mph`, recipe ratio, unit pricing |
| 5. Expressions, Equations, and Patterns | partial | `3x + 2 at x = 5`, `x + 9 = 15`, `y - 5`, `3(x+4) = 3x+12`; **no formula derivation, no sequence-rule questions** |
| 6. Coordinate Plane, Geometry, and Transformations | partial | Plot all four quadrants, distance on coordinate plane; **no translation, no reflection** |
| 7. Measurement, Area, Volume, and Angles | partial | Triangle area, parallelogram area, cube surface area; **no circle parts (radius/diameter/circumference), no missing-angle proofs** |
| 8. Statistics, Readiness, and Problem Solving | ✅ | Mean, median, mode, range, IQR, histogram, statistical-question recognition |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `class6Math` wiring | uses `makeCol6thGradeMathQuiz` + OpenTrivia spread | **FIX** | Same pattern as `class5Math` — direct use of `primaryBuilders.ts` gold standard + OpenTrivia leak with `XXXXXXX` distractors. Remove OpenTrivia. |
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) `makeCol6thGradeMathQuiz` | 10 | **KEEP** | Gold standard. `6/15` distractor with explanation "equivalent before simplification but not the simplest form asked for" is the cleanest example of per-distractor specificity in the catalog. |
| Khan / CK-12 filter `['ratios', 'rates', 'negative numbers', 'equations', 'inequalities']` | varies | **FIX** | LaTeX rendering. The Khan percent and rational-expression content shipping `\\dfrac` is the largest mobile-rendering risk in the cluster. |
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) — no India Class 6 builder | n/a | **GAP** | Same gap as Class 5. |

## Open actions (priority order)

1. **Remove OpenTrivia spread from `class6Math` wiring** — ship-blocker.
2. **Author 5 missing-angle / circle-parts questions** ("In a triangle, two angles are 50° and 70° — find the third"). Closes Chapter 7. Note: circle questions ideally use diagrams; text-only ("If radius = 4, what is diameter?") works as fallback.
3. **Author 4 sequence-rule and formula questions** ("A sequence starts 3, 7, 11, 15 — what is the rule?"). Closes Chapter 5.
4. **Author 4 translate / reflect questions** ("A point at (3, 2) is reflected in the x-axis — where does it land?"). Closes Chapter 6.
5. **Author 3 long-multiplication / remainder-as-fraction questions** — closes Chapter 2.
6. **LaTeX strip** for Khan filter — cluster-wide priority.
7. **Author India Class 6 quiz** if dual-track is preserved.
8. **Region tag**.

## Estimated effort

- OpenTrivia removal: ~5 min
- Author 16 new questions: ~4 hours
- India Class 6 quiz (optional): ~5 hours
- Region tag: ~10 min
- LaTeX strip: shared cluster cost

**~1 working day minimum; ~2 days with India quiz.**

## Notes for next auditor

`class6Math` and `col-6th-grade-math` are the two primary-math "bridge to secondary" tracks. Both rely heavily on `primaryBuilders.ts` for quality and on `primaryGeneratedMath.ts` for coverage. The Chapter 8 "readiness studio" synthesis gap from the col-6th-grade audit also applies here — Year 6 graduates need cross-topic problem solving, not isolated facts. This is the single highest-leverage authoring investment in the primary math cluster: a Year 6 graduate who has done only this catalog will be unprepared for Year 7 algebra and proportional reasoning at exam pace.
