# Audit: equityResearchRoadmap

**Syllabus**: [`src/data/syllabi/career/equity_research_roadmap.md`](../../../src/data/syllabi/career/equity_research_roadmap.md)
**Track id**: `equityResearchRoadmap`
**Tier**: career
**Status**: `playable` (correct — has questions wired up)
**Region**: US (assumed — Series 86 framing, 10-K/10-Q references, MNPI/banking-pressure ethics; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Company and Industry Setup (business model, drivers, peers, regulation) | ✅ partial | Lives under "Industry Research" — share-vs-market, input cost, capacity wave, regulatory cost pass-through. Light on peer-set construction. |
| 2. Filings, Earnings, and Management Commentary | ✅ | "Earnings and Newsflow" — guidance cut, catalyst calendar, beat quality, backlog conversion, preannounce read, one-time beat, guidance wording. |
| 3. Forecasting and Model Discipline (revenue build, margin bridge, EPS, FCF) | ✅ | "Company Modeling" + "Accounting and Estimates" — segment mix, DSO clue, inventory buildup, estimate flow-through ($50M × 30% = $15M EBITDA), share repurchase effect, deferred revenue, stock comp lens. |
| 4. Valuation and Rating Logic (P/E, EV/EBITDA, DCF, SOTP, target, risk-reward) | ✅ | "Valuation and Recommendation" — multiple discipline, target price bridge, risk-reward math, multiple compression, SOTP, terminal growth check, scenario-weighted view, rating after rerate. |
| 5. Research Note and Investor Debate (thesis, catalyst, channel checks, compliance) | ✅ | "Research Ethics and Communication" — MNPI hint, balanced risk section, banking pressure, selective preview, expert network boundary, tone after downgrade, source description. |

**Chapter taxonomy mismatch.** Files use the topic `Series 86` (not `Career Skills` like every other finance track) and 5 chapters of their own invention. None match the syllabus. Notably, this track has **no `RoadmapPracticePolish` entry at all** — unlike VC and IB. Inconsistent taxonomy will confuse any future chapter-aware UI.

## Per-file recommendations

| File | Eq Research Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) | 18 | **FIX** | Best of the three — covers all 5 syllabus chapters with concrete numerical and judgment questions (estimate flow-through math, MNPI escalation, beat quality, balanced risk section). Every wrong answer uses the file-wide `DEFAULT_FLAW` constant — **auto-FIX**. Rewrite per-distractor explanations, align chapter names to syllabus, become canonical. |
| [`careerAgentGeneratedRoadmapFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceTopOff.ts) | 16 | **MERGE → RoadmapFinance** | Adds novel scenarios (promo-driven sales, deferred cost capitalization, SOTP, trade-down risk, capacity wave, FX-driven guide-down, SaaS renewal seasonality, downside-case discipline). Same `DEFAULT_FLAW`. Lift the new content, dedupe. |
| [`careerAgentGeneratedRoadmapFinanceFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceFinalTopOff.ts) | 16 | **MERGE → RoadmapFinance (partial), DELETE rest** | Substantial overlap with TopOff (billings slowdown ≈ deferred-revenue/SaaS renewal; margin mix shift ≈ segment mix; rating after rerate ≈ scenario-weighted). Salvageable: terminal growth check, supplier commentary, new entrant pricing, regulation cost pass-through, expert network boundary, preannounce read, pricing-vs-volume (~6–8 questions). |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) | 0 | n/a | No `equityResearchRoadmap` entries in this file. Notable inconsistency with VC/IB. |
| [`series86Imported.ts`](../../../src/data/questionCatalog/series86Imported.ts) | n/a | **CHECK** | Imported into the assembler for the `series86` track, not this roadmap, but topic-adjacent. Confirm no orphan equity-research questions are stranded there. Likely a separate `series86Imported.md` audit. |

**Net effect**: 50 equity research questions across 3 generated files → ~30 questions in 1 canonical file with per-distractor explanations, syllabus-aligned chapters, and `Career Skills` topic harmonised with the rest of the finance cluster.

## Open actions (priority order)

1. **Auto-FIX `DEFAULT_FLAW` in the Finance triplet for equity research section** — 50 questions sharing one generic flaw string.
2. **Normalise the topic field** from `Series 86` to `Career Skills` (or split: research-skill questions stay `Career Skills`, exam-style questions move to a real `series86` track). Today the inconsistency means equity research questions look like Series 86 prep in any topic-filtered view.
3. **Author 4–6 Chapter 1 questions** (Company and Industry Setup) — concept-tested less than the others; concepts: peer-set construction, segment drivers, cycle positioning, regulatory environment as estimate input.
4. **Consolidate the RoadmapFinance triplet** into one file with the 5 syllabus chapter names.
5. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (line 522). 10-K/10-Q, MNPI handling, banking-pressure ethics, Reg FD-style selective-disclosure are US norms.

## Estimated effort

- Chapter 1 authoring: ~2 hours (6 questions × 20 min)
- Consolidation + per-distractor rewrite: ~7 hours (50 questions → ~30)
- Topic-field normalisation: ~30 min
- Delete + chapter rename: ~30 min

**~1.5 working days** total.

## Notes for next auditor

Two equity-research peculiarities to flag for the cluster pass:
- **Topic field is `Series 86`, not `Career Skills`** — different from every other finance roadmap track in the same files. Likely a hangover from when this content was Series-86 exam prep; needs harmonisation.
- **No `RoadmapPracticePolish` entries** — every other finance track in this cluster has 4 PracticePolish questions adding chapter-taxonomy noise. Equity Research escaped that mess but is therefore missing the (low-value) polish layer. Not a real loss.

The `series86Imported.ts` file and the `series86` / `series8687` tracks in the age catalog also need an audit pass — likely candidates to either merge with this track or remain as separate credential-prep banks.
