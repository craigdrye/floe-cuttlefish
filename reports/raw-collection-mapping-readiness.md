# Raw Collection Mapping Readiness

Generated on 2026-05-03T05:43:26.767Z.

## Operating Rule

- Extraction quality and course routing are separate gates.
- A source can have the right course target and still be blocked if the mined prompt is an answer-key row, copyright page, fragment, or standards table.
- For live imports, do not wire a mapping entry until it is either fully reviewed or its samples plus every-50th spot checks are clean.

## Overall

- Mapping entries: 294
- Matched raw questions/tasks: 108858
- Needs Extraction Fix: 191 entries / 20117 questions
- Needs Routing Review: 17 entries / 1235 questions
- Review Fully: 6 entries / 103 questions
- Ready To Wire: 6 entries / 512 questions
- Design New Course: 9 entries / 11401 questions
- Support Bank: 54 entries / 24495 questions
- Hold: 11 entries / 50995 questions

## Immediate Queue

- Texas STAAR 2025 rationales (`staar_2025_rationales`): 20 blocked entries, 17 were marked map-now, 955 matched questions
- Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`): 12 blocked entries, 12 were marked map-now, 507 matched questions
- Texas STAAR 2022 released tests (`staar_2022`): 11 blocked entries, 11 were marked map-now, 552 matched questions
- Texas STAAR 2023 paper samplers (`staar_2023`): 12 blocked entries, 11 were marked map-now, 229 matched questions
- NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`): 6 blocked entries, 6 were marked map-now, 284 matched questions
- NYSED 2022 Grades 3-8 Mathematics Released Questions (`nysed_math_2022`): 6 blocked entries, 6 were marked map-now, 204 matched questions
- NYSED 2023 Grades 3-8 Mathematics Released Questions (`nysed_math_2023`): 6 blocked entries, 6 were marked map-now, 197 matched questions
- NYSED 2019 Grades 3-8 Mathematics Released Questions (`nysed_math_2019`): 6 blocked entries, 6 were marked map-now, 192 matched questions
- NYSED 2018 Grades 3-8 Mathematics Released Questions (`nysed_math_2018`): 6 blocked entries, 6 were marked map-now, 185 matched questions
- NYSED 2025 Grades 3-8 Mathematics Released Questions (`nysed_math_2025`): 6 blocked entries, 6 were marked map-now, 178 matched questions
- NYSED 2021 Grades 3-8 Mathematics Released Questions (`nysed_math_2021`): 6 blocked entries, 6 were marked map-now, 143 matched questions
- Texas STAAR 2024 rationales (`staar_2024_rationales`): 7 blocked entries, 5 were marked map-now, 354 matched questions
- NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`): 6 blocked entries, 5 were marked map-now, 251 matched questions
- NYSED 2023 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2023`): 6 blocked entries, 5 were marked map-now, 239 matched questions
- NYSED 2024 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2024`): 6 blocked entries, 5 were marked map-now, 237 matched questions
- NYSED 2015 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2015`): 6 blocked entries, 5 were marked map-now, 233 matched questions
- NYSED 2025 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2025`): 6 blocked entries, 5 were marked map-now, 224 matched questions
- NYSED 2019 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2019`): 6 blocked entries, 5 were marked map-now, 211 matched questions
- NYSED 2016 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2016`): 6 blocked entries, 5 were marked map-now, 204 matched questions
- NYSED 2022 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2022`): 6 blocked entries, 5 were marked map-now, 191 matched questions
- NYSED 2018 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2018`): 6 blocked entries, 5 were marked map-now, 186 matched questions
- NYSED 2021 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2021`): 6 blocked entries, 5 were marked map-now, 164 matched questions
- NYSED 2024 Grades 3-8 Mathematics Released Questions (`nysed_math_2024`): 5 blocked entries, 5 were marked map-now, 145 matched questions
- Texas STAAR 2019 released tests (`staar_2019`): 6 blocked entries, 3 were marked map-now, 331 matched questions
- Texas STAAR 2018 released tests (`staar_2018`): 5 blocked entries, 2 were marked map-now, 270 matched questions
- Texas STAAR 2021 released tests (`staar_2021`): 4 blocked entries, 2 were marked map-now, 253 matched questions
- NYSED 2024 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2024`): 2 blocked entries, 2 were marked map-now, 98 matched questions
- NYSED 2025 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2025`): 2 blocked entries, 2 were marked map-now, 94 matched questions
- OpenDSA (`opendsa`): 1 blocked entries, 1 were marked map-now, 691 matched questions
- OpenIntro Statistics (`openintro_stats`): 1 blocked entries, 1 were marked map-now, 52 matched questions

