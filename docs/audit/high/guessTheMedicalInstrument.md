# Audit: guessTheMedicalInstrument

**Syllabus**: [`src/data/syllabi/high/guess_the_medical_instrument.md`](../../../src/data/syllabi/high/guess_the_medical_instrument.md)
**Track id**: `guessTheMedicalInstrument`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1048
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Listening & vital signs (stethoscope, BP cuff, pulse ox) | ✅ | All three present |
| Ear & eye exams (otoscope, ophthalmoscope) | ✅ | Both present |
| Neurological & airway (reflex hammer, laryngoscope) | ✅ | Both present |
| Fluid handling (syringe) | ✅ | Syringe present |

Perfect 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheMedicalInstrument (L509–518) | 8 | **FIX** | Stems are appropriately clinical-but-not-diagnostic, lesson lines match the syllabus's "vocabulary, not diagnosis" stance. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Strong opportunities for distractor rigor: stethoscope vs Doppler probe, sphygmomanometer vs aneroid gauge, otoscope vs ophthalmoscope (different optics for different cavities). |

## Media wiring

Two SVG clue cards via `media()` mixing `lab` (flask icon) and `part` shapes — visually misleading for a stethoscope or syringe. **No real instrument photos.** Higher-priority real-media swap than most cluster tracks because the icons don't even cue the right object category.

## Open actions

1. Per-distractor rewrite (~30 min).
2. **High priority:** swap to real medical-instrument photos — current icons (flasks) are off-category.
3. Preserve syllabus stance: literacy, no diagnostic role-play.

## Effort

~1 hour rewrite + media work.
