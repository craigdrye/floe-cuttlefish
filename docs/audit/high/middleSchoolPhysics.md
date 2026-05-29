# Audit: middleSchoolPhysics

**Syllabus**: [`src/data/syllabi/high/middle_school_physics.md`](../../../src/data/syllabi/high/middle_school_physics.md)
**Track ids**: `middleSchoolPhysics` (line 1620 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)). Phantom alias `col-middle-school-physics` referenced only in `syllabi/index.ts` line 238.
**Tier**: high (catalog grouping; ages 13–14)
**Region**: US NGSS + UK KS3 (explicit in syllabus). Not currently tagged.
**Status**: `playable`. Wired via dedicated `highGenerated.ts` branch (line 1592).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Motion, Measurement, and Graphs | ✅ | Speed formula, acceleration definition in STAAR batch. No graph-reading items. |
| 2. Forces and Newton's Laws | ✅ | Balanced/unbalanced forces. **No FBD or Newton-pair items at MS level.** |
| 3. Gravity, Friction, and Fields | ❌ | No items on mass vs weight, friction effects, magnetic/electrostatic force. |
| 4. Energy Stores and Transfers | ✅ | Kinetic, gravitational potential energy in STAAR batch. **No energy-transformation chain items.** |
| 5. Heat Transfer and Materials | ✅ | Conduction defined. **No convection, radiation, or insulator comparison.** |
| 6. Waves, Sound, and Light | ✅ | Wave amplitude → energy, reflection. **No frequency/wavelength/spectrum items.** |
| 7. Electricity and Magnetism | ⚠️ partial | Complete circuit needs path. **No series/parallel, electromagnet, voltage/current items.** |
| 8. Physics Design Studio | ❌ | No design/iteration items. |

## Per-file recommendations

| File | msPhys Q's | Bucket | Reason |
|---|---|---|---|
| [`middleSchoolPhysicsStaarBatch.ts`](../../../src/data/questionCatalog/middleSchoolPhysicsStaarBatch.ts) | 10 | **KEEP** | Floe-native, per-distractor explanations, audience-appropriate ("Color does not create gravitational potential energy"). Chapter labels (Motion, Forces, Energy, Energy Transfer, Waves, Light, Electricity) map to syllabus chapters 1, 2, 4, 5, 6, 7. |
| `middleSchoolScienceAssessmentPhysicsQuestions` (from [`primaryScienceAssessmentImported.ts`](../../../src/data/questionCatalog/primaryScienceAssessmentImported.ts)) | ? | **AUDIT — likely KEEP** | Same provenance as bio/chem siblings. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Only "fairy lights" series-circuit and "dark rock albedo" blueprints touch physics; both stop at the wrong syllabus chapter ("Circuits" matches Ch 7; "Climate Feedbacks" is not a physics chapter at all). Chapter-taxonomy mismatch. |

## Open actions (priority order)

1. **Author 20–25 items closing Chapters 3, 7, 8 gaps** — friction, mass vs weight, magnetic poles, electromagnets, series vs parallel circuits, voltage/current/resistance qualitative, design iteration. Voice template: `middleSchoolPhysicsStaarBatch`.
2. **Add 5–8 graph-reading items for Chapter 1** (distance-time, speed-time interpretation) — syllabus explicitly calls these out.
3. **Audit `middleSchoolScienceAssessmentPhysicsQuestions`** for KEEP/downgrade.
4. **Author 4 physics-specific blueprints** (FBD reading, energy-transfer chain, simple circuit, wave label) and route only to physics tracks.
5. **Resolve `middleSchoolPhysics` vs `col-middle-school-physics` phantom split.**
6. **Add `regions: ['US','UK']`** — NGSS + KS3.

## Estimated effort

- Authoring (25 items): ~7.5 hours
- Graph-reading items: ~2 hours
- School-assessment audit: ~45 min
- Blueprint authoring: ~2 hours
- Track-id cleanup: ~20 min

**~1.5 working days.** Headline: 10 strong STAAR items but no graph-reading or circuit-comparison content; both are explicit syllabus expectations.

## Notes for next auditor

Pair with `highSchoolPhysicsNgssExamBatch.ts` review — there's a real opportunity for a "physics ramp" of carefully-tiered items (MS → NGSS HS → AP) using consistent voice. The MS Physics syllabus is more demanding than STAAR alone covers.
