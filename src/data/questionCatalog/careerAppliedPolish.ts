// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the career agent-generated applied bank (medical, regulatoryAffairs,
// clinicalResearch, supplyChain, technicalSales — ~88 questions).
//
// CAREER_APPLIED_SUB_TOPICS groups questions into lesson-shaped clusters.
// Because the bank spans five tracks with overlapping chapter names, clusters
// are keyed by question id (number → cluster name), not chapter title.
//
// CAREER_APPLIED_MENTOR_HINTS overrides the generic scaffold hint with a
// one-line second-person nudge in the voice of an experienced practitioner
// mentoring a junior teammate.
//
// CAREER_APPLIED_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct ≥1.8x longer than longest wrong AND ≥20
// chars longer). Trimmed detail is reattached via `lessonAddendum`.

export const CAREER_APPLIED_SUB_TOPICS: Record<number, string> = {
  // ============================================================
  // MEDICAL REASONING (4260400–4260417)
  // ============================================================
  // Cluster: Triage & Acute Stability
  4260400: 'Triage & Acute Stability',
  4260402: 'Triage & Acute Stability',
  4260415: 'Triage & Acute Stability',
  // Cluster: History, Exam & Mindset
  4260401: 'History, Exam & Mindset',
  4260412: 'History, Exam & Mindset',
  // Cluster: Differential & Mechanism
  4260403: 'Differential & Mechanism',
  4260416: 'Differential & Mechanism',
  // Cluster: Tests & Bayesian Updating
  4260404: 'Tests & Bayesian Updating',
  4260405: 'Tests & Bayesian Updating',
  4260406: 'Tests & Bayesian Updating',
  4260407: 'Tests & Bayesian Updating',
  4260413: 'Tests & Bayesian Updating',
  // Cluster: Bias & Safe Reasoning
  4260408: 'Bias & Safe Reasoning',
  // Cluster: Communication & Handoffs
  4260409: 'Communication & Handoffs',
  4260410: 'Communication & Handoffs',
  4260411: 'Communication & Handoffs',
  4260414: 'Communication & Handoffs',
  4260417: 'Communication & Handoffs',

  // ============================================================
  // REGULATORY AFFAIRS (4260500–4260517)
  // ============================================================
  // Cluster: Intended Use & Classification
  4260500: 'Intended Use & Classification',
  4260502: 'Intended Use & Classification',
  4260503: 'Intended Use & Classification',
  // Cluster: Claims & Labeling
  4260501: 'Claims & Labeling',
  4260516: 'Claims & Labeling',
  // Cluster: Evidence & Submission Readiness
  4260504: 'Evidence & Submission Readiness',
  4260505: 'Evidence & Submission Readiness',
  4260508: 'Evidence & Submission Readiness',
  4260513: 'Evidence & Submission Readiness',
  4260514: 'Evidence & Submission Readiness',
  4260515: 'Evidence & Submission Readiness',
  // Cluster: Change Control & Document Discipline
  4260506: 'Change Control & Document Discipline',
  4260507: 'Change Control & Document Discipline',
  4260517: 'Change Control & Document Discipline',
  // Cluster: Post-Market, CAPA & Vigilance
  4260509: 'Post-Market, CAPA & Vigilance',
  4260510: 'Post-Market, CAPA & Vigilance',
  4260511: 'Post-Market, CAPA & Vigilance',
  4260512: 'Post-Market, CAPA & Vigilance',

  // ============================================================
  // CLINICAL RESEARCH (4260600–4260617)
  // ============================================================
  // Cluster: Consent & Participant Rights
  4260600: 'Consent & Participant Rights',
  4260603: 'Consent & Participant Rights',
  // Cluster: Eligibility & Visit Logistics
  4260601: 'Eligibility & Visit Logistics',
  4260606: 'Eligibility & Visit Logistics',
  4260615: 'Eligibility & Visit Logistics',
  // Cluster: Safety & Deviations
  4260602: 'Safety & Deviations',
  4260607: 'Safety & Deviations',
  // Cluster: Source Data & Data Quality
  4260604: 'Source Data & Data Quality',
  4260605: 'Source Data & Data Quality',
  4260608: 'Source Data & Data Quality',
  4260609: 'Source Data & Data Quality',
  4260614: 'Source Data & Data Quality',
  // Cluster: Monitoring, IP & Closeout
  4260610: 'Monitoring, IP & Closeout',
  4260611: 'Monitoring, IP & Closeout',
  4260612: 'Monitoring, IP & Closeout',
  4260613: 'Monitoring, IP & Closeout',
  4260616: 'Monitoring, IP & Closeout',
  // Cluster: Site Roles & Startup
  4260617: 'Site Roles & Startup',

  // ============================================================
  // SUPPLY CHAIN (4260700–4260717)
  // ============================================================
  // Cluster: Demand & Forecasting
  4260700: 'Demand & Forecasting',
  4260701: 'Demand & Forecasting',
  4260702: 'Demand & Forecasting',
  // Cluster: Inventory & Service Levels
  4260703: 'Inventory & Service Levels',
  4260704: 'Inventory & Service Levels',
  4260705: 'Inventory & Service Levels',
  4260717: 'Inventory & Service Levels',
  // Cluster: Capacity, Bottlenecks & Flow
  4260706: 'Capacity, Bottlenecks & Flow',
  4260707: 'Capacity, Bottlenecks & Flow',
  4260708: 'Capacity, Bottlenecks & Flow',
  // Cluster: Suppliers, Transport & Network
  4260709: 'Suppliers, Transport & Network',
  4260710: 'Suppliers, Transport & Network',
  // Cluster: Metrics, KPIs & Communication
  4260711: 'Metrics, KPIs & Communication',
  4260712: 'Metrics, KPIs & Communication',
  4260713: 'Metrics, KPIs & Communication',
  4260714: 'Metrics, KPIs & Communication',
  4260715: 'Metrics, KPIs & Communication',
  // Cluster: S&OP & Cross-Functional Planning
  4260716: 'S&OP & Cross-Functional Planning',

  // ============================================================
  // TECHNICAL SALES (4260800–4260817)
  // ============================================================
  // Cluster: Discovery & Qualification
  4260800: 'Discovery & Qualification',
  4260801: 'Discovery & Qualification',
  4260802: 'Discovery & Qualification',
  4260803: 'Discovery & Qualification',
  // Cluster: Demo & Value Framing
  4260804: 'Demo & Value Framing',
  4260805: 'Demo & Value Framing',
  4260808: 'Demo & Value Framing',
  // Cluster: Architecture & Technical Objections
  4260807: 'Architecture & Technical Objections',
  4260810: 'Architecture & Technical Objections',
  4260811: 'Architecture & Technical Objections',
  4260815: 'Architecture & Technical Objections',
  // Cluster: Security & Compliance
  4260806: 'Security & Compliance',
  // Cluster: Pilots, MAPs & Deal Closing
  4260809: 'Pilots, MAPs & Deal Closing',
  4260814: 'Pilots, MAPs & Deal Closing',
  4260816: 'Pilots, MAPs & Deal Closing',
  4260817: 'Pilots, MAPs & Deal Closing',
  // Cluster: Cross-Functional Partnership
  4260812: 'Cross-Functional Partnership',
  4260813: 'Cross-Functional Partnership',
}

