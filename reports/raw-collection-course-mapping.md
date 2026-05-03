# Raw Collection Course Mapping

Generated on 2026-05-03T03:24:16.102Z.

## Overall

- Raw source folders: 47
- Raw mined questions/tasks: 108858
- Map into existing courses now: 33
- Map existing + expand with new families: 3
- Split into new course families: 3
- Hold for labs/resources/later: 7

## Recommended Sequence

1. Map official school assessment sources into existing school tracks.
2. Create focused course families for the large math/logic/CS reservoirs.
3. Hold lab-style and trivia-heavy sources until the quiz-card pipeline is stronger.

## Sources

### OpenTriviaQA

- Folder: `opentriviaqa`
- Questions/tasks: 49716
- Subcollections: 22
- License: CC BY-SA 4.0
- Recommended action: `hold-low-priority`
- Rationale: Massive volume, but too broad and off-brand for Floe’s current specialization without aggressive filtering.
- Best existing track targets: Brain Burners, AP U.S. History, Philosophy
- Proposed new course families: Trivia Sprint, Culture and Media Quiz
- Top candidate track ids: apHistory (14598), ibHistory (14598), brainBurners (4062), logicCriticalThinking (3497), genBio1 (2940), genPhys1 (2940)
- Largest source subcollections: opentriviaqa::music (5579), opentriviaqa::television (5230), opentriviaqa::world (4875), opentriviaqa::movies (4313), opentriviaqa::general (3290), opentriviaqa::celebrities (3196)

### WeBWorK Open Problem Library

- Folder: `webwork_opl`
- Questions/tasks: 22861
- Subcollections: 18
- License: CC BY-NC-SA 3.0
- Recommended action: `split-new-families`
- Rationale: Huge math corpus with weak metadata; best used as a depth reservoir after subject cleanup.
- Best existing track targets: AP Calculus AB, AP Calculus BC, Linear Algebra, Quant Interview Advanced
- Proposed new course families: Contest Math Drills, College Algebra Workout
- Top candidate track ids: genMath1 (3617), apCalculusAB (3117), apCalculusBC (3117), quantAdvanced (2786), linearAlgebra (1677), mathExtensions (698)
- Largest source subcollections: webwork-opl::unknown-subject::unknown-chapter (22688), webwork-opl::webwork::unknown-chapter (47), webwork-opl::zzz-inserted-text::zzz-inserted-text (32), webwork-opl::unknown-subject::groups (26), webwork-opl::webwork::demos (17), webwork-opl::probability::random-variables (14)

### Numbas reusable exams

- Folder: `numbas_exams`
- Questions/tasks: 12063
- Subcollections: 1326
- License: unspecified
- Recommended action: `split-new-families`
- Rationale: Assessment-style math bundles that naturally support diagnostics and chaptered challenge tracks.
- Best existing track targets: AP Calculus AB, AP Calculus BC, Linear Algebra, General Physics I (Mechanics)
- Proposed new course families: Math Diagnostics, Mechanics Drill Sets
- Top candidate track ids: apCalculusAB (1479), apCalculusBC (1479), genMath1 (1479), high_algebra_2 (1405), mathExtensions (1405), linearAlgebra (1405)
- Largest source subcollections: numbas-exam::40148 (174), numbas-exam::39034 (114), numbas-exam::22135 (93), numbas-exam::35505 (82), numbas-exam::40718 (70), numbas-exam::40228 (69)

### Numbas public database

- Folder: `numbas`
- Questions/tasks: 9808
- Subcollections: 1
- License: Mixed open-access licences from reusable public questions
- Recommended action: `split-new-families`
- Rationale: Large math reservoir with decent candidate tags, but too broad to dump into one existing course.
- Best existing track targets: AP Calculus AB, AP Calculus BC, AP Statistics, Linear Algebra
- Proposed new course families: Engineering Mechanics, Algebra Workout, Quantitative Methods
- Top candidate track ids: high_algebra_2 (2296), mathExtensions (2296), quantAdvanced (980), apCalculusAB (841), apCalculusBC (841), genMath1 (841)
- Largest source subcollections: numbas::reuse-questions (9808)

### OpenDSA

