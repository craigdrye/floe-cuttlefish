# Remaining OER Fixed-Choice Candidate Audit

Generated: 2026-05-03

Scope: WeBWorK OPL, OpenDSA leftovers, and OpenTriviaQA categories after the existing OpenDSA Algorithms/Software/Formal Languages, OpenTrivia Brain Teasers, OpenSAT, IMS Tutorials, and OpenIntro Statistics Slides imports.

Safe direct-import criteria: self-contained prompt, correct answer, at least two distinct wrong choices, no obvious answer leakage, no unresolved template placeholders, and alignment to an existing track.

## Recommended Imports

- OpenDSA leftovers: 122 safe fixed-choice candidates.
- OpenTriviaQA educational categories: 7728 safe fixed-choice candidates.
- WeBWorK OPL: 0 safe direct fixed-choice candidates from the current raw extract.

## OpenDSA Leftovers

- `open-dsa::mengbridgecourse`: 122 candidates -> universityPrep: Software Engineering Prep / Intro Computer Science. bridge-course CS basics, debugging, and programming concepts not covered by the Algorithms/Software/Formal Languages imports.

## OpenTriviaQA Educational Categories

- `science-technology`: 2067 candidates -> high/university: Science Discovery, AP Sciences, Intro CS where topic-matched. course-adjacent science and technology facts with fixed answer choices.
- `history`: 1365 candidates -> high: US History / World History / AP History. history facts aligned to existing history tracks.
- `literature`: 1084 candidates -> high/university: English Literature / Humanities. literature facts aligned to humanities and English tracks.
- `animals`: 1003 candidates -> primary/high: Science Discovery / Biology. biology and animal science facts with simple fixed choices.
- `humanities`: 898 candidates -> high/university: Humanities / Philosophy / Art History. humanities facts aligned to existing humanities tracks.
- `geography`: 758 candidates -> high: World History / AP Human Geography. map, country, region, and place knowledge aligned to geography tracks.
- `for-kids`: 553 candidates -> primary: Big Questions / Science Discovery / Reading and Vocab. age-appropriate general knowledge with fixed answer choices.

Excluded OpenTriviaQA categories:

- brain-teasers already imported.
- movies/television/music/celebrities/sports/video-games/entertainment/hobbies/rated/newest/people/world as too entertainment-heavy, too broad, or time-sensitive.
- religion-faith as not a current course-aligned safe import without a dedicated review policy.

## WeBWorK OPL

- Raw extracted problems: 22861.
- Files with radio/popup/checkbox-style widgets in source scan: 12773.
- Explicit fixed-only widget files with no answer-entry dependency in source scan: 1616.
- Safe direct imports from current raw JSON: 0.
- Mixed/generated widget files requiring conversion: 11157.
- Recommendation: No safe direct fixed-choice import from the current WeBWorK raw extract. Some source files appear to use fixed-choice widgets, but the mined rows do not contain extracted choices/correct answers and many widgets are generated or mixed with answer-entry rules.

Top WeBWorK widget subjects:

- `Unknown`: 12760
- `WeBWorK`: 6
- `ZZZ-Inserted Text`: 4
- `Calculus - multivariable`: 1
- `Calculus - single variable`: 1
- `Statistics`: 1

## Notes

- OpenDSA `open-dsa::mengbridgecourse` is the only remaining direct-import OpenDSA collection that passes the current fixed-choice and alignment checks.
- OpenTriviaQA counts are category-level candidates, not a recommendation to bulk-import without the same generated import guardrails used for brain-teasers.
- WeBWorK should stay out of direct app wiring until a dedicated `.pg` parser extracts fixed choice text, correct choice, generated variables, and image/context dependencies.
