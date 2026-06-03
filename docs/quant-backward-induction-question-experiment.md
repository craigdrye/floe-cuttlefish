# Experiment — four ways of writing questions for *Quant Interview Core › Brain Teasers › Lesson 1: Backward Induction*

**Date:** 2026-06-02 · **What this is:** I asked four AI agents, each given a different "personality" (lens), to write new practice questions for one lesson. This document collects what they produced, written out in full so you can read and rate them. **Nothing in the app was changed** — this is just an evaluation.

---

## What "backward induction" means (so the questions make sense)

Most of these puzzles share one trick, so it's worth stating once up front. **Backward induction** means you solve a problem by starting at the *end* and working back to the beginning, instead of starting at the beginning and guessing forward.

In a game, that means: don't ask "what's my best move right now?" Ask "which final positions win, and which earlier positions force my opponent into a losing one?" You label the very last situations first ("if it's your turn here, you've already lost"), then step backward one move at a time, carrying those labels with you. By the time you reach the starting position, you already know who wins and exactly how. It feels like cheating, because it is — you're reading the last page of the book first.

The lesson these questions belong to (**Chapter 1 "Brain Teasers" → Lesson 1 "Backward Induction"**) already contains four classic puzzles: the *100 prisoners and 100 boxes*, the *gas cans on a circular track*, the *five rational pirates dividing gold*, and the *25 horses on a 5-lane track*. The agents were told to write **new** questions and not repeat any of those.

The course itself is **Quant Interview Core**: training for people preparing for first-round interviews at quant trading firms and hedge funds — typically sharp STEM students and career-changers, roughly 20 to 32. The app (Floe) is a cute, Duolingo-style ocean-themed learning game with a cuttlefish mascot called Sensei Cuttle, so the tone is meant to be warm and playful without letting the maths get sloppy.

Each agent was asked for **two complete questions** — one **Medium**, one **Hard** — and each question had to include four parts:
- the multiple-choice **question** itself (four options, with a note on why each wrong one is tempting);
- a **Deep Dive**: a short pre-lesson, two or three paragraphs, that builds intuition *without giving away the answer*;
- an **Ask Me Differently**: the same question worded a different way;
- a **Teach Me**: a full explanation of the question and the right answer.

---

## The four "lenses" I gave the agents

All four got the same background (above). The only difference was the personality and priorities I layered on top — that's the variable being tested.

- **Lens A — "The Desk Quant."** Play a real trading-desk interviewer. Make the puzzles sound exactly like they'd be asked across a table, give them a light markets flavour, and write the explanation as *the words a strong candidate would actually say out loud*.
- **Lens B — "Sensei Cuttle's Tide Pool."** Be the cuddly cuttlefish mascot. Wrap each puzzle in a charming reef story so it's memorable — but keep the maths completely genuine. Prove a cute question can be just as rigorous as a stern one.
- **Lens C — "First Principles."** Be an olympiad-style problem setter. Chase elegance: pick puzzles where working backward collapses something hard into a clean formula, and send the learner away holding a reusable theorem.
- **Lens D — "The Process Coach."** Be a Socratic interview coach. Test *judgement*, not arithmetic — questions about the right first move, or about staying composed when the interviewer says "are you sure?"

---

# The eight questions, written out in full

> A quick note before you read: the four agents independently gravitated toward similar underlying puzzles (three of them used a "take coins from either end of a row" game; three used a "take turns removing objects, and the last one to move loses" game). I've kept all eight as written so you can compare how differently the *same idea* can be presented. My commentary on that overlap is in the assessment at the end.

---

## A · The Desk Quant

### A1 — Medium: The race to 100

**The scenario.** You and an interviewer are going to play a quick game for a pot of money. There's a shared counter that starts at zero. You take turns, and on your turn you add any whole number from **1 to 10** to the counter. Whoever makes the counter land on **exactly 100** wins the pot. **You go first.**

**The question.** Playing perfectly, what is your very first move — and do you win?

- **A) Add 1 (making the total 1), and you win with perfect play.** ✅ *Correct.*
- **B)** Add 10, to take the biggest jump and stay ahead. — *Tempting because getting "ahead" feels like a lead. But this race isn't about who's ahead; it's about landing on a specific set of safe numbers, and 10 misses the very first one.*
- **C)** It doesn't matter what you open with — with perfect play the second player wins. — *Tempting if you half-remember a rule about "multiples of 11." But the numbers that matter here are one more than a multiple of 11, and the first player is the one who can grab them.*
- **D)** Add 1, but with perfect play you still lose, because your opponent moves last. — *Tempting if you think "whoever moves last wins, and they can just copy me." But by adding 1 you've already taken the key position, so it's your opponent who gets pushed off the safe path.*

**How hard, and why.** Medium. The core idea — "control a ladder of safe numbers" — is a single clean concept, but there's an easy trap: because 100 is not a neat multiple of 11, the safe numbers are shifted by one, which trips up anyone who blindly copies the textbook "race to 21" version of this game.

**Deep Dive (read before answering).** Almost every "race to a number" game hides the same skeleton: a counter marches toward a target, each player nudges it by an amount within a fixed range, and somebody wins by hitting the target exactly. Under pressure, people reason *forward* — "I'll jump big and stay in front." But being in front is worthless here, because your opponent moves right after you and can always respond. What actually has value is reaching a position from which *every possible reply* your opponent makes still leaves you able to finish.

That reframing is the whole game. Picture yourself one step from the end. If the target is 100 and you can add up to 10, then any counter value from 90 to 99 is a gift: you just add the difference and win. So the real question becomes — who gets to *hand the other person* a counter sitting in that 90-to-99 danger zone? Whoever controls the number 89 does, because from 89 every legal move lands somewhere in 90 to 99, and then you close it out. Now ask the same question about 89, and the pattern repeats, stepping backward in equal jumps.

Because each player adds somewhere from 1 to 10, the player in control can always make their move *plus* the opponent's next move add up to exactly 11. That "11 per round" is the heartbeat of the game. The only thing left to work out — and the thing that separates a clean answer from a confident wrong one — is *which* specific numbers form the safe ladder, and therefore whether the player who moves first can step onto it or is shut out.

**The same question, asked differently.** A pot contains 100 tokens. You take turns removing 1 to 10 tokens, and whoever takes the *last* token wins everything. You move first — how many do you take, and who wins? *(Counting down from 100 to zero is the mirror image of counting up from zero to 100, so the answer is identical.)*

