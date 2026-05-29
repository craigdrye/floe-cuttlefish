# Audit: publicAffairs

**Syllabus**: [`src/data/syllabi/career/public_affairs_policy_maze.md`](../../../src/data/syllabi/career/public_affairs_policy_maze.md) (12-chapter syllabus with explicit US/UK/EU comparison)
**Track id**: `publicAffairs`
**Tier**: career
**Region**: **Multi-jurisdiction (US + UK + EU)** — the only non-US-only track in the cluster. Syllabus explicitly calls for US (LDA, FARA, Federal Register), UK (Whitehall, Registrar of Consultant Lobbyists), and EU (Commission, trilogues, Transparency Register). Region tag should be `region: ['US', 'UK', 'EU']`. **Add `lastReviewed`** — registration rules, thresholds, EU procedure are live regulatory content.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. PA Operating System (PA vs lobbying vs GR, triage) | ⚠️ Partial | Decision point implies this; no explicit PA-vs-lobbying taxonomy question. |
| 2. Policy Process and Institutional Power | ✅ | Legislative process, rulemaking, public records, consultations. |
| 3. Stakeholder, Coalition, Opposition Mapping | ✅ | Stakeholder map, coalition building and due diligence. |
| 4. Evidence, Messaging, Policy Argument | ✅ | Message discipline, advocacy framing throughout. |
| 5. Lobbying Campaign Design and Tactics | ⚠️ Partial | Timing covered; tactic sequencing, testimony, consultation responses absent. |
| 6. Ethics, Compliance, Transparency (LDA/FARA/gifts/revolving door) | ⚠️ Partial | Donation compliance, decision log. FARA, revolving door, pay-to-play absent. |
| 7. U.S. Operating Model | ⚠️ Partial | Career bank under-tests LDA/FARA triggers, OMB review, state AGs, ballot initiatives. |
| 8. U.K. Operating Model (Whitehall/SpAds/SIs/devolved/Registrar) | ❌ | **Material gap** — UK Parliament basics live only in the `high`-tier sibling. |
| 9. E.U. Operating Model (Commission/rapporteurs/Council/trilogues/Transparency Register) | ❌ | **Material gap** — career bank misses rapporteur dynamics, trilogues, delegated/implementing acts. |
| 10. Regulatory Affairs and Implementation Risk | ⚠️ Partial | Budget ask covered; judicial review, supervision/guidance, market access absent. |
| 11. Political Risk, Monitoring, Executive Briefing | ✅ | Policy risk, post-election scenarios, public inquiries. |
| 12. Policy Maze Simulation (capstone) | ❌ | No multi-jurisdiction capstone scenario. |

Syllabus is the **most ambitious in the cluster** (12 chapters, US/UK/EU split). Bank covers ~60%; UK/EU models, lobbying-ethics specifics, regulatory implementation are the missing 40%.

**Chapter taxonomy mismatch.** `careerPublicAffairsQuestions` uses ~30 free-form labels; `CareerSkillsPolish` uses yet another scheme. Neither matches the syllabus's 12 chapter names. **Major realignment needed.**

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`practicalPoliticsQuestions.ts`](../../../src/data/questionCatalog/practicalPoliticsQuestions.ts) `careerPublicAffairsQuestions` (line 1530) | ~52 | **FIX** | **Highest-quality file in the cluster** — hand-authored, per-distractor explanations, lesson fields, sharp decision-focused scenarios. Issues: 30-label chapter taxonomy vs syllabus's 12, missing UK/EU operating-model coverage, missing lobbying-ethics specifics. Realign and fill; canonical. |
| `highPracticalPoliticsQuestions` (same file, line 3) | — | **KEEP (different tier)** | AP/high-school sibling — UK Parliament basics, EU triangle, FPTP. Don't double-route; use as **source material** when authoring the career-level UK/EU chapters. |
| [`careerAgentGeneratedCareerSkillsPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerSkillsPolish.ts) `publicAffairs` (line 119) | 4 | **DELETE** | Stakeholder map, message discipline, coalition work, policy timing — all four covered better in the canonical file. **`DEFAULT_FLAW`.** |

**Net effect**: ~56 across 2 files → ~50 canonical + ~30 net-new closing UK, EU, ethics, capstone gaps. Final ~80, syllabus-aligned, jurisdiction-tagged.

## Open actions (priority order)

1. **Add `region: ['US', 'UK', 'EU']` and `lastReviewed`** — only multi-jurisdiction course in the cluster.
2. **Author ~12 UK questions** (Chapter 8): Whitehall, SpAds, SIs, select committees, devolved admins, consultations, Registrar of Consultant Lobbyists.
3. **Author ~12 EU questions** (Chapter 9): Commission proposal, rapporteur dynamics, Council blocking minorities, trilogues, delegated vs implementing acts, Transparency Register, Better Regulation.
4. **Author ~6 lobbying-ethics questions** (Chapter 6): LDA thresholds, FARA vs LDA, revolving-door cooling-off, gifts/hospitality, pay-to-play.
5. **Realign chapter labels** to the syllabus's 12 names.
6. **Delete the `CareerSkillsPolish` block.**
7. **Author 2–3 capstone questions** for the multi-jurisdiction simulation.

## Estimated effort

- UK + EU authoring (24 × 25 min): ~10 hours
- Ethics gap (6 × 25 min): ~2.5 hours
- Realignment, delete, tags, capstone: ~4 hours

**~2.5 working days** — the largest authoring lift in the cluster.

## Notes for next auditor

The **odd-one-out** in the cluster. Every other track is US-only; `publicAffairs` is genuinely multi-jurisdiction by design and needs region-array tagging (schema implication). Hand-authored bank is the cluster's highest-quality content — has lesson fields and sharper distractor logic than even `jargonBusters.ts`. Gap is authoring, not cleanup. Pair with `nationalSecurityPolicyRoadmap` on the interagency chapter (overlap in clearance/dissent/decision memos; different audiences).
