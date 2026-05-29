# Audit: middleSchoolBiology

**Syllabus**: [`src/data/syllabi/high/middle_school_biology.md`](../../../src/data/syllabi/high/middle_school_biology.md)
**Track ids**: `middleSchoolBiology` (line 1829 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)). Phantom alias `col-middle-school-biology` referenced only in `syllabi/index.ts` line 235 — not in `high.ts`.
**Tier**: high (catalog grouping; the content is ages 12–13)
**Region**: US NGSS + UK KS3 (explicit in syllabus). Not currently tagged.
**Status**: `playable`. Wired via dedicated `highGenerated.ts` branch (line 1588).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Living Things and Cell Theory | ❌ | No items on cell theory, levels of organization, microscope scale. |
| 2. Cell Structures and Functions | ✅ | Cell membrane (boundary/transport), nucleus role in STAAR batch. Plant vs animal not covered explicitly. |
| 3. Body Systems and Homeostasis | ✅ | Circulatory system role in STAAR batch. **No respiratory, digestive, nervous system items.** |
| 4. Matter and Energy in Organisms | ✅ | Photosynthesis inputs, cellular respiration fuel. |
| 5. Ecosystems and Interdependence | ✅ | Producers, decomposers in STAAR batch. **No food-web or energy-pyramid items.** |
| 6. Genetics and Inheritance | ✅ | Inherited traits via genes, Punnett squares. |
| 7. Natural Selection and Change Over Time | ✅ | Adaptation definition. **No variation/selection/fossil evidence items.** |
| 8. Biology Investigation Studio | ❌ | No fair-test, graphing, or claim-evidence items. |

## Per-file recommendations

| File | msBio Q's | Bucket | Reason |
|---|---|---|---|
| [`middleSchoolBiologyStaarBatch.ts`](../../../src/data/questionCatalog/middleSchoolBiologyStaarBatch.ts) | 10 | **KEEP** | Floe-native, per-distractor explanations, audience-appropriate tone (e.g., "Weather reports don't transmit inherited traits"). Chapter labels (Cells, Cell Energy, Genetics, Evolution, Ecology, Body Systems) map cleanly to syllabus. |
| `middleSchoolScienceAssessmentBiologyQuestions` (from [`primaryScienceAssessmentImported.ts`](../../../src/data/questionCatalog/primaryScienceAssessmentImported.ts)) | ? | **AUDIT — likely KEEP** | Imported school-assessment style; verify per-distractor format. If NGSS-aligned and hand-curated, KEEP. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Generic blueprints (peppermint diffusion, clover-to-fox energy, purple pea cross) sit under middle-school biology and approximately fit Chapters 4 and 6, but the "fairy lights" circuit and "dark rock albedo" entries are physics/Earth science — chapter-taxonomy mismatch. Author bio-only blueprints or filter. |
| Any cross-wired primary science content | ? | **AUDIT** | Some `primaryGeneratedScienceDiscovery.ts` rows might leak in via age-blended routing; confirm. |

## Open actions (priority order)

1. **Author 20–25 items closing Chapters 1, 3, 5, 7, 8 gaps** — cell theory, body-systems coordination, food webs/pyramids, variation+selection mechanism, fair-test design. Voice template: `middleSchoolBiologyStaarBatch` (concrete, age-appropriate, playful corrections).
2. **Audit `middleSchoolScienceAssessmentBiologyQuestions` quality** and either KEEP or downgrade.
3. **Author 4–6 bio-only science blueprints** to replace generic fill (cell-organelle match, food-chain trace, simple Punnett, adaptation example).
4. **Resolve the `middleSchoolBiology` vs `col-middle-school-biology` phantom split** — drop the unused alias from `syllabi/index.ts`.
5. **Add `regions: ['US','UK']`** — syllabus explicitly NGSS + KS3.
6. **Confirm chapter labels** — STAAR batch uses "Cell Energy" while syllabus uses "Matter and Energy in Organisms". Minor rename for consistency.

## Estimated effort

- Authoring (22 items): ~7 hours
- School-assessment audit: ~45 min
- Blueprint authoring: ~2 hours
- Track-id cleanup + chapter rename: ~30 min

**~1.5 working days.** Headline: solid 10-item STAAR base; needs targeted authoring on body systems and ecology mechanism.

## Notes for next auditor

The `middleSchool*StaarBatch.ts` family (bio, chem, physics, earth-space) is a unified pattern — same author voice, same `q()` factory, same chapter discipline. Worth treating as a coordinated batch for any framework-wide changes.
