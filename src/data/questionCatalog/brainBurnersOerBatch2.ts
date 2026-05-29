import { makeQuestionBank } from './base'
import { MISC_BANKS_SUB_TOPICS, MISC_BANKS_MENTOR_HINTS, MISC_BANKS_CORRECT_SHORTENED } from './miscBanksPolish'
import { polish as runPolish } from './polishPipeline'


const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson:
    'Coverage source: reviewed OpenTriviaQA/OER brain-teaser and puzzle coverage. This is an authored Floe-native conversion item, not a direct raw import.',
  source: 'OpenTriviaQA/OER brain-teaser coverage',
})

const _brainBurnersOerBatch2QuestionsBase = makeQuestionBank('Fun', [
  q(456001, 'Careful Wording', 'Doctor Relation', 'A surgeon says, "I cannot operate on this boy; he is my son." The surgeon is not the boy\'s father. Who is the surgeon?', 'The boy\'s mother', [
    miss('The boy\'s uncle', 'The clue says "my son," so the surgeon is a parent.', 'Check the unstated assumption.'),
    miss('The boy\'s grandfather', 'A grandfather would not usually say "my son" about the boy.', 'The surgeon is directly the parent.'),
    miss('No one; the story is impossible', 'It is possible if the surgeon is the mother.', 'Do not assume the surgeon is male.'),
  ]),
  q(456002, 'Careful Wording', 'Bus Driver', 'You are driving a bus. At the first stop 3 people get on, at the second 2 get off, and at the third 5 get on. What is the bus driver\'s name?', 'Your name', [
    miss('3', 'That is a passenger count, not a name.', 'Read the first sentence.'),
    miss('Bus Driver', 'That is a role, not the name asked for.', 'Who is driving?'),
    miss('It cannot be known', 'The prompt gives it indirectly.', 'It says you are driving.'),
  ]),
  q(456003, 'Careful Wording', 'Month With 28 Days', 'How many months have at least 28 days?', '12', [
    miss('1', 'February has 28 days, but the question says at least 28.', 'Every month reaches day 28.'),
    miss('2', 'Leap-year thinking is a distraction.', 'At least, not exactly.'),
    miss('11', 'No month has fewer than 28 days.', 'Check the wording.'),
  ]),
  q(456004, 'Careful Wording', 'The Third Room', 'You enter a room with a match, a candle, a lantern, and a stove. What do you light first?', 'The match', [
    miss('The candle', 'You need the match lit before lighting the candle.', 'Order matters.'),
    miss('The lantern', 'The lantern cannot be lit before the match.', 'What must be lit first?'),
    miss('The stove', 'The stove is not first.', 'Start with the igniter.'),
  ]),
  q(456005, 'Careful Wording', 'Buried Survivor', 'A plane crashes on the border between two countries. Where do they bury the survivors?', 'They do not bury survivors', [
    miss('In the country where it crashed', 'Survivors are alive.', 'Notice the word survivors.'),
    miss('On the border line', 'The location is a distraction.', 'Do not bury living people.'),
    miss('In both countries', 'That still misses the key word.', 'Survivors are not buried.'),
  ]),
  q(456006, 'Careful Wording', 'Before Mount Everest', 'Before Mount Everest was discovered, what was the highest mountain on Earth?', 'Mount Everest', [
    miss('K2', 'Discovery did not change the mountain\'s height.', 'It was already there.'),
    miss('No mountain', 'The mountain existed before discovery.', 'Discovery is not creation.'),
    miss('The Andes', 'The question asks highest, not a range.', 'Everest was still highest.'),
  ]),
  q(456007, 'Careful Wording', 'One Story House', 'In a one-story blue house, the walls are blue, the doors are blue, and the furniture is blue. What color are the stairs?', 'There are no stairs', [
    miss('Blue', 'A one-story house does not need stairs.', 'The color pattern is bait.'),
    miss('White', 'No stair color is given because there are no stairs.', 'Use the one-story clue.'),
    miss('Cannot tell', 'You can tell enough: there are no stairs.', 'One story means no upstairs.'),
  ]),
  q(456008, 'Counting Traps', 'Candles Burned', 'Ten candles are burning. Two are blown out. If the rest burn away, how many candles are left?', '2', [
    miss('8', 'The eight not blown out burn away.', 'Only the blown-out candles remain.'),
    miss('10', 'Most candles are consumed.', 'Track what is physically left.'),
    miss('0', 'The two blown-out candles do not burn away.', 'They remain.'),
  ]),
  q(456009, 'Counting Traps', 'Two Fathers Two Sons', 'Two fathers and two sons go fishing. Each catches one fish, but only three fish are caught. How is this possible?', 'They are grandfather, father, and son', [
    miss('One fish escaped', 'The prompt says three fish are caught and each person catches one.', 'Reduce the number of people.'),
    miss('Someone lied', 'No lie is needed.', 'A person can be both father and son.'),
    miss('There were four people', 'Four people catching one each would make four fish.', 'Think overlapping roles.'),
  ]),
  q(456010, 'Counting Traps', 'Socks in Dark', 'A drawer has black and white socks. What is the minimum number to pull in the dark to guarantee a matching pair?', '3', [
    miss('2', 'Two socks could be one black and one white.', 'Use the worst case.'),
    miss('4', 'Three already guarantees a pair by pigeonhole.', 'Only two colors.'),
    miss('1', 'One sock cannot make a pair.', 'Need two of a color.'),
  ]),
  q(456011, 'Counting Traps', 'Gloves in Dark', 'A drawer has left and right gloves in two colors. What must you track that socks do not require?', 'Handedness as well as color', [
    miss('Only color', 'Two same-color left gloves do not make a usable pair.', 'Gloves have left/right.'),
    miss('Only fabric weight', 'The puzzle is about matching pair structure.', 'Hand matters.'),
    miss('Nothing extra', 'Gloves are different from socks because left and right matter.', 'Socks are interchangeable.'),
  ]),
  q(456012, 'Counting Traps', 'Fence Cuts', 'A log is cut into 5 equal pieces. How many cuts are needed?', '4', [
    miss('5', 'Five pieces require one fewer cut if cutting one log in a line.', 'Cuts create pieces plus one.'),
    miss('6', 'That is too many for five pieces.', 'Draw the intervals.'),
    miss('3', 'Three cuts make four pieces.', 'Pieces = cuts + 1.'),
  ]),
  q(456013, 'Counting Traps', 'Page Count', 'A book has pages numbered 1 through 100. How many page numbers contain the digit 9?', '20', [
    miss('10', 'That counts only 9, 19, ..., 99 in the ones place.', 'Also count the 90s.'),
    miss('19', 'Do not forget that 99 has a 9 in both places but is one page number.', 'Count unique page numbers.'),
    miss('11', 'That misses most of the 90s.', 'Break into ones-place and tens-place cases.'),
  ]),
  q(456014, 'Counting Traps', 'Elevator Floors', 'An elevator goes from floor 1 to floor 10. How many floor-to-floor intervals does it travel?', '9', [
    miss('10', 'Floors are endpoints; intervals are gaps.', 'From 1 to 2 is the first interval.'),
    miss('11', 'That adds an extra gap.', 'Subtract endpoints: 10 - 1.'),
    miss('8', 'Count all gaps from 1-2 through 9-10.', 'There are nine gaps.'),
  ]),
  q(456015, 'Counting Traps', 'Race Position', 'If you pass the person in second place, what place are you in?', 'Second place', [
    miss('First place', 'Passing second puts you where they were.', 'You have not passed first.'),
    miss('Third place', 'You moved ahead of second, not behind them.', 'Take their position.'),
    miss('Cannot tell', 'The relative move gives the position.', 'You become second.'),
  ]),
  q(456016, 'Parity and Invariants', 'Odd Crossings', 'A path crosses a river 7 times. If it starts on the north bank, where does it end?', 'South bank', [
    miss('North bank', 'An odd number of crossings switches banks.', 'Pairs return you.'),
    miss('In the river', 'A crossing ends on a bank.', 'Track side changes.'),
    miss('Cannot tell', 'The count and start side determine it.', 'Odd toggles side.'),
  ]),
  q(456017, 'Parity and Invariants', 'Coin Flip State', 'A coin starts heads up and is flipped 12 times. What side is up?', 'Heads', [
    miss('Tails', 'An even number of flips returns to the start.', 'Pairs cancel.'),
    miss('Cannot tell', 'The flip count and start state are given.', 'Use parity.'),
    miss('Both', 'A coin has one top face after the flips.', 'Even flips restore.'),
  ]),
  q(456018, 'Parity and Invariants', 'Lock Toggle', 'A lock starts closed. Each turn toggles open/closed. After 101 turns, it is:', 'Open', [
    miss('Closed', 'Odd toggles switch the state.', '101 is odd.'),
    miss('Broken', 'No breakage is stated.', 'Use the toggle rule only.'),
    miss('Unknown', 'The initial state and number of turns decide it.', 'Odd means changed.'),
  ]),
  q(456019, 'Parity and Invariants', 'Impossible Sum', 'Starting from 1, you may add 2 each move. Which target is impossible?', '10', [
    miss('7', '1 + 2 + 2 + 2 = 7.', 'Reachable numbers stay odd.'),
    miss('11', '11 is odd and reachable.', 'Odd targets can work.'),
    miss('101', '101 is odd and reachable in principle.', 'Parity is invariant.'),
  ]),
  q(456020, 'Parity and Invariants', 'Handshake Parity', 'In any group, the number of people who shook hands an odd number of times must be:', 'Even', [
    miss('Odd', 'The sum of degrees is twice the number of handshakes, so odd-degree counts are even.', 'Use graph parity.'),
    miss('Always zero', 'There can be two or four odd-degree people.', 'Even does not mean zero.'),
    miss('Equal to the group size', 'Not necessarily.', 'Only parity is forced.'),
  ]),
  q(456021, 'Ordering Logic', 'Shelf Order', 'Book A is left of B, and B is left of C. Which must be true?', 'A is left of C', [
    miss('C is left of A', 'That contradicts the chain.', 'Left-of is transitive here.'),
    miss('A is immediately next to C', 'No adjacency is stated.', 'Only relative order follows.'),
    miss('B is right of C', 'The prompt says B is left of C.', 'Preserve the second clue.'),
  ]),
  q(456022, 'Ordering Logic', 'Partial Order', 'A is older than B. A is older than C. What follows about B and C?', 'No definite order between B and C', [
    miss('B is older than C', 'Both being younger than A does not compare them.', 'Common reference is not enough.'),
    miss('C is older than B', 'Same issue.', 'No direct clue links B and C.'),
    miss('B and C are the same age', 'They could differ.', 'Only their relation to A is known.'),
  ]),
  q(456023, 'Ordering Logic', 'Queue Swap', 'In a line A, B, C, D, the first and last swap. Who is now first?', 'D', [
    miss('A', 'A moved to the last position.', 'Swap endpoints.'),
    miss('B', 'B stays second.', 'Only first and last swap.'),
    miss('C', 'C stays third.', 'Track positions.'),
  ]),
  q(456024, 'Ordering Logic', 'Exactly Between', 'If B is exactly between A and C in a straight line, what must be true?', 'A and C are on opposite sides of B', [
    miss('A and C are the same point', 'Then B could not be between them.', 'Between requires separation.'),
    miss('B is at one end', 'Between means not at an end.', 'B is in the middle.'),
    miss('A must be left of C', 'The left/right direction is not specified.', 'Only opposite sides is forced.'),
  ]),
  q(456025, 'Ordering Logic', 'Tournament Minimum', 'In a knockout tournament with 16 players, how many matches are needed to produce one champion?', '15', [
    miss('16', 'Each match eliminates one player; 15 eliminations leave one champion.', 'Players eliminated = matches.'),
    miss('8', 'Eight matches only finish the first round.', 'Continue until one remains.'),
    miss('4', 'That is the number of rounds, not matches.', 'Count eliminations.'),
  ]),
  q(456026, 'Truth and Lies', 'Both Cannot Lie', 'A says "B is lying." B says "A is lying." If exactly one is telling the truth, what can you conclude?', 'The setup is consistent with one truth and one lie', [
    miss('Both must be truthful', 'Their claims accuse each other, so both true is impossible.', 'Test truth values.'),
    miss('Both must be lying', 'If both lied, each claim that the other lies would be false, impossible.', 'Self-check the pair.'),
    miss('There is no consistent assignment', 'One truthful and one liar works.', 'Let A true and B false, or vice versa.'),
  ]),
  q(456027, 'Truth and Lies', 'At Least One False', 'If three statements cannot all be true together, then you know:', 'At least one statement is false', [
    miss('All three are false', 'Inconsistency of all together does not require all false.', 'At least one must fail.'),
    miss('Exactly one is false', 'Could be one, two, or three false.', 'The minimum conclusion is weaker.'),
    miss('The first statement is false', 'No particular statement is singled out.', 'Avoid overclaiming.'),
  ]),
  q(456028, 'Truth and Lies', 'Negation Check', 'The negation of "Everyone in the room is awake" is:', 'At least one person in the room is not awake', [
    miss('Everyone in the room is asleep', 'That is stronger than the negation.', 'One counterexample is enough.'),
    miss('No one is in the room', 'That changes the setup.', 'Negate the claim, not the setting.'),
    miss('At least one person is awake', 'That can be true alongside the original.', 'You need someone not awake.'),
  ]),
  q(456029, 'Truth and Lies', 'Or Negation', 'The negation of "The key is in the drawer or on the table" is:', 'The key is not in the drawer and not on the table', [
    miss('The key is not in the drawer or not on the table', 'That would still allow one location to be true.', 'Negating or gives and.'),
    miss('The key is in both places', 'That does not negate the original.', 'The original needs at least one.'),
    miss('The key is missing forever', 'Too strong and not logically required.', 'Only rule out the two named places.'),
  ]),
  q(456030, 'Truth and Lies', 'Contrapositive', 'Which statement is logically equivalent to "If it rains, the ground gets wet"?', 'If the ground is not wet, then it did not rain', [
    miss('If the ground gets wet, then it rained', 'That is the converse and may fail.', 'Wet ground can have other causes.'),
    miss('If it does not rain, the ground is not wet', 'That is the inverse and may fail.', 'Sprinklers exist.'),
    miss('It rains if and only if the ground gets wet', 'That adds a reverse condition.', 'Use the contrapositive.'),
  ]),
  q(456031, 'Probability Puzzles', 'Marble Complement', 'A bag has 3 red and 2 blue marbles. One marble is drawn. What is the probability it is not red?', '2/5', [
    miss('3/5', 'That is the probability of red.', 'Not red means blue here.'),
    miss('1/2', 'The colors are not equally numerous.', 'Count marbles.'),
    miss('2/3', 'That divides by red count incorrectly.', 'Use total 5.'),
  ]),
  q(456032, 'Probability Puzzles', 'Two Heads', 'Two fair coins are flipped. What is the probability of exactly one head?', '1/2', [
    miss('1/4', 'There are two exactly-one-head outcomes: HT and TH.', 'List all four outcomes.'),
    miss('3/4', 'That is at least one head.', 'Exactly one excludes HH.'),
    miss('1', 'TT and HH fail.', 'Only two of four work.'),
  ]),
  q(456033, 'Probability Puzzles', 'Die Greater Than Four', 'A fair six-sided die is rolled. What is the probability of rolling greater than 4?', '1/3', [
    miss('1/2', 'Only 5 and 6 work, so 2 of 6.', 'Greater than 4, not at least 4.'),
    miss('2/3', 'That counts too many faces.', 'List successful faces.'),
    miss('4/6', 'Faces 1 through 4 do not work.', 'Only two successes.'),
  ]),
  q(456034, 'Probability Puzzles', 'Without Replacement', 'A bag has one red and one blue marble. You draw both without replacement. What is the probability the second marble is blue if the first was red?', '1', [
    miss('1/2', 'After red is removed, only blue remains.', 'Condition on the first draw.'),
    miss('0', 'Blue is the only marble left.', 'Look at what remains.'),
    miss('1/4', 'This is conditional, not two independent draws.', 'No replacement changes the bag.'),
  ]),
  q(456035, 'Probability Puzzles', 'Independent Multiply', 'Two independent events have probabilities 1/2 and 1/3. What is the probability both occur?', '1/6', [
    miss('5/6', 'That adds complements incorrectly.', 'For independent both, multiply.'),
    miss('2/5', 'That is not a standard combination rule here.', 'Use product rule.'),
    miss('1/2', 'You ignored the second event.', 'Both must occur.'),
  ]),
  q(456036, 'Spatial Reasoning', 'Cube Faces', 'How many faces does a cube have?', '6', [
    miss('4', 'That is not enough for a cube.', 'Think top, bottom, and four sides.'),
    miss('8', 'A cube has 8 vertices, not faces.', 'Do not mix faces and corners.'),
    miss('12', 'A cube has 12 edges.', 'Faces are flat square sides.'),
  ]),
  q(456037, 'Spatial Reasoning', 'Opposite Faces', 'On a standard cube, how many faces touch a given face along an edge?', '4', [
    miss('1', 'One face is opposite and does not touch.', 'Count the surrounding side faces.'),
    miss('5', 'The opposite face does not share an edge.', 'Exclude the opposite.'),
    miss('6', 'A cube has six faces total, but one is the given face.', 'Count adjacent faces only.'),
  ]),
  q(456038, 'Spatial Reasoning', 'Net Check', 'A cube net must have:', 'Six squares connected so they can fold without overlap', [
    miss('Exactly four triangles', 'Triangles are not cube faces.', 'Cube faces are squares.'),
    miss('Seven squares', 'A cube has six faces.', 'One square per face.'),
    miss('Squares that all overlap in the plane', 'The net must be foldable, not already overlapped.', 'Flat now, cube later.'),
  ]),
  q(456039, 'Spatial Reasoning', 'Mirror Direction', 'A mirror reverses apparent left and right because:', 'It reverses front-back depth relative to the observer', [
    miss('It physically swaps east and west', 'The mirror does not know compass directions.', 'Think coordinate axis perpendicular to the mirror.'),
    miss('It changes top into bottom', 'Top and bottom usually remain top and bottom.', 'The depth axis flips.'),
    miss('It rotates the room 180 degrees', 'Reflection is not a simple rotation.', 'Mirror geometry matters.'),
  ]),
  q(456040, 'Spatial Reasoning', 'Shortest Path Net', 'A shortest path across the surface of a box is often easiest to find by:', 'Unfolding the box into a flat net', [
    miss('Guessing a curved path through the air', 'The path must stay on the surface.', 'Flatten the surface.'),
    miss('Counting only vertices', 'The shortest route may cross faces, not just edges.', 'Use a net.'),
    miss('Ignoring dimensions', 'Lengths matter.', 'Flatten then draw a straight line.'),
  ]),
  q(456041, 'Strategy', 'Pigeonhole', 'The pigeonhole principle says that if 11 objects go into 10 boxes, then:', 'At least one box contains at least two objects', [
    miss('Every box contains two objects', 'There are not enough objects for that.', 'Only one crowded box is guaranteed.'),
    miss('One box must be empty', 'That might happen, but is not forced.', 'Crowding is forced.'),
    miss('No box can contain more than one object', 'That is impossible with 11 objects and 10 boxes.', 'More objects than boxes.'),
  ]),
  q(456042, 'Strategy', 'Work Backward Arithmetic', 'A number is doubled and then 6 is added, giving 20. What was the original number?', '7', [
    miss('10', 'That undoes only the doubling badly.', 'Reverse: subtract 6, then divide by 2.'),
    miss('13', 'That subtracts 7 without following operations.', 'Undo in reverse order.'),
    miss('14', 'That is the number after subtracting 6, not the original.', 'Now divide by 2.'),
  ]),
  q(456043, 'Strategy', 'Assumption Audit', 'A puzzle feels impossible because you assumed all people are facing north, but the prompt never says that. What should you do?', 'Remove or test the unsupported direction assumption', [
    miss('Keep the assumption because it was first', 'First guesses can be traps.', 'Only use stated facts.'),
    miss('Change every other rule instead', 'Do not rewrite the puzzle unnecessarily.', 'Audit the assumption.'),
    miss('Ignore the prompt wording', 'The exact wording matters most.', 'Find what was not stated.'),
  ]),
  q(456044, 'Strategy', 'Small Case', 'Before solving a puzzle for 100 lockers, why test 5 or 10 lockers first?', 'Small cases can reveal the pattern safely', [
    miss('Small cases prove every answer automatically', 'They suggest patterns but still need reasoning.', 'Use them as exploration.'),
    miss('Because large cases are illegal', 'No.', 'Small cases are manageable.'),
    miss('To avoid understanding the rule', 'The goal is to understand the rule better.', 'Look for structure.'),
  ]),
  q(456045, 'Strategy', 'Symmetry', 'A symmetry argument helps when:', 'Several cases behave the same after rotation, reflection, or relabeling', [
    miss('Every case is completely unrelated', 'Then symmetry does not apply.', 'Look for interchangeable structure.'),
    miss('The puzzle has no repeated structure', 'Symmetry needs sameness.', 'Cases can be grouped.'),
    miss('You want to ignore constraints', 'Symmetry respects constraints.', 'It reduces equivalent cases.'),
  ]),
  q(456046, 'Sequence Patterns', 'Fibonacci Step', 'What comes next: 1, 1, 2, 3, 5, 8, ?', '13', [
    miss('11', 'The pattern adds the previous two terms.', '5 + 8.'),
    miss('16', 'That doubles 8 and breaks the earlier pattern.', 'Use two previous terms.'),
    miss('10', 'No constant +2 pattern fits all terms.', 'Check recurrence.'),
  ]),
  q(456047, 'Sequence Patterns', 'Triangular Numbers', 'What comes next: 1, 3, 6, 10, 15, ?', '21', [
    miss('20', 'The differences are 2, 3, 4, 5, so add 6.', 'Look at first differences.'),
    miss('25', 'That adds 10, too large.', 'Use growing differences.'),
    miss('18', 'That adds only 3, breaking the pattern.', 'Next difference is 6.'),
  ]),
  q(456048, 'Sequence Patterns', 'Powers of Two', 'What comes next: 1, 2, 4, 8, 16, ?', '32', [
    miss('24', 'The pattern doubles, not adds 8 forever.', 'Multiply by 2.'),
    miss('31', 'That is one less than 32 but not the pattern.', 'Powers of two.'),
    miss('64', 'That skips one term.', '16 doubled once.'),
  ]),
  q(456049, 'Sequence Patterns', 'Alternating Letters', 'What comes next: A, C, B, D, C, E, ?', 'D', [
    miss('F', 'F would continue the second subsequence after E, but the next slot is the first subsequence.', 'Separate odd and even positions.'),
    miss('E', 'E just appeared in the even-position sequence.', 'Odd positions are A, B, C, D.'),
    miss('G', 'That skips the alternating structure.', 'Track two sequences.'),
  ]),
  q(456050, 'Sequence Patterns', 'Pattern Skeptic', 'Why should you be careful with "what comes next" sequence puzzles?', 'Many different rules can fit the same early terms', [
    miss('Because no sequence can ever have a rule', 'Sequences can have rules; the issue is ambiguity.', 'Early terms underdetermine patterns.'),
    miss('Because the largest number is always next', 'That is not generally true.', 'Rules matter.'),
    miss('Because arithmetic is never useful', 'Arithmetic can be useful, but not always decisive.', 'Check for multiple plausible patterns.'),
  ]),
])

const _miscBundle = [{ subTopics: MISC_BANKS_SUB_TOPICS, mentorHints: MISC_BANKS_MENTOR_HINTS, correctShortened: MISC_BANKS_CORRECT_SHORTENED, source: 'miscBanks' }]

export const brainBurnersOerBatch2Questions = runPolish(_brainBurnersOerBatch2QuestionsBase, _miscBundle)
