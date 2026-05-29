# Audit: scienceDiscoveryYear1

**Syllabus**: [`src/data/syllabi/primary/science_discovery_year_1.md`](../../../src/data/syllabi/primary/science_discovery_year_1.md)
**Track id**: `scienceYear1`
**Tier**: primary
**Region**: Multi-framework (UK KS1, US NGSS K-2, ACARA Y1, India NCERT Class 1) — not explicitly tagged but content is jurisdiction-neutral.

## Status flag
`status: 'playable'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) — correct (questions exist and are wired). Unlike the Big Questions cluster, the science discovery tracks were flipped to playable.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Using Our Senses | Partial | "the five senses" item exists (Animals Including Humans bucket) |
| 2. Plants Around Us | Yes | 3 items (parts, basic needs, deciduous/evergreen) |
| 3. Animals and Human Bodies | Yes | 3 items (needs, herbivores, senses) |
| 4. Everyday Materials | Yes | 3 items (object vs material, waterproof, transparent) |
| 5. Weather and Seasons | Partial | "summer and winter day length" only — no weather-watching or weather-charts items |
| 6. Pushes, Pulls, and Movement | No | **Gap**: zero force/motion items at Year 1 (forces appear in Year 3 bank) |
| 7. Living Things and Their Places | Partial | Habitats appear in Year 2 bank; Year 1 should have basic living/place items |
| 8. Looking After Our World | No | **Gap**: zero environment/recycling/care items at Year 1 |

10 seed concepts x 5 frames = 50 questions. Three syllabus chapters uncovered or thinly covered.

## DEFAULT_FLAW flag

`primaryGeneratedScienceDiscovery.ts` uses a **boilerplate distractor explanation** that functions exactly like `DEFAULT_FLAW`:

```ts
wrong: seed.wrong.map((answer) => [
  answer,
  `That is a plausible guess, but it does not match the evidence for ${seed.concept}.`,
  `Remember: ${seed.correct}`,
]) as [...]
```

Every wrong answer in this entire file gets the same generic "plausible guess" line with the concept name interpolated. This **fails the quality bar** ("Per-distractor explanation — each wrong answer has a specific 'why this is wrong' line"). May 2026 flag confirmed.

The five `frames` (key idea / classroom check / science notebook / useful conclusion / spot the match) also generate **near-duplicate prompts** for the same seed — five questions per concept that differ only in stem phrasing. This is structural padding, not coverage.

## Cartoonish distractors flag

May 2026 flag does not bite Year 1 directly — Year 1 distractors are mostly the "plant has bones," "candy and toys," "five senses are running, jumping, eating, sleeping, and reading" style. These are silly but at least defensible as misconception bait at age 5-6. The flagged Pangaea/exoskeleton lines live in dinosPrimary/bugsPrimary, not in scienceYear1. Still: "animals only need toys and sunlight" is filler, not a misconception a Year 1 child holds.

## Per-file recommendations

| File | Y1 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (`scienceYear1`) | 50 (10 seeds x 5 frames) | **FIX (heavy)** | Concepts are solid Year 1 science. Boilerplate distractor explanations fail the quality bar. Five-frame multiplication creates fake breadth. Rewrite per-distractor explanations; drop 3-4 frames per seed; add seeds for forces, weather data, and care-for-world. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) (`scienceYear1` key, 10 items) | 10 | **DELETE or MERGE selectively** | Trivia-style animal identification ("It is almost 6 feet long and it likes to eat ants"). Distractors carry the same boilerplate filler line. Mostly off-syllabus (anteaters, chow chows are not the Year 1 curriculum). Salvage 1-2 (giraffe-eats-leaves could fit "Animals and Human Bodies") and cut the rest. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (aggregator, also pulls `ck12` weather/habitat/living-things) | filtered | **KEEP** | Aggregator-only; out of scope. CK-12 supplements likely good coverage. |

## Open actions (priority order)

1. **Rewrite the `buildGeneratedBank` distractor mapper** to require seed authors to write per-distractor explanations rather than auto-generate the "plausible guess" line. This is a one-line schema change with cluster-wide impact (fixes Years 1-6 plus dinosaurs/oceans/space/bugs).
2. **Drop frame count from 5 to 1-2 per seed.** Five framings per concept is padding.
3. **Add seeds for Pushes/Pulls (Ch 6), Weather data (Ch 5), Looking After Our World (Ch 8).** ~6 new seeds.
4. **Delete most OpenTrivia kids items wired into `scienceYear1`** — salvage 1-2.

## Estimated effort

- Distractor schema fix: ~1 hour (helper change, but adds per-seed authoring burden)
- Per-seed distractor authoring for 10 existing seeds: ~3 hours
- Drop frame count: ~30 min
- 6 new seeds for missing chapters: ~3 hours
- OpenTrivia cleanup: ~30 min

**~7-8 hours.** The boilerplate-distractor fix is the load-bearing piece — without it, the 50-question count is misleading.

## Notes for next auditor

The `buildGeneratedBank` helper applies its boilerplate distractor mapping to **all six science years plus dinosaurs, planets, oceans, and bugs** in the same file. Fix the helper once and the entire generated-science cluster improves. The frame count and seed counts vary by track; the distractor problem is universal.
