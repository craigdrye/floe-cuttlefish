// Chapter 6 — Mental Math, Estimation, and Market Numeracy.
//
// These 12 questions fill the underweight Chapter 6 slot in the Quant Interview
// Core syllabus. They are EXECUTION questions: quick, terse correct answers,
// with distractors built from the most common mental-math slips (off-by-magnitude,
// dropped factor, forgot to halve).
//
// Sub-topic clusters (4 x 3):
//   * Estimation & Order of Magnitude
//   * Fast Arithmetic Tricks
//   * Market Numeracy
//   * Approximation Rules of Thumb

import type { Question } from './types'
import { makeQuestionBank } from './base'

export const ch6MentalMathQuestions: Question[] = makeQuestionBank('Quant Finance', [
  // -------------------------------------------------------------------------
  // Estimation & Order of Magnitude (19900-19902)
  // -------------------------------------------------------------------------
  {
    id: 19900,
    chapter: 'Mental Math and Estimation',
    title: 'NYSE Trades Per Day',
    prompt: 'Roughly how many trades execute on the NYSE in a single trading day in modern markets? Pick the right order of magnitude.',
    correct: 'About 10^7 to 10^8 trades (tens of millions)',
    wrong: [
      ['About 10^4 trades (tens of thousands)', 'That undercounts by three orders of magnitude — high-frequency flow alone exceeds this in minutes.', 'Anchor to the total US equity volume (billions of shares) and divide by typical trade size (a few hundred shares).'],
      ['About 10^10 trades (tens of billions)', 'That overshoots — tens of billions of trades a day would imply more than a million trades every second.', 'Sanity-check by dividing your guess by the 23,400 seconds in a trading day.'],
      ['About 10^5 trades (hundreds of thousands)', 'Off by two orders of magnitude — even a single large-cap stock posts more trades than this in a day.', 'Order-of-magnitude estimates live or die on the exponent, not the leading digit.'],
    ],
    lesson: "Quick anchor: NYSE volume is roughly 1-2 billion shares a day, and the average trade is a few hundred shares, so trade count is around (1-2e9)/300 ~ 3-7 million on NYSE proper. Across all US venues it's about 25-50 million, which is the figure most quants quote. The point of the estimate is the EXPONENT, not the leading digit — 10^7 to 10^8 is the defensible answer.\n\nGeneral technique for order-of-magnitude questions: pick two quantities you already know (total shares, trade size), divide, and round to the nearest power of 10. Don't argue about the leading digit; argue about the exponent.",
  },
  {
    id: 19901,
    chapter: 'Mental Math and Estimation',
    title: 'S&P 500 Market Cap',
    prompt: 'Estimate the total market capitalization of the S&P 500 in recent years. Pick the right order of magnitude.',
    correct: 'About $10^13 (tens of trillions of dollars)',
    wrong: [
      ['About $10^11 (hundreds of billions)', 'That is closer to a single mega-cap company, not the whole index.', 'Apple alone is roughly $3T; 500 companies will be two orders of magnitude larger.'],
      ['About $10^15 (a quadrillion dollars)', 'That overshoots — global GDP is around $100T (10^14).', 'Anchor on world GDP first; the S&P 500 cannot exceed it by a factor of 10.'],
      ['About $10^9 (billions)', 'A single mid-cap stock can be worth billions; the whole index is four orders of magnitude larger.', 'Multiply average company size by 500 before picking an exponent.'],
    ],
    lesson: 'Anchor: as of 2024-25 the S&P 500 has aggregate market cap around $50 trillion. That puts it firmly in the 10^13 bucket. The mega-cap tech names (Apple, Microsoft, Nvidia) contribute several trillion each, and the median S&P 500 constituent is around $30B.\n\nWhy this estimate matters in practice: many quant questions (Sharpe scaling, sector rotation, index option pricing) require you to know rough total notional sizes within an order of magnitude. Memorize the ladder: US GDP ~$27T, S&P 500 market cap ~$50T, global equity market ~$100T, global bond market ~$140T.',
  },
  {
    id: 19902,
    chapter: 'Mental Math and Estimation',
    title: 'Seconds in a Year',
    prompt: 'Approximately how many seconds are in a year? Use the rule of thumb that physicists carry around.',
    correct: 'Approximately pi x 10^7 seconds (about 31.4 million)',
    wrong: [
      ['About 10^6 seconds (a million)', 'That is closer to 11.5 days, not a year.', 'Multiply 365 days x 24 hours x 3600 seconds; the answer must be much larger than a million.'],
      ['About 10^9 seconds (a billion)', 'That is closer to 32 years.', 'A billion seconds is roughly a human generation, not one year.'],
      ['Approximately 8.6 x 10^4 seconds', 'That is the number of seconds in a DAY, not a year.', 'Multiply by 365 to get to a year.'],
    ],
    lesson: "The classic physicist's rule: a year is approximately pi x 10^7 seconds. Exactly: 365.25 x 24 x 3600 = 31,557,600 seconds ~ 3.156 x 10^7, which is suspiciously close to pi x 10^7 = 31,415,927. The coincidence is good to ~0.5% and is one of the most useful mental constants in physics, finance, and engineering.\n\nUse cases: annualizing Sharpe (multiply per-second Sharpe by sqrt(pi x 10^7)), converting per-second interest rates to annual rates, and quick continuous-time scaling. It's also a great sanity check: if your answer to 'how many seconds in a year' starts with anything other than 3 followed by 10^7, you've dropped a factor.",
  },

  // -------------------------------------------------------------------------
  // Fast Arithmetic Tricks (19903-19905)
  // -------------------------------------------------------------------------
  {
    id: 19903,
    chapter: 'Mental Math and Estimation',
    title: '27 Times 33',
    prompt: 'Compute 27 x 33 in your head in under five seconds.',
    correct: '891',
    wrong: [
      ['900', 'Close, but 27 x 33 is not 30 x 30 — it is 30^2 minus a small correction.', 'Use (30-3)(30+3) = 900 - 9 = 891. Do not drop the 9.'],
      ['881', 'Off by 10 — likely a subtraction slip after spotting the symmetry.', 'Square the deviation (3^2 = 9), not (3 x 3 = 9) plus an extra ten.'],
      ['819', 'Looks like a digit transposition of 891.', 'Recompute: 900 - 9 = 891.'],
    ],
    lesson: 'This is the difference-of-squares technique: (a-b)(a+b) = a^2 - b^2. Whenever you spot two numbers symmetric around a round value, use it.\n\n27 x 33: midpoint is 30, deviation is 3, so the product is 30^2 - 3^2 = 900 - 9 = 891. More examples: 47 x 53 = 50^2 - 3^2 = 2500 - 9 = 2491. 98 x 102 = 100^2 - 2^2 = 9996. Interviewers love testing this because it separates candidates who do arithmetic from candidates who recognize patterns.',
  },
  {
    id: 19904,
    chapter: 'Mental Math and Estimation',
    title: 'Log Base 2 of 1000',
    prompt: 'Estimate log base 2 of 1000 to the nearest integer. No calculator.',
    correct: 'About 10',
    wrong: [
      ['About 3', 'That is log base 10 of 1000, not log base 2.', 'Note the base: log_2 grows much faster than log_10 in count of doublings.'],
      ['About 100', 'That is way too large — 2^100 is astronomical.', 'Use the anchor 2^10 = 1024 ~ 1000.'],
      ['About 7', 'Closer to log_2(128); you stopped doubling too early.', 'Memorize 2^10 ~ 10^3 and use it as the conversion anchor.'],
    ],
    lesson: 'Use the anchor 2^10 = 1024, which is roughly 10^3. So log_2(1000) ~ log_2(1024) = 10. The exact value is 9.966, so 10 is correct to less than 0.4%.\n\nThis trick generalizes: log_2(N) ~ 10 x log_10(N) / 3. Examples: log_2(1,000,000) ~ 20, log_2(1,000,000,000) ~ 30. It also tells you that 10 bits store about 1,000 values, 20 bits store about 1 million, 30 bits about 1 billion — the foundation of every back-of-the-envelope memory/hash sizing question.',
  },
  {
    id: 19905,
    chapter: 'Mental Math and Estimation',
    title: '1.05 to the Tenth',
    prompt: 'Estimate 1.05^10 (the value of $1 compounded at 5% for 10 years) without computing it explicitly. Round to one decimal place.',
    correct: 'About 1.6',
    wrong: [
      ['About 1.5', 'That uses the linear approximation 1 + 10 x 0.05 = 1.5, which ignores compounding.', 'For small rates over many periods, you need the exponential, not the linear, approximation.'],
      ['About 2.0', 'Closer to a 7% rate compounded 10 years (Rule of 72: 72/7 ~ 10).', 'Use ln(1.05) ~ 0.05 carefully; do not round 0.05 up to 0.07.'],
      ['About 5.0', 'You added a zero — likely treated 1.05^10 as 10 x 0.5.', 'Compound growth is exponential, not multiplicative across periods.'],
    ],
    lesson: 'For small r, ln(1 + r) ~ r. So ln(1.05^10) = 10 x ln(1.05) ~ 10 x 0.05 = 0.5. Then 1.05^10 ~ e^0.5 ~ 1.65. Actual value: 1.6289. So "about 1.6" is the right one-decimal answer.\n\nMemorize these compounding anchors: e^0.5 ~ 1.65, e^1 ~ 2.72, e^0.1 ~ 1.105. With them you can mentally compound any rate-over-period combination in seconds. Combined with the Rule of 72 (doubling time ~ 72/rate%), you have the full toolkit for most interview compounding questions.',
  },

  // -------------------------------------------------------------------------
  // Market Numeracy (19906-19908)
  // -------------------------------------------------------------------------
  {
    id: 19906,
    chapter: 'Mental Math and Estimation',
    title: 'Bid-Ask Spread in Basis Points',
    prompt: 'A stock has a bid of $50.00 and an ask of $50.05. What is the bid-ask spread expressed in basis points?',
    correct: '10 basis points',
    wrong: [
      ['5 basis points', 'You divided the cents by the price but forgot that 1% = 100 bps, not 50.', '1 bp = 0.01%, so 0.10% = 10 bps.'],
      ['0.10 basis points', 'You computed the percent (0.10%) and forgot to convert to bps.', 'Multiply percent by 100 to get bps.'],
      ['100 basis points', 'You computed bps off the cents (5/0.05) without dividing by the price.', 'Spread in bps = (spread / mid) x 10,000.'],
    ],
    lesson: 'Bid-ask spread in bps = (ask - bid) / mid * 10,000. Here: spread = $0.05, mid ~ $50, so 0.05 / 50 = 0.001 = 0.1% = 10 bps.\n\nMental shortcut for cents-on-a-stock: at a $50 stock, 1 cent ~ 2 bps; at a $100 stock, 1 cent = 1 bp. Memorize this conversion. Tight ETFs trade at 1-2 bps; large-cap equities at 5-10 bps; small caps at 50-200 bps. Knowing the bps cost of a spread is the difference between a viable strategy and a money pit.',
  },
  {
    id: 19907,
    chapter: 'Mental Math and Estimation',
    title: 'Friction in Dollars',
    prompt: 'You trade $10M notional at a round-trip transaction cost of 5 basis points. What is your friction in dollars?',
    correct: '$5,000',
    wrong: [
      ['$500', 'You computed bps as 0.01% instead of 0.01% per bp; 5 bps = 0.05%.', '5 bps x $10M = 5 x 10^-4 x 10^7 = $5,000.'],
      ['$50,000', 'You multiplied as if 5 bps = 0.5%.', '5 bps = 0.05% = 5 / 10,000.'],
      ['$5', 'Off by three orders of magnitude — likely confused with cents.', '$10M x 0.0005 = $5,000.'],
    ],
    lesson: 'Friction in dollars = notional x bps x 10^-4. Here: $10,000,000 x 5 x 0.0001 = $5,000.\n\nThe mental shortcut: 1 bp on $10M is $1,000. So 5 bps is $5,000. Memorize this anchor — it lets you instantly translate cost discussions ("we save 2 bps") into dollars ("$2,000 per $10M traded"). For a strategy that turns over $1B notional per month at 5 bps friction, that is $500K of cost per month — every bp matters.',
  },
  {
    id: 19908,
    chapter: 'Mental Math and Estimation',
    title: 'Sharpe Ratio Intuition',
    prompt: 'A strategy returns 8% per year with an annualized volatility of 4%. What is its Sharpe ratio (assume zero risk-free rate)?',
    correct: 'About 2.0',
    wrong: [
      ['About 0.5', 'You inverted the ratio — Sharpe is return divided by vol, not vol over return.', 'Higher return with lower vol is a BETTER Sharpe, not worse.'],
      ['About 4', 'You forgot the units cancel — 8%/4% = 2, not 2 x something.', 'Sharpe is dimensionless once both terms are annualized.'],
      ['About 0.08', 'You divided the return decimal (0.08) by the vol percent (4) without aligning units.', 'Keep both in the same units before dividing.'],
    ],
    lesson: 'Sharpe = (return - risk-free) / volatility. With rf = 0: Sharpe = 8% / 4% = 2.0. A Sharpe of 2 is excellent; most equity long-only funds run around 0.5-0.8, multi-strategy hedge funds aspire to 1.0-1.5, and Renaissance-tier shops claim 2-3 net of fees.\n\nRules of thumb for Sharpe interpretation: < 0.5 = mediocre, 0.5-1.0 = decent, 1.0-1.5 = good, 1.5-2.0 = excellent, > 2.0 = either world-class or you have a data error. Always sanity check by asking: is the volatility annualized? If it is daily vol of 4%, that annualizes to ~63% (multiply by sqrt(252)), giving Sharpe ~ 0.13. The Sharpe answer depends entirely on the time horizon of the inputs.',
  },

  // -------------------------------------------------------------------------
  // Approximation Rules of Thumb (19909-19911)
  // -------------------------------------------------------------------------
  {
    id: 19909,
    chapter: 'Mental Math and Estimation',
    title: 'ATM Call Approximation',
    prompt: 'A stock trades at $100 with annualized volatility 20%. What is the rough price of an ATM call expiring in 1 year, using the standard mental-math approximation?',
    correct: 'About $8',
    wrong: [
      ['About $20', 'You used the volatility directly as a price without scaling by 0.4 and S.', 'The approximation C ~ 0.4 x S x sigma x sqrt(T) has a 0.4 factor that comes from 1/sqrt(2*pi).'],
      ['About $4', 'You forgot a factor of 2 — likely dropped one S or used 0.2 instead of 0.4.', 'Recompute: 0.4 x 100 x 0.2 x 1 = 8.'],
      ['About $40', 'Off by 5x — probably used the percentage 20 instead of the decimal 0.2.', 'Always convert sigma to decimal form before plugging in.'],
    ],
    lesson: 'The ATM call approximation: C ~ 0.4 x S x sigma x sqrt(T). The 0.4 comes from 1/sqrt(2*pi) ~ 0.3989 — the value of the standard normal density at zero, multiplied through the Black-Scholes ATM formula in the small-vol limit.\n\nHere: 0.4 x 100 x 0.20 x sqrt(1) = $8. Exact Black-Scholes (r=0): about $7.97. The approximation is accurate to ~1% for ATM options when sigma x sqrt(T) < 0.3.\n\nUses on the desk: instant sanity check on ATM straddle prices (2C ~ 0.8 x S x sigma x sqrt(T)), back-of-envelope vol surface checks, and quick PnL estimation. Memorize the 0.4 factor — it shows up constantly.',
  },
  {
    id: 19910,
    chapter: 'Mental Math and Estimation',
    title: 'Rule of 72',
    prompt: 'Using the Rule of 72, approximately how many years does it take money to double at 6% annual compounding?',
    correct: '12 years',
    wrong: [
      ['6 years', 'That is just the rate as years — you forgot to divide 72 by it.', 'Rule of 72: doubling time ~ 72 / rate (in percent).'],
      ['72 years', 'You forgot to divide — that is the constant, not the answer.', '72 / 6 = 12.'],
      ['18 years', 'Closer to a 4% rate; recompute 72 / 6.', 'Simple division: 72 / 6 = 12.'],
    ],
    lesson: "Rule of 72: doubling time (years) ~ 72 / rate (percent). At 6%: 72 / 6 = 12 years. Exact value: ln(2)/ln(1.06) = 11.90 years. The error is under 1%.\n\nWhy 72 and not ln(2) x 100 = 69.3? Because 72 has clean divisors (1, 2, 3, 4, 6, 8, 9, 12) — the slight inaccuracy is worth it for the mental-math win. Use 70 for sub-5% rates (more accurate), 72 for 5-10% rates, and 76 for rates above 15%.\n\nApplications: inflation halving purchasing power (at 3% inflation, money halves in real terms every 24 years), portfolio doubling, compound interest, even biological growth rates. One of the most-used estimation tools in all of finance.",
  },
  {
    id: 19911,
    chapter: 'Mental Math and Estimation',
    title: 'Sign of Convexity',
    prompt: 'For a standard fixed-rate bond, the price change for a yield change of delta-y is approximately -D x delta-y + (1/2) x C x (delta-y)^2, where D is duration and C is convexity. What is the sign of the convexity term?',
    correct: 'Positive — convexity is always beneficial to the bondholder',
    wrong: [
      ['Negative — it amplifies losses', 'That is the wrong intuition; the convexity term is positive because price is a convex function of yield.', 'Plot bond price vs yield: it curves UPWARD (convex), so the second-derivative term is positive.'],
      ['Zero — it cancels out', 'Convexity is a real, nonzero correction that becomes important for large yield moves.', 'It is the half-times-second-derivative term in a Taylor expansion of price around yield.'],
      ['Depends on whether yields rise or fall', 'No — the term is (delta-y)^2, which is always positive regardless of direction.', 'Squaring kills the sign of delta-y; the coefficient C is itself positive.'],
    ],
    lesson: "The convexity term is ALWAYS positive for a standard fixed-rate bond. Reason: bond price as a function of yield is a convex (curving upward) function — the second derivative d^2 P / dy^2 is positive, and so is convexity C = (1/P) x d^2 P / dy^2.\n\nIntuition: the linear duration term -D x delta-y underestimates the price when yields fall (you actually gain more) and overestimates the price loss when yields rise (you actually lose less). Either way, the convexity correction +(1/2) x C x (delta-y)^2 adds to the bondholder's favor.\n\nThis is why traders pay up for convexity: long-duration bonds, MBS with negative convexity get penalized, and a barbell strategy (long very-short and very-long maturities) has more convexity than a bullet strategy (concentrated in the middle) of equal duration. The Taylor expansion P/P ~ -D x delta-y + (1/2) x C x (delta-y)^2 is the workhorse approximation for fixed income risk.",
  },
])

