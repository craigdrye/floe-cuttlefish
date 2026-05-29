# Audit: guessTheWeatherInstrument

**Syllabus**: [`src/data/syllabi/high/guess_the_weather_instrument.md`](../../../src/data/syllabi/high/guess_the_weather_instrument.md)
**Track id**: `guessTheWeatherInstrument`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 1024
**Region**: jurisdiction-neutral (uses Celsius/Fahrenheit/Kelvin all in one lesson line — good)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Temperature, pressure, humidity | ✅ | Thermometer + barometer + hygrometer |
| Wind speed and direction | ✅ | Anemometer + wind vane |
| Rainfall and precipitation | ✅ | Rain gauge |
| Solar radiation and cloud-base height | ✅ | Pyranometer + ceilometer |

Perfect 1:1 syllabus coverage. Nice progression from familiar to specialist.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheWeatherInstrument (L487–496) | 8 | **FIX** | Stems are accurate and pitched well from beginner (thermometer) to expert (ceilometer); chapter names match the syllabus. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Strong opportunities: anemometer vs wind vane (speed vs direction — most common confusion), hygrometer vs psychrometer. |

## Media wiring

Two SVG clue cards via `media()` mixing `part` and `lab` shapes — neither resembles a thermometer or weather vane. **No real meteorological-instrument photos.** Real images here would also be category-defining (most people have never seen a ceilometer).

## Open actions

1. Per-distractor rewrite (~30 min).
2. Source real photos especially for pyranometer and ceilometer (visually unfamiliar to most students).

## Effort

~1 hour rewrite.
