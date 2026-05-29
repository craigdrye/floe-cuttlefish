# Audit: peopleManagement

**Syllabus**: [`src/data/syllabi/career/people_management.md`](../../../src/data/syllabi/career/people_management.md)
**Track id**: `peopleManagement`
**Tier**: career
**Region**: Region-neutral (no jurisdiction-specific concepts). No region tag needed.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. The Manager Job | ⚠️ | Implicit ("operating charter", decision rights); no dedicated "manager vs IC role" item |
| 2. Goals, Priorities, Operating Rhythm | ⚠️ | "1:1 purpose" + meeting cadence touched; no OKR/KPI/decision-log items |
| 3. Delegation and Ownership | ✅ | Hand-authored "Delegation" + Polish "Dumping versus delegating" |
| 4. Feedback, Coaching, Performance | ✅ | Strong: "Feedback timing" + Polish "Vague concern", "Surprise performance issue" |
| 5. Difficult Conversations and Conflict | ❌ | **Not covered.** No conflict, mediation, emotional regulation, or escalation items |
| 6. Hiring, Onboarding, Team Design | ❌ | **Not covered.** No structured interview, role design, 30/60/90, or hiring bias items |
| 7. Inclusion, Motivation, Team Health | ⚠️ | "Team Health: hero bottleneck" hits one slice; nothing on belonging, burnout, workload |
| 8. Managing Change and Scaling Yourself | ❌ | **Not covered.** No change management, retrospective, or "scaling self" items |

**Coverage is roughly half the syllabus.** Hiring, conflict, change, and inclusion chapters are wide open.

**Chapter taxonomy mismatch.**
- `career.ts` uses Dock/Reef/Cove/Lagoon (4 items): "Management Dock", "Management Reef", "Management Cove", "Management Lagoon"
- Polish files use "People Management: <Subject>": "People Management: Feedback", "People Management: Delegation"
- FrontDoorPolish uses "People Management: <Subject>" (different items)
- Communication/Leadership supplement files (1 and 2) use "People Management: <Subject>" too

Syllabus uses descriptive chapter titles ("The Manager Job", "Difficult Conversations and Conflict"). Realign.

## Per-file recommendations

| File | peopleManagement Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (lines 135–139) | 4 | **KEEP** | Hand-curated, per-distractor explanations. Voice template. Too small to be the whole bank but should set tone. |
| [`careerAgentGeneratedCoreSupplementCommunicationLeadership.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementCommunicationLeadership.ts) (peopleManagement section, line 155) | ~12 | **FIX** | The most substantial coverage of the track. Uses `DEFAULT_FLAW` constant for every distractor. Topics are real (feedback specificity, 1:1 quality, hiring criteria, conflict triage). Rewrite per-distractor explanations and realign chapters. |
| [`careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementCommunicationLeadership2.ts) (peopleManagement section, line 195) | ~12 | **MERGE → CoreSupplementCommunicationLeadership (FIX)** | The May 2026 audit flagged the SupplementCommunicationLeadership pair as duplicating hand-curated content. Confirmed: this is the +2 file in the base+TopOff+FinalTopOff pattern. Salvage distinct items, dedupe rest. |
| [`careerAgentGeneratedCareerSkillsPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerSkillsPolish.ts) (peopleManagement section, lines 75–96) | 4 | **MERGE → CoreSupplementCommunicationLeadership** | Items are good in topic ("Vague concern", "Dumping vs delegating", "Surprise performance", "Hero bottleneck") but use yet another `DEFAULT_FLAW` constant and overlap heavily with Supplement file. Lift novel items; cut duplicates. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (peopleManagement section, line 229) | 4 | **DELETE** | Re-covers feedback, delegation, performance, team health — all already in CareerSkillsPolish + Supplement. Different `DEFAULT_FLAW`. No net content. |

**Duplication pattern is severe**: the same 4 management archetypes (vague feedback, work dumping, surprise review, hero bottleneck) appear across 3–4 files with slightly different wording and four different `DEFAULT_FLAW` constants. This is the textbook base+TopOff+FinalTopOff+Polish duplication the May audit flagged.

## Open actions (priority order)

1. **Author content for missing chapters 5, 6, 8** (conflict, hiring, change) — at least 6 questions per chapter. ~18 questions, ~6 hours.
2. **Consolidate Supplement1 + Supplement2 + CareerSkillsPolish** into a single canonical `peopleManagement` bank with per-distractor explanations. Aim for ~25–30 questions total across all 8 chapters.
3. **Delete the peopleManagement section of `CareerFrontDoorPolish`** — pure duplicate.
4. **Verify chapter alignment** to syllabus chapter titles after consolidation.
5. **Author 4–6 Chapter 1 (Manager Job) items** on the manager-vs-IC distinction, decision rights, bottleneck patterns — currently implicit only.

## Estimated effort

- Coverage-gap authoring (chapters 5, 6, 8, plus Chapter 1 expansion): ~8 hours (24 questions × 20 min)
- Consolidation + per-distractor rewrite + dedup: ~6 hours
- Delete + chapter rename: ~30 min

**~2 working days at this depth.**

## Notes for next auditor

The May 2026 audit specifically flagged `CoreSupplementCommunicationLeadership` as duplicating hand-curated work in `career.ts`. Confirmed for peopleManagement: the hand-curated 4 items in `career.ts` cover feedback timing, delegation, 1:1s, team clarity — and Supplement1, Supplement2, CareerSkillsPolish, and CareerFrontDoorPolish all re-cover feedback specificity, delegation, performance, and team health with slightly different prompts. The same archetypes appear 5 times across the catalog. Consolidation should produce one strong feedback item, one strong delegation item, one strong performance item, one strong team-health item — not four mediocre versions of each.
