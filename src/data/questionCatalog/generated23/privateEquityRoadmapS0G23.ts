import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const privateEquityRoadmapS0G23: Question[] = [
  makeSimpleQuestion(
    9620001,
    'Career Skills',
    'IC Memo, Deal Process, and Exit',
    "Allocating signing-to-close financing risk",
    "Your fund has signed an SPA to buy a $600M distribution business, with closing four weeks out and the term loan and bond syndication still to be marketed. The seller's counsel insisted the deal carry no debt 'funding condition' to your obligation to close, backed by a reverse termination fee. At IC, a partner asks who actually bears the risk that the debt does not fund on time and what the fund is exposed to. What is the most accurate answer?",
    "Under certain-funds / SunGard-style terms the sponsor bears the funding risk: if committed debt does not fund and no narrow Market or Lender MAC applies, the fund must still close (or pay the reverse termination fee), so its exposure is capped at that fee rather than left open",
    [
      [
        "The lenders bear it, because once they sign commitment letters they are legally bound to fund regardless of conditions",
        "Commitment letters carry conditions precedent; the SunGard structure narrows them to documentary items and a tightly defined Market/Lender MAC, but it shifts risk away from the lenders toward the sponsor, not onto the lenders unconditionally. The fund, not the banks, is the party the seller can pursue.",
        "Read who is left holding the gap: the equity sponsor backstops the close via the reverse termination fee, which is exactly why certain-funds terms exist.",
      ],
      [
        "The seller bears it, because if financing fails the buyer simply walks away under the financing-out and owes nothing",
        "A genuine financing-out (walk-free if debt fails) is the old pre-2005 norm that sellers in competitive processes now refuse. Saying no funding condition means the buyer has no walk-away right precisely on that risk, so the seller did not retain it.",
        "Notice the seller removed the funding condition on purpose; the reverse termination fee is the seller's remedy, so the buyer carries the exposure.",
      ],
      [
        "No one bears real risk, because the reverse termination fee is just a small drafting formality that is rarely triggered or paid",
        "The RTF is a real, payable obligation, typically about 1-3% of deal value (financing-failure fees are usually the lower tier; fees for other buyer breaches run higher, often ~4% or more), and on a $600M deal that is meaningful fund capital lost for a deal that never closed. Treating it as a formality understates a genuine downside the IC should weigh.",
        "Quantify the fee against deal size and ask whether the syndication timeline is realistic; the exposure is concrete equity at risk, not boilerplate.",
      ],
    ],
    "Since the 2005 SunGard transaction, competitive sell-side processes routinely strip the debt 'funding condition' from the buyer's obligation to close, narrowing financing conditionality to documentary items and a tightly defined Market or Lender MAC. The practical effect is that the equity sponsor backstops the financing: if the debt does not fund, the fund must still close or pay a reverse termination fee (commonly around 1-3% of deal value). So the gap risk between signing and closing sits with the sponsor, and the IC should treat the RTF as real equity at risk, not a formality.",
    'Floe generated',
    true,
    "Ask who is left holding the obligation when committed debt fails to fund, and what the seller's remedy against that party is.",
    { challengeRating: 7 },
  ),
]
