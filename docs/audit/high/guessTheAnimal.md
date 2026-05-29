# Audit: guessTheAnimal

**Syllabus**: [`src/data/syllabi/high/guess_the_animal.md`](../../../src/data/syllabi/high/guess_the_animal.md)
**Track id**: `guessTheAnimal` (high.ts:1276) - status `playable`, questionCount 12
**Tier**: high (Visual ID family)
**Region**: jurisdiction-neutral

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Mammals (fox, deer, elephant, giraffe, kangaroo, bear, rabbit, bat, dolphin) | Yes (9/9) | Full coverage |
| Reptiles (snake, turtle) | Yes (2/2) | Full |
| Amphibians (frog) | Yes (1/1) | Full |

## Per-file recommendations

| File | Q count | Bucket | Reason |
|---|---|---|---|
| [`fieldIdentificationQuestions.ts`](../../../src/data/questionCatalog/fieldIdentificationQuestions.ts) -> `guessTheAnimalQuestions` | 12 | **KEEP** | Hand-authored per-distractor explanations with nudges. Each wrong answer carries a distinct reason and a "look at body shape first" style hint. Difficulty rotates kids/adults/experts via `difficultyFor`. Briefing + mentorHint scaffolding present. |

## Quality notes

- No DEFAULT_FLAW: each distractor has a specific `[label, whyWrong, nudge]` triple (model authoring shape per `highBuilders.ts`).
- Media: per-question programmatic `SpecimenVisual` (kind/bg/body/accent/pattern) -> generated cartoon, plus optional pre-rendered PNG for rock specimens. **Animals do not currently have pre-rendered PNGs**; they rely on the generic generated specimen card. Acceptable as scaffolding but a quality lift opportunity (the rocks track shows the bar with `/assets/guess-the-thing/rocks/*-cartoon.png`).
- Voice: sober field-guide; matches a high-school visual-ID audience.

## Open actions

1. **Add pre-rendered cartoon PNGs** for each of the 12 animals to match the rock track's media quality (lookup table similar to `generatedSpecimenMediaById`).
2. No deletions or merges required.

## Estimated effort

~2 hours to commission/wire 12 PNGs. Content itself is launch-ready.
