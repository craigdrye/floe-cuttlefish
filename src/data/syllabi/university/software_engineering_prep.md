# Software Engineering Interview Prep
**ID**: `software` - **Discipline**: Technology - **Year**: University Senior / Career Hopper

## Course Aim
This course prepares students to cross the gap between university programming coursework and the day-to-day reality of professional software engineering, with the technical interview as the immediate gate and competent early-career contribution as the real goal. Most candidates fail interviews not because they cannot code, but because they cannot reason out loud, clarify ambiguous requirements, choose between defensible tradeoffs, or recover gracefully when their first idea is too slow. This course trains those habits deliberately. Students practice algorithmic problem solving until pattern recognition becomes fast, but they also practice the unglamorous skills that separate hireable engineers from talented amateurs: reading unfamiliar code before changing it, writing tests that pin behavior, designing systems that survive growth, reviewing pull requests with specific and kind feedback, and shipping changes without breaking the people already depending on the software.

The course is practical, cumulative, and project-based. Rather than treating each topic as a disconnected drill, students maintain one production-shaped codebase across the entire course so that early design choices have consequences they must later live with, refactor, test, and operate. Every interview format students will face is rehearsed against real artifacts they produced: an algorithm notebook becomes coding-screen fluency, a system-design one-pager becomes a whiteboard conversation, a debugging journal becomes a behavioral STAR story, and a release plan becomes evidence of operational judgment. The throughline is judgment over memorization. A student who finishes this course should be able to walk a senior engineer through a real decision they made, explain what they traded away and why, and describe how they would do it differently now.

Throughout, students are pushed to convert effort into evidence. Interviews reward candidates who can point to concrete work and narrate the thinking behind it. By the end, students hold a portfolio, a story bank, and a vocabulary of tradeoffs that let them sound like someone who has already done the job, because in miniature, they have.

## Course Design Notes
- Treat interviews as one outcome of becoming a stronger engineer, not the whole course. Algorithm speed is necessary but never sufficient.
- Pair every algorithm drill with code quality, tests, narrated explanation, and reflection. A correct but unexplained solution scores poorly.
- Use realistic constraints throughout: unclear requirements, legacy code, intermittent bugs, terse review comments, simulated incidents, and immovable deadlines.
- Require students to maintain one codebase across the whole course so design choices, tech debt, and migrations have real consequences.
- Emphasize written communication: issues, pull request descriptions, design reviews, and lightweight technical decision records.
- Calibrate difficulty to real entry-level loops at mainstream product companies, not to elite competitive-programming contests.
- Make every chapter produce a portable artifact the student can show or reference in an interview.

## Chapter 1: Engineering Habits and Developer Workflow

### Core questions
- How do you approach an unfamiliar repository on your first day, before touching anything?
- What concrete features make a commit or pull request fast and pleasant to review?
- How would you isolate a bug that only reproduces in production?
- When should you ask for help, and what context should you bring so you are not just dumping the problem on someone else?

### Key concepts
- Reading and tracing code before changing it; building a mental model from entry points
- Git fundamentals: branching, atomic commits, rebasing vs merging, pull requests, and review hygiene
- Reproducible local environments, dependency pinning, and lockfiles
- Debugging with logs, breakpoints, bisection, and minimal reproduction cases
- Estimation, issue decomposition, and honest progress updates

### Applied skills
- Clone an unfamiliar repo and produce a one-page map of its structure and entry points within an hour
- Open a small, well-scoped pull request with a clear description, rationale, and test evidence
- Use `git bisect` (or equivalent) to locate the commit that introduced a regression
- Write a minimal reproduction that fits in a single file or test

### Common traps
- Editing code before understanding it, then "fixing" symptoms and introducing new bugs
- Giant pull requests that mix refactoring, features, and formatting, making review impossible
- Treating an irreproducible bug as unfixable instead of investing in reproduction
- Reporting "it works on my machine" without capturing the environment difference

## Chapter 2: Data Structures, Algorithms, and Problem Solving

### Core questions
- What signals tell you that a hash map, heap, graph traversal, or dynamic program might fit?
- How would you test an algorithm beyond the sample cases the interviewer gave you?
- What tradeoff are you making between runtime, memory, and implementation complexity?
- How do you recover, out loud, when your first solution is correct but too slow?

### Key concepts
- Big-O analysis of time and space, amortized cost, and recognizing common problem shapes
- Arrays, strings, hash maps, stacks, queues, linked lists, trees, heaps, graphs, and tries
- Patterns: two pointers, sliding window, prefix sums, BFS, DFS, binary search, recursion
- Dynamic programming (memoization vs tabulation), greedy methods, and backtracking
- Narrating an approach, stating complexity, and handling edge cases before coding

