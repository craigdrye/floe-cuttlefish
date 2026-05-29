# Intro to CS - Python
A lab-oriented first course in computer science taught through Python, where students learn to design, trace, test, debug, and explain programs that work with real data, files, and everyday systems.

**ID**: `col-intro-to-cs-python` · **Discipline**: Computing

## Course Aim
This course introduces students to computer science through practical Python programming, readable problem solving, and small projects that connect code to real data, files, APIs, and everyday systems. The emphasis is on understanding rather than memorizing syntax: students learn to read a program and predict its output, decompose a problem into smaller pieces, choose appropriate data structures, and gather evidence when something goes wrong. The goal is a confident beginner who can take a small problem statement and turn it into working, tested code.

Programming is treated as a craft with habits, not just a vocabulary. From the first chapter, students trace execution by hand, name things clearly, write small functions, and check their work with concrete test cases. They learn the difference between a syntax error, a runtime error, and a logic error, and they practice the disciplined debugging that separates guessing from reasoning. Because the course is project-driven, every concept is grounded in something a student actually builds — a calculator, a quiz engine, a text analyzer, a data tool.

The course aligns with the CSTA K-12 Computer Science Standards, the programming and computational-thinking ideas in AP Computer Science Principles, and introductory pathways such as Harvard's CS50, while staying age-appropriate for the high-school tier (Year 10, ages 14-15). It assumes no prior programming experience but builds toward the rigor needed for AP CSP, AP CSA, or a first university CS course.

## Course Design Notes
The eight chapters move from the smallest building blocks (values, variables, expressions) up to functions, collections, files, and simple algorithms, so that each idea is available when the next one needs it. Python is the working language throughout because its clean syntax lets beginners focus on logic rather than ceremony, and because it is the language used in CS50 and many intro university courses. Every chapter is lab-oriented: students write and run small programs, not just read about them. Distractors in the question bank are written to surface the specific misconceptions beginners hit — confusing `=` (assignment) with `==` (comparison), forgetting that indexing starts at 0, expecting `print` to return a value, mixing up `and`/`or`, and writing loops that never terminate. Each chapter closes with the common traps that mirror those exact mistakes so practice transfers to real coding.

## Chapter 1: Computing, Python, and the Programming Loop
- **Core questions**: What is the computer actually being asked to do? Which line caused this error, and what kind of error is it? How can a task be broken into smaller, runnable steps?
- **Key concepts**: program, algorithm, interpreter, expression vs. statement, syntax error vs. runtime error vs. logic error, IDE, terminal, REPL, comments, `print`.
- **Applied skills**: write tiny programs that print, calculate, and comment; read a traceback to locate the failing line; intentionally trigger and then fix common first-time errors.
- **Common traps**: assuming code that runs is therefore correct (a logic error still runs); confusing a syntax error with a runtime error; treating a comment as something the computer executes.

## Chapter 2: Variables, Types, and Input
- **Core questions**: What type is this value, and what operations make sense on it? What does the program print after a variable is reassigned? Where is a type conversion actually needed?
- **Key concepts**: variable, assignment, descriptive naming, `int`, `float`, `str`, `bool`, type conversion (`int()`, `float()`, `str()`), `input` returning a string, f-strings, arithmetic operators.
- **Applied skills**: build an interactive calculator or budget tool; cast `input` text to a number before arithmetic; format results clearly with f-strings.
- **Common traps**: doing math on `input` without converting it from a string first; confusing `=` (assignment) with `==` (comparison); assuming an integer and the string `"5"` are interchangeable.

## Chapter 3: Conditions and Boolean Logic
- **Core questions**: Which branch runs for this input? What happens at the exact cutoff value? How can a tangled condition be simplified?
- **Key concepts**: comparison operators, `if`/`elif`/`else`, nested conditionals, `and`/`or`/`not`, truth tables, boundary cases, short-circuit evaluation.
- **Applied skills**: build a quiz engine, eligibility checker, or recommendation helper with multiple paths; test the exact boundary value of a cutoff; rewrite a compound condition more simply.
- **Common traps**: getting `>=` vs. `>` wrong at the boundary; mixing up `and` and `or`; assuming both an `if` and its `else` can run on the same pass.

