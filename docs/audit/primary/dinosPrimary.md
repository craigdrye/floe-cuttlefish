# Audit: dinosPrimary

**Syllabus**: [`src/data/syllabi/primary/dinosaur_science.md`](../../../src/data/syllabi/primary/dinosaur_science.md)
**Track id**: `dinosPrimary`
**Tier**: primary (Fun Discovery)
**Status**: `playable` (ageCatalog/primary.ts)
**Region**: untagged (content is geographically neutral, no region tag required)

## Coverage map (syllabus → questions)

Single source: `dinosPrimary` export of `primaryGeneratedScienceDiscovery.ts` — 10 concept seeds rendered through 5 frames = 50 questions across 4 generated chapter names that do not match the syllabus.

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Deep Time and the Dinosaur World | ✅ partial | "The Mesozoic Era" seeds (periods, Pangaea) |
| 2. What Makes a Dinosaur a Dinosaur? | ❌ | No archosaur / hip socket / dinosaur-vs-pterosaur sorting content |
| 3. Fossils as Evidence | ✅ | body fossils, trace fossils, Mary Anning |
| 4. Dinosaur Bodies and Adaptations | ✅ partial | "Anatomy and Adaptation" — bipedal, Stegosaurus plates, feathers |
| 5. Food, Movement, and Behaviour Clues | ❌ | No trackway-speed, herd, nest, or predator/prey content |
| 6. Ancient Habitats and Ecosystems | ❌ | No Mesozoic flora, food webs, or habitat content |
| 7. Dinosaur Discoveries and Field Science | ❌ partial | Mary Anning seed only; nothing on excavation, mapping, peer review |
| 8. Extinction, Survivors, and New Questions | ✅ | "Extinction and Legacy" — K-Pg, survivors |

**Chapter taxonomy mismatch.** Generator uses 4 condensed chapters ("The Mesozoic Era", "Anatomy and Adaptation", "Fossils and The Fossil Record", "Extinction and Legacy") versus the syllabus's 8. Three syllabus chapters have zero coverage.

## Per-file recommendations

| File | dinosPrimary Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (dinosPrimary export) | 50 (10 seeds × 5 frames) | **FIX** | Cartoonish distractors confirmed: `'The main dinosaur periods were Monday, Tuesday, and Friday.'`, `'Pangaea was a dinosaur that ate continents.'`, `'Mary Anning was the first person to land on Mars.'`, `'Stegosaurus plates were used as helicopter blades.'`, `'The K-Pg extinction happened last Tuesday.'`. Every wrong answer uses a `DEFAULT_FLAW`-equivalent template string with no per-distractor explanation. 5-frame multiplication means one bad seed becomes 5 bad questions. |

**Net effect**: 50 padded questions from 10 thin seeds → target ~40 hand-authored seeds × 1 frame (40 questions) covering all 8 syllabus chapters with plausible misconceptions.

## Open actions (priority order)

1. **Rewrite the 10 seeds in `dinosPrimarySeeds`** to remove silly distractors. Replace with real misconceptions (e.g. for the three periods: "Cambrian, Permian, Cretaceous" — wrong era; "Jurassic, Cretaceous, Cenozoic" — Cenozoic is post-dinosaur; "Triassic, Permian, Jurassic" — Permian predates dinosaurs). Voice template: `primaryBuilders.ts` `[answer, whyWrong, nudge]` triple.
2. **Add 30 hand-authored seeds** to close Chapters 2, 5, 6, 7 and round out Chapters 1, 4, 8. Use the syllabus practice questions as prompts.
3. **Drop the 5-frame multiplier** for this track — it inflates count without adding pedagogical value and propagates any seed flaw 5×. Use 1 frame per seed.
4. **Realign chapter strings** to the syllabus's 8 names so the coverage map matches what learners see.
5. **No region tag needed** — content is geographically neutral.

## Estimated effort

- Rewrite 10 existing seeds with real misconceptions: ~3 hours
- Author 30 new seeds across uncovered chapters: ~10 hours
- Drop frame multiplier + chapter rename: ~30 min

**~1.5 working days.**

## Notes for next auditor

Cluster pattern: `planetsPrimary`, `oceanPrimary`, `bugsPrimary` use the same generator (`buildGeneratedBank` in `primaryGeneratedScienceDiscovery.ts`) with the same `DEFAULT_FLAW`-equivalent template and the same 5-frame multiplier. Fix the generator design and the four Fun Discovery tracks all benefit. The hand-authored `primaryBuilders.ts` is the model.
