// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Career Healthcare roadmaps (~266 questions across 10 tracks).
//
// CAREER_HEALTHCARE_SUB_TOPICS groups each track's questions by chapter
// (each chapter cluster runs 5-7 questions — already at the lesson-shaped
// grain VC uses inside a chapter).
//
// CAREER_HEALTHCARE_MENTOR_HINTS overrides the generic scaffold hint with a
// one-line second-person nudge that names the reasoning move without giving
// the answer — voice: senior healthcare/clinical professional mentoring a
// junior who is still learning the system.
//
// CAREER_HEALTHCARE_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct >=1.8x longer than longest wrong AND >=20
// chars longer). Trimmed clauses are reattached via `lessonAddendum` so no
// information is lost.

export const CAREER_HEALTHCARE_SUB_TOPICS: Record<string, number[]> = {
  // ===================== Hospital Administration Roadmap =====================
  'Hospital System Map': [
    4103200, 4103280, 4103285, 4107480, 4108030, 4108042,
  ],
  'Patient Flow and Capacity': [
    4103201, 4103205, 4103281, 4103286, 4107481, 4107486, 4108031,
  ],
  'Finance and Resource Stewardship': [
    4103202, 4103206, 4103282, 4107482, 4108032, 4108034,
  ],
  'Quality, Safety, and Compliance': [
    4103203, 4103207, 4103283, 4103288, 4107483, 4108035, 4108040,
  ],
  'People, Service, and Leadership Communication': [
    4103204, 4103284, 4103289, 4107484, 4108036, 4108041,
  ],

  // ===================== Nursing Floor Operations Roadmap =====================
  'Unit Map and Daily Rhythm': [
    4103208, 4103290, 4103295, 4107496, 4108046, 4108055,
  ],
  'Staffing, Acuity, and Workload': [
    4103209, 4103214, 4103291, 4107497, 4108047,
  ],
  'Admissions, Transfers, and Discharges': [
    4103210, 4103213, 4103292, 4103297, 4108048,
  ],
  'Safety and Quality on the Floor': [
    4103211, 4103215, 4103293, 4103298, 4107499, 4108052,
  ],
  'Handoffs, Families, and Interdisciplinary Coordination': [
    4103212, 4103294, 4103299, 4107500, 4107504, 4108054,
  ],

  // ===================== Physician Practice Roadmap =====================
  'Practice Model and Patient Access': [
    4103216, 4103221, 4103300, 4107512, 4108062, 4108068,
  ],
  'Front Desk and Visit Flow': [
    4103217, 4103301, 4107513, 4107519, 4108063,
  ],
  'Clinical Support and Provider Productivity': [
    4103218, 4103302, 4103307, 4107520, 4108065,
  ],
  'Revenue Cycle and Documentation': [
    4103219, 4103222, 4103303, 4107521, 4108066,
  ],
  'Service, Staffing, and Practice Improvement': [
    4103223, 4103304, 4103309, 4107515, 4108067,
  ],

  // ===================== Medical Billing Roadmap =====================
  'Revenue Cycle Overview': [
    4103224, 4103310, 4103319, 4107528, 4108078,
  ],
  'Eligibility, Benefits, and Authorization': [
    4103225, 4103229, 4103311, 4103315, 4108080, 4108088,
  ],
  'Claims and Clean Submission': [
    4103226, 4103230, 4103312, 4103316, 4107530, 4108089,
  ],
  'Denials, Appeals, and Follow-Up': [
    4103227, 4103231, 4103313, 4103317, 4107531, 4108090,
  ],
  'Payments, Underpayments, and Patient Balances': [
    4103228, 4103314, 4103318, 4107532, 4108091,
  ],

  // ===================== Medical Coding Roadmap =====================
  'Coding Role and Reference Habits': [
    4103232, 4103320, 4103325, 4107544, 4108094,
  ],
  'Diagnosis Coding': [
    4103233, 4103237, 4103326, 4107547, 4108095, 4107167,
  ],
  'Procedure and Supply Coding': [
    4103234, 4103322, 4103327, 4107550, 4108100, 4107179,
  ],
  'Modifiers, Bundling, and Claim Edits': [
    4103235, 4103238, 4103328, 4107553, 4108102,
  ],
  'Queries, Audits, and Denial Prevention': [
    4103236, 4103239, 4103324, 4107556, 4108108,
  ],

  // ===================== Clinical Research Roadmap =====================
  'Trial Ecosystem and Site Roles': [
    4103240, 4103400, 4103405, 4107560, 4108110,
  ],
  'Consent, Eligibility, and Visit Planning': [
    4103241, 4103245, 4103401, 4107562, 4108117,
  ],
  'Source Documentation and Data Quality': [
    4103242, 4103246, 4103402, 4107565, 4108118,
  ],
  'Safety, Deviations, and Escalation': [
    4103243, 4103247, 4103408, 4107568, 4108119,
  ],
  'Monitoring, Closeout, and Inspection Readiness': [
    4103244, 4103404, 4103409, 4107569, 4108120,
  ],

  // ===================== Pharma Drug Safety Roadmap =====================
  'Drug Safety Role and Safety Language': [
    4103248, 4103410, 4103415, 4107576, 4108126,
  ],
  'Case Intake, Follow-Up, and Data Quality': [
    4103249, 4103253, 4103411, 4103416, 4108128,
  ],
  'Reporting Rules and Timeline Discipline': [
    4103250, 4103412, 4103417, 4107579, 4108131,
  ],
  'Medical Review and Signal Detection': [
    4103251, 4103254, 4103413, 4103418, 4108133,
  ],
  'Aggregate Safety and Inspection Readiness': [
    4103252, 4103255, 4103414, 4103419, 4108134,
  ],

  // ===================== Healthcare Compliance Roadmap =====================
  'Healthcare Compliance Map': [
    4103256, 4103420, 4103425, 4107592, 4108142,
  ],
  'Fraud, Abuse, and Referral Risk': [
    4103257, 4103262, 4103421, 4103426, 4108144,
  ],
  'Privacy, Security, and Patient Rights': [
    4103258, 4103261, 4103422, 4103427, 4108146,
  ],
  'Billing Integrity and Documentation': [
    4103259, 4103423, 4103428, 4107594, 4108148,
  ],
  'Investigations, CAPA, and Reporting': [
    4103260, 4103263, 4103424, 4103429, 4108150,
  ],

  // ===================== Health Insurance Payers Roadmap =====================
  'Payer Ecosystem and Plan Design': [
    4103264, 4103430, 4103435, 4107608, 4108158,
  ],
  'Claims, Payment, and Provider Networks': [
    4103265, 4103269, 4103431, 4103436, 4108160,
  ],
  'Utilization Management and Medical Policy': [
    4103266, 4103270, 4103432, 4103437, 4108162,
  ],
  'Risk, Quality, and Value-Based Care': [
    4103267, 4103271, 4103433, 4103438, 4108165,
  ],
  'Member Experience, Compliance, and Operations': [
    4103268, 4103434, 4103439, 4107613, 4108170,
  ],

  // ===================== Regulatory Affairs Roadmap =====================
  'Regulatory Role and Product Profile': [
    4103272, 4103440, 4103445, 4107624, 4108174,
  ],
  'Pathways and Agency Questions': [
    4103273, 4103441, 4103446, 4107625, 4108180,
  ],
  'Evidence and Submission Readiness': [
    4103274, 4103277, 4103442, 4103447, 4108176,
  ],
  'Labeling, Claims, and Promotional Review': [
    4103275, 4103278, 4103443, 4103448, 4108184,
  ],
  'Change Control and Post-Market Duties': [
    4103276, 4103279, 4103444, 4103449, 4108183,
  ],
}