**Teach Me — what a strong candidate says out loud.** "Race to 100, I can add 1 to 10, landing exactly on 100 wins, and I go first. I'm not going to think about who's ahead, because being ahead doesn't help — my opponent always gets to reply. Let me reason backward from the win instead. If I can ever leave the counter at any value from 90 to 99, I win next turn, so I'd love to force my opponent to hand me one of those. What forces that? If the counter is sitting at 89 and it's their turn, every move they can make lands between 90 and 99, and then I finish. So 89 is a great number to hand them.

"Now I apply the same logic to 89, and I find the safe numbers step down by 11 each time: 89, 78, 67, 56, 45, 34, 23, 12, and finally 1. These are exactly the numbers that are *one more than a multiple of 11*. That's the trap, by the way: the famous version of this game (race to 21, adding 1 to 3) uses multiples of 4 and favours going *second*, so people blurt out 'go second' or 'aim for multiples of 11.' But 100 isn't a multiple of 11, so the ladder is shifted by one, and the first player gets to step onto it.

"So my opening move is to **add 1**, landing exactly on the first safe number. From then on I simply mirror my opponent: whatever they add, I add the amount that brings the round's total to 11, keeping the counter on 1, 12, 23, and so on up to 89 — and then 100 is mine. Quick sanity check: the safe numbers are 1 plus multiples of 11, that's nine of them ending at 89, and one more step of 11 from 89 lands exactly on 100. The arithmetic closes, so opening with 1 is forced, and I win."

---

### A2 — Hard: The coin row, with an adversarial dealer

**The scenario.** Twelve coins are laid out in a row, face up, so you can see every value. You and the dealer take turns, and on each turn you take **one coin — but only from one of the two ends** of the row — and keep it. When all twelve are gone, whoever holds the larger total value wins the difference in cash. **You move first.** Crucially, the dealer gets to choose the twelve values *and* their order however he likes, deliberately trying to beat you.

**The question.** Can you guarantee you won't lose — for *any* arrangement the dealer picks?

- **A) Yes — going first, you can always guarantee at least a tie, on every possible arrangement.** ✅ *Correct.*
- **B)** No — whether you can avoid losing depends on the exact values and order; some arrangements beat you. — *Tempting because playing genuinely optimally does depend on the arrangement, so it feels like the outcome must too. But there's a simpler guarantee that holds no matter how the coins are arranged.*
- **C)** Yes, by playing greedily — always take the larger of the two coins currently on show. — *Tempting because grabbing the bigger coin feels safe. But greed can lose: from a row like 10, 100, 10, 5, taking the end 10 hands your opponent the 100.*
- **D)** No — with an even number of coins, the second player can just mirror the first and force at least a tie, so going first gives no edge. — *Tempting via a vague "even number, so the second player copies" instinct. But taking from the ends flips which coins are exposed, so it's actually the first player who can lock in an advantage.*

**How hard, and why.** Hard. The two obvious approaches — greed, or "just compute every line of play" — are respectively *wrong* and *overkill*. The elegant answer requires *inventing* a clever way of looking at the row (a colouring trick), which most people don't reach for under time pressure.

**Deep Dive (read before answering).** There's a whole family of games where everything is visible, there's no luck, and the only question is who can squeeze out more. Noughts-and-crosses, Nim, and "take coins from the ends" all live here. The temptation is to simulate: "if I take this, they take that, then I take…" For playing *perfectly*, that recursive thinking is exactly right and gives a clean (if laborious) method. But interviewers asking this coin game usually aren't after the perfect score — they're after a slicker claim: that one player can *guarantee* a floor on their result using a rule so simple it needs no looking ahead at all.

The move that unlocks it is to stop staring at the coin *values* and start staring at the *positions*. Number the slots 1 through 12. Notice something rigid about taking from the ends: the two ends of the full row are positions 1 and 12 — one odd, one even. And whenever you remove an end coin, the coin newly exposed underneath is the *opposite* kind (taking an odd-positioned coin exposes an even one, and vice versa). So the two coins on offer are always "one odd-positioned, one even-positioned." If you colour the odd slots black and the even slots white, the row becomes a chessboard, and suddenly a strategy appears that has nothing to do with the actual coin values.

This is the signature of a great brain-teaser answer: you find something that *can't be broken* by the moves (here, the odd/even pattern), which lets one player commit to a fixed, value-blind plan and still come out with a guarantee. The one subtlety a careful person flags out loud is the difference between "a guarantee that I won't lose" and "the most I could possibly win." The colouring trick nails the first. It does *not* always achieve the second, because a real opponent won't always play to deny you, and clever play can sometimes do better. Knowing exactly which claim your trick supports is the whole game.

**The same question, asked differently.** A row holds an even number of coins; you take only from the ends, you go first, and the higher total wins. Add up the coins sitting in the *odd-numbered* slots (1st, 3rd, 5th…) and, separately, the coins in the *even-numbered* slots. I claim that you, the first player, can decide in advance which of those two groups to collect *in full*. Is that true — and what does it imply about whether you could ever be forced to lose?

**Teach Me — what a strong candidate says out loud.** "Even number of coins, take from the ends, I go first, most value wins. My first instinct is greedy — take the bigger end — but let me test that before committing. Row 10, 100, 10, 5: greedy takes the left 10, my opponent grabs the 100, and I've already lost on move one. So greed is out — good thing I checked.

"Now, I *could* work out the full game tree and play perfectly, and that's the correct way to find the *best* possible score. But that's a lot of computation, and it won't, by itself, tell me whether I can *guarantee* not losing on every arrangement. So let me look for structure instead. I'll number the slots 1 to 12 and colour them like a chessboard — odd slots black, even slots white. Here's the key fact: the two ends of the row are slot 1 and slot 12, one black and one white, and every time I take an end coin, the coin exposed underneath is the opposite colour. So the two coins on offer are always one black and one white — that never changes.

"That hands me a value-blind plan. Before I touch anything, I add up all the black (odd-slot) coins and all the white (even-slot) coins, and I pick whichever pile is bigger — say black. On my first move there's a black coin available at slot 1, so I take it. Now both exposed ends are white, so my opponent is *forced* to take a white coin, which re-exposes a black coin for me. I take black again, and so on. I sweep up *every* black coin; my opponent gets every white coin; and I finish with the larger pile. So I'm guaranteed at least the bigger of the two colour totals, which is at least half the money — meaning I can never lose. Worst case, the two colours are equal and I tie.

