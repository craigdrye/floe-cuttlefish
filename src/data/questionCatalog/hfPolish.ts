// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Hedge Funds roadmap (~300 questions across 5 chapters + Capstone).
//
// HF_SUB_TOPICS groups each chapter's questions into 5-7 lesson-shaped clusters
// (capped at 8 per chapter, matching the lesson grouping cap).
//
// HF_MENTOR_HINTS overrides the generic HF scaffold hint with a one-line
// second-person nudge that names the reasoning move without giving the answer
// — voice: senior PM mentoring a junior analyst.
//
// HF_CORRECT_SHORTENED trims `correct` strings flagged by the length-heuristic
// audit (correct ≥1.8x longer than longest wrong AND ≥20 chars longer). Trimmed
// explanatory clauses are reattached via `lessonAddendum` so no info is lost.

export const HF_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Chapter 1: Strategy, Mandate, and Edge --------------------
  'Strategy Types (L/S, EV, Macro, RV, Quant)': [
    4200050, 4400000, 4400001, 4400002, 4400003, 4400004, 4400005, 4400006,
    4400007, 4400008, 4400009,
  ],
  'Mandate Features': [
    4400010, 4400011, 4400012, 4400013, 4400014, 4400015, 4400016, 4400017,
    4400018, 4400019,
  ],
  'Edge Sources': [
    4200051, 4200052, 4400020, 4400021, 4400022, 4400023, 4400024, 4400025,
    4400026, 4400027, 4400028, 4400029,
  ],
  'Capital Structure (2-and-20)': [
    4400030, 4400031, 4400032, 4400033, 4400034, 4400035, 4400036, 4400037,
    4400038,
  ],
  'Cap Intro & LP Relations': [
    4400039, 4400040, 4400041, 4400042, 4400043, 4400044, 4400045, 4400046,
  ],

  // -------------------- Chapter 2: Thesis Formation and Variant Perception ------
  'Thesis Anatomy': [
    4400100, 4400101, 4400102, 4400103, 4400104, 4400105, 4400106, 4400107,
    4400142,
  ],
  'Variant Perception': [
    4103040, 4105106, 4107380, 4107388, 4107850, 4400108, 4400109, 4400110,
    4400111, 4400112, 4400113,
  ],
  'Information Edge & Compliance': [
    4400114, 4400115, 4400116, 4400117, 4400118, 4400119, 4400120,
  ],
  'Scenario & EV Framework': [
    4400121, 4400122, 4400123, 4400124, 4400125,
  ],
  'Behavioral Pitfalls': [
    4400126, 4400127, 4400128, 4400129, 4400130,
  ],
  'Catalyst Typology': [
    4103041, 4400131, 4400132, 4400133,
  ],
  'Horizon & Re-Underwriting': [
    4105107, 4400134, 4400135, 4400136, 4400137, 4400138, 4400139, 4400140,
    4400141,
  ],

  // -------------------- Chapter 3: Modeling, Valuation, and Scenario Work --------
  'Forecast Structure': [
    4103044, 4103045, 4105110, 4105111, 4107390, 4107394, 4107854, 4400200,
    4400201, 4400202, 4400203,
  ],
  'Quick Valuation Methods': [
    4400204, 4400205, 4400206, 4400207, 4400215, 4400216, 4400217,
  ],
  'Scenario Trees & EV': [
    4400208, 4400209, 4400210, 4400211, 4400218, 4400219, 4400220,
  ],
  'Reverse DCF & Working Backwards': [
    4400212, 4400213, 4400214, 4400231, 4400232, 4400233,
  ],
  'Pair Trade Math': [
    4400221, 4400222, 4400223, 4400224, 4400240, 4400241, 4400242,
  ],
  'Risk-Reward & Earnings Preview': [
    4400225, 4400226, 4400227, 4400228, 4400229, 4400230,
  ],
  'Distressed & M&A Arb': [
    4400234, 4400235, 4400236, 4400237, 4400238, 4400239,
  ],

  // -------------------- Chapter 4: Portfolio Review and Performance Attribution --
  'Portfolio Construction': [
    4103046, 4103047, 4105112, 4107856, 4107865, 4200060, 4200061, 4200062,
    4400300, 4400301, 4400302, 4400303, 4400304,
  ],
  'Risk Metrics': [
    4400305, 4400306, 4400307, 4400308, 4400309, 4400310,
  ],
  'Factor Attribution': [
    4400311, 4400312, 4400313, 4400314, 4400315,
  ],
  'Style Drift & Drawdown Analysis': [
    4400316, 4400317, 4400318, 4400326, 4400327, 4400328,
  ],
  'Performance Attribution (Brinson)': [
    4400319, 4400320, 4400321, 4400322, 4400323, 4400324, 4400325,
  ],
  'Performance Ratios': [
    4400329, 4400330, 4400331,
  ],
  'Crowding & Position-Level Attribution': [
    4400332, 4400333, 4400334, 4400335, 4400336, 4400337, 4400338, 4400339,
    4400340, 4400341,
  ],

  // -------------------- Chapter 5: Shorts, Crowding, and Risk Control ------------
  'Short Mechanics': [
    4400400, 4400401, 4400402, 4400403, 4400404,
  ],
  'Short Thesis Types': [
    4400405, 4400406, 4400407, 4400408,
  ],
  'Squeeze Risk Management': [
    4103042, 4103043, 4105108, 4105109, 4105115, 4107382, 4107389, 4107863,
    4400409, 4400410, 4400411, 4400412, 4400413, 4400414, 4400415, 4400416,
    4400417, 4400418, 4400419, 4400420,
  ],
  'Synthetic Short Vehicles': [
    4400421, 4400422, 4400423, 4400424,
  ],
  'Risk Limits & Tail Hedging': [
    4400425, 4400426, 4400427, 4400428, 4400429, 4400430, 4400431, 4400432,
    4400433, 4400434,
  ],
  'Counterparty & Operational Risk': [
    4400435, 4400436, 4400437, 4400438, 4400439, 4400440, 4400441,
  ],

  // -------------------- Capstone: Apex Capital Partners ------------------------
  'Apex: Long Book Review': [
    4400500, 4400501, 4400502, 4400503, 4400504, 4400505, 4400506, 4400507,
    4400508, 4400509,
  ],
  'Apex: Short Book Review': [
    4400510, 4400511, 4400512, 4400513, 4400514, 4400515, 4400516, 4400517,
    4400518, 4400519,
  ],
  'Apex: Pair Trades & Factor': [
    4400520, 4400521, 4400522, 4400523, 4400524, 4400525, 4400526, 4400527,
    4400528, 4400529,
  ],
  'Apex: Drawdown Diagnosis': [
    4400530, 4400531, 4400532, 4400533, 4400534, 4400535, 4400536, 4400537,
    4400538, 4400539,
  ],
  'Apex: Forward Positioning': [
    4400540, 4400541, 4400542, 4400543, 4400544, 4400545, 4400546, 4400547,
    4400548, 4400549,
  ],
}

