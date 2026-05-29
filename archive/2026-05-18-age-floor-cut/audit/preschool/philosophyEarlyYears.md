# Audit: philosophyEarlyYears (Big Questions: Early Years)

**Syllabus**: [`src/data/syllabi/preschool/big_questions_early_years.md`](../../../src/data/syllabi/preschool/big_questions_early_years.md)
**Track id**: `philosophyEarlyYears`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (EEF SEL, EYFS, EYLF, CASEL, SAPERE P4C referenced).
**Primary-tier siblings**: `philosophyYear1`…`philosophyYear6` (each empty per current `topUp` lookups; see notes).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Is a Big Question? | ❌ | meta-cognitive prompts; partly MCQ-friendly |
| 2. Fair Shares and Turn-Taking | ❌ | scenario MCQ feasible |
| 3. Feelings Have Clues | ❌ | overlaps `socialEmotionalLearning` ch.1; image-led |
| 4. Kind, Unkind, Mistake, or Accident? | ❌ | scenario MCQ feasible |
| 5. Me, You, Us | ❌ | identity prompts; not MCQ-shaped |
| 6. Rules That Help | ❌ | scenario MCQ feasible |
| 7. Real, Pretend, and Maybe | ❌ | classify-the-statement MCQ feasible |
| 8. Caring for Living Things | ❌ | overlaps `socialEmotionalLearning` ch.8 |

**Syllabus aspirational; no questions wired.** Declared `status: 'soon'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) line 56 (loop generator: Early Years uses `'soon' as const`). The status flag is honest — unlike most other preschool tracks, this one is correctly labelled "coming soon" rather than falsely "playable." This is the only preschool track whose catalog flag matches reality.

## Per-file recommendations

| File | Q's for `philosophyEarlyYears` | Bucket | Reason |
|---|---|---|---|
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) line 135 `philosophyYear1: topUp('philosophyYear1')` | 0 (different track, also 0) | **N/A** | The `philosophyYear1…6` siblings all resolve to `topUp(trackId)` which only finds content from `primaryGeneratedMathQuestionsByTrack`, `generatedHumanitiesExamQuestionsByTrack`, `generatedScienceDiscoveryQuestionsByTrack`. None of those have `philosophyYearN` keys. The entire philosophy column for primary appears to be empty too — flag for primary-tier audit. |
| any other file | 0 | **N/A** | No philosophy-for-kids content anywhere. |

**Cross-cutting flags**:
- `status: 'soon'` — correct.
- Syllabus mapping missing from [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts).
- **Strong overlap with `socialEmotionalLearning`**: chapters 2 (fair shares), 3 (feelings), 4 (kind/unkind/mistake/accident), 8 (caring for living things) cover the same conceptual ground. Merge candidate.
- Chapter 5 (Me, You, Us) and chapter 1 (What Is a Big Question?) are explicitly identity / meta-cognitive routines that **the syllabus itself flags as "not for performing answers"**. These chapters resist MCQ assessment by design — they belong in the adult-facilitator domain.

## Open actions (priority order)

1. **Status is already `soon` — leave it.** Do not promote to `playable` until content exists.
2. **Add syllabus mapping** `philosophyEarlyYears: 'preschool/big_questions_early_years.md'`.
3. **Decide: merge into `socialEmotionalLearning` or stand alone**. Recommend **merge** — both syllabi cite CASEL and EYFS, both treat children as "never performing distress," both use puppet-and-card affordances.
4. **If kept separate (not recommended)**: author 12–16 Q's covering chapters 2, 4, 6, 7 only. Voice: scenario-led one-step ("Two kids both want the swing. What is fair?").
5. **Image schema dependency**: chapters 3 and 5 need the same picture-prompt schema as `socialEmotionalLearning`.

## Estimated effort

- Status leave + syllabus mapping: 15 min.
- Merge into `socialEmotionalLearning` (delete this track from age catalog, fold relevant chapters into the SEL syllabus): 1 hour.
- If keeping separate: author 14 Q's (~3 hours) and reuse SEL image schema work.

**Recommended path: merge — total effort ~1 hour beyond the SEL schema work.**

## Notes for next auditor

The primary-tier philosophy column (`philosophyYear1` … `philosophyYear6`) appears equally empty — `topUp(trackId)` returns nothing for any of them based on the three lookups it consults. Worth confirming in the primary-tier audit; if true, the entire P4C column across preschool + primary is scaffolding, which suggests an unbuilt content vertical rather than a per-track problem. Treat `philosophyEarlyYears` as the bellwether: if P4C is a strategic bet, build it bottom-up starting here (or starting from SEL with philosophy folded in); if not, demote the whole column and free the dashboard space.
