// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Credit / Leveraged Finance roadmap (~264 questions across 5 chapters
// plus the Apex Holdco capstone).
//
// CLF_SUB_TOPICS groups each chapter's questions into 5-7 lesson-shaped
// clusters (cap 8 per chapter, since the lesson grouping caps at 8 lessons).
//
// CLF_MENTOR_HINTS overrides the generic CLF scaffold hint with a one-line
// second-person nudge that names the technique without giving the answer
// away — voice: senior underwriter / LevFin banker mentoring a junior
// analyst.
//
// CLF_CORRECT_SHORTENED trims `correct` strings flagged by the length-
// heuristic audit (correct ≥1.8x longer than longest wrong AND ≥20 chars
// longer). Trimmed explanatory clauses are reattached via `lessonAddendum`
// so no information is lost.

export const CLF_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Chapter 1: Borrower and Capital Structure Basics --------------------
  'Cap Structure Waterfall': [
    4200070, 4200072,
    4410000, 4410001, 4410002, 4410003, 4410004, 4410005, 4410006, 4410007,
    4410008, 4410009, 4410046,
  ],
  'Borrower Types & Risk': [
    4410010, 4410011, 4410012, 4410013, 4410014, 4410015, 4410016, 4410017,
    4410018, 4410019,
  ],
  'Senior Debt Structures': [
    4200071,
    4410020, 4410021, 4410022, 4410023, 4410024, 4410025, 4410026, 4410027,
    4410028, 4410029,
  ],
  'Subordinated Debt': [
    4410030, 4410031, 4410032, 4410033, 4410034, 4410035, 4410036, 4410037,
    4410038,
  ],
  'Equity Layer': [
    4410039, 4410040, 4410041, 4410042, 4410043, 4410044, 4410045,
  ],

  // -------------------- Chapter 2: Credit Metrics and Cash Flow --------------------
  'Leverage Ratios': [
    4410100, 4410101, 4410102, 4410103, 4410104, 4410105, 4410106, 4410107,
  ],
  'Coverage Ratios': [
    4410108, 4410109, 4410110, 4410111, 4410112, 4410113, 4410114,
  ],
  'FCF Definitions': [
    4410115, 4410116, 4410117, 4410118, 4410119, 4410120,
  ],
  'Credit Rating Mapping': [
    4410121, 4410122, 4410123, 4410124, 4410125, 4410126,
  ],
  'Industry-Specific Metrics': [
    4410127, 4410128, 4410129, 4410130, 4410131, 4410132,
  ],
  'Cash Flow Walks': [
    4410133, 4410134, 4410135, 4410136, 4410137,
  ],
  'EBITDA Quality': [
    4410138, 4410139, 4410140, 4410141,
  ],

  // -------------------- Chapter 3: LevFin Markets and Debt Capacity --------------------
  'Syndicated Loans': [
    4410200, 4410201, 4410202, 4410203, 4410204, 4410205, 4410206,
  ],
  'High-Yield Bonds': [
    4410207, 4410208, 4410209, 4410210, 4410211, 4410212, 4410213,
  ],
  'TLB vs TLA': [
    4410214, 4410215, 4410216, 4410217, 4410218,
  ],
  'Debt Capacity Sizing': [
    4410219, 4410220, 4410221, 4410222, 4410223, 4410224,
  ],
  'Pricing Mechanics': [
    4410225, 4410226, 4410227, 4410228, 4410229,
  ],
  'Refinancing Dynamics': [
    4410230, 4410231, 4410232, 4410233, 4410234, 4410235,
  ],
  'CLOs as Buyers': [
    4410236, 4410237, 4410238,
  ],
  'Distressed Exchanges': [
    4410239, 4410240, 4410241,
  ],

  // -------------------- Chapter 4: Covenants, Documentation, and Protection --------------------
  'Maintenance vs Incurrence': [
    4410300, 4410301, 4410302, 4410303, 4410304, 4410305,
  ],
  'Springing Covenants': [
    4410306, 4410307, 4410308, 4410309,
  ],
  'Restricted Subs & Trap-Doors': [
    4410310, 4410311, 4410312, 4410313, 4410314,
  ],
  'Restricted Payments': [
    4410315, 4410316, 4410317, 4410318, 4410319,
  ],
  'Debt Incurrence Baskets': [
    4410320, 4410321, 4410322, 4410323, 4410324,
  ],
  'Liability Management (LMEs)': [
    4410325, 4410326, 4410327, 4410328, 4410329, 4410330, 4410331,
  ],
  'Intercreditor Agreements': [
    4410332, 4410333, 4410334, 4410335, 4410336, 4410337, 4410338, 4410339,
  ],

  // -------------------- Chapter 5: Distress Signals and Recovery Thinking --------------------
  'Distress Signals': [
    4410400, 4410401, 4410402, 4410403, 4410404, 4410405,
  ],
  'Bankruptcy Process': [
    4410406, 4410407, 4410408, 4410409, 4410410, 4410411, 4410412,
  ],
  'Absolute Priority Rule': [
    4410413, 4410414, 4410415, 4410416, 4410417,
  ],
  'Recovery Analysis': [
    4410418, 4410419, 4410420, 4410421, 4410422, 4410423,
  ],
  'Trading the Distressed Cycle': [
    4410424, 4410425, 4410426, 4410427, 4410428, 4410429, 4410430, 4410431,
    4410432,
  ],
  'Fulcrum Security': [
    4410433, 4410434, 4410435, 4410436,
  ],
  'DIP Economics': [
    4410437, 4410438, 4410439,
  ],

  // -------------------- Capstone: Apex Holdco LBO --------------------
  'Apex: Cap Structure Design': [
    4410500, 4410501, 4410502, 4410503, 4410504, 4410505, 4410506, 4410507,
    4410508, 4410509,
  ],
  'Apex: Credit Analysis': [
    4410510, 4410511, 4410512, 4410513, 4410514, 4410515, 4410516, 4410517,
    4410518, 4410519,
  ],
  'Apex: Covenant Package': [
    4410520, 4410521, 4410522, 4410523, 4410524, 4410525, 4410526, 4410527,
    4410528, 4410529,
  ],
  'Apex: Stress + Recovery': [
    4410530, 4410531, 4410532, 4410533, 4410534, 4410535, 4410536, 4410537,
    4410538, 4410539,
  ],
  'Apex: Syndication & Marketing': [
    4410540, 4410541, 4410542, 4410543, 4410544, 4410545, 4410546, 4410547,
    4410548, 4410549,
  ],
}

