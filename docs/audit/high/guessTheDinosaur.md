# Audit: guessTheDinosaur

**Syllabus**: [`src/data/syllabi/high/guess_the_dinosaur.md`](../../../src/data/syllabi/high/guess_the_dinosaur.md)
**Track id**: `guessTheDinosaur` (high.ts:1096) - status `playable`, questionCount 8
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral (paleontology is universal)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Classic herbivores (Stegosaurus, Triceratops, Brachiosaurus) | Yes | All three present |
| Armor & display (Ankylosaurus, Parasaurolophus) | Yes | Both present |
| Large predators (T. rex, Spinosaurus) | Yes | Both present |
| Small theropods (Velociraptor) | Yes | Present (with correct "feathered" framing) |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) -> `guessTheDinosaurQuestions` | 8 | **FIX (DEFAULT_FLAW)** | Same family-wide templated distractors. Content is paleontologically modern (Velociraptor framed as feathered dromaeosaur; Spinosaurus described by sail not movie cliches). The `ruin` SVG shape is a poor visual proxy for a dinosaur. |

## Quality notes

- **DEFAULT_FLAW present**.
- Media: reuses the `ruin` SVG icon (no dinosaur shape exists in the bonus svg shape vocabulary). **Visual mismatch is the biggest issue** for a track whose entire pedagogy is "use body plan rather than movie memory alone".
- Lesson copy avoids common errors (no "T. rex tail dragging", no scaly raptors).

## Open actions

1. **Add a `dino` shape to the bonus SVG icon vocabulary** (or commission per-species PNGs - this is the highest-yield media fix in the cluster since current `ruin` icons actively mislead).
2. Rewrite per-distractor explanations using fossil-form contrasts (plates vs frill vs sail vs club).
3. No region tagging needed.

## Estimated effort

~3 hours (SVG addition + distractor rewrite).
