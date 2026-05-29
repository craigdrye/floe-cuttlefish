# Audit: col-high-school-physics

**Syllabus**: [`src/data/syllabi/high/high_school_physics.md`](../../../src/data/syllabi/high/high_school_physics.md)
**Track ids**: `col-high-school-physics` (line 1950 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)). Plus `col-high-school-physics-ngss` (NOT in `high.ts` but referenced in `highAdvanced.ts` line 92 and `syllabi/index.ts` line 243). **Phantom track id.**
**Tier**: high
**Region**: US (NGSS) — explicit in syllabus and in `highSchoolPhysicsNgssExamBatch.ts` source line. Not currently tagged.
**Status**: `playable`. The wired bank under the `-ngss` id is reasonable; the bare `col-high-school-physics` id falls back to generic blueprint filler.

## Coverage map (syllabus → questions, via the `-ngss` wiring)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Physics Practices, Measurement, and Models | ❌ | No items. |
| 2. Motion in One and Two Dimensions | ✅ | Acceleration calc, position-time slope (NGSS batch). No 2D projectile motion items at HS level. |
| 3. Forces and Newton's Laws | ✅ | Newton's third law (skateboarder) — single item. **No free-body diagrams, no friction, no equilibrium.** |
| 4. Work, Energy, and Power | ✅ | W=Fd, energy conservation in free fall (NGSS batch). |
| 5. Momentum, Impulse, and Collisions | ⚠️ partial | Impulse = ∆momentum. No collision problems. |
| 6. Waves, Sound, and Light | ✅ | v=fλ wavelength calculation. No ray-diagram or interference items. |
| 7. Electricity and Magnetism | ✅ | Ohm's law, series current, charge repulsion. **No parallel circuit comparison, no magnetic induction.** |
| 8. Engineering Physics Studio | ❌ | No design/iteration/measurement items. |

**Effective coverage: 10 NGSS-batch items spanning chapters 2, 3, 4, 5, 6, 7.** Chapters 1 and 8 are uncovered. The bare `col-high-school-physics` id (no `-ngss`) has no custom wiring branch in `highGeneratedQuestionsByTrack` and falls back to generic `scienceBlueprints()` — which gives one circuit item ("fairy lights") and one Mendelian-pea item that is not physics.

## Per-file recommendations

| File | hsPhys Q's | Bucket | Reason |
|---|---|---|---|
| [`highSchoolPhysicsNgssExamBatch.ts`](../../../src/data/questionCatalog/highSchoolPhysicsNgssExamBatch.ts) | 10 | **KEEP** | Floe-native, per-distractor explanations, NGSS-aligned chapter labels match syllabus (Motion, Forces, Energy, Circuits, Waves, Electric Fields, Momentum, Graphing Motion). Used by both the `-ngss` track and AP Physics (line 232 of `highAdvanced.ts`). |
| `makeHighSchoolPhysicsNGSSQuiz()` (imported in `highAdvanced.ts`) | unknown | **AUDIT** | Quiz builder — verify per-distractor quality and chapter alignment. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Same chapter-taxonomy mismatch as HS Chem — generic blueprints don't match the physics syllabus chapters. Author physics-specific blueprints (vector components, FBD reading, energy bar chart, circuit Ohm) or exclude the track from generic fill. |
| [`apPhysicsExamBatch.ts`](../../../src/data/questionCatalog/apPhysicsExamBatch.ts), [`apPhysicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/apPhysicsWorkoutGenerated.ts) | 0 wired here | **MERGE — partial down-level** | ~30–60 AP Physics workout items (kinematics, simple force problems, Ohm's law, wavelength) are appropriate at HS Physics level. Tag and route a curated subset here. |
| **No dedicated `col-high-school-physics` (non-`-ngss`) wiring** | — | **FIX** | Collapse the two ids; route everything through one. |

## Open actions (priority order)

1. **Author 25–30 Floe-native HS Physics questions** covering Chapters 1 (modelling/measurement), 3 (FBD/friction), 5 (collision problems), 6 (ray diagrams), 7 (parallel circuits, induction qualitative), 8 (engineering iteration). Voice template: `highSchoolPhysicsNgssExamBatch`.
2. **Curate ~30 cross-tier items from `apPhysicsWorkoutGenerated`** (kinematics drills, Ohm's law variants, wave equation, basic forces) and wire as a track-specific branch in `highGenerated.ts`, mirroring the middle-school physics pattern.
3. **Resolve `col-high-school-physics` vs `col-high-school-physics-ngss` split.** Pick one and retire the other.
4. **Author physics-specific blueprints** (or exclude track from generic fill).
5. **Add `regions: ['US']`** — explicitly NGSS.
6. **Cross-link** the `-ngss` batch into `apPhysics` (already done at `highAdvanced.ts` line 232) and into AP Physics's makeHighSchoolPhysicsNGSSQuiz reuse — already happens; verify no double-counting in scoring.

## Estimated effort

- HS Physics authoring (30 items): ~9 hours
- Cross-tier curation + wiring: ~2 hours
- Track-id consolidation: ~30 min
- Blueprint authoring (4 physics blueprints): ~2 hours

**~1.5 working days.** Headline: 10 hand-authored items doing the work of a full physics syllabus; biggest gap is FBD/collision content.

## Notes for next auditor

The `makeHighSchoolPhysicsNGSSQuiz()` content is reused by both HS Physics and AP Physics — anything authored here cascades up. Worth scoping HS-targeted authoring with AP reuse in mind.
