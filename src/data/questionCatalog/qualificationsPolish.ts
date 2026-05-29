// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the six qualification banks in careerPhilosophyQualificationQuestions.ts:
//   - professionalEthicsQuestions (4 items)
//   - cfaSurvivalQuestions (12 items)
//   - cpaExamQuestions (12 items)
//   - barExamQuestions (12 items)
//   - pmpWranglerQuestions (12 items)
//   - shrmPeopleQuestions (12 items)
//
// QUALS_SUB_TOPICS groups every question id under a cluster label spanning
// all six banks (kept distinct per bank — labels read naturally for the
// qualification they belong to).
//
// QUALS_MENTOR_HINTS overrides the generic scaffold with a one-line
// second-person nudge in the voice of an experienced practitioner:
//   CFA voice    -> senior portfolio manager
//   CPA voice    -> tax/audit partner
//   Bar voice    -> litigation partner
//   PMP voice    -> program manager
//   SHRM voice   -> senior HR business partner
//   Ethics voice -> ethics officer
//
// QUALS_CORRECT_SHORTENED trims `correct` strings that ran substantially
// longer than the longest distractor. Trimmed explanatory detail is
// reattached via `lessonAddendum` so nothing is lost.

export const QUALS_SUB_TOPICS: Record<number, string> = {
  // -------------------- Professional Ethics (471xxx) --------------------
  471001: 'Conflicts and Disclosure',
  471002: 'Process Under Pressure',
  471003: 'Moral Frameworks',
  471004: 'Escalation and Voice',

  // -------------------- CFA Survival (472xxx) --------------------
  472001: 'Standards and Conduct',
  472002: 'Quant Foundations',
  472003: 'Financial Reporting',
  472004: 'Portfolio Theory',
  472005: 'Standards and Conduct',
  472006: 'Economics and Policy',
  472007: 'Corporate Finance',
  472008: 'Equity Valuation',
  472009: 'Fixed Income',
  472010: 'Derivatives',
  472011: 'Alternatives',
  472012: 'Exam Craft',

  // -------------------- CPA Exam (473xxx) --------------------
  473001: 'Audit Evidence and Assertions',
  473002: 'Financial Accounting (FAR)',
  473003: 'Tax and Regulation (REG)',
  473004: 'Internal Controls',
  473005: 'Exam Structure and Strategy',
  473006: 'Financial Accounting (FAR)',
  473007: 'Audit Evidence and Assertions',
  473008: 'Audit Reporting',
  473009: 'Tax and Regulation (REG)',
  473010: 'Business Law',
  473011: 'Exam Structure and Strategy',
  473012: 'Exam Structure and Strategy',

  // -------------------- Bar Exam (474xxx) --------------------
  474001: 'Essay Craft and IRAC',
  474002: 'Contracts',
  474003: 'Torts',
  474004: 'Civil Procedure',
  474005: 'MBE Strategy',
  474006: 'Evidence',
  474007: 'MPT Craft',
  474008: 'Exam Transition',
  474009: 'Constitutional Law',
  474010: 'Criminal Law',
  474011: 'Real Property',
  474012: 'Essay Craft and IRAC',

  // -------------------- PMP Wrangler (475xxx) --------------------
  475001: 'Scope and Change Control',
  475002: 'Schedule and Critical Path',
  475003: 'Risk and Issue Response',
  475004: 'Agile and Scrum Roles',
  475005: 'People and Conflict',
  475006: 'Stakeholders and Engagement',
  475007: 'Life Cycle and Tailoring',
  475008: 'Earned Value',
  475009: 'Procurement and Contracts',
  475010: 'Quality',
  475011: 'Business Value and Benefits',
  475012: 'Exam Transition',

  // -------------------- SHRM People (476xxx) --------------------
  476001: 'Employee Relations',
  476002: 'Workforce Planning',
  476003: 'Compliance and Adverse Impact',
  476004: 'Learning and Development',
  476005: 'HR Decision Logic',
  476006: 'Talent Acquisition',
  476007: 'Total Rewards and Retention',
  476008: 'Change Management',
  476009: 'Accommodation and ADA',
  476010: 'Investigations',
  476011: 'HR Analytics',
  476012: 'Exam Craft',
}

