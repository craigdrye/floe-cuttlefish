# Audit: guessTheThing

**Syllabus**: [`src/data/syllabi/high/guess_the_thing.md`](../../../src/data/syllabi/high/guess_the_thing.md)
**Track id**: `guessTheThing` (high, "Visual slot-machine sampler", `status: 'playable'`, claims 519 Qs)
**Source file**: aggregator in [`src/data/questionCatalog/highGenerated.ts`](../../../src/data/questionCatalog/highGenerated.ts) line ~1457 — spreads every `guessThe*` bank into one mega-track.

## Coverage map

This track is the **superset aggregator**. It re-exports content from every other Guess-the-X bank: nature, culture, machines, medicine, memes, characters, figures. No content of its own; coverage is the union of all 50+ tracks already audited / to be audited.

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `highGenerated.ts` `guessTheThing` aggregator | ~519 | **KEEP-as-aggregator** | The bucket itself is a derived index, not a content file. Don't edit it directly — every issue surfaced by the 20 sibling audits propagates here automatically. Fix the upstream banks and `guessTheThing` improves for free. |

## Open actions

1. Do not author into this aggregator. Fix upstream banks per their individual audits.
2. Once upstream DEFAULT_FLAW-equivalent boilerplate is replaced and media is properly wired, the 519-Q sampler becomes the cluster's flagship.
3. Verify `questionCount: 519` on the track stays in sync after upstream cuts — currently a hand-maintained number that will drift.

## Estimated effort
Zero direct effort. Inherits from the cluster.
