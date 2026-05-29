# Audit: nerc

**Syllabus**: [`src/data/syllabi/career/nerc_system_operator.md`](../../../src/data/syllabi/career/nerc_system_operator.md)
**Track id**: `nerc` (syllabus header says `nercSystemOperator`; age-catalog id is `nerc` — taxonomy drift)
**Tier**: career
**Region**: US (NERC = North American Electric Reliability Corporation — US & Canada; not currently tagged)
**Status**: `playable` — has questions wired

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Bulk Electric System and Operator Role | ⚠️ | "Reliability first" general framing only; no RC/BA/TOP/GOP function differentiation |
| 2. Reliability Standards and Operating Limits | ⚠️ | "N-1 thinking", "operating margin" — conceptual only; no SOL/IROL distinction, no voltage/thermal/frequency limit specifics |
| 3. Situational Awareness and Control-Room Monitoring | ✅ | Alarm flood, alarm management — covered in `career.ts`, FrontDoorPolish, CredentialsCompliance2 |
| 4. Transmission Operations and Contingency Response | ⚠️ | "Transfer Path Cove" margin question only; no congestion, switching, RAS detail |
| 5. Balancing, Frequency, Interchange | ❌ | **No questions.** ACE, frequency response, reserve types, interchange — entirely missing |
| 6. Communications and Shift Discipline | ✅ | Closed-loop communication, readback — covered in `career.ts` and FrontDoorPolish |
| 7. Emergency Operations and Load Shed | ❌ | **No questions.** Emergency declarations, manual load shed, capacity deficiency — entirely missing |
| 8. Restoration and Exam Readiness | ✅ | Restoration discipline, blackstart sequencing — covered in `career.ts` and FrontDoorPolish |

**Major coverage gaps in Chapters 5 and 7** — these are core NERC SOC exam topics (balancing operator and emergency operations are entire certification specializations).

**Track ID drift**: syllabus says `nercSystemOperator`, age-catalog says `nerc`, question files key on `nerc`. Pick one and align.

## Per-file recommendations

| File | nerc Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) `nerc` block (lines 1426–1435) | 8 | **KEEP** | Hand-authored with per-distractor explanations and nudges. Covers reliability purpose, situational awareness, closed-loop comms, restoration, N-1, alarm management, transfer path margin, blackstart. Solid conceptual foundation but no operational detail. |
| [`careerAgentGeneratedCredentialsCompliance2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentialsCompliance2.ts) `nerc` block (lines 133+) | ~10 | **FIX** | Likely exam-style scenarios but uses `DEFAULT_FLAW` (file-level constant). Rewrite per-distractor explanations and align to syllabus chapter names. Likely the closest existing thing to canonical content. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) `nerc` block (lines 383–404) | 4 | **DELETE** | Front-door teasers using `DEFAULT_FLAW`; all four concepts (alarm flood, readback, restoration temptation, compliance record) already in `career.ts` with per-distractor depth. |
| [`careerAgentGeneratedCredentials1.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials1.ts) `nerc` block (lines 579+) | ~10 | **MERGE → CredentialsCompliance2 (partial), DELETE rest** | Substantial topic overlap. Salvage only genuinely new operational scenarios. `DEFAULT_FLAW` throughout. |
| [`careerAgentGeneratedQualificationsTechnicalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsTechnicalPolish.ts) `nerc` block (lines 53+) | ~5 | **FIX or DELETE** | Polish-tier `DEFAULT_FLAW`. Keep only if it adds new operational detail. |

**Net effect**: ~35 generated questions across 5 files → 8 hand-authored kept + ~15 FIX'd canonical + need ~15 new questions to close Chapter 5 (balancing) and Chapter 7 (emergency ops) = ~40 high-quality questions.

## Open actions (priority order)

1. **Resolve track ID drift.** Pick `nerc` or `nercSystemOperator` and update syllabus, age catalog, and all question file keys. Recommend `nercSystemOperator` to match other camelCase track ids.
2. **Tag `region: 'US'`** on the entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts). NERC is NERC-North-American (US + Canada); UK/EU/AU grids use different reliability frameworks.
3. **Author Chapter 5 (Balancing/Frequency/Interchange) and Chapter 7 (Emergency Operations) content** — author ~15 questions on ACE, frequency response, reserve types, interchange schedules, emergency declarations, manual load shed. Voice template = hand-authored `career.ts` block. **This is a real coverage gap** — these chapters cover core SOC certification specializations.
4. **Auto-FIX every `DEFAULT_FLAW`** in CredentialsCompliance2, Credentials1, FrontDoorPolish, QualificationsTechnicalPolish for this track.
5. **DELETE** the FrontDoorPolish nerc block — fully redundant.
6. **Add `lastReviewed` metadata** — NERC standards are revised continuously; tag each question with the standard version or year assumed.

## Estimated effort

- Track ID rename + region tag: ~30 min
- Chapter 5/7 authoring: ~5 hours (15 questions × 20 min)
- DEFAULT_FLAW rewrite across ~25 questions: ~5 hours
- Delete/merge pass: ~1 hour

**~1.5 working days.** Justifiable: NERC SOC certifications (RC, BA, TO, GOP) carry strong wages and have a small, dedicated exam-prep market. Coverage gaps are addressable.

## Notes for next auditor

NERC is the **second-worst-covered** track in the niche cluster (only Climate is worse). Unlike Climate, where the content/audience mismatch is severe, NERC's gaps are pure coverage holes that authoring can close. The hand-authored core is high quality and reusable as a voice template. Recommend investment.
