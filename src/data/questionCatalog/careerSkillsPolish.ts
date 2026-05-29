// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the inline "Career Skills" question banks defined in career.ts.
//
// CAREER_SKILLS_SUB_TOPICS maps each question id to a cluster label that names
// the lesson-shaped chapter grouping (e.g. "Product Management: Problem
// Discovery"). Tracks with 4-12 questions are grouped into 2-4 clusters so the
// lesson view never goes flat.
//
// CAREER_SKILLS_MENTOR_HINTS overrides the generic scaffold hint with a single
// second-person line in the voice of a senior practitioner in that field. The
// hint names the reasoning move without giving away the answer.
//
// CAREER_SKILLS_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct >= 1.8x the longest wrong AND >= 20 chars
// longer). The trimmed explanatory clauses re-attach via `lessonAddendum` so
// no information is lost.

export const CAREER_SKILLS_SUB_TOPICS: Record<number, string> = {
  // -------------------- Product Management --------------------
  17001: 'Product Management: Problem Discovery',
  17002: 'Product Management: Prioritization',
  17003: 'Product Management: Metrics & Outcomes',
  17004: 'Product Management: Shipping & MVPs',

  // -------------------- Project Management --------------------
  17101: 'Project Management: Scheduling & Critical Path',
  17102: 'Project Management: Scope Control',
  17103: 'Project Management: Risk & Communication',
  17104: 'Project Management: Milestones & Tracking',

  // -------------------- Consulting Cases --------------------
  17201: 'Consulting Cases: Structuring the Problem',
  17202: 'Consulting Cases: Profit & Frameworks',
  17203: 'Consulting Cases: Synthesis & Recommendation',
  17204: 'Consulting Cases: Driver Trees & Decomposition',

  // -------------------- Financial Modeling --------------------
  17301: 'Financial Modeling: Revenue Build',
  17302: 'Financial Modeling: Three Statements',
  17303: 'Financial Modeling: Sensitivity & Drivers',
  17304: 'Financial Modeling: Cash Flow & Valuation',

  // -------------------- UX Design --------------------
  17401: 'UX Design: Flows & Journeys',
  17402: 'UX Design: Wireframes & Structure',
  17403: 'UX Design: Affordances & Signals',
  17404: 'UX Design: Case Study Craft',

  // -------------------- Cybersecurity --------------------
  17501: 'Cybersecurity: Social Engineering',
  17502: 'Cybersecurity: Credentials & Passwords',
  17503: 'Cybersecurity: Authentication Layers',
  17504: 'Cybersecurity: Access & Least Privilege',

  // -------------------- Public Speaking --------------------
  17601: 'Public Speaking: Opening & Core Message',
  17602: 'Public Speaking: Pacing & Delivery',
  17603: 'Public Speaking: Audience Adaptation',
  17604: 'Public Speaking: Composure Under Pressure',

  // -------------------- Negotiation --------------------
  17701: 'Negotiation: Positions vs Interests',
  17702: 'Negotiation: BATNA & Leverage',
  17703: 'Negotiation: Cognitive Effects',
  17704: 'Negotiation: Creating Value',

  // -------------------- People Management --------------------
  17801: 'People Management: Feedback',
  17802: 'People Management: Delegation',
  17803: 'People Management: 1:1s & Support',
  17804: 'People Management: Goals & Roles',

  // -------------------- Sales Fundamentals --------------------
  17901: 'Sales Fundamentals: Discovery',
  17902: 'Sales Fundamentals: Objections',
  17903: 'Sales Fundamentals: Value Framing',
  17904: 'Sales Fundamentals: Buying Signals',

  // -------------------- Customs Broker --------------------
  18001: 'Customs Broker: Classification & HS Codes',
  18002: 'Customs Broker: Origin Rules',
  18003: 'Customs Broker: Reasonable Care',
  18004: 'Customs Broker: Recordkeeping',
  18005: 'Customs Broker: Classification & HS Codes',
  18006: 'Customs Broker: Valuation',
  18007: 'Customs Broker: Entry & Documentation',
  18008: 'Customs Broker: Duties & AD/CVD',
  18009: 'Customs Broker: Origin Rules',
  18010: 'Customs Broker: Corrections & Disclosure',
  18011: 'Customs Broker: Exam Strategy',
  18012: 'Customs Broker: Broker Responsibility',

  // -------------------- Medical Coding Roadmap --------------------
  18101: 'Medical Coding: Code Set Basics',
  18102: 'Medical Coding: Specificity & Documentation',
  18103: 'Medical Coding: Unsupported Coding',
  18104: 'Medical Coding: Medical Necessity',
  18105: 'Medical Coding: ICD-10-CM Navigation',
  18106: 'Medical Coding: ICD-10-CM Sequencing',
  18107: 'Medical Coding: CPT Procedure Coding',
  18108: 'Medical Coding: Modifiers',
  18109: 'Medical Coding: NCCI & Bundling',
  18110: 'Medical Coding: HCPCS & Supplies',
  18111: 'Medical Coding: Provider Queries',
  18112: 'Medical Coding: Exam Strategy',

  // -------------------- AML Compliance --------------------
  18201: 'AML Compliance: KYC & Onboarding',
  18202: 'AML Compliance: Transaction Monitoring',
  18203: 'AML Compliance: Escalation & Red Flags',
  18204: 'AML Compliance: Beneficial Ownership',

  // -------------------- Series 87 (Research Analyst) --------------------
  6101: 'Series 87: Valuation Multiples',
  6102: 'Series 87: Catalysts & Rerating',
  6103: 'Series 87: Disclosure & Conflicts',
  6104: 'Series 87: Information Boundaries',
  6105: 'Series 87: Earnings Quality',
  6106: 'Series 87: Accounting Signals',
  6107: 'Series 87: Selective Access & MNPI',
  6108: 'Series 87: DCF vs Multiples',

  // -------------------- CCEP (Compliance & Ethics) --------------------
  6201: 'CCEP: Program Structure & Reporting Lines',
  6202: 'CCEP: Hotline & Triage',
  6203: 'CCEP: Risk-Based Training',
  6204: 'CCEP: Investigation & Remediation',
  6205: 'CCEP: Governance & Independence',
  6206: 'CCEP: Third-Party Risk',
  6207: 'CCEP: Investigation Scope Discipline',
  6208: 'CCEP: Speak-Up Culture',

  // -------------------- NERC (System Operations) --------------------
  6301: 'NERC: Reliability Standards',
  6302: 'NERC: Situational Awareness',
  6303: 'NERC: Communication Discipline',
  6304: 'NERC: Restoration',
  6305: 'NERC: Contingency & N-1',
  6306: 'NERC: Alarm Management',
  6307: 'NERC: Operating Margin',
  6308: 'NERC: Blackstart & Planning',

  // -------------------- Patent Bar --------------------
  6401: 'Patent Bar: Patentability',
  6402: 'Patent Bar: Claim Drafting',
  6403: 'Patent Bar: Office Action Response',
  6404: 'Patent Bar: Procedural Deadlines',
  6405: 'Patent Bar: Prior Art Analysis',
  6406: 'Patent Bar: Specification Support',
  6407: 'Patent Bar: Amendment Strategy',
  6408: 'Patent Bar: Examiner Interviews',

  // -------------------- CRCM (Bank Compliance) --------------------
  6501: 'CRCM: Product Design & Advisory',
  6502: 'CRCM: Rule Application & Scenarios',
  6503: 'CRCM: Issue Rating & Severity',
  6504: 'CRCM: Monitoring vs Audit',
  6505: 'CRCM: Complaint Signals',
  6506: 'CRCM: Advisory Under Pressure',
  6507: 'CRCM: Reg Change Management',
  6508: 'CRCM: Closure & Residual Risk',

  // -------------------- AIGP (AI Governance) --------------------
  6601: 'AIGP: Accountability & Ownership',
  6602: 'AIGP: Use-Case Risk',
  6603: 'AIGP: Data Use & Privacy',
  6604: 'AIGP: Human Oversight',
  6605: 'AIGP: Post-Launch Monitoring',
  6606: 'AIGP: Third-Party AI',
  6607: 'AIGP: Incident Response',
  6608: 'AIGP: Inventory & Operational Reach',

  // -------------------- API Inspectors --------------------
  6701: 'API Inspectors: Open-Book Strategy',
  6702: 'API Inspectors: Fitness for Service',
  6703: 'API Inspectors: Repair vs Rerate',
  6704: 'API Inspectors: Inspection Methods',
  6705: 'API Inspectors: Corrosion Rates',
  6706: 'API Inspectors: Welding & Procedures',
  6707: 'API Inspectors: Code Conflicts',
  6708: 'API Inspectors: Professional Judgment',
  6709: 'API Inspectors: Thickness Math',
  6710: 'API Inspectors: Remaining Life',
  6711: 'API Inspectors: Inspection Intervals',
  6712: 'API Inspectors: NDE Selection',
  6713: 'API Inspectors: Risk-Based Inspection',
  6714: 'API Inspectors: Temporary Repairs',
  6715: 'API Inspectors: Rerating',
  6716: 'API Inspectors: Pressure Testing',
  6717: 'API Inspectors: Damage Mechanisms',
  6718: 'API Inspectors: Records & Traceability',
  6719: 'API Inspectors: Code Scope',
  6720: 'API Inspectors: Sign-Off Discipline',

  // -------------------- CDFM (Defense Financial Mgmt) --------------------
  6801: 'CDFM: Appropriations & Purpose',
  6802: 'CDFM: Obligations & Execution',
  6803: 'CDFM: Anti-Deficiency Controls',
  6804: 'CDFM: Variance & Forecasting',
  6805: 'CDFM: Documentation & Audit',
  6806: 'CDFM: Year-End Pressure',
  6807: 'CDFM: Cross-Functional Issues',
  6808: 'CDFM: Stewardship & Decision Support',

  // -------------------- Certified General Appraiser --------------------
  6901: 'Appraiser: Highest & Best Use',
  6902: 'Appraiser: Income Approach',
  6903: 'Appraiser: USPAP & Independence',
  6904: 'Appraiser: Comparable Sales',
  6905: 'Appraiser: Scope of Work',
  6906: 'Appraiser: Income Assumptions',
  6907: 'Appraiser: Approach Reconciliation',
  6908: 'Appraiser: Reporting & Defensibility',

  // -------------------- Regulatory Affairs Roadmap --------------------
  7001: 'Regulatory Affairs: Pathway Strategy',
  7002: 'Regulatory Affairs: Labeling & Claims',
  7003: 'Regulatory Affairs: Change Control',
  7004: 'Regulatory Affairs: Audit Readiness',

  // -------------------- Clinical Research Roadmap --------------------
  6961: 'Clinical Research: Protocol Adherence',
  6962: 'Clinical Research: Informed Consent',
  6963: 'Clinical Research: Data Integrity',
  6964: 'Clinical Research: Adverse Events',
  6965: 'Clinical Research: Protocol Deviations',
  6966: 'Clinical Research: Query Handling',
  6967: 'Clinical Research: Roles & Delegation',
  6968: 'Clinical Research: Inspection Readiness',
  8001: 'Clinical Research: Informed Consent',
  8002: 'Clinical Research: Protocol Deviations',
  8003: 'Clinical Research: Data Integrity',
  8004: 'Clinical Research: Adverse Events',

  // -------------------- Supply Chain --------------------
  9001: 'Supply Chain: Forecasting',
  9002: 'Supply Chain: Inventory & Safety Stock',
  9003: 'Supply Chain: Constraint Thinking',
  9004: 'Supply Chain: Expediting Tradeoffs',

  // -------------------- Technical Sales --------------------
  10001: 'Technical Sales: Discovery',
  10002: 'Technical Sales: Security Objections',
  10003: 'Technical Sales: ROI Framing',
  10004: 'Technical Sales: Pilot Design',
}