### Applied skills
- Classify a new problem into a known pattern within the first two minutes
- State and justify time and space complexity before writing code
- Enumerate edge cases (empty input, duplicates, overflow, single element) up front
- Refactor a brute-force solution into an optimized one while explaining the bottleneck

### Common traps
- Jumping to code before clarifying constraints and input ranges
- Confusing average-case and worst-case complexity (e.g., hash collisions, quicksort)
- Off-by-one errors in window and binary-search boundaries
- Going silent when stuck instead of narrating the search for a better approach

## Chapter 3: Systems Thinking and Architecture Basics

### Core questions
- What are the read and write paths for this system, and which dominates?
- Where would the first bottleneck appear as usage grows from hundreds to millions?
- What data must be strongly consistent, and what can tolerate eventual consistency?
- How would you simplify this design for a small team with a six-week deadline?

### Key concepts
- Requirements gathering, back-of-envelope capacity estimation, and service boundaries
- Building blocks: clients, load balancers, APIs, databases, caches, queues, background jobs
- Latency, throughput, availability, consistency, durability, and cost as competing forces
- CAP tradeoffs, replication, sharding, and consistent hashing
- Monoliths, modular monoliths, microservices, and event-driven designs

### Applied skills
- Run a capacity estimate (QPS, storage, bandwidth) from stated user numbers
- Draw a system diagram showing data flow, storage, and failure points
- Choose a database type (relational, document, key-value, wide-column) with justification
- Identify a bottleneck and propose a caching or sharding strategy with its tradeoffs

### Common traps
- Designing for hyperscale when the realistic load fits on one server
- Reaching for microservices before there is any reason to pay their operational cost
- Ignoring the network partition case when invoking CAP ("just make it consistent and available")
- Treating a cache as a source of truth and forgetting invalidation

## Chapter 4: Code Design, APIs, and Maintainability

### Core questions
- What should this module know, and what should it deliberately not know?
- How would you evolve this API without breaking existing clients?
- What signs suggest an abstraction is premature rather than helpful?
- Which refactor reduces risk the most without delaying the feature?

### Key concepts
- Cohesion, coupling, naming, interfaces, modules, and dependency direction
- SOLID principles and common design patterns (strategy, factory, observer, adapter)
- API and schema design, versioning, validation, idempotency, and error contracts
- Refactoring safely in small, test-backed steps
- Technical debt: when abstraction pays off and when it costs more than duplication

### Applied skills
- Write an API contract specifying inputs, outputs, error cases, and idempotency
- Refactor a tangled function into cohesive units without changing behavior
- Introduce a non-breaking API change using additive fields or versioning
- Apply a design pattern only where it removes real duplication or branching

### Common traps
- Premature abstraction: building flexible frameworks for requirements that never arrive
- Breaking clients by renaming or removing fields instead of deprecating gracefully
- Confusing the Open/Closed Principle with file permissions or licensing
- Refactoring without tests, so behavior silently changes

## Chapter 5: Testing, Quality, and Reliability

### Core questions
- What behavior in this system must never regress?
- Which tests should gate every pull request, and which can run nightly?
- How would you detect that a shipped feature is failing silently?
- What should a blameless postmortem actually teach the team?

### Key concepts
- The test pyramid: unit, integration, end-to-end, plus contract and property-based tests
- Test doubles, fixtures, determinism, and designing good test data
- Continuous integration, linting, formatting, static analysis, and build health
- Observability: logs, metrics, traces, alerts, dashboards, and SLOs
- Incidents, rollbacks, and blameless postmortems as a learning loop

### Applied skills
- Write a unit test that isolates one behavior and an integration test that crosses a boundary
- Add a regression test that pins a previously fixed bug
- Diagnose and fix (or quarantine) a flaky test by removing nondeterminism
- Define a service-level objective and the metric that measures it

### Common traps
- Chasing high coverage numbers while testing trivial getters and missing real logic
- Tests that depend on time, ordering, or shared state and become flaky
- Treating a flaky test as noise to ignore rather than a reliability signal
- Postmortems that assign blame to a person instead of fixing the system that allowed the error

## Chapter 6: Collaboration, Product Judgment, and Team Practice

### Core questions
- What question would you ask before accepting this ambiguous ticket?
- How would you push back on a risky deadline without sounding dismissive or defeated?
- What makes review feedback actionable rather than discouraging?
- How do you explain a technical tradeoff to a product manager who is not an engineer?

### Key concepts
- Working with product managers, designers, data scientists, support, and security
- Requirements clarification, acceptance criteria, non-goals, and scope control
- Code review as shared ownership and knowledge transfer, not gatekeeping
- Written updates, design reviews, and async decision records
- Handling disagreement, feedback, ambiguity, and shifting priorities

### Applied skills
- Turn a vague ticket into a feature brief with user story, acceptance criteria, and non-goals
- Leave review comments that are specific, prioritized, and explain the why
- Write a status update that states risk and a recommendation, not just activity
- Disagree-and-commit: register a concern, then support the chosen direction

