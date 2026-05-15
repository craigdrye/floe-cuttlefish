# Introduction to Computer Science (Python)
**ID**: `introCS` - **Discipline**: Computing - **Stage**: University Freshman (ages 18-19)
**Aligns with**: typical CS1 / "Intro to Programming" courses (e.g., Harvard CS50, MIT 6.100A, Stanford CS106A, Berkeley CS61A in lighter form); CS Principles/AP CSP for breadth; Python 3.12+ as the canonical language

## Course Aim
Build practical programming fluency for students who need to solve problems with code. Students learn to decompose a problem, choose simple representations, write readable Python, test behavior, debug failures, reason about basic cost, and finish a small software project they can explain and maintain.

## Course Design Notes
This is a lab-forward CS1 course: short concept briefings, many small programs, frequent tracing, and deliberate debugging practice. Route questions here when students need programming fundamentals, Python syntax, functions, control flow, data structures, file I/O, testing, debugging, simple algorithms, basic complexity, or a first independent project. Emphasize code written from a blank file, clear function boundaries, readable names, versioned work, and evidence from tests rather than copied tutorial completion.

## Chapter 1: Computing Systems and Programming Workflow
- **Key concepts**: Hardware and software model, CPU, memory, storage, files, terminals, interpreters, source code, Python execution, editors, virtual environments, packages, version control basics, and the problem-solving cycle.
- **Practice questions**: Trace a shell command; explain why a virtual environment matters; turn a paragraph problem into inputs, outputs, constraints, and pseudocode.
- **Student output**: A working local Python setup, a repository with a README, and two short scripts run from the terminal.

## Chapter 2: Values, Variables, Types, and Expressions
- **Key concepts**: Integers, floats, strings, booleans, None, assignment as binding, operators, comparison, truthiness, type conversion, input, output, f-strings, naming conventions, and common type errors.
- **Practice questions**: Predict an expression's value and type; fix a string-versus-integer input bug; explain floating-point imprecision; clean a messy text input.
- **Student output**: A calculator or unit-conversion script with input validation and clear printed output.

## Chapter 3: Control Flow and Iteration
- **Key concepts**: if/elif/else, Boolean logic, while loops, for loops, range, enumerate, zip, break, continue, nested loops, accumulators, search patterns, off-by-one errors, and loop invariants.
- **Practice questions**: Trace loop state across iterations; write max, count, and search loops without helpers; identify why a while loop does not terminate; classify a nested loop's rough cost.
- **Student output**: A set of loop drills plus a small text-processing program that filters, counts, and summarizes input.

## Chapter 4: Functions, Decomposition, and Recursion Basics
- **Key concepts**: Function definitions, parameters, return values, side effects, scope, docstrings, type hints, helper functions, pure functions, single-responsibility design, recursion, base cases, the call stack, and refactoring scripts into modules.
- **Practice questions**: Refactor a long script into named functions; distinguish print from return; find a missing base case; write tests for edge cases before editing a function.
- **Student output**: A small library of reusable functions with docstrings, type hints, and pytest tests.

## Chapter 5: Core Data Structures in Python
- **Key concepts**: Lists, tuples, dictionaries, sets, strings as sequences, indexing, slicing, comprehensions, aliasing, shallow copies, mutation, hashing intuition, membership tests, and choosing representations for records and lookup.
- **Practice questions**: Count frequencies with a dictionary; deduplicate while preserving order; diagnose an aliasing bug; choose between list, set, dict, and tuple for a task.
- **Student output**: A data-wrangling script that reads structured records, stores them in appropriate containers, and produces a summary.

## Chapter 6: Files, Errors, Debugging, and Testing
- **Key concepts**: pathlib, text files, CSV, JSON, context managers, exceptions, tracebacks, raising errors, defensive input handling, breakpoints, debugger stepping, pytest, parametrized tests, fixtures, and testable design.
- **Practice questions**: Interpret a traceback; handle a missing file without hiding unrelated errors; add tests for empty input and malformed data; use a breakpoint to inspect loop state.
- **Student output**: A command-line file processor with a test suite and documented error behavior.

## Chapter 7: Simple Algorithms and Complexity
- **Key concepts**: Linear search, binary search preconditions, elementary sorting ideas, Python sorting with key functions, Big-O intuition, time versus space, constant factors, recursion as divide and conquer, memoization basics, and empirical timing.
- **Practice questions**: Compare two solutions for duplicate detection; explain when binary search applies; estimate O(1), O(n), O(n log n), and O(n^2) behavior; improve a slow nested-loop solution with a set or dictionary.
- **Student output**: A notebook or script that implements, tests, and times several simple algorithms on increasing input sizes.

## Chapter 8: Building a Small Program
- **Key concepts**: Requirements, user stories, project structure, command-line interfaces, modules, README files, git commits, issue tracking, code review, packaging basics, dependency files, and responsible use of AI coding assistants.
- **Practice questions**: Split a feature into functions; write acceptance tests; review a peer's code for clarity and correctness; decide whether an AI-generated suggestion is supported by tests.
- **Student output**: A complete small project such as a flashcard trainer, grade analyzer, text adventure, budget tracker, quiz engine, or data-cleaning tool.

## Capstone
Students design, implement, test, and present a small Python program that solves a real problem for a defined user. The project must include a README, clean repository structure, at least five meaningful functions, persistent input or output through files, a test suite, basic error handling, and a short explanation of data structures and algorithmic tradeoffs used.

## Assessment Ideas
- Weekly lab submissions checked for runnable code, decomposition, naming, and version-control hygiene.
- Short tracing quizzes on expressions, loops, functions, mutation, and recursion.
- Debugging practicals where students must read tracebacks, inspect state, and explain the fix.
- Unit-test assignments graded on edge cases and clarity, not just coverage count.
- Capstone rubric covering correctness, tests, maintainability, project scope, and oral explanation.

## Research Notes
- ACM/IEEE-CS, Computer Science Curricula 2023: https://csed.acm.org/
- Harvard CS50x, Introduction to Computer Science: https://cs50.harvard.edu/x/
- MIT 6.100A, Introduction to Computer Science Programming in Python: https://ocw.mit.edu/courses/6-100a-introduction-to-computer-science-programming-in-python-fall-2022/
- Stanford CS106A, Programming Methodology: https://web.stanford.edu/class/cs106a/
- UC Berkeley CS61A, Structure and Interpretation of Computer Programs: https://cs61a.org/
- Python documentation and tutorial: https://docs.python.org/3/
