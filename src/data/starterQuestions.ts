import type { Question } from './questionCatalog/types'
import type { AgeGroup } from './ageCatalog/types'

// Safety-net fallback when a user's selected track has zero playable questions.
// In practice this should rarely fire — TrackSelectScreen gates empty tracks at line 520.
//
// Per Craig's 2026-05-18 strategic note: original quant-finance Pirates content was
// inappropriate for primary/high audiences. Then replaced with 5 age-neutral
// reasoning questions. Now (same date): split per tier so the fallback voice
// matches the audience that hit it. 5 questions × 4 tiers = 20 total.
//
// ID range: 4320000-4320099 reserved for starter fallback.
//   4320000-019 primary
//   4320020-039 high school
//   4320040-059 university
//   4320060-079 career
//
// Voice references:
//   - primary  → primaryBuilders.ts (Class 3–6 math voice)
//   - high     → highBuilders.ts + civicPoliticsQuestions.ts
//   - university → universityPrep.ts (interview-grade)
//   - career   → jargonBusters.ts (work-skills, US-flavored ok)

// --- PRIMARY (ages 8–11): friendly, math/reading/observation ----------------
const primaryStarter: Question[] = [
  {
    id: 4320000,
    kind: 'quick',
    topic: 'Primary',
    chapter: 'Warm-Up',
    title: 'Equal groups',
    briefing: 'Multiplication is a fast way of counting equal groups.',
    prompt: 'There are 6 baskets, and each basket has 4 apples in it. How many apples are there altogether?',
    fieldNote: 'Multiplication can replace repeated addition when every group is the same size.',
    mentorHint: 'Six groups of four — count by 4s: 4, 8, 12, 16, 20, 24.',
    xp: 4,
    answers: [
      { id: 'a', label: '24', correct: true },
      {
        id: 'b',
        label: '10',
        correct: false,
        misconceptions: [{
          tempting: '6 + 4 = 10.',
          flaw: 'That adds the numbers instead of counting all the apples in each basket.',
          reframe: 'When every group is the same size, multiply: 6 × 4.',
        }],
      },
      {
        id: 'c',
        label: '20',
        correct: false,
        misconceptions: [{
          tempting: '5 × 4 = 20.',
          flaw: 'There are 6 baskets, not 5. One basket was missed.',
          reframe: 'Count baskets carefully before multiplying.',
        }],
      },
      {
        id: 'd',
        label: '64',
        correct: false,
        misconceptions: [{
          tempting: 'It looks like sticking 6 and 4 together.',
          flaw: 'You cannot mash digits — you have to count actual apples.',
          reframe: 'Six groups of four is 24, not 64.',
        }],
      },
    ],
    solution: '6 baskets × 4 apples = 24 apples in total.',
    lesson: 'When every group has the same number, multiplication is faster than adding one group at a time.',
  },
  {
    id: 4320001,
    kind: 'quick',
    topic: 'Primary',
    chapter: 'Warm-Up',
    title: 'Shaded parts',
    briefing: 'A fraction names how many equal parts of a whole you have.',
    prompt: 'A pizza is cut into 8 equal slices. Maya eats 3 slices. What fraction of the pizza did Maya eat?',
    fieldNote: 'The bottom number (denominator) is the total equal parts. The top (numerator) is how many were used.',
    mentorHint: 'Eaten slices go on top. Total slices go on the bottom.',
    xp: 4,
    answers: [
      { id: 'a', label: '3/8', correct: true },
      {
        id: 'b',
        label: '8/3',
        correct: false,
        misconceptions: [{
          tempting: 'Put 8 on top because it is the bigger number.',
          flaw: 'The fraction is upside-down. The whole always goes on the bottom.',
          reframe: 'Part on top, whole on bottom: 3 eaten out of 8 total.',
        }],
      },
      {
        id: 'c',
        label: '3/5',
        correct: false,
        misconceptions: [{
          tempting: '3 eaten, 5 left, so 3/5.',
          flaw: 'The denominator is the total slices, not just the leftover ones.',
          reframe: 'Bottom number is the whole pizza count — 8 slices.',
        }],
      },
      {
        id: 'd',
        label: '1/3',
        correct: false,
        misconceptions: [{
          tempting: 'She ate 3 slices, so write 1/3.',
          flaw: '1/3 would mean the pizza was cut into 3 parts, not 8.',
          reframe: 'Match the denominator to how many equal parts the whole was cut into.',
        }],
      },
    ],
    solution: '3 slices eaten out of 8 equal slices means 3/8 of the pizza.',
    lesson: 'In a fraction, the top counts what you have and the bottom counts the total equal parts.',
  },
  {
    id: 4320002,
    kind: 'quick',
    topic: 'Primary',
    chapter: 'Warm-Up',
    title: 'What does the story say?',
    briefing: 'Inference means using clues in the text to figure out what is not said directly.',
    prompt: 'Tom came home, saw water dripping off his sister\'s raincoat, and asked her if she remembered to bring the laundry inside. Why did Tom ask about the laundry?',
    fieldNote: 'Tom did not say "it was raining" — the dripping raincoat is the clue.',
    mentorHint: 'Wet raincoat means it rained outside. What happens to laundry on a line when it rains?',
    xp: 4,
    answers: [
      { id: 'a', label: 'He was worried the laundry got wet because it had been raining', correct: true },
      {
        id: 'b',
        label: 'He wanted his sister to do more chores',
        correct: false,
        misconceptions: [{
          tempting: 'Maybe it is just a chore reminder.',
          flaw: 'Nothing in the story suggests Tom was thinking about chores in general.',
          reframe: 'Use the specific clue the story gives you — the dripping coat.',
        }],
      },
      {
        id: 'c',
        label: 'He wanted to wash the laundry himself',
        correct: false,
        misconceptions: [{
          tempting: 'Maybe Tom is being helpful.',
          flaw: 'The story does not mention Tom washing anything.',
          reframe: 'Stick to clues that are actually in the text.',
        }],
      },
      {
        id: 'd',
        label: 'He thought his sister was lying about going out',
        correct: false,
        misconceptions: [{
          tempting: 'Maybe he doubts her.',
          flaw: 'Tom can see the raincoat — he already knows she went out.',
          reframe: 'The wet coat is evidence of rain, not evidence of lying.',
        }],
      },
    ],
    solution: 'The wet raincoat tells Tom it rained, and rain would soak laundry left outside on a line. That is why he asked.',
    lesson: 'Good readers pick up clues the writer leaves on purpose, even when the reason is not spelled out.',
  },
  {
    id: 4320003,
    kind: 'quick',
    topic: 'Primary',
    chapter: 'Warm-Up',
    title: 'Which one is the odd shape?',
    briefing: 'Shapes can be sorted by how many sides they have.',
    prompt: 'Which of these shapes is NOT a quadrilateral: square, triangle, rectangle, rhombus?',
    fieldNote: 'A quadrilateral is any flat shape with exactly four straight sides.',
    mentorHint: 'Count the sides on each shape. Which one does not have four?',
    xp: 4,
    answers: [
      { id: 'a', label: 'Triangle', correct: true },
      {
        id: 'b',
        label: 'Square',
        correct: false,
        misconceptions: [{
          tempting: 'A square has its own name, so maybe it is not a quadrilateral.',
          flaw: 'A square has four equal sides — that makes it a quadrilateral.',
          reframe: 'A shape can have a special name and still belong to a bigger group.',
        }],
      },
      {
        id: 'c',
        label: 'Rectangle',
        correct: false,
        misconceptions: [{
          tempting: 'A rectangle looks different from a square.',
          flaw: 'A rectangle still has four straight sides, so it is a quadrilateral.',
          reframe: 'The test is the number of sides, not whether they are all equal.',
        }],
      },
      {
        id: 'd',
        label: 'Rhombus',
        correct: false,
        misconceptions: [{
          tempting: 'A rhombus is tilted, so maybe it doesn\'t count.',
          flaw: 'A rhombus has four equal straight sides — it is still a quadrilateral.',
          reframe: 'Tilting a shape does not change how many sides it has.',
        }],
      },
    ],
    solution: 'A triangle has three sides, so it is the only one that is not a quadrilateral.',
    lesson: 'Group shapes by counting their sides, not by their name or how they look turned.',
  },
  {
    id: 4320004,
    kind: 'quick',
    topic: 'Primary',
    chapter: 'Warm-Up',
    title: 'Find the pattern',
    briefing: 'Look at how each step changes to find the rule.',
    prompt: 'A pattern goes: 3, 6, 9, 12, ___. What number comes next?',
    fieldNote: 'Check the difference between each pair of numbers. If it is always the same, that is the step.',
    mentorHint: 'From 3 to 6 is +3. From 6 to 9 is +3. Keep going.',
    xp: 4,
    answers: [
      { id: 'a', label: '15', correct: true },
      {
        id: 'b',
        label: '13',
        correct: false,
        misconceptions: [{
          tempting: 'Just add 1 after 12.',
          flaw: 'The rule has been +3 every step, not +1.',
          reframe: 'Use the same rule that worked for all the earlier numbers.',
        }],
      },
      {
        id: 'c',
        label: '24',
        correct: false,
        misconceptions: [{
          tempting: 'Maybe each number doubles.',
          flaw: 'Doubling would give 3, 6, 12, 24 — but the third number here is 9, not 12.',
          reframe: 'Always check the rule fits every step you can already see.',
        }],
      },
      {
        id: 'd',
        label: '16',
        correct: false,
        misconceptions: [{
          tempting: 'It is one more than 15.',
          flaw: 'Adding 4 would not match the +3 steps you can see earlier.',
          reframe: 'Stick to the rule you found.',
        }],
      },
    ],
    solution: 'Each number is 3 more than the one before. 12 + 3 = 15.',
    lesson: 'Find the rule by checking every step, then use that same rule to predict the next number.',
  },
]

