# Audit: planetsPreschool (Space Explorers)

**Syllabus**: [`src/data/syllabi/preschool/space_explorers.md`](../../../src/data/syllabi/preschool/space_explorers.md)
**Track id**: `planetsPreschool`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (NASA Space Place, NASA Climate Kids, EYFS, EYLF, NGSS referenced).
**Primary-tier sibling**: `planetsPrimary` (50 generated Q's).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Looking Up | ❌ | observation prompts; MCQ feasible |
| 2. Day, Night, and Shadows | ❌ | sorting day/night routines is MCQ-native |
| 3. The Sun Helps Earth | ❌ | sun-safety prompts; MCQ feasible |
| 4. Moon Shapes | ❌ | shape ID — benefits from picture prompts |
| 5. Stars and Sky Pictures | ❌ | imagination-led; partly schema-mismatched |
| 6. Our Home Planet Earth | ❌ | care prompts |
| 7. Planet Parade | ❌ | "which is red?" / "which has rings?" — MCQ-friendly |
| 8. Rockets, Astronauts, and Space Helpers | ❌ | role-play vocabulary |

**Syllabus aspirational; no questions wired.** Declared `status: 'playable'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) lines 287–296. [`src/data/questionCatalog/primary.ts`](../../../src/data/questionCatalog/primary.ts) line 142 wires only `planetsPrimary`. No question file references `planetsPreschool`.

## Per-file recommendations

| File | Q's for `planetsPreschool` | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) `planetsPrimary` (lines 575-646, 50 Q's) | 0 (different track) | **PARTIAL SALVAGE** | Two `planetsPrimary` seeds simplify cleanly to preschool: "The Sun is at the centre of our solar system, and planets orbit it" (chapter 1/7) and "Apollo 11 was the mission that first landed humans on the Moon" (chapter 8). The other 8 seeds (light years, Milky Way scale, axial tilt and seasons, Mars rovers, inner-vs-outer planet classification) are too abstract for ages 3–5 — keep in `planetsPrimary` only. |
| any other file | 0 | **N/A** | No other space content. |

**Cross-cutting flags**:
- `status: 'playable'` with zero questions.
- `planetsPrimary` generator uses templated `whyWrong` — fails per-distractor rule across all 50 sibling Q's. The wrong-answer template ("That is a plausible guess, but it does not match the evidence for ${seed.concept}") is the `DEFAULT_FLAW` anti-pattern at scale.
- Syllabus mapping missing from [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts).

## Open actions (priority order)

1. **Demote to `status: 'soon'`** in the age catalog.
2. **Add syllabus mapping**: `planetsPreschool: 'preschool/space_explorers.md'`.
3. **Author preschool space bank**. 15–20 Q's. Sample: "Which is in the sky in the daytime — Sun or stars?", "What shape is a full Moon — circle, triangle, or square?", "Which planet is our home?", "What do astronauts wear in space?", "Which planet looks red?". Stick to the syllabus's awe-first framing — no light-years, no tilted-axis explanations, no scale comparisons.
4. **Image schema extension** would unlock chapter 4 (Moon shape ID) and chapter 7 (planet picture-match). Bundle with SEL schema work.
5. **Sun-safety messaging** (chapter 3): every Q involving the Sun should reinforce "never look directly at the Sun" — match the syllabus safety framing. This is the one preschool track with an explicit safety obligation; flag for sensitivity review when authored.

## Estimated effort

- Demote + syllabus mapping: 15 min.
- Author 18 preschool space Q's (text-only): ~3 hours.
- Optional image-led extension (6 Moon/planet Q's): +2 hours.

**~half a day to make `planetsPreschool` real.**

## Notes for next auditor

Space has the highest awe-to-content ratio for preschoolers — caregivers actively show kids the Moon and look up planet names. Don't cut it. But also: the existing 4-track Fun Discovery preschool cluster (dinos, ocean, bugs, space) all share the same shape: rich syllabus, zero questions, sibling primary track with templated-distractor generated content. Treat them as a single uplift sprint — one generator fix for the primary tier, one ~3-hour authoring session per preschool track — and the whole Fun Discovery preschool surface comes online together in roughly two days.
