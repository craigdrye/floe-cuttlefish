# Audit: nationalSecurityPolicyRoadmap

**Syllabus**: [`src/data/syllabi/career/national_security_policy_roadmap.md`](../../../src/data/syllabi/career/national_security_policy_roadmap.md)
**Track id**: `nationalSecurityPolicyRoadmap`
**Tier**: career
**Region**: **US-only** (NSC process, deputies/principals committee, interagency clearance, FARA-adjacent disclosure, congressional notification, Section 333/2282/AECA security assistance, Leahy vetting). Not currently tagged. Add `region: 'US'` to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 610. **Add `lastReviewed`** — authorities, sanctions regimes, and partner-vetting rules turn over with administrations.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Strategy, Interests, and Threats | ✅ | Interest-first, capability vs intent, end-state test, assumption check. |
| 2. Intelligence and Evidence | ✅ | Confidence label, alternative explanation, source caveat, warning indicators. |
| 3. Instruments of National Power | ✅ | DIME tool fit, second-order, diplomacy first, escalation ladder, sanctions targeting, economic statecraft. |
| 4. Interagency Process and Decision Making | ✅ | Ownerless decision, dissent capture, deputies packet, two-agencies-diverge. |
| 5. Crisis and Policy Communication | ✅ | What changed, public-line mismatch, after-action, unknown casualty count. |
| Capstone (integrated policy package) | ❌ | No multi-output integrated scenario. |

Coverage is the **broadest in the cluster** — every syllabus chapter has multiple questions. However, the May 2026 "generic vs Finance" critique bites hardest here. Almost no question names a specific authority (NSPM, Title 10 vs Title 50, Section 1206/333/2282, AECA, IEEPA, FARA, Leahy Law, Goldwater-Nichols). Questions test posture and staff craft generically — a reader could not tell whether this is a US, UK, or NATO course.

**Chapter taxonomy mismatch.** `RoadmapGovernment` uses the five syllabus chapter names literally ✅; `RoadmapGovTechFinalTopOff` uses long prefixed names ("National Security Policy: Framing / Sanctions Tools / Human Rights") ❌; `RoadmapPracticePolish3` uses different prefixes ("Objective Clarity / Escalation Risk") ❌. Realign.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapGovernment.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovernment.ts) (line 307) | 16 | **FIX** | Best base — chapter taxonomy matches syllabus. **`DEFAULT_FLAW` — auto-FIX.** Rewrite per-distractor and name actual authorities (Title 10/50, FARA, Leahy, IEEPA, Section 333). |
| [`careerAgentGeneratedRoadmapGovTechFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovTechFinalTopOff.ts) (line 195) | 16 | **MERGE → RoadmapGovernment** | Additive: ally red lines, sanctions-targeting evidence, human-rights vetting, source-protection, actor mapping, implementation tracker (~7–8 unique). **`DEFAULT_FLAW`.** Realign chapter names. |
| [`careerAgentGeneratedRoadmapPracticePolish3.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapPracticePolish3.ts) (line 75) | 4 | **DELETE** | Objective clarity, escalation, interagency disagreement, measures of effect — all covered better in base. **`DEFAULT_FLAW`.** |

**Net effect**: 36 questions across 3 files → ~24 in 1 canonical file with authority-naming distractors and the syllabus chapter taxonomy.

## Open actions (priority order)

1. **Add `region: 'US'` and `lastReviewed`** to the track entry. NS authorities and sanctions regimes shift with each administration; un-dated content rots.
2. **Highest priority of the cluster: name the authorities.** This is exactly the May 2026 "generic vs Finance" finding. Rewrite distractors to test recognition of Title 10 vs Title 50, NSC process steps, IEEPA targeting evidence, AECA notification thresholds, Leahy vetting triggers, FARA registration. Without this, the track will not feel like a US-government course.
3. **Consolidate** the GovTechFinalTopOff novel content into the base file; delete the PracticePolish block; realign all chapter names to the five syllabus chapters.
4. **Author 3–5 capstone questions** that string together the syllabus's "policy package" deliverables (threat brief → intel note → options matrix → interagency memo → crisis update).
5. **Consider adding cleared-environment workplace cues** (SCIF discipline, tear-line writing, originator control, "rev/cleared/for use" markings, deconfliction notifications). The syllabus calls for "cleared communication" but no questions test it.

## Estimated effort

- Per-distractor + authority-naming rewrite (16 base questions × 30 min): ~8 hours
- Consolidation of GovTechFinalTopOff (~8 novel questions lifted, dedupe): ~3 hours
- Capstone authoring + delete + chapter rename + tags: ~3 hours

**~2 working days.** Authority-naming work is the heaviest in the cluster.

## Notes for next auditor

Weakest match in the cluster to the "Finance has named authorities" benchmark. Content is competent staff-craft but reads as generic policy hygiene rather than US national security. Fixing this is the highest-leverage change in the entire cluster for the May 2026 finding.
