# Audit: readingVocab6th

**Syllabus**: [`src/data/syllabi/primary/6th_grade_reading_and_vocab.md`](../../../src/data/syllabi/primary/6th_grade_reading_and_vocab.md)
**Track id**: `readingVocab6th` (also mirrored as `col-6th-grade-reading-and-vocab`)
**Tier**: primary
**Region**: US-default (Common Core ELA Grade 6); UK KS2/KS3 cited in syllabus but content is US-centred and untagged

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Reading Stamina, Fluency, and Evidence | ❌ | No fluency, prosody, annotation, gist, or objective-summary entry-point items. |
| 2. Morphology and Academic Vocabulary | ✅ partial | Connotation (`thrifty`/`stingy`) and Latin root (`aud`) — two items, cycled. Adequate but thin for a whole chapter. |
| 3. Literature, Plot, and Character Change | ✅ thin | Character-arc blueprint plus word-choice/tone — two items. No plot-episode tracking, no setting/conflict reasoning. |
| 4. Poetry, Figurative Language, and Word Choice | ❌ | No poem analysis, line/stanza, imagery, repetition, or rhythm items. **Conspicuous gap** for a Year-6 ELA course. |
| 5. Informational Text Structures and Central Ideas | ✅ thin | Objective-summary and author-purpose items. No structure-detective work, no chart/heading integration. |
| 6. Argument, Claims, and Evidence | ✅ thin | One "evaluate claim" item on small-sample weakness. No counterclaim, bias, loaded-language work. |
| 7. Research Reading and Source Synthesis | ❌ | No research-question, paraphrase, multi-source synthesis items. |
| 8. Discussion and Writing About Reading | ❌ | No discussion-norm or CEE-paragraph items. |

Track surface ~50 questions: 10 unique blueprints × 5 variant cycles. OpenTrivia has **zero** items for this track (the import didn't extend to 6th-grade reading) — so the bank is entirely the generated blueprints.

## Per-file recommendations

| File | 6th Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) → `grade6ReadingBlueprints` | 10 × 5 = 50 surface | **FIX** | Per-item explanations are on-grade (no `DEFAULT_FLAW`); pronoun-case and parenthetical-punctuation items are middle-school-ready. But same 10×5 skeleton as 4th/5th — Chapters 1, 4, 7, 8 unaddressed; poetry, research, argument depth effectively missing. Expand to ~35 blueprints with poetry as priority. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (wiring) | — | **FIX** | Same dual-id duplication as 4th and 5th — `readingVocab6th` and `col-6th-grade-reading-and-vocab` wire to the same bank. |

## Open actions (priority order)

1. **Author Chapter 4 (poetry) blueprints** — 6–8 items on imagery, metaphor in context, line/stanza function, repetition/rhythm effect, speaker vs. narrator. This is the single biggest content gap and the most distinctive 6th-grade move; current bank has none.
2. **Author Chapter 7 (research) blueprints** — 4–6 items: research-question quality, paraphrase vs. plagiarism, source-comparison, synthesis.
3. **Author Chapter 1 (stamina/fluency/objective summary)** and **Chapter 8 (CEE paragraphs, discussion norms)** blueprints — 4 each.
4. **Deepen Chapter 6 argument coverage** — current single "always" overreach item should become a 4–5 item suite covering counterclaim, loaded language, sufficient vs. relevant evidence, and source credibility.
5. **Reduce variant cycle from 5 to 2.**
6. **Add `region: 'US'` tag** to the track entry.
7. **Collapse `readingVocab6th` / `col-6th-grade-reading-and-vocab` duplication.**

## Estimated effort

- Author Chapter 4 poetry suite: ~3 hours (8 × 20 min)
- Author Chapters 1, 7, 8 + argument deepening: ~6 hours (18 × 20 min)
- Variant-cycle reduction + duplicate id collapse: ~1 hour

**~1.25 working days.** 6th grade carries the most lift in the cluster because of the poetry gap and the middle-school-bridge expectations.