export const HF_MENTOR_HINTS: Record<number, string> = {
  // ---------- Chapter 1: Strategy, Mandate, and Edge ----------
  4200050: 'A mandate is a hard constraint. Match the idea to the strategy box before judging the idea itself.',
  4200051: 'Edge for fundamental L/S is informational, analytical, or behavioral — and built legally through work, not speed or insider access.',
  4200052: 'Alpha is residual after market beta is stripped out. The 20% market move is the benchmark, not the achievement.',
  4400000: 'Gross adds the absolute values of both legs; net subtracts. 130/30 names the legs, not the gross.',
  4400001: 'Net is the beta dial; gross is the idiosyncratic-risk dial. Read net 30-50% as half a long-only book.',
  4400002: 'Spread is deal-minus-current. Annualize by scaling the period return to a year — do not confuse spread % with annualized IRR.',
  4400003: 'The clean cut is credit condition of the issuer, not direction or venue. Distressed lives in the indenture; special sits in the proxy.',
  4400004: 'Cut on decision process, not asset class or leverage. Discretionary expresses views; systematic runs rules.',
  4400005: 'A curve trade is about shape (slope/convexity), not direction. DV01-neutral sizing strips out the parallel shift.',
  4400006: 'Daily delta hedging strips direction. What is left is gamma vs theta — realized vol vs implied.',
  4400007: 'Market neutral is a construction constraint: dollar- and beta-neutral against a benchmark. Idiosyncratic risk stays on every name.',
  4400008: 'Pods are independent neutral sleeves with tight stops. The structural edge is diversification across uncorrelated PMs.',
  4400009: 'Holding period and signal source are the cleanest cut. Stat arb is hours-to-days; HFT is microseconds.',
  4400010: 'Capacity is strategy-specific. Small-cap, distressed, and vol arb hit ceilings well before liquid macro.',
  4400011: 'Gross caps overall size and financing; net caps market beta. They are independent dials.',
  4400012: 'Sector caps apply to gross (long + short absolute), bind across the fund, and the cure is to trim or source elsewhere.',
  4400013: 'Asset-side liquidity must match or exceed the liability-side terms LPs are offered. Mismatches end funds.',
  4400014: 'Pod stops are operationally hard, mechanical, and asymmetric — deleveraged on the way down, no symmetric reload on the way up.',
  4400015: 'Define the unit first. Gross-exposure / NAV is the modal hedge fund leverage definition; alternatives produce different numbers.',
  4400016: 'Distinguish active breaches (PM bought more) from passive (price moved). Mandate cure windows usually allow appreciation.',
  4400017: 'Hard limits = automatic cure. Soft limits = managed cure. Both are real; "ignore" is not a cure.',
  4400018: 'Single-name caps stop one fraud; sector caps stop one factor. Both protect orthogonal risks.',
  4400019: 'Side pockets handle illiquid or hard-to-value assets — eligibility, cap, and consent are pre-specified in the offering memo.',
  4400020: 'The legal line is whether any single input was material and nonpublic, not whether the conclusion is non-consensus.',
  4400021: 'Post-SAC compliance is topic clearance + name restrictions + attestation. The channel is legal when wrapped in process.',
  4400022: 'Analytical edge is non-consensus output from the same public inputs. Track model-vs-actual to prove it.',
  4400023: 'For a fundamental fund, execution edge is restraint and tools — VWAP, dark pools, patience — not microsecond latency.',
  4400024: 'Structural edge is contractual — lockups, gates, redemption notice. It lets the PM hold what quarterly funds cannot.',
  4400025: 'Hold-period edge is time-horizon arbitrage. Most active money fights in the 1-quarter window; 5-year is less crowded.',
  4400026: 'Edge decays as signals are arbitraged away. Run a pipeline at different ages — research, production, phase-out.',
  4400027: 'Three years cannot separate skill from luck at HF Sharpes. Process attribution does what the time series cannot.',
  4400028: 'Behavioral edge means acting more rationally on the same public facts — and it requires structural capital to hold through pain.',
  4400029: 'A factor everyone owns has stopped being an edge. Ask what the residual edge is within the factor — honestly.',
  4400030: 'Management fee on NAV regardless; performance fee on profits net of mgmt fee. The two bases are different, so they do not add to 22%.',
  4400031: 'HWM is the highest NAV at which performance fee was paid. After a drawdown, no new fee until the LP is whole.',
  4400032: 'Soft hurdle: clear it then charge on everything. Hard hurdle: charge only on the excess. Difference is real near the hurdle.',
  4400033: 'Founders class trades lower fees for longer lockup and early-stage manager risk. The math compounds materially over 5 years.',
  4400034: 'Side pockets follow the redeeming LP pro-rata until realization. They are illiquid by design; cash payout defeats the purpose.',
  4400035: 'Investor-level gate caps one LP\'s exit speed; fund-level gate caps the aggregate. Both can apply.',
  4400036: 'Notice period + redemption frequency together determine exit speed. 60-day / quarterly often means ~5 months end-to-end.',
  4400037: 'Lockup is asset-liability matching. The PM should point at illiquidity and multi-year thesis horizon, not at fee economics.',
  4400038: 'MFN is tiered by commitment, carved-out for specific provisions, and triggers a disclosure cycle. Not an LPA default.',
  4400039: 'Cap intro is a relationship service, not a sales force. The PB introduces; the fund still has to win on its own.',
  4400040: 'FoHFs are faster but less stable LPs — their own LPs introduce redemption risk into the underlying fund.',
  4400041: 'Pensions: board, consultant, slow. Endowments: smaller staff, conviction-driven, faster. Same pitch, different diligence cycle.',
  4400042: 'SWF capital is the deepest and stickiest pool — and the most expensive to onboard. Multi-quarter project for the IR team.',
  4400043: 'Family offices are heterogeneous. The shared traits are speed and concentration of authority; everything else varies.',
  4400044: 'A master DDQ updated quarterly is the modern norm. Inconsistent answers across LPs are a tell during ODD.',
  4400045: 'Independent administration is binary for institutional LPs. Every major HF fraud featured weak admin.',
  4400046: 'Valuation policy is where unrealised P&L (and perf fee) is determined. PM-marked positions are an ODD red flag.',

  // ---------- Chapter 2: Thesis Formation and Variant Perception ----------
  4103040: 'Variant perception is a view on what the market misunderstands, not on whether the stock is cheap.',
  4105106: 'A consensus gap is the start of a thesis. Legality, sizing, and valuation still have to clear.',
  4107380: 'Whispers are above published consensus when positioning is long. The print is measured against the bar the marginal trader was using.',
  4107388: 'Capital allocation reveals management expectation. Actions speak louder than the conference-call adjectives.',
  4107850: 'A variant view connects evidence (freight, pricing) to an estimate change (gross margin) on a specific line.',
  4103041: 'Catalysts gate timing. Without a window, even a brilliant thesis pays carry indefinitely.',
  4105107: 'Crowded longs have everyone on the same side. A small disappointment triggers everyone selling at once.',
  4400100: 'A thesis names catalyst, horizon, sizing, exit, and kill criteria. Description is not thesis.',
  4400101: 'A catalyst is the bridge between "I am right" and "the market agrees within my horizon."',
  4400102: 'Pre-written kill criteria preserve the unbiased analyst. Once the position is on, motivated reasoning takes over.',
  4400103: 'An exit rule written before the trade is a contract with your unbiased self. Once PnL exists, you are no longer that person.',
  4400104: 'Named horizons get tested; unnamed horizons quietly extend every time the thesis is missed.',
  4400105: 'Sizing is the price you pay for being wrong. Translate the thesis into implied probabilities and check the size against them.',
  4400106: 'A real thesis names specific business outcomes future quarters can confirm or refute. "I love the team" is a feeling.',
  4400107: 'Narrative explains why the story is appealing; thesis names the operations, evidence, and falsifiers that turn it into a position.',
  4400108: 'Locate the specific line — revenue, margin, churn, terminal multiple — where you and the Street disagree.',
  4400109: 'Durability comes from structural mispricing: coverage gaps, framing differences, horizons the Street will not hold to.',
  4400110: 'Published consensus is a floor. The marginal trader is positioning against whispers, options-implied moves, and conviction.',
  4400111: 'Eventually-right is wrong for the fund. Variant perception lives or dies on horizon, not on terminal direction.',
  4400112: 'Estimates, whispers, positioning, options-implied moves — a stack. When they diverge, the divergence is the information.',
  4400113: 'Without an explicit model of consensus, the analyst cannot prove the view is differentiated.',
  4400114: 'Industry context is the legitimate, valuable part. The moment a single call becomes the locus of the thesis, you are in danger.',
  4400115: 'End, document, restrict, escalate. The hedge ("I should not say this") does not neutralize the information.',
  4400116: 'Channel checks are a triangulation tool, not a verdict. A 20-call sample says "do more work" or "drop this," not "buy/sell."',
  4400117: 'Every alt-data source has a coverage shape. Knowing what the panel does not see is the discipline.',
  4400118: 'Alt data points at a phenomenon; the analyst determines what it means. Decompose against the footprint before reading growth.',
  4400119: 'Compliance is the floor. Ask whether the technique is defensible if the company being scraped finds out.',
  4400120: 'Reg FD shifts the burden to the issuer to broadly disclose. The recipient still has to act as if it might be MNPI.',
  4400121: 'A scenario tree exists to expose asymmetry. Single-point targets cannot tell you whether the trade is asymmetric or just confident.',
  4400122: 'EV summarises central tendency; tail shape summarises survivability. Both matter for sizing.',
  4400123: '"X% upside" usually means the bull case. Translate to EV before comparing across positions.',
  4400124: 'Two positions with the same EV are not interchangeable — tighter distributions are usually preferred at the margin.',
  4400125: 'Asymmetry is a sizing argument, and sizing arguments are in dollars, not labels.',
  4400126: 'Markets do not care what you paid. The forward question is whether the current price beats the next-best alternative.',
  4400127: 'Diligence that only asks loaded questions returns loaded answers. Redesign the question, not the answer.',
  4400128: 'Test for sunk-cost thinking: would you buy this stock today at this price with no existing position? If no, you are holding for emotional reasons.',
  4400129: 'Access produces color; identification produces bias. Treat management as one source weighted for conflict.',
  4400130: 'Price moves are evidence. "Nothing has changed" assumes your information set equals the market\'s.',
  4400131: 'Hard catalysts are dated and observable; soft catalysts are real but diffuse. Sizing follows category.',
  4400132: 'Structural catalysts are mechanical and reversible. Edge is usually in fading the dislocation, not riding it.',
  4400133: 'A catalyst that fires without a price move usually means the variant view was not as variant as you believed.',
  4400134: 'Repeated timing slips are evidence the timing model is broken — even if the directional view holds.',
  4400135: 'Sizing is the lever between conviction and prudence. Timing slip → size down, not pure hold or exit.',
  4400136: 'A fund is a portfolio, not a single position. "Thesis is fine" is not an answer to "is this the best use of these dollars."',
  4400137: 'Re-underwriting institutionalizes the fresh-entry perspective. Every position has to clear the same bar today it cleared at entry.',
  4400138: 'Catalysts are information events. Each one updates the thesis whether you write it down or not.',
  4400139: 'A meaningful move with no obvious cause means your information set may be incomplete. Re-underwrite before reflexive confidence.',
  4400140: 'Sizing reveals implicit beliefs. If stated probability is 40% but size implies 70%, one of them is decoration.',
  4400141: 'Full Kelly assumes known probabilities. With estimated inputs, fractional Kelly is what survives.',
  4400142: 'A pre-entry 1-pager is the cheapest behavioral defense. The post-position memo is biased by ownership.',

  // ---------- Chapter 3: Modeling, Valuation, and Scenario Work ----------
  4103044: 'A mosaic triangulates; each input must be lawful, representative, and connected to revenue, margin, or valuation.',
  4103045: 'Honest reassessment requires acknowledging the original thesis broke. New facts may create a new thesis — explicitly.',
  4105110: 'Conflicting data is normal. Map each signal to the business model and timing before changing estimates.',
  4105111: 'Short work tests whether growth is economically real. Cohort-level contribution margin is the load-bearing number.',
  4107390: 'Segment work reveals what the market is really paying for. Growth that consumes cash needs a profitability path.',
  4107394: 'A model insensitive to its main driver is wired wrong. Sensitivity is a diagnostic tool, not decoration.',
  4107854: 'A geographically narrow sample creates false confidence. Local confounders (weather, regional macro) need stripping out.',
  4400200: 'HF models are weighted toward the next 1-2 prints — that is where variant perception cashes in. Outyears are just the anchor.',
  4400201: 'Build from net new ARR, churn, expansion, billings, and bridge to GAAP. KPI-shift is upstream of GAAP-revenue move.',
  4400202: 'Pre-print work is quarterly, KPI-driven, and explicitly bridged to consensus. The PM is buying your variant view, not your DCF.',
  4400203: 'Driver allocation is triage. Full builds on the lines where consensus is most likely to be wrong; hold the rest flat.',
  4400204: 'EV/Sales is the working anchor for unprofitable growth — cross-check against rule-of-40 and gross margin.',
  4400205: 'Mature capex-heavy businesses live on the EBITDA-FCF spread. EV/EBIT and P/FCF surface what EV/EBITDA hides.',
  4400206: 'Multiple comparability is mostly an accounting cleanup. Leases, SBC, preferred, minorities — same treatment across the peer set.',
  4400207: 'Sector multiples encode sector economics. P/TBV for banks, P/AFFO for REITs, EV/EBITDAX for E&P — generic shorthand misses the trade.',
  4400208: 'Scenario probabilities must sum to 100% before any EV computation. Otherwise the math has no interpretation.',
  4400209: 'Expected value = sum of weight × scenario. Compute it before deciding whether the trade is asymmetric.',
  4400210: 'Path-dependent trees branch at catalysts. Terminal-only trees hide the drawdown that matters to sizing.',
  4400211: 'Same EV is not same risk. Loss-weighted sizing favors the position with the smaller bear.',
  4400212: 'Reverse DCF surfaces the implied claim. Turn the valuation debate into a specific testable bar against history and unit economics.',
  4400213: 'Benchmark implied terminal margin against sector best-in-class. Above-best requires a specific structural reason — not "eventually."',
  4400214: 'Reverse DCF is a variant-view detector. It tells you where the market\'s implied path differs from yours and where the trade actually lives.',
  4400215: 'SOTP turns "the conglomerate is undervalued" into a number, and surfaces the conglomerate discount explicitly.',
  4400216: 'Stub value = parent market cap − value of public subsidiary stake. The implied stub is the trade.',
  4400217: 'Spinoff trades are catalyst-driven SOTP. Frame on rerating target, date, and the falsifier (delay, terms change, block).',
  4400218: 'Keep steady-state value and event premium separate. That lets you size the catalyst exposure and update cleanly after it resolves.',
  4400219: 'Catalyst conviction has to decay with time when there is no confirming evidence. Silence approaching the date is a Bayesian signal.',
  4400220: 'Multiple × EBITDA = EV, less net debt = equity, ÷ shares = target. Keep multiple effect separate from EBITDA upside.',
  4400221: 'Beta-neutral pair math is dollar × beta on both legs. Adjusting only one leg leaves residual market exposure.',
  4400222: 'Single-name short adds alpha when there is a real short thesis. ETF short hedges sector beta only.',
  4400223: 'Factor neutrality is achieved via sizing and offsetting positions, not by liquidating the alpha names.',
  4400224: 'Beta- and sector-neutral books still carry style exposures (often short vol) that only show up under stress.',
  4400225: 'R/R thresholds are useful only if they hold under pressure. "Close enough" and "high conviction" are the start of broken discipline.',
  4400226: 'Sizing tracks the R/R ratio, not the absolute upside or downside in isolation.',
  4400227: 'Bear-first pitches force articulation of failure modes specifically. "Limited downside" is a hand-wave.',
  4400228: 'The bar that moves the stock is the buyside whisper, not published consensus. Estimate where the buyside bar sits.',
  4400229: 'Straddle price divided by stock approximates the implied one-sigma move. Use it as the bar the option market is pricing.',
  4400230: 'A modest variant view at an elevated whisper after a long-positioning run is asymmetric to the downside.',
  4400231: 'Working backwards turns "expensive/cheap" into a specific testable claim. Name what the premium implies and test each candidate.',
  4400232: 'Sensitivity bands let you see the full surface — where the fund is paid, where it is exposed, where the no-edge zone is.',
  4400233: 'Two-variable break-evens show which lever the trade is most sensitive to and how much each can slip before the multiple re-rates.',
  4400234: 'Absolute priority: secured to par, unsecured to residual, equity zero when EV is below the senior claims. Modifications come via plan.',
  4400235: 'Event-driven payoff is probability-weighted EV. Naming the explicit probability is the work that makes the trade defensible.',
  4400236: 'The fulcrum is whichever layer receives the post-reorg equity — usually a partially impaired claim. Get this wrong and the trade is wrong.',
  4400237: 'Gross spread % over period × periods per year = annualized IRR. Mind the timing offset, not just the level.',
  4400238: 'Implied break probability = (market − break) / (deal − break). The math is mechanical; the work is forming your own view.',
  4400239: 'Anchor on the reference class that matches the deal (concentrated horizontal, vertical, cross-border) and update with case-specific evidence.',
  4400240: 'Borrow is the silent killer of short alpha. The thesis has to compress quickly to clear the carry.',
  4400241: 'Levered longs only improve returns when the marginal long clears financing — average return is the wrong test.',
  4400242: 'Short positions carry a dividend obligation in addition to borrow. Both belong in the short trade math.',

  // ---------- Chapter 4: Portfolio Review and Performance Attribution ----------
  4200060: 'Hit rate × win size − miss rate × loss size = expected value. Slugging matters as much as batting average.',
  4200061: 'Contribution tells you how reproducible returns are. Concentration risk hides inside positive headline returns.',
  4200062: 'Forward risk-reward changes after the catalyst. Holding full size is accepting a worse risk profile.',
  4103046: 'Size higher-uncertainty ideas smaller — equal sizing on unequal risk produces unequal contribution to risk.',
  4103047: 'A pair trade hedges sector beta but retains basis, timing, borrow, and thesis risk. It does not eliminate risk.',
  4105112: 'Liquidity is a hard constraint. A 60% upside is meaningless if you cannot enter or exit at scale.',
  4107856: 'Drift left unmeasured becomes drift left unmanaged. Net exposure creep is beta, not alpha.',
  4107865: 'Position size should reflect current risk-reward, not just historical cost. Winners need fresh portfolio review.',
  4400300: 'Sizing is conviction × asymmetry, capped by correlation, liquidity, and single-name limits. Undersizing high-conviction is a process error too.',
  4400301: 'Kelly under known inputs is optimal; with estimated inputs it collapses fast. Quarter- to half-Kelly absorbs the parameter uncertainty.',
  4400302: 'Caps exist precisely so that conviction does not silently translate into concentration risk. Loving the name is when the cap matters most.',
  4400303: 'Per-name caps see idiosyncratic risk; factor caps see clusters. Three names at 0.7 correlation is one factor bet.',
  4400304: 'A long that doubles becomes more of the book and is your friend; a short that doubles becomes more of the book and is killing you.',
  4400305: 'VaR is a quantile, not a maximum. It is silent about the size of the tail beyond the confidence level.',
  4400306: 'Sqrt-of-time scales VaR under iid normal. Real returns have vol clustering, so the scaled number understates stressed-regime risk.',
  4400307: 'Under normality, 99% VaR ≈ 1.41× the 95%. Most "bad-but-not-catastrophic" days live between the two thresholds.',
  4400308: 'The contrast between two crisis scenarios is more informative than any single number. It reveals which kind of crisis the book is built around.',
  4400309: 'In a Black Monday gap, correlations move to 1, hedges blow out, liquidity vanishes. Realised loss exceeds "net × shock."',
  4400310: 'Beta-adjusted net translates notional into market-equivalent exposure. Equal-beta is almost never true.',
  4400311: 'Fama-French is academic return decomposition; Barra is commercial risk attribution. Different factor count, different purpose.',
  4400312: 'Factor returns are not alpha. Strip out the tilts that got paid before crediting the residual to skill.',
  4400313: 'A persistently positive residual is the most reliable signal that the factor model is missing something the book is exposed to.',
  4400314: 'A factor drawdown is a signal you own a factor exposure. Make the bet conscious — size it intentionally or hedge it.',
  4400315: 'A factor an LP can replicate via ETF is not what they are paying 2/20 for. Sign of contribution does not change that.',
  4400316: 'Style drift is an LP-trust problem before it is a risk problem. P&L does not retroactively change the mandate.',
  4400317: 'Style is the property of the current portfolio, not the entry decision. A value PM at 35x today runs a growth book.',
  4400318: 'Bring the factor data, ask the PM to walk through the rotation, frame around "what kind of book are we running." Let the data make the point.',
  4400319: 'Allocation = "where you were"; selection = "what you picked." Net offsetting is exactly when Brinson is most useful.',
  4400320: 'Comparison is to benchmark total return because that is the opportunity cost of doing nothing — the relevant baseline for skill.',
  4400321: 'Benchmark weight isolates pure picking skill. Portfolio weight would contaminate selection with the size of the sector bet.',
  4400322: 'Interaction is the cross term — paid for being right on both allocation AND selection in the same sector simultaneously.',
  4400323: 'Idiosyncratic residual after factor attribution is the cleanest proxy for alpha. Total return is not alpha.',
  4400324: 'A 1.4 t-stat does not rule out luck. Three years is too short to distinguish skill statistically.',
  4400325: 'A turn in the residual is a diagnostic trigger, not a verdict. Investigate before re-staffing or de-grossing.',
  4400326: 'Current drawdown is measured against the all-time high. Partial recovery does not reset the high.',
  4400327: 'LPs experience time, not just magnitude. Time underwater tests redemption discipline regardless of eventual recovery.',
  4400328: 'Calmar penalises realised drawdown; Sharpe penalises volatility. They tell different stories for skewed return distributions.',
  4400329: 'Sortino shines on positively skewed strategies. For symmetric L/S returns, Sharpe and Sortino agree.',
  4400330: 'IR isolates active skill — excess return per unit of active risk. Sharpe rewards beta the LP could have bought cheaply.',
  4400331: 'The right ratio depends on the question. Picking the highest number is salesmanship, not analysis.',
  4400332: 'High SI + long days-to-cover is a squeeze setup. The trade can still work, but it argues for smaller size and a catalyst window.',
  4400333: 'Crowded longs share an exit door. The position is more correlated with peer-fund stress than with the company.',
  4400334: 'Crowding is a path-risk input, not a thesis input. Right-size the bet and plan for adverse drawdowns the score predicts.',
  4400335: 'Thesis-on-track with multiple compression is a candidate to add to, not cut. P&L sign is not the same as thesis status.',
  4400336: '"Catalyst hit, stock down" usually means buy-the-rumour-sell-the-news. Re-anchor on a fresh forward catalyst.',
  4400337: 'Decompose winners into earnings growth and multiple expansion. A name carried by multiple expansion is less defensible.',
  4400338: 'Grade on forward asymmetry, not month\'s P&L. Otherwise thesis-on-track losers get cut and thesis-failed winners held.',
  4400339: 'Proactive, specific, honest. Burying material adverse events in year-end attribution is the trust failure.',
  4400340: 'Days-to-exit at low ADV participation is the standard institutional liquidity metric. Sizing should reflect it directly.',
  4400341: 'Pair attribution decomposes into long leg P&L, short leg P&L, and execution slippage. The headline net hides the story.',

  // ---------- Chapter 5: Shorts, Crowding, and Risk Control ----------
  4103042: 'Gross adds long and short magnitudes; net subtracts. 140 long + 80 short = 220 gross, 60 net long.',
  4103043: 'Crowded shorts with high borrow + a positive catalyst is a textbook squeeze setup. The downside is unbounded.',
  4105108: 'Re-underwrite first. Mechanical exits on any decline destroy compounding; reflexive averaging-in destroys capital.',
  4105109: 'Single-name research can still create portfolio-level factor bets. Monitor exposures that may dominate idiosyncratic alpha.',
  4105115: 'Borrow stress causes forced covers. Scarce borrow costs the short seller; it does not pay them.',
  4107382: 'Rules and thesis have to talk to each other. The stop forces discipline; the thesis test asks whether the rule still applies.',
  4107389: 'Borrow is a real, ongoing cash cost. 12% × 2 years almost entirely offsets a 25% expected downside.',
  4107863: 'Crowded trades move violently when the thesis breaks. Risk management includes who else may need the door.',
  4400400: 'GC names are nearly free to short; HTB names eat into return through ongoing financing cost.',
  4400401: 'Reg SHO requires a documented locate before the short sale. Settlement timing does not waive the requirement.',
  4400402: 'When borrow cannot be sourced, the PB executes a buy-in at market — fees do not keep the position open.',
  4400403: 'On HTB names with negative rebates, the short seller pays. Borrow fees accrue daily, not as a one-time charge.',
  4400404: 'Shorts owe the dividend in cash to the lender — "payment in lieu." Model it into expected return across the ex-date.',
  4400405: 'Fraud shorts work eventually but the timing is unknowable. Size, structure, and survivability beat thesis precision.',
  4400406: 'Structural decline shorts are slow burns. Borrow cost over a multi-year window kills the trade more often than the thesis does.',
  4400407: 'Multiple compression requires a catalyst. Overvaluation alone can persist for years while you bleed borrow.',
  4400408: 'Event shorts have a known timing window — option-based structures are natural. Put spreads cap downside on a wrong print.',
  4400409: 'When SI exceeds float, even a moderate move forces covering that consumes available shares — a positive feedback loop.',
  4400410: 'Short calls leave dealers short gamma. As spot rises into strikes, delta rises sharply, forcing dealers to buy.',
  4400411: 'Sustained retail mention volume on a heavily-shorted name is one of the cleanest signals that squeeze risk is rising.',
  4400412: 'DTC is short interest / ADV. It is a quantity measure of exit friction, not a financing measure.',
  4400413: 'Sequence: reduce exposure first, hedge the residual with calls, re-underwrite. Buying vol at the wrong moment compounds the loss.',
  4400414: 'SI/float is the structural crowding measure. Dollar SI alone diverges sharply when floats differ.',
  4400415: 'Style-similar funds correlate hard under stress. Heavy peer overlap is crowding, not validation.',
  4400416: 'High utilization + rising borrow = short demand exhausting lend supply. Recall and buy-in risk is elevated.',
  4400417: 'DTC uses average volume, which is the wrong baseline during a squeeze — offered volume collapses, bid volume explodes.',
  4400418: 'Trim to a size that survives a further 25% adverse move within VaR. Path risk during a squeeze rises non-linearly.',
  4400419: 'Long calls against a short cap the upside loss tail at the strike (plus premium) for the option window.',
  4400420: 'Cover the squeezing leg first. Selling the other leg first leaves the naked short exposed during execution.',
  4400421: 'TRS gives synthetic short exposure with borrow mechanics outsourced. Counterparty risk to the dealer replaces stock-loan operational risk.',
  4400422: 'Put spreads cap loss at premium and gain at spread width. No borrow, no recall, fixed expiry.',
  4400423: 'Selling naked calls replicates short economics with an OTM buffer but with the same unbounded upside loss.',
  4400424: 'CDS pays off on credit events, not on equity declines. Not a short-equity proxy — payoffs only correlate at the tail.',
  4400425: 'VaR is the loss threshold exceeded only X% of the time. It says nothing about the size of the tail beyond it.',
  4400426: 'Sqrt(t) scaling assumes iid normal. Stress regimes show clustering, so the scaled 10-day number understates risk.',
  4400427: 'VaR summarises normal regimes under a fitted distribution; stress tests simulate specific shocks the fit considers too rare.',
  4400428: 'Tail hedging is an explicit cost in exchange for path stability and avoidance of forced liquidation.',
  4400429: 'VIX calls settle on VIX futures, not spot. Contango is a cost, not a discount, and spot VIX moves do not translate one-for-one.',
  4400430: 'Tail funds are negative-carry on average and positive in crashes. Size small enough to bear the drag, large enough to matter in a real drawdown.',
  4400431: 'Single-name caps protect against the position that "couldn\'t lose." Passive over-cap is still over-cap.',
  4400432: 'Sector is classification; factor is behavior. A factor-neutral book can still be sector-concentrated and vice versa.',
  4400433: 'A 4% position taking 12 days to exit is not the same risk as one taking a day. Liquidity-adjusted risk belongs in sizing.',
  4400434: 'Gates and side pockets are emergency tools. Routine use means liquidity terms were mis-set against the underlying book.',
  4400435: 'UK rehypothecation allowed Lehman to use client assets as funding collateral — when the broker failed, the assets joined the estate.',
  4400436: 'PBs allowed concentration that was invisible across the dealer set. Each saw its slice; none saw the aggregate.',
  4400437: 'Trade reconciliation is the operational backbone of NAV. Small breaks ignored on day one become NAV restatements on day 30.',
  4400438: 'NAV accuracy for illiquid positions depends on a layered policy. Single-source marks are the structural failure.',
  4400439: 'Truthful, well-sourced research is protected; falsity and intent are what trigger short-and-distort liability. Disclosure required.',
  4400440: 'The legal line is truth and intent, not loudness or direction. Activist short is legal; fabricated research is fraud.',
  4400441: 'Daily catches outliers while small; weekly surfaces drift. Neither alone is sufficient.',

  // ---------- Capstone: Apex Capital Partners ----------
  4400500: 'Apply the would-you-buy-it-today test at 8%. Compliance with the cap is the floor, not the question.',
  4400501: 'Identify the load-bearing pillar (growth, here) and name the specific cause of the deceleration — pull-forward, competition, or end-market.',
  4400502: 'Multiple compression is relative, not absolute. The premium to comps is what matters, not the headline number.',
  4400503: 'Disentangle conviction from concentration during a drawdown. The thesis is intact; the size is too big for the current risk budget.',
  4400504: 'For an FDA panel, the most recent CRL and company response is the closest thing to a script. Panel composition is secondary.',
  4400505: 'A Phase 3 announcement is 2.5-3 years from launch in orthopedics. Separate tape reaction from commercial impact.',
  4400506: 'Operational levers moved; the result missed. Test whether the gap is execution, macro, or measurement — the cause determines the read.',
  4400507: 'The combination — inventory + revolver + comp miss — changes the read in a way none of them does alone. Model the liquidity scenarios.',
  4400508: 'Gross is a portfolio-level decision separate from any single position\'s conviction. The factor backdrop drives it, not the names.',
  4400509: 'Sector tilt should be the output of the idea-quality process, not an independent decision. Test the process, not the tilt.',
  4400510: 'Restate the thesis. The structural short is independent of the activist SOTP unlock; size the new variable separately.',
  4400511: '22% SI + 9 DTC + 380 bps borrow is the joint signal. Cite the combination, not the levels in isolation.',
  4400512: 'Cover-or-hold separates thesis from risk. Thesis is intact; the squeeze setup is the actual reason to trim, not the P&L.',
  4400513: 'Size against expected P&L over carry — 2.5-3x hurdle. Below it, smaller is better risk-adjusted than larger.',
  4400514: 'Probability-weight the payoff: 0.65 × 65% loss − 0.35 × 180% loss ≈ −20.75%. Naked size is not justified by likelihood alone.',
  4400515: 'Convert negative-EV naked short into positive-EV structured trade. Edge expressed through structure is still edge.',
  4400516: 'Options overlay vs naked short is a loss-shape choice, not a loss-size choice. The premium is the price of capping the squeeze tail.',
  4400517: 'Trial delays carry information about analysis complexity. Apply neither folk wisdom — test the stated reason against trial design.',
  4400518: 'Crowded-short tape elevates joint-squeeze probability. Differentiated reduction on the most crowded names beats blanket cuts.',
  4400519: 'Diversification is the joint payoff distribution, not the count by thesis type. Test across factor regimes.',
  4400520: 'Both legs went up — the loss came from the spread. Split sector beta from idiosyncratic, because the response is different for each.',
  4400521: 'Dollar-neutral vs beta-neutral is a basis-vs-complexity trade-off. The choice depends on whether the pair is a market hedge or a pure spread bet.',
  4400522: 'Attribution opens portfolio-level questions. M&A optionality on the short leg is a category of risk that may exist elsewhere.',
  4400523: 'Unwind the structure once an exogenous event breaks the spread, even if standalone conviction on the long leg is intact.',
  4400524: 'Surface the contributors first, then decide which are conviction-driven (keep) vs accidental (consider trimming).',
  4400525: 'Joint quality + growth + momentum describes a specific style. Make it explicit and decide whether to size it down or embrace it.',
  4400526: 'Name adjustment is slower but cleaner; ETF hedges introduce basis risk that materializes when the hedge is supposed to work.',
  4400527: 'Notional net and beta-adjusted net are different statements. When they diverge, the gap belongs in the LP letter.',
  4400528: 'Long crowding is asymmetric to short crowding — coordinated forced selling, not squeeze. The mechanism is similar; consequence different.',
  4400529: 'Short-book crowding multiplies single-name squeeze risk through shared PB exposure. Joint risk is not the sum of independent risks.',
  4400530: 'Math first, narrative second. Letting the team tell the story first and back-fitting numbers later produces a comfortable wrong post-mortem.',
  4400531: 'Separate the per-share move (factor) from the fund-level pain (sizing). Sizing is the lever the PM controls.',
  4400532: 'Long-short attribution during drawdowns is usually a joint failure with one side larger. Name both contributions and both mechanisms.',
  4400533: 'Process-vs-tape determines the corrective response. Naming the split prevents over-correcting the rest.',
  4400534: 'Run base case (historical factor moves) and crowding-adjusted case. The gap is the additional risk the historical analog understates.',
  4400535: 'Lead with the factor attribution. Endowment and family-office LPs respect quantitative explanation more than narrative.',
  4400536: 'Direct without over-apology, paired with specifics. Tone without numbers reads as performative.',
  4400537: 'Lead with the quarter and the index comparison. Burying behind better numbers reads as evasive.',
  4400538: 'Acknowledge directly, offer an in-person follow-up, do not close the sale on the inquiry call. Earn the next conversation.',
  4400539: 'LPs already know the top positions. Name the load-bearing contributor and pair with a forward-conviction statement.',
  4400540: 'Pipeline shape reveals sourcing biases. Same-tilt pipeline compounds the existing exposure; consciously source diversifying ideas.',
  4400541: 'Rebalance to change the factor profile, not just the size. Refilling capacity with same-tilt names is bookkeeping, not portfolio construction.',
  4400542: 'Use the rebalance to act on the crowding read. Selective avoidance of crowded candidates lowers the short book\'s joint risk.',
  4400543: 'Adding into a drawdown is justified by new information, not by price. The trim was a concentration decision, not a price-anchored one.',
  4400544: 'Capital after an exit is uncommitted. Conviction + portfolio fit, not sector continuity, drives the next allocation.',
  4400545: 'Surgical policy refinement beats blunt caps. Factor-aware caps target the joint risk; flat caps over-correct and under-protect.',
  4400546: 'Sector cap reviews should create a usable buffer between current exposure and limit. Surgical reduction, not headline numbers.',
  4400547: 'Modest gross reduction (5-10 points) handles earnings risk without compounding the LP signal during a drawdown.',
  4400548: 'Stops on structural shorts into a defined catalyst are re-underwriting triggers, not mechanical exits. Apply logic, not mechanics.',
  4400549: 'Three sections: what happened, what we change, what we keep. Each section earns its place in the order of trust.',
}