"Two honest caveats I'd say aloud. First, this is a *floor*, not a ceiling: against an opponent who doesn't play to block me, perfect play could win by *more*. Second, this relies on an *even* number of coins, so the two ends start as opposite colours; with an odd number the trick breaks. Quick check: twelve coins is even, so I'm fine. The reusable idea: when a game's moves preserve some colouring or pattern, look for a value-blind strategy that claims one colour — it turns a scary problem into a one-line guarantee."

---

## B · Sensei Cuttle's Tide Pool

### B1 — Medium: The coral-tower stacking duel

**The scenario.** Two hermit crabs, **Pip** and **Quill**, are building a single coral tower together, racing to be the one who places the pebble that makes it exactly **40 pebbles tall**. They take turns, and on your turn you *must* add between **1 and 5** pebbles. Whoever places the pebble that brings the tower to exactly 40 wins the whole tide pool. Pip goes first, starting from an empty tower.

**The question.** If both crabs play perfectly, what should Pip do on the very first turn?

- **A) Add exactly 4 pebbles (to a height of 4), and Pip then wins with perfect play.** ✅ *Correct.*
- **B)** Add 5 pebbles every turn — the maximum — to build fastest. — *Tempting because going fast feels aggressive. But the race isn't about speed; landing on the wrong height simply hands Quill the controlling position.*
- **C)** Add 1 pebble — the minimum — to stay flexible and never overshoot. — *Tempting because being cautious feels safe. But it leaves the tower at height 1, which is a winning spot for Quill, who can then seize control.*
- **D)** It doesn't matter what Pip does first; with perfect play the second crab always wins. — *Tempting because many "first to N" games do favour the second player. But that's only true when the target is a multiple of (the maximum step + 1); 40 isn't a multiple of 6, so the first mover wins.*

**How hard, and why.** Medium. Once you work backward from the target, the idea ("find the safe heights and steer toward them") is a single clean concept — but you have to resist the speed-and-caution instincts and get one piece of modular arithmetic right under pressure.

**Deep Dive (read before answering).** Once upon a low tide, two hermit crabs found a heap of perfectly round pebbles and decided the fairest way to claim the sunniest rock pool was a game. They'd build one tower together, taking turns, and whoever set the final pebble at the agreed height would win the pool. Pip, who is small and impatient, immediately wanted to slap down five pebbles at once. Quill, who is old and thinks in spirals, just smiled and waited.

Here's the secret Quill knows. When you're racing to land on an exact number, the *finish line* is where the thinking starts — not the beginning. Imagine the tower is almost done. If it's your turn and only a few pebbles remain, you can sometimes finish in one move. But there are certain heights where, no matter how many pebbles (1 to 5) you add, you *hand* your opponent the finish. Those poisoned heights are the ones to leave for the *other* crab. A clever crab doesn't plan forward from the empty rock; she plans backward from the prize and asks, "Which heights would I hate to be standing on when it's my turn?"

The lovely part is that these "hate-to-stand-here" heights repeat in a perfectly regular rhythm, like ripples spreading from a dropped shell. If you can leave your opponent on one ripple, you can leave them on the next, and the next, all the way to the prize. The whole game collapses into a single question: what is that rhythm, and can you grab the first ripple? Find it, and you don't just win — you *know* you'll win before a single pebble is placed, and that calm certainty, said out loud, is exactly the music a quant interviewer wants to hear.

**The same question, asked differently.** A toy robot starts a counter at zero. You and the robot take turns, and on each turn the mover increases the counter by any whole number from 1 to 5. You move first, and whoever makes the counter read exactly 40 wins. What is your best first increment? *(Answer: 4.)*

**Teach Me.** Let's do what Quill does and reason from the prize backward, naming each height by who is *about to move* from it. The player who reaches 40 wins, so if it's your turn and the tower stands at 35, 36, 37, 38, or 39, you simply add the right amount and win. That means **34 is poison**: from 34 you can only reach 35–39, every one of which lets your opponent finish. So you *want* to leave your opponent standing at 34. Keep stepping back the same way, and the poison heights turn out to be 40, 34, 28, 22, 16, 10, and **4** — every height that is 4 more than a multiple of 6.

Why is the spacing 6? Because the legal moves are 1 through 5: whatever your opponent adds (call it *x*), you can always reply with *6 − x*, so each full round advances the tower by exactly 6 and keeps your opponent pinned on the next poison height. A move-set of 1 up to K always produces a rhythm of K + 1.

So Pip's plan is to put Quill on the *first* poison height, 4, and then mirror forever with "6 minus Quill's move": the tower marches 4 → 10 → 16 → 22 → 28 → 34 → 40, and Pip places the 40th pebble. From an empty tower, the only way to reach 4 in one legal move is to **add exactly 4** — answer A.

Now the traps, because they're the whole point. Adding 5 (option B) lands on height 5; Quill replies with 5, reaching 10, a poison height for Pip, and now Quill owns the rhythm. Adding 1 (option C) lands on height 1; Quill adds 3 to reach 4, and again Pip is the doomed one. And the tempting meta-trap, D: it's true that in this family of games the *second* player wins whenever the target is a multiple of (K + 1) — because then the starting point is already a poison height and the first mover is stuck. But 40 is *not* a multiple of 6 (it's 36 + 4), so the first mover can grab the opening ripple. The lesson: never assume "second player wins these" without checking the divisibility.

*Sensei Cuttle's Reef Rule #1 — Find the Ripple, Ride It Home.* In any "reach exactly N, adding 1 to K each turn" race, work backward from N to find the poison positions; they sit K + 1 apart. Steer your opponent onto the first one, then mirror every move of *x* with *(K + 1) − x*. Backward induction turns a scary race into a counting rhythm you can ride all the way home.

---

### B2 — Hard: The poison-pearl clam council

**The scenario.** A mischievous moray eel drops a glittering pile of **18 pearls** between two reef-keepers, **Marlow** the octopus and **Nerissa** the nautilus. They take turns scooping pearls; on each turn you *must* take **1, 2, or 3** pearls. But the eel has cursed the pile: **whoever takes the very last pearl is poisoned and loses.** Marlow moves first.

**The question.** With perfect play from both, what is Marlow's correct first move?

- **A) Take 1 pearl (leaving 17), and Marlow then forces Nerissa to take the last one.** ✅ *Correct.*
- **B)** Take 2 pearls (leaving 16), aiming to always leave a multiple of 4. — *Tempting because "leave a multiple of 4" is the famous rule for this take-1-2-or-3 game, and it's burned into every prep book. But that rule is for the *normal* game where taking the last pearl WINS; under this "last pearl loses" curse, the target shifts.*
- **C)** Take 3 pearls (leaving 15), the maximum, to draw the pile down fastest. — *Tempting because grabbing the most feels like pressing your advantage. But 15 is a winning position for Nerissa, who just takes 2 to reach 13 and seizes control.*
- **D)** It doesn't matter; with perfect play the second player always wins from 18. — *Tempting because these "last one loses" games have a scary reputation. But the losing positions here are the pile sizes that are 1 more than a multiple of 4, and 18 isn't one of them, so the first mover wins.*

