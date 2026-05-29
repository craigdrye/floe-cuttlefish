# Audit: naplanYear3

**Syllabus**: [`src/data/syllabi/primary/naplan_year_3.md`](../../../src/data/syllabi/primary/naplan_year_3.md)
**Track id**: `naplanYear3`
**Tier**: primary (Exam Prep, taken in Year 3, ages 8-9)
**Status**: `soon` (ageCatalog/primary.ts) — questions are wired, should be `playable`
**Region**: **`['AU']`** — Australian national assessment. **Not tagged.** Region tagging critical.

## Coverage map (syllabus → questions)

Single source: `naplanYear3` export of `primaryGeneratedHumanitiesExam.ts` — 10 Blueprints × 5 variant cycles = 50 questions via shared template factory.

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Reading for Literal Meaning | ✅ partial | "Literal detail" blueprint |
| 2. Reading for Inference and Vocabulary | ✅ partial | "Inference" blueprint; no vocabulary-in-context |
| 3. Text Features and Visual Information | ✅ partial | "Text feature" caption blueprint |
| 4. Planning and Writing Short Narratives | ✅ partial | "Narrative order" blueprint only |
| 5. Giving Opinions and Reasons | ✅ partial | "Persuasive reason" blueprint only |
| 6. Spelling, Grammar, and Punctuation Checks | ✅ | Homophone, parts of speech, contraction apostrophe |
| 7. Number, Operations, and Fractions | ✅ partial | Place value only; no operations, fractions, equal groups |
| 8. Measurement, Geometry, Data, and Mixed Problems | ✅ partial | Data reading; no measurement, geometry, time, symmetry |

**Chapter taxonomy mismatch.** Generator uses 4 names ("Reading", "Writing", "Language Conventions", "Numeracy") vs syllabus's 8. Each chapter has only 1–3 blueprints, so coverage is shallow even where present.

## Per-file recommendations

| File | naplanYear3 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (naplanYear3 export) | 50 (10 blueprints × 5 variant cycles) | **FIX** | Same shared template factory as `philosophyYear1` (5-6 year olds) and `elevenPlus` (10-11 year olds, UK selective). Content is sober and per-distractor explanations are real (no cartoonish distractors), but: (a) only 10 unique blueprints inflated to 50 via Garden/Library/Museum/Beach/Classroom variant substitution; (b) no Australian framing (no Australian Curriculum codes, no Australian English spelling cues — note `"colors"` appears in shared blueprint context; the suffix-spelling blueprint sits in naplanYear5 only); (c) not region-tagged; (d) NAPLAN-specific item types (digital interface practice, drag-and-drop, multi-select) absent; (e) writing chapter has no Year-3 NAPLAN narrative or persuasive sample-prompt grading rubric content. |

**Net effect**: 50 cosmetic variations ≈ 10 unique items, not framed as AU. Target ~40 hand-authored AU-pitched blueprints across all 8 chapters.

## Open actions (priority order)

1. **Add `region: ['AU']` tag** to the `naplanYear3` TrackSeed in `ageCatalog/primary.ts`.
2. **Flip `status` from `soon` to `playable`** — questions are already wired.
3. **Stop using the shared template factory** that mixes age-5 philosophy with age-9 NAPLAN.
4. **Author ~30 new blueprints** with Australian English spelling, Australian Curriculum vocabulary, and Year-3 NAPLAN item shapes (matching, multi-select, drag-order, short-text-and-question pairing). Voice template: `primaryBuilders.ts`.
5. **Add a writing rubric reference** in lesson copy so students see what NAPLAN markers actually weight (text structure, ideas, vocabulary, cohesion, paragraphing, sentence structure, punctuation, spelling).
6. **Realign chapter strings** to the syllabus's 8 names.

## Estimated effort

- Add region tag + flip status: ~15 min
- Author 30 new AU-framed blueprints: ~12 hours
- Migrate off shared template factory: ~2 hours

**~2 working days.**

## Notes for next auditor

Shares all structural issues with `naplanYear5`, `elevenPlus`, `pslePrep` — same shared `buildTrack` factory, same 10-blueprint × 5-variant inflation, same lack of region tagging, same content/age mismatch with the Year-1 philosophy track using the identical factory. The four exam-prep tracks should be audited as one cluster and fixed together.