- Folder: `opendsa`
- Questions/tasks: 1257
- Subcollections: 26
- License: MIT
- Recommended action: `map-and-expand`
- Rationale: Strong CS fit and already tagged toward existing computing courses.
- Best existing track targets: Introduction to Computer Science (Python), Software Engineering Interview Prep, Data Structures, Logic & Critical Thinking
- Proposed new course families: Algorithms Drills
- Top candidate track ids: introCS (1257), software (965), dataStructures (330), logicCriticalThinking (212)
- Largest source subcollections: open-dsa::introtosoftwaredesign (249), open-dsa::swdesignanddatastructs (233), open-dsa::mengbridgecourse (141), open-dsa::sorting (131), open-dsa::pl (121), open-dsa::list (65)

### Texas STAAR 2025 rationales

- Folder: `staar_2025_rationales`
- Questions/tasks: 1254
- Subcollections: 27
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Official rationale material, useful after cleanup but still belongs in current school-stage tracks.
- Best existing track targets: NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), AP U.S. History, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: high_algebra_1 (517), satReadingWriting (492), logicCriticalThinking (492), naplanYear5 (455), naplanYear7 (455), spanish (299)
- Largest source subcollections: staar-2025-rationale::u-s-history (65), staar-2025-rationale::algebra-i (62), staar-2025-rationale::grade-8-math (60), staar-2025-rationale::grade-7-math (55), staar-2025-rationale::grade-5-spanish-math (54), staar-2025-rationale::english-i (53)

### OpenSAT / PineSAT API

- Folder: `opensat`
- Questions/tasks: 1200
- Subcollections: 2
- License: See OpenSAT repository and PineSAT public API
- Recommended action: `map-existing`
- Rationale: Already points cleanly at SAT, reading/writing, and math-prep style tracks.
- Best existing track targets: SAT, Logic & Critical Thinking, 11+ Exam Prep (UK), AP Calculus AB
- Proposed new course families: none
- Top candidate track ids: sat (1200), logicCriticalThinking (799), satReadingWriting (625), high_algebra_2 (425), elevenPlus (401), apCalculusAB (401)
- Largest source subcollections: opensat::english (799), opensat::math (401)

### Texas STAAR 2023 redesign practice tests

- Folder: `staar_2023_redesign`
- Questions/tasks: 1069
- Subcollections: 26
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strongest Texas batch for school-stage enrichment because the redesign forms are large and mixed-subject.
- Best existing track targets: NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), AP U.S. History, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (487), logicCriticalThinking (487), high_algebra_1 (367), naplanYear5 (316), naplanYear7 (316), spanish (256)
- Largest source subcollections: staar-2023-redesign::grade-8-science (66), staar-2023-redesign::english-i (52), staar-2023-redesign::english-ii (52), staar-2023-redesign::algebra-i (51), staar-2023-redesign::grade-7-rla (46), staar-2023-redesign::biology (45)

### Texas STAAR 2022 released tests

- Folder: `staar_2022`
- Questions/tasks: 952
- Subcollections: 19
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Good enrichment for school-stage reading, math, science, and history tracks we already have.
- Best existing track targets: NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), AP U.S. History, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (413), logicCriticalThinking (413), high_algebra_1 (266), naplanYear5 (203), naplanYear7 (203), apHistory (115)
- Largest source subcollections: staar-2022::english-ii (78), staar-2022::grade-8-science (71), staar-2022::u-s-history (71), staar-2022::algebra-i (63), staar-2022::grade-7-rla (60), staar-2022::grade-6-rla (55)

### Texas STAAR 2021 released tests

- Folder: `staar_2021`
- Questions/tasks: 529
- Subcollections: 10
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Good enrichment for school-stage reading, math, science, and history tracks we already have.
- Best existing track targets: NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), AP U.S. History, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (182), logicCriticalThinking (182), apHistory (114), usHistory (114), high_algebra_1 (113), middleSchoolEarthSpace (70)
- Largest source subcollections: staar-2021::science (70), staar-2021::u-s-history (70), staar-2021::math (59), staar-2021::english-i (56), staar-2021::algebra-i (54), staar-2021::english-ii (52)

### Texas STAAR 2018 released tests

