# Audit: col-5th-grade-math

**Syllabus**: [`src/data/syllabi/primary/5th_grade_maths_collections.md`](../../../src/data/syllabi/primary/5th_grade_maths_collections.md)
**Track id**: `col-5th-grade-math` (umbrella for `col-5th-grade-ny-next-gen`, `col-get-ready-for-5th-grade`, Eureka variants)
**Tier**: primary
**Region**: **US-first** (Common Core Grade 5 + NY Next Gen). Customary units mixed with metric. Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Place Value, Powers of Ten, and Decimal Structure | ✅ | `0.7 vs 0.65`, place value to thousandths; rounding `3.746` → `3.75` |
| 2. Whole-Number Operations and Expression Sense | ✅ | `2 × (8 + 7)`, multi-digit fluency; **no division by 2-digit divisor** |
| 3. Fractions as Numbers and Equivalent Forms | ✅ | `1/3 + 1/6 = 1/2`, fraction-as-division (`3 pizzas / 4 kids = 3/4 pizza`), benchmark comparison |
| 4. Fraction Operations and Scaling | partial | `2/3 × 3/4` covered; no unit-fraction division (`1/4 ÷ 3`) and no scaling-as-resizing framing |
| 5. Decimals, Percents, and Practical Calculation | ✅ | Decimal +/−/×/÷, `0.25 = 1/4` benchmarks |
| 6. Measurement, Volume, and Unit Modeling | ✅ | Volume of rectangular prism, kg→g and m→cm conversions, **but no composite prisms** |
| 7. Coordinate Plane, Geometry, and Classification | partial | Plot points in quadrant I; **no shape hierarchy questions** (square ⊂ rectangle ⊂ parallelogram is in `primaryBuilders.ts`) |
| 8. Data, Modeling, and Multi-Step Reasoning | ❌ | **No line plots, no measurement data, no multi-step prompts** |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) `makeCol5thGradeMathQuiz` | 10 | **KEEP** | Gold standard. Strongest distractor reasoning in the bank — `5.11` as a wrong answer for `3.4 + 2.7` ("That treats decimal digits like separate whole numbers") names the canonical misconception precisely. |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `col5thGradeNyNextGen` (= `makeGrade5MathBank`) | ~50 | **FIX** | Content is solid; the bank covers decimal comparison, fraction operations, volume, coordinates, and Grade 5 mixed skills. The mixed-skill distractor pool (`[15, (2,4), 6.15]`) is shared across ~24 questions regardless of topic, same flaw pattern as Grade 4. |
| Same file, `colGetReadyFor5thGrade` (= `makeClass4MathBank`) | ~50 | **KEEP** | Class 4 content as Grade 5 readiness, per syllabus design. |
| Same file, `class5Math` wiring | duplicates `makeCol5thGradeMathQuiz` (gold) + OpenTrivia | **FIX** | The `class5Math` track wires `makeCol5thGradeMathQuiz()` directly (good) but **also** OpenTrivia's `class5Math` track which has the same `XXXXXXX` placeholder distractor issue. Remove the OpenTrivia spread. |
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) Eureka 3rd–8th | shared with lower grades | **FIX** | As prior audits. |
| Khan/CK-12 filter `['coordinate plane','volume','algebraic thinking']` | varies | **FIX** | LaTeX rendering blocker. |

## Open actions (priority order)

1. **Author 6 line-plot / measurement-data questions** ("A line plot shows times 2/4, 3/4, 1/2, 1/2 — what is the most common?"). Closes Chapter 8 entirely.
2. **Author 4 shape-hierarchy questions** ("Every square is also a …?") — closes Chapter 7's hierarchy strand.
3. **Author 3 unit-fraction division questions** — closes Chapter 4 gap.
4. **Fix shared mixed-skill distractor pool** (same pattern as Grade 4 audit — single fix template).
5. **Remove OpenTrivia spread from `class5Math` wiring** — the `XXXXXXX` problem makes it ship-blocker.
6. **Region tag**: `colGapBuilders` Eureka mixes "miles per hour" with "kilometers per hour" within the same bank. Settle on one, tag the track.
7. **Status flag**: `class5Math` is `playable` — confirm wired questions are not just the broken OpenTrivia rows.

## Estimated effort

- Author 13 new questions: ~3.5 hours
- Distractor-pool fix: ~45 min
- OpenTrivia removal: ~5 min
- Region tag + status verify: ~20 min
- LaTeX strip (shared): cluster cost

**~1 working day**.

## Notes for next auditor

`makeCol5thGradeMathQuiz` in `primaryBuilders.ts` is arguably the best primary-tier file in the catalog — explanations like "That treats decimal digits like separate whole numbers" and "That places the decimal too far left" model exactly the per-distractor specificity the audit framework calls for. New 5th-grade content should match this voice or be rejected.