export const CAREER_SKILLS_MENTOR_HINTS: Record<number, string> = {
  // ---------- Product Management ----------
  17001: 'Before features or polish, name the user pain. Solutions follow once the problem is real.',
  17002: 'Weigh value against cost. Loudest voice is not a framework — explicit tradeoffs are.',
  17003: 'A metric you cannot measure is a wish. Tie it to a user or business outcome you can read on a chart.',
  17004: 'Minimum viable means learning fastest, not shipping cleanest. Strip to the testable core.',

  // ---------- Project Management ----------
  17101: 'Map the dependency chain. The critical path is the one task slippage that moves the whole date.',
  17102: 'New work without a change-control decision is scope creep, not flexibility. Name the line being crossed.',
  17103: 'A risk register earns its keep by surfacing what could go wrong and what you would do about it — not by deleting risk.',
  17104: 'Milestones are checkpoints that mark real progress. Daily to-dos are noise; milestones tell the story.',

  // ---------- Consulting Cases ----------
  17201: 'Frame before you crunch. Buckets first, numbers after — that is what the interviewer is watching for.',
  17202: 'Default to revenue minus cost. Most case profit problems collapse into that frame before they need anything fancier.',
  17203: 'Land the recommendation, then the why, then the next step. Reading notes back is recap, not synthesis.',
  17204: 'A driver tree turns one big question into smaller answerable ones. It organizes analysis; it does not replace evidence.',

  // ---------- Financial Modeling ----------
  17301: 'Units times price is the operating engine. Build revenue from drivers, not from plugged growth rates.',
  17302: 'IS, BS, CFS — they connect through retained earnings and cash. If they do not tie, the model lies.',
  17303: 'Sensitivity lives in the output, not the formatting. Wiggle the input, watch the answer move.',
  17304: 'Free cash flow is what is left after running the business and reinvesting. Anchor valuation there.',

  // ---------- UX Design ----------
  17401: 'A user flow maps the task, not the screen. Walk the path before you draw the boxes.',
  17402: 'Wireframes test structure cheaply. Save the pixel polish for after the layout works.',
  17403: 'Affordances tell users what is clickable, draggable, or scrollable. If the cue is missing, the action is invisible.',
  17404: 'Show problem, process, decisions, outcome. A wall of mockups hides your thinking; reviewers want the reasoning.',

  // ---------- Cybersecurity ----------
  17501: 'Phishing exploits people, not protocols. The payload is deception, the prize is credentials or data.',
  17502: 'Length plus uniqueness beats clever substitutions. Reuse turns one breach into many.',
  17503: 'Two factors means two different categories of proof. A second password is not a second factor.',
  17504: 'Give the access the job needs and nothing more. Blast-radius shrinks when permissions shrink.',

  // ---------- Public Speaking ----------
  17601: 'Lead with the one thing you want them to remember. Everything else supports that anchor.',
  17602: 'Pace and pause are part of clarity. Rushing past your key sentence buries it.',
  17603: 'Ask what this audience needs to do or understand. Tailoring beats a generic deck every time.',
  17604: 'Prepare, breathe, focus on the message. Nerves shrink when attention shifts from you to the audience.',

  // ---------- Negotiation ----------
  17701: 'Position is the stated ask; interest is the underlying reason. Trade on interests to find room neither position revealed.',
  17702: 'Your BATNA is your walk-away. The stronger it is, the less the other side\'s pressure works.',
  17703: 'First numbers anchor the discussion. Recognize the anchor; do not let it set your range for free.',
  17704: 'Expand the pie before you split it. Joint gains live in tradeoffs across issues, not in equal halves of one.',

  // ---------- People Management ----------
  17801: 'Specific and timely beats polished and late. Feedback decays the further it sits from the moment.',
  17802: 'Delegation is ownership plus context plus check-ins. Drop work without those and you have dumped, not delegated.',
  17803: '1:1s are for alignment, support, and unblocking. Status belongs in writing; conversation belongs to the harder questions.',
  17804: 'Clarity on goals and roles outperforms more meetings. Teams drift when nobody can say who owns what.',

  // ---------- Sales Fundamentals ----------
  17901: 'Discover the problem before you pitch the product. The fastest pitch is the one aimed at a real pain.',
  17902: 'Clarify the objection before answering it. You will solve the wrong concern if you skip that step.',
  17903: 'Translate features into business outcomes. Buyers buy the impact, not the capability list.',
  17904: 'When prospects ask about implementation and timelines, they are buying. Operational questions are commitment signals.',

  // ---------- Customs Broker ----------
  18001: 'Classification drives duty and rules. Start with what the product actually is, not where it was shipped from.',
  18002: 'Origin follows substantial transformation. Ship-from country can be a red herring.',
  18003: 'Reasonable care is documented diligence. The importer owns compliance even when a broker files.',
  18004: 'Records support the entry years after liquidation. Build the file so an auditor can reconstruct the call.',
  18005: 'Apply the General Rules of Interpretation with section and chapter notes. Duty rate is never the starting point.',
  18006: 'Buyer-supplied tooling, dies, and molds are classic assists. Ask what the buyer provided for production.',
  18007: 'Reasonable care needs facts. Clarify before filing an unsupported classification — the entry follows your call.',
  18008: 'AD/CVD scope sits separate from ordinary duty. Check the order language and the product, not the supplier\'s history.',
  18009: 'Substantial transformation governs origin. Packaging in a second country does not relocate the production.',
  18010: 'Known errors get corrected through proper channels. Silence is not a strategy; it raises the penalty if CBP finds it first.',
  18011: 'Identify the controlling topic, then search the reference. Time pressure rewards intent, not full re-reads.',
  18012: 'Client pressure does not relax the broker\'s duty. Explain the risk, get the facts, refuse the unsupported filing.',

  // ---------- Medical Coding ----------
  18101: 'Diagnosis codes describe why care was given. Procedure codes describe what was done. Keep the sets straight.',
  18102: 'Specificity means matching what the chart supports. It is not a license to invent detail.',
  18103: 'If the documentation does not support the code, query the provider. Assigning anyway is a compliance event in waiting.',
  18104: 'Medical necessity needs clinical justification documented in the chart. Payers want to see both pieces.',
  18105: 'Index leads you to a candidate; the Tabular List confirms or refines it. Never skip the verification step.',
  18106: 'Sequence by the condition chiefly responsible for the encounter. Name length and reimbursement do not enter the rule.',
  18107: 'CPT often turns on size and site. If the op note is missing those, query — do not estimate from the appointment.',
  18108: 'A modifier qualifies a code with documented support. It is not a workaround for a denial.',
  18109: 'Check the NCCI edit and the documentation before unbundling. The modifier must reflect a real distinct service.',
  18110: 'Match the HCPCS code, the unit count, and the payer\'s documentation expectations. Supplies still get reviewed.',
  18111: 'A compliant query is clear, non-leading, and grounded in the chart. Never write the answer you want.',
  18112: 'Mark the hard case, bank the easy ones, return with focused book-time. Triage protects your total score.',

  // ---------- AML Compliance ----------
  18201: 'KYC is risk assessment, not paperwork. You are deciding how much monitoring this relationship will need.',
  18202: 'Compare activity to the customer profile. The behavior that breaks the expected pattern is the one to flag.',
  18203: 'Escalate through process and document the facts. Tipping off the customer is its own violation.',
  18204: 'Beneficial ownership is about real people in control, not the named entity. Look through the legal layers.',

  // ---------- Series 87 ----------
  6101: 'Forward P/E is price divided by next-year EPS. Run the division, then sanity-check the multiple.',
  6102: 'Rerating means the multiple expands because expectations move, not because the price ticked up. Name the catalyst.',
  6103: 'Disclosure exists so the reader can judge bias. The point is transparency, not validation of the call.',
  6104: 'Channel checks are mosaic work — public, lawful pieces assembled into a view. MNPI is the line you do not cross.',
  6105: 'A one-time channel fill is not durable demand. Separate the headline from what will repeat next quarter.',
  6106: 'Receivables growing faster than sales is a quality-of-earnings flag. EPS can rise while cash conversion deteriorates.',
  6107: 'A private "what the market is missing" pitch is an MNPI trap. Set the boundary before the conversation, not after.',
  6108: 'Lean on DCF when near-term earnings are distorted and the value sits in the longer arc. Pick the tool that fits the economics.',

  // ---------- CCEP ----------
  6201: 'A direct line to the board protects escalation from management filtering. Independence is structural, not personality.',
  6202: 'Treat anonymous reports with the same triage as named ones. Preserve information first, investigate second.',
  6203: 'Risk-based training puts depth where exposure is highest. Same deck for everyone wastes the budget on the wrong audience.',
  6204: 'No documented loss is not the closure standard. Root cause and remediation still need to happen.',
  6205: 'Material issues get escalated on the governance timetable, not the business calendar. Pressure is the moment independence matters most.',
  6206: 'High-risk intermediaries need front-end diligence, not just back-end termination rights. Design controls before the misconduct.',
  6207: 'Let the evidence move the scope. A defensible investigation responds to what it finds, not to the calendar.',
  6208: 'A quiet hotline plus retaliation hints is a culture flag. Program artifacts can look strong while trust is hollow.',

  // ---------- NERC ----------
  6301: 'Reliability standards exist to keep the bulk system secure. Markets and operator preference sit downstream of that.',
  6302: 'During abnormal conditions, the operator needs the real picture in real time. Stale assumptions are how cascades start.',
  6303: 'Closed-loop confirms heard, understood, executed. Under stress, that confirmation is the difference between intent and action.',
  6304: 'Restoration is methodical, not heroic. Verify conditions before energizing — speed without verification compounds instability.',
  6305: 'Plan for the next credible failure, not just the one that already happened. N-1 is resilience math, not paranoia.',
  6306: 'Alarm overload buries the critical signals. Prioritize by consequence; chronic noise dulls operator response.',
  6307: 'Operating margin is your buffer for the next event. Running close to limits feels stable until it is not.',
  6308: 'Blackstart sequences interact in nonobvious ways. Plans encode hard-won lessons; improvisation re-learns them in production.',

  // ---------- Patent Bar ----------
  6401: 'Novelty asks whether a single reference discloses every element. One reference, all elements — that is the test.',
  6402: 'Claims define the legal fence. Precision determines what you actually own, not the abstract or the figures.',
  6403: 'Respond with argument, amendment, or both. Silence is forfeiture; the prosecution record is built one response at a time.',
  6404: 'Patent timing is unforgiving. Some misses are fatal, and recovery — when available — is costly and not guaranteed.',
  6405: 'A 102 (single reference) and a 103 (combination) raise different theories. Map the rejection theory before you respond.',
  6406: 'Claim breadth must match what the specification teaches. A few narrow examples will not carry a broad genus.',
  6407: 'Narrowing buys allowance but spends scope. Treat every amendment as a permanent commitment to a smaller claim.',
  6408: 'Interviews clarify and narrow live issues. Use them to test amendments before filing them on the record.',

  // ---------- CRCM ----------
  6501: 'Map product features to applicable requirements before approval. Competitor offerings are not your compliance authority.',
  6502: 'CRCM tests which rules apply to these facts. Memorization fails when the scenario crosses multiple requirements.',
  6503: 'Severity blends current harm and systemic potential. A small known count can hide a large latent issue.',
  6504: 'Monitoring is ongoing compliance oversight; audit is independent assurance. Same controls, different vantage points.',
  6505: 'Complaints are early-warning signals, not just service tickets. Patterns there often beat your monitoring catch rate.',
  6506: 'Risk-significant issues get documented advice, even under executive pressure. Verbal sign-off is what blows up later.',
  6507: 'Reg change is cross-functional. Identify impact, assign owners, verify implementation — policy alone is not change management.',
  6508: 'Closure means root cause fixed and residual risk understood. "Issue closed" without that is paperwork.',

  // ---------- AIGP ----------
  6601: 'High-impact AI needs named owners for use, monitoring, and challenge. Vendor accountability does not transfer the deployment risk.',
  6602: 'The model is the same; the context changes the risk. Set controls by use case, not by model.',
  6603: 'Expanding data use needs a necessity and purpose test. "It would help the model" is not a governance answer.',
  6604: 'Real oversight means the human can understand, challenge, and override. Anything less is theater.',
  6605: 'Drift, new harms, new users all happen post-launch. Approval is the start of governance, not the end.',
  6606: 'Vendor confidence is not evidence. If you cannot evaluate suitability, you cannot deploy responsibly.',
  6607: 'Contain the harm, then investigate. Logs are evidence — preserve them, do not delete them under pressure.',
  6608: 'Without an inventory, the policy has nothing to govern. Visibility is the precondition for control.',

  // ---------- API Inspectors ----------
  6701: 'Open-book rewards targeted lookup, not full re-reads. Know where the answer lives before you reach for the book.',
  6702: 'Metal loss in service triggers a fitness-for-service assessment. Replace is one option, not the default.',
  6703: 'Repair, alteration, rerate — each label carries different requirements. The classification drives the path.',
  6704: 'Some damage hides behind insulation or the wall. External data alone do not always settle the question.',
  6705: 'Trend beats snapshot. Rate of change tells you what one reading cannot — how much margin is left.',
  6706: 'Code-service repairs need qualified procedures and qualified people. Intent is not a substitute for control.',
  6707: 'When references seem to disagree, verify scope, edition, and applicability. Compromise is not an interpretation method.',
  6708: 'Defensible judgment combines measured condition, mechanism understanding, code, and engineering logic. Field sense alone will not hold up.',
  6709: 'Subtract old thickness from current, divide by years. Loss over time, not current over time.',
  6710: 'Remaining life uses the margin above the required minimum, not the full current thickness. Divide margin by rate.',
  6711: 'When the rate doubles, the interval shortens. Rebuild remaining life on the new number, not the old plan.',
  6712: 'Localized pitting needs detection sized to the mechanism. Match the NDE method to the damage you expect.',
  6713: 'RBI scales attention to likelihood times consequence. High consequence with moderate likelihood still earns the look.',
  6714: 'A temporary clamp needs engineering basis, approval, monitoring, and a removal plan. Otherwise temporary becomes permanent in silence.',
  6715: 'Rerating is a controlled change. Update records, limits, and markings — operating intent is not a control.',
  6716: 'Pressure-boundary repairs need code-prescribed testing or accepted alternatives. Visual cleanliness is not return-to-service.',
  6717: 'Wet insulation and coating breakdown point at CUI. The signal is the condition around the pipe, not just the pipe.',
  6718: 'A repair package without scope, traceability, results, and approval cannot support future planning. Records are the integrity asset.',
  6719: 'Identify the asset and code first. The detailed rule that applies depends on which code governs.',
  6720: 'Sign-off needs supporting evidence. Withhold or qualify until the data are there — your name is the integrity guarantee.',

  // ---------- CDFM ----------
  6801: 'Appropriations are legally bounded by purpose. Mission urgency does not move money across those lines.',
  6802: 'Obligations commit funds before cash moves. Track both stages; both shape control.',
  6803: 'Verify legal availability before approving further commitments. Expected future funding is not current authority.',
  6804: 'Persistent under-execution flags weak planning or execution risk. Variance is signal, not just optics.',
  6805: 'Documentation supports legality and control review. Verbal authorization does not survive an inspector general.',
  6806: 'Year-end pressure does not suspend fiscal rules — it increases the risk that controls slip. Hold the line.',
  6807: 'Cross-functional issues need coordinated handling. Solve the accounting entry in isolation and the legal piece will find you later.',
  6808: 'Strong defense finance turns mission into legally controlled, decision-useful execution. Spend speed is not stewardship.',

  // ---------- Certified General Appraiser ----------
  6901: 'Highest and best use asks for the most supportable use, not the current one and not the most optimistic one.',
  6902: 'NOI describes the property\'s operating performance, separated from financing. Cash in the account is a different question.',
  6903: 'Appraiser independence is the credibility of the value opinion. Advocacy for the client number is the disqualifier.',
  6904: 'A good comp matches on the characteristics that actually drive value. Highest sale and closest sale are not the same as most comparable.',
  6905: 'Scope of work follows the assignment problem and intended use. Right-sizing the analysis is part of the work, not paperwork.',
  6906: 'Income assumptions compound. A small change to vacancy or growth can move indicated value materially.',
  6907: 'Weight the approach that fits the property, the data, and the assignment. Equal weighting is not a principle.',
  6908: 'A defensible conclusion walks the reviewer from data through adjustments to opinion. Tone does not substitute for the chain.',

  // ---------- Regulatory Affairs ----------
  7001: 'Pathway and predicate logic come first. Identify a suitable predicate, then map what the differences imply.',
  7002: 'Claims must be evidence-supported and inside the cleared intended use. User enthusiasm is not a claims basis.',
  7003: 'A material change needs a documented assessment before release — safety, effectiveness, performance, and filings.',
  7004: 'An audit-ready file shows change, review, approval, and impact assessment in one traceable record.',

  // ---------- Clinical Research ----------
  6961: 'Protocol discipline protects participants and study integrity. Deviations are not just paperwork events.',
  6962: 'Re-consent when new information could change a participant\'s willingness to continue. Consent is process, not a one-time signature.',
  6963: 'Source-to-CRF traceability is the audit trail. Without it, even correct data becomes hard to defend.',
  6964: 'Participant safety triage outranks administrative backlog. Document and escalate the event in the right order.',
  6965: 'Some deviations affect safety, data, or reporting. Assess impact — documentation alone is not always the response.',
  6966: 'Resolve queries with source-backed explanation. Do not change data to clear a query; correct only what the source supports.',
  6967: 'Tasks delegate; responsibility does not vanish. The PI retains oversight for the clinical and protocol decisions.',
  6968: 'Inspection readiness is records, staff, and practice in alignment. Tidy binders without operational consistency will not survive a real visit.',
  8001: 'A signature is not informed consent if comprehension is missing. Pause and re-explain before procedures continue.',
  8002: 'Out-of-window visits get documented, impact-assessed, and reported. Hiding the deviation is the larger event.',
  8003: 'Source documentation is the original evidence behind the data. Without it, verification breaks down.',
  8004: 'Clinical escalation first; capture and report per protocol. Causality assessment is not the coordinator\'s call alone.',

  // ---------- Supply Chain ----------
  9001: 'Persistent one-way miss is bias, not noise. Errors should cancel out; when they do not, the model is leaning.',
  9002: 'More variability means more buffer. Service-level math drives safety stock; slower supply does not lower it.',
  9003: 'The bottleneck is the lowest sustained throughput in the chain. Find the narrowest pipe, then improve there.',
  9004: 'Expediting one order ripples through schedule stability. Decide with the system in view, not the single rush.',

  // ---------- Technical Sales ----------
  10001: 'Discover before you demo. Pain, use case, success criteria, stakeholders — those four drive the tailored show.',
  10002: 'Security objections need controls mapped to requirements, not vague reassurance. Evidence closes; confidence does not.',
  10003: 'ROI lives in time saved, risk reduced, or revenue gained. Translate features into the buyer\'s economics.',
  10004: 'Define success criteria, timeline, owners, data, and decision process before kickoff. Vague pilots drift; sharp ones close.',
}

