# Audit: amlCompliance

**Syllabus**: [`src/data/syllabi/career/aml_compliance.md`](../../../src/data/syllabi/career/aml_compliance.md)
**Track id**: `amlCompliance` (title "AML / CAMS")
**Tier**: career
**Status**: `playable`
**Region**: US-dominant (BSA/FinCEN/SAR/CTR vocabulary throughout) — currently **not** tagged. Add `region: 'US'`.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Financial Crime Landscape (typologies, layering/placement/integration) | Partial | Mule networks and trade-based laundering hit in `Credentials1`, but no explicit placement/layering/integration vocabulary drill. |
| 2. Customer Due Diligence and KYC | Yes | Heaviest coverage. Multiple files all duplicate this chapter. |
| 3. Sanctions, PEPs, and Screening | Yes | Strong in `Credentials1`; chapter-name drift elsewhere. |
| 4. Transaction Monitoring | Yes | Structuring, velocity, round-dollar, crypto — all in `Credentials1`. |
| 5. Investigations and Case Building | Yes | Narrative discipline, escalation thresholds, handoff clarity covered. |
| 6. Suspicious Activity Reporting | Yes | Timing, tipping-off, audit trail covered. |
| 7. AML Program Governance | Weak | Risk assessment, model tuning, independent testing only thinly touched. |
| 8. Advanced Typologies and Emerging Risk | Partial | Crypto, trade-based, PEP covered; correspondent banking, human-trafficking finance, shell companies under-covered. |

**Chapter taxonomy mismatch.** `Credentials1` uses clean chapter names ("KYC and Customer Risk", "Monitoring and Alert Review", "Investigations and Reporting", "Sanctions Screening") that *partially* match the syllabus but don't use the syllabus numbering or exact names. `FrontDoorPolish` uses a different prefix scheme ("AML: Customer Risk", "AML: Beneficial Ownership", "AML: Alert Narrative", "AML: Escalation"). `LegacyFinanceOpsTopOff` and `AppliedPolish` invent yet more variants. None align literally with the 8 syllabus chapters. Realign on the syllabus chapter names.

## Per-file recommendations

| File | AML Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) inline `amlCompliance` block | 4 | **KEEP** | Hand-authored, per-distractor explanations, clean chapter names ("Compliance Wharf", "Monitoring Bay", "Escalation Pier", "Case File Reef"). Voice-aligned baseline. |
| [`careerAgentGeneratedCredentials1.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials1.ts) | ~80 | **FIX** | Canonical AML bank — strongest content across syllabus chapters (KYC, monitoring, investigations, sanctions, ownership math). Every wrong answer uses the file-wide `DEFAULT_FLAW` constant. Rewrite per-distractor explanations, align chapter names to syllabus, become the source of truth. Flag missing `lastReviewed` — BSA/SAR thresholds and PEP rules change. |
| [`careerAgentGeneratedLegacyFinanceOpsTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedLegacyFinanceOpsTopOff.ts) (AML section, lines 31–234) | ~40 | **MERGE → Credentials1, DELETE rest** | Adds some genuinely novel scenarios (changed-risk profile, family-money explanation, KYC docs date mismatch). Lift ~8–12 novel scenarios into Credentials1, dedupe the rest. Uses its own `DEFAULT_FLAW` string — adds maintenance cost. |
| [`careerAgentGeneratedQualificationsAppliedPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsAppliedPolish.ts) (AML section, lines 97–118) | ~4 | **MERGE → Credentials1** | Small, polish-flavored; lift any unique scenarios then delete this slice. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (AML section, lines 339–360) | ~4 | **DELETE** | Re-covers ground in Credentials1 (clean onboarding/odd activity, beneficial ownership layered entity, alert narrative, tipping-off). All distractors collapse to `DEFAULT_FLAW`. No content win. |

**Net effect**: ~132 AML questions across 5 generated files → ~60 questions in 1 canonical bank (`Credentials1` rewritten) + 4 hand-written inline. Adding 4–6 governance/advanced-typology questions closes the Chapter 7 and 8 gaps.

## Open actions (priority order)

1. **Add `region: 'US'`** to the track entry in [`career.ts` ageCatalog](../../../src/data/ageCatalog/career.ts). BSA, FinCEN, SAR, CTR thresholds, OFAC are all US-specific.
2. **Consolidate Credentials1** with per-distractor rewrites and syllabus-aligned chapter names. Merge unique scenarios from `LegacyFinanceOpsTopOff` and `AppliedPolish`.
3. **Delete `FrontDoorPolish` AML slice** after confirming no salvageable content.
4. **Add `lastReviewed` metadata** to every regulation-adjacent question (schema change). Critical for AML — BSA thresholds and OFAC lists move.
5. **Author 4–6 governance questions** (Chapter 7) and 4–6 advanced-typology questions (Chapter 8 — correspondent banking, shell-company red flags, trafficking finance).
6. Note: this track and `bankComplianceAmlRoadmap` overlap heavily; coordinate cuts so KYC/monitoring/SAR questions aren't duplicated across both banks.

## Estimated effort

- Per-distractor rewrite on Credentials1: ~10 hours (~80 questions × 7 min)
- Merge + dedupe LegacyFinanceOps and AppliedPolish: ~2 hours
- New authoring (governance + advanced typologies): ~3 hours (10 questions × 20 min)
- Region tag + lastReviewed schema work: ~1 hour for this track

**~2 working days** to bring the AML bank up to bar.

## Notes for next auditor

`amlCompliance` and `bankComplianceAmlRoadmap` share ~70% of their conceptual surface area (KYC, sanctions, monitoring, SAR). They are presented to learners as different tracks with different chapter taxonomies but largely the same content. Decide whether both should exist or whether the roadmap track should be retired in favor of the credential-style `amlCompliance`. The `Credentials1` bank also contains `ccep`, `nerc`, and `patentBar` slices using the same `DEFAULT_FLAW` constant — same rewrite pattern applies.
