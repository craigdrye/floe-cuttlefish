# Audit: salesFundamentals

**Syllabus**: [`src/data/syllabi/career/sales_fundamentals.md`](../../../src/data/syllabi/career/sales_fundamentals.md)
**Track id**: `salesFundamentals`
**Tier**: career
**Region**: Region-neutral. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Selling Is For | ⚠️ | Touched implicitly via Polish "Polite but impossible" qualification; no buyer-fit/ethics item |
| 2. Prospecting and First Contact | ❌ | **No targeting, triggers, personalization, sequencing items** |
| 3. Discovery | ✅ | Hand-authored "Discovery first" + Polish "Pitch too soon" + Supplement coverage |
| 4. Qualification and Stakeholder Mapping | ✅ | Polish "Polite but impossible", "Happy ears" + Supplement coverage |
| 5. Value, Proof, and ROI | ✅ | Hand-authored "Value framing" + Supplement on business case |
| 6. Objections and Negotiation | ✅ | Hand-authored "Objection handling" + Polish "Price objection" |
| 7. Pipeline and Forecast Hygiene | ✅ | Polish "Happy ears" + hand-authored "Closing signal" |
| 8. Learning From Wins and Losses | ❌ | **No win/loss review, churn, expansion, handoff items** |

**Coverage misses Chapter 2 (Prospecting) entirely and Chapter 8 (Win/Loss Learning) entirely.** Chapters 3–7 are well-covered but with the typical multi-file duplication pattern.

**Chapter taxonomy mismatch.**
- `career.ts` (lines 141–146) uses Dock/Reef/Cove/Lagoon: "Sales Dock", "Sales Reef", "Sales Cove", "Sales Lagoon"
- `careerAgentGeneratedCoreSupplementCommunicationLeadership.ts` (salesFundamentals section, line 217) uses "Sales Fundamentals: <Subject>"
- `careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts` (salesFundamentals section, line 277) uses same prefix
- `careerAgentGeneratedCareerSkillsPolish.ts` (salesFundamentals section, lines 97–118) uses "Sales Fundamentals: <Subject>"
- `careerAgentGeneratedCareerFrontDoorPolish.ts` (salesFundamentals section, line 251) uses same prefix

Syllabus uses descriptive titles ("Prospecting and First Contact", "Value, Proof, and ROI"). Realign.

## Per-file recommendations

| File | salesFundamentals Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (lines 141–146) | 4 | **KEEP** | Hand-curated with per-distractor explanations and natural sales-coach voice. Topics: discovery, objection handling, value framing, buying signals. Voice template. |
| [`careerAgentGeneratedCoreSupplementCommunicationLeadership.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementCommunicationLeadership.ts) (salesFundamentals section, line 217) | ~12 | **FIX** | Real scenario coverage (discovery, qualification, value, objection). Uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and merge with Supplement2. |
| [`careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts) (salesFundamentals section, line 277) | ~12 | **MERGE → CoreSupplementCommunicationLeadership (FIX)** | The +2 in base+TopOff. Likely duplicates base. Salvage 4–6 distinct items. |
| [`careerAgentGeneratedCareerSkillsPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerSkillsPolish.ts) (salesFundamentals section, lines 97–118) | 4 | **MERGE → CoreSupplementCommunicationLeadership** | Good items on qualification, discovery, price objection, forecasting. Different `DEFAULT_FLAW` constant. Lift if genuinely novel; otherwise dedupe. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (salesFundamentals section, line 251) | 4 | **DELETE** | Re-covers discovery/qualification/objection/closing — all already in canonical core + Supplement. Different `DEFAULT_FLAW`. No net content. |

**Duplication pattern**: discovery, qualification, objection-handling, and forecasting appear in 4–5 files each. Same archetypes, slightly different wording, four different `DEFAULT_FLAW` constants.

## Open actions (priority order)

1. **Author Chapter 2 (Prospecting and First Contact) bank** — 6 questions on targeting, triggers, personalization, referral paths, sequence relevance, permission. Largest coverage gap.
2. **Author Chapter 8 (Win/Loss Learning) bank** — 5 questions on win/loss review, churn signals, expansion identification, success handoff. Second-largest gap.
3. **Consolidate Supplement1 + Supplement2 + CareerSkillsPolish** into a single canonical `salesFundamentals` bank with per-distractor explanations. Aim for ~22 questions across 8 chapters.
4. **Delete the salesFundamentals section of `CareerFrontDoorPolish`**.
5. **Author Chapter 1 (What Selling Is For)** item on ethical sales motion, ICP definition.

## Estimated effort

- Coverage-gap authoring (chapters 1, 2, 8): ~4 hours (12 questions × 20 min)
- Consolidation + per-distractor rewrite + dedup: ~5 hours
- Delete + chapter rename: ~30 min

**~1.5 working days.**

## Notes for next auditor

The salesFundamentals track follows the same duplication pattern as `peopleManagement`, `negotiation`, and `publicSpeaking` — all in the same `CoreSupplementCommunicationLeadership` + `CoreSupplementCommunicationLeadership2` + `CareerSkillsPolish` + `CareerFrontDoorPolish` quartet, each with its own DEFAULT_FLAW constant. Consolidating all four CommunicationLeadership-cluster tracks together is more efficient than doing them serially — same source files, same dedup decisions.

Cross-check overlap with `technicalSales` during consolidation. `salesFundamentals` is buyer-pain and value-framing focused; `technicalSales` is technical-evaluation focused. Keep distinct.