// --- HIGH SCHOOL (ages 12–17): algebra/logic/reasoning ----------------------
const highStarter: Question[] = [
  {
    id: 4320020,
    kind: 'quick',
    topic: 'High',
    chapter: 'Warm-Up',
    title: 'Slope from two points',
    briefing: 'Slope measures how steep a line is — rise over run.',
    prompt: 'A line passes through the points (1, 2) and (4, 11). What is its slope?',
    fieldNote: 'Slope = (change in y) / (change in x). Subtract in the same order on top and bottom.',
    mentorHint: 'Rise is 11 − 2 = 9. Run is 4 − 1 = 3.',
    xp: 4,
    answers: [
      { id: 'a', label: '3', correct: true },
      {
        id: 'b',
        label: '1/3',
        correct: false,
        misconceptions: [{
          tempting: 'Put the change in x on top by mistake.',
          flaw: 'Slope is rise over run — y-change goes on top, not the other way around.',
          reframe: 'Always write (y₂ − y₁) / (x₂ − x₁), in that order.',
        }],
      },
      {
        id: 'c',
        label: '9',
        correct: false,
        misconceptions: [{
          tempting: 'Only compute the rise.',
          flaw: 'That gives you the change in y but skips dividing by the change in x.',
          reframe: 'Slope is rise divided by run, not just rise.',
        }],
      },
      {
        id: 'd',
        label: '−3',
        correct: false,
        misconceptions: [{
          tempting: 'Flip the subtraction order on top but not on the bottom.',
          flaw: 'Mixing subtraction order flips the sign incorrectly.',
          reframe: 'Subtract in the same order in both the numerator and denominator.',
        }],
      },
    ],
    solution: 'Rise = 11 − 2 = 9. Run = 4 − 1 = 3. Slope = 9 / 3 = 3.',
    lesson: 'Slope = (y₂ − y₁) / (x₂ − x₁) — keep the subtraction order consistent.',
  },
  {
    id: 4320021,
    kind: 'quick',
    topic: 'High',
    chapter: 'Warm-Up',
    title: 'Evaluate a function',
    briefing: 'Plugging a number into a function means replacing the variable with that number wherever it appears.',
    prompt: 'If f(x) = 2x² − 5, what is f(3)?',
    fieldNote: 'Order of operations: square first, then multiply by 2, then subtract 5.',
    mentorHint: '3² = 9. Then 2 × 9 = 18. Then 18 − 5.',
    xp: 4,
    answers: [
      { id: 'a', label: '13', correct: true },
      {
        id: 'b',
        label: '31',
        correct: false,
        misconceptions: [{
          tempting: 'Square the whole 2x as (2 × 3)² = 36, then subtract 5.',
          flaw: 'The exponent applies only to x, not to the coefficient 2.',
          reframe: 'Only x is squared. The 2 multiplies the result of x².',
        }],
      },
      {
        id: 'c',
        label: '1',
        correct: false,
        misconceptions: [{
          tempting: 'Compute 2 × 3 = 6, square to get 36 / oh wait — or do 2 × 3 − 5 = 1.',
          flaw: 'That treats x² as just x, dropping the exponent entirely.',
          reframe: 'Do not ignore the squared symbol — that changes the answer.',
        }],
      },
      {
        id: 'd',
        label: '7',
        correct: false,
        misconceptions: [{
          tempting: '2(3) = 6, 6² = 36, 36 − 5 = 31 — sign flipped to 7?',
          flaw: 'Subtraction was applied to the wrong intermediate value.',
          reframe: 'Walk through the operations one step at a time.',
        }],
      },
    ],
    solution: 'f(3) = 2(3²) − 5 = 2(9) − 5 = 18 − 5 = 13.',
    lesson: 'Exponents bind tighter than multiplication — square the x first, then multiply.',
  },
  {
    id: 4320022,
    kind: 'quick',
    topic: 'High',
    chapter: 'Warm-Up',
    title: 'Valid deduction',
    briefing: 'A valid deduction is one whose conclusion must be true if the premises are true.',
    prompt: 'Premise 1: All members of the chess club know how to play chess. Premise 2: Priya is a member of the chess club. Which conclusion logically follows?',
    fieldNote: 'Combine the two premises directly — what must be true about Priya?',
    mentorHint: 'If every member knows chess, and Priya is a member, then Priya must…',
    xp: 4,
    answers: [
      { id: 'a', label: 'Priya knows how to play chess', correct: true },
      {
        id: 'b',
        label: 'Everyone who knows chess is in the chess club',
        correct: false,
        misconceptions: [{
          tempting: 'Flip the first premise around.',
          flaw: '"All A are B" does not mean "all B are A". Plenty of people know chess without joining the club.',
          reframe: 'Direction matters in logical statements — do not reverse them.',
        }],
      },
      {
        id: 'c',
        label: 'Priya is the best chess player in the club',
        correct: false,
        misconceptions: [{
          tempting: 'Going beyond what the premises actually say.',
          flaw: 'Knowing how to play is not the same as being the best.',
          reframe: 'Conclude only what the premises actually give you.',
        }],
      },
      {
        id: 'd',
        label: 'Priya invented chess',
        correct: false,
        misconceptions: [{
          tempting: 'Adding facts the premises never mentioned.',
          flaw: 'Neither premise mentions inventing chess.',
          reframe: 'Stay strictly within what the premises support.',
        }],
      },
    ],
    solution: 'Premise 1 says every chess club member knows chess. Premise 2 places Priya in that group. So Priya must know chess.',
    lesson: 'A valid conclusion is one that is forced by the premises — no extra information, no reversed direction.',
  },
  {
    id: 4320023,
    kind: 'quick',
    topic: 'High',
    chapter: 'Warm-Up',
    title: 'Read the chart claim',
    briefing: 'A claim about data must be supported by what the data actually shows, not by what feels intuitive.',
    prompt: 'A school reports: "Students who eat breakfast score higher on math tests than students who skip breakfast." Which of the following is the safest interpretation?',
    fieldNote: 'A correlation between two things does not by itself prove one causes the other.',
    mentorHint: 'Could there be a third factor — like a more stable home routine — that affects both breakfast habits and test scores?',
    xp: 4,
    answers: [
      { id: 'a', label: 'There is a link between eating breakfast and higher scores, but other factors may also be involved', correct: true },
      {
        id: 'b',
        label: 'Eating breakfast definitely causes higher math scores',
        correct: false,
        misconceptions: [{
          tempting: 'A clear pattern looks like cause.',
          flaw: 'A pattern in observed data can have other explanations: family routine, sleep, household income.',
          reframe: 'Only a controlled experiment can establish causation cleanly.',
        }],
      },
      {
        id: 'c',
        label: 'High math scores cause students to eat breakfast',
        correct: false,
        misconceptions: [{
          tempting: 'Reverse the direction.',
          flaw: 'Nothing in the data shows scores changing breakfast habits.',
          reframe: 'Without evidence, reversed causation is just guessing.',
        }],
      },
      {
        id: 'd',
        label: 'Breakfast has nothing to do with math scores',
        correct: false,
        misconceptions: [{
          tempting: 'Reject the data entirely.',
          flaw: 'The school reports a real difference. Dismissing it ignores actual evidence.',
          reframe: 'You can doubt the cause without denying the correlation.',
        }],
      },
    ],
    solution: 'The data shows a link, but other variables — family routine, sleep, income — could explain both habits. Reporting the link without overclaiming cause is safest.',
    lesson: 'Distinguish correlation from causation: a pattern between two things does not mean one causes the other.',
  },
  {
    id: 4320024,
    kind: 'quick',
    topic: 'High',
    chapter: 'Warm-Up',
    title: 'Solve for x',
    briefing: 'Whatever you do to one side of an equation, you must do to the other.',
    prompt: 'Solve for x: 3x + 7 = 22.',
    fieldNote: 'Isolate x: first remove the constant on its side, then divide by the coefficient.',
    mentorHint: 'Subtract 7 from both sides. Then divide both sides by 3.',
    xp: 4,
    answers: [
      { id: 'a', label: 'x = 5', correct: true },
      {
        id: 'b',
        label: 'x = 29/3',
        correct: false,
        misconceptions: [{
          tempting: 'Add 7 to both sides instead of subtracting it.',
          flaw: 'To remove +7 from the left, you subtract 7 from both sides, not add.',
          reframe: 'Use the inverse operation to undo what is on x\'s side.',
        }],
      },
      {
        id: 'c',
        label: 'x = 15',
        correct: false,
        misconceptions: [{
          tempting: 'Stop after subtracting 7 (so 3x = 15), forget to divide by 3.',
          flaw: 'You isolated 3x, not x itself. Still need to divide by the coefficient.',
          reframe: 'Both steps: subtract the constant, then divide by the coefficient.',
        }],
      },
      {
        id: 'd',
        label: 'x = 22/10',
        correct: false,
        misconceptions: [{
          tempting: 'Combine the 3 and the 7 into a 10 and divide.',
          flaw: 'You cannot add a coefficient (3) and a constant (7) — they are different kinds of terms.',
          reframe: 'Only combine like terms. 3x and 7 are not like terms.',
        }],
      },
    ],
    solution: '3x + 7 = 22 → 3x = 15 → x = 5.',
    lesson: 'Solve linear equations by undoing constants first, then coefficients — and never combine unlike terms.',
  },
]