- Folder: `staar_2018`
- Questions/tasks: 502
- Subcollections: 10
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Good enrichment for school-stage reading, math, science, and history tracks we already have.
- Best existing track targets: NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), AP U.S. History, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (178), logicCriticalThinking (178), high_algebra_1 (103), apHistory (97), usHistory (97), middleSchoolEarthSpace (70)
- Largest source subcollections: staar-2018::science (70), staar-2018::u-s-history (62), staar-2018::algebra-i (58), staar-2018::biology (54), staar-2018::english-i (52), staar-2018::english-ii (52)

### Texas STAAR 2019 released tests

- Folder: `staar_2019`
- Questions/tasks: 488
- Subcollections: 10
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Good enrichment for school-stage reading, math, science, and history tracks we already have.
- Best existing track targets: NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), AP U.S. History, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (178), logicCriticalThinking (178), high_algebra_1 (103), apHistory (85), usHistory (85), middleSchoolEarthSpace (71)
- Largest source subcollections: staar-2019::science (71), staar-2019::algebra-i (55), staar-2019::u-s-history (54), staar-2019::english-i (52), staar-2019::english-ii (52), staar-2019::biology (51)

### Texas STAAR 2024 rationales

- Folder: `staar_2024_rationales`
- Questions/tasks: 438
- Subcollections: 9
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Official rationale material, useful after cleanup but still belongs in current school-stage tracks.
- Best existing track targets: NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), AP U.S. History, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (189), logicCriticalThinking (189), high_algebra_1 (144), naplanYear5 (86), naplanYear7 (86), spanish (84)
- Largest source subcollections: staar-2024-rationale::u-s-history (66), staar-2024-rationale::algebra-i (58), staar-2024-rationale::english-ii (55), staar-2024-rationale::english-i (52), staar-2024-rationale::grade-3-math (43), staar-2024-rationale::grade-3-spanish-math (43)

### Open Logic Project

- Folder: `open_logic_project`
- Questions/tasks: 430
- Subcollections: 17
- License: CC BY 4.0
- Recommended action: `map-and-expand`
- Rationale: Excellent philosophy/logic source and one of the cleanest fits with Floe’s specialization.
- Best existing track targets: Philosophy, Logic & Critical Thinking, Moral Crossroads
- Proposed new course families: Formal Logic, Set Theory and Proof
- Top candidate track ids: philosophy (430), logicCriticalThinking (298), dataStructures (72), software (72), philSenior (66), linearAlgebra (39)
- Largest source subcollections: open-logic-project::first-order-logic (92), open-logic-project::sets-functions-relations (73), open-logic-project::normal-modal-logic (45), open-logic-project::lambda-calculus (27), open-logic-project::turing-machines (27), open-logic-project::incompleteness (23)

### Texas STAAR 2023 paper samplers

- Folder: `staar_2023`
- Questions/tasks: 427
- Subcollections: 20
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Good enrichment for school-stage tracks; sampler-sized but still useful.
- Best existing track targets: NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), AP U.S. History, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (216), logicCriticalThinking (216), high_algebra_1 (150), naplanYear5 (136), naplanYear7 (136), middleSchoolEarthSpace (33)
- Largest source subcollections: staar-2023::grade-5-rla (64), staar-2023::grade-4-rla (55), staar-2023::grade-7-rla (42), staar-2023::english-i (36), staar-2023::grade-3-rla (20), staar-2023::grade-6-rla (18)

### Introduction to Modern Statistics

- Folder: `openintro_ims`
- Questions/tasks: 368
- Subcollections: 21
- License: CC BY-SA 3.0
- Recommended action: `map-and-expand`
- Rationale: Strong statistics/data science fit with some quant and medical overlap.
- Best existing track targets: AP Statistics, Introduction to Data Science, Quant Interview Core, Medical Reasoning
- Proposed new course families: Statistics Lab
- Top candidate track ids: apStatistics (368), introDataScience (368), quant (184), medical (184), ml (98), quantAdvanced (98)
- Largest source subcollections: openintro-ims::model-slr (32), openintro-ims::data-design (30), openintro-ims::inference-one-prop (30), openintro-ims::explore-numerical (26), openintro-ims::inference-two-props (22), openintro-ims::inference-one-mean (22)

### Texas STAAR Alternate 2 2025 released teacher guides

