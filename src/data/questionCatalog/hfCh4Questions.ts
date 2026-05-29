import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// HEDGE FUNDS — Chapter 4: Portfolio Review and Performance Attribution
// ----------------------------------------------------------------------------
// 42 questions (IDs 4400300–4400341) covering the monthly portfolio review
// ritual at a long/short equity shop — the same conversation a PM has with
// the CIO when she opens the book, walks the names, and explains what the
// month's P&L actually says about her process.
//
// Voice: matches jargonBusters.ts and the existing capstone canonical banks.
// Bespoke whyWrong rationales — no boilerplate. Sophisticated PM and
// risk-manager language; the learner should feel like an analyst sitting in
// on Monday morning portfolio review, not a textbook reader.
//
// Difficulty mix: 12 at 3, 21 at 4, 9 at 5.
// Coverage spans top-down position sizing, VaR and stress testing, factor
// attribution, style drift, Brinson selection vs allocation, alpha
// decomposition, drawdown analytics, Sharpe/Sortino/IR, crowding metrics,
// position-level P&L attribution, monthly review rituals, liquidity scoring,
// and pair-trade attribution.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe HF Ch4 canonical bank'

function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][],
  lesson: string,
): Question {
  return makeSimpleQuestion(
    id,
    topic,
    chapter,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
  )
}

const CHAPTER = 'Portfolio Review and Performance Attribution'

export const HF_CH4_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Portfolio construction and sizing (4400300–4400304)
  4400300: 3,
  4400301: 4,
  4400302: 4,
  4400303: 5,
  4400304: 3,

  // Risk metrics — VaR and stress (4400305–4400310)
  4400305: 3,
  4400306: 4,
  4400307: 4,
  4400308: 4,
  4400309: 5,
  4400310: 3,

  // Factor attribution (4400311–4400315)
  4400311: 3,
  4400312: 4,
  4400313: 5,
  4400314: 4,
  4400315: 3,

  // Style drift (4400316–4400318)
  4400316: 4,
  4400317: 4,
  4400318: 5,

  // Brinson / performance attribution (4400319–4400322)
  4400319: 3,
  4400320: 4,
  4400321: 4,
  4400322: 5,

  // Alpha decomposition (4400323–4400325)
  4400323: 4,
  4400324: 5,
  4400325: 4,

  // Drawdown analytics (4400326–4400328)
  4400326: 3,
  4400327: 4,
  4400328: 4,

  // Ratios: Sharpe / Sortino / IR (4400329–4400331)
  4400329: 3,
  4400330: 4,
  4400331: 3,

  // Crowding metrics (4400332–4400334)
  4400332: 3,
  4400333: 4,
  4400334: 5,

  // Position-level P&L attribution (4400335–4400337)
  4400335: 4,
  4400336: 4,
  4400337: 3,

  // Monthly review ritual (4400338–4400339)
  4400338: 5,
  4400339: 5,

  // Liquidity scoring (4400340)
  4400340: 4,

  // Pair-trade attribution (4400341)
  4400341: 4,
}

