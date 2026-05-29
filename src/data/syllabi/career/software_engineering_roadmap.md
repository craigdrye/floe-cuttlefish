# Software Engineering Roadmap
**ID**: `softwareEngineeringRoadmap` - **Discipline**: Technology - **Level**: Career

## Course Aim
This course teaches the working language and judgment of a software-engineering team so a newcomer can follow the conversation and contribute without bluffing. It is not a coding course. It is about the decisions that surround code: how a change gets reviewed, why an architecture boundary exists, how data and state are kept honest, how software ships and rolls back, what happens when production breaks at 3 a.m., and how teams talk plainly about debt, risk, security, and tradeoffs. These are the skills that separate someone who can write a function from someone a team trusts with the system.

The learner we are building for has joined or is about to join a technical team — as an engineer, a product manager, an SRE, a designer, or a technical program manager — and keeps hitting words and rituals that everyone else treats as obvious: "this PR is too big," "that's tightly coupled," "let's canary it," "we burned our error budget," "that's a backward-incompatible change," "who reviewed the AI-generated diff," "we leaked a key," "we need a blameless postmortem." Each phrase encodes a real engineering principle and a real failure mode. The course unpacks those principles using concrete workplace scenarios rather than abstract definitions, and it expects the learner to *choose* a move, not just recognize a term.

The throughline is engineering judgment under uncertainty. Almost every question rewards the move that is observable, reversible, and defensible under later review over the move that is fast, clever, or confident. By the end, the learner should be able to read a messy planning thread or a noisy incident channel and name the real risk, the safe next step, and the tradeoff being made — and say why.

## Course Design Notes
Route a question here when it tests engineering *process and judgment* — code review, system design tradeoffs, data and state handling, deployments, migrations, incidents, reliability (SLI/SLO/error budgets), testing strategy, observability, API compatibility, security and secrets, cost/efficiency, technical debt, and the communication that holds all of it together. Keep questions cross-functional and language-agnostic: a strong distractor is a plausible-sounding shortcut, not a syntax error.

Voice is adult, plain, and slightly dry. Distractors must be individually wrong for a *named* reason — a real misconception an engineer might hold — never filler. Where a fact is precise (semantic-versioning rules, idempotent HTTP methods, error-budget arithmetic, blue-green vs. canary, what "least privilege" actually requires) get it exactly right; these are exam-grade. Difficulty sits at "competent early-career engineer or fluent cross-functional partner," not staff-level system design: the learner should reason about a single service and its neighbors, not architect a global platform.

Chapters 1–5 are the canonical question buckets and mirror the existing question bank. Chapters 6–9 are first-class areas that the modern role demands — testing/observability, data/state, security/secrets, and team practice. Until dedicated banks exist, route Chapter 6 questions into Chapter 1, Chapter 7 into Chapter 2, Chapter 8 into Chapter 3 or 4 (whichever the scenario centers on), and Chapter 9 into Chapter 5. Prefer scenarios over definitions throughout; if a question can be answered from a glossary, it belongs in a jargon-buster, not here.

## Chapter 1: Code, Review, and Quality
How change enters a codebase safely. Review is risk triage, not gatekeeping or politeness — and that now includes deciding what an author, human or AI-assisted, is actually accountable for.
- **Core questions**: What risk does this change create, and what evidence shows it works? Is this PR reviewable? Does the author understand the code they are submitting?
- **Key concepts**: pull request, diff, code review, approval, unit vs. integration test, regression, flaky test, test coverage vs. test confidence, refactor, maintainability, linting/static analysis, ownership of AI-generated code.
- **Applied skills**: write a review comment that names risk, not style; scope a large change into reviewable pieces; decide when a change needs tests; quarantine vs. fix a flaky test; review a generated patch by checking behavior and edge cases rather than waving it through.
- **Common traps**: equating diff size with risk; approving on tone; treating "tests pass" as "behavior verified"; rerunning CI until green; coverage percentage as a quality guarantee; merging AI-suggested code nobody can explain.

