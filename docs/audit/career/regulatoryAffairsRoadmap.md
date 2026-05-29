# Audit: regulatoryAffairsRoadmap

**Syllabus**: [`src/data/syllabi/career/regulatory_affairs_roadmap.md`](../../../src/data/syllabi/career/regulatory_affairs_roadmap.md)
**Track id**: `regulatoryAffairsRoadmap`
**Tier**: career
**Region**: Mixed — 510(k), PMA, FDA cues alongside ICH/EMA references. **Region tag needed; `lastReviewed` essential** — regulatory pathways drift annually with FDA guidance updates and EU MDR/IVDR refinements.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Regulatory Role and Product Profile | ✅ | Product profile first, claim creep in roadmap, jurisdiction split, claim grows teeth |
| 2. Pathways and Agency Questions | ✅ | Agency question (presub), predicate comparison, deficiency response, predicate doubt |
| 3. Evidence and Submission Readiness | ✅ | Evidence gap, traceability matrix, bench test mismatch, human factors miss, predicate difference |
| 4. Labeling, Claims, and Promotional Review | ✅ | Promotional drift, label contradiction, training slide claim, social media post, IFU translation shortcut, webpage drift |
| 5. Change Control and Post-Market Duties | ✅ | Design change trigger, complaint trend, field correction decision, supplier change, algorithm threshold, MDR clock anxiety |

Coverage is solid across all 5 chapters.

**Chapter taxonomy mismatch.** Three competing schemes:
- `RoadmapHealthcare.ts` uses chapter names that loosely match syllabus ("Regulatory Role and Product Profile", "Pathways and Agency Questions", "Evidence and Submission Readiness", "Labeling, Claims, and Promotional Review", "Change Control and Post-Market Duties") — good
- `RoadmapHealthcareTopOff.ts` switches to ("Regulatory Strategy", "Submission Planning", "Labeling and Promotion", "Change Control", "Postmarket and Vigilance") — different
- `RoadmapHealthcareFinalTopOff.ts` repeats TopOff's taxonomy
- `QualificationsAppliedPolish.ts` uses "Regulatory Affairs: Submission Strategy" prefix style
- `CareerFrontDoorPolish.ts` uses "Regulatory Affairs: Pathway" prefix style

## Per-file recommendations

| File | RA Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapHealthcare.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcare.ts) (regulatoryAffairsRoadmap, lines 859–950) | 18 | **FIX** | Strong scenarios with syllabus-aligned chapter names (product profile first, evidence gap, claim creep, predicate comparison, supplier sterilization, human factors miss, jurisdiction split). Auto-FIX: every distractor uses file-wide `DEFAULT_FLAW`. Per-distractor rewrite → canonical bank. |
| [`careerAgentGeneratedRoadmapHealthcareTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareTopOff.ts) (regulatoryAffairsRoadmap, 16 q's) | 16 | **MERGE → RoadmapHealthcare** | Genuinely novel content (claim grows teeth, missing predicate logic, supplier site move, complaint cluster, market expansion, IFU translation shortcut, MDR clock anxiety, accessory question, training as risk control, packaging material swap, field correction wording, evidence before claim). Chapter taxonomy differs — needs realignment. Lift novel scenarios. |
| [`careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapHealthcareFinalTopOff.ts) (regulatoryAffairsRoadmap, 16 q's) | 16 | **MERGE → RoadmapHealthcare (partial), DELETE rest** | Substantial overlap with TopOff (claim line grows, test report pile, supplier swap, deficiency answer miss, training claim, manufacturing site move). Salvageable: webpage drift, distributor translation, algorithm threshold, reportability clock, wellness boundary, field correction whisper (~6 questions). Realign chapter names. |
| [`careerAgentGeneratedQualificationsAppliedPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsAppliedPolish.ts) (regulatoryAffairsRoadmap, 4 q's, lines 141–162) | 4 | **DELETE** | Generic (predicate doubt, claim creep, supplier switch, defensive response). All concepts covered better in the RoadmapHealthcare triplet. Different `DEFAULT_FLAW` string. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (regulatoryAffairsRoadmap, ~4 q's, lines 581+ if present) | ~4 | **DELETE** | Generic predicate stretch, marketing claim creep, supplier switch, inspection readiness — all duplicated. Different `DEFAULT_FLAW` string. |

**Net effect**: ~58 RA-roadmap questions across 5 files → ~30 in 1 canonical syllabus-aligned bank.

## Open actions (priority order)

1. **Per-distractor rewrite** of base RoadmapHealthcare regulatoryAffairsRoadmap block (18 q's). ~3 hours.
2. **Consolidate triplet** — lift unique TopOff content, salvage ~6 questions from FinalTopOff, realign chapter names to syllabus's 5 chapters. ~3 hours.
3. **Delete** the two polish files' regulatoryAffairsRoadmap entries (8 questions).
4. **Add `region` metadata** — 510(k), De Novo, PMA, MDR are US-specific; CE-mark/MDR/IVDR are EU. Default `regions: ['US', 'EU']` where applicable.
5. **Add `lastReviewed` metadata** — every question — regulatory guidance updates regularly.
6. **Cross-reference with `regulatory` track audit** — significant overlap; ensure the two banks serve different purposes (this Roadmap = entry-level workplace fluency; the other = RAC-style deeper certification prep).

## Estimated effort

- Per-distractor rewrite of base: ~3 hours
- Triplet consolidation: ~3 hours
- Polish deletion: 10 min
- Region + `lastReviewed` tagging: ~45 min

**~7 hours.**

## Notes for next auditor

This track and the `regulatory` track are siblings — 5-chapter workplace fluency vs 8-chapter certification prep. The healthcare cluster has this same split for coding (CPC vs Roadmap). The pattern itself is reasonable for Floe (let users pick depth), but the questions overlap heavily and the chapter taxonomies do not align across files. The cluster should decide: are chapters defined per track, or shared across the two regulatory tracks? Currently it's neither — each file invents its own.

A worthwhile cross-cluster fix: every healthcare specialist roadmap track (this one, `medicalBillingRoadmap`, `medicalCodingRoadmap`, `pharmaDrugSafetyRoadmap`, `healthcareComplianceRoadmap`, `healthInsurancePayersRoadmap`, etc.) uses the same RoadmapHealthcare + TopOff + FinalTopOff triplet pattern, same `DEFAULT_FLAW`, same chapter-drift between TopOff and FinalTopOff. One distractor-rewrite pass and one chapter-realignment pass would lift all 10 healthcare roadmap tracks at once. Estimate: ~2 days for the cluster vs ~7 hours per individual track.
