import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe peopleManagement 103-pass'

export const peopleManagementR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ---------------------------------------------------------------------------
  // Chapter 1: The Manager Job
  // ---------------------------------------------------------------------------
  {
    id: 7610000,
    chapter: 'The Manager Job',
    title: 'Consulted vs Informed',
    prompt:
      'On a RACI, the security lead must give input that shapes the design before it is finalized, while the finance team only needs the final number afterward. How should each be coded?',
    correct: 'Security is Consulted (two-way input before deciding); finance is Informed (one-way notification after deciding)',
    wrong: [
      miss(
        'Both are Consulted, since both have a stake in the outcome',
        'Having a stake does not make someone Consulted; Consulted means two-way dialogue that shapes the decision, which finance here does not need.',
        'Distinguish "input that changes the design" from "told the result."',
      ),
      miss(
        'Security is Accountable and finance is Responsible',
        'Accountable owns the outcome and Responsible does the work; neither matches an advisor giving input or a party merely notified.',
        'A is the single owner, R does the work — neither describes "gives input" or "gets told."',
      ),
      miss(
        'Both are Informed, because they are not doing the build work',
        'Coding security as merely Informed would skip required input before the decision, defeating the point of consultation.',
        'If their input must arrive before the decision, "Informed" is too late.',
      ),
    ],
    lesson:
      'In RACI, Consulted is a two-way relationship: their input is sought and can change the decision, and it happens before the decision is made. Informed is one-way: they are told the outcome after the fact. Mixing these up either wastes people in meetings they do not need or skips input that should have shaped the work.',
    source,
    generated: true,
  },
  {
    id: 7610001,
    chapter: 'The Manager Job',
    title: 'Span of control reality',
    prompt:
      'A new director takes on 17 direct reports doing complex, non-routine work and wonders why coaching and 1:1s keep slipping. What does span-of-control thinking suggest?',
    correct:
      'Complex work narrows the workable span; 17 reports on non-routine work likely exceeds the attention a manager can give, so the structure needs layering or splitting',
    wrong: [
      miss(
        'There is a fixed ideal of exactly 7 reports, so anything above 7 is automatically wrong',
        'There is no single magic number; the workable span depends on work complexity, report experience, and how the manager spends time.',
        'Span is contingent, not a hard universal constant.',
      ),
      miss(
        'Span of control is irrelevant for knowledge work; only output matters',
        'Span directly limits how much coaching and unblocking a manager can provide; ignoring it is why the 1:1s slip.',
        'The slipping 1:1s are the symptom span-of-control predicts.',
      ),
      miss(
        'The director should simply work longer hours to cover all 17',
        'Heroics do not scale and burn the manager out; the structural mismatch needs structural fixes, not more hours.',
        'Personal effort cannot manufacture the attention a too-wide span removes.',
      ),
    ],
    lesson:
      'Span of control is the number of people reporting to one manager. There is no universal ideal — research often lands around 5-10 for general work — but the right span shrinks as work gets more complex and reports less experienced. A span that is too wide for complex work starves coaching and development; the fix is restructuring (adding a layer or splitting the team), not heroics.',
    source,
    generated: true,
  },
  {
    id: 7610002,
    chapter: 'The Manager Job',
    title: 'The psychological contract',
    prompt:
      'An engineer was implicitly promised interesting project work and growth when she joined, though nothing was written down. Two years of maintenance tickets later she quietly disengages. Which concept best explains the rupture?',
    correct:
      'A breach of the psychological contract — the unwritten mutual expectations between employee and employer',
    wrong: [
      miss(
        'A breach of the formal employment contract requiring legal remedy',
        'Nothing legally binding was promised; the broken expectations are unwritten, which is precisely what makes this psychological, not legal.',
        'The promise was implicit, so look for the unwritten-expectations concept.',
      ),
      miss(
        'A simple skill gap that more training would resolve',
        'She is disengaged, not incapable; training does not address unmet expectations about the nature of the work.',
        'She can do the work — the issue is what work she was led to expect.',
      ),
      miss(
        'A span-of-control problem with too many reports',
        'Span of control concerns how many people a manager oversees, unrelated to one person’s unmet growth expectations.',
        'This is about an individual’s expectations, not team size.',
      ),
    ],
    lesson:
      'The psychological contract is the set of unwritten, mutual expectations between an employee and employer about contributions and rewards (growth, interesting work, recognition, fairness). It is invisible until violated. When the implied deal silently breaks, engagement and trust erode even if every formal term is honored. Good managers surface and re-contract these expectations rather than letting them rot.',
    source,
    generated: true,
  },
  {
    id: 7610003,
    chapter: 'The Manager Job',
    title: 'Trust = reliability + transparency',
    prompt:
      'A manager is brilliant and always delivers, but routinely hides bad news and reverses positions without explanation. The team produces results yet says they "do not trust" him. Which component of trust is missing?',
    correct: 'Transparency — the team can rely on his output but cannot rely on getting straight, predictable information from him',
    wrong: [
      miss(
        'Reliability — he clearly cannot be counted on to deliver',
        'He always delivers, so reliability is present; the gap is in openness and predictability of information, not output.',
        'He delivers consistently, so look at the other half of the trust equation.',
      ),
      miss(
        'Likeability — he simply is not charismatic enough',
        'Trust is not popularity; a charming manager who hides information would still not be trusted.',
        'Trust and charm are different things entirely.',
      ),
      miss(
        'Nothing is missing; consistent results are the whole definition of trust',
        'Results alone do not create trust if people cannot predict his behavior or get honest information.',
        'Delivery without candor still leaves people guessing.',
      ),
    ],
    lesson:
      'Trust rests on reliability (you do what you say) plus transparency (you are open and predictable about what is happening and why). A manager can be reliable on output yet untrusted because he hides bad news and flips positions without explanation, making his behavior unpredictable. Both halves are required.',
    source,
    generated: true,
  },
  {
    id: 7610004,
    chapter: 'The Manager Job',
    title: 'Multiplier vs best IC',
    prompt:
      'A newly promoted team lead keeps grabbing the hardest tickets to "set the bar," and the team’s overall throughput drops even though his personal output is the highest on the team. What is the core diagnosis?',
    correct:
      'He is optimizing his own output instead of multiplying the team’s; a manager’s leverage is the team’s outcomes, not personal heroics',
    wrong: [
      miss(
        'The team is simply less skilled and needs to be replaced',
        'Nothing indicates a talent problem; by hoarding the hard work he denies the team the chance to grow and contribute.',
        'Before blaming the team, check what the lead is taking away from them.',
      ),
      miss(
        'He should grab even more work to compensate for the throughput drop',
        'Doing more himself deepens the bottleneck and further starves the team of growth and ownership.',
        'The drop is caused by his hoarding; more hoarding cannot cure it.',
      ),
      miss(
        'Throughput is irrelevant; individual excellence is the real measure of a manager',
        'A manager succeeds through others, so team throughput is exactly the relevant measure, not personal ticket counts.',
        'Managers are measured by the team’s output, not their own.',
      ),
    ],
    lesson:
      'The defining shift into management is from doing the work to owning the outcomes the team produces. A manager’s leverage comes from clarity, capability, and conditions — not from out-producing everyone. Staying the best individual contributor caps the team at one person’s output and starves others of growth.',
    source,
    generated: true,
  },
  {
    id: 7610005,
    chapter: 'The Manager Job',
    title: 'Re-contracting a missed commitment',
    prompt:
      'A manager committed to deliver a hiring plan by Friday but cannot finish it. Which action best preserves trust?',
    correct:
      'Proactively tell the affected people before Friday, explain why, and set a new specific date and what they can expect',
    wrong: [
      miss(
        'Quietly let the date pass and mention it only if someone asks',
        'Silent slippage is read as an unreliable, broken commitment; the damage is to predictability, the core of trust.',
        'Waiting to be asked treats the broken date as something to hide.',
      ),
      miss(
        'Deliver something incomplete on Friday and call it done to protect the date',
        'Shipping a hollow deliverable to hit a date trades honesty for appearances and surfaces the gap later, worse.',
        'A fake "done" is a transparency failure dressed as reliability.',
      ),
      miss(
        'Blame the delay on a vague "bandwidth" problem with no new commitment',
        'A vague excuse without a reset date leaves people unable to plan and signals avoidance.',
        'Re-contracting needs a concrete new commitment, not a fog.',
      ),
    ],
    lesson:
      'Commitments will sometimes slip; what protects trust is re-contracting transparently — telling affected people early, explaining the change, and resetting a specific new expectation. Breaking a commitment silently is what erodes the reliability-plus-transparency foundation of trust, far more than the slip itself.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 2: Goals, Priorities, and Operating Rhythm
  // ---------------------------------------------------------------------------
  {
    id: 7610006,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'OKR 0.7 sweet spot',
    prompt:
      'A team consistently scores 1.0 on every aspirational OKR, quarter after quarter. Under the common Google-style 0-1.0 scoring convention, what does this most likely indicate?',
    correct:
      'The objectives are not ambitious enough; aspirational OKRs are calibrated so that landing around 0.6-0.7 is the healthy "stretch" zone',
    wrong: [
      miss(
        'The team is elite and the targets are perfectly calibrated',
        'Perfect 1.0s every quarter on aspirational OKRs signal sandbagging, not calibration; stretch goals are meant to be only partly hit.',
        'For aspirational OKRs, a perfect score is a red flag, not a gold star.',
      ),
      miss(
        'They should lower targets so 1.0 stays reliably achievable',
        'Lowering aspirational targets to guarantee 1.0 defeats the purpose of a stretch goal, which is to reach beyond comfortable certainty.',
        'Making sure you always hit it removes the stretch entirely.',
      ),
      miss(
        'OKRs scored above 0.5 always mean the team failed',
        'Higher is not automatically failure; for aspirational OKRs roughly 0.6-0.7 is the target, and 1.0 suggests under-ambition.',
        'The concern is consistent perfection, not scores being "too high" in general.',
      ),
    ],
    lesson:
      'In the common Google-style model, aspirational OKRs use a 0-1.0 scale where ~0.6-0.7 is the healthy "sweet spot": ambitious enough to stretch but not so wild it crushes morale. Routinely scoring 1.0 on aspirational OKRs usually means the goals were set too low (sandbagging). Committed OKRs, by contrast, are pass/fail and expected to hit 1.0.',
    source,
    generated: true,
  },
  {
    id: 7610007,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'Committed vs aspirational',
    prompt:
      'A KR reads "ship the legally-required accessibility fixes before the regulatory deadline." How should this be treated under OKR conventions?',
    correct:
      'As a committed OKR scored pass/fail and expected to reach 1.0 — there is no acceptable middle ground',
    wrong: [
      miss(
        'As an aspirational OKR where landing around 0.7 is a fine result',
        'A legal must-do is not a stretch goal; 70% compliance with a regulatory requirement is a failure, not a healthy stretch score.',
        'Regulatory must-dos do not get a "good enough at 0.7" pass.',
      ),
      miss(
        'As a KPI, since deadlines are ongoing health metrics',
        'This is a one-time, change-driving deliverable with a deadline, not a steady operational health metric.',
        'A one-shot dated deliverable is goal work, not a recurring health gauge.',
      ),
      miss(
        'It should be dropped because binary goals do not fit OKRs',
        'Binary, must-hit results fit perfectly as committed OKRs; they are a recognized OKR category, not a misfit.',
        'OKRs explicitly include pass/fail committed goals.',
      ),
    ],
    lesson:
      'OKRs come in two flavors. Aspirational (stretch) OKRs use a graded 0-1.0 scale where ~0.7 is healthy. Committed OKRs are commitments the team must fully deliver — scored pass/fail with an expected 1.0. A legally-required, deadline-bound deliverable is a committed OKR; treating it as aspirational would wrongly normalize partial compliance.',
    source,
    generated: true,
  },
  {
    id: 7610008,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'Eisenhower quadrant for urgent-unimportant',
    prompt:
      'A manager’s week is consumed by interruptions that are urgent but not important to their core goals (routine approvals others could handle). In the Eisenhower matrix, what is the prescribed move for this quadrant?',
    correct: 'Delegate it — urgent-but-not-important work belongs to someone else, not the manager’s personal queue',
    wrong: [
      miss(
        'Do it first, because urgency always wins',
        'Eisenhower’s whole point is that urgency is not importance; "do first" is for tasks that are both urgent AND important.',
        'Urgent-and-important is "do first"; this task is only urgent.',
      ),
      miss(
        'Schedule it for deep focus time, like strategic work',
        'Scheduling is the move for important-but-not-urgent work; routine approvals are not the strategic quadrant.',
        'You schedule the important-not-urgent quadrant, not this one.',
      ),
      miss(
        'Eliminate it entirely, since it is not important to the manager',
        'The work still must get done by someone; it is delegated, not deleted. Elimination is for the not-urgent-and-not-important quadrant.',
        'It is not important to YOU, but it still matters to someone — so hand it off, not bin it.',
      ),
    ],
    lesson:
      'The Eisenhower matrix sorts tasks by urgency and importance into four quadrants: urgent+important = do now; important+not-urgent = schedule (where good managers spend most time); urgent+not-important = delegate; neither = eliminate. Routine urgent approvals others could handle live in the delegate quadrant — the leverage move is handing them off, not absorbing them.',
    source,
    generated: true,
  },
  {
    id: 7610009,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'Activity metric trap',
    prompt:
      'A support team proudly reports "number of tickets touched" rising 40% while customer-reported resolution satisfaction falls. What is the metric error?',
    correct:
      'They optimized an activity (output) metric instead of an outcome metric; busyness rose while the result the team exists for got worse',
    wrong: [
      miss(
        'The satisfaction survey must be broken, since activity is clearly up',
        'Rising activity alongside falling satisfaction is the classic sign of measuring motion, not results; doubting the outcome metric protects the wrong number.',
        'When activity and outcomes diverge, trust the outcome, not the busyness.',
      ),
      miss(
        'They should add more activity metrics to get a fuller picture',
        'Stacking more activity counts compounds the error; the missing thing is an outcome metric, not more measures of motion.',
        'More motion metrics will not reveal whether customers are helped.',
      ),
      miss(
        'Touching more tickets always proves better service',
        'Touching tickets is effort, not resolution; a ticket can be touched many times and still leave the customer unhappy.',
        'Touches counted are not problems solved.',
      ),
    ],
    lesson:
      'Activity (or output) metrics count motion — tickets touched, emails sent, hours logged. Outcome metrics measure the result that matters — problems actually resolved, customers satisfied. Confusing the two lets a team look busy while the real goal degrades. A healthy operating rhythm tracks outcomes and uses activity only as a leading indicator, never as the goal itself.',
    source,
    generated: true,
  },
  {
    id: 7610010,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'Making priority changes visible',
    prompt:
      'Mid-quarter, leadership reprioritizes and Project B now outranks Project A. The manager updates her own plan but tells no one. Two weeks later the team is still grinding on A. What principle was violated?',
    correct:
      'Priority changes must be made visible to the team; an unannounced reprioritization leaves people executing the old plan',
    wrong: [
      miss(
        'Nothing — the team should have proactively asked about reprioritization',
        'Teams cannot ask about a change they have no way to know happened; the manager owns communicating the shift.',
        'You cannot ask about a decision that was never shared.',
      ),
      miss(
        'The manager should have refused the reprioritization to avoid confusion',
        'The problem is not the change itself but its silent handling; refusing valid leadership direction is not the lesson.',
        'Reprioritizing is fine — hiding it is not.',
      ),
      miss(
        'She should hold a daily status meeting to prevent this',
        'A standing meeting is no substitute for clearly broadcasting a specific priority change when it happens.',
        'More meetings do not replace one clear announcement of the change.',
      ),
    ],
    lesson:
      'A core operating-rhythm discipline is making priority changes visible. When priorities shift, the manager must communicate the change, the reason, and what the team should now stop and start. Updating only your own plan silently is a common trap that wastes effort and erodes trust, because people keep executing the priorities they last knew about.',
    source,
    generated: true,
  },
  {
    id: 7610011,
    chapter: 'Goals, Priorities, and Operating Rhythm',
    title: 'KR vs objective',
    prompt:
      'In a well-formed OKR, the line "Become the most trusted onboarding experience in our market" is the Objective. Which of the following is a proper Key Result for it?',
    correct: 'Raise new-user 7-day activation from 48% to 65% and lift post-onboarding NPS from +20 to +40 this quarter',
    wrong: [
      miss(
        'Make onboarding feel more trustworthy and delightful',
        'A Key Result must be measurable; "feel more trustworthy" has no number to verify success against.',
        'A KR you cannot score with a number is not a KR.',
      ),
      miss(
        'Hold weekly onboarding working-group meetings',
        'Holding meetings is an activity/task, not a measurable outcome; KRs measure results, not the work done to get them.',
        'A KR measures the result, not the meetings about it.',
      ),
      miss(
        'Be the best onboarding team in the industry',
        'This restates the aspirational objective rather than providing a measurable result that would prove progress toward it.',
        'That is just the Objective again, not a measurable result.',
      ),
    ],
    lesson:
      'An OKR pairs a qualitative, inspiring Objective (where you want to go) with 2-5 quantitative Key Results (how you will know you got there). Key Results must be measurable outcomes with a baseline and target, not feelings, restated objectives, or activities. "Raise activation from 48% to 65%" is a real KR; "feel more trustworthy" is not.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 3: Delegation and Ownership
  // ---------------------------------------------------------------------------
  {
    id: 7610012,
    chapter: 'Delegation and Ownership',
    title: 'Readiness R2 style',
    prompt:
      'Using Hersey-Blanchard, a follower is eager and confident but lacks the skills for a new task (readiness R2: unable but willing). Which style fits?',
    correct: 'Coaching / Selling (S2): high direction and high support — explain the what and the why while staying encouraging',
    wrong: [
      miss(
        'Delegating (S4): low direction, low support, hand it off',
        'S4 is for R4 (able and willing); an unskilled person handed full autonomy on a new task will likely fail.',
        'Delegating fits the most ready follower, not a willing-but-unskilled one.',
      ),
      miss(
        'Supporting / Participating (S3): low direction, high support',
        'S3 suits R3 (able but unwilling/insecure) where skill exists and confidence or motivation is the gap; here the gap is skill.',
        'Low direction assumes the skill is already there — it is not.',
      ),
      miss(
        'Telling / Directing (S1): high direction, low support',
        'S1 fits R1 (unable and unwilling) where motivation is also low; this person is eager, so the high support of S2 is the better match.',
        'They are willing already, so you need support plus direction, not bare orders.',
      ),
    ],
    lesson:
      'Hersey-Blanchard matches leadership style to follower readiness (ability + willingness). R1 (unable/unwilling) → S1 Telling; R2 (unable but willing) → S2 Selling/Coaching with high direction and high support; R3 (able but unwilling/insecure) → S3 Supporting; R4 (able and willing) → S4 Delegating. An eager-but-unskilled person needs the structure and encouragement of S2.',
    source,
    generated: true,
  },
  {
    id: 7610013,
    chapter: 'Delegation and Ownership',
    title: 'Rescuer in the drama triangle',
    prompt:
      'Whenever a team member sighs that a task is "impossible," their manager swoops in and finishes it personally. The member grows more helpless over time. Through the Karpman drama triangle, what role is the manager playing, and why is it harmful?',
    correct:
      'Rescuer — by solving problems unasked, the manager fosters dependency and keeps the team member stuck in the Victim role instead of building capability',
    wrong: [
      miss(
        'Persecutor — the manager is being overly critical and harsh',
        'The manager is being too helpful, not harsh; the Persecutor blames and criticizes, which is the opposite of swooping in to do the work.',
        'Rescuing is excessive help, not criticism — wrong corner of the triangle.',
      ),
      miss(
        'Victim — the manager feels overwhelmed by the team’s demands',
        'The Victim feels helpless and seeks rescue; here the manager is doing the rescuing, not asking to be saved.',
        'Who is doing the saving here? That is the role to name.',
      ),
      miss(
        'No role — taking over is simply good, supportive management',
        'Doing the work unasked is exactly the Rescuer trap; it looks supportive but breeds dependency and erodes capability.',
        'Helpful-looking takeovers are precisely the pattern the triangle warns about.',
      ),
    ],
    lesson:
      'Karpman’s drama triangle has three roles: Victim (helpless), Persecutor (blaming), and Rescuer (saving others unasked). A manager who repeatedly takes over "impossible" tasks plays Rescuer, which feels kind but fosters dependency and keeps people in Victim mode. The healthier move is shifting from Rescuer to Coach — helping people find their own solutions and build capability.',
    source,
    generated: true,
  },
  {
    id: 7610014,
    chapter: 'Delegation and Ownership',
    title: 'Dumping vs delegating',
    prompt:
      'A manager forwards a complex client email with "handle this" and no further detail. The work comes back wrong. What distinguishes this from genuine delegation?',
    correct:
      'It lacked the context, outcome, authority, and success criteria that delegation requires — this is dumping, which transfers the task but not the conditions to succeed',
    wrong: [
      miss(
        'Nothing — the employee should have figured out the missing details',
        'Expecting people to reverse-engineer unstated context and criteria is the hallmark of dumping; delegation supplies them up front.',
        'If they had to guess the outcome and authority, it was never delegated properly.',
      ),
      miss(
        'It was over-delegation; the manager gave away too much authority',
        'No authority or boundaries were defined at all; the failure is too little structure, not too much authority handed over.',
        'The problem is missing context, not excessive authority.',
      ),
      miss(
        'It was micromanagement disguised as delegation',
        'Micromanagement is excessive oversight; "handle this" with zero detail is the opposite — abandonment without guidance.',
        'Micromanaging is too much control; this was too little.',
      ),
    ],
    lesson:
      'Delegation transfers ownership of an outcome along with the context, authority, constraints, support, and success criteria needed to deliver it. Dumping just offloads a task ("handle this") without those conditions. The difference shows up at acceptance time: dumped work comes back wrong because the person never knew what good looked like or how much authority they had.',
    source,
    generated: true,
  },
  {
    id: 7610015,
    chapter: 'Delegation and Ownership',
    title: 'Tannenbaum-Schmidt continuum',
    prompt:
      'A manager moves from "I decide and announce" toward "I define limits and ask the team to decide within them" as the team matures. Which framework describes this spectrum of shared decision authority?',
    correct:
      'The Tannenbaum-Schmidt leadership continuum — a range from manager-centered (tells) to team-centered (delegates) authority over decisions',
    wrong: [
      miss(
        'Edmondson’s psychological safety stages',
        'Edmondson’s stages (inclusion, learner, contributor, challenger) describe interpersonal risk-taking, not the allocation of decision authority along a continuum.',
        'Safety stages are about speaking up, not who decides.',
      ),
      miss(
        'The ADKAR change model',
        'ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) sequences individual change, not the spectrum of decision-making authority.',
        'ADKAR is a change-adoption sequence, not a decision-authority scale.',
      ),
      miss(
        'Herzberg’s two-factor theory',
        'Herzberg distinguishes motivators from hygiene factors in job satisfaction, not degrees of delegated decision authority.',
        'That theory is about what motivates, not how decisions are shared.',
      ),
    ],
    lesson:
      'The Tannenbaum-Schmidt continuum (1958) plots leadership behavior along a spectrum of decision authority, from highly manager-centered ("tells" / decides and announces) to highly team-centered ("delegates" / sets limits and lets the team decide). It complements Hersey-Blanchard: diagnose follower readiness, then choose how much decision authority to share.',
    source,
    generated: true,
  },
  {
    id: 7610016,
    chapter: 'Delegation and Ownership',
    title: 'Cost of abandoning',
    prompt:
      'A manager delegates a project well — clear outcome, authority, boundaries — then goes silent for six weeks with no check-ins. The project drifts badly off course. Which delegation failure is this?',
    correct:
      'Abandoning — delegating and then disappearing, with no review points to catch drift before it becomes expensive',
    wrong: [
      miss(
        'Micromanaging — too many check-ins suffocated the work',
        'Six weeks of silence is the opposite of micromanaging; the failure is too little contact, not too much.',
        'Zero check-ins is not over-control.',
      ),
      miss(
        'Dumping — the manager gave no context or success criteria',
        'The setup was good (clear outcome, authority, boundaries); the failure came after, in the absence of any review rhythm.',
        'The brief was solid — the problem appeared later.',
      ),
      miss(
        'Rescuing — the manager reclaimed the work too early',
        'Nothing was reclaimed; the manager vanished entirely, which is abandonment, not premature takeover.',
        'No one took the work back — they left it alone too long.',
      ),
    ],
    lesson:
      'Good delegation includes lightweight, agreed review points that catch drift early without micromanaging. Abandoning — handing off cleanly and then going dark — removes the feedback loop, so problems compound silently until they are expensive. The art is calibrating check-ins to the person’s readiness and the work’s risk: enough to catch drift, not so much it smothers ownership.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 4: Feedback, Coaching, and Performance Diagnosis
  // ---------------------------------------------------------------------------
  {
    id: 7610017,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'Radical Candor: ruinous empathy',
    prompt:
      'In Kim Scott’s Radical Candor, a manager genuinely cares about an employee but softens or withholds needed criticism to spare their feelings. Which quadrant is this, and what is the result?',
    correct:
      'Ruinous Empathy — high care, low challenge; the kindness backfires because the person never learns what they need to fix',
    wrong: [
      miss(
        'Obnoxious Aggression — challenging hard without caring',
        'Obnoxious Aggression is high challenge, low care; here the manager cares deeply but fails to challenge, which is the opposite axis.',
        'This manager cares a lot — the missing piece is the challenge, not the care.',
      ),
      miss(
        'Manipulative Insincerity — neither caring nor challenging',
        'Manipulative Insincerity is low on both; this manager genuinely cares, so only the challenge dimension is lacking.',
        'Care is present here, so it cannot be the both-low quadrant.',
      ),
      miss(
        'Radical Candor — the ideal balance of care and challenge',
        'Radical Candor requires BOTH caring personally AND challenging directly; withholding the criticism means the challenge half is missing.',
        'The goal quadrant needs the hard truth delivered, which did not happen.',
      ),
    ],
    lesson:
      'Radical Candor (Kim Scott) is a 2x2 of Care Personally and Challenge Directly. Radical Candor = high/high. Ruinous Empathy = high care, low challenge: you avoid the hard message to protect feelings, and the person never improves. Obnoxious Aggression = low care, high challenge (brutal honesty). Manipulative Insincerity = low/low. Most kind managers fail toward ruinous empathy.',
    source,
    generated: true,
  },
  {
    id: 7610018,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'Why the feedback sandwich fails',
    prompt:
      'A manager always wraps criticism between two compliments. Research and practice find this "feedback sandwich" often backfires. Why?',
    correct:
      'It dilutes and muddies the message — recipients latch onto the praise, discount or miss the criticism, and may come to distrust the praise as a setup',
    wrong: [
      miss(
        'It is too direct and hurts feelings more than plain criticism',
        'The sandwich is the opposite of too direct; its problem is that the cushioning obscures the message, not that it is harsh.',
        'The flaw is dilution, not bluntness.',
      ),
      miss(
        'It works fine; the only issue is that it takes slightly longer to deliver',
        'The issue is not length but that the structure causes the actual feedback to be missed or discounted.',
        'Time is not the problem — message retention is.',
      ),
      miss(
        'It gives too much specific, actionable detail to absorb at once',
        'Sandwiches typically suffer from vagueness and mixed signals, not an overload of crisp, actionable specifics.',
        'The problem is muddiness, not an excess of clarity.',
      ),
    ],
    lesson:
      'The praise-criticism-praise "sandwich" tends to backfire: people hear the praise and discount or forget the criticism, the praise starts to feel insincere (a known setup for bad news), and the core message gets muddied. More effective feedback is specific, sincere, and clearly separates genuine recognition from the one thing that needs to change — rather than camouflaging it.',
    source,
    generated: true,
  },
  {
    id: 7610019,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'SBI-I: adding intent inquiry',
    prompt:
      'After delivering Situation-Behavior-Impact feedback, a manager adds: "What was going on for you in that moment?" before concluding. What does this SBI-I extension add and why does it matter?',
    correct:
      'It inquires about intent — opening a two-way conversation that surfaces the person’s reasoning instead of assuming a motive',
    wrong: [
      miss(
        'It instructs the person on the correct intent they should have had',
        'The "I" is Inquiry into their intent, not a lecture prescribing intent; the point is to ask, not to tell.',
        'Inquiry means asking about their reasoning, not assigning the right one.',
      ),
      miss(
        'It adds an Impact statement that SBI was missing',
        'Impact is already the "I" in SBI; the extension adds Intent inquiry, a different idea, on top of the standard three steps.',
        'SBI already covers impact — the extension is about something else.',
      ),
      miss(
        'It replaces the Behavior step with a discussion of feelings',
        'Behavior remains essential and is not replaced; intent inquiry comes after the objective S-B-I, not instead of it.',
        'You still need the observed behavior; intent is added, not swapped in.',
      ),
    ],
    lesson:
      'SBI (Situation, Behavior, Impact) keeps feedback objective. The optional SBI-I extension adds Inquiry into intent: after sharing the impact, you ask what the person was thinking or intending. This avoids the trap of assuming a motive (mind-reading), turns feedback into a dialogue, and often reveals context that changes the conversation or the fix.',
    source,
    generated: true,
  },
  {
    id: 7610020,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'GROW: the Reality step done right',
    prompt:
      'In the Reality step of GROW, what is the coach mainly trying to do?',
    correct:
      'Help the person describe the current situation honestly and specifically — facts, what has been tried, and what is really getting in the way',
    wrong: [
      miss(
        'Persuade the person that the situation is better than they think',
        'Reality is about honest assessment, not reframing or cheerleading; spinning it positive hides the real obstacles.',
        'Reality means an accurate picture, not a rosy one.',
      ),
      miss(
        'Lock in the final action plan and a deadline',
        'Committing to actions is the Will/Way-forward step; Reality precedes Options and commitment.',
        'Locking the plan is the last GROW step, not Reality.',
      ),
      miss(
        'Restate the Goal more ambitiously',
        'Sharpening the Goal is the G step; Reality is about the present situation, not re-aiming the target.',
        'You already set the Goal — Reality looks at where things actually stand.',
      ),
    ],
    lesson:
      'GROW runs Goal → Reality → Options → Will. In Reality, the coach helps the person paint an honest, specific picture of the current situation: relevant facts, what they have already tried, and the real obstacles. Skipping or sugar-coating Reality produces Options built on fiction. Good Reality questions are curious and non-leading ("What have you tried? What is actually in the way?").',
    source,
    generated: true,
  },
  {
    id: 7610021,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'System gap diagnosis',
    prompt:
      'Three capable, motivated analysts each miss the same monthly deadline. Investigation shows the upstream data feed reliably arrives two days late every cycle. In skill/will/clarity/system terms, what is the gap?',
    correct: 'A system gap — the workflow itself, not the people, is producing the failure, so the fix is upstream not individual',
    wrong: [
      miss(
        'A will gap — all three lack motivation to hit the deadline',
        'Three motivated people failing identically points to a shared structural cause, not three simultaneous motivation problems.',
        'Same failure across capable, motivated people screams structure, not attitude.',
      ),
      miss(
        'A skill gap — they each need deadline-management training',
        'They are capable; training individuals cannot fix a late data feed that no amount of personal skill controls.',
        'No training fixes a feed that arrives two days late.',
      ),
      miss(
        'A clarity gap — the deadline was never clearly stated',
        'They know the deadline and are trying to hit it; the blocker is an upstream dependency, not unclear expectations.',
        'They understand the target — something external prevents hitting it.',
      ),
    ],
    lesson:
      'Performance diagnosis separates skill, will, clarity, and system gaps. When several capable, motivated people hit the same failure point, suspect the system (process, tools, dependencies) rather than the individuals. Here a chronically late upstream feed is the cause; the fair and effective fix is upstream, not coaching or discipline aimed at the people.',
    source,
    generated: true,
  },
  {
    id: 7610022,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'Will gap, not skill gap',
    prompt:
      'A senior engineer who has done the task flawlessly for years has recently started cutting corners and missing details on it. Tools and expectations are unchanged. Which gap is most likely?',
    correct: 'A will (motivation/engagement) gap — proven ability rules out skill, so the question is why willingness dropped',
    wrong: [
      miss(
        'A skill gap requiring retraining on the task',
        'Years of flawless execution rule out a skill deficit; retraining an expert misreads disengagement as incompetence.',
        'They have proven the skill — so the change is not capability.',
      ),
      miss(
        'A clarity gap because expectations were never explained',
        'Expectations are unchanged and were clearly met for years; clarity is not the new variable.',
        'The expectations did not change — something else did.',
      ),
      miss(
        'A system gap because the tools must have degraded',
        'The prompt states tools and expectations are unchanged, so the system is not the new cause.',
        'Nothing in the environment changed — look at the person’s engagement.',
      ),
    ],
    lesson:
      'When someone with demonstrated ability suddenly slips on a task they have long done well, with no change in tools or expectations, it usually signals a will gap — declining motivation or engagement (burnout, a broken expectation, a personal issue, lost purpose). The right response is a curious conversation to understand the cause, not skill training that misdiagnoses disengagement as incompetence.',
    source,
    generated: true,
  },
  {
    id: 7610023,
    chapter: 'Feedback, Coaching, and Performance Diagnosis',
    title: 'Labels vs observable behavior',
    prompt:
      'Which feedback opener is most likely to trigger defensiveness and least useful for change?',
    correct: '"You have a bad attitude" — a character label with no specific, observable behavior to act on',
    wrong: [
      miss(
        '"In standup you cut off Priya twice before she finished" — specific and observable',
        'This is a concrete, observable behavior tied to a moment, which is exactly what good feedback should be, not the defensive-triggering option.',
        'This one names a specific action — that is the good kind.',
      ),
      miss(
        '"The report shipped without the QA sign-off step" — a factual gap',
        'A factual, checkable statement of what happened is actionable, not a defensiveness-inducing character judgment.',
        'A verifiable fact is useful feedback, not the problem case.',
      ),
      miss(
        '"You arrived 20 minutes into the client call" — a stated fact',
        'A neutral, observable fact about timing is actionable and low-blame, the opposite of a vague label.',
        'Observable timing facts are fine — look for the judgmental label instead.',
      ),
    ],
    lesson:
      'Effective feedback describes specific, observable behavior and its impact. Character labels ("bad attitude," "you’re unprofessional," "you’re weird") tell people who they supposedly are rather than what to change, feel like attacks, and give nothing to act on. They reliably trigger defensiveness. Swap the label for the behavior you actually observed.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 5: Difficult Conversations, Conflict, and Fair Process
  // ---------------------------------------------------------------------------
  {
    id: 7610024,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'Fisher-Ury: people vs problem',
    prompt:
      'Two leads in a heated priority dispute keep attacking each other personally. Drawing on Fisher and Ury’s principled negotiation, what is the first move that unblocks progress?',
    correct: 'Separate the people from the problem — defuse the personal/emotional layer so both can attack the issue side by side, not each other',
    wrong: [
      miss(
        'Insist they immediately commit to a 50/50 split of the disputed scope',
        'Forcing a split skips the principled steps and likely satisfies neither real interest; principled negotiation invents options before deciding.',
        'Splitting positions is positional bargaining, the thing the method moves away from.',
      ),
      miss(
        'Have the more senior lead overrule the other to end the fight',
        'Deciding by rank ends the argument by power, not on the merits, and leaves underlying interests unaddressed.',
        'Authority stops the noise but ignores the principled process.',
      ),
      miss(
        'Tell both that personal feelings have no place at work and move on',
        'Suppressing emotion does not separate people from problem; unacknowledged feelings keep contaminating the substance.',
        'Banning feelings is not the same as separating them from the issue.',
      ),
    ],
    lesson:
      'Fisher and Ury’s principled negotiation (Getting to Yes) has four moves: separate the people from the problem; focus on interests, not positions; invent options for mutual gain; and insist on objective criteria. When a dispute has turned personal, the first unblock is separating people from problem — addressing the relationship/emotion so the parties can jointly attack the issue rather than each other.',
    source,
    generated: true,
  },
  {
    id: 7610025,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'BATNA',
    prompt:
      'Before a tough negotiation over shared engineering capacity, a manager asks, "If we reach no agreement here, what is my best alternative course of action?" What concept is she identifying, and why does it matter?',
    correct:
      'Her BATNA (Best Alternative To a Negotiated Agreement) — knowing it sets a walk-away point and is the real source of her negotiating power',
    wrong: [
      miss(
        'Her opening position — the first offer she will put on the table',
        'An opening position is a stated demand; a BATNA is the fallback if no deal is reached, which is a different and more fundamental thing.',
        'This is the fallback if talks fail, not the first offer.',
      ),
      miss(
        'Her bottom line price — the worst number she would accept',
        'A bottom line is a single threshold figure; a BATNA is the actual alternative course of action away from the table that informs that threshold.',
        'It is an alternative path, not just a number you would tolerate.',
      ),
      miss(
        'Her objective criteria — the external standards for a fair outcome',
        'Objective criteria are neutral benchmarks for fairness; a BATNA is your alternative if you do not agree at all.',
        'Criteria judge fairness; BATNA is your exit option.',
      ),
    ],
    lesson:
      'BATNA — Best Alternative To a Negotiated Agreement — is what you will do if this negotiation fails. Knowing your BATNA tells you when to walk away and is the true source of bargaining power: the side with the stronger alternative is less dependent on the deal. You should never accept a worse outcome than your BATNA.',
    source,
    generated: true,
  },
  {
    id: 7610026,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'Facts vs story',
    prompt:
      'A manager catches herself thinking, "He skipped my message because he doesn’t respect me." Separating facts from story, what is the actual fact here?',
    correct: '"He did not reply to my message" is the fact; "he doesn’t respect me" is a story (an interpretation) layered on top',
    wrong: [
      miss(
        '"He doesn’t respect me" is the fact; the lack of reply is just evidence for it',
        'Disrespect is an inferred motive, not an observable fact; treating an interpretation as fact is exactly the trap to avoid.',
        'A motive you assigned is a story, not something you observed.',
      ),
      miss(
        'Both statements are equally factual since one caused the other',
        'Only the unreplied message is observable; the disrespect claim is an interpretation, so they are not equally factual.',
        'One is observable, the other is a guess about why.',
      ),
      miss(
        'Neither is a fact until he confirms his intentions in writing',
        'The non-reply is a directly observable fact regardless of his confirmation; the missing reply happened.',
        'You can observe the silence itself without him confirming anything.',
      ),
    ],
    lesson:
      'In hard conversations, separating facts from story prevents escalation. Facts are observable and verifiable ("no reply by Tuesday"). Stories are the interpretations and motives we add ("he doesn’t respect me"). We often react to our story as if it were fact. Naming the story as a story lets you test it and open the conversation with curiosity instead of accusation.',
    source,
    generated: true,
  },
  {
    id: 7610027,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'The avoidance tax',
    prompt:
      'A manager keeps postponing a needed conversation about a teammate’s repeated missed handoffs because it feels awkward. What does the "avoidance tax" predict?',
    correct:
      'The problem grows larger and harder to address fairly, because the pattern entrenches and the eventual response can look sudden and disproportionate',
    wrong: [
      miss(
        'The problem will likely resolve on its own if left alone long enough',
        'Unaddressed performance patterns rarely self-correct; waiting lets them entrench, which is the whole point of the avoidance tax.',
        'Avoidance compounds the issue rather than dissolving it.',
      ),
      miss(
        'Waiting makes the eventual conversation fairer and better documented',
        'Delay makes action look abrupt and unfair after a long silence, and the person was never given a chance to correct early.',
        'Late action after silence reads as a blindside, not as fairer.',
      ),
      miss(
        'The cost is only the manager’s discomfort, which fades with time',
        'The real cost lands on the team and the person, not just the manager’s nerves; harm and unfairness accumulate.',
        'The tax is paid by the team and the situation, not only your nerves.',
      ),
    ],
    lesson:
      'The avoidance tax: problems that are ducked because the conversation feels awkward tend to grow and become less fair to address. The pattern entrenches, the teammate never gets an early chance to correct, and when the manager finally acts after long silence it can look sudden and disproportionate. Addressing issues early and respectfully is both kinder and fairer.',
    source,
    generated: true,
  },
  {
    id: 7610028,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'Fair process and voice',
    prompt:
      'A manager makes a sound decision in a two-person conflict but never explains the reasoning to either party or lets them feel heard first. Even though the decision is correct, both leave resentful. What principle was missed?',
    correct:
      'Fair process — people accept outcomes far better when they have voice (are genuinely heard) and the decision and its reasoning are explained',
    wrong: [
      miss(
        'Nothing — a correct decision is all that matters; feelings are irrelevant',
        'Outcome fairness alone is not enough; people judge the process too, and an unexplained decision breeds resentment even when correct.',
        'Being right is not the same as being seen as fair.',
      ),
      miss(
        'The manager should have let the louder party win to avoid resentment',
        'Deferring to volume is the opposite of fair process and rewards the wrong behavior; the fix is voice and explanation, not capitulation.',
        'Fair process is about being heard and informed, not about who is loudest.',
      ),
      miss(
        'The decision must have actually been wrong if both are resentful',
        'A correct decision can still feel unjust if the process denied people voice and explanation; resentment here is about process, not correctness.',
        'Resentment can come from how, not what, was decided.',
      ),
    ],
    lesson:
      'Fair process (procedural justice) means people accept even unwelcome decisions when they have voice (a genuine chance to be heard), the decision-making is transparent, and the reasoning is explained. Deciding privately and announcing an outcome with no explanation — even a correct one — breeds resentment. How a decision is made often matters as much as the decision itself.',
    source,
    generated: true,
  },
  {
    id: 7610029,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'Proportional response',
    prompt:
      'An otherwise strong employee snaps once, irritably, in a stressful meeting. A peer urges the manager to issue a formal written warning. What does proportional response suggest?',
    correct:
      'Address it directly and privately as a one-off, matching the response to severity and context; a formal warning over a single minor incident is disproportionate',
    wrong: [
      miss(
        'Issue the formal warning immediately to set a firm precedent',
        'A formal warning for one minor, out-of-character incident is disproportionate and can damage trust and fairness.',
        'The response should fit the severity, and this incident is minor.',
      ),
      miss(
        'Let it pass without comment because the employee is usually strong',
        'Even a one-off can warrant a direct, low-key conversation; ignoring it is the opposite error of overreacting.',
        'Proportional does not mean zero — it means right-sized.',
      ),
      miss(
        'Raise it vaguely in the next team meeting so everyone gets the hint',
        'Vague group hints are unfair and ineffective; a single incident calls for direct, private feedback, not public innuendo.',
        'Group hinting is neither direct nor fair to the individual.',
      ),
    ],
    lesson:
      'Proportionality matches the response to the severity, pattern, and context of the behavior. A single, minor, out-of-character incident usually calls for direct private feedback, not formal action. Escalating to a written warning over one bad moment is disproportionate — unfair to the person and corrosive to trust. Formal steps are reserved for genuine patterns or serious conduct.',
    source,
    generated: true,
  },
  {
    id: 7610030,
    chapter: 'Difficult Conversations, Conflict, and Fair Process',
    title: 'Tuckman storming',
    prompt:
      'A newly formed team that was politely agreeable in week one is now full of open disagreement about roles and approach. A nervous stakeholder calls it dysfunction. Using Tuckman’s model, what is happening and what should the manager do?',
    correct:
      'This is the Storming stage — a normal, expected phase; the manager should structure and coach the conflict rather than suppress it',
    wrong: [
      miss(
        'The team has regressed and should be disbanded and reformed',
        'Storming is a normal developmental stage, not a failure to undo; disbanding wastes a team that is progressing through expected friction.',
        'Friction here is a stage, not a verdict to dissolve the team.',
      ),
      miss(
        'This is the Performing stage, so the manager should step fully back',
        'Performing is high-efficiency collaboration after norms settle; open role conflict is Storming, which needs more involvement, not less.',
        'Open conflict over roles is not the high-functioning stage.',
      ),
      miss(
        'The manager must shut down all disagreement to restore the early harmony',
        'Suppressing Storming conflict stalls the team before it can norm; the conflict needs channeling, not banning.',
        'Squashing the conflict prevents the team from reaching its norms.',
      ),
    ],
    lesson:
      'Tuckman’s stages are Forming, Storming, Norming, Performing (and Adjourning). Early politeness (Forming) typically gives way to Storming, where conflict over roles and approach surfaces. This is normal and necessary. The manager’s job is to structure and coach the conflict — clarify roles, facilitate disagreement productively — so the team can reach Norming, not to suppress it.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 6: Performance Management and Fairness
  // ---------------------------------------------------------------------------
  {
    id: 7610031,
    chapter: 'Performance Management and Fairness',
    title: 'Recency bias',
    prompt:
      'In annual reviews, a manager rates an employee largely on a rough final two weeks, ignoring eleven strong months. Which rating bias is this, and how is it usually countered?',
    correct:
      'Recency bias — overweighting recent events; countered by keeping contemporaneous notes across the whole period and reviewing them at rating time',
    wrong: [
      miss(
        'Halo bias — letting one strength color the whole rating',
        'Halo is one trait coloring everything; here the distortion is about timing (recent weeks dominating), which is recency, not halo.',
        'This is about WHEN events happened, not one trait spilling over.',
      ),
      miss(
        'Leniency bias — rating everyone higher than warranted',
        'Leniency is a general upward shift for all; this is the recent rough patch unfairly dragging the score down, a timing distortion.',
        'Nothing here says all ratings drift high — it is about recent events.',
      ),
      miss(
        'Confirmation bias, fixed by interviewing more peers',
        'The issue is the timeframe weighted, not seeking evidence that confirms a prior belief; the fix is records across the period, not more peers.',
        'The distortion is the recency window, not hunting confirming evidence.',
      ),
    ],
    lesson:
      'Recency bias is the tendency to overweight the most recent events when evaluating a whole period, letting a recent dip (or spike) eclipse months of evidence. The standard counter is contemporaneous documentation — keeping a running log of observations throughout the cycle and reviewing the full record at rating time — plus calibration with peers.',
    source,
    generated: true,
  },
  {
    id: 7610032,
    chapter: 'Performance Management and Fairness',
    title: 'Halo effect',
    prompt:
      'A manager rates an employee highly on teamwork, communication, and judgment — largely because the employee is an exceptional coder and the manager is impressed overall. Which bias is at work?',
    correct:
      'The halo effect — one outstanding trait (coding) inflating unrelated ratings, masking real differences across competencies',
    wrong: [
      miss(
        'Recency bias — recent events dominating the rating',
        'No timing distortion is described; the issue is one strength bleeding into unrelated areas, which is halo, not recency.',
        'This is one trait spilling over, not a timing problem.',
      ),
      miss(
        'Severity bias — rating everyone too harshly',
        'Severity is a downward shift; here the ratings are inflated upward by one strength, the opposite direction.',
        'Ratings here are too high, not too harsh.',
      ),
      miss(
        'Contrast bias — comparing the person to whoever came before',
        'Contrast involves the previous candidate skewing the judgment; here it is the person’s own strength inflating their other scores.',
        'No prior person is anchoring the comparison here.',
      ),
    ],
    lesson:
      'The halo effect occurs when one strong (or weak — the "horn" effect) attribute colors the rater’s judgment of unrelated competencies, so a great coder gets undeserved high marks on teamwork and judgment. It hides genuine development areas. Defenses include rating each competency against specific behavioral evidence and calibrating with other managers.',
    source,
    generated: true,
  },
  {
    id: 7610033,
    chapter: 'Performance Management and Fairness',
    title: 'Pattern, not single incident',
    prompt:
      'A director demands an immediate formal performance plan after an employee’s one visible mistake in a demo. The employee’s record is otherwise strong. What is the fair next step?',
    correct:
      'Determine whether a documented pattern exists and understand the cause before any formal action; a single incident usually calls for coaching, not a plan',
    wrong: [
      miss(
        'Open the formal plan now, since visible mistakes must have visible consequences',
        'Formal action on a single incident is disproportionate and unfair; severity and pattern, not visibility, should drive the response.',
        'Visibility of a mistake is not the same as a pattern justifying formal steps.',
      ),
      miss(
        'Do nothing at all, because strong employees never need feedback',
        'A one-off may still warrant direct coaching feedback; ignoring it is the opposite error from overreacting.',
        'Fair does not mean silent — it means right-sized.',
      ),
      miss(
        'Quietly start building a documentation file to support a future exit',
        'Building a paper trail aimed at exit after one mistake is a pretext, not genuine performance management, and is both unfair and risky.',
        'A file built to justify firing is not fair process.',
      ),
    ],
    lesson:
      'Fair performance management distinguishes an incident from a pattern. A single visible mistake by an otherwise strong performer usually calls for direct coaching, not formal action. Before escalating, establish whether there is a documented pattern and understand the cause, then respond proportionately. Launching a formal plan after one mistake is disproportionate and erodes trust.',
    source,
    generated: true,
  },
  {
    id: 7610034,
    chapter: 'Performance Management and Fairness',
    title: 'Contemporaneous documentation',
    prompt:
      'A manager plans to act on a performance issue but realizes nothing was ever written down during the months it occurred. Why does this weaken a fair process?',
    correct:
      'Without contemporaneous records, the case rests on memory (vulnerable to bias) and the employee never got timely, documented notice and a chance to improve',
    wrong: [
      miss(
        'It does not matter; the manager can reconstruct accurate details from memory now',
        'Reconstructed memory is exactly what bias distorts, and after-the-fact notes do not give the employee timely notice they deserved.',
        'Memory after the fact is unreliable and gives no early warning.',
      ),
      miss(
        'The fix is to backdate notes so the file looks complete',
        'Fabricating or backdating records is dishonest and legally dangerous; the remedy is to document going forward, not falsify the past.',
        'Faking the timeline is misconduct, not a fix.',
      ),
      miss(
        'Documentation only matters for legal teams, not for fairness to the employee',
        'Documentation also serves fairness — it gives the employee specific, timely notice and a real chance to correct, not just legal cover.',
        'Records protect the employee’s fair chance too, not only the company.',
      ),
    ],
    lesson:
      'Contemporaneous documentation — recording specific observations and conversations as they happen — underpins fair performance management. It anchors the case in evidence rather than bias-prone memory, and crucially it means the employee received timely, specific notice and a genuine chance to improve. Acting suddenly after months of silent, undocumented concerns is both unfair and legally risky.',
    source,
    generated: true,
  },
  {
    id: 7610035,
    chapter: 'Performance Management and Fairness',
    title: 'What calibration is for',
    prompt:
      'Two managers both rate "meets expectations," but one applies a far tougher bar than the other, so equivalent performers get different ratings. What is the purpose of a calibration session here?',
    correct:
      'To align what each rating level means across managers so equivalent performance gets equivalent ratings, and to surface bias',
    wrong: [
      miss(
        'To force each team onto an identical fixed bell-curve distribution',
        'Calibration aligns standards and checks bias; rigidly imposing a quota curve regardless of facts can itself be unfair and is not the aim.',
        'The goal is consistent standards, not a mandated quota.',
      ),
      miss(
        'To let the most senior manager set everyone’s ratings unilaterally',
        'Calibration is a cross-manager comparison of evidence, not a handoff of judgment to whoever has the highest title.',
        'It is a comparison of evidence, not deference to rank.',
      ),
      miss(
        'To speed up reviews by removing the individual-manager rating step',
        'Calibration adds a comparison step and relies on manager input; speed is not its purpose and it does not skip individual ratings.',
        'It adds rigor, not shortcuts, to the process.',
      ),
    ],
    lesson:
      'Calibration sessions bring managers together to compare ratings and the evidence behind them so a given rating level means the same thing across teams. They align standards, catch biases (recency, halo, leniency/severity), and make outcomes more consistent and defensible. The aim is shared standards — not a forced distribution and not deference to the senior person in the room.',
    source,
    generated: true,
  },
  {
    id: 7610036,
    chapter: 'Performance Management and Fairness',
    title: 'PIP support, not just expectations',
    prompt:
      'A draft PIP lists crisp, measurable expectations and a reasonable 60-day timeline, but offers the employee no coaching, resources, or check-ins. What is the key fairness defect?',
    correct:
      'It omits genuine support — without resources, coaching, and check-ins, the plan is a setup that gives no real chance to succeed',
    wrong: [
      miss(
        'The expectations are too clear and should be left vaguer for flexibility',
        'Clear, measurable expectations are a strength of a fair PIP; vagueness would make it less fair, not more.',
        'Clarity is good — the missing piece is elsewhere.',
      ),
      miss(
        'The 60-day timeline is far too long and should be cut to a week',
        'A reasonable timeline is part of fairness; slashing it to a week would remove the genuine chance to improve.',
        'A reasonable window helps fairness — shortening it hurts.',
      ),
      miss(
        'Nothing is wrong; a PIP is only about stating expectations clearly',
        'A fair PIP requires support and check-ins alongside expectations and timeline; expectations alone make it a paper trail.',
        'Expectations without support is the classic unfair-PIP pattern.',
      ),
    ],
    lesson:
      'A fair performance improvement plan has four parts: specific measurable expectations, real support (coaching, resources, time), a reasonable timeline, and documented check-ins to review progress. A plan with sharp expectations but no support is a setup to fail — a paper trail for exit rather than a genuine attempt to help, which is both unjust and legally exposed.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 7: Hiring, Onboarding, and Team Design
  // ---------------------------------------------------------------------------
  {
    id: 7610037,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: 'Validity coefficients',
    prompt:
      'In meta-analytic research (e.g., Schmidt & Hunter), roughly what predictive validity do structured vs unstructured interviews show for job performance?',
    correct:
      'Structured interviews around 0.51 versus unstructured around 0.38 — structured is markedly more predictive',
    wrong: [
      miss(
        'Unstructured around 0.51, structured around 0.38 — free conversation wins',
        'The numbers are reversed: structured interviews predict better; unstructured ones are weaker, mostly measuring interviewer comfort.',
        'The order is backwards — structure is the stronger predictor.',
      ),
      miss(
        'Both near 0.10, so interviews barely predict performance at all',
        'Structured interviews are among the stronger single predictors (~0.51), not near-zero; 0.10 understates them dramatically.',
        'Structured interviews are far more predictive than near-zero.',
      ),
      miss(
        'Both near 0.90, making interviews almost perfectly predictive',
        'No selection method approaches 0.90; structured interviews land around 0.51, strong but far from perfect.',
        'No hiring method predicts near-perfectly — that figure is implausible.',
      ),
    ],
    lesson:
      'Schmidt & Hunter’s influential meta-analysis put structured interviews around 0.51 and unstructured around 0.38 for predicting job performance (general mental ability also ~0.51; work samples high too). Structure — the same job-relevant questions in the same order, scored on a rubric — roughly improves validity and reduces bias. Unstructured chats largely measure interviewer comfort.',
    source,
    generated: true,
  },
  {
    id: 7610038,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: 'Independent scoring before discussion',
    prompt:
      'In a hiring debrief, why should interviewers record their independent scores before the group discusses the candidate?',
    correct:
      'To prevent groupthink and anchoring — once a loud or senior voice speaks first, others’ judgments converge and independent signal is lost',
    wrong: [
      miss(
        'To speed the debrief up by skipping the discussion entirely',
        'Independent scoring precedes, not replaces, discussion; the goal is preserving signal, not eliminating the conversation.',
        'You still discuss — you just capture views first.',
      ),
      miss(
        'Because the most senior interviewer’s score should set everyone’s baseline',
        'That is exactly the anchoring problem to avoid; independent scoring exists so seniority does not steamroll others’ judgment.',
        'Letting seniority anchor everyone is the harm, not the goal.',
      ),
      miss(
        'To make sure all interviewers reach the same score in the end',
        'The aim is to preserve genuine disagreement and signal, not to manufacture unanimity; divergent independent scores are useful information.',
        'Forced consensus destroys the independent signal you wanted.',
      ),
    ],
    lesson:
      'When interviewers discuss a candidate before recording their own assessments, the first or most senior voice anchors the room and others converge — groupthink that destroys independent signal. Having each interviewer score independently against the rubric first, then discussing, preserves diverse evidence and makes the debrief a genuine comparison rather than an echo of whoever spoke first.',
    source,
    generated: true,
  },
  {
    id: 7610039,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: 'Scorecard built on outcomes',
    prompt:
      'A manager drafts a role scorecard. Which entry best fits the "outcomes" the role must achieve, as opposed to traits or activities?',
    correct: '"Reduce average ticket resolution time from 30h to 12h within two quarters"',
    wrong: [
      miss(
        '"Is a self-starter with great energy and a positive attitude"',
        'These are personality traits, not outcomes; trait wish-lists invite bias and do not define what the role must accomplish.',
        'That describes a personality, not a result the role delivers.',
      ),
      miss(
        '"Attends the daily standup and updates the ticket tracker"',
        'These are activities/tasks, not outcomes; doing them does not by itself prove the role’s purpose was achieved.',
        'Showing up and logging tickets is motion, not a result.',
      ),
      miss(
        '"Holds a relevant degree and five years of experience"',
        'These are qualifications/inputs, not the outcomes the role exists to produce.',
        'Credentials are inputs, not the result you are hiring for.',
      ),
    ],
    lesson:
      'A role scorecard defines success as concrete outcomes the role must achieve (e.g., "cut resolution time from 30h to 12h"), plus the competencies that predict them. Outcomes are measurable results, distinct from traits ("self-starter"), activities ("attends standup"), or qualifications ("a degree"). Anchoring on outcomes gives structured interviews something real to assess and curbs vibe-based hiring.',
    source,
    generated: true,
  },
  {
    id: 7610040,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: 'Work sample test',
    prompt:
      'To predict whether a candidate can actually do the core job, a manager adds a realistic exercise mirroring real tasks (e.g., a short take-home analysis like the actual work). What selection method is this, and what is its appeal?',
    correct:
      'A work sample test — it directly samples job performance and is among the most predictive, lower-bias selection methods',
    wrong: [
      miss(
        'A personality questionnaire, valued for measuring cultural fit',
        'A personality questionnaire measures traits, not the ability to do the actual tasks; the described exercise samples the real work, which is a different and more predictive method.',
        'This exercise mirrors the job itself, not personality traits.',
      ),
      miss(
        'An unstructured interview, valued for building rapport',
        'An unstructured interview is a free conversation, the weakest predictor; a hands-on task that replicates the work is a work sample, not an interview.',
        'Doing real tasks is not the same as a free-flowing chat.',
      ),
      miss(
        'A reference check, valued for third-party corroboration',
        'A reference check gathers others’ opinions of past work; a work sample observes the candidate performing the work directly now.',
        'Asking others is not watching the candidate actually do it.',
      ),
    ],
    lesson:
      'A work sample test asks candidates to perform tasks that mirror the actual job (a coding exercise, a writing/analysis task, a mock client scenario). Because it directly samples the behavior you are hiring for, it is among the most predictive methods and tends to reduce bias relative to credentials or impressions. Keep it job-relevant, scoped, and scored on a rubric.',
    source,
    generated: true,
  },
  {
    id: 7610041,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: 'Same questions, same order',
    prompt:
      'What makes an interview "structured" in the technical sense that improves predictive validity and fairness?',
    correct:
      'Every candidate gets the same predetermined, job-relevant questions in the same order, scored against a consistent rubric',
    wrong: [
      miss(
        'The interview follows a strict time limit and a formal dress code',
        'Timing and formality are not what "structured" means; structure is about standardized questions and scoring, not logistics or attire.',
        'Structure is about the questions and scoring, not the clock or clothes.',
      ),
      miss(
        'The interviewer prepares thoroughly but adapts questions freely per candidate',
        'Adapting questions per candidate is exactly what makes an interview unstructured; preparation alone does not create comparability.',
        'Different questions per person defeats the comparability structure provides.',
      ),
      miss(
        'Multiple interviewers each ask whatever they personally find revealing',
        'Idiosyncratic questions per interviewer is the unstructured pattern; structure requires the same questions across candidates.',
        'Everyone freelancing their own questions is the opposite of structured.',
      ),
    ],
    lesson:
      'A structured interview standardizes both content and evaluation: the same set of predetermined, job-relevant questions, asked in the same order, scored on a defined rubric. This standardization is what raises predictive validity (~0.51 vs ~0.38) and reduces bias — it makes candidates genuinely comparable. Thorough prep or strict logistics do not make an interview structured if the questions and scoring still vary.',
    source,
    generated: true,
  },
  {
    id: 7610042,
    chapter: 'Hiring, Onboarding, and Team Design',
    title: 'Onboarding: basics before edge cases',
    prompt:
      'A new hire’s first week is spent drilling rare exception-handling scenarios before they understand the normal end-to-end workflow. Why is this the wrong sequence?',
    correct:
      'Edge cases only make sense once the basics are understood; teaching exceptions before the core leaves the new hire unable to place them in context',
    wrong: [
      miss(
        'Edge cases are unimportant and should never be taught at all',
        'Edge cases do matter; the issue is sequencing, not whether to teach them — basics first, exceptions later.',
        'The problem is order, not whether exceptions are worth knowing.',
      ),
      miss(
        'The first week should have no learning content, only social events',
        'Onboarding should build real understanding, including context and first outcomes; replacing it with pure socializing wastes the ramp.',
        'Onboarding needs substance, not just mixers.',
      ),
      miss(
        'New hires learn fastest when overwhelmed, so front-loading hard cases is ideal',
        'Overwhelming people with exceptions before the foundation impedes learning rather than accelerating it.',
        'Overload is not a learning accelerant — foundation is.',
      ),
    ],
    lesson:
      'Effective onboarding teaches the foundational, normal workflow before rare exceptions. You cannot understand an edge case without first grasping the core process it deviates from. Front-loading exceptions (a common trap) leaves new hires disoriented. Stage learning: context and basics first, then first real outcomes, then the harder edge cases as understanding grows.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 8: Inclusion, Motivation, and Team Health
  // ---------------------------------------------------------------------------
  {
    id: 7610043,
    chapter: 'Inclusion, Motivation, and Team Health',
    title: 'SDT: competence need',
    prompt:
      'A motivated employee, recently moved to a tool far beyond their current skill, now avoids the work and says "I just feel useless at this." Through Self-Determination Theory, which need is most undermined?',
    correct: 'Competence — the need to feel effective and capable at what they do',
    wrong: [
      miss(
        'Autonomy — the need for volition and choice',
        'They are not complaining about lack of choice; "I feel useless at this" is about feeling ineffective, which is competence, not autonomy.',
        'Listen for "I have no say" (autonomy) vs "I can’t do it" (competence).',
      ),
      miss(
        'Relatedness — the need for connection and belonging',
        'Nothing indicates lost connection to colleagues; the distress is about capability at the task, which is the competence need.',
        'Relatedness is about people; this is about ability.',
      ),
      miss(
        'None — feeling useless is a personality flaw, not a need',
        'SDT treats motivation as need-driven; "I feel useless" is a clear competence-need signal, not a character trait to dismiss.',
        'SDT names this a thwarted need, not a personal defect.',
      ),
    ],
    lesson:
      'Self-Determination Theory (Deci & Ryan) identifies three needs behind intrinsic motivation: autonomy (volition/choice), competence (feeling effective), and relatedness (connection). "I feel useless at this" signals an undermined competence need — the right response is staged skill-building and early wins, not a generic morale boost or assuming low motivation.',
    source,
    generated: true,
  },
  {
    id: 7610044,
    chapter: 'Inclusion, Motivation, and Team Health',
    title: 'SDT: relatedness need',
    prompt:
      'A fully remote new hire is skilled and has autonomy over their work, but disengages, saying "I don’t really know anyone and feel like an outsider here." Which SDT need is most undermined?',
    correct: 'Relatedness — the need to feel connected to and accepted by others',
    wrong: [
      miss(
        'Competence — they doubt their ability to do the work',
        'They are skilled and not reporting incapability; the issue is feeling like an outsider, which is relatedness, not competence.',
        '"Don’t know anyone" is about belonging, not ability.',
      ),
      miss(
        'Autonomy — they lack control over their work',
        'They explicitly have autonomy; the gap is connection to people, the relatedness need.',
        'They have choice over the work — the missing thing is connection.',
      ),
      miss(
        'None — remote workers should not expect social connection',
        'SDT holds relatedness as a real driver for everyone, including remote staff; dismissing it perpetuates the disengagement.',
        'Belonging is a genuine need, not a perk to wave away.',
      ),
    ],
    lesson:
      'Relatedness — feeling connected, included, and valued by others — is one of SDT’s three basic needs. A skilled, autonomous remote worker who feels like an outsider has an undermined relatedness need; the fix is deliberate connection (onboarding buddies, intentional inclusion, relationship-building), not more autonomy or skill training. Naming the right need points to the right intervention.',
    source,
    generated: true,
  },
  {
    id: 7610045,
    chapter: 'Inclusion, Motivation, and Team Health',
    title: 'Herzberg: hygiene vs motivator',
    prompt:
      'A manager gives a disengaged but fairly-paid team a raise, expecting motivation to surge. Engagement barely moves. What does Herzberg’s two-factor theory predict here?',
    correct:
      'Pay is a hygiene factor: fixing it prevents dissatisfaction but does not create motivation, which comes from motivators like achievement, recognition, and growth',
    wrong: [
      miss(
        'The raise was simply too small; a bigger one would have motivated them',
        'Herzberg’s point is that pay (a hygiene factor) does not drive motivation regardless of size once it is adequate; the lever is motivators, not more money.',
        'The theory says salary is the wrong lever, not that the amount was off.',
      ),
      miss(
        'Pay is a motivator, so the raise should have worked — the data must be wrong',
        'Herzberg classifies salary as a hygiene factor, not a motivator; the muted result is exactly what the theory predicts, not a data error.',
        'Salary sits on the hygiene side in this model.',
      ),
      miss(
        'Removing pay entirely would have motivated them more through hardship',
        'Cutting pay would create dissatisfaction (a hygiene failure), not motivation; that inverts the theory entirely.',
        'Worsening a hygiene factor demotivates — it does not inspire.',
      ),
    ],
    lesson:
      'Herzberg’s two-factor theory splits job attitudes into hygiene factors (pay, conditions, policy, supervision) and motivators (achievement, recognition, responsibility, growth). Hygiene factors, when poor, cause dissatisfaction; fixing them removes dissatisfaction but does not create motivation. Real motivation comes from the motivators. So a raise to already-fairly-paid staff prevents grumbling but rarely sparks engagement.',
    source,
    generated: true,
  },
  {
    id: 7610046,
    chapter: 'Inclusion, Motivation, and Team Health',
    title: 'Edmondson: challenger safety',
    prompt:
      'On a team with strong psychological safety, what does the highest stage — challenger safety — specifically enable?',
    correct:
      'Freedom to question the status quo and challenge others’ ideas, including leaders’, without fear of punishment',
    wrong: [
      miss(
        'Freedom to be included and accepted as a member of the team',
        'That describes inclusion safety, the first stage, not the highest; challenger safety goes well beyond merely belonging.',
        'Being accepted is the entry stage, not the top one.',
      ),
      miss(
        'Freedom to ask questions and admit you do not know something',
        'That is learner safety, an earlier stage; challenger safety is specifically about challenging ideas and the status quo.',
        'Asking questions is a middle stage; challenging is the peak.',
      ),
      miss(
        'Freedom to lower standards so no one ever feels criticized',
        'Psychological safety is not lowered standards; challenger safety pairs with high standards and is about candid dissent, not comfort.',
        'Safety is not softness — the top stage is about candor, not ease.',
      ),
    ],
    lesson:
      'Edmondson’s psychological safety progresses through four stages: inclusion safety (belong), learner safety (ask questions, admit gaps), contributor safety (contribute fully), and challenger safety (question the status quo and challenge ideas, including leaders’). Challenger safety is the most demanding and most valuable: it lets teams surface dissent and improve. It coexists with — never replaces — high standards.',
    source,
    generated: true,
  },
  {
    id: 7610047,
    chapter: 'Inclusion, Motivation, and Team Health',
    title: 'Burnout is not just tired',
    prompt:
      'Per the Maslach model (reflected in WHO’s ICD-11 definition), burnout is a three-dimensional syndrome. Which set of dimensions is correct?',
    correct: 'Emotional exhaustion, depersonalization/cynicism, and reduced personal accomplishment (reduced efficacy)',
    wrong: [
      miss(
        'Low salary, long hours, and a bad commute',
        'Those are potential stressors or hygiene factors, not the syndrome’s dimensions; Maslach defines burnout by its experienced components, not causes.',
        'These are possible causes, not the measured dimensions.',
      ),
      miss(
        'Anxiety, depression, and insomnia as a clinical disorder',
        'WHO classifies burnout as an occupational phenomenon distinct from mood/anxiety disorders; these clinical conditions are not its three Maslach dimensions.',
        'ICD-11 separates burnout from clinical depression/anxiety.',
      ),
      miss(
        'Forming, storming, and norming',
        'Those are Tuckman’s team-development stages, unrelated to the burnout syndrome’s dimensions.',
        'That is a team-stage model, not the burnout construct.',
      ),
    ],
    lesson:
      'The Maslach Burnout Inventory defines burnout as three dimensions: emotional exhaustion (depleted energy), depersonalization/cynicism (detached, negative attitudes toward work or people), and reduced personal accomplishment (feeling ineffective). WHO’s ICD-11 frames burnout as an occupational phenomenon from unmanaged chronic workplace stress, distinct from clinical depression. Burnout is more than ordinary tiredness; managers watch for cynicism and dropping efficacy, not just fatigue.',
    source,
    generated: true,
  },
  {
    id: 7610048,
    chapter: 'Inclusion, Motivation, and Team Health',
    title: 'Inclusive participation design',
    prompt:
      'Two senior voices dominate every meeting while newer members stay silent. Which manager move best fixes this, and why is "tell the quiet ones to speak up more" the wrong instinct?',
    correct:
      'Redesign participation (structured turns, round-robins, written input first); telling quiet people to "speak up" puts the cost on the people the structure is already silencing',
    wrong: [
      miss(
        'Coach the quiet members privately to be more assertive and interrupt better',
        'This places the burden on those the dynamic disadvantages, leaving the silencing structure intact; the fix is changing the structure, not the people being silenced.',
        'It is the structure silencing them, not a personal assertiveness flaw.',
      ),
      miss(
        'Let the senior voices lead because faster decisions beat broad input',
        'Privileging speed over inclusion loses input that often improves decisions and entrenches the imbalance.',
        'Speed at the cost of input is a false economy here.',
      ),
      miss(
        'Cancel team meetings entirely since participation is uneven',
        'Cancelling removes coordination without addressing the participation design; the problem is how meetings run, not that they exist.',
        'Removing the meeting does not fix how it was run.',
      ),
    ],
    lesson:
      'When hierarchy or volume shapes who speaks, the fix is structural: design participation so quieter, newer voices can contribute — round-robins, written input before discussion, explicitly inviting input, managing dominant talkers. Telling quiet people to "speak up better" loads the cost onto the very people the dynamic disadvantages. Better structure usually yields better input and decisions.',
    source,
    generated: true,
  },
  // ---------------------------------------------------------------------------
  // Chapter 9: Managing Change and Scaling Yourself
  // ---------------------------------------------------------------------------
  {
    id: 7610049,
    chapter: 'Managing Change and Scaling Yourself',
    title: 'ADKAR: Awareness barrier',
    prompt:
      'Leadership rolls out a new process, but many staff keep using the old one — and when asked, they did not even realize a change was coming or why. In ADKAR, what is the barrier point, and what intervention fits?',
    correct:
      'Awareness is the barrier — people do not yet understand that change is happening and why; the fix is clear communication of the reason for change, not training',
    wrong: [
      miss(
        'Ability is the barrier, so hands-on practice sessions are needed',
        'You cannot build Ability when people are not even Aware a change exists; ADKAR stalls at the first missing element, which here is Awareness.',
        'Practice presumes people know the change is happening — they do not.',
      ),
      miss(
        'Desire is the barrier, so use incentives to build buy-in',
        'Desire comes after Awareness; people who do not know about the change cannot yet want or resist it on its merits.',
        'You build Desire only once people are Aware — and they are not.',
      ),
      miss(
        'Reinforcement is the barrier, so celebrate the new process more',
        'Reinforcement sustains an adopted change; nothing to reinforce exists when people are unaware the change is even occurring.',
        'You cannot reinforce a change people do not know about.',
      ),
    ],
    lesson:
      'ADKAR (Prosci) sequences change as Awareness, Desire, Knowledge, Ability, Reinforcement, and progress stalls at the first missing element — the barrier point. Staff still using the old process who did not know a change was coming are stuck at Awareness. The fix is communicating the what and the why; training (Knowledge/Ability) or incentives (Desire) are premature until people are aware.',
    source,
    generated: true,
  },
  {
    id: 7610050,
    chapter: 'Managing Change and Scaling Yourself',
    title: 'Resistance as information',
    prompt:
      'During a change rollout, an experienced operator pushes back hard, listing concrete ways the new workflow will break a critical edge case. What is the most useful framing of this resistance?',
    correct:
      'Resistance as information — their pushback may surface real risks the plan missed, so the manager should listen and investigate before overriding',
    wrong: [
      miss(
        'Resistance as defiance to be overruled quickly so momentum is not lost',
        'Steamrolling specific, substantive objections discards valuable risk information and damages trust; not all resistance is mere obstruction.',
        'Concrete objections are signal, not just an obstacle to bulldoze.',
      ),
      miss(
        'Resistance as a Desire problem fixed by more enthusiastic messaging',
        'The operator has specific technical concerns, not a motivation gap; more cheerleading ignores legitimate risk input.',
        'This is a substantive concern, not a missing pep talk.',
      ),
      miss(
        'Resistance as proof the operator should be excluded from the rollout',
        'Excluding the person who spotted a real flaw removes exactly the expertise that could save the rollout.',
        'Silencing the warning does not make the risk disappear.',
      ),
    ],
    lesson:
      'Treating resistance as information means reading pushback as potential signal rather than pure obstruction. An experienced person naming concrete failure modes may be surfacing genuine risks the plan overlooked. The skilled move is to listen, investigate, and incorporate valid concerns — distinguishing substantive risk-flagging from generic discomfort — which both improves the plan and builds buy-in.',
    source,
    generated: true,
  },
  {
    id: 7610051,
    chapter: 'Managing Change and Scaling Yourself',
    title: 'Presence is not productivity',
    prompt:
      'A manager of a hybrid team starts judging performance by who is online (green dot) longest and most visible on camera. Why is this a scaling trap for remote/hybrid management?',
    correct:
      'It equates presence with productivity; remote/hybrid work should be managed on outcomes, not visible online time, which rewards performative availability',
    wrong: [
      miss(
        'It is the correct approach; visible online time is the most reliable productivity metric',
        'Online status measures availability theater, not results; remote management should track outcomes, making this the trap rather than the fix.',
        'A green dot measures presence, not work delivered.',
      ),
      miss(
        'The only flaw is not also tracking total hours logged',
        'Adding hours logged compounds the error; both are activity/presence proxies, not the outcomes that should be measured.',
        'More presence metrics is not the cure for a presence-metric problem.',
      ),
      miss(
        'It is fine for remote staff but wrong for in-office staff',
        'The principle — judge outcomes not presence — applies to everyone; in-office "looking busy" is just as misleading as a green dot.',
        'Presence theater misleads in the office too, not only remotely.',
      ),
    ],
    lesson:
      'A core remote/hybrid trap is equating presence with productivity — judging people by online status, camera time, or hours visible rather than results. This rewards performative availability and punishes focused or asynchronous work. Effective remote management sets clear outcomes, communicates deliberately, and evaluates the work delivered, not how long someone’s status light stayed green.',
    source,
    generated: true,
  },
  {
    id: 7610052,
    chapter: 'Managing Change and Scaling Yourself',
    title: 'Retrospective into one improvement',
    prompt:
      'After a bumpy project, a team holds a retrospective and lists 14 things that went wrong. The lead wants to "fix everything next sprint." What is the more effective way to convert a retro into improvement?',
    correct:
      'Pick one or two highest-leverage changes to actually implement and own, rather than trying to fix all 14 at once',
    wrong: [
      miss(
        'Assign all 14 fixes simultaneously so nothing is missed',
        'Trying to change everything at once spreads effort thin and usually means none of the changes stick; focus beats breadth here.',
        'Fourteen parallel changes is a recipe for none landing.',
      ),
      miss(
        'Record the 14 items in a document and take no further action',
        'A retro that only catalogs problems without converting any into action is theater; the value is in a real change being made.',
        'Listing without acting wastes the retro entirely.',
      ),
      miss(
        'Blame the individuals responsible for each of the 14 issues',
        'Retros are for learning and system improvement, not assigning blame; a blame focus suppresses the candor that makes future retros useful.',
        'Blame kills the honesty a retrospective depends on.',
      ),
    ],
    lesson:
      'A retrospective is a learning loop, but its value comes from converting lessons into action — and focus is what makes that real. Picking one or two highest-leverage improvements to actually implement and own beats spawning fourteen half-done changes. Retros should be blameless (focused on the system, not scapegoats) so people stay candid, and each should produce a concrete operating-system improvement.',
    source,
    generated: true,
  },
])
