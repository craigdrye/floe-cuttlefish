# Audit: chessTactics

**Syllabus**: [`src/data/syllabi/high/chess_tactics.md`](../../../src/data/syllabi/high/chess_tactics.md)
**Track id**: `chessTactics` (Year 10, ages 14-15)
**Tier**: high
**Region**: jurisdiction-neutral (chess is universal)

## Coverage map (syllabus -> questions)

| Syllabus chapter | Covered? | Notes |
|---|---|---|
| 1. Board Vision and Calculation Habits | partial | "Check response" item touches king-safety, but candidate-moves, blunder-check, loose-pieces all missing |
| 2. Tactical Pattern Recognition | weak | One fork item; no pin/skewer/discovered-attack/x-ray/overloaded-defender items |
| 3. Forcing Lines and Calculation Trees | not covered | No forcing-sequence, zwischenzug, move-order items |
| 4. Checkmating Patterns | not covered | No back-rank/smothered/Arabian/Anastasia/Boden/mating-net items |
| 5. Tactical Defense and Counterplay | not covered | No defensive-resource, intermezzo, perpetual-check, fortress items |
| 6. Plans from Positions | partial | "Opening principles" item touches center/development; pawn structure, outpost, weak-square missing |
| 7. Endgame Thinking | not covered | No opposition, rule of the square, passed pawn, triangulation items |
| 8. Game Review, Psychology, and Tournament Practice | not covered | No annotation, time management, tilt items |
| (utility) Piece values | covered | 1 item (queen = 9 points) |

Same routing as `detectiveLogic`: lives in `highFunTrackIds`, has 4 hand-authored items in `highFun.ts`, tops up to 50 via the philosophy/creative fallback — producing dragon-syllogism contamination in a chess deck.

## Per-file recommendations

| File | Q's reaching track | Bucket | Reason |
|---|---|---|---|
| [`highFun.ts -> chessTactics`](../../../src/data/questionCatalog/highFun.ts) (lines 7-40) | 4 hand-authored | **KEEP** | Solid per-distractor explanations (fork definition, piece value, opening principle, check response). Voice is the right enrichment tone — playful chapter names ("Chess Dock", "Chess Cove") match the `jargonBusters.ts` whimsy. |
| [`highGenerated.ts` top-up via `topUpHighGeneratedTrack`](../../../src/data/questionCatalog/highGenerated.ts) | ~46 fallback items | **FIX** | `familyFor` (`highGenerated.ts:174`) routes "chess" -> 'creative' -> `philosophyCreativeBlueprints` (dragon + core-loop). Result: a chess deck filled with non-chess questions. Need a dedicated `chessBlueprints` set or much larger hand-authored bank. |
| Any other questionCatalog file | 0 | n/a | No other chess content exists anywhere in `src/data/questionCatalog/`. |

## Open actions (priority order)

1. **Author a `chessBlueprints` set** in `highGenerated.ts` (12-16 items) and dispatch from `blueprintsFor` for chess specifically. Cover the 8 chapters: candidate moves, fork/pin/skewer/discovered-attack pattern set, forcing lines, the main mate patterns (back-rank, smothered, Arabian), perpetual check, basic plans from imbalances, basic K+P endgame (opposition, rule of the square), and annotation discipline.
2. **Expand the hand-authored `highFun.ts` chess set** from 4 to ~12 — same voice (Dock/Reef/Cove/Lagoon framing), per-distractor, syllabus-aligned chapters.
3. **Suppress the philosophy/creative fallback** for chess. The Chess Dock vibe should not become Pebble-the-dragon.
4. **Consider linking lichess study/puzzle URLs** in the `source` field per question, matching the syllabus's recommended platforms (lichess, ChessKid, ChessTempo, US Chess).
5. **No DEFAULT_FLAW present** in the existing hand-authored items.

## Estimated effort

- Author 12-16 chess blueprints: ~4 hours (some require diagrams; consider notation-only initially with `[FEN]` references in the prompt)
- Expand `highFun.ts` chess set to 12: ~3 hours
- Fallback suppression: ~30 min

## Flags

- **Diagram dependency**: chess is uniquely hard to do as text-only MCQ. Either lean on FEN notation in the prompt ("White: Kg1, Qd2, Re1. Black: Kg8, Qd7. White to move. Find the best move."), or add a `media:` field per question for board images. The 4 existing items dodge this by asking conceptual questions only — feasible but limits depth.
- **Top-up pollution**: same as `detectiveLogic` — fix `familyFor` or add a dedicated dispatch branch.
- **Track ambition vs reality**: syllabus is genuinely tournament-prep ambitious (zugzwang, triangulation, prophylaxis-flavored planning). 4 conceptual items don't deliver that. Either narrow the syllabus or commit to the authoring lift.
