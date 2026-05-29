# Audit: earthScience

**Syllabus**: [`src/data/syllabi/high/earth_science.md`](../../../src/data/syllabi/high/earth_science.md)
**Track ids**: `earthScience` (line 605 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts))
**Tier**: high
**Region**: US (NGSS HS Earth & Space Science, NASA/NOAA framing — explicit in syllabus). Not currently tagged.
**Status**: `playable`. Wired via dedicated `highGenerated.ts` branch (line 1584) which cascades **middleSchoolEarthSpace STAAR batch + middle-school science assessment Earth-space + earthScienceStarterQuestions**.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Earth Systems and Scientific Evidence | ❌ | No items on reservoirs, feedbacks, system modelling, uncertainty. |
| 2. Minerals, Rocks, and the Rock Cycle | ⚠️ partial | Rock cycle (sedimentary) covered in starter set. **No mineral or metamorphic items.** |
| 3. Plate Tectonics and Earth Structure | ✅ | Subduction (starter), plate-boundary location and divergent motion (MS STAAR). **No mantle convection or seafloor spreading items.** |
| 4. Earth History and Deep Time | ⚠️ partial | Fossil evidence for continental drift (MS STAAR). **No relative-dating / unconformity / mass-extinction items — major HS-level gap.** |
| 5. Atmosphere, Weather, and Forecasting | ⚠️ partial | Air pressure (starter), weather vs climate (MS STAAR). **No fronts, humidity, weather-map interpretation items.** |
| 6. Oceans, Water, and Climate | ✅ | Greenhouse effect (starter), runoff (starter), water-cycle Sun driver (MS STAAR). **No ocean-circulation or albedo items.** |
| 7. Natural Resources, Hazards, and Human Impacts | ⚠️ partial | Renewable vs fossil (MS STAAR), eutrophication (MS STAAR). **No hazard-mitigation or risk items.** |
| 8. Earth Data and Capstone Investigation | ❌ | No items on satellite data, remote sensing, paleoclimate proxies. |

**Effective coverage: 5 hand-authored starter items + 10 MS STAAR items = ~15 questions for a full-year HS Earth Science syllabus, plus the middle-school assessment imports.** Content depth sits at MS level rather than HS level for most chapters.

## Per-file recommendations

| File | earthSci Q's | Bucket | Reason |
|---|---|---|---|
| [`courseExpansionStarterQuestions.ts`](../../../src/data/questionCatalog/courseExpansionStarterQuestions.ts) `earthScienceStarterQuestions` | 5 | **KEEP** | Hand-authored ("Floe authored course expansion" source). Per-distractor explanations. Chapters (Earth Systems, Plate Tectonics, Weather, Climate, Water Cycle) hit syllabus chapters 2, 3, 5, 6. |
| [`middleSchoolEarthSpaceStaarBatch.ts`](../../../src/data/questionCatalog/middleSchoolEarthSpaceStaarBatch.ts) | 10 (shared) | **KEEP — but flag as MS-level** | Per-distractor, audience-appropriate, but written for ages 11–12. Fine as foundation; needs HS-tier counterparts. |
| `middleSchoolScienceAssessmentEarthSpaceQuestions` (from [`primaryScienceAssessmentImported.ts`](../../../src/data/questionCatalog/primaryScienceAssessmentImported.ts)) | ? | **AUDIT — likely KEEP** | Verify quality and depth. If MS-level only, need HS authoring on top. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Only "dark rock albedo" (Climate Feedbacks) is Earth-shaped. Chapter-taxonomy mismatch — generic blueprints under HS Earth Science labels. |
| [`openTriviaEarthPhysicsMicroImported.ts`](../../../src/data/questionCatalog/openTriviaEarthPhysicsMicroImported.ts) | ~85 | **AUDIT — likely DELETE** | 270-line file with `Imported` suffix. Likely the same DEFAULT_FLAW pattern as other openTrivia files. Confirm and salvage any concept rows. |

## Open actions (priority order)

1. **Author 30+ HS-tier Earth Science items** — biggest authoring need in the cluster after `col-high-school-chemistry`. Priority chapters: 4 (deep time/dating), 5 (weather maps/fronts), 6 (ocean circulation, albedo, carbon cycle), 7 (hazard mitigation, risk), 8 (paleoclimate proxies, satellite data). Voice template: `earthScienceStarterQuestions` (NASA/NOAA framing, claim-evidence orientation).
2. **Audit `openTriviaEarthPhysicsMicroImported.ts`** — if DEFAULT_FLAW, delete with salvage. ~45 min.
3. **Add `regions: ['US']`** — explicitly NGSS / NASA / NOAA / USGS framing.
4. **Author 3–4 Earth-science blueprints** for the generic filler (rock-cycle path, water-cycle reservoir, weather-map reading, climate-evidence ranking).
5. **Cross-link with `climateProject`** — climate-feedbacks and carbon-cycle items belong in both.
6. **Don't promote MS-STAAR cascade as "HS coverage"** — it currently fills the visible question count but doesn't deliver HS depth.

## Estimated effort

- HS-tier authoring (30 items): ~9 hours
- openTrivia triage + delete: ~45 min
- Blueprint authoring: ~2 hours
- Region tag + cleanup: ~15 min

**~1.5 working days.** Headline: live as HS but stocked at MS depth — biggest gap is Chapter 4 (deep time) and Chapter 8 (data literacy).

## Notes for next auditor

The `earthScience` track is structurally a "promoted" middle-school course — it inherits all `middleSchoolEarthSpace` content. Decide whether to keep the cascade and add HS-tier items on top, or split cleanly and have HS-specific authoring only. Current setup conflates the two age groups.
