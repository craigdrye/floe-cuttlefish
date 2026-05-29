# Enterprise SaaS / B2B Tech Roadmap
**ID**: `enterpriseSaaSRoadmap` - **Discipline**: Technology - **Level**: Career

## Course Aim
Enterprise SaaS is a single value chain that several teams pretend is theirs alone. Sales sources and closes, implementation makes the product real, customer success keeps it adopted, product decides what gets built, and finance scores the whole thing in retention and efficiency metrics. The work breaks at the seams between those teams far more often than it breaks inside any one of them. This course teaches the language and the operating logic of the whole chain so that a learner entering any seat — sales, solutions, onboarding, CS, support, ops, or product — can see where their work sits and what the team downstream needs from them.

The course is deliberately commercial. It does not stop at "the user is happy"; it follows the dollar from a discovery call through a signed order form, a go-live, an adoption curve, a renewal, and an expansion. Learners will be able to read a deal the way a deal desk reads it (who has budget, who can block, what was promised), read an account the way a CS leader reads it (is value landing, what predicts churn), and read a quarter the way a SaaS CFO reads it (net and gross revenue retention, CAC payback, the cost of a broken handoff). Where numbers carry meaning — NRR above versus below 100%, a CAC payback past 18 months, a Type II report versus a Type I — the course expects learners to know what the number signals, not just recite it.

The register is adult and practical. Every concept is anchored to a decision someone actually has to make under time and money pressure, and to the predictable failure mode that competent teams design around. By the end, a learner should be able to assemble a customer journey pack — stakeholder map, value case, implementation plan, health read, renewal and expansion strategy — and defend each piece to the team that owns the next step.

## Course Design Notes
Route questions here when they test B2B SaaS workflows end to end: stakeholder mapping and the buying committee, discovery and value framing, commercial and pricing models, go-to-market motion (PLG vs. sales-led), implementation and enablement, security and procurement gating, customer health and renewal risk, expansion, churn, the SaaS metrics that score retention and efficiency, and the internal handoffs that connect all of the above. Emphasize the relationship between product value and commercial execution, and the fact that revenue in this business is renewed, not just won.

Each question should reward the move a competent operator would make over the move that merely sounds confident, fast, or friendly. Distractors should encode real, named failure modes (single-threading, vanity metrics, side promises, garbage-in migration, discounting before proving value) rather than obviously silly options. Keep terminology current: MEDDICC-style qualification, NRR/GRR, SOC 2 Type II, DPA/sub-processors, usage-based and hybrid pricing, land-and-expand, time-to-value. Difficulty should climb from definitional recognition in early chapters toward integrated judgment in later ones.

## Chapter 1: Buyers, Users, and the Buying Committee
- **Core questions**: Who controls budget, who feels the pain, who can block, and how do you avoid betting the deal on one person?
- **Key concepts**: economic buyer, champion, evaluator/technical buyer, end user, admin, procurement, legal, security/risk reviewer; single-threading vs. multi-threading; buying committee size in enterprise deals.
- **Applied skills**: build a stakeholder map that lists each role, their authority, what they need to approve, and the evidence each requires.
- **Common traps**: confusing the loudest user with the decision-maker; assuming champion enthusiasm substitutes for sign-off authority; treating procurement delay as "moods" rather than an unmapped approval.

## Chapter 2: Discovery and Value Framing
- **Core questions**: What problem is actually real, what outcome would justify buying, and how urgent is it?
- **Key concepts**: pain (identified, indicated, implicated), use case, workflow vs. complaint, success criteria, business case, ROI, cost of inaction, value hypothesis; outcome metrics vs. vanity/activity metrics.
- **Applied skills**: turn a broad complaint ("reporting is broken") into workflows, decisions, data sources, and per-group success criteria; write a discovery summary with a defensible value hypothesis.
- **Common traps**: demoing before discovery; treating a complaint as a complete spec; measuring logins when the buyer bought a business outcome; letting the loudest department scope the deal.

## Chapter 3: Commercial Models, Pricing, and Go-to-Market Motion
- **Core questions**: How is this product sold and priced, and why does the motion change by segment?
- **Key concepts**: sales-led vs. product-led growth (PLG) vs. hybrid; self-serve, sales-assist, enterprise motions by segment (SMB / mid-market / enterprise); seat-based, usage/consumption-based, and hybrid pricing; ACV/ARR/MRR; freemium and land-and-expand; ramped contracts and minimum commitments.
- **Applied skills**: match a GTM motion and pricing model to a customer segment and product type; reason about how pricing model shapes expansion and churn risk.
- **Common traps**: applying an enterprise sales motion to an SMB self-serve product (and vice versa); confusing usage-based revenue stability with seat-based; assuming free users will convert without an activation path.

