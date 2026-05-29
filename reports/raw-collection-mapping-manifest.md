# Raw Collection Mapping Manifest

Generated on 2026-05-03T04:08:51.022Z.

## Overall

- Raw source folders: 47
- Explicit mapping entries: 311
- Fully covered sources: 47
- Partially covered sources: 0
- Untouched sources: 0
- Unmapped source folders: 0

## Proposed New Tracks

- `readingVocab3rd` 3rd Grade Reading and Vocab
  Sources: nysed_ela_2015, nysed_ela_2016, nysed_ela_2017, nysed_ela_2018, nysed_ela_2019, nysed_ela_2021, nysed_ela_2022, nysed_ela_2023, nysed_ela_2024, nysed_ela_2025, staar_2022, staar_2023, staar_2023_redesign, staar_2024_rationales, staar_2025_rationales, staar_alt2_2023, staar_alt2_2025
  Notes: Needed to catch grade-3 reading material cleanly.
- `algebraWorkout` Algebra Workout
  Sources: numbas
- `algorithmsDrills` Algorithms Drills
  Sources: opendsa
  Notes: This is one of the clearest new technical course candidates in the whole raw haul.
- `clinicalDataLabs` Clinical Data Labs
  Sources: pharma_hands_on
- `collegeAlgebraWorkout` College Algebra Workout
  Sources: webwork_opl
- `contestMathDrills` Contest Math Drills
  Sources: webwork_opl
- `cultureAndMediaQuiz` Culture and Media Quiz
  Sources: opentriviaqa
- `dataLabs` Data Labs
  Sources: oilabs_jamovi, oilabs_jasp, oilabs_stata, oilabs_tidy, openintro_labs_rguroo
- `formalLogic` Formal Logic
  Sources: open_logic_project
  Notes: This should become a flagship philosophy/logic lane rather than a buried subset.
- `mathDiagnostics` Math Diagnostics
  Sources: numbas_exams
- `mechanicsDrills` Mechanics Drills
  Sources: numbas, numbas_exams
- `quantitativeMethods` Quantitative Methods
  Sources: numbas
- `col-sat-reading-writing` SAT Reading and Writing
  Sources: opensat
  Notes: The source clearly supports a dedicated verbal companion to the existing SAT math lane.
- `setTheoryAndProof` Set Theory and Proof
  Sources: open_logic_project
  Notes: Natural bridge between philosophy-style logic and advanced mathematics.
- `statisticsLab` Statistics Lab
  Sources: openintro_ims
- `triviaSprint` Trivia Sprint
  Sources: opentriviaqa

## Source Coverage

### OpenTriviaQA

- Folder: `opentriviaqa`
- Questions/tasks: 49716
- License: CC BY-SA 4.0
- Covered by manifest: 49716 (100%)
- Entries:

  - `opentriviaqa::source`
    Family: trivia-general
    Status: hold; Confidence: low
    Scope: source; Matched questions: 49716
    Existing track ids: brainBurners
    Proposed tracks: triviaSprint (Trivia Sprint), cultureAndMediaQuiz (Culture and Media Quiz)
    Notes: Huge volume, but off-center for the current Floe identity and too noisy for serious academic tracks.

### WeBWorK Open Problem Library

- Folder: `webwork_opl`
- Questions/tasks: 22861
- License: CC BY-NC-SA 3.0
- Covered by manifest: 22861 (100%)
- Entries:

  - `webwork_opl::source`
    Family: math-depth
    Status: support-bank; Confidence: low
    Scope: source; Matched questions: 22861
    Existing track ids: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, quantAdvanced
    Proposed tracks: contestMathDrills (Contest Math Drills), collegeAlgebraWorkout (College Algebra Workout)
    Notes: This is too large and too weakly tagged to expose directly right now, but too valuable to ignore.

### Numbas reusable exams

- Folder: `numbas_exams`
- Questions/tasks: 12063
- License: unspecified
- Covered by manifest: 12063 (100%)
- Entries:

  - `numbas_exams::source`
    Family: math-depth
    Status: seed-new-course; Confidence: medium
    Scope: source; Matched questions: 12063
    Existing track ids: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, genPhys1
    Proposed tracks: mathDiagnostics (Math Diagnostics), mechanicsDrills (Mechanics Drills)
    Notes: The exam grouping makes this especially good for diagnostics and chaptered drill sets.

### Numbas public database

- Folder: `numbas`
- Questions/tasks: 9808
- License: Mixed open-access licences from reusable public questions
- Covered by manifest: 9808 (100%)
- Entries:

  - `numbas::source`
    Family: math-depth
    Status: seed-new-course; Confidence: medium
    Scope: source; Matched questions: 9808
    Existing track ids: collegeAlgebra, apCalculusAB, apCalculusBc, linearAlgebra, trigonometry, apStatistics
    Proposed tracks: algebraWorkout (Algebra Workout), mechanicsDrills (Mechanics Drills), quantitativeMethods (Quantitative Methods)
    Notes: This is a large, mixed math reservoir and should be split into deliberate math families rather than injected wholesale into one track.

### OpenDSA

- Folder: `opendsa`
- Questions/tasks: 1257
- License: MIT
- Covered by manifest: 1257 (100%)
- Entries:

  - `opendsa::core-cs`
    Family: computer-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 691
    Existing track ids: introCS, software, dataStructures
    Proposed tracks: none
    Notes: This is the cleanest computing fit in the new warehouse and should strengthen the existing CS ladder first.
  - `opendsa::algorithms`
    Family: computer-science
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 400
    Existing track ids: dataStructures, software, introCS
    Proposed tracks: algorithmsDrills (Algorithms Drills)
    Notes: This subset is too strong to hide entirely inside general CS survey courses.
  - `opendsa::theory-and-languages`
    Family: computer-science
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 166
    Existing track ids: software, introCS, logicCriticalThinking
    Proposed tracks: none
    Notes: This is good material, but more specialized and less immediately learner-friendly than the core CS and algorithms slices.

### Texas STAAR 2025 rationales

