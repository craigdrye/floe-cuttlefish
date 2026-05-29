# Audit: col-4th-grade-math

**Syllabus**: [`src/data/syllabi/primary/4th_grade_maths_collections.md`](../../../src/data/syllabi/primary/4th_grade_maths_collections.md)
**Track id**: `col-4th-grade-math` (umbrella for `col-4th-grade`, `col-4th-grade-ny-next-gen`, `col-get-ready-for-4th-grade`, Eureka variants)
**Tier**: primary
**Region**: **US-first** (Common Core Grade 4 + NY Next Gen). Currency is dollars in `colGapBuilders`. Not tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Place Value, Rounding, and Number Sense | ✅ | `5,482` digit-value question; round-to-nearest-100 builder; **no rounding to 10,000+** |
| 2. Multi-Digit Addition and Subtraction | ✅ | 4-digit add/subtract with regrouping framing |
| 3. Multiplication, Factors, and Multiples | ✅ | Factor-pair builder; prime/composite mentioned in mixed-skill bucket |
| 4. Multi-Digit Division and Remainders | ✅ | `17 ÷ 5 = 3 r 2` style with strong per-distractor reasoning in `primaryBuilders.ts` |
| 5. Fraction Equivalence and Operations | ✅ | `1/2 = 2/4`, like-denominator addition, fraction-of-set |
| 6. Decimals, Money, and Measurement Conversions | ✅ | Decimal place value, `0.5 = 1/2`, `3.6 ÷ 10 = 0.36`, time conversions |
| 7. Angles, Geometry, Area, and Symmetry | partial | Right angle, obtuse angle, equilateral triangle, area of rectangle; **no symmetry** (same gap as basicGeometry) |
| 8. Data, Line Plots, and Problem Solving Studio | partial | No line plots; no fractional measurement data |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) `makeCol4thGradeMathQuiz` | 10 | **KEEP** | Hand-authored, gold standard. Distractor explanations name actual fourth-grade bugs ("That misses part of the product. Distribute to tens and ones"). Voice is calm, syllabus-aligned. |
| [`primaryGeneratedMath.ts`](../../../src/data/questionCatalog/primaryGeneratedMath.ts) `col4thGradeNyNextGen` + `colGetReadyFor4thGrade` | ~50 each | **FIX → MERGE** | Both use `makeClass4MathBank` / `makeClass3MathBank` content with different baseId seeds. The "get ready for 4th" using Class 3 content is correct per syllabus design. The NY-Next-Gen vs base distinction is uninformative — same generated content. Pick one; either author NY-specific items or alias. |
| Same file mixed-skill bucket distractors | covers ~20 of the 50 questions | **FIX** | Shared `textWrong` triple `[acute angle, (5, 3), C]` is applied to every mixed-skill question regardless of topic. This means a Roman-numeral question gets `(5, 3)` as a wrong answer, and a coordinates question gets `C`. Same template failure as `earlyMathReview` patterns chapter. |
| [`colGapBuilders.ts`](../../../src/data/questionCatalog/colGapBuilders.ts) Eureka 3rd–8th | shared with 3rd grade | **FIX** | Same audit notes as col-3rd-grade-math. Break by grade or accept the mixed-grade framing and add a "Grade N" tag per question. |
| Khan Academy filter `['decimals','multi-digit','factors','prime']` | varies | **FIX** | LaTeX rendering issue same as 3rd grade. **Mobile-rendering blocker.** |

## Open actions (priority order)

1. **Fix shared mixed-skill distractor pool** — the `[acute angle, (5, 3), C]` triple applied to all mixed-skill questions is the most visible AI-generation artifact in the bank. Distractors must come from each question's topic.
2. **Author 6 symmetry questions** (line-of-symmetry on shapes named in text: "How many lines of symmetry does a rectangle have?"). Closes Chapter 7.
3. **Author 5 line-plot questions** with small ASCII bars. Closes Chapter 8.
4. **Add larger-number rounding** (to 10,000 / 100,000) — syllabus explicitly calls for it.
5. **Consolidate base + NY-Next-Gen** unless real divergence.
6. **Money region tag** — `colGapBuilders` Eureka uses `$12` dollar signs; UK launch would need pence.

## Estimated effort

- Distractor-pool fix: ~45 min
- Author symmetry + line plots + larger-number rounding: ~4 hours (~16 questions)
- Consolidation + region tag: ~45 min
- LaTeX strip (cluster-wide): shared cost with 3rd grade audit

**~1 working day**.

## Notes for next auditor

The `colGetReadyFor4thGrade = makeClass3MathBank(...)` pattern is intentional and works — preserve it. The decimal-place-value question in `primaryBuilders.ts` (`In 7.36, focus on the digit 3`) is the cleanest fourth-grade question in the catalog; use the structure when authoring any new decimal content. Confirmed the May 2026 finding: fractions render plain ASCII (`"3/4"`, `"2/8"`) throughout this course's hand-authored content — consistent and mobile-safe except where Khan/CK-12 LaTeX leaks in.
