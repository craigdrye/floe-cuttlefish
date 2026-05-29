# Audit: middleSchoolEarthSpace

**Syllabus**: [`src/data/syllabi/high/middle_school_earth_space.md`](../../../src/data/syllabi/high/middle_school_earth_space.md)
**Track ids**: `middleSchoolEarthSpace` (line 594 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)). Phantom alias `col-middle-school-earth-and-space-science` referenced only in `syllabi/index.ts` line 236.
**Tier**: high (catalog grouping; ages 11–12)
**Region**: US NGSS + UK KS3 (explicit in syllabus). Not currently tagged.
**Status**: `playable`. Wired via dedicated `highGenerated.ts` branch (line 1586). Content also cascades into `earthScience` (line 1584).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Space Systems and Scale | ❌ | No items on solar system, gravity in orbits, scale models. |
| 2. Earth-Sun-Moon Patterns | ✅ | Moon phases (sunlit half), seasons (axial tilt) in STAAR batch. **Common-misconception coverage explicit and good.** |
| 3. Geologic Time and Earth's History | ⚠️ partial | Fossils on continents → continental drift. No relative-dating sequence items. |
| 4. Plate Tectonics and Earth Materials | ✅ | Boundary location, divergent boundary motion. No rock-cycle items. |
| 5. Water, Weathering, and Surface Change | ✅ | Water cycle driver (Sun), condensation/cloud formation. **No weathering vs erosion vs deposition distinction.** |
| 6. Atmosphere, Weather, and Climate | ✅ | Weather vs climate distinction. **No air-pressure or front items at MS level.** |
| 7. Resources and Human Impacts | ✅ | Renewable resources (wind vs fossil), runoff/eutrophication. Good. |
| 8. Earth Systems Investigation Studio | ❌ | No system-modelling / data-quality items. |

## Per-file recommendations

| File | msEarth Q's | Bucket | Reason |
|---|---|---|---|
| [`middleSchoolEarthSpaceStaarBatch.ts`](../../../src/data/questionCatalog/middleSchoolEarthSpaceStaarBatch.ts) | 10 | **KEEP** | Floe-native, per-distractor explanations, audience-appropriate ("Clouds can block views but do not create phases"). Strong common-misconception targeting on seasons. Chapter labels (Earth Systems, Weather and Climate, Plate Tectonics, Rocks and Fossils, Space Systems, Energy Resources, Human Impact) map well to syllabus. |
| `middleSchoolScienceAssessmentEarthSpaceQuestions` (from [`primaryScienceAssessmentImported.ts`](../../../src/data/questionCatalog/primaryScienceAssessmentImported.ts)) | ? | **AUDIT — likely KEEP** | Same provenance as bio/chem/physics siblings. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Only "dark rock albedo" blueprint is Earth-science-shaped (Climate Feedbacks). Others are off-domain. Chapter-taxonomy mismatch. |
| `earthScienceStarterQuestions` (from [`courseExpansionStarterQuestions.ts`](../../../src/data/questionCatalog/courseExpansionStarterQuestions.ts)) | 5 (wired into `earthScience`, not here) | **CONSIDER MERGE** | Rock cycle, subduction, air pressure, greenhouse effect, runoff. All are MS-appropriate too — could be shared via cross-routing. |

## Open actions (priority order)

1. **Author 20–25 items closing Chapters 1, 3, 5, 6, 8 gaps** — solar-system scale, relative dating from rock layers, weathering vs erosion, air-pressure/fronts at MS level, system-modelling / data quality. Voice template: `middleSchoolEarthSpaceStaarBatch` (concrete, common-misconception-targeting).
2. **Cross-route the 5 `earthScienceStarterQuestions`** into this track (rock cycle, subduction, air pressure, greenhouse, runoff are all MS-appropriate).
3. **Audit `middleSchoolScienceAssessmentEarthSpaceQuestions`** for KEEP/downgrade.
4. **Author 4 earth-science-specific blueprints** (water-cycle trace, rock-cycle path, weather-map reading, resource trade-off).
5. **Resolve `middleSchoolEarthSpace` vs `col-middle-school-earth-and-space-science` phantom split.**
6. **Add `regions: ['US','UK']`** — NGSS + KS3.

## Estimated effort

- Authoring (22 items): ~7 hours
- Cross-routing earth-science starters: ~15 min
- School-assessment audit: ~45 min
- Blueprint authoring: ~2 hours
- Track-id cleanup: ~20 min

**~1.5 working days.** Headline: strongest middle-school STAAR batch by misconception-targeting quality; needs space-systems and chronology content.

## Notes for next auditor

This track and `earthScience` (HS) share the same STAAR batch via the `earthScience` branch in `highGenerated.ts` line 1584. Any new Earth-Space authoring at MS level can usually serve both, modulo prompt complexity.
