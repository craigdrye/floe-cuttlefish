# Audit: guessTheKnot

**Syllabus**: [`src/data/syllabi/high/guess_the_knot.md`](../../../src/data/syllabi/high/guess_the_knot.md)
**Track id**: `guessTheKnot` (high, Practical Skills, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheKnotQuestions` (8)

## Coverage map

| Knot family | Covered |
|---|---|
| Stopper | Figure-eight, Overhand |
| Loops | Bowline |
| Binding | Square knot |
| Hitches | Clove hitch |
| Bends | Sheet bend |
| Friction | Prusik |
| Fishing | Fisherman's |
| **Missing** | Trucker's hitch, taut-line, double bowline, alpine butterfly, water knot — common but skipped |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (knot slice) | 8 | **FIX** | Stems are honest about safety ("square knot ... is not ideal for critical loads" is exactly right). Issues: (1) DEFAULT_FLAW-equivalent distractor boilerplate. (2) **Visual gap is severe**: knots are 3D topology — a still image is barely enough, and the current media is generic `tool` SVG (wrench shape) reused for every knot. (3) The syllabus key skill "knot is safe for *what*" is implicit but never tested — no "which knot for climbing?" / "which knot for joining two ropes of different diameter?" Q. |

## Open actions

1. Wire per-knot diagrams (animated GIFs ideal; static labeled diagrams minimum). Without these the track teaches nothing.
2. Add 3-4 application Qs ("you need to join two unequal-diameter ropes — which knot?") — sheet bend, taut-line, trucker's hitch territory.
3. Per-distractor explanations grounded in use case ("a bowline makes a *fixed* loop; a clove hitch wraps a *post*").
