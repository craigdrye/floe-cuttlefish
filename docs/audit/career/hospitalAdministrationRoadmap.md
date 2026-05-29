# Audit: hospitalAdministrationRoadmap

**Syllabus**: [`src/data/syllabi/career/hospital_administration_roadmap.md`](../../../src/data/syllabi/career/hospital_administration_roadmap.md)
**Track id**: `hospitalAdministrationRoadmap`
**Tier**: career
**Status**: `playable`
**Region**: US (assumed — references payer mix, accreditation, HIPAA, observation status; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Hospital System Map | ✅ | RoadmapHealthcare + TopOff + FinalTopOff cover service-line handoffs, committee coordination, pre-op journey |
| 2. Patient Flow and Capacity | ✅ | ED boarding, PACU traffic, telemetry, observation, discharge lounge, stepdown |
| 3. Finance and Resource Stewardship | ✅ | Budget variance, supply costs, premium agency, capital requests, vendor savings |
| 4. Quality, Safety, and Compliance | ✅ | Falls, infection control, hand hygiene, downtime safety, badge tailgating, consent forms |
| 5. People, Service, Leadership Communication | ✅ | Town-hall messaging, manager burnout, board updates, rumor control, metric whiplash |

Full coverage of all five syllabus chapters with good scenario variety.

**Chapter taxonomy mismatch.** Two competing schemes in use:
- `RoadmapHealthcare` family uses chapter names that closely mirror the syllabus ("Hospital System Map", "Patient Flow and Capacity", "Finance and Resource Stewardship", "Quality, Safety, and Compliance", "People, Service, and Leadership Communication")
- `RoadmapPracticePolish` uses "Hospital Admin: Throughput", "Hospital Admin: Quality Metrics", "Hospital Admin: Staffing", "Hospital Admin: Change Management" — prefix-style with different anchors

The RoadmapHealthcare names match the syllabus. The Polish file's prefix-style chapters should be remapped.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts` → hospitalAdministrationRoadmap (lines 31–122)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) | ~18 | **FIX** | Strong scenarios. Every wrong answer uses the file-wide `DEFAULT_FLAW` constant. Chapter names already align with syllabus. Rewrite per-distractor explanations and this becomes the canonical bank. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts` → hospitalAdministrationRoadmap (line 46)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare** | Adds novel cross-department scenarios (elevator/transport cascades, PACU bottleneck, premium agency habit, hand-hygiene environment, board metric tradeoffs). Same DEFAULT_FLAW pattern. Lift novel content, fix distractors on merge. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts` → hospitalAdministrationRoadmap (line 46)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Substantial overlap with TopOff on throughput/finance themes. Salvageable: weekend lab gap, bed-clean queue handoff signals, downtime safety, badge tailgating, community-partner workflow. Cut the rest. |
| [`careerAgentGeneratedRoadmapPracticePolish.ts` → hospitalAdministrationRoadmap (lines 119–140)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) | 4 | **DELETE** | Uses incompatible chapter taxonomy ("Hospital Admin: Throughput" etc). Content (ED boarding, LOS vs readmissions balancing, schedule gaps, change-management rollout) is already covered better in the RoadmapHealthcare triplet. Different DEFAULT_FLAW string than the Healthcare family — adds maintenance cost for no content win. |

**Net effect**: 54 questions across 4 files → ~30 questions in 1 canonical file with per-distractor explanations.

## Open actions (priority order)

1. **Per-distractor rewrite for the RoadmapHealthcare triplet's hospitalAdministrationRoadmap block** (~50 items × ~4 min each ≈ 3.5 hours).
2. **Consolidate the triplet** into one file, deduplicating overlap from TopOff + FinalTopOff.
3. **Delete the PracticePolish 4-item block** for this track (and audit whether other tracks in that file justify keeping it — likely covered by sibling audits).
4. **Add `region: 'US'` and `lastReviewed: <date>`** tags to the track entry in [`src/data/ageCatalog/career.ts:621`](../../../src/data/ageCatalog/career.ts) — references payer mix and accreditation are US-specific.

## Estimated effort

- Distractor rewrite + consolidation: ~6 hours
- Delete PracticePolish block: 15 min
- Region/date tagging: 15 min

**~1 working day.** Coverage is strong; the work is quality polish, not authoring gaps.

## Notes for next auditor

`nursingFloorOpsRoadmap` and `physicianPracticeRoadmap` follow the same triplet+Polish structure with the same DEFAULT_FLAW issue. A single batch rewrite across the three administrative-healthcare tracks would be efficient. Watch for slight scenario overlap with `medicalBillingRoadmap` (revenue cycle, charge capture) — the role lens (administrator vs biller) differs but topics intersect.