export const HF_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  4400000: {
    newCorrect: 'Gross ~160% ($1.3B long + $300M short = $1.6B), net ~100% ($1.3B − $300M = $1.0B) — a long-only book with a short overlay.',
    lessonAddendum: 'The fund is essentially fully long-biased with a small short overlay funded by the extension. Not market neutral; not a hedged fund in any meaningful sense — a long-only book with a tilt mechanism.',
  },
  4400001: {
    newCorrect: 'Roughly half of long-only market beta; performance will look much more like long-only in up markets than the gross figure suggests.',
    lessonAddendum: 'The fund aims to generate the rest from spread between longs and shorts. The short book is the alpha vehicle, not the hedge — meaning in up markets the book carries roughly 40% of upside, and in sell-offs roughly 40% of downside.',
  },
  4400002: {
    newCorrect: 'Gross spread $2 (~4.2%) over 4 months — annualizes to ~13% if it closes on time; downside is the break price if the deal fails.',
    lessonAddendum: 'Break risk usually maps to regulatory or financing failure, with the standalone-price gap typically much wider than the spread itself. That asymmetry is exactly what the spread compensates for.',
  },
  4400005: {
    newCorrect: 'Short 2yr Treasury futures, long 10yr, DV01-neutral — earns when the curve flattens; repo funding lets the PM run high gross with modest net cash.',
    lessonAddendum: 'DV01-neutral sizing strips out parallel shifts so the trade isolates curve shape. Convexity and basis risk remain — pure level changes do not drive P&L.',
  },
  4400006: {
    newCorrect: 'Long realized vs implied — gains when daily gamma harvested exceeds theta paid; the bet is that the option was sold cheap vs actual moves.',
    lessonAddendum: 'Daily delta-hedging converts realized moves into cash gamma. The PM is left with a pure long-vega / long-gamma / short-theta position regardless of direction.',
  },
  4400007: {
    newCorrect: 'Net market exposure near zero, beta-neutral after adjusting for actual betas — sector/factor neutrality are separate, stricter constraints.',
    lessonAddendum: 'Market neutral is a construction constraint: dollar-neutral and beta-neutral against a stated benchmark. The fund still carries idiosyncratic risk on every position — that is where the alpha is supposed to live.',
  },
  4400008: {
    newCorrect: 'Independent teams (pods), each with its own PM, capital sleeve, tight stop-loss, and neutral mandate — alpha from the diversified sum.',
    lessonAddendum: 'The firm tolerates very little drawdown at the individual-pod level. The structural edge is diversification across uncorrelated teams plus the ability to fire underperforming pods quickly.',
  },
  4400009: {
    newCorrect: 'Stat arb holds hours-to-days on factor/mean-reversion signals; HFT holds microseconds-to-minutes on microstructure signals and competes on infrastructure.',
    lessonAddendum: 'Capacity is in the billions for stat arb and severely constrained for HFT. The businesses, capacity, and infrastructure profiles are entirely different despite both being "quant."',
  },
  4400013: {
    newCorrect: 'Asset-side liquidity must match or exceed redemption terms — otherwise redeeming LPs leave the fund with a concentrated illiquid stub.',
    lessonAddendum: 'This is the "liquidity mismatch" that has broken many funds (Third Avenue Focused Credit, 2015). The asset-side test is fastness-to-fair-value; the liability-side test is redemption cycle.',
  },
  4400014: {
    newCorrect: 'Pod is already running at reduced size — the next 3.5 points end it; few pods recover from this state because size reduction caps upside.',
    lessonAddendum: 'In practice the PM must find a high-conviction recovery within the remaining buffer or actively de-risk further. The asymmetry — deleveraged on the way down, no symmetric reload on the way up — is a feature, not a bug.',
  },
  4400015: {
    newCorrect: 'Leverage = gross exposure / NAV — sum of long and short absolute values divided by NAV; the mandate should specify the unit.',
    lessonAddendum: 'Alternative definitions (long-only leverage, regulatory leverage, VaR-based leverage) produce very different numbers. The first job on a leverage clause is to define the unit.',
  },
  4400019: {
    newCorrect: 'GP can move the illiquid slice into a side pocket if it fits the offering memo definition — redeemers stay pro-rata in the pocket until monetization.',
    lessonAddendum: 'Eligible assets are typically illiquid or hard-to-value. Investors who redeem are paid from the liquid book; the side-pocket portion follows them until the asset is sold, IPO\'d, or written off.',
  },
  4400021: {
    newCorrect: 'Pre-call topic clearance, prohibited-company lists, named-account bans, call recording, and an expert attestation against confidential disclosure.',
    lessonAddendum: 'Platform-level vetting (GLG, Third Bridge) is a precondition, not a substitute. The SAC settlement (2013) made the post-2014 norm sharp — process layered on top of the platform.',
  },
  4400024: {
    newCorrect: 'Long lockups, gates, and patient LPs (endowments, sovereigns) let the PM hold contrarian positions through drawdowns without forced selling.',
    lessonAddendum: 'The edge is in the asset selection that quarterly-redemption funds cannot afford to make. Real structural edge is encoded in the partnership agreement — lockups, gates, side pockets, redemption notice periods — not a vibe.',
  },
  4400025: {
    newCorrect: 'Most active management competes in 1-quarter to 1-year — the most efficient, most crowded window; 5-year competes in a less-crowded one.',
    lessonAddendum: 'The 5-year fund can hold through interim noise, pays less in trading costs and taxes, and earns the time-horizon arbitrage premium. The LP has to be the kind that understands this in advance.',
  },
  4400028: {
    newCorrect: 'Acting more rationally on the same publicly-available information — buying forced-selling situations below intrinsic value because most cannot.',
    lessonAddendum: 'It is structural (capital base) and disciplinary (process), not informational. A fund without lockups cannot reliably harvest behavioral edge because its own LPs become the panic seller.',
  },
  4400029: {
    newCorrect: 'The factor itself is no longer differentiated — owning a crowded factor is not edge; if the differentiation was within-factor selection, alpha may persist.',
    lessonAddendum: 'A factor that everyone owns has stopped being an edge. The serious question is what the residual edge is within the factor — selection, sector mix, sizing — and how much of historical alpha was the factor itself.',
  },
  4400030: {
    newCorrect: '~$200K management fee + ~$260K performance fee (20% of $10M × 15% − $200K) = ~$460K total fees, ~10.4% net to LP.',
    lessonAddendum: 'Performance fee is typically calculated on profits net of management fee. Management fee accrues on NAV regardless of performance — this is what makes asset-gathering attractive to GPs even without returns.',
  },
  4400031: {
    newCorrect: 'After year 2\'s loss, the fund must claw back to year-1\'s ending NAV before perf fee resumes — year 3\'s +8% does not fully recover.',
    lessonAddendum: 'The HWM is the highest NAV at which a performance fee has been paid. After a drawdown the GP works at management fee only until the LP is whole — a real incentive alignment, and a reason underperforming funds eventually close down rather than fight the climb back.',
  },
  4400032: {
    newCorrect: 'Soft hurdle: clear 5%, then 20% of full 8% = 1.6%. Hard hurdle: 20% of excess (3%) = 0.6%.',
    lessonAddendum: 'Hurdles apply to the performance fee only, not the management fee. The two structures produce very different fees at returns near the hurdle, which is exactly what LPs negotiate during onboarding.',
  },
  4400033: {
    newCorrect: 'Lower fees (often half on both) in exchange for longer lockup, larger minimum check, and early-stage manager risk.',
    lessonAddendum: 'The GP discounts fees to anchor AUM and the LP takes early-stage risk. On a $10M check over 5 years at 10% gross, 1-and-10 vs 2-and-20 compounds to several hundred thousand dollars of saved fees.',
  },
  4400034: {
    newCorrect: 'Redeemers are paid out of the liquid book; they continue to hold their pro-rata side pocket until it monetizes (sale, IPO, write-off).',
    lessonAddendum: 'The pro-rata side-pocket interest follows the investor — they retain economic exposure even though they have redeemed from the main fund. Cannot redeem the side pocket on the regular cycle.',
  },
  4400035: {
    newCorrect: 'Investor-level: each LP can redeem at most 25% per period (caps one LP\'s speed). Fund-level: total redemption ≤ 20% of NAV (caps aggregate).',
    lessonAddendum: 'Both can apply simultaneously and serve different purposes. Some gates are automatic on every redemption period; others are GP-discretionary and only activated under stress — the offering memo specifies which.',
  },
  4400036: {
    newCorrect: 'March 15 + 60 days = May 14, so the next eligible date is June 30 — proceeds typically paid ~30 days after, end of July.',
    lessonAddendum: 'Notice period plus redemption frequency together determine the actual exit speed. A 60-day notice / quarterly fund effectively means up to 5 months between submitting notice and receiving cash. LPs underestimating this is a common cause of unexpected liquidity tension.',
  },
  4400037: {
    newCorrect: 'Strategy holds 1-3 year positions in mid/small caps — without a lockup, redemption-driven selling forces the PM to abandon thesis-good positions at the worst price.',
    lessonAddendum: 'The lockup aligns the LP base with the strategy horizon. Without specific asset-side reasons (illiquidity, multi-year thesis), the lockup is just friction.',
  },
  4400038: {
    newCorrect: 'Election rights to the most favorable terms granted to subsequent LPs of comparable or smaller size, tiered by commitment with specific carve-outs.',
    lessonAddendum: 'In practice MFN is only granted to LPs above a certain commitment threshold, excludes specific provisions (regulatory, tax-driven, governance), and triggers a defined disclosure cycle of subsequent side letters to MFN-eligible LPs.',
  },
  4400040: {
    newCorrect: 'Smaller checks across many managers, expected fee discounts, tighter ODD per dollar, shorter holding periods, and own-LP redemption risk.',
    lessonAddendum: 'FoHFs are a useful but less stable LP type. They underwrite faster than pensions and endowments, but their own LP base introduces redemption risk to the underlying fund.',
  },
  4400041: {
    newCorrect: 'Pensions: heavy governance, consultant-gated, slow, large but standardized. Endowments: smaller staff, conviction-driven, faster, willing to rotate.',
    lessonAddendum: 'Both are long-duration in principle but their decision processes, staff sizes, and governance are very different. Fundraising calendars and meeting prep should reflect the difference — the same pitch deck works for both but the diligence cycle does not.',
  },
  4400042: {
    newCorrect: 'Very long cycles (9-18 months), multi-team review, site visits, deep document requests, background checks, and bespoke side-letter terms.',
    lessonAddendum: 'The eventual check is large and sticky but the cost of getting there is very high. Some funds choose not to pursue SWF capital specifically because of the operational burden of onboarding.',
  },
  4400043: {
    newCorrect: 'Faster decisions than institutions (single principal or small IC), concentrated bets, willing to back emerging managers — but quick to exit on disappointment.',
    lessonAddendum: 'Family offices are heterogeneous. The shared traits are speed of decision and concentration of authority, but everything else varies. The IR team should not assume "family office" is one customer profile.',
  },
  4400044: {
    newCorrect: 'Firm, strategy, portfolio construction, risk, performance, organization, operations, compliance, valuation, fees, ESG — answered from a master DDQ updated quarterly.',
    lessonAddendum: 'A well-maintained master DDQ is one of the IR team\'s key assets. It accelerates allocator processes, ensures consistency across LPs, and reveals when the firm\'s representations need updating. Inconsistent DDQ answers across LPs are a tell during ODD reviews.',
  },
  4400045: {
    newCorrect: 'Independent third-party NAV strike is the foundational operational control — every major HF fraud (Madoff, Petters, Stanford) featured weak admin.',
    lessonAddendum: 'When the GP strikes NAV in-house, the firm has both means and motive to misstate. Institutional allocators treat third-party administration as a hard requirement — funds without it are typically uninvestable for any pension, endowment, or SWF.',
  },
  4400046: {
    newCorrect: 'Good: documented policy, independent committee, tiered Level 1/2/3 approach, vendor reviews, explicit treatment of stale/illiquid. Bad: PM-marked, no committee, ad-hoc illiquids.',
    lessonAddendum: 'Valuation policy is one of the most-tested areas in ODD because it is where unrealised P&L (and therefore performance fee) is determined. The committee must be independent of the PMs and the treatment of edge cases pre-specified.',
  },

  // ---------- Chapter 2 shortenings ----------
  4400100: {
    newCorrect: 'Catalyst, horizon, sizing rationale, exit rule, and the specific evidence that would invalidate the thesis.',
    lessonAddendum: 'A real thesis names what will happen, when, why the market will recognize it, how it sizes in the book, what the exit looks like, and what would prove it wrong. Anything less is a description of a company, not a position.',
  },
  4400107: {
    newCorrect: 'A narrative explains why the story is appealing; a thesis names the financial behavior, timing, evidence, and invalidation that turn the story into a position.',
    lessonAddendum: 'A narrative can omit numbers, horizon, sizing, and kill criteria; a thesis must include them. Most pitches that fail confuse the two.',
  },
  4400114: {
    newCorrect: 'As one input in a broader mosaic — the expert\'s framing of pricing and hiring helps interpret public data without being used to back into undisclosed financials.',
    lessonAddendum: 'Expert networks are legitimate when the call sticks to industry context and the expert\'s general expertise. They become a problem when analysts use them to reconstruct an issuer\'s undisclosed numbers indirectly.',
  },
  4400115: {
    newCorrect: 'End the call, document the disclosure, restrict trading in both names until compliance clears, and treat the information as MNPI received.',
    lessonAddendum: 'Receiving MNPI by accident is the most dangerous moment in a hedge-fund analyst\'s week. End, restrict, document, escalate — not dilute or rationalize. Every serious shop has this protocol.',
  },
  4400117: {
    newCorrect: 'Coverage of segments where the panel under-indexes (international, cash, prepaid) — the 12% may over- or understate true growth depending on which segment drove the change.',
    lessonAddendum: 'Every alt-data source has a coverage shape — what it sees clearly, what it sees partially, what it cannot see at all. Using credit-card panels well means knowing which of the company\'s revenue lines the panel actually represents.',
  },
  4400118: {
    newCorrect: 'The 8% may reflect traffic concentration from closed stores rather than organic same-store growth — decompose against the closure footprint.',
    lessonAddendum: 'A naive read of flagship parking lots will read store-closure concentration as organic growth — exactly the trap satellite data sets for analysts who skip the decomposition.',
  },
  4400119: {
    newCorrect: 'Terms of service, computer fraud statutes, IP throttling, and reputational risk of being identified — all need evaluation, even on publicly displayed data.',
    lessonAddendum: 'Web scraping sits in a genuinely gray legal area. The discipline is asking whether the technique is defensible if the company being scraped finds out, whether the terms of service prohibit it, and whether the volume of access is a problem under access-control statutes.',
  },
  4400120: {
    newCorrect: 'Material nonpublic information if the disclosure is material — Reg FD obligates the issuer to broadly disclose; the analyst cannot trade on it first.',
    lessonAddendum: 'Reg FD shifts the burden to the issuer to broadly disclose, but the analyst still has to act as if selective disclosures may be MNPI. The safest reflex is to flag, restrict, and let compliance evaluate.',
  },

  // ---------- Chapter 3 shortenings ----------
  4400200: {
    newCorrect: 'One to two quarters of granular KPI work that ties to the next prints, with a thinner outyear shell to anchor terminal value.',
    lessonAddendum: 'HF models are weighted toward the next one to two prints because that is where variant perception cashes in. The outyear shell exists to keep the terminal anchored, not to win arguments with the sell side on year-five EPS.',
  },
  4400201: {
    newCorrect: 'Bottom-up build from net new ARR, gross churn, expansion, and billings — tied to GAAP revenue through the deferred-revenue bridge.',
    lessonAddendum: 'Growth-rate-on-growth-rate models cannot tell you why the rate is changing. The HF edge is upstream of the GAAP line — at the operational KPIs that actually move first.',
  },
  4400202: {
    newCorrect: 'A quarterly model with explicit KPI assumptions for the next print and two after, plus a bridge from your numbers to consensus on revenue and EPS.',
    lessonAddendum: 'Pre-print work is quarterly, KPI-driven, and explicitly bridged to consensus. The PM is buying your variant view on the print, not your DCF — and needs to see exactly where you differ from the Street and why.',
  },
  4400203: {
    newCorrect: 'The 2-3 line items where consensus is most likely to be wrong and the next-quarter P&L is most sensitive — usually a top-of-funnel KPI, a margin lever, and capital return.',
    lessonAddendum: 'Driver allocation is a triage decision. The lines that get full driver builds are the ones where your variant view sits. Everything else can be held flat or scaled, because the fund is not paid for completeness.',
  },
  4400204: {
    newCorrect: 'EV/Sales with a forward revenue base, cross-checked against rule-of-40 and gross margin so the multiple reflects revenue quality.',
    lessonAddendum: 'EV/Sales is the working anchor for unprofitable growth because it normalizes against revenue without depending on management add-backs. The cross-check is whether the revenue is high-quality.',
  },
  4400206: {
    newCorrect: 'Add operating leases to EV, subtract net cash properly, use a consistent EBITDA definition across the peer set (same SBC and one-time treatment).',
    lessonAddendum: 'Multiple comparability is mostly an accounting cleanup exercise. Leases, SBC, one-time items, and the full EV bridge (preferred, minorities, NCI) have to be treated the same across the peer set, or the multiple is comparing apples to a different fruit.',
  },
  4400207: {
    newCorrect: 'P/TBV and ROTE for the bank; P/AFFO and cap rate for the REIT; EV/EBITDAX or NAV/share for the E&P — each sector has a metric that captures its economics.',
    lessonAddendum: 'Sector multiples encode the economics the sector actually trades on. Generalists who skip this end up valuing every business as a generic industrial — exactly the trap the specialist exploits.',
  },
  4400211: {
    newCorrect: 'Long B — same EV but smaller bear loss, so loss-weighted sizing supports a bigger position; A has more dispersion at the same EV.',
    lessonAddendum: 'Equal EV is not equal risk. Loss-weighted sizing weights against the bear-case drawdown — that is how funds compound without giving back gains in drawdowns.',
  },
  4400213: {
    newCorrect: 'The implied 28% sits above sector best-in-class — the market is pricing structural margin leadership the company has not earned; needs a specific reason.',
    lessonAddendum: 'Reverse DCF on terminal margins is most useful when the implied number is benchmarked against the sector best-in-class. Implied margins above the best peer require a specific structural argument — mix, pricing power, scale — not "eventually."',
  },
  4400214: {
    newCorrect: 'It tells you the market\'s implied assumptions — if they\'re structurally different from yours, you have a measurable variant view; if similar, the gap may be multiple-rerating, not fundamental.',
    lessonAddendum: 'Reverse DCF is most useful as a variant-view detector. It tells you where the market\'s implied assumptions sit relative to yours, which lets you locate the trade — fundamental disagreement, multiple rerating, or simply consensus matching your case.',
  },
  4400215: {
    newCorrect: 'Each segment at peer multiples summed to EV, less net debt and corporate overhead — the gap is the conglomerate discount, which becomes the catalyst question.',
    lessonAddendum: 'SOTP turns "the conglomerate is undervalued" into a number. Once the discount is named, the thesis is really about whether a catalyst (spinoff, breakup, activist) will close it.',
  },
  4400216: {
    newCorrect: '65% × $30B = $19.5B; parent $25B implies stub value of $5.5B for the operating business — that stub is the trade.',
    lessonAddendum: 'Stub value math is the bread-and-butter of HF setups involving listed subsidiaries. The implied stub is the trade — once named, the question becomes whether it is too cheap, too rich, or fairly priced given the structure.',
  },
  4400218: {
    newCorrect: 'Steady-state DCF as the anchor, with a probability-weighted catalyst overlay added separately — base value and event premium kept distinct.',
    lessonAddendum: 'Catalyst-driven setups need the steady-state value and the event premium kept separate. That structure makes it possible to size the catalyst exposure independently and to update cleanly after the event resolves.',
  },
  4400220: {
    newCorrect: '$50/share — 12x × $1B = $12B EV, less $2B net debt = $10B equity, ÷ 200M shares = $50.',
    lessonAddendum: 'Rerating math is straightforward when disciplined: target multiple × EBITDA = EV, less net debt = equity, ÷ shares = target price. Keep the multiple effect separate from any EBITDA upside so each can be argued independently.',
  },
  4400221: {
    newCorrect: '$15M Short B — beta-weighted exposure: $10M × 1.2 = $12M; $12M / 0.8 = $15M short to neutralize.',
    lessonAddendum: 'Beta-neutral pair math is dollar-times-beta on both legs. Long-side beta-weighted exposure must equal short-side beta-weighted exposure — failing to adjust both legs leaves residual market exposure that defeats the pair structure.',
  },
  4400223: {
    newCorrect: 'Adjust sizes or add factor hedges so book loadings are near zero — via factor models and incremental tilts, not by liquidating alpha positions.',
    lessonAddendum: 'Factor-neutral construction means the book\'s factor loadings (quality, momentum, low-vol, etc.) are near zero by design. The operational mechanic is sizing adjustments and factor hedges, not liquidation — alpha is preserved while unintended factor bets are removed.',
  },
  4400224: {
    newCorrect: 'Beta and sector hedges leave style/factor exposures unhedged — the book is implicitly short vol, which only shows up on stress days.',
    lessonAddendum: 'Beta- and sector-neutral books still carry style and factor exposures that only show up under stress. The discipline is to run the book through a factor model, identify the residual exposures, and decide explicitly which to hedge.',
  },
  4400228: {
    newCorrect: 'The $1.26B buyside whisper — long positioning means consensus is the headline, not the bar; the print is measured against the implied buyside number.',
    lessonAddendum: 'Earnings reactions are about print vs the buyside bar, which is often above published consensus when positioning is long. The work before the print is to estimate where the buyside bar actually sits — positioning, options pricing, channel checks — not just to compare your number to the Street.',
  },
  4400230: {
    newCorrect: 'Positioning has pushed expectations above the whisper, and your number is barely above that — print risk is asymmetric to the downside even on a small beat.',
    lessonAddendum: 'Pre-print setups are about three numbers (consensus, whisper, your model) and the path the stock took to get there. A modest variant view at an elevated whisper after a long-positioning run is asymmetric to the downside.',
  },
  4400234: {
    newCorrect: 'Secured: $300M at par. Unsecured: remaining $250M / $400M claims ≈ 62¢. Equity: zero. Strict priority unless a plan modifies.',
    lessonAddendum: 'In a sub-preference exit the junior tranches and common are wiped. Distressed valuation runs through the cap structure waterfall — modifications happen via plan negotiations and are the trade question, not the default.',
  },
  4400236: {
    newCorrect: 'The unsecured bonds — partially in the money ($200M residual / $500M claims) and receive most of the post-reorg equity.',
    lessonAddendum: 'Fulcrum security selection is the bread-and-butter of distressed investing. The fulcrum is whichever layer of the cap structure receives the post-reorg equity — usually a partially impaired claim. Get it wrong and the trade is wrong.',
  },
  4400239: {
    newCorrect: 'Anchor on the narrowest reference class that matches (concentrated horizontal: 60%), update for case-specific evidence, and compare your number to the implied from the spread.',
    lessonAddendum: 'Antitrust break probability is the hardest part of M&A arb. The discipline is reference-class forecasting plus case-specific updates — and making your number explicit so the trade is sized against the implied probability from the spread.',
  },
  4400241: {
    newCorrect: 'Net on the levered slice is 9% gross − ~5.8% financing = ~3.2% — leverage amplifies both returns and drawdowns, raising the bar on the marginal long.',
    lessonAddendum: 'Long-side financing is real and amplifies both returns and drawdowns. The marginal long under leverage has to earn enough to clear the financing rate AND compensate for the larger drawdown profile — a higher bar than the average long has to clear.',
  },

  // ---------- Chapter 4 shortenings ----------
  4400300: {
    newCorrect: 'Conviction × asymmetry: +18% EV with 2.7-to-1 W/L justifies a top-quartile 4-6% position, haircut for correlation and liquidity.',
    lessonAddendum: 'Sizing in a discretionary book is conviction times asymmetry, capped by correlation, liquidity, and single-name limits. Undersizing high-conviction asymmetric ideas is just as much a process error as oversizing low-conviction ones.',
  },
  4400301: {
    newCorrect: 'Inputs are noisy estimates and optimal sizing collapses when probabilities are over-stated, so most shops cap at quarter- to half-Kelly.',
    lessonAddendum: 'Kelly is a useful sanity check on whether a position is in the right order of magnitude, not a sizing engine. Discretionary shops typically run quarter- to half-Kelly to absorb parameter uncertainty, then overlay single-name, factor, and liquidity caps before anything goes in the book.',
  },
  4400303: {
    newCorrect: 'Three names at 0.7 correlation behave like a single 13% position — the factor bet is well above what single-name limits were designed to govern.',
    lessonAddendum: 'Per-name limits constrain idiosyncratic risk; factor and sector limits constrain correlated clusters. When several positions share a factor, the right frame is the cluster exposure — and the cluster usually demands either a hedge or a trim before it shows up as a drawdown.',
  },
  4400304: {
    newCorrect: 'Shorts have bounded upside, unbounded downside, borrow cost, recall risk, and grow as losers — the position scales against you precisely when failing.',
    lessonAddendum: 'A long that doubles becomes more of the book and is your friend; a short that doubles becomes more of the book and is killing you. The mechanics of a short position growing against the PM is why disciplined shops size shorts smaller and stop them out earlier than longs at the same conviction.',
  },
  4400305: {
    newCorrect: 'You expect to lose more than $4.2M on roughly 1 day in 20 — the threshold beyond which losses fall in the worst 5% of the distribution.',
    lessonAddendum: 'VaR is a quantile of the daily P&L distribution given a model and a window. The honest reading is "loss exceeded with probability X on a normal day"; it says nothing about the size of the tail beyond that point — which is why every risk framework pairs VaR with stress tests and expected-shortfall measures.',
  },
  4400308: {
    newCorrect: 'The book is more exposed to credit and slow-burn correlation-spike regimes than to short, sharp dispersion regimes — the gap names the residual factor exposure.',
    lessonAddendum: 'Historical stress translates past factor moves into today\'s book and shows where the structural exposure sits. The contrast between two scenarios is often more informative than any single number — it reveals which kind of crisis the portfolio is built around, intentionally or otherwise.',
  },
  4400309: {
    newCorrect: 'In a Black Monday, correlations move to 1, options hedges blow out, liquidity disappears, and shorts squeeze on margin-driven covering.',
    lessonAddendum: 'In a Black Monday-style gap, the hedges that diversify on normal days stop working precisely when they are needed. Realised losses exceed the linear "net × shock" estimate because correlations move to 1, hedges blow out, and liquidity vanishes — which is the whole reason daily VaR is paired with gap-shock stresses.',
  },
  4400310: {
    newCorrect: '1.10 × 1.3 − 0.80 × 0.7 = 1.43 − 0.56 = 0.87, i.e. 87% market exposure — the notional 30% net understates true market sensitivity.',
    lessonAddendum: 'Notional net exposure assumes every long and short has beta 1.0 against the market — almost never true. Beta-adjusted net translates the book into market-equivalent exposure and is the more honest measure of how the portfolio will move with a market shock.',
  },
  4400311: {
    newCorrect: 'Fama-French: academic, 3-5 long-horizon factors for return decomposition. Barra: commercial, 50+ factors for short-horizon risk forecasting.',
    lessonAddendum: 'Both frameworks decompose returns into factor exposures, but they differ in granularity and purpose. Fama-French is the canonical return-explanation model with a small set of long-horizon factors; Barra is the production risk-attribution tool that powers most institutional pre-trade risk and post-trade attribution today.',
  },
  4400312: {
    newCorrect: 'Roughly half from a paid momentum tilt; ~80bp idiosyncratic alpha; size and value tilts cost the book — the portfolio leaned into expensive growth and out of small caps.',
    lessonAddendum: 'A factor attribution table separates "what got paid" (factor returns) from "what you actually picked" (residual). The honest read is to call out the factor tilts that worked, the ones that did not, and the residual — without quietly attributing factor returns to your own skill.',
  },
  4400313: {
    newCorrect: 'The residual is absorbing factors not in the model — crowding, short interest, revision momentum, or coarse sectors — partly a hidden factor bet.',
    lessonAddendum: 'A persistently positive residual is the single most reliable signal that the factor model is missing something the book is exposed to. The right response is to widen the factor universe — crowding, short interest, revision momentum, sub-industry — and re-attribute, not to assume the residual is pure skill.',
  },
  4400315: {
    newCorrect: 'Factor returns are not the PM\'s alpha — they are returns the LP could replicate cheaply via an ETF; allocators are pricing this out of HF fees.',
    lessonAddendum: 'Allocators increasingly decompose hedge fund returns into factor returns (cheap to replicate) and idiosyncratic alpha (the thing they pay 2/20 for). A persistent factor tilt that drives a meaningful share of P&L is not a feature in a fee conversation — it is precisely what the allocator is trying to net out.',
  },
  4400318: {
    newCorrect: 'Bring the time series with no commentary, ask the PM to walk through the rotation, and frame around "what kind of book are we running today vs the LP letter."',
    lessonAddendum: 'Style drift is most usefully caught early through a factor-exposure conversation framed around what the book is, not what it should be. Risk\'s job is to make the data visible so the PM can decide consciously — adversarial framing is rarely necessary if the time series tells the story plainly.',
  },
  4400319: {
    newCorrect: 'Right sectors, wrong stocks within them — sector calls worked, stock picking did not; net is positive but the sources are saying opposite things.',
    lessonAddendum: 'Brinson attribution separates "where you were" (sector or factor allocation) from "what you picked" (security selection within sectors). A PM who is paid for allocation but loses on selection has a very different process story than one who picks well in adverse sectors — and the LP cares about which one is recurring.',
  },
  4400322: {
    newCorrect: 'Cross term — the PM overweighted a sector AND picked names that beat the sector benchmark, so the two effects compound.',
    lessonAddendum: 'The interaction term in Brinson is the algebraically necessary cross-product that captures the joint contribution of allocation and selection in the same sector. It tells a PM where they were both in the right sector and picking the right names within it — usually the highest-conviction part of the book.',
  },
  4400324: {
    newCorrect: 'Three years cannot statistically separate skill from luck — consistent with skill, also consistent with a lucky run; evaluate process qualitatively.',
    lessonAddendum: 'A three-year track record is statistically thin. The honest reading is that the PM may be skilled, but the sample does not yet prove it — which is why allocators weight process diligence (investment philosophy, risk discipline, attribution quality) heavily against short-history performance numbers.',
  },
  4400325: {
    newCorrect: 'Process-review trigger — examine selection-effect across sectors, analyst rotation, name-level underperformance, and whether the prior alpha source was a slow factor.',
    lessonAddendum: 'A turn in the residual is a diagnostic trigger. The right work is to decompose where selection has degraded, whether new names underperform thesis more than old names did, and whether the historical residual was real or a slow-moving factor that has now reversed. The action set follows the diagnosis, not the loss.',
  },
  4400326: {
    newCorrect: 'Max drawdown = −15.4% (1.30→1.10); current drawdown = −9.2% (1.30→1.18) — both measured against the all-time high, not the recent trough.',
    lessonAddendum: 'Maximum drawdown and current drawdown are both peak-to-trough measures referenced to the highest NAV, not to recent troughs. A fund in a −9% drawdown is materially different from one at the high-water mark — and the metric is what tells LPs and the PM where the book actually stands.',
  },
  4400327: {
    newCorrect: 'LPs experience time, not just magnitude — 30 months underwater tests redemption discipline, and many allocators are size-constrained on holding period regardless of recovery.',
    lessonAddendum: 'Drawdown magnitude tells you how bad it got; time underwater tells you how long it took to feel okay again. Both matter to LPs because allocator behaviour (redemptions, rebalancing, employment of the PM) often turns on the duration of underperformance, not just its depth.',
  },
  4400331: {
    newCorrect: 'Probably IR against an equity benchmark — the LP\'s question is what this manager adds to existing equity exposure, which is exactly what IR measures.',
    lessonAddendum: 'The right ratio depends on the question. For a portfolio diversifier alongside existing equity exposure, the LP asks "what does this manager add beyond what I already own" — an information-ratio question. Each ratio answers something different; picking the highest one without picking the right one is salesmanship, not analysis.',
  },
  4400334: {
    newCorrect: 'Sizing and stop-discipline input, not thesis input — keep the bet but right-size; plan for 20-30% adverse moves independent of fundamentals.',
    lessonAddendum: 'Crowding is a path-risk input, not a thesis input. The disciplined response is to keep the bet but right-size it, plan for adverse drawdowns the crowding score is telling you to expect, and decide in advance how to behave if peer-driven dislocation hits before the thesis plays out.',
  },
  4400335: {
    newCorrect: 'Thesis-intact, multiple-compression loss — fundamentals are executing, the market is paying less per dollar; candidate to add unless the compression signals something fundamentals do not.',
    lessonAddendum: 'Position-level attribution must separate "what happened to the fundamentals" from "what happened to the multiple." Thesis-on-track with multiple compression is a different problem than thesis-failed — and the response (often: add) is opposite to the response on a real thesis failure (cut).',
  },
  4400337: {
    newCorrect: '~2/3 of the gain from multiple expansion, ~1/3 from earnings — the source is the less repeatable part, and the position is more vulnerable to compression than at entry.',
    lessonAddendum: 'Decomposing a winner into earnings growth and multiple expansion is the discipline that prevents a PM from believing the wrong story. A name carried by multiple expansion is a less defensible hold than the same name carried by earnings beats — and the honest attribution makes the next sizing decision visible.',
  },
  4400338: {
    newCorrect: 'Grade on thesis progress and forward asymmetry, not month\'s P&L — A = thesis-strengthened with strong forward asymmetry, F = thesis-failed, exit warranted.',
    lessonAddendum: 'Grading on monthly P&L is the surest way to lose discipline. Thesis-on-track losers become Fs and get cut; thesis-failed lucky winners become As and get held. The grade has to capture progress against the multi-quarter thesis.',
  },
  4400339: {
    newCorrect: 'Next regularly-scheduled letter — short, specific, no euphemisms — what happened, how the thesis was re-rated, the new forward case, what the PM did with size.',
    lessonAddendum: 'LP communication on a material adverse event is one of the most quietly compounding parts of the PM job. Proactive, specific, and honest — explaining what happened, how the thesis has been re-rated, and what the PM has done with the position — builds the trust that survives a real drawdown later.',
  },
  4400340: {
    newCorrect: '$40M / ($25M × 20%) = 8 trading days to exit — sizing should reflect path risk; ADV deterioration is the monitoring variable.',
    lessonAddendum: 'Days-to-exit at a low ADV participation rate is the standard institutional liquidity metric. A position that takes more than a few days to exit cleanly carries real path risk in any de-grossing scenario, and the metric belongs in sizing decisions alongside conviction and asymmetry — not as a separate compliance afterthought.',
  },
  4400341: {
    newCorrect: 'Long contributed +240bp, short −120bp, net +120bp; slippage reduced realised to +60bp — A simply beat B in a rising market, not market-neutral alpha.',
    lessonAddendum: 'Pair-trade attribution has to decompose into three things: long leg P&L, short leg P&L, and execution slippage on legging in and out. The headline net hides whether the relative-value thesis paid, whether the long simply outran the market, or whether execution costs are eating the edge.',
  },

  // ---------- Chapter 5 shortenings ----------
  4400409: {
    newCorrect: 'Above 100% SI/float, even a moderate move forces covering that consumes available shares — a positive feedback loop of buying.',
    lessonAddendum: 'Crowded shorts on names with limited float create reflexive squeezes. When shorts must cover into a thin tape, each cover lifts the price and forces the next short to cover at a worse level. SI/float above 50% is a structural red flag.',
  },
  4400410: {
    newCorrect: 'Selling calls leaves dealers short gamma — as spot rises through strikes, delta rises sharply, forcing dealers to buy stock to stay hedged.',
    lessonAddendum: 'A gamma squeeze happens when dealers are systematically short calls — as the stock rises into the strikes, their delta hedge requirement spikes and they buy more stock, which lifts the stock further. It compounds on top of any underlying short squeeze.',
  },
  4400418: {
    newCorrect: 'Trim to a size that survives a further 25% adverse move within VaR and single-name limits — preserves thesis exposure while controlling path risk.',
    lessonAddendum: 'Trimming is the discipline of right-sizing to the risk you can survive, not the conviction you have. Path risk during a squeeze rises non-linearly; the right response is exposure reduction proportional to that risk, not a binary cover-or-hold decision.',
  },
  4400427: {
    newCorrect: 'VaR describes normal-regime risk under a fitted distribution; stress tests describe path-dependent losses under shocks the fit considers too rare to model.',
    lessonAddendum: 'VaR and stress tests measure different things. VaR is a distributional summary at a confidence cut-off; stress tests are scenario-specific simulations that ignore the distribution. A risk dashboard that has one without the other is incomplete.',
  },
  4400428: {
    newCorrect: 'Evaluate cost against drawdown volatility and forced-delever cost — 1.5% drag matters only relative to what the hedge protects against.',
    lessonAddendum: 'Tail hedging is an explicit cost in exchange for path stability and forced-liquidation avoidance. The right question is not "how much does the hedge cost" but "how much would an unhedged drawdown cost in capital and in client behavior."',
  },
  4400430: {
    newCorrect: 'Size so normal-year drag is acceptable AND crash-year payoff offsets enough long-book drawdown to materially reduce forced-delever risk.',
    lessonAddendum: 'Tail-risk funds are negative-carry on average and positive-carry in crashes. The allocation has to be small enough not to dominate the portfolio in calm years and large enough to actually move the needle when the long book is in a real drawdown. Universa\'s public framing suggests 2-4% NAV is the typical range.',
  },
  4400431: {
    newCorrect: 'Trim back to the 5% cap regardless of conviction — concentration limits exist to prevent compounding into a position that can break the fund if wrong.',
    lessonAddendum: 'Single-name caps protect against the position that "couldn\'t lose" turning into the position that did. Conviction does not change the asymmetry — a 6.4% position carries 28% more single-name risk than a 5% one. The discipline is unconditional trimming.',
  },
  4400435: {
    newCorrect: 'UK rehypothecation rules allowed Lehman to use client assets as funding collateral — when Lehman failed, those assets became part of the bankruptcy estate.',
    lessonAddendum: 'Lehman 2008 taught the industry that PB choice and rehypothecation terms are real risk decisions, not operational details. Funds now routinely use multiple PBs, monitor rehypothecation caps, and maintain unencumbered cash buffers to survive a PB failure window.',
  },
  4400436: {
    newCorrect: 'PBs allowed concentration invisible across the dealer set — each saw its slice of the TRS exposure, none saw the aggregate; the unwind cascade hurt the slow PBs.',
    lessonAddendum: 'Archegos exposed two structural risks: TRS positions that hide aggregate concentration from each individual PB, and the unwind sequence in a cross-dealer default where speed of liquidation determines who eats the loss. PBs since have tightened single-name concentration limits and demanded firm-wide leverage reporting.',
  },
  4400438: {
    newCorrect: 'Valuation policy should require independent corroboration of Level 3 marks (broker quotes, transaction comps, fairness opinions) — single-source marks are the failure.',
    lessonAddendum: 'NAV accuracy for illiquid positions depends on a layered valuation policy: vendor mark plus corroborating broker quotes, transaction comps, and periodic independent review. Single-source marks are the structural failure that NAV audits routinely surface.',
  },
  4400439: {
    newCorrect: 'The fund profits from the gap between pre-report and post-publication price — research cost recovered through position size; the report is the catalyst.',
    lessonAddendum: 'Activist short selling is short research with a publication trigger. The fund\'s edge is finding evidence the market has not synthesized; the catalyst is the report itself. Position disclosure is required, the research must be defensible, and the strategy has known legal and reputational costs.',
  },
  4400440: {
    newCorrect: 'Distortion = materially false or misleading statements + intent to move the price; accurate research that happens to drop price is legal short-side advocacy.',
    lessonAddendum: 'The legal line between activist short selling and short-and-distort is truth and intent, not loudness or direction. Funds that build the research, source the claims, and disclose the position are operating within the rules; funds that fabricate or knowingly mislead are committing securities fraud.',
  },

  // ---------- Capstone shortenings ----------
  4400500: {
    newCorrect: 'The 8% weight is the *output* of conviction × appreciation — would you buy TCHO to 8% today with fresh capital? If no, the size is inertia, not underwriting.',
    lessonAddendum: 'Position sizing in a quarterly review is the would-you-buy-it-today test, not the don\'t-touch-winners reflex and not the mechanical-trim reflex. The size should equal current conviction at current price — and an 8% weight at $145M deserves an explicit re-underwrite.',
  },
  4400501: {
    newCorrect: 'Two of three pillars intact; the deceleration is load-bearing — name whether it\'s pull-forward, competition, or end-market softness, because cause changes the read.',
    lessonAddendum: 'A thesis re-underwrite is not pillar-counting and not waiting for more data. It is identifying which pillar is the load-bearing one for the current price, naming the specific cause of any change in that pillar, and committing to a read the PM can argue with.',
  },
  4400502: {
    newCorrect: 'TCHO went from a 14% discount to comps to a 22% premium — relative premium expanded; the question is whether fundamentals justify the wider gap.',
    lessonAddendum: 'Multiple compression in a comp set is a relative game, not an absolute one. The right read is whether the premium or discount to comps has tightened or widened — and whether the fundamental gap to those comps justifies the new spread. TCHO becoming a wider premium is what deserves the next question.',
  },
  4400503: {
    newCorrect: 'Trim 1.5-2% to bring TCHO to 6-6.5% — about concentration during a drawdown, not the thesis; conviction trims and concentration trims are different decisions.',
    lessonAddendum: 'Trim decisions during a drawdown should disentangle conviction from concentration. The TCHO thesis is intact; the concentration is the problem. A 1.5-2% trim back to a 6-6.5% weight preserves conviction while restoring the fund\'s ability to absorb a TCHO-specific shock.',
  },
  4400504: {
    newCorrect: 'Prior FDA correspondence (most recent CRL + company response) — the agency\'s own questions are the script; panel composition is secondary.',
    lessonAddendum: 'Catalyst tracking lives in the document trail. For an FDA panel, the most recent CRL and the company\'s response is the closest thing to a script you will get — panel composition and category context are useful color but secondary. Naming the load-bearing input lets the PM size the position into the catalyst with eyes open.',
  },
  4400505: {
    newCorrect: '2.5-3 years to launch even with clean trials — MDC has a first-mover window with codes and surgeon training in place; the announcement barely changes first-cycle revenue.',
    lessonAddendum: 'Competitor entry in medical devices is a long-cycle event. The analyst\'s job is to separate the tape reaction (immediate) from the commercial impact (years away). MDC\'s near-term catalyst — the panel — is largely independent of the competitor announcement; conflating them is how you over-react.',
  },
  4400506: {
    newCorrect: 'Two of three operational levers moved; the comp miss is load-bearing — name whether it\'s execution, macro, or measurement.',
    lessonAddendum: 'Turnaround check-ins live in the gap between input execution and output result. RTCO has moved the inputs the CEO promised; the output has missed. The right work is to test why — execution, macro, or measurement — and to give the PM a read on whether the thesis is delayed (sizing intact) or breaking (sizing decision).',
  },
  4400507: {
    newCorrect: 'Inventory growing into soft sales while drawing the revolver is the tell that separates a delayed turnaround from a breaking one — model the liquidity runway.',
    lessonAddendum: 'The diagnostic pattern in a turnaround is the *combination* of operational signals, not any single one. Inventory + revolver + comp miss together changes the read in a way none of them does alone. The PM\'s question becomes liquidity-runway; the analyst\'s job is to model the scenarios.',
  },
  4400508: {
    newCorrect: 'Gross is portfolio-level, separate from any single name\'s conviction — the question is whether 130% is right given the factor backdrop and LP tolerance.',
    lessonAddendum: 'Gross exposure decisions are portfolio-level decisions, not aggregated single-name decisions. Distinguishing the two is what separates a PM\'s review from an analyst\'s review — and the right answer to "should we reduce gross" depends on the factor backdrop and the LP context, not on whether each long is still a buy.',
  },
  4400509: {
    newCorrect: 'Tilts should reflect where the best idiosyncratic ideas live — output of process, not the macro view; the question is whether the process is working.',
    lessonAddendum: 'Sector tilt is the output of an idea-quality process, not an independent decision. The right review question is whether the ideas driving each overweight still meet the bar — and whether the tilt as a whole still reflects the bench. Mechanical neutrality and tape-driven reduction both replace the process with a heuristic.',
  },
  4400510: {
    newCorrect: 'Restate explicitly — original short was structural decline, not capital allocation; the 13D introduces a new bull case to size separately, not blend in.',
    lessonAddendum: 'Re-stating a short thesis after new information separates the original variables from the new one. ACO\'s structural thesis is intact; the 13D introduces a new path that has to be sized on its own merits. Blending the two — or refusing to update — both miss the discipline of stating what you actually believe at the new price.',
  },
  4400511: {
    newCorrect: '22% SI + 9 DTC + 380 bps borrow is the canonical pre-squeeze setup — size smaller regardless of conviction; path now includes a forced cover scenario.',
    lessonAddendum: 'Squeeze risk is a joint-signal problem: short interest *and* days-to-cover *and* borrow cost together produce the regime where forced covering becomes the dominant scenario. Sizing — not covering — is the response.',
  },
  4400512: {
    newCorrect: 'Hold and trim — thesis intact but squeeze risk elevated; trim level maps to days-to-cover, not P&L.',
    lessonAddendum: 'Cover-or-hold on an adverse short is the test of separating thesis from risk. The thesis on ACO is intact; the position\'s risk profile has changed because the squeeze setup has tightened. A trim that maps to the new risk — not to the P&L — is the move that lets the PM keep the thesis on without inviting a forced cover.',
  },
  4400513: {
    newCorrect: 'Size so expected P&L (downside × prob × time) covers ≥2.5-3x expected carry over the hold — below the hurdle, smaller is better risk-adjusted than larger.',
    lessonAddendum: 'Sizing a short under elevated borrow is a carry-versus-expected-P&L calculation, not a rule of thumb. The position has to clear a 2.5-3x hurdle on expected P&L over carry to justify the same size. The math is what turns the borrow rate into a sizing decision rather than a complaint.',
  },
  4400514: {
    newCorrect: 'EV ≈ (0.65 × 65%) − (0.35 × 180%) ≈ −20.75% — negative-EV at current size; only justified if probabilities are off or as part of a paired structure.',
    lessonAddendum: 'EV math on binary catalysts is the gating discipline before sizing. BIOSP at a 35/65 split with a +180/−65 payoff structure has negative expected value as a naked short — the size should reflect the asymmetric payoff. Sizing without the EV math is sizing on intuition.',
  },
  4400515: {
    newCorrect: 'Reduce to $10-15M as a "thesis vote" + call-spread overlay capping success-case damage — turns negative-EV naked short into positive-EV structured trade.',
    lessonAddendum: 'Sizing into a binary catalyst requires structure as much as size. A negative-EV naked short becomes EV-positive when paired with a call-spread that caps the success-case damage. The PM\'s job is to convert conviction into a position that survives both scenarios — not to size up on conviction alone.',
  },
  4400516: {
    newCorrect: 'Put spread caps downside loss at spread cost — IV is expensive because the catalyst is risky, but the structured position pays a known loss instead of an open-ended one.',
    lessonAddendum: 'The options overlay versus naked short trade-off is a question of loss shape, not loss size. The put spread converts an open-ended loss into a known loss at the cost of the premium. Into a high-vol catalyst, paying for the cap is the price of being able to hold the position with eyes open.',
  },
  4400517: {
    newCorrect: 'Delays carry information about analysis complexity (often correlates with marginal data) — size up modestly if read is unchanged, rebuild put spread around new date.',
    lessonAddendum: 'Trial delays are information, not just timing changes. The base rate on what delays correlate with is closer to neutral than to either folk-wisdom direction. The right work is to read the stated reason, test it against the trial design, and rebuild the position structure around the new date.',
  },
  4400518: {
    newCorrect: 'Reduce gross on the *most* crowded names and replace some with index hedges or factor shorts — not blanket exit, not unchanged.',
    lessonAddendum: 'Crowded-short tape changes the joint risk profile of the short book in a way that single-name analysis misses. The right response is differentiated reduction on the most crowded names, combined with index or factor hedges that retain net-short exposure without single-name squeeze risk.',
  },
  4400519: {
    newCorrect: 'Diversification is the joint payoff distribution, not the count by thesis type — the structural-decline + valuation cluster (25 of 35) probably moves together in a quality-driven tape.',
    lessonAddendum: 'Short-book diversification is a joint-payoff question, not a label-count question. The right test is how the short book performs across factor regimes — quality unwinds, momentum reversals, rate moves — and whether the bench has shorts that work in each.',
  },
  4400520: {
    newCorrect: 'Both legs went up — the loss came from the spread; decompose by splitting sector beta (telecom + tech rallied) from idiosyncratic (LegacyTelco-specific catalyst).',
    lessonAddendum: 'Pair P&L decomposition starts with the recognition that the loss came from the spread, not the direction. The next move is to split sector beta from idiosyncratic effect — if sector beta drove the spread, the pair construction may be miscalibrated; if idiosyncratic drove it, the long or short thesis has new information.',
  },
  4400521: {
    newCorrect: 'Beta-neutral = ~$87M short LegacyTelco vs $40M DataCenter (or trim DC to ~$18M) — fixes market-beta but increases notional and borrow; depends on whether pair is hedge or spread.',
    lessonAddendum: 'Pair sizing methodology — dollar, beta, or sector neutral — depends on what the pair is for. A pure spread bet should be beta-neutral if the thesis is on the spread independent of market direction; a market hedge should be dollar-neutral to keep the notionals manageable.',
  },
  4400522: {
    newCorrect: 'Construction handled direction but missed embedded M&A optionality on the short leg — scrub the short book for low-multiple takeable assets more broadly.',
    lessonAddendum: 'Pair attribution opens portfolio-level questions that single-pair analysis closes. The LegacyTelco M&A rumor is not unique to LegacyTelco — it is a category of optionality that may exist across the short book. The analyst\'s job is to extend the attribution into a portfolio scrub, not to stop at the pair.',
  },
  4400523: {
    newCorrect: 'Unwind the structure — cover LegacyTelco, keep DataCenter as standalone long if conviction holds; M&A breaks the spread thesis even if the long thesis is intact.',
    lessonAddendum: 'Pair unwind decisions disentangle the structure from the underlying theses. When an exogenous event breaks the spread but not the standalone conviction on one leg, the right move is to unwind the structure and re-evaluate each leg on its own merits. Treating the pair as inviolable is how you compound the loss.',
  },
  4400524: {
    newCorrect: '+0.4 is large enough to explain a -2% drawdown in a value-leading tape — surface the contributors and decide if intentional (analyst conviction) or accidental.',
    lessonAddendum: 'Factor exposure on a fundamental book is a byproduct of name selection, not a separate decision. The right discipline is to surface the contributors to each tilt and decide which are conviction-driven (keep) versus accidental (consider trimming). Neutralizing the tilt mechanically muddies the alpha source.',
  },
  4400525: {
    newCorrect: 'Portfolio is exposed to a quality-growth unwind (2018, 2022) — make the LP-facing style explicit and decide whether to size the exposure down or embrace it.',
    lessonAddendum: 'Joint factor exposure — quality + growth + momentum — describes a specific style of fund whether or not the fund describes itself that way. The PM\'s discipline is to make the style explicit, communicate it to LPs, and decide whether to size the exposure down (by trimming contributors) or to embrace it (by sizing risk for the corresponding unwinds).',
  },
  4400526: {
    newCorrect: 'Adjust names where possible — ETF hedges introduce basis risk, financing cost, and opaque second-layer exposure; if names are conviction-driven, the tilt is the strategy.',
    lessonAddendum: 'Factor hedging by ETF versus by name is a basis-risk-versus-execution-cost trade-off. Name adjustment is slower but cleaner; ETF hedges introduce a new source of risk (basis) that often materializes precisely when the hedge is supposed to work. Default to name adjustment, with ETF hedges reserved for tactical, time-limited exposures.',
  },
  4400527: {
    newCorrect: 'Beta-adj net of 1.15 means market exposure is 15% higher than notional suggests — LPs reading "100% net" under-estimate equity sensitivity; the LP letter should note both.',
    lessonAddendum: 'Notional net and beta-adjusted net are two different statements of equity exposure. When they diverge meaningfully, the gap is information the LP letter has to surface — particularly during a drawdown, where LPs are looking carefully at what the fund\'s "100% long" actually means.',
  },
  4400528: {
    newCorrect: 'Long crowding is asymmetric — shorts get squeezed (forced cover), longs get sold (forced sales when crowded holders de-risk together); mechanism similar, consequence different.',
    lessonAddendum: 'Long-book crowding is asymmetric but real. The mechanism is coordinated de-grossing during stress, and the consequence is correlated selling that turns crowded names into the worst performers regardless of fundamental quality. Surfacing the overlap with hedge-fund consensus is the discipline that lets the PM choose which crowded positions to keep and which to size down.',
  },
  4400529: {
    newCorrect: 'Short crowding is the multi-name version of single-name squeeze risk — joint probability of multiple squeezes is materially higher than the product; reduce most-crowded shorts.',
    lessonAddendum: 'Short-book crowding multiplies single-name squeeze risk in a way the per-name metrics do not capture. The right discipline is to overlay the crowding map on the single-name analysis and reduce the most-crowded positions further than the per-name metrics alone would suggest. Joint risk is not the sum of independent risks.',
  },
  4400530: {
    newCorrect: 'Factor attribution first to size the factor contribution (likely 1.5-2.5 of the 6 given the tilt), then sizing and idiosyncratic by name — let math constrain the narrative.',
    lessonAddendum: 'Drawdown decomposition starts with factor attribution because it is the only piece of the math that can constrain the narrative. Letting the team tell the story first and back-fitting numbers later produces a comfortable post-mortem that will be wrong in the same way next quarter. Math first, narrative second.',
  },
  4400531: {
    newCorrect: 'Sizing layered on tape — TCHO\'s -14% reflects the quality-growth unwind; the 8% size meant the fund absorbed the full factor move on a single name. Lesson is concentration sizing.',
    lessonAddendum: 'Single-name pain attribution separates the per-share move (often factor) from the fund-level pain (always sizing). TCHO\'s drawdown was a factor move, but the fund-level damage came from a position that was too big for the factor exposure it carried. The lesson is sizing discipline on factor-exposed concentrations.',
  },
  4400532: {
    newCorrect: 'Both — longs hurt more (carry the factor exposure), shorts added pain on de-grossing rallies; joint failure with longs as the larger contributor.',
    lessonAddendum: 'Long-versus-short attribution during a drawdown is rarely a clean split — it is usually a joint failure with one side larger. The discipline is to name both contributions, identify the factor or crowding mechanism behind each, and not let the larger side\'s share obscure the lesson on the smaller side.',
  },
  4400533: {
    newCorrect: 'Mostly tape failure with one process element — quality-growth tilt was known and accepted; the 8% TCHO sizing was the process choice that underweighted factor concentration.',
    lessonAddendum: 'Process-versus-tape attribution determines the corrective response. The Apex drawdown was mostly tape (quality-growth unwind in a value-leading month) with one process element (factor-concentrated sizing on TCHO). Naming the split — not collapsing to one or the other — is what lets the PM correct the right thing without over-correcting the rest.',
  },
  4400534: {
    newCorrect: 'Run two scenarios: base case (2018 factor moves on current exposures) and crowding-adjusted (current de-grossing dynamics); the gap is the additional risk the historical analog understates.',
    lessonAddendum: 'Stress testing against historical analogs is the discipline that turns "we have a factor tilt" into "this is how much it costs us if the factor unwinds." Running two scenarios — base case and crowding-adjusted — surfaces the additional risk that the historical analog understates. The gap is what the PM has to be comfortable with at current sizing.',
  },
  4400535: {
    newCorrect: 'Lead with factor attribution — endowment and family-office LPs respect quantitative explanation; name the unwind, the contribution, the sizing lesson, and what changes vs not.',
    lessonAddendum: 'LP letters during a drawdown earn or lose trust based on whether the explanation matches the sophistication of the audience. Endowment and family-office LPs read the letter for clarity, not comfort — leading with the factor attribution, the sizing lesson, and the explicit list of changes (and non-changes) is the move that preserves trust through the next quarter.',
  },
  4400536: {
    newCorrect: 'Tone is right — pair with specific framing: -2% net vs +4% S&P, YTD still positive, three-year track record intact; tone without specifics reads as performative.',
    lessonAddendum: 'LP letter tone is a calibration problem: direct enough to acknowledge the result, specific enough to avoid being performative, and not so escalated that it overstates the magnitude. "Disappointed" paired with the actual numbers and the three-year context is the right register.',
  },
  4400537: {
    newCorrect: 'Lead with -2% and the index comparison (+4%), then immediately YTD and since-inception — burying the quarterly number behind better numbers reads as evasive.',
    lessonAddendum: 'LP letter leads should match what the audience is already looking for — and during a drawdown quarter that is the quarterly number versus the benchmark. Leading with anything else reads as evasive, even when the alternative number is genuinely flattering. Lead with the quarter, then add the context; the order is the message.',
  },
  4400538: {
    newCorrect: 'Acknowledge the question directly, offer an in-person follow-up with the full attribution, do not try to talk them out of redemption on the call.',
    lessonAddendum: 'LP redemption inquiries are invitations to engage, not announcements. The right move is to acknowledge directly, offer the deeper conversation, and resist the urge to win the current call. The discipline is to earn the next conversation, not to close the current one.',
  },
  4400539: {
    newCorrect: 'Name TCHO — LPs already know it is a top position; refusing to name it after they have inferred it reads as opacity; pair with a forward-conviction statement.',
    lessonAddendum: 'Naming specific positions in the LP letter is a transparency-versus-flexibility trade-off, but the trade-off is usually false: LPs already know the top positions. Naming the load-bearing contributor (TCHO) with a forward-conviction statement is more credible than withholding it, and the apparent flexibility cost is mostly imaginary.',
  },
  4400540: {
    newCorrect: 'Pipeline is concentrated in the same exposures the fund already runs — ask whether the team is sourcing toward the existing book or toward diversifying ideas the fund needs.',
    lessonAddendum: 'New-ideas pipeline shape reveals the team\'s sourcing biases, which feed directly into the portfolio\'s factor exposure. A same-tilt pipeline compounds the existing exposure; the discipline is to consciously source diversifying ideas, not to scrap the pipeline or to defer to it.',
  },
  4400541: {
    newCorrect: '~$25M to a diversifying idea (e.g., consumer staples to reduce growth exposure), hold ~$40M as dry powder; refilling with same-tilt names defeats the trim.',
    lessonAddendum: 'Rebalancing the long book uses the trim to change the factor profile, not just the size. The right work is to deploy some of the freed capacity into diversifying ideas (different factor space), hold some as dry powder, and resist the urge to refill with the same exposures.',
  },
  4400542: {
    newCorrect: 'Avoid the crowded-short candidates, deploy ~$20M to the two non-crowded ideas, accept a smaller short book — lower joint risk by composition, not by count.',
    lessonAddendum: 'Short-book rebalancing is the moment to act on the crowding read from the prior lesson. Selectively avoiding crowded candidates, deploying conviction-sized to non-crowded ones, and accepting a smaller short book is the move that lowers joint-stress risk without surrendering alpha.',
  },
  4400543: {
    newCorrect: 'Do not add back — the trim was concentration, not price; wait for new information (earnings, factor backdrop change), not a lower price.',
    lessonAddendum: 'Adding into a drawdown is justified by new information, not by price. The TCHO trim was a concentration decision; adding back because the price has moved further down is the exact framework the trim was meant to escape. Discipline is holding the new size until something material changes.',
  },
  4400544: {
    newCorrect: 'Do not feel obligated to maintain sector exposure — RTCO was a specific turnaround thesis; evaluate replacements on their own merits, not on sector continuity.',
    lessonAddendum: 'Replacement decisions after an exit should free the PM from sector-continuity thinking. RTCO\'s capital is uncommitted; the next allocation should follow conviction and portfolio fit, not the gap left in retail. The fund does not owe any sector representation.',
  },
  4400545: {
    newCorrect: 'Lower with a factor-adjusted overlay — 7% for factor-exposed names, 10% for factor-neutral; the cap should reflect joint sizing-and-factor risk, not raw notional weight.',
    lessonAddendum: 'Risk limit reviews after a drawdown should respond to the specific failure mode without over-constraining the rest of the strategy. The TCHO lesson was sizing-meets-factor-exposure, not raw concentration — so the policy refinement should make the cap factor-aware, not just lower. Surgical policy changes beat blunt ones.',
  },
  4400546: {
    newCorrect: 'Lower to 42-43% rather than 40% — 47% is uncomfortably close to the old cap; modest reduction creates a real buffer without forcing immediate sales.',
    lessonAddendum: 'Sector cap reviews should create a usable buffer between the current exposure and the limit, not redefine the limit so aggressively that immediate trimming is required. 42-43% gives the fund breathing room while signaling to LPs that concentration is actively managed.',
  },
  4400547: {
    newCorrect: 'Reduce modestly (5-10 points) but not the full historical 10-15 — drawdown context means a large gross cut signals "something is wrong" on top of the LP message.',
    lessonAddendum: 'Net and gross exposure decisions during a drawdown have to balance the standard playbook against the LP context. The historical 10-15 point reduction into earnings is right in normal conditions; a 5-10 point modest reduction is right when the fund is already in a drawdown and LP attention is heightened.',
  },
  4400548: {
    newCorrect: 'Use the stop as a *review trigger*, not a mechanical exit — a structural short into a defined catalyst behaves differently than a momentum short; apply logic, not mechanics.',
    lessonAddendum: 'Stop-loss discipline is a re-underwriting trigger, not a mechanical exit. On a structural short into a defined catalyst, the right work at an adverse price is to confirm the thesis, confirm the option structure, and decide whether to hold — not to exit on the price level.',
  },
  4400549: {
    newCorrect: 'Three sections: (1) what happened — factor-attributed drawdown with named contributors; (2) what we are changing; (3) what we are not changing — explicit on both.',
    lessonAddendum: 'The PM\'s one-page IC synthesis is structured around the three questions the IC actually asks: what happened, what are you changing, what are you keeping the same. Each section earns its place — attribution earns the case for the changes, the changes earn the credibility for the unchanged elements, and the explicit list of unchanged elements prevents the IC from over-reading the corrective actions.',
  },
}
