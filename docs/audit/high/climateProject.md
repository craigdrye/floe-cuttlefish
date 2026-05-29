# Audit: climateProject

**Syllabus**: [`src/data/syllabi/high/climate_project.md`](../../../src/data/syllabi/high/climate_project.md)
**Track ids**: `climateProject` (line 1389 in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts)). Phantom alias `col-climate-project` referenced only in `syllabi/index.ts` line 262.
**Tier**: high
**Region**: US-centric framing (NASA, NOAA, IPCC sources in syllabus) but climate is intrinsically global. Not currently tagged. Recommend `regions: ['US','global']` with intentional cross-jurisdiction tagging.
**Status**: `playable` — **but the track has NO dedicated question file.** All content is generic `scienceBlueprints()` filler from `highGenerated.ts`.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Climate System and Evidence | ⚠️ generic only | Generic "dark rock albedo" blueprint touches Chapter 1 obliquely; no temperature-record or paleoclimate items. |
| 2. Carbon Cycle and Human Drivers | ❌ | No items. |
| 3. Impacts, Risk, and Vulnerability | ❌ | No items. |
| 4. Energy Systems and Mitigation | ❌ | No items. |
| 5. Policy, Economics, and Public Decisions | ❌ | No items. (Cross-link with `practicalPolitics` possible.) |
| 6. Adaptation and Resilience | ❌ | No items. |
| 7. Climate Communication and Misinformation | ❌ | **No items — and this is the chapter best suited to authored content from `jargonBusters.ts` voice.** |
| 8. Climate Action Studio | ❌ | No items. |

**Effective coverage: 0% dedicated.** Student sees the recycled `scienceBlueprints()` items used to fill every science track.

## Per-file recommendations

| File | climate Q's | Bucket | Reason |
|---|---|---|---|
| **No dedicated `climateProject` question file** | — | **AUTHOR** | Highest-priority authoring task in the cluster after `col-high-school-chemistry`. |
| [`highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) `scienceBlueprints()` filler | up to 50 generic | **FIX** | Only "dark rock albedo" is climate-shaped (and it's also routed to four other tracks). Generic blueprints don't map to any of the eight climate-project chapters. Chapter-taxonomy mismatch is total. |
| `earthScienceStarterQuestions` (from [`courseExpansionStarterQuestions.ts`](../../../src/data/questionCatalog/courseExpansionStarterQuestions.ts)) | 5 (wired to `earthScience` only) | **MERGE — partial cross-route** | The "Greenhouse Effect" and "Runoff" items are directly climate-project Chapter 1 / Chapter 3 material. Cross-route. |
| `apEnvironmentalScienceWorkoutGenerated.ts`, `apEnvironmentalScienceExamBatch2.ts` | unknown count, AP Environmental Science | **AUDIT — likely MERGE — partial** | Sibling AP track has climate-adjacent content (carbon cycle, mitigation, atmosphere, biodiversity). Curate ~20 items for cross-route here. |
| [`practicalPoliticsQuestions.ts`](../../../src/data/questionCatalog/practicalPoliticsQuestions.ts) | unknown | **AUDIT** | Chapter 5 (policy/economics) overlaps with practical politics; check for cross-route candidates. |

## Open actions (priority order)

1. **Author 35–50 Floe-native climate-project questions** spanning the eight chapters. Voice template: `jargonBusters.ts` (interdisciplinary, voice-driven, takes claims and evidence seriously). Especially:
   - Chapter 1: distinguish weather vs climate claims; interpret temperature anomaly graphs (5–7 items).
   - Chapter 2: carbon stock vs flow distinction (4–6 items).
   - Chapter 3: hazard vs exposure vs vulnerability separation (4–5 items).
   - Chapter 4: mitigation comparisons with constraints (5–6 items).
   - Chapter 5: policy-tool matching, externalities (4–5 items).
   - Chapter 7: misleading-graph spotting, false-balance recognition (5–7 items). **This is the highest-leverage chapter — directly differentiates Floe.**
2. **Cross-route ~20 items from `apEnvironmentalScience*`** (audit those files separately first).
3. **Cross-route 2 `earthScienceStarterQuestions`** (Greenhouse Effect, Runoff).
4. **Add `regions: ['US','global']`** explicitly — climate is one of the few tracks where international content is on-brand.
5. **Demote to `status: 'soon'`** until ≥30 dedicated items exist — `playable` flag is currently misleading.
6. **Consider a `lastReviewed` metadata field** on policy and emissions items — climate policy and IPCC findings update.

## Estimated effort

- Authoring (40 items): ~13 hours
- Cross-route + curation: ~2 hours
- Region/status: ~15 min
- AP Environmental audit: ~1 hour

**~2 working days.** Headline: **`status:'playable'` track with zero dedicated content** — the most interdisciplinary syllabus in the cluster and currently the emptiest. Auto-FIX flag.

## Notes for next auditor

Climate Project is a flagship interdisciplinary course — well-authored questions here are a marketing asset, not just a content asset. The syllabus's Chapter 7 (Climate Communication and Misinformation) is the single most distinctive chapter in the entire HS science cluster — worth authoring with extra care and the `jargonBusters` voice template.
