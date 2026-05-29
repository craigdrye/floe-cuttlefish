# Audit: col-high-school-chemistry

**Syllabus**: [`src/data/syllabi/high/high_school_chemistry.md`](../../../src/data/syllabi/high/high_school_chemistry.md)
**Track ids**: `col-high-school-chemistry` (line 1840 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts))
**Tier**: high
**Region**: US NGSS + UK GCSE (explicit in syllabus). Not currently tagged.
**Status**: `playable` — **but the track has NO dedicated question file.** All content is generic `scienceBlueprints()` filler from [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) (line 367).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Matter, Measurement, and Chemical Evidence | ❌ | No items. |
| 2. Atomic Structure and the Periodic Table | ❌ | No items. Generic blueprint covers "Particles" via peppermint-diffusion only. |
| 3. Bonding, Structure, and Properties | ❌ | No items. |
| 4. Moles, Formulas, and Stoichiometry | ❌ | No items — quantitative chemistry entirely absent. |
| 5. Reactions, Solutions, and Gases | ❌ | No items. |
| 6. Energy, Rates, and Reaction Pathways | ❌ | No items. |
| 7. Equilibrium, Acids, Bases, and Chemical Systems | ❌ | No items. |
| 8. Chemistry Lab Studio | ❌ | No items. |

**Effective coverage: 0%.** The student sees the same 5–8 `scienceBlueprints()` items (clover-to-fox energy, peppermint diffusion, fairy-lights series, dark-rock albedo, purple pea cross) used to fill **every** science track without a custom branch in `highGeneratedQuestionsByTrack` (lines 1576–1597 of `highGenerated.ts`). None of those blueprints is chemistry.

## Per-file recommendations

| File | hsChem Q's | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Generic blueprints recycle non-chemistry concepts (energy chain, particle diffusion, circuit brightness, albedo, Mendelian genetics) under chemistry-shaped chapter labels. Chapter-taxonomy mismatch: blueprint chapters do not match the syllabus's eight chapters. Either author chemistry-specific blueprints or exclude this track from generic fill. |
| **No dedicated `col-high-school-chemistry` question file** | — | **AUTHOR** | This is the highest-priority authoring gap in the cluster. |
| [`apChemistryWorkoutGenerated.ts`](../../../src/data/questionCatalog/apChemistryWorkoutGenerated.ts) | 50 (apChem only) | **MERGE — partial down-level** | ~20–30 AP Chem workout items (mole concept, balanced equations, basic stoichiometry, periodic trends, ionic/covalent bonding, pH definition, exo/endothermic) are appropriate at HS Chem level. Tag and route a curated subset here. |
| [`middleSchoolChemistryStaarBatch.ts`](../../../src/data/questionCatalog/middleSchoolChemistryStaarBatch.ts) | 10 (middleSchoolChemistry only) | **MERGE — partial up-level** | Items on density, conservation of mass, elements/compounds/mixtures are foundation-level appropriate for early HS Chem chapters 1, 4. |

## Open actions (priority order)

1. **Author 30–40 Floe-native HS Chemistry questions** spanning the eight syllabus chapters. Voice/format template: `highSchoolBiologyNgssExamBatch.ts` (sibling course). Highest-priority content: atomic structure (Chapter 2), bonding (Chapter 3), basic stoichiometry (Chapter 4), pH/equilibrium qualitative (Chapter 7). **This is the largest authoring gap of any HS Science course.**
2. **Curate ~25 cross-tier items** from `apChemistryWorkoutGenerated` (down-level) and `middleSchoolChemistryStaarBatch` (up-level) and wire them into `highGenerated.ts` as a track-specific branch (mirror the `middleSchoolBiology` pattern at line 1588).
3. **Exclude `col-high-school-chemistry` from the generic blueprint filler** until chemistry-specific blueprints are written, or author 3–4 chemistry blueprints (acid-base color change, dissolving particles, mole-mass conversion, energy diagram).
4. **Add `regions: ['US','UK']`** — syllabus explicitly NGSS + GCSE.
5. **Demote to `status: 'soon'`** until a real bank exists — current `playable` flag misleads.

## Estimated effort

- HS Chem authoring (40 items): ~12 hours
- Cross-tier curation + wiring: ~2 hours
- Blueprint authoring (4 chemistry blueprints): ~2 hours
- Region tag + status flag: ~15 min

**~2 working days.** Headline: **`status:'playable'` track with zero dedicated content** — auto-FIX flag.

## Notes for next auditor

This is one of two HS Science tracks (with `col-high-school-physics`) that lacks a dedicated question file entirely. The newer `col-*` track family generally has thinner wiring than the legacy AP/middle-school tracks — the pattern suggests the collection-style ids were created without backing content authoring.
