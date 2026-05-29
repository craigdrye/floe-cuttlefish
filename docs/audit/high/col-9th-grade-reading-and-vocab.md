# Audit: col-9th-grade-reading-and-vocab

**Syllabus**: [`src/data/syllabi/high/9th_grade_reading_and_vocab.md`](../../../src/data/syllabi/high/9th_grade_reading_and_vocab.md)
**Track id**: `col-9th-grade-reading-and-vocab` (high, English, `status: 'playable'`)
**Region**: US (Common Core ELA Grades 9-10; STAAR English I derived items in latent banks; not tagged)

Header note: syllabus front-matter says "Year 10 (ages 14-15)" but the file is named 9th grade. Investigate — it may be a copy-paste from 10th-grade. The age catalog title is "9th Grade Reading and Vocab".

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. High School Close Reading | Thin | Generic "Umbrella clue" inference Q only |
| 2. Complex Character and Theme | No | Nothing on foils, conflicting motivation, theme refinement |
| 3. Structure, Time, and Author's Craft | No | No pacing, flashback, foreshadowing items |
| 4. Poetry, Drama, and Literary Tradition | No | No poetry items at all |
| 5. Rhetoric and Seminal Nonfiction | Thin | Generic "Tone (sarcasm)" Q only; no anaphora, ethos/pathos/logos, seminal-document analysis |
| 6. Argument Evaluation and Research Reading | Thin | Generic "Best support" evidence Q only |
| 7. Academic Vocabulary and Language in Context | **No** | The "vocab" half of the course name is unrepresented — no morphology, no part-of-speech shift, no euphemism/oxymoron items |
| 8. Writing About Evidence | No | None |

**Chapter taxonomy mismatch.** No question's chapter label matches any of the 8 syllabus chapter names.

## Per-file recommendations

| File | Qs feeding this track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) → `englishBlueprints()` (top-up only) | ~4 unique | **FIX or DELETE** | Same `prompt: () => "static"` bug — dedupe collapses 50 generated slots to 4 identical-across-grades Qs. None match the 9th-grade Common Core 9-10 expectations (e.g. RL.9-10.5 structure, RI.9-10.6 rhetoric). |
| [`rawCollectionMappings.ts`](../../../src/data/questionCatalog/rawCollectionMappings.ts) (3 entries pointing here: STAAR English I, alt-format STAAR English I, generic writing) | 0 live | Tracking only | The proposed STAAR English I bank has not been imported. Closest analogue, `schoolAssessmentReadingWritingQuestions`, is wired to 7th/8th grade and SAT only — **not** to 9th**. |
| [`apEnglishExamBatch.ts`](../../../src/data/questionCatalog/apEnglishExamBatch.ts), [`apEnglishWorkoutGenerated.ts`](../../../src/data/questionCatalog/apEnglishWorkoutGenerated.ts) | 0 to this track | Possible MERGE source | These exist for AP English Literature; some passage/rhetoric items could be downscaled to scaffold Ch 5 (Rhetoric) on 9th. |

**Net effect**: ~4 live Qs. Track is a **near-empty stub** wearing a `playable` label.

## Open actions (priority order)

1. **Demote to `status: 'soon'`** until coverage exists, OR fast-track authoring.
2. **Resolve the syllabus header bug** ("Year 10" vs filename `9th_grade_...`). Likely the file was duplicated from 10th-grade — chapter labels look identical, just slightly expanded.
3. **Author chapter-aligned questions** (~40 Qs at CCSS 9-10 difficulty). Priority gaps: Academic Vocabulary (Ch 7), Poetry/Drama (Ch 4), Rhetoric (Ch 5), Research Reading (Ch 6).
4. **Wire `schoolAssessmentReadingWritingQuestions`** here as well — the English I items it contains are explicitly 9th-grade material currently dumped on 7th/8th.
5. **Import the STAAR English I bank** referenced in `rawCollectionMappings.ts`.
6. **Add `region: 'US'`** tag.

## Estimated effort

~12 hours: 6h authoring 40 chapter-aligned Qs at 9-10 difficulty, 3h migrating STAAR English I items off 7/8 and onto 9, 2h importing additional STAAR English I items, 1h fixing syllabus header and relabelling chapters.

## Cross-cluster note

The "writing-general" mapping in `rawCollectionMappings.ts` sends generic writing collections to *both* 9th and 10th grade — confirms the two are treated as a paired CCSS 9-10 bucket. Audit them as a pair.
