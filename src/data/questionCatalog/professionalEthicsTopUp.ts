import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe professionalEthics top-up'

export const professionalEthicsTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  {
    id: 7327000,
    chapter: 'Integrity, Role Duties, and the Law/Ethics Gap',
    title: 'Loyalty vs care',
    prompt: 'A board director quietly steers a contract to a company they secretly own. Of the two core fiduciary duties, which one does this most directly breach?',
    correct: 'The duty of loyalty, because the director must serve the organization’s interests, not their own',
    wrong: [
      miss('The duty of care, because the director failed to gather enough information', 'Care governs how diligently and how informed a decision is made, not whose interest it serves. The flaw here is self-dealing, which is a loyalty problem.', 'Ask whether the issue is sloppy diligence or divided allegiance.'),
      miss('Neither, because directors are free to do business with the company', 'Self-dealing without disclosure and an independent, fair process is the classic loyalty violation, not a permitted transaction.', 'Undisclosed personal gain from a board decision is the textbook breach.'),
      miss('The duty of obedience, because the director ignored a written rule', 'Obedience concerns staying within the entity’s lawful mission and charter; the harm here is putting personal profit ahead of the organization.', 'Name the duty about whose interests are served.'),
    ],
    lesson: 'Fiduciary duties split into loyalty (whose interests you serve) and care (how diligently and informedly you decide). Self-dealing, undisclosed conflicts, and using a position for personal gain breach loyalty; the business judgment rule shields good-faith, well-informed decisions under the duty of care.',
    source,
    generated: true,
  },
  {
    id: 7327001,
    chapter: 'Stakeholders, Harms, and Incentives',
    title: 'Facilitating payment',
    prompt: 'Under the U.S. Foreign Corrupt Practices Act (FCPA), which payment to a foreign official falls within the narrow "facilitating payment" exception rather than counting as prohibited bribery?',
    correct: 'A small payment to speed up a routine, non-discretionary act the official is already required to perform, such as processing a standard permit',
    wrong: [
      miss('A payment to persuade an official to award your firm a competitive contract', 'Influencing a discretionary decision such as a contract award is the core conduct the FCPA prohibits, not a facilitating payment.', 'The exception covers timing of routine acts, never winning discretionary business.'),
      miss('Any gift under a set dollar threshold, because small amounts are always legal', 'The FCPA sets no blanket dollar safe harbor; what matters is whether the act is routine and non-discretionary, not the amount.', 'There is no fixed-amount free pass in the statute.'),
      miss('A donation to an official’s preferred charity in exchange for faster approval', 'Tying value to official action is improper influence regardless of the recipient; routing it through a charity does not cure it.', 'Charitable framing does not turn an inducement into a routine fee.'),
    ],
    lesson: 'The FCPA’s facilitating-payment exception covers only small payments that speed up routine, non-discretionary acts an official must already perform (visas, standard permits, utility hookups). Payments to influence a discretionary outcome are bribery. Many laws, such as the UK Bribery Act, ban facilitating payments entirely, so global firms often prohibit them in policy.',
    source,
    generated: true,
  },
  {
    id: 7327002,
    chapter: 'Ethical Frameworks That Actually Help',
    title: 'The publicity test',
    prompt: 'A manager weighing a borderline decision asks, "Would I be comfortable if this choice were reported on the front page of tomorrow’s newspaper and read by my family and a regulator?" Which ethical heuristic is this?',
    correct: 'The publicity (newspaper or sunlight) test, which probes whether a decision can withstand public scrutiny',
    wrong: [
      miss('A cost-benefit analysis, which totals the expected harms and benefits', 'Cost-benefit weighing is consequentialist arithmetic; the publicity test instead asks whether the choice survives transparency and accountability.', 'This heuristic is about disclosure, not adding up outcomes.'),
      miss('The veil of ignorance, where you choose rules not knowing your position', 'Rawls’s veil asks you to design fair rules without knowing your role; the newspaper test asks whether your specific act would look defensible if exposed.', 'One designs rules blind to your seat; the other imagines exposure of this act.'),
      miss('A materiality assessment, which decides whether an item is large enough to disclose', 'Materiality is an accounting and reporting threshold for what must be reported; it is not a general ethics gut-check about public exposure.', 'Materiality sets reporting thresholds, not a publicity gut-check.'),
    ],
    lesson: 'The publicity test (also called the newspaper, sunlight, or front-page test) asks whether you could defend a decision if it were made fully public to family, colleagues, customers, and regulators. It is a fast transparency check that flags choices relying on secrecy, and it pairs well with formal frameworks rather than replacing them.',
    source,
    generated: true,
  },
  {
    id: 7327003,
    chapter: 'Speaking Up, Escalation, and Documentation',
    title: 'Dodd-Frank vs SOX',
    prompt: 'A U.S. public-company employee wants the strongest anti-retaliation protection available under the Dodd-Frank Act’s whistleblower provisions. To secure that specific protection, what does the law generally require of how they report?',
    correct: 'They generally must report the potential securities-law violation to the SEC, not only internally',
    wrong: [
      miss('They only need to report internally to a supervisor, and Dodd-Frank covers it automatically', 'That broad internal-reporting protection comes from Sarbanes-Oxley Section 806; Dodd-Frank’s anti-retaliation provision generally requires a report to the SEC.', 'Internal-only reporting is the SOX path, not the Dodd-Frank path.'),
      miss('They must post the allegation publicly online so there is a clear record', 'Public posting can forfeit protections and contaminate any investigation; it is not what either statute requires.', 'Going public is not the route to statutory protection.'),
      miss('They must first exhaust every internal channel before any law protects them', 'No exhaustion requirement gates Dodd-Frank; under SOX, internal reporting itself is already protected without first exhausting channels.', 'Neither statute makes protection wait on exhausting internal steps.'),
    ],
    lesson: 'Sarbanes-Oxley Section 806 protects employees who report securities-law concerns internally or to regulators, but Dodd-Frank’s anti-retaliation provision generally protects only those who report to the SEC, while offering stronger remedies (longer deadlines, federal-court suits, double back pay). Knowing which channel triggers which protection shapes how to escalate safely.',
    source,
    generated: true,
  },
  {
    id: 7327004,
    chapter: 'Fair Process, Investigations, and Bias',
    title: 'Four-fifths rule',
    prompt: 'An HR team checks a hiring test for bias using the EEOC’s "four-fifths rule." Under that rule of thumb, a selection procedure generally triggers an adverse-impact concern when one group’s selection rate is:',
    correct: 'Less than 80 percent (four-fifths) of the selection rate of the highest-selected group',
    wrong: [
      miss('More than 80 percent above the average selection rate of all groups', 'The rule compares a group to the highest-selected group, not to an average, and flags rates that fall below four-fifths, not rates that exceed a threshold.', 'It looks for rates that fall short of the top group, not rates that run high.'),
      miss('Exactly equal to the selection rate of every other group', 'Identical rates show no disparity; the rule exists precisely to flag substantial gaps, not equality.', 'Equal rates are the opposite of an adverse-impact flag.'),
      miss('Below 50 percent of all applicants from that group being hired', 'The threshold is a ratio between groups (four-fifths), not an absolute majority of any single group’s applicants.', 'The benchmark is a between-group ratio, not a 50 percent hire bar.'),
    ],
    lesson: 'The four-fifths (80%) rule from the 1978 Uniform Guidelines on Employee Selection Procedures is a screening rule of thumb: if a group’s selection rate is under 80 percent of the highest group’s rate, enforcement agencies infer possible adverse impact and look closer. It is an investigative trigger, not a legal definition of discrimination.',
    source,
    generated: true,
  },
  {
    id: 7327005,
    chapter: 'Ethical Culture and Control Design',
    title: 'Normalization of deviance',
    prompt: 'A team repeatedly skips a safety step, sees no immediate disaster, and over time treats the shortcut as the standard way of working. Sociologist Diane Vaughan named this organizational failure mode:',
    correct: 'Normalization of deviance, where an unsafe practice gradually becomes accepted because nothing bad has happened yet',
    wrong: [
      miss('Groupthink, where the desire for consensus suppresses dissent and critical evaluation', 'Groupthink is about a group prioritizing agreement over scrutiny in a decision; normalization of deviance is the slow drift of a rule-breaking practice into the routine.', 'One is silenced dissent in a meeting; the other is a creeping standard over time.'),
      miss('Moral licensing, where a past good deed makes someone feel entitled to a later lapse', 'Moral licensing is an individual self-permission effect after doing good; this scenario is a team’s collective, gradual acceptance of a deviation.', 'This is a group practice drifting, not a credit balance excusing one lapse.'),
      miss('Sunk-cost fallacy, where prior investment drives continued commitment to a losing course', 'Sunk cost is about throwing more resources after past spending; here the issue is a safety deviation becoming the unquestioned norm.', 'No prior investment is driving this; an accepted shortcut is.'),
    ],
    lesson: 'Normalization of deviance, identified by Diane Vaughan in her study of NASA’s Challenger disaster, is the gradual process by which a deviation from a standard becomes accepted because it has not yet caused harm. Controls counter it: treat near misses as signals, audit drift from procedure, and refresh the original rationale for safeguards.',
    source,
    generated: true,
  },
  {
    id: 7327006,
    chapter: 'Fair Process, Investigations, and Bias',
    title: 'Hear the other side',
    prompt: 'During a misconduct investigation, a manager is ready to issue a final decision against the respondent before the respondent has been told the allegations or given any chance to answer. Which core principle of fair process is most directly violated?',
    correct: 'The right to be heard: a respondent should know the allegations and have a genuine opportunity to respond before a decision is made',
    wrong: [
      miss('Proportionality, which requires the penalty to match the severity of the conduct', 'Proportionality concerns whether the sanction fits the offense; the violation here happens earlier, by deciding without letting the respondent answer at all.', 'The flaw is no chance to respond, not a mismatched penalty.'),
      miss('Confidentiality, which limits who may learn about the complaint and the parties', 'Confidentiality protects sensitive information during the process; it does not address denying the respondent notice and a chance to reply.', 'Restricting who knows is a different safeguard from hearing the accused.'),
      miss('Consistency, which requires similar cases to be handled in similar ways', 'Consistency compares this case to others; the immediate failure is procedural, deciding before the respondent can present their side.', 'Comparing across cases is separate from notice-and-response in this one.'),
    ],
    lesson: 'Procedural justice rests on giving people notice of the case against them and a real chance to respond before a decision (often summarized as "hear the other side"). Alongside an unbiased decision-maker, consistency, confidentiality, and proportionate outcomes, it makes investigations defensible even to someone you dislike.',
    source,
    generated: true,
  },
])
