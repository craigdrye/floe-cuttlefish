// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Government roadmap tracks (~79 questions across four roadmaps:
// bankComplianceAmlRoadmap, defenseBudgetingRoadmap, procurementContractingRoadmap,
// nationalSecurityPolicyRoadmap).
//
// CAREER_GOVERNMENT_SUB_TOPICS groups each chapter's questions into lesson-shaped
// clusters (cap 8 per chapter, since the lesson grouping caps at 8 lessons per
// chapter). Cluster names borrow from the syllabus chapter so the learner sees
// the FAR / fiscal-law / NSC / BSA topology of the work.
//
// CAREER_GOVERNMENT_MENTOR_HINTS overrides the generic scaffold hint with a
// one-line second-person nudge that names the reasoning move without giving the
// answer — voice: senior government/policy practitioner mentoring a junior
// analyst, contracting officer, action officer, or budget shop deskee.
//
// CAREER_GOVERNMENT_CORRECT_SHORTENED trims `correct` strings flagged by the
// length-heuristic audit (correct ≥1.8x longer than longest wrong AND ≥20 chars
// longer). Trimmed explanatory clauses are reattached via `lessonAddendum` so
// no specific statute, FAR clause, or doctrinal anchor is lost from the lesson.

export const CAREER_GOVERNMENT_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Bank Compliance / AML Roadmap --------------------
  // (Cross-cluster: this track lives in the Government file historically and
  // covers BSA/AML compliance work performed by bank analysts.)
  'Compliance Foundations and Mapping': [
    4103100,
  ],
  'KYC, CDD, and Customer Risk': [
    4103101, 4103132, 4103136, 4103140,
  ],
  'Sanctions and OFAC Screening': [
    4103102, 4103105, 4103134, 4103138,
  ],
  'Transaction Monitoring and Alerts': [
    4103103, 4103133, 4103137, 4103141,
  ],
  'Investigations, SARs, and QC': [
    4103104, 4103135, 4103139,
  ],

  // -------------------- Defense Budgeting Roadmap --------------------
  // Chapter 1: Defense Money Flow
  'Funds Flow: Authority to Outlay': [
    4103108, 4103142,
  ],
  'Reprogramming and Advance Procurement': [
    4103147, 4107440,
  ],
  'Anti-Deficiency Act Discipline': [
    4220100,
  ],
  // Chapter 2: PPBE and Program Decisions
  'POM Tradeoffs and FYDP': [
    4103109, 4103143,
  ],
  'Sponsor Trade Space and Sustainment': [
    4107431, 4107436,
  ],
  // Chapter 3: Appropriations and Fiscal Law
  'Purpose, Time, and Amount': [
    4103110, 4103144, 4220101,
  ],
  'CR Restrictions and Severable Services': [
    4103113, 4103149,
  ],
  'Augmentation and Gifts': [
    4107442,
  ],
  // Chapter 4: Spend Plans and Execution Reviews
  'Burn Rate and Variance Diagnosis': [
    4103111, 4103114,
  ],
  'Deobligation and Outlay Timing': [
    4103150, 4107438,
  ],
  // Chapter 5: Budget Communication and Oversight
  'Oversight and Congressional Marks': [
    4103146, 4107906,
  ],
  'Decision Briefs and UPLs': [
    4103151, 4107909,
  ],
  'Capstone: Defense Analyst Pack': [
    4220102,
  ],

  // -------------------- Procurement and Contracting Roadmap --------------------
  // Chapter 1: Requirements and Acquisition Planning
  'Requirements and Market Research': [
    4103116, 4103152, 4107452,
  ],
  // Chapter 2: Sourcing and Solicitation
  'Solicitation Discipline': [
    4103117, 4103153,
  ],
  'Set-Asides and Competitive Access': [
    4103158, 4107447,
  ],
  // Chapter 3: Pricing and Contract Types
  'Contract Type Selection': [
    4103118, 4103154,
  ],
  'Realism and Total Evaluated Price': [
    4103122, 4107458,
  ],
  // Chapter 4: Evaluation, Negotiation, and Award
  'Source Selection Process': [
    4103119, 4103160, 4107930,
  ],
  'Past Performance and Responsibility': [
    4103155, 4107459,
  ],
  // Chapter 5: Contract Administration and Closeout
  'Modifications and Invoice Review': [
    4103120, 4103156,
  ],
  'Cure, Termination, and CPARS': [
    4103161, 4107461,
  ],

  // -------------------- National Security Policy Roadmap --------------------
  // Chapter 1: Strategy, Interests, and Threats
  'Interests and Threat Framing': [
    4103124, 4103129, 4103167,
  ],
  // Chapter 2: Intelligence and Evidence
  'Confidence, Sourcing, and Warning': [
    4103125, 4103163, 4103168,
  ],
  // Chapter 3: Instruments of National Power
  'DIME Options and Second-Order Effects': [
    4103126, 4103131,
  ],
  'Sanctions and Security Assistance Authorities': [
    4107935, 4107938,
  ],
  // Chapter 4: Interagency Process and Decision Making
  'NSC Process and Decision Memos': [
    4103127, 4103170, 4103165,
  ],
  'Title 10 / Title 50 Lanes': [
    4107944,
  ],
  // Chapter 5: Crisis and Policy Communication
  'Crisis Updates and Public Lines': [
    4103128, 4103166, 4107939,
  ],
  'After-Action and Records': [
    4103171,
  ],
  'Capstone: Integrated Policy Package': [
    4220103,
  ],
}

