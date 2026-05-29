# Audit: nursingFloorOpsRoadmap

**Syllabus**: [`src/data/syllabi/career/nursing_floor_ops_roadmap.md`](../../../src/data/syllabi/career/nursing_floor_ops_roadmap.md)
**Track id**: `nursingFloorOpsRoadmap`
**Tier**: career
**Status**: `playable`
**Region**: US-leaning (SBAR, rapid response, charge-nurse models, interpreter services framed in US norms; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Unit Map and Daily Rhythm | ✅ | Shift-priority scans, lunch coverage, supply hunts, night-shift backlog, meal timing |
| 2. Staffing, Acuity, Workload | ✅ | Acuity mismatch, float assignments, sitter scarcity, isolation burden, new-grad support |
| 3. Admissions, Transfers, Discharges | ✅ | Admission readiness, transfer gaps, discharge teach-back, wheelchair-van timing, observation→inpatient |
| 4. Safety and Quality on the Floor | ✅ | Near-miss meds, fall risk, pressure injuries, alarm fatigue, line tugging, opioid sedation, rapid response |
| 5. Handoffs, Families, Interdisciplinary | ✅ | SBAR escalation, family boundaries, interpreter use, diet-order mismatch, dietitian notes, therapy timing |

Full coverage. This is one of the most operationally-grounded tracks in the cluster — scenarios read like real charge-nurse moments.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts` → nursingFloorOpsRoadmap (lines 123–214)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) | ~18 | **FIX** | Strong, operationally specific scenarios. Topic tag is correctly `Medical` (vs `Career Skills` for admin/billing). Every wrong answer uses the file-wide `DEFAULT_FLAW`. Rewrite per-distractor explanations and align to syllabus chapter names (already close). |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts` → nursingFloorOpsRoadmap (line 64)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare** | Adds quiet change-of-shift handoff, isolation burden, bedside-meds delay, specimen-label near miss, therapy timing snag, interpreter shortcut, rapid-response hesitation. Same DEFAULT_FLAW pattern. Lift novel content, fix distractors. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts` → nursingFloorOpsRoadmap (line 64)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Overlap with TopOff on assignment fairness, supply rooms, float fit, teach-back. Salvageable: breakfast-insulin clock, family medication clue, bath schedule backlog, opioid sedation, quiet hours conflict. Cut the rest. |
| [`careerAgentGeneratedRoadmapPracticePolish3.ts` → nursingFloorOpsRoadmap (lines 97–118)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish3.ts) | 4 | **DELETE** | Uses different chapter taxonomy ("Nursing Floor Ops: Assignment Safety" etc). Content (acuity-vs-count, subtle deterioration, missing pending lab in handoff, barcode workaround) is already covered better in the RoadmapHealthcare triplet. Different DEFAULT_FLAW string adds maintenance cost without content win. |

**Net effect**: 54 questions across 4 files → ~30 questions in 1 canonical file with per-distractor explanations.

## Open actions (priority order)

1. **Per-distractor rewrite for the RoadmapHealthcare triplet's nursingFloorOpsRoadmap block** (~50 items × ~4 min each ≈ 3.5 hours). Voice template: jargonBusters.ts.
2. **Consolidate the triplet** into one file, deduplicating overlaps.
3. **Delete the PracticePolish3 4-item block** for this track.
4. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts:632`](../../../src/data/ageCatalog/career.ts). SBAR is international but charge-nurse/sitter/RRT/interpreter-services framing is US-norm.
5. **No `lastReviewed` urgency** — content is operational nursing judgment, not regulation-bound. Still add the field on schema rollout for consistency.

## Estimated effort

- Distractor rewrite + consolidation: ~6 hours
- Delete PracticePolish block: 15 min
- Region tagging: 15 min

**~1 working day.** Coverage is strong; the work is quality polish, not authoring.

## Notes for next auditor

This track's scenarios are notably better-grounded than the admin/billing/coding tracks — they read like real shift moments rather than generic operations vignettes. The author/agent clearly had clinical input. When the per-distractor rewrite happens, preserve the operational specificity (proper noun nurse roles, time of day, named tasks) — the bank's strength comes from those details. Voice should match jargonBusters but tone should remain calm and respectful per the syllabus design note ("floor operations depend on fast decisions and trust").
