# Audit: naplanYear5

**Syllabus**: [`src/data/syllabi/primary/naplan_year_5.md`](../../../src/data/syllabi/primary/naplan_year_5.md)
**Track id**: `naplanYear5`
**Tier**: primary (Exam Prep, taken in Year 5, ages 10-11)
**Status**: `soon` (ageCatalog/primary.ts) — questions are wired, should be `playable`
**Region**: **`['AU']`** — Australian national assessment. **Not tagged.** Region tagging critical.

## Coverage map (syllabus → questions)

Single source: `naplanYear5` export of `primaryGeneratedHumanitiesExam.ts` — 10 Blueprints × 5 variant cycles = 50 questions via shared template factory.

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Reading Across Text Types | ✅ partial | "Author purpose" blueprint only |
| 2. Inference, Author Choices, and Vocabulary | ✅ partial | "Metaphor effect" blueprint |
| 3. Visual, Digital, and Data-Rich Texts | ✅ partial | "Visual text" map-key blueprint |
| 4. Narrative Writing With Control | ❌ | No narrative arc, paragraphing, dialogue content |
| 5. Persuasive Writing With Evidence | ✅ partial | "Transition" blueprint touches structure |
| 6. Language Conventions and Editing | ✅ partial | "Precise vocabulary", "Suffix spelling", "Subject verb agreement" |
| 7. Number, Fractions, Decimals, and Money | ✅ partial | "Decimal money" only (USD framing — see below); no fractions, decimals, multi-step |
| 8. Measurement, Space, Statistics, and Probability | ✅ partial | "Area", "Probability" blueprints; no 3D nets, time/duration, dot plots |

**Chapter taxonomy mismatch.** Generator uses 4 names ("Reading", "Writing", "Language Conventions", "Numeracy") vs syllabus's 8.

**Currency contradiction**: the only money blueprint uses `$2.35` and `$4.20` — dollar sign is shared between AU and US, but the chapter is positioned as Year-5 NAPLAN where AUD context (cents, gold-coin language) would help learners. Acceptable but worth tightening.

## Per-file recommendations

| File | naplanYear5 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) (naplanYear5 export) | 50 (10 blueprints × 5 variant cycles) | **FIX** | Same shared template factory as `philosophyYear1`, `elevenPlus`, `pslePrep`. Per-distractor explanations are real, but: (a) only 10 unique blueprints inflated 5× via Garden/Library/Museum/Beach/Classroom variants; (b) no Australian English markers; (c) not region-tagged; (d) NAPLAN online item types absent; (e) Chapter 4 (narrative writing) wholly uncovered despite being a major NAPLAN section. |

**Net effect**: 50 cosmetic variations ≈ 10 unique items. Target ~40 hand-authored AU-pitched blueprints across all 8 chapters.

## Open actions (priority order)

1. **Add `region: ['AU']` tag** to the `naplanYear5` TrackSeed in `ageCatalog/primary.ts`.
2. **Flip `status` from `soon` to `playable`** — questions are already wired.
3. **Stop using the shared template factory** — the Garden/Library/Museum/Beach/Classroom variants are designed for Year-1 narrative prompts, not for Year-5 NAPLAN persuasive/visual-text reasoning.
4. **Author content for Chapter 4 (Narrative Writing)** — currently zero coverage despite being a major NAPLAN section. Include planning, paragraphing, dialogue, cohesion blueprints.
5. **Author content for Chapter 5 expansion** (persuasive writing with evidence — currently only a transition word blueprint).
6. **Confirm AUD framing** in money blueprint or note that the question is currency-neutral.
7. **Author 30 additional blueprints** across all 8 chapters, using Australian Curriculum vocabulary and NAPLAN online item shapes.
8. **Realign chapter strings** to the syllabus's 8 names.

## Estimated effort

- Add region tag + flip status: ~15 min
- Author 30 new AU-framed blueprints: ~12 hours
- Migrate off shared template factory: ~2 hours

**~2 working days.**

## Notes for next auditor

Identical structural pattern to `naplanYear3`, `elevenPlus`, `pslePrep`. Fix the shared template factory once and the four exam-prep tracks all benefit. A subtle issue across this cluster: the 10-blueprint × 5-variant inflation produces a question count that looks healthy in stats but offers little real practice variety — students see the same blueprint with Mia/Noor/Ava/Leo/Kim swapped in.
