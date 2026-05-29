# Audit: existentialism

**Syllabus**: [`src/data/syllabi/high/existentialism.md`](../../../src/data/syllabi/high/existentialism.md)
**Track id**: `existentialism` (Year 11, ages 15-16)
**Tier**: high
**Region**: jurisdiction-neutral

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Is an Existential Question? | not covered | No definition/scope items reach this track |
| 2. Kierkegaard, Anxiety, and the Leap | not covered | Total gap |
| 3. Nietzsche, Value, and Self-Overcoming | not covered | Total gap |
| 4. Sartre, Freedom, and Bad Faith | partial | `philosophyWorkoutGenerated` row 48 covers Sartre's bad faith — not wired here |
| 5. Camus and the Absurd | not covered | Total gap |
| 6. Beauvoir, Ambiguity, and the Other | not covered | Total gap |
| 7. Existential Literature and Film | not covered | Total gap |
| 8. Meaning, Work, Technology, and Modern Life | not covered | Total gap |

Worst-served alongside `epistemologyBasics`. Two existential items in `philosophyWorkoutGenerated.ts` (rows 47-48) that are not wired. Track falls through to `philosophyCreativeBlueprints` (dragon syllogism, core loop) — 0 existentialism content reaches a player.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highGenerated.ts` -> `philosophyCreativeBlueprints`](../../../src/data/questionCatalog/highGenerated.ts) | 2 x 25 = 50 | **DELETE for this track** | Off-topic. |
| [`philosophyWorkoutGenerated.ts`](../../../src/data/questionCatalog/philosophyWorkoutGenerated.ts) rows 47-48 | 0 (not wired) | **MERGE -> existentialism (seed only)** | Two existential rows (existentialism overview, Sartre bad faith). Useful starting point. Same generic-`lesson` DEFAULT_FLAW issue. |
| Comparative Philosophy rows 49-50 (Confucian, Daoist) | 0 | leave | Not existentialism in the syllabus sense; belongs elsewhere. |

**No dedicated existentialism bank exists.** Track exists at `status: 'playable'` (`high.ts:1631`) but is empty of relevant content.

## Duplicate-track flag (philYear cluster)

`philYear11` (`status: 'soon'`, `src/data/ageCatalog/high.ts:374`) is titled "Existentialism" — exact duplicate of `existentialism` (`status: 'playable'`, line 1631). Both produce the same dragon-syllogism fallback. Same May 2026 audit duplicate flag. Delete the stub.

## Open actions (priority order)

1. **Resolve `philYear11` duplicate** — delete stub.
2. **Author a real existentialism bank** — ~40 questions, 4-6 per chapter, covering Kierkegaard (leap, subjective truth, aesthetic/ethical/religious life), Nietzsche (value creation, herd/master/slave morality, will to power), Sartre (existence precedes essence, bad faith, the look), Camus (absurd, philosophical suicide, Sisyphus), Beauvoir (ambiguity, the Other, situation), Kafka/Dostoevsky/Frankl applied scenes, modern application (authenticity online, meaning of work). Voice template: `civicPoliticsQuestions.ts` (sober, per-distractor, framework-fair). Syllabus warns "intellectually honest and emotionally careful: the course can discuss despair and absurdity, but always through thoughtful interpretation, not shock" — match this tone.
3. **Wire + sanitize** the 2 salvageable rows from `philosophyWorkoutGenerated.ts` (rows 47-48).
4. **Suppress fallback** so dragon syllogism doesn't reach players.

## Estimated effort

- Author 40 hand-written questions across 8 chapters: ~12 hours (this is the largest authoring lift in the cluster)
- Wire + edit 2 salvaged rows: ~30 min
- Fallback suppression: ~30 min

## Notes

This is the single biggest content gap in the cluster. The track is `playable` but presents off-topic puzzles. If `existentialism` is going to keep its `playable` flag, authoring needs to happen before launch — otherwise a player picking it gets a worse experience than if it were marked `status: 'soon'`. Cross-check with `philosophyCapstone` (which has overlapping Chapter 6 "Meaning, Freedom, and the Examined Life") to avoid duplication.
