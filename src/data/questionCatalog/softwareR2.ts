import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe software 103-pass'

export const softwareR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ---- Chapter 1: Code, Review, and Quality (scenario + judgment) ----
  { id: 7652000, chapter: 'Code, Review, and Quality', title: 'Reviewing an AI-generated diff',
    prompt: 'A teammate opens a 400-line pull request and writes "Copilot wrote it, tests pass, please approve." As reviewer, what does your accountability actually require?',
    correct: 'Verify the behavior and edge cases yourself, because the author who submits a change owns it regardless of who or what produced the code',
    wrong: [
      miss('Approve it, since the AI tool is responsible for any defects it introduces', 'A tool cannot be on the hook for a production bug; the human who merges the change owns its behavior.', 'Ask who gets paged at 3 a.m. if this breaks — that person owns it now.'),
      miss('Reject it outright because AI-generated code can never be merged safely', 'Generated code is fine to merge once a human understands and verifies it; a blanket ban is not the standard.', 'The problem is unreviewed code, not the fact that a model drafted it.'),
      miss('Approve once CI is green, since passing tests prove the behavior is correct', 'Green tests prove the existing tests passed, not that the new behavior is right or the edge cases are covered.', 'Tests passing means "no known check failed," not "behavior verified."'),
    ],
    lesson: 'Code review is risk triage, and the submitter owns the change no matter how it was authored. With AI-assisted diffs the reviewer must actually reason about behavior and edge cases rather than wave it through because a tool wrote it or because CI is green. "Tests pass" verifies the tests that exist, not the behavior you care about.',
    source, generated: true },

  { id: 7652001, chapter: 'Code, Review, and Quality', title: 'A PR that is too big to review',
    prompt: 'A 1,800-line PR mixes a bug fix, a refactor, and a new feature in one branch. The author is in a hurry. What is the best review response?',
    correct: 'Ask the author to split it into separately reviewable changes so each can be understood and reverted on its own',
    wrong: [
      miss('Approve it because the diff is large but the individual lines all look fine', 'Line-by-line plausibility does not make a tangled change reviewable; reviewers cannot reason about intertwined concerns.', 'If you cannot tell which lines belong to which intent, you cannot really review it.'),
      miss('Block it permanently because large diffs are always too risky to merge', 'Size alone is not risk; a mechanical rename of 1,800 lines can be safe. The issue here is mixed intent.', 'Distinguish "large" from "doing several unrelated things at once."'),
      miss('Reject it and tell the author to rewrite the whole feature from scratch', 'A rewrite is wasteful and ignores the real fix: separating concerns into reviewable pieces.', 'You want smaller reviewable units, not thrown-away work.'),
    ],
    lesson: 'Reviewability is about isolating intent, not minimizing line count. A change that mixes a fix, a refactor, and a feature is hard to reason about and hard to revert cleanly, so the right move is to scope it into pieces that each carry one purpose. Diff size correlates with risk only loosely; mixed concerns are the real hazard.',
    source, generated: true },

  { id: 7652002, chapter: 'Code, Review, and Quality', title: 'Coverage vs. confidence',
    prompt: 'A service reports 95% line coverage, yet a payment-rounding bug ships. What does this most directly reveal about test coverage?',
    correct: 'Coverage measures which lines executed during tests, not whether the assertions actually check the behavior that matters',
    wrong: [
      miss('The coverage number was miscalculated; 95% coverage mathematically prevents this class of bug', 'Coverage is computed correctly from executed lines; high coverage with weak or missing assertions still ships bugs.', 'Lines can run during a test that asserts nothing about rounding.'),
      miss('The team should target 100% coverage, which would have caught the rounding error', 'Executing the last 5% of lines does not guarantee the rounding case is asserted; 100% coverage is not 100% confidence.', 'Even fully executed code can lack a check for the specific value.'),
      miss('Coverage and confidence are the same thing, so the metric simply failed', 'They are deliberately different: one counts execution, the other reflects whether behavior is verified.', 'Distinguish "the line ran" from "we checked the result."'),
    ],
    lesson: 'Coverage tells you a line was executed by some test, not that any test asserted the right outcome for it. A rounding bug can hide behind high coverage when the tests touch the code but never check the value. Treat coverage as a floor that finds untested code, never as a guarantee of correctness.',
    source, generated: true },

  { id: 7652003, chapter: 'Code, Review, and Quality', title: 'A flaky test blocking the queue',
    prompt: 'One integration test fails about 1 in 5 runs with no code change, and everyone now reruns CI until it goes green. What is the responsible move?',
    correct: 'Quarantine the flaky test so it stops blocking merges, file a ticket to fix its nondeterminism, and keep it visible',
    wrong: [
      miss('Delete the test, since a test that fails intermittently provides no value', 'Deleting silently discards whatever real behavior it checked and hides the flakiness instead of fixing it.', 'You want to stop it from blocking merges without losing the coverage forever.'),
      miss('Keep rerunning CI until it passes, because eventually a green run is a valid signal', 'Rerunning until green trains the team to ignore failures and masks real regressions the test might catch.', 'A green-after-retries habit means real failures get retried away too.'),
      miss('Mark the whole suite as non-blocking so no test can ever stop a merge', 'That throws away every reliable test to deal with one bad one, removing the safety the suite provides.', 'Isolate the one flaky test, not the entire suite.'),
    ],
    lesson: 'A flaky test that sometimes passes and sometimes fails without a code change destroys trust in the suite and trains people to retry until green, which also retries away real failures. Quarantine it so it no longer blocks merges, but keep it tracked and fix the nondeterminism. Deleting it loses coverage; ignoring it corrupts the signal.',
    source, generated: true },

  { id: 7652004, chapter: 'Code, Review, and Quality', title: 'A review comment that names risk',
    prompt: 'You spot that a new function swallows database errors and returns an empty list. Which review comment best reflects review-as-risk-triage?',
    correct: '"This hides DB failures as empty results, so callers will silently show no data during an outage — can we surface or propagate the error?"',
    wrong: [
      miss('"I would have used a guard clause here instead of nesting; please change the style."', 'Style preference is not the risk; the dangerous behavior is masking outages as empty data.', 'Name the consequence to users, not your formatting taste.'),
      miss('"Looks good to me, nice and clean — approving."', 'Approving on tone ignores a real failure mode where an outage looks like "no records."', 'A tidy-looking function can still hide a serious bug.'),
      miss('"Add a comment above this function explaining what it does."', 'A doc comment does not address the behavior that turns failures into silent empty results.', 'The problem is what the code does on error, not its documentation.'),
    ],
    lesson: 'Good review comments name the risk a change creates and its impact on users or callers, not the reviewer\'s stylistic taste. Swallowing errors into an empty result is dangerous because an outage becomes indistinguishable from "no data," so the comment should surface that consequence and propose a fix.',
    source, generated: true },

  // ---- Chapter 2: Architecture and Tradeoffs ----
  { id: 7652005, chapter: 'Architecture and Tradeoffs', title: 'Hidden coupling via shared database',
    prompt: 'Team A\'s reporting service reads directly from Team B\'s orders database tables. Both teams call this "fast and simple." What is the real architectural cost?',
    correct: 'Team B can no longer change its schema freely, because A\'s queries silently depend on B\'s internal table structure — a hidden coupling across a team boundary',
    wrong: [
      miss('There is no real cost; reading is harmless because it never writes to B\'s data', 'Reads still create a dependency: B\'s "internal" schema is now a contract A relies on, so B cannot refactor safely.', 'Ask what breaks when B renames a column next sprint.'),
      miss('The only issue is slightly higher database load from the extra queries', 'Load is a minor, tunable concern; the structural problem is the cross-team schema dependency.', 'The expensive cost is organizational, not CPU.'),
      miss('It violates the CAP theorem by adding a second reader to the database', 'CAP is about consistency/availability under network partitions, not about which team reads a table.', 'This is about coupling and ownership, not partition behavior.'),
    ],
    lesson: 'Direct cross-team database access turns one team\'s internal schema into an undocumented contract another team depends on. Even read-only access couples the two: the owning team can no longer evolve its tables without risking the reader. An API or owned view restores the boundary and makes the dependency explicit.',
    source, generated: true },

  { id: 7652006, chapter: 'Architecture and Tradeoffs', title: 'What an ADR is for',
    prompt: 'Six months after choosing Postgres over a document store, a new hire asks "why not Mongo?" and nobody remembers. What practice would have prevented this?',
    correct: 'Writing an Architecture Decision Record that captures the context, the options considered, and the reasoning behind the choice',
    wrong: [
      miss('Adding more inline code comments next to the database connection setup', 'Comments explain how the code works, not why a system-level tradeoff was made among rejected alternatives.', 'You need the rejected options and the reasoning, not connection details.'),
      miss('Pinning the database version in the deployment config so it cannot change', 'Pinning a version controls drift but records nothing about why the technology was chosen.', 'The gap is lost reasoning, not an unpinned dependency.'),
      miss('Holding a meeting whenever someone questions a past decision', 'Re-litigating in meetings is exactly the cost an ADR avoids; it does not preserve the original reasoning durably.', 'Capture the "why" once, in writing, so future readers self-serve.'),
    ],
    lesson: 'An Architecture Decision Record captures the context, the alternatives considered, and the reasoning behind a significant choice so it survives turnover. Without it, past decisions become folklore and teams either re-litigate them or fear changing anything. An ADR lets a future reader understand why, not just what.',
    source, generated: true },

  { id: 7652007, chapter: 'Architecture and Tradeoffs', title: 'CAP under a partition',
    prompt: 'During a network partition between two datacenters, a distributed key-value store cannot reach half its replicas. Per the CAP theorem, what choice is forced?',
    correct: 'Choose between consistency (refuse or block writes that cannot be confirmed) and availability (serve possibly-stale or unconfirmed responses) — you cannot have both during the partition',
    wrong: [
      miss('Sacrifice partition tolerance and keep both consistency and availability', 'You cannot opt out of a partition that is actively happening; P is the condition, not a choice you decline.', 'The partition is the given; you trade off the other two.'),
      miss('The system keeps full consistency and full availability if it has enough replicas', 'More replicas do not escape CAP; once the network splits, a node either waits (loses A) or answers without quorum (loses C).', 'Extra replicas still cannot all agree across a broken link.'),
      miss('CAP only applies to caches, so a primary database is unaffected', 'CAP applies to any distributed data system that replicates state, including primary databases.', 'Any system replicating across a network faces this tradeoff.'),
    ],
    lesson: 'CAP says that when a network partition occurs, a distributed system must give up either consistency or availability — partition tolerance is the situation, not an option you can decline. Adding replicas does not change this: under a split, a node either waits for agreement (losing availability) or answers without it (losing consistency).',
    source, generated: true },

  { id: 7652008, chapter: 'Architecture and Tradeoffs', title: 'Build vs. buy for auth',
    prompt: 'A small team needs user login with SSO, MFA, and password reset. An engineer proposes building it in-house "so we control everything." What is the strongest counterpoint?',
    correct: 'Auth is a high-risk, undifferentiated commodity with steep security and maintenance costs, so buying a vetted provider usually beats spending the team\'s scarce attention on it',
    wrong: [
      miss('Building is always wrong because in-house code is inherently lower quality', 'In-house code is not inherently worse; the argument is about where this team\'s effort is best spent, not code quality.', 'The issue is opportunity cost and security surface, not craftsmanship.'),
      miss('Buying is always cheaper than building in every dollar-for-dollar comparison', 'Buy is not universally cheaper; vendors charge, and some needs justify building. It is a tradeoff, not a rule.', 'Frame it as a tradeoff, not an absolute cost winner.'),
      miss('It does not matter since both approaches carry identical security risk', 'A maintained specialist provider typically carries less ongoing security risk than a small team\'s first auth system.', 'Compare who patches CVEs and handles MFA edge cases over years.'),
    ],
    lesson: 'Build-vs-buy is a tradeoff about where scarce engineering attention pays off. Authentication is undifferentiated, security-critical, and expensive to maintain correctly forever, so most small teams should buy a vetted provider and spend their effort on what makes their product distinct. The point is opportunity cost and risk, not a blanket rule.',
    source, generated: true },

  { id: 7652009, chapter: 'Architecture and Tradeoffs', title: 'Spotting a single point of failure',
    prompt: 'Every microservice authenticates each request by calling one shared, un-replicated auth service. What does this design most clearly create?',
    correct: 'A single point of failure: if the auth service goes down, every other service that depends on it fails too',
    wrong: [
      miss('Strong consistency, which is always a desirable property here', 'A central dependency is about failure blast radius, not consistency; and consistency is a tradeoff, not a free win.', 'Ask what happens to everyone else when that one box dies.'),
      miss('Loose coupling, because services only talk through one well-defined interface', 'A clean interface does not reduce the runtime dependency; everyone still hard-fails when that service is unavailable.', 'One interface still means one shared point that can take everything down.'),
      miss('Better horizontal scalability across the whole system', 'Routing all auth through one un-replicated node is a scaling and availability bottleneck, not an enabler.', 'A single un-replicated chokepoint limits scale rather than helping it.'),
    ],
    lesson: 'A single point of failure is any component whose outage takes down everything that depends on it. Routing all authentication through one un-replicated service means its failure cascades system-wide. The fix is redundancy, graceful degradation, or short-lived cached credentials — not pretending the dependency is loose coupling.',
    source, generated: true },

  // ---- Chapter 3: Releases and Migrations (precise, exam-grade) ----
  { id: 7652010, chapter: 'Releases and Migrations', title: 'Semantic versioning for a breaking change',
    prompt: 'Your library at version 2.4.1 removes a public function that some callers still use. Under Semantic Versioning 2.0.0, what is the correct next version?',
    correct: '3.0.0 — removing a public API element is backward-incompatible, so the MAJOR version increments and MINOR and PATCH reset to 0',
    wrong: [
      miss('2.5.0, because adding or changing functionality bumps the MINOR version', 'MINOR is for backward-compatible additions; removing a public function breaks callers, which is a MAJOR change.', 'A removal that breaks existing callers is not backward-compatible.'),
      miss('2.4.2, since any code change at all is just a PATCH', 'PATCH is reserved for backward-compatible bug fixes, not for removing part of the public API.', 'PATCH must not change the public contract.'),
      miss('3.4.1, incrementing MAJOR but keeping MINOR and PATCH where they were', 'SemVer requires resetting MINOR and PATCH to 0 when MAJOR increments.', 'When MAJOR goes up, the lower fields reset.'),
    ],
    lesson: 'Under Semantic Versioning 2.0.0, a backward-incompatible change to the public API increments MAJOR and resets MINOR and PATCH to 0. Removing a public function breaks existing callers, so 2.4.1 becomes 3.0.0. MINOR is for compatible additions and PATCH for compatible bug fixes — neither covers a removal.',
    source, generated: true },

  { id: 7652011, chapter: 'Releases and Migrations', title: 'Canary vs. blue-green',
    prompt: 'You want to catch a subtle performance regression by exposing a new build to 2% of real users first, then ramping up. Which strategy is this, and why?',
    correct: 'Canary, because it routes a small subset of live traffic to the new version and increases exposure gradually as confidence grows',
    wrong: [
      miss('Blue-green, because it shifts all traffic to the new environment at once after testing', 'Blue-green is an all-at-once cutover between two full environments, not a gradual percentage ramp.', 'You asked to start at 2% and ramp — that is not a single switchover.'),
      miss('Rollback, because exposing only 2% is a way of undoing a prior release', 'Rollback reverts to a previous known-good version; here you are progressively rolling forward to test a new one.', 'Sending 2% to the new build is shipping forward, not reverting.'),
      miss('Feature flag, because both techniques are identical in how they route traffic', 'A flag toggles behavior, often per-user, but the described traffic-percentage ramp at the deployment layer is specifically a canary.', 'The mechanism here is traffic routing by percentage, not a code-level toggle.'),
    ],
    lesson: 'A canary release routes a small slice of live traffic to the new version and ramps exposure up as metrics stay healthy, so a regression is caught with limited blast radius. Blue-green instead keeps two full environments and switches all traffic at once, trading gradualness for a near-instant rollback by flipping back.',
    source, generated: true },

  { id: 7652012, chapter: 'Releases and Migrations', title: 'Expand/contract migration ordering',
    prompt: 'You must rename a heavily-used column with zero downtime using expand/contract. Which sequence is correct?',
    correct: 'Add the new column, deploy code that writes to both, backfill old rows, switch reads to the new column, then drop the old column last',
    wrong: [
      miss('Rename the column in a single transaction and update all the code in the same deploy', 'A one-shot rename breaks any old code still running during rollout and has no safe rollback.', 'Old and new code run at the same time during a deploy — both must work.'),
      miss('Drop the old column first to force all code onto the new one immediately', 'Dropping first instantly breaks every reader still using the old column; contract must come last.', 'You cannot remove the thing old code still reads until nothing reads it.'),
      miss('Backfill the new column before any code writes to it, then never dual-write', 'Without a dual-write phase, rows changed after the backfill but before cutover diverge and lose updates.', 'New writes during the transition need to land in both places.'),
    ],
    lesson: 'Expand/contract makes a breaking schema change safe by splitting it into reversible phases. Expand by adding the new column; migrate by dual-writing and backfilling so both old and new stay correct; then switch readers over and only contract (drop the old column) once nothing uses it. Each phase keeps old and new code working simultaneously.',
    source, generated: true },

  { id: 7652013, chapter: 'Releases and Migrations', title: 'Removing an unused-looking API field',
    prompt: 'Your client stopped sending the `legacy_id` field in API responses, so an engineer wants to delete it from the published response schema. What is the risk?',
    correct: 'Other clients you do not control may still read `legacy_id`; removing it from a public contract is a breaking change regardless of your own client',
    wrong: [
      miss('There is no risk, because if your client no longer needs it, no consumer does', 'Your client is one consumer; a public field can be read by integrations and third parties you cannot see.', 'Ask who else might be parsing that response right now.'),
      miss('The only risk is a slightly larger response payload until it is removed', 'Payload size is trivial; the real risk is breaking consumers that still depend on the field.', 'The danger is broken integrations, not bytes on the wire.'),
      miss('It is safe as long as you also bump the PATCH version of the API', 'Removing a field from a public contract is backward-incompatible, which is a MAJOR change, not a PATCH.', 'A removal from the public contract is not a PATCH-level change.'),
    ],
    lesson: 'A field your own client stopped using may still be consumed by other clients you do not control, so removing it from a public response is a breaking change. Safe deprecation means announcing it, giving a migration window, and only then removing it under a new major version — not deleting it because one caller moved on.',
    source, generated: true },

  { id: 7652014, chapter: 'Releases and Migrations', title: 'Why naive dual-write can diverge',
    prompt: 'During a migration you write each update to both the old store and the new store in application code. Why is "dual-write is always safe" wrong?',
    correct: 'If the second write fails after the first succeeds (crash, timeout, partial failure), the two stores diverge with no automatic reconciliation',
    wrong: [
      miss('Dual-write doubles read latency, which is the main correctness problem', 'Extra read latency is a performance concern, not the correctness flaw; the real issue is partial-failure divergence on writes.', 'Think about what happens when only one of the two writes lands.'),
      miss('Dual-write is unsafe only because it always requires a distributed transaction', 'It does not require a distributed transaction, and assuming one exists is part of the trap; even without one, partial failures diverge.', 'The failure happens precisely because the two writes are not atomic.'),
      miss('It is actually always safe as long as both stores use the same schema', 'Identical schemas do not prevent one write succeeding and the other failing, which is the divergence risk.', 'Same schema, still two separate writes that can split.'),
    ],
    lesson: 'Dual-writing the same fact to two stores is not automatically safe because the two writes are not atomic: a crash or timeout between them leaves the stores inconsistent with no built-in reconciliation. Safer patterns derive one store from the other (change-data-capture, outbox) or add a reconciliation/verification step rather than trusting both writes to always land.',
    source, generated: true },

  { id: 7652015, chapter: 'Releases and Migrations', title: 'Backfilling a giant table',
    prompt: 'You need to populate a new column across 80 million existing rows in production. What is the safest execution plan?',
    correct: 'Backfill in small batches with pauses between them, so the migration does not hold long locks or overwhelm the database while it serves live traffic',
    wrong: [
      miss('Run one UPDATE over all 80 million rows in a single transaction for atomicity', 'A single massive transaction holds locks and bloats, can time out, and can stall or take down the live database.', 'Picture one statement locking the whole table while users wait.'),
      miss('Pause all production traffic, backfill at full speed, then resume', 'Taking the system down for a routine backfill is an unnecessary outage; online batched backfill avoids it.', 'A backfill should run while the system stays up, not require downtime.'),
      miss('Avoid the migration by deriving the value during every future read request', 'Computing on every read shifts permanent cost to the hot path and may be impossible for derived values needing the stored data.', 'That trades a one-time migration for a permanent read-time tax.'),
    ],
    lesson: 'Large backfills run online in small batches with brief pauses so they never hold long locks or saturate the database that is still serving users. One giant transaction over millions of rows risks lock contention, timeouts, and an outage. Batching keeps the migration reversible, observable, and gentle on production.',
    source, generated: true },

  // ---- Chapter 4: Incidents and Reliability (precise + judgment) ----
  { id: 7652016, chapter: 'Incidents and Reliability', title: 'Error budget arithmetic',
    prompt: 'A service has a 99.9% monthly availability SLO. Roughly how much total unavailability does its error budget allow in a 30-day month?',
    correct: 'About 43 minutes — 0.1% of the ~43,200 minutes in 30 days',
    wrong: [
      miss('About 7.2 hours, because 99.9% allows 1% downtime', '99.9% leaves a 0.1% budget, not 1%; 1% would be a 99% SLO. 0.1% of a 30-day month is ~43 minutes.', 'Recompute the budget as 100% minus 99.9%, not minus 99%.'),
      miss('About 4.3 minutes, because 99.9% allows 0.01% downtime', 'The budget is 0.1% (one minus 0.999), which is ten times larger than 0.01%.', 'Double-check the decimal: 1 - 0.999 = 0.001 = 0.1%.'),
      miss('Zero, because an SLO is a hard guarantee that must never be missed', 'An SLO is an internal target with a budget for failure, not an absolute guarantee; that is the whole point of error budgets.', 'SLOs deliberately allow some failure — that allowance is the budget.'),
    ],
    lesson: 'An error budget is one minus the SLO, applied to the period. For a 99.9% monthly SLO, the budget is 0.1% of roughly 43,200 minutes, about 43 minutes of allowed unavailability. The budget exists so teams can balance shipping features against reliability work, rather than chasing an impossible 100%.',
    source, generated: true },

  { id: 7652017, chapter: 'Incidents and Reliability', title: 'SLA vs. SLO',
    prompt: 'A vendor contract promises 99.95% uptime with refunds if missed, while the internal team targets 99.99% to leave headroom. What is the relationship?',
    correct: 'The 99.95% is the SLA (an external contract with consequences); the stricter 99.99% is the internal SLO, set tighter so the team reacts before the SLA is breached',
    wrong: [
      miss('They are the same number expressed two ways; SLA and SLO are interchangeable terms', 'They are distinct: an SLA is a customer-facing contract with penalties, an SLO is an internal target, and they usually differ on purpose.', 'One has refunds attached; the other is a self-imposed goal.'),
      miss('The 99.99% is the SLA because the higher number is always the contractual one', 'The contractual promise here is 99.95% with refunds; teams deliberately set the internal SLO stricter than the SLA.', 'The number with penalties attached is the contract, regardless of which is higher.'),
      miss('The 99.95% is an SLI, a single measured metric of current uptime', 'An SLI is the raw measured indicator; a contractual promise with refunds is an SLA, not an SLI.', 'A measured value is an SLI; a promised threshold with penalties is an SLA.'),
    ],
    lesson: 'An SLI is the measured indicator, an SLO is the internal target you hold yourself to, and an SLA is the external contract with consequences for breach. Teams usually set the SLO stricter than the SLA so they notice and react before the customer-facing promise is at risk. Confusing the internal target with the external contract is a classic error.',
    source, generated: true },

  { id: 7652018, chapter: 'Incidents and Reliability', title: 'Mitigation before root cause',
    prompt: 'Checkout is throwing 500s for most users. The on-call notices a deploy went out 4 minutes before the errors began, but the cause is unclear. What is the right first action?',
    correct: 'Roll back the recent deploy to restore service, then investigate the root cause once users are unblocked',
    wrong: [
      miss('Keep checkout down and debug the code until the exact root cause is identified', 'Debating root cause while users are down prolongs impact; restoring service comes first, analysis second.', 'Users are losing money right now — stop the bleeding before the autopsy.'),
      miss('Do nothing yet, because rolling back without proof the deploy is at fault is risky', 'A deploy minutes before the errors is a strong rollback signal; waiting for certainty costs availability you can recover by reverting.', 'Deploy timing is exactly the kind of signal you act on to mitigate.'),
      miss('Page the entire engineering org to brainstorm causes before touching anything', 'Mass-paging to brainstorm delays mitigation; a small incident team should restore service first.', 'Coordination is good, but not at the expense of restoring the service now.'),
    ],
    lesson: 'During an incident, restoring service is the first job; understanding it is the second. A deploy immediately before the errors is a strong signal to roll back as mitigation, because rollback is reversible and fast. Root-cause analysis belongs in the postmortem, not in the middle of an active user-facing outage.',
    source, generated: true },

  { id: 7652019, chapter: 'Incidents and Reliability', title: 'The incident commander role',
    prompt: 'A SEV1 has five engineers all typing in the channel, duplicating work and contradicting each other. What does declaring an incident commander fix?',
    correct: 'It gives one person ownership of coordination and decisions, so responders stop colliding and communication has a single source of truth',
    wrong: [
      miss('It assigns blame for the outage to a single accountable individual', 'The commander coordinates the response; they are not a scapegoat. Incident roles are about coordination, not fault.', 'The role is about running the response, not pinning blame.'),
      miss('It means the commander personally fixes the bug while everyone else watches', 'The commander coordinates and delegates; they usually are not the one hands-on-keyboard fixing the code.', 'Think conductor, not soloist.'),
      miss('It replaces the need for a postmortem since one person now owns the incident', 'A commander runs the live response; a blameless postmortem afterward is still required to prevent recurrence.', 'Owning the response now does not cover learning from it later.'),
    ],
    lesson: 'An incident commander owns coordination during an incident: assigning tasks, deciding next steps, and being the single point of communication. This stops responders from duplicating or contradicting each other. The role is about running the response and deciding, not about assigning blame or being the only person fixing the code.',
    source, generated: true },

  { id: 7652020, chapter: 'Incidents and Reliability', title: 'Alert on symptoms, not causes',
    prompt: 'An on-call channel is drowning in pages like "CPU above 80% on node-7." Most fire without any user impact. How should the alerting be redesigned?',
    correct: 'Alert primarily on user-visible symptoms such as elevated error rate or latency past the SLO, and treat resource metrics as diagnostic signals, not pages',
    wrong: [
      miss('Raise the CPU threshold to 95% so the same alert fires less often', 'Tuning the threshold still pages on a cause that may not affect users; high CPU can be perfectly healthy.', 'The problem is alerting on a cause at all, not the exact number.'),
      miss('Delete all alerts so the channel goes quiet and stops causing fatigue', 'Removing alerting blinds the team to real outages; the goal is high-signal pages, not none.', 'Silence is not the same as good signal.'),
      miss('Page on every resource metric but mute the channel during business hours', 'Muting hides real incidents and does nothing about the root issue of paging on non-symptoms.', 'Muting the signal is how outages get missed entirely.'),
    ],
    lesson: 'Pages should fire on user-visible symptoms — errors and latency breaching the SLO — because that is what actually hurts users. Resource metrics like CPU are useful for diagnosis but make noisy pages, since a busy box is often a healthy one. Alerting on causes instead of symptoms produces fatigue, and muted channels miss real outages.',
    source, generated: true },

  { id: 7652021, chapter: 'Incidents and Reliability', title: 'A postmortem that drives change',
    prompt: 'After a SEV1, the writeup says "the on-call should have been more careful" and lists no follow-ups. What is wrong with it?',
    correct: 'It blames an individual instead of the system and has no dated action items with owners, so nothing actually changes',
    wrong: [
      miss('Nothing — naming who made the mistake is the main purpose of a postmortem', 'Blame is precisely what a postmortem avoids; the goal is system learning, not finding a culprit.', 'A good postmortem asks "what let this happen," not "who slipped."'),
      miss('It is too long; postmortems should just be a one-line apology to customers', 'A postmortem is an internal learning artifact, not a customer apology, and brevity is not the problem here.', 'The issue is missing fixes, not excess length.'),
      miss('It should have rolled back the deploy, which a postmortem document does', 'Rollback is a live-incident mitigation; a postmortem is written afterward to prevent recurrence, not to perform fixes.', 'A document cannot roll anything back — that already happened during the incident.'),
    ],
    lesson: 'A blameless postmortem treats failures as system and process problems, asking what conditions allowed the incident rather than who to fault. Its value lives in dated action items with named owners that actually prevent recurrence. "Be more careful" blames a person, drives no change, and discourages the honesty that makes future incidents visible.',
    source, generated: true },

  // ---- Chapter 5: Technical Debt and Team Communication ----
  { id: 7652022, chapter: 'Technical Debt and Team Communication', title: 'Framing debt as business risk',
    prompt: 'You want budget to replace an unmaintained auth library. Which pitch is most likely to get prioritized by non-engineer stakeholders?',
    correct: '"This library no longer receives security patches, so a known vulnerability could cause a breach and fail our next audit."',
    wrong: [
      miss('"The code is old and annoying and the API feels clunky to work with."', 'Annoyance is not a business case; it gives decision-makers no consequence to weigh.', 'Translate the pain into delivery, reliability, security, or cost.'),
      miss('"The library was released a long time ago, and old packages are inherently risky."', 'Package age alone is not proof of risk; a stable, maintained old library can be perfectly safe. Tie risk to consequence.', 'Age is not the argument — lack of patches and a real exposure is.'),
      miss('"I would just enjoy working with a newer library more than this one."', 'Personal preference does not justify spend; stakeholders need a concrete business consequence.', 'Your enjoyment is not a risk a manager can act on.'),
    ],
    lesson: 'Technical debt earns priority through consequence, not annoyance. Frame it in terms non-engineers weigh: slower delivery, outage exposure, audit failure, or rising spend. "Unpatched and exploitable, so a breach and a failed audit are on the table" is a business risk; "old and clunky" or "I\'d prefer the new one" is not, and package age alone proves nothing.',
    source, generated: true },

  { id: 7652023, chapter: 'Technical Debt and Team Communication', title: 'What WIP limits actually do',
    prompt: 'A team starts ten tasks at once and finishes almost nothing each sprint. Why does imposing a work-in-progress limit help?',
    correct: 'It forces the team to finish in-flight work before starting more, reducing context-switching and getting items actually done',
    wrong: [
      miss('It increases total output by letting everyone start as many tasks as they want', 'A WIP limit caps concurrent work; it does the opposite of letting everyone start more.', 'The word "limit" is the clue — it restricts how much is in flight.'),
      miss('It guarantees every task is completed faster individually once started', 'It does not speed any single task; it improves throughput by reducing half-done work and switching.', 'Think flow of finished work, not per-task speed.'),
      miss('It is purely a reporting metric and has no effect on how work flows', 'A WIP limit is an active constraint that changes behavior, not a passive dashboard number.', 'It actively stops people from starting new work, which changes flow.'),
    ],
    lesson: 'Work-in-progress limits cap how many items are in flight at once, forcing a team to finish before it starts. That cuts context-switching and the pile of half-done work that never ships, improving the throughput of completed items. The win is flow of finished work, not making any single task intrinsically faster.',
    source, generated: true },

  { id: 7652024, chapter: 'Technical Debt and Team Communication', title: 'The purpose of a runbook',
    prompt: 'The only engineer who knows how to fail over the payments database is on vacation when it goes down. What practice prevents this situation?',
    correct: 'A runbook documenting the failover steps so any qualified on-call engineer can execute them without that one person',
    wrong: [
      miss('A more detailed architecture diagram of the payments system', 'A diagram shows structure but not the ordered steps to safely perform the failover under pressure.', 'You need "what to do, in order," not just "how it is wired."'),
      miss('Requiring that one engineer to always be reachable, even on vacation', 'Always-on-call-for-one-person is the single-point-of-knowledge problem, not the solution to it.', 'Depending on one human is exactly the failure you want to remove.'),
      miss('More unit tests on the payments service code', 'Unit tests verify code behavior; they do not tell on-call how to operate the system during an incident.', 'Tests check the code, not the operational procedure.'),
    ],
    lesson: 'A runbook captures the concrete, ordered steps to operate or recover a system so the knowledge does not live in one person\'s head. It directly attacks single-person tribal knowledge and a bus factor of one: when the expert is away, any qualified responder can follow the runbook. Diagrams and tests are useful but do not replace operational procedure.',
    source, generated: true },

  { id: 7652025, chapter: 'Technical Debt and Team Communication', title: 'Hiding cleanup inside a feature',
    prompt: 'To avoid arguing for refactor time, an engineer bundles a large unrelated cleanup into a feature PR. Why is this a bad practice even if the cleanup is good?',
    correct: 'It mixes concerns so reviewers cannot evaluate either change cleanly, and it hides the cleanup from prioritization rather than making its case',
    wrong: [
      miss('It is fine, because getting necessary cleanup done by any means is what matters', 'Smuggling work past review trades short-term convenience for unreviewable changes and erodes trust in the process.', 'Ask whether a reviewer can actually assess what changed and why.'),
      miss('The only problem is that the PR will have slightly more lines to read', 'Line count is minor; the real harm is that two intertwined changes cannot be reviewed or reverted independently.', 'The danger is tangled intent, not the size of the diff.'),
      miss('It is bad solely because refactors should never be done at all', 'Refactoring is valuable and necessary; the issue is hiding it inside unrelated work, not doing it.', 'Cleanup is good — concealing it from review is the problem.'),
    ],
    lesson: 'Bundling unrelated cleanup into a feature PR mixes concerns so a reviewer cannot judge or revert either change on its own, and it dodges the real task of making the case for the cleanup so it can be prioritized openly. The fix is to scope cleanup into its own reviewable change and argue for it on its merits.',
    source, generated: true },

  // ---- Chapter 6: Testing and Observability ----
  { id: 7652026, chapter: 'Testing and Observability', title: 'Choosing the right test level',
    prompt: 'A bug lives in a pure date-rounding function with no I/O. Following the test pyramid, what is the cheapest test that reliably catches it?',
    correct: 'A unit test that calls the function with the edge-case inputs and asserts the rounded output',
    wrong: [
      miss('An end-to-end test that drives the full UI and checks the rendered date', 'E2E is slow, flaky, and expensive for logic that a fast unit test can pin down directly.', 'You do not need the whole stack to test one pure function.'),
      miss('A manual QA pass before every release to click through the date picker', 'Manual checks do not scale, are easy to skip, and will not consistently catch a logic edge case.', 'Automate the cheapest reliable check rather than relying on a human each time.'),
      miss('A load test that sends thousands of requests through the rounding code', 'Load tests measure performance under volume, not correctness of a specific rounding case.', 'Throughput is not the dimension that is broken here.'),
    ],
    lesson: 'The test pyramid says favor many fast, isolated unit tests, fewer integration tests, and only a thin layer of slow end-to-end tests. A bug in a pure function is cheapest and most reliably caught by a unit test on the exact inputs. Reaching for E2E, manual QA, or load tests to verify pure logic is slow, flaky, and misses the right dimension.',
    source, generated: true },

  { id: 7652027, chapter: 'Testing and Observability', title: 'The four golden signals',
    prompt: 'For a user-facing API you can only put four metrics on the primary dashboard. Which set are the SRE "four golden signals"?',
    correct: 'Latency, traffic, errors, and saturation',
    wrong: [
      miss('CPU, memory, disk, and network bandwidth', 'Those are resource-utilization metrics — they feed into saturation but are not the four golden signals.', 'These are inputs to one signal, not the full set.'),
      miss('Uptime, cost, deploy frequency, and lead time', 'Those mix availability and delivery (DORA-style) metrics; they are not the golden signals of monitoring a service.', 'Two of those describe delivery speed, not live service health.'),
      miss('Latency, throughput, code coverage, and bug count', 'Code coverage and bug count are quality metrics, not real-time signals of a running service\'s health.', 'Two of these come from the test suite, not production telemetry.'),
    ],
    lesson: 'Google\'s four golden signals are latency (how long requests take), traffic (demand on the system), errors (rate of failing requests), and saturation (how full the resources are). If you can only watch four metrics for a user-facing service, these give the broadest coverage of failure modes. Resource counters feed saturation but are not the set themselves.',
    source, generated: true },

  { id: 7652028, chapter: 'Testing and Observability', title: 'Why correlation IDs matter',
    prompt: 'A single user request fans out across five services, and on-call cannot tell which logs belong to that request. What practice fixes this?',
    correct: 'Propagate a correlation (trace) ID through every service and include it in structured logs so all entries for one request can be tied together',
    wrong: [
      miss('Increase the log level to DEBUG on every service so more lines are emitted', 'More verbose, unstructured logs make the haystack bigger without letting you tie a request together.', 'Volume is not the issue; linking entries to one request is.'),
      miss('Store all logs in one giant plain-text file so they are in the same place', 'Co-locating logs does not let you filter to a single request without a shared identifier across services.', 'Same file, still no way to say "show me only this request."'),
      miss('Add more dashboards showing aggregate request counts per service', 'Aggregate counts hide individual requests; tracing one request needs a per-request identifier, not totals.', 'Aggregates cannot isolate the one request that failed.'),
    ],
    lesson: 'A correlation or trace ID generated at the edge and passed through every downstream call lets you reconstruct the full path of a single request across services. Combined with structured logging, it turns scattered log lines into one filterable story. Raising log verbosity, dumping logs together, or adding aggregate dashboards does not solve the linking problem.',
    source, generated: true },

  { id: 7652029, chapter: 'Testing and Observability', title: 'High-cardinality labels on metrics',
    prompt: 'An engineer adds the raw user ID as a label on a Prometheus-style counter to "see per-user traffic." Why is this risky?',
    correct: 'User ID is unbounded high cardinality, so it creates a separate time series per user and can blow up the metrics system\'s memory and cost',
    wrong: [
      miss('It leaks the user ID, which is the only real concern with adding the label', 'PII exposure can matter, but the dominant operational risk here is cardinality explosion in the metrics backend.', 'Think about how many distinct series one label per user creates.'),
      miss('Metrics cannot hold labels at all, so the counter simply will not record', 'Metrics do support labels; the problem is the number of distinct label values, not whether labels exist.', 'Labels are allowed — it is the count of values that hurts.'),
      miss('It makes the metric more accurate, with no real downside to worry about', 'Per-user labels do not improve accuracy of a traffic counter and impose severe storage and query costs.', 'Granularity here buys cost, not useful accuracy.'),
    ],
    lesson: 'Each unique combination of label values is a separate time series, so attaching an unbounded field like user ID can create millions of series and overwhelm a metrics system\'s memory, storage, and query cost. Keep metric labels low-cardinality (status code, route, region); use logs or traces, not metric labels, for per-request or per-user detail.',
    source, generated: true },

  { id: 7652030, chapter: 'Testing and Observability', title: 'Contract tests between services',
    prompt: 'Service A calls Service B\'s API. The teams want to catch breaking changes without running a slow full-stack environment on every commit. What test type fits?',
    correct: 'A contract test that pins the request/response shape A expects, so B\'s build fails if it changes the contract A relies on',
    wrong: [
      miss('A full end-to-end test spinning up both services and their databases on every commit', 'That is the slow, flaky setup the teams are trying to avoid; contract tests give the signal more cheaply.', 'They specifically asked to avoid standing up the whole stack.'),
      miss('More unit tests inside Service A that mock B however A imagines it behaves', 'A\'s own mocks can drift from B\'s real behavior, so they will not catch B actually breaking the contract.', 'A mock A invents proves nothing about what B really returns.'),
      miss('A load test against Service B to verify it can handle A\'s traffic volume', 'Load tests check capacity, not whether the API shape A depends on still holds.', 'Throughput is a different question than contract compatibility.'),
    ],
    lesson: 'A contract test captures the interface one service depends on from another and runs against each side, so the provider\'s build breaks when it changes something a consumer relies on. It catches integration breakage far more cheaply than a full end-to-end environment, and unlike a hand-written mock it stays honest because it is checked against the real provider.',
    source, generated: true },

  // ---- Chapter 7: Data and State ----
  { id: 7652031, chapter: 'Data and State', title: 'Idempotency key for a retried charge',
    prompt: 'A payment request times out and the client retries, but you must not double-charge the customer. What server-side mechanism makes the retry safe?',
    correct: 'Have the client send a unique idempotency key with the request, and have the server record it so a repeat with the same key returns the original result instead of charging again',
    wrong: [
      miss('Make the client wait longer before retrying so the first request finishes first', 'A longer wait does not guarantee the first request did not already succeed; the duplicate charge can still happen.', 'Timing does not tell you whether the first charge went through.'),
      miss('Switch the endpoint from POST to GET so the operation becomes safe to repeat', 'Changing the verb does not make charging idempotent, and GET must not perform a state-changing charge at all.', 'A charge is not a read; the verb alone cannot make it repeatable.'),
      miss('Log every charge so you can refund duplicates after customers complain', 'After-the-fact refunds are cleanup, not prevention, and harm trust; the goal is to prevent the second charge.', 'You want to stop the double charge, not apologize for it later.'),
    ],
    lesson: 'An idempotency key lets a server recognize a retried operation and return the original outcome instead of repeating a side effect like a charge. The client generates the key once and reuses it on retries; the server stores it with the result. This is how at-least-once delivery and client retries become safe without double-applying effects.',
    source, generated: true },

  { id: 7652032, chapter: 'Data and State', title: 'Replica is not a backup',
    prompt: 'A team says "we are safe from data loss, we have a read replica." An engineer is buying a faulty `DELETE`. Why is the replica not real protection here?',
    correct: 'A replica continuously copies changes, so a bad DELETE is replicated almost instantly; only a point-in-time backup that has been test-restored can recover the lost rows',
    wrong: [
      miss('The replica is read-only, so the DELETE cannot reach it and the data is safe there', 'Replication applies the primary\'s writes, including the DELETE, to the replica; it does not shield it.', 'Replicas receive the primary\'s changes — including deletions.'),
      miss('A replica is the same as a backup, so the data is already protected', 'They serve different purposes: a replica is for availability/read scaling, a backup is for recovering past states.', 'Ask whether you can roll back to yesterday — a replica cannot.'),
      miss('The replica protects the data as long as it is in a different datacenter', 'Geography helps against site failure but not against a logical error that replicates everywhere.', 'A different building still receives the same bad DELETE.'),
    ],
    lesson: 'A replica mirrors the primary\'s writes for availability and read scaling, so a logical error like an accidental DELETE propagates to it almost immediately. Recovering deleted data requires a point-in-time backup — and one you have actually test-restored, since an untested backup may not work. "We have a replica" and "we have a recoverable backup" are different guarantees.',
    source, generated: true },

  { id: 7652033, chapter: 'Data and State', title: 'At-least-once delivery',
    prompt: 'Your queue guarantees at-least-once delivery. A consumer processes a "ship order" message. What must the consumer assume?',
    correct: 'The same message may be delivered more than once, so processing must be idempotent to avoid shipping the order twice',
    wrong: [
      miss('Each message is delivered exactly once, so no duplicate handling is needed', 'At-least-once explicitly permits duplicates; assuming exactly-once is the trap that causes double processing.', 'Read the guarantee literally — "at least once," not "exactly once."'),
      miss('Messages may be lost, so the consumer should ignore acknowledgements', 'At-least-once means delivery is retried until acknowledged, so loss is what it prevents, not what it risks.', 'The guarantee is about possible repeats, not drops.'),
      miss('Messages always arrive in strict global order, so ordering can be assumed', 'Delivery-count semantics say nothing about global ordering; many queues do not guarantee it.', 'Order is a separate property the guarantee does not promise.'),
    ],
    lesson: 'At-least-once delivery means a message is retried until acknowledged, which prevents loss but permits duplicates. A consumer of such a queue must make processing idempotent — for example via an idempotency key or dedupe table — so a redelivered "ship order" does not ship twice. Assuming exactly-once is the classic source of duplicate side effects.',
    source, generated: true },

  { id: 7652034, chapter: 'Data and State', title: 'A stale-cache bug',
    prompt: 'Users update their profile name, but the old name keeps showing for minutes. The read path serves from a cache that is only filled, never invalidated on write. What is the fix?',
    correct: 'Invalidate or update the cache entry when the underlying record is written, so reads stop returning the stale value',
    wrong: [
      miss('Increase the cache TTL so entries live longer and stay consistent', 'A longer TTL makes staleness worse, not better, by holding the outdated value even longer.', 'Longer-lived stale data is more stale, not less.'),
      miss('Add a second cache layer in front of the first to speed reads further', 'Another caching layer adds more places to serve stale data without an invalidation story.', 'You are stacking caches with the same missing piece.'),
      miss('Disable caching entirely and accept the database load forever', 'Removing the cache fixes staleness but throws away its benefit; an invalidation strategy keeps both.', 'You can keep the speed if you solve invalidation instead of deleting it.'),
    ],
    lesson: 'A cache without an invalidation story serves stale data after writes, because the write updates the source of truth but never refreshes or evicts the cached copy. The fix is to invalidate or update the cache on write. Raising the TTL deepens the staleness, and dropping the cache discards its benefit when a proper invalidation strategy keeps both speed and freshness.',
    source, generated: true },

  // ---- Chapter 8: Security and Secrets ----
  { id: 7652035, chapter: 'Security and Secrets', title: 'Responding to a leaked key',
    prompt: 'You discover a live AWS access key was committed to a public repo two days ago. What is the correct first response?',
    correct: 'Rotate (revoke and reissue) the key immediately, because anyone who already cloned the history still has the old one even after you delete the commit',
    wrong: [
      miss('Delete the commit and force-push so the key is removed from history', 'Removing it from history does not invalidate a key that bots and clones may already have copied.', 'The secret is already out — erasing the commit does not un-leak it.'),
      miss('Add the file to .gitignore so it is not committed again', 'Ignoring the file going forward does nothing about the already-exposed credential.', 'That prevents the next leak, not the damage from this one.'),
      miss('Make the repository private to cut off access to the key', 'The key may already be scraped, and making the repo private cannot recall copies already taken.', 'Private now cannot retract what was public for two days.'),
    ],
    lesson: 'A leaked credential must be treated as compromised the moment it is exposed: rotate it immediately so the old value is useless, regardless of whether you also clean up history. Deleting the commit, gitignoring the file, or making the repo private all fail because anyone who already pulled the public history still holds the secret. Rotate first, then clean up.',
    source, generated: true },

  { id: 7652036, chapter: 'Security and Secrets', title: 'Blast radius of a leaked token',
    prompt: 'A leaked service token had read-write access to every production database, though the service only needed to read one table. What principle would have shrunk the damage?',
    correct: 'Least privilege: scoping the token to read-only access on just that one table would have limited what an attacker holding it could do',
    wrong: [
      miss('Defense in depth, which would have made the token impossible to leak', 'Defense in depth adds layers but does not prevent a leak; the relevant idea here is minimizing the token\'s power.', 'The lesson is about how much the token could do, not preventing leaks.'),
      miss('Encryption at rest, since encrypting the database limits a stolen token', 'At-rest encryption protects data on disk from theft of storage, not from a valid token making authorized calls.', 'A valid token is authorized — encryption does not stop authorized reads/writes.'),
      miss('Rate limiting, because slowing the attacker fully contains the blast radius', 'Rate limiting slows abuse but does not reduce the breadth of access an over-privileged token grants.', 'Slower access to everything is still access to everything.'),
    ],
    lesson: 'Blast radius is what a credential can do if it leaks. Least privilege — granting only the access the task needs, here read-only on one table — directly shrinks that radius, so a stolen token is far less useful to an attacker. Encryption, rate limiting, and defense in depth help elsewhere but do not limit what an over-scoped but valid token is authorized to do.',
    source, generated: true },

  { id: 7652037, chapter: 'Security and Secrets', title: 'Triaging a vulnerable dependency',
    prompt: 'A scanner flags a CVE with CVSS 9.8 in a library you depend on, but the vulnerable function is in a code path your app never calls. How should you triage it?',
    correct: 'Assess exploitability and reachability in your context: a high CVSS on an unreachable code path is lower real risk than a medium CVSS you actually invoke',
    wrong: [
      miss('Treat it as a drop-everything emergency purely because CVSS is 9.8', 'CVSS scores severity in the abstract, not whether the vulnerable path is reachable in your app; context can lower the real risk.', 'A high score on code you never run is not the same urgency as code you do.'),
      miss('Ignore every CVE, since scanners always produce noise not worth reading', 'Blanket-ignoring is the opposite failure; some CVEs are genuinely exploitable in your context and must be patched.', 'Dismissing all alerts misses the ones that actually reach your code.'),
      miss('Wait for the score to change before deciding whether to act', 'CVSS reflects the vulnerability, not your usage; waiting for it to move does not tell you if you are exposed.', 'The number will not tell you whether your app calls the bad path.'),
    ],
    lesson: 'CVSS measures a vulnerability\'s severity in the abstract, not your specific exposure. Effective triage weighs exploitability and reachability: whether your application actually invokes the vulnerable code and whether an attacker can reach it. A 9.8 on a dead code path can be lower real risk than a moderate CVE on your hot path. Treating every CVE as either an emergency or noise is the trap.',
    source, generated: true },

  { id: 7652038, chapter: 'Security and Secrets', title: 'Authentication vs. authorization',
    prompt: 'A logged-in basic user changes the URL\'s `account_id` and views another customer\'s invoices. Which control failed, and which was working?',
    correct: 'Authorization failed — the system did not check this user was permitted to access that account — while authentication worked, since it correctly knew who the user was',
    wrong: [
      miss('Authentication failed, because the user reached data they should not see', 'Authentication verified identity correctly; the system knew who they were. The missing check was permission, which is authorization.', 'They were correctly identified — the gap was "are they allowed?"'),
      miss('Both worked, since the user was logged in and the page rendered without error', 'Rendering without error is exactly the bug: a missing authorization check let a known user see forbidden data.', 'No error does not mean the access was permitted.'),
      miss('Encryption failed, because the invoice data was exposed to the wrong person', 'Encryption protects data in transit and at rest from interception, not from an authenticated user lacking permission.', 'The data was served over a valid session — encryption was never the issue.'),
    ],
    lesson: 'Authentication answers "who are you?" and authorization answers "are you allowed to do this?" Here the user was correctly authenticated but the server never verified they owned the requested account, an authorization (access-control) flaw often called IDOR. The fix is to check permissions on every object access, not to trust an ID supplied by the client.',
    source, generated: true },

  // ---- Chapter 9: Working Effectively in a Team ----
  { id: 7652039, chapter: 'Working Effectively in a Team', title: 'Disagree and commit',
    prompt: 'After a thorough design debate, the team chose approach A over your preferred B. The decision is reversible and the owner has decided. What does "disagree and commit" ask of you?',
    correct: 'Support and execute approach A wholeheartedly now that it is decided, while it stays fine to revisit if real evidence later shows B was better',
    wrong: [
      miss('Keep relitigating approach B in every standup until the team switches', 'Continuously reopening a settled, reversible decision blocks progress and ignores the owner\'s call; that is what disagree-and-commit avoids.', 'The debate already happened — reopening it stalls the work.'),
      miss('Quietly implement B anyway since you are confident it is the better design', 'Undermining the agreed decision in secret destroys trust and the value of having decided at all.', 'Committing means executing the chosen plan, not your own.'),
      miss('Merge A and B together so everyone gets part of what they wanted', 'Combining both to please everyone usually yields an incoherent design and dodges the decision the team made.', 'A compromise mashup is not the agreed plan — it is a new, unvetted one.'),
    ],
    lesson: 'Disagree and commit means that once a decision is made by the accountable owner after genuine debate, you back it and execute fully even if you argued otherwise — especially when the choice is reversible. It keeps teams from waiting for unreachable consensus or quietly subverting the call. You can still revisit it later with real evidence, but you do not relitigate or merge both designs to avoid deciding.',
    source, generated: true },
])