export const QUALS_MENTOR_HINTS: Record<number, string> = {
  // ---------- Professional Ethics (voice: ethics officer) ----------
  471001: 'Ask who depends on your judgment and whether they can see what shapes it. Concealment is the harm; disclosure is the control.',
  471002: 'When a senior leader pressures you to skip a control, your defense later is the paper trail. Keep the review or get the exception in writing.',
  471003: 'Name the lens before you argue. Consequences ask about outcomes; duties ask about the kind of act itself.',
  471004: 'Escalate proportionate to risk, not proportionate to certainty. Honest uncertainty in the report is part of the report.',

  // ---------- CFA Survival (voice: senior portfolio manager) ----------
  472001: 'When jurisdictions and the Code disagree, the stricter applicable bar controls. That is the muscle memory the exam tests.',
  472002: 'Discounting is opportunity cost, not just inflation. A dollar today can earn before the future date — that is the whole engine.',
  472003: 'Capitalization shifts the hit from this period to later periods. Income and assets look better today; depreciation collects later.',
  472004: 'Diversification chips away at idiosyncratic risk. Market risk does not vanish — that is the point of beta.',
  472005: 'Material nonpublic information is a hard stop. Do not trade, do not tip, do not get cute about an independent view.',
  472006: 'Policy rates work through the credit and demand channels. Trace the mechanism before predicting the outcome.',
  472007: 'NPV at a risk-appropriate discount rate is the value-creation test. Payback and accounting profit are weaker substitutes.',
  472008: 'A premium multiple is a hypothesis about growth, risk, or accounting — not a verdict. Interrogate the embedded expectations.',
  472009: 'Duration is rate sensitivity, not credit safety. Keep your risk buckets separate or you will misprice the bond.',
  472010: 'A long call only pays off above strike. Intrinsic value is the gap; time value evaporates at expiration.',
  472011: 'Alts trade liquidity and pricing transparency for return access. Treat infrequent marks as a feature of the asset class, not a bug.',
  472012: 'On the calculator, identify the variables before you key anything in. Mode errors are how careful candidates lose easy points.',

  // ---------- CPA Exam (voice: tax/audit partner) ----------
  473001: 'Strong evidence is relevant, reliable, and sufficient for the assertion. Three boxes — tick each one before you move on.',
  473002: 'Revenue follows control transfer under the standard. Cash receipt is not the trigger; the performance obligation is.',
  473003: 'A defensible deduction is ordinary, necessary, documented, and tied to the business. Documentation is what survives examination.',
  473004: 'Split authorization, custody, and recordkeeping across people. If one person can do all three, you have a fraud channel.',
  473005: 'Under the current Core-plus-Discipline structure, three Core sections plus one Discipline of the candidate\'s choice. Pick the Discipline that fits the candidate.',
  473006: 'Equipment purchase is an investing outflow. Operating is core business activity; investing is long-lived assets.',
  473007: 'Tracing from the books to source documents tests occurrence — did this recorded sale actually happen?',
  473008: 'Material but not pervasive lands on a qualified opinion. Pervasive escalates to adverse or disclaimer.',
  473009: 'Basis is what you paid; gain is proceeds minus basis. Walk it slowly; the trick on the exam is usually a basis adjustment you missed.',
  473010: 'Offer, acceptance, consideration — plus capacity and lawful purpose. All five or the contract is not enforceable.',
  473011: 'On a TBS, read the requirement first. The exhibits are noise until you know what is being asked.',
  473012: 'Discipline choice follows strengths, work experience, and study time. Choose the section the candidate can pass — not the one that sounds most prestigious.',

  // ---------- Bar Exam (voice: litigation partner) ----------
  474001: 'IRAC is scaffolding. It forces you to connect the governing rule to the legally significant facts before you reach a conclusion.',
  474002: 'First ask: goods or services? UCC Article 2 governs goods; common law governs services. The rule depends on the answer.',
  474003: 'Negligence needs duty, breach, causation, and harm. Without proximate and actual cause, the claim collapses regardless of how bad the breach was.',
  474004: 'Personal jurisdiction starts with statutory reach, then minimum contacts and due process. Statute first, constitution second.',
  474005: 'After the call of the question, predict an answer before you read the choices. The choices are designed to seduce you off your read.',
  474006: 'Hearsay analysis starts with the definition: out-of-court statement offered for its truth. If it is not that, hearsay is not the issue.',
  474007: 'On the MPT, the File and Library are everything. Outside knowledge is a trap — answer using only the packet.',
  474008: 'During the NextGen transition, verify the tested subjects and format for the candidate\'s jurisdiction and date. Do not study the wrong exam.',
  474009: 'Fundamental rights trigger strict scrutiny. Name the tier, then apply it; do not skip straight to the merits.',
  474010: 'Mens rea is the required mental state. Match the statute\'s mental state to the facts before arguing the act.',
  474011: 'Recording-act priority depends on notice, recording, and statute type. Identify the statute before applying any rule.',
  474012: 'When the rule is fuzzy, state the closest accurate rule and apply it honestly. Bluffing reads worse than careful imperfect analysis.',

  // ---------- PMP Wrangler (voice: program manager) ----------
  475001: 'Late scope requests run through change control. Document the request, assess impact, then route the decision — never just say yes in the room.',
  475002: 'A critical-path slip needs schedule analysis, not panic. Crashing and fast-tracking each carry cost and risk — show both.',
  475003: 'When the risk fires, it becomes an issue. Execute the response, log it, communicate impacts — the process does not change because the room is loud.',
  475004: 'The product owner orders the backlog to maximize value. They do not assign tasks; the team self-manages.',
  475005: 'People conflict starts with facilitation, not escalation. Surface the facts and interests before you reach for authority.',
  475006: 'When a stakeholder disengages and then rejects, the gap is in the engagement plan. Fix the communication approach before anything else.',
  475007: 'Fixed regulatory dates and uncertain UX both exist on the same project. Hybrid is the honest answer when the parts behave differently.',
  475008: 'CPI and SPI below 1.0 means over budget and behind schedule. Read each index independently; they do not cancel.',
  475009: 'Well-defined scope plus risk transfer to the seller points to firm fixed-price. Match the contract to who should carry the cost risk.',
  475010: 'Inspecting completed deliverables is quality control. Assurance builds process confidence; control checks outputs.',
  475011: 'Scope delivered but benefits not landing is a value problem, not a delivery problem. Revisit benefits assumptions with stakeholders.',
  475012: 'Around an ECO transition, study to the outline in effect on the exam date. Old domain weights expire the moment the blueprint flips.',

  // ---------- SHRM People (voice: senior HR business partner) ----------
  476001: 'Discipline runs on documented, consistent process applied to relevant facts. Inconsistency is what gets organizations sued.',
  476002: 'Job analysis defines the tasks, responsibilities, and competencies of the role. Everything downstream — selection, pay, performance — rests on it.',
  476003: 'Adverse impact tests whether a practice screens out a protected group disproportionately. Run the numbers before defending the practice.',
  476004: 'Training works if behavior and results change, not if the room enjoyed the session. Smile sheets are level one for a reason.',
  476005: 'When a manager pushes for an immediate termination on thin documentation, slow it down. Facts, policy, prior practice, risk — then recommend.',
  476006: 'Structured, job-related interviews with consistent scoring outperform vibes-based hiring. Fairness and validity move together.',
  476007: 'When market pay drives attrition, the answer is a competitiveness analysis and a targeted, budget-aware response — not a perks program.',
  476008: 'Tech is live but managers do not trust the data. Fix trust through training, data cleanup, and manager communication — not by mandating the system harder.',
  476009: 'Accommodation runs through the interactive process. Understand the limitations and essential functions before you propose a fix.',
  476010: 'A complainant asking for total secrecy meets the limits of confidentiality. Explain those limits, assess safety and policy duties, then act.',
  476011: 'Early-tenure retention is the cleanest read on whether onboarding is working. Pick the metric that matches the question asked.',
  476012: 'On situational items, pick the choice that balances lawful, ethical, humane, and business-aligned action with the facts in front of you.',
}