## Needs Extraction Fix

### numbas_exams::source

- Source: Numbas reusable exams (`numbas_exams`)
- Status/confidence: seed-new-course / medium
- Matched questions: 12063
- Target family: math-depth
- Existing tracks: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, genPhys1
- Proposed tracks: mathDiagnostics (Math Diagnostics), mechanicsDrills (Mechanics Drills)
- Sample prompt flags: missing-prompt x1
- Suggested manual reads: 0
- Reason: 1/4 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_science_2024::grade-5

- Source: NYSED 2024 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2024`)
- Status/confidence: map-now / medium
- Matched questions: 40
- Target family: school-science-support
- Existing tracks: scienceYear5
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, answer-map-row x3, numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_science_2025::grade-5

- Source: NYSED 2025 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2025`)
- Status/confidence: map-now / medium
- Matched questions: 35
- Target family: school-science-support
- Existing tracks: scienceYear5
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, answer-map-row x3, numeric-only-prompt x2, very-short-prompt x2
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023_redesign::grade-5-science

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / medium
- Matched questions: 32
- Target family: school-science-support
- Existing tracks: scienceYear5
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-5-science

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / medium
- Matched questions: 31
- Target family: school-science-support
- Existing tracks: scienceYear5
- Proposed tracks: none
- Sample prompt flags: rationale-only x4
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### opendsa::core-cs

- Source: OpenDSA (`opendsa`)
- Status/confidence: map-now / high
- Matched questions: 691
- Target family: computer-science
- Existing tracks: introCS, software, dataStructures
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::grade-8-science

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 71
- Target family: school-science-support
- Existing tracks: middleSchoolEarthSpace
- Proposed tracks: none
- Sample prompt flags: numeric-only-prompt x1, numeric-table-fragment x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::u-s-history

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 71
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2021::u-s-history

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status/confidence: map-now / high
- Matched questions: 70
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023_redesign::grade-8-science

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 66
- Target family: school-science-support
- Existing tracks: middleSchoolEarthSpace
- Proposed tracks: none
- Sample prompt flags: numeric-table-fragment x1, reference-materials x1
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2024_rationales::u-s-history

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status/confidence: map-now / high
- Matched questions: 66
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: rationale-only x3, rubric-row x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::u-s-history

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 65
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: rationale-only x3, fragment-start x2
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::algebra-i

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 63
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x4, numeric-only-prompt x3
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::algebra-i

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 62
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: rationale-only x2, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2018::u-s-history

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status/confidence: map-now / high
- Matched questions: 62
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: frontmatter-or-copyright x1, numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-8-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 60
- Target family: school-math-support
- Existing tracks: col-class-8-math
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x2
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::grade-7-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 60
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: frontmatter-or-copyright x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_science_2025::grade-8

