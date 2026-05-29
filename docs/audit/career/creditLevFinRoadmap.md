# Audit: creditLevFinRoadmap

**Syllabus**: [`src/data/syllabi/career/credit_levfin_roadmap.md`](../../../src/data/syllabi/career/credit_levfin_roadmap.md)
**Track id**: `creditLevFinRoadmap`
**Tier**: career
**Status**: `playable` (correct — has questions wired up)
**Region**: US (assumed — high-yield indenture, Chapter 11 / DIP, MFN / make-whole language; not currently tagged)

**Track id inconsistency.** The age catalog at [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 566 uses `creditLevFinRoadmap` (capital F). The syllabus front-matter at line 2 of the syllabus uses `creditLevfinRoadmap` (lowercase f). All question files use `creditLevFinRoadmap`. The syllabus ID should be corrected to match — current mismatch could break automated tooling that reads either source.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Borrower and Capital Structure Basics (senior, secured, revolver, TL, bond, priority, EV) | ✅ partial | Implicit in "Credit Analysis" questions but no dedicated cap-structure-mapping question. Collateral package question covers liens at a high level. |
| 2. Credit Metrics and Cash Flow (EBITDA, leverage, coverage, FCF, working capital, capex) | ✅ | "Credit Analysis" — leverage math ($600M / $150M = 4.0x), interest coverage ($120M / $30M = 4.0x), cyclical borrower, FCF focus ($200M EBITDA / $90M capex / $55M interest), pro forma leverage (4.0x), rating agency lens, lease-adjusted leverage, customer prepayment risk, sponsor distribution, cash flow conversion, cyclicality stress, customer concentration contract, secular decline. |
| 3. LevFin Markets and Debt Capacity (sponsor deal, ratings, spread, OID, flex, syndication) | ✅ | "Leveraged Finance Process" — use of proceeds, sources & uses ($1,000M + $40M fees − $650M debt = $390M equity), flex language, OID math (98 OID = $98 cash per $100 face), ratings meeting prep, market flex call, commitment paper review, investor Q&A prep, syndication feedback, rating-agency adjustment, bridge loan risk, investor presentation tone. |
| 4. Covenants, Documentation, and Protection (maintenance, incurrence, RP, baskets, add-backs) | ✅ | "Loan Terms and Covenants" — maintenance covenant, restricted payment basket, incurrence test, collateral package, EBITDA add-back cap (25%), asset sale sweep, portability, MFN, covenant headroom (4.8x vs 5.0x), incremental debt basket, builder basket, EBITDA grower. |
| 5. Distress Signals and Recovery Thinking (downgrade, liquidity, maturity, exchange, recovery) | ✅ | "Restructuring and Recovery" — recovery mindset for unsecured, liquidity runway ($45M / $9M burn = 5 months), priming risk, exchange offer, maturity wall, waterfall read, DIP financing, make-whole dispute, liquidity leak (weekly forecast), collateral priority, out-of-court vs Ch. 11, plan feasibility. |

**Chapter taxonomy mismatch.** Files use 4 chapters ("Credit Analysis", "Loan Terms and Covenants", "Leveraged Finance Process", "Restructuring and Recovery") — close to but not matching the syllabus 5 chapters (which split Borrower & Capital Structure Basics from Credit Metrics & Cash Flow). **No `RoadmapPracticePolish` entries** for this track.

## Per-file recommendations

| File | Credit Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) | 16 | **FIX** | Strongest math content in the cluster: leverage 4.0x, coverage 4.0x, sources & uses $390M equity, OID 98, liquidity runway 5 months. Also high-quality concept questions on maintenance vs incurrence, restricted payments, asset sale sweeps, priming risk, exchange offers. Every wrong answer uses the file-wide `DEFAULT_FLAW` constant — **auto-FIX**. Canonical bank candidate. |
| [`careerAgentGeneratedRoadmapFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceTopOff.ts) | 16 | **MERGE → RoadmapFinance** | Adds novel doc-and-structure scenarios (lease-adjusted leverage, customer prepayment risk, EBITDA add-back cap, asset sale sweep, market flex call, maturity wall, waterfall read, sponsor support question, portability feature, commitment paper review, DIP financing, secular decline, MFN, investor presentation synergy tone, make-whole dispute). Same `DEFAULT_FLAW`. Lift the new content. |
| [`careerAgentGeneratedRoadmapFinanceFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceFinalTopOff.ts) | 16 | **MERGE → RoadmapFinance (partial), DELETE rest** | Notable overlap with TopOff: cash flow conversion (q 4107866) ≈ FCF focus (base q 4105116); cyclicality stress (q 4107867) ≈ cyclical borrower (base q 4103050); covenant headroom (q 4107868) ≈ maintenance covenant scenario. Salvageable: incremental debt basket, investor Q&A prep, syndication feedback, liquidity leak (weekly forecast cadence), collateral priority dispute, sponsor distribution, builder basket, rating-agency adjustment, out-of-court vs Ch. 11, customer concentration contract, EBITDA grower add-back timing, bridge loan risk, plan feasibility (~10 questions). |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) | 0 | n/a | No entries for this track. |

**Net effect**: 48 credit questions across 3 generated files → ~32 questions in 1 canonical file with per-distractor explanations, syllabus-aligned chapters, plus 2–3 new questions for Chapter 1 cap-structure mapping.

## Open actions (priority order)

1. **Fix track id mismatch** between syllabus (`creditLevfinRoadmap`) and age catalog / question files (`creditLevFinRoadmap`). The age catalog/code id wins; update the syllabus front-matter.
2. **Auto-FIX `DEFAULT_FLAW` in the Finance triplet for credit section** — 48 questions sharing one generic flaw string.
3. **Author 2–3 Chapter 1 capital-structure-mapping questions** — concretely walk a learner through a real cap stack (revolver + 1L TL + 2L TL + senior secured notes + unsecured notes + sub notes), priority order in distress, what each tranche typically protects.
4. **Consolidate the triplet** into one file with the syllabus 5-chapter taxonomy. Dedupe the 3 clear FCF / cyclicality / covenant duplicates between base and FinalTopOff.
5. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (line 566). DIP / Ch. 11 / make-whole / MFN are US-norm-flavoured (European leveraged loan markets have different conventions worth tagging if expanded later).

## Estimated effort

- Track id fix: ~5 min
- Chapter 1 cap-structure authoring: ~1 hour (3 questions × 20 min)
- Consolidation + per-distractor rewrite: ~7 hours (48 questions → ~32)
- Dedupe + chapter rename: ~30 min

**~1 working day** total.

## Notes for next auditor

Credit / LevFin is the most quantitatively rigorous track in the cluster. The math is correct, the covenant vocabulary is accurate (incurrence vs maintenance, MFN, builder basket, EBITDA grower), and the restructuring scenarios reflect real distressed-credit decision points. Highest content-density per question of any track audited.

The track id mismatch (`creditLevfinRoadmap` vs `creditLevFinRoadmap`) is a small but real bug — caught by case-sensitive lookups. Worth fixing before any tooling iterates across syllabi and question banks.

The base + TopOff + FinalTopOff duplication pattern here is the **least severe** — most FinalTopOff questions add real new content rather than recycling. Suggests credit content may be hardest for the agent to generate redundantly because the vocabulary domain (covenants, priority, recovery) has a wide surface area.
