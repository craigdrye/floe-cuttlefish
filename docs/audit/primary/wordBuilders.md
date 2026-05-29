# Audit: wordBuilders

**Syllabus**: [`src/data/syllabi/primary/word_builders.md`](../../../src/data/syllabi/primary/word_builders.md)
**Track id**: `wordBuilders` (also mirrored as `col-word-builders`)
**Tier**: primary (Year 1, ages 5–6)
**Region**: UK-led (UK National Curriculum, UK Phonics Screening Check) with US Common Core Foundational Skills cross-reference — untagged

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Listening for Sounds | ❌ | No oral-blending, segmenting, rhyme, syllable, or alliteration items. (Quiz-format limit — but worth flagging.) |
| 2. Secure Single-Letter Sounds | ❌ | No letter-sound, CVC-build-and-read items. |
| 3. Digraphs and Trigraphs | ✅ | `sh` digraph, `ee` vowel team, `fr` consonant cluster items present. Best-covered chapter. |
| 4. Spelling Patterns and Word Families | ✅ partial | Magic-`e` (`cap` → `cape`) item. No word-family ladder work, no short/long vowel sort. |
| 5. Common Exception Words and Fluency | ✅ partial | `today` tricky-word and a sentence-fit item. No rereading/expression items. |
| 6. Vocabulary and Meaning | ❌ | No category sort, synonym/antonym, describing-word items. |
| 7. Morphology for Little Word Builders | ✅ thin | Suffix `-ing` meaning item. No `-s`/`-es`, `-ed`, `-er`/`-est` items. |
| 8. Sentence Play and Reading-Writing Transfer | ✅ partial | End-punctuation item present. No `and`/`because` joining, no rebuild-cut-up-sentence items. |

Track surface ~50 questions: 10 unique blueprints × 5 variant cycles. Roughly half the syllabus chapters have at least one item; phonological awareness (oral, pre-graphemic) is wholly absent — a known **May 2026 audit finding** restated here: *no phonics for true preschool/early primary*. Word Builders sits at the Year-1 edge of that gap; oral-only items (Chapter 1) are the missing entry ramp.

## Per-file recommendations

| File | WB Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedHumanitiesExam.ts`](../../../src/data/questionCatalog/primaryGeneratedHumanitiesExam.ts) → `wordBuilderBlueprints` | 10 × 5 = 50 surface | **FIX** | Per-item explanations are good and age-appropriate (no `DEFAULT_FLAW`); phonics terms (`digraph`, `cluster`, `split digraph`, `vowel team`) are used correctly. But variant cycles use Year-1-inappropriate scenes (`local museum`, `library corner`, `rock pool`, `information card`) a 5-year-old cannot decode. Re-author variants to stay in decodable settings (home, park, classroom, garden) and add Chapters 1, 2, 6. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (wiring) | — | **FIX** | Both `wordBuilders` and `col-word-builders` resolve to the same bank — collapse to one canonical id. |

## Open actions (priority order)

1. **Author Chapter 1 (phonological awareness) blueprints** — oral blending (`c-a-t` → `cat`), syllable count, rhyme match, alliteration sort. 6–8 items; these are the entry ramp for the youngest learners and the most-missed band per the May 2026 audit finding.
2. **Author Chapter 2 (single-letter sounds & CVC)** blueprints — 4–6 items: letter-sound match, CVC build-a-word, one-letter-changes-the-word ladders.
3. **Author Chapter 6 (vocabulary/meaning)** blueprints — 4 items: category sort, synonym pair, antonym pair, describing-word fit.
4. **Rewrite variant scenes** to stay inside Year-1 decodable vocabulary. Drop `local museum`, `library corner`, `rock pool`, `information card` from cycle pool.
5. **Reduce variant cycle from 5 to 2** so 50 surface questions stop being 10 × 5 lookalikes.
6. **Add `region: 'UK'` tag** (syllabus is UK-led; common-exception-word list is UK-flavoured). Optionally split a US-CCSS-RF variant.
7. **Reconcile with `englishDictionary.ts`** — current dictionary (~3,849 words, "not exhaustive") needs Year-1 high-frequency words and CVC bodies verified, ideally with a phonics tag.

## Estimated effort

- Author Chapters 1, 2, 6 blueprints (~16 items): ~6 hours
- Variant pool rewrite + cycle reduction: ~1.5 hours
- Tag + id collapse + dictionary cross-check: ~2.5 hours

**~1.5 working days.** Highest-leverage primary track — it bridges the preschool phonics gap and feeds the rest of ELA.
