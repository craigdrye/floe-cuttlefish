# Audit: crcm

**Syllabus**: [`src/data/syllabi/career/crcm.md`](../../../src/data/syllabi/career/crcm.md)
**Track id**: `crcm` (title "CRCM")
**Tier**: career
**Status**: `playable`
**Region**: US-only (Reg Z, Reg B, Reg E, HMDA, RESPA, Reg CC, UDAAP, CRA, SCRA, MLA, GLBA, BSA) — currently **not** tagged. Add `region: 'US'`. This is the most US-bound track in the cluster; almost every concept maps to a specific US statute or agency.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Compliance Program Foundations (CMS, risk assessment, issue mgmt) | Weak | Implicit through monitoring/remediation questions; no explicit CMS framing. |
| 2. Product-Rule Mapping | Yes | "Fast deposit launch" and product-review scenarios in `FrontDoorPolish` and `Credentials2`. |
| 3. Core Consumer Regulations (Reg Z, B, E, HMDA, RESPA, Reg CC) | Partial | HMDA pipeline coding, disclosure system toggle, payoff-quote complaints covered. Reg E error resolution, Reg CC funds availability, and RESPA-specific timing under-covered. |
| 4. Complaints, UDAAP, and Customer Harm | Yes | Strong — fee headline wobble, default-setting trap, vulnerable-customer harm. |
| 5. Fair Lending and Community Obligations | Yes | Branch map surprise (redlining proxy), pricing-discretion fair lending, digital-only CRA, single-complaint review. SCRA/MLA missing. |
| 6. BSA/AML, Privacy, and Information Protection | Yes | GLBA analytics detour, shared-drive safeguards, vendor controls. |
| 7. Monitoring, Testing, and Issue Management | Yes | Repeat findings, exam binder confetti, root-cause reroute. |
| 8. Regulatory Change and Board Reporting | Weak | Not directly covered — no questions explicitly on regulatory change management or board-reporting design. |

**Chapter taxonomy mismatch.** Three competing schemes:
- `RiskPrivacy2` uses syllabus-aligned prefixes: "CRCM: Fair Lending", "CRCM: UDAAP", "CRCM: HMDA Judgment", "CRCM: Disclosures", "CRCM: GLBA Privacy", "CRCM: Vendor Controls", "CRCM: Remediation", "CRCM: Exams", "CRCM: GLBA Safeguards" — closest to syllabus
- `Credentials2` uses chapter names that look like internal CRCM topics ("Materiality Reef", "Sampling Reef" — based on sampled content)
- `TechnicalPolish` and `FrontDoorPolish` use yet another "CRCM: X" format

Standardize on the `RiskPrivacy2` prefix style and add the missing regulations as their own chapter names.

## Per-file recommendations

| File | CRCM Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) inline `crcm` block | ~6 | **KEEP** | Hand-authored inline anchors with per-distractor explanations. Voice baseline. |
| [`careerAgentGeneratedCredentialsRiskPrivacy2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentialsRiskPrivacy2.ts) | ~20 | **FIX** | Strongest CRCM bank — best chapter-to-syllabus alignment, sharp scenarios (fair-lending branch closures, UDAAP fee headlines, HMDA pipeline coding, GLBA shared drive, repeat audit findings). Every wrong answer uses `DEFAULT_FLAW`. Rewrite per-distractor, become canonical. |
| [`careerAgentGeneratedCredentials2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials2.ts) (crcm slice, lines 31–182) | ~30 | **MERGE → RiskPrivacy2** | Adds significant volume on materiality, sampling, monitoring rigor. Heavy overlap with RiskPrivacy2 on UDAAP/fair-lending/disclosures. Salvageable: sampling logic, qualitative-impact judgment, control-testing depth (~8–12 questions). Cut the rest. Different `DEFAULT_FLAW` string. |
| [`careerAgentGeneratedQualificationsTechnicalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsTechnicalPolish.ts) (crcm slice, lines 75–96) | ~4 | **DELETE** | Polish-flavored; concepts re-covered better in RiskPrivacy2. Yet another `DEFAULT_FLAW` string. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (crcm slice, lines 427–448) | ~4 | **DELETE** | "Fast deposit launch" and "small sample, big pattern" already covered. `DEFAULT_FLAW` chain. |

**Net effect**: ~64 CRCM questions across 5 generated files → ~32 questions in 1 canonical bank + 6 hand-written inline. Adding 4–6 Chapter 1 (CMS) and Chapter 8 (regulatory change / board reporting) questions closes the two main syllabus gaps. Adding 4–6 questions for under-covered regulations (Reg E, Reg CC, RESPA, SCRA, MLA) gets the consumer-regulation chapter to honest coverage.

## Open actions (priority order)

1. **Add `region: 'US'`** to the track entry in [`career.ts` ageCatalog](../../../src/data/ageCatalog/career.ts). This track is the cluster's purest US-only track.
2. **Consolidate `RiskPrivacy2`** with per-distractor rewrites and syllabus-aligned chapter names.
3. **Merge novel `Credentials2` scenarios** (sampling rigor, materiality judgment) into the canonical bank.
4. **Delete `TechnicalPolish` and `FrontDoorPolish` CRCM slices** after lifting any unique questions.
5. **Author 4–6 Chapter 1 questions** (CMS structure, risk assessment, issue management).
6. **Author 4–6 Chapter 8 questions** (regulatory change management, impact assessment, board-reporting design).
7. **Author 4–6 under-covered regulation questions** (Reg E error resolution, Reg CC funds availability, RESPA timing, SCRA, MLA).
8. **Add `lastReviewed` metadata** — CFPB rules and HMDA reporting requirements update routinely.

## Estimated effort

- Per-distractor rewrite on RiskPrivacy2: ~2.5 hours (20 questions × 8 min)
- Merge + dedupe Credentials2: ~3 hours
- New authoring (CMS + reg change + missing regs): ~5 hours (15 questions × 20 min)
- Region tag + lastReviewed: ~30 min

**~1.5 working days** to bring CRCM to bar.

## Notes for next auditor

CRCM is the densest US-regulatory track in this cluster and has the strongest claim to a `region: 'US'` tag (the regulations are not transferable to UK/EU/CA). If Floe ever ships internationally, this track requires either a UK/EU counterpart (FCA, PRA, CONC) or a clear US-only label. The `RiskPrivacy2` file also contains `aigp` content — that audit should consider the same per-distractor rewrite.