### Common traps
- Accepting an underspecified ticket and building the wrong thing confidently
- Review comments that are vague ("this is bad") or bikeshed on style while ignoring correctness
- Silent scope creep that blows the estimate without anyone deciding to spend it
- Communicating a tradeoff in jargon the audience cannot evaluate

## Chapter 7: Shipping, Operations, and Security-Minded Engineering

### Core questions
- How would you ship this change without interrupting existing users?
- What is the rollback plan if a migration fails halfway through?
- Which data or endpoint would be most attractive to an attacker, and why?
- Which metric would tell you whether the release actually improved the product?

### Key concepts
- Feature flags, staged rollouts, backward-compatible migrations, and release notes
- Deployment pipelines, environment config, secrets management, and rollback plans
- Application security basics: authentication vs authorization, input validation, least privilege
- Dependency risk, injection prevention, and threat modeling
- Performance profiling, load testing, caching, and query optimization after launch

### Applied skills
- Write a release plan with rollout stages, monitoring, and a concrete rollback trigger
- Design a two-phase schema migration that works with old and new code simultaneously
- Spot and fix an injection or secrets-in-code vulnerability in a code sample
- Profile a slow endpoint and propose an indexing or caching fix with measured impact

### Common traps
- Big-bang deploys with no flag, no canary, and no rollback path
- Destructive migrations (drop column first) that break the still-running old version
- Committing API keys or secrets into source control or logging them in errors
- Optimizing performance by guessing instead of measuring the actual bottleneck

## Chapter 8: Interview Readiness and Early-Career Growth

### Core questions
- Tell me about a time you changed your approach after feedback.
- Walk me through the hardest bug you ever fixed, start to finish.
- How would you explain a project tradeoff to a senior engineer reviewing your work?
- What would you do, concretely, in your first week on a new engineering team?

### Key concepts
- Interview formats: phone screen, coding round, system design, behavioral, take-home
- STAR stories grounded in real engineering behavior, not invented scenarios
- Narrating thinking, asking clarifying questions, and stating assumptions
- Portfolio review, resume bullets that show impact, and project walkthroughs
- Building a 30-60-90 day learning plan for a first engineering role

### Applied skills
- Convert a real project decision into a tight STAR story under two minutes
- Run a mock coding interview while narrating tradeoffs and complexity
- Rewrite a resume bullet from "did X" to "did X, achieving measurable Y"
- Walk an interviewer through a project, anticipating the deep-dive follow-ups

### Common traps
- Behavioral answers that describe the team's work but never the candidate's own decisions
- Coding in silence, leaving the interviewer unable to give hints or assess reasoning
- Memorizing solutions without understanding, then collapsing on a small variation
- Inflated resume claims the candidate cannot defend under questioning

## Capstone
Students build and maintain a small production-shaped software project, such as a task service, scheduling tool, data dashboard, collaboration feature, or API-backed web app. The project must include real source-control history, issue tracking, a test suite with meaningful coverage of core logic, documentation, a system design note, a release plan with a rollback path, and a short recorded demo. Because the same codebase is carried from Chapter 1, students must also show at least one nontrivial refactor and one fixed bug, each with the reasoning preserved in a pull request or decision record.

The final defense is structured like a senior engineer's project review. Students explain what the system does and why, justify major design choices and the alternatives they rejected, walk through a meaningful bug or refactor, discuss their tests and the operational risks they planned for, and connect the project to at least three behavioral interview stories. The defense is scored on technical judgment, clarity of communication, and readiness to contribute on a real team, not on the raw size of the project.

## Assessment Ideas
- Algorithm work scored for correctness, complexity analysis, test coverage, and narrated explanation
- Code reviews scored for specificity, tone, risk awareness, and maintainability thinking
- System design scored for requirements, tradeoffs, diagrams, scalability, and appropriate simplicity
- Project code scored for clarity, tests, API design, error handling, and maintainability
- Shipping plan scored for rollback, observability, migration safety, and user impact
- Behavioral interview practice scored for concrete evidence, reflection, ownership, and concision
- Capstone defense scored for technical judgment, communication, and team readiness

## Research Notes
- ACM and IEEE software engineering curriculum guidance anchors professional practice, design, verification, validation, maintenance, and ethical responsibility.
- GitHub engineering guides and documentation support lessons on pull requests, code review, issues, Actions, and collaborative workflows.
- Atlassian engineering and agile resources support issue tracking, incident review, product collaboration, and team rituals.
- Company engineering blogs, public postmortems, and architecture writeups show how real teams reason about shipping, reliability, and maintainability.
- System design references (e.g., Designing Data-Intensive Applications) ground the consistency, replication, and partitioning concepts in Chapter 3.
