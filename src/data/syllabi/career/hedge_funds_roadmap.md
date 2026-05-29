# Hedge Funds Roadmap
**ID**: `hedgeFundsRoadmap` · **Discipline**: Finance · **Level**: Career

## Course Aim
A hedge fund is paid to do one thing an index fund cannot: make money that the market did not hand to everyone for free. Stripping the mystique away, the job of an analyst at a long/short, event-driven, macro, or credit fund is to find a view the market has priced wrong, express that view in a way that survives being wrong, and earn a return that is not just the market going up. The discipline is built on a single hard distinction — alpha versus beta. Beta is rented; you do not get paid for it. Alpha is the residual after you strip out market exposure, factor exposure, and luck, and it is brutally scarce. This course teaches the repeatable craft of generating and defending it: form a thesis grounded in variant perception, size it against an honest downside, structure the position so a squeeze or a factor lurch does not blow you up, track the catalyst, and explain afterward — without flinching — what actually made or lost the money.

The emphasis throughout is on downside discipline and decision rules, not stock-picking flair. Anyone can love a name; the skill is knowing exactly what you believe that consensus does not, what evidence supports the gap, what would prove you wrong, and how much you can lose before the thesis is broken rather than merely uncomfortable. You will work in the perspective of a fund that answers to limited partners and a risk desk: positions have borrow costs and liquidity constraints, shorts can be force-covered, "crowded" trades unwind violently regardless of fundamentals, and a 20% drawdown can trigger redemptions that end the fund before the thesis ever plays out. The work is evidence-led and skeptical by design — a beautiful narrative with no falsifier is not a thesis, it is a hope.

By the end, a learner should be able to take a real or assigned situation and produce a desk-grade investment view: a strategy-and-edge frame that says where alpha could plausibly come from, a thesis note stating the consensus being bet against and the variant view, a scenario model that puts an expected value and a maximum loss on the trade, a risk memo covering sizing, borrow, liquidity, and factor exposure, and a portfolio decision — add, hold, trim, or exit — defended by attribution rather than by the story. The goal is not conviction; it is conviction that is sized, hedged, falsifiable, and honestly reviewed.

## Course Design Notes
The course follows the real arc of a position's life at a fund: understand the strategy and where its edge could come from, form a thesis, model it under scenarios, structure and risk-control it (with special attention to the short side, where the asymmetry is hostile), then review it in the portfolio and attribute what happened. Each chapter assumes the prior ones, mirroring how an analyst actually builds and defends a book. Route questions here when they test long/short and event-driven research, variant perception, catalysts, scenario and expected-value work, short selling and crowding, position sizing and risk control, portfolio construction, performance attribution, drawdown discipline, fund structure and fees, or investor reporting. Keep numerical examples on round figures so learners reason about sizing and expected-value mechanics rather than arithmetic. Keep every answer anchored to the chain that defines the discipline: a variant view, supported by evidence, expressed as a sized position, hedged against the risk that is not the thesis, with a catalyst and a falsifier — and reviewed honestly afterward. Common traps are flagged in every chapter, because at a fund the expensive mistakes are subtle: the "uncorrelated" return that is really leverage, the cheap short that gets squeezed, the great call that lost money because the sizing was wrong.

## Desk Rhythm and How to Use This Course
Investment conviction at a fund is built in layers, and skipping a layer is how analysts blow up. The working rhythm: define what the strategy is allowed to do and where edge lives, then form the variant thesis, then model the scenarios and the loss, then structure and size the position and control its risk, then live with it in the portfolio and attribute the outcome. Treat each chapter's "Applied skills" as a deliverable you could hand a portfolio manager or a risk committee, not a reading. A realistic cadence is one situation per chapter for practice and one full position for the capstone. Keep a running "thesis tracker" across the whole course — the variant view, the catalyst, the falsifiers, and the position's status — because at a fund the discipline that separates analysts from gamblers is written down before the trade, not rationalized after it.

| Layer | What you produce | Decision it supports |
|---|---|---|
| Strategy and edge | Mandate, edge source, risk limits | Is this even our kind of trade? |
| Thesis | Consensus view vs variant view, evidence, catalyst | What do we believe that the market doesn't? |
| Scenario and EV | Base/upside/downside model, expected value, max loss | Is the risk-reward worth it? |
| Structure and risk | Sizing, borrow, liquidity, factor and hedge plan | Can we hold this without being blown out? |
| Portfolio and review | Attribution, thesis status, action | Add, hold, trim, or exit? |

