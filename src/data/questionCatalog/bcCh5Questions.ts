import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// BANK COMPLIANCE — Chapter 5: Investigations, SARs, and Quality Control
// ----------------------------------------------------------------------------
// 41 new questions (IDs 4420400–4420440) extending the existing nine BC Ch5
// items in careerAgentGeneratedRoadmapFinance.ts (4107418–4107421, 4107888–
// 4107892). The existing nine cover narrative discipline, escalation
// threshold, negative-news triage, customer explanation, SAR clock,
// tipping-off, no-tipping scripts, continuing activity, and QA trend; this
// pack deliberately broadens the coverage without re-treading those titles.
//
// US BSA/AML framework throughout. The voice matches the existing canonical
// bank: specific, evidence-anchored, no strawman distractors, bespoke
// whyWrong rationales tied to real DPAs and CMPs (TD Bank 2024 $3B,
// Wells Fargo, HSBC 2012, Deutsche Bank, Standard Chartered).
//
// Coverage targets (41 total):
//   - SAR filing requirements         (~7)  30-day clock, $5K threshold,
//                                            continuing-activity, e-filing
//   - SAR narrative discipline        (~6)  5 W's, factual vs speculative
//   - Investigation procedures        (~6)  KYC refresh, activity review,
//                                            pattern review, SoF verification
//   - Whistleblower / escalations     (~3)  tip lines, AML hierarchy,
//                                            no-retaliation rules
//   - Information sharing             (~4)  314(a), 314(b), MLATs
//   - Quality control / model val.    (~5)  independent testing, audit,
//                                            exam expectations, MRA remediation
//   - Enforcement and penalties       (~5)  CMPs, individual liability,
//                                            DPAs, criminal vs civil
//   - Recent enforcement              (~5)  TD 2024, Wells, HSBC, DB, StanChart
// ----------------------------------------------------------------------------

const SOURCE = 'Floe BC Ch5 canonical bank'

function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][],
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

const CHAPTER = 'Investigations, SARs, and Quality Control'

// Difficulty distribution: 12 at 3 (~29%), 21 at 4 (~51%), 8 at 5 (~20%).
export const BC_CH5_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // SAR filing requirements (7)
  4420400: 3, // 30-day clock from initial detection
  4420401: 4, // What "initial detection" means
  4420402: 3, // $5,000 SAR threshold
  4420403: 4, // No-threshold rule for terrorist financing / insider abuse
  4420404: 4, // Continuing-activity SAR cadence (90 days)
  4420405: 3, // E-filing through BSA E-Filing System
  4420406: 4, // 60-day extension when subject is unknown

  // SAR narrative discipline (6)
  4420407: 3, // 5 W's as the narrative spine
  4420408: 4, // Factual vs speculative language
  4420409: 4, // Naming counterparties and account numbers
  4420410: 4, // Avoiding conclusions the file cannot support
  4420411: 5, // Linking related SARs in the narrative
  4420412: 3, // Plain English over jargon and acronyms

  // Investigation procedures (6)
  4420413: 3, // KYC refresh when activity does not match profile
  4420414: 4, // Account-activity review window
  4420415: 4, // Transactional pattern review for structuring
  4420416: 4, // Source of funds verification standards
  4420417: 5, // Cross-account aggregation across the relationship
  4420418: 4, // Investigator independence from the front line

  // Whistleblower / employee escalations (3)
  4420419: 3, // Internal tip lines and intake
  4420420: 4, // AML reporting hierarchy and BSA Officer access
  4420421: 4, // No-retaliation rules and AMLA whistleblower program

  // Information sharing (4)
  4420422: 4, // 314(a) requests from law enforcement
  4420423: 4, // 314(b) voluntary FI-to-FI sharing
  4420424: 5, // 314(b) safe harbor scope
  4420425: 4, // MLAT requests vs subpoenas

  // Quality control / model validation (5)
  4420426: 3, // Independent testing as a BSA pillar
  4420427: 4, // Internal audit role vs second-line QA
  4420428: 4, // Model validation cadence for the AML monitoring system
  4420429: 5, // MRA vs MRIA and remediation discipline
  4420430: 4, // Regulatory exam expectations on alert backlogs

  // Enforcement and penalties (5)
  4420431: 3, // CMPs for willful BSA violations
  4420432: 4, // Individual liability under 31 USC 5321
  4420433: 4, // DPAs: what they are and what they require
  4420434: 5, // Criminal vs civil enforcement paths
  4420435: 4, // Lookback reviews ordered by regulators

  // Recent enforcement case patterns (5)
  4420436: 4, // TD Bank 2024 $3B — what actually went wrong
  4420437: 5, // Wells Fargo — fake-accounts era controls failure
  4420438: 4, // HSBC 2012 — cartel money and DPA conditions
  4420439: 5, // Deutsche Bank mirror trades — controls vs revenue
  4420440: 4, // Standard Chartered — Iran sanctions stripping
}

