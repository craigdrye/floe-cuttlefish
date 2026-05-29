# Audit: highSchoolStatistics (col-high-school-statistics)

**Syllabus**: [`src/data/syllabi/high/high_school_statistics.md`](../../../src/data/syllabi/high/high_school_statistics.md)
**Track id**: `col-high-school-statistics` (age catalog line 1928)
**Tier**: high (year 11)
**Region**: not jurisdiction-specific (GAISE/ASA references)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Statistical Questions and the Data Cycle | ⚠️ | `highBuilders.ts:makeColHighSchoolStatisticsQuiz` Unit 5 (Study design) overlaps; no dedicated question-formulation items |
| 2. One-Variable Data | ✅ | Units 1, 2 (Displaying / Analyzing a single quantitative variable) |
| 3. Normal Models and Standardization | ⚠️ | Builder doesn't have a dedicated normal-model unit; covered partly in statisticsExamBatch |
| 4. Two-Variable Data and Regression | ✅ | Unit 4 (Scatterplots) |
| 5. Study Design and Data Ethics | ✅ | Unit 5 (Study design) — ethics dimension under-covered |
| 6. Probability and Random Variables | ✅ | Units 6, 7 (Probability; Probability distributions and expected value) |
| 7. Sampling Variability and Introductory Inference | ❌ | Builder has no inference unit; covered only via the AP Statistics builder (`makeColAPStatisticsQuiz`) which is wired to university |
| 8. Data Story Studio (graph integrity, misleading displays) | ❌ | No items on misleading graphs or data story revisions |

**Wiring is correct.** `col-high-school-statistics` is in `highMathTrackIds` (`index.ts:30`) and `highMath.ts:68` wires it to `makeColHighSchoolStatisticsQuiz` + `statisticsExamBatchQuestions` + Numbas stats imports. Routing works.

`col-statistics-probability` is also listed in `highMathTrackIds` (line 32) and bound in `highMath.ts:70`, but no track with that id exists in the age catalog. Dead key.

**Chapter taxonomy.** Builder uses 7 "Unit X" labels (Khan-style); syllabus uses 8 named chapters with explicit inference and data-story chapters at the end. Most material gap: introductory inference (Chapter 7) and data-story studio (Chapter 8).

## Per-file recommendations

| File | Items for HS statistics | Bucket | Reason |
|---|---|---|---|
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColHighSchoolStatisticsQuiz` (Units 1–7) | hand-authored | **KEEP** — gold standard | Per May 2026 audit, gold standard. Covers Chapters 2, 4, 5, 6 well. |
| [`statisticsExamBatch.ts`](../../../src/data/questionCatalog/statisticsExamBatch.ts) | ~50 | **KEEP** | Floe-native drill pattern; per-distractor explanations. |
| [`numbasWebworkMathImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathImported.ts) (stats slice) | imported | **KEEP/EVALUATE** | Sample for fit. |
| [`numbasWebworkMathAdditionalImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathAdditionalImported.ts) (stats slice) | imported | **KEEP/EVALUATE** | Same as above. |
| [`numbasWebworkMathThirdImported.ts`](../../../src/data/questionCatalog/numbasWebworkMathThirdImported.ts) (stats slice) | imported | **KEEP/EVALUATE** | Check overlap with other Numbas tranches. |
| [`openIntroStatsAdditionalImported.ts`](../../../src/data/questionCatalog/openIntroStatsAdditionalImported.ts) / [`openIntroStatsSlidesImported.ts`](../../../src/data/questionCatalog/openIntroStatsSlidesImported.ts) | imported, NOT wired here | **MERGE → col-high-school-statistics** | OpenIntro is a strong stats source; if it includes confidence-interval and p-value content, lifting it would close Chapter 7. |
| [`highBuilders.ts`](../../../src/data/questionCatalog/highBuilders.ts) `makeColAPStatisticsQuiz` (Units 1–16, includes Units 10–13 inference) | hand-authored, not wired to HS stats | **MERGE (selective)** | Pull Units 10 (Inference: Proportions) and 11 (Inference: Means) into HS stats as introductory inference items. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) top-up | only if shortfall | **OK as floor** | Coverage is healthy; top-up should rarely engage. |

## Open actions (priority order)

1. **Author 4–6 introductory-inference items** for Chapter 7 (confidence interval interpretation, p-value plain-language, common-mistake spotting). Or lift selected items from `makeColAPStatisticsQuiz` Units 10–11.
2. **Author 4–6 normal-model items** for Chapter 3 (z-scores, empirical rule, model-fit critique).
3. **Author 4–6 data-story items** for Chapter 8 (misleading scale, axis-truncation spotting, public-claim evaluation).
4. **Sample OpenIntro imports** for fit before wiring.
5. **Audit `col-statistics-probability`** dead key in `highMath.ts:70`.
6. **Realign chapter labels** to the eight syllabus chapter names.

## Estimated effort

- Authoring 12–18 items across three chapter gaps: ~6–8 hours
- OpenIntro audit: ~1 hour
- Dead-key + chapter rename: ~1 hour

## Notes for next auditor

Chapter 7 (Inference) is the largest content gap. The AP Statistics builder has good inference content right next door in the same file — lift, don't re-author. Chapter 8 (Data Story) is unique to this syllabus and has no existing source; that's a from-scratch authoring task. Region tagging is genuinely optional here — GAISE is internationally adopted.
