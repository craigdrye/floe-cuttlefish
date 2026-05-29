# Audit: guessTheHandTool

**Syllabus**: [`src/data/syllabi/high/guess_the_hand_tool.md`](../../../src/data/syllabi/high/guess_the_hand_tool.md)
**Track id**: `guessTheHandTool`
**Tier**: high
**Status**: `playable` (questionCount: 8) — wired in [`src/data/ageCatalog/high.ts`](../../../src/data/ageCatalog/high.ts) at line 784
**Region**: jurisdiction-neutral

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Gripping (wrenches, pliers) | ✅ | Adjustable wrench + needle-nose pliers |
| Cutting (saws, chisels) | ✅ | Hacksaw + chisel |
| Measuring (calipers, levels) | ✅ | Caliper + spirit level |
| Driving (hex keys, star drivers) | ✅ | Allen key + Torx driver |
| Tool safety / choosing the right tool | ❌ | No explicit "right tool for the task" question |

Five chapters, eight slots — the safety/choice chapter is the only gap.

## Per-file recommendations

| File | Q's | Bucket | Reason |
|---|---|---|---|
| [`bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) §guessTheHandTool (L267–276) | 8 | **FIX** | Stems are accurate and span tool families well; chapter names match the syllabus. **Per-distractor explanations are template-synthesized by `q()`** — **DEFAULT_FLAW pattern**. Rewrites can lean into real distinctions (Allen key vs Torx — different recess geometry, slip behavior). |

## Media wiring

Two SVG clue cards via `media()` with the generic `tool` shape (a stylized hammer). **No real tool photos and no shape differentiation between wrench/pliers/saw/caliper.** This is the cluster's biggest visual-ID weakness for this track — every tool shows essentially the same icon.

## Open actions

1. Rewrite per-distractor explanations (~30 min).
2. Add one "tool safety / right tool for the task" question to close Chapter 5 (~15 min).
3. **Highest priority for media:** source real tool photos — the generic hammer icon undermines the visual-ID premise more here than in tracks where the icon vaguely resembles the subject.

## Effort

~1.5 hours rewrite + new question + ideally a real-image swap.
