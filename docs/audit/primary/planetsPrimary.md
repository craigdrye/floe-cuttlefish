# Audit: planetsPrimary

**Syllabus**: [`src/data/syllabi/primary/solar_system_and_beyond.md`](../../../src/data/syllabi/primary/solar_system_and_beyond.md)
**Track id**: `planetsPrimary`
**Tier**: primary (Fun Discovery)
**Status**: `playable` (ageCatalog/primary.ts)
**Region**: untagged (geographically neutral; NASA/Apollo references are US-led but mission content is global astronomy)

## Coverage map (syllabus → questions)

Single source: `planetsPrimary` export of `primaryGeneratedScienceDiscovery.ts` — 10 seeds × 5 frames = 50 questions across 4 condensed chapters.

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Looking Up Like a Scientist | ❌ | No Sun-safety, observation-vs-story, source-checking content |
| 2. Our Solar System Neighbourhood | ✅ | "The Solar System" seeds (Sun centre, inner rocky, outer giants) |
| 3. Earth as a Planet | ✅ partial | Tilt and seasons seed; nothing on rotation/day-night, hemispheres |
| 4. The Moon, Phases, Tides, and Eclipses | ✅ partial | Moon phases + tides seeds; no eclipse content |
| 5. Gravity, Motion, and Orbits | ❌ | No mass/weight, microgravity, satellite-orbit content |
| 6. Stars, Constellations, and Galaxies | ✅ partial | Light years, Milky Way; nothing on constellations as patterns |
| 7. Space Exploration and Mission Evidence | ✅ partial | Apollo 11, Mars rovers; no Hubble, JWST, ISS, Artemis |
| 8. Beyond the Solar System | ❌ | No exoplanet, habitable zone, supernova, black hole, Big Bang |

**Chapter taxonomy mismatch.** Generator uses 4 names ("The Solar System", "Earth, Moon and Gravity", "Stars, Galaxies and The Universe", "Space Exploration") vs syllabus's 8. Three syllabus chapters fully uncovered.

## Per-file recommendations

| File | planetsPrimary Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (planetsPrimary export) | 50 (10 seeds × 5 frames) | **FIX** | Cartoonish distractors confirmed: `'The inner rocky planets are all made of cheese.'`, `'A light year is the time it takes to eat lunch in space.'`, `'Mars rovers are whales that live in craters.'`, `'Moon phases are caused by clouds painting the Moon.'`, `'Apollo 11 first landed humans on Jupiter.'`, `'Tides are caused only by fish swimming together.'`, `'Apollo 11 was a deep ocean submarine.'`. Every wrong answer uses the `DEFAULT_FLAW` template. Real student misconceptions are well-documented (geocentric model, Moon-shape-actually-changes, seasons-from-distance-only) and should replace the cartoon options. |

**Net effect**: 50 padded questions → target ~40 hand-authored seeds × 1 frame covering all 8 syllabus chapters.

## Open actions (priority order)

1. **Rewrite the 10 seeds** to swap silly distractors for real misconceptions (e.g. for light years: "1 light year = 365 days" — time confusion; "1 light year is how long a star lives" — life-cycle confusion; "1 light year is how bright a star appears" — magnitude confusion).
2. **Author 30 new seeds** for chapters 1, 5, 8 plus Earth rotation, eclipses, constellations-as-patterns, JWST/Hubble, exoplanet detection.
3. **Drop the 5-frame multiplier** for this track.
4. **Realign chapter strings** to the syllabus's 8 names.
5. **No region tag needed** — even with Apollo/NASA emphasis, astronomy content is global.

## Estimated effort

- Rewrite 10 seeds with real misconceptions: ~3 hours
- Author 30 new seeds: ~10 hours
- Generator/rename cleanup: ~30 min

**~1.5 working days.**

## Notes for next auditor

Same generator and `DEFAULT_FLAW` pattern as the other three Fun Discovery primary tracks (`dinosPrimary`, `oceanPrimary`, `bugsPrimary`). NASA Space Place and the existing science discovery seeds for Year 3 (Earth/space) likely overlap — check whether the `scienceYear3` Earth & Space content can be deduplicated or cross-linked.
