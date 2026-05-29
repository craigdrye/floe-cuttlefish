# Audit: guessTheTrainPart

**Syllabus**: [`src/data/syllabi/high/guess_the_train_part.md`](../../../src/data/syllabi/high/guess_the_train_part.md)
**Track id**: `guessTheTrainPart`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 760
**Region**: jurisdiction-neutral. Uses the dual term "Sleepers / ties" — good UK/US bridging.

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Track basics (rails, sleepers, ballast) | ✅ | All three present |
| Rolling stock (bogies, couplers) | ✅ | Both present |
| Electric trains (pantographs) | ✅ | Pantograph + third rail as distractor |
| Track routing (switch points) | ✅ | Switch points present |
| Operations (signals) | ✅ | Signal question present |

Excellent 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheTrainPart (L245–254) | 8 | **FIX** | Stems are crisp and accurate, chapter taxonomy matches the syllabus, UK/US terminology bridged. **Per-distractor explanations are template-synthesized by `q()`** — generic `"... does not match the key clue"` for every wrong answer. **DEFAULT_FLAW pattern**. Rewrites should distinguish e.g. ballast (drainage/load) vs sleepers (gauge) explicitly. |

## Media wiring

Two SVG clue cards per question via the generic `part` shape. **No real rail photos** (track sections, bogie trucks, pantograph close-ups). Acceptable scaffolding only.

## Open actions

1. Rewrite the 8 distractor triples with specific contrasts (rail vs sleeper vs ballast functions; bogie vs coupler vs buffer) (~30 min).
2. Source real images for pantograph and bogie at minimum — they are the least familiar to general audiences.
3. Optional: add a "third rail vs overhead" expert question.

## Effort

~1 hour rewrite. Content is strong; only distractor explanations and real media need attention.
