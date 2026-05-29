# Audit: apPhysics

**Syllabus**: [`src/data/syllabi/high/ap_physics.md`](../../../src/data/syllabi/high/ap_physics.md)
**Track ids**: `apPhysics` (line 40 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)) — wired bank. Plus `col-ap-physics` (line 1466, "AP Physics Collections") — same syllabus, **zero questions wired**. **Track-id duplication.**
**Tier**: high
**Region**: US (College Board AP — assumed; not currently tagged)
**Status**: both `playable`; only `apPhysics` has content.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Physics Practices and Modeling | ❌ | No items on systems, assumptions, uncertainty, or representations. |
| 2. Kinematics and Motion Graphs | ✅ | Strong — average velocity, constant acceleration, displacement from rest, projectile horizontal speed, position-time slope. |
| 3. Forces and Translational Dynamics | ✅ | F=ma, free-body (book on table), Newton's third law, centripetal acceleration direction. **No tension or pulley problems.** |
| 4. Work, Energy, and Power | ✅ | W=Fd, energy conservation, mechanical energy. **No power-time integration or efficiency calc.** |
| 5. Momentum, Collisions, and Rotation | ⚠️ partial | Momentum definition, impulse (force-time area, impulse = ∆p). **No collision problem-solving, no rotational dynamics (torque, I, angular momentum) — major gap for AP Physics 1.** |
| 6. Oscillations, Fluids, and Thermodynamics | ⚠️ partial | Spring period (mass scaling), hydrostatic pressure with depth covered. **No pendulum, no PV diagrams, no ideal-gas-law applications.** |
| 7. Electricity, Magnetism, Waves, Optics, Modern | ✅ | Ohm's law, series current, wavelength, charge interaction, capacitance, magnetic force on parallel charge, converging lens, spring force. Surface-level breadth. |
| 8. AP Exam Studio | ❌ | **Real gap.** No symbolic derivation, no FRQ-style explanation items, no scoring-guideline practice. |

## Per-file recommendations

| File | apPhys Q's | Bucket | Reason |
|---|---|---|---|
| [`apPhysicsExamBatch.ts`](../../../src/data/questionCatalog/apPhysicsExamBatch.ts) | 10 | **KEEP** | Hand-authored, per-distractor explanations. Chapter labels ("Forces", "Circular Motion", "Springs", "Impulse", "Capacitance", "Magnetism", "Optics", "SHM", "Fluids") map well to syllabus chapters 3, 5, 6, 7. |
| [`apPhysicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/apPhysicsWorkoutGenerated.ts) | ~250 | **FIX** | Largest physics file. Strong kinematics/forces coverage, per-distractor explanations. **Issues**: chapter labels include redundant breakdowns ("Kinematics" × 30), no rotational dynamics, no FRQ-style items. Trim ~50 duplicate-feeling drills, retag chapters to match the syllabus's eight chapters. |
| [`openTriviaPhysicsExtensionImported.ts`](../../../src/data/questionCatalog/openTriviaPhysicsExtensionImported.ts) | ~30 | **DELETE** (auto-FIX flag) | **DEFAULT_FLAW**: every distractor uses stock string *"This option does not match the physics concept in the prompt. Use the relevant idea from waves, gravity, electricity, rotation/acceleration, or mirrors."* History trivia ("Who came up with the laws of gravity?" → Newton, with Pythagoras / Archimedes as distractors) — not physics content. |
| [`openTriviaPhysicsQuestions`](../../../src/data/questionCatalog/openTriviaCuratedAdditionalImported.ts) | unknown | **AUDIT — likely DELETE** | Curated subset. Confirm DEFAULT_FLAW; salvage any genuine concept rows. |
| `openTriviaCuratedPhysicalScienceAdditionalQuestions` (same imported file) | unknown | **AUDIT — likely DELETE** | Same as above. |
| [`apPhysicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/apPhysicsWorkoutGenerated.ts) also pulls in `buildOpenStaxQuestionCatalog()['openstax']` and `buildWikibooksQuestionCatalog()['mathematics_extensions']` | unknown | **AUDIT** | Cross-tier leakage — math-extensions and openstax shouldn't be feeding AP Physics by default. Likely DELETE the wiring at line 270–271 in `highAdvanced.ts`. |

## Open actions (priority order)

1. **Delete `openTriviaPhysicsExtensionImported.ts`** plus the curated physics subsets (auto-FIX DEFAULT_FLAW). ~30 min including salvage.
2. **Author ~10 rotational-dynamics items** (torque, moment of inertia, angular momentum conservation, rolling without slipping) — biggest syllabus gap and a College Board AP Physics 1 unit.
3. **Author Chapter 1 (modelling/uncertainty) and Chapter 8 (FRQ-style) items** (~12 each). FRQs are the single biggest differentiator from raw recall and the current bank has none.
4. **Retag `apPhysicsWorkoutGenerated` chapters** to the syllabus's eight chapter names; trim ~40–50 near-duplicate kinematics drills.
5. **Remove the OpenStax / Wikibooks math-extensions wiring** in `highAdvanced.ts` lines 270–271 — wrong-tier filler.
6. **Resolve `apPhysics` vs `col-ap-physics` double-track.**
7. **Add `regions: ['US']`** to the track entry.

## Estimated effort

- DEFAULT_FLAW triage + delete: ~45 min
- Rotational dynamics authoring: ~3.5 hours (10 items × 20 min)
- Chapter 1 + 8 authoring: ~7 hours (24 items × 18 min)
- Workout retag + trim: ~2 hours
- Cross-tier wiring cleanup: ~15 min

**~1.5 working days.** Headline: largest AP science bank by question count (~310) but missing rotational dynamics entirely; cleanup unlocks the existing strong core.

## Notes for next auditor

`apPhysicsWorkoutGenerated.ts` is the most internally heterogeneous AP science file — covers kinematics through modern physics across 250 questions. Worth a separate fine-grained chapter audit before retagging.
