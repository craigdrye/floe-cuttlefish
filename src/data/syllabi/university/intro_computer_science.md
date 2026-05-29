# Introduction to Computer Science (Python)
**ID**: `introCS` - **Discipline**: Computing - **Stage**: University Freshman (ages 18-19)
**Aligns with**: typical CS1 / "Intro to Programming" courses (e.g., Harvard CS50, MIT 6.100A, Stanford CS106A, Berkeley CS61A in lighter form); CS Principles/AP CSP for breadth; Python 3.12+ as the canonical language

## Course Aim
This course builds practical programming fluency for students who need to solve real problems with code, not just recognize syntax on a slide. By the end, a student can take a plain-language problem, decompose it into inputs, outputs, and constraints, choose simple data representations, and write readable Python that they can run, test, and explain. The emphasis throughout is on transfer: the ability to face a blank file and a problem they have never seen before and make steady, debuggable progress toward a correct solution.

Equally important is the habit of reasoning about programs rather than guessing at them. Students learn to trace execution by hand, predict the value and type of an expression before running it, read a traceback as a precise account of what failed, and form a hypothesis before changing code. They learn that "it ran without an error" is not the same as "it is correct," and that tests, not vibes, are the evidence that a function behaves. This skeptical, evidence-driven posture is the single most valuable thing a first programming course can install.

Finally, the course treats software as something that is built, maintained, and explained to other people. Students keep their work under version control, write functions with clear boundaries and meaningful names, document the non-obvious, and reason about the rough cost of their solutions so they can tell an O(n) approach from an accidental O(n^2) one. In an era of AI coding assistants, the course is explicit that a generated suggestion is a hypothesis to be tested, not an answer to be trusted, and that the student remains accountable for code they ship.

## Course Design Notes
This is a lab-forward CS1 course: short concept briefings followed by many small programs, frequent hand-tracing, and deliberate, repeated debugging practice. Route questions here when students need programming fundamentals, Python syntax, functions, control flow, core data structures, file and exception handling, testing, debugging, simple algorithms, basic complexity reasoning, or a first independent software project. The center of gravity is code written from a blank file with clear function boundaries, readable names, versioned history, and pass/fail evidence from tests rather than tutorial completion.

Questions and assessments should reward students who can predict and explain, not just produce. Favor tracing prompts ("what does this print and why"), bug-finding prompts ("this code is wrong; what is the smallest fix"), representation-choice prompts ("list, set, dict, or tuple, and why"), and cost-estimate prompts ("roughly how does this scale"). Keep Python 3.12+ as the canonical language and prefer idiomatic, modern style: f-strings, comprehensions where they aid clarity, `pathlib` over string paths, context managers for files, type hints on function signatures, and `pytest` for tests. Avoid quizzing on memorized trivia detached from problem-solving; every concept should connect to something a student could write or debug.

## Chapter 1: Computing Systems and Programming Workflow
- **Core questions**: What actually happens between typing `python script.py` and seeing output? Why does professional work happen in a repository and a virtual environment rather than a single loose file? How do you turn an ambiguous problem statement into something you can start coding?
- **Key concepts**: Hardware/software model; CPU, RAM, and persistent storage; files and the filesystem; the terminal and basic shell commands; source code versus running process; the Python interpreter and the REPL; editors and IDEs; virtual environments and `pip` packages; version control basics (commit, diff, history); the problem-solving cycle of understand, plan, code, test, reflect.
- **Applied skills**: Set up a working local Python environment with a virtual environment; initialize a git repository with a README; run scripts from the terminal and read their exit behavior; translate a paragraph problem into explicit inputs, outputs, constraints, and pseudocode before writing any code.
- **Common traps**: Confusing the editor with the interpreter (thinking saving a file runs it); installing packages globally and breaking later projects; committing the virtual environment or secrets into git; jumping straight to typing code without a plan; assuming "no output" means "it worked."

## Chapter 2: Values, Variables, Types, and Expressions
- **Core questions**: When you write `x = 5`, what is actually stored and what does the name refer to? Why does `0.1 + 0.2` not print `0.3`? How do you decide what type a value is and what operations are legal on it?
- **Key concepts**: Core types (`int`, `float`, `str`, `bool`, `None`); assignment as name-binding, not algebraic equation; arithmetic, comparison, and logical operators; operator precedence; truthiness and falsy values; explicit type conversion (`int()`, `float()`, `str()`); `input()` always returning a string; `print()` versus `repr`; f-strings; naming conventions and readable identifiers.
- **Applied skills**: Predict both the value and the type of an expression before running it; convert and validate user input safely; format numeric and text output cleanly with f-strings; choose meaningful variable names that document intent.
- **Common traps**: Treating `=` as comparison or as math equality; forgetting `input()` returns a string and concatenating instead of adding; expecting exact decimal results from binary floating point; relying on implicit truthiness in ways that silently mishandle `0` or empty values; reusing one name for two unrelated meanings.

