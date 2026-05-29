# Audit: microeconomics

**Syllabus**: [`src/data/syllabi/high/microeconomics.md`](../../../src/data/syllabi/high/microeconomics.md)
**Track id**: `microeconomics` (declared in both HS and university age catalogs)
**Tier**: high (year 11)
**Region**: US-leaning (AP Micro vocabulary, federal policy framing)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Economic Choice and Market Basics (PPC, comparative advantage) | ✅ | Covered in the university `microeconomics` bank that this track shadows |
| 2. Supply, Demand, and Elasticity | ✅ | Workout file covers shifts, equilibrium, elastic/inelastic, unit elastic |
| 3. Welfare and Government Intervention | ✅ | Workout covers consumer surplus, deadweight loss, price ceilings/floors |
| 4. Consumer Choice and Production Costs | ✅ | Utility, diminishing marginal utility, fixed cost, marginal cost present |
| 5. Perfect Competition | ✅ | Workout covers price taker, profit max, shutdown rule |
| 6. Imperfect Competition (monopoly, oligopoly, game theory) | ✅ | Workout covers monopoly output, oligopoly strategic interdependence, dominant strategy |
| 7. Factor Markets, Externalities, Public Goods | ✅ | Negative/positive externality, public good, free riding covered |
| 8. Microeconomics Studio (graphing precision, FRQ) | ❌ | No FRQ-style or graph-labeling items |

**Routing mismatch — critical, same as macroeconomics.** The HS age catalog (line 1312) declares `microeconomics` as a HS track. `questionCatalogKeyForTrack('microeconomics', 'high')` does NOT include this id in any HS bundle set, so it falls through to `high-generated`. The hand-authored microeconomics bank lives in `universityAcademic.ts:76` under university routing. HS users get templated content; university users get the real bank.

**Chapter taxonomy mismatch.** Workout uses standard topic labels ("Supply and Demand", "Elasticity", "Market Structures", "Externalities") — close to syllabus chapter content but not aligned to the eight named chapters.

## Per-file recommendations

| File | Items for HS microeconomics | Bucket | Reason |
|---|---|---|---|
| [`universityAcademic.ts`](../../../src/data/questionCatalog/universityAcademic.ts) (microeconomics block, lines 76–111) | ~35 hand items | **MERGE → HS routing** | High-quality hand items currently invisible to HS users. Add `'microeconomics'` to `highAdvancedTrackIds` in `index.ts`. |
| [`microeconomicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/microeconomicsWorkoutGenerated.ts) | ~50 | **KEEP/FIX** | Per-distractor quality good, mirrors apEconomics workout pattern. Realign chapter labels to the eight syllabus chapters. Generic boilerplate `lesson` line. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) economics blueprints (top-up) | 50 templated | **FIX (procedural generator)** | What HS users actually see right now. Same six recycled economics blueprints shared with macroeconomics/apEconomics. Should be displaced by the merged hand bank. |
| [`apEconomicsWorkoutGenerated.ts`](../../../src/data/questionCatalog/apEconomicsWorkoutGenerated.ts) (micro half) | ~25 micro-relevant items | **MERGE → microeconomics** | The AP Economics workout contains substantial micro-side content (consumer choice, firm decisions, market structures, externalities, public goods) that should also feed this track. |

## Open actions (priority order)

1. **Fix the routing.** Add `'microeconomics'` to `highAdvancedTrackIds`. Same one-line change as macroeconomics.
2. **Author 6–8 FRQ-style items** for Chapter 8 (graph labeling, marginal analysis sequences, welfare reasoning with deadweight-loss triangles).
3. **Author 2–4 items** for Chapter 7 monopsony and factor-market hiring rule (MRP = wage).
4. **Realign chapter labels** in the workout to the eight syllabus chapter names.
5. **Tag `region: 'US'`** on the track entry.
6. **Cross-feed** the micro-flavored half of `apEconomicsWorkoutGenerated.ts` into this track.

## Estimated effort

- Routing fix: ~30 minutes
- FRQ + factor-market authoring: ~4 hours
- Chapter rename + cross-feed: ~2 hours

## Notes for next auditor

Bug-for-bug identical to `macroeconomics`. Fix together. Both `microeconomics` and `macroeconomics` HS tracks are effectively non-functional today (template-only) despite having well-stocked hand banks ten lines apart in `universityAcademic.ts`. This is the cluster's single highest-impact one-line fix.