## Chapter 4: Loops and Program Tracing
- **Core questions**: How many times does this loop run? Which value changes on each pass? Why does this loop fail to terminate?
- **Key concepts**: iteration, `for`, `while`, `range`, accumulator, counter, sentinel value, infinite loop, `break`, `continue`, trace tables.
- **Applied skills**: build a loop-based game round or simulation that tracks a score and repeats until a condition; fill in a trace table by hand; use an accumulator to build a running total.
- **Common traps**: off-by-one errors from the bounds of `range`; writing a `while` whose condition never becomes false; forgetting to update the loop variable so the loop never advances.

## Chapter 5: Functions and Decomposition
- **Core questions**: What value does this function return? Which variable is local and which is not? How should this problem be split into reusable parts?
- **Key concepts**: function definition, parameter vs. argument, `return` value, `print` vs. `return`, scope (local vs. global), helper functions, docstrings, preconditions.
- **Applied skills**: build a small library of tested helper functions for a menu-driven program; convert duplicated code into one reusable function; document a function's purpose with a docstring.
- **Common traps**: expecting a function that only `print`s to also return a usable value; using a local variable outside its scope; calling a function but ignoring the value it returns.

## Chapter 6: Strings, Lists, Dictionaries, and Data Patterns
- **Core questions**: What element is at this index? How does a list change after it is mutated? Which data structure fits the task best?
- **Key concepts**: zero-based indexing, slicing, mutability vs. immutability, list methods, traversal, nested lists, dictionary key-value pairs, frequency counts, basic data cleanup.
- **Applied skills**: build a text or survey analyzer that stores data in lists and dictionaries, counts patterns, and reports findings; slice a string or list correctly; choose a list vs. a dictionary for a given task.
- **Common traps**: forgetting that the first index is 0 and that a slice's end index is exclusive; expecting strings to be mutable like lists; using a list when key lookup calls for a dictionary.

## Chapter 7: Files, APIs, Debugging, and Testing
- **Core questions**: What happens if the file is missing? What shape does this JSON data have? Which test exposes the bug?
- **Key concepts**: file paths, reading and writing, CSV and JSON, simple API request and response, exceptions, `try`/`except`, unit tests, assertions, debugging logs.
- **Applied skills**: build a data program that reads a file or simple API, handles at least one error case, and includes focused tests; navigate nested JSON to extract a value; write an assertion that catches a known bug.
- **Common traps**: letting a missing-file error crash the program instead of handling it; assuming JSON is always a flat object; writing a "test" with no expected result so pass/fail is undefined.

## Chapter 8: Simple Algorithms and Project Studio
- **Core questions**: Does this algorithm always find the answer? Which cases should be tested? What tradeoff matters for this dataset?
- **Key concepts**: linear search, finding min/max, the idea of sorting, algorithmic efficiency vs. correctness, pseudocode, test cases, code review, iteration on a design.
- **Applied skills**: write and test a linear search and a min/max scan; draft pseudocode before coding; give and act on peer code-review notes; plan, prototype, and test a mini-project.
- **Common traps**: confusing a faster algorithm with a correct one; testing only the typical input and skipping edge cases; assuming an algorithm works without tracing it on a small example.

## Capstone
Build a Python project that solves a real classroom, club, personal, or community problem. The project must include user input or data import, at least one collection (list or dictionary), conditionals and loops, functions for decomposition, error handling for at least one failure case, and a short test suite. Students submit working code, a brief test plan, and a written explanation of the algorithmic choices they made and the bugs they found and fixed. Projects are graded on usefulness, decomposition and readability, correctness and testing, error handling, and the student's ability to explain and defend their revisions.
