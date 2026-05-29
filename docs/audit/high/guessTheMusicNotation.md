# Audit: guessTheMusicNotation

**Syllabus**: [`src/data/syllabi/high/guess_the_music_notation.md`](../../../src/data/syllabi/high/guess_the_music_notation.md)
**Track id**: `guessTheMusicNotation` (high, Music, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheMusicNotationQuestions` (8)

## Coverage map

| Notation family | Symbols covered |
|---|---|
| Clefs | Treble, Bass |
| Accidentals | Sharp, Flat |
| Note values | Quarter, Eighth |
| Silence | Rest |
| Structure | Time signature |
| **Missing** | Natural sign, key signature, dotted note, tie, slur, dynamics (p/f/mp), repeat barlines, fermata |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (music notation slice) | 8 | **FIX** | Stems use functional descriptions ("raises a note by a half step" → Sharp) which is the right pedagogy. Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate — distractors should be visually adjacent ("Flat lowers; Natural cancels — only Sharp raises"). (2) Media is generic notation SVG (single eighth note + staff) reused for all 8; for a *symbol* track this should show the actual glyph being asked about. (3) Coverage is narrow vs the syllabus promise ("clefs, accidentals, note values, rests, meter, and the symbols musicians read at speed") — natural sign, dotted note, tie, slur all skipped. |

## Open actions

1. Wire per-symbol SVG glyphs — the music notation Unicode block (U+1D100 range) is the cheapest path; or render as PNG.
2. Add Qs for natural, dotted note, tie/slur, dynamics, repeat barlines.
3. Per-distractor explanations using musical function.
