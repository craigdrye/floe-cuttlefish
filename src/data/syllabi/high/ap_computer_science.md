# AP Computer Science
A combined bridge across AP Computer Science Principles and AP Computer Science A, pairing the big ideas of computing with Java object-oriented programming and exam-style code reasoning.

**ID**: `apComputerScience` · **Discipline**: Computing

## Course Aim
This course prepares students for both College Board AP computer science pathways from a single coherent syllabus. AP Computer Science Principles (CSP) develops broad fluency in the big ideas of computing: creative development, data, algorithms and programming, computing systems and networks, and the impact of computing. AP Computer Science A (CSA) builds rigorous Java problem solving, object-oriented design, data structures, algorithms, and the disciplined code tracing the exam rewards.

Students learn to read and reason about code as carefully as they write it. They move fluidly between conceptual computing questions (how data is represented, how the internet routes a request, who is helped or harmed by an innovation) and concrete programming tasks (predicting the value of an expression, tracing a loop, choosing what should be private). The aim is a learner who can both explain computing to a non-specialist and defend a Java method line by line.

The course tracks the 2025-26 College Board frameworks. CSA is organized around four consolidated units (with inheritance de-emphasized and new work on text files and data sets), assessed by multiple-choice questions and free-response questions. CSP is organized around five weighted Big Ideas and assessed by an end-of-course exam plus the Create performance task. This syllabus can be run as a combined bridge or split into two separate tracks.

## Course Design Notes
The eight chapters interleave CSP concepts and CSA programming so that ideas reinforce each other: data representation (CSP) feeds primitive and reference types (CSA); algorithms and computational thinking (both) feed control flow, searching, and sorting (CSA). Java is the working language for all programming chapters because CSA is a Java exam; CSP examples use language-neutral pseudocode and the AP Exam Reference where appropriate. Distractors are written to surface the specific misconceptions the AP exams probe — off-by-one indexing, value-versus-reference comparison, infinite recursion, confusing linear and binary search complexity. Every chapter ends with traps that mirror real exam stems so practice transfers to the timed setting.

## Chapter 1: Computing Systems, Data, and the Internet
- **Core questions**: How is information represented in binary? What happens, step by step, when data travels across the internet? Which security threat does this scenario describe?
- **Key concepts**: binary and number bases, data abstraction, lossless vs. lossy compression, protocols (IP, TCP, HTTP), routing, DNS, packets, fault tolerance and redundancy, cybersecurity threats.
- **Applied skills**: annotate a web-request diagram from browser to server and back; convert between binary, decimal, and hexadecimal; classify a described attack (phishing, DDoS, malware).
- **Common traps**: assuming lossy compression is always worse; confusing a protocol with a physical device; thinking more bits always means more information rather than more distinct values.

## Chapter 2: Algorithms and Computational Thinking
- **Core questions**: What sequence of steps solves this problem? Which condition controls the branch? Does this algorithm always terminate, and is it correct?
- **Key concepts**: sequencing, selection, iteration, abstraction, decomposition, simulation and modeling, algorithmic efficiency, correctness vs. termination, reasonable vs. unreasonable run time.
- **Applied skills**: write pseudocode for a real-world process and supply test cases; compare two algorithms for the same task; identify the worst-case behavior of a simple procedure.
- **Common traps**: confusing a faster algorithm with a correct one; assuming any loop terminates; treating decomposition as merely making code shorter rather than clearer and reusable.

## Chapter 3: Programming Foundations in Java
- **Core questions**: What is the value after this expression evaluates? Is this comparison testing value or reference? Which method call is valid for this type?
- **Key concepts**: primitive types (`int`, `double`, `boolean`, `char`), reference types, variables and assignment, arithmetic and integer division, operator precedence, casting, `String` methods, the `Math` class, console output.
- **Applied skills**: trace expressions involving integer division and modulus; build and concatenate `String` values; call library methods such as `Math.random()` and `Math.abs()` with correct arguments.
- **Common traps**: expecting `5 / 2` to yield `2.5`; comparing objects with `==` instead of `.equals()`; forgetting `String` indexing is zero-based and that `substring` end-index is exclusive.

