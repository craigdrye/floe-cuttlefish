# Audit: privateEquityRoadmap

**Syllabus**: [`src/data/syllabi/career/private_equity_roadmap.md`](../../../src/data/syllabi/career/private_equity_roadmap.md)
**Track id**: `privateEquityRoadmap`
**Tier**: career
**Status**: `playable` (correct — has questions wired up)
**Region**: US (assumed — QoE / sponsor / strategic-buyer / IC vocabulary; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. PE Model and Investment Criteria (sponsor, platform, hold, IRR, MOIC, entry/exit multiple) | ✅ partial | Mostly in "LBO Modeling" (IRR vs MOIC same MOIC different holds, entry multiple effect, exit EBITDA bridge $80M→$120M × 10x = $400M). No question explicitly defines platform vs add-on or hold-period strategy framing. |
| 2. Business Diligence (market, concentration, recurring revenue, margin quality) | ✅ | "Investment Thesis and Diligence" — QoE add-backs, customer concentration, vendor diligence, churn in disguise, key person risk, ERP surprise, regulatory license, founder rollover hesitation, cohort gross margin, supplier fragility, founder dependency, data room inconsistency, management depth. |
| 3. LBO Mechanics and Debt Capacity (sources/uses, leverage, cash sweep, covenants, sponsor equity) | ✅ | "LBO Modeling" — debt paydown, cash-free debt-free bridge, dividend recap, sponsor equity bridge ($25M gap), covenant cushion, rate sensitivity, management rollover. |
| 4. Value Creation and Operating Plan (margin, pricing, salesforce, procurement, add-ons) | ✅ | "Value Creation" — first 100 days, add-on logic, pricing lever, procurement savings, salesforce cleanup, churn-save team, KPI overload, working capital unlock, pricing leakage, integration bandwidth, sales comp redesign, KPI ownership. |
| 5. IC Memo, Deal Process, and Exit (LOI, QoE, legal, IC memo, exit route, strategic vs sponsor) | ✅ | "Investment Committee" — IC risk framing, exit path, deal captain summary, exit buyer map, base-case humility, debt capacity, add-on integration risk, red-team question, management incentive plan, exit route realism, diligence open item. |

**Chapter taxonomy mismatch.** Files use 4 chapters ("Investment Thesis and Diligence", "LBO Modeling", "Value Creation", "Investment Committee") — close to but not matching the syllabus 5 chapters. The syllabus splits Chapter 1 (PE Model) from Chapter 3 (LBO Mechanics); the files conflate them. **No `RoadmapPracticePolish` entries** for this track.

## Per-file recommendations

| File | PE Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapFinance.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinance.ts) | 16 | **FIX** | Best-in-class for PE concepts: QoE add-backs, customer concentration (42% renewal), debt paydown contribution to equity returns, IRR-vs-MOIC time effect, first-100-days, add-on logic, recession-resistant claim challenge, exit-multiple expansion challenge. Every wrong answer uses the file-wide `DEFAULT_FLAW` constant — **auto-FIX**. Canonical bank candidate. |
| [`careerAgentGeneratedRoadmapFinanceTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceTopOff.ts) | 16 | **MERGE → RoadmapFinance** | Adds novel scenarios (key person risk, ERP surprise, cash-free debt-free bridge, dividend recap lens, salesforce cleanup, KPI overload, customer call tension, sponsor equity bridge math, covenant cushion 0.1x, working capital unlock, integration bandwidth, founder rollover hesitation). Same `DEFAULT_FLAW`. Lift the new content. |
| [`careerAgentGeneratedRoadmapFinanceFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapFinanceFinalTopOff.ts) | 16 | **MERGE → RoadmapFinance (partial), DELETE rest** | Overlap with TopOff/base: founder-dependency ≈ TopOff key-person; integration-bandwidth ≈ TopOff integration; KPI ownership ≈ TopOff KPI overload; management-incentive-plan ≈ red-team-question framing. Salvageable: data-room inconsistency, exit-multiple haircut, cash-sweep mechanics, pricing leakage, cohort gross margin, supplier fragility, management-fee add-back, sales-comp redesign, exit-route realism (~8–9 questions). |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) | 0 | n/a | No entries for this track. |

**Net effect**: 48 PE questions across 3 generated files → ~32 questions in 1 canonical file with per-distractor explanations and syllabus-aligned chapters. PE is the best-covered track in the cluster — no real authoring gap, just deduplication and rewrite.

## Open actions (priority order)

1. **Auto-FIX `DEFAULT_FLAW` in the Finance triplet for PE section** — 48 questions sharing one generic flaw string.
2. **Author 2–3 Chapter 1 framing questions** — explicitly distinguishing platform vs add-on strategy, hold-period economics, and why a target is "PE-able" vs growth equity / strategic.
3. **Consolidate the triplet** into one file with the syllabus 5-chapter taxonomy (split LBO Modeling chapter from PE Model and Investment Criteria — they're conflated today). Dedupe the founder-dependency / key-person duplicate (TopOff q 4107364 ≈ FinalTopOff q 4107834).
4. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) (line 544). US QoE / TSA / sponsor-to-sponsor exit norms.

## Estimated effort

- Chapter 1 framing authoring: ~1 hour (3 questions × 20 min)
- Consolidation + per-distractor rewrite: ~7 hours (48 questions → ~32)
- Dedupe + chapter rename: ~30 min

**~1 working day** total — less authoring needed than VC/IB because PE coverage is already complete.

## Notes for next auditor

PE is the highest-quality body of generated finance content in this cluster. The scenarios are realistic (customer concentration with 6-month renewal, EBITDA add-backs for owner expenses and one-time consulting, $25M sources-and-uses gap filled by sponsor equity, 0.1x covenant cushion in downside) and the math is correct. If any track justifies keeping the agent-generated content as the spine and only doing the `DEFAULT_FLAW` rewrite, it's this one.

Two cross-cluster deduplications worth noting from this audit:
- Founder-dependency (FinalTopOff q 4107834) ≈ key-person risk (TopOff q 4107364) — identical concept, different framing
- ERP/systems diligence (TopOff q 4107365) is a unique angle not covered elsewhere — keep prominently

The auto-FIX of `DEFAULT_FLAW` is especially valuable here because the correct answers carry real PE judgement, but the distractors waste the question with a generic flaw line.
