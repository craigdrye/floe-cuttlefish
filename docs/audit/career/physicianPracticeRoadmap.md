# Audit: physicianPracticeRoadmap

**Syllabus**: [`src/data/syllabi/career/physician_practice_roadmap.md`](../../../src/data/syllabi/career/physician_practice_roadmap.md)
**Track id**: `physicianPracticeRoadmap`
**Tier**: career
**Status**: `playable`
**Region**: US (references RVUs, copays, prior auth, eligibility verification, payer rules; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Practice Model and Patient Access | ✅ | Template design, portal scheduling, panel pause, new-patient bottleneck, telehealth fit, referral leakage |
| 2. Front Desk and Visit Flow | ✅ | Check-in delay, copay bottleneck, eligibility surprise, late insurance discovery, clipboard pileup, interpreter timing |
| 3. Clinical Support and Provider Productivity | ✅ | Rooming standard, MA inbox shuffle, refill inbox volleyball, standing orders, vaccine fridge, lab follow-up drift |
| 4. Revenue Cycle and Documentation | ✅ | Missing procedure note, template copy-forward, uncaptured injection, denied preventive visit, superbill shortcut, self-pay estimate |
| 5. Service, Staffing, Practice Improvement | ✅ | Lobby waits, cross-cover chaos, referral black hole, MA cross-training, checkout maze, Monday phone surge |

Full coverage across all five chapters with strong variety of clinic-operations scenarios.

**Chapter taxonomy mismatch.** Two competing schemes:
- RoadmapHealthcare uses chapter names that closely mirror the syllabus
- RoadmapPracticePolish3 uses prefix-style "Physician Practice Ops: Schedule Design" etc

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts` → physicianPracticeRoadmap (lines 215–306)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) | ~18 | **FIX** | Solid clinic-ops content. Every wrong answer uses the file-wide `DEFAULT_FLAW` constant. Rewrite per-distractor explanations and this becomes the canonical bank. Chapter names already align with the syllabus. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts` → physicianPracticeRoadmap (line 82)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare** | Adds novel scenarios (portal-vs-phone scheduling, MA inbox standards, uncollected self-pay, cross-cover, vaccine fridge excursion). Same DEFAULT_FLAW pattern. Lift novel items, fix distractors on merge. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts` → physicianPracticeRoadmap (line 82)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Overlap with TopOff on template/checkout/refill themes. Salvageable: template locked-up, clipboard pileup, inbox volleyball, charge-capture injection, telehealth mismatch, referral leakage. Cut the rest. |
| [`careerAgentGeneratedRoadmapPracticePolish3.ts` → physicianPracticeRoadmap (lines 119–140)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish3.ts) | 4 | **DELETE** | Uses incompatible chapter taxonomy. Content (packed template, referral leakage, panel management, phones on fire) duplicates RoadmapHealthcare triplet items. Different DEFAULT_FLAW string adds maintenance cost without content win. |

**Net effect**: 54 questions across 4 files → ~30 questions in 1 canonical file.

## Open actions (priority order)

1. **Per-distractor rewrite for the RoadmapHealthcare triplet's physicianPracticeRoadmap block** (~50 items × ~4 min each ≈ 3.5 hours).
2. **Consolidate the triplet** into one file, deduplicating overlaps from TopOff + FinalTopOff.
3. **Delete the PracticePolish3 4-item block** for this track.
4. **Add `region: 'US'` and `lastReviewed: <date>`** tags to the track entry in [`src/data/ageCatalog/career.ts:643`](../../../src/data/ageCatalog/career.ts) — copay collection, RVU productivity language, prior-auth norms, telehealth rules are US-specific and change yearly.
5. **Check the documentation-compliance items** (template copy-forward, superbill shortcut, denied preventive visit) for fact-pattern dependence — these slide close to billing-compliance territory and may benefit from per-distractor reasoning that explicitly names the risk (audit, denial, repayment).

## Estimated effort

- Distractor rewrite + consolidation: ~6 hours
- Delete PracticePolish block: 15 min
- Region/date tagging + compliance-item review: 1 hour

**~1 working day.** Coverage is strong; the work is quality polish.

## Notes for next auditor

This track sits at the intersection of `hospitalAdministrationRoadmap` (administrative judgment), `medicalBillingRoadmap` (revenue cycle), and `nursingFloorOpsRoadmap` (clinical support) — scenarios sometimes drift across boundaries. When consolidating, keep the lens specifically on outpatient practice manager / clinic operations and route hospital-floor scenarios elsewhere. The `careerAgentGeneratedHealthcareAppliedTopOff.ts` file does NOT feed this track (it routes to `medicalCodingCpc` and the clinical-research family); not a source here.
