# Audit: upTo2ndGradeSkills (Up to 2nd grade skills)

**Syllabus**: [`src/data/syllabi/preschool/up_to_2nd_grade_skills.md`](../../../src/data/syllabi/preschool/up_to_2nd_grade_skills.md)
**Syllabus mapped in index.ts**: `primary/up_to_2nd_grade_col.md` ([line 303 of `src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts)) — **different file** than the preschool/up_to_2nd_grade_skills.md provided. Two parallel syllabi exist; the catalog mapping points away from the preschool one.
**Track id**: `upTo2ndGradeSkills`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (Common Core early math + ELA referenced).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Number Sense and Counting Patterns | ❌ | no questions |
| 2. Addition, Subtraction, and Early Multiplication | ❌ | no questions |
| 3. Time, Measurement, Shapes, and Fractions | ❌ | no questions |
| 4. Reading Simple Words and Sentences | ❌ | no questions |
| 5. Listening, Comprehension, and Vocabulary | ❌ | no questions |
| 6. Science Discovery | ❌ | no questions |
| 7. Place, Community, and Needs | ❌ | no questions |
| 8. Friendship, Feelings, and Problem Solving | ❌ | no questions |

**Syllabus aspirational; no questions wired.** Track declared `status: 'playable'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) lines 253–262. Not referenced anywhere in [`src/data/questionCatalog/primary.ts`](../../../src/data/questionCatalog/primary.ts) — no `upTo2ndGradeSkills:` key in the returned record.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| any in `src/data/questionCatalog/` | 0 | **N/A** | Zero references to `upTo2ndGradeSkills` anywhere in the question catalog (verified by grep). |
| [`primaryBuilders.ts`](../../../src/data/questionCatalog/primaryBuilders.ts) Grade-3-onward content | 0 | **NOT A SOURCE** | The Builders file targets Grade 3+ math/reading, not the Pre-K-to-Grade-2 span this track describes. Re-wiring would create a tier mismatch, not solve the problem. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) | 0 directly; ~1–2 vocab Q's that might fit chapter 5 | **MERGE candidate (small)** | A handful of antonym Q's currently keyed to `readingVocab4th` (e.g. "opposite of cold") are below grade-4 difficulty and would suit a Grade-1/2 vocabulary chapter. Cherry-pick if track is authored. |

**Cross-cutting flags**:
- `status: 'playable'` with **zero questions** — same severity bug as `preKBasics` and `socialEmotionalLearning`.
- **Syllabus drift**: catalog mapping points to `primary/up_to_2nd_grade_col.md` while the file in the preschool tree is `preschool/up_to_2nd_grade_skills.md`. Two source-of-truth documents; pick one before authoring.
- **Discipline mismatch**: catalog calls it `Kids Discovery` but chapters 1–4 are core academic literacy/numeracy — closer to `Academics` than to dinosaurs/oceans.

## Open actions (priority order)

1. **Resolve duplicate syllabus**. Either delete `preschool/up_to_2nd_grade_skills.md` and keep `primary/up_to_2nd_grade_col.md` as canonical, or vice versa, and update [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts) line 303 accordingly.
2. **Demote to `status: 'soon'`** in the age catalog until questions exist.
3. **Decide author-or-merge**. This track's chapter list (counting patterns, addition within 20, CVC reading, comprehension, science discovery, community helpers, friendship) is almost identical to `preKBasics` chapters 4–8 plus a slight age-up. Strong merge candidate.
   - **Recommended**: merge `preKBasics` + `upTo2ndGradeSkills` into a single "School Readiness (Pre-K → Grade 2)" track. Replace the redundant `primary` (Primary Foundations) syllabus too if scope allows — three tracks chasing the same audience is hard to justify.
4. If kept separate: author ~30 Q's, but use a slightly older voice than `preKBasics` (children may read short prompts independently; can include 2-step problems).

## Estimated effort

- Resolve syllabus duplication + demote: 1 hour.
- Cherry-pick OpenTriviaForKids vocab items into a new bank: ~1 hour.
- Author ~30 Grade 1/2 Q's: ~7–8 hours.
- Merge into combined School Readiness track: ~30 min wiring + 0 new authoring if `preKBasics` and `primary` are also being authored at the same time.

**Total if merged: ~8 hours including the preKBasics work; if kept separate: ~9 hours plus duplicate-syllabus risk.**

## Notes for next auditor

The discipline label `Kids Discovery` on what is fundamentally a school-readiness academics track is a category error. Either rename the discipline to something accurate (`Academics` or `School Readiness`) or pull the chapters about counting/reading/science into a track that already lives under `Academics`. Discoverability suffers when caregivers searching for "early reading" find it in a Fun Discovery-adjacent bucket.
