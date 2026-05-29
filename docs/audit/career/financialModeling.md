# Audit: financialModeling

**Syllabus**: [`src/data/syllabi/career/financial_modeling.md`](../../../src/data/syllabi/career/financial_modeling.md)
**Track id**: `financialModeling`
**Tier**: career
**Region**: US-leaning but largely jurisdiction-neutral (GAAP-flavored examples; not currently tagged)
**Status**: `playable` — wired and serving questions

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Modeling Standards and Architecture | ✅ | Assumption color-coding, hardcode discipline, sign conventions, model shell |
| 2. Historical Financials and Operating Drivers | ⚠️ partial | Drivers framing exists, but no explicit historicals spread, normalization, or common-size content |
| 3. Revenue, Expense, Working Capital Forecasts | ✅ | Volume × price builds, working-capital cohort math, receivables-vs-DSO, fulfillment-capacity constraint |
| 4. Three-Statement Integration | ✅ | Depreciation domino, balance-sheet seesaw, balance-check alarm, debt-paydown, circular-reference gremlin |
| 5. Free Cash Flow and DCF Valuation | ⚠️ partial | Free cash flow definition exists at intro level; no WACC-build, terminal-value-method, or EV-to-equity bridge content tagged to this track (those live in `series86` and `cfaLevelOne`) |
| 6. Comparables, Scenarios, Sensitivities | ✅ | Scenario selector vs three copied tabs, stress case, scenario-vs-data-tables |
| 7. Model Review, Error Detection, Stress Testing | ✅ | Balance check, sign-convention slip, capacity ceiling, sensitivity-of-key-driver |
| 8. Communicating the Model | ✅ | Decision-ready output, exec summary vs 15-tab workbook, preliminary-actuals labeling |

**Chapter taxonomy mismatch.** Three competing schemes:
- Base `financialModeling` block in `career.ts` uses bespoke locations ("Modeling Dock", "Modeling Reef", "Modeling Cove", "Modeling Lagoon")
- `careerAgentGeneratedCore1.ts` uses prefixed sub-topics ("Model Foundations: Revenue Drivers", "Three-Statement Linkage", "Balance Sheet Logic", "Error Checks")
- `careerAgentGeneratedCoreSupplementDesignTech.ts`, `DesignTech2`, `CoreFinalTopOff`, and `CoreRoadmapPolish` use yet another scheme ("Financial Modeling: Assumptions", "Financial Modeling: Scenario Analysis", "Financial Modeling: Error Checks")

## Per-file recommendations

| File | FM Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) base `financialModeling` block | 4 | **KEEP (rename chapters)** | Hand-authored taster (revenue build, three statements, sensitivity, FCF). Per-distractor explanations present but light. Solid entry-level content; needs chapter rename. |
| [`careerAgentGeneratedCore1.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCore1.ts) (`financialModeling` section) | ~17 | **FIX** | The strongest agent-generated FM content: depreciation domino, balance-sheet seesaw, balance-check alarm, sign conventions, circular references, working capital, debt schedules, capex. All distractors use file-wide `DEFAULT_FLAW` constant → auto-FIX. Becomes the canonical bank after rewrite. |
| [`careerAgentGeneratedCoreSupplementDesignTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementDesignTech.ts) (`financialModeling` section) | ~10 | **MERGE → Core1 + DELETE rest** | Adds genuinely novel scenarios (revenue driver decomposition, scenario selector vs copied tabs, working-capital DSO bridge). Salvage ~6. Rest overlaps Core1 on three-statement integration. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedCoreSupplementDesignTech2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementDesignTech2.ts) (`financialModeling` section) | ~13 | **MERGE → Core1 (partial)** | Salvage capacity ceiling, preliminary-actuals labeling, cohort renewal modeling. Rest duplicates DesignTech1. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedCoreFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreFinalTopOff.ts) (`financialModeling` section) | 4 | **MERGE → Core1 + DELETE rest** | Capacity constraint duplicates DesignTech2; salvage scenario-stress (collections+renewals), sign convention, decision-ready output. |
| [`careerAgentGeneratedCoreRoadmapPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreRoadmapPolish.ts) (`financialModeling` section) | 4 | **DELETE** | Generic restatements of revenue build, assumption clarity, balance check, model architecture — all duplicated above with depth. Different `DEFAULT_FLAW` string. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (`financialModeling` section) | 4 | **DELETE** | Front-door taster duplicates revenue-driver and assumption-clarity content already covered. `DEFAULT_FLAW` again. |

**Net effect:** ~56 FM questions across 7 files → ~4 hand-authored + ~30 fixed/merged in 1 canonical bank = ~34 questions of much higher quality.

## Open actions (priority order)

1. **Author 6–10 DCF / WACC / valuation questions** to close the partial gap in Chapter 5. The syllabus is explicit about DCF being a core chapter; the track currently leans on adjacent tracks (`series86`, `cfaLevelOne`) to carry that content, which is invisible to a learner.
2. **Author 3–5 historical-financials questions** for Chapter 2 (normalization, common-size, non-recurring item separation, three-year-spread mechanics) — currently the chapter is gestured at but not directly covered.
3. **Consolidate the Core1 + DesignTech + DesignTech2 + FinalTopOff financialModeling sections** into one file with per-distractor explanations and chapter names matching the syllabus's eight chapters.
4. **Realign chapter taxonomy** — pick one scheme (recommend the syllabus's "Chapter N: …" names). The base block's nautical names ("Modeling Dock") should be retired in favor of the syllabus labels.
5. **Optional region tag** — most modeling content is jurisdiction-neutral, but the few accounting-flavored questions (depreciation, working capital, lease classification) lean US GAAP. Add `region: 'US'` to those questions individually if the tagging schema supports it.

## Estimated effort

- Per-distractor rewrite + consolidation: ~6 hours (~30 questions × ~12 min)
- DCF / historicals authoring: ~4 hours (~12 questions)
- Chapter-name realignment + DELETE pass: ~30 min

**~1.5 working days at this depth.**

## Notes for next auditor

This track is one of the most heavily duplicated in the career tier — six files all touch the same fundamentals (revenue drivers, balance check, sensitivity). The duplication has been generated, not curated. After consolidation, the question bank should be ~60% smaller and significantly stronger. Note that some FM-adjacent content is correctly placed in `series86` (EV bridge, DCF terminal value) and `cfaLevelOne` (WACC). The decision to migrate vs duplicate that content into `financialModeling` is a product call, not a content-quality call.
