# Audit: guessTheMeme

**Syllabus**: [`src/data/syllabi/high/guess_the_meme.md`](../../../src/data/syllabi/high/guess_the_meme.md)
**Track id**: `guessTheMeme` (title "Know That Meme", high, Digital Culture, `status: 'playable'`, 18 Qs)
**Source file**: [`src/data/questionCatalog/memeLiteracyQuestions.ts`](../../../src/data/questionCatalog/memeLiteracyQuestions.ts) → `guessTheMemeQuestions` (18)

## Coverage map

| Meme category | Coverage |
|---|---|
| Classic templates (distracted, preference) | YES |
| Escalation (expanding brain) | YES |
| Dilemma (two buttons, refuse easy fix) | YES |
| Coping (this is fine) | YES |
| Argument (change my mind) | YES |
| Consequence shock | YES |
| Recognition (pointing duplicates) | YES |
| Failure / backfire | YES |
| Misidentification ("is this a pigeon") | YES |
| Social/inner monologue | YES |
| Workplace, tone (mocking caps), wholesome, meta, context, audience-timing | YES |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `memeLiteracyQuestions.ts` | 18 | **KEEP** | **This is the cluster's standout file.** Unlike the rest of the family, the `q()` helper here takes a **proper `[label, whyWrong, nudge]` tuple per distractor** — no DEFAULT_FLAW. The per-distractor explanations are specific ("Wholesome approval memes celebrate something rather than show temptation"). Stems test literacy/function, not just template recognition — the last three Qs (caption-context, audience-timing, meta) move into media-literacy territory the syllabus actually wants. Tone matches digital-culture audience. Media is abstract two-panel "meme card" SVG — works because memes are *structures*, not specific images, so copyright-safe abstraction is intentional. |

## Open actions

1. None urgent. Optional: add 2-3 Qs on more recent template trends (mascot-horror, doomer/zoomer, AI-art tells) to keep the bank fresh.
2. Treat this file as the **per-distractor model** for rewriting the rest of the bonus-identification bank.