## Chapter 1: Strategy, Mandate, and the Source of Edge
**Core questions**
- What is this fund actually allowed to do — what instruments, what exposures, what leverage — and what is off the table?
- Where could genuine edge come from: information, analysis, structural constraints on other players, or behavior — and is it durable or already arbitraged away?
- In any given return, how much is alpha and how much is just market or factor beta you are being paid as if it were skill?

**Key concepts**: the major strategy families (long/short equity, event-driven/merger arbitrage, global macro, relative value, credit/distressed, quant/systematic) and what each is hunting; gross exposure, net exposure, and leverage; alpha vs beta and factor exposure; the three classic edges (informational, analytical, behavioral) plus structural/regulatory edge; market efficiency and why mispricings persist (constraints, mandates, forced sellers); the mandate, risk limits, and benchmark; absolute return vs relative return.

**Applied skills**
- Write a strategy brief: the mandate, the specific source of edge being claimed, the risk limits (gross/net, position size, sector caps), and two example trades the mandate permits.
- Decompose a stated return into market beta, factor exposure, and residual, and judge how much "alpha" is actually rented exposure.

**Common traps**
- Calling a return "uncorrelated alpha" when it is really hidden beta or leverage that simply hasn't met its bad month yet.
- Claiming an informational edge that is either illegal (material non-public information) or long since competed away by faster players.
- Confusing a strategy with an edge — "we do long/short equity" describes the toolkit, not the reason the fund should make money.

## Chapter 2: Thesis Formation and Variant Perception
**Core questions**
- What does the market currently believe and have priced in — and can you state it fairly, in the consensus's own terms?
- What, specifically, do you believe that consensus does not, and what hard evidence supports the gap rather than just a contrarian instinct?
- Why is the price wrong now, and what will make the market come around — the catalyst and its timing?

**Key concepts**: variant perception (a differentiated, evidence-backed view, not mere contrarianism); the consensus/expectations bar and what is "priced in"; the catalyst (the specific event that re-rates the view) and the difference between a thesis and a story with no trigger; estimate revisions as the engine of stock moves; primary research, channel checks, and the mosaic theory; positioning and sentiment; the time horizon over which the thesis should work; falsifiers — what would prove the thesis wrong.

**Applied skills**
- Write a thesis note: the consensus view stated fairly, the variant view, the evidence for the gap, the catalyst path with timing, and an explicit list of falsifiers.
- Separate "differentiated and supported" from "contrarian and unsupported" by forcing every variant claim to name the evidence and the catalyst behind it.

**Common traps**
- A "variant" view that is actually consensus dressed up — agreeing with the Street is not an edge, however confidently it's stated.
- A thesis with no catalyst and no timing: being right eventually is indistinguishable from being wrong while your capital is locked up and your LPs are watching.
- Building a thesis with no falsifier, so that every outcome — up, down, sideways — gets reinterpreted as confirmation.

## Chapter 3: Modeling, Scenarios, and Expected Value
**Core questions**
- Which one or two assumptions actually drive the outcome, and what is the market implicitly assuming about them?
- Across a base, upside, and downside case, what is the probability-weighted expected value of the trade — and is the risk-reward skewed in your favor?
- If the thesis is wrong, how much do you lose, and is that loss survivable at the size you intend to trade?

**Key concepts**: driver-based modeling and isolating the swing factor; what is "priced in" and reverse-engineering the market's implied assumptions; upside/base/downside cases and honest probability weighting; expected value and the valuation gap; risk-reward asymmetry (the convex setup: limited downside, larger upside); sensitivity analysis; decision triggers tied to model outputs; the difference between a wide range of outcomes (uncertainty) and a bad expected value.

**Applied skills**
- Build a scenario model with base/upside/downside cases, assign probabilities, and compute an expected value and the maximum loss in the downside case.
- Run a sensitivity table on the single most important driver and identify the level at which the thesis breaks rather than merely disappoints.

**Common traps**
- A single point-estimate target with no downside case — a model that can only be right is a marketing document, not analysis.
- Anchoring probabilities to make the expected value come out positive, instead of letting honest probabilities decide whether the trade is worth doing.
- Confusing a high upside with a good trade while ignoring that a fat, probable downside can make the expected value negative.

