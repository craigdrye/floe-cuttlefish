# Audit: hedgeFundsRoadmap

**Syllabus**: [`src/data/syllabi/career/hedge_funds_roadmap.md`](../../../src/data/syllabi/career/hedge_funds_roadmap.md)
**Track id**: `hedgeFundsRoadmap`
**Tier**: career
**Status**: `playable` (correct — has questions wired up)
**Region**: US (assumed — expert-network / MNPI / Reg-FD-style ethics framing; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Strategy, Mandate, and Edge (L/S, event-driven, macro, credit, quant, gross/net) | ✅ partial | Touched in "Risk Management" via gross/net exposure math (140% long − 80% short = 60% net, 220% gross). No explicit strategy-mandate framing question; no question forces the learner to distinguish event-driven from L/S equity. |
| 2. Thesis Formation and Variant Perception | ✅ | "Idea Generation and Variant Perception" — variant view, catalyst fit, consensus gap, crowded long, time-horizon mismatch, consensus whisper, broken-story short, underfollowed segment, capital-allocation tell, buyback signal, margin inflection, consensus revenue bridge, spin-off setup. |
| 3. Modeling, Valuation, and Scenario Work (driver, upside/downside, EV, valuation gap) | ✅ partial | "Diligence and Modeling" — mosaic discipline, thesis drift, channel-check conflict, unit-economics short, alternative-data stale, management-guide credibility, primary-research conflict, segment hidden loss, channel-check sample, unit sensitivity, estimate sensitivity, management-KPI change. Light on explicit expected-value / probability-weighting framing. |
| 4. Shorts, Crowding, and Risk Control (borrow, squeeze, factor, stop, pair trade) | ✅ | "Risk Management" + "Portfolio Construction" — short squeeze setup, factor exposure, drawdown response, crowding haircut, hedge cost, short borrow math (12% borrow, 2-year catalyst), correlation check, thematic pileup, prime-broker call, borrow recall, stop-versus-thesis, earnings gap, event hedge, crowded exit, short-catalyst delay, thesis clock. |
| 5. Portfolio Review and Performance Attribution (sizing, drawdown, attribution, hit rate) | ✅ partial | "Portfolio Construction" — position sizing, pair trade, liquidity sizing, beta-neutral aim, exit plan after a winner doubles, net exposure creep, liquidity ladder, sizing after win. No hit-rate / batting-average / contribution-attribution question. |

**Chapter taxonomy mismatch.** Files use 4 chapters ("Idea Generation and Variant Perception", "Risk Management", "Diligence and Modeling", "Portfolio Construction") — close but not matching the syllabus 5 chapters. **No `RoadmapPracticePolish` entries** for this track.

## Per-file recommendations

| File | HF Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) | 16 | **FIX** | Strong public-markets content: variant view, mosaic discipline, gross/net math, short-squeeze risk on crowded shorts, pair trade purpose, position sizing on similar upside / different risk, liquidity sizing for $2B fund / $3M ADV. Every wrong answer uses the file-wide `DEFAULT_FLAW` constant — **auto-FIX**. Canonical bank candidate. |
| [`careerAgentGeneratedRoadmapFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceTopOff.ts) | 16 | **MERGE → RoadmapFinance** | Adds novel scenarios (consensus whisper, broken-story short, stop-versus-thesis, earnings gap, alternative-data staleness, crowding haircut, hedge cost tradeoff, capital-allocation tell, short borrow 12% / 2-year math, segment hidden loss, correlation check, spin-off setup, prime-broker margin call, estimate sensitivity broken-formula, exit plan on doubled position). Same `DEFAULT_FLAW`. Lift the new content. |
| [`careerAgentGeneratedRoadmapFinanceFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceFinalTopOff.ts) | 16 | **MERGE → RoadmapFinance (partial), DELETE rest** | Notable overlap: thesis-clock (q 4107852) ≈ stop-versus-thesis (TopOff q 4107382); thematic-pileup (q 4107861) ≈ correlation-check (TopOff q 4107391); sizing-after-win (q 4107865) ≈ exit-plan (TopOff q 4107395); crowded-exit (q 4107863) ≈ crowding-haircut (TopOff q 4107386). Salvageable: margin inflection, consensus revenue bridge, event hedge, channel-check sample, unit sensitivity, net exposure creep, liquidity ladder, underfollowed segment, short-catalyst delay, management-KPI change, primary-research conflict, buyback signal (~10 questions). |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) | 0 | n/a | No entries for this track. |

**Net effect**: 48 HF questions across 3 generated files → ~30 questions in 1 canonical file with per-distractor explanations, syllabus-aligned chapters, plus ~5 new questions covering Chapter 1 mandate/strategy framing and Chapter 5 attribution explicitly.

## Open actions (priority order)

1. **Auto-FIX `DEFAULT_FLAW` in the Finance triplet for HF section** — 48 questions sharing one generic flaw string.
2. **Author 3–4 Chapter 1 questions** (Strategy, Mandate, and Edge). Concepts: distinguishing L/S equity vs event-driven vs macro mandates, where edge comes from per strategy, what risk is "just beta" vs alpha, mandate fit for an idea.
3. **Author 2–3 Chapter 5 attribution questions** — explicit P&L drivers (contribution by name, by sector, by factor), hit rate vs batting average vs slugging, when to add/cut/hold a position based on attribution rather than feel.
4. **Consolidate the triplet** into one file with the syllabus 5-chapter taxonomy. Dedupe the 4 clear duplicate pairs identified above between TopOff and FinalTopOff.
5. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (line 555). Expert-network MNPI / Reg FD / prime-broker financing terms are US-norm-flavoured.

## Estimated effort

- Chapter 1 + Chapter 5 authoring: ~2.5 hours (~7 questions × 20 min)
- Consolidation + per-distractor rewrite: ~6.5 hours (48 questions → ~30)
- Dedupe + chapter rename: ~30 min

**~1.5 working days** total.

## Notes for next auditor

HF has the **most explicit base + TopOff + FinalTopOff duplication** in the cluster — at least 4 question pairs are near-duplicates of the same concept across rounds. This is the cleanest evidence for "the agent keeps re-inventing the same scenario when topped up without a memo of prior coverage." Useful artefact when arguing for the cluster consolidation.

The short borrow math question (12% annual borrow cost, 2-year catalyst, 25% expected downside) is excellent and rare in the catalog — keep prominently and use as a template for the few quantitative-judgement questions we need.

Chapter 5 attribution gap is the same pattern seen in S&T Chapter 1 (desk roles) and IB Chapter 1 (workflow) — the agent reaches for analyst-craft specifics over framing/structure questions. The human authoring template for these should match `jargonBusters.ts` voice but keep distractors sober (no jokes — these are mandate/attribution decisions, not partner-speak).
