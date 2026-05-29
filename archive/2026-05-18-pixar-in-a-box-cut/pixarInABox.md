# Audit: pixarInABox

**Syllabus**: [`src/data/syllabi/high/pixar_in_a_box.md`](../../../src/data/syllabi/high/pixar_in_a_box.md)
**Track id**: `pixarInABox`
**Tier**: high (year 11)
**Region**: not jurisdiction-specific

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Story Seeds, Characters, Emotional Stakes | ❌ | No items |
| 2. Storyboards, Visual Language, Story Reel | ❌ | No items |
| 3. Shape, Modeling, Virtual Sets (mesh, topology, low-poly) | ❌ | No items |
| 4. Curves, Interpolation, Motion Paths (Bezier, control points, easing) | ❌ | No items |
| 5. Animation Principles, Keyframes, Rigging (squash/stretch, IK/FK) | ❌ | No items |
| 6. Simulation, Effects, Physical Believability (particles, cloth, collisions) | ❌ | No items |
| 7. Materials, Lighting, Cameras, Rendering (DOF, ray tracing, shaders) | ❌ | No items |
| 8. Pipeline, Review, Iteration, Final Pitch (dailies, revisions, departments) | ❌ | No items |

**The whole syllabus is uncovered.** Track id `pixarInABox` is not in `highMath/Advanced/Fun` sets → falls through to `high-generated`. The generator's `familyFor` function (`highGenerated.ts:167`) routes "pixar" into the `computing` family, so users opening Pixar in a Box get the generic computing blueprints (loops, variables, etc) — completely unrelated to the syllabus's animation/storytelling/maths content.

**Chapter-taxonomy mismatch — total.** Generator emits computing chapters; syllabus has eight specific Pixar-pipeline chapters. Zero alignment.

## Per-file recommendations

| File | Items for pixarInABox | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) computing blueprints (top-up) | 50 templated | **FIX (procedural generator)** | Currently the only thing served. Topically wrong: loops/booleans masquerading as animation content. Worst chapter-vs-syllabus mismatch in the cluster. |
| [`highAgentGenerated.ts`](../../../src/data/questionCatalog/highAgentGenerated.ts) | no entry | **GAP** | No `pixarInABox` topUp. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) | no entry | **GAP** | No Pixar bank. |

**Net effect**: this track is functionally empty. Every visible question is a generic computing template miscategorised as animation content.

## Open actions (priority order)

1. **Author the syllabus from scratch.** Target 24–32 items (3–4 per chapter). Voice template: should sit somewhere between `highBuilders.ts` (sober structured) and `highFun.ts` (engaging) — Pixar in a Box is studio-flavored, not exam-flavored.
2. **Specifically prioritise the maths chapters** (Chapter 4 Curves/Interpolation, Chapter 5 IK/FK) since they're where Floe's STEM hand-authoring strength carries best.
3. **Author Chapter 6 simulation items** that connect art-direction trade-offs to physical accuracy — these are Pixar's signature explanatory moves.
4. **Wire** the new bank into a HS bundle entry, add `pixarInABox` to the appropriate routing set in `index.ts`.
5. **Suppress the computing-family generator fallback** for this track, or change `familyFor` to route "pixar" into a more sensible default until the bank exists.

## Estimated effort

- Authoring 24–32 items: ~12–16 hours
- Routing + family-mapping fix: ~1 hour

## Notes for next auditor

This is the cluster's **highest-priority content gap**. The track is `playable` in the age catalog (line 1326) but serves miscategorised templates. A user clicking "Pixar in a Box" expecting curves and rigging gets a loop-construct question. This is worse than an empty track; it actively misleads. Either author content or change status to `soon`.
