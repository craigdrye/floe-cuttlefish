# Audit: gameDesignBasics

**Syllabus**: [`src/data/syllabi/high/game_design_basics.md`](../../../src/data/syllabi/high/game_design_basics.md) (declares `ID: gameDesignBasics`)
**Track id**: `gameDesignBasics` (age catalog line 1873) — but also a separate, older `gameDesign` id exists (line 308)
**Tier**: high (year 10)
**Region**: not jurisdiction-specific

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Game Designers Design (rules, feedback, prototype) | ✅ | One hand item ("Core loop") covers the territory; lives under `gameDesign`, not `gameDesignBasics` |
| 2. Mechanics, Dynamics, Aesthetics (MDA framework) | ❌ | No items |
| 3. Core Loops and Meaningful Choice | ✅ | "Player choice" hand item under `gameDesign` covers this |
| 4. Prototyping and Playtesting | ❌ | No items |
| 5. Level Design, Pacing, Onboarding | ✅ | "Difficulty tuning" hand item under `gameDesign` covers this |
| 6. Systems, Economy, Balance (sources/sinks, feedback loops) | ❌ | No items |
| 7. Narrative, World, Theme (embedded vs emergent) | ❌ | No items |
| 8. Ethics, Accessibility, Final Pitch (dark patterns, monetization) | ❌ | No items |

**Duplicate-track problem.** Two distinct tracks exist:
- `gameDesign` (age catalog line 308) — has 4 solid hand items in `highFun.ts:109` (core loop, player choice, difficulty, feedback).
- `gameDesignBasics` (age catalog line 1873) — the syllabus-aligned track, but **no question file references it**. Falls through to `high-generated`, which routes "game design" into the generator's `creative` family.

End-users opening "Game Design Basics" from the syllabus's collection get templated creative content; the four genuine game-design items are stranded on the older `gameDesign` track.

**Chapter-taxonomy mismatch.** Hand items use "Game Design Dock/Reef/Cove/Lagoon" cosmetic labels rather than the syllabus's eight chapter names.

## Per-file recommendations

| File | Items for gameDesignBasics | Bucket | Reason |
|---|---|---|---|
| [`highFun.ts`](../../../src/data/questionCatalog/highFun.ts) `gameDesign` block (lines 109–142) | 4 hand items | **MERGE → gameDesignBasics** | Solid per-distractor explanations, on-topic for Chapters 1, 3, 5. Move (or duplicate) this content under `gameDesignBasics`. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) creative blueprints (top-up) | up to 50 | **FIX (procedural generator)** | Currently what `gameDesignBasics` users see. Family is `creative`; blueprint pool is generic; flag generator usage. |
| [`highAgentGenerated.ts`](../../../src/data/questionCatalog/highAgentGenerated.ts) | no entry | **GAP** | No `gameDesignBasics` topUp; no `gameDesign` topUp. |

## Open actions (priority order)

1. **Consolidate `gameDesign` and `gameDesignBasics`.** Either rename one to the other in the age catalog, or wire both ids to the same content via the routing index. Recommended: keep `gameDesignBasics` (syllabus-aligned) and retire `gameDesign`.
2. **Author 12–18 new items** to cover the missing chapters: MDA (Chapter 2), prototyping/playtesting (Chapter 4), economy and balance (Chapter 6), narrative (Chapter 7), ethics/accessibility (Chapter 8).
3. **Realign chapter labels** from the cosmetic "Dock/Reef/Cove/Lagoon" pattern to syllabus chapter names.
4. **Tone calibration.** Game Design is closer to `highFun.ts` (playful but rigorous) than `highBuilders.ts` (sober exam). Keep the playful voice when authoring new items.

## Estimated effort

- Track consolidation: ~1 hour
- 12–18 authored items across five missing chapters: ~6–8 hours
- Chapter rename pass: ~1 hour

## Notes for next auditor

This is a duplicate-id smell, not a content quality issue per se. Same family of bug as `gameDesign` vs `gameDesignBasics` likely applies elsewhere in the catalog where the May 2026 refactor split old `xxxx` tracks into more syllabus-specific `xxxxBasics` / `xxxxStudio` variants without porting the question content. Worth a catalog-wide grep for orphaned older ids.
