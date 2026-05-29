# Audit: guessTheHistoricalFigure

**Syllabus**: [`src/data/syllabi/high/guess_the_historical_figure.md`](../../../src/data/syllabi/high/guess_the_historical_figure.md)
**Track id**: `guessTheHistoricalFigure` (high, History, `status: 'playable'`, 10 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheHistoricalFigureQuestions` (10)

## Coverage map

| Era / domain | Figures |
|---|---|
| Ancient | Cleopatra VII |
| Science/Math | Ada Lovelace, Marie Curie |
| Abolition / civil rights | Frederick Douglass, Rosa Parks |
| Revolutions | Toussaint Louverture |
| US Presidents | Lincoln |
| Medicine (Islamic Golden Age) | Ibn Sina |
| Resistance | Joan of Arc |
| Modern political leadership | Gandhi |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (historical figure slice) | 10 | **FIX** | **Most diverse track in the cluster** — deliberately balances gender, era, region (Persia, Haiti, France, Egypt, India, US, UK). Stems are biographical and respectful. Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate — for *figures* the distractors badly need per-person context ("Hatshepsut also ruled Egypt but ~1450 BCE, not Ptolemaic"). (2) Media is generic cartoon-bust SVG reused for every figure — no portrait actually shown. (3) US bias still present (2 of 10 Americans); could swap one for Mansa Musa, Hypatia, Sor Juana, Tu Youyou. |

## Open actions

1. Per-distractor explanations leveraging era / region / contribution differences.
2. Wire real portraits or distinct silhouettes (the figure track will read as "name trivia" without them).
3. One swap toward broader global coverage.
