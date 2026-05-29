# Phase 2 Review — Finance

**78 questions** · core: 8 · advanced: 70

Source: [`src/data/questionCatalog/quant.ts`](../../../../src/data/questionCatalog/quant.ts) · Track membership lives in `CORE_QUESTION_IDS`

**How to use this packet**

For each row decide: **keep** (in current track), **flip** (move between Core ↔ Advanced), **delete** (note: irreversible), or **rewrite** (call out what's wrong).

Track moves apply by editing `CORE_QUESTION_IDS` in [quant.ts](../../../../src/data/questionCatalog/quant.ts). Add an ID to make it Core; remove to send to Advanced.

---

| # | ID | Track | Title | Prompt (truncated) | Correct |
|---:|---:|---|---|---|---|
| 1 | 19301 | ⚪ adv | Put-Call Parity | What is the put-call parity formula for a European option on a non-dividend paying stock? | C - P = S - K * e^(-rt) |
| 2 | 19303 | ⚪ adv | American Call Exercise | Why is it never optimal to exercise an American call option early on a non-dividend paying stock? | The option's time value is always positive; you can sell it… |
| 3 | 19305 | ⚪ adv | Delta of ATM Call | What is the approximate Delta of an at-the-money (S=K) European call option near maturity? | 0.5 |
| 4 | 19306 | ⚪ adv | Gamma near Maturity | What happens to the Gamma of an at-the-money option as it approaches maturity? | It approaches infinity at the strike, while gamma away from… |
| 5 | 19308 | ⚪ adv | Black-Scholes Assumptions | Which of the following is *violated* by real markets and so is NOT a Black-Scholes assumption? | Volatility is stochastic and changing |
| 6 | 19310 | ⚪ adv | Theta | For a long vanilla option portfolio, what is the typical sign of Theta (time decay)? | Negative |
| 7 | 19311 | ⚪ adv | Bull Spread | What is a bull call spread? | Long a call with strike K1 and short a call with strike K2… |
| 8 | 19312 | ⚪ adv | Binary Options | What is the payoff of a binary (digital) call option? | A fixed amount (e.g., $1) if the stock is above the strike… |
| 9 | 19313 | ⚪ adv | Exchange Options | What is an exchange option? | An option to exchange one asset for another (e.g., Asset A… |
| 10 | 19314 | ⚪ adv | Black-Scholes d1 and d2 | In the Black-Scholes formula, what does N(d2) represent? | The risk-neutral probability that the option expires in the… |
| 11 | 19315 | ⚪ adv | Vega | Your MD shouts across the desk, "What's our Vega exposure?!" What is he asking for? | Sensitivity of option price to changes in implied volatilit… |
| 12 | 19316 | ⚪ adv | Rho | The Fed just unexpectedly hiked rates by 50 bps. Which Greek tells you how much your options book will bleed or profit… | Sensitivity of option price to changes in interest rates. |
| 13 | 19317 | ⚪ adv | Straddle Gamma | What is the Gamma of a long straddle (Long Call + Long Put same strike)? | Twice the Gamma of a single option (very high). |
| 14 | 19318 | ⚪ adv | Theta-Gamma Trade-off | In the Black-Scholes PDE, what is the relationship between Theta and Gamma? | Theta + 0.5 * sigma^2 * S^2 * Gamma + rS * Delta = rV |
| 15 | 19319 | ⚪ adv | Implied Volatility Smile | What is the "Volatility Smile"? | The pattern where OTM puts and calls have higher implied vo… |
| 16 | 19320 | ⚪ adv | Asian Options | You need to hedge jet fuel costs for an airline, but spot prices are notoriously spiky. What exotic option would let yo… | An option whose payoff depends on the average price of the… |
| 17 | 19321 | ⚪ adv | Barrier Options | A client wants a cheaper call option and says, "I only want the upside, but if the stock tanks below $80, just tear up… | An option that becomes worthless if the underlying hits a c… |
| 18 | 19322 | ⚪ adv | Lookback Options | A trader jokes they want an option that lets them time-travel to the absolute bottom of the market to buy. What exotic… | An option whose payoff depends on the maximum or minimum pr… |
| 19 | 19323 | ⚪ adv | Risk-Neutral Martingale | In the risk-neutral measure, which process is a martingale? | The discounted stock price (S_t / B_t) |
| 20 | 19324 | ⚪ adv | Put Delta | What is the Delta of a European Put option in Black-Scholes? | N(d1) - 1 (or -N(-d1)) |
| 21 | 19325 | ⚪ adv | CVA | What is Credit Valuation Adjustment (CVA)? | An adjustment to the value of a derivative to account for c… |
| 22 | 19326 | ⚪ adv | Correlation Swap | What is a Correlation Swap? | A derivative where the payoff is based on the realized aver… |
| 23 | 19327 | ⚪ adv | Variance Swap | What is a Variance Swap? | A derivative with a payoff proportional to the difference b… |
| 24 | 19328 | ⚪ adv | Model Risk | What is "Model Risk" in quantitative finance? | The risk that a financial model is incorrect or used inappr… |
| 25 | 19330 | ⚪ adv | BS PDE Boundary | What is the boundary condition for a European Call at S=0? | Value = 0 |
| 26 | 19331 | ⚪ adv | Drift and Pricing | Two stocks have the same volatility but different drifts. How do their European call prices compare? | They are identical because pricing is done in the risk-neut… |
| 27 | 19332 | ⚪ adv | Time-Dependent Vol | How do you price an option if volatility is a deterministic function sigma(t)? | Use the Black-Scholes formula with the root-mean-square ave… |
| 28 | 19333 | ⚪ adv | American Call Early Exercise | Is it ever optimal to early exercise an American Call on a non-dividend paying stock? | No, it is always better to wait or sell the option. |
| 29 | 19334 | ⚪ adv | American Put Early Exercise | Is it ever optimal to early exercise an American Put? | Yes, if the stock price is low enough to offset the loss of… |
| 30 | 19335 | ⚪ adv | ATM Call Rule of Thumb | What is a good approximation for the value of an ATM 1-month call with S=100 and 20% vol? | Approximately 0.4 * S * sigma * sqrt(T) |
| 31 | 19336 | ⚪ adv | Volatility to Infinity | What happens to the price of a European Call as volatility tends to infinity? | It tends to the current stock price S. |
| 32 | 19337 | ⚪ adv | Mean Reversion | Does mean reversion in the stock price affect European option pricing in the Black-Scholes model? | No, because the drift is replaced by the risk-free rate in… |
| 33 | 19338 | ⚪ adv | Call Convexity | The price of a call option is a _____ function of the strike price K. | Convex |
| 34 | 19339 | ⚪ adv | Static Hedge Error | What is the "Stop-Loss" hedging trap (buying at S=K, selling at S=K)? | Transaction costs and "whipsawing" as the stock crosses the… |
| 35 | 19340 | ⚪ adv | Forward Price | What is the 1-year forward price of a $100 stock with 5% rates and a $2 dividend in 6 months? | 100 * e^0.05 - 2 * e^(0.05 * 0.5) |
| 36 | 19341 | ⚪ adv | Digital Option Replication | How do you replicate a digital call (pays 1 if S > K) using vanilla calls? | A tight bull spread: (Call(K-e) - Call(K+e)) / 2e. |
| 37 | 19342 | ⚪ adv | Put-Call Parity (Dividends) | What is the Put-Call Parity formula for a stock with a continuous dividend yield q? | C - P = S*e^(-qT) - K*e^(-rT) |
| 38 | 19343 | ⚪ adv | Butterfly Spread | What does a Butterfly Spread (Long K1, Short 2*K2, Long K3) bet on? | Low volatility; the stock price staying near the middle str… |
| 39 | 19344 | ⚪ adv | Delta of a Call | In Black-Scholes, what is the Delta of a European Call? | N(d1) |
| 40 | 19345 | ⚪ adv | Gamma of an Option | What does Gamma represent? | The rate of change of Delta with respect to the stock price. |
| 41 | 19346 | ⚪ adv | Theta of a Call | Is the Theta of a European Call usually positive or negative? | Negative (time decay) |
| 42 | 19347 | ⚪ adv | Vega and Maturity | How does Vega change as time to maturity increases? | Vega increases with maturity (longer options are more sensi… |
| 43 | 19348 | ⚪ adv | Straddle | What is a Straddle? | Buying both a call and a put with the same strike and matur… |
| 44 | 19350 | 🟢 core | Vega of a Forward | What is the Vega of a forward contract? | 0 |
| 45 | 19351 | 🟢 core | Put-Call Parity (European) | Does Put-Call Parity hold for American options? | No, only as an inequality (C - P >= S - K*e^-rT). |
| 46 | 19352 | 🟢 core | Delta-Neutrality | If you are long a call and want to be delta-neutral, what do you do? | Short N(d1) shares of the underlying. |
| 47 | 19353 | 🟢 core | Gamma-Neutrality | Can you become gamma-neutral using only the underlying stock? | No, you need another option because the stock has zero gamm… |
| 48 | 19355 | ⚪ adv | Vanna | What is Vanna? | Sensitivity of Delta to Volatility (or Vega to Spot). |
| 49 | 19356 | ⚪ adv | Volga (Vomma) | What is Volga (also known as Vomma)? | Sensitivity of Vega to Volatility (Second derivative with r… |
| 50 | 19358 | 🟢 core | Implied Volatility | What is Implied Volatility? | The volatility value that, when plugged into the BS formula… |
| 51 | 19359 | 🟢 core | Risk-Free Rate | Which rate is most commonly used as the "risk-free" rate in professional derivative pricing today? | OIS (Overnight Index Swap) rates like SOFR or ESTR. |
| 52 | 19362 | ⚪ adv | Information Ratio | Your PM generated 15% return while the benchmark did 10%, but she took massive off-benchmark sector bets to do it. What… | Active return divided by tracking error. |
| 53 | 19363 | ⚪ adv | Sortino Ratio | A trend-following strategy has huge upside spikes but minimal drawdowns. Sharpe penalizes those upside spikes as "volat… | It only considers downside volatility (harmful risk) instea… |
| 54 | 19364 | ⚪ adv | Kelly Criterion | You have a coin that lands heads 60% of the time, paying even odds. How do you size your bets to maximize long-term wea… | Determining the optimal size of a series of bets to maximiz… |
| 55 | 19365 | ⚪ adv | Risk-Aversion | What is a typical utility function used to represent a risk-averse investor? | Logarithmic or Power utility. |
| 56 | 19366 | ⚪ adv | Heston Model | What is the key feature of the Heston Model? | It assumes volatility is itself a stochastic process with m… |
| 57 | 19367 | ⚪ adv | Dupire Equation | What is the Dupire Equation used for? | Extracting a local volatility surface that is consistent wi… |
| 58 | 19368 | ⚪ adv | SABR Model | What is the SABR model commonly used for? | Modeling the volatility smile in interest rate markets. |
| 59 | 19369 | ⚪ adv | Jump-Diffusion | How does Merton's Jump-Diffusion model differ from Black-Scholes? | It adds a Poisson process for large, discrete price jumps. |
| 60 | 19370 | ⚪ adv | Variance Swap Hedge | How is a Variance Swap statically hedged? | Using a "log contract" replicated by a portfolio of OTM put… |
| 61 | 19371 | ⚪ adv | Vol Risk Premium | What is the Volatility Risk Premium? | The observation that implied volatility is usually higher t… |
| 62 | 19372 | ⚪ adv | CVA vs DVA | What is DVA (Debit Value Adjustment)? | The adjustment to a derivative's value due to the bank's ow… |
| 63 | 19373 | ⚪ adv | IM vs VM | What is Variation Margin (VM)? | The daily exchange of cash to cover mark-to-market changes… |
| 64 | 19376 | ⚪ adv | Pin Risk | What is "Pin Risk"? | The uncertainty and risk faced by an option seller as the s… |
| 65 | 19377 | ⚪ adv | HJM Framework | What does the Heath-Jarrow-Morton (HJM) framework model? | The evolution of the entire forward rate curve simultaneous… |
| 66 | 19378 | ⚪ adv | Swaption vs Caplet | A European swaption can be seen as an option on a _____? | Basket of forward rates (or a swap). |
| 67 | 19379 | ⚪ adv | ISDA Master | What is the primary function of an ISDA Master Agreement? | To provide a standardized legal framework for over-the-coun… |
| 68 | 19380 | ⚪ adv | Gap Risk | What is "Gap Risk"? | The risk that a price changes significantly with no trading… |
| 69 | 19401 | ⚪ adv | Risk-Neutral Measure | Under the risk-neutral measure, what is the expected return of a stock? | The risk-free interest rate (r) |
| 70 | 19402 | ⚪ adv | Straddle Payoff | A long straddle consists of buying a call and a put with the same strike K. When is this strategy profitable? | When the stock price moves significantly in EITHER direction |
| 71 | 19411 | ⚪ adv | Portfolio Optimization | What is the goal of Markowitz mean-variance optimization? | To find the portfolio with the minimum variance for a given… |
| 72 | 19412 | ⚪ adv | Sharpe Ratio | What is the formula for the Sharpe Ratio? | (Portfolio Return - Risk-Free Rate) / Portfolio Standard De… |
| 73 | 19413 | ⚪ adv | CAPM | According to the Capital Asset Pricing Model (CAPM), the expected return of an asset is: | Risk-free rate + Beta * (Market Return - Risk-Free Rate) |
| 74 | 19414 | ⚪ adv | Beta | What does an asset's Beta (beta) represent in finance? | The sensitivity of the asset's returns to the market return… |
| 75 | 19415 | ⚪ adv | Duration and Convexity | How does a bond's price change relative to interest rates? | Price moves inversely to rates; Duration handles linear cha… |
| 76 | 19416 | ⚪ adv | Value at Risk (VaR) | What does a 1-day 95% Value at Risk (VaR) of $1M mean? | There is a 5% chance the portfolio will lose more than $1M… |
| 77 | 19822 | 🟢 core | The Tiny Umbrella Hedge | You hold a position that makes $100 if the market goes up and loses $100 if the market goes down. You can buy a hedge f… | Up: +$80; down: -$40 |
| 78 | 19823 | 🟢 core | The Dominated Trade Parade | A trader offers three one-period trades with payoffs in two market states. Trade A pays +$10 if up and -$5 if down. Tra… | Trade C dominates both A and B. |

---

## Decisions log

Use the space below to record decisions as you review. Format: `id → action (reason)`

- _e.g., 19302 → flip to core (this kind of vol-surface intuition is screening-level for delta-1)_
- _e.g., 19412 → keep, rewrite distractor 2 (current line is a strawman)_

