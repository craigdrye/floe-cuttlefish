# Audit: pslePrep

**Syllabus**: [`src/data/syllabi/primary/psle_prep_singapore.md`](../../../src/data/syllabi/primary/psle_prep_singapore.md)
**Track id**: `pslePrep`
**Tier**: primary (Exam Prep, Primary 6, ages 11-12)
**Status**: `soon` (ageCatalog/primary.ts) — questions are wired, should be `playable`
**Region**: **`['SG']`** — Singapore PSLE. **Not tagged.** Region tagging critical.

## Coverage map (syllabus → questions)

Single source: `pslePrep` export of `primaryGeneratedHumanitiesExam.ts` — 10 Blueprints × 5 variant cycles = 50 questions via shared template factory.

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. PSLE Readiness, Routines, and Self-Knowledge | ❌ | No baseline/pacing/AL framework/correction content |
| 2. English Grammar, Vocabulary, and Language Use | ✅ partial | "Vocabulary cloze" blueprint only |
| 3. English Comprehension, Visual Text, and Response Quality | ✅ partial | "Visual text" (free-entry flyer) blueprint |
| 4. Maths Models, Fractions, Ratios, and Percentages | ✅ partial | "Bar model ratio" (3:5 sticker problem); no fractions, percentages, before-and-after |
| 5. Maths Heuristics, Patterns, Geometry, and Data | ✅ | "Assumption method" (chickens/cows), "Working backwards", "Pattern nth term" |
| 6. Science Concepts Across Themes | ✅ partial | "Energy conversion" (torch) blueprint |
| 7. Science Process Skills and Open-Ended Explanations | ✅ partial | "Variables", "Control variable" blueprints |
| 8. Integrated Timed Practice and Exam Confidence | ❌ | No mixed-section timed practice, pacing reflection, error-log content |
| (additional) English: Sentence synthesis | ✅ | Synthesis blueprint included |

**Chapter taxonomy mismatch.** Generator uses 3 names vs syllabus's 8. PSLE blueprints have more domain-specific framing (bar model, Singapore heuristics vocabulary) than NAPLAN/11+ blueprints, but still suffer 5-variant cosmetic inflation.

## Per-file recommendations

| File | pslePrep Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (pslePrep export) | 50 (10 blueprints × 5 variant cycles) | **FIX** | Same shared template factory as `philosophyYear1` (5-6 year olds), `naplanYear3/5`, `elevenPlus`. Math blueprints (bar model, assumption method, working backwards, pattern nth term) are genuinely PSLE-flavoured with real per-distractor explanations. But: (a) variant cycling adds Garden/Library/Museum context to a Singapore-style stickers problem — incoherent; (b) chapters 1 and 8 wholly uncovered; (c) only 1 English vocabulary cloze blueprint vs PSLE Paper 2 having 10+ cloze items; (d) not region-tagged; (e) Mother Tongue intentionally absent from syllabus, fine. |

**Net effect**: 50 cosmetic variations ≈ 10 unique items, plus genuine PSLE math flavour worth preserving. Target ~40 hand-authored SG-pitched blueprints across all 8 chapters.

## Open actions (priority order)

1. **Add `region: ['SG']` tag** to the `pslePrep` TrackSeed in `ageCatalog/primary.ts`.
2. **Flip `status` from `soon` to `playable`** — questions are already wired.
3. **Stop using the shared template factory** for the math blueprints — the Garden/Library/Museum/Beach/Classroom variant set is for primary narrative prompts, not Singapore bar-model problems. Math blueprints should keep stable Singaporean names and contexts (hawker centre, MRT, void deck) and use number-substitution rather than narrative-substitution for variant generation.
4. **Author English Paper 2-style content** for Chapters 2 and 3 — grammar cloze, vocabulary cloze, comprehension cloze, synthesis, visual text. Currently only 1 cloze + 1 visual text blueprint.
5. **Author content for Chapters 1 and 8** (readiness, integrated practice).
6. **Author 5 additional Science blueprints** across the five themes (diversity, cycles, systems, energy, interactions).
7. **Realign chapter strings** to the syllabus's 8 names.

## Estimated effort

- Add region tag + flip status: ~15 min
- Author 30 new SG-framed blueprints: ~14 hours (PSLE rigour is highest in this cluster)
- Migrate math blueprints off the narrative-variant factory: ~2 hours

**~2.5 working days.**

## Notes for next auditor

Of the four exam-prep tracks, PSLE has the strongest existing content — heuristics blueprints are recognisably Singaporean. Fix here is region tagging, dropping the narrative-variant factory, and expanding English/Science coverage. Worth fixing PSLE first as the model for the other three exam-prep tracks.
