# Audit: mythologyAndMonsters

**Syllabus**: [`src/data/syllabi/high/mythology_and_monsters.md`](../../../src/data/syllabi/high/mythology_and_monsters.md)
**Track id**: TWO duplicates exist — `mythologyMonsters` (high.ts line 297, family `highFun`) AND `mythologyAndMonsters` (high.ts line 1983, generic humanities). The syllabus declares `mythologyAndMonsters`.
**Tier**: high
**Region**: Comparative / cross-cultural (no single jurisdiction)

## Coverage map (syllabus → questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. What Myths Do | partial | "Myth pattern" in highFun (myths explain via symbolic stories) — single item. |
| 2. Heroes, Quests, Dangerous Journeys | minimal | Trickster move in highFun; no hero's journey beats, no monomyth structure. |
| 3. Classical Myth: Greece and Rome | minimal | "Symbol reading" with dragon = obstacle; no Olympian-specific item, no Medusa/Icarus/Achilles/Odysseus. |
| 4. Norse Worlds and Endings | none | No Yggdrasil, Aesir/Vanir, Loki, Ragnarok. |
| 5. Egypt, Mesopotamia, Afterlife | none | No Ma'at, no weighing-of-the-heart, no flood narratives. |
| 6. Mesoamerican, South Asian, East Asian, Indigenous | none | Major gap given the syllabus's explicit anti-Eurocentric framing. |
| 7. Monsters and Social Fear | partial | "Monster Reef: hero problem" (inner fears made visible) — generic framing only. |
| 8. Retelling, Adaptation, Ethical Storytelling | none | No adaptation/appropriation/feminist-retelling items. |

**Critical finding**: this track has **two parallel duplicate ids** (`mythologyMonsters` and `mythologyAndMonsters`) and **4 dedicated questions** total — in `highFun.ts` lines 75-108, routed to `mythologyMonsters`. The duplicate `mythologyAndMonsters` track (in the generic humanities block) gets only the `historyBlueprints()` fallback (press freedom, veto override, push-pull migration) — i.e., **US civics nonsense for a comparative mythology course**.

**May 2026 rubric finding: does NOT apply** — not enough content for rubric vs content distinction. But the fallback wiring produces *off-topic* content, which is worse than rubric drift.

**Voice match**: the 4 highFun items have the right exploratory tone ("Why are monsters useful in stories? They make inner fears visible through outer conflict"). Use as voice template, but they only cover 1.5 of the 8 chapters.

**Chapter taxonomy mismatch**: highFun items use ad-hoc chapters ("Fun"). Syllabus has 8 explicit chapters by tradition + theme.

## Per-file recommendations

| File | Mythology Q's | Bucket | Reason |
|---|---|---|---|
| [`highFun.ts`](../../../src/data/questionCatalog/highFun.ts) (lines 75-108) | 4 | **KEEP → expand to canonical bank** | Right voice, right tone, plausible distractors. Way too few. Use as the seed for a new dedicated bank. |
| `highGenerated` → `historyBlueprints()` fallback (hits the `mythologyAndMonsters` duplicate track) | ~50 generated | **DELETE for this track** | Press-freedom / veto-override / push-pull-migration templates have zero relationship to mythology. The duplicate track is currently serving US civics content under a mythology course label. Severe routing bug. |
| `openTriviaForKidsImported.ts` | unknown | **CHECK** | May contain age-appropriate myth recall items reusable here. |
| `openTriviaLiteratureCanonImported.ts` / `…CanonicalOpeningsShakespeareImported.ts` | unknown | **CHECK** | Mythology-adjacent literary canon (Homer, Ovid). Possible cross-routing. |
| `guessTheLiteraryCharacterQuestions` (via field-id) | unknown | **CHECK** | If it includes Odysseus, Beowulf, etc — cross-route a subset. |

**Net effect**: 4 seed items → ~50 dedicated bank items per the 8-chapter comparative spine.

## Open actions (priority order)

1. **Resolve duplicate track ids**: pick `mythologyAndMonsters` (matches syllabus filename and id field). DELETE or alias `mythologyMonsters` to it. Update `highFun.ts` and `index.ts` routing accordingly.
2. **Stop the `historyBlueprints` fallback** for whichever id survives — the routing currently produces nonsense.
3. **Author a dedicated `mythologyAndMonstersWorkoutGenerated.ts`** of ~50 items across the 8 chapters. Voice template: existing 4 highFun items. Cover specific named figures: Medusa, Icarus, Loki, Anansi, Coyote, Quetzalcoatl, weighing-of-the-heart, descent narratives, monster archetypes from at least 5 traditions.
4. **Tag culturally-sensitive content** carefully (Chapter 6 syllabus explicitly cautions about retelling sacred stories outside their communities) — include nudges that model respectful framing.
5. **Either flip `status: 'soon'`** on the canonical id until content lands, or front-load authoring.
6. **Cross-route candidates**: scan `openTriviaForKids` and `openTriviaLiteratureCanon` for myth-adjacent items.

## Estimated effort

- Duplicate-id resolution: ~1 hour.
- New question bank authoring: ~12 hours (50 items × 15 min, with cultural sensitivity guardrails).
- Cross-route audit: ~1.5 hours.

**~2 working days from scratch.**

## Notes for next auditor

The duplicate track-id pattern (`mythologyMonsters` vs `mythologyAndMonsters`) is worth a sweep across `high.ts` — see also the `apEnglish` vs `col-ap-english-literature` pair, `apHistory` vs `col-ap-u-s-history`, `gameDesign` vs `gameDesignBasics`, `us_history` vs `usHistory`. The catalog has accumulated camelCase/`col-…` aliases without cleanup. The `historyBlueprints` fallback bug touches mythology, big history, US history, world history, and AP European History.
