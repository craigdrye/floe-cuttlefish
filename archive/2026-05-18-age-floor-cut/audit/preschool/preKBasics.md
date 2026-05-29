# Audit: preKBasics (Pre-K through Grade 2 Basics)

**Syllabus**: [`src/data/syllabi/preschool/pre_k_through_grade_2_basics.md`](../../../src/data/syllabi/preschool/pre_k_through_grade_2_basics.md)
**Track id**: `preKBasics`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (EYFS, EYLF, NAEYC, Common Core K–2 referenced).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Classroom Routines and Learning Together | ❌ | no questions |
| 2. Letters, Sounds, and Word Play | ❌ | no questions |
| 3. Stories, Talk, and Vocabulary | ❌ | no questions |
| 4. Counting, Quantity, and Number Stories | ❌ | no questions |
| 5. Shapes, Patterns, and Making | ❌ | no questions |
| 6. Science Talk and Curious Questions | ❌ | no questions |
| 7. Fine Motor, Drawing, and Early Writing | ❌ | no questions; not assessable via text MCQ |
| 8. Community, Feelings, and World Knowledge | ❌ | no questions |

**Syllabus aspirational; no questions wired.** Track is declared `status: 'playable'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) lines 242–251, but the build-catalog function in [`src/data/questionCatalog/primary.ts`](../../../src/data/questionCatalog/primary.ts) has **no entry for `preKBasics`** in its returned record. The Kolibri spread at line 212 also produces no `preKBasics` key. The track renders zero questions at runtime.

## Per-file recommendations

| File | Q's for `preKBasics` | Bucket | Reason |
|---|---|---|---|
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) | 0 | **N/A** | Track ID is never referenced. No FIX possible without authoring. |
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) | 0 | **N/A** | Generator only emits the *primary*-age siblings (`scienceYear1…6`, `dinosPrimary`, etc.). No preschool equivalent exists. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) | 0 | **N/A** | Has a small `oceanPrimary` slice and grade-1+ vocab — nothing tagged `preKBasics`. |
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) | 0 | **N/A** | Emits Grade-3 through Grade-6 math via `makeCol3rdGradeMathQuiz` etc. The name is misleading; nothing here is Pre-K. |

**Cross-cutting flags**: track has `status: 'playable'` but **zero questions wired** — directly violates the audit rule "Track has `status: 'soon'` but the file has questions → promote to `playable`" *in reverse*: a playable track with no questions should be demoted to `'soon'` or removed.

## Open actions (priority order)

1. **Demote to `status: 'soon'` immediately** in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) line 245. Currently the track is discoverable but empty, which is worse than a clean "coming soon."
2. **Decide author-or-cut**. The syllabus is rich and well-aligned to EYFS / Common Core K. Three options:
   - (a) Author a Pre-K bank (~40 Q's across chapters 1–6 and 8; chapter 7 is fine-motor and not MCQ-friendly). Voice model: [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) `[answer, whyWrong, nudge]` triple shape but radically simplified ("Which has more?", "What sound starts 'ball'?", picture-led).
   - (b) Cut the track and let `primary` (Primary Foundations) cover the same school-readiness ground.
   - (c) Merge with `upTo2ndGradeSkills` — the two syllabi overlap heavily (counting, CVC reading, shapes, community helpers, friendship). A single "Pre-K through Grade 2" collection would be cleaner.
3. **Schema extension required for chapter 2** (Letters, Sounds): audio + image prompts are needed for real phonics work. Text-only MCQ is workable for letter-identification but limited.
4. **Region tag**: not needed; syllabus is jurisdiction-neutral.

## Estimated effort

- Demote + remove from `primaryCollectionGroups.titles` if cutting: 30 min.
- Full Pre-K bank (~40 Q's @ 15 min each, lower per-question time because each is a one-line prompt): ~10 hours.
- Schema extension for image/audio prompts: ~2 days.

**Recommended decision: merge into `primary` (Primary Foundations)**. Two empty preschool school-readiness tracks compete for the same parent audience. One real bank is better than two ghosts.

## Notes for next auditor

This is the largest preschool ghost: a polished 8-chapter syllabus, listed in `primaryCollectionGroups` as a featured collection, marked playable — and rendering nothing. High visibility, zero substance. Prioritise the demote-to-soon flag before any other work in this cluster.