- Folder: `staar_alt2_2025`
- Questions/tasks: 360
- Subcollections: 18
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Best treated as differentiated primary/high support material inside existing stage-based tracks.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (147), naplanYear7 (78), naplanYear5 (56), naplanYear9 (54), scienceDiscovery (40), middleSchoolEarthSpace (40)
- Largest source subcollections: staar-alt2-2025::english-i (36), staar-alt2-2025::grade-4-mathematics-teacher-guide (20), staar-alt2-2025::grade-5-rla-teacher-guide (20), staar-alt2-2025::grade-5-science-teacher-guide (20), staar-alt2-2025::grade-6-mathematics-teacher-guide (20), staar-alt2-2025::grade-6-rla-teacher-guide (20)

### Texas STAAR Alternate 2 2023 released teacher guides

- Folder: `staar_alt2_2023`
- Questions/tasks: 355
- Subcollections: 18
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Best treated as differentiated primary/high support material inside existing stage-based tracks.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (153), naplanYear5 (80), naplanYear7 (60), naplanYear9 (54), high_algebra_1 (40), usHistory (40)
- Largest source subcollections: staar-alt2-2023::english-i (36), staar-alt2-2023::grade-3-math-teacher-test (20), staar-alt2-2023::grade-4-math-teacher-test (20), staar-alt2-2023::grade-4-reading-teacher-book (20), staar-alt2-2023::grade-5-math-teacher-book (20), staar-alt2-2023::grade-5-reading-teacher-book (20)

### NYSED 2017 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2017`
- Questions/tasks: 284
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strong grade-banded math enrichment already aligned to primary/high school math ladders.
- Best existing track targets: Class 3 Math, Class 4 Math, Class 5 Math, Class 6 Math, Class 7 Math, Class 8 Math
- Proposed new course families: none
- Top candidate track ids: naplanYear7 (101), naplanYear5 (89), col-class-7-math (53), col-class-8-math (49), high_algebra_1 (49), col-class-6-math (48)
- Largest source subcollections: nysed-math-2017::grade-7 (53), nysed-math-2017::grade-8 (49), nysed-math-2017::grade-6 (48), nysed-math-2017::grade-4 (46), nysed-math-2017::grade-3 (45), nysed-math-2017::grade-5 (43)

### NYSED 2017 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2017`
- Questions/tasks: 251
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (251), naplanYear7 (90), naplanYear5 (75), naplanYear9 (45), naplanYear3 (41)
- Largest source subcollections: nysed-ela-2017::grade-7 (46), nysed-ela-2017::grade-8 (45), nysed-ela-2017::grade-6 (44), nysed-ela-2017::grade-3 (41), nysed-ela-2017::grade-4 (38), nysed-ela-2017::grade-5 (37)

### NYSED 2023 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2023`
- Questions/tasks: 239
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (239), naplanYear7 (81), naplanYear5 (70), naplanYear9 (46), naplanYear3 (42)
- Largest source subcollections: nysed-ela-2023::grade-7 (46), nysed-ela-2023::grade-8 (46), nysed-ela-2023::grade-3 (42), nysed-ela-2023::grade-5 (37), nysed-ela-2023::grade-6 (35), nysed-ela-2023::grade-4 (33)

### NYSED 2024 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2024`
- Questions/tasks: 237
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (237), naplanYear7 (85), naplanYear5 (72), naplanYear9 (46), naplanYear3 (34)
- Largest source subcollections: nysed-ela-2024::grade-7 (46), nysed-ela-2024::grade-8 (46), nysed-ela-2024::grade-6 (39), nysed-ela-2024::grade-5 (37), nysed-ela-2024::grade-4 (35), nysed-ela-2024::grade-3 (34)

### NYSED 2015 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2015`
- Questions/tasks: 233
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (233), naplanYear7 (78), naplanYear5 (69), naplanYear3 (43), naplanYear9 (43)
- Largest source subcollections: nysed-ela-2015::grade-3 (43), nysed-ela-2015::grade-8 (43), nysed-ela-2015::grade-6 (42), nysed-ela-2015::grade-4 (36), nysed-ela-2015::grade-7 (36), nysed-ela-2015::grade-5 (33)

### NYSED 2025 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2025`
- Questions/tasks: 224
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (224), naplanYear7 (76), naplanYear5 (71), naplanYear9 (42), naplanYear3 (35)
- Largest source subcollections: nysed-ela-2025::grade-7 (43), nysed-ela-2025::grade-8 (42), nysed-ela-2025::grade-5 (37), nysed-ela-2025::grade-3 (35), nysed-ela-2025::grade-4 (34), nysed-ela-2025::grade-6 (33)

