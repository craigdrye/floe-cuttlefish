# Audit: guessTheSpaceObject

**Syllabus**: [`src/data/syllabi/high/guess_the_space_object.md`](../../../src/data/syllabi/high/guess_the_space_object.md)
**Track id**: `guessTheSpaceObject` (high, Science, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheSpaceObjectQuestions` (8)

## Coverage map

| Object class | Examples |
|---|---|
| Planets | Mars, Saturn |
| Dwarf planets | Pluto |
| Moons | Titan, Europa |
| Small bodies | Comet, Asteroid |
| Deep sky | Nebula |
| **Missing** | Stars (Sun, red dwarfs), galaxies, black holes, exoplanets, meteor vs meteoroid vs meteorite distinction, Kuiper Belt vs Oort Cloud |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (space object slice) | 8 | **FIX** | Stems use solid memorable cues (Mars=iron dust, Saturn=rings, Pluto=heart, Titan=methane lakes, Europa=ice shell). Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate — astronomy distractors need quantitative reasons ("Phobos is *Mars'* moon, not Saturn's"). (2) Subtitle promises "Planets, moons, comets, asteroids, dwarf planets, and nebulae" — match — but stars and galaxies are conspicuously absent for a "space object" track. (3) Media is the `constellation` SVG (stars on dark) reused for every object, which is *wrong* for planets and moons. |

## Open actions

1. Add Qs for stars (Sun, Betelgeuse, red dwarfs), one galaxy (Andromeda, Milky Way), one black hole concept (Sagittarius A*).
2. Per-object media (planet disks vs nebula vs star fields are visually distinct and matter).
3. Per-distractor reasoning grounded in orbital location / composition.
