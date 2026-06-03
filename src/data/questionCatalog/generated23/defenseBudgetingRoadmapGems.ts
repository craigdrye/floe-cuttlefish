import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const defenseBudgetingRoadmapGems: Question[] = [
  // ---------------------------------------------------------------------------
  // Chapter: Defense Money Flow
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10035000,
    'Career Skills',
    'Defense Money Flow',
    'The Two Deaths of an Appropriation',
    'Your program is sitting on $4M of Procurement money from a fund cite that expired last September. An invoice arrives for a missile component you ordered and signed a contract for two years ago, before the funds expired, but the vendor only just delivered. A colleague says, "That money is expired, it is dead, kick the invoice to current-year funds." What is the correct call?',
    'Pay the invoice from the expired Procurement funds: expired funds cannot take NEW obligations, but they remain available for five years to liquidate and adjust valid obligations made while the appropriation was current.',
    [
      [
        'Pay it from current-year Procurement funds, since expired money can no longer disburse cash',
        'Confuses "expired" with "canceled" — expired funds absolutely still outlay; raiding current funds for a prior-year obligation is itself a fiscal-law error',
        'Expiration freezes new commitments, not payment of old ones; the bill belongs to the year that created the obligation',
      ],
      [
        'Refuse to pay until the funds are reauthorized by Congress',
        'Invents a step that does not exist; valid prior-year obligations need no reauthorization to be paid during the expired period',
        'The legal liability was created when current; the five-year expired window exists precisely to honor it',
      ],
      [
        'Pay it from expired funds only if you first open a new obligation against them',
        'You cannot create a new obligation in the expired period at all — only adjust existing ones',
        'The action is liquidating an old obligation, not opening a new one; that is exactly what expired funds may still do',
      ],
    ],
    'Lesson: An appropriation dies twice, and the difference is everything. At expiration it loses the power to make NEW commitments but keeps the power to PAY OLD ones for five years (31 U.S.C. 1552); only at cancellation does the money truly cease to exist for any purpose. The deep point is that money has a memory: a dollar is still bound to the legal liability it created while alive, so "the money is old" never settles which account a bill belongs to — the date the obligation was incurred does.',
    'Floe generated',
    true,
    'Ask when the obligation was incurred, not when the invoice arrived. Expired is not canceled.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10035001,
    'Career Skills',
    'Defense Money Flow',
    'A Program That Looks Finished But Has Done Nothing',
    'A shipbuilding program reports it has obligated 99% of its appropriation and the commander wants to announce the program "essentially complete." You pull the outlay report: only 12% of the money has actually been paid out, and the yard has barely started cutting steel. Why is the commander about to be wrong, and what does the gap between 99% and 12% actually mean?',
    'Obligation only means the money is legally committed by a signed contract; outlay means cash has actually been disbursed for work done. A 99% obligation with 12% outlay means the program has promised the money but the work and payments still lie almost entirely in the future — it is just starting, not finishing.',
    [
      [
        'The 12% outlay is a reporting lag and the program really is 99% done',
        'Treats outlay as a delayed echo of obligation, but for multi-year procurement outlays trail by years because they track delivered work, not signatures',
        'Outlay measures performance reaching completion; a low outlay means the steel, not the paperwork, is the bottleneck',
      ],
      [
        'The 87-point gap proves the program misobligated and the funds must be deobligated',
        'A large obligation-to-outlay gap is normal and expected for shipbuilding, not evidence of error',
        'The gap reflects the slow physical pace of building a ship, which is exactly why this appropriation has a five-year life',
      ],
      [
        'Obligation and outlay measure the same thing at different precision, so 99% is the truer figure',
        'They measure different events entirely — a legal commitment versus a cash payment — not the same thing at two resolutions',
        'A signed contract and a paid invoice are distinct lifecycle stages; conflating them is the classic execution-reporting trap',
      ],
    ],
    'Lesson: Obligation is a promise; outlay is performance. The lifecycle commitment-obligation-outlay separates the moment you bind the money from the moment work is done and cash leaves Treasury, and for long-lead programs those moments can be years apart. The deeper lesson is that a single metric can flatter you into the opposite of the truth: a 99% obligation rate, the very number leaders love to cheer, can describe a program that has accomplished almost nothing real. Healthy execution is about work, not signatures.',
    'Floe generated',
    true,
    'Obligation is a signed promise; outlay is cash for work done. Which one tracks real progress?',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10035002,
    'Career Skills',
    'Defense Money Flow',
    'Why Convenience Cannot Change the Color',
    'It is late August. You have $200K of unspent Procurement money about to expire and a real, urgent O&M-type need: routine maintenance and consumable supplies for a maintenance shop. Procurement money is right there and would otherwise be lost. Your supervisor says, "Use it, the need is genuine and the money is sitting idle." Why is this a trap?',
    'It is a purpose violation in the making: each appropriation may only buy the kind of thing it was appropriated for. Routine maintenance and consumables are an O&M purpose; Procurement money cannot fund them no matter how genuine the need or how soon it expires. The right move is to fund it from O&M or let the need go unmet, not change colors.',
    [
      [
        'It is fine because the need is real and the money would otherwise be wasted',
        'Treats a genuine need plus a deadline as authority to spend, but neither legitimizes using the wrong color of money',
        'Purpose law asks what the money was appropriated to buy, not whether the need is real or the deadline is looming',
      ],
      [
        'It is allowed as a one-time below-threshold move since the amount is small',
        'Confuses a purpose violation with a reprogramming threshold; no dollar limit makes the wrong color legal',
        'Reprogramming moves money within an appropriation; it cannot convert Procurement into a license to buy O&M items',
      ],
      [
        'It is acceptable if you document the urgency in the file before spending',
        'Documentation records a decision; it cannot authorize an unlawful one — a well-papered purpose violation is still a violation',
        'No memo cures a misuse of color; the law judges what the money bought, not how thoroughly you explained it',
      ],
    ],
    'Lesson: The colors of money encode Congress’s intent about WHAT each dollar may buy, and the purpose statute (31 U.S.C. 1301) makes that intent binding. The hard, almost counterintuitive discipline is that an expiring balance plus a genuine need still does not justify spending it on the wrong purpose; "use it or lose it" tempts exactly the violation the law forbids. The deeper idea: an appropriation is not a pile of cash but a permission slip with a named purpose, and convenience never rewrites the slip.',
    'Floe generated',
    true,
    'Ask what kind of thing each color was appropriated to buy. Does urgency change that?',
    { challengeRating: 6 },
  ),
  // ---------------------------------------------------------------------------
  // Chapter: Appropriations and Fiscal Law
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10035003,
    'Career Skills',
    'Appropriations and Fiscal Law',
    'Current Funds for Current Needs',
    'In September, with this fiscal year’s O&M about to expire, a program manager wants to use it to stock up a full year of next year’s routine office supplies "while the money is still here." The supplies are clearly for next year’s consumption. Which fiscal-law pillar does this stress, and is it allowed?',
    'It stresses the Time pillar via the bona fide needs rule: a fiscal year’s appropriation may only be used for needs genuinely arising in that year. Buying a year of supplies to be consumed next year uses this year’s money for next year’s need, so it is not allowed without special authority.',
    [
      [
        'It is allowed because supplies are fungible and the office will eventually use them',
        'Eventual use does not make a need "bona fide" for the current year; the rule asks when the need actually arises, not whether it is ever genuine',
        '"Current funds for current needs" turns on the year of the need, not whether the item is generic',
      ],
      [
        'It stresses the Purpose pillar, since office supplies might be the wrong color of money',
        'Office supplies are a proper O&M purpose; the problem is timing, not what the money is buying',
        'The issue is the year the need belongs to (Time), not the category of the expense (Purpose)',
      ],
      [
        'It is allowed because spending before expiration always beats letting funds lapse',
        'Avoiding a lapse is not a legal authority; deliberately pulling next year’s need into this year to "save" money is the classic time violation',
        'Letting funds expire is sometimes the lawful outcome; the deadline is never permission to break the bona fide needs rule',
      ],
    ],
    'Lesson: The three pillars of fiscal law are Purpose, Time, and Amount. The bona fide needs rule is the Time pillar in plain words: "current funds for current needs." The seductive trap is that a looming expiration feels like a reason to spend, but a deadline is not an authority — pre-buying next year’s need with this year’s money is a time violation even when the purpose is right and the cash is available. The deep point: each fiscal year’s money is sealed to that year’s needs, and the calendar, not your convenience, decides which year a need belongs to.',
    'Floe generated',
    true,
    'Which year does the need actually arise in? Match the money to the year of the need.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10035004,
    'Career Skills',
    'Appropriations and Fiscal Law',
    'When One Contract Crosses the New Year',
    'On 1 August you award a 12-month contract for routine guard services running through the following July, crossing into the next fiscal year. A colleague insists you must split the cost and fund each fiscal year’s months from its own appropriation. For this severable service, what does the law actually permit?',
    'Statutory authority lets DoD fund a severable service contract up to 12 months entirely with the appropriation current at the time of award, even though performance crosses into the next fiscal year — so you may use this year’s O&M for the whole 12 months.',
    [
      [
        'You must split the funding, charging each fiscal year for the months performed in it',
        'That would be the default for severable services without statutory relief, but the 12-month authority exists precisely to avoid this split',
        'Congress carved out a one-year exception for severable service contracts; absent it you would split, but the exception applies here',
      ],
      [
        'You cannot award a contract that crosses fiscal years at all under the bona fide needs rule',
        'Crossing fiscal years is permitted; the bona fide needs rule restricts which year’s need you fund, not whether performance may span the boundary',
        'The question is which appropriation pays, not whether the contract is legal — and the statute answers it',
      ],
      [
        'Because guard services are continuous, they are nonseverable and one award always covers any length',
        'Severable services (each period independently useful, like ongoing guarding) are exactly NOT nonseverable; the relief here is the 12-month rule, not a nonseverability claim',
        'Nonseverable means a single unified end product; recurring guard duty is the textbook severable service, governed by the 12-month exception',
      ],
    ],
    'Lesson: Services come in two kinds. Nonseverable services produce one unified end product (a study, a report) and are fully funded by the year of award. Severable services (recurring, independently useful month to month) would normally be split across fiscal years under the bona fide needs rule — but a DoD statute lets a severable service contract of up to 12 months be funded entirely by the year of award. The deeper lesson: fiscal law is not one rigid rule but a structure of rules and deliberate exceptions, and the analyst’s craft is knowing which category a thing falls into before reaching for the rule.',
    'Floe generated',
    true,
    'Is the service severable or nonseverable, and is there a special 12-month authority for the severable case?',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10035005,
    'Career Skills',
    'Appropriations and Fiscal Law',
    'Urgency Is Not an Authority',
    'The government is operating under a continuing resolution. A combatant commander declares an "urgent operational need" and directs you to start a brand-new program line and ramp a weapon to a higher production rate immediately. The need is real and lives are arguably at stake. What is the correct fiscal advice?',
    'Under a continuing resolution you may generally only continue ongoing activities at the prior rate of operations: no new starts and no production-rate increases. Urgency does not waive this; the lawful path is to fund within the CR’s limits or pursue an anomaly/authority, not to begin a new start because the need is pressing.',
    [
      [
        'The urgency justifies the new start, since operational necessity overrides the CR',
        'Treats urgency as a legal authority; a CR’s restrictions are statutory and are not waived by how important the need feels',
        'Necessity argues for seeking proper authority, not for ignoring the limit — the CR forbids new starts regardless of stakes',
      ],
      [
        'A CR is a paperwork formality, so proceed and document the emergency afterward',
        'A CR is binding law, not a formality; after-the-fact documentation cannot authorize what the CR prohibited',
        'Acting first and papering later inverts the rule — the CR’s no-new-start bar is the thing the documentation would have to violate',
      ],
      [
        'The ramp is fine because increasing an existing program’s rate is just continuing it',
        'A production-rate increase is specifically among the things a CR blocks, even for an existing line',
        'Continuing "at the prior rate of operations" means the same rate, not a higher one; the increase is exactly what is barred',
      ],
    ],
    'Lesson: A continuing resolution funds the government at the prior year’s rate of operations and explicitly forbids new starts and production-rate increases. The course’s central instinct lives here: separate mission urgency from legal availability. The most dangerous sentence in a budget shop is "but it is urgent," because urgency is a reason to find authority, never a substitute for it. The deep idea is constitutional — the power of the purse sits with Congress, so a commander’s genuine need cannot, by itself, unlock money the law has not made available.',
    'Floe generated',
    true,
    'A CR caps you at the prior rate of operations. Does an urgent need change what the law made available?',
    { challengeRating: 6 },
  ),
  // ---------------------------------------------------------------------------
  // Chapter: Spend Plans and Execution Reviews
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10035006,
    'Career Skills',
    'Spend Plans and Execution Reviews',
    'When the Target Becomes the Goal',
    'Your obligation target is 80% by 30 June. It is mid-June and you are at 60%, so the team proposes awarding two contracts early on incomplete requirements and stockpiling a year of supplies "to make rate." Hitting the number would look great on the execution dashboard. Why should you resist, and what has gone wrong with the metric?',
    'The obligation rate is a proxy for healthy execution, not the goal itself. Rushing premature or unjustified obligations just to hit a percentage buys nothing useful, risks purpose and bona fide needs violations, and corrupts the very signal the metric was meant to give. The right move is to obligate only what is genuinely ready and explain the variance honestly.',
    [
      [
        'Make rate by awarding early, because being behind the obligation target is the real failure',
        'Treats the target as the objective; an obligation made only to move a number is waste dressed as performance, not execution',
        'The percentage exists to reveal whether real work is funded on time, not to be satisfied at the cost of bad obligations',
      ],
      [
        'Hitting 80% proves healthy execution regardless of what the obligations are for',
        'A healthy obligation rate is not proof of healthy execution; you can be "on rate" while obligating prematurely or wastefully',
        'Rate measures money committed, not work accomplished or money well spent; the two can diverge sharply',
      ],
      [
        'Stockpile a year of supplies now, since obligating sooner is always safer than later',
        'Pre-buying next year’s need to make this year’s rate risks a bona fide needs violation and inflates the number with the wrong spending',
        'Earlier is only better when the need is current and the requirement is ready; otherwise it is a metric-driven mistake',
      ],
    ],
    'Lesson: This is Goodhart’s law in a budget seat: when a measure becomes a target, it stops being a good measure. The obligation rate is meant to flag whether real requirements are getting funded on schedule, but the moment "make rate" becomes the goal, people obligate prematurely, stockpile, and rush bad contracts — hitting the number while defeating its purpose. The durable instinct is to treat the rate as a question ("is real work getting funded?"), never as the answer, and to defend an honest variance over a flattering but hollow percentage.',
    'Floe generated',
    true,
    'What was the obligation rate supposed to tell you, and does forcing the number still tell you that?',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10035007,
    'Career Skills',
    'Spend Plans and Execution Reviews',
    'Timing Variance or Trouble',
    'Two programs are each "30% behind plan" at midyear. Program A’s big contract was always scheduled to award in Q3 and is on track to award then; the early-year plan was just a straight-line guess. Program B’s award has slipped twice because the requirement keeps changing and no end is in sight. The dashboard shows both as the same red number. Which is the real problem, and why?',
    'Program B. A’s "variance" is a timing artifact — the straight-line plan never matched the real Q3 contracting timeline, and the money will obligate on schedule. B’s slip is a scope/planning failure: an unstable requirement with no award date is genuinely at risk and needs corrective action.',
    [
      [
        'Both are equally serious because they show the identical 30% shortfall against plan',
        'Treats the headline number as the diagnosis; the same variance can be benign timing or a real failure depending on its driver',
        'A variance is a symptom — the question is what caused it, not how large the percentage looks',
      ],
      [
        'Program A is worse because it has obligated the least so far this year',
        'Lowest-so-far is meaningless when the plan itself was a straight line that ignored a Q3 award; A is on track to its real schedule',
        'Phasing should follow contracting lead times, so an early-year lag against a flat plan is expected, not alarming',
      ],
      [
        'Neither is a problem yet, since both can recover by year-end if they push hard',
        'Optimism that B can recover ignores that its requirement is unstable with no award date — that is a planning failure, not a timing slip',
        'Hope is not a recovery plan; B has a named, persistent driver that will not fix itself by pushing harder',
      ],
    ],
    'Lesson: An execution review is a decision forum, not a status recital, and the core skill is reading variance by driver rather than by size. A timing variance means the work and money are simply later than a crude plan assumed — often because the plan was a straight line instead of a real contracting schedule. A scope or planning variance means something is actually broken. The deep point: the same red number can be perfectly healthy or genuinely dangerous, so judgment lives in the cause, not the magnitude — and "behind plan" without a driver and a recovery action is status without judgment.',
    'Floe generated',
    true,
    'Ask what drives each shortfall: a crude straight-line plan, or a requirement that will not hold still?',
    { challengeRating: 6 },
  ),
  // ---------------------------------------------------------------------------
  // Chapter: Budget Communication and Oversight (one strong question)
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10035008,
    'Career Skills',
    'Budget Communication and Oversight',
    'A Thick Binder Is Not a Complete One',
    'An auditor questions a $1.2M payment. Your team proudly hands over a 300-page binder: meeting notes, email threads, slide decks, and a journal voucher that simply restates the amount. The auditor still issues a finding. Volume clearly was not the problem — so what was missing, and what would actually close it?',
    'Audit closure requires the specific supporting evidence that ties the obligation to a receipt to an invoice to the payment, plus certifying-official accountability — not volume. A journal voucher that merely restates the amount is unsupported. The fix is the documented obligation-receipt-invoice-payment chain and a validation step proving the control held.',
    [
      [
        'Add more pages and backup until the sheer weight of documentation satisfies the auditor',
        'Mistakes a thick binder for a complete one; volume is not evidence and never substitutes for the specific linking documents',
        'A finding closes on the right evidence, not on quantity — 300 weak pages prove less than one valid invoice tied to a receipt',
      ],
      [
        'The journal voucher restating the amount is the support, so the finding is the auditor’s error',
        'An unsupported journal voucher that just repeats the figure is the classic non-fix; it asserts the amount rather than substantiating it',
        'Evidence must connect the payment to what was ordered and received, not simply re-declare the number',
      ],
      [
        'Declare the issue resolved once the binder is delivered, since the documentation now exists',
        'Skips the validation step; a finding is not closed until you prove the control actually works, not merely that paper was produced',
        'Closure needs a fix plus verification that the fix held — delivering documents is not the same as demonstrating control',
      ],
    ],
    'Lesson: Audit readiness is built in the daily details: every payment must trace through the obligation-receipt-invoice-payment chain, with a certifying official accountable and a validation step that proves the control held. The seductive error is equating volume with evidence — a 300-page binder can be entirely beside the point while one missing invoice-to-receipt link sinks it. The deeper lesson is that real assurance is structural, not bulky: an auditor (and an honest analyst) trusts the specific links and the proof they held, never the thickness of the file.',
    'Floe generated',
    true,
    'Audit evidence is a chain (obligation-receipt-invoice-payment), not a pile. What link is actually missing?',
    { challengeRating: 6 },
  ),
]
