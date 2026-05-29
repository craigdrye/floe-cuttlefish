# Audit: guessTheCheese

**Syllabus**: [`src/data/syllabi/high/guess_the_cheese.md`](../../../src/data/syllabi/high/guess_the_cheese.md)
**Track id**: `guessTheCheese` (high, Food Skills, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheCheeseQuestions` (8)

## Coverage map

| Syllabus axis | Covered |
|---|---|
| Blue veined | YES (generic "Blue cheese" — could be Roquefort/Stilton/Gorgonzola) |
| Bloomy rind | YES (Brie) |
| Hard aged grating | YES (Parmesan) |
| Fresh stretched-curd | YES (Mozzarella) |
| Brined / crumbly | YES (Feta) |
| Cheddar family | YES |
| Washed rind / aged Dutch | YES (Gouda — though Gouda is *not* a washed rind; minor factual quibble in chapter label) |
| Fresh curd | YES (Ricotta) |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (cheese slice) | 8 | **FIX** | Good breadth. Issues: (1) DEFAULT_FLAW-equivalent boilerplate distractors. (2) Chapter label "Washed Rinds" attached to Gouda is technically wrong — Gouda is a natural-rind / waxed pressed cheese; a true washed-rind example would be Époisses, Taleggio, or Limburger. (3) "Blue cheese" Q would gain from naming a specific cheese (Roquefort sheep / Stilton cow / Gorgonzola). (4) Media is generic wedge SVG — visual-ID is weak. |

## Open actions

1. Fix the Gouda/washed-rind chapter mislabel and add a real washed-rind Q.
2. Per-distractor explanations grounded in cheese-making: pasteurization, rennet, mold cultures, aging time.
3. Wire actual cheese photos or distinct per-style cartoons (wheel vs wedge vs crumble vs ball).
