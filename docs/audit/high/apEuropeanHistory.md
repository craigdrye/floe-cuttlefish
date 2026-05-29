# Audit: apEuropeanHistory

**Syllabus**: [`src/data/syllabi/high/ap_european_history.md`](../../../src/data/syllabi/high/ap_european_history.md)
**Track id**: `apEuropeanHistory` (high.ts line 1675)
**Tier**: high
**Region**: Europe-focused; College Board US framework. Currently untagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Historical Thinking and Early Modern Europe | none | No Euro-specific content for Renaissance, exploration, printing. |
| 2. Reformation, Religious Conflict, State Power | none | Westphalia, Thirty Years' War — absent. |
| 3. Absolutism, Constitutionalism, Scientific Revolution | none | Louis XIV, Glorious Revolution, scientific method — absent. |
| 4. Enlightenment, Revolution, Napoleon | partial | "Enlightenment" + "Atlantic Revolutions" rows in `apHistoryWorkoutGenerated` and `worldHistoryModernExamBatch`, but they are global-scoped, not Europe-specific. |
| 5. Industrialization, Ideologies, Social Change | partial | "Industrial Revolution" row in WorkoutGenerated — global, not British/continental specifically. |
| 6. Nationalism, Imperialism, Modern Culture | partial | "Imperialism" row covers motives; no unification, no Realpolitik, no Freud/Einstein. |
| 7. Global Conflict, Cold War, Contemporary Europe | partial | WWI, fascism, appeasement, Cold War, decolonization — covered globally, not from European perspective. |
| 8. AP European History Exam Studio | partial | Generic AP rubric (sourcing, CCOT) covers the meta-skills. |

**Critical finding: no dedicated AP European History question bank exists.** The track is `playable: true` in `high.ts` but routes through `highGenerated` (the catch-all `historyBlueprints` produces 3 generic items per track: press freedom, veto override, push-pull migration — none Euro-specific). All Euro-flavoured questions are accidental imports from World History.

**May 2026 rubric finding: applies indirectly.** Since the track has no dedicated content, learners fall back to the global rubric-only `apHistoryExamBatch` style of questions for the AP skills coverage.

**Chapter taxonomy mismatch.** N/A — nothing exists to mismatch yet.

## Per-file recommendations

| File | AP Euro Q's | Bucket | Reason |
|---|---|---|---|
| (none — no dedicated `apEuropeanHistory*.ts` file) | 0 | **AUTHOR NEW** | Track is wired `playable` with zero dedicated content. Major coverage gap. |
| `apHistoryWorkoutGenerated.ts` World rows (Enlightenment, Atlantic Revolutions, Industrial Revolution, Imperialism, WWI, Interwar, WWII, Decolonization) | ~10 | **MERGE → new apEuropeanHistory bank (Euro-specific framing)** | Salvageable: lift these and re-frame for Europe (e.g., "Why did industrialization begin in Britain rather than spread evenly?" instead of "What is industrialization?"). |
| `worldHistoryModernExamBatch.ts` | 10 | **REUSE (subset)** | Atlantic Revolutions, factory system, alliance systems, fascism, appeasement, containment — all directly relevant to Chapters 4-7. Reference via secondary routing or copy 8 items into a Euro bank with stronger European framing. |
| `openTriviaHistoryWwiiColdWarImported.ts` / `openTriviaModernHistoryColdWarImported.ts` | ~50 | **CHERRY-PICK** | European WWII/Cold War named facts (Stalingrad, Berlin Wall, Marshall Plan). Same stripped-distractor flaw — rewrite or DELETE the rows imported. |
| `highGenerated` → `historyBlueprints()` fallback | 3 | **FIX** | The 3 generic prompts (press freedom = US constitutional; veto override = US Congress; push-pull migration = APHG) are not AP Euro. The blueprint family-routing for AP Euro currently produces nonsense for this track. Add a `europeanHistoryBlueprints()` or skip the fallback for this track. |

**Net effect**: 0 → ~60 hand-authored AP-Euro-specific questions following the syllabus's 8 chapters.

## Open actions (priority order)

1. **Author a dedicated `apEuropeanHistoryWorkoutGenerated.ts`** of ~50 items. Voice template: [`worldHistoryModernExamBatch.ts`](../../../src/data/questionCatalog/worldHistoryModernExamBatch.ts). Cover Reformation, Westphalia, absolutism, Scientific Revolution, Enlightenment, French Revolution & Napoleon, unifications, Realpolitik, modernism, fascism, Holocaust, EU.
2. **Author 8-10 stimulus DBQ MCQs** with short Euro primary sources (Luther's 95 Theses excerpt, Hobbes/Locke, Robespierre, Marx, Versailles Treaty article, Churchill iron-curtain).
3. **Add the `apEuropeanHistory` track to `highAdvanced.ts`** wiring (currently falls through to `highGenerated`'s generic historyBlueprints).
4. **Add `europeanHistoryBlueprints()`** or carve out a fallback that fits the syllabus's eras, not US/APHG.
5. **Either flip `status: 'soon'`** until content lands, or front-load authoring before any beta touches this track.
6. **Region tag**: not US — Europe-focused content with US College Board exam framing. Add a metadata note.

## Estimated effort

- New question bank authoring: ~12 hours (50 items × ~15 min, hand-crafted per-distractor whys).
- Stimulus DBQ MCQs: ~3 hours (10 items × ~18 min).
- Wiring + blueprint fallback: ~1 hour.

**~2 working days from scratch.**

## Notes for next auditor

This is the worst coverage gap in the cluster — a `playable` AP track with no dedicated questions and only accidental world-history coverage. Either invest in authoring or flip to `soon` immediately. The fact that `historyBlueprints()` generates US-centric civic prompts (press freedom, veto override) for this AP Euro track is also a category-routing bug — apEuropeanHistory should not get APUSH blueprint fallbacks.
