import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

// Series 63 "showcase gems" — three chapters chosen for the conceptual tensions
// that make the Uniform Securities Act genuinely interesting rather than merely
// memorizable:
//   1. Definitions      — the false-friend nouns the whole exam turns on
//   2. Securities Registration — "exempt" is not one idea but several
//   3. Ethical Practices — where written consent stops being able to cure a wrong
//
// Topic is "Career Skills" verbatim; every item is generated=true with exactly
// three distractor tuples [tempting, flaw, reframe].

export const series63Gems: Question[] = [
  // ── Definitions ────────────────────────────────────────────────────────────
  makeSimpleQuestion(
    10088000,
    'Career Skills',
    'Definitions',
    'A person versus a human',
    'A regional brokerage firm and the human being it employs to call clients are both regulated under the Uniform Securities Act, but the Act gives them different names. The firm itself is registered as a broker-dealer. What is the single human who solicits trades on the firm\'s behalf called?',
    'An agent — under the USA an "agent" is always a natural person, never the firm',
    [
      [
        'A broker-dealer, because anyone effecting securities transactions is a BD',
        'This collapses the Act\'s most load-bearing distinction: a broker-dealer is the entity (the firm); the human representing it is the agent.',
        'The firm is the BD; the person speaking on its behalf is the agent. Two nouns, two registrations.',
      ],
      [
        'An investment adviser, since the agent advises clients on what to buy',
        'Giving advice incidental to executing a trade does not make someone an IA; the IA category turns on being in the business of advising for compensation.',
        'Effecting transactions = agent. Being paid to advise = investment adviser. Selling is not advising.',
      ],
      [
        'An issuer representative, because the person represents the firm to the public',
        '"Issuer representative" describes someone acting for the company that creates the security, not for the brokerage selling it.',
        'An agent represents a BD or an issuer; representing the brokerage that resells securities makes you the BD\'s agent.',
      ],
    ],
    'Lesson: The USA is a definitions exam because the same word can name a firm or a person depending on the noun. "Agent" is reserved for the individual human; the entity is the "broker-dealer." This is not pedantry — liability, registration forms (U4 vs BD), and supervisory duties all hang on which noun applies. The deeper point: regulation tracks roles, not people, so one fact pattern can hide several legally distinct actors.',
    'Floe generated',
    true,
    'Ask whether the actor is a company or a single human being — the Act names them differently.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10088001,
    'Career Skills',
    'Definitions',
    'The snowbird who stays a customer',
    'A broker-dealer registered only in New York has a long-standing client who winters in Florida. The BD keeps no office in Florida and calls only this existing client there. The instant the BD also solicits one brand-new Florida resident, what changes?',
    'It now has a "place of business" obligation in Florida and must register there — soliciting any new client destroys the snowbird exclusion',
    [
      [
        'Nothing — without a physical office the BD never has to register in Florida',
        'The exclusion is not about bricks and mortar; it is about whom you solicit. New prospects pull you under state jurisdiction regardless of office space.',
        'The snowbird rule protects servicing existing clients who travel, not prospecting for new ones.',
      ],
      [
        'Nothing, because a single new client falls under a de minimis exemption for BDs',
        'The de minimis allowance (a handful of clients) is an investment-adviser concept; it does not rescue broker-dealers.',
        'BDs get the snowbird exclusion, not the IA de minimis count. One new solicitation is enough to trigger registration.',
      ],
      [
        'The BD must register only if the new client actually buys something',
        'Registration triggers on solicitation, not on a completed sale; the Act regulates the offer, not just the transaction.',
        'Soliciting is itself a regulated act. The duty attaches when you reach out, not when money moves.',
      ],
    ],
    'Lesson: The snowbird exclusion lets a BD keep serving an existing client who is temporarily in another state without registering there — a sensible accommodation. But it is fragile: a single new prospect collapses it entirely. The concept that lingers is that state securities jurisdiction follows the act of solicitation, not the location of a desk. Drawing in even one new resident plants your flag in that state\'s soil.',
    'Floe generated',
    true,
    'Distinguish "still serving an old client who traveled" from "reaching out to someone new."',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10088002,
    'Career Skills',
    'Definitions',
    'The gift that is secretly a sale',
    'Generosity is usually invisible to securities law: a bona fide gift of stock is neither an offer nor a sale. Yet one kind of "gift" is treated as a sale the moment it is handed over. Which one?',
    'A gift of assessable stock — shares that can demand future capital calls from the holder',
    [
      [
        'A gift of any stock worth more than $300, mirroring the FINRA gift limit',
        'The $300 limit governs gifts to industry contacts; it has nothing to do with whether transferring shares counts as a sale.',
        'Dollar value is irrelevant here. What matters is whether the recipient takes on a future financial obligation.',
      ],
      [
        'A gift of restricted stock that cannot yet be freely resold',
        'Resale restrictions limit when shares can be sold, but the gift of them is still a bona fide gift, not a sale.',
        'Restriction is about liquidity later; assessability is about the recipient owing money — only the latter makes a gift a sale.',
      ],
      [
        'A gift to a customer rather than to a family member',
        'The recipient\'s relationship to the donor does not convert a gift into a sale; the nature of the security does.',
        'Who receives the shares does not matter. Whether the shares can demand more cash from them does.',
      ],
    ],
    'Lesson: Assessable stock carries the possibility that the issuer can later demand more money from the holder. Because the recipient accepts a future obligation in exchange for the shares, the law sees value flowing both ways — so the "gift" is really a sale. The deeper idea: the Act defines "sale" by the presence of consideration, not by the presence of a price tag, which is why an act that feels purely charitable can be a regulated transaction.',
    'Floe generated',
    true,
    'A real gift costs the recipient nothing. Which kind of shares can later cost them money?',
    { challengeRating: 6 },
  ),

  // ── Securities Registration ──────────────────────────────────────────────────
  makeSimpleQuestion(
    10088003,
    'Career Skills',
    'Securities Registration',
    'The bond that stays exempt versus the deal that does not',
    'A municipal bond is sold to a sophisticated institution on Monday and the identical bond is sold to a retail walk-in customer on Tuesday. Both escape state registration, but for different reasons. Which sale was exempt because of the security itself, such that it would remain exempt no matter who bought it?',
    'Monday and Tuesday both — a municipal bond is an exempt security, so the exemption attaches to the bond in every transaction',
    [
      [
        'Only Monday, because selling to an institution is an exempt transaction',
        'The institutional sale is indeed an exempt transaction, but that is a second, independent reason; the bond was already exempt as a security on both days.',
        'A muni is an exempt security regardless of buyer. The institutional angle is a bonus exemption, not the load-bearing one.',
      ],
      [
        'Only Tuesday, because retail sales of government paper are automatically exempt transactions',
        'There is no blanket "retail sale" transaction exemption; the Tuesday sale escapes registration solely because the bond itself is exempt.',
        'It is the security that is exempt, not the retail channel. Reverse the buyers and the answer would not change.',
      ],
      [
        'Neither — exemptions attach to transactions, never to securities themselves',
        'This erases an entire category. The Act lists exempt securities (§402(a)) separately from exempt transactions (§402(b)).',
        'There are two distinct exemption families. A muni bond lives in the "exempt security" one.',
      ],
    ],
    'Lesson: An exempt security (US/state government paper, bank issues, certain insurance products) is exempt in any transaction, full stop. An exempt transaction exempts a specific deal regardless of the security. The exam\'s favorite trap swaps these two nouns. The conceptual hook: exemption can live in the object or in the event, and the same bond can be double-exempt one day and single-exempt the next — same paper, different legal footing.',
    'Floe generated',
    true,
    'Ask whether the exemption would survive if you swapped the buyer. If yes, it lives in the security.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10088004,
    'Career Skills',
    'Securities Registration',
    'Federal covered is not the same as free',
    'After NSMIA, a Nasdaq-listed company\'s shares are "federal covered," so a state cannot make the company register or pass a merit review there. A candidate concludes the state has no role at all. Where is that conclusion wrong?',
    'The state can still require a notice filing and fee and can still enforce its antifraud provisions against the offering',
    [
      [
        'It is not wrong — federal covered means the state\'s authority is completely preempted',
        'Preemption removed only substantive registration and merit review; it deliberately preserved notice filings, fees, and antifraud power.',
        '"Federal covered" caps what the state may demand for registration; it does not evict the state from antifraud policing.',
      ],
      [
        'The state may still impose its own full merit review of the offering\'s fairness',
        'Merit review is exactly what NSMIA stripped away; allowing it back would defeat the statute\'s purpose.',
        'The one thing the state cannot do is second-guess the offering\'s merits. It can still demand notice and police fraud.',
      ],
      [
        'The security is now also exempt, so even a notice filing is optional',
        'Federal covered is not the same as exempt; the issuer must still notice-file in each state where it offers, and pay the fee.',
        'Covered ≠ exempt. The state\'s registration hands are tied, but its mailbox and its fraud statute are not.',
      ],
    ],
    'Lesson: NSMIA (1996) drew a line between substance and oversight. States lost the power to register or merit-review federal covered securities, but kept notice filings, fees, consent to service of process, and antifraud enforcement. The lasting idea: preemption is rarely total. Congress carved away the burdensome, duplicative review while leaving intact the state\'s power to punish fraud — because no securities law tolerates an actor being beyond the reach of an antifraud claim.',
    'Floe generated',
    true,
    'Preemption took away one specific power. List what the state can still do with its mailbox and its courts.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10088005,
    'Career Skills',
    'Securities Registration',
    'Three doors into state registration',
    'A large, seasoned issuer is simultaneously registering an offering with the SEC and wants its state registration to go effective at the same moment as the federal one. Which of the three state registration methods is designed precisely to ride along with the federal filing?',
    'Coordination — state effectiveness is timed to occur simultaneously with federal effectiveness',
    [
      [
        'Qualification, because that is the most thorough method and large issuers get the full review',
        'Qualification is the standalone, full-state-review route used when there is no federal registration to coordinate with — typically smaller in-state offerings.',
        'Qualification stands alone; Coordination is the one that synchronizes with a concurrent SEC registration.',
      ],
      [
        'Notification (filing), because established issuers always use the simplest path',
        'Filing suits seasoned issuers but goes effective on its own 30-day clock, not in lockstep with a federal registration.',
        'Filing is fast but independent. Only Coordination is engineered to fire at the same instant as the federal deal.',
      ],
      [
        'There is no method for this — federal and state effectiveness can never align',
        'Aligning the two is the entire reason Coordination exists; §303 was written for exactly this case.',
        'The Act anticipated dual registration. Coordination exists so the two effectiveness dates can be one date.',
      ],
    ],
    'Lesson: The USA offers three registration doors — Notification/Filing (light, for seasoned issuers), Coordination (paired with a simultaneous federal registration), and Qualification (full state review, often for small in-state deals). Coordination is the elegant one: it lets a single offering clear two regulators at the same instant rather than serially. The concept worth keeping is that registration regimes are layered, and good statutory design lets parallel reviews converge instead of stacking delay on delay.',
    'Floe generated',
    true,
    'One method exists only because a federal registration is happening at the same time. Which?',
    { challengeRating: 6 },
  ),

  // ── Ethical Practices ────────────────────────────────────────────────────────
  makeSimpleQuestion(
    10088006,
    'Career Skills',
    'Ethical Practices',
    'The promise consent cannot rescue',
    'Many client harms become permissible once the client signs off in writing. A reassuring agent tells a nervous client, "Sign here and I personally guarantee you will not lose money." The client happily signs. Under NASAA\'s Statement of Policy, what is the agent\'s status?',
    'In violation — guaranteeing a customer against loss is a per se prohibited practice that written consent cannot cure',
    [
      [
        'Permitted, because the client gave informed written consent to the arrangement',
        'Consent cures conflicts of interest, not categorical bans. A guarantee against loss is barred outright, with or without a signature.',
        'Some rules bend with consent; this one does not. The prohibition is on the act itself, not on doing it secretly.',
      ],
      [
        'Permitted, provided the agent has the personal net worth to actually honor the guarantee',
        'Solvency is irrelevant; the violation is making the guarantee at all, because it distorts the client\'s risk perception.',
        'The harm is the false promise of certainty, not the agent\'s ability to pay. Even a billionaire agent cannot guarantee against loss.',
      ],
      [
        'Permitted only if the guarantee is limited to principal and not gains',
        'Narrowing the guarantee does not save it; any guarantee against loss is prohibited per se.',
        'There is no "small enough" guarantee. The line is at zero, not at some tolerable amount.',
      ],
    ],
    'Lesson: Most ethics rules are about disclosure and consent — fix the conflict by making it transparent. But a few prohibitions are per se: guaranteeing a customer against loss is wrong no matter who consents, because it sells a fiction (markets carry risk) and invites reckless behavior. The deep tension: consent is powerful but not omnipotent. Some acts are banned because the harm is to the integrity of the market, which a single client cannot waive on everyone\'s behalf.',
    'Floe generated',
    true,
    'Ask whether the rule forbids a hidden act or forbids the act entirely. Consent only fixes the first kind.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10088007,
    'Career Skills',
    'Ethical Practices',
    'Sharing in proportion, or not at all',
    'An agent wants to share in the profits and losses of a client\'s account. The client agrees in writing and the firm approves in writing. The agent contributes 10% of the account\'s capital. For an ordinary (non-family) customer, what share of profits and losses may the agent take?',
    'No more than 10% — sharing must be in direct proportion to the agent\'s own financial contribution',
    [
      [
        'Any percentage the client agrees to in writing, since both parties consented',
        'Written consent is necessary but not sufficient; the proportionality cap still binds for non-family customers.',
        'Consent opens the door to sharing at all; proportionality decides how much. Both gates must be passed.',
      ],
      [
        '50%, the conventional even split between agent and customer',
        'There is no default even split. The agent\'s share is tethered to capital contributed, here 10%.',
        'The number is not a custom; it is arithmetic. Put in a tenth, take out at most a tenth.',
      ],
      [
        'Zero — agents may never share in customer accounts under any circumstances',
        'Sharing is permitted with the proper consents and proportionality; it is not an absolute ban (unlike guaranteeing against loss).',
        'This is allowed within limits. The constraint is proportionality, not prohibition.',
      ],
    ],
    'Lesson: An agent may share in a customer account only with the customer\'s written consent, the firm\'s written consent, and a share strictly proportional to the agent\'s own capital. The proportionality requirement is the conceptual heart: it forces the agent to have real skin in the game in the same ratio as their upside, eliminating the temptation to gamble with someone else\'s money for a free cut of the winnings. (The immediate-family exception waives proportionality but never the firm\'s consent.)',
    'Floe generated',
    true,
    'Tie the agent\'s slice of profit to the agent\'s slice of the capital. They must match.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10088008,
    'Career Skills',
    'Ethical Practices',
    'Selling around the firm',
    'An agent, off the books, helps a few clients invest in a private deal that is not on the broker-dealer\'s approved product list, and never tells the firm. The clients even make money. Under NASAA\'s Statement of Policy, how is this conduct best characterized?',
    'Selling away — a per se violation, because the agent transacted in securities outside the firm\'s knowledge and written approval',
    [
      [
        'Acceptable, because the clients profited and suffered no harm',
        'The violation is structural, not outcome-based; bypassing firm supervision is prohibited even when the investment happens to succeed.',
        'Profit does not launder the process. The wrong is evading oversight, which is dangerous regardless of how the deal turns out.',
      ],
      [
        'Churning, since the agent generated extra transactions for the clients',
        'Churning is excessive trading to generate commissions within an account; selling away is transacting outside the firm entirely.',
        'Churning happens inside the firm\'s view, too much. Selling away happens outside the firm\'s view at all.',
      ],
      [
        'Permissible private business, because off-duty personal deals are outside firm jurisdiction',
        'Effecting securities transactions for clients is never "off duty"; the firm must know about and approve them.',
        'There is no private-life carve-out for selling securities. If it is a securities transaction with clients, the firm must be in the loop.',
      ],
    ],
    'Lesson: "Selling away" is effecting securities transactions that the employing broker-dealer has not approved and does not know about. It is a per se violation even when clients profit, because the firm\'s supervisory net — suitability checks, recordkeeping, conflict screening — is the very thing the agent has bypassed. The enduring lesson: in regulated finance, process is protection. A good outcome from an unsupervised process is luck, not compliance, and the rule guards against the next time when luck runs out.',
    'Floe generated',
    true,
    'Focus on what the agent hid from the firm, not on whether the deal made money.',
    { challengeRating: 6 },
  ),
]
