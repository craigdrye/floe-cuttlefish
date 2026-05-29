# Audit: ventureCapitalRoadmap

**Syllabus**: [`src/data/syllabi/career/venture_capital_roadmap.md`](../../../src/data/syllabi/career/venture_capital_roadmap.md)
**Track id**: `ventureCapitalRoadmap`
**Tier**: career
**Region**: US (assumed throughout — SAFE/Delaware C-corp norms; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Venture Model and Fund Math (power law, DPI, TVPI, carry, mgmt fees, reserves) | ❌ | **No questions in any file.** Real gap — Chapter 1 of the syllabus and the foundation of VC career skill. |
| 2. Sourcing and Market Mapping | ✅ | Lives under chapter name "Thesis and Market Sizing" in generated files |
| 3. Startup Metrics and Diligence | ✅ | "Unit Economics and Traction" chapter |
| 4. Founder, Product, Customer Evidence | ✅ | "Founder and Team Assessment" chapter |
| 5. Terms, Memo, Investment Decision | ✅ | "Deal Process and Terms" + "Memo Writing and Investment Judgment" |
| 6. Portfolio Support and Follow-On | ✅ | "Portfolio Support" chapter |

**Chapter taxonomy mismatch.** Two competing schemes in use:
- `RoadmapFinance` family uses six chapters with their own names (above) — none match the syllabus literally
- `RoadmapPracticePolish` uses "VC: First Meeting", "VC: Diligence", "VC: Ownership", "VC: Investment Memo" — entirely different again

Both should be realigned to the syllabus chapter names.

## Per-file recommendations

| File | VC Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) | 17 | **FIX** | Strong VC content (CAC payback, 1x non-participating prefs, pro rata, cohort retention) but every wrong answer uses the file-wide `DEFAULT_FLAW` constant. Rewrite per-distractor explanations, align chapter names to syllabus, become the canonical VC bank. |
| [`careerAgentGeneratedRoadmapFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceTopOff.ts) | 16 | **MERGE → RoadmapFinance** | Adds genuinely novel scenarios (SAFE conversion, board seat ask, services-disguised margin, expansion math, regulated-market path). Lift the new content into the main file, dedupe overlaps. |
| [`careerAgentGeneratedRoadmapFinanceFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceFinalTopOff.ts) | 15 | **MERGE → RoadmapFinance (partial), DELETE rest** | Substantial overlap with TopOff. Salvageable: procurement-reality, adjacent-market expansion, pay-to-play, partner-channel economics (~5–8 questions). Cut the rest. |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) (VC section) | 4 | **DELETE** | Uses incompatible chapter taxonomy ("VC: First Meeting" etc). Content ("logo wall trap", "memo with a spine") is generic and re-covered better elsewhere. Different `DEFAULT_FLAW` string than the Finance family — adds maintenance cost for no content win. |
| [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) (VC entries) | ~6 | **KEEP** | **Gold standard for the catalog.** Hand-authored, per-distractor explanations, distinctive voice ("Cap Table Cove", "Term Sheet Shoals", "Market Map"). Source of voice for any new VC authoring. |

**Net effect**: 52 VC questions across 4 generated files → ~30 questions in 1 canonical file + 6 hand-written jargon entries kept as-is. Adding ~10 fund-math questions closes the Chapter 1 gap. Total: ~40 questions, much higher quality.

## Open actions (priority order)

1. **Author 8–12 fund-math questions** (Chapter 1 gap). Concepts: power-law math, $X return needed from this check, DPI vs TVPI, mgmt fee drag, carry waterfall, reserves logic. Voice template: `jargonBusters.ts`.
2. **Consolidate the RoadmapFinance triplet** into one file with per-distractor explanations and syllabus-aligned chapter names.
3. **Delete the VC section of `RoadmapPracticePolish`** (and audit whether the other tracks in that file justify keeping the file at all — likely covered by other audits).
4. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts).
5. **Verify the `status` flag** on this track — if it has questions wired up, it should be `playable`.

## Estimated effort

- Fund-math authoring: ~4 hours (12 questions × 20 min, including per-distractor explanations)
- Consolidation + per-distractor rewrite: ~6 hours (48 questions → 30)
- Delete + chapter rename: ~30 min

**~1 working day per career course at this depth.** ~70 career courses → substantial body of work but parallelisable.

## Notes for next auditor

The Finance roadmap family also contains `investmentBankingRoadmap`, `equityResearchRoadmap`, `salesAndTradingRoadmap`, `privateEquityRoadmap`, `hedgeFundsRoadmap`, `creditLevFinRoadmap` — same triplet structure (base + TopOff + FinalTopOff), same `DEFAULT_FLAW` pattern, same chapter mismatch likely applies. Worth auditing as a cluster.
