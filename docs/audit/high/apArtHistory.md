# Audit: apArtHistory

**Syllabus**: [`src/data/syllabi/high/ap_art_history.md`](../../../src/data/syllabi/high/ap_art_history.md)
**Track id**: `col-ap-art-history` (no dedicated camelCase variant in `high.ts`)
**Tier**: high
**Region**: Global (College Board US framework); not currently tagged.

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Art Historical Thinking Skills | yes | "Visual Analysis" rows: formal analysis, composition, scale, medium, iconography. |
| 2. Global Prehistory and Ancient Mediterranean | yes | Ancient art rows: register, hierarchy of scale, contrapposto, classical ideal, Roman veristic portraiture. |
| 3. Indigenous Americas, Africa, Pacific Traditions | partial | "Global Art" rows: context, ritual function — generic safe-handling guidance, no specific works. |
| 4. Early Europe, Byzantine, Islamic, Asian Art | partial | Byzantine icon, gold ground, Romanesque, Gothic light — Western only; no Islamic calligraphy, no Asian landscape painting, no Hindu/Buddhist iconography. |
| 5. Renaissance, Baroque, Early Modern Europe | yes | Linear perspective, humanism, sfumato, chiaroscuro, patronage, tenebrism, Baroque drama, Counter-Reformation, genre, vanitas. |
| 6. Later Europe, Americas, Modernism | yes | Impressionism, Post-Impressionism, Cubism, Futurism, Surrealism, Abstract Expressionism, Pop Art, Minimalism. |
| 7. Global Contemporary Art | minimal | One "Global Art" row mentioning context; no installation, no postcolonial critique, no land art, no specific contemporary artist. |
| 8. AP Exam Studio | yes | Comparison, style vs subject, visual evidence, context balance rows. |

**May 2026 rubric finding: does NOT apply.** `artHistoryWorkoutGenerated.ts` is content-bearing (sfumato, contrapposto, voussoirs, flying buttresses, registers) with per-distractor whys. No rubric-only "what does formal analysis do" filler.

**Region/coverage gap**: heavily Eurocentric for an explicitly global syllabus. Chapter 3 (Indigenous Americas, Africa, Pacific) and Chapter 7 (Global Contemporary) are under-covered — the bank gives generic methodological warnings rather than specific works or traditions.

**Chapter taxonomy mismatch.** File chapters ("Visual Analysis", "Ancient Art", "Medieval Art", "Renaissance", "Baroque", "Modern Art", "Global Art", "Photography", "Museums and Methods", "Comparison", "Writing Art History") are broadly chronological-then-methodological. Syllabus is 8 chapters with explicit global framing. Re-chapter.

**Track-bank topic mismatch**: bank is declared `makeQuestionBank('University', …)` (line 24 of `artHistoryWorkoutGenerated.ts`) but the track is `col-ap-art-history` in the high tier. Either re-tag to `'AP'` or accept the cross-tier reuse (the bank also feeds a university art-history track).

## Per-file recommendations

| File | AP Art History Q's | Bucket | Reason |
|---|---|---|---|
| [`artHistoryWorkoutGenerated.ts`](../../../src/data/questionCatalog/artHistoryWorkoutGenerated.ts) | 50 | **FIX → canonical bank** | Strong content-bearing items. Per-distractor whys are specific (e.g., "Sfumato softens edges, hard outlines would be the opposite"). Fix: re-tag topic from `'University'` to `'AP'`; re-chapter to 8-chapter syllabus; add ~10 non-Western works (Mosque of Cordoba calligraphy, Mayan stelae, Mughal miniature, Edo screen painting, Yoruba ifa tray, Maori meeting house). |
| `openTriviaArtHistoryExtensionImported.ts` (157 lines, 15 stripped distractors) | ~15 | **FIX or DELETE** | Recall trivia (Bernini, Cubism founders) with fixed-string distractors. Either rewrite or DELETE — coverage already in WorkoutGenerated. |
| `openTriviaArtHistoryRemainingImported.ts` (127 lines) | ~12 | **DELETE** | Same flaw, even smaller signal. |
| `openTriviaCuratedAdditionalImported.ts` (curated art subset) | ~unknown | **CHECK** | Probably partial dedupe with WorkoutGenerated. |
| `openTriviaArtPhilosophyExtensionImported.ts` / `…MicroImported.ts` | ~unknown | **CHECK** | Likely cross-routed to philosophy/aesthetics track. Verify they don't double-route into art history. |
| `bonusIdentificationQuestions.ts` (art subset) | n/a | **CHECK** | Reportedly contains art identification items that may double-route via `guessTheArtMovement` etc. |
| No `apArtHistoryExamBatch.ts` exists | 0 | n/a | **GAP**: no pure stimulus/required-image bank. AP Art History exam is heavily image-based; Floe has no images, which is a structural limitation. Consider text descriptions of the 250 required works ("A 4th-century stone slab depicting…"). |

**Net effect**: ~50 KEEP + ~10 trivia fold-in + ~10 new global items = ~70 questions. Image-handling remains the platform-level limitation.

## Open actions (priority order)

1. **Re-chapter** `artHistoryWorkoutGenerated.ts` to 8-chapter syllabus spine.
2. **Author ~10 non-Western items** to close the Chapter 3 + Chapter 7 gaps (specific works, not just methodological guidance).
3. **Fix topic tag** from `'University'` to `'AP'` (or accept dual use and document).
4. **DELETE or trim** `openTriviaArtHistoryExtension` + `…Remaining`; rewrite distractors if kept.
5. **Add `region`** metadata noting the global framing under a US College Board exam.
6. **Add a camelCase `apArtHistory`** track in `high.ts` or document why only `col-…` form exists.
7. **Image-content note** — flag as platform limitation. Consider commissioning ekphrastic text-based stand-ins.

## Estimated effort

- Re-chapter + global authoring: ~5 hours.
- openTrivia rewrites or deletions: ~2 hours.
- Topic re-tag + track id cleanup: ~1 hour.

**~1 working day.**

## Notes for next auditor

This is one of the better-quality humanities banks structurally — content-bearing, real terms, specific distractors. The Eurocentric coverage gap is the substantive issue; the image-blind format is a Floe-wide limitation. Use `artHistoryWorkoutGenerated.ts` voice as a template for any new art-related authoring across the catalog.
