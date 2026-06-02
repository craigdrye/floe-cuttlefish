import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const sieS0G23: Question[] = [
  makeSimpleQuestion(
    9040001,
    'Career Skills',
    'Products and Risks: Equities',
    "Rights vs Warrants",
    'A struggling industrial firm needs to raise debt capital, so it attaches an instrument letting bondholders buy its common stock at $60 (well above today\'s $48 market price) any time over the next seven years. Separately, the firm offers existing shareholders the chance to buy new shares pro rata at $40 over the next 30 days. Which instrument is the warrant, and how does it differ from the other?',
    'The seven-year, above-market sweetener attached to the bond is the warrant; rights are short-dated (about 45 days), issued pro rata to existing shareholders, and priced below current market',
    [
      ["The 30-day, below-market offer to shareholders is the warrant; the seven-year bond sweetener is the right", "This reverses the two instruments. Rights are the short-dated, below-market, pro-rata offers to existing holders; warrants are the long-dated, above-market sweeteners. Naming them backwards gets the cash flows and risks backwards too.", "Anchor on duration and pricing: short and below-market equals a right; long-dated and above-market equals a warrant."],
      ["Both are warrants because each lets the holder buy stock at a fixed price", "While both convey a fixed purchase price, the SIE distinguishes them by issuance and term: a right is short-dated and offered pro rata to current shareholders to protect against dilution, whereas a warrant is a long-dated sweetener typically attached to a debt offering.", "Ask who receives it and for how long, not just whether a fixed strike exists."],
      ["The bond sweetener is a right because rights are always attached to bonds as inducements", "Rights are not bond inducements; they are short-term subscription privileges distributed to existing shareholders, usually below market. The long-dated equity kicker attached to a bond to make it sell is the warrant.", "Reserve the word \"sweetener\" for warrants on debt, and reserve \"subscription, pro rata, below market\" for rights."],
    ],
    'Subscription rights are short-dated (typically up to 45 days), issued pro rata to existing shareholders so they can avoid dilution, and carry a subscription price below the current market price, so they have immediate intrinsic value. Warrants are long-dated (often 5+ years, sometimes perpetual), usually have an exercise price set above the market at issue, and are commonly attached to a bond or preferred offering as a sweetener; their value is largely time value. The discriminators are term, who receives them, and price relative to market.',
    'Floe generated',
    true,
    'Sort by duration and strike-versus-market: short and below market versus long and above market.',
    { challengeRating: 4 },
  ),
  makeSimpleQuestion(
    9040002,
    'Career Skills',
    'Products and Risks: Equities',
    "Cumulative Voting and Minority Shareholders",
    'A company is electing four directors and a shareholder owns 300 shares. Under cumulative voting, what is the most votes this shareholder can cast for a single board candidate, and why does this method favor minority holders compared with statutory voting?',
    '1,200 votes (300 shares times 4 open seats) all cast for one candidate, which lets small holders concentrate votes to win a seat',
    [
      ["300 votes for one candidate, because each share is one vote per election regardless of method", "This describes statutory voting, where votes cannot be pooled across seats. Under cumulative voting the shareholder receives shares times seats (300 x 4 = 1,200) and may load them all onto one candidate.", "Cumulative voting multiplies shares by open seats and lets you stack them; statutory caps you at your share count per seat."],
      ["1,200 votes, but they must be spread evenly at 300 per candidate across the four seats", "Mandatory even allocation is the statutory restriction, not cumulative. The whole point of cumulative voting is that the 1,200 votes can be concentrated however the holder wishes, including all on one nominee.", "If the votes must be split evenly, it is statutory; if they can be piled onto one name, it is cumulative."],
      ["1,500 votes, found by adding one to the seat count (300 x 5) as in the election-threshold formula", "The (seats + 1) figure belongs to the formula for the minimum shares needed to guarantee a seat, not to the total votes available. Total cumulative votes are simply shares times open seats: 300 x 4 = 1,200.", "Keep the two formulas separate: total votes use shares x seats; the shares-to-elect threshold uses the (seats + 1) divisor."],
    ],
    'Under cumulative voting, a shareholder gets one vote per share for each open board seat (shares x seats) and may distribute those votes any way, including all on one candidate. With 300 shares and 4 seats that is 1,200 votes. Statutory (straight) voting also gives one vote per share per seat but forbids pooling, so a holder can cast at most their share count for any single nominee. Because cumulative voting permits concentration, minority shareholders can band together to elect at least one director, which is why it is considered more favorable to small investors.',
    'Floe generated',
    true,
    'Total votes available is just shares times open seats; the difference is whether you may stack them onto one nominee.',
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9040003,
    'Career Skills',
    'Products and Risks: Options',
    "Covered Call Max Gain and Breakeven",
    'Noah buys 100 shares of QRS at $50 and simultaneously writes one QRS 55 call, collecting a $3 premium. Ignoring commissions, what are his maximum gain and his breakeven on this covered call?',
    'Maximum gain $800 [(55 - 50 + 3) x 100], with breakeven at $47 (stock cost minus premium received)',
    [
      ["Maximum gain $300 (the premium), with breakeven at $55 (the strike)", "This ignores the stock leg. The writer keeps the $3 premium AND captures the $5 of stock appreciation up to the $55 strike if assigned, so max gain is $8 x 100 = $800. Breakeven is the cost basis reduced by the premium, $47, not the strike.", "Add the appreciation up to the strike to the premium for max gain; subtract the premium from the stock cost for breakeven."],
      ["Maximum gain is unlimited because the investor still owns the stock", "Writing the call caps the upside. Above $55 the shares are called away at $55, so further appreciation is forfeited. The covered call trades unlimited upside for the premium, making max gain finite at $800.", "Remember the short call is a ceiling: gains stop at the strike plus the premium."],
      ["Maximum gain $500 (strike minus purchase price) x 100, with breakeven at $50", "This drops the premium from both figures. Max gain includes the $3 premium, giving $8 x 100 = $800, and breakeven is reduced by that premium to $47, not the original $50 cost.", "Fold the premium into both numbers: it lifts max gain and lowers breakeven."],
    ],
    'A covered call is long stock plus a short call on the same shares. Maximum gain occurs at or above the strike, when the stock is called away: it equals (strike - stock purchase price + premium) x 100, here (55 - 50 + 3) x 100 = $800. Breakeven is the stock cost basis reduced by the premium received: 50 - 3 = $47. The strategy generates income and provides limited downside cushion (the premium), but caps upside at the strike, which is the core trade-off versus simply holding the stock.',
    'Floe generated',
    true,
    'The premium does double duty: it adds to gain at the strike and lowers your breakeven; the short call is the ceiling on profit.',
    { challengeRating: 5 },
  ),
]
