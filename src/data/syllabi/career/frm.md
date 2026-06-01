# FRM: The Risk Manager's Workout
**ID**: `frm` · **Discipline**: Finance — Risk Management

## Course Aim
The Financial Risk Manager designation, administered by the Global Association of Risk Professionals (GARP), is the credential that asks one quietly demanding question: when markets misbehave, can you keep an institution upright? Part I builds the toolkit — probability, statistics, valuation primitives, and the products that show up on every trading floor, treasury, and risk committee. Part II takes that toolkit into the wild: VaR running on a real portfolio, an FRTB filing on the regulator's desk, an LCR forecast under stress, a model committee asking why the credit migration matrix looks strange this quarter, and a CRO who needs a defensible answer before lunch.

This course treats the FRM as professional training in disguise rather than a memory test. You will learn to compute parametric, historical, and Monte Carlo VaR; defend an expected shortfall number against a sceptical CRO; read a Basel III capital stack the way a regulator reads it; and reason out loud about credit, operational, liquidity, and model risk. We deliberately stress where the math meets the world: the moment when normality fails, when correlation collapses to one, when an "obviously safe" funding profile sets up the next SVB. A risk manager's job is not to predict the future but to know which assumption breaks first, which tail is fatter than it looks, and which model is bluffing.

The voice of the credential is bank/hedge fund/asset manager rather than academic. You sit on the second line of defence at a global bank, or at a $20bn multi-manager hedge fund, or inside an asset manager running an LDI mandate for an underfunded pension. You are comfortable telling a portfolio manager the model is wrong, telling the front office that the desk just failed the P&L attribution test, and telling the board that the FRTB capital number is rising 30% because two desks just moved to non-modellable. The goal is a working risk manager's brain: formula fluency, regulatory literacy, and the seat-of-the-pants judgment to argue with your own model before someone else does.

Compared with the CFA's risk-management section, the FRM goes much deeper on quantitative methods (GARCH and EWMA, copulas, extreme-value theory), on regulation (Basel I→II→III→IV/FRTB, SR 11-7, CCAR/DFAST, LCR/NSFR mechanics), on operational risk (LDA, scenario analysis, third-party, cyber resilience), and on the bridge from PhD-level math to plain-English judgment in stressed markets. CFA touches these topics; FRM lives in them.

## Course Design Notes
Keep this course rigorous and slightly sceptical. Route questions here when they test GARP Part I or Part II topics: foundations of risk, quantitative analysis, financial markets and products, valuation and risk models, market risk measurement and management, credit risk, operational risk and resiliency, liquidity and treasury risk, risk management in investment management, and current issues. Favour scenarios with specific portfolios, named regulations, and explicit numbers. Distractors should be plausible mistakes a real candidate (or working analyst) would make under time pressure: a forgotten subadditivity violation, a confused EAD/EPE, an LCR ratio inverted, a stress test that quietly assumes a constant correlation matrix.

Where FRM overlaps the CFA risk chapter, prefer the deeper treatment: not just "VaR has limitations" but the specific Kupiec POF and Christoffersen conditional coverage backtests; not just "Basel exists" but the SA/IMA split under FRTB, the NMRF capital add-on, and the desk-level P&L attribution test. Where it overlaps CAIA on hedge fund risk, lean into the risk-management side: leverage, gates, side pockets, smoothed returns, and the Treynor-Black and risk-budgeting tools an allocator actually uses.

## Exam Map and Study Rhythm
GARP publishes topic weights for each part. Use them to allocate hours, but bias study toward topics where your error log is loudest. Current weights (verify against the latest GARP study guide each cycle):

| Part | Topic | Exam Weight | Study Posture |
|---|---|---:|---|
| I (100 MCQ, 4h) | Foundations of Risk Management | 20% | Anchor governance, ERM, three lines of defence, famous failures |
| I | Quantitative Analysis | 20% | Probability, hypothesis tests, regression, simulation, EVT |
| I | Financial Markets and Products | 30% | Rates, bonds, derivatives, FX, commodities, securitisation |
| I | Valuation and Risk Models | 30% | Greeks, VaR fundamentals, fixed-income risk, credit basics |
| II (80 MCQ, 4h) | Market Risk Measurement and Management | 20% | VaR, ES, backtesting, FRTB, volatility and correlation |
| II | Credit Risk Measurement and Management | 20% | Merton, KMV, CreditMetrics, CVA, counterparty, CDS |
| II | Operational Risk and Resiliency | 20% | Frameworks, capital (SMA), cyber, third-party, model risk |
| II | Liquidity and Treasury Risk | 15% | LCR, NSFR, IRRBB, FTP, contingency funding |
| II | Risk Management and Investment Management | 15% | Portfolio risk, IR/Treynor-Black, hedge fund risk |
| II | Current Issues in Financial Markets | 10% | Climate, AI, crypto, IBOR transition, recent failures |

