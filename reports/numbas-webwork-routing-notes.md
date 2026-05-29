# Numbas and WeBWorK Math Routing Notes

Worker 4 first usable import slice, 2026-05-13.

## Imported Slice

- Added 20 playable fixed-choice math questions in `src/data/questionCatalog/numbasWebworkMathImported.ts`.
- Source mix: 16 Numbas public database items and 4 WeBWorK OPL items.
- Routed to existing math tracks only:
  - Algebra: `col-algebra-2`, `col-eureka-math-algebra-ii`, `col-college-algebra`, `collegeAlgebra`, `collegeAlgebraWorkout`
  - Calculus: `apCalculusAB`, `apCalculusBc`
  - Linear algebra: `linearAlgebra`
  - Statistics/data: `col-high-school-statistics`, `col-statistics-probability`, `apStatistics`, `introDataScience`

## Selection Criteria

- Kept items with stable conceptual stems and clear course fit.
- Preferred Numbas items whose extracted prompt/advice identified a single reusable concept without needing an applet, diagram, randomized value resolution, or multi-part answer-entry workflow.
- Used WeBWorK only where the raw PG extraction exposed a clean mathematical task pattern; these were converted into fixed-choice concept checks because the extracted raw data does not include choices or answer keys.
- Preserved source IDs in both `lesson` and `source` fields, with Numbas URLs where available.

## Larger Opportunities

- Numbas has thousands of promising math items, but many require a real Numbas variable/render pass before import because the raw text contains `{var(...)}`, applets, tables, or multi-part gapfills.
- The strongest Numbas expansion lanes appear to be algebra skills, calculus, statistics, linear algebra, mechanics/statics, and diagnostics.
- WeBWorK OPL is much larger, but most extracted rows are answer-entry PG problems without fixed choices. A proper importer should parse PG answer evaluators, instantiate variables, and either preserve answer-entry support or generate reviewed fixed-choice variants.
- Course design remains open for dedicated reservoirs such as Math Diagnostics, Algebra Workout, Mechanics Drill Sets, and Quantitative Methods rather than overloading AP/high-school tracks.
