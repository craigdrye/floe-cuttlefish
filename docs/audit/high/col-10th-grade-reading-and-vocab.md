# Audit: col-10th-grade-reading-and-vocab

**Syllabus**: [`src/data/syllabi/high/10th_grade_reading_and_vocab.md`](../../../src/data/syllabi/high/10th_grade_reading_and_vocab.md)
**Track id**: `col-10th-grade-reading-and-vocab` (high, English, `status: 'playable'`)
**Region**: US (Common Core 9-10, STAAR English II latent; not tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Close Reading Habits | Thin | One generic "Umbrella clue" inference Q |
| 2. Literary Analysis and Character | No | No items on motivation, symbolism, source transformation |
| 3. Poetry, Figurative Language, and Sound | No | Zero poetry, paradox, oxymoron, line-break analysis |
| 4. Rhetoric and Argument | Thin | One generic "Best support" Q only — no fallacy taxonomy, no ethos/pathos/logos |
| 5. Informational Text and Historical Documents | No | None — no seminal-document analysis |
| 6. Vocabulary, Roots, and Nuance | **No** | "Vocab" half of the title is empty — no Greek/Latin roots, no morphology, no synonym precision |
| 7. Synthesis Across Sources and Media | No | No graph/visual/synthesis items |
| 8. Reading Studio and Exam Readiness | No | No timed-passage practice |

**Chapter taxonomy mismatch.** No question in the live bank uses any of the 8 syllabus chapter names.

## Per-file recommendations

| File | Qs feeding this track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) → `englishBlueprints()` (top-up only) | ~4 unique | **FIX or DELETE** | Same `prompt: () => "static"` bug — collapses 50 generated slots to 4 generic items shared identically with the 7th, 8th, 9th, and grammar tracks. None reach CCSS RL.9-10 / RI.9-10 expectations. |
| [`rawCollectionMappings.ts`](../../../src/data/questionCatalog/rawCollectionMappings.ts) (2 entries: STAAR English II + generic writing) | 0 live | Tracking only | A STAAR English II bank is mapped but not imported. The `schoolAssessmentReadingWritingQuestions` file contains items from STAAR English II (e.g. forest-bathing Q) that should land here but are wired to 7th/8th instead. |
| [`apEnglishWorkoutGenerated.ts`](../../../src/data/questionCatalog/apEnglishWorkoutGenerated.ts), [`apEnglishExamBatch.ts`](../../../src/data/questionCatalog/apEnglishExamBatch.ts) | 0 here | Possible MERGE | AP English Lit items could feed the rhetoric and poetry chapters as a stretch tier. |

**Net effect**: ~4 live Qs. Track is a **near-empty stub** that ships as `playable`.

## Open actions (priority order)

1. **Demote to `status: 'soon'`** OR ship the authoring sprint described below.
2. **Author chapter-aligned questions** (~40 Qs at CCSS 9-10 advanced difficulty). Priority gaps: Vocabulary/Roots (Ch 6), Poetry/Figurative (Ch 3), Seminal Documents (Ch 5), Synthesis Across Media (Ch 7).
3. **Move STAAR English II items** (e.g. the forest-bathing evidence Q) out of `schoolAssessmentReadingWritingQuestions` and onto this track. Currently they are mis-shelved on 7th and 8th.
4. **Import the latent STAAR English II bank** referenced in `rawCollectionMappings.ts`.
5. **Add 4-6 SAT-style timed-passage items for Chapter 8** (Exam Readiness) — these can lift cleanly from `col-sat-reading-and-writing` content.
6. **Add `region: 'US'`** tag.

## Estimated effort

~12 hours: 6h authoring 40 chapter-aligned Qs, 3h migrating STAAR English II items, 2h importing additional STAAR English II passages, 1h labelling and region-tagging.

## Cross-cluster patterns

- The four reading-and-vocab tracks (7th, 8th, 9th, 10th) currently surface near-identical content to students because all four are dominated by the same 4 deduped `englishBlueprints()` items.
- The "vocab" promise in every track name is uniformly unmet — there is no morphology, root, affix, or connotation content in any reading track in the cluster. Authoring one shared morphology bank (50-80 Qs, banded by difficulty across grades) would close this gap across all four tracks at once.
