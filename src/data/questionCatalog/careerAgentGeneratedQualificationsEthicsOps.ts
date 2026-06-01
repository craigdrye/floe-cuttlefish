import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'
import { CAREER_QUALS_ETHICS_OPS_SUB_TOPICS, CAREER_QUALS_ETHICS_OPS_MENTOR_HINTS, CAREER_QUALS_ETHICS_OPS_CORRECT_SHORTENED } from './careerQualsEthicsOpsPolish'
import { polish as runPolish } from './polishPipeline'


const SOURCE = 'Floe career qualifications ethics/ops canonical bank'

// Canonical Qualifications: Ethics / Ops subfamily.
// Covers professionalEthics + supplyChain + technicalSales tracks.
// Consolidates the prior EthicsOps / EthicsOps2 pair.
// Every wrong answer carries a bespoke "why this is wrong" line — no
// DEFAULT_FLAW constant. Chapter names align to syllabi:
//   src/data/syllabi/career/professional_ethics.md
//   src/data/syllabi/career/supply_chain_analyst.md
//   src/data/syllabi/career/technical_sales_engineer_interview_prep.md
function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][], // [label, bespoke whyWrong]
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

const careerAgentGeneratedQualificationsEthicsOpsBaseQuestionsByTrack: Record<string, Question[]> = {
  // ---------------------------------------------------------------------------
  // PROFESSIONAL ETHICS (No Tiny Crimes)
  // Syllabus chapters (professional_ethics.md):
  //  1. Integrity, Role Duties, and the Law/Ethics Gap
  //  2. Stakeholders, Harms, and Incentives
  //  3. Ethical Frameworks That Actually Help
  //  4. Speaking Up, Escalation, and Documentation
  //  5. Fair Process, Investigations, and Bias
  //  6. Ethical Culture and Control Design
  //  7. Sector Dilemmas
  // ---------------------------------------------------------------------------
  professionalEthics: [
    // Chapter 1: Integrity, Role Duties, and the Law/Ethics Gap
    q(4250950, 'Career Skills', 'Integrity, Role Duties, and the Law/Ethics Gap', 'Out of depth',
      'A client asks you to sign off on a specialised security architecture that you do not understand well enough to evaluate. Best response?',
      'Say the review needs a qualified specialist and avoid signing beyond your competence',
      [
        ['Sign because confidence is reassuring', 'Confidence is not competence. Signing beyond expertise misleads the client and your own organisation.'],
        ['Copy approval language from another project', 'Copied language without analysis is a fabricated review, even if it sounds professional.'],
        ['Reject it automatically so no expertise is needed', 'Reflexive rejection avoids the duty rather than meeting it. Get qualified review instead.'],
      ],
      'Professional competence means knowing the boundary of your expertise. Qualified review protects the client, the organisation, and your own judgement.'),
    q(4250951, 'Career Skills', 'Integrity, Role Duties, and the Law/Ethics Gap', 'Overconfident estimate',
      'A client asks whether your team can finish a complex integration in two weeks. Internally, engineers say six weeks is realistic. What should you communicate?',
      'Give the client a truthful estimate with assumptions, risks, and options for narrowing scope',
      [
        ['Promise two weeks and hope optimism compiles', 'Optimistic promises do not produce results. They produce a credibility crisis at week three.'],
        ['Say six months to make any result look heroic', 'Padding to look heroic inflates the estimate beyond honest analysis and misallocates client planning.'],
        ['Avoid the client until engineering discovers time travel', 'Avoidance is not honest expectation-setting. The client makes decisions on the silence.'],
      ],
      'Professional duty includes honest expectation-setting. Clear assumptions and tradeoffs build trust better than promises the team cannot responsibly meet.'),
    q(4250952, 'Career Skills', 'Integrity, Role Duties, and the Law/Ethics Gap', 'Backdated approval',
      'A supervisor asks you to backdate an approval form so an audit trail looks timely. The approval happened today. What should you do?',
      'Record the actual approval date and escalate the request if pressure continues',
      [
        ['Backdate it because the review probably would have passed', 'The hypothetical outcome does not justify a false record. Audit trails depend on actual dates.'],
        ['Leave the date blank so nobody has to feel awkward', 'A blank date is still an incomplete record; the underlying integrity issue does not disappear.'],
        ['Use pencil so the timeline can stay flexible', 'Erasable approvals defeat the purpose of audit evidence.'],
      ],
      'Accurate records are part of professional integrity. Backdating turns a process delay into a false record and can create larger compliance risk.'),
    q(4250953, 'Career Skills', 'Integrity, Role Duties, and the Law/Ethics Gap', 'Records retention',
      'After learning of potential litigation, a teammate says everyone should delete old emails so discovery is easier. Ethical response?',
      'Preserve relevant records and follow any legal hold or retention instructions',
      [
        ['Delete faster because empty inboxes feel innocent', 'Deletion under legal hold is spoliation, which is a serious legal and ethical breach.'],
        ['Forward records to personal email for safekeeping', 'Moving records to personal accounts creates a separate breach and does not preserve them properly.'],
        ['Rename the folder "not records"', 'Renaming does not change a document\'s status under a legal hold.'],
      ],
      'Legal holds and retention rules override convenience. Destroying relevant records can turn a dispute into a serious compliance failure.'),

    // Chapter 2: Stakeholders, Harms, and Incentives
    q(4250954, 'Career Skills', 'Stakeholders, Harms, and Incentives', 'Vendor cousin',
      'You are on a vendor-selection panel and realise one finalist is owned by your cousin. The proposal may still be strong. Most defensible next step?',
      'Disclose the relationship promptly and follow the organisation\'s process for recusal or managed participation',
      [
        ['Stay quiet because the vendor might win fairly', 'Concealment, not the conflict itself, is what destroys procurement integrity.'],
        ['Vote against the vendor to prove you are unbiased', 'Punitive scoring is itself biased and does not satisfy the disclosure duty.'],
        ['Text your cousin for a better discount before the meeting', 'That converts the conflict into self-dealing, the worst possible response.'],
      ],
      'A conflict does not automatically prove bad judgement, but hiding it damages trust. Disclosure lets the organisation manage bias and appearance.'),
    q(4250955, 'Career Skills', 'Stakeholders, Harms, and Incentives', 'Conference tablet',
      'A supplier you are evaluating offers you a free tablet at a conference. Your company allows only modest promotional items. What should you do?',
      'Decline or return the gift and document the interaction according to policy',
      [
        ['Accept it because the tablet looks productive', 'Productivity is not the criterion; gift-policy thresholds are. The item exceeds them.'],
        ['Give the supplier a higher score to be polite', 'Reciprocal scoring is exactly the bias gift rules exist to prevent.'],
        ['Keep it secret as long as procurement never asks', 'Concealment compounds the original policy breach.'],
      ],
      'Gift rules protect procurement decisions from real or perceived influence. When a benefit exceeds policy, declining and documenting keeps the process clean.'),
    q(4250956, 'Career Skills', 'Stakeholders, Harms, and Incentives', 'Side consulting',
      'A client employee asks you to do paid weekend consulting for them personally using knowledge gained from your company project. What should you do first?',
      'Check conflict, confidentiality, and outside-work policies before accepting or discussing details',
      [
        ['Accept cash because weekends are a legal grey zone', 'Outside-work policies apply regardless of the day. Cash does not exempt the conflict.'],
        ['Use project files to save time', 'Using project files for personal work breaches confidentiality and likely IP terms.'],
        ['Hide the work from both organisations', 'Concealment makes both potential conflicts worse and removes any safeguard.'],
      ],
      'Outside work can create conflicts or misuse confidential information. Policy review before accepting protects everyone involved.'),
    q(4250957, 'Career Skills', 'Stakeholders, Harms, and Incentives', 'Split purchase',
      'A department wants to split one $60,000 software purchase into three $20,000 invoices to avoid competitive-bid rules. Ethical issue?',
      'The split appears designed to bypass procurement controls and should be challenged or escalated',
      [
        ['It is fine because smaller numbers look tidier', 'Threshold avoidance is a recognised compliance red flag, not a tidiness improvement.'],
        ['It improves ethics by creating more invoices', 'Invoice count is unrelated to ethics; bypassed controls are the issue.'],
        ['It is only a concern if the software is unpopular', 'Popularity does not change whether a control was bypassed.'],
      ],
      'Procurement thresholds are controls, not puzzles to route around. Artificial splits undermine fairness, pricing discipline, and auditability.'),

    // Chapter 3: Ethical Frameworks That Actually Help
    q(4250958, 'Career Skills', 'Ethical Frameworks That Actually Help', 'Fast exception',
      'A leader asks for an exception to a customer-refund policy for a friend of the company. Similar customers were denied last week. What should guide the decision?',
      'Apply the same criteria used for comparable cases or document a justified policy-based exception',
      [
        ['Approve it because friendship improves margins', 'Special treatment by relationship is exactly the consistency problem ethics frameworks address.'],
        ['Deny all exceptions forever regardless of policy', 'Categorical denial misses cases where policy allows valid exceptions.'],
        ['Hide the decision so comparison is impossible', 'Hiding decisions removes the very transparency that makes exceptions defensible.'],
      ],
      'Ethical decision-making treats like cases alike unless a relevant difference is documented. Consistency protects fairness and trust.'),
    q(4250959, 'Career Skills', 'Ethical Frameworks That Actually Help', 'Equal treatment',
      'Two employees request flexible schedules for different reasons. One is popular with leadership, the other is not. What should guide the decision?',
      'Apply the same policy, business criteria, and accommodation process consistently',
      [
        ['Approve the popular employee because morale has favourites', 'Popularity-based decisions violate consistency and create discrimination risk.'],
        ['Deny both so nobody can complain', 'Categorical denial without analysis misses valid business or legal accommodation needs.'],
        ['Ask peers to vote on whose reason feels better', 'Peer voting is not a workplace decision process for individual employment terms.'],
      ],
      'Fair treatment comes from consistent process and relevant criteria. Popularity is not an employment standard.'),
    q(4250960, 'Career Skills', 'Ethical Frameworks That Actually Help', 'Promotion packet bias',
      'You are asked to review promotion packets. One candidate is your close friend, and another has criticised your work. What should guide your review?',
      'Use the stated criteria, disclose any conflict that could affect judgement, and document evidence-based recommendations',
      [
        ['Boost your friend because loyalty is a competency', 'Loyalty is not a promotion criterion. Promotions follow stated competencies.'],
        ['Downgrade the critic because feedback had consequences', 'Retaliatory scoring is a clear ethics and legal violation.'],
        ['Treat team chemistry as an unstated promotion competency', 'Personal preference is exactly the bias the criteria exist to prevent.'],
      ],
      'Fair evaluations depend on consistent criteria and visible handling of bias. Personal feelings should not become hidden scoring systems.'),

    // Chapter 4: Speaking Up, Escalation, and Documentation
    q(4250961, 'Career Skills', 'Speaking Up, Escalation, and Documentation', 'Small safety signal',
      'You notice two support tickets describing the same potential product-safety issue, but engineering has not confirmed a defect. Best response?',
      'Escalate the pattern with known facts, uncertainty, and possible customer risk',
      [
        ['Wait for a perfect root-cause report before saying anything', 'Waiting for certainty can allow preventable harm. Proportionate escalation handles uncertainty.'],
        ['Accuse engineering publicly before checking evidence', 'Premature blame distorts the investigation and chills future cooperation.'],
        ['Close the tickets because two is not a dramatic number', 'Two same-pattern reports of a safety issue is a signal worth escalating, not closing.'],
      ],
      'Ethical escalation can be proportionate. When possible harm is involved, share evidence and uncertainty early enough for responsible assessment.'),
    q(4250962, 'Career Skills', 'Speaking Up, Escalation, and Documentation', 'Whistleblowing path',
      'You believe a serious regulatory violation may be occurring, but your direct manager is involved. Usually strongest first move?',
      'Use an independent reporting channel or designated compliance contact with the evidence you have',
      [
        ['Confront only the manager and accept their answer as final', 'When the manager is the subject, normal escalation is compromised. Independent channels exist for this reason.'],
        ['Delete your notes so you are not involved', 'Destroying contemporaneous notes removes the protection records provide.'],
        ['Post accusations online before using any protected channel', 'Public posting often forfeits whistleblower protections and contaminates the investigation.'],
      ],
      'When ordinary escalation is compromised, independent channels preserve evidence, confidentiality, and protection from retaliation.'),
    q(4250963, 'Career Skills', 'Speaking Up, Escalation, and Documentation', 'Boss edits finding',
      'Your boss removes a substantiated compliance finding from a report because it would complicate a board update. What should you do?',
      'Ask for the rationale, preserve the evidence, and escalate through appropriate compliance or audit channels if the omission is improper',
      [
        ['Accept the edit because boards dislike plot twists', 'Board comfort is not a reason to mislead governance. Substantiated findings belong in the report.'],
        ['Leak the draft publicly before asking questions', 'Public leaks bypass legitimate channels and can damage the investigation itself.'],
        ['Rewrite the finding as a compliment', 'Inverting a finding is falsification, not editing.'],
      ],
      'Escalation should be evidence-based and channel-aware. Removing substantiated findings for convenience can mislead oversight bodies.'),
    q(4250964, 'Career Skills', 'Speaking Up, Escalation, and Documentation', 'Correcting errors',
      'You discover that a report you sent last week used the wrong denominator and overstated savings. Leaders are already citing it. What should you do?',
      'Notify the right stakeholders promptly with the corrected analysis and impact of the error',
      [
        ['Stay quiet because the report has momentum', 'Allowing decisions to compound on a known error is exactly the failure mode.'],
        ['Fix your local copy and let history wander', 'Local fixes do not correct the official record that leaders are using.'],
        ['Blame the spreadsheet without explaining the correction', 'Blame without correction does not stop the wrong decisions cascading.'],
      ],
      'Ethical accountability includes correcting material errors after delivery. Speed matters when others are making decisions from the work.'),
    q(4250965, 'Career Skills', 'Speaking Up, Escalation, and Documentation', 'Evidence-confident wording',
      'A director wants you to write that a vendor "definitely violated policy," but evidence only shows a likely violation pending review. What should you do?',
      'State the supported facts, level of confidence, and remaining review steps',
      [
        ['Use "definitely" because the director sounds definite', 'Tone is not evidence. Definitive language unsupported by evidence is misleading.'],
        ['Remove all concerns until the review is finished', 'Underreporting equally distorts the picture and may delay action.'],
        ['Add dramatic language so compliance pays attention', 'Drama is not a substitute for evidence; it undermines the report\'s credibility.'],
      ],
      'Ethical reporting separates facts, conclusions, and uncertainty. Strong wording is useful only when the evidence can carry it.'),

    // Chapter 5: Fair Process, Investigations, and Bias
    q(4250966, 'Career Skills', 'Fair Process, Investigations, and Bias', 'Quiet punishment',
      'An employee reports a compliance concern in good faith. Soon after, their manager removes them from a visible project with no performance reason. What should leadership examine?',
      'Whether the change is retaliation and whether protective reporting procedures were followed',
      [
        ['Whether the employee should have stayed quieter', 'Implying the reporter is at fault is itself retaliation.'],
        ['How to make future reports less traceable', 'Reducing traceability protects retaliators, not reporters.'],
        ['Whether visible projects are too cheerful', 'The question is about retaliation timing, not project mood.'],
      ],
      'Good-faith reporting needs protection from retaliation. Organisations should separate legitimate staffing decisions from punishment for raising concerns.'),
    q(4250967, 'Career Skills', 'Fair Process, Investigations, and Bias', 'Audit independence',
      'You are assigned to audit a process designed by your former team, and your old manager will be evaluated partly on the result. What should you do?',
      'Disclose the relationship and ask whether independence safeguards or reassignment are needed',
      [
        ['Audit it silently because you know the process best', 'Familiarity is not independence. The undisclosed relationship is the issue.'],
        ['Promise your old manager a friendly report', 'Pre-committing the conclusion is the textbook independence breach.'],
        ['Refuse all work involving anyone you have met before', 'Categorical refusal goes beyond what independence rules require.'],
      ],
      'Independence includes both actual objectivity and reasonable appearance. Disclosure lets the organisation decide whether safeguards are enough.'),
    q(4250968, 'Career Skills', 'Fair Process, Investigations, and Bias', 'Nepotism shortlist',
      'A senior leader asks you to "make sure" their child gets an interview for a limited internship pool. The child meets minimum requirements but was not shortlisted. Most defensible response?',
      'Use the same selection criteria for all candidates and document any exception through the approved process',
      [
        ['Add the child quietly because leadership has vibes', 'Quiet additions outside the process are a clear nepotism and fairness breach.'],
        ['Reject the child automatically to avoid awkward optics', 'Automatic rejection over a relationship is reverse discrimination and equally unfair.'],
        ['Tell the other applicants the process is flexible now', 'Announcing process flexibility mid-cycle damages credibility without solving the conflict.'],
      ],
      'Fair selection depends on consistent criteria. Relationships should not create hidden advantages or automatic penalties.'),

    // Chapter 6: Ethical Culture and Control Design
    q(4250969, 'Career Skills', 'Ethical Culture and Control Design', 'Elevator numbers',
      'After a finance meeting, a colleague starts discussing unreleased layoff numbers in a crowded elevator. What should you do?',
      'Stop the conversation and move any necessary discussion to an appropriate private channel',
      [
        ['Join in quietly because everyone loves a whisper', 'Joining the breach makes you a participant in the disclosure.'],
        ['Post the numbers in chat so the rumour is at least accurate', 'Posting confidential numbers turns an oral leak into a written one.'],
        ['Pretend confidentiality only applies inside conference rooms', 'Confidentiality follows information, not rooms.'],
      ],
      'Confidentiality follows the information, not the room. Sensitive business or personal data should be discussed only with proper access and context.'),
    q(4250970, 'Career Skills', 'Ethical Culture and Control Design', 'Dashboard polish',
      'A manager asks you to remove three bad customer-satisfaction responses from a dashboard because they make the launch look messy. The responses are valid. What should you do?',
      'Keep the valid data and explain any context or segmentation transparently',
      [
        ['Remove them because executive slides need sparkle', 'Removing valid evidence is data manipulation, not presentation polish.'],
        ['Replace them with average responses from another product', 'Substituting unrelated data is fabrication.'],
        ['Hide the data until the launch is old news', 'Hiding data simply delays the manipulation; it does not legitimise it.'],
      ],
      'Data integrity means representing valid evidence honestly. Context can help interpretation, but quietly deleting inconvenient records misleads decision-makers.'),
    q(4250971, 'Career Skills', 'Ethical Culture and Control Design', 'Maybe metric',
      'A slide says the new program "reduced defects by 40%," but the analysis only shows defects fell in one pilot team for one month. What should you do?',
      'Revise the claim to match the evidence and include the scope and time period',
      [
        ['Keep the broad claim because it sounds grant-ready', 'Overstating evidence for funding purposes is a familiar misrepresentation pattern.'],
        ['Delete the chart but keep the headline', 'Removing the evidence while keeping the claim makes the misstatement worse.'],
        ['Average it with unrelated metrics until it feels sturdy', 'Padding the number with unrelated data fabricates a stronger result than the evidence supports.'],
      ],
      'Ethical communication does not overstate evidence. Precise scope helps leaders understand what was proven and what still needs validation.'),
    q(4250972, 'Career Skills', 'Ethical Culture and Control Design', 'Manipulative metrics',
      'A program dashboard is red on schedule, so a leader asks to redefine "on track" to include any work that has started. What should the analyst do?',
      'Keep definitions stable or clearly disclose any metric change and its effect on status',
      [
        ['Change the definition quietly so red becomes a fashion choice', 'Silent definition changes destroy trend comparability and mislead readers.'],
        ['Delete schedule metrics until morale improves', 'Removing measurement does not improve the underlying schedule.'],
        ['Mark everything green because work exists somewhere', 'Universal-green status hides risk that leaders need to see.'],
      ],
      'Metrics should illuminate reality, not decorate it. Definition changes need transparency so readers can compare status honestly.'),
    q(4250973, 'Career Skills', 'Ethical Culture and Control Design', 'Verbal approval',
      'A VP verbally approves a risky customer exception and says documentation is unnecessary because "we all trust each other." What should you do?',
      'Document the decision, rationale, approver, and conditions in the normal system',
      [
        ['Rely on memory because it has excellent audit controls', 'Memory is not an audit control. Records exist precisely because memory is unreliable.'],
        ['Ask the customer to document it instead', 'Customer documentation cannot substitute for internal authorisation records.'],
        ['Refuse every exception regardless of business need', 'Refusing every exception denies the legitimate ones; documentation enables disciplined exceptions.'],
      ],
      'Documentation protects trust by making decisions traceable. Verbal approvals for exceptions should still leave an accurate record.'),
    q(4250974, 'Career Skills', 'Ethical Culture and Control Design', 'Training records',
      'A manager asks you to mark their team complete for mandatory training because they attended a related meeting. The required module was not completed. What should you do?',
      'Record actual completion status and ask whether an approved equivalency can be granted',
      [
        ['Mark complete because meetings are basically portals', 'Substituting unapproved equivalency falsifies the compliance record.'],
        ['Delete the training requirement for that team', 'Unilaterally removing a compliance requirement bypasses governance.'],
        ['Let the manager enter the false record under your login', 'Sharing credentials to enable a false record compounds the breach.'],
      ],
      'Training records are compliance evidence. Equivalencies must be approved, not invented after the fact.'),
    q(4250975, 'Career Skills', 'Ethical Culture and Control Design', 'Synthetic citation',
      'An AI drafting tool creates a convincing citation for a policy article you cannot find. Your deadline is close. What should you do?',
      'Remove or replace the citation unless you can verify the source exists and supports the claim',
      [
        ['Keep it because it looks academically dressed', 'Convincing format is not evidence of existence. AI tools generate plausible-looking false citations.'],
        ['Invent a URL that matches the title', 'Inventing URLs to support fabricated citations is direct falsification.'],
        ['Delete all citations and hope nobody asks', 'Removing the supporting citations without addressing the underlying claim leaves it unsupported but still asserted.'],
      ],
      'Professional work requires verifiable support. AI-generated references can sound real while being false.'),
    q(4250976, 'Career Skills', 'Ethical Culture and Control Design', 'Charity condition',
      'A public official suggests your company donation to a favoured charity would help a permit move faster. What should you do?',
      'Treat it as a bribery or improper-influence concern and involve legal or compliance before any donation',
      [
        ['Donate immediately because charity makes everything pure', 'A donation tied to official action is improper regardless of the recipient.'],
        ['Ask which amount buys the fastest stamp', 'Quantifying the bribe makes the bribe explicit; it does not legitimise it.'],
        ['Route the donation through an employee so it looks casual', 'Layering through an employee adds concealment to the underlying bribery problem.'],
      ],
      'Charitable giving can still be improper if tied to official action. Intent, timing, and beneficiary matter.'),

    // Chapter 7: Sector Dilemmas
    q(4250977, 'Career Skills', 'Sector Dilemmas', 'Ship the known bug',
      'A release manager says to ship despite a known bug that can incorrectly charge a small number of customers. The fix is ready but needs one more day of testing. What should you advocate?',
      'Escalate the customer-impact risk and recommend delaying or controlling release until the fix is validated',
      [
        ['Ship because only a few invoices will be spicy', 'Customer harm scaled by percentage is still customer harm. Small impact is not zero impact.'],
        ['Hide the bug in release notes nobody reads', 'Concealment of known harm in fine print does not satisfy the duty to customers.'],
        ['Cancel the entire product line immediately', 'Overcorrection to product cancellation is disproportionate to a one-day fix.'],
      ],
      'Customer harm does not become ethical because the percentage is small. Known financial impact deserves transparent risk review and mitigation.'),
    q(4250978, 'Career Skills', 'Sector Dilemmas', 'Helpful spreadsheet',
      'A teammate asks you to send a spreadsheet with employee health accommodations so they can plan seating for an event. They do not normally access this data. What should you do?',
      'Share only the minimum necessary information through an approved channel after confirming authorisation',
      [
        ['Send the full file because planning is stressful', 'Sending more than necessary breaches minimum-necessary access principles.'],
        ['Post it in the event channel so everyone can help', 'Broadcasting health information widely is a major privacy breach.'],
        ['Refuse all coordination even if an authorised summary would solve the need', 'Refusing all coordination ignores that an appropriate summary may legitimately exist.'],
      ],
      'Privacy work often means purpose limitation and minimum-necessary access. Helpful intent does not justify oversharing sensitive personal information.'),
    q(4250979, 'Career Skills', 'Sector Dilemmas', 'Customer data in training',
      'You want to use a real customer support transcript in a training deck because it perfectly shows the issue. It includes names and account details. Best handling?',
      'Use approved anonymisation or permission procedures before sharing the example',
      [
        ['Paste it as-is because learning is noble', 'Learning purposes do not waive customer privacy obligations.'],
        ['Change only the customer name and leave every other identifier', 'Quasi-identifiers can re-identify a customer; partial anonymisation often fails.'],
        ['Avoid all training examples forever', 'Categorical avoidance throws away learning value; the issue is method, not concept.'],
      ],
      'Useful examples still need privacy controls. Anonymisation, permission, and minimum necessary detail let teams learn without exposing customers.'),
    q(4250980, 'Career Skills', 'Sector Dilemmas', 'Survey reuse',
      'People answered an internal wellness survey after being told results would be aggregated. A manager now wants individual responses to coach low scorers. What should you do?',
      'Respect the stated survey purpose and share only permitted aggregated insights',
      [
        ['Hand over individual responses because coaching sounds positive', 'Coaching intent does not waive the consent given for aggregation only.'],
        ['Publish names next to scores for accountability', 'Publishing names breaks consent and converts wellness data into a punitive tool.'],
        ['Change the survey notice after the fact', 'Retroactively changing consent terms is a clear consent breach.'],
      ],
      'Consent and purpose matter. Reusing identifiable responses beyond the promised scope violates trust and privacy.'),
    q(4250981, 'Career Skills', 'Sector Dilemmas', 'AI memo policy',
      'A team uses an AI tool to draft a client memo, then verifies the facts and edits the advice. Most ethical handling?',
      'Follow firm policy on AI use, protect client data, verify content, and disclose use if required by the engagement or rules',
      [
        ['Paste confidential client files into any public tool because drafting is faster', 'Pasting confidential client data into uncontrolled tools is a major data-leakage breach.'],
        ['Treat polished AI prose as equivalent to verified professional advice', 'AI outputs can be confidently wrong. Verification is the central professional duty.'],
        ['Ban all tools from memory and pretend the draft wrote itself', 'Concealment violates disclosure obligations where they apply.'],
      ],
      'AI assistance does not remove professional responsibility. Data handling, verification, client expectations, and policy requirements still control the work.'),

    // Cross-syllabus / culture-wide
    q(4250982, 'Career Skills', 'Ethical Culture and Control Design', 'Meeting credit',
      'In meetings, one analyst repeatedly proposes ideas that are ignored until a senior colleague restates them. Ethical team-lead response?',
      'Attribute ideas accurately and create meeting norms that make participation fairer',
      [
        ['Let the loudest version win because volume is strategy', 'Volume-based credit is the bias the norms exist to counteract.'],
        ['Tell the analyst to speak only after executives leave', 'Restricting the contributor punishes the wrong person.'],
        ['Ban all discussion so credit cannot be misassigned', 'Banning discussion eliminates the contribution rather than fixing attribution.'],
      ],
      'Respectful workplaces notice whose contributions are recognised. Accurate attribution and inclusive norms reduce hidden unfairness in daily collaboration.'),
    q(4250983, 'Career Skills', 'Sector Dilemmas', 'Harassment in chat',
      'A contractor posts a sexual joke in a project chat. Several people go quiet, and one messages you that it made them uncomfortable. What should a lead do?',
      'Address the conduct promptly, preserve relevant context, and follow reporting or corrective procedures',
      [
        ['Wait to see whether the joke becomes a series', 'Waiting for repetition signals tolerance and exposes the organisation.'],
        ['Tell the uncomfortable person to mute the channel', 'Asking the affected person to absorb the breach is itself harmful.'],
        ['Reply with a bigger joke to reclaim the room', 'Escalating the behaviour normalises rather than corrects it.'],
      ],
      'Workplace respect standards apply in digital spaces too. Prompt, proportionate action protects people and sets clear norms.'),
    q(4250984, 'Career Skills', 'Sector Dilemmas', 'Late-night construction',
      'A project can save money by doing noisy construction overnight near residences, but the permit allows it only with advance notice and mitigation. Right approach?',
      'Follow permit conditions, notify affected residents, and use reasonable mitigation even if it adds coordination work',
      [
        ['Start quietly and hope nobody owns a phone', 'Violating permit conditions creates legal exposure and harms residents.'],
        ['Treat permit conditions as optional when the variance saves money', 'Cost savings do not override regulatory permit conditions.'],
        ['Cancel the project because notices are annoying', 'Cancelling work that the permit allows is disproportionate; the obligation is notice, not cancellation.'],
      ],
      'Professional responsibility includes impacts beyond the project team. Permits, notice, and mitigation turn external effects into managed obligations.'),
  ],

  // ---------------------------------------------------------------------------
  // SUPPLY CHAIN ANALYST
  // Syllabus chapters (supply_chain_analyst.md):
  //  1. Supply Chain Map and Metrics
  //  2. Demand and Forecasting
  //  3. Inventory and Service Levels
  //  4. Suppliers and Sourcing Risk
  //  5. Operations and Capacity
  //  6. Transportation, Warehousing, and Network Tradeoffs
  //  7. S&OP and Cross-Functional Planning
  //  8. Resilience, Analytics, and Decision Communication
  // ---------------------------------------------------------------------------
  supplyChain: [
    // Chapter 1: Supply Chain Map and Metrics
    q(4250985, 'Career Skills', 'Supply Chain Map and Metrics', 'Perfect order',
      'A team reports 98% on-time shipping, but many orders arrive short one item. Which metric better captures customer experience?',
      'Perfect order rate or on-time-in-full performance',
      [
        ['Number of labels printed', 'Label volume measures activity, not order quality.'],
        ['Average forklift playlist length', 'Forklift playlists are not a supply chain metric.'],
        ['Count of orders that looked organised on the dock', 'Dock-side appearance is subjective and not measurable.'],
      ],
      'Customers care whether the right order arrives complete and on time. On-time metrics alone can hide fill-rate or accuracy problems.'),
    q(4250986, 'Career Skills', 'Supply Chain Map and Metrics', 'Master data',
      'A warehouse system shows a pallet as 4 inches tall instead of 4 feet tall, causing load-planning errors. Root operational issue?',
      'Master-data quality is wrong and should be corrected with controls to prevent repeat errors',
      [
        ['The truck is too picky about geometry', 'Truck cube limits are physical reality, not pickiness.'],
        ['Load planners should memorise every item size', 'Memorisation does not scale across thousands of SKUs.'],
        ['The system is fine if the typo is charming', 'Operationally significant data errors require correction regardless of how the entry reads.'],
      ],
      'Supply chain systems depend on accurate item, supplier, location, and packaging data. Bad master data creates real execution errors.'),

    // Chapter 2: Demand and Forecasting
    q(4250987, 'Career Skills', 'Demand and Forecasting', 'Promo spike',
      'A beverage brand sold triple its normal volume during a one-week influencer promotion. What should the planner do before using that week in the baseline forecast?',
      'Flag the promotion as an exceptional demand driver and separate baseline demand from event lift',
      [
        ['Treat one promotional spike as the new steady-state baseline', 'Persisting a one-week promo as baseline overstates capacity, inventory, and revenue forecasts.'],
        ['Delete the week with no note because it is inconvenient', 'Silent deletion loses the data needed to model future promotions.'],
        ['Blame the warehouse for being too hydrated', 'Operational mood is not a forecasting variable.'],
      ],
      'Forecasts improve when planners distinguish recurring demand from event-driven lift. Promotions inform future events without distorting baseline.'),
    q(4250988, 'Career Skills', 'Demand and Forecasting', 'Forecast bias',
      'Sales forecasts have been 30% above actuals for five months, causing excess inventory. What should planning do?',
      'Measure forecast bias, review assumptions with sales, and adjust the planning process or consensus forecast',
      [
        ['Keep believing month six will redeem everyone', 'Five months of one-directional bias is a pattern, not noise.'],
        ['Cut forecasts by 90% to make a point', 'Overcorrection swings the bias the other way and creates stockouts.'],
        ['Dispose of inventory and delete the forecast history', 'Destroying history removes the diagnostic data needed to improve.'],
      ],
      'Forecast error has direction as well as size. Persistent bias should trigger assumption review and process correction.'),
    q(4250989, 'Career Skills', 'Demand and Forecasting', 'Demand sensing',
      'Retail point-of-sale data shows demand slowing, but distributor orders remain high because they are replenishing old commitments. What should planners consider?',
      'Use downstream demand signals to identify potential bullwhip risk and adjust replenishment assumptions',
      [
        ['Trust distributor orders only because they are purchase orders', 'Distributor orders lag end-consumer demand; trusting them alone produces bullwhip.'],
        ['Treat distributor replenishment orders as more current than retail demand signals', 'Waiting until inventory is excessive is exactly the failure POS data could prevent.'],
        ['Treat channel inventory movement as proof of consumer demand', 'Consumer behaviour is observable in the POS signal; the issue is whether planners look at it.'],
      ],
      'Downstream signals reveal demand changes before orders do. Demand sensing helps avoid overreacting to channel inventory movements.'),

    // Chapter 3: Inventory and Service Levels
    q(4250990, 'Career Skills', 'Inventory and Service Levels', 'Slow critical mover',
      'A spare part sells twice per year but is critical when a machine fails. Finance wants to cut all stock because turns are low. What should the analyst add to the discussion?',
      'Stockout impact, downtime cost, lead time, and service requirement, not just inventory turns',
      [
        ['Cut it because slow movers are always waste', 'Turn-based decisions ignore stockout cost. Critical low-volume items may justify stock.'],
        ['Order a full truckload because fear is a policy', 'Truckload buying without analysis creates the opposite extreme problem.'],
        ['Move the part to a secret shelf and skip the decision', 'Hiding inventory bypasses the cost-versus-risk decision rather than answering it.'],
      ],
      'Inventory decisions should balance carrying cost against service risk. Critical low-volume items may justify stock when downtime is expensive.'),
    q(4250991, 'Career Skills', 'Inventory and Service Levels', 'Reorder point variability',
      'A SKU stocks out weekly because the reorder point was set using average demand but not lead-time variability. What should be reviewed?',
      'Safety stock and reorder point assumptions, including demand variability, lead time, and service target',
      [
        ['Tell customers averages are technically elegant', 'Elegance does not satisfy customer orders.'],
        ['Double every order forever', 'Blanket order increases create excess inventory across the catalogue.'],
        ['Treat weekly stockouts as a warehouse execution problem only', 'Pickers cannot recover from policy-driven stockouts.'],
      ],
      'Reorder policies need variability, not just averages. Safety stock exists because demand and supply do not arrive politely on schedule.'),
    q(4250992, 'Career Skills', 'Inventory and Service Levels', 'Safety stock segmentation',
      'A planner uses the same safety-stock days for every SKU, from stable commodity items to volatile critical parts. Issue?',
      'Different demand patterns, lead times, criticality, and service targets require segmented inventory policies',
      [
        ['One formula is fair because every SKU gets a turn', 'Fairness across SKUs is not the goal; service-versus-cost balance is.'],
        ['Critical parts should have no stock to stay humble', 'Stripping safety stock on critical parts produces costly downtime.'],
        ['Commodity items should always get premium buffers', 'Over-buffering commodities ties up cash for low-stockout-cost items.'],
      ],
      'Inventory policies should reflect item behaviour and business impact. Segmentation prevents overstocking some items while underprotecting others.'),
    q(4250993, 'Career Skills', 'Inventory and Service Levels', 'Cycle count investigation',
      'Cycle counts repeatedly show a bin is short, but the system is adjusted each time without investigation. Better response?',
      'Analyse root causes such as mispicks, receiving errors, theft, scrap, or location issues before repeated adjustments',
      [
        ['Keep adjusting because the system enjoys surprises', 'Repeated adjustment treats the symptom and lets the cause continue.'],
        ['Stop counting the bin so variance disappears', 'Stopping the measurement does not solve the loss.'],
        ['Order extra and call it a personality trait', 'Buying more does not address why stock is disappearing.'],
      ],
      'Inventory accuracy work should fix causes, not only symptoms. Repeated variances are process signals.'),
    q(4250994, 'Career Skills', 'Inventory and Service Levels', 'Service level economics',
      'A customer asks for 99.9% availability on a highly variable item with long replenishment lead time. What should the account team explain?',
      'The inventory, cost, lead-time, and supply-risk implications of that service level',
      [
        ['Promise it because decimals look precise', 'Decimal precision is not a commitment basis.'],
        ['Say service levels are only a warehouse problem', 'Service levels involve sourcing, planning, finance, and operations together.'],
        ['Offer 100% availability by redefining availability', 'Definition games do not change the underlying inventory math.'],
      ],
      'Higher service levels often require more inventory, better supply reliability, or both. Customers should understand the cost and feasibility tradeoff.'),

    // Chapter 4: Suppliers and Sourcing Risk
    q(4250995, 'Career Skills', 'Suppliers and Sourcing Risk', 'Single source',
      'A plant relies on one supplier for a custom sensor, and that supplier is in a flood-prone region. Best risk response?',
      'Assess exposure and develop mitigation such as alternate sourcing, safety stock, or redesign options',
      [
        ['Treat purchase orders as sufficient protection against regional disruption', 'Weather risk is independent of contractual terms.'],
        ['Drop the supplier immediately without qualifying another', 'Dropping the only source before qualifying a replacement causes the very disruption being avoided.'],
        ['Treat custom sourcing as a resilience advantage by itself', 'Custom parts amplify single-source risk; they do not reduce it.'],
      ],
      'Supplier risk work connects geography, uniqueness, qualification time, and business impact. Mitigation should be planned before disruption tests the network.'),
    q(4250996, 'Career Skills', 'Suppliers and Sourcing Risk', 'Supplier qualification',
      'A buyer finds a cheaper supplier for a regulated component and wants to switch this week. What must happen before using the new source?',
      'Complete required qualification, quality, compliance, and capacity checks before approving production use',
      [
        ['Switch immediately because cheap parts deserve trust', 'Cost is not a qualification criterion. Regulated components carry compliance obligations.'],
        ['Ask for a friendly email and call it qualification', 'Informal correspondence is not a qualification record.'],
        ['Use the supplier only on orders nobody notices', 'Selective unauthorised use is still unauthorised.'],
      ],
      'Supplier qualification protects quality and compliance. Speed matters, but unapproved sources create defects and regulatory exposure.'),
    q(4250997, 'Career Skills', 'Suppliers and Sourcing Risk', 'Supplier ethics',
      'A supplier offers a major price cut, but its labour-cost explanation is vague and the region has known forced-labour risk. What should procurement do?',
      'Perform enhanced due diligence before awarding or expanding business',
      [
        ['Take the savings because vague is efficient', 'Vagueness on labour cost in a high-risk region is precisely the human-rights diligence trigger.'],
        ['Treat unusually low labour cost as proof of superior efficiency', 'Unexplained low cost may indicate non-compliance with labour standards, not efficiency.'],
        ['Avoid asking questions so the quote stays simple', 'Avoidance of due-diligence questions is itself the breach.'],
      ],
      'Supplier responsibility includes human-rights risk. Unusually low costs in high-risk contexts deserve evidence, not wishful thinking.'),
    q(4250998, 'Career Skills', 'Suppliers and Sourcing Risk', 'Supplier scorecards',
      'A supplier scorecard shows a sharp on-time drop in one month during a carrier outage. Best interpretation?',
      'Review the cause, trend, and controllability before changing supplier status',
      [
        ['Fire the supplier because one chart frowned', 'One-month deviations from external causes do not justify termination.'],
        ['Treat every weather-affected scorecard as unusable performance evidence', 'Universal metric-ignoring abandons supplier performance management.'],
        ['Average it with unrelated quality scores until smooth', 'Cross-averaging unrelated dimensions hides specific signal.'],
      ],
      'Scorecards are decision tools, not automatic verdicts. Context helps distinguish supplier performance from external disruption.'),

    // Chapter 5: Operations and Capacity
    q(4250999, 'Career Skills', 'Operations and Capacity', 'Inbound defect',
      'A new component shipment has a 12% defect rate, but production is short on parts. Strongest operational response?',
      'Quarantine or control the lot, assess risk, involve quality and supplier teams, and decide disposition before use',
      [
        ['Feed the parts into production and hope inspection gets lucky', 'Releasing defective inputs guarantees downstream defects.'],
        ['Reject every future shipment forever', 'Permanent rejection without root-cause analysis is disproportionate.'],
        ['Mix defective parts with good ones so the rate looks lower', 'Diluting defect rates is statistical fraud and does not improve quality.'],
      ],
      'Supply chain speed cannot bypass quality control. Defective inbound material needs containment, assessment, supplier action, and a documented disposition.'),
    q(4250620, 'Career Skills', 'Operations and Capacity', 'Capacity surge',
      'A factory can meet a surge order by running overtime for four weekends, but maintenance warns a key line is already behind on service. What should planning consider?',
      'Capacity, labour limits, maintenance risk, customer priority, and alternatives such as split shipments or subcontracting',
      [
        ['Treat scheduled maintenance as unused capacity during surge demand', 'Skipping maintenance creates equipment failure risk that costs more than the order.'],
        ['Treat maintenance risk as making all surge orders infeasible', 'Reflexive rejection forfeits options like split shipments or subcontracting.'],
        ['Move maintenance to next year and hope bearings are patient', 'Deferred maintenance compounds and creates larger failures.'],
      ],
      'Capacity planning is more than available hours. Overusing constrained equipment can trade one urgent order for a larger outage.'),
    q(4250621, 'Career Skills', 'Operations and Capacity', 'Bottleneck location',
      'Orders wait four hours before packing while upstream picking finishes early. What should operations analyse first?',
      'Packing capacity, staffing, work balance, and handoff flow because the constraint appears at packing',
      [
        ['Hire more pickers because picking finished early', 'Adding capacity upstream of the bottleneck increases queue, not throughput.'],
        ['Speed up receiving because it sounds operational', 'Receiving is upstream of both stages; speeding it does not address the constraint.'],
        ['Add meetings near the packing station', 'Meetings do not increase packing capacity.'],
      ],
      'Improvement starts at the constraint. Adding capacity away from the bottleneck may increase queues without raising throughput.'),
    q(4250622, 'Career Skills', 'Operations and Capacity', 'Production sequencing',
      'A paint line loses 40 minutes every time it changes colours. Orders are being sequenced strictly by entry time. What should scheduling examine?',
      'A sequence that balances due dates with reduced changeover time and service priorities',
      [
        ['Group all colours forever regardless of due dates', 'Pure changeover minimisation may miss customer commitments.'],
        ['Treat first-in sequencing as automatically fair despite setup losses', 'First-in sequencing wastes capacity when changeovers are material.'],
        ['Paint every item beige and call it lean', 'Eliminating product variety to ease scheduling rarely matches customer demand.'],
      ],
      'Scheduling often balances setup efficiency and customer commitments. Blind first-in sequencing can waste capacity when changeovers are material.'),

    // Chapter 6: Transportation, Warehousing, and Network Tradeoffs
    q(4250623, 'Career Skills', 'Transportation, Warehousing, and Network Tradeoffs', 'Full truck choice',
      'A planner can ship half-empty trucks daily or consolidate into fuller trucks twice a week, but customers need delivery within three days. Tradeoff?',
      'Freight efficiency must be balanced against promised service time and inventory availability',
      [
        ['Always wait for a perfectly full truck', 'Always waiting for a full truck violates the three-day service commitment.'],
        ['Always ship instantly regardless of cost', 'Instant shipment regardless of fill rate maximises cost without considering economics.'],
        ['Treat a familiar route label as evidence of better service economics', 'Route naming has no operational meaning.'],
      ],
      'Transportation planning balances cost, service, and timing. Consolidation saves money only if it still supports customer commitments.'),
    q(4250624, 'Career Skills', 'Transportation, Warehousing, and Network Tradeoffs', 'Warehouse slotting',
      'Pickers walk long distances because the fastest-moving items are stored in the farthest aisle. What improvement should the warehouse analyse?',
      'Slot high-velocity items closer to pick paths while considering size, safety, and replenishment needs',
      [
        ['Move every item daily for variety', 'Constant re-slotting destroys pick efficiency and creates replenishment chaos.'],
        ['Store items alphabetically even if demand differs', 'Alphabetical slotting ignores velocity, which is the dominant slotting driver.'],
        ['Ask pickers to walk faster and call it optimisation', 'Asking for faster walking does not solve the layout problem.'],
      ],
      'Warehouse slotting should reflect movement, handling constraints, and safety. Good layout reduces travel time without creating replenishment chaos.'),
    q(4250625, 'Career Skills', 'Transportation, Warehousing, and Network Tradeoffs', 'Network design',
      'A retailer considers adding a regional warehouse closer to customers. Which analysis is most relevant?',
      'Compare transportation cost, facility cost, service time, inventory needs, and resilience effects',
      [
        ['Open it wherever rent sounds friendly', 'Rent alone misses the bigger total-cost-to-serve picture.'],
        ['Count only the ribbon-cutting budget', 'Opening cost is a fraction of the lifetime operating cost.'],
        ['Treat shorter delivery distance as the whole network-cost analysis', 'Adding a node adds facility and inventory cost that may exceed freight savings.'],
      ],
      'Network design is a total-cost and service problem. A closer node can reduce delivery time but add facility and inventory complexity.'),
    q(4250626, 'Career Skills', 'Transportation, Warehousing, and Network Tradeoffs', 'Late but cheap carrier',
      'The lowest-cost carrier is late on 18% of shipments to a key customer, causing penalties. What comparison matters?',
      'Total delivered cost, including freight rate, penalties, customer impact, and service reliability',
      [
        ['Keep the carrier because line-item freight is low', 'Line-item freight ignores penalty and customer-damage costs.'],
        ['Switch to the fanciest carrier regardless of lane needs', 'Premium carrier without lane fit can be more expensive without solving the issue.'],
        ['Stop measuring late deliveries', 'Removing measurement does not improve performance.'],
      ],
      'Carrier cost must be evaluated with service consequences. A cheap lane can be expensive when penalties and customer damage are included.'),
    q(4250627, 'Career Skills', 'Transportation, Warehousing, and Network Tradeoffs', 'Incoterms landed cost',
      'A supplier quote looks cheaper, but it changes terms so your company pays import duties, insurance, and final delivery. What should procurement compare?',
      'The landed cost and risk transfer under the proposed terms, not just the unit price',
      [
        ['Compare only the price printed in bold', 'Bold prices exclude duties, freight, and insurance that the new terms shift to the buyer.'],
        ['Treat Incoterms as formatting rather than cost and risk allocation', 'Incoterms allocate cost and responsibility; they are not decoration.'],
        ['Treat supplier branding as a substitute for landed-cost analysis', 'Logo aesthetics are not a procurement criterion.'],
      ],
      'Incoterms and freight terms can shift cost and responsibility. Landed cost reveals the real economic comparison.'),

    // Chapter 7: S&OP and Cross-Functional Planning
    q(4250628, 'Career Skills', 'S&OP and Cross-Functional Planning', 'S&OP mismatch',
      'Sales promises a 25% launch uplift, operations has capacity for 10%, and finance assumes 15%. What should S&OP force?',
      'A cross-functional decision on one aligned plan, assumptions, constraints, and tradeoffs',
      [
        ['Let each team keep its favourite spreadsheet', 'Parallel plans guarantee misaligned execution.'],
        ['Average the percentages and call it destiny', 'Averaging conflicting forecasts hides the constraint instead of resolving it.'],
        ['Treat launch enthusiasm as evidence that supply constraints will clear', 'Capacity ignored creates the launch failure S&OP exists to prevent.'],
      ],
      'S&OP exists to reconcile demand, supply, and financial plans. Misaligned assumptions should become explicit decisions, not parallel realities.'),
    q(4250629, 'Career Skills', 'S&OP and Cross-Functional Planning', 'Order allocation',
      'A critical item is in short supply. Sales wants all units allocated to its biggest customer, while service teams warn smaller hospitals also need it. What should guide allocation?',
      'A documented allocation policy based on priority, contractual commitments, customer impact, and fairness',
      [
        ['Give it to whoever messages in all caps', 'Communication style is not an allocation criterion.'],
        ['Use the largest customer only because spreadsheets bow to revenue', 'Pure revenue allocation can violate contract terms and create reputational damage.'],
        ['Allocate alphabetically by customer name', 'Alphabetical allocation ignores priority and contract.'],
      ],
      'Scarce supply needs transparent rules. Allocation should balance business commitments with customer impact and fairness.'),
    q(4250630, 'Career Skills', 'S&OP and Cross-Functional Planning', 'Engineering change',
      'Engineering releases a new revision, but purchasing still has six months of old-revision stock on order. What should supply chain do?',
      'Coordinate effectivity dates, remaining demand, cancellation options, rework, and disposition of old stock',
      [
        ['Receive everything and hope engineering forgets', 'Receiving deprecated stock guarantees obsolescence write-offs.'],
        ['Treat old-revision inventory as obsolete before effectivity analysis', 'Scrapping without analysis wastes usable inventory.'],
        ['Keep both revisions active with no system controls', 'Uncontrolled dual-revision production creates assembly errors.'],
      ],
      'Engineering changes require supply coordination. Effectivity and disposition decisions prevent obsolete inventory and production mistakes.'),
    q(4250631, 'Career Skills', 'S&OP and Cross-Functional Planning', 'Late tendering blame',
      'Customer orders are late, and the warehouse blames carriers while carriers blame late tendering. Best next step?',
      'Map timestamps across pick, pack, tender, pickup, and delivery to locate the delay sources',
      [
        ['Treat the most forceful handoff narrative as root-cause evidence', 'Volume is not evidence of accuracy in cross-team blame.'],
        ['Switch carriers before checking tender data', 'Switching without diagnosis may not address the cause if delay is internal.'],
        ['Tell customers logistics is complicated and mysterious', 'Customer communication without diagnosis erodes trust.'],
      ],
      'Root-cause work needs shared facts across handoffs. Timestamp analysis can show where delays actually enter the process.'),

    // Chapter 8: Resilience, Analytics, and Decision Communication
    q(4250632, 'Career Skills', 'Resilience, Analytics, and Decision Communication', 'Port strike',
      'A port strike may delay ocean shipments for four weeks. Most practical response?',
      'Segment critical items, assess inventory coverage, evaluate alternate routes or modes, and communicate recovery plans',
      [
        ['Expedite every item by air immediately', 'Air-expediting everything maximises cost without distinguishing critical from non-urgent items.'],
        ['Wait silently until the dock reopens', 'Silence during disruption damages customer trust and forfeits planning time.'],
        ['Cancel demand forecasts because ports are moody', 'Cancelling forecasts removes the planning tool needed to manage the disruption.'],
      ],
      'Disruption response starts with segmentation and coverage. Not every SKU deserves the same expensive mitigation, but critical shortages need action.'),
    q(4250633, 'Career Skills', 'Resilience, Analytics, and Decision Communication', 'Expedite priority',
      'A team wants to air-freight every delayed item after a supplier miss. Budget is tight and some items are not needed for three weeks. What should the planner do?',
      'Prioritise expediting by customer impact, stockout risk, margin, and recovery timing',
      [
        ['Air-freight all items because airplanes solve feelings', 'Mass air freight maximises cost without addressing actual urgency.'],
        ['Treat the expedite budget as a blanket ban on urgent recovery actions', 'Skipping all expediting misses items where speed has real customer value.'],
        ['Treat all delayed items as equal despite different customer impact', 'Random selection ignores impact and outcome differences.'],
      ],
      'Expediting is a targeted tool. The right candidates are items where speed changes a meaningful service or financial outcome.'),
    q(4250634, 'Career Skills', 'Resilience, Analytics, and Decision Communication', 'Exception triage',
      'A planner starts the day with 300 alerts: 250 low-value orders with recovery dates and 50 high-priority orders missing carrier confirmation. What should be reviewed first?',
      'High-priority orders without confirmed recovery because they combine impact and uncertainty',
      [
        ['The oldest alert regardless of customer impact', 'Age without impact analysis is not a prioritisation criterion.'],
        ['Only alerts with short SKU names', 'SKU length is irrelevant to order priority.'],
        ['All low-value recovered orders before anything else', 'Working low-impact items first leaves high-impact items unresolved.'],
      ],
      'Exception management prioritises impact, uncertainty, and actionability. The most important alert is often the one that needs a decision now.'),
  ],

  // ---------------------------------------------------------------------------
  // TECHNICAL SALES ENGINEER INTERVIEW PREP
  // Syllabus chapters (technical_sales_engineer_interview_prep.md):
  //  1. The Sales Engineer Role
  //  2. Technical Discovery
  //  3. Demo Strategy
  //  4. Architecture and Solution Design
  //  5. Security, Privacy, and Compliance Objections
  //  6. Pilots, Proofs of Concept, and Mutual Action Plans
  //  7. Interview Scenarios and Role Plays
  //  8. Working With Product, Engineering, and Customer Success
  // ---------------------------------------------------------------------------
  technicalSales: [
    // Chapter 1: The Sales Engineer Role
    q(4250215, 'Career Skills', 'The Sales Engineer Role', 'Discovery before pitch',
      'A prospect says they need "better reporting," but has not explained who uses reports or what decisions are blocked. What should the seller do first?',
      'Ask about users, decisions, current workflow, data sources, deadlines, and what "better" would change',
      [
        ['Open a 60-slide reporting deck immediately', 'A slide deck without discovery may sell features the prospect does not need.'],
        ['Quote the premium analytics tier', 'Quoting before discovery anchors on price without value alignment.'],
        ['Promise executive dashboards with no idea who the executives are', 'Promising audience-specific output before identifying the audience invites mismatched delivery.'],
      ],
      'Discovery turns vague interest into a business problem. The best technical pitch starts with the decision the customer is trying to improve.'),

    // Chapter 2: Technical Discovery
    q(4250216, 'Career Skills', 'Technical Discovery', 'Demo request triage',
      'A prospect asks for a demo, but all you know is that they are "looking at automation." Best first move?',
      'Ask discovery questions about workflow pain, success criteria, users, systems, timeline, and decision process',
      [
        ['Give a generic feature tour from settings to logout', 'Untargeted tours rarely address what the prospect actually cares about.'],
        ['Quote the largest package before learning value', 'Quoting before value is established teaches the buyer to negotiate on price alone.'],
        ['Send a calendar invite titled "Trust me"', 'A trust-me invite skips the discovery that earns trust.'],
      ],
      'Technical sales starts with problem discovery. A tailored demo depends on knowing the workflow, stakeholders, constraints, and buying process.'),
    q(4250217, 'Career Skills', 'Technical Discovery', 'Vague latency target',
      'A buyer says, "Your API must be fast." What follow-up best turns that into a testable requirement?',
      'Ask for target latency, traffic volume, endpoints, geography, peak conditions, and current baseline',
      [
        ['Reply that "fast" is one of your favourite adjectives', 'Affirmation without specifics leaves the requirement undefined.'],
        ['Promise zero latency', 'Zero latency is not physically achievable; the promise itself signals lack of credibility.'],
        ['Avoid numbers because they make demos nervous', 'Avoiding numbers leaves both sides exposed to mismatched expectations.'],
      ],
      'Technical requirements need thresholds and context. Vague adjectives become useful only when tied to workloads, measurements, and acceptance criteria.'),
    q(4250218, 'Career Skills', 'Technical Discovery', 'No-owner opportunity',
      'A company says your product is interesting, but there is no budget owner, project sponsor, timeline, or defined pain. How should the opportunity be qualified?',
      'As early interest that needs nurturing or further qualification before treating it as an active deal',
      [
        ['As a guaranteed late-stage opportunity', 'Late-stage signals require budget, sponsor, and timeline, none of which exist here.'],
        ['As ready for legal redlines today', 'Legal redlines without a defined deal are wasted cycles.'],
        ['As disqualified forever because curiosity is forbidden', 'Curiosity can mature into a deal; categorical disqualification forfeits that.'],
      ],
      'Qualification separates curiosity from buying intent. Active opportunities usually have pain, ownership, timing, resources, and a decision path.'),
    q(4250219, 'Career Skills', 'Technical Discovery', 'Discovery bias',
      'You believe one module is perfect for the prospect, so you mainly ask questions that confirm it. Risk?',
      'Confirmation bias may hide better-fit needs, blockers, or reasons the module will fail',
      [
        ['The buyer will appreciate your confidence', 'Buyers can sense one-sided discovery and often disengage.'],
        ['The module becomes correct because you like it', 'Preference does not create fit.'],
        ['Discovery gets shorter, which means better', 'Shorter discovery from bias is not the same as efficient discovery.'],
      ],
      'Discovery should test fit, not just prove a preferred answer. Good sellers look for disconfirming evidence too.'),

    // Chapter 3: Demo Strategy
    q(4250220, 'Career Skills', 'Demo Strategy', 'Audience shift',
      'A demo originally built for administrators now includes the CFO, who cares about payback and risk. What should you adjust?',
      'Keep the technical flow concise and connect capabilities to financial impact, risk, and implementation effort',
      [
        ['Show every admin setting because depth equals destiny', 'Admin depth bores executives who care about outcomes.'],
        ['Treat executive buyers as irrelevant unless they operate the product daily', 'Ignoring the economic buyer is the textbook way to lose a deal.'],
        ['Switch to only pricing without showing value', 'Pricing without value sets up a price-only negotiation.'],
      ],
      'Great demos adapt to the audience. Technical detail matters, but executives need to see business outcomes and a credible path to value.'),
    q(4250221, 'Career Skills', 'Demo Strategy', 'Value framing',
      'Your product automatically reconciles duplicate customer records. Strongest value framing for an operations buyer?',
      'It reduces manual cleanup, improves reporting accuracy, and helps teams trust customer data',
      [
        ['It has a button with a very serious name', 'Button naming is not a value framing.'],
        ['Duplicates are aesthetically unpleasant', 'Aesthetics do not connect to operations outcomes.'],
        ['The algorithm is complex, so value is guaranteed', 'Algorithm complexity is not value to a buyer.'],
      ],
      'Value framing connects technical capability to buyer outcomes. Operations buyers care about time saved, quality improved, and risk reduced.'),
    q(4250222, 'Career Skills', 'Demo Strategy', 'Feature fascination',
      'A prospect is fascinated by an AI feature, but the stated business problem is reducing manual invoice exceptions. What should the seller do?',
      'Tie the feature discussion back to measurable invoice-exception outcomes and process fit',
      [
        ['Spend the whole meeting on AI sparkle', 'Disconnected AI conversation does not advance the actual buying decision.'],
        ['Sell the feature even if it does not affect invoices', 'Selling a non-relevant feature damages trust when it does not solve the problem.'],
        ['Avoid business outcomes because features are shinier', 'Avoiding outcomes loses the connection between feature and value.'],
      ],
      'Technical sales should connect excitement to value. Features matter when they improve the workflow the customer actually needs to change.'),

    // Chapter 4: Architecture and Solution Design
    q(4250223, 'Career Skills', 'Architecture and Solution Design', 'Legacy integration scope',
      'A prospect needs your product to exchange data with a 15-year-old ERP through nightly flat files. What should you scope?',
      'Data fields, file format, transfer method, error handling, ownership, and proof-of-concept criteria',
      [
        ['Promise seamless magic before seeing a sample file', 'Magic promises before file review create scope mismatches at implementation.'],
        ['Tell them to replace the ERP before any conversation', 'Refusing integration because the system is old is not a sales response.'],
        ['Treat legacy integration as a post-sale implementation detail only', 'Deferring integration scoping converts a deal-shaping question into a renewal-blocking surprise.'],
      ],
      'Integration fit requires concrete data-flow mapping. Legacy does not mean impossible, but assumptions need validation before commitments.'),
    q(4250224, 'Career Skills', 'Architecture and Solution Design', 'API rate limits',
      'A customer wants to import 10 million records on day one, but your API has rate limits. What should the sales engineer plan?',
      'Estimate throughput, design a migration approach, discuss limits, and test with representative volume',
      [
        ['Hope 10 million is smaller in production', 'Volume rarely shrinks on go-live; it usually grows.'],
        ['Treat API rate limits as a migration nuisance rather than platform protection', 'Disabling limits can degrade the entire platform.'],
        ['Tell the customer imports are a state of mind', 'Avoidance does not address a real operational requirement.'],
      ],
      'Technical scoping should expose volume constraints early. Migration planning prevents a signed deal from becoming a launch failure.'),
    q(4250225, 'Career Skills', 'Architecture and Solution Design', 'Sync limitation',
      'During discovery, you learn the customer needs real-time bidirectional sync, but your product supports scheduled sync only. Ethical response?',
      'Explain the current limitation, possible workarounds, roadmap uncertainty, and fit implications',
      [
        ['Call scheduled sync real-time if the schedule is frequent enough', 'Renaming the capability does not change what it does and damages trust at implementation.'],
        ['Promise the roadmap will arrive before procurement notices', 'Promising uncommitted features as guaranteed is misrepresentation.'],
        ['Avoid mentioning sync until after signature', 'Concealing fit gaps until after signature creates a refund and trust crisis.'],
      ],
      'Technical sales builds trust by naming fit gaps. Workarounds can be valid, but they should not be disguised as native capability.'),
    q(4250226, 'Career Skills', 'Architecture and Solution Design', 'Data migration quality',
      'A customer says migration will be easy, then shares sample CSVs with duplicate IDs and inconsistent date formats. What should you recommend?',
      'Run data profiling and define cleansing, mapping, validation, and ownership before migration',
      [
        ['Import as-is because databases enjoy puzzles', 'Importing dirty data creates downstream errors at scale.'],
        ['Blame the customer and abandon the deal', 'Customer data is usually messy; the seller\'s role is to help structure the migration.'],
        ['Promise the system will intuit the right dates', 'Date inference can be wrong silently, which is the worst class of error.'],
      ],
      'Migration risk often lives in data quality. Profiling and cleansing plans make implementation estimates credible.'),

    // Chapter 5: Security, Privacy, and Compliance Objections
    q(4250227, 'Career Skills', 'Security, Privacy, and Compliance Objections', 'Security questionnaire',
      'Security sends a 200-question vendor questionnaire and asks for completion by Friday. What should the sales engineer do?',
      'Use approved security documentation, answer accurately, flag gaps, and coordinate subject-matter review where needed',
      [
        ['Guess every answer to keep the deal warm', 'Guessed answers become contractual commitments and can mislead the buyer\'s security team.'],
        ['Mark all controls as "yes" because the spreadsheet is long', 'Universal-yes marking misrepresents the security posture.'],
        ['Refuse security review because the demo was charming', 'Demos do not waive security review for any enterprise deal.'],
      ],
      'Security review depends on accurate evidence. Sales engineers should move quickly without inventing controls or hiding gaps.'),
    q(4250228, 'Career Skills', 'Security, Privacy, and Compliance Objections', 'SOC 2 status',
      'A prospect asks whether you are SOC 2 Type II certified. Your audit is underway but not complete. What should you say?',
      'State the current status accurately and share approved timeline or interim security materials',
      [
        ['Say yes because the audit is emotionally complete', 'Misrepresenting certification status is both an ethical and a contractual problem.'],
        ['Send a competitor report as a temporary substitute for your own audit evidence', 'Re-badging another company\'s evidence is fabrication.'],
        ['Redirect to unrelated product features instead of answering the assurance question', 'Avoiding security questions raises more concern than answering them honestly.'],
      ],
      'Security claims must be precise. In-progress certification is not the same as completed assurance.'),
    q(4250229, 'Career Skills', 'Security, Privacy, and Compliance Objections', 'Production data in pilot',
      'A prospect wants to upload production customer data into a pilot environment. What should the sales engineer verify first?',
      'Data handling approvals, security controls, privacy requirements, environment readiness, and whether anonymised data would suffice',
      [
        ['Accept the upload because pilots are casual', 'Pilots create real privacy and security obligations regardless of label.'],
        ['Use personal cloud storage for convenience', 'Personal storage bypasses all enterprise data controls.'],
        ['Tell them privacy starts after purchase', 'Privacy obligations begin with the data, not with the contract.'],
      ],
      'Pilots can create real data obligations. Sensitive data needs approved handling before it enters any environment.'),

    // Chapter 6: Pilots, Proofs of Concept, and Mutual Action Plans
    q(4250230, 'Career Skills', 'Pilots, Proofs of Concept, and Mutual Action Plans', 'Pilot sprawl',
      'A prospect wants a pilot with five teams, eight use cases, and no success criteria. What plan should you propose?',
      'Narrow the pilot to clear use cases, owners, timeline, data, success metrics, and an exit decision',
      [
        ['Accept unlimited scope so nobody feels constrained', 'Unbounded pilots run forever without producing a decision.'],
        ['Run the pilot forever and call it relationship-building', 'Endless pilots consume resources without converting to revenue.'],
        ['Treat stakeholder access as unnecessary until pilot wrap-up', 'Pilots without user access cannot validate value.'],
      ],
      'Pilots answer specific buying questions. Clear scope and success criteria prevent technical trials from becoming vague experiments.'),
    q(4250231, 'Career Skills', 'Pilots, Proofs of Concept, and Mutual Action Plans', 'POC without criteria',
      'A prospect wants a POC but says they will "know success when they see it." Best response?',
      'Define success criteria, scope, timeline, data, stakeholders, and next decision before starting',
      [
        ['Start immediately because mystery keeps POCs exciting', 'Mystery means no defined exit; the POC will not produce a decision.'],
        ['Build every feature so success has many hiding places', 'Feature sprawl in a POC delays the buying decision.'],
        ['Refuse all POCs on philosophical grounds', 'Categorical refusal denies POCs even where they would close the deal.'],
      ],
      'A POC should test agreed hypotheses. Clear criteria prevent endless experiments and help both sides decide fairly.'),
    q(4250232, 'Career Skills', 'Pilots, Proofs of Concept, and Mutual Action Plans', 'Drifting deal',
      'A qualified opportunity has strong interest but no agreed next steps after the demo. What should the account team propose?',
      'A mutual action plan with owners, dates, evaluation steps, and decision milestones',
      [
        ['Wait for the prospect to send destiny in calendar form', 'Passive waiting allows competitive deals to overtake.'],
        ['Send daily "just checking in" notes', 'Frequent low-content pings annoy prospects without progressing the deal.'],
        ['Jump straight to contract redlines', 'Redlines without evaluation skips the steps the buyer needs to commit.'],
      ],
      'Complex technical deals need shared process. A mutual plan turns interest into coordinated evaluation and decision movement.'),
    q(4250233, 'Career Skills', 'Pilots, Proofs of Concept, and Mutual Action Plans', 'Free trial drift',
      'A free trial has ten users, no onboarding completed, and no success metric after two weeks. What should the account team do?',
      'Reset the trial around target users, use cases, onboarding, success measures, and a decision date',
      [
        ['Let it drift because silence means love', 'Trial silence usually means disengagement, not commitment.'],
        ['Extend forever until usage appears magically', 'Indefinite extension without structure produces no decision.'],
        ['Close-lost immediately without asking why', 'Closing without diagnosis loses the recoverable opportunities.'],
      ],
      'Trials need structure. Users, goals, enablement, and decision timing turn product access into evaluation.'),

    // Chapter 7: Interview Scenarios and Role Plays
    q(4250234, 'Career Skills', 'Interview Scenarios and Role Plays', 'Build vs buy',
      'An engineering leader says, "We could build this ourselves." Best response?',
      'Compare build cost, time, maintenance, opportunity cost, risk, and whether the capability is strategic to own',
      [
        ['Frame the objection as engineering stubbornness rather than a real evaluation', 'Dismissing the technical buyer ends the conversation.'],
        ['Claim buying is always safer without comparing ownership trade-offs', 'Universal-buy claims have no credibility with engineering leaders.'],
        ['Promise the engineers that procurement can decide without technical input', 'Avoiding the build-vs-buy substance forfeits the chance to address it credibly.'],
      ],
      'Build-versus-buy objections deserve respect. A credible seller helps the buyer compare total effort, risk, control, and strategic focus.'),
    q(4250235, 'Career Skills', 'Interview Scenarios and Role Plays', 'Pricing too expensive',
      'A buyer says your solution is too expensive after seeing only license price. What should you do?',
      'Explore budget, value drivers, total cost, alternatives, and whether scope or packaging should change',
      [
        ['Drop the price before understanding the objection', 'Pre-emptive discounting trains the buyer to expect more discounts.'],
        ['Argue that expensive things are automatically better', 'Defending price by tautology does not address the buyer\'s concern.'],
        ['End the call because math has attacked', 'Ending the call abandons recoverable deals.'],
      ],
      'Price objections often hide value, budget, risk, or scope concerns. Diagnose before discounting.'),
    q(4250236, 'Career Skills', 'Interview Scenarios and Role Plays', 'Champion alone',
      'Your champion loves the solution, but procurement, security, and the VP of Operations still must approve it. What should you map next?',
      'Stakeholders, decision criteria, approval sequence, risks, and who owns each next step',
      [
        ['Ask the champion to approve secretly', 'No champion can override procurement, security, and executive approval secretly.'],
        ['Treat procurement as a paperwork step after technical approval', 'Late procurement engagement is the most common deal-stall pattern.'],
        ['Send the same demo recording to everyone and hope', 'Single-audience recording does not address the different criteria each stakeholder applies.'],
      ],
      'Complex sales require stakeholder mapping. A strong champion helps, but deals progress through the full buying committee.'),
    q(4250237, 'Career Skills', 'Interview Scenarios and Role Plays', 'Soft ROI',
      'A prospect wants an ROI model, but most benefits are time savings from fewer manual reviews. What should you do?',
      'Build assumptions transparently, separate hard and soft benefits, and validate with customer data where possible',
      [
        ['Turn every saved minute into cash with heroic math', 'Inflated soft-benefit math undermines model credibility.'],
        ['Refuse ROI because time is philosophical', 'Refusing ROI loses the chance to quantify value at all.'],
        ['Hide assumptions in tiny cells', 'Hidden assumptions destroy trust when the buyer reviews the model.'],
      ],
      'ROI models are persuasive when assumptions are visible. Separating benefit types keeps the business case credible.'),
    q(4250238, 'Career Skills', 'Interview Scenarios and Role Plays', 'Competitor outage',
      'A prospect asks you to comment on a competitor\'s outage. Most credible answer?',
      'Avoid speculation, acknowledge resilience matters, and explain your own architecture and incident practices with evidence',
      [
        ['Celebrate loudly because schadenfreude has pipeline', 'Celebrating a competitor\'s incident signals immaturity.'],
        ['Invent a root cause for the competitor', 'Inventing causes for incidents you did not investigate is misrepresentation.'],
        ['Say outages are impossible for your product', 'No serious enterprise product is outage-immune; the claim destroys credibility.'],
      ],
      'Competitive selling is strongest when factual and customer-centred. Overclaiming or speculating damages credibility.'),

    // Chapter 8: Working With Product, Engineering, and Customer Success
    q(4250239, 'Career Skills', 'Working With Product, Engineering, and Customer Success', 'Post-sale surprise',
      'A deal closes after promising a custom integration timeline. Customer success hears about it only after signature. What should have happened?',
      'Sales should align implementation, success, and product teams on commitments before close',
      [
        ['Celebrate first and let delivery discover the details', 'Discovery-by-delivery is exactly the handoff failure that destroys customer trust.'],
        ['Tell customer success that contracts are motivational fiction', 'Treating contracts as fiction undermines the entire delivery chain.'],
        ['Keep promises vague so nobody can check them', 'Vague promises become disputes at implementation.'],
      ],
      'Technical sales commitments become delivery obligations. Cross-functional handoff before close prevents surprise scope, timeline, and trust problems.'),
    q(4250240, 'Career Skills', 'Working With Product, Engineering, and Customer Success', 'Custom legal language',
      'A customer adds contract language requiring custom functionality your product team has not approved. What should sales do?',
      'Coordinate with product, legal, and delivery before accepting or revising the commitment',
      [
        ['Accept it because signatures are exciting', 'Accepting unapproved commitments creates downstream delivery failures.'],
        ['Treat unapproved custom functionality as a minor engineering estimate', 'Weekend-build assumptions are unreliable for committed customer features.'],
        ['Delete the clause and hope legal is sleepy', 'Silent deletion creates legal risk and trust damage if discovered.'],
      ],
      'Contract commitments create delivery obligations. Sales must align legal promises with product and implementation reality.'),
    q(4250241, 'Career Skills', 'Working With Product, Engineering, and Customer Success', 'Renewal expansion gap',
      'An existing customer wants to buy more seats, but usage data shows many current seats are inactive. Best account move?',
      'Diagnose adoption gaps and align expansion with enablement, value, and actual user need',
      [
        ['Sell more seats quickly before the data complains', 'Selling unused capacity creates a churn risk at renewal.'],
        ['Treat seat expansion as healthy even when current adoption is weak', 'Ignoring adoption produces revenue today and cancellation tomorrow.'],
        ['Cancel the customer for underusing software', 'Cancellation as a response to under-adoption forfeits the relationship.'],
      ],
      'Healthy expansion is tied to value realisation. Adoption gaps should be addressed so growth sticks.'),
    q(4250242, 'Career Skills', 'Working With Product, Engineering, and Customer Success', 'SLA precision',
      'A prospect asks for a one-hour resolution SLA for all tickets. Your standard support offers one-hour response for critical issues. What should you clarify?',
      'The difference between response and resolution, severity definitions, support tiers, and feasible commitments',
      [
        ['Agree because response and resolution are close cousins', 'Conflating response and resolution creates contractual obligations the team cannot meet.'],
        ['Promise all bugs fixed in an hour', 'Universal one-hour resolution is not operationally achievable for most software.'],
        ['Remove SLA language from the proposal entirely', 'Removing SLAs leaves enterprise customers unable to evaluate the commitment.'],
      ],
      'Support terms need precise definitions. Response, workaround, and resolution are different commitments with different operational costs.'),
    q(4250243, 'Career Skills', 'Working With Product, Engineering, and Customer Success', 'Roadmap commitment',
      'A prospect needs a feature that is on the roadmap for next quarter but not committed. Best response?',
      'Be clear about current availability, roadmap uncertainty, and whether the deal can proceed without the feature',
      [
        ['Promise next quarter as a sacred prophecy', 'Promising uncommitted roadmap dates creates a trust break when slippage happens.'],
        ['Pretend the feature exists in a hidden menu', 'Pretending features exist is direct misrepresentation.'],
        ['Say "roadmap" means legally guaranteed', 'Roadmap items are not contractual commitments unless formally agreed.'],
      ],
      'Roadmap items are not current product commitments unless formally agreed. Buyers need to know what is available now versus possible later.'),
  ],
}

export const careerAgentGeneratedQualificationsEthicsOpsQuestionsByTrack: Record<string, Question[]> = Object.fromEntries(
  Object.entries(careerAgentGeneratedQualificationsEthicsOpsBaseQuestionsByTrack).map(([trackId, questions]) => [
    trackId,
    runPolish(questions, [{ subTopics: CAREER_QUALS_ETHICS_OPS_SUB_TOPICS, mentorHints: CAREER_QUALS_ETHICS_OPS_MENTOR_HINTS, correctShortened: CAREER_QUALS_ETHICS_OPS_CORRECT_SHORTENED, source: 'careerQualsEthicsOps' }]),
  ]),
)
