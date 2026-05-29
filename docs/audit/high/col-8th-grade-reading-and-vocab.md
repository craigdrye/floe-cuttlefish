# Audit: col-8th-grade-reading-and-vocab

**Syllabus**: [`src/data/syllabi/high/8th_grade_reading_and_vocab.md`](../../../src/data/syllabi/high/8th_grade_reading_and_vocab.md)
**Track id**: `col-8th-grade-reading-and-vocab` (high, English, `status: 'playable'`)
**Region**: US (Common Core ELA Grade 8; STAAR-derived items; not tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Close Reading and Strong Inference | Thin | Generic "Umbrella clue" inference Q only |
| 2. Character, Conflict, and Point of View | No | Nothing on motivation, reliability, dramatic irony |
| 3. Theme, Structure, and Literary Patterns | No | No theme tracking, no archetype, no allusion |
| 4. Words, Tone, and Morphology | Thin | Generic "sarcasm tone" item only; no roots, affixes, denotation/connotation pairs |
| 5. Nonfiction Structure and Central Ideas | No | Zero items on paragraph anatomy or cause/effect |
| 6. Argument, Evidence, and Rhetoric | Thin | Generic "Best support" Q; no counterclaim, no ethos/pathos/logos |
| 7. Comparing Texts and Media | No | No cross-text or adaptation items |
| 8. Discussion and Evidence-Based Response | No | None |

**Chapter taxonomy mismatch.** Question banks expose chapters "Writing and Revision" / "Reading and Evidence" (STAAR import) or blueprint chapters "Inference / Grammar / Tone / Evidence" — none match the syllabus's 8 chapter labels.

## Per-file recommendations

| File | Qs feeding this track | Bucket | Reason |
|---|---|---|---|
| [`schoolAssessmentReadingSocialImported.ts`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts) → `schoolAssessmentReadingWritingQuestions` | 8 (same set as 7th grade) | **FIX → split** | The exact same 8 STAAR Writing items are wired to both 7th and 8th grade. STAAR items are actually Grade 7 Writing, English I, and English II — none is canonically Grade 8. Per-distractor explanations are decent. Needs to be split by source grade and the 8th-grade lane needs its own bank. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) → `englishBlueprints()` (top-up) | ~4 unique | **FIX or DELETE** | Same `prompt: () => static` issue as 7th grade — only 4 unique Qs survive the dedupe. Same generic items appear on this track too, so the 7th and 8th tracks are nearly identical to a student. |
| [`rawCollectionMappings.ts`](../../../src/data/questionCatalog/rawCollectionMappings.ts) (3 entries pointing here: STAAR generic, STAAR grade-8 RLA, NYSED grade-8) | 0 live | Tracking only | Latent banks, not imported. |

**Net effect**: ~12 live Qs, of which 4 are identical to the 7th-grade track's blueprint output. Track is effectively a **duplicate stub** of 7th-grade.

## Open actions (priority order)

1. **Differentiate from 7th-grade track.** Today the two share 100% of `englishBlueprints()` output and the same STAAR file — students experience them as the same course. Either split the source bank or author distinct content.
2. **Author chapter-aligned questions** (~40 Qs) at Grade 8 difficulty. Priority gaps: Morphology (Ch 4 — Greek/Latin roots, Tier 2 academic vocab), Nonfiction Structure (Ch 5), Theme/Archetype/Allusion (Ch 3), Cross-Text Comparison (Ch 7).
3. **Wire the STAAR/NYSED Grade 8 RLA banks** flagged in `rawCollectionMappings.ts`.
4. **Move STAAR English I / English II items** off this track to the 9th/10th lanes where they belong (English I = 9th, English II = 10th).
5. **Add `region: 'US'`** tag.
6. **Fix `englishBlueprints()`** — make `prompt(variant)` actually vary, or replace with simpleBlueprints that don't deduplicate down to 4.

## Estimated effort

~10 hours: same shape as 7th grade. Authoring should be coordinated with the 7th-grade audit so the two tracks have meaningfully different difficulty progressions.

## Cross-cluster note

7th and 8th grade Reading and Vocab tracks are functionally identical at present. The blueprint-dedupe bug means English/reading/vocab/grammar tracks across the cluster all share the same 4 generated items. Fix at the blueprint level cascades to 7-10 grade and grammar.
