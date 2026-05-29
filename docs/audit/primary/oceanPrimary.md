# Audit: oceanPrimary

**Syllabus**: [`src/data/syllabi/primary/ocean_science.md`](../../../src/data/syllabi/primary/ocean_science.md)
**Track id**: `oceanPrimary`
**Tier**: primary (Fun Discovery)
**Status**: `playable` (ageCatalog/primary.ts)
**Region**: untagged (geographically neutral; though one OpenTrivia row uses imperial-flavoured framing)

## Coverage map (syllabus → questions)

Two sources wired in `primary.ts` line 143:
- `oceanPrimary` export of `primaryGeneratedScienceDiscovery.ts` — 10 seeds × 5 frames = 50 questions
- `openTriviaForKidsQuestionsByTrack.oceanPrimary` — **1 question only** ("These animals... resemble fish, will drown if kept underwater" / Dolphins)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. One Ocean, Many Places | ❌ | No ocean basins, salinity, coast/reef/deep-sea distinction |
| 2. Ocean Zones and Light | ✅ | sunlight/twilight/midnight zone seeds |
| 3. Waves, Tides, and Currents | ❌ | No wave/tide/current/Moon-pull content |
| 4. Marine Food Webs and Ecosystems | ✅ partial | phytoplankton, apex predators |
| 5. Marine Animal Adaptations | ✅ partial | gills, marine mammals, octopus camouflage + 1 OpenTrivia dolphin item |
| 6. Coral, Kelp, Coasts, and Change | ❌ partial | coral bleaching seed only; no kelp, holdfast, erosion, storms |
| 7. Exploring and Measuring the Ocean | ❌ | No sonar, satellite, buoy, ROV, submersible content |
| 8. Ocean Care and Climate Connections | ✅ partial | plastic pollution only; no overfishing, sea level, warming |

**Critical content gap flagged in May 2026 audit confirmed:** `oceanPrimary` has only ONE OpenTrivia question wired in — and even with the 50-question generator bank on top, 4 of 8 syllabus chapters have zero coverage.

## Per-file recommendations

| File | oceanPrimary Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (oceanPrimary export) | 50 (10 seeds × 5 frames) | **FIX** | Cartoonish distractors confirmed: `'The sunlight zone is only inside volcanoes.'`, `'The twilight zone is only found inside coral skeletons.'`, `'The midnight zone is always full of grass and bees.'`, `'Phytoplankton are plastic pellets.'`, `'Fish use gills to grow flowers.'`, `'Marine mammals breathe through leaves.'`, `'Apex predators are grains of sand.'`. `DEFAULT_FLAW` template on every wrong answer. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) (oceanPrimary entry) | 1 | **KEEP minor / EXPAND** | Single dolphin question is factually fine but uses the imported `DEFAULT_FLAW` text (`"This choice does not match the science clue in the prompt."`). Worth keeping as a one-off ocean-animal recognition question; the cluster gap is the bigger issue. |

**Net effect**: 51 questions, mostly thin. Target: 10-seed FIX + 30 new seeds → ~40 hand-authored questions across all 8 chapters.

## Open actions (priority order)

1. **Author content for chapters 1, 3, 7** (zero coverage). Tides + Moon, waves vs currents, sonar, satellite ocean observation, ROV missions — all classroom-friendly with strong misconceptions to mine.
2. **Rewrite the 10 generator seeds** to drop silly distractors.
3. **Add per-distractor explanations** to the single OpenTrivia dolphin question.
4. **Drop the 5-frame multiplier** for this track.
5. **Realign chapter strings** to the syllabus's 8 names.

## Estimated effort

- Author 20 new seeds for uncovered chapters: ~6 hours
- Rewrite existing 10 seeds: ~3 hours
- OpenTrivia rewrite + generator cleanup: ~1 hour

**~1.5 working days.**

## Notes for next auditor

Same generator and `DEFAULT_FLAW` pattern as `dinosPrimary`, `bugsPrimary`, `planetsPrimary`. The 1-question OpenTrivia wiring is misleading: it suggests an external source but adds essentially zero coverage. The pattern of grafting a single imported question onto a generator bank should be flagged across the catalog.