**How hard, and why.** Hard. It looks identical to the standard take-1-2-or-3 game that every candidate has memorised, but the "last one loses" twist silently shifts the losing positions from multiples of 4 to numbers that are *one more* than a multiple of 4 — and the trap answer is precisely the over-learned reflex. Spotting the shift requires re-deriving the endgame, not reciting it.

**Deep Dive (read before answering).** Gather round, the bioluminescence is just right for a spooky one. The moray eel loves a prank, and her favourite is the poison pearl. She piles up treasure that looks like a gift, but she's whispered a curse over the very last pearl: whoever's claw closes around that final bead gets a zap and forfeits the pool. Marlow the octopus has played the ordinary version a thousand times — the one where grabbing the last pearl *wins* — and he has a slick rule for it he's very proud of. Nerissa the nautilus, drifting in her spiral shell, only asks one quiet question: "Is this the game where the last pearl is a prize, or the game where it's a curse?"

That single question is the whole reef. Most clever creatures learn one famous game by heart and then assume every pile of pearls is the same game. But flipping who-loses-on-the-last-move is like reversing the current around the atoll: all your old landmarks are still there, just shifted by a notch. The *method* — work backward from the end and label each pile size as "safe to hand my opponent" or "doom for me" — is identical. What changes is the very last room of the maze: in the prize version, being handed an empty pile is a *loss*; in the curse version, being handed an empty pile is a *win*, because it means the other creature just grabbed the poison. Change that one ending, and the whole ripple of safe-and-doomed sizes slides over.

So the danger isn't the maths; it's muscle memory. An interviewer who poses the curse version is checking whether you'll proudly recite a memorised rule or actually re-walk the endgame for *this* game. The keeper who survives is the one who, before computing anything, pins down exactly what happens on the final pearl, and then lets backward induction redraw the map from there.

**The same question, asked differently.** A pile has 18 tokens. Two players take turns removing 1, 2, or 3 tokens. Under the rule that the player *forced to remove the final token loses*, you move first — how many tokens should you remove to guarantee the win? *(Answer: 1.)*

**Teach Me.** The only honest way to do this is to re-anchor the endgame, because the curse lives there. Label each pile size by whether the player *about to move* can force a win. Start at the very bottom: if it's your turn and **1** pearl remains, you're forced to take it (you must take 1, 2, or 3, and only one is available), so you eat the poison and **lose**. That single flipped ending is the whole twist: a pile of 1 is a *losing* position for the mover. Now climb. From 2, 3, or 4 pearls you can take just enough to leave your opponent exactly 1, dooming them — so those are wins. From 5, every move (to 4, 3, or 2) hands your opponent a winning pile, so 5 is a loss. Continuing this way, the losing sizes are 1, 5, 9, 13, 17 — exactly the pile sizes that are **1 more than a multiple of 4**.

With 18 pearls it's Marlow's move, and 18 is *not* one more than a multiple of 4, so Marlow wins — by moving to the nearest losing size below 18, which is 17. That means **take 1 pearl** (answer A). From then on Marlow mirrors: whatever Nerissa takes (*x*), Marlow takes *4 − x*, marching the pile down 17 → 13 → 9 → 5 → 1 and leaving Nerissa staring at the single cursed pearl she's forced to swallow.

Here's the trap laid bare, and it's a gorgeous one. In the *normal* game — last pearl *wins* — the losing positions are the multiples of 4, and the right play from 18 is to take 2 (leaving 16). That "leave a multiple of 4" rule is so famous it's practically a reflex, which is exactly why answer B is the bait: it's the right answer to the wrong game. Take 2 here and you leave 16, which under the curse is a *winning* pile for Nerissa. Answer C (take 3, leaving 15) loses the same way. And answer D over-credits the curse's scary reputation: these games *are* often losing for the first mover, but only at those "1 more than a multiple of 4" sizes — and 18 simply isn't one. Notice how the curse shifted every losing position up by exactly one pearl — a tiny change that completely redraws the map.

*Sensei Cuttle's Reef Rule #2 — Re-anchor the End Before You Trust the Map.* Backward induction is only as correct as its starting label. When a puzzle flips who-loses-on-the-last-move, don't recite the famous rule — re-walk the endgame, fix the new losing position, and let the ripple of safe sizes slide to its new home.

---

## C · First Principles

### C1 — Medium: The coin row

**The scenario.** A row of **20** gold coins lies on the table, with values *fully visible* to both players. The values are arbitrary positive numbers in any order. You and an opponent take turns, and you go first. On each turn you take one coin, from either the far-left or far-right end of the remaining row, and keep it. After all 20 coins are gone, whoever holds the larger total value wins. You want a *guarantee*, not a hope.

**The question.** Which statement is true?

- **A) As the first player, you can always guarantee at least a tie (in fact at least half the total value), no matter how the coins are arranged — and the strategy doesn't even require you to look at the values during play.** ✅ *Correct.*
- **B)** The greedy rule "always take the larger of the two exposed coins" guarantees you win. — *Tempting because grabbing the bigger visible coin feels locally smart. But a large coin you take can expose an even larger one for your opponent; greed is provably beatable.*
- **C)** Whether the first player can force a tie depends on the specific arrangement; for some orderings the second player wins. — *Tempting because outcomes clearly depend on the values, so the winner "should" too. But the odd/even-position argument gives the first player a value-independent guarantee whenever the count is even.*
- **D)** Because both players play perfectly and the position looks symmetric, the game is always an exact tie. — *Tempting because two perfect players "should" cancel out. But position 1 and position 2 aren't symmetric; the first player has a structural edge and can win outright whenever the odd-slot and even-slot totals differ.*

**How hard, and why.** Medium. The arithmetic is trivial and the answer is a single clean claim, but seeing it requires abandoning the natural greedy frame and spotting a hidden odd/even pattern — a small "aha," not a long derivation.

**Deep Dive (read before answering).** Interviewers love games where the "obvious" strategy is a trap, because they reveal whether you reason about the *whole* game or just your next move. Picture a tug-of-war over a line of coins. Your instinct screams *take the bigger end coin* — but every coin you remove uncovers a new end coin for your opponent. A move that looks generous to you can be a gift to them. Local greed and the global best are different animals, and the gap between them is exactly what an interviewer is probing.

