import { makeQuestionBank } from './base'

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
    'Coverage source: OpenDSA, AP Computer Science-aligned OER, and public programming review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenDSA/OER AP Computer Science coverage',
})

export const apComputerScienceExamBatchQuestions = makeQuestionBank('AP', [
  q(450001, 'Tracing', 'Loop trace', 'What is printed after this loop: total = 0; for i from 1 to 3, total = total + i?', '6', [
    miss('3', 'That counts iterations but does not sum the values.', 'Add 1 + 2 + 3.'),
    miss('4', 'That misses at least one loop update.', 'Trace each loop pass.'),
    miss('0', 'The variable changes inside the loop.', 'Update total each iteration.'),
  ]),
  q(450002, 'Arrays', 'Off-by-one', 'For an array of length n with zero-based indexing, what is the last valid index?', 'n - 1', [
    miss('n', 'Index n is one past the end.', 'Zero-based indexing starts at 0.'),
    miss('1', 'That is only the second element index.', 'Use the array length.'),
    miss('n + 1', 'That is even farther beyond the array.', 'Last index is length minus one.'),
  ]),
  q(450003, 'Recursion', 'Base case', 'Why does a recursive method need a base case?', 'To stop recursion by handling a simplest case directly', [
    miss('To make the method call itself forever', 'A base case prevents infinite recursion.', 'Think stopping condition.'),
    miss('To remove all parameters from the program', 'Parameters may still exist in recursive methods.', 'The key is termination.'),
    miss('To guarantee the fastest possible algorithm', 'A base case is necessary for correctness, not a speed guarantee.', 'Focus on stopping safely.'),
  ]),
  q(450004, 'Search', 'Binary search condition', 'Binary search requires the data to be:', 'Sorted', [
    miss('Randomly shuffled', 'Binary search depends on ordered halves.', 'It discards half based on order.'),
    miss('Stored only as strings', 'Data type is not the defining requirement.', 'Think ordering.'),
    miss('Empty', 'Searching an empty list is trivial but not the normal requirement.', 'Binary search uses comparisons in sorted data.'),
  ]),
  q(450005, 'Efficiency', 'Linear search Big-O', 'What is the worst-case time complexity of linear search through n items?', 'O(n)', [
    miss('O(1)', 'Worst-case linear search may inspect every item.', 'Count how work grows with n.'),
    miss('O(log n)', 'That is typical for binary search, not linear search.', 'No halving happens.'),
    miss('O(n^2)', 'Linear search has one pass, not nested passes.', 'Track the number of checks.'),
  ]),
  q(450006, 'Abstraction', 'Helper method purpose', 'Why might a programmer create a helper method?', 'To name and reuse a smaller piece of logic', [
    miss('To make every program longer and harder to read', 'Good helper methods usually improve organization.', 'Think decomposition.'),
    miss('To prevent any testing', 'Smaller methods can make testing easier.', 'Use abstraction benefits.'),
    miss('To change Boolean values into arrays automatically', 'That is unrelated to helper methods.', 'Focus on code organization.'),
  ]),
  q(450007, 'State', 'Mutation', 'If a method appends an item to an existing list, what has it changed?', 'The state/content of the list', [
    miss('Only the name of the variable', 'Appending changes the collection content, not just its name.', 'Look at the data structure.'),
    miss('The source code comments', 'Runtime list mutation does not edit comments.', 'Distinguish program text from program state.'),
    miss('Nothing at all', 'The list now contains an additional item.', 'Check before and after state.'),
  ]),
  q(450008, 'Boolean Logic', 'Short-circuit AND', 'In many languages, for A && B, what happens if A is false?', 'B does not need to be evaluated', [
    miss('B must always be evaluated first', 'AND can short-circuit after a false first operand.', 'False AND anything is false.'),
    miss('The whole expression becomes true', 'False && B is false.', 'Use Boolean truth tables.'),
    miss('A changes to true automatically', 'Evaluation does not mutate A.', 'Short-circuiting is about skipping work.'),
  ]),
  q(450009, 'Testing', 'Edge case', 'Which is an edge case for a function that averages a list of numbers?', 'An empty list', [
    miss('A typical list with five positive numbers', 'That is a normal case, not an edge.', 'Look for boundary or unusual inputs.'),
    miss('The function name', 'A name is not an input case.', 'Think test data.'),
    miss('A comment explaining the formula', 'Comments are not test cases.', 'Use input scenarios.'),
  ]),
  q(450010, 'Object-Oriented Programming', 'Encapsulation', 'Encapsulation most directly means:', 'Bundling data with methods and controlling access to internal state', [
    miss('Putting every variable in the global scope', 'That is the opposite of controlled access.', 'Encapsulation hides implementation details.'),
    miss('Deleting all methods from a class', 'Classes usually use methods to operate on data.', 'Think data plus behavior.'),
    miss('Sorting an array with recursion only', 'That is an algorithm choice, not encapsulation.', 'Use object-oriented design vocabulary.'),
  ]),
])
