# Backward Induction lesson — in-app rating results & prompt analysis

**Date:** 2026-06-02 · Ratings collected from the live app (`questionQualityRatings.learnerRating`, 1–5) across two authoring rounds, then mapped back to the prompt that generated each question.

## Ranking (candidate questions only)

| Score | Question | Generating prompt | Round |
|---:|---|---|---|
| 5/5 | The Veto Hire | **Whiteboard Whisperer** | R2 |
| 5/5 | The Adversarial Coin Row | **Desk Quant** | R1 |
| 4/5 | The Three-Roll Game | **Whiteboard Whisperer** | R2 |
| 4/5 | Will They Meet? (knockout) | **Out-Loud Mentor** | R2 |
| 1/5 | Say It Out Loud: the Marble Drop | Out-Loud Mentor | R2 |
| 1/5 | The Race to 100 | Desk Quant | R1 |
| 1/5 | The Coral-Tower Duel | Sensei Cuttle | R1 |
| 1/5 | The Poison-Pearl Council | Sensei Cuttle | R1 |

(For reference, the established originals all scored high: Screwy Pirates 5, Horse Race 5, Gas cans 5, Prisoner Problem 4.)

## Average by prompt
- **Whiteboard Whisperer — 4.5** (5, 4) — both high; the clear winner.
- Desk Quant — 3.0 (5, 1) — split by puzzle.
- Out-Loud Mentor — 2.5 (4, 1) — split by puzzle.
- Sensei Cuttle — 1.0 (1, 1).

## The two findings
1. **Prompt:** the **Whiteboard Whisperer** prompt is the one to scale. Its instruction — *"the correct answer is the right clarifying question or the representation/first move that makes the hidden structure visible (a game tree, a state label, a recursion, the complement, an invariant); at least one correct answer is NOT a number but a choice of how to set the problem up; distractors are plausible-but-worse representations or diving into computation with the wrong frame"* — produced two winners and nothing else.
2. **Content (dominates the lens):** high scores track *rich structural/strategic puzzles* (game tree, parity/colouring, continuation-value recursion, invariant counting — same family as the high-scoring originals). Low scores track *dry, rote backward-induction shapes*: "race to N" counters (×2), a misère Nim pile, and a recycled egg-drop. This cuts across lenses — Desk Quant and Sensei Cuttle each scored high or low purely on which puzzle they reached for.

## Why the Whiteboard prompt wins
"Make the answer the **setup**, not the number" inherently selects for puzzles where the setup is non-obvious (trees, recursions, invariants) and away from race/Nim games where the setup is trivial — i.e., the prompt's framing self-selects the puzzle types the rater likes. Prompt and taste reinforce.

## Recipe for the next round
- Use the **Whiteboard Whisperer** framing (answer = the right representation / first move).
- Pick **rich structural/strategic puzzles** with a real "aha": trees, parity/colouring, invariants, optimal-stopping recursions.
- **Avoid:** race-to-N counters, misère/Nim take-away piles, the egg-drop, and any recycled puzzle.
