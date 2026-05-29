# Course Range Audit

Generated: 2026-05-13

## Current Shape

Parsed from `src/data/ageCatalog/{primary,high,university,career}.ts`.

| Learner group | Total tracks | Playable | Soon |
| --- | ---: | ---: | ---: |
| Preschool | 8 | 8 | 0 |
| Primary | 25 | 21 | 4 |
| High school | 116 | 97 | 19 |
| University | 51 | 46 | 5 |
| Career-hopper | 8 | 8 | 0 |
| Career | 59 | 33 | 26 |
| Nerd/specialist | 2 | 2 | 0 |

Floe already has unusually strong breadth in:

- School and college mathematics, including primary math, algebra, geometry, precalculus, AP calculus, AP statistics, linear algebra, differential equations, multivariable calculus, and diagnostics.
- Science, especially biology, chemistry, physics, environmental science, astronomy/cosmology, neuroscience, anatomy/physiology, and climate science.
- Computing, including intro CS, web foundations, AP CS, data structures, software design, software interview prep, ML/data-science prep, and CS theory.
- Philosophy, logic, and reasoning, including ethics, argumentation, epistemology, formal logic, moral philosophy, logic puzzles, brainteasers, and LSAT-style reasoning.
- Exam prep across AP, SAT, A-level, GCSE, JEE/NEET, HSC/VCE, NAPLAN, 11+, PSLE, MCAT, LSAT, and several professional certifications.
- Career tracks in finance, healthcare, compliance, cybersecurity, product/project management, UX, sales, public speaking, negotiation, clinical research, regulatory affairs, and specialist certifications.

## Main Missing Course Families

These are not just thin tracks; they are broad course families that are absent or underrepresented relative to the rest of the catalog.

### P0: World Languages

There is no clear Spanish, French, Mandarin, ESL/EAL, Latin, or language-learning track. This is the biggest mainstream school/university gap.

Recommended first courses:

- Spanish I
- Spanish for Healthcare / Workplace Spanish
- English as a Second Language
- Latin Roots and Academic Vocabulary

### P0: Discrete Mathematics / Proof Foundations

Floe has formal logic, data structures, math extensions, and set-theory imports, but no clean user-facing `Discrete Mathematics` or `Set Theory and Proof` course. This is a natural bridge between math, CS, logic, and university prep.

Recommended first courses:

- Discrete Mathematics
- Set Theory and Proof
- Graph Theory Basics
- Combinatorics and Counting

### P0: Algorithms as a Separate Course

OpenDSA content has strengthened intro CS, software, and data structures, but `Algorithms` is not presented as its own clear course. Given the archive, this is a high-fit missing course.

Recommended first courses:

- Algorithms
- Algorithms Workout
- Complexity and Big-O

### P1: Databases / SQL / Data Analyst Skills

There is ML/data-science prep and intro data science, but no obvious SQL/database/data-analyst course. This is a practical gap for university and career learners.

Recommended first courses:

- SQL Foundations
- Databases
- Data Analyst Interview Prep
- Business Analytics

### P1: Writing, Rhetoric, and Communication Ladder

There are reading/vocab, AP English, creative writing, English Composition 101, public speaking, and argumentation. What is missing is a coherent writing ladder between school writing and university/career writing.

Recommended first courses:

- Middle School Writing
- High School Essay Writing
- Rhetoric and Persuasion
- Technical Writing
- Workplace Communication

### P1: Earth Science / Geology / Environmental Systems

Middle school earth/space and AP Environmental Science exist, but standard high-school earth science, geology, weather/climate basics, and environmental systems are not clearly separated.

Recommended first courses:

- Earth Science
- Geology
- Weather and Climate
- Environmental Systems

### P1: Health, Nutrition, and Personal Wellness

There are healthcare career tracks and adulting/life-skills tracks, but no general health education course for school or adult learners.

Recommended first courses:

- Health Education
- Nutrition Basics
- Mental Health Literacy
- First Aid and Safety

### P2: Social Studies Breadth

US history, world history, government/civics, AP human geography, economics, international relations, and sociology exist. Missing or thin areas are cultural geography, anthropology, law, comparative politics, and media/news literacy.

Recommended first courses:

- World Geography
- Anthropology
- Introduction to Law
- Comparative Politics
- Media Literacy

### P2: Engineering Beyond Electrical

Electrical engineering exists, but the engineering family is otherwise sparse.

Recommended first courses:

- Mechanical Engineering Basics
- Civil Engineering Basics
- Engineering Design
- Circuits and Electronics Lab

### P2: Arts and Music

Art history, creative writing, Pixar/game design, and mythology exist, but there is no broad music, visual art practice, theater, film studies, or design fundamentals ladder.

Recommended first courses:

- Music Theory
- Visual Art Foundations
- Film Studies
- Theater and Drama
- Design Fundamentals

### P2: Teacher / Education and Public-Service Careers

Career coverage is strong in finance, healthcare, technology, government, compliance, and operations, but education and public-service pathways are mostly absent.

Recommended first courses:

- Teacher Certification Foundations
- Classroom Management
- EMT / First Responder Basics
- Public Administration
- Paralegal / Legal Assistant

## Thin Or Confusing Existing Areas

These may not require brand-new courses, but they would benefit from cleanup.

- High-school catalog has duplicate-ish AP/A-level/collection tracks. Several titles repeat under different ids, especially AP Biology, AP Chemistry, AP Physics, AP English, AP Computer Science, creative writing, game design, and life skills.
- Some `soon` tracks have playable siblings. For example high-school philosophy has both `philYear*` soon tracks and playable named philosophy tracks.
- `Maths` and `Mathematics` are used as separate discipline labels.
- University has AP bridge courses alongside college courses; this is useful, but the user-facing distinction should be made clearer.
- Career has both playable certification tracks and `Roadmap` tracks for the same domain. That may be intentional, but the UI should distinguish “quiz course” from “career roadmap.”

## Recommended Build Order

1. Add `Discrete Mathematics` / `Set Theory and Proof`.
2. Add `Algorithms` as its own computing course.
3. Add `SQL Foundations` / `Databases`.
4. Add a general `World Languages` starter, probably `Spanish I`.
5. Add `High School Essay Writing` or `Rhetoric and Persuasion`.
6. Add `Earth Science` / `Weather and Climate`.
7. Add `Health Education` / `Mental Health Literacy`.

The first three are especially attractive because the existing archive and current question bank already contain usable source material. World languages and health are larger product gaps, but they likely require new source acquisition or authored content.
