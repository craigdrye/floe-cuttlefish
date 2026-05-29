// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the regulatory-medical top-off file (~64 questions across two tracks:
// regulatoryAffairsRoadmap and medical).
//
// CAREER_REG_MEDICAL_SUB_TOPICS groups every question into a chapter-shaped
// cluster keyed by id (the two tracks share the namespace, so id-form is
// simpler than the string-form used in vcPolish.ts).
//
// CAREER_REG_MEDICAL_MENTOR_HINTS overrides the generic scaffold hint with a
// one-line second-person nudge that names the move without giving the answer.
// Voice: a seasoned regulatory affairs lead for the RA track, and an attending
// physician mentoring a resident for the medical track.
//
// CAREER_REG_MEDICAL_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct >= 1.8x the longest distractor AND >= 20
// chars longer). Trimmed checklist clauses are reattached via `lessonAddendum`
// so no teaching is lost.

// -----------------------------------------------------------------------------
// SUB_TOPICS — id -> cluster name. Cluster names mirror the source chapter so
// the lesson surface aligns with each track's syllabus.
// -----------------------------------------------------------------------------

export const CAREER_REG_MEDICAL_SUB_TOPICS: Record<number, string> = {
  // ---------- regulatoryAffairsRoadmap ----------
  // Chapter 1: Regulatory Role and Product Profile
  4260900: 'Regulatory Role and Product Profile',
  4260920: 'Regulatory Role and Product Profile',
  // Chapter 2: Labeling, Claims, and Promotional Review
  4260901: 'Labeling, Claims, and Promotional Review',
  4260908: 'Labeling, Claims, and Promotional Review',
  4260909: 'Labeling, Claims, and Promotional Review',
  4260915: 'Labeling, Claims, and Promotional Review',
  4260918: 'Labeling, Claims, and Promotional Review',
  4260923: 'Labeling, Claims, and Promotional Review',
  4260926: 'Labeling, Claims, and Promotional Review',
  // Chapter 3: Change Control and Post-Market Duties
  4260902: 'Change Control and Post-Market Duties',
  4260903: 'Change Control and Post-Market Duties',
  4260906: 'Change Control and Post-Market Duties',
  4260907: 'Change Control and Post-Market Duties',
  4260912: 'Change Control and Post-Market Duties',
  4260913: 'Change Control and Post-Market Duties',
  4260916: 'Change Control and Post-Market Duties',
  4260921: 'Change Control and Post-Market Duties',
  4260922: 'Change Control and Post-Market Duties',
  4260927: 'Change Control and Post-Market Duties',
  4260929: 'Change Control and Post-Market Duties',
  4260931: 'Change Control and Post-Market Duties',
  // Chapter 4: Pathways and Agency Questions
  4260904: 'Pathways and Agency Questions',
  4260914: 'Pathways and Agency Questions',
  4260917: 'Pathways and Agency Questions',
  4260925: 'Pathways and Agency Questions',
  4260930: 'Pathways and Agency Questions',
  // Chapter 5: Evidence and Submission Readiness
  4260905: 'Evidence and Submission Readiness',
  4260910: 'Evidence and Submission Readiness',
  4260911: 'Evidence and Submission Readiness',
  4260919: 'Evidence and Submission Readiness',
  4260924: 'Evidence and Submission Readiness',
  4260928: 'Evidence and Submission Readiness',

  // ---------- medical ----------
  // Chapter 1: Triage and Red Flags
  4260932: 'Triage and Red Flags',
  4260934: 'Triage and Red Flags',
  4260939: 'Triage and Red Flags',
  4260940: 'Triage and Red Flags',
  4260945: 'Triage and Red Flags',
  4260948: 'Triage and Red Flags',
  4260952: 'Triage and Red Flags',
  4260958: 'Triage and Red Flags',
  4260962: 'Triage and Red Flags',
  // Chapter 2: Differential Diagnosis and Mechanism
  4260933: 'Differential Diagnosis and Mechanism',
  4260960: 'Differential Diagnosis and Mechanism',
  // Chapter 3: Evidence, Tests, and Bayesian Updating
  4260935: 'Evidence, Tests, and Bayesian Updating',
  4260941: 'Evidence, Tests, and Bayesian Updating',
  4260944: 'Evidence, Tests, and Bayesian Updating',
  4260949: 'Evidence, Tests, and Bayesian Updating',
  4260956: 'Evidence, Tests, and Bayesian Updating',
  // Chapter 4: History, Exam, and Data Gathering
  4260936: 'History, Exam, and Data Gathering',
  4260951: 'History, Exam, and Data Gathering',
  4260961: 'History, Exam, and Data Gathering',
  // Chapter 5: Communication, Documentation, and Handoffs
  4260937: 'Communication, Documentation, and Handoffs',
  4260943: 'Communication, Documentation, and Handoffs',
  4260950: 'Communication, Documentation, and Handoffs',
  4260953: 'Communication, Documentation, and Handoffs',
  4260954: 'Communication, Documentation, and Handoffs',
  4260959: 'Communication, Documentation, and Handoffs',
  // Chapter 6: Cognitive Bias and Diagnostic Error
  4260938: 'Cognitive Bias and Diagnostic Error',
  4260946: 'Cognitive Bias and Diagnostic Error',
  4260955: 'Cognitive Bias and Diagnostic Error',
  4260963: 'Cognitive Bias and Diagnostic Error',
  // Chapter 7: Clinical Reasoning Mindset
  4260942: 'Clinical Reasoning Mindset',
  4260947: 'Clinical Reasoning Mindset',
  4260957: 'Clinical Reasoning Mindset',
}

