# Audit: readingVocab4th

**Syllabus**: [`src/data/syllabi/primary/4th_grade_reading_and_vocab.md`](../../../src/data/syllabi/primary/4th_grade_reading_and_vocab.md)
**Track id**: `readingVocab4th` (also mirrored as `col-4th-grade-reading-and-vocab`)
**Tier**: primary
**Region**: US-default (Common Core ELA Grade 4); syllabus also cites UK KS2 but content is US-centred and untagged

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Reading Identity, Fluency, and Stamina | ❌ | No questions on fluency, rate, expression, rereading, or stamina log work. |
| 2. Morphology and Word Learning | ✅ partial | One root question (`photo`), one simile, one idiom — repeated five times via variants. |
| 3. Fiction Comprehension and Character Thinking | ✅ partial | Two literature blueprints (character evidence, theme from details) cycled. |
| 4. Nonfiction Main Ideas and Summaries | ✅ partial | Single main-idea blueprint cycled. |
| 5. Text Structure and Thinking Across Paragraphs | ✅ thin | One problem/solution prompt; no chronology, compare/contrast, or signal-word work. |
| 6. Theme, Figurative Language, and Author Choices | ✅ thin | Simile and idiom covered; metaphor, personification, adage, proverb, mood absent. |
| 7. Evidence, Discussion, and Writing About Reading | ❌ | No claim/evidence/explanation prompts; no constructed-response shape. |
| 8. Reading Across Texts and Building Knowledge | ❌ | No cross-text comparison, firsthand/secondhand, fact vs. opinion. |

Track surface shows 50+ questions but they are 10 blueprints × 5 variant cycles (Garden / Library / Museum / Beach / Classroom). True content distinct count is ~10.

## Per-file recommendations

| File | 4th Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) → `grade4ReadingBlueprints` | 10 × 5 = 50 surface | **FIX** | Per-distractor explanations are decent (no `DEFAULT_FLAW` here), but the blueprint pool is too shallow and variant-cycling produces near-duplicates. Triple to ~30 and cover Chapters 1, 7, 8. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) → `readingVocab4th` | 10 | **DELETE** | Classic **DEFAULT_FLAW pattern**: every wrong answer reads "This word does not fit the vocabulary relationship being tested." Includes adult-prose comma items well above 4th-grade band. Source-attribution lesson text is not a teaching line. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (wiring) | — | **FIX** | Wires both `readingVocab4th` and `col-4th-grade-reading-and-vocab` to the same blueprints — duplicate surface in two tracks; rationalise to one canonical id. |

## Open actions (priority order)

1. **DELETE the OpenTriviaQA `readingVocab4th` block** — `DEFAULT_FLAW` on every distractor and grade-inappropriate prose.
2. **Expand `grade4ReadingBlueprints` from 10 to ~30**, adding Chapter 1 fluency-reflection items, Chapter 7 evidence/explanation prompts, and Chapter 8 cross-text comparison items.
3. **Reduce the variant cycle from 5 to 2** so the bank doesn't pad with cosmetic re-skins. Voice template: `primaryBuilders.ts` (the `[answer, whyWrong, nudge]` triple).
4. **Add `region: 'US'` tag** to the track in `ageCatalog/primary.ts` (or split a UK KS2 variant — syllabus already cites both frameworks).
5. **Collapse `readingVocab4th` / `col-4th-grade-reading-and-vocab` duplication** — one canonical id, alias the other.
6. **Flag**: `englishDictionary.ts` (~3,849 words, "not exhaustive") may not contain 4th-grade Tier 2 vocab (`famished`, etc.); verify before any spelling-check dependency lands here.

## Estimated effort

- Delete OpenTrivia block + rewire: ~30 min
- Author 20 new blueprints across Chapters 1, 5, 7, 8: ~7 hours (20 × 20 min)
- Variant-cycle reduction + duplicate id collapse: ~1 hour

**~1 working day.** Cluster siblings (5th, 6th) share the exact same shape and should be batched.
