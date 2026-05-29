# Audit: middleSchoolChemistry

**Syllabus**: [`src/data/syllabi/high/middle_school_chemistry.md`](../../../src/data/syllabi/high/middle_school_chemistry.md)
**Track ids**: `middleSchoolChemistry` (line 1972 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)). Phantom alias `col-middle-school-chemistry` referenced only in `syllabi/index.ts` line 237.
**Tier**: high (catalog grouping; ages 13–14)
**Region**: US NGSS + UK KS3 (explicit in syllabus). Not currently tagged.
**Status**: `playable`. Wired via dedicated `highGenerated.ts` branch (line 1590).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Matter and Particle Models | ✅ | Matter definition, particles in solids, density formula in STAAR batch. |
| 2. Atoms, Elements, and Isotopes | ⚠️ partial | "An element is one kind of atom" covered. **No proton/neutron/electron breakdown items.** |
| 3. Periodic Table Patterns | ❌ | No items on groups, periods, metals/nonmetals, valence electrons. |
| 4. Elements, Compounds, Mixtures, and Separation | ✅ | Element vs compound vs mixture (H2O, salt water). **No filtration/distillation/chromatography items.** |
| 5. Bonding and Structure Basics | ❌ | No ionic vs covalent items at MS level. |
| 6. Chemical Reactions and Conservation | ✅ | Physical vs chemical change (ice melting), evidence of reaction (bubbling), mass conservation. |
| 7. Solutions, Acids, Bases, and pH | ⚠️ partial | Dissolving covered. **No pH-scale or indicator items.** |
| 8. Chemistry Investigation Studio | ❌ | No fair-test/safety items. |

## Per-file recommendations

| File | msChem Q's | Bucket | Reason |
|---|---|---|---|
| [`middleSchoolChemistryStaarBatch.ts`](../../../src/data/questionCatalog/middleSchoolChemistryStaarBatch.ts) | 10 | **KEEP** | Floe-native, per-distractor explanations, audience-appropriate ("Color does not determine mass conservation"). Chapter labels (Matter, Physical Properties, Chemical Changes, Atoms, Compounds, Mixtures, Conservation, Solutions) map to syllabus chapters 1, 4, 6, 7. |
| `middleSchoolScienceAssessmentChemistryQuestions` (from [`primaryScienceAssessmentImported.ts`](../../../src/data/questionCatalog/primaryScienceAssessmentImported.ts)) | ? | **AUDIT — likely KEEP** | Same provenance as bio sibling; verify quality. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Only the "peppermint diffusion" blueprint is chemistry-shaped — others (fox energy, fairy lights, albedo, pea cross) are off-domain. Chapter-taxonomy mismatch. |

## Open actions (priority order)

1. **Author 20–25 items closing Chapters 2, 3, 5, 7, 8 gaps** — atomic structure breakdown, periodic-table groups/periods, ionic vs covalent at MS level, pH and indicators, lab safety/fair-test design. Voice template: `middleSchoolChemistryStaarBatch`.
2. **Audit `middleSchoolScienceAssessmentChemistryQuestions`** for KEEP/downgrade.
3. **Author 4 chemistry-specific blueprints** (acid+indicator color, particle-state change, mass-conservation check, dissolving rate) and route them only to chemistry tracks.
4. **Resolve `middleSchoolChemistry` vs `col-middle-school-chemistry` phantom split.**
5. **Add `regions: ['US','UK']`** — NGSS + KS3.
6. **Consider down-routing 5–10 `apChemistryWorkoutGenerated` items** for atomic-structure basics — bridge to MS level via simpler prompts.

## Estimated effort

- Authoring (22 items): ~7 hours
- School-assessment audit: ~45 min
- Blueprint authoring: ~2 hours
- Track-id cleanup: ~20 min

**~1.5 working days.** Headline: same shape as middleSchoolBiology — 10 strong items, ~50% coverage; needs periodic table + acids/bases work.

## Notes for next auditor

The `middleSchoolChemistry` syllabus is more demanding than the STAAR batch suggests — it explicitly includes ionic/covalent bonding and pH at MS level (UK KS3 norms). Authoring should pitch slightly above the STAAR floor.