// -----------------------------------------------------------------------------
// MENTOR_HINTS — one-line nudge that names the move without giving the answer.
// Regulatory voice: a senior RA lead reminding the team how a reviewer reads
// the file. Medical voice: an attending physician at the bedside, naming the
// red flag or the reasoning trap.
// -----------------------------------------------------------------------------

export const CAREER_REG_MEDICAL_MENTOR_HINTS: Record<number, string> = {
  // ---------- Regulatory: Regulatory Role and Product Profile ----------
  4260900: 'A wording change can move the product across the diagnostic line. Ask whether the new copy creates a regulated claim.',
  4260920: 'Reduced is not gone. Residual risk needs benefit-risk justification and, often, labeling or monitoring.',

  // ---------- Regulatory: Labeling, Claims, and Promotional Review ----------
  4260901: 'Promotional scope covers what the field says, shows, and implies — not only what is printed on the carton.',
  4260908: 'Internal sign-off is not user comprehension. Human factors data can force a labeling change.',
  4260909: 'Local labeling rules are part of the registration, not a marketing afterthought. Controlled translation comes before launch.',
  4260915: 'A claim accepted in one jurisdiction does not auto-port. Match the claim to the local authorization.',
  4260918: 'Off-label visuals are off-label claims. Promotional review covers slides as much as datasheets.',
  4260923: 'Sponsored white papers carry promotional weight. Subgroup post-hocs need careful framing, not headlines.',
  4260926: 'Common physician use does not move the authorized indication. Expanding the IFU needs evidence and review.',

  // ---------- Regulatory: Change Control and Post-Market Duties ----------
  4260902: 'A safety-relevant performance change is a controlled change, not a release-note. Run the change-impact assessment.',
  4260903: 'Chemically similar is not equivalent. Route the supplier change through design and supplier controls.',
  4260906: 'During inspection, preserve and explain. Fabricated rationale converts an observation into a serious finding.',
  4260907: 'Repeat findings expose weak root-cause. Retraining alone rarely closes a documentation failure.',
  4260912: 'Trending is the point of complaint handling. The signal is the pattern, not any single intermittent shutdown.',
  4260913: 'Reporting clocks run on awareness, not certainty. Open the assessment now and update as evidence arrives.',
  4260916: 'Urgency does not exempt records. A cybersecurity patch still needs the risk file, approvals, and customer comms.',
  4260921: 'If RA learns about test-method changes from the renewal draft, change control is not embedded. Surface the gap.',
  4260922: 'Calling a recall a newsletter does not change its classification. Field actions are defined by the action, not the email subject.',
  4260927: 'Observation responses are scored on specificity. Containment, root cause, owners, dates, effectiveness check — all named.',
  4260929: 'A new warning has to flow through risk, training, and reporting. Labels do not auto-propagate to controlled records.',
  4260931: 'Surveillance includes signals outside the complaint form. Support-call confusion can be a use-error signal.',

  // ---------- Regulatory: Pathways and Agency Questions ----------
  4260904: 'Deficiency letters reward responsive evidence, not rhetoric. Answer the specific question with data or a justified plan.',
  4260914: 'Approvals do not travel. Each jurisdiction has its own classification, evidence, and post-market obligations.',
  4260917: 'Predicate logic depends on intended use, population, and risk — not on product name similarity.',
  4260925: 'Channel convenience is not legal verification. Confirm local registration requirements through qualified sources.',
  4260930: 'Agency meetings reward specificity. Bring the product, the intended use, the questions, and the rationale you want pressure-tested.',

  // ---------- Regulatory: Evidence and Submission Readiness ----------
  4260905: 'A submission has to be reviewable. Broken cross-references and missing appendices burn reviewer goodwill before content review starts.',
  4260910: 'Bench accuracy is technical performance. Outcome claims need outcome evidence — different question, different study.',
  4260911: 'Claim scope follows study design. Twelve usability participants do not authorize "proven safe and effective for all adults."',
  4260919: 'Personal inboxes are not controlled records. Move evidence to versioned, retrievable storage before the auditor asks.',
  4260924: 'Submission readiness should be visible. Make missing inputs, owners, and dependencies explicit so leadership can choose knowingly.',
  4260928: 'Real-world data has different strengths than planned trials. Test quality, bias, and endpoint fit against the claim and jurisdiction.',

  // ---------- Medical: Triage and Red Flags ----------
  4260932: 'Crushing chest pressure with sweating and nausea is not a routine slot. Acuity overrides schedule.',
  4260934: 'Sudden worst-ever headache with neck stiffness is a textbook red flag. Escalate before reassuring.',
  4260939: 'Trust the vitals over the smile. Hypotension with tachycardia is objective instability.',
  4260940: 'Speaking in short phrases and using accessory muscles is the airway sign. Forms come after assessment.',
  4260945: 'Acute change from baseline is the signal. Collateral history from family is itself the evidence.',
  4260948: 'Heavy bleeding with dizziness in pregnancy is a potential obstetric emergency. Stability first.',
  4260952: 'New back pain plus leg weakness or bladder change is the cauda-equina story. Move now.',
  4260958: 'Fever during chemotherapy is neutropenic until proven otherwise. Treat it as an emergency.',
  4260962: 'Fever, tachycardia, hypotension, and confusion is shock physiology. Time-sensitive — start before labs return.',

  // ---------- Medical: Differential Diagnosis and Mechanism ----------
  4260933: 'Keep the differential open when the exam is unclear. Weigh likelihood against potential harm before committing.',
  4260960: 'Worsening with new confusion at 48 hours is not a sign to repeat the plan. Reassess the diagnosis.',

  // ---------- Medical: Evidence, Tests, and Bayesian Updating ----------
  4260935: 'Pretest probability moves with prevalence and risk. A screen positive in a no-risk patient often needs confirmation.',
  4260941: 'A lab discordant with the story is a candidate for repeat, not the new ground truth.',
  4260944: 'Sensitive tests rule out when negative — most useful when the cost of missing is high and prevalence is low.',
  4260949: 'Absolute risk and relative risk answer different questions. Translate both for the patient.',
  4260956: 'Specific tests rule in when positive, especially when the clinical picture already fits.',

  // ---------- Medical: History, Exam, and Data Gathering ----------
  4260936: 'Two prescriptions with similar drugs need reconciliation, not another order. Duplications are how dosing errors happen.',
  4260951: 'Supplements have pharmacology. Reconcile them before starting anticoagulation; bleeding-risk counseling is part of the start.',
  4260961: 'Transitions of care are the high-risk zone. Resolve the cardiology-vs-hospital discrepancy before the patient walks out.',

  // ---------- Medical: Communication, Documentation, and Handoffs ----------
  4260937: 'False certainty in either direction creates harm. Explain abnormal but nondiagnostic, then name the next step.',
  4260943: 'Nodding is not understanding. Use teach-back for high-risk medications.',
  4260950: 'Watchful waiting works when it has guardrails — return precautions, expected course, follow-up timing.',
  4260953: 'Bad news should be honest, compassionate, and actionable. Avoid biopsy-free certainty and avoid vagueness.',
  4260954: 'Critical results travel with the responsibility, not with the visit. Contact the patient through the critical-result process.',
  4260959: 'Affordability is a safety topic. Surface cost barriers and find a workable plan before unsafe self-adjustment happens.',

  // ---------- Medical: Cognitive Bias and Diagnostic Error ----------
  4260938: 'Premature closure: the comfortable label survives even when new red flags arrive. Reopen the assessment when symptoms change.',
  4260946: 'A common seasonal diagnosis can coexist with a dangerous finding. Red flags should keep the workup open.',
  4260955: 'The familiar diagnosis can shadow a new presentation. Migraine history does not explain vision loss.',
  4260963: 'Specialist notes can expire. Exertional chest pressure deserves a fresh cardiac thought.',

  // ---------- Medical: Clinical Reasoning Mindset ----------
  4260942: 'Renal impairment changes the dose math. The standard adult dose can be toxic in reduced clearance.',
  4260947: 'A throat-swelling history is a hard stop. Clarify the allergy before exposure, not after.',
  4260957: 'Look-alike, sound-alike medications need system controls. Memory and proximity are the failure modes.',
}