**Cadence.** Plan 250-300 hours per part across 14-18 weeks. The standard mix is GARP's official readings as the source of truth, supplemented by Bionic Turtle (Hull-aligned, deep on derivations) and/or Kaplan Schweser (compact, test-shaped) for drilling. Track every miss in one spreadsheet with topic, error type, and a sentence on the underlying confusion. The error log is the syllabus your future self will actually read.

**Rhythm.** Four weekly retrieval blocks plus one timed mixed quiz; two full mock exams under exam conditions in the final fortnight. Build a one-page formula sheet per part — VaR conversions, duration/convexity, Merton, LCR/NSFR, FRTB capital math — and rewrite it from memory weekly until it lives in your hand.

## Chapter 1: Foundations and the Risk Management Mindset
**Core questions.** What does an enterprise risk management framework actually do, beyond filling a binder? How do risk appetite, tolerance, and capacity differ on a real board pack — and where did each fail at Archegos, SVB, or Credit Suisse?

**Key concepts.** ERM frameworks (COSO ERM 2017, ISO 31000); three lines of defence and its critiques; risk culture, conduct, and the "tone from the top" failure mode; CAPM intuition and its abuses (beta is estimated, not given); risk-adjusted performance — Sharpe, Treynor, Information Ratio, Jensen's alpha, Sortino. Famous failures as case studies: LTCM (leverage + correlated arb book), Barings (rogue trader + control bypass), Société Générale (Kerviel + fictitious hedges), Amaranth (concentrated nat-gas spread), Archegos (margin opacity + total return swap leverage), Credit Suisse / Greensill, SVB (IRRBB + concentrated depositors), FTX (governance vacuum).

**Applied skills.** Map a specific control breakdown to a line of defence and a governance gap. Translate a risk appetite statement into a working limit framework. Critique an alpha claim using Sharpe, IR, and survivorship bias.

**Common traps.**
- "Appetite," "tolerance," and "capacity" are not interchangeable; expect a prompt that swaps them.
- The three lines model does not mean three independent voting blocs; the second line *challenges* the first, the third *assures* both.
- Sharpe ratio comparisons are meaningless without identical risk-free rate, frequency convention, and return distribution.

**Authoritative sources.** GARP FRM Part I, Foundations of Risk Management readings; Bodie/Kane/Marcus on CAPM; Crouhy/Galai/Mark *Essentials of Risk Management*.

## Chapter 2: Quantitative Foundations for Risk
**Core questions.** Which distribution actually describes this loss series? When do correlation, copulas, or regime-switching models earn their keep — and when are they expensive scaffolding for the wrong assumption?

**Key concepts.** Probability distributions used in risk (normal, lognormal, Student-t, mixture normal, Poisson, generalised Pareto for EVT); moments (mean, variance, skew, kurtosis), and what fat tails do to capital; hypothesis testing, p-values, Type I/II errors, multiple testing; OLS regression, heteroskedasticity, autocorrelation; ARMA, GARCH(1,1), EWMA with RiskMetrics decay 0.94, IGARCH; copulas — Gaussian, Student-t, Archimedean (Clayton/Gumbel), tail dependence; Monte Carlo simulation with antithetic variates and control variates; principal component analysis on yield curves (level/slope/curvature ≈ 95% of variance).

**Applied skills.** Choose between EWMA and GARCH on backtest evidence; estimate a 1-day 99% parametric VaR with given vol and z-score; run a Monte Carlo pricing exercise and report the standard error correctly (it scales 1/√N); compress a yield curve into PCA factors and explain the loadings.

**Common traps.**
- Gaussian copula fits joint normality in the body but understates joint tail moves; Student-t and Clayton copulas were the post-2008 corrections.
- EWMA has only a smoothing parameter; GARCH adds mean-reversion. EWMA can drift; GARCH reverts to long-run vol.
- "Statistical significance" at p<0.05 with 250 daily observations does not mean economic significance.

**Authoritative sources.** Hull *Risk Management and Financial Institutions* (Ch. on volatility, correlations); GARP *Quantitative Analysis* book; Jorion *Value at Risk* on simulation methods.

## Chapter 3: Financial Markets, Products, and Pricing Mechanics
**Core questions.** What cash flow does this product actually produce, what risk factors move it, and where is the embedded optionality hiding?