export const CAREER_SKILLS_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // ---------- Project Management ----------
  17101: {
    newCorrect: 'The sequence whose delay slides the whole timeline',
    lessonAddendum: 'The critical path is the chain of dependent tasks that most directly determines total project duration. Slipping any task on it slips the finish date; slipping a task off it usually does not.',
  },
  17102: {
    newCorrect: 'Project work keeps expanding past the original agreement',
    lessonAddendum: 'Scope creep is the steady addition of work beyond the originally agreed scope without a corresponding change-control decision. The hallmark is growth that no one explicitly approved.',
  },
  17304: {
    newCorrect: 'Cash left after running operations and reinvesting',
    lessonAddendum: 'Free cash flow is the cash a business generates after covering operating needs and capital investment. It is the cash actually available to creditors and owners, which is why valuation frameworks anchor on it.',
  },

  // ---------- Cybersecurity ----------
  17501: {
    newCorrect: 'Trick people into handing over sensitive information',
    lessonAddendum: 'Phishing relies on social engineering — impersonation, urgency, plausible context — to get the target to disclose credentials, click a malicious link, or initiate a transfer. The attack vector is people, not the protocol.',
  },

  // ---------- Customs Broker ----------
  18004: {
    newCorrect: 'Support classifications, values, and origin in audit',
    lessonAddendum: 'Strong recordkeeping lets the importer defend declared classification, customs value, and country-of-origin claims long after liquidation. The file should let an auditor reconstruct the entry call without relying on memory.',
  },

  // ---------- Medical Coding ----------
  18103: {
    newCorrect: 'Query or clarify rather than assign an unsupported code',
    lessonAddendum: 'When the chart does not support a code, the safe move is to query the provider or document the clarification — never to assign a code the documentation cannot back. Coding follows documentation, not reimbursement preference.',
  },
  18108: {
    newCorrect: 'Accurately explains a documented circumstance such as distinct service or laterality',
    lessonAddendum: 'Modifiers are valid when they reflect a real, documented circumstance: distinct service, laterality, component billing, repeat procedure, and similar. A modifier is not a workaround for a denial or a way to unbundle without support.',
  },

  // ---------- AML Compliance ----------
  18201: {
    newCorrect: 'Identify who the customer is and assess relationship risk',
    lessonAddendum: 'KYC procedures are designed to verify customer identity and calibrate risk before and during the relationship. The output is a risk-adjusted view that drives how much monitoring and diligence will follow.',
  },

  // ---------- Series 87 ----------
  6102: {
    newCorrect: 'A change in valuation as earnings expectations rise',
    lessonAddendum: 'A rerating is a multiple expansion driven by shifting expectations — usually about future earnings or margins — rather than by an acquisition event or accounting change. The catalyst is the change in what the market expects to underwrite.',
  },
  6108: {
    newCorrect: 'When near-term earnings are distorted and value depends on longer-run cash flow',
    lessonAddendum: 'DCF earns weight over multiples when near-term earnings are temporarily depressed, cyclical, or reinvestment-distorted, and the value of the business depends on longer-horizon cash generation. The choice follows the economics, not the prettier number.',
  },

  // ---------- CCEP ----------
  6204: {
    newCorrect: 'Document root cause, remediate the gap, consider reporting obligations',
    lessonAddendum: 'Even when no financial loss is proven, a confirmed control failure deserves root-cause analysis, remediation, and a review of any reporting obligations. Closure follows substance, not the absence of dollars.',
  },
  6205: {
    newCorrect: 'Escalate per governance even if some facts are still developing',
    lessonAddendum: 'Material issues follow governance timelines, not the calendar that suits the business. Caveats and qualifications can accompany the escalation; delay until everything is perfect is the failure mode.',
  },

  // ---------- NERC ----------
  6304: {
    newCorrect: 'Restore methodically using verified conditions and established plans',
    lessonAddendum: 'After a major outage, restoration follows verified system state and pre-built plans rather than improvisation. Unverified speed in restoration is how secondary disturbances enter the system.',
  },

  // ---------- CRCM ----------
  6502: {
    newCorrect: 'The answer turns on which requirements apply across multiple factors',
    lessonAddendum: 'CRCM scenarios layer multiple regulations and operational facts. The hard part is identifying which requirements govern, which are noise, and how they interact — not memorizing each rule in isolation.',
  },
  6506: {
    newCorrect: 'Provide advice through a documented process proportional to risk',
    lessonAddendum: 'High-risk advisory issues need defensible analysis, not off-the-cuff verbal answers. The discipline is to scale documentation to the risk: low-stakes can move fast; complex, high-impact decisions need a written record.',
  },
  6507: {
    newCorrect: 'Identify impacted areas, assign owners, verify implementation cross-functionally',
    lessonAddendum: 'A reg change touches product, ops, training, and systems together. Real change management identifies each impacted area, names owners, and verifies that the rule actually landed in workflow, not just in policy.',
  },

  // ---------- AIGP ----------
  6603: {
    newCorrect: 'Whether the data use is necessary, justified, and consistent with purpose limits',
    lessonAddendum: 'Expanding data use into a model needs a necessity-and-purpose test against privacy commitments and purpose limitations. "It would improve the model" is a performance argument, not a governance one.',
  },
  6606: {
    newCorrect: 'The organization may lack the transparency to assess suitability',
    lessonAddendum: 'When a vendor refuses to explain how its AI is evaluated, the deploying organization usually lacks the evidence it needs to confirm fit for the use case. Vendor confidence does not substitute for assessability.',
  },

  // ---------- API Inspectors ----------
  6701: {
    newCorrect: 'Success depends on finding and applying the right provisions under time pressure',
    lessonAddendum: 'Open-book inspector exams reward navigation speed and judgment in applying the right code passage. Memorization still matters for orientation, but the test is whether the candidate can land on the controlling provision quickly.',
  },
  6702: {
    newCorrect: 'Assess whether the loss threatens safe service per the applicable code',
    lessonAddendum: 'In-service metal loss triggers a fitness-for-service evaluation against the governing code and assessment criteria. Immediate replacement may not be required; ignoring the condition until it leaks definitely is not the answer.',
  },
  6707: {
    newCorrect: 'Verify which code, edition, scope, and context govern before answering',
    lessonAddendum: 'When references seem to disagree, the move is to identify the controlling code, edition, and scope for the scenario. Averaging answers or choosing the stricter-sounding passage is not interpretation.',
  },
  6708: {
    newCorrect: 'Measured condition, damage mechanism, code, and engineering logic together',
    lessonAddendum: 'Defensible API-style judgment integrates measured condition data, an understanding of the damage mechanism, the applicable code requirements, and documented engineering logic. Removing any one of these weakens the conclusion.',
  },
  6716: {
    newCorrect: 'Confirm code and engineering requirements for pressure testing or alternatives',
    lessonAddendum: 'After a significant pressure-boundary repair, return to service depends on the applicable code testing or accepted alternative evaluation. Schedule pressure does not change that requirement.',
  },
  6718: {
    newCorrect: 'Cannot understand what changed, why it was acceptable, or how to plan next',
    lessonAddendum: 'A repair package missing scope, traceability, inspection results, or approval basis denies future inspectors the information they need. The integrity of the asset depends on a record they can actually use.',
  },

  // ---------- CDFM ----------
  6805: {
    newCorrect: 'Evidence that funds were used per legal authority and internal controls',
    lessonAddendum: 'Documentation in defense finance is how managers, certifiers, and auditors confirm that funds were used consistently with legal authority and internal control requirements. Records support day-to-day execution, not just retrospective audits.',
  },
  6806: {
    newCorrect: 'Urgency can push teams into weak documentation and poor prioritization',
    lessonAddendum: 'Year-end spending pressure does not change the rules; it raises the chance that documentation thins out and prioritization weakens. The control environment has to absorb that pressure, not relax to it.',
  },

  // ---------- Certified General Appraiser ----------
  6902: {
    newCorrect: 'NOI measures property operations, not cash sitting in an account',
    lessonAddendum: 'Net operating income is a valuation measure of how the property operates — revenue minus operating expenses, before financing and tax. It deliberately strips out the financing decisions so the asset can be compared on its own economics.',
  },
  6903: {
    newCorrect: 'The credibility of the appraisal depends on independent, non-advocacy analysis',
    lessonAddendum: 'USPAP independence requires the appraiser to analyze objectively rather than push a client-preferred result. Clients can provide information; advocacy for a number is what compromises the work.',
  },
  6907: {
    newCorrect: 'Some approaches fit the property, data, and assignment better than others',
    lessonAddendum: 'Reconciliation weights approaches by relevance and reliability for the property type, data quality, and assignment problem — not by which number is highest or which approach the client prefers.',
  },

  // ---------- Clinical Research ----------
  6965: {
    newCorrect: 'Some deviations affect safety, data, or require additional reporting',
    lessonAddendum: 'Beyond documentation, some protocol deviations require impact assessment, corrective action, and additional reporting to sponsor or IRB. Severity drives the response; not every deviation is the same.',
  },
  6966: {
    newCorrect: 'Resolve with source-based explanation rather than changing data to clear the query',
    lessonAddendum: 'When the source and the CRF both agree, a monitor query is answered with a documented explanation grounded in the source — not by altering data. Changing entries to satisfy queries is exactly what audit trails are designed to catch.',
  },
  6968: {
    newCorrect: 'Records, staff explanations, and practice consistently align with protocol',
    lessonAddendum: 'Genuine inspection readiness shows up as alignment between documented records, what site staff can actually explain, and what is happening in day-to-day practice. Cosmetic organization alone does not survive a real visit.',
  },
}
