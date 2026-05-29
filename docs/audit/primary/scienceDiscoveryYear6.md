# Audit: scienceDiscoveryYear6

**Syllabus**: [`src/data/syllabi/primary/science_discovery_year_6.md`](../../../src/data/syllabi/primary/science_discovery_year_6.md)
**Track id**: `scienceYear6`
**Tier**: primary
**Region**: Multi-framework (UK KS2 Y6, US NGSS G5/middle-school transition, ACARA Y6) — jurisdiction-neutral.

## Status flag
`status: 'playable'` — correct.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Classification Systems and Keys | Yes | "classifying living things" seed |
| 2. Microorganisms and Scientific Evidence | Yes | "micro-organisms" seed |
| 3. Circulatory System and Transport | Yes | circulatory system + heart function (2 seeds) |
| 4. Health, Lifestyle, and Body Function | No | **Gap**: no diet/exercise/sleep/medicine/risk items at Y6 (the Health chapter is explicitly its own chapter in the syllabus) |
| 5. Evolution, Fossils, and Deep Time | Yes | inherited variation + adaptation/natural selection + fossils as evidence (3 seeds) |
| 6. Adaptation, Inheritance, and Scientific Models | Partial | adaptation seed exists but no Darwin/Wallace/model-limitation item |
| 7. Light, Sight, and Shadows | Yes | light travelling in straight lines + seeing reflected light (2 seeds) |
| 8. Electricity, Components, and System Troubleshooting | Yes | "cell voltage and component output" seed |

10 seeds x 5 frames = 50 questions. Chapter 4 (Health/Lifestyle/Risk) missing entirely — significant because it's the year's most secondary-transition-relevant content.

## DEFAULT_FLAW flag

Same boilerplate distractor mapping. Helper-level fix.

## Cartoonish distractors flag

Year 6 distractor mix:
- Real Y6 misconceptions: "All offspring are identical copies of both parents" (genetics intuition), "Natural selection means the strongest animal always wins a race" (Lamarckian/social-Darwinism confusion), "We see all objects because our eyes shine powerful beams on them" (extramission — genuinely persistent misconception even in adults).
- Cartoon filler: "The circulatory system breaks rocks into soil," "The circulatory system carries electricity to light bulbs," "The heart stores all memories," "The heart makes bones longer," "Light always travels in curly loops," "Voltage only changes the colour of wires," "Fossils show what every future animal will look like."

Y6 students (10-11) are about to start secondary science — they will read these cartoon distractors as condescending. May 2026 flag applies. The "extramission" item is a genuinely good distractor and a useful template for what the others should be.

## Per-file recommendations

| File | Y6 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (`scienceYear6`) | 50 | **FIX (heavy)** | Solid Y6 topic coverage; the extramission item shows the bank *can* produce serious misconception distractors. Boilerplate per-distractor lines. Cartoon filler distractors. Health chapter missing entirely. Darwin/Wallace not named. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (`topUp('scienceYear6')` + CK-12 chemistry/physics/electricity) | wrap | **KEEP** | Aggregator-only. CK-12 supplement covers chemistry/electricity well. |

No other feeders.

## Open actions (priority order)

1. **Helper fix** (shared): per-distractor explanations.
2. **Author Chapter 4 (Health, Lifestyle, Risk) seeds** — diet, sleep, medicine vs drug, evidence vs correlation. This is the year's most secondary-relevant chapter and is missing entirely.
3. **Author one Darwin/Wallace seed** for Chapter 6 (the syllabus names them explicitly).
4. **Replace cartoon distractors** ("circulatory system breaks rocks" → "the circulatory system only carries oxygen, not waste"; "heart stores memories" → "the heart pumps in pulses controlled by your conscious thought"). Use the extramission item as the voice template.
5. **Drop frame count to 1-2.**

## Estimated effort

- Helper fix: shared
- Distractor rewriting for 10 seeds: ~4 hours
- Ch 4 new seeds: ~3 hours
- Darwin/Wallace seed: ~30 min
- Frame reduction: ~30 min

**~8 hours.**

## Notes for next auditor

Y6 is the secondary-transition year and the syllabus is explicit about preparing for it ("readiness for secondary science"). The current bank teaches some of this well (extramission, natural selection misconception about strength) but mixes it with absurdity that undermines the seriousness. The "evolution and inheritance" cluster (Chapter 5 + 6) is well-covered topic-wise but the bank never lets a student practise distinguishing inherited from acquired traits in a non-cartoon way. Health chapter is the biggest content gap in the cluster — and ironically the most personally relevant to a Y6 student. Prioritise.
