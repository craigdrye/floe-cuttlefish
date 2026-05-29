# Audit: scienceDiscoveryYear4

**Syllabus**: [`src/data/syllabi/primary/science_discovery_year_4.md`](../../../src/data/syllabi/primary/science_discovery_year_4.md)
**Track id**: `scienceYear4`
**Tier**: primary
**Region**: Multi-framework (UK KS2 Y4, US NGSS 3-5, ACARA Y4) — jurisdiction-neutral.

## Status flag
`status: 'playable'` — correct.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Classification and Living Things | Yes | "classification keys" seed |
| 2. Habitats, Food Chains, and Environmental Change | Yes | environmental change + producers in food chains (2 seeds) |
| 3. Teeth, Digestion, and Healthy Choices | Yes | digestive system + types of teeth (2 seeds) |
| 4. States of Matter and Particle Models | Yes | solids/liquids/gases + evaporation/condensation (2 seeds) |
| 5. The Water Cycle and Weather Data | Partial | "evaporation and condensation" covers the change-of-state; no full water-cycle item, no weather-data items |
| 6. Sound, Vibrations, Pitch, and Volume | Yes | vibrations + pitch and volume (2 seeds) |
| 7. Electricity and Simple Circuits | Yes | "complete circuits" seed |
| 8. Data Detectives and Fair Investigations | No | **Gap**: no items on repeating measurements, choosing graphs, anomalies |

10 seeds x 5 frames = 50 questions. Best chapter coverage in the science cluster — only Chapter 8 missing entirely.

## DEFAULT_FLAW flag

Same boilerplate distractor mapping. Fails per-distractor bar. Helper-level fix applies.

## Cartoonish distractors flag

Year 4 distractors are mostly defensible: "Molars are only for smelling food," "All metals are equally magnetic" (real misconceptions). Cartoon filler: "The digestive system makes shadows," "The digestive system pumps electricity through wires," "The digestive system stores memories," "Sound is the same thing as smell," "Volume tells what colour a sound is." These are not misconceptions a Year 4 child holds — they're absurdity distractors. The May 2026 flag bites moderately.

## Per-file recommendations

| File | Y4 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (`scienceYear4`) | 50 | **FIX** | Best concept coverage in the science cluster. Boilerplate distractors + cartoon filler distractors. Chapter 8 (fair investigations, anomalies, graph choice) missing. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (`topUp('scienceYear4')` — no extra ck12 filter) | wrap | **KEEP** | Aggregator-only. Worth noting: unlike Y1/Y3/Y5, this track has no CK-12 supplement layered on. |

No OpenTrivia entry. No other feeders.

## Open actions (priority order)

1. **Helper fix** (shared): per-distractor explanations.
2. **Author Chapter 8 (Data Detectives) seeds** — anomaly identification, repeated measurements, graph-type selection. These are NGSS-emphasised skills the bank skips entirely at Y4.
3. **Add a proper water cycle seed** for Ch 5 (evaporation/condensation alone doesn't cover precipitation/collection/cycle).
4. **Replace cartoon distractors** ("digestion makes shadows", "sound is smell") with real Y4 misconceptions ("digestion only happens in the stomach," "all sound needs air to travel" — partly true but invites discussion).
5. **Drop frame count to 1-2.**
6. **Consider a CK-12 supplement** like Y1/Y3/Y5 have — Y4 is the only science year without one.

## Estimated effort

- Helper fix: shared
- Distractor authoring for 10 seeds: ~3 hours
- Ch 8 + water-cycle seeds: ~3 hours
- Frame reduction + CK-12 wiring decision: ~1 hour

**~7 hours.**

## Notes for next auditor

Year 4 has the best raw chapter coverage and the most teaching-defensible concept seeds (teeth/digestion, particles, sound, circuits all hit core KS2). The remaining work is mostly polish: the distractor schema fix lifts quality immediately, Chapter 8 fills the one real gap, and the cartoon distractors are easy individual rewrites. This is the closest track in the science cluster to passing the KEEP bar — make this the first one to graduate.