- Folder: `staar_2025_rationales`
- Questions/tasks: 1254
- License: unspecified
- Covered by manifest: 1254 (100%)
- Entries:

  - `staar_2025_rationales::spanish-variants`
    Family: school-stage-support
    Status: hold; Confidence: high
    Scope: collections; Matched questions: 299
    Existing track ids: none
    Proposed tracks: none
    Notes: Spanish-language variants are valuable, but there is no clean live Spanish track family yet.
  - `staar_2025_rationales::u-s-history`
    Family: school-stage-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 65
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: U.S. History should land in the general U.S. History course, not APUSH by default.
  - `staar_2025_rationales::algebra-i`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 62
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Algebra I is a direct fit to the existing Algebra 1 track.
  - `staar_2025_rationales::grade-8-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 60
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 math fits the existing 8th-grade math track directly.
  - `staar_2025_rationales::grade-7-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 55
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 math fits the existing 7th-grade math track directly.
  - `staar_2025_rationales::grade-5-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 53
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 math fits the Class 5 Math ladder directly.
  - `staar_2025_rationales::english-i`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 53
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English I aligns with the 9th-grade reading/vocab lane.
  - `staar_2025_rationales::english-ii`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 53
    Existing track ids: col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English II aligns with the 10th-grade reading/vocab lane.
  - `staar_2025_rationales::grade-6-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 51
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 math fits the Class 6 Math ladder directly.
  - `staar_2025_rationales::grade-4-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 48
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 math fits the Class 4 Math ladder directly.
  - `staar_2025_rationales::grade-7-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 48
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 RLA fits the 7th-grade reading track directly.
  - `staar_2025_rationales::grade-6-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 RLA fits the 6th-grade reading track directly.
  - `staar_2025_rationales::grade-8-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 RLA fits the 8th-grade reading track directly.
  - `staar_2025_rationales::grade-3-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 43
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 math fits the Class 3 Math ladder directly.
  - `staar_2025_rationales::grade-3-rla`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 RLA has no clean live home yet and should seed a dedicated 3rd-grade reading track.
  - `staar_2025_rationales::grade-4-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 RLA fits the 4th-grade reading track directly.
  - `staar_2025_rationales::grade-5-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 RLA fits the 5th-grade reading track directly.
  - `staar_2025_rationales::grade-8-social-studies`
    Family: school-stage-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 40
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Grade 8 social studies is close to U.S. history but still broad enough to treat as support.
  - `staar_2025_rationales::grade-8-science`
    Family: school-science-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 39
    Existing track ids: middleSchoolEarthSpace
    Proposed tracks: none
    Notes: Grade 8 science is a strong fit for the middle-school earth and space science lane.
  - `staar_2025_rationales::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 39
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Prefer general high-school biology once fully wired; AP Biology is only a fallback.
  - `staar_2025_rationales::grade-5-science`
    Family: school-science-support
    Status: map-now; Confidence: medium
    Scope: collections; Matched questions: 31
    Existing track ids: scienceYear5
    Proposed tracks: none
    Notes: Grade 5 science is a reasonable direct fit to the Year 5 science discovery lane.

### OpenSAT / PineSAT API

- Folder: `opensat`
- Questions/tasks: 1200
- License: See OpenSAT repository and PineSAT public API
- Covered by manifest: 1200 (100%)
- Entries:

  - `opensat::english`
    Family: exam-prep
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 799
    Existing track ids: none
    Proposed tracks: col-sat-reading-writing (SAT Reading and Writing)
    Notes: SAT English should seed a dedicated SAT Reading and Writing track rather than being diluted elsewhere.
  - `opensat::math`
    Family: exam-prep
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 401
    Existing track ids: col-sat-math
    Proposed tracks: none
    Notes: SAT math questions have a clean existing home in the SAT math track.

### Texas STAAR 2023 redesign practice tests

- Folder: `staar_2023_redesign`
- Questions/tasks: 1069
- License: unspecified
- Covered by manifest: 1069 (100%)
- Entries:

  - `staar_2023_redesign::spanish-variants`
    Family: school-stage-support
    Status: hold; Confidence: high
    Scope: collections; Matched questions: 256
    Existing track ids: none
    Proposed tracks: none
    Notes: Spanish-language variants are valuable, but there is no clean live Spanish track family yet.
  - `staar_2023_redesign::grade-8-science`
    Family: school-science-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 66
    Existing track ids: middleSchoolEarthSpace
    Proposed tracks: none
    Notes: Grade 8 science is a strong fit for the middle-school earth and space science lane.
  - `staar_2023_redesign::english-i`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English I aligns with the 9th-grade reading/vocab lane.
  - `staar_2023_redesign::english-ii`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English II aligns with the 10th-grade reading/vocab lane.
  - `staar_2023_redesign::algebra-i`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 51
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Algebra I is a direct fit to the existing Algebra 1 track.
  - `staar_2023_redesign::grade-7-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 RLA fits the 7th-grade reading track directly.
  - `staar_2023_redesign::grade-6-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 45
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 RLA fits the 6th-grade reading track directly.
  - `staar_2023_redesign::grade-8-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 45
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 RLA fits the 8th-grade reading track directly.
  - `staar_2023_redesign::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 45
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Prefer general high-school biology once fully wired; AP Biology is only a fallback.
  - `staar_2023_redesign::grade-7-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 42
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 math fits the existing 7th-grade math track directly.
  - `staar_2023_redesign::grade-8-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 math fits the existing 8th-grade math track directly.
  - `staar_2023_redesign::grade-3-rla`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 RLA has no clean live home yet and should seed a dedicated 3rd-grade reading track.
  - `staar_2023_redesign::grade-4-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 RLA fits the 4th-grade reading track directly.
  - `staar_2023_redesign::grade-5-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 RLA fits the 5th-grade reading track directly.
  - `staar_2023_redesign::grade-8-social-studies`
    Family: school-stage-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 40
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Grade 8 social studies is close to U.S. history but still broad enough to treat as support.
  - `staar_2023_redesign::grade-6-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 math fits the Class 6 Math ladder directly.
  - `staar_2023_redesign::grade-5-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 math fits the Class 5 Math ladder directly.
  - `staar_2023_redesign::grade-4-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 32
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 math fits the Class 4 Math ladder directly.
  - `staar_2023_redesign::grade-5-science`
    Family: school-science-support
    Status: map-now; Confidence: medium
    Scope: collections; Matched questions: 32
    Existing track ids: scienceYear5
    Proposed tracks: none
    Notes: Grade 5 science is a reasonable direct fit to the Year 5 science discovery lane.
  - `staar_2023_redesign::grade-3-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 30
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 math fits the Class 3 Math ladder directly.

### Texas STAAR 2022 released tests

