# Audit: oceanPreschool (Ocean Adventures)

**Syllabus**: [`src/data/syllabi/preschool/ocean_adventures.md`](../../../src/data/syllabi/preschool/ocean_adventures.md)
**Track id**: `oceanPreschool`
**Tier**: preschool (catalog `ageGroup: 'preschool'`)
**Region**: jurisdiction-neutral (NOAA, Smithsonian, Monterey Bay Aquarium, NatGeo referenced).
**Primary-tier sibling**: `oceanPrimary` (50 generated + 1 OpenTriviaForKids Q's).

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Hello, Ocean | ❌ | sensory water play — not MCQ-shaped |
| 2. Beach Treasures | ❌ | sorting task; benefits from picture prompts |
| 3. Who Lives in the Sea? | ❌ | animal-ID prompts feasible in text MCQ |
| 4. Rockpool Mini-Worlds | ❌ | no questions |
| 5. Float, Sink, and Boat | ❌ | predict-then-test; "which floats?" works in MCQ |
| 6. Waves, Weather, and Tides | ❌ | no questions |
| 7. Ocean Sounds, Songs, and Stories | ❌ | audio-shaped; schema mismatch |
| 8. Caring for Beaches and Oceans | ❌ | no questions |

**Syllabus aspirational; no questions wired.** Declared `status: 'playable'` in [`src/data/ageCatalog/primary.ts`](../../../src/data/ageCatalog/primary.ts) lines 309–318. Build catalog [`src/data/questionCatalog/primary.ts`](../../../src/data/questionCatalog/primary.ts) line 143 wires only `oceanPrimary`. No question file references `oceanPreschool`.

## Per-file recommendations

| File | Q's for `oceanPreschool` | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) `oceanPrimary` (lines 648-719, 50 Q's) | 0 (different track) | **DO NOT MERGE** | `oceanPrimary` content is sunlight/twilight/midnight zones, phytoplankton, apex predators, fish gills, coral bleaching, plastic pollution. Conceptual vocabulary (photosynthesis, bioluminescence, ecosystem) is firmly mid-primary, not Pre-K. |
| [`openTriviaForKidsImported.ts`](../../../src/data/questionCatalog/openTriviaForKidsImported.ts) `oceanPrimary` block (line 347) | 0 (1 Q for sibling, none here) | **DO NOT MERGE** | The single Q ("These animals … resemble fish but drown … = Dolphins") with distractors Mackerel/Salmon/Tuna is conceptually right but the language ("resemble", "drown") is too dense for ages 3–5. Could be paraphrased into preschool if anyone authors the bank. |
| any other file | 0 | **N/A** | No other ocean content. |

**Cross-cutting flags**:
- `status: 'playable'` with zero questions.
- `oceanPrimary` generator uses templated per-distractor explanations (`"That is a plausible guess…"`) — same `DEFAULT_FLAW`-style pattern flagged on every track using `buildGeneratedBank`.
- Syllabus mapping missing from [`src/data/syllabi/index.ts`](../../../src/data/syllabi/index.ts).
- OpenTriviaForKids `oceanPrimary` distractor explanations are *also* templated (`"This choice does not match the science clue in the prompt."`) — fails the quality bar.

## Open actions (priority order)

1. **Demote to `status: 'soon'`** in the age catalog.
2. **Add syllabus mapping**: `oceanPreschool: 'preschool/ocean_adventures.md'`.
3. **Author preschool ocean bank**. 12–18 Q's covering chapters 3 (sea animals: "Which has a hard shell — crab or jellyfish?"), 5 (float/sink: "A rock and a sponge — which floats?"), 6 (weather: "What pulls boats to shore?" or simpler "Big or small wave?"), 8 (caring: "What helps the beach — leaving a bottle or putting it in a bin?"). Avoid zone names, food-web vocabulary, and any "millions of years" framing.
4. **Image schema extension** would unlock chapters 2 (beach treasure sorting) and 4 (rockpool spotting). Bundle with the SEL schema work — same render path needed.

## Estimated effort

- Demote + syllabus mapping: 15 min.
- Author 15 preschool ocean Q's: ~2.5 hours.
- Optional image-led extension (8 Q's) once schema lands: +3 hours.

**~half a day to make `oceanPreschool` real.**

## Notes for next auditor

`oceanPrimary` deserves its own audit before any uplift of `oceanPreschool`: the sibling has 50 generated questions all carrying the same templated `whyWrong` explanation, plus the one OpenTriviaForKids Q with a generic distractor template. Together that's 51 questions failing the per-distractor rule for one playable track. Either rewrite the template to call per-seed `whyWrong` strings (preferred — keeps the generator) or strip the bank to a hand-curated 10–15 Q's. The same fix applies to `dinosPrimary`, `planetsPrimary`, `bugsPrimary`, and the `scienceYearN` banks built from the same generator.