export const CAREER_APPLIED_MENTOR_HINTS: Record<number, string> = {
  // ---------- Medical Reasoning ----------
  4260400: 'Triage chases physiology, not story volume. Chest pressure with diaphoresis is your sickest patient in the room.',
  4260401: 'Symptom comes out of the patient\'s mouth; sign comes off your instrument. Chart location does not relabel either one.',
  4260402: 'First-pass questions hunt red flags — airway, breathing, circulation, mental status. Save the social history for later.',
  4260403: 'Premature closure kills patients. Keep two or three explanations live until evidence narrows the field.',
  4260404: 'Sensitive tests rule out. SnNOut: a negative on a sensitive test makes the disease less likely.',
  4260405: 'Specific tests rule in. SpPIn: a positive on a specific test makes the disease more likely.',
  4260406: 'Absolute is the simple subtraction; relative divides by the baseline. Always quote both — relative reads bigger than it is.',
  4260407: 'Bayes pays attention to base rates. A great test on a rare disease still drowns true positives in false ones.',
  4260408: 'Anchoring means you fell in love with the first impression. Treat new contradictory data as a reason to reopen the case.',
  4260409: 'Severe drug-class allergy is a hard stop. The order on the screen does not override what the patient just told you.',
  4260410: 'A handoff is a reconstruction kit, not a goodbye. Lead with the active concern and the if-then for deterioration.',
  4260411: 'Honest uncertainty names the leading possibility and what evidence you are still waiting on. False certainty is a lawsuit.',
  4260412: 'A contraindication is a do-not-give signal driven by a pre-existing factor. It is not a side effect or a billing code.',
  4260413: 'Order the test that changes the next decision, weighted toward the dangerous possibility. Curiosity is not an indication.',
  4260414: 'Discharge instructions are red-flag triggers, not a feelings forecast. Spell out what should make them turn around.',
  4260415: 'When a patient looks bad, ABCs come before the differential. Stabilize first, sort the story second.',
  4260416: 'Narrow the differential by matching evidence to mechanism. Drama and recency are not Bayesian inputs.',
  4260417: 'Document what changed, why it changed, and what happens next. The next clinician should be able to reconstruct your reasoning.',

  // ---------- Regulatory Affairs ----------
  4260500: 'Intended use is the steering wheel of regulatory strategy. A new diagnostic claim can rewrite classification, evidence, and pathway.',
  4260501: 'Claims must match the evidence behind them. A usability study cannot carry a clinical-outcome verb like "prevents."',
  4260502: 'Risk class scales the burden. Higher harm potential means more evidence, tighter controls, and deeper traceability.',
  4260503: 'Classification starts from intended use, user, mode of action, and risk — never from convenience or deadline pressure.',
  4260504: 'A traceability matrix is the spine of your file. User need → requirement → test → risk → evidence, with no gaps.',
  4260505: 'Gap analysis is the pre-submission audit you run on yourself. Find the holes before the reviewer does.',
  4260506: 'Document control exists so the version in the binder matches the version in the file. Uncontrolled drafts become audit findings.',
  4260507: 'Every design change needs an impact assessment. Safety, effectiveness, claims, intended use — any hit can trigger notification.',
  4260508: 'Claims, technical behavior, and clinical evidence must tell one story. Cross-functional alignment is the regulatory job.',
  4260509: 'CAPA = root cause + correction + prevention + effectiveness check. "Be more careful" is not corrective action.',
  4260510: 'Inspection responses are factual, transparent, and corrective. Excuses and post-hoc fabrication escalate findings.',
  4260511: 'Complaint trend review is a post-market obligation even when no one was hurt. Patterns are how serious issues surface.',
  4260512: 'Vigilance has statutory clocks. A serious adverse event triggers assessment and possibly reporting — not next quarter.',
  4260513: 'Reviewer-friendly rationale ties the choice to evidence: validation showed X, so we picked Y. Preference is not justification.',
  4260514: 'Bench data answers technical questions; outcome claims need clinical evidence. Pick the evidence to fit the claim, not the other way around.',
  4260515: 'Fully complete means done — not "almost done." Count only finished sections in the numerator.',
  4260516: 'The strongest claim on the page defines your regulatory exposure. A softer adjacent phrase does not neutralize a disease claim.',
  4260517: 'Inspection-ready means current, controlled, complete, and retrievable in minutes. Volume without searchability is not readiness.',

  // ---------- Clinical Research ----------
  4260600: 'Consent precedes study procedures. Enthusiasm, trust, and even signing later do not substitute for the conversation up front.',
  4260601: 'Eligibility criteria are not suggestions. If a candidate fails a criterion, the protocol or sponsor — not the coordinator — clarifies it.',
  4260602: 'Document the deviation, escalate per protocol, and protect the participant. Never backdate a missed visit to clean the chart.',
  4260603: 'Voluntary withdrawal is a participant right, and it must not affect their routine care. Say so plainly during consent.',
  4260604: 'Every CRF entry needs a source. If you cannot point a monitor at the original record, the data is not verifiable.',
  4260605: 'Resolve queries by checking the source, not by closing them cosmetically. Source-to-CRF, never CRF-to-source.',
  4260606: 'Day 30 ± 3 means days 27 through 33 are in window. Day 34 is one day out and counts as a deviation.',
  4260607: 'Capture every new medical event after the study drug starts. AE definitions do not depend on the participant\'s vocabulary.',
  4260608: 'Concomitant meds confound safety, efficacy, and eligibility. Tracking them keeps your dataset interpretable.',
  4260609: 'If you can predict the next assignment, allocation concealment is broken — and so is the trial\'s bias control.',
  4260610: 'The delegation log proves who was authorized and trained. Out-of-date logs are one of the most common inspection findings.',
  4260611: 'Drug accountability is simple arithmetic: received = dispensed + remaining + returned/lost. Any gap needs reconciliation.',
  4260612: 'Pre-monitor prep means current source, consents, and resolved queries within arm\'s reach. Hospitality is not preparation.',
  4260613: 'Repeated late entries are a process problem. Retrain, restructure, and verify the fix — do not just send an annoyed email.',
  4260614: 'Blinding controls assessment bias. If you do not need to know the assignment, you should not see the assignment.',
  4260615: 'Eligibility is binary: meet all inclusion AND fail no exclusion. A single exclusion knocks the candidate out absent formal clarification.',
  4260616: 'Closeout is the final audit trail: docs complete, queries closed, IP reconciled, records retained per regulation.',
  4260617: 'Startup is dependency management. Track contracts, IRB, training, and IP shipment per site — the slowest step gates enrollment.',

  // ---------- Supply Chain ----------
  4260700: 'Start with the simple average before adding judgment. (100+105+98+97)/4 = 100 is your baseline; adjust later.',
  4260701: 'A repeating calendar pattern is seasonality, not noise. Bake it into the forecast model, do not average it away.',
  4260702: 'Convention: error = actual − forecast. Positive means you under-forecasted; sign matters for bias diagnosis.',
  4260703: 'Reorder point = demand during lead time + safety stock. 20×5 + 30 = 130. Forgetting safety stock causes stockouts.',
  4260704: 'Safety stock buys you protection against variability in demand or lead time. It is a working-capital cost, not free insurance.',
  4260705: 'Higher service level means more inventory and more working capital. Always quote the tradeoff when leadership asks for "just a bit more."',
  4260706: 'A serial line runs at the speed of its slowest step. The 50-unit station is your bottleneck, period.',
  4260707: 'Utilization = load / capacity. 190/200 = 95%. High utilization is fragile to variability — leave slack on purpose.',
  4260708: 'As utilization approaches 100%, queue length explodes. Variability needs slack to absorb; that is the M/M/1 lesson.',
  4260709: 'On-time in-full is the gold-standard reliability KPI. It captures both timeliness and completeness in one number.',
  4260710: 'Compare incremental freight against avoided stockout cost. $900 air to save a $5K outage is a buy.',
  4260711: 'If the factory is on time, the delay lives downstream — staging, pickup, transit, receiving. Trace the handoff.',
  4260712: 'A narrow KPI shapes narrow behavior. Pair cost metrics with service metrics, or you will optimize one and break the other.',
  4260713: 'Recency is not root cause. Compare lanes, volumes, and baselines before you blame the newest variable.',
  4260714: 'Exception management triages by impact and actionability. High-value, late, no recovery date — that is your first call.',
  4260715: 'Scenario analysis surfaces tradeoffs; it does not promise certainty. Show cost, service, and resilience on the same page.',
  4260716: 'S&OP aligns demand, supply, and finance into one plan. Separate plans are the disease S&OP cures.',
  4260717: 'Multi-echelon thinking balances stock across nodes. Central overstock plus regional stockout is a network problem, not a node problem.',

  // ---------- Technical Sales ----------
  4260800: 'Demo before discovery is malpractice. Anchor on the pain and the success criteria first, then show only what proves value.',
  4260801: 'Map the buying committee, the criteria, and the approval sequence. Champions help; they rarely sign alone.',
  4260802: 'Acronyms are not requirements. Push for thresholds, volumes, identity provider, and current pain before scoping anything.',
  4260803: 'Curiosity is not intent. Without owner, budget, and timeline, this is a nurture, not a contract.',
  4260804: 'Tailor the demo to the buyer\'s outcome. For a manufacturing prospect, downtime detection beats every admin screen.',
  4260805: 'Translate features into business outcomes — time saved, risk reduced, audits faster. Color and "logs exist" do not sell.',
  4260806: 'Security objections need documentation and the right reviewers. Jazz hands and arguments lose deals.',
  4260807: 'Scope integration risk: systems, data flow, constraints, validation. Unbounded "yes" becomes a post-signature failure.',
  4260808: 'Annualize cleanly: 10 hrs × $50 × 52 = $26K. Sanity-check your zeros — ROI math errors burn credibility.',
  4260809: 'A pilot without success criteria is a hostage situation. Define scope, users, data, dates, and exit decision up front.',
  4260810: 'Start whiteboards with requirements: direction, volume, latency, failure mode. Picking a database first signals junior.',
  4260811: 'Batch vs real-time is a workload question, not a fashion question. Match latency, cost, and complexity to the use case.',
  4260812: 'AE and SE need one shared story. Disagree privately, align publicly, and address commercial and technical blockers together.',
  4260813: 'Useful product feedback carries use case, impact, frequency, and urgency. Vague wishes do not move the roadmap.',
  4260814: 'A strong recap = pain, requirements, opens, owners, dates, next decision. Trust is built one summary email at a time.',
  4260815: 'Performance answers need numbers and workload shape. Propose a scoped benchmark — confidence is not evidence.',
  4260816: 'Procurement pressure: defend value with the AE, do not negotiate solo, and never trade security for a discount.',
  4260817: 'A mutual action plan makes the close date real. Milestones, owners, dates, dependencies — visible to both sides.',
}

