# Numbas and WeBWorK Third Selective Math Pass

Worker 4 third usable import slice, 2026-05-13.

## Imported Slice

- Added 15 fixed-choice conceptual math questions in `src/data/questionCatalog/numbasWebworkMathThirdImported.ts`.
- Source mix: 12 Numbas public database items and 3 WeBWorK OPL items.
- Routed to existing math tracks only:
  - Algebra/college algebra: `col-algebra-2`, `col-eureka-math-algebra-ii`, `col-college-algebra`, `collegeAlgebra`, `collegeAlgebraWorkout`
  - Trigonometry/precalculus: `col-trigonometry`, `col-precalculus`, `col-eureka-math-precalculus`
  - Statistics/probability: `col-high-school-statistics`, `col-statistics-probability`, `apStatistics`, `introDataScience`
  - AP calculus: `apCalculusAB`, `apCalculusBc`
  - Linear algebra: `linearAlgebra`

## Selection Criteria

- Kept the batch modest: three questions each for college algebra, trigonometry, statistics/probability, AP calculus, and linear algebra.
- Preferred raw items where the prompt or advice text exposed a reusable concept directly: logarithmic form, factoring structure, half-life, sinusoidal graph parameters, reference angles, unit-circle coordinates, product rule, exponential chain rule, constants of integration, matrix dimensions, matrix addition, matrix multiplication, resistant summaries, spread measures, and independent-event multiplication.
- Preserved source IDs in both `lesson` and `source` fields, with Numbas URLs where available.
- Converted to fixed-choice cards only when the concept did not require importing Numbas variable rendering, answer-entry grading, applets, or diagrams.

## Skipped Patterns

- Skipped Numbas mechanics/statics and geometry items that depended on GeoGebra applets, rendered diagrams, or generated free-body diagrams.
- Skipped many Numbas exam rows because they duplicated public-database question templates or exposed only randomized answer-entry prompts without useful advice text.
- Skipped most WeBWorK OPL calculus/statistics rows because the extracted PG text lacked stable answer choices and often required random parameter instantiation.
- Skipped graph-matching, table-completion, and long multipart tasks unless they yielded a clean single concept suitable for a reviewed fixed-choice card.
