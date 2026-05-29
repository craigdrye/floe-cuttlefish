// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Career Qualifications Law/Project/HR subfamily — Bar Exam,
// PMP Wrangler, and SHRM People Ops tracks (~108 questions across 24
// chapters).
//
// CAREER_QUALS_LAW_PM_HR_SUB_TOPICS groups each chapter's questions into
// lesson-shaped clusters (cap 8 per chapter, since the lesson grouping
// caps at 8 lessons per chapter).
//
// CAREER_QUALS_LAW_PM_HR_MENTOR_HINTS overrides the generic scaffold hint
// with a one-line second-person nudge that names the reasoning move
// without giving the answer. Voice shifts by track:
//   - Bar Exam: senior attorney mentoring a bar-prep candidate
//   - PMP:      PMP-certified program manager coaching an exam candidate
//   - SHRM:     senior HRBP coaching a generalist
//
// CAREER_QUALS_LAW_PM_HR_CORRECT_SHORTENED trims `correct` strings whose
// listed elements crowd the answer line. Trimmed clauses are reattached
// via `lessonAddendum` so no information is lost.

export const CAREER_QUALS_LAW_PM_HR_SUB_TOPICS: Record<number, string> = {
  // =====================================================================
  // BAR EXAM (Law Fog Machine)
  // =====================================================================

  // ---------- Chapter 1: The Bar Exam Operating System ----------
  4250700: 'Call of the Question',
  4250701: 'Element-Driven Essays',

  // ---------- Chapter 2: MBE Core I - CivPro, ConLaw, Evidence ----------
  4250702: 'Civil Procedure: Jurisdiction and Venue',
  4250703: 'Civil Procedure: Jurisdiction and Venue',
  4250704: 'Civil Procedure: Default and Pleadings',
  4250705: 'Constitutional Law: State Action and Scrutiny',
  4250706: 'Constitutional Law: State Action and Scrutiny',
  4250707: 'Constitutional Law: Speech and Forum',
  4250708: 'Evidence: Hearsay Purpose and Layers',
  4250709: 'Evidence: Character and Propensity',
  4250710: 'Evidence: Hearsay Purpose and Layers',
  4250711: 'Evidence: Impeachment vs Substantive Use',

  // ---------- Chapter 3: MBE Core II - Contracts, Torts, Crim, Property ----------
  4250712: 'Contracts: Framework and Formation',
  4250713: 'Contracts: Framework and Formation',
  4250714: 'Torts: Negligence Elements',
  4250715: 'Torts: Intent and Strict Liability',
  4250716: 'Criminal Law: Attempt and Mens Rea',
  4250717: 'Criminal Law: Search and Seizure',
  4250718: 'Real Property: Recording and Priority',
  4250719: 'Real Property: Covenants and Servitudes',
  4250720: 'Real Property: Landlord and Premises Duties',

  // ---------- Chapter 4: Essay Subjects and MEE Rule Muscles ----------
  4250721: 'Agency and Authority',
  4250722: 'Wills and Family Law',
  4250723: 'Wills and Family Law',
  4250724: 'Secured Transactions: Attachment and Proceeds',
  4250725: 'Secured Transactions: Attachment and Proceeds',
  4250726: 'Equitable Remedies',

  // ---------- Chapter 5: MPT - Lawyering in a 90-Minute Box ----------
  4250727: 'Task Memo Discipline',
  4250728: 'Library Synthesis',
  4250729: 'Format and Audience',

  // ---------- Chapter 6: Memorization, Retrieval, and Attack Outlines ----------
  4250730: 'Wrong-Answer Logs',
  4250731: 'Final-Week Practice Diet',

  // ---------- Chapter 7: MBE Strategy and Distractor Surgery ----------
  4250732: 'Rule vs Exception Fit',
  4250733: 'Rule vs Exception Fit',
  4250734: 'Answer-Change Discipline',
  4250735: 'Missing Elements',

  // ---------- Chapter 8: Simulation, Final Review, and Exam-Day Execution ----------
  4250736: 'Stuck-Question Triage',
  4250737: 'Essay Momentum',
  4250738: 'Time Allocation',

  // =====================================================================
  // PMP WRANGLER (Scope Creep Rodeo)
  // =====================================================================

  // ---------- Chapter 1: PMP Operating System ----------
  4250800: 'Charter and Authority',

  // ---------- Chapter 2: People - Teams, Conflict, Communication ----------
  4250801: 'Conflict Resolution',
  4250802: 'Capability and Bottlenecks',
  4250803: 'Psychological Safety',

  // ---------- Chapter 3: Stakeholders, Vision, and Business Value ----------
  4250804: 'Stakeholder Engagement',
  4250805: 'Benefits Ownership',
  4250806: 'Outcomes vs Outputs',

  // ---------- Chapter 4: Starting and Planning the Work ----------
  4250807: 'Schedule Compression',
  4250808: 'Dependencies and Float',
  4250809: 'Reserves and Risk Response',
  4250810: 'Dependencies and Float',
  4250811: 'Requirements Traceability',

  // ---------- Chapter 5: Executing, Monitoring, and Controlling ----------
  4250812: 'Change Control',
  4250813: 'Change Control',
  4250814: 'Earned Value Reading',
  4250815: 'Quality Control vs Assurance',
  4250816: 'Scope Validation',
  4250817: 'Tailored Communication',

  // ---------- Chapter 6: Risk, Issues, Compliance, and Procurement ----------
  4250818: 'Risk-to-Issue Transition',
  4250819: 'Risk-to-Issue Transition',
  4250820: 'Positive Risk and Opportunity',
  4250821: 'Procurement and Contract Type',
  4250822: 'Vendor Performance',

  // ---------- Chapter 7: Agile, Hybrid, and Tailoring Lab ----------
  4250823: 'Agile Roles and Authority',
  4250824: 'Tailoring and Hybrid Design',
  4250825: 'Definition of Done',
  4250826: 'Agile Metrics',
  4250827: 'Sprint Protection',

  // ---------- Chapter 8: Exam Strategy and Simulation ----------
  4250828: 'Best-Next-Action Habit',
  4250829: 'Absolute-Answer Smell',
  4250830: 'Process Over Heroics',
  4250831: 'Metric Meaning',

  // =====================================================================
  // SHRM PEOPLE OPS MAZE
  // =====================================================================

  // ---------- Chapter 1: SHRM Decision Logic and HR's Role ----------
  4250900: 'Facts Before Action',

  // ---------- Chapter 2: People Domain ----------
  4250901: 'Structured Selection',
  4250902: 'Compensation Structure',
  4250903: 'Performance Feedback',
  4250904: 'Rating Calibration',
  4250905: 'Incentive Design',

  // ---------- Chapter 3: Organization Domain ----------
  4250906: 'Change Adoption',
  4250907: 'Strategic Workforce Decisions',
  4250908: 'Strategic Workforce Decisions',
  4250909: 'Change Communication',
  4250910: 'Reward-Strategy Alignment',

  // ---------- Chapter 4: Workplace Domain ----------
  4250911: 'Adverse Impact',
  4250912: 'Accommodation and Interactive Process',
  4250913: 'Retaliation Risk',
  4250914: 'Protected Concerted Activity',
  4250915: 'Promotion Equity',
  4250916: 'Safety and Near-Miss Culture',

  // ---------- Chapter 5: Behavioral Competencies in Practice ----------
  4250917: 'Investigation Intake',
  4250918: 'Confidential Data',

  // ---------- Chapter 6: Data, Metrics, and Evidence-Based HR ----------
  4250919: 'Segmenting Metrics',
  4250920: 'Segmenting Metrics',
  4250921: 'Segmenting Metrics',

  // ---------- Chapter 7: Employee Relations Lab ----------
  4250922: 'Consistent Discipline',
  4250923: 'Witness Protection',

  // ---------- Chapter 8: Exam Survival and Scenario Judgment ----------
  4250924: 'Balanced HR Judgment',
  4250925: 'Balanced HR Judgment',
}

