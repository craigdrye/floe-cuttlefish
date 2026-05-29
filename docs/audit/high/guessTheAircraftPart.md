# Audit: guessTheAircraftPart

**Syllabus**: [`src/data/syllabi/high/guess_the_aircraft_part.md`](../../../src/data/syllabi/high/guess_the_aircraft_part.md)
**Track id**: `guessTheAircraftPart`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1036
**Region**: jurisdiction-neutral (universal aviation vocabulary)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Lift and main structure (wings, fuselage) | ✅ | Wing + fuselage questions |
| Control surfaces (rudder, aileron, elevator, flaps) | ✅ | One question each |
| Ground operations (landing gear) | ✅ | Landing gear question |
| Propulsion (turbofan) | ✅ | Turbofan vs piston/ramjet/rocket |

Tight 1:1 syllabus coverage with no gaps and no padding.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheAircraftPart (L498–507) | 8 | **FIX** | Stems are crisp, answer keys accurate, chapter names match syllabus. **Per-distractor explanations are template-synthesized** by the file-wide `q()` helper — every wrong answer reads `"<label> is a plausible distractor, but it does not match the key clue in this prompt."` This is functionally a **DEFAULT_FLAW pattern** even though no constant is named. Replace with per-distractor "why wrong" (e.g. *"Rudder controls yaw, not lift"*). |

## Media wiring

Two `clueSvg` data-URL images per question via `media()` — playful "cute clue" + grey "literal clue" cards rendered from a generic `part` shape. **No real aircraft photos or diagrams.** Adequate for prototype but weak as visual-ID training; consider real silhouettes or labeled diagrams.

## Open actions

1. Replace `q()` template wrong-reasons with hand-authored per-distractor explanations (~30 min).
2. Plan real-photo or diagram media pass for visual-ID credibility.
3. Optional: add 1–2 "experts" questions on winglets, slats, or APU to deepen propulsion/control chapters.

## Effort

~1 hour rewrite. Content is sound; only the distractor explanations need work.