Here is the trick that unlocks an entire family of these problems: stop thinking about coin *values* for a moment and label the coins by *position*. Number them 1 through 20 from the left. Notice something about the two ends of any stretch of row: in a 20-coin row the left end (position 1) is odd and the right end (position 20) is even. And every time a coin is removed from an end, the two new ends *still* have opposite positions — one odd, one even. So whoever is about to move always faces one odd-positioned and one even-positioned coin. That fact never breaks down while an even number of coins remains.

So before you compute anything, ask the question backward induction always asks: what can the player to move control all the way to the end? Split the 20 coins into two teams — the ten odd positions and the ten even positions — and add up each team's total value. The first player gets to decide which team to "lock in." That reframing turns a frightening 20-coin look-ahead into a one-line comparison of two sums. Hold that thought; the mechanism is the lesson.

**The same question, asked differently.** There are 2n coins of known values in a line. Two players alternate taking an end coin, and whoever ends with more total value wins. You move first. Is it *ever* a mistake to go first — that is, can the second player be the favourite? Justify it with a strategy, not a simulation. *(Same answer: no — the first player can always force at least a tie, regardless of the values, by committing to all-odd or all-even positions.)*

**Teach Me.** The claim: with an *even* number of coins, the first player can guarantee at least half of the total value — hence at least a tie, and an outright win whenever the odd-position and even-position totals differ. And the strategy needs no foresight about values: it's purely about position.

The strategy is the heart of it. Before play, compute two numbers: the sum of the values in the odd positions (1st, 3rd, 5th…) and the sum in the even positions (2nd, 4th, 6th…). Suppose the odd sum is the larger one (the other case is the mirror image). You resolve to take *only* odd-positioned coins. Why is that even possible? Because of the odd/even fact above: at the start, one end is an odd position, so you take it. After you take an odd coin, both new ends are even-positioned, so whatever your opponent does they must take an even coin — which re-exposes an odd coin at one end for you. So you can keep taking odd coins for all of your turns, collecting the entire odd team, which is at least half the money. Done.

Greedy, by contrast, can be made to lose — that's the point of option B. (In writing this up the agent reached for an example and muddled it; the clean illustration is the row 10, 100, 10, 5, where greedily taking an end 10 hands your opponent the 100. The robust takeaway is that greed *can* be beaten, whereas the odd/even strategy provably never loses — so quoting greed as a "guarantee" is simply false.) Option C errs by assuming the winner must track the values; option D errs by assuming symmetry forces a tie, when in fact the even count tips the balance to the first player.

A tiny sanity check: with just two coins, *a* and *b*, the first player takes the larger and is guaranteed at least half — which matches the formula. For two equal coins it's a forced tie, exactly the case where the odd and even sums are equal.

The reusable principle, and the warning. The technique is to find something the backward step can't destroy — here, the odd/even position pattern — which lets the first player split the board into two groups and seize the heavier one. It's the same move behind chessboard-colouring arguments and "mirror your opponent" strategies; name it so you recognise the family. One caution interviewers love to test as a follow-up: this guarantee relies on an *even* number of coins. With an odd number, the argument flips and it's the *second* player who gets the analogous edge.

---

### C2 — Hard: The last pebble is poison

**The scenario.** A single pile holds **24 pebbles**. You and an opponent take turns; you move first. On each turn you remove **1, 2, or 3** pebbles. The twist: whoever is *forced to take the very last pebble loses* (the last move is poison, not victory).

**The question.** With perfect play, who wins — and what's the general rule for a starting pile of *n* pebbles (still taking 1 to 3, last pebble loses)?

- **A) The first player wins; in general the player to move loses exactly when *n* is 1 more than a multiple of 4, so the mover wins for every other *n* (including 24).** ✅ *Correct.*
- **B)** The second player wins; the mover loses when *n* is a multiple of 4, and since 24 is a multiple of 4, the first player is doomed. — *Tempting because "multiple of 4 loses" is the correct rule for the NORMAL game where the last pebble wins. But the curse shifts the whole pattern by one: the bottom of the ladder is a pile of 1 (a loss), not a pile of 0.*
- **C)** The first player wins; the mover loses when *n* is 3 more than a multiple of 4. — *Tempting via "1, 2, 3 are safe takes, so 4 must be the danger." But that reverses the base case — a pile of 4 is actually a winning position (take 3, leave 1).*
- **D)** There's no clean rule, because "last one loses" games don't have a tidy formula; it depends on tie-breaking choices. — *Tempting because these games are famously messier in general. But a single pile with takes of 1 to 3 is simple enough that backward induction gives an exact, repeating rule.*

**How hard, and why.** Hard. It demands a full backward-induction sweep *and* the discipline to get the "last one loses" ending right — the off-by-one shift away from the familiar normal-play rule is precisely the trap most people fall into.

**Deep Dive (read before answering).** Two-player games where both sides have the same moves available, and only the position matters, have a beautiful classifying engine behind them. Every position is either a **losing** position (the player about to move will lose against perfect play) or a **winning** one (the player about to move can force a win). The engine is pure backward induction: start at the very end, where the outcome is obvious, label those positions, and propagate the labels backward. The rule that propagates is short and worth memorising: a position is *winning* if at least one legal move drops your opponent into a losing position; it's *losing* if every legal move hands your opponent a winning position. You're always trying to give your opponent a losing position; if you can, you're winning.

For "take 1 to 3, last pebble *wins*" (the normal version), this engine famously says: the player to move loses exactly on the multiples of 4. The intuition is the mirror trick — whatever your opponent takes (1, 2, or 3), you take the amount that completes 4, so each round removes exactly 4, and from a multiple of 4 you can keep restoring multiples of 4 until your opponent is cornered. That "complete the four" idea is the reusable skeleton for any such game: if you may take 1 up to k, the magic number is k + 1.

But our game is the *cursed* version — the last pebble loses. These look almost identical, and that's the danger: the strategy is the same in the middle of the game and changes only at the very end, where one player is now trying to *avoid* the final move. The whole question of who wins can hinge on that one shifted ending. So before you trust the "multiples of 4" reflex, do the one thing backward induction insists on: identify the true ending and label it first. In the normal game the winning end-state is having just taken the last pebble; in the cursed game, the position you want to hand your opponent is the single pebble they're forced to take. Those differ by one — and that one is the entire puzzle.

