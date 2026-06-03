# Good prompts — what produced the highest-rated questions

These are the prompt texts that generated 4–5/5 questions in the in-app rating passes for the Quant Interview Core "Backward Induction" lesson. Use them as the base for future question generation. (Full results: `quant-backward-induction-ratings-results.md`.)

## The two findings that make a prompt "good"
1. **Framing:** make the correct answer the right **setup / representation / structural insight**, not a bare number. (This is the Whiteboard Whisperer framing — the only prompt that scored high on *both* its questions.)
2. **Puzzle choice dominates the lens:** high ratings track *rich structural/strategic puzzles* with a genuine "aha" — game **trees**, **parity/colouring**, **invariants**, **optimal-stopping recursions**. Low ratings track *dry, rote shapes*: "race to N" counters, misère/Nim take-away piles, and the recycled egg-drop. So a good prompt must also **steer the puzzle choice** toward structural-insight problems and **explicitly ban** the dry/recycled ones.

---

## #1 — The Whiteboard Whisperer  ★ clear winner (both questions 4–5/5)
> You are obsessed with the FIRST THIRTY SECONDS — what a candidate does before any arithmetic. Your questions test the CLARIFY and REPRESENT steps: the correct answer is the right clarifying question to ask, or the representation/first move that makes the hidden structure visible (a game tree, a state label, a recursion, counting the complement, an invariant to track, working from the end). At least one of your two questions should have a correct answer that is NOT a number at all but a choice of how to set the problem up. Distractors are plausible-but-worse representations, or diving into computation with the wrong frame. Make ASK ME DIFFERENTLY the interviewer saying "before you compute anything, tell me how you'd set this up." Spend most of TEACH ME on WHY the right representation collapses the problem and how to recognize that move next time.

**Why it won:** "make the answer the *setup*" inherently selects for puzzles where the setup is non-obvious (trees, recursions, invariants) and away from race/Nim games where the setup is trivial. The prompt's framing self-selects the puzzle types the rater likes.

---

## Runner-ups (one winner each, but hit-or-miss — they depend entirely on the puzzle chosen)

### #2 — Out-Loud Mentor (knockout-invariant question scored 4/5; egg-drop narration scored 1/5)
> Your creed is the syllabus line "the verbal habit is half the score." You test HOW a candidate explains... which way of VERBALIZING the reasoning is the one that actually earns points: the strong opening sentence, what to say when stuck, how to state assumptions, how to narrate the backward step. Distractors are the real anti-patterns: silent correct work, a bare number with no method, bluffing, narrating trivia while skipping the load-bearing step. ASK ME DIFFERENTLY: "say your reasoning out loud — which first sentence is the strong one?" In TEACH ME, model the ideal narration.

### #3 — Desk Quant (adversarial coin-row parity question scored 5/5; race-to-100 scored 1/5)
> You ARE a market-maker desk interviewer who has run hundreds of first-round screens. Obsession: REALISM — write the puzzles exactly as asked across a table, in plain interviewer voice. Distractors must be the EXACT mistakes candidates blurt under the clock. Write TEACH ME as "here is what a strong candidate literally says out loud."

---

## The shared base context (prepend to any of the above)
> COURSE: "Quant Interview Core" (`quant`), Finance, Career. Players: ambitious people prepping first-round quant interviews at prop shops / quant funds / market makers — final-year STEM undergrads, master's/PhD, career-changers, ~20–32, sharp and time-pressured. APP: Floe, a cute Duolingo-style ocean app with a cuttlefish mascot ("Sensei Cuttle"); warm and playful but never sloppy. Each question needs: a 4-option MCQ (one correct, a one-line "why tempting / where it breaks" on each wrong option); a DEEP DIVE (2–3 paragraphs of no-spoiler intuition); an ASK ME DIFFERENTLY (same question reworded); and a TEACH ME (the full explanation).

## The recipe, distilled
- **Framing:** the correct answer is the right *representation / setup / structural insight*, not a bare number.
- **Puzzle:** a rich structural/strategic puzzle with one elegant "aha" — trees, parity/colouring, invariants, optimal-stopping.
- **Ban:** race-to-N counters, misère/Nim take-away, the egg-drop, and any recycled/famous-by-rote puzzle.
- **Distractors:** plausible misconceptions and "correct-but-overkill" (brute force / full DP) — not cartoonish wrong answers.
