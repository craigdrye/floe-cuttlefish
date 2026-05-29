# Audit: softwareEngineeringRoadmap

**Syllabus**: [`src/data/syllabi/career/software_engineering_roadmap.md`](../../../src/data/syllabi/career/software_engineering_roadmap.md)
**Track id**: `softwareEngineeringRoadmap`
**Tier**: career
**Region**: Jurisdiction-neutral. Engineering practice content; no regulatory framings.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Code, Review, Quality | ✅ | `RoadmapTech` "Risky diff", "Regression signal", `GovTechFinalTopOff` adds idempotency-on-webhook-retry |
| 2. Architecture and Tradeoffs | ✅ | "Tight coupling", "Breaking change API", "Service Ownership orphaned workload" |
| 3. Releases and Migrations | ✅ | "Dual write risk", "Feature flag", "Dependency upgrade major version" |
| 4. Incidents and Reliability | ✅ | "User impact first", "Observability cannot debug", "Postmortem blameless useful" |
| 5. Technical Debt and Team Communication | ✅ | "Business framing", "Ambiguous ticket", "Planning too much WIP", "Tribal runbook" |
| (Implicit) Security Review, Performance, Data Contract | ✅ | "Threat model moment", "N+1 problem slow endpoint", "Analytics break data contract" |

**Coverage is complete across all 5 syllabus chapters with strong tradeoff-thinking treatment.** ~33 questions across 2 files.

## Per-file recommendations

| File | Track Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapTech.ts) (softwareEngineeringRoadmap, lines 399-490) | 18 | **FIX** | Strong engineering-practice content (code review risk, tight coupling, dual-write, N+1, feature flags, postmortems, WIP limits). Every wrong answer uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and become canonical bank. |
| [`careerAgentGeneratedRoadmapGovTechFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovTechFinalTopOff.ts) (softwareEngineeringRoadmap, lines 523-604) | 15 | **MERGE → RoadmapTech** | Adds genuinely novel angles (idempotency-on-webhook-retry, career-switcher escalation discipline, security threat-model for sharing flows). Lift the new content; dedupe API contract + observability overlaps. |

**Net effect**: 33 SWE questions across 2 files → ~25 questions in 1 canonical file with per-distractor explanations.

## Open actions (priority order)

1. **Consolidate the pair** into one file with per-distractor explanations. ~33 → ~25 questions.
2. **Realign chapter names** to syllabus 5-chapter taxonomy. Currently uses "Software Engineering: Code Review / Architecture / API Design / Migration / Testing / Incident / Technical Debt / Release / Ownership / Observability / Requirements / Dependency Upgrade / Postmortem / Security Review / Performance / Documentation / Data Contract / Planning / Career Practice" — ~19 sub-topics for 5 chapters, manageable but should collapse.
3. **Decide whether "Career Practice" (escalation discipline for switchers) belongs here.** It is currently mid-Chapter-5 but reads more like a soft-skills sibling track. Either give it a clear home or merge into `peopleManagement`/`publicSpeaking`-style tracks.
4. **No regional tagging needed.**
5. **No `lastReviewed` urgency** — engineering fundamentals (review, releases, incidents, debt) rotate slowly; revisit annually unless platform-engineering specifics (Kubernetes, mesh, eBPF) are added.

## Estimated effort

- Consolidation + per-distractor rewrite: ~5 hours (33 → 25 questions)
- Chapter taxonomy collapse: ~30 min
- "Career Practice" placement decision: ~30 min

**~0.75 working days.** Lower-effort track in the cluster, alongside enterprise SaaS. Both could go first as proof-of-pattern.

## Notes for next auditor

This track has the cleanest scope and least duplication in the tech cluster. Question quality (labels and lessons) is already good; only the `DEFAULT_FLAW` slot blocks it from KEEP. Suspect the generator was given high-quality engineering-practice seeds (possibly drawn from Google/AWS/Will Larson-style writing) and produced tighter scenarios than for the more sprawling cyber-ops topic.

No `softwareEngineeringRoadmap` content appears in `careerAgentGeneratedCoreSupplementDesignTech` (which only feeds `financialModeling`, `uxDesign`, `cybersecurity`). Suggests the tech roadmaps and the basics-tier supplements are correctly segregated for this track — confirm same for the other tech roadmaps when consolidating.
