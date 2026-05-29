# Audit: technicalSales

**Syllabus**: [`src/data/syllabi/career/technical_sales_engineer_interview_prep.md`](../../../src/data/syllabi/career/technical_sales_engineer_interview_prep.md)
**Track id**: `technicalSales`
**Tier**: career (`ageGroup: 'career-hopper'`)
**Region**: Region-neutral. References AWS Well-Architected, SOC 2 (US-centric), SSO — US-leaning but not jurisdiction-specific in the questions. No region tag needed yet.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. The Sales Engineer Role | ❌ | **No items on AE-SE partnership, role narrative, where SE creates risk** |
| 2. Technical Discovery | ✅ | Hand-authored "Discovery call" + Polish "Demo before diagnosis" |
| 3. Demo Strategy | ❌ | **No items on demo agenda, pacing, value moments, fallback plans** |
| 4. Architecture and Solution Design | ❌ | **No items on systems thinking, APIs, data flow, scalability tradeoffs** |
| 5. Security, Privacy, Compliance Objections | ✅ | Hand-authored "Security objection" + Polish "Security review: Questionnaire from memory" |
| 6. Pilots, POCs, Mutual Action Plans | ✅ | Hand-authored "Pilot success criteria" + Polish "Pilot with no finish line" |
| 7. Interview Scenarios and Role Plays | ❌ | **No items on STAR stories, demo recovery, behavioral interview prep** |
| 8. Working With Product, Engineering, Customer Success | ⚠️ | Polish "Technical fit: Almost fits" touches roadmap honesty; otherwise thin |

**Half the syllabus is uncovered.** Demo strategy (Chapter 3), architecture (Chapter 4), interview-specific scenarios (Chapter 7), and cross-functional handoff (Chapter 8) all lack dedicated content. For an "Interview Prep" track this is a serious gap — Chapter 7 in particular is the whole point of the course.

**Chapter taxonomy mismatch.**
- `career.ts` (lines 2066–2099) uses Dock/Reef/Cove/Lagoon: "Discovery Dock", "Objection Reef", "Value Cove", "Pilot Lagoon"
- `careerAgentGeneratedCareerFrontDoorPolish.ts` (technicalSales section, line 141) uses "Technical Sales: <Subject>"

Syllabus uses descriptive chapter titles ("Technical Discovery", "Demo Strategy"). Realign.

## Per-file recommendations

| File | technicalSales Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (lines 2066–2099) | 4 | **KEEP** | Hand-curated `makeSimpleQuestion` form with per-distractor explanations. Voice template. Topics map to discovery, security, ROI, pilot — the core SE moves. Too small to be the whole bank. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (technicalSales section, line 141) | 4 | **FIX** | Topics extend the hand-curated set (demo discipline, security questionnaire integrity, gap honesty, pilot scoping). Uses `DEFAULT_FLAW` constant. Rewrite per-distractor explanations and merge into a single canonical bank. |

**No content in** `LawProjectHr` triplet, no Roadmap entries, no Supplement files. Like `patentBar`, `technicalSales` is a low-feeder track despite being marketed as an interview-prep course.

## Open actions (priority order)

1. **Author Chapter 7 (Interview Scenarios and Role Plays) bank** — 8–10 questions on demo recovery, whiteboard prompt handling, STAR storytelling for SE contexts, behavioral questions on ambiguity/conflict/customer trust. **Highest priority — this is the course's stated focus.**
2. **Author Chapter 3 (Demo Strategy) bank** — 6 questions on demo agenda design, persona alignment, value moments, pacing, live-demo risk, fallback plans.
3. **Author Chapter 4 (Architecture and Solution Design) bank** — 6 questions on systems thinking, API/integration tradeoffs, data flow, scalability/reliability decisions, whiteboard architecture choices.
4. **Author Chapter 1 (SE Role) and Chapter 8 (Cross-functional) items** — 3–4 each on AE-SE partnership boundaries, post-call recap, feature-request triage, implementation handoff.
5. **FIX the FrontDoorPolish entries** with per-distractor explanations and merge into a single canonical bank with the hand-curated 4.
6. **Verify status flag** — `playable` is questionable given coverage gaps; consider whether the track is truly interview-ready.

## Estimated effort

- Coverage-gap authoring (chapters 3, 4, 7, plus 1/8 expansion): ~10 hours (28 questions × 20 min — SE/interview content benefits from realistic scenarios)
- Consolidation + per-distractor rewrite: ~1 hour (8 Q → 8 Q higher quality)

**~1.5–2 working days. Heavy on authoring, light on cleanup.**

## Notes for next auditor

`technicalSales` and `patentBar` are the two career-cluster tracks where AI generation skipped the topic. Both have hand-curated baselines of 4 questions plus one polish file, and that's it. The asymmetry vs heavily-fed tracks (any of the Roadmap series, the LawProjectHr trio) suggests the generation prompts were tuned around certain credential categories and missed the role-specific career-prep tracks. Worth noting for any future generation runs.

Cross-check overlap with `salesFundamentals` during authoring — both touch discovery and objection handling, but `salesFundamentals` is buyer-pain-focused and `technicalSales` is technical-evaluation-focused. Keep the distinction crisp.