export const hfCh4Questions: Question[] = [
  // -------------------------------------------------------------------------
  // PORTFOLIO CONSTRUCTION AND POSITION SIZING (4400300–4400304)
  // -------------------------------------------------------------------------
  q(4400300, 'Career Skills', CHAPTER, 'Top-down sizing from conviction and asymmetry',
    'You are sizing a new long in a $1.2B long/short book. Your base-case upside is +40%, downside is -15%, and your subjective probability of the upside path is 60%. The name is liquid and uncorrelated with your existing book. Which sizing logic is the cleanest first cut?',
    'Size roughly proportional to conviction times asymmetry: expected return is +18%, with a 2.7-to-1 win/loss ratio, which justifies a top-quartile position somewhere in the 4–6% range — then haircut for portfolio-level correlation and liquidity',
    [
      ['Anchor to the average position size in the book (around 3%) regardless of asymmetry, to keep risk evenly distributed', 'Equal-weighting is appropriate for an index, not for an active book where the PM is paid to express conviction. Refusing to size up an asymmetric, high-conviction idea is leaving alpha on the table.'],
      ['Size it at the max single-name limit because the expected return is positive', 'Maxing out on any positive-EV idea ignores how much edge it has relative to the rest of the book and ignores correlation and liquidity. The max limit is a ceiling, not a default.'],
      ['Wait until the position is in the book at a starter 1% size and only scale once you see a green P&L print', 'Sizing by P&L confirmation is mark-to-market herding, not investment discipline. The thesis dictates the size; the tape only ratifies the thesis after the fact.'],
    ],
    'Sizing in a discretionary book is conviction times asymmetry, capped by correlation, liquidity, and single-name limits. The PM\'s job is to express edge — undersizing high-conviction asymmetric ideas is just as much a process error as oversizing low-conviction ones.'),

  q(4400301, 'Career Skills', CHAPTER, 'Kelly fraction as a sanity check on sizing',
    'Your analyst proposes a 12% position based on a 65% win probability and a 1.8-to-1 win/loss payoff. A full-Kelly calculation gives roughly f* = p - (1-p)/b ≈ 0.65 - 0.35/1.8 ≈ 0.46, i.e. 46% of capital. Why is a 12% position still potentially too large under a "half-Kelly" or "quarter-Kelly" framing that most discretionary shops use?',
    'Full-Kelly assumes the win probability and payoffs are known precisely; in practice the inputs are noisy estimates and the optimal sizing collapses fast when probabilities are over-stated, so most shops cap at quarter- to half-Kelly, which would push the suggested size well below 46% but still test it against single-name and factor caps',
    [
      ['Kelly is irrelevant to discretionary equity investing because it was designed for blackjack', 'Kelly applies to any repeated positive-EV bet — the framework underpins growth-optimal position sizing across asset classes, even if practitioners haircut it heavily for parameter uncertainty.'],
      ['Kelly says 46%, so 12% is conservative by definition and there is no further work to do', 'Taking Kelly literally is exactly the trap. The 46% number assumes a 65% probability is the truth, not a guess. Real discretionary inputs have wide error bars, and that uncertainty is what forces the fractional-Kelly haircut.'],
      ['Kelly should be the only sizing input because it is mathematically optimal', 'Optimal under known inputs is not optimal under estimated inputs. And Kelly does not see correlation, liquidity, or drawdown tolerance — all of which a real risk framework has to layer on top.'],
    ],
    'Kelly is a useful sanity check on whether a position is in the right order of magnitude, not a sizing engine. Discretionary shops typically run quarter- to half-Kelly to absorb parameter uncertainty, then overlay single-name, factor, and liquidity caps before anything goes in the book.'),

  q(4400302, 'Career Skills', CHAPTER, 'Single-name caps and why they exist',
    'Your fund mandate caps any single long at 8% of NAV at cost and 12% at market. A position has appreciated to 11.5% and you still love the name. What is the right response framed as risk management, not as a view on the stock?',
    'Begin trimming back toward the cost cap or pre-clear a temporary breach with risk and the CIO — single-name caps exist because diversification benefits collapse when any one name dominates the book, and being right on the name does not exempt it from concentration risk',
    [
      ['Hold the position because the thesis is intact and you would buy more if you could', 'Loving the name is exactly when the cap matters most. Caps exist precisely so that conviction does not silently translate into concentration risk that the fund cannot survive if the thesis breaks.'],
      ['Add to the position because the market is validating your thesis with the price move', 'Adding past the cap is a hard breach, not a discretionary call. The PM does not get to override risk limits because the position is working — that is when limits are most binding.'],
      ['Wait until quarter-end and let the risk team flag it, since you have not actively bought any more', 'Passive drift past a hard cap is still a breach. The PM owns the position, not the trades — the cap is on exposure, not on activity.'],
    ],
    'Single-name caps protect the fund from the case where you are wrong on your highest-conviction idea. The cap is a feature, not an inconvenience — when a winner pushes through it, the discipline is to trim or pre-clear, never to silently ride above the line.'),

  q(4400303, 'Career Skills', CHAPTER, 'Sizing under positive correlation across the book',
    'You hold three high-conviction longs in regional banks at 5%, 4%, and 4%. The pairwise correlations are roughly 0.7. The risk system reports each name within its single-name cap, but the CIO flags concentration risk. Why is the CIO right despite no individual line breaching a limit?',
    'Single-name caps measure idiosyncratic exposure, but when three names move at 0.7 correlation they behave more like a single 13% position with a partial diversification haircut; the effective factor bet is well above what the single-name limits were designed to govern',
    [
      ['The CIO is being overly conservative because each position is individually within limits', 'Per-name limits do not see clusters. Three names at 0.7 correlation is not three independent bets — it is one factor bet that the per-name framework was never meant to constrain.'],
      ['The exposure is fine because regional banks have idiosyncratic catalysts and the correlations will break down on news', 'Idiosyncratic catalysts can dominate on individual print days, but factor exposure dominates on average days. The book will move with rates and credit spreads long before any single name reports.'],
      ['Hedge it by adding a fourth regional bank long to spread the exposure further', 'Adding a fourth correlated name does not reduce factor exposure — it increases it. The fix is a sector or factor hedge, or a trim, not more of the same factor on the long side.'],
    ],
    'Per-name limits constrain idiosyncratic risk; factor and sector limits constrain correlated clusters. When several positions share a factor, the right risk frame is the cluster exposure, not the line items — and the cluster usually demands either a hedge or a trim before it shows up as a drawdown.'),

  q(4400304, 'Career Skills', CHAPTER, 'Sizing a short relative to its long counterpart',
    'In a long/short book you typically size shorts smaller than longs at conviction parity. Which set of reasons is the most accurate explanation for that asymmetry?',
    'Shorts have bounded upside (a stock can fall at most 100%) and unbounded downside, they cost a borrow fee, they can be recalled, and they grow as losers — the position scales against you precisely when the thesis is failing, so smaller initial size and tighter stops are structurally required',
    [
      ['Because short ideas are usually lower conviction than long ideas at a long-biased shop', 'Conviction parity was the premise. The asymmetry has nothing to do with conviction and everything to do with the mechanics of a short position growing as it loses.'],
      ['Because the IRS treats short-sale proceeds unfavorably from a tax perspective', 'Tax treatment is a minor consideration relative to the structural asymmetry of unbounded loss and self-scaling position size on a short that moves against you.'],
      ['Because short positions do not contribute to gross exposure for portfolio reporting purposes', 'They very much do contribute to gross exposure — a short is part of gross by definition. This is simply not how exposure accounting works.'],
    ],
    'A long that doubles becomes more of the book and is your friend; a short that doubles becomes more of the book and is killing you. The mechanics of a short position growing against the PM is why disciplined shops size shorts smaller and stop them out earlier than longs at the same conviction.'),

  // -------------------------------------------------------------------------
  // RISK METRICS — VaR AND STRESS TESTING (4400305–4400310)
  // -------------------------------------------------------------------------
  q(4400305, 'Career Skills', CHAPTER, 'Reading 1-day 95% VaR',
    'Your risk report shows 1-day 95% VaR of $4.2M on a $400M book. Which interpretation is correct?',
    'On a typical day, you expect to lose more than $4.2M on roughly 1 day in 20 — the metric describes the threshold beyond which losses fall in the worst 5% of the distribution, conditional on the model and recent volatility regime',
    [
      ['You will never lose more than $4.2M in a single day', 'VaR is a quantile, not a maximum. The whole point of the 95% level is that the other 5% of days exist — and the tail is precisely what VaR does not describe.'],
      ['You will lose exactly $4.2M on 5% of days', 'VaR is a threshold, not a point estimate of the loss. On the 5% of bad days you can lose much more — the magnitude of those tail losses is what conditional VaR (CVaR / expected shortfall) tries to capture.'],
      ['$4.2M is the worst loss the book has ever experienced historically', 'Historical worst case is a separate stress measure, not a VaR. VaR can be parametric, historical-sim, or Monte Carlo, but it is a quantile of an estimated distribution — not "the worst we have seen."'],
    ],
    'VaR is a quantile of the daily P&L distribution given a model and a window. The honest reading is "loss exceeded with probability X on a normal day"; it says nothing about the size of the tail beyond that point — which is why every risk framework pairs VaR with stress tests and expected-shortfall measures.'),

  q(4400306, 'Career Skills', CHAPTER, 'Scaling VaR from 1-day to 10-day',
    'Your 1-day 95% VaR is $4.2M. Under the standard sqrt-of-time scaling, what is the implied 10-day 95% VaR, and what is the key assumption behind that scaling that often fails in practice?',
    'Roughly $4.2M × √10 ≈ $13.3M, but the scaling assumes returns are independent and identically distributed across days — in real markets, vol clusters and tail days are autocorrelated, so the 10-day number understates risk during stressed regimes',
    [
      ['$42M (just multiply by 10), because risk accumulates linearly with time', 'Linear scaling of risk by time assumes returns add up like dollars, but standard deviations scale by the square root of time when returns are independent. Linear scaling overstates 10-day VaR by a factor of about three under iid assumptions.'],
      ['$4.2M, because VaR is regime-invariant and does not depend on horizon', 'VaR very much depends on horizon. A 10-day horizon means 10 chances to draw from the distribution, so the dispersion of cumulative P&L grows — that is the whole reason regulators ask for multi-day VaR.'],
      ['Cannot be calculated without re-running the model from scratch on 10-day returns', 'You can in fact re-run on 10-day returns, but the sqrt-of-time approximation is the standard first cut and works well enough away from crisis windows. The conceptual point is whether and when that approximation breaks.'],
    ],
    'Sqrt-of-time scaling is the workhorse approximation but rests on iid returns. In a vol-clustering regime — every actual stress event — autocorrelation in squared returns makes the iid approximation understate longer-horizon risk, which is why VaR is always paired with crisis-period stress scenarios.'),

  q(4400307, 'Career Skills', CHAPTER, '1-day 99% vs 1-day 95% VaR',
    'A regulator asks for 1-day 99% VaR. Your 1-day 95% VaR is $4.2M and historical-sim returns are approximately normal. Roughly what is the 99% number, and why is the gap meaningful?',
    'Roughly $5.9M (the 99% z-score is about 2.33 vs 1.65 for 95%, so the 99% VaR is about 1.41× the 95% number); the gap matters because the 4% of days that sit between the 95% and 99% thresholds are exactly where most damaging non-crisis losses live',
    [
      ['The same $4.2M — VaR thresholds are conventions and do not change the underlying risk', 'They are conventions, but they reference different points on the same distribution. A 99% threshold is materially deeper in the tail than a 95% threshold and produces a larger dollar number.'],
      ['About $8.4M because you double the confidence', 'Confidence intervals do not double linearly. Under normality, the ratio of z-scores tells you the scaling — about 1.41, not 2.0.'],
      ['It cannot be inferred from the 95% number without a fresh sim', 'Under a normality assumption you can in fact infer it with the z-score ratio. The point of the exercise is to know that scaling, not to dismiss it.'],
    ],
    'Different VaR thresholds describe different points on the same loss distribution. Under normality, 99% is roughly 1.41× the 95% number; under fat tails it is more. The space between thresholds is where most "bad but not catastrophic" days live, and the regulator asks for 99% precisely because they want a view further into that tail.'),

  q(4400308, 'Career Skills', CHAPTER, 'Stress test against 2008 and COVID',
    'Risk runs your current book through a 2008 stress scenario (S&P -38%, credit spreads +600bp, vol regime shift) and a COVID 2020 scenario (S&P -34% over 33 days, dispersion spike, factor rotation). The 2008 number is -22% of NAV; the COVID number is -8%. What is the most useful read from that contrast?',
    'The current book is much more exposed to credit and slow-burn correlation-spike regimes than to short, sharp dispersion regimes — the gap tells the PM where the residual factor exposure sits and which kind of crisis the portfolio is actually built to survive',
    [
      ['The 2008 number is wrong because nothing in the current portfolio is from 2008', 'The point of historical stress is exactly to apply past shocks to today\'s book. The question is not whether 2008 will recur — it is whether the current exposures map onto the kind of factor moves that drove 2008 losses.'],
      ['The COVID number is the only relevant one because 2008 is too long ago to be a comparable regime', 'Crisis regimes are rare data points and the older one is still informative about how exposures behave when correlations move to 1. Discarding 2008 because it is old throws away the most relevant deep-tail event in modern history.'],
      ['Stress tests are just compliance exhibits and do not inform the daily PM decision', 'They very much do — when 2008 stress prints -22%, the PM knows the book carries a credit-correlation tilt and can decide whether that is intended or needs trimming.'],
    ],
    'Historical stress translates past factor moves into today\'s book and shows where the structural exposure sits. The contrast between two scenarios is often more informative than any single number — it reveals which kind of crisis the portfolio is built around, intentionally or otherwise.'),

  q(4400309, 'Career Skills', CHAPTER, '1987 Black Monday in a stress framework',
    'A risk officer adds 1987 Black Monday (S&P -22% in a single session) as a daily stress scenario. The book prints -14% under that scenario despite running 40% net long. Why is that loss bigger than a naive "net × shock" calculation would suggest?',
    'In a Black Monday scenario, correlations across longs and shorts collapse toward 1, hedge ratios on options blow out, liquidity disappears so realised slippage exceeds modelled, and shorts squeeze on margin-driven covering — the realised loss exceeds the linear "net long × index move" because the hedges fail in exactly the way they were supposed to protect',
    [
      ['The risk model is broken — 40% net long times -22% should be -8.8%, not -14%', 'It would be -8.8% if betas held, if every position moved with the index, and if liquidity were free. None of those conditions hold in a Black Monday — the model is showing exactly the way a real crisis bleeds beyond the linear estimate.'],
      ['The extra loss is from the cost of unwinding positions during the stress event', 'Some of it is, but most of it is correlation breakdown and gap risk, not transaction cost. Attributing the gap purely to unwinding cost misses the structural failure of the hedges.'],
      ['The number should be similar to a 2008 stress because both are systemic events', 'The shock shapes are very different — 1987 is an instantaneous single-day gap, 2008 is a slow grind with funding pressure. Treating them as equivalent erases the most useful information the stress framework produces.'],
    ],
    'In a Black Monday-style gap, the hedges that diversify on normal days stop working precisely when they are needed. Realised losses exceed the linear "net × shock" estimate because correlations move to 1, hedges blow out, and liquidity vanishes — which is the whole reason daily VaR is paired with gap-shock stresses.'),

  q(4400310, 'Career Skills', CHAPTER, 'Beta-adjusted net exposure',
    'Your book is 110% gross long, 80% gross short — 30% net long on a notional basis. Average long beta is 1.3, average short beta is 0.7. What is the beta-adjusted net exposure, and what does it tell you that the notional net does not?',
    '110% × 1.3 − 80% × 0.7 = 143% − 56% = 87% beta-adjusted net — meaning the book has roughly 87% of NAV in market exposure once you account for the longs being higher-beta than the shorts; the notional 30% net materially understates the true market sensitivity',
    [
      ['30%, because beta adjustment is a refinement that rarely changes the answer materially', 'It very much does in this case — beta adjustment nearly triples the implied market exposure from the notional read. Ignoring it is exactly the way a fund can run with more market risk than the PM thinks.'],
      ['190% (110% + 80%), which is the gross exposure', 'Gross adds long and short exposure to measure the size of the bet; net subtracts to measure direction. Beta-adjusted net is a different metric again — gross is not the answer to a question about market sensitivity.'],
      ['Cannot be computed without knowing each individual stock\'s beta', 'You can compute it with weighted-average betas as a first cut — which is the standard daily risk read. Stock-by-stock beta is the next layer of refinement but not a prerequisite.'],
    ],
    'Notional net exposure assumes every long and short has beta 1.0 against the market — almost never true. Beta-adjusted net translates the book into market-equivalent exposure and is the more honest measure of how the portfolio will move with a market shock.'),

  // -------------------------------------------------------------------------
  // FACTOR ATTRIBUTION (4400311–4400315)
  // -------------------------------------------------------------------------
  q(4400311, 'Career Skills', CHAPTER, 'Fama-French and Barra: what they measure',
    'A junior analyst asks what the difference is between a Fama-French three-factor attribution and a Barra-style factor model. What is the most accurate framing?',
    'Fama-French is an academic model that decomposes returns into a small number of long-horizon return-generating factors (market, size, value, then momentum and quality in extensions); Barra is a commercial risk model with many more factors (style, industry, country) intended to predict realised volatility and explain short-horizon variance rather than just long-horizon return',
    [
      ['Fama-French and Barra are interchangeable — both decompose returns into the same factors', 'They share the conceptual frame but differ in factor count, factor construction, horizon, and primary use. The academic three-factor model has three factors by design; Barra runs 50+ factors for risk forecasting.'],
      ['Barra is just a software product that runs Fama-French regressions', 'Barra has its own factor library and methodology that predates and extends academic models in scope and frequency. It is not a Fama-French wrapper.'],
      ['Fama-French is for risk; Barra is for return', 'Backwards. Fama-French was built as a return-decomposition model from cross-sectional return data; Barra was built primarily to forecast portfolio risk and explain variance.'],
    ],
    'Both frameworks decompose returns into factor exposures, but they differ in granularity and purpose. Fama-French is the canonical return-explanation model with a small set of long-horizon factors; Barra is the production risk-attribution tool that powers most institutional pre-trade risk and post-trade attribution today.'),

  q(4400312, 'Career Skills', CHAPTER, 'Reading a factor attribution table',
    'Your month\'s P&L is +180bp. Factor attribution shows: market beta +60bp, size -40bp, value -50bp, momentum +110bp, quality +20bp, residual (idiosyncratic) +80bp. What is the honest one-line read of the month?',
    'Roughly half of the month\'s return came from a momentum tilt that was paid; idiosyncratic stock selection contributed about 80bp of true alpha; size and value tilts cost the book, suggesting the portfolio leaned into expensive growth and out of small caps',
    [
      ['The book made +180bp of alpha this month', 'Alpha is the residual after factor returns are stripped out. Calling the full +180bp alpha conflates being paid for a momentum tilt (a factor return) with idiosyncratic skill — the residual is only 80bp.'],
      ['The book underperformed because size and value were negative', 'The book was positive overall by +180bp. Negative factor contributions on individual lines do not mean underperformance — they mean those tilts cost return that other tilts and selection made up for.'],
      ['Factor attribution is unreliable because the residual is so large', '80bp of residual on a +180bp month is not "large" — it is about 44% of the total and a typical idiosyncratic share for a discretionary book. Dismissing the table because the residual is non-zero discards the whole point of the exercise.'],
    ],
    'A factor attribution table separates "what got paid" (factor returns) from "what you actually picked" (residual). The honest read is to call out the factor tilts that worked, the ones that did not, and the residual — without quietly attributing factor returns to your own skill.'),

  q(4400313, 'Career Skills', CHAPTER, 'When residual is suspiciously high',
    'Over twelve months your monthly factor attribution shows the residual averaging 250bp positive while named factors net to roughly zero. Risk flags this for review. What is the most likely diagnostic interpretation?',
    'The residual is absorbing exposure to factors not in the model — common culprits are crowding, short interest, analyst-revision momentum, or a sector tilt the model groups too coarsely — so the "alpha" is partly a hidden factor bet the framework does not yet measure',
    [
      ['Genuine skill — the PM has been generating consistent idiosyncratic alpha', 'Possible, but a year of consistent residual that large should trigger investigation, not celebration. The base rate of genuine 250bp/month idiosyncratic alpha is extremely low; the base rate of hidden factor exposure is high.'],
      ['Random noise that will mean-revert', 'Twelve months of consistent residual is not random noise — by design, residuals should average roughly zero over time if the factor model is complete. Persistent residual signals a missing factor, not noise.'],
      ['Model error — the regressions should be re-run with different windows', 'Re-running on different windows treats the symptom, not the cause. The diagnostic is to expand the factor set and see whether the residual collapses once richer factors are added.'],
    ],
    'A persistently positive residual is the single most reliable signal that the factor model is missing something the book is exposed to. The right response is to widen the factor universe — crowding, short interest, revision momentum, sub-industry — and re-attribute, not to assume the residual is pure skill.'),

  q(4400314, 'Career Skills', CHAPTER, 'Momentum factor contribution in a reversal month',
    'Your book has had a consistent positive momentum tilt for two years. In March the momentum factor reverses sharply (-7% to the factor), and your attribution shows -180bp from momentum that month. The PM\'s instinct is to "ride it out." What is the disciplined risk-management response?',
    'A factor drawdown of that size is exactly what the framework was supposed to flag — the right response is to size the momentum exposure intentionally rather than as a byproduct of stock picking, and to ask whether the PM wants the bet at this level given the regime shift',
    [
      ['Cut all the momentum names immediately to stop the bleeding', 'A panic cut on a factor reversal is a flight-from-process response. The discipline is to recognise the factor exposure was a deliberate part of the book and decide whether it still should be at this size, not to liquidate on a single month\'s factor move.'],
      ['Add to momentum names because the factor is now cheap on a relative basis', 'Adding into a sharp factor reversal is exactly the kind of "buy the dip" reasoning that gets killed by a regime change. The disciplined response is to size the factor bet; doubling down without a regime view is not.'],
      ['Ignore the attribution because factor models do not capture discretionary investing', 'Discretionary books still carry factor exposure whether the PM measures it or not — that is precisely why the attribution exists. Dismissing the table is how a hidden factor bet becomes a public drawdown.'],
    ],
    'A factor drawdown is a signal that the PM owns a factor exposure, intentionally or otherwise. The discipline is to make the bet conscious: re-size momentum to the level the PM actually wants, hedge what is unwanted, and stop being surprised by a factor move that the attribution table predicted.'),

  q(4400315, 'Career Skills', CHAPTER, 'Quality factor and the "boring" alpha',
    'Your book\'s quality-factor exposure is +0.4 standard deviations (high). Year-to-date the quality factor has contributed +90bp to your P&L. Why might the PM still treat this as a problem to address rather than as alpha?',
    'Factor returns are not the PM\'s alpha — they are returns the LP could replicate cheaply via a quality-factor ETF; charging 2/20 for systematic factor exposure is precisely what allocators are pricing out when they look at hedge fund returns vs replication portfolios',
    [
      ['Quality is a defensive factor that drags in bull markets, so +90bp is suspicious', '+90bp is the realised return for the year — that is the data. The concern is not that quality drags in bull markets; the concern is whether the PM is being paid for what an ETF could deliver more cheaply.'],
      ['It is not a problem because the contribution is positive', 'Whether it is a problem turns on the LP\'s eyes, not on the sign of the contribution. Allocators distinguish factor exposure (cheap) from idiosyncratic alpha (expensive) — and the fund earns its fee on the latter.'],
      ['Quality cannot be measured reliably so the number is meaningless', 'Quality is a well-defined factor in production factor models (ROE, earnings stability, leverage). Dismissing the measurement is exactly the move that lets a factor tilt hide as alpha.'],
    ],
    'Allocators increasingly decompose hedge fund returns into factor returns (cheap to replicate) and idiosyncratic alpha (the thing they pay 2/20 for). A persistent factor tilt that drives a meaningful share of P&L is not a feature in a fee conversation — it is precisely what the allocator is trying to net out.'),

  // -------------------------------------------------------------------------
  // STYLE DRIFT (4400316–4400318)
  // -------------------------------------------------------------------------
  q(4400316, 'Career Skills', CHAPTER, 'Market-neutral fund drifting net long',
    'A market-neutral fund chartered at 0% +/- 10% net exposure has been running 18% net long for three months. The PM points to alpha generation and notes that shorts are hard to find in this regime. What is the most accurate framing of the problem?',
    'The fund is no longer doing what its LPs bought; market-neutral is a mandate, not a target — running 18% net long means LPs are paying hedge-fund fees for directional beta they could have bought at 5bp in an index fund, and the breach is an LP communication issue regardless of P&L',
    [
      ['It is fine because the fund is making money — alpha generation justifies the drift', 'P&L does not retroactively change the mandate. LPs sized this fund inside a market-neutral sleeve; the drift means they have more market exposure than they sized for, regardless of whether the bet is currently paying off.'],
      ['It is fine for three months — drift over a year would be a problem', 'The mandate is a soft limit, not a "looks-back" target. Three months of breach is three months too many — the disciplined response is to either bring exposure back inside the band or notify LPs and seek consent to widen the band.'],
      ['Hard to find shorts is a structural problem with the market, not with the fund', 'Hard-to-find shorts is a real condition, but it does not entitle the fund to redefine the mandate unilaterally. The response is to size the long book smaller, not to run net long inside a market-neutral wrapper.'],
    ],
    'Style drift is fundamentally an LP-trust problem before it is a risk problem. A market-neutral mandate is the explicit promise the fund makes to allocators; quietly running directional within that wrapper is the fastest way to lose the next fundraise, even if the P&L for the current period looks fine.'),

  q(4400317, 'Career Skills', CHAPTER, 'Value PM holding growth winners',
    'A long-only value PM\'s top three positions are now trading at 35x, 40x, and 28x forward earnings after a year of multiple expansion. The PM bought them at 12x, 14x, and 11x. The thesis on each name has not changed. Is this style drift?',
    'Yes — even if every position was bought at value multiples, the current book is no longer a value book by exposure; the PM owes the LPs either a trim back into value names or a clear conversation about why the book has rotated, because the factor exposure today is what the LPs are paying for, not what was paid two years ago',
    [
      ['No — the PM bought them as value names so the discipline was maintained', 'Style is about the exposure of the current book, not the cost basis of the positions. A value fund whose top names trade at 35x today is a growth fund in current factor exposure, regardless of entry multiple.'],
      ['No, because letting winners run is core to value investing', 'Letting winners run is core to many strategies, but a value-mandate fund running a growth-multiple book has drifted into a different strategy. The conversation about whether to trim or rotate has to happen — silently riding the multiple is not the same as the mandate.'],
      ['Yes, and the PM should immediately sell all three positions back to original cost-basis weights', 'Forced rebalancing to original weights is not the discipline either — that would crystallise tax and ignore the thesis. The discipline is to recognise the drift, decide consciously, and communicate the decision; not to mechanically rewind.'],
    ],
    'Style is a property of the current portfolio, not the entry decision. A value PM whose winners have rerated into growth multiples has a book that no longer matches the mandate — and the right move is conscious rotation or transparent communication, not silent multiple riding.'),

  q(4400318, 'Career Skills', CHAPTER, 'Detecting style drift before LPs do',
    'You run risk at a value-tilted long/short. The PM\'s book has shown rising momentum exposure (+0.2 to +0.6 std dev over six months) and falling value exposure (-0.4 to -0.1). Headline returns are strong. How do you raise this with the PM without making it adversarial?',
    'Bring the factor-exposure time series to the next portfolio review with no commentary, ask the PM to walk through which positions are driving the rotation, and frame the conversation around "what kind of book are we running today vs the LP letter" — let the data make the point, then jointly decide whether to trim, hedge, or update the LP communication',
    [
      ['Send the head of the firm a memo flagging the drift before talking to the PM', 'Going over the PM\'s head before having the conversation breaks the working relationship and turns a productive process check into a political confrontation. Risk and PM should agree what the book is before anyone escalates.'],
      ['Wait until the drift causes a drawdown — there is nothing to discuss while returns are strong', 'The whole point of factor risk monitoring is to flag drift before P&L makes the problem unavoidable. Waiting until a drawdown means the conversation happens at the worst possible time and after avoidable loss.'],
      ['Tell the PM the book has style-drifted and demand a rebalance back to baseline value exposure', 'Telling a PM what their book is and demanding action without dialogue is how risk teams lose credibility. The conversation is collaborative — bring the data, ask the PM\'s view, agree the next step together.'],
    ],
    'Style drift is most usefully caught early through a factor-exposure conversation framed around what the book is, not what it should be. Risk\'s job is to make the data visible so the PM can decide consciously — adversarial framing is rarely necessary if the time series tells the story plainly.'),

  // -------------------------------------------------------------------------
  // BRINSON / PERFORMANCE ATTRIBUTION (4400319–4400322)
  // -------------------------------------------------------------------------
  q(4400319, 'Career Skills', CHAPTER, 'Brinson allocation vs selection',
    'A Brinson attribution against a benchmark shows: allocation effect +120bp, selection effect -80bp, interaction -10bp. What is the most accurate read?',
    'The PM got paid for being in the right sectors but the names they picked inside those sectors underperformed the sector benchmarks — sector calls worked, stock picking did not, net contribution is positive but the sources are saying opposite things',
    [
      ['The PM has a +30bp month, end of story', 'Net +30bp is the headline, but the Brinson decomposition is telling two different stories under that net — the sector tilt worked, the stock picking did not, and an LP would want to know that the alpha came from allocation, not selection.'],
      ['Stock picking is bad, so the PM should sell the underperforming names', 'Selection underperformance for one period is not a sell signal — the right response is to investigate which positions drove it, not to mechanically liquidate the losers. Brinson tells you where to look, not what to do.'],
      ['Allocation and selection effects offset each other so the framework is not useful here', 'Net offsetting is exactly when Brinson is most useful — the headline number hides two opposing forces. Dismissing the table because the net is small misses the entire point of the decomposition.'],
    ],
    'Brinson attribution separates "where you were" (sector or factor allocation) from "what you picked" (security selection within sectors). A PM who is paid for allocation but loses on selection has a very different process story than one who picks well in adverse sectors — and the LP cares about which one is recurring.'),

  q(4400320, 'Career Skills', CHAPTER, 'Allocation effect mechanics',
    'In a Brinson framework, the allocation effect for a sector is calculated as (portfolio weight - benchmark weight) × (benchmark sector return - benchmark total return). Why is the comparison against benchmark total return and not against zero?',
    'The allocation effect measures the value of overweighting a sector that beat the broad benchmark — being overweight a sector that returned +5% in a month when the benchmark returned +5% is not skill; the contribution only matters relative to the average alternative the PM could have allocated to',
    [
      ['Because using zero would understate the effect mechanically', 'Using zero would just measure absolute return contribution, which conflates being in the market with being in a good sector. The Brinson construction is specifically about relative skill, not absolute exposure.'],
      ['Because the benchmark total return is a tax-adjusted reference number', 'Nothing to do with tax. The benchmark total return is the opportunity cost — the return the PM could have had by not making any sector bet at all.'],
      ['Because portfolio weight must equal benchmark weight in expectation', 'Portfolio weights do not have to equal benchmark weights — that would defeat the purpose of active management. The decomposition is built around the idea that they differ, and the allocation effect measures the consequence of that difference.'],
    ],
    'Brinson decomposes active return relative to the opportunity cost of doing nothing. The allocation effect rewards overweighting sectors that beat the broad benchmark and penalises overweighting sectors that lagged it — the comparison to benchmark total return is what makes the metric a measure of skill rather than of exposure.'),

  q(4400321, 'Career Skills', CHAPTER, 'Selection effect mechanics',
    'The selection effect within a sector is calculated as (portfolio sector return - benchmark sector return) × benchmark sector weight. Why is the multiplier the benchmark weight and not the portfolio weight?',
    'Using the benchmark weight isolates pure stock-picking skill — the question "did the names you picked beat the sector index?" — without contaminating it with the size of the sector bet, which is already captured separately in the allocation effect',
    [
      ['Because the portfolio weight is harder to measure reliably', 'Portfolio weight is observed directly — there is no measurement problem. The choice of benchmark weight is conceptual, not practical: it cleanly separates selection skill from sizing.'],
      ['Because the benchmark weight is the larger of the two', 'It is not necessarily larger and the reason has nothing to do with magnitude. The construction is about isolating one source of skill from another, not about which weight is bigger.'],
      ['By convention only — the formula could also be written with portfolio weight without changing the meaning', 'It would change the meaning materially. Writing the formula with portfolio weight contaminates selection effect with the size of the sector bet — that is exactly the contamination the Brinson construction is designed to avoid.'],
    ],
    'The point of Brinson is to separate orthogonal sources of skill. Using benchmark weight in selection isolates pure picking ability; using benchmark return in allocation isolates pure sizing ability. The interaction term picks up the residual when both move together.'),

  q(4400322, 'Career Skills', CHAPTER, 'Brinson interaction term — what it means',
    'A Brinson report shows interaction effect of +25bp on a sector where allocation was +60bp and selection was +40bp. The PM asks what the interaction is doing there. What is the most useful explanation?',
    'Interaction captures the cross term — the PM overweighted a sector AND picked names inside it that beat the sector benchmark, so the two effects compound; the +25bp is the bonus from being right on both dimensions in the same sector simultaneously',
    [
      ['Interaction is residual error from the math and should be ignored', 'It is a genuine algebraic term, not error. It represents real return that comes from being right on both allocation and selection at the same time — ignoring it understates the contribution from sectors where both calls worked.'],
      ['Interaction is double-counting between allocation and selection', 'It is exactly the opposite — interaction prevents double-counting by isolating the joint contribution. Without it, the two effects could not be cleanly separated.'],
      ['Interaction means the model is misspecified for this portfolio', 'Interaction is a feature of every Brinson decomposition with non-trivial active weights. Its presence means the framework is working, not broken.'],
    ],
    'The interaction term in Brinson is the algebraically necessary cross-product that captures the joint contribution of allocation and selection in the same sector. It tells a PM where they were both in the right sector and picking the right names within it — usually the highest-conviction part of the book.'),

  // -------------------------------------------------------------------------
  // ALPHA DECOMPOSITION (4400323–4400325)
  // -------------------------------------------------------------------------
  q(4400323, 'Career Skills', CHAPTER, 'Idiosyncratic alpha vs factor returns',
    'Your year-to-date return is +14%. After factor attribution, +9% is attributable to factor exposures (market, momentum, quality) and +5% is residual. Which line is the "alpha" allocators will pay for?',
    'The +5% residual is the closest proxy to idiosyncratic alpha — the +9% factor contribution is largely replicable by an LP through cheap factor ETFs and is not what hedge fund fees are pricing',
    [
      ['The full +14% is alpha because it is the fund\'s total return', 'Total return is not alpha. Beta and factor returns are part of total return but available cheaply elsewhere; alpha is what the manager produces over and above those exposures.'],
      ['The +9% factor contribution is alpha because it required the PM to take those exposures', 'Taking factor exposure is not the same as generating idiosyncratic alpha. The factor return is the market\'s payment for systematic risk premia, not a payment for the PM\'s skill.'],
      ['Neither is alpha — alpha by definition is impossible to measure', 'It is hard to measure but not impossible. The residual after appropriate factor attribution is the best available proxy, and the entire allocator-due-diligence industry runs on that estimate.'],
    ],
    'Idiosyncratic alpha is the return that does not load onto known risk premia. Allocators care about this number specifically because it is the part of the fund\'s return they cannot replicate cheaply — which is why factor attribution has become standard in hedge fund manager evaluation.'),

  q(4400324, 'Career Skills', CHAPTER, 'Hot-hand vs lucky over 36 months',
    'A PM has produced +200bp of residual (post-factor) alpha each year for three years. A statistician notes the t-statistic on the residual is 1.4, well below the 2.0 threshold typically required for statistical confidence. How do you reconcile a "track record" with statistical insignificance?',
    'Three years is too short a window to distinguish genuine skill from luck statistically at the standard threshold — the residual is consistent with skill but also consistent with a lucky run; the allocator\'s job is to evaluate process and signal-to-noise qualitatively because the data alone cannot resolve it',
    [
      ['Three years of positive residual is conclusive evidence of skill regardless of t-stat', 'The t-stat exists specifically to tell us when a track record is large enough relative to its volatility to be informative. Three positive years can absolutely happen by chance — the test is whether the magnitude relative to vol is improbable.'],
      ['The t-stat is wrong because alpha can compound year over year', 'Compounding does not change the statistical test on residuals. The t-stat measures whether the mean residual differs from zero relative to its noise — compounding is irrelevant.'],
      ['Statistical significance does not apply to investment returns', 'It absolutely does — every paper on manager skill is built around significance tests on alpha. The reason a 1.4 t-stat matters is precisely that the data does not yet rule out luck.'],
    ],
    'A three-year track record is statistically thin. The honest reading is that the PM may be skilled, but the sample does not yet prove it — which is why allocators weight process diligence (investment philosophy, risk discipline, attribution quality) heavily against short-history performance numbers.'),

  q(4400325, 'Career Skills', CHAPTER, 'When the residual flips negative',
    'After two years of +300bp/year residual alpha, your fund has now run -150bp residual year-to-date through Q3. Net of factor returns the book is still up modestly, but the idiosyncratic component has turned negative. What is the right diagnostic posture?',
    'Treat it as a process-review trigger, not a data point — examine whether selection-effect attribution has degraded across sectors, whether the analyst team has rotated, whether new names underperform their thesis at a higher rate, and whether the alpha source the PM thought they had was actually a factor exposure that has rotated',
    [
      ['Cut leverage and reduce gross exposure until the residual comes back', 'Reducing gross is a risk lever, not a diagnostic. It treats the symptom (loss) rather than addressing whether the underlying source of alpha is intact. Diagnostic first, response second.'],
      ['Ignore it — alpha is mean-reverting and one year of negative residual is noise', 'One year is statistically thin but it is the most recent data point, and dismissing it as noise is exactly how funds miss a deteriorating process until two years too late. It is a flag, not a verdict.'],
      ['Replace the analyst team because they are clearly the problem', 'Firing the team before diagnosis is a category error. The cause might be team, process, regime, or hidden factor — investigation comes first; staffing changes are at most a third or fourth response.'],
    ],
    'A turn in the residual is a diagnostic trigger. The right work is to decompose where selection has degraded, whether new names underperform thesis more than old names did, and whether the historical residual was real or a slow-moving factor that has now reversed. The action set follows the diagnosis, not the loss.'),

  // -------------------------------------------------------------------------
  // DRAWDOWN ANALYTICS (4400326–4400328)
  // -------------------------------------------------------------------------
  q(4400326, 'Career Skills', CHAPTER, 'Maximum drawdown vs current drawdown',
    'A fund\'s NAV peaked at $1.30/share in March, fell to $1.10 in September, recovered to $1.18 by year-end. What are the maximum drawdown and the current drawdown at year-end?',
    'Maximum drawdown = -15.4% (1.30 to 1.10); current drawdown = -9.2% (1.30 to 1.18) — max drawdown is the worst peak-to-trough realised loss over the period, current drawdown is the loss from the all-time high to the latest NAV',
    [
      ['Max drawdown -15.4% and current drawdown 0 because the fund recovered most of the loss', 'Current drawdown is measured against the all-time high, not against the prior trough. Partial recovery does not reset the high — the fund is still below its $1.30 peak.'],
      ['Max drawdown -7.3% from the September low to year-end', 'A recovery is not a drawdown. Drawdown measures peak-to-trough losses, never trough-to-peak moves. The -7.3% in that direction is part of the recovery, not the drawdown.'],
      ['Cannot be calculated without knowing the high-water mark from the fund inception', 'The high-water mark for fee purposes goes back further, but max drawdown over a window is computed from the highest NAV inside that window. You have all the inputs.'],
    ],
    'Maximum drawdown and current drawdown are both peak-to-trough measures referenced to the highest NAV, not to recent troughs. A fund in a -9% drawdown is materially different from one at the high-water mark — and the metric is what tells LPs and the PM where the book actually stands.'),

  q(4400327, 'Career Skills', CHAPTER, 'Recovery time and "time underwater"',
    'A fund has a max drawdown of -18% taking eight months from peak to trough, then twenty-two months to recover to the prior high. The fund\'s historical Sharpe is 1.4. Why is "time underwater" of thirty months a more useful LP communication metric than max drawdown alone?',
    'LPs experience time, not just magnitude — a fund that is underwater for 30 months tests LP patience and redemption discipline regardless of eventual recovery, and many allocators are size-constrained on how long they can hold an underwater manager irrespective of long-run performance',
    [
      ['Time underwater predicts future returns better than max drawdown', 'Neither metric directly predicts future returns — both are diagnostic descriptions of historical risk. The LP-experience framing is the useful one, not a predictive claim.'],
      ['Max drawdown is misleading because it ignores recovery', 'Max drawdown is a precise concept that measures peak-to-trough loss — it is not misleading, it is just one dimension. Time underwater is the complementary dimension that magnitude alone cannot capture.'],
      ['Sharpe ratio already accounts for time underwater', 'Sharpe captures return-to-volatility but does not directly capture the path of cumulative returns or how long the investor sat under water. A fund can have a strong Sharpe and still test LP patience through a long flat period.'],
    ],
    'Drawdown magnitude tells you how bad it got; time underwater tells you how long it took to feel okay again. Both matter to LPs because allocator behaviour (redemptions, rebalancing, employment of the PM) often turns on the duration of underperformance, not just its depth.'),

  q(4400328, 'Career Skills', CHAPTER, 'Calmar ratio and what it captures',
    'The Calmar ratio is annualised return divided by maximum drawdown over a specified window (typically three years). A fund returns 12% annualised over three years with a 15% max drawdown — Calmar ≈ 0.8. What does Calmar capture that Sharpe does not?',
    'Calmar penalises path of returns specifically through realised drawdowns rather than through volatility — two funds with the same Sharpe can have very different Calmars if one had a smooth path and the other had a single deep drawdown, and many allocators weight drawdown more heavily than vol',
    [
      ['Calmar is just Sharpe expressed differently', 'They share a return-over-risk structure but use different risk measures. Vol penalises upside and downside symmetrically; drawdown penalises only realised peak-to-trough losses, which behave very differently for skewed return distributions.'],
      ['Calmar accounts for taxes; Sharpe does not', 'Neither metric directly accounts for taxes. They differ in their risk measure, not in their treatment of taxes.'],
      ['Calmar is unreliable because max drawdown is path-dependent', 'Path-dependent is the feature, not the bug. The whole point of Calmar is to penalise funds with adverse paths; calling that unreliability misses what the metric is trying to measure.'],
    ],
    'Calmar captures path risk through realised drawdown, which Sharpe (working from volatility) does not. For funds with skewed or fat-tailed return distributions — a hedge fund running short vol, or a long/short fund with a few deep loss months — Calmar often tells the more honest story.'),

  // -------------------------------------------------------------------------
  // SHARPE / SORTINO / INFORMATION RATIO (4400329–4400331)
  // -------------------------------------------------------------------------
  q(4400329, 'Career Skills', CHAPTER, 'Sharpe vs Sortino',
    'Sharpe uses total volatility in the denominator; Sortino uses only downside deviation. For which kind of strategy is Sortino most informative relative to Sharpe?',
    'Strategies with positively skewed return distributions or asymmetric payoff profiles — long-vol, distressed debt with optionality, trend-following — where upside vol is desired and treating it as risk in the Sharpe denominator unfairly penalises a strategy whose whole point is to have fat right tails',
    [
      ['Long/short equity strategies, where Sortino is always preferred to Sharpe', 'Long/short equity typically has roughly symmetric return distributions, where Sharpe and Sortino tell similar stories. Sortino shines on skewed strategies, not on every long/short fund.'],
      ['Market-neutral strategies, where the symmetric distribution makes Sortino more accurate', 'Market-neutral distributions tend to be roughly symmetric, which is precisely when Sharpe and Sortino agree. Sortino adds information when the distribution is asymmetric, not when it is symmetric.'],
      ['Equity index strategies, because Sortino penalises beta', 'Sortino does not penalise beta; it penalises downside deviation. And index strategies have neither positive skew nor strong asymmetric payoff structure, so the two metrics converge there.'],
    ],
    'Sortino is most useful where the return distribution is genuinely asymmetric — strategies with optionality, fat right tails, or convex payoff structures. For roughly symmetric long/short equity returns, Sharpe and Sortino usually agree, and the additional precision of Sortino does not materially change the read.'),

  q(4400330, 'Career Skills', CHAPTER, 'Information Ratio for active managers',
    'A long-only fund has Sharpe 0.8 with a benchmark Sharpe of 0.7. Its Information Ratio (active return / tracking error) is 0.4. Why do allocators looking at active long-only funds care more about IR than Sharpe?',
    'IR isolates the manager\'s active skill — it measures excess return per unit of active risk, stripping out the market exposure the LP already owns elsewhere; Sharpe rewards the fund for beta the LP could have bought cheaply in an index',
    [
      ['IR is just Sharpe with a benchmark instead of risk-free rate', 'The substitution is the point. Replacing the risk-free rate with a benchmark, and using tracking error (active risk) instead of total volatility, transforms the metric from a beta-friendly read to an alpha-only read.'],
      ['IR cannot be gamed by leverage, unlike Sharpe', 'IR can be gamed by levering active bets, just as Sharpe can be gamed by levering the whole book. The distinction is what is in the numerator and denominator, not which is gameable.'],
      ['IR is preferred only when the fund mandate is to track a benchmark closely', 'IR is precisely the metric for active managers, whether the mandate is closet-index or high-tracking-error. It quantifies active skill per unit of active risk regardless of the active-risk budget.'],
    ],
    'For an active manager, the Information Ratio is the cleanest measure of skill per unit of active risk. Sharpe conflates the manager\'s alpha with the benchmark\'s beta; IR does not — which is why allocator due diligence on long-only and benchmarked hedge funds usually centres on IR.'),

  q(4400331, 'Career Skills', CHAPTER, 'Choosing the ratio that fits the strategy',
    'A multi-strategy fund pitches Sharpe 1.6, Sortino 2.4, Calmar 0.9, IR 1.1. Each is a real number that flatters the fund. Which is the right metric for an LP evaluating the fund as a portfolio diversifier alongside their long-only equity book?',
    'Probably IR against a chosen equity benchmark — because the LP is asking "what does this manager add to my existing equity exposure," which is exactly what active return per unit of active risk measures; Sharpe risks rewarding the fund for beta the LP already owns',
    [
      ['Sharpe 1.6 because it is the most familiar and widely accepted metric', 'Familiarity is the worst reason to pick a risk metric. Sharpe answers a different question — total return per total risk — than the LP\'s "what does this add to my book" question.'],
      ['Sortino 2.4 because it strips out upside vol and is the highest of the four', 'Sortino is appropriate for asymmetric strategies, but the LP\'s question is about diversification, not about asymmetric payoffs. Picking the highest number is not the same as picking the right metric.'],
      ['Calmar 0.9 because LPs care most about drawdown', 'Drawdown matters, but it is not the same as the question of whether the manager adds value to the LP\'s existing portfolio. Calmar is useful complement, not the primary lens for portfolio-fit evaluation.'],
    ],
    'The right ratio depends on the question. For a portfolio diversifier alongside existing equity exposure, the LP asks "what does this manager add beyond what I already own" — which is an information-ratio question. Each ratio answers something different; picking the highest one without picking the right one is salesmanship, not analysis.'),

  // -------------------------------------------------------------------------
  // CROWDING METRICS (4400332–4400334)
  // -------------------------------------------------------------------------
  q(4400332, 'Career Skills', CHAPTER, 'Short interest and days-to-cover',
    'A short you are considering has short interest at 22% of float and days-to-cover of 9 (short interest divided by ADV). How should those numbers shape your decision and your sizing?',
    'High short interest plus a long days-to-cover is a classic squeeze setup — the cost of being wrong is amplified because any positive catalyst forces a stampede on illiquid float; the short can still work, but it argues for smaller size, tighter stops, and an explicit catalyst-window plan rather than an open-ended position',
    [
      ['Both numbers are bullish for the short because they show conviction from other shorts', '"Other shorts are short too" is the crowding warning, not validation. The risk is precisely that the consensus short trade unwinds violently when sentiment shifts — exactly because so many shorts are crammed into limited float.'],
      ['Both numbers are irrelevant — only the fundamental thesis matters', 'Fundamentals drive the underlying value, but crowding and float dynamics drive the path. A short can be right on fundamentals and still get squeezed out before the thesis plays — sizing has to account for the path, not just the destination.'],
      ['Days-to-cover under 10 is comfortable; the size and stops should be standard', '9 days to cover is well into squeeze territory for liquid US equity, especially paired with 22% short interest. The combination demands smaller sizing and a clear plan for what to do on a sharp counter-move, not standard treatment.'],
    ],
    'Short interest as % of float and days-to-cover together describe how violently the trade can unwind. A crowded, illiquid short can be fundamentally correct and still cost you everything before the thesis pays — the metrics demand a sizing and stop discipline that respects the path risk, not just the endpoint.'),

  q(4400333, 'Career Skills', CHAPTER, 'Co-ownership by similar funds',
    'A name you are long is held by 14 of the 20 hedge funds in your peer-group cluster, with combined ownership of 28% of float across those funds. Why is this a position-management concern even if your own thesis is intact?',
    'Crowded longs share an exit door — when the trade rotates or any holder de-grosses for risk reasons, the cascade of selling pressure across similar funds compresses returns and can produce drawdowns disconnected from any change in the underlying thesis; the position is more correlated with peer-fund stress than with the company',
    [
      ['Heavy peer ownership is a positive — it validates the thesis through institutional consensus', 'Peer validation is exactly the warning. When everyone owns it, there is no marginal buyer left; the only future flow is selling. The trade is then exposed to peer de-grossing, not just to its own fundamentals.'],
      ['Peer ownership has no implication for your sizing because you cannot see other funds\' positions in real time', '13F and prime broker crowding data are real and trackable. Most institutional risk teams now monitor co-ownership at this level, precisely because of how often crowded longs unwind violently in stress.'],
      ['Concern only applies if peer funds are forced sellers, which is a tail event', 'Forced selling is one channel, but voluntary de-grossing in stress is the more common one — and it propagates across peer funds even when each one is acting individually. The cluster effect does not require forced selling to bite.'],
    ],
    'Co-ownership by similar funds is one of the most reliable predictors of drawdown decoupled from fundamentals. When the same name is in many peer books at large weight, the position is exposed to peer-cluster stress — and the cluster sells together regardless of whether the underlying thesis has changed.'),

  q(4400334, 'Career Skills', CHAPTER, 'Reading a crowding score',
    'Your prime broker provides a "crowding score" combining hedge fund ownership, days-to-cover, short interest, and ETF concentration. A long-side position scores in the 95th percentile of crowding. Your thesis has 18 months to play out. How do you act on this without overreacting?',
    'Treat the crowding score as a sizing and stop-discipline input, not a thesis input — the position can still work, but the magnitude of the bet and the willingness to take a temporary 20–30% adverse move have to reflect that the path will likely include peer-driven dislocations independent of fundamentals',
    [
      ['Sell the position because crowding always leads to drawdown', 'Crowding raises the probability of path stress but does not change the fundamental thesis. Selling on crowding alone over-rotates and misses real opportunities in well-owned names that are fundamentally correct.'],
      ['Ignore the score because crowding is not a fundamental factor', 'Path matters in any position with a finite hold horizon. Ignoring crowding because it is "non-fundamental" leaves the PM exposed to a class of drawdown the rest of the framework was supposed to anticipate.'],
      ['Increase the size to maximise upside, since high crowding implies high institutional conviction', 'High crowding is a path-risk warning, not a conviction signal. Sizing up into crowding is exactly the move that turns a small loss into a forced unwind during peer stress.'],
    ],
    'Crowding is a path-risk input, not a thesis input. The disciplined response is to keep the bet but right-size it, plan for adverse drawdowns the crowding score is telling you to expect, and decide in advance how to behave if peer-driven dislocation hits before the thesis plays out.'),

  // -------------------------------------------------------------------------
  // POSITION-LEVEL P&L ATTRIBUTION (4400335–4400337)
  // -------------------------------------------------------------------------
  q(4400335, 'Career Skills', CHAPTER, 'Thesis-on-track but P&L down',
    'A position is down 18% YTD. Earnings have beaten consensus on revenue, margin, and FCF for three consecutive quarters. The thesis is on track; the multiple has compressed. How do you classify this position in monthly attribution?',
    'Thesis-intact, multiple-compression loss — fundamentals are executing, the market is paying less per dollar of those fundamentals, and the position is therefore a candidate to add to rather than cut as long as the multiple compression is not signalling something the fundamentals do not yet show',
    [
      ['Thesis-failed because the position is losing money', 'P&L sign is not the same as thesis status. A thesis-on-track position with a temporary multiple compression is the most common setup where adding is correct — confusing P&L with thesis is the canonical PM error.'],
      ['Hold and ignore — fundamentals will catch up to price eventually', '"Eventually" is not a position-management plan. The discipline is to classify the loss honestly (multiple compression, not thesis failure) and decide whether to add, hold, or trim based on that classification — not to wait passively.'],
      ['Cut the position to free capital for names that are working', 'Cutting a thesis-on-track loser to fund a thesis-not-yet-proven winner is the classic loss-aversion trap. The right rotation logic is by forward-conviction and asymmetry, not by recent P&L.'],
    ],
    'Position-level attribution must separate "what happened to the fundamentals" from "what happened to the multiple." Thesis-on-track with multiple compression is a different problem than thesis-failed — and the response (often: add) is opposite to the response on a real thesis failure (cut). Conflating the two is the most common process error in long books.'),

  q(4400336, 'Career Skills', CHAPTER, 'Catalyst-hit but stock down',
    'A position rallied 22% into an expected catalyst (a product launch), then fell 14% on the day of the actual launch despite the product being well-received. The "catalyst hit" but the stock did not. What is the most useful framing in attribution?',
    'Classic "buy the rumour, sell the news" setup — the catalyst was already priced in; the run into the event was the trade, not the event itself; the PM has to decide whether the residual fundamental story justifies holding without the upcoming catalyst or whether the position should be reduced',
    [
      ['Catalyst-failed even though the launch went well, because the stock did not reward it', 'Catalyst-failed means the underlying event did not occur or did not deliver. The event went well — the price action reflects positioning, not failure. Mislabelling the catalyst as failed leads to bad lessons.'],
      ['The position is unchanged in thesis and should be held at current weight', 'Maybe — but the next catalyst is no longer the launch; it has to be something else (adoption, second-product, margin expansion). Re-anchoring the thesis on a fresh forward catalyst is the discipline, not assuming nothing has changed.'],
      ['The market was wrong and the position should be added to', 'Adding on the theory that the market is wrong is sometimes right and often a rationalisation. The honest read is that pre-event positioning got run-up, and the PM should re-assess forward catalysts before adding more.'],
    ],
    'Catalysts that "hit" can still produce losses when the run-up consumed the upside. The attribution lesson is to separate event from price action — the event delivered, the trade did not, and the next decision turns on whether the residual forward story is strong enough without the now-spent catalyst.'),

  q(4400337, 'Career Skills', CHAPTER, 'Multiple expansion vs earnings beat',
    'A position contributed +400bp of P&L this year. Decomposing the move: earnings grew 12% YoY, the multiple expanded from 22x to 30x. What is the honest attribution conversation with the CIO?',
    'About two-thirds of the gain came from multiple expansion, one-third from earnings — the trade worked, but the source of the return is the part less repeatable, and the position is now more vulnerable to multiple compression than it was at entry',
    [
      ['The position delivered because earnings beat — the multiple is just the market\'s recognition', 'Multiple expansion is not the same as earnings recognition. Two-thirds of the return depends on the multiple staying up; if you cannot articulate why the multiple should hold, the return is less repeatable than the earnings story suggests.'],
      ['Multiple expansion is the same as alpha generation in a single name', 'Multiple expansion is partly market beta, partly factor (growth/quality), and partly idiosyncratic. Calling it all alpha is the standard way a factor return gets misclassified as PM skill.'],
      ['Multiple expansion does not need to be analysed because price is the truth', 'Price is data; attribution is interpretation. The question is which part of the return is repeatable and which is luck — and conflating "price went up" with "thesis paid" is exactly what attribution exists to separate.'],
    ],
    'Decomposing a winner into earnings growth and multiple expansion is the discipline that prevents a PM from believing the wrong story. A name carried by multiple expansion is a less defensible hold than the same name carried by earnings beats — and the honest attribution makes the next sizing decision visible.'),

  // -------------------------------------------------------------------------
  // MONTHLY REVIEW RITUAL (4400338–4400339)
  // -------------------------------------------------------------------------
  q(4400338, 'Career Skills', CHAPTER, 'Grading each position monthly',
    'Your shop runs a monthly portfolio review where each position is graded A through F. What is the most useful grading rubric to apply consistently across the book?',
    'Grade on thesis progress and updated forward asymmetry, not on month\'s P&L — A means thesis-strengthened with strong forward asymmetry, F means thesis-failed and exit warranted; the grade should drive the size decision next month rather than re-rating the trade based on recent prints',
    [
      ['Grade each name on its monthly P&L performance — winners get A, losers get F', 'Grading on monthly P&L is the surest way to lose discipline. Thesis-on-track losers become Fs and get cut; thesis-failed lucky winners become As and get held. Both outcomes destroy alpha.'],
      ['Grade only on whether the position hit its short-term price target', 'Short-term price targets are usually back-of-envelope and not the basis for a serious grade. The grade has to capture progress against the multi-quarter thesis, not whether the stock hit a 30-day mark.'],
      ['Skip the grading exercise — discretionary PMs know their book and grades add bureaucracy', 'The exercise forces discipline. Without it, PMs are systematically slow to cut thesis-failed names and quick to cut thesis-on-track losers. The grade is the structured way to surface those decisions before P&L makes them for you.'],
    ],
    'The monthly grading ritual is the structured place where the PM separates "what happened in P&L" from "what happened in thesis." Grading on forward asymmetry rather than on monthly returns is what allows the book to keep adding to thesis-on-track losers and cutting thesis-failed winners — which is the entire art.'),

  q(4400339, 'Career Skills', CHAPTER, 'When to write an LP letter about a position',
    'A 7% position has compressed 32% on a regulatory event that materially weakens but does not destroy the thesis. The position is still in the book. When and how should this be communicated to LPs?',
    'In the next regularly scheduled letter, with a short, specific explanation of what happened, how the thesis has been re-rated, what the new forward case looks like, and what the PM has done with the size — proactive on the material change, no euphemisms, no surprise to LPs',
    [
      ['No need to mention it specifically — performance attribution at year-end will cover it', 'Material adverse events on top positions are exactly what LPs expect to read about contemporaneously. Burying it in year-end attribution is a trust failure that often outlasts the P&L hit itself.'],
      ['Issue an emergency interim letter to LPs the same week to demonstrate transparency', 'Emergency letters can themselves spook LPs. Unless the event is fund-survival critical, the next regular cycle with a clear write-up is the right cadence — proactive and specific, but not panicked.'],
      ['Mention it only if an LP specifically asks during a quarterly call', 'Reactive communication on a top-position event is the opposite of what builds trust. LPs read tone — letting them find out by asking signals that the PM hopes they will not.'],
    ],
    'LP communication on a material adverse event is one of the most quietly compounding parts of the PM job. Proactive, specific, and honest — explaining what happened, how the thesis has been re-rated, and what the PM has done with the position — builds the trust that survives a real drawdown later.'),

  // -------------------------------------------------------------------------
  // LIQUIDITY SCORING (4400340)
  // -------------------------------------------------------------------------
  q(4400340, 'Career Skills', CHAPTER, 'Days-to-exit at <20% of ADV',
    'You hold a $40M position in a stock with average daily volume of $25M. Your liquidity policy caps participation at 20% of ADV to keep impact low. How many trading days does a full exit take, and how does this shape sizing?',
    '$40M / ($25M × 20%) = 8 trading days for a clean exit — which means the position carries material liquidity risk and should either be sized smaller, monitored for ADV deterioration, or carried with the explicit understanding that any forced de-gross will take more than a week and incur impact',
    [
      ['Two days at 100% of ADV, which is the relevant calculation for an emergency exit', '100% of ADV is not "emergency" — it is impact-maximising. Real forced exits run at well below ADV because dumping the daily volume of a stock moves price against the seller violently. The 20% policy exists precisely to avoid that.'],
      ['One day, because the position is small in dollar terms relative to many institutional positions', 'Absolute dollars are not the right frame; the position is small only if exit liquidity is large. Against a $25M ADV, $40M is a large position by the only measure that matters at exit.'],
      ['Liquidity is not a sizing input for a long/short equity book', 'It very much is — every prime broker, risk team, and LP due-diligence pack asks for days-to-exit at low ADV participation. Treating it as irrelevant is exactly how a long/short fund finds itself unable to de-gross in stress.'],
    ],
    'Days-to-exit at a low ADV participation rate is the standard institutional liquidity metric. A position that takes more than a few days to exit cleanly carries real path risk in any de-grossing scenario, and the metric belongs in sizing decisions alongside conviction and asymmetry — not as a separate compliance afterthought.'),

  // -------------------------------------------------------------------------
  // PAIR-TRADE ATTRIBUTION (4400341)
  // -------------------------------------------------------------------------
  q(4400341, 'Career Skills', CHAPTER, 'Decomposing a pair-trade P&L',
    'A long/short pair (Long A vs Short B) generated +60bp net this quarter. Long A returned +12% on a $20M notional and Short B lost 6% on a $20M short. The "pair worked," but you suspect the attribution is more nuanced. What is the honest decomposition?',
    'Long A contributed +240bp and Short B contributed -120bp, netting to +120bp gross with slippage on legging out reducing the realised number to +60bp — the trade worked on the long leg, the short worked against the PM, and the apparent "pair success" hides that A simply beat B in a rising market rather than the pair providing market-neutral alpha',
    [
      ['The pair worked at +60bp, end of story', 'The headline number hides the leg-level story. The long made money in absolute terms, the short lost money in absolute terms, and the +60bp can come from a directional drift rather than from genuine relative-value alpha.'],
      ['The trade failed because the short leg lost money', 'A short losing money is not the same as the trade failing — in a rising market a short being down 6% while a long is up 12% can be a successful relative-value bet. The honest assessment is by relative performance, not absolute leg P&L.'],
      ['The slippage is irrelevant because it is execution, not strategy', 'Slippage on legging out is real P&L and a real input into whether pair trades are worth running at current size. Ignoring it overstates strategy alpha and understates the cost of running the pair structure.'],
    ],
    'Pair-trade attribution has to decompose into three things: long leg P&L, short leg P&L, and execution slippage on legging in and out. The headline net hides whether the relative-value thesis paid, whether the long simply outran the market, or whether execution costs are eating the edge — and the LP-facing story is honest only when all three are visible.'),
]
