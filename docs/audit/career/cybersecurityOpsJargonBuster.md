# Audit: cybersecOpsJargon

**Syllabus**: [`src/data/syllabi/career/cybersecurity_ops_jargon_buster.md`](../../../src/data/syllabi/career/cybersecurity_ops_jargon_buster.md)
**Track id**: `cybersecOpsJargon`
**Tier**: career
**Region**: Jurisdiction-neutral. Voice is workplace-shorthand-translation, not certification prep.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Alerts, Signals, Triage | ✅ | `jargonBusters.ts` "Know the first move", "Tune the rule", "Triage Bay", "Translate cyber into English" |
| 2. Identity and Access Language | ✅ | "Cut access fast", "Privilege Reef admin sprawl", "IAM Channel revocation", `BillingCyberTopOff` "OAuth consent trap", "MFA fatigue signal" |
| 3. Endpoint, Network, Cloud Clues | ✅ | "Cloud Cove decode the alert", "Network Reef lateral movement", `BillingCyberTopOff` endpoint triage + cloud security questions |
| 4. Containment and Recovery | ✅ | "Containment Bay", `BillingCyberTopOff` containment/forensics/recovery group (6+ questions) |
| 5. Communication and Escalation | ✅ | "Exec Update translate cyber into English", "Incident Reef who to wake up", `BillingCyberTopOff` "Executive Communication" pair |

**Coverage is complete across all 5 syllabus chapters with strong multi-angle treatment.** Best-covered track in the cluster relative to its syllabus.

## Per-file recommendations

| File | Track Q's | Bucket | Reason |
|---|---|---|---|
| [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts) (cybersecOpsJargonQuestions, lines 837-998) | 20 | **KEEP — gold standard** | Hand-authored, per-distractor explanations with concrete *why this is wrong* lines, distinctive voice ("toaster with a pulse", "tiny compliance seminar", "decorative paste"). This is the model for the catalog. Add `lastReviewed` metadata. |
| [`careerAgentGeneratedJargonBillingCyberTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonBillingCyberTopOff.ts) (cybersecOpsJargon, lines 184-335) | 30 | **FIX** | Excellent voice ("ransom note manners", "lunch is important", "appliances having a dramatic afternoon") and tightly grounded scenarios — but every wrong answer uses `DEFAULT_FLAW`. The *labels* are educational; the explanation slot is wasted. Highest-leverage rewrite in the cluster. |
| [`careerAgentGeneratedJargonPracticePolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedJargonPracticePolish.ts) (cybersecOpsJargon block) | unknown — referenced from career.ts:202 | **FIX** | Wired in via `careerAgentGeneratedJargonPracticePolishQuestionsByTrack.cybersecOpsJargon` — likely the same `DEFAULT_FLAW` pattern. Audit alongside the BillingCyber TopOff. |

**Net effect**: 50+ jargon-buster questions today → keep ~50 after FIX work, no deletions needed. This is the only tech track that is approximately at quality bar already.

## Open actions (priority order)

1. **Per-distractor rewrite of `JargonBillingCyberTopOff.cybersecOpsJargon`** (30 questions × 3 distractors = 90 explanations). Highest leverage on the cluster — content is already strong, the only blocker is the `DEFAULT_FLAW` slot.
2. **Audit + same rewrite for `JargonPracticePolish.cybersecOpsJargon`** once line count and scope confirmed.
3. **Add `lastReviewed` metadata** on `jargonBusters.ts` once schema supports it. Jargon rotates slowly but cloud-specific terminology (e.g., OAuth scopes, service mesh) ages faster than IR concepts.
4. **Verify no roadmap content has bled in** from `cybersecurityOperationsRoadmap` via the aggregator. The two tracks should stay voice-distinct: roadmap = sober operational, jargon = workplace-shorthand-translation.
5. **No regional tagging needed.**

## Estimated effort

- `BillingCyberTopOff` per-distractor rewrite: ~5 hours (30 × ~10 min)
- `JargonPracticePolish` rewrite: ~2-3 hours (TBD by scope)
- Aggregator bleed check + `lastReviewed` schema: ~1 hour

**~1 working day.** Lowest-risk highest-quality track in the cluster — small investment yields the closest thing to a launch-grade cyber bank.

## Notes for next auditor

This track is the strongest example in the entire career cluster of **what happens when generator output gets a voice-aware editor**. The TopOff file's question labels read like a human wrote them (in some cases, very dryly funny). The fix is purely mechanical: replace `DEFAULT_FLAW` slot with actual reasoning. Use this track as the "after" target when discussing the rewrite pattern for the rest of the cluster.

Sibling tracks `vcJargon`, `ibJargon`, `defenseBudgetingJargon`, `clinicalResearchJargon`, `medicalBillingJargon` use the same `jargonBusters.ts` + `JargonPracticePolish` + `JargonXTopOff` triplet — audit as a cluster.
