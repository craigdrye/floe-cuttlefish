# Audit: guessTheWeirdInstrument

**Syllabus**: [`src/data/syllabi/high/guess_the_weird_instrument.md`](../../../src/data/syllabi/high/guess_the_weird_instrument.md)
**Track id**: `guessTheWeirdInstrument`
**Tier**: high (Arts/Music discipline — the only non-tool/equipment outlier in this cluster)
**Status**: `playable` (questionCount: 10) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 652
**Region**: jurisdiction-neutral (global instruments: didgeridoo, oud, sitar, ocarina, crumhorn)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Electronic oddities (theremin, touchless control) | ✅ | Theremin present |
| Cranks and strings (hurdy-gurdy, keyed fiddles) | ✅ | Hurdy-gurdy + nyckelharpa as distractor |
| Glass and metal sounds (glass armonica, Hang drum) | ✅ | Both present |
| Wind drones and vessel flutes (didgeridoo, crumhorn, ocarina) | ✅ | Per question sample — covered |
| Lutes and resonance (oud, sitar) | ✅ | Both appear as answers/distractors |

Ten questions cover five chapters — good density.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheWeirdInstrument (L126–) | 10 | **FIX** | Stems lean into the syllabus's "do not flatten into novelty" rule — they cite construction, playing method, cultural context. Best-tonally-balanced track in the cluster. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Especially worth fixing here because the instruments have rich playing-mechanism contrasts (theremin = capacitive sensing, hurdy-gurdy = mechanical bow wheel, glass armonica = friction). |

## Media wiring

Two SVG clue cards via `media()` with the `instrument` shape (stylized lute body). **All 10 questions get a similar icon** — visually weak for instruments as different as a theremin and a didgeridoo. Audio clips would be the highest-value media upgrade here (these instruments are defined by sound).

## Open actions

1. Per-distractor rewrite emphasizing sound-production mechanism (~45 min).
2. **Highest-value media addition in the cluster:** audio clips per instrument. Visual ID alone undersells this content.
3. Optional: ensure cultural framing for oud, sitar, didgeridoo respects syllabus's anti-novelty stance.

## Effort

~1.5 hours rewrite + audio sourcing for real impact.
