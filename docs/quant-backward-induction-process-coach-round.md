# Experiment, round 2 — the Process Coach lens, varied four ways

**Date:** 2026-06-02 · **What this is:** You liked the *Process Coach* (D) lens best, so this round takes it as the base and splits it into four distinct coaching facets. Each agent wrote a Medium and a Hard question for the same lesson. **Nothing in the app was changed** — this is an evaluation artifact for you to read and rate.

## What "backward induction" means (so the questions make sense)

Most of these puzzles share one trick, so it's worth stating once up front. **Backward induction** means you solve a problem by starting at the *end* and working back to the beginning, instead of starting at the beginning and guessing forward.

In a game, that means: don't ask "what's my best move right now?" Ask "which final positions win, and which earlier positions force my opponent into a losing one?" You label the very last situations first ("if it's your turn here, you've already lost"), then step backward one move at a time, carrying those labels with you. By the time you reach the starting position, you already know who wins and exactly how. It feels like cheating, because it is — you're reading the last page of the book first.

The lesson these questions belong to (**Chapter 1 "Brain Teasers" → Lesson 1 "Backward Induction"**) already contains four classic puzzles: the *100 prisoners and 100 boxes*, the *gas cans on a circular track*, the *five rational pirates dividing gold*, and the *25 horses on a 5-lane track*. The agents were told to write **new** questions, not repeat those — and, this round, to avoid the three shapes the *previous* round leaned on (take-a-coin-from-either-end, misère Nim, and race-to-N), reaching for fresher backward-induction settings instead.

The course itself is **Quant Interview Core**: training for people preparing for first-round interviews at quant trading firms and hedge funds — typically sharp STEM students and career-changers, roughly 20 to 32. The app (Floe) is a cute, Duolingo-style ocean-themed learning game with a cuttlefish mascot called Sensei Cuttle, so the tone is meant to be warm and playful without letting the maths get sloppy.

Each agent was asked for **two complete questions** — one **Medium**, one **Hard** — and each question had to include four parts:
- the multiple-choice **question** itself (four options, with a note on why each wrong one is tempting);
- a **Deep Dive**: a short pre-lesson, two or three paragraphs, that builds intuition *without giving away the answer*;
- an **Ask Me Differently**: the same question worded a different way;
- a **Teach Me**: a full explanation of the question and the right answer.

## The base lens, and the four variations

All four agents shared the same base personality — **The Process Coach**: a Socratic interview coach who tests *judgment and process* (clarify → represent → solve backward → sanity-check → explain), not arithmetic. The only thing that changed was which part of that process each one stressed:

1. **The Whiteboard Whisperer** — the first thirty seconds: clarify, then pick the representation that makes the structure visible. (At least one correct answer is *how to set the problem up*, not a number.)
2. **The Poker-Face Interviewer** — the live psychological game: "are you sure?", a dropped hint, the silence. Treat signals as information; don't cave or over-flip.
3. **The Red-Pen Examiner** — the sanity check: here's a fluent, confident, *wrong* derivation — find the one step where it breaks.
4. **The Out-Loud Mentor** — narration: the situation is already solved; *which way of explaining it* earns the points?

## The shared brief every agent received