## Chapter 4: Shorts, Crowding, and Risk Control
**Core questions**
- Can this view be expressed on the short side safely — what is the borrow, the cost, and the recall risk — or is the asymmetry too hostile to bother?
- What could force you to cover at the worst time: a squeeze, a recall, a crowded unwind, a factor lurch that has nothing to do with your thesis?
- After hedging out the exposures you are not paid for, what is the true, isolated bet — and is it sized so a bad week is uncomfortable, not fatal?

**Key concepts**: short mechanics (locating and borrowing stock, borrow cost/rebate, recall, hard-to-borrow names); the unlimited-loss asymmetry of shorts vs the bounded loss of longs; short squeezes and gamma/positioning-driven moves; crowded trades and correlated unwinds; pair trades and hedging out market and factor beta (long/short, beta-neutral, dollar-neutral); factor exposure (value, momentum, size, quality) as risk you may not realize you own; liquidity and days-to-cover; stop-loss and pre-mortem discipline; position sizing as the actual risk decision.

**Applied skills**
- Write a risk memo for a position: sizing rationale, borrow availability and cost (if short), liquidity and days-to-exit, factor and sector exposures, the hedge structure, and explicit exit rules.
- Convert a directional idea into a hedged expression (pair or beta-neutral) and show what residual exposure remains after the hedge.

**Common traps**
- Treating a short like a mirror-image long and ignoring that losses are unbounded, borrow can be pulled, and the crowd can force you out before fundamentals matter.
- Owning a "stock-specific" thesis that is really a leveraged bet on a factor (momentum, value) that can reverse for reasons unrelated to the name.
- Sizing by conviction rather than by downside — the great thesis sized too large is how funds turn a correct call into a fatal drawdown.

## Chapter 5: Portfolio Construction, Drawdowns, and Risk Limits
**Core questions**
- How do the individual positions combine — are the "diversified" bets actually correlated, sharing a hidden factor or theme?
- What is the portfolio's net and gross exposure, its concentration, and its sensitivity to a market or factor shock?
- What drawdown can the fund actually survive operationally — given redemption terms, gates, and LP patience — before the thesis-horizon argument becomes moot?

**Key concepts**: position sizing across a book and correlation between "independent" ideas; net/gross exposure management and leverage; concentration vs diversification and diworsification; portfolio-level factor and beta exposure; drawdown, maximum drawdown, and the math of recovery (a 50% loss needs a 100% gain); risk limits, stop-loss policy, and the risk manager's role; redemption terms, lock-ups, gates, and side pockets as constraints on holding power; the distinction between a position-level risk and a fund-survival risk.

**Applied skills**
- Build a simple book-level exposure view: net/gross, top concentrations, sector and factor tilts, and the correlation hiding inside nominally separate positions.
- Stress the portfolio against a market drop and a factor reversal, and translate the loss into a drawdown the fund's redemption terms can or cannot survive.

**Common traps**
- Mistaking many positions for diversification when they are all the same trade — long quality, short junk; or every name geared to one rate or commodity.
- Managing each position's risk in isolation while the portfolio quietly concentrates into one factor that takes the whole book down together.
- Ignoring that drawdowns trigger redemptions: a thesis that needs three years cannot be held in a fund that loses its capital base in month six.

## Chapter 6: Performance Attribution and Knowing When You Were Wrong
**Core questions**
- What actually made and lost money — security selection (alpha) or just market and factor exposure (beta) you happened to own?
- Did the thesis play out as written, or did you make money for a reason that has nothing to do with your call (and should therefore worry you)?
- Has the evidence changed or only the price — and which one should change the position?

**Key concepts**: performance attribution (return decomposed into selection, allocation, factor, and market); gross vs net return and the impact of fees; hit rate (batting average) vs slugging (win/loss size) and why a low hit rate can still win; contribution and attribution analysis; thesis tracking vs price-following; falsification and the discipline of an exit rule; sunk-cost, confirmation, and disposition bias; the difference between being right for the right reason and being lucky; the add/hold/trim/exit decision.

**Applied skills**
- Write a portfolio review for one position: P&L attribution (what drove it), thesis status against the original falsifiers, risk changes, and a defended add/hold/trim/exit recommendation.
- Distinguish, for a winning trade, whether the gain came from the thesis or from beta/luck — and decide whether the position still deserves its size.

**Common traps**
- Crediting skill for a gain that was really beta, then sizing up into a market exposure you mistook for an edge.
- Holding a losing position because exiting means admitting the call was wrong, while quietly redefining the thesis so it can never be falsified.
- Treating a falling price as new information when nothing fundamental has changed — or ignoring genuinely changed fundamentals because the price hasn't moved yet.

