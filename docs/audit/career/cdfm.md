# Audit: cdfm

**Syllabus**: [`src/data/syllabi/career/cdfm.md`](../../../src/data/syllabi/career/cdfm.md)
**Track id**: `cdfm`
**Tier**: career
**Region**: **US-only** (CDFM is the DoD Comptroller credential; Anti-Deficiency Act, bona fide need rule, color-of-money, FIAR, apportionment, certifying-officer liability are all US fiscal law). Not currently tagged. Add `region: 'US'` to the track entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts) line 335. **Add `lastReviewed`** — this is regulation-adjacent content.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Resource Environment and Budget Roles | ⚠️ Partial | Obligation/outlay stages covered; Congress/OMB/Treasury role mapping absent. CR touched obliquely. |
| 2. Fiscal Law and Funds Availability | ✅ | Strongest area — every feeder has purpose/ADA/bona fide content. |
| 3. PPBE and Program Execution | ⚠️ Partial | Burn-rate, variance, one EAC question. No PV/EV/AC/CPI/SPI drill. |
| 4. Internal Controls and Stewardship | ⚠️ Partial | Certifier and segregation present; Prompt Payment, improper payments absent. |
| 5. Accounting, Audit Readiness, and FIAR | ⚠️ Partial | Audit-readiness generic. Budgetary-vs-proprietary and opinion taxonomy missing. No FIAR-named content. |
| 6. Exam Judgment and Workplace Transfer | ❌ | No timed mixed-set or rationale-writing style. |

**Chapter taxonomy mismatch.** Five competing schemes across feeders. The hand-authored `career.ts` block uses Floe-flavoured "X Dock / Reef / Cove" names; the three generated files use `CDFM: Appropriations`, `CDFM: Obligations`, `CDFM: Anti-Deficiency` etc. None match the syllabus chapter titles literally. Realign generated content to the six syllabus chapter names.

## Per-file recommendations

| File | CDFM Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) (block at line 1488) | 8 | **FIX** | Hand-authored with per-distractor explanations, but distractors are abstract platitudes ("Mission urgency does not erase fiscal boundaries") rather than naming the specific fiscal-law mechanism (ADA, bona fide need rule, severable services, 31 USC). Promote and add specificity; keep as the canonical bank. |
| [`careerAgentGeneratedCredentials2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials2.ts) (line 487) | ~16 | **FIX** | Best coverage of any feeder — has burn-rate math, EAC, segregation of duties, lifecycle cost, bona fide need, reprogramming. But uses file-wide `DEFAULT_FLAW` — **auto-FIX per audit rules.** Rewrite per-distractor explanations and promote to canonical. |
| [`careerAgentGeneratedCredentialsTechnical2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentialsTechnical2.ts) (line 337) | ~13 | **MERGE → Credentials2** | Heavy overlap (color of money, commitments, bona fide year-end, ADA overrun, reprogramming, audit-readiness, lifecycle cost). Lift the apportionment, conference-swag/necessary-expense, and one-person-kingdom questions; cut the rest. **`DEFAULT_FLAW` — auto-FIX.** |
| [`careerAgentGeneratedQualificationsTechnicalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsTechnicalPolish.ts) (line 141) | 4 | **DELETE** | Pure duplication of color-of-money, year-end bona fide, reprogramming, audit-readiness already in the two Credentials files. Zero novel content. **`DEFAULT_FLAW`.** |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) (line 493) | 4 | **DELETE** | Same four concepts (purpose statute, obligation/outlay, ADA, unobligated-balance) recycled a fourth time. **`DEFAULT_FLAW`.** |

**Net effect**: ~45 CDFM questions across 5 files → ~25 questions in 1 canonical file with per-distractor explanations and syllabus-aligned chapters. Closes role-mapping, EVM math drill, FIAR remediation, budgetary-vs-proprietary, and Prompt Payment gaps with new authoring.

## Open actions (priority order)

1. **Add `region: 'US'` and `lastReviewed`** to the track entry. CDFM is a regulated credential; un-dated fiscal-law content rots quickly.
2. **Author 10–12 questions** closing the gaps: NDAA/authorization vs appropriation, apportionment vs allotment, EVM (PV/EV/AC/CPI/SPI), budgetary vs proprietary accounting, audit opinions and material weakness, FIAR root-cause/remediation, Prompt Payment Act timing, certifying-officer pecuniary liability. Voice model: [`jargonBusters.ts`](../../../src/data/questionCatalog/jargonBusters.ts).
3. **Consolidate the four generated CDFM blocks** into one bank with per-distractor explanations and the six syllabus chapter names (Resource Environment, Fiscal Law, PPBE, Internal Controls, Accounting/Audit/FIAR, Exam Judgment).
4. **Rewrite the hand-authored `career.ts` block** distractors to name the specific authority (Anti-Deficiency Act 31 USC 1341, bona fide need rule 31 USC 1502, etc.) instead of abstract "mission urgency does not override fiscal discipline" prose.
5. **Delete** `CareerFrontDoorPolish` and `QualificationsTechnicalPolish` CDFM blocks once consolidation is done.

## Estimated effort

- Gap authoring (12 questions × 25 min): ~5 hours
- Consolidation + per-distractor rewrite: ~6 hours
- Region tag + `lastReviewed` schema + delete: ~1 hour

**~1.5 working days.**

## Notes for next auditor

CDFM and `defenseBudgetingRoadmap` share ~70% of concept space. After consolidation, CDFM should be the credential-test variant (timed, exam-judgement chapter) and `defenseBudgetingRoadmap` the on-the-job variant, with a shared concept core to avoid the 5-file scatter.