// --- UNIVERSITY (ages 18–22): interview-grade probability/stats/reasoning ---
const universityStarter: Question[] = [
  {
    id: 4320040,
    kind: 'quick',
    topic: 'University',
    chapter: 'Warm-Up',
    title: 'Expected value of a die roll',
    briefing: 'Expected value is the long-run average of a random outcome, weighted by probability.',
    prompt: 'You roll a fair six-sided die. If the result is even, you win that many dollars; if it is odd, you win nothing. What is the expected payout per roll?',
    fieldNote: 'Sum over all outcomes: probability × payout. Each face has probability 1/6.',
    mentorHint: 'Only the even faces (2, 4, 6) contribute. Each contributes (1/6) × its value.',
    xp: 4,
    answers: [
      { id: 'a', label: '$2.00', correct: true },
      {
        id: 'b',
        label: '$3.50',
        correct: false,
        misconceptions: [{
          tempting: 'That is the expected value of a normal die roll: (1+2+3+4+5+6)/6.',
          flaw: 'But odd rolls pay zero here, not their face value.',
          reframe: 'Re-weight: only the even faces contribute to the payout.',
        }],
      },
      {
        id: 'c',
        label: '$4.00',
        correct: false,
        misconceptions: [{
          tempting: 'Average of just the even faces: (2+4+6)/3.',
          flaw: 'That conditions on rolling an even, but the question asks the unconditional expected payout.',
          reframe: 'Half the rolls pay zero — they still count in the average.',
        }],
      },
      {
        id: 'd',
        label: '$1.00',
        correct: false,
        misconceptions: [{
          tempting: 'Half of $2 because half the rolls pay nothing.',
          flaw: 'The non-zero half does not pay $2 on average — it pays (2+4+6)/3 = $4 on average.',
          reframe: 'Expected value = P(even) × E[payout | even] = 0.5 × $4 = $2.',
        }],
      },
    ],
    solution: 'E[payout] = (1/6)(0) + (1/6)(2) + (1/6)(0) + (1/6)(4) + (1/6)(0) + (1/6)(6) = 12/6 = $2.',
    lesson: 'Expected value weights every possible outcome by its probability — including the zero-payout ones.',
  },
  {
    id: 4320041,
    kind: 'quick',
    topic: 'University',
    chapter: 'Warm-Up',
    title: 'Base rate trap',
    briefing: 'When base rates are low, even an accurate test produces lots of false positives. Bayes\' rule formalizes this.',
    prompt: 'A disease affects 1 in 1,000 people. A test correctly flags 99% of true cases and falsely flags 5% of healthy people. A random person tests positive. Roughly what is the probability they actually have the disease?',
    fieldNote: 'Compare true positives to total positives, not test accuracy to 100%.',
    mentorHint: 'Out of 1,000 people: ~1 true positive vs ~50 false positives. What share is real?',
    xp: 4,
    answers: [
      { id: 'a', label: 'About 2%', correct: true },
      {
        id: 'b',
        label: 'About 99%',
        correct: false,
        misconceptions: [{
          tempting: 'The test catches 99% of cases, so a positive must mean ~99% chance.',
          flaw: 'That conflates sensitivity with positive predictive value. Base rate destroys this intuition.',
          reframe: 'Bayes: P(disease | positive) depends heavily on the prevalence.',
        }],
      },
      {
        id: 'c',
        label: 'About 95%',
        correct: false,
        misconceptions: [{
          tempting: '5% false positive rate, so subtract from 100%.',
          flaw: 'The false positive rate alone does not give you the predictive value at low prevalence.',
          reframe: 'You need both branches: true positives and false positives, then take the ratio.',
        }],
      },
      {
        id: 'd',
        label: 'About 50%',
        correct: false,
        misconceptions: [{
          tempting: 'Positive or not — feels like a coin flip.',
          flaw: 'Symmetry intuition fails because the prior is heavily skewed toward "healthy".',
          reframe: 'When the prior is 1/1000, even a strong test cannot get you to 50% from one positive.',
        }],
      },
    ],
    solution: 'Per 1,000 people: ~1 true positive, ~0.05 × 999 ≈ 50 false positives. P(disease | positive) ≈ 1 / (1 + 50) ≈ 2%.',
    lesson: 'A positive on a rare-disease test is dominated by false positives unless the prior is high — always compute the predictive value with base rates.',
  },
  {
    id: 4320042,
    kind: 'quick',
    topic: 'University',
    chapter: 'Warm-Up',
    title: 'p-value interpretation',
    briefing: 'A p-value is the probability of observing data at least as extreme as what was seen, assuming the null hypothesis is true.',
    prompt: 'A clinical trial reports p = 0.03 for a new drug vs placebo. Which interpretation is correct?',
    fieldNote: 'The p-value is a conditional probability about the data, not about the hypothesis.',
    mentorHint: 'Does p = 0.03 tell you the probability the drug works, or the probability of this data if it does not?',
    xp: 4,
    answers: [
      { id: 'a', label: 'If the drug had no real effect, we\'d see data this extreme about 3% of the time', correct: true },
      {
        id: 'b',
        label: 'There is a 97% chance the drug works',
        correct: false,
        misconceptions: [{
          tempting: '1 − p as the probability the alternative is true.',
          flaw: 'The p-value is P(data | null), not P(alternative | data). Those are different quantities.',
          reframe: 'Flipping conditional probabilities requires Bayes\' rule and a prior.',
        }],
      },
      {
        id: 'c',
        label: 'There is a 3% chance the null hypothesis is true',
        correct: false,
        misconceptions: [{
          tempting: 'Directly map p onto the null\'s probability.',
          flaw: 'P(null | data) ≠ P(data | null). A p-value never tells you the probability a hypothesis is true.',
          reframe: 'The p-value is about the data assuming the null — not about the null itself.',
        }],
      },
      {
        id: 'd',
        label: 'The result will replicate in 97% of future trials',
        correct: false,
        misconceptions: [{
          tempting: 'Tie p to replication rate.',
          flaw: 'Replication probability is governed by power, effect size, and noise — not the original p-value.',
          reframe: 'p-values do not forecast replication; they describe one observation under one assumption.',
        }],
      },
    ],
    solution: 'p = 0.03 means: if the null (no effect) were true, we\'d see data this extreme or more in roughly 3% of trials.',
    lesson: 'A p-value is P(data | null) — it never directly tells you the probability that the null or the alternative is true.',
  },
  {
    id: 4320043,
    kind: 'quick',
    topic: 'University',
    chapter: 'Warm-Up',
    title: 'Selection bias spot check',
    briefing: 'When the sample is filtered by an outcome, naive comparisons can flip the true direction of a relationship.',
    prompt: 'A study finds that among hospitalized patients, smokers have a LOWER rate of a certain disease than non-smokers. A researcher concludes smoking protects against the disease. What is the most likely flaw?',
    fieldNote: 'Conditioning on hospitalization (a collider) can induce a spurious association between two causes of hospitalization.',
    mentorHint: 'Both smoking and the disease independently increase the chance of being hospitalized. What happens when you only look at hospitalized people?',
    xp: 4,
    answers: [
      { id: 'a', label: 'Conditioning on hospitalization induces a negative association between two independent causes (collider/Berkson bias)', correct: true },
      {
        id: 'b',
        label: 'Smoking really does protect — the data speaks for itself',
        correct: false,
        misconceptions: [{
          tempting: 'Trust the within-sample correlation.',
          flaw: 'The sample is conditioned on hospitalization, which distorts the comparison.',
          reframe: 'A biased sample can show a sign opposite to the true population effect.',
        }],
      },
      {
        id: 'c',
        label: 'The sample size is probably too small',
        correct: false,
        misconceptions: [{
          tempting: 'Default to "more data fixes it".',
          flaw: 'A structural sampling bias does not shrink with more data — it just becomes more precisely wrong.',
          reframe: 'You need a different sampling frame, not a bigger one.',
        }],
      },
      {
        id: 'd',
        label: 'The researcher confused mean with median',
        correct: false,
        misconceptions: [{
          tempting: 'Reach for a familiar statistical bug.',
          flaw: 'Nothing in the setup involves a mean-vs-median issue.',
          reframe: 'The issue is what was conditioned on, not how the average was computed.',
        }],
      },
    ],
    solution: 'Hospitalization is a collider: both smoking and the disease cause it. Filtering to hospitalized people induces a spurious negative correlation between the two causes — Berkson\'s bias.',
    lesson: 'Conditioning on a common effect (a collider) can create or reverse correlations. Define the sampling frame before interpreting any association.',
  },
  {
    id: 4320044,
    kind: 'quick',
    topic: 'University',
    chapter: 'Warm-Up',
    title: 'Coin trick',
    briefing: 'Independence means past outcomes do not change future probabilities.',
    prompt: 'A fair coin has just landed heads ten times in a row. On the next flip, what is the probability of heads?',
    fieldNote: 'For a fair coin, each flip is independent — the coin has no memory.',
    mentorHint: 'The coin\'s probability of heads is a property of the coin, not of the streak.',
    xp: 4,
    answers: [
      { id: 'a', label: '1/2', correct: true },
      {
        id: 'b',
        label: 'Much less than 1/2 — tails is "due"',
        correct: false,
        misconceptions: [{
          tempting: 'Gambler\'s fallacy: long runs must even out.',
          flaw: 'A fair coin\'s next flip has no memory of past flips. P(heads) stays 1/2.',
          reframe: '"Evening out" happens in the long-run frequency, not in the next outcome.',
        }],
      },
      {
        id: 'c',
        label: 'Much more than 1/2 — the coin is on a hot streak',
        correct: false,
        misconceptions: [{
          tempting: '"Hot hand" — assume momentum.',
          flaw: 'Momentum only matters if we doubt the coin is fair. The premise says it is fair.',
          reframe: 'If you suspect bias, that is a separate question — and one flip will not resolve it.',
        }],
      },
      {
        id: 'd',
        label: '1/1024',
        correct: false,
        misconceptions: [{
          tempting: 'Reuse the probability of 10 heads in a row (1/2^10) for the next flip.',
          flaw: 'That is the joint probability of a sequence, not the marginal probability of one flip.',
          reframe: 'Once the streak has already happened, only the next flip matters — and it is still 1/2.',
        }],
      },
    ],
    solution: 'Given a fair coin, each flip is independent. P(heads on next flip) = 1/2, regardless of the streak.',
    lesson: 'Independence: the past does not change the next probability for a fair process. Beware the gambler\'s fallacy.',
  },
]

