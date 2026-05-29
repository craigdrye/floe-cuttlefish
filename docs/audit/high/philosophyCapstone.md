# Audit: philosophyCapstone

**Syllabus**: [`src/data/syllabi/high/philosophy_capstone.md`](../../../src/data/syllabi/high/philosophy_capstone.md)
**Track id**: `philosophyCapstone` (Year 12 / senior high school)
**Tier**: high
**Region**: jurisdiction-neutral

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Philosophical Method and Seminar Practice | partial | `logicArgumentationBlueprints` content overlaps but isn't wired here |
| 2. Knowledge Under Pressure | weak | Epistemology rows in `philosophyWorkoutGenerated` apply but not wired here |
| 3. Mind, Personhood, and Identity | weak | `philosophyWorkoutGenerated` has dualism, physicalism, qualia, Mary's Room, Turing test, functionalism — none wired here |
| 4. Moral Theories in Collision | weak | Util/deont/virtue rows in `philosophyWorkoutGenerated` apply but not wired |
| 5. Justice, Power, and Public Reason | weak | `highPoliticalPhilosophyQuestions` content fits but not wired here |
| 6. Meaning, Freedom, and the Examined Life | not covered | Same gap as `existentialism` |
| 7. Technology, Science, and Future Persons | not covered | No AI ethics, climate, future-generations items |
| 8. Capstone Argument Studio | n/a | Portfolio assignment |

The track is `status: 'playable'` (`high.ts:396`) but is not in `dedicatedHighCivicQuestionsByTrack` (`highGenerated.ts:1443`). It falls through to `philosophyCreativeBlueprints` (2 items cycled). For a *senior capstone* meant to synthesize 5+ courses, this is the most embarrassing gap.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `philosophyCreativeBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) | 2 x 25 = 50 | **DELETE for this track** | Dragon syllogism, core loop. Wrong audience by ~6 years. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) (all 50 rows) | 0 (not wired) | **MERGE -> philosophyCapstone (heavy)** | This university-level bank is the closest existing content to capstone level. Wire it. Critical fix: rewrite every `lesson:` field — currently 50 identical "Coverage source: reviewed OpenTriviaQA…" strings (DEFAULT_FLAW pattern). |
| [`civicPoliticsQuestions.ts -> highPoliticalPhilosophyQuestions`](../../../src/data/questionCatalog/civicPoliticsQuestions.ts) | 0 (wired to politicalPhilosophy only) | **borrow** for Chapter 5 (Justice/Power/Public Reason). Cross-link rather than duplicate. |
| [`careerPhilosophyQualificationQuestions.ts`](../../../src/data/questionCatalog/careerPhilosophyQualificationQuestions.ts) | 0 | **borrow** for Chapter 7 (Technology, Science, Future Persons) — workplace-ethics items on conflict-of-interest, duty-under-pressure translate to "responsibility gaps in automated systems." Lift ~6 rows. |

## Duplicate-track flag (philYear cluster)

`philosophyCapstone` is **not itself a `philYear*` duplicate** (its id is distinct). However, it sits at the end of the same Year 7-12 progression and shares Chapter overlap with `advancedEthicsMoralPhilosophy` (Year 12 ethics) and `existentialism` (Year 11). Authoring strategy should treat `philosophyCapstone` as a *synthesis* track that re-uses (not duplicates) content from `introToEthics`, `logicAndArgumentation`, `politicalPhilosophy`, `epistemologyBasics`, `existentialism`, `advancedEthicsMoralPhilosophy`. The 6 `philYear7-12` stubs flagged in the May 2026 audit are: `philYear7` (Intro Ethics), `philYear8` (Logic & Arg.), `philYear9` (Pol. Phil.), `philYear10` (Epistemology), `philYear11` (Existentialism), `philYear12` (Advanced Ethics). Resolving those simplifies the wiring for `philosophyCapstone` too.

## Open actions (priority order)

1. **Wire `philosophyWorkoutGenerated.ts` into this track** via `dedicatedHighCivicQuestionsByTrack`. Sanitize the generic `lesson` field per question first.
2. **Cross-link**: source Chapter 5 questions from `highPoliticalPhilosophyQuestions` (justice, public reason, civil disobedience subset) without copying.
3. **Author 15-20 Chapter 7 questions** on AI ethics, algorithmic responsibility, climate/future persons, bioethics edge cases. This is the genuine gap.
4. **Author 6-8 capstone-method questions** (charity, steelmanning, conceptual analysis, dialectic) for Chapter 1 — senior-level versions of the `logicAndArgumentation` rows.
5. **Suppress fallback** so dragon syllogism doesn't reach senior students.

## Estimated effort

- Wire + sanitize philosophyWorkout (50 Q's, per-Q lesson rewrite): ~5 hours
- Author 15-20 Chapter 7 questions: ~5 hours
- Author 6-8 Chapter 1 capstone-method questions: ~2 hours
- Cross-link mechanism: ~1 hour

## Flags

- **DEFAULT_FLAW (soft) across philosophyWorkoutGenerated.ts** — 50 identical `lesson:` strings.
- **No dedicated routing** despite track being `playable`.
- **Synthesis-track risk**: if `philosophyCapstone` simply duplicates the contents of the year tracks rather than synthesizing them, it adds no value. The Q-bank for this track should emphasize objection-and-reply, theory-comparison, and applied integration — distinct from the named courses.