export const CAREER_GOVERNMENT_MENTOR_HINTS: Record<number, string> = {
  // ---------- Bank Compliance / AML Roadmap ----------
  4103100: 'Auditors test the run, not the policy title. Map obligation, owner, step, evidence, and escalation.',
  4103101: 'Messy facts deserve a risk memo, not a sales note. Separate facts, gaps, risk drivers, next steps.',
  4103102: 'Documentation is the control. Match the identifiers; record why the alert clears.',
  4103103: 'Unusual is not suspicious by itself. Compare to the customer profile and the peer group first.',
  4103104: 'Lead with the timeline, not the verdict. Facts, red flags, mitigants, gaps, disposition — in that order.',
  4103105: 'Possible OFAC exposure earns a pause, not a release. Escalate; read trade context together with payment data.',
  4103132: 'Control under 31 CFR 1010.230 is real-life control, not signature authority. Document the actual decision maker.',
  4103133: 'Sub-threshold cash from a non-cash business is the canonical structuring pattern. Name the 31 USC 5324 indicator.',
  4103134: 'List updates require continuous review, not one-time clearance. Score match strength before any bulk action.',
  4103135: 'SAR standard is reasonable suspicion, not courtroom proof. Document gaps and reasoning, not certainty.',
  4103136: 'Material change triggers a refresh — do not wait for the account birthday. The CDD Rule is ongoing.',
  4103137: 'Write so the next reviewer can rebuild your reasoning without you in the room. Screenshots do not narrate.',
  4103138: 'Sanctions risk travels through geography, vessels, goods, and counterparties. Read the whole payment.',
  4103139: 'QC tests whether you considered the benign explanation. Show why you rejected it, with evidence.',
  4103140: 'PEP plus complex structure plus urgency means slow down. EDD is the gate, not the post-approval cleanup.',
  4103141: 'Exit recommendations are balanced memos. Risk history, constraints, impact, and a specific action leaders can approve.',

  // ---------- Defense Budgeting Roadmap ----------
  // Chapter 1: Defense Money Flow
  4103108: 'Money moves: authorization → appropriation → apportionment → allotment → obligation → outlay. Obligation is the legal liability — 31 USC 1501.',
  4103142: 'A PR is a commitment, not an obligation. Obligation needs a legal liability under 31 USC 1501.',
  4103147: 'Reprogramming is governed by dollar thresholds and authority, not by which office is more excited.',
  4107440: 'Advance procurement requires specific statutory authority — usually 10 USC 2306b or NDAA — and the right APN/SCN color of money.',
  4220100: 'Obligating before apportionment is the textbook ADA violation. 31 USC 1341 and 1517 own this fact pattern.',

  // Chapter 2: PPBE and Program Decisions
  4103109: 'Trade decisions sort by phase. POM trades are Programming, not Execution; do not pull them down to invoices.',
  4107431: 'New initiatives in PPBE need offsets, risk language, and year-by-year impact. "Important" alone stalls.',
  4103143: 'Outyear wedges across the FYDP are the bow-wave failure mode. Show alternatives, cost profile, and tradeoffs.',
  4107436: 'Pilot success can hide the sustainment bill. Life-cycle cost and named sustainment owner come before scaling.',

  // Chapter 3: Appropriations and Fiscal Law
  4103110: 'Availability is necessary but not sufficient. 31 USC 1301(a) ties the funds to the appropriated purpose.',
  4103113: 'CRs typically prohibit new starts. Check the bulletin and CR guidance before any obligation.',
  4103144: '"Use it or lose it" is a phrase, not a doctrine. The bona fide need must arise in the funded period under 31 USC 1502.',
  4103149: 'Severable services on annual money cap at 12 months under 10 USC 3133 / FAR 32.703-3. Eighteen is too far.',
  4107442: 'Outside money without specific acceptance authority defaults to miscellaneous receipts under 31 USC 3302(b).',
  4220101: 'A production buy is a procurement purpose, not RDT&E. Color of money is set by 31 USC 1301(a).',

  // Chapter 4: Spend Plans and Execution Reviews
  4103111: 'Variance without a driver is not decision-ready. Name the cause, the risk, and the recovery action.',
  4103114: 'Diagnose the variance type. Timing problems need invoice processing; scope problems need requirements work.',
  4103150: 'Excess obligations are not a comfort blanket. Deobligation timing is constrained by 31 USC 1552.',
  4107438: 'Outlay charts read like performance unless you explain the billing-to-performance lag. Tell the story.',

  // Chapter 5: Budget Communication and Oversight
  4103146: 'Oversight tests whether you understand your own execution. Acknowledge prior performance, then justify the ask.',
  4107906: 'Marks carry policy signals. Address the stated concern in the revised plan, not just the dollar number.',
  4103151: 'Ninety seconds buys money, variance, decision, impact, action, evidence. Pick the six lines that survive.',
  4107909: 'Universal urgency is no urgency. Rank, name mission impact, cost, timing, and the cost of not funding.',
  4220102: 'The pack is graded on coherence — funds flow → PPBE → fiscal law → execution → oversight, cross-referenced.',

  // ---------- Procurement and Contracting Roadmap ----------
  // Chapter 1: Requirements and Acquisition Planning
  4103116: 'Need before solution. FAR Part 10 market research and FAR Part 11 requirement description run in order.',
  4103152: 'Sole-source needs a written J&A under FAR 6.303 citing a specific 41 USC 3304 exception. "Trust us" fails protest.',
  4107452: 'Cyber requirements move price, schedule, and architecture. FAR 39.101, FedRAMP, and FAR 52.204-21 belong in planning.',

  // Chapter 2: Sourcing and Solicitation
  4103117: 'Award per the solicitation. Unstated criteria are the textbook GAO sustain ground under FAR 15.305(a).',
  4103153: 'Material changes go through a FAR 15.206 amendment to all offerors. Selective disclosure is a CICA failure.',
  4103158: 'Rule of Two at FAR 19.502-2 drives set-aside analysis. Then pick the right socioeconomic program.',
  4107447: 'Information asymmetry is an OCI problem. FAR 9.505 and FAR 15.206 are the levers for fair access.',

  // Chapter 3: Pricing and Contract Types
  4103118: 'Match contract type to risk. Clear scope under FAR 16.202 firm-fixed-price; uncertain scope toward FAR 16.301.',
  4103122: 'Cost realism under FAR 15.404-1(d) tests whether the proposed cost fits the technical approach. Low hours is the red flag.',
  4103154: 'T&M under FAR 16.601 requires D&F, ceiling, surveillance, and a finding that no other type fits.',
  4107458: 'Evaluate total contract value under FAR 15.404-1(b) and FAR 17.207(f). Front-loaded base years distort selection.',

  // Chapter 4: Evaluation, Negotiation, and Award
  4103119: 'Best-value tradeoffs need documented rationale tied to the stated criteria. The SSDD is where it lives.',
  4103160: 'FAR 15.306(e) requires equal discussions in the competitive range. Unequal hints are a sustain ground.',
  4103155: 'Past performance weighs relevance, recency, severity, and currency. CPARS under FAR 42.15 is the source.',
  4107459: 'Responsibility is a separate determination from evaluation. FAR 9.103-9.104, with FAPIIS and SAM.gov, before award.',
  4107930: 'FAR 15.506 debriefings are required when requested. Prep the record; protect FAR 3.104 source-selection information.',

  // Chapter 5: Contract Administration and Closeout
  4103120: 'Changes go through FAR 43.103 modifications with funded authority. Informal "free" additions create ADA risk.',
  4103156: 'Match the invoice to the contract and the evidence. Known mis-billing paid is a False Claims Act (31 USC 3729) exposure.',
  4103161: 'Termination requires formal notice under FAR 49.402-3 with documented performance facts. No spicy emails.',
  4107461: 'CPARS under FAR 42.1503 must be factual and balanced. Ratings need supporting examples for any rebuttal.',

  // ---------- National Security Policy Roadmap ----------
  // Chapter 1: Strategy, Interests, and Threats
  4103124: 'Connect facts to interest. NSC packets ask for the decision question on page one, not the history section.',
  4103129: 'Threat = capability × intent × opportunity. Separate the three so the policy risk does not collapse to one axis.',
  4103167: 'Surface the fragile assumption. JP 5-0 expects indicators that would falsify it and mitigations if it breaks.',

  // Chapter 2: Intelligence and Evidence
  4103125: 'ICD 203 requires confidence labels and named collection gaps. Falsely certain judgments are the WMD failure mode.',
  4103163: 'Vivid is not verified. Geolocation and chronolocation status belong in the body, not a tiny footnote.',
  4103168: 'Warning runs on defined indicators against baselines, with pre-set thresholds for escalation. Gut feel is not operational.',

  // Chapter 3: Instruments of National Power
  4103126: 'Compare DIME (or DIMEFIL) tools against the objective. Single-instrument analysis fails the NSC options test.',
  4107935: 'IEEPA designations (50 USC 1701-1708) need documented conduct meeting specific E.O. criteria. OFAC will not rubber-stamp.',
  4103131: 'Sanctions create spillover. Surface allied impact, mitigations, and target response before the headline lands.',
  4107938: 'Leahy vetting is statutory — 22 USC 2378d for State, 10 USC 362 for DoD. No paperwork shortcut, no self-certification.',

  // Chapter 4: Interagency Process and Decision Making
  4103127: 'NSC Summary of Conclusions assigns owner and deadline. Ambiguous tasking is the failure mode.',
  4103170: 'Deputies need options, recommendation, tradeoffs, agency positions, and authorities on page one. Not appendix theater.',
  4103165: 'Preserve meaningful dissent. The post-Iraq-WMD reviews specifically targeted suppression.',
  4107944: 'Title 10 is military operations; Title 50 covert action needs a Finding and Gang-of-Eight notification under 50 USC 3093.',

  // Chapter 5: Crisis and Policy Communication
  4103128: 'Lead with what changed and why it matters, then decision and proposed public line. Stale background loses readers.',
  4103166: 'Disprovable public lines cost more than they earn. Reconcile the message with the classified reality.',
  4107939: 'Bounded uncertainty beats wrong numbers. Confirmed facts, unverified items, approved language, next update.',
  4103171: 'AARs convert friction into structural improvement. Records preservation under 44 USC 31 still applies.',
  4220103: 'The capstone is graded on coherence — threat → intel → DIME → memo → public line, with shared assumptions.',
}

