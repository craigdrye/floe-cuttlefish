# Audit: cybersecurityOperationsRoadmap

**Syllabus**: [`src/data/syllabi/career/cybersecurity_operations_roadmap.md`](../../../src/data/syllabi/career/cybersecurity_operations_roadmap.md)
**Track id**: `cybersecurityOperationsRoadmap`
**Tier**: career
**Region**: Jurisdiction-neutral (NIST/SANS lineage assumed). No SOC 2 / FedRAMP / state breach-notification specifics — appropriate for workplace shorthand learners but worth flagging if AIGP-style certification prep is later added.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. SOC Triage and Alert Quality | ✅ | "Alert or incident", "Reported invoice lure", "VPN oddity" — multi-file rich |
| 2. Identity, Access, Privilege | ✅ | "Token exposure", "Impossible travel", "Emergency admin", "Shared admin password" — strong |
| 3. Endpoint, Network, Cloud Scope | ✅ | "Lateral movement clue", "Public bucket", "Suspicious scheduled task", "Root account sign-in" |
| 4. Containment and Recovery | ✅ | "Production caution", "Ransomware shared drive", "Forensics reboot temptation" |
| 5. Incident Communication | ✅ | "Executive update", "Two captains", "External reporting partner" |
| (Implicit) Vulnerability Management, Detection Engineering, Threat Intel | ✅ | Each gets multiple questions — possibly *too much* for a 5-chapter syllabus |

**Chapter taxonomy mismatch.** Generated files use "Cybersecurity Operations: Triage / Identity / Scope / Endpoint / Containment / Communication / Detection Engineering / Vulnerability Management / Threat Hunting / Third Party Risk / Evidence / Metrics / Privacy Boundary / Tabletop / Access Review / Phishing Triage / Malware / Logging / DLP / Detection Tuning / Ransomware / SaaS Security / Insider Risk / Network Segmentation / Case Management / Control Validation / On-Call Judgment / Alert Enrichment / Email Security / Endpoint Response / Cloud Logs / SIEM Hygiene / Incident Command / Data Handling / Detection Coverage / Ransomware Readiness / Threat Intel / Access Revocation / Forensics / Tabletop Follow-Through / Containment Scope". **40+ sub-topics for a 5-chapter syllabus** — taxonomy has exploded well beyond the course design.

## Per-file recommendations

| File | Track Q's | Bucket | Reason |
|---|---|---|---|
| [`careerAgentGeneratedRoadmapTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapTech.ts) (cybersecurityOperationsRoadmap) | 18 | **FIX** | Strong workplace content; 18 distinct topics each get one question. Every wrong answer uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and become canonical SOC bank. |
| [`careerAgentGeneratedRoadmapTechTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapTechTopOff.ts) (cybersecurityOperationsRoadmap, lines 31-112) | 16 | **MERGE → RoadmapTech** | Adds genuinely novel scenarios (OAuth consent, MFA fatigue, segmentation, insider risk, case management). Lift the new content; dedupe phishing/identity overlaps. |
| [`careerAgentGeneratedRoadmapGovTechFinalTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedRoadmapGovTechFinalTopOff.ts) (cybersecurityOperationsRoadmap, lines 277-358) | 16 | **MERGE → RoadmapTech (partial), DELETE rest** | Substantial overlap (third top-off pass). Salvageable: VPN-during-vacation alert enrichment, SIEM parser hygiene, gift-card BEC, two-captain incident command (~6 questions). Cut rest. |

**Net effect**: 50 SOC questions across 3 files → ~30 questions in 1 canonical file with per-distractor explanations and a 5-chapter taxonomy aligned to the syllabus.

## Open actions (priority order)

1. **Collapse the 40+ sub-topic chapter labels into the syllabus's 5 chapters.** This is the biggest hygiene gain — current labels look like a category-fragmentation accident.
2. **Consolidate the triplet** into one file with per-distractor explanations. ~50 → ~30 questions.
3. **Distinguish from `cybersecOpsJargon` track.** The jargon-buster track has its own better-quality bank (see separate audit); the roadmap should not duplicate it. Confirm no `cybersecOpsJargon` content has leaked into the roadmap via aggregator.
4. **No regional tagging needed today** but **flag for tagging** if SOC 2 / breach-notification specifics are later added — those would need US-flag.
5. **No `lastReviewed` urgency** — IR fundamentals rotate slowly; revisit annually unless ransomware-payment legal questions are added.

## Estimated effort

- Chapter taxonomy collapse: ~1 hour (mechanical edit)
- Consolidation + per-distractor rewrite: ~6 hours (50 → 30 questions)
- Dedupe verification + jargon-bleed check: ~1 hour

**~1 working day.** This track is solid in coverage and depth — the main issue is the explosion of sub-topic chapter names making the catalog look noisier than the content actually is.

## Notes for next auditor

The 40+ sub-topic problem is unique to this track within the tech cluster. Other tech tracks (cloud, software engineering, data/AI governance) use 12-18 sub-topics. Suspect the generator was given a very long list of cyber-specific concepts and produced one question each. The fix is mechanical chapter-rename, not deletion. Pair this audit with `cybersecurity_ops_jargon_buster.md` — the two are sibling tracks with different voice/audience.