- Folder: `staar_2022`
- Questions/tasks: 952
- License: unspecified
- Covered by manifest: 952 (100%)
- Entries:

  - `staar_2022::english-ii`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 78
    Existing track ids: col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English II aligns with the 10th-grade reading/vocab lane.
  - `staar_2022::grade-8-science`
    Family: school-science-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 71
    Existing track ids: middleSchoolEarthSpace
    Proposed tracks: none
    Notes: Grade 8 science is a strong fit for the middle-school earth and space science lane.
  - `staar_2022::u-s-history`
    Family: school-stage-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 71
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: U.S. History should land in the general U.S. History course, not APUSH by default.
  - `staar_2022::algebra-i`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 63
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Algebra I is a direct fit to the existing Algebra 1 track.
  - `staar_2022::grade-7-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 60
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 RLA fits the 7th-grade reading track directly.
  - `staar_2022::grade-6-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 55
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 RLA fits the 6th-grade reading track directly.
  - `staar_2022::english-i`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 53
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English I aligns with the 9th-grade reading/vocab lane.
  - `staar_2022::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 51
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Prefer general high-school biology once fully wired; AP Biology is only a fallback.
  - `staar_2022::grade-4-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 49
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 RLA fits the 4th-grade reading track directly.
  - `staar_2022::grade-8-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 47
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 math fits the existing 8th-grade math track directly.
  - `staar_2022::grade-8-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 45
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 RLA fits the 8th-grade reading track directly.
  - `staar_2022::grade-7-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 44
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 math fits the existing 7th-grade math track directly.
  - `staar_2022::grade-8-social-studies`
    Family: school-stage-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 44
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Grade 8 social studies is close to U.S. history but still broad enough to treat as support.
  - `staar_2022::grade-4-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 39
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 math fits the Class 4 Math ladder directly.
  - `staar_2022::grade-5-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 39
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 RLA fits the 5th-grade reading track directly.
  - `staar_2022::grade-6-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 38
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 math fits the Class 6 Math ladder directly.
  - `staar_2022::grade-5-science`
    Family: school-science-support
    Status: map-now; Confidence: medium
    Scope: collections; Matched questions: 36
    Existing track ids: scienceYear5
    Proposed tracks: none
    Notes: Grade 5 science is a reasonable direct fit to the Year 5 science discovery lane.
  - `staar_2022::grade-3-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 math fits the Class 3 Math ladder directly.
  - `staar_2022::grade-3-rla`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 RLA has no clean live home yet and should seed a dedicated 3rd-grade reading track.

### Texas STAAR 2021 released tests

- Folder: `staar_2021`
- Questions/tasks: 529
- License: unspecified
- Covered by manifest: 529 (100%)
- Entries:

  - `staar_2021::u-s-history`
    Family: school-stage-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 70
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: This is a direct fit for the general U.S. History course, not APUSH by default.
  - `staar_2021::science-general`
    Family: school-science-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 70
    Existing track ids: scienceYear5, middleSchoolEarthSpace, col-high-school-biology
    Proposed tracks: none
    Notes: Older Texas science collections are broad support banks rather than precise grade placements.
  - `staar_2021::math-general`
    Family: school-math-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 59
    Existing track ids: class5Math, class6Math, col-class-7-math, col-class-8-math
    Proposed tracks: none
    Notes: Older Texas math collections are not grade-specific enough to map live with high confidence.
  - `staar_2021::english-i`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 56
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English I aligns with the 9th-grade reading/vocab lane.
  - `staar_2021::algebra-i`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 54
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Algebra I is a clean direct fit to the existing Algebra 1 track.
  - `staar_2021::english-ii`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English II aligns with the 10th-grade reading/vocab lane.
  - `staar_2021::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 50
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Prefer the general high-school biology lane; AP Biology is only a secondary fallback.
  - `staar_2021::reading-general`
    Family: school-reading-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 44
    Existing track ids: readingVocab4th, readingVocab5th, readingVocab6th, col-7th-grade-reading-and-vocab, col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Older Texas reading collections are broad support banks rather than precise grade placements.
  - `staar_2021::social-studies-general`
    Family: school-stage-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 44
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Generic social-studies slices need finer curation before live exposure.
  - `staar_2021::writing-general`
    Family: school-reading-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 30
    Existing track ids: col-9th-grade-reading-and-vocab, col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Writing is useful support material, but too broad to map to one exact ladder rung.

### Texas STAAR 2018 released tests

- Folder: `staar_2018`
- Questions/tasks: 502
- License: unspecified
- Covered by manifest: 502 (100%)
- Entries:

  - `staar_2018::science-general`
    Family: school-science-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 70
    Existing track ids: scienceYear5, middleSchoolEarthSpace, col-high-school-biology
    Proposed tracks: none
    Notes: Older Texas science collections are broad support banks rather than precise grade placements.
  - `staar_2018::u-s-history`
    Family: school-stage-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 62
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: This is a direct fit for the general U.S. History course, not APUSH by default.
  - `staar_2018::algebra-i`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 58
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Algebra I is a clean direct fit to the existing Algebra 1 track.
  - `staar_2018::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 54
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Prefer the general high-school biology lane; AP Biology is only a secondary fallback.
  - `staar_2018::english-i`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English I aligns with the 9th-grade reading/vocab lane.
  - `staar_2018::english-ii`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English II aligns with the 10th-grade reading/vocab lane.
  - `staar_2018::math-general`
    Family: school-math-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 45
    Existing track ids: class5Math, class6Math, col-class-7-math, col-class-8-math
    Proposed tracks: none
    Notes: Older Texas math collections are not grade-specific enough to map live with high confidence.
  - `staar_2018::reading-general`
    Family: school-reading-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 44
    Existing track ids: readingVocab4th, readingVocab5th, readingVocab6th, col-7th-grade-reading-and-vocab, col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Older Texas reading collections are broad support banks rather than precise grade placements.
  - `staar_2018::social-studies-general`
    Family: school-stage-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 35
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Generic social-studies slices need finer curation before live exposure.
  - `staar_2018::writing-general`
    Family: school-reading-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 30
    Existing track ids: col-9th-grade-reading-and-vocab, col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Writing is useful support material, but too broad to map to one exact ladder rung.

### Texas STAAR 2019 released tests

- Folder: `staar_2019`
- Questions/tasks: 488
- License: unspecified
- Covered by manifest: 488 (100%)
- Entries:

  - `staar_2019::science-general`
    Family: school-science-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 71
    Existing track ids: scienceYear5, middleSchoolEarthSpace, col-high-school-biology
    Proposed tracks: none
    Notes: Older Texas science collections are broad support banks rather than precise grade placements.
  - `staar_2019::algebra-i`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 55
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Algebra I is a clean direct fit to the existing Algebra 1 track.
  - `staar_2019::u-s-history`
    Family: school-stage-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 54
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: This is a direct fit for the general U.S. History course, not APUSH by default.
  - `staar_2019::english-i`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English I aligns with the 9th-grade reading/vocab lane.
  - `staar_2019::english-ii`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English II aligns with the 10th-grade reading/vocab lane.
  - `staar_2019::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 51
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Prefer the general high-school biology lane; AP Biology is only a secondary fallback.
  - `staar_2019::math-general`
    Family: school-math-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 48
    Existing track ids: class5Math, class6Math, col-class-7-math, col-class-8-math
    Proposed tracks: none
    Notes: Older Texas math collections are not grade-specific enough to map live with high confidence.
  - `staar_2019::reading-general`
    Family: school-reading-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 44
    Existing track ids: readingVocab4th, readingVocab5th, readingVocab6th, col-7th-grade-reading-and-vocab, col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Older Texas reading collections are broad support banks rather than precise grade placements.
  - `staar_2019::social-studies-general`
    Family: school-stage-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 31
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Generic social-studies slices need finer curation before live exposure.
  - `staar_2019::writing-general`
    Family: school-reading-support
    Status: support-bank; Confidence: low
    Scope: collections; Matched questions: 30
    Existing track ids: col-9th-grade-reading-and-vocab, col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Writing is useful support material, but too broad to map to one exact ladder rung.