export const CLF_MENTOR_HINTS: Record<number, string> = {
  // ---------- Inline CLF questions (Chapter 1 trio) ----------
  4200070: 'Walk lien priority before contractual subordination. Secured eats first out of collateral; unsecured and sub wait for what is left.',
  4200071: 'Revolvers draw, repay, and re-borrow. Term loans draw once. Lien priority and covenant footprint are separate questions.',
  4200072: 'Apply EV down the stack in priority order. Secureds satisfy first to collateral coverage; the residual flows to unsecureds.',

  // ---------- Chapter 1: Borrower and Capital Structure Basics ----------
  4410000: 'Lien priority first, then contractual subordination, then equity. Coupon size and tenor are noise to the waterfall.',
  4410001: 'APR is hard hierarchy: seniors fully paid or consenting before juniors recover. A class vote does not override seniority.',
  4410002: 'Within a single lien class on shared collateral, recoveries are pro rata by claim size. Tenor does not create priority.',
  4410003: 'Structural subordination runs across legal entities. A parent note only reaches OpCo assets through the residual equity stub.',
  4410004: 'Gifting works when the senior class shares its own recovery — voluntary transfer, not skipping an intermediate class.',
  4410005: 'A fixed dividend does not turn preferred into debt. Every debt class is paid before preferred sees anything.',
  4410006: 'Walk the collateral down: 1L first, then 2L from residual, then unsecured from what is left. 2L recovery is the levered slice.',
  4410007: 'DIP is super-priority by court order — that is the only reason new money lends to a defaulted borrower.',
  4410008: 'Cramdown of a secured class requires full present value via deferred payments or retained lien — not a haircut.',
  4410009: 'Missing OpCo guarantees turns parent-level "senior unsecured" into structurally subordinated paper. Map the guarantees, not the label.',
  4410010: 'BBB-/Baa3 is the lowest IG rung; one notch below (BB+/Ba1) starts leveraged. Issue size and ownership do not define the line.',
  4410011: 'Sponsor LBO profile: higher leverage, aggressive add-backs, looser documentation. The sponsor\'s equity check carries the story.',
  4410012: 'Club is a small relationship-bank group with no marketing process. Broad syndication uses flex and institutional distribution.',
  4410013: 'Middle market vs broadly syndicated tracks deal size and borrower scale, not investor type. Roughly $500M / $100M EBITDA is the line.',
  4410014: 'Non-sponsor corporates optimize for rating and cost of capital. Sponsors optimize for IRR and document flexibility — different stories.',
  4410015: 'Recurring-revenue loans replace EBITDA with ARR coverage, retention covenants, and refi-exit assumption. EBITDA covenants don\'t fit.',
  4410016: 'Dividend recap converts equity buffer into debt without operational improvement. Headline EBITDA growth masks weaker downside protection.',
  4410017: 'High-rated IG fund daily liquidity with CP and keep the revolver as a backstop. Sub-IG borrowers cannot — they draw revolvers instead.',
  4410018: 'Direct lending trades cost for execution certainty. Unitranche compresses 1L/2L; syndicated unbundles at lower headline cost.',
  4410019: 'Cyclical credits underwrite to trough EBITDA. Trailing flatters the headline; covenant headroom has to survive the next downturn.',
  4410020: 'TLA is the amortizing bank tranche; TLB is the bullet institutional tranche with token 1% amortization. Holders drive the difference.',
  4410021: 'Revolvers are operating safety valves. The TLB is permanent capital. Conflating them is the classic analyst error.',
  4410022: 'ABL availability = advance rate × eligible collateral, less reserves and sub-limits. The formula recomputes monthly.',
  4410023: 'ABL fits when collateral is liquid and earnings are thin. Cash-flow fits when EBITDA is durable. Match the tool to the borrower.',
  4410024: '"Senior" and "secured" are independent dimensions. Senior unsecured is senior in subordination but unsecured against lien holders.',
  4410025: 'Springing covenants live with the revolver class. TLB lenders watch deterioration with no direct lever until the revolver springs.',
  4410026: 'DDTL is committed paper with a ticking fee. Pari passu with the existing TLB, drawn on acquisitions inside the availability window.',
  4410027: 'Incremental capacity stacks: fixed basket plus ratable amount. EBITDA growth between close and incurrence expands the ratable piece.',
  4410028: 'LCs and cash borrowings both consume revolver availability. The LC sub-limit caps LC issuance only; track both balances separately.',
  4410029: 'MFN steps the existing tranche up to within the cushion of the new tranche. The cushion (often 50 bps) bounds the through-pricing.',
  4410030: 'Mezz sits between senior secured debt and equity. Higher coupon plus PIK and warrants is compensation for the depth, not seniority.',
  4410031: 'PIK toggle capitalizes interest into principal at borrower election. Cash preserved today; balance grows; the toggle itself is a warning.',
  4410032: 'Warrants are equity options bolted on, separable from the debt. They earn the equity upside without consuming the loan cash flows.',
  4410033: '1L/2L intercreditor concentrates workout control in the senior class. 2L accepts standstill as the price of priority.',
  4410034: 'Unitranche is one external loan, internally split by an Agreement Among Lenders into first-out and last-out economics.',
  4410035: '2L recovery is levered to EV — small EV moves swing 2L recovery materially because 2L sits in the residual slice.',
  4410036: 'HoldCo PIK is structurally subordinated to OpCo debt but adds dividend-pressure on OpCo. The legal claim stops at the parent; the operational pressure does not.',
  4410037: 'Subordinated notes are contractually subordinated, higher coupon, longer call protection. Tenor does not compensate for subordination; coupon does.',
  4410038: 'Equity cures are flex for sponsors but capped — annual limit, lifetime limit, EBITDA-addition mechanics. Track cures used as part of the credit.',
  4410039: 'Common is residual. Wiped in distress, lottery-ticket value at the upside. Rollover equity is common equity — no senior status.',
  4410040: 'Participating preferred = preference plus pro rata of residual. The participation runs on what is left, not on the full proceeds.',
  4410041: 'Convertible preferred is one-way election: take the preference or convert. Compare the two numbers; take the larger.',
  4410042: 'Stacked seniority is the default — later series ranks ahead of earlier. In a sub-preference exit, junior preferred and common are wiped first.',
  4410043: 'Sweet equity is European-style management ordinary shares behind sponsor preferred. Operational upside is amplified above the hurdle.',
  4410044: 'Warrants preserve the loan and add upside. Convertibles extinguish the loan in exchange for equity. Different cash-flow profiles, different lender outcomes.',
  4410045: 'The line between debt and preferred is contractual remedies — maturity, mandatory interest, default rights. Preferred lacks them; it is equity that looks like debt while things go well.',
  4410046: 'Walk every tranche down the stack to see where value breaks. Small EV moves change which class is whole versus impaired.',

  // ---------- Chapter 2: Credit Metrics and Cash Flow ----------
  4410100: 'Net Debt = Total Debt minus Cash. Then divide by EBITDA. The "net" is the cash netting, not a discount.',
  4410101: 'Net leverage is the convention when cash is freely available. Trapped or operational cash should not be netted — at the limit, use total debt.',
  4410102: 'Senior secured leverage isolates collateral-secured debt. Subordinated and senior unsecured do not belong in the numerator.',
  4410103: 'Lease-adjusted leverage puts numerator and denominator on the same basis — lease-inclusive debt against EBITDAR.',
  4410104: 'Show leverage both ways: as-is and PF synergies. Base the recommendation on as-is and treat synergies as a forecast, not a fact.',
  4410105: 'Trapped cash, restricted cash, and operating-cash cushion should not be netted. The right number is what could actually retire debt.',
  4410106: 'Through-the-cycle leverage is base case; trough scenario tests whether the capital structure survives. Spot at peak flatters the cyclical.',
  4410107: 'Structural subordination limits legal recourse, not operational pressure. HoldCo distress almost always leaks back into OpCo decisions.',
  4410108: 'Coverage is earnings over interest, not the inverse. EBITDA / cash interest is the canonical compute.',
  4410109: '(EBITDA - capex) / Interest is the lender-friendly view — capex and interest compete for the same cash pool.',
  4410110: 'FCCR puts rent in both numerator and denominator. Bases have to match; convention is EBITDAR over fixed charges.',
  4410111: 'FCF / Debt is a repayment-speed signal. Inverse roughly equals years to amortize; below ~5% is usually a flag.',
  4410112: 'PIK is real for leverage and total return but not for current cash service. Use cash interest for coverage; book interest overstates the burden.',
  4410113: 'Capex and interest both consume cash. Ignoring capex assumes the asset base maintains itself — fine for asset-light, wrong for most LBOs.',
  4410114: 'DSCR includes principal in the denominator. Project finance is structured to amortize, so coverage has to test the full debt service profile.',
  4410115: 'Unlevered FCF starts at EBIT(1-t) and is capital-structure-neutral. Subtracting interest makes it levered, not unlevered.',
  4410116: 'Levered FCF under US-GAAP ≈ CFO − Capex, because CFO is reported after cash interest. The shortcut breaks under IFRS classification choices.',
  4410117: 'Walk down from levered FCF: subtract dividends, M&A, mandatory amortization. What is left is discretionary paydown capacity.',
  4410118: 'ECF sweeps are contractual prepayments. The percentage applies to ECF above the threshold, on top of mandatory amortization.',
  4410119: 'Credit-agreement ECF is what the document defines, not what a textbook says. Read the EBITDA, deductions, and add-backs word for word.',
  4410120: 'Maintenance capex is non-discretionary in the medium term; growth is more flexible. Pressure-test the split against depreciation and downturn capex.',
  4410121: 'BBB-/Baa3 is the lowest IG rung. BB+/Ba1 is the highest HY rung. The divide is one notch, but the consequences are large.',
  4410122: 'BB+/Ba1 is the top end of HY — informally "crossover," structurally HY for index and mandate purposes.',
  4410123: 'A notch is one step on the rating scale. BB+ to BB is one notch within HY. "Fallen angel" is a separate concept — crossing IG/HY.',
  4410124: 'Outlook is direction over 6-24 months; Watch is an imminent event-driven flag within 90 days. They are not the same signal.',
  4410125: 'Crossover pricing reflects asymmetric forced-selling risk on a downgrade. The pricing is forward-looking transition risk, not classification confusion.',
  4410126: 'Fallen-angel mechanics: IG-mandated supply hits the market before HY demand can absorb it. Spread gaps then partially mean-reverts as funds rebalance.',
  4410127: 'Slowing inventory turns absorb working capital and foreshadow markdown pressure. The trend is the signal, not any single snapshot.',
  4410128: 'Comp sales strip out new-store contribution. Growth funded by capex on new stores is exactly the case that does not deleverage.',
  4410129: 'Telco LTV = ARPU / churn − SAC. Rising churn plus rising SAC plus flat ARPU is deteriorating unit economics before the income statement shows it.',
  4410130: 'Cost-curve position predicts who survives the trough. IG commodity credits sit in the first or second quartile of their cost curve.',
  4410131: 'CET1 is risk-weighted loss-absorbing capital. It is the bank-credit equivalent of corporate leverage — the buffer that protects creditors.',
  4410132: 'NPL ratio plus reserve coverage is the asset-quality view. Capital ratios tell you the cushion; NPLs tell you how fast it is being consumed.',
  4410133: 'Standard FCF walk: EBITDA − cash taxes − cash interest − capex − change in working capital. Each line has its own error mode.',
  4410134: 'Working capital absorption is a structural cash use in growth, not a timing artifact. Sizing the gap is more honest than restating EBITDA.',
  4410135: 'FCF walks use cash items throughout. Cash taxes, cash interest, cash capex. Deferred items belong to leverage and earnings views, not cash.',
  4410136: 'Modeling deleveraging means subtracting every committed cash use before claiming residual FCF goes to debt. Headline FCF overstates the speed.',
  4410137: 'Levered FCF − change in net debt is the reconciliation that surfaces M&A, buybacks, FX, and pension cash uses the headline FCF figure hides.',
  4410138: 'Recurring "one-time" charges are not one-time. The test is empirical: does the charge appear year after year? If yes, it is part of run-rate cost.',
  4410139: 'Phase synergies into projected EBITDA over 18-24 months with an execution haircut. Underwrite at as-is, even if marketing leverage shows synergies.',
  4410140: 'SBC is real compensation paid in equity. Best-practice credit memos do not add it back — the "non-cash" label is a GAAP artifact.',
  4410141: 'Five consecutive "final" restructurings is a pattern. Size the recurring component using the historical average instead of accepting the addback.',

  // ---------- Chapter 3: LevFin Markets and Debt Capacity ----------
  4410200: 'Primary syndication is the distribution step. The arranger commits to the borrower and sells slices to CLOs and loan funds, not retail.',
  4410201: 'Secondary loan prices are the live read on credit quality. A loan drifting from par to 97.5 says the market is repricing the credit.',
  4410202: 'Admin agent is operational plumbing — payments, notices, assignments, votes. Not a credit guarantor, not a rate-setter.',
  4410203: 'Lead-left runs the book and gets the headline fee. Co-leads share commitment and fees but do not control allocations or league-table credit.',
  4410204: 'Club is a small bank group holding to maturity. BSL is institutional distribution and active secondary trading. Liquidity is the differentiator.',
  4410205: 'Oversubscription gives the arranger pricing power. Reverse-flex tighter; cut allocations pro rata. Do not upsize the loan to soak demand.',
  4410206: 'Reverse-flex losses are usually yield-threshold drops, not credit signals. Drops after a tighten mean the new price no longer clears.',
  4410207: 'HY bonds are bullets. No scheduled principal — that is why issuers like them and how investors price refinancing risk at maturity.',
  4410208: 'Call protection is yield-vs-optionality. NC3 buys earlier refi rights at a coupon premium; NC5 saves coupon at the cost of refi flexibility.',
  4410209: 'Make-whole = greater of par or PV of future coupons and principal discounted at T+50. Designed to deliver to-call economics, not punishment.',
  4410210: 'Equity claws let the issuer deleverage from IPO proceeds inside the non-call window at a defined premium investors can price upfront.',
  4410211: '101 COC put is optional, not automatic acceleration. Bondholders elect individually; in benign markets the put is worthless and ignored.',
  4410212: 'Bullet structure preserves operating cash flow during the life of the deal. The refinancing risk concentrates at maturity, which is the trade.',
  4410213: 'Fixed bond locks in the coupon; floating loan moves with SOFR. The mix is a deliberate distribution of rate risk across the cap structure.',
  4410214: 'TLA is the bank tranche; TLB is the institutional tranche. The same credit clears at different prices for the two products because of holder funding.',
  4410215: 'Floating rates reflect lender funding. CLOs fund AAA at SOFR-plus, so their loans need to pay SOFR-plus too. Asset-liability matching, not regulation.',
  4410216: 'TLA amortization satisfies bank capital preferences; TLB amortization at 1%/year is a near-bullet that preserves the institutional yield profile.',
  4410217: '5y bank tenor / 7y institutional tenor mirrors who holds the paper. CLO reinvestment periods (4-5 years plus tail) support the longer TLB.',
  4410218: 'Pro rata sweep applies to both TLA and TLB proportionally. CLOs care because it accelerates TLB; banks care because it speeds TLA payoff.',
  4410219: 'Entry multiple minus market debt capacity equals required equity check. At 11.0x entry and 6.0x debt, the sponsor writes a 5.0x EBITDA equity check.',
  4410220: 'FCF / Total Debt is a repayment-speed signal. At 5%, organic deleveraging takes ~20 years — a structural call on refi access.',
  4410221: 'Below ~1.5x coverage the borrower cannot fund interest from cash flow. Size the cap structure so the downside still clears the threshold.',
  4410222: 'IRR is mechanically levered. Higher leverage shrinks the equity check, so the same exit spreads across less equity. The gap is pure leverage effect.',
  4410223: 'The senior-vs-total gap is where junior capital lives. The size of the gap reflects how much risk subordinated and unsecured holders take.',
  4410224: 'Rating actions track credit metrics. 1.5 turns of leverage at single-B usually buys a one-notch downgrade; pre-brief agencies to avoid surprises.',
  4410225: 'OID and upfront fees both reduce proceeds at close. OID amortizes into yield over the loan life; fees recognize at closing. Substitutes, not duplicates.',
  4410226: 'SOFR floor sets the minimum base rate. It binds when SOFR is below the floor and disappears as a constraint when short rates rise above it.',
  4410227: 'Secondary loan prices are a continuous credit signal. Mid-90s is watchlist; below 80 is distressed with LGD scenarios in play.',
  4410228: 'YTW is the minimum yield across all call scenarios. For premium-priced callable bonds, YTW is the realistic return — YTM overstates it.',
  4410229: 'OID amortizes into yield over the bond life — a 2-point discount over 5 years is roughly 40-50 bps of additional yield, not 200 bps.',
  4410230: 'Call optionality is a refi math problem. Cost of calling (102) plus issuance fees against PV of interest savings. Exercise when savings beat cost.',
  4410231: 'Refi waves in benign markets are how borrowers extract value from spread compression. Repricing is the dominant trade when investors will accept it.',
  4410232: 'Loan prepayment optionality is real economic value. CLOs accept lower spreads on loans than HY bonds partly because of borrower-side flexibility.',
  4410233: 'Voluntary prepayments at par after the soft-call window are a borrower right under standard credit agreements. No consent and no premium required.',
  4410234: 'Repricing keeps the existing loan and amends pricing. Full refi resets everything and pays full fees. In benign markets, repricing wins on cost.',
  4410235: 'Soft call (101 for 6 months) blocks opportunistic immediate-post-close repricing. After the window, loans are callable at par without premium.',
  4410236: 'CLO collateral tests shape the bid. Triple-C bucket limits make CLOs sensitive to B- paper that could downgrade and breach concentration.',
  4410237: 'CLO AAA buyers (insurance, pension, bank treasuries) set the cost of CLO liabilities — which sets what spreads CLOs need on the underlying loans.',
  4410238: 'CLO par-coverage tests reward buying at or near par. The CLO bid is why new TLBs typically clear at 99-99.5 OID rather than deeper discounts.',
  4410239: 'Par-for-discount swaps trade face for priority. Holders accept less notional in exchange for better recovery and security — the math has to clear.',
  4410240: 'Holdouts retain the original instrument at original terms. The voluntary nature is the constraint; coercive features are how issuers push participation higher.',
  4410241: 'Coercive vs consensual is the live debate in LME practice. Coercive drives participation; consensual preserves market relationships. The trade is participation against reputational cost.',

  // ---------- Chapter 4: Covenants, Documentation, and Protection ----------
  4410300: 'Maintenance runs on a clock; incurrence runs on an event. The structural point is timing of the test, not what ratio is tested.',
  4410301: 'Cov-lite means no maintenance covenant on the TLB — incurrence-only. The revolver may still have a springing test, but it does not flow to the TLB.',
  4410302: 'Cov-loose has a maintenance test with a wide cushion. Cov-lite has no test at all. The structural divider is whether the test is on the page.',
  4410303: 'Maintenance breach is a hard EOD as of the test date. The borrower\'s options are waiver, equity cure, or refinancing — not auto-cure next quarter.',
  4410304: 'Cov-lite pricing premium buys insurance against being forced into amendment cycles in stressed quarters. The trade is base-rate cost vs renegotiation leverage.',
  4410305: 'Incurrence tests live and die by the EBITDA definition. Read the add-back caps and time horizons in Article I — do not just plug ratios.',
  4410306: 'Springing covenants trigger off revolver utilization, not EBITDA. The structural logic: if revolver lenders have money out, they get a maintenance test.',
  4410307: 'LCs typically count toward revolver utilization. Borrowers cannot escape the trigger by issuing LCs instead of borrowing cash.',
  4410308: 'Springing covenants benefit only the revolver class. TLB lenders cannot accelerate on a breach — they wait for cross-default to mature.',
  4410309: 'Anti-cash-hoarding language is the protection against period-end revolver cleanup. Measure utilization across a window, not just on the test date.',
  4410310: 'Negative pledge targets liens, not debt. Unsecured debt can be permitted under a separate basket without violating the negative pledge.',
  4410311: 'Unrestricted Sub designation puts a subsidiary outside the covenant perimeter. That is the engineering primitive behind every modern LME.',
  4410312: 'J.Crew used the investment basket to move IP to an Unrestricted Sub, then financed against the IP. The negative pledge held — but only over Restricted Subs.',
  4410313: 'PetSmart/Chewy is the second canonical drop-down case. Same mechanic as J.Crew: investment basket plus Unrestricted Sub designation moves the asset out.',
  4410314: 'The most dangerous line in a credit agreement is unlimited investment capacity subject to a ratio test. At moderate leverage, the door is open.',
  4410315: 'RPs are outflows to equity and junior creditors. Dividends, buybacks, sub-debt prepayments, excess management fees — not all payments and not interest on senior debt.',
  4410316: 'General basket is a fixed cushion; builder basket accretes with retained earnings. Together they enable both day-one and over-time extraction.',
  4410317: 'Stack the general and builder baskets together. Check each gating condition (no default, ratio test, certificate) and verify the EBITDA inputs.',
  4410318: 'Equity cures add the contribution to EBITDA, which lowers the leverage ratio. The cure is retroactive to the test date — that is the point.',
  4410319: 'The 2-of-4 rolling cap on cures stops serial papering-over. Once the cap is hit, lenders get a real default trigger that cannot be cured again.',
  4410320: 'Fixed + ratio debt baskets stack. Fixed gives day-one capacity; ratio scales with EBITDA. Both are typically available at the same time.',
  4410321: 'Pro forma means giving effect to the entire transaction, including target EBITDA. Excluding it understates capacity and misreads the document.',
  4410322: 'Available Amount / builder basket starts at zero and grows with CNI and other inflows. The tail risk compounds quietly over the loan life.',
  4410323: 'MFN steps the existing tranche up to within the cushion of new pricing. The cushion (50 bps standard) plus sunset determines how strong the protection is.',
  4410324: 'Free-and-clear + ratio baskets stack. The drafting question is order of operations — sponsor wants ratio computed after the free-and-clear draw.',
  4410325: 'Drop-down sequence: investment basket → Unrestricted Sub designation → new debt on transferred assets → proceeds back as permitted distribution.',
  4410326: 'Serta up-tier used Required Lenders amendment power to authorize new super-priority debt. The defect was weak sacred-rights — not the investment basket.',
  4410327: 'Boardriders priming worked because sacred-rights were narrow. Required Lenders amendment broadly is dangerous without affected-lender consent on priming.',
  4410328: 'Sacred rights = unanimous (or affected-lender) consent for any change to lien priority, payment priority, or pro-rata sharing. The clean defense against up-tiers.',
  4410329: 'R&W insurance covers seller rep breaches — not general business performance, not loan default. Premium is paid by the buyer for clean seller exit.',
  4410330: 'Indemnification stack: de minimis (per-claim qualifier), basket (deductible), cap (ceiling). The basket is a deductible — only the excess flows through.',
  4410331: 'Fundamental reps survive longer because their breach is deal-existential. General reps survive a normal post-close discovery window. Environmental usually sits in between.',
  4410332: 'Cross-default triggers on the underlying default. Cross-acceleration only triggers on actual acceleration. The distinction is everything in working out a stressed credit.',
  4410333: 'Principal has no grace; interest typically gets 3-5 business days. The grace is administrative cure space, not an open-ended option.',
  4410334: 'Materiality thresholds scale with deal size — typically $25-100M+. Sub-threshold defaults never trigger cross-acceleration regardless of cure.',
  4410335: 'Acceleration is by notice, not automatic. Standstills delay subordinated tranche timing to give the senior class space to drive the workout.',
  4410336: 'Lien subordination means 1L is paid in full from collateral before any value reaches 2L. The intercreditor governs every operational detail.',
  4410337: 'Lien subordination orders collateral waterfall; payment subordination orders ordinary debt service. Different scopes, different instruments.',
  4410338: 'ABL/Term Loan splits collateral by asset type. Each tranche has primary claim on the collateral suited to its risk profile and secondary on the other pool.',
  4410339: 'Standstill is a real prohibition on enforcement, not a notice formality. The 1L gets complete control of the enforcement decision during the window.',

  // ---------- Chapter 5: Distress Signals and Recovery Thinking ----------
  4410400: 'Secondary loan prices lead rating actions by weeks or months. A 12-point drop on no news is a credit signal, not noise.',
  4410401: 'A missed scheduled payment, even with forbearance, says the borrower could not fund a small obligation. Healthy borrowers do not request forbearance on amort.',
  4410402: 'A maturity wall with closed primary markets makes refi the binding constraint. The credit can default with stable operating performance.',
  4410403: 'Covenants are tested every quarter, not once. Falling EBITDA plus rising debt moves leverage toward breach faster than either factor alone suggests.',
  4410404: 'A 95% revolver draw outside seasonal pattern is a late-stage distress signal — the treasury stopped trusting that the line will stay available.',
  4410405: 'Payables stretching 30+ days is a unilateral extension financed off vendors. It precedes the loud signals — once vendors react, supply tightens.',
  4410406: 'Chapter 11 preserves the going concern under court supervision. Chapter 7 liquidates under a trustee. Pick by going-concern vs liquidation value.',
  4410407: '363 sales move assets free and clear of liens at court approval, typically through a stalking-horse and auction. Proceeds replace liens at the estate level.',
  4410408: 'DIP is super-priority new money that lets the case proceed. Pre-petition revolver is typically frozen or rolled into the DIP at higher priority.',
  4410409: 'Class acceptance: 1/2 by number, 2/3 by amount. Unanimity would make plans impossible; supermajority prevents single-holder dominance.',
  4410410: 'The UCC is the structural counterweight to the debtor. Estate-funded advisors plus full information access make the committee an actual working power.',
  4410411: 'Exit financing replaces the DIP at emergence and funds the post-emergence cap structure. Different lenders, different tenors, different markets.',
  4410412: 'Chapter 7 trustee liquidates and distributes by priority. Distinct from a Chapter 11 DIP that keeps operating — the chapter sets expectations.',
  4410413: 'APR is the spine of recovery analysis. Every distressed decision implicitly asks where in this stack the security sits and what is left for the next class.',
  4410414: 'Gifting works when seniors share their own recovery voluntarily to buy junior consent. APR is preserved because seniors give away what was already theirs.',
  4410415: 'Companies file Chapter 11 when debt exceeds EV — value runs out before reaching equity. Wipeout is structural, not punitive.',
  4410416: 'Cram-down requires the plan to be fair and equitable and not discriminate unfairly. For unsecureds, that essentially codifies APR.',
  4410417: 'New value is narrow post-LaSalle: new, substantial, money or money\'s worth, necessary, reasonably equivalent — usually with competing bids required.',
  4410418: 'Going-concern vs liquidation is the first decision in recovery analysis. Creditors generally receive the higher of the two outcomes.',
  4410419: 'Exit EV is the pie distributed to creditors through the waterfall. Small changes in EBITDA or multiple flow directly into recovery percentages.',
  4410420: 'Recovery waterfall is mechanical: subtract admin, pay each class in priority, find where value breaks. The fulcrum class gets new equity, not cash.',
  4410421: 'Value-break analysis maps EV to the cap stack. The class where the pie runs out is the fulcrum — gets the new equity; below is wiped; above is whole.',
  4410422: 'Liquidation discounts depend on category, age, and seasonality. Anchor on comparable case data and liquidator quotes, not generic rules.',
  4410423: 'Goodwill is an accounting residual reflecting prior acquisition premiums. In liquidation, the going-concern that goodwill represented evaporates.',
  4410424: 'Out-of-court needs 95%+ participation; prepack uses court binding to capture holdouts. The choice is holdout risk vs court cost and visibility.',
  4410425: 'J.Crew was technically permitted by the docs. The lesson: loose covenant baskets can let issuers move collateral outside the credit group without consent.',
  4410426: 'Uptier exchanges reveal "pari passu" is a contract term, not an economic guarantee. Read the amendment-vote mechanics and sacred-rights provisions.',
  4410427: 'Carvana 2023 is a recent template for stable distressed issuers — out-of-court trade restructures the balance sheet without a filing when participation works.',
  4410428: 'Par-to-80 is the credit-fund engagement zone. The market is pricing deterioration ahead of formal triggers; the work is fundamental analysis.',
  4410429: 'The 80-to-50 zone shifts pricing from credit deterioration to expected reorganization outcome. The framework moves from credit to restructuring.',
  4410430: 'The 50-to-30 band is fulcrum-security territory. Correct identification of which class breaks the value captures the new-equity upside from a low basis.',
  4410431: 'Sub-30 bonds are cheap options on upside scenarios. Hertz 2020 is the textbook case where EV expansion during a case lifted unsecureds from sub-30 to par-plus.',
  4410432: 'Hertz teaches that EV is not fixed at filing. Sector dynamics during the case can shift recovery materially — run scenarios, not single point estimates.',
  4410433: 'The fulcrum class converts its claim into residual equity by structural necessity — no cash to pay them in full, no junior class with higher claim.',
  4410434: 'Compare estimated EV to the cap structure and find where the pie runs out. That class is the fulcrum; market mispricing of that class is the alpha.',
  4410435: 'Companies do not file Chapter 11 when senior secured is impaired by a small margin. They file when value breaks well below. Senior secured is rarely fulcrum.',
  4410436: 'Even very junior classes can be fulcrum when EV happens to break at their level. Map EV against face, find the inflection, price accordingly.',
  4410437: 'Super-priority is the court-granted ranking that lets new money lend to a defaulted debtor. Often combined with security to make the DIP doubly safe.',
  4410438: 'Roll-up upgrades pre-petition exposure to DIP priority. Check whether (and how much) pre-petition lender exposure has been rolled — it changes the math.',
  4410439: 'DIP sizing follows the case plan. A 363-sale case has a short DIP sized to the milestone calendar — bridges operations from filing to closing.',

  // ---------- Capstone: Apex Holdco LBO ----------
  4410500: 'Funded sources only count at close. An undrawn revolver is available capacity, not a source. Walk the arithmetic before debating structure.',
  4410501: 'Frame leverage against both IG and sponsor-LBO comps. Apex at 4.1x sits below sponsor median (5.5-6.5x) and above public IG (2.5-3.5x).',
  4410502: 'Revolver sizing = seasonal swing + buffer for capex and acquisitions. $50M covers the $25M Apex swing with cushion without distorting leverage optics.',
  4410503: 'TLB-vs-notes mix balances cost (notes pricier), tenor (notes longer), call protection (notes harder to refi), and covenants (notes no maintenance).',
  4410504: 'TLA is bank-held with full maintenance and amortization. TLB is institutional cov-lite with bullet maturity — the right product for sponsor LBO economics.',
  4410505: 'Spacing maturities across tranches avoids stacking two refis in the same year. The 8-year notes outside the 7-year TLB is intentional, not market convention.',
  4410506: 'Second-lien layers earn their place at 5.5x+ leverage. At 4.1x with $120M of senior unsecured cushion, second-lien is uneconomic insurance.',
  4410507: 'Equity contribution sizes against leverage and credit quality. 35% on cyclical industrial at 4.1x is the floor of acceptability; pushing below 30% changes the case.',
  4410508: 'Rating outcomes track leverage AND business risk AND ownership. Apex\'s scale, cyclicality, and sponsor structure pin the rating at single-B, not Ba/BB.',
  4410509: 'Flex is the bank\'s insurance against the syndication window. Lock flex caps in the commitment letter; assuming flex without negotiation leaves the bank exposed.',
  4410510: 'Forward-looking unrealized synergies are the canonical EBITDA-quality flag. Founder normalization and deal costs are routine; sponsor synergies are not.',
  4410511: '~50% EBITDA-to-FCF conversion is strong for a leveraged industrial. Walk the bridge honestly — EBITDA, capex, interest, taxes, working capital.',
  4410512: 'Interest coverage at close + rate sensitivity table is the right presentation. Apex\'s 2.9x base case plus +100/+200 bps sensitivity shows the rate exposure.',
  4410513: 'An underwriting case with no recession in a 5-year hold is a sales pitch, not an underwriting. Anchor downside on actual historical industrial declines.',
  4410514: 'Operating leverage cuts both ways. Apex\'s 9% fixed-cost base means EBITDA falls ~3x as fast as revenue in a downside. Walk the variable/fixed split explicitly.',
  4410515: 'Seasonal businesses need peak-quarter analysis, not just LTM metrics. The revolver covers the peak; the year-end snapshot can hide the intra-year liquidity need.',
  4410516: 'Concentration analysis is a portfolio question — top customer, top-10, end-market spread. 9%/35% with end-market diversification is workable, not severe.',
  4410517: 'Capex is canonical sponsor-optimism territory. Anchor on historical actuals plus documented operational change, not on the sponsor\'s declining trajectory.',
  4410518: 'Cash taxes interact with the interest shield path. Walk the tax bridge year by year as the shield shrinks with deleveraging — the shape matters.',
  4410519: 'QofE findings vary in materiality. Churned customer revenue and under-reserved inventory move EBITDA. Stock bonuses and rebate reclassifications need more analysis.',
  4410520: 'Cov-lite removes maintenance financial covenants on the TLB. Incurrence covenants, mandatory prepayments, and the revolver springing test remain.',
  4410521: 'Both the springing trigger and the leverage test are negotiated together. Loosening either waters down the protection that justified the cov-lite TLB.',
  4410522: 'Cap synergies and cost-savings add-backs at 25% of EBITDA with 18-24 month realization. Uncapped add-backs are how borrowers manufacture covenant headroom.',
  4410523: 'RP capacity needs a leverage-based incurrence test plus capped baskets. Dividends to the sponsor should require demonstrated deleveraging.',
  4410524: '"Unlimited if leverage below X" baskets are the canonical aggressive sponsor move. Cap the unlimited basket or require a closing-date ratio test.',
  4410525: 'ECF sweeps turn a credit-case expectation into a contractual obligation. At 4.1x close, 50% with step-downs is the market answer — do not give it up too easily.',
  4410526: 'Asset-sale sweep mechanics enforce deleveraging discipline. At 4.1x close, proceeds belong to lenders unless promptly redeployed into operating assets.',
  4410527: 'Look at permitted indebtedness in aggregate, not basket by basket. Individual lines look reasonable; the total often adds up to 1-2x EBITDA of additional capacity.',
  4410528: 'J.Crew protections must be specific: caps on IP transfers, material-asset transfer prohibitions, leverage test on Unrestricted Sub designation.',
  4410529: 'Hold MFN tight: 50bps cushion, no sunset. Sunsets are the more dangerous concession — they remove protection at the moment the sponsor most wants to issue priming debt.',
  4410530: 'Downside construction walks the operating leverage explicitly. Revenue down X%, EBITDA down more, capex sticky, working capital releases on the way down.',
  4410531: 'EBITDA in a downside is determined by the variable/fixed cost split, not negotiation. Walk the math; defend the number from the cost structure.',
  4410532: 'Liquidity runway is whether the borrower survives to recovery. Revolver + cash + WC release against annual interest is the right framing, contingent on covenant access.',
  4410533: 'Springing covenant tripping in the trough is the design intent — it brings lenders to the table before the company runs out of options. Waivers and amendments, not auto-acceleration.',
  4410534: 'TLB recovery uses going-concern EV at a distressed multiple, by priority. First-lien at $300M against $330M trough EV is fully covered — recovery "1+".',
  4410535: 'Unsecured note recovery is the inverse of TLB — only what is left after secured is satisfied. Sub-50% recovery is why notes price wide of the TLB.',
  4410536: 'Distressed sale multiple discounts the going-concern by ~0.5-1.0x for time pressure and advisor fees. Using the going-concern multiple overstates recovery.',
  4410537: 'Pari passu first-lien revolver and TLB share collateral pro rata. The springing covenant is consent-and-control, not priority — they still recover at the same level.',
  4410538: 'Refi risk at maturity is real. Mitigants are maturity laddering, sponsor capital base, and deleveraging through the hold — all three belong in the memo.',
  4410539: 'Recovery ratings are tranche-specific, not blended. TLB "1+" notches the issue rating above the issuer; notes "4" matches the issuer rating with no notch.',
  4410540: 'Launch tighter than the wide end of comps, with OID room as a release valve. The underwritten price is the floor for bank P&L, not the launch number.',
  4410541: 'YT3 is the standard TLB comparison metric — OID amortized over the three-year assumed life. Quote both headline (spread + OID) and derived YT3.',
  4410542: 'Roadshow strategy and price talk are coordinated. First-time issuers need diligence access; compressing the timeline costs 25-50bps in pricing.',
  4410543: 'Pre-empt the concerns that drive pricing: cycle, customers, debt history. Second-order topics matter less than the load-bearing credit issues.',
  4410544: 'Tight pricing with anchor concentration produces a fragile book that trades poorly in secondary. Broad book at a marginally wider price wins on aftermarket and league-table credit.',
  4410545: 'Allocation discipline is what makes secondary work. Prioritize core CLOs and credit funds; scale down flippers; cap single-account size at 7-8%.',
  4410546: 'Pricing flex first — recoverable on the next refi. Structural flex (amort, tenor) is harder to undo and changes the LBO economics materially.',
  4410547: 'NC3 is standard sponsor LBO call protection. The coupon premium pays for the three years of locked-in investor economics — keep the structure and offer make-whole.',
  4410548: 'Lender deck is management\'s story with bank-supplied historical color and risk factors. The bank\'s downside lives in the underwriting memo, not the marketing deck.',
  4410549: 'Flat P&L plus stable secondary on a flexed deal is the design. Underwriting fee absorbs syndication risk; flex absorbs market moves; secondary trades healthy but not too tight.',
}

