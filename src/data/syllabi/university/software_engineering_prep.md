# Software Engineering Interview Prep
**ID**: `software` - **Discipline**: Technology - **Year**: University Senior / Career Hopper

## Course Aim
This course prepares students to move from university programming experience into software engineering interviews and early engineering roles. Students practice the habits that make engineers useful on teams: reading unfamiliar code, designing maintainable systems, testing behavior, debugging carefully, collaborating through reviews, explaining tradeoffs, preparing for interviews, and shipping reliable software.

The course is practical and project-based. Students build small services and tools, maintain them across changing requirements, and turn the work into interview evidence that shows judgment rather than only puzzle speed.

## Course Design Notes
- Treat interviews as one outcome of becoming a stronger engineer, not the whole course.
- Pair algorithm practice with code quality, tests, explanation, and reflection.
- Use realistic constraints: unclear requirements, legacy code, bugs, review comments, incidents, and deadlines.
- Require students to maintain one codebase across the course so design choices have consequences.
- Emphasize written communication, issue tracking, pull requests, and technical decision records.

## Chapter 1: Engineering Habits and Developer Workflow

### Key concepts
- Reading code before changing it
- Git basics, branching, commits, pull requests, and review hygiene
- Local development environments, dependency management, and reproducible setup
- Debugging with logs, breakpoints, tests, and minimal reproduction cases
- Time management, estimation, issue decomposition, and progress updates

### Practice questions
- How do you approach an unfamiliar repository on your first day?
- What makes a commit or pull request easy to review?
- How would you isolate a bug that only appears in production?
- When should you ask for help, and what context should you bring?

### Student output
- Development environment checklist
- Pull request template and review checklist
- Debugging journal from a reproduced bug

## Chapter 2: Data Structures, Algorithms, and Problem Solving

### Key concepts
- Big-O analysis, tradeoffs, and recognizing common problem shapes
- Arrays, strings, hash maps, stacks, queues, linked lists, trees, graphs, heaps, and tries
- Two pointers, sliding windows, prefix sums, recursion, breadth-first search, depth-first search, and binary search
- Dynamic programming, greedy methods, backtracking, and graph traversal
- Explaining solutions clearly under interview constraints

### Practice questions
- What information tells you that a hash map, heap, graph traversal, or dynamic program may fit?
- How would you test an algorithm beyond the sample cases?
- What tradeoff are you making between runtime, memory, and implementation complexity?
- How do you recover when your first interview solution is too slow?

### Student output
- Algorithm notebook with patterns, mistakes, and corrected solutions
- Timed explanation recording or transcript
- Test cases for five common interview problem types

## Chapter 3: Systems Thinking and Architecture Basics

### Key concepts
- Requirements, constraints, capacity estimates, and service boundaries
- APIs, clients, servers, databases, caches, queues, and background jobs
- Latency, throughput, availability, consistency, durability, and cost
- Monoliths, modular monoliths, microservices, and event-driven designs
- Diagrams, tradeoff narratives, and deep-dive follow-up questions

### Practice questions
- What are the read and write paths for this system?
- Where would the first bottleneck appear as usage grows?
- What data must be strongly consistent, and what can be eventually consistent?
- How would you simplify the design for a small team with a six-week deadline?

### Student output
- System design one-pager
- Architecture diagram with data flow and failure points
- Capacity estimate for a small product feature

## Chapter 4: Code Design, APIs, and Maintainability

### Key concepts
- Cohesion, coupling, naming, interfaces, modules, and dependency direction
- Object-oriented, functional, and data-oriented design choices
- API design, schema design, versioning, validation, and error handling
- Refactoring safely with tests and small steps
- Technical debt, maintainability, and when abstraction helps or harms

### Practice questions
- What should this module know, and what should it not know?
- How would you change the API without breaking existing clients?
- What signs suggest this abstraction is premature?
- Which refactor would reduce risk without delaying the feature?

### Student output
- API specification for a course project feature
- Refactoring proposal with risk and test plan
- Short technical decision record

## Chapter 5: Testing, Quality, and Reliability

