# Quant Interview Advanced
*Price it, hedge it, simulate it, and say out loud what you assumed — the way a desk quant actually thinks.*

**ID**: `quantAdvanced` · **Discipline**: Finance · **Level**: Career

## Course Aim
Advanced quant interviews do not reward people who can recite the Black-Scholes formula. They reward people who can take a half-specified pricing or risk problem, name the model and its assumptions, derive or hedge the answer under pressure, see where the model breaks, and explain the whole thing to a trader who will not wait for the textbook version. This course trains that reasoning for the desk-facing loop most banks, hedge funds, and market-making firms run: a derivatives and no-arbitrage round, a stochastic-calculus and probability round, a numerical-methods and coding round, a rates or fixed-income round, and a risk-and-judgment conversation where the question is "would you trust this number with the firm's capital?"

The voice is that of a senior quant across the table who has shipped models that lost money and learned why. Every chapter hands you a concrete situation — a mispriced forward, a hedge that bleeds after a gap move, a Monte Carlo estimate that will not converge, a swap whose par rate you must reason about — and asks for the move, not the label. The wrong answers are the plausible-but-costly ones real candidates give: pricing under the physical measure when the question is risk-neutral, treating delta-hedging as risk-free, confusing the price of a derivative with its expected payoff, halving the error by halving the Monte Carlo paths. Knowing exactly why each of those is wrong is most of the signal the interviewer is listening for.

By the end you should be able to: replicate a payoff and price it by no-arbitrage; apply Ito's lemma and a change of measure without losing the drift term; explain why risk-neutral pricing works and what it does not claim about the real world; reason about every first- and second-order Greek and what a hedge does and does not protect against; build curves, compute DV01 and convexity, and find the par swap rate; design a simulation with the right variance control and an honest error bar; and discuss VaR, expected shortfall, and model risk like someone who knows the number can be confidently wrong. Above all, you should be able to state your assumptions, show your derivation, and say what would make you distrust your own answer.

## Course Design Notes
Chapters mirror the real interview loop so a learner can drill the round they have coming up. Chapter 1 maps the roles (researcher, trader, developer, model validator) and the rigor each round expects. Chapters 2 and 3 cover the derivatives core — no-arbitrage replication, then the Greeks and the volatility surface. Chapters 4 and 5 cover the mathematical engine: stochastic calculus and risk-neutral pricing, then numerical methods and simulation. Chapter 6 covers rates and fixed income. Chapter 7 covers risk, model risk, and the XVA vocabulary that comes up on derivatives desks. Chapter 8 is the mixed mock-desk round where topics collide and communication is graded as hard as the math.

Questions are scenario-first and demand a judgment, not a recall. Where a precise result or formula is the point — put-call parity, the risk-neutral drift, Ito's lemma applied to a function of a diffusion, the Monte Carlo error shrinking like 1/√N, DV01 — the lesson states it exactly so the learner leaves with the correct version rather than folk memory. Wrong answers are themselves common interview mistakes, each with a bespoke explanation of the distinction it blurs, so the learner can separate look-alikes: physical vs risk-neutral measure, price vs expected payoff, delta vs delta-hedged risk, local vs stochastic volatility, duration vs DV01, VaR vs expected shortfall, bias vs variance in an estimator. Numbers stay round so the learner reasons about mechanics, not arithmetic.

## Study Rhythm and How to Use This Course
Quant interview readiness is built by deriving things with your own hand, not by reading derivations. A workable cadence: take one chapter per sitting, and for each scenario try to produce the answer cold before reading the resolution — on a whiteboard or paper, talking through assumptions out loud as you would in the room. Treat the "Applied skills" as drills you can perform on demand, not topics you have seen. Keep a running "assumptions sheet": for every model in the course, write down what it assumes (constant vol, complete markets, no jumps, deterministic rates) so that in the interview you can name the assumption being violated the instant the question bends. The capstone is a full mixed loop; do it only once you can clear each round's drills individually, then debrief it against the rubric the way an interviewer would.

## Chapter 1: The Advanced Quant Interview Map
**Core questions**
- Is this a pricing, math, coding, rates, or judgment question — and what level of rigor does that round actually want?
- For the role I am targeting (researcher, trader, developer, validator), which rounds carry the most weight?
- When do I commit to a derivation, and when do I state assumptions and reason qualitatively?