## Chapter 3: Control Flow and Iteration
- **Core questions**: How does a program decide which code to run? How do you repeat work safely so that it always terminates? When you have a loop inside a loop, roughly how much work is that?
- **Key concepts**: `if`/`elif`/`else`; Boolean logic and short-circuit evaluation; `while` loops and termination conditions; `for` loops over sequences and `range`; `enumerate` and `zip`; `break` and `continue`; nested loops; accumulator and counter patterns; linear search patterns; off-by-one errors; the idea of a loop invariant.
- **Applied skills**: Trace loop state across iterations on paper; write max, sum, count, and search loops from scratch without library helpers; diagnose why a `while` loop never terminates; classify the rough cost of a single versus a nested loop.
- **Common traps**: Off-by-one errors at the start or end of a range; forgetting to update the loop variable in a `while`, causing an infinite loop; using `elif` chains where mutually exclusive conditions are not actually exclusive; mutating a list while iterating over it; confusing `==` with `is`.

## Chapter 4: Functions, Decomposition, and Recursion Basics
- **Core questions**: When should a chunk of code become its own function? What is the difference between printing a value and returning it? How does a recursive call know when to stop, and where does the work actually happen?
- **Key concepts**: Function definitions, parameters, and arguments; `return` versus `print`; local versus enclosing scope; default and keyword arguments; docstrings and type hints; pure functions and side effects; single-responsibility design; recursion, base cases, and the call stack; refactoring a script into a small module.
- **Applied skills**: Refactor a long top-level script into well-named functions; write a docstring and type hints that make a function self-explanatory; write a correct recursive function with an explicit base case; design functions to be testable by returning values instead of printing them.
- **Common traps**: Returning `None` by accident because a function only prints; missing or unreachable base case causing infinite recursion and a `RecursionError`; relying on global variables instead of parameters and return values; mutable default arguments that persist across calls; functions that do too many things and cannot be tested in isolation.

## Chapter 5: Core Data Structures in Python
- **Core questions**: Given a task, should you reach for a list, a tuple, a set, or a dictionary, and why? What does it mean that two variables can point at the same list? Why is a membership test in a set or dict so much faster than in a list?
- **Key concepts**: Lists, tuples, dictionaries, and sets and their guarantees; strings as immutable sequences; indexing and slicing; list and dict comprehensions; mutability versus immutability; aliasing and shallow versus deep copies; hashing intuition and why dict/set keys must be hashable; `in` membership cost across structures; choosing representations for records and lookups.
- **Applied skills**: Count frequencies and group records with a dictionary; deduplicate a collection while preserving order; diagnose and fix an aliasing bug where one change unexpectedly affects another variable; justify the choice of container for a given task in terms of ordering, uniqueness, and lookup cost.
- **Common traps**: Assuming list membership (`x in big_list`) is cheap when it is O(n); mutating a list that is aliased by another name; trying to use a list or dict as a dictionary key; expecting a tuple to be mutable; confusing a shallow copy with an independent deep copy.

## Chapter 6: Files, Errors, Debugging, and Testing
- **Core questions**: How do you read and write data that outlives a single run of the program? When something throws, how do you read the traceback to find the real cause? How do you gain confidence that a function is correct without running it by hand a hundred times?
- **Key concepts**: `pathlib` for paths; reading and writing text, CSV, and JSON; the `with` context manager and why it matters; exceptions, tracebacks, and the exception hierarchy; raising and catching specific exceptions; defensive input handling; breakpoints and stepping through code in a debugger; `pytest`, assertions, parametrized tests, and fixtures; designing code to be testable.
- **Applied skills**: Read a traceback top-to-bottom and locate the failing line and cause; handle a missing file without silently swallowing unrelated errors; write tests covering empty input, malformed data, and boundary cases; use a breakpoint to inspect loop state instead of scattering print statements.
- **Common traps**: Bare `except:` that hides real bugs and typos; not closing files (or relying on the OS) instead of using `with`; catching an exception and continuing as if nothing happened; writing tests with no expected value so they can never fail meaningfully; chasing symptoms instead of reading the actual traceback.

