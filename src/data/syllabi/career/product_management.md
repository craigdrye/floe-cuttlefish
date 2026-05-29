# Product Management
**ID**: `productManagement` · **Discipline**: Career · **Level**: Career

## Course Aim
Product management is the discipline of deciding what to build, for whom, and why — under ambiguity, with finite capacity, and accountable for outcomes the PM does not personally control. This course trains practitioners to convert noisy signals (sales escalations, executive opinions, support tickets, dashboards, gut feel) into evidence-backed bets, and to defend those bets to design, engineering, executives, and customers without retreating into roadmap theater.

The through-line is judgment under constraint. A strong PM separates the request from the underlying job, sizes opportunities before committing capacity, picks metrics that prove user value rather than flatter the dashboard, designs experiments that actually teach something, and communicates tradeoffs honestly enough that partners can plan around them. We treat frameworks (RICE, Kano, MoSCoW, opportunity solution trees, the Sean Ellis test) as thinking aids, not oracles — the course repeatedly shows where frameworks disagree and why human judgment still arbitrates.

By the end, a learner should be able to run a product opportunity from first signal to post-launch learning: frame the problem, run discovery, write strategy, prioritize honestly, define and instrument metrics, partner through delivery, launch responsibly, and close the loop. The voice is adult and direct, the standard is exam-grade, and the recurring enemy is the plausible-sounding wrong answer.

## Course Design Notes
The prior syllabus had a strong practical spine (discovery, prioritization, metrics, cross-functional decisions) but three weaknesses this rewrite fixes. First, it had **no Common Traps** anywhere — yet the difference between a junior and senior PM is mostly which traps they have learned to smell, so every chapter now names the failure modes explicitly. Second, several chapters listed concepts without the **applied artifact** the learner should be able to produce; each chapter now states a concrete Applied skill. Third, it under-specified the **quantitative literacy** a modern PM needs (funnel math, retention denominators, RICE arithmetic, NPS, experiment significance), which is now distributed across Chapters 4 and 5.

Modern practice is woven in deliberately: continuous discovery and opportunity solution trees (Torres), the Sean Ellis 40% product-market-fit test, the peeking problem and novelty effect in experimentation, staged rollouts via feature flags/canary/dogfooding, and the AI-era reality that "add AI" is now the dominant distraction-disguised-as-strategy. Chapters are scoped so each maps cleanly to a question bank chapter, easing assessment authoring.

## Chapter 1: The PM Role and Product Operating System
**Core questions**
- What decision is the PM actually accountable for, and what are they merely informing?
- Is this a product, business, customer, technical, or organizational-alignment problem?
- What would success look like if no feature had been named yet?

**Key concepts**: product manager vs product owner vs project manager, the product trio (PM/design/engineering), vision vs strategy vs roadmap vs backlog, discovery vs delivery, outcomes vs outputs, decision rights, RACI, constraints.

**Applied skills**: Write a one-page product problem brief (user, business context, evidence, constraints, decision needed). Distinguish, for a given scenario, whether the PM should decide, recommend, facilitate, or gather evidence.

**Common traps**: Confusing the PM with a feature-ticket clerk or a project scheduler; chasing outputs (features shipped) instead of outcomes (user/business change); claiming decision rights the PM does not hold; mistaking the roadmap for the strategy.

## Chapter 2: Customer Discovery and Problem Framing
**Core questions**
- What progress is the user trying to make, and where does the current workflow break?
- Is this a loud customer request or a broad, sized user problem?
- What evidence would actually change the roadmap?

**Key concepts**: jobs-to-be-done, user interviews and the difference between what users say vs do, observation, journey maps, personas, pain points vs requests, leading questions and confirmation bias, qualitative synthesis, continuous discovery, the opportunity solution tree (outcome → opportunities → solutions → assumption tests).

**Applied skills**: Run a five-interview discovery sprint and synthesize it into themes, assumptions, and an opportunity map. Restate a feature request as the underlying job.

**Common traps**: Treating a request as the problem and building the literal solution; over-weighting the loudest customer; sample bias (interviewing only happy power users); asking leading questions; mistaking a single anecdote for a sized opportunity.

