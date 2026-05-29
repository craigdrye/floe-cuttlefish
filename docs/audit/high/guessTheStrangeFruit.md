# Audit: guessTheStrangeFruit

**Syllabus**: [`src/data/syllabi/high/guess_the_strange_fruit.md`](../../../src/data/syllabi/high/guess_the_strange_fruit.md)
**Track id**: `guessTheStrangeFruit` (high, Science/Food, `status: 'playable'`, 12 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheStrangeFruitQuestions` (12)

## Coverage map

| Fruit | Present |
|---|---|
| Dragon fruit, Rambutan, Jackfruit, Durian, Cherimoya, Mangosteen, Kiwano, Buddha's hand, Starfruit, Feijoa, Kumquat, Yuzu | All 12 covered |
| Missing notables | Soursop, longan, salak, breadfruit, akee, pitaya yellow, mangosteen-cousins |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (strange fruit slice) | 12 | **FIX** | Roomy coverage and good unique distractors (lychee vs rambutan, jackfruit vs durian, Buddha's-hand vs starfruit). Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate. (2) Subtitle promises "passion fruit" and "soursop" — passion fruit appears only as distractor, soursop only as distractor. (3) Generic fruit SVG (oval with curl) for all 12 — visual-ID is text-only. (4) "Botany" skill tag but no taxonomy hooks (which are botanically berries? aggregates? citruses?). |

## Open actions

1. Add stems for passion fruit, soursop, and either lychee or longan (paired contrast with rambutan).
2. Add one botany Q: "which of these is technically a berry?" — answer banana / dragon fruit / not jackfruit.
3. Per-fruit illustrations; current art does no disambiguation.
