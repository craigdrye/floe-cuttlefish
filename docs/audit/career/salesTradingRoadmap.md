# Audit: salesTradingRoadmap

**Syllabus**: [`src/data/syllabi/career/sales_trading_roadmap.md`](../../../src/data/syllabi/career/sales_trading_roadmap.md)
**Track id**: `salesTradingRoadmap`
**Tier**: career
**Status**: `playable` (correct — has questions wired up)
**Region**: US (assumed — best-execution, MNPI, restricted-list compliance language; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Desk Roles and Market Structure (sales, trader, MM, agency/principal, liquidity) | ❌ | **Gap.** No questions explain who owns the relationship vs the risk, or what makes a market liquid/fragile. "Market Structure and Products" chapter is product-heavy, not desk-role-heavy. |
| 2. Products, Pricing, and Risk Measures (equities/rates/credit/FX/options, duration, Greeks) | ✅ | "Market Structure and Products" — bid-ask, order types, VWAP, duration mismatch, options premium, callable bonds, iceberg orders, ETF creation, curve steepener, Treasury two-way market, ETF premium-to-NAV. |
| 3. Client Flow and Trade Ideas (inquiry, axes, color, positioning, catalyst, suitability) | ✅ | "Client Coverage" — color vs advice, suitability filter, mandate-aware pitch, morning call value, flow context, best idea filter, cross-sell restraint, research-vs-trading info barrier. |
| 4. Execution, P&L, and Limits (orders, slippage, VaR, stop-loss, P&L explain) | ✅ | "Execution and Communication" + "Risk and Position Management" — partial fill, fat-finger, stop-loss purpose, correlation surprise, P&L attribution, arrival price, gap risk, basis risk, gamma day, volatility exposure, broken-trade protocol. |
| 5. Regulation and Desk Communication (best ex, MNPI, restricted list, surveillance) | ✅ partial | Touched in "Client Coverage" (quiet compliance line, research-vs-trading barrier, fat-finger escalation) but no dedicated chapter. Surveillance and restricted-list explicitly missing. |

**Chapter taxonomy mismatch.** Files use 4 chapters ("Market Structure and Products", "Risk and Position Management", "Client Coverage", "Execution and Communication") — none match the syllabus 5-chapter structure. **No `RoadmapPracticePolish` entries** for this track (same as equity research).

## Per-file recommendations

| File | S&T Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) | 16 | **FIX** | Strong product and execution content (bid-ask, VWAP, hedge intent on airline-vs-fuel, stop-loss, correlation surprise, suitability, partial-fill communication). Every wrong answer uses the file-wide `DEFAULT_FLAW` constant — **auto-FIX**. Canonical bank candidate after rewrite. |
| [`careerAgentGeneratedRoadmapFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceTopOff.ts) | 16 | **MERGE → RoadmapFinance** | Adds novel product/risk scenarios (iceberg, callable bond risk, basis risk, ETF creation, options gamma, allocation fairness, algo parameter check, cancel-replace, news halt, confidentiality boundary). Same `DEFAULT_FLAW`. Lift the new content. |
| [`careerAgentGeneratedRoadmapFinanceFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceFinalTopOff.ts) | 16 | **MERGE → RoadmapFinance (partial), DELETE rest** | Heavy overlap with TopOff: basis-risk scenario is nearly verbatim (corporate bond hedged with index, issuer widens more). Pair: hedge-basis-gap and TopOff basis risk are duplicates. Salvageable: curve steepener, illiquid limit order patience, inventory aging, ETF premium, callable note fit, concentration alert, research-vs-trading info barrier (~6–8 questions). |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) | 0 | n/a | No entries for this track. |

**Net effect**: 48 S&T questions across 3 generated files → ~28 questions in 1 canonical file with per-distractor explanations, syllabus-aligned chapters, plus ~8 new questions for Chapter 1 and Chapter 5.

## Open actions (priority order)

1. **Auto-FIX `DEFAULT_FLAW` in the Finance triplet for S&T section** — 48 questions sharing one generic flaw string.
2. **Author 5–6 Chapter 1 questions** (Desk Roles and Market Structure). Concepts: sales vs trader vs structurer responsibilities, principal vs agency execution, who owns risk vs relationship, what makes a venue/instrument liquid, market-maker quoting obligations. Voice template: `jargonBusters.ts` IB section (closest match for sober-but-witty desk language).
3. **Author 3–4 Chapter 5 questions** (Regulation and Desk Communication beyond ad-hoc compliance). Concepts: best-execution policy, restricted-list mechanics, surveillance triggers (front-running flags), chat-discipline standards, MNPI walls between research and trading.
4. **Consolidate the triplet** into one file with the 5 syllabus chapter names, and dedupe the explicit basis-risk duplicate between TopOff (q 4107351) and FinalTopOff (q 4107821).
5. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (line 533). Best-ex / MNPI / restricted-list framing is US-norm-flavoured (FINRA/SEC).

## Estimated effort

- Chapter 1 + Chapter 5 authoring: ~3.5 hours (~10 questions × 20 min)
- Consolidation + per-distractor rewrite: ~6.5 hours (48 questions → ~28)
- Dedupe + chapter rename: ~30 min

**~1.5 working days** total.

## Notes for next auditor

S&T is the cleanest of the six roadmaps content-wise — products covered are accurate, scenarios are realistic, and there's almost no overlap with the VC/IB/Equity Research bodies. The duplicate basis-risk question (TopOff q 4107351 ≈ FinalTopOff q 4107821) is the single clearest example of the generator producing the same scenario across two top-off rounds — a useful artefact to point at when justifying the cluster consolidation.

The Chapter 1 gap (desk roles and market structure) is structural to how the agent generates content: it reaches for product/risk specifics over role-clarity questions. Closing the gap will likely require human authoring rather than another agent pass.