export const CAREER_GOVERNMENT_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // ---------- Bank Compliance / AML Roadmap ----------
  4103132: {
    newCorrect:
      'Identify who actually controls the account, document the adverse-media concern, and recommend EDD if warranted',
    lessonAddendum:
      'The control prong of the FinCEN CDD Rule (31 CFR 1010.230) reaches actual control, not just signature authority.',
  },
  4103133: {
    newCorrect:
      'The deposit pattern, customer profile mismatch, and possible 31 USC 5324 structuring indicators with explaining evidence',
    lessonAddendum:
      'Structuring narratives should also note any evidence that explains or fails to explain the activity.',
  },
  4103134: {
    newCorrect:
      'A risk-based review that documents match strength, identifiers, escalation, and any required account restrictions',
    lessonAddendum:
      'OFAC compliance is continuous against updated lists, not a one-time onboarding check.',
  },
  4103138: {
    newCorrect:
      'Review the full payment and trade context — geography, goods, vessels, counterparties — against OFAC escalation rules',
    lessonAddendum:
      'Comprehensive regional sanctions (e.g., Crimea, Iran, North Korea, Syria, Cuba) apply regardless of name match.',
  },
  4103140: {
    newCorrect:
      'Enhanced due diligence covering source of wealth, source of funds, ownership/control, and senior approvals',
    lessonAddendum:
      'PEP onboarding under FFIEC guidance also sets ongoing-monitoring expectations before the relationship begins.',
  },
  4103141: {
    newCorrect:
      'Risk history, unresolved concerns, business impact, legal constraints, and a clear retain/restrict/exit recommendation',
    lessonAddendum:
      'Exit memos under 31 CFR 1020.220 must tie specific facts and risk to the recommended action.',
  },

  // ---------- Defense Budgeting Roadmap ----------
  4107440: {
    newCorrect:
      'Whether advance procurement is authorized (10 USC 2306b or NDAA), tied to schedule, and uses the correct APN/SCN appropriation',
    lessonAddendum:
      'GAO regularly cites unjustified advance procurement, so authority, schedule, and color of money must align.',
  },
  4220100: {
    newCorrect:
      'The Anti-Deficiency Act (31 USC 1341 and 1517) — no obligation in excess of, or in advance of, available authority',
    lessonAddendum:
      'ADA violations carry mandatory reporting under 31 USC 1351; obligating before apportionment is the textbook trigger.',
  },
  4107442: {
    newCorrect:
      'Acceptance authority (10 USC 2601 / 2350), reimbursement rules, accounting treatment, and 31 USC 1301 augmentation concerns',
    lessonAddendum:
      'Without specific authority, 31 USC 3302(b) requires deposit to miscellaneous receipts rather than augmenting the program account.',
  },
  4107436: {
    newCorrect:
      'The full life-cycle cost, sustainment owner, scaling assumptions, affordability risk, and decision options',
    lessonAddendum:
      'The DoD Cost Estimating Guide requires life-cycle costing precisely because pilot-only costing produces unaffordable programs.',
  },
  4220102: {
    newCorrect:
      'A linked package — funds-flow map, PPBE wedge note, fiscal-law checklist, execution variance brief, oversight one-pager',
    lessonAddendum:
      'Cross-reference the artifacts so assumptions and numbers match; the capstone is graded on integration, not page count.',
  },

  // ---------- Procurement and Contracting Roadmap ----------
  4103152: {
    newCorrect:
      'Documented market research and a FAR 6.303 Justification and Approval for other than full and open competition',
    lessonAddendum:
      'CICA (41 USC 3301-3304) requires citing a specific exception; FAR 6.304 sets approval levels by dollar threshold.',
  },
  4107452: {
    newCorrect:
      'Bring FAR 39.101 cybersecurity, FedRAMP authorization, and FAR 52.204-21 basic safeguarding into acquisition planning',
    lessonAddendum:
      'Deferred security requirements typically produce unaffordable change orders and post-award scope disputes.',
  },
  4107447: {
    newCorrect:
      'A FAR 9.505 OCI analysis, or a FAR 15.206 amendment with extended time, to reduce unfair competitive advantage',
    lessonAddendum:
      'Information asymmetry across offerors is exactly what OCI rules and material-information amendments exist to address.',
  },
  4103154: {
    newCorrect:
      'A FAR 16.601(c) D&F, a ceiling price, justification, surveillance, and a finding that no other contract type fits',
    lessonAddendum:
      'Time-and-materials contracts without these elements leave the buyer carrying excessive performance and cost risk.',
  },
  4107458: {
    newCorrect:
      'Total evaluated price across all options under FAR 15.404-1(b), escalation assumptions, and fair-and-reasonable analysis',
    lessonAddendum:
      'FAR 17.207(f) requires evaluating option pricing at award; deferring it produces a bait-and-switch competition.',
  },
  4107459: {
    newCorrect:
      'A FAR 9.103 affirmative responsibility determination using FAR 9.104 standards including integrity, capacity, and SAM.gov status',
    lessonAddendum:
      'Documentary sources are CPARS, SAM.gov, and FAPIIS; responsibility is a separate gate from the evaluation score.',
  },
  4107930: {
    newCorrect:
      'A FAR 15.506 post-award debriefing aligned to the evaluation record, with protected-information rules and approved talking points',
    lessonAddendum:
      'The debriefing also affects the FAR 33.103 protest clock, so improvisation creates both record and timing risk.',
  },
  4103120: {
    newCorrect:
      'Whether the change is in scope, requires a FAR 43.103 contract modification, and has the funding and authority to be ordered',
    lessonAddendum:
      'Out-of-scope changes generally require a new procurement under CICA; informal additions are constructive-change risk.',
  },
  4103156: {
    newCorrect:
      'Compare the invoice to contract terms and performance evidence under FAR 32.905, then question unsupported charges',
    lessonAddendum:
      'Knowingly paying mis-billed labor categories is a False Claims Act (31 USC 3729) exposure for the government.',
  },
  4103161: {
    newCorrect:
      'Review FAR 49 procedures, document performance issues, and use the FAR 49.402-3 cure or show-cause path',
    lessonAddendum:
      'Informal termination threats create wrongful-termination exposure and contractor claim risk under FAR 43.205.',
  },
  4107461: {
    newCorrect:
      'Document balanced performance facts under FAR 42.15 CPARS with requirements, impacts, contractor response, and rating support',
    lessonAddendum:
      'FAR 42.1503 requires narratives that support the rating with examples so the contractor rebuttal process can work.',
  },

  // ---------- National Security Policy Roadmap ----------
  4103163: {
    newCorrect:
      'Source caveats, verification status (geolocation, chronolocation), ICD 203 confidence, and what evidence would confirm',
    lessonAddendum:
      'Confidence and source caveats belong in the body of the product under ICD 203, not in a small footnote.',
  },
  4103168: {
    newCorrect:
      'Specific I&W indicators with baseline activity, change over time, ICD 203 confidence, and pre-defined escalation thresholds',
    lessonAddendum:
      'Defined indicators and thresholds let leaders see when risk is actually changing rather than absorbing raw reporting.',
  },
  4107935: {
    newCorrect:
      'An evidentiary package linking conduct, ownership/control, and a specific IEEPA / OFAC authority (50 USC 1701-1708)',
    lessonAddendum:
      'OFAC designations are administrative actions reviewable on the record, so evidence is required, not optional.',
  },
  4107938: {
    newCorrect:
      'Leahy Law vetting (22 USC 2378d for State, 10 USC 362 for DoD) and any required remediation or exception process',
    lessonAddendum:
      'INVEST aggregates open-source reporting so credible abuse allegations cannot simply be ignored.',
  },
  4103127: {
    newCorrect:
      'Identify the decision, stakeholders, owner, timeline, and unresolved issues — the NSC Summary of Conclusions structure',
    lessonAddendum:
      'Tasker structure is what turns policy agreement into action; ambiguity is the dominant failure mode.',
  },
  4103170: {
    newCorrect:
      'A decision memo with options, recommendation, tradeoffs, agency positions, authorities (Title 10 / 50 / 22 USC), and implementation',
    lessonAddendum:
      'Deputies-level read-time is minutes; the recommendation belongs on page one, not in an appendix footnote.',
  },
  4103165: {
    newCorrect:
      'Record the disagreement, evidence behind each view, decision implications, and what would reduce uncertainty',
    lessonAddendum:
      'Documented dissent is the practice ICD 203 analytic standards and post-WMD reviews specifically reinforce.',
  },
  4107944: {
    newCorrect:
      'Whether the activity is Title 10 (military operations) or Title 50 (covert action requiring a Finding and Gang-of-Eight notification)',
    lessonAddendum:
      'Title 50 covert action triggers 50 USC 3093 reporting requirements; misclassification creates statutory violations.',
  },
  4103166: {
    newCorrect:
      'Reconcile the message with current facts, update decision makers, and propose a public line that preserves credibility',
    lessonAddendum:
      'Disprovable public lines burn credibility with allies, press, and the public well beyond the current cycle.',
  },
  4103171: {
    newCorrect:
      'A repeatable crisis-record process covering decisions, owners, messages, partner coordination, and follow-up actions',
    lessonAddendum:
      'Federal Records Act obligations (44 USC 31) still apply, so the process feeds NSC PR / NSPM update cycles.',
  },
  4220103: {
    newCorrect:
      'A linked package — threat brief, ICD 203 intel note, DIME options matrix, interagency memo, public-line proposal',
    lessonAddendum:
      'Shared assumptions and a single decision question across the chain are what principals committees grade the capstone on.',
  },
}
