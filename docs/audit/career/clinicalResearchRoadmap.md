# Audit: clinicalResearchRoadmap

**Syllabus**: [`src/data/syllabi/career/clinical_research_roadmap.md`](../../../src/data/syllabi/career/clinical_research_roadmap.md)
**Track id**: `clinicalResearchRoadmap`
**Tier**: career
**Status**: `playable`
**Region**: US (assumed throughout — IRB, FDA, ICH GCP; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Trial Ecosystem and Site Roles | ✅ | RoadmapHealthcare "Role and Ecosystem" + CoreRoadmapPolish "Startup" |
| 2. Consent, Eligibility, Visit Planning | ✅ | RoadmapHealthcare "Consent and Eligibility" chapter |
| 3. Source Documentation and Data Quality | ✅ | RoadmapHealthcare + TopOff + FinalTopOff source/CRF chapters |
| 4. Safety, Deviations, Escalation | ✅ | RoadmapHealthcare "Safety and Reporting" / "Deviations and CAPA" |
| 5. Monitoring, Closeout, Inspection Readiness | ✅ | RoadmapHealthcare + CoreRoadmapPolish "Monitoring" / "Closeout" |

Full coverage on paper — but quality is the issue, not coverage. See per-file recommendations.

**Chapter taxonomy mismatch.** Three competing schemes in use:
- `RoadmapHealthcare` family uses chapters like "Trial Roles and Ecosystem", "Source and Data Quality", "Safety and Reporting" — close to but not literally the syllabus names
- `CoreRoadmapPolish` uses "Clinical Research Roadmap: Startup", "Clinical Research Roadmap: Monitoring" — prefix-style with different anchor names
- The syllabus itself uses "Trial Ecosystem and Site Roles", "Consent, Eligibility, and Visit Planning", etc.

All three should be realigned to the syllabus.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts` → clinicalResearchRoadmap (lines 491–674)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) | ~18 | **FIX** | Strong scenario coverage (delegation log, deviation classification, monitor query, IP accountability, closeout) but every wrong answer uses the file-wide `DEFAULT_FLAW` constant. Rewrite per-distractor explanations, align chapter names to syllabus, become the canonical bank. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts` → clinicalResearchRoadmap (line 136)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare** | Adds novel scenarios (lab handling, blinding protection, remote monitoring, vendor oversight). Same DEFAULT_FLAW pattern. Lift novel content into the main file, fix distractors during the merge. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts` → clinicalResearchRoadmap (line 136)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Substantial overlap with TopOff. Salvageable: PI batch-signature trap, randomization envelope, audit trail rationale, AE coding fidelity. Cut the rest. |
| [`careerAgentGeneratedCoreRoadmapPolish.ts` → clinicalResearchRoadmap (lines 185–206)](../../../src/data/questionCatalog/careerAgentGeneratedCoreRoadmapPolish.ts) | 4 | **DELETE** | Same DEFAULT_FLAW issue; concepts (startup gates, monitoring follow-up, safety-vs-protocol, closeout archive) all duplicate higher-quality items in `jargonBusters.ts` and the RoadmapHealthcare triplet. |
| [`jargonBusters.ts` → clinicalResearchJargonQuestions](../../../src/data/questionCatalog/jargonBusters.ts) | ~20 | **KEEP** | Wired to `clinicalResearchJargon` track but the content also applies here. Gold-standard voice; reference for new authoring. |

**Net effect**: 54 generated Qs across 4 files → ~30 questions in 1 canonical file with proper distractor explanations + jargonBusters available on sibling track.

## Open actions (priority order)

1. **Author the DEFAULT_FLAW rewrite for the RoadmapHealthcare triplet** clinicalResearchRoadmap blocks (~50 items × ~4 min for per-distractor lines ≈ 3.5 hours).
2. **Consolidate the triplet** into one file with syllabus-aligned chapter names ("Trial Ecosystem and Site Roles" etc), de-duplicating overlaps from TopOff + FinalTopOff.
3. **Delete the 4-item CoreRoadmapPolish block** for this track.
4. **Resolve track duplication with `clinicalResearch` (CRC)** — see that audit doc. The two tracks have substantially identical syllabi and should either be merged or sharply differentiated.
5. **Add `region: 'US'` and `lastReviewed: <date>`** to the track entry in [`src/data/ageCatalog/career.ts:676`](../../../src/data/ageCatalog/career.ts).

## Estimated effort

- Distractor rewrite + consolidation: ~6 hours
- Delete CoreRoadmapPolish block: 15 min
- Track-duplication decision: 1–2 hours scoping
- Region/date tagging: 15 min

**~1 working day** plus the cross-track architectural decision.

## Notes for next auditor

This track is one of three (with `clinicalResearch` and `socraAcrp`) covering essentially the same site-level CRC content. The whole healthcare-roadmap family (`hospitalAdministrationRoadmap`, `nursingFloorOpsRoadmap`, `physicianPracticeRoadmap`, `clinicalResearchRoadmap`, `healthcareComplianceRoadmap`, `healthInsurancePayersRoadmap`, plus `medicalBillingRoadmap`/`medicalCodingRoadmap`/`pharmaDrugSafetyRoadmap`/`regulatoryAffairsRoadmap`) follows identical triplet structure (base + TopOff + FinalTopOff) with identical DEFAULT_FLAW patterns. A single batch rewrite pass could address all of them together.
