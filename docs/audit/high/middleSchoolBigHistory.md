# Audit: middleSchoolBigHistory

**Syllabus**: [`src/data/syllabi/high/middle_school_big_history.md`](../../../src/data/syllabi/high/middle_school_big_history.md)
**Track id**: `middleSchoolBigHistory` (high.ts line 1939)
**Tier**: high (per catalog) — note: syllabus targets Year 7, ages 11-12 (effectively primary/middle, not high)
**Region**: Global / cross-disciplinary (no jurisdiction)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Big Questions, Big Time, Evidence | none | No timeline/scale-of-time items, no "claim vs evidence" age-appropriate framing. |
| 2. The Big Bang and First Ingredients | none | Redshift, CMB, early elements — absent. |
| 3. Stars, Elements, Cosmic Recycling | none | Fusion, supernova, stellar life cycle — absent. (Possible indirect coverage via `cosmologyAstronomy*` if cross-routed.) |
| 4. Earth, Moon, Goldilocks Conditions | none | Solar system formation, habitability — absent. |
| 5. Life Begins and Changes the Planet | none | Cell, DNA, photosynthesis, extinction — absent. |
| 6. Humans, Migration, Collective Learning | none | Hominin migration, collective learning — absent. |
| 7. Farming, Cities, Written Records | partial | Indirect via `worldHistoryOriginsExamBatch` (Neolithic Revolution, river valley civilizations) but at AP-grade depth, not middle-school voice. |
| 8. Modern Revolution and the Anthropocene | none | Fossil fuels, acceleration, Anthropocene — absent. |

**Critical finding**: this track has **no dedicated question bank**. It's `playable: true` in `high.ts` but the entire content stream comes from the `highGenerated` `historyBlueprints` fallback (3 templates: press freedom, veto override, push-pull migration) — none of which are Big History, none of which are age-appropriate for 11-12-year-olds, and most of which are US civics-flavored. The course is interdisciplinary (science + history + geography) and the blueprint family routing for it is wrong.

**Tier mismatch**: syllabus is explicit Year 7 (middle school), but the track sits in the `high.ts` catalog. Either re-categorize to `middle`/primary or accept high-tier placement as "advanced middle-school content reachable from high."

**Voice mismatch**: even if content existed, the high-school AP-rubric register would be wrong for 11-12-year-olds. Big History is supposed to be wonder-first with playful but careful evidence framing.

**Chapter taxonomy mismatch**: N/A — nothing exists to mismatch yet.

## Per-file recommendations

| File | Big History Q's | Bucket | Reason |
|---|---|---|---|
| (none — no dedicated `bigHistory*.ts` file) | 0 | **AUTHOR NEW** | Track is wired `playable` with zero dedicated content. Major gap. |
| `highGenerated` → `historyBlueprints()` fallback | 3 templates × ~17 instances each = ~50 generated | **DELETE for this track** | The 3 fallback prompts (press freedom, veto override, push-pull migration) are nonsense for Big History. Replace with `bigHistoryBlueprints()` (8 OER threshold-aligned templates) or skip the fallback entirely. |
| `cosmologyAstronomyWorkoutGenerated.ts` / `cosmologyAstronomyExamBatch2.ts` | unknown (univ tier) | **CONSIDER CROSS-ROUTE selectively** | Chapters 2-4 (Big Bang, stars, Earth) could reuse a curated subset *if* age-appropriate text exists. Most cosmology content is university-level; would need re-voicing. |
| `worldHistoryOriginsExamBatch.ts` (Neolithic, river valleys) | 2-3 items relevant | **CONSIDER CROSS-ROUTE selectively** | Chapter 7 of Big History overlaps. AP-rubric voice would need softening for 11-12-year-olds. |
| `primaryGeneratedScienceDiscovery.ts` | unknown | **CHECK** | Possibly has age-appropriate cosmology items already authored for primary. Voice would fit Big History better than the high-tier banks. |

**Net effect**: 0 dedicated → ~50 hand-authored Big-History-specific questions in the OER-aligned 8-threshold spine with appropriate voice.

## Open actions (priority order)

1. **Decide tier**: keep in `high.ts` (as advanced primary/middle), or move to `middle`/`primary` catalog. The syllabus is explicit about Year 7 ages 11-12.
2. **Author a dedicated `middleSchoolBigHistoryWorkoutGenerated.ts`** of ~50 items. Voice template: [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) (the framework's named primary voice model), softened from AP-grade tone. Use `[answer, whyWrong, nudge]` triple structure suited to younger learners.
3. **Cover all 8 syllabus chapters**, ~6 items each. Use OER Project's threshold framing.
4. **Add a `bigHistoryBlueprints()`** or remove the historyBlueprints fallback for this track (it produces civics nonsense currently).
5. **Either flip `status: 'soon'`** until content lands, or front-load authoring before any beta touches this track.
6. **Cross-route candidates**: check whether `primaryGeneratedScienceDiscovery.ts` has age-appropriate cosmology/earth items reusable for Chapters 2-5.

## Estimated effort

- Tier decision + wiring: ~1 hour.
- New question bank authoring: ~12 hours (50 items × 15 min, age-appropriate per-distractor whys and nudges).
- Cross-route audit: ~2 hours.

**~2 working days from scratch.**

## Notes for next auditor

This is one of the worst coverage situations in the cluster — a `playable` interdisciplinary track receiving only US-civics-flavored fallback prompts that have no connection to its OER threshold-based syllabus. The fix needs both new authoring and tier/voice alignment. The same `historyBlueprints` fallback bug hits `usHistory`, `worldHistoryCollections`, `apEuropeanHistory`, and `mythologyAndMonsters` — see those audits.
