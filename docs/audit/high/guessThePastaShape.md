# Audit: guessThePastaShape

**Syllabus**: [`src/data/syllabi/high/guess_the_pasta_shape.md`](../../../src/data/syllabi/high/guess_the_pasta_shape.md)
**Track id**: `guessThePastaShape` (high, Food Skills, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessThePastaShapeQuestions` (8)

## Coverage map

| Shape family | Covered |
|---|---|
| Long round / ribbon | Spaghetti + Fettuccine |
| Tubes | Penne + Rigatoni |
| Small / pastina | Orzo |
| Shaped | Farfalle |
| Spirals | Fusilli |
| Stuffed | Ravioli |
| Filled curls (tortellini), ear shapes (orecchiette), nests (tagliatelle), shells (conchiglie) | **Missing** (Tortellini/Orecchiette appear only as distractors) |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (pasta slice) | 8 | **FIX** | Stems work because pasta has unambiguous visual language. Issues: (1) DEFAULT_FLAW-equivalent boilerplate distractors. (2) Sauce-pairing reasoning (the syllabus's "sauce-holding geometry") is alluded to but never tested — e.g. "why does rigatoni hold ragù better than spaghetti?" is the actual cooking insight. (3) Generic pasta SVG reused for every Q; visual-ID is text-only. |

## Open actions

1. Add 2-3 shape→sauce reasoning Qs (long+oily, tube+chunky, stuffed+butter).
2. Cover orecchiette and tortellini in stems, not just distractors.
3. Per-distractor explanations should describe the *shape* (Fusilli "spirals trap sauce in twists; spaghetti is round and slick").
