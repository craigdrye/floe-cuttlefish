// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Career Qualifications: Ethics / Ops question bank (Professional
// Ethics, Supply Chain Analyst, and Technical Sales Engineer tracks).
//
// CAREER_QUALS_ETHICS_OPS_SUB_TOPICS groups each chapter's questions into
// lesson-shaped clusters by mapping question id -> sub-topic label. The label
// is intentionally short so it can sit on a lesson card without wrapping.
//
// CAREER_QUALS_ETHICS_OPS_MENTOR_HINTS overrides the generic scaffold hint
// with a one-line second-person nudge that names the reasoning move without
// giving the answer. Voice: compliance / ethics officer (for ethics items),
// senior operations lead (for supply chain), and seasoned sales engineer
// (for technical sales) — mentoring a sharp newcomer.
//
// CAREER_QUALS_ETHICS_OPS_CORRECT_SHORTENED trims `correct` strings flagged
// by the length-heuristic audit (correct >=1.8x longer than longest wrong AND
// >=20 chars longer). Trimmed explanatory clauses are reattached via
// `lessonAddendum` so no operational detail is lost.

export const CAREER_QUALS_ETHICS_OPS_SUB_TOPICS: Record<number, string> = {
  // ====================== PROFESSIONAL ETHICS ======================

  // ---------- Chapter 1: Integrity, Role Duties, and the Law/Ethics Gap ----------
  // Cluster: "Boundaries of Competence" — knowing when to refuse, defer, or
  // tell the truth even when the easier path is to oblige.
  4250950: 'Boundaries of Competence',
  4250951: 'Boundaries of Competence',
  // Cluster: "Honest Records" — accurate dates and accurate documents are
  // the integrity floor of any controlled process.
  4250952: 'Honest Records',
  4250953: 'Honest Records',

  // ---------- Chapter 2: Stakeholders, Harms, and Incentives ----------
  // Cluster: "Conflicts and Disclosure" — surfacing personal stakes before
  // they distort a decision.
  4250954: 'Conflicts and Disclosure',
  4250956: 'Conflicts and Disclosure',
  // Cluster: "Gifts and Procurement Controls" — keeping spending and vendor
  // selection insulated from personal benefit and threshold games.
  4250955: 'Gifts and Procurement Controls',
  4250957: 'Gifts and Procurement Controls',

  // ---------- Chapter 3: Ethical Frameworks That Actually Help ----------
  // Cluster: "Treating Like Cases Alike" — consistency, documented
  // exceptions, and resisting popularity as a criterion.
  4250958: 'Treating Like Cases Alike',
  4250959: 'Treating Like Cases Alike',
  4250960: 'Treating Like Cases Alike',

  // ---------- Chapter 4: Speaking Up, Escalation, and Documentation ----------
  // Cluster: "Proportionate Escalation" — raising concerns early, through the
  // right channel, with the level of certainty the evidence supports.
  4250961: 'Proportionate Escalation',
  4250962: 'Proportionate Escalation',
  4250963: 'Proportionate Escalation',
  // Cluster: "Honest Correction" — fixing the record once stakeholders are
  // acting on it, and matching language to the strength of the evidence.
  4250964: 'Honest Correction',
  4250965: 'Honest Correction',

  // ---------- Chapter 5: Fair Process, Investigations, and Bias ----------
  // Cluster: "Independence and Retaliation" — protecting reporters and
  // disclosing conflicts before they contaminate investigations or reviews.
  4250966: 'Independence and Retaliation',
  4250967: 'Independence and Retaliation',
  4250968: 'Independence and Retaliation',

  // ---------- Chapter 6: Ethical Culture and Control Design ----------
  // Cluster: "Confidentiality in Practice" — information leaks across rooms,
  // channels, and casual conversation; the duty follows the data.
  4250969: 'Confidentiality in Practice',
  // Cluster: "Data Integrity and Honest Metrics" — keeping dashboards,
  // claims, and definitions aligned with the evidence.
  4250970: 'Data Integrity and Honest Metrics',
  4250971: 'Data Integrity and Honest Metrics',
  4250972: 'Data Integrity and Honest Metrics',
  // Cluster: "Documentation and Authorisation" — leaving an accurate trail
  // for approvals, training, and citations even when speed pushes against it.
  4250973: 'Documentation and Authorisation',
  4250974: 'Documentation and Authorisation',
  4250975: 'Documentation and Authorisation',
  // Cluster: "Improper Influence" — bribery and quid-pro-quo dressed up as
  // generosity or convenience.
  4250976: 'Improper Influence',
  // Cluster: "Inclusive Workplace Norms" — attribution, harassment, and the
  // daily fairness that culture lives or dies on.
  4250982: 'Inclusive Workplace Norms',

  // ---------- Chapter 7: Sector Dilemmas ----------
  // Cluster: "Customer Harm and Product Risk" — small-percentage harms are
  // still harms; releases need real risk review.
  4250977: 'Customer Harm and Product Risk',
  // Cluster: "Privacy and Minimum Necessary" — purpose limitation, consent,
  // and anonymisation when sensitive data is in play.
  4250978: 'Privacy and Minimum Necessary',
  4250979: 'Privacy and Minimum Necessary',
  4250980: 'Privacy and Minimum Necessary',
  // Cluster: "AI, Permits, and Regulated Conduct" — professional duties
  // extend into AI tools and external regulatory obligations.
  4250981: 'AI, Permits, and Regulated Conduct',
  4250984: 'AI, Permits, and Regulated Conduct',
  // Cluster: "Inclusive Workplace Norms" (cross-chapter, harassment)
  4250983: 'Inclusive Workplace Norms',

  // ====================== SUPPLY CHAIN ANALYST ======================

  // ---------- Chapter 1: Supply Chain Map and Metrics ----------
  // Cluster: "Metrics That Match Customer Experience" — perfect-order
  // measurement and master-data hygiene.
  4250985: 'Metrics That Match Customer Experience',
  4250986: 'Metrics That Match Customer Experience',

  // ---------- Chapter 2: Demand and Forecasting ----------
  // Cluster: "Reading Demand Signals" — separating baseline from events,
  // catching forecast bias, and using downstream signals.
  4250987: 'Reading Demand Signals',
  4250988: 'Reading Demand Signals',
  4250989: 'Reading Demand Signals',

  // ---------- Chapter 3: Inventory and Service Levels ----------
  // Cluster: "Stock Policy by Item Behaviour" — criticality, variability,
  // and segmentation drive policy, not blanket turn rules.
  4250990: 'Stock Policy by Item Behaviour',
  4250991: 'Stock Policy by Item Behaviour',
  4250992: 'Stock Policy by Item Behaviour',
  // Cluster: "Inventory Accuracy and Service Tradeoffs" — root-cause
  // counting and the economics of service-level commitments.
  4250993: 'Inventory Accuracy and Service Tradeoffs',
  4250994: 'Inventory Accuracy and Service Tradeoffs',

  // ---------- Chapter 4: Suppliers and Sourcing Risk ----------
  // Cluster: "Supplier Risk and Diligence" — single-source exposure,
  // qualification, ethics, and scorecard interpretation.
  4250995: 'Supplier Risk and Diligence',
  4250996: 'Supplier Risk and Diligence',
  4250997: 'Supplier Risk and Diligence',
  4250998: 'Supplier Risk and Diligence',

  // ---------- Chapter 5: Operations and Capacity ----------
  // Cluster: "Quality at the Inbound Gate" — defective lots and the
  // discipline that stops them entering production.
  4250999: 'Quality at the Inbound Gate',
  // Cluster: "Capacity and Bottleneck Discipline" — true constraints,
  // sequencing tradeoffs, and the cost of maintenance shortcuts.
  4250620: 'Capacity and Bottleneck Discipline',
  4250621: 'Capacity and Bottleneck Discipline',
  4250622: 'Capacity and Bottleneck Discipline',

  // ---------- Chapter 6: Transportation, Warehousing, and Network Tradeoffs ----------
  // Cluster: "Freight and Service Tradeoffs" — fill rate vs promise time
  // and the total-cost-to-serve picture of carrier choice.
  4250623: 'Freight and Service Tradeoffs',
  4250626: 'Freight and Service Tradeoffs',
  4250627: 'Freight and Service Tradeoffs',
  // Cluster: "Warehouse and Network Design" — slotting by velocity and
  // adding nodes against the full total-cost picture.
  4250624: 'Warehouse and Network Design',
  4250625: 'Warehouse and Network Design',

  // ---------- Chapter 7: S&OP and Cross-Functional Planning ----------
  // Cluster: "One Plan, One Reality" — reconciling demand, supply, and
  // finance into a single executable plan.
  4250628: 'One Plan, One Reality',
  4250629: 'One Plan, One Reality',
  // Cluster: "Change Coordination" — engineering revisions and cross-team
  // root-cause work on missed customer commitments.
  4250630: 'Change Coordination',
  4250631: 'Change Coordination',

  // ---------- Chapter 8: Resilience, Analytics, and Decision Communication ----------
  // Cluster: "Disruption Triage" — segmenting impact, prioritising
  // expedites, and ordering exception work by uncertainty and impact.
  4250632: 'Disruption Triage',
  4250633: 'Disruption Triage',
  4250634: 'Disruption Triage',

  // ====================== TECHNICAL SALES ENGINEER ======================

  // ---------- Chapter 1: The Sales Engineer Role ----------
  // Cluster: "Discovery Before Pitch" — earning the right to demo by
  // understanding the decision, not the feature list.
  4250215: 'Discovery Before Pitch',

  // ---------- Chapter 2: Technical Discovery ----------
  // Cluster: "Qualification and Requirements" — turning vague interest and
  // vague adjectives into testable thresholds, stakeholders, and timing.
  4250216: 'Qualification and Requirements',
  4250217: 'Qualification and Requirements',
  4250218: 'Qualification and Requirements',
  4250219: 'Qualification and Requirements',

  // ---------- Chapter 3: Demo Strategy ----------
  // Cluster: "Audience-Fit Demos" — adapting depth and framing to the
  // person making the decision, and tying features to the buyer's outcome.
  4250220: 'Audience-Fit Demos',
  4250221: 'Audience-Fit Demos',
  4250222: 'Audience-Fit Demos',

  // ---------- Chapter 4: Architecture and Solution Design ----------
  // Cluster: "Integration and Migration Scoping" — flat-file legacy,
  // rate limits, sync semantics, and data-quality realism.
  4250223: 'Integration and Migration Scoping',
  4250224: 'Integration and Migration Scoping',
  4250225: 'Integration and Migration Scoping',
  4250226: 'Integration and Migration Scoping',

  // ---------- Chapter 5: Security, Privacy, and Compliance Objections ----------
  // Cluster: "Security and Privacy Honesty" — questionnaires, certification
  // status, and pilot data handling answered truthfully.
  4250227: 'Security and Privacy Honesty',
  4250228: 'Security and Privacy Honesty',
  4250229: 'Security and Privacy Honesty',

  // ---------- Chapter 6: Pilots, Proofs of Concept, and Mutual Action Plans ----------
  // Cluster: "Pilots With Exit Criteria" — bounding scope, defining
  // success, and turning trials into decisions.
  4250230: 'Pilots With Exit Criteria',
  4250231: 'Pilots With Exit Criteria',
  4250233: 'Pilots With Exit Criteria',
  // Cluster: "Mutual Action Plans" — co-owned process that keeps qualified
  // deals moving toward a decision.
  4250232: 'Mutual Action Plans',

  // ---------- Chapter 7: Interview Scenarios and Role Plays ----------
  // Cluster: "Objection Handling" — build-vs-buy, price, and competitor
  // objections answered without overclaiming or capitulating.
  4250234: 'Objection Handling',
  4250235: 'Objection Handling',
  4250238: 'Objection Handling',
  // Cluster: "Stakeholders and Business Case" — committee mapping and
  // credible ROI for soft benefits.
  4250236: 'Stakeholders and Business Case',
  4250237: 'Stakeholders and Business Case',

  // ---------- Chapter 8: Working With Product, Engineering, and Customer Success ----------
  // Cluster: "Commitment Discipline" — keeping promises in scope with what
  // product, engineering, and delivery can actually ship.
  4250239: 'Commitment Discipline',
  4250240: 'Commitment Discipline',
  4250242: 'Commitment Discipline',
  4250243: 'Commitment Discipline',
  // Cluster: "Adoption and Expansion" — selling more capacity only where
  // value realisation supports it.
  4250241: 'Adoption and Expansion',
}