## Chapter 3: Strategy, Positioning, and Product Bets
**Core questions**
- Who is this for, and — just as important — who is it explicitly not for?
- What durable advantage are we trying to build?
- Which bets support the strategy, and which are attractive distractions?

**Key concepts**: product vision, target segment, value proposition, differentiation and positioning, business model, build/buy/partner, competitive analysis vs mirror-imaging, strategic narrative, product-market fit and the Sean Ellis 40%-very-disappointed test, opportunity cost as the heart of strategy.

**Applied skills**: Write a product strategy memo linking target user, problem, insight, bets, risks, and success metrics. Run and interpret a Sean Ellis PMF survey.

**Common traps**: Strategy that names no non-customers and no tradeoffs; copying competitors instead of differentiating; "add AI / add a buzzword" as a substitute for an insight; declaring product-market fit on vanity signals rather than retention or the 40% test.

## Chapter 4: Prioritization and Roadmapping
**Core questions**
- What should we do first, and what are we deliberately choosing not to do?
- Which risk should be reduced before scaling?
- Is the roadmap communicating learning, commitment, or theater?

**Key concepts**: RICE = (Reach × Impact × Confidence) ÷ Effort and how to read the score; impact-per-unit-effort; Kano model (must-be / performance / delighter); MoSCoW (must / should / could / won't have); opportunity cost; dependency and sequencing; MVP and risk reduction; now-next-later and outcome roadmaps.

**Applied skills**: Score a backlog with RICE and explain where it disagrees with a Kano or strategic-fit view. Build a now-next-later roadmap that honors dependencies.

**Common traps**: Picking the highest raw impact while ignoring effort (and vice versa); HiPPO / loudest-voice prioritization; treating frameworks as oracles instead of inputs to judgment; date-stuffed roadmaps that hide uncertainty; ignoring sequencing dependencies and guaranteeing rework.

## Chapter 5: Metrics, Analytics, and Experimentation
**Core questions**
- Which metric proves the user outcome, and which merely makes the dashboard look employed?
- What could improve the headline metric while harming users or the business?
- What experiment teaches us fastest and most honestly?

**Key concepts**: north-star vs input vs guardrail metrics; activation and the "aha" moment; conversion and funnel analysis (largest percentage drop between adjacent stages); retention (returning users ÷ original cohort) and cohort curves; leading vs lagging indicators; NPS = %promoters − %detractors; testable hypotheses; A/B testing, statistical significance and sample size, the peeking problem, and the novelty effect.

**Applied skills**: Build a measurement plan (events, metric definitions, expected movement, guardrails, decision rules). Diagnose a funnel and compute retention/NPS. Write a falsifiable product hypothesis.

**Common traps**: Vanity metrics and metrics gamed by added friction; ignoring guardrails after a headline win; peeking at an A/B test and stopping early (inflating false positives); calling a winner on a tiny or non-representative sample; mistaking a novelty bump for durable lift.

## Chapter 6: Requirements, Design, and Delivery Partnership
**Core questions**
- What must be true for design and engineering to make good decisions on their own?
- What can be cut without destroying the learning goal?
- Which technical constraint actually changes the product decision?

**Key concepts**: lightweight PRD / opportunity brief, problem vs solution framing, user stories and acceptance criteria, non-goals, design critique, technical feasibility and constraints, discovery-to-delivery handoff, backlog refinement, release slices, Wizard-of-Oz and concierge tests.

**Applied skills**: Write a PRD with problem, users, scope, non-goals, risks, open questions, analytics, and rollout plan. Define acceptance criteria for a story. Design a Wizard-of-Oz test to de-risk before automation.

**Common traps**: Specifying the solution and skipping the problem; PRDs with no non-goals (so scope creeps); acceptance criteria that aren't testable; over-building before validating demand; ignoring a constraint that should have changed the decision.

## Chapter 7: Launch, Adoption, and Learning Loops
**Core questions**
- Who must understand, sell, support, trust, or change behavior for this launch to work?
- What will we watch in the first day, week, and month?
- What did the launch teach us that the roadmap must absorb?

**Key concepts**: staged rollout patterns (dogfooding → beta → canary → gradual ramp via feature flags), launch tiers (silent vs marketing launch), enablement for sales/support, pricing and packaging, onboarding and time-to-value, adoption vs usage, post-launch review, leading indicators in the first hours.

**Applied skills**: Build a launch-readiness checklist (engineering, support, sales, legal, analytics) and a post-launch learning memo. Design a staged rollout with kill-switch criteria.

**Common traps**: Big-bang launch with no canary or kill switch; shipping without enablement so support and sales can't carry it; declaring success on day-one spikes; no instrumentation to learn from; treating launch as the finish line instead of the start of the learning loop.

## Chapter 8: Stakeholder Influence and Product Judgment
**Core questions**
- How do we say no without being lazy, defensive, or vague?
- Which stakeholder is reacting to risk, revenue, reputation, customer pain, or internal politics?
- When should the PM escalate, decide, facilitate, or gather more evidence?

**Key concepts**: executive alignment, sales-driven feature requests, customer commitments and the renewal-threat trap, engineering trust, design rationale, escalation paths, disagree-and-commit, the decision memo (recommendation, rejected alternatives, evidence, tradeoffs, risks, next learning milestone), ethical product judgment and dark patterns.

**Applied skills**: Write a decision memo that says no with context and a revisit trigger. Translate a competitor or executive request into customer/strategy/opportunity questions before committing capacity.

**Common traps**: A bare "no" with no context; capitulating to the HiPPO or a single renewal threat without sizing; quiet additions that consume capacity invisibly; hiding tradeoffs to avoid conflict; shipping a dark pattern because a metric moved.

## Capstone: Product Bet Portfolio
Learners produce an end-to-end portfolio for one product opportunity:
- problem brief (Ch.1) and decision-rights analysis
- discovery plan, synthesis, and opportunity solution tree (Ch.2)
- product strategy memo with PMF hypothesis (Ch.3)
- prioritized roadmap defended with two frameworks (Ch.4)
- metrics and experiment plan with guardrails and decision rules (Ch.5)
- PRD with non-goals and a Wizard-of-Oz de-risking step (Ch.6)
- staged launch-readiness checklist and post-launch learning memo (Ch.7)
- stakeholder decision memo that says no with a revisit trigger (Ch.8)

## Assessment Ideas
- Discovery interview guide + bias critique
- Opportunity solution tree review
- Product strategy memo with non-customers and tradeoffs named
- Prioritized roadmap defense (RICE vs Kano disagreement)
- Metrics plan + funnel/retention/NPS computation
- PRD critique (missing non-goals, untestable criteria)
- Experiment design review (sample size, peeking, novelty)
- Launch readiness + rollback-criteria review
- Product Bet Portfolio

## Research Notes
- Intercom's RICE framework (its origin) informed the (Reach × Impact × Confidence) ÷ Effort scoring and interpretation: https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/
- Kano model categories (must-be / performance / delighter) per ProductPlan and Wikipedia: https://www.productplan.com/glossary/kano-model
- MoSCoW (Must/Should/Could/Won't have), Dai Clegg 1994, per ProductPlan/Wikipedia: https://www.productplan.com/glossary/moscow-prioritization
- Teresa Torres' opportunity solution tree and continuous discovery: https://www.producttalk.org/opportunity-solution-trees/
- Sean Ellis 40%-very-disappointed product-market-fit test: https://learningloop.io/glossary/sean-ellis-score
- A/B testing significance, the peeking problem, and novelty effect: https://gopractice.io/data/peeking-problem/
- NPS = %promoters − %detractors (9-10 / 0-6), per Bain/Wikipedia: https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/
- Staged rollout patterns (dogfooding → beta → canary → ramp) via feature flags, per LaunchDarkly/Unleash: https://launchdarkly.com/blog/what-are-feature-flags/
- Reforge course catalog informed the modern PM dimensions (strategy, analytics, experimentation, growth, AI, leadership): https://www.reforge.com/courses