### NYSED 2019 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2019`
- Questions/tasks: 211
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (211), naplanYear7 (70), naplanYear5 (67), naplanYear9 (43), naplanYear3 (31)
- Largest source subcollections: nysed-ela-2019::grade-8 (43), nysed-ela-2019::grade-5 (37), nysed-ela-2019::grade-7 (37), nysed-ela-2019::grade-6 (33), nysed-ela-2019::grade-3 (31), nysed-ela-2019::grade-4 (30)

### NYSED 2016 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2016`
- Questions/tasks: 204
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (204), naplanYear7 (74), naplanYear5 (65), naplanYear9 (37), naplanYear3 (28)
- Largest source subcollections: nysed-ela-2016::grade-5 (37), nysed-ela-2016::grade-6 (37), nysed-ela-2016::grade-7 (37), nysed-ela-2016::grade-8 (37), nysed-ela-2016::grade-3 (28), nysed-ela-2016::grade-4 (28)

### NYSED 2022 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2022`
- Questions/tasks: 204
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strong grade-banded math enrichment already aligned to primary/high school math ladders.
- Best existing track targets: Class 3 Math, Class 4 Math, Class 5 Math, Class 6 Math, Class 7 Math, Class 8 Math
- Proposed new course families: none
- Top candidate track ids: naplanYear7 (73), naplanYear5 (70), col-class-7-math (38), col-class-4-math (35), col-class-5-math (35), col-class-6-math (35)
- Largest source subcollections: nysed-math-2022::grade-7 (38), nysed-math-2022::grade-4 (35), nysed-math-2022::grade-5 (35), nysed-math-2022::grade-6 (35), nysed-math-2022::grade-8 (33), nysed-math-2022::grade-3 (28)

### NYSED 2023 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2023`
- Questions/tasks: 197
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strong grade-banded math enrichment already aligned to primary/high school math ladders.
- Best existing track targets: Class 3 Math, Class 4 Math, Class 5 Math, Class 6 Math, Class 7 Math, Class 8 Math
- Proposed new course families: none
- Top candidate track ids: naplanYear7 (68), naplanYear5 (65), col-class-8-math (36), high_algebra_1 (36), col-class-7-math (35), col-class-5-math (33)
- Largest source subcollections: nysed-math-2023::grade-8 (36), nysed-math-2023::grade-7 (35), nysed-math-2023::grade-5 (33), nysed-math-2023::grade-6 (33), nysed-math-2023::grade-4 (32), nysed-math-2023::grade-3 (28)

### NYSED 2019 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2019`
- Questions/tasks: 192
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strong grade-banded math enrichment already aligned to primary/high school math ladders.
- Best existing track targets: Class 3 Math, Class 4 Math, Class 5 Math, Class 6 Math, Class 7 Math, Class 8 Math
- Proposed new course families: none
- Top candidate track ids: naplanYear7 (64), naplanYear5 (63), col-class-7-math (34), col-class-8-math (34), high_algebra_1 (34), col-class-4-math (33)
- Largest source subcollections: nysed-math-2019::grade-7 (34), nysed-math-2019::grade-8 (34), nysed-math-2019::grade-4 (33), nysed-math-2019::grade-3 (31), nysed-math-2019::grade-5 (30), nysed-math-2019::grade-6 (30)

### NYSED 2022 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2022`
- Questions/tasks: 191
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (191), naplanYear7 (68), naplanYear5 (59), naplanYear9 (39), naplanYear3 (25)
- Largest source subcollections: nysed-ela-2022::grade-8 (39), nysed-ela-2022::grade-5 (36), nysed-ela-2022::grade-6 (34), nysed-ela-2022::grade-7 (34), nysed-ela-2022::grade-3 (25), nysed-ela-2022::grade-4 (23)

### NYSED 2018 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2018`
- Questions/tasks: 186
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (186), naplanYear7 (70), naplanYear5 (57), naplanYear3 (30), naplanYear9 (29)
- Largest source subcollections: nysed-ela-2018::grade-5 (38), nysed-ela-2018::grade-6 (36), nysed-ela-2018::grade-7 (34), nysed-ela-2018::grade-3 (30), nysed-ela-2018::grade-8 (29), nysed-ela-2018::grade-4 (19)