**Key concepts.** Money markets, repo, secured funding, SOFR/€STR/SONIA OIS curves after IBOR transition; fixed-income mechanics — clean vs dirty price, accrued interest, modified vs Macaulay duration, convexity, key-rate (partial) durations; forwards, futures (mark-to-market vs forward, basis risk in cross-hedges), swaps (IRS, OIS, basis swaps); options — put-call parity C − P = S − K·e^(−rT), Greeks (delta, gamma, vega, theta, rho), implied vol surface (skew, term structure); commodity derivatives — cost-of-carry, contango/backwardation, convenience yield; FX forwards and the covered interest-rate parity; securitisation primer (ABS, MBS, CLO, CMBS).

**Applied skills.** Hedge a corporate bond portfolio with a Treasury futures DV01 overlay; price a vanilla IRS from a discount curve; identify the dominant Greek for a delta-hedged option book; explain why an OIS-SOFR basis can blow out under stress.

**Common traps.**
- Duration is in years; DV01 is in dollars per basis point. Mixing them is the classic interview trip.
- Put-call parity assumes European exercise and no dividends; American options have early-exercise premium.
- Convenience yield and storage cost both bend the forward curve, but in opposite directions.

**Authoritative sources.** Hull *Options, Futures and Other Derivatives*; Fabozzi *Bond Markets*; GARP Part I *Financial Markets and Products* readings.

## Chapter 4: Valuation and Risk Models — Building the VaR Toolkit
**Core questions.** What is a 99% one-day VaR really telling you? When does expected shortfall do a better job — and when is *all* of it telling you nothing because the world just left the distribution?

**Key concepts.** Parametric (delta-normal) VaR: VaR = V·σ·√t·z_α; historical simulation VaR with rolling windows; Monte Carlo VaR with specified distributional assumptions; expected shortfall (CVaR) = E[L | L > VaR_α]; coherent risk measures (monotonicity, subadditivity, positive homogeneity, translation invariance) and the VaR subadditivity violation; marginal VaR (∂VaR/∂w_i), incremental VaR (full attribution by removing a position), component VaR (decomposition that sums to total VaR); backtesting — Kupiec proportion-of-failures (POF) test, Christoffersen conditional coverage / independence test, Basel traffic-light approach (green ≤4, yellow 5-9, red ≥10 exceptions on 250 days at 99%); stress testing and reverse stress testing.

**Applied skills.** Compute parametric VaR for a two-asset portfolio with given vols and correlation; diagnose why a 250-day historical VaR understated last month's losses; design a reverse stress test that breaks a specific business line; convert 1-day VaR to 10-day under the √t rule and explain when that rule fails.

**Common traps.**
- VaR is not subadditive in general; ES is. FRTB replaced 99% 10-day VaR with 97.5% ES with liquidity horizons for this reason.
- Historical simulation does not assume normality; that critique applies to the parametric approach.
- The √t scaling assumes i.i.d. returns; with volatility clustering or mean reversion, it lies.

**Authoritative sources.** Jorion *Value at Risk*; GARP Part I *Valuation and Risk Models*; Basel "Minimum capital requirements for market risk" (FRTB).

## Chapter 5: Market Risk Measurement and Management (Part II)
**Core questions.** Why did the Basel Committee replace VaR with expected shortfall under FRTB? How does the internal models approach (IMA) actually work, and what trips desks back to the standardised approach?

**Key concepts.** FRTB Sensitivities-Based Approach (SBA, the default) with delta, vega, curvature risk plus default risk charge and residual risk add-on; Internal Models Approach (IMA) eligibility — desk-level backtesting and P&L attribution test (PLA, comparing hypothetical and risk-theoretical P&L via Spearman and KS tests); modellable vs non-modellable risk factors (NMRF) with the real-price observation test (24 obs/year, 4 per 90 days, no gap >90 days); liquidity horizons by risk factor class; stressed expected shortfall calibration; volatility modelling — implied vol surface, skew/smile, term structure; correlation breakdowns in stress, tail dependence, copula choice; risk decomposition (marginal, incremental, component VaR).

**Applied skills.** Walk a trading desk through the FRTB IMA eligibility process; explain why 2008 triggered the move from VaR(99%, 10d) to ES(97.5%) with liquidity horizons; attribute a P&L beat to gamma, vega, theta, or carry; identify which desks lose IMA approval first and why.

**Common traps.**
- VaR(99%) ≠ ES(97.5%) is a coincidence under normality (numerically close); it is not a definition.
- Failing PLA on a single desk does not push the whole bank to SA; only that desk.
- NMRFs carry a stressed-period add-on plus a non-modellable capital charge — they get expensive fast.

