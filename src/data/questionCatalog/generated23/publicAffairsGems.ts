import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const publicAffairsGems: Question[] = [
  // ----------------------------------------------------------------------------
  // Legislative Process
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10081000,
    'Career Skills',
    'Legislative Process',
    "The graveyard is the committee, not the floor",
    "Your client is alarmed because a bill that would hurt them was just introduced with 200 co-sponsors and friendly headlines. The CEO wants to spend the whole budget on a public campaign to defeat it at the floor vote. Before you commit, where in the process does this bill most likely live or die — and where should your effort go?",
    "In committee: roughly 90% of introduced bills never get a floor vote at all, so the decisive variable is whether the committee chair schedules a markup — that is where to focus, not the floor",
    [
      ["At the floor vote, because that is the moment the bill formally becomes law and where the public campaign can swing wavering members", "The floor vote is the visible finale, but most bills are killed long before they reach it; treating the floor as the battleground means fighting where the decision almost never actually happens.", "Trace the bill to the next real gate — usually a committee markup — rather than the last, most televised one."],
      ["At introduction, since 200 co-sponsors and good press mean the bill already has the momentum to pass and the outcome is essentially settled", "Co-sponsorship and coverage signal salience, not passage; a bill with broad support still dies if the chair never schedules it, so introduction predicts almost nothing about the result.", "Distinguish a bill's profile from its path; sponsorship is publicity, scheduling is power."],
      ["In a presidential or executive signature, because that is the final binding step and where late lobbying has the most leverage", "Only the tiny fraction of bills that clear committee and both chambers ever reach a signature; spending there ignores the chokepoint that eliminates the overwhelming majority of bills first.", "Find the earliest gate that can stop the bill, because that is where the cheapest and most decisive influence sits."],
    ],
    "About nine in ten bills die quietly in committee, usually because the chair simply never schedules a markup — no dramatic vote, no headline, just inaction. The aha is that the legislative process is mostly a filter, not a vote, and the person who controls the calendar is more powerful than the people who control the speeches. The deeper tension: democratic-looking inputs (sponsors, polls, press) can be almost irrelevant to the output, because the binding decision is a procedural one made by a single gatekeeper. Reading where the real gate sits — and who holds it — is the difference between a campaign that moves a vote and one that performs for an audience that was never going to decide.",
    'Floe generated',
    true,
    "Ask who controls whether this bill even gets considered next, then aim there.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10081001,
    'Career Skills',
    'Legislative Process',
    "An amendment can gut a bill without changing its name",
    "A bill you support sails through committee with its title and stated purpose intact, and your team celebrates. But during markup, a single amendment quietly rewrote one definition in the operative section. Why might that one line matter more than the entire surviving title and preamble?",
    "Because the binding effect lives in the operative text and its definitions, not the title or purpose statement; one amended definition can narrow or reverse what the law actually does while the name stays unchanged",
    [
      ["It does not matter much: the title and stated purpose control how courts and agencies must apply the law, so an intact title means an intact bill", "Titles and purpose clauses are largely interpretive context, not the binding rule; agencies and courts act on the operative provisions, so a clean title can sit atop a gutted statute.", "Read the section that creates obligations and its definitions, not the marketing layer at the top of the bill."],
      ["The amendment is minor by definition, because anything important would have required renaming the bill or issuing a new committee report", "There is no rule that substantive change forces a rename; the most consequential edits are often deliberately undramatic precisely so they pass without alarm.", "Judge an amendment by what it does to the operative text, not by whether the packaging around it changed."],
      ["What matters is the vote count in committee, not the wording, since a strong majority means the policy outcome is locked regardless of the language", "A lopsided vote locks in whatever the text now says, including the rewritten definition; a strong margin behind altered language entrenches the change rather than neutralizing it.", "A favorable vote on bad text is a loss; check what the words now require before you count support."],
    ],
    "Statutes bite through their operative provisions and definitions, not their titles or purpose statements, so a single amended word in markup can quietly reverse a bill while its name and headline stay reassuring. The aha is that the action in legislating is lexical and procedural, not rhetorical: the real fight is often over one clause that almost no one outside the room reads. The deeper point is a discipline of attention — effective practitioners track the text that creates legal obligations, because that is where wins and losses are actually recorded, and where opponents do their quietest, most durable work.",
    'Floe generated',
    true,
    "Ask which words in the bill actually create the obligation, then watch only those.",
    { challengeRating: 6 },
  ),
  // ----------------------------------------------------------------------------
  // Political Risk
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10081002,
    'Career Skills',
    'Political Risk',
    "Probability and impact are different axes",
    "You are briefing a board on two threats. Threat A is a near-certain but minor reporting tweak that costs a few staff-hours. Threat B is a long-shot regulatory ban that, if it happened, would close a whole product line. A junior analyst ranks A as the top risk because it is 'almost guaranteed to happen.' What is wrong with ranking risks by likelihood alone?",
    "Risk is probability combined with impact, not probability alone; a low-probability, business-ending event (B) can outrank a near-certain trivial one (A), so the board must see both axes to allocate attention sensibly",
    [
      ["Nothing is wrong: the most likely event is the most important to prepare for, so a near-certain threat should always rank first", "Likelihood without magnitude tells you what will happen, not what matters; ranking by probability alone would have you prepare diligently for the trivial while ignoring the catastrophic.", "Score every threat on both how likely and how costly it is, then rank on the combination."],
      ["The analyst should instead rank purely by worst-case impact, since the only risks worth a board's time are the ones that could end the business", "Impact-only ranking flips the same error the other way: it would elevate vivid but near-impossible doomsdays and crowd out frequent, manageable losses that quietly add up.", "Neither axis alone is sufficient; the useful view is the product (or matrix) of probability and impact."],
      ["Probability and impact are really the same thing, because a truly serious threat will always also be a likely one if you analyze it carefully", "Severity and likelihood are independent; many of the most damaging risks are precisely the rare ones, which is why collapsing the two axes destroys the information a board needs.", "Keep the two axes separate so a rare-but-ruinous threat stays visible next to a common-but-cheap one."],
    ],
    "Risk lives on two independent axes — how likely and how costly — and collapsing them into one (usually likelihood, because it feels concrete) is how organizations sleepwalk into the rare event that ends them. The aha is that the scariest line on a risk dashboard is often the one with a small percentage next to a huge consequence, not the comfortable high-probability item. The deeper idea is that good risk work resists the mind's pull toward the frequent and the recent; it forces attention onto low-probability, high-impact tails precisely because intuition systematically underweights them.",
    'Floe generated',
    true,
    "Ask two separate questions: how likely is it, and how much would it cost — then combine.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10081003,
    'Career Skills',
    'Political Risk',
    "Give the board options, not a prophecy",
    "Your board wants to know whether a contested rule will pass. You genuinely don't know — it's roughly a coin flip. One instinct is to project confidence and state a firm prediction so you look decisive. Why is presenting decision-ready options usually more valuable than a confident forecast?",
    "Because a forecast you cannot control becomes a guess the board will hold you to, while options (with the trade-offs of each path) let the board act under uncertainty regardless of which way the rule breaks",
    [
      ["A firm prediction is more valuable, because boards need a single clear answer and hedging just signals that you haven't done the analysis", "Confidence is not analysis; a firm call on a coin flip manufactures false certainty and ties your credibility to luck, while honest bounding of uncertainty is the harder and more useful work.", "State what you know, bound what you don't, and hand the board moves rather than a bet."],
      ["You should refuse to brief until the outcome is certain, since presenting anything under uncertainty risks misleading the board", "Waiting for certainty means briefing only after the decision window has closed; the entire value of the function is enabling action before the answer is known.", "Decisions happen under uncertainty by definition; your job is to make uncertainty usable, not to wait it out."],
      ["Present the single most likely scenario in full detail and plan only for that, because preparing for both outcomes wastes resources on a path that won't happen", "Betting all preparation on the modal outcome leaves the organization exposed exactly when the coin lands the other way; on a near-even split, single-path planning is the costliest choice.", "When outcomes are close to even, build options that survive either result rather than optimizing for one."],
    ],
    "When you cannot control the outcome, a confident forecast quietly converts into a personal bet the board will remember — and a 50/50 call dressed as certainty is a credibility trap. The aha is that the deliverable is not a prediction but a set of pre-considered moves: if it passes we do X, if it fails we do Y, and either way we are not caught flat-footed. The deeper point is epistemic honesty as a professional asset — bounding uncertainty and presenting options, rather than hiding it behind bravado, is what lets an organization act well in a world it cannot foresee, and it protects the only thing the briefer really owns: their credibility.",
    'Floe generated',
    true,
    "Ask what the board should do if you're wrong; if you have no answer, you owe them options, not a forecast.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10081004,
    'Career Skills',
    'Political Risk',
    "A loud media cycle is not a decision risk",
    "An activist hashtag about your client is trending and the comms team is in full crisis mode. Yet the relevant rule is locked, the consultation closed months ago, and no decision-maker has the issue on their calendar. As the political risk lead, how should you characterize this for the board?",
    "As high noise but low decision risk: the media heat is real reputationally but it cannot move a decision that is already closed, so it should be flagged as a communications issue, not escalated as a policy threat",
    [
      ["As a top-tier policy risk, because a trending campaign proves the issue is hot and hot issues always translate into regulatory action", "Volume is not leverage; if no open decision point exists, even an intense campaign has nothing to act on, and treating attention as a proxy for risk burns resources chasing a closed file.", "Map the campaign to a specific open decision; if there isn't one, it is a reputation matter, not a policy one."],
      ["As nothing worth mentioning, since the rule is locked and therefore the organization faces no exposure of any kind from the noise", "Dismissing it entirely ignores genuine reputational and stakeholder exposure; the error is not over-escalation but mislabeling — it is a real comms risk, just not a policy-decision risk.", "Separate the channels: name the reputational exposure honestly while being clear it won't reopen the rule."],
      ["As an automatic escalation, because the safest move is always to treat the loudest signal as the most important one until proven otherwise", "Treating loudness as priority inverts the filter the role exists to provide; a risk function that escalates by volume becomes an amplifier of noise rather than a source of signal.", "Filter for decision-relevant change, not for whatever is currently loudest, then triage accordingly."],
    ],
    "Signal-versus-noise is the core discipline of political risk: a trending campaign can be deafening yet have no open decision to bite on, in which case it is a reputational matter for comms, not a policy threat for the board. The aha is that media heat and decision risk are different things, and conflating them lets the loudest input set the agenda. The deeper point is that the political-risk function exists precisely to resist the gravitational pull of salience — to ask 'what decision could this actually change, and is that decision still open?' rather than 'how loud is it right now?' Mislabeling noise as risk doesn't just waste effort; it trains the board to mistake volume for importance.",
    'Floe generated',
    true,
    "Ask what specific open decision this could change; if none, it's noise to manage, not a risk to escalate.",
    { challengeRating: 6 },
  ),
  // ----------------------------------------------------------------------------
  // Implementation
  // ----------------------------------------------------------------------------
  makeSimpleQuestion(
    10081005,
    'Career Skills',
    'Implementation',
    "Win the amendment, lose the rollout",
    "Your team lobbied hard and secured a favorable carve-out in a new law — a clear policy win, and everyone is celebrating. But the same provision sets a compliance date that your operations team says is physically impossible to meet, and missing it triggers penalties. Why might this 'win' actually be a loss?",
    "Because the binding cost lands at implementation: an unworkable compliance date can be more damaging than the policy concession was valuable, so a legislative win that the business cannot operationalize is a net loss",
    [
      ["It is still a clean win, because the favorable carve-out is what the team set out to achieve and operational details are someone else's problem to sort out later", "Treating implementation as 'someone else's problem' is exactly how lobbied outcomes become liabilities; the carve-out and the deadline are the same law, and the business lives under both.", "Score the win by what the organization can actually do under the final text, deadlines included, not by the headline concession."],
      ["The compliance date is irrelevant, because regulators routinely grant extensions whenever a deadline turns out to be inconvenient for industry", "Counting on discretionary relief is a bet, not a plan; supervisors may enforce the date as written, and building operations around hoped-for extensions invites penalties.", "Plan to meet the date as written; treat any extension as upside, never as the baseline."],
      ["It is a loss only if the penalty exceeds the value of the carve-out in pure dollars, which it almost never does for a favorable provision", "This frames the trade-off too narrowly; beyond direct penalties, an unworkable date can mean operational disruption, reputational damage, and litigation exposure that dwarf a tidy dollar comparison.", "Weigh the full operational and reputational cost of the rollout, not just a penalty-versus-concession price tag."],
    ],
    "The classic public-affairs trap is to celebrate the legislative headline while ignoring the rollout: a favorable carve-out paired with an impossible compliance date can cost more than the concession was ever worth. The aha is that a law is not 'won' when the amendment passes — it is won (or lost) when the organization can actually live under the final text, deadlines and all. The deeper point is that advocacy and compliance are one continuous problem, not two silos; the practitioners who fail confuse the moment of passage with the moment of consequence, and never connect the win to the teams who have to make it work on the ground.",
    'Floe generated',
    true,
    "Before celebrating, ask the operations team whether the business can actually do what the final text requires by when.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10081006,
    'Career Skills',
    'Implementation',
    "Non-binding guidance that bites like law",
    "A regulator issues 'guidance' that is technically non-binding — no statute, no formal rule. Your legal team says you can safely ignore it because it isn't law. Yet the supervisors who run your audits treat it as the standard they enforce against. What should drive your decision on whether to comply?",
    "How supervisors actually enforce in practice: guidance can be formally non-binding yet operationally decisive if examiners hold you to it, so the real test is enforcement behavior, not the document's legal label",
    [
      ["Ignore it entirely: if it is not statute or a formal rule, it has no force, and complying with non-binding guidance just wastes resources on something unenforceable", "The legal label and the practical consequence can diverge sharply; an examiner who downgrades you for deviating from guidance imposes a real cost regardless of whether the document is 'law.'", "Ask how examiners behave, not just what the document is called; enforced expectations are real obligations in practice."],
      ["Comply only if a court has already ruled the guidance enforceable, because until then there is no actual obligation to worry about", "Waiting for litigation to settle the point means absorbing supervisory penalties in the meantime; enforcement risk is present long before any court weighs in.", "Manage to current supervisory practice, since the cost arrives at the next exam, not at some eventual judgment."],
      ["Treat all guidance as fully binding law, the same as a statute, to be maximally safe and avoid any judgment calls", "Flattening every document into 'binding law' overcorrects and wastes effort on guidance no one enforces; the skill is calibrating to actual enforcement, not blanket compliance.", "Calibrate to how this specific guidance is enforced rather than defaulting to treat-everything-as-law."],
    ],
    "Whether to follow 'non-binding' guidance turns not on its legal label but on how supervisors actually behave: an examiner who enforces against guidance makes it a real obligation no matter what the cover page says. The aha is that the gap between formal status and practical force is where naive legal reasoning fails — 'it isn't law' is true and useless if the next audit treats it as the standard. The deeper point is that regulatory reality is enforced, not merely written; effective practitioners read the behavior of the people who run exams, because that, more than the statute book, determines what the organization must actually do.",
    'Floe generated',
    true,
    "Ask how examiners treat this in practice, not just whether a court would call it binding.",
    { challengeRating: 6 },
  ),
]