### Texas STAAR 2024 rationales

- Folder: `staar_2024_rationales`
- Questions/tasks: 438
- License: unspecified
- Covered by manifest: 438 (100%)
- Entries:

  - `staar_2024_rationales::spanish-variants`
    Family: school-stage-support
    Status: hold; Confidence: high
    Scope: collections; Matched questions: 84
    Existing track ids: none
    Proposed tracks: none
    Notes: Spanish-language variants are valuable, but there is no clean live Spanish track family yet.
  - `staar_2024_rationales::u-s-history`
    Family: school-stage-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 66
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: U.S. History should land in the general U.S. History course, not APUSH by default.
  - `staar_2024_rationales::algebra-i`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 58
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Algebra I is a direct fit to the existing Algebra 1 track.
  - `staar_2024_rationales::english-ii`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 55
    Existing track ids: col-10th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English II aligns with the 10th-grade reading/vocab lane.
  - `staar_2024_rationales::english-i`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English I aligns with the 9th-grade reading/vocab lane.
  - `staar_2024_rationales::grade-3-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 43
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 math fits the Class 3 Math ladder directly.
  - `staar_2024_rationales::grade-3-rla`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 RLA has no clean live home yet and should seed a dedicated 3rd-grade reading track.
  - `staar_2024_rationales::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 39
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Prefer general high-school biology once fully wired; AP Biology is only a fallback.

### Open Logic Project

- Folder: `open_logic_project`
- Questions/tasks: 430
- License: CC BY 4.0
- Covered by manifest: 430 (100%)
- Entries:

  - `open_logic_project::formal-logic-core`
    Family: logic-philosophy
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 188
    Existing track ids: logicCriticalThinking, philosophy
    Proposed tracks: formalLogic (Formal Logic)
    Notes: This is the cleanest source for a serious logic identity in the product.
  - `open_logic_project::sets-and-proof`
    Family: logic-philosophy
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 95
    Existing track ids: logicCriticalThinking, linearAlgebra, mathematics_extensions
    Proposed tracks: setTheoryAndProof (Set Theory and Proof)
    Notes: These questions deserve their own rigorous reasoning track rather than being diluted into a general philosophy course.
  - `open_logic_project::logic-and-computation`
    Family: logic-philosophy
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 95
    Existing track ids: introCS, dataStructures, software
    Proposed tracks: none
    Notes: These are valuable, but should support CS/theory tracks rather than be exposed raw to general philosophy learners.
  - `open_logic_project::modal-and-counterfactual`
    Family: logic-philosophy
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: philosophy, logicCriticalThinking, philSenior
    Proposed tracks: none
    Notes: This subset strengthens the current philosophy and moral reasoning tracks directly.

### Texas STAAR 2023 paper samplers

- Folder: `staar_2023`
- Questions/tasks: 427
- License: unspecified
- Covered by manifest: 427 (100%)
- Entries:

  - `staar_2023::grade-5-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 64
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 RLA fits the 5th-grade reading track directly.
  - `staar_2023::grade-4-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 55
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 RLA fits the 4th-grade reading track directly.
  - `staar_2023::grade-7-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 42
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 RLA fits the 7th-grade reading track directly.
  - `staar_2023::english-i`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: English I aligns with the 9th-grade reading/vocab lane.
  - `staar_2023::grade-3-rla`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 RLA has no clean live home yet and should seed a dedicated 3rd-grade reading track.
  - `staar_2023::grade-6-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 18
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 RLA fits the 6th-grade reading track directly.
  - `staar_2023::grade-8-rla`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 17
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 RLA fits the 8th-grade reading track directly.
  - `staar_2023::grade-7-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 16
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 math fits the existing 7th-grade math track directly.
  - `staar_2023::grade-8-social-studies`
    Family: school-stage-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 16
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Grade 8 social studies is close to U.S. history but still broad enough to treat as support.
  - `staar_2023::u-s-history`
    Family: school-stage-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 16
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: U.S. History should land in the general U.S. History course, not APUSH by default.
  - `staar_2023::grade-5-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 15
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 math fits the Class 5 Math ladder directly.
  - `staar_2023::grade-8-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 15
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 math fits the existing 8th-grade math track directly.
  - `staar_2023::grade-4-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 14
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 math fits the Class 4 Math ladder directly.
  - `staar_2023::grade-6-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 14
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 math fits the Class 6 Math ladder directly.
  - `staar_2023::algebra-i`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 14
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Algebra I is a direct fit to the existing Algebra 1 track.
  - `staar_2023::grade-8-science`
    Family: school-science-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 13
    Existing track ids: middleSchoolEarthSpace
    Proposed tracks: none
    Notes: Grade 8 science is a strong fit for the middle-school earth and space science lane.
  - `staar_2023::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 12
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Prefer general high-school biology once fully wired; AP Biology is only a fallback.
  - `staar_2023::grade-3-math`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 10
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 math fits the Class 3 Math ladder directly.
  - `staar_2023::grade-5-science`
    Family: school-science-support
    Status: map-now; Confidence: medium
    Scope: collections; Matched questions: 10
    Existing track ids: scienceYear5
    Proposed tracks: none
    Notes: Grade 5 science is a reasonable direct fit to the Year 5 science discovery lane.
  - `staar_2023::spanish-variants`
    Family: school-stage-support
    Status: hold; Confidence: high
    Scope: collections; Matched questions: 10
    Existing track ids: none
    Proposed tracks: none
    Notes: Spanish-language variants are valuable, but there is no clean live Spanish track family yet.

