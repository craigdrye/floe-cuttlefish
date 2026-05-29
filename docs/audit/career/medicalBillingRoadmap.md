# Audit: medicalBillingRoadmap

**Syllabus**: [`src/data/syllabi/career/medical_billing_roadmap.md`](../../../src/data/syllabi/career/medical_billing_roadmap.md)
**Track id**: `medicalBillingRoadmap`
**Tier**: career
**Region**: US (Medicare MSP, marketplace plans, NPI, COB rules — not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Revenue Cycle Overview | ✅ | Heavy coverage in base + TopOff + FinalTopOff |
| 2. Eligibility, Benefits, and Authorization | ✅ | Strong; COB, MSP, marketplace, network surprises |
| 3. Claims and Clean Submission | ✅ | Diagnosis pointers, attachments, telehealth POS, scrubbers |
| 4. Denials, Appeals, and Follow-Up | ✅ | Heavy — timely filing, peer-to-peer, duplicate denials |
| 5. Payments, Underpayments, and Patient Balances | ✅ | Credit balances, refunds, contract variance |

**Chapter taxonomy mismatch.** Two competing schemes:
- `RoadmapHealthcare` family uses syllabus-aligned chapter names ("Revenue Cycle Overview", "Eligibility, Benefits, and Authorization", etc.) — good.
- `RoadmapHealthcareFinalTopOff` switches to different chapter names ("Revenue Cycle Map", "Insurance and Eligibility", "Claims, Denials, and Appeals", "Patient Balances and Service", "Compliance and Accuracy") — needs realignment.
- `RoadmapPracticePolish2.ts` uses yet another set ("Medical Billing: Denial Triage", "Medical Billing: Patient Balance") — fragments the taxonomy further.

## Per-file recommendations

| File | MB Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) (medicalBillingRoadmap, lines 307–398) | 20 | **FIX** | Solid scenarios (clean claim, COB, scrubber, telehealth POS, A/R aging, front-end feedback loop) with syllabus-aligned chapters. Auto-FIX: every distractor uses file-wide `DEFAULT_FLAW`. Rewrite per-distractor reasons, then this becomes the canonical bank. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) (medicalBillingRoadmap, 16 q's) | 16 | **MERGE → RoadmapHealthcare** | Real novel content (registration typo trail, network surprise, rendering NPI, contract load error, retroactive Medicaid, diagnosis pointer miss, accumulator-like). `DEFAULT_FLAW`. Lift novel scenarios into main file. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) (medicalBillingRoadmap, 16 q's) | 16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Substantial overlap with TopOff (COB, timely filing, MSP all repeated). Salvageable: financial assistance handoff, modifier guess, courtesy write-off habit, month-end squeeze, charge lag domino. Different chapter taxonomy — needs realignment. ~5–7 questions survive. |
| [`careerAgentGeneratedRoadmapPracticePolish2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish2.ts) (medicalBillingRoadmap, 4 q's, lines 119–140) | 4 | **DELETE** | Generic ("Denial Triage", "Patient Balance", "Weak appeal habit"); covered better elsewhere. Different `DEFAULT_FLAW` string ("This answer sounds plausible, but it misses the operating judgment the role needs.") — fragmentation cost with no content win. |

**Net effect**: 56 questions across 4 files → ~30 in 1 canonical syllabus-aligned bank with per-distractor explanations.

## Open actions (priority order)

1. **Per-distractor rewrite** of the main RoadmapHealthcare block (20 q's) — this is the foundation. ~3 hours.
2. **Consolidate the triplet** (base + TopOff + FinalTopOff): align chapter names to syllabus, lift unique TopOff content into base, dedupe FinalTopOff against TopOff. ~3 hours.
3. **Delete the PracticePolish2 entries** for this track.
4. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (MSP, Medicaid, NPI, ERA are all US-specific).
5. **Add `lastReviewed` metadata** on MSP, timely-filing, and COB questions (payer rules change).

## Estimated effort

- Per-distractor rewrite of base: ~3 hours
- Triplet consolidation: ~3 hours
- Polish2 deletion: 5 min
- Tagging: ~30 min

**~7 hours** — typical for the healthcare roadmap family.

## Notes for next auditor

The `RoadmapHealthcare` family follows the same triplet pattern (base + TopOff + FinalTopOff) for all 11 healthcare tracks: `hospitalAdministrationRoadmap`, `nursingFloorOpsRoadmap`, `physicianPracticeRoadmap`, `medicalBillingRoadmap`, `medicalCodingRoadmap`, `clinicalResearchRoadmap`, `pharmaDrugSafetyRoadmap`, `healthcareComplianceRoadmap`, `healthInsurancePayersRoadmap`, `regulatoryAffairsRoadmap`. Same `DEFAULT_FLAW`, same triplet, same chapter-taxonomy drift between TopOff and FinalTopOff. Audit as a cluster and apply fixes consistently.
