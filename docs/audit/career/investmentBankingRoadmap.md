# Audit: investmentBankingRoadmap

**Syllabus**: [`src/data/syllabi/career/investment_banking_roadmap.md`](../../../src/data/syllabi/career/investment_banking_roadmap.md)
**Track id**: `investmentBankingRoadmap`
**Tier**: career
**Status**: `playable` (correct — has questions wired up)
**Region**: US (assumed throughout — DCF/comps norms, SPA/working-capital peg language; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Banking Workflow and Client Context (coverage, pitch vs live deal, deliverables) | ❌ | **Gap.** No questions explain coverage vs product groups, pitch-vs-process distinction, or deliverable ownership. |
| 2. Accounting and Financial Statement Links | ✅ partial | Covered indirectly via "Financial Modeling" chapter (balance-sheet plug, DSO, working capital seasonality, deferred revenue bridge). |
| 3. Valuation Core (comps, DCF, WACC, terminal value, football field) | ✅ | Lives under "Valuation and Comps" — strongest coverage; multiple selection, DCF sanity, EV bridge, precedent filter, calendar mismatch, lease treatment. |
| 4. M&A and Capital Markets Materials | ✅ | "M&A Process" chapter — process letter, working-capital peg, synergy haircut, exclusivity clock, regulatory closing risk. |
| 5. Execution, Comments, and Quality Control | ✅ | "Execution Discipline" — version control, footnote mismatch, distribution list, formula break. |

**Chapter taxonomy mismatch.** Question files use 5 chapters of their own invention ("Financial Modeling", "Valuation and Comps", "M&A Process", "Client Communication", "Execution Discipline") — none match the syllabus chapter names. `RoadmapPracticePolish` uses yet a third taxonomy ("IB: Process Management", "IB: Model Review", "IB: Diligence Room", "IB: Closing Mechanics"). All should be realigned to the syllabus chapter names.

## Per-file recommendations

| File | IB Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) | 16 | **FIX** | Strong analyst-workflow content (revenue bridge, circularity warning, EV bridge $2.0B + $0.5B − $0.1B = $2.4B math, synergy haircut, fat-finger version control). Every wrong answer uses the file-wide `DEFAULT_FLAW` constant — **auto-FIX**. Rewrite per-distractor explanations, rename chapters to match syllabus, become the canonical IB bank. |
| [`careerAgentGeneratedRoadmapFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceTopOff.ts) | 16 | **MERGE → RoadmapFinance** | Adds novel scenarios (margin bridge, Q&A log, management meeting rehearsal, fairness committee prep, exclusivity clock, share count cleanup, minority stake read). Same `DEFAULT_FLAW`. Lift the new content, dedupe overlaps. |
| [`careerAgentGeneratedRoadmapFinanceFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceFinalTopOff.ts) | 16 | **MERGE → RoadmapFinance (partial), DELETE rest** | Same `DEFAULT_FLAW`. Salvageable: deferred revenue bridge, working capital seasonality, lease treatment, currency mismatch, tax asset use, regulatory closing risk, GMV-vs-net-revenue metric mismatch (~7–9 questions). Cut overlaps with TopOff (forecast vintage ≈ TopOff calendar mismatch; redline trap ≈ TopOff redline). |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) (IB section) | 4 | **DELETE** | Incompatible chapter taxonomy ("IB: Process Management" etc). Different `DEFAULT_FLAW` string than the Finance family. Content (buyer-list politics, EBITDA bridge wobble, missing contract, working capital fight) is re-covered better in the Finance triplet. |
| [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) (IB entries) | 0 for this track | n/a | IB jargon lives under the separate `ibJargon` track, not this one. See `ibJargon.md` audit. |

**Net effect**: 52 IB questions across 4 generated files → ~30 questions in 1 canonical file with per-distractor explanations and syllabus-aligned chapters. Adding ~6 Chapter 1 questions (workflow / client context) closes the only real coverage gap.

## Open actions (priority order)

1. **Auto-FIX `DEFAULT_FLAW` in the Finance triplet for IB section** — every distractor in 48 questions currently shares one generic flaw string. Rewrite each per the framework's quality bar.
2. **Author 6–8 Chapter 1 questions** (Banking Workflow and Client Context). Concepts: coverage vs product group ownership, pitch vs live-deal distinction, deliverable map with owners/deadlines, CIM-vs-teaser sequence. Voice template: `jargonBusters.ts` IB section.
3. **Consolidate the RoadmapFinance triplet** into one file with syllabus-aligned chapter names matching the 5 syllabus chapters.
4. **Delete the IB section of `RoadmapPracticePolish`** — covered better elsewhere, adds taxonomy and `DEFAULT_FLAW` noise.
5. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (line 511). Working-capital pegs, SPA reps and warranties, antitrust framing are US-norm-flavoured.

## Estimated effort

- Chapter 1 authoring: ~3 hours (8 questions × 20 min)
- Consolidation + per-distractor rewrite: ~7 hours (48 questions → ~30)
- Delete + chapter rename: ~30 min

**~1.5 working days** total — slightly above the VC baseline because the triplet has more questions per track.

## Notes for next auditor

The base + TopOff + FinalTopOff triplet pattern is identical to VC: same `DEFAULT_FLAW` string, same chapter-taxonomy invented per file, same `RoadmapPracticePolish` quartet adding a fourth incompatible taxonomy. All 6 finance roadmap tracks (`investmentBankingRoadmap`, `equityResearchRoadmap`, `salesTradingRoadmap`, `privateEquityRoadmap`, `hedgeFundsRoadmap`, `creditLevFinRoadmap`, plus `ventureCapitalRoadmap`) share this pattern — treat as a cluster fix, not seven separate jobs. Each track has 16+16+16 = 48 generated questions plus 0–4 PracticePolish.