## Chapter 2: Architecture and Tradeoffs
Why boundaries exist and what they cost. Every design choice trades one good thing for another; the skill is naming the trade out loud.
- **Core questions**: What is the tradeoff? Which constraint dominates — latency, consistency, cost, or change-safety? Who owns this boundary?
- **Key concepts**: service boundary, API contract, coupling vs. cohesion, dependency direction, scalability, latency, throughput, consistency vs. availability (CAP intuition), single point of failure, ownership, build vs. buy.
- **Applied skills**: name the tradeoff in a design debate; spot hidden coupling (e.g., direct DB access across teams); write an architecture decision record (ADR) that survives turnover; resist a rewrite when an incremental boundary change would do.
- **Common traps**: believing a design has no downside; mistaking "faster point-to-point call" for "no risk"; treating past decisions as unknowable folklore; choosing consistency *and* availability during a partition; microservices as a default instead of a tradeoff.

## Chapter 3: Releases and Migrations
Getting change to users without breaking them, and being able to undo it. Shipping is a controllable risk, not an event of faith.
- **Core questions**: What can fail? How do we ship gradually? How do we recover fast, and how fast is fast enough?
- **Key concepts**: deploy, rollback, feature flag, canary vs. blue-green, gradual rollout, backward/forward compatibility, schema migration, expand/contract, dual-write, backfill, idempotency, deprecation and versioning (semantic versioning), release notes.
- **Applied skills**: pick a rollout strategy for the constraint; design a migration that is reversible and runs online; sequence an expand/contract schema change; plan a safe API deprecation with a window and a migration path.
- **Common traps**: removing an API field because *your* client stopped using it; one giant transaction over millions of rows; "dual-write is always safe" (it isn't — writes can diverge); Friday-5 p.m. deploys with nobody on call; bumping the minor version for a breaking change.

## Chapter 4: Incidents and Reliability
What teams do when production is on fire, and how they keep it from happening again. Restore first, explain second, prevent third.
- **Core questions**: What is the user impact? What restores service fastest? What prevents recurrence — and who owns it?
- **Key concepts**: outage, severity (SEV) levels, incident commander/lead, on-call, monitoring vs. observability, alert vs. page, mitigation vs. root cause, rollback as mitigation, SLI, SLO, error budget, SLA, blameless postmortem, dated action items with owners.
- **Applied skills**: prioritize mitigation over debate during an incident; use deploy timing as a rollback signal; compute an error budget and decide whether to ship or freeze; write a postmortem that drives change rather than apology.
- **Common traps**: debating root cause while users are down; blame instead of system learning; postmortems with no dated owners; confusing an SLA (external contract) with an SLO (internal target); alerting on causes instead of user-visible symptoms.

## Chapter 5: Technical Debt and Team Communication
How engineers decide what to fix, in what order, and how to make the case for it. Debt earns priority through consequence, not annoyance.
- **Core questions**: Which debt actually blocks delivery, reliability, security, or cost? How do we frame it so it gets prioritized by people who don't read code?
- **Key concepts**: technical debt, interest/carrying cost, maintenance burden, ownership, runbook, documentation, work-in-progress (WIP) limits, prioritization, stakeholder update, decision record.
- **Applied skills**: translate maintenance pain into business risk (slower delivery, outage exposure, audit failure, rising spend); break a deadlocked design debate with explicit criteria and one named owner; limit WIP to actually finish work; write a runbook that survives someone's vacation.
- **Common traps**: "old code is annoying" as a business case; package age treated as proof of risk; hiding cleanup inside unrelated features so it can't be reviewed; treating every task as top priority; single-person tribal knowledge.

## Chapter 6: Testing and Observability
The two ways you know software works: before it ships (tests) and after it ships (telemetry). One without the other is half-blind.
- **Core questions**: What kind of test catches this bug most cheaply? In production, how would you even know this is broken before a user tells you?
- **Key concepts**: test pyramid (unit/integration/end-to-end), test isolation and determinism, contract tests, the three pillars of observability (logs, metrics, traces), structured logging, cardinality, alert fatigue, dashboards as hypotheses, the "four golden signals."
- **Applied skills**: choose the right test level for a given risk; add idempotency tests for retried events; instrument a service so an on-call engineer can diagnose it without source access; design an alert that fires on user-visible symptoms, not internal noise.
- **Common traps**: end-to-end tests for everything (slow, flaky, expensive); logging without structure or correlation IDs; alerting on every anomaly until everyone mutes the channel; assuming "it worked in staging" means it works in production.

## Chapter 7: Data and State
Most outages and most corruption start at the data layer. Stateless code is easy; durable, correct, consistent state is where judgment earns its keep.
- **Core questions**: Where does the source of truth live? What happens to this data when the request is retried, the cache is stale, or two writes race?
- **Key concepts**: source of truth, read/write paths, caching and invalidation, cache staleness vs. consistency, transactions and isolation, eventual vs. strong consistency, primary/replica lag, queues and at-least-once delivery, idempotency keys, backups vs. replication, data retention.
- **Applied skills**: pick where state lives for a feature; make a retried operation safe with an idempotency key; reason about a stale-cache bug; tell the difference between "we have a replica" and "we have a backup we have actually restored."
- **Common traps**: caching with no invalidation story; treating a read replica as a backup; assuming a message is delivered exactly once; storing the same fact in two places with no reconciliation; deleting data with no recovery window.

## Chapter 8: Security and Secrets
Security is not a separate team's job applied at the end; it is a property of everyday decisions. Most breaches are mundane — a leaked key, an over-broad permission, an unpatched dependency.
- **Core questions**: Who can do this, and should they be able to? Where do secrets and trust boundaries live? What is the blast radius if this credential leaks?
- **Key concepts**: authentication vs. authorization, least privilege, secrets management vs. hardcoded credentials, key rotation, input validation and injection, the dependency/supply-chain attack surface, transport vs. at-rest encryption, audit logging, the principle of secure defaults.
- **Applied skills**: spot a secret committed to a repo and respond correctly (rotate, don't just delete the commit); scope a permission to least privilege; reason about the blast radius of a leaked token; triage a vulnerable dependency by exploitability and reachability, not CVSS score alone.
- **Common traps**: "we'll add auth later"; hardcoding credentials "just for now"; treating every dependency CVE as either an emergency or noise; assuming the network perimeter makes internal traffic safe; logging secrets or PII.

## Chapter 9: Working Effectively in a Team
Engineering is a team sport; the bottleneck is usually coordination and decision-making, not typing speed.
- **Core questions**: How do we make a decision and write it down so it survives turnover? How do we share knowledge so the bus factor isn't one?
- **Key concepts**: bus factor, RFC/design-doc process, decision ownership (one accountable owner), async vs. sync communication, blameless culture, escalation paths, onboarding docs, "disagree and commit," cost/efficiency awareness as a shared concern.
- **Applied skills**: move a stuck thread to a decision with a deadline and an owner; document a decision so newcomers understand the *why*, not just the *what*; escalate without blame; flag a runaway cost or inefficiency the way you'd flag a bug.
- **Common traps**: waiting for consensus that never comes; merging both designs to please everyone; decisions that live only in someone's head; escalation framed as accusation; treating cloud spend as somebody else's problem.

## Capstone
Turn a messy engineering planning thread — a half-broken feature, an aging and vulnerable dependency, a risky schema migration, a service with no clear owner, and a cache that occasionally serves stale data — into a defensible implementation plan.

The plan must state: scope, and what is explicitly out of scope; the key architecture decision with its tradeoff (as a short ADR); where the source of truth lives and how the migration stays reversible and online; a testing strategy at the right level; a gradual release path with rollback and feature flags; the security action for the leaked-or-stale credential and the vulnerable dependency (rotate, scope, patch — with reasoning, not panic); the reliability signals that would tell you it broke (which SLI/SLO, and what symptom to alert on); and a one-paragraph stakeholder update that frames the debt, risk, and cost in business terms.

Success is a plan a competent team could execute and a manager could approve without a meeting — and that a reviewer six months later could read and understand why each choice was made.
