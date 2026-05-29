# Audit: ml (Data Science / ML Interview Prep)

**Syllabus**: [`src/data/syllabi/university/data_science_ml_prep.md`](../../../src/data/syllabi/university/data_science_ml_prep.md)
**Track id**: `ml`
**Tier**: university (senior / career hopper)
**Region**: jurisdiction-neutral

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Data Workflow and Problem Framing | ❌ | Not covered by current bank |
| 2. Python, Notebooks, Pandas Fluency | ❌ | Not covered |
| 3. SQL and Relational Data for Analysts | ✅ thin | Single window-function question |
| 4. Probability and Statistical Reasoning | ✅ partial | Expected value (coin flips) |
| 5. Exploratory Analysis and Product Experiments | ✅ | Network effects / SUTVA, MDE / sample size |
| 6. Machine Learning Foundations | ✅ | Regularization L1/L2, imbalanced classes, ROC/AUC, bias-variance |
| 7. Evaluation, Error Analysis, Communication | ✅ thin | ROC/AUC, imbalanced classes — no precision/recall, confusion matrix, calibration drills |
| 8. Ethics, Deployment Basics, Interview Readiness | ✅ partial | Data drift vs concept drift, cold-start — no ethics or take-home framing |

**Chapter taxonomy mismatch.** Inline block uses "Module 1: SQL", "Module 2: Statistics", "Module 3: Algorithms", "Module 4: A/B Testing", "Module 5: System Design", "Stretch Zone" — does not match the syllabus's eight named chapters. "Module 3: Algorithms" is misleading: those questions (regularization, imbalance, ROC) are ML model questions, not algorithm-design.

## Per-file recommendations

| File | ml Q's | Bucket | Reason |
|---|---|---|---|
| Inline block in [`universityPrep.ts`](../../../src/data/questionCatalog/universityPrep.ts) (lines 15–25, `ml:` key) | 10 | **KEEP** | Hand-authored, per-distractor explanations, interview-grade prompts (SUTVA / network effects, MDE, drift, bias-variance, cold-start). Strong voice — gold standard for the cluster. |

That is the **entire bank**. Just 10 questions for an 8-chapter syllabus.

## Open actions (priority order)

1. **Author 40–50 questions** to reach syllabus depth. Priorities by chapter:
   - Chapter 1: lifecycle stages, baseline reframing of model performance, scoping (~5)
   - Chapter 2: Pandas merge row-count debugging, cleaning notebook structure (~6)
   - Chapter 3: CTE staging, anti-joins, top-N-per-group with windows (~6)
   - Chapter 4: CLT explanation, conditional probability, confidence intervals, Type I/II errors (~8)
   - Chapter 5: guardrail metrics, minimum detectable effect deeper, novelty effect, Simpson's paradox (~6)
   - Chapter 6: cross-validation strategy, leakage examples, bias-variance with model classes, regularization geometry (~6)
   - Chapter 7: PR curve vs ROC, threshold tuning for class imbalance, calibration, subgroup performance, model cards (~6)
   - Chapter 8: ethical risk identification, drift monitoring strategy, take-home structure, STAR-format DS interview stories (~5)
2. **Rename chapters** to match the syllabus's eight chapters. Drop "Module N" framing.
3. **Cross-reference with `introDataScience`** — when authoring Chapter 6/7 ML questions for `ml`, consider whether a beginner-tier variant should also serve `introDataScience` Chapter 7.

## Estimated effort

- Author 40–50 questions: ~14 hours
- Chapter rename: ~10 min

**~2 working days**.

## Notes for next auditor

The 10 hand-authored questions on this track are among the best content in the entire university tier — interview-grade prompts, plausible distractors, real-world framing (SUTVA in ride-sharing, MDE, drift). They are the voice template for any ML/DS authoring elsewhere in the catalog. The track suffers purely from under-population, not quality. No DEFAULT_FLAW, no US-specific compliance creep, no chapter-mismatch other than "Module N" labelling.
