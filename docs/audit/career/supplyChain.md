# Audit: supplyChain

**Syllabus**: [`src/data/syllabi/career/supply_chain_analyst.md`](../../../src/data/syllabi/career/supply_chain_analyst.md)
**Track id**: `supplyChain`
**Tier**: career
**Region**: jurisdiction-neutral (operations content; no US-specific regulation)
**Status**: `playable` — has questions wired

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Supply Chain Map and Metrics | ⚠️ | Perfect order metric covered in EthicsOps; no plan-source-make-deliver-return framing |
| 2. Demand and Forecasting | ✅ | Forecast bias, promo spike, baseline vs event lift — strong in `career.ts` and EthicsOps |
| 3. Inventory and Service Levels | ✅ | Safety stock, slow-mover critical parts, service-level pressure — strong |
| 4. Suppliers and Sourcing Risk | ✅ | Single source / flood risk, lead-time variability — covered in EthicsOps and Applied |
| 5. Operations and Capacity | ✅ | Bottleneck, expedite tradeoff — covered in `career.ts` and FrontDoorPolish |
| 6. Transportation, Warehousing, Network | ✅ | Full-truck choice, warehouse slotting, network design (regional warehouse) — strong in EthicsOps |
| 7. S&OP and Cross-Functional Planning | ✅ | S&OP mismatch (sales/ops/finance), priority decisions — covered in EthicsOps |
| 8. Resilience, Analytics, Decision Communication | ✅ | Port strike segmentation, master data quality, exception management — covered in EthicsOps |

**Coverage is broad** — every chapter has at least one question. Depth varies; the strongest chapters (3, 6, 7) have multiple scenarios across multiple files. Note: track sits at "analyst" level, not exam credential — no certification-specific math gaps.

## Per-file recommendations

| File | supplyChain Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) `supplyChain` block (lines 2032–2065) | 4 | **KEEP** | Hand-authored via `makeSimpleQuestion` with per-distractor explanations and nudges. Covers forecast bias, safety stock, bottleneck, expedite tradeoff. Thin but quality. |
| [`careerAgentGeneratedQualificationsEthicsOps.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsEthicsOps.ts) `supplyChain` block (lines 123–194) | ~14 | **FIX** | Best content in the bank: promo spike forecasting, critical slow movers, single-source flood risk, S&OP mismatch, defect quarantine, slotting, perfect order metric, network design, lead-time variability, exception triage, sustainable packaging, port strike, master data. Genuinely well-covered syllabus. But every distractor uses `DEFAULT_FLAW`. Rewrite per-distractor and this is the canonical bank. |
| [`careerAgentGeneratedQualificationsEthicsOps2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsEthicsOps2.ts) `supplyChain` block (lines 173+) | ~14 | **MERGE → EthicsOps (partial), DELETE rest** | Substantial topic overlap with EthicsOps. Salvage genuinely new scenarios; cut the rest. `DEFAULT_FLAW`. |
| [`careerAgentGeneratedApplied.ts`](../../../src/data/questionCatalog/careerAgentGeneratedApplied.ts) `supplyChain` block (lines 307+) | ~14 | **MERGE → EthicsOps (partial), DELETE rest** | Same pattern — likely substantial overlap with EthicsOps. `DEFAULT_FLAW`. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) `supplyChain` block (lines 273–294) | 4 | **DELETE** | Front-door teasers using `DEFAULT_FLAW`; all four concepts (forecast bias, bottleneck, service level, expedite) duplicated in `career.ts` hand-authored and EthicsOps with more depth. |
| [`careerAgentGeneratedProfessionalPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedProfessionalPracticePolish.ts) `supplyChain` block (lines 141+) | ~5 | **FIX or DELETE** | Polish-tier `DEFAULT_FLAW`. Keep only if it adds new scenarios beyond EthicsOps. |

**Net effect**: ~55+ generated questions across 5 files (with heavy duplication) → 4 hand-authored kept + ~18 FIX'd canonical from EthicsOps + 0–5 salvaged from EthicsOps2/Applied = ~25 high-quality questions covering every syllabus chapter.

## Open actions (priority order)

1. **No region tag needed** — operations content is largely jurisdiction-neutral. Could spot-check Chapter 4 supplier risk examples (geopolitical assumptions) but no urgent tagging.
2. **Auto-FIX every `DEFAULT_FLAW`** in QualificationsEthicsOps for this track — this is the canonical bank. ~14 questions × 3 distractors = ~42 distractor explanations to write.
3. **MERGE/DELETE the duplicate banks** — supplyChain appears in 5 separate generated files with substantial overlap. Pick EthicsOps as canonical, salvage unique scenarios from EthicsOps2 and Applied, delete the rest.
4. **DELETE** the FrontDoorPolish supplyChain block — fully redundant.
5. **Consider adding light quant content** — current bank is judgment-heavy. ~5 questions with explicit safety-stock math, reorder point math, EOQ, or queueing intuition would round out Chapter 3/5 coverage and lift this from "discussion" to "analyst skill."
6. **Note `discipline: 'Operations'` is correct** — but consider whether this should also surface under a `Career` discipline collection for discoverability.

## Estimated effort

- DEFAULT_FLAW rewrite across ~14 EthicsOps questions: ~3 hours
- Merge/delete pass across 5 files: ~2 hours
- Optional quant authoring (5 questions): ~2 hours

**~1 working day.** Highest-volume content among the niche cluster (most duplication, easiest cleanup). Operations/supply-chain analyst is a sizable and growing market; the syllabus is well-aligned to MITx/ASCM/Coursera curricula.

## Notes for next auditor

supplyChain's main issue isn't coverage — it's **overproduction with duplication**. The same concepts appear in 5 generated files with `DEFAULT_FLAW` distractors. Aggressive consolidation pays off here. Compare to customsBroker (also well-covered, with one canonical bank in LegacyFinanceOpsTopOff) — supplyChain should aim for the same architecture: one canonical generated bank + hand-authored core + jargon/voice file if relevant.
