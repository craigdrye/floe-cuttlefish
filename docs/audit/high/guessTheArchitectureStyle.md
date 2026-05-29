# Audit: guessTheArchitectureStyle

**Syllabus**: [`src/data/syllabi/high/guess_the_architecture_style.md`](../../../src/data/syllabi/high/guess_the_architecture_style.md)
**Track id**: `guessTheArchitectureStyle` (high, Architecture, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheArchitectureStyleQuestions` (8)

## Coverage map

| Syllabus area | Covered? | Notes |
|---|---|---|
| Classical / Greek Revival | YES | columns + pediment |
| Gothic Revival | YES | pointed arch |
| Art Deco / Art Nouveau | YES | both present |
| Bauhaus / Brutalism / Mid-century Modern | YES | three Modernist Qs |
| Tudor Revival, Rococo (decorative) | YES | |
| Baroque, Victorian, Romanesque | **Missing** | All named in distractors but never tested |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (arch style slice) | 8 | **FIX** | Stems are crisp ("clean function, simple forms, flat roofs, minimal ornament" → Bauhaus is excellent). Failures: (1) DEFAULT_FLAW-equivalent distractor boilerplate. (2) Visual ID is **critical here** but media is one generic `building` SVG (peaked roof + columns) reused for every style — the picture cannot distinguish Gothic from Brutalism. (3) Baroque appears only as a distractor; deserves at least one stem. |

## Open actions

1. Author per-style silhouettes (pointed arches, half-timbering, stepped Deco crown, exposed concrete mass) — this track is visual-first and the current art is text-only in effect.
2. Per-distractor explanations: for the Brutalism Q, *Art Nouveau* should say "Art Nouveau favors sinuous plant-derived ornament — opposite of Brutalism's raw mass."
3. Add a Baroque / Romanesque Q to round out the decorative-vs-massive axis.
