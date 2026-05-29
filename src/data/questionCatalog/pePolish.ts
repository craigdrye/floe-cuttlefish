// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Private Equity roadmap (~300 questions across 6 chapters).
//
// PE_SUB_TOPICS groups each chapter's questions into 3-8 lesson-shaped clusters
// (cap 8 per chapter, since the lesson grouping caps at 8 lessons per chapter).
//
// PE_MENTOR_HINTS overrides the generic PE scaffold hint with a one-line
// second-person nudge that names the reasoning move without giving the answer
// — voice: senior partner mentoring a first-year associate.
//
// PE_CORRECT_SHORTENED trims `correct` strings flagged by the length-heuristic
// audit (correct ≥1.8x longer than longest wrong AND ≥20 chars longer). Trimmed
// explanatory clauses are reattached via `lessonAddendum` so no information is
// lost — the lesson body picks up the displaced context.

export const PE_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Chapter 1: PE Model and Investment Criteria --------------------
  'Fund Mechanics (2-and-20)': [
    4390000, 4390001, 4390002, 4390003, 4390004, 4390005, 4390006, 4390007,
  ],
  'Fund Lifecycle (J-curve)': [
    4390008, 4390009, 4390010, 4390011, 4390012,
  ],
  'Fund Metrics (MOIC/DPI/TVPI/IRR)': [
    4390013, 4390014, 4390015, 4390016, 4390017, 4390018, 4390019,
  ],
  'Return Drivers': [
    4390020, 4390021, 4390022, 4390023, 4390044,
  ],
  'Financial Criteria': [
    4390024, 4390025, 4390026, 4390027, 4390028, 4200042,
  ],
  'Strategic Criteria': [
    4390029, 4390030, 4390031, 4390032, 4200040, 4200041,
  ],
  'Deal Types & Sourcing': [
    4390033, 4390034, 4390035, 4390036, 4390037, 4390038, 4390039, 4390040,
    4390041, 4390042, 4390043, 4390045, 4390046,
  ],

  // -------------------- Chapter 2: LBO Mechanics and Debt Capacity --------------------
  'Model Construction': [
    4390100, 4390101, 4390102, 4390103, 4390104, 4390105, 4390106,
    4103035, 4105098, 4107366, 4107373,
  ],
  'Sources & Capital Structure': [
    4390107, 4390108, 4390109, 4390110, 4390111, 4105099,
  ],
  'Senior vs Mezz vs HY': [
    4390112, 4390113, 4390114, 4390115,
  ],
  'Covenants & OID': [
    4390116, 4390117, 4390118, 4390119, 4390125, 4390126, 4390127, 4390128,
    4107377,
  ],
  'Debt Capacity Sizing': [
    4390120, 4390121, 4390122, 4390123, 4390124,
  ],
  'Distress & Restructuring': [
    4390129, 4390130, 4390131,
  ],
  'Returns Math & IRR Drivers': [
    4390132, 4390133, 4390134, 4390135, 4390136, 4390137, 4103034, 4105105,
  ],
  'Dividend Recaps & Add-ons': [
    4390138, 4390139, 4390140, 4390141,
  ],

  // -------------------- Chapter 3: Business Diligence --------------------
  'Diligence Workstreams': [
    4390200, 4390201, 4390202, 4390203, 4390204, 4390238, 4390239, 4390240,
  ],
  'Quality of Earnings (QoE)': [
    4390205, 4390206, 4390207, 4390208, 4390209, 4390210, 4390211,
    4103032, 4107835, 4107842,
  ],
  'Customer Concentration & Cohorts': [
    4390212, 4390213, 4390214, 4390215, 4390216, 4390217, 4390218, 4390219,
    4103033, 4105097,
  ],
  'Operational Diligence': [
    4390220, 4390221, 4390222, 4390223, 4390224, 4390225, 4107365, 4107364,
    4107834, 4107846,
  ],
  'IT & ESG Diligence': [
    4390228, 4390229, 4390230, 4390231, 4390232,
  ],
  'Legal, HR & Insurance': [
    4390226, 4390227, 4390233, 4390234, 4390235, 4390236, 4390237,
  ],

  // -------------------- Chapter 4: Value Creation and Operating Plan --------------------
  'Value Creation Bridge': [
    4390300, 4390301, 4390302, 4390303, 4390304,
  ],
  '100-Day Plan': [
    4390305, 4390306, 4390307, 4390336, 4103036,
  ],
  'Operating Partner Model': [
    4390308, 4390309, 4390310, 4390311, 4390312, 4390313, 4390314,
  ],
  'EBITDA Levers & Pricing': [
    4390315, 4390316, 4390317, 4390318, 4105100, 4107838,
  ],
  'Procurement & SG&A': [
    4390319, 4390320, 4390321, 4390322, 4390323, 4105101,
  ],
  'Talent Overhaul': [
    4390324, 4390325,
  ],
  'Add-on M&A & Tech Transformation': [
    4390326, 4390327, 4390328, 4390329, 4390330, 4390339, 4103037,
  ],
  'KPI Discipline & EBITDA Quality': [
    4390331, 4390332, 4390333, 4390334, 4390335, 4390337, 4390338, 4390340,
    4390341, 4107368, 4107374, 4107378,
  ],

  // -------------------- Chapter 5: IC Memo, Deal Process, and Exit --------------------
  'IC Memo Structure': [
    4390400, 4390401, 4390402, 4390403, 4390404, 4390405, 4390406, 4390407,
    4107370,
  ],
  'IC Dynamics & Red Flags': [
    4390408, 4390409, 4390410, 4390411, 4390412, 4390413, 4103038, 4103039,
    4107840, 4107849,
  ],
  'Deal Sequencing & Auction': [
    4390414, 4390415, 4390416, 4390417, 4390418, 4390419, 4390420,
  ],
  'LOI/Exclusivity/SPA': [
    4390421, 4390422, 4390423, 4390424, 4390425, 4390426, 4390427, 4390428,
  ],
  'Indemnity, R&W & Closing': [
    4390429, 4390430, 4390431, 4390432, 4390436, 4390437,
  ],
  'Rollover & MIP': [
    4390433, 4390434, 4390435,
  ],
  'Exit Strategies': [
    4390438, 4390439, 4390440, 4107371, 4107845,
  ],
  'Continuation Funds & DPI': [
    4390441, 4390442,
  ],

  // -------------------- Capstone: BrightSpark Industries LBO --------------------
  'BrightSpark: Initial Screen & IOI': [
    4390500, 4390501, 4390502, 4390503, 4390504, 4390505, 4390506, 4390507,
    4390508, 4390509,
  ],
  'BrightSpark: Diligence Findings': [
    4390510, 4390511, 4390512, 4390513, 4390514, 4390515, 4390516, 4390517,
    4390518, 4390519,
  ],
  'BrightSpark: LBO Model': [
    4390520, 4390521, 4390522, 4390523, 4390524, 4390525, 4390526, 4390527,
    4390528, 4390529,
  ],
  'BrightSpark: IC Memo & Bid': [
    4390530, 4390531, 4390532, 4390533, 4390534, 4390535, 4390536, 4390537,
    4390538, 4390539,
  ],
  'BrightSpark: Operating Plan & Exit': [
    4390540, 4390541, 4390542, 4390543, 4390544, 4390545, 4390546, 4390547,
    4390548, 4390549,
  ],
}

