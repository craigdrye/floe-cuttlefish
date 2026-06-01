import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe peopleManagement top-up'

export const peopleManagementTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  {
    id: 7317000,
    chapter: 'The Manager Job',
    title: 'One accountable',
    prompt:
      'On a RACI matrix for a launch, the team lists two people as Accountable (A) for the go/no-go decision. What is wrong with that?',
    correct: 'Accountability should sit with exactly one person; two Accountables means no one truly owns the outcome',
    wrong: [
      miss(
        'Nothing — sharing the A spreads risk and improves the decision',
        'Shared accountability does not spread risk; each person assumes the other is watching, so the decision falls through the gap.',
        'Think about what "one neck on the line" buys you for a yes/no decision.',
      ),
      miss(
        'It is fine as long as both are also Responsible (R)',
        'Being Responsible (doing the work) is separate from being Accountable (owning the result); two A holders is still the problem.',
        'R and A are different roles; the rule is about A, not R.',
      ),
      miss(
        'The real error is having any Consulted (C) parties on a launch',
        'Consulted parties are normal and useful; the defect here is duplicated accountability, not consultation.',
        'Re-read which letter was duplicated.',
      ),
    ],
    lesson:
      'In RACI the golden rule is exactly one Accountable per deliverable. Responsible parties do the work, but a single Accountable owner ensures the outcome has a clear owner. When two people share the A, each assumes the other has it and accountability effectively disappears.',
    source,
    generated: true,
  },
  {
    id: 7317001,
    chapter: 'The Manager Job',
    title: 'Liked vs trusted',
    prompt:
      'A new manager is well-liked but keeps softening or delaying hard messages so the team stays happy. Why is this a problem for trust specifically?',
    correct: 'Trust is built on reliability and transparency; withholding hard truths erodes it even while likeability stays high',
    wrong: [
      miss(
        'It is not a problem; being liked is the same as being trusted',
        'Likeability and trust are different. People can like a manager while learning they cannot rely on straight information from them.',
        'Distinguish "pleasant to be around" from "tells me the truth I can act on."',
      ),
      miss(
        'The only risk is that the manager looks weak to senior leadership',
        'Perception upward is secondary; the core damage is to the team relationship that depends on honest, timely information.',
        'Who relies on the hard message most directly?',
      ),
      miss(
        'It builds trust because conflict always destroys relationships',
        'Avoiding necessary conflict does not build trust; respectful candor delivered reliably is what builds it.',
        'Consider whether avoidance or honesty is what makes a manager dependable.',
      ),
    ],
    lesson:
      'Trust comes from reliability plus transparency, not popularity. A manager who consistently softens or delays hard messages may stay likeable while becoming someone the team cannot rely on for straight information. Respectful candor, delivered on time, is what actually earns trust.',
    source,
    generated: true,
  },
  {
    id: 7317002,
    chapter: 'The Manager Job',
    title: 'Escalation path',
    prompt:
      'A manager writes an operating charter. For decisions the team cannot resolve themselves, the single most useful thing to specify is:',
    correct: 'Who the decision escalates to and what triggers escalation, so unresolved issues do not stall silently',
    wrong: [
      miss(
        'A rule that the team must reach unanimous consensus on everything',
        'Mandatory unanimity stalls decisions and is not an escalation path; it replaces a bottleneck with gridlock.',
        'An escalation path is about where a stuck decision goes, not forcing 100% agreement.',
      ),
      miss(
        'That the manager personally approves every decision regardless of size',
        'Routing everything through the manager recreates the bottleneck the charter is meant to prevent.',
        'Reserve escalation for genuinely stuck or high-risk calls, not all of them.',
      ),
      miss(
        'A list of which decisions are forbidden from ever being discussed',
        'Forbidding discussion does not tell the team where a stuck decision should go; it just hides the problem.',
        'The charter should route hard decisions, not suppress them.',
      ),
    ],
    lesson:
      'A useful operating charter makes decision rights explicit and names an escalation path: where an unresolved or high-risk decision goes and what triggers sending it there. Without it, stuck decisions either stall silently or all funnel back to the manager, recreating the bottleneck.',
    source,
    generated: true,
  },
  {
    id: 7317003,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'OKR vs KPI',
    prompt:
      'A team tracks "support tickets resolved per week" as a steady health metric and also sets "cut average resolution time from 30h to 12h by Q3." Which is the OKR and which is the KPI?',
    correct: 'The resolution-time target is the OKR (ambitious, time-bound change); tickets-per-week is the KPI (ongoing health metric)',
    wrong: [
      miss(
        'Both are KPIs because both are numbers',
        'Being numeric does not make something a KPI; an OKR pairs an ambitious objective with measurable key results to drive change.',
        'Ask which one is meant to change the status quo by a deadline.',
      ),
      miss(
        'The tickets-per-week metric is the OKR because it is tracked weekly',
        'Tracking cadence does not define the type; the steady operational metric is a KPI, the time-bound change goal is the OKR.',
        'OKR vs KPI is about drive-change vs monitor-health, not how often you look.',
      ),
      miss(
        'Neither qualifies because OKRs and KPIs must always be financial',
        'OKRs and KPIs are not restricted to financial metrics; operational and quality measures count.',
        'Money is not a requirement for either concept.',
      ),
    ],
    lesson:
      'KPIs monitor ongoing operational health ("how are we doing right now"). OKRs pair an ambitious objective with measurable key results to drive a specific change by a deadline ("this far, this fast, and why it matters"). A steady throughput metric is a KPI; a bold time-bound improvement target is an OKR.',
    source,
    generated: true,
  },
  {
    id: 7317004,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'Decision log purpose',
    prompt:
      'A team keeps making the same decision twice because no one remembers what was agreed or why. What lightweight practice fixes this best?',
    correct: 'A decision log recording what was decided, by whom, when, and the reasoning behind it',
    wrong: [
      miss(
        'Adding a second weekly status meeting to re-confirm everything',
        'More meetings re-litigate decisions instead of recording them; the gap is durable memory, not more talking.',
        'The problem is decisions are forgotten, not under-discussed.',
      ),
      miss(
        'Telling everyone to simply remember decisions better',
        'Relying on memory is exactly what failed; the fix is a written, shared record.',
        'A reliable system beats willpower for institutional memory.',
      ),
      miss(
        'Requiring that only the manager is ever allowed to decide',
        'Centralizing all decisions creates a bottleneck and still does not record the reasoning for the team.',
        'You want a record of decisions, not fewer deciders.',
      ),
    ],
    lesson:
      'A decision log captures what was decided, who decided it, when, and the reasoning. It prevents teams from re-litigating settled questions, preserves context when people change roles, and makes priority changes traceable. It is part of a healthy operating rhythm alongside 1:1s, team meetings, and async updates.',
    source,
    generated: true,
  },
  {
    id: 7317005,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'Definition of done',
    prompt:
      'A manager assigns "clean up the analytics dashboard." Two weeks later the work is "done" but disputed. What was missing up front?',
    correct: 'A definition of done with concrete acceptance criteria and any constraints that must hold',
    wrong: [
      miss(
        'A longer deadline so there was more time to interpret it',
        'More time does not resolve an undefined target; the dispute is about what "done" means, not duration.',
        'Adding days does not clarify the success criteria.',
      ),
      miss(
        'A reminder that the assignee should just use good judgment',
        '"Use good judgment" leaves acceptance criteria subjective, which is what caused the dispute.',
        'Subjective acceptance fails exactly at acceptance time.',
      ),
      miss(
        'A public announcement that the task exists',
        'Visibility of the task is not the same as a shared definition of what completion looks like.',
        'People knew about it; they disagreed on "done."',
      ),
    ],
    lesson:
      'Vague assignments like "clean up the dashboard" fail because nobody agreed what done means. A definition of done states concrete, checkable acceptance criteria plus any constraints that must not be broken. It turns "I will know good when I feel it" into something the assignee can actually aim at.',
    source,
    generated: true,
  },
  {
    id: 7317006,
    chapter: 'Delegation and Ownership',
    title: 'Situational style match',
    prompt:
      'Using Hersey-Blanchard Situational Leadership, an employee is highly skilled and highly motivated on a routine task. Which style fits best?',
    correct: 'Delegating (S4): low direction, low support — hand over the outcome and stay available',
    wrong: [
      miss(
        'Directing (S1): high direction, low support with step-by-step instructions',
        'S1 fits low-skill, low-confidence people on new tasks; over-directing an expert is micromanagement.',
        'High competence plus high commitment is the top of the readiness scale.',
      ),
      miss(
        'Coaching (S2): high direction and high support',
        'S2 fits someone keen but not yet skilled; a proven expert does not need heavy direction.',
        'Coaching is for low competence, high motivation — not this person.',
      ),
      miss(
        'Supporting (S3): low direction but high support to rebuild confidence',
        'S3 fits a capable person whose motivation or confidence has dipped; here motivation is already high.',
        'Support is the lever when competence is high but commitment is shaky.',
      ),
    ],
    lesson:
      'Situational Leadership matches style to follower readiness: Directing (S1) for low skill/low confidence, Coaching (S2) for low skill/high motivation, Supporting (S3) for high skill/shaky commitment, and Delegating (S4) for high skill/high motivation. A capable, motivated person on a routine task should be delegated to, not directed.',
    source,
    generated: true,
  },
  {
    id: 7317007,
    chapter: 'Delegation and Ownership',
    title: 'Autonomy meets risk',
    prompt:
      'A manager wants to delegate a task that is high-risk (a public client commitment) to a capable but unproven team member. The smartest move is to:',
    correct: 'Delegate the outcome but set tighter checkpoints and clear decision boundaries because of the risk',
    wrong: [
      miss(
        'Give full autonomy with no checkpoints because the person is capable',
        'Autonomy should scale with demonstrated capability and the stakes; high risk warrants closer checkpoints even for capable people.',
        'Match the leash to both skill and consequences, not skill alone.',
      ),
      miss(
        'Keep the task entirely and never delegate anything risky',
        'Refusing to delegate risk caps the person’s growth and makes the manager the bottleneck; structured delegation is possible.',
        'Risk calls for guardrails, not zero delegation.',
      ),
      miss(
        'Delegate it and disappear so they sink or swim',
        'Sink-or-swim on a high-stakes client commitment risks real damage and abandons support.',
        'Real delegation keeps support and review proportional to risk.',
      ),
    ],
    lesson:
      'How much autonomy to grant depends on both the person’s demonstrated capability and the work’s risk. For a capable-but-unproven person on a high-stakes task, delegate the outcome but add tighter checkpoints and explicit decision boundaries. That protects the result without sliding into micromanagement.',
    source,
    generated: true,
  },
  {
    id: 7317008,
    chapter: 'Delegation and Ownership',
    title: 'Escalation trigger in the brief',
    prompt:
      'A strong delegation brief includes outcome, authority, constraints, support, and timeline. What does adding an explicit escalation trigger accomplish?',
    correct: 'It tells the owner exactly when to pull the manager in, preventing both silent drift and over-asking',
    wrong: [
      miss(
        'It transfers all responsibility back to the manager immediately',
        'An escalation trigger defines a specific condition for involving the manager; it does not hand ownership back wholesale.',
        'A trigger is a tripwire for specific situations, not a return of ownership.',
      ),
      miss(
        'It signals the manager does not trust the person to do the work',
        'A clear trigger is a trust enabler — it lets the person act freely until a defined line, rather than checking constantly.',
        'Boundaries usually increase confident autonomy, not reduce it.',
      ),
      miss(
        'It is unnecessary if the timeline is already specified',
        'A timeline says when work is due; an escalation trigger says when to raise an emerging risk, which a deadline does not cover.',
        'Deadlines and escalation conditions answer different questions.',
      ),
    ],
    lesson:
      'An escalation trigger in a delegation brief names the specific condition under which the owner should bring the manager in (e.g., "if legal issues appear" or "if cost exceeds X"). It prevents silent drift on real problems and stops over-asking on small ones, letting the person own confidently up to a clear line.',
    source,
    generated: true,
  },
  {
    id: 7317009,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'SBI structure',
    prompt:
      'Which statement follows the SBI feedback model (Situation, Behavior, Impact) most faithfully?',
    correct:
      'In Tuesday’s client call, you talked over the client’s question twice, and as a result we missed the concern they were raising.',
    wrong: [
      miss(
        'You have a real problem with listening and it is becoming your reputation.',
        'This is a character label and a vague reputation claim, not a specific situation, observed behavior, and impact.',
        'SBI describes what happened, not who someone "is."',
      ),
      miss(
        'You are usually great in meetings, so keep it up and you’ll be fine.',
        'This is unspecific praise with no situation, observed behavior, or impact tied to a moment.',
        'SBI anchors to a specific situation and behavior, not a general vibe.',
      ),
      miss(
        'The client seemed annoyed, so something you did probably upset them somehow.',
        'This guesses at others’ feelings and stays vague about the behavior; SBI states the observed behavior and its concrete impact.',
        'Name the behavior you saw, not a guess at someone’s mood.',
      ),
    ],
    lesson:
      'The SBI model from the Center for Creative Leadership structures feedback as Situation (when/where), Behavior (the specific observable action), and Impact (the concrete effect). It keeps feedback objective and actionable and reduces defensiveness by avoiding character labels and mind-reading.',
    source,
    generated: true,
  },
  {
    id: 7317010,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'GROW sequence',
    prompt:
      'In the GROW coaching model, a manager has clarified the Goal and explored the current Reality. What comes next?',
    correct: 'Options — explore possible courses of action before deciding',
    wrong: [
      miss(
        'Jump straight to assigning the action you think is best',
        'Prescribing your answer skips the Options step and the person’s ownership; GROW generates choices before committing.',
        'O comes before W — generate options before locking the way forward.',
      ),
      miss(
        'Re-state the Goal again to make sure it is ambitious enough',
        'The Goal was already clarified; repeating it stalls the conversation instead of moving to Options.',
        'You have done G and R; what does the next letter stand for?',
      ),
      miss(
        'Move directly to a commitment question before exploring possible actions',
        'Will/Way forward is the final step; committing before exploring Options yields a thin, unconsidered plan.',
        'Commitment lands better after options have been weighed.',
      ),
    ],
    lesson:
      'GROW runs in order: Goal (what they want), Reality (the honest current situation), Options (possible actions, generated by the person), and Will/Way forward (the chosen commitment and next step). After Goal and Reality, the coach helps the person surface Options before committing — that ownership is what makes the plan stick.',
    source,
    generated: true,
  },
  {
    id: 7317011,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'Coach or direct',
    prompt:
      'A junior employee is about to make a safety-critical configuration change for the first time, under time pressure, and is unsure of the steps. Should the manager coach or direct?',
    correct: 'Direct — give clear, specific instructions, because skill is low and the risk and urgency are high',
    wrong: [
      miss(
        'Coach with open questions to build their judgment in the moment',
        'Coaching suits situations with enough skill and time; a high-risk, time-pressured first attempt needs clear direction.',
        'Open questions are great later — not during a risky first run under the clock.',
      ),
      miss(
        'Step back entirely so they learn from the consequences',
        'Letting a safety-critical mistake happen to "teach a lesson" is reckless when stakes are high.',
        'Some lessons are too costly to learn the hard way.',
      ),
      miss(
        'Always coach, because directing undermines autonomy',
        'Directing is the right call when skill is low and risk/urgency are high; it is not an autonomy violation, it is appropriate support.',
        'Coaching vs directing depends on skill, risk, and time — not a fixed rule.',
      ),
    ],
    lesson:
      'Whether to coach (ask questions, build judgment) or direct (give the answer) depends on the person’s skill plus the task’s risk and urgency. A first-time, safety-critical change under time pressure calls for clear direction. Coaching becomes appropriate once skill is higher and there is room to think.',
    source,
    generated: true,
  },
  {
    id: 7317012,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'Recognition that lands',
    prompt:
      'A manager wants recognition to actually reinforce behavior rather than feel like generic praise. The most effective recognition is:',
    correct: 'Specific about the behavior and its impact, and timely — close to when the work happened',
    wrong: [
      miss(
        'Saved up and delivered all at once in the annual review',
        'Delayed, batched praise loses the link to the behavior; recognition works best close to the event.',
        'Timing matters for praise just as it does for corrective feedback.',
      ),
      miss(
        'Always public and identical for everyone to seem fair',
        'Identical, generic praise does not reinforce a specific behavior, and forced public praise can misfire for some people.',
        'Reinforcement comes from specificity, not uniformity.',
      ),
      miss(
        'Vague and frequent ("great job, team!") so people feel good often',
        'Frequent but vague praise does not tell people which behavior to repeat.',
        'People can only repeat behavior they can identify.',
      ),
    ],
    lesson:
      'Recognition reinforces behavior when it is specific (names the behavior and its impact) and timely (close to the event). Generic or delayed praise feels nice but does not tell people what to repeat. The same specificity-and-timing principle that makes corrective feedback useful makes recognition useful.',
    source,
    generated: true,
  },
  {
    id: 7317013,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'Clarity gap diagnosis',
    prompt:
      'A capable, motivated employee keeps delivering reports in the wrong format, and the tooling works fine. Before coaching skill or questioning motivation, what should the manager check?',
    correct: 'Whether expectations were ever clearly communicated — this looks like a clarity gap',
    wrong: [
      miss(
        'Frame it as low commitment and start a performance-motivation conversation',
        'The person is motivated; treating clarity issues as attitude leads to an unfair, ineffective intervention.',
        'A motivated person doing it "wrong" may simply not know what right looks like.',
      ),
      miss(
        'Send them to formatting training before checking whether the expected format was explained',
        'Training a capable person who was never told the expected format wastes effort and misses the cause.',
        'Skill training does not fix never-communicated expectations.',
      ),
      miss(
        'Open a tooling-replacement project even though the current reporting tool works',
        'The tooling works fine, so a system fix targets the wrong cause.',
        'If the tool works, the breakdown is elsewhere.',
      ),
    ],
    lesson:
      'Performance diagnosis separates skill, will (motivation), clarity, and system gaps. A capable, motivated person repeatedly missing an expectation — with working tools — usually points to a clarity gap: the standard was never made explicit. Fixing the wrong gap is both ineffective and unfair.',
    source,
    generated: true,
  },
  {
    id: 7317014,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'Interests vs positions',
    prompt:
      'Two team members each insist on a different launch date and will not budge. The most productive next move is to:',
    correct: 'Surface the underlying interests behind each date rather than negotiating the stated positions',
    wrong: [
      miss(
        'Split the difference and pick a date halfway between the two',
        'Splitting positions can satisfy neither real interest and may create a date that works for no one.',
        'A compromise on positions can miss what each side actually needs.',
      ),
      miss(
        'Let the more senior person’s date win to end the debate quickly',
        'Deferring to seniority resolves the standoff by power, not by understanding the real constraints driving each date.',
        'Authority ends the argument without solving the underlying problem.',
      ),
      miss(
        'Tell both to stop arguing because conflict is unprofessional',
        'Suppressing the conflict leaves the underlying disagreement unresolved and can erode trust.',
        'Healthy conflict is solvable; banning it just buries the issue.',
      ),
    ],
    lesson:
      'Positions are what people say they want ("the 15th"); interests are why they want it (a customer commitment, a dependency, capacity limits). Surfacing interests turns a stalemate of positions into a solvable problem, often revealing options that satisfy both sides better than splitting the difference.',
    source,
    generated: true,
  },
  {
    id: 7317015,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'When to escalate',
    prompt:
      'During a conflict conversation, one employee discloses that another has been making repeated demeaning comments about their religion. What should the manager do?',
    correct: 'Treat it as a potential harassment matter, document the facts, and involve HR per the organization’s process',
    wrong: [
      miss(
        'Mediate it privately between the two and keep it off the record',
        'Possible discriminatory harassment is not an ordinary interpersonal dispute to mediate quietly; it has legal and policy implications requiring HR.',
        'Some issues are above a manager’s informal mediation authority.',
      ),
      miss(
        'Tell the employee to toughen up and not take comments personally',
        'Dismissing protected-characteristic harassment is both unfair and exposes the organization to serious liability.',
        'This category of complaint is never the employee’s problem to absorb.',
      ),
      miss(
        'Wait to see if it happens again before doing anything',
        'A credible report of repeated harassment based on a protected characteristic warrants action now, not a wait-and-see.',
        'Delay on this category increases harm and legal risk.',
      ),
    ],
    lesson:
      'Most conflicts a manager handles directly, but some require escalation: harassment or discrimination, safety threats, and matters with legal exposure. Repeated demeaning comments about a protected characteristic like religion are a potential harassment matter — document the facts and engage HR through the proper process rather than mediating quietly.',
    source,
    generated: true,
  },
  {
    id: 7317016,
    chapter: 'Performance Management and Fairness',
    title: 'A fair PIP',
    prompt:
      'What distinguishes a fair performance improvement plan (PIP) from one that is really just a paper trail to justify firing someone?',
    correct: 'Specific expectations, real support and resources, a reasonable timeline, and a genuine chance to succeed',
    wrong: [
      miss(
        'A short, vague set of goals so the employee cannot game them',
        'Vague goals make a PIP unfair and unactionable; clarity is essential to a genuine improvement chance.',
        'If the person can’t tell what success looks like, it isn’t fair.',
      ),
      miss(
        'No manager support, so the employee proves they can do it alone',
        'Withholding support signals the PIP is designed to fail, not to help the person improve.',
        'A genuine plan offers help, not a setup.',
      ),
      miss(
        'A timeline so tight that improvement is effectively impossible',
        'An unrealistic timeline removes the genuine chance to succeed, marking it as a pretext.',
        'The clock should make improvement possible, not impossible.',
      ),
    ],
    lesson:
      'A fair PIP states specific, measurable expectations, provides real support and resources, sets a reasonable timeline, and gives a genuine opportunity to succeed — with documented check-ins. A "PIP" with vague goals, no support, and an impossible deadline is a pretext, which is both unjust and legally risky.',
    source,
    generated: true,
  },
  {
    id: 7317017,
    chapter: 'Performance Management and Fairness',
    title: 'Calibration and bias',
    prompt:
      'Why do organizations run performance calibration sessions where managers compare ratings across teams?',
    correct: 'To align standards across managers and surface biases like recency, halo, and leniency before ratings are final',
    wrong: [
      miss(
        'To force every team onto an identical fixed distribution no matter the facts',
        'Calibration aligns standards and checks bias; rigidly forcing a quota distribution can itself be unfair and is not its purpose.',
        'The goal is consistent standards, not a mandatory bell curve.',
      ),
      miss(
        'To let the most senior manager decide everyone’s rating',
        'Calibration is a cross-manager check, not a handoff of judgment to the most senior person in the room.',
        'It is a comparison of evidence, not a deference to rank.',
      ),
      miss(
        'To make the process faster by skipping individual manager input',
        'Calibration adds a comparison step; it relies on manager input rather than skipping it, and speed is not its aim.',
        'It is about fairness and consistency, not speed.',
      ),
    ],
    lesson:
      'Calibration sessions bring managers together to compare ratings and reasoning across teams. They align what each rating level means, catch common biases — recency (overweighting recent events), halo (one strength coloring everything), and leniency/severity — and make outcomes more consistent and defensible before they are finalized.',
    source,
    generated: true,
  },
  {
    id: 7317018,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: 'Structured interview validity',
    prompt:
      'A hiring manager argues that free-flowing, unstructured interviews give the best read on candidates. What does the research on predictive validity actually show?',
    correct: 'Structured interviews — same questions, same order, scored on a rubric — predict job performance markedly better and reduce bias',
    wrong: [
      miss(
        'Unstructured interviews predict performance best because rapport reveals the most',
        'Meta-analyses consistently find unstructured interviews are weaker predictors; rapport mostly measures interviewer comfort, not fit.',
        'The evidence runs the opposite way from this intuition.',
      ),
      miss(
        'Both predict performance equally, so structure is just paperwork',
        'They do not predict equally; structured interviews roughly double the predictive validity and improve fairness.',
        'Structure changes the outcome, not just the admin.',
      ),
      miss(
        'Interviews of any kind do not predict performance, so format is irrelevant',
        'Structured interviews do meaningfully predict performance; the format is far from irrelevant.',
        'Format matters a lot to validity.',
      ),
    ],
    lesson:
      'Research (e.g., Sackett et al. 2022; Schmidt & Hunter 1998) shows structured interviews — every candidate gets the same job-relevant questions in the same order, scored on a consistent rubric — predict job performance about twice as well as unstructured ones and reduce bias related to background. Unstructured chats mostly measure interviewer comfort.',
    source,
    generated: true,
  },
  {
    id: 7317019,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: 'Role scorecard first',
    prompt:
      'Before opening a new role, what should a manager define so the interview process measures the right things?',
    correct: 'A role scorecard: the outcomes the role must achieve and the competencies that predict success',
    wrong: [
      miss(
        'A long list of nice-to-have personality traits the team would enjoy',
        'Personality-fit wish lists invite bias and rarely tie to job outcomes; the scorecard anchors on what the role must achieve.',
        'Start from outcomes the role exists to deliver, not who you’d like to hang out with.',
      ),
      miss(
        'The salary band, then let interviewers ask whatever they like',
        'Compensation is necessary but does not define what to assess; freestyle questions reintroduce unstructured-interview weakness.',
        'Knowing the budget does not tell interviewers what to measure.',
      ),
      miss(
        'A target headcount number to justify the hire to finance',
        'Headcount justification is a budgeting concern, not a definition of the success criteria the interview should test.',
        'Counting heads is not the same as defining the role.',
      ),
    ],
    lesson:
      'A role scorecard defines the problem the role solves: the concrete outcomes it must deliver and the competencies that predict success. It gives the structured interview something specific to assess, keeps debriefs anchored on job-relevant evidence, and reduces drift into "vibe"-based hiring.',
    source,
    generated: true,
  },
  {
    id: 7317020,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: '30/60/90 onboarding',
    prompt:
      'A manager designs a 30/60/90-day onboarding plan. What is the core purpose of structuring it this way?',
    correct: 'To stage early outcomes, relationships, and ramping ownership so the new hire builds momentum and clear expectations',
    wrong: [
      miss(
        'To delay giving the new hire any real responsibility until day 90',
        'A good plan ramps ownership earlier with first outcomes; withholding all responsibility for 90 days wastes momentum.',
        'The stages build toward ownership, not away from it.',
      ),
      miss(
        'To front-load every edge case and exception in the first week',
        'Edge-case-first onboarding skips the foundation needed to understand the edges; basics come before exceptions.',
        'You can’t grasp exceptions before the core of the job.',
      ),
      miss(
        'To replace 1:1s, since the plan covers everything they need',
        'A plan does not replace the check-in rhythm; new hires need 1:1s to unblock and recalibrate as they ramp.',
        'A document is not a substitute for ongoing conversation.',
      ),
    ],
    lesson:
      'A 30/60/90 plan sequences a new hire’s ramp: role context and key relationships and systems access early, first real outcomes by 30, growing ownership by 60, and fuller contribution by 90, paired with a check-in rhythm. It reduces early uncertainty and builds momentum instead of leaving the new hire to guess.',
    source,
    generated: true,
  },
  {
    id: 7317021,
    chapter: 'Inclusion, Motivation, and Team Health',
    title: 'SDT diagnosis',
    prompt:
      'A skilled employee who used to thrive now seems flat. They say, "I just do whatever the system tells me; I have no say anymore." Through Self-Determination Theory, which need is most undermined?',
    correct: 'Autonomy — the sense of volition and choice over their work',
    wrong: [
      miss(
        'Competence — they no longer feel capable of doing the work',
        'They are skilled and not reporting incompetence; the complaint is about having no say, which is autonomy.',
        'Listen for "I can’t do it" (competence) vs "I have no choice" (autonomy).',
      ),
      miss(
        'Relatedness — they feel disconnected from their colleagues',
        'Nothing here points to lost connection or belonging; the issue named is lack of choice over the work.',
        'Relatedness is about connection to people, not control over tasks.',
      ),
      miss(
        'None — flatness is just a personality phase to wait out',
        'SDT treats motivation as need-driven, not a phase; ignoring an undermined need keeps the disengagement going.',
        'Diagnose the need, don’t wait it out.',
      ),
    ],
    lesson:
      'Self-Determination Theory (Deci & Ryan) says intrinsic motivation depends on three needs: autonomy (volition and choice), competence (feeling effective), and relatedness (connection). "I have no say anymore" signals undermined autonomy. Naming the specific need points to the right fix — here, restoring meaningful choice — rather than a generic morale gesture.',
    source,
    generated: true,
  },
  {
    id: 7317022,
    chapter: 'Inclusion, Motivation, and Team Health',
    title: 'Safety is not softness',
    prompt:
      'A manager worries that building psychological safety (per Amy Edmondson) means lowering standards and avoiding hard feedback. What is the accurate view?',
    correct: 'Psychological safety is the shared belief it is safe to take interpersonal risks; it pairs with high standards, it does not replace them',
    wrong: [
      miss(
        'Correct — psychological safety means being nice and never criticizing work',
        'Safety is about safe risk-taking (speaking up, admitting mistakes), not the absence of standards or feedback.',
        'Edmondson’s high-performing teams are both safe and demanding.',
      ),
      miss(
        'Psychological safety only matters for junior staff, not experienced teams',
        'Safety drives learning behavior at all levels; experienced teams still need it to surface problems and dissent.',
        'It is a team property, not a seniority perk.',
      ),
      miss(
        'It means everyone must always agree to keep the peace',
        'Edmondson’s top stage is challenger safety — the freedom to disagree and question the status quo, not enforced agreement.',
        'The highest stage is challenging, not consensus.',
      ),
    ],
    lesson:
      'Amy Edmondson defines psychological safety as a shared belief that the team is safe for interpersonal risk-taking — asking questions, admitting mistakes, and challenging ideas. It enables learning and improves performance, and it works alongside high accountability and standards. Its stages run from inclusion to learner to contributor to challenger safety; the top stage is the freedom to dissent.',
    source,
    generated: true,
  },
  {
    id: 7317023,
    chapter: 'Managing Change and Scaling Yourself',
    title: 'ADKAR barrier point',
    prompt:
      'A team understands a new process and is fully trained on it, but adoption stalls because people do not believe the change is worth the disruption. In ADKAR terms, what is the barrier point?',
    correct: 'Desire — the team has Knowledge but lacks the will to support the change, so more training will not help',
    wrong: [
      miss(
        'Knowledge — they need another, more detailed training session',
        'They are already trained; ADKAR says progress stalls at the first missing element, and the missing one here is Desire, not Knowledge.',
        'They know how; the gap is whether they want to.',
      ),
      miss(
        'Ability — they cannot physically perform the new steps',
        'Nothing indicates a hands-on capability gap; the stated blocker is belief in the change’s value, which is Desire.',
        'Ability is about can-do in practice; here the issue is will.',
      ),
      miss(
        'Reinforcement — the change just needs to be celebrated more',
        'Reinforcement sustains a change already adopted; you cannot reinforce adoption that has not happened because Desire is missing.',
        'Reinforcement comes after adoption, not before Desire is built.',
      ),
    ],
    lesson:
      'ADKAR (Prosci) sequences change through Awareness, Desire, Knowledge, Ability, and Reinforcement, and progress stalls at the first insufficient element — the barrier point. A trained team that does not believe the change is worthwhile is stuck at Desire. Adding Knowledge will not move them; you must address why the change matters to them.',
    source,
    generated: true,
  },
])
