# Audit: guessTheHistoricalRuin

**Syllabus**: [`src/data/syllabi/high/guess_the_historical_ruin.md`](../../../src/data/syllabi/high/guess_the_historical_ruin.md)
**Track id**: `guessTheHistoricalRuin` (high, History/Geography, `status: 'playable'`, 12 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheHistoricalRuinQuestions` (12)

## Coverage map

| Syllabus chapter | Covered |
|---|---|
| Ancient Mediterranean | Colosseum + Parthenon + Pompeii |
| Rock-cut / mountain | Petra + Machu Picchu |
| Maya / Mesoamerica | Chichen Itza + Tikal |
| Southeast Asia | Angkor Wat |
| Egypt / Near East | Karnak + Abu Simbel + Persepolis |
| Cliff dwellings | Mesa Verde |
| **Notably absent** | Teotihuacan, Stonehenge, Great Zimbabwe, Borobudur (only distractor) |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (ruin slice) | 12 | **KEEP-with-fix** | **The only track in this cluster with real per-site PNG illustrations** (`/assets/guess-the-thing/historical-ruins/*-cartoon.png`) via `generatedMedia()` — visual-ID is genuinely wired. Stems and lessons are well-written. Remaining issue: (1) DEFAULT_FLAW-equivalent distractor boilerplate from `q()`. (2) Syllabus key skill "explain what a ruin was *for*" is implicit in lessons but never tested in a stem. |

## Open actions

1. Use this track's media pattern as the **template** for the rest of the cluster (Skyline, Flag, Country Shape, Architecture, Art Movement).
2. Per-distractor rewrites grounded in geography/era ("Petra is Nabataean Jordan, ~1st c BCE; Angkor Wat is Khmer Cambodia, ~12th c CE — different continent and millennium").
3. Add Teotihuacan, Stonehenge, Borobudur, Great Zimbabwe; replace one Egyptian Q to balance.
