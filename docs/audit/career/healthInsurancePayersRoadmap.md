# Audit: healthInsurancePayersRoadmap

**Syllabus**: [`src/data/syllabi/career/health_insurance_payers_roadmap.md`](../../../src/data/syllabi/career/health_insurance_payers_roadmap.md)
**Track id**: `healthInsurancePayersRoadmap`
**Tier**: career
**Status**: `playable`
**Region**: **US-only** (Medicare Advantage, Medicaid managed care, HEDIS, Star Ratings, MSP rules; not currently tagged) — flag for region tagging.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Payer Ecosystem and Plan Design | ✅ | RoadmapHealthcare "Payer Ecosystem" + plan-design items |
| 2. Claims, Payment, and Provider Networks | ✅ | RoadmapHealthcare + TopOff (network adequacy, eligibility, contract terms) |
| 3. Utilization Management and Medical Policy | ✅ | RoadmapHealthcare "UM and Medical Policy" + PracticePolish4 "Coverage gray zone" / "Fast denial risk" |
| 4. Risk, Quality, and Value-Based Care | ⚠️ | Thin — HEDIS, Star Ratings, risk adjustment, value-based contracts barely surface in samples |
| 5. Member Experience, Compliance, Operations | ✅ | RoadmapHealthcare + PracticePolish4 "Same appeal, same denial", "Directory looks fine" |

Notable gap: **Chapter 4 (risk adjustment, HEDIS, Stars, value-based care) is under-served.** This is the strategically distinctive payer chapter — what makes payer ops different from generic claims work.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts` → healthInsurancePayersRoadmap (lines 767–858)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) | ~18 | **FIX** | Solid scenario coverage of payer ops (UM, COB, appeals, network, eligibility). Every wrong answer uses the file-wide `DEFAULT_FLAW` constant. Rewrite per-distractor explanations and align chapter names to the syllabus. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts` → healthInsurancePayersRoadmap (line 190)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare** | Novel content (medical-necessity criteria, member appeals, directory accuracy, COB edge cases). Same DEFAULT_FLAW pattern. Lift novel items, fix distractors on merge. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts` → healthInsurancePayersRoadmap (line 190)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) | ~16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Overlaps with TopOff on UM/appeals themes. Salvage 5–8 distinct items, cut the rest. |
| [`careerAgentGeneratedRoadmapPracticePolish4.ts` → healthInsurancePayersRoadmap (lines 75–96)](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish4.ts) | 4 | **MERGE → RoadmapHealthcare** | Uses different chapter naming ("Health Insurance: Medical Policy" vs syllabus "Utilization Management and Medical Policy"). Content is decent (coverage gray zone, fast-denial metric trap, directory accuracy, appeals quality) — lift the 4 items, rename chapters, drop the file's redundant track entry. |

**Net effect**: 54 questions across 4 files → ~30 questions in 1 canonical file + 8–10 new authored items for Chapter 4.

## Open actions (priority order)

1. **Tag region: 'US' urgently** in [`src/data/ageCatalog/career.ts:709`](../../../src/data/ageCatalog/career.ts). Medicare Advantage, Medicaid managed care, HEDIS, Star Ratings, MSP rules are all US-specific. Without the tag, this track will mislead non-US learners on launch.
2. **Add `lastReviewed: <date>`** — payer regulation (MA rules, MSP questionnaires, parity, surprise-billing) changes year to year.
3. **Author 8–12 items for Chapter 4** (risk adjustment coding pressure, RAF/HCC basics, HEDIS gap closure, Star Rating math, value-based contract structure, shared-savings math). Voice template: `jargonBusters.ts`.
4. **Consolidate the triplet + Polish4** into one file with syllabus-aligned chapter names.
5. **Rewrite per-distractor explanations** for the ~50 base/TopOff/FinalTopOff items as part of consolidation.

## Estimated effort

- Region/date tagging: 15 min
- Chapter 4 authoring (12 Qs × 20 min): ~4 hours
- Consolidation + per-distractor rewrite: ~6 hours

**~1.5 working days** to bring this track to syllabus-complete with the jargonBusters quality bar.

## Notes for next auditor

`medicalBillingRoadmap` overlaps this track on claims/eligibility/appeals language but from the provider side (denial follow-up, clean claims, A/R) vs payer side (UM decisions, coverage, network management). Keep the two distinct — the role lens matters — but watch for duplicative scenarios when both files are consolidated. The PracticePolish4 file also has the curious property of using the same DEFAULT_FLAW pattern with a different boilerplate string ("This answer sounds plausible, but it misses the operating judgment the role needs.") — it's a separate maintenance string from the base file with no content advantage.
