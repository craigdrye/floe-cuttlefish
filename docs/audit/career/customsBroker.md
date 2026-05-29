# Audit: customsBroker

**Syllabus**: [`src/data/syllabi/career/customs_broker.md`](../../../src/data/syllabi/career/customs_broker.md)
**Track id**: `customsBroker`
**Tier**: career
**Region**: US (CBP / 19 CFR / HTSUS — US-only; not currently tagged)
**Status**: `playable` — has questions wired

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Broker Role, Exam Format, Reference Navigation | ✅ | Reasonable care, reference search, open-book exam strategy — covered in `career.ts` and LegacyFinanceOpsTopOff |
| 2. Classification with the HTSUS | ✅ | GRI starting point, marketing-name trap, binding rulings, classification change on new model — strong |
| 3. Valuation | ✅ | Assists, first-sale, Incoterms/DDP, related-party pricing — strong in LegacyFinanceOpsTopOff |
| 4. Origin, Marking, Trade Programs | ✅ | Ship-from trap, marking ("Designed in USA"), FTA preference claims — strong |
| 5. Entry, Release, Entry Summary | ✅ | Missing invoice detail, POA, entry summary review, sample-vs-sale — well covered |
| 6. Duties, Fees, AD/CVD, Special Situations | ✅ | AD/CVD scope, quota, drawback, FTZ — strong in LegacyFinanceOpsTopOff |
| 7. Recordkeeping, Corrections, Compliance | ✅ | Post-summary correction, prior disclosure, recordkeeping, liquidated damages — strong |
| 8. Practice Exams and Broker Judgment | ✅ | Broker supervision, client instructions ("smells smoky"), exam strategy — covered |

**Coverage is excellent — best of the six niche tracks.** This is the model for what a well-served credential track looks like in the niche cluster.

## Per-file recommendations

| File | customsBroker Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) `customsBroker` block (lines 147–160) | 12 | **KEEP** | Hand-authored with per-distractor explanations and nudges. Covers HS code purpose, country of origin, reasonable care, recordkeeping, GRI, assists, AD/CVD. Solid foundation. |
| [`careerAgentGeneratedLegacyFinanceOpsTopOff.ts`](../../../src/data/questionCatalog/careerAgentGeneratedLegacyFinanceOpsTopOff.ts) (lines 235–396) | 27 | **FIX** | Most comprehensive customs bank in the catalog — PGA, binding rulings, related parties, first sale, Incoterms, marking, drawback, FTZ, FTA, quota, protests, prior disclosure, POA, broker supervision, confidentiality. Genuinely exam-grade scenarios. But every distractor uses `DEFAULT_FLAW`. Rewrite per-distractor and this is the canonical bank. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) `customsBroker` block (lines 295–316) | 4 | **DELETE** | Front-door teasers using `DEFAULT_FLAW`; all four concepts (marketing name, ship-from, reasonable care, exam strategy) are already in `career.ts` and LegacyFinanceOpsTopOff with more depth. |
| [`careerAgentGeneratedCore2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCore2.ts) `customsBroker` block (lines 399+) | ~5 | **MERGE → LegacyFinanceOpsTopOff (partial), DELETE rest** | Likely overlaps Core/credentials boundary. Salvage only genuinely new scenarios. |
| [`careerAgentGeneratedQualificationsTechnicalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsTechnicalPolish.ts) `customsBroker` block (lines 53+) | ~5 | **FIX or DELETE** | Polish-tier `DEFAULT_FLAW`. Keep only if it adds genuinely new coverage beyond LegacyFinanceOpsTopOff. |

**Net effect**: ~53 generated questions across 5 files → 12 hand-authored kept + 27 FIX'd canonical bank + 0–5 merged = ~40 high-quality questions covering every syllabus chapter.

## Open actions (priority order)

1. **Tag `region: 'US'`** on customsBroker entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts). CBP and 19 CFR are US-only; international customs brokers (CHB-equivalent) follow different rules.
2. **Auto-FIX every `DEFAULT_FLAW`** in LegacyFinanceOpsTopOff for this track. ~27 questions × 3 distractors = ~80 distractor explanations to write. The scenarios are good enough to justify the effort.
3. **DELETE** the FrontDoorPolish customsBroker block — fully redundant with stronger banks.
4. **Add `lastReviewed` metadata** — CBLE exam content and HTSUS revise annually. Mark each question with the year assumed.
5. **Consider light authoring on HTSUS GRI mechanics** — current bank tests GRI awareness but not GRI 1/2/3 hierarchy directly. ~5 questions would close the only remaining gap.

## Estimated effort

- DEFAULT_FLAW rewrite across ~27 LegacyFinanceOps questions: ~6 hours
- Optional GRI mechanics authoring: ~2 hours
- Delete pass + region tag + edition stamps: ~1 hour

**~1 working day.** Highest-leverage track in the niche cluster — content already exists at exam scope; only the distractor explanations need lifting. Excellent ROI.

## Notes for next auditor

customsBroker is the **success template** for this niche cluster — same generated-file architecture as the other tracks but actually covers every syllabus chapter. The lesson: when topoff banks are full-syllabus instead of cherry-picked, the FIX path is genuinely tractable. Compare to NERC or Climate where the topoff banks are skeletal.
