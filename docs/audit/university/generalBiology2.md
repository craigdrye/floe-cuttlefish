# Audit: generalBiology2

**Syllabus**: [`src/data/syllabi/university/general_biology_2.md`](../../../src/data/syllabi/university/general_biology_2.md)
**Track id**: `generalBiology2`
**Tier**: university
**Region**: Jurisdiction-neutral (OpenStax / Vision and Change / HHMI BioInteractive)

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Evolution and Population Genetics | Partial | Natural selection scenario; no Hardy-Weinberg numeric, no drift |
| 2. Speciation, Phylogeny, History of Life | Missing | No cladogram interpretation, no homology vs analogy, no fossil-evidence item |
| 3. Microbial, Protist, Fungal Diversity | Missing | None observed |
| 4. Plant Evolution, Structure, Function | Missing | None observed |
| 5. Animal Diversity and Body Plans | Missing | None observed |
| 6. Animal Physiology and Homeostasis | Missing | None observed |
| 7. Ecology: Populations, Communities, Ecosystems | Partial | Carrying capacity item; no food-web / energy-flow / community Qs |
| 8. Conservation Biology and Field Evidence Studio | Missing | None observed |

**This is among the most coverage-starved tracks in the cluster.** From the visible sample only Chapters 1 and 7 have any representation. Speciation, diversity (microbes/plants/animals), physiology, and conservation — i.e. most of second-semester biology — are absent.

## Per-file recommendations

| File | gBio2 Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) (generalBiology2 section, ids 3107000+) | ~18 | **FIX** | Sample items (squirrel jaw natural selection, dramatic-frog carrying capacity) are correctly framed but limited to two of the eight syllabus chapters. **DEFAULT_FLAW everywhere** via the file-level `q()` helper. Both the coverage gap and the explanation gap need to close. |

No other files wire to generalBiology2. No exam batch, no workout-generated, no AP Biology bridge.

## Cross-cutting flags

- **DEFAULT_FLAW** — confirmed.
- **Massive coverage gap.** 6 of 8 syllabus chapters have zero question coverage. The track is `playable` but barely tests the breadth the syllabus promises.
- **Adjacent content exists but isn't wired** — `apBiologyExamBatch.ts`, `apBiologyWorkoutGenerated.ts`, `apBiologyAnimalEcologyBatch.ts`, `openTriviaApBiologyScienceBatch2Imported.ts`, `openTriviaMolecularBiologyImported.ts`, `openTriviaAnimalBiologyImported.ts` all contain second-semester-biology content that could feed this track. Verify those aren't already wired via collections, then either wire or lift the strong items.
- **Tone is fine** for the items that exist.
- **No region issues.**

## Open actions (priority order)

1. **Coverage build-out is the headline action** — author at least 4-6 Qs each for Chapters 2-6 and Chapter 8. Total ~30 new questions. Voice template: `universityPrep.ts` for sober register, `genBio1` for warm-up flavor.
2. **Survey `apBiologyAnimalEcologyBatch.ts` and `openTriviaApBiologyScienceBatch2Imported.ts`** — these likely contain liftable ecology, physiology, and animal-diversity items. Lift selectively into a new `generalBiology2ExamBatch.ts` rather than re-importing wholesale.
3. **Per-distractor rewrite of the existing 18** — same DEFAULT_FLAW fix as everywhere else in `universityAgentGenerated.ts`.
4. **Add Hardy-Weinberg numeric** to Chapter 1 — currently only the natural-selection scenario is covered; allele-frequency calculation is a stated practice question in the syllabus.
5. **Add at least one phylogeny / cladogram interpretation Q** — Chapter 2 has zero coverage.

## Estimated effort

- Coverage build-out (~30 new questions): ~10 hours
- Per-distractor rewrite of existing 18: ~3 hours
- Lift / wire from AP Biology batches: ~2 hours
- Total: ~2 working days

## Notes for next auditor

This is one of the largest content gaps in the cluster — comparable to genPhys1 in scale. The good news: there's substantial AP-Biology content already in the catalog that maps cleanly to second-semester general biology. The audit team for the AP Biology track should coordinate with the generalBiology2 build-out to avoid duplicate authoring. Hardy-Weinberg, cladogram reading, and ecosystem energy-flow calculations all appear in AP Bio banks and would fit here without rewrites.