### Introduction to Modern Statistics

- Folder: `openintro_ims`
- Questions/tasks: 368
- License: CC BY-SA 3.0
- Covered by manifest: 368 (100%)
- Entries:

  - `openintro_ims::inference`
    Family: statistics-data-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 142
    Existing track ids: apStatistics, quant, medical
    Proposed tracks: statisticsLab (Statistics Lab)
    Notes: Inference content belongs directly in statistics-heavy tracks and supports quant/medical reasoning well.
  - `openintro_ims::foundations-and-exploration`
    Family: statistics-data-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 128
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: none
    Notes: This slice cleanly strengthens the exploratory and foundations side of the stats/data ladder.
  - `openintro_ims::modeling`
    Family: statistics-data-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 98
    Existing track ids: introDataScience, apStatistics, ml
    Proposed tracks: statisticsLab (Statistics Lab)
    Notes: Modeling is best shared across data-science, statistics, and ML-prep tracks.

### Texas STAAR Alternate 2 2025 released teacher guides

- Folder: `staar_alt2_2025`
- Questions/tasks: 360
- License: unspecified
- Covered by manifest: 360 (100%)
- Entries:

  - `staar_alt2_2025::english-i`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Alternate-format English I should support the 9th-grade reading lane.
  - `staar_alt2_2025::grade-4-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Alternate-format Grade 4 math should support the existing Class 4 Math lane.
  - `staar_alt2_2025::grade-5-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Alternate-format Grade 5 reading should support the existing 5th-grade reading lane.
  - `staar_alt2_2025::grade-5-science`
    Family: school-science-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: scienceYear5
    Proposed tracks: none
    Notes: Alternate-format Grade 5 science should support the existing Year 5 science lane.
  - `staar_alt2_2025::grade-6-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Alternate-format Grade 6 math should support the existing Class 6 Math lane.
  - `staar_alt2_2025::grade-6-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Alternate-format Grade 6 reading should support the existing 6th-grade reading lane.
  - `staar_alt2_2025::grade-7-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Alternate-format Grade 7 reading should support the existing 7th-grade reading lane.
  - `staar_alt2_2025::grade-8-science`
    Family: school-science-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: middleSchoolEarthSpace
    Proposed tracks: none
    Notes: Alternate-format Grade 8 science should support the existing middle-school earth and space lane.
  - `staar_alt2_2025::u-s-history`
    Family: school-stage-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Alternate-format U.S. History should support the main U.S. history lane.
  - `staar_alt2_2025::grade-3-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 19
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Alternate-format Grade 3 math should support, not replace, the main Class 3 Math lane.
  - `staar_alt2_2025::grade-8-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 19
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Alternate-format Grade 8 math should support the existing 8th-grade math lane.
  - `staar_alt2_2025::grade-8-social-studies`
    Family: school-stage-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 19
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Alternate-format Grade 8 social studies is best treated as U.S. history support.
  - `staar_alt2_2025::algebra-i`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 19
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Alternate-format Algebra I should support the main Algebra 1 lane.
  - `staar_alt2_2025::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 19
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Alternate-format biology is useful support, but should not be surfaced raw.
  - `staar_alt2_2025::grade-7-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 18
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Alternate-format Grade 7 math should support the existing 7th-grade math lane.
  - `staar_alt2_2025::grade-8-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 18
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Alternate-format Grade 8 reading should support the existing 8th-grade reading lane.
  - `staar_alt2_2025::grade-3-rla`
    Family: school-reading-support
    Status: seed-new-course; Confidence: medium
    Scope: collections; Matched questions: 17
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Alternate-format Grade 3 RLA reinforces the need for a dedicated 3rd-grade reading lane.
  - `staar_alt2_2025::grade-4-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 16
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Alternate-format Grade 4 reading should support the existing 4th-grade reading lane.

### Texas STAAR Alternate 2 2023 released teacher guides

- Folder: `staar_alt2_2023`
- Questions/tasks: 355
- License: unspecified
- Covered by manifest: 355 (100%)
- Entries:

  - `staar_alt2_2023::english-i`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: col-9th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Alternate-format English I should support the 9th-grade reading lane.
  - `staar_alt2_2023::grade-3-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Alternate-format Grade 3 math should support, not replace, the main Class 3 Math lane.
  - `staar_alt2_2023::grade-4-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Alternate-format Grade 4 math should support the existing Class 4 Math lane.
  - `staar_alt2_2023::grade-4-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Alternate-format Grade 4 reading should support the existing 4th-grade reading lane.
  - `staar_alt2_2023::grade-5-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Alternate-format Grade 5 math should support the existing Class 5 Math lane.
  - `staar_alt2_2023::grade-5-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Alternate-format Grade 5 reading should support the existing 5th-grade reading lane.
  - `staar_alt2_2023::grade-5-science`
    Family: school-science-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: scienceYear5
    Proposed tracks: none
    Notes: Alternate-format Grade 5 science should support the existing Year 5 science lane.
  - `staar_alt2_2023::grade-6-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Alternate-format Grade 6 math should support the existing Class 6 Math lane.
  - `staar_alt2_2023::grade-6-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Alternate-format Grade 6 reading should support the existing 6th-grade reading lane.
  - `staar_alt2_2023::grade-7-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Alternate-format Grade 7 reading should support the existing 7th-grade reading lane.
  - `staar_alt2_2023::grade-8-math`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Alternate-format Grade 8 math should support the existing 8th-grade math lane.
  - `staar_alt2_2023::grade-8-social-studies`
    Family: school-stage-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 20
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Alternate-format Grade 8 social studies is best treated as U.S. history support.
  - `staar_alt2_2023::algebra-i`
    Family: school-math-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: col-algebra-1
    Proposed tracks: none
    Notes: Alternate-format Algebra I should support the main Algebra 1 lane.
  - `staar_alt2_2023::u-s-history`
    Family: school-stage-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 20
    Existing track ids: usHistory
    Proposed tracks: none
    Notes: Alternate-format U.S. History should support the main U.S. history lane.
  - `staar_alt2_2023::grade-3-rla`
    Family: school-reading-support
    Status: seed-new-course; Confidence: medium
    Scope: collections; Matched questions: 19
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Alternate-format Grade 3 RLA reinforces the need for a dedicated 3rd-grade reading lane.
  - `staar_alt2_2023::grade-8-rla`
    Family: school-reading-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 18
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Alternate-format Grade 8 reading should support the existing 8th-grade reading lane.
  - `staar_alt2_2023::grade-8-science`
    Family: school-science-support
    Status: support-bank; Confidence: high
    Scope: collections; Matched questions: 18
    Existing track ids: middleSchoolEarthSpace
    Proposed tracks: none
    Notes: Alternate-format Grade 8 science should support the existing middle-school earth and space lane.
  - `staar_alt2_2023::biology`
    Family: school-science-support
    Status: support-bank; Confidence: medium
    Scope: collections; Matched questions: 4
    Existing track ids: col-high-school-biology, apBiology
    Proposed tracks: none
    Notes: Alternate-format biology is useful support, but should not be surfaced raw.

### NYSED 2017 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2017`
- Questions/tasks: 284
- License: unspecified
- Covered by manifest: 284 (100%)
- Entries:

  - `nysed_math_2017::grade-7`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 53
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 NYSED math fits the 7th-grade math ladder directly.
  - `nysed_math_2017::grade-8`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 49
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 NYSED math fits the 8th-grade math ladder directly.
  - `nysed_math_2017::grade-6`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 48
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 NYSED math fits the Class 6 Math ladder directly.
  - `nysed_math_2017::grade-4`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 NYSED math fits the Class 4 Math ladder directly.
  - `nysed_math_2017::grade-3`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 45
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 NYSED math fits the Class 3 Math ladder directly.
  - `nysed_math_2017::grade-5`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 43
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 NYSED math fits the Class 5 Math ladder directly.

