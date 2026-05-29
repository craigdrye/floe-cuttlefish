// Bespoke mentor hints and correct-answer shortenings for the
// Brain Teasers core (37 questions in the quant track).
//
// BRAIN_TEASERS_MENTOR_HINTS overrides the generic Quant Finance scaffold
// hint with a one-line, second-person nudge that names the reasoning move
// without revealing the answer.
//
// BRAIN_TEASERS_CORRECT_SHORTENED trims the existing `correct` string for
// questions flagged by the length-heuristic audit. Any explanatory clauses
// removed from `correct` are reattached to the lesson via `lessonAddendum`
// so no information is lost.

export const BRAIN_TEASERS_MENTOR_HINTS: Record<number, string> = {
  19001: 'Work backward from 1 pirate. Each step shows who has zero in the fallback state — they are the cheapest votes to buy.',
  19002: 'The two slowest people must cross together to share a single penalty. Who returns the flashlight after they cross?',
  19003: 'You cannot use length as a proxy for time on uneven rope. What changes if you light a rope from both ends instead of one?',
  19004: 'A balance scale has three outcomes per weighing, not two. How many distinct outcomes do three weighings encode?',
  19005: 'Trailing zeros come from pairs of 2 and 5 in the factorization. Twos are plentiful — count the fives, including 25, 50, 75, 100.',
  19006: 'After a round of heats and a race of winners, ask which horses still have a credible claim to second or third place.',
  19007: 'Volume alone says yes. Look for a coloring or parity invariant that a 1x1x4 brick cannot satisfy across the 6x6x6 lattice.',
  19008: 'List the dates that force a digit to appear on both cubes (think 11, 22). Then ask whether one digit can do double duty.',
  19009: 'Two visual states (on/off) cannot distinguish three switches. What other physical property persists for minutes after a bulb is switched off?',
  19010: 'You need to expose the total sum without exposing any addend. What if the first person masks their salary with a private random number?',
  19011: 'Pick exactly as many coins as there are heads in the bag. What does flipping that subpile do to its head count?',
  19012: 'Since every label is wrong, the bag labeled "Mixed" cannot be Mixed. One draw from that bag pins down all three.',
  19013: 'One linear equation cannot solve for two unknowns. Compute a second power-sum of the array to get a second equation.',
  19014: 'Take a different number of coins from each bag so the weight deficit uniquely identifies which bag is fake.',
  19015: 'Binary search wastes the second ball. Set up first-ball drops so the worst case is the same whether it breaks early or late.',
  19016: 'One guard always tells the truth, the other always lies. Compose a question that forces both to give the same answer.',
  19017: 'You cannot transmit a key. What if both parties add and later remove their own padlock in turn?',
  19018: 'Look for a quantity preserved by every operation. What happens to the parity of the red count on each move?',
  19019: 'You need a one-bit channel and a way to aggregate. Make one prisoner the counter and let every other prisoner signal once.',
  19020: 'The numbers 1 through 12 have a fixed total. Divide that total by the number of pieces before worrying about the breaks.',
  19021: 'With only two colors, ask how many socks you can draw before the next one is guaranteed to match an earlier one.',
  19022: 'Pick any person and look at their five relationships. By pigeonhole, three must be of the same type — then chase the consequences.',
  19023: 'Random guessing gives you (1/2)^100. Exploit the cycle structure of the random permutation by starting at the box labeled with your own number.',
  19024: 'Use the fact that 10 is congruent to 1 modulo 9. What does that imply about a number and the sum of its digits?',
  19025: 'Reduce each color count modulo 3 and see how a meeting changes the triple. Compare with the all-one-color target.',
  19026: 'Try small n and look for the answer in disguise. Each split separates a unique set of coin pairs — once each.',
  19027: 'A break never produces more than one new piece. Count by tracking how the piece-count changes per break.',
  19028: 'Walk the loop once tracking cumulative net gas. Where on the loop is that quantity at its minimum?',
  19029: 'Seven prisoners can cover seven residue classes if each commits to a different target sum modulo 7.',
  19030: 'Each path ends with a final step of 1 or 2. What recurrence relates the number of ways for n stairs to smaller values?',
  19404: 'Add the conjugate (1 - sqrt(2))^3000 to (1 + sqrt(2))^3000. What do you know about the sum, and how tiny is the conjugate?',
  19406: 'Divide the unit square into a grid so pigeonhole forces three ants into one cell. Then check that the glass actually covers a cell.',
  19407: 'There are 3^5 = 243 possible bag configurations. Choose coin counts in powers of 3 so each configuration encodes uniquely on one scale.',
  19408: 'Each person has between 0 and 25 handshakes — but the extremes cannot coexist. How many distinct counts are actually available?',
  19409: 'Trace the implication "m^2 is even implies m is even" twice. What does that force about m and n given they share no common factor?',
  19818: 'Track what each merge does to the running total. The answer is the original sum offset by a count you can read off the move sequence.',
  19819: 'Try each candidate spread in turn and count how many of the four claims it makes true. Only one candidate hits exactly two.',
}

