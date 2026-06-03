import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const usGovernmentWorksGems: Question[] = [
  // ----------------------------------------------------------------------------
  // The Federal Courts and Judicial Review
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10105000,
    'Career Skills',
    'The Federal Courts and Judicial Review',
    "The Constitution never says courts can strike down laws",
    "You search the entire Constitution for the sentence that lets the Supreme Court declare an act of Congress void. You cannot find one. Yet courts strike down laws all the time, and everyone treats it as settled. Where did this power actually come from?",
    "The Court asserted it for itself in Marbury v. Madison (1803) by reasoning that, since the Constitution is supreme law and judges must say what the law is, they must refuse to apply statutes that conflict with it",
    [
      ["A specific clause of Article III expressly grants the Court the power to invalidate unconstitutional laws, and that text has simply been overlooked", "Article III defines the courts' jurisdiction but contains no grant of a veto over legislation; the power was inferred from the structure of supremacy, not read off an explicit clause.", "Notice that a power can be foundational yet textually unstated, established by interpretation rather than by an express grant."],
      ["A constitutional amendment was later ratified to give courts the authority to overturn statutes once the need became obvious", "No amendment created judicial review; the practice predates and outlasts any such proposal, having been built entirely from a single 1803 opinion interpreting the existing text.", "Trace the power to a famous case, not to an added amendment; the document was never altered to confer it."],
      ["Congress passed a statute delegating to the courts the power to review and nullify Congress's own laws", "Congress would not, and did not, hand a body the authority to veto Congress; the Court grounded the power in the Constitution itself, above and independent of ordinary legislation.", "Ask whether a branch would voluntarily legislate a check on itself, then look instead to how the Court derived the power from supremacy."],
    ],
    "Judicial review, the cornerstone of the federal courts' authority, appears nowhere in the Constitution's text. Chief Justice Marshall built it in Marbury v. Madison from a chain of reasoning: the Constitution is supreme, an ordinary law that conflicts with it cannot stand, and deciding which law applies is the very essence of the judicial job, so a judge must disregard the unconstitutional one. The aha is that the judiciary's defining power was claimed, not conferred. The deeper tension is that the branch with neither the purse nor the sword secured its co-equal status through an act of interpretation that the other branches accepted, which means the power rests less on text than on a shared agreement to keep honoring it.",
    'Floe generated',
    true,
    "Look for the case that announced the power, not a clause or an amendment that granted it.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10105001,
    'Career Skills',
    'The Federal Courts and Judicial Review',
    "Marshall won by losing",
    "In Marbury v. Madison, Marshall faced a trap: order the new administration to deliver Marbury's commission and be openly defied, or back down and look weak. Instead he ruled that Marbury was wronged, that he deserved his commission, and yet that this very Court had no power to order it. How did giving Marbury nothing become the most powerful move available?",
    "By declaring the statute that would have let the Court act unconstitutional, Marshall surrendered the small remedy while claiming the far larger power of judicial review, and he did so in a case the other branches had no order to defy",
    [
      ["He simply made a legal mistake under pressure, mismanaging the case and accidentally producing a famous outcome from a botched judgment", "The result was the opposite of an accident; Marshall deliberately engineered an opinion that conceded the trivial point to seize the structural one, which is why it is studied as strategic genius rather than error.", "Read the move as designed: he traded a remedy he could not enforce for a doctrine no one could defy."],
      ["He ordered the administration to comply, and his authority comes from the executive's having obeyed that direct command", "There was no command to obey; Marshall pointedly issued no order, precisely so the administration had nothing to defy and could not expose the Court's weakness.", "Notice that he avoided issuing an order at all, which is what let him assert power without risking open defiance."],
      ["He postponed the dispute for a future Court, so the power of judicial review was actually established decades later in a different case", "The power was established in this very opinion; later cases relied on Marbury rather than originating the doctrine, which is why 1803 marks its birth.", "Place the founding of judicial review in this case itself, where the doctrine was first announced and exercised."],
    ],
    "The genius of Marbury is that Marshall empowered his branch precisely by declining to use power in the immediate dispute. He held that Marbury had a right and a remedy, then ruled that the law letting the Court grant that remedy unconstitutionally expanded the Court's jurisdiction, so the Court could not act. The administration won the case and therefore had no order to ignore, while the Court walked away holding the authority to nullify acts of Congress. The lingering lesson is that institutional power is often built by choosing the fight you can win on your own terms: a visible, enforceable surrender can purchase a far larger, lasting authority that a direct confrontation would have destroyed.",
    'Floe generated',
    true,
    "Ask what Marshall gave up in this case and what far larger thing he kept by giving it up.",
    { challengeRating: 7 },
  ),
  // ----------------------------------------------------------------------------
  // Checks and Balances
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10105002,
    'Career Skills',
    'Checks and Balances',
    "Gaveling in for thirty seconds to block a President",
    "Every three days during a long break, a single senator walks into an empty chamber, bangs the gavel, says a few words, and leaves. No business is done. Why would the Senate stage this thirty-second ritual over and over, and what power of the President does it quietly cancel?",
    "Holding brief pro forma sessions keeps the Senate technically in session, so it is never in 'recess', which blocks the President from filling vacancies through recess appointments that bypass Senate confirmation",
    [
      ["It is a meaningless tradition with no legal effect, performed only out of habit and ceremony", "The sessions have a sharp legal purpose the Supreme Court upheld in NLRB v. Noel Canning: by keeping the Senate technically open, they strip the President of recess-appointment authority.", "Treat the ritual as a deliberate legal device, not empty ceremony; its whole point is to deny the President a window."],
      ["It lets a lone senator pass laws while colleagues are away, concentrating legislative power in whoever shows up", "A pro forma session does no substantive business and passes nothing; its function is purely defensive, to deny the President an opening rather than to legislate.", "See that nothing is enacted in these sessions; the device works by what it prevents, not by what it produces."],
      ["It triggers the President's pocket veto, letting the chamber kill pending bills by staying technically open", "The pocket veto is an unrelated mechanism tied to a President not signing a bill near adjournment; pro forma sessions instead target appointments by denying a recess.", "Separate the two tools: pocket vetoes concern bills the President holds, while pro forma sessions concern appointments the President cannot make."],
    ],
    "The recess-appointment power lets a President fill vacancies without Senate confirmation when the Senate is away, a sensible workaround from an era of long travel. The Senate neutralizes it by never truly leaving: brief pro forma sessions, upheld in NLRB v. Noel Canning (2014), keep the body technically in session so no 'recess' ever opens. The aha is that a constitutional power can be defeated not by a counter-power but by refusing to satisfy its trigger condition. The deeper point about checks and balances is that they are not just grand vetoes; they live in procedural definitions, calendars, and rituals, and an institution can defend its turf by manipulating the technical state the rival's power depends on.",
    'Floe generated',
    true,
    "Ask what condition the recess-appointment power needs, then notice how the ritual prevents that condition from ever arising.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10105003,
    'Career Skills',
    'Checks and Balances',
    "Why the branches were deliberately not kept separate",
    "A civics student objects: 'If we want separation of powers, why does the President get to veto Congress's laws, and why does the Senate get a say over the President's appointments? Each branch is reaching into another's job.' What is the design reason for letting the branches intrude on one another?",
    "Pure separation would leave each branch unchecked within its own sphere, so the framers deliberately gave each branch partial controls over the others, using overlapping powers to make every branch depend on and restrain the rest",
    [
      ["The overlaps are flaws the framers failed to remove, and a well-designed system would keep each branch entirely walled off from the others", "The overlaps are intentional, not accidental: Madison argued that giving each branch a hand in the others is exactly what keeps any one of them from dominating.", "Read the intrusions as the mechanism of control, not a design defect that purity would fix."],
      ["The overlaps exist only to make government slower and more inefficient, with no protective purpose behind them", "Friction is a side effect, but the purpose is protective: shared powers let ambition counter ambition so no branch can act unchecked, not merely to slow things down.", "Locate the goal in restraint and accountability, with any slowdown a tolerated cost rather than the aim."],
      ["They let the branches pool their powers to act in unison, concentrating authority so the government can move decisively", "The intent is the reverse of concentration: the controls are meant to divide and check power, forcing cooperation and consent rather than enabling unified, unchecked action.", "Flip the logic; the shared powers fragment authority and force mutual consent rather than fusing it."],
    ],
    "Separation of powers gives each branch a distinct job, but if that were all, each could become a tyrant within its own domain. So the framers added checks and balances: the veto, the override, advice and consent, judicial review, impeachment, the power of the purse, each one a branch reaching into another's work. The aha is that the system protects liberty not by keeping the branches apart but by deliberately entangling them, so 'ambition counteracts ambition' and no branch can act fully on its own. The deeper idea is that the Constitution distrusts good intentions and instead engineers self-interest into a stabilizer, making each branch's hunger for power the very thing that fences in the others.",
    'Floe generated',
    true,
    "Ask what would go wrong if each branch were perfectly walled off and answerable to no one else.",
    { challengeRating: 6 },
  ),
  // ----------------------------------------------------------------------------
  // Federalism: Federal, State, and Local
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10105004,
    'Career Skills',
    'Federalism: Federal, State, and Local',
    "Washington cannot order your sheriff around",
    "Congress passes a law requiring local sheriffs to personally run federal background checks, and later forbids any state legislature from ever passing a law to legalize sports betting. The Supreme Court strikes down both. What single principle do these two very different laws violate?",
    "The anti-commandeering doctrine: the federal government may not compel state legislatures or state officials to enact or administer a federal program, because doing so would conscript the states into federal service",
    [
      ["The Supremacy Clause, because federal law always overrides state law and these statutes simply went too far in degree", "The Supremacy Clause lets federal law preempt conflicting state law, but it does not let Congress command state governments to act; that limit is the anti-commandeering rule, a separate idea.", "Distinguish preempting state law from commanding state officials; supremacy permits the first, not the second."],
      ["Free speech, since forcing sheriffs to act and barring legislatures from voting both silence protected expression", "Neither law concerns expression; the defect is structural federalism, about who may direct whom, not an individual rights violation under the First Amendment.", "See the issue as one of governmental structure, not of personal civil liberties."],
      ["Due process, because the affected officials and legislators were denied a fair hearing before being made to comply", "Due process protects individuals against unfair procedures, but the flaw here is that Congress targeted state governments as instruments at all, regardless of any hearing.", "Locate the problem in commandeering state institutions, not in the procedure afforded to particular people."],
    ],
    "Under the anti-commandeering doctrine, drawn from the structure of dual sovereignty and the Tenth Amendment, Congress cannot turn state governments into its own enforcement arm. Printz v. United States struck down conscripting local sheriffs into a federal background-check scheme, and Murphy v. NCAA struck down a law dictating that states may not legalize sports betting; both treated states as instruments of federal command. The aha is that Washington can regulate private people directly, and can preempt conflicting state laws, but it cannot order the states themselves to legislate or enforce. The deeper point is accountability: if the federal government could make states do its work, voters could no longer tell which level of government to blame, so the line preserves both state autonomy and a clear chain of responsibility.",
    'Floe generated',
    true,
    "Ask what both laws have in common about who is being ordered to do federal work.",
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    10105005,
    'Career Skills',
    'Federalism: Federal, State, and Local',
    "Can't command, but can pay",
    "Congress cannot directly force states to raise their drinking age to 21. So instead it passed a law saying any state that keeps a lower drinking age loses a slice of its federal highway money. The Court upheld this. If Congress cannot command the states, how can it lawfully get its way through the checkbook?",
    "Through its spending power: Congress may attach conditions to federal funds, so states remain free to refuse the money and the condition, which the Court treats as a permissible incentive rather than an unconstitutional command, as long as the pressure stops short of coercion",
    [
      ["It cannot; conditioning highway funds on the drinking age is just commandeering in disguise and the Court should have struck it down", "The Court upheld it in South Dakota v. Dole precisely because the state could still say no and forfeit the funds, which makes it an offer rather than a command.", "Notice the escape hatch: the state may decline both the money and the condition, which is what separates an incentive from an order."],
      ["Because the drinking age falls within an enumerated federal power, so Congress could have simply ordered it directly anyway", "Congress could not set state drinking ages by direct command, which is exactly why it had to use the spending power; the funding condition was the workaround, not a redundant one.", "Recognize that the condition exists because the direct command was unavailable, not because it was already permitted."],
      ["Because once a state accepts any federal money it forfeits all constitutional objections to whatever conditions Congress later attaches", "Conditional spending is not unlimited; conditions must be clear, related to the funds' purpose, and not so heavy that they coerce rather than merely tempt the state.", "See that the spending power has real limits, including a coercion line, rather than buying total compliance."],
    ],
    "Federalism forbids Congress from commanding the states, but the spending power offers a side door: attach strings to federal dollars and let states choose. In South Dakota v. Dole the Court upheld withholding a small share of highway funds from states with a drinking age under 21, reasoning that the state stayed free to refuse, so it was a temptation, not a command. The aha is that the same goal blocked at the front door of direct order can often enter through the wallet. The deep tension is the coercion line: at some point an offer a state truly cannot refuse stops being a choice and becomes the very commandeering federalism forbids, which is why courts ask whether federal money is an incentive or an offer no rational state could turn down.",
    'Floe generated',
    true,
    "Ask whether the state still has a real choice to walk away, and what changes once the money becomes too big to refuse.",
    { challengeRating: 7 },
  ),
]