**Key concepts**: quant researcher vs quant trader vs quant developer vs model-validation/risk roles; the desk-facing interview loop; whiteboard communication; "hint handling" (taking a nudge gracefully); precision vs speed; production constraints; the difference between an academically correct answer and a desk-useful one.

**Applied skills**: classify a prompt by type and target the right depth; build a role-specific prep map naming strengths, gaps, and drill priorities; restate a vague question as a precise one with named assumptions before solving.

**Common traps**: over-deriving a question that wanted a one-line intuition (burning the clock); giving a hand-wavy answer to a question that wanted the actual math; assuming every firm wants the same thing (a market maker prizes fast mental math and Greeks; a research role prizes derivations and stats); freezing on a hint instead of using it as the intended scaffold.

## Chapter 2: No-Arbitrage and Replication
**Core questions**
- What portfolio of traded instruments replicates this payoff?
- If the quoted price is wrong, what is the exact arbitrage trade, and what does it earn?
- Which single assumption is the price actually resting on?

**Key concepts**: the law of one price; static replication; forwards and the cost-of-carry forward price F = S·e^{(r−q)T}; futures vs forwards (margining and the convexity/correlation adjustment); put-call parity C − P = S − K·e^{−rT} (no model required); arbitrage bounds on option prices; swaps as portfolios of forwards; the role of a complete market.

**Applied skills**: build the replicating portfolio for a given payoff and read its price off the cost of the replication; construct the explicit arbitrage when put-call parity is violated; derive the fair forward price from carry; explain why an arbitrage argument needs no probabilities or volatility.

**Common traps**: pricing a derivative as the expected payoff discounted at the riskless rate under the *physical* probabilities (replication, not expectation, sets the no-arb price); forgetting the dividend/carry yield in the forward; assuming futures and forwards have identical prices when rates and the underlying are correlated; treating put-call parity as model-dependent (it is pure arbitrage and holds regardless of Black-Scholes); ignoring funding/borrow costs that make the "free" arbitrage cost real money.

## Chapter 3: Options, Greeks, and the Volatility Surface
**Core questions**
- After a large move, why is my delta hedge suddenly wrong, and what does gamma cost me?
- Why does implied volatility smile or skew, and what is the market saying when it does?
- Which Greek actually carries the risk in this position?

