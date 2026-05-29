# Audit: artHistory

**Syllabus**: [`src/data/syllabi/university/art_history.md`](../../../src/data/syllabi/university/art_history.md)
**Track id**: `artHistory`
**Tier**: university (`universityAcademicTrackIds` → `universityAcademic.ts:293`)
**Region**: jurisdiction-neutral. Survey is genuinely global (Mesoamerica, Africa, Asia, Islamic courts). No region tag needed.
**Status**: `playable` ([`src/data/ageCatalog/university.ts:456`](../../../src/data/ageCatalog/university.ts))

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. How to Look (formal analysis, composition, medium, iconography) | ✅ | "Visual Analysis" — 5 hand-authored intro items |
| 2. Ancient Worlds and Early Visual Systems | ✅ | "Ancient Art" — register, hierarchy of scale, contrapposto, classical ideal, Roman verism |
| 3. Sacred Space, Image, Devotion | ✅ | "Architecture" + "Medieval Art" — arch/dome/basilica, icons, gold ground |
| 4. Courts, Cities, Trade, Exchange | ✅ partial | Renaissance (perspective, sfumato, chiaroscuro, patronage); Mughal/Ottoman/African courts only via OpenTrivia |
| 5. Modernity, Revolution, the Public | ✅ | Impressionism, Post-Impressionism, photography |
| 6. Modernism, Avant-Gardes, Global Responses | ✅ | Cubism, Futurism, Surrealism, AbEx; "Global Art" has 2 context/ritual items |
| 7. Contemporary Art, Visual Culture, Technology | ⚠️ | Pop, Minimalism; **no installation, performance, NFT, AI-generated, social practice, biennial items** |
| 8. Museum, Source, Critique Lab | ✅ | Provenance, conservation, attribution, primary source, comparison, visual evidence |

**Chapter taxonomy**: `artHistoryWorkoutGenerated` uses concise period chapters (Visual Analysis, Ancient Art, Architecture, Medieval Art, Renaissance, Baroque, Modern Art, Global Art, Photography, Museums and Methods, Comparison, Writing Art History) that map cleanly onto the syllabus. OpenTrivia imports use their own period names (Baroque Art, Renaissance Art and Architecture, Impressionism and Modern Art).

## Per-file recommendations

| File | artHistory Q's | Bucket | Reason |
|---|---|---|---|
| [`artHistoryWorkoutGenerated.ts`](../../../src/data/questionCatalog/artHistoryWorkoutGenerated.ts) | 50 | **KEEP** | **Gold standard for this track.** Hand-authored `miss(answer, why, hint)` triples — each distractor has specific reasoning ("That is closer to a duopoly"-style precision). Sober tone, museum-literacy vocabulary, syllabus-shaped chapters. Includes formal-analysis Chapter 1 + writing/comparison Chapter 8 — both rare in art-history banks. Shared `lesson` boilerplate is the only weakness; the explanations themselves are real. |
| [`openTriviaArtHistoryQuestions`](../../../src/data/questionCatalog/openTriviaArtPhilosophyMicroImported.ts) | ~6 | **DELETE** | DEFAULT_FLAW pattern: every wrong answer carries `"This choice does not match the movement, artist, medium, or architectural clue in the prompt."` Identical canned string repeated across all distractors. Trivia recall ("who painted X"), not visual-analysis skill. |
| [`openTriviaArtHistoryExtensionImported.ts`](../../../src/data/questionCatalog/openTriviaArtHistoryExtensionImported.ts) | 12 | **DELETE** | Same DEFAULT_FLAW string repeated. "Typical of the baroque architecture, this was the paradigm of the basilica" — prose lifted from source, not rewritten. Manual allowlist excluded gossip, but the remaining items are still trivia with no per-distractor analysis. |
| [`openTriviaArtHistorySecondExtensionQuestions`](../../../src/data/questionCatalog/openTriviaArtPhilosophyExtensionImported.ts) | unknown (~10) | **DELETE** | Same import family, same DEFAULT_FLAW pattern. |
| [`openTriviaArtHistoryRemainingImported.ts`](../../../src/data/questionCatalog/openTriviaArtHistoryRemainingImported.ts) | 15 | **DELETE** | Same. Salvage 2–3 globally-significant items (Mughal painting, Benin bronzes, Ife) into a hand-authored Chapter 4 extension if needed. |
| [`openTriviaCuratedArtHistoryAdditionalQuestions`](../../../src/data/questionCatalog/openTriviaCuratedAdditionalImported.ts) | unknown | **REVIEW** | "Curated" suggests selectivity but likely the same DEFAULT_FLAW shape — verify before keeping. |

**No DEFAULT_FLAW in the workout file.** `artHistoryWorkoutGenerated.ts` is one of the cleanest banks in the cluster.

**Net effect**: ~95 wired Art History questions → ~55 high-quality questions after the OpenTrivia imports are cut. Closes the trivia-shaped recall padding; preserves all skill-based items.

## Open actions (priority order)

1. **DELETE the four OpenTriviaQA art-history imports** from [`universityAcademic.ts:293`](../../../src/data/questionCatalog/universityAcademic.ts). Net loss is recall trivia, not skill.
2. **Audit `openTriviaCuratedArtHistoryAdditionalQuestions`** before keeping — likely same DEFAULT_FLAW shape.
3. **Author 8–10 chapter-7 contemporary items** — installation, performance, social practice, NFT, AI image-making, biennial circulation. Voice template: `artHistoryWorkoutGenerated.ts`.
4. **Author 4–6 chapter-4 global-trade items** — Mughal manuscript painting, Ottoman tilework, Benin bronzes, African kingdoms, Indian Ocean exchange.
5. **Add a `lesson` per question** in `artHistoryWorkoutGenerated.ts` rather than shared boilerplate — light lift since items are individually crafted.

## Estimated effort

- Delete feeds + curated audit: ~45 min
- Chapter 7 authoring: ~3 hours (10 × 20 min)
- Chapter 4 global extensions: ~2 hours (6 × 20 min)

**~1 working day.** Workout file already does most of the work well; remaining lift is targeted authoring plus removing trivia padding.

## Notes for next auditor

`artHistory` is the **cleanest hand-authored intro humanities track in the cluster.** `artHistoryWorkoutGenerated.ts` is a strong voice template for humanities work (compare `philosophyWorkoutGenerated.ts` which is also good but more boilerplate-dependent).

The DEFAULT_FLAW pattern in the four OpenTriviaQA imports is the same recurring problem flagged framework-wide. Cutting them is straightforward: no downstream `.filter()` derivations, so deletes don't cascade.
