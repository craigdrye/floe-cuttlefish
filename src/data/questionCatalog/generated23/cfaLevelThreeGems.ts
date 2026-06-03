import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const cfaLevelThreeGems: Question[] = [
  // ===== Behavioral Finance =====
  makeSimpleQuestion(
    10017000,
    'Career Skills',
    'Behavioral Finance',
    "Fix it or live with it",
    "A confident 34-year-old engineer keeps doubling down on the one tech stock he 'understands,' sure he can call its swings. Across the hall, a 78-year-old widow refuses to sell the bank shares her late husband bought, even though they dominate her portfolio. The CFA framework says you should treat these two clients in opposite ways. Why does the same advisor moderate one and accommodate the other?",
    "The engineer's overconfidence is a cognitive error you correct through education and process; the widow's attachment is a deep emotional bias you accommodate by shaping a plan she can actually live with",
    [
      [
        "You moderate the older client because she has the shorter horizon and less time to recover from a mistake, and you indulge the younger one because he can afford the risk",
        "The framework keys off the type of bias, not the client's age or horizon; reversing the prescription would push a grieving client into a sale she will fight and lecture a young investor who needs facts, not comfort.",
        "Ask what kind of bias each shows, not who has more years left.",
      ],
      [
        "You correct both, since every documented bias is a deviation from rational behavior that a fiduciary is obligated to eliminate",
        "Emotional biases spring from impulse and feeling, so head-on correction tends to fail and damage trust; the wiser move is to design around them rather than fight them.",
        "Some biases can be taught away; others must be lived with.",
      ],
      [
        "You accommodate both, because the client is always right and the advisor's job is to honor stated preferences",
        "Cognitive errors are exactly the case where you should intervene; quietly accommodating the engineer's illusion of control just funds an avoidable concentrated bet.",
        "Accommodation is for feelings, not for fixable reasoning mistakes.",
      ],
    ],
    "The L3 rule is deceptively simple: correct cognitive errors (faulty reasoning, fixable with information and process) and accommodate emotional biases (impulses you cannot argue away). The deeper point is that good advice is not about being right in theory; it is about building a plan the client will not abandon at the worst moment. A technically optimal portfolio the widow sabotages in a panic is worse than a slightly suboptimal one she keeps. Knowing which battles to fight is itself the skill.",
    "Floe generated",
    true,
    "Sort each client into 'faulty reasoning' versus 'raw feeling,' then apply the matching tool.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10017001,
    'Career Skills',
    'Behavioral Finance',
    "Why losses weigh more than gains",
    "You offer a client a coin flip: heads she wins $150, tails she loses $100. The expected value is clearly positive, yet she refuses, almost flinching at the question. She is not poor and not facing ruin from $100. A purely risk-averse model struggles to explain such a sharp 'no.' What concept explains her reaction better?",
    "Loss aversion: the pain of a $100 loss feels roughly twice as intense as the pleasure of an equivalent gain, so the bet feels bad even though its expected value is good",
    [
      [
        "Ordinary risk aversion, which already predicts that any rational person declines a 50/50 gamble regardless of the payoffs",
        "Risk aversion is about disliking uncertainty, but it cannot explain refusing a clearly favorable bet at small stakes; the asymmetry between how losses and gains feel is doing the real work here.",
        "Risk aversion dislikes variance; loss aversion specifically over-weights the downside.",
      ],
      [
        "The endowment effect, since she values the $100 she might lose more highly simply because she currently owns it",
        "The endowment effect is about over-pricing things you already possess in trade; here the $100 is a hypothetical stake in a wager, and the driver is the disproportionate sting of losing, not ownership.",
        "Nothing is being owned and given up here; it is the prospect of a loss that hurts.",
      ],
      [
        "Mental accounting, because she has placed the potential winnings and losses into separate psychological budgets",
        "Mental accounting is about segregating money into bins; it does not by itself explain why a fair-plus bet is rejected. The core mechanism is that the loss side of the ledger is felt about twice as heavily.",
        "The issue is not which bucket the money sits in but how much a loss stings versus a gain.",
      ],
    ],
    "Loss aversion (from prospect theory) is the finding that losses loom about twice as large as equivalent gains, which is distinct from classical risk aversion's mere dislike of uncertainty. The conceptual hook is that this single asymmetry quietly drives some of investing's most expensive habits: holding losers too long to avoid 'realizing' the pain, selling winners early to lock in the relief, and demanding implausible odds before accepting any downside. The market does not feel symmetric to the people in it, and pricing in that asymmetry is what separates a behavioral diagnosis from a textbook one.",
    "Floe generated",
    true,
    "A merely risk-averse person can still take a favorable bet; ask why this one stings so much.",
    { challengeRating: 6 },
  ),

  // ===== Risk Management and Derivatives Overlays =====
  makeSimpleQuestion(
    10017002,
    'Career Skills',
    'Risk Management and Derivatives Overlays',
    "The yield you thought you were hedging away",
    "A US manager buys a high-yielding Brazilian government bond paying 11% and, nervous about the real, fully hedges the currency back to dollars with a forward. A colleague says, 'Great, now you keep the 11% yield with no currency risk.' Roughly what hedged dollar return should the manager actually expect, and why?",
    "Close to the US-dollar yield on a comparable bond, because covered interest parity makes the forward cost almost exactly cancel the extra Brazilian yield, leaving roughly the domestic rate plus the bond's spread",
    [
      [
        "The full 11%, since hedging only removes exchange-rate risk and leaves the coupon untouched",
        "The forward to sell a high-yield currency trades at a discount precisely equal to the interest-rate gap; that forward discount is a cost that eats almost exactly the yield advantage you were chasing.",
        "The forward price already prices in the rate gap; hedging it pays that gap away.",
      ],
      [
        "About 11% minus a small bid-ask transaction cost on the forward, with the rate differential largely irrelevant",
        "The dominant cost is not trading friction but the forward points themselves, which embed the entire domestic-minus-foreign rate differential; that is the structural reason the carry disappears.",
        "It is the rate differential baked into the forward, not the dealer's spread, that erases the yield.",
      ],
      [
        "More than 11%, because hedging earns positive roll yield when you sell a high-interest currency forward",
        "Selling a high-yielding currency forward generally costs you (negative roll), not the reverse; covered interest parity ensures you cannot pocket a high foreign yield and the rate gap too.",
        "Selling the high-yield currency forward is the side that pays away the differential, not the side that earns it.",
      ],
    ],
    "Covered interest parity is the no-arbitrage law that the forward exchange rate already reflects the interest-rate differential, so a fully hedged foreign bond return collapses to roughly the domestic short rate plus the bond's credit/term spread. The deep and counterintuitive lesson: there is no free lunch in reaching for a fat foreign coupon and then hedging the currency, because the very forward that protects you charges you the yield gap you were after. To keep the carry, you must keep the currency risk; hedging away the risk hedges away the reward.",
    "Floe generated",
    true,
    "Think about what the forward to sell a high-interest currency costs, then net it against the coupon.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10017003,
    'Career Skills',
    'Risk Management and Derivatives Overlays',
    "The number that is not the worst case",
    "A risk report states the portfolio's one-day 99% Value at Risk is $4m. In the next quarter the fund loses $9m in a single day, and the board demands to know how the model 'failed.' Did a $9m loss actually break a $4m VaR figure?",
    "No: a 99% one-day VaR of $4m only says losses should exceed $4m on about 1 day in 100, and says nothing about how large those exceedances can be, so a $9m loss is exactly the kind of tail event VaR leaves uncovered",
    [
      [
        "Yes, because VaR is the maximum loss the portfolio should sustain at that confidence level, and any larger loss is a model failure",
        "VaR is a quantile, a threshold that is breached with known frequency, not a ceiling; treating it as a worst case is the classic misreading that makes the tail look like a malfunction when it is built into the definition.",
        "VaR marks where the tail begins, not where losses stop.",
      ],
      [
        "Yes, because at 99% confidence a loss bigger than VaR should occur only once in a hundred years, so a quarterly breach is far too soon",
        "The horizon is one day, so exceedances are expected on roughly 1 trading day in 100, several times a year, not once a century; the confidence level is per period, not a calendar lifetime.",
        "1% of one-day periods is a few days a year, not one day per century.",
      ],
      [
        "No, but only because the report should have used a 99.9% confidence level to be meaningful at all",
        "A 99% VaR is a perfectly standard and meaningful figure; the issue is interpreting any VaR as a cap, not the particular confidence level chosen. Raising it would not change the conceptual error.",
        "The flaw is reading VaR as a maximum, regardless of the confidence level.",
      ],
    ],
    "VaR answers 'what loss will I exceed with X% probability over this horizon?' It is a quantile of the loss distribution, not a maximum, and it is deliberately silent about the size of losses beyond the threshold. The conceptual hook is that the single most quoted risk number tells you where the tail starts but nothing about how bad the tail gets; that is why expected shortfall (CVaR), the average loss given a breach, exists. A risk culture that treats VaR as a promise of safety has mistaken the edge of the cliff for a guardrail.",
    "Floe generated",
    true,
    "Ask whether VaR describes how often you cross a line or how far you can fall past it.",
    { challengeRating: 6 },
  ),

  // ===== Performance Measurement, Attribution, and GIPS =====
  makeSimpleQuestion(
    10017004,
    'Career Skills',
    'Performance Measurement, Attribution, and GIPS',
    "Whose return is it anyway",
    "A manager runs a fund brilliantly all year. A client pours in a large deposit two weeks before a sharp market drop, so his personal account ends the year down. The manager's time-weighted return is +12%; the client's money-weighted return is -3%. The client is furious. Which figure should be used to judge the manager's skill, and why are both numbers honest?",
    "The +12% time-weighted return judges the manager, because it strips out the timing of the client's deposits, which the manager did not control; the -3% money-weighted return honestly reflects the client's actual experience given when he put cash in",
    [
      [
        "The -3% money-weighted return, because the only fair measure of a manager is the dollars the client actually ended up with",
        "Money-weighted return is driven by deposit and withdrawal timing, which the client chose; blaming the manager for the client's ill-timed contribution penalizes skill the manager did demonstrate.",
        "MWR moves with cash-flow timing the client controls, so it is not a clean read on the manager.",
      ],
      [
        "The +12% time-weighted return, because it is always the larger number and therefore the one a manager is entitled to advertise",
        "TWR is the right manager metric for a principled reason (it neutralizes external cash flows), not because it flatters; in a year of badly timed withdrawals TWR could just as easily be the lower figure.",
        "Pick TWR for what it removes, not because it happens to look better.",
      ],
      [
        "Neither, because the two returns disagree, so one of them must be computed incorrectly",
        "Both are correct and answer different questions; disagreement is expected whenever cash flows are large and badly timed, and is in fact the whole reason two distinct measures exist.",
        "The gap is information, not error: it is exactly the effect of cash-flow timing.",
      ],
    ],
    "Time-weighted return removes the effect of when money enters and leaves, isolating the manager's investment decisions; money-weighted return (an IRR) weights each period by the capital present, capturing the investor's lived result. The deep idea is that 'performance' is not one number but two questions: how good were the decisions, and how good was the experience? GIPS requires TWR for manager comparison precisely because rewarding or punishing a manager for a client's deposit timing would be unfair, yet the client is right that his own outcome is the money-weighted one. Both are true; they simply answer different things.",
    "Floe generated",
    true,
    "Separate 'how well were the decisions made' from 'when did the cash arrive.'",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10017005,
    'Career Skills',
    'Performance Measurement, Attribution, and GIPS',
    "Three good years prove almost nothing",
    "Two managers both report an information ratio of 0.5. Manager A has a 3-year track record; Manager B has a 25-year record. An allocator uses the rough rule that the t-statistic of skill is about the information ratio times the square root of the number of years. What does this reveal about trusting the two identical-looking 0.5 figures?",
    "Manager B's record is statistically convincing while Manager A's is not: 0.5 times the square root of 25 is 2.5 (significant), but 0.5 times the square root of 3 is under 0.9, well short of any reasonable confidence threshold",
    [
      [
        "The two are equally credible, because an information ratio of 0.5 reflects the same level of skill no matter how long it has been observed",
        "An IR measures the size of the active-return-to-active-risk signal, but its reliability depends on how long you have watched; a short sample of even a true 0.5 is easily produced by luck.",
        "Same ratio, very different sample size, so very different statistical confidence.",
      ],
      [
        "Manager A is more impressive, because achieving a 0.5 information ratio so quickly demonstrates faster, sharper skill than doing it slowly",
        "Speed is not the variable; a high ratio over a tiny sample is the least trustworthy kind, because short windows are where luck most easily masquerades as skill.",
        "A brief record makes a ratio harder to believe, not more impressive.",
      ],
      [
        "Neither record matters, because the information ratio already embeds track length through its active-risk denominator",
        "The denominator is the volatility of active return, not the length of the record; the number of observations enters separately, through the square-root-of-years term in the t-statistic.",
        "Active risk is volatility per period; the count of periods is a separate axis.",
      ],
    ],
    "The information ratio measures active return per unit of active risk, but a ratio is only as believable as the sample behind it: t-stat is approximately IR times the square root of years, so the same 0.5 is noise over 3 years and strong evidence over 25. The conceptual hook is that skill and luck look identical in short windows, and our instinct to be impressed by a recent hot streak is precisely backwards; statistical confidence in a manager grows painfully slowly with time. The most dangerous track record is the short, shiny one.",
    "Floe generated",
    true,
    "Multiply the ratio by the square root of the years and ask whether the result clears a significance bar.",
    { challengeRating: 6 },
  ),
]