export const PE_MENTOR_HINTS: Record<number, string> = {
  // ---------- Chapter 1: PE Model and Investment Criteria ----------
  4390000: 'During the investment period the fee base is committed capital, not NAV or invested. Anchor the budget there before any nuance.',
  4390001: 'Hurdle is a priority, not a guarantee. If the fund underperforms, the 8% does not show up — LPs receive only what the fund earned.',
  4390002: 'European waits for the whole fund; American pays deal-by-deal with a clawback. The split decides when the GP touches profit.',
  4390003: 'A 100% catch-up restores 80/20 economics as if the hurdle were never there. Without it, the hurdle silently shrinks GP carry.',
  4390004: 'GP commit at 1–5% is the credible band. Treat 2% as normal alignment, not a red flag or a marketing throwaway.',
  4390005: 'Modern LPAs offset transaction and monitoring fees at 100% against management fees. Treat anything less as a relic.',
  4390006: 'Carry is concentrated by design — senior partners take most of it, junior staff usually take none until promoted.',
  4390007: 'Run the dollars: 20% of $3.75B of profit dwarfs cumulative fees, and the carry gets long-term capital gains treatment on top.',
  4390008: 'Negative early IRR is the J-curve — fees go out before exits come back. LPs expect it; misreading it as failure is the gap.',
  4390009: 'Investment period gates new platforms, not capital calls. Follow-ons and fees keep drawing after the window closes.',
  4390010: 'Harvest = post-investment exits. Fee step-down happens here too — the GP is no longer underwriting new platforms.',
  4390011: 'Fund-term is a target, not a deadline. LPAC extensions are routine; clean 10-year wind-downs are the exception.',
  4390012: 'Recycling boosts deployment, not LP funding. 100–125% caps are standard; aggressive recycling is an LP red flag.',
  4390013: 'MOIC = total value (realized + unrealized) / invested. Always specify gross or net, realized or total — never let it stay ambiguous.',
  4390014: 'DPI is cash you can see; RVPI is the mark you have to trust. Same TVPI tells different stories depending on the split.',
  4390015: 'TVPI = DPI + RVPI. The identity forces you to look at realized vs unrealized, which is where LP skepticism lives.',
  4390016: 'The gross-to-net spread is fees, carry, and fund expenses — not taxes, not FX. LPs underwrite the net number.',
  4390017: 'IRR rewards earlier exits; MOIC rewards larger multiples. Where the fund sits in its lifecycle decides which one matters.',
  4390018: 'PME compares the fund\'s cash flows to a public-index investment with the same timing. It separates PE returns from market beta.',
  4390019: 'Top-quartile buyout sits in the high teens to low 20s net; median is 10–12. The dispersion is wide and that is the manager-selection case.',
  4390020: 'Three independent buckets: debt paydown, multiple expansion, EBITDA growth. Each can move without the others.',
  4390021: 'Modern attribution lands roughly 30/30/40. Deals leaning hardest on multiple expansion are the fragile ones across cycles.',
  4390022: 'Multiple expansion has to be earned by something specific about the business. "Market multiples keep going up" gets sent back at IC.',
  4390023: 'Run the math: EBITDA growth at entry multiple, then multiple expansion on the new EBITDA, then debt paydown to equity.',
  4390024: 'Size bands map to check size, ownership, and post-close support. A $4B fund cannot do an $18M EBITDA platform.',
  4390025: 'Recurring revenue is not a yes/no screen — it changes leverage, sensitivity, and exit multiple. Project-based businesses are still buyable.',
  4390026: 'Screens are sector-conditional. 24% GM in industrial services may be top-quartile; flag with benchmark, don\'t auto-reject.',
  4390027: 'Below-screen FCF is a signal to dig, not to walk. Distinguish growth-driven drag from structurally cash-poor businesses.',
  4390028: 'CapEx is the silent killer of LBO returns. EBITDA is pre-capex — re-scale the leverage assumption to the FCF that actually exists.',
  4390029: 'Niche leadership is attractive because the niche is too small to attract diversified incumbents. The size is the moat.',
  4390030: 'The empirical test is historical: did price go up 3–5% with no measurable attrition? Anything else is management self-report.',
  4390031: 'Mid-market moats look different — switching costs, distribution control, regulatory. Network effects and brand are rare here.',
  4390032: 'Financial screens describe the past; strategic position decides whether the past repeats. Weak moat plus clean financials is the canonical miss.',
  4390033: 'Sourcing channel is one of the most consistent levers on entry multiple. Proprietary trades information work for price.',
  4390034: 'LPs scrutinize club deals because they dilute control, correlate exposure across the LP\'s roster, and dilute the carry-driving wins.',
  4390035: 'Take-privates need a specific mispricing claim plus operational thesis. Without both, the proxy/Go-Shop complexity does not pay for itself.',
  4390036: 'Control is governance certainty, not bare majority. 80%+ is the convention because that is what supports the value-creation plan against leverage.',
  4390037: 'Continuation vehicles solve fund-life expiry but introduce a structural conflict — the GP prices both sides. LPAC consent is the mitigant.',
  4390038: 'Secondary buyers pay below NAV because they take residual portfolio risk and the GP\'s mark uncertainty. Pricing the discount is the secondary skill.',
  4390039: 'Strategics layer synergies on standalone; sponsors layer leverage and operating improvement. When synergies are real, strategics win.',
  4390040: 'Vintage captures the entry-multiple environment, which dominates outcomes more than GP skill across vintages.',
  4390041: 'Smaller funds compete in less efficient deal markets and can move EBITDA on smaller targets. The size-return inverse is empirical and persistent.',
  4390042: 'Zero-fee deal selection at scale is the highest-return-per-dollar product in PE. Large LPs out-earn small LPs partly because of this.',
  4390043: 'Fund V pitches lead with consistent net IRR and defensible attribution. Strategy and team are reinforcing; track record is the lead.',
  4390044: 'Leverage amplifies; it does not source returns. Modern buyouts make money on EBITDA growth and disciplined leverage, not maximization.',
  4390045: 'ILPA quarterly reporting template, annual audited financials, capital account format. The institutional baseline is now standardized.',
  4390046: 'Pass-through tax, Delaware case law, commercial flexibility, limited liability. No other US form combines all four cleanly.',
  4200040: 'The larger established business is the platform — it carries the systems and management add-ons plug into. Platforms also pay higher multiples.',
  4200041: 'PE underwrites cash flow that services debt; growth equity underwrites unlevered revenue growth. The asset\'s profile picks the strategy.',
  4200042: 'Same MOIC over shorter hold = higher IRR. Hold-period choice is the trade between annualized return and absolute multiple.',

  // ---------- Chapter 2: LBO Mechanics and Debt Capacity ----------
  4390100: 'Equity purchase = EV − net debt. Net debt is debt minus cash, with the signs working as you would expect.',
  4390101: 'Sources must equal uses to the dollar. Equity is the plug — but only after every other source is identified and committed.',
  4390102: 'Mandatory amort is fixed; the cash sweep is mechanical but partial and applies above a cash floor. Both run each period.',
  4390103: 'Year-over-year improvement with no driver story is the canonical model red flag. Every uptick needs an initiative and a cost.',
  4390104: 'Balanced LBO debt has modest mandatory amort, partial sweep with a cash floor, and leverage-based step-downs.',
  4390105: 'Management strip plus sweet-equity options dilutes the sponsor share above strike. Net out both before the carry calc.',
  4390106: 'Iterative calc or prior-period interest. Hard-coding cash interest defeats the schedule and hides the error for the next associate.',
  4390107: 'Equity check is the residual of sources and uses. Fees are real cash and have to be funded — they are not a memo item.',
  4390108: 'Mezz exists to expand leverage beyond senior appetite. You are paying for capacity, not for a lower coupon.',
  4390109: 'Seller note bridges valuation, reduces equity check, signals seller belief — but the seller still has real subordinated credit exposure.',
  4390110: 'Rollover at the same security and price is pari passu with the sponsor. It reduces the equity check; it is not preferential treatment.',
  4390111: 'A representative quality LBO is 30–40% equity, 60–70% debt at 5–6x leverage. Sector quality and rates move the band.',
  4390112: 'Take 5.5x: full first-lien plus one turn of mezz. Discipline is leaving cushion against committed capacity, not maxing every turn.',
  4390113: 'TLA = bank-held, amortizing, tighter covenants. TLB = institutional, bullet, wider, looser. Different products for different lenders.',
  4390114: 'Mezz all-in = cash coupon + PIK accretion + warrant value. The 13–17% landing point reflects all three, not just the cash piece.',
  4390115: 'HY brings fixed-rate, longer tenor, no maintenance covenants. The tradeoffs are spread, call protection, and incurrence covenants.',
  4390116: 'OID accretes back to par over the loan\'s life. Yield ≈ coupon + (OID points / tenor). Ignore it and you misprice the all-in.',
  4390117: 'OID is the issue-price discount to par — a one-time pricing adjustment at funding, not a periodic flow and not a prepayment penalty.',
  4390118: 'Floating TLB is cheaper at spot but carries rate risk; most sponsors run TLB with a SOFR cap rather than choosing fixed outright.',
  4390119: 'All-PIK preserves cash when liquidity is tight. The cost is compounding principal at a premium coupon — paid larger at maturity.',
  4390120: '4–5x for cyclical industrials, 5–6x for stable services, 6–7x for software/healthcare with recurring revenue. Sector sets the band.',
  4390121: 'EBITDA is the starting point; FCF after capex and taxes is the binding constraint. Lenders look through to cash conversion.',
  4390122: 'Cushion = (actual − required) / required, expressed against the ratio. Don\'t confuse it with the raw coverage number.',
  4390123: 'Revenue quality, capex, cyclicality, asset coverage. Those four drive the leverage band, not the sector label by itself.',
  4390124: 'Borrowing base ≈ 85% A/R + 50–60% inventory after ineligibles. PP&E is term loan collateral, not ABL revolver collateral.',
  4390125: 'Maintenance covenants test every quarter; incurrence covenants test when the borrower acts. Cov-lite removes the former, keeps the latter.',
  4390126: 'Springing covenants trigger on revolver utilization — they kick in exactly when distress is most likely, which is what protects bank lenders.',
  4390127: 'Add-back caps (20–30% of unadjusted) and synergy realization windows are the contractual mechanism. Cushion is what survives the caps.',
  4390128: 'Read the leverage band from the schedule. At 4.0x the company is in the 3.5–4.5x band, so the sweep is 50% — not 75% or 0%.',
  4390129: '"Free and clear" of liens, claims, and successor liability is the buyer\'s reason. Out-of-court purchases cannot match that title.',
  4390130: 'Prepacks compress timing by gathering votes pre-petition. They do not skip voting or absolute priority — they just shorten the calendar.',
  4390131: 'DIP super-priority is granted by the court, often with pre-petition lender consent or adequate-protection findings. It is not automatic.',
  4390132: 'At constant exit multiple, EBITDA growth scales EV and debt paydown converts debt-portion-of-EV into equity. Two independent levers.',
  4390133: 'Show the corners and the cells where entry and exit move against the sponsor. The diagonal is the base case — IC has already seen it.',
  4390134: 'EBITDA growth and exit multiple often co-move negatively for the sponsor. The interesting cells are the joint downside, not the base case.',
  4390135: 'Each dollar of debt repaid becomes a dollar of equity at exit (constant EV). Debt paydown contributes one-third to one-half of typical LBO returns.',
  4390136: 'EBITDA − cash taxes (off EBIT) − capex − ΔNWC − cash interest. Taxes use the EBIT-tax-shield path; PIK is separate from cash interest.',
  4390137: 'Multiple-constancy is modeling discipline, not a forecast claim. It forces the deal to earn returns from operations, not from a market call.',
  4390138: 'The honest defense is a specific value-creation thesis the seller could not execute — different fund size, sector capability, or M&A capacity.',
  4390139: 'Recaps pull forward IRR and reduce cushion. They are most defensible after real EBITDA growth, not after passive cash flow paydown.',
  4390140: 'Multiple arbitrage = paying small-target multiple, exiting at platform multiple. Real, but realization requires actual integration.',
  4390141: 'Compare incremental equity invested to incremental equity created. Bolt-on math is mostly about the debt mix and the entry-vs-exit-multiple gap.',
  4103034: 'Debt paydown converts EV held by lenders into equity for the sponsor at exit. EBITDA growth and paydown are independent levers.',
  4103035: 'Same MOIC over shorter hold = higher IRR. Time matters; multiples do not annualize themselves.',
  4105098: 'Paying less for the same cash flows raises returns. Entry valuation is a major LBO return driver, not a neutral input.',
  4105099: 'Rollover reduces the sponsor equity check and aligns the founder. It does not eliminate execution risk.',
  4105105: 'EV change from EBITDA growth at constant multiple = ΔEBITDA × multiple. Simple, but worth being right about.',
  4107366: 'Cash-free debt-free means cash and debt settle separately. Bridge through net debt and working capital to land on equity.',
  4107373: 'Sources must equal uses. When fees rise and debt is fixed, the equity check absorbs the difference.',
  4107377: 'Thin covenant cushion is one quarter of forecast noise from a breach. Downside cases need real headroom, not 0.1x of slack.',

  // ---------- Chapter 3: Business Diligence ----------
  4390200: 'Diligence is parallel workstreams with specialist providers, each owning a deliverable that lands before IC. Single-firm coverage is no specialist coverage.',
  4390201: 'CDD and QoE start day one — they need the longest runway and feed both the model and the IC memo. Legal lags one or two weeks.',
  4390202: 'Sector fit lives in specific partners, not firm logos. Ask which team has done three to five similar diligences in the last two years.',
  4390203: 'A&M is operational and turnaround — site visits, productivity, 100-day plans. Pairing them with a strategy CDD firm covers both lenses.',
  4390204: 'Bain has the deepest PE-CDD muscle and sprint cadence. McKinsey does CDD too — the choice is about practice DNA, not capability.',
  4390205: 'Audit is a GAAP compliance opinion; QoE tests durability, normalization, working capital, and net debt. Different products entirely.',
  4390206: 'Proof of cash ties P&L back to bank activity over a sample period. It is the QoE\'s defense against accounting-only earnings.',
  4390207: 'Tripling of >90-day AR while revenue accelerates is channel stuffing, credit deterioration, or quality disputes. Healthy growth doesn\'t do that.',
  4390208: 'Trailing 12-month average smooths seasonality and one-offs. Same definition at close avoids the most common dispute.',
  4390209: 'Debt-like is economic, not labels. Anything the buyer will write a check for post-close belongs in the bridge.',
  4390210: 'Some cash is trapped — foreign subs, restricted accounts, minimum operating. 100% cash credit is the seller\'s opening position.',
  4390211: 'EV − funded debt − debt-like items + excess cash ± NWC peg. Every component moves real dollars; missing one over- or under-pays.',
  4390212: '<10% per customer, top 10 below ~30% combined. The 7%/4%/<3% profile clears both tests — no need for industry-specific framing.',
  4390213: 'High top-10 is not auto-disqualifying. The job is relationship-by-relationship work: contract, switching cost, satisfaction, downside model.',
  4390214: 'Sponsors learn more from losses than wins. Sample should be balanced or loss-tilted, sourced independently of the seller.',
  4390215: 'VoC is stratified across current, expansion, lost, churned, sourced independently. Top-customer-only is the seller\'s tour.',
  4390216: 'NPS is only interpretable against category benchmark and the company\'s own trend. Standalone 42 says nothing.',
  4390217: '~95% gross retention is the B2B SaaS anchor. 88% is a yellow flag — needs cohort, segment, and churn-reason data.',
  4390218: '118% NRR + 89% GRR is expansion masking churn. Read them separately because they decompose the base, they don\'t average.',
  4390219: 'Compare cohorts at the same age. Newer cohort retains less at 12 months than the older did at 12 months → deteriorating.',
  4390220: 'Trailing 12-month average captures the full cycle. Pegging at peak or trough hands one side a one-sided benefit.',
  4390221: 'Site visit signal lives off the management script — supervisors, maintenance leads, line observation. The tour is the marketing.',
  4390222: 'Maintenance vs growth is the most-manipulated split in seller financials. Walk the plant, read the asset register, benchmark.',
  4390223: 'Higher real maintenance compresses steady-state FCF and therefore debt capacity, returns, and the case for the price.',
  4390224: 'Hand-off patterns across multiple meetings signal the principals do not own the answer. First-meeting caution is different.',
  4390225: 'Specificity, ownership, visible process improvement. A CFO who knows the customer behind a working-capital swing is the operating profile to back.',
  4390226: 'D&B = entity credit and litigation; Kroll = individual reputational. Different surfaces, both pre-close inputs.',
  4390227: 'R&W is a discipline multiplier, not a substitute. Insurers carve out anything that was not diligenced — under-diligence produces under-coverage.',
  4390228: 'Type I is a snapshot; Type II proves operating effectiveness over 6–12 months. Enterprise SaaS targets are expected to have Type II.',
  4390229: 'Read the scope page of the certificate before reading anything else. A certified slice of the business is technically true and substantively misleading.',
  4390230: 'Annual third-party pen tests with documented remediation. One 18-month internal test fails on independence, cadence, and remediation.',
  4390231: 'Phase I is routine for owned or leased industrial property. It establishes the CERCLA defense and decides if Phase II is needed.',
  4390232: 'A REC triggers Phase II sampling. Quantified contamination risk can be priced, indemnified, escrowed, or insured.',
  4390233: 'Failed ADP tests are real ERISA exposure that flows with the plan. Successor liability does not give the buyer an automatic pass.',
  4390234: 'MEPP withdrawal liability can be an eight-or-nine-figure surprise. Map the triggers — withdrawal is not the only one that fires it.',
  4390235: 'Quantify the stack as a debt-like item, decide who you want to keep, and renegotiate where the existing packages create misalignment.',
  4390236: 'Map the CBA, grievance record, ULP history, and WARN exposure. Pretending union exposure is the seller\'s problem defers discovery to the worst moment.',
  4390237: 'EEO patterns are the data set adverse-impact analysis is built on. Successor liability is well established for employment discrimination claims.',
  4390238: '$1.5M–$4M all-in is the realistic mid-market range. Underspending produces IC surprises; overspending produces duplicated providers.',
  4390239: 'CDD/QoE kick off week 1, interim findings by week 3, closeout by week 5, red-flag log to IC. Anything slower and the calendar wins.',
  4390240: 'Translate the red-flag log into 5–8 IC questions, each with finding, quantification, mitigation, and residual risk. Synthesis is the job.',
  4103032: 'Add-backs are an evidence test, not an automatic credit. Sellers propose; the buyer\'s job is to challenge each one.',
  4103033: 'Concentration is renewal probability, pricing power, relationship strength, and downside impact. Don\'t value as if contracts never expire.',
  4105097: 'Headline retention can hide logo churn masked by price increases on remaining accounts. Cohort analysis is what surfaces it.',
  4107365: 'Weak ERPs cause late billing, mispriced contracts, and inventory errors — direct hits to cash flow, not just reporting risk.',
  4107364: 'Test relationship durability, succession, retention incentives, and revenue at risk if the founder leaves. Permanence is a bad assumption.',
  4107834: 'Test whether revenue continues through institutional sales process and a deeper team. Founder heroics are not transferable.',
  4107835: 'Reconcile definitions, source data, and the impact on the thesis. Discrepancies are diligence signal, not a place to pick the favorable number.',
  4107842: 'Decide whether growth is coming from attractive customers or lower-quality revenue. Mix shift changes the valuation framework.',
  4107846: 'Single-source supply chains are operational time bombs. Real mitigation needs contracts, alternates, or buffer stock — not promises.',

  // ---------- Chapter 4: Value Creation and Operating Plan ----------
  4390300: 'Stress-test the bucket the GP does not control. Multiple expansion at 35% is where the partnership will push.',
  4390301: 'Operational and multiple-expansion stories are separable. Conflating them hides the fact that the multiple is set by the next buyer.',
  4390302: 'Debt paydown converts EV held by lenders into equity for the sponsor. Real driver — but only if FCF actually shows up.',
  4390303: '25% EBITDA growth cannot produce 2.8x MOIC alone. Leverage and multiple expansion are doing the work — name which.',
  4390304: 'Multiple expansion in the bridge is not automatically bad. The question is whether the GP did something to earn it.',
  4390305: 'Cash visibility, lender comfort, top-customer retention, named initiative owners. Foundation before any change.',
  4390306: '13-week rolling cash forecast updated weekly. Matches covenant rhythm — monthly close is too slow, daily is noise.',
  4390307: 'Cut to 5–8 must-wins with one named owner each. A committee owns nothing; diffused ownership produces motion without movement.',
  4390308: 'The OP is the sponsor\'s in-house operating voice — not the CEO, not the deal team. They coach and govern.',
  4390309: 'The bet is repeatable playbook beats deal-by-deal customization. The leverage comes from repetition across a portfolio.',
  4390310: 'In-house teams are a fixed-cost bet on pattern repetition. They make sense at scale with consistent deal types.',
  4390311: 'Diagnose separately, then together. Decision rights, or rotate the OP, or replace the CEO. The relationship cannot stay broken.',
  4390312: 'Centralize back-office, consolidate procurement, single brand at exit. Local autonomy preserved only where it holds the customer.',
  4390313: 'Vertical SaaS is consistently under-priced at acquisition. The discipline is segmentation and staging, not the headline change.',
  4390314: 'The asset is the clinician relationship. Cutting comp or eliminating autonomy at close destroys what you bought.',
  4390315: 'Price, volume, cost, mix. Each lever has different owners and risk profiles — capex and working capital are cash items, not EBITDA levers.',
  4390316: 'Pricing flow-through is near-zero variable cost. The leverage is mathematical — not because pricing is easy.',
  4390317: '1% of revenue / 10%-margin business = 10% EBITDA lift. The smaller the EBITDA denominator, the larger the relative impact.',
  4390318: 'One-time hikes erode through discount creep within 12–18 months. Systems compound and survive leadership changes.',
  4390319: '3–8% on indirect spend over 12–18 months is the empirical range. 25–40% is not procurement, it is fantasy.',
  4390320: 'Tail spend carries hidden compliance and AP costs. Consolidation, P-cards, preferred-supplier discipline is the play.',
  4390321: 'Anchor on benchmarked SG&A% against peers, then walk to specific categories. "Cut 15%" without category framing produces blunt cuts.',
  4390322: 'ZBB justifies spend from zero against current outcomes. Typical first-pass savings are 10–25% on overhead categories.',
  4390323: 'Shared services fail on governance, not on technology. SLAs and clear demarcation are what determine service vs bottleneck.',
  4390324: 'The job design is different post-PE — lender reporting, weekly cash, exit-quality financials. Many pre-PE CFOs are good accountants in the wrong job.',
  4390325: 'Sequence by gap visibility and bench depth — typically CFO first. Simultaneous C-suite turnover destabilizes; staging is essential.',
  4390326: 'Platform carries the management team and systems; bolt-ons tuck in at lower multiples. Labels matter for diligence depth and integration scope.',
  4390327: 'Cost synergies are real but show up on a 12–36 month curve. Named owner, time-to-realization, and execution-risk discount are the discipline.',
  4390328: 'Revenue synergies realize at 50% or less of underwriting in industry studies. Customer-by-customer evidence and a default haircut.',
  4390329: 'Tie each technology investment to a specific EBITDA lever in the bridge. Refuse to fund tech that doesn\'t map.',
  4390330: 'Default to deferring ERP unless the bridge demonstrably needs it. 24 months of leadership distraction usually costs more than the project delivers.',
  4390331: 'Every day of CCC reduction releases revenue/365 in cash. CCC at 120 days is generally elevated — distribution best-in-class is often <60.',
  4390332: 'Credit approval, automated invoicing, dunning cadence, named collections owners. Top-quartile DSO comes from process, not threats.',
  4390333: 'Maintenance keeps the lights on (high importance, low IRR); growth is discretionary (high IRR required). Govern each on its own terms.',
  4390334: 'The buyer\'s diligence team is specifically trained to detect under-investment. Cuts compress the exit multiple to fund the catch-up backlog.',
  4390335: 'Triangulate — internal portfolio data, public peers, consulting studies, trade associations. No single source is decisive alone.',
  4390336: 'Scripted, audience-specific cascade — employees, customers, suppliers, lenders. Silence reads as instability after a change of control.',
  4390337: 'Weekly cash + monthly MBR + quarterly QBR + annual plan. Each cadence answers a different question; collapsing them loses signal.',
  4390338: '8–12 KPIs laddered to the thesis. Department dashboards live below the executive level; 72 metrics produces noise, not insight.',
  4390339: 'Financial and systems integration first, commercial and cultural integration later. Destroying the bolt-on\'s talent destroys the asset.',
  4390340: 'Repair-and-maintenance creep, working capital expansion, addback creep, rising concentration. The combination is the exit-prep warning set.',
  4390341: 'Pre-emptively cut the add-back list to what the buyer\'s QoE will actually accept. Credibility loss is worse than the items themselves.',
  4103036: 'Reporting visibility, cash discipline, named initiative owners. Visibility before action.',
  4103037: 'Buy-and-build seeks growth, synergies, and multiple arbitrage by tucking smaller acquisitions into the platform.',
  4105100: 'Disciplined pricing analysis measures willingness to pay, churn risk, and margin impact. 200% hikes are negligence dressed as strategy.',
  4105101: 'Combine purchasing scale and renegotiate where service and quality allow. Fake savings or separated contracts both fail.',
  4107368: 'Pipeline stages, rep productivity, accountability for conversion. Measurement before more reps.',
  4107374: 'Focus on the few KPIs tied to the thesis, cash, growth, and accountability. More charts is less focus.',
  4107378: 'Collections discipline, inventory planning, supplier terms. Strong EBITDA with weak cash conversion is the classic warning.',
  4107838: 'Discount discipline is the lever, not list-price announcements. Realization, not list, is what matters in B2B.',

  // ---------- Chapter 5: IC Memo, Deal Process, and Exit ----------
  4390400: 'Thesis on page one — target, entry multiple, levers, exit thesis, IRR range. Everything else is supporting evidence.',
  4390401: 'A focused 1–2 page buyer-perspective overview. Not the CIM, not the bio book, not headline financials alone.',
  4390402: 'Replace top-down TAM with bottom-up sized served segment tied to realistic share. IC discounts top-down figures.',
  4390403: 'Sources and uses, cash-free debt-free bridge, financing commitments, rollover, earnout/escrow mechanics. Term structure, not just headline price.',
  4390404: 'Main page: 5-year P&L summary, base/upside/downside, leverage. Appendix: three-statement model, debt schedule, sensitivities. Selection is the discipline.',
  4390405: 'Each initiative: owner, timing, EBITDA impact, evidence, execution risk. Combined buckets hide what IC wants to interrogate.',
  4390406: '4–6 real risks paired with mitigation and residual exposure. Renaming risks as "considerations" is the move IC trusts least.',
  4390407: 'Approve/reject/conditional, price, structure, check size, and the open items that must close before signing. Enthusiasm is not a recommendation.',
  4390408: 'Bring the live memo and open items — the MD review is the rehearsal. Polishing instead of stress-testing is the most common preventable failure.',
  4390409: 'Within 24 hours: accept what is right, push back with evidence where the original was correct, flag the live open questions.',
  4390410: 'Unanimous-approval means any single no is a block. The team\'s only path is to address the substance or accept the IC outcome.',
  4390411: 'Contradictions between memo sections are structural red flags. Reconcile and choose which read the partnership is being asked to underwrite.',
  4390412: 'Synergies at 67% of standalone EBITDA over-model. Decompose by lever, evidence per line, risk-adjust the total.',
  4390413: '9x on a cyclical business with 11x downside is structurally fragile. Lender appetite tells you the financing exists, not that the structure is prudent.',
  4390414: 'NDA first, CIM out. The NDA costs nothing and unlocks the document that turns an anonymous teaser into a real opportunity.',
  4390415: 'Bring specific, evidence-seeking questions on the load-bearing risks. Open-ended questions waste the most valuable diligence hours.',
  4390416: 'IOI is a non-binding first-round range; LOI is the more detailed second-round bid with exclusivity. They are sequential, not synonyms.',
  4390417: 'Exclusivity → SPA → sign → conditions period → close. Each stage builds on the last; reordering breaks the economic logic.',
  4390418: 'Pre-empt on high-conviction scarce assets. You pay full value upfront in exchange for exclusivity and certainty.',
  4390419: 'Round-one IOIs are about making the cut to round two with credibility intact. Position in the top tier — don\'t overshoot the LOI.',
  4390420: 'Walking is the discipline bankers actually respect. Closing a known bad deal because the alternative is slow is the textbook sunk-cost mistake.',
  4390421: 'US LOIs are selectively binding — commercial terms non-binding, exclusivity/confidentiality/expense binding from signature.',
  4390422: 'Binding LOIs commit to close on stated terms subject to named conditions. Effectively a short-form purchase agreement.',
  4390423: '30–60 day band is where most deals can actually be done. Shorter compresses diligence; longer exposes the seller off-market.',
  4390424: 'Targeted, time-boxed extension tied to a specific diligence item. Open-ended requests get refused or come with a price concession.',
  4390425: 'SPA is the binding definitive agreement — price, structure, reps, covenants, conditions, indemnification, MAC, termination.',
  4390426: 'Disclosure schedules are the seller\'s carve-out from reps. Anything disclosed is not a breach — read the schedules carefully.',
  4390427: 'Reps allocate risk by having the seller affirm facts; breaches give indemnification rights. They get negotiated as hard as the price.',
  4390428: 'Akorn is the only modern successful MAC. Most buyers who walk under "MAC" are negotiating a price reduction, not exercising termination.',
  4390429: 'Cap, survival, deductible — three knobs bounding seller exposure. They work in sequence, not in isolation.',
  4390430: 'Escrow is held by an independent third party. It converts the seller\'s post-close indemnity from an unsecured promise into a funded reserve.',
  4390431: '2.5–4% of policy limit is the standard premium range. R&W has become near-standard in US sponsor-led mid-market deals.',
  4390432: 'Earnouts are litigation magnets. Use only when the metric is genuinely uncertain — never to paper over a price disagreement.',
  4390433: '5–15% of new equity, scaled to seniority. The founder personally rolls a larger share; the goal is alignment, not capital extraction.',
  4390434: '4–5 year vest with a 1-year cliff. The cliff prevents early-departure equity capture; the vest ties managers to the value-creation period.',
  4390435: 'Asymmetric by design — leaving well preserves equity, leaving badly forfeits. The drafting of "cause" and "good reason" is where the alignment lives.',
  4390436: 'Committed financing letters at signing eliminate the condition. Trade: buyer takes financing risk in exchange for being competitive.',
  4390437: 'Trailing 12-month average peg with a true-up at close. Prevents the seller from extracting cash or stretching payables.',
  4390438: 'Sponsor-to-sponsor is a standard exit path — well-run platforms with remaining runway clear to other PE firms routinely.',
  4390439: 'Strategic premium of 10–25% is the historical norm, driven by synergy capture. Test whether the synergies are real or whispered.',
  4390440: 'S-1 + 180-day lockup + staggered secondaries over 12–24 months. DPI from an IPO exit is realized over years, not days.',
  4390441: 'Continuation funds resolve fund-life vs runway tension. Conflict-heavy — LPAC approval, fairness opinions, cash-or-roll election.',
  4390442: 'DPI is the cash LPs see and the metric that drives the next fundraise. Late-fund pressure is a real force on exit timing.',
  4103038: 'Recession resistance needs cross-cycle data — customer budgets, contracts, churn, downside cases. One year of growth is not it.',
  4103039: 'Multiple expansion needs business-specific evidence. The IC challenge is what returns look like without it.',
  4107370: 'Differentiated thesis, return drivers, downside protection, resource requirements. IC allocates scarce capital.',
  4107371: 'Buyer universe, rationale, valuation support, backup paths. Assumption-based exits leave the sponsor stuck holding the asset.',
  4107840: 'The strongest reasons the thesis could fail, with evidence that would confirm or reduce each risk. Sentiment management is not analysis.',
  4107845: 'Most niche industrial distributors exit to strategics or sponsors, not the public market. IPO needs to fit the business, not the deck.',
  4107849: 'Flag the open item, decision impact, mitigation, and whether approval should be conditional. Burying material risks compounds them.',

  // ---------- Capstone: BrightSpark Industries LBO ----------
  4390500: 'Mandate fit is two questions: sub-sector and check size. Specialty industrials + $250–300M equity into a $2.5B fund passes both.',
  4390501: 'Founder-led + structural margins + entrenched A&D + clear value-creation path (CEO succession + commercial + M&A). Name the path.',
  4390502: 'Specific operational levers tied to BrightSpark — pricing on aerospace specs, footprint, adjacent-chemistry bolt-ons. Generic levers get memos rejected.',
  4390503: 'Premium margins, discount growth → ~10x. Reflexive aerospace premium or reflexive conservatism both miss the discipline.',
  4390504: '4 bidders with a strategic in final round means real competitive tension. Bring your sharpest bid, not your safest.',
  4390505: '$570–610M tied explicitly to named diligence items. High enough to advance, low enough to preserve flexibility at LOI.',
  4390506: 'Pricing mechanics, succession plan, plant economics, top-10 customer reaction. Only management can answer these.',
  4390507: 'Founder transition is the load-bearing risk. Plan a 6–12 month succession with named customer-relationship handover as a 100-day priority.',
  4390508: 'Specialty chemicals to aerospace/defense/auto OEM, 14–20% EBITDA margins, plus recent PE comps. Anything broader or narrower fails IC trust.',
  4390509: 'Add an associate, bring the operating partner for commercial, engage specialist external advisors. Lean staffing on a $600M deal is false economy.',
  4390510: 'Map qualification status by program for every top-10 customer. Specified-in revenue is sticky; preferred is one bad RFQ from disappearing.',
  4390511: 'Split civil aerospace (cyclical, recovering) from defense (multi-year backlog visibility). The 60% A&D is two cycles in one number.',
  4390512: 'Footprint optimization is a real lever, but bounded by 6–12 months per specification qualification-transfer per customer. Model the timeline honestly.',
  4390513: 'Use $54M adjusted, not $58M reported. The $4M gap is $40M of EV at 10x — that is the IRR difference, not rounding error.',
  4390514: 'Phase I at all 8 sites, Phase II where flagged, plus 28-year compliance history. R&W on environmental excludes pre-existing conditions.',
  4390515: 'Clean-team protocol, named procurement/engineering contacts, program-specific questions. Defense procurement is formal and rewards preparation.',
  4390516: 'Engage each add-back on the merits. Excess-of-market comp is usually legitimate; T&E and "owner-related" usually are not.',
  4390517: 'Peg at the 12-month average ($61M), not the quarter-end snapshot ($52M). Sellers select the favorable snapshot — the buyer normalizes.',
  4390518: 'Coatings on aircraft carry catastrophic-loss exposure. Policy limits, exclusions, claims history, tail coverage on the CEO — all in scope.',
  4390519: 'Underfunded PBO and unfunded retiree medical reduce equity dollar-for-dollar. The funded portion is covered by plan assets — only the gap is debt-like.',
  4390520: 'Uses: $600M + $35M debt repayment + $15M fees = $650M. Sources: $319M debt (5.5x) + $331M equity. Existing debt is refinanced at close.',
  4390521: '5.5–6.0x supported by FCF conversion and end-market quality, bounded by cyclical aerospace and concentration. Both ends matter.',
  4390522: 'Unitranche at $319M with 6-week timeline beats syndicated TLB on speed and execution certainty. Pricing is the trade.',
  4390523: '17–19% IRR at 10.5x, 5.5x leverage, 7% growth, modest margin gain, 10.0x exit. Sanity-check by inspection — refusing to estimate is a discipline gap.',
  4390524: 'Two-way tables on exit × growth and entry × exit. One-way misses interactions; Monte Carlo is theater for an LBO.',
  4390525: 'Time-vested dilutes always; performance-vested dilutes only when hurdles hit. Model both correctly — the difference shows in headline IRR.',
  4390526: '~$5M M&A advisory + ~$6M debt arrangement + ~$1M QoE + ~$2M R&W + $1–2M other = $14–18M. Real money on a $600M deal.',
  4390527: 'Maintenance flat at ~2% of revenue + $4–6M growth gated by IRR. Flat capex assumes no plan; aggressive automation needs an actual plan first.',
  4390528: '50% sweep with $15M cash floor, stepping down below 4.0x leverage. Cash sweep is one of the largest contributors to base-case IRR.',
  4390529: 'Anchor exit at entry. Multiple expansion is the most over-claimed return source — make the case on EBITDA growth and debt paydown.',
  4390530: 'Recommendation up top, then thesis, value creation, diligence, model, risks/kill criteria, bid mechanics. ICs read verdict-first.',
  4390531: '$595–605M with clean structure, R&W in place, committed financing. Win on certainty, not headline price.',
  4390532: 'Earnouts on retiring founders are operationally toxic — he\'s leaving but the earnout pays him to push short-term EBITDA. Clean cash if possible.',
  4390533: '25–40% of after-tax proceeds. Enough that the executive\'s balance sheet moves with the deal; not so much that it forces concentration.',
  4390534: '10% total pool, 50/50 time/performance vesting with 2.0x and 2.5x MoM hurdles. Pool size and structure both have market-standard bands.',
  4390535: 'Financing committed, R&W bound, customary regulatory only. Diligence outs and financing-out clauses lose competitive auctions.',
  4390536: 'HSR plus CFIUS — even US sponsors warrant CFIUS analysis on defense-adjacent industrials with ITAR-controlled product sets.',
  4390537: 'Buyer-side R&W at ~10% of EV ($60M) with 0.5% retention. ~$1.5–2M premium. Standard structure replaces escrow holdbacks.',
  4390538: 'Signed commitment letter + fee letter + interim term sheet from lead lender(s). Best-efforts financing loses competitive auctions.',
  4390539: 'Strategic synergy-funded bids create a ceiling PE cannot rationally match. Walking with conviction is what builds long-term partnership returns.',
  4390540: 'CEO succession kickoff, customer handover protocols, finance build-out, value-creation plan with named owners. Diagnosis before cuts.',
  4390541: 'Recruit externally + 1–6 month parallel onboarding + 6–9 month control transfer + month-12 founder transitions to chairman. Customer handover in parallel.',
  4390542: 'Surgical — map customer × SKU by qualification status, raise prices on sole-sourced/specified-in SKUs at contract renewal. Volume on the rest.',
  4390543: 'Qualification transfers in month 6, first plant closes month 24, second by month 30. The technical timeline doesn\'t bend to the financial calendar.',
  4390544: 'Map 8–12 candidates in adjacent chemistries, proactive sourcing from month 6, first close month 18. The best add-ons are pre-process.',
  4390545: 'European expansion is a multi-year build. M&A acquisition of a local player or defer to the next sponsor — greenfield doesn\'t deliver in a 5-year hold.',
  4390546: 'Dual-track preserves optionality and competitive tension. Strategic-only is risky; PE-only leaves synergy premium on the table.',
  4390547: 'Large diversified coatings + specialty consolidators with aerospace adjacencies + PE-held platforms approaching exit. ~15 names with relationship plan.',
  4390548: 'At $82M EBITDA, BrightSpark is below the typical mid-cap industrial IPO threshold. Sale-primary is the working calibration at this scale.',
  4390549: 'Lead with the headline, attribute across EBITDA growth, debt paydown, and multiple expansion. Be explicit about which was sponsor work and which was market.',
}

