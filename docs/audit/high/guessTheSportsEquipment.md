# Audit: guessTheSportsEquipment

**Syllabus**: [`src/data/syllabi/high/guess_the_sports_equipment.md`](../../../src/data/syllabi/high/guess_the_sports_equipment.md)
**Track id**: `guessTheSportsEquipment` (high, Sports, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheSportsEquipmentQuestions` (8)

## Coverage map

| Category | Items |
|---|---|
| Racket | Tennis racket, shuttlecock |
| Stick / disk | Hockey puck, Lacrosse stick |
| Bat | Cricket bat, Baseball glove |
| Target / club | Golf club |
| Protective | Shin guard |
| **Missing** | Helmet types (boxing/cycling/football differ), rugby ball, basketball, soccer ball, mouthguard, swim cap, gymnastics apparatus |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (sports equipment slice) | 8 | **FIX** | Stems work — equipment ID is straightforward. Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate. (2) Subtitle promises "Rackets, shuttlecocks, pucks, bats, sticks, gloves, clubs, and protective gear" but only one protective-gear Q. (3) Sport-rules context (the "Rules Context" skill tag) never actually surfaces — no Q connects equipment to *why* the sport requires that shape. (4) Generic sports SVG (ball + dashes) reused for all 8. (5) Cricket may read as obscure to US-only audiences; balance is fine (cricket + lacrosse + baseball + tennis = globally reasonable). |

## Open actions

1. Add 2 protective-gear Qs (mouthguard, helmet differences across contact sports).
2. Add a rules-context Q ("why is a shuttlecock cone-shaped?" → high drag → short court → indoor sport).
3. Per-equipment silhouettes.
