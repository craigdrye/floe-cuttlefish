# Audit: guessTheArtMovement

**Syllabus**: [`src/data/syllabi/high/guess_the_art_movement.md`](../../../src/data/syllabi/high/guess_the_art_movement.md)
**Track id**: `guessTheArtMovement` (high, Arts, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheArtMovementQuestions` (8)

## Coverage map

| Movement | Present |
|---|---|
| Impressionism, Cubism, Surrealism, Pop Art, Baroque, Minimalism, Romanticism, Rococo | All eight covered |
| Renaissance, Abstract Expressionism, Dada, Realism, Neoclassicism | **Missing** (Realism + Neoclassicism appear only as distractors) |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (art movement slice) | 8 | **FIX** | Strong stem language ("breaks subjects into geometric planes and multiple viewpoints" → Cubism is text-perfect). Issues: (1) Same DEFAULT_FLAW-equivalent boilerplate from `q()`. (2) Media is one cartoon canvas SVG (circle + square + squiggle) reused across every movement — for an *art* track this is the most painful visual gap in the cluster. (3) Western-canon only; non-Western movements absent. |

## Open actions

1. Wire per-movement reference imagery (license-safe palettes, characteristic motifs) — this is the cluster's highest-leverage visual fix.
2. Per-distractor rewrites: e.g. for Impressionism, *Surrealism* should say "Surrealism arrives ~40 years later and prioritizes dream-logic over optical truth."
3. Add Renaissance / Abstract Expressionism / Dada to broaden the historical span; consider one non-Western movement (Mughal miniature, Edo ukiyo-e).
