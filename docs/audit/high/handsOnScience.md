# Audit: handsOnScience

**Syllabus**: [`src/data/syllabi/high/hands_on_science_activities.md`](../../../src/data/syllabi/high/hands_on_science_activities.md)
**Track ids**: `handsOnScience` (line 1642 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)). Phantom alias `col-hands-on-science-activities` referenced only in `syllabi/index.ts` line 244.
**Tier**: high
**Region**: US-leaning (Science Buddies, NIST, GLOBE, NGSS) but practical-lab content is largely jurisdiction-neutral. Recommend `regions: ['US','UK','global']`.
**Status**: `playable` — **but the track has NO dedicated question file.** All content is generic `scienceBlueprints()` filler.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Lab Safety, Measurement, and Question Design | ❌ | No items on hazard ID, SI units, control variable selection. |
| 2. Motion, Forces, and Engineering Challenges | ⚠️ via cross-track | Could pull from `middleSchoolPhysicsStaarBatch` and `apPhysicsWorkout`. No dedicated items. |
| 3. Circuits, Energy, and Sensors | ❌ | "Fairy lights" blueprint applies here, but as generic fill only. |
| 4. Kitchen Chemistry and Materials | ❌ | No items. |
| 5. Life Science Observations and Micro-Investigations | ❌ | No items. |
| 6. Earth, Weather, and Environmental Fieldwork | ❌ | No items. |
| 7. Science Fair and Independent Investigation Design | ❌ | No items. |
| 8. Maker Science Studio | ❌ | No items. |

**Effective coverage: 0% dedicated.** The course is explicitly designed in the syllabus to "absorb practical science questions from across the archive" — but no routing logic does this. The student sees only the generic blueprints.

## Per-file recommendations

| File | handsOn Q's | Bucket | Reason |
|---|---|---|---|
| **No dedicated `handsOnScience` question file** | — | **AUTHOR + ROUTE** | This track is unusual: syllabus explicitly asks for cross-archive routing. Need both authoring AND a routing strategy. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Chapter-taxonomy mismatch. The generic blueprints are coincidentally near-fit (fairy lights → Ch 3, peppermint diffusion → Ch 4, pea cross → Ch 5), but were not designed for this course. |
| Cross-route candidates from sibling tracks | unknown | **MERGE — multi-source** | Per syllabus design: route experimental-design items from any subject here. Candidates: control-group items in `apBiologyExamBatch` (Q448010), `apBiologyWorkoutGenerated` (Q401050), `middleSchoolPhysicsStaarBatch` (balanced forces example), `middleSchoolChemistryStaarBatch` (evidence-of-reaction examples). |
| `kolibri.ts`, `pixar_in_a_box`-style maker content | unknown | **AUDIT** | If Pixar/maker items reference iteration/design, they're handsOnScience-shaped. |

## Open actions (priority order)

1. **Author 25–30 dedicated items** covering experiment design (Chapter 1), kitchen chemistry safety (Chapter 4), observation protocols (Chapter 5), fieldwork sampling (Chapter 6), and science-fair planning (Chapter 7). Voice template: `apBiologyExamBatch`'s experimental-design items + `primaryBuilders.ts` for the playful tone where appropriate. **Highest-leverage authoring**: items that critique a flawed procedure and ask "what's wrong?" — directly matches the syllabus's "improve a flawed investigation" practice questions.
2. **Author a cross-route map** in `highGenerated.ts` that pulls experimental-design and lab-skills items from biology, chemistry, physics, and earth-science banks. ~15 carefully-chosen cross-routes can fill Chapters 2, 3, 4, 6 without re-authoring.
3. **Author 4 hands-on-science blueprints** (procedure-critique, measurement-choice, fair-test design, hazard-spotting) and route only to this track.
4. **Add `regions: ['US','UK','global']`** — practical lab content is least jurisdiction-bound.
5. **Demote to `status: 'soon'`** until ≥25 dedicated items exist.
6. **Distinct identity caveat**: this track must not become a dumping ground for low-quality items "from across the archive." Cross-routes should be deliberate, not catch-all.

## Estimated effort

- Authoring (28 items): ~9 hours
- Cross-route map: ~2 hours
- Blueprint authoring: ~2 hours
- Region/status: ~15 min

**~1.5–2 working days.** Headline: **`status:'playable'` track with zero dedicated content** and an unusual design that explicitly requires cross-track routing. Auto-FIX flag.

## Notes for next auditor

This is the one HS Science track where cross-track routing is the intended design, not an accident. Worth defining the routing pattern carefully so it's reusable elsewhere (e.g., `lifeSkillsAndAdulting` may have a similar shape).
