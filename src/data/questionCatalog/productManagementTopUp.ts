import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe productManagement top-up'

export const productManagementTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // ---------------------------------------------------------------------------
  // Chapter 1: The PM Role and Product Operating System
  // ---------------------------------------------------------------------------
  {
    id: 7319000,
    chapter: 'The PM Role and Product Operating System',
    title: 'Output vs outcome',
    prompt: 'A leader says, "We shipped 14 features last quarter, so the team had a great quarter." Why is this an output-focused judgment a PM should push back on?',
    correct: 'Features shipped is an output; a great quarter is defined by the user or business outcomes those features moved',
    wrong: [
      miss('Because 14 is too few features to count as a good quarter', 'The objection is not the count. A team could ship one feature that moves the business or fifty that move nothing; volume is the wrong axis.', 'Judge by what changed for users or the business, not by how many things shipped.'),
      miss('Because features should be measured in story points, not feature count', 'Swapping one output unit for another output unit does not fix the problem; story points still measure effort, not value delivered.', 'The fix is switching from outputs to outcomes, not to a different effort metric.'),
      miss('Because only engineering, not product, can claim credit for shipping', 'Credit allocation is a side issue; the core flaw is measuring success by activity instead of result.', 'Even with perfect credit-sharing, counting shipped features still measures the wrong thing.'),
    ],
    lesson: 'Product management is accountable for outcomes (user behavior change, retention, revenue), not outputs (features shipped). A pile of shipped features that moved no metric is a busy quarter, not a good one. Mature teams report what changed, not what they built.',
    source,
    generated: true,
  },
  {
    id: 7319001,
    chapter: 'The PM Role and Product Operating System',
    title: 'PM vs project manager vs PO',
    prompt: 'In a typical product trio, which responsibility most distinctly belongs to the product manager rather than the engineering lead or designer?',
    correct: 'Deciding which problem the team should solve next and why it matters to users and the business',
    wrong: [
      miss('Owning the visual hierarchy and interaction details of each screen', 'That is the designer\'s craft. The PM frames the problem and outcome but does not own pixel-level interaction design.', 'The PM owns what-and-why; design owns the experience craft.'),
      miss('Owning the technical architecture and choosing the database', 'That is the engineering lead\'s domain. The PM should understand constraints but does not pick the stack.', 'Engineering owns the how; the PM owns which problem is worth solving.'),
      miss('Owning the sprint board, daily stand-up, and burndown chart', 'That is closer to a scrum master or project manager. A PM may care about delivery but is not primarily a ceremony administrator.', 'Process administration is project/scrum work; the PM owns the problem and outcome.'),
    ],
    lesson: 'In a product trio, the PM owns the problem and the why, design owns the experience, and engineering owns the how. Project/scrum management coordinates execution. Confusing these roles turns a PM into a ticket clerk or a meeting scheduler.',
    source,
    generated: true,
  },
  {
    id: 7319002,
    chapter: 'The PM Role and Product Operating System',
    title: 'Decide, recommend, or facilitate',
    prompt: 'A pricing change will affect legal exposure, finance forecasts, and the brand. The PM has done the analysis but does not hold decision rights here. What is the most appropriate PM action?',
    correct: 'Make a clear recommendation with evidence and tradeoffs, and facilitate the decision among the rights-holders',
    wrong: [
      miss('Unilaterally announce the new price because the PM owns the product', 'Owning the product roadmap does not mean owning every cross-functional decision. Pricing with legal and finance exposure has other rights-holders.', 'Recognize where you recommend versus where you decide.'),
      miss('Stay silent and let legal and finance figure it out themselves', 'Withholding the analysis abdicates the PM\'s value. Even without decision rights, the PM should inform and recommend.', 'No decision rights still means you bring the evidence and a recommendation.'),
      miss('Escalate to the CEO immediately before doing any analysis', 'Escalating before framing the decision wastes executive time and signals the PM has not done the work. Escalation is a last resort, not a first move.', 'First frame and recommend; escalate only when rights-holders deadlock.'),
    ],
    lesson: 'A PM must know, per decision, whether to decide, recommend, facilitate, or gather evidence. When decision rights sit elsewhere, the highest-value move is a crisp recommendation plus facilitation, not a power grab or silence.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 2: Customer Discovery and Problem Framing
  // ---------------------------------------------------------------------------
  {
    id: 7319003,
    chapter: 'Customer Discovery and Problem Framing',
    title: 'Opportunity solution tree layers',
    prompt: 'In Teresa Torres\'s opportunity solution tree, what sits at the very top and sets the scope for everything below it?',
    correct: 'A desired outcome that the team is trying to move',
    wrong: [
      miss('The list of features the team has already committed to building', 'Committed features are solutions, which sit near the bottom of the tree. Starting from them inverts discovery into solution-justification.', 'The tree runs outcome at top, then opportunities, then solutions, then experiments.'),
      miss('A persona describing the target user demographic', 'A persona is context, not the root. The tree is anchored on the measurable outcome you want to change, not on who the user is.', 'The root is the outcome; opportunities are the unmet needs underneath it.'),
      miss('The quarterly OKR scoring rubric', 'A scoring rubric is a grading tool, not the structure of discovery. The tree\'s root is the single outcome under discovery.', 'Think outcome at the top, opportunities (unmet needs) branching below.'),
    ],
    lesson: 'An opportunity solution tree runs outcome (top) → opportunities (unmet user needs) → solutions → assumption tests/experiments. Anchoring on the outcome keeps the team comparing opportunities rather than arguing whether/not to build one pet solution.',
    source,
    generated: true,
  },
  {
    id: 7319004,
    chapter: 'Customer Discovery and Problem Framing',
    title: 'Say-do gap',
    prompt: 'In a user interview, a customer insists, "I would absolutely pay for a weekly summary email." Why should a PM treat this as weak evidence?',
    correct: 'Stated intentions in interviews often diverge from actual behavior; what users say they will do is not what they do',
    wrong: [
      miss('Because email is an outdated channel that no users actually read', 'The channel is not the issue; the same caution applies to any stated future intention regardless of medium.', 'The weakness is self-reported future behavior, not the specific feature.'),
      miss('Because a single interview can never produce any useful signal', 'One interview can surface real pain and hypotheses; the caution is specifically about self-reported willingness to pay, not interviews in general.', 'Interviews are valuable; predicted future actions are the unreliable part.'),
      miss('Because the customer is probably lying to be polite', 'Politeness bias exists, but the deeper point is that even sincere users mispredict their own future behavior under no-cost conditions.', 'Even an honest user\'s prediction of future action is unreliable evidence.'),
    ],
    lesson: 'Discovery distinguishes what users say from what they do. Hypothetical "I would pay/use" statements are notoriously unreliable. Stronger evidence comes from past behavior, observed workarounds, or a real commitment test (a deposit, a click, a signup).',
    source,
    generated: true,
  },
  {
    id: 7319005,
    chapter: 'Customer Discovery and Problem Framing',
    title: 'Leading question detector',
    prompt: 'Which discovery interview question is least likely to bias the answer?',
    correct: 'Walk me through the last time you tried to do this. What happened?',
    wrong: [
      miss('Don\'t you think our new dashboard would make this much easier?', 'This is a leading question: it states the desired answer and invites agreement, contaminating the signal.', 'Ask about past behavior openly rather than proposing your solution.'),
      miss('Would you use a feature that automatically organizes everything for you?', 'This asks a user to predict future use of a solution you describe, inviting an agreeable but unreliable yes.', 'Avoid solution-pitching; ask what actually happened last time.'),
      miss('On a scale of 1 to 10, how amazing is our product idea?', 'This both leads ("amazing") and asks for a hypothetical rating of an idea, not lived behavior.', 'Ground questions in concrete past events, not idea ratings.'),
    ],
    lesson: 'Good discovery questions are open and grounded in specific past behavior ("tell me about the last time..."). Questions that pitch a solution, suggest the answer, or rate a hypothetical bias the response and produce false confidence.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 3: Strategy, Positioning, and Product Bets
  // ---------------------------------------------------------------------------
  {
    id: 7319006,
    chapter: 'Strategy, Positioning, and Product Bets',
    title: 'Sean Ellis PMF test',
    prompt: 'Using the Sean Ellis product-market-fit test, what threshold of survey respondents saying they would be "very disappointed" if they could no longer use the product is the rough signal of product-market fit?',
    correct: 'At least 40% answering "very disappointed"',
    wrong: [
      miss('At least 90%, because anything less means the product has failed', 'A 90% bar is unrealistically high; Ellis found ~40% across 100+ startups correlated with sustainable growth, not near-universal devotion.', 'The benchmark is around 40%, not near-total satisfaction.'),
      miss('Exactly 50%, because that is a simple majority', 'A clean majority is intuitive but not the empirical threshold. The observed correlation was at roughly 40%.', 'Recall the specific benchmark Ellis derived: about 40%.'),
      miss('Any positive NPS score above zero', 'NPS is a different instrument (promoters minus detractors). The Ellis test specifically measures the "very disappointed" share.', 'The PMF signal here is the very-disappointed percentage, not NPS.'),
    ],
    lesson: 'The Sean Ellis test asks "How would you feel if you could no longer use this product?" If roughly 40% or more say "very disappointed," that historically correlates with product-market fit and sustainable growth. Below that, growth tends to struggle.',
    source,
    generated: true,
  },
  {
    id: 7319007,
    chapter: 'Strategy, Positioning, and Product Bets',
    title: 'Naming the non-customer',
    prompt: 'A PM presents a strategy that claims the product is "for everyone who works." Why is the most senior strategic critique here?',
    correct: 'A strategy that serves everyone names no target segment and no tradeoffs, so it cannot guide what to build or differentiate against',
    wrong: [
      miss('The phrasing is too informal for an executive audience', 'Tone is cosmetic. The substantive failure is the absence of a target segment and explicit non-customers, not word choice.', 'The flaw is strategic scope, not presentation polish.'),
      miss('"Everyone who works" excludes retirees, which is unfair', 'Inclusivity of the phrase is beside the point; even a broader phrase would still fail by naming no focus and no tradeoff.', 'Strategy needs a sharp target and explicit non-customers, not wider wording.'),
      miss('The strategy should have led with the revenue target instead', 'A revenue number is a goal, not a strategy. Leading with it would not fix the missing segment and differentiation.', 'The missing piece is who it is for and not for, not a financial headline.'),
    ],
    lesson: 'Strategy is choice under constraint: it must name who the product is for, who it is explicitly not for, and what advantage it builds. "For everyone" names no tradeoff, so it gives the team no way to decide what to build or how to differentiate.',
    source,
    generated: true,
  },
  {
    id: 7319008,
    chapter: 'Strategy, Positioning, and Product Bets',
    title: 'Mirror-imaging competitors',
    prompt: 'A competitor ships an AI assistant, and an exec demands the team copy it within the quarter. What is the strongest strategic objection to a pure copy-the-competitor approach?',
    correct: 'Copying erodes differentiation and may not address what our specific customers actually need',
    wrong: [
      miss('Competitor moves should always be ignored as irrelevant noise', 'Over-correcting the other way is also wrong; a competitor launch is a market signal worth interrogating, not dismissing.', 'Treat the move as a signal to investigate, not an instruction to copy.'),
      miss('AI features are technically impossible to build in one quarter', 'Feasibility varies; the strategic problem is undifferentiated me-too building, not a blanket technical impossibility.', 'The objection is about strategy and customer fit, not engineering timelines.'),
      miss('The team should copy it but rebrand the feature with a new name', 'Renaming a copied feature changes the wrapper, not the strategic weakness of mirroring a rival instead of serving your customers.', 'A new name does not create differentiation or customer value.'),
    ],
    lesson: 'Competitor moves are inputs, not instructions. Mirror-imaging burns capacity on undifferentiated work and abandons your own positioning. The mature response translates the move into customer, strategy, and opportunity questions before committing.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 4: Prioritization and Roadmapping
  // ---------------------------------------------------------------------------
  {
    id: 7319009,
    chapter: 'Prioritization and Roadmapping',
    title: 'RICE formula',
    prompt: 'In the RICE prioritization framework, how is the RICE score computed from Reach, Impact, Confidence, and Effort?',
    correct: '(Reach × Impact × Confidence) ÷ Effort',
    wrong: [
      miss('Reach + Impact + Confidence + Effort', 'Summing all four treats effort as additive value, but higher effort should lower priority. Effort must divide, not add.', 'Effort sits in the denominator; the other three multiply on top.'),
      miss('(Reach × Impact × Effort) ÷ Confidence', 'This swaps Confidence and Effort. More effort should reduce the score and more confidence should raise it, so Effort divides.', 'Confidence multiplies the numerator; Effort divides.'),
      miss('Reach × Impact × Confidence × Effort', 'Multiplying by effort rewards expensive work, the opposite of prioritization intent. Effort belongs in the denominator.', 'Divide by Effort so cheaper wins rank higher per unit of work.'),
    ],
    lesson: 'RICE = (Reach × Impact × Confidence) ÷ Effort. Reach, Impact, and Confidence multiply to estimate expected value, and dividing by Effort yields value per unit of work. Higher scores rank higher; effort in the denominator favors cheaper wins.',
    source,
    generated: true,
  },
  {
    id: 7319010,
    chapter: 'Prioritization and Roadmapping',
    title: 'RICE arithmetic',
    prompt: 'Feature A: Reach 1000, Impact 2, Confidence 0.8, Effort 4. Feature B: Reach 500, Impact 3, Confidence 1.0, Effort 2. Using RICE, which has the higher score?',
    correct: 'Feature B, with a RICE score of 750 versus Feature A\'s 400',
    wrong: [
      miss('Feature A, because it reaches twice as many users', 'Reach alone does not decide it. A\'s score is (1000×2×0.8)/4 = 400, lower than B\'s 750 despite higher reach.', 'Compute the full formula; B wins 750 to 400.'),
      miss('They tie, because the products of the numerators are equal', 'They are not equal: A\'s numerator is 1600 and B\'s is 1500, and effort differs too. Dividing by effort gives 400 vs 750.', 'Divide each numerator by its effort before comparing.'),
      miss('Feature B, with a score of 1500 versus Feature A\'s 1600', 'Those are the numerators before dividing by effort. After dividing (1600/4=400, 1500/2=750), B still wins but the scores are 400 and 750.', 'Remember to divide the numerator by Effort.'),
    ],
    lesson: 'Apply RICE end to end: A = (1000×2×0.8)/4 = 400; B = (500×3×1.0)/2 = 750. B wins despite lower reach because its impact, confidence, and low effort combine to a higher value-per-effort. Always finish the division.',
    source,
    generated: true,
  },
  {
    id: 7319011,
    chapter: 'Prioritization and Roadmapping',
    title: 'Kano: delighter vs must-be',
    prompt: 'In the Kano model, a feature whose absence makes customers very dissatisfied but whose presence only brings them to neutral (never delight) is which type?',
    correct: 'A must-be (basic) feature',
    wrong: [
      miss('A delighter (attractive) feature', 'Delighters are the opposite: absent, no one misses them; present, they create delight. A must-be can only avoid dissatisfaction, never delight.', 'Delighters surprise upward; must-be features only prevent anger.'),
      miss('A performance (one-dimensional) feature', 'Performance features scale satisfaction linearly with how much you provide. A must-be caps at neutral no matter how well done.', 'Performance scales up with more; must-be just clears a floor.'),
      miss('An indifferent feature that customers do not care about either way', 'Indifferent features move satisfaction in neither direction. A must-be strongly drives dissatisfaction when missing, so it is not indifferent.', 'Indifferent means no effect either way; must-be punishes absence.'),
    ],
    lesson: 'Kano: must-be (basic) features prevent dissatisfaction but never delight (reliable brakes); performance features scale satisfaction with quantity (battery life); delighters surprise upward when present and are not missed when absent. Knowing the type guides investment.',
    source,
    generated: true,
  },
  {
    id: 7319012,
    chapter: 'Prioritization and Roadmapping',
    title: 'MoSCoW "Won\'t have"',
    prompt: 'In MoSCoW prioritization for a timeboxed release, what does the "Won\'t have" category mean?',
    correct: 'Items the team has explicitly agreed to exclude from this delivery timebox',
    wrong: [
      miss('Items that are technically impossible to ever build', 'Won\'t-have is about this timebox, not permanent infeasibility; many won\'t-haves are deferred, not impossible.', 'It is a deliberate exclusion for now, not a statement of impossibility.'),
      miss('Items that the team forgot to estimate', 'Won\'t-have is a deliberate stakeholder agreement, not an oversight. Forgotten items are a process failure, not a MoSCoW category.', 'It is an explicit agreed exclusion, not an accident.'),
      miss('Items that must ship but only if there is leftover time', 'That description matches "Could have" (nice-to-haves if time permits). Won\'t-have is excluded from this timebox entirely.', 'Could-haves are the if-time-permits bucket; Won\'t-haves are out.'),
    ],
    lesson: 'MoSCoW = Must / Should / Could / Won\'t have, scoped to a delivery timebox. "Won\'t have" is an explicit, agreed exclusion for now — it manages expectations by making the no visible, rather than letting deferred work linger as silent scope creep.',
    source,
    generated: true,
  },
  {
    id: 7319013,
    chapter: 'Prioritization and Roadmapping',
    title: 'Now-Next-Later honesty',
    prompt: 'Why do many teams prefer a now-next-later roadmap over a roadmap of precise dated feature commitments?',
    correct: 'It communicates priority and confidence honestly while avoiding false precision about distant work',
    wrong: [
      miss('Because it lets the team avoid ever being held accountable for anything', 'Now-next-later still commits to the "now" horizon; it avoids false precision on the far future, not all accountability.', 'It manages uncertainty honestly; it does not erase commitment.'),
      miss('Because stakeholders cannot read calendars and prefer vague words', 'Stakeholders read calendars fine; the issue is that distant dates are guesses presented as promises, not stakeholder literacy.', 'The problem is false precision on the future, not audience capability.'),
      miss('Because it removes the need to prioritize anything at all', 'Now-next-later is itself a prioritization: it sorts work into horizons. It does not eliminate prioritization, it expresses it.', 'The format encodes priority; it does not abolish it.'),
    ],
    lesson: 'Dated roadmaps for distant work present guesses as promises, breeding broken commitments and roadmap theater. Now-next-later conveys priority and confidence: firm on "now," directional on "later," honest that far-future dates are estimates.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 5: Metrics, Analytics, and Experimentation
  // ---------------------------------------------------------------------------
  {
    id: 7319014,
    chapter: 'Metrics, Analytics, and Experimentation',
    title: 'The peeking problem',
    prompt: 'A PM checks an A/B test five separate times and stops it the first moment p drops below 0.05. Why is this conclusion untrustworthy?',
    correct: 'Repeatedly peeking and stopping at the first significant result inflates the false-positive rate well above the intended 5%',
    wrong: [
      miss('Because p-values are meaningless and should never be used at all', 'P-values are useful when the test design is respected. The flaw is the stopping rule, not the existence of p-values.', 'The problem is optional stopping, not p-values themselves.'),
      miss('Because a p-value below 0.05 always proves the variant is better', 'It does not prove that even once; and checking repeatedly makes a spurious crossing far more likely. Significance is probabilistic.', 'Frequent checks raise the odds of a chance crossing, not certainty.'),
      miss('Because the test should have used a 0.01 threshold from the start', 'Tightening alpha does not fix peeking; repeated looks still inflate error at any fixed threshold without a correction.', 'The issue is multiple looks, which need a sequential correction, not just a stricter cutoff.'),
    ],
    lesson: 'The peeking problem: checking an experiment repeatedly and stopping at the first p < 0.05 inflates the type-I (false positive) error far above 5%. Predetermine sample size and test duration, or use a sequential-testing method designed for continuous monitoring.',
    source,
    generated: true,
  },
  {
    id: 7319015,
    chapter: 'Metrics, Analytics, and Experimentation',
    title: 'Novelty effect',
    prompt: 'A redesigned feature shows a big engagement spike in week one that fades to baseline by week three. What most likely happened?',
    correct: 'A novelty effect — users engaged because the change was new, and the lift was not durable',
    wrong: [
      miss('The redesign permanently improved engagement and should be rolled out widely', 'Permanent improvement would sustain past week one. A spike that decays to baseline is the signature of a temporary novelty bump.', 'A lift that fades to baseline is not a durable win.'),
      miss('The instrumentation broke in weeks two and three', 'Possible but not the likeliest reading of a clean rise-then-fade pattern, which is the classic novelty curve.', 'A rise-then-fade to baseline is the textbook novelty shape, not a tracking gap.'),
      miss('The sample size grew too large, which lowered engagement', 'Larger samples tighten estimates; they do not mechanically lower a real engagement rate. This pattern points to novelty.', 'Sample growth changes precision, not the underlying rate.'),
    ],
    lesson: 'The novelty effect makes users react to anything new, producing an early lift that fades as the novelty wears off. Run experiments long enough for the bump to settle before declaring a durable winner, and watch for decay back to baseline.',
    source,
    generated: true,
  },
  {
    id: 7319016,
    chapter: 'Metrics, Analytics, and Experimentation',
    title: 'NPS calculation',
    prompt: 'A survey returns 55% promoters (9-10), 30% passives (7-8), and 15% detractors (0-6). What is the Net Promoter Score?',
    correct: '40',
    wrong: [
      miss('70', '70 is promoters minus passives (55 − 30) — but NPS subtracts detractors, not passives. Passives are excluded from the subtraction.', 'NPS = %promoters − %detractors; passives drop out.'),
      miss('55', '55 is just the promoter share. NPS nets out detractors: 55 − 15 = 40, not the raw promoter percentage.', 'Subtract the detractor percentage from the promoter percentage.'),
      miss('25', '25 looks like promoters minus (passives − detractors) or a similar miscombination. The correct formula is 55 − 15 = 40.', 'Only promoters and detractors enter the formula: 55 − 15.'),
    ],
    lesson: 'NPS = %promoters (9-10) − %detractors (0-6). Passives (7-8) are counted in the totals but excluded from the subtraction. Here 55 − 15 = 40. The score ranges from −100 to +100.',
    source,
    generated: true,
  },
  {
    id: 7319017,
    chapter: 'Metrics, Analytics, and Experimentation',
    title: 'Guardrail metrics',
    prompt: 'A team sets a north-star of "weekly active creators" and adds a guardrail metric of "support tickets per active user." What is the purpose of that guardrail?',
    correct: 'To catch cases where the team boosts the north-star in ways that quietly harm users or the business',
    wrong: [
      miss('To replace the north-star metric as the new primary goal', 'A guardrail constrains the primary goal; it does not replace it. The north-star still defines success.', 'Guardrails bound the goal, not become the goal.'),
      miss('To give the support team a performance target to hit', 'A guardrail watches for harm to users, not to set departmental quotas; framing it as a support KPI misses its purpose.', 'It exists to detect collateral damage, not to grade a team.'),
      miss('To make the dashboard look more comprehensive to executives', 'Guardrails earn their place by preventing bad tradeoffs, not by decorating dashboards.', 'The function is harm-detection, not dashboard aesthetics.'),
    ],
    lesson: 'A guardrail metric protects against optimizing the headline number at the expense of users or the business — e.g., growing creators while support load explodes. Good measurement plans pair a north-star with guardrails and explicit decision rules.',
    source,
    generated: true,
  },
  {
    id: 7319018,
    chapter: 'Metrics, Analytics, and Experimentation',
    title: 'Activation aha moment',
    prompt: 'For a note-taking app, which metric best captures the "activation / aha moment" — the point where a new user first experiences core value?',
    correct: 'Percentage of new users who create and return to at least one note within the first week',
    wrong: [
      miss('Total number of accounts created this month', 'Account creation is acquisition, not activation; signing up is not the same as experiencing the core value of the product.', 'Activation is reaching value, not merely signing up.'),
      miss('Average time users spend on the marketing landing page', 'Time on a marketing page is a pre-signup acquisition signal, unrelated to whether a user reached value inside the product.', 'Look for the in-product value moment, not landing-page dwell.'),
      miss('Number of push notifications the app sends per day', 'Notifications sent is an output the team controls, not evidence a user experienced value. It can even rise while activation falls.', 'Measure the user reaching core value, not messages you send.'),
    ],
    lesson: 'Activation marks when a new user first reaches the product\'s core value (the "aha moment") — for a note app, creating and coming back to a note. It predicts retention far better than raw signups, which only measure acquisition.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 6: Requirements, Design, and Delivery Partnership
  // ---------------------------------------------------------------------------
  {
    id: 7319019,
    chapter: 'Requirements, Design, and Delivery Partnership',
    title: 'Why non-goals matter',
    prompt: 'A PRD lists detailed goals but no "non-goals" section. What is the main risk of omitting non-goals?',
    correct: 'Scope creeps because nothing explicitly states what is out of bounds for this effort',
    wrong: [
      miss('Engineers will not know which programming language to use', 'Non-goals scope the product problem, not the tech stack. Language choice is an engineering decision unaffected by a non-goals section.', 'Non-goals bound scope, not implementation details.'),
      miss('The document will be too short to look professional', 'Length is not the concern. A PRD can be short and excellent; the missing non-goals create a real scope risk, not a cosmetic one.', 'The risk is uncontrolled scope, not document size.'),
      miss('The legal team will reject the PRD for being incomplete', 'Legal review is not gated on a non-goals section. The functional harm is scope creep during delivery, not legal rejection.', 'Non-goals protect scope; they are not a legal requirement.'),
    ],
    lesson: 'Non-goals state what the team is deliberately not doing this round. Without them, every adjacent idea looks fair game and scope quietly expands, blowing estimates and diluting the learning goal. Explicit non-goals are a cheap scope-control tool.',
    source,
    generated: true,
  },
  {
    id: 7319020,
    chapter: 'Requirements, Design, and Delivery Partnership',
    title: 'Testable acceptance criteria',
    prompt: 'Which acceptance criterion is written well enough that QA and engineering can objectively verify it?',
    correct: 'When a user submits the form with an empty email field, an inline error appears within 1 second',
    wrong: [
      miss('The form should feel modern and delightful to use', '"Feel modern and delightful" is subjective and unverifiable; two reviewers could disagree forever with no objective test.', 'Acceptance criteria must be objectively checkable, not aesthetic feelings.'),
      miss('The form should work well in most situations', '"Work well" and "most situations" are undefined; there is no concrete condition or expected result to test against.', 'Specify the exact condition and observable result.'),
      miss('The form should be better than the competitor\'s form', 'Relative to an unspecified competitor benchmark, this is unbounded and unmeasurable within a story.', 'Anchor on a concrete, observable behavior, not a vague comparison.'),
    ],
    lesson: 'Good acceptance criteria are objective and testable: a specific condition, action, and observable result (often given/when/then). Subjective phrasing like "delightful" or "works well" cannot be verified, so it breeds disputes at review time.',
    source,
    generated: true,
  },
  {
    id: 7319021,
    chapter: 'Requirements, Design, and Delivery Partnership',
    title: 'Constraint changes the decision',
    prompt: 'Mid-discovery, engineering reveals that real-time sync would require a six-month infrastructure rebuild, while near-real-time (30-second) sync is trivial. What should a strong PM do?',
    correct: 'Revisit whether users actually need true real-time, since the constraint may make near-real-time the better bet',
    wrong: [
      miss('Insist on true real-time because that was the original spec', 'Treating the original spec as sacred ignores new information. A constraint that costs six months should reopen the requirement, not lock it.', 'Let a material constraint reshape the decision instead of clinging to the spec.'),
      miss('Drop the feature entirely because anything hard is not worth doing', 'Difficulty alone is not a kill criterion; the near-real-time option is cheap and may fully satisfy the user need.', 'Weigh the cheap alternative against the real user need before abandoning.'),
      miss('Ask engineering to build it secretly without telling the team', 'Hiding a six-month bet from stakeholders destroys trust and skips the value question. Constraints should be surfaced, not buried.', 'Surface the tradeoff and re-examine the requirement openly.'),
    ],
    lesson: 'Technical constraints are product information. When a constraint makes one option dramatically cheaper, the PM should reopen the user requirement — often "good enough" near-real-time beats an expensive purist rebuild. Feasibility and product scope are negotiated together.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 7: Launch, Adoption, and Learning Loops
  // ---------------------------------------------------------------------------
  {
    id: 7319022,
    chapter: 'Launch, Adoption, and Learning Loops',
    title: 'Staged rollout order',
    prompt: 'A team wants to de-risk a major release using a staged rollout. Which ordering reflects standard practice for minimizing blast radius?',
    correct: 'Internal dogfooding, then a limited beta, then a small canary (e.g., 5%), then a gradual ramp to 100%',
    wrong: [
      miss('Release to 100% of users first, then dogfood internally if problems arise', 'This inverts the point: shipping to everyone before internal testing maximizes blast radius instead of minimizing it.', 'Start narrow (internal/canary) and widen; never start at 100%.'),
      miss('Canary to 50% immediately, then dogfood, then beta', '50% is far too large for a first canary, and dogfooding should precede external exposure, not follow a half-population release.', 'Canary means a small slice first; internal testing comes before users.'),
      miss('Beta to all external users at once, skipping dogfooding and canary', 'A blanket beta to everyone is just a full launch by another name and skips the internal and small-percentage safety steps.', 'Staged rollout adds incremental gates; do not jump straight to everyone.'),
    ],
    lesson: 'Staged rollouts minimize blast radius: dogfood internally, then a small beta cohort, then a canary (often ~5%), then ramp 25/50/100% via feature flags while watching metrics. A kill switch lets you roll back instantly if a stage misbehaves.',
    source,
    generated: true,
  },
  {
    id: 7319023,
    chapter: 'Launch, Adoption, and Learning Loops',
    title: 'Launch enablement gap',
    prompt: 'A complex new feature launches with great engineering but no briefing for sales or support. What is the most likely consequence?',
    correct: 'Customers hit confusion, support and sales cannot answer questions, and adoption stalls despite a solid build',
    wrong: [
      miss('Adoption will be perfect because the feature is well engineered', 'Engineering quality does not teach a customer how or why to use a feature; without enablement, even great builds go unused.', 'A solid build still needs people who can explain and support it.'),
      miss('Sales and support do not need to know about product features', 'They are frontline interpreters of the product; uninformed, they give wrong answers and erode trust at exactly the launch moment.', 'Frontline teams must be enabled to carry a launch.'),
      miss('The feature will market itself through word of mouth automatically', 'Self-spreading is the exception, not the plan. Most launches need deliberate enablement and onboarding to reach adoption.', 'Do not assume organic spread substitutes for enablement.'),
    ],
    lesson: 'A launch is cross-functional. If sales can\'t pitch it and support can\'t troubleshoot it, customers stall regardless of build quality. Launch readiness includes enablement, onboarding, and clear first-day/first-week metrics — the build is only part of the work.',
    source,
    generated: true,
  },
])
