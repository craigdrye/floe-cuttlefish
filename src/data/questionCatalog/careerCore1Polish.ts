// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Career Core 1 bank (~256 questions across 13 tracks).
//
// CAREER_CORE1_SUB_TOPICS groups each chapter's questions into 3-7
// lesson-shaped clusters (cap 8 per chapter, since the lesson grouping caps
// at 8 lessons per chapter).
//
// CAREER_CORE1_MENTOR_HINTS overrides the generic scaffold hint with a
// one-line second-person nudge that names the reasoning move without giving
// the answer — voice: senior practitioner in each track's domain mentoring a
// first-year teammate.
//
// CAREER_CORE1_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit. Trimmed explanatory clauses are reattached via
// `lessonAddendum` so no info is lost.

export const CAREER_CORE1_SUB_TOPICS: Record<string, number[]> = {
  // ============================= PRODUCT MANAGEMENT =============================
  // Customer Discovery and Problem Framing
  'PM: Discovery & JTBD': [4260000, 4260001, 4260002, 4260018],
  // Prioritization and Roadmapping
  'PM: Prioritization & Sequencing': [4260003, 4260004, 4260005],
  // Requirements, Design, and Delivery Partnership
  'PM: MVPs & Delivery': [4260006, 4260007],
  // Metrics, Analytics, and Experimentation
  'PM: Metrics & Experiments': [4260008, 4260009, 4260010, 4260011, 4260012, 4260013, 4260019],
  // Stakeholder Influence and Product Judgment
  'PM: Stakeholders & Judgment': [4260014, 4260015, 4260020],
  // Strategy, Positioning, and Product Bets
  'PM: Strategy & Bets': [4260016, 4260017],
  // Launch, Adoption, and Learning Loops
  'PM: Launch & Adoption': [4260021],

  // ============================= PROJECT MANAGEMENT =============================
  // Project Thinking and Initiation
  'PJM: Initiation & Goals': [4260100, 4260103, 4260116],
  // Scope, Requirements, and Work Breakdown
  'PJM: Scope & WBS': [4260101, 4260102, 4260118],
  // Schedule, Resources, and Critical Path
  'PJM: Schedule & Critical Path': [4260105, 4260106, 4260107],
  // Risk, Issues, and Change Control
  'PJM: Risk & Change Control': [4260104, 4260108, 4260109, 4260119],
  // Status, Recovery, and Retrospectives
  'PJM: Status & Recovery': [4260110, 4260114, 4260115, 4260120],
  // Stakeholders, Communication, and Operating Rhythm
  'PJM: Stakeholders & Communication': [4260111, 4260112, 4260113],
  // Quality, Vendors, and Implementation
  'PJM: Quality & Vendors': [4260117, 4260121],

  // ============================= CONSULTING CASES =============================
  // What a Case Is Really Testing
  'CASE: Clarifying the Ask': [4260200],
  // Structuring Without Sounding Robotic
  'CASE: Structuring & Hypotheses': [4260201, 4260202, 4260208, 4260218],
  // Business Math Under Time Pressure
  'CASE: Case Math & Sizing': [4260204, 4260205, 4260206, 4260207, 4260220],
  // Charts, Exhibits, and Data Pulls
  'CASE: Exhibits & Segmentation': [4260209, 4260219],
  // Case Types and Pattern Recognition
  'CASE: Case Types & Patterns': [4260203, 4260213, 4260214, 4260215, 4260216],
  // Synthesis and Recommendation
  'CASE: Synthesis & Recommendation': [4260210, 4260211, 4260221],
  // Handling Pushback and New Information
  'CASE: Pushback & Recovery': [4260212, 4260217],

  // ============================= FINANCIAL MODELING =============================
  // Modeling Standards and Architecture
  'FM: Standards & Architecture': [4260301, 4260305, 4260306],
  // Revenue, Expense, and Working Capital Forecasts
  'FM: Forecast Drivers': [4260300, 4260307, 4260308, 4260309, 4260318],
  // Three-Statement Integration
  'FM: Three-Statement Integration': [4260302, 4260303, 4260310],
  // Free Cash Flow and DCF Valuation
  'FM: FCF & DCF': [4260311, 4260312],
  // Comparables, Scenarios, and Sensitivities
  'FM: Scenarios & Sensitivity': [4260313, 4260314, 4260319],
  // Model Review, Error Detection, and Stress Testing
  'FM: Review & Stress Testing': [4260304, 4260316, 4260320],
  // Communicating the Model
  'FM: Communicating the Model': [4260315, 4260317, 4260321],

  // ============================= UX DESIGN =============================
  // UX Mindset and Problem Framing
  'UX: Mindset & Framing': [4260400, 4260404],
  // Research That Changes the Design
  'UX: Research & Critique': [4260401, 4260416, 4260418],
  // Information Architecture and User Flows
  'UX: IA & Flows': [4260402, 4260403],
  // Wireframes and Interaction Structure
  'UX: Wireframes & Hierarchy': [4260405, 4260406, 4260407, 4260408],
  // Prototyping and Usability Testing
  'UX: Prototyping & Testing': [4260409, 4260410, 4260411, 4260420],
  // Accessibility and Inclusive Design
  'UX: Accessibility & Responsive': [4260412, 4260413, 4260419],
  // Product Collaboration and Handoff
  'UX: Collaboration & Handoff': [4260415, 4260417, 4260421],
  // Portfolio Case Study
  'UX: Portfolio Case Study': [4260414],

  // ============================= CYBERSECURITY =============================
  // Security Thinking and Risk
  'SEC: Risk & Attack Surface': [4260504],
  // Phishing, Social Engineering, and Credential Theft
  'SEC: Phishing & Social Engineering': [4260500, 4260501, 4260502, 4260505, 4260521],
  // Identity and Access
  'SEC: Identity & Access': [4260506, 4260507, 4260508, 4260509, 4260510, 4260511, 4260512, 4260518, 4260520],
  // Devices, Networks, and Cloud Basics
  'SEC: Devices & Patching': [4260513, 4260514],
  // Malware, Ransomware, and Common Attacks
  'SEC: Malware & Attacks': [4260503],
  // Incident Response
  'SEC: Incident Response': [4260515, 4260516, 4260519],
  // Security Culture and Career Paths
  'SEC: Security Culture': [4260517],

  // ============================= PUBLIC SPEAKING =============================
  // Speaker Mindset and Audience Analysis
  'PS: Mindset & Audience': [4260609, 4260610, 4260618],
  // Message Design and Structure
  'PS: Message Design': [4260600, 4260601, 4260602, 4260617, 4260619],
  // Evidence, Story, and Clarity
  'PS: Evidence & Clarity': [4260603],
  // Delivery Mechanics
  'PS: Delivery Mechanics': [4260604, 4260605, 4260606, 4260607, 4260620],
  // Visuals and Presentation Aids
  'PS: Visuals': [4260608],
  // Informative, Persuasive, and Executive Speaking
  'PS: Executive & Persuasive': [4260613, 4260614, 4260615],
  // Q&A, Panels, and Impromptu Speaking
  'PS: Q&A & Panels': [4260611, 4260612, 4260616, 4260621],

  // ============================= NEGOTIATION =============================
  // Negotiation Fundamentals
  'NEG: Fundamentals & BATNA': [4260700, 4260701, 4260720],
  // Creating Value Before Claiming It
  'NEG: Creating Value & ZOPA': [4260702, 4260703, 4260709, 4260718, 4260719],
  // Claiming Value and Bargaining Tactics
  'NEG: Anchoring & Concessions': [4260704, 4260708, 4260710, 4260715],
  // Communication, Emotion, and Trust
  'NEG: Communication & Trust': [4260705, 4260706, 4260707, 4260712, 4260714],
  // Power, Ethics, and Difficult Tactics
  'NEG: Power & Difficult Tactics': [4260713],
  // Internal and Multi-Party Negotiation
  'NEG: Internal & Multi-Party': [4260717, 4260721],
  // Closing, Documentation, and Implementation
  'NEG: Closing & Documentation': [4260711, 4260716],

  // ============================= PEOPLE MANAGEMENT =============================
  // The Manager Job
  'PEM: The Manager Job': [4260800, 4260801, 4260803],
  // Goals, Priorities, and Operating Rhythm
  'PEM: Goals & Operating Rhythm': [4260802, 4260804, 4260811],
  // Delegation and Ownership
  'PEM: Delegation & Ownership': [4260812, 4260819],
  // Feedback, Coaching, and Performance
  'PEM: Feedback & Coaching': [4260805, 4260807, 4260808, 4260809, 4260818, 4260820],
  // Difficult Conversations and Conflict
  'PEM: Difficult Conversations': [4260806, 4260816],
  // Hiring, Onboarding, and Team Design
  'PEM: Hiring & Onboarding': [4260814, 4260815],
  // Inclusion, Motivation, and Team Health
  'PEM: Inclusion & Motivation': [4260810, 4260821],
  // Managing Change and Scaling Yourself
  'PEM: Scaling & Change': [4260813, 4260817],

  // ============================= SALES FUNDAMENTALS =============================
  // What Selling Is For
  'SALES: Trust & Purpose': [4260910],
  // Discovery
  'SALES: Discovery': [4260900, 4260903, 4260917, 4260918],
  // Qualification and Stakeholder Mapping
  'SALES: Qualification & Stakeholders': [4260901, 4260902, 4260904, 4260916, 4260919],
  // Value, Proof, and ROI
  'SALES: Value & ROI': [4260905, 4260906, 4260908],
  // Objections and Negotiation
  'SALES: Objections': [4260907, 4260909, 4260920],
  // Pipeline and Forecast Hygiene
  'SALES: Pipeline & Forecast': [4260911, 4260912, 4260913, 4260914, 4260921],
  // Learning From Wins and Losses
  'SALES: Win/Loss Review': [4260915],

  // ============================= CUSTOMS BROKER =============================
  // Broker Role, Exam Format, and Reference Navigation — (none in this batch)
  // Classification With the HTSUS
  'CB: HTSUS Classification': [4261000, 4261001, 4261002],
  // Valuation
  'CB: Valuation': [4261003, 4261005],
  // Country of Origin, Marking, and Trade Programs
  'CB: Origin & Trade Programs': [4261006, 4261011, 4261016],
  // Entry, Release, and Entry Summary
  'CB: Entry & Release': [4261007, 4261008, 4261015],
  // Duties, Fees, AD/CVD, and Special Situations
  'CB: Duties, Fees & AD/CVD': [4261004, 4261017],
  // Recordkeeping, Corrections, and Compliance
  'CB: Recordkeeping & Compliance': [4261009, 4261010, 4261012, 4261013, 4261014],

  // ============================= MEDICAL CODING (CPC) =============================
  // Coding Role and Reference Habits
  'MC: Coding Role & Speed': [4261100, 4261111],
  // Diagnosis Coding
  'MC: Diagnosis Coding': [4261101, 4261102, 4261103, 4261113, 4261115],
  // Procedure and Supply Coding
  'MC: Procedure & Units': [4261114, 4261116],
  // Modifiers, Bundling, and Claim Edits
  'MC: Modifiers & Bundling': [4261105, 4261106],
  // Queries, Audits, and Denial Prevention
  'MC: Queries & Audits': [4261104, 4261107, 4261108, 4261109, 4261110, 4261112, 4261117],

  // ============================= PROFESSIONAL ETHICS =============================
  // Integrity, Role Duties, and the Law/Ethics Gap
  'ETH: Integrity & Role Duties': [4261200, 4261202],
  // Stakeholders, Harms, and Incentives
  'ETH: Conflicts of Interest': [4261201],
  // Speaking Up, Escalation, and Documentation
  'ETH: Speaking Up & Escalation': [4261203],
}

