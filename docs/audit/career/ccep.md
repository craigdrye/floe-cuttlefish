# Audit: ccep

**Syllabus**: [`src/data/syllabi/career/ccep.md`](../../../src/data/syllabi/career/ccep.md)
**Track id**: `ccep` (title "CCEP")
**Tier**: career
**Status**: `playable`
**Region**: US-leaning (DOJ Evaluation of Corporate Compliance Programs, U.S. Sentencing Guidelines, HHS OIG, SCCE/CCEP certification body). Some content (FCPA-style third-party scenarios, US-style hotline framing) is implicitly US. Currently **not** tagged. Add `region: 'US'` — the certification itself is anchored in US-DOJ guidance even though compliance work is multinational.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Compliance Program Architecture (code, policies, charter, maturity) | Partial | Policy-rollout and "policy nobody can use" hit; explicit program-blueprint scenarios under-covered. |
| 2. Governance, Reporting Lines, and Independence | Yes | "Dotted-line fog machine", "board asks for the real weather", board-line-under-pressure all strong. |
| 3. Risk Assessment and Control Prioritization | Yes | "Medium-risk soup", "new product, old comfort blanket" cover the chapter well. |
| 4. Policies, Training, and Communications | Yes | "Everyone clicked, nobody learned", "policy nobody can use" — strong. |
| 5. Reporting Channels and Escalation | Yes | "Quiet hotline is suspiciously quiet", "manager wants the name" cover hotline/confidentiality/anti-retaliation well. |
| 6. Investigations and Case Management | Yes | "Notebook before megaphone", "executive cameo" cover scope/independence/evidence preservation. |
| 7. Monitoring, Auditing, and Program Effectiveness | Yes | "Receipt-only inspection", "repeat finding treadmill" — strong. |
| 8. Discipline, Remediation, and Reporting | Yes | "Star seller force field", "same facts different endings", "aging issues fresh excuses" — strong. |

Coverage is the best in the cluster. The gap is **Chapter 1 program architecture** explicit drills (charter, maturity stages, operating model design).

**Chapter taxonomy mismatch.** Two main schemes:
- `CredentialsCompliance2` uses clean topic names: "Governance and Oversight", "Investigations", "Hotline and Speak-Up", "Third-Party Compliance", "Training and Communication", "Risk Assessment", "Discipline and Accountability", "Incentives and Culture", "Monitoring and Testing", "Board Reporting", "Program Effectiveness" — closest to syllabus
- `FrontDoorPolish` uses "CCEP: X" prefix format
- `Credentials1` (the ccep slice) uses inconsistent chapter names

Standardize on `CredentialsCompliance2` topic names and map to syllabus chapter numbers.

## Per-file recommendations

| File | CCEP Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) inline `ccep` block | ~6 | **KEEP** | Hand-authored inline anchors with per-distractor explanations (one is Research Ethics around MNPI/selective access). Voice baseline. |
| [`careerAgentGeneratedCredentialsCompliance2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentialsCompliance2.ts) | ~20 | **FIX** | Best-quality CCEP bank in the catalog. Sharp scenarios with strong voice ("dotted-line fog machine", "star seller force field", "acquisition afterglow"). Every wrong answer collapses to `DEFAULT_FLAW`. Rewrite per-distractor — content is otherwise the closest to KEEP in the cluster. Align chapter names literally to syllabus. |
| [`careerAgentGeneratedCredentials1.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials1.ts) (ccep slice, lines 427–578) | ~30 | **MERGE → CredentialsCompliance2** | Adds volume but heavy overlap on governance/investigations/hotline. Salvageable: M&A integration, conflict-of-interest registers, training-effectiveness drills (~6–10 questions). Cut the rest. Different `DEFAULT_FLAW` string. |
| [`careerAgentGeneratedQualificationsTechnicalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsTechnicalPolish.ts) (ccep slice, lines 31–74) | ~9 | **DELETE** | Polish-flavored; concepts re-covered better in CredentialsCompliance2. `DEFAULT_FLAW` chain — "skips the defensible process the credential is testing" — adds no per-distractor value. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (ccep slice, lines 361–382) | ~4 | **DELETE** | Already-covered ground (escalation under pressure, training complete/culture weak, investigation scope, control weakness without loss). `DEFAULT_FLAW` chain. |

**Net effect**: ~69 CCEP questions across 5 generated files → ~30 questions in 1 canonical bank + 6 hand-written inline. Adding 4 Chapter 1 program-architecture authoring questions closes the only real gap.

## Open actions (priority order)

1. **Add `region: 'US'`** to the track entry in [`career.ts` ageCatalog](../../../src/data/ageCatalog/career.ts). DOJ/USSG/CCEP certification framework is US-anchored.
2. **Consolidate `CredentialsCompliance2`** with per-distractor rewrites and syllabus-aligned chapter names. This is the closest to a KEEP file in the cluster — rewrite cost is the lowest payoff per hour of any cluster track.
3. **Merge novel `Credentials1` ccep scenarios** (M&A integration, conflict registers) into the canonical bank, dedupe, then delete the Credentials1 ccep slice.
4. **Delete `TechnicalPolish` and `FrontDoorPolish` ccep slices** after lifting any unique scenarios.
5. **Author 4 Chapter 1 questions** on program architecture (charter, maturity stages, operating model).
6. **Add `lastReviewed` metadata** — DOJ ECCP guidance updates roughly annually.

## Estimated effort

- Per-distractor rewrite on CredentialsCompliance2: ~2.5 hours (20 questions × 8 min)
- Merge + dedupe Credentials1: ~3 hours
- New authoring (Chapter 1 architecture): ~1.5 hours (4 questions × 20 min)
- Region tag + lastReviewed: ~30 min

**~1 working day** — lowest-cost track in the cluster to bring to bar because the content is already strong.

## Notes for next auditor

`CredentialsCompliance2` is the best-written file in the entire compliance cluster — voice is sharp, scenarios are realistic, chapter names are sensible. The only thing standing between it and a KEEP rating is the file-wide `DEFAULT_FLAW`. If a single per-distractor pass can be prioritized anywhere in this cluster, do it here first — high ROI. Note that the same file also feeds `nerc` with similar structural quality; that audit can probably copy this one's approach.