**The same question, asked differently.** Two players take turns calling out 1, 2, or 3, adding to a running total that starts at zero. The loser is whoever is forced to push the total to 24 or beyond — equivalently, whoever "takes" the 24th unit. You speak first. Can you force a win, and for a general target *N*, which targets doom the first speaker? *(Same answer: the player to move loses when the count remaining is 1 more than a multiple of 4; since 24 is a multiple of 4, the first player wins.)*

**Teach Me.** Let me build the ladder from the bottom, since that's where the curse lives. Write *P(n)* for "the player to move from a pile of *n* loses with perfect play." We want to know about 24, and the general rule. From a pile of *n* you can move to *n − 1*, *n − 2*, or *n − 3*.

Now nail the ending — this is the whole game. A player facing a pile of **1** has no choice but to take that last pebble, and taking the last pebble loses. So a pile of 1 is a **losing** position. (Contrast the normal game, where the end-state is a pile of 0 — "the opponent took the last one and won.") The curse slides the anchor from 0 to 1. Climb from there: a pile of 2, 3, or 4 is a *win*, because you can take just enough to leave your opponent exactly 1. A pile of 5 is a *loss*, because every move (to 4, 3, or 2) leaves your opponent in a winning position. Keep going and the pattern is unmistakable and repeats every 4: the losing piles are 1, 5, 9, 13, 17, 21, … — exactly the numbers that are **1 more than a multiple of 4**.

So where is 24? It's a multiple of 4, which is *not* 1-more-than-a-multiple-of-4, so 24 is a *winning* position: the **first player wins**. Concretely, your winning move is to leave your opponent on the nearest losing pile below 24, which is 21 — so you **take 3 pebbles**. After that you mirror: if your opponent takes *x*, you take *4 − x*, holding them on 21, then 17, 13, 9, 5, and finally 1, where they're forced to swallow the poison pebble.

The trap, stated plainly: the reflex answer is "multiples of 4 lose" (option B), which is right for the *normal* game and wrong here. The curse moves the losing pattern from multiples of 4 to *1 more than* a multiple of 4. Option C anchors the ending at the wrong spot altogether; option D gives up on a formula, but a single-pile game like this always yields an exact repeating rule. Note the delicious consequence: a pile of 24 is a *loss* for the mover in the normal game but a *win* in the cursed game — one twist flips the verdict. (Sanity check: a pile of 1 is a loss — matches the rule; a pile of 2 is a win — also matches.)

The reusable theorem, named: this is the winning-versus-losing-position analysis at the heart of combinatorial game theory (Sprague–Grundy). For a single pile where you may take 1 up to *k*: in the normal game the mover loses on multiples of (*k* + 1); in the cursed "last one loses" game it shifts to 1-more-than-a-multiple-of (*k* + 1). The habit that separates a strong candidate: always label the true ending first and work backward — never trust the "magic modulus" reflex before checking whether the last move wins or loses, because that one detail shifts the entire pattern by one and can reverse who's winning.

---

## D · The Process Coach

### D1 — Medium: The coin row, but the question is "what's your first move?"

**The scenario.** Sensei Cuttle lays out a row of **2N coins** of known but mixed values — for example, 8, 15, 3, 7. You and the interviewer take turns; on each turn you take one coin from either end of the row and keep it. You move first. You want to *guarantee* the largest total you can against perfect play. The interviewer asks: **"What's the cleanest first move — the one that locks in a guarantee?"**

**The question.** Which is the right answer to give?

- **A)** Greedily take the larger of the two end coins, then repeat. — *Tempting because it grabs the most right now. But a fat coin you expose at the new end can be snatched by your opponent next turn; local greed comes with no guarantee.*
- **B) Add up the coins in the odd positions and, separately, the coins in the even positions; whichever group is larger, you can force yourself to collect *all* of it, so open from the end that commits you to it — guaranteeing at least half the total.** ✅ *Correct.*
- **C)** Build the full game tree (a value table over every sub-row) and read off the perfect first move. — *Tempting, and genuinely correct as a way to find the perfect score. But it's a lot of computation, not a "clean" guaranteeing move — and the interviewer asked for the elegant lock-in, not a table.*
- **D)** It doesn't matter — by symmetry the first and second players split the coins evenly, so just play it out. — *Tempting because alternating turns "feels fair." But position 1 and position 2 are not symmetric: the first mover gets to choose which group to claim, an advantage worth strictly more than half on many layouts.*

**How hard, and why.** Medium. The arithmetic is trivial, but you have to *resist* the obvious greedy move and spot the odd/even structure that turns "I want to win" into "I can force a guarantee" — exactly the judgement this chapter trains.

**Deep Dive (read before answering).** There's a family of two-player games where the position *looks* symmetric — you alternate, you each grab one thing per turn — and the instinct is to play greedily and forward: "grab the best thing available, then see what's left." Greed feels safe because every single move is locally optimal. The quiet problem is that in a game against an opponent, what you leave behind is a gift to them. The coin you *don't* take, plus the coin you newly *expose*, are now *their* menu. Forward greed optimises your current bite while silently setting their table.

The deeper idea is that some games have a hidden piece of bookkeeping that turns "play well" into "follow a recipe that cannot fail." When pieces sit in a line and players always pluck from the ends, the *position* of a coin — whether it sits in an odd or even slot — becomes a near-magical handle. The two ends of any line always sit on opposite kinds of slots (one odd, one even), and after either player removes an end, the two new ends are *again* opposite. That regularity is the kind of unbreakable fact backward induction loves: it lets you reason about the whole game from its skeleton instead of simulating move by move.

The interviewer posing this isn't grading whether you can add four numbers. They're watching whether you reach for brute force, reach for greed, or pause and ask, "Is there a structural shortcut that makes a *guarantee* possible?" Trading desks care about guarantees and worst cases far more than about a lucky best case — a strategy that "usually wins" is the kind of thing that blows up an account. The candidate who says "let me find a move that locks in a floor on my result no matter what you do" is speaking the desk's language before computing a thing.

**The same question, asked differently (as a live decision).** You've just blurted out, "I'll take the bigger end coin each turn — greedy seems fine." The interviewer leans back, doesn't say whether you're right or wrong, and asks: "Before you commit — can you *guarantee* a floor on your score against my best play, or are you just hoping? If there's a move that lets you pre-claim a whole set of coins no matter what I do, what is it?" What do you say next? *(Same answer as B: split the coins by odd versus even position, target the heavier set, and open from the end that commits you to that set — you can force every coin in it.)*

**Teach Me.** Let's run the chapter's protocol — *clarify, represent, solve backward, sanity-check, explain* — because this question is really grading the protocol, not the number.

