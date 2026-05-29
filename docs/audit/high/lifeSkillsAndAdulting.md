# Audit: lifeSkillsAndAdulting

**Syllabus**: [`src/data/syllabi/high/life_skills_and_adulting.md`](../../../src/data/syllabi/high/life_skills_and_adulting.md)
**Track id**: `lifeSkillsAndAdulting` (Year 11/12, ages 15-18). Also `lifeSkillsHigh` (`status: 'soon'`, `high.ts:418`) — these are **near-duplicates**: same name, same subtitle intent, both point at the same syllabus per `syllabi/index.ts:172-173`.
**Tier**: high
**Region**: **US-leaning** (W-4, W-2, 1099, FICA, 401(k), FDIC/NCUA, FAFSA, healthcare.gov are US-specific). Needs `region: 'US'` tag, or syllabus needs UK/AU/global variants.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Money Basics and Banking | not covered (in this track's wired bank) | None of `lifeEconomicsBlueprints` 2 items match |
| 2. Credit, Debt, and Financial Decisions | not covered | Same |
| 3. Paychecks, Taxes, and Benefits | not covered | Total gap |
| 4. Housing and Roommate Life | not covered | Total gap |
| 5. Transportation and Basic Maintenance | not covered | Total gap |
| 6. Career Navigation and Professional Communication | not covered | Total gap |
| 7. Health Care, Civic Life, and Personal Documents | not covered | Total gap |
| 8. Domestic Systems and Emotional Survival | not covered | Total gap |

Track has **no dedicated bank**. Falls through `familyFor` -> 'life' (matches "life skills"/"adulting"/"admissions") -> `lifeEconomicsBlueprints` which has **only 2 items** (opportunity-cost Saturday job, canteen cookie incentive). These cycle 25x to fill 50. Players get ~25 repeats of two items, neither of which targets a single syllabus chapter directly.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `lifeEconomicsBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) (lines 579-606) | 2 x 25 = 50 | **DELETE for this track** | Two items, both intro-econ flavored, not life-skills. Cycling is the worst pathology in the cluster — 25 repeats. |
| `jargonBusters.ts` (no track-specific section but voice template) | 0 | **voice template** | This is the gold-standard tone for adulting content per `CONTENT_AUDIT.md` quality bar. |
| Career-tier credit/banking/tax banks (e.g. `careerAgentGeneratedCredentials*`, finance entries in jargon) | 0 | **possible MERGE** | Some career-tier financial-literacy items could downsize to teen reading level. Heavy edit required. |
| No life-skills bank exists | — | — | Largest authoring gap in the cluster after `existentialism`. |

## Duplicate-track flag

This is **not** a `philYear*` duplicate, but it is a **`lifeSkillsHigh` vs `lifeSkillsAndAdulting`** duplicate. Both ids exist in `high.ts` (lines 418 and 1961). `syllabi/index.ts:172-173` maps both to the same syllabus. `lifeSkillsHigh` is `status: 'soon'`; `lifeSkillsAndAdulting` is `status: 'playable'`. The two should be unified — per Craig's "if questions exist, it should be playable" rule, both should resolve to a single id (`lifeSkillsAndAdulting`). Add to the same cluster of stub-vs-named duplicates as the 6 `philYear*` ones flagged in the May 2026 audit.

## Open actions (priority order)

1. **Resolve `lifeSkillsHigh` vs `lifeSkillsAndAdulting` duplicate** — pick one canonical id, delete the other.
2. **Add `region: 'US'` tag** — the syllabus is built around US-specific paperwork (W-4, FAFSA, 401(k), FICA).
3. **Author a real life-skills bank** — ~50 questions, 6-7 per chapter, voice template `jargonBusters.ts`. Concrete cases: "Your paycheck shows $58 withheld for federal income tax. Which line on your W-4 most likely caused that?" / "A landlord asks for first month + last month + security deposit. What total are you committing?" / "Your debit card overdraft fee is $35 and you overdrew by $4. What's the effective interest rate if you cover it within a day?"
4. **Replace `lifeEconomicsBlueprints` cycling** — either suppress for this track or expand to 12-16 items with realistic life-skills scenarios.
5. **Plan UK/AU variants** if the track will ship outside US, or accept US-only launch.

## Estimated effort

- Author 50 hand-written US life-skills Q's: ~14 hours (longest authoring lift in this cluster outside `existentialism`)
- Region-tag + duplicate resolution: ~1 hour
- Fallback suppression / blueprint expansion: ~2 hours

## Flags

- **Worst cycling pathology in the cluster** — 2 blueprint items cycled to 50 means a player encounters the same opportunity-cost question 25 times. Embarrassing for a `playable` track.
- **Silent US-specificity** — track is presented as universal but every concept is US tax/benefits/finance. Must tag.
- **Track name duplicate** with `lifeSkillsHigh`.
- **No DEFAULT_FLAW** (because there's barely any bank).
