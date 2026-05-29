# Audit: introDataScience

**Syllabus**: [`src/data/syllabi/university/intro_data_science.md`](../../../src/data/syllabi/university/intro_data_science.md)
**Track id**: `introDataScience`
**Tier**: university (freshman / high school senior)
**Region**: jurisdiction-neutral

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Data Questions, Notebooks, Workflow | ❌ | Stats-only imports; nothing on Jupyter/notebooks/research question framing |
| 2. Python for Data Work | ❌ | No Python/NumPy/Pandas drills |
| 3. Pandas Wrangling and Data Cleaning | ❌ | No Pandas content |
| 4. Exploratory Data Analysis and Visualization | ✅ partial | Statistics-import bank carries some EDA/descriptive content |
| 5. Statistical Reasoning and A/B Testing | ✅ | Heavy coverage — this is most of the bank |
| 6. SQL and Relational Data | ❌ | No SQL drills wired in (`sqlFoundations` has its own bank but is not spread here) |
| 7. Machine Learning Basics | ❌ | No ML content (ML is on the `ml` track) |
| 8. Reproducibility, Ethics, Portfolio | ❌ | No content |

This is the most syllabus-misaligned course in the cluster: it's wired as an **AP-Statistics clone**, not as the broad introductory data science workflow course the syllabus describes.

## Per-file recommendations

This track has **NO native question files**. Its entire bank is shared imports from `apStatistics` (confirmed at `universityCollege.ts:74–83`):

| File | Bucket | Reason |
|---|---|---|
| [`imsTutorialsImported.ts`](../../../src/data/questionCatalog/imsTutorialsImported.ts) | **DELETE candidate** | `CONTENT_AUDIT.md` flags `imsTutorialsImported.ts` as "imports source content with stripped context → likely DELETE". Not inspected line-by-line here but already flagged as cluster-wide risk. |
| [`openIntroImsImported.ts`](../../../src/data/questionCatalog/openIntroImsImported.ts) | **FIX or KEEP** | OpenIntro-derived statistics content. Defer to the `apStatistics` audit for per-question quality scoring. |
| [`openIntroStatsAdditionalImported.ts`](../../../src/data/questionCatalog/openIntroStatsAdditionalImported.ts) | **FIX or KEEP** | Same OpenIntro lineage. Defer to `apStatistics` audit. |
| [`openIntroStatsSlidesImported.ts`](../../../src/data/questionCatalog/openIntroStatsSlidesImported.ts) | **FIX or KEEP** | Same — slides-derived, risk of context loss. |
| [`statisticsReasoningWorkoutGenerated.ts`](../../../src/data/questionCatalog/statisticsReasoningWorkoutGenerated.ts) | **KEEP (for stats)** | Hand-authored workout pattern. Useful for the stats chapter, irrelevant for the other 7 chapters. |
| `numbasWebworkStatistics*` family | **KEEP (for stats)** | Math-flavored numerical stats. |

**Net problem**: `introDataScience` shares **100% of its bank with `apStatistics`**, but the syllabus is broader — Python/Pandas/SQL/ML/notebooks/ethics. A student playing this track will see statistics-only questions; a student playing `apStatistics` will see identical content. Two playable tracks, one bank.

## Open actions (priority order)

1. **Stop sharing imports with `apStatistics`** unless the question explicitly bears on chapters 4 or 5 of the data-science syllabus. Either curate a filtered subset or assemble a native source list.
2. **Author 60+ questions** to close the seven uncovered chapters:
   - Chapter 1: data lifecycle, notebooks, tidy data, reproducibility (~8)
   - Chapter 2: Python types, NumPy vectorization, tracebacks (~8)
   - Chapter 3: Pandas DataFrames, missing values, groupby, joins (~12)
   - Chapter 6: SQL grain, GROUP BY denominators, SQL vs Pandas (~6, possibly reused from `sqlFoundations`)
   - Chapter 7: train-test split, leakage, baseline models, precision/recall (~10)
   - Chapter 8: README, seeds, ethics, fairness, audience-aware communication (~6)
   Total ~50 new + ~10 keepable from the stats-only bank → ~60 questions.
3. **Decouple from `apStatistics`** — verify the May 2026 audit observation: yes, `apStatistics` and `introDataScience` literally share the same 8 import spreads. Either filter, or accept that these two tracks are duplicates and merge them in the age catalog (but the syllabi are different, so duplication is the wrong outcome).
4. **Tag track honestly**: until Chapters 1–3, 6, 7, 8 are populated, this track should be `soon`, not `playable`, or it ships as misadvertised.

## Estimated effort

- Authoring 50 native questions: ~17 hours
- Decouple imports + curate: ~2 hours

**~2.5 working days**.

## Notes for next auditor

`introDataScience` is the clearest catalog-honesty problem in the cluster: the syllabus advertises Python + Pandas + EDA + A/B + SQL + ML + ethics, and the wiring delivers a re-skinned AP Statistics bank. The `ml` track (Data Science / ML Interview Prep) covers similar territory at a higher level — consider whether `introDataScience` should explicitly cite `ml`-track items at the basic-difficulty tier rather than duplicating authoring. Cross-reference `apStatistics` audit for the shared stats sources.
