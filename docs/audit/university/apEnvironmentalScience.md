# Audit: apEnvironmentalScience

**Syllabus**: [`src/data/syllabi/university/ap_environmental_science.md`](../../../src/data/syllabi/university/ap_environmental_science.md)
**Track id**: `apEnvironmentalScience`
**Tier**: university (College Board AP bridge)
**Region**: **US — AP Environmental Science is a College Board exam.** Currently untagged. The syllabus and exam-aligned tier should be flagged `region: 'US'`; the underlying science is universal but the assessment framing and free-response style are US-specific.

## Coverage map (syllabus to questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Ecosystems and Energy Flow | Yes | Producers, primary consumers, trophic energy loss, keystone species |
| 2. Biodiversity, Cycles, and Natural Change | Yes | Biodiversity at three levels, habitat fragmentation, invasive species |
| 3. Populations and Human Demography | Yes | Carrying capacity, exponential vs logistic, density-dependent/independent |
| 4. Earth Systems, Atmosphere, and Climate | Yes | Earth-system spheres, greenhouse effect, albedo, weather vs climate, ozone |
| 5. Land and Water Use | Partial | Soil formation/erosion, sustainable agriculture, urban runoff; no overfishing, tragedy of the commons |
| 6. Energy Resources and Consumption | Partial | Renewable/nonrenewable, solar PV, efficiency; no nuclear fission, no grid constraints |
| 7. Pollution, Waste, and Human Health | Yes | Point vs nonpoint, bioaccumulation/biomagnification, landfill, composting |
| 8. Global Change and APES Studio | Partial | Greenhouse mechanism, risk assessment; **no AP free-response prompts, no calculations practice** |

## Per-file recommendations

| File | APES Q's | Bucket | Reason |
|---|---|---|---|
| [`apEnvironmentalScienceWorkoutGenerated.ts`](../../../src/data/questionCatalog/apEnvironmentalScienceWorkoutGenerated.ts) | 50 | **KEEP** | **Verified: wired to `universityAcademic.ts` at line 352.** Hand-shaped per-distractor explanations (the `miss()` helper enforces `[answer, why, hint]` triples — no DEFAULT_FLAW constant). Coverage is broad and the chapter labels track the syllabus closely. Tone is sober and exam-appropriate. This is one of the highest-quality science workout files in the catalog. |
| [`apEnvironmentalScienceExamBatch2.ts`](../../../src/data/questionCatalog/apEnvironmentalScienceExamBatch2.ts) | 50 | **FIX** | **Verified: wired to `universityAcademic.ts` at line 351.** Same `miss()` triple pattern — distractor explanations are real, not templated. **However: chapter mapping is loose** — questions about lightning safety, Pluto's orbital period (?!), Venus atmosphere, Charon, Saffir-Simpson scale are all bucketed under APES via OpenTriviaQA's science-technology category. Several items (Mars/Venus astronomy) belong in `cosmologyAndAstronomy`, not APES. Cull or re-route ~10 off-topic items. |
| [`openTriviaEarthSystemsQuestions`](../../../src/data/questionCatalog/openTriviaEarthPhysicsMicroImported.ts) (wired via universityAcademic.ts line 349) | ~30 | **DELETE** | Uses a generic distractor flaw string ("This choice does not match the Earth-system, atmosphere, weather, or environmental process in the prompt") for every wrong answer. **This is a DEFAULT_FLAW pattern in disguise** — the string varies slightly per-file but is identical across all wrong answers within the file. Replace with the workout-generated content already present. |
| [`openTriviaCuratedEnvironmentalScienceAdditionalQuestions`](../../../src/data/questionCatalog/openTriviaCuratedAdditionalImported.ts) (wired line 350) | ~20 | **MERGE → apEnvironmentalScienceExamBatch2** | Distractors use a `distractor('environmental science', ...)` helper which generates templated explanations. Salvageable items (acid rain pH 5.6, Saffir-Simpson) should be lifted with real explanations into the exam batch; rest deletable. |

## Cross-cutting flags

- **DEFAULT_FLAW** — present in `openTriviaEarthSystemsQuestions` and `openTriviaCuratedEnvironmentalScienceAdditionalQuestions`. **Absent** from both `apEnvironmentalScienceWorkoutGenerated.ts` and `apEnvironmentalScienceExamBatch2.ts` — the workout-generated and exam-batch files are the good shape.
- **US-only framing untagged** — AP Environmental Science is a College Board credential. The track entry in `university.ts` needs `region: 'US'` (or equivalent tag once the schema supports regions).
- **Off-topic content in apEnvironmentalScienceExamBatch2** — astronomy items (Pluto, Charon, Mars, Venus) leaked in from OpenTriviaQA's science-technology bucket. These should move to `cosmologyAndAstronomy`.
- **Missing AP free-response practice** (Chapter 8 of the syllabus) — APES exam includes calculation FRQs and design-an-investigation prompts. None of the current question files attempt this format.

## Open actions (priority order)

1. **Add `region: 'US'` tag** to the apEnvironmentalScience entry in `university.ts`.
2. **Delete the openTrivia Earth-systems wiring** (line 349 of `universityAcademic.ts`) — the workout-generated file already covers this content with real per-distractor explanations. (No source edits requested in this audit; flag for the next consolidation wave.)
3. **Re-route the astronomy items** in `apEnvironmentalScienceExamBatch2.ts` to `cosmologyAndAstronomy` (or delete; some duplicate existing cosmology content).
4. **Author APES-style FRQ-flavored items** for Chapter 8 — calculation setups (energy efficiency math, ecological footprint), design-an-experiment prompts.
5. **Add overfishing / tragedy-of-the-commons items** (Ch 5) and **nuclear fission / grid constraint items** (Ch 6).

## Estimated effort

- Region tag + wiring cleanup: ~30 min
- Off-topic culling: ~1 hour
- ~10 new FRQ-style items: ~4 hours
- Total: ~1 working day

## Notes for next auditor

The May 2026 audit finding is confirmed: `apEnvironmentalScienceWorkoutGenerated.ts` and `apEnvironmentalScienceExamBatch2.ts` are wired only to `universityAcademic.ts` (lines 351-352), with `apEnvironmentalScience` as the consumer. The track does exist in `university.ts`. The workout-generated file is the strongest piece of authored content for this track — protect it. The OpenTrivia-imported bands diluting the bank should be the first cuts in the pruning wave.
