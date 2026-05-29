# Audit: cybersecurity

**Syllabus**: [`src/data/syllabi/career/cybersecurity_basics.md`](../../../src/data/syllabi/career/cybersecurity_basics.md)
**Track id**: `cybersecurity`
**Tier**: career
**Region**: Jurisdiction-neutral (NIST NICE + CISA referenced in syllabus). Content is beginner-friendly defensive cyber; nothing US-specific bleeds through.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Security Thinking and Risk (CIA, threat, vulnerability, attack surface) | ⚠️ Thin | Hand-written `career.ts` has no CIA-triad/risk-register questions. `DesignTech2` "Network segmentation" hints at it. |
| 2. Phishing, Social Engineering, Credential Theft | ✅ | `career.ts` "Phishing clue", `DesignTech` "Urgent invoice", `DesignTech2` covers BEC implicitly |
| 3. Identity and Access (passwords, MFA, passkeys, JML) | ✅ | "Strong password", "Two-factor", "Push fatigue", "Dormant account", "Shared login shortcut" — strong |
| 4. Devices, Networks, Cloud Basics | ✅ | "Default admin", "Flat network", "Patch management" |
| 5. Malware, Ransomware, Common Attacks | ⚠️ Thin | Only `DesignTech` "First hour" ransom-note question. No lateral-movement, backup-strategy, blast-radius for basics tier. |
| 6. Logging, Monitoring, Detection Basics | ✅ | "Silent failure" (DesignTech), "Backup restore proof" |
| 7. Incident Response | ✅ | "First hour" + "Blame-free reporting" |
| 8. Security Culture and Career Paths | ⚠️ Thin | "Blame-free reporting" covers culture; no career-path or SOC/GRC/appsec orientation questions |

**Chapter taxonomy mismatch.** Hand-written `career.ts` uses thematic chapters ("Cyber Dock/Reef/Cove/Lagoon"). Generated `DesignTech` files use "Cybersecurity: Phishing", "Cybersecurity: Passwords" etc. — closer to syllabus but still not literal. Realign before launch.

## Per-file recommendations

| File | Track Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (cybersecurity block, lines 117-122) | 4 | **KEEP** | Hand-written, per-distractor explanations, brain-burner voice. Add 4-6 more questions to fill thin chapters. |
| [`careerAgentGeneratedCoreSupplementDesignTech.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementDesignTech.ts) (cybersecurity, lines 155-216) | 12 | **FIX** | Strong workplace-grounded content (urgent invoice, push fatigue, default admin, flat network) but `DEFAULT_FLAW` constant on every wrong answer. **Question labels are punchy and educational** but the explanation slot is wasted. Rewrite per-distractor reasons. |
| [`careerAgentGeneratedCoreSupplementDesignTech2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCoreSupplementDesignTech2.ts) (cybersecurity, lines 195-end) | ~12 | **FIX/MERGE → DesignTech** | Same `DEFAULT_FLAW` pattern. Dormant-account, default-admin, and threat-modeling questions are good but partially overlap DesignTech's identity & default-admin coverage. Lift novel content (threat modelling, identity governance) and dedupe rest. |
| Operations bleed | — | **Flag** | The `cybersecurityOperationsRoadmap` track (separate audit) covers SOC/IR detail. Basics learners may see ops content because aggregator order is opaque — keep these tracks strictly separate. |

**Note re May 2026 audit warning.** The audit flagged `CoreSupplementDesignTech` as duplicating hand-curated UX content in career.ts. For the *cybersecurity* track the duplication is mild (different angles, different difficulty), but the **pattern is identical**: 4 hand-written `career.ts` questions + 12-24 generated supplement questions, with the supplement questions doing the heavy lifting and the hand-written set looking thin. Decide whether `career.ts` becomes the canonical seed or just the first-impression sample.

## Open actions (priority order)

1. **Fix `DEFAULT_FLAW` rows** in `DesignTech` + `DesignTech2` cybersecurity blocks (~24 questions × 3 distractors = 72 explanations). Highest-impact single change for this track.
2. **Author 4-6 risk-thinking questions** for Chapter 1 (CIA triad, risk register, attack surface). Voice template: hand-written `career.ts` cyber section.
3. **Author 3-4 malware/ransomware questions** for Chapter 5 (blast radius for non-technical reader, backup strategy, lateral movement intro).
4. **Author 2-3 career-path orientation questions** for Chapter 8 (SOC vs GRC vs appsec — entry-level orientation).
5. **Realign chapter names** to match syllabus 8-chapter taxonomy.
6. **Keep ops content out of basics.** Verify the aggregator does not pull `cybersecurityOperationsRoadmap` questions into `cybersecurity`.

## Estimated effort

- Per-distractor rewrite of DesignTech + DesignTech2 cyber blocks: ~5 hours
- New authoring (10-13 questions): ~4 hours
- Chapter realignment + aggregator check: ~1 hour

**~1.25 working days.** Cybersecurity Basics is one of Floe's most exposed tracks (named in the careerCoreTracks list, used in onboarding). Prioritise.

## Notes for next auditor

This track shares a chapter-naming pattern with the **basics-tier sister tracks** (`uxDesign`, `productManagement`, `negotiation`, etc.) — all use the "Dock/Reef/Cove/Lagoon" hand-written set as a 4-question seed, then top up from a generated supplement file. Pattern audit: confirm whether each basics track has the same hand-written-seed + generated-supplement structure, and whether the supplement files universally use `DEFAULT_FLAW`.
