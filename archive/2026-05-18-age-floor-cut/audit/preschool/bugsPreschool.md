# Audit: bugsPreschool (Bugs & Minibeasts)

**Syllabus**: [`src/data/syllabi/preschool/bugs_and_minibeasts.md`](../../../src/data/syllabi/preschool/bugs_and_minibeasts.md)
**Track id**: `bugsPreschool`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (EYFS, EYLF, NAEYC, NGSS K-2, Wildlife Trusts, NHM referenced).
**Primary-tier sibling**: `bugsPrimary` (50 generated Q's).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Tiny Creature Detectives | ❌ | observational — text MCQ feasible for ID prompts |
| 2. Bodies, Legs, and Sorts | ❌ | classic "how many legs?" Q's are perfect MCQ material |
| 3. Safe Looking and Gentle Handling | ❌ | care-routine prompts |
| 4. Homes Under, Over, and Around | ❌ | habitat matching |
| 5. Moving Like Minibeasts | ❌ | movement words; partly schema-mismatched |
| 6. Colors, Patterns, and Camouflage | ❌ | benefits from picture prompts |
| 7. Life Cycles and Growing Up | ❌ | sequence prompts feasible in text MCQ |
| 8. Caring for Tiny Living Things | ❌ | no questions |

**Syllabus aspirational; no questions wired.** Declared `status: 'playable'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) lines 331–340. [`src/data/questionCatalog/primary.ts`](../../../src/data/questionCatalog/primary.ts) line 144 wires only `bugsPrimary`. No question file references `bugsPreschool`.

## Per-file recommendations

| File | Q's for `bugsPreschool` | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) `bugsPrimary` (lines 721-792, 50 Q's) | 0 (different track) | **PARTIAL SALVAGE** | A few `bugsPrimary` seeds are concept-simple enough to paraphrase down for preschool — specifically: "Insects have 6 legs, spiders 8" (chapter 2 fit), "Complete metamorphosis: egg, larva, pupa, adult" (chapter 7, but simplify wording), "Camouflage helps insects blend in" (chapter 6). Strip the genus names (Hymenoptera, Lepidoptera vocabulary creep), drop "exoskeleton" and "arthropod", and these become preschool-usable. ~3 seeds × hand-written distractors = 3–5 preschool Q's. The other 7 `bugsPrimary` seeds (decomposers, conservation, worker-bee roles) stay in the primary track. |
| any other file | 0 | **N/A** | No other bug content. |

**Cross-cutting flags**:
- `status: 'playable'` with zero questions.
- `bugsPrimary` generator uses the same templated `whyWrong` (`"That is a plausible guess…"`) — fails per-distractor rule across all 50 sibling questions.
- Syllabus mapping missing from [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts).

## Open actions (priority order)

1. **Demote to `status: 'soon'`** in the age catalog.
2. **Add syllabus mapping**: `bugsPreschool: 'preschool/bugs_and_minibeasts.md'`.
3. **Author preschool minibeast bank**. Of the four Fun Discovery preschool tracks, **bugs has the highest MCQ-friendly density** — leg-counting, habitat-matching, and life-cycle sequencing are all text-MCQ-native. Target 18–24 Q's covering chapters 1, 2, 4, 6, 7. Sample: "Which has 8 legs — a beetle, a spider, or a worm?", "Where does a worm live: in soil, in the sky, or in a tree top?", "What comes after caterpillar — egg, chrysalis, or butterfly?".
4. **Paraphrase the 3 salvageable `bugsPrimary` seeds** for the preschool bank with hand-authored distractor explanations (the generator template won't pass quality bar).
5. **Image schema extension** would unlock chapter 6 camouflage games ("spot the stick insect"). Bundle with SEL schema work.

## Estimated effort

- Demote + syllabus mapping: 15 min.
- Author 20 preschool bug Q's (text-only): ~3 hours.
- Optional image-led extension (6 camouflage Q's): +2 hours.

**~half a day to make `bugsPreschool` real.** Best ROI of the four Fun Discovery preschool tracks because text MCQ fits the topic naturally.

## Notes for next auditor

`bugsPrimary` carries the same templated-distractor pattern as `oceanPrimary`/`dinosPrimary`/`planetsPrimary` — one generator change fixes them all. Worth treating the four Fun Discovery primary banks as a single audit cluster: shared generator, shared per-distractor bug, shared simple fix path. Authoring preschool versions can ride on top of the same generator overhaul if seed `whyWrong` strings are added at the same time.