## Chapter 7: Fund Structure, Fees, Liquidity, and Investor Reporting
**Core questions**
- How is the fund structured and paid — and how do "2 and 20," high-water marks, and hurdles align (or misalign) the manager with the LPs?
- What liquidity has the fund promised investors, and does it match the liquidity of what it actually holds?
- What must be disclosed to LPs and regulators, and what does honest investor reporting look like in a bad month?

**Key concepts**: the master-feeder/limited-partnership structure and the GP/LP relationship; management fee and performance fee/carry, high-water marks, hurdle rates, and crystallization; lock-ups, redemption notice periods, gates, and side pockets; the liquidity-mismatch risk (illiquid holdings against quarterly redemptions); prime brokers, leverage, and counterparty risk; key regulatory touchpoints (accredited/qualified investors, the accredited-investor standard, SEC adviser registration and Form ADV/Form PF, 13F holdings disclosure, material non-public information and insider-trading lines); the investor letter and honest reporting of attribution, exposure, and risk.

**Applied skills**
- Lay out a fund's fee and liquidity terms and explain where they align manager and investor interests and where they create perverse incentives (e.g., a deeply underwater high-water mark, or gates that trap LPs).
- Draft the core of an investor letter for a down quarter: honest attribution, current exposure and risk, what was wrong, and what the manager is doing about it.

**Common traps**
- Assuming fees are frictionless — "2 and 20" compounds into a large share of gross return, and a fund must generate real alpha just to beat a cheap index after fees.
- Promising monthly liquidity while holding positions that take quarters to exit — the mismatch is invisible until everyone redeems at once.
- Treating compliance lines (MNPI, accredited-investor rules, Form PF) as paperwork rather than the bright lines that end careers and funds when crossed.

## Capstone: Full Hedge Fund Pitch Packet
Take one situation — a fictional or real long, short, or event-driven idea — and produce a complete, PM-ready pitch packet:
- a strategy-fit note: which strategy this is, the source of edge claimed, and how it sits inside a stated mandate and risk limits;
- a thesis note: consensus view stated fairly, the variant view, the supporting evidence, the catalyst path with timing, and explicit falsifiers;
- a scenario model: base/upside/downside cases with probabilities, an expected value, the single key sensitivity, and the maximum loss;
- a risk memo: position sizing, borrow and liquidity (if short), factor and sector exposure, the hedge structure, and exit rules;
- a portfolio fit-and-review note: how it changes net/gross and concentration, what it correlates with, and the attribution you would expect;
- a one-line verdict — buy, short, pass, or "trade it, but only this way and this size" — with the single strongest argument for and against.

## Assessment Ideas
- Strategy-and-edge brief with alpha/beta decomposition
- Variant-perception thesis note (consensus vs variant, with falsifiers)
- Scenario model and expected-value / max-loss lab
- Short-side risk memo: borrow, squeeze, crowding, factor exposure
- Hedge-construction drill (pair / beta-neutral expression)
- Portfolio exposure and correlation stress test
- Performance-attribution exercise (alpha vs beta vs luck)
- Add/hold/trim/exit decision with thesis-tracker update
- Fund-terms and investor-letter critique (fees, liquidity, disclosure)
- Capstone pitch packet and PM defense

## Research Notes
- Strategy taxonomy (long/short equity, event-driven/merger arb, global macro, relative value, credit/distressed, quant) and the alpha-vs-beta / factor-exposure framing reflect standard hedge-fund and investment-management references (CFA Institute curriculum on alternative investments, Pedersen's *Efficiently Inefficient*).
- Variant perception, catalyst-driven theses, and estimate-revision logic follow conventional long/short research practice; the "differentiated and supported, not merely contrarian" framing is standard buy-side discipline.
- Short-selling mechanics (borrow, recall, squeeze), crowding/correlated-unwind risk, and factor exposure align with documented market structure; sizing-as-the-real-risk-decision and drawdown math are standard risk-management points.
- Fee structures ("2 and 20," high-water marks, hurdles), liquidity terms (lock-ups, gates, side pockets), and structure (master-feeder, GP/LP) reflect conventional hedge-fund industry practice.
- Regulatory touchpoints (accredited/qualified investors, SEC adviser registration, Form ADV/Form PF, 13F disclosure, MNPI/insider-trading lines) reflect the U.S. framework; specifics and thresholds should be confirmed against current SEC sources before teaching as settled detail, as rules and dollar thresholds are periodically updated.
