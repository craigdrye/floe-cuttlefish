# Audit: guessThePlumbingPart

**Syllabus**: [`src/data/syllabi/high/guess_the_plumbing_part.md`](../../../src/data/syllabi/high/guess_the_plumbing_part.md)
**Track id**: `guessThePlumbingPart`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 724
**Region**: **soft US lean.** "P-trap", "wax ring", "flapper" are common globally but "tee fitting" / "shutoff valve" wording is US-flavored (UK: "isolating valve"). Generally close enough to neutral; minor terminology bridging would help.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Pipe fittings (elbows, tees) | ✅ | Both present |
| Under-sink (P-traps, cleanouts) | ✅ | Both present |
| Valves and shutoffs | ✅ | Shutoff valve present |
| Toilet parts (wax ring, flapper) | ✅ | Both present |
| Faucet parts (aerator, screens) | ✅ | Aerator present |

Perfect 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessThePlumbingPart (L212–220) | 8 | **FIX** | Stems are accurate, well-paced from beginner (elbow) to expert (cleanout); chapter names match the syllabus. Lesson lines maintain the "literacy not DIY" stance. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. The P-trap (water-seal vs trap blockage) is the single most teachable item and currently has only a generic distractor reason. |

## Media wiring

Two SVG clue cards via `media()` with the generic `part` shape. **No real plumbing photos.** P-trap and wax ring are highly visually distinctive — real images would help significantly.

## Open actions

1. Per-distractor rewrite (~30 min) — especially P-trap (water seal vs venting), wax ring (toilet-to-flange seal vs flush valve), aerator (flow + grit catch vs cartridge).
2. Optional: add terminology bridging or `region: 'US'` tag for "shutoff valve" / "tee".
3. Source real photos for P-trap, wax ring, flapper.

## Effort

~1 hour rewrite.
