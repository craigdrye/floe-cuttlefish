# Audit: guessTheCarPart

**Syllabus**: [`src/data/syllabi/high/guess_the_car_part.md`](../../../src/data/syllabi/high/guess_the_car_part.md)
**Track id**: `guessTheCarPart`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 748
**Region**: jurisdiction-neutral (universal automotive terms; "catalytic converter" is a regulatory artifact but globally common)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Engine bay (radiator, alternator) | ✅ | Both present |
| Ignition and combustion (spark plug, piston) | ✅ | Both present |
| Braking systems (calipers, rotors) | ✅ | Caliper present; rotor named only as distractor |
| Exhaust and emissions (catalytic converter) | ✅ | Present |
| Ride and steering (shocks, tie rods) | ✅ | Both present |

Tight 1:1 coverage. Brake rotor is implicit (caliper question references it).

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheCarPart (L234–243) | 8 | **FIX** | Stems are accurate, chapters match the syllabus. **Per-distractor explanations are template-synthesized by `q()`** — every wrong answer uses the generic `"... does not match the key clue in this prompt"` line, which is the **DEFAULT_FLAW pattern**. Each wrong answer needs a real "why wrong" (e.g. *"Alternator generates electricity; it does not cool the engine"*). |

## Media wiring

Two SVG data-URL clue cards per question via `media()` with the generic `part` shape. **No real car-part photos.** Cartoon scaffolding only; not yet visual-ID grade.

## Open actions

1. Rewrite the 8 distractor-explanation triples with mechanical specificity (~45 min — automotive parts have meaningful confusions worth surfacing).
2. Source real photos (radiator core, spark plug electrode, caliper assembly, catalytic converter cutaway) for the visual-ID experience.
3. Optional: add a brake-rotor question to give the brakes chapter two anchors instead of one.

## Effort

~1.5 hours rewrite. Strong factual base; needs distractor rigor and real images.