**Key concepts**: delta, gamma, vega, theta, rho; the theta-gamma tradeoff (long gamma pays in realized moves but bleeds theta); vanna and volga as second-order vol risks; implied volatility and the volatility surface; equity skew vs FX smile; local volatility (a deterministic function fitting today's surface) vs stochastic volatility (vol itself is random, as in Heston); hedging error from discrete rebalancing; sticky-strike vs sticky-delta intuition.

**Applied skills**: explain the P&L of a delta-hedged long-gamma book in terms of realized vs implied variance; identify the dominant Greek in a given position and the move that hurts it; read a skew and state what fear or supply/demand it reflects; distinguish what a local-vol model can and cannot reprice (it fits vanillas but misgives forward-skew dynamics).

**Common traps**: calling a delta-hedged option "risk-free" (it is short gamma/vega and exposed to realized vol and the rebalancing frequency); confusing implied volatility (a price quoted in vol units) with a forecast of realized volatility; thinking a single Black-Scholes volatility can fit the whole surface; conflating local volatility with stochastic volatility; forgetting that gamma and vega are largest near the money and near expiry, so the hedge that was cheap yesterday is dangerous today.

## Chapter 4: Stochastic Calculus and Risk-Neutral Pricing
**Core questions**
- What process is being assumed, and what term does Ito's lemma add that ordinary calculus would miss?
- What does "risk-neutral" actually mean, and why are we allowed to price by expectation under it?
- What changes when I switch from the physical measure P to the pricing measure Q?

**Key concepts**: Brownian motion and its quadratic variation ((dW)² = dt); geometric Brownian motion dS = μS dt + σS dW; Ito's lemma and the extra ½σ²S²∂²f term; martingales and the martingale property of discounted prices under Q; the change of measure / Girsanov theorem (it changes the drift, not the volatility); risk-neutral valuation as discounted expected payoff under Q with the drift replaced by the risk-free rate; the Black-Scholes PDE as the hedging argument's other face; the Feynman-Kac link between PDE and expectation.

**Applied skills**: apply Ito's lemma to a function of a GBM (e.g. derive d(log S)); state why the stock drifts at r — not μ — under Q and what that does and does not say about the real world; explain why discounted prices being martingales under Q is equivalent to no-arbitrage; connect the replication PDE and the risk-neutral expectation as two routes to the same price.

**Common traps**: dropping the second-order Ito term and treating dS like an ordinary differential; believing risk-neutral pricing assumes investors are risk-neutral or that the stock will actually grow at r (it is a pricing device, not a forecast); thinking the change of measure alters volatility (Girsanov shifts the drift; σ is invariant); confusing the real-world expected payoff with the price; assuming risk-neutral pricing still works cleanly when the market is incomplete (then the measure is not unique).

## Chapter 5: Numerical Methods and Simulation
**Core questions**
- Will this Monte Carlo estimate converge, and how fast — and is it biased before it is noisy?
- Which numerical scheme fits this problem: simulation, a PDE grid, or a tree?
- What instability or discretization error could quietly corrupt the result?

**Key concepts**: Monte Carlo and the standard error shrinking like 1/√N (halving the error costs 4× the paths); variance reduction (antithetic variates, control variates, importance sampling); bias from time-discretization (Euler-Maruyama) vs sampling noise; finite-difference schemes for the pricing PDE (explicit vs implicit) and stability conditions; binomial/trinomial trees and convergence to Black-Scholes; pseudo- vs quasi-random (low-discrepancy) sequences; calibration as inverse problem.

**Applied skills**: estimate how many paths a target standard error needs and recognize the 1/√N wall; pick a variance-reduction technique suited to the payoff; choose between Monte Carlo (high dimension, path-dependence) and a PDE grid (low dimension, early exercise); diagnose whether an error is bias (wrong even with infinite paths) or variance (noisy but unbiased).

**Common traps**: thinking more paths fix a *biased* estimator (they shrink variance, not bias — fix the discretization or the estimator instead); claiming doubling the paths halves the error (it cuts it by √2); using an explicit finite-difference scheme past its stability limit and watching the grid explode; using Monte Carlo for a low-dimensional American option where a tree or PDE handles early exercise better; reporting a price with no standard error or convergence check.

## Chapter 6: Rates and Fixed Income
**Core questions**
- How does this bond or swap respond to a curve move, and is the move parallel or a twist?
- What is the par swap rate, and what is it really an average of?
- Which curve-construction assumption is hidden inside this quoted number?

**Key concepts**: discount factors and the zero/spot curve; bootstrapping a curve from market instruments; duration vs DV01 (price sensitivity per 1bp); convexity (the second-order, always-favorable-to-a-long curvature); forward rates; par swap rate as the fixed rate that makes a swap worth zero at inception; the multi-curve world (separate discounting and forecasting curves post-2008); basis risk; carry and roll-down.

**Applied skills**: compute a bond's price change from duration and add the convexity correction; bootstrap a short curve from deposits and swaps; derive a par swap rate as a discount-factor-weighted average of forwards; reason about the P&L of a steepener or flattener under a non-parallel shift.

**Common traps**: confusing duration (a percentage sensitivity, in years) with DV01 (a dollar/price sensitivity per basis point); ignoring convexity so a large yield move's P&L is mis-estimated (and missing that convexity helps the long bondholder); assuming a single curve for both discounting and projecting cash flows (OIS-discounting changed this); treating a parallel shift as the only risk when the position is really a curve-shape bet; forgetting that the par rate is forward-weighted, not a simple average.

## Chapter 7: Risk, Model Risk, and XVA
**Core questions**
- Which risk measure actually answers the question being asked?
- What scenario or assumption breaks this model, and would I know before it cost money?
- What would a model-validation review challenge first?

**Key concepts**: Value-at-Risk (a quantile of the loss distribution) vs expected shortfall / CVaR (the average loss in the tail, and a coherent, sub-additive measure); historical vs parametric vs Monte Carlo VaR; stress testing and scenario analysis; the limits of VaR (says nothing about the tail beyond the quantile, and is not sub-additive); counterparty credit risk; the XVA family — CVA (counterparty default), DVA (own default), FVA (funding); model risk as the risk the model itself is wrong; backtesting.

**Applied skills**: pick VaR vs expected shortfall for a given question and justify it; describe a stress scenario that a normal-distribution VaR would miss; explain why expected shortfall is preferred under Basel and what coherence (sub-additivity) buys you; sketch what a validation team checks (assumptions, calibration stability, backtest exceptions, P&L explain).

**Common traps**: treating VaR as a maximum loss ("we won't lose more than this") rather than a quantile that is silently breached in the tail; using VaR where you need the tail and forgetting it can fail sub-additivity (diversification can look like it *increases* VaR); assuming returns are normal and undercounting fat tails; ignoring that a model calibrated to recently calm markets understates risk; confusing CVA (their default) with DVA (your own), and double-counting funding.

## Chapter 8: The Mixed Mock-Desk Round
**Core questions**
- When a prompt spans pricing, math, and risk at once, what result actually matters to the desk?
- Can this model be implemented reliably under real production constraints?
- How do I explain the tradeoff to a trader or a non-specialist without dumbing it down or drowning them?

**Key concepts**: multi-topic prompts that chain replication → model → simulation → risk; using hints as scaffolding; trading precision against speed; communicating an assumption and its consequence in one breath; the gap between a correct number and a *trustworthy, shippable* number; knowing when to say "I'd check X before I'd trust this."

**Applied skills**: drive a single derivatives prompt from payoff to price to hedge to risk number, narrating assumptions throughout; produce a mock-interview debrief separating technical misses from communication misses and naming the next drill; defend a modeling choice against a skeptical follow-up.

**Common traps**: solving the math perfectly but never saying what it means for the desk; chasing rigor the interviewer did not ask for and running out of time; presenting a result with no error bar, no assumption stated, and no caveat; getting flustered by a hint instead of treating it as the intended next step; explaining to a non-specialist with jargon that hides rather than reveals the tradeoff.

## Capstone
Run a 75-minute mixed quant interview loop on a single derivatives situation (for example, "we are asked to make a market in a one-year option on a non-dividend stock and hedge it"):
- a **no-arbitrage / replication** problem: state the replicating portfolio and price it, and construct the explicit arbitrage if a quoted price violates put-call parity
- a **stochastic-calculus** explanation: apply Ito's lemma to the assumed process and explain, in plain English, why the stock is priced as if it drifts at r under Q
- a **Greeks / hedging** analysis: describe the delta-hedged book's P&L in terms of realized vs implied vol and identify the move that hurts it most
- a **numerical-methods** design: specify a Monte Carlo or PDE scheme to price the trade, with a variance-reduction choice, a convergence check, and an honest standard error
- a **rates** calculation: compute the discount factor and DV01 the trade is sensitive to, and reason about a non-parallel curve move
- a **risk / model-risk** discussion: choose VaR vs expected shortfall for the desk's question, name one scenario that breaks the model, and say what you would validate before trusting the number

Submit the worked artifacts plus a short reflection naming the assumption you were least sure about, the round where your *communication* (not your math) was weakest, and exactly what would change your answer.

## Assessment Ideas
- Replication and rates drills graded on financial intuition and calculation control, with assumptions stated *before* the solution.
- Stochastic-calculus and numerical prompts graded on the correctness of the Ito term, the measure used, and whether bias and variance are distinguished — not just on the final number.
- Greeks and risk answers graded on whether the candidate names the dominant risk and the move that breaks the hedge, and chooses VaR vs expected shortfall for a stated purpose.
- Capstone graded on integrated desk judgment, derivation rigor, communication to a non-specialist, and the quality of the "what would change my mind" reflection.

## Research Notes
- MIT OCW 18.S096 / Topics in Mathematics with Applications in Finance (Ito calculus, Black-Scholes, stochastic models): https://ocw.mit.edu/courses/18-642-topics-in-mathematics-with-applications-in-finance-fall-2024/
- Baruch MFE Pre-MFE and Probability/Stochastic Processes for Finance (MTH 9831): https://mfe.baruch.cuny.edu/pre-mfe-program/ and https://mfe.baruch.cuny.edu/mth-9831/
- CFA Institute derivatives refresher readings (swaps, forwards, futures, no-arbitrage pricing): https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/swaps-forwards-futures-strategies
- Hull, *Options, Futures, and Other Derivatives* (the desk standard for Greeks, no-arbitrage, and rates) — referenced for put-call parity, DV01/convexity, and VaR vs expected shortfall.
- Shreve, *Stochastic Calculus for Finance II* (Ito's lemma, Girsanov change of measure, risk-neutral pricing, Feynman-Kac).
- Basel Committee FRTB move from VaR to expected shortfall as the regulatory tail-risk measure (coherence / sub-additivity rationale).
