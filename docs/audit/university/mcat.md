# Audit: mcat (MCAT Prep)

**Syllabus**: [`src/data/syllabi/university/mcat_prep.md`](../../../src/data/syllabi/university/mcat_prep.md)
**Track id**: `mcat`
**Tier**: university (exam-prep discipline)
**Region**: **US-specific** — MCAT is the AAMC credential for US/Canada MD/DO admissions. UK uses UCAT/BMAT; AU uses GAMSAT. Not currently `region`-tagged in [`src/data/ageCatalog/university.ts:334`](../../../src/data/ageCatalog/university.ts).
**Status**: `playable`

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. MCAT Map, Diagnostic, Study System | ❌ | No exam-structure, diagnostic-interpretation, spaced-rep, weekly-planning items |
| 2. Chemical Foundations and Quantitative Reasoning | ✅ thin | Caffeine dose (3104000), electrochemistry (3104004); no acid-base, periodic trends, thermodynamics, equilibrium |
| 3. Physics in Biological Systems | ✅ thin | Parallel resistor circuits (3104002); no Bernoulli/fluids, optics, waves, kinematics |
| 4. Biology, Physiology, Cell Systems | ✅ partial | Capillary filtration (3104005), hippocampus (3104009), Hardy-Weinberg carrier math (3104014); no cell cycle, organ-system feedback chains, immune system, viruses |
| 5. Biochemistry and Molecular Biology | ✅ | Strong: lysine charge (3104001), competitive inhibition (3104003, 3104016), Km affinity (3104012), DNA repair / CSA (3104017) |
| 6. Psychology, Sociology, Behavior | ✅ thin | Habituation (3104006), stereotype threat control (3104010); no social-determinants-of-health, demographics, institutions content |
| 7. CARS and Critical Reading | ❌ | **No CARS passages at all.** CARS is roughly 1/4 of the MCAT and the single hardest section to teach via flashcard-style questions, but the syllabus explicitly scopes it in. |
| 8. Experimental Design, Full-Lengths, Test Day | ✅ | Cortisol DV (3104007), confounders (3104008, 3104015), negative control (3104013), p-value misuse (3104011) |

Coverage skews to biochem and experimental design (the easiest things to test in MC format). Chapter 1 (study system) and chapter 7 (CARS) are entirely absent. Chapters 2–4 are present but thin given the breadth of the actual MCAT content outline.

## Per-file recommendations

| File | MCAT Q's | Bucket | Reason |
|---|---|---|---|
| [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) `mcat: [...]` (id 3104000–3104017) | 18 | **FIX** | **Strong prompts, broken distractor explanations** — same pathology as `lsat`. Scenarios are MCAT-realistic. `correct` and `lesson` fields are well-written. Every wrong-answer `whyWrong` is the file-wide `DEFAULT_FLAW`. For MCAT biochem/physics, distractor analysis is how students learn which formula they almost used and why it doesn't apply. **Per-distractor rewrite is the highest-leverage fix.** |
| (no other MCAT files) | — | — | No imported AAMC bank (correctly — AAMC content is copyrighted); no hand-roll in `universityAcademic.ts`. The 18 agent-generated are the entire bank. |

**Net effect**: 18 MCAT-flavoured questions with hollow distractor analysis → 18 MCAT-grade questions after per-distractor rewrite. Coverage gaps need ~40 new questions to reach credible volume (Floe needs ~80–100 to be useful, ~200 to compete with Anki decks).

## Open actions (priority order)

1. **Add `region: 'US'` tag** to the track entry in [`src/data/ageCatalog/university.ts:334`](../../../src/data/ageCatalog/university.ts). Update subtitle to mention "US/Canada medical schools" so UK (UCAT/BMAT) and AU (GAMSAT) learners are routed elsewhere.
2. **Rewrite all 54 wrong-answer `whyWrong` strings** (18 × 3) with MCAT-specific trap analysis: "wrong formula direction (used $V = IR$ for total when parallel needed $1/R_{eq}$)", "right concept, wrong axis (Km vs Vmax)", "swapped Type I and Type II error", etc.
3. **Author 8–10 chapter-1 questions** on AAMC content outline, diagnostic interpretation, full-length pacing.
4. **Author 10–15 CARS-style passages** for chapter 7. Passage stem (200–400 words) + 3–4 questions each. Biggest lift, most distinctive MCAT skill.
5. **Author ~20 questions across thin chapters 2, 3, 4, 6** to balance the biochem-heavy bank.
6. **Add `lastReviewed: <date>` metadata** when the AAMC content outline next updates.

## Estimated effort

- Region tag + subtitle update: ~10 min
- Per-distractor rewrite (54 strings): ~6 hours
- Chapter-1 + thin-chapter authoring (~30 questions): ~10 hours
- CARS passage authoring (10 passages × 3 questions = 30 questions): ~15 hours (passage construction is slow)

**~4 working days** to bring `mcat` to a serviceable MCAT-prep state. CARS is the dominant cost.

## Notes for next auditor

Same DEFAULT_FLAW pathology as `lsat` and the other tracks in [`universityAgentGenerated.ts`](../../../src/data/questionCatalog/universityAgentGenerated.ts) — fix once, fix everywhere. Prompts often include charming filler ("a sleep-deprived lab tech", "a very polite galvanic cell") that doesn't match the sober AAMC tone the syllabus calls for. Decide voice register intentionally and apply consistently in the rewrite.