### NYSED 2018 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2018`
- Questions/tasks: 185
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strong grade-banded math enrichment already aligned to primary/high school math ladders.
- Best existing track targets: Class 3 Math, Class 4 Math, Class 5 Math, Class 6 Math, Class 7 Math, Class 8 Math
- Proposed new course families: none
- Top candidate track ids: naplanYear7 (64), naplanYear5 (60), col-class-8-math (35), high_algebra_1 (35), col-class-7-math (34), col-class-4-math (31)
- Largest source subcollections: nysed-math-2018::grade-8 (35), nysed-math-2018::grade-7 (34), nysed-math-2018::grade-4 (31), nysed-math-2018::grade-6 (30), nysed-math-2018::grade-5 (29), nysed-math-2018::grade-3 (26)

### NYSED 2025 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2025`
- Questions/tasks: 178
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strong grade-banded math enrichment already aligned to primary/high school math ladders.
- Best existing track targets: Class 3 Math, Class 4 Math, Class 5 Math, Class 6 Math, Class 7 Math, Class 8 Math
- Proposed new course families: none
- Top candidate track ids: naplanYear7 (64), naplanYear5 (57), col-class-6-math (33), col-class-7-math (31), col-class-8-math (31), high_algebra_1 (31)
- Largest source subcollections: nysed-math-2025::grade-6 (33), nysed-math-2025::grade-7 (31), nysed-math-2025::grade-8 (31), nysed-math-2025::grade-5 (29), nysed-math-2025::grade-4 (28), nysed-math-2025::grade-3 (26)

### NYSED 2024 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2024`
- Questions/tasks: 170
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strong grade-banded math enrichment already aligned to primary/high school math ladders.
- Best existing track targets: Class 3 Math, Class 4 Math, Class 5 Math, Class 6 Math, Class 7 Math, Class 8 Math
- Proposed new course families: none
- Top candidate track ids: naplanYear7 (64), naplanYear5 (57), col-class-7-math (33), col-class-6-math (31), col-class-5-math (29), col-class-4-math (28)
- Largest source subcollections: nysed-math-2024::grade-7 (33), nysed-math-2024::grade-6 (31), nysed-math-2024::grade-5 (29), nysed-math-2024::grade-4 (28), nysed-math-2024::grade-8 (25), nysed-math-2024::grade-3 (24)

### NYSED 2021 Grades 3-8 English Language Arts Released Questions

- Folder: `nysed_ela_2021`
- Questions/tasks: 164
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.
- Best existing track targets: NAPLAN Prep (Year 3), NAPLAN Prep (Year 5), NAPLAN Prep (Year 7), NAPLAN Prep (Year 9)
- Proposed new course families: none
- Top candidate track ids: satReadingWriting (164), naplanYear7 (56), naplanYear5 (51), naplanYear3 (29), naplanYear9 (28)
- Largest source subcollections: nysed-ela-2021::grade-3 (29), nysed-ela-2021::grade-5 (28), nysed-ela-2021::grade-6 (28), nysed-ela-2021::grade-7 (28), nysed-ela-2021::grade-8 (28), nysed-ela-2021::grade-4 (23)

### NYSED 2021 Grades 3-8 Mathematics Released Questions

- Folder: `nysed_math_2021`
- Questions/tasks: 143
- Subcollections: 6
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Strong grade-banded math enrichment already aligned to primary/high school math ladders.
- Best existing track targets: Class 3 Math, Class 4 Math, Class 5 Math, Class 6 Math, Class 7 Math, Class 8 Math
- Proposed new course families: none
- Top candidate track ids: naplanYear7 (52), naplanYear5 (46), col-class-7-math (28), col-class-8-math (26), high_algebra_1 (26), col-class-6-math (24)
- Largest source subcollections: nysed-math-2021::grade-7 (28), nysed-math-2021::grade-8 (26), nysed-math-2021::grade-6 (24), nysed-math-2021::grade-4 (23), nysed-math-2021::grade-5 (23), nysed-math-2021::grade-3 (19)

### OpenIntro Labs (Rguroo)

