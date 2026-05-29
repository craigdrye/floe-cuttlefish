# OpenTriviaQA History/Humanities/Literature Course Audit

Generated: 2026-05-03

Scope: `data/raw_collections/opentriviaqa/opentriviaqa_questions.json`, categories `history`, `humanities`, and `literature` only. This is a report-only audit; no questions were wired into app code.

## Headline Findings

- Scoped rows: 4030 (`history` 1645, `humanities` 1097, `literature` 1288).
- Safe medium-confidence candidates: 876 (21.7% of scoped rows).
- Rejected/held rows: 3154 (78.3%) because the source is dominated by broad trivia, true/false statements, fandom detail checks, answer-form problems, and rows that need rewriting before course use.
- Best candidate pool is `AP English Literature/Humanities` (318 rows), mostly canonical author/work prompts. History splits into `AP World History` (284) and `AP US History` (213); `AP Art History/Philosophy` is much smaller (61) after excluding generic religion and pop-culture “artist” trivia.

## Candidate Splits

| Target course | Candidate rows | Notes |
| --- | ---: | --- |
| AP US History | 213 | Stable U.S. history people/events only; still needs AP-style rewrite for many recall prompts. |
| AP World History | 284 | Stable world-history people/events; includes some premodern/classical survey rows, so final import should choose AP World Modern vs broader world-history placement deliberately. |
| AP English Literature/Humanities | 318 | Canonical author/work/literary-history prompts; rejected fandom, typo-heavy, and dubious censorship rows. |
| AP Art History/Philosophy | 61 | Visual-art and named philosophy prompts only; rejected generic religion, language, and pop-culture artist rows. |

## Rejection Summary

| Reject reason | Rows |
| --- | ---: |
| `vague_humanities_or_language_trivia` | 782 |
| `vague_trivia_or_not_ap_history_aligned` | 775 |
| `vague_literary_or_word_trivia` | 530 |
| `vague_trivia_true_false` | 482 |
| `pop_culture_or_fandom` | 397 |
| `vague_trivia_or_answer_form_problem` | 89 |
| `time_sensitive_or_ranked_fact` | 44 |
| `needs_rewriting_or_context_check` | 26 |
| `off_course_geography_science_or_language_trivia` | 10 |
| `answer_leakage` | 9 |
| `needs_rewriting_typo_or_bad_source_text` | 8 |
| `needs_rewriting_or_incomplete_choices` | 2 |

## Sample Candidates

### AP US History

| Source id | Prompt | Answer |
| --- | --- | --- |
| `opentriviaqa::history::3` | After unsuccessful talks about oil production and debt repayment, Iraq occupied Kuwait. In January 1991 the US launched an air ... | Desert Storm |
| `opentriviaqa::history::9` | Impeachment stands for quickly removing dangerously criminal officials from high office. The Impeachment Trial in the Senate fo... | Bill Clinton |
| `opentriviaqa::history::14` | Henry Kissinger held this US post from 1974 to 1977. | Secretary of State |
| `opentriviaqa::history::26` | Which American politician said the following about liberty: They that can give up essential liberty to obtain a little temporar... | Benjamin Franklin |
| `opentriviaqa::history::27` | Which US President delivered the following words: Ask not what your country can do for you, ask what you can do for your country.? | John F. Kennedy |
| `opentriviaqa::history::28` | Which US President said these words: A democracy is nothing more than mob rule, where fifty-one percent of the people may take ... | Thomas Jefferson |
| `opentriviaqa::history::29` | Which US President made the following statement: America stands for liberty, for the pursuit of happiness and for the unalienab... | George W. Bush |
| `opentriviaqa::history::31` | Which great American leader made the following statement: Any people anywhere, being inclined and having the power, have the ri... | Abraham Lincoln |

### AP World History

