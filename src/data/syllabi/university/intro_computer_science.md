# Introduction to Computer Science (Python)
**ID**: `introCS` · **Discipline**: Computing · **Stage**: University Freshman (ages 18–19)
**Aligns with**: typical CS1 / "Intro to Programming" courses (e.g., Harvard CS50, MIT 6.100A, Stanford CS106A, Berkeley CS61A in lighter form); CS Principles/AP CSP for breadth; Python 3.12+ as the canonical language

## Course Philosophy
The first programming course is the highest-ROI course any university freshman in 2026 can take, regardless of major. Its real subject is **computational thinking**: decomposing a problem, choosing a representation, expressing a process, and reasoning about correctness — *not* memorising syntax. Students arrive with two failure modes: (1) the "tutorial completer" who has watched videos but cannot debug their own code, and (2) the "I'm not a math person" student who has been told they can't program. Both dissolve under the same treatment: a lot of small, finished programs, written *from a blank file*, with the debugger on. The internal goal is that by the end of the course a student should be able to read a problem statement they've never seen, decide on a data structure, write 30 lines of working Python in one sitting, fix their own bugs without panic, and explain their solution to a peer. Every later technical course (data structures, ML, data science, software engineering) presupposes this comfort.

## Module 1: How Computers Compute and the Programming Mindset (10%)
- What a computer is (CPU, memory, storage, I/O); the von Neumann architecture intuition; bits, bytes, two's complement
- How programs run: source code → interpreter/compiler → bytecode/machine code → CPU execution; Python as an interpreted language
- The shell and the file system: pwd, ls, cd, mkdir, mv, cp, rm; absolute vs relative paths; PATH and how the OS finds programs
- Setting up a working environment: Python 3.12+, a code editor (VS Code, Cursor, or PyCharm), the integrated terminal, virtual environments (venv, uv); why `pip install` should not pollute the global Python
- **Computational thinking** (Wing): decomposition, pattern recognition, abstraction, algorithm design
- **The four-step problem-solving cycle** (Polya): understand → plan → execute → review
- **Pseudocode** before code; the value of a paper-napkin sketch
- The growth mindset of a programmer: every program starts broken; the goal is "fewer broken" not "perfect first try"
- **Questions**: trace what `cd ../docs && cat readme.md` does; identify why a fresh `python` install isn't enough to run someone else's project (deps); convert a paragraph problem statement into pseudocode

## Module 2: Variables, Types, and Expressions (12%)
- **Values, types, and variables**: int, float, str, bool, None; dynamic typing; identity vs value
- Assignment as binding, not equality; rebinding vs mutation; why `x = x + 1` is OK
- **Numeric types**: integer arithmetic, float arithmetic, the limits of float (0.1 + 0.2 ≠ 0.3 surprise), integer division `//`, modulo `%`, exponentiation `**`
- **Strings**: indexing, slicing, immutability, concatenation, repetition, length, common methods (`.lower()`, `.upper()`, `.strip()`, `.split()`, `.replace()`, `.startswith()`, `.endswith()`, `.find()`, `.join()`); f-strings (`f"{name=}"`); escape characters and raw strings
- **Booleans and comparison**: ==, !=, <, <=, >, >=; chained comparisons; truthiness rules (empty containers, 0, None, "" are falsy); `is` vs `==`
- **Logical operators**: `and`, `or`, `not`; short-circuit evaluation
- **Type conversion**: `int("42")`, `str(3.14)`, `float("3.14")`, `bool(0)`; when implicit conversion happens; common errors
- **Input and output**: `input()`, `print()` with `sep=`, `end=`; string formatting; reading numbers from `input()` (and the `int(input(...))` pattern)
- **Constants and naming**: snake_case for variables/functions, ALL_CAPS for constants, PascalCase for classes; PEP 8 basics
- **Questions**: predict the type of an expression; spot the bug in a string-vs-int input handling; chain string methods to clean a messy input; explain why `0.1 + 0.2 == 0.3` is False

