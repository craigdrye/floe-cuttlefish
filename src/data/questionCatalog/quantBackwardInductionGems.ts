// Quant Interview Core · Chapter 1 "Brain Teasers" · Lesson 1 "Backward Induction"
// In-app candidate questions (generated:true) for rating. Field mapping for the trainer:
//   lesson  -> the no-spoiler "Deep Dive" (shown in "Before you dive" / Deep dive button)
//   solution-> the full "Teach Me" (shown as the post-answer "Worked solution")
//   alternatePrompts.plain -> "Ask differently" rephrase
// Mentor hints live in BACKWARD_INDUCTION_GEM_MENTOR_HINTS (tagMentorHint overrides the
// authored mentorHint by id, so hints must be registered there in quant.ts).
//
// Current set (after the first rating pass): the two top-rated Whiteboard questions
// (19831, 19832) and the Out-Loud pair (19837, 19838) from round 2, plus the first four
// questions from round 1 — Desk Quant (19841, 19842) and Sensei Cuttle (19843, 19844).
// The low-rated Poker-Face / Red-Pen questions were removed.
import type { Question } from './types'
import { makeQuestionBank } from './base'

export const BACKWARD_INDUCTION_GEM_IDS: number[] = [
  19831, 19832, 19837, 19838, 19841, 19842, 19843, 19844,
]

export const BACKWARD_INDUCTION_GEM_MENTOR_HINTS: Record<number, string> = {
  19831: 'Do not chase the best possible roll. Ask instead: "what is rolling again worth?" — and stop only when the number in front of you beats that continuation value.',
  19832: 'A first mover\'s best choice is defined by the reply it provokes. Pin down what the LAST mover does in every case, then choose backward from there.',
  19837: 'Which opening sentence lets the interviewer follow AND verify you? Reach for the structure that derives the number, not the one that recites or pattern-matches it.',
  19838: 'Lead with the invariant a listener can re-check in their head: how many matches does an 8-player knockout play, and how does that pin down the chance two players meet?',
  19841: 'Don\'t reason forward about who is "ahead" — your opponent always replies. Work backward from the win: which numbers, handed to your opponent, force them to set you up?',
  19842: 'Stop staring at the coin values and stare at the positions. Number the slots 1-12 and notice which colour of slot is always on offer when it is your turn.',
  19843: 'Don\'t plan forward from the empty tower. Plan backward from 40: which heights would you hate to be standing on when it is your turn? Make your opponent stand on the first one.',
  19844: 'Don\'t recite the famous "leave a multiple of 4" rule. Re-walk the endgame for THIS curse: if you are handed 1 pearl, are you safe or doomed? Build backward from there.',
}