export const CAREER_QUALS_LAW_PM_HR_MENTOR_HINTS: Record<number, string> = {
  // =====================================================================
  // BAR EXAM — voice: senior attorney to bar candidate
  // =====================================================================

  // ---- Chapter 1: The Bar Exam Operating System ----
  4250700: 'The call tells you the subject and the task. Read it first; the story is only useful once you know what it is being asked to prove.',
  4250701: 'Formation comes before remedies. Offer, acceptance, consideration, timing — list the elements before the facts get loose.',

  // ---- Chapter 2: MBE Core I ----
  4250702: 'Subject-matter, personal jurisdiction, and venue are separate boxes. The one with no contacts is the one in play.',
  4250703: 'Removal is statutory. Timing, federal-question or diversity, and the forum-defendant limit — none of them are about how the judge feels.',
  4250704: 'Default is powerful but bounded. Notice, proof, and the relief actually pleaded all still have to clear.',
  4250705: 'The Constitution mostly constrains government. Before you reach for scrutiny, ask whether a state actor is in the room.',
  4250706: 'The classification or right picks the standard. Strict, intermediate, or rational basis is a downstream choice.',
  4250707: 'Prior approval in a public forum with unbridled discretion is a flag, not a footnote. Forum, content, and licensing decide the lane.',
  4250708: 'Hearsay turns on purpose. Notice, effect on listener, and state of mind are not hearsay because they are not offered for truth.',
  4250709: 'Propensity testimony in a negligence case is the classic Rule 404 trap. Ask what the evidence is offered to prove.',
  4250710: 'A business record can carry the file in; the embedded statement still needs its own exception. Layer by layer.',
  4250711: 'Impeachment and substantive use are different lanes. The same prior statement can be admitted for one and not the other.',

  // ---- Chapter 3: MBE Core II ----
  4250712: 'Goods or services? UCC Article 2 or common law? That choice picks the modification rule before anything else moves.',
  4250713: 'A unilateral offer is accepted by performance. Look for offer type before reaching for a signature ceremony.',
  4250714: 'Duty, breach, causation, damages. When two causes collide on the same injury, causation is the element under pressure.',
  4250715: '"Substantial certainty" is the second prong of intent. Desire is not required — knowledge to that level is enough.',
  4250716: 'Mere preparation is not attempt. Look for a substantial step paired with the specific intent to complete the crime.',
  4250717: 'A valid stop is not a general warrant. Each search escalation needs its own basis — consent, warrant, probable cause, or an exception.',
  4250718: 'Recording statute type plus notice plus order of recording drives priority. Cherry-picking dates loses the analysis.',
  4250719: 'Intent, notice, touch-and-concern, and the remedy sought decide whether a covenant or equitable servitude binds successors.',
  4250720: 'Premises liability turns on notice and control. A landlord\'s repair promise can reshape the duty owed to entrants.',

  // ---- Chapter 4: Essay Subjects and MEE Rule Muscles ----
  4250721: 'Actual, apparent, or ratified — agency turns on principal manifestations and third-party reliance, not internal authorisation alone.',
  4250722: 'Capacity asks what the testator understood. Undue influence asks who was applying pressure. Different doctrines, different facts.',
  4250723: 'Family law sorts around the child, not the loudest adult. Stability, caregiving, and concrete facts feed the standard.',
  4250724: 'Article 9 sequence: attachment, then perfection, then priority. No interest, no rank.',
  4250725: 'A perfected interest follows the value into identifiable proceeds. Trace the trail rather than assume the lien evaporates at sale.',
  4250726: 'Equitable remedies need inadequacy of damages plus a clean equitable record. Unique land is the textbook trigger for specific performance.',

  // ---- Chapter 5: MPT ----
  4250727: 'The task memo is the rubric. Format, audience, and library use are graded — outside law is forbidden.',
  4250728: 'When a case narrows the statute in your library, show the relationship. Do not quote the statute and pretend the case is missing.',
  4250729: 'Format is part of the task. A memo when the assignment asked for a client letter loses points the law cannot recover.',

  // ---- Chapter 6: Memorization, Retrieval, and Attack Outlines ----
  4250730: 'Log the rule tested, the trap that worked, the fact that mattered, and a cue you can recognise next time. Letter choice does not generalise.',
  4250731: 'Final week is for calibration, not reading. Outlines repair specific weaknesses that mixed timed practice has exposed.',

  // ---- Chapter 7: MBE Strategy and Distractor Surgery ----
  4250732: 'A general rule that ignores a triggered exception is the most common MBE trap. Fit beats grandeur.',
  4250733: 'When the facts plainly trigger an exception, the narrower answer is usually the right one.',
  4250734: 'Change only when you can name the rule or fact that makes the original wrong. Anxiety is not evidence.',
  4250735: 'You cannot earn points by inventing missing elements. Note the gap and let the doctrine show you spotted it.',

  // ---- Chapter 8: Simulation, Final Review, and Exam-Day Execution ----
  4250736: 'Eliminate, pick best supported, mark if allowed, move. Expected value beats sunk-cost staring on one item.',
  4250737: 'State the closest accurate rule, apply the facts, flag uncertainty, keep moving. Imperfect memory still earns credit when structure holds.',
  4250738: 'Three partial essays usually beat one polished essay and two blanks. Ration time across the work, not the favourite.',

  // =====================================================================
  // PMP — voice: PMP-certified program manager
  // =====================================================================

  // ---- Chapter 1: PMP Operating System ----
  4250800: 'No charter, no authority. Confirm objectives, success criteria, and decision rights before motion looks like progress.',

  // ---- Chapter 2: People ----
  4250801: 'Servant leadership starts with facilitation, not escalation. Bring the team back to facts, interests, and project objectives.',
  4250802: 'A repeated miss centered on one expert is a single-point-of-failure problem. Cross-train, pair, or staff — heroics are not a plan.',
  4250803: 'Private complaint, public dignity. Coach the behaviour, do not punish the reporter, and protect future feedback.',

  // ---- Chapter 3: Stakeholders, Vision, Business Value ----
  4250804: 'Late rejection is an engagement gap, not a delivery failure. Diagnose the alignment before the team takes blame.',
  4250805: 'Benefits without owners go unmeasured. Closure has to hand off the outcome work, not just the deliverables.',
  4250806: 'Shipped is not the same as adopted. Reopen the benefits conversation with evidence rather than declaring victory by feature count.',

  // ---- Chapter 4: Starting and Planning the Work ----
  4250807: 'Float on noncritical paths does not protect the critical path. Crashing and fast-tracking each carry their own tradeoffs — name them.',
  4250808: 'A hidden dependency becomes a visible risk the moment it surfaces. Update the model, then deal with the impact.',
  4250809: 'Contingency reserve is for the identified risk. Management reserve is for unknowns and almost always needs higher authorisation.',
  4250810: 'Float is flexibility, not free time. Spending it on polish removes future buffer and can turn the path critical.',
  4250811: 'Vague requirements lose scope arguments later. Push for testable, traceable language tied to acceptance criteria.',

  // ---- Chapter 5: Executing, Monitoring, Controlling ----
  4250812: 'Even a small-sounding sponsor ask travels through change control. Document, assess impact, then decide visibly.',
  4250813: 'Gold-plating is unbudgeted scope. Route the desired feature through change control or unwind it — do not celebrate it.',
  4250814: 'CPI and SPI: above 1 is favourable, below 1 is trouble. Both below 1 means over budget and behind — that is the headline.',
  4250815: 'Control checks outputs against criteria. Assurance improves the process that produces those outputs. Inspection is control.',
  4250816: 'Quality control happens first; customer or sponsor acceptance is its own gate. That is what Validate Scope formalises.',
  4250817: 'Communication is a tailored decision aid, not a data dump. Audience, format, detail, and decision focus — all four matter.',

  // ---- Chapter 6: Risk, Issues, Compliance, Procurement ----
  4250818: 'A risk that occurs is no longer uncertain. Convert it to an issue, run the planned response, update the logs, communicate.',
  4250819: 'Unregistered does not mean unmanageable. Treat it as an issue, do the analysis, and update the records honestly.',
  4250820: 'Positive risk gets responses too: exploit, enhance, share. Avoiding upside is leaving value on the table.',
  4250821: 'Stable scope pushes overrun risk to the seller — firm fixed-price. T&M and cost-reimbursable shift risk back to the buyer.',
  4250822: 'Procurement remedies live in the contract. Review terms, acceptance criteria, and performance records before any remedy decision.',

  // ---- Chapter 7: Agile, Hybrid, Tailoring ----
  4250823: 'Backlog ordering belongs to the product owner. Sponsors and stakeholders inform; the PO decides.',
  4250824: 'Tailoring matches life cycle to uncertainty and constraint. A fixed regulatory date plus emerging requirements is the textbook hybrid case.',
  4250825: 'A drifting definition of done is a forecasting and trust problem. Clarify it, then enforce it consistently.',
  4250826: 'Velocity is a team-specific planning measure. Cross-team comparison invites estimate inflation and tells you nothing about value.',
  4250827: 'Sprint scope changes flow through the product owner. Direct injection from senior leaders destabilises the framework and the forecast.',

  // ---- Chapter 8: Exam Strategy ----
  4250828: 'PMP rewards measured, collaborative, process-aware action. Assess facts, engage the right people, follow the process.',
  4250829: 'Always, never, immediately, only — absolute language is usually a distractor. Look for the context-fit answer instead.',
  4250830: 'Solo overnight heroics rarely beat the collaborative, impact-aware option. Process is the PMP default.',
  4250831: 'Stuck at 90% with no acceptance is a stall pattern. Investigate completion definition and blockers before reporting near-done.',

  // =====================================================================
  // SHRM — voice: senior HRBP coaching a generalist
  // =====================================================================

  // ---- Chapter 1: SHRM Decision Logic ----
  4250900: 'Facts, policy, past practice, risk — in that order. Inconsistent discipline is the textbook discrimination-risk pattern.',

  // ---- Chapter 2: People Domain ----
  4250901: 'Structured, job-related questions with consistent scoring. Gut feel has poor predictive validity and high adverse-impact risk.',
  4250902: 'Compression is a structure problem, not a recruiting win. Internal equity and budget have to move with market pay.',
  4250903: 'Annual reviews are a summary, not a surprise. The fix is timely, documented feedback throughout the cycle.',
  4250904: 'Calibration aligns judgement, not ratings. Shared criteria, evidence, and manager discussion reduce drift without forcing a curve.',
  4250905: 'Pay teaches behaviour. Speed-only bonuses produce speed-only behaviour — incentives have to align with quality and outcomes.',

  // ---- Chapter 3: Organization Domain ----
  4250906: 'Technical go-live is not adoption. Change management, training, communication, and reinforcement are what carry behaviour.',
  4250907: 'HR\'s role is workforce risk analysis, not auto-execution of the ask. Alternatives, capability impact, and compliance all matter.',
  4250908: 'Retirement waves need lead time. Build the bench through development, knowledge transfer, and targeted hiring before the cliff.',
  4250909: 'Silence during change is filled by rumour. Honest, timely communication about knowns and unknowns beats waiting for full clarity.',
  4250910: 'Posters do not override pay. If incentives contradict the stated culture, employees follow the pay plan.',

  // ---- Chapter 4: Workplace Domain ----
  4250911: 'A neutral-looking screen with disparate impact still needs job-relatedness and business necessity to stand up.',
  4250912: 'The interactive process is the legally-grounded starting point. Limitations, essential functions, and reasonableness do the work.',
  4250913: 'Adverse action right after a complaint is a retaliation flag. Timing, documented reasons, and consistency are the diligence checks.',
  4250914: 'NLRA protected concerted activity reaches nonunion workplaces. Wage discussion among employees often qualifies — pause before discipline.',
  4250915: 'Differential promotion rates deserve diagnosis, not denial or quotas. Inspect criteria, decision records, and access barriers.',
  4250916: 'Near misses are pre-injury data. Investigate root cause, reinforce reporting, and add controls before the first injury.',

  // ---- Chapter 5: Behavioral Competencies ----
  4250917: 'Confidentiality has limits when investigation is required. Explain those limits up front and begin a prompt fact-finding process.',
  4250918: 'Friendship is not a business need. Authorised-access rules govern HR data, full stop.',

  // ---- Chapter 6: Data, Metrics, Evidence-Based HR ----
  4250919: 'Averages hide localised problems. Segment by timing, role, manager, and onboarding before designing any response.',
  4250920: 'A healthy company average can mask a hot spot in one department. Validate themes locally and intervene where the pattern actually lives.',
  4250921: 'A spike concentrated in one shift after a schedule change is causal language, not noise. Investigate the local context first.',

  // ---- Chapter 7: Employee Relations Lab ----
  4250922: 'Similar facts should produce similar consequences. Mood-based discipline is the textbook discrimination-risk pattern.',
  4250923: 'Witness fear is real. Be explicit about anti-retaliation expectations and monitor conditions after the interview.',

  // ---- Chapter 8: Exam Survival ----
  4250924: 'Look for the option that gathers facts, aligns with policy, considers stakeholders, and protects fairness before acting.',
  4250925: 'Speed that skips facts, policy, employee impact, and legal risk is not SHRM judgement. Balanced wins on these items.',
}

