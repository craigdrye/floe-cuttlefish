import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const amlComplianceS0G23: Question[] = [
  makeSimpleQuestion(
    8840000,
    'Career Skills',
    'Advanced Typologies and Emerging Risk',
    "FATF Travel Rule on VASPs",
    'Your firm operates a regulated virtual-asset exchange. A counterparty exchange sends you an inbound transfer of crypto worth about $4,000 on behalf of one of its customers, but the accompanying message contains a beneficiary name that does not match any account you hold and omits the required originator details. Under FATF Recommendation 16 (the Travel Rule), what is the most defensible next step?',
    'Apply your risk-based policy for missing or incomplete Travel Rule data: hold and request the required originator and beneficiary information from the counterparty VASP before releasing the funds, and document the decision',
    [
      ["Process the transfer normally, because crypto is pseudonymous so collecting counterparty identity data is impossible anyway", "The Travel Rule exists precisely because public-chain transfers are pseudonymous and traceable, not anonymous; it requires the originating VASP to transmit originator and beneficiary information to the counterparty. Treating the data as impossible to obtain ignores the obligation.", "Treat incomplete or absent Travel Rule data as a control trigger, not a reason to wave the transfer through."],
      ["Permanently block and freeze the funds, because any Travel Rule data gap is automatically a sanctions violation", "The Travel Rule is an information-transparency standard, not a sanctions-blocking regime; a missing originator field is a data-quality and risk issue, not a strict-liability sanctions hit absent an actual list match. Freezing on a data gap alone overstates the obligation.", "Reserve blocking for an actual sanctions nexus; for a Travel Rule data gap, request the missing information and apply risk-based handling."],
      ["Ignore the rule because the transfer is under the $10,000 CTR threshold", "The $10,000 figure is the U.S. currency-transaction-report threshold for cash, which is unrelated to the Travel Rule; FATF R.16 applies to qualifying virtual-asset transfers at or above roughly USD/EUR 1,000, so a ~$4,000 transfer is squarely in scope.", "Use the correct Travel Rule threshold (about USD/EUR 1,000), not the cash CTR threshold, when scoping VASP information duties."],
    ],
    'FATF Recommendation 16, the "Travel Rule," requires virtual-asset service providers (VASPs) to obtain, hold, and transmit required originator and beneficiary information when they send a virtual-asset transfer, and to obtain and hold that information when they receive one, generally for transfers at or above about USD/EUR 1,000. It is a transparency-and-traceability control, distinct from sanctions blocking and from the U.S. $10,000 cash CTR threshold; when required data is missing, the defensible response is risk-based (request, hold, or reject), not to assume crypto pseudonymity excuses compliance.',
    'Floe generated',
    true,
    'Ask what the Travel Rule actually requires a VASP to do with information, and whether a data gap is the same thing as a sanctions hit.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    8840001,
    'Career Skills',
    'Advanced Typologies and Emerging Risk',
    "Shelf company versus shell company",
    'During EDD you find a newly onboarded entity that was incorporated seven years ago but filed no tax returns, had no employees, and conducted no transactions until it was purchased by your customer three weeks ago, who immediately began routing large international wires through it. The customer markets the entity to its own counterparties as an "established business with a seven-year track record." Which characterization best captures the specific laundering risk here?',
    'It is a shelf company: a long-dormant pre-registered entity sold to manufacture an instant but false impression of operating history and longevity',
    [
      ["It is simply a shell company, and shell and shelf companies are the same thing", "A shell company is defined by having no meaningful operations or assets regardless of age; a shelf company is specifically one deliberately incorporated and left dormant so it acquires age before being sold. Conflating them misses the distinctive risk here, which is the fabricated seven-year track record.", "Name the aged-then-sold pattern as a shelf company, because the laundering hook is the false longevity, not just the absence of operations."],
      ["The seven-year incorporation age is reassuring and lowers the entity's risk rating", "Treating incorporation age as a proxy for legitimacy is exactly the misjudgment a shelf company is engineered to exploit; the entity had no activity until purchased weeks ago, so the age is hollow.", "Weight actual operating history and verified activity over bare incorporation age, which can be bought off the shelf."],
      ["It is a front company, because it is being used to disguise the source of illicit funds behind a real business", "A front company is an operating business with genuine (often cash-intensive) activity used to commingle and legitimize illicit proceeds; this entity has no real operations at all, only a purchased history, which is the hallmark of a shelf company, not a front.", "Distinguish a front company's real commercial cover from a shelf company's purchased-on-paper history when classifying the typology."],
    ],
    'A shell company has no meaningful operations or assets regardless of when it was formed; a shelf company is specifically incorporated and intentionally left dormant ("on the shelf") so that it accrues age, then sold to a buyer who wants the appearance of an established business with history. A front company, by contrast, has genuine operations used as cover to commingle illicit funds. The shelf-company red flag is precisely the mismatch between a long incorporation date and zero prior activity, paired with new owners who immediately push high-value flows through it while trading on a fabricated track record.',
    'Floe generated',
    true,
    'Focus on what the entity actually did for seven years versus what its incorporation date implies, and which of the three confusable company types that mismatch points to.',
    { challengeRating: 7 },
  ),
]