- Folder: `openintro_labs_rguroo`
- Questions/tasks: 116
- Subcollections: 10
- License: CC BY-SA 4.0
- Recommended action: `hold-for-labs`
- Rationale: Applied lab prompts rather than clean question cards.
- Best existing track targets: Introduction to Data Science, AP Statistics
- Proposed new course families: Data Labs
- Top candidate track ids: apStatistics (116), introDataScience (116), quantAdvanced (101), quant (72), logicCriticalThinking (63), ml (37)
- Largest source subcollections: openintro-labs-rguroo::09_multiple_regression (19), openintro-labs-rguroo::06_inf_for_categorical_data (15), openintro-labs-rguroo::07_inf_for_numerical_data (14), openintro-labs-rguroo::08_simple_regression (12), openintro-labs-rguroo::04_normal_distribution (11), openintro-labs-rguroo::05b_confidence_intervals (11)

### OpenIntro Labs (Stata)

- Folder: `oilabs_stata`
- Questions/tasks: 112
- Subcollections: 10
- License: CC BY-SA 3.0
- Recommended action: `hold-for-labs`
- Rationale: Applied lab prompts rather than clean question cards.
- Best existing track targets: Introduction to Data Science, AP Statistics
- Proposed new course families: Data Labs
- Top candidate track ids: apStatistics (112), introDataScience (112), quantAdvanced (91), logicCriticalThinking (64), quant (63), ml (34)
- Largest source subcollections: oilabs-stata::10_multiple_regression (19), oilabs-stata::08_inf_for_categorical_data (16), oilabs-stata::09_simple_regression (13), oilabs-stata::05_sampling_distributions (11), oilabs-stata::07_inf_for_numerical_data (11), oilabs-stata::02_intro_to_data (9)

### OpenIntro Labs (jamovi)

- Folder: `oilabs_jamovi`
- Questions/tasks: 111
- Subcollections: 10
- License: CC BY-SA 4.0
- Recommended action: `hold-for-labs`
- Rationale: Applied lab prompts rather than clean question cards.
- Best existing track targets: Introduction to Data Science, AP Statistics
- Proposed new course families: Data Labs
- Top candidate track ids: apStatistics (111), introDataScience (111), quantAdvanced (89), logicCriticalThinking (63), quant (59), ml (35)
- Largest source subcollections: oilabs-jamovi::09_multiple_regression (19), oilabs-jamovi::07_inf_for_numerical_data (13), oilabs-jamovi::08_simple_regression (13), oilabs-jamovi::05b_confidence_intervals (12), oilabs-jamovi::06_inf_for_categorical_data (11), oilabs-jamovi::05a_sampling_distributions (10)

### OpenIntro Labs (JASP)

- Folder: `oilabs_jasp`
- Questions/tasks: 110
- Subcollections: 10
- License: CC BY-SA 4.0
- Recommended action: `hold-for-labs`
- Rationale: Applied lab prompts rather than clean question cards.
- Best existing track targets: Introduction to Data Science, AP Statistics
- Proposed new course families: Data Labs
- Top candidate track ids: apStatistics (110), introDataScience (110), quantAdvanced (90), logicCriticalThinking (64), quant (63), ml (32)
- Largest source subcollections: oilabs-jasp::09_multiple_regression (19), oilabs-jasp::07_inf_for_numerical_data (13), oilabs-jasp::05b_confidence_intervals (12), oilabs-jasp::05a_sampling_distributions (11), oilabs-jasp::06_inf_for_categorical_data (11), oilabs-jasp::08_simple_regression (10)

### OpenIntro Labs (tidyverse)

- Folder: `oilabs_tidy`
- Questions/tasks: 109
- Subcollections: 10
- License: CC BY-SA 4.0
- Recommended action: `hold-for-labs`
- Rationale: Applied lab prompts, valuable as resources but not app-native quiz cards yet.
- Best existing track targets: Introduction to Data Science, AP Statistics
- Proposed new course families: Data Labs
- Top candidate track ids: apStatistics (109), introDataScience (109), quantAdvanced (86), logicCriticalThinking (65), quant (59), ml (31)
- Largest source subcollections: oilabs-tidy::09_multiple_regression (19), oilabs-tidy::07_inf_for_numerical_data (14), oilabs-tidy::05b_confidence_intervals (12), oilabs-tidy::06_inf_for_categorical_data (11), oilabs-tidy::05a_sampling_distributions (10), oilabs-tidy::08_simple_regression (10)

