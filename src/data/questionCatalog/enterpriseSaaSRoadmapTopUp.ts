import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe enterpriseSaaSRoadmap top-up'

export const enterpriseSaaSRoadmapTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // ---------------------------------------------------------------------------
  // Chapter 1: Buyers, Users, and the Buying Committee
  // ---------------------------------------------------------------------------
  {
    id: 7302000,
    chapter: 'Buyers, Users, and the Buying Committee',
    title: 'Economic buyer defined',
    prompt: 'In a qualification framework like MEDDICC, who is the "economic buyer" on a deal?',
    correct: 'The person with overall authority to release the budget and approve the purchase',
    wrong: [
      miss('The end user who will log in most often', 'Heavy daily use signals adoption value, but the most frequent user rarely controls the budget line the purchase comes out of.', 'Separate who feels the pain daily from who can release the funds; the economic buyer is defined by spending authority.'),
      miss('The internal champion who advocates for you', 'A champion sells on your behalf internally but is defined by influence, not by the authority to sign off on spend.', 'A champion carries the deal; the economic buyer owns the budget decision. They are often different people.'),
      miss('The procurement officer who runs the paperwork', 'Procurement gates terms, price, and process, but it executes a decision rather than owning the budget authority behind it.', 'Procurement administers the buy; the economic buyer authorizes it. Map both, but do not conflate them.'),
    ],
    lesson: 'The economic buyer holds overall budget authority and final purchase approval. Champions provide influence and end users provide adoption evidence, but neither can release spend. Identifying the economic buyer early is core to qualifying an enterprise deal.',
    source,
    generated: true,
  },
  {
    id: 7302001,
    chapter: 'Buyers, Users, and the Buying Committee',
    title: 'Technical evaluator gate',
    prompt: 'A deal is going well with the business champion, but the customer\'s lead architect quietly believes the product cannot meet their integration standards. What role is this architect playing, and why does it matter?',
    correct: 'A technical evaluator/buyer whose unmet criteria can veto the deal even if the business champion is enthusiastic',
    wrong: [
      miss('An end user whose opinion is just personal preference', 'Treating an architect\'s integration objection as taste ignores that evaluators set pass/fail criteria the deal must clear, not optional feedback.', 'An evaluator owns technical decision criteria; their "no" is a gate, not a preference. Surface and address it directly.'),
      miss('The economic buyer, since architects control technology spend', 'Owning a technical standard is not the same as owning the budget; the architect can block on fit without holding purchase authority.', 'Technical authority blocks; budget authority approves. The architect gates the criteria, not the funds.'),
      miss('An irrelevant stakeholder once the champion is sold', 'Champions cannot override a failed technical evaluation; ignoring the architect lets the objection resurface as a late-stage blocker.', 'Champion enthusiasm cannot clear an evaluator\'s technical gate. Multi-thread to the architect before it stalls.'),
    ],
    lesson: 'In a buying committee, the technical evaluator owns the decision criteria the product must satisfy. An unaddressed technical objection can veto a deal that the business champion supports. Mapping evaluators and the evidence they need is part of full stakeholder coverage.',
    source,
    generated: true,
  },
  {
    id: 7302002,
    chapter: 'Buyers, Users, and the Buying Committee',
    title: 'Why committees grew',
    prompt: 'Enterprise B2B deals now routinely involve six to ten or more stakeholders. What does this reality imply for how a seller should run the deal?',
    correct: 'Multi-thread deliberately: map each role\'s authority and concerns, and build relationships across the committee rather than through one contact',
    wrong: [
      miss('Find the single most senior person and persuade only them', 'A single senior yes rarely survives a committee; other members can still block on security, technical fit, or budget priorities they own.', 'Seniority does not collapse a committee into one decision. Cover the roles that can independently block.'),
      miss('Move faster so fewer stakeholders have time to get involved', 'Speed that skips stakeholders leaves unaddressed objections to surface at procurement or renewal, when they are hardest to fix.', 'Outrunning the committee defers blockers, it does not remove them. Engage the roles early, not never.'),
      miss('Send the same generic deck to everyone to ensure consistency', 'One deck cannot answer a security reviewer, a CFO, and an end user at once; each role needs evidence aimed at its own decision.', 'Consistency of message is not the same as relevance. Tailor evidence to each role\'s decision criteria.'),
    ],
    lesson: 'Large buying committees mean a deal cannot rest on one relationship. Multi-threading spreads coverage across the roles that can each approve or block, and tailors evidence to each. This is the structural defense against single-threading risk.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 2: Discovery and Value Framing
  // ---------------------------------------------------------------------------
  {
    id: 7302003,
    chapter: 'Discovery and Value Framing',
    title: 'Cost of inaction',
    prompt: 'A prospect agrees the problem is real but keeps deprioritizing the project. What does strong discovery most need to establish to move it forward?',
    correct: 'The cost of inaction — what staying with the status quo costs them in money, time, or risk over a defined period',
    wrong: [
      miss('A longer list of product features they could eventually use', 'Feature breadth does not create urgency; a prospect who already agrees the problem is real is stalling on priority, not capability.', 'The blocker is urgency, not capability. Quantify what doing nothing costs, not what the product can do.'),
      miss('A lower price to make the decision feel easier', 'Discounting an unprioritized deal trains the buyer to wait for concessions and still does not answer "why now."', 'Price is not why they are stalling. A cheaper non-urgent project is still a non-urgent project.'),
      miss('A reminder that competitors are also evaluating the tool', 'Social proof can reassure but rarely overcomes a missing business case; it does not quantify their own cost of waiting.', 'Others buying it is not their reason to act now. Tie urgency to their specific cost of inaction.'),
    ],
    lesson: 'When a prospect agrees the problem matters but never acts, the missing piece is usually urgency. Quantifying the cost of inaction — the ongoing loss from the status quo — converts an agreed problem into a prioritized decision. Features and price rarely fix a "why now" gap.',
    source,
    generated: true,
  },
  {
    id: 7302004,
    chapter: 'Discovery and Value Framing',
    title: 'Implicating the pain',
    prompt: 'In qualification terms, what does it mean to move from "identifying" pain to "implicating" the pain during discovery?',
    correct: 'Connecting the pain to its business consequences so the buyer feels what it costs and why solving it matters',
    wrong: [
      miss('Listing every product feature that touches the painful area', 'Mapping features to a symptom is the vendor\'s job, not implication; it does not make the buyer feel the consequence of the problem.', 'Implication is about consequence, not coverage. Make the cost felt, do not catalog features.'),
      miss('Confirming the pain exists and then moving on to pricing', 'Simply confirming a pain exists is identification; jumping to price skips the step that builds the urgency to pay.', 'Confirming pain is only the first step. Implicating it means drawing out what it costs before talking price.'),
      miss('Telling the buyer the pain is more serious than they realize', 'Asserting severity is not the same as drawing it out; implication works through the buyer\'s own articulation of consequences, not the seller\'s claims.', 'Implication comes from the buyer naming the consequences, not the seller insisting on them.'),
    ],
    lesson: 'Identifying pain confirms a problem exists. Implicating it draws out the downstream business consequences — the lost revenue, wasted time, or risk — so the buyer feels the stakes. Implicated pain is what justifies acting and paying, which is why discovery should reach it, not stop at the symptom.',
    source,
    generated: true,
  },
  {
    id: 7302005,
    chapter: 'Discovery and Value Framing',
    title: 'Success criteria ownership',
    prompt: 'During discovery, a buyer says "we\'ll know it worked when things feel better." What should the seller do with this?',
    correct: 'Press for specific, measurable success criteria tied to a business outcome the buyer will be accountable for',
    wrong: [
      miss('Accept it and write "improved experience" as the success metric', 'A vague, unmeasurable goal cannot be defended at renewal; "feels better" gives the buyer no evidence to justify continued spend.', 'Unmeasurable success cannot be proven later. Convert the feeling into a number the buyer will own.'),
      miss('Define the success criteria yourself based on typical customers', 'Seller-defined criteria the buyer never agreed to will be disowned at renewal; success criteria must be the buyer\'s, not the vendor\'s.', 'If the buyer did not set the bar, they will not honor it. Co-author measurable criteria with them.'),
      miss('Treat the signed contract as success enough for now', 'Closing without agreed success criteria sets up an impossible-to-prove renewal and a customer success team with no target.', 'Skipping the target dooms the renewal conversation. Define what success means before signing.'),
    ],
    lesson: 'Vague success language ("feels better") gives no defensible basis for renewal. The seller should press for measurable criteria tied to a business outcome the buyer will own, so customer success has a target and the renewal has evidence. Criteria the buyer authors are the ones that hold.',
    source,
    generated: true,
  },
  {
    id: 7302006,
    chapter: 'Discovery and Value Framing',
    title: 'Outcome vs activity metric',
    prompt: 'Which of these is an outcome metric appropriate for a buyer\'s business case, rather than an activity metric?',
    correct: 'Reduction in average claim-processing time from 9 days to 4 days',
    wrong: [
      miss('Number of users who logged in this month', 'Login counts measure activity, not the business result the buyer bought; an executive cannot defend renewal on access frequency.', 'Logins show usage, not value delivered. The business case needs the result, not the activity.'),
      miss('Total number of reports generated in the platform', 'Report volume is an engagement signal, not a business outcome; generating more reports does not prove anything improved.', 'More reports is activity. Ask what business number the reports actually moved.'),
      miss('Number of support tickets the customer filed', 'Ticket count reflects support burden and engagement, not value; it is a health signal, not a defensible outcome metric.', 'Tickets measure friction, not value. The buyer\'s case rests on a business outcome that changed.'),
    ],
    lesson: 'Outcome metrics describe a business result the buyer bought — faster processing, lower cost, higher revenue. Activity metrics (logins, reports, tickets) describe usage and can support an outcome but cannot replace it. A renewal case is built on outcomes, with activity as supporting evidence.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 3: Commercial Models, Pricing, and Go-to-Market Motion
  // ---------------------------------------------------------------------------
  {
    id: 7302007,
    chapter: 'Commercial Models, Pricing, and Go-to-Market Motion',
    title: 'PLG defined',
    prompt: 'What most accurately describes a product-led growth (PLG) motion?',
    correct: 'The product itself drives acquisition, activation, and expansion, with users able to start and find value without talking to sales',
    wrong: [
      miss('A motion where a salesperson guides every prospect from first contact to signature', 'That describes sales-led growth; PLG is defined precisely by letting users self-serve into value before any sales conversation.', 'You have described sales-led growth. PLG lets the product, not a rep, do the early work.'),
      miss('A pricing strategy where the product is always free', 'Free tiers are a tactic within PLG, not its definition; most PLG companies monetize through paid tiers, usage, or seats after activation.', 'Free is one on-ramp, not the definition. PLG is about the product driving the funnel, paid or not.'),
      miss('A marketing approach focused on advertising the product heavily', 'Heavy advertising is demand generation, which any motion can use; PLG is specifically about the product driving conversion and expansion.', 'Advertising fills the top of the funnel. PLG is about the product converting and expanding users itself.'),
    ],
    lesson: 'Product-led growth makes the product the primary engine of acquisition, activation, conversion, and expansion, letting users reach value before talking to sales. Free tiers and ads are tactics, not the definition. PLG contrasts with sales-led growth, where reps drive the deal.',
    source,
    generated: true,
  },
  {
    id: 7302008,
    chapter: 'Commercial Models, Pricing, and Go-to-Market Motion',
    title: 'Motion by segment',
    prompt: 'A capital-efficient SaaS company often runs different go-to-market motions for different customer segments. Which pairing is most typical?',
    correct: 'Self-serve for SMB, sales-assisted for mid-market, and a full enterprise sales motion for strategic accounts',
    wrong: [
      miss('A full enterprise sales team for every segment including SMB', 'Putting expensive enterprise reps on low-ACV SMB deals destroys unit economics; the cost to acquire exceeds what those accounts are worth.', 'Enterprise reps on SMB deals burn the economics. Match motion cost to account value.'),
      miss('Pure self-serve for every segment including strategic enterprise', 'Strategic enterprise deals need committee navigation, security review, and custom terms that self-serve cannot handle; pure self-serve leaves large deals unwon.', 'Self-serve cannot navigate an enterprise committee or security review. Big deals need a sales motion.'),
      miss('The same hybrid pricing page for all segments with no human involvement', 'A single pricing page cannot replace the deal desk, security, and procurement work that large accounts require; segments differ in what they need to buy.', 'One pricing page does not close enterprise deals. Different segments need different motions.'),
    ],
    lesson: 'Capital-efficient SaaS matches the cost of the motion to the value of the account: self-serve for SMB, sales-assist for mid-market, and a full sales motion for strategic enterprise. Using one motion for all segments either overspends on small deals or underserves large ones.',
    source,
    generated: true,
  },
  {
    id: 7302009,
    chapter: 'Commercial Models, Pricing, and Go-to-Market Motion',
    title: 'Usage-based vs seat pricing',
    prompt: 'A platform charges by volume consumed rather than per seat. What is a key revenue characteristic of this usage-based model versus seat-based pricing?',
    correct: 'Revenue expands and contracts with how much the customer actually uses, so it can grow without new seats but is more sensitive to usage downturns',
    wrong: [
      miss('It guarantees more predictable revenue than seat-based pricing', 'Usage revenue moves with consumption, making it less predictable than fixed seat counts; a customer slowdown immediately reduces revenue.', 'Usage tracks consumption, so it is less predictable, not more. Seats are the steadier line.'),
      miss('It removes any need to drive product adoption', 'Usage-based revenue depends entirely on adoption; if customers use less, you earn less, so driving usage matters more, not less.', 'Usage pricing makes adoption the revenue. Lower usage means lower revenue, directly.'),
      miss('It only ever increases and cannot contract', 'Usage can fall as well as rise; a customer that reduces volume directly reduces your revenue with no contract floor unless one is negotiated.', 'Usage cuts both ways. Without a minimum commitment, revenue can shrink when usage does.'),
    ],
    lesson: 'Usage-based pricing ties revenue to consumption, so it can expand without selling new seats but contracts when usage falls and is less predictable than seat-based pricing. It makes driving adoption directly revenue-relevant. Minimum commitments are often used to add a revenue floor.',
    source,
    generated: true,
  },
  {
    id: 7302010,
    chapter: 'Commercial Models, Pricing, and Go-to-Market Motion',
    title: 'Land and expand logic',
    prompt: 'A vendor wins a small initial deal for one team and later grows it across the enterprise. What makes a land-and-expand strategy work?',
    correct: 'The initial landing delivers real value quickly, creating proof and internal advocates that justify expansion to new teams or products',
    wrong: [
      miss('Signing the smallest possible deal and then aggressively upselling regardless of results', 'Pushing expansion before the first deal delivers value produces resistance and churn; expansion rides on proven value, not pressure.', 'Expansion follows proof, not pressure. A landing that did not deliver cannot be expanded.'),
      miss('Discounting the initial deal so heavily that price drives the land', 'A deep discount that ignores value teaches the buyer to expect cheap and does not create the adoption proof expansion depends on.', 'Price-driven landings do not create advocates. The land must prove value, not just be cheap.'),
      miss('Avoiding any contact with the customer after the initial sale to seem low-pressure', 'Expansion requires active customer success to surface adoption and new use cases; going silent forfeits the signals that drive the next deal.', 'Land-and-expand is high-touch on value, not absent. Silence forfeits the expansion path.'),
    ],
    lesson: 'Land-and-expand works when the first deal delivers value fast, creating proof and internal advocates that justify growing to new teams, seats, or products. Expansion is earned by realized value, not forced by upsell pressure or deep discounts, and it depends on active customer success.',
    source,
    generated: true,
  },
  {
    id: 7302011,
    chapter: 'Commercial Models, Pricing, and Go-to-Market Motion',
    title: 'Hybrid pricing rationale',
    prompt: 'Many SaaS companies now combine a base seat or platform fee with a usage component. What problem does this hybrid pricing most directly solve?',
    correct: 'It pairs predictable baseline revenue with upside that scales as customers get more value from the product',
    wrong: [
      miss('It makes the product cheaper for every customer', 'Hybrid pricing is about aligning price with value and revenue stability, not about being uniformly cheaper; heavy users may pay more.', 'Hybrid is about value alignment, not lower prices. Heavy users often pay more, not less.'),
      miss('It eliminates the need to forecast revenue', 'A base fee aids forecasting but the usage component still varies; hybrid pricing improves the forecast floor, it does not remove forecasting.', 'The usage part still varies. Hybrid gives a floor to forecast from, not a fixed total.'),
      miss('It removes the customer\'s incentive to limit usage', 'Usage components can actually make customers watch consumption; the point is aligning price to value, not encouraging unlimited use.', 'Usage charges can make customers cost-conscious. The goal is value alignment, not unlimited use.'),
    ],
    lesson: 'Hybrid pricing combines a predictable base (seat or platform fee) with a usage component that scales with value delivered. It gives the vendor a revenue floor for forecasting plus upside as customers expand usage, which is why hybrid models are an increasingly common SaaS structure.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 4: Implementation, Onboarding, and Enablement
  // ---------------------------------------------------------------------------
  {
    id: 7302012,
    chapter: 'Implementation, Onboarding, and Enablement',
    title: 'Time-to-value as leading indicator',
    prompt: 'Why do experienced customer success teams treat time-to-value (TTV) as a leading indicator of retention?',
    correct: 'Customers who reach their first meaningful value quickly are more likely to adopt and renew; those who stall early are more likely to churn',
    wrong: [
      miss('Because faster onboarding always means a larger contract', 'TTV predicts retention through early adoption, not deal size; a fast onboarding does not change the contract value already signed.', 'TTV forecasts retention, not contract size. Speed to value predicts whether they stay, not how much they pay.'),
      miss('Because it measures how much the support team enjoys the account', 'TTV is about when the customer realizes value, not internal sentiment; it is a customer outcome, not a team morale metric.', 'TTV is a customer outcome, not an internal feeling. It tracks when value lands for the buyer.'),
      miss('Because a long time-to-value proves the product is sophisticated', 'A long TTV is a churn risk, not a badge of sophistication; the longer value takes, the more likely the customer disengages first.', 'Slow value is a risk, not a feature. Long TTV correlates with churn, not quality.'),
    ],
    lesson: 'Time-to-value is the time until a customer reaches their first meaningful win. It is a leading indicator because customers who get there fast tend to adopt and renew, while those who stall early disproportionately churn. Compressing TTV in onboarding is therefore a retention lever.',
    source,
    generated: true,
  },
  {
    id: 7302013,
    chapter: 'Implementation, Onboarding, and Enablement',
    title: 'Mutual action plan purpose',
    prompt: 'At implementation kickoff, the team proposes a mutual action plan (MAP) shared with the customer. What is its main purpose?',
    correct: 'To make every milestone, owner, dependency, and date explicit and jointly owned so the go-live does not silently slip',
    wrong: [
      miss('To document only the vendor\'s tasks so the customer is not burdened', 'A plan that omits customer-owned tasks hides the dependencies (data, access, sign-off) that most often cause delays.', 'The customer owns critical tasks too. A one-sided plan hides the dependencies that slip the date.'),
      miss('To replace the contract with a more flexible agreement', 'A MAP coordinates execution; it is not a legal instrument and does not change the signed terms or commercial obligations.', 'A MAP plans the work, it does not alter the contract. Keep execution and legal terms separate.'),
      miss('To give the customer a single deadline with no intermediate steps', 'A lone end date with no milestones offers no early warning; the value of a MAP is the intermediate checkpoints and owners.', 'One far-off date warns you of nothing. The point is the milestones and owners in between.'),
    ],
    lesson: 'A mutual action plan lays out milestones, owners, dependencies, and dates that both vendor and customer commit to. It exposes customer-owned tasks (data, access, approvals) early and gives intermediate checkpoints, so slippage is visible in time to correct rather than discovered at go-live.',
    source,
    generated: true,
  },
  {
    id: 7302014,
    chapter: 'Implementation, Onboarding, and Enablement',
    title: 'SSO and SAML dependency',
    prompt: 'A customer requires single sign-on via their identity provider before any employee can log in. How should implementation treat this SSO/SAML setup?',
    correct: 'As a critical-path dependency owned jointly with the customer\'s IT, scheduled early because it blocks all user access',
    wrong: [
      miss('As a minor configuration the customer can do anytime after launch', 'If SSO is required for login, it is not optional or deferrable; treating it as post-launch leaves users locked out at go-live.', 'If login requires SSO, it cannot wait until after launch. It is on the critical path.'),
      miss('As entirely the vendor\'s responsibility with no customer involvement', 'SSO depends on the customer\'s identity provider and IT team; the vendor cannot configure their IdP alone, so it must be jointly owned.', 'SSO sits on the customer\'s IdP. The vendor cannot finish it without their IT in the loop.'),
      miss('As something to skip if the timeline gets tight', 'Skipping a required login mechanism does not save time; it prevents launch entirely, since no one can access the product.', 'You cannot skip the front door. No SSO means no logins, which means no launch.'),
    ],
    lesson: 'When SSO/SAML is required for access, it is a critical-path dependency: nothing works until it is configured, and it relies on the customer\'s identity provider and IT. It must be scheduled early and owned jointly. Integrations like this are among the most common causes of late go-lives.',
    source,
    generated: true,
  },
  {
    id: 7302015,
    chapter: 'Implementation, Onboarding, and Enablement',
    title: 'Enablement vs training scope',
    prompt: 'A rollout includes end-user training sessions, but adoption still lags afterward. What does a fuller enablement approach add beyond one-time training?',
    correct: 'Ongoing materials, in-context guidance, role-specific workflows, and reinforcement so users can apply the tool in their actual jobs over time',
    wrong: [
      miss('More live training sessions covering the same content again', 'Repeating the same general session does not address why users could not apply it to their workflow; volume is not the missing ingredient.', 'Repeating generic training does not fix workflow fit. Enablement embeds the tool in real jobs.'),
      miss('A longer feature manual covering every capability', 'An exhaustive feature reference overwhelms users and still does not show them their specific workflow; coverage is not the same as enablement.', 'A bigger manual is more to ignore. Users need their workflow, not every feature.'),
      miss('Removing training entirely so users learn by trial and error', 'Pure trial-and-error slows time-to-value and risks bad habits; enablement is more structured support, not less.', 'Less support slows value, not speeds it. Enablement adds structure, it does not remove it.'),
    ],
    lesson: 'One-time training teaches features; enablement helps users apply them to their actual work over time through role-specific workflows, in-context guidance, reference materials, and reinforcement. Lagging adoption after training usually signals a workflow-fit and reinforcement gap, not a need to repeat the same session.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 5: Security, Compliance, and Procurement Gates
  // ---------------------------------------------------------------------------
  {
    id: 7302016,
    chapter: 'Security, Compliance, and Procurement Gates',
    title: 'SOC 2 Type I vs Type II',
    prompt: 'An enterprise buyer\'s security team asks for a SOC 2 Type II report. How does this differ from a Type I report?',
    correct: 'Type II tests that controls operated effectively over a period (typically 6-12 months); Type I only assesses control design at a single point in time',
    wrong: [
      miss('Type I covers more controls than Type II', 'The difference is not the number of controls but the testing window; Type II adds operating effectiveness over time on top of design.', 'It is about time, not control count. Type II proves the controls actually ran over months.'),
      miss('Type II is a point-in-time snapshot and Type I covers a period', 'This reverses the two: Type I is the point-in-time design assessment, while Type II is the over-time operating-effectiveness audit.', 'You have them backwards. Type I is the snapshot; Type II covers the period.'),
      miss('They are identical reports with different names', 'They provide different levels of assurance; Type II gives stronger evidence because it verifies controls worked over months, not just on paper.', 'They are not the same. Type II is the harder, higher-assurance audit over time.'),
    ],
    lesson: 'A SOC 2 Type I report assesses whether controls are suitably designed at a single point in time. A Type II report tests whether those controls actually operated effectively over a period of roughly 6-12 months, providing stronger assurance. Enterprise buyers commonly require Type II.',
    source,
    generated: true,
  },
  {
    id: 7302017,
    chapter: 'Security, Compliance, and Procurement Gates',
    title: 'DPA and controller/processor',
    prompt: 'Under GDPR, a SaaS vendor processes personal data on behalf of its customer. What does the Data Processing Agreement (DPA) primarily establish?',
    correct: 'The obligations and responsibilities between the customer as data controller and the vendor as data processor for handling personal data',
    wrong: [
      miss('That the vendor owns the customer\'s data once it is uploaded', 'A DPA does the opposite: it confirms the customer (controller) retains control and defines the processor\'s limited, instructed role; the vendor does not own the data.', 'A DPA constrains the processor, it does not transfer ownership. The controller keeps control of the data.'),
      miss('A pricing schedule for data storage and processing fees', 'A DPA is a data-protection instrument, not a commercial price list; fees live in the order form or MSA, not the DPA.', 'The DPA governs data handling, not price. Pricing belongs in the order form, not here.'),
      miss('That GDPR no longer applies because an agreement now exists', 'A DPA is required to comply with GDPR; signing one does not exempt anyone from the regulation, it operationalizes it.', 'A DPA implements GDPR, it does not switch it off. It exists because the regulation requires it.'),
    ],
    lesson: 'A Data Processing Agreement defines the responsibilities between the data controller (the customer, who decides why and how data is processed) and the data processor (the vendor, acting on instructions). GDPR requires controllers to have written DPAs with processors; it sets terms, it does not transfer ownership or remove regulatory duties.',
    source,
    generated: true,
  },
  {
    id: 7302018,
    chapter: 'Security, Compliance, and Procurement Gates',
    title: 'Sub-processor disclosure',
    prompt: 'A customer\'s security review asks the vendor to list its sub-processors. Why does this matter to the customer?',
    correct: 'Sub-processors are third parties the vendor uses to process the customer\'s data, and the customer must assess and track that downstream data exposure',
    wrong: [
      miss('Sub-processors are the customer\'s own internal teams', 'Sub-processors are the vendor\'s third-party vendors, not the customer\'s staff; the question is about the customer\'s data going further down the chain.', 'Sub-processors are the vendor\'s vendors, not the customer\'s teams. The concern is downstream data exposure.'),
      miss('Sub-processors are irrelevant once a DPA is signed', 'The DPA is exactly what governs sub-processors; disclosure and approval rights over them are a core part of why the customer cares.', 'The DPA is why sub-processors matter. It governs the chain the customer must oversee.'),
      miss('Listing them is a formality with no bearing on data protection', 'Each sub-processor is a place the customer\'s data lives; the customer\'s GDPR and risk obligations extend to that chain, so it is substantive.', 'Each sub-processor holds the customer\'s data. Their obligations follow the data down the chain.'),
    ],
    lesson: 'Sub-processors are the third parties a vendor relies on to process customer data (hosting, analytics, support tooling). Customers must know and assess them because their own data-protection obligations extend down the chain. DPAs typically require sub-processor disclosure and sometimes approval or notice of changes.',
    source,
    generated: true,
  },
  {
    id: 7302019,
    chapter: 'Security, Compliance, and Procurement Gates',
    title: 'Sequencing security review',
    prompt: 'A large deal is on track to close at quarter-end, but the security questionnaire and DPA redlines have not started. What is the disciplined move?',
    correct: 'Start security and legal review in parallel as early as possible, since they are common gating steps that routinely run longer than expected',
    wrong: [
      miss('Wait until the commercial terms are fully signed, then begin security review', 'Sequencing security after signature stalls go-live and can reopen the deal if reviewers reject controls; these reviews must run alongside, not after, the deal.', 'Security after signing can unravel the deal. Run it in parallel so it is not the last surprise.'),
      miss('Give the buyer verbal assurance that the product is secure', 'Enterprise security teams require evidence (reports, completed questionnaires), not assurances; a verbal claim does not clear their gate.', 'Verbal assurance does not pass a security gate. Reviewers need documented evidence.'),
      miss('Treat legal redlines as routine paperwork to finish on the final day', 'DPA and MSA redlines frequently surface negotiation on liability, data terms, and SLAs; assuming they are trivial is how deals slip past quarter-end.', 'Redlines are rarely trivial. Last-day legal is the classic reason a deal misses the quarter.'),
    ],
    lesson: 'Security questionnaires and legal redlines (DPA, MSA, SLA) are standard enterprise gates that often take longer than expected and can block or even reopen a deal. The disciplined move is to start them early and in parallel with commercial negotiation, not defer them to the end of the cycle.',
    source,
    generated: true,
  },
  {
    id: 7302020,
    chapter: 'Security, Compliance, and Procurement Gates',
    title: 'Data residency requirement',
    prompt: 'A European customer requires that their data be stored only within the EU. What is this requirement called, and how should the vendor handle it?',
    correct: 'It is a data residency requirement; the vendor must confirm hosting region and document it in the contract/DPA rather than assume defaults are acceptable',
    wrong: [
      miss('It is a feature request that can be addressed in a future release', 'Data residency is a compliance constraint, not a roadmap nicety; the customer often cannot legally proceed without it, so "later" can kill the deal.', 'Residency is a compliance gate, not a feature wish. "Later" may mean "never buys."'),
      miss('It is satisfied automatically as long as the company is headquartered in the EU', 'Where the company is incorporated does not determine where data is physically stored; residency is about data location and hosting region, not corporate HQ.', 'HQ location does not equal data location. Residency is about where the data physically sits.'),
      miss('It is the same thing as encrypting data in transit', 'Encryption protects data but does not control where it is stored; residency is specifically about geographic storage location, a separate control.', 'Encryption is not location. Residency governs the storage region, not the cipher.'),
    ],
    lesson: 'Data residency is a requirement that data be stored within a specified geography (e.g., the EU). It is a compliance constraint, not a feature request, and is distinct from encryption. The vendor must confirm the actual hosting region and capture the commitment in the contract or DPA, because many customers cannot proceed without it.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 6: Customer Health, Renewal Risk, and Churn
  // ---------------------------------------------------------------------------
  {
    id: 7302021,
    chapter: 'Customer Health, Renewal Risk, and Churn',
    title: 'Logo churn vs revenue churn',
    prompt: 'A SaaS company lost 5% of its customers (logos) last quarter but only 1% of its revenue. What does this gap most likely indicate?',
    correct: 'The customers it lost were small accounts, so the revenue impact was smaller than the count of departures suggests',
    wrong: [
      miss('A data error, since logo churn and revenue churn must always match', 'They are different metrics measuring different things (count vs. dollars) and routinely diverge; a gap is expected, not an error.', 'These metrics measure different things and normally differ. A gap is information, not a bug.'),
      miss('That the company gained revenue from the customers it lost', 'Churned customers by definition stop contributing revenue; the small revenue impact means small accounts left, not that lost accounts added revenue.', 'Lost customers do not add revenue. The small dollar impact means the lost logos were small.'),
      miss('That expansion revenue exactly offset every lost customer', 'Logo and gross revenue churn both exclude expansion; expansion would show up in net retention, not in why these two churn figures differ.', 'Expansion lives in net retention, not here. The gap reflects the size of the accounts lost.'),
    ],
    lesson: 'Logo churn counts customers lost; revenue churn measures dollars lost. When logo churn exceeds revenue churn, the departing accounts were smaller than average. Tracking both prevents a misleading picture: losing many small accounts and losing a few large ones look very different in revenue terms.',
    source,
    generated: true,
  },
  {
    id: 7302022,
    chapter: 'Customer Health, Renewal Risk, and Churn',
    title: 'What a health score combines',
    prompt: 'A customer success team builds a composite customer health score. Which combination of inputs makes the score most predictive?',
    correct: 'Product usage and feature adoption, support burden, relationship/engagement signals, and financial/contract indicators together',
    wrong: [
      miss('Only the number of logins per week', 'Login frequency alone is a thin proxy; a customer can log in regularly while value, sentiment, and the sponsor relationship all decay.', 'One usage signal misses sentiment, support, and relationship risk. Health needs several inputs.'),
      miss('Only the customer\'s NPS survey response', 'A single survey is a lagging, sparse signal; it misses real usage behavior and contract risk that often move before sentiment does.', 'A lone survey is sparse and lagging. Combine it with behavior and contract signals.'),
      miss('Only whether the last invoice was paid on time', 'Payment status is one financial signal but says nothing about adoption or relationship; a customer can pay while quietly disengaging before renewal.', 'Paying on time is not using the product. Adoption can decline while invoices still clear.'),
    ],
    lesson: 'A predictive health score blends several categories: product usage and adoption, support patterns, relationship and engagement signals, and financial/contract indicators. Any single input — logins, NPS, or payment — can look fine while another dimension is failing, so composite scoring catches risk earlier.',
    source,
    generated: true,
  },
  {
    id: 7302023,
    chapter: 'Customer Health, Renewal Risk, and Churn',
    title: 'QBR purpose',
    prompt: 'What is the primary purpose of a Quarterly Business Review (QBR) with an enterprise customer?',
    correct: 'To review the value the product has delivered against the customer\'s goals, align on next quarter\'s objectives, and surface risks and opportunities',
    wrong: [
      miss('To deliver a product roadmap presentation and demo new features', 'A feature showcase is vendor-centric; a QBR is anchored on the customer\'s outcomes and goals, with roadmap as a supporting input at most.', 'A QBR is about the customer\'s results, not a feature demo. Lead with value delivered.'),
      miss('To renegotiate pricing every three months', 'A QBR is a value and alignment meeting, not a recurring price negotiation; treating it as such erodes trust and misses its purpose.', 'A QBR builds the value case, it is not a quarterly price fight. Save negotiation for renewal.'),
      miss('To collect overdue invoices from the customer', 'Collections is a finance function; a QBR is a strategic value-alignment meeting, and using it for billing undermines the relationship.', 'Collections is finance, not the QBR. The QBR aligns on value and goals.'),
    ],
    lesson: 'A QBR reviews delivered value against the customer\'s goals, aligns on the coming quarter, and surfaces risks and expansion opportunities. It builds the evidence and relationship that support renewal. It is not a feature demo, a price negotiation, or a collections call.',
    source,
    generated: true,
  },
  {
    id: 7302024,
    chapter: 'Customer Health, Renewal Risk, and Churn',
    title: 'Renewal leverage timing',
    prompt: 'A customer\'s usage has been declining and the renewal is 90 days out. Why does waiting until the renewal date to act badly hurt the account team?',
    correct: 'As the renewal date approaches, leverage shifts to the customer; intervening early leaves time to re-establish value while the team still has standing',
    wrong: [
      miss('Because the contract automatically cancels if no one acts before the date', 'Auto-renewal clauses often keep the contract going; the real problem is lost leverage and an unaddressed value gap, not automatic cancellation.', 'The risk is lost leverage, not auto-cancellation. Act early to rebuild value while you still can.'),
      miss('Because the team cannot change pricing once the renewal date is set', 'Pricing can still be discussed at renewal; the deeper issue is that a last-minute scramble cannot rebuild value or trust in time.', 'Price is still negotiable late; value is not rebuildable in days. Start the recovery early.'),
      miss('It does not hurt them, since renewals are a formality for existing customers', 'Renewal is a fresh purchase decision, not a formality; a declining-usage account can and does churn at renewal if value is not re-established.', 'Renewal is a new decision, not a rubber stamp. Declining usage is a churn signal to act on now.'),
    ],
    lesson: 'A renewal is a fresh purchase decision. As the date nears, negotiating leverage moves to the customer and there is little time to rebuild value or trust. Acting on a usage decline 90 days out — while the team still has standing — is far more effective than a last-minute intervention.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 7: Expansion and the SaaS Metrics That Score You
  // ---------------------------------------------------------------------------
  {
    id: 7302025,
    chapter: 'Expansion and the SaaS Metrics That Score You',
    title: 'Why NRR can exceed 100%',
    prompt: 'A SaaS company reports net revenue retention (NRR) of 118%. How is it possible for NRR to exceed 100%?',
    correct: 'NRR includes expansion revenue (upsell, cross-sell, seat or usage growth), which can outweigh churn and downgrades from the existing base',
    wrong: [
      miss('Because NRR counts revenue from brand-new customers acquired this year', 'NRR measures the existing cohort only; new-customer revenue is excluded by definition, so new logos are not why it exceeds 100%.', 'NRR tracks the existing base, not new logos. Expansion within that base is what lifts it past 100%.'),
      miss('Because the company simply raised list prices for new prospects', 'NRR reflects the existing customer base; pricing for new prospects does not enter the calculation, and a list-price change is not expansion revenue from the cohort.', 'New-prospect pricing is outside NRR. It is expansion in the existing base that pushes NRR up.'),
      miss('It is not possible; NRR is capped at 100% like gross retention', 'That describes GRR, which cannot exceed 100%; NRR can because it adds expansion on top of the retained base.', 'You are describing GRR. NRR adds expansion, so it can and often does exceed 100%.'),
    ],
    lesson: 'Net revenue retention measures revenue from the existing customer base over time, including expansion (upsell, cross-sell, seat/usage growth) and subtracting churn and downgrades. Because expansion can outweigh losses, NRR can exceed 100%. It excludes new-customer revenue, which is what distinguishes it from total growth.',
    source,
    generated: true,
  },
  {
    id: 7302026,
    chapter: 'Expansion and the SaaS Metrics That Score You',
    title: 'GRR ceiling',
    prompt: 'Why can gross revenue retention (GRR) never exceed 100%, while NRR can?',
    correct: 'GRR excludes expansion entirely and only measures how much of the starting revenue was retained after churn and downgrades, so the best case is keeping all of it',
    wrong: [
      miss('Because GRR includes expansion but caps it at 100%', 'GRR specifically excludes expansion; there is no capped expansion component, which is exactly why it cannot exceed the starting base.', 'GRR has no expansion at all. With nothing added, retaining everything is the 100% ceiling.'),
      miss('Because GRR only counts new customers, who cannot churn yet', 'GRR measures the existing starting base, not new customers; the ceiling comes from excluding expansion, not from who is counted.', 'GRR is about the existing base, not new logos. The ceiling is the absence of expansion.'),
      miss('Because regulators cap reported GRR at 100% for SaaS companies', 'There is no regulatory cap; the 100% ceiling is arithmetic — without expansion, you cannot retain more than you started with.', 'It is math, not regulation. With no expansion added, you cannot exceed the starting revenue.'),
    ],
    lesson: 'Gross revenue retention measures the share of starting revenue retained after churn and downgrades, with no expansion added. The arithmetic best case is losing nothing, so GRR is capped at 100%. NRR adds expansion on top, which is why it can exceed 100%. Reading them together separates underlying churn from expansion.',
    source,
    generated: true,
  },
  {
    id: 7302027,
    chapter: 'Expansion and the SaaS Metrics That Score You',
    title: 'NRR hiding churn',
    prompt: 'Company A reports NRR of 110% and GRR of 80%. Company B reports NRR of 110% and GRR of 95%. What does the GRR gap reveal?',
    correct: 'Company A is losing more of its base to churn and downgrades and masking it with heavy expansion, so its retention is riskier than NRR alone suggests',
    wrong: [
      miss('Both companies are equally healthy because their NRR is identical', 'Identical NRR hides very different churn; A only reaches 110% by expanding hard to offset large losses, which is a more fragile position.', 'Equal NRR can hide unequal churn. The lower GRR shows A is leaking and patching with expansion.'),
      miss('Company A is healthier because higher expansion means a better product', 'Heavy expansion offsetting heavy churn is not a sign of strength; it means the base is leaking, and expansion may not always cover it.', 'Big expansion masking big churn is not strength. A leaking base is the warning, not the win.'),
      miss('GRR differences are irrelevant once NRR is above 100%', 'GRR is exactly what NRR can hide; ignoring it misses that A\'s underlying base is far less stable than B\'s.', 'GRR is what NRR conceals. Below-par GRR signals churn that strong NRR papered over.'),
    ],
    lesson: 'Two companies can show identical NRR while one has far weaker GRR. A low GRR means heavy churn and downgrades that are being masked by aggressive expansion. That is riskier than steady retention, because if expansion slows, the leak is exposed. Always read NRR alongside GRR.',
    source,
    generated: true,
  },
  {
    id: 7302028,
    chapter: 'Expansion and the SaaS Metrics That Score You',
    title: 'CAC payback interpretation',
    prompt: 'A B2B SaaS company has a CAC payback period of 20 months. How should this be interpreted for an enterprise-focused business?',
    correct: 'Acceptable for enterprise if customer lifetimes are long, since it still recovers acquisition cost, but it warrants watching against retention',
    wrong: [
      miss('Excellent and best-in-class regardless of segment', 'Sub-12-month payback is the strong band; 20 months is in the acceptable-for-enterprise range, not best-in-class, and depends on long retention.', '20 months is acceptable, not elite. Strong payback is under a year; this needs long lifetimes to justify.'),
      miss('A clear failure that means the company should stop acquiring customers', 'Around 18-24 months is acceptable for enterprise businesses with long lifetimes; it is a number to monitor, not an automatic shutdown signal.', 'Enterprise tolerates longer payback if retention is long. 20 months is watch-worthy, not fatal.'),
      miss('Irrelevant because CAC payback does not apply to enterprise SaaS', 'CAC payback applies across SaaS; for enterprise it is read against long retention, which makes longer paybacks more tolerable, not the metric inapplicable.', 'CAC payback applies everywhere. For enterprise you simply weigh it against longer retention.'),
    ],
    lesson: 'CAC payback is the months to recover acquisition cost from a customer\'s gross margin. Under 12 months is strong, 12-18 good, and 18-24 acceptable for enterprise businesses with long customer lifetimes; beyond 24 is a warning. A 20-month payback is tolerable for enterprise only if retention is long enough to justify it.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 8: Internal Handoffs and Cross-Team Operating Discipline
  // ---------------------------------------------------------------------------
  {
    id: 7302029,
    chapter: 'Internal Handoffs and Cross-Team Operating Discipline',
    title: 'Support severity triage',
    prompt: 'A customer reports an issue. What is the main purpose of assigning it a severity level at intake?',
    correct: 'To prioritize response and routing by business impact, so the highest-impact issues get resourced first against the SLA',
    wrong: [
      miss('To decide which customer is most important and ignore the others', 'Severity rates the impact of an issue, not the worth of a customer; every issue is triaged, with lower-severity ones handled on a slower track, not ignored.', 'Severity ranks impact, not customers. Lower-severity issues are scheduled, not dropped.'),
      miss('To assign blame for who caused the problem', 'Triage is about prioritizing the fix and response, not attributing fault; blame assignment is irrelevant to getting the customer working again.', 'Triage prioritizes the fix, not the fault. Severity is about impact and response speed.'),
      miss('To make sure every issue gets exactly the same response time', 'Uniform response defeats the purpose of severity; the point is to differentiate so urgent, high-impact issues are not stuck behind minor ones.', 'Equal response wastes the system. Severity exists precisely to treat issues differently by impact.'),
    ],
    lesson: 'Severity classification at intake prioritizes issues by business impact so response and routing match urgency and the SLA. It differentiates handling rather than treating everything equally or ignoring lower-priority work, and it keeps high-impact problems from being stuck behind minor ones. It is about impact, not blame or customer favoritism.',
    source,
    generated: true,
  },
  {
    id: 7302030,
    chapter: 'Internal Handoffs and Cross-Team Operating Discipline',
    title: 'Product feedback intake',
    prompt: 'Customer success collects many feature requests from accounts. What is the healthiest way to feed these to product?',
    correct: 'Route them through a structured intake that captures the underlying problem, frequency, and business impact, so product can prioritize by evidence',
    wrong: [
      miss('Forward each request directly to an engineer to build as quickly as possible', 'Direct-to-engineer requests bypass prioritization and ship features no one validated against the broader base; intake exists to prevent exactly this.', 'Skipping prioritization builds the loudest request, not the most valuable. Route through structured intake.'),
      miss('Promise the customer the feature so the relationship stays warm', 'Promising unvalidated features creates hidden delivery obligations and broken trust when they do not ship; CS should capture, not commit.', 'CS captures requests, it does not commit roadmap. Promises become breakage at delivery time.'),
      miss('Only escalate requests from the loudest or largest customer', 'Volume and size are inputs but not the whole signal; intake should weigh frequency and impact across the base, not just who shouts loudest.', 'Loudest is not the same as highest-impact. Weigh frequency and value across the base.'),
    ],
    lesson: 'Feature requests should flow to product through structured intake that records the underlying problem, how often it recurs, and its business impact, so prioritization is evidence-based. Routing directly to engineers, promising features to customers, or escalating only the loudest account all distort the roadmap and create hidden obligations.',
    source,
    generated: true,
  },
  {
    id: 7302031,
    chapter: 'Internal Handoffs and Cross-Team Operating Discipline',
    title: 'Deal desk role',
    prompt: 'A rep wants to offer a non-standard discount and custom payment terms to close a large deal. What is the role of a deal desk here?',
    correct: 'To review and approve non-standard commercial terms against pricing policy, margin, and risk before they are committed to the customer',
    wrong: [
      miss('To find ways to close the deal as fast as possible regardless of terms', 'A deal desk guards pricing discipline and margin; its job is to govern non-standard terms, not to rubber-stamp whatever closes fastest.', 'A deal desk governs terms, it does not just speed deals. It protects margin and policy.'),
      miss('To handle the customer relationship instead of the salesperson', 'The deal desk reviews terms, not relationships; the rep still owns the customer while the desk vets the commercial structure.', 'The rep keeps the relationship. The deal desk vets the commercials behind it.'),
      miss('To approve every request automatically so reps are not slowed down', 'Automatic approval defeats the control; a deal desk exists precisely to scrutinize non-standard requests, not wave them through.', 'A rubber-stamp desk is no control. Its purpose is to scrutinize non-standard terms, not auto-approve.'),
    ],
    lesson: 'A deal desk reviews and approves non-standard commercial terms — unusual discounts, custom payment or contract structures — against pricing policy, margin, and risk before they are promised to the customer. It is a control function that protects the business from undisciplined or unprofitable terms, not a closing accelerant or a relationship owner.',
    source,
    generated: true,
  },
])
