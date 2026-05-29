# Audit: guessTheFlag

**Syllabus**: [`src/data/syllabi/high/guess_the_flag.md`](../../../src/data/syllabi/high/guess_the_flag.md)
**Track id**: `guessTheFlag` (high, Geography, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheFlagQuestions` (8)

## Coverage map

| Syllabus chapter | Covered |
|---|---|
| Nordic crosses (Denmark, Sweden) | YES — both |
| Central symbols (Canada, Japan) | YES — both |
| Tricolors (France, Italy) | YES — both |
| Stars/stripes/crescents | USA + Turkey |
| Confusable pairs (Romania/Chad, Indonesia/Monaco/Poland, Australia/NZ) | **Not tested** — the actual *flag literacy* challenge |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (flag slice) | 8 | **FIX** | One Q per chapter, perfect syllabus mirror — but only 8 Qs total and no confusable-pair Qs where flag literacy actually lives. Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate. (2) Media is one generic "flag" SVG (red rectangle on pole with stripes + circle) reused for every Q — for a *flag* track this is the central failing; visual-ID is text-only. (3) Syllabus key skill "compare similar flags carefully" is unaddressed. |

## Open actions

1. Wire per-flag SVGs or real flag emoji/imagery — non-negotiable for a flag track.
2. Add 4-6 confusable-pair Qs (Indonesia vs Monaco vs Poland; Romania vs Chad; Australia vs NZ; Senegal vs Mali vs Guinea).
3. Per-distractor explanations grounded in design ("Norway has a *blue* cross within a red field — not yellow").
