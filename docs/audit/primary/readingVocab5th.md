# Audit: readingVocab5th

**Syllabus**: [`src/data/syllabi/primary/5th_grade_reading_and_vocab.md`](../../../src/data/syllabi/primary/5th_grade_reading_and_vocab.md)
**Track id**: `readingVocab5th` (also mirrored as `col-5th-grade-reading-and-vocab`)
**Tier**: primary
**Region**: US-default (Common Core ELA Grade 5); UK KS2 cited in syllabus but content is US-centred and untagged

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Independent Reading Habits and Evidence Routines | ❌ | No annotation, quote-sandwich, or weekly-goal items. |
| 2. Academic Vocabulary, Morphology, and Nuance | ✅ partial | Contrast clue (`arduous`), Greek root (`photo`), homograph (`duck`) — three items, cycled. |
| 3. Inference, Character Change, and Theme | ✅ thin | Quote-evidence and response-to-challenge items. |
| 4. Literary Structure and Author Craft | ❌ | No chapter/scene/stanza analysis, no point-of-view shaping, no mood discussion. |
| 5. Informational Text Structure and Main Ideas | ✅ thin | Two-main-ideas blueprint cycled. |
| 6. Argument, Reasons, and Evidence | ✅ minimal | One "evidence for a point" prompt — single touchpoint on a whole syllabus chapter on argument. |
| 7. Research Reading and Source Synthesis | ❌ | No research-question / keyword / paraphrase / synthesis items. |
| 8. Discussion, Debate, and Writing About Reading | ❌ | No discussion-stem, claim-evidence-explanation, or revision prompts. |

Track surface shows ~51 questions: 10 unique blueprints × 5 variant cycles + 1 OpenTrivia item.

## Per-file recommendations

| File | 5th Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) → `grade5ReadingBlueprints` | 10 unique × 5 cycles = 50 surface | **FIX** | Per-distractor explanations are reasonable and on-grade (correlative conjunctions, present perfect, introductory comma). No `DEFAULT_FLAW` in this block. But the bank is structurally identical to 4th and 6th (10 blueprints, three Reading-Literature, three Vocabulary, three Language-Conventions) — Chapters 1, 4, 7, 8 of the syllabus are not addressed at all. Expand bank to ~30 blueprints and rebalance toward research and discussion. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) → `readingVocab5th` | 1 | **DELETE** | Single item ("What is the participle…?") with the **DEFAULT_FLAW pattern**: every wrong answer reads "This word does not fit the vocabulary relationship being tested." Net negative; not worth keeping for one question. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (wiring) | — | **FIX** | Same dual-id duplication as `readingVocab4th` — both `readingVocab5th` and `col-5th-grade-reading-and-vocab` resolve to the same blueprint bank. |

## Open actions (priority order)

1. **DELETE the single OpenTriviaQA `readingVocab5th` item** — `DEFAULT_FLAW` and not worth maintaining for one question.
2. **Author Chapter 7 (research) and Chapter 8 (discussion/writing) blueprints** — these are the syllabus's signature 5th-grade moves and currently have zero coverage. Aim for 6 research-reading items (research question quality, paraphrase vs. quote, source synthesis) and 4 discussion/CEE items.
3. **Author Chapter 1 (evidence routines) and Chapter 4 (literary structure / point of view) blueprints** — 4 each.
4. **Reduce variant cycle from 5 to 2** so surface count reflects unique content.
5. **Add `region: 'US'` tag** to the track entry.
6. **Flag**: The current `arduous` / `audible` / `auditory` vocabulary depends on `englishDictionary.ts` not blocking on these higher-band Tier 2 words. With the dictionary listed as "not exhaustive" (~3,849 words), confirm coverage before any spelling-check or word-game UX hooks here.

## Estimated effort

- Delete OpenTrivia singleton + rewire: ~15 min
- Author 14 new blueprints across Chapters 1, 4, 7, 8: ~5 hours
- Variant-cycle reduction + duplicate id collapse: ~1 hour

**~3/4 of a working day.** Best done in a single sitting with 4th and 6th grade audits — the shape is identical and the fixes pattern-match.
