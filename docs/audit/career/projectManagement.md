# Audit: projectManagement

**Syllabus**: [`src/data/syllabi/career/project_management.md`](../../../src/data/syllabi/career/project_management.md)
**Track id**: `projectManagement`
**Tier**: career
**Region**: Region-neutral. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Project Thinking and Initiation | ⚠️ | Touched implicitly via critical-path/scope-creep items; no charter/business-case item |
| 2. Scope, Requirements, Work Breakdown | ✅ | Hand-authored "Scope creep" + Supplement items on requirements traceability |
| 3. Stakeholders, Communication, Operating Rhythm | ⚠️ | Polish items on stakeholder/communication but limited dedicated coverage |
| 4. Schedule, Resources, Critical Path | ✅ | Strong: hand-authored "Critical path", supplementary float/sequencing items |
| 5. Risk, Issues, Change Control | ✅ | Hand-authored "Risk register" + Supplement on change requests |
| 6. Delivery Methods: Predictive, Agile, Hybrid | ⚠️ | Some coverage via Supplement; less than the parallel `pmpWrangler` track |
| 7. Quality, Vendors, Implementation | ❌ | **Not covered.** No vendor/SLA/implementation/handover items |
| 8. Status, Recovery, Retrospectives | ⚠️ | One milestone item; no status-color, recovery memo, or retrospective items |

**Half the syllabus is thinly covered or missing**, especially Quality/Vendors/Implementation and Status/Recovery.

**Chapter taxonomy mismatch.**
- `career.ts` (lines 93–98) uses Dock/Reef/Cove/Lagoon: "Project Dock", "Project Reef", "Project Cove", "Project Lagoon"
- `careerAgentGeneratedCoreSupplementProductProject.ts` uses "Project Management: <Subject>"
- `careerAgentGeneratedCoreSupplementProductProject2.ts` uses same prefix
- `careerAgentGeneratedCareerFrontDoorPolish.ts` (line 163) uses same prefix

Syllabus uses descriptive titles ("Schedule, Resources, and Critical Path"). Realign.

## Per-file recommendations

| File | projectManagement Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (lines 93–98) | 4 | **KEEP** | Hand-curated, per-distractor explanations. Voice template. Too small to be the whole bank — must be supplemented carefully. |
| [`careerAgentGeneratedCoreSupplementProductProject.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementProductProject.ts) (projectManagement section, line 93) | ~12 | **FIX** | The May 2026 audit flagged this file as duplicating hand-curated PM content in `career.ts`. Confirmed: prompts on critical path, scope creep, risk register, milestones overlap heavily with the hand-curated 4. Real new content does exist (status memo, vendor handoff, implementation) but every distractor uses `DEFAULT_FLAW`. Rewrite + dedupe, do not delete wholesale. |
| [`careerAgentGeneratedCoreSupplementProductProject2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementProductProject2.ts) (projectManagement section, line 113) | ~12 | **MERGE → CoreSupplementProductProject (FIX)** | The +2 in the base+TopOff pattern. Mostly duplicates base. Salvage 4–6 distinct items. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (projectManagement section, line 163) | 4 | **DELETE** | Re-covers scope/critical path/risk basics already in canonical core + Supplement. Different `DEFAULT_FLAW`. No net content. |

**The duplication risk specifically called out by the May audit is real.** "Critical path" appears in `career.ts` lines 94, in `CoreSupplementProductProject` (likely), in `CoreSupplementProductProject2`, and possibly in `CareerFrontDoorPolish`. Four near-identical critical-path items across four files.

## Open actions (priority order)

1. **Author Chapter 7 (Quality, Vendors, Implementation) bank** — 6–8 questions on vendor SLA, implementation checklist, rollout, training, handover, acceptance. Largest coverage gap.
2. **Author Chapter 8 (Status, Recovery, Retrospectives) bank** — 6 questions on RAG status interpretation, recovery memo, retrospective discipline, executive update format. Second-largest gap.
3. **Consolidate Supplement1 + Supplement2** into a single canonical `projectManagement` bank with per-distractor explanations. Aim for ~25 questions across all 8 chapters.
4. **Dedupe against `career.ts` hand-curated** — every critical-path or scope-creep item that overlaps the hand-curated set should be cut, not rewritten.
5. **Delete the projectManagement section of `CareerFrontDoorPolish`** — pure duplicate.
6. **Add Chapter 1 (Initiation) item** on project charter and business case.

## Estimated effort

- Coverage-gap authoring (chapters 7, 8, plus Chapter 1 expansion): ~5 hours (15 questions × 20 min)
- Consolidation + per-distractor rewrite + dedup: ~5 hours
- Delete + chapter rename: ~30 min

**~1.5 working days.**

## Notes for next auditor

This is the textbook case of the May 2026 audit finding about `CoreSupplementProductProject` and `CoreSupplementProductProject2` duplicating hand-curated PM content. The hand-curated `career.ts` block is small (4 items) but well-shaped; everything else echoes those 4 archetypes (critical path, scope creep, risk register, milestone) with slight variation.

`projectManagement` (this track) and `pmpWrangler` are sibling tracks with separate feeders. They should stay separate — pmpWrangler is the certification-prep frame; projectManagement is the practical-skills frame — but during consolidation watch for accidental overlap between LawProjectHr's pmpWrangler section and Supplement's projectManagement section (similar prompts, different feeders).