// CAREER_APPLIED_CORRECT_SHORTENED — questions where the correct answer was
// substantially longer than the longest distractor. Each entry shortens
// `correct` to a punchier line and pushes the trimmed detail into
// `lessonAddendum` so no clinical or operational nuance is lost.

export const CAREER_APPLIED_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // ---------- Medical Reasoning ----------
  4260411: {
    newCorrect: 'Pneumonia is one possibility, but we need imaging and exam together to be more certain',
    lessonAddendum: 'Honest uncertainty names the leading possibility and the specific evidence still pending. It avoids both false reassurance and unhelpful nihilism.',
  },
  4260414: {
    newCorrect: 'Return urgently for worsening breathing, chest pain, confusion, persistent high fever, or inability to keep fluids down',
    lessonAddendum: 'Concrete red-flag triggers (respiratory, chest, mental status, hydration) keep routine viral care calm while preserving an escalation path. Vague return advice loses signal.',
  },

  // ---------- Regulatory Affairs ----------
  4260506: {
    newCorrect: 'Use document control to review the change and confirm the submitted version matches references',
    lessonAddendum: 'Version discipline prevents mismatches between draft and submission. Controlled updates, aligned references, and a clear audit trail are how submission quality holds up under inspection.',
  },
  4260507: {
    newCorrect: 'Does the change affect safety, effectiveness, claims, or trigger regulatory notification?',
    lessonAddendum: 'Design changes need impact assessment against four levers: safety, effectiveness, intended use, and claims. Any material hit may require documentation, notification, or a new submission depending on jurisdiction and pathway.',
  },
  4260513: {
    newCorrect: 'The alarm threshold was selected because validation testing showed reliable detection at that level without excessive false alarms',
    lessonAddendum: 'Reviewer-friendly writing ties a design choice to validation evidence, risk, and performance. Reviewers should be able to reconstruct the decision without asking the original author.',
  },
  4260517: {
    newCorrect: 'Current, controlled, complete records that can be retrieved quickly',
    lessonAddendum: 'Inspection readiness combines four traits: documents are current, under formal control, complete enough to support every decision, and retrievable in minutes by someone other than the author.',
  },

  // ---------- Clinical Research ----------
  4260601: {
    newCorrect: 'Follow the protocol eligibility rules and involve the investigator if clarification is needed',
    lessonAddendum: 'Eligibility criteria protect both participant safety and data integrity. Coordinators apply the protocol as written; clarification or waiver requests go through the investigator and sponsor, not informal pencil edits.',
  },
  4260602: {
    newCorrect: 'Document the deviation, notify the study team, and follow protocol guidance',
    lessonAddendum: 'Protocol deviations are managed through the study process, not hidden. Documentation protects safety, data quality, and transparency; the right next step depends on protocol and sponsor guidance.',
  },
  4260603: {
    newCorrect: 'They may withdraw voluntarily at any time, without penalty for stopping',
    lessonAddendum: 'Voluntary participation and the right to withdraw are core participant protections. The consent process must communicate both clearly, including that withdrawal does not affect routine medical care.',
  },
  4260612: {
    newCorrect: 'Ensure essential documents, source records, consents, and outstanding queries are organized for review',
    lessonAddendum: 'Monitoring preparation makes key records current and accessible. Organized evidence reduces confusion during the visit and supports data quality between visits.',
  },
  4260613: {
    newCorrect: 'Identify the workflow cause, retrain or adjust the process, and verify entries become timely',
    lessonAddendum: 'CAPA-style corrective action targets root cause, not symptom. Effectiveness checks confirm the fix actually changed behavior — repeated late entries usually mean a process repair, not a scolding.',
  },
  4260616: {
    newCorrect: 'Essential documents complete, queries resolved, investigational product reconciled, and records retained',
    lessonAddendum: 'Closeout protects the final regulatory and data trail. The site confirms TMF/essential docs, query closure, IP accountability, and retention schedules per regulation and sponsor agreement.',
  },

  // ---------- Supply Chain ----------
  4260804: {
    newCorrect: 'Show the workflow that detects downtime risk, alerts the right team, and measures avoided outage',
    lessonAddendum: 'A strong demo connects product behavior to the buyer\'s outcome. For a manufacturing prospect focused on downtime, the path runs: detect → alert → quantify avoided loss.',
  },

  // ---------- Technical Sales ----------
  4260809: {
    newCorrect: 'Define success criteria, timeline, users, data, responsibilities, and exit decision before starting',
    lessonAddendum: 'Scoped pilots produce clear go/no-go outcomes. Endless or unbounded pilots block closure and erode credibility on both sides of the table.',
  },
  4260810: {
    newCorrect: 'Clarify requirements, constraints, data direction, volume, latency, and failure handling',
    lessonAddendum: 'Architecture interviews are evaluated on requirements-first thinking. Database, framework, or pattern choices come after the workload is understood, not before.',
  },
  4260811: {
    newCorrect: 'Batch suits periodic updates cheaply; real-time APIs fit low-latency workflows at higher complexity',
    lessonAddendum: 'Pattern choice should map to workload: batch is simpler and cheaper for periodic, tolerant updates; real-time APIs deliver low latency but add operational complexity, error-handling surface, and cost.',
  },
  4260814: {
    newCorrect: 'Summarize pain, agreed requirements, opens, owners, dates, and next decision',
    lessonAddendum: 'A good recap doubles as a contract of understanding. It surfaces misalignment early and gives the buyer a forwardable artifact for internal stakeholders.',
  },
  4260815: {
    newCorrect: 'Ask for traffic patterns and success thresholds, then provide benchmark evidence or a scoped test',
    lessonAddendum: 'Performance answers carry weight when grounded in workload shape and measured behavior. A scoped benchmark with the buyer\'s data is the strongest possible response.',
  },
  4260816: {
    newCorrect: 'Support the account team with value evidence, scope tradeoffs, and risk of cutting requirements',
    lessonAddendum: 'Procurement late-stage pressure is best absorbed by the deal team together. SE input defends value, explains scope tradeoffs, and surfaces what the prospect actually loses if critical requirements are cut.',
  },
}