## Chapter 7: Simple Algorithms and Complexity
- **Core questions**: Why can binary search beat linear search, and what must be true for it to work at all? What does Big-O actually describe, and what does it deliberately ignore? When does swapping a list for a set or dict turn a slow program into a fast one?
- **Key concepts**: Linear search; binary search and its sorted-input precondition; elementary sorting ideas and why we usually call a library sort; `sorted`/`list.sort` with `key` functions; Big-O as growth rate, ignoring constants; common classes O(1), O(log n), O(n), O(n log n), O(n^2); time versus space tradeoffs; recursion as divide and conquer; memoization basics; empirical timing.
- **Applied skills**: Compare two solutions to the same task and argue which scales better; identify when binary search is and is not applicable; estimate the complexity class of a piece of code by inspection; rewrite a slow nested-loop solution as a near-linear one using a set or dictionary; measure real running times across growing inputs.
- **Common traps**: Applying binary search to unsorted data; equating "Big-O" with "actual speed" and ignoring that constants matter for small inputs; nesting loops that recompute work a lookup table could cache; assuming recursion is always faster or always slower; conflating time and space complexity.

## Chapter 8: Building, Versioning, and Explaining a Small Program
- **Core questions**: How do you take a feature idea and turn it into a structured, testable project rather than one sprawling file? What makes a repository something another person (or future you) can understand? When should you trust an AI-generated suggestion?
- **Key concepts**: Requirements and user stories; project and module structure; command-line interfaces; READMEs and dependency files; git commits, diffs, and history as a record of intent; issue tracking and lightweight code review; packaging basics; the discipline of treating AI coding assistant output as an unverified hypothesis.
- **Applied skills**: Split a feature into focused functions and modules; write acceptance tests that describe desired behavior before implementing it; review a peer's code for clarity and correctness; decide whether an AI-generated suggestion is actually supported by passing tests, and rewrite or reject it when it is not.
- **Common traps**: Writing one 300-line file with no functions; committing everything in a single vague "stuff" commit; pasting AI-generated code that runs but is subtly wrong and untested; skipping the README so no one can run the project; confusing "it works on my machine once" with "it is finished."

## Capstone
Students design, implement, test, document, and present a small Python program that solves a real problem for a clearly defined user. Strong examples include a flashcard trainer with spaced repetition, a grade or budget analyzer over CSV data, a text adventure with a saved game state, a quiz engine, or a data-cleaning tool. The deliverable must include: a README explaining what it does and how to run it; a clean repository structure under version control with a meaningful commit history; at least five focused functions with docstrings and type hints; persistent input or output through files (CSV, JSON, or plain text); a `pytest` test suite that exercises ordinary, empty, and malformed inputs; defensive error handling that fails clearly rather than silently; and a short written and oral explanation of the data structures chosen and the rough algorithmic cost of the core operations. Assessment weighs correctness and tests most heavily, followed by maintainability and clarity, then scope, and finally the quality of the student's explanation of their own tradeoffs.

## Assessment Ideas
- Weekly lab submissions checked for runnable code, sensible decomposition, naming, and version-control hygiene.
- Short tracing quizzes on expressions, loops, functions, mutation/aliasing, and recursion.
- Debugging practicals where students must read a real traceback, inspect state, and explain the smallest correct fix.
- Unit-test assignments graded on edge-case coverage and clarity of intent, not raw coverage percentage.
- Representation-choice and complexity short answers ("which container and why," "roughly how does this scale").
- Capstone rubric covering correctness, tests, maintainability, scope, and oral explanation of tradeoffs.

## Research Notes
- ACM/IEEE-CS, Computer Science Curricula 2023: https://csed.acm.org/
- Harvard CS50x, Introduction to Computer Science: https://cs50.harvard.edu/x/
- MIT 6.100A, Introduction to Computer Science and Programming in Python: https://ocw.mit.edu/courses/6-100a-introduction-to-computer-science-programming-in-python-fall-2022/
- Stanford CS106A, Programming Methodology: https://web.stanford.edu/class/cs106a/
- UC Berkeley CS61A, Structure and Interpretation of Computer Programs: https://cs61a.org/
- Python 3 documentation and tutorial: https://docs.python.org/3/
