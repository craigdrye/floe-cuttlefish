import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'
import { CAREER_GOVERNMENT_SUB_TOPICS, CAREER_GOVERNMENT_MENTOR_HINTS, CAREER_GOVERNMENT_CORRECT_SHORTENED } from './careerGovernmentPolish'
import { polish as runPolish } from './polishPipeline'

const SOURCE = 'Floe career government roadmap canonical bank'

// Helper: every wrong answer carries a bespoke pedagogical "why this is wrong"
// line. No file-wide DEFAULT_FLAW constant — each distractor explanation reflects
// the specific misconception a learner might hold (see jargonBusters.ts for the
// voice; careerAgentGeneratedRoadmapFinance.ts is the pilot reference).
//
// Government-specific rule: where the question concerns a regulated authority,
// distractor and lesson text name the FAR clause, fiscal code (31 USC), IEEPA,
// CICA, Title 10/50, or similar specific authority — addressing the May 2026
// audit finding that questions described authorities vaguely.
function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][], // [label, whyWrong]
  lesson: string,
): Question {
  return makeSimpleQuestion(
    id,
    topic,
    chapter,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
  )
}

const careerAgentGeneratedRoadmapGovernmentBaseQuestionsByTrack: Record<string, Question[]> = {
  // ---------------------------------------------------------------------------
  // BANK COMPLIANCE / AML ROADMAP
  // NOTE: This track is cross-cluster leakage from Finance — it ended up in
  // the Government roadmap file historically. Kept here for Wave 4 Tech+Gov
  // pass; awaiting Wave 4 Finance Bank-AML pass to relocate or canonicalize.
  // Chapter names from bank_compliance_aml_roadmap.md already match the
  // syllabus literally; distractor rewrites only.
  // ---------------------------------------------------------------------------
  bankComplianceAmlRoadmap: [
    q(4103100, 'Career Skills', 'Bank Compliance Foundations', 'Control evidence map',
      'A new wire-transfer control is written into policy, but the audit team asks how the bank proves it actually runs. What should the compliance analyst map first?',
      'The obligation, control owner, operating step, evidence, and escalation path',
      [
        ['Only the policy title because written policies prove execution', 'Examiners (OCC, FRB, FinCEN-aligned reviewers) explicitly distinguish written policy from operating effectiveness; a title is not evidence.'],
        ['The employee lunch schedule for the wire team', 'Lunch schedules are not a 31 CFR 1020 BSA control attribute and have no audit value.'],
        ['A list of customers who liked the branch service', 'Customer satisfaction is unrelated to wire-control execution; examiners ask for run evidence, not goodwill.'],
      ],
      'A compliance map connects the rule to the control, owner, evidence, and escalation route. Auditors need proof of operation, not just a policy reference.'),
    q(4103101, 'Career Skills', 'KYC and Customer Risk', 'Thin onboarding file',
      'A commercial customer has opaque ownership, expected cash deposits far above stated revenue, and no clear source of funds. What is the strongest next work product?',
      'A customer risk memo identifying gaps, risk drivers, and the recommended due diligence step',
      [
        ['A marketing profile focused on cross-selling products', 'Cross-sell tracking is sales work; FinCEN CDD Rule (31 CFR 1010.230) requires beneficial-ownership and risk identification before relationship steps.'],
        ['An approval note saying all small businesses are low risk', 'Generic low-risk classification without CDD Rule analysis is precisely what consent orders against community banks have cited.'],
        ['A sanctions disposition with no ownership review', 'A sanctions screen does not satisfy CDD ownership requirements; both are required and address different risks.'],
      ],
      'KYC work should turn messy facts into a defensible risk memo. The memo should separate known facts, missing evidence, risk drivers, and next steps.'),
    q(4103102, 'Career Skills', 'Sanctions and Screening', 'Near-name match disposition',
      'A sanctions alert fires on a customer with a similar name to an OFAC SDN, but the date of birth, address, and passport number differ. What is the best disposition approach?',
      'Document the match logic and identifier evidence supporting a false-positive conclusion',
      [
        ['Close the alert with no notes because similar names happen often', 'OFAC enforcement actions repeatedly cite undocumented closures; the documentation is the control.'],
        ['Freeze the account forever because any name similarity is conclusive', 'OFAC compliance is risk-based; freezing on weak name match without identifier review creates a wrongful-deprivation problem of its own.'],
        ['Ask the customer whether they are on a sanctions list', 'Self-attestation has no evidentiary value for OFAC compliance and tips off any sanctioned party.'],
      ],
      'Screening decisions need a clear audit trail. A false positive can be closed when identifiers reasonably distinguish the customer from the listed party.'),
    q(4103103, 'Career Skills', 'Transaction Monitoring and Alerts', 'Peer group wobble',
      'A grocery customer deposits twice as much cash as similar stores in the same area and sends frequent wires to unrelated overseas firms. What should the alert review focus on?',
      'Whether the activity is unusual for the customer and peer group, and what evidence explains or contradicts it',
      [
        ['Whether the customer has a memorable logo', 'Brand assets are not a BSA monitoring attribute; peer comparison and behavior pattern are.'],
        ['Whether overseas wires are always illegal', 'Cross-border wires are not per se suspicious; the FFIEC manual requires context-sensitive review.'],
        ['Whether the analyst can ignore peer data if the account is old', 'Tenure does not exempt monitoring; expected-vs-actual review is independent of how long the relationship has existed.'],
      ],
      'Transaction monitoring compares actual activity with expected behavior, customer profile, and peer context. Unusual does not mean suspicious by itself, but it requires evidence-based review.'),
    q(4103104, 'Career Skills', 'Investigations, SARs, and Quality Control', 'Chronology before conclusion',
      'An investigator has account opening facts, three alerts, customer explanations, and an unresolved beneficial-owner issue. What makes the investigation summary strongest?',
      'A timeline that separates facts, red flags, mitigating evidence, unresolved gaps, and disposition',
      [
        ['A dramatic conclusion before any evidence appears', 'A SAR narrative that leads with conclusion fails FinCEN narrative-quality guidance; reviewers should be able to follow the reasoning.'],
        ['A list of transactions with no explanation of why they matter', 'Raw transaction lists without analysis do not meet the FinCEN SAR narrative standard; they leave law enforcement to do the analysis.'],
        ['A note that deletes benign facts to make the case shorter', 'Selective omission of exculpatory evidence is precisely what QC reviewers catch; it weakens any later case.'],
      ],
      'Investigation summaries should let another reviewer reconstruct the decision. Chronology and balanced evidence make escalation and quality review more defensible.'),
    q(4103105, 'Career Skills', 'Sanctions and Screening', 'Pause question',
      'A wire payment has a possible blocked-party match on the beneficiary and unclear shipping documents. What is the safest immediate analyst instinct?',
      'Follow escalation procedures and determine whether activity should be paused pending review under 31 CFR 501',
      [
        ['Release the payment because shipping documents are not part of screening', 'OFAC guidance covers payment and trade context jointly; ignoring shipping documents has produced enforcement actions against multiple banks.'],
        ['Ask operations to rename the beneficiary field', 'Field manipulation to evade screening is itself a violation and a documented enforcement pattern.'],
        ['Approve it if the customer is in a hurry', 'Urgency is not a sanctions defense; OFAC does not have a hurry exception.'],
      ],
      'Possible sanctions exposure can require pausing activity while the facts are reviewed. Screening is strongest when payment data, counterparties, and documents are considered together.'),
    q(4103132, 'Career Skills', 'KYC and Customer Risk', 'Beneficial ownership rabbit hole',
      'A nonprofit customer lists three directors, but payments are controlled by an outside consultant whose name appears in adverse media. What should the KYC analyst do next?',
      'Identify who actually controls the account under the FinCEN CDD Rule, document the adverse-media concern, and recommend enhanced due diligence if warranted',
      [
        ['Approve the file because nonprofits never have beneficial owners', 'The CDD Rule control prong applies to legal-entity customers including most nonprofits; "nonprofits are exempt" is a misreading.'],
        ['Treat the consultant as irrelevant because they are not the formal signer', 'Control under 31 CFR 1010.230 includes actual control, not just signature authority; bypass control is exactly what the rule targets.'],
        ['Close the account immediately without reviewing the facts', 'De-risking without analysis creates its own examiner finding for indiscriminate exits.'],
      ],
      'KYC is about understanding ownership and control in real life, not just on the form. Control parties, adverse media, and missing explanations should be documented before a risk decision.'),
    q(4103133, 'Career Skills', 'Transaction Monitoring and Alerts', 'Structuring smell',
      'A customer makes repeated cash deposits just below the $10,000 CTR threshold at several nearby branches over two weeks. The business profile says it rarely handles cash. What should the alert narrative emphasize?',
      'The deposit pattern, customer profile mismatch, possible 31 USC 5324 structuring indicators, and any evidence that explains or fails to explain the activity',
      [
        ['That deposits below a threshold can never be suspicious', '31 USC 5324 specifically criminalizes structuring to evade reporting; sub-threshold activity is the canonical pattern.'],
        ['That branch distance is more important than transaction purpose', 'Branch geography supports structuring analysis but does not substitute for purpose and profile review.'],
        ['That the customer should receive a tutorial on round numbers', 'Educating a customer on structuring constitutes a 31 USC 5324 tipping concern itself.'],
      ],
      'AML review looks for patterns, not magic numbers. Repeated threshold-adjacent cash activity that conflicts with the customer profile deserves a careful structuring analysis.'),
    q(4103134, 'Career Skills', 'Sanctions and Screening', 'List update scramble',
      'An OFAC SDN list update creates alerts on several existing customers, and operations wants to clear them in bulk before end of day. What should the analyst protect first?',
      'A risk-based review process that documents match strength, identifiers, escalation decisions, and any required account restrictions',
      [
        ['Bulk-close all old customers because they passed screening once', 'OFAC requires continuous obligation against updated lists; one-time screening does not satisfy ongoing duty.'],
        ['Ask operations to delete the alert queue', 'Suppressing alerts during a list update is the exact pattern OFAC has fined institutions for.'],
        ['Prioritize the customers with the friendliest account managers', 'Relationship strength is not a sanctions disposition criterion; OFAC does not have a friendliness adjustment.'],
      ],
      'Sanctions compliance is continuous. List updates require documented review and escalation based on match quality and risk, even when the customer has been around for years.'),
    q(4103135, 'Career Skills', 'Investigations, SARs, and Quality Control', 'SAR reasonable suspicion bar',
      'An investigation has several red flags, a weak customer explanation, and no single transaction that proves illegal activity. What should the investigator remember?',
      'A SAR decision under 31 CFR 1020.320 can be based on reasonable suspicion supported by documented facts, not courtroom-level proof',
      [
        ['A SAR requires a confession from the customer', 'The 31 CFR 1020.320 filing standard is suspicion, not confession; requiring confession would defeat the regime.'],
        ['A SAR is forbidden unless every transaction is illegal', 'Per-transaction proof is not the standard; aggregated pattern with explanation gaps is exactly what SARs are for.'],
        ['A SAR narrative should avoid mentioning uncertainty', 'FinCEN guidance asks for the analyst\'s reasoning, including uncertainty; concealing it weakens the file and the law-enforcement use.'],
      ],
      'AML investigators are not prosecutors. The file should explain the facts, red flags, gaps, and rationale for whether reasonable suspicion exists.'),
    q(4103136, 'Career Skills', 'KYC and Customer Risk', 'Risk rating drift',
      'A customer rated low risk at onboarding now has new foreign counterparties, cash activity, and adverse media about an owner. What is the strongest review action?',
      'Trigger a customer risk refresh using current activity, ownership, geography, adverse media, and expected behavior',
      [
        ['Keep the old rating until the next "birthday" of the account', 'Periodic-only refresh fails the FFIEC manual\'s event-driven review expectation; material change should trigger immediate reassessment.'],
        ['Change the rating only if the customer asks for a loan', 'Product application is not a risk trigger; the AML risk profile is independent of credit demand.'],
        ['Treat adverse media after onboarding as outside the continuing-risk review', 'The CDD Rule\'s ongoing monitoring obligation explicitly includes information learned after onboarding.'],
      ],
      'Customer risk ratings should respond to meaningful changes. Ongoing monitoring is useful because customers, owners, geographies, and transaction patterns can drift.'),
    q(4103137, 'Career Skills', 'Transaction Monitoring and Alerts', 'Narrative that travels',
      'A senior investigator will review an alert file without joining the case call. What makes the analyst note easiest to rely on?',
      'A concise narrative linking the trigger, relevant transactions, customer profile, evidence reviewed, gaps, and recommended disposition',
      [
        ['A file that preserves the output but not the reasoning or approval basis', 'Screenshots do not capture the analyst\'s reasoning; FinCEN narrative guidance is explicit that the reviewer must follow the logic.'],
        ['A funny title and no transaction dates', 'Without dates and amounts the file cannot support a SAR or a close decision; the title carries no evidentiary weight.'],
        ['A note that says "see call recording for everything"', 'Investigations must be reconstructible from the written record; offloading to oral history fails QC and examiner review.'],
      ],
      'Alert notes should travel without the analyst standing next to them. A useful narrative gives the next reviewer enough context to understand and test the decision.'),
    q(4103138, 'Career Skills', 'Sanctions and Screening', 'Geography and trade context',
      'A trade payment references a transshipment port in a comprehensively sanctioned region, but the beneficiary is not listed on the SDN. What should the analyst do?',
      'Review the full payment and trade context for sanctions exposure, including geography, goods, vessels, counterparties, and OFAC escalation rules',
      [
        ['Clear it because sanctions only apply to exact-name matches', 'OFAC enforces comprehensive sanctions on regions (e.g., Crimea, Iran, North Korea, Syria, Cuba) regardless of name match; this is a documented enforcement pattern.'],
        ['Remove the port name so the payment can process cleanly', 'Field stripping to bypass sanctions screening is itself a violation cited in multiple enforcement actions.'],
        ['Approve it because the customer has shipped there before', 'Prior unflagged activity is not a defense; it may indicate the prior screening also failed.'],
      ],
      'Sanctions risk can come from geography, goods, vessels, ownership, and counterparties, not only listed names. The review should follow the facts across the payment record.'),
    q(4103139, 'Career Skills', 'Investigations, SARs, and Quality Control', 'QC note on benign explanations',
      'Quality control returns a case because the investigator cited red flags but did not explain why benign explanations were rejected. What should be fixed?',
      'Add the evidence considered for benign explanations and why it was sufficient, insufficient, or contradicted',
      [
        ['Delete all benign explanations so QC has less to read', 'Removing exculpatory analysis weakens the file; QC is testing whether the conclusion is defensible, not whether the file is short.'],
        ['Escalate every QC comment to legal as a complaint', 'QC iteration is part of the BSA program; treating feedback as escalation undermines second-line independence.'],
        ['Change the conclusion but leave the reasoning blank', 'Conclusion without reasoning is the failure mode SAR quality reviews exist to prevent; both must move together.'],
      ],
      'Quality control strengthens the record by testing reasoning. A defensible investigation explains not only what looked suspicious, but why alternative explanations did or did not hold up.'),
    q(4103140, 'Career Skills', 'KYC and Customer Risk', 'EDD for PEP onboarding',
      'A private banking prospect is a senior foreign official with complex offshore entities and a request for fast onboarding. What should the compliance team expect?',
      'Enhanced due diligence under the FFIEC manual covering source of wealth, source of funds, ownership/control, senior approvals, and ongoing monitoring expectations',
      [
        ['Standard onboarding because wealthy customers are automatically low risk', 'PEP risk is elevated by definition under FFIEC guidance; wealth correlates with the risk, it does not offset it.'],
        ['No documentation because speed is the main control', 'Speed without documentation is the FinCEN private-banking enforcement pattern that defines what not to do.'],
        ['A marketing welcome packet instead of compliance review', 'Onboarding sequence places EDD before relationship initiation for PEPs; welcome materials are post-approval.'],
      ],
      'Higher-risk customers may require enhanced due diligence before approval. PEP status, complex structures, and urgency are signals to slow down and document the risk decision.'),
    q(4103141, 'Career Skills', 'Transaction Monitoring and Alerts', 'Exit recommendation',
      'After repeated suspicious activity and weak explanations, the AML team is considering whether the relationship should continue. What should the recommendation include?',
      'The risk history, unresolved concerns, business impact, legal or policy constraints, and a clear retain, restrict, or exit recommendation',
      [
        ['Only the monthly fee revenue', 'Revenue is one factor of many; a one-axis exit memo cannot withstand examiner or board review.'],
        ['A vague note saying the account "feels weird"', 'Feelings are not 31 CFR 1020.220 documentation; the recommendation must point to specific facts and risk.'],
        ['A promise that the customer will behave better after a casual warning', 'Casual warnings can themselves constitute tipping concerns under 31 USC 5324 and rarely change behavior.'],
      ],
      'Relationship decisions need a balanced, documented recommendation. AML teams should connect risk history and policy constraints to a specific action leaders can approve.'),
  ],

  // ---------------------------------------------------------------------------
  // DEFENSE BUDGETING ROADMAP
  // Syllabus chapters (defense_budgeting_roadmap.md):
  //  1. Defense Money Flow
  //  2. PPBE and Program Decisions
  //  3. Appropriations and Fiscal Law
  //  4. Spend Plans and Execution Reviews
  //  5. Budget Communication and Oversight
  // ---------------------------------------------------------------------------
  defenseBudgetingRoadmap: [
    // Chapter 1: Defense Money Flow
    q(4103108, 'Career Skills', 'Defense Money Flow', 'Obligation versus outlay',
      'A program office signs a valid contract in June, but the contractor will invoice after delivery in September. Which budget stage occurred in June?',
      'Obligation — a legal liability incurred under 31 USC 1501',
      [
        ['Outlay', 'Outlay is the disbursement (Treasury check or EFT), which happens after invoice and acceptance — September at earliest in this scenario.'],
        ['Apportionment', 'Apportionment is OMB\'s release of authority to the agency under 31 USC 1512; it occurs upstream of any contract action.'],
        ['Authorization', 'Authorization is the substantive law passed by Congress (e.g., the NDAA) creating the program; appropriations and obligations come later.'],
      ],
      'Defense money moves through authorization → appropriation → apportionment → allotment → obligation → outlay. Obligation occurs when the government incurs a legal liability.'),
    q(4103142, 'Career Skills', 'Defense Money Flow', 'Commitment checkpoint',
      'A program manager says funds are safe because a purchase request has been approved, but no contract or order exists yet. What should the budget analyst clarify?',
      'The action is a commitment (administrative reservation), but obligation under 31 USC 1501 requires a legal liability such as an awarded contract',
      [
        ['The money has already outlaid because a form exists', 'Outlay is a Treasury disbursement, not a form workflow event; nothing has been paid yet.'],
        ['The funds can be spent on any purpose now', 'A PR does not transmute the appropriation\'s 31 USC 1301(a) purpose; the funds remain tied to their original color of money.'],
        ['The purchase request replaces fiscal-law review', 'A PR is a planning artifact; legal review under 31 USC 1301(a), 1502, and 1341 is independent of and subsequent to PR approval.'],
      ],
      'Defense money moves through stages. Analysts should distinguish planning reservations from obligations and outlays so execution reports do not tell a heroic little lie.'),
    q(4103147, 'Career Skills', 'Defense Money Flow', 'Reprogramming threshold',
      'A command wants to move funds from a lower-priority effort into a higher-priority emergent requirement above internal thresholds. What should the analyst check?',
      'Whether DoD-internal reprogramming, above-threshold reprogramming (DD 1415), or congressional prior-approval thresholds apply',
      [
        ['Whether the receiving office sounds more excited', 'Enthusiasm is not a 10 USC 2214 reprogramming criterion; thresholds and approval levels are.'],
        ['Whether the spreadsheet can hide the movement', 'Concealment violates DoD 7000.14-R Vol. 3 reprogramming documentation requirements and is an Anti-Deficiency Act risk.'],
        ['Whether the donor program has a boring acronym', 'Acronym aesthetics do not affect reprogramming rules; the dollar amount and the source/destination appropriations do.'],
      ],
      'Moving defense funds is governed by authority and thresholds. Internal reprogramming, above-threshold reprogramming, and congressional prior approval thresholds drive what is allowed.'),
    q(4107440, 'Career Skills', 'Defense Money Flow', 'Advance procurement authority',
      'A shipbuilding team requests funding for long-lead components before the full platform buy. What should the analyst confirm?',
      'Whether advance procurement is authorized (often via 10 USC 2306b for multi-year procurement or specific NDAA provisions), tied to the program schedule, and funded with the correct SCN/APN appropriation',
      [
        ['Whether "long-lead" sounds important enough to skip authorization', 'Schedule pressure does not waive 31 USC 1301(a) purpose discipline; advance procurement requires specific authority.'],
        ['Whether buying early always saves money with no downside', 'Advance procurement can save money but ties future budgets; the Government Accountability Office regularly cites unjustified APN use.'],
        ['Whether the parts have the most dramatic names', 'Component names are not the criterion; the criterion is statutory authority for early funding.'],
      ],
      'Some defense purchases need early funding, but the authority and justification matter. Advance procurement should align with schedule, appropriation, and approval rules.'),
    q(4220100, 'Career Skills', 'Defense Money Flow', 'Anti-Deficiency Act trigger',
      'A team obligates funds before the apportionment is received from OMB to meet a vendor deadline. What law was potentially violated?',
      'The Anti-Deficiency Act (31 USC 1341 and 1517), which prohibits obligation in excess of, or in advance of, available authority',
      [
        ['The Federal Acquisition Regulation, because the contract was signed quickly', 'FAR governs procurement procedure; obligation-before-authority is a fiscal-law violation, not a FAR violation.'],
        ['The Procurement Integrity Act, because deadlines create pressure', 'PIA addresses gratuities and procurement-sensitive information disclosure, not authority sequencing.'],
        ['Title 10, because defense programs are unique', 'Title 10 contains many defense-specific authorities, but the prohibition on obligating without authority is in Title 31.'],
      ],
      'The Anti-Deficiency Act (31 USC 1341, 1517) is the defining fiscal-law violation. Obligation requires available authority; reporting violations is mandatory under 31 USC 1351.'),

    // Chapter 2: PPBE and Program Decisions
    q(4103109, 'Career Skills', 'PPBE and Program Decisions', 'POM tradeoff lane',
      'A senior leader asks whether to trade two future capability upgrades to protect one higher-priority program objective in the next POM. What kind of issue is this primarily?',
      'A programming tradeoff tied to strategy, resources, and future years — the "P" in PPBE',
      [
        ['An invoice-processing issue', 'Invoice processing is execution-phase accounting; POM lives in the Programming phase, two phases earlier.'],
        ['A contract closeout issue', 'Closeout addresses completed contracts under FAR 4.804; POM addresses future-year resource allocation.'],
        ['A travel-card reconciliation issue', 'Travel card reconciliation is execution-stage compliance work; POM addresses outyear programmatic choices.'],
      ],
      'PPBE — Planning, Programming, Budgeting, Execution — assigns trade decisions to specific phases. POM trades are Programming decisions, not Execution.'),
    q(4107431, 'Career Skills', 'PPBE and Program Decisions', 'Sponsor trade space',
      'A directorate wants to add a cyber resilience initiative to the next budget build, but no one has identified what will be reduced to pay for it. What should the programmer ask for?',
      'A trade-space proposal showing the initiative, strategic rationale, offsets, risks, and affected years across the FYDP',
      [
        ['A note saying cyber is important so offsets are unnecessary', 'Topline pressure means almost no DoD initiative gets approved without offsets; "important" without offsets stalls in PPBE review.'],
        ['A list of vendors who would enjoy the funding', 'Vendor preference is not the PPBE decision input; mission impact and affordability are.'],
        ['A promise to find money after the POM is locked', 'Post-lock funding searches reopen positions that have already been compromised across the program; the standard is offsets up front.'],
      ],
      'Programming work pairs ambition with affordability. New priorities usually need offsets, risk language, and year-by-year consequences leaders can compare.'),
    q(4103143, 'Career Skills', 'PPBE and Program Decisions', 'POM wedge in outyears',
      'A capability gap is real, but the proposed fix creates a large funding wedge in years three through five of the FYDP. What should the programming issue paper show?',
      'The gap, alternatives, outyear cost profile, tradeoffs, risks, and recommended decision',
      [
        ['Only the first-year cost because future years are future-you problems', 'PPBE explicitly spans the FYDP; deferring the outyear story is the documented bow-wave pattern that creates unaffordable programs.'],
        ['A vendor brochure with no affordability analysis', 'Brochures are marketing; affordability analysis is the actual PPBE deliverable.'],
        ['A statement that capability gaps automatically fund themselves', 'Capability gaps do not self-fund; the wedge has to come from offsets, a topline increase, or a deferred requirement.'],
      ],
      'Programming decisions live across the FYDP. A good issue paper makes the outyear bill, alternatives, and trade space visible before leaders bless the idea.'),
    q(4107436, 'Career Skills', 'PPBE and Program Decisions', 'Sustainment bill at scale',
      'A pilot project was cheap in year one, but scaling it across the enterprise creates a sustainment bill no office has budgeted. What should the issue paper highlight?',
      'The full life-cycle cost, sustainment owner, scaling assumptions, affordability risk, and decision options',
      [
        ['Only the pilot savings because the future bill is impolite', 'The DoD Cost Estimating Guide explicitly requires life-cycle costing precisely because pilot-only costing produces unaffordable programs.'],
        ['A cheerful note that sustainment "usually finds itself"', 'Unbudgeted sustainment is the most common cause of program death-spirals in defense acquisition history.'],
        ['A request to approve scaling before anyone calculates support costs', 'Approving scaling without support cost analysis is the failure mode the JCIDS / PPBE intersection exists to prevent.'],
      ],
      'Pilot success can hide future obligations. Programming analysis should show life-cycle costs and ownership before leaders commit to a bigger footprint.'),

    // Chapter 3: Appropriations and Fiscal Law
    q(4103110, 'Career Skills', 'Appropriations and Fiscal Law', 'Wrong color of money',
      'A team wants to use procurement funds to pay for a service support requirement because those funds are available and the deadline is close. What should the analyst flag?',
      'A potential 31 USC 1301(a) purpose violation requiring fiscal-law review',
      [
        ['A communications problem only because the request arrived late', 'Lateness is operational; the legal exposure is the purpose statute, not the calendar.'],
        ['A guarantee that the spending is legal because money is available', 'Availability is necessary but not sufficient; 31 USC 1301(a) limits use to the purpose Congress appropriated for.'],
        ['A need to change the project name so the funds fit', 'Renaming to evade purpose limits is the textbook misuse-of-funds pattern that triggers ADA violations.'],
      ],
      'Fiscal law requires the right appropriation for the right purpose, time, and amount (31 USC 1301(a), 1502, and 1341). Availability alone does not make a funding action legal.'),
    q(4103113, 'Career Skills', 'Appropriations and Fiscal Law', 'Continuing resolution caution',
      'Under a continuing resolution, a team wants to start a brand-new effort that was not previously funded. What is the prudent budget response?',
      'Check CR restrictions on new starts and apply OMB Bulletin / agency CR guidance before committing or obligating funds',
      [
        ['Start immediately because the full-year budget will probably arrive', 'CRs typically prohibit new starts; "probably" is not a fiscal-law defense if the full-year bill differs.'],
        ['Use any leftover prior-year funds without review', 'Prior-year funds are constrained by their original purpose and time limits; leftover does not mean free.'],
        ['Call it "planning" and ignore funding limits', 'Planning that constitutes substantive obligation is still obligation; labels do not change the underlying commitment.'],
      ],
      'Continuing resolutions often restrict new starts and funding levels. Analysts should surface restrictions before the program creates legal or execution risk.'),
    q(4103144, 'Career Skills', 'Appropriations and Fiscal Law', 'Bona fide need',
      'A team wants to use expiring FY annual funds to buy next year\'s routine supplies early because the current-year account has money left. What should the analyst flag?',
      'A potential 31 USC 1502 bona fide needs violation requiring review before obligation',
      [
        ['A branding issue because the supplies need a cooler name', 'Naming has no effect on the bona fide needs analysis; the question is whether the need arose in the funded period.'],
        ['A guarantee that expiring money is always "use-it-or-lose-it" legal', '"Use it or lose it" is a workplace phrase, not a legal doctrine; 31 USC 1502 still applies.'],
        ['A reason to split the order into smaller pieces and stop asking questions', 'Splitting purchases to evade purpose or time limits compounds the violation and creates an ADA concern.'],
      ],
      'Annual appropriations generally must satisfy a current-year need under 31 USC 1502. End-of-year pressure is real, but fiscal law still expects purpose, time, and amount discipline.'),
    q(4103149, 'Career Skills', 'Appropriations and Fiscal Law', 'Severable services and 1502',
      'A support contract for recurring help-desk services would cross fiscal years. The office wants to fund 18 months with one-year money. What should the analyst examine?',
      'The 10 USC 3133 / FAR 32.703-3 exception that lets severable services contracts cross fiscal years up to 12 months when funded with annual money — 18 months is too long',
      [
        ['Whether help-desk work sounds important enough to ignore time limits', 'Importance is not a 31 USC 1502 exemption; the time-limit rule is statutory.'],
        ['Whether the contractor prefers one big invoice', 'Vendor preference does not change the fiscal-law constraint on annual money.'],
        ['Whether the contract title includes the word "support"', 'Contract title does not determine severability; the nature of the work and statutory authority do.'],
      ],
      'Severable services contracts crossing fiscal years are constrained by 10 USC 3133 (formerly 2410a) and FAR 32.703-3 to typically 12 months on annual funds. Longer periods require different funding or authority.'),
    q(4107442, 'Career Skills', 'Appropriations and Fiscal Law', 'Augmentation by gift with strings',
      'A partner organization offers to reimburse part of a joint exercise after the government has already planned the event. What should the budget team check?',
      'Applicable acceptance authority (e.g., 10 USC 2601 gifts, 10 USC 2350 cooperative agreements), reimbursement rules, accounting treatment, and any 31 USC 1301 augmentation concerns',
      [
        ['Accept it casually because extra money is always welcome', 'Acceptance without authority is unlawful augmentation of the appropriation; 31 USC 3302(b) (miscellaneous receipts) is the default rule.'],
        ['Spend the reimbursement before the agreement exists', 'Spending unsanctioned funds creates an ADA exposure and an augmentation issue simultaneously.'],
        ['Let the partner choose the appropriation after the fact', 'The Treasury Account Symbol is set by the receiving agency and the source authority; it is not negotiable post hoc.'],
      ],
      'Outside funding and reimbursements need authority and accounting discipline. Without specific authority, 31 USC 3302(b) requires deposit to miscellaneous receipts, not augmentation of the program account.'),
    q(4220101, 'Career Skills', 'Appropriations and Fiscal Law', 'Color of money cheat sheet',
      'An R&D experiment is ready to transition to a production buy of 100 units in the same fiscal year. Which appropriation usually funds the production buy?',
      'Procurement (e.g., APN/SCN/MIPR) — the production article is no longer RDT&E development work',
      [
        ['RDT&E, because the program team still owns it', 'RDT&E funds research, development, test, and evaluation; a production buy of completed articles is a procurement purpose under DoD FMR Vol. 2A.'],
        ['O&M, because operations need the units', 'O&M (50/3500 series) funds operating and maintenance, not production buys of investment items above the expense/investment threshold.'],
        ['Working capital, because the buy is operational', 'Working capital funds (e.g., DWCF) are revolving and used by industrially funded activities; they do not replace procurement funds for new production.'],
      ],
      'Color of money is set by 31 USC 1301(a) purpose. RDT&E, Procurement, O&M, MILPERS, and MILCON each have specific purposes documented in DoD FMR Vol. 2A.'),

    // Chapter 4: Spend Plans and Execution Reviews
    q(4103111, 'Career Skills', 'Spend Plans and Execution Reviews', 'Burn-rate miss',
      'A program planned to obligate 60% of annual funds by midyear but has obligated only 32%. The contracting package slipped two months. What should an execution brief emphasize?',
      'The variance, root driver, program risk, and recovery action with updated timing',
      [
        ['Only that the program is behind, with no cause or action', 'Variance without driver is not decision-ready; the brief should support a leadership choice, not just diagnose.'],
        ['A request for more funds without explaining execution', 'A funding ask without an execution story is the pattern that loses programs their funding in mark cycles.'],
        ['The fact that the spreadsheet still has green cells', 'Color formatting is not analysis; the underlying obligation rate is what the program manages to.'],
      ],
      'Execution reviews should explain what changed, why it changed, and what action protects the program. A variance without a driver is not decision-ready.'),
    q(4103114, 'Career Skills', 'Spend Plans and Execution Reviews', 'Timing versus scope variance',
      'A spend plan is below target because invoices lag completed work, not because work stopped. How should the analyst describe the issue?',
      'As a timing variance — performance occurred, invoices are delayed; obligations and outlays diverge but the work is on track',
      [
        ['As a scope failure no matter what the evidence says', 'Misclassifying timing as scope creates the wrong recovery actions; the program needs invoice processing, not requirement reshaping.'],
        ['As proof the contractor should never be paid', 'Late invoicing is a contractor administrative issue, not grounds to withhold for delivered work; that creates Prompt Payment Act exposure.'],
        ['As irrelevant because spend plans never change', 'Spend plans are working estimates that must be rephased when reality moves; rigid plans miss the variance entirely.'],
      ],
      'Execution analysis should distinguish timing from scope or performance problems. The corrective action depends on the true driver of the variance.'),
    q(4103150, 'Career Skills', 'Spend Plans and Execution Reviews', 'Deobligation opportunity',
      'A contract line has excess obligated funds after final negotiated prices came in lower than expected. What should the execution review ask?',
      'Whether funds can be deobligated and applied legally to validated needs before availability expires under 31 USC 1552',
      [
        ['Whether excess obligations can sit forever as a comfort blanket', 'Excess balances tie up authority and are flagged in tri-annual reviews under DoD FMR Vol. 3; they cannot sit indefinitely.'],
        ['Whether the program should invent invoices to use the balance', 'Inventing invoices is fraud and false claims (18 USC 287, 31 USC 3729); deobligation is the correct path.'],
        ['Whether lower prices mean the requirement failed', 'Lower negotiated prices indicate good acquisition outcomes, not failed requirements.'],
      ],
      'Execution is not only about spending new money. Recovering excess obligations can help fund valid priorities, but reuse depends on purpose, time, amount, and local controls.'),
    q(4107438, 'Career Skills', 'Spend Plans and Execution Reviews', 'Late invoice pileup',
      'A contractor submits six months of delayed invoices in one week, making outlays spike and alarming leadership. What should the execution note explain?',
      'That the spike reflects delayed billing, the evidence of completed work, cash-flow impact, and whether future phasing should change',
      [
        ['That the program suddenly performed six months of work overnight', 'Outlay does not measure performance pace; obligation and acceptance do. The note must explain the lag, not invent the work.'],
        ['That all spikes are bad execution by definition', 'Spikes can reflect billing timing, milestone payments, or year-end activity — context determines whether it is a problem.'],
        ['That invoices are finance magic and need no narrative', 'Leadership reads outlay charts as performance signals unless the analyst explains the billing-to-performance lag explicitly.'],
      ],
      'Outlay spikes can reflect billing timing rather than performance changes. Execution notes should tie payment movement to work evidence and future forecasts.'),

    // Chapter 5: Budget Communication and Oversight
    q(4103146, 'Career Skills', 'Budget Communication and Oversight', 'Oversight question prep',
      'An oversight staffer asks why a program needs more procurement funding after missing last year\'s obligation target. What should the budget response include?',
      'A plain-language explanation of prior execution, causes of delay, corrective actions, current need, and evidence supporting the request',
      [
        ['A stack of acronyms and a confident smile', 'Congressional oversight staff are not flattered by acronym density; they are testing whether the program manager understands their own execution.'],
        ['A refusal to discuss prior execution because it is awkward', 'Refusal to discuss execution invites a mark; transparency on prior performance is the credibility move.'],
        ['Only the total dollar amount requested', 'The dollar ask without a performance narrative invites a reduction or hold; the explanation is what unlocks the funds.'],
      ],
      'Oversight questions connect money, performance, and credibility. Strong answers acknowledge execution history and show why the new request is still justified.'),
    q(4107906, 'Career Skills', 'Budget Communication and Oversight', 'Congressional marks response',
      'A budget line receives a congressional reduction with language tied to schedule confidence. What should the analyst update?',
      'The program plan, execution forecast, issue narrative, and any required response to the stated congressional concern',
      [
        ['Only the total dollars, leaving the reason mysterious', 'Marks carry policy signals; ignoring the reason guarantees the same mark next cycle.'],
        ['A complaint that oversight has too many nouns', 'Complaining about oversight wording is not a budget action; the action is updating the program plan and response.'],
        ['The visual polish of the briefing deck', 'Branding does not address the underlying schedule-confidence concern Congress signaled.'],
      ],
      'Marks often carry a policy signal. Budget analysts should connect the funding change to the stated concern and the revised plan.'),
    q(4103151, 'Career Skills', 'Budget Communication and Oversight', 'One-slide budget story',
      'A colonel has 90 seconds before a decision meeting and asks for the budget story on one slide. What belongs there?',
      'Current funding, variance from plan, decision required, mission impact, recommended action, and the evidence behind it',
      [
        ['Every line of accounting data in eight-point font', 'Eight-point accounting data fails the 90-second test; the colonel cannot read it and the meeting has moved on.'],
        ['A motivational quote and no numbers', 'Motivation without numbers is not a budget brief; leaders need the dollars, the decision, and the consequences.'],
        ['A mystery chart with unlabeled axes', 'Unlabeled axes destroy the chart\'s decision value; leaders cannot act on data they cannot interpret in 90 seconds.'],
      ],
      'Budget communication should compress without distorting. A good one-slide story gives leaders the decision, risk, money, and evidence fast enough to be useful.'),
    q(4107909, 'Career Skills', 'Budget Communication and Oversight', 'Unfunded priorities discipline',
      'A branch submits an unfunded-priorities list with ten items all labeled mission critical and no ranking. What should the analyst request?',
      'Prioritized items with mission impact, cost, executable timing, dependencies, and risk if unfunded',
      [
        ['Alphabetical order because strategy enjoys the alphabet', 'Alphabetical UPLs send the signal that the branch has not actually prioritized — and Congress reads UPLs that way.'],
        ['A longer list so everything feels equally urgent', 'Universal urgency is no urgency; oversight reviewers fund nothing from undifferentiated lists.'],
        ['A note saying leaders can rank it with their hearts', 'Asking leaders to rank without inputs hands the decision to the loudest line item, not the highest-impact one.'],
      ],
      'Unfunded lists are decision tools. Ranking, timing, cost, and mission impact help leaders compare needs rather than admire a pile of urgency.'),
    q(4220102, 'Career Skills', 'Budget Communication and Oversight', 'Capstone analyst pack',
      'A leader requests an "analyst pack" covering money flow, PPBE position, fiscal-law posture, execution status, and oversight narrative for one program. What is the right structure?',
      'A linked package — funds-flow map → PPBE wedge note → fiscal-law checklist → execution variance brief → leadership/oversight one-pager — each cross-referenced',
      [
        ['Five disconnected one-pagers stapled together', 'Disconnected documents do not show the analyst can integrate; the analyst pack is graded on coherence.'],
        ['Only the funds-flow map because it covers everything', 'The funds-flow map alone says nothing about PPBE position, fiscal law, or oversight; it is one layer of the package.'],
        ['The oversight one-pager only, with the rest verbal', 'Verbal back-up does not survive staff handoffs; the package has to stand on its own.'],
      ],
      'The capstone integrates all five chapters into one coherent package. Each artifact answers a specific decision-maker question, but they share assumptions and numbers.'),
  ],

  // ---------------------------------------------------------------------------
  // PROCUREMENT AND CONTRACTING ROADMAP
  // Syllabus chapters (procurement_contracting_roadmap.md):
  //  1. Requirements and Acquisition Planning
  //  2. Sourcing and Solicitation
  //  3. Pricing and Contract Types
  //  4. Evaluation, Negotiation, and Award
  //  5. Contract Administration and Closeout
  // ---------------------------------------------------------------------------
  procurementContractingRoadmap: [
    // Chapter 1: Requirements and Acquisition Planning
    q(4103116, 'Career Skills', 'Requirements and Acquisition Planning', 'Need before solution',
      'A stakeholder asks procurement to buy a specific software brand but has not explained the business problem or required outcomes. What should the buyer do first?',
      'Clarify the need, outcomes, constraints, market evidence under FAR Part 10 market research, and approval path',
      [
        ['Issue the solicitation using the brand name only', 'Brand-name procurements require FAR 11.105 justification; without it, the solicitation fails competition requirements under CICA (41 USC 3301).'],
        ['Ask vendors to guess the business problem', 'Vendors will reverse-engineer a problem to match their product; the government ends up buying the vendor\'s preferred solution.'],
        ['Treat a stakeholder favorite as enough evidence to bypass market research', 'FAR Part 10 requires market research before solicitation; favorites do not satisfy CICA full-and-open competition.'],
      ],
      'Acquisition planning starts with the requirement, not a preferred solution. FAR Part 10 market research and FAR Part 11 requirement description are sequential, not optional.'),
    q(4103152, 'Career Skills', 'Requirements and Acquisition Planning', 'Sole-source justification evidence',
      'A program office claims only one vendor can meet the need, but the file has no market research, capability comparison, or explanation of urgency. What should procurement request?',
      'Documented market research and a FAR 6.303 Justification and Approval (J&A) for other than full and open competition',
      [
        ['A shorter justification that says "trust us"', 'CICA requires written J&A with the specific 41 USC 3304 exception cited; "trust us" fails GAO protest review.'],
        ['A vendor selfie to prove uniqueness', 'Vendor self-promotion is not market research; only buyer-conducted research satisfies FAR Part 10.'],
        ['A solicitation posted after award so the timeline looks competitive', 'Sham solicitations are documented in GAO protest decisions as bad-faith competition and are sanctionable.'],
      ],
      'Sole-source or limited competition strategies need evidence. CICA (41 USC 3301-3304) requires a written J&A; FAR 6.303 governs format and FAR 6.304 sets approval levels by dollar threshold.'),
    q(4107452, 'Career Skills', 'Requirements and Acquisition Planning', 'Security in acquisition planning',
      'A planned cloud tool will handle sensitive case data, but cybersecurity requirements are mentioned only after the draft solicitation is nearly done. What should the buyer do?',
      'Bring FAR 39.101 cybersecurity considerations, FedRAMP authorization requirements, and FAR 52.204-21 basic safeguarding into acquisition planning before release',
      [
        ['Add a vague "secure enough" phrase and hope vendors understand', 'Vague security language produces non-comparable proposals and post-award disputes over scope.'],
        ['Let the winning vendor invent the security baseline', 'Post-award baseline invention rewards the vendor with the loosest interpretation; FedRAMP and FISMA baselines exist precisely to prevent this.'],
        ['Treat cybersecurity as a post-award personality trait', 'Cyber requirements affect price, schedule, and architecture; deferring them produces unaffordable change orders.'],
      ],
      'Security requirements affect scope, price, evaluation, and performance. FAR Subpart 39.1, FedRAMP, and FAR 52.204-21 belong in acquisition planning, not in post-award discovery.'),

    // Chapter 2: Sourcing and Solicitation
    q(4103117, 'Career Skills', 'Sourcing and Solicitation', 'Evaluation criteria mismatch',
      'An RFP says price matters most, but the evaluation worksheet gives most points to an unstated design demo. What is the risk?',
      'The evaluation criteria are not aligned with the solicitation and violate FAR 15.305(a) — protestable under GAO bid-protest jurisdiction',
      [
        ['The source-selection team is being too transparent', 'Transparency is not the issue; using unstated criteria is the textbook GAO sustain ground.'],
        ['The vendor with the most polished presentation must win', 'Branding is not an evaluation factor under FAR 15.304; awards based on unstated criteria invite protest.'],
        ['The mismatch is fine if the buyer likes the demo', 'Buyer preference is not a published evaluation factor; FAR 15.305(a) requires award per the solicitation, not per taste.'],
      ],
      'Solicitations and evaluations must align per FAR 15.305(a). GAO sustains protests where award diverges from the stated factors.'),
    q(4103153, 'Career Skills', 'Sourcing and Solicitation', 'Amendment versus private fix',
      'After the solicitation is released, the agency discovers that a key delivery date is wrong. Several vendors are preparing proposals. What should the contracting team do?',
      'Issue a FAR 15.206 amendment through the solicitation channel and give all offerors fair notice',
      [
        ['Call only the favorite vendor with the real date', 'Selective disclosure is a CICA fair-opportunity violation and a likely sustain ground in protest.'],
        ['Hope bidders infer the correct date from vibes', 'Material terms must be in the solicitation; relying on inference produces non-responsive proposals and protest exposure.'],
        ['Correct the date after award because paperwork enjoys suspense', 'Post-award correction of material terms typically constitutes an out-of-scope modification — protestable and possibly void.'],
      ],
      'Material solicitation changes require a FAR 15.206 amendment. Equal access to material information is a CICA fairness requirement.'),
    q(4103158, 'Career Skills', 'Sourcing and Solicitation', 'Set-aside under FAR Part 19',
      'Market research shows multiple qualified small businesses can perform the work at fair prices. What acquisition strategy question should the buyer consider?',
      'Whether the FAR 19.502-2 "Rule of Two" requires a small-business set-aside, and which socioeconomic program (8(a), HUBZone, SDVOSB, WOSB) applies',
      [
        ['Whether large businesses should get the work because their websites look expensive', 'Website aesthetics are not a FAR Part 19 factor; capability and price are.'],
        ['Whether competition should be skipped because research found "too many" options', 'Robust competition is the goal of FAR Part 6, not a problem; "too many" is not a protest of competition.'],
        ['Whether small businesses can only sell office snacks', 'Small business eligibility under FAR Part 19 covers the full range of federal contracting, not a sector subset.'],
      ],
      'The "Rule of Two" at FAR 19.502-2 generally requires a set-aside when two or more small businesses can perform at fair market prices. Specific socioeconomic categories follow.'),
    q(4107447, 'Career Skills', 'Sourcing and Solicitation', 'Incumbent informational advantage',
      'The incumbent knows undocumented system details that new offerors cannot reasonably discover before proposals are due. What should the contracting team consider?',
      'Whether the FAR 9.505 organizational conflict-of-interest analysis or a FAR 15.206 amendment with extended time would reduce unfair competitive advantage',
      [
        ['Let the incumbent keep the secret because they earned it by being nearby', 'OCI rules at FAR 9.505 address exactly this asymmetry; tenure is not a justification.'],
        ['Tell new vendors to "guess harder"', 'Vendors cannot price what is undisclosed; non-incumbent proposals will be incomparable and competition fails substantively.'],
        ['Cancel documentation because fewer facts make evaluation faster', 'Documentation deficit is the source of the problem; deleting more documents makes the competition less defensible, not more.'],
      ],
      'Competition works when offerors have fair access to material information. FAR 9.505 OCI analysis and FAR 15.206 amendments address information asymmetry.'),

    // Chapter 3: Pricing and Contract Types
    q(4103118, 'Career Skills', 'Pricing and Contract Types', 'Fixed-price fit',
      'A buyer has a stable requirement, clear deliverables, and low uncertainty about performance. Which contract type is often a reasonable fit?',
      'Firm-fixed-price (FFP) per FAR 16.202 — the contractor bears performance risk',
      [
        ['Cost reimbursement because the scope is clear', 'FAR 16.301-2 limits cost-reimbursement contracts to uncertain scope; clear scope cuts the other way.'],
        ['Time and materials with no labor controls', 'T&M under FAR 16.601 requires a determination and findings and ceiling price; "no labor controls" violates the contract-type rules.'],
        ['No contract type because clarity removes risk', 'All federal acquisition uses a defined FAR Part 16 contract type; "no type" is not a procurement form.'],
      ],
      'Contract type matches risk allocation. FAR 16.202 firm-fixed-price suits clearer requirements; uncertain scope drives toward cost-reimbursement under FAR 16.301.'),
    q(4103122, 'Career Skills', 'Pricing and Contract Types', 'Cost realism under FAR 15.404-1(d)',
      'A proposal price is far below others because the vendor assumes half the required labor hours. What should the evaluation team examine?',
      'Whether the proposed cost is realistic for the technical approach per FAR 15.404-1(d) cost realism analysis',
      [
        ['Whether the low price looks exciting enough to skip review', 'GAO has sustained protests where agencies failed to perform required cost realism analysis on cost-reimbursement competitions.'],
        ['Whether the vendor used a nicer font than competitors', 'Typography is not a FAR 15.404-1 factor; labor hours, rates, and realism are.'],
        ['Whether all labor hours are identical across job types', 'Differentiated labor categories are how proposals reflect technical approach; identical hours would itself be a realism red flag.'],
      ],
      'Cost realism analysis under FAR 15.404-1(d) is required for cost-reimbursement awards and recommended for fixed-price where realism informs technical risk. Low price with low hours is the canonical pattern.'),
    q(4103154, 'Career Skills', 'Pricing and Contract Types', 'T&M ceiling and surveillance',
      'A team proposes a time-and-materials contract because the work is uncertain, but no one has set labor categories, ceilings, or surveillance expectations. What is missing?',
      'FAR 16.601(c) requires a determination and findings, a ceiling price, justification, monitoring, and that no other contract type is suitable',
      [
        ['A promise that the vendor will be "chill" about hours', 'Vendor commitments do not satisfy FAR 16.601(c); only the contracting officer\'s D&F does.'],
        ['A fixed total with no relation to labor rates', 'T&M is by definition labor-rate times hours; an unrelated fixed total would not be a T&M contract at all.'],
        ['A plan to review invoices after the contract ends', 'FAR 16.601(b)(1)(ii) requires appropriate government surveillance during performance; post-hoc review does not protect against overrun.'],
      ],
      'Time-and-materials contracts under FAR 16.601 require D&F, ceiling, surveillance, and finding that no other type fits. Without those, the buyer carries excessive risk.'),
    q(4107458, 'Career Skills', 'Pricing and Contract Types', 'Option year total evaluated price',
      'The base year price is attractive, but option years rise sharply without a clear change in scope. What should the price analysis address?',
      'Total evaluated price across all options per FAR 15.404-1(b), escalation assumptions, and whether option-year pricing is fair and reasonable',
      [
        ['Celebrate the base year and pretend option years live elsewhere', 'FAR 17.207(f) requires evaluation of option pricing at award time; deferral creates a bait-and-switch competition.'],
        ['Accept any option price because "future renewals are optional"', 'Options are unilateral government rights, but FAR 15.404-1 still requires the prices to be fair and reasonable at evaluation.'],
        ['Compare only the first invoice because it is closest', 'Award decisions evaluate total contract value, not first invoice; this distorts the competition in favor of front-loaded proposals.'],
      ],
      'Contract value often lives beyond the base period. FAR 15.404-1(b) total evaluated price and FAR 17.207(f) option evaluation address option-year pricing at award.'),

    // Chapter 4: Evaluation, Negotiation, and Award
    q(4103119, 'Career Skills', 'Evaluation, Negotiation, and Award', 'Best-value tradeoff rationale',
      'Offer A is cheaper, but Offer B has a documented technical advantage that directly reduces implementation risk. What must the source-selection summary explain if B wins?',
      'Why the technical benefit is worth the price premium under the stated FAR 15.101-1 best-value tradeoff process',
      [
        ['That higher price always means higher quality', 'Best-value is comparative against stated criteria, not a price-as-proxy rule; this would invite protest.'],
        ['That the team preferred B from the start', 'Pre-evaluation preference is exactly what FAR 15.305(a) prohibits; the rationale must be tied to the published criteria.'],
        ['That price can be ignored after proposals arrive', 'FAR 15.304 requires price evaluation in every source selection; ignoring it is a sustain ground.'],
      ],
      'Best-value tradeoffs under FAR 15.101-1 require documented rationale tied to the solicitation criteria. GAO regularly sustains protests where the SSDD lacks comparative explanation.'),
    q(4103160, 'Career Skills', 'Evaluation, Negotiation, and Award', 'Equal discussions discipline',
      'During discussions, one offeror receives detailed hints about how to improve while another only gets a vague thank-you note. What is the process risk?',
      'Unequal discussions violate FAR 15.306(e) and prejudice offerors — a frequent sustain ground in GAO protests',
      [
        ['The vague note is more mysterious and therefore professional', 'Mystery is not a procurement value; FAR 15.306(e)(1) requires each offeror in the competitive range to be informed of significant weaknesses.'],
        ['Feedback must be so limited that vendors cannot improve future proposals', 'Discussions feedback is required, not prohibited; the failure mode is unequal treatment, not feedback itself.'],
        ['Only the eventual winner\'s treatment matters', 'GAO protest standing belongs to other offerors; their treatment is the primary protest target.'],
      ],
      'FAR 15.306 governs exchanges with offerors after receipt of proposals. Equal treatment in discussions is a core CICA fairness requirement.'),
    q(4103155, 'Career Skills', 'Evaluation, Negotiation, and Award', 'Past performance relevance',
      'A vendor has one late delivery from three years ago but strong recent performance on similar work. How should evaluators treat the record?',
      'Assess relevance, recency, severity, and currency under FAR 15.305(a)(2) past-performance evaluation',
      [
        ['Reject the vendor automatically for one old problem', 'FAR 15.305(a)(2)(iv) requires past performance to be considered as one of multiple criteria; automatic rejection is improper.'],
        ['Treat price as the only meaningful evaluation factor because it is easiest to compare', 'FAR 15.304(c)(3) makes past performance a required evaluation factor in negotiated procurements above the simplified acquisition threshold.'],
        ['Score the vendor based on presentation style rather than stated criteria', 'Logo aesthetics are not a FAR 15.305 evaluation factor; using them invites protest.'],
      ],
      'Past performance evaluation under FAR 15.305(a)(2) weighs relevance, recency, and contractor response. CPARS records (FAR 42.15) are the primary source.'),
    q(4107459, 'Career Skills', 'Evaluation, Negotiation, and Award', 'Responsibility determination',
      'The apparent awardee has the best evaluated proposal, but recent records show serious unresolved integrity and performance concerns. What should the contracting team address before award?',
      'A FAR 9.103 affirmative responsibility determination using FAR 9.104 standards, including integrity, capacity, and SAM.gov exclusion status',
      [
        ['Award immediately because evaluation scores cure everything', 'Responsibility is a separate determination from evaluation; FAR 9.103(a) requires a positive determination before award.'],
        ['Treat a low price as outweighing integrity and responsibility concerns', 'FAR 9.104-1(d) explicitly requires "satisfactory record of integrity and business ethics"; price does not override.'],
        ['Ask competitors whether they think the awardee seems "nice"', 'Competitor opinion is not a FAR 9.104 standard; documented records (CPARS, SAM.gov, FAPIIS) are.'],
      ],
      'FAR 9.103-9.104 require a contracting officer\'s affirmative responsibility determination before award. FAPIIS and SAM.gov are the documentary sources.'),
    q(4107930, 'Career Skills', 'Evaluation, Negotiation, and Award', 'Debriefing preparation',
      'After award, an unsuccessful offeror requests a debriefing and the program wants to improvise live. What should the team prepare?',
      'A FAR 15.506 post-award debriefing aligned to the evaluation record, with protected information rules and approved talking points',
      [
        ['Wing it because procurement jazz builds character', 'FAR 15.506(d) specifies the content of the debriefing; improvised debriefings produce inconsistent records and protest exposure.'],
        ['Share competitors\' full proposals for transparency', 'FAR 15.506(e) and FAR 3.104 prohibit disclosure of other offerors\' proprietary or source-selection information; this is a Procurement Integrity Act issue.'],
        ['Refuse all explanations because losing is awkward', 'Requested debriefings are required under FAR 15.506; refusal is a CICA violation and extends the protest window.'],
      ],
      'Post-award debriefings under FAR 15.506 cover the evaluation of the requester, the basis for award, and rationale, while protecting proprietary information. The debriefing also affects the protest clock under FAR 33.103.'),

    // Chapter 5: Contract Administration and Closeout
    q(4103120, 'Career Skills', 'Contract Administration and Closeout', 'Scope creep fork',
      'During performance, a vendor offers to add a new reporting module that was not in the statement of work. What should the contract administrator check first?',
      'Whether the change is within scope, requires a FAR 43.103 contract modification, and has the funding and authority to be ordered',
      [
        ['Accept it informally because extra features are always free', '"Free" additions still affect deliverables, IP rights, and support obligations; FAR 43.102 requires changes through formal modification.'],
        ['Tell the vendor to invoice "any amount later"', 'Open-ended invoicing without modification is a constructive change risk and an ADA exposure if funds are not obligated.'],
        ['Treat contract administration as beginning only at closeout', 'Contract administration runs from award to closeout under FAR Part 42; not just closeout.'],
      ],
      'Contract administration controls changes. FAR Part 43 modifications are required for in-scope changes; out-of-scope changes generally require a new procurement under CICA.'),
    q(4103156, 'Career Skills', 'Contract Administration and Closeout', 'Invoice versus performance evidence',
      'A vendor invoice bills senior engineer hours, but the monthly status report shows junior staff performed most of the work. What should the administrator do?',
      'Compare the invoice to contract terms and performance evidence under FAR 32.905, then question or reject unsupported charges through the proper process',
      [
        ['Pay it because invoices are "legally self-verifying"', 'FAR 32.905 invoice processing requires substantiation; mis-billed labor categories are a False Claims Act (31 USC 3729) risk if known and paid.'],
        ['Ask the vendor to relabel junior staff as senior in the report', 'Re-labeling to match a defective invoice is itself a documented false-statement pattern.'],
        ['Treat labor-category compliance as a closeout issue rather than an active administration issue', 'Labor category review is contemporaneous; closeout-only review allows incorrect payments to accumulate beyond recovery.'],
      ],
      'Contract administration checks whether billed work matches the contract and evidence. FAR 32.905 governs invoice payment; the False Claims Act (31 USC 3729) attaches when known mis-billing is paid.'),
    q(4103161, 'Career Skills', 'Contract Administration and Closeout', 'Performance cure process',
      'A contractor is missing milestones, and the program office wants to threaten termination in an email written during lunch. What should the administrator do first?',
      'Review FAR 49 termination procedures, document performance issues, coordinate the FAR 49.402-3 cure or show-cause notice path if applicable',
      [
        ['Send the "spicy email" and see what happens', 'Termination requires formal notice per FAR 49.402-3; informal email creates wrongful-termination exposure and contractor claim risk.'],
        ['Stop documenting because "documentation makes things real"', 'Documentation is the basis for any T4D or T4C action; without it, the government has no defensible position.'],
        ['Change the statement of work secretly so the contractor is no longer late', 'Unilateral scope change is a constructive change generating a contractor REA (FAR 43.205); it does not cure missed milestones.'],
      ],
      'Performance problems should be handled through the contract\'s remedy process. FAR Part 49 governs termination; FAR 49.402-3 specifies cure and show-cause notices for default.'),
    q(4107461, 'Career Skills', 'Contract Administration and Closeout', 'Final CPARS rating',
      'A contract ended with acceptable delivery but repeated late status reports and avoidable rework. What should the final performance record do?',
      'Document balanced performance facts under FAR 42.15 CPARS with contract requirements, impacts, contractor response, and ratings support',
      [
        ['Write only nice comments because the vendor was friendly', 'Inaccurate positive CPARS misleads future evaluators and creates a record-integrity concern under FAR 42.1503.'],
        ['Punish the contractor with vague adjectives and no examples', 'FAR 42.1503(b)(2) requires CPARS narratives to support the rating with examples; vague punitive ratings fail contractor rebuttal under FAR 42.1503(d).'],
        ['Treat the acquisition record as unnecessary once the work is complete', 'FAR 42.1502 requires CPARS evaluations for contracts above defined thresholds; skipping them is non-compliance.'],
      ],
      'Past performance records under FAR 42.15 (CPARS) must be factual, balanced, and tied to contract requirements. Future buyers and the contractor\'s rebuttal process both depend on the supporting detail.'),
  ],

  // ---------------------------------------------------------------------------
  // NATIONAL SECURITY POLICY ROADMAP
  // Syllabus chapters (national_security_policy_roadmap.md):
  //  1. Strategy, Interests, and Threats
  //  2. Intelligence and Evidence
  //  3. Instruments of National Power
  //  4. Interagency Process and Decision Making
  //  5. Crisis and Policy Communication
  // ---------------------------------------------------------------------------
  nationalSecurityPolicyRoadmap: [
    // Chapter 1: Strategy, Interests, and Threats
    q(4103124, 'Career Skills', 'Strategy, Interests, and Threats', 'Interest first',
      'A policy memo describes a foreign cyber incident in detail but never states why it matters to the United States. What is the key missing element?',
      'The national interest at stake — typically framed against the National Security Strategy categories — and the policy relevance of the threat',
      [
        ['A longer history section with no decision point', 'NSC staff returns memos that are "background to the horizon" without a decision question; length without relevance is the failure mode.'],
        ['A list of every cyber tool ever used', 'Tool enumeration is intelligence detail; the policy question is what the US should do, which requires an interest, not a catalog.'],
        ['A more dramatic title', 'Title drama is not a policy input; the NSC packet template asks for the decision question on page one.'],
      ],
      'Threat analysis is useful for policy only when it connects facts to interests, vulnerability, severity, and decisions. Detail without relevance can obscure the point.'),
    q(4103129, 'Career Skills', 'Strategy, Interests, and Threats', 'Capability and intent',
      'A country has missiles that can reach an ally, but current reporting shows no preparation to launch. Which distinction should the threat brief make?',
      'Capability is present, while intent and warning indicators remain uncertain — the classic threat = capability × intent × opportunity framing',
      [
        ['There is no threat because intent is unproven', 'Capability alone matters when surprise-attack scenarios are possible; the framing requires all three factors, not intent in isolation.'],
        ['Launch is certain because capability exists', 'Capability-as-certainty is the failure mode mirror-imaging analysis warns against; it overstates threat.'],
        ['Vulnerability is the same thing as intent', 'Vulnerability is a separate axis (the target\'s exposure); merging it with intent destroys the diagnostic value of the model.'],
      ],
      'Threat assessment should separate capability, intent, vulnerability, and indicators. Capability matters, but policy risk changes when intent or preparations shift.'),
    q(4103167, 'Career Skills', 'Strategy, Interests, and Threats', 'Assumption check',
      'A regional plan assumes allies will grant access during a crisis, but recent politics suggest that may be shaky. What should the risk section include?',
      'The access assumption, indicators it may fail, operational impact under the assumption\'s failure, mitigation options, and decision points',
      [
        ['A note that allies always agree when "things get serious"', 'Multiple post-2001 access denial cases (e.g., Turkey 2003) refute this assumption; planning needs the contingency.'],
        ['A bigger font for the word "partnership"', 'Typography is not a planning artifact; named indicators and mitigations are.'],
        ['No discussion because assumptions are awkward guests', 'Hidden assumptions are precisely what JCS planning doctrine (JP 5-0) requires to be surfaced.'],
      ],
      'Plans rest on assumptions. Naming fragile assumptions helps leaders watch indicators, prepare alternatives, and avoid discovering the problem at the worst possible hour.'),

    // Chapter 2: Intelligence and Evidence
    q(4103125, 'Career Skills', 'Intelligence and Evidence', 'Confidence label discipline',
      'An analyst has one reliable source, two unconfirmed reports, and a major collection gap. How should the intelligence-to-policy note handle the judgment?',
      'Separate evidence from judgment and state confidence (high/moderate/low per ICD 203), assumptions, and collection gaps',
      [
        ['Present the judgment as certain because policymakers dislike nuance', 'ICD 203 Analytic Standards explicitly require confidence labels; falsely certain judgments are the Iraq WMD post-mortem pattern.'],
        ['Hide the collection gap until someone asks', 'Concealing gaps violates ICD 203 Analytic Standard 4 (incorporating analysis of alternatives) and the analytic objectivity standard.'],
        ['Average the sources into a precise percentage without rationale', 'Numerical pseudo-precision misrepresents underlying uncertainty; ICD 203 prefers worded confidence with reasoning.'],
      ],
      'Policy notes should distinguish what is known, inferred, assumed, and missing. ICD 203 sets the IC standards for confidence levels and analytic objectivity.'),
    q(4103163, 'Career Skills', 'Intelligence and Evidence', 'Source caveat on OSINT',
      'A briefing relies on social media videos that appear authentic but have uncertain location and timing. What should the analyst include?',
      'Source caveats, verification status (geolocation, chronolocation), confidence level per ICD 203, and what additional evidence would confirm or disconfirm',
      [
        ['Treat the videos as confirmed because they are vivid', 'Vividness is not verification; the IC has well-documented OSINT verification methodologies precisely because vivid material can be wrong.'],
        ['Exclude open-source material even when it is relevant and reliable', 'OSINT is a recognized IC discipline (e.g., DNI Open Source Enterprise); blanket exclusion discards valuable information.'],
        ['Describe uncertainty only in a tiny footnote no one can see', 'ICD 203 places confidence and source caveats in the body, not footnotes; this is an analytic-standards failure.'],
      ],
      'Evidence can be useful without being perfect. Policymakers need to know what is verified, what is inferred, and what would change the assessment.'),
    q(4103168, 'Career Skills', 'Intelligence and Evidence', 'Indications and warning',
      'Leaders want to know whether a rival is moving from coercive signaling toward actual attack preparation. What should the warning product track?',
      'Specific I&W indicators with baseline activity, changes over time, confidence per ICD 203, and pre-defined thresholds for escalation',
      [
        ['Only the analyst\'s "gut feeling"', 'Gut-feel warnings cannot be operationalized; I&W methodology requires defined indicators against baselines.'],
        ['Every raw report with no pattern or threshold', 'Raw report dumps force the consumer to do the analysis; the warning product\'s value is the threshold judgment.'],
        ['The rival leader\'s horoscope', 'Astrology is not an intelligence discipline; defined indicator-based warning is.'],
      ],
      'Warning work turns scattered reporting into indicators leaders can monitor. Baselines and thresholds make it easier to see when risk is actually changing.'),

    // Chapter 3: Instruments of National Power
    q(4103126, 'Career Skills', 'Instruments of National Power', 'DIME tool fit',
      'The objective is to signal resolve without immediate military escalation while preserving allied unity. Which options-matrix comparison is most useful?',
      'Diplomatic, Informational, Military, and Economic tools (DIME) with benefits, risks, constraints, and likely reactions for each',
      [
        ['Only the most forceful military option', 'Single-instrument analysis violates the deliberate options-development requirement; PPD-1 NSC process expects comparative options.'],
        ['Only the cheapest tool regardless of objective', 'Cost without objective fit is a budgeting heuristic, not a strategy choice; effective instruments may be expensive.'],
        ['A list of agencies with no policy instruments', 'Agencies are actors; instruments are tools. Listing one without the other confuses the level of analysis.'],
      ],
      'National security options should compare tools against the objective and likely reactions. DIME (or DIMEFIL adding Financial, Intelligence, Law-enforcement) helps expose tradeoffs and second-order effects.'),
    q(4107935, 'Career Skills', 'Instruments of National Power', 'Sanctions targeting evidence',
      'A sanctions proposal names a logistics broker but lacks evidence tying them to the prohibited activity. What should the policy team request?',
      'A documented evidentiary package linking conduct, ownership/control, and a specific IEEPA / OFAC authority (e.g., Executive Order designations under 50 USC 1701-1708)',
      [
        ['List the broker because their name sounds suspicious', 'IEEPA designations require documented conduct meeting specific E.O. criteria; OFAC will reject unsupported nominations.'],
        ['Treat sanctions as a discretionary signal rather than an evidence-based legal tool', 'Sanctions designations are subject to administrative review (OFAC reconsideration, APA challenges); evidence is required, not optional.'],
        ['Announce the target and collect support later', 'Public announcement before evidence is locked produces reversals and damages the designation program\'s credibility.'],
      ],
      'Sanctions targeting under IEEPA (50 USC 1701-1708) needs legal and evidentiary support. OFAC designations are administrative actions reviewable on the record.'),
    q(4103131, 'Career Skills', 'Instruments of National Power', 'Second-order effects',
      'A proposed sanction may pressure the target government but also disrupt an ally energy supply chain. What should the options matrix highlight?',
      'The benefit, allied impact, mitigation options (general licenses, carve-outs, partner reimbursement), and likely target response',
      [
        ['Only the intended pressure on the target', 'Single-axis analysis misses the documented spillover patterns that have caused multiple sanctions packages to require post-hoc general licenses.'],
        ['Only whether the sanction sounds tough in a headline', 'Headline appeal is not a Treasury or NSC analytic standard; second-order analysis is.'],
        ['Only the drafting agency\'s preferred option', 'Single-agency framing is what the NSC interagency process exists to escape; options must reflect equities.'],
      ],
      'Policy tools create second-order effects. A strong options matrix surfaces benefits, risks, constraints, partner reactions, and mitigation ideas before leaders decide.'),
    q(4107938, 'Career Skills', 'Instruments of National Power', 'Leahy vetting',
      'A partner unit requested equipment, but credible reports allege recent abuses by that unit. What should the policy staff check?',
      'Applicable Leahy Law (22 USC 2378d for State / 10 USC 362 for DoD) human-rights vetting and any required remediation/exception process',
      [
        ['Ship equipment because partnership is easier without paperwork', 'Leahy vetting is statutory; failure to vet is a violation, not a paperwork shortcut.'],
        ['Treat reporting as optional until outside scrutiny begins', 'State Department\'s INVEST process aggregates open-source reporting precisely so credible reports cannot be ignored.'],
        ['Let the partner certify itself as fine', 'Self-certification by the recipient is not a Leahy compliance method; the US government performs the vetting.'],
      ],
      'Security assistance can carry legal constraints. The Leahy Laws (22 USC 2378d for State assistance; 10 USC 362 for DoD training) require vetting and prohibit assistance to units credibly implicated in gross human rights violations.'),

    // Chapter 4: Interagency Process and Decision Making
    q(4103127, 'Career Skills', 'Interagency Process and Decision Making', 'Ownerless decision',
      'An NSC interagency meeting ends with broad agreement but no named implementation owner or next decision point. What should the memo fix?',
      'Identify the decision, stakeholders, owner, timeline, and unresolved issues — the standard tasker structure in NSC Summary of Conclusions',
      [
        ['Add more background so ownership feels less urgent', 'NSC Summary of Conclusions templates require taskers with owners and deadlines; ownership ambiguity defeats the process.'],
        ['Remove dissenting views to make the meeting look cleaner', 'NSC process explicitly preserves dissent so principals can resolve it; concealment is what triggers Goldwater-Nichols-style reform demands.'],
        ['Wait for agencies to "infer their tasks"', 'Inferred tasking does not produce action; the SoC has to assign explicitly.'],
      ],
      'Interagency process turns policy choices into action only when ownership and timing are clear. The NSC Summary of Conclusions is the standard vehicle.'),
    q(4103170, 'Career Skills', 'Interagency Process and Decision Making', 'Deputies packet structure',
      'A deputies-level meeting needs to decide between three policy options tomorrow, but the packet has 40 pages of background and no recommendation. What should be added?',
      'A decision memo with options, recommendation, tradeoffs, agency positions, legal authorities (Title 10 / Title 50 / 22 USC), and implementation steps',
      [
        ['A table of contents that apologizes for the 40 pages', 'Apology does not produce a decision; the deputies\' time requires options-and-tradeoffs front-loaded.'],
        ['More background until the decision "gets tired and leaves"', 'Decisions do not depart; they accumulate as backlog and create the next crisis.'],
        ['A recommendation hidden in an appendix footnote', 'Footnote recommendations fail principals-committee read-time; the recommendation belongs on page one.'],
      ],
      'Senior NSC meetings need decision architecture. A useful packet makes options, tradeoffs, constraints, and implementation consequences visible at decision speed.'),
    q(4103165, 'Career Skills', 'Interagency Process and Decision Making', 'Dissent capture',
      'Two agencies disagree about whether a proposed action will trigger retaliation, and the meeting chair wants the memo to sound unanimous. What should the drafter do?',
      'Record the disagreement, evidence behind each view, decision implications, and what would reduce uncertainty — the documented dissent practice in NSC and ICD 203 analytic standards',
      [
        ['Erase dissent so the memo feels tidy', 'Suppressed dissent is the failure mode the post-Bay-of-Pigs and post-Iraq-WMD reviews specifically targeted.'],
        ['Let the loudest agency become the official evidence', 'Volume is not evidence; the NSC process exists to surface analytic disagreement to principals, not to mute it.'],
        ['Move the disagreement to a hallway where records cannot find it', 'Hallway resolution destroys the record needed for accountability and future-policy learning.'],
      ],
      'Interagency memos are stronger when they preserve meaningful dissent. Leaders can decide better when they see the risk logic behind competing views.'),
    q(4107944, 'Career Skills', 'Interagency Process and Decision Making', 'Title 10 vs Title 50 lane',
      'A proposed activity has both military operational and covert action characteristics. What initial process question should staff raise?',
      'Whether the activity is Title 10 (military operations) or Title 50 (intelligence / covert action requiring a Presidential Finding and Gang of Eight notification under 50 USC 3093)',
      [
        ['Whether the lead agency prefers the more flexible authority', 'Authority is set by statute, not preference; mis-classifying triggers oversight violations.'],
        ['Whether the activity can be quietly handled outside both', 'Activities outside Title 10 and Title 50 lack legal basis; "quiet" is not an authority.'],
        ['Whether the State Department needs to know either way', 'Notification requirements are statute-specific; Title 50 covert action has Gang-of-Eight requirements that operate regardless of State equities.'],
      ],
      'Title 10 (Armed Forces) and Title 50 (War and National Defense, including intelligence) carry different authorities and oversight regimes. Misclassification creates statutory violations.'),

    // Chapter 5: Crisis and Policy Communication
    q(4103128, 'Career Skills', 'Crisis and Policy Communication', 'What changed',
      'A crisis update repeats yesterday\'s text while the adversary moved forces overnight and an ally requested public reassurance. What should the update lead with?',
      'What changed, why it matters, decisions needed, and the proposed public line — the NSC crisis-update template',
      [
        ['The oldest background paragraph', 'Stale background at the top is how decision-makers stop reading; the update has to start with new information.'],
        ['A full literature review of the region', 'Literature reviews are pre-crisis analysis; crisis updates are operational.'],
        ['A vague statement that "the situation remains dynamic"', '"Dynamic" without specifics is non-information; it satisfies no decision-maker question and burns their time.'],
      ],
      'Crisis communication should orient leaders quickly. Updates need changes since the last report, implications, decisions, messaging, and the next review point.'),
    q(4103166, 'Career Skills', 'Crisis and Policy Communication', 'Public line mismatch with classified reality',
      'The public statement says de-escalation is working, but classified reporting shows the adversary is mobilizing additional units. What should the policy team do?',
      'Reconcile the message with current facts, update decision makers, and propose a public line that preserves credibility, ally trust, and policy options',
      [
        ['Keep repeating the old line because consistency beats accuracy', 'Disprovable public lines burn credibility with allies, press, and the public; the credibility cost outlasts the crisis.'],
        ['Leak the classified reporting to win the press cycle', 'Unauthorized disclosure violates 18 USC 793 and similar statutes; it is also a single-cycle gain for a long-term sourcing loss.'],
        ['Say nothing internally because the statement is already drafted', 'Internal silence on a known mismatch is the documented failure mode that produces resignations and credibility crises.'],
      ],
      'Crisis messaging must stay connected to the evidence. Credible communication protects public trust, allied confidence, and policy flexibility.'),
    q(4107939, 'Career Skills', 'Crisis and Policy Communication', 'Unknown casualty count',
      'During a fast-moving incident, press asks for casualty numbers before agencies have reconciled reports. What should the spokesperson be given?',
      'Confirmed facts, what remains unverified, approved language, and the next update process',
      [
        ['A confident guess because silence feels awkward', 'Wrong casualty numbers force public retraction; the press conference cost is much higher than briefly bounded uncertainty.'],
        ['Every raw report with no caveats', 'Raw reports during fast-moving events conflict; releasing them without caveats produces public confusion the spokesperson then owns.'],
        ['A refusal to ever update until "history is complete"', 'Indefinite refusal abdicates the communication function; the next update process is the answer, not silence.'],
      ],
      'Crisis communication should be timely but bounded by evidence. Saying what is not yet confirmed can preserve credibility.'),
    q(4103171, 'Career Skills', 'Crisis and Policy Communication', 'After-action records',
      'After a fast-moving crisis, the team realizes decision logs, public lines, and partner notifications were scattered across chats. What should the after-action review recommend?',
      'A repeatable crisis-record process covering decisions, owners, messages, partner coordination, and follow-up actions — feeding NSC PR / NSPM update cycles',
      [
        ['Delete the chats and call it "institutional memory"', 'Deleting working records may also violate the Federal Records Act (44 USC 31); preservation is required, not optional.'],
        ['Declare success because everyone was busy', 'Activity is not outcome; the AAR exists to convert effort into structural improvement.'],
        ['Create a 200-page template no one will open during a crisis', 'AAR products must be operational; an unusable template guarantees the next crisis repeats the same gaps.'],
      ],
      'Crisis teams need lightweight records that survive the adrenaline. After-action reviews should turn painful friction into practical process improvements, and records preservation obligations under the Federal Records Act still apply.'),
    q(4220103, 'Career Skills', 'Crisis and Policy Communication', 'Capstone policy package',
      'A leader requests an integrated package on a developing crisis covering threat picture, intelligence assessment, options matrix, interagency memo, and crisis comms line. What is the right structure?',
      'A linked package — threat brief → intel note (ICD 203) → DIME options matrix → interagency decision memo → public-line proposal — with shared assumptions and explicit decision question',
      [
        ['Five disconnected documents with no shared assumptions', 'Disconnected products produce contradictions principals catch; the capstone is graded on coherence across the chain.'],
        ['Only the options matrix because it covers the choices', 'The options matrix without the threat and intel basis is unmoored; principals ask "based on what" within the first page.'],
        ['Only the public-line proposal because that is what people see', 'The public line is the last artifact in the chain; without the upstream products, it has no defensible basis.'],
      ],
      'The capstone integrates all five chapters into one coherent policy package. Each product answers a specific principals-committee question, but they share assumptions and decision logic.'),
  ],
}

export const careerAgentGeneratedRoadmapGovernmentQuestionsByTrack: Record<string, Question[]> = Object.fromEntries(
  Object.entries(careerAgentGeneratedRoadmapGovernmentBaseQuestionsByTrack).map(([trackId, questions]) => [
    trackId,
    runPolish(questions, [{ subTopics: CAREER_GOVERNMENT_SUB_TOPICS, mentorHints: CAREER_GOVERNMENT_MENTOR_HINTS, correctShortened: CAREER_GOVERNMENT_CORRECT_SHORTENED, source: 'careerGovernment' }]),
  ]),
)