### Key concepts
- Unit, integration, end-to-end, contract, property-based, and regression tests
- Test doubles, fixtures, determinism, and test data design
- Continuous integration, linting, formatting, static analysis, and build health
- Observability: logs, metrics, traces, alerts, and dashboards
- Incidents, rollbacks, postmortems, and reliability learning loops

### Practice questions
- What behavior must never regress?
- Which tests should run before every pull request, and which can run nightly?
- How would you detect that a shipped feature is failing silently?
- What should a blameless postmortem teach the team?

### Student output
- Test plan with coverage priorities
- CI checklist for the course project
- Incident review for a simulated production failure

## Chapter 6: Collaboration, Product Judgment, and Team Practice

### Key concepts
- Working with product managers, designers, data scientists, support, security, and other engineers
- Requirements clarification, acceptance criteria, and scope control
- Code review as shared ownership and knowledge transfer
- Written updates, meeting notes, design reviews, and async decisions
- Handling disagreement, feedback, ambiguity, and changing priorities

### Practice questions
- What question would you ask before accepting this ticket?
- How would you push back on a risky deadline without sounding dismissive?
- What makes review feedback actionable?
- How do you communicate a technical tradeoff to a non-engineering teammate?

### Student output
- Feature brief with user story, acceptance criteria, and non-goals
- Peer code review with requested changes and rationale
- Stakeholder update for a delayed or risky feature

## Chapter 7: Shipping, Operations, and Security-Minded Engineering

### Key concepts
- Feature flags, staged rollouts, migrations, backwards compatibility, and release notes
- Deployment pipelines, environment configuration, secrets, and rollback plans
- Basic application security: authentication, authorization, input validation, dependency risk, and least privilege
- Performance profiling, load testing, caching, and query optimization
- Maintaining software after launch through monitoring, support, and iteration

### Practice questions
- How would you ship this change without interrupting existing users?
- What is the rollback plan if the migration fails halfway through?
- Which data or endpoint would be most attractive to an attacker?
- What metric would tell you whether the release improved the product?

### Student output
- Release plan for a course project milestone
- Security and privacy checklist
- Performance investigation memo

## Chapter 8: Interview Readiness and Early-Career Growth

### Key concepts
- Technical phone screens, coding interviews, system design interviews, behavioral interviews, and take-home exercises
- STAR stories grounded in real engineering behavior
- Explaining tradeoffs, asking clarifying questions, and narrating thinking
- Portfolio review, resume evidence, and project walkthroughs
- Learning plans for the first 90 days in a software engineering role

### Practice questions
- Tell me about a time you changed your approach after feedback.
- Walk me through the hardest bug you fixed.
- How would you explain a project tradeoff to a senior engineer?
- What would you do in your first week on a new engineering team?

### Student output
- Interview story bank
- Project walkthrough script
- 30-60-90 day engineering growth plan

## Capstone
Students build and maintain a small production-shaped software project, such as a task service, scheduling tool, data dashboard, collaboration feature, or API-backed web app. The project must include source control history, issue tracking, tests, documentation, a design note, a release plan, and a short demo.

The final defense asks students to explain the system, justify major design choices, review a meaningful bug or refactor, discuss tests and operational risks, and connect the project to interview stories.

## Assessment Ideas
- Algorithm work scored for correctness, complexity, test coverage, and explanation
- Code reviews scored for specificity, tone, risk awareness, and maintainability thinking
- System design scored for requirements, tradeoffs, diagrams, scalability, and simplicity
- Project code scored for clarity, tests, API design, error handling, and maintainability
- Shipping plan scored for rollback, observability, migration safety, and user impact
- Behavioral interview practice scored for evidence, reflection, ownership, and concision
- Capstone defense scored for technical judgment, communication, and readiness for early team contribution

## Research Notes
- ACM and IEEE software engineering curriculum guidance can anchor professional practice, design, verification, validation, maintenance, and ethical responsibility.
- GitHub engineering guides and documentation are useful for pull requests, code review, issues, actions, repository health, and collaborative workflows.
- Atlassian engineering and agile resources can support lessons on issue tracking, incident review, product collaboration, and team rituals.
- Use company engineering blogs, postmortems, and architecture writeups to show how real teams reason about shipping, reliability, and maintainability.
