# Audit: class2Math

**Syllabus**: [`src/data/syllabi/primary/class_2_math.md`](../../../src/data/syllabi/primary/class_2_math.md)
**Track id**: `class2Math` (also `col-class-2-math`)
**Tier**: primary
**Region**: **Indian-curriculum-flavoured** (NCERT Class 2 + UK KS1 Year 2 + Common Core Grade 2 + ACARA). Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Place Value to 100 and Beyond | ✅ | `makeIndiaClass2MathQuiz` "how many tens"; generated bank's partition builder |
| 2. Addition Strategies Within 100 | ✅ | 2-digit add with bridging; no "make 10 first" strategy explicit |
| 3. Subtraction Strategies Within 100 | ✅ | 2-digit subtract; "sticker chart" missing-part stories |
| 4. Equal Groups, Multiplication, and Division | ✅ | "3 bags × 4 marbles" stories, sharing crackers, 2× / 5× / 10× facts |
| 5. Fractions and Fair Shares | partial | `1/4 of 12 = 3`, `two quarters = 1/2`; **no fraction-of-shape, no compare-fractions** |
| 6. Measurement, Time, and Money | partial | "Quarter hour = 15 min", "100 cm in 1 m", "cm for pencil"; **no money totals**, no temperature |
| 7. Shape, Pattern, and Data | partial | Cube faces, bar-chart-as-sum (`7 cats + 4 dogs = 11`); **no symmetry, no tally-mark counting beyond mention** |
| 8. Word Problems and Mathematical Reasoning | partial | Implicit in India-bank stories; no explicit two-step problems |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) `makeIndiaClass2MathQuiz` | ~50 | **FIX** | Strong narrative framing throughout — sticker charts, sharing crackers, "which symbol fits 35 __ 50". Distractor explanations are still the `numericWrong()` shared line. Promote to KEEP after per-question rewrites. The clock-language builder hand-writes per-distractor explanations correctly ("That mixes up quarter and three-quarter time") — use it as the local template. |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `makeClass2MathBank` (exported as `class2Math`) | ~50 | **MERGE → IndiaClass2** | Overlaps heavily on 2-digit operations. The mixed-skill `textWrong` pool is again `['8', '10', '1/4']` regardless of question — a "how many faces does a cube have?" question can get `1/4` as a wrong answer. Salvage place-value partition, "10 less", and "double 9". Drop the rest. |
| Khan / CK-12 filter (`['place value', 'add within 100', 'subtract within 100', 'money', 'time']`) | varies | **FIX** | LaTeX rendering. The `money` and `time` Khan filters likely pull culturally-US content (`$3.50`); region-tag or strip before launch. |

## Open actions (priority order)

1. **Fix mixed-skill `textWrong` pool** in `makeClass2MathBank` — same flaw template as Class 1, Grade 4, etc.
2. **Author 6 fraction-of-shape questions** ("Which shape shows 1/4 shaded? A square split into 4 with 1 shaded, …" rendered as text descriptions). Closes Chapter 5 gap that is core to Year 2 mastery.
3. **Author 6 symmetry questions** ("Which letter has a line of symmetry: A, B, F, J?") — closes Chapter 7 gap.
4. **Author 5 money-total questions** with region-specific currency (rupees/paise twin to pence/cents).
5. **Add region tag** — same dual-track concern as Class 1 audit.
6. **Tone consistency**: `makeIndiaClass2MathQuiz` uses warm classroom contexts; `makeClass2MathBank` is colder bare-arithmetic. After merge, normalise to India bank's voice.
7. **Mobile rendering**: confirmed plain ASCII fractions, no images, no LaTeX leakage from local content.

## Estimated effort

- Distractor pool fix: ~30 min
- Author fraction + symmetry + money: ~4.5 hours (17 questions × ~15 min)
- Per-fact distractor rewrite on India bank: ~2 hours
- Region tag + Khan filter cap: ~30 min

**~1 working day**.

## Notes for next auditor

The "Class N Math" branch (NCERT-leaning) and "Nth Grade Math collections" (Common Core) duplicate effort but serve different markets. India + UK + AU launches could prefer the Class branch; US launch the Grade branch. The current "ship both, tag neither" stance maximises maintenance cost. Either pick a primary region per track and prune, or invest in region-aware variants. The India banks in `colGapBuilders` are the strongest stylistic match for the syllabus capstones in this cluster — make them the source of truth and treat the generated banks as auto-replenish.
