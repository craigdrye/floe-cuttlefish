# Audit: guessTheGemstone

**Syllabus**: [`src/data/syllabi/high/guess_the_gemstone.md`](../../../src/data/syllabi/high/guess_the_gemstone.md)
**Track id**: `guessTheGemstone` (high.ts:1000) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Corundum (sapphire, ruby) | Yes | Both present with mineralogical link |
| Green/purple (emerald, peridot, amethyst) | Yes | All three present |
| Organic/optical (pearl, opal) | Yes | Both present |
| Quartz (citrine) | Yes | Present |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheGemstoneQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Solid mineralogical framing (sapphire = corundum, peridot = olivine, amethyst = quartz). Syllabus key skill "use color carefully without overtrusting it" is honoured (sapphire lesson: "blue is the classic color, but sapphires can occur in many colors"). Distractors templated. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: dedicated `gem` SVG shape with faceted polygon path - the bonus file's better media additions.
- Mild duplication with guessTheRock minerals chapter (amethyst, quartz). Distinction is acceptable: rock track is field-ID, gem track is cut/luster/inclusion.

## Open actions

1. Rewrite per-distractor explanations exploiting mineral-family vs color contrast (e.g. "Garnet is also red, but it's a silicate not corundum, and typically has a darker dodecahedral crystal form").
2. Keep rock-vs-gem distinction explicit in track subtitles.

## Estimated effort

~2 hours.
