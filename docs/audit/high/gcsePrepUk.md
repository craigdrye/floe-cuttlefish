# Audit: gcseMaths / gcseScience

**Syllabus**: [`src/data/syllabi/high/gcse_prep_uk.md`](../../../src/data/syllabi/high/gcse_prep_uk.md)
**Track ids**: `gcseMaths` (line 429), `gcseScience` (line 440) in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)
**Tier**: high
**Region**: **UK** (untagged — syllabus explicitly names AQA/Edexcel/OCR; recommend `regions: ['UK']` on both)
**Status**: both `soon` — accurately reflects the absence of dedicated GCSE content.

## Coverage map (syllabus → questions)

| Syllabus chapter | gcseMaths | gcseScience | Notes |
|---|---|---|---|
| 1. GCSE Exam Map, Tier Choice, Revision System | ❌ | ❌ | No tier-aware items, no command-word drilling. |
| 2. Maths — Number, Ratio, Algebra Fluency | ❌ (generic only) | – | Topup via `mathBlueprints()` — generic ratio/linear/quadratic, not GCSE-tiered. |
| 3. Maths — Geometry, Graphs, Statistics, Probability | ❌ (generic only) | – | Circle theorems, cumulative frequency, histograms with frequency density — none present. |
| 4. Combined Science Skills & Required Practicals | – | ❌ | No variables/controls/uncertainty items targeted at GCSE language. |
| 5. Biology — Cells, Organisation, Infection, Bioenergetics | – | ❌ (generic only) | Generic `scienceBlueprints()` only. |
| 6. Biology — Homeostasis, Inheritance, Evolution, Ecology | – | ❌ (generic only) | No genetic crosses with Punnett practice, no feedback-loop items. |
| 7. Chemistry — Matter, Reactions, Quantitative Work, Resources | – | ❌ (generic only) | No reacting-mass GCSE calcs. |
| 8. Physics — Energy, Electricity, Particles, Forces, Waves, Magnetism | – | ❌ (generic only) | No equation-rearrange exam items, no motion-graph interpretation. |

**Effective coverage: 0% of dedicated GCSE content.** Both tracks rely entirely on `highGenerated.ts` blueprint generation that produces ~50 items per track tagged as "Mathematics"/"AP" — none use UK GCSE command words ("show that", "give your answer in standard form"), tier markers (Foundation/Higher), or required-practical framing.

## Per-file recommendations

| File | GCSE Q's | Bucket | Reason |
|---|---|---|---|
| No dedicated file exists | 0 | — | Neither `gcseMaths` nor `gcseScience` is referenced in any `questionCatalog/*.ts` file. Both tracks rely on generic blueprint topup. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `mathBlueprints()` topup for `gcseMaths` | ~50 | **FIX (rename or rebuild)** | Generic blueprints (sticker robots, drone gradient, pancake puddle, quadratic factor x²-5x+6) are GCSE-adjacent in concept but lack tier markers, exam-board command words, and required-practical context. Either rebuild as GCSE-specific blueprints or stop top-up for this track. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` topup for `gcseScience` | ~50 | **FIX (rename or rebuild)** | Same concern — generic science is NGSS-flavoured (US framework), wrong for UK GCSE Combined Science 9-1 with Foundation/Higher split. |
| [`grade10MathExamBatch.ts`](../../../src/data/questionCatalog/grade10MathExamBatch.ts) | 0 wired | **MERGE → gcseMaths (partial)** | Grade-10 STAAR/state items overlap with GCSE Higher in algebra/geometry. Re-tag and audit for tier appropriateness. |
| [`highSchoolBiologyNgssExamBatch.ts`](../../../src/data/questionCatalog/highSchoolBiologyNgssExamBatch.ts), [`highSchoolPhysicsNgssExamBatch.ts`](../../../src/data/questionCatalog/highSchoolPhysicsNgssExamBatch.ts) | 0 wired | **MERGE → gcseScience (partial)** | NGSS items are US-framework-tagged; partial reuse possible with UK rewording — not a one-to-one mapping (e.g., GCSE specifies required practicals; NGSS uses three-dimensional learning). |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | 0 currently | **AUTHOR HERE** | Per `CONTENT_AUDIT.md`. Highest priority: required-practical biology items, equation-rearrange physics, reacting-mass chemistry. |

## Open actions (priority order)

1. **Add `regions: ['UK']`** to both track entries.
2. **Stop generic blueprint topup for these tracks** until GCSE-specific blueprints exist.
3. **Author dedicated GCSE blueprints** (or hand-authored items) — one per chapter at Foundation and Higher. Target ~60 per track.
4. **Lift candidates from `grade10MathExamBatch` and NGSS biology/physics batches** as an interim bridge.
5. **Keep `status: 'soon'`** until dedicated content lands.

## Estimated effort

- Region tags + blueprint exclusion: ~30 min
- GCSE-specific blueprint authoring (12 chapters × 2 tiers ≈ 24 templates): ~10 hours
- Hand-authored core (60 questions per track): ~40 hours
- US-batch lift and re-tag: ~6 hours

**~6–7 working days across both tracks.**

## Notes for next auditor

GCSE differs from US/AU systems in three measurable ways the content has to reflect: (1) **tier choice** (Foundation 1–5, Higher 4–9) governs which questions a candidate sees; (2) **required practicals** are codified by exam board and frequently appear in exam questions; (3) **command words** are board-specific (AQA, Edexcel, OCR each publish a list). Generic "math/science" content cannot pass as GCSE prep without addressing all three.
