# Audit: collegeAlgebra

**Syllabus**: [`src/data/syllabi/university/college_algebra.md`](../../../src/data/syllabi/university/college_algebra.md)
**Track id**: `collegeAlgebra` (with sibling `collegeAlgebraWorkout`)
**Tier**: university
**Region**: US (explicit in syllabus header — "MATH 1314 / CLEP College Algebra")

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Algebra Fluency and Real Numbers | partial | Some inverse-op drills; rational expressions, complex fractions thin |
| 2. Equations, Inequalities, Applied Setup | yes | Strong: one-step, two-step, distributive, fractional coefficient, sign-flip inequalities, compound interval |
| 3. Functions, Graphs, Transformations | yes | Domain restriction, function notation drills |
| 4. Linear and Quadratic Functions | yes | Zero product, expansion, vertex x-coord, discriminant, completing the square |
| 5. Polynomial Functions | partial | End behavior covered (in precalculus batch); long division/Rational Zero Theorem thin |
| 6. Rational Functions | partial | Vertical asymptote covered (precalculus batch); slant asymptote missing |
| 7. Exponential and Logarithmic | yes | Log product rule, change of form (in numbas additional) |
| 8. Systems, Matrices, Conics, Sequences | partial | Elimination, substitution covered; matrices / Gauss / conics / sequences missing |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`collegeAlgebraWorkoutGenerated.ts`](../../../src/data/questionCatalog/collegeAlgebraWorkoutGenerated.ts) | 42KB (~140 items) | **KEEP** | Per-distractor explanations + nudges, no `DEFAULT_FLAW`. Strong sign-flip-inequality discipline ("The inequality sign must flip when dividing by -3"). Chapter labels (Linear Equations, Inequalities, Systems, Quadratics, Functions) align with syllabus headers though not numbered. |
| [`universityBuilders.ts`](../../../src/data/questionCatalog/universityBuilders.ts) `makeColCollegeAlgebraQuiz` | ~24 | **KEEP** | Scaffolded setup/prompt/fieldNote/mentorHint format. Canonical voice. |
| [`numbasWebworkMathImported.ts` / Additional / Third algebra bundles](../../../src/data/questionCatalog/numbasWebworkMathAdditionalImported.ts) | unknown (3 batches) | **KEEP** | Sampled: per-distractor explanations preserved; sourceUrl links retained; the lesson string is candid that "applets/diagrams not imported". Good faith imports. |
| [`mathDiagnosticsGeneratedQuestions`](../../../src/data/questionCatalog/mathDiagnosticsGenerated.ts) | ~50 | **KEEP for `mathDiagnostics` track** (not college algebra directly) | Hand-authored, per-distractor reasons. Already in its own track. |
| [`precalculusExamBatch.ts`](../../../src/data/questionCatalog/precalculusExamBatch.ts) | 10 (relevant subset) | **MERGE → eurekaMathPrecalculus** primarily | Routes to precalculus, but covers end-behavior + asymptotes that belong here too. Not currently wired to `collegeAlgebra` — fine. |

No `DEFAULT_FLAW` anywhere in this track's catalog.

**`collegeAlgebraWorkout` is a separate playable track** loading the same workout-generated bank with the same algebra numbas imports. This is the "track has both course and workout variants" pattern — fine if intentional but should be marked as a drill spinoff in the subtitle, not as a distinct course.

## Cross-cluster flags

- **Math notation**: ASCII (`x^2`, `2x - 3`, `<=`, `>=`, sqrt-as-word). Renderer-safe.
- **Region**: syllabus is explicit ("MATH 1314 / CLEP"). Add `region: 'US'` to the track entry. Non-US "College Algebra" doesn't exist as a course; this is US-only.
- **Sibling track confusion**: `collegeAlgebra` and `collegeAlgebraWorkout` differ only in opening 100 questions vs no opening 100 questions. Consider folding `Workout` into a chapter inside `collegeAlgebra` or labelling clearly.

## Open actions (priority order)

1. **Author chapter 8 content**: 2-var elimination, 3-var Gaussian, matrix row ops, conic standard forms, arithmetic/geometric sequences with sigma notation. ~10 items. Biggest gap.
2. **Add polynomial-division / Rational Zero Theorem drills** for chapter 5 (~4 items).
3. **Add slant asymptote + sign-chart drills** for chapter 6 (~3 items).
4. **Add region tag** in [`src/data/ageCatalog/university.ts`](../../../src/data/ageCatalog/university.ts).
5. **Resolve `collegeAlgebra` vs `collegeAlgebraWorkout`** — either merge or label the Workout as "drills only, no instruction".

## Estimated effort

- Chapter 8 authoring: ~5 hours (10 items × 30 min)
- Chapter 5/6 fill-ins: ~3 hours
- Region + sibling-track decision: ~1 hour

**~1 working day.** Quality bar is met for everything that's there; the gap is breadth, not depth.

## Notes for next auditor

Math diagnostics (`mathDiagnostics` track) overlaps significantly with college algebra topic-wise but is intentionally a placement test rather than a course. Don't merge. The numbas/webwork bundle is hand-imported with care — better than I expected for an import file — but only sample-verifying the chapters that appear here; the full bundle is shared with calculus + linear algebra and deserves its own audit. The `mathDepthTrackIds` in `rawCollectionMappings.ts:293` (`['collegeAlgebra', 'apCalculusAB', 'apCalculusBc', 'linearAlgebra', 'trigonometry']`) is a useful starting point for shared-content cleanup across this cluster.