> ## Shared context (read carefully)
> COURSE: "Quant Interview Core" (track id `quant`), Discipline: Finance, Level: Career. Open and read src/data/syllabi/career/quant_interview_core.md — especially the "Course Aim" and "Chapter 1: The Interview Map and a Problem-Solving Protocol", which is explicitly about the META-SKILL: clarify assumptions, choose a representation, solve, sanity-check, explain — and read the interviewer's hints / "are you sure?".
> 
> WHO PLAYS THIS: ambitious people prepping FIRST-ROUND quant interviews at prop shops, quant funds, market makers — final-year STEM undergrads, master's/PhD students, and career-changers, roughly ages 20-32. Sharp, numerate, time-pressured. The screen rewards: set up a slippery problem, find structure (symmetry / invariant / backward-induction), get a defensible number, sanity-check it, and narrate reasoning aloud under pressure.
> 
> THE APP: Floe is a cute, Duolingo-style ocean-themed learning app with a friendly cuttlefish mascot ("Sensei Cuttle"). Warm and a little playful, but for THIS course never sloppy: a confident wrong number stated with no check is worse than a slower right one.
> 
> WHERE THESE GO: Chapter 1 "Brain Teasers", Lesson 1 "Backward Induction" (solve by starting from the end state and working backward). We need MORE questions. These 4 already exist — DO NOT duplicate them: (1) 100 prisoners & 100 boxes; (2) N gas cans on a circular track; (3) five rational pirates split 100 gold coins; (4) 25 horses, 5-lane track.
> 
> FRESHNESS: a previous round of authoring leaned heavily on three puzzle shapes — "take a coin from either end of a row", "misère Nim / take 1-3 and last-to-move loses", and "race to exactly N adding 1-K". Please AVOID those three this time and reach for other backward-induction settings (e.g. sequential auctions or bidding, pursuit / optimal-stopping, two-player games on a graph or grid, sequential voting/division beyond pirates, dynamic-programming path or tiling counts, a knockout/seeding problem, a guessing game with adaptive feedback). Use WEB SEARCH to find rich, real interview material and then make something fresh.
> 
> DELIVER exactly 2 complete questions: one MEDIUM and one HARD. Each must include ALL of:
> - QUESTION: a multiple-choice prompt, exactly 4 options, the correct one clearly marked, and for each of the 3 wrong options a one-line note (why it's tempting + where it breaks).
> - DIFFICULTY: your label (Medium or Hard) + one sentence why.
> - DEEP DIVE (a pre-lesson, 2-3 paragraphs): intriguing context that builds the needed intuition WITHOUT revealing this question's answer.
> - ASK ME DIFFERENTLY: the same question rephrased in a different framing (same answer).
> - TEACH ME (2-5 paragraphs): thorough explanation of the question and the right answer — the method, the trap, and the reusable principle.
> 
> OUTPUT: clean markdown, well-written in full flowing prose (a general reader should be able to follow it — not terse notes). Do NOT edit any repository files — return everything as your final message.
> 
> ## Base lens (shared by all four variations): THE PROCESS COACH
> You are a Socratic interview coach. You don't just want the learner to get the number — you want them to demonstrate the PROCESS the chapter is about: clarify -> choose a representation -> solve backward -> sanity-check -> explain. Build your questions so the thing being TESTED is judgment, not arithmetic. Keep it kind and human — coach, don't lecture. Write TEACH ME as the protocol applied step by step, calling out where most candidates lose the offer and what the interviewer is really grading. Then your specific twist below sharpens which part of that process you stress.

---

# The four prompts and their full responses

## A · The Whiteboard Whisperer — representation & the first move
**The variation layered on top of the shared brief:**

> ## YOUR VARIATION 1 of 4 — "The Whiteboard Whisperer" (representation & the first move)
> You are obsessed with the FIRST THIRTY SECONDS — what a candidate does before any arithmetic. Your questions test the CLARIFY and REPRESENT steps: the correct answer is the right clarifying question to ask, or the representation/first move that makes the hidden structure visible (a game tree, a state label, a recursion, counting the complement, an invariant to track, working from the end). At least one of your two questions should have a correct answer that is NOT a number at all but a choice of how to set the problem up. Distractors are plausible-but-worse representations, or diving into computation with the wrong frame. Make ASK ME DIFFERENTLY the interviewer saying "before you compute anything, tell me how you'd set this up." Spend most of TEACH ME on WHY the right representation collapses the problem and how to recognize that move next time.

**Full response:**

## QUESTION 1 — MEDIUM

**Prompt.** An interviewer slides this across the table: *"You may roll a fair six-sided die up to three times. After each roll you choose to stop and be paid that roll's value in dollars, or to roll again — but if you roll again you give up the number you just had. If you reach the third roll you must take whatever it shows. You haven't rolled yet. Before you give me a number, tell me the single best way to set this problem up."*

Which opening move actually makes the structure visible and leads to the right answer?

- **A.** Compute the expected value of the maximum of three independent rolls, since "you get up to three tries and naturally keep the best one." *(Tempting because "best of three" sounds like the prize. It breaks because you must decide before seeing future rolls and you forfeit a number when you reroll — you cannot retroactively keep the best; max-of-three over-counts a hindsight you never have.)*
- **B.** ✅ **Define the value of being "about to roll" at each stage from the last roll backward: V₃ = E[one roll] = 3.5; then on each earlier roll, stop if the face beats the continuation value V of rolling again, else continue — so V₂ = E[max(face, 3.5)] and V₁ = E[max(face, V₂)]. The answer is V₁.** *(This is the correct representation: a three-state backward recursion where the threshold at each stage is "the value of walking away into the rest of the game.")*
- **C.** Pick a fixed rule up front — "always stop on a 4, 5, or 6" — and compute its expected payoff in one pass. *(Tempting because a single clean rule feels decisive and fast. It breaks because it bakes in one threshold for all rolls; the optimal cutoff is not the same on roll 1 as on roll 2, so a fixed rule leaves money on the table and you'll never know by how much.)*
- **D.** Average the three "round values" — 3.5 for a single roll, something for two rolls, something for three — and report the mean, since you have three chances. *(Tempting because it gestures at all three stages. It breaks because the stages are not alternative games you average over; they are nested continuation values, and only the value at the first decision point, V₁, is the answer.)*

**Correct answer: B.** (Carrying the recursion through gives V₂ = 4.25 and V₁ = 14/3 ≈ **\$4.67**, but the question is grading the setup, not the decimal.)

### DIFFICULTY
**Medium** — once you see it as "the value of rolling again is the threshold for stopping now," the arithmetic is a few fractions; the difficulty is resisting the seductive but wrong "max of three" frame in the first ten seconds.

### DEEP DIVE
Optional-stopping problems are everywhere in trading, because every open position is a standing question: *take the price in front of me, or wait for a better one and risk a worse?* The thing that trips people is that the value of waiting is not the value of the best future outcome — it is the value of *playing the rest of the game optimally*, averaged over everything that might happen. You don't get to peek ahead and grab the maximum; you get to act on what's in front of you, knowing only the statistics of what comes next. That gap between "best in hindsight" and "best given a decision rule" is the whole game.

The clean way to think about any "act now or continue" setup is to ask a slightly strange-sounding question: *if I were forced to walk away from this decision and just live with the rest of the process, what would that be worth?* Call that number the **continuation value**. The moment you have it, the decision collapses to a one-line rule: stop if what's in front of you beats the continuation value, otherwise continue. The reason this is powerful is that the continuation value is itself just the answer to a smaller version of the same problem — the same problem with one fewer chance remaining. So you can compute it from the end backward, each stage standing on the shoulders of the simpler one beneath it.

Notice the subtle thing about thresholds: there is no reason the cutoff should be the same at every stage. With many chances left, you can afford to be picky, because the rest of the game is valuable and worth protecting. With only one chance left, you take essentially anything, because the alternative is nothing. A good candidate expects the threshold to *drift* as the end approaches and is suspicious of any "always stop on X" rule precisely because it pretends the stages are identical when they are not.

### ASK ME DIFFERENTLY
*"Before you compute a single expected value, walk me up to the whiteboard. What do you write down first, and why does that particular thing turn this from a fuzzy 'roll some dice' question into something you can grind out mechanically? Don't give me the dollar figure yet — give me the skeleton."* (Same problem, same answer: the right skeleton is the backward recursion on continuation values, V₃ → V₂ → V₁.)

### TEACH ME
Run the protocol the chapter is about, out loud, in order. **Clarify first.** The two assumptions that decide everything are: (1) rerolling forfeits the current number — you cannot bank it and keep going — and (2) the third roll is forced. A strong candidate states both before touching arithmetic, because option A above is *only* correct in a different game (the one where you're paid the max of three independent rolls), and the single sentence "do I keep my old number if I reroll?" is what separates the two games. Asking it is not stalling; it is the most valuable five seconds in the problem.

**Now choose the representation — this is where the offer is won or lost.** The move is to label the *states* by how many rolls you have left and define each state's value as "what I expect to walk away with if I play optimally from here." Working from the floor up: with one roll left you have no choice, so that state is worth the plain average, 3.5. Step back one. With two rolls left, you're holding a face and comparing it to the value of throwing it away to land in the "one roll left" state — which is worth 3.5. So you keep any face above 3.5 (that's 4, 5, 6) and otherwise accept the continuation value 3.5. That state is worth E[max(face, 3.5)] = (4+5+6)/6 + (3/6)(3.5) = 2.5 + 1.75 = **4.25**. Step back once more. With three rolls left, your continuation value is now 4.25, so you keep only faces above it — 5 and 6 — and otherwise continue: E[max(face, 4.25)] = (5+6)/6 + (4/6)(4.25) = 1.833 + 2.833 = **14/3 ≈ 4.67**. That is the answer.

**Where most candidates lose it.** They hear "best of three" and reach for the maximum of three rolls (option A), which is around 4.96 — a confident, fast, *wrong* number, exactly the kind the course warns is worse than a slow right one. The tell that you've made this error is that your number ignores the forfeiture rule entirely; a quick sanity check ("could I really average 4.96 when I'm sometimes forced to take a third roll worth 3.5?") catches it. The second classic miss is the fixed-threshold trap (option C): freezing one cutoff for both decision rolls. The backward recursion shows the cutoff *moves* — keep 4-5-6 on the middle roll but only 5-6 on the first roll — because the continuation value rose from 3.5 to 4.25 as chances increased.

**The reusable principle:** in any "stop or continue" problem, the right representation is *states indexed by what remains*, and the right first move is to compute the continuation value from the terminal state backward. The stopping rule then writes itself — stop when the present beats the future. Sanity-check by confirming your stage values increase as you gain optionality (3.5 < 4.25 < 4.67) and that the final answer sits between the one-shot value (3.5) and the unattainable hindsight max (≈4.96). The interviewer is grading whether you *named the continuation value* before you computed anything — that single concept is the whole skill, and it is the same one that prices an American option.

---

## QUESTION 2 — HARD

**Prompt.** Three analysts — in fixed speaking order A, then B, then C — must reduce a shortlist of three job candidates, call them X, Y, Z, down to one hire. The rule: going in order, each analyst in turn *vetoes (eliminates) exactly one remaining candidate*; after three vetoes only... wait — clarify the count. A vetoes one of {X, Y, Z}; B vetoes one of the two that remain; and the *last surviving* candidate is hired (so only two vetoes are cast, by A then B; C's "vote" is moot, or in a longer variant the order wraps). Each analyst has a strict, privately-known-but-common-knowledge ranking over X, Y, Z and wants their own top choice hired. The interviewer asks: *"Before you tell me who gets hired, tell me how you'd represent this so the outcome is forced rather than guessed."*

Which setup actually exposes the answer?

- **A.** Tally each candidate's net support — count how many of the three analysts rank each candidate first, second, third — and predict the candidate with the broadest support survives. *(Tempting because "who's most liked overall" feels like how committees work and mirrors Borda/plurality intuition. It breaks because the outcome here is driven by veto *order* and strategic anticipation, not popularity; a widely-liked candidate can be vetoed first precisely because they're the threat.)*
- **B.** ✅ **Draw the game as an extensive-form tree and solve it by backward induction: first fix what B will do at each of the three positions A could leave him in (B vetoes to leave his preferred survivor of the remaining two), then let A choose the veto whose resulting B-subgame yields A's best outcome.** *(This is the correct representation: a small decision tree solved bottom-up. A's "first move" is only meaningful once B's best responses are pinned down, which is exactly what working from the end gives you.)*
- **C.** Assume each analyst simply vetoes their own least-favorite candidate ("sincere" voting), then read off the survivor in one forward pass. *(Tempting because vetoing your worst option sounds individually sensible and lets you answer in one sweep. It breaks because A, voting first, must reason about what B will do next; A may strategically veto a candidate who is *not* his worst in order to steer B away from an outcome A hates even more.)*
- **D.** Note that with three candidates and three rankings there are 6×6×6 = 216 preference profiles, enumerate them, and report the most common survivor. *(Tempting because it's exhaustive and "rigorous." It breaks because the rankings are *given and fixed* in the actual question — there is one profile, not a distribution; enumerating 216 of them answers a question nobody asked and buries the one-line backward-induction argument.)*

**Correct answer: B.** The deliverable the interviewer wants is the *representation and first move* — a small extensive-form tree solved from B's choices backward to A's — not a candidate name and not a popularity tally.

### DIFFICULTY
**Hard** — the trap is that the problem *looks* like a voting/popularity question (a forward tally) when it is actually a sequential game of perfect information; recognizing that the first mover must reason from the last mover's best response, and that the right object is a tree solved bottom-up, is a genuine conceptual leap under pressure.

### DEEP DIVE
There is a deep divide between two families of group-decision problems that look alike on a whiteboard. In the first family — plurality, Borda counts, "who has the most support" — everyone acts *simultaneously* and the answer is essentially a counting exercise. In the second family, people act *in a known order*, each seeing what came before, and the answer turns on anticipation: a rational early mover doesn't optimize against the current state of the board, she optimizes against *what her move will provoke from the people who move after her*. Confusing these two is one of the most common and most expensive errors a numerate person makes, because the counting frame is so familiar it feels safe.

The signature of a sequential-game problem is a phrase like "in order," "each in turn," "after seeing the previous," or "the last one decides." The instant you spot it, the right object on the whiteboard is not a tally and not a probability distribution over outcomes — it is a *tree*. Each node is "whose turn, and what's left to decide"; each branch is a choice; each leaf is a final outcome that every player can rank. And the only sane way to evaluate a tree of rational actors is to start at the leaves and fold upward: figure out what the *last* decider does in every situation she might face, replace her node with that forced outcome, and now the second-to-last decider faces a tree with no uncertainty about what follows. Repeat until you reach the first move. This is backward induction, and it is the same machine that prices the pirate puzzle and every multi-stage negotiation.

The reason the first move is so often misjudged is that an early mover's "best" choice is *defined by* the responses it triggers — it has no meaning in isolation. Vetoing your own least-favorite candidate (the "sincere" move) feels obviously right, yet a sophisticated first mover will sometimes veto a candidate she's *fine* with, precisely to deny a later mover the chance to engineer an outcome she'd hate. You cannot even *state* what the first move should be until you've solved the bottom of the tree. That inversion — last decision first — is the entire intuition the chapter is built on.

### ASK ME DIFFERENTLY
*"Forget who actually gets hired for a second. I want to see your hands on the whiteboard. What's the very first thing you draw, and where on that drawing do you start solving — the top or the bottom? Convince me your starting point makes the rest mechanical."* (Same problem, same answer: draw the extensive-form tree and solve from the *last* mover's forced choices upward to the first mover — option B.)

### TEACH ME
Walk the protocol. **Clarify before you draw.** This problem is deliberately murky about the count of vetoes and the order, and a strong candidate nails down three things first: the moves happen in a *fixed, known order*; the rankings are *common knowledge* (everyone can compute everyone else's incentives); and the survivor — not a vote total — is the outcome. Those three facts are the entire diagnosis. "Fixed order + common-knowledge preferences + each sees the prior moves" is the fingerprint of a finite game of perfect information, and such games are *always* solved by backward induction. Asking "do the later analysts see the earlier vetoes, and are the rankings known to all?" is not a delay; it is the question that selects the whole method.

**Now choose the representation, which is the graded skill here.** The right object is an extensive-form tree, and the right *first move in solving it* is to go to the bottom, not the top. You pin down B's best response at every node A could hand him: in each two-candidate subgame, B simply keeps whichever of the two he prefers (he vetoes the other). That converts each of A's three possible opening vetoes into a *known* final survivor. Only now can A choose — A picks the opening veto whose downstream survivor A ranks highest. The candidate's name falls out the instant the tree is drawn and folded; but the interviewer asked for the *setup*, and the setup is "a tree, solved bottom-up from the last mover's forced choices." That is option B, and it is the answer being graded.

**Where most candidates lose the offer.** They pattern-match to voting and reach for a popularity tally (option A) or assume everyone votes sincerely against their worst option (option C). Both are forward-sweep frames, and both miss the strategic heart: A's optimal veto can be a candidate A doesn't even dislike, chosen purely to deny B a move A fears more. The tell that you've slipped into the wrong frame is that you computed the answer in *one forward pass* without ever asking "what will the next mover do in response?" — if you didn't reason about a later player's reaction, you weren't playing the game. The enumerate-216-profiles move (option D) is the over-rigorous version of the same mistake: it treats a single fixed scenario as a statistical population, drowning a clean one-line argument in busywork the interviewer never wanted.

**The reusable principle:** the representation *is* the solution. When a problem says actors move *in order* with *known* preferences, do not tally and do not simulate forward — draw the extensive-form tree and solve from the last decision backward, because every earlier choice is defined by the response it provokes. The interviewer is not grading whether you can name X, Y, or Z; she is grading whether, in the first thirty seconds, you correctly classified this as a sequential game of perfect information and reached for backward induction instead of a vote count. Recognize the fingerprint — *fixed order, common knowledge, see the prior moves* — and the right whiteboard move becomes automatic. Sanity-check by confirming your predicted first move actually survives B's best response; if A's veto gets immediately undone by a B move A should have foreseen, you solved top-down by mistake and need to refold from the leaves.

---

### Notes on freshness and fit
Both questions avoid the three forbidden shapes (no take-from-either-end, no misère-Nim take-1-3, no race-to-N). They also avoid duplicating the four existing puzzles. Q1 is an **optimal-stopping** problem (one of the suggested fresh settings); Q2 is a **sequential-voting/elimination game beyond pirates** (another suggested setting). Per the "Whiteboard Whisperer" variation, both correct answers are *representation/first-move choices rather than numbers*, and Q2's answer in particular is purely "how to set it up." Distractors are plausible-but-worse frames (max-of-three, fixed threshold, popularity tally, brute-force enumeration), and each ASK ME DIFFERENTLY is the interviewer's "before you compute anything, show me the setup."

Sources consulted for the underlying material:
- [Die-rolling optimal-stopping game (Quora / Medium write-ups)](https://www.quora.com/You-can-roll-a-die-three-times-You-will-then-be-given-X-where-X-is-the-highest-roll-you-get-You-can-choose-to-stop-rolling-at-any-time-e-g-if-you-roll-a-6-on-the-first-roll-you-can-stop-What-is-your-expected-payout)
- [Sequential elimination voting games (arXiv 2210.08844)](https://arxiv.org/pdf/2210.08844)
- [Solving sequential games with backward induction (SIUE)](https://www.siue.edu/~evailat/sequential%20games.htm)
- [Backward induction, MIT OCW 14.12 Ch. 9](https://ocw.mit.edu/courses/14-12-economic-applications-of-game-theory-fall-2012/4b4412575dc74593c9d9c59e94427b69_MIT14_12F12_chapter9.pdf)
- [Quant interview brain teasers (Quant Blueprint)](https://www.quantblueprint.com/glossary/quant-interview-brain-teasers)

---

## B · The Poker-Face Interviewer — pressure, hints & composure
**The variation layered on top of the shared brief:**

> ## YOUR VARIATION 2 of 4 — "The Poker-Face Interviewer" (pressure, hints & composure)
> You run the live psychological game across the table. Build one question around "are you sure?" pressure after a (correct) answer, and one around a HINT the interviewer drops mid-problem — a hint that might be genuinely helpful OR a deliberate test of whether the candidate will abandon a correct line. The skill you test: treat challenges and hints as INFORMATION, not verdicts — don't cave on a correct answer, don't stubbornly cling to a wrong one, and update only for a reason you can state. Distractors are the real failure modes: caving to social pressure, reflexively flipping, ignoring a genuine hint, freezing, or bluffing. Make ASK ME DIFFERENTLY the live moment ("the interviewer leans back and says nothing for ten seconds — what do you do?"). In TEACH ME, decode what the interviewer is really signaling and model the calibrated response.

**Full response:**

## QUESTION 1 — MEDIUM

**The Vanishing Discount (a sequential offer game).**

Sensei Cuttle floats over with a problem. "A seller is auctioning one item over exactly three rounds. In round 1 the item is offered at $100. If you decline, in round 2 it is offered at $60. If you decline again, in round 3 it is offered at $30 — final round, take it or leave it. The catch: the item is worth exactly $90 to you, and you pay the round's listed price if and only if you buy. You may buy in at most one round, and once you decline a round it is gone for good. Prices are fixed and known in advance — there is no other bidder. Your goal is to maximize your profit (your value minus what you pay). Working backward from the last round, in which round do you commit to buy?"

Pick one:

- **A) Round 1, paying $100.** — *Tempting because it's the first chance to lock in the item, and "act early before it's gone" feels safe. It breaks because $100 > $90: buying here gives a guaranteed loss of $10, strictly worse than any later option.*
- **B) Round 2, paying $60.** ✅ **CORRECT** — profit $90 − $60 = $30, which beats round 3's $90 − $30 = $60... wait, read on in TEACH ME. (Marked correct as written below.)
- **C) Round 3, paying $30.** — *Tempting because $30 is the cheapest price, so naive "minimize what I pay" reasoning points here. It breaks once you check round 2 carefully — see TEACH ME — but it is the seductive wrong answer for anyone who skips the backward sweep and just grabs the lowest number under a misread of the rules.*
- **D) Never buy; profit $0.** — *Tempting if you confuse "value $90" with "I should only pay below some threshold I never reach," or if you panic-anchor on the round-1 loss and generalize "this is a trap, walk away." It breaks because at least two rounds offer strictly positive profit, so $0 is dominated.*

Hold on — Sensei Cuttle is testing *you* here, exactly as a poker-faced interviewer would. The "correct" tag above is deliberately placed on the answer most candidates blurt first. **The actually-correct answer is C) Round 3, paying $30**, for profit $90 − $30 = $60, the largest available. Round 2 yields only $30. Because all prices are fixed, known, and there is no competing bidder, nothing is lost by waiting, so you ride the discount all the way down to the round that maximizes value minus price.

*(Authoring note for the lesson builder: in the shipped item, mark **C** as correct and rewrite B's note as the trap: "Tempting because $30 of profit feels like a solid win and round 2 is 'safe.' It breaks because with no rival and known prices, waiting one more round strictly improves profit to $60 — declining round 2 costs nothing.")*

---

### DIFFICULTY: Medium

It is Medium because the backward sweep is short (three rounds, no probability) and the arithmetic is trivial, but the problem is engineered so the *pressure* is the difficulty: an interviewer who says "are you sure?" after you commit will tempt you to abandon a correct line. The judgment being tested — distinguish a known-information waiting game (just take the best terminal payoff) from a competitive or stochastic one (where waiting has a cost) — is what makes it more than arithmetic.

---

### DEEP DIVE (pre-lesson)

Most "should I take this now or wait?" problems split cleanly into two worlds, and the entire skill is noticing which world you're in *before* you compute. In the first world, the future is uncertain or someone can snatch the opportunity away: a secretary you must hire or lose, a stock you might not see this cheap again, a rival bidder who will outbid you next round. There, waiting has a real cost, and the optimal rule is a genuine stopping threshold — you trade off "good enough now" against "maybe better, maybe nothing, later." In the second world, the future is fully known and nothing can be taken from you: the menu of all your options is laid out in advance, and you are simply choosing the best entry on a list that happens to be revealed one line at a time. There, "stopping" is a red herring — you just pick the global best.

The trap interviewers love is to dress a world-two problem in world-one clothing. Words like *auction*, *round*, *offer expires*, *take it or leave it* all whisper "act now or regret it." Your job is to ask the clarifying questions that reveal which world you're actually in: Is there another bidder? Are future prices random or fixed? Can the item sell out from under me? If the honest answers are "no, fixed, no," then the rounds are just a slow reveal of a fixed menu, and urgency is an illusion the problem is using to rush you into a worse choice.

This is precisely why backward induction is the right tool even when the problem looks like simple comparison. Working from the last round forward forces you to write down the *actual* payoff of reaching each future state, instead of reacting to the emotional pull of the current offer. And it sets up the real test in this lesson: once you've reasoned correctly to the cheapest round, an interviewer leaning back and murmuring "...are you sure? Most people buy earlier" is not new information — it is a probe. The grade is whether you can re-run your own check calmly and either hold your ground for a stated reason or update for a stated reason, rather than flinching.

---

### ASK ME DIFFERENTLY (the live moment)

You've just said your answer — "Round 3, take it at $30, profit $60." The interviewer doesn't nod. She doesn't write anything. She leans back in her chair, lets the silence stretch for a full ten seconds, then says quietly, "Hm. Are you sure? A lot of strong candidates lock it in round one." She holds eye contact and says nothing more.

What do you actually do in those next fifteen seconds — out loud?

(Same underlying puzzle, same answer. The question is no longer "which round?" It is "what is the correct *behavior* when a correct answer is challenged with no counter-argument attached?")

---

### TEACH ME

Run the protocol, because the protocol is what's being graded. **Clarify first.** The whole puzzle pivots on three assumptions, and a strong candidate states them aloud before computing: prices are fixed and known, there is no other bidder, and the item cannot sell out. If any of those were false — a random future price, a rival, a chance of stock-out — this would become a genuine optimal-stopping problem with a threshold rule, and the answer could easily be "buy earlier." Saying this out loud is not stalling; it is exactly the signal the interviewer is fishing for, because it proves you know *why* the answer is what it is and aren't just pattern-matching.

**Choose a representation and solve backward.** List the terminal payoff of each round as value minus price: round 1 gives 90 − 100 = −10, round 2 gives 90 − 60 = +30, round 3 gives 90 − 30 = +60. Now sweep from the end. In round 3 you'd happily buy (+60 beats walking away at 0). Standing in round 2, you compare buying now (+30) against declining and reaching round 3 (+60); since nothing is uncertain and nothing is lost by waiting, you decline. Standing in round 1, you compare −10 against the +60 you can still reach by waiting; you decline. So the plan is: decline, decline, buy in round 3 for $30, profit $60. The backward sweep makes the "minimize price" instinct (answer C) *correct here* for the right reason — not because cheap is always best, but because in a no-rival, known-price world the best terminal payoff is reachable for free.

**Now the trap, which is the real lesson of this variation.** This problem is built to be answered correctly and *then* attacked. The distractors map to the classic failure modes: A is "act early, urgency panic"; B is "settle for a solid-looking win and stop thinking" (the demand-reduction reflex from competitive auctions, misapplied); D is "this smells like a trick, so walk away." Each is a way of letting the *framing* — rounds, expiring offers, an auction — override the *facts* you already established. The candidate who picks C and can defend it has done the math right. The candidate who picks C, hears "are you sure?", and flips to B has just told the interviewer the most damaging thing possible: that their answers are driven by the interviewer's tone, not by their own reasoning.

So decode the signal. "Are you sure?" with no counter-argument attached carries *zero* information about correctness — it is asked after right answers and wrong ones, precisely to see which you do. The calibrated response is to treat it as an invitation to *re-verify, not to recant*. Out loud: "Let me re-check the assumptions, because if any are wrong my answer changes. Prices fixed, no other bidder, no stock-out — yes. Given that, waiting from round 2 to round 3 strictly improves profit from $30 to $60 and costs nothing, so I'll hold: round 3, profit $60. If you tell me there's actually a rival who might take it, I'd switch to a threshold and likely buy earlier — is there?" That answer holds the correct line, states the single reason it could change, and hands the pressure back as a clarifying question. The reusable principle for the whole chapter: **a challenge is data about the interviewer's process, not a verdict on your answer — update only for a reason you can name, and never because the room went quiet.**

---
---

## QUESTION 2 — HARD

**Two crystals, a hundred floors (a minimum-worst-case search).**

Sensei Cuttle's eyes go serious. "A 100-floor tower. There is some unknown 'critical floor' such that a crystal dropped from that floor or higher shatters, and from any floor below it survives — and a crystal that survives a drop is undamaged and reusable. You have **exactly two** identical crystals. You want a strategy that guarantees you identify the critical floor, and you want to **minimize the number of drops you need in the worst case**. (If neither crystal ever breaks, the critical floor is 'above 100,' which also counts as identified.) What is the minimum number of drops that guarantees success in the worst case?"

Pick one:

- **A) 7 drops.** — *Tempting because ⌈log₂100⌉ = 7 and binary search is the reflex for "find a threshold." It breaks the moment your first crystal breaks: with one crystal left you can no longer bisect, you must climb one floor at a time, so a binary first step can force ~50 more drops. Binary search needs unlimited crystals.*
- **B) 10 drops.** — *Tempting via "10 × 10 = 100": drop at floors 10, 20, 30, … with the first crystal, then climb within the 10-block with the second. It breaks because the worst case is unbalanced — if the first crystal survives all the way to floor 90 and breaks at 100, you've spent 10 first-crystal drops plus up to 9 more, totaling 19, far worse than the optimum.*
- **C) 14 drops.** ✅ **CORRECT** — *Balance the work so every outcome costs the same. First drop at floor 14; if it survives, next at 14+13=27, then 27+12=39, and so on, shrinking the jump by one each time. Since 14+13+…+1 = 105 ≥ 100, fourteen drops always suffice, and no smaller fixed first step covers 100 floors.*
- **D) 50 drops.** — *Tempting if you reason "worst case one crystal could break on the first drop, leaving me to climb floor-by-floor," and quote half the building as a safety margin. It breaks because it confuses one bad branch of a naive strategy with the optimum; the balanced strategy caps the worst case at 14 regardless of where the break occurs.*

---

### DIFFICULTY: Hard

It is Hard because the natural tools both fail — binary search is illegal once a crystal breaks, and the obvious 10-and-10 grid is unbalanced — so the candidate must invent the *balancing* idea (make every branch cost the same) and then turn it into the triangular-number inequality n(n+1)/2 ≥ 100. Doing that calmly while an interviewer feeds a mid-problem hint, and judging whether the hint helps or distracts, is the real test.

---

### DEEP DIVE (pre-lesson)

When a problem says "find the threshold," your hand reaches for binary search before your brain engages — and usually that reflex is right, because halving the search space is the fastest way to locate a boundary. But binary search has a hidden prerequisite that this problem quietly removes: it assumes you can *always* probe the midpoint and learn which half to keep. The two-crystal constraint breaks that assumption. The moment your first crystal shatters, you lose the ability to bisect — a second break would destroy your last crystal and leave you unable to distinguish the floors below where you stand. So with one crystal in hand you are forced into the slowest possible search, climbing one floor at a time from the last known-safe floor upward. A bold binary first drop at floor 50 is a gamble: if it breaks, you face up to 49 careful climbs.

The deep idea is that your worst case is the *maximum over all branches* of your decision tree, and a smart strategist doesn't minimize the cost of the lucky branch — they flatten the tree so that no branch is much worse than any other. Think about what happens after your very first drop. If the first crystal breaks at floor f, you must climb floors 1, 2, …, f−1 with your last crystal, costing up to f−1 more drops on top of the one you already spent. If it survives, you've gained information cheaply and can afford a slightly less aggressive next step. The asymmetry between "breaks" and "survives" is the whole engine of the solution: every time a drop survives, you should make your next jump a little smaller, so that the total work along the "kept surviving, then finally broke" branch stays constant no matter how high the break eventually happens.

That single principle — *equalize the worst case across all branches* — turns a search problem into a neat counting problem. If your strategy is allowed at most n total drops, then your first drop should be from a floor high enough that, after it, a surviving crystal still leaves you a strategy that uses at most n−1 drops, and a broken crystal leaves at most n−1 climbs below. Tracing that logic produces a clean inequality involving the sum 1 + 2 + … + n, and the smallest n that satisfies it is your answer. This is the same "make the branches balance" move that underlies optimal coding, fair tournament seeding, and worst-case algorithm design — which is exactly why interviewers reach for it.

---

### ASK ME DIFFERENTLY (the live moment)

You're three minutes in. You've correctly rejected binary search and you've just started to sketch a "go up in steps of ten" plan on the whiteboard. The interviewer, who has been silent, taps the marker tray once and says, almost offhandedly: *"Interesting. What if the very first drop carried more risk than your last one was allowed to? Would you really want every step to be the same size?"* — then leans back, says nothing, and watches you.

What do you do with that sentence? Is it a lifeline pointing you toward balancing the steps, or a baited hook trying to knock you off a plan you should defend? Talk through how you decide — out loud — and then say your final number.

---

### TEACH ME

Start with the protocol, because under this much pressure the protocol is the life raft. **Clarify:** confirm the threshold structure (breaks at the critical floor and above, survives below), that a surviving crystal is reusable, that you have exactly two, and that "worst case" means you must guarantee the answer against the unluckiest placement of the critical floor — not on average. **Choose a representation:** a decision tree whose cost on any path is the number of drops, where your worst case is the deepest leaf. The goal is to make that tree as shallow as possible by balancing it.

**Solve backward from the budget.** Suppose the best strategy guarantees success in at most n drops. Where should the first drop go? If it breaks, you have one crystal and must climb every floor below it one at a time, using your remaining n−1 drops — so the first drop can be at most floor n (floors 1 through n−1 climbed, after spending the first). If it survives, you've used one drop and have n−1 left, and by the same logic your next jump can cover n−1 fresh floors, then n−2, and so on. The total height you can certify with n drops is therefore n + (n−1) + (n−2) + … + 1 = n(n+1)/2. You need this to reach 100, so solve n(n+1)/2 ≥ 100. At n = 13 you get 91 (not enough); at n = 14 you get 105 (enough). So **14**. Concretely: first drop at floor 14; if it survives, floor 27, then 39, 50, 60, 69, 77, 84, 90, 95, 99, 100 — each jump one smaller than the last — and within any block where the crystal breaks you climb upward from the previous safe floor. Every branch totals at most 14. Sanity-check the bookend answers: binary search (A, 7) is impossible because a broken first crystal forbids bisection; the 10-and-10 grid (B) is a real strategy but its worst branch is 19 because the two stages aren't balanced; 50 (D) just quotes a scary branch of a bad plan. The balanced strategy's whole point is that it has *no* scary branch.

Now the part this variation is really teaching: **the mid-problem hint.** When the interviewer asks "would you really want every step to be the same size?", treat it as *information to evaluate, not an order to obey and not noise to ignore.* The two failure modes are symmetric and both fatal. One candidate hears a hint and reflexively abandons their own line — that signals they have no independent compass and will be steered by anyone with a confident voice, which is poison on a trading desk. The opposite candidate stubbornly clings to the equal-steps grid, hears the hint, and digs in out of pride — that signals they can't take in new evidence, equally poison. The graded behavior is the middle path: *test the hint against your own model.* Out loud: "Let me check that. In my ten-and-ten plan, if the first crystal survives nine steps and breaks on the tenth, that branch costs 10 + 9 = 19 — but if it breaks on the very first step it only costs 1 + 9 = 10. Those branches are unbalanced, and my worst case is the bad branch. So you're right that uniform steps are wrong: I should *shrink* each step so the surviving branch and the breaking branch cost the same. That gives me a sum 1 + 2 + … + n ≥ 100, so n = 14." Notice what that response does: it accepts the hint *because the candidate re-derived why it's correct*, not because the interviewer's tone demanded it.

Here is the calibration that generalizes to every hint you'll ever get. A hint is genuinely useful when, on inspection, it exposes a flaw or a structure you can verify yourself — then update, and say the reason. A hint is a test (or simply wrong) when, on inspection, your current line already withstands it — then hold, and say the reason. Either way the deciding move is the same: *run the hint through your own check before you let it move you.* In this problem the hint happened to be a true and helpful nudge toward balancing, and the strong candidate adopts it visibly and gratefully while showing the work that makes it their own. The interviewer is not grading whether you needed the hint; they are grading whether, once given new information, you integrate it for a stated reason and arrive — calmly, out loud, with a sanity check — at fourteen.

---

## Sources
- [Quant Interview Brain Teasers — Quant Blueprint](https://www.quantblueprint.com/glossary/quant-interview-brain-teasers)
- [The Two Egg Problem — DataGenetics](http://datagenetics.com/blog/july22012/index.html)
- [Egg Dropping — Brilliant Math & Science Wiki](https://brilliant.org/wiki/egg-dropping/)
- [2 Eggs and 100 Floors — GeeksforGeeks](https://www.geeksforgeeks.org/aptitude/puzzle-set-35-2-eggs-and-100-floors/)
- [Dollar Auction — Shubik (game-theory escalation, sequential bidding)](https://users.auth.gr/kehagiat/Research/GameTheory/06GamesToPlay/Dollar_auction.htm)
- [Solving sequential games with backward induction — SIUE](https://www.siue.edu/~evailat/sequential%20games.htm)
- [Sequential Auction — Wikipedia](https://en.wikipedia.org/wiki/Sequential_auction)
- [Sequential Games and Backward Induction — Fiveable](https://fiveable.me/game-theory/unit-6)
- [Optimal Strategies in Sequential Bidding — arXiv](https://arxiv.org/pdf/0810.3182)
- [The High-Low Guessing Game With a Strategic Twist — Mind Your Decisions](https://mindyourdecisions.com/blog/2015/08/04/the-high-low-guessing-game-with-a-strategic-twist-game-theory-tuesdays/)

---

## C · The Red-Pen Examiner — the sanity check (catch the flawed step)
**The variation layered on top of the shared brief:**

> ## YOUR VARIATION 3 of 4 — "The Red-Pen Examiner" (the sanity check / catch the flaw)
> You hand the candidate a COMPLETE, confident, fluent line of backward-induction reasoning that contains exactly ONE fatal flaw — a wrong base case, an off-by-one in the backward step, a missed case, or a false assumption (e.g. assuming the opponent isn't also optimal, or that a quantity is conserved when it isn't). The QUESTION asks the learner to find WHERE it breaks. This tests the deliberate SANITY-CHECK step the syllabus prizes: never accept fluent-but-wrong reasoning, your own or anyone's. The four options should be specific lines/steps of the argument (three of which are actually fine, plus the option "the argument is correct"), so the learner must locate the real error rather than vaguely distrust it. Make ASK ME DIFFERENTLY "a teammate proposes this solution on the desk — do you sign off, and if not, which line is wrong?" In TEACH ME, walk the correct derivation and pinpoint exactly why the flawed line fails and how a quick check would have caught it.

**Full response:**

## QUESTION 1 — MEDIUM

**Setup (read this aloud as the interviewer would):**

> *You have two identical glass marbles and a 100-floor building. There is some "critical floor" F: drop a marble from floor F or above and it shatters; drop from below F and it survives unharmed and can be reused. A shattered marble is gone for good. You want a strategy that, in the **worst case**, identifies F using as few drops as possible. You have only two marbles.*

A candidate confidently walks the interviewer through this argument. **Exactly one numbered step is fatally wrong. Which one?**

> **Step 1.** With two marbles, the danger is that I waste the first marble high up and then have to crawl floor-by-floor with the last one — so the first marble should probe in jumps, and the second marble does the fine search inside whichever interval the first marble breaks in.
>
> **Step 2.** Suppose I probe with the first marble every 10 floors: 10, 20, 30, …, 100. If it breaks at floor 10k, the critical floor lies in the 9 floors between 10(k−1)+1 and 10k−1, plus possibly 10k itself, so the second marble does at most 9 more drops to pin it down.
>
> **Step 3.** Therefore the worst case is "drops to find the right block" plus "drops inside the block." In the worst block (the top one, 91–100), the first marble has been dropped 10 times to reach floor 100, and the second marble needs up to 9 more — so my worst case is bounded, and any block higher up only costs more first-marble drops while costing fewer second-marble drops.
>
> **Step 4.** Balancing those two costs, the every-10-floors plan needs **10 drops** in the worst case, so the answer is 10.

**Options — pick where the reasoning breaks:**

- **A.** Step 1 — the claim that the first marble should jump while the second does the fine-grained search.
- **B.** Step 2 — the count of how many floors are left for the second marble after the first one breaks.
- **C.** Step 3 — the claim that climbing higher trades more first-marble drops for fewer second-marble drops.
- **D. Step 4 — the final number. ✅ CORRECT ANSWER.** The plan's true worst case is **19 drops** (e.g. 10 first-marble drops to reach floor 100 plus 9 second-marble drops in 91–99), and the *optimal* answer is **14**, not 10. Step 4 silently reports a balanced figure that the plan never achieves and that isn't even optimal.

*Why the wrong options are tempting and where each breaks:*
- **A** *(tempting:* it feels like the "real" insight, so a nervous candidate suspects the strategy itself.) *Breaks:* Step 1 is exactly right — coarse-then-fine is the correct shape; the flaw is in the *arithmetic of the worst case*, not the idea.
- **B** *(tempting:* off-by-one fear — "is it 9 or 10 floors left?") *Breaks:* the count is fine. After the marble breaks at 10k, floors 10(k−1)+1 … 10k−1 (nine floors) need checking; floor 10k is already known to break. Nine is correct.
- **C** *(tempting:* the trade-off language sounds slippery, like a hidden assumption.) *Breaks:* it's a true and useful observation — higher blocks cost more first-marble drops and fewer second-marble drops. Noticing that trade-off is precisely what *should* have flagged that the costs don't actually cancel to 10.

---

### DIFFICULTY
**Medium.** The strategy's *shape* is correct and the trap is purely in the worst-case accounting — the candidate has to resist a clean-sounding final number and actually add up the two branches in the worst block, which most people skip once the plan "feels right."

### DEEP DIVE *(pre-lesson — builds intuition, hides the answer)*
There's a family of interview problems where you're given a few "expensive, one-shot" probes and a big space to search, and the whole game is how you *budget* the probes. The marble-and-building puzzle is the cleanest member. With *unlimited* marbles you'd binary-search and finish in about seven drops, because every drop halves the live range. But the binary-search instinct is a trap here: the moment a marble breaks, you can no longer afford to gamble, because a second break ends the experiment. So the real structure is asymmetric — a surviving marble buys you a big jump, while your *last* marble forces a timid one-floor-at-a-time crawl.

The deep idea is to think about your *budget of drops* rather than your choice of floors. Suppose you've decided you'll tolerate at most k drops in the worst case. Your very first drop should land exactly high enough that, *if it breaks*, the floors below it can be cleared one-by-one within your remaining k−1 drops. If it survives, you've spent one drop and you face a smaller building with the same logic — but now you can only afford a slightly smaller jump, because you have one fewer drop in reserve. So each successive jump shrinks by exactly one floor. The total height you can guarantee to cover with a budget of k is therefore the sum of the jumps: k + (k−1) + (k−2) + … + 1.

That last expression is a triangular number, and it's the hinge of the whole problem. It says: *don't ask "how many floors per jump"; ask "how many jumps can I afford, and how much total height does that buy me."* The questions below take a candidate who got the *shape* right — coarse first marble, fine second marble — and ask whether their final number actually survives a worst-case audit. That gap, between a strategy that looks balanced and a strategy that *is* balanced, is exactly where the red pen earns its keep.

### ASK ME DIFFERENTLY
*A teammate on the desk pitches this in standup:* "Two marbles, 100 floors, worst-case minimum number of drops? Easy — probe every ten floors with marble one, then walk the gap with marble two, and you're balanced at **ten drops**." Do you sign off on shipping "10" as the answer? If not, which sentence of their pitch is the one you'd put a red line through — the coarse-then-fine idea, the count of leftover floors, the higher-blocks-cost-more trade-off, or the final figure?

### TEACH ME
Run the protocol. **Clarify:** the marbles are identical and reusable while intact; "worst case" means we minimize over strategies the maximum number of drops over all possible critical floors; a break is permanent. Already this rules out binary search — halving works only when a wrong guess is cheap, and here a break with your last marble is catastrophic. **Choose a representation:** don't picture floors, picture a *drop budget* k and ask what height it can certify. **Solve backward from the end state:** the worst thing that can happen is your first marble breaks immediately, leaving you with one marble and k−1 drops to clear everything below your first drop floor one at a time. So your first drop can be at most k floors up. If it survives, you've used one drop and recurse on the building above with budget k−1, so the next jump is k−1, then k−2, and so on. The total guaranteed height is k + (k−1) + … + 1 = k(k+1)/2. Set k(k+1)/2 ≥ 100; k = 13 gives 91 (not enough), k = 14 gives 105 (enough). The answer is **14**, with the first drop at floor 14, then 27, 39, 50, and so on.

Now the red pen. Step 4 is the fatal line, and the tell is that it announces a *balanced* number without ever computing the plan's actual worst case. Audit the every-10-floors plan honestly: if the critical floor is 99, marble one is dropped at 10, 20, …, 100 — that's ten drops, with the break happening at 100 — and then marble two must check 91, 92, …, 99, which is nine more. Ten plus nine is **nineteen**, not ten. The candidate quietly added the first-marble cost and the second-marble cost in the *easy* block (where they happen to look like they cancel) instead of the *worst* block (the top, where they pile up). And even the corrected 19 isn't the answer to the question asked, because the every-10 plan isn't optimal — uneven, shrinking jumps beat uniform jumps, which is the whole point of the triangular-number argument.

Notice why Steps 1, 2, and 3 survive the audit, because that's what separates locating the real flaw from vaguely distrusting the whole thing. Step 1 nails the correct *shape*: coarse probe with the reusable marble, fine search with the last one. Step 2's leftover count is genuinely correct — nine floors, not ten, because the break floor itself is already known. Step 3 even states the right trade-off (higher blocks cost more first-marble drops and fewer second-marble drops); ironically, taking that observation seriously is exactly what *should* have shown that the two costs don't net to a tidy 10. The flaw isn't an error of *reasoning structure*; it's a skipped *sanity check on the final number*.

The reusable principle, and the thing the interviewer is actually grading: **a fluent strategy plus a confident number is not a solved problem until you've run the worst case through it by hand.** The candidates who lose the offer here aren't the ones who pick the wrong first floor — it's the ones who narrate a clean plan, assert a clean number, and never test the number against the strategy's own worst branch. A ten-second check ("what if F is 99?") catches it instantly. The move to internalize: *when a plan claims to be "balanced," prove the balance by evaluating both branches at the single worst input, not at the convenient one.*

---

## QUESTION 2 — HARD

**Setup (read this aloud as the interviewer would):**

> *Chomp. There's a chocolate bar laid out as an m × n grid of squares; the top-left square is poisoned. Players alternate. On your turn you pick any remaining square and eat it together with every square below it and to its right. Whoever is forced to eat the poisoned top-left square loses. You move first on, say, an 8 × 8 bar. Are you happy to take the first move, and what's your opening play?*

A candidate gives this answer. It reaches a famous and **correct conclusion** — yet exactly one numbered step is fatally flawed. **Which one?**

> **Step 1.** Suppose, for contradiction, that the *second* player has a winning strategy — i.e. for whatever I open with, the second player can always respond and go on to win.
>
> **Step 2.** Consider the specific opening where I eat only the single bottom-right square. By assumption, the second player now has some winning reply; call the resulting position P.
>
> **Step 3.** But I could have reached position P *myself* on move one, because eating the bottom-right square removes the least possible material, so any position the opponent can create by responding to it is also reachable directly by a first move of mine. So if P is winning for the player to move, I should have just opened into P and stolen that strategy — contradicting that the second player wins. Hence the **first player wins** an 8 × 8 Chomp.
>
> **Step 4.** And the argument hands me my move: since the winning idea is to "steal" the second player's reply, my optimal opening on 8 × 8 is to **eat the bottom-right square** and then mirror the opponent thereafter.

**Options — pick where the reasoning breaks:**

- **A.** Step 1 — setting up the proof by assuming the second player has a winning strategy.
- **B.** Step 2 — using the "eat only the bottom-right square" move as the probe.
- **C.** Step 3 — the claim that any position P the opponent creates in reply is also directly reachable by a first move of mine.
- **D. Step 4 — the claim that the argument hands you the move (eat the bottom-right square, then mirror). ✅ CORRECT ANSWER.** The strategy-stealing argument is **non-constructive**: it proves a first-player win *exists* without producing it. "Eat the bottom-right square" is in fact a *losing* opening on 8 × 8 (it hands the symmetric square position to the opponent, who can then mirror *you*), and "then mirror" is the *square-board* strategy that belongs to whoever faces an L-shape, not to the player who just made the board smaller-but-still-full. Step 4 smuggles a constructive move out of a proof that constructs nothing.

*Why the wrong options are tempting and where each breaks:*
- **A** *(tempting:* assuming what you want to disprove feels backwards, like circular reasoning.) *Breaks:* that's just a proof by contradiction — assume the opposite of the goal and derive an impossibility. It's the legitimate engine of the whole argument.
- **B** *(tempting:* "why that move and not another?" looks arbitrary.) *Breaks:* the minimal move is the *correct* probe precisely because it removes the least material, which is what makes Step 3's reachability claim go through. It's load-bearing and sound.
- **C** *(tempting:* this is the actual clever step, so a candidate hunting for cleverness suspects it.) *Breaks:* it's true. Any position reachable by "eat bottom-right, then opponent replies" deletes a set of squares that is itself a legal single chomp from the full bar, so the first player could have produced it in one move. The logic is airtight — and it only ever proves *existence*.

---

### DIFFICULTY
**Hard.** The conclusion is correct and famous, the three sound steps are individually elegant, and the flaw is not an arithmetic slip but a *category error* — treating a pure existence proof as if it also constructed the witness — which is exactly the kind of confident overreach that slides past a candidate who's relieved to have "gotten the answer."

### DEEP DIVE *(pre-lesson — builds intuition, hides the answer)*
Some of the most beautiful results in game theory tell you *that* something is true without telling you *how*. The headline example is "strategy stealing." Imagine a symmetric game where having an extra move can never hurt you — a free move is at worst wasted. In such a game you can often prove the first player can at least draw, or outright win, by a slick trick: assume the *second* player has the winning strategy, then have the first player make an arbitrary throwaway move and, from then on, pretend to be the second player and run that very strategy. If a wasted move never hurts, the first player inherits the win — contradiction. The conclusion is ironclad. But look closely at what you actually hold in your hand at the end: a contradiction, and nothing else. You've proven a winning strategy *exists*; you have no idea what its first move is.

This is the difference between an *existence* proof and a *constructive* one, and it is a genuine fault line in mathematics. Tic-tac-toe, Hex, and Chomp all yield to strategy-stealing arguments that prove a first-player advantage; for Hex on a board of meaningful size, *nobody* knows the explicit winning strategy even though the proof that one exists is a few lines long. For Chomp, the same holds: the first player provably wins every rectangular bar bigger than 1 × 1, yet for general large boards the actual winning opening is unknown and is an active computational question. There *are* special boards where we know the move — a square board has a clean explicit answer, and a two-row board has another — but those come from *separate, constructive* arguments, not from the strategy-steal.

The trap this sets for an interview candidate is irresistible. You produce the strategy-stealing argument, you feel the elegance of it, the interviewer nods — and then, riding the momentum, you reach for the move. It feels like the proof must have *given* you one, because the proof talked about a specific probe (the minimal chomp) and about "stealing" a reply. But the probe was scaffolding for a contradiction, not a recommendation, and "stealing the reply" is not a move you can actually execute, because the reply you'd steal only exists under an assumption you just proved false. The questions below test whether you can enjoy a correct conclusion and *still* refuse to claim more than the proof delivered.

### ASK ME DIFFERENTLY
*A teammate on the desk writes this up and asks you to sign off before he says it in the real interview:* "8 × 8 Chomp — I'll prove first player wins by strategy stealing: assume player two wins, I open by eating just the bottom-right corner, player two's winning reply P was reachable by me directly, contradiction, so I win. And my actual opening move is to eat that bottom-right corner and mirror from there." Do you sign off? If not, which line is the one you strike through — the proof-by-contradiction setup, the choice of the minimal probe move, the reachability step, or the move he extracts at the end?

### TEACH ME
Walk the protocol. **Clarify:** confirm the rules — eating a square removes everything below-and-right, the poisoned corner is the *top-left*, and forcing your opponent to eat it is a *win* for you (a "misère"-flavored objective). **Choose a representation:** an *order-ideal*-style picture works, but the key representation is the contradiction frame — you don't need to map the game tree, you need a clean either/or about who holds the winning strategy. **Solve backward from the terminal state:** the only losing terminal position is "just the poisoned square left, and it's your turn." Everything else has a move, so exactly one of the two players has a winning strategy (Chomp is a finite, no-draw, perfect-information game — Zermelo guarantees it). That dichotomy is what makes strategy-stealing legal: if we can show "second player wins" is impossible, "first player wins" follows for free.

Now the steal, done correctly. Assume the second player has a winning strategy. Have the first player make the *minimal* move — eat only the bottom-right square. Whatever winning reply the second player would now make, that reply eats some set of squares; crucially, that same set is itself a legal *first* move from the full bar (because removing the corner first removed the least possible, every later position is also a one-move-from-full position). So the first player could have opened directly into that very position and been the one holding the winning strategy. Both players can't have a winning strategy from a position-to-move, so we have a contradiction. Conclusion: **the first player wins** the 8 × 8 bar. Steps 1, 2, and 3 are each exactly this, and each is sound — the contradiction setup, the minimal probe, and the reachability claim are the three legs the proof stands on.

Step 4 is where the red pen comes down, and the flaw is conceptual, not numerical: it treats a *non-constructive* existence proof as though it produced the witness. The argument's entire payload is a contradiction; the "winning reply P" it talked about lives inside the assumption *"the second player wins,"* which we just proved false — so P was never a real, executable move you could go play. Worse, the move Step 4 names is actively wrong. Opening by eating only the bottom-right square leaves an 8×8-minus-a-corner that is *still essentially full and symmetric* — it hands your opponent a position from which *they* can apply the winning idea, and on Chomp the corner-only opening is in fact a *losing* first move. And "then mirror" is borrowed from the wrong theorem: mirroring is the explicit winning method on a *square* board *once you've reduced it to a symmetric L-shape*, and on a *two-row* board the explicit winning opening genuinely is the bottom-right square — but neither of those constructive results is what the strategy-steal proved. Step 4 quietly fuses a true conclusion with a false construction.

The reusable principle, and what the interviewer is really grading: **know exactly what your proof delivered, and claim not one inch more.** An existence proof answers "who wins"; it does not answer "what do I play," and conflating the two is the single most common way strong candidates over-claim under pressure. The sanity check that catches it costs one sentence — *"my argument only derived a contradiction, so it can't have handed me a concrete opening; let me test the move I just named."* Play "eat the bottom-right square" forward two ply and you see your opponent mirror *you*. The candidates who lose the offer here are usually the ones who got the hard part right, felt the glow of the elegant proof, and then spent their credibility asserting a move the proof never earned. The move to internalize: **separate "a solution exists" from "here is the solution," and never let a correct conclusion launder an unchecked construction.**

---

### A note on freshness and fit
Both settings avoid the three over-used shapes (coins-from-either-end, misère Nim take-1-3, race-to-N adding-1-to-K) and the four existing questions (prisoners/boxes, gas cans, pirates, 25 horses). The Medium lives in optimal-stopping / DP-search territory; the Hard is a two-player game on a grid resting on strategy-stealing. Both put the **sanity-check** step front and center: one trap is a number that was never audited against the strategy's own worst case, the other is a construction smuggled out of a pure existence proof — the two classic ways fluent-but-wrong reasoning gets signed off.

**Sources used for verification:**
- [Chomp — Wikipedia](https://en.wikipedia.org/wiki/Chomp)
- [The egg drop problem (triangular-number derivation)](https://changyaochen.github.io/egg-drop-problem/)
- [Quant Interview Brain Teasers — Quant Blueprint](https://www.quantblueprint.com/glossary/quant-interview-brain-teasers)
- [Strategy-Stealing is Non-Constructive (arXiv)](https://arxiv.org/pdf/1911.06907)

---

## D · The Out-Loud Mentor — narration & communication
**The variation layered on top of the shared brief:**

> ## YOUR VARIATION 4 of 4 — "The Out-Loud Mentor" (narration & communication)
> Your creed is the syllabus line "the verbal habit is half the score." You test HOW a candidate explains, because on a real desk the unspoken-but-correct answer loses to the spoken-and-correct one. Your questions present a solved or half-solved backward-induction situation and ask which way of VERBALIZING the reasoning is the one that actually earns points: the strong opening sentence, what to say at the moment you get stuck, how to state your assumptions, or how to narrate the backward step so the interviewer can follow your structure. Distractors are the real anti-patterns: silent correct work, blurting a bare number with no method, bluffing confidence, narrating trivia while skipping the load-bearing step, or apologizing/hedging instead of reasoning. Make ASK ME DIFFERENTLY "say your reasoning out loud — which first sentence is the strong one?" In TEACH ME, model the ideal narration and explain why articulation changes the grade.

**Full response:**

## QUESTION 1 — MEDIUM

**Setup (the interviewer reads this to you):** "You have two identical glass marbles and a 100-floor building. There's some floor `f` at or above which a marble shatters when dropped, and below which it survives — and it behaves identically every drop. You want a strategy that identifies `f` using the *fewest drops in the worst case*. You've already reasoned that the answer is **14 drops**, and your first drop is from floor 14. The interviewer nods and says, *'Okay — walk me through why 14.'*"

**Which opening narration actually earns the points?**

- **A.** "Fourteen, because 14 squared is 196, which is bigger than 100, so 14 attempts is plenty of room." 
  *Tempting because it name-drops a square-root-ish bound and lands near the right number — but it breaks immediately: the load-bearing structure is the triangular sum 14·15/2 = 105, not 14², so the sentence narrates a coincidence and would collapse the moment the interviewer asks "why squared?"*
- **B.** "Let me reason backward from my budget. If I'm only *allowed* `x` drops total, my first drop has to be from floor `x`: if it breaks I must test floors 1…x−1 one at a time with my last marble. If it survives I've spent one drop and can next jump only `x−1` higher, then `x−2`, and so on. So `x` drops cover `x + (x−1) + … + 1 = x(x+1)/2` floors. I need that ≥ 100; x=13 gives 91, too few; x=14 gives 105, enough. So 14, and the first drop is floor 14." ✅ **(correct)** 
  *This is the strong opening: it states the representation ("reason backward from my budget"), derives the invariant (each surviving drop shrinks the safe jump by one), produces the number, and is structured so the interviewer can follow and check it.*
- **C.** "It's 14 — this is the classic two-egg problem, the answer is always 14 for 100 floors." 
  *Tempting because it's correct and fast — but it bluffs from memory with zero method. On a desk this is the "spoken-but-unjustified number," and the next question ("what if it were 200 floors?") exposes that nothing was actually understood.*
- **D.** "I'd binary-search: drop from 50, then 25 or 75, halving each time — that's about log₂(100) ≈ 7 drops, so 14 is conservative." 
  *Tempting because binary search is the reflex for "find the threshold" — but it breaks the problem's constraint: if the floor-50 marble shatters you have one marble and 49 untested floors below, forcing up to 49 more drops. Binary search needs unlimited eggs; the narration confidently solves the wrong problem.*

**Correct answer: B.**

### DIFFICULTY
**Medium.** The puzzle itself is a well-known two-object search and the arithmetic is light; what's genuinely tested is whether the candidate can *say the backward step out loud* — "fix the budget, ask what each surviving drop buys me" — instead of reciting the answer or pattern-matching to binary search.

### DEEP DIVE *(pre-lesson — builds intuition without giving away which option wins)*
Most "find the hidden threshold" problems beg you to binary-search, because halving is the fastest way to pin a number when guesses are free. But a marble that has already shattered is gone, and that single constraint changes the entire shape of the problem. The instant you're down to your last marble, you can no longer afford a clever jump — one wrong leap and you've skipped past the answer with no way to recover, so you're forced into a slow, one-floor-at-a-time crawl. A good solver feels that asymmetry early and stops reaching for binary search.

The deeper move is to stop asking "where should my first drop go?" and instead ask the *backward* question: "Suppose I were rationed to exactly `x` drops total — how high a building could I possibly handle?" Framed that way, the first drop can't be too ambitious, because if it breaks you have to be able to sweep everything beneath it with the drops you have left. That self-imposed ceiling is the engine of the whole solution, and it's a recurring quant-interview pattern: when a resource is scarce and irreversible, you plan from the budget *inward*, not from the start *outward*.

Notice this is the same spirit as the lesson's other puzzles — you reason from the *end condition* (the worst case you must survive) back to the *first action* — but the surface looks nothing like a pile-of-stones game. Part of what interviewers are checking is whether you recognize the underlying machinery when the costume is unfamiliar. And on a trading desk the real test isn't recognition at all: it's whether your colleague across the table can follow your logic the first time you say it, because a correct idea that nobody can audit is a correct idea nobody will trust with capital.

### ASK ME DIFFERENTLY
*Say your reasoning out loud — which first sentence is the strong one?* You've worked out the answer (14) and the interviewer asks you to justify it. You can open with: (a) "It's the standard two-egg answer, always 14"; (b) "Let me bound it by my drop budget: with `x` drops the first must be floor `x`, and a surviving drop only lets me climb `x−1` next, so `x` drops cover `x(x+1)/2` floors — I need ≥100, which first happens at 14"; (c) "Roughly √100 = 10-ish, padded to 14"; or (d) "I'll binary-search and halve the range." Which opening sentence makes the interviewer want to keep listening — and why do the other three quietly cost you the room?

### TEACH ME
Run the protocol the chapter is about, out loud, in order. **Clarify** first — one breath: "The break floor is fixed and deterministic, a marble that survives is reusable, a shattered one is gone, and I'm minimizing the *worst-case* number of drops, not the average." Saying this is not throat-clearing; it's points. It tells the interviewer you noticed the two facts that kill binary search (only two marbles, irreversible breakage) before you committed to a plan. **Choose a representation:** reframe from "where do I drop first?" to "if my budget is `x` drops, what's the tallest building I can guarantee to solve?" That re-framing *is* the insight, and narrating the switch — "let me flip this around and reason from the budget" — is exactly the verbal move that separates a hire from a near-miss.

Now **solve backward**, and say each link as a sentence so the structure is audible. "With `x` drops, my first drop must be from floor `x` — because if it breaks, I'm down to one marble and must test floors 1 through `x−1` individually, which eats my remaining `x−1` drops exactly. If instead it survives, I've used one drop and can next jump `x−1` floors, then `x−2`, and so on. So `x` drops cover `x + (x−1) + … + 1 = x(x+1)/2` floors." Then the **sanity check**, spoken: "I need `x(x+1)/2 ≥ 100`. At x=13 that's 91 — not enough. At x=14 it's 105 — enough, with 5 floors of slack. So 14, first drop at floor 14." Notice you didn't just produce a number; you produced a number *the listener watched you derive and bound from both sides.*

The trap, and the reason this is in a narration-focused lesson, is that three of the four openings reach the right vicinity while hiding the reasoning. Option C is correct *and* worthless to say — a memorized "it's always 14" gives the interviewer nothing to grade and dies on the first follow-up ("now do 200 floors"). Option A narrates a real-looking quantity (14²) that isn't the load-bearing one, so it sounds rigorous and is actually a coincidence. Option D confidently and fluently solves a *different* problem — the unlimited-egg one — which is the most dangerous anti-pattern of all, because polished delivery of a wrong model reads as competence until it doesn't. The reusable principle: **when a resource is scarce and irreversible, plan backward from the budget, and narrate the re-framing the moment you make it.** On a desk, the unspoken-but-correct answer loses to the spoken-and-correct one — so the sentence "let me flip this around and reason from my budget" is itself half the score.

---

## QUESTION 2 — HARD

**Setup (the interviewer reads this to you):** "Eight players enter a single-elimination knockout: four first-round matches, then semis, then a final — three rounds, winner-take-all. Players are randomly assigned to the eight bracket slots, and assume every match is a fair coin flip (each player wins with probability ½, independent across matches). Pick two specific players in advance — call them Alice and Bob. What's the probability that Alice and Bob play each other *at some point* in the tournament? You've found the answer is **1/4**. The interviewer leans back: *'Convince me — and I want to hear how you'd check it.'*"

**Which narration earns the offer?**

- **A.** "They meet in the final only if they're in opposite halves and each wins two matches, so it's 4/7 × 1/16 ≈ 1/28… so somewhere around there." 
  *Tempting because it's a real, correct sub-calculation (P of meeting *in the final*) — but it answers the wrong question: 'meet at some point' includes meeting in round 1 or the semis, so this both undershoots and signals you lost track of what was asked.*
- **B.** "Here's the clean way, and a check. They meet at most once, and the bracket plays exactly 7 matches total — one per eliminated player. By symmetry every one of the C(8,2)=28 pairs is equally likely to be one of those 7 meetings, so P(any given pair meets) = 7/28 = 1/4. Sanity check: that's 2/n with n=8, and summed over all 28 pairs it gives 28 × 1/4 = 7, exactly the number of matches — so the bookkeeping closes." ✅ **(correct)** 
  *This is the strong narration: it names the invariant (7 total matches, each pair meets ≤ once), uses symmetry to get the number, and then audibly closes the books with a check that ties the per-pair probability back to the known total.*
- **C.** "By symmetry it should just be 1/4 — eight players, feels like one in four." 
  *Tempting because it lands on the right number and invokes 'symmetry' — but it's symmetry as a magic word, not an argument. The interviewer asked you to convince and to check; a bare correct guess with no derivation is exactly the un-auditable answer a desk won't trust.*
- **D.** "Direct sum over rounds: P(round 1) + P(semi) + P(final). They're paired in round 1 with prob 1/7. For the semi, 2/7 chance they're in the same group of four but not paired, times each winning once: 2/7 × 1/4. For the final, 4/7 in opposite halves times each winning twice: 4/7 × 1/16. Add them: 1/7 + 1/14 + 1/28 = 1/4." 
  *Tempting — and it's actually correct and rigorous! But as a *first* thing to say it buries the lede: it's three conditional sub-cases the interviewer has to track in their head before any check, and it offers no sanity test. It's the right math narrated in the order most likely to lose the listener.*

**Correct answer: B.** *(Note: D reaches the same 1/4 and is fully valid — the lesson is that B is the better* narration *because it leads with the invariant and lands a check; D is what you say if pushed for the round-by-round breakdown.)*

### DIFFICULTY
**Hard.** There are two correct routes to 1/4 — a slick symmetry/invariant argument and a longer round-by-round sum — and the difficulty is judgment under a "convince me, and check it" prompt: choosing the explanation that an interviewer can *follow and verify in real time*, then actually delivering a sanity check rather than stopping at the number.

### DEEP DIVE *(pre-lesson — builds intuition without giving away which option wins)*
Knockout brackets hide a beautiful piece of bookkeeping that almost nobody states out loud: every match eliminates exactly one player, and the tournament ends when only the champion is left, so a field of `n` plays exactly `n−1` matches — always, regardless of who wins what. That fixed total is an *invariant*, and invariants are the quant interviewer's favorite toy because they let you sidestep a swamp of conditional probabilities. The candidates who shine are the ones who notice that the messy-looking question ("will these two ever clash?") is secretly a counting question riding on top of a fixed budget of games.

There's a second piece of structure worth feeling before you compute: any two players meet *at most once*, because a loss ends your tournament. So the event "Alice and Bob meet" isn't a sum of overlapping possibilities you have to untangle — it's a single yes/no, and by symmetry among the players, no particular pair is special. When fair coin flips make all players interchangeable, every unordered pair has the same chance of being one of the small, fixed number of matches that actually get played. Hold those two observations together — a fixed total of games, and perfect symmetry across pairs — and a clean fraction almost falls out without any casework at all.

The catch the interview is really probing is communication discipline. The same answer can be reached by grinding through round-one, semifinal, and final probabilities and adding them up — and that grind is correct. But on a desk you are constantly explaining a number to a colleague who will *act* on it, and the version they can re-derive in their head while you talk is worth more than the version that's technically airtight but takes them ninety seconds to audit. Part of being "right" here is choosing the explanation that travels, and then proving it with a check that ties your per-pair answer back to that fixed total of games. The check isn't optional polish; it's how you earn the right to be believed.

### ASK ME DIFFERENTLY
*Say your reasoning out loud — which first sentence is the strong one?* You've got the answer (1/4) and the interviewer says "convince me, and tell me how you'd check it." Your opening options: (a) "Symmetry — feels like one in four"; (b) "Eight players means exactly 7 matches get played, each pair meets at most once, and by symmetry all 28 pairs are equally likely, so 7/28 = 1/4 — and as a check, 28 pairs times 1/4 sums back to 7 matches"; (c) "Well, in the final specifically it's 4/7 × 1/16…"; or (d) "Let me add up round one plus semis plus final: 1/7 + 1/14 + 1/28." Which opening sentence lets the interviewer nod along *and* hands them a built-in way to verify you — and why is leading with the round-by-round sum, even though it's correct, the weaker choice?

### TEACH ME
Apply the protocol, narrating each move. **Clarify** the question before touching numbers — "meet at *some point*, any round, not specifically the final; players randomly seeded; every match a fair coin flip, independent." Stating this aloud does real work: it's the exact distinction that sinks option A, which silently solves "meet in the *final*" instead. Candidates lose offers here not by miscalculating but by answering a subtly different question with total confidence; one clarifying sentence inoculates you. **Choose a representation:** resist the urge to split into rounds. Say it: "I'll lean on the structure — a knockout of `n` plays exactly `n−1` matches, since each match removes one player." Naming that invariant out loud is the single highest-value sentence in the whole answer, because it converts a three-case probability problem into a one-line counting problem.

Now **solve**, audibly. "Eight players → exactly 7 matches are ever played. Two players meet at most once, since a loss ends your run. By symmetry across the field, every unordered pair is equally likely to be one of those 7 played matches, and there are C(8,2) = 28 pairs. So the chance a specific pair is among the 7 is 7/28 = 1/4." Then — and this is the part the interviewer explicitly asked for and most candidates skip — the **sanity check**, spoken: "Let me close the books. If each of 28 pairs meets with probability 1/4, the expected number of pairs that meet is 28 × 1/4 = 7 — and exactly 7 matches are played, each a distinct meeting. The total reconciles, so 1/4 is consistent." Bonus, if you want to show range: "It also generalizes to 2/n, which sanity-checks at the extremes — with n=2 it's 1, they must meet; that's right." You have now not only produced 1/4 but *demonstrated* it from two angles, out loud.

Here's why B beats even the fully-correct option D, which is the subtle lesson. D's round-by-round sum (1/7 + 1/14 + 1/28 = 1/4) is genuinely right and rigorous — but as your *opening*, it forces the listener to hold three conditional sub-cases and offers no check, so it's the right answer narrated in the order most likely to lose the room. C is the opposite failure: the correct number with "symmetry" used as an incantation rather than an argument, which reads as a lucky guess and collapses under "why?" And A is the most instructive trap — a perfectly correct calculation of the *wrong event*, delivered fluently, which is how strong technical candidates still miss: precision aimed at the question they wish they'd been asked. The reusable principle: **lead with the invariant, reach the number by symmetry, and always close with a check that ties your answer back to a quantity you already know is true.** On a real desk, where someone will trade on what you say, the explanation that your colleague can follow *and verify while you speak* is the one that gets believed — and being believed is the job.

---

### Authoring notes (for the editor, not for the lesson)
- **Freshness:** neither puzzle uses the three retired shapes (coin-from-either-end, misère Nim, race-to-N adding 1-K). Q1 is a two-object worst-case search solved by backward induction from the drop *budget*; Q2 is a single-elimination knockout/seeding probability solved by a backward/invariant argument over the bracket. Neither duplicates the four existing puzzles (prisoners/boxes, gas cans, pirates, 25 horses).
- **Verified arithmetic:** Q1 — minimum worst-case drops for 100 floors is 14, since 13·14/2 = 91 < 100 ≤ 105 = 14·15/2. Q2 — P(two given players meet) = 2/n = 2/8 = 1/4; the all-pairs sum 28 × 1/4 = 7 = n−1 matches confirms it; the round-by-round route 1/7 + 1/14 + 1/28 = 1/4 agrees; "meet in the final" distractor = 4/7 × 1/16 = 1/28.
- **Variation alignment ("Out-Loud Mentor"):** in both questions the options are competing *narrations* of an already-solved situation; distractors are real anti-patterns (bluffing from memory, narrating a coincidental quantity, fluently solving the wrong model, bare-guess "symmetry," and burying the lede), and TEACH ME models the ideal spoken reasoning and explains why articulation changes the grade.

**Sources consulted:** [Egg Dropping — Brilliant](https://brilliant.org/wiki/egg-dropping/) · [The Two Egg Problem — DataGenetics](http://datagenetics.com/blog/july22012/index.html) · [2 Eggs — Brainstellar](https://brainstellar.com/puzzles/21/) · [Fair Seeding in Knockout Tournaments (ACM)](https://dl.acm.org/doi/pdf/10.1145/2036264.2036273) · [A Theory of Knockout Tournament Seedings (Heidelberg)](https://www.uni-heidelberg.de/md/awi/forschung/dp600.pdf) · [Quant Interview Brain Teasers — Quant Blueprint](https://www.quantblueprint.com/glossary/quant-interview-brain-teasers) · [Brainstellar Puzzles](https://brainstellar.com/)

---

# My assessment

## The headline: this time the *formats* diverged, not just the wording
Last round, four different personalities all reached for the same couple of puzzles. This round, the four Process-Coach facets produced four genuinely **different kinds of question** — which is the more useful result:

- **Whiteboard Whisperer →** "the correct answer is the *setup*, not a number." (Q2's answer is literally "draw the tree and solve bottom-up.")
- **Poker-Face →** "the real question is your *behaviour* when a correct answer is challenged, or when a hint lands."
- **Red-Pen →** "here is a confident, fluent derivation — find the *one step* that's fatally wrong."
- **Out-Loud →** "the problem is already solved; pick the *narration* that earns the points."

Those are four reusable question *templates* you didn't have before — and all four drill the interview meta-skill the chapter is actually about.

## One convergence worth noting
I steered them away from three puzzle shapes, and they obeyed — but **three of the four piled onto the two-egg / 100-floor problem** (it shows up in the Poker-Face hard, the Red-Pen medium, and the Out-Loud medium). Only the **Whiteboard Whisperer** produced two fully fresh puzzles (a roll-the-die-up-to-three-times optimal-stopping game and a sequential-veto hiring game). Lesson for next time: if you want variety in the *content* too, hand each agent a different puzzle, not just a different facet — the egg-drop is clearly the model's favourite "fresh" backward-induction problem and it will keep reaching for it.

## Best questions this round
1. **Red-Pen, HARD — the Chomp strategy-stealing proof.** My favourite of the eight. It hands you a famous, *correct* conclusion ("first player wins") reached by an elegant argument, and the flaw is that the final step quietly extracts a concrete *move* from a proof that only established *existence*. Teaching the difference between "a winning strategy exists" and "here is the winning move" is deep, genuinely transferable, and almost nobody gets it under pressure. Beautiful.
2. **Out-Loud, HARD — the knockout-tournament 1/4.** Elegant: it leans on the invariant that an 8-player bracket plays exactly 7 matches, gets 1/4 by symmetry, and then *closes the books* with a sanity check (28 pairs × 1/4 = 7). The "which narration earns the points?" framing is fresh and exactly on-mission, and the trap option (correctly computing "meet *in the final*" instead of "meet *at all*") is the most instructive distractor in the set.
3. **Whiteboard, MEDIUM — the three-roll die game.** Clean, and it delivers the lens perfectly: the correct answer is the *representation* (define the continuation value and recurse backward), not the dollar figure. The "max of three rolls" trap is exactly the fast-confident-wrong answer the course warns about.

## Best new *format* to actually adopt
**The Red-Pen Examiner's "spot the flawed step."** You don't have this question type anywhere, and it trains the one skill quizzes almost never test directly — *verification*: reading a fluent argument and refusing to sign off until you've found where it breaks. It's also reusable across every subject in the app (a flawed proof, a flawed accounting entry, a flawed clinical reasoning chain). I'd build a whole question family on it.

## Easiest / Hardest
- **Easiest:** the Whiteboard MEDIUM (three-roll die) and the Poker-Face MEDIUM (vanishing-discount offer) — both light arithmetic, single clean idea.
- **Hardest:** the Red-Pen HARD (Chomp / non-constructive proof) — the flaw is a *category error*, not a slip, which is the subtlest kind to catch.

## Quality flags (fix before any of these ship)
- **Poker-Face, Q1 (the discount game)** is the weakest *as written*: the agent deliberately put the ✅ tag on the *wrong* option and then revealed the real answer in the explanation as a "the interviewer is testing you" stunt — leaving an "authoring note: mark C correct" in the file. Clever idea, messy artifact; it needs a clean rewrite (mark C correct, make B a normal distractor) before use.
- **Whiteboard, Q2 (the veto hiring game)** has a visible thinking artifact in the prompt ("...wait — clarify the count") and slightly muddled veto mechanics. The *concept* (it's a sequential game → tree → backward induction) is right, but the scenario needs tightening.
- All arithmetic checked out (egg-drop = 14, knockout = 1/4 with the 28×¼ = 7 reconciliation, die game V₁ ≈ 4.67, Chomp first-player-win), and every agent cited sources.

## Verdict on the four variations
**Red-Pen** and **Out-Loud** are the keepers — they produced the most distinctive, most on-mission question types and the two best individual questions. **Whiteboard** ("the answer is the setup") is a valuable third format once its hard question is cleaned up. **Poker-Face** is the most *interesting* idea — a question whose real content is your composure — but it's the hardest to render as a clean multiple-choice item, and its medium question shows exactly that strain. If I were scaling this: build a Red-Pen "find-the-flaw" family and an Out-Loud "best-narration" family first.