export const CAREER_QUALS_LAW_PM_HR_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // =====================================================================
  // BAR EXAM
  // =====================================================================

  4250703: {
    newCorrect: 'Removal requirements — timing, federal jurisdiction, and the forum-defendant limit',
    lessonAddendum: 'Removal is statutory: a 30-day clock from receipt of the complaint or other paper making removability ascertainable, an independent basis for federal subject-matter jurisdiction, and the forum-defendant limit for diversity removals. Each piece can be the trip wire.',
  },
  4250704: {
    newCorrect: 'The default and default-judgment requirements — notice, proof, and limits on relief pleaded',
    lessonAddendum: 'Default itself is procedural, but default judgment still requires notice of the application where applicable, proof of damages above a sum certain, and adherence to the relief actually pleaded in the complaint. The defendant can also seek to set aside default for good cause.',
  },
  4250715: {
    newCorrect: 'Intent for an intentional tort may be shown by purpose or by knowledge with substantial certainty',
    lessonAddendum: 'The Restatement (Second) and most jurisdictions use this dual definition: purpose to cause the contact (or its consequence) OR knowledge to a substantial certainty that it will result. Substantial certainty is the prong that distinguishes intentional torts from negligence even when the defendant did not desire harm.',
  },
  4250720: {
    newCorrect: 'A landlord duty based on notice, control, lease terms, or an undertaking to repair',
    lessonAddendum: 'Modern premises and landlord doctrine layers several duty sources: notice of a defect, retained control of the area, lease covenants (express or implied warranty of habitability), and the common-law rule that an undertaking to repair creates a duty to do so non-negligently. A repair promise can elevate the duty owed even to guests.',
  },
  4250724: {
    newCorrect: 'Attachment — value given, debtor rights in the collateral, and an enforceable security agreement',
    lessonAddendum: 'Article 9 attachment under §9-203 requires three elements: value, debtor rights in the collateral, and either a written/authenticated security agreement with a description of the collateral, or the creditor\'s possession or control of the collateral where the type allows it. No attachment, no interest to perfect or rank.',
  },
  4250730: {
    newCorrect: 'Record the rule tested, the trap, the fact that mattered, and a next-time cue',
    lessonAddendum: 'A working wrong-answer log captures the rule the item tested, the distractor that pulled the candidate (the trap), the specific fact that made the right answer right, and a one-line cue the candidate can recognise on the next similar item. Letter choice does not generalise; rule plus trap plus cue does.',
  },
  4250732: {
    newCorrect: 'Reject it if the exception changes the outcome on these facts',
    lessonAddendum: 'MBE answers are fact-fit contests. A correctly stated general rule that ignores an exception clearly triggered by the facts is the most common wrong-answer pattern. Generality is not a tiebreaker; fit is.',
  },
  4250736: {
    newCorrect: 'Eliminate clearly wrong choices, pick best supported, mark if allowed, and preserve time',
    lessonAddendum: 'On a timed block, the dominant strategy when stuck is to eliminate the choices you can rule out, commit to the best remaining answer, flag the item for later review if the platform allows it, and move on. Expected value beats sunk-cost staring; later items are independent.',
  },

  // =====================================================================
  // PMP WRANGLER
  // =====================================================================

  4250812: {
    newCorrect: 'Document and run change control — assess scope, schedule, cost, risk, and value impact',
    lessonAddendum: 'PMP integrated change control evaluates every requested change across at least scope, schedule, cost, risk, and value (including stakeholder expectations and quality). Small-sounding sponsor asks still travel through the change control process; informal "yes" answers create unbudgeted work and break governance.',
  },
  4250819: {
    newCorrect: 'Manage it as an issue — analyse impacts, identify responses, and update records',
    lessonAddendum: 'Unregistered risks are still risks once they happen. PMP-style issue management runs the same loop as registered risks: assess impact, identify possible responses or workarounds, decide and act, update the issue log and any related plans, and communicate the impact and decisions to stakeholders.',
  },
  4250822: {
    newCorrect: 'Review the contract, acceptance criteria, performance data, and issue process first',
    lessonAddendum: 'Procurement remedies are contractual. Before deciding on remedies or escalation, the PM should review the contract terms (including cure provisions and SLAs), the acceptance criteria the deliverable missed, the performance data documenting the misses, and the agreed issue/escalation process. Termination or amendment without that foundation creates breach exposure.',
  },
  4250824: {
    newCorrect: 'A tailored hybrid — predictive governance for fixed constraints, iterative delivery for uncertainty',
    lessonAddendum: 'The PMP-style tailoring move pairs predictive governance (milestones, dependency planning, gate reviews) for the regulatory date with iterative delivery (short cycles, demos, backlog refinement) for the uncertain workflow features. The label matters less than the fit to risk and constraint.',
  },
  4250828: {
    newCorrect: 'Assess facts, engage the right people, and follow the process before drastic action',
    lessonAddendum: 'PMP scenario items reward the measured pattern: gather facts, engage the appropriate stakeholders or team members, and run the relevant process (change control, risk response, escalation path). Forceful unilateral action is almost always the lower-scoring choice unless the scenario explicitly demands emergency response.',
  },
  4250830: {
    newCorrect: 'The collaborative, impact-aware process answer — unless the scenario demands emergency action',
    lessonAddendum: 'PMP scenario design consistently rewards leadership through people and process over solo heroics. The exception is a true emergency where stakeholders are unreachable or harm is imminent; those cases are flagged clearly in the prompt. Default to the process-aware option.',
  },
  4250831: {
    newCorrect: 'Investigate whether progress reflects completed, accepted work — and what is blocking completion',
    lessonAddendum: 'Percent-complete metrics mislead when the last 10% includes acceptance, integration, or rework. The diagnostic move is to compare reported progress against accepted deliverables and surface the specific blockers preventing the final acceptance step. Stuck-at-90% is a stall pattern.',
  },

  // =====================================================================
  // SHRM PEOPLE OPS MAZE
  // =====================================================================

  4250900: {
    newCorrect: 'Gather facts, review policy and past practice, assess risk, and advise a consistent step',
    lessonAddendum: 'SHRM-style termination judgement runs through facts (what happened, documented how), policy (what the handbook and progressive discipline framework say), past practice (what similar cases led to), risk (protected class, recent protected activity, retaliation exposure), and only then a recommended next step that is consistent with the pattern. Inconsistency is the most common discrimination-risk trigger.',
  },
  4250901: {
    newCorrect: 'Use job-related structured questions with consistent scoring tied to required competencies',
    lessonAddendum: 'Structured interviewing pairs job-analysis-derived questions, an agreed scoring rubric tied to the role\'s required competencies, and consistent administration across candidates. The combination raises predictive validity and reduces adverse-impact risk versus unstructured "gut feel" interviewing.',
  },
  4250906: {
    newCorrect: 'Change management — training, communication, support, and feedback to lift adoption',
    lessonAddendum: 'Technical go-live is necessary but not sufficient. Adoption comes from role-based training, audience-tailored communication about the why and the how, accessible support during the transition, and a feedback loop that lets users surface workflow problems before they bypass the system. Replacing the software is rarely the right first move.',
  },
  4250907: {
    newCorrect: 'A workforce risk analysis with alternatives, legal and operational considerations, and strategic impact',
    lessonAddendum: 'HR\'s strategic role in cost decisions is to provide structured analysis, not auto-execute the ask. That includes alternatives (attrition, hiring freeze, reduced contract spend), legal considerations (WARN, adverse impact, protected groups), operational considerations (critical-role coverage, the upcoming launch), and impact on the strategic priorities the cut is supposed to serve.',
  },
  4250908: {
    newCorrect: 'Succession and workforce planning — knowledge transfer, development, recruiting, and retention',
    lessonAddendum: 'A retirement wave in a critical role needs lead time across several levers: knowledge transfer (documentation, shadowing, mentoring), internal development (promotion paths and targeted training), external recruiting for hard-to-grow skills, and retention strategies for the soon-to-retire experts during the transition. External hiring alone is rarely fast enough.',
  },
  4250912: {
    newCorrect: 'An interactive process to identify limitations, essential functions, and reasonable accommodations',
    lessonAddendum: 'The ADA interactive process is the legally-grounded starting point: a good-faith dialogue with the employee (and where appropriate the medical provider) to identify functional limitations, the essential functions of the job, and reasonable accommodations that allow the employee to perform those functions. Skipping the process is the textbook violation pattern.',
  },
  4250915: {
    newCorrect: 'Analyse the promotion process, criteria, decision records, and barriers before recommending action',
    lessonAddendum: 'A differential promotion rate that survives tenure and performance controls warrants process diagnosis: are criteria documented and applied consistently, do decision records show the basis, are there access barriers (sponsorship, visible work, development assignments), and are panel compositions varied. Quotas without diagnosis create their own exposure.',
  },
  4250916: {
    newCorrect: 'Investigate root causes, reinforce reporting, and add preventive controls before an injury',
    lessonAddendum: 'Near misses are the highest-value safety data. Root-cause investigation, reinforcement of the reporting culture (so people keep reporting), and engineering or procedural controls that address the cause are what convert near misses into prevented injuries. Punishing reporters is the fastest way to lose the signal.',
  },
  4250919: {
    newCorrect: 'Segment the data — timing, role, manager, selection, onboarding, and local factors',
    lessonAddendum: 'Aggregate turnover is rarely actionable. Useful segmentation includes time-to-attrition (first 90 days vs months 6-12), role and level, hiring manager, source and selection channel, onboarding cohort, and local factors specific to the location. Different segments often have different causes that aggregation hides.',
  },
  4250924: {
    newCorrect: 'The option that balances business need, ethical practice, legal risk, and people judgement',
    lessonAddendum: 'SHRM scenario items design four-way trade-offs: business need (what the manager or organisation wants), ethical practice (fair treatment, transparency), legal risk (protected groups, retaliation, documentation), and evidence-based people judgement (consistency, past practice, individual context). The correct answer is almost always the one that holds all four in view rather than optimising one.',
  },
}
