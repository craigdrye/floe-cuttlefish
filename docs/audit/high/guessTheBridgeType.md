# Audit: guessTheBridgeType

**Syllabus**: [`src/data/syllabi/high/guess_the_bridge_type.md`](../../../src/data/syllabi/high/guess_the_bridge_type.md)
**Track id**: `guessTheBridgeType` (high, Architecture/Engineering, `status: 'playable'`, 8 Qs)
**Source file**: [`src/data/questionCatalog/bonusIdentificationQuestions.ts`](../../../src/data/questionCatalog/bonusIdentificationQuestions.ts) → `guessTheBridgeTypeQuestions` (8)

## Coverage map

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| Arch, suspension, cable-stayed | YES | Arch / Suspension / Cable-stayed all present |
| Truss, beam, cantilever | YES | Three Qs |
| Moveable + floating | YES | Bascule + Pontoon |
| Force-flow reasoning ("how load travels") | Partial | Lessons mention thrust/bending but no Q forces learner to *choose by load path* |

## Per-file recommendation

| File | Qs | Bucket | Reason |
|---|---|---|---|
| `bonusIdentificationQuestions.ts` (bridge slice) | 8 | **FIX** | Correct-answer prose is solid; coverage matches syllabus. Two systemic issues: (1) every wrong answer carries the helper-generated boilerplate `"${label} is a plausible distractor, but it does not match the key clue in this prompt."` — a de-facto **DEFAULT_FLAW** baked into `q()`. (2) Media is a stylized SVG `building` glyph reused across every bridge Q — the picture cannot disambiguate bridge type. |

## Open actions

1. Rewrite per-distractor explanations: e.g. for the truss Q, *Arch* should say "an arch carries load through compression into abutments, not through a triangulated web."
2. Replace shared `building` SVG with per-bridge silhouettes (arch curve vs cable harp vs truss web). Currently text-only ID.
3. Add one "which bridge type for this span / soil / clearance?" applied Q to hit syllabus "what the bridge is safe for."
4. Verify region neutrality — currently neutral, keep it that way.

## Estimated effort
~2 hours (8 distractor rewrites + 8 mini-SVGs or one shared per-type set).