| Source id | Prompt | Answer |
| --- | --- | --- |
| `opentriviaqa::history::12` | The Punic Wars were a series of three wars fought between these two powers. | Rome and Carthage |
| `opentriviaqa::history::13` | The 1938 incorporation of Austria in Greater Germany under the Nazi Regime is known as this. | Anschluss |
| `opentriviaqa::history::18` | Philip II of France, Richard I of England and Frederick I led this campaign. | Third Crusade |
| `opentriviaqa::history::20` | This German general was nicknamed The Desert Fox due to the skillful military campaigns he waged in North Africa, during World ... | Erwin Rommel |
| `opentriviaqa::history::23` | What was the name of the first jet-powered fighter used in World War II? | Me-262 |
| `opentriviaqa::history::24` | Which member of the Nazi Party was known as Adolph Hitlers first architect of the Third Reich? | Albert Speer |
| `opentriviaqa::history::34` | One of the worlds greatest generals. By the age of 30 he ruled almost half of the world. This great leader died at the peak of ... | Alexander The Great |
| `opentriviaqa::history::35` | This Carthaginian general marched from Spain to Rome across the Alps. 14,000 of his 40,000 troops died because of the harsh cli... | Hannibal |

### AP English Literature/Humanities

| Source id | Prompt | Answer |
| --- | --- | --- |
| `opentriviaqa::humanities::591` | What Ancient Greek lyric poet was born on the island of Lesbos from which the term lesbian is derived? | Sappho |
| `opentriviaqa::humanities::592` | The word shylock, which refers to a ruthless moneylender, is derived from the name of a character appearing in what Shakespeare... | The Merchant of Venice |
| `opentriviaqa::literature::2` | Leaves of Grass | Walt Whitman |
| `opentriviaqa::literature::3` | At The Mountains of Madness | H.P. Lovecraft |
| `opentriviaqa::literature::5` | 1984; Animal Farm | George Orwell |
| `opentriviaqa::literature::6` | Return of the Native; Jude the Obscure; Far From the Madding Crowd | Thomas Hardy |
| `opentriviaqa::literature::24` | Who is the Shakespearean villain who had his own brother executed and innocent children killed because they were hindrances to ... | Richard III |
| `opentriviaqa::literature::29` | Who wrote about the early whodunit archetype, inspector Auguste Dupin? | Edgar Allan Poe |

### AP Art History/Philosophy

| Source id | Prompt | Answer |
| --- | --- | --- |
| `opentriviaqa::history::639` | Which church official commissioned Michelangelo, to paint the ceiling of the Sistine Chapel, the residence of the Pope in the V... | Pope Julius II |
| `opentriviaqa::history::643` | The statue of David, the first free-standing nude statue since ancient times, was created by the Renaissance sculptor Donatello... | bronze |
| `opentriviaqa::history::647` | Which of the following Renaissance artists wrote I Commentari,a document regarded as the first autobiography of an artist? | Lorenzo Ghiberti |
| `opentriviaqa::history::650` | As samurai warriors were supposed to set a good example to those beneath them - they were bound by Bushido, a strict ethic code... | His daimyo |
| `opentriviaqa::history::1251` | Which of these are not characteristic of Gothic architecture? | dark or brown walls |
| `opentriviaqa::history::1397` | This ancient Greek philosopher, a teacher of Aristotle, was the founder of the Academy in Athens. | Plato |
| `opentriviaqa::humanities::276` | Michelangelos marble sculpture, Moses, was originally intended for the tomb of Pope Julius II in St. Peters Basilica, but after... | Esquiline |
| `opentriviaqa::humanities::279` | Caravaggio was a Baroque painter, and this was the main subject in most of his artwork. | Young men |

## Import Guidance

- Treat `reports/opentriviaqa-history-humanities-literature-candidates.json` as a review queue, not an import source.
- Do not bulk-import without converting trivia recall into course-shaped explanations, distractor rationales, and AP-aligned chapters.
- Keep rejected true/false rows, answer-leakage rows, typo rows, fandom/pop-culture rows, and questionable banned/censored-book rows out of course mapping unless they are manually rewritten from scratch.
- Prioritize literature candidates first if this source is revisited; they are the densest safe subset.
