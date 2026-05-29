# Audit: pmpWrangler

**Syllabus**: [`src/data/syllabi/career/pmp_wrangler.md`](../../../src/data/syllabi/career/pmp_wrangler.md)
**Track id**: `pmpWrangler`
**Tier**: career
**Region**: Region-neutral by design (PMI is global). No region tag needed, but **flag the 2026 ECO transition** (July 8, 2026) — questions written before/after may need dated metadata.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. PMP Operating System | ⚠️ | "Exam Strategy: Best next action" hits this; no eligibility/format/diagnostic items |
| 2. People — Teams, Conflict, Communication | ✅ | "Servant Leadership: Quiet conflict", "Stakeholder Engagement: Late reviewer", "Communications: Wrong altitude", "Team Performance: Skill gap sprint" |
| 3. Stakeholders, Vision, Business Value | ✅ | "Benefits: Output without outcome", "Business Case: Benefit wobble" |
| 4. Starting and Planning | ✅ | "Requirements: Stakeholder translation", "Scope Validation" |
| 5. Executing, Monitoring, Controlling | ✅ | Strong: "Change Control: Sponsor surprise", "Earned Value: Below one blues", "Quality: Inspection clue", "Schedule: Critical-path squeeze", "Schedule: Float temptation" |
| 6. Risk, Issues, Compliance, Procurement | ✅ | "Risk and Issues: Risk becomes real", "Risk: Unknown unknown arrives", "Procurement: Who holds overrun risk" |
| 7. Agile, Hybrid, Tailoring Lab | ✅ | "Agile Roles: Backlog tug-of-war", "Hybrid Tailoring", "Agile Metrics: Velocity temptation", "Agile Misuse: Daily status theater" |
| 8. Exam Strategy and Simulation | ✅ | "Exam Strategy: Best next action", time pressure items |

**Coverage is the strongest in the cluster.** Every chapter has multiple items; the 2026 ECO transition is mentioned in the syllabus but not yet reflected in question metadata.

**Chapter taxonomy mismatch.** Three competing schemes:
- `careerPhilosophyQualificationQuestions.ts` (`pmpWranglerQuestions`) uses domain headings: "Scope", "Schedule", "Risk", "Agile", "People"
- `careerAgentGeneratedQualificationsLawProjectHr{,2,3}.ts` uses "PMP: <Topic>": "PMP: Change Control", "PMP: Earned Value"
- `careerAgentGeneratedQualificationFrontDoorPolish.ts` uses same "PMP: <Topic>" prefix

Syllabus uses domain headings with descriptive chapter titles ("People — Teams, Conflict, Communication", "Executing, Monitoring, Controlling"). Realign to syllabus domain structure.

## Per-file recommendations

| File | pmpWrangler Q's | Bucket | Reason |
|---|---|---|---|
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) (`pmpWranglerQuestions`) | ~12 | **KEEP** | Hand-authored with per-distractor explanations, calm PMI voice. Best content in track. Promote to canonical bank. |
| [`careerAgentGeneratedQualificationsLawProjectHr.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr.ts) (pmpWrangler section, line 123) | 18 | **FIX** | Excellent topical coverage (change control, stakeholders, risk, agile roles, servant leadership, schedule, quality, procurement, hybrid, EV, comms, scope val, team, benefits, retro, governance, agile metrics, exam strategy). Every distractor uses `DEFAULT_FLAW`. Rewrite. Strongest pure-content file in track — high-ROI FIX. |
| [`careerAgentGeneratedQualificationsLawProjectHr2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr2.ts) (pmpWrangler section, line 133) | ~17 | **MERGE → LawProjectHr (FIX)** | Likely duplicates topics from base. Salvage 6–8 distinct items, dedupe rest. |
| [`careerAgentGeneratedQualificationsLawProjectHr3.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsLawProjectHr3.ts) (pmpWrangler section, line 93) | ~13 | **MERGE → LawProjectHr / DELETE rest** | Includes good "Business Case: Benefit wobble", "Requirements: Stakeholder translation", "Schedule: Float temptation", "Risk: Unknown unknown arrives", "Quality: Acceptance criteria drift", "Team: Borrowed expert burnout" — at least 6 keepers. Cut overlaps. |
| [`careerAgentGeneratedQualificationFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationFrontDoorPolish.ts) (pmpWrangler section, lines 97–117) | 4 | **DELETE** | Re-covers change control, risk response, agile misuse, sponsor pressure — all already in canonical core. Different `DEFAULT_FLAW`. No net content. |
| [`careerAgentGeneratedCoreSupplementProductProject.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementProductProject.ts) (projectManagement section bleeds in via tagging?) | 0 in pmpWrangler explicitly | — | Distinct from `projectManagement`. Not feeding pmpWrangler directly. |

**Net effect**: ~64 pmpWrangler questions across 4 files → ~30 questions in 2 canonical sources. Strongest cleanup ROI in the cluster because the topical coverage is genuinely good — the only blocker is the distractor-explanation rigor.

## Open actions (priority order)

1. **Consolidate the LawProjectHr triplet** for pmpWrangler into one file with per-distractor explanations and syllabus-aligned chapter names. Highest-value FIX in the cluster.
2. **Tag 2026 ECO transition-sensitive items** with metadata. Domain weight changes (People 42→33, Process 50→41, Business Env 8→26) and the agile/predictive mix change (50/50 → 40/60). Any item whose lesson depends on the old weights needs `lastReviewed` metadata.
3. **Delete the pmpWrangler section of `QualificationFrontDoorPolish`**.
4. **Author 4–6 Chapter 1 (PMP Operating System) items** on eligibility, exam format, domain weights, and diagnostic workflow — current coverage is implicit.
5. **Verify status flag** — already `playable`, correctly so.

## Estimated effort

- Consolidation + per-distractor rewrite: ~7 hours (48 Q → 30)
- Chapter 1 authoring: ~2 hours (6 questions × 20 min)
- Delete + chapter rename + metadata: ~1 hour

**~1.5 working days.**

## Notes for next auditor

The pmpWrangler track shares the LawProjectHr triplet pattern with `barExam` and `shrmPeople` — same DEFAULT_FLAW, same base+2+3 cadence, same chapter mismatch. All three audits recommend FIX on the triplet rather than DELETE because the topical content is the strongest pure-PMI/SHRM/UBE supplement in the catalog. Doing all three together is more efficient than one at a time.

The sibling `projectManagement` track (non-certification) has different feeders entirely — see `project_management.md`. Should not be merged but should be cross-checked for accidental topic duplication during consolidation.