// CAREER_QUALS_ETHICS_OPS_MENTOR_HINTS — one-line, second-person nudges.
// Voice: compliance / ethics officer for ethics items; ops lead for supply
// chain; seasoned SE for technical sales. Names the move, never the answer.

export const CAREER_QUALS_ETHICS_OPS_MENTOR_HINTS: Record<number, string> = {
  // ---------- Professional Ethics ----------
  4250950: 'Competence has a boundary. Naming it and routing the work to a qualified reviewer is the professional move.',
  4250951: 'The honest estimate, with assumptions and tradeoffs, builds more trust than the optimistic one ever will.',
  4250952: 'A date is a fact, not a courtesy. If pressure persists, escalate — do not edit the record.',
  4250953: 'Legal hold overrides every "we should just clean up." Preserve first, ask questions second.',
  4250954: 'The conflict is rarely the breach — the silence is. Disclose, then let the process decide.',
  4250955: 'When a gift breaches policy, decline and document. Productivity and politeness are not the criteria.',
  4250956: 'Check the policy stack — conflicts, confidentiality, outside work — before discussing rates or scope.',
  4250957: 'Threshold-splitting is a control-bypass red flag. Name it as that and escalate; do not normalise it.',
  4250958: 'Like cases get like treatment. If you grant an exception, the criterion must be documented and policy-based.',
  4250959: 'Decide on policy and business criteria, not on who is liked. Popularity is not an employment standard.',
  4250960: 'Use the stated criteria, disclose any conflict, and write the evidence down — feelings are not a scoring rubric.',
  4250961: 'Two same-pattern safety signals warrant escalation with stated uncertainty — not silence until certainty arrives.',
  4250962: 'When the manager is the subject, the independent channel exists precisely for this. Use it.',
  4250963: 'Ask for the rationale in writing, preserve the evidence, and route to compliance if the omission stands.',
  4250964: 'When leaders are citing a number, a quiet local fix is not a fix. Notify and correct on the record.',
  4250965: 'Match language to evidence: facts, confidence level, and remaining steps — not the director\'s tone.',
  4250966: 'Look at timing and reason together. Good-faith reports must be insulated from quiet consequences.',
  4250967: 'Familiarity is not independence. Disclose the relationship and let the organisation choose the safeguard.',
  4250968: 'One process, every candidate. Document any exception through the approved route — do not improvise.',
  4250969: 'Confidentiality follows the information, not the conference room door. Stop the conversation; move the channel.',
  4250970: 'Valid data does not get deleted to spare a launch. Honest context, segmentation, or commentary is the polish.',
  4250971: 'A claim must travel with its scope. If the evidence is one team, one month, the headline says so.',
  4250972: 'A silent definition change is a trend break. Make the change visible or do not change it.',
  4250973: 'Verbal approval is not an audit control. Record the decision, the approver, and the conditions in the normal system.',
  4250974: 'Equivalency is a decision someone has to approve. Until then, the record reflects what actually happened.',
  4250975: 'A polished citation can still be invented. Verify the source exists and supports the claim — or strike it.',
  4250976: 'A donation tied to official action is a bribery question, not a charity question. Loop in legal before anything moves.',
  4250977: 'Customer harm scaled by percentage is still customer harm. Escalate impact and recommend the controlled release.',
  4250978: 'Helpful intent does not waive minimum necessary. Confirm authorisation and share only what the purpose requires.',
  4250979: 'Useful examples still need privacy controls. Anonymise or get permission before the deck travels.',
  4250980: 'Consent was for aggregation. Reusing identifiable responses for coaching breaks the consent given.',
  4250981: 'AI tools do not remove professional duty. Verify, protect client data, and disclose use if the engagement requires it.',
  4250982: 'Notice who is restated and credited. Accurate attribution and inclusive norms are the daily fairness work.',
  4250983: 'In digital spaces too: address the conduct promptly, preserve context, and follow the corrective procedure.',
  4250984: 'Permits are conditions, not formalities. Notice and mitigation turn external impacts into managed obligations.',

  // ---------- Supply Chain Analyst ----------
  4250985: 'On-time alone hides short shipments. Perfect order or OTIF captures what the customer actually receives.',
  4250986: 'Operationally significant master-data errors get corrected with controls — not memorised or charmed away.',
  4250987: 'Tag the promo as event lift; keep baseline clean. Future planning needs both, separated.',
  4250988: 'Five months one direction is bias, not noise. Review assumptions with sales and adjust the process.',
  4250989: 'Trust the downstream signal. Distributor orders lag, and ignoring POS is how bullwhips form.',
  4250990: 'Stockout cost, downtime, and lead time belong in the conversation. Pure turns drop critical low-volume parts.',
  4250991: 'Reorder policy needs variability, not just averages. Safety stock exists because reality is not on schedule.',
  4250992: 'One formula for every SKU ignores criticality and behaviour. Segment by service requirement and demand pattern.',
  4250993: 'Repeated adjustment treats the symptom. Investigate the cause: mispick, receipt error, scrap, or loss.',
  4250994: 'Higher service costs more inventory or more reliable supply. Walk the customer through the tradeoff honestly.',
  4250995: 'Geography plus uniqueness plus business impact is the supplier-risk picture. Plan mitigation before disruption tests it.',
  4250996: 'Qualification is not optional because the part is cheaper. Regulated components carry compliance obligations.',
  4250997: 'Unusually low cost in a high-risk region is the diligence trigger, not the green light. Investigate before awarding.',
  4250998: 'A single bad month from an external cause is not a verdict. Read the trend and the controllability first.',
  4250999: 'Production speed cannot bypass quality. Quarantine the lot and decide disposition with quality and the supplier.',
  4250620: 'Skipping maintenance to chase a surge usually trades one order for a larger outage. Surface the tradeoff.',
  4250621: 'Add capacity at the constraint, not upstream of it. The bottleneck is where the queue is, not where it is busy.',
  4250622: 'Strict first-in sequencing wastes capacity when changeovers are large. Balance setup time against due dates.',
  4250623: 'Consolidation saves freight only if it still meets the service promise. The three-day window is the constraint.',
  4250624: 'Slot by velocity, with handling and safety as the next filters. Constant re-slotting is its own kind of chaos.',
  4250625: 'A new node is a total-cost question — facility, inventory, freight, and service together, not rent alone.',
  4250626: 'Cheap line-item freight gets expensive when penalties and customer damage are included. Compare landed cost.',
  4250627: 'Incoterms allocate cost and risk. Compare landed cost under the proposed terms, not the bold number.',
  4250628: 'S&OP exists to force one plan. Average the three forecasts and you have hidden the constraint, not resolved it.',
  4250629: 'Scarce supply needs a documented allocation policy — priority, contract, impact, and fairness, not volume of caps lock.',
  4250630: 'An engineering change is a supply-chain coordination event. Effectivity, remaining demand, and disposition all matter.',
  4250631: 'Map the timestamps end to end before switching anyone. Blame is loud; data is decisive.',
  4250632: 'Segment by criticality and coverage first. Air-freighting everything is the most expensive way to learn the categories.',
  4250633: 'Expedite where speed changes a service or financial outcome. Random and universal are both wrong defaults.',
  4250634: 'Impact times uncertainty wins the queue. The most important alert is the one that needs a decision now.',

  // ---------- Technical Sales Engineer ----------
  4250215: 'Discovery is the right to demo. Ask about decisions and users before opening a single slide.',
  4250216: 'A demo without discovery is a feature tour. Ask about pain, success, systems, and the decision process first.',
  4250217: 'Turn "fast" into thresholds, traffic, and geography. Adjectives are not requirements.',
  4250218: 'Without pain, sponsor, timeline, or budget, this is interest — not a deal. Qualify it as such and nurture.',
  4250219: 'If your questions only confirm one module, you are not testing fit. Look for disconfirming evidence.',
  4250220: 'CFOs want payback and risk; admins want depth. Adjust the flow to the person making the decision.',
  4250221: 'Frame on operations outcomes — cleanup, accuracy, trust. The button name is not the value.',
  4250222: 'Tie the shiny feature back to the stated business problem. If it does not move invoices, do not let it run the meeting.',
  4250223: 'Legacy integration starts with a sample file. Promise nothing until you have seen the fields and the cadence.',
  4250224: 'Volume rarely shrinks on go-live. Estimate throughput, design the migration, and test at representative scale.',
  4250225: 'Workarounds are fine — disguising them as native capability is not. Name the gap and the workaround.',
  4250226: 'Dirty CSVs are the norm. Profile, define cleansing and mapping, and assign ownership before estimating effort.',
  4250227: 'Use approved security evidence. Inventing answers to keep a deal warm creates a contractual problem later.',
  4250228: '"Audit underway" is not "Type II certified." State current status and share the interim materials you actually have.',
  4250229: 'Production data in a pilot is real data. Confirm approvals and controls — or use anonymised data instead.',
  4250230: 'Bound the pilot. Use cases, owners, data, success metrics, exit decision — without them, the pilot will not produce one.',
  4250231: '"Know it when I see it" means no exit. Define success, scope, stakeholders, and the next decision in writing.',
  4250232: 'Interest without next steps drifts. Co-own a plan with dates, owners, and decision milestones.',
  4250233: 'Trial silence is usually disengagement. Reset around target users, onboarding, success measures, and a date.',
  4250234: 'Build-vs-buy is a credible buyer question. Compare total effort, risk, control, and strategic focus on the merits.',
  4250235: 'Diagnose the objection before discounting. Discount-first trains the buyer to expect more discounts.',
  4250236: 'Champion alone cannot approve. Map the committee, criteria, and approval sequence — engage procurement early.',
  4250237: 'Make assumptions visible and split hard from soft. Inflated soft-benefit math destroys the model\'s credibility.',
  4250238: 'Avoid speculation. Talk about your own architecture and incident practice with evidence, not schadenfreude.',
  4250239: 'Implementation and success must hear the commitment before signature. Discovery-by-delivery is the failure mode.',
  4250240: 'Contract language is a delivery commitment. Loop product, legal, and delivery before accepting bespoke wording.',
  4250241: 'Expansion sticks only when adoption supports it. Diagnose inactive seats before selling more.',
  4250242: 'Response, workaround, and resolution are different commitments. Define them before agreeing to a number.',
  4250243: 'Roadmap is not a current commitment. Tell the buyer what is available now versus possible later — clearly.',
}