### NYSED 2024 Grade 5 and Grade 8 Science Released Questions

- Folder: `nysed_science_2024`
- Questions/tasks: 98
- Subcollections: 2
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Direct fit for school science tracks that already exist.
- Best existing track targets: CK-12 Science & Math, Khan Academy Foundations, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: ck12 (98), khanacademy (98), middleSchoolEarthSpace (58), scienceYear5 (40)
- Largest source subcollections: nysed-science-2024::grade-8 (58), nysed-science-2024::grade-5 (40)

### NYSED 2025 Grade 5 and Grade 8 Science Released Questions

- Folder: `nysed_science_2025`
- Questions/tasks: 94
- Subcollections: 2
- License: unspecified
- Recommended action: `map-existing`
- Rationale: Direct fit for school science tracks that already exist.
- Best existing track targets: CK-12 Science & Math, Khan Academy Foundations, Middle School Earth & Space Science
- Proposed new course families: none
- Top candidate track ids: ck12 (94), khanacademy (94), middleSchoolEarthSpace (59), scienceYear5 (35)
- Largest source subcollections: nysed-science-2025::grade-8 (59), nysed-science-2025::grade-5 (35)

### IMS Tutorials

- Folder: `ims_tutorials`
- Questions/tasks: 92
- Subcollections: 6
- License: CC BY-SA 3.0
- Recommended action: `map-existing`
- Rationale: Small but clean MCQ-style statistics/tutorial source.
- Best existing track targets: AP Statistics, Introduction to Data Science
- Proposed new course families: none
- Top candidate track ids: apStatistics (92), introDataScience (92), quant (42), medical (42), ml (36), quantAdvanced (36)
- Largest source subcollections: ims-tutorials::03-model (26), ims-tutorials::05-infer (20), ims-tutorials::02-explore (13), ims-tutorials::04-foundations (12), ims-tutorials::01-data (11), ims-tutorials::06-model-infer (10)

### OpenIntro Statistics

- Folder: `openintro_stats`
- Questions/tasks: 89
- Subcollections: 9
- License: CC BY-SA 3.0
- Recommended action: `map-existing`
- Rationale: Compact but high-signal statistics collection.
- Best existing track targets: AP Statistics, Introduction to Data Science
- Proposed new course families: none
- Top candidate track ids: apStatistics (89), introDataScience (89), quant (58), medical (35), quantAdvanced (23), ml (13)
- Largest source subcollections: openintro-stats::ch_distributions (14), openintro-stats::ch_inference_for_means (12), openintro-stats::ch_inference_for_props (12), openintro-stats::ch_foundations_for_inf (11), openintro-stats::ch_intro_to_data (10), openintro-stats::ch_probability (9)

### OpenIntro Statistics Slides

- Folder: `openintro_stats_slides`
- Questions/tasks: 85
- Subcollections: 9
- License: CC BY-SA 3.0
- Recommended action: `review-manually`
- Rationale: No explicit strategy has been written for this source yet.
- Best existing track targets: none suggested yet
- Proposed new course families: none
- Top candidate track ids: apStatistics (85), introDataScience (85)
- Largest source subcollections: openintro-stats-slides::chp_7 (16), openintro-stats-slides::chp_6 (13), openintro-stats-slides::chp_8 (12), openintro-stats-slides::chp_4 (11), openintro-stats-slides::chp_9 (11), openintro-stats-slides::chp_3 (10)

### Pfizer Pharma Hands-on Exercises

- Folder: `pharma_hands_on`
- Questions/tasks: 72
- Subcollections: 9
- License: CC BY 4.0
- Recommended action: `hold-for-labs`
- Rationale: Useful applied tasks, but needs heavy transformation before becoming learner-facing question cards.
- Best existing track targets: Medical Reasoning, Introduction to Data Science
- Proposed new course families: Clinical Data Labs
- Top candidate track ids: software (72), introCS (72), basic_javascript (41), introDataScience (37), apStatistics (37), medical (21)
- Largest source subcollections: pharma-hands-on::miniproject1 (14), pharma-hands-on::miniproject2 (13), pharma-hands-on::miniproject4 (11), pharma-hands-on::miniproject9 (9), pharma-hands-on::miniproject3 (8), pharma-hands-on::miniproject8 (6)

