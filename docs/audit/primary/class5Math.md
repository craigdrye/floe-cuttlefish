# Audit: class5Math

**Syllabus**: [`src/data/syllabi/primary/class_5_math.md`](../../../src/data/syllabi/primary/class_5_math.md)
**Track id**: `class5Math` (also `col-class-5-math`)
**Tier**: primary
**Region**: **Indian-curriculum-flavoured** (NCERT Class 5 + UK KS2 Year 5 + Common Core Grade 5 + ACARA). Not tagged. Runs in parallel with `col-5th-grade-math` (US-leaning).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Place Value to One Million | partial | Decimal place value to thousandths (`0.7 vs 0.65`); **no million-scale whole numbers, no negative-number sequences** |
| 2. Addition, Subtraction, and Multi-Step Choices | partial | Multi-digit add/multiply present; **no multi-step context problems** |
| 3. Multiplication, Division, Factors, and Primes | ✅ | `36 ÷ 12 = 3`, `144 ÷ 9 = 16`; prime/composite framing exists in mixed-skill bucket |
| 4. Fractions as Numbers and Operators | ✅ | `1/3 + 1/6 = 1/2`, `3/4 - 1/4 = 2/4`, `2/3 × 3/4 = 1/2`, `3 pizzas / 4 kids` |
| 5. Decimals, Percentages, and Powers of Ten | ✅ | Decimal +/−/×/÷, `0.25 = 1/4`, `12.5 × 10 = 125`, `3.746 → 3.75` |
| 6. Measurement, Perimeter, Area, and Volume | ✅ | Volume of rectangular prism, kg→g and m→cm conversions, area implicit in volume builders |
| 7. Geometry, Angles, and Position | partial | Coordinate pair `(5, 1)`, shape-hierarchy ("every square is a rectangle"); **no angle measuring, no translate/reflect** |
| 8. Data, Graphs, and Problem Solving | ❌ | **No tables, no timetables, no line graphs.** Same Chapter-8 gap as col-5th-grade audit |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `class5Math` wiring | uses `makeCol5thGradeMathQuiz` + OpenTrivia spread | **FIX** | The track wires the gold-standard `primaryBuilders.ts` quiz directly (good!) — but ALSO spreads OpenTrivia's `class5Math` track which carries the `XXXXXXX` placeholder distractors. Remove the OpenTrivia spread. This is the cleanest fix in the cluster. |
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) `makeCol5thGradeMathQuiz` | 10 | **KEEP** | Gold standard. Already used directly via the `class5Math` wiring. |
| Khan / CK-12 filter (`['coordinate plane', 'volume', 'algebraic thinking']`) | varies | **FIX** | LaTeX rendering. |
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) — no India Class 5 builder exists | n/a | **GAP** | India Class 1 and 2 have hand-authored quizzes; Class 5 has none. The track relies entirely on `makeCol5thGradeMathQuiz` (US Common Core flavour) + OpenTrivia. Consider authoring `makeIndiaClass5MathQuiz` if the dual-track regional strategy is preserved. |

## Open actions (priority order)

1. **Remove OpenTrivia spread from `class5Math` wiring** in `primary.ts` (line `class5Math: [...makeCol5thGradeMathQuiz(), ...(openTriviaForKidsQuestionsByTrack.class5Math || [])]`). Ship-blocker if launched: kids see literal `XXXXXXX`.
2. **Author 5 multi-step word problems** with Indian classroom contexts (rupees, kg of rice, distance in km) — closes Chapter 2 and partly Chapter 8.
3. **Author 4 table / timetable / line-graph questions** in plain text — closes Chapter 8.
4. **Author 3 negative-number questions** (temperature, elevation) — closes Chapter 1.
5. **Author 3 angle-measurement and shape-transformation questions** — closes Chapter 7.
6. **Author an India Class 5 quiz** in `colGapBuilders.ts` if regional dual-track is preserved. Otherwise consolidate `class5Math` with `col-5th-grade-math` and tag region.
7. **Region tag** — without India-specific content this track is just `col-5th-grade-math` under another id. Honest move: alias or author.

## Estimated effort

- OpenTrivia removal: ~5 min
- Author 15 new questions: ~4 hours
- Author India Class 5 quiz (15–20 questions, optional): ~5 hours
- Region tag / consolidation decision: ~30 min

**~1 working day for minimum fix; ~2 days with new India quiz.**

## Notes for next auditor

This is the most-shippable primary-math course currently — `primaryBuilders.ts` carries it well. The OpenTrivia leak is a 5-minute fix with outsized risk reduction. The deeper question is whether the `class5Math` / `col-5th-grade-math` parallel survives launch; if not, this is a candidate for consolidation rather than fresh authoring.