*Clarify.* First, say the rules back out loud: the values are known and visible; one coin per turn; only from the two ends; you move first; there's an *even* number of coins. That last point isn't decoration — it's the whole hinge, so confirm it if it isn't stated. A strong candidate checks "even count, I move first" before doing anything, because that's exactly what makes the guarantee exist. (With an *odd* number of coins the trick breaks and the analysis is harder — noticing that distinction shows you actually understand the mechanism rather than reciting it.)

*Represent.* The trap is to picture the game as "a sequence of grabs" and optimise each grab — that's option A, forward greed, with no guarantee. The second trap (option C) is to set up the full game tree, which is *correct* if someone asks for the perfect score, but it's heavy machinery when a one-line insight was wanted. The elegant representation is *position*: number the slots 1 to 2N; the two ends always have opposite positions, so the first player can decide at the start to take only odd-positioned coins (or only even), and can actually *enforce* it, because each of the opponent's moves re-exposes a coin of the chosen kind.

*Solve backward.* Add up the odd-position values and the even-position values; together they're the total. The first player picks the larger group and can force collecting all of it, so the first player guarantees at least the bigger group, which is at least half. That's the floor, and it holds no matter what the opponent does.

*Sanity-check.* Two checks. The floor is never below half (the larger of two groups is at least their average, which is half the total), so you can never lose. And on the example 8, 15, 3, 7: the odd positions (1st and 3rd) total 8 + 3 = 11, the even positions (2nd and 4th) total 15 + 7 = 22, so you target the evens, open by taking the 7 on the right, and go on to collect the 15 as well — 22 of the 33 on the table. Greed, by contrast, would have you open by grabbing the 8, exposing the 15 for your opponent.

*Explain.* Most candidates lose the offer at one of two spots: they commit to greed without checking whether it guarantees anything (no worst-case thinking — a red flag on a trading desk), or they immediately start drawing the full game-tree table and burn three minutes computing a perfect score when the interviewer only wanted the one-line structural insight. The reusable principle: in a game against a perfect opponent, don't optimise the current move — look for something unbreakable (here, odd-versus-even position) that lets you pre-commit to a forced outcome. And state the limits of your claim out loud: the trick guarantees *at least half*, not always the maximum, and it relies on an even number of coins. Naming those limits is exactly the calibrated, non-bluffing voice the desk is listening for.

---

### D2 — Hard: The countdown from 24, and "Are you sure?"

**The scenario.** A shared counter starts at **24**. Players take turns, and on your turn you subtract 1, 2, or 3 from it. Whoever makes the counter hit *exactly 0 loses* — being forced to take that final step down to zero is the losing move. You've worked it out and told the interviewer your conclusion. Stone-faced, the interviewer replies: **"Hmm. Are you sure?"**

**The question.** What is the correct response?

- **A)** "You're right, let me flip — I should go second." — *Tempting, because "are you sure?" feels like a verdict that you're wrong. But reflexively flipping a correct answer is exactly the failure this chapter warns about; the interviewer is testing your composure, not correcting you.*
- **B) "Let me re-derive it out loud rather than guess. The losing positions are the counts that are 1 more than a multiple of 4 — 1, 5, 9, 13, 17, 21. If I leave my opponent on one of those, they're stuck. Since 24 isn't one of them, I move first, subtract 3 to land them on 21, and hold the pattern from there. I want to go first — and here's why."** ✅ *Correct.*
- **C)** "Either start is fine, as long as I just always subtract 3 and play it out." — *Tempting because "subtract 3" was part of the winning line. But a fixed, blind subtraction isn't the strategy; the correct move each turn is whatever lands the opponent back on the next losing number, which depends on what they just did.*
- **D)** "I want to go second; whoever is forced to move first from 24 is the one who eventually hits 0." — *Tempting because in the famous "count to 21, last one loses" game the second player wins, so people transplant that answer. But the numbers differ: 24 isn't 1-more-than-a-multiple-of-4, so here the first mover controls.*

**How hard, and why.** Hard — not because the arithmetic is deep, but because it fuses a backward-induction derivation with the interviewer's "are you sure?" pressure. The highest-value move is to *re-verify*, rather than either caving (A) or stubbornly repeating yourself; and it baits the famous "count to 21" pattern-match (D).

**Deep Dive (read before answering).** These subtraction games are the purest backward-induction objects in the interview canon. You can't usefully reason forward — the quality of your first move depends on every move after it — so you flip the telescope and reason from the end. You label each position as a *winning* one (the player about to move can force a win) or a *losing* one (every move hands the opponent a win), starting from the obvious end and propagating backward. The rule: a position is winning if some legal move drops the opponent into a losing position, and losing if every move hands them a winning one. Apply that from the bottom up and the whole game is solved, usually revealing a clean repeating pattern.

But this question is doing something the chapter cares about even more than the maths. After you give your answer, the interviewer says "Are you sure?" — and watches you. This is the single most-studied moment in interview behaviour. Many sharp candidates hear "are you sure?" as a buzzer signalling they're wrong, and they flip a *correct* answer to please the room. Others freeze, or simply repeat their original answer louder, which shows no method. "Are you sure?" is almost never a verdict. It's a probe: do you have a procedure you trust more than my facial expression? The candidate who calmly says "good question — let me re-derive it, because I'd rather check than guess" is demonstrating exactly the self-checking discipline a desk needs from someone who'll one day be alone with a live position and real money on the line.

There's a second trap baked in. This game rhymes with the famous "count to 21, whoever says 21 loses" puzzle, where the second player wins. Pattern-matchers will transplant "go second" without re-checking that the numbers are different here. The cure is the same as the cure for "are you sure?": re-derive from the end, don't recite from memory.

**The same question, asked differently (the live moment).** You're at the whiteboard. You just confidently said, "I'll go first." The interviewer pauses, tilts their head, and says flatly: "Are you sure? Most people say second." They're not telling you you're wrong — and not telling you you're right. What do you actually do in the next thirty seconds, and what do you conclude about 24? *(The move: don't flip on reflex and don't just repeat yourself — say "let me verify by re-deriving the losing positions," recompute that they're the counts 1 more than a multiple of 4, confirm 24 isn't one of them, and restate "go first, open by subtracting 3 to land them on 21" — now backed by the derivation rather than by your nerve.)*

**Teach Me.** Run the protocol — *clarify, represent, solve backward, sanity-check, explain* — and notice this question grades two things at once: whether you can do the backward induction, and whether you keep your head when challenged.