// --- CAREER (ages 23+, career-changer): work-skills, US-flavored ok ---------
const careerStarter: Question[] = [
  {
    id: 4320060,
    kind: 'quick',
    topic: 'Career Skills',
    chapter: 'Warm-Up',
    title: 'Decode the ask',
    briefing: 'Workplace asks are often wrapped in jargon. Cutting through the language is half the job.',
    prompt: 'Your manager writes: "Can you put together a quick deck that frames the Q3 number against last year so leadership can decide whether we double down on the SMB segment?" What are you actually being asked to do?',
    fieldNote: 'Two real things: (1) build a short presentation, (2) compare Q3 results to the prior year, with a recommendation as the punchline.',
    mentorHint: 'Strip out the jargon — what concrete outputs would your manager point to in a week?',
    xp: 4,
    answers: [
      { id: 'a', label: 'Make a short presentation comparing this Q3 to last year, ending with a recommendation about investing more in the small-business segment', correct: true },
      {
        id: 'b',
        label: 'Hire more salespeople for the small-business team',
        correct: false,
        misconceptions: [{
          tempting: 'Jump to the action.',
          flaw: 'The manager wants a decision-support deck, not a hiring move.',
          reframe: 'Leadership has not decided yet — your job is to inform the decision.',
        }],
      },
      {
        id: 'c',
        label: 'Write a long strategy memo on the company\'s entire go-to-market plan',
        correct: false,
        misconceptions: [{
          tempting: 'Overdeliver to look thorough.',
          flaw: '"Quick deck" + "Q3 vs LY" is narrower than full GTM strategy.',
          reframe: 'Match the scope to the words: short, comparative, decision-focused.',
        }],
      },
      {
        id: 'd',
        label: 'Cancel the SMB segment entirely',
        correct: false,
        misconceptions: [{
          tempting: 'Pre-empt the recommendation.',
          flaw: 'The manager has not made the call — they want analysis first.',
          reframe: 'Recommendations come from the deck, not before it.',
        }],
      },
    ],
    solution: 'Translation: build a short, focused presentation that puts Q3 next to the same quarter last year for the small-business segment, and end with a clear "invest more / don\'t" recommendation.',
    lesson: 'When an ask comes wrapped in business language, translate it into concrete deliverables and scope before you start.',
  },
  {
    id: 4320061,
    kind: 'quick',
    topic: 'Career Skills',
    chapter: 'Warm-Up',
    title: 'Prioritize the inbox',
    briefing: 'When everything looks urgent, the question is which task has the highest cost if delayed.',
    prompt: 'On Monday morning you have: (1) a teammate\'s code review request, due "whenever", (2) a client escalation that the support team flagged as blocking a deployment today, (3) a calendar invite to a brainstorm next week, (4) a personal expense report due Friday. Which do you handle first?',
    fieldNote: 'Compare what breaks if you delay each item by a day.',
    mentorHint: 'Which item has a deadline measured in hours and downstream people waiting on it?',
    xp: 4,
    answers: [
      { id: 'a', label: 'The client escalation — it is blocking a deployment today and other people are waiting on you', correct: true },
      {
        id: 'b',
        label: 'The code review, because being a good teammate matters most',
        correct: false,
        misconceptions: [{
          tempting: 'Optimize for collegiality.',
          flaw: 'The teammate said "whenever" — a delayed review has low cost. A blocked deployment has high cost.',
          reframe: 'Sort by cost-of-delay, not by who you most want to please.',
        }],
      },
      {
        id: 'c',
        label: 'The expense report, to clear small tasks first',
        correct: false,
        misconceptions: [{
          tempting: '"Eat the frog" of admin.',
          flaw: 'It is due Friday and affects only you. Doing it Monday is fine, but not first.',
          reframe: 'Clear-the-decks energy is good, but never at the cost of blocking other people.',
        }],
      },
      {
        id: 'd',
        label: 'The brainstorm invite, to prep slides in advance',
        correct: false,
        misconceptions: [{
          tempting: 'Get ahead of next week.',
          flaw: 'Next-week work cannot beat today\'s blocking issue.',
          reframe: 'Time horizon matters: today\'s blocker before next week\'s nice-to-have.',
        }],
      },
    ],
    solution: 'The client escalation has the shortest fuse and the most downstream impact (a blocked deployment). Handle it first, then the other items in due-date order.',
    lesson: 'Prioritize by cost-of-delay and number of people blocked, not by ease, niceness, or arrival order.',
  },
  {
    id: 4320062,
    kind: 'quick',
    topic: 'Career Skills',
    chapter: 'Warm-Up',
    title: 'The right escalation',
    briefing: 'Knowing when (and to whom) to escalate is a senior skill. Too early looks panicked; too late looks negligent.',
    prompt: 'You discover Friday afternoon that a vendor invoice your team approved last week double-billed the company by $40,000. What is the best next step?',
    fieldNote: 'The amount is material and the discovery is recent — but you also need facts before raising the alarm broadly.',
    mentorHint: 'Verify in writing first, then loop in your manager and AP, in that order.',
    xp: 4,
    answers: [
      { id: 'a', label: 'Confirm the duplicate billing in writing, then notify your manager and accounts payable today with the documentation', correct: true },
      {
        id: 'b',
        label: 'Wait until Monday — it can be the first thing next week',
        correct: false,
        misconceptions: [{
          tempting: 'Avoid disrupting people\'s weekends.',
          flaw: 'A $40K error left over a weekend may settle, get paid, or compound.',
          reframe: 'Material financial errors should not wait two days just for convenience.',
        }],
      },
      {
        id: 'c',
        label: 'Email the CFO and the CEO immediately with your suspicion',
        correct: false,
        misconceptions: [{
          tempting: 'Maximum transparency.',
          flaw: 'Skipping your manager and AP looks panicked and bypasses the people who actually fix it.',
          reframe: 'Escalate through the chain that owns the problem first — facts before fireworks.',
        }],
      },
      {
        id: 'd',
        label: 'Quietly contact the vendor yourself and ask them to fix it without telling anyone',
        correct: false,
        misconceptions: [{
          tempting: 'Handle it cleanly without bothering anyone.',
          flaw: 'Acting alone hides a controls failure and exposes you personally if the vendor disputes.',
          reframe: 'Document and route through finance — never try to make a financial error vanish silently.',
        }],
      },
    ],
    solution: 'Confirm with documentation, then immediately notify your manager and AP. That gets the right people on it before payment processes, without leapfrogging the chain or hiding the issue.',
    lesson: 'Escalate with facts in hand, through the people who own the fix, and on a timeline that matches the stakes.',
  },
  {
    id: 4320063,
    kind: 'quick',
    topic: 'Career Skills',
    chapter: 'Warm-Up',
    title: 'Unit economics gut check',
    briefing: 'A product can have growing revenue and still lose money on every customer. Unit economics asks: what does ONE customer earn vs cost?',
    prompt: 'A subscription company charges $20/month, spends $180 in marketing to acquire each customer, and customers stay an average of 8 months. Is this customer profitable, ignoring overhead?',
    fieldNote: 'Lifetime revenue per customer = price × average tenure. Compare to acquisition cost.',
    mentorHint: '$20 × 8 = $160 in lifetime revenue, vs $180 spent to acquire.',
    xp: 4,
    answers: [
      { id: 'a', label: 'No — the average customer brings in $160 but cost $180 to acquire, so each one loses $20', correct: true },
      {
        id: 'b',
        label: 'Yes — $20/month is a healthy subscription price',
        correct: false,
        misconceptions: [{
          tempting: 'Anchor on the price.',
          flaw: 'A high price means nothing if the customer leaves before paying back acquisition cost.',
          reframe: 'Compare lifetime revenue to acquisition cost, not price to price.',
        }],
      },
      {
        id: 'c',
        label: 'Yes — they recover the $180 within 9 months',
        correct: false,
        misconceptions: [{
          tempting: 'Stretch the tenure assumption.',
          flaw: 'The average customer only stays 8 months, not 9. You don\'t get the 9th payment from someone who already left.',
          reframe: 'Average tenure is a hard cap on revenue per customer — don\'t round it up.',
        }],
      },
      {
        id: 'd',
        label: 'Cannot tell without knowing total revenue',
        correct: false,
        misconceptions: [{
          tempting: 'Want more data.',
          flaw: 'Unit economics is exactly about the per-customer math — total revenue is irrelevant here.',
          reframe: 'You already have everything: price, tenure, CAC.',
        }],
      },
    ],
    solution: 'Lifetime revenue per customer = $20 × 8 = $160. CAC = $180. Each customer loses $20 before overhead.',
    lesson: 'Always check whether the average customer pays back their acquisition cost — top-line growth on negative unit economics just digs the hole faster.',
  },
  {
    id: 4320064,
    kind: 'quick',
    topic: 'Career Skills',
    chapter: 'Warm-Up',
    title: 'Reply to the upset client',
    briefing: 'A client complaint email is a test of judgment, not a writing test. The first reply sets the tone for the rest of the relationship.',
    prompt: 'A client emails: "Your latest update broke our integration and we have been down for 6 hours. This is unacceptable." You don\'t yet know what happened. Which reply is best as a first response?',
    fieldNote: 'Acknowledge the impact, commit to a concrete next step on a stated timeline, and avoid speculation or excuses.',
    mentorHint: 'You can be sorry about the outage without admitting fault for something you have not investigated yet.',
    xp: 4,
    answers: [
      { id: 'a', label: 'Acknowledge the impact, confirm you are investigating now, and commit to a status update within a specific short window', correct: true },
      {
        id: 'b',
        label: '"This is probably on your side — please double-check your configuration before blaming us."',
        correct: false,
        misconceptions: [{
          tempting: 'Defensive instinct.',
          flaw: 'Pushing back before investigating damages trust and may be wrong.',
          reframe: 'Investigate first, attribute blame later — and only if necessary.',
        }],
      },
      {
        id: 'c',
        label: '"You are absolutely right, this is entirely our fault. Refund coming."',
        correct: false,
        misconceptions: [{
          tempting: 'Maximum apology.',
          flaw: 'Promising a refund and admitting full fault before knowing the cause overcommits — and may also be wrong.',
          reframe: 'Empathy is free; concessions should follow facts.',
        }],
      },
      {
        id: 'd',
        label: 'Don\'t reply until engineering has a full root-cause analysis ready',
        correct: false,
        misconceptions: [{
          tempting: 'Wait for clarity.',
          flaw: 'Silence during an outage is itself a message — and the wrong one.',
          reframe: 'Acknowledge fast, even if you don\'t yet have answers.',
        }],
      },
    ],
    solution: 'A good first reply: "I\'m sorry you\'re hitting this — we\'re investigating now. I\'ll send an update by [specific time]." Acknowledges impact, commits to action, avoids both excuses and overcommitment.',
    lesson: 'In a service crisis, acknowledge fast, commit to a concrete next step, and don\'t apportion blame or refunds until you know what happened.',
  },
]

export const starterQuestionsByAgeGroup: Record<AgeGroup, Question[]> = {
  preschool: primaryStarter,
  primary: primaryStarter,
  high: highStarter,
  university: universityStarter,
  'career-hopper': careerStarter,
  career: careerStarter,
  nerd: universityStarter,
}

// Backwards-compatible flat export. Callers that don't pass an age group get
// the university-tier set (interview-grade reasoning) as the neutral default —
// closest in tone to the original "broadly accessible reasoning" intent.
export const starterQuestions: Question[] = universityStarter

export function starterQuestionsFor(ageGroup: AgeGroup | null | undefined): Question[] {
  if (!ageGroup) return starterQuestions
  return starterQuestionsByAgeGroup[ageGroup] ?? starterQuestions
}