export const PE_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  // ---------- Chapter 1: trim verbose definitions where context can move to the lesson ----------
  4390038: {
    newCorrect: 'The LP gets immediate liquidity and an out from future capital calls; the buyer gets a J-curve-mitigated position with visibility into the remaining portfolio.',
    lessonAddendum: 'Secondary buyers enter mid-life with the J-curve mostly absorbed, less remaining duration, and partial visibility into outcomes — which is exactly why secondary prices and IRRs look different from primary returns.',
  },
  4390041: {
    newCorrect: 'Smaller funds compete in a less efficient deal market, face less pressure to deploy quickly, and can move EBITDA on smaller targets with modest operational change.',
    lessonAddendum: 'Lower-middle-market sourcing has more proprietary opportunities, and small-target EBITDA is more movable per unit of operational work — which is why the smaller-fund outperformance persists in carefully constructed studies.',
  },
  4390043: {
    newCorrect: 'Consistent net IRR across three vintages above the top-quartile threshold, with attribution showing operating improvement rather than multiple expansion.',
    lessonAddendum: 'Reinforce the case with references to specific deals that illustrate the playbook — and resist the temptation to lead with strategy or team biographies, which signal that the track record is the weaker story.',
  },
  4390046: {
    newCorrect: 'Pass-through tax treatment, well-developed Delaware case law, commercial flexibility on the LPA, and limited liability for LPs — the combination is unmatched for pooled investment.',
    lessonAddendum: 'No other US entity form combines all four cleanly. The Delaware LP is the workhorse vehicle of US private capital because the structure exists, the law works, and the LPA can be commercially tailored.',
  },

  // ---------- Chapter 2: trim a few of the long math/structure correct strings ----------
  4390104: {
    newCorrect: 'Lower mandatory amort to 1% and reduce the sweep to 50%, then add leverage-based step-downs so the sweep falls to 0% below 4.0x net leverage.',
    lessonAddendum: 'The structure rewards deleveraging — lenders get faster paydown when leverage is high, and the sponsor recaptures cash flow as leverage falls. That is the trade-off the negotiation is built on.',
  },
  4390106: {
    newCorrect: 'Enable iterative calculation with a tight tolerance and seed interest with an opening balance — or base interest on the prior period\'s ending debt balance.',
    lessonAddendum: 'LBO debt schedules are inherently circular: interest depends on average debt, which depends on the sweep, which depends on FCF, which depends on interest. Either fix breaks the loop cleanly; ad-hoc hard-coding hides the error for the next associate.',
  },
  4390123: {
    newCorrect: 'Recurring revenue, low capex, sticky customers, and non-cyclical demand support more leverage; capital-intensive cyclical sectors support less.',
    lessonAddendum: 'FCF volatility and asset values both move with the cycle in heavy industrials. Software, healthcare services, and consumer staples can support 6–7x; metals, paper, basic chemicals typically support 3–5x.',
  },
  4390132: {
    newCorrect: 'EBITDA growth from $100M to $150M at constant 10x adds $500M of EV; debt paydown of $300M converts debt value into equity value at exit.',
    lessonAddendum: 'Both compound into the sponsor\'s 3.0x MOIC at ~24.6% IRR. The decomposition matters because two 3.0x deals with very different mixes carry very different downside profiles.',
  },

  // ---------- Chapter 3: trim QoE / diligence verbose corrects ----------
  4390209: {
    newCorrect: 'Unfunded pensions, deferred comp, earn-out balances, accrued bonuses, capital-lease obligations, customer deposits to be repaid, and unpaid taxes.',
    lessonAddendum: 'Each of these reduces the equity wire at close because the buyer will pay them out for pre-close obligations. Debt-like is an economic test, not an accounting label — the buyer\'s discipline is to find every dollar that will leave the company post-close for pre-close reasons.',
  },
  4390211: {
    newCorrect: 'TEV − funded debt − debt-like items + excess cash (gross less trapped and minimum operating) ± NWC peg adjustment.',
    lessonAddendum: 'Mis-stating any one component (a missed debt-like item, the wrong cash credit, a sloppy peg) is the most common way a sponsor over- or under-pays at close. The bridge translates an EV-based price into the actual check the seller receives.',
  },
  4390215: {
    newCorrect: '30–50 customer interviews stratified across cohort, segment, and account size — current users, churned users, expansion accounts, and lost prospects.',
    lessonAddendum: 'Anchor the program with a written discussion guide and have the CDD firm synthesize with verbatim attribution. Stratification matters because each cohort tells a different chapter of the story, and the sponsor needs all of them to underwrite the thesis.',
  },
  4390217: {
    newCorrect: 'Below the ~95% gross retention benchmark for healthy B2B SaaS — the 7-point gap implies meaningful churn that NRR upsells may be hiding.',
    lessonAddendum: 'Diligence needs cohort, segment, and churn-reason data before accepting the headline. Numbers in the high 80s are not disqualifying but require explanation — by segment, by cohort, and by churn reason — before the sponsor underwrites the thesis.',
  },

  // ---------- Chapter 4: trim verbose execution playbook corrects ----------
  4390305: {
    newCorrect: 'Lock down 13-week cash forecast, confirm lender reporting, identify the top 5 value-creation initiatives with named owners, and meet the top 20 customers and top 10 employees.',
    lessonAddendum: 'The first 100 days have asymmetric leverage. Cash visibility, lender comfort, top-customer retention, and named initiative owners are the foundation that every later move depends on.',
  },
  4390336: {
    newCorrect: 'All-employee Monday, top-customer outreach in the first 5 business days, supplier note in week 2, lender update with the 100-day plan in week 3–4.',
    lessonAddendum: 'Each audience has different anxieties — employees worry about jobs, customers about service, suppliers about terms, lenders about plan. The cascade is centrally scripted even when individual leaders deliver pieces of it.',
  },
  4390337: {
    newCorrect: 'Weekly cash and pipeline with CFO/COO, monthly MBR on KPIs and initiatives, quarterly QBR at board level, and an annual operating-plan reset.',
    lessonAddendum: 'Each layer answers a different question — liquidity, operating execution, thesis, strategy — and each needs its own rhythm. Quarterly-only is too slow for an LBO; daily reviews produce noise.',
  },
  4390341: {
    newCorrect: 'Pre-emptively cut the add-back list to items the buyer\'s QoE will accept — true one-time items, documented owner expenses, deal-related costs — and remove speculative or recurring items.',
    lessonAddendum: 'A clean, defensible add-back schedule preserves the multiple. A bloated one invites the buyer to discount the entire adjusted-EBITDA framework, and credibility loss is worse than the items themselves.',
  },

  // ---------- Chapter 5: trim memo / process / SPA verbose corrects ----------
  4390400: {
    newCorrect: 'On page one as a 3–5 sentence statement naming the target, entry multiple, value-creation levers, exit thesis, and IRR range.',
    lessonAddendum: 'Any partner reading only page one should know what the deal is and why. The rest of the memo is read as supporting evidence for a claim the partnership has already seen.',
  },
  4390404: {
    newCorrect: 'Main page: 5-year P&L summary, base / upside / downside IRR and MOIC, leverage at close and exit, FCF generation. Appendix: three-statement model, debt schedule, sensitivity grids.',
    lessonAddendum: 'Financial summary placement is an editing problem: the few numbers that drive the recommendation belong in line, the supporting machinery belongs in the appendix. Hiding the downside case is non-negotiable bad form.',
  },
  4390417: {
    newCorrect: 'Exclusivity (30–60 days) for confirmatory diligence and SPA negotiation; SPA execution at signing; sign-to-close period for conditions (regulatory, financing, consents); then closing.',
    lessonAddendum: 'Each stage exists because the prior one would not function without it. Reordering breaks the legal and economic logic of how deal risk transfers between buyer and seller.',
  },
  4390428: {
    newCorrect: 'Probably not — Delaware sets a high bar (Akorn v. Fresenius): the change must be durationally significant, business-specific, and not subject to standard MAC carve-outs.',
    lessonAddendum: 'General economic conditions and industry-wide effects are excluded. Short-term industry-wide declines usually do not qualify regardless of magnitude — Akorn remains the only modern case where MAC invocation succeeded.',
  },
  4390431: {
    newCorrect: 'R&W insurance shifts indemnification risk to an insurer — US premiums run 2.5–4% of policy limit, so $2.1M on a $70M policy (3%) is standard.',
    lessonAddendum: 'In exchange, the seller\'s indemnification obligation is reduced (often to a small sandbag) and the buyer recovers from the insurer for covered breaches. R&W has become near-standard in US sponsor-led mid-market deals.',
  },
  4390432: {
    newCorrect: 'Earnouts are litigation magnets — buyers and sellers fight over EBITDA definitions, operating decisions, and good-faith conduct.',
    lessonAddendum: 'Use earnouts only when the gap is real and uncertain, define the metric mechanically, and price the litigation risk into the structure. Used poorly, they paper over disagreement and produce years of Delaware case law.',
  },
  4390441: {
    newCorrect: 'A GP-led secondary where the existing fund sells the asset to a new vehicle the same GP manages — LPs cash out at the secondary price or roll into the continuation fund.',
    lessonAddendum: 'The structure provides liquidity to those who need it while letting the GP continue managing the asset. The conflict of interest is managed through LP advisory committee approval, independent fairness opinions, and disclosed process — not through prohibition.',
  },

  // ---------- Capstone: trim a few of the most verbose BrightSpark corrects ----------
  4390501: {
    newCorrect: 'Founder-led specialty chemicals platform with structural margins (17% EBITDA, 83% FCF conversion), entrenched A&D relationships, and a clear path through CEO succession, commercial discipline, and selective add-on M&A.',
    lessonAddendum: 'A first-pass thesis names the asset, the structural quality, and the path the sponsor will take. For BrightSpark, the founder-led + succession + commercial + M&A frame is the version that justifies the bid level the IC will be asked to approve.',
  },
  4390519: {
    newCorrect: 'Treat the underfunded PBO ($4M) and unfunded retiree medical liability as debt-like in the bridge — reduce equity dollar-for-dollar, and plan a pension risk-transfer (buyout via annuity) in year 1–2.',
    lessonAddendum: 'Pension and retiree medical are routine debt-like items in LBO purchase-price bridges. Getting the bridge mechanics right on these items is associate-level work that has to be precise — the funded portion is covered by plan assets, only the gap is debt-like.',
  },
  4390520: {
    newCorrect: 'Uses: $600M equity purchase + $35M debt repayment + $15M fees = $650M total. Sources: $319M new debt (5.5x × $58M) + $331M sponsor equity.',
    lessonAddendum: 'Cap structure lands at 49% debt / 51% equity at close. The S&U has three load-bearing inputs: enterprise value, existing-debt treatment, and fees — equity check falls out of the math.',
  },
  4390531: {
    newCorrect: '$595–605M (10.3–10.4x), with a clean structure (no earnout, no contingent payments, R&W in place) and pre-committed financing.',
    lessonAddendum: 'Hawthorne wins on certainty rather than headline price, and the IRR clears the 18%+ threshold by a comfortable margin. Winning on certainty is the consistent move that mid-market sponsors use to beat both more aggressive PE and synergy-funded strategics.',
  },
  4390549: {
    newCorrect: 'Lead with the 2.7x MoM and 22% IRR headline, then attribute across EBITDA growth (54 → 82M), debt paydown, and multiple expansion (10.3x → 13.4x).',
    lessonAddendum: 'Be explicit that the multiple expansion came from the strategic synergy premium, not from sponsor underwriting — that sets honest LP expectations. The disciplined sponsors attribute returns transparently because that is what builds the LP trust the next fundraise depends on.',
  },
}