export const CH6_MENTAL_MATH_SUB_TOPICS: Record<number, string> = {
  19900: 'Estimation & Order of Magnitude',
  19901: 'Estimation & Order of Magnitude',
  19902: 'Estimation & Order of Magnitude',
  19903: 'Fast Arithmetic Tricks',
  19904: 'Fast Arithmetic Tricks',
  19905: 'Fast Arithmetic Tricks',
  19906: 'Market Numeracy',
  19907: 'Market Numeracy',
  19908: 'Market Numeracy',
  19909: 'Approximation Rules of Thumb',
  19910: 'Approximation Rules of Thumb',
  19911: 'Approximation Rules of Thumb',
}

export const CH6_MENTAL_MATH_MENTOR_HINTS: Record<number, string> = {
  19900: 'Anchor: total US share volume is in billions per day, and average trade size is a few hundred shares. Divide and pick the exponent.',
  19901: 'Anchor on what you know: US GDP ~$27T, and the S&P 500 is somewhat bigger than US GDP. Pick the exponent first, not the leading digit.',
  19902: 'Use the physicist anchor: pi x 10^7 is suspiciously close to 365.25 x 24 x 3600 — verify by computing one step at a time.',
  19903: 'Notice the symmetry around 30. Apply (a-b)(a+b) = a^2 - b^2 and do NOT drop the small square term.',
  19904: 'Memorize 2^10 = 1024 ~ 10^3. Then log_2(1000) is one step away.',
  19905: 'Use the small-r approximation ln(1+r) ~ r, then exponentiate. The linear approximation 1 + n*r systematically undershoots.',
  19906: 'Spread in bps = (spread / mid) x 10,000. Convert through percent if you must: 0.1% = 10 bps.',
  19907: '1 bp = 10^-4. Notional x bps x 10^-4 gives dollar friction. Sanity check: 1 bp on $10M is $1K.',
  19908: 'Sharpe = excess return / volatility. Make sure both are annualized AND in the same units (both decimals or both percents).',
  19909: 'The ATM call is approximately 0.4 x S x sigma x sqrt(T). The 0.4 comes from 1/sqrt(2*pi) — keep sigma in decimal form.',
  19910: 'Rule of 72: divide 72 by the percentage rate. The arithmetic is one step; the trap is forgetting to do the division.',
  19911: 'A bond price plotted against yield curves upward. The second-derivative (convexity) term in the Taylor expansion is positive, and (delta-y)^2 is always positive too.',
}
