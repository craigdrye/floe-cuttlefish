# Audit: scienceDiscoveryYear2

**Syllabus**: [`src/data/syllabi/primary/science_discovery_year_2.md`](../../../src/data/syllabi/primary/science_discovery_year_2.md)
**Track id**: `scienceYear2`
**Tier**: primary
**Region**: Multi-framework (UK KS1 Y2, US NGSS K-2, ACARA Y2) — jurisdiction-neutral content.

## Status flag
`status: 'playable'` — correct.

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Living, Dead, and Never Alive | Yes | seed exists |
| 2. Habitats and Microhabitats | Yes | habitats + micro-habitats + simple food chains (3 seeds) |
| 3. Plant Growth and Life Cycles | Yes | seeds/bulbs + roots absorbing water (2 seeds) |
| 4. Animals, Offspring, and Health | Yes | animal life cycles + healthy human habits (2 seeds) |
| 5. Materials for a Purpose | Yes | "choosing suitable materials" seed |
| 6. Changing Materials and Simple Experiments | No | **Gap**: no bend/twist/stretch/squash, no melt/freeze, no fair-test introduction at Year 2 |
| 7. Earth, Sky, and Weather Data | No | **Gap**: no Sun/Moon, no shadows, no weather-data items at Year 2 |
| 8. Science in Our Local Place | Partial | "recycling materials" seed sits under Uses of Everyday Materials, not local-place fieldwork |

10 seeds x 5 frames = 50 questions. Three syllabus chapters uncovered or thinly covered.

## DEFAULT_FLAW flag

Same boilerplate distractor explanation as all other tracks in this file: `"That is a plausible guess, but it does not match the evidence for ${seed.concept}."` followed by `"Remember: ${seed.correct}"`. **Fails the per-distractor quality bar.** See `scienceDiscoveryYear1.md` for the helper-level fix.

## Cartoonish distractors flag

Year 2 distractors are mostly defensible misconception bait ("a toy car is dead because it stops moving" is a real Year 2 confusion). But: "A habitat is the same as a toy box," "A micro-habitat is a whole planet," "A life cycle is a bicycle for animals," "Bulbs are only electric lights," "Recycling means hiding rubbish under soil" — these are puns and silliness, not misconceptions. The May 2026 cartoonish-distractor flag bites lightly here.

## Per-file recommendations

| File | Y2 Q's | Bucket | Reason |
|---|---|---|---|
| [`primaryGeneratedScienceDiscovery.ts`](../../../src/data/questionCatalog/primaryGeneratedScienceDiscovery.ts) (`scienceYear2`) | 50 (10 seeds x 5 frames) | **FIX (heavy)** | Concepts are solid Year 2 KS1 content. Boilerplate distractor explanations fail the bar. Several distractors are pun-silly rather than misconception-bait. Three chapters uncovered. |
| [`primary.ts`](../../../src/data/questionCatalog/primary.ts) (also pulls `ck12` for matter/forces/magnets) | filtered | **KEEP** | Aggregator-only. The CK-12 supplement likely covers forces (helpful since the seed bank skips them at Y2). |

No other files feed `scienceYear2` (no OpenTrivia for-kids entry exists for this key).

## Open actions (priority order)

1. **Helper fix** (shared with all 12 tracks in `primaryGeneratedScienceDiscovery.ts`): require per-distractor explanations.
2. **Rewrite the pun-style distractors** ("habitat = toy box", "bulbs = electric lights only", "recycling = hiding rubbish") as genuine misconceptions. E.g. for habitat: "A habitat is wherever an animal happens to walk past once" — that's an actual Year 2 confusion between habitat and incidental location.
3. **Add seeds for Chapter 6 (Changing Materials, fair tests), Chapter 7 (Sun/Moon/shadows/weather data), and stronger Chapter 8 (local fieldwork).** ~6-8 new seeds.
4. **Drop frame count to 1-2 per seed.**

## Estimated effort

- Helper fix: shared (~1 hour)
- Per-seed distractor authoring for 10 existing seeds: ~3 hours
- 6-8 new seeds: ~4 hours
- Pun cleanup: included in distractor authoring

**~8 hours.**

## Notes for next auditor

Year 2 introduces fair-test thinking in the syllabus but not in the bank — the syllabus says "How do we make a test fair enough to trust?" should be a Year 2 question. The current bank skips this because forces/materials experiments are absent. The missing Earth/Sky/shadows chapter is conspicuous given how popular space content is — likely an artefact of `dinosPrimary` and `planetsPrimary` siphoning the space topics into separate tracks rather than feeding `scienceYear2`.