// QUALS_CORRECT_SHORTENED — questions where the correct answer was substantially
// longer than the longest distractor. Each entry trims `correct` to a punchier
// line and pushes the explanatory detail into `lessonAddendum`.

export const QUALS_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  472003: {
    newCorrect: 'Higher net income and higher assets in the current period.',
    lessonAddendum: 'Capitalization delays the expense; the cost flows through earnings later as depreciation or amortization. Same total expense over time — different timing on the income statement.',
  },
  472008: {
    newCorrect: 'Higher expected growth, lower risk, or accounting differences justify the premium.',
    lessonAddendum: 'A premium P/E embeds an expectation. The careful question is which expectation — growth, risk, or accounting choice — is doing the work, and whether it is defensible.',
  },
  472012: {
    newCorrect: 'Identify variables, set up the formula, and check calculator mode before computing.',
    lessonAddendum: 'TVM mode, DEG vs RAD, and BGN vs END are the classic mode traps. A 10-second mode check at the start of the item costs nothing and saves the easy points.',
  },
  475002: {
    newCorrect: 'Analyze schedule compression options like crashing or fast-tracking.',
    lessonAddendum: 'Crashing adds cost to shorten duration; fast-tracking adds risk by overlapping work. Surface both cost and risk impacts to the sponsor before committing to a plan.',
  },
  475003: {
    newCorrect: 'Treat it as an issue, implement the planned response, and communicate impacts.',
    lessonAddendum: 'A risk that occurs becomes an issue. Update the issue log, execute the response or workaround, and communicate impacts to stakeholders — calm process in a burning room.',
  },
  475007: {
    newCorrect: 'A hybrid with predictive governance for fixed constraints and iteration for uncertain details.',
    lessonAddendum: 'Predictive governance protects the regulatory milestones; iterative discovery handles the unknown UX. Tailor the life cycle to the parts that behave differently.',
  },
  475011: {
    newCorrect: 'Review benefits assumptions with stakeholders and recommend adjustments.',
    lessonAddendum: 'Modern PMP thinking pushes the project manager past delivery into value realization. Revisit benefits assumptions, then either re-plan to realize them or formally reassess the value case.',
  },
  476005: {
    newCorrect: 'Gather facts, review policy and prior practice, and assess legal and ER risk before recommending.',
    lessonAddendum: 'A tense meeting plus thin documentation is the textbook setup for a wrongful-termination claim. The HR move is to slow it down enough to do the work that makes any decision defensible.',
  },
  476008: {
    newCorrect: 'Diagnose the trust and workflow barriers, then reinforce training, data fixes, and manager communication.',
    lessonAddendum: 'Adoption fails on trust, not on technology. Surface the specific data and workflow concerns, fix the underlying issues, and rebuild manager confidence through targeted communication.',
  },
  476010: {
    newCorrect: 'Explain confidentiality limits, assess safety and policy obligations, and begin fact-finding.',
    lessonAddendum: 'HR cannot promise total secrecy on a harassment complaint. Be honest about the limits upfront, then meet the organization\'s safety, legal, and policy duties through appropriate investigation.',
  },
  476012: {
    newCorrect: 'Balances lawful, ethical, humane, and business-aligned action with the facts given.',
    lessonAddendum: 'SHRM situational items reward the choice that holds all four pillars simultaneously. A response that is legal but inhumane — or humane but legally exposed — is rarely the best answer.',
  },
}
