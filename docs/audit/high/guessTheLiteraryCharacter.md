# Audit: guessTheLiteraryCharacter

**Syllabus**: [`src/data/syllabi/high/guess_the_literary_character.md`](../../../src/data/syllabi/high/guess_the_literary_character.md)
**Track id**: `guessTheLiteraryCharacter` (high, Literature, `status: 'playable'`, 10 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheLiteraryCharacterQuestions` (10)

## Coverage map

| Tradition | Character(s) |
|---|---|
| Shakespeare | Hamlet |
| Austen / Brontë | Elizabeth Bennet, Jane Eyre |
| Victorian | Sherlock Holmes, Scrooge |
| American novel | Gatsby, Holden Caulfield |
| Epic / Greek | Odysseus, Antigone |
| Spanish Golden Age | Don Quixote |
| **Absent** | African / Asian / Latin American / Indigenous literatures (Achebe's Okonkwo, Garcia Márquez's Aureliano, Murasaki's Genji, Toni Morrison's Sethe) |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (literary character slice) | 10 | **FIX** | Stems are well-written ("witty, observant, and learns to revise first impressions" is the model). Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate — for character ID the distractors should compare motives ("Odysseus also faces moral tests but his pull is *home*, not *revenge*"). (2) Western-canon only. (3) Media is generic book SVG with text labels — fine for this track (no portrait needed), but the syllabus's "Visual ID" framing is mismatched; this is really a clue-bundle track. |

## Open actions

1. Per-distractor reasoning grounded in motive/conflict ("Macbeth wants power; Hamlet wants moral certainty — they look alike but the engine differs").
2. Add 2-3 non-Western canonical characters.
3. Consider reframing the track as "literary clue bundles" rather than "visual ID" — the medium is text and that's fine.