**Authoritative sources.** BCBS *Minimum capital requirements for market risk* (d457, Jan 2019 + revisions); GARP Part II *Market Risk*; Bionic Turtle FRTB primer.

## Chapter 6: Credit Risk Measurement and Management (Part II)
**Core questions.** What is the probability of default for this counterparty, what do you lose if it happens, and what does the credit market price imply that your internal model does not?

**Key concepts.** Structural models — Merton (equity as call on assets struck at debt face value), KMV expected default frequency (EDF) using distance-to-default; reduced-form models, hazard rates λ(t), credit spread ≈ λ·(1 − R); CreditMetrics (rating migration matrices, joint migration via asset correlation); CreditRisk+ (Poisson default frequency); credit exposure measures — current exposure, potential future exposure (PFE), expected exposure (EE), expected positive exposure (EPE); credit VaR vs market VaR (long horizon, fat-tailed); counterparty credit risk — CVA = LGD · ∫ EE(t)·dPD(t)·D(t), DVA (own credit), FVA (funding), KVA (capital); wrong-way risk (general vs specific); credit derivatives — single-name CDS pricing and CDS-bond basis, CDX/iTraxx indices, total return swaps, synthetic CDOs and tranche correlation; PD/LGD/EAD under Basel IRB; bootstrapping hazard rates from a CDS curve.

**Applied skills.** Use Merton intuition to estimate distance-to-default from equity volatility; compute CVA for a netted swap portfolio under a simple exposure profile; identify wrong-way risk in a commodity producer's hedging programme; explain why CVA spiked in March 2020 even with no defaults.

**Common traps.**
- PD × LGD × EAD = expected loss, not capital. Unexpected loss drives capital.
- Wrong-way risk is the correlation between exposure and default, not just a bad counterparty.
- CDS-bond basis breaks under repo squeezes and funding stress; it is not a free arbitrage.

**Authoritative sources.** Gregory *The xVA Challenge*; GARP Part II *Credit Risk*; Hull on Merton/KMV.

## Chapter 7: Operational Risk and Resiliency (Part II)
**Core questions.** How do you set capital for events that have never happened? How does a firm prove it can deliver critical services through stress?

**Key concepts.** Op risk taxonomy (Basel event types — internal fraud, external fraud, employment practices, clients/products, damage to physical assets, business disruption, execution); SMA (Standardised Measurement Approach) replacing AMA — Business Indicator Component × Internal Loss Multiplier; Loss Distribution Approach (LDA) — convolution of frequency (Poisson) and severity (lognormal or GPD tail) distributions, 99.9% percentile; scenario analysis, key risk indicators (KRIs); model risk under SR 11-7 — independent validation with effective challenge, model inventory, tiering, change control; cyber resilience and operational resilience (impact tolerances per critical service, tested recovery); third-party / vendor risk and concentration; conduct risk and culture; AI/ML model governance.

**Applied skills.** Build a simple LDA Monte Carlo from frequency and severity distributions; draft a model risk tier rating and validation cadence; diagnose a third-party concentration that creates systemic operational risk; set an impact tolerance for a payments service.

**Common traps.**
- LDA's 99.9% is annual and aggregate, not per-event.
- SR 11-7 covers more than "quantitative models" — expert judgment and end-user computing also count.
- Resilience is about service continuity, not just incident prevention; testing recovery to a defined tolerance is the new bar.

**Authoritative sources.** BCBS *OPE* standard; Federal Reserve SR 11-7; GARP Part II *Operational Risk and Resiliency*.

## Chapter 8: Liquidity and Treasury Risk (Part II)
**Core questions.** How does a treasurer prove the firm survives thirty days of stress? How does the funding desk price liquidity inside the firm so that business lines internalise their cost?

**Key concepts.** Liquidity Coverage Ratio (LCR) = HQLA / Net Cash Outflows over 30 days ≥ 100%; HQLA levels (1, 2A, 2B) with haircuts; Net Stable Funding Ratio (NSFR) = ASF / RSF ≥ 100% over one year; contingency funding plan (CFP) and intraday liquidity; Interest Rate Risk in the Banking Book (IRRBB) — Economic Value of Equity (EVE) and Net Interest Income (NII) sensitivity, six prescribed shock scenarios under BCBS 368; non-maturity deposit (NMD) behavioural modelling; Funds Transfer Pricing (FTP) — charging business lines for term, liquidity, and embedded optionality; asset-liability management (gap analysis, duration of equity); SVB and Credit Suisse as case studies.

