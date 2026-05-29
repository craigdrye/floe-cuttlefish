# Audit: regulatory (Regulatory Affairs)

**Syllabus**: [`src/data/syllabi/career/regulatory_affairs.md`](../../../src/data/syllabi/career/regulatory_affairs.md)
**Track id**: `regulatory`
**Tier**: career
**Region**: Mixed — uses FDA-centric concepts (510(k), De Novo, PMA, BIMO, MDR) alongside EMA/ICH references. **Region tag needed; `lastReviewed` essential** — RAPS RAC content, FDA guidances, EU MDR/IVDR all evolve.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Regulatory Role and Product Lifecycle | ✅ | Intended-use compass, classification puzzle, claim grows teeth |
| 2. Pathways and Agency Interactions | ✅ | Agency question, predicate stretch, deficiency response, presubmission meeting homework |
| 3. Evidence, Clinical Development, and Good Practice | ✅ | Evidence gap, traceability matrix, pilot study overreach, real-world data temptation, bench test mismatch |
| 4. Submission Planning and Document Quality | ✅ | Table of contents rescue, submission strategy gap, reviewer asked twice, gap analysis |
| 5. Labeling, Advertising, and Claims Discipline | ✅ | Promotional drift, sales deck side quest, label contradiction, social media post, white paper with a halo, training slide claim |
| 6. Quality Systems and Change Control | ✅ | Algorithm tune-up, supplier resin surprise, packaging material swap, change control linkage |
| 7. Post-Market Surveillance and Vigilance | ✅ | Complaint cluster, complaint trend, MDR clock, field correction wording, complaint with a pattern |
| 8. Global Strategy and Regulatory Judgment | ✅ | Same product different passport, EU claim meets US plan, jurisdiction split, distributor shortcut |

Excellent coverage across all eight chapters. **This is the most syllabus-aligned content in the cluster.**

**Chapter taxonomy mismatch.** Three competing schemes:
- `careerAgentGeneratedApplied.ts` uses "Regulatory Pathways and Evidence", "Submission Strategy and Change Control", "Labeling and Promotion" etc. — close to syllabus
- `careerAgentGeneratedRegulatoryMedicalTopOff.ts` uses "Intended Use and Claims", "Change Control", "Submissions and Deficiency Response", "Inspection Response", "Labeling and Instructions", "Jurisdiction Differences", "Evidence and Claims", "Post-Market Reporting" etc. — different, broadly aligned
- `careerAgentGeneratedCareerFrontDoorPolish.ts`, `careerAgentGeneratedProfessionalPracticePolish.ts` use "Regulatory Affairs: ..." prefix style — fragmented

## Per-file recommendations

| File | Reg Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedApplied.ts`](../../../src/data/questionCatalog/careerAgentGeneratedApplied.ts) (regulatory, lines 123+) | ~18 | **FIX → canonical** | Strong scenarios with **per-distractor explanations actually written** (intended-use compass, risk-class backpack, traceability trail, gap-analysis goblin). Voice matches the medical reasoning bank. Realign chapter names to syllabus's 8-chapter scheme. |
| [`careerAgentGeneratedRegulatoryMedicalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRegulatoryMedicalTopOff.ts) (regulatory, 32 q's, lines 31–192) | 32 | **FIX** | Real novel content (wellness word with teeth, demo mode promises, supplier resin surprise, CAPA that keeps coming back, IFU missing the hard part, pilot study overreach, deadline with missing inputs, real-world data temptation, white paper with a halo, residual risk in plain clothes, regulatory learns last). Auto-FIX: file-wide `DEFAULT_FLAW`. Per-distractor rewrite → MERGE → Applied. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (regulatory, ~4 q's, lines 581+) | ~4 | **DELETE** | Generic versions of claim creep, supplier switch, inspection readiness — all covered with better scenarios in the TopOff. Different `DEFAULT_FLAW` string. |
| [`careerAgentGeneratedProfessionalPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedProfessionalPracticePolish.ts) (regulatory, ~4 q's, lines 75–96) | ~4 | **DELETE** | Generic (borderline product, quiet algorithm update, scattered complaint reports, thin performance claim). All four already covered in Applied + TopOff with sharper scenarios. Different `DEFAULT_FLAW` string. |

**Net effect**: ~58 regulatory questions across 4 files → ~40 in 1 canonical syllabus-aligned bank.

## Open actions (priority order)

1. **Per-distractor rewrite** of RegulatoryMedicalTopOff regulatory block (32 q's). Content is excellent; just needs the distractor reasoning. ~3.5 hours.
2. **Consolidate** Applied + RegulatoryMedicalTopOff into one canonical "regulatory" bank. Align chapter names to syllabus's 8 chapters. ~2 hours.
3. **Delete** the two polish files' regulatory entries (8 questions).
4. **Add `region` metadata** — 510(k), De Novo, PMA, MDR, BIMO are US-specific; CE/MDR/IVDR are EU. Many questions are dual-jurisdiction. Consider `regions: ['US']`, `regions: ['EU']`, or `regions: ['global']` tagging.
5. **Add `lastReviewed` metadata** — RAPS RAC, FDA guidances, EU MDR all change frequently. This is the most regulation-density-heavy track besides PV.
6. **Verify the `status: 'playable'` flag** holds true given the volume of high-quality content.

## Estimated effort

- Per-distractor rewrite of TopOff: ~3.5 hours
- Consolidation + chapter realignment: ~2 hours
- Polish deletion: 10 min
- Region + `lastReviewed` tagging: ~1 hour (heaviest in the cluster)

**~7 hours.**

## Notes for next auditor

This is the highest-quality healthcare specialist track in the catalog by scenario design. Both feeding files write scenarios that actually feel like a regulatory affairs lead would face them (sales deck drift, IFU missing the hard part, residual risk closure, distributor shortcut). The blocker is purely `DEFAULT_FLAW` in the TopOff — once that's rewritten, the bank stands up to the framework's quality bar without further authoring.

This track is **distinct from `regulatoryAffairsRoadmap`**. The `regulatory` track is the 8-chapter deeper course (RAC-style); `regulatoryAffairsRoadmap` is the lighter 5-chapter workplace-fluency version. Both have value. Verify whether learners encounter both or one based on path — if both, ensure no question id collisions and clear progression.

The voice (playful with regulatory bite — "wellness word with teeth", "claim grows teeth", "residual risk in plain clothes", "white paper with a halo") works well for the sober-but-not-grim audience this track serves.
