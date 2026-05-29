# Audit: productManagement

**Syllabus**: [`src/data/syllabi/career/product_management.md`](../../../src/data/syllabi/career/product_management.md)
**Track id**: `productManagement`
**Tier**: career
**Region**: Region-neutral. No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. The PM Role and Product Operating System | ⚠️ | Touched via Polish "Feature request fog"; no dedicated role/trio item |
| 2. Customer Discovery and Problem Framing | ✅ | Polish "Solution interview trap" + Supplement coverage |
| 3. Strategy, Positioning, Product Bets | ❌ | **No dedicated strategy / target-segment / differentiation items** |
| 4. Prioritization and Roadmapping | ✅ | Hand-authored "Prioritization" + Polish "Tiny effort, tiny value" |
| 5. Metrics, Analytics, Experimentation | ✅ | Hand-authored "Success metric" + Polish "Metric that moves, product does not" |
| 6. Requirements, Design, Delivery Partnership | ⚠️ | Touched via "MVP meaning"; no PRD/acceptance-criteria item |
| 7. Launch, Adoption, Learning Loops | ❌ | **No launch readiness, rollout, post-launch learning items** |
| 8. Stakeholder Influence and Product Judgment | ⚠️ | "Feature request fog" hits sales-stakeholder dynamic; no executive/escalation items |

**Half the syllabus is thinly covered or missing**, especially Strategy/Positioning and Launch/Adoption.

**Chapter taxonomy mismatch.**
- `career.ts` (lines 87–92) uses Dock/Reef/Cove/Lagoon: "Product Dock", "Product Reef", "Product Cove", "Product Lagoon"
- `careerAgentGeneratedCoreSupplementProductProject.ts` uses "Product Management: <Subject>"
- `careerAgentGeneratedCoreSupplementProductProject2.ts` uses same prefix
- `careerAgentGeneratedCareerFrontDoorPolish.ts` (productManagement section, line 31) uses "Product: <Subject>" — note the different prefix

Syllabus uses descriptive titles ("Metrics, Analytics, and Experimentation"). Realign.

## Per-file recommendations

| File | productManagement Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (lines 87–92) | 4 | **KEEP** | Hand-curated, per-distractor explanations. Voice template. Too small to be the whole bank — must be supplemented carefully. |
| [`careerAgentGeneratedCoreSupplementProductProject.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementProductProject.ts) (productManagement section, line 31) | ~12 | **FIX** | The May 2026 audit specifically flagged this file as duplicating hand-curated PM content. Confirmed — prompts on "Problem first", "Prioritization", "Success metric", "MVP" overlap heavily with the hand-curated 4. Real new content exists (discovery, launch concerns, stakeholder influence) but every distractor uses `DEFAULT_FLAW`. Rewrite + dedupe. |
| [`careerAgentGeneratedCoreSupplementProductProject2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementProductProject2.ts) (productManagement section, line 31) | ~12 | **MERGE → CoreSupplementProductProject (FIX)** | The +2 in base+TopOff pattern. Likely overlaps base. Salvage 4–6 distinct items. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (productManagement section, lines 31–52) | 4 | **DELETE** | Re-covers feature-request triage, metric/value mismatch, prioritization, discovery — all already in canonical core + Supplement. Different `DEFAULT_FLAW` ("This answer sounds busy..."). No net content. |

**Duplication is severe.** "Prioritization" appears in `career.ts`, Supplement1, Supplement2, and CareerFrontDoorPolish. "MVP" similarly. The same 4 archetypes (problem-first, prioritization, metrics, MVP) appear 4 times each.

## Open actions (priority order)

1. **Author Chapter 3 (Strategy, Positioning, Product Bets) bank** — 6–8 questions on target segment, differentiation, product strategy memo, competitive analysis, value proposition. Largest coverage gap.
2. **Author Chapter 7 (Launch, Adoption, Learning Loops) bank** — 6 questions on launch readiness checklist, rollout, enablement, post-launch learning, product operations. Second-largest gap.
3. **Consolidate Supplement1 + Supplement2** into a single canonical `productManagement` bank with per-distractor explanations. Aim for ~25 questions across all 8 chapters.
4. **Dedupe against `career.ts` hand-curated** — every prioritization or MVP item that overlaps the hand-curated set should be cut, not rewritten.
5. **Delete the productManagement section of `CareerFrontDoorPolish`** — pure duplicate.
6. **Author 4 Chapter 6 (Requirements/Design/Delivery)** items on PRD, acceptance criteria, technical-constraint tradeoffs.

## Estimated effort

- Coverage-gap authoring (chapters 3, 7, plus chapter 6 expansion): ~6 hours (18 questions × 20 min)
- Consolidation + per-distractor rewrite + dedup: ~5 hours
- Delete + chapter rename: ~30 min

**~1.5–2 working days.**

## Notes for next auditor

This is the textbook case of the May 2026 audit finding about `CoreSupplementProductProject` and `CoreSupplementProductProject2` duplicating hand-curated PM content. The hand-curated `career.ts` block is small (4 items) but well-shaped; everything else echoes those 4 archetypes (problem-first, prioritization, metrics, MVP).

The voice baseline ("Product Dock", "Product Reef", "Product Cove", "Product Lagoon" with playful but technically defensible prompts) should be preserved. Cross-check during consolidation against `uxDesign` (sibling track in same `Career` discipline) for accidental overlap on discovery/research-bias items — both tracks touch user research from different angles.
