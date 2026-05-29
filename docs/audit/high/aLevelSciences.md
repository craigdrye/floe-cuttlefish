# Audit: alevelBiology / alevelChemistry / alevelPhysics

**Syllabus**: [`src/data/syllabi/high/a_level_sciences.md`](../../../src/data/syllabi/high/a_level_sciences.md)
**Track ids**: `alevelBiology` (line 198), `alevelChemistry` (line 209), `alevelPhysics` (line 220) in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)
**Tier**: high
**Region**: **UK** (untagged — AQA/Edexcel/OCR; recommend `regions: ['UK']` on each track)
**Status**: all three are `playable` — but content is GCSE Foundation level, not A-Level.

## Coverage map (syllabus → questions)

| Syllabus chapter | alevelBio | alevelChem | alevelPhys | Notes |
|---|---|---|---|---|
| 1. Practical Endorsement & Skills | ❌ | ❌ | ❌ | No apparatus, uncertainty, calibration, or graphing items anywhere. |
| 2. Biology — Molecules, Cells, Exchange | ⚠️ stub | – | – | Four questions (osmosis = "water through partially permeable membrane", DNA in nucleus, alveoli for gas exchange) — GCSE-level recall. |
| 3. Biology — Genetics, Energy, Regulation | ❌ | – | – | No Hardy-Weinberg, no respiration ATP yields, no homeostasis. |
| 4. Chemistry — Physical | – | ⚠️ stub | – | Four questions (mole = "6.022 × 10^23 particles", acid = "releases H+", ionic = "transfer of electrons", exothermic = "releases energy"). All definitions, no calculations. |
| 5. Chemistry — Inorganic & Organic | – | ❌ | – | No mechanisms, no spectra, no periodic-trend reasoning. |
| 6. Physics — Mechanics, Materials, Waves, Electricity | – | – | ⚠️ stub | Four questions (v = u + at at "uniform 2 m/s² for 4 s = 8 m/s", P = IV, frequency in Hz, p = mv) — formula recall only. |
| 7. Physics — Particles, Fields, Thermal, Nuclear | – | – | ❌ | No content. |
| 8. Synoptic Revision and Exam Strategy | ❌ | ❌ | ❌ | No content. |

**Effective coverage: ~5–10% per subject, all at GCSE Foundation tier.** Top-up via `highGenerated.ts` `scienceBlueprints()` is generic NGSS-style middle/high-school content — does not approach A-Level mechanism drawing, mole calculation, or quantum particle reasoning.

## Per-file recommendations

| File | A-Level Sci Q's | Bucket | Reason |
|---|---|---|---|
| [`highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) (alevelBio 475–508, alevelChem 509–542, alevelPhys 543–576) | 4 each | **DELETE all 12** | **Under-targeting flagged.** Definition-recall items at GCSE Combined-Science level. None probes mechanism, calculation method, uncertainty, or synoptic reasoning. Same DEFAULT_FLAW concern as the A-Level Maths block. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` topup | up to ~50 each via generic | **DELETE for these tracks** | Generic science blueprints serve middle/high-school NGSS, not A-Level depth. Wrapping them under A-Level titles overpromises. |
| [`apBiologyExamBatch.ts`](../../../src/data/questionCatalog/apBiologyExamBatch.ts), [`apChemistryExamBatch.ts`](../../../src/data/questionCatalog/apChemistryExamBatch.ts), [`apPhysicsExamBatch.ts`](../../../src/data/questionCatalog/apPhysicsExamBatch.ts) | 0 wired here | **MERGE → A-Level (with caveats)** | AP-Bio/Chem/Phys batches sit at roughly A-Level depth and could partially backstop these tracks. Caveat: terminology differs (e.g., AP names "Krebs cycle", A-Level prefers "Krebs cycle / link reaction"; AP uses joules/calories, A-Level uses SI). Worth lifting where syllabus overlap is genuine and tagging with both regions. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | 0 currently | **AUTHOR HERE** | Per `CONTENT_AUDIT.md`, the hand-authored model. Add chapter-aligned items: enzyme inhibition graph reading, Hess cycle calc, projectile with air resistance, capacitor discharge, induction qualitative. |

## Open actions (priority order)

1. **Delete the 12 sub-level stub questions** in `highAdvanced.ts` (alevelBiology, alevelChemistry, alevelPhysics blocks).
2. **Exclude the three A-Level science tracks from `highGenerated.ts` blueprint topup**, or build A-Level-specific blueprints.
3. **Lift A-Level-compatible items from AP exam batches** as an interim bridge; tag with both `regions: ['US','UK']` where compatible.
4. **Author ~25 questions per science** in `highBuilders.ts` aimed at Chapter 2–7 (8 across the three subjects → ~75 questions total).
5. **Add `regions: ['UK']`** to all three track entries.
6. **Consider `status: 'soon'`** until A-Level rigour content is wired.

## Estimated effort

- Stub deletion + blueprint exclusion: ~30 min
- AP-batch lift and re-tag: ~3 hours per subject (~9 hours)
- Hand-authored A-Level bank, ~75 questions: ~24 hours
- Region tags, status review: ~15 min

**~4–5 working days for the three sciences combined.**

## Notes for next auditor

The four-stub-per-track pattern is identical across all eight A-Level tracks. Treat as a single deletion pass. The AP-to-A-Level lift question is non-trivial — UK practical endorsement vocabulary, SI units throughout, and Edexcel/AQA command words must be honoured; an unmodified AP question is not yet an A-Level question.