const BACKWARD_INDUCTION_GEM_DEFS: Parameters<typeof makeQuestionBank>[1] = [
  // ───────────────────────── Whiteboard Whisperer (round 2, rated 4/5) ─────────────────────────
  {
    id: 19831,
    chapter: 'Brain Teasers',
    title: 'The Three-Roll Game',
    generated: true,
    challengeRating: 5,
    prompt:
      'You may roll a fair six-sided die up to three times. After each roll you may stop and be paid that roll\'s value in dollars, or roll again — but rolling again forfeits the number you just had. If you reach the third roll you must take whatever it shows. Before naming a dollar figure, what is the single best way to SET THIS UP?',
    correct:
      'Work backward: treat "the value of rolling again" as your stopping threshold, and build it up from the last roll (V₃ = 3.5, then V₂ = E[max(face, 3.5)], then V₁).',
    wrong: [
      [
        'Compute the expected value of the maximum of three rolls, since you "get three tries and keep the best."',
        'You must decide before seeing future rolls and you forfeit a number when you reroll — you can never retroactively keep the best, so max-of-three counts a hindsight you do not have.',
        'Replace "best in hindsight" with "best given a decision rule you fix in advance."',
      ],
      [
        'Pick one fixed rule up front — "always stop on a 4, 5, or 6" — and compute its average payoff.',
        'A single cutoff for every roll is wrong: the optimal threshold is higher when more rolls remain, so a fixed rule leaves money on the table.',
        'Expect the cutoff to drift as the end approaches; do not freeze it.',
      ],
      [
        'Average the one-roll, two-roll, and three-roll values, since you have three chances.',
        'The three stages are not alternative games you average over — they are nested continuation values, and only the value at the FIRST decision point is the answer.',
        'These stack inside each other; you want the top of the stack, not their mean.',
      ],
    ],
    lesson:
      'Optional-stopping problems are everywhere in trading: every open position is a standing question — take the price in front of me, or wait for a better one and risk a worse? The trap is that the value of waiting is not the value of the best future outcome; it is the value of playing the rest of the game well, averaged over everything that might happen. You act on what is in front of you knowing only the statistics of what comes next.\n\nThe clean move for any "act now or continue" setup is to ask a slightly strange question: if I were forced to walk away from this decision and just live with the rest of the process, what would that be worth? Call that the continuation value. The decision then collapses to one line — stop if what is in front of you beats the continuation value, otherwise continue — and the continuation value is itself just the answer to a smaller version of the same problem, so you can compute it from the end backward. Notice the threshold need not be the same at every stage: with many chances left you can afford to be picky.',
    solution:
      'The right representation is states indexed by what remains, with each state\'s value = "what I expect to walk away with if I play optimally from here." With one roll left there is no choice, so V₃ = the plain average, 3.5. With two left, you keep any face above 3.5 (4, 5, 6) and otherwise fall back on 3.5, giving V₂ = E[max(face, 3.5)] = 4.25. With three left, your threshold rises to 4.25, so you keep only 5 and 6, giving V₁ = E[max(face, 4.25)] = 14/3 ≈ $4.67. The trap is hearing "best of three" and computing the maximum of three rolls (≈4.96) — a fast, confident, wrong number that ignores the forfeiture rule. Sanity-check that the stage values rise with optionality (3.5 < 4.25 < 4.67) and that the answer sits between the one-shot value 3.5 and the unattainable hindsight max 4.96. The reusable principle: in any stop-or-continue problem, compute the continuation value from the terminal state backward — the same idea that prices an American option.',
    alternatePrompts: {
      plain:
        'Before computing any expected value, what is the very first thing you write on the whiteboard to turn this fuzzy "roll some dice" question into something you can grind out mechanically? Give the skeleton, not the dollar figure.',
    },
  },
  {
    id: 19832,
    chapter: 'Brain Teasers',
    title: 'The Veto Hire',
    generated: true,
    challengeRating: 8,
    prompt:
      'Three colleagues — A, then B, then C, in fixed order — must hire one of three candidates X, Y, Z. Going in order, A vetoes (removes) one candidate, then B vetoes one of the two that remain; the last candidate standing is hired. Everyone knows everyone\'s strict preferences, and each wants their own favorite hired. Before naming who gets hired, how should you set this up so the outcome is forced rather than guessed?',
    correct:
      'Draw the decision tree and solve it backward: first work out B\'s best veto for each candidate A might remove, then let A pick the veto whose resulting survivor A ranks highest.',
    wrong: [
      [
        'Tally each candidate\'s overall popularity (how many colleagues rank them first) and predict the most-liked one survives.',
        'This is a sequential game driven by veto order and anticipation, not a popularity contest — a widely-liked candidate can be vetoed first precisely because they are the threat.',
        'Ask "who moves when, and what does each move provoke?" not "who is most liked?"',
      ],
      [
        'Assume everyone simply vetoes their own least-favorite candidate, and read off the survivor in one forward pass.',
        'A, voting first, must reason about what B will do next; A may strategically veto a candidate who is not its worst to steer B away from an outcome A hates even more.',
        'Sincere voting ignores anticipation — the whole point of a sequential game.',
      ],
      [
        'Enumerate all possible preference orderings (6 × 6 × 6 profiles) and report the most common winner.',
        'The preferences are given and fixed — there is one profile, not a distribution; enumerating 216 of them answers a question nobody asked.',
        'Solve the single given game, not a population of imaginary ones.',
      ],
    ],
    lesson:
      'There is a deep divide between two families of group decisions that look alike on a whiteboard. In the first — plurality, Borda counts, "who has the most support" — everyone acts at once and the answer is a counting exercise. In the second, people act in a known order, each seeing what came before, and the answer turns on anticipation: a rational early mover optimizes not against the current board but against what her move will provoke from those who move after her. Confusing the two is one of the most expensive errors a numerate person makes.\n\nThe signature of a sequential game is a phrase like "in order," "each in turn," or "the last one decides." The instant you spot it, the right object is not a tally but a tree: each node is "whose turn, what is left," each branch a choice, each leaf an outcome everyone can rank. And the only sane way to evaluate a tree of rational actors is to start at the leaves and fold upward — work out what the last decider does in every case, replace her node with that forced outcome, and the second-to-last decider now faces no uncertainty. Repeat to the first move.',
    solution:
      'This is a finite game of perfect information — fixed order, common-knowledge preferences, each player sees the prior moves — and such games are always solved by backward induction, so the right setup is a small extensive-form tree solved bottom-up. Pin down B\'s best response first: in each two-candidate subgame B simply keeps whichever of the two he prefers (vetoing the other), which turns each of A\'s three possible opening vetoes into a known survivor. Only then can A choose — A picks the opening veto whose downstream survivor A ranks highest. The candidate\'s name falls straight out once the tree is folded, but the interviewer is grading the setup, not the name. The trap is pattern-matching to voting (a popularity tally) or to sincere voting (everyone vetoes their worst); both are forward-sweep frames that miss the strategic heart — A\'s best veto can be a candidate A is fine with, chosen only to deny B a move A fears more. The tell you slipped into the wrong frame: you computed an answer in one forward pass without ever asking "what will the next mover do in response?"',
    alternatePrompts: {
      plain:
        'Forget who actually gets hired. What is the very first thing you draw, and where do you start solving it — the top of the drawing or the bottom? Convince me your starting point makes the rest mechanical.',
    },
  },
  // ───────────────────────── Desk Quant (round 1, first four) ─────────────────────────
  {
    id: 19841,
    chapter: 'Brain Teasers',
    title: 'The Race to 100',
    generated: true,
    challengeRating: 5,
    prompt:
      'You and an interviewer play for a pot. A shared counter starts at 0; you take turns adding any whole number from 1 to 10, and whoever makes the counter land on exactly 100 wins the pot. You go first. Playing perfectly, what is your first move — and do you win?',
    correct: 'Add 1 (making the total 1), and you win with perfect play.',
    wrong: [
      [
        'Add 10, to take the biggest jump and stay ahead.',
        'This race is not about who is ahead — your opponent always replies, and 10 misses the very first safe number.',
        'Aim for the ladder of safe numbers, not a lead.',
      ],
      [
        'It doesn\'t matter what you open with — with perfect play the second player wins.',
        'That half-remembers a "multiples of 11" rule; the numbers that matter are one MORE than a multiple of 11, and the first player can grab them.',
        'Re-derive the safe numbers — 100 is not a multiple of 11.',
      ],
      [
        'Add 1, but with perfect play you still lose because your opponent moves last.',
        'By adding 1 you have already taken the key position, so it is your opponent who gets pushed off the safe path.',
        'Whoever controls the ladder wins, not whoever happens to move last.',
      ],
    ],
    lesson:
      'Almost every "race to a number" game hides the same skeleton: a counter marches toward a target, each player nudges it by an amount within a fixed range, and somebody wins by hitting the target exactly. Under pressure, people reason forward — "I\'ll jump big and stay in front." But being in front is worthless here, because your opponent moves right after you and can always respond. What actually has value is reaching a position from which every possible reply your opponent makes still leaves you able to finish.\n\nThat reframing is the whole game. Picture yourself one step from the end. If the target is 100 and you can add up to 10, then any counter value from 90 to 99 is a gift: you just add the difference and win. So the real question becomes — who gets to hand the other person a counter sitting in that 90-to-99 danger zone? Whoever controls the number 89 does, because from 89 every legal move lands somewhere in 90 to 99, and then you close it out. Ask the same question about 89, and the pattern repeats, stepping backward in equal jumps.\n\nBecause each player adds somewhere from 1 to 10, the player in control can always make their move plus the opponent\'s next move add up to exactly 11. That "11 per round" is the heartbeat of the game. The only thing left to work out is which specific numbers form the safe ladder, and therefore whether the player who moves first can step onto it.',
    solution:
      'Reason backward from the win. If you can ever leave the counter at any value from 90 to 99, you win next turn, so you want to force your opponent to hand you one of those — which happens from 89, since every move from 89 lands in 90-99. Apply the same logic and the safe numbers step down by 11: 89, 78, 67, 56, 45, 34, 23, 12, and 1 — exactly the numbers one more than a multiple of 11. So your opening move is to add 1, landing on the first safe number; from then on you mirror your opponent so each round sums to 11 (you add 11 minus their move), keeping the counter on 1, 12, 23, … 89, and then 100 is yours. The trap is the famous "race to 21" version, which uses multiples of 4 and favours going second — so people blurt "go second" or "aim for multiples of 11." But 100 is not a multiple of 11, so the ladder shifts by one and the first player owns it. Sanity check: the safe numbers are 1 plus multiples of 11, nine of them ending at 89, and one more step of 11 lands on 100.',
    alternatePrompts: {
      plain:
        'A pot has 100 tokens. You take turns removing 1 to 10 tokens, and whoever takes the last token wins everything. You move first — how many do you take, and who wins?',
    },
  },
  {
    id: 19842,
    chapter: 'Brain Teasers',
    title: 'The Adversarial Coin Row',
    generated: true,
    challengeRating: 8,
    prompt:
      'Twelve coins lie in a row, face up — every value visible. You and the dealer alternate taking one coin from EITHER END and keeping it; when all twelve are gone, the larger total wins the difference. You move first, and the dealer chooses the values and their order adversarially, trying to beat you. Can you guarantee you won\'t lose, for ANY arrangement?',
    correct: 'Yes — going first, you can always guarantee at least a tie, on every arrangement.',
    wrong: [
      [
        'No — whether you can avoid losing depends on the exact values and order; some arrangements beat you.',
        'Playing optimally is arrangement-dependent, but there is a simpler value-blind guarantee that holds no matter how the coins are arranged.',
        'Look for a guarantee, not the optimum.',
      ],
      [
        'Yes, by playing greedily — always take the larger of the two coins currently on show.',
        'Greed can lose: from a row like 10, 100, 10, 5, taking the end 10 hands your opponent the 100.',
        'A locally-bigger coin can expose an even bigger one for the opponent.',
      ],
      [
        'No — with an even number of coins the second player can just mirror the first, so going first gives no edge.',
        'Taking from the ends flips which coins are exposed, so it is actually the FIRST player who can lock in a colour class.',
        'Even-count parity favours the first mover here, not the second.',
      ],
    ],
    lesson:
      'There is a whole family of games where everything is visible, there is no luck, and the only question is who can squeeze out more. Noughts-and-crosses, Nim, and "take coins from the ends" all live here. The temptation is to simulate: "if I take this, they take that, then I take…" For playing perfectly, that recursive thinking is exactly right and gives a clean (if laborious) method. But interviewers asking this coin game usually aren\'t after the perfect score — they are after a slicker claim: that one player can guarantee a floor on their result using a rule so simple it needs no looking ahead at all.\n\nThe move that unlocks it is to stop staring at the coin values and start staring at the positions. Number the slots 1 through 12. Notice something rigid about taking from the ends: the two ends of the full row are positions 1 and 12 — one odd, one even. And whenever you remove an end coin, the coin newly exposed underneath is the opposite kind. So the two coins on offer are always one odd-positioned and one even-positioned. If you colour the odd slots black and the even slots white, the row becomes a chessboard, and a strategy appears that has nothing to do with the actual values.\n\nThat is the signature of a great brain-teaser answer: you find something the moves can\'t break (here, the odd/even pattern), which lets one player commit to a fixed, value-blind plan and still come out with a guarantee. The one subtlety to flag aloud is the difference between "a guarantee that I won\'t lose" and "the most I could possibly win" — the colouring trick nails the first, not always the second.',
    solution:
      'Greed is out — test it first: row 10, 100, 10, 5, greedy takes the end 10 and the opponent grabs the 100. Instead, look for structure: number the slots 1-12 and colour them like a chessboard, odd black and even white. The two ends start one black and one white, and taking an end coin always exposes the opposite colour — so the two coins on offer are always one of each. Before touching anything, sum the black (odd-slot) coins and the white (even-slot) coins and pick the bigger pile; on move one a coin of that colour is at an end, you take it, the opponent is forced onto the other colour, and that re-exposes your colour. You sweep the whole bigger pile — at least half the money — so you can never lose (worst case, a tie). Two honest caveats: it is a floor, not a ceiling (against a non-optimal opponent perfect play can win more), and it relies on the even count — with an odd number of coins the two ends start the same colour and the trick breaks.',
    alternatePrompts: {
      plain:
        'A row holds an even number of coins; you take only from the ends, go first, and the higher total wins. Sum the odd-position coins and, separately, the even-position coins — I claim you can decide in advance which group to collect in full. True, and what does it imply about whether you could ever be forced to lose?',
    },
  },
  // ───────────────────────── Sensei Cuttle (round 1, first four) ─────────────────────────
  {
    id: 19843,
    chapter: 'Brain Teasers',
    title: 'The Coral-Tower Duel',
    generated: true,
    challengeRating: 5,
    prompt:
      'Two hermit crabs, Pip and Quill, build one coral tower, racing to place the pebble that makes it exactly 40 tall. They alternate, and on your turn you MUST add between 1 and 5 pebbles; whoever lands the tower on exactly 40 wins the tide pool. Pip goes first from an empty tower. With perfect play, what should Pip do on the very first turn?',
    correct: 'Add exactly 4 pebbles (to a height of 4), and Pip then wins with perfect play.',
    wrong: [
      [
        'Add 5 pebbles every turn — the maximum — to build fastest.',
        'The race is not about speed; landing on the wrong height just hands Quill the controlling position.',
        'Aim for the safe heights, not the fastest climb.',
      ],
      [
        'Add 1 pebble — the minimum — to stay flexible and never overshoot.',
        'Height 1 is a winning spot for Quill, who can then seize the rhythm.',
        'Caution does not help; you need the first safe height.',
      ],
      [
        'It doesn\'t matter what Pip does first; with perfect play the second crab always wins.',
        'That is only true when the target is a multiple of (the maximum step + 1); 40 is not a multiple of 6, so the first mover wins.',
        'Check the divisibility before assuming the second player wins.',
      ],
    ],
    lesson:
      'Once upon a low tide, two hermit crabs found a heap of perfectly round pebbles and decided the fairest way to claim the sunniest rock pool was a game. They\'d build one tower together, taking turns, and whoever set the final pebble at the agreed height would win. Pip, small and impatient, wanted to slap down five pebbles at once. Quill, old and thinking in spirals, just smiled and waited.\n\nHere is the secret Quill knows. When you are racing to land on an exact number, the finish line is where the thinking starts — not the beginning. If it is your turn and only a few pebbles remain, you can sometimes finish in one move. But there are certain heights where, no matter how many pebbles (1 to 5) you add, you hand your opponent the finish. Those poisoned heights are the ones to leave for the other crab. A clever crab plans backward from the prize and asks, "Which heights would I hate to be standing on when it is my turn?"\n\nThe lovely part is that these "hate-to-stand-here" heights repeat in a perfectly regular rhythm, like ripples spreading from a dropped shell. Leave your opponent on one ripple, and you can leave them on the next, and the next, all the way to the prize. The whole game collapses into a single question: what is that rhythm, and can you grab the first ripple?',
    solution:
      'Reason from the prize backward. From 35-39 you can finish, so 34 is poison: every move from 34 lands in 35-39 and lets your opponent finish. Stepping back the same way, the poison heights are 40, 34, 28, 22, 16, 10, and 4 — every height 4 more than a multiple of 6. The spacing is 6 because the moves are 1-5: whatever your opponent adds (x), you reply with 6 − x, advancing exactly 6 each round and pinning them on the next poison height. So Pip adds 4 to land on the first poison height, then mirrors with 6 − x: the tower marches 4 → 10 → 16 → 22 → 28 → 34 → 40, and Pip places the 40th pebble. Adding 5 (lands on 5) or 1 (lands on 1) hands Quill the rhythm instead. And "the second player wins these" only holds when the target is a multiple of 6 — 40 = 36 + 4 is not. Reef Rule: in any "reach exactly N, add 1..K" race, the poison positions sit K + 1 apart; steer your opponent onto the first one, then mirror every move of x with (K + 1) − x.',
    alternatePrompts: {
      plain:
        'A toy robot starts a counter at 0. You and the robot alternate adding any whole number from 1 to 5, and whoever makes the counter read exactly 40 wins. You move first — what is your best first increment?',
    },
  },
  {
    id: 19844,
    chapter: 'Brain Teasers',
    title: 'The Poison-Pearl Council',
    generated: true,
    challengeRating: 8,
    prompt:
      'A mischievous moray eel drops 18 pearls between two reef-keepers, Marlow and Nerissa. They alternate scooping pearls; on each turn you MUST take 1, 2, or 3. But the eel has cursed the pile: whoever takes the very LAST pearl is poisoned and loses. Marlow moves first. With perfect play, what is Marlow\'s correct first move?',
    correct: 'Take 1 pearl (leaving 17), and Marlow then forces Nerissa to take the last one.',
    wrong: [
      [
        'Take 2 pearls (leaving 16), aiming to always leave a multiple of 4.',
        'That is the rule for the NORMAL game where taking the last pearl wins; under this "last pearl loses" curse the target shifts by one.',
        'Re-derive the endgame; the famous rule is for the other game.',
      ],
      [
        'Take 3 pearls (leaving 15), the maximum, to draw the pile down fastest.',
        '15 is a winning position for Nerissa, who takes 2 to reach 13 and seizes control.',
        'Drawing down fast does not matter; land your opponent on a losing size.',
      ],
      [
        'It doesn\'t matter; with perfect play the second player always wins from 18.',
        'The losing sizes are the piles one more than a multiple of 4, and 18 is not one of them, so the first mover wins.',
        'Misère games are not always second-player wins; check the residue.',
      ],
    ],
    lesson:
      'Gather round, the bioluminescence is just right for a spooky one. The moray eel loves a prank, and her favourite is the poison pearl. She piles up treasure that looks like a gift, but she has whispered a curse over the very last pearl: whoever\'s claw closes around that final bead gets a zap and forfeits the pool. Marlow has played the ordinary version a thousand times — the one where grabbing the last pearl wins — and has a slick rule he is proud of. Nerissa, drifting in her spiral shell, only asks one quiet question: "Is this the game where the last pearl is a prize, or the game where it is a curse?"\n\nThat single question is the whole reef. Most clever creatures learn one famous game by heart and assume every pile of pearls is the same game. But flipping who-loses-on-the-last-move is like reversing the current around the atoll: all your old landmarks are still there, just shifted by a notch. The method — work backward from the end and label each pile size "safe to hand my opponent" or "doom for me" — is identical. What changes is the very last room of the maze: in the prize version, being handed an empty pile is a loss; in the curse version it is a win, because the other creature just grabbed the poison. Change that one ending, and the whole ripple of safe-and-doomed sizes slides over.\n\nSo the danger is not the maths; it is muscle memory. An interviewer posing the curse version is checking whether you recite a memorised rule or actually re-walk the endgame for this game.',
    solution:
      'Re-anchor the endgame, because the curse lives there. If it is your turn and 1 pearl remains, you are forced to take it and lose — so a pile of 1 is a LOSING position for the mover. From 2, 3, or 4 you can leave your opponent exactly 1, so those win; from 5 every move hands your opponent a winning pile, so 5 loses. Continuing, the losing sizes are 1, 5, 9, 13, 17 — exactly the piles one more than a multiple of 4. 18 is not one of them, so Marlow wins by moving to 17 (take 1), then mirroring 4 − x down 17 → 13 → 9 → 5 → 1, leaving Nerissa the cursed pearl. The trap: in the NORMAL game (last pearl wins) the losing sizes are the multiples of 4 and the right play is take 2 (leaving 16) — the over-memorised reflex, and exactly the wrong answer here. The curse slid every losing position up by one pearl. Reef Rule: backward induction is only as correct as its starting label — when a puzzle flips who-loses-on-the-last-move, re-walk the endgame instead of reciting the famous rule.',
    alternatePrompts: {
      plain:
        'A pile has 18 tokens; players alternate removing 1, 2, or 3, and the player forced to take the final token loses. You move first — how many should you remove to guarantee the win?',
    },
  },
  // ───────────────────────── Out-Loud Mentor (round 2) ─────────────────────────
  {
    id: 19837,
    chapter: 'Brain Teasers',
    title: 'Say It Out Loud: the Marble Drop',
    generated: true,
    challengeRating: 5,
    prompt:
      'You have worked out that the two-marble, 100-floor problem needs 14 worst-case drops, first drop at floor 14. The interviewer nods and says, "Okay — walk me through why 14." Which opening narration actually earns the points?',
    correct:
      '"Reason backward from a drop budget: with x drops the first must be from floor x; a surviving drop only lets me climb x−1 next, then x−2…, so x drops cover x(x+1)/2 floors. I need ≥ 100, which first happens at x = 14."',
    wrong: [
      [
        '"14² = 196, which is bigger than 100, so 14 attempts is plenty of room."',
        'The load-bearing structure is the triangular sum 14·15/2 = 105, not 14²; this narrates a coincidence and collapses the moment the interviewer asks "why squared?"',
        'Name the quantity that actually does the work, not one that merely lands nearby.',
      ],
      [
        '"It\'s the classic two-egg problem — the answer is always 14 for 100 floors."',
        'It is correct but bluffs from memory with zero method; the next question ("what about 200 floors?") exposes that nothing was understood.',
        'A memorized number gives the interviewer nothing to grade.',
      ],
      [
        '"I\'d binary-search: 50, then 25 or 75, halving each time — about log₂100 ≈ 7, so 14 is conservative."',
        'It confidently solves the wrong problem: if the floor-50 marble shatters you have one marble and up to 49 floors to crawl. Binary search needs unlimited marbles.',
        'Polished delivery of a wrong model reads as competence until it does not.',
      ],
    ],
    lesson:
      'On a real desk you are constantly explaining a number to a colleague who will act on it, so the version they can re-derive in their head while you talk is worth more than the version that is technically airtight but takes ninety seconds to audit. Part of being "right" is choosing the explanation that travels. This question is not testing whether you can find 14 — you already have it — but whether you can SAY the backward step out loud in a way the listener can follow and check.\n\nThe move that unlocks the marble problem is to stop asking "where should my first drop go?" and instead ask the backward question: if I were rationed to exactly x drops, how tall a building could I handle? That self-imposed ceiling is the engine of the solution, and narrating the re-framing — "let me flip this around and reason from my budget" — is exactly the verbal move that separates a hire from a near-miss. Three of the four openings here reach the right vicinity while hiding the reasoning; only one shows the listener the machine.',
    solution:
      'The strong narration states the representation, derives the invariant, produces the number, and is structured so the interviewer can follow and check it: "With x drops the first drop must be floor x — if it breaks I climb floors 1…x−1 with my last marble, using my remaining x−1 drops. If it survives I jump x−1 next, then x−2, so x drops cover x + (x−1) + … + 1 = x(x+1)/2 floors. I need that ≥ 100; x = 13 gives 91, too few; x = 14 gives 105, enough — so 14, first drop at floor 14." Option A narrates a coincidence (14²), option C bluffs from memory and dies on "now do 200 floors," and option D fluently solves the unlimited-marble problem — the most dangerous anti-pattern, because polished wrongness reads as competence. The reusable principle: when a resource is scarce and irreversible, plan backward from the budget, and narrate the re-framing the moment you make it. The unspoken-but-correct answer loses to the spoken-and-correct one.',
    alternatePrompts: {
      plain:
        'Say your reasoning out loud: which opening sentence makes the interviewer want to keep listening — "it\'s the standard two-egg answer," "let me bound it by my drop budget…," "roughly √100 padded to 14," or "I\'ll binary-search"? And why do the other three quietly cost you the room?',
    },
  },
  {
    id: 19838,
    chapter: 'Brain Teasers',
    title: 'Say It Out Loud: Will They Meet?',
    generated: true,
    challengeRating: 8,
    prompt:
      'Eight players enter a single-elimination knockout (random bracket, every match a fair coin flip). Pick two specific players, Alice and Bob; the chance they meet at some point is 1/4. The interviewer leans back: "Convince me — and I want to hear how you\'d check it." Which narration earns the offer?',
    correct:
      '"Exactly 7 matches are played (one per eliminated player) and any two players meet at most once, so by symmetry each of the 28 pairs is equally likely to be a match: 7/28 = 1/4. Check: 28 pairs × 1/4 = 7, exactly the number of matches — the books close."',
    wrong: [
      [
        '"They meet in the final only if they\'re in opposite halves and each wins twice: 4/7 × 1/16 ≈ 1/28, so somewhere around there."',
        'It answers the wrong question — "meet at some point" includes rounds 1 and 2 — and signals you lost track of what was asked.',
        'A perfectly correct calculation of the wrong event is still wrong.',
      ],
      [
        '"By symmetry it should just be 1/4 — eight players, feels like one in four."',
        'It lands on the number but uses "symmetry" as a magic word, not an argument, and offers no check — exactly the un-auditable answer a desk will not trust.',
        'Symmetry is a tool you must wield, not a spell you cast.',
      ],
      [
        '"Add the rounds: paired in round 1 with prob 1/7, plus the semifinal case, plus the final case — 1/7 + 1/14 + 1/28 = 1/4."',
        'It is correct and rigorous, but as the FIRST thing you say it buries the lede in three conditional sub-cases the listener must track, with no sanity check.',
        'Right math, narrated in the order most likely to lose the room.',
      ],
    ],
    lesson:
      'Knockout brackets hide a beautiful piece of bookkeeping almost nobody states out loud: every match eliminates exactly one player and the tournament ends with one champion, so a field of n plays exactly n − 1 matches — always, regardless of who wins. That fixed total is an invariant, and invariants are the quant interviewer\'s favorite toy because they sidestep a swamp of conditional probabilities. There is a second piece of structure worth feeling: any two players meet at most once, because a loss ends your run, so "Alice and Bob meet" is a single yes/no, and by symmetry no pair is special.\n\nThe catch the interview is really probing is communication discipline. The same 1/4 can be reached by grinding through round-one, semifinal, and final probabilities and adding them up — and that grind is correct. But the version a colleague can re-derive in their head while you talk is worth more than the airtight one that takes ninety seconds to audit. Being "right" here includes choosing the explanation that travels, and proving it with a check that ties your per-pair answer back to the fixed total of games.',
    solution:
      'Lead with the invariant: 8 players means exactly 7 matches are ever played, and two players meet at most once, so by symmetry across the field each of the C(8,2) = 28 pairs is equally likely to be one of those 7 matches — giving 7/28 = 1/4. Then close the books out loud, which is the part the interviewer explicitly asked for and most candidates skip: if each of 28 pairs meets with probability 1/4, the expected number of meeting pairs is 28 × 1/4 = 7, exactly the number of matches played — it reconciles. (It also generalizes to 2/n, which sanity-checks at n = 2, where the two players must meet.) Option A is the instructive trap — a flawless calculation of "meet in the final" instead of "meet at all." Option C\'s round-by-round sum is genuinely correct but, as an opening, forces the listener to hold three sub-cases with no check. The reusable principle: lead with the invariant, reach the number by symmetry, and always close with a check that ties your answer back to a quantity you already know is true.',
    alternatePrompts: {
      plain:
        'Say your reasoning out loud: which opening sentence lets the interviewer nod along AND verify you — "symmetry, feels like one in four," "7 matches are played, each pair equally likely, 7/28 = 1/4, and 28 × 1/4 = 7 checks out," "in the final it\'s 4/7 × 1/16…," or "let me add the rounds"?',
    },
  },
]

export const backwardInductionGemQuestions: Question[] = makeQuestionBank(
  'Quant Finance',
  BACKWARD_INDUCTION_GEM_DEFS,
)
