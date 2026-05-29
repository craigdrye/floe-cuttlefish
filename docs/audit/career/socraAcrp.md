# Audit: socraAcrp (SOCRA / ACRP Clinical Research)

**Syllabus**: [`src/data/syllabi/career/socra_acrp.md`](../../../src/data/syllabi/career/socra_acrp.md)
**Track id**: `socraAcrp`
**Tier**: career
**Status**: `playable`
**Region**: US (assumed — SOCRA/ACRP US certifications, FDA guidance, ICH GCP; not currently tagged)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. GCP Foundations and Research Responsibilities | ✅ | Hand-written `GCP Dock` / `Role Clarity Shoals` (Q 6961, 6967) |
| 2. Informed Consent and Participant Protection | ✅ | Hand-written `Consent Reef` (Q 6962, re-consent judgment) |
| 3. IRB Review and Essential Regulatory Documents | ❌ | **Gap.** No questions on IRB approval, amendments, investigator brochure, FDF, delegation/training logs at this track |
| 4. Eligibility, Protocol Visits, and Deviations | ✅ | Hand-written `Deviation Bay` (Q 6965, deviation significance) |
| 5. Source Documentation and Data Integrity | ✅ | Hand-written `Data Integrity Cove` / `Monitor Shelf` (Q 6963, 6966) |
| 6. Safety Reporting and Medical Oversight | ✅ | Hand-written `Safety Lagoon` (Q 6964, AE vs workflow delay) |
| 7. Investigational Product Accountability | ❌ | **Gap.** No questions on IP randomization, blinding, temperature excursions, dispensing |
| 8. Monitoring, Audit Readiness, and Closeout | ✅ | Hand-written `Inspection Lagoon` (Q 6968, readiness substance vs cosmetics) |

Only **8 hand-authored questions** wire to this track today (lines 1508–1517 in career.ts). Coverage is concept-thin across 6 of 8 chapters and absent for Chapters 3 and 7.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts` → socraAcrp block (lines 1508–1517)](../../../src/data/questionCatalog/career.ts) | 8 | **KEEP** | Hand-authored with proper per-distractor reasoning. Voice is calm and certification-appropriate ("Inspection readiness... actual practices consistently align with the protocol"). Each item has its own teaching note. Matches the syllabus's tone direction ("inspection-ready habits"). |
| No generated files feed this track | 0 | n/a | None of the careerAgentGenerated* healthcare or jargon files contain a `socraAcrp` block. Searched: RoadmapHealthcare/TopOff/FinalTopOff, HealthcareAppliedTopOff, RegulatoryMedicalTopOff, JargonGovClinicalTopOff, PracticePolish 1–4, CoreRoadmapPolish, JargonPracticePolish. Confirmed clean. |
| [`jargonBusters.ts` → clinicalResearchJargonQuestions](../../../src/data/questionCatalog/jargonBusters.ts) | ~20 | **POTENTIAL MERGE source** | Wired to `clinicalResearchJargon` only, but content (IP locker, lab lagoon, monitoring bay, inspection lagoon, deviation channel, PI oversight) is directly relevant to SOCRA/ACRP exam prep. Consider routing a curated subset to this track as well — would close several syllabus gaps with already-excellent content. |

**Net effect**: 8 questions today → 8 KEEP + ~15–20 newly authored to close Chapters 3 and 7 and deepen others. Total ~25–30 syllabus-aligned questions. Optionally augment with a curated 8–10 from jargonBusters.

## Open actions (priority order)

1. **Author 15–20 new items** to close gaps:
   - Chapter 3 (IRB approval timing, continuing review, amendments, IB updates, FDF, delegation log)
   - Chapter 7 (IP accountability reconciliation, blinding maintenance, randomization concealment, temperature excursion handling, dispensing errors, returns)
   - Depth additions to thin chapters (1, 2, 4, 6, 8)
   Voice template: existing socraAcrp items + jargonBusters.
2. **Add `region: 'US'` and `lastReviewed: <date>`** to the track entry in [`src/data/ageCatalog/career.ts:357`](../../../src/data/ageCatalog/career.ts). SOCRA CCRP and ACRP are US-based certifications. ICH GCP and FDA references update periodically.
3. **Resolve track duplication with `clinicalResearch` (CRC) and `clinicalResearchRoadmap`** — see those audit docs. The three syllabi overlap heavily. Possible differentiation: `socraAcrp` = certification exam prep, `clinicalResearch` = CRC role training, `clinicalResearchRoadmap` = "what is clinical research" front door. If kept separate, each needs distinct content emphasis.
4. **Consider routing curated jargonBusters items** (the 20 hand-written entries are gold-standard and directly applicable). Lower-effort than authoring from scratch.

## Estimated effort

- New authoring (18 Qs × 20 min): ~6 hours
- Optional jargonBusters curation: ~1 hour to pick items + 1 hour to add wiring
- Region/date tagging: 15 min
- Track-duplication architectural decision: 1–2 hours scoping

**~1 working day** for content additions; the architectural decision could change scope significantly.

## Notes for next auditor

This track is paradoxically *clean* (no DEFAULT_FLAW-laden generated content) but *thin* (only 8 questions). The opposite problem from the roadmap family. If the agent-generation strategy resumes, ensure socraAcrp is explicitly included — but only with a per-distractor-aware `q()` helper, not the boilerplate `q()` used in the healthcare-roadmap family. Compare also with `ccep` and `crcm` (compliance certifications) and `cfaLevelOne` / `cpaExam` / `barExam` (other professional exam tracks) for patterns of how certification-prep tracks have been built in this catalog.
