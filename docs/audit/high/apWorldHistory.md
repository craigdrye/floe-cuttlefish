# Audit: apWorldHistory

**Syllabus**: [`src/data/syllabi/high/ap_world_history.md`](../../../src/data/syllabi/high/ap_world_history.md)
**Track id**: `col-ap-world-history` (no dedicated camelCase track; folded into `apHistory` for question routing)
**Tier**: high
**Region**: Global (College Board exam; not currently tagged as US-developed framework)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Historical Thinking and Global Frames | yes (rubric) | Covered via `apHistoryExamBatch` and `apHistoryWorkoutGenerated` skills rows. |
| 2. The Global Tapestry, c. 1200-1450 | partial | River Valleys + Classical Empires + Islamic Caliphates in WorkoutGenerated; no Song China, no Dar al-Islam by name. |
| 3. Networks of Exchange, c. 1200-1450 | yes | Silk Roads, Indian Ocean, Mongol Empire (with monsoon-wind item in `worldHistoryOriginsExamBatch`). |
| 4. Land-Based Empires and Maritime Exchange, c. 1450-1750 | partial | Columbian Exchange, Maritime Empires, Atlantic Slavery — no Ottoman/Safavid/Mughal/Qing distinctions. |
| 5. Revolutions and Industrialization, c. 1750-1900 | yes | Atlantic Revolutions, Industrial Revolution, Imperialism (good motive list). |
| 6. Imperialism and Global Conflict, c. 1750-1945 | partial | WWI long-term causes; interwar fascism; WWII appeasement — no resistance, no migration. |
| 7. Cold War, Decolonization, Globalization, c. 1900-Present | yes | Cold War proxies, decolonization, globalization in modern batch. |
| 8. AP World Exam Studio | yes (rubric) | All AP skills covered. |

**May 2026 rubric finding: partially applies.** The dedicated World History files (`worldHistoryOriginsExamBatch`, `worldHistoryModernExamBatch`) are **content-bearing**, not rubric drills — that's a win. The rubric flaw enters via the shared `apHistoryExamBatch.ts` that also feeds the World History track via the routing layer.

**Chapter taxonomy mismatch.** Files use ad-hoc chapters ("Atlantic Revolutions", "Industrialization", "Cold War") versus the syllabus's nine units with date ranges. Also commingled with US History under one `apHistory` track.

## Per-file recommendations

| File | AP World Q's | Bucket | Reason |
|---|---|---|---|
| [`worldHistoryOriginsExamBatch.ts`](../../../src/data/questionCatalog/worldHistoryOriginsExamBatch.ts) | 10 | **KEEP** | Per-distractor whys are specific (Polar ice didn't drive Indian Ocean sailing; steamships came later). Content-bearing prompts about river valleys, Silk Roads, Black Death, Indian Ocean monsoons. Closely matches syllabus Chapters 2-4. Re-chapter to "Chapter 2: Global Tapestry" etc. |
| [`worldHistoryModernExamBatch.ts`](../../../src/data/questionCatalog/worldHistoryModernExamBatch.ts) | 10 | **KEEP** | Same quality — Atlantic Revolutions, factory system, direct rule, alliance systems, fascism, appeasement, containment, UN. Covers Chapters 5-7. Re-chapter to syllabus spine. |
| [`apHistoryWorkoutGenerated.ts`](../../../src/data/questionCatalog/apHistoryWorkoutGenerated.ts) World History rows | ~20 | **MERGE → worldHistoryModernExamBatch / Origins** | These rows are tagged "World History" but live in the APUSH file. Lift Neolithic Revolution, River Valley, Classical Empires, Silk Roads, Indian Ocean, Caliphates, Mongols, Columbian Exchange, Atlantic Slavery, Enlightenment, Atlantic Revolutions, Industrial Revolution, Imperialism, WWI, Interwar, WWII, Decolonization, Cold War World, Globalization into the appropriate World batch. Dedupe with existing World entries. |
| `apHistoryExamBatch.ts` (when wired to World) | 10 | **DELETE** | 100% rubric; same DELETE as in `apUsHistory.md` audit. |
| `openTriviaWorldHistoryAnchorImported.ts` (1577 lines, 157 stripped distractors) | ~150 | **FIX or DELETE** | Hugely overscoped — 150+ named-fact recall (Anschluss, Rommel, etc). Every distractor uses fixed string "This answer belongs to a different war, empire, event, or era." Auto-FIX target. Trim to ~50 anchor facts with per-distractor whys, or DELETE. |
| `openTriviaWorldHistoryExtensionImported.ts` + `…Foundations` + `…FinalTwo` | ~50 | **MERGE → Anchor (curated subset)** | Same fixed-string flaw. Treat as one corpus, keep ~30 items, rewrite distractors. |
| `openTriviaModernHistoryColdWarImported.ts` + `openTriviaHistoryWwiiColdWarImported.ts` | ~50 | **FIX** | Cold War period coverage for Chapter 7. Same stripped-distractor flaw — rewrite or trim. |

**Net effect**: ~250 mixed-quality questions → ~60 high-quality content-bearing + ~10 stimulus-source MCQs.

## Open actions (priority order)

1. **Disambiguate the routing.** AP World History deserves its own track id (`apWorldHistory`) in `high.ts`, not co-routing through `apHistory`. The syllabus is explicit; the catalog has `col-ap-world-history` but the question catalog merges with APUSH.
2. **Move World rows from `apHistoryWorkoutGenerated.ts`** to the dedicated World files.
3. **Author 10 stimulus DBQ-style MCQs**: short primary source from a non-Western source (Ibn Battuta, Mughal chronicle, Mao essay). Model: `worldHistoryOriginsExamBatch.ts` style + brief excerpt.
4. **Trim the openTriviaWorld* family** to ~30 anchor facts with per-distractor whys; DELETE the rest.
5. **Re-chapter** surviving entries to the 8-chapter syllabus spine with date ranges.

## Estimated effort

- Routing / disambiguation: ~1 hour.
- Stimulus MCQ authoring: ~4 hours.
- openTrivia trim + rewrite: ~5 hours (or DELETE for ~1 hour).
- Re-chapter + dedupe: ~2 hours.

**~1.5 working days.**

## Notes for next auditor

The `worldHistory*ExamBatch.ts` pair is among the cleanest content in the high humanities cluster — KEEP and use as a model for `apEuropeanHistory` and `usHistory` rewrites. The shared APUSH/AP World routing through `apHistory` is the structural flaw to unwind first.
