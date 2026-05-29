# Audit: healthcareComplianceRoadmap

**Syllabus**: [`src/data/syllabi/career/healthcare_compliance_roadmap.md`](../../../src/data/syllabi/career/healthcare_compliance_roadmap.md)
**Track id**: `healthcareComplianceRoadmap`
**Tier**: career
**Status**: `playable`
**Region**: **US-only** (Stark, Anti-Kickback Statute, False Claims Act, HIPAA, OIG; not currently tagged) — flag for region tagging.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Healthcare Compliance Map | ✅ | RoadmapHealthcare program-design items, escalation paths |
| 2. Fraud, Abuse, Referral Risk (Stark, AKS, FCA, FMV) | ✅ | RoadmapHealthcare + FinalTopOff + PracticePolish4 "Friendly referral pattern" |
| 3. Privacy, Security, Patient Rights (HIPAA) | ✅ | RoadmapHealthcare + PracticePolish4 "Curious chart access" |
| 4. Billing Integrity and Documentation | ✅ | RoadmapHealthcare + PracticePolish4 "Overpayment hint" |
| 5. Investigations, CAPA, Reporting | ✅ | RoadmapHealthcare + PracticePolish4 "Annual module illusion" + CoreRoadmapPolish |

Full coverage on paper — but quality is the issue. The Stark/AKS/HIPAA content needs careful per-distractor reasoning because these laws have many near-miss scenarios where a confident wrong answer is easy to write.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts` → healthcareComplianceRoadmap (lines 675–766)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) | ~18 | **FIX** | Decent scenarios (referral arrangements, hotline triage, audit prep, overpayment, PHI access) but every wrong answer uses the file-wide `DEFAULT_FLAW`. **Compliance content needs especially rigorous per-distractor explanations** — wrong answers about Stark/AKS/HIPAA must say *why* they're wrong to teach the line learners need to walk. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts` → healthcareComplianceRoadmap (line 172)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare** | Adds privacy incidents, vendor BAA scenarios, billing audit findings. Same DEFAULT_FLAW pattern. Lift novel items, fix distractors. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts` → healthcareComplianceRoadmap (line 172)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Overlap with TopOff. Salvage compliance-distinct items (e.g. retaliation, hotline non-retaliation, CAPA effectiveness verification). |
| [`careerAgentGeneratedRoadmapPracticePolish4.ts` → healthcareComplianceRoadmap (lines 53–74)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish4.ts) | 4 | **MERGE → RoadmapHealthcare** | Genuinely good scenarios (vendor perks/referral patterns, overpayment scope, curious chart access, training-vs-culture gap). Uses different chapter naming ("Healthcare Compliance: Referral Risk" vs syllabus). Lift the 4 items, rename chapters, drop the file's redundant block. |
| [`careerAgentGeneratedRegulatoryMedicalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRegulatoryMedicalTopOff.ts) | 0 (regulatory track only) | n/a | Wires to `regulatory` track, not healthcare-compliance. Mentioned in scope only to confirm it does not feed here. |

**Net effect**: 54 questions across 4 files → ~30 questions in 1 canonical file with proper distractor explanations.

## Open actions (priority order)

1. **Tag region: 'US' urgently** in [`src/data/ageCatalog/career.ts:698`](../../../src/data/ageCatalog/career.ts). Stark, AKS, FCA, HIPAA, OIG are all US federal frameworks. Auto-FIX.
2. **Add `lastReviewed: <date>`** — compliance content (OIG advisory opinions, Stark exceptions, AKS safe harbors, HIPAA enforcement guidance, FCA penalty thresholds) updates frequently.
3. **Per-distractor rewrite is highest priority** for this track — compliance learners specifically need "why this is wrong" reasoning, not "this is plausible but doesn't match the scenario." A wrong answer about Stark FMV needs to say *why* the wrong arrangement creates risk, not a generic DEFAULT_FLAW.
4. **Consolidate the triplet + Polish4** into one file with syllabus-aligned chapter names.
5. **Verify FMV / safe-harbor / advisory-opinion references** — agent-generated compliance content often slips toward overconfident assertions. Flag any item that doesn't acknowledge fact-pattern dependence.

## Estimated effort

- Region/date tagging: 15 min
- Per-distractor rewrite + consolidation: ~8 hours (compliance content needs careful re-wording, not boilerplate replacement)
- Fact-checking pass: ~3 hours
- Chapter rename: 30 min

**~1.5 working days.** This track has higher legal-risk content than typical, so the rewrite should not be a quick boilerplate swap.

## Notes for next auditor

This track shares concepts with `ccep` (CCEP certification — generic compliance program design) and `crcm` (banking compliance — different industry but same investigation/escalation muscles). It also overlaps with `medicalBillingRoadmap` on billing-integrity scenarios and with `regulatoryAffairsRoadmap` on inspection-response scenarios. The cluster of compliance/regulatory tracks across industries deserves a separate cross-track architectural review — there is likely a reusable "compliance core" bank that could be shared rather than re-authored per discipline.
