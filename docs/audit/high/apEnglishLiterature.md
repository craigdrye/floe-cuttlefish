# Audit: apEnglishLiterature

**Syllabus**: [`src/data/syllabi/high/ap_english_literature.md`](../../../src/data/syllabi/high/ap_english_literature.md)
**Track id**: `apEnglish` (catalog also exposes `col-ap-english-literature` as a separate playable track)
**Tier**: high
**Region**: US (College Board exam; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Close Reading and Literary Argument | partial | "Close Reading" chapter exists in WorkoutGenerated — diction/syntax/connotation defined, never demonstrated on a passage. |
| 2. Short Fiction I (character, POV, narrator) | partial | Generic "Narrative" entries (foreshadowing, flashback, unreliable narrator) — definition-level only. |
| 3. Poetry I (meter, sound, form, shift) | partial | Iamb / sonnet / volta defined; no scansion or stanza-reading. |
| 4. Longer Fiction or Drama I (motif, scene) | minimal | A soliloquy/aside pair; nothing on motif development. |
| 5. Short Fiction and Poetry II (complexity, irony) | partial | Dramatic / situational irony defined twice in both files. |
| 6. Longer Fiction or Drama II (whole-work structure) | none | Genre labels only (tragedy = "serious conflict") — no whole-work analysis. |
| 7. AP Essay Studio (thesis, evidence, sophistication) | yes (rubric only) | Exhaustive coverage — and almost all of `apEnglishExamBatch` lives here. |
| 8. Independent Reading and Exam Readiness | partial | "Prompt focus" and "Complexity" Q's in WorkoutGenerated. |

**May 2026 rubric-not-content finding applies.** `apEnglishExamBatch.ts` is **100% rubric**: every prompt asks "what does a thesis do", "what does commentary do", "what is the rhetorical situation". There is no stimulus-based MCQ (no passage, no line, no excerpt). College Board MCQ has been stimulus-grounded since 2019.

**Chapter taxonomy mismatch.** File chapters ("Argument", "Commentary", "Rhetoric", "Style", "Sound Devices", "Poetry Form") do not match any of the eight syllabus chapters.

## Per-file recommendations

| File | AP English Q's | Bucket | Reason |
|---|---|---|---|
| [`apEnglishExamBatch.ts`](../../../src/data/questionCatalog/apEnglishExamBatch.ts) | 10 | **DELETE** | 100% AP rubric questions ("which thesis is strongest", "what should commentary do"). No passages, no texts. Duplicates concepts already covered in the WorkoutGenerated file. The "Exam Batch" name implies stimulus practice — the file delivers definitional rubric. |
| [`apEnglishWorkoutGenerated.ts`](../../../src/data/questionCatalog/apEnglishWorkoutGenerated.ts) | 50 | **FIX** | A serviceable literary-terms glossary (diction, syntax, sonnet, volta, iamb, foil, vanitas-style genre). Distractors are plausible. Real flaw: never quotes a single line of poetry or prose. Replace ~15 generic prompts with stimulus-based items (give a 2-line excerpt; ask which device is at work). Keep the rest. Add `region: 'US'`. Align chapter names to the 8-chapter syllabus spine. |
| [`apEnglish` block in `highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) (lines 273-318) | 4 inline + many openTrivia | **FIX** | The 4 inline questions are the same rubric-only style (theme = "central idea"; metaphor = "compares without like/as") — duplicate of WorkoutGenerated. The openTrivia literature imports beneath (`openTriviaLiterature*`, `openTriviaLiteraryFormsShakespeare`, `openTriviaLiteratureCanonicalOpenings`, etc.) are recall trivia ("Who wrote X?", "Which Shakespeare play opens with Y?"). Useful for Chapter 4/6 recallable evidence but currently dropped in as a wall of trivia with no chapter tagging — and several use the stripped "This answer belongs to a different…" fixed explanation. Re-chapter them to syllabus chapters; cull duplicates with WorkoutGenerated. |
| `openTriviaLiteraturePoetsAuthors`, `openTriviaLiteratureShakespeareModernist`, `…PoetryIdentity`, `…FinalIdentity` | ~100+ | **FIX → MERGE** | Author/work identification fits Chapter 8 "Independent Reading" but each currently uses a single fixed distractor explanation. Rewrite per-distractor whys (each wrong author had different period/style) or DELETE the lowest-grade rows. |

**Net effect**: 60 rubric questions → ~35 content + rubric questions, plus selectively rewritten trivia. The literary-terms drill survives; the AP Essay Studio rubric drill collapses into 5 quality items instead of 14 redundant ones.

## Open actions (priority order)

1. **Author ~20 stimulus MCQs**: 2-6 lines of public-domain text, single best-supported interpretation. Voice template: [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts). Cover Chapters 2, 3, 4, 6.
2. **Delete `apEnglishExamBatch.ts`** outright; keep the strongest 2-3 thesis/commentary items merged into WorkoutGenerated Chapter 7.
3. **Re-chapter** all surviving entries to syllabus chapters 1-8.
4. **Rewrite per-distractor explanations** on the openTriviaLiterature* family (fixed string is a DEFAULT_FLAW pattern even though no constant is declared).
5. **Disambiguate / dedupe `apEnglish` vs `col-ap-english-literature`** — both are `playable` AP English tracks. Pick one canonical id and redirect the other or merge.
6. **Add `region: 'US'` tag** to both AP English entries in `high.ts`.

## Estimated effort

- Stimulus MCQ authoring: ~6 hours (20 items × ~18 min).
- Delete + dedupe + re-chapter: ~2 hours.
- openTrivia rewrites: ~3 hours (or DELETE for ~30 min).
- Dedupe `apEnglish` / `col-ap-english-literature`: ~1 hour.

**~1.5 working days.**

## Notes for next auditor

`apEnglishExamBatch.ts` shares a structural pattern with `apHistoryExamBatch.ts`, `apHumanGeographyExamBatch.ts`, and `apPsychologyExamBatch.ts` (all 75 lines, identical `q`/`miss` factories, identical 10-question size). The "ExamBatch" naming convention across the AP humanities suite is misleading — these are rubric drills, not stimulus MCQs. Worth a coordinated rename or pruning pass.
