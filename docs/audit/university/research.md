# Audit: research (Research Scientist Interview Prep)

**Syllabus**: [`src/data/syllabi/university/research_scientist_prep.md`](../../../src/data/syllabi/university/research_scientist_prep.md)
**Track id**: `research`
**Tier**: university (senior / career hopper)
**Region**: jurisdiction-neutral (mentions NIH/NSF in syllabus research notes only; questions do not embed US-specific frameworks)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Research Identity and Career Translation | ❌ | No questions on resume/research-narrative framing |
| 2. Literature Review and Scholarly Judgment | ✅ thin | "Unstated assumptions in SOTA optimizer paper" prompt |
| 3. Questions, Hypotheses, Experimental Design | ✅ partial | Regression Discontinuity Design, DAGs/colliders — strong |
| 4. Lab, Data, and Reproducibility Practices | ❌ | No reproducibility checklist, data dictionary, lab notebook questions |
| 5. Statistics, Modeling, and Inference | ✅ | MCMC, MNAR missing data, SGD/momentum optimization |
| 6. Ethics, Responsible Conduct, Research Risk | ❌ | No RCR / authorship / dual-use / p-hacking / HARKing questions |
| 7. Communication, Papers, Grants, Presentations | ✅ | Grant writing (significance/innovation), executive storytelling, scientific defense (sensitivity analysis) |
| 8. Collaboration, Interviewing, Research Execution | ❌ | No collaboration/charter/interview-story prompts |

**Chapter taxonomy mismatch.** Inline block uses "Module 1: Literature", "Module 2: Causal Inference", "Module 3: Statistics", "Module 4: Applied Domain", "Module 5: Communication", "Stretch Zone" — does not match the syllabus's eight chapters. "Module 4: Applied Domain" is a catch-all that loses the syllabus's distinct treatment of reproducibility (Ch. 4) vs ethics (Ch. 6).

## Per-file recommendations

| File | research Q's | Bucket | Reason |
|---|---|---|---|
| Inline block in [`universityPrep.ts`](../../../src/data/questionCatalog/universityPrep.ts) (lines 68–79, `research:` key) | 10 | **KEEP** | Hand-authored, interview-grade prompts. Causal inference content (RDD, colliders/Berkson's paradox) is genuinely sharp. Per-distractor explanations are specific and instructive ("Constancy is unrelated and usually false" style). |

That is the **entire bank**. Just 10 questions for an 8-chapter syllabus.

## Open actions (priority order)

1. **Author 40–50 questions** to reach syllabus depth. Priorities by chapter:
   - Chapter 1: research-taste framing, narrative for PI/EM/PM audiences, evidence-of-going-beyond-assigned-tasks (~5)
   - Chapter 2: paper-club thesis, identifying overclaimed conclusions, building literature maps (~6)
   - Chapter 3: pre-analysis plans, controls vs blocking vs blinding, quasi-experimental design when randomization is impossible (~7)
   - Chapter 4: data dictionary design, exclusion logging, reproducible compute environments, sensitive data handling (~6)
   - Chapter 5: estimands, mixed-effects vs OLS, robustness checks, sensitivity analysis (~6)
   - Chapter 6: RCR scenarios, authorship disputes, p-hacking detection, HARKing, dual-use questions (~7)
   - Chapter 7: specific aims structure, figure caption discipline, abstract revision, talk for cross-disciplinary committees (~5)
   - Chapter 8: collaboration charter, milestone risk register, job-talk Q&A handling (~5)
2. **Rename chapters** to match the syllabus's eight chapters. Drop "Module N" framing.
3. **Verify region-neutrality** if RCR content is added — many real RCR frameworks are US-centric (NIH, OHRP, IRB). Use language that's portable (mention IRB-equivalent ethics review) and tag US-specific items.

## Estimated effort

- Author 40–50 questions: ~14 hours
- Chapter rename: ~10 min

**~2 working days**.

## Notes for next auditor

Like `ml`, this track is high-quality-but-tiny. The 10 questions are interview-grade and the causal-inference items are notably good (RDD, colliders/Berkson, MNAR). No DEFAULT_FLAW pattern, no boilerplate distractors, no US compliance creep — only the "Module N" chapter mislabel and severe under-population. The Chapter 6 (Ethics / RCR) buildout deserves care: if the regional risk is real, region-tag the US-specific items rather than letting them sneak into a "jurisdiction-neutral" track.
