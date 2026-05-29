# Audit: scienceDiscoveryYear3

**Syllabus**: [`src/data/syllabi/primary/science_discovery_year_3.md`](../../../src/data/syllabi/primary/science_discovery_year_3.md)
**Track id**: `scienceYear3`
**Tier**: primary
**Region**: Multi-framework (UK KS2 Y3, US NGSS 3-5, ACARA Y3) — jurisdiction-neutral.

## Status flag
`status: 'playable'` — correct.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Scientists Ask Better Questions | No | **Gap**: no fair-test, prediction, variable, conclusion items at Year 3 (only at Y4/Y5) |
| 2. Plants, Parts, and Survival Needs | Partial | Year 1 covers plant basics; Y3 should add function/transport — not present |
| 3. Life Cycles, Pollination, and Seed Dispersal | Partial | "seed dispersal" seed exists; pollination only mentioned in bugsPrimary |
| 4. Rocks, Soils, and Fossils | Yes | 3 seeds (sedimentary, fossil formation, soil formation) |
| 5. Forces, Friction, and Magnets | Yes | 2 seeds (friction, magnetic materials) |
| 6. Light, Reflection, and Shadows | Yes | 2 seeds (light sources, shadow formation) |
| 7. Nutrition, Skeletons, and Movement | Yes | 2 seeds (human skeleton, balanced diets) |
| 8. Habitats, Adaptations, and Local Fieldwork | No | **Gap**: no habitat/adaptation/fieldwork items at Year 3 |

10 seeds x 5 frames = 50 questions. Two large chapter gaps (Ch 1 working-scientifically and Ch 8 habitats) plus thin Plants and Life Cycles.

## DEFAULT_FLAW flag

Same boilerplate per-distractor mapping. Fails the quality bar. See `scienceDiscoveryYear1.md` for the helper-level fix.

## Cartoonish distractors flag

Year 3 distractors are mixed. Genuine misconception bait: "The Moon is a light source because it makes its own light" (real Y3 confusion), "Magnets attract every metal equally" (real). Cartoon filler: "Fossils form when bones are painted gold overnight," "Soil is made only from plastic bags," "Friction makes every object float upward," "The skeleton digests food in the stomach." The May 2026 flag bites here.

## Per-file recommendations

| File | Y3 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (`scienceYear3`) | 50 | **FIX (heavy)** | Concepts well chosen for Y3 KS2 transition; rocks/forces/light coverage is solid. Boilerplate distractors. Cartoon-style filler distractors. Two whole chapters missing (working scientifically, habitats). |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) (`scienceYear3` key, 1 item) | 1 | **DELETE** | A single tree-rings trivia item with boilerplate distractor explanations. Not worth keeping. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (also pulls `ck12` solar-system/earth/rocks) | filtered | **KEEP** | Aggregator-only. CK-12 supplement helps rocks chapter. |

## Open actions (priority order)

1. **Helper fix** (shared with all 12 tracks): per-distractor explanations.
2. **Author Chapter 1 (Working Scientifically) seeds** — fair-test vocabulary, prediction, variables, conclusions. This is Year 3's central skill in the syllabus and missing entirely from the bank.
3. **Author Chapter 8 (Habitats, Adaptations, Local Fieldwork) seeds.**
4. **Replace cartoon distractors with real Y3 misconceptions** ("the Moon makes its own light" model — keep that voice, drop the painted-gold-overnight voice).
5. **Drop frame count to 1-2.**
6. **Delete the single OpenTrivia item.**

## Estimated effort

- Helper fix: shared
- 10 existing seeds: distractor authoring ~3 hours
- ~6-8 new seeds for Ch 1 + Ch 8: ~4 hours
- Frame reduction: ~30 min

**~8 hours.**

## Notes for next auditor

Year 3 is the first KS2 year and the syllabus is explicit that working-scientifically habits (question, prediction, fair test, conclusion) should appear in every chapter. The current bank teaches Y3 *content* but not Y3 *practice*. This matches the pattern across the science cluster — the bank treats science as a set of correct-fact recall problems rather than a way of thinking. The fair-test framing is well-handled in Y4 and Y5; back-port to Y3.
