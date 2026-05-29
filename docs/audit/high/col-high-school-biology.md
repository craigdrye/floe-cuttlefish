# Audit: col-high-school-biology

**Syllabus**: [`src/data/syllabi/high/high_school_biology.md`](../../../src/data/syllabi/high/high_school_biology.md)
**Track ids**: `col-high-school-biology` (line 1807 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)) — wired. Plus `col-high-school-biology-ngss` (NOT in `high.ts` but referenced in [`highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) line 87 and in syllabi/index.ts line 240). **Phantom track id.**
**Tier**: high
**Region**: US (NGSS / NYSED / STAAR) — explicit in `highSchoolBiologyNgssExamBatch` source line. Not currently tagged on the track.
**Status**: `playable`. Syllabus also lists `col-high-school-biology---ngss` (note triple-hyphen typo) as a covered id.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Biology Practices and Chemistry of Life | ⚠️ partial | Enzyme function (NGSS batch). No water-properties, pH, macromolecule items here (lives on `apBiology`). |
| 2. Cells, Membranes, and Transport | ❌ | **No cell-transport items in the NGSS batch.** Severe gap given the syllabus chapter. |
| 3. Energy in Living Systems | ❌ | **No photosynthesis / respiration / ATP items.** Major gap. |
| 4. DNA, Cell Division, and Gene Expression | ✅ | Mitosis, meiosis (crossing over), transcription, translation, mutation in the NGSS batch. |
| 5. Inheritance and Biotechnology | ❌ | **No Punnett squares, pedigrees, PCR, electrophoresis here.** |
| 6. Evolution and Biological Diversity | ✅ | Homologous structures = common ancestry. Light coverage. |
| 7. Ecology and Human Impacts | ✅ | Energy pyramid, carrying capacity in NGSS batch. |
| 8. Biology Investigation Studio | ⚠️ partial | Homeostasis/negative feedback once. Lacks experimental-design / claim-evidence items. |

**The wired `col-high-school-biology-ngss` collection (10 NGSS items + NGSS quiz builder + NYSED school-assessment items) is thin. The track also pulls from `rawCollectionMappings.ts` (lines 307, 355, 517, 771) which references `targetTrackIds: ['col-high-school-biology', 'apBiology']` for shared sources.**

## Per-file recommendations

| File | hsBio Q's | Bucket | Reason |
|---|---|---|---|
| [`highSchoolBiologyNgssExamBatch.ts`](../../../src/data/questionCatalog/highSchoolBiologyNgssExamBatch.ts) | 10 | **KEEP** | Floe-native, per-distractor explanations, NGSS-aligned chapter labels match syllabus (Cells, Cell Division, Genetics, Evolution, Ecology, Mutations, Populations, Homeostasis). |
| `makeHighSchoolBiologyNGSSQuiz()` (inside `highAdvanced.ts`) | unknown count | **AUDIT** | Imported as a generator in `highAdvanced.ts` line 88. Verify per-distractor quality and chapter alignment. |
| `schoolAssessmentHighSchoolBiologyQuestions` (from `schoolAssessmentMathScienceImported.ts`) | ? | **AUDIT — likely KEEP** | NYSED Living Environment / STAAR origin; if hand-curated and per-distractor, keep. |
| Various NGSS-routed sources via `rawCollectionMappings.ts` | unknown | **AUDIT** | Four mapping entries route content here. Worth tracing what they actually deliver. |
| **No dedicated `col-high-school-biology-ngss` wiring outside `highAdvanced.ts`** | — | **FIX** | The `-ngss` suffix variant is a phantom track in the syllabi index — collapse to one id. |

## Open actions (priority order)

1. **Author 25–30 items covering Chapters 2, 3, and 5** (cell transport, photosynthesis/respiration, inheritance) — biggest gaps. Voice template: `highSchoolBiologyNgssExamBatch`. This is the highest-leverage authoring in the cluster.
2. **Resolve the `col-high-school-biology` / `col-high-school-biology-ngss` split.** The `-ngss` variant only exists in the `highAdvanced` route and the syllabi index — collapse to one. Same advisory for the `-ngss` typo (`---ngss`).
3. **Confirm `schoolAssessmentHighSchoolBiologyQuestions` quality** and either KEEP or downgrade. If it's STAAR/NYSED raw, similar DEFAULT_FLAW concerns may apply.
4. **Add `regions: ['US']`** — explicitly NGSS, not international.
5. **Cross-link with `apBiology`** for Chapter 1 chemistry-of-life and Chapter 6 evolution items; some `apBiology` content is appropriate to share down-level.

## Estimated effort

- Chapter 2/3/5 authoring: ~9 hours (30 items × 18 min)
- Track-id consolidation: ~30 min
- Source audit (school-assessment, rawCollectionMappings paths): ~1 hour

**~1.5 working days.** Headline: NGSS-aligned but undersized — only 10 hand-authored items for a full-year biology syllabus.

## Notes for next auditor

The `col-high-school-*` family across biology, chemistry, and physics has the same pattern: a single 10-item NGSS exam batch plus a quiz generator, sitting under a track id that's also duplicated as a "-ngss" suffix variant. Cluster fix would be authoring one larger Floe-native bank per subject and retiring the suffix variants.
