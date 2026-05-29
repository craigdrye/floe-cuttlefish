# Audit: pharmaDrugSafetyRoadmap

**Syllabus**: [`src/data/syllabi/career/pharma_drug_safety_roadmap.md`](../../../src/data/syllabi/career/pharma_drug_safety_roadmap.md)
**Track id**: `pharmaDrugSafetyRoadmap`
**Tier**: career
**Region**: Mixed — global PV concepts (ICSR, MedDRA, PSUR, PBRER, DSUR) sit alongside US-specific cues (FDA, MedWatch wording). **Region tag needed; `lastReviewed` essential** — PV is heavily regulation-driven (EMA, ICH E2E/E2D, 21 CFR Part 314.80, BIMO inspections).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Drug Safety Role and Safety Language | ✅ | Four-element case, complaint vs case, special situations (pregnancy exposure, overdose) |
| 2. Case Intake, Follow-Up, and Data Quality | ✅ | Minimum criteria, follow-up priority, duplicate check, literature case, narrative clarity |
| 3. Reporting Rules and Timeline Discipline | ✅ | Clock start, weekend handoff, seriousness confusion (ER visit), foreign serious case, country rule mismatch |
| 4. Medical Review and Signal Detection | ✅ | Signal pattern, causality balance, expectedness check, background rate, label-change input |
| 5. Aggregate Safety and Inspection Readiness | ✅ | PSUR input, inspection trail, vendor oversight, SOP mismatch, risk-minimization effectiveness |

Coverage is solid across all five chapters.

**Chapter taxonomy mismatch.** Three competing schemes:
- `RoadmapHealthcare.ts` uses syllabus-aligned chapter names ("Drug Safety Role and Safety Language", "Case Intake, Follow-Up, and Data Quality", etc.) — good
- `RoadmapHealthcareTopOff.ts` uses different ones ("Safety Case Intake", "Triage and Seriousness", "Narrative and Medical Review", "Regulatory Reporting", "Signal Detection")
- `RoadmapHealthcareFinalTopOff.ts` uses yet another set ("Safety Intake and Triage", "Case Processing", "MedDRA and Narrative Quality", "Expedited Reporting", "Signal Detection and Risk Management")
- `RoadmapPracticePolish4.ts` uses "Drug Safety: Case Intake" prefix style

## Per-file recommendations

| File | PV Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) (pharmaDrugSafetyRoadmap, lines 583–674) | 18 | **FIX** | Strong PV scenarios (four-element validity, clock start, expectedness nuance, special situations, vendor oversight, narrative chronology). Chapter names match syllabus. Auto-FIX: every distractor uses file-wide `DEFAULT_FLAW`. Per-distractor rewrite → canonical. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) (pharmaDrugSafetyRoadmap, 16 q's) | 16 | **MERGE → RoadmapHealthcare** | Genuinely novel content (chat-mention intake, congenital anomaly seriousness, reporter-causality language, product complaint + AE handling, MedDRA term selection, label update governance, risk-minimization). Topic 'Medical' instead of 'Regulatory' (taxonomy inconsistency). Lift novel scenarios. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) (pharmaDrugSafetyRoadmap, 16 q's) | 16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Overlaps TopOff on duplicate suspicion, follow-up gold, seriousness clock, signal cluster, pregnancy exposure. Salvageable: medical information handoff, risk minimization not working, MedDRA "nearly fainted" term selection, literature abstract handling (~6–8 questions). Realign chapter names. |
| [`careerAgentGeneratedRoadmapPracticePolish4.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish4.ts) (pharmaDrugSafetyRoadmap, 4 q's, lines 31–52) | 4 | **DELETE** | Generic (incomplete adverse event, hospitalization ambiguity, one strange case, label update). Each concept covered better in base or TopOff. Different `DEFAULT_FLAW` string. |

**Net effect**: 54 PV questions across 4 files → ~30 in 1 canonical syllabus-aligned bank.

## Open actions (priority order)

1. **Per-distractor rewrite** of base RoadmapHealthcare pharmaDrugSafetyRoadmap block (18 q's). ~3 hours.
2. **Consolidate triplet** — lift unique TopOff and FinalTopOff content into base, fix `topic: 'Medical'` inconsistency in TopOff, realign all chapter names to syllabus. ~3 hours.
3. **Delete** PracticePolish4 entries.
4. **Add `region` tag** — most concepts are global ICH/MedDRA, but FDA-specific timelines and BIMO inspection wording need US tagging. Consider dual-tag: `regions: ['US', 'EU']` where applicable.
5. **Add `lastReviewed` metadata** to every question — PV regulations (21 CFR Part 314.80, EU CT-3, ICH E2D) update; reporting timelines and aggregate-report cadence shift.
6. **Author 2–3 BIMO/FDA-inspection-specific questions** if US-tagged version desired.

## Estimated effort

- Per-distractor rewrite of base: ~3 hours
- Triplet consolidation + topic fix: ~3 hours
- Polish deletion: 5 min
- Region + `lastReviewed` tagging: ~45 min (heavy for PV)
- Optional BIMO content: ~1 hour

**~7 hours.**

## Notes for next auditor

PV is the highest-regulation-density healthcare topic in the catalog. Without `lastReviewed` metadata, this content will drift quickly. The chapter taxonomy fragmentation here is the worst in the cluster (three different schemes across the triplet alone). The topic field also drifts: `RoadmapHealthcare.ts` uses `'Regulatory'`, `RoadmapHealthcareTopOff.ts` uses `'Medical'`, `RoadmapHealthcareFinalTopOff.ts` returns to `'Regulatory'`. Pick one and enforce.

The content quality is genuinely high — these read like questions an experienced PV ops lead would write — but the `DEFAULT_FLAW` constant makes every wrong answer feel identical to the learner. Fix the distractor work and this becomes one of the strongest specialist tracks in the catalog.

Watch for adjacent track `clinicalResearchJargon` and `clinicalResearchRoadmap` — they touch SAE reporting overlap but stay at the site/study level rather than the sponsor PV system level. The boundary is correct; do not merge.
