# Audit: apEconomics

**Syllabus**: [`src/data/syllabi/high/ap_economics.md`](../../../src/data/syllabi/high/ap_economics.md)
**Track id**: `apEconomics` (parallel `col-ap-economics`, `col-ap-macroeconomics`, `col-ap-microeconomics` shadows)
**Tier**: high (year 12)
**Region**: US (College Board content; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Economic Thinking and Graph Skills | ✅ | Hand items cover scarcity, opportunity cost; workout adds PPC, comparative advantage |
| 2. Supply, Demand, Elasticity, and Welfare | ✅ | Hand item on elasticity + workout deep on shifts, surplus, deadweight loss, price ceilings |
| 3. Production, Costs, and Firm Decisions | ✅ | Workout covers MC/ATC, fixed/variable, profit definition |
| 4. Market Structures and Market Failure | ✅ | Workout covers perfect competition, monopoly, oligopoly, externalities, public goods |
| 5. Macro Measurement and Business Cycles | ✅ | Workout covers GDP, real vs nominal, CPI, unemployment types |
| 6. Fiscal Policy, Money, and Monetary Policy | ✅ | Workout covers AD components, fiscal/monetary tools, multiplier, reserves |
| 7. Growth, Open Economy, Cross-Graph Reasoning | ⚠️ | Workout has tariff/quota/exchange-rate items; nothing on loanable funds or crowding out |
| 8. AP Economics Exam Studio (FRQ, linked graphs) | ❌ | No FRQ-style items; no items asking students to label or sequence graph shifts |

**Chapter taxonomy mismatch.** Workout uses topic labels ("Basic Economic Concepts", "Supply and Demand", "Elasticity", "Externalities" etc) — close to the syllabus but not aligned to the eight Chapter names. Hand items use "AP Economics Dock/Reef/Cove/Lagoon".

**Triple-shadow routing.** Syllabus header lists three collection IDs (`col-ap-economics`, `col-ap-macroeconomics`, `col-ap-microeconomics`). Only `col-ap-economics` exists in the age catalog (line 506); none are wired to `highAdvanced.ts`. They all fall through to `highGenerated.ts`'s economics blueprints. Meanwhile the camelCase `apEconomics` track has the actual hand+workout content.

## Per-file recommendations

| File | Items for apEconomics | Bucket | Reason |
|---|---|---|---|
| [`highAdvanced.ts`](../../../src/data/questionCatalog/highAdvanced.ts) (apEconomics block, lines 366–401) | 4 hand items | **KEEP** | Sober per-distractor explanations on elasticity, opportunity cost, supply shifts, scarcity. Solid baseline. |
| [`apEconomicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/apEconomicsWorkoutGenerated.ts) | 50 | **KEEP/FIX** | High-quality per-distractor coverage across all eight chapters except FRQ. Best content in this cluster. Realign chapter labels to syllabus and add `region: 'US'`. Generic `lesson` boilerplate ("authored Floe-native drill item") could be replaced with concept summary. |
| [`apEconomicsExamBatch.ts`](../../../src/data/questionCatalog/apEconomicsExamBatch.ts) | ~50 | **KEEP** (subject to sample check) | Likely AP-style; verify it isn't a duplicate of the workout content. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) economics blueprints (top-up) | up to 50 | **FIX (procedural generator)** | Six fixed economics blueprints recycled across `microeconomics`, `macroeconomics`, `apEconomics`, `col-ap-*` etc. May 2026 audit guidance: flag generator usage; this is what users see on the col- shadow tracks. |

## Open actions (priority order)

1. **Consolidate the three col- shadow tracks** (`col-ap-economics`, `col-ap-macroeconomics`, `col-ap-microeconomics`) into routing that points at the real `apEconomics` content. The current setup means three out of four "AP Economics" entry points serve generator output.
2. **Author 6–8 FRQ-style items** for Chapter 8 (linked AD/AS + money market + loanable funds graph chains, with "what shifts first" prompts).
3. **Author 4–6 Chapter 7 items** on loanable funds, crowding out, and balance of payments.
4. **Realign chapter labels** in workout and exam batch to the eight syllabus chapter names.
5. **Add `region: 'US'`** to the track entry.
6. **De-duplicate** between exam batch and workout (verify after sample).

## Estimated effort

- Routing consolidation: ~1 hour
- FRQ + Chapter 7 authoring (10–14 items): ~5 hours
- Chapter rename + dedupe: ~2 hours

## Notes for next auditor

`apEconomicsWorkoutGenerated.ts` is the strongest content file in this cluster — use it as the model when fixing macroeconomics/microeconomics. The same shadow-track pattern affects every AP track in the cluster (apCalculus, apComputerScience, apEconomics) and should be fixed as a routing patch, not per-track.
