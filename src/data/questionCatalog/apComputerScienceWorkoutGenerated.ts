import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  AP_WORKOUT_MATHCS_SUB_TOPICS,
  AP_WORKOUT_MATHCS_MENTOR_HINTS,
  AP_WORKOUT_MATHCS_CORRECT_SHORTENED,
} from './apWorkoutMathCsPolish'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/algorithms/i.test(chapter)) {
    return `${title} is about computational thinking. The useful answer is "${correct}"; focus on how the amount of work grows, what the algorithm assumes, and whether the idea hides details behind a clean abstraction.`
  }
  if (/programming foundations/i.test(chapter)) {
    return `${title} is a Java-foundations idea. The useful answer is "${correct}"; trace values step by step and distinguish storage, expressions, operators, and the type of value produced.`
  }
  if (/control flow/i.test(chapter)) {
    return `${title} is about controlling program execution. The useful answer is "${correct}"; ask whether the code is choosing a branch, repeating work, passing data into a method, or returning a result.`
  }
  if (/object-oriented/i.test(chapter)) {
    return `${title} is an object-oriented programming concept. The useful answer is "${correct}"; connect classes, objects, methods, fields, constructors, inheritance, and access control to how programs organize state and behavior.`
  }
  if (/arrays|arraylists|2d data/i.test(chapter)) {
    return `${title} is about data structures and collections. The useful answer is "${correct}"; track indices, traversal, mutation, ordering rules, and the structure's access pattern.`
  }
  if (/searching|sorting|recursion|frq/i.test(chapter)) {
    return `${title} is about algorithm reasoning under AP-style pressure. The useful answer is "${correct}"; trace the base case, loop invariant, precondition, or comparison pattern before choosing.`
  }
  if (/computing impact|create/i.test(chapter)) {
    return `${title} is about computing in the real world. The useful answer is "${correct}"; separate code mechanics from privacy, consent, security, fairness, and project-design consequences.`
  }
  return `${title} is an AP Computer Science concept. The useful answer is "${correct}"; trace the code or definition carefully before choosing the closest option.`
}

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
  lesson: lessonFor(chapter, title, correct),
  source: 'Generated from OpenDSA AP CS coverage',
})

