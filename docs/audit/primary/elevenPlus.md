# Audit: elevenPlus

**Syllabus**: [`src/data/syllabi/primary/11_plus_exam_prep_uk.md`](../../../src/data/syllabi/primary/11_plus_exam_prep_uk.md)
**Track id**: `elevenPlus`
**Tier**: primary (Exam Prep, Year 6, ages 10-11)
**Status**: `soon` (ageCatalog/primary.ts) — but questions are wired, so should be `playable`
**Region**: **`['UK']`** — explicitly UK-only assessment (GL/CEM/ISEB). **Not tagged.** Region tagging critical.

## Coverage map (syllabus → questions)

Single source: `elevenPlus` export of `primaryGeneratedHumanitiesExam.ts` — 10 Blueprints rendered into 50 questions via the same template factory (`buildTrack(411301, ...)`) used for `philosophyYear1`, NAPLAN, PSLE, etc.

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Diagnostic Strategy and Exam Habits | ❌ | No baseline/pacing/error-log content |
| 2. Vocabulary, Word Relationships, and Verbal Reasoning | ✅ | Synonym, antonym, letter code, logic clue blueprints |
| 3. Codes, Sequences, and Logical Deduction | ✅ partial | Letter code + logic clue; no logic grids, conditional deduction |
| 4. Non-Verbal and Spatial Reasoning | ✅ partial | Shape sequence + rotation; no matrices, nets, cube faces, reflections |
| 5. Number Fluency and Selective Maths Foundations | ✅ partial | Primes, sequence rule; no fractions↔decimals↔percentages |
| 6. Multi-Step Maths, Geometry, and Data | ❌ | No bar models, area/perimeter of compound shapes, averages |
| 7. English Comprehension, Grammar, and Writing Precision | ✅ partial | Part of speech, personification; no comprehension passages, inference |
| 8. Timed Papers, Review Cycles, and Confidence | ❌ | No mock papers, error log practice, pacing strategy |

**Chapter taxonomy mismatch.** Generator uses 4 names ("Verbal Reasoning", "Non-Verbal Reasoning", "Advanced Mathematics", "English Comprehension and Grammar") vs syllabus's 8. Half the syllabus is uncovered.

## Per-file recommendations

| File | elevenPlus Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (elevenPlus export) | 50 (10 blueprints × 5 variant cycles) | **FIX** | Distractor explanations are real (no cartoonish flaws here). The problem is the **shared template factory**: 10 blueprints recycled across 5 fixed variants (Garden / Library / Museum / Beach / Classroom) with cosmetic substitutions. Superficially 50 questions, pedagogically ~10. The same factory powers `philosophyYear1` (5-6 year olds) — confirming the May 2026 content/age mismatch finding. Variant names (Mia, Noor, Ben...) and tone do not mark this as UK-specific or selective-school-pitched. Not region-tagged. |

**Net effect**: 50 cosmetically-varied questions ≈ 10 unique items → target ~40 hand-authored blueprints, no variant cycling, UK-school examples (cricket pitch, village fete, grammar-school comprehension extracts).

## Open actions (priority order)

1. **Add `region: ['UK']` tag** to the `elevenPlus` TrackSeed in `ageCatalog/primary.ts`. The 11+ is a UK selective-school entrance assessment — non-UK learners should not see this as default content.
2. **Flip `status` from `soon` to `playable`** — questions are already wired.
3. **Stop using the shared template factory** for 11+. The Garden/Library/Museum/Beach/Classroom variant rotation comes from a Year-1 narrative-prompt design and is not pitched at 10–11-year-old selective-school candidates.
4. **Author ~40 11+-pitched blueprints** across all 8 chapters, drawing on GL/CEM-style item shapes (cloze, hidden word, compound word, matrices, nets, multi-step reasoning, comprehension extracts). Voice template: `highBuilders.ts` and `universityPrep.ts` calibrate up; `primaryBuilders.ts` calibrates the per-distractor triple shape.
5. **Realign chapter strings** to the syllabus's 8 names.

## Estimated effort

- Add region tag + flip status: ~15 min
- Author 40 new blueprints with 11+ rigour: ~16 hours
- Migrate off shared template factory: ~2 hours

**~3 working days.**

## Notes for next auditor

The shared `buildTrack` factory in `primaryGeneratedHumanitiesExam.ts` powers `wordBuilders`, all 6 `philosophyYear*` tracks, `readingVocab4th/5th/6th`, `naplanYear3/5`, `elevenPlus`, and `pslePrep`. One design covering age-5 phonics, age-7 NAPLAN, and age-11 selective-school prep is pedagogically incoherent. The Garden/Library/Museum/Beach/Classroom variant set is the smoking gun.
