# Audit: bankComplianceAmlRoadmap

**Syllabus**: [`src/data/syllabi/career/bank_compliance_aml_roadmap.md`](../../../src/data/syllabi/career/bank_compliance_aml_roadmap.md)
**Track id**: `bankComplianceAmlRoadmap` (title "Bank Compliance / AML")
**Tier**: career
**Status**: `playable`
**Region**: US-dominant (BSA, FFIEC, SAR, OFAC, FinCEN throughout) — currently **not** tagged. Add `region: 'US'`.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Bank Compliance Foundations (CMS, three lines of defense, issue mgmt) | Weak | Implicit in control-ownership questions, but no explicit three-lines drill or CMS structure. |
| 2. KYC and Customer Risk | Yes | Heavily covered — repeated across all 4 generated files. Duplication risk high. |
| 3. Sanctions and Screening | Yes | OFAC, vessel, ownership-sanctions, false-positive triage all present. |
| 4. Transaction Monitoring and Alerts | Yes | Layering, structuring, dormant-to-active, crypto, rapid pass-through, cash-intensive mismatch — strong. |
| 5. Investigations, SARs, and Quality Control | Yes | Narrative discipline, tipping-off, continuing-activity SARs, QA trend. |
| **No syllabus chapter 6+** | n/a | Syllabus is shorter (5 chapters + capstone) than question coverage warrants. |

**Chapter taxonomy mismatch.** Four chapter schemes in active use across feeder files:
- `RoadmapGovernment` (the base file) uses syllabus-friendly names: "KYC and Customer Risk", "Transaction Monitoring", "Sanctions and Screening", "Alert Investigation", "SAR and Regulatory Reporting", "Controls and Governance" — closest to syllabus
- `RoadmapFinanceTopOff` and `RoadmapFinanceFinalTopOff` mostly reuse those names
- `RoadmapPracticePolish3` uses a different format: "Bank Compliance / AML: Control Ownership", "Bank Compliance / AML: Model Tuning", etc.

Standardize on the `RoadmapGovernment` taxonomy, then map to syllabus chapter numbers.

## Per-file recommendations

| File | Bank AML Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) inline `bankComplianceAmlRoadmap` block | 0 | **n/a** | No inline base questions — track is entirely fed by topup from generated files. Status is `playable` but the track has zero hand-authored anchor questions. Worth adding 4 anchor questions in the style of the `amlCompliance` inline block. |
| [`careerAgentGeneratedRoadmapGovernment.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovernment.ts) | ~17 | **FIX** | Primary content bank. Solid scenarios (PEP onboarding, vessel screening, alert tuning, audit-finding ownership). Every wrong answer collapses to `DEFAULT_FLAW`. Rewrite per-distractor explanations, align chapter names literally to syllabus, become canonical. |
| [`careerAgentGeneratedRoadmapFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceTopOff.ts) (lines 605–686) | ~16 | **MERGE → RoadmapGovernment** | Heavy overlap with the base file's KYC/monitoring/sanctions chapters. Salvageable novel scenarios: address-mismatch onboarding, layering-pattern detection, cash-intensive mismatch. Lift 4–6 questions, cut the rest. |
| [`careerAgentGeneratedRoadmapFinanceFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceFinalTopOff.ts) (lines 605–686) | ~16 | **MERGE → RoadmapGovernment (partial), DELETE rest** | Substantial duplication with TopOff. Salvageable: nominee-director clue, source-of-wealth gap, no-tipping script, sanctions-via-ownership, continuing-activity SARs, policy-exception governance (~5–7 questions). Cut the rest. |
| [`careerAgentGeneratedRoadmapPracticePolish3.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish3.ts) (lines 53–74) | ~4 | **DELETE** | Uses incompatible "Bank Compliance / AML: X" chapter prefix. Content (shared-ownership remediation, alert-drop tuning surprise, exam request scramble, customer exit) is generic and re-covered better in the Finance triplet. Yet another `DEFAULT_FLAW` string — adds maintenance cost for no content win. |

**Net effect**: ~53 questions across 4 generated files → ~25 questions in 1 canonical bank + 4 new hand-authored inline anchors. Adding 4–5 Chapter 1 (CMS / three lines of defense) questions closes that gap.

## Open actions (priority order)

1. **Add `region: 'US'`** to the track entry in [`career.ts` ageCatalog](../../../src/data/ageCatalog/career.ts).
2. **Author 4 hand-written inline anchor questions** in `career.ts` matching the voice of the `amlCompliance` inline block.
3. **Author 4–5 Chapter 1 questions** on CMS, three lines of defense, issue management — currently the weakest chapter.
4. **Consolidate `RoadmapGovernment`** as the canonical bank with per-distractor rewrites and literal syllabus chapter names.
5. **Merge novel scenarios from `RoadmapFinanceTopOff` and `RoadmapFinanceFinalTopOff`** into the canonical bank, dedupe, then delete the AML slices from those files.
6. **Delete the `PracticePolish3` slice** for this track.
7. **Add `lastReviewed` metadata** — BSA/OFAC content goes stale fast.

## Estimated effort

- Inline anchor authoring + Chapter 1 gap: ~3 hours (8 questions × 20 min)
- `RoadmapGovernment` per-distractor rewrite: ~2.5 hours (17 questions × 8 min)
- Cross-file merge + dedupe across the three Finance feeders: ~3 hours
- Region tag + lastReviewed: ~30 min for this track

**~1.5 working days** total.

## Notes for next auditor

This track and `amlCompliance` are near-twins in subject matter. Recommend treating them as one auditing unit: either retire one, or differentiate them clearly (e.g. `amlCompliance` = CAMS-exam-flavor with case-building focus; `bankComplianceAmlRoadmap` = day-to-day analyst roadmap with operational/governance focus). The Finance-roadmap triplet pattern (base + TopOff + FinalTopOff) seen on `ventureCapitalRoadmap` repeats here — same family, same `DEFAULT_FLAW` issue, same chapter drift. The audit for this cluster (VC, IB, ER, S&T, PE, HF, CreditLevFin, BankComplianceAML) should be tackled as one wave because they all share the same triplet structure.
