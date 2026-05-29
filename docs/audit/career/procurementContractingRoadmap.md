# Audit: procurementContractingRoadmap

**Syllabus**: [`src/data/syllabi/career/procurement_contracting_roadmap.md`](../../../src/data/syllabi/career/procurement_contracting_roadmap.md)
**Track id**: `procurementContractingRoadmap`
**Tier**: career — **discipline mismatch**: syllabus is generic procurement (vendor-management, RFQ/RFP), but the question content is unmistakably **US federal contracting** (FAR-style fairness, debriefings, protests, set-asides, T&M ceilings, data rights, sole-source justification). Ageing-catalog discipline currently `'Government'` — that's right for the content; the syllabus framing should be tightened to match.
**Region**: **US-only** (FAR, CICA-style competition, FAR Part 19 set-asides, FAR Part 33 protests, debriefing requirements, FAR Part 17 severable services, FAR Part 27 data rights). Not currently tagged. Add `region: 'US'` to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 599. **Add `lastReviewed`** — FAR clauses revise annually.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Requirements and Acquisition Planning | ✅ | Need before solution, market-research receipt, stakeholder soup, outcome rewrite, acceptance gap. |
| 2. Sourcing and Solicitation | ✅ | Criteria mismatch, vendor Q log, amendment needed, set-aside, incumbent advantage. |
| 3. Pricing and Contract Types | ✅ | Fixed-price fit, cost realism, T&M brakes, price analysis anchor, labor-category fog. |
| 4. Evaluation, Negotiation, and Award | ✅ | Tradeoff rationale, past-performance nuance, discussions discipline, nice-demo trap. |
| 5. Contract Administration and Closeout | ✅ | Scope-creep fork, closeout evidence, invoice mismatch, performance cure path. |
| (Implied US: protests, debriefings, data rights) | ✅ | Protests/debriefings, data rights. |
| Capstone (full procurement file) | ❌ | No integrated multi-output scenario. |

Coverage is broad and scenarios are concrete. The gap is **specificity**: questions test the judgment of cost realism but never cite FAR 15.404-1; the protest discussion never names GAO vs COFC; set-asides never name FAR Part 19; severable services never cite FAR 37.106 / 31 USC 1502; debriefings never name FAR 15.506. May 2026 "generic vs Finance" verdict applies.

**Chapter taxonomy mismatch.** `RoadmapGovernment` + `GovernmentTopOff` use the five syllabus chapter names literally ✅. `RoadmapGovTechFinalTopOff` and `RoadmapPracticePolish` both use prefixed `Procurement: …` labels ❌. Realign.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapGovernment.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovernment.ts) (line 215) | 18 | **FIX** | Strong base — chapter names match syllabus, scenarios cover all five chapters plus protest content. **`DEFAULT_FLAW` — auto-FIX.** Rewrite per-distractor naming FAR parts/clauses; canonical. |
| [`careerAgentGeneratedRoadmapGovernmentTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovernmentTopOff.ts) (line 113) | 16 | **MERGE → RoadmapGovernment** | Additive (outcome rewrite, incumbent advantage, labor-category fog). Same chapter scheme. **`DEFAULT_FLAW`.** |
| [`careerAgentGeneratedRoadmapGovTechFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovTechFinalTopOff.ts) (line 113) | 16 | **MERGE → RoadmapGovernment (partial), DELETE rest** | Heavy overlap (only-one-familiar-vendor ≈ market-research, nice-demo trap ≈ criteria mismatch, final-invoice mismatch ≈ invoice mismatch). Salvageable: data rights, debriefing prep, acceptance-gap (~5–7 questions touching FAR content the base lacks). **`DEFAULT_FLAW`.** |
| [`careerAgentGeneratedRoadmapPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish.ts) (line 97) | 4 | **DELETE** | Solution-as-need, best-value fog, deliverable drift, past-performance — all covered in base. **`DEFAULT_FLAW`.** |

**Net effect**: 54 questions across 4 files → ~30 in 1 canonical file with per-distractor FAR-citing explanations and the syllabus chapter taxonomy.

## Open actions (priority order)

1. **Add `region: 'US'` and `lastReviewed`** — FAR clauses revise annually.
2. **FAR-citing per-distractor rewrite** of the base file: e.g. "FAR 15.303(b)(4) requires evaluation per published factors"; "FAR 15.306(e) limits exchanges during discussions"; "FAR 19.502-2 Rule of Two" for set-asides. Directly addresses May 2026 finding.
3. **Tighten the syllabus** to acknowledge the US-federal framing (or split into `federalContractingRoadmap` US-tagged + generic `procurementRoadmap`).
4. **Consolidate** the two TopOff files into the base; delete PracticePolish; realign GovTechFinalTopOff chapter names.
5. **Author 3–5 capstone questions** walking the "procurement file" deliverables (acquisition plan → solicitation → pricing memo → source-selection summary → admin tracker).

## Estimated effort

- FAR-citing + per-distractor rewrite (18 base questions × 30 min): ~9 hours
- Consolidation of TopOff + GovTech (16+16 → ~12 net new): ~5 hours
- Syllabus tightening, capstone, delete, chapter rename, tags: ~3 hours

**~2 working days.**

## Notes for next auditor

Best test of the "Finance benchmark" in the cluster — coverage is wide, only named-authority distractor rigor is missing. After the FAR-citing rewrite, this is the model for `defenseBudgetingRoadmap` (USC) and `nationalSecurityPolicyRoadmap` (Title 10/50, IEEPA, AECA). Pair with `customsBroker` (same US regulatory-citation pattern).