// Wave 4 consolidation 2026-05-18: ExamBatch (10 items) merged into this canonical AP CS bank.
// Chapter labels aligned to the eight AP Computer Science syllabus chapters.
const _baseApComputerScienceWorkoutGeneratedQuestions = makeQuestionBank('AP', [
  // --- Merged from apComputerScienceExamBatch.ts (was ids 450001-450010) ---
  q(450001, 'Chapter 4: Control Flow and Methods', 'Loop trace', 'What is printed after this loop: total = 0; for i from 1 to 3, total = total + i?', '6', [
    miss('3', 'That counts iterations but does not sum the values.', 'Add 1 + 2 + 3.'),
    miss('4', 'That misses at least one loop update.', 'Trace each loop pass.'),
    miss('0', 'The variable changes inside the loop.', 'Update total each iteration.'),
  ]),
  q(450002, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Off-by-one', 'For an array of length n with zero-based indexing, what is the last valid index?', 'n - 1', [
    miss('n', 'Index n is one past the end.', 'Zero-based indexing starts at 0.'),
    miss('1', 'That is only the second element index.', 'Use the array length.'),
    miss('n + 1', 'That is even farther beyond the array.', 'Last index is length minus one.'),
  ]),
  q(450003, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Base case', 'Why does a recursive method need a base case?', 'To stop recursion by handling a simplest case directly', [
    miss('To make the method call itself forever', 'A base case prevents infinite recursion.', 'Think stopping condition.'),
    miss('To remove all parameters from the program', 'Parameters may still exist in recursive methods.', 'The key is termination.'),
    miss('To guarantee the fastest possible algorithm', 'A base case is necessary for correctness, not a speed guarantee.', 'Focus on stopping safely.'),
  ]),
  q(450004, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Binary search precondition', 'Binary search requires the data to be:', 'Sorted', [
    miss('Randomly shuffled', 'Binary search depends on ordered halves.', 'It discards half based on order.'),
    miss('Stored only as strings', 'Data type is not the defining requirement.', 'Think ordering.'),
    miss('Empty', 'Searching an empty list is trivial but not the normal requirement.', 'Binary search uses comparisons in sorted data.'),
  ]),
  q(450005, 'Chapter 2: Algorithms and Computational Thinking', 'Linear search Big-O', 'What is the worst-case time complexity of linear search through n items?', 'O(n)', [
    miss('O(1)', 'Worst-case linear search may inspect every item.', 'Count how work grows with n.'),
    miss('O(log n)', 'That is typical for binary search, not linear search.', 'No halving happens.'),
    miss('O(n^2)', 'Linear search has one pass, not nested passes.', 'Track the number of checks.'),
  ]),
  q(450006, 'Chapter 4: Control Flow and Methods', 'Helper method purpose', 'Why might a programmer create a helper method?', 'To name and reuse a smaller piece of logic', [
    miss('To make every program longer and harder to read', 'Good helper methods usually improve organization.', 'Think decomposition.'),
    miss('To prevent any testing', 'Smaller methods can make testing easier.', 'Use abstraction benefits.'),
    miss('To change Boolean values into arrays automatically', 'That is unrelated to helper methods.', 'Focus on code organization.'),
  ]),
  q(450007, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'List mutation', 'If a method appends an item to an existing list, what has it changed?', 'The state/content of the list', [
    miss('Only the name of the variable', 'Appending changes the collection content, not just its name.', 'Look at the data structure.'),
    miss('The source code comments', 'Runtime list mutation does not edit comments.', 'Distinguish program text from program state.'),
    miss('Nothing at all', 'The list now contains an additional item.', 'Check before and after state.'),
  ]),
  q(450008, 'Chapter 4: Control Flow and Methods', 'Short-circuit AND', 'In many languages, for A && B, what happens if A is false?', 'B does not need to be evaluated', [
    miss('B must always be evaluated first', 'AND can short-circuit after a false first operand.', 'False AND anything is false.'),
    miss('The whole expression becomes true', 'False && B is false.', 'Use Boolean truth tables.'),
    miss('A changes to true automatically', 'Evaluation does not mutate A.', 'Short-circuiting is about skipping work.'),
  ]),
  q(450009, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Test edge case', 'Which is an edge case for a function that averages a list of numbers?', 'An empty list', [
    miss('A typical list with five positive numbers', 'That is a normal case, not an edge.', 'Look for boundary or unusual inputs.'),
    miss('The function name', 'A name is not an input case.', 'Think test data.'),
    miss('A comment explaining the formula', 'Comments are not test cases.', 'Use input scenarios.'),
  ]),
  q(450010, 'Chapter 5: Object-Oriented Programming', 'Encapsulation meaning', 'Encapsulation most directly means:', 'Bundling data with methods and controlling access to internal state', [
    miss('Putting every variable in the global scope', 'That is the opposite of controlled access.', 'Encapsulation hides implementation details.'),
    miss('Deleting all methods from a class', 'Classes usually use methods to operate on data.', 'Think data plus behavior.'),
    miss('Sorting an array with recursion only', 'That is an algorithm choice, not encapsulation.', 'Use object-oriented design vocabulary.'),
  ]),
  // --- Original Wave 1 content (chapter labels realigned to the eight AP CS syllabus chapters) ---
  q(403001, 'Chapter 3: Programming Foundations in Java', 'Variable role', 'A variable in a program is best described as:', 'A named storage location for a value', [miss('A loop that repeats forever', 'Loops control repetition, not storage.', 'Variables hold values.'), miss('A syntax error only', 'Variables are normal program constructs.', 'Think name and value.'), miss('A network cable', 'That is hardware/networking.', 'Use programming vocabulary.')]),
  q(403002, 'Chapter 3: Programming Foundations in Java', 'Assignment', 'After x = 4; x = x + 3; the value of x is:', '7', [miss('4', 'The second assignment updates x.', 'Use old x plus 3.'), miss('3', 'That ignores the old value.', 'x + 3 means 4 + 3.'), miss('x + 3', 'The expression is evaluated and stored.', 'Assignment changes the value.')]),
  q(403003, 'Chapter 3: Programming Foundations in Java', 'Integer division', 'In many AP-style languages, 7 / 2 using integer division evaluates to:', '3', [miss('3.5', 'That is real-number division, not integer division.', 'Integer division drops the fractional part.'), miss('4', 'Integer division does not round here.', 'It truncates.'), miss('1', 'That is the remainder.', 'Quotient is 3.')]),
  q(403004, 'Chapter 3: Programming Foundations in Java', 'Modulo', '17 % 5 evaluates to:', '2', [miss('3', '3 is the quotient in 17/5.', 'Modulo returns remainder.'), miss('5', 'The divisor is not the remainder.', '17 = 3*5 + 2.'), miss('0', '17 is not divisible by 5.', 'Find the leftover.')]),
  q(403005, 'Chapter 4: Control Flow and Methods', 'Boolean expression', 'The expression (x > 0) evaluates to a:', 'Boolean', [miss('String', 'Comparisons return true/false, not text.', 'Use logical result.'), miss('List', 'No collection is created.', 'Comparison gives one truth value.'), miss('Loop', 'A loop repeats code.', 'This is a condition.')]),
  q(403006, 'Chapter 4: Control Flow and Methods', 'And operator', 'true AND false evaluates to:', 'false', [miss('true', 'AND requires both operands true.', 'One false makes false.'), miss('0.5', 'Booleans are not averaged.', 'Use truth table.'), miss('undefined always', 'The expression has a defined Boolean value.', 'Evaluate both sides.')]),
  q(403007, 'Chapter 4: Control Flow and Methods', 'Or operator', 'false OR true evaluates to:', 'true', [miss('false', 'OR needs at least one true operand.', 'One true is enough.'), miss('undefined', 'The truth value is defined.', 'Use OR truth table.'), miss('false true', 'Operators return one Boolean.', 'Evaluate expression.')]),
  q(403008, 'Chapter 4: Control Flow and Methods', 'Not operator', 'NOT true evaluates to:', 'false', [miss('true', 'NOT flips the value.', 'Negation reverses Boolean truth.'), miss('0', 'Use Boolean false rather than number unless language-specific.', 'Logical not returns false.'), miss('Both true and false', 'Classical Boolean logic is two-valued.', 'One result.')]),
  q(403009, 'Chapter 4: Control Flow and Methods', 'If statement', 'An if statement is mainly used to:', 'Run code only when a condition is true', [miss('Repeat code a fixed number of times', 'That is a loop.', 'If chooses a branch.'), miss('Store a list of values', 'That is an array/list.', 'If controls flow.'), miss('Sort numbers automatically', 'Sorting requires an algorithm.', 'Conditional execution.')]),
  q(403010, 'Chapter 4: Control Flow and Methods', 'Else branch', 'The else branch runs when:', 'The if condition is false', [miss('The if condition is true', 'Then the if branch runs.', 'Else is the fallback.'), miss('A variable is declared', 'Declaration alone does not trigger else.', 'Use condition result.'), miss('Every loop finishes', 'Else is tied to conditionals here.', 'If false.')]),
  q(403011, 'Chapter 4: Control Flow and Methods', 'For loop', 'A for loop is especially useful when:', 'You know or can compute how many iterations are needed', [miss('You need no repetition', 'Loops are for repetition.', 'For loops count/control iterations.'), miss('You want to avoid all conditions', 'For loops still have control conditions.', 'They manage repeated execution.'), miss('You need to delete the program', 'Not a loop purpose.', 'Use iteration.')]),
  q(403012, 'Chapter 4: Control Flow and Methods', 'While loop', 'A while loop continues while:', 'Its condition remains true', [miss('Its condition is false', 'A standard while loop stops when false.', 'Check condition before each pass.'), miss('The array is sorted automatically', 'Sorting is not automatic.', 'While controls repetition.'), miss('Only once by definition', 'While loops can run zero, one, or many times.', 'Condition decides.')]),
  q(403013, 'Chapter 4: Control Flow and Methods', 'Infinite loop', 'An infinite loop commonly happens when:', 'The loop condition never becomes false', [miss('The condition becomes false immediately', 'Then the loop stops or never runs.', 'Infinite means no stopping condition reached.'), miss('A list has one item', 'One item does not imply infinite loop.', 'Check updates.'), miss('A method returns a value', 'Return may stop execution, but not the definition.', 'Loop condition.')]),
  q(403014, 'Chapter 4: Control Flow and Methods', 'Accumulator', 'An accumulator variable is used to:', 'Build up a result over repeated steps', [miss('Choose a random class name', 'Not accumulator role.', 'Think running total.'), miss('Stop all loops from running', 'Accumulators are used inside loops.', 'They collect values.'), miss('Store only Boolean values always', 'Accumulators can store numbers, strings, etc.', 'Purpose is cumulative result.')]),
  q(403015, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Array index', 'In zero-indexed arrays, the first element is at index:', '0', [miss('1', 'That is one-indexing, not zero-indexing.', 'AP Java arrays use index 0.'), miss('-1', 'Not the first index in Java arrays.', 'Start at zero.'), miss('length', 'Index length is one past the last valid index.', 'First is 0.')]),
  q(403016, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Last index', 'For an array of length n using zero indexing, the last valid index is:', 'n - 1', [miss('n', 'Index n is out of bounds.', 'Count starts at 0.'), miss('1', 'Only true for length 2.', 'General formula needed.'), miss('0', 'Only true for length 1.', 'Last index is length minus one.')]),
  q(403017, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Traversal', 'Traversing an array means:', 'Visiting its elements systematically', [miss('Deleting the array type', 'Traversal means visiting, not deleting.', 'Loop through elements.'), miss('Changing it into a class', 'Not traversal.', 'Use iteration over collection.'), miss('Only checking the first element', 'Traversal usually covers many/all elements.', 'Systematic visit.')]),
  q(403018, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Out of bounds', 'Accessing arr[arr.length] in a zero-indexed array is:', 'Out of bounds', [miss('The last element', 'The last element is arr[arr.length - 1].', 'Length is not a valid index.'), miss('Always the first element', 'First is index 0.', 'Use zero indexing.'), miss('A sorting operation', 'Indexing does not sort.', 'Check valid index range.')]),
  q(403019, 'Chapter 4: Control Flow and Methods', 'Method purpose', 'A method helps by:', 'Packaging reusable behavior', [miss('Making code impossible to call', 'Methods are designed to be called.', 'Reusable block of behavior.'), miss('Deleting all variables', 'Not method purpose.', 'Encapsulation and reuse.'), miss('Turning source code into hardware', 'Compilation/runtime are different.', 'Use procedure abstraction.')]),
  q(403020, 'Chapter 4: Control Flow and Methods', 'Parameter', 'A parameter is:', 'A named input to a method', [miss('The method output only', 'Output is return value.', 'Parameter goes in.'), miss('A syntax error', 'Parameters are normal method definitions.', 'Input variable.'), miss('A loop condition only', 'Parameters can be used anywhere in method.', 'Method input.')]),
  q(403021, 'Chapter 4: Control Flow and Methods', 'Return value', 'A return statement usually:', 'Sends a value back to the caller and exits the method', [miss('Always starts a new loop', 'Return exits method, not starts loop.', 'Caller receives value.'), miss('Only prints text', 'Printing and returning differ.', 'Return passes value.'), miss('Creates an array index', 'Not its purpose.', 'Method result.')]),
  q(403022, 'Chapter 4: Control Flow and Methods', 'Void method', 'A void method:', 'Does not return a value', [miss('Cannot have parameters', 'Void methods can have parameters.', 'Void refers to return type.'), miss('Must be empty', 'Void methods can perform actions.', 'No returned value.'), miss('Always returns an integer', 'That contradicts void.', 'No return value.')]),
  q(403023, 'Chapter 5: Object-Oriented Programming', 'Class', 'A class is best described as:', 'A blueprint for objects', [miss('A single loop iteration', 'Classes define object structure/behavior.', 'Blueprint analogy.'), miss('Only one integer value', 'Classes can contain fields and methods.', 'Object-oriented design.'), miss('A syntax error', 'Classes are core language constructs.', 'Blueprint.')]),
  q(403024, 'Chapter 5: Object-Oriented Programming', 'Object', 'An object is:', 'An instance of a class', [miss('A class comment only', 'Objects are runtime instances.', 'Class blueprint creates objects.'), miss('A Boolean operator', 'Operators are not objects in this sense.', 'Instance.'), miss('Only a file name', 'Files and objects differ.', 'Use class-instance relationship.')]),
  q(403025, 'Chapter 5: Object-Oriented Programming', 'Constructor', 'A constructor is used to:', 'Initialize a new object', [miss('Destroy every object immediately', 'Constructors create/initialize.', 'Name suggests construct.'), miss('Sort an array only', 'Sorting is an algorithm.', 'Constructor sets initial state.'), miss('Return a Boolean in every case', 'Constructors usually do not have normal return types.', 'Initialize object fields.')]),
  q(403026, 'Chapter 5: Object-Oriented Programming', 'Encapsulation', 'Encapsulation means:', 'Bundling data with methods and controlling access', [miss('Repeating code without methods', 'Encapsulation organizes code.', 'Data plus behavior.'), miss('Making all fields public by default', 'Controlled access is part of encapsulation.', 'Hide implementation details.'), miss('Removing all objects', 'It is an OOP principle.', 'Use classes.')]),
  q(403027, 'Chapter 5: Object-Oriented Programming', 'Inheritance', 'Inheritance allows a class to:', 'Reuse and extend another class', [miss('Avoid all methods', 'Inherited classes can use methods.', 'Reuse parent behavior.'), miss('Become a primitive type only', 'Classes remain classes.', 'Subclass relationship.'), miss('Make arrays one-indexed', 'Inheritance does not change indexing.', 'Class hierarchy.')]),
  q(403028, 'Chapter 5: Object-Oriented Programming', 'Override', 'A subclass overrides a method when it:', 'Provides its own implementation of an inherited method', [miss('Deletes the superclass from memory', 'Override changes behavior, not class existence.', 'Same method signature, new behavior.'), miss('Calls a loop twice', 'Not definition.', 'Subclass method replaces inherited behavior.'), miss('Changes an int to a string automatically', 'Type conversion is separate.', 'Method behavior.')]),
  q(403029, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Recursive method', 'A recursive method is one that:', 'Calls itself directly or indirectly', [miss('Never calls any method', 'Recursion requires a self-call chain.', 'Look for method calling itself.'), miss('Only uses arrays', 'Recursion is control structure, not data type.', 'Self-reference.'), miss('Must be infinite', 'Correct recursion has a base case.', 'Self-call plus base case.')]),
  q(403030, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Base case', 'The base case in recursion:', 'Stops the recursive calls', [miss('Always causes another recursive call', 'That would not stop recursion.', 'Base case returns directly.'), miss('Is optional in all recursive methods', 'Without base case recursion can be infinite.', 'Need stopping condition.'), miss('Sorts the input automatically', 'Not base-case role.', 'Stop condition.')]),
  q(403031, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Recursive step', 'A recursive step should usually move the problem toward:', 'The base case', [miss('A larger unsolved problem forever', 'That risks infinite recursion.', 'Progress toward stopping.'), miss('A syntax error', 'A syntax error is a grammar problem in the code, not the goal of a recursive step.', 'Reduce or simplify input.'), miss('A random unrelated method', 'The recursive process should be purposeful.', 'Approach base case.')]),
  q(403032, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Linear search', 'Linear search checks elements:', 'One by one until target is found or list ends', [miss('Only the middle element', 'That is part of binary search.', 'Linear means sequential.'), miss('By hashing every time necessarily', 'Hashing is different.', 'Scan through.'), miss('Without looking at elements', 'Search requires checks.', 'One by one.')]),
  q(403033, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Binary search requirement', 'Binary search requires the data to be:', 'Sorted', [miss('Randomly shuffled', 'Binary search relies on order.', 'Sorted data lets you discard half.'), miss('All strings only', 'Binary search can work on ordered comparable values.', 'Ordering matters.'), miss('Empty always', 'Empty data is trivial, not requirement.', 'Needs sorted order.')]),
  q(403034, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Binary search efficiency', 'Binary search on n sorted items is typically:', 'O(log n)', [miss('O(n)', 'That is linear search.', 'Binary halves the search space.'), miss('O(n^2)', 'Too slow for binary search.', 'Repeated halving.'), miss('O(1) always', 'It usually takes multiple comparisons.', 'Logarithmic.')]),
  q(403035, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Selection sort', 'Selection sort repeatedly:', 'Selects the smallest remaining item and places it next', [miss('Splits the list in half recursively', 'That is merge sort style.', 'Selection picks minimum.'), miss('Uses a hash table for every comparison', 'Not selection sort.', 'Find minimum each pass.'), miss('Requires sorted input to work', 'It sorts unsorted lists.', 'Repeated selection.')]),
  q(403036, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Insertion sort', 'Insertion sort builds a sorted portion by:', 'Inserting each new item into its correct place', [miss('Always swapping only the first and last item', 'That is not insertion sort.', 'Think sorted hand of cards.'), miss('Ignoring order until the end', 'It maintains a sorted prefix.', 'Insert into sorted part.'), miss('Using no comparisons', 'Sorting needs comparisons.', 'Find insertion position.')]),
  q(403037, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Merge sort', 'Merge sort is based on:', 'Divide, sort halves, and merge', [miss('Trying every possible ordering', 'That would be factorial brute force.', 'Merge sort divides recursively.'), miss('Only selecting minimum repeatedly', 'That is selection sort.', 'Split and merge.'), miss('Hashing every element once only', 'Hashing is not merge sort.', 'Use divide-and-conquer.')]),
  q(403038, 'Chapter 2: Algorithms and Computational Thinking', 'Big-O', 'Big-O notation usually describes:', 'An upper bound on growth rate as input size increases', [miss('Exact runtime in seconds on every computer', 'Big-O abstracts away machine details.', 'Growth rate.'), miss('Only memory address values', 'Not what Big-O measures.', 'Complexity.'), miss('The number of syntax errors in a program', 'Syntax errors are about whether code parses; Big-O is about how algorithmic work scales.', 'Algorithm scaling.')]),
  q(403039, 'Chapter 2: Algorithms and Computational Thinking', 'O(1)', 'An O(1) operation takes time that is:', 'Constant with respect to input size', [miss('Linear in n', 'That is O(n).', 'Constant does not grow with n.'), miss('Quadratic in n', 'That is O(n^2).', 'O(1) is fixed scale.'), miss('Impossible to run', 'O(1) operations can run.', 'Input size independent.')]),
  q(403040, 'Chapter 2: Algorithms and Computational Thinking', 'Nested loops', 'Two nested loops each running n times usually give:', 'O(n^2)', [miss('O(n)', 'Nested n-by-n work multiplies.', 'n times n.'), miss('O(log n)', 'No halving described.', 'Loops are full range.'), miss('O(1)', 'Work grows with n.', 'Nested loops scale quadratically.')]),
  q(403041, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Stack', 'A stack follows:', 'Last in, first out', [miss('First in, first out', 'That is a queue.', 'Stack of plates analogy.'), miss('Random access by key', 'That is map/hash table style.', 'Push/pop top.'), miss('Sorted order always', 'Stacks need not be sorted.', 'LIFO.')]),
  q(403042, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Queue', 'A queue follows:', 'First in, first out', [miss('Last in, first out', 'That is a stack.', 'Queue line analogy.'), miss('Highest value first always', 'That is priority queue behavior.', 'FIFO.'), miss('No removal allowed', 'Queues dequeue items.', 'First arrival leaves first.')]),
  q(403043, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Hash map', 'A hash map stores:', 'Key-value pairs', [miss('Only sorted numbers', 'Hash maps are keyed collections, not necessarily sorted.', 'Map keys to values.'), miss('Function calls in last-in, first-out order', 'That describes a call stack, not a hash map.', 'Associative lookup.'), miss('Unlabeled values only by position, like an array', 'Arrays use numeric positions; hash maps use keys to find values.', 'Key-value.')]),
  q(403044, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Tree', 'A tree data structure has:', 'Nodes connected in a hierarchy with no cycles', [miss('Every node connected to itself in a cycle', 'Trees are acyclic.', 'Hierarchy.'), miss('Only one flat array always', 'Trees are not flat arrays conceptually.', 'Parent-child links.'), miss('No root in rooted trees', 'Rooted trees have a root.', 'Think hierarchy.')]),
  q(403045, 'Chapter 6: Arrays, ArrayLists, and 2D Data', 'Binary tree', 'In a binary tree, each node has at most:', 'Two children', [miss('One child', 'Binary allows up to two.', 'Left and right children.'), miss('Three children', 'That exceeds binary tree limit.', 'Binary means two.'), miss('Unlimited children', 'General trees can, binary cannot.', 'At most two.')]),
  q(403046, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Syntax error', 'A syntax error is:', 'Code that violates language grammar rules', [miss('A correct program with wrong output only', 'That is a logic error.', 'Syntax prevents parsing/compilation.'), miss('A slow algorithm', 'Performance issue differs.', 'Grammar of code.'), miss('A data structure used to organize values', 'Data structures can be implemented correctly or incorrectly; a syntax error is malformed code.', 'Invalid code form.')]),
  q(403047, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Logic error', 'A logic error occurs when code:', 'Runs but produces the wrong result', [miss('Cannot be parsed at all', 'That is syntax error.', 'Logic errors survive execution.'), miss('Has no variables by definition', 'Variable count is irrelevant.', 'Behavior wrong.'), miss('Is always faster than expected', 'Speed is not the core issue.', 'Incorrect result.')]),
  q(403048, 'Chapter 7: Searching, Sorting, Recursion, AP FRQ Reasoning', 'Test case', 'A test case is:', 'A specific input and expected behavior used to check code', [miss('A class that cannot run', 'Tests should be executable/checkable.', 'Input plus expected output.'), miss('Only a comment', 'Comments can describe tests, but test cases check behavior.', 'Use examples.'), miss('A variable name style', 'Naming style is not a test case.', 'Check program output.')]),
  q(403049, 'Chapter 2: Algorithms and Computational Thinking', 'Abstraction', 'Abstraction helps programmers by:', 'Hiding unnecessary detail behind simpler interfaces', [miss('Adding every detail everywhere', 'That is the opposite.', 'Hide complexity.'), miss('Preventing reuse', 'Abstraction supports reuse.', 'Use interface.'), miss('Making code impossible to reason about', 'Good abstraction improves reasoning.', 'Simplify mental model.')]),
  q(403050, 'Chapter 8: Computing Impact and Create-style Project', 'Data privacy', 'A privacy risk in software is:', 'Collecting or sharing personal data without appropriate consent or protection', [miss('Using comments in code', 'Comments are not inherently privacy risks.', 'Think personal data.'), miss('Sorting an array alphabetically', 'Sorting alone is not a privacy issue.', 'Data handling matters.'), miss('Choosing a loop instead of recursion', 'Implementation style is not privacy by itself.', 'Use consent/protection.')]),
])

export const apComputerScienceWorkoutGeneratedQuestions = runPolish(_baseApComputerScienceWorkoutGeneratedQuestions, [
  {
    subTopics: AP_WORKOUT_MATHCS_SUB_TOPICS,
    mentorHints: AP_WORKOUT_MATHCS_MENTOR_HINTS,
    correctShortened: AP_WORKOUT_MATHCS_CORRECT_SHORTENED,
    source: 'apWorkoutMathCs',
  },
])
