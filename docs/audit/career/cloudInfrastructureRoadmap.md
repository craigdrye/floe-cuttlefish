# Audit: cloudInfrastructureRoadmap

**Syllabus**: [`src/data/syllabi/career/cloud_infrastructure_roadmap.md`](../../../src/data/syllabi/career/cloud_infrastructure_roadmap.md)
**Track id**: `cloudInfrastructureRoadmap`
**Tier**: career
**Region**: Jurisdiction-neutral (vendor-neutral by design). Watch for AWS-specific terms (VPC, security group) leaking into descriptions.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Cloud Building Blocks (shared responsibility, regions, AZs) | ✅ | `RoadmapTech` "Who patches what" hits it |
| 2. IAM and Network Boundaries | ✅ | "Too broad role", "Public subnet question", "Service account sprawl" (TopOff), "Break-glass account" (FinalTopOff) — strong coverage |
| 3. Deployment and Change Safety | ✅ | "Rollback plan", "Firewall rule" change, "Feature flag cleanup" |
| 4. Observability and Reliability | ✅ | "Metric selection", "Single-zone risk", "Healthy dashboard, angry users" — good multi-angle coverage |
| 5. Cost and Capacity Tradeoffs | ✅ | "Egress surprise", "Weekend compute bonfire", "Quota surprise" |
| (Implicit) Disaster Recovery, Backups, Secrets | ✅ | "Restore test", "Plaintext config", "Regional failure plan", "Backup scope", "Secret in build logs" |

**Coverage is the strongest in the cluster.** ~50 questions across 3 files. Chapter taxonomy uses "Cloud Infrastructure: X" prefix — does not match syllabus chapter names (Building Blocks, IAM and Network Boundaries, etc.). Realign before launch.

## Per-file recommendations

| File | Track Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapTech.ts) (cloudInfrastructureRoadmap) | 18 | **FIX** | Strong content (least privilege, single-zone, egress, secrets, golden path) but every wrong answer uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and become the canonical cloud bank. |
| [`careerAgentGeneratedRoadmapTechTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapTechTopOff.ts) (cloudInfrastructureRoadmap, starts line 113) | 16 | **MERGE → RoadmapTech** | Adds genuinely novel angles (service-account sprawl, uneven load balancer, IaC module drift). Lift the new content into the main file; dedupe overlaps (alert-tuning, environment parity). |
| [`careerAgentGeneratedRoadmapGovTechFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovTechFinalTopOff.ts) (cloudInfrastructureRoadmap, lines 359-440) | 16 | **MERGE → RoadmapTech (partial), DELETE rest** | Substantial overlap. Salvageable: cache TTL/invalidation, regional change windows, edge caching, database resilience reconnection (~6-8 questions). Cut the rest. |

**Net effect**: 50 cloud questions across 3 files → ~30 questions in 1 canonical file with per-distractor explanations. Add ~3-5 multi-cloud awareness questions (AWS vs Azure vs GCP terminology bridges) and the bank is launch-ready.

## Open actions (priority order)

1. **Consolidate the triplet** into one file with per-distractor explanations. ~50 → ~30 questions.
2. **Realign chapter names** to match syllabus: "Cloud Building Blocks", "IAM and Network Boundaries", "Deployment and Change Safety", "Observability and Reliability", "Cost and Capacity Tradeoffs". Backups/DR/Secrets need a clear home (suggest folding into Reliability + Deployment Safety).
3. **Author 3-5 multi-cloud terminology questions** so AWS/Azure/GCP learners can map shared concepts. The syllabus says "vendor-neutral" but examples lean AWS.
4. **Verify the chapter "Cybersecurity Operations:" prefix is not leaking** into this track via Aggregator. (Spot-check after consolidation.)
5. **No regional tagging needed** — content is jurisdiction-neutral.

## Estimated effort

- Consolidation + per-distractor rewrite: ~6 hours (50 → 30 questions × ~10 min each)
- Chapter realignment: ~30 min
- Multi-cloud terminology authoring: ~1.5 hours
- Aggregator dedupe verification: ~30 min

**~1 working day.** Cloud is the best-developed tech roadmap and could be a quality flagship after one consolidation pass.

## Notes for next auditor

The triplet pattern (RoadmapTech + RoadmapTechTopOff + RoadmapGovTechFinalTopOff) mirrors the Finance triplet from the VC audit. Same `DEFAULT_FLAW`, same authoring waves, same dedupe-by-prompt aggregator behaviour. The five tech tracks (`cybersecurityOperationsRoadmap`, `cloudInfrastructureRoadmap`, `enterpriseSaaSRoadmap`, `dataAiGovernanceRoadmap`, `softwareEngineeringRoadmap`) should be consolidated together as a cluster — same fix pattern applies to all five.