### NYSED 2017 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2017`
- Questions/tasks: 251
- License: unspecified
- Covered by manifest: 251 (100%)
- Entries:

  - `nysed_ela_2017::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2017::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 45
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2017::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 44
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2017::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 41
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2017::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 38
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.
  - `nysed_ela_2017::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.

### NYSED 2023 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2023`
- Questions/tasks: 239
- License: unspecified
- Covered by manifest: 239 (100%)
- Entries:

  - `nysed_ela_2023::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2023::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2023::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 42
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2023::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.
  - `nysed_ela_2023::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2023::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.

### NYSED 2024 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2024`
- Questions/tasks: 237
- License: unspecified
- Covered by manifest: 237 (100%)
- Entries:

  - `nysed_ela_2024::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2024::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 46
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2024::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 39
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2024::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.
  - `nysed_ela_2024::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.
  - `nysed_ela_2024::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.

### NYSED 2015 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2015`
- Questions/tasks: 233
- License: unspecified
- Covered by manifest: 233 (100%)
- Entries:

  - `nysed_ela_2015::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 43
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2015::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 43
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2015::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 42
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2015::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.
  - `nysed_ela_2015::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2015::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.

### NYSED 2025 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2025`
- Questions/tasks: 224
- License: unspecified
- Covered by manifest: 224 (100%)
- Entries:

  - `nysed_ela_2025::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 43
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2025::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 42
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2025::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.
  - `nysed_ela_2025::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2025::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.
  - `nysed_ela_2025::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.

### NYSED 2019 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2019`
- Questions/tasks: 211
- License: unspecified
- Covered by manifest: 211 (100%)
- Entries:

  - `nysed_ela_2019::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 43
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2019::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.
  - `nysed_ela_2019::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2019::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2019::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 31
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2019::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 30
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.

### NYSED 2016 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2016`
- Questions/tasks: 204
- License: unspecified
- Covered by manifest: 204 (100%)
- Entries:

  - `nysed_ela_2016::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.
  - `nysed_ela_2016::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2016::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2016::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 37
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2016::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2016::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.

### NYSED 2022 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2022`
- Questions/tasks: 204
- License: unspecified
- Covered by manifest: 204 (100%)
- Entries:

  - `nysed_math_2022::grade-7`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 38
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 NYSED math fits the 7th-grade math ladder directly.
  - `nysed_math_2022::grade-4`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 NYSED math fits the Class 4 Math ladder directly.
  - `nysed_math_2022::grade-5`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 NYSED math fits the Class 5 Math ladder directly.
  - `nysed_math_2022::grade-6`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 NYSED math fits the Class 6 Math ladder directly.
  - `nysed_math_2022::grade-8`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 NYSED math fits the 8th-grade math ladder directly.
  - `nysed_math_2022::grade-3`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 NYSED math fits the Class 3 Math ladder directly.

### NYSED 2023 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2023`
- Questions/tasks: 197
- License: unspecified
- Covered by manifest: 197 (100%)
- Entries:

  - `nysed_math_2023::grade-8`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 NYSED math fits the 8th-grade math ladder directly.
  - `nysed_math_2023::grade-7`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 NYSED math fits the 7th-grade math ladder directly.
  - `nysed_math_2023::grade-5`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 NYSED math fits the Class 5 Math ladder directly.
  - `nysed_math_2023::grade-6`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 NYSED math fits the Class 6 Math ladder directly.
  - `nysed_math_2023::grade-4`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 32
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 NYSED math fits the Class 4 Math ladder directly.
  - `nysed_math_2023::grade-3`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 NYSED math fits the Class 3 Math ladder directly.