// CAREER_CORE1_MENTOR_HINTS — bespoke 1-line nudge per question, in the voice
// of a senior practitioner in that track's domain mentoring a first-year
// teammate. Names the reasoning move without giving the answer.

export const CAREER_CORE1_MENTOR_HINTS: Record<number, string> = {
  // ---------- Product Management ----------
  4260000: 'A feature request is the user\'s proposed solution. Your job is to extract the underlying job.',
  4260001: 'Loud signal is not large signal. Size the segment before you let three calls move the roadmap.',
  4260002: 'JTBD targets the progress the user wants — not their current workaround. Strip the hack from the job.',
  4260003: 'Impact alone is not a decision; compare expected value per sprint of effort.',
  4260004: 'Prioritization tests strategic fit. If it does not support the current outcome, it is a distraction in disguise.',
  4260005: 'Dependencies are not negotiable by enthusiasm. Sequence the enabling work first.',
  4260006: 'An MVP isolates the core value with the smallest useful experience — not the smallest product.',
  4260007: 'Wizard-of-Oz reduces demand risk before automation risk. Name which risk you are testing.',
  4260008: 'A north-star metric reflects recurring user value, not internal motion. Test it against gaming.',
  4260009: 'When the target metric moves and a guardrail breaks, the guardrail is telling you something.',
  4260010: 'Funnel diagnosis compares conversion rates between adjacent stages — not absolute counts.',
  4260011: 'Retention divides returning users by the original cohort base. Watch the denominator.',
  4260012: 'A testable hypothesis names the change, target user, expected outcome, and measurable criterion.',
  4260013: 'Small samples skewed by a single account cannot generalize. Call out the skew before the headline.',
  4260014: 'Growth that damages retention is a loan, not revenue. Name both sides of the trade.',
  4260015: 'A "no" is a cross-functional decision. Communicate the evidence, tradeoffs, and revisit trigger.',
  4260016: 'Pricing tests value capture. Per-seat works only when each seat actually creates value.',
  4260017: 'Platform work is investment. Test whether the speed gain justifies the foregone user-facing work.',
  4260018: 'Separate the request from the underlying problem before promising capacity to a single account.',
  4260019: 'Metrics that move through friction are gameable. Check whether retention confirms the activation gain.',
  4260020: 'Competitor moves are inputs, not instructions. Translate into customer, strategy, and opportunity questions.',
  4260021: 'Beta praise from power users hides discoverability risk. Look at the silent invitees too.',

  // ---------- Project Management ----------
  4260100: 'Adjectives create the illusion of alignment. Replace "amazing" with deliverables and success criteria.',
  4260101: 'Unconfirmed dates are risks dressed as plans. Validate, then update the plan if reality disagrees.',
  4260102: 'Decomposition makes work trackable. A WBS turns one large deliverable into owned work packages.',
  4260103: 'Milestones mark verified state changes, not routine activity. "Email sent" is not a milestone.',
  4260104: 'Change control evaluates changes; it does not ban them. Make tradeoffs explicit before scope expands.',
  4260105: 'Critical path is the longest dependency chain — not the sum of all tasks. Find what gates the finish.',
  4260106: 'Buffer is allocated against named uncertainty, visibly. Hidden buffer is private and erodes trust.',
  4260107: 'Parallel on a chart does not mean parallel in practice. Shared resources create implicit dependencies.',
  4260108: 'A risk entry needs description, impact, owner, and mitigation. "Vibes, shrug" is not an entry.',
  4260109: 'Escalate with options and impact before the timeline silently breaks. Late escalation removes choice.',
  4260110: 'Green that hides late critical tasks is signal pollution. Color is only as good as the inputs behind it.',
  4260111: 'Live meeting time is for blockers and decisions. Static status belongs in the pre-read.',
  4260112: 'An action item needs owner, action, due date, definition of done. Anything less sits.',
  4260113: 'Diverging calendars guarantee a missed handoff. Reconciling them is the PM job, not optional.',
  4260114: 'Recovery requires diagnosis, replanning, and tradeoffs — not exclamation points.',
  4260115: 'A retro is useful when lessons become specific process changes. "Communicate better" is a slogan.',
  4260116: 'Portfolio prioritization compares strategic value, constraints, dependencies, risk, and capacity — explicitly.',
  4260117: 'A vendor contract needs SLAs, escalation paths, and response times. Trust is not a contractual term.',
  4260118: 'Even helpful extras change scope. Route them through change control before squeezing testing.',
  4260119: 'Two missed check-ins is signal worth acting on now. Escalate before recovery options collapse.',
  4260120: 'Task count masks delivery risk when one blocker is on the critical path. Report the blocker.',
  4260121: 'Delivery includes the teams who operate the result. Support readiness and handoff are part of closeout.',

  // ---------- Consulting Cases ----------
  4260200: 'Clarify objective, metric, timeline, and decision before structuring. Solve the right problem.',
  4260201: 'A profit tree isolates where profit is changing. The structure guides data — it does not produce the answer.',
  4260202: 'Hypothesis-led means a tentative explanation followed by analysis that tests it. State and update.',
  4260203: 'Market-entry frames cover demand, competition, economics, feasibility, and risk. Cover the decision, not a detail.',
  4260204: 'Say "volume × price × time" out loud before the arithmetic. Formula first keeps math calm.',
  4260205: 'Gross margin % = (price − variable cost) / price. Direction matters — divide by price, not by cost.',
  4260206: 'Breakeven units = fixed cost / contribution per unit. The operator is division, not multiplication.',
  4260207: 'Sanity check the per-capita rate against real behavior. Large numbers can still be implausible.',
  4260208: 'State assumptions clearly, ground them, and be ready to revise. Hidden assumptions sink the case.',
  4260209: 'Patterns in charts become hypotheses. A timing concentration points at onboarding, not pricing.',
  4260210: 'Synthesis is the decision plus its reasons — not a tour of every analysis you ran.',
  4260211: 'A recommendation connects evidence to action. Match the tested change; do not extrapolate beyond it.',
  4260212: 'New data updates the logic, not the structure. Integrate and keep the frame.',
  4260213: 'The bottleneck is the lowest-capacity step. Everything upstream piles up; everything downstream goes idle.',
  4260214: 'When quantity falls proportionally less than price rises, demand is inelastic and revenue can grow.',
  4260215: 'M&A needs a value-creation thesis — synergies, capabilities, market access, financial return.',
  4260216: 'Nonprofit cases emphasize mission outcomes. Activity volume is not impact.',
  4260217: 'Correct errors transparently. Defending bad math destroys composure faster than the mistake did.',
  4260218: 'Market-share problems compare company growth to market growth. Internal-only diagnoses miss the position story.',
  4260219: 'When the average is flat but segments diverge, segment the analysis. Blends hide the real story.',
  4260220: 'Contribution = (price − variable cost) × volume. Net profit subtracts incremental fixed cost.',
  4260221: 'Decisive plus qualified beats indecisive. Name the main risk; it makes the call crisper, not weaker.',

  // ---------- Financial Modeling ----------
  4260300: 'Drivers first: units × price. Build revenue from operating inputs, not headline guesses.',
  4260301: 'Inputs and formulas should be visibly separate. Reviewers should not hunt for the assumptions.',
  4260302: 'Depreciation is non-cash. It lowers income but is added back in operating cash flow.',
  4260303: 'Buying PP&E with cash is an asset swap. Total assets are unchanged before depreciation.',
  4260304: 'A balance-sheet imbalance is a model bug. Find the missing flow before relying on outputs.',
  4260305: 'Consistent sign conventions prevent silent errors. Outflows negative throughout — no exceptions.',
  4260306: 'Interest depending on debt depending on cash creates a circular reference. Recognize the loop.',
  4260307: 'Gross profit = revenue × gross margin. $2.0M × 40% = $800K. Memorize the structure.',
  4260308: 'Inventory build absorbs cash. Working capital increases reduce operating cash flow.',
  4260309: 'Straight-line depreciation = cost / useful life. Salvage value is zero here.',
  4260310: 'Ending debt = beginning + borrowings − repayments. Sign each flow before summing.',
  4260311: 'FCF = EBIT(1 − t) + D&A − capex − ΔNWC. Walk the line and watch the signs.',
  4260312: 'Higher discount rate compresses future cash flows. Discount rate is valuation gravity.',
  4260313: 'A large output swing from a small input change is fragility. Sensitivity is the warning, not the verdict.',
  4260314: 'Scenarios group coherent assumption sets to show ranges. They support decisions, not predictions.',
  4260315: 'Consistent formulas, labeled inputs, visible checks. Merged cells and hidden formulas are audit failures.',
  4260316: 'Fragility in a key driver is something the model should highlight, not bury.',
  4260317: 'Lead with key assumptions, output range, decision implication, and limits. Models support judgment.',
  4260318: 'Models should respect real-world constraints. Add the hiring or capacity assumption explicitly.',
  4260319: 'Scenario realism tests assumptions together — collections and renewals when both can move.',
  4260320: 'Sign errors reverse meaning. A simple convention bug can corrupt the whole forecast story.',
  4260321: 'Decision-makers need a summary that compares plans on cost, service, assumptions, and risks.',

  // ---------- UX Design ----------
  4260400: 'Start with the user task and where the current dashboard fails it. Visual polish is downstream.',
  4260401: 'Task analysis breaks work into steps so friction and errors can be located.',
  4260402: 'Flows show steps and branches. Hide the branches and you lose the safety case.',
  4260403: 'Labels should match user vocabulary. IA fails when users cannot predict where things live.',
  4260404: 'Required fields that do not serve the task increase abandonment. Cut friction first.',
  4260405: 'If something does not look clickable, the affordance is failing — not the user.',
  4260406: 'Forty undifferentiated toggles is cognitive load by design. Group, prioritize, hierarchy.',
  4260407: 'Wireframes intentionally avoid polish so structure can be iterated cheaply.',
  4260408: 'Visual weight should reflect task priority. The primary action should look primary.',
  4260409: 'Empty states orient new users and offer a next step. Voids stall onboarding.',
  4260410: 'Feedback confirms the system heard the user. Silence reads as broken, not premium.',
  4260411: 'Destructive actions need separation, de-emphasis, and confirmation. Brighter is not safer.',
  4260412: 'Modals need correct focus management. Keyboard and assistive-tech users get stranded otherwise.',
  4260413: 'Responsive design adapts content and interaction, not just scale. Preserve task success.',
  4260414: 'A case study shows reasoning, not just screens. Reviewers grade the decisions.',
  4260415: 'A two-week estimate is a conversation, not a verdict. Explore alternatives and tradeoffs.',
  4260416: 'Critique is specific, tied to goals or principles, and actionable. "Vibes" is not feedback.',
  4260417: 'Five date pickers is a systems problem. Repeated patterns reduce cognitive and maintenance load.',
  4260418: 'Calm test rooms hide shift-change reality. Observe the workflow in its actual context.',
  4260419: 'A keyboard trap is an accessibility failure, not an edge case. Fix focus order and escape.',
  4260420: 'When four of six users miss a label, the design is the problem — not the audience.',
  4260421: 'Handoffs need responsive rules — priority columns, wrapping, sorting, empty states. Spell them out.',

  // ---------- Cybersecurity ----------
  4260500: 'Urgency is a phishing technique, not a legal requirement. Verify through a trusted channel.',
  4260501: 'Credential stuffing relies on reuse. One breach is enough when the same password is everywhere.',
  4260502: 'Real IT does not ask for MFA codes. One-time codes are proof of identity, not a courtesy.',
  4260503: 'Double extensions are a disguise pattern. Treat executable attachments from unknown senders as suspicious.',
  4260504: 'Attack surface is what attackers can probe. Internet-exposed services without need are added risk.',
  4260505: 'Phishing exploits attention and urgency, not exotic infrastructure. Simple still works.',
  4260506: 'Long, unique passphrases beat seasonal patterns. The manager makes uniqueness practical.',
  4260507: 'A password manager makes unique strong passwords sustainable. It does not replace device locking.',
  4260508: 'MFA adds a second factor. Imperfect, but it makes stolen passwords less sufficient alone.',
  4260509: 'Security is only as strong as the recovery path. Weak resets bypass strong logins.',
  4260510: 'Least privilege is the minimum needed for the task, time-bounded. Admin for read-only is wrong.',
  4260511: 'Roles map permissions to job needs. They support consistency, onboarding, and review.',
  4260512: 'Dormant active accounts are attacker targets and audit findings. Deprovision promptly.',
  4260513: 'Public spaces are common for opportunistic theft. Lock the device before walking away.',
  4260514: 'Patches close known weaknesses. Older vulnerabilities have automated exploits.',
  4260515: 'Geographic anomalies are one of the strongest takeover signals. Report and protect the account.',
  4260516: 'Containment first, evidence preservation second, escalation third. Random cleanup destroys both.',
  4260517: 'Culture improves when safe behavior is practical and socially supported. Blame creates silence.',
  4260518: 'Production access without current business need is a standing exposure. Offboard promptly.',
  4260519: 'Privacy obligations are time-sensitive. Local deletion does not recall the external copy.',
  4260520: 'Shared admin credentials destroy accountability. You cannot revoke one person from a shared secret.',
  4260521: 'Boxes are a classic prop. Politeness is not authorization — follow the visitor policy.',

  // ---------- Public Speaking ----------
  4260600: 'Pick the one durable takeaway first. Charts and jokes either support it or leave politely.',
  4260601: 'Earn attention in the first thirty seconds. Apologies and tab tours forfeit it.',
  4260602: 'Transitions explain why the next idea belongs. Without them, the middle disorients listeners.',
  4260603: 'Translate the technical cause into plain impact. Detail belongs in Q&A, not in the headline.',
  4260604: 'Slot minus buffer = target. 8 minutes − 30 seconds = 7:30. Pacing is for the audience, not you.',
  4260605: 'A deliberate pause makes you sound composed and the message easier to process. Use it.',
  4260606: 'Volume is usable clarity. Projection and articulation help the room without forcing a shout.',
  4260607: 'Stable posture, audience-facing, gestures that support meaning. The speaker is the value, not the deck.',
  4260608: 'Slides support the spoken point. If you can read them aloud, you are not adding value.',
  4260609: 'A short reset routine and a controlled first sentence beat caffeine and improvisation.',
  4260610: 'Mixed audiences need a clear business framing first, then selective technical detail.',
  4260611: 'A concise recap and a check for understanding stops a small fog from becoming a storm.',
  4260612: 'Restate the core question. It checks understanding and keeps Q&A focused and fair.',
  4260613: 'Fake precision craters credibility. Be accurate about uncertainty and commit to a follow-up.',
  4260614: 'Recommendation, evidence, risk control, next step. Decision-makers should not have to hunt.',
  4260615: 'Executive briefings reward decision-first structure. Lead with the action needed.',
  4260616: 'Build on the prior point, add your distinct contribution, keep it concise. Panels are collaborative.',
  4260617: 'Restate the takeaway, name the next step, close cleanly. Trailing endings dilute the message.',
  4260618: 'Senior listeners need decision, evidence, tradeoff, and ask — not the travel diary.',
  4260619: 'Signposts connect each section to the main message. Without throughline, data does not land.',
  4260620: 'Pauses around key numbers protect comprehension. Speed worsens the very problem nerves create.',
  4260621: 'Acknowledge, answer the substance calmly, offer follow-up. Matching aggression alienates the room.',

  // ---------- Negotiation ----------
  4260700: 'Positions are stated demands; interests are the reasons behind them. Interests create options.',
  4260701: 'BATNA is your private comparison point. It tells you when to walk, not what to disclose.',
  4260702: 'ZOPA exists when buyer max ≥ seller min. The overlap is the deal space, not the sum.',
  4260703: 'Counterpart analysis surfaces pressures, alternatives, authority, and success metrics. Prepare specifically.',
  4260704: 'A defensible anchor shapes the range. Random anchors lose credibility and invite pushback.',
  4260705: 'Reframe from price-only to total cost, risk, and outcomes. Volume does not change buyer math.',
  4260706: 'Test the assumption behind the demand. Asking what happens if it moves often reveals flexibility.',
  4260707: 'Slow the tempo and summarize each side\'s concern. Defensiveness drops; structure returns.',
  4260708: 'Concessions should be conditional. Trade price for scope, term, or timing — never give for free.',
  4260709: 'Asymmetric priorities create integrative trades. Build a package across the variables, not one number.',
  4260710: 'If-then sentences link a concession to something you receive. Make the exchange explicit.',
  4260711: 'Durable agreements reduce ambiguity. Specific SLAs survive the 2 a.m. outage.',
  4260712: 'Deadlock means the conversation is too narrow. Explore interests and variables to reopen options.',
  4260713: 'Moving goalposts and refusal to document signal bad faith. Protect your process; escalate if needed.',
  4260714: 'Be clear, respectful, problem-focused. Protecting your outcome does not require being hostile.',
  4260715: 'Reservation point is private; anchor is public. Open at the supported market value, not your floor.',
  4260716: 'Procurement is structural, not optional. Map sequence, owners, criteria, and timing.',
  4260717: 'Multi-party deals require coalition thinking. Map every party with approval power.',
  4260718: 'Asking for range and total compensation first protects you from anchoring against yourself.',
  4260719: 'When price is fixed, trade non-price terms — timing, phasing, tiers, length.',
  4260720: 'A bluffed BATNA collapses when called. Know the real cost of your alternatives before threatening.',
  4260721: 'Internal negotiation makes tradeoffs explicit, tied to business priorities — not who is loudest.',

  // ---------- People Management ----------
  4260800: 'Role clarity means outcomes, authority, and accountability — not just a deadline.',
  4260801: 'Trust grows from reliability. When a commitment changes, update early and reset explicitly.',
  4260802: 'A useful goal is specific enough to guide action and evaluate the result. Replace vague verbs with numbers.',
  4260803: 'Decision rights prevent parallel approvals. Name owner, advisors, and escalation path.',
  4260804: 'A 1:1 should surface blockers, risks, and development — not duplicate the tracker.',
  4260805: 'Feedback names behavior, impact, and a next step. Labels without behavior are unactionable.',
  4260806: 'Avoidance compounds. Difficult conversations early and respectfully cost less than later ones.',
  4260807: 'Feedback needs follow-up. Document the expectation and schedule a review.',
  4260808: 'Coaching builds judgment when skill is present. Direct when safety, urgency, or gaps demand it.',
  4260809: 'Diagnose skill, motivation, or system before prescribing. A motivated learner needs capability support.',
  4260810: 'Motivation gaps come from purpose, ownership, incentives, or burnout. Diagnose before prescribing.',
  4260811: 'When multiple capable people fail the same way, fix the system — not the people.',
  4260812: 'Delegation includes outcome, standards, timing, boundaries, and escalation triggers.',
  4260813: 'Push decision rights closer to the work. Reserve escalation for meaningful risks.',
  4260814: 'Job-relevant evidence beats vibes. Specific behaviors are the hiring signal.',
  4260815: 'Onboarding reduces uncertainty and builds momentum — context, access, relationships, early outcomes.',
  4260816: 'Separate goals, facts, constraints, and authority. That turns drama into a solvable decision.',
  4260817: 'Managing managers requires leverage — through goals, rhythms, coaching, calibration. Not task control.',
  4260818: 'Hinting in group meetings embarrasses without informing. Specific, private, timely beats vague and public.',
  4260819: 'Reclaiming work too quickly teaches the team to wait. Delegate outcomes with checkpoints, not chores.',
  4260820: 'Formal action should reflect pattern, severity, and context — not one visible incident.',
  4260821: 'Better meeting structure produces better input quality. Do not ask quieter employees to compensate.',

  // ---------- Sales Fundamentals ----------
  4260900: 'Discovery first. A pitch shaped by the buyer\'s problem outperforms autopilot every time.',
  4260901: 'Interest without budget, timeline, or owner has a long history of not closing.',
  4260902: 'Complex buying involves multiple stakeholders. Map who influences, blocks, approves, and uses.',
  4260903: 'Urgency comes from the cost of inaction. Ask what happens if nothing changes.',
  4260904: 'No current budget is not no possible budget. Uncover the funding path and approval authority.',
  4260905: 'Connect features to outcomes the buyer cares about. Specific operational impact beats product praise.',
  4260906: 'Savings minus cost equals net value. ROI framing needs clean assumptions, not headline gross.',
  4260907: 'Objection handling starts with curiosity and evidence — not defensiveness or awards-citing.',
  4260908: 'Social proof works when it is relevant, specific, and credible. Similar buyers, measurable outcomes.',
  4260909: 'Match risk reduction to the objection. A scoped pilot with criteria preserves both learning and discipline.',
  4260910: 'Trust depends on accurate expectations. Overpromising helps the call and damages the deal.',
  4260911: 'Mutual next steps are specific and owned. "Send me info" is a deal-ender.',
  4260912: 'Concrete conditions, timing, and scope are closing signals. Compliments and curiosity are not.',
  4260913: 'Forecast accuracy comes from evidence — buyer actions, process facts — not optimism.',
  4260914: 'Pipeline quality beats pipeline count. Disqualify or recycle stale opportunities honestly.',
  4260915: 'Honest postmortems separate facts from assumptions and identify controllable lessons.',
  4260916: 'Single-threaded deals stall. Multi-thread across users, blockers, and approvers.',
  4260917: 'Expansion still requires discovery. Adjacent teams have different workflows and stakeholders.',
  4260918: 'Relevance comes from understanding context. Discovery earns the right pitch.',
  4260919: 'Map the buying process and engage the economic buyer. A happy user is not the approver.',
  4260920: 'Explore what "too expensive" means — budget, value, alternatives, or risk — before discounting.',
  4260921: 'Confirm decision process, owner, timeline, and next concrete action before the call ends.',

  // ---------- Customs Broker ----------
  4261000: 'Classification starts with what the article is and how the schedule organizes it. Description, materials, function, notes.',
  4261001: 'HTS digits move broad to narrow. Notes and provisions at different levels can change the applicable rate.',
  4261002: 'For sets, the essential-character analysis identifies the component or function that defines the whole.',
  4261003: 'Dutiable assists are added to transaction value. $20,000 + $5,000 = $25,000 customs value.',
  4261004: 'Ad valorem duty = value × rate. $18,000 × 0.04 = $720. Watch decimal placement.',
  4261005: 'Valuation is item-specific inclusion or exclusion analysis — not a blanket total of every invoice line.',
  4261006: 'Country of origin depends on applicable rules and where qualifying production or transformation occurred.',
  4261007: 'Reconcile inconsistent source documents with the importer before entry. Averaging conflicts is not entry diligence.',
  4261008: 'An entry summary reports classification, value, origin, duties, and importer data for CBP review.',
  4261009: 'Customs calendars carry legal consequences — penalties, lost rights, costly corrections.',
  4261010: 'Reasonable care means fresh analysis when the product changed. Prior classifications are inputs, not entitlements.',
  4261011: 'Preference claims need origin-rule satisfaction and supporting documentation — not enthusiasm.',
  4261012: 'Auditors require organized, retrievable records. An "stuff" inbox folder is not a defensible filing system.',
  4261013: 'Voluntary correction usually carries lower risk than waiting for discovery. Pursue the right mechanism.',
  4261014: 'Broker ethics require truthful, diligent filings. Client pressure does not justify misdeclaration.',
  4261015: 'PGA holds clear faster with accurate, documented responses coordinated across importer and parties.',
  4261016: 'Origin documents must reconcile. Three conflicting countries is a clear escalation trigger.',
  4261017: 'AD/CVD exposure can dwarf the base duty. Potential scope issues deserve specialized review and documentation.',

  // ---------- Medical Coding (CPC) ----------
  4261100: 'ICD-10-CM is diagnosis; CPT/HCPCS is procedure and service. Separate the jobs from the start.',
  4261101: 'Code only documented detail. Query when billable specificity is missing — do not invent.',
  4261102: 'Laterality is provider-documented. Right, left, bilateral, or unspecified — match the record.',
  4261103: 'Some codes require encounter context — initial, subsequent, sequela. Match the documented care stage.',
  4261104: 'Medical necessity links the service to the documented clinical need. Unsupported pairings drive denials.',
  4261105: 'Bundling rules prevent separately billing components included in the primary service unless documented otherwise.',
  4261106: 'Modifiers explain specific circumstances; they are not payment buttons. Documentation has to support them.',
  4261107: 'Mismatches across diagnosis, procedure, modifier, or payer requirement drive preventable denials.',
  4261108: 'Code level is supported by documented work and rules — not by how the visit felt.',
  4261109: 'Queries should be neutral and tied to documentation gaps. No leading, no inventing.',
  4261110: 'Audit readiness depends on traceability. A brief rationale links your code to the record and the rule.',
  4261111: 'Production with denials is negative throughput. Balance speed with accuracy.',
  4261112: 'Calibrate variation by comparing rationale against guidelines. Random selection is not policy.',
  4261113: 'When seven characters are required and the base is shorter, use X placeholders to keep the seventh in position.',
  4261114: 'Unit reporting follows the code definition. 40 mg / (10 mg per unit) = 4 units.',
  4261115: 'First-listed reflects the primary reason for the encounter per documentation. Sequencing has rules, not aesthetics.',
  4261116: 'Many post-op visits sit inside the global package. Confirm separately reportable before billing.',
  4261117: 'Repeated denial patterns are root-cause signals. Targeted feedback, prompts, and follow-up measurement.',

  // ---------- Professional Ethics ----------
  4261200: 'Curiosity does not erase the obligation. Stop reviewing and report the access mistake.',
  4261201: 'Conflicts are managed through disclosure and process — not self-asserted objectivity.',
  4261202: 'Removing valid data is misrepresentation. Use context or annotation; never deletion.',
  4261203: 'Use internal channels first, document the issue, and respect that the checklist exists to prevent harm.',
}