- Source: NYSED 2025 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2025`)
- Status/confidence: map-now / high
- Matched questions: 59
- Target family: school-science-support
- Existing tracks: middleSchoolEarthSpace
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, answer-map-row x2, numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2018::algebra-i

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status/confidence: map-now / high
- Matched questions: 58
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x2, numeric-only-prompt x1
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2024_rationales::algebra-i

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status/confidence: map-now / high
- Matched questions: 58
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: rationale-only x2
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_science_2024::grade-8

- Source: NYSED 2024 Grade 5 and Grade 8 Science Released Questions (`nysed_science_2024`)
- Status/confidence: map-now / high
- Matched questions: 58
- Target family: school-science-support
- Existing tracks: middleSchoolEarthSpace
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, answer-map-row x3, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-7-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 55
- Target family: school-math-support
- Existing tracks: col-class-7-math
- Proposed tracks: none
- Sample prompt flags: rationale-only x2, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2019::algebra-i

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status/confidence: map-now / high
- Matched questions: 55
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: numeric-only-prompt x3, very-short-prompt x3
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2024_rationales::english-ii

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status/confidence: map-now / high
- Matched questions: 55
- Target family: school-reading-support
- Existing tracks: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: rationale-only x3, fragment-start x1
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2021::algebra-i

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status/confidence: map-now / high
- Matched questions: 54
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2019::u-s-history

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status/confidence: map-now / high
- Matched questions: 54
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: fragment-start x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-5-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 53
- Target family: school-math-support
- Existing tracks: class5Math
- Proposed tracks: none
- Sample prompt flags: rationale-only x3, fragment-start x2, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::english-i

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 53
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: rationale-only x4, fragment-start x2
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::english-ii

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 53
- Target family: school-reading-support
- Existing tracks: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: rationale-only x4, fragment-start x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_math_2017::grade-7

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status/confidence: map-now / high
- Matched questions: 53
- Target family: school-math-support
- Existing tracks: col-class-7-math
- Proposed tracks: none
- Sample prompt flags: answer-key-row x4, standards-table-row x4, answer-map-row x3, numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023_redesign::english-ii

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: school-reading-support
- Existing tracks: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2019::english-ii

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: school-reading-support
- Existing tracks: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2024_rationales::english-i

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: rationale-only x5
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### openintro_stats::foundations

- Source: OpenIntro Statistics (`openintro_stats`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: statistics-data-science
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: none
- Sample prompt flags: answer-key-row x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-6-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 51
- Target family: school-math-support
- Existing tracks: class6Math
- Proposed tracks: none
- Sample prompt flags: rationale-only x3, fragment-start x2, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023_redesign::algebra-i

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 51
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_math_2017::grade-8

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status/confidence: map-now / high
- Matched questions: 49
- Target family: school-math-support
- Existing tracks: col-class-8-math
- Proposed tracks: none
- Sample prompt flags: answer-key-row x5, standards-table-row x5, answer-map-row x4
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-4-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 48
- Target family: school-math-support
- Existing tracks: class4Math
- Proposed tracks: none
- Sample prompt flags: fragment-start x1, rationale-only x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-7-rla

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 48
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: rationale-only x4, fragment-start x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_math_2017::grade-6

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status/confidence: map-now / high
- Matched questions: 48
- Target family: school-math-support
- Existing tracks: class6Math
- Proposed tracks: none
- Sample prompt flags: answer-key-row x5, standards-table-row x5, answer-map-row x4
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::grade-8-math

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 47
- Target family: school-math-support
- Existing tracks: col-class-8-math
- Proposed tracks: none
- Sample prompt flags: numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-6-rla

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-reading-support
- Existing tracks: readingVocab6th
- Proposed tracks: none
- Sample prompt flags: rationale-only x3, fragment-start x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-8-rla

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: rationale-only x5, fragment-start x2
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_math_2017::grade-4

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-math-support
- Existing tracks: class4Math
- Proposed tracks: none
- Sample prompt flags: answer-key-row x4, standards-table-row x4, answer-map-row x3
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2017::grade-7

- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x4, answer-map-row x4
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2023::grade-7

- Source: NYSED 2023 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2023`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, standards-table-row x3, answer-map-row x2
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2023::grade-8

- Source: NYSED 2023 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2023`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x4, standards-table-row x4, answer-map-row x3
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2024::grade-7

- Source: NYSED 2024 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2024`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, standards-table-row x3, answer-map-row x2
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2024::grade-8

- Source: NYSED 2024 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2024`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, standards-table-row x3, answer-map-row x2
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023_redesign::grade-6-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 45
- Target family: school-reading-support
- Existing tracks: readingVocab6th
- Proposed tracks: none
- Sample prompt flags: frontmatter-or-copyright x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023_redesign::grade-8-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 45
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::grade-8-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 45
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: frontmatter-or-copyright x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_math_2017::grade-3

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status/confidence: map-now / high
- Matched questions: 45
- Target family: school-math-support
- Existing tracks: class3Math
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, answer-map-row x3, standards-table-row x3, fragment-start x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2017::grade-8

- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`)
- Status/confidence: map-now / high
- Matched questions: 45
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x4, answer-map-row x3
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::grade-7-math

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 44
- Target family: school-math-support
- Existing tracks: col-class-7-math
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x2, numeric-only-prompt x1
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2017::grade-6

- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`)
- Status/confidence: map-now / high
- Matched questions: 44
- Target family: school-reading-support
- Existing tracks: readingVocab6th
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, answer-map-row x2, fragment-start x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-3-math

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 43
- Target family: school-math-support
- Existing tracks: class3Math
- Proposed tracks: none
- Sample prompt flags: rationale-only x2, very-short-prompt x2, fragment-start x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2024_rationales::grade-3-math

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status/confidence: map-now / high
- Matched questions: 43
- Target family: school-math-support
- Existing tracks: class3Math
- Proposed tracks: none
- Sample prompt flags: rationale-only x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_math_2017::grade-5

- Source: NYSED 2017 Grades 3-8 Mathematics Released Questions (`nysed_math_2017`)
- Status/confidence: map-now / high
- Matched questions: 43
- Target family: school-math-support
- Existing tracks: class5Math
- Proposed tracks: none
- Sample prompt flags: answer-key-row x5, standards-table-row x5, answer-map-row x4
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2015::grade-8

- Source: NYSED 2015 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2015`)
- Status/confidence: map-now / high
- Matched questions: 43
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2025::grade-7

