# OpenTriviaQA `for-kids` Mapping Audit

## Scope

- Source file: `data/raw_collections/opentriviaqa/opentriviaqa_questions.json`
- Category audited: `for-kids`
- Rows audited: 759
- License recorded in raw file: `CC BY-SA 4.0`
- Constraint: no app/catalog wiring performed.

## Headline Finding

Only 69 of 759 rows are safe enough for a likely primary-course mapping. The remaining 690 rows should be held out: most are Harry Potter/Narnia/Disney/Nickelodeon/Webkinz-style recall, stale entertainment facts, malformed prompts with missing stimuli, answer-key ambiguity, or plot material that is too dark/adult for primary learners.

Recommendation: do not bulk-import `for-kids`. If this source is used later, start from the JSON allowlist in `reports/opentrivia-for-kids-mapping-audit.json`, then run a normal question-quality pass before generating app code.

## Mapped Rows

| Course | Confidence | Rows | Rationale |
| --- | --- | ---: | --- |
| `col-arithmetic` Arithmetic | high | 16 | Direct primary arithmetic, patterns, whole-number operations, and simple number reasoning. |
| `col-times-tables` Times Tables | high | 2 | Multiplication facts or multiplication-by-zero reasoning aligned to times-table fluency. |
| `col-money-basics` Money Basics | high | 9 | Money word problems involving totals, spending, and change. |
| `col-basic-geometry-and-measurement` Basic Geometry and Measurement | high | 4 | Time, units, weight comparison, and elementary angle facts. |
| `col-class-5-math` Class 5 Math | medium | 7 | Decimals, fractions, square roots, place value, and divide-by-10 items beyond early arithmetic. |
| `col-class-6-math` Class 6 Math | medium | 2 | Upper-primary missing-angle and right-triangle reasoning. |
| `col-4th-grade-reading-and-vocab` 4th Grade Reading and Vocab | high | 13 | Antonyms, synonym concept, adjective/adverb recognition, hyphen and comma usage. |
| `col-5th-grade-reading-and-vocab` 5th Grade Reading and Vocab | medium | 1 | Participle identification is language-conventions aligned but later than Word Builders. |
| `scienceYear1` Science Discovery: Year 1 | high | 11 | Common animal identification and pet-care observations aligned to animals-including-humans foundations. |
| `oceanPrimary` Ocean Science | high | 1 | Dolphin item fits marine mammals and breathing adaptations. |
| `planetsPrimary` Solar System & Beyond | high | 2 | Earth tilt/seasons and daytime star visibility misconceptions fit primary space science. |
| `scienceYear3` Science Discovery: Year 3 | high | 1 | Tree-ring age item fits plants/observation in lower KS2 science. |

Mapped total: **69** rows.

## Rejected Rows

| Rejection reason | Rows | Examples |
| --- | ---: | --- |
| literature-franchise-recall-without-passage | 304 | `opentriviaqa::for-kids::2`, `opentriviaqa::for-kids::3`, `opentriviaqa::for-kids::7`, `opentriviaqa::for-kids::9`, `opentriviaqa::for-kids::10`, `opentriviaqa::for-kids::19` |
| too-adult-or-dark-for-primary | 140 | `opentriviaqa::for-kids::5`, `opentriviaqa::for-kids::8`, `opentriviaqa::for-kids::12`, `opentriviaqa::for-kids::16`, `opentriviaqa::for-kids::18`, `opentriviaqa::for-kids::24` |
| stale-pop-culture-or-entertainment-trivia | 85 | `opentriviaqa::for-kids::1`, `opentriviaqa::for-kids::157`, `opentriviaqa::for-kids::158`, `opentriviaqa::for-kids::159`, `opentriviaqa::for-kids::160`, `opentriviaqa::for-kids::162` |
| vague-general-trivia-not-course-aligned | 79 | `opentriviaqa::for-kids::11`, `opentriviaqa::for-kids::13`, `opentriviaqa::for-kids::14`, `opentriviaqa::for-kids::15`, `opentriviaqa::for-kids::17`, `opentriviaqa::for-kids::27` |
| not-aligned-to-current-primary-course | 33 | `opentriviaqa::for-kids::43`, `opentriviaqa::for-kids::44`, `opentriviaqa::for-kids::48`, `opentriviaqa::for-kids::126`, `opentriviaqa::for-kids::127`, `opentriviaqa::for-kids::128` |
| answer-quality-or-ambiguity-risk | 28 | `opentriviaqa::for-kids::4`, `opentriviaqa::for-kids::6`, `opentriviaqa::for-kids::49`, `opentriviaqa::for-kids::52`, `opentriviaqa::for-kids::93`, `opentriviaqa::for-kids::96` |
| malformed-or-missing-stimulus | 21 | `opentriviaqa::for-kids::60`, `opentriviaqa::for-kids::121`, `opentriviaqa::for-kids::163`, `opentriviaqa::for-kids::167`, `opentriviaqa::for-kids::169`, `opentriviaqa::for-kids::272` |

Rejected total: **690** rows.

## Notes For Future Import

- The raw `for-kids` label is not a curriculum label. It mostly means child-facing entertainment trivia, not primary-course assessment content.
- Literature rows were rejected unless they tested language skills directly. Plot minutiae without a passage does not map cleanly to reading comprehension courses.
- Some otherwise simple questions were rejected for missing stimuli, ambiguous answer keys, or answer choices like `All of these`, `Both of these`, and `None of these`.
- I did not find a dependable answer-leakage bucket after excluding boolean/title false positives; likely leakage should be rechecked during final QA rather than used as a mapping allowlist.
- The accepted rows still need generated rationales, duplicate checks, and final QA before any import file is built.