### NYSED 2019 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2019`
- Questions/tasks: 192
- License: unspecified
- Covered by manifest: 192 (100%)
- Entries:

  - `nysed_math_2019::grade-7`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 NYSED math fits the 7th-grade math ladder directly.
  - `nysed_math_2019::grade-8`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 NYSED math fits the 8th-grade math ladder directly.
  - `nysed_math_2019::grade-4`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 NYSED math fits the Class 4 Math ladder directly.
  - `nysed_math_2019::grade-3`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 31
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 NYSED math fits the Class 3 Math ladder directly.
  - `nysed_math_2019::grade-5`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 30
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 NYSED math fits the Class 5 Math ladder directly.
  - `nysed_math_2019::grade-6`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 30
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 NYSED math fits the Class 6 Math ladder directly.

### NYSED 2022 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2022`
- Questions/tasks: 191
- License: unspecified
- Covered by manifest: 191 (100%)
- Entries:

  - `nysed_ela_2022::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 39
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2022::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.
  - `nysed_ela_2022::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2022::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2022::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 25
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2022::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 23
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.

### NYSED 2018 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2018`
- Questions/tasks: 186
- License: unspecified
- Covered by manifest: 186 (100%)
- Entries:

  - `nysed_ela_2018::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 38
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.
  - `nysed_ela_2018::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2018::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2018::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 30
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2018::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 29
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2018::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 19
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.

### NYSED 2018 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2018`
- Questions/tasks: 185
- License: unspecified
- Covered by manifest: 185 (100%)
- Entries:

  - `nysed_math_2018::grade-8`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 35
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 NYSED math fits the 8th-grade math ladder directly.
  - `nysed_math_2018::grade-7`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 34
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 NYSED math fits the 7th-grade math ladder directly.
  - `nysed_math_2018::grade-4`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 31
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 NYSED math fits the Class 4 Math ladder directly.
  - `nysed_math_2018::grade-6`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 30
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 NYSED math fits the Class 6 Math ladder directly.
  - `nysed_math_2018::grade-5`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 29
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 NYSED math fits the Class 5 Math ladder directly.
  - `nysed_math_2018::grade-3`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 26
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 NYSED math fits the Class 3 Math ladder directly.

### NYSED 2025 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2025`
- Questions/tasks: 178
- License: unspecified
- Covered by manifest: 178 (100%)
- Entries:

  - `nysed_math_2025::grade-6`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 NYSED math fits the Class 6 Math ladder directly.
  - `nysed_math_2025::grade-7`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 31
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 NYSED math fits the 7th-grade math ladder directly.
  - `nysed_math_2025::grade-8`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 31
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 NYSED math fits the 8th-grade math ladder directly.
  - `nysed_math_2025::grade-5`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 29
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 NYSED math fits the Class 5 Math ladder directly.
  - `nysed_math_2025::grade-4`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 NYSED math fits the Class 4 Math ladder directly.
  - `nysed_math_2025::grade-3`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 26
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 NYSED math fits the Class 3 Math ladder directly.

### NYSED 2024 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2024`
- Questions/tasks: 170
- License: unspecified
- Covered by manifest: 170 (100%)
- Entries:

  - `nysed_math_2024::grade-7`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 33
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 NYSED math fits the 7th-grade math ladder directly.
  - `nysed_math_2024::grade-6`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 31
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 NYSED math fits the Class 6 Math ladder directly.
  - `nysed_math_2024::grade-5`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 29
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 NYSED math fits the Class 5 Math ladder directly.
  - `nysed_math_2024::grade-4`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 NYSED math fits the Class 4 Math ladder directly.
  - `nysed_math_2024::grade-8`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 25
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 NYSED math fits the 8th-grade math ladder directly.
  - `nysed_math_2024::grade-3`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 24
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 NYSED math fits the Class 3 Math ladder directly.

### NYSED 2021 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2021`
- Questions/tasks: 164
- License: unspecified
- Covered by manifest: 164 (100%)
- Entries:

  - `nysed_ela_2021::grade-3`
    Family: school-reading-support
    Status: seed-new-course; Confidence: high
    Scope: collections; Matched questions: 29
    Existing track ids: none
    Proposed tracks: readingVocab3rd (3rd Grade Reading and Vocab)
    Notes: Grade 3 NYSED ELA should seed a dedicated 3rd-grade reading track.
  - `nysed_ela_2021::grade-5`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: readingVocab5th
    Proposed tracks: none
    Notes: Grade 5 NYSED ELA fits the 5th-grade reading lane directly.
  - `nysed_ela_2021::grade-6`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: readingVocab6th
    Proposed tracks: none
    Notes: Grade 6 NYSED ELA fits the 6th-grade reading lane directly.
  - `nysed_ela_2021::grade-7`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: col-7th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 7 NYSED ELA fits the 7th-grade reading lane directly.
  - `nysed_ela_2021::grade-8`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: col-8th-grade-reading-and-vocab
    Proposed tracks: none
    Notes: Grade 8 NYSED ELA fits the 8th-grade reading lane directly.
  - `nysed_ela_2021::grade-4`
    Family: school-reading-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 23
    Existing track ids: readingVocab4th
    Proposed tracks: none
    Notes: Grade 4 NYSED ELA fits the 4th-grade reading lane directly.

### NYSED 2021 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2021`
- Questions/tasks: 143
- License: unspecified
- Covered by manifest: 143 (100%)
- Entries:

  - `nysed_math_2021::grade-7`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 28
    Existing track ids: col-class-7-math
    Proposed tracks: none
    Notes: Grade 7 NYSED math fits the 7th-grade math ladder directly.
  - `nysed_math_2021::grade-8`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 26
    Existing track ids: col-class-8-math
    Proposed tracks: none
    Notes: Grade 8 NYSED math fits the 8th-grade math ladder directly.
  - `nysed_math_2021::grade-6`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 24
    Existing track ids: class6Math
    Proposed tracks: none
    Notes: Grade 6 NYSED math fits the Class 6 Math ladder directly.
  - `nysed_math_2021::grade-4`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 23
    Existing track ids: class4Math
    Proposed tracks: none
    Notes: Grade 4 NYSED math fits the Class 4 Math ladder directly.
  - `nysed_math_2021::grade-5`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 23
    Existing track ids: class5Math
    Proposed tracks: none
    Notes: Grade 5 NYSED math fits the Class 5 Math ladder directly.
  - `nysed_math_2021::grade-3`
    Family: school-math-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 19
    Existing track ids: class3Math
    Proposed tracks: none
    Notes: Grade 3 NYSED math fits the Class 3 Math ladder directly.

### OpenIntro Labs (Rguroo)