*Clarify.* Lock the rules: the counter starts at 24; you subtract 1, 2, or 3 each turn; whoever makes it hit 0 *loses*. Restate the ending in your own words — "if it's my turn and the counter is at 1, I'm dead, because I must subtract at least 1, and that lands on 0." Confirming the ending is non-negotiable here, because "hit 0 loses" versus "hit 0 wins" flips the whole answer, and so does whether the start is 24 or 25. Sloppiness here is where the pattern-matchers (option D) quietly go wrong.

*Represent.* Don't simulate forward. Build the winning/losing ladder from the bottom. A counter of 1 is a *loss* (you must move to 0 and lose). From 2, 3, or 4 you can leave your opponent on 1, so those are *wins*. A counter of 5 is a *loss*, because your only moves (to 4, 3, 2) all hand your opponent a winning position. The pattern crystallises: the losing positions are exactly the counts that are 1 more than a multiple of 4 — 1, 5, 9, 13, 17, 21. The thing to hold is "always hand your opponent one of those numbers."

*Solve backward.* Where is 24? It's a multiple of 4, so it's *not* one of the losing numbers — it's a winning position for the player about to move. So you want to go first. Your opening move: subtract 3, leaving 21 (a losing number) for your opponent. From then on, whatever they subtract (call it *x*), you subtract *4 − x*, restoring the gap and marching them through 21 → 17 → 13 → 9 → 5 → 1, where they're forced to take the last step to 0. Note this kills option C: the correct move is *responsive* (4 minus their move), not a blind "always subtract 3."

*Sanity-check.* Two checks before committing. Replay a small case: at 5 (a loss), every move you make lets your opponent drop you to 1, where you're forced to 0 — confirms 5 is genuinely losing and the mechanism works. And do a pattern-match audit: this *looks* like "count to 21, last one loses," where the second player wins — but that game effectively starts at 0 and races *up* to 21 (a losing number), which is why the opener there is in the losing seat. Here the *start*, 24, is not a losing number, so the roles invert and the first mover wins. Same engine, different seat — exactly the twist option D misses.

*Explain.* This is the crux. After you answer "go first," the interviewer says "are you sure?" and the grade is almost entirely in your response. Caving (A) — flipping to "second" on reflex — is the worst outcome; it tells the desk you'll abandon a correct position the moment someone frowns, which is disqualifying for trading. Stubbornly repeating yourself isn't much better; it shows conviction without a checkable method. The winning move (B) is to treat "are you sure?" as *free information* and re-run the derivation aloud: "Fair challenge — let me verify. The losing positions are the counts 1 more than a multiple of 4; 24 isn't one; so the first player wins by opening to 21." If the re-derivation had exposed a mistake, you'd revise — gladly, because being right matters more than being consistent. Either way you've shown the thing the chapter says is half the score: a self-checking process you trust over the interviewer's poker face. The principle for your notebook: in any turn-taking game, classify positions backward into winning and losing, find the repeating pattern — and treat "are you sure?" as a prompt to verify, never a verdict to obey.

---

# My assessment

## The main finding: the lenses changed the *telling*, not always the *puzzle*
Despite four very different personalities, the agents kept reaching for the same underlying puzzles:
- **Three of four** used a "take a coin from either end of a row" game (the Desk Quant's hard question, First Principles' medium, and the Process Coach's medium).
- **Three of four** used a "take turns removing objects, and the last one to move loses" game (Sensei Cuttle's hard, First Principles' hard, the Process Coach's hard).
- **Two of four** used a "race to a target number" game (the Desk Quant's medium, Sensei Cuttle's medium).

So the lens powerfully shaped the *voice*, the *story*, the *distractors*, and **what the question actually tests** — the Process Coach turned the very same coin-row puzzle into a question about judgement, and the "are you sure?" question into a test of composure — but the lens did **not** force different *topics*. The practical lesson: if you want genuinely different puzzles next time, also hand each agent a different puzzle *type* (a two-player game, an optimal-stopping problem, a weighing problem, and so on), not just a different personality. Personality alone diversifies the teaching far more than the content.

## Best questions overall
1. **D2 — the "Are you sure?" countdown (Process Coach).** The best of the eight. It's the only one that tests what this chapter is *actually about* — the interview skill of staying composed, re-deriving instead of caving, and not blindly pattern-matching — on top of a correct backward-induction core. The two key wrong answers (cave; or transplant the famous "count to 21" answer) are the most psychologically real in the whole set.
2. **B2 — the Poison-Pearl Clam Council (Sensei Cuttle).** The best blend of charm and rigour: a genuinely sneaky twist (the "leave a multiple of 4" reflex is a perfect trap) wrapped in a memorable reef story, with the maths completely intact. It proves a cute question can also be hard.
3. **D1 — the coin row as a "what's your first move?" judgement question (Process Coach).** Reframing the parity puzzle as "what's the cleanest guaranteeing move?", with a *correct-but-overkill* option as a distractor, is a sophisticated and very on-brand design.

## Easiest
**B1 — the Coral-Tower race to 40 (Sensei Cuttle)**, narrowly ahead of the Desk Quant's race to 100. Both are single-idea "race to a number" games — the gentlest in the set — and B1 edges it thanks to the small target, the warm framing, and the most forgiving wrong answers. (The one place a careless learner slips: noticing that 40 isn't a multiple of 6.)

## Hardest
**C2 — the cursed pile of 24 (First Principles).** It needs a full winning/losing sweep *and* the exact "1 more than a multiple of 4" formula, with the most technical distractors (three competing rules). The Desk Quant's adversarial 12-coin row (A2) is a close second, since it requires *inventing* the colouring trick and separating "the floor I can guarantee" from "the most I could win." The other two hard questions cover the same difficulty but soften it with story (B2) or step-by-step coaching (D2), so they *feel* a notch easier.

## One quality flag
**C1's "Teach Me" fumbled its example of why greed fails** — the agent picked a row, then admitted greed actually wins on it. The conclusion is correct, but the worked example is sloppy and would need swapping for a clean one (such as the row 10, 100, 10, 5) before this question could ship.

## Verdict on the experiment
The **Process Coach** and **Sensei Cuttle** lenses produced the most distinctive, on-brand questions (judgement-testing; charming-but-rigorous). The **Desk Quant** was the most interview-authentic. **First Principles** was the most rigorous but the least differentiated — its content overlapped the others, and it had the one execution slip. If I had to pick one approach to scale, I'd combine the best two: a **Sensei Cuttle voice wrapped around a Process-Coach structure** — cute on the surface, testing real judgement underneath.
