# Audit: scienceDiscoveryYear5

**Syllabus**: [`src/data/syllabi/primary/science_discovery_year_5.md`](../../../src/data/syllabi/primary/science_discovery_year_5.md)
**Track id**: `scienceYear5`
**Tier**: primary
**Region**: Multi-framework (UK KS2 Y5, US NGSS G5, ACARA Y5) — jurisdiction-neutral.

## Status flag
`status: 'playable'` — correct. This track has the most extensive feeder wiring in [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (CK-12 human-body/cells/genetics filter plus `primaryScienceAssessmentGrade5Questions` plus several `rawCollectionMappings.ts` targets).

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Working Scientifically with Fair Tests | No | **Gap**: no fair-test/variable/anomaly items in `scienceYear5` seeds (Y4 covers fair tests, Y5 should deepen) |
| 2. Life Cycles of Plants and Animals | Yes | mammal life cycles + complete metamorphosis (2 seeds) |
| 3. Reproduction in Plants and Animals | Yes | "plant reproduction by runners and bulbs" seed |
| 4. Human Development and Healthy Change | Yes | "human development stages" seed |
| 5. Properties and Uses of Materials | Yes | (covered via solubility seed under Ch 6 bucket) |
| 6. Solutions, Mixtures, and Separation | Yes | solubility + separating mixtures (2 seeds) |
| 7. Reversible and Irreversible Changes | Yes | "reversible and irreversible changes" seed |
| 8. Earth, Space, Forces, and Mechanisms | Yes | Earth rotation + planet orbits + air/water resistance (3 seeds) |

10 seeds x 5 frames = 50 questions. Only Chapter 1 (working scientifically) missing — best topic coverage in the science cluster.

## DEFAULT_FLAW flag

Same boilerplate distractor mapping across the file. Helper-level fix applies.

## Cartoonish distractors flag

Year 5 mixes real misconceptions with cartoon filler:
- Real Y5 misconceptions: "Day and night happen because the Sun turns off" (heliocentric confusion), "Burning paper is easy to turn back into the same paper" (reversibility intuition), "Planets travel in straight lines away from the Sun forever" (orbit misconception).
- Cartoon filler: "Most mammals begin life as caterpillars," "Most mammals split in half to reproduce," "Old age happens before infancy," "Filtering is used to separate planets," "Evaporating is only used to cut paper," "Complete metamorphosis is the Moon changing shape," "Air resistance pulls objects toward magnets," "Water resistance only happens in deserts."

Year 5 children (ages 9-10) are old enough to find these distractors insulting. The May 2026 cartoon-distractor flag bites hard here.

## Per-file recommendations

| File | Y5 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (`scienceYear5`) | 50 | **FIX (heavy)** | Strong topic coverage but worst cartoon-distractor problem in the cluster. Boilerplate per-distractor lines. Chapter 1 missing. |
| [`primaryScienceAssessmentImported.ts`](../../../src/data/questionCatalog/primaryScienceAssessmentImported.ts) (Grade 5 portion fed via primary.ts) | unknown count | **AUDIT SEPARATELY** | Imported assessment items — likely the kind of "stripped-context imported source" the audit framework flags for likely deletion. Sample before judging. |
| [`rawCollectionMappings.ts`](../../../src/data/questionCatalog/rawCollectionMappings.ts) (multiple `scienceYear5` targets) | mapping config | **KEEP** | Mapping config, not question content. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (`topUp` + CK-12 human-body/cells/genetics + assessment Grade 5) | wrap | **KEEP** | Aggregator-only. |

## Open actions (priority order)

1. **Helper fix** (shared with all 12 tracks): per-distractor explanations.
2. **Replace cartoon distractors** with age-appropriate misconceptions. Y5 students are old enough that "mammals begin as caterpillars" reads as condescending; replace with "all mammals lay eggs" (genuine confusion conflating monotremes with mammal-general).
3. **Author Chapter 1 (Working Scientifically) seeds** — independent/dependent/control variables, anomaly identification.
4. **Audit `primaryScienceAssessmentImported.ts`** for the Y5 portion specifically.
5. **Drop frame count to 1-2.**

## Estimated effort

- Helper fix: shared
- Cartoon-distractor replacement for 10 seeds: ~4 hours (more work because more cartoons here)
- Ch 1 new seeds: ~2 hours
- Imported assessment audit: ~2 hours
- Frame reduction: ~30 min

**~9 hours.** Most work in the science cluster because of the cartoon-distractor density.

## Notes for next auditor

Y5 students bridge primary and secondary — they're old enough to notice when a question is dumbed down. The cartoon distractors are the most user-visible quality problem in this track because the topic coverage is otherwise strong. The Earth/Space chapter is particularly close to KEEP-quality (day/night, orbits, air resistance are all real KS2 Y5 concepts handled correctly). Fix the helper, rewrite ~8 cartoon distractors, and Y5 graduates.