- Source: NYSED 2025 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2025`)
- Status/confidence: map-now / high
- Matched questions: 43
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x4, standards-table-row x4, answer-map-row x3
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2019::grade-8

- Source: NYSED 2019 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2019`)
- Status/confidence: map-now / high
- Matched questions: 43
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, answer-map-row x2
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023_redesign::grade-7-math

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 42
- Target family: school-math-support
- Existing tracks: col-class-7-math
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023::grade-7-rla

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: map-now / high
- Matched questions: 42
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2015::grade-6

- Source: NYSED 2015 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2015`)
- Status/confidence: map-now / high
- Matched questions: 42
- Target family: school-reading-support
- Existing tracks: readingVocab6th
- Proposed tracks: none
- Sample prompt flags: numeric-only-prompt x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2025::grade-8

- Source: NYSED 2025 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2025`)
- Status/confidence: map-now / high
- Matched questions: 42
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: standards-table-row x4, answer-key-row x3, answer-map-row x3
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-4-rla

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 41
- Target family: school-reading-support
- Existing tracks: readingVocab4th
- Proposed tracks: none
- Sample prompt flags: rationale-only x3, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-5-rla

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 41
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: rationale-only x4, fragment-start x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2023_redesign::grade-8-math

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 41
- Target family: school-math-support
- Existing tracks: col-class-8-math
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x2, numeric-only-prompt x1
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2025_rationales::grade-8-science

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: map-now / high
- Matched questions: 39
- Target family: school-science-support
- Existing tracks: middleSchoolEarthSpace
- Proposed tracks: none
- Sample prompt flags: rationale-only x3, fragment-start x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::grade-4-math

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 39
- Target family: school-math-support
- Existing tracks: class4Math
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x2
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::grade-5-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 39
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x1
- Suggested manual reads: 0
- Reason: 1/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2024::grade-6

- Source: NYSED 2024 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2024`)
- Status/confidence: map-now / high
- Matched questions: 39
- Target family: school-reading-support
- Existing tracks: readingVocab6th
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, standards-table-row x3, answer-map-row x2
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2022::grade-8

- Source: NYSED 2022 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2022`)
- Status/confidence: map-now / high
- Matched questions: 39
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: answer-key-row x4, answer-map-row x3
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### staar_2022::grade-6-math

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 38
- Target family: school-math-support
- Existing tracks: class6Math
- Proposed tracks: none
- Sample prompt flags: very-short-prompt x2
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2017::grade-4

- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`)
- Status/confidence: map-now / high
- Matched questions: 38
- Target family: school-reading-support
- Existing tracks: readingVocab4th
- Proposed tracks: none
- Sample prompt flags: answer-key-row x4, answer-map-row x3
- Suggested manual reads: 0
- Reason: 4/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_math_2022::grade-7

- Source: NYSED 2022 Grades 3-8 Mathematics Released Questions (`nysed_math_2022`)
- Status/confidence: map-now / high
- Matched questions: 38
- Target family: school-math-support
- Existing tracks: col-class-7-math
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, answer-map-row x3, standards-table-row x3, very-short-prompt x2
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2018::grade-5

- Source: NYSED 2018 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2018`)
- Status/confidence: map-now / high
- Matched questions: 38
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: answer-key-row x1, very-short-prompt x1
- Suggested manual reads: 0
- Reason: 2/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2017::grade-5

