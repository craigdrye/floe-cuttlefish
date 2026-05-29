# Audit: guessTheFossil

**Syllabus**: [`src/data/syllabi/high/guess_the_fossil.md`](../../../src/data/syllabi/high/guess_the_fossil.md)
**Track id**: `guessTheFossil` (high.ts:1228) - status `playable`, questionCount 15
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Classic fossils (trilobite, ammonite, brachiopod) | Yes | All three |
| Trace fossils (footprints) | Yes | Present + meta question on body-vs-trace distinction |
| Plant fossils (leaf imprint, petrified wood) | Yes | Both present |
| Teeth + bones (shark tooth, dinosaur bone) | Yes | Both present |
| Coprolites (the "deliberately generous" unit) | Yes | **5 dedicated coprolite questions** including detective/carnivore vs herbivore/rock-lookalike |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`fieldIdentificationQuestions.ts`](../../../src/data/questionCatalog/fieldIdentificationQuestions.ts) -> `guessTheFossilQuestions` | 15 | **KEEP** | Per-distractor explanations are specific ("Ammonites are coiled shells, not segmented arthropods"). The coprolite unit follows syllabus intent: funny but scientifically serious. Chapter names map cleanly. |

## Quality notes

- No DEFAULT_FLAW. Triples are hand-authored.
- Media: programmatic `fossil` SpecimenVisual; no pre-rendered PNGs.
- Voice: matches the syllabus's playful-but-rigorous tone. The "funny but scientifically useful" framing on coprolites is honoured.

## Open actions

1. Add pre-rendered cartoon PNGs (rock-track parity) - especially valuable for distinguishing trilobite segmentation vs ammonite spiral vs brachiopod valves.
2. Otherwise launch-ready - **second-strongest track in the cluster after rocks**.

## Estimated effort

~3 hours media wiring.
