# Audit: apiInspectors

**Syllabus**: [`src/data/syllabi/career/api_510_570_653.md`](../../../src/data/syllabi/career/api_510_570_653.md)
**Track id**: `apiInspectors`
**Tier**: career
**Region**: US (API is the American Petroleum Institute; not currently tagged)
**Status**: `playable` — has questions wired

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Inspector Role, Code Scope, Reference Navigation | ✅ | Hand-authored in `career.ts` (Code Books Dock, Reference Shelf, Code Scope) plus topoff coverage |
| 2. Equipment Design Basics and Inspection Data | ⚠️ | Light. MAWP, design pressure, equipment data sheet not directly tested |
| 3. Corrosion and Damage Mechanisms | ✅ | Strong: pitting, CUI, chloride feed-change, general vs localized — covered in `career.ts` plus topoff |
| 4. Inspection Planning, Intervals, and Methods | ✅ | Strong: NDE selection, RBI, interval after rate change, calendar comfort |
| 5. API 510 Pressure Vessels | ✅ | Rerating, relief device review, repair vs alteration, hydrotest alternatives |
| 6. API 570 Piping | ⚠️ | Partial — circuit-level CML strategy and injection-point logic absent |
| 7. API 653 Tanks | ⚠️ | Only tank settlement and one nozzle alteration; no shell/bottom/out-of-service framing |
| 8. FFS, Records, Exam Readiness | ✅ | Below-minimum-thickness escalation, repair package gaps, professional judgment |

**Chapter taxonomy mismatch.** `career.ts` chapter names ("Code Books Dock", "Pressure Vessel Reef", "Tank Lagoon") use the Floe nautical voice — fine and distinctive. `CredentialsTechnical2` uses "API Inspection: Corrosion" style ("API Inspection: <topic>") — clean and exam-aligned but a different scheme. Pick one.

## Per-file recommendations

| File | apiInspectors Q's | Bucket | Reason |
|---|---|---|---|
| [`career.ts`](../../../src/data/questionCatalog/career.ts) `apiInspectors` block (lines 1466–1487) | 20 | **KEEP** | Hand-authored with per-distractor explanations and nudges. Includes numeric thickness/corrosion-rate math (Q6709–6710) and good code-scope reasoning. Strongest content in the bank. |
| [`careerAgentGeneratedCredentialsTechnical2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentialsTechnical2.ts) (lines 235–336) | 20 | **FIX** | Solid scenarios (pit-depth surprise, mystery spool, settlement, alteration nozzle) and the chapter naming is exam-clean, but every distractor uses `DEFAULT_FLAW`. Rewrite per-distractor explanations and this becomes the canonical exam-style bank. |
| [`careerAgentGeneratedCredentials2.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCredentials2.ts) (lines 335–486 block) | ~20 | **MERGE → CredentialsTechnical2 (partial), DELETE rest** | Substantial topic overlap with CredentialsTechnical2. Salvage unique scenarios; `DEFAULT_FLAW` everywhere. |
| [`careerAgentGeneratedCareerFrontDoorPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedCareerFrontDoorPolish.ts) `apiInspectors` block (lines 119–140) | 4 | **DELETE** | Front-door teasers using `DEFAULT_FLAW`; concepts ("Calendar comfort", "RBI matrix") are re-covered in CredentialsTechnical2 with more depth. |
| [`careerAgentGeneratedQualificationsTechnicalPolish.ts`](../../../src/data/questionCatalog/careerAgentGeneratedQualificationsTechnicalPolish.ts) `apiInspectors` block | ~5 | **FIX or DELETE** | Polish-tier `DEFAULT_FLAW`. Keep only if it adds genuinely new coverage (Chapter 6 piping CMLs, Chapter 7 tank bottom/shell). |

**Net effect**: ~50–55 generated questions across 4 files → 20 hand-authored kept + ~20 FIX'd exam-style + ~5 new Chapter 6/7 questions. Estimated ~40 high-quality questions.

## Open actions (priority order)

1. **Tag `region: 'US'`** on the apiInspectors entry in [`src/data/ageCatalog/career.ts`](../../../src/data/ageCatalog/career.ts). API codes are US-anchored.
2. **Auto-FIX every `DEFAULT_FLAW`** in CredentialsTechnical2, Credentials2, FrontDoorPolish, QualificationsTechnicalPolish for this track. Each distractor needs a real "why this is wrong" line — there is no shortcut.
3. **Close Chapter 6 (piping circuit/CMLs/deadlegs/injection points) and Chapter 7 (tank shell/bottom/out-of-service) coverage gaps** — author 6–10 questions, voice template = the hand-authored block in `career.ts`.
4. **Pick one chapter taxonomy** (Floe-nautical or "API Inspection: <topic>") and align all files. Recommend the exam-clean form for credential tracks.
5. **Add `lastReviewed` metadata** — API codes have revision cycles (510 13th ed., 570 5th ed., 653 5th ed.). Mark each question with the code edition assumed.

## Estimated effort

- DEFAULT_FLAW rewrite across ~50 questions: ~10 hours
- Chapter 6/7 authoring: ~3 hours (10 questions × 20 min)
- Chapter realignment + region tag + edition stamps: ~1 hour
- Merge/delete pass: ~1 hour

**~1.5–2 working days.** Justifiable: API inspector credentials are a high-value, US-only niche (median $90k+) with an underserved exam-prep market. The hand-authored core is genuinely good.

## Notes for next auditor

The CDFM, SOCRA/ACRP, and Certified General Appraiser tracks all share the CredentialsTechnical2/Credentials2 file structure and same DEFAULT_FLAW pattern. Cluster-audit them together. Patent Bar also belongs in this technical-credential cluster.
