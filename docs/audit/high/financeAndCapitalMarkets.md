# Audit: financeAndCapitalMarkets

**Syllabus**: [`src/data/syllabi/high/finance_and_capital_markets.md`](../../../src/data/syllabi/high/finance_and_capital_markets.md)
**Track id**: `financeAndCapitalMarkets` (Year 11, ages 15-16)
**Tier**: high
**Region**: **US-leaning** (FDIC, NCUA, Federal Reserve, SEC, FINRA, Treasury bonds, 401(k), Roth/Traditional IRA). Tag `region: 'US'`.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Money, Goals, Budgets, and Financial Choices | partial | `lifeEconomicsBlueprints` opportunity-cost item touches the surface — that's it |
| 2. Interest, Inflation, and the Time Value of Money | not covered | Total gap (no compounding, APY/APR, Rule of 72) |
| 3. Credit, Debt, and Consumer Protection | not covered | Total gap |
| 4. Banks, the Federal Reserve, and the Financial System | not covered | Total gap |
| 5. Bonds and Fixed Income | not covered | Total gap |
| 6. Stocks, Ownership, and Public Markets | not covered | Total gap |
| 7. Funds, Diversification, and Long-Term Planning | not covered | Total gap |
| 8. Behavioral Finance, Crises, Scams, and Market Ethics | not covered | Total gap |

Track is `status: 'playable'` (`high.ts:1653`) — so the empty state is **shipped, not hidden**. `familyFor` matches "finance" and "capital markets" -> 'economics' -> `lifeEconomicsBlueprints` (2 items: opportunity-cost Saturday + canteen cookie). 50 questions = 25 repeats of two intro-econ items, neither of which mentions interest, inflation, bonds, stocks, or any chapter content.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `lifeEconomicsBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) (lines 579-606) | 2 x 25 = 50 | **DELETE for this track** | Two intro-econ items cycled 25x. Zero finance content. |
| Career-tier finance banks (`careerAgentGeneratedRoadmapFinance.ts`, `careerAgentGeneratedQualificationsFinance*.ts`, `careerAgentGeneratedJargonFinanceTopOff.ts`, `jargonBusters.ts` finance entries) | 0 | **possible MERGE (heavy edit)** | Career-tier banks have IB/PE/VC/credit content that's pitched 5-7 years above this audience. Concepts like "DPI" or "Treasury yield curve" can be downsized to Year 11 reading level — but it's a rewrite, not a lift. |
| `apEconomicsExamBatch.ts`, `apEconomicsWorkoutGenerated.ts`, `microeconomicsWorkoutGenerated.ts`, `macroeconomicsWorkoutGenerated.ts` | 0 (university-tier) | **possible MERGE (selective)** | AP Econ has Fed/monetary-policy items; Macro has inflation, real-vs-nominal — usable seed material. |
| No dedicated finance bank exists | — | — | Authoring greenfield. |

## Duplicate-track flag

No `philYear*` duplicate. No other Year 11 finance track exists.

## Open actions (priority order)

1. **Author a dedicated finance bank** — ~50 questions, 6-7 per chapter, voice template `jargonBusters.ts` ("Bond Bay", "Yield Curve Cove"). Concrete scenarios: Rule of 72 doubling time; credit-card minimum-payment payoff months; Fed rate change first-order effects; bond price vs yield inverse; P/E interpretation; expense-ratio drag on long-term returns; pump-and-dump red flags.
2. **Add `region: 'US'` tag**.
3. **Cite `lastReviewed: <date>` per the CONTENT_AUDIT.md schema-change note** — bond rates, FDIC limits, IRA contribution limits all shift.
4. **Suppress the `lifeEconomicsBlueprints` fallback** for this track.
5. **Lift seed material** from AP Econ workouts for Ch 4 (Fed, monetary policy) and Ch 8 (behavioral economics).

## Estimated effort

- Author 50 hand-written finance Q's: ~14 hours
- Region tag + lastReviewed schema: ~1 hour
- Seed-material lift from AP Econ: ~2 hours
- Fallback suppression: ~30 min

## Flags

- **`status: 'playable'` with zero real content** — worse than `lifeSkillsAndAdulting` because that one has `lifeSkillsHigh: 'soon'` shadow; this one is fully visible. A Year 11 student picking "Finance and Capital Markets" right now gets canteen-cookie incentives.
- **Cycling pathology**: 2 blueprints x 25 repeats.
- **Silent US-specificity** if not tagged.
- **No DEFAULT_FLAW** (no bank).
- **Adjacent course content gap**: `lifeSkillsAndAdulting` Ch 1-3 (banking, credit, taxes) and this track's Ch 1-3 overlap heavily — careful sequencing needed so they aren't duplicates.
