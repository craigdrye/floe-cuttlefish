# Audit: researchMethods

**Syllabus**: [`src/data/syllabi/university/research_methods.md`](../../../src/data/syllabi/university/research_methods.md)
**Track id**: `researchMethods`
**Tier**: university
**Region**: jurisdiction-neutral (Belmont/IRB references are US-flavoured but appear in international research ethics curricula too)
**Status**: `playable` ([`src/data/ageCatalog/university.ts:64`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Research Questions and Claims | ✅ | Workout "Research Questions" chapter (FINER-style framing, constructs, hypotheses) |
| 2. Literature Review and Evidence Mapping | ✅ thin | Hand-roll item 16523 (scoping vs systematic review) only; no PRISMA, search strings, citation chaining |
| 3. Research Design and Validity | ✅ | Workout "Design" chapter + hand-roll RCT/quasi-experimental items |
| 4. Sampling, Recruitment, Power | ✅ | Workout "Sampling" chapter + hand-roll stratified item; statistical power covered |
| 5. Measurement and Data Collection | ✅ | Workout "Measurement" chapter (reliability, validity, IRR, construct validity); levels-of-measurement hand-roll |
| 6. Analysis Plans and Interpretation | ✅ | Workout "Analysis" + hand-roll p-value, Type I/II, ANOVA, instrumental variables, mediator/moderator |
| 7. Ethics, Governance, Participant Protection | ✅ | Workout "Ethics" (IRB, informed consent, debriefing, confidentiality, beneficence, justice) + Belmont hand-roll |
| 8. Open Science, Reporting, Communication | ✅ thin | Workout "Open Science" chapter (preregistration, p-hacking, publication bias, replication crisis); no CONSORT/STROBE/IMRaD/preregistration-vs-registered-reports distinction |

**Coverage is genuinely good for a `playable` track.** Chapter taxonomy split: workout uses topic names ("Research Questions", "Measurement", "Sampling", "Design", "Causality", "Ethics", "Data Quality", "Analysis", "Open Science") — close-enough to syllabus chapter names. Hand-rolls in `universityAcademic.ts` use a mix: "Research Methods Dock/Reef/Cove/Lagoon" (off-brand oceanic, lifted from primary style), "Foundations of Research", "Experimental Design", "Measurement", "Sampling", "Statistical Analysis", "Research Ethics", "Stretch Zone". The oceanic chapter names should go.

## Per-file recommendations

| File | Research Methods Q's | Bucket | Reason |
|---|---|---|---|
| [`researchMethodsWorkoutGenerated.ts`](../../../src/data/questionCatalog/researchMethodsWorkoutGenerated.ts) | 50 | **KEEP** | Per-distractor `whyWrong + hint` triples, sober tone, syllabus-aligned chapter spine. The strongest single file feeding this track. Treat as canonical bank. |
| [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) hand-rolls in `researchMethods: [...]` (id 16501–16524 + 17101–17110) | ~34 | **FIX** | Top tier (17101–17110 "Stretch Zone" items on construct validity, double-blind, Type I, stratified, Belmont, grounded theory, ANOVA, mixed methods) is excellent — keep. Mid tier (16505–16524) is solid quantitative items. **Fix needed**: the four "Research Methods Dock/Reef/Cove/Lagoon" oceanic-themed intro items (id 16501–16504) with cartoonish distractors ("Only invisible ink", "The planet Jupiter"). Rename chapters; rewrite the distractors. |
| (no third file) | — | — | No imported third-party research-methods bank; no agent-generated overflow. Healthy. |

**Cross-wire opportunity (not a bug)**: `researchMethodsWorkoutGenerated.ts` "Open Science" items would substantially strengthen `philSophomore` and `uniScience`. Consider exposing them via shared chapter filter rather than duplicating.

**Net effect**: 84 wired questions, ~80 of which meet the quality bar after the four oceanic intro items get rewritten. No deletes required.

## Open actions (priority order)

1. **Rename oceanic chapter names** (id 16501–16504) from "Research Methods Dock/Reef/Cove/Lagoon" to "Research Questions and Claims" matching syllabus chapter 1.
2. **Rewrite the four oceanic-item distractors** with university-tone alternatives. Voice template: `researchMethodsWorkoutGenerated.ts`.
3. **Author 5–8 questions for chapter 2** (PRISMA flow, search-string construction, inclusion/exclusion criteria, scoping vs systematic vs narrative) — currently only one item covers literature review.
4. **Author 5–8 questions for chapter 8 reporting-guideline content** (CONSORT vs STROBE vs PRISMA selection, IMRaD ordering, registered reports vs preregistration distinction, FAIR principles) — currently only the open-science meta-issues are covered.
5. **Cross-wire to `philSophomore` and `uniScience`** for the Open Science chapter (do not move, expose).

## Estimated effort

- Chapter rename + oceanic-item rewrite: ~1 hour
- Chapter 2 literature-review authoring: ~3 hours
- Chapter 8 reporting-guideline authoring: ~3 hours

**~1 working day** to close all coverage gaps. This is one of the healthier `playable` tracks in the cluster — fix is small.

## Notes for next auditor

The Belmont Report / IRB content is US-specific framing but the concepts (informed consent, beneficence, justice, respect for persons) are near-universal. International equivalents (UK Health Research Authority, EU GDPR/ethics committees, CIOMS guidelines, Declaration of Helsinki) are entirely absent. If Floe later regionalises, this is a tag-and-cross-reference opportunity rather than a delete. The `apPsychologyExamBatch.ts` and `introPsychologyWorkoutGenerated.ts` files also touch research methods via the `introToPsychology` track — verify no overlap or competing taxonomy if those audits happen later.
