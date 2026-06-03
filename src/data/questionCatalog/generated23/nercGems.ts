import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const nercGems: Question[] = [
  // ----------------------------------------------------------------------------
  // Chapter: Reliability Standards and Operating Limits
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10062000,
    'Career Skills',
    'Reliability Standards and Operating Limits',
    "The limit that carries a clock",
    'Two facilities are loaded past their published numbers tonight. A transformer is sitting above its thermal rating, and a key interface is above its Interconnection Reliability Operating Limit (IROL). The transformer manufacturer says it can run hot for hours before it ages noticeably. The IROL exceedance, by contrast, must be relieved within a defined window of at most 30 minutes. Both are "limit exceedances" — so what is the real difference that makes the IROL the one you chase first?',
    'An IROL exceedance threatens instability, uncontrolled separation, or cascading across the interconnection, so it carries a hard return-to-limits clock (the Tv, capped at 30 minutes); the thermal limit threatens one piece of equipment over a long horizon',
    [
      ["Both are equally urgent because any exceedance of a published limit is by definition a reportable violation that must be cleared immediately", "Treating every limit as equally urgent is exactly the trap the IROL concept exists to prevent. Limits differ in consequence and in time: a thermal rating protects one asset over hours, while an IROL protects the whole interconnection over minutes. Equal urgency would have you spend scarce time relieving the slow problem first.", "Rank exceedances by consequence and speed, not by the mere fact of being a violation; the IROL's threat of cascading is faster-moving and wider than equipment overheating."],
      ["The IROL is more urgent only because transformers are cheaper to replace than the larger equipment an IROL protects", "The IROL is not about asset cost. It marks the edge beyond which the system can lose stability, separate uncontrollably, or cascade — a system-level failure, not a single expensive component. Reframing it as a cost comparison misses that the IROL protects the interconnection's integrity, not a price tag.", "Read the IROL as a stability/cascading boundary for the whole system, not as a more-expensive version of an equipment rating."],
      ["The transformer is more urgent, since you can physically see it overheating while an IROL is just an abstract study number", "Visibility is not urgency. The IROL is computed precisely because the failure it guards against — instability and cascading — happens too fast and too widely to manage once it starts. The 'abstract' number is the early-warning line; by the time the consequence is visible, the Tv window is gone.", "Respect the IROL's clock specifically because its consequence is invisible until it is catastrophic; the study number is the only warning you get."],
    ],
    'A System Operating Limit (SOL) and an Interconnection Reliability Operating Limit (IROL) are not just bigger and smaller numbers — they differ in what failure they prevent and therefore in how fast you must act. Exceeding a thermal SOL stresses equipment over a relatively long horizon. Exceeding an IROL threatens instability, uncontrolled separation, or cascading across the interconnection, so it carries the IROL Tv: a hard return-to-limits window that can be no longer than 30 minutes (IRO-009). The deep idea is that a limit encodes a consequence and a time constant together; respecting a number "cold" means knowing how long it lets you live, not just where it sits.',
    'Floe generated',
    true,
    'Ask which exceedance can take down the interconnection versus which one just ages a single machine — and how much time each gives you.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10062001,
    'Career Skills',
    'Reliability Standards and Operating Limits',
    "Citing the law, not the intent",
    'A scenario clearly involves balancing — frequency is sagging and generation is short. A candidate confidently selects the answer citing a TOP (Transmission Operations) standard "because it protects the system." The exam marks it wrong even though the chosen action would, in a loose sense, help. What did the candidate misunderstand about how Reliability Standards work?',
    'Each Reliability Standard binds a specific functional entity to a specific obligation; the controlling requirement here lives in the BAL family and applies to the Balancing Authority, so a plausible TOP citation governs the wrong entity and the wrong obligation',
    [
      ["The candidate was actually right; any standard that improves reliability can be cited, because all NERC standards share the single goal of a reliable grid", "Sharing a goal does not make standards interchangeable. Each standard names its applicability (which entity) and its requirements (which exact obligation, on what clock). Citing a standard that points at the wrong entity is like charging someone under a statute that does not apply to them — even if the outcome seems helpful.", "Match the standard to the responsible functional entity and the precise obligation; a shared reliability purpose does not let one family stand in for another."],
      ["The TOP standard was retired, so the only error was citing an out-of-date version rather than the wrong subject matter", "The flaw was not the version — it was the domain. Even the current, enforceable TOP standard would be wrong here because the obligation in a frequency/generation-shortfall scenario sits with the Balancing Authority under the BAL family. Version control matters, but it is not what broke this answer.", "Diagnose the error as wrong-family/wrong-entity, not staleness; the controlling requirement is BAL-on-the-BA regardless of edition."],
      ["The answer failed only because it did not quote the exact requirement number, not because the standard family was wrong", "Quoting a requirement number from the wrong family does not rescue it. Precision about R-numbers matters, but precision about the wrong standard is still wrong. The first question is always which entity owns the obligation; the family follows from that.", "Identify the responsible entity and obligation first; an exact citation within the wrong family is still a wrong answer."],
    ],
    'Reliability Standards are written like law: each one specifies its applicability (which functional entity it binds), its requirements (the exact obligation and timeframe), and an enforceable effective version. The standard families divide the work — BAL governs balancing on the Balancing Authority, TOP governs transmission operations on the Transmission Operator, IRO governs the Reliability Coordinator, and so on. The deep skill is resisting the pull of a "plausible-sounding" or intent-matching answer and instead locating the controlling requirement: the right entity, the right obligation, the right clock. A standard that merely helps is not the standard that governs.',
    'Floe generated',
    true,
    'Before citing, ask whose obligation this is — then the right standard family follows from the entity, not from the vibe of the action.',
    { challengeRating: 6 },
  ),

  // ----------------------------------------------------------------------------
  // Chapter: Balancing, Frequency, and Interchange
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10062002,
    'Career Skills',
    'Balancing, Frequency, and Interchange',
    "What a positive ACE is telling you",
    'Your Area Control Error (ACE) display has swung firmly positive and is holding there. A new operator reads "positive" as "we are short" and starts to bring more generation online to fill the gap. You stop them. In a tie-line-bias balancing scheme, what is a positive ACE actually telling you, and which way should generation move?',
    'A positive ACE means the Balancing Authority is over-generating relative to its obligation (pushing interconnection frequency up), so you should reduce generation, not add it',
    [
      ["Positive ACE means under-generation, so adding generation is correct — positive is a deficit you must fill, like a positive bill you owe", "The bill metaphor is exactly the misread that trips new operators. In the ACE equation, over-generation drives ACE positive and pushes frequency above schedule; under-generation drives it negative. Adding generation to a positive ACE deepens the surplus and pushes frequency further up — the opposite of balance.", "Read positive ACE as surplus generation (frequency high), and correct by lowering generation; the sign is not an IOU."],
      ["The sign of ACE does not indicate direction at all; only its magnitude matters, so the operator should simply hold generation steady until ACE returns to zero", "The sign is the whole point — it tells you which way you are out of balance and therefore which way to move. Holding steady while ACE sits positive leaves the surplus and the frequency error in place; ACE does not self-correct without a direction-aware action.", "Use the sign to choose direction and the magnitude to size the response; ignoring the sign defeats the purpose of the metric."],
      ["Positive ACE always means a neighbor is leaning on you through the tie lines, so the fix is to call them, never to adjust your own generation", "A schedule or tie-line problem can move ACE, but a firmly positive, holding ACE most often means your own area is over-generating against its obligation. Reaching for the phone before checking your own balance can delay the correct generation reduction — and the standard expects you to manage your own ACE first.", "Diagnose your own over/under-generation from the ACE sign first; tie-line or tag issues are a separate check, not the default explanation."],
    ],
    'Area Control Error is the single number that says whether a Balancing Authority is matching generation to its load plus its scheduled interchange, with a frequency-bias term folded in. The convention is the trap: a positive ACE means the area is over-generating (and pushing interconnection frequency up), while negative means under-generating. So the corrective action runs against the naive instinct — positive ACE calls for less generation, not more. The deeper lesson is that ACE is a feedback signal whose sign encodes direction; reading the sign wrong sends the whole control loop the wrong way and can worsen a frequency excursion you were trying to fix.',
    'Floe generated',
    true,
    'In the ACE convention, over-generation drives the number positive — so a positive reading means back off, not pile on.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10062003,
    'Career Skills',
    'Balancing, Frequency, and Interchange',
    "The schedule error that masquerades as a unit trip",
    'ACE jumps negative at the top of the hour and stays there. There is no alarm for a tripped unit, no governor response signature, and frequency is barely moved — yet the number says you are suddenly short by a few hundred MW. A new e-Tag took effect at exactly the top of the hour. Before you deploy contingency reserves, what should you suspect?',
    'The interchange schedule changed (the scheduled net interchange term in ACE moved) without matching actual flow, so ACE shifted from a scheduling/tag mismatch rather than from a real loss of generation',
    [
      ["Deploy contingency reserves immediately, because any sustained negative ACE of that size is, by definition, a generation loss that the reserve-recovery clock now covers", "A negative ACE has two very different causes: a real resource loss, or a mismatch between scheduled and actual interchange. The tells here — no unit alarm, no governor signature, frequency nearly flat, and a top-of-hour tag change — point hard at a schedule error. Burning contingency reserves on a paper imbalance wastes them and may swing your real balance the wrong way.", "Distinguish a scheduling/interchange mismatch from a true generation loss before deploying reserves; the absence of a frequency dip and a unit alarm is the diagnostic."],
      ["Treat it as a frequency-bias miscalibration, since the bias term is the only part of the ACE equation that can move without a physical event", "The bias term tracks frequency, and frequency here barely moved — so the bias contribution is small. The piece that jumped is the scheduled net interchange, changed by the new tag. Blaming the bias misreads which term of the ACE equation actually moved.", "Locate which ACE term changed: with flat frequency, the swing came from the interchange schedule, not from the frequency-bias term."],
      ["Assume the tie-line metering failed, because only a hardware fault could move ACE without a corresponding change in frequency", "A schedule can move ACE with no frequency change at all, because ACE compares actual to scheduled interchange — change the schedule and the gap appears even with perfect meters and steady flow. Jumping to a metering fault skips the simpler, more common explanation of a tag/schedule mismatch.", "Recognize that a changed schedule moves ACE on its own; suspect the tag-versus-actual gap before assuming a meter failure."],
    ],
    'ACE is not a generation gauge; it is the difference between what an area is actually doing and what it is scheduled to do, with a frequency term added. That means a paperwork event — a new e-Tag, a ramp that did not follow its schedule, an inadvertent-interchange drift — can move ACE just as a tripped unit does, but without the physical fingerprints: no governor response, no frequency dip, no resource alarm. The deep lesson is to read ACE through its equation and ask which term moved before reaching for reserves. Spending contingency reserves on a scheduling mismatch fixes nothing real and depletes the cushion you need for an actual contingency.',
    'Floe generated',
    true,
    'Look for the physical fingerprints of a unit loss — frequency dip, governor response, a resource alarm. If they are missing but a tag just changed, suspect the schedule.',
    { challengeRating: 6 },
  ),

  // ----------------------------------------------------------------------------
  // Chapter: Communications and Shift Discipline
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10062004,
    'Career Skills',
    'Communications and Shift Discipline',
    "When a sentence becomes an order",
    'During a developing event, your Reliability Coordinator says over the line, "We would really like to see that interface come down — can you open the tie?" Later, after analysis, the same RC says, "This is a Reliability Directive: open the tie at Station 4 now." A trainee treats both the same way and just acts. Why does NERC draw a sharp line between these two communications, and what does the second one trigger that the first does not?',
    'A Reliability Directive is a specific instruction the issuer designates as such; it triggers mandatory three-part communication (recipient repeats it back, issuer confirms or reissues) and a duty to carry it out, whereas a request or advisory carries no such formal obligation',
    [
      ["There is no real difference; once the RC speaks, the operator must comply, so labeling something a 'Reliability Directive' is just a formality with no operational effect", "The label is the operational trigger, not a formality. Designating an instruction a Reliability Directive starts mandatory three-part communication and creates a recognized duty to act; an advisory or request does not. Collapsing the two means you might either skip the required repeat-back on a real directive or treat a casual request as a binding order.", "Treat the 'Reliability Directive' designation as the switch that activates three-part communication and the duty to comply; a request is not a directive."],
      ["The difference is only that a Reliability Directive must be put in writing, while a request can be verbal; the back-and-forth confirmation is optional courtesy", "Reliability Directives are routinely issued verbally in real time — the requirement is not writing but the three-part exchange: the recipient repeats the instruction, and the issuer confirms it is correct or reissues to fix a misunderstanding. Calling repeat-back optional courtesy removes the very safeguard the standard makes mandatory.", "Recognize that three-part communication, not a written form, is what a directive requires, and it is mandatory rather than courtesy."],
      ["A Reliability Directive shifts all responsibility for the outcome to the recipient, so the operator should hesitate before repeating it back to avoid owning the consequences", "Repeating back does not transfer blame for the outcome; it confirms the message was received accurately so the action matches the intent. The issuer retains responsibility for the directive itself and must confirm or correct the repeat-back. Hesitating to repeat back defeats the error-catching purpose and is itself a violation under zero-tolerance enforcement during emergencies.", "Understand repeat-back as accuracy verification, not liability transfer; withholding it breaks the required protocol rather than protecting you."],
    ],
    'NERC communications discipline (the COM family) draws a bright line between an advisory or request and a Reliability Directive precisely because the second one is an order to protect reliability and must not be misheard. When an issuer designates an instruction a Reliability Directive, three-part communication becomes mandatory: the recipient repeats it back, and the issuer either confirms it was correct or reissues to clear up the misunderstanding — a closed loop that catches errors before action. The deep idea is that words can change legal and operational status mid-conversation: the same voice on the same line can move from suggesting to ordering, and the operator must hear which one it is, run the protocol, and act. Acting on a casual request as if it were a directive, or failing to recognize and execute a real one, are both classic ways points and reliability are lost.',
    'Floe generated',
    true,
    'Ask what the issuer designated the instruction as — that designation, not the content alone, decides whether three-part communication and a duty to act kick in.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10062005,
    'Career Skills',
    'Communications and Shift Discipline',
    "The log you write for a stranger",
    'You make a fast, correct call during a disturbance and move on. Weeks later, an event-analysis team reconstructs the night from your operating log — you are not in the room to explain anything. Your log entry reads only: "Adjusted gen, talked to RC, fixed it." The action was right, but the entry is a problem. What principle of shift discipline did the terse log violate?',
    'The operating log is the record of record, written so someone who was not present can reconstruct what you knew, what you decided, when, and under whose direction; a terse entry destroys that reconstructability even when the action was correct',
    [
      ["Nothing was violated — the action was correct, and an event review only judges outcomes, so the brevity of the log is irrelevant", "Event analysis judges the decision and its basis, not just the outcome. Even a perfect action becomes indefensible if the record cannot show what was known, what was decided, when, and who directed it. A correct call with an unreadable log can look like luck or worse to a reviewer who was not there.", "Write the log to make the reasoning reconstructable; a correct action with an opaque record still fails the review that depends on the record."],
      ["The only rule broken was timing: the log entry was made after the action instead of before it, which is what makes it noncompliant", "Operating logs are contemporaneous records of actions taken, not pre-action approvals; logging after acting in real time is normal. The defect is content — too little detail to reconstruct the decision — not the order in which it was written.", "Locate the flaw in the missing detail, not in logging after the fact; real-time logs follow the action and must still capture the why, what, and when."],
      ["The entry failed because it named the Reliability Coordinator, and operator logs must keep other entities anonymous for confidentiality", "There is no anonymity rule that bars naming the RC — quite the opposite. Recording who directed an action, and that the exchange occurred, is exactly the kind of detail a reconstruction needs. The problem is that the entry says too little, including too little about the RC exchange, not too much.", "Include who directed what and when; naming the RC and the directive is part of a reconstructable record, not a confidentiality breach."],
    ],
    'In a control room, the operating log is the record of record: the durable account that an event-analysis team, a regulator, or the next shift relies on when you are not there to narrate. The discipline is to write for an absent stranger — capture what you observed, the limit or condition at risk, the action you took and when, the standard or directive that governed it, and who directed or was notified. The deep point is a separation between doing the right thing and being able to show you did: a correct decision with an unreconstructable log fails the standard that the record itself must meet. Good logging is not bureaucracy; it is how a fast 3 a.m. judgment survives later scrutiny intact.',
    'Floe generated',
    true,
    'Imagine a reviewer who was not in the room reading only your entry weeks later — could they rebuild what you knew, decided, and were told?',
    { challengeRating: 6 },
  ),
]
