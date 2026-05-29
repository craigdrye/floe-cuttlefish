# Audit: col-7th-grade-reading-and-vocab

**Syllabus**: [`src/data/syllabi/high/7th_grade_reading_and_vocab.md`](../../../src/data/syllabi/high/7th_grade_reading_and_vocab.md)
**Track id**: `col-7th-grade-reading-and-vocab` (high, English, `status: 'playable'`)
**Region**: US (Common Core ELA Grade 7; STAAR-derived items; not tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Independent Reading Habits and Inference | Thin | One generic "Umbrella clue" inference Q from `englishBlueprints()` |
| 2. Theme, Character, and Literary Development | No | Nothing on theme tracking, motif, turning points |
| 3. Point of View, Voice, and Perspective | No | No POV/reliability/voice items |
| 4. Poetry, Form, and Figurative Language | No | No poetry, no form, no figurative-language items |
| 5. Informational Text Structures and Idea Relationships | Thin | One generic "Best support" evidence Q |
| 6. Rhetoric, Argument, and Evidence Quality | Thin | One generic "Tone" sarcasm Q |
| 7. Vocabulary in Context and Word Precision | **No** | The course name promises vocab; nothing on morphology, roots, connotation, allusion |
| 8. Cross-Text Synthesis and Writing About Reading | No | Only STAAR-imported single-passage writing-revision items |

**Severe chapter-taxonomy mismatch.** The Qs that exist use chapters "Writing and Revision" and "Reading and Evidence" (STAAR-derived) or generic blueprint chapters "Inference / Grammar / Tone / Evidence" — none of the 8 syllabus chapter labels appear anywhere in the question bank.

## Per-file recommendations

| File | Qs feeding this track | Bucket | Reason |
|---|---|---|---|
| [`schoolAssessmentReadingSocialImported.ts`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts) → `schoolAssessmentReadingWritingQuestions` | 8 | **FIX** | Hand-imported STAAR items with real per-distractor explanations — the only quality items on this track. But all are Grade 7 *Writing* (revision tasks), zero *reading* or *vocabulary*. Mislabelled as "reading-and-vocab". Source URL points at an index page, not specific items. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) → `englishBlueprints()` (top-up) | ~4 unique | **FIX or DELETE** | The blueprint loop tries to generate 50 Qs but all 4 prompts are `prompt: () => "static"`, so dedupe culls 46. Result: same 4 generic Qs reused across every English/reading/vocab/grammar track in the cluster. No syllabus alignment. |
| [`rawCollectionMappings.ts`](../../../src/data/questionCatalog/rawCollectionMappings.ts) (3 entries pointing here: STAAR generic, STAAR grade-7 RLA, NYSED grade-7) | 0 live | Tracking only | Mappings reference proposed STAAR/NYSED RLA banks for this lane but no question file is wired through. Latent capacity, not live content. |

**Net effect**: ~12 live Qs against an 8-chapter syllabus. Track is effectively a **stub**.

## Open actions (priority order)

1. **Flag as stub** in catalogue UI; the `playable` status overstates depth.
2. **Author chapter-aligned questions** — minimum 4-6 per syllabus chapter (~40 Qs), using the per-distractor voice in [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) / [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts). Priority gaps: Vocabulary-in-Context (Chapter 7), Poetry/Figurative (4), Theme (2).
3. **Wire the STAAR/NYSED Grade 7 RLA banks** flagged in `rawCollectionMappings.ts` — there are real items waiting, just not imported.
4. **Rename chapters** in the 8 STAAR Qs to the syllabus chapter names; most are revision items that belong under Chapter 8 (Writing About Reading).
5. **Add `region: 'US'`** tag.
6. **Stop pumping `englishBlueprints()`** into this track until the blueprints are variant-aware or chapter-aligned.

## Estimated effort

~10 hours: 6h authoring 36 chapter-aligned questions, 2h importing/labelling STAAR Grade 7 RLA passages, 2h relabelling and region-tagging.

## Cross-cluster note

The shared `englishBlueprints()` problem and the `schoolAssessmentReadingWritingQuestions` mis-routing apply identically to the 8th-grade track. See sibling audits.