export const CLF_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // ---------- Chapter 1 ----------
  4410001: {
    newCorrect: 'A class of claims cannot recover until every senior class is paid in full or has consented — juniors come after seniors are made whole.',
    lessonAddendum: 'APR is the spine of bankruptcy distribution. Plans that violate it are non-confirmable absent class consent; "fair and equitable" essentially codifies APR for cram-down purposes.',
  },
  4410004: {
    newCorrect: 'Yes — the senior class can voluntarily gift some of its own recovery to a junior class without violating APR, so long as no intermediate class is skipped.',
    lessonAddendum: 'Courts have generally permitted senior creditors to share their own recovery to grease plan confirmation. The Jevic decision narrowed this in structured dismissals but it survives in plan contexts.',
  },
  4410008: {
    newCorrect: 'No — cramdown of a secured class requires deferred cash payments with present value equal to the full secured claim, or retention of the lien against collateral.',
    lessonAddendum: 'The "indubitable equivalent" standard means anything less than full present value is non-confirmable over the secured class\'s objection. The court can determine claim value, but cannot impose a haircut.',
  },
  4410009: {
    newCorrect: 'Structurally subordinated to the sub bank debt — noteholders only reach OpCo cash flow as a residual equity claim after sub debt is paid.',
    lessonAddendum: 'A credit memo must reflect this. The headline "senior unsecured" label is misleading without the guarantee structure mapped out — missing sub guarantees are how parent paper becomes deeply junior in practice.',
  },
  4410011: {
    newCorrect: 'Higher initial leverage (5-7x EBITDA), aggressive EBITDA add-backs, tighter documentation flexibility, and a sponsor equity check signaling commitment.',
    lessonAddendum: 'Sponsor credits underwrite to IRR, exit multiple, and documentation flexibility. The credit story leans on the equity check and sponsor track record, not on a conservative balance sheet.',
  },
  4410015: {
    newCorrect: 'Loan-to-ARR replaces leverage, with covenants on ARR growth, retention, and minimum liquidity — the credit relies on enterprise value and refi risk, not near-term coverage.',
    lessonAddendum: 'Recurring-revenue lending evolved to serve growth SaaS borrowers that throw off contracted revenue but consume cash. The exit is refinancing or M&A, not amortization from cash flow.',
  },
  4410016: {
    newCorrect: 'A dividend recap converts equity buffer into debt without operational improvement — covenant headroom shrinks and downside protection weakens despite the headline EBITDA growth.',
    lessonAddendum: 'Dividend recaps are a classic late-cycle TLB risk. They monetize sponsor equity, often using carve-outs (incremental ratable, available amount, builder basket) that were negotiated at close.',
  },
  4410019: {
    newCorrect: 'Through-cycle: trailing reads 3.9x but trough leverage is 7.8x. The memo should anchor on the trough case for covenant headroom and downside scenarios, not the trailing print.',
    lessonAddendum: 'Lenders may use trailing for compliance arithmetic, but the credit assessment has to stress to trough. The right framing for IC is: "3.9x today, 7.8x at trough — here is the liquidity, covenant headroom, and flex that gets us through."',
  },
  4410020: {
    newCorrect: 'TLA amortizes meaningfully (5-10% per year scaling up, ~50% paid by maturity). TLB amortizes nominally (1% per year with a bullet at maturity).',
    lessonAddendum: 'TLA is the bank tranche — amortizing, shorter tenor, lower spread, held by relationship banks. TLB is the institutional tranche — bullet, longer tenor, higher spread, held by CLOs and credit funds.',
  },
  4410023: {
    newCorrect: 'ABL availability scales with collateral (receivables and inventory) rather than EBITDA, giving reliable liquidity even when earnings compress.',
    lessonAddendum: 'ABL is the right tool when collateral is liquid but earnings are volatile. Cash-flow lending is the right tool when EBITDA is durable. Mismatching borrower type to facility type is a frequent and avoidable structuring error.',
  },
  4410024: {
    newCorrect: 'Senior in payment priority versus contractually subordinated debt, but junior in collateral priority to the secured term loans — "senior" refers to contractual ranking, not lien position.',
    lessonAddendum: 'Senior unsecured ranks ahead of subordinated by indenture; ranks behind secured by lien. Lenders must read both layers, not just the headline label.',
  },
  4410025: {
    newCorrect: 'TLB lenders have no direct covenant protection — the revolver covenant is an early warning, but undrawn revolver means no springing test and silent deterioration.',
    lessonAddendum: 'By the time the springing covenant triggers (heavy revolver use), the credit is often already deteriorating. Cov-lite TLBs depend on cross-default to revolver EOD, which lags.',
  },
  4410027: {
    newCorrect: 'The $200M fixed basket plus an unlimited ratable amount that keeps first-lien leverage at 4.0x — combined, the borrower has significant headroom against the closing-date constraint.',
    lessonAddendum: 'A sponsor that grows EBITDA expands ratable capacity automatically on top of the fixed basket — often enabling material re-leveraging without lender consent. The two baskets stack rather than substitute.',
  },
  4410029: {
    newCorrect: 'The existing TLB spread must be repriced up to at least SOFR + 475 — incremental yield (525) minus the MFN cushion (50).',
    lessonAddendum: 'MFN protects existing lenders against new pari paper pricing through them. The cushion (often 50 bps, sometimes with a 6-18 month sunset) caps how far through existing paper incremental can price.',
  },
  4410030: {
    newCorrect: 'Below the senior secured TLB and above the equity — typically unsecured or deeply subordinated, often with cash coupon plus PIK and warrants for additional upside.',
    lessonAddendum: 'Mezzanine absorbs more risk than senior debt and earns higher returns. Typical blend: cash coupon, PIK interest, plus warrants or co-investment equity. Coupon size compensates for depth, not seniority.',
  },
  4410031: {
    newCorrect: 'Accrued interest is capitalized into principal at the PIK rate, growing the loan balance — borrower preserves cash but pays higher absolute interest going forward.',
    lessonAddendum: 'PIK toggles are designed for liquidity flexibility. From a credit perspective, sustained PIK toggling is a warning signal — the borrower is choosing cash preservation over balance-sheet discipline.',
  },
  4410032: {
    newCorrect: 'The 2% warrants entitle the holder to 2% of equity at the strike (LBO) price; at 2.5x money the warrant value is roughly 2% × (2.5 − 1.0) of the equity check.',
    lessonAddendum: 'Warrants deliver equity upside on top of the cash coupon — converting mezzanine returns from pure yield into yield-plus-equity. The warrant percentage and strike are heavily negotiated and materially shift mezzanine economics.',
  },
  4410033: {
    newCorrect: 'First-lien lenders control enforcement; second-lien lenders accept a 90-180 day standstill before they can independently enforce.',
    lessonAddendum: '1L/2L intercreditor agreements concentrate workout control in the senior class. A 2L lender investing in a credit must accept this — control is the price of priority.',
  },
  4410034: {
    newCorrect: 'Allocates economics between a notional first-out and last-out portion within the same tranche — externally one loan, internally divided priority.',
    lessonAddendum: 'Unitranche externally looks like a single first-lien loan; internally, the AAL splits it so different lender pockets can participate at different risk-return profiles. The borrower benefits from a single agreement; lenders preserve risk segmentation.',
  },
  4410035: {
    newCorrect: '2L recovery falls from $100M (66.7%) at $500M EV to $50M (33.3%) at $450M EV — a 10% EV decline cuts 2L recovery in half.',
    lessonAddendum: 'Junior tranche recoveries are levered to EV. Small EV moves translate into large recovery swings — which is why 2L and mezz demand premium spreads, and why credit memos stress-test EV directly.',
  },
  4410036: {
    newCorrect: 'Structurally subordinated to all OpCo debt but adds pressure on OpCo cash flow if dividends are required to service the HoldCo — and signals sponsor aggressiveness.',
    lessonAddendum: 'HoldCo PIK is financial engineering that increases sponsor leverage at the consolidated level without directly burdening OpCo. It often presages further leveraging at OpCo as well.',
  },
  4410037: {
    newCorrect: 'Contractually subordinated in right of payment to senior unsecured, higher coupon, longer call protection, often with PIK or equity-kicker features.',
    lessonAddendum: 'Subordinated notes are the deepest debt layer. Contractual subordination, higher coupon, longer call protection, and PIK/equity kickers are the standard markers — they rank above only preferred and common.',
  },
  4410038: {
    newCorrect: 'The sponsor has two cures remaining (5 minus 3 used) but is also constrained by the two-per-year cap — a fourth cure in the same year may be blocked.',
    lessonAddendum: 'Equity cure caps are real constraints, not formalities. Tracking cures used (annually and lifetime) and modeling cure capacity in stress scenarios is core LevFin discipline.',
  },
  4410040: {
    newCorrect: '$50M (preference) + 20% of $350M residual = $50M + $70M = $120M, vs $80M under non-participating preferred.',
    lessonAddendum: 'Participating preferred takes the preference and then shares pro rata in the residual. It is more favorable to the investor than straight preferred and is more common in down-rounds, distressed rounds, or sponsor-backed structures.',
  },
  4410043: {
    newCorrect: 'Management subscribes for ordinary shares at a discount; sponsor capital sits in preferred or shareholder loans that rank ahead — management economics are levered to value above the preference.',
    lessonAddendum: 'Sweet equity is the European LBO market\'s way of giving management levered upside. A 2.5x sponsor deal can become a 5x+ management outcome on the same value creation.',
  },
  4410044: {
    newCorrect: 'Warrants are a right to acquire equity at strike, separable from the debt — the loan repays on its own and the warrant survives; a convertible extinguishes the loan in exchange for equity.',
    lessonAddendum: 'Detachable warrants give yield-plus-upside hybrid returns. Convertible debt swaps one instrument for another. The lender outcome differs materially across the two structures.',
  },
  4410045: {
    newCorrect: 'Preferred has no maturity, no mandatory cash interest in most structures, and no ability to file for default — it lacks the contractual remedies that define debt.',
    lessonAddendum: 'The line between debt and preferred is the bundle of contractual remedies. Preferred is equity that looks like debt only when everything is going well — the remedies (or lack of them) are what makes the difference structural.',
  },
  4410046: {
    newCorrect: '$750M − $300M − $150M − $200M − $100M = $0 of preference remaining; common shares with preferred in the residual ($0 of additional residual). Common receives $0.',
    lessonAddendum: 'The full debt stack ($750M) exactly absorbs the sale proceeds. Preferred receives $0 of its $80M preference and common receives $0. Small price changes (down $50M wipes a slice of sub PIK; up $100M starts the preferred and common share) show the sensitivity the cap structure delivers.',
  },

  // ---------- Chapter 2 ----------
  4410101: {
    newCorrect: 'When the cash sits at non-guarantor subsidiaries, is restricted, or is needed for working capital — in which case it cannot actually be applied to repay debt.',
    lessonAddendum: 'Net leverage is appropriate when cash is unrestricted, at guarantor entities, and not earmarked for working capital. Trapped or operational cash should be excluded from the netting — at the limit, use total debt.',
  },
  4410103: {
    newCorrect: 'Lease-adjusted debt of ~$900M divided by EBITDAR of $300M = ~3.0x — confirm against the rating agency 8x rent capitalization as a sanity check.',
    lessonAddendum: 'For retailers, telcos, and airlines, leases are debt-like in substance. Lease-adjusted leverage uses lease-inclusive debt against EBITDAR (or EBITDA with rent added back), so numerator and denominator are on the same basis.',
  },
  4410104: {
    newCorrect: 'Show leverage both ways — reported PF including synergies and an as-is view excluding unproven synergies — and base the recommendation on the as-is figure.',
    lessonAddendum: 'Pro forma adjustments cluster around deal closings precisely because they help the leverage headline. The honest practice is to show as-is leverage prominently and treat synergies as a forecast, not an accomplished fact.',
  },
  4410105: {
    newCorrect: 'Net only the freely accessible cash (~$150M), giving net leverage of ~3.5x — disclose the trapped-cash treatment so the committee can see why net and gross diverge.',
    lessonAddendum: 'Trapped cash, restricted cash, and cash needed for daily working capital should be excluded from net leverage. Showing the netting assumption explicitly is what lets the committee judge it.',
  },
  4410107: {
    newCorrect: 'HoldCo debt is serviced from cash that flows up from OpCo — distress at HoldCo can force dividends or restructurings that destabilize OpCo even when the legal claim stops at the parent.',
    lessonAddendum: 'Structural subordination limits legal recourse but not operational pressure. HoldCo distress almost always leaks into OpCo decisions, which is why lenders look at both leverage layers.',
  },
  4410109: {
    newCorrect: '(EBITDA − capex) / Interest = (300 − 120) / 80 = 2.25x — capex consumes earnings that would otherwise service debt.',
    lessonAddendum: '(EBITDA − Capex) / Interest is the standard adjusted coverage metric for capital-intensive credits. It captures the fact that capex competes with interest for the same cash pool.',
  },
  4410112: {
    newCorrect: 'Cash interest of $70M — coverage measures ability to service interest from current cash flow, and PIK is not paid in cash.',
    lessonAddendum: 'PIK is a real economic cost for leverage and total return, but not a current cash service requirement. PIK accretes to principal and shows up later as a larger debt balance — relevant to leverage, not coverage.',
  },
  4410113: {
    newCorrect: 'Cash available for debt service = earnings minus capex — both compete for the same pool, and a coverage ratio that ignores capex flatters capital-intensive credits.',
    lessonAddendum: 'A coverage ratio that ignores capex implicitly assumes the asset base maintains itself — true for some asset-light businesses, false for most leveraged borrowers.',
  },
  4410114: {
    newCorrect: 'DSCR includes principal amortization in the denominator, not just interest — project finance is structured around scheduled amortization, so coverage must test the full debt service profile.',
    lessonAddendum: 'DSCR = CFADS / (Interest + Mandatory Principal). Project finance debt is structured to amortize over the asset life, so a coverage metric that ignores principal would miss the binding constraint.',
  },
  4410117: {
    newCorrect: '$100M = $200M − $50M dividend − $30M M&A − $20M mandatory amortization.',
    lessonAddendum: 'FCF available for discretionary debt paydown is what remains after committed cash uses. Modeling this explicitly is how lenders forecast deleveraging — anything short of it overstates speed.',
  },
  4410119: {
    newCorrect: 'Credit-agreement ECF definitions are document-specific — usually starting from a levered measure (often CNI or CFADS) with bespoke add-backs and deductions.',
    lessonAddendum: 'Covenant metrics live in the credit agreement, not in finance textbooks. Always read the definition of EBITDA, ECF, FCF, and "permitted" categories — bank counsel earns their fee in that section.',
  },
  4410120: {
    newCorrect: 'Maintenance capex is non-discretionary and must be deducted from EBITDA for recurring FCF; growth capex is more discretionary but often less than management claims.',
    lessonAddendum: 'The credit committee needs to know how much capex is structural versus discretionary — that is the deleveraging optionality. Analysts should triangulate against depreciation, peer ratios, and historical capex during downturns.',
  },
  4410123: {
    newCorrect: 'A one-notch downgrade, typically triggered by deteriorating metrics or a leveraged event like an LBO or large debt-funded acquisition.',
    lessonAddendum: 'Notches are the granularity of the rating scale. One-notch moves are routine; multi-notch downgrades signal a discrete event or material misjudgment by the agency.',
  },
  4410124: {
    newCorrect: 'Outlook signals direction over 6-24 months and is probabilistic; Watch flags a specific identified event likely to drive a near-term rating action, usually within 90 days.',
    lessonAddendum: 'Both move spreads, and Watch moves them more sharply because it implies an imminent action. The market does not treat the labels as cosmetic.',
  },
  4410125: {
    newCorrect: 'Investors price in the asymmetric risk that a downgrade to BB+ would force IG-mandated holders to sell — creating concentrated supply that HY would have to absorb.',
    lessonAddendum: 'Credits near the IG/HY boundary trade with one foot in each market. The asymmetric forced-selling risk on a downgrade — with no symmetric upside on an upgrade — pulls spreads wider than fundamentals alone would suggest.',
  },
  4410126: {
    newCorrect: 'IG-mandated funds are forced to sell into a market with fewer immediate natural buyers — once HY funds reprice the bonds into HY portfolios, spreads partially recover.',
    lessonAddendum: 'Fallen-angel dynamics are well-documented: index-mandated supply hits the market faster than HY demand absorbs it, spreads gap wider than fundamentals justify, and the trade recovers over weeks-to-months.',
  },
  4410127: {
    newCorrect: 'Inventory is building faster than it is selling, absorbing working capital and potentially signaling merchandising weakness or aging stock that will require markdowns.',
    lessonAddendum: 'For retailers, inventory turns are a leading indicator of working capital health and future gross margin pressure. Slowing turns at flat revenue is one of the clearest signals that a markdown cycle is coming.',
  },
  4410128: {
    newCorrect: 'Same-store demand is contracting; total revenue growth is purchased through capex on new stores — the deleveraging story depends on whether new stores comp positively.',
    lessonAddendum: 'Comp sales isolate the demand trend on the existing footprint. For multi-unit retailers, comps are the cleanest read on whether the business model is healthy.',
  },
  4410129: {
    newCorrect: 'Subscriber lifetime value is deteriorating from both ends — shorter lives and higher acquisition cost — even while reported revenue grows.',
    lessonAddendum: 'Telco credit work centers on subscriber LTV. The trio of ARPU, churn, and SAC tells the cash flow story before it shows up in the income statement.',
  },
  4410130: {
    newCorrect: 'A second-quartile producer continues to generate positive cash even after deep commodity-price declines that drive the highest-cost quartile out.',
    lessonAddendum: 'For commodity producers, cost-curve position is the deepest credit signal. IG commodity credits almost always sit in the first or second quartile of their cost curve.',
  },
  4410131: {
    newCorrect: 'CET1 measures the highest-quality loss-absorbing capital (common equity, retained earnings) divided by risk-weighted assets — the buffer that absorbs losses first.',
    lessonAddendum: 'For bank credit, capital adequacy ratios — especially CET1 — are the equivalent of corporate leverage. They measure the size of the equity buffer that protects subordinated and senior creditors.',
  },
  4410132: {
    newCorrect: 'The bank has more bad loans and weaker reserves against them — implying future provisioning expense or eventual realized losses that capital must absorb.',
    lessonAddendum: 'Capital ratios tell you the cushion; NPLs and reserves tell you how fast that cushion is being consumed. Absolute coverage matters less than coverage versus the loss content of the book.',
  },
  4410134: {
    newCorrect: 'Working capital absorbed $70M to fund growth — a normal pattern in growth phases, but EBITDA overstates current debt service capacity and persistent absorption is a flag.',
    lessonAddendum: 'Working capital absorption is one of the most consistent reasons EBITDA overstates cash generation in growing companies. Explicitly size the gap and decide whether it is structural or transitory.',
  },
  4410136: {
    newCorrect: 'Only $55M is actually available to pay down debt after announced uses — and that assumes no working capital surprise, buyback, or other discretionary absorption.',
    lessonAddendum: 'Modeling deleveraging requires explicit subtraction of every committed cash use before claiming residual FCF goes to debt. Anything short overstates how fast the borrower can delever.',
  },
  4410137: {
    newCorrect: 'The $280M gap between expected paydown and observed debt increase — likely candidates are M&A, dividends, buybacks, FX on foreign debt, or pension contributions.',
    lessonAddendum: 'The reconciliation between levered FCF and the change in net debt is one of the highest-signal exercises in credit analysis. It surfaces patterns the headline FCF figure hides.',
  },
  4410138: {
    newCorrect: 'Treat them as recurring operating costs and reduce Adjusted EBITDA accordingly — anything that happens every year is part of the cost base, no matter how it is labeled.',
    lessonAddendum: 'Recurring "one-time" charges are one of the most common EBITDA quality flags. The test is empirical: does the charge appear year after year? If yes, it is part of run-rate cost.',
  },
  4410139: {
    newCorrect: 'Phase the cost saves into projected EBITDA over a realistic 18-24 month period with a haircut for execution risk — and underwrite at as-is leverage as backup.',
    lessonAddendum: 'A QoE report tests whether savings are identifiable and reasonable; it does not eliminate execution risk. The committee owes its own judgment on phasing and haircut.',
  },
  4410140: {
    newCorrect: 'Treat SBC as a real cost — it is compensation paid in equity, with the same economic substance as cash compensation; serious credit work does not add it back.',
    lessonAddendum: 'SBC is non-cash on the income statement but is real economic compensation that dilutes existing holders. The cash equivalent shows up later in buybacks to offset dilution.',
  },
  4410141: {
    newCorrect: 'Treat the run-rate portion (e.g., $15-18M reflecting the five-year average) as recurring and challenge the addback — repeated "completion" claims is a textbook quality-of-earnings flag.',
    lessonAddendum: 'Five consecutive "final" restructurings is a pattern, not a series of unrelated events. Sizing the recurring component using the historical average is more honest than a token haircut or wholesale acceptance.',
  },

  // ---------- Chapter 3 ----------
  4410200: {
    newCorrect: 'Selling slices of the underwritten commitment to CLOs, loan funds, and other institutional buyers so the bank does not hold the loan on its balance sheet.',
    lessonAddendum: 'Banks underwrite leveraged loans on a best-efforts or backstopped basis specifically to distribute them. Primary syndication is the distribution step — direct sale of loan participations to qualified institutional buyers.',
  },
  4410203: {
    newCorrect: 'Lead-left runs the book, controls allocations, earns the largest share of fees, and gets league-table credit as the bookrunner of record.',
    lessonAddendum: 'Bookrunner order is negotiated based on relationship, balance-sheet commitment, and fee split. Co-leads share commitment and fees pro rata to their underwriting share but do not run the process.',
  },
  4410204: {
    newCorrect: 'A small group of relationship banks (typically 3-8) holds the loan to maturity without selling it down to the institutional market.',
    lessonAddendum: 'Club deals stay in the bank market with a small lender group. The choice depends on size, sponsor preference, and whether the borrower wants the flexibility (or scrutiny) of institutional ownership.',
  },
  4410205: {
    newCorrect: 'Reverse flex pricing tighter (lower spread, higher OID toward par) and scale allocations back pro rata across the order book.',
    lessonAddendum: 'Oversubscription gives the arranger pricing power. The borrower gets better terms; investors get less paper than they ordered.',
  },
  4410208: {
    newCorrect: 'NC3 gives the issuer earlier refinancing optionality if rates fall or credit improves, in exchange for accepting a slightly higher coupon at issuance.',
    lessonAddendum: 'Call protection is a yield-vs-optionality trade. Shorter call protection (NC3 vs NC5) means investors give up more optionality, so they demand higher yield.',
  },
  4410210: {
    newCorrect: 'It lets the issuer deleverage from IPO or secondary equity proceeds during the otherwise non-callable period, at a fixed premium investors can price.',
    lessonAddendum: 'Equity claws make sense for sponsor deals: if the company IPOs within three years, the sponsor wants the option to use primary proceeds to pay down expensive bond debt at a known premium.',
  },
  4410212: {
    newCorrect: 'Bullet structure preserves cash flow during the life of the deal for capex, M&A, and dividends — the issuer only needs to find refi capacity at maturity.',
    lessonAddendum: 'The bet is that maturity-date refinancing markets will be open — when they are not, the bullet is exactly where the company gets into trouble.',
  },
  4410213: {
    newCorrect: 'The bond locks in 7.5% for the life of the deal; the loan floats with SOFR, so the borrower\'s loan interest moves up and down with short rates.',
    lessonAddendum: 'Issuers and investors choose the mix deliberately — bonds give predictable cash interest; loans give upside (or downside) to short-rate moves. Mixed capital structures spread the rate risk.',
  },
  4410216: {
    newCorrect: 'TLA is structured for banks that want principal pay-down to reduce hold size; TLB is structured for CLOs that want maximum coupon and minimal cash drag.',
    lessonAddendum: 'TLA amortization reflects bank preferences. TLB amortization at 1%/year is a near-bullet that preserves the institutional yield profile CLOs need.',
  },
  4410217: {
    newCorrect: 'Banks limit leveraged loan exposure to 5 years to match funding and capital cycles; CLOs and institutional buyers will hold 7-year paper.',
    lessonAddendum: 'The 5y/7y split mirrors investor risk appetite. The tenor mismatch is real for the borrower: TLA matures first and creates refi work two years before TLB.',
  },
  4410218: {
    newCorrect: 'Sweep proceeds apply pro rata to TLA and TLB by outstanding balance — accelerating TLA payoff and shortening TLB principal more than the scheduled 1%.',
    lessonAddendum: 'Pro rata sweep behavior is one of the more subtle features of the pro rata facility. Negotiation often pivots on the sweep waterfall.',
  },
  4410219: {
    newCorrect: 'Roughly half the purchase price must be funded with equity, with the balance from debt across senior secured and unsecured tranches.',
    lessonAddendum: 'Entry multiple minus market debt capacity equals required equity check. At 11.0x entry and 6.0x debt, the sponsor writes a 5.0x EBITDA equity check.',
  },
  4410221: {
    newCorrect: 'Whether interest coverage stays above 1.5x-2.0x in the downside — if it dips below, the credit cannot service interest from operations.',
    lessonAddendum: 'Below ~1.5x, the company cannot fund interest from cash flow and starts depleting liquidity. Sizing the cap structure so coverage holds at 1.5x+ even in downside is the basic discipline.',
  },
  4410222: {
    newCorrect: 'Higher leverage reduces the equity check, so the same exit value translates into a higher multiple of invested equity — IRR is mechanically levered by debt at entry.',
    lessonAddendum: 'Going from 5.5x to 6.5x debt on the same purchase price cuts the equity check by ~1.0x EBITDA. The same exit return spreads across less equity — and IRR jumps.',
  },
  4410223: {
    newCorrect: 'Junior debt sitting behind the senior secured — typically HY bonds or unsecured/subordinated notes that take recovery risk after the secured lenders are paid.',
    lessonAddendum: 'Investors price the junior tranche to reflect the worse recovery position. The size of the gap depends on how aggressive the sponsor wants to be.',
  },
  4410225: {
    newCorrect: 'Economically very similar — both reduce proceeds by 1% — but OID is amortized into yield over the loan life while a fee is recognized at closing.',
    lessonAddendum: 'OID and upfront fees are economically close substitutes. Investors generally prefer OID because it produces yield to maturity rather than a one-time fee; arrangers prefer fees for syndication economics.',
  },
  4410226: {
    newCorrect: 'It sets the minimum SOFR component used to calculate interest — if SOFR falls below 0.50%, the borrower still pays as if SOFR were 0.50%.',
    lessonAddendum: 'SOFR floors became standard after the 2020 rate collapse. As short rates rose, floors stopped binding, but they remain in documentation.',
  },
  4410227: {
    newCorrect: '99.5 is performing/par; 92 is stressed or weak performing; 68 is distressed and likely on a watchlist with workout teams involved.',
    lessonAddendum: 'Around par means market is comfortable; mid-90s means watchlist; below 80 means distressed with realistic LGD scenarios in play.',
  },
  4410228: {
    newCorrect: 'The bond is trading above par, so the worst-case yield comes from being called early at the next call price — losing the premium reduces yield versus maturity.',
    lessonAddendum: 'For premium-priced callable bonds, YTW is the relevant return because the issuer will likely call. Pretending otherwise overstates the yield available.',
  },
  4410229: {
    newCorrect: 'Slightly higher than 7.0% — the OID is amortized into yield over the bond life, adding roughly 40-50 bps depending on the exact compounding.',
    lessonAddendum: 'OID pricing math: investor pays 98, receives 100 at maturity plus 7% on 100 each year. The IRR over 5 years is roughly 7.45%. Use the all-in yield to compare offerings.',
  },
  4410230: {
    newCorrect: 'Call only makes sense if the issuer can refinance into new debt at a lower all-in cost than the existing 7.5% coupon, after issuance fees and OID.',
    lessonAddendum: 'Cost of calling (102) plus new issuance fees vs PV of interest savings on the new lower-coupon debt. When the savings exceed the cost, the call is exercised.',
  },
  4410231: {
    newCorrect: 'Tight spreads and strong investor demand let issuers reprice existing loans to lower coupons or refinance early — the option value of waiting falls to zero.',
    lessonAddendum: 'When spreads tighten 50-100bps from where existing loans cleared, repricing becomes economic and CLOs accept it because the alternative (the loan refinancing away entirely) is worse.',
  },
  4410232: {
    newCorrect: 'Loans can be refinanced at any time with no premium; bonds require a multi-year non-call period and call premiums — loans give continuous refi optionality.',
    lessonAddendum: 'Loan prepayment optionality is one of the underrated features of the leveraged loan market. Part of why CLOs accept lower spreads on loans than HY bonds on the same credit.',
  },
  4410234: {
    newCorrect: 'Repricing if existing investors will roll into the new rate — it avoids full new-issue fees; full refi if existing investors will not accept tighter pricing.',
    lessonAddendum: 'Repricing keeps the existing tenor and amends the rate, with non-consenting lenders replaced via assignment. Full refi resets everything but costs full OID and arrangement fees.',
  },
  4410235: {
    newCorrect: 'If the issuer refinances or reprices within six months, the loan is repaid at 101 — investors get a 1% premium for the optionality being taken back early.',
    lessonAddendum: 'Soft call is the minimal floor of call protection in the loan market. CLOs price loans assuming they will refi away in 2-3 years, so the soft call mainly affects the very near-term window.',
  },
  4410236: {
    newCorrect: 'The CLO is constrained — it can still buy single-B but is sensitive to paper that might get downgraded to triple-C and breach its concentration test.',
    lessonAddendum: 'CLO collateral tests shape new-issue demand in real ways. When market single-B exposure is heavy and downgrade risk is rising, CLOs become more selective on additional single-B paper.',
  },
  4410237: {
    newCorrect: 'AAA buyers are insurance companies, pension funds, and bank treasuries — their demand sets the cost of CLO liabilities, which sets what spreads CLOs need on loans.',
    lessonAddendum: 'CLO arbitrage works only when the spread on the loan portfolio exceeds the weighted cost of CLO liabilities plus fees. AAA demand is the biggest single driver of liability cost.',
  },
  4410238: {
    newCorrect: 'Buying below par creates an OID position that may impact the CLO\'s par coverage tests — discount loans can degrade par coverage and limit equity distributions.',
    lessonAddendum: 'CLO par tests are an underappreciated driver of new-issue loan demand. The CLO bid drives the OID convention — preference for buying at or near par is why new TLBs clear at 99-99.5.',
  },
  4410239: {
    newCorrect: 'They give up principal to move up the priority stack and add security — the new instrument has better recovery prospects, so the discounted face is worth more economically.',
    lessonAddendum: 'Par-for-discount swaps work when the new instrument\'s expected recovery exceeds the old instrument\'s expected recovery — math the issuer\'s advisors and the bondholder advisors both run carefully.',
  },
  4410240: {
    newCorrect: 'Holdouts continue to hold the original instrument at original terms and may extract better treatment later, undermining the equity of the deal for participants.',
    lessonAddendum: 'Holdouts are the structural problem of any out-of-court exchange. Issuers use exit consents, security stripping, and other "coercive" features to push participation as high as possible.',
  },
  4410241: {
    newCorrect: 'Consensual preserves relationships and broad participation but may need to be more generous; coercive drives higher participation but creates litigation and reputational risk.',
    lessonAddendum: 'Coercive vs consensual is one of the live debates in modern LME practice. Issuers weigh participation, recovery economics, and the long-term cost of damaging the credit market relationships they will need at the next refi.',
  },

  // ---------- Chapter 4 ----------
  4410300: {
    newCorrect: 'Maintenance is tested at every measurement date regardless of borrower action; incurrence is tested only at the moment the borrower takes a specified action and never trips passively.',
    lessonAddendum: 'Maintenance runs on a clock; incurrence runs on an event. A passively deteriorating borrower under cov-lite never trips a covenant until they need to do something — by which point the lender has lost the early-warning trigger.',
  },
  4410301: {
    newCorrect: 'The term-loan tranche carries no financial maintenance covenant — only incurrence-based ratio tests. The revolver may still carry a springing covenant that does not flow through to the TLB.',
    lessonAddendum: 'Cov-lite is precisely defined: zero financial maintenance covenants on the TLB. The negative covenants (debt, liens, RPs, investments) are still extensively documented — often in 100+ pages.',
  },
  4410302: {
    newCorrect: 'Cov-loose: a maintenance covenant exists with a cushion so wide that operational deterioration would have to be severe before it trips — form of protection without much practical bite.',
    lessonAddendum: 'Three-way taxonomy: cov-lite (no TL maintenance), cov-loose (TL maintenance with wide cushion, often no step-down), traditional (tight cushion with step-downs and equity-cure caps).',
  },
  4410303: {
    newCorrect: 'The borrower is in breach of a financial covenant — typically an immediate EOD (sometimes with very short cure for delivery defects), entitling required lenders to accelerate.',
    lessonAddendum: 'Maintenance breaches do not auto-cure on the next test date. Outs are waiver/amendment, equity cure, or refinancing. This is also why sponsors hate maintenance covenants.',
  },
  4410304: {
    newCorrect: 'A maintenance covenant gives lenders an early lever to renegotiate at the moment of weakness — the 25-50 bps is cheap insurance against a costly amendment in a bad quarter.',
    lessonAddendum: 'The sponsor calculus on cov-lite is about avoiding amendment cycles in stressed quarters, not about base-rate savings. That renegotiation trigger is worth far more to lenders than 25-50 bps of running spread.',
  },
  4410305: {
    newCorrect: 'Depends entirely on the EBITDA definition in the credit agreement — modern docs typically permit run-rate savings add-backs subject to caps and time horizons. Read the definition.',
    lessonAddendum: 'Incurrence tests live and die by the EBITDA definition in Article I. The single biggest lender protection erosion of the past decade has been the expansion of permitted EBITDA add-backs.',
  },
  4410306: {
    newCorrect: 'When revolver utilization (drawn revolver plus undrawn LCs, often net of a small cash cushion) exceeds a threshold of total revolver commitments — typically 35-40%.',
    lessonAddendum: 'The springing covenant solves a specific problem: revolver lenders need maintenance protection because they have committed liquidity, but TL lenders waive that protection in exchange for pricing.',
  },
  4410307: {
    newCorrect: 'The test springs: utilization is $55M / $150M = 36.7%, exceeding the 35% threshold — the 7.0x first-lien net leverage test must be satisfied as of Q3.',
    lessonAddendum: 'Standard sponsor-backed docs include LCs in utilization because they consume the same commitment capacity as cash draws. The 35% trigger is one of the few hard numbers in modern documentation that has stayed durable across cycles.',
  },
  4410308: {
    newCorrect: 'No — the springing covenant typically benefits only the revolver lenders. A breach is an EOD only under the revolver; the TLB cannot accelerate on it.',
    lessonAddendum: 'Springing covenants are class-specific lender protection. This is also why distressed TLB holders in a stressed cov-lite credit have historically been so passive — they often have no contractual lever until the revolver lenders act or the borrower needs an amendment.',
  },
  4410309: {
    newCorrect: 'Anti-cash-hoarding provisions count revolver loans as outstanding for utilization if they were outstanding within a specified window before the test date, plus a no-manipulation certificate.',
    lessonAddendum: 'Period-end cleanup of the revolver to dodge springing triggers is a real and recurring borrower behavior. The lender protections that work are documentation-based — measure utilization across a window, require an officer certificate, close cash definitions.',
  },
  4410310: {
    newCorrect: 'It prevents the borrower group from pledging assets to a third-party lender as collateral, preserving existing lenders\' claim on the unencumbered pool — it does not stop asset sales.',
    lessonAddendum: 'The negative pledge is narrow and specific: no new third-party liens on the borrower-group\'s assets. Its strength depends on the breadth of "Restricted Subsidiary" and the permitted liens list, which usually contains dozens of carve-outs.',
  },
  4410311: {
    newCorrect: 'An Unrestricted Sub is outside the covenant perimeter — not bound by the negative pledge, debt incurrence, or RP covenants, with EBITDA and debt typically excluded from ratios.',
    lessonAddendum: 'The Restricted/Unrestricted toggle is the most powerful structural lever in modern leveraged credit documentation. The first question on a new doc is always: how broad is the investment basket that can fund an Unrestricted Sub designation?',
  },
  4410312: {
    newCorrect: 'The credit agreement permitted Investments in Unrestricted Subs via a basket large enough to capture the IP value, and the negative pledge bound only Restricted Subs — once outside, the IP could be pledged.',
    lessonAddendum: 'The maneuver was contractually permitted. After J.Crew, sponsor docs began including "J.Crew blockers" — explicit prohibitions on transferring material IP to Unrestricted Subs and on Unrestricted Subs pledging transferred assets.',
  },
  4410313: {
    newCorrect: 'The credit agreement permitted Unrestricted Sub designation subject to investment-basket capacity, and PetSmart used a combination of investment basket and asset-sale mechanics to move Chewy equity outside the lien perimeter.',
    lessonAddendum: 'PetSmart/Chewy is the second canonical case in the negative-pledge erosion story. Where J.Crew was about brand IP, PetSmart was about a high-growth subsidiary — the structural lesson is identical.',
  },
  4410314: {
    newCorrect: 'The unlimited basket subject to the 5.0x FLNL test — at 4.7x current leverage, the borrower has unlimited investment capacity right now, making the dollar basket irrelevant.',
    lessonAddendum: 'Unlimited ratio-based capacity at moderate current leverage is the open door to a J.Crew-style transfer. Reading these baskets line-by-line is the work — not summarizing the package as "tight" or "loose."',
  },
  4410315: {
    newCorrect: 'Dividends, repurchases or redemptions of equity, prepayments on subordinated debt, and excess management fees — outflows of value to equity holders or junior creditors.',
    lessonAddendum: 'The RP covenant is the lender\'s primary protection against value leakage to equity. The mechanics are baskets (general, builder, investment-related) plus ratio tests — the "available amount" is where most analytical work lives.',
  },
  4410316: {
    newCorrect: 'The general basket is a fixed cushion available immediately; the builder is performance-linked, growing with retained earnings — together they let the sponsor extract value day-one and over time.',
    lessonAddendum: 'The lender protection question for the general basket is its absolute size relative to equity. For the builder, it is which items count toward build-up — every additional component grows the dividend capacity over time.',
  },
  4410317: {
    newCorrect: 'Combined capacity is $100M (general) + $125M (50% × $250M builder) = $225M, which covers the $200M dividend; FLNL at 4.2x meets the 4.5x gate — permitted under the document.',
    lessonAddendum: 'The arithmetic shows how a sponsor can pull $200M out of a 4.2x-levered company two years after LBO without ever asking for lender consent. Stack baskets, check each gating condition, and verify EBITDA inputs.',
  },
  4410318: {
    newCorrect: 'Adding $25M to LTM EBITDA brings it to $125M; the leverage ratio becomes $575M / $125M = 4.60x, below 5.50x — covenant is cured for Q3.',
    lessonAddendum: 'Most equity cure provisions add the contribution to EBITDA rather than reducing debt — the more sponsor-favorable convention. Lender protections come from caps (per year and lifetime), timing windows, and the EBITDA-addition rules.',
  },
  4410319: {
    newCorrect: 'NOT permitted: with cures in Q1 and Q2, a Q3 cure would be the third inside the rolling four-quarter window — the rolling cap binds even though lifetime capacity remains.',
    lessonAddendum: 'The 2-of-4 rolling limit is the lender\'s structural answer to the "serial curer." Once the cap is hit, lenders get a real default trigger that cannot be papered over with another wire.',
  },
  4410320: {
    newCorrect: 'General is available regardless of leverage; ratio debt is uncapped in dollars but only available when the borrower meets a leverage test — together they enable opportunistic and ratio-based additions.',
    lessonAddendum: 'The lender protection question for the general basket is absolute size — too large and it becomes a back-door re-lever. For ratio debt, the question is the ratio level and whether the test is "no worse than at closing" or a fixed number.',
  },
  4410321: {
    newCorrect: 'Pro-forma debt = $1.0B + $200M = $1.2B; pro-forma EBITDA = $200M + $50M = $250M; pro-forma leverage = 4.80x, below 5.50x — incurrence is permitted.',
    lessonAddendum: 'Pro-forma testing means giving effect to the entire transaction, including target EBITDA. The trickiest piece in practice is the EBITDA definition: which add-backs are permitted, how synergies are calculated, what the transaction boundary is.',
  },
  4410322: {
    newCorrect: '$0 + (50% × $300M) + $50M = $200M, of which the borrower can use any portion for RPs, investments, or junior debt prepayments — subject to no-default and applicable ratio tests.',
    lessonAddendum: 'The Available Amount starts at zero and grows over the life of the loan. Five years in it can be hundreds of millions of "permitted" capacity. Lenders who do not stress-test its trajectory are systematically missing the leakage that compounds quietly.',
  },
  4410323: {
    newCorrect: 'The original TLB pricing automatically increases to SOFR + 525 bps (new pricing minus the 50 bps cushion) — but only if the new debt is issued within 12 months of closing.',
    lessonAddendum: 'MFN clauses live and die by the cushion (50 bps standard), the sunset (6/12/18 months — sometimes none), and the carve-outs. Sponsors have systematically eroded MFNs, and a 12-month sunset with multiple carve-outs is often weak protection in practice.',
  },
  4410324: {
    newCorrect: 'Free-and-clear gives $400M, ratio test at 5.0x on $400M EBITDA allows $200M more (above $1.8B existing) — total ~$600M of incremental capacity if baskets stack.',
    lessonAddendum: 'The "stacked basket" structure (free-and-clear + ratio) plus the order of operations is one of the most consequential drafting points in modern docs. Sponsors push for ratio capacity calculated after the free-and-clear draw — the dollar implications run into the hundreds of millions.',
  },
  4410325: {
    newCorrect: 'Borrower identifies an investment basket large enough → transfers assets to an Unrestricted Sub → Unrestricted Sub raises new debt secured by transferred assets → proceeds flow back as permitted investment or dividend.',
    lessonAddendum: 'After Cirque, lenders began demanding "Cirque blockers": explicit blocks on Material IP transfers, on transfers of subsidiaries above an EBITDA/asset threshold, and on Unrestricted Sub debt secured by transferred assets.',
  },
  4410326: {
    newCorrect: 'Required Lenders (>50%) used amendment authority to permit new super-priority debt that primed the non-participating first-liens — participating lenders exchanged at a discount.',
    lessonAddendum: 'Serta is the canonical non-pro-rata up-tier transaction. The case has driven a wave of "sacred rights" amendments — defining lien priority, pro-rata sharing, and payment priority changes as requiring affected-lender (not Required Lenders) consent.',
  },
  4410327: {
    newCorrect: 'The amendment mechanic permitted Required Lenders (50.1%) to amend broadly, and the sacred-rights provisions that would have prevented priming were either absent or narrowly drafted.',
    lessonAddendum: 'Boardriders, Serta, and TriMark together drove the most significant intercreditor rewrite in modern sponsor docs. The market shorthand is "Serta blockers" — their presence (or absence) is a top-tier diligence question on any new agreement.',
  },
  4410328: {
    newCorrect: 'A "sacred rights" provision requiring consent of each adversely-affected lender for any amendment that subordinates the lien or payment priority or permits senior-priority debt.',
    lessonAddendum: 'Sacred rights are the cleanest defense against up-tiers. The post-Serta market norm has shifted toward "each adversely affected lender" rather than Required Lenders for priming, payment priority, and pro-rata sharing changes.',
  },
  4410329: {
    newCorrect: 'R&W covers losses from breaches of seller representations and warranties (excluding known issues and fundamental reps) — buyer pays the premium and recovers from the insurer rather than the seller.',
    lessonAddendum: 'R&W insurance is the dominant indemnification structure in US mid-market sponsor deals. Seller takes proceeds without large escrow; buyer has insurer to recover from; both sides avoid post-close litigation.',
  },
  4410330: {
    newCorrect: '$10M − $5M (basket) = $5M, assuming each claim exceeds the $1M de minimis — the basket functions like a deductible, and recovery is capped at $50M.',
    lessonAddendum: 'Standard indemnification stack: de minimis (per-claim qualifier), basket (deductible), cap (ceiling). Fundamental reps typically have higher caps and may have lower or zero baskets.',
  },
  4410331: {
    newCorrect: 'Fundamental reps go to the heart of the deal\'s existence — they survive longer to match the lifetime risk of a fundamentally void deal. Environmental reps are typically a specially negotiated middle category.',
    lessonAddendum: 'Survival forms a tier: general reps (12-24 months), fundamental reps (5-6+ years), specific indemnities (negotiated). The R&W policy typically follows this tiering with longer periods and higher coverage for fundamental reps.',
  },
  4410332: {
    newCorrect: 'No — cross-acceleration only triggers when other debt has actually been accelerated. Cross-default would trigger on the underlying default itself, regardless of acceleration.',
    lessonAddendum: 'Most modern sponsor-backed agreements use cross-acceleration (often with cross-payment-default after grace) rather than cross-default — giving the borrower more room to work out covenant defaults without pulling the entire structure into default.',
  },
  4410333: {
    newCorrect: 'Friday of the following week (the close of the 5th business day) — during the grace period the missed payment is a default but not yet an EOD.',
    lessonAddendum: 'Standard credit agreements distinguish principal (no grace) and interest/fees (3-5 business days). The grace is administrative cure space for wire failures and holiday delays, not an open-ended option.',
  },
  4410334: {
    newCorrect: 'No — the equipment financing falls below the $75M materiality threshold. The threshold prevents small, ordinary-course defaults from triggering catastrophic cross-default.',
    lessonAddendum: 'Materiality thresholds typically scale with deal size ($25-100M+) and may be a fixed dollar amount or a percentage of consolidated debt. Identify the threshold and consider what classes of debt fall below it.',
  },
  4410335: {
    newCorrect: 'Credit-facility Required Lenders may accelerate at any time after EOD; the notes\' trustee is delayed 90 days by standstill, giving senior lenders first move on workout terms.',
    lessonAddendum: 'The choreography of acceleration in a multi-tranche structure is governed by intercreditor agreements and standstills. Senior lenders move first because they have the cleanest contractual path; subordinated lenders sit on the sidelines for the standstill window.',
  },
  4410336: {
    newCorrect: 'Proceeds apply first to repay first-lien obligations in full, and only after that do remaining proceeds flow to second-lien — this is lien subordination.',
    lessonAddendum: '1L/2L intercreditors are the standard structure for the modern leveraged stack. The first-lien gets seniority and strongest enforcement rights; the second-lien gets a higher coupon and is contractually and structurally subordinated.',
  },
  4410337: {
    newCorrect: 'Lien subordination orders the collateral waterfall — both tranches can be paid contractually until enforcement, when senior lien is paid first. Payment subordination orders ordinary debt service itself.',
    lessonAddendum: 'Lien subordination is the modern norm for 2L term loans/notes — both tranches get paid in the ordinary course but senior eats first on enforcement. Payment subordination is the older convention for unsecured subordinated debt.',
  },
  4410338: {
    newCorrect: 'ABL has first-priority on ABL Priority Collateral (receivables, inventory, cash) and second-priority on Term Loan Priority Collateral; the TL has the reverse priorities.',
    lessonAddendum: 'ABL/TL intercreditors split the collateral universe rationally: working-capital collateral goes to the ABL; long-lived assets go to the term loan. Each tranche is sized off its own pool.',
  },
  4410339: {
    newCorrect: 'The 2L Agent must wait until day 180 (or earlier if the 1L commences enforcement or bankruptcy is filed) — the 1L has priority over the enforcement decision during the standstill.',
    lessonAddendum: 'Standstills are the single most important enforcement protection in 1L/2L intercreditors. They give the senior lender complete control of the enforcement decision for a defined period (typically 90-180 days) — the junior accepted this by accepting the higher coupon for lien subordination.',
  },

  // ---------- Chapter 5 ----------
  4410400: {
    newCorrect: 'The secondary market is pricing in materially higher default probability — spread widening is often the first observable distress signal, ahead of downgrades or covenant breaches.',
    lessonAddendum: 'Secondary loan and bond prices are the earliest distress signal a credit analyst observes. A persistent gap between coupon and yield is the market pricing in default probability before downgrades catch up.',
  },
  4410401: {
    newCorrect: 'A missed scheduled payment, even with forbearance, is a hard distress signal — it says the company could not fund a relatively small obligation from operating cash or revolver.',
    lessonAddendum: 'A missed scheduled payment is one of the few binary distress signals in credit. Even a small miss usually precedes a restructuring conversation within weeks or months.',
  },
  4410402: {
    newCorrect: 'Refinancing risk is now the binding constraint — operating performance can be stable and the credit still defaults at maturity if access to new debt does not return.',
    lessonAddendum: 'A near-term maturity wall with shut primary markets is the cleanest example of refinancing risk dominating credit analysis — when an otherwise stable business defaults purely because it cannot access new debt.',
  },
  4410403: {
    newCorrect: 'A covenant cliff — lower EBITDA and higher debt move leverage from 6.4x toward 7.4x, which would breach the 7.0x test at the next measurement date.',
    lessonAddendum: 'Maintenance covenant cliffs combine two deteriorating inputs at once. Model the next two test dates explicitly, not the last print.',
  },
  4410404: {
    newCorrect: 'A near-fully drawn revolver outside the normal seasonal pattern is a late-stage distress signal — the company is converting committed capacity into cash because it expects access to falter.',
    lessonAddendum: 'Sudden near-full revolver draws show the treasury team has stopped trusting that the revolver will remain available. Compare current usage to a multi-year baseline rather than reading management framing.',
  },
  4410405: {
    newCorrect: 'Stretching payables by ~33 days is a liquidity-extension move — the company is financing off vendors because traditional liquidity sources are constrained.',
    lessonAddendum: 'Payables stretch is a quiet but powerful distress signal because it precedes the loud signals. Once vendors react, cash-on-delivery demands and supply disruption accelerate the slide.',
  },
  4410406: {
    newCorrect: 'Chapter 11 is reorganization under court supervision, restructuring debt and operations; Chapter 7 is liquidation under a trustee who sells assets and winds down.',
    lessonAddendum: 'The first reorganization vs liquidation question for any distressed credit is whether the going concern is worth more than the assets sold piecemeal.',
  },
  4410407: {
    newCorrect: 'Section 363 lets the debtor sell assets free and clear of liens with court approval, typically through a stalking-horse and auction — clean title for buyer, proceeds replace liens.',
    lessonAddendum: '363 sales are the workhorse of modern Chapter 11 — they move assets quickly with clean title, preserve going-concern value before erosion, and let the estate use proceeds to satisfy claims through the priority waterfall.',
  },
  4410408: {
    newCorrect: 'DIP provides post-petition liquidity with court-approved super-priority status, secured by the estate and ranking ahead of most pre-petition claims, in exchange for funding operations.',
    lessonAddendum: 'DIP is the fuel that lets a Chapter 11 proceed. Its super-priority is why new money is willing to fund a debtor that just defaulted — always know who the DIP lender is and what they require.',
  },
  4410409: {
    newCorrect: 'A class accepts when more than half by number and at least two-thirds in dollar amount vote to accept — "1/2 by number, 2/3 by amount."',
    lessonAddendum: 'Threshold prevents a single large holder from dominating an entire class and also prevents many small holders from overruling the economic majority. Defines negotiation leverage in restructuring.',
  },
  4410410: {
    newCorrect: 'The UCC is a fiduciary body representing unsecured creditors as a class — retained advisors paid by the estate, full information access, and standing to challenge debtor decisions and the plan.',
    lessonAddendum: 'The UCC is the structural counterweight to the debtor in Chapter 11. Its estate-funded advisors are what give unsecured creditors a real seat at the table during plan negotiations.',
  },
  4410411: {
    newCorrect: 'Exit financing replaces the DIP and funds working capital and growth after emergence, sitting on the reorganized capital structure alongside new equity and any reinstated debt.',
    lessonAddendum: 'Exit financing makes a reorganized company functional on day one. Analysts modeling recovery should look at the post-emergence cap stack, not just the pre-petition one.',
  },
  4410412: {
    newCorrect: 'The Chapter 7 trustee takes control, liquidates assets, investigates avoidable transfers, and distributes proceeds to creditors strictly in priority order.',
    lessonAddendum: 'A Chapter 7 trustee is the liquidator of the estate — distinct from a Chapter 11 debtor-in-possession that keeps operating. Knowing which procedure applies sets expectations for timing, recovery, and going-concern value.',
  },
  4410413: {
    newCorrect: 'Administrative and priority claims first, then secured claims to collateral value, then unsecured, then subordinated, then equity — each class fully paid before the next recovers.',
    lessonAddendum: 'APR is the spine of recovery analysis. Every credit decision in distress implicitly asks where in this stack the security sits and what is left for the next class down.',
  },
  4410414: {
    newCorrect: 'Senior lenders are voluntarily redirecting some of their own recovery to junior creditors to buy plan support — courts permit gifting because seniors give away their own value, not estate value out of order.',
    lessonAddendum: 'Gifting is the practical workaround that lets restructurings get done without years of litigation. Seniors give up a small slice of their own recovery to buy junior consent — APR is preserved because seniors are giving away what was already theirs.',
  },
  4410415: {
    newCorrect: 'Companies file Chapter 11 because debt exceeds enterprise value — by definition value runs out before reaching equity, and under APR equity is last in line.',
    lessonAddendum: 'Equity recovery in Chapter 11 is uncommon for a structural reason — companies file when insolvent, so enterprise value rarely covers the debt and never reaches equity unless something unusual happens.',
  },
  4410416: {
    newCorrect: 'The plan can be confirmed over the dissenting class only if it does not "discriminate unfairly" and is "fair and equitable" — for unsecureds, the APR must be satisfied.',
    lessonAddendum: 'Cram-down is the mechanism that prevents one class from holding the plan hostage. The "fair and equitable" test essentially codifies APR — dissenters cannot block confirmation, but the plan must respect priority.',
  },
  4410417: {
    newCorrect: 'May be allowed under the narrow "new value" exception only if the contribution is new, substantial, money or money\'s worth, necessary, and reasonably equivalent to the equity received.',
    lessonAddendum: 'The new-value exception is the only realistic path for pre-petition equity to retain ownership in cram-down — and it is hard to satisfy. Post-LaSalle, most plans wipe old equity rather than try this route.',
  },
  4410418: {
    newCorrect: 'Going-concern value compares PV of future cash flows under continued operation to liquidation value; the higher floor anchors recovery, and creditors generally receive the better outcome.',
    lessonAddendum: 'Going-concern vs liquidation is the first decision in recovery analysis. The numbers are usually quite different — a viable business is worth more operating than scrapped, and creditors negotiate over which scenario applies.',
  },
  4410419: {
    newCorrect: 'Exit EV estimates the value of the reorganized enterprise post-emergence — the pie distributed to creditors through the waterfall. Too-high EBITDA or multiple inflates recovery for every tranche.',
    lessonAddendum: 'Even small changes in EBITDA assumption or multiple flow directly into recovery percentages — which is why both the debtor and creditors fight hard over the inputs in plan negotiations.',
  },
  4410420: {
    newCorrect: 'Admin $50M paid in full; first-lien $400M paid in full; second-lien $300M paid in full ($650M residual after first-lien); unsecured + trade share $350M against $500M for ~70%; equity wiped.',
    lessonAddendum: 'Waterfall math is mechanical: subtract admin, then pay each class in priority order until EV runs out. The class where value breaks is the fulcrum and gets new equity instead of cash.',
  },
  4410421: {
    newCorrect: 'Value breaks inside the second-lien — first-lien fully covered ($500M of $850M), second-lien recovers $350M of $400M (~88%), unsecureds wiped. Second-lien is the fulcrum and gets new equity.',
    lessonAddendum: 'Finding the value-break point is the central analytical move in distressed credit. The class where value runs out is the fulcrum — gets the residual upside, classes below are wiped, classes above are made whole.',
  },
  4410422: {
    newCorrect: 'Apparel inventory in liquidation is sold through GOB sales at deep markdowns — 50-80% off retail, plus liquidator fees and shrinkage, gives realization in the 25-45% range against book.',
    lessonAddendum: 'Inventory liquidation rates depend on category, age, and seasonality. Apparel, electronics, and seasonal goods take big haircuts; commodity goods recover more. Anchor in comparable case data.',
  },
  4410423: {
    newCorrect: 'Goodwill is an accounting residual reflecting prior acquisition premiums — in liquidation the going-concern that goodwill represented evaporates, so it realizes nothing in an asset sale.',
    lessonAddendum: 'Goodwill is a great example of why liquidation analysis often produces values far below balance-sheet book — the intangibles that make a business worth more than its assets only have value as a going concern.',
  },
  4410424: {
    newCorrect: 'Out-of-court exchanges require very high participation (95%+ for bonds) and leave holdouts in place; a prepack uses court binding to capture holdouts but adds public process and fees.',
    lessonAddendum: 'The choice usually comes down to holdout risk. If the issuer can clear 95%+ participation, out-of-court preserves value and avoids court; if meaningful resistance exists, the prepack\'s cram-down power becomes the only way.',
  },
  4410425: {
    newCorrect: 'Loose covenant baskets and unrestricted-subsidiary language can let issuers move valuable collateral outside the credit group, priming existing lenders without their consent.',
    lessonAddendum: 'J.Crew is the foundational case for document risk. The transaction was technically permitted by the docs, which is precisely the point — credit work has to model covenant baskets, not assume good behavior.',
  },
  4410426: {
    newCorrect: 'Majority-lender voting and weak sacred-rights protections can let a coordinated lender group prime co-lenders into a junior position, fragmenting a pari-passu class into senior and subordinated buckets.',
    lessonAddendum: 'The uptier wave revealed that "pari passu" is a contract term, not an economic guarantee. Lenders who do not read amendment-vote mechanics and sacred-rights provisions can find themselves subordinated to former equals.',
  },
  4410427: {
    newCorrect: 'It restructured leverage and pushed out maturities while avoiding the cost, public scrutiny, and operational disruption of bankruptcy — feasible because participation was high enough for a consensual deal.',
    lessonAddendum: 'Carvana 2023 is a recent template for distressed issuers. When the company has time, operational stability, and bondholder cooperation, an out-of-court trade can fix the balance sheet without a filing.',
  },
  4410428: {
    newCorrect: 'The first move from par into the 80s usually reflects credit deterioration the market is pricing ahead of a formal trigger — covenant pressure, refi worry, earnings miss.',
    lessonAddendum: 'The par-to-80 zone is where credit funds running fundamental distressed strategies engage — far enough below par that the move is meaningful, early enough that the credit story is still forming.',
  },
  4410429: {
    newCorrect: 'The market is pricing in a near-certain restructuring and estimating where recovery will land — the bond moves from "distressed credit" to "restructuring play" trading on reorganization economics.',
    lessonAddendum: 'The 80-to-50 zone is the heart of restructuring trading. The market has accepted default likelihood; the question becomes recovery. Funds active here build detailed waterfall models and engage with the legal process.',
  },
  4410430: {
    newCorrect: 'Securities in this range are often near the value-break point — they may receive partial recovery or be the fulcrum that converts to new equity. The trade is on which class breaks and how much equity each gets.',
    lessonAddendum: 'The 50-to-30 zone is the fulcrum-security band where the most analytical alpha exists. The fund that correctly identifies which class breaks and at what EV captures the new-equity upside from a low cost basis.',
  },
  4410431: {
    newCorrect: 'At deeply distressed prices, the bond becomes a cheap option on upside — if EV expands during the case, the bond can recover much more than expected; downside is bounded by the current low price.',
    lessonAddendum: 'Sub-30 distressed positions function as low-cost options on upside scenarios — sector recovery, surprise asset sales, court rulings. The Hertz 2020 outcome (sub-30 bonds, par+ recovery) is the textbook example.',
  },
  4410432: {
    newCorrect: 'EV is not fixed at filing — sector dynamics and asset price moves can shift recovery materially during a case, which is why distressed funds engage on probability-weighted scenarios.',
    lessonAddendum: 'Hertz 2020 is the modern reminder that distressed analysis is a scenario discipline. The same capital structure can produce a wipe or a par recovery depending on what happens to EV during the case.',
  },
  4410433: {
    newCorrect: 'The second-lien is the fulcrum — it sits at the value-break point and converts its claim into residual equity, while the fully-covered first-lien is paid in cash from new exit financing.',
    lessonAddendum: 'The fulcrum class converts its claim into new equity by structural necessity — no cash to pay them in full, no junior class with higher claim. Identifying which class plays this role is the central question.',
  },
  4410434: {
    newCorrect: 'Value breaks inside the second-lien — first-lien fully covered ($600M of $850M); second-lien at 60 vs ~63 implied recovery is close to fair; unsecured at 15 is a cheap option, unlikely to recover much.',
    lessonAddendum: 'Value-break analysis is the core of distressed credit work. Compare estimated EV to cap structure, find where the pie runs out, and price that class against expected recovery. Both directions (over- or under-valued) generate trade ideas.',
  },
  4410435: {
    newCorrect: 'First-lien is well inside the EV ($300M of $1.2B), so it will be paid in cash or reinstated — the fulcrum sits structurally below it, in the second-lien or unsecureds.',
    lessonAddendum: 'Senior secured debt is rarely the fulcrum because companies do not file Chapter 11 when senior secured is impaired by a small margin. They file when value breaks well below the senior layer.',
  },
  4410436: {
    newCorrect: 'EV was just barely below the senior unsecured claim — value broke right at the subordinated notes, making them the fulcrum even though they sit below senior unsecureds.',
    lessonAddendum: 'Fulcrum identification works through the entire cap stack — even very junior classes can be the fulcrum if EV happens to break at their level. Map EV against face, find the inflection, price accordingly.',
  },
  4410437: {
    newCorrect: 'The DIP claim ranks ahead of pre-petition unsecured claims and most administrative claims for repayment from estate assets — the highest-priority class in the case.',
    lessonAddendum: 'Super-priority status is the structural reason DIP lenders are willing to fund a defaulted company — they get the highest claim, often with security, which makes the new money safe even when older money is impaired.',
  },
  4410438: {
    newCorrect: 'The roll-up upgrades $200M of pre-petition revolver exposure (general claim) into super-priority DIP claim status — materially improving the lenders\' position and reducing recovery risk on the old debt.',
    lessonAddendum: 'The roll-up is one of the most powerful tools DIP lenders use to improve their position. Always check whether (and how much) of pre-petition exposure has been rolled into the DIP — it changes the recovery math materially.',
  },
  4410439: {
    newCorrect: 'The DIP bridges operations from filing to closing of the 363 sale — funds payroll, vendors, and case professional fees during the sale, with repayment from proceeds at closing.',
    lessonAddendum: 'DIP sizing follows the case plan, not a one-size-fits-all. A 363 sale case has a short DIP; a long reorganization has a larger DIP. Sizing to the milestone calendar is the point.',
  },

  // ---------- Capstone (Apex Holdco) ----------
  4410500: {
    newCorrect: 'Sources total $670M ($420M debt + $250M equity) against $740M of uses ($720M price + $20M fees), leaving a ~$70M shortfall — the proposed stack does not balance.',
    lessonAddendum: 'Funded sources only count at close — an undrawn revolver is available capacity, not a source. Walking the arithmetic before debating structure catches the most common analyst error.',
  },
  4410501: {
    newCorrect: 'Apex sits below the sponsor-LBO median (5.5-6.5x) and well above public IG comps (2.5-3.5x), reflecting a conservative LBO posture given cyclical exposure and no operating debt history.',
    lessonAddendum: 'Leverage framing requires two reference points: where IG peers sit and where sponsor LBO peers sit. The memo should explain why Apex sits between them, not just where the ratio lands.',
  },
  4410502: {
    newCorrect: '$50M is roughly right — it covers the ~$25M seasonal swing with a buffer for capex timing and acquisitions, without overstating capacity or inviting chronic borrowing.',
    lessonAddendum: 'Revolver sizing starts with the underlying liquidity need: seasonal WC swing plus buffer for capex, M&A, and shocks. Conventions are sanity checks; the actual liquidity profile drives the sizing.',
  },
  4410503: {
    newCorrect: 'Notes have longer tenor (8y vs 7y), fixed coupon, no maintenance covenants, and no amortization — pushing toward notes gives breathing room on refi and FCF, at a higher all-in coupon and call inflexibility.',
    lessonAddendum: 'TLB-vs-notes is the central structural decision on a sponsor LBO. TLBs are cheaper, prepayable, floating with shorter tenor and faster amortization. Notes are pricier and fixed-rate with call protection and a longer runway.',
  },
  4410504: {
    newCorrect: 'TLAs are bank-held with full maintenance covenants, mandatory amortization, and shorter tenor — that profile is incompatible with sponsor hold period and the cov-lite flexibility the LBO needs.',
    lessonAddendum: 'TLA vs TLB is a structural choice driven by the holder. The sponsor LBO model relies on the TLB profile — the TLA would force quarterly covenant tests and faster amortization that distorts equity returns.',
  },
  4410505: {
    newCorrect: 'Putting notes outside the TLB maturity creates a clean refi runway — sponsor refis the TLB first (likely 18-36 months in), then addresses the notes separately, avoiding a wall of maturities.',
    lessonAddendum: 'Spacing maturities across tranches is one of the cleanest discipline moves in cap structure design. The cost is a slightly higher coupon — usually worth it for the optionality.',
  },
  4410506: {
    newCorrect: 'No — at 4.1x leverage with $120M of senior unsecured cushion behind the TLB, second-lien adds cost without materially improving protection; 2L earns its place at 5.5x+.',
    lessonAddendum: 'Subordinated/second-lien layers earn their place when the senior tranche needs structural cushion that equity and unsecured notes cannot provide. Knowing when not to add a tranche is part of underwriter discipline.',
  },
  4410507: {
    newCorrect: 'Low end and adequate but tight — Apex\'s lower leverage (4.1x) means equity bears less risk per dollar, but pushing below 30% would break the credit case.',
    lessonAddendum: 'Equity contribution sizing is the first line of recovery defense. The equity layer absorbs the first dollar of value loss, so its thickness matters as much as the leverage ratio.',
  },
  4410508: {
    newCorrect: 'B1/B+ is the realistic midpoint — scale, leverage, and FCF profile are within the B1 band, but cyclical exposure and no operating debt history pin the rating at single-B.',
    lessonAddendum: 'Rating outcomes track leverage AND business risk AND ownership structure. A sponsor-backed, single-product industrial distributor at 4.1x lands in B1/B+ — leverage is supportive but cyclicality keeps it from Ba/BB.',
  },
  4410509: {
    newCorrect: 'Underwriting commitments expose the bank to syndication risk between signing and close — flex lets the underwriter clear the deal at higher pricing in exchange for the sponsor taking some of the market risk.',
    lessonAddendum: 'Underwriting flex is the bank\'s insurance against the syndication window. Senior underwriters insist on flex on both tranches; the size and shape of flex is the negotiation that protects the bank\'s P&L on the deal.',
  },
  4410510: {
    newCorrect: 'The $4M sponsor synergies — Apex has not realized them, the sponsor has not yet owned the company, and there is no evidence of identified cost actions. Forward-looking optimism dressed as historical normalization.',
    lessonAddendum: 'EBITDA add-back scrutiny is the heart of credit committee discipline. Founder normalization and deal costs are routine; forward-looking synergies that have not been realized are the canonical red flag.',
  },
  4410511: {
    newCorrect: 'Roughly $57M of FCF ($115M EBITDA − $9M capex − $32M interest − $15M taxes − $2M WC) — ~50% EBITDA-to-FCF conversion, strong for a leveraged industrial.',
    lessonAddendum: 'FCF conversion is the most-watched metric in leveraged credit. ~50% conversion supports both the deleveraging path the committee wants and the sponsor\'s eventual recap option.',
  },
  4410512: {
    newCorrect: '~2.9x EBITDA-to-interest coverage — within the 2.5-3.5x range typical for B1/B+ sponsor LBOs, but on the lower end given floating-rate exposure on the TLB.',
    lessonAddendum: 'Interest coverage at close is a primary credit metric alongside leverage. Present the base case, the rate-sensitivity table (+100/+200bps), and the floor where coverage would breach concern thresholds.',
  },
  4410513: {
    newCorrect: 'Build a downside case with a 12% revenue decline in year 2 (mid-cycle recession), recovering 6% in year 3 — an underwriting with no recession in a 5-year hold is a sales pitch, not an underwriting.',
    lessonAddendum: 'For industrial distribution, a 10-15% peak-to-trough revenue decline is the right base downside, with a 1-year recovery. The credit metrics in that case — leverage spike, coverage compression, FCF collapse — are what the committee should evaluate.',
  },
  4410514: {
    newCorrect: 'EBITDA margin compresses to ~12% because the ~9% fixed costs do not scale — revenue falls 12% but EBITDA falls ~33% (from $115M to ~$77M).',
    lessonAddendum: 'Operating leverage cuts both ways. Apex\'s ~9% fixed cost base means EBITDA falls roughly 3x as fast as revenue. The honest math walks the variable/fixed split and shows the margin path explicitly.',
  },
  4410515: {
    newCorrect: 'The revolver carries the Q2 working-capital build, so peak revolver draw of $20-25M is normal mid-year — and annual FCF should be reported fiscal-year to avoid masking the intra-year liquidity need.',
    lessonAddendum: 'Seasonal businesses require looking beyond LTM metrics to peak-quarter leverage and peak revolver draw. The committee should see the intra-year picture explicitly, not just the year-end snapshot.',
  },
  4410516: {
    newCorrect: 'Acceptable concentration for a B-rated distributor — 9% top customer is below the typical concern threshold (~15%), and the top-10 spread across end-markets reduces idiosyncratic risk.',
    lessonAddendum: 'Customer concentration scrutiny is a portfolio question: top-customer, top-10, end-market spread, contractual structure. Apex\'s profile — 9% top, 35% top-10, diversified — is workable. The flag is "monitor," not "block."',
  },
  4410517: {
    newCorrect: 'Use $10-11M (slight uplift from trailing average), not the sponsor\'s declining number — distributors require ongoing investment in warehouses, fleet, and IT, and sponsor capex declines routinely do not materialize.',
    lessonAddendum: 'Capex is canonical sponsor-optimism territory. The underwriter\'s discipline is to anchor on historical actuals plus documented operational change, not on the sponsor\'s declining trajectory.',
  },
  4410518: {
    newCorrect: 'Use the sponsor\'s general shape — taxes low early when interest expense is high, rising as the company deleverages — but stress-test against slower deleveraging, since less deleveraging means more shield and lower taxes.',
    lessonAddendum: 'Cash taxes through the hold period interact with the interest shield and deleveraging path. The honest model walks the tax bridge year by year, reflecting how the shield shrinks as debt is paid down.',
  },
  4410519: {
    newCorrect: 'Items (1) and (2) reduce EBITDA — the churned customer\'s revenue should not be in LTM, and the inventory under-reserve overstates gross margin; these are real historical adjustments.',
    lessonAddendum: 'QofE findings vary in materiality. Churned revenue and under-reserved inventory directly understate cost of revenue or overstate revenue — these are real adjustments. Stock bonuses and rebate classifications need more analysis.',
  },
  4410520: {
    newCorrect: 'Cov-lite waives maintenance financial covenants on the TLB but retains incurrence-based covenants — Apex still cannot incur debt, make RPs, or sell assets without meeting incurrence tests, and the revolver retains a springing covenant.',
    lessonAddendum: 'Cov-lite is one of the most misunderstood pieces of LevFin terminology. It specifically removes quarterly maintenance tests while leaving the broader covenant architecture intact.',
  },
  4410521: {
    newCorrect: 'Push back on both — the springing covenant exists precisely so revolver lenders have a brake before the borrower over-draws; loosening trigger and test together waters down the protection.',
    lessonAddendum: 'Springing financial covenants on cov-lite revolvers are the structural protection that makes cov-lite TLB acceptable. Both the trigger and the test are negotiated together; loosening either weakens the package.',
  },
  4410522: {
    newCorrect: 'Cap synergies and cost-savings add-backs at 25% of unadjusted EBITDA and require 18-24 month realization — uncapped add-backs let the borrower manufacture covenant headroom and inflate baskets.',
    lessonAddendum: 'EBITDA definition and add-back caps are the load-bearing piece of the covenant package because every other test flows through the EBITDA number. Capping add-backs is the most important negotiation in the doc.',
  },
  4410523: {
    newCorrect: 'Reduce the starter basket to $25M and cap the builder at $100M (or impose a leverage-based incurrence test below 4.0x) — the structure as proposed lets the sponsor dividend-recap aggressively before deleveraging.',
    lessonAddendum: 'RP capacity is where the sponsor extracts equity returns through dividend recaps. The right protection is a leverage-based incurrence test plus capped starter and builder baskets — aligns sponsor distributions with the credit story.',
  },
  4410524: {
    newCorrect: 'The "unlimited below 4.0x" basket — on $115M EBITDA that means $460M+ of new first-lien debt the original TLB lenders did not consent to. Cap the unlimited basket or require a leverage ratio at close.',
    lessonAddendum: '"Unlimited if leverage below X" baskets are the canonical aggressive sponsor move. They need explicit caps or the original lenders\' protection erodes the moment leverage trends down.',
  },
  4410525: {
    newCorrect: '50% with step-downs is appropriate because Apex closes at 4.1x — the sweep is the lender\'s mechanism to force deleveraging in the first 12-18 months when the credit is most exposed.',
    lessonAddendum: 'ECF sweeps are the formal mechanism that turns a "credit case will deleverage" expectation into a contractual reality. The standard structure (50% sweep with step-downs at leverage thresholds) is the market answer at this leverage.',
  },
  4410526: {
    newCorrect: 'Keep the 100% sweep and 12-month reinvestment window — at 4.1x close leverage, the borrower should be returning asset-sale proceeds to lenders, not extending the window to redeploy them.',
    lessonAddendum: 'Asset-sale sweep mechanics are about who gets the proceeds of monetizing the balance sheet. The discipline that turns the deleveraging case from aspiration into mechanical reality.',
  },
  4410527: {
    newCorrect: 'The aggregate is $145M+ of permitted incremental debt on top of $420M of funded debt — meaningful additional capacity (~1.25x EBITDA). Ensure the aggregate sits within a leverage ceiling, not just individual baskets.',
    lessonAddendum: 'Permitted indebtedness analysis is the discipline of looking at the aggregate, not the individual baskets. The right framing is a portfolio view with an aggregate leverage ceiling, not a basket-by-basket review.',
  },
  4410528: {
    newCorrect: 'Require explicit blockers: a cap on IP and material assets that can be transferred to Unrestricted Subs, an explicit prohibition on transferring material IP outside the credit group, and a leverage test on designation.',
    lessonAddendum: 'J.Crew/Chewy/Serta-style maneuvers are the central focus of leveraged loan documentation work. The protections must be specific in the docs because courts have been unwilling to read protections into agreements that did not have them.',
  },
  4410529: {
    newCorrect: 'Hold MFN tight: 50bps cushion (not 75bps) and no sunset — MFN prevents the borrower from issuing priming debt that prices above the existing TLB and effectively subordinates it.',
    lessonAddendum: 'MFN provisions and their cushions/sunsets are where the most aggressive sponsor drift has happened in recent cycles. Sunsets are particularly damaging because they remove protection at exactly the moment the sponsor most wants to issue priming debt.',
  },
  4410530: {
    newCorrect: 'A 15% revenue decline drops Apex from $580M to $493M; EBITDA falls disproportionately (operating leverage) from $115M to ~$60M; capex stays flat; working capital releases ~$15M — net FCF turns to roughly breakeven.',
    lessonAddendum: 'Downside case construction walks through operating leverage explicitly: revenue falls X%, EBITDA falls more, capex stays sticky, WC releases cash on the way down. The headline revenue decline is just the input.',
  },
  4410531: {
    newCorrect: '$60M is the honest math — revenue falls $87M, variable costs fall $65M, leaving a $22M gross profit shortfall mostly through EBITDA. The sponsor\'s $80M implies variable cost flex the cost structure does not support.',
    lessonAddendum: 'EBITDA in a downside is determined by the variable/fixed cost split, not by negotiation. Walk the math; defend the resulting number from the cost structure rather than anchoring on a midpoint compromise.',
  },
  4410532: {
    newCorrect: 'Workable but tight — Apex has ~$60M of immediate sources (revolver + cash) plus $25M one-time WC release against ~$39M annual interest. The company survives 18-24 months of stress, assuming revolver access holds.',
    lessonAddendum: 'Liquidity runway in stress is the question of whether the borrower can survive to recovery. Contingent on the revolver remaining accessible (which depends on the springing covenant not tripping).',
  },
  4410533: {
    newCorrect: 'The covenant trips if revolver is drawn above 35% — the borrower must choose between keeping utilization below the trigger or seeking a waiver/amendment; this is the design intent of the springing covenant.',
    lessonAddendum: 'Apex\'s springing 7.0x revolver covenant tripping in the trough means the lenders are invited into a conversation about waivers at exactly the right moment — before the company runs out of options.',
  },
  4410534: {
    newCorrect: 'TLB recovers ~$300M of $300M face (100% recovery, rating "1") because first-lien sits ahead of $120M of notes and the $330M EV covers the secured claim in full.',
    lessonAddendum: 'TLB recovery walks a clean priority order: estimate trough EBITDA, apply EV multiple, deduct admin claims, satisfy by priority. At Apex, the trough EV covers the first-lien TLB in full — recovery rating "1+/1."',
  },
  4410535: {
    newCorrect: '~$30M of $120M face (25% recovery, rating "4") — first-lien takes the first $300M of EV, leaving $30M for the unsecured notes; this is the structural subordination cushion of the TLB.',
    lessonAddendum: 'Unsecured note recovery is the inverse of TLB — it captures only what is left after secureds are satisfied. This is why the notes price ~400bps wide of the TLB: lower recovery in default.',
  },
  4410536: {
    newCorrect: '5.5x is the appropriate distressed-sale multiple — a 1.0x discount to going-concern reflects time-pressure, advisor fees, and sale under duress. Going-concern multiple in recovery analysis ignores distress context.',
    lessonAddendum: 'EV haircuts in recovery analysis reflect the distress context — typically a 0.5-1.0 turn discount. The sponsor\'s 6.5x is the going-concern view; recovery analysis uses the distressed view.',
  },
  4410537: {
    newCorrect: 'Revolver and TLB share first-lien collateral pari passu and recover pro rata — they are not in senior/junior to each other, which is why the springing covenant is the only distinguishing protection.',
    lessonAddendum: 'Priority of claims requires reading the credit agreement, not applying generic rules. The springing covenant gives revolver lenders an earlier seat at workouts but does not change priority at distribution.',
  },
  4410538: {
    newCorrect: 'Year-7 refi risk is real but mitigated by maturity laddering with the 8-year notes — if LL market is closed in year 7, Apex still has the notes for one more year and can pursue unsecured refi or sponsor injection.',
    lessonAddendum: 'Refi risk at maturity is the long-tail risk on any leveraged loan. Mitigation comes from maturity laddering, the sponsor\'s capital base, and deleveraging through the hold — all three belong in the memo.',
  },
  4410539: {
    newCorrect: 'TLB: Recovery Rating "1+" → notch issue rating one above issuer rating. Notes: Recovery Rating "4" → issue rating matches issuer rating. The difference drives ~400bps coupon differential between tranches.',
    lessonAddendum: 'Recovery ratings directly affect issue ratings and therefore the pricing the deal can clear. The TLB\'s "1+" notching is what justifies the ~400bps differential vs the notes in syndication.',
  },
  4410540: {
    newCorrect: 'Launch at SOFR+400-425 with 99 OID — middle of the comp range with OID room to tighten on strong demand. Opening tight at +375 par leaves no room to flex up if the book is soft.',
    lessonAddendum: 'TLB price talk is set against the comp range, not the underwritten price. The right launch is the middle of recent comps with OID room — flexibility to tighten or flex modestly without breaching the underwritten level.',
  },
  4410541: {
    newCorrect: 'YT3 ≈ SOFR + 400 + (100 OID points / 3 years) ≈ SOFR + 433 — OID amortizes over the three-year assumed life. Quote both headline ("SOFR+400, OID 99") and derived YT3 (~SOFR+433).',
    lessonAddendum: 'Yield-to-three-year is the standard TLB comparison metric because most TLBs get repriced or refinanced within 2-3 years. Quoting in YT3 lets investors compare across deals on a like-for-like basis.',
  },
  4410542: {
    newCorrect: 'Reasonable — three-day roadshow gives the buy side time for diligence on a first-time issuer, and the talk range covers the underwritten level on both sides. For a first-time issuer, more diligence time is better than less.',
    lessonAddendum: 'Roadshow strategy and price talk are coordinated decisions. For first-time issuers, the right move is to give investors the time they need and launch with talk that brackets the underwritten level.',
  },
  4410543: {
    newCorrect: '(1) Cyclicality — industrial distribution downturns and Apex history; (2) Customer concentration — 9%/35% profile and end-market spread; (3) No debt history — sponsor pedigree and management capability under covenants.',
    lessonAddendum: 'Pre-empting investor concerns is the job of the lender presentation. The right concerns are the ones that actually drive pricing for a B1/B+ industrial: cycle, customers, debt history. Second-order topics matter less.',
  },
  4410544: {
    newCorrect: 'Run the broad book at SOFR+425 — anchor orders at tight pricing create dependency on three accounts and risk "everyone else passed at +400"; a deeper book gives price stability in secondary and a healthier syndication record.',
    lessonAddendum: 'Anchor order vs broad book is a key syndicate strategy question. Tight pricing with anchor concentration produces a fragile book that trades poorly in secondary; broader book at marginally wider price produces secondary stability.',
  },
  4410545: {
    newCorrect: 'Prioritize core CLO managers and credit funds with consistent participation, scale down hedge funds and flippers, and cap any single account at 7-8% — the goal is a stable book that holds the paper in secondary.',
    lessonAddendum: 'Allocation strategy is where the desk shapes who actually holds the deal in secondary. The desk\'s reputation for fair, considered allocation is one of the most durable bank assets.',
  },
  4410546: {
    newCorrect: 'Flex pricing first — within the agreed 50bps the desk can move to SOFR+425 OID 98 (~+450 YT3); structural flex is more damaging to the LBO model and harder to reverse, while price flex is recoverable on next refi.',
    lessonAddendum: 'Pricing flex is the first lever because it is recoverable (next refi can tighten back) and the sponsor has already agreed to a range. Structural flex (amort, tenor) damages the LBO economics and is harder to undo.',
  },
  4410547: {
    newCorrect: 'Hold NC3 and explain it as standard sponsor LBO protection — investors get full call protection (no risk of being called) for 3 years, which is what the coupon premium pays for; offer make-whole call to address concerns.',
    lessonAddendum: 'Bond call structure is a negotiation between sponsor refi flexibility and investor call protection. NC3 is standard for sponsor LBOs at this credit level. Make-whole calls during the non-call period are the standard fairness mechanism.',
  },
  4410548: {
    newCorrect: 'Historical financials in detail, base case clearly labeled as management projections (not bank views), explicit risk factors and sensitivities — and avoid quantitative bank-prepared downside scenarios in the public deck.',
    lessonAddendum: 'Lender presentation discipline: the deck is management\'s story with bank-supplied historical color and risk factors — not the bank\'s downside case. The bank\'s downside lives in the underwriting memo.',
  },
  4410549: {
    newCorrect: 'A successful outcome — the bank cleared the deal, protected execution, and used flex as designed. Secondary above issue on the TLB validates allocation work; flat trading on first-time notes is normal.',
    lessonAddendum: 'Flat bank P&L plus stable secondary trading is the design. Underwriting fee covers syndication risk; flex absorbs market moves; secondary should trade healthy but not too tight.',
  },
}
