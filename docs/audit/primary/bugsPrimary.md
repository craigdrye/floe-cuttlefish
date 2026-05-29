# Audit: bugsPrimary

**Syllabus**: [`src/data/syllabi/primary/entomology_for_kids.md`](../../../src/data/syllabi/primary/entomology_for_kids.md)
**Track id**: `bugsPrimary`
**Tier**: primary (Fun Discovery)
**Status**: `playable` (ageCatalog/primary.ts)
**Region**: untagged (content is geographically neutral, no region tag required)

## Coverage map (syllabus → questions)

Single source: `bugsPrimary` export of `primaryGeneratedScienceDiscovery.ts` — 10 concept seeds × 5 frames = 50 questions across 4 condensed chapter names.

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Becoming an Insect Scientist | ❌ | No observation, field-note, safety, or respect content |
| 2. Arthropods and Insects | ✅ partial | "Classification and Anatomy" seeds (insect body parts, arachnids, exoskeletons) |
| 3. Insect Body Plans | ✅ partial | One seed on body parts; no spiracle, antenna, mouthpart, compound eye |
| 4. Life Cycles and Metamorphosis | ✅ | complete and incomplete metamorphosis covered |
| 5. Insect Families and Orders | ❌ | No Coleoptera/Lepidoptera/Hymenoptera/Diptera content, no identification keys |
| 6. Pollination, Decomposition, and Food Webs | ✅ partial | pollination, worker bees, decomposer insects |
| 7. Social Insects and Collective Behaviour | ❌ partial | Worker bees only; no pheromone, division of labour, ants, termites |
| 8. Adaptation, Threats, and Conservation | ✅ | camouflage, conservation actions |

**Chapter taxonomy mismatch.** Generator uses 4 names ("Classification and Anatomy", "Life Cycles and Metamorphosis", "Pollination, Colonies and Ecosystems", "Adaptation and Conservation") vs syllabus's 8. Three syllabus chapters uncovered.

## Per-file recommendations

| File | bugsPrimary Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (bugsPrimary export) | 50 (10 seeds × 5 frames) | **FIX** | Cartoonish distractors confirmed: `'Arachnids are all flowering plants.'`, `'Pollination means insects paint flowers blue.'`, `'Worker bees are fish that live in honey.'`, `'Complete metamorphosis goes adult, rock, cloud, adult.'`, `'Camouflage means insects glow brighter than the Sun.'`, `'An exoskeleton is the Moon phase of an insect.'`. Every wrong answer uses the `DEFAULT_FLAW` template (`"That is a plausible guess, but it does not match the evidence for ${concept}."`). 5-frame multiplier creates 5 nearly-identical questions per seed. |

**Net effect**: 50 padded questions → target ~40 hand-authored seeds × 1 frame covering all 8 syllabus chapters with plausible misconceptions (e.g. for arachnids: "Arachnids have six legs and antennae" — confuses with insects; "Arachnids hatch from a pupa stage" — wrong life cycle; "All arachnids are venomous to humans" — common myth).

## Open actions (priority order)

1. **Rewrite the 10 seeds in `bugsPrimarySeeds`** to drop cartoon distractors. Substitute genuine misconceptions kids hold (spiders-are-insects, all-bugs-sting, butterflies-and-moths-are-the-same).
2. **Author 30 new seeds** for chapters 1, 3 (additional), 5, 7 plus syllabus topics like identification keys, pheromone communication, ant/termite colonies, safe observation rules.
3. **Drop the 5-frame multiplier** — duplicates each flaw.
4. **Realign chapter strings** to the syllabus's 8 names.
5. **No region tag needed**.

## Estimated effort

- Rewrite 10 seeds: ~3 hours
- Author 30 new seeds: ~10 hours
- Generator/rename cleanup: ~30 min

**~1.5 working days.**

## Notes for next auditor

Same generator and pattern as `dinosPrimary`, `planetsPrimary`, `oceanPrimary`. The Fun Discovery cluster shares one fixable generator design problem: a single template `DEFAULT_FLAW` string and a 5-frame multiplier that compounds any seed weakness. Hand-authored model: `primaryBuilders.ts`.
