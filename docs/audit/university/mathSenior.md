# Audit: mathSenior (Advanced Mathematical Modeling)

**Syllabus**: [`src/data/syllabi/university/advanced_mathematical_modeling.md`](../../../src/data/syllabi/university/advanced_mathematical_modeling.md)
**Track id**: `mathSenior`
**Tier**: university
**Region**: Universal — no jurisdiction. No region tag needed.
**Status**: `'soon'` in [`src/data/ageCatalog/university.ts:250`](../../../src/data/ageCatalog/university.ts) — **not playable.**

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. The Modeling Cycle and Dimensional Reasoning | no | No content wired |
| 2. Deterministic Difference and Differential Models | no | No content wired |
| 3. Optimization and Decision Models | no | No content wired |
| 4. Stochastic Processes and Markov Models | no | No content wired |
| 5. Queues, Reliability, and Service Systems | no | No content wired |
| 6. Networks and Graph Models | no | No content wired |
| 7. Simulation, Monte Carlo, and Agent-Based Models | no | No content wired |
| 8. Model Validation, Ethics, and Communication Studio | no | No content wired |

**Zero coverage across all 8 chapters.** A repo-wide grep for `mathSenior` and `advancedMathematicalModeling` returns only the one definition in the age catalog. No question bank, no builder function, no test fixture.

## Per-file recommendations

| File | mathSenior Q's | Bucket | Reason |
|---|---|---|---|
| (none) | 0 | **N/A** | The track is wired in the age catalog with `status: 'soon'` but has no question source. There is nothing to bucket. This is a syllabus-without-content scaffold. |

## Cross-cluster flags

- **Status correctly flagged `'soon'`**: this is the right call. The track honestly signals to users that content isn't ready. Unlike some other "soon" tracks in the catalog (per `CONTENT_AUDIT.md`'s cross-cutting flags), this one has no quiet question file behind the curtain.
- **Math notation**: N/A — no content.
- **Region**: would be universal when authored. Modelling examples (epidemiology, finance, transportation) cross jurisdictions naturally.
- **Adjacency to other tracks**: chapter 4 (Markov models) overlaps with `linearAlgebra` chapter 5; chapter 2 (differential models) overlaps with `differentialEquations` chapters 6–7; chapter 6 (networks) overlaps with `discreteMath` chapter 7; chapter 7 (Monte Carlo) overlaps with `apStatistics` chapter 5. Risk: when authored, this track will duplicate adjacent-track content unless explicitly scoped to "applied modeling decisions" rather than "the math underneath".
- **Senior-year register**: the syllabus emphasises decision-making under uncertainty, validation, ethics, and communication — softer skills than the rest of the maths cluster. Authoring should match that register: prompts about *choosing* a model class, *interpreting* a sensitivity result, *communicating* uncertainty to a stakeholder. Not "compute this Markov steady state" (which belongs in `linearAlgebra`).

## Open actions (priority order)

1. **Decide whether `mathSenior` is launch-blocking**. With `status: 'soon'` and ageGroup `'university'`, it sits in the "university-senior" stage bucket (`universityStageBuckets`). If university-senior is a launch persona, this track needs content; if not, it can stay 'soon' indefinitely.
2. **If authoring proceeds**: write 8 chapters × 6 items = ~48 items in the `*WorkoutGenerated.ts` shape that `multivariableCalculus` / `linearAlgebra` / `differentialEquations` use. Per-distractor explanations + nudges, no `DEFAULT_FLAW`.
3. **Scope each chapter to "modeling-decision" prompts, not raw computation** to avoid duplicating `linearAlgebra` (Markov), `differentialEquations` (phase plane), `discreteMath` (graph), `apStatistics` (Monte Carlo).
4. **Set `lastReviewed: <date>`** when authoring — ethics/fairness/AI-risk content drifts.
5. **If skipped at launch**: remove from `universityStageBuckets['university-senior']` to avoid orphan recommendations.

## Estimated effort

- Skip and leave 'soon': ~0 hours
- Author 48 items at the workout-generated bar: ~24 hours (3 working days)
- Decision-register authoring is harder than computation drills; estimate skews high

**3 working days if authored from scratch.** Or zero if the team accepts 'soon' as the launch state for this track.

## Notes for next auditor

The only zero-content track in the maths cluster. Correctly flagged. Decision is product, not content: is `university-senior` a launch persona? If yes, adopt the workout-generated shape (multivariable / linear algebra / differential equations). If no, leave 'soon'. Do not let it drift half-authored.