// -----------------------------------------------------------------------------
// CORRECT_SHORTENED — questions where `correct` was substantially longer than
// the longest distractor (correct >= 1.8x and >= 20 chars longer). Each entry
// shortens the correct line and routes the trimmed checklist into a
// `lessonAddendum` so the underlying teaching is intact.
// -----------------------------------------------------------------------------

export const CAREER_REG_MEDICAL_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // ---------- Regulatory ----------
  4260900: {
    newCorrect: 'Reassess intended use and whether a new submission or authorization is required.',
    lessonAddendum: 'A full intended-use reassessment covers classification, evidence sufficiency, labeling, and the submission or authorization pathway. Diagnostic or disease-risk claims need that evaluation before launch copy is finalized.',
  },
  4260902: {
    newCorrect: 'A documented change-impact assessment covering safety, risk controls, validation, and submission impact.',
    lessonAddendum: 'A complete change-impact assessment also covers effectiveness, risk-control verification, labeling consequences, and whether the change requires a new submission or notification. Performance polish is not an exemption when safety is in scope.',
  },
  4260903: {
    newCorrect: 'Route the change through supplier and design controls to assess biocompatibility and regulatory impact.',
    lessonAddendum: 'Supplier-change control should also evaluate performance, validation, and documentation traceability before the changed material reaches users. Chemical similarity is not equivalence for patient-contact components.',
  },
  4260906: {
    newCorrect: 'Provide factual information and preserve records through the inspection team.',
    lessonAddendum: 'Inspection response is calm, factual, preserved, and coordinated. Fabrication or record-deletion converts an observation into a serious finding; accuracy and corrective action matter more than defensive speed.',
  },
  4260914: {
    newCorrect: 'Each jurisdiction may have different classification, evidence, labeling, and post-market requirements.',
    lessonAddendum: 'Local strategy still covers registration timing, in-country representatives, language and labeling rules, and surveillance obligations. Prior approvals can inform the plan but do not erase jurisdiction-specific work.',
  },
  4260916: {
    newCorrect: 'Documented risk assessment, testing, approvals, and customer communication appropriate to the urgency.',
    lessonAddendum: 'Urgent changes still need controlled records: risk file update, testing scaled to risk, approvals, customer notice, and any reporting or submission review. Speed and traceability coexist when patient safety is at stake.',
  },
  4260917: {
    newCorrect: 'Assess whether the comparison is still valid and whether differences require additional evidence.',
    lessonAddendum: 'Predicate or comparator logic depends on intended use, technology, population, and risk. Meaningful differences can change the evidence plan or push the product to a different regulatory pathway.',
  },
  4260920: {
    newCorrect: 'Residual risk evaluation with benefit-risk rationale and documented acceptability.',
    lessonAddendum: 'Closing a hazard also requires any needed labeling or monitoring, and approval of acceptability by the responsible function. Reduced is not eliminated; the residual still has to be justified and tracked.',
  },
  4260922: {
    newCorrect: 'Whether the action is a field correction or recall and what notifications are required.',
    lessonAddendum: 'Customer safety communications can trigger field action requirements with specific terminology, records, notification timing, customer follow-up, and effectiveness checks. Calling it a newsletter does not change the classification.',
  },
  4260924: {
    newCorrect: 'A realistic readiness assessment showing missing inputs, owners, and decision points.',
    lessonAddendum: 'Submission planning makes gaps visible — owners, dependencies, residual risks, and the points at which leadership can choose schedule, scope, or evidence tradeoffs. Hiding the gap until the final week removes those options.',
  },
  4260925: {
    newCorrect: 'Verify local legal requirements with qualified sources before accepting the interpretation.',
    lessonAddendum: 'Local regulatory decisions rely on verified requirements — local counsel, regulatory consultants, or authority guidance. Distributor input is one source, not the final word.',
  },
  4260926: {
    newCorrect: 'Expanding the indication may require new evidence, labeling updates, and regulatory review.',
    lessonAddendum: 'Indication statements define intended use and supported populations. Off-label physician practice is common but does not move the authorized indication; expansion typically needs supporting data and submission or authorization.',
  },
  4260927: {
    newCorrect: 'Containment, root cause, corrective actions, owners, dates, and effectiveness checks.',
    lessonAddendum: 'Inspectors score observation responses on specificity and verifiability. The response should address current risk, root cause, recurrence prevention, and how the team will confirm the fix actually held.',
  },
  4260928: {
    newCorrect: 'Data quality, representativeness, bias, and endpoint fit for the claim and jurisdiction.',
    lessonAddendum: 'Real-world evidence can be useful, but value depends on data quality, context, endpoints, and whether the data answers the specific claim. Bias matters for any evidence supporting regulatory claims, not only in academic papers.',
  },
  4260929: {
    newCorrect: 'Link the change through risk management, labeling control, training, and reporting assessment.',
    lessonAddendum: 'Post-market changes touch multiple controlled records. Traceability keeps risk, labeling, training, complaint analysis, and any reporting decision aligned so audits see one coherent story rather than a labeling change with stale supporting files.',
  },
  4260930: {
    newCorrect: 'A product description, intended use, specific questions, and rationale for the preferred path.',
    lessonAddendum: 'A productive agency briefing book also includes an evidence summary and the position the company wants pressure-tested. Open-ended "tell us what to do" requests waste the meeting; raw data with no questions wastes the reviewer.',
  },
  4260931: {
    newCorrect: 'Whether support-call signals should feed complaint handling, trend analysis, or risk controls.',
    lessonAddendum: 'Post-market surveillance captures relevant signals across channels — phone, chat, field reports — not only formal complaint forms. Usability patterns can point to labeling, training, or design-control issues before harm occurs.',
  },

  // ---------- Medical ----------
  4260937: {
    newCorrect: 'Explain that the result is abnormal but not diagnostic, and describe the next step.',
    lessonAddendum: 'Honest uncertainty is safer when paired with concrete safety instructions and a clear follow-up plan. False yes creates avoidable distress; false no can delay follow-up.',
  },
  4260938: {
    newCorrect: 'Premature closure — the new neurologic symptom should reopen the assessment.',
    lessonAddendum: 'Premature closure happens when reasoning stops at the first label. New red flags — slurred speech here — should trigger reassessment even after an initial impression, not be filed under the original label.',
  },
  4260941: {
    newCorrect: 'Interpret the lab in clinical context and consider repeat testing before acting.',
    lessonAddendum: 'Evidence gains meaning in context. Discordant or borderline results often need confirmation before major treatment decisions; the lab is part of the picture, not the picture.',
  },
  4260943: {
    newCorrect: 'Use teach-back to confirm dose, warning signs, interactions, and follow-up.',
    lessonAddendum: 'Teach-back checks whether the instructions actually landed. High-risk medications like anticoagulants require confirmed understanding of dosing, bleeding warning signs, food and drug interactions, and the follow-up plan.',
  },
  4260945: {
    newCorrect: 'Take the change seriously and assess for delirium or acute illness.',
    lessonAddendum: 'Collateral history is the evidence — family report of acute mental-status change is itself the signal. Sudden confusion is a safety flag that deserves assessment and escalation based on findings.',
  },
  4260946: {
    newCorrect: 'Assuming flu explains everything despite the red flags.',
    lessonAddendum: 'Common diagnoses can coexist with dangerous findings. Low oxygen and chest pain on top of fever and cough should keep pneumonia, pulmonary embolism, and cardiac causes in the differential rather than letting the seasonal label close the workup.',
  },
  4260949: {
    newCorrect: 'It lowers absolute risk by 1 point, which is a 25% relative reduction.',
    lessonAddendum: 'Absolute and relative risk tell different stories. The same data is a "1 percentage point reduction" and a "25% relative reduction" simultaneously — patients understand the practical benefit best when both framings are offered.',
  },
  4260950: {
    newCorrect: 'Clear return precautions, follow-up timing, and documentation of uncertainty.',
    lessonAddendum: 'Watchful waiting is active when it includes guardrails — the expected course, the specific changes that should trigger return, and a documented follow-up plan. "Probably fine" alone is not a plan.',
  },
  4260951: {
    newCorrect: 'Include supplements in reconciliation and assess interactions and bleeding risk.',
    lessonAddendum: 'Medication reconciliation covers nonprescription products. Supplements can have real pharmacologic effects and interact with anticoagulation; misclassifying them as allergies hides the interaction risk.',
  },
  4260954: {
    newCorrect: 'Follow critical-result procedures to contact the patient and document actions.',
    lessonAddendum: 'Critical values do not wait for the next routine slot. Safety responsibilities continue after the patient leaves the room; the team should use the critical-result workflow to reach the patient or emergency support and document the outreach.',
  },
  4260955: {
    newCorrect: 'Attributing the new presentation to the old diagnosis without reassessing.',
    lessonAddendum: 'Past diagnoses are useful context but new red flags — vision loss in a known migraineur — deserve a fresh assessment. Familiar labels can hide new risk; the discipline is to ask what is different this time.',
  },
  4260956: {
    newCorrect: 'It strongly supports the diagnosis because false positives are uncommon.',
    lessonAddendum: 'Specific tests help rule in disease when positive, especially when the clinical picture already fits. A positive on a highly specific test in a compatible patient raises posttest probability sharply.',
  },
  4260957: {
    newCorrect: 'Use medication-safety checks: verification, separation, and confirmation before administration.',
    lessonAddendum: 'Look-alike and sound-alike medications create predictable error risk. System controls — barcode scanning, tall-man lettering, physical separation, independent verification — reduce reliance on memory and proximity, which are the failure modes.',
  },
  4260962: {
    newCorrect: 'Escalate urgently for possible sepsis while assessing airway, breathing, circulation, and source.',
    lessonAddendum: 'Sepsis and shock are time-sensitive. Treatment — fluids, source control, antimicrobials — starts before every lab returns; abnormal vitals with confusion are reason enough to escalate and begin the ABCs and source search in parallel.',
  },
}
