# Audit: medicalBillingJargon

**Syllabus**: [`src/data/syllabi/career/medical_billing_jargon_buster.md`](../../../src/data/syllabi/career/medical_billing_jargon_buster.md)
**Track id**: `medicalBillingJargon`
**Tier**: career
**Region**: US (CARC/RARC, ERA/EOB, NCCI, Medicare MSP, COB birthday rule — not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Claim Basics and Clean Submission | ✅ | "Clean Claim" + "Claim Edits" + "Charge Capture" chapters |
| 2. Denials and Remittance Language | ✅ | "Denial Queue/Cove", "Remit Posting", "Denial Management" |
| 3. Authorization and Medical Necessity | ✅ | "Prior Auth Bay" + "Prior Authorization" |
| 4. Modifiers, Bundling, and Edits | ✅ | "Claim Edit Cove" + "Unbundling Alarm" |
| 5. Appeals, Underpayments, and Follow-Up | ✅ | "Appeals", "Contract Variance", "AR Follow-Up", "Refunds and Credits" |

Coverage is unusually complete; the issue is overlap and chapter-naming chaos. Three competing chapter taxonomies in use:
- `jargonBusters.ts` uses "Claim Dock / Denial Cove / AR Reef" style names
- `careerAgentGeneratedJargon.ts` uses "Eligibility Dock / Prior Auth Bay / Charge Capture / Denial Queue"
- `careerAgentGeneratedJargonBillingCyberTopOff.ts` uses neutral chapters ("Eligibility and Benefits", "Coordination of Benefits")
- None match the syllabus chapter names literally — needs realignment.

## Per-file recommendations

| File | MB Q's | Bucket | Reason |
|---|---|---|---|
| [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) (medicalBillingJargonQuestions, ~lines 674–840) | ~22 | **KEEP** | Hand-authored, per-distractor explanations, distinctive "John" voice ("structural integrity of a wet napkin", "free-styled a number that felt spiritually adjacent to reimbursement"). The model for the catalog. |
| [`careerAgentGeneratedJargon.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargon.ts) (medicalBillingJargon block ~688–820) | ~16 | **FIX → MERGE** | Strong voice ("tap shoes", "lucky charm with digits"), per-distractor explanations actually present. But chapter taxonomy diverges from jargonBusters.ts. Lift novel scenarios into the canonical bank; align chapters. |
| [`careerAgentGeneratedJargonBillingCyberTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonBillingCyberTopOff.ts) (medicalBillingJargon, 30 q's) | 30 | **FIX** | Voice matches well ("denial wearing a mustache", "birthday rule"), good coverage of COB, MSP, contract variance, accumulators, takebacks, financial assistance. Auto-FIX trigger: every distractor uses the file-wide `DEFAULT_FLAW` constant. Rewrite per-distractor explanations to bring it to KEEP-grade. |
| [`careerAgentGeneratedJargonPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonPracticePolish.ts) (medicalBillingJargon block ~119–140) | 4 | **MERGE → JargonBillingCyberTopOff** | Generic ("Clean Claim", "Allowed is not billed", "Timely Filing", "COB") — duplicates topics covered better with voice elsewhere. Different `DEFAULT_FLAW` string than the top-off — increases maintenance cost. |

**Net effect**: ~72 MB jargon questions across 4 files → ~50 in 1 canonical voice-aligned bank with per-distractor explanations, syllabus-named chapters, and a `region: 'US'` tag.

## Open actions (priority order)

1. **Rewrite per-distractor explanations** in JargonBillingCyberTopOff (30 q's) — the content is good, the laziness is purely the `DEFAULT_FLAW` constant. ~4 hours.
2. **Realign chapter names** across all four files to the syllabus's five-chapter scheme.
3. **Merge JargonPracticePolish entries** into the top-off file, deleting duplicates.
4. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) — CARC/RARC, NCCI, Medicare MSP, birthday rule are all US-specific.
5. **Add `lastReviewed` metadata** to MSP, COB, and timely-filing questions; payer rules drift annually.

## Estimated effort

- Per-distractor rewrite for TopOff (30 q's × ~5 min): ~2.5 hours
- Chapter realignment across four files: ~1 hour
- Merge + dedupe: ~1 hour
- Region/lastReviewed tagging: ~30 min

**~5 hours total** — quickest of the cluster because content quality is already high.

## Notes for next auditor

This is the strongest healthcare jargon bank in the catalog. Voice and humor are intact across files (rare). The only sin is `DEFAULT_FLAW`. Use this as the model when rewriting `medicalBillingRoadmap` and other healthcare denial content. The `jargonBusters.ts` "John" character (revenue-cycle exasperation, payer haiku) should stay the voice anchor for any new authoring.
