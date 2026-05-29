# Audit: worldHistoryCollections

**Syllabus**: [`src/data/syllabi/high/world_history_collections.md`](../../../src/data/syllabi/high/world_history_collections.md)
**Track id**: `col-oer-project-world-history` (high.ts line 1543); syllabus declares it also covers `col-world-history-project---origins-to-the-present`, `col-world-history-project---1750-to-the-present`, `col-world-history`.
**Tier**: high
**Region**: Global (US 11th-grade survey using OER Project resources)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Human Origins, Agriculture, Early States, to c. 600 BCE | yes | Neolithic Revolution, River Valley civilizations (in `worldHistoryOriginsExamBatch` + `apHistoryWorkoutGenerated` World rows). |
| 2. Classical Civilizations and Belief Systems, c. 600 BCE-600 CE | yes | Classical empires, universalizing religions, imperial administration. |
| 3. Post-Classical Networks, States, Religions, c. 600-1200 | yes | Silk Roads, Indian Ocean (monsoon), Islamic caliphates. |
| 4. Global Convergence and Empire, c. 1200-1450 | yes | Mongol Empire, Pax Mongolica, Black Death; no Mansa Musa/Mali by name. |
| 5. Maritime Worlds, Gunpowder Empires, Exchange, c. 1450-1750 | partial | Columbian Exchange, Atlantic Slavery, Maritime Empires — no specific Ottoman/Safavid/Mughal/Qing/Tokugawa. |
| 6. Revolutions, Industrialization, Imperialism, c. 1750-1900 | yes | Enlightenment, Atlantic Revolutions, Industrial Revolution, Imperialism. |
| 7. Global Conflict, Ideology, Decolonization, c. 1900-1991 | yes | WWI, Interwar, WWII, Appeasement, Cold War, Decolonization, UN. |
| 8. Globalization, Memory, Contemporary, 1991-Present | partial | Globalization (supply chains), no climate/migration/memory items. |

**May 2026 rubric finding: does NOT apply.** The `worldHistory*ExamBatch.ts` pair is content-bearing.

**Multi-track aggregation**: this syllabus aggregates four collection ids, but each routes separately in the question catalog. `col-oer-project-world-history` (in high.ts) is the primary; the World-History-Project-Origins and 1750-to-Present collections are wired in `highAdvanced.ts` lines 96-103 with `makeWorldHistory{Origins,1750}Quiz` + the ExamBatch banks.

**Chapter taxonomy mismatch.** Files use ad-hoc chapters ("Early States", "Belief Systems", "Trade Networks", "Atlantic Revolutions", etc) that overlap but don't match the syllabus's 8 explicit period chapters with date ranges. Re-chapter.

## Per-file recommendations

| File | World Hist Q's | Bucket | Reason |
|---|---|---|---|
| [`worldHistoryOriginsExamBatch.ts`](../../../src/data/questionCatalog/worldHistoryOriginsExamBatch.ts) | 10 | **KEEP** | Same KEEP as in apWorldHistory audit. Content-bearing, per-distractor whys. Re-chapter to syllabus's 8 periods. |
| [`worldHistoryModernExamBatch.ts`](../../../src/data/questionCatalog/worldHistoryModernExamBatch.ts) | 10 | **KEEP** | Same KEEP. Re-chapter. |
| `apHistoryWorkoutGenerated.ts` World rows (~20) | n/a (different track) | **MERGE → here** | See apUsHistory and apWorldHistory audits — these World rows are misfiled in the APUSH file. Lift to either the World ExamBatch family or to a dedicated `worldHistoryCollectionsWorkoutGenerated.ts`. Then this syllabus track gets richer coverage at no marginal authoring cost. |
| `openTriviaWorldHistoryAnchorImported.ts` (1577 lines) | ~150 | **FIX → TRIM → MERGE** | Same fixed-string DEFAULT_FLAW pattern. Trim to ~40 well-distributed period anchors with rewritten distractors. |
| `openTriviaWorldHistoryExtensionImported.ts` (277 lines) + `Foundations` (307) + `FinalTwo` (27) | ~50 | **MERGE → Anchor (rewritten)** | Treat as one corpus; consolidate after rewriting. |
| `openTriviaModernHistoryColdWarImported.ts` (287 lines) | ~30 | **FIX** | Cold War anchor facts — Chapter 7 coverage. Same flaw. |
| `openTriviaHistoryMicroImported.ts` (427 lines) | ~45 | **CHECK** | Mixed-era micro items. Same flaw likely. |
| `highGenerated` → `historyBlueprints()` fallback (~50 generated) | 50 | **DELETE for this track** | Same problem as `usHistory`: the 3 fallback blueprints are not world history. They produce nonsense for this track. |

**Net effect**: ~120 content items from ExamBatch + APUSH World fold-in + curated openTrivia subset = ~80 high-quality questions per the syllabus's 8 chapters.

## Open actions (priority order)

1. **Lift World rows out of `apHistoryWorkoutGenerated.ts`** (cluster-level action — see apUsHistory and apWorldHistory audits).
2. **Stop the `historyBlueprints` fallback** for this track; add `worldHistoryBlueprints()` if any templated fallback is needed.
3. **Trim and rewrite distractors** on `openTriviaWorldHistory*` cluster — consolidate to ~40 items.
4. **Author ~8 items** covering Chapter 5 specifics (Ottoman/Safavid/Mughal/Qing differentiation; Tokugawa; Mansa Musa) and Chapter 8 (climate, memory, migration corridors). Voice model: `worldHistoryModernExamBatch`.
5. **Audit the four `col-*world-history*` track id variants** for duplication — pick canonical id, redirect rest.
6. **Re-chapter** all surviving entries to syllabus's 8 periods.

## Estimated effort

- APUSH World rows lift (shared with apWorldHistory audit): ~2 hours.
- openTrivia trim + rewrite: ~5 hours.
- 8 closure items: ~2.5 hours.
- Track id dedupe: ~1 hour.
- Re-chapter: ~1 hour.

**~1.5 working days.** Most of the work is shared with the `apWorldHistory.md` audit.

## Notes for next auditor

This track is essentially the non-AP twin of `apWorldHistory` and shares ~80% of the underlying question banks. Consider whether the two tracks need separate question banks at all, or whether the "AP" version is a difficulty/depth filter on the same source corpus. The four-id aliasing in the syllabus header (`col-oer-project-world-history`, `col-world-history-project---origins-to-the-present`, `col-world-history-project---1750-to-the-present`, `col-world-history`) suggests prior catalog churn — worth resolving before user-facing release.
