# Audit: consultingCases

**Syllabus**: [`src/data/syllabi/career/consulting_cases.md`](../../../src/data/syllabi/career/consulting_cases.md)
**Track id**: `consultingCases`
**Tier**: career (`ageGroup: 'career-hopper'`)
**Region**: Jurisdiction-neutral (consulting interview craft is global; US-firm names — McKinsey/BCG/Bain — in the syllabus's research notes only)
**Status**: `playable` — wired and serving questions

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What a Case Is Really Testing | ✅ | Clarify objective, hypothesis-led reasoning, structure-first instinct |
| 2. Structuring Without Sounding Robotic | ✅ | Issue trees, profit framework, market-entry frame, MECE-ish reasoning |
| 3. Business Math Under Time Pressure | ✅ | Revenue × volume × time, gross margin %, breakeven, market sizing, contribution margin |
| 4. Charts, Exhibits, and Data Pulls | ✅ | Chart-whisperer (onboarding-period churn), average-hides-segments, sanity-check exhibits |
| 5. Case Types and Pattern Recognition | ✅ | Operations bottleneck, pricing elasticity, M&A value-creation, public-sector mission metrics, declining-share puzzle |
| 6. Synthesis and Recommendation | ✅ | Recommendation-sandwich shape, evidence-glue, recommendation-with-risk |
| 7. Handling Pushback and New Information | ✅ | Interviewer curveball, math-recovery calm |
| 8. Full Case Practice and Interview Readiness | ⚠️ partial | One assumption-stating drill; no full-case-practice-plan or behavioral-fit content |

**Chapter taxonomy mismatch.** Three competing schemes:
- Base `consultingCases` block in `career.ts` uses bespoke locations ("Case Dock", "Case Reef", "Case Cove", "Case Lagoon")
- `careerAgentGeneratedCore1.ts` uses descriptive sub-topics ("Case Structure: Objective", "Market Entry", "Quantitative Analysis: Margin", "Pricing Cases", "M&A Cases")
- `CoreSupplementProductProject`, `CoreSupplementProductProject2`, `CoreFinalTopOff`, `CoreRoadmapPolish`, `CareerFrontDoorPolish` use a fourth ("Consulting Cases: Problem Structuring", "Consulting Cases: Math", "Consulting Cases: Recommendation")

## Per-file recommendations

| File | Cases Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) base `consultingCases` block | 4 | **KEEP (rename chapters)** | Hand-authored taster (structuring, profit frame, synthesis, driver tree). Light per-distractor explanations but clean and tonally on-target. |
| [`careerAgentGeneratedCore1.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCore1.ts) (`consultingCases` section) | ~18 | **FIX** | Strongest agent-generated cases content: chart-whisperer, factory bottleneck, pricing elasticity, M&A logic, public-sector metrics, math-recovery calm. All distractors use file-wide `DEFAULT_FLAW` constant → auto-FIX. Becomes canonical bank after rewrite. |
| [`careerAgentGeneratedCoreSupplementProductProject.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementProductProject.ts) (`consultingCases` section) | ~10 | **MERGE → Core1 + DELETE rest** | Adds genuinely novel scenarios. Salvage half, dedupe the rest against Core1. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedCoreSupplementProductProject2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementProductProject2.ts) (`consultingCases` section) | ~13 | **MERGE → Core1 (partial)** | Heavy overlap with Project1 and Core1. Salvage anything covering Chapter 7 (pushback) or Chapter 8 (interview-readiness drills) since those are thin. `DEFAULT_FLAW` → auto-FIX. |
| [`careerAgentGeneratedCoreFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreFinalTopOff.ts) (`consultingCases` section) | 4 | **MERGE → Core1** | Declining-share-puzzle and segment-average questions are good; contribution-margin restates Core1. Salvage 2, drop 2. |
| [`careerAgentGeneratedCoreRoadmapPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreRoadmapPolish.ts) (`consultingCases` section) | 4 | **DELETE** | Generic restatements of structuring and math basics. Different `DEFAULT_FLAW` string adds maintenance cost for no content win. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (`consultingCases` section) | 4 | **DELETE** | Front-door taster duplicates already-covered material. |

**Net effect:** ~57 cases questions across 7 files → ~4 hand-authored + ~30 fixed/merged in 1 canonical bank = ~34 questions of much higher quality.

## Open actions (priority order)

1. **Author 6–8 Chapter 8 questions** (full-case practice plan, behavioral fit, whiteboard hygiene, debrief discipline) — currently the chapter has one question.
2. **Author 3–5 Chapter 7 questions** (recalibration after new fact, acknowledging mistakes mid-case, scenario pivots, stress recovery) — Chapter 7 deserves more than the two it has, given how much interview prep is about composure.
3. **Consolidate the Core1 + CoreSupplementProductProject + Project2 + FinalTopOff consultingCases sections** into one file with per-distractor explanations and chapter names matching the syllabus.
4. **Realign chapter taxonomy** — recommend syllabus chapter names; retire the "Case Dock / Reef / Cove / Lagoon" scheme for this serious-interview track. (The nautical naming is fine for primary-tier brain-burners but feels off here.)
5. **No `lastReviewed` urgency** — case interview practice is not regulation-bound. Tagging is nice-to-have but not blocking.

## Estimated effort

- Per-distractor rewrite + consolidation: ~6 hours (~30 questions × ~12 min)
- Chapter 7 and 8 authoring: ~3 hours (~10 questions)
- Chapter-name realignment + DELETE pass: ~30 min

**~1 working day at this depth.**

## Notes for next auditor

This track is in better shape than the credential-heavy tracks in the cluster — most of the core syllabus is meaningfully covered and the agent-generated math content (revenue × volume × time, breakeven, gross margin %) is genuinely useful as interview drills. The bigger issue is volume noise: six files all generated similar questions about issue trees, profit frames, and synthesis. The product policy question is whether to keep 30 high-quality questions per chapter or 100 thinner ones. The framework points firmly at the former.
