# Audit: apBiology

**Syllabus**: [`src/data/syllabi/high/ap_biology.md`](../../../src/data/syllabi/high/ap_biology.md)
**Track ids**: `apBiology` (line 17 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)) — wired bank. Plus `col-ap-biology` (line 1356) — same syllabus, **zero questions wired**. **Track-id duplication.**
**Tier**: high
**Region**: US (College Board AP — assumed; not currently tagged)
**Status**: both `playable`; only `apBiology` actually has content. Syllabus header "Covers: `col-ap-biology`" disagrees with the wired id.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Biology Practices and Chemistry of Life | ✅ | "Experimental Design", "Chemistry of Life" tags in `apBiologyExamBatch`; control-group items in workout file. |
| 2. Cell Structure, Membranes, and Transport | ✅ | Strong — cell membranes, osmosis, active transport across exam batch + workout. |
| 3. Cellular Energetics | ✅ | ETC, photosynthesis, respiration, ATP — well represented. |
| 4. Cell Communication and Cell Cycle | ⚠️ partial | Signal transduction once; mitosis/meiosis covered. Checkpoints, cancer, apoptosis missing. |
| 5. Heredity, Gene Expression, and Biotechnology | ✅ | Replication, transcription, translation, Punnett squares, PCR, gel electrophoresis, restriction enzymes. |
| 6. Evolution and Phylogeny | ✅ | Natural selection, Hardy-Weinberg, drift, gene flow, phylogenetics. |
| 7. Ecology and Systems Interactions | ✅ | Carrying capacity, trophic pyramids, symbiosis, nitrogen cycle, density-dependence — plus the huge animal-ecology batch. |
| 8. AP Biology Exam Studio (FRQ, stats) | ❌ | **Real gap.** No chi-square, no figure-reading, no FRQ-style claim/evidence/reasoning items. |

## Per-file recommendations

| File | apBio Q's | Bucket | Reason |
|---|---|---|---|
| [`apBiologyExamBatch.ts`](../../../src/data/questionCatalog/apBiologyExamBatch.ts) | 10 | **KEEP** | Hand-authored per-distractor explanations; chapter tags ("Chemistry of Life", "Cell Membranes", "Cellular Energetics") map cleanly to syllabus chapters 1–3 & 5–7. Floe-native, not raw import. |
| [`apBiologyWorkoutGenerated.ts`](../../../src/data/questionCatalog/apBiologyWorkoutGenerated.ts) | 50 | **KEEP** | High-quality drill items, per-distractor explanations throughout. Chapters ("Cell Structure", "Cell Division", "Genetics", "Biotechnology") align with syllabus. Some overlap with exam batch (mitosis, Punnett) — acceptable as drill. |
| [`apBiologyAnimalEcologyBatch.ts`](../../../src/data/questionCatalog/apBiologyAnimalEcologyBatch.ts) | ~50 | **FIX** | Quality is solid but content drifts into species trivia (cobra hood, octopus phylum, marsupial pouch). Trim to ~20 items that probe ecology mechanisms (keystone, trophic, niche, biodiversity indices) and move animal-ID rows to `guessTheAnimal`/`guessTheFish`. |
| [`openTriviaAnimalBiologyImported.ts`](../../../src/data/questionCatalog/openTriviaAnimalBiologyImported.ts) | ~50 | **DELETE** (auto-FIX flag) | **DEFAULT_FLAW**: every distractor uses stock string *"This choice does not fit the biology concept named in the prompt. Match the answer to the adaptation, physiology, reproduction, or ecology clue."* Raw OpenTriviaQA imports with stripped context. Salvage 0–2 mechanism items into the workout file first. |
| [`openTriviaMolecularBiologyImported.ts`](../../../src/data/questionCatalog/openTriviaMolecularBiologyImported.ts) | ~75 | **DELETE** (auto-FIX flag) | Same DEFAULT_FLAW pattern. Imported with stripped context. |
| [`openTriviaApBiologyScienceBatch2Imported.ts`](../../../src/data/questionCatalog/openTriviaApBiologyScienceBatch2Imported.ts) | ~330 | **DELETE** (auto-FIX flag) | Same DEFAULT_FLAW: *"This choice does not match the biology, anatomy, cell, or physiology clue…"* Salvage ~10–20 conceptually clean rows into the workout file before deleting. |
| `openTriviaCuratedBiologyAdditionalQuestions` (from `openTriviaCuratedAdditionalImported.ts`) | unknown | **AUDIT** | Likely same DEFAULT_FLAW family — confirm and apply same DELETE-with-salvage rule. |
| `schoolAssessmentHighSchoolBiologyQuestions` | ? | **KEEP probable** | Hand-curated NYSED/STAAR style; matches Chapter 7/8 evidence reasoning if formatting holds. |

## Open actions (priority order)

1. **Delete the three openTrivia*Imported.ts bio files** after salvaging ~15 strong rows back into `apBiologyWorkoutGenerated.ts` (~90 minutes triage).
2. **Author 10–12 Chapter 8 FRQ-style items** (chi-square interpretation, figure reading, claim-evidence) — gap in syllabus coverage and the differentiator vs raw recall.
3. **Resolve the `apBiology` vs `col-ap-biology` double-track.** Either retire `col-ap-biology` from `high.ts` or route all questions through it and demote `apBiology` to `status: 'soon'`. Same fix needed across the AP cluster.
4. **Trim `apBiologyAnimalEcologyBatch`** to mechanism-only items; move species-ID rows to field-identification tracks.
5. **Add `regions: ['US']`** to the track in `high.ts` (College Board AP is US-only).
6. **Fix syllabus header** to either correct the track id reference or accept the collection alias.

## Estimated effort

- DEFAULT_FLAW triage + delete: ~2 hours (3 files, salvage pass)
- FRQ/stats authoring: ~4 hours (12 questions × 20 min)
- Animal-ecology trim + reroute: ~1 hour
- Track-id consolidation: ~30 min

**~1 working day.** Headline: solid Floe-native base (60 q across 2 files) buried under ~450 DEFAULT_FLAW imports; cleanup is mostly deletion.

## Notes for next auditor

The DEFAULT_FLAW pattern in `openTrivia*Imported.ts` files is cluster-wide — same stock-phrase template appears in chemistry, physics, and earth-science imports. Treat as a coordinated DELETE wave rather than per-course decisions.
