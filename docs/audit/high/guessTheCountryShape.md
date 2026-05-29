# Audit: guessTheCountryShape

**Syllabus**: [`src/data/syllabi/high/guess_the_country_shape.md`](../../../src/data/syllabi/high/guess_the_country_shape.md)
**Track id**: `guessTheCountryShape` (high, Geography, `status: 'playable'`, 12 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheCountryShapeQuestions` (12)

## Coverage map

| Shape archetype | Country |
|---|---|
| Boot | Italy |
| Long islands | New Zealand, Japan |
| Continent-scale | Australia, Canada, Brazil |
| Long ribbon | Chile |
| Triangular peninsula | India |
| Hexagon | France |
| Archipelago | Indonesia |
| Two-ocean tip | South Africa |
| Teardrop island | Sri Lanka |
| **Missing iconic shapes** | Norway (fjord coast), Chile's neighbour Argentina, Vietnam (S-curve), Korea peninsula, Iberia (rectangle), UK (kite) |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (country shape slice) | 12 | **FIX** | Stems lean on widely-taught shape mnemonics; good range. Issues: (1) DEFAULT_FLAW-equivalent boilerplate distractors. (2) **Critical visual gap** — this is *the* visual-ID track and media is one generic blob SVG ("country" shape primitive) reused 12 times. (3) Distractors are all in-region — easier than they should be ("which has a hexagon shape? France/Germany/Poland/Belgium" — only France has a famous shape nickname here). |

## Open actions

1. Wire real country silhouettes (Natural Earth data is open). Without that, this track is text-only — defeating the entire point.
2. Cross-region distractors (Italy vs Greece *and* Vietnam, both peninsular).
3. Per-distractor reasons grounded in geography ("Greece is peninsular + archipelagic but has no boot heel").
