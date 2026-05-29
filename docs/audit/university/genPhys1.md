# Audit: genPhys1

**Syllabus**: [`src/data/syllabi/university/general_physics_1.md`](../../../src/data/syllabi/university/general_physics_1.md)
**Track id**: `genPhys1`
**Tier**: university
**Region**: Jurisdiction-neutral (SI units, OpenStax / University Physics aligned)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Measurement, Vectors, Physical Modeling | Partial | Displacement (Pythagoras), dimensional-analysis units check |
| 2. Kinematics in 1D and 2D | Partial | Free-fall drop time; no projectile components, no graph reading |
| 3. Forces and Newton's Laws | Missing | No free-body, no Atwood, no friction, no circular motion |
| 4. Work, Energy, and Power | Missing | None observed in genPhys1 sample |
| 5. Momentum, Impulse, Collisions | Missing | None observed |
| 6. Rotation, Torque, Equilibrium | Missing | None observed |
| 7. Gravitation, Oscillations, Fluids | Missing | None observed |
| 8. Mechanics Lab and Modeling Studio | Missing | None observed |

**This is the most coverage-starved track in the cluster.** Only the first two chapters appear in the visible sample; the entire force-energy-momentum-rotation arc — i.e. the bulk of first-semester physics — is absent. The syllabus calls it a "PLACEHOLDER" course (per `university.ts` subtitle), and the question bank reflects that.

## Per-file recommendations

| File | genPhys1 Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (genPhys1 section, ids 3102000+) | ~18 | **FIX** | Sample items (Blip displacement, Professor Wobble units, rubber-duck free fall) are correct and have a real explanatory `lesson` line. **DEFAULT_FLAW for every wrong answer** — same systemic issue as the rest of the file. Coverage is also drastically thin. |

**No other files feed genPhys1.** No exam batch, no workout-generated, no openstax wiring. The track is `playable` but is effectively a stub.

## Cross-cutting flags

- **DEFAULT_FLAW** — confirmed via the `q()` helper.
- **`status: 'playable'` with placeholder content** — the `university.ts` entry tags genPhys1 as `playable` with an explicit "PLACEHOLDER" subtitle. That's misleading to learners; should either be downgraded to `soon` or filled out to a defensible minimum. Per `CONTENT_AUDIT.md` cross-cutting flag list: "Track has `status: 'soon'` but the file has questions → promote to playable" — here we have the inverse: a `playable` track that should arguably be `soon` until coverage exists.
- **Tone too cute** ("burrito robot route", "dignified rubber duck", "Professor Wobble") for university-level physics. Acceptable as a warm-up flavor; should not dominate.
- **No region issues.** SI units throughout.

## Open actions (priority order)

1. **Coverage build-out is the headline action** — author at least 6 Qs each for Chapters 3-7 (forces, energy, momentum, rotation, gravitation/oscillation/fluids) plus 2-3 lab/modeling items for Chapter 8. Total ~30-35 new questions.
2. **Per-distractor rewrite** of existing 18 — name the kinematic misconception each wrong answer encodes.
3. **Decide on the status flag** — either fill the coverage gap before launch or move to `status: 'soon'` and remove the "PLACEHOLDER" subtitle from `university.ts`.
4. **Sober the question voice for the bulk of items** — diagrams-first physics needs precise setup language; keep the playful framing for ≤30% of the bank.
5. **Cross-check with `apPhysicsWorkoutGenerated.ts` and `apPhysicsExamBatch.ts`** — mechanics content there may be liftable into genPhys1 (with appropriate notation conversion).

## Estimated effort

- Coverage build-out (~30 new questions across 6 chapters): ~10 hours
- Per-distractor rewrite of existing 18: ~3 hours
- Total: ~2 working days

## Notes for next auditor

genPhys1 and `generalPhysics2` together form the year-long sequence; the imbalance is striking (genPhys1 has 18 Qs across kinematics-only; generalPhysics2 has 18 Qs across actually-broad E&M topics). When closing the genPhys1 gap, consider promoting the existing kinematics items to a "warm-up" mini-bank and authoring sober counterparts that match the `universityPrep.ts` register. The capstone-style modeling lab questions ("Mechanics Lab and Modeling Studio") will need real diagram or data-prompt support — likely best deferred until Floe supports image attachments.
