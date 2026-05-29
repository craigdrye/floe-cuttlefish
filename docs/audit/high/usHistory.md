# Audit: usHistory

**Syllabus**: [`src/data/syllabi/high/us_history.md`](../../../src/data/syllabi/high/us_history.md)
**Track id**: `usHistory` (high.ts line 572); catalog also has `us_history` (line 73 — OpenStax wiring) — these are duplicates.
**Tier**: high
**Region**: US (explicit — US 10th-grade survey)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Indigenous America, Encounter, Colonization, to 1754 | partial | STAAR "Distance and self-government", "Tobacco settlement" (Chesapeake); no Indigenous societies, no Spanish/French/Dutch colonies, no Columbian Exchange specific. |
| 2. Revolution, Founding, Early Republic, 1754-1824 | partial | "Intolerable Acts" + "Democratic Party formation" (Jackson) in STAAR set; nothing on Constitution drafting, Bill of Rights, Adams-Jefferson rivalry. |
| 3. Expansion, Democracy, Reform, Sectionalism, 1820-1860 | minimal | "Factory system effect" (one item). No Indian Removal, abolition, women's rights, market revolution depth, Mexican-American War. |
| 4. Civil War and Reconstruction, 1860-1877 | none | No dedicated items — gap. (Possible indirect coverage via `openTriviaUsHistory*` recall trivia.) |
| 5. Industrial America, Immigration, Reform, 1877-1920 | none | Gap. |
| 6. Modernity, Crisis, Global War, 1920-1945 | none | Gap. |
| 7. Cold War America, Rights Movements, 1945-1980 | none | Gap. (Indirect via `openTriviaHistoryWwiiColdWar`.) |
| 8. Contemporary US, 1980-Present | none | Gap. |

**Critical finding**: dedicated bank for this track is the 5-question `schoolAssessmentUsHistoryQuestions` (STAAR-sourced), routed via `highGenerated`'s `schoolAssessmentReadingSocialQuestionsByTrack`. The remaining ~45 questions per track come from `historyBlueprints()` fallback which only has 3 templated items (press freedom, veto override, push-pull migration) — none of which fit a US history survey course meaningfully.

**May 2026 rubric finding: does NOT apply directly** — this track has too little content to be rubric-only, but the fallback `historyBlueprints` produces mostly civics/APHG generic content, not history content.

**Chapter taxonomy mismatch.** STAAR items use historically-period chapters (Colonial America, American Revolution, Early Republic, Industrialization, Colonial Regions). Syllabus uses 8 explicit periods with date ranges. Re-chapter STAAR items + new authoring to syllabus spine.

**Duplicate track**: `us_history` (OpenStax-wired) AND `usHistory` (dedicated) both `playable: true` in `high.ts`. Likely the same user-facing course; merge.

## Per-file recommendations

| File | usHistory Q's | Bucket | Reason |
|---|---|---|---|
| [`schoolAssessmentReadingSocialImported.ts` → `schoolAssessmentUsHistoryQuestions`](../../../src/data/questionCatalog/schoolAssessmentReadingSocialImported.ts) (lines 165-241) | 5 | **KEEP** | STAAR-sourced, hand-curated, per-distractor whys, source citations. Gold standard for the format. Re-chapter to syllabus periods. |
| `highGenerated` → `historyBlueprints()` fallback (~50 generated) | 50 | **DELETE for this track** | Generic press-freedom / veto-override / push-pull migration templated 17 times each is not a US history survey. Replace with usHistory-specific blueprints or skip the fallback. |
| `openTriviaUsHistoryAnchorImported.ts` | ~120 | **CHECK routing** | Currently routes to `apHistory`, not `usHistory`. Could be cross-routed to fill Chapters 4-8 of the survey, but the fixed-string distractor flaw needs fixing first (auto-FIX: DEFAULT_FLAW pattern). |
| `openTriviaUsHistoryExtensionImported.ts` | ~50 | **CHECK routing** | Same — currently AP-only. Survey track could borrow content if distractors are rewritten. |
| `openTriviaHistoryWwiiColdWarImported.ts` | ~30 | **CHECK routing** | Same — Cold War + WWII content could fill Chapters 6-7. |
| `apHistoryWorkoutGenerated.ts` US rows (~26 items) | n/a (different track) | **CONSIDER CROSS-ROUTING** | Sober US content (mercantilism, Market Revolution, Sectionalism, Reconstruction, Gilded Age, Progressivism, New Deal, Cold War, Civil Rights). These would fill Chapters 3-7 of the usHistory survey at appropriate depth. The AP framing is acceptable for a 10th-grade survey too. |

**Net effect**: 5 isolated STAAR items + 50 wrong-fallback items → 5 STAAR + ~25 cross-routed APUSH WorkoutGenerated rows + ~15 newly-authored items per Chapter 4-8 gap = ~45 syllabus-aligned questions.

## Open actions (priority order)

1. **DEDUPE TRACK** — pick `usHistory` or `us_history` (or rename one to be a sub-collection like "OpenStax US History"). Two `playable` tracks for the same course is a UX problem.
2. **Stop the `historyBlueprints` fallback** for this track or add `usHistoryBlueprints()` with 8 syllabus-aligned templates.
3. **Cross-route the US-only rows** from `apHistoryWorkoutGenerated.ts` (currently exclusively AP) to also feed `usHistory`. Splits APUSH from US-survey cleanly.
4. **Author 15 items** covering syllabus Chapters 4 (Civil War/Reconstruction), 5 (Gilded Age/Progressive), 6 (1920s-WWII home front, New Deal lived experience), 7 (Civil Rights local/grassroots), 8 (post-1980). Voice model: STAAR-style with source citation.
5. **Verify region tagging**: `usHistory` is explicitly US-only by syllabus framing. Tag and exclude from non-US default catalogs.
6. **Rewrite distractors** on `openTriviaUsHistory*` files if cross-routed (auto-FIX target).

## Estimated effort

- Track dedupe decision: ~30 min.
- Blueprint replacement: ~2 hours.
- Cross-routing APUSH US rows: ~1 hour.
- 15 closure items: ~5 hours.
- Region tag: ~15 min.

**~1 working day if cross-routing is acceptable; ~2 days for fully bespoke 10th-grade voice.**

## Notes for next auditor

This track illustrates a wider pattern: many `playable` non-AP/non-college tracks fall through to `highGenerated`'s blueprint fallback, which only has 3 history templates. The fallback was clearly tuned for civics-adjacent tracks. Audit `worldHistory_collections.md` and `middleSchoolBigHistory.md` for the same flaw — they likely share the gap.
