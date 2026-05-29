# Audit: guessTheCitySkyline

**Syllabus**: [`src/data/syllabi/high/guess_the_city_skyline.md`](../../../src/data/syllabi/high/guess_the_city_skyline.md)
**Track id**: `guessTheCitySkyline` (high, Geography, `status: 'playable'`, 12 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheCitySkylineQuestions` (12)

## Coverage map

| Region | Cities covered |
|---|---|
| North America | NYC, Toronto, San Francisco, Seattle |
| Europe | Paris, London, Rome |
| Middle East | Dubai, Istanbul |
| Asia-Pacific | Sydney, Hong Kong |
| Latin America | Rio de Janeiro |
| **Missing** | Africa (entire continent — Cairo/Cape Town/Lagos absent), South Asia (Mumbai/Delhi), mainland China (Shanghai/Beijing), Mexico City, Singapore |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (city skyline slice) | 12 | **FIX** | Stems use real landmark cues that work as ID prompts. Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate. (2) **Visual gap is critical here**: media is one generic city SVG (three rectangles + sun) reused for every city — the picture cannot help. For a *skyline* track this is the central failing. (3) Western-heavy: 4 US, 3 Europe, 0 Africa, 0 South Asia, 0 mainland China. (4) Skyline-shape literacy never tested independent of landmark name. |

## Open actions

1. Wire per-city silhouette SVGs (the asset folder pattern used by `historical-ruins` is the model).
2. Add Cairo, Mumbai, Shanghai, Singapore, Mexico City — at minimum.
3. Per-distractor reasons that lean on geography ("Boston has no Empire State; its tallest is the Hancock and it is much shorter").
