# Audit: macroeconomics

**Syllabus**: [`src/data/syllabi/high/macroeconomics.md`](../../../src/data/syllabi/high/macroeconomics.md)
**Track id**: `macroeconomics` (declared in both HS and university age catalogs)
**Tier**: high (year 11)
**Region**: US-leaning (Fed, central bank vocabulary)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Economic Thinking and Measurement (scarcity, PPC, GDP) | ✅ | Covered in the university `macroeconomics` bank that this track shadows |
| 2. Inflation, Unemployment, Business Cycles | ✅ | Frictional/structural/cyclical unemployment + CPI items present in `universityAcademic.ts` |
| 3. Aggregate Demand and Aggregate Supply | ✅ | AD components, supply shock language in `macroeconomicsWorkoutGenerated.ts` |
| 4. Fiscal Policy and Multipliers | ✅ | Workout covers expansionary/contractionary fiscal policy |
| 5. Money, Banking, Financial Markets | ✅ | Reserves, money creation, money multiplier covered |
| 6. Monetary Policy | ✅ | Open market ops, expansionary/contractionary policy |
| 7. Long-Run Growth and International Economics | ⚠️ | Tariff/quota/exchange-rate basics; loanable funds and growth drivers thin |
| 8. Macro Policy Studio (graphing, FRQ) | ❌ | No graph-labeling or FRQ-style sequencing items |

**Routing mismatch — critical.** The HS age catalog (line 1367) declares `macroeconomics` as a high-school track. But `questionCatalogKeyForTrack('macroeconomics', 'high')` in `src/data/questionCatalog/index.ts` does NOT include this id in `highMathTrackIds`/`highAdvancedTrackIds`/`highFunTrackIds`, so it falls through to `high-generated`. The hand-authored macroeconomics bank lives in `universityAcademic.ts:112` under the **university** routing. A HS student opening "Macroeconomics" gets the procedural blueprint generator, while a university student gets the real bank. Same id, two outcomes, wrong one for HS.

**Chapter taxonomy mismatch.** University bank uses chapter labels like "Macroeconomics Cove", "Economic Indicators" — neither matches the syllabus's eight chapter names.

## Per-file recommendations

| File | Items for HS macroeconomics | Bucket | Reason |
|---|---|---|---|
| [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) (macroeconomics block, lines 112–147) | ~35 hand items | **MERGE → HS routing** | High-quality hand items currently invisible to HS users. Either add `'macroeconomics'` to `highAdvancedTrackIds` in `index.ts` or build a dedicated `highMacroEconBuilder`. |
| [`macroeconomicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/macroeconomicsWorkoutGenerated.ts) | ~50 | **KEEP/FIX** | Per-distractor quality good. Realign chapter labels to syllabus's eight chapters. Same generic boilerplate `lesson` line as apEconomics workout. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) economics blueprints (top-up) | 50 templated | **FIX (procedural generator)** | What HS users actually see right now. Six recycled blueprints with `variant` chapter labels like "Macro Indicators 2". Replace with the merged hand bank above. |

## Open actions (priority order)

1. **Fix the routing.** Add `'macroeconomics'` to `highAdvancedTrackIds` in `src/data/questionCatalog/index.ts`, then wire a HS bundle entry that pulls from the university bank + workout (or build a HS-specific builder). This is a one-line routing change that unblocks ~85 quality items.
2. **Author 6–8 FRQ-style items** for Chapter 8 covering AD/AS + money-market linked-graph sequences.
3. **Add 4–6 items** for Chapter 7 (loanable funds, crowding out, productivity drivers, balance of payments).
4. **Realign chapter labels** in the workout to syllabus chapters.
5. **Tag `region: 'US'`** explicitly (Fed-centric vocabulary).

## Estimated effort

- Routing fix: ~30 minutes
- 10–14 authored items: ~5 hours
- Chapter rename: ~1 hour

## Notes for next auditor

This is the cluster's clearest **routing-bug** finding: the syllabus, the hand bank, the workout file, the age-catalog track, and the user-facing label all align — but the router silently sends HS users to the templated generator. `microeconomics` has the identical bug (see that audit). Fix both in one PR.