export const CAREER_HEALTHCARE_MENTOR_HINTS: Record<number, string> = {
  // ---------- Hospital Administration: Hospital System Map ----------
  4103200: 'Three departments blaming each other is your signal. Map the flow before you pick a villain.',
  4103280: 'Three committees on overlapping work means no one owns the decision. Coordinate before you add a fourth.',
  4103285: 'Both teams have a real complaint. Pull referral timing, capacity, and triggers into one room.',
  4107480: 'Transport, elevators, and discharge orders all touch the same patient. Map the whole chain with timestamps.',
  4108030: 'A weekend discharge plan that ignores the lab chain will stall every Saturday. Trace order to result to release.',
  4108042: 'Care transitions cross the hospital wall by definition. Partners belong inside the workflow, not after launch.',

  // ---------- Hospital Administration: Patient Flow and Capacity ----------
  4103201: 'ED boarding is almost never an ED problem. Follow discharge timing back upstream.',
  4103205: 'Status decisions affect care, billing, capacity, and audit risk. Anchor on criteria, not on which unit is easier.',
  4103281: 'Weekends are a seven-day flow problem, not bad luck. Ask which weekday supports are missing on Saturday.',
  4103286: 'Scarce-bed decisions need rules made before the phones ring. Defer to clinical priority and an escalation path.',
  4107481: 'Empty beds you cannot staff are not beds. Match OR slate to usable downstream capacity.',
  4107486: 'Telemetry is a clinical decision, not a comfort default. Apply criteria and review daily.',
  4108031: 'The bottleneck is rarely the cleaners. Look at who signals "ready to clean" and who confirms "ready to fill."',

  // ---------- Hospital Administration: Finance and Resource Stewardship ----------
  4103202: 'Flat volume plus rising overtime points to a process leak, not a capital need. Diagnose before you spend.',
  4103206: 'An 18% supply jump on 3% volume has a story. Look at mix, preference cards, waste, and price.',
  4103282: 'Stable census plus rising overtime means timing or acuity is hiding inside the schedule. Examine before you staff.',
  4107482: 'Agency reliance after vacancies close is a habit, not a need. Audit the scheduling rule that keeps the order placed.',
  4108032: 'Competitor envy is not a business case. Demand local demand, staffing, and reimbursement before you approve.',
  4108034: 'Unit-price savings can be a workflow cost in disguise. Total cost includes the time clinicians spend coping.',

  // ---------- Hospital Administration: Quality, Safety, and Compliance ----------
  4103203: 'Three falls in two weeks after a staffing change is a pattern, not a coincidence. Pull the incidents and test the link.',
  4103207: 'Policy that frontline staff cannot follow is theater. Compare the document to the actual workflow.',
  4103283: 'Disclosure is a process, not improvisation under pressure. Follow the policy and support the family with facts.',
  4103288: 'Readmits cluster in the handoff seam. Look at discharge education, med rec, follow-up, and social barriers together.',
  4107483: 'Compliance dropped after the layout changed. Test the environment before you blame the staff.',
  4108035: 'Cleanup after the procedure is the wrong control point. Build a verifiable stop before the start.',
  4108040: 'Quieter reports usually means quieter staff, not safer care. Rebuild the loop so reporting earns visible change.',

  // ---------- Hospital Administration: People, Service, and Leadership Communication ----------
  4103204: 'Tie the change to patient safety, role clarity, and a number people can measure. Slogans bounce off busy units.',
  4103284: 'A reliable manager saying "everything is urgent" is a leadership signal. Cut the list, do not add resilience training.',
  4103289: 'Anxiety fills the silence faster than facts can. Name what is known, what is undecided, and when you will say more.',
  4107484: 'Patient experience and throughput often trade off. Show the board the data and name the next service fix.',
  4108036: 'Predictable, owned updates beat one well-meaning apology sign. Set the interval and the escalation.',
  4108041: 'Six departments per director is span, not leadership. Name the predictable decision and coaching gaps.',

  // ---------- Nursing Floor Ops: Unit Map and Daily Rhythm ----------
  4103208: 'Triage the shift in this order: safety coverage first, then time-sensitive flow, then everything else.',
  4103290: 'Breaks, insulin, and discharge teaching all need an owner — not goodwill. Sequence the noon hour deliberately.',
  4103295: 'An hour of equipment hunting is a process failure, not nurse failure. Standardize location, par, and cleaning.',
  4107496: 'New confusion mentioned casually is the highest-information item in handoff. Name the risk and the owner.',
  4108046: 'When trays arrive randomly, insulin timing breaks. Anchor the chain on glucose, tray, dose, and recheck.',
  4108055: 'Necessity beats habit. Bundle night tasks so the patient gets meaningful rest, with exceptions named.',

  // ---------- Nursing Floor Ops: Staffing, Acuity, and Workload ----------
  4103209: 'Same patient count, different work. Push acuity, dependency, and isolation into the assignment conversation.',
  4103214: 'Match the float to what they know and pair for the rest. Competency, not census, drives safe assignment.',
  4103291: 'One sitter, two needs. Reassess risk, use least-restrictive alternatives, escalate, document.',
  4107497: 'Isolation rooms and complex wounds cost minutes the grid does not see. Adjust assignment, not just headcount.',
  4108047: 'Two constant-observation patients invisible on the grid is the binding constraint. Plan for the work, not the row count.',

  // ---------- Nursing Floor Ops: Admissions, Transfers, and Discharges ----------
  4103210: 'Admissions arriving before the room and orders are ready is a handoff gap. Define readiness before transport.',
  4103213: 'Discharge is a workflow with five players. Start planning early, assign tasks, name expected timing.',
  4103292: 'A transfer with no clear drip status is unsafe care waiting to happen. Pause and close the information gap first.',
  4103297: 'A nod is not understanding. Teach-back kindly exposes the gap and lets you fix it before the patient leaves.',
  4108048: 'Missing meds and vitals on arrival is your problem now. Assess, reconcile, escalate — in that order.',

  // ---------- Nursing Floor Ops: Safety and Quality on the Floor ----------
  4103211: 'A near miss is data, not a clean save. Review for the system factor before it becomes a real harm.',
  4103215: 'A wristband is a label, not a plan. Targeted rounding, environment, and team communication make the difference.',
  4103293: 'Early redness is a clock. Start the bundle, document, and assign turning ownership immediately.',
  4103298: 'Alarm fatigue kills response time. Tune parameters per patient and protect the real alerts.',
  4107499: 'Two unlabeled tubes is a stop-the-line moment. Treat it as a risk to review, not a paperwork inconvenience.',
  4108052: 'Harder to arouse after a dose change is a respiratory question. Reassess, monitor, hold or escalate.',

  // ---------- Nursing Floor Ops: Handoffs, Families, and Interdisciplinary Coordination ----------
  4103212: 'SBAR keeps the call short and the provider oriented. Lead with situation and what you are asking for.',
  4103294: 'The patient sets the rules on updates. Be calm, respect the preference, and offer general process info only.',
  4103299: 'Rounds without nursing input miss what nights revealed. Align timing so concerns reach the decision.',
  4107500: 'A thin-liquid tray for a thickened-liquid order is unsafe. Hold the intake and clarify before anything else.',
  4107504: 'A family interpreter for clinical teaching is a privacy and safety shortcut. Use a qualified interpreter and document.',
  4108054: 'A buried consult is the same as no consult. Flag the risk, push the recommendation into the daily plan.',

  // ---------- Physician Practice: Practice Model and Patient Access ----------
  4103216: 'Empty same-day slots while new-patient waits stretch is a template problem. Inspect rules, demand, and no-shows.',
  4103221: 'Panel size without complexity is a misleading number. Add high-need and visit frequency before you compare.',
  4103300: 'Late cancellations are unused capacity. Build a waitlist and a controlled release rule before adding slots.',
  4107512: 'Portal access works only when scheduling rules let requests become appointments. Check the template, not the marketing.',
  4108062: 'Restrictive visit-type labels turn open slots into invisible inventory. Loosen them with clinical guardrails.',
  4108068: 'A referral placed is not a referral done. Track transmission, confirmation, and patient instructions to close the loop.',

  // ---------- Physician Practice: Front Desk and Visit Flow ----------
  4103217: 'Day-of insurance updates pile up by design. Move what can move pre-visit, keep an exception path for day-of.',
  4103301: 'Inconsistent policy application is the conflict. Define criteria, exceptions, scripts, and an escalation path.',
  4107513: 'Copay collection should not wait behind insurance updates. Move payable tasks earlier in the flow.',
  4107519: 'Checkout is too late to discover inactive coverage. Push verification before the visit when possible.',
  4108063: 'Forms reviewed after check-in restart the clock. Intake before arrival, with a same-day exception path.',

  // ---------- Physician Practice: Clinical Support and Provider Productivity ----------
  4103218: 'MA variability slows providers and risks misses. Standardize the rooming list and feedback on completion.',
  4103302: 'Routine refills are MA work under protocol — not provider inbox toil. Define scope, training, and review thresholds.',
  4103307: 'Standing orders end where contraindications begin. Escalate the exception, do not bend the protocol.',
  4107520: 'A temperature excursion is a vaccine integrity question first. Follow the excursion procedure before today\'s schedule.',
  4108065: 'Inbox volleyball means the criteria are unwritten. Build the protocol and the escalation rule together.',

  // ---------- Physician Practice: Revenue Cycle and Documentation ----------
  4103219: 'Unsigned notes break the whole revenue chain downstream. Name the operational risk clearly.',
  4103222: 'Auths start when the order is placed. Define the trigger, the owner, and the deadline ladder.',
  4103303: 'Supplies in a separate log will not reach the claim. Connect documentation, supply use, and charge capture.',
  4107521: 'A copy-forward note on a telehealth visit is inaccurate care. Name the billing and audit risk.',
  4108066: 'Clinically documented is not the same as billed. Build the handoff from administration to charge capture.',

  // ---------- Physician Practice: Service, Staffing, and Practice Improvement ----------
  4103223: 'Service recovery is honest specifics, not blanket apology. Acknowledge, explain, offer options, address the process.',
  4103304: 'One-person dependencies are a fragility tax. Cross-train with standard work and quality checks.',
  4103309: 'Test small before you scale. PDSA on a sliver of patients reveals the issues a memo never finds.',
  4107515: 'A silent lobby builds anger. A routine update protocol, even with bad news, protects the experience.',
  4108067: 'A visit ends when the next step is scheduled. Redesign checkout so orders become action reliably.',

  // ---------- Medical Billing: Revenue Cycle Overview ----------
  4103224: 'Front-end work is the cheapest place to fix a claim. Eligibility before service prevents downstream rework.',
  4103310: 'Aged AR has segments. Sort by payer, denial, age, dollar before you assign hours.',
  4103319: 'Front desk learns from denials only if you tell them. Build the feedback loop, not just the report.',
  4107528: 'A subscriber-ID typo is an upstream fix. Add validation at registration before more claims fail.',
  4108078: 'Missing demographics is a front-end issue parked in billing. Push ownership back where the data is entered.',

  // ---------- Medical Billing: Eligibility, Benefits, and Authorization ----------
  4103225: 'Active coverage is not payable service. Confirm auth, estimate liability, communicate before service.',
  4103229: 'Two active plans means COB rules drive payer order. Verify primary versus secondary before resubmitting.',
  4103311: 'Termed in the system, covered through spouse — check both before the claim goes out.',
  4103315: 'Referral requirements are caught at scheduling, not appeal. Front-end controls are usually the only ones that work.',
  4108080: 'Active does not mean in-network. Verify network and patient communication obligations early.',
  4108088: 'Medicare secondary depends on facts beyond the card — employer size, patient status, MSP questionnaire.',

  // ---------- Medical Billing: Claims and Clean Submission ----------
  4103226: 'Missing DOB and rendering NPI is a guaranteed reject. Fix the data before submission.',
  4103230: 'A scrubber flag is a prompt, not a fix. Review documentation and coding support before sending.',
  4103312: 'Timely filing turns fixable claims into write-offs. Prioritize, confirm format, document proof.',
  4103316: 'Telehealth POS and modifier must tell the same story. Read current payer guidance, not last year\'s template.',
  4107530: 'Supervising and rendering provider mismatches deny on enrollment, not effort. Match fields to the documentation.',
  4108089: 'A claim must match the approval — number, dates, service. Gather the evidence before you appeal.',

  // ---------- Medical Billing: Denials, Appeals, and Follow-Up ----------
  4103227: 'Repeated auth denials from one location is a workflow signal, not a follow-up task. Fix upstream.',
  4103231: 'A medical-necessity appeal answers the denial reason against the policy criteria — concisely, with cited evidence.',
  4103313: 'Clinical denials stall in the gap between billing and clinic. Define owner, checklist, deadline, escalation.',
  4103317: 'Duplicate denials usually come from impatient resubmission. Check status before sending again.',
  4107531: 'Tight deadline plus high dollar plus auth evidence equals immediate focused appeal. Escalate without waiting.',
  4108090: 'Two teams working the same denial breeds duplicates. Coordinate ownership and status before action.',

  // ---------- Medical Billing: Payments, Underpayments, and Patient Balances ----------
  4103228: '$72 on a $90 contract is an underpayment to verify, not a posting task. Check terms, adjustment codes, math.',
  4103314: 'A credit balance has an owner — payer or patient. Resolve, refund, document by policy.',
  4103318: 'Statements before secondary processes finish create avoidable calls. Check sequencing and statement holds.',
  4107532: 'Every office visit short-paid is a contract load issue, not a posting habit. Flag the trend.',
  4108091: 'A rep-promised plan that breaks policy needs correction, not validation. Communicate carefully and document.',

  // ---------- Medical Coding: Coding Role and Reference Habits ----------
  4103232: 'Memory is a navigation tool, not a code source. Verify against today\'s documentation and current references.',
  4103320: 'An old cheat sheet that conflicts with current guidance is a hazard. Use the official reference, flag the tool.',
  4103325: 'Productivity is not an excuse to code from the superbill. The encounter record is the source of truth.',
  4107544: 'The problem list is history; today\'s note is the encounter. Code what was addressed today.',
  4108094: '"Lesion removed" without size, site, or method is not enough. Query before you assign.',

  // ---------- Medical Coding: Diagnosis Coding ----------
  4103233: 'Outpatient does not code rule-outs as confirmed. Code the supported signs or symptoms.',
  4103237: 'Do not invent laterality. Seek clarification or use policy-supported unspecified codes.',
  4103326: 'Diabetes plus CKD often wants a combination code. Check the guidelines for assumed linkage rules.',
  4107547: 'Adverse-effect causality needs documentation, not inference. Do not code the link the provider did not state.',
  4108095: '"Rule out" in outpatient means do not code it as confirmed. Code documented signs, symptoms, or confirmed dx.',
  4107167: 'Acute, chronic, recurrent — code what the documentation supports, query when it remains unclear.',

  // ---------- Medical Coding: Procedure and Supply Coding ----------
  4103234: 'Size and method drive the code. Missing details should be queried, never guessed.',
  4103322: 'Routine package supplies are not separately billable just because they have a cost. Check bundling and payer policy.',
  4103327: 'A procedure title is not a procedure. Hold or query when approach, extent, and complications are missing.',
  4107550: 'Abscess drainage codes depend on documented method and depth. Without those facts, clarify.',
  4108100: 'Infusion coding wants time, route, substance, and hierarchy — and the interruption math has to come from the record.',
  4107179: 'Units must match the HCPCS descriptor. Verify dosage, wastage, and payer instructions.',

  // ---------- Medical Coding: Modifiers, Bundling, and Claim Edits ----------
  4103235: 'A modifier added to bypass an edit without supporting documentation is a compliance issue.',
  4103238: 'Bundling can be unbundled only when rules and documentation support separate reporting.',
  4103328: 'Unrelated care during global is reportable with the right modifier — once relationship is confirmed.',
  4107553: 'Left in the modifier, right in the note: correct the modifier to match the documentation, do not change the chart.',
  4108102: 'Separate E/M with a procedure needs documentation of a distinct service, not a habitual modifier.',

  // ---------- Medical Coding: Queries, Audits, and Denial Prevention ----------
  4103236: 'Queries offer clinically supported options without steering. The provider, not you, picks the answer.',
  4103239: 'Audit feedback is education, not overcorrection. Monitor, retrain, and watch the trend.',
  4103324: 'Vague queries asking for what is already in the note erode trust. Improve query quality before increasing volume.',
  4107556: '"Just make it billable" is not an option. Query compliantly or route for clarification.',
  4108108: 'Tying a query to reimbursement is a compliance flag. Compliant queries are neutral and evidence-based.',

  // ---------- Clinical Research: Trial Ecosystem and Site Roles ----------
  4103240: 'Source-data manipulation to match the eCRF is a serious finding. Preserve source, correct through authorized process.',
  4103400: 'Delegation logs are evidence, not paperwork. Authorization, training, and signatures must precede the work.',
  4103405: 'Recruitment pressure never overrides eligibility. Apply the protocol, escalate any change through documented process.',
  4107560: 'Skipping a training log because "we have done similar studies" is exactly how findings begin.',
  4108110: 'IRB approval is not activation. Track every startup dependency until the site can actually enroll.',

  // ---------- Clinical Research: Consent, Eligibility, and Visit Planning ----------
  4103241: 'A study-only blood draw before consent is a protocol and consent violation. Name it and report.',
  4103245: 'Close-to-eligible is not eligible. Follow the documented exception process or pass.',
  4103401: 'New risk plus changed schedule means reconsent before the next affected procedure — with the approved revised form.',
  4107562: 'A signed obsolete consent form is a consent error. Assess, notify the investigator, follow IRB/sponsor reporting.',
  4108117: 'Address barriers within approved options. Coordinate with the PI on what the protocol allows.',

  // ---------- Clinical Research: Source Documentation and Data Quality ----------
  4103242: 'No attribution, no audit trail — that is the failing ALCOA element. Attribution comes first.',
  4103246: 'Late entries are honest only when labeled with the current date and reason. Backdating destroys credibility.',
  4103402: 'Query responses are evidence-based. Check source, correct or explain with attribution.',
  4107565: 'Repeated queries on the same field means the rule is broken. Clarify units and conversion before the next entry.',
  4108118: 'A source correction preserves the original entry, dates the change, and attributes the editor.',

  // ---------- Clinical Research: Safety, Deviations, and Escalation ----------
  4103243: 'Hospitalization on study drug is a potential SAE. Notify the investigator and follow reporting requirements.',
  4103247: 'Document the deviation, assess impact, notify as required, and fix the planning issue that caused it.',
  4103408: 'Emergency unblinding follows the protocol process. Document reason, authorization, and notifications.',
  4107568: 'An AE in a casual email is still an AE. Route it for investigator assessment promptly.',
  4108119: 'A new rash after study drug is a safety call. Assess urgency, notify per protocol, document, evaluate reporting.',

  // ---------- Clinical Research: Monitoring, Closeout, and Inspection Readiness ----------
  4103244: 'Closeout means resolved. Queries, delegation gaps, and IP reconciliation must finish before final.',
  4103404: 'Email instructions outside the essential file is silent version drift. Reconcile, update, assess past visits.',
  4103409: 'Missed temperature logs needs root cause, retraining, a reliable check, and verification — not just a fix.',
  4107569: 'Scattered essential documents are an inspection finding waiting to happen. Centralize and control.',
  4108120: 'One missing tablet is a real reconciliation issue. Investigate, document, assess compliance impact.',

  // ---------- Pharma Drug Safety: Drug Safety Role and Safety Language ----------
  4103248: 'Patient, reporter, suspect product, event — that is a valid case. Bring it into intake.',
  4103410: 'Odd taste plus dizziness is product quality and possible AE. Capture both, route each correctly.',
  4103415: 'Pregnancy exposure may be reportable even without an AE. Capture per the special-situation procedure.',
  4107576: 'A rash mentioned in a support chat is still a reportable AE. Route it through intake.',
  4108126: 'Informal channel does not exempt the obligation. If minimum information exists, intake it.',

  // ---------- Pharma Drug Safety: Case Intake, Follow-Up, and Data Quality ----------
  4103249: 'Follow-up targets what affects validity, seriousness, causality, expectedness, and timing.',
  4103253: 'Same patient, drug, event, hospital — likely duplicates. Evaluate, merge or link per procedure.',
  4103411: 'A literature article needs a documented validity and duplicate assessment, not an automatic intake.',
  4103416: 'A good narrative is a chronological story with key facts and honest uncertainty.',
  4108128: 'Duplicate checks protect signal accuracy. Use criteria, identifiers, and chronology before deciding.',

  // ---------- Pharma Drug Safety: Reporting Rules and Timeline Discipline ----------
  4103250: 'The clock starts on company awareness, not when safety opens the file. Push for prompt internal handoff.',
  4103412: 'ED observation may or may not be hospitalization. Apply the seriousness criteria to the facts, not the shorthand.',
  4103417: 'A serious case before a holiday is exactly what coverage plans exist for. Escalate, preserve receipt date, confirm.',
  4107579: 'Non-serious globally can still be reportable locally. Apply the local rule and document the rationale.',
  4108131: 'Local affiliate, valid serious case, Friday evening — know the clock and the expedited obligations now.',

  // ---------- Pharma Drug Safety: Medical Review and Signal Detection ----------
  4103251: 'Repeated rare events after exposure deserve structured signal review, not dismissal.',
  4103254: 'Causality weighs temporality, confounders, dechallenge, rechallenge, plausibility — without overstating certainty.',
  4103413: 'Expectedness is more than keyword match. Compare specificity, severity, frequency, clinical context.',
  4103418: 'A label-change recommendation needs case data, aggregate pattern, exposure context, and proposed risk language.',
  4108133: 'A spike after a campaign may be reporting stimulation, not a signal. Check exposure and background rates.',

  // ---------- Pharma Drug Safety: Aggregate Safety and Inspection Readiness ----------
  4103252: 'Inspectors want to see the trail — root cause, correction, prevention, effectiveness check.',
  4103255: 'Aggregate reports want cumulative cases, exposure, literature, signals, benefit-risk discussion, regulatory actions.',
  4103414: 'Outsourcing does not transfer accountability. Vendor metrics must turn into documented CAPA.',
  4103419: 'Five-day SOP and ten-day practice is misalignment. Use change control to correct procedure or process.',
  4108134: 'A brochure that does not stop dosing errors needs effectiveness review and additional controls.',

  // ---------- Healthcare Compliance: Healthcare Compliance Map ----------
  4103256: 'Effective compliance programs share seven elements. Policies, training, reporting, audit, investigation, correction, accountability.',
  4103420: '99% completion with 0% knowing what to do is a training failure. Test understanding, hold managers accountable.',
  4103425: 'Board reporting is candid risk plus action plus what is unresolved — never confetti.',
  4107592: 'A pricey vendor basket to a purchasing decision-maker is exactly the gray area policy exists to handle.',
  4108142: 'A workaround spreadsheet means the policy does not match reality. Revise the control, do not punish the workaround.',

  // ---------- Healthcare Compliance: Fraud, Abuse, and Referral Risk ----------
  4103257: 'Gifts tied to referrals is the textbook AKS concern. Review facts before any acceptance.',
  4103262: 'Director payment without time, duties, or evidence of work is an unsupported arrangement. Document or unwind.',
  4103421: 'Free staff handling only the vendor\'s products is remuneration with referral and independence risk.',
  4103426: 'Selective copay waivers tied to one referrer is inducement risk. Apply a consistent, documented FA policy.',
  4108144: 'Free screenings only for the lucrative plan triggers inducement and nondiscrimination concerns.',

  // ---------- Healthcare Compliance: Privacy, Security, and Patient Rights ----------
  4103258: 'Wrong-recipient email is a potential breach. Follow the response procedure, assess, mitigate, document.',
  4103261: 'Minimum-necessary applies to operational tasks too. A scheduler does not need full clinical notes.',
  4103422: 'Curiosity access is unauthorized access even with no disclosure. Investigate.',
  4103427: 'Amendment requests are not automatic edits — they need clinical review, timely response, and documentation.',
  4108146: 'A celebrity chart with non-care openings means the audit log is your evidence. Evaluate purpose and sanctions.',

  // ---------- Healthcare Compliance: Billing Integrity and Documentation ----------
  4103259: 'Identical exam language across different complaints weakens medical-necessity and coding support.',
  4103423: 'Confirmed overpayments trigger duty — quantify, correct the root cause, repay per obligations.',
  4103428: 'Thin therapy goal documentation across denials is a billing-integrity pattern. Educate, sample, refund where unsupported.',
  4107594: 'Copying to support higher levels is unsupported billing. Address it as billing risk, not productivity.',
  4108148: 'A boilerplate justification for every test rarely shows patient-specific necessity.',

  // ---------- Healthcare Compliance: Investigations, CAPA, and Reporting ----------
  4103260: 'Specific allegation with dates and names: log, preserve, assess risk, plan a fact-based investigation.',
  4103263: 'CAPA effectiveness is monitored over time. One fixed claim is not evidence the control works.',
  4103424: 'Telling witnesses what others said contaminates evidence. Independent, fact-focused interviews protect the case.',
  4103429: 'Schedule cuts after a report is a retaliation question. Investigate it separately from the original concern.',
  4108150: 'Routine deletion can erase investigation evidence. Issue a preservation hold with clear scope and owners.',

  // ---------- Health Insurance Payers: Payer Ecosystem and Plan Design ----------
  4103264: 'Lower copay plus higher premium changes utilization and risk mix. Think behavior, access, affordability, total cost.',
  4103430: 'A midyear tier change with no notice creates calls and affordability harm. Look at design, communication, exceptions.',
  4103435: 'Renewals need a credible drivers narrative — claims trend, risk, utilization, pharmacy, network.',
  4107608: 'Repeat calls on diabetic supplies point at benefit design and PA, not member confusion.',
  4108158: 'A denial letter that does not explain next steps drives repeat calls. Fix the letter and the script together.',

  // ---------- Health Insurance Payers: Claims, Payment, and Provider Networks ----------
  4103265: 'Months for behavioral health appointments is a network adequacy issue, not a wait-time annoyance.',
  4103269: 'A directory that overstates panel openness is a compliance and access issue. Validate, update, monitor.',
  4103431: 'OON leakage near in-network options means navigation broke. Check directory data, appointments, referrals, support.',
  4103436: 'Taxonomy versus contracted specialty mismatch is a data fix. Validate provider, contract, coding before pay or deny.',
  4108160: 'In-network UC, OON lab — different billing entities can have different network status. Check member protections.',

  // ---------- Health Insurance Payers: Utilization Management and Medical Policy ----------
  4103266: 'A denial without documented criteria-based review is a process flaw. Tie decisions to policy.',
  4103270: 'New evidence means update the policy, train reviewers, communicate change, monitor consistency.',
  4103432: 'Peer-to-peer is structured clinical review, not informal negotiation. Document and preserve appeal rights.',
  4103437: 'Inpatient past acute need needs concurrent review focused on transition barriers, not just denial.',
  4108162: 'PA breaching turnaround is staffing and rules together. Examine volume, automation, escalation, regulatory timing.',

  // ---------- Health Insurance Payers: Risk, Quality, and Value-Based Care ----------
  4103267: 'Risk adjustment depends on supported coding. Capture accurately, never invent — unsupported diagnoses are a compliance risk.',
  4103271: 'Measurement is not improvement. Identify eligible members, remove barriers, coordinate, track.',
  4103433: 'Heart failure plus missed follow-ups plus food insecurity is a care management profile, not just claims data.',
  4103438: 'A measure with no risk adjustment penalizes complexity. Add safeguards or you create perverse incentives.',
  4108165: 'A gap closed by a miscode is not a gap closed. Fix the source data and the mapping logic.',

  // ---------- Health Insurance Payers: Member Experience, Compliance, and Operations ----------
  4103268: 'Urgent appeals are regulated timeframes. Track, route, document — and meet the clock.',
  4103434: 'Rude service is a grievance; denied MRI is an appeal. Classify both, route both, do not blend.',
  4103439: 'Dense policy language fails the plain-language test. Notices need rationale, criteria, rights, deadlines, next steps.',
  4107613: 'Clinical records in a general mail queue is a deadline failure waiting to happen. Index, own, track.',
  4108170: 'Delegated does not mean unmonitored. Define data exchange, SLAs, escalation, and governance.',

  // ---------- Regulatory Affairs: Regulatory Role and Product Profile ----------
  4103272: 'Pathway questions before a product profile is putting the cart first. Define use, users, claims, risk.',
  4103440: '"Predicts deterioration" is a different product than workflow prioritization. Surface the regulatory consequence.',
  4103445: 'Wellness here, clinical decision support there: the assessment is jurisdiction-specific, not the friendliest copy.',
  4107624: '"Track" to "predict" changes intended use, evidence, classification, submission. Assess before marketing publishes.',
  4108174: '"Monitors trends" to "alerts to deterioration" changes risk and pathway. Push back before the change ships.',

  // ---------- Regulatory Affairs: Pathways and Agency Questions ----------
  4103273: 'Vague hopes get vague feedback. Bring a proposed approach, evidence plan, and a decision point.',
  4103441: '"Kind of similar" is not a substantial-equivalence rationale. Demand a structured comparison.',
  4103446: 'A deficiency response answers each item with evidence, rationale, revised docs, and cross-references.',
  4107625: 'A thin comparison table will not survive review. Build the SE rationale with risk impact and evidence.',
  4108180: 'A training deck is not usability evidence on a critical task. Provide the task-specific data or a justified plan.',

  // ---------- Regulatory Affairs: Evidence and Submission Readiness ----------
  4103274: 'Usability evidence cannot support a clinical-outcome claim. Match evidence type to claim strength.',
  4103277: 'A traceability matrix is the artifact that ties risk to control to verification to evidence.',
  4103442: 'Bench tests on an obsolete prototype need a bridging rationale or new testing. Do not let the gap quietly stand.',
  4103447: 'A warning users miss is not a warning. Update design or labeling and retest the critical task.',
  4108176: 'Lots of reports, no map. Build a matrix tying requirements, risks, tests, acceptance, and results.',

  // ---------- Regulatory Affairs: Labeling, Claims, and Promotional Review ----------
  4103275: '"Approved for all high-risk patients" outside the cleared indication is a correction, not a tweak.',
  4103278: 'Different population on the IFU and the website is unsupported intended-use risk. Align both.',
  4103443: 'Sales training drives field claims. Revise the training to match labeling before reps repeat it.',
  4103448: 'Pediatric implication outside the indication is a regulatory issue regardless of channel. Revise or remove.',
  4108184: 'Unbcontrolled distributor translation is a labeling risk. Require controlled translation, review, approval.',

  // ---------- Regulatory Affairs: Change Control and Post-Market Duties ----------
  4103276: 'An algorithm threshold change can shift safety, effectiveness, and submission. Run the impact assessment.',
  4103279: 'A repeated usability complaint may be a safety signal. Investigate, trend, reassess risk, consider CAPA and reporting.',
  4103444: 'A wrong-accessory labeling error is a field correction decision. Assess risk, communicate, CAPA, report as required.',
  4103449: 'A new sterilization subcontractor can affect validation and filings. Run change control before it reaches customers.',
  4108183: 'Reportable does not wait for root cause. Act on available information within the vigilance clock.',
}