// CAREER_CORE1_CORRECT_SHORTENED — questions where the correct answer ran
// substantially longer than the longest distractor. Each entry shortens
// `correct` to a punchier line and pushes the trimmed explanatory detail into
// `lessonAddendum`.

export const CAREER_CORE1_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // ---------- Product Management ----------
  4260015: {
    newCorrect: 'Share the decision, evidence, tradeoffs, current priority, and revisit trigger.',
    lessonAddendum: 'Cross-functional partners plan around clear "no"s when they understand the reasoning and the revisit date. A bare "no" produces repeated asks; a memo with context produces aligned planning.',
  },
  4260018: {
    newCorrect: 'Clarify the renewal risk and underlying problem, then compare against broader permission pain and tradeoffs.',
    lessonAddendum: 'A single renewal threat is real signal, but not a complete roadmap input on its own. Strong product judgment sizes the request against the broader pattern before promising capacity.',
  },
  4260020: {
    newCorrect: 'Frame the competitive concern, gather customer and strategic evidence, then decide on tradeoffs.',
    lessonAddendum: 'Competitor moves can reveal real market shifts or just political pressure. Translating them into customer, strategy, and opportunity questions filters signal from noise before committing capacity.',
  },

  // ---------- Project Management ----------
  4260114: {
    newCorrect: 'Diagnose root causes, revise the schedule, decide tradeoffs, communicate impact, track corrective actions.',
    lessonAddendum: 'Recovery after slippage is active control, not calendar denial. Each step — diagnosis, replan, tradeoff, communication, follow-up — addresses a different failure mode of slipped milestones.',
  },
  4260118: {
    newCorrect: 'Route the added scope through change control; decide keep, defer, or remove based on impact.',
    lessonAddendum: 'Even helpful intent does not pay the testing or coordination cost. Change discipline keeps the team honest about value, schedule, and quality before the plan silently grows.',
  },
  4260121: {
    newCorrect: 'Add support readiness, documentation, and handoff checks to the launch plan before closeout.',
    lessonAddendum: 'On-time go-live with a broken support handoff is a hidden incident. Closeout has to verify that the teams operating the result after launch are actually ready.',
  },

  // ---------- Consulting Cases ----------
  4260210: {
    newCorrect: 'Recommend entering the market — demand and economics are attractive, with a pilot to manage regulatory risk.',
    lessonAddendum: 'Strong synthesis names the decision, the load-bearing reasons, and the key risk or next step. Pilot framing handles regulatory uncertainty without ducking the decision the interviewer asked for.',
  },
  4260218: {
    newCorrect: 'Compare company growth to market growth, then examine volume, price, segments, and competitive dynamics.',
    lessonAddendum: 'Market-share problems are relative-position problems. Revenue can rise while position weakens if competitors or segments grow faster — the analysis has to put the company and the market in the same frame.',
  },
  4260220: {
    newCorrect: 'It adds $30,000 in profit: contribution of $120,000 minus $90,000 fixed costs.',
    lessonAddendum: 'Per unit: $40 − $28 = $12 contribution. Across 10,000 units: $120,000 total contribution. Subtract added fixed cost of $90,000 to get $30,000 incremental profit. The useful answer in cases is incremental, not top-line.',
  },
  4260221: {
    newCorrect: 'Recommend entry conditionally — cite profitability, the hiring dependency, the key risk, and a validation step.',
    lessonAddendum: 'Decisive plus qualified is the case-recommendation shape interviewers reward. Hiding the risk produces a recommendation that fails as soon as hiring slips; naming it makes the advice crisper, not weaker.',
  },

  // ---------- Financial Modeling ----------
  4260317: {
    newCorrect: 'Explain key assumptions, output range, decision implication, and the limits of what the model proves.',
    lessonAddendum: 'Models support judgment; they do not replace it. A strong explanation covers assumptions, range, implication, and uncertainty — not cell-by-cell narration or a single optimistic point estimate.',
  },
  4260318: {
    newCorrect: 'Add a capacity constraint or hiring assumption so revenue growth reflects operational limits.',
    lessonAddendum: 'A forecast that ignores fulfillment capacity is unreachable. Adding the constraint makes the growth line credible and forces the conversation about what would need to be true operationally.',
  },
  4260319: {
    newCorrect: 'Build a downside scenario that changes collections and renewals together; show liquidity impact.',
    lessonAddendum: 'Cash risk often appears when operating assumptions move together. Stress-testing one variable while holding others fixed understates the scenario the manager actually asked about.',
  },
  4260321: {
    newCorrect: 'Add a concise summary comparing the plans on cost, service level, assumptions, and key risks.',
    lessonAddendum: 'A 15-tab workbook cannot be the deliverable when someone has 90 minutes and needs a decision. The model exists to feed a summary view that translates calculations into the tradeoffs the decision-maker owns.',
  },

  // ---------- UX Design ----------
  4260414: {
    newCorrect: 'Problem, user evidence, constraints, iterations, tradeoffs, final outcome, and what changed.',
    lessonAddendum: 'Reviewers grade design judgment, not visual taste. The case study has to show how decisions were made — what the user evidence said, what constraints applied, what was tried, and what shifted as a result.',
  },
  4260420: {
    newCorrect: 'Revise the label or IA and re-test whether the new wording improves task success.',
    lessonAddendum: 'Usability findings are evidence about how the design communicates. When four of six users miss a label, the product adapts before blaming the audience. Re-testing closes the loop.',
  },
  4260421: {
    newCorrect: 'Provide responsive behavior — priority columns, wrapping, sorting, empty and overflow states.',
    lessonAddendum: 'Design handoff covers the conditions users actually encounter. Explicit mobile rules prevent rushed implementation decisions that damage usability on the primary platform.',
  },

  // ---------- Cybersecurity ----------
  4260516: {
    newCorrect: 'Disconnect or isolate the device, preserve evidence, and escalate to the security contact.',
    lessonAddendum: 'Containment, evidence preservation, and escalation are the three jobs of basic first response. Continued interaction spreads infection and destroys forensic clues; random cleanup does both.',
  },
  4260520: {
    newCorrect: 'Shared credentials remove accountability and increase the risk of uncontrolled access.',
    lessonAddendum: 'A shared admin password in chat is searchable, persistent, and accessible to anyone who later joins the channel. You cannot revoke one person from a shared secret, and audit trails become unworkable.',
  },
  4260521: {
    newCorrect: 'Follow the visitor policy — ask them to badge in or contact reception or security.',
    lessonAddendum: 'Physical access feeds digital risk: once inside, an attacker can plug into the network or shoulder-surf. Boxes are a classic prop; politeness is not authorization.',
  },

  // ---------- Public Speaking ----------
  4260618: {
    newCorrect: 'Lead with the decision needed, the few facts that matter, options, recommendation, and risks.',
    lessonAddendum: 'Executives need a recommendation to react to. Speed-reading 35 slides of project history loses them before the budget conversation arrives; the speaker\'s job is to translate the 35 slides into the 5-minute decision input.',
  },
  4260620: {
    newCorrect: 'Slow down at key points, pause after important numbers, and check for understanding.',
    lessonAddendum: 'Pacing is not theatrical — it gives important ideas room to land. Apologizing for nerves amplifies them; pausing after a number signals that the number matters and lets the room actually hear it.',
  },
  4260621: {
    newCorrect: 'Acknowledge the concern, answer the substance calmly, and offer follow-up on details if needed.',
    lessonAddendum: 'Hostile questions are tests of composure as much as content. Matching the tone alienates the rest of the room; calm acknowledgment plus a clear answer preserves credibility with everyone present.',
  },

  // ---------- Negotiation ----------
  4260706: {
    newCorrect: 'What happens operationally if delivery moves to July, and which milestones are truly fixed?',
    lessonAddendum: 'Diagnostic questions surface the constraint behind a stated demand. A "mandatory" date often reflects one downstream milestone — once that is named, the rest of the date can flex.',
  },
  4260718: {
    newCorrect: 'Ask for the budgeted range and clarify total compensation and scope before anchoring a number.',
    lessonAddendum: 'Naming a number first hands the counterpart the bargaining surplus. Asking for range and scope keeps the conversation grounded and protects you from anchoring against your own floor.',
  },
  4260721: {
    newCorrect: 'Map shared priorities, deadlines, partial allocation options, and the impact of delaying each workstream.',
    lessonAddendum: 'Internal negotiation makes the tradeoff explicit instead of pushing it onto the shared resource. The goal is a workable allocation tied to business priorities — not equal splits that satisfy neither project.',
  },

  // ---------- People Management ----------
  4260805: {
    newCorrect: 'You interrupted the customer twice in the demo; that hid their concern. Next time, pause and ask a follow-up.',
    lessonAddendum: 'Clear feedback names the behavior, the impact, and the next step. Vague labels ("you were weird") are unactionable and easy to dismiss. Specificity tied to a single recent moment is what makes it land.',
  },
  4260818: {
    newCorrect: 'Give timely, specific, private feedback — examples, impact, expectations, and support.',
    lessonAddendum: 'Hinting in group meetings embarrasses without informing, and rewriting the work silently burns the manager while removing the learning opportunity. Direct, specific, private is the formula that actually changes behavior.',
  },
  4260819: {
    newCorrect: 'Delegate outcomes with clear checkpoints, coaching, and decision boundaries — do not reclaim too quickly.',
    lessonAddendum: 'Rescuing too early teaches the team to wait instead of own. Capability grows when responsibility is real and support is clear. Checkpoints and boundaries are how managers stay close without reclaiming the work.',
  },
  4260820: {
    newCorrect: 'Check for a pattern, understand the cause, and respond proportionately — coaching, or formal action if warranted.',
    lessonAddendum: 'Performance management has to be fair and evidence-based. A single visible incident may need direct coaching; formal action should reflect pattern, severity, and context. Skipping that test damages trust with the broader team.',
  },
  4260821: {
    newCorrect: 'Set meeting norms that invite input broadly; use structured turns when useful; follow up with quieter employees.',
    lessonAddendum: 'Better input quality often comes from better meeting structure. Asking quieter employees to interrupt better places the cost in the wrong place; the design of the meeting is what changes who contributes.',
  },

  // ---------- Sales Fundamentals ----------
  4260918: {
    newCorrect: 'Ask about the prospect\'s goals, pain points, process, decision criteria, and alternatives before pitching.',
    lessonAddendum: 'Sales discovery earns the right pitch. Understanding the buyer\'s context lets the rep connect value to the actual problem instead of hoping a faster feature list does the work.',
  },
  4260919: {
    newCorrect: 'Map the buying process and work with the champion to engage the economic buyer and decision criteria.',
    lessonAddendum: 'Qualification includes authority, process, timing, and value. A happy user matters, but deals also need the people who approve the money and the risk. The champion is the path, not the destination.',
  },
  4260921: {
    newCorrect: 'Confirm the buyer\'s decision process, owner, timeline, and the next concrete action before the call ends.',
    lessonAddendum: 'Mutual next steps are specific and owned. Enthusiasm without a next step usually fades within days; the discipline of agreeing on owner, date, and purpose before hanging up is what turns interest into pipeline.',
  },

  // ---------- Customs Broker ----------
  4261005: {
    newCorrect: 'Identify which charges are legally included or excluded — do not blindly total invoice labels.',
    lessonAddendum: 'Common valuation mistakes come from including or excluding charges without legal analysis. The broker needs documentation and a defensible rationale that connects each treatment to the rule.',
  },
  4261008: {
    newCorrect: 'It reports classification, value, origin, duties, and importer data for CBP review.',
    lessonAddendum: 'Entry summary is a core customs filing, not an after-sale formality. Accurate classification, value, origin, and duty data support both release and the liquidation process that closes the entry.',
  },

  // ---------- Medical Coding (CPC) ----------
  4261117: {
    newCorrect: 'Give targeted feedback, update documentation prompts, and measure whether laterality capture improves.',
    lessonAddendum: 'Audit strategy follows the root-cause logic: identify the repeated pattern, intervene where it is produced (provider documentation), and measure the metric that should move. Appeals without a root-cause fix repeat the same denials next quarter.',
  },

  // ---------- Professional Ethics ----------
  4261201: {
    newCorrect: 'Disclose the relationship and follow the conflict-of-interest process before participating further.',
    lessonAddendum: 'Conflicts of interest are managed through disclosure and process — the goal is to protect fairness and trust, not to rely on self-asserted objectivity. Concealing the relationship turns a manageable conflict into a deception problem.',
  },
  4261202: {
    newCorrect: 'Explain that removing valid data would mislead readers; propose a transparent annotation or context instead.',
    lessonAddendum: 'Ethical analysis preserves data integrity. Context, annotation, or methodology notes can explain unusual results without distorting them; deletion or smoothing without disclosure turns communication into misrepresentation.',
  },
  4261203: {
    newCorrect: 'Raise the concern through the team lead or safety channel and document the issue.',
    lessonAddendum: 'Speaking up early through the right channel lets the organization act without turning concern into chaos. Deadlines do not outrank safety requirements — the checklist exists precisely to prevent the failure mode that pressure encourages.',
  },
}
