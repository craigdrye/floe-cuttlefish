# Audit: class4Math

**Syllabus**: [`src/data/syllabi/primary/class_4_math.md`](../../../src/data/syllabi/primary/class_4_math.md)
**Track id**: `class4Math` (also `col-class-4-math`)
**Tier**: primary
**Region**: **Indian-curriculum-flavoured** (NCERT Class 4 + UK KS2 Year 4 + Common Core Grade 4 + ACARA). Not tagged. Parallel to `col-4th-grade-math` (US-leaning).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Place Value, Rounding, and Negative Numbers | partial | 4-digit place value (`In 5,482, hundreds digit value = 400`), round to nearest 100; **no negative numbers, no Roman numerals beyond L** |
| 2. Multi-Digit Addition and Subtraction | ✅ | 4-digit add (`2345 + 1267`), 4-digit subtract |
| 3. Multiplication Facts, Factors, and Multiples | ✅ | Times-table mastery facts, prime/composite mixed-skill ("Which is prime: 21, 29, 35, 39?") |
| 4. Multiplication and Division Written Methods | partial | Multi-digit multiplication and one-digit divisors covered; **no grid/area method, no remainder-in-context** |
| 5. Fractions, Equivalence, and Mixed Numbers | ✅ | `3/4 = 6/8`, like-denominator add, `7/8 ≈ 1` reasoning; **no mixed-number conversions** |
| 6. Decimals, Money, and Measurement Conversions | partial | `1/2 = 0.5`, `3.6 ÷ 10 = 0.36`, time conversion; **no money problems** (pounds/pence or rupees/paise) |
| 7. Geometry, Angles, Area, and Coordinates | ✅ | Obtuse angle, equilateral triangle, coordinate pair `(3, 5)` |
| 8. Data, Graphs, and Problem Solving | ❌ | **No graphs, no multi-step problems.** Same Chapter-8 hole as Grade 4 collections audit |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `makeClass4MathBank` (exported as `class4Math`) | ~50 | **FIX** | Same architecture as Class 3 bank — sound coverage, hand-written fractions, mixed-skill bucket using shared `textWrong` pool (`['acute angle', '(5, 3)', 'C']`). The Roman-numeral question gets `(5, 3)` as a wrong answer. Classic generated-bank artifact. |
| Khan / CK-12 filter `['decimals', 'multi-digit', 'factors', 'prime']` | varies | **FIX** | LaTeX rendering. Khan factor / prime content is solid pedagogically but ships `\\dfrac` and `\\blueD{...}` colour macros raw. |
| `col-class-4-math` overlap with `col-4th-grade-math` | shares wiring | n/a here | Same parallel-track issue. |

## Open actions (priority order)

1. **Author 5 graph + multi-step questions** for Chapter 8 ("A bar chart shows 12 cats and 9 dogs in week 1, and 8 cats and 11 dogs in week 2 — how many cats altogether?"). Closes the most prominent gap.
2. **Author 4 negative-number / temperature questions** ("A freezer is -5°C; the kitchen is 18°C. Difference?") — closes Chapter 1.
3. **Author 4 money-conversion questions** with region-specific currency.
4. **Author 3 mixed-number / improper-fraction conversions** — closes Chapter 5 gap.
5. **Fix mixed-skill `textWrong` pool** — cluster-wide pattern.
6. **Region tag** — same dual-track concern.

## Estimated effort

- Author 16 new questions: ~4 hours
- Distractor pool fix: ~30 min (shared pattern)
- Region tag: ~10 min

**~1 working day**.

## Notes for next auditor

`makeClass4MathBank` is reused by `col4thGradeNyNextGen`, `colGetReadyFor5thGrade`. The shared-pool flaw and Chapter 8 gap propagate to those tracks. Worth grouping all four-grade-equivalent tracks (class4Math, col-4th-grade-math, col-4th-grade-ny-next-gen, col-get-ready-for-5th-grade) into one consolidation wave rather than auditing each in isolation.
