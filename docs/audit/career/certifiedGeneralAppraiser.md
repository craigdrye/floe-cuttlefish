# Audit: certifiedGeneralAppraiser

**Syllabus**: [`src/data/syllabi/career/certified_general_appraiser.md`](../../../src/data/syllabi/career/certified_general_appraiser.md)
**Track id**: `certifiedGeneralAppraiser`
**Tier**: career
**Region**: US (USPAP is US-specific; not currently tagged)
**Status**: `playable` — has questions wired

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Assignment Setup and Professional Standards | ✅ | Scope of Work, Effective Date, Extraordinary Assumptions all addressed in CredentialsTechnical2 and ProfessionalPracticePolish |
| 2. Property Rights and Market Analysis | ✅ | Partial interests (leased fee), market rent vs contract rent, highest and best use — covered |
| 3. Sales Comparison Approach | ✅ | Comparable selection, paired sales, adjustment evidence — covered in CredentialsTechnical2 |
| 4. Income Approach | ⚠️ | Cap-rate comfort and vacancy fantasy are covered, but NOI math, DCF/terminal cap rate, lease rollover not directly tested |
| 5. Cost Approach and Depreciation | ⚠️ | One "new roof confusion" question on functional obsolescence; no replacement vs reproduction cost distinction, no cost-to-cure math |
| 6. Reconciliation and Reporting | ✅ | Three-approaches-disagree, mystery adjustment grid, USPAP ethics — well covered |

**Chapter taxonomy mismatch.** `career.ts` uses Floe-nautical ("Value Theory Dock", "Income Reef", "USPAP Cove", "Reporting Lagoon"). `CredentialsTechnical2` uses "Certified General Appraiser: <topic>" — exam-clean and matches syllabus terms (Scope of Work, USPAP Ethics, Income Approach). `Credentials2` repeats the same scheme. Pick one — recommend the exam-clean form.

## Per-file recommendations

| File | CGA Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) `certifiedGeneralAppraiser` block (lines 1498–1507) | 8 | **KEEP** | Hand-authored with per-distractor explanations and nudges. Strong USPAP independence framing (Q6903) and scope/reconciliation reasoning. Thin on the income approach. |
| [`careerAgentGeneratedCredentialsTechnical2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentialsTechnical2.ts) (lines 439–540) | 20 | **FIX** | Most complete USPAP/commercial-appraisal scenario set in the catalog (parking-lot HBU, cap-rate comfort, friendly lease, contamination assumption, condo conversion feasibility) — but every distractor uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and this becomes the canonical bank. |
| [`careerAgentGeneratedCredentials2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials2.ts) (lines 639–790) | ~20 | **MERGE → CredentialsTechnical2 (partial), DELETE rest** | Substantial topic overlap. Salvage genuinely new income-approach math, cost-approach depreciation, and reporting scenarios. `DEFAULT_FLAW` throughout. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) `certifiedGeneralAppraiser` block | ~4 | **DELETE** | Front-door teasers using `DEFAULT_FLAW`; concepts duplicated in deeper banks. |
| [`careerAgentGeneratedProfessionalPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedProfessionalPracticePolish.ts) `certifiedGeneralAppraiser` block (lines 31–52) | ~5 | **FIX or MERGE → CredentialsTechnical2** | `DEFAULT_FLAW` Polish-tier. Keep only the genuinely new USPAP independence scenarios; cut the rest. |

**Net effect**: ~55+ generated questions across 4 files → 8 hand-authored kept + ~25 FIX'd exam-style + ~8 new income/cost math questions = ~40 high-quality, exam-credible questions.

## Open actions (priority order)

1. **Tag `region: 'US'`** on certifiedGeneralAppraiser entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts). USPAP is US-only; international valuation uses IVS/RICS.
2. **Auto-FIX every `DEFAULT_FLAW`** in CredentialsTechnical2, Credentials2, FrontDoorPolish, ProfessionalPracticePolish for this track. ~50 distractors need real per-option explanations.
3. **Close Chapter 4/5 coverage gaps** — author 6–10 questions on NOI build, cap-rate extraction math, DCF sensitivity, replacement vs reproduction cost, age-life depreciation. Voice template = hand-authored block in `career.ts`.
4. **Add `lastReviewed` metadata** — USPAP has a 2-year revision cycle. Tag each question with the USPAP edition assumed.
5. **Pick one chapter taxonomy** — recommend the exam-clean "Certified General Appraiser: <topic>" form throughout.

## Estimated effort

- DEFAULT_FLAW rewrite across ~50 questions: ~10 hours
- Chapter 4/5 authoring (NOI, cap rate, DCF, cost depreciation): ~3 hours
- Chapter realignment + region tag + USPAP edition stamps: ~1 hour
- Merge/delete pass: ~1 hour

**~1.5–2 working days.** Justifiable: Certified General is the top US appraiser credential, high commercial value, and clearly an underserved exam-prep market. The hand-authored core is good but thin.

## Notes for next auditor

The Certified General Appraiser content sits in the same triplet structure as the other CredentialsTechnical2 tracks (CDFM, SOCRA/ACRP, API Inspectors, Patent Bar). Cluster-audit these credential tracks together — they all share `DEFAULT_FLAW`, similar chapter naming, and similar coverage gaps in the math-heavy chapters.
