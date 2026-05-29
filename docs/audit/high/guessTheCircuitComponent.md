# Audit: guessTheCircuitComponent

**Syllabus**: [`src/data/syllabi/high/guess_the_circuit_component.md`](../../../src/data/syllabi/high/guess_the_circuit_component.md)
**Track id**: `guessTheCircuitComponent`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1060
**Region**: jurisdiction-neutral (universal electronics)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Passive components (resistors, capacitors, inductors) | ✅ | All three present |
| One-way and light-emitting (diodes, LEDs) | ✅ | Both present |
| Switching and amplification (transistors) | ✅ | Transistor present |
| Protection and control (fuses, potentiometers) | ✅ | Both present |

Perfect 1:1 syllabus coverage.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheCircuitComponent (L520–528) | 8 | **FIX** | Stems are accurate and physical-clue-driven (color bands, coil shape, three legs); chapter names match the syllabus. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Genuinely teachable contrasts wasted in current distractors: resistor (passive, dissipative) vs diode (one-way) vs LED (one-way + light); capacitor (stores charge) vs inductor (stores magnetic energy). |

## Media wiring

Two SVG clue cards via `media()` with the generic `part` shape. **No real component photos or schematic symbols.** Schematic symbols would be a particularly natural addition for this track and would deepen the electronics vocabulary the syllabus targets.

## Open actions

1. Per-distractor rewrite (~30 min — passive vs active, charge vs magnetic energy are textbook contrasts).
2. Add schematic symbols as a second media slot — the "field clue" position is already structured for it.
3. Source real component photos (especially banded resistor for color-code teaching).

## Effort

~1 hour rewrite.