**Applied skills.** Build an LCR calculation from HQLA tiers and run-off assumptions; diagnose the IRRBB profile of a bank with short-funded fixed-rate mortgages; price a 5-year corporate loan internally with an FTP framework; size a contingency funding plan against a deposit-flight scenario.

**Common traps.**
- LCR is 30-day; NSFR is one-year. They answer different questions.
- "Excess HQLA" above 100% is encouraged but not always free — opportunity cost is real.
- Non-maturity deposits are *behaviourally* short under stress even if contractually long; SVB learned this in 36 hours.

**Authoritative sources.** BCBS LCR (d272) and NSFR (d295); BCBS 368 IRRBB; GARP Part II *Liquidity and Treasury*.

## Chapter 9: Risk Management and Investment Management (Part II)
**Core questions.** How do you measure, attribute, and govern risk inside a portfolio mandate? How does a multi-strategy hedge fund's risk engine differ from a long-only manager's?

**Key concepts.** Portfolio risk — tracking error TE = σ(R_p − R_b), information ratio IR = α/TE; factor models (Fama-French, Carhart, Barra); risk budgeting and active share; Treynor-Black model for active management; performance attribution — Brinson allocation/selection/interaction, factor-based attribution; hedge fund risk — style drift, leverage, gates and side pockets, smoothed returns (Getmansky-Lo-Makarov unsmoothing), survivorship/backfill bias; UCITS vs '40 Act vs Cayman master/feeder structures; stress testing investment portfolios — CCAR/DFAST principles applied buy-side; pension and insurance ALM.

**Applied skills.** Decompose a fund's active return into allocation and selection effects; detect serial correlation in monthly returns and adjust Sharpe accordingly; build a tracking-error budget for an active equity sleeve; critique a 2-and-20 fee with hard hurdle.

**Common traps.**
- IR uses *active* return and *active* risk; Sharpe uses total excess return and total vol. They are different.
- Tracking error of 50 bps does not mean 50 bps of expected outperformance.
- A 0.94 RiskMetrics decay is convention, not law — it implies a particular half-life and underestimates regime breaks.

**Authoritative sources.** Grinold & Kahn *Active Portfolio Management*; GARP Part II *Risk Management and Investment Management*; Lo on hedge fund risk.

## Chapter 10: Current Issues in Financial Markets (Part II)
**Core questions.** What is on GARP's current-issues list this cycle, and which themes have lasting risk-management content?

**Key concepts.** Climate risk — physical vs transition, scenario analysis (NGFS scenarios), stranded assets, supervisory climate stress tests (ECB, Bank of England); AI in finance — model risk for ML/LLM systems, explainability, fairness, third-party AI concentration; crypto-asset risk — custody, smart contract, stablecoin runs (Terra/Luna), exchange failures (FTX); IBOR transition — SOFR vs LIBOR, fallback language (ISDA 2020 IBOR Fallbacks Protocol); cyber and ransomware; recent failures — Archegos, SVB/First Republic, Credit Suisse, Silvergate/Signature, LME nickel squeeze.

**Applied skills.** Build a transition-risk overlay on a credit book; critique an LLM application in credit decisioning under SR 11-7; explain the LIBOR fallback waterfall on a legacy syndicated loan.

**Common traps.**
- Climate scenarios are long-horizon stress; do not collapse them into a one-quarter P&L hit.
- "Crypto correlation is low" is a small-sample claim — it has risen materially with institutional adoption.
- AI/LLM systems are models under SR 11-7 even if vendors call them "tools."

**Authoritative sources.** GARP Part II *Current Issues* readings (refresh each cycle); NGFS climate scenarios; ISDA IBOR Fallbacks documentation.

## Capstone: Exam-Day Discipline
The FRM rewards candidates who read carefully, recognise the trick in the prompt, and never abandon a question after thirty seconds of staring. Pace at roughly 2.4 minutes per question on Part I and 3.0 minutes per question on Part II — slightly slower than CFA L1, because the prompts are longer and the math is denser. Permitted calculators are the TI BA II Plus (including Professional) and the HP 12C; no other models. Bring a fresh battery, not a clever app.

Keep a one-page formula sheet that includes VaR conversions (parametric, √t scaling, 99% z = 2.33), duration/DV01, Merton mechanics, Basel liquidity ratios (LCR ≥ 100%, NSFR ≥ 100%), and the FRTB ES confidence level (97.5%). When stuck, name the risk type, pick the cleanest applicable framework, eliminate the two distractors most likely to be the trap (sign error, wrong horizon, swapped numerator/denominator), and commit. On exam day, the only formula that always works is: read the question twice, identify what is actually being asked, answer that question, and move on.