## Chapter 4: Implementation, Onboarding, and Enablement
- **Core questions**: What must happen before value appears, who owns each step, and how fast can the customer reach first value?
- **Key concepts**: kickoff and mutual action plan, integration dependencies (SSO/SAML, data sync, APIs), data migration and field mapping, change management, training and enablement materials, acceptance criteria, time-to-value (TTV).
- **Applied skills**: write an implementation plan that exposes dependencies, owners, risks, and acceptance criteria; treat data migration as business logic, not file movement.
- **Common traps**: a kickoff agenda that hides the SSO/data-sync gates; importing inconsistent legacy data and hoping dashboards improvise; buying licenses a department never adopts; assuming integrations finish themselves.

## Chapter 5: Security, Compliance, and Procurement Gates
- **Core questions**: What evidence does the customer's security and legal review require, and when in the cycle should it start?
- **Key concepts**: SOC 2 Type I vs. Type II (point-in-time design vs. operating effectiveness over 6–12 months), ISO 27001, DPA and sub-processor lists, GDPR controller/processor roles, data residency, security questionnaires, MSA/order form/SLA structure, redlines and the paper process.
- **Applied skills**: identify which artifact answers which reviewer's concern; sequence security/legal review early enough that it does not become a quarter-end surprise.
- **Common traps**: offering a Type I when the buyer's standard is Type II; treating a friendly email as an approved contract term; deferring the security reviewer until signature; confusing an SLA side promise with approved, capacity-backed terms.

## Chapter 6: Customer Health, Renewal Risk, and Churn
- **Core questions**: Is the customer receiving value, what predicts downgrade or churn, and when does renewal leverage shift to the customer?
- **Key concepts**: customer health score (usage, support burden, relationship, financial signals), QBR, adoption vs. activity, logo churn vs. revenue churn, downgrade/contraction, renewal timeline, stakeholder change (reorg, new sponsor), procurement squeeze at renewal.
- **Applied skills**: read leading indicators (usage cliff, sponsor change) and act while there is still runway; bring value evidence and a commercial strategy to a renewal, not a reflexive discount.
- **Common traps**: assuming a signed contract guarantees renewal; waiting until the renewal date passes; sending swag to fix a workflow-fit problem; discounting before proving delivered value.

## Chapter 7: Expansion and the SaaS Metrics That Score You
- **Core questions**: Where does the next dollar come from, and what do the retention and efficiency numbers actually mean?
- **Key concepts**: net revenue retention (NRR) and gross revenue retention (GRR) and why NRR can exceed 100% while GRR cannot; expansion (upsell, cross-sell, seat/usage growth); LTV:CAC (~3:1 healthy), CAC payback period (<12 mo strong, 18–24 mo acceptable for enterprise), the Rule of 40, the Magic Number; land-and-expand.
- **Applied skills**: interpret a retention number for what it signals about product value and churn; identify defensible expansion paths tied to realized value.
- **Common traps**: reading NRR without GRR (hiding churn behind expansion); chasing expansion before the customer has reached value; treating CAC payback past 24 months as fine without enterprise-length retention to justify it.

## Chapter 8: Internal Handoffs and Cross-Team Operating Discipline
- **Core questions**: What context is missing at the seam between teams, and who owns the next action?
- **Key concepts**: sales-to-CS handoff (discovery, success criteria, promises, risks), product feedback intake, support escalation and severity triage, roadmap requests, deal desk, multi-tenant configuration boundaries, promise discipline.
- **Applied skills**: design a handoff checklist that preserves buying context; route bugs through a documented triage path rather than a personal network.
- **Common traps**: handing CS only the order form; letting a sales feature promise become a hidden delivery obligation; per-tenant config that destabilizes shared workflows; routing escalations through whoever someone happens to know.

## Capstone
Build a complete customer journey pack for one named account, prospect to expansion: (1) a stakeholder map with authorities and required evidence; (2) a discovery summary with a value hypothesis and outcome metrics; (3) the GTM motion and pricing model that fits the segment; (4) an implementation plan with dependencies, owners, acceptance criteria, and a target time-to-value; (5) the security/procurement artifacts the review will demand and when to start them; (6) a customer-health read with the leading churn indicators you will watch; (7) a renewal-and-expansion strategy with the NRR/GRR consequences of each path; and (8) the handoff checklist that connects every step. Defend each piece to the team that owns the next one.