export const BRAIN_TEASERS_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  19009: {
    newCorrect: 'Turn Switch 1 on for 10 minutes, then off. Turn Switch 2 on and enter, using heat and light to distinguish all three.',
    lessonAddendum: 'Concretely: if the bulb is lit, Switch 2 controls it. If the bulb is off but warm, Switch 1 controls it. If the bulb is off and cold, Switch 3 controls it.',
  },
  19010: {
    newCorrect: 'Quant 1 adds a private random number to their salary and passes the running total. Each quant adds their salary; Quant 1 subtracts the random number and divides by 8.',
    lessonAddendum: 'The masking number prevents anyone from inferring partial sums, and only the originator can recover the true total to divide by 8.',
  },
  19011: {
    newCorrect: 'Take any 20 coins to form a new pile, then flip every coin in that pile.',
    lessonAddendum: 'Call k the number of heads you happened to grab. The flip turns those k heads into k tails and the 20-k tails into 20-k heads, so the new pile has 20-k heads — exactly matching the heads remaining in the old pile.',
  },
  19012: {
    newCorrect: 'Draw one fruit from the bag labeled "Mixed". Its contents identify all three bags by elimination.',
    lessonAddendum: 'If the draw is an apple, the "Mixed" bag is actually Apples. The "Oranges" bag cannot be Oranges (every label is wrong) and cannot be Apples (already assigned), so it must be Mixed, leaving the "Apples" bag as Oranges.',
  },
  19013: {
    newCorrect: 'Compute the sum and the sum of squares of the array and compare each to the expected values for 1..100, yielding two equations in the two missing numbers.',
    lessonAddendum: 'Let S and Q be the array sum and sum of squares. Then x + y = 5050 - S and x^2 + y^2 = 338350 - Q. Combine to get xy, then solve the quadratic t^2 - (x+y)t + xy = 0. Runs in O(n) time with O(1) extra space.',
  },
  19014: {
    newCorrect: 'Take 1 coin from bag 1, 2 from bag 2, up to 10 from bag 10, and weigh them once.',
    lessonAddendum: 'If all 55 coins were genuine, the scale would read 550 g. Each fake coin weighs 1 g less, so a deficit of k grams identifies bag k as the fake bag.',
  },
  19015: {
    newCorrect: '14 drops. Start at floor 14 and decrease the gap by 1 after each survival.',
    lessonAddendum: 'After a survival at floor 14, drop next from 14+13=27, then 27+12=39, and so on. The triangular sum 14+13+...+1=105 covers all 100 floors, and every breakage path uses at most 14 drops.',
  },
  19016: {
    newCorrect: 'Ask either guard: "Which door would the other guard say is the offer?" Then choose the opposite door.',
    lessonAddendum: 'Nesting the question through the other guard creates a single inversion of truth: the truth-teller honestly reports a lie, the liar dishonestly reports a truth. Either way the named door is wrong, so go to the other one.',
  },
  19017: {
    newCorrect: 'Lock the box with your padlock and send it. Friend adds their padlock and sends it back. Remove your padlock and send it; friend opens with their key.',
    lessonAddendum: 'No key ever travels and the box is never unlocked in transit. This works because the locking operations commute, which is the same property that underpins Diffie-Hellman-style key exchange.',
  },
  19019: {
    newCorrect: 'Appoint one spokesman. The spokesman flips the glass down and counts up-flips; every other prisoner flips the glass up exactly once.',
    lessonAddendum: 'Non-spokesmen flip the glass from down to up only the first time they see it down, then never again. The spokesman flips up-to-down on every visit and increments a counter. When the count reaches 49, every other prisoner has been called.',
  },
  19023: {
    newCorrect: 'Each prisoner i first opens box i, then opens the box labeled with the number they just found, repeating until they find their own number or exhaust 50 boxes.',
    lessonAddendum: 'Following the permutation cycle guarantees success whenever every cycle has length at most 50. The probability that a random permutation of 100 elements has no cycle longer than 50 is approximately 1 - ln(2) ≈ 30.7%, vastly better than (1/2)^100.',
  },
  19028: {
    newCorrect: 'Yes — start at the point where the cumulative net gas around the loop is minimized.',
    lessonAddendum: 'Walk the loop tracking (gas collected) minus (fuel consumed). Total gas equals total consumption, so the curve returns to its start. Beginning at the global minimum guarantees the running total never dips below zero on the remainder of the loop.',
  },
  19029: {
    newCorrect: 'Assign colors 0-6. Prisoner i guesses the color that makes the sum of all hats congruent to i modulo 7.',
    lessonAddendum: 'Each prisoner sees the other six hats and solves for the hat that completes their assigned residue. Exactly one prisoner — the one whose index matches the true total modulo 7 — guesses correctly, so the group survives with probability 1.',
  },
  19030: {
    newCorrect: '89',
    lessonAddendum: '89 is the 11th Fibonacci number. The count satisfies f(n) = f(n-1) + f(n-2) with f(1)=1 and f(2)=2, since the last step is either 1 or 2.',
  },
  19406: {
    newCorrect: 'Yes. Divide the square into 25 cells of side 1/5; pigeonhole forces one cell to contain at least 3 ants, and a glass of radius 1/7 covers an entire 1/5 cell.',
    lessonAddendum: 'The diagonal of a 1/5 cell is sqrt(2)/5 ≈ 0.283, which is less than the glass diameter 2/7 ≈ 0.286, so the glass centered on the cell encloses every ant inside it.',
  },
  19407: {
    newCorrect: '1 time',
    lessonAddendum: 'Take 1, 3, 9, 27, and 81 coins from bags 1-5. If every bag were 10 g, the scale would read 1210 g. The deviation from 1210 g, written in base 3 with digits in {-1, 0, +1}, identifies each bag as light, normal, or heavy in a single weighing.',
  },
  19408: {
    newCorrect: 'Yes. Each person has between 0 and 25 handshakes, but 0 and 25 cannot both occur, leaving 25 possible counts for 26 people.',
    lessonAddendum: 'If someone shook hands with all 25 others, then nobody can have zero handshakes; if someone has zero, nobody can have 25. Either way the count ranges over 25 values, so pigeonhole forces a repeat among 26 people.',
  },
  19409: {
    newCorrect: 'Both m and n must be even, contradicting the assumption that m/n was fully reduced.',
    lessonAddendum: 'From m^2 = 2n^2, m^2 is even, so m is even. Writing m = 2k gives n^2 = 2k^2, so n^2 is even and n is even. But m and n sharing the factor 2 contradicts the starting hypothesis that gcd(m, n) = 1.',
  },
}
