# Audit: aigp

**Syllabus**: [`src/data/syllabi/career/aigp.md`](../../../src/data/syllabi/career/aigp.md)
**Track id**: `aigp`
**Tier**: career
**Region**: US-flavoured (NIST AI RMF, IAPP AIGP) but EU AI Act explicitly featured — keep dual-jurisdiction tag

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. AI Governance Roles and Accountability | ✅ | Hand-written `career.ts` chapter "Governance Dock"; `QualificationsTechnicalPolish` has "Inventory" angle |
| 2. AI System Inventory and Risk Triage | ✅ | `RoadmapTech` "Model inventory gap" + `RoadmapGovTechFinalTopOff` "Shadow model" |
| 3. NIST AI RMF and Control Design | ⚠️ Thin | RMF named in syllabus but no question explicitly maps to govern/map/measure/manage functions |
| 4. EU AI Act and Regulatory Readiness | ❌ | **Zero questions**. Syllabus calls out provider/deployer/conformity but the bank ignores them |
| 5. AI Impact Assessments and Documentation | ✅ | "Bias testing" (subgroup harm), "Model card draft" |
| 6. Generative AI Evaluation and Security | ⚠️ Thin | One prompt-injection question; no hallucination grounding, red team, eval-set integrity, or content safety questions |
| 7. Transparency, Notices, Human Oversight | ✅ | "Rubber-stamp review", "Auto-denial concern", "Human in the loop" |
| 8. Vendor Controls and Ongoing Monitoring | ✅ | "Black-box vendor" appears in 3 separate files; drift, decommissioning covered |

**Chapter taxonomy mismatch.** Hand-written `career.ts` uses thematic chapters ("Governance Dock", "Risk Reef", "Human Oversight Lagoon"). Generated files use "AIGP: AI Governance", "AIGP: Bias Testing" etc. Roadmap files use "Data AI Governance: …" prefix because the `dataAiGovernanceRoadmap` track shares ~80% of the AIGP content. None match syllabus chapter names.

## Per-file recommendations

| File | AIGP Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (aigp block, lines 1456-1464) | 8 | **KEEP** | Hand-written, per-distractor explanations, defensible voice. Closest to the quality bar. Add `lastReviewed` metadata. |
| [`careerAgentGeneratedQualificationsTechnicalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsTechnicalPolish.ts) (aigp section, lines 97-117) | 4 | **FIX** | Strong concepts (model inventory, aggregate accuracy trap, rubber-stamp review, black-box vendor) but `DEFAULT_FLAW` constant on every wrong answer. Rewrite per-distractor explanations and merge into canonical aigp file. |
| Vendor "black-box" duplication across 3 files | — | **MERGE** | The vendor opacity question appears in `QualificationsTechnicalPolish` (id 4109039), `RoadmapTech` `dataAiGovernanceRoadmap` (id 4105364), and `RoadmapGovTechFinalTopOff` (id 4108018). Aggregator dedupes by prompt, but near-duplicates leak through. Keep one, delete the others. |
| [`careerAgentGeneratedRoadmapTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapTech.ts) — `dataAiGovernanceRoadmap` block | 17 (for sibling track) | **N/A here** | These do not feed `aigp` directly. See `data_ai_governance_roadmap.md`. The two tracks should explicitly share or split. |

## Open actions (priority order)

1. **Author 6–8 EU AI Act questions** (Chapter 4 gap): provider vs deployer obligations, high-risk classification, conformity assessment, technical documentation, CE marking workflow, GPAI obligations. Source/voice: `jargonBusters.ts` style.
2. **Author 4–6 NIST AI RMF function-specific questions** (Chapter 3): name govern/map/measure/manage explicitly and test which function a control belongs to.
3. **Author 5–7 generative-AI eval questions** (Chapter 6): hallucination grounding, red-team scoping, leaked benchmark, content safety thresholds, retrieval poisoning.
4. **Fix `DEFAULT_FLAW` rows** in the `QualificationsTechnicalPolish.aigp` block — 4 questions × 3 distractors = 12 explanations to write.
5. **Add region/dual-jurisdiction tag** on the track in `career.ts` (US-first launch but EU AI Act is core syllabus content).
6. **Add `lastReviewed: 2026-05` schema field** — AI governance content rots fastest in the catalog. EU AI Act enforcement milestones and NIST GenAI Profile updates require quarterly review.
7. **Decide aigp ↔ dataAiGovernanceRoadmap relationship.** They overlap ~60%. Either officially mirror, or split: `aigp` = certification-prep, `dataAiGovernanceRoadmap` = workplace-jargon.

## Estimated effort

- EU AI Act + NIST RMF + GenAI authoring: ~8 hours (16 questions × 30 min for regulation-grade rigour)
- `DEFAULT_FLAW` rewrites: ~2 hours
- Dedupe + tag + lastReviewed schema: ~1 hour
- Track-split decision and chapter realignment: ~2 hours

**~1.5 working days.** AIGP is content-critical (regulator-facing); cuts are cheap but new authoring needs care.

## Notes for next auditor

The AIGP track is jurisdictionally schizophrenic in the syllabus (US frameworks + EU regulation) and the question bank silently picks the US half. This is the highest-rotation content in the entire career cluster — flag it for any future schema change adding `lastReviewed`. Also: `dataAiGovernanceRoadmap` should be audited alongside this; the two tracks are 60% duplicate today.
