# Audit: guessTheTypographyTerm

**Syllabus**: [`src/data/syllabi/high/guess_the_typography_term.md`](../../../src/data/syllabi/high/guess_the_typography_term.md)
**Track id**: `guessTheTypographyTerm` (high, Arts, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheTypographyTermQuestions` (8)

## Coverage map

| Term family | Covered |
|---|---|
| Letter parts | Serif, sans-serif |
| Spacing | Kerning, Tracking |
| Line spacing | Leading |
| Letter geometry | X-height, Baseline |
| Composition | Ligature |
| **Missing** | Ascender, descender, cap height, counter, bowl, stem, terminal, weight, italic, small caps, hyphenation/justification |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (typography slice) | 8 | **FIX** | Stems define each term cleanly. Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate — for typography distractors should be visually-adjacent confusables ("kerning is *pair*, tracking is *range*"). (2) Media is generic `book` SVG with text labels — for a *typography* track this is the most painful gap; the picture should show the term itself (a labeled letterform). (3) Coverage skips ascender/descender/counter/cap height — basic letter anatomy. |

## Open actions

1. Wire per-term diagrams — a single labeled letterform per Q is the canonical type-spec image and trivially renderable as SVG.
2. Add 3-4 Qs for letter-anatomy terms (ascender, descender, counter, bowl).
3. Per-distractor explanations grounded in scope ("kerning adjusts *one pair*; tracking adjusts a *whole run*").