## Module 3: Control Flow — Conditionals and Loops (12%)
- **`if`, `elif`, `else`** structure; nested conditionals; the early-return pattern as a flatter alternative
- Boolean expressions in conditions; the difference between conditional statement and conditional expression `x if cond else y`
- **`while` loops**: condition-controlled iteration; sentinel patterns; `break` and `continue`; the infinite loop pitfall
- **`for` loops**: iteration over sequences (lists, strings, ranges, generators); `range(start, stop, step)` semantics; `enumerate(seq)` for index+value
- **Nested loops**: O(n × m) intuition; double-counting and the off-by-one trap
- The **`for-else`** clause (rarely used but worth knowing for "search loop with no-match branch")
- **Common loop patterns**: accumulator (sum, count, max/min), filter, transform, search, parallel iteration with `zip`
- **Loop invariants** as a debugging tool: "what is true at the top of every iteration?"
- Avoiding deeply-nested control flow with early returns and helper functions
- **Questions**: write a function that returns the largest number in a list using only loops and conditionals; classify the time complexity of a nested loop; identify why a `while` loop never terminates

## Module 4: Functions and Modular Design (12%)
- **Defining functions**: `def`, parameters, return values; the difference between `print` (side effect) and `return` (value)
- Positional vs keyword arguments; default parameter values; the **mutable-default-argument trap** (`def f(x=[])`)
- `*args` and `**kwargs`; argument unpacking
- **Scope**: local vs enclosing vs global vs built-in (LEGB rule); `global` and `nonlocal` (and why their need usually signals a design problem)
- **Pure functions** vs functions with side effects; why pure functions are easier to test and reason about
- **Function composition**: small functions that compose; the single-responsibility principle
- **Recursion**: the base case and the recursive case; the call stack; classic examples (factorial, Fibonacci, sum of digits, palindrome check, list flatten)
- The trade-off between recursion and iteration; tail recursion (Python doesn't optimize it)
- **Lambda expressions** for short, throwaway functions; idiomatic uses with `sorted(key=)`, `filter`, `map`
- **Higher-order functions**: functions that take or return functions; `map`, `filter`, `sorted` with `key`; `functools.reduce` (rarely needed)
- **Docstrings and type hints**: PEP 257, PEP 484; `def add(x: int, y: int) -> int:`; using `mypy` or pyright for static checking; type hints as documentation that doesn't go stale
- **Questions**: refactor a 50-line script into named functions; spot the mutable-default-argument bug; convert a recursive function to iterative and back; write type hints for an existing function

## Module 5: Built-in Data Structures (15%)
- **Lists**: ordered, mutable, heterogeneous; indexing, slicing (with step and reversal `[::-1]`), `append`, `pop`, `insert`, `remove`, `sort`, `reverse`, `extend`, `+`, `*`; the difference between `list.sort()` (in place) and `sorted(list)` (returns new)
- List comprehensions: `[expr for x in iter if cond]`; nested comprehensions; when comprehensions become unreadable and you should use a loop
- **Aliasing and shallow vs deep copy**: `a = b` is aliasing; `a = b[:]` is shallow copy; `copy.deepcopy(b)` for nested structures; the surprise of mutating an aliased list
- **Tuples**: ordered, immutable, often used for fixed-arity records; tuple packing/unpacking; using tuples as dictionary keys; tuple-vs-list when to choose which; named tuples (`collections.namedtuple`, `typing.NamedTuple`)
- **Dictionaries**: key-value mapping; insertion order preserved (since Python 3.7); common methods (`.get(key, default)`, `.items()`, `.keys()`, `.values()`, `.setdefault()`); membership test with `in`; iterating dicts; dict comprehensions
- The **`collections` module**: `defaultdict`, `Counter`, `deque`, `OrderedDict`, `ChainMap`
- **Sets**: unordered, unique elements, set operations (union `|`, intersection `&`, difference `-`, symmetric difference `^`); set comprehensions; `frozenset` for hashable sets
- **Strings as sequences**: shared interface with lists (indexing, slicing, iteration, length)
- **Hashing intuition**: why dict and set lookups are O(1) average; what "hashable" means; why mutable objects can't be dict keys
- **Choosing a data structure**: list for ordered sequence, set for membership, dict for lookup by key, tuple for fixed records; rough Big-O of each operation
- **Questions**: convert a list of pairs into a dict and back; count word frequencies using `Counter`; deduplicate while preserving order; explain why `lst = [[]] * 3` followed by `lst[0].append(1)` makes all three rows equal

## Module 6: Files, Errors, and the Standard Library (10%)
- **File I/O**: `open(path, mode)`; modes (`r`, `w`, `a`, `rb`, `wb`); the `with` statement (context managers); reading line-by-line vs `.read()`; `.readlines()` vs iterating; UTF-8 vs other encodings; the BOM gotcha
- **Paths**: `pathlib.Path` over `os.path`; `Path("data") / "file.csv"`; `Path.exists()`, `.read_text()`, `.write_text()`
- Reading common formats: CSV with `csv` module, JSON with `json` module, simple line-delimited text
- **Errors and exceptions**: the difference between syntax errors (caught at parse time) and exceptions (caught at runtime)
- Common exceptions: `IndexError`, `KeyError`, `ValueError`, `TypeError`, `FileNotFoundError`, `ZeroDivisionError`, `AttributeError`, `ImportError`, `StopIteration`
- **`try / except / else / finally`**: catching specific exceptions vs bare `except`; the EAFP idiom (Easier to Ask Forgiveness than Permission) vs LBYL (Look Before You Leap)
- **Raising exceptions**: `raise ValueError("bad input")`; defining custom exception classes; the principle of "raise early, rescue at boundaries"
- **The standard library**: `os`, `sys`, `argparse` for command-line tools, `random`, `math`, `statistics`, `datetime`, `time`, `re` for regex, `itertools` (chain, combinations, permutations, groupby), `functools` (cache/lru_cache, partial), `collections`, `pathlib`, `json`
- **Regular expressions**: a quick tour (anchors `^$`, character classes `\d \w \s`, quantifiers `* + ? {n,m}`, groups, non-greedy `*?`); `re.search`, `re.match`, `re.findall`, `re.sub`; when regex is overkill (parsing HTML, deeply nested structures)
- **Questions**: read a CSV, group rows by a field, write summary out as JSON; handle missing files gracefully; write a regex that matches phone numbers in three common formats; refactor LBYL code into EAFP

## Module 7: Object-Oriented Programming (10%)
- **Classes and objects**: `class Point:` with `__init__`, instance attributes, methods; `self` as the explicit first parameter
- **Class vs instance attributes**; the mutable-class-attribute trap
- **Encapsulation**: leading-underscore convention `_private`, dunder-name mangling `__double_underscore`, properties via `@property` and `@x.setter`
- **Special / dunder methods**: `__init__`, `__repr__`, `__str__`, `__len__`, `__eq__`, `__hash__`, `__lt__`, `__add__`, `__iter__`, `__next__`, `__enter__`/`__exit__`; the role of `__repr__` for debugging
- **Inheritance**: subclassing, `super()`, method resolution order (MRO), the C3 linearisation (intuition only); composition vs inheritance and why composition is usually preferred
- **Abstract base classes** with `abc.ABC` and `@abstractmethod`; `Protocol` (PEP 544) for structural typing
- **Dataclasses** (`@dataclass`): boilerplate-free immutable-ish records; `frozen=True`, `field(default_factory=list)`
- **Type-driven design**: using type hints to express intent; generics (`list[int]`, `dict[str, list[Path]]`)
- When to reach for OOP and when functions + dataclasses are simpler
- **Questions**: design a simple `Vector` class with addition and equality; refactor a tangle of dicts into dataclasses; identify the MRO of a multiple-inheritance hierarchy

## Module 8: Algorithms — Thinking About Cost (12%)
- **Big-O notation** intuition: O(1), O(log n), O(n), O(n log n), O(n²), O(2^n), O(n!); upper bound on growth as n → ∞
- Time vs space complexity; amortised analysis (e.g., dynamic-array append)
- **Searching**: linear search O(n); binary search O(log n) and the precondition (sorted)
- **Sorting**: bubble, insertion, selection (each O(n²)); merge sort and quicksort O(n log n); Python's Timsort under the hood; stable vs unstable sorts; sorting with a key vs a comparator (Python only supports keys)
- **Recursion revisited**: divide-and-conquer (merge sort, binary search); recurrence relations and the master theorem (intuition)
- **Dynamic programming** intuition: overlapping subproblems + optimal substructure; memoisation (`@functools.cache`) vs tabulation; classic toy problems (Fibonacci, climbing stairs, coin change)
- **Greedy algorithms**: when local optima compose to global ones (interval scheduling, Huffman intuition)
- **Graph intuition** (light): nodes, edges, directed vs undirected, weighted, BFS vs DFS; mention that data structures and graph algorithms are the next course
- **Empirical timing**: `timeit`, `time.perf_counter()`; the gap between asymptotic complexity and wall-clock time (constant factors, memory hierarchy, branch prediction)
- **Questions**: derive the time complexity of a function with nested loops; refactor an O(n²) duplicate-finder to O(n) with a set; memoise a recursive Fibonacci; explain when binary search applies and when it doesn't

## Module 9: Tooling, Testing, and Software Hygiene (10%)
- **The debugger**: setting breakpoints, stepping over/into/out, inspecting variables, the call stack; `pdb` and IDE debuggers; print-debugging vs the debugger trade-off; `breakpoint()` since Python 3.7
- **Reading error messages**: the traceback as the bottom-up call chain; "scrolling up to the first frame in *your* code"; common confusing tracebacks (KeyError, AttributeError on None)
- **Testing**: why every non-trivial function should have a test; **pytest** basics (`assert` statements, `def test_…`); arrange-act-assert structure; parametrised tests; fixtures
- The **testing pyramid** (intuition): many fast unit tests, fewer integration tests, fewer end-to-end tests
- **Test-driven development** (intuition): red → green → refactor; when TDD helps and when it doesn't
- **Version control with git**: `init`, `add`, `commit`, `status`, `diff`, `log`, `branch`, `checkout`/`switch`, `merge`, `pull`, `push`; the staging area; `.gitignore`; meaningful commit messages
- **GitHub** workflow: forks, pull requests, code review; SSH keys; the difference between `git` (the tool) and GitHub (the platform)
- **Code style and tooling**: `black` (formatter), `ruff` (linter+formatter, increasingly the default in 2026), `mypy`/`pyright` (type checker); pre-commit hooks
- **Project structure**: `src/`, `tests/`, `pyproject.toml`, `requirements.txt` or `uv.lock`; reproducible environments
- **Documentation**: a good README, `examples/`, docstrings, optionally Sphinx or mkdocs for larger projects
- **Working with AI coding tools (2026)**: GitHub Copilot, Cursor, Claude Code, Replit Agent; using them as a fast intern, not an oracle; the *verify-and-own* principle; reading the code you accept; writing tests for AI-generated code; institutional academic-integrity policies
- **Questions**: write a pytest test suite for an existing function; resolve a merge conflict; refactor a tangled script into a packaged project; identify whether a Copilot suggestion is correct, suspicious, or wrong

## Stretch Zone (push beyond CS1)
- **Functional programming flavours in Python**: pure functions, immutability, `map`/`filter`/`reduce`, generators with `yield`, generator expressions, `itertools` deep cuts (`groupby`, `accumulate`, `tee`)
- **Iterators and generators**: writing `__iter__`/`__next__`; the lazy-evaluation pattern; using generators for streaming pipelines (memory-bounded data processing)
- **Decorators**: functions that wrap functions; `@functools.wraps`; common decorators (`@cache`, `@property`, `@staticmethod`, `@classmethod`, `@dataclass`); writing your own (timer, retry, logger)
- **Concurrency intuition**: threading vs multiprocessing vs `asyncio`; the GIL and what it constrains; when each model wins (I/O-bound vs CPU-bound)
- **NumPy and vectorised thinking**: arrays, broadcasting, why a NumPy operation can be 100× a Python loop; the gateway to scientific computing
- **Pandas crash course**: DataFrames, Series, indexing/`loc`/`iloc`, group-by, merging; the most common 20% of pandas that covers 80% of data work
- **Working with web APIs**: `requests`, `httpx`; REST basics, status codes, JSON payloads; rate limiting, retries, exponential backoff; reading API documentation
- **Databases primer**: SQLite as a starter; basic SQL (SELECT, WHERE, JOIN, GROUP BY, ORDER BY); ORMs (SQLAlchemy intuition); when to use a DB vs a JSON file
- **Building something real**: a small CLI tool with `argparse` or `typer`; a simple web app with Flask or FastAPI; a static-site generator; a Jupyter notebook for an analysis project; finishing matters more than scope
- **Reading other people's code**: starting in `tests/` to understand intent; reading `__init__.py` to find the public surface; using IDE "go to definition" to navigate
- **Common student traps to drill**:
  - "It works on my machine" — environments, dependencies, OS quirks
  - Catching exceptions too broadly (`except:` or `except Exception:`) and silently swallowing bugs
  - Mutating a list while iterating over it
  - Passing a list as a default argument and being surprised by shared state
  - Using `==` for None instead of `is None`
  - Comparing floats for equality without tolerance
  - Reaching for OOP when functions + dataclasses are clearer
  - Premature optimisation: profile first, then optimise
  - Cargo-culting AI suggestions without understanding them
  - Not using version control until the project is "ready" — too late, every project should `git init` on day 1
- **The single most important habit**: ship something small every week — a script, a Notebook, a tiny tool, a contribution to an open-source repo. Programming skill compounds with reps, not with reading.