export const bcCh5Questions: Question[] = [
  // -------------------------------------------------------------------------
  // SAR FILING REQUIREMENTS (4420400–4420406)
  // -------------------------------------------------------------------------
  q(4420400, 'Career Skills', CHAPTER, '30-day SAR clock from initial detection',
    'A bank investigator concludes on March 1 that a customer\'s transactions meet the SAR standard. When does the regulatory clock to file the SAR start, and how long does the bank have under 31 CFR 1020.320?',
    'The clock starts on the date of initial detection of facts that constitute a basis for filing, and the SAR must be filed within 30 calendar days of that detection',
    [
      ['The clock starts when senior management signs off on the recommendation, and the bank has 30 days from sign-off', 'Management sign-off is an internal control, not the regulatory trigger. The 30 days run from initial detection of the facts, not from approval — that interpretation was a contributing factor in several DPA findings.'],
      ['The clock starts at the next quarterly review cycle, with 30 days from the start of that quarter', 'Quarter-end batching is exactly the practice regulators cite as a deficiency. The clock is event-driven from detection.'],
      ['The clock starts when the customer is contacted for an explanation, and the bank has 60 days', 'Customer contact during a SAR investigation is generally not required and raises tipping-off risk. It does not start the regulatory clock.'],
    ],
    'SAR timing under 31 CFR 1020.320 runs 30 calendar days from initial detection, with a single 60-day extension permitted only when no suspect has been identified. The trigger is the facts, not the workflow status.'),

  q(4420401, 'Career Skills', CHAPTER, 'What counts as initial detection',
    'An analyst raises an alert on April 5; a senior investigator reviews and confirms suspicion on April 18; the BSA Officer approves on April 25. Which date is the "initial detection" that starts the 30-day SAR clock?',
    'The earliest date on which the bank, through any employee, identified facts that may constitute a basis for filing — typically the date the analyst surfaced the qualifying facts, even if review continues afterward',
    [
      ['The date the BSA Officer formally approves the SAR, because only the BSA Officer can determine suspicion', 'BSA Officer approval is required to file, but it does not move the detection date. FinCEN guidance is explicit that initial detection is when facts first surface, not when sign-off completes.'],
      ['The date senior investigation confirms the suspicion, because preliminary alerts are not yet suspicion', 'Distinguishing "alert" from "suspicion" to delay the clock is a workflow shortcut, not a regulatory position. Examiners look at when facts were first known, not when labels changed.'],
      ['The date the activity originally occurred, because the bank should have detected it then', 'Hindsight detection is not the standard. The clock runs from when the bank actually identified the facts, which may be after the activity itself.'],
    ],
    'Initial detection is when the bank first identifies facts that may constitute a basis for filing. Banks that anchor on internal sign-off dates rather than first-fact dates routinely receive enforcement findings on stale SARs.'),

  q(4420402, 'Career Skills', CHAPTER, '$5,000 SAR threshold',
    'A customer conducts a series of unusual transactions totaling $3,200. The activity is suspicious but the aggregate does not reach $5,000. What does 31 CFR 1020.320 require?',
    'No SAR is required under the general suspicious-activity rule, which applies when aggregate funds involved are at least $5,000 and a suspect is identified (or $25,000 when no suspect is identified)',
    [
      ['A SAR must be filed regardless of amount whenever activity is unusual', 'Any-amount filing is not the rule and would flood FinCEN with low-signal reports. The general threshold is $5,000 with a suspect or $25,000 without.'],
      ['A CTR must be filed instead because the activity did not reach the SAR threshold', 'A CTR is for cash transactions over $10,000, not a substitute for a sub-threshold SAR. The two reports cover different things.'],
      ['A SAR is required only if the customer is on a sanctions list, regardless of amount', 'Sanctions screening drives blocking and OFAC reporting, not SAR thresholds. Conflating the two is a recurring exam finding.'],
    ],
    'The general SAR threshold is $5,000 with an identified suspect or $25,000 without. Banks should still document why sub-threshold activity was reviewed and not filed, but they should not file SARs that the rule does not require.'),

  q(4420403, 'Career Skills', CHAPTER, 'No-threshold rule for terrorism and insider abuse',
    'A bank identifies a $1,200 wire that appears linked to terrorist financing, and separately a $900 transaction that looks like insider abuse by a bank employee. Do the dollar thresholds apply?',
    'No — transactions involving suspected terrorist financing or insider abuse must be reported on a SAR regardless of amount, with no dollar threshold under 31 CFR 1020.320',
    [
      ['Yes — the $5,000 threshold applies to all SARs without exception', 'The rule explicitly carves out insider abuse and terrorist-financing transactions from the dollar threshold. Treating them as ordinary suspicious activity is a known exam finding.'],
      ['The terrorist-financing wire is reportable but insider abuse follows the $5,000 threshold', 'Both insider abuse (any amount) and terrorist financing (any amount) are explicit no-threshold categories under 31 CFR 1020.320(a)(2)(i)–(ii).'],
      ['Only OFAC notification is required for the terrorist-financing wire, not a SAR', 'OFAC blocking and a SAR are separate obligations and frequently overlap. A blocked transaction can also require a SAR.'],
    ],
    'Terrorist financing and insider abuse are explicit no-threshold SAR categories. The dollar floors that apply to ordinary suspicious activity do not apply here, which is why employee-related and counterterrorism alerts are routed for filing regardless of amount.'),

  q(4420404, 'Career Skills', CHAPTER, 'Continuing-activity SAR cadence',
    'A SAR was filed on a customer on January 15 for structuring. Similar activity continues into Q2. When should the bank consider filing a continuing-activity SAR under FinCEN guidance?',
    'No later than 120 days after the date of the previously filed SAR — FinCEN guidance recommends reviewing every 90 days and filing a continuing-activity SAR within 120 days of the last filing if suspicious activity continues',
    [
      ['Only if the activity changes in nature — otherwise the original SAR continues to cover it indefinitely', 'A single SAR does not cover indefinite continuing activity. FinCEN expects periodic continuing-activity filings so law enforcement has updated information.'],
      ['Within 30 days of any further suspicious transaction, restarting the SAR clock for each event', 'The 30-day clock applies to initial detection of new facts. Continuing activity is handled on the 90/120-day cadence, not by re-filing on every transaction.'],
      ['Only at year-end so all continuing-activity filings batch into a single report', 'Year-end batching is not the guidance and would produce stale information. The 90/120-day cadence exists precisely to avoid that.'],
    ],
    'FinCEN guidance is to review continuing suspicious activity every 90 days and file a continuing-activity SAR no later than 120 days after the prior filing. The cadence is well-defined and missing it is a frequent QA-and-exam finding.'),

  q(4420405, 'Career Skills', CHAPTER, 'BSA E-Filing System',
    'How does a US bank actually submit a SAR to FinCEN under current rules?',
    'Electronically through the BSA E-Filing System — paper SAR filings have not been accepted since 2013 and all filings use the FinCEN SAR (Form 111) submitted via the secure portal',
    [
      ['By mailing a paper SAR form to the FinCEN office in Vienna, Virginia', 'Paper filings have been mandatory-electronic since 2013. Mailing paper would be a non-filing.'],
      ['Through the bank\'s primary federal regulator (OCC, FDIC, or Federal Reserve), which forwards to FinCEN', 'Regulators receive copies on request but are not the filing channel. All SARs go directly to FinCEN through the E-Filing System.'],
      ['By fax to a designated FinCEN intake number, with a follow-up copy by mail', 'There is no fax-and-mail intake. The E-Filing System is the sole channel.'],
    ],
    'All SARs are filed electronically via the BSA E-Filing System using FinCEN Form 111. The bank\'s BSA Officer or a delegate holds the credentials, and submission timestamps from the system are what examiners and law enforcement use.'),

  q(4420406, 'Career Skills', CHAPTER, '60-day extension when subject is unknown',
    'On Day 28 of a SAR investigation, the investigator still cannot identify the suspect behind a series of suspicious wires. Does the bank get extra time, and on what condition?',
    'Yes — 31 CFR 1020.320 permits a single extension of up to 60 days (so 90 days total from initial detection) where no suspect has been identified, but only for that reason',
    [
      ['Yes — the bank can extend any SAR investigation by 60 days for operational convenience', 'The extension is narrowly available where no suspect has been identified. It is not a general operational buffer; using it that way is a documented exam finding.'],
      ['No — the 30-day clock is absolute and the bank must file with whatever information it has', 'The rule explicitly allows a 60-day extension when no suspect has been identified, so the 30-day clock is not absolute in that scenario.'],
      ['Yes — the bank can extend by 60 days as many times as needed until the suspect is identified', 'Only a single extension is permitted, capping the total at 90 days. Repeated extensions are not allowed.'],
    ],
    'The no-suspect extension is narrow: one extension, 60 additional days, total 90 days from detection. Banks that quietly extend for workflow reasons rather than identification reasons routinely receive late-filing findings.'),

  // -------------------------------------------------------------------------
  // SAR NARRATIVE DISCIPLINE (4420407–4420412)
  // -------------------------------------------------------------------------
  q(4420407, 'Career Skills', CHAPTER, 'Five W\'s as the narrative spine',
    'FinCEN guidance is clear that the SAR narrative should be built around the "five W\'s." What does that mean concretely for an investigator drafting Part V?',
    'Who is involved (subject, counterparties, accounts), what happened (transactions and patterns), when it occurred (dates and timeframes), where it happened (branches, jurisdictions, channels), and why it is suspicious (specific red flags) — supported by facts already in the file',
    [
      ['The five most material wires, the five largest deposits, the five highest-risk counterparties, the five-day review window, and the five-step escalation', 'The five W\'s are who/what/when/where/why, not "five examples of things." Inventing a different framework will not pass QA against FinCEN guidance.'],
      ['Whoever drafted the alert, whatever the system flagged, whenever the alert closed, wherever the bank operates, and why the investigator believes the customer is innocent', 'The narrative is about the suspicious activity, not about the investigator\'s belief in innocence. Framing it as a defense of the customer is one of the most common QA-failure patterns.'],
      ['Whoever signed off, what process was followed, when each review step occurred, where the case sits in the queue, and why the bank chose to file', 'Workflow metadata is not the narrative. The narrative is the story of the activity, not the case management trail.'],
    ],
    'Five W\'s structure who, what, when, where, and why. A narrative that hits all five with facts from the file is what makes the SAR useful to law enforcement; a narrative that talks about the bank\'s process instead is what fails QA.'),

  q(4420408, 'Career Skills', CHAPTER, 'Factual vs speculative language',
    'An investigator writes: "The subject is almost certainly running a Ponzi scheme based on the unusual deposits." What is wrong with this sentence inside a SAR narrative?',
    'It states a legal conclusion the bank cannot prove, where the standard is to describe the facts that raised suspicion and let law enforcement assess the underlying crime',
    [
      ['Nothing — naming the suspected crime helps law enforcement triage the SAR', 'The bank\'s job is to report suspicious activity, not to charge a crime. Stating a legal conclusion exposes the bank, can mislead investigators, and routinely appears in QA findings.'],
      ['The phrase "almost certainly" is too weak — the SAR should say the subject is running a Ponzi scheme', 'Strengthening unsupported language is the opposite of the fix. The SAR should describe the deposits factually and let the suspicion follow from the facts.'],
      ['The sentence should be removed entirely and the narrative kept to a single paragraph', 'Narratives are usually longer than one paragraph and removing the suspicious-activity description is not the fix. The fix is restating it factually.'],
    ],
    'SAR narratives report facts and identify red flags. They do not adjudicate crimes. "Subject\'s deposits show pattern X, which is inconsistent with the stated business" is the right register; "subject is running a Ponzi" is not.'),

  q(4420409, 'Career Skills', CHAPTER, 'Naming counterparties and account numbers',
    'Drafting the SAR narrative on a structuring case, you have the counterparty\'s name, account number, and bank. What belongs in Part V (the narrative) under FinCEN guidance?',
    'All known counterparties by full name, account numbers, financial institutions, and identifying details should appear in the narrative — they are exactly what makes the SAR actionable for law enforcement',
    [
      ['Counterparty details belong only in the structured fields, never in the narrative', 'Structured fields and the narrative serve different purposes. The narrative ties counterparties to the activity in context; omitting them there breaks the story.'],
      ['Only the subject\'s details should be in the narrative — counterparty details would violate their privacy', 'SARs are confidential federal reports to law enforcement, not customer-facing. Including counterparties is the explicit FinCEN expectation.'],
      ['Counterparty names should be redacted or replaced with initials in the narrative for safety', 'Redaction defeats the purpose of the report. Law enforcement needs identifiers to act.'],
    ],
    'SAR narratives should include full counterparty identifiers, account numbers, and institutions. Sparse narratives that hide details behind structured fields are a recurring QA finding and reduce the SAR\'s value to law enforcement.'),

  q(4420410, 'Career Skills', CHAPTER, 'Avoiding conclusions the file cannot support',
    'The narrative drafter wants to write: "Subject is connected to organized crime networks operating in Eastern Europe." The file contains two wires to a single jurisdiction and one negative-news article whose match is uncertain. What is the right narrative move?',
    'Describe the wires, the jurisdiction, the negative-news article and the uncertainty of the match — let the reader draw the inference rather than assert a connection the file cannot support',
    [
      ['Drop the negative-news reference and write only about the wires, because adverse media is not evidence', 'Adverse media is a legitimate AML input. The fix is to characterize it honestly (uncertain match), not to suppress it.'],
      ['Write the sentence as drafted — the investigator\'s judgment carries weight', 'SAR judgment is communicated through facts. Asserting a connection the file does not establish is exactly what FinCEN guidance warns against and what enforcement actions cite.'],
      ['Replace the sentence with "Subject is presumed innocent" to avoid liability', 'A presumption-of-innocence disclaimer has no place in a SAR narrative. The narrative should describe activity and red flags, not editorialize about guilt or innocence.'],
    ],
    'A SAR narrative should let the file do the work. Conclusions that the underlying records cannot support both mislead law enforcement and create liability for the bank — they are a recurring DPA finding when narratives over-reach.'),

  q(4420411, 'Career Skills', CHAPTER, 'Linking related SARs in the narrative',
    'You are filing the third SAR on a customer in nine months, each on related but distinct activity. How should the new narrative handle the prior filings under FinCEN expectations?',
    'Reference the prior SARs by FinCEN document control number (DCN) and date in the narrative, summarize the relationship between filings, and avoid restating each prior narrative verbatim',
    [
      ['Treat each SAR as fully independent and make no reference to prior filings', 'Independent treatment hides the pattern that often matters most. FinCEN guidance is explicit about referencing prior filings on related activity.'],
      ['Copy the prior narratives in full into the new SAR for completeness', 'Wholesale copying creates clutter and obscures what is new. The point is to reference, not to repeat.'],
      ['Mention only that prior SARs were filed without identifying numbers or dates', 'A bare mention is not actionable. Law enforcement needs DCNs and dates to pull the prior filings.'],
    ],
    'Linking related SARs by DCN and date is what turns three isolated reports into a coherent picture for law enforcement. Failing to link related filings is one of the more common QA findings on continuing-activity work.'),

  q(4420412, 'Career Skills', CHAPTER, 'Plain English over jargon and acronyms',
    'The drafter is tempted to write: "Subject\'s ETD pattern and SoF inconsistency triggered MOM review; CDD refresh deferred pending ECB sign-off." What is wrong with this from a narrative-quality perspective?',
    'Internal acronyms and bank-specific jargon obscure the facts from law enforcement readers who do not share the bank\'s vocabulary — the narrative should be written in plain English with terms spelled out',
    [
      ['Nothing — using technical AML terminology demonstrates investigator expertise', 'Demonstrating expertise to law enforcement is not the goal. Readability is — and acronyms hostile to outside readers are a recurring QA finding.'],
      ['The acronyms are fine; the problem is the sentence is too short and needs more detail', 'Length is a separate issue. The specific defect here is reader-hostile shorthand that obscures the facts.'],
      ['The acronyms are fine if a glossary is attached at the end of the narrative', 'A glossary patches the symptom rather than fixing it. The narrative itself should be readable by an outside investigator on the first pass.'],
    ],
    'SAR narratives are read by federal and state law enforcement who do not work inside the bank. Plain English, with internal terms spelled out at first use, is what makes a SAR usable — not bank-internal shorthand.'),

  // -------------------------------------------------------------------------
  // INVESTIGATION PROCEDURES (4420413–4420418)
  // -------------------------------------------------------------------------
  q(4420413, 'Career Skills', CHAPTER, 'KYC refresh when activity does not match profile',
    'An alert review shows wire activity that is materially inconsistent with the customer\'s stated occupation and expected activity at onboarding. What is the right investigation step before deciding disposition?',
    'Trigger a CDD refresh to update occupation, source of funds, expected activity, and beneficial ownership — and assess whether the customer\'s risk rating should change as a result',
    [
      ['Close the alert because the wire activity is more recent than the onboarding profile and therefore more accurate', 'Recency does not validate. Onboarding profiles exist precisely so that drift can be flagged and tested. The drift is the signal, not the answer.'],
      ['File a SAR immediately on the profile mismatch alone, without further KYC work', 'Profile mismatch is a red flag, not a complete basis. The standard is reasonable suspicion based on the totality of facts, which usually requires the KYC refresh first.'],
      ['Update the customer profile in the system to match the new activity and close the alert', 'Silently rewriting the profile to fit the activity is an audit-trail violation and a documented enforcement pattern. Profile updates are an output of the refresh process, not a substitute for it.'],
    ],
    'Drift between onboarding profile and current activity is what CDD refresh is designed to address. Banks that close alerts by rewriting profiles, or that skip the refresh entirely, generate findings under 31 CFR 1010.230 and the CDD Rule.'),

  q(4420414, 'Career Skills', CHAPTER, 'Account-activity review window',
    'You are investigating an alert on June 15. The alert is for a single wire, but the customer has been active for three years. What review window should you use under typical bank policy and FinCEN expectations?',
    'A lookback sufficient to characterize the activity — commonly 90 days to 12 months depending on alert type and customer risk, with the rationale for the window documented in the case file',
    [
      ['Only the single wire that triggered the alert, because expanding the window expands the investigation unnecessarily', 'Single-transaction reviews routinely miss the pattern that is the real signal. Expanding to a meaningful window is core investigation discipline.'],
      ['The entire three-year history of the relationship in every case, regardless of alert type', 'A full-history review for every alert is operationally untenable and not the standard. The window should fit the alert and the risk.'],
      ['Whatever window the investigator personally prefers, with no documentation required', 'Undocumented window selection is exactly what QA flags. The choice should be policy-driven and recorded.'],
    ],
    'A defensible review window fits the alert and the customer\'s risk. The discipline is to choose deliberately, document the choice, and expand if the initial window reveals further pattern. Single-transaction tunnel vision is a frequent root cause of missed SARs.'),

  q(4420415, 'Career Skills', CHAPTER, 'Transactional pattern review for structuring',
    'A customer makes 11 cash deposits of $9,500 across four branches over six business days. The bank\'s monitoring system did not generate a structuring alert because no single transaction exceeded $10,000. What investigation step is required?',
    'Aggregate deposits across branches and over the multi-day window to test the structuring pattern, then evaluate against 31 USC 5324 structuring criteria regardless of whether the automated system fired',
    [
      ['No investigation is needed because each transaction is below the $10,000 CTR threshold', 'Sub-threshold cash deposits aggregating to a structuring pattern are the textbook 5324 violation. The CTR threshold is what defines structuring, not what excuses it.'],
      ['File a CTR for the aggregate amount and consider the matter closed', 'Aggregation may trigger CTR obligations under 31 CFR 1010.313, but the structuring pattern itself separately requires SAR consideration. Filing one report does not satisfy the other.'],
      ['Contact the customer to ask why deposits are split, then close the alert based on the explanation', 'Asking the customer is tipping-off territory and a common DPA finding. Investigators should evaluate the pattern against external evidence, not request a self-serving explanation.'],
    ],
    'Structuring under 31 USC 5324 is the textbook reason aggregated pattern review exists. Banks that defer to single-transaction alerting and ignore cross-branch, cross-day aggregation are exactly the banks that show up in continuing-activity findings.'),

  q(4420416, 'Career Skills', CHAPTER, 'Source of funds verification standards',
    'A high-net-worth customer deposits $2M and explains the source as "investment proceeds." What is the SoF verification standard the bank should apply under FinCEN CDD expectations?',
    'Obtain reasonable documentation supporting the stated source — broker statements, sale agreements, prior tax filings, or counterparty confirmation — and document the verification chain in the file',
    [
      ['Accept the customer\'s verbal explanation, because high-net-worth customers are presumed legitimate', 'Wealth tier is not an SoF substitute. Private bank DPAs (including the well-known Swiss-bank cases) repeatedly cited acceptance of verbal SoF as the central control failure.'],
      ['Decline the deposit because $2M is too large to verify in any reasonable time', 'Refusing to verify rather than verifying is operational avoidance. The standard is reasonable documentation, not impossibility.'],
      ['Run the customer through sanctions screening and treat a clear screen as SoF verification', 'Sanctions screening and SoF are distinct controls. A clean OFAC screen says nothing about whether the $2M actually came from investment proceeds.'],
    ],
    'Source-of-funds verification needs reasonable documentation proportionate to risk and amount, with the verification chain recorded. The recurring enforcement pattern in private banking is exactly this: stated explanations accepted without supporting documents.'),

  q(4420417, 'Career Skills', CHAPTER, 'Cross-account aggregation across the relationship',
    'A customer holds a personal checking account, a joint account with a spouse, an LLC operating account, and an LLC payroll account. Suspicious activity appears in two of the four. How should the investigation handle the relationship?',
    'Aggregate the analysis across all accounts the customer controls or beneficially owns, because the customer — not the individual account — is the unit of suspicion under BSA/AML',
    [
      ['Investigate each account in isolation to keep cases manageable', 'Single-account tunnel vision is one of the most common reasons banks miss the broader scheme. The customer relationship is the unit, not the account number.'],
      ['Investigate only the two accounts where the system fired alerts', 'Limiting to the firing accounts ignores funds movement and pattern across the relationship — and several DPA narratives describe exactly that failure mode.'],
      ['Investigate the LLC accounts only, because business accounts carry higher AML risk', 'Risk weighting does not justify ignoring linked personal accounts. Funds flow between personal and business accounts is often the pattern.'],
    ],
    'BSA/AML investigations are relationship-centric. The customer (and their beneficial-ownership graph) is the unit of suspicion, not a single account. Banks that built case-management around account IDs rather than party IDs routinely show up in enforcement narratives.'),

  q(4420418, 'Career Skills', CHAPTER, 'Investigator independence from the front line',
    'A relationship manager pushes back on a SAR recommendation, arguing that the customer is "one of the bank\'s most important." How should the BSA/AML function handle this under second-line independence principles?',
    'The investigation and filing decision rest with the BSA/AML function independent of business-line revenue considerations — RM input is informational, not authoritative, and should be documented and weighed but cannot override the suspicion analysis',
    [
      ['Defer to the RM because they have the deepest customer relationship', 'Business-line override of AML decisions is the central failure pattern in multiple major enforcement actions. RM relationships inform context; they do not control filings.'],
      ['Escalate the dispute to the CEO for tie-breaking', 'BSA Officer authority on SAR decisions exists precisely to keep this out of business-revenue lines of authority. CEO arbitration on individual SARs is the wrong structure.'],
      ['Drop the SAR recommendation and re-review in 90 days', 'Deferring a SAR for business-relationship reasons is a documented violation. The clock has already started.'],
    ],
    'Second-line independence is one of the BSA pillars in practice. The recurring enforcement story — TD, Wells Fargo, HSBC and others — is what happens when revenue-generating units can override AML decisions. The BSA Officer has and must use independent authority.'),

  // -------------------------------------------------------------------------
  // WHISTLEBLOWER / EMPLOYEE ESCALATIONS (4420419–4420421)
  // -------------------------------------------------------------------------
  q(4420419, 'Career Skills', CHAPTER, 'Internal tip lines and intake',
    'A teller suspects a colleague is helping a customer structure deposits. The bank operates an AML/ethics hotline. What is the right escalation path?',
    'Report through the AML hotline (or directly to the BSA Officer) with the specific facts observed, preserving the option of confidential or anonymous reporting per bank policy',
    [
      ['Confront the colleague directly to give them a chance to explain', 'Direct confrontation between peers on an active suspicion is exactly what the hotline structure is designed to prevent — it risks tipping-off, evidence loss, and retaliation.'],
      ['Tell the customer to stop structuring deposits', 'Telling the customer is a textbook tipping-off violation, irrespective of whether a colleague is also involved.'],
      ['Wait until quarterly QA to raise it through a written report', 'Quarterly batching defeats the point of an escalation channel. Suspicions of insider abuse, including structuring assistance, are no-threshold SAR territory and need immediate routing.'],
    ],
    'Hotlines and direct BSA Officer access exist so that suspicions — including those involving colleagues — move to the right function quickly and confidentially. Delaying or peer-confronting are the two most common failure modes.'),

  q(4420420, 'Career Skills', CHAPTER, 'AML reporting hierarchy and BSA Officer access',
    'A BSA/AML analyst believes their own manager is suppressing alerts. The bank\'s policy says the analyst can escalate to the BSA Officer directly, bypassing the manager. Why does this design exist?',
    'Independent BSA Officer access (typically with a reporting line into the board or audit committee) is a structural control that protects the alert pipeline from any single supervisor with operational or business-line incentives',
    [
      ['It exists for show — in practice analysts always escalate through their direct manager first', 'Treating direct-access channels as ceremonial is exactly what enforcement actions name. The structural protection has to be usable in practice.'],
      ['It exists so analysts can complain about HR issues separately from AML issues', 'HR concerns route through HR. The BSA Officer line is for AML/BSA concerns specifically and the supervisor bypass is part of the AML control fabric.'],
      ['It exists only when the analyst can prove the manager is acting in bad faith', 'Direct access does not require proof of bad faith. The point is to allow concerns to reach the right authority without gating on the suspected actor.'],
    ],
    'BSA Officer independence and a direct escalation line that bypasses business-line management are part of the BSA pillars in practice. Enforcement actions repeatedly describe what happens when this line existed on paper but was discouraged in practice.'),

  q(4420421, 'Career Skills', CHAPTER, 'No-retaliation rules and AMLA whistleblower program',
    'An employee reports suspected BSA violations and is later passed over for promotion. What protections exist, and what should compliance know about the AMLA whistleblower program?',
    'The Anti-Money Laundering Act of 2020 created an enhanced whistleblower program offering up to 30% of monetary sanctions recovered (now subject to amendments raising minimums) and explicit anti-retaliation provisions enforced through the Department of Labor',
    [
      ['There are no specific federal protections for BSA whistleblowers — they rely on general employment law', 'The AMLA of 2020 explicitly created a SEC-style whistleblower program for BSA/AML violations with statutory anti-retaliation. Treating the area as bare employment law is out-of-date.'],
      ['Protection exists only for whistleblowers who report externally to FinCEN, not for internal reporters', 'Internal reporters are protected. Restricting protection to external reporting would defeat the program\'s purpose and is not the law.'],
      ['Whistleblowers must wait until the bank is sanctioned before any protection applies', 'Anti-retaliation protections apply from the time of the protected disclosure, not after the fact. Waiting for sanctions to attach defeats the design.'],
    ],
    'The AMLA 2020 whistleblower program, amended in 2022 to add a 10% minimum award, materially changed the BSA enforcement landscape. Anti-retaliation is statutory and enforced through DOL, and banks now have to assume that internal reporters may also reach FinCEN.'),

  // -------------------------------------------------------------------------
  // INFORMATION SHARING (4420422–4420425)
  // -------------------------------------------------------------------------
  q(4420422, 'Career Skills', CHAPTER, '314(a) requests from law enforcement',
    'The bank receives a 314(a) request from FinCEN listing several individuals and entities of interest to a federal investigation. What is the bank required to do?',
    'Search records of accounts and transactions for matches across the named subjects, report any positive matches back to FinCEN within the specified timeframe (typically 14 days), and keep the request itself confidential',
    [
      ['Open a new investigation on every named subject regardless of whether records exist', 'A 314(a) search is a records check, not an investigation. Standing up a full case on every name across hundreds of requests would be operationally untenable and is not the rule.'],
      ['Contact the named subjects to ask if they have any information relevant to the request', 'Contacting subjects of a 314(a) request would be a serious confidentiality violation and would compromise the underlying federal investigation.'],
      ['Share the 314(a) request list with other banks to coordinate the response', 'Sharing a 314(a) list with other institutions is prohibited. The confidentiality of the list is strict.'],
    ],
    'Section 314(a) is a law enforcement information request: banks search their records, report matches confidentially to FinCEN, and do not contact subjects or share the list. Mishandling 314(a) confidentiality is a documented enforcement issue.'),

  q(4420423, 'Career Skills', CHAPTER, '314(b) voluntary FI-to-FI sharing',
    'Your bank wants to share information about a suspected money-laundering scheme with another bank that processed the other side of the transactions. What does Section 314(b) provide?',
    'A voluntary information-sharing framework between financial institutions that have filed appropriate notice with FinCEN, with a statutory safe harbor for sharing information related to suspected money laundering or terrorist financing',
    [
      ['Mandatory information sharing between any two banks on any AML concern', 'Section 314(b) is voluntary, not mandatory, and is scoped to ML/TF concerns — not any AML concern. The notice requirement and scope matter.'],
      ['A FinCEN-directed request that compels the other bank to share customer records', 'Mandatory disclosure is the 314(a) pathway driven by law enforcement, not the voluntary 314(b) FI-to-FI pathway.'],
      ['Permission for banks to share information publicly through industry groups', 'Public sharing is not what 314(b) authorizes. The framework is bilateral between participating institutions and is confidential.'],
    ],
    'Section 314(b) is the voluntary FI-to-FI sharing channel with a statutory safe harbor for ML/TF-related information. The notice on file with FinCEN, the scope of sharing, and the confidentiality of the exchange are all defined by the rule.'),

  q(4420424, 'Career Skills', CHAPTER, '314(b) safe harbor scope',
    'Two banks share customer information under 314(b) on a suspected money-laundering case. The customer later sues both for breach of privacy. What protection does the safe harbor offer?',
    'The 314(b) safe harbor immunizes participating institutions from civil liability for sharing information in good faith within the scope of the rule (ML/TF), provided notice is on file with FinCEN and the sharing meets the rule\'s requirements',
    [
      ['No protection — banks face civil liability for any customer-information sharing regardless of statutory framework', 'The safe harbor exists precisely to remove that liability for in-scope sharing. The whole point of 314(b) is to make sharing safe.'],
      ['Protection only if the underlying suspicion is later proven through criminal conviction', 'Good-faith sharing within scope is protected; conviction is not the test. Requiring conviction would gut the protection.'],
      ['Protection only for sharing through formal FinCEN channels, not direct FI-to-FI', 'The safe harbor covers direct FI-to-FI sharing under the 314(b) framework. Routing through FinCEN is not required.'],
    ],
    'The 314(b) safe harbor is what makes the voluntary sharing channel actually usable. Good-faith sharing within the rule\'s scope, with notice on file, is protected from civil liability — and counsel typically reviews participation precisely so the bank can rely on that protection.'),

  q(4420425, 'Career Skills', CHAPTER, 'MLATs vs subpoenas',
    'A foreign government wants records on a US-account holder believed to be moving funds tied to a foreign predicate crime. What is the correct framework, and how does it differ from a US subpoena?',
    'The Mutual Legal Assistance Treaty (MLAT) process — the foreign authority requests assistance through DOJ, which then issues compulsory process under US law; foreign authorities cannot directly subpoena a US bank',
    [
      ['The foreign government can subpoena the US bank directly if their courts have jurisdiction over the account holder', 'Direct foreign subpoenas on US banks are generally not enforceable. The MLAT framework exists precisely to channel requests through DOJ.'],
      ['The bank should turn over records voluntarily to maintain international relationships', 'Voluntary disclosure to a foreign authority outside the MLAT channel can violate US law and customer-privacy rules. The MLAT process is the proper channel.'],
      ['MLATs are advisory only; banks may comply or decline at their discretion', 'Once DOJ issues compulsory process pursuant to an MLAT request, compliance is required. The discretion is not the bank\'s.'],
    ],
    'MLATs are the formal cross-border framework for evidence-gathering. Foreign authorities go through their counterpart in DOJ, which then issues legally enforceable process under US law. Direct foreign subpoenas to US banks are not the channel.'),

  // -------------------------------------------------------------------------
  // QUALITY CONTROL / MODEL VALIDATION (4420426–4420430)
  // -------------------------------------------------------------------------
  q(4420426, 'Career Skills', CHAPTER, 'Independent testing as a BSA pillar',
    'A bank\'s second-line BSA QA team has reviewed alert dispositions for years and reports findings to the BSA Officer. The OCC asks about "independent testing." What is the regulator actually asking about?',
    'Independent testing under the BSA pillars is typically performed by internal audit or a qualified external party — independent of both the first-line operations and the second-line BSA function — assessing the entire AML program against regulatory requirements',
    [
      ['The second-line QA team\'s alert review is the independent testing pillar', 'Second-line QA is a control inside the program, not the independent test of the program. The regulator is asking about the third-line audit or external review that sits outside both first and second lines.'],
      ['Independent testing means testing the alert system\'s code without involving compliance', 'IT/system testing is part of model validation but is not the BSA "independent testing" pillar, which is a program-level assessment.'],
      ['Independent testing is performed by FinCEN as part of supervisory exams', 'FinCEN supervisory work is regulatory examination, not the bank\'s required independent testing. The bank itself must arrange independent testing.'],
    ],
    'The four BSA pillars include independent testing — performed by internal audit or qualified external party, separate from the compliance function being tested. Confusing second-line QA with third-line independent testing is a recurring exam finding.'),

  q(4420427, 'Career Skills', CHAPTER, 'Internal audit role vs second-line QA',
    'The internal audit team and the second-line BSA QA team both review SAR files. How should their roles differ to avoid duplication and gap?',
    'Second-line QA tests individual file quality and feeds back to first-line investigators as a control inside the AML program; internal audit tests the design and effectiveness of the AML program as a whole, including QA itself, from outside the program',
    [
      ['They should perform identical reviews so findings can be reconciled across two sources', 'Duplicate identical reviews waste capacity and still miss the program-level test. The two functions cover different scopes by design.'],
      ['Internal audit does the day-to-day sampling and QA does the program-level test', 'This reverses the standard three-lines model. QA is closer to the work; audit is the independent test of the program.'],
      ['Internal audit reviews the legal interpretation; QA reviews the math', 'Splitting by content domain rather than by line-of-defense missed the point of independent testing. The split is structural, not topical.'],
    ],
    'Three lines of defense: first line does the work, second line oversees and tests within the program, third line (internal audit) tests the program from outside. QA tests file quality; audit tests whether the AML system as a whole — including QA — is designed and operating effectively.'),

  q(4420428, 'Career Skills', CHAPTER, 'Model validation cadence for AML monitoring',
    'The bank\'s transaction-monitoring system was last validated three years ago. Customer base, products, and typologies have changed significantly. What does sound model risk management practice require?',
    'Periodic re-validation under SR 11-7 model risk management standards — typically annually for material AML models, with additional triggers for material changes in inputs, scope, or performance',
    [
      ['Validation every five years is sufficient because monitoring rules rarely change materially', 'Five-year cycles do not match SR 11-7 expectations for material models. AML monitoring is high-impact and changes in customer base or products are precisely the triggers for re-validation.'],
      ['Validation is only required when the regulator specifically asks for it', 'Model validation is the bank\'s own obligation under model risk management. Waiting for the regulator is not the standard.'],
      ['The vendor\'s internal validation testing satisfies the bank\'s validation obligation', 'Vendor self-testing is input to validation, not a substitute. Independent validation by the bank (or its agent independent of the model developer and user) is what SR 11-7 requires.'],
    ],
    'SR 11-7 is the foundational model risk guidance and AML monitoring systems are material models under it. Annual validation, refreshed on material change, independent of model developer and user — that is the operating standard examiners apply.'),

  q(4420429, 'Career Skills', CHAPTER, 'MRA vs MRIA and remediation discipline',
    'Following an exam, the OCC issues both an MRA on transaction-monitoring tuning and an MRIA on board oversight of the AML program. What is the difference, and what does it mean for remediation?',
    'An MRA (Matter Requiring Attention) flags a material weakness that requires correction; an MRIA (Matter Requiring Immediate Attention) is more severe — closer to formal enforcement and requiring board-level attention and accelerated remediation, with potential consequences for the bank\'s supervisory rating',
    [
      ['MRAs and MRIAs are the same thing under different abbreviations', 'They are distinct supervisory tools. MRIAs sit closer to the consent-order line and carry materially more weight on supervisory ratings.'],
      ['MRIAs are informal observations that the bank may address at its discretion', 'MRIAs are exactly the opposite of optional. They are board-attention items and a step in the escalation toward formal enforcement.'],
      ['MRAs are issued by the OCC; MRIAs are issued only by the Federal Reserve', 'Both supervisory tools exist across the federal banking regulators. The distinction is severity within the supervisory ladder, not the issuing agency.'],
    ],
    'MRA and MRIA are the supervisory ladder rungs that signal escalating seriousness short of formal enforcement. MRIAs in particular need board engagement, accelerated remediation, and tight tracking — they are how regulators say "next stop is a consent order."'),

  q(4420430, 'Career Skills', CHAPTER, 'Regulatory exam expectations on alert backlogs',
    'During a BSA exam, the OCC notices a backlog of 8,000 unreviewed alerts averaging 90+ days old. What is the likely exam finding and remediation expectation?',
    'A finding that the bank has not allocated sufficient resources to discharge its monitoring obligation, with remediation requiring backlog clearance under a documented plan, root-cause analysis on tuning or staffing, and likely external assistance to scale rapidly',
    [
      ['The exam will note the backlog only if a missed SAR is identified within it', 'Examiners treat the backlog itself as a control failure. Missed SARs within the backlog escalate severity, but the backlog alone is a finding.'],
      ['Backlogs above 30 days are tolerated provided the bank is hiring', 'Hiring plans are a remediation input, not a defense. Examiners will measure backlog reduction, not headcount additions.'],
      ['The bank should clear the backlog quickly by closing old alerts as no-action', 'Mass-closing aged alerts to clear backlog is exactly the practice cited in multiple enforcement actions (notably in 2024). Backlog clearance has to be substantive review, not workflow shortcut.'],
    ],
    'Alert backlogs are a structural exam finding regardless of whether a specific SAR was missed. The remediation is substantive review under a documented plan — the 2024 enforcement environment, particularly TD\'s case, illustrates what happens when banks clear backlogs by closing without review.'),

  // -------------------------------------------------------------------------
  // ENFORCEMENT AND PENALTIES (4420431–4420435)
  // -------------------------------------------------------------------------
  q(4420431, 'Career Skills', CHAPTER, 'CMPs for willful BSA violations',
    'A bank willfully violates the BSA program requirement under 31 USC 5318(h). What civil money penalty exposure does the bank face?',
    'Up to $25,000 per day per violation under 31 USC 5321 (adjusted for inflation, currently materially higher), with no cap on aggregate exposure across multiple violations — and potential parallel exposure for officers and directors',
    [
      ['A capped penalty of $100,000 regardless of duration or number of violations', 'There is no aggregate cap. Per-day, per-violation structures are how multi-billion-dollar BSA penalties accumulate (TD Bank 2024 being the recent example).'],
      ['No civil penalty if the bank cooperates with the investigation — penalties are only for non-cooperative banks', 'Cooperation affects penalty calibration but does not eliminate exposure for willful violations. Cooperation credit is a discount, not an exemption.'],
      ['Civil penalties are imposed only when criminal charges are also filed', 'CMPs are independent of criminal charges and can be imposed without them. The two tracks frequently run in parallel but neither requires the other.'],
    ],
    'BSA CMPs under 31 USC 5321 are per-day, per-violation and inflation-adjusted, with parallel exposure for institution-affiliated parties. That structure is why headline BSA penalties stack into the billions — TD\'s 2024 settlement being the most recent illustration.'),

  q(4420432, 'Career Skills', CHAPTER, 'Individual liability under 31 USC 5321',
    'A bank\'s BSA Officer knowingly suppresses SAR filings to retain a major customer. What individual liability exists separately from the bank\'s liability?',
    'The BSA Officer faces personal civil money penalties under 31 USC 5321 and potential criminal liability under 31 USC 5322, plus regulatory enforcement that can include personal bars from the banking industry',
    [
      ['Only the bank is liable — individual officers are shielded as long as they were performing their job functions', 'There is no general "job functions" shield in BSA enforcement. Willful conduct by individuals is the explicit target of 31 USC 5321(a)(1) personal CMP authority.'],
      ['Individual liability requires the officer to have personally benefited financially', 'Personal benefit is not the BSA standard. Willful failure to discharge BSA duties is enough, with or without personal enrichment.'],
      ['Individual liability is theoretical — regulators rarely pursue named officers', 'Recent enforcement (including the 2024 wave) explicitly targets named individuals with personal CMPs and industry bars. The "theoretical" framing is out of date.'],
    ],
    'Personal liability under 31 USC 5321(a)(1) and criminal liability under 31 USC 5322 attach to institution-affiliated parties. The 2024 enforcement cycle and the AMLA whistleblower framework have made individual accountability materially more real, not less.'),

  q(4420433, 'Career Skills', CHAPTER, 'DPAs: what they are and what they require',
    'A bank under criminal BSA investigation is offered a Deferred Prosecution Agreement (DPA) by DOJ. What does that typically mean and require?',
    'DOJ files but does not pursue charges for a defined term (often 3–5 years) provided the bank meets agreed obligations — typically including admitted facts, remediation, an independent monitor, ongoing cooperation, and financial penalty; failure to meet obligations can revive prosecution',
    [
      ['A settlement that fully closes the matter immediately with no future obligations', 'The "deferred" in DPA means obligations continue through the term, with the monitor and remediation tracked. A clean walk-away is a non-prosecution agreement (NPA) or declination, not a DPA.'],
      ['An agreement that the bank will not face civil penalties either', 'DPAs address the criminal exposure track. Civil regulatory penalties typically continue and are often paid in parallel.'],
      ['A guaranteed conviction the bank pleads to in exchange for cooperation', 'A plea is a guilty plea, not a DPA. DPAs defer prosecution rather than result in a conviction, provided the bank meets the agreement.'],
    ],
    'DPAs are the workhorse of large bank BSA enforcement — HSBC 2012, Standard Chartered, Deutsche Bank, TD 2024 all involved DPAs with monitors and multi-year obligations. They defer criminal prosecution conditioned on substantial remediation, not on a quick admission and exit.'),

  q(4420434, 'Career Skills', CHAPTER, 'Criminal vs civil enforcement paths',
    'A bank\'s BSA failures attract attention from both FinCEN and the Department of Justice. What is the relationship between the civil and criminal paths?',
    'They run in parallel — FinCEN and federal banking regulators pursue civil money penalties and consent orders under the BSA, while DOJ pursues criminal liability under 31 USC 5322 (and sometimes related statutes); a single course of conduct can generate liability on both tracks',
    [
      ['Only one track at a time — the bank either faces civil or criminal action, not both', 'Parallel proceedings are standard in major BSA cases. The same facts routinely generate civil penalties and DPAs at the same time, as in HSBC, Standard Chartered, and TD.'],
      ['DOJ acts only after civil regulators decline to pursue the matter', 'DOJ and regulators frequently coordinate but the criminal track is not gated on civil declination. They often act together.'],
      ['Criminal exposure exists only for individuals, never for the institution', 'Institutional criminal liability under the BSA does exist and has been used (notably in the HSBC and TD cases). Both individuals and institutions can face criminal exposure.'],
    ],
    'The criminal and civil paths in BSA enforcement are parallel, often coordinated. A single set of facts can produce a FinCEN civil penalty, regulator consent orders, and a DOJ DPA or plea — and that is the pattern most recent major actions actually follow.'),

  q(4420435, 'Career Skills', CHAPTER, 'Lookback reviews ordered by regulators',
    'A consent order directs the bank to conduct a "lookback review" covering five years of transactions through previously-deficient monitoring rules. What does this typically involve?',
    'A retrospective review — often by an external firm under regulator oversight — of historical alerts and transactions through revised typologies, filing any SARs that the deficient system missed, on a strict timeline, with reporting back to the regulator',
    [
      ['A statistical sampling exercise to estimate how many SARs were missed without filing additional reports', 'Lookbacks generally require filing the SARs that the missed activity warrants, not just estimating the count. Statistical estimation alone does not discharge the obligation.'],
      ['A purely internal review with no external involvement or regulator reporting', 'External oversight is typical and the reporting cadence back to the regulator is part of the consent-order structure. Purely internal lookbacks are not what consent orders contemplate.'],
      ['A forward-looking change to monitoring with no review of historical periods', 'Forward changes are separately required. The "lookback" by definition addresses past periods that the deficient system covered.'],
    ],
    'Lookbacks are one of the most expensive and most common parts of BSA consent orders. They surface historical SARs that the deficient system missed, run on tight regulator-supervised timelines, and frequently require third-party execution at significant cost.'),

  // -------------------------------------------------------------------------
  // RECENT ENFORCEMENT CASE PATTERNS (4420436–4420440)
  // -------------------------------------------------------------------------
  q(4420436, 'Career Skills', CHAPTER, 'TD Bank 2024 — what actually went wrong',
    'In October 2024, TD Bank entered a guilty plea and DPA with a combined ~$3B in penalties — the largest BSA action against a US bank. Which control failures sit at the center of the case?',
    'A monitoring program that failed to monitor a large share of activity for years, including known money-laundering typologies, with internal warnings and budget constraints documented — and specific employee involvement in facilitating laundering networks',
    [
      ['A one-time CTR processing error that resulted in late filings across a single quarter', 'A processing error is not what produces a $3B penalty. The TD case involved multi-year program-level failures and specific facilitation, which is why the penalty stacked.'],
      ['Failure to screen against the OFAC SDN list for foreign correspondent banking', 'OFAC sanctions were not the core of TD\'s case. The case was a BSA monitoring and SAR program failure with explicit insider facilitation, not a sanctions screening issue.'],
      ['Inadequate marketing disclosures on deposit account products', 'Marketing disclosures sit under consumer-protection regulators (CFPB) and are unrelated to TD\'s BSA action.'],
    ],
    'TD 2024 is the canonical recent case: a years-long under-investment in monitoring, well-documented internal awareness, employee facilitation of laundering, and the largest combined BSA penalty in US history (~$3B). It is now the reference point for how examiner expectations have shifted upward.'),

  q(4420437, 'Career Skills', CHAPTER, 'Wells Fargo — controls failure during fake-accounts era',
    'Wells Fargo\'s 2010s enforcement included BSA/AML-related findings alongside its better-known consumer protection failures. What is the AML lesson from the controls failures of that period?',
    'Pressure-driven sales culture undermined customer due diligence and account integrity, generating accounts and activity that did not match the customer\'s actual profile — directly impairing transaction monitoring and CDD controls across the franchise',
    [
      ['The AML issues were unrelated to the sales-practices issues and arose from a separate root cause', 'The two were closely linked: fabricated and unauthorized accounts polluted the customer base that AML monitoring depended on. That linkage is part of why the enforcement environment escalated so far.'],
      ['Wells\' AML failures were primarily in sanctions screening for international wires', 'Sanctions was not the center of Wells\' BSA picture. CDD/KYC integrity and the broader risk-management failures of the period are the lesson.'],
      ['Wells emerged with no AML-related findings — the sales practices issues were entirely separate', 'Wells\' BSA/AML environment was materially affected and findings followed. Treating the sales-practices era as unconnected to AML is the wrong reading.'],
    ],
    'Wells Fargo\'s sales-pressure era is the recurring lesson on how revenue culture corrupts AML inputs. CDD, monitoring, and SAR quality all depend on the customer base being real and the activity being attributable — when those break, AML breaks downstream.'),

  q(4420438, 'Career Skills', CHAPTER, 'HSBC 2012 — cartel money and DPA conditions',
    'HSBC\'s 2012 DPA with DOJ (~$1.9B at the time) addressed laundering of cartel proceeds through HSBC Mexico and US dollar clearing. Which feature of that DPA is most instructive for modern compliance teams?',
    'An independent monitor with multi-year on-site presence, intensive remediation of CDD and correspondent banking controls, and ongoing reporting to DOJ — establishing the modern template of monitor-led remediation for large-bank BSA failures',
    [
      ['A fine paid in a single tranche followed by an immediate clean closure of all obligations', 'HSBC\'s DPA carried multi-year obligations and a monitor for years — there was no immediate clean closure. The template established was the opposite of "pay and walk."'],
      ['A guilty plea for individual executives in lieu of corporate liability', 'HSBC\'s 2012 resolution was a corporate DPA without senior executive convictions, which itself became part of the debate that later shifted DOJ\'s individual-accountability stance.'],
      ['A non-monetary resolution requiring only enhanced training', 'The DPA was a major monetary resolution combined with structural remediation. Training was a small piece, not the whole.'],
    ],
    'HSBC 2012 is the template for modern large-bank BSA DPAs: a multi-year monitor, deep remediation of CDD and correspondent banking, and parallel obligations to DOJ and regulators. The structure of subsequent cases (Standard Chartered, Deutsche, TD) follows the same shape.'),

  q(4420439, 'Career Skills', CHAPTER, 'Deutsche Bank mirror trades — controls vs revenue',
    'Deutsche Bank\'s "mirror trades" case (settled around 2017 with US and UK authorities) involved Russian-rouble equity purchases mirrored by US-dollar sales offshore, moving billions out of Russia. What is the BSA/AML lesson?',
    'A trading product line generated significant revenue while AML controls failed to identify obvious structural features — pairs of equal-and-offsetting trades for the same beneficial owners across jurisdictions — illustrating how revenue lines can outrun the compliance overlay if controls are not specifically designed for the product',
    [
      ['The trades were legitimate market-making activity that regulators mischaracterized', 'Regulators on both sides of the Atlantic concluded the activity was a laundering vehicle and Deutsche settled accordingly. Recharacterization as benign is not the case record.'],
      ['The failure was a sanctions-screening miss, unrelated to monitoring controls', 'The defect was monitoring and pattern detection on the trading-product workflow, not OFAC screening. Sanctions screening was not the primary control gap.'],
      ['The trades were caught by Deutsche\'s monitoring system but the SARs were filed late', 'The case record describes a failure to identify, not a timing failure on identified activity. Late filing is a different fact pattern.'],
    ],
    'Deutsche\'s mirror trades are the canonical case for product-line AML coverage. Monitoring needs to be designed around how the bank actually makes money, not retrofitted as a generic overlay — paired equal-and-offsetting trades for the same beneficiary should not require investigation to notice.'),

  q(4420440, 'Career Skills', CHAPTER, 'Standard Chartered — Iran sanctions stripping',
    'Standard Chartered\'s multiple resolutions (2012, 2019) involved "stripping" — removing or modifying payment-message identifiers — to process Iran-related US-dollar transactions through New York. What is the lesson for BSA/AML programs?',
    'The case sits at the BSA/sanctions intersection: payment-message integrity is a core control, and any process that modifies messages to obscure originator or beneficiary information is treated as deliberate evasion under both BSA and OFAC frameworks, regardless of business justification',
    [
      ['The stripping was a technical processing issue that regulators treated more harshly than warranted', 'Regulators on both occasions found the practice deliberate, and Standard Chartered settled on that basis. Treating it as a misunderstood technicality is not the case record.'],
      ['The case had no BSA/AML implications because it was purely a sanctions matter', 'Payment-message integrity is part of the BSA/AML control fabric (SAR-relevant intelligence depends on it) and the case had findings across the BSA and sanctions frameworks together.'],
      ['Stripping is acceptable provided the bank also files an OFAC voluntary disclosure', 'OFAC voluntary self-disclosure is a mitigation, not a license. Modifying payment messages to evade controls is not made acceptable by later disclosure of the practice.'],
    ],
    'Standard Chartered is the canonical case at the BSA/sanctions intersection. Payment-message integrity — originator, beneficiary, purpose-of-payment — is foundational, and any process that intentionally degrades it is treated as evasion. The 2012 and 2019 resolutions together made that explicit.'),
]
