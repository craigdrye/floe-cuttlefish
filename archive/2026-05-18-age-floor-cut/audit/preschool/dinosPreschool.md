# Audit: dinosPreschool (Dinosaur World)

**Syllabus**: [`src/data/syllabi/preschool/dinosaur_world.md`](../../../src/data/syllabi/preschool/dinosaur_world.md)
**Track id**: `dinosPreschool`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (Smithsonian, NHM, AMNH, UCMP referenced).
**Primary-tier sibling**: `dinosPrimary` (separate track, 50 generated Q's; see notes).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Welcome to Dinosaur World | ❌ | no questions |
| 2. Big, Small, Tall, and Tiny | ❌ | size comparison — needs picture prompts |
| 3. Teeth, Food, and Sorting | ❌ | sorting tasks — schema mismatch with MCQ |
| 4. Feet, Tracks, and Movement | ❌ | no questions |
| 5. Fossils Are Clues | ❌ | no questions |
| 6. Nests, Eggs, and Dinosaur Homes | ❌ | no questions |
| 7. Long Ago Earth | ❌ | no questions |
| 8. Dinosaur Museum Play | ❌ | no questions |

**Syllabus aspirational; no questions wired.** Track is declared `status: 'playable'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) lines 265–274; the catalog builder in [`src/data/questionCatalog/primary.ts`](../../../src/data/questionCatalog/primary.ts) wires only `dinosPrimary` (line 141), never `dinosPreschool`. Verified by full grep.

## Per-file recommendations

| File | Q's for `dinosPreschool` | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) `dinosPrimary` (line 502-573, 10 seeds × 5 frames = 50 Q's) | 0 (different track) | **DO NOT MERGE** | The `dinosPrimary` bank covers Mesozoic eras, Pangaea, bipedal anatomy, Mary Anning, K-Pg extinction with iridium layer — **all too advanced for ages 3–5**. The preschool syllabus is sand-tray pretend-play and footprint sorting. Cross-wiring `dinosPrimary` content into `dinosPreschool` would be a developmental mismatch. |
| any other file | 0 | **N/A** | No other dinosaur content in the catalog. |

**Cross-cutting flags**:
- `status: 'playable'` with **zero questions** wired.
- The `dinosPrimary` generator uses a **templated per-distractor explanation** — `"That is a plausible guess, but it does not match the evidence for ${seed.concept}."` — which is effectively the `DEFAULT_FLAW` anti-pattern: every wrong answer in every generated Q carries the same generic explanation. Flagging here because the same generator would be used if anyone wires up `dinosPreschool` next, and the template would still violate the per-distractor quality bar.
- Syllabus mapping missing from [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts) `syllabusPathByTrackId`. Resolver falls back to id-to-filename guessing.

## Open actions (priority order)

1. **Demote to `status: 'soon'`** until questions exist.
2. **Add syllabus mapping**: `dinosPreschool: 'preschool/dinosaur_world.md'` to [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts).
3. **Author preschool dinosaur bank**. 12–20 simple Q's are plenty for ages 3–5. Sample concepts: "Which dinosaur had a long neck?", "Which is a meat-eater clue: sharp teeth or flat teeth?", "What do paleontologists look for?", "Were dinosaurs alive at the same time as people?" Keep names limited to T-Rex, Triceratops, Stegosaurus, Brachiosaurus, Velociraptor — the playground-recognised set.
4. **Do NOT use the `buildGeneratedBank` template** as-is for new authoring; the per-distractor placeholder string fails the audit quality bar. Either rewrite the template to require seed-level distractor explanations, or hand-author preschool Q's directly.
5. **Schema option (lower priority)**: chapters 2, 3, 4 are size/sorting tasks that work much better as image MCQs ("which footprint is bigger?"). Tie this work to the `socialEmotionalLearning` schema extension if that ships first.

## Estimated effort

- Demote + add syllabus mapping: 15 min.
- Author 15 preschool dinosaur Q's (text-only, ~10 min each at this age band): ~2.5 hours.
- Optional image-led extension once schema lands: +3 hours for 8–10 picture Q's.

**~half a day to make `dinosPreschool` real** — fastest preschool ghost to revive because the topic is well-bounded and inherently playful.

## Notes for next auditor

The `Dinosaur Science` (`dinosPrimary`) sibling exists, is wired, and uses the generator with templated distractor explanations. That track needs its own audit pass: 50 Q's with the same boilerplate `whyWrong` is the exact `DEFAULT_FLAW` problem flagged in `docs/CONTENT_AUDIT.md`. The fix is the same as for `careerAgentGeneratedRoadmapFinance.ts`: rewrite per-distractor explanations from the seed-level facts. Apply that fix before authoring `dinosPreschool` so both tiers benefit from one template change.
