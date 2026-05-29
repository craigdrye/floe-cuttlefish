# Audit: defenseBudgetingRoadmap

**Syllabus**: [`src/data/syllabi/career/defense_budgeting_roadmap.md`](../../../src/data/syllabi/career/defense_budgeting_roadmap.md)
**Track id**: `defenseBudgetingRoadmap`
**Tier**: career
**Region**: **US-only** (PPBE/POM/BES, color of money, ADA, bona fide need, severable services, advance procurement, working-capital funds, congressional marks, reclamas). Not currently tagged. Add `region: 'US'` to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 588. **Add `lastReviewed`** — content references thresholds and authorities that change with NDAA/appropriations cycles.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Defense Money Flow | ✅ | Obligation-vs-outlay, commitment checkpoint, reprogramming lane, receipt-vs-authority, unliquidated obligations. |
| 2. PPBE and Program Decisions | ✅ | Decision lane, POM wedge, sponsor trade space, scenario stress test, pilot sustainment bill. |
| 3. Appropriations and Fiscal Law | ✅ | Wrong-color, CR caution, bona fide need, severable services, split funding, gift with strings, ADA. Strongest area. |
| 4. Spend Plans and Execution Reviews | ✅ | Burn-rate miss, timing vs scope, phasing rescue, deobligation, invoice pileup, at-risk award stack. |
| 5. Budget Communication and Oversight | ✅ | UFR screen, leadership ask, congressional Q prep, one-slide story, congressional marks, wish-list discipline. |
| Capstone (analyst pack across all five outputs) | ❌ | No integrated multi-output scenario. |

Coverage is broad; the gap is **specificity and capstone integration**. The May 2026 "generic vs Finance" verdict holds: questions rarely name the authority (31 USC 1502, FAR Part 17, Section 1206/333) — they describe the vibe of the constraint.

**Chapter taxonomy mismatch.** `RoadmapGovernment` + `GovernmentTopOff` use the five syllabus chapter names literally ✅. `RoadmapGovTechFinalTopOff` uses `Defense Budgeting: Execution Discipline / Program Review / Obligation Planning` ❌. `RoadmapPracticePolish` uses `Defense Budgeting: POM Build / Execution` ❌. Realign the two non-conforming schemes.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapGovernment.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovernment.ts) (line 123) | 18 | **FIX** | Solid foundation — chapter names match syllabus, scenarios are concrete. **`DEFAULT_FLAW` — auto-FIX.** Rewrite per-distractor explanations naming the specific authority; promote to canonical. |
| [`careerAgentGeneratedRoadmapGovernmentTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovernmentTopOff.ts) (line 31) | 16 | **MERGE → RoadmapGovernment** | Additive (advance procurement, gift with strings, working-capital surprise). Same chapter scheme. **`DEFAULT_FLAW`.** |
| [`careerAgentGeneratedRoadmapGovTechFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovTechFinalTopOff.ts) (line 31) | 16 | **MERGE → RoadmapGovernment (partial), DELETE rest** | Heavy overlap with first TopOff (dormant travel ≈ training fund, midstream reprogramming ≈ reprogramming lane, year-end alternate use ≈ deobligation). Salvageable: depot working-capital rate, joint cost split, congressional marks, EVM mismatch, plain-language briefing (~5–7 questions). **`DEFAULT_FLAW`.** |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) (line 75) | 4 | **DELETE** | Wish-list, obligation lag, marks, emergent-need reprogramming — all covered better elsewhere. Incompatible chapter taxonomy. **`DEFAULT_FLAW`.** |

**Net effect**: 54 questions across 4 files → ~30 in 1 canonical file, with per-distractor explanations, specific-authority distractors, and the syllabus chapter taxonomy.

## Open actions (priority order)

1. **Add `region: 'US'` and `lastReviewed`** to the track entry. Fiscal-law content rots with each NDAA cycle.
2. **Per-distractor authority rewrite** of the Government base file: replace "potential fiscal-law issue" with "potential 31 USC 1301(a) purpose violation"; replace "advance procurement is authorized" with "10 USC 2306b multi-year procurement vs annual full funding". This directly addresses the May 2026 "generic vs Finance" finding.
3. **Consolidate the TopOff + GovTechFinalTopOff** into the base file. Dedupe; keep ~5–7 novel scenarios from each. Realign GovTechFinalTopOff chapter names to syllabus.
4. **Delete the PracticePolish block.**
5. **Author 3–5 capstone questions** that string together the syllabus's "analyst pack" deliverables (funds-flow map → PPBE decision note → fiscal-law checklist → variance brief → leadership packet).

## Estimated effort

- Per-distractor + specific-authority rewrite (18 base questions × 25 min): ~7 hours
- Consolidation + dedupe of TopOff + GovTech (16+16 → ~12): ~5 hours
- Capstone authoring + delete + chapter rename + tags: ~3 hours

**~2 working days.** The largest content lift in the cluster.

## Notes for next auditor

`RoadmapGovernment` is the highest-quality starting point in the cluster — chapter taxonomy already matches the syllabus. The work is replacing `DEFAULT_FLAW` with authority-naming distractors; this should then be the template for the other Government-cluster files (which also live in `RoadmapGovernment.ts` alongside `bankComplianceAml`, `procurementContracting`, `nationalSecurityPolicy`).