// CAREER_HEALTHCARE_CORRECT_SHORTENED — questions where the correct answer
// runs significantly longer than the longest distractor (cL >= 1.8x maxW and
// gap >= 55 chars). Each entry punches up the correct line and pushes the
// trimmed detail into `lessonAddendum` so no clinical/operational nuance is
// lost.

export const CAREER_HEALTHCARE_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // -------- Hospital Administration --------
  4107480: {
    newCorrect: 'Map the discharge-to-exit workflow with timing data and owners.',
    lessonAddendum: 'The workflow view should span transport, nursing, facilities, and providers — physical infrastructure (elevators) and order timing both belong inside the same picture as transport capacity.',
  },
  4108030: {
    newCorrect: 'Trace the lab chain: order timing, phlebotomy, batching, dependencies, escalation.',
    lessonAddendum: 'Discharge-dependent tests are the load-bearing piece. Weekend operations respond to the same process levers as weekdays — staffing pattern, batching rules, and escalation paths all apply.',
  },
  4108042: {
    newCorrect: 'Bring external partners into the workflow itself, not after launch.',
    lessonAddendum: 'Workflow design, data sharing, referral criteria, and feedback loops are the four belonging items. Partners need lead time to adjust intake; surprising them is how referrals stall after go-live.',
  },
  4103281: {
    newCorrect: 'What weekend supports for rounding, pharmacy, case management, transport, and pickup are missing.',
    lessonAddendum: 'Patient flow is a seven-day system. Weekend gaps in decisions, medications, equipment, and transport create predictable Monday pressure unless they are named and staffed.',
  },
  4103286: {
    newCorrect: 'Use clinical priority, escalation rules, and physician leadership input.',
    lessonAddendum: 'Capacity rules and transparent decision-making matter as much as the criteria themselves. Scarce-bed decisions need defined criteria so teams do not improvise under pressure.',
  },
  4107481: {
    newCorrect: 'Connect OR schedule, PACU holds, bed staffing, and discharge timing.',
    lessonAddendum: 'Change the surgical slate only after the staffed-bed picture is clear. Capacity depends on usable, staffed beds — not physical rooms.',
  },
  4103282: {
    newCorrect: 'Review scheduling, call-outs, late discharges, acuity, and task timing before adjusting headcount.',
    lessonAddendum: 'Labor variance needs context. Census alone misses acuity, vacancies, timing problems, and workflow friction that quietly drive overtime up even when the grid looks stable.',
  },
  4107482: {
    newCorrect: 'Compare staffing patterns, scheduling rules, acuity, overtime, and agency triggers to current need.',
    lessonAddendum: 'Persistent premium staffing after vacancies close is usually a habit, not a need. Audit the trigger rules and the schedule before approving another agency order.',
  },
  4108032: {
    newCorrect: 'A business case covering demand, staffing, maintenance, reimbursement, alternatives, and patient benefit.',
    lessonAddendum: 'Local volume is the load-bearing input. Competitor presence is not a substitute for demand evidence, and vendor-supplied assumptions need independent review.',
  },
  4108034: {
    newCorrect: 'Total cost — utilization, waste, workflow time, outcomes, and clinician adoption.',
    lessonAddendum: 'Unit-price savings are real only if the full workflow cost still works. Substitutions that waste minutes and increase opened packs can erase the headline savings.',
  },
  4103288: {
    newCorrect: 'A cross-functional review of discharge education, med rec, follow-up, and patient barriers.',
    lessonAddendum: 'Readmissions usually expose transition-of-care gaps. Medication clarity, scheduled follow-up, education, and social barriers all deserve a practical review in the same forum.',
  },
  4107483: {
    newCorrect: 'Whether supply placement, workflow, observation, and feedback explain the dip.',
    lessonAddendum: 'Safety performance changes when the work environment changes. Test the barriers before lecturing the staff.',
  },
  4108035: {
    newCorrect: 'Where consent is verified, who owns missing fields, and how the pre-procedure stop point works.',
    lessonAddendum: 'Compliance requires a reliable pre-procedure checkpoint, not after-the-fact cleanup. The stop point and ownership are the load-bearing controls.',
  },
  4103284: {
    newCorrect: 'Prioritize, clarify resources, remove low-value tasks, and listen for operational constraints.',
    lessonAddendum: 'Leadership communication includes protecting focus. Too many unfunded priorities exhaust strong managers and weaken execution even when each goal is worthy.',
  },
  4107484: {
    newCorrect: 'Explain the tradeoff with data on waits, communication, staffing, and the next service fixes.',
    lessonAddendum: 'Operational gains can still create service pain points. Boards need an honest read on the tradeoff, not deflection.',
  },
  4108036: {
    newCorrect: 'Set proactive update intervals, message ownership, delay reasons, and escalation for unusual waits.',
    lessonAddendum: 'Service recovery begins with predictable, honest communication. Owned intervals beat a single apology sign every time.',
  },

  // -------- Nursing Floor Ops --------
  4108046: {
    newCorrect: 'Coordinate tray timing, med workflow, glucose checks, dietary communication, and delay escalation.',
    lessonAddendum: 'Insulin safety depends on tray, glucose, and dose lining up. When trays arrive randomly, the unit needs an escalation path so nurses do not improvise around food.',
  },
  4108047: {
    newCorrect: 'Plan workload around observation needs, acuity, breaks, and available support.',
    lessonAddendum: 'Acuity and special-observation needs change the real assignment burden even when the staffing grid looks fine on paper.',
  },
  4108048: {
    newCorrect: 'Assess, clarify handoff gaps, reconcile key orders, escalate missing information.',
    lessonAddendum: 'Transfers require safe acceptance plus rapid correction of information gaps. Stabilize the patient first, then close the chart gap.',
  },
  4103215: {
    newCorrect: 'Escalate to a targeted prevention plan: rounding, environment changes, team communication.',
    lessonAddendum: 'A risk label is only useful when it triggers action. The plan needs to be specific and known to every shift, not stored only at the bedside.',
  },
  4103293: {
    newCorrect: 'Start the prevention bundle, document, notify the team, and own turning and skin care.',
    lessonAddendum: 'Prevention bundles work when assessment, supplies, repositioning, nutrition, and communication are reliably assigned. Early skin changes are a clock.',
  },
  4107499: {
    newCorrect: 'Follow specimen ID policy and treat unlabeled tubes as a safety risk needing review.',
    lessonAddendum: 'Specimen integrity depends on bedside identification and labeling. Near misses deserve a structured review, not quiet relabeling.',
  },
  4108052: {
    newCorrect: 'Assess sedation and respiration, follow monitoring protocol, hold or escalate as appropriate.',
    lessonAddendum: 'Medication safety requires reassessment when condition changes. Harder-to-arouse after a dose change is a respiratory question first.',
  },
  4103294: {
    newCorrect: 'Honor patient preference and privacy rules while offering general process guidance.',
    lessonAddendum: 'Family coordination must respect patient rights. Clear, calm boundaries protect privacy and reduce avoidable conflict for the next shift too.',
  },
  4103299: {
    newCorrect: 'Align rounding so overnight events and nursing priorities reach the team before decisions.',
    lessonAddendum: 'Interdisciplinary rounds work when nursing input arrives at the right time. Otherwise plans miss the pain control, mobility, and barrier picture.',
  },
  4107500: {
    newCorrect: 'Hold unsafe intake, clarify orders, notify dietary and speech, update the care plan.',
    lessonAddendum: 'Interdisciplinary recommendations must reach orders and daily care reliably. A wrong-consistency tray is unsafe intake until reconciled.',
  },
  4108054: {
    newCorrect: 'Flag nutrition risks, communicate the recommendation, assign follow-up, update the daily plan.',
    lessonAddendum: 'A consult finding that does not reach the bedside team is the same as no consult. Push the recommendation into the active workflow.',
  },

  // -------- Physician Practice --------
  4107512: {
    newCorrect: 'Which visit types, rules, and template limits block portal requests from booking.',
    lessonAddendum: 'Access tools only help when the underlying scheduling rules support them. Marketing the portal cannot substitute for fixing template logic.',
  },
  4108068: {
    newCorrect: 'Referral transmission, confirmation, patient instructions, status follow-up, and closed-loop completion.',
    lessonAddendum: 'A referral placed is not a referral done. Closed-loop tracking covers transmission, receipt confirmation, instructions, and final completion.',
  },
  4103301: {
    newCorrect: 'Define consistent late-arrival criteria, exceptions, scripts, and escalation paths.',
    lessonAddendum: 'Policy helps only when people can apply it consistently. Clear exceptions and an escalation path reduce conflict while protecting flow.',
  },
  4107519: {
    newCorrect: 'Eligibility timing, exception handling, and pre-visit communication when possible.',
    lessonAddendum: 'Front-end verification prevents avoidable billing surprises and rework. Checkout is the wrong place to discover inactive coverage.',
  },
  4107520: {
    newCorrect: 'Follow the temperature-excursion procedure before using affected vaccines, and adjust schedule.',
    lessonAddendum: 'Clinical operations must protect safety and inventory integrity before today\'s schedule pressure. Excursion procedures exist for exactly this morning.',
  },
  4103222: {
    newCorrect: 'Define authorization triggers, documentation, owner, status tracking, and escalation timing.',
    lessonAddendum: 'Prior authorization is a managed workflow. Clear ownership and tracking reduce cancellations, rework, and patient frustration far more than effort alone.',
  },
  4103303: {
    newCorrect: 'Connect documentation, supply use, charge capture, and reconciliation in one workflow.',
    lessonAddendum: 'Charge capture depends on workflow design. Supplies in a separate log will not reach the claim no matter how diligently they are recorded.',
  },
  4103309: {
    newCorrect: 'Run a small test with clear measures, patient selection, workflow, and feedback before scaling.',
    lessonAddendum: 'Practice improvement benefits from small, measurable tests. Pilots reveal workflow, patient, and staffing issues that a memo never finds.',
  },
  4108067: {
    newCorrect: 'Redesign follow-up ordering, checkout staffing, self-scheduling, and tracking of unscheduled orders.',
    lessonAddendum: 'The visit is not complete until next-step orders reliably become action. A backed-up checkout silently drops the most important step.',
  },

  // -------- Medical Billing --------
  4103225: {
    newCorrect: 'Confirm auth, estimate responsibility, and communicate before service when possible.',
    lessonAddendum: 'Coverage is not the same as payable service. Benefits, authorization, network, and patient responsibility all affect clean billing and patient experience.',
  },
  4103312: {
    newCorrect: 'Prioritize, confirm filing rules, submit with required indicators, document proof.',
    lessonAddendum: 'Timely filing rules turn fixable claims into lost revenue. The team needs urgency, correct submission format, and verifiable proof of filing.',
  },
  4103316: {
    newCorrect: 'Review payer telehealth rules, documentation, modifiers, and corrected-claim requirements.',
    lessonAddendum: 'Telehealth billing depends on current payer rules and accurate encounter facts. Place of service and modifiers must tell the same story.',
  },
  4108089: {
    newCorrect: 'Auth number, dates, covered service, payer rules, documentation, and claim-to-approval match.',
    lessonAddendum: 'Authorization appeals need evidence that matches the billed service. A missing piece in the match chain is usually the actual denial cause.',
  },
  4107531: {
    newCorrect: 'Confirm auth evidence, prepare a focused appeal if support exists, escalate before the deadline.',
    lessonAddendum: 'Denials with tight deadlines and high dollar value need evidence-driven action now — not next week.',
  },
  4108091: {
    newCorrect: 'Review policy, correct the arrangement, communicate clearly, document the resolution.',
    lessonAddendum: 'Patient financial conversations need consistent policy and careful correction. A rep-promised plan that breaks policy still has to be corrected.',
  },

  // -------- Medical Coding --------
  4103237: {
    newCorrect: 'Seek clarification or use policy-supported unspecified coding when clarification is unavailable.',
    lessonAddendum: 'Specificity matters when documentation supports it. Coders should not invent laterality, but should follow policy for clarification and unspecified-code use.',
  },
  4103326: {
    newCorrect: 'Whether guidelines direct a combination code or assumed linkage supported by documentation.',
    lessonAddendum: 'Diagnosis coding is guideline-driven on relationships. Coders should check rules before splitting or linking conditions like diabetes and CKD.',
  },
  4108095: {
    newCorrect: 'Do not code the uncertain diagnosis; code documented signs, symptoms, or confirmed conditions.',
    lessonAddendum: 'Outpatient coding generally does not report rule-out diagnoses as confirmed. Follow setting-specific guidance.',
  },
  4108100: {
    newCorrect: 'Billable infusion time and hierarchy using start, stop, interruptions, drug, and route.',
    lessonAddendum: 'Infusion coding depends on time, route, substance, and hierarchy. The interruption math must come from the documented record, not estimation.',
  },
  4108108: {
    newCorrect: 'The query is leading and ties the answer to reimbursement instead of clinical clarification.',
    lessonAddendum: 'Compliant queries are neutral and evidence-based. Tying the answer to billing is a documented compliance flag.',
  },

  // -------- Clinical Research --------
  4103400: {
    newCorrect: 'Make sure delegated duties, training, signatures, and start dates reflect actual authorization.',
    lessonAddendum: 'Delegation logs are evidence of authorized study roles. They should match actual work, training, dates, and investigator oversight rather than being cleaned up later.',
  },
  4103405: {
    newCorrect: 'Apply the protocol and escalate any proposed change through documented sponsor processes.',
    lessonAddendum: 'Recruitment pressure never overrides eligibility rules. Protocol criteria protect participants and data credibility, even when the enrollment dashboard is glaring.',
  },
  4108117: {
    newCorrect: 'Use approved participant-support options, allowed visit alternatives, and timely PI communication.',
    lessonAddendum: 'Ethical study conduct includes addressing barriers within approved rules. Sponsor and IRB-approved options come before improvisation.',
  },
  4103243: {
    newCorrect: 'Notify the investigator and follow SAE assessment and reporting requirements.',
    lessonAddendum: 'Potential serious adverse events require timely investigator assessment and reporting according to the protocol and applicable rules.',
  },
  4107568: {
    newCorrect: 'Route the report promptly for investigator assessment and AE documentation.',
    lessonAddendum: 'Potential adverse events require timely assessment regardless of how they arrive — even casual emails.',
  },

  // -------- Pharma Drug Safety --------
  4107576: {
    newCorrect: 'Capture the potential AE and route it through intake with the required minimum information.',
    lessonAddendum: 'Potential adverse events can arrive through informal channels — support chats, social media — and still require intake when minimum information exists.',
  },
  4108126: {
    newCorrect: 'Capture minimum reportable information, follow intake, assess whether it is an AE case.',
    lessonAddendum: 'Safety obligations can start from informal sources. The channel does not waive the obligation.',
  },
  4108128: {
    newCorrect: 'Duplicate criteria, source details, identifiers, chronology, merge-or-link decision.',
    lessonAddendum: 'Duplicate management protects accurate safety data and prevents double counting in aggregate reports.',
  },
  4103254: {
    newCorrect: 'Assess temporality, alternatives, dechallenge, rechallenge, plausibility — without overstating.',
    lessonAddendum: 'Causality assessment weighs evidence and uncertainty. Temporal association alone is not proof, and confounders should be documented clearly.',
  },
  4103418: {
    newCorrect: 'Case assessment, aggregate pattern, seriousness, plausibility, exposure context, proposed language.',
    lessonAddendum: 'Labeling decisions need a structured benefit-risk and evidence discussion. Individual cases matter more when interpreted within the broader safety pattern.',
  },
  4103255: {
    newCorrect: 'Cumulative cases, exposure estimates, literature, signals, benefit-risk, regulatory actions.',
    lessonAddendum: 'Aggregate reporting looks beyond individual cases. It summarizes patterns, exposure, emerging risks, and benefit-risk implications over time.',
  },
  4108134: {
    newCorrect: 'Root causes, effectiveness measures, additional controls, communication, regulatory commitments.',
    lessonAddendum: 'Risk controls need effectiveness checks and revision when they fail. A brochure that does not stop dosing errors is not the final answer.',
  },

  // -------- Healthcare Compliance --------
  4103256: {
    newCorrect: 'Policies, training, reporting channels, audit, investigation, correction, accountability.',
    lessonAddendum: 'Compliance programs need working controls, not symbolic documents. Each of the seven elements has to produce evidence of operation.',
  },
  4103420: {
    newCorrect: 'Test whether training is understood, reinforce reporting paths, and hold managers accountable.',
    lessonAddendum: 'Training effectiveness is more than attendance. Programs need evidence that people know what to do when real situations show up.',
  },
  4103421: {
    newCorrect: 'Whether the arrangement creates improper value, referral steering, or billing-independence risk.',
    lessonAddendum: 'Free or discounted support can be valuable remuneration in healthcare relationships. Compliance should review purpose, value, referral links, and safeguards.',
  },
  4108144: {
    newCorrect: 'Beneficiary inducement, anti-kickback, payer-contract, nondiscrimination, fair-market concerns.',
    lessonAddendum: 'Patient offers can create compliance risk when tied to payer or referral value. The selection criterion is the load-bearing test.',
  },
  4103427: {
    newCorrect: 'Follow the amendment process, route for clinical review, respond within required timing, document.',
    lessonAddendum: 'Patient rights workflows need timely, documented handling. Amendment requests are not automatic edits, but they must be reviewed through the proper process.',
  },
  4103428: {
    newCorrect: 'Review documentation standards, educate clinicians, sample future claims, refund or correct as needed.',
    lessonAddendum: 'Billing integrity depends on services being documented and medically necessary. Denial trends should trigger education, monitoring, and correction where support is missing.',
  },
  4103263: {
    newCorrect: 'Follow-up monitoring shows the error rate stayed reduced and controls are being used.',
    lessonAddendum: 'Corrective action is incomplete without checking effectiveness. Monitoring verifies that the fix changed future behavior, not just one claim.',
  },

  // -------- Health Insurance Payers --------
  4107608: {
    newCorrect: 'Benefit design, prior-auth rules, claim edits, vendor communication, member-facing explanations.',
    lessonAddendum: 'Payer operations should connect member pain to benefit and claims processes — repeated calls are the symptom, not the system.',
  },
  4103431: {
    newCorrect: 'Whether directory data, appointment availability, referral patterns, and member navigation are working.',
    lessonAddendum: 'Network performance is not only contract count. Real access depends on accurate data, open appointments, referral behavior, and member support.',
  },
  4108160: {
    newCorrect: 'Provider network relationships, lab billing entity, benefit rules, claim routing, member protections.',
    lessonAddendum: 'Network status can differ across entities involved in one visit. The lab and the urgent care can have completely different contracts.',
  },
  4103438: {
    newCorrect: 'Providers may be unfairly rewarded or penalized unless measures account for risk and access.',
    lessonAddendum: 'Value-based incentives need thoughtful measure design. Without risk adjustment and quality guardrails, contracts can create perverse incentives or unfair comparisons.',
  },
  4103434: {
    newCorrect: 'Classify and route the service complaint and coverage dispute as grievance and appeal.',
    lessonAddendum: 'Member contacts can contain multiple regulated issues. Correct classification protects timelines, review rights, and service recovery.',
  },
  4108170: {
    newCorrect: 'Define data exchange, SLAs, escalation, member-status reporting, and governance.',
    lessonAddendum: 'Delegated operations still need oversight and feedback loops. A silent vendor is not a working vendor.',
  },

  // -------- Regulatory Affairs --------
  4103441: {
    newCorrect: 'A structured comparison of intended use, technology, performance, risks, and meaningful differences.',
    lessonAddendum: 'Pathway strategy depends on disciplined comparison, not vibes. Differences in users, outputs, technology, and risk can change evidence and submission needs.',
  },
  4103276: {
    newCorrect: 'Evaluate impact on safety, effectiveness, intended use, validation, labeling, and submission.',
    lessonAddendum: 'Change control asks whether a modification affects product performance, risk, claims, or regulatory status. Invisible changes can still matter.',
  },
  4103449: {
    newCorrect: 'Whether the change affects validated process, specs, risk controls, labeling, or filings.',
    lessonAddendum: 'Supplier changes can affect regulated product quality and submissions. Regulatory affairs should be connected to change control before the change quietly reaches customers.',
  },
}
