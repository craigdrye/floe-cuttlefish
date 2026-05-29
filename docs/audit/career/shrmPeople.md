# Audit: shrmPeople

**Syllabus**: [`src/data/syllabi/career/shrm_people.md`](../../../src/data/syllabi/career/shrm_people.md)
**Track id**: `shrmPeople`
**Tier**: career
**Region**: US-leaning (SHRM-CP / SHRM-SCP, BASK, "protected groups," adverse impact) — **should be tagged `region: 'US'`** even though SHRM has global modules. Auto-FIX.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. SHRM Decision Logic and HR's Role | ✅ | "Exam Strategy: Most HR answer" + "SHRM Decision Logic" entries hit best-answer scenario logic |
| 2. People Domain (Talent, Total Rewards, ER) | ✅ | Hiring, compensation, performance management, talent acquisition all covered |
| 3. Organization Domain (Strategy, Change) | ✅ | "Workforce Planning", "Change Management", "Strategy / headcount cuts" |
| 4. Workplace Domain (Compliance, Risk, Safety, Inclusion) | ✅ | "Adverse Impact", "Accommodation", "Inclusion" (promotion pattern), "Global HR" |
| 5. Behavioral Competencies in Practice | ⚠️ | Diffuse — covered implicitly across other chapters; no dedicated "leadership/consultation/relationship management" items |
| 6. Data, Metrics, Evidence-Based HR | ✅ | "Turnover smell test" + "Survey trust" |
| 7. Employee Relations Lab | ✅ | "Investigations", "Termination", "Confidential file" |
| 8. Exam Survival and Scenario Judgment | ✅ | "Exam strategy: Most HR answer" |

**Chapter taxonomy mismatch.** Three competing schemes (same pattern as bar exam):
- `careerPhilosophyQualificationQuestions.ts` uses domain-style names: "Employee Relations", "Workforce Planning", "Compliance", "Learning", "SHRM Decision Logic"
- `careerAgentGeneratedQualificationsLawProjectHr{,2,3}.ts` uses "SHRM: <Subject>" prefix: "SHRM: Employee Relations", "SHRM: Adverse Impact"
- `careerAgentGeneratedQualificationFrontDoorPolish.ts` uses same "SHRM: <Subject>" prefix

The syllabus uses BASK-aligned chapter names ("People Domain", "Organization Domain", "Workplace Domain"). None of the question files match the BASK domain structure. Realign to BASK domains.

## Per-file recommendations

| File | shrmPeople Q's | Bucket | Reason |
|---|---|---|---|
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) (`shrmPeopleQuestions`) | ~12 | **KEEP** | Hand-authored with real per-distractor explanations and humane SHRM-voice. Best content in track. Promote to canonical bank. |
| [`careerAgentGeneratedQualificationsLawProjectHr.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr.ts) (shrmPeople section) | 18 | **FIX** | Excellent topical coverage (termination, structured interviews, adverse impact, training evaluation, comp compression, performance, investigations, accommodation, workforce planning, engagement, global HR, ethics, change, inclusion, labor relations, metrics, strategy). Every distractor uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and align chapters to BASK. **This is the strongest pure-content file in the SHRM track** — worth the FIX investment. |
| [`careerAgentGeneratedQualificationsLawProjectHr2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr2.ts) (shrmPeople section) | ~17 | **MERGE → LawProjectHr (FIX)** | Adds more scenarios in same domains. Likely duplicates several base-file topics. Salvage genuinely new items (estimated 6–8), dedupe rest. |
| [`careerAgentGeneratedQualificationsLawProjectHr3.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr3.ts) (shrmPeople section) | ~12 | **MERGE → LawProjectHr / DELETE rest** | Likely heavy overlap with base + 2. Salvage 3–5 distinct items, cut the rest. |
| [`careerAgentGeneratedQualificationFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationFrontDoorPolish.ts) (shrmPeople section, lines 119–139) | 4 | **DELETE** | Re-covers fairness/consistency, adverse impact, job analysis, investigation — all already present in hand-authored core + LawProjectHr. Different `DEFAULT_FLAW` constant. No net content win. |

**Net effect**: ~63 shrmPeople questions across 5 files → ~30 questions in 2 canonical sources (hand-authored core + FIXed LawProjectHr base). Higher quality, BASK-aligned chapters.

## Open actions (priority order)

1. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 489. SHRM credentials are US-anchored and many items reference US-specific concepts (protected classes, adverse impact, ADA-style accommodation, FLSA, etc).
2. **Author Chapter 5 (Behavioral Competencies) bank** — 6–8 questions on leadership, consultation, relationship management, communication, business acumen as distinct items. Currently the weakest coverage.
3. **Consolidate the LawProjectHr triplet** into one canonical bank with per-distractor explanations and BASK-aligned chapter names.
4. **Delete the shrmPeople section of `QualificationFrontDoorPolish`**.
5. **Add `lastReviewed: <date>` metadata** to any item referencing specific employment law (adverse impact, accommodation, labor relations) — these are legally evolving.

## Estimated effort

- Region tag: ~5 min
- Consolidation + per-distractor rewrite: ~7 hours (47 Q → 30)
- Chapter 5 authoring: ~2.5 hours (7 questions × 20 min)
- Delete + chapter rename: ~30 min

**~1.5 working days at this depth.**

## Notes for next auditor

SHRM has the best AI-generated content coverage in the cluster — `LawProjectHr` shrmPeople section is genuinely useful (real scenarios, real workplace decisions), just fatally damaged by the `DEFAULT_FLAW` constant. Fixing it is a high-ROI move. By contrast `peopleManagement` (its sibling track) is over-covered by the supplement files but with weaker SHRM-style judgment — see `people_management.md` audit.