- Source: NYSED 2017 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2017`)
- Status/confidence: map-now / high
- Matched questions: 37
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: answer-key-row x5, answer-map-row x4
- Suggested manual reads: 0
- Reason: 5/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

### nysed_ela_2023::grade-5

- Source: NYSED 2023 Grades 3-8 English Language Arts Released Questions (`nysed_ela_2023`)
- Status/confidence: map-now / high
- Matched questions: 37
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: answer-key-row x3, standards-table-row x3, answer-map-row x2
- Suggested manual reads: 0
- Reason: 3/5 sampled prompts had quality flags.
- Plan: Fix or rerun the extractor first; do not spend human review time routing malformed rows.

_Showing first 80 of 191 entries in this gate._

## Needs Routing Review

### staar_2022::grade-5-science

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / medium
- Matched questions: 36
- Target family: school-science-support
- Existing tracks: scienceYear5
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### opensat::math

- Source: OpenSAT / PineSAT API (`opensat`)
- Status/confidence: map-now / high
- Matched questions: 401
- Target family: exam-prep
- Existing tracks: col-sat-math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 9
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2022::english-ii

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 78
- Target family: school-reading-support
- Existing tracks: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2023::grade-5-rla

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: map-now / high
- Matched questions: 64
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2021::english-i

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status/confidence: map-now / high
- Matched questions: 56
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2022::grade-6-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 55
- Target family: school-reading-support
- Existing tracks: readingVocab6th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2023::grade-4-rla

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: map-now / high
- Matched questions: 55
- Target family: school-reading-support
- Existing tracks: readingVocab4th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2022::english-i

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 53
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2023_redesign::english-i

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2021::english-ii

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: school-reading-support
- Existing tracks: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2018::english-i

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2018::english-ii

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: school-reading-support
- Existing tracks: col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2019::english-i

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2022::grade-4-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: map-now / high
- Matched questions: 49
- Target family: school-reading-support
- Existing tracks: readingVocab4th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2023_redesign::grade-7-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 46
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2023_redesign::grade-4-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 41
- Target family: school-reading-support
- Existing tracks: readingVocab4th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

### staar_2023_redesign::grade-5-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: map-now / high
- Matched questions: 41
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: 5/5 samples disagreed with raw candidate tracks.
- Plan: Read the sampled prompts plus every 50th item before wiring; split the entry if any sample belongs elsewhere.

## Review Fully

### staar_2023::grade-5-science

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: map-now / medium
- Matched questions: 10
- Target family: school-science-support
- Existing tracks: scienceYear5
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Small entry; full manual review is cheap and safer than sampling.
- Plan: Read all 10 questions before wiring; the entry is small enough that sampling is not worth the risk.

### nysed_math_2024::grade-8

- Source: NYSED 2024 Grades 3-8 Mathematics Released Questions (`nysed_math_2024`)
- Status/confidence: map-now / high
- Matched questions: 25
- Target family: school-math-support
- Existing tracks: col-class-8-math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 25
- Reason: Small entry; full manual review is cheap and safer than sampling.
- Plan: Read all 25 questions before wiring; the entry is small enough that sampling is not worth the risk.

### openintro_stats::inference

- Source: OpenIntro Statistics (`openintro_stats`)
- Status/confidence: map-now / high
- Matched questions: 24
- Target family: statistics-data-science
- Existing tracks: apStatistics
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 24
- Reason: Small entry; full manual review is cheap and safer than sampling.
- Plan: Read all 24 questions before wiring; the entry is small enough that sampling is not worth the risk.

### staar_2023::u-s-history

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: map-now / high
- Matched questions: 16
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 16
- Reason: Small entry; full manual review is cheap and safer than sampling.
- Plan: Read all 16 questions before wiring; the entry is small enough that sampling is not worth the risk.

### staar_2023::grade-8-math

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: map-now / high
- Matched questions: 15
- Target family: school-math-support
- Existing tracks: col-class-8-math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 15
- Reason: Small entry; full manual review is cheap and safer than sampling.
- Plan: Read all 15 questions before wiring; the entry is small enough that sampling is not worth the risk.

### openintro_stats::regression

- Source: OpenIntro Statistics (`openintro_stats`)
- Status/confidence: map-now / high
- Matched questions: 13
- Target family: statistics-data-science
- Existing tracks: introDataScience, apStatistics
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 13
- Reason: Small entry; full manual review is cheap and safer than sampling.
- Plan: Read all 13 questions before wiring; the entry is small enough that sampling is not worth the risk.

## Ready To Wire

### openintro_ims::inference

- Source: Introduction to Modern Statistics (`openintro_ims`)
- Status/confidence: map-now / high
- Matched questions: 142
- Target family: statistics-data-science
- Existing tracks: apStatistics, quant, medical
- Proposed tracks: statisticsLab (Statistics Lab)
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: No sampled extraction blockers; manifest targets existing tracks.
- Plan: Do a final every-50th spot check, then wire to the listed existing tracks.

### openintro_ims::foundations-and-exploration

- Source: Introduction to Modern Statistics (`openintro_ims`)
- Status/confidence: map-now / high
- Matched questions: 128
- Target family: statistics-data-science
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: No sampled extraction blockers; manifest targets existing tracks.
- Plan: Do a final every-50th spot check, then wire to the listed existing tracks.

### openintro_ims::modeling

- Source: Introduction to Modern Statistics (`openintro_ims`)
- Status/confidence: map-now / high
- Matched questions: 98
- Target family: statistics-data-science
- Existing tracks: introDataScience, apStatistics, ml
- Proposed tracks: statisticsLab (Statistics Lab)
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: No sampled extraction blockers; manifest targets existing tracks.
- Plan: Do a final every-50th spot check, then wire to the listed existing tracks.

### ims_tutorials::modeling-and-inference

- Source: IMS Tutorials (`ims_tutorials`)
- Status/confidence: map-now / high
- Matched questions: 56
- Target family: statistics-data-science
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: No sampled extraction blockers; manifest targets existing tracks.
- Plan: Do a final every-50th spot check, then wire to the listed existing tracks.

### open_logic_project::modal-and-counterfactual

- Source: Open Logic Project (`open_logic_project`)
- Status/confidence: map-now / high
- Matched questions: 52
- Target family: logic-philosophy
- Existing tracks: philosophy, logicCriticalThinking, philSenior
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: No sampled extraction blockers; manifest targets existing tracks.
- Plan: Do a final every-50th spot check, then wire to the listed existing tracks.

### ims_tutorials::data-and-explore

- Source: IMS Tutorials (`ims_tutorials`)
- Status/confidence: map-now / high
- Matched questions: 36
- Target family: statistics-data-science
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 5
- Reason: No sampled extraction blockers; manifest targets existing tracks.
- Plan: Do a final every-50th spot check, then wire to the listed existing tracks.

## Design New Course

### numbas::source

- Source: Numbas public database (`numbas`)
- Status/confidence: seed-new-course / medium
- Matched questions: 9808
- Target family: math-depth
- Existing tracks: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, apStatistics
- Proposed tracks: algebraWorkout (Algebra Workout), mechanicsDrills (Mechanics Drills), quantitativeMethods (Quantitative Methods)
- Sample prompt flags: none
- Suggested manual reads: 40
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

### staar_alt2_2023::grade-3-rla

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: seed-new-course / medium
- Matched questions: 19
- Target family: school-reading-support
- Existing tracks: none
- Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
- Sample prompt flags: none
- Suggested manual reads: 19
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

### staar_alt2_2025::grade-3-rla

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: seed-new-course / medium
- Matched questions: 17
- Target family: school-reading-support
- Existing tracks: none
- Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
- Sample prompt flags: none
- Suggested manual reads: 17
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

### opensat::english

- Source: OpenSAT / PineSAT API (`opensat`)
- Status/confidence: seed-new-course / high
- Matched questions: 799
- Target family: exam-prep
- Existing tracks: none
- Proposed tracks: col-sat-reading-writing (SAT Reading and Writing)
- Sample prompt flags: none
- Suggested manual reads: 40
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

### opendsa::algorithms

- Source: OpenDSA (`opendsa`)
- Status/confidence: seed-new-course / high
- Matched questions: 400
- Target family: computer-science
- Existing tracks: dataStructures, software, introCS
- Proposed tracks: algorithmsDrills (Algorithms Drills)
- Sample prompt flags: none
- Suggested manual reads: 40
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

### open_logic_project::formal-logic-core

- Source: Open Logic Project (`open_logic_project`)
- Status/confidence: seed-new-course / high
- Matched questions: 188
- Target family: logic-philosophy
- Existing tracks: logicCriticalThinking, philosophy
- Proposed tracks: formalLogic (Formal Logic)
- Sample prompt flags: none
- Suggested manual reads: 40
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

### open_logic_project::sets-and-proof

- Source: Open Logic Project (`open_logic_project`)
- Status/confidence: seed-new-course / high
- Matched questions: 95
- Target family: logic-philosophy
- Existing tracks: logicCriticalThinking, linearAlgebra, mathematics_extensions
- Proposed tracks: setTheoryAndProof (Set Theory and Proof)
- Sample prompt flags: none
- Suggested manual reads: 40
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

### staar_2023_redesign::grade-3-rla

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: seed-new-course / high
- Matched questions: 41
- Target family: school-reading-support
- Existing tracks: none
- Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
- Sample prompt flags: none
- Suggested manual reads: 40
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

### staar_2022::grade-3-rla

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: seed-new-course / high
- Matched questions: 34
- Target family: school-reading-support
- Existing tracks: none
- Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
- Sample prompt flags: none
- Suggested manual reads: 34
- Reason: Mapped as a new-course seed rather than a direct live import.
- Plan: Review representative samples, define the course boundary, then split chapters before importing.

## Support Bank

### webwork_opl::source

- Source: WeBWorK Open Problem Library (`webwork_opl`)
- Status/confidence: support-bank / low
- Matched questions: 22861
- Target family: math-depth
- Existing tracks: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, quantAdvanced
- Proposed tracks: contestMathDrills (Contest Math Drills), collegeAlgebraWorkout (College Algebra Workout)
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### openintro_stats_slides::source

- Source: OpenIntro Statistics Slides (`openintro_stats_slides`)
- Status/confidence: support-bank / medium
- Matched questions: 85
- Target family: statistics-data-science
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2021::reading-general

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status/confidence: support-bank / low
- Matched questions: 44
- Target family: school-reading-support
- Existing tracks: readingVocab4th, readingVocab5th, readingVocab6th, col-7th-grade-reading-and-vocab, col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2021::social-studies-general

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status/confidence: support-bank / low
- Matched questions: 44
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2018::reading-general

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status/confidence: support-bank / low
- Matched questions: 44
- Target family: school-reading-support
- Existing tracks: readingVocab4th, readingVocab5th, readingVocab6th, col-7th-grade-reading-and-vocab, col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2019::reading-general

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status/confidence: support-bank / low
- Matched questions: 44
- Target family: school-reading-support
- Existing tracks: readingVocab4th, readingVocab5th, readingVocab6th, col-7th-grade-reading-and-vocab, col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2019::social-studies-general

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status/confidence: support-bank / low
- Matched questions: 31
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2021::writing-general

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status/confidence: support-bank / low
- Matched questions: 30
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab, col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2018::writing-general

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status/confidence: support-bank / low
- Matched questions: 30
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab, col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2019::writing-general

- Source: Texas STAAR 2019 released tests (`staar_2019`)
- Status/confidence: support-bank / low
- Matched questions: 30
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab, col-10th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### opendsa::theory-and-languages

- Source: OpenDSA (`opendsa`)
- Status/confidence: support-bank / medium
- Matched questions: 166
- Target family: computer-science
- Existing tracks: software, introCS, logicCriticalThinking
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### open_logic_project::logic-and-computation

- Source: Open Logic Project (`open_logic_project`)
- Status/confidence: support-bank / medium
- Matched questions: 95
- Target family: logic-philosophy
- Existing tracks: introCS, dataStructures, software
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2018::biology

- Source: Texas STAAR 2018 released tests (`staar_2018`)
- Status/confidence: support-bank / medium
- Matched questions: 54
- Target family: school-science-support
- Existing tracks: col-high-school-biology, apBiology
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2022::biology

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: support-bank / medium
- Matched questions: 51
- Target family: school-science-support
- Existing tracks: col-high-school-biology, apBiology
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2021::biology

- Source: Texas STAAR 2021 released tests (`staar_2021`)
- Status/confidence: support-bank / medium
- Matched questions: 50
- Target family: school-science-support
- Existing tracks: col-high-school-biology, apBiology
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2023_redesign::biology

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: support-bank / medium
- Matched questions: 45
- Target family: school-science-support
- Existing tracks: col-high-school-biology, apBiology
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2022::grade-8-social-studies

- Source: Texas STAAR 2022 released tests (`staar_2022`)
- Status/confidence: support-bank / medium
- Matched questions: 44
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2023_redesign::grade-8-social-studies

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: support-bank / medium
- Matched questions: 40
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-8-social-studies

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / medium
- Matched questions: 20
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-8-social-studies

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / medium
- Matched questions: 19
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::biology

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / medium
- Matched questions: 19
- Target family: school-science-support
- Existing tracks: col-high-school-biology, apBiology
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2023::grade-8-social-studies

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: support-bank / medium
- Matched questions: 16
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_2023::biology

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: support-bank / medium
- Matched questions: 12
- Target family: school-science-support
- Existing tracks: col-high-school-biology, apBiology
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::biology

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / medium
- Matched questions: 4
- Target family: school-science-support
- Existing tracks: col-high-school-biology, apBiology
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 4
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::english-i

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 36
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::english-i

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 36
- Target family: school-reading-support
- Existing tracks: col-9th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-4-math

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-math-support
- Existing tracks: class4Math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-5-rla

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-5-science

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-science-support
- Existing tracks: scienceYear5
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-6-math

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-math-support
- Existing tracks: class6Math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-6-rla

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-reading-support
- Existing tracks: readingVocab6th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-7-rla

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-8-science

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-science-support
- Existing tracks: middleSchoolEarthSpace
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::u-s-history

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-3-math

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-math-support
- Existing tracks: class3Math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-4-math

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-math-support
- Existing tracks: class4Math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-4-rla

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-reading-support
- Existing tracks: readingVocab4th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-5-math

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-math-support
- Existing tracks: class5Math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-5-rla

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-reading-support
- Existing tracks: readingVocab5th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-5-science

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-science-support
- Existing tracks: scienceYear5
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-6-math

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-math-support
- Existing tracks: class6Math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-6-rla

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-reading-support
- Existing tracks: readingVocab6th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-7-rla

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-reading-support
- Existing tracks: col-7th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-8-math

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-math-support
- Existing tracks: col-class-8-math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::algebra-i

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::u-s-history

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 20
- Target family: school-stage-support
- Existing tracks: usHistory
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-3-math

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 19
- Target family: school-math-support
- Existing tracks: class3Math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-8-math

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 19
- Target family: school-math-support
- Existing tracks: col-class-8-math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::algebra-i

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 19
- Target family: school-math-support
- Existing tracks: col-algebra-1
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-7-math

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 18
- Target family: school-math-support
- Existing tracks: col-class-7-math
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-8-rla

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 18
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-8-rla

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 18
- Target family: school-reading-support
- Existing tracks: col-8th-grade-reading-and-vocab
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2023::grade-8-science

- Source: Texas STAAR Alternate 2 2023 released teacher guides (`staar_alt2_2023`)
- Status/confidence: support-bank / high
- Matched questions: 18
- Target family: school-science-support
- Existing tracks: middleSchoolEarthSpace
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

### staar_alt2_2025::grade-4-rla

- Source: Texas STAAR Alternate 2 2025 released teacher guides (`staar_alt2_2025`)
- Status/confidence: support-bank / high
- Matched questions: 16
- Target family: school-reading-support
- Existing tracks: readingVocab4th
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 10
- Reason: Mapped as support-bank material, not a direct live import.
- Plan: Keep as a curated reserve; only promote into live courses after a specific course needs it.

## Hold

### opentriviaqa::source

- Source: OpenTriviaQA (`opentriviaqa`)
- Status/confidence: hold / low
- Matched questions: 49716
- Target family: trivia-general
- Existing tracks: brainBurners
- Proposed tracks: triviaSprint (Trivia Sprint), cultureAndMediaQuiz (Culture and Media Quiz)
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### openintro_labs_rguroo::source

- Source: OpenIntro Labs (Rguroo) (`openintro_labs_rguroo`)
- Status/confidence: hold / high
- Matched questions: 116
- Target family: applied-labs
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: dataLabs (Data Labs)
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### oilabs_stata::source

- Source: OpenIntro Labs (Stata) (`oilabs_stata`)
- Status/confidence: hold / high
- Matched questions: 112
- Target family: applied-labs
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: dataLabs (Data Labs)
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### oilabs_jamovi::source

- Source: OpenIntro Labs (jamovi) (`oilabs_jamovi`)
- Status/confidence: hold / high
- Matched questions: 111
- Target family: applied-labs
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: dataLabs (Data Labs)
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### oilabs_jasp::source

- Source: OpenIntro Labs (JASP) (`oilabs_jasp`)
- Status/confidence: hold / high
- Matched questions: 110
- Target family: applied-labs
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: dataLabs (Data Labs)
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### oilabs_tidy::source

- Source: OpenIntro Labs (tidyverse) (`oilabs_tidy`)
- Status/confidence: hold / high
- Matched questions: 109
- Target family: applied-labs
- Existing tracks: apStatistics, introDataScience
- Proposed tracks: dataLabs (Data Labs)
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### pharma_hands_on::source

- Source: Pfizer Pharma Hands-on Exercises (`pharma_hands_on`)
- Status/confidence: hold / high
- Matched questions: 72
- Target family: applied-labs
- Existing tracks: medical, introDataScience
- Proposed tracks: clinicalDataLabs (Clinical Data Labs)
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### staar_2025_rationales::spanish-variants

- Source: Texas STAAR 2025 rationales (`staar_2025_rationales`)
- Status/confidence: hold / high
- Matched questions: 299
- Target family: school-stage-support
- Existing tracks: none
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### staar_2023_redesign::spanish-variants

- Source: Texas STAAR 2023 redesign practice tests (`staar_2023_redesign`)
- Status/confidence: hold / high
- Matched questions: 256
- Target family: school-stage-support
- Existing tracks: none
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### staar_2024_rationales::spanish-variants

- Source: Texas STAAR 2024 rationales (`staar_2024_rationales`)
- Status/confidence: hold / high
- Matched questions: 84
- Target family: school-stage-support
- Existing tracks: none
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

### staar_2023::spanish-variants

- Source: Texas STAAR 2023 paper samplers (`staar_2023`)
- Status/confidence: hold / high
- Matched questions: 10
- Target family: school-stage-support
- Existing tracks: none
- Proposed tracks: none
- Sample prompt flags: none
- Suggested manual reads: 0
- Reason: Marked hold in the source mapping manifest.
- Plan: Do not review for live mapping yet.

