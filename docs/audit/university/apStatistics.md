# Audit: apStatistics

**Syllabus**: [`src/data/syllabi/university/ap_statistics.md`](../../../src/data/syllabi/university/ap_statistics.md)
**Track id**: `apStatistics`
**Tier**: university
**Region**: US (AP credential — jurisdiction-specific; not tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Exploring One-Variable Data | yes | Mean sensitivity, skew, z-scores via statisticsReasoning + statisticsExamBatch |
| 2. Exploring Two-Variable Data | partial | Correlation sign covered; regression slope inference thin |
| 3. Collecting Data | yes | Strong — observational vs experiment, random assignment, blocking, stratified vs cluster |
| 4. Probability and Random Variables | partial | Conditional prob covered; binomial/geometric setting drills missing |
| 5. Sampling Distributions | partial | CLT/empirical rule present; condition-checking drills sparse |
| 6. Inference for Proportions | yes | CI meaning, Type I error covered |
| 7. Inference for Means | partial | Significance level covered; t-procedure choice drills missing |
| 8. Chi-Square, Regression Inference, FRQ | no | No chi-square items located; no regression-slope inference |

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`statisticsReasoningWorkoutGenerated.ts`](../../../src/data/questionCatalog/statisticsReasoningWorkoutGenerated.ts) | ~60 | **KEEP** | Per-distractor explanations, distinct nudges. Strong study-design coverage (random assignment vs sampling, confounding, blocking, stratified vs cluster). No `DEFAULT_FLAW`. Source line declares OpenIntro/IMS coverage — but unlike the raw import, this is Floe-native authoring. |
| [`statisticsExamBatch.ts`](../../../src/data/questionCatalog/statisticsExamBatch.ts) | 10 | **KEEP** | Tight, hand-authored set with sharp distractor reasoning (Type I error, voluntary-response bias, confidence-interval meaning correctly handles the frequentist trap). |
| [`universityBuilders.ts`](../../../src/data/questionCatalog/universityBuilders.ts) `makeColAPStatisticsQuiz` | ~24 | **KEEP** | Scaffolded format matches AP rubric expectations. Canonical source for the track. |
| [`imsTutorialsImported.ts`](../../../src/data/questionCatalog/imsTutorialsImported.ts) | 92 | **DELETE** | **Textbook case of the flag in `CONTENT_AUDIT.md`**: imported source content with stripped context. Prompts read "What type of study is this?" with no study described. Every distractor uses the same boilerplate "This is one of the source distractors, but it does not match the statistical setup." — a `DEFAULT_FLAW` in everything-but-name. **Salvage zero**, delete entirely. Wired at `universityCollege.ts:65`. |
| [`openIntroImsImportedQuestions`](../../../src/data/questionCatalog/openIntroImsImported.ts) | unknown | **FIX** | Better: prompts carry context ("In the IMS vaccine trial exercise...") and distractors are per-item. But the lesson string leans on opaque source IDs (`openintro-ims::data-hello::10`) — rewrite lessons to be self-contained. |
| `openIntroStatsAdditionalImportedQuestions` / `openIntroStatsSlidesQuestions` | unknown | **FIX** | Spot-check for the same stripped-context smell as `imsTutorialsImported.ts`. |
| `numbasWebworkStatistics*` (3 bundles) | unknown | **KEEP** if per-distractor explanations survived; spot-check |

## Cross-cluster flags

- **Shared OpenIntro/IMS imports with `introDataScience`**: confirmed at `universityCollege.ts:74-83`. The two tracks load **identical** import bundles (`imsTutorials`, `openIntroIms`, `openIntroStatsAdditional`, `openIntroStatsSlides`, `statisticsReasoning`, three numbasWebwork statistics packs). This is exactly the duplication the May 2026 audit flagged. Either differentiate by chapter filter or accept the shared pool and document it.
- **`imsTutorialsImported.ts` is the worst file in the cluster** — 92 questions of stripped context.
- **Region**: AP is US-only. The syllabus notes a 2026-27 course revision is in progress; metadata should carry `region: 'US'` and `lastReviewed` to flag drift after the revision lands.
- **Math notation**: ASCII (`r = -0.82`, `alpha = 0.05`, `P(music | art) = 12/30`). Renderer-safe.

## Open actions (priority order)

1. **Delete `imsTutorialsImported.ts`** and remove its import from `universityCollege.ts` lines 65 and 75. ~92 broken-context questions vanish; salvage none.
2. **Decide on `apStatistics` vs `introDataScience` differentiation** — they should not share 6+ banks identically. Options: chapter-filter `introDataScience` to data wrangling / ML-adjacent chapters, or accept overlap and add a clear track narrative difference.
3. **Author chapter 8 content**: chi-square goodness-of-fit + homogeneity, regression-slope CI/test, LINE conditions. ~8 items.
4. **Add region tag + `lastReviewed` field** in [`src/data/ageCatalog/university.ts`](../../../src/data/ageCatalog/university.ts).
5. **Rewrite `openIntroImsImported.ts` lessons** to drop opaque source IDs (`openintro-ims::data-hello::10`) in favour of one-sentence concept summaries.

## Estimated effort

- Delete `imsTutorialsImported.ts` + import cleanup: ~30 min
- Chi-square / regression inference authoring: ~4 hours
- Disentangle `apStatistics` / `introDataScience`: ~3 hours
- Region + reviewed metadata: ~30 min

**~1 working day.** The delete alone is the highest-ROI action in the cluster.

## Notes for next auditor

The `apStatistics` ↔ `introDataScience` shared pool is the most visible duplication problem in the maths cluster. Audit them together: data-wrangling/plotting content belongs to `introDataScience`; inference/study-design/AP rubric content belongs to `apStatistics`.