- Folder: `openintro_labs_rguroo`
- Questions/tasks: 116
- License: CC BY-SA 4.0
- Covered by manifest: 116 (100%)
- Entries:

  - `openintro_labs_rguroo::source`
    Family: applied-labs
    Status: hold; Confidence: high
    Scope: source; Matched questions: 116
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: dataLabs (Data Labs)
    Notes: These are strong applied prompts, but they need a lab/task presentation layer rather than the current quiz-card runtime.

### OpenIntro Labs (Stata)

- Folder: `oilabs_stata`
- Questions/tasks: 112
- License: CC BY-SA 3.0
- Covered by manifest: 112 (100%)
- Entries:

  - `oilabs_stata::source`
    Family: applied-labs
    Status: hold; Confidence: high
    Scope: source; Matched questions: 112
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: dataLabs (Data Labs)
    Notes: These are strong applied prompts, but they need a lab/task presentation layer rather than the current quiz-card runtime.

### OpenIntro Labs (jamovi)

- Folder: `oilabs_jamovi`
- Questions/tasks: 111
- License: CC BY-SA 4.0
- Covered by manifest: 111 (100%)
- Entries:

  - `oilabs_jamovi::source`
    Family: applied-labs
    Status: hold; Confidence: high
    Scope: source; Matched questions: 111
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: dataLabs (Data Labs)
    Notes: These are strong applied prompts, but they need a lab/task presentation layer rather than the current quiz-card runtime.

### OpenIntro Labs (JASP)

- Folder: `oilabs_jasp`
- Questions/tasks: 110
- License: CC BY-SA 4.0
- Covered by manifest: 110 (100%)
- Entries:

  - `oilabs_jasp::source`
    Family: applied-labs
    Status: hold; Confidence: high
    Scope: source; Matched questions: 110
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: dataLabs (Data Labs)
    Notes: These are strong applied prompts, but they need a lab/task presentation layer rather than the current quiz-card runtime.

### OpenIntro Labs (tidyverse)

- Folder: `oilabs_tidy`
- Questions/tasks: 109
- License: CC BY-SA 4.0
- Covered by manifest: 109 (100%)
- Entries:

  - `oilabs_tidy::source`
    Family: applied-labs
    Status: hold; Confidence: high
    Scope: source; Matched questions: 109
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: dataLabs (Data Labs)
    Notes: These are strong applied prompts, but they need a lab/task presentation layer rather than the current quiz-card runtime.

### NYSED 2024 Grade 5 and Grade 8 Science Released Questions

- Folder: `nysed_science_2024`
- Questions/tasks: 98
- License: unspecified
- Covered by manifest: 98 (100%)
- Entries:

  - `nysed_science_2024::grade-8`
    Family: school-science-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 58
    Existing track ids: middleSchoolEarthSpace
    Proposed tracks: none
    Notes: Grade 8 NYSED science is a strong fit for the middle-school earth and space lane.
  - `nysed_science_2024::grade-5`
    Family: school-science-support
    Status: map-now; Confidence: medium
    Scope: collections; Matched questions: 40
    Existing track ids: scienceYear5
    Proposed tracks: none
    Notes: Grade 5 NYSED science is a reasonable direct fit for the Year 5 science lane.

### NYSED 2025 Grade 5 and Grade 8 Science Released Questions

- Folder: `nysed_science_2025`
- Questions/tasks: 94
- License: unspecified
- Covered by manifest: 94 (100%)
- Entries:

  - `nysed_science_2025::grade-8`
    Family: school-science-support
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 59
    Existing track ids: middleSchoolEarthSpace
    Proposed tracks: none
    Notes: Grade 8 NYSED science is a strong fit for the middle-school earth and space lane.
  - `nysed_science_2025::grade-5`
    Family: school-science-support
    Status: map-now; Confidence: medium
    Scope: collections; Matched questions: 35
    Existing track ids: scienceYear5
    Proposed tracks: none
    Notes: Grade 5 NYSED science is a reasonable direct fit for the Year 5 science lane.

### IMS Tutorials

- Folder: `ims_tutorials`
- Questions/tasks: 92
- License: CC BY-SA 3.0
- Covered by manifest: 92 (100%)
- Entries:

  - `ims_tutorials::modeling-and-inference`
    Family: statistics-data-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 56
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: none
    Notes: These tutorial MCQs fit the modeling and inference side of the stats ladder directly.
  - `ims_tutorials::data-and-explore`
    Family: statistics-data-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 36
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: none
    Notes: These tutorial MCQs fit the foundational side of the stats ladder directly.

### OpenIntro Statistics

- Folder: `openintro_stats`
- Questions/tasks: 89
- License: CC BY-SA 3.0
- Covered by manifest: 89 (100%)
- Entries:

  - `openintro_stats::foundations`
    Family: statistics-data-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 52
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: none
    Notes: Core foundations content fits directly into the existing statistics ladder.
  - `openintro_stats::inference`
    Family: statistics-data-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 24
    Existing track ids: apStatistics
    Proposed tracks: none
    Notes: Inference chapters belong directly in AP Statistics.
  - `openintro_stats::regression`
    Family: statistics-data-science
    Status: map-now; Confidence: high
    Scope: collections; Matched questions: 13
    Existing track ids: introDataScience, apStatistics
    Proposed tracks: none
    Notes: Regression chapters fit both data-science and statistics pathways.

### OpenIntro Statistics Slides

- Folder: `openintro_stats_slides`
- Questions/tasks: 85
- License: CC BY-SA 3.0
- Covered by manifest: 85 (100%)
- Entries:

  - `openintro_stats_slides::source`
    Family: statistics-data-science
    Status: support-bank; Confidence: medium
    Scope: source; Matched questions: 85
    Existing track ids: apStatistics, introDataScience
    Proposed tracks: none
    Notes: Worth preserving, but the answer extraction is noisier than the main OpenIntro sources.

### Pfizer Pharma Hands-on Exercises

- Folder: `pharma_hands_on`
- Questions/tasks: 72
- License: CC BY 4.0
- Covered by manifest: 72 (100%)
- Entries:

  - `pharma_hands_on::source`
    Family: applied-labs
    Status: hold; Confidence: high
    Scope: source; Matched questions: 72
    Existing track ids: medical, introDataScience
    Proposed tracks: clinicalDataLabs (Clinical Data Labs)
    Notes: Good resource for applied reasoning later, but too task-shaped for direct quiz import today.