## Chapter 4: Control Flow and Methods
- **Core questions**: How many times does this loop execute? Which path does this compound condition choose? What value should this method return?
- **Key concepts**: `if`/`else if`/`else`, boolean expressions, De Morgan's laws, short-circuit evaluation, `while` and `for` loops, nested loops, method parameters, return values, variable scope, helper methods.
- **Applied skills**: build a Java utility class with conditionals, loops, and tested methods; rewrite a compound boolean using De Morgan's laws; count exact loop iterations from bounds.
- **Common traps**: off-by-one errors from `<` vs. `<=`; assuming a `void` method returns a value; negating an `&&`/`||` expression incorrectly when distributing the `!`.

## Chapter 5: Object-Oriented Programming
- **Core questions**: Which constructor runs for this `new` expression? Which method executes at run time under polymorphism? What should be `private` and why?
- **Key concepts**: classes vs. objects, constructors and overloading, instance variables, encapsulation, the `this` reference, accessor and mutator methods, `static` members, inheritance and `super`, method overriding, polymorphism.
- **Applied skills**: design a small class hierarchy with an overridden method; write a tracing explanation of which method runs for a given object; choose appropriate access modifiers.
- **Common traps**: making fields `public` and breaking encapsulation; confusing the static (declared) type with the dynamic (run-time) type; assuming a subclass automatically inherits constructors.

## Chapter 6: Arrays, ArrayLists, and 2D Data
- **Core questions**: Which index is out of bounds here? What goes wrong when removing from a list while traversing it? How do row and column loops interact in a grid?
- **Key concepts**: 1D arrays, `ArrayList`, indexing and length, traversal, mutation, the enhanced `for` loop, nested loops, 2D arrays, row-major traversal.
- **Applied skills**: write data-processing methods over arrays and lists; traverse and update a 2D array by row and column; safely add/remove from an `ArrayList` during iteration.
- **Common traps**: accessing index `n` in a length-`n` array; index-shift bugs when removing during a forward `for` loop; swapping row and column indices in 2D traversal.

## Chapter 7: Searching, Sorting, Recursion, and AP Exam Reasoning
- **Core questions**: What precondition does this algorithm require? What is the recursive call reducing toward the base case? Which sorting pass just completed?
- **Key concepts**: linear search, binary search and its sorted precondition, selection sort, insertion sort, recursion, base case, recursive case, code tracing, AP free-response (FRQ) conventions.
- **Applied skills**: trace a recursive method to its base case; identify the state of an array after one sorting pass; complete an AP-style FRQ method under time pressure.
- **Common traps**: applying binary search to unsorted data; writing recursion with no reachable base case (infinite recursion); claiming linear search is `O(log n)` or binary search is `O(n)`.

## Chapter 8: Computing Impact and Create-Style Project Thinking
- **Core questions**: Who benefits and who is harmed by this computing innovation? What data does it collect, and how is privacy affected? How should a program be documented for review?
- **Key concepts**: computing innovations, beneficial and harmful effects, data privacy and security, algorithmic bias, the digital divide, intellectual property and licensing, collaboration, documentation and program purpose.
- **Applied skills**: write a CSP-style computing innovation analysis; draft a Create performance task proposal with purpose, algorithm, abstraction, data, and impact; document a program's function for a reviewer.
- **Common traps**: listing only benefits and ignoring harms; confusing data privacy with data security; describing what a program does without identifying its purpose or the abstraction it uses.

## Capstone
Students choose one of two paths, matching the dual AP design. The CSA path builds a Java mini-project (a class with encapsulated state, methods, loops, and an array or `ArrayList`) plus a timed AP-style FRQ packet graded on correctness, style, encapsulation, and test coverage. The CSP path produces a computing innovation analysis and a program project in the spirit of the Create performance task, graded on abstraction, algorithm explanation, data use, and responsible-computing impact. Combined-course students complete a reduced version of both, demonstrating they can write and defend Java code and reason clearly about the broader impact of computing.
