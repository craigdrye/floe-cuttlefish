# Audit: enterpriseSaaSRoadmap

**Syllabus**: [`src/data/syllabi/career/enterprise_saas_roadmap.md`](../../../src/data/syllabi/career/enterprise_saas_roadmap.md)
**Track id**: `enterpriseSaaSRoadmap`
**Tier**: career
**Region**: Jurisdiction-neutral. Watch for US-specific framings (SOC 2 mention in security-questionnaire questions, MSA/SLA terminology assumed). Flag any SOC 2 or US-procurement-specific question for tagging if added later.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Buyers, Users, Stakeholders | ✅ | `RoadmapTech` "Buyer versus user", `GovTechFinalTopOff` "Mystery approver" + "Buyer Mapping" |
| 2. Discovery and Value Framing | ✅ | "Pain before demo", "Vague value success plan", "Symptom versus workflow" |
| 3. Implementation and Enablement | ✅ | "Integration dependency", "Admin training", "Data Migration dirty import", "Manager silence change management" |
| 4. Customer Health and Renewal Risk | ✅ | "Usage drop", "Procurement squeeze", "Usage cliff after reorg", EBR |
| 5. Internal Handoffs | ✅ | "Sales to CS", "Sales promise trap", "Single-threaded deal champion" |
| (Implicit) Security Review, Legal Redlines, Product Feedback, Support Escalation | ✅ | "Questionnaire maze", "Liability ask", "One big customer roadmap distortion", "Severity inflation" |

**Coverage is solid across all 5 chapters with strong stakeholder/lifecycle treatment.** ~32 questions across 2 files.

## Per-file recommendations

| File | Track Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapTech.ts) (enterpriseSaaSRoadmap, lines 215-306) | 17 | **FIX** | Strong B2B SaaS content (champion mapping, security review, success plan, expansion, churn root cause). Every wrong answer uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and become canonical bank. |
| [`careerAgentGeneratedRoadmapGovTechFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovTechFinalTopOff.ts) (enterpriseSaaSRoadmap, starts line 441) | 15 | **MERGE → RoadmapTech** | Adds genuinely novel angles (data-migration field-meaning conflicts, manager silence in change mgmt, reorg-triggered usage cliff, 200-question security questionnaire scramble). Lift the new content; dedupe stakeholder-mapping + discovery overlaps. |

**Net effect**: 32 SaaS questions across 2 files → ~24 questions in 1 canonical file with per-distractor explanations.

**No third top-off pass exists for this track.** Less duplication than cyber-ops or cloud, easier consolidation.

## Open actions (priority order)

1. **Consolidate the pair** into one file with per-distractor explanations. ~32 → ~24 questions.
2. **Realign chapter names** to syllabus 5-chapter taxonomy. Currently uses "Enterprise SaaS: Stakeholders / Discovery / Implementation / Enablement / Customer Health / Expansion / Handoff / Churn / Champion / Security Review / Success Plan / Roadmap Promise / Renewal / Legal Redlines / Data Migration / Product Feedback / Support Escalation / Executive Business Review / Buyer Mapping / Change Management / Renewal Risk" — ~21 sub-topics for 5 chapters, manageable but should collapse.
3. **Flag for US-tagging review**: security-questionnaire and procurement-flow questions implicitly assume US enterprise buying patterns (SOC 2 references, MSA/order-form conventions). Decide whether to add `region: 'US'` tag at track level or rewrite for jurisdiction-neutrality.
4. **No `lastReviewed` urgency** — SaaS sales motions rotate slowly compared to AI governance.

## Estimated effort

- Consolidation + per-distractor rewrite: ~5 hours (32 → 24 questions)
- Chapter taxonomy collapse: ~30 min
- US-tag decision + audit: ~1 hour

**~0.75 working days.** Lowest-effort tech roadmap to clean up. Could go first as a proof-of-pattern before tackling cyber-ops or cloud.

## Notes for next auditor

This track is unusual within the tech cluster in that it has *no* third top-off pass — only the base + FinalTopOff. Suggests the content reached perceived completeness faster than other tech tracks. The fix pattern is identical to the other tech roadmaps (DEFAULT_FLAW rewrite + chapter collapse + consolidation) but the workload is meaningfully smaller. Good candidate to pilot the per-distractor rewrite tooling/style before scaling to cyber-ops and cloud.

The syllabus is silent on SaaS-specific compliance terminology — if Floe later wants to add a "B2B compliance jargon" angle (DPAs, sub-processors, GDPR sub-clauses) that should be a sibling track, not extension here.