// CAREER_QUALS_ETHICS_OPS_CORRECT_SHORTENED — questions where the correct
// answer was substantially longer than the longest distractor. Each entry
// trims `correct` to a punchier line and reattaches the trimmed detail via
// `lessonAddendum` so the operational guidance is preserved.

export const CAREER_QUALS_ETHICS_OPS_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // ---------- Professional Ethics ----------
  4250954: {
    newCorrect: 'Disclose the relationship and follow the recusal process.',
    lessonAddendum: 'Once disclosed, the organisation decides between full recusal and managed participation. Either is defensible; concealment is not.',
  },
  4250956: {
    newCorrect: 'Check conflict, confidentiality, and outside-work policies before discussing details.',
    lessonAddendum: 'The relevant policies usually predate the request. Reviewing them before any conversation about scope or rates keeps the door open to a legitimate outcome and closed to a hidden conflict.',
  },
  4250957: {
    newCorrect: 'Challenge or escalate the split — it appears designed to bypass procurement controls.',
    lessonAddendum: 'Threshold avoidance is a recognised compliance red flag. The right response is to surface the pattern through procurement or compliance, not to debate the merits of the underlying purchase in isolation.',
  },
  4250958: {
    newCorrect: 'Apply the same criteria used for comparable cases, or document a justified exception.',
    lessonAddendum: 'A policy-based exception names the relevant difference and records the rationale, which is what makes the exception defensible later. Consistency without documented exceptions calcifies; exceptions without documentation become favouritism.',
  },
  4250960: {
    newCorrect: 'Use the stated criteria, disclose any conflict, and document evidence-based recommendations.',
    lessonAddendum: 'Disclosure handles the conflict; criteria handle the bias; documentation handles the audit. All three are needed when you sit close to either the friend or the critic.',
  },
  4250963: {
    newCorrect: 'Ask for the rationale, preserve the evidence, and escalate if the omission is improper.',
    lessonAddendum: 'Compliance or audit channels exist precisely for substantiated findings removed for convenience. Preserving the evidence and asking on the record protects both the report and the reporter.',
  },
  4250966: {
    newCorrect: 'Whether the change is retaliation and whether reporting protections were followed.',
    lessonAddendum: 'Look at timing, business rationale, and whether the staffing change followed normal process. Soon-after-report decisions without a documented performance reason are the canonical retaliation pattern.',
  },
  4250968: {
    newCorrect: 'Apply the same selection criteria for every candidate and document any exception through the approved process.',
    lessonAddendum: 'Hidden additions and automatic rejections are both unfair. The defensible path is a documented exception with named approvers — or no exception at all.',
  },
  4250975: {
    newCorrect: 'Remove or replace the citation unless you can verify the source exists and supports the claim.',
    lessonAddendum: 'AI tools generate plausible-looking false citations routinely. The verification step is to find the source and confirm it supports the specific claim — not just that the title or URL resolves.',
  },
  4250976: {
    newCorrect: 'Treat it as a bribery concern and involve legal or compliance before any donation moves.',
    lessonAddendum: 'A donation tied to official action is improper regardless of the recipient. Intent, timing, and beneficiary are the diligence dimensions; legal and compliance own the call.',
  },
  4250977: {
    newCorrect: 'Escalate the customer-impact risk and recommend delaying or controlling the release.',
    lessonAddendum: 'A one-day fix against incorrect charges is a small operational cost against a real customer-harm risk. Controlled release (limited rollout, opt-out, refund commitment) is the middle path if delay is impossible.',
  },
  4250983: {
    newCorrect: 'Address the conduct promptly and follow the reporting or corrective procedure.',
    lessonAddendum: 'Preserving relevant context (timestamps, witnesses, prior incidents) supports the corrective process. Speed plus documentation is what protects people and signals the norm.',
  },
  4250984: {
    newCorrect: 'Follow permit conditions, notify residents, and use reasonable mitigation.',
    lessonAddendum: 'Permit conditions are obligations even when they add coordination work. Notice and mitigation are the standard tools that turn external impacts into managed ones — not optional polish.',
  },

  // ---------- Supply Chain Analyst ----------
  4250986: {
    newCorrect: 'Master-data quality is wrong and needs correction with controls to prevent repeat errors.',
    lessonAddendum: 'A one-off correction is half the work. Validation rules on item dimensions, supplier setup, and packaging data prevent the same execution error from recurring across SKUs.',
  },
  4250988: {
    newCorrect: 'Measure the bias, review assumptions with sales, and adjust the planning process.',
    lessonAddendum: 'Persistent one-directional error is process signal, not noise. The fix is upstream in assumptions or consensus — overcorrection on a single month creates the opposite stockout problem.',
  },
  4250991: {
    newCorrect: 'Review safety-stock and reorder-point assumptions, including variability and lead time.',
    lessonAddendum: 'Averages-only reorder policies stock out whenever variability bites. A working policy reflects demand variability, lead-time variability, and the chosen service-level target together.',
  },
  4250992: {
    newCorrect: 'Different demand patterns and criticality require segmented inventory policies.',
    lessonAddendum: 'Practical segmentation cuts by service target, demand variability, lead time, and criticality. One blanket days-of-cover formula overstocks the stable items and under-protects the volatile critical ones.',
  },
  4250993: {
    newCorrect: 'Analyse root causes such as mispicks, receiving errors, scrap, or location issues before repeated adjustments.',
    lessonAddendum: 'Repeated adjustment treats the symptom and lets the cause continue. Pattern analysis across bins, SKUs, and time of day usually localises the loss to a process step.',
  },
  4250996: {
    newCorrect: 'Complete required qualification, quality, and compliance checks before approving production use.',
    lessonAddendum: 'Qualification on regulated components includes capacity, documentation, and audit readiness in addition to part-level quality. Skipping any of these to capture savings exposes the program to defects and regulatory findings.',
  },
  4250999: {
    newCorrect: 'Quarantine the lot, assess risk with quality and the supplier, and decide disposition before use.',
    lessonAddendum: 'Disposition options usually include sort-and-use, supplier rework, return, or scrap, with documented rationale. The decision is recorded so the supplier corrective action and any production deviation are traceable.',
  },
  4250620: {
    newCorrect: 'Weigh capacity, labour, maintenance risk, customer priority, and split-shipment or subcontracting alternatives.',
    lessonAddendum: 'Surge planning rarely comes down to overtime versus refusal. Split shipments, subcontracting, partial delivery, and re-prioritising other orders are usually the options that respect both the customer and the equipment.',
  },
  4250621: {
    newCorrect: 'Look at packing capacity, staffing, and handoff flow — the constraint is at packing.',
    lessonAddendum: 'Adding capacity upstream of the bottleneck increases queue, not throughput. Work-balance and handoff timing between picking and packing usually reveal the operational fix.',
  },
  4250623: {
    newCorrect: 'Balance freight efficiency against the promised service time and inventory availability.',
    lessonAddendum: 'Consolidation saves money only while it still supports customer commitments. The right cadence and fill target come from the service window the customer was promised, not from the truck.',
  },
  4250624: {
    newCorrect: 'Slot high-velocity items closer to pick paths, with size, safety, and replenishment in the mix.',
    lessonAddendum: 'Velocity is the dominant slotting driver, but handling constraints, safety stock locations, and replenishment cadence limit which items can sit at the front. A working slot plan reflects all four.',
  },
  4250625: {
    newCorrect: 'Compare transportation cost, facility cost, service time, inventory needs, and resilience effects.',
    lessonAddendum: 'A closer node reduces delivery time but adds facility and inventory cost; the right answer comes from total cost to serve and the resilience picture, not from rent or freight alone.',
  },
  4250627: {
    newCorrect: 'Compare landed cost and risk transfer under the proposed terms, not the unit price.',
    lessonAddendum: 'Incoterms allocate duties, insurance, and final-mile responsibility. A "cheaper" quote under shifted terms is regularly more expensive once the buyer absorbs what the seller used to cover.',
  },
  4250628: {
    newCorrect: 'Force a cross-functional decision on one aligned plan, assumptions, and tradeoffs.',
    lessonAddendum: 'Averaging the three forecasts hides the constraint instead of resolving it. The S&OP move is to surface the gap, name the binding assumption, and choose a single plan to execute against.',
  },
  4250630: {
    newCorrect: 'Coordinate effectivity dates, remaining demand, cancellation options, and disposition of old stock.',
    lessonAddendum: 'Engineering-change handling is a cross-team coordination event. Without effectivity, demand reconciliation, and disposition decided up front, supply chain absorbs the obsolescence or production absorbs the assembly errors.',
  },
  4250632: {
    newCorrect: 'Segment critical items, assess coverage, and evaluate alternate routes or modes.',
    lessonAddendum: 'Communicating the recovery plan to customers is part of the response, not an afterthought. Segmentation prevents universal air-expedite spend; coverage analysis tells you which items can ride out the four weeks.',
  },

  // ---------- Technical Sales Engineer ----------
  4250216: {
    newCorrect: 'Ask discovery questions about workflow pain, success criteria, users, systems, and timeline.',
    lessonAddendum: 'The buyer\'s decision process — who approves, on what criteria, by when — belongs in the same discovery pass. Demos tailored to that picture convert at a different rate from generic feature tours.',
  },
  4250217: {
    newCorrect: 'Ask for target latency, traffic volume, endpoints, geography, and current baseline.',
    lessonAddendum: 'Peak conditions and acceptance thresholds turn the requirement from adjective into commitment. Without them, both sides are guessing at what "fast" the contract is about to enforce.',
  },
  4250218: {
    newCorrect: 'As early interest needing nurturing before being treated as an active deal.',
    lessonAddendum: 'Active opportunities usually carry pain, sponsor, timing, resources, and a decision path. Without those, the right move is enablement and qualification, not pipeline forecasting and legal cycles.',
  },
  4250219: {
    newCorrect: 'Confirmation bias may hide better-fit needs, blockers, or reasons the module will fail.',
    lessonAddendum: 'Good discovery deliberately seeks disconfirming evidence — questions the preferred answer would struggle to handle. Buyers can sense one-sided discovery and often disengage from sellers who run it.',
  },
  4250220: {
    newCorrect: 'Keep the technical flow concise and connect capabilities to financial impact and risk.',
    lessonAddendum: 'Executives need to see business outcomes and a credible path to value; admin depth bores them and erodes credibility. Implementation effort is the third leg that turns capability into committable plan.',
  },
  4250221: {
    newCorrect: 'It cuts manual cleanup, improves reporting accuracy, and helps teams trust customer data.',
    lessonAddendum: 'Operations buyers price three things: time saved, quality improved, and risk reduced. Framing the capability in that language connects the feature to the budget owner\'s outcome.',
  },
  4250223: {
    newCorrect: 'Scope the data fields, file format, transfer method, error handling, and proof-of-concept criteria.',
    lessonAddendum: 'Ownership — who maintains the file producer, the file consumer, and the reconciliation job — is the question that goes missing most often. Naming it up front prevents integration becoming a renewal-blocking surprise.',
  },
  4250224: {
    newCorrect: 'Estimate throughput, design the migration, discuss limits, and test at representative volume.',
    lessonAddendum: 'Volume rarely shrinks on go-live; it usually grows. A migration designed against the day-one number, not the steady-state number, is the failure pattern.',
  },
  4250226: {
    newCorrect: 'Run data profiling and define cleansing, mapping, validation, and ownership before migration.',
    lessonAddendum: 'Migration risk usually lives in data quality, not technical pipes. Profiling and an explicit cleansing plan make the implementation estimate credible to the customer\'s technical reviewer.',
  },
  4250227: {
    newCorrect: 'Use approved security documentation, answer accurately, and flag gaps.',
    lessonAddendum: 'Subject-matter review by your security team is the unblock when accuracy requires it. Guessed answers and universal-yes marking both become contractual problems at the next security review.',
  },
  4250228: {
    newCorrect: 'State the current status accurately and share approved interim security materials.',
    lessonAddendum: 'In-progress certification is a different commitment from completed assurance. Sharing the timeline and the interim controls keeps the deal honest without overstating the posture.',
  },
  4250229: {
    newCorrect: 'Verify data-handling approvals, security controls, environment readiness, and whether anonymised data would suffice.',
    lessonAddendum: 'Pilot data carries the same privacy and security obligations as production data. Anonymised or synthetic data often satisfies the validation goal without the approval burden — ask before accepting the upload.',
  },
  4250233: {
    newCorrect: 'Reset the trial around target users, use cases, success measures, and a decision date.',
    lessonAddendum: 'Onboarding completion is the operational hinge between trial access and trial evaluation. Without it, even a long trial cannot produce a decision-grade signal.',
  },
  4250234: {
    newCorrect: 'Compare build cost, time, maintenance, risk, and whether the capability is strategic to own.',
    lessonAddendum: 'Opportunity cost — what the engineering team is not building if they build this — is the dimension build-vs-buy conversations under-weight. Naming it credibly is what earns the engineering leader\'s respect.',
  },
  4250235: {
    newCorrect: 'Explore budget, value drivers, total cost, and whether scope or packaging should change.',
    lessonAddendum: 'Price objections often hide value, budget, risk, or scope concerns. Diagnosing which it is before discounting protects both margin and credibility; pre-emptive discounts teach the buyer to keep pushing.',
  },
  4250237: {
    newCorrect: 'Build assumptions transparently and separate hard from soft benefits.',
    lessonAddendum: 'Validating the headline assumptions with the customer\'s own data — even one or two — is what turns the model from a vendor pitch into a shared business case. Inflated soft-benefit math is the credibility killer.',
  },
  4250242: {
    newCorrect: 'Clarify the difference between response and resolution, severity definitions, and feasible commitments.',
    lessonAddendum: 'Support tiers vary across severity, hours, and channel. A one-hour resolution SLA for all tickets is rarely operationally achievable; one-hour response for critical issues usually is.',
  },
  4250243: {
    newCorrect: 'Be clear about current availability and roadmap uncertainty.',
    lessonAddendum: 'The decision the buyer needs is whether the deal can proceed without the feature. Selling an uncommitted roadmap date as a commitment creates a trust break when slippage happens.',
  },
}
