// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the Venture Capital roadmap (~350 questions across 7 chapters + Capstone).
//
// VC_SUB_TOPICS groups each chapter's questions into 3-7 lesson-shaped clusters
// (cap 8 per chapter, since the lesson grouping caps at 8 lessons per chapter).
//
// VC_MENTOR_HINTS overrides the generic VC scaffold hint with a one-line
// second-person nudge that names the reasoning move without giving the answer
// — voice: senior partner mentoring a first-year associate.
//
// VC_CORRECT_SHORTENED trims `correct` strings flagged by the length-heuristic
// audit (correct ≥1.8x longer than longest wrong AND ≥20 chars longer). Trimmed
// explanatory clauses are reattached via `lessonAddendum` so no info is lost.

export const VC_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Chapter 1: Venture Model and Fund Math --------------------
  'Fund Mechanics': [
    4200002, 4200003, 4350008, 4350009, 4350010, 4350011, 4350012, 4350013,
    4350028, 4350029, 4350039,
  ],
  'Power Law & Returns': [
    4200000, 4200001, 4350000, 4350001, 4350002, 4350003, 4350014, 4350015,
    4350016, 4350017, 4350018, 4350019, 4350020, 4350040,
  ],
  'Ownership Math': [
    4200005, 4200006, 4350004, 4350022, 4350024, 4350025, 4350026, 4350027,
  ],
  'Reserves & Construction': [
    4200004, 4350005, 4350006, 4350007, 4350021, 4350023, 4350041,
  ],
  'Fund Lifecycle & Vintage': [
    4200007, 4350030, 4350031, 4350032, 4350038,
  ],
  'LP Structures & AUM': [
    4350033, 4350034, 4350035, 4350036, 4350037,
  ],

  // -------------------- Chapter 2: Sourcing and Market Mapping --------------------
  'Thesis Development': [
    4280010, 4350100, 4350101, 4350102, 4350103, 4350121, 4350122, 4350123,
    4350124,
  ],
  'Market Sizing': [
    4103001, 4105056, 4350104, 4350105, 4350106, 4350107,
  ],
  'Category & Competition': [
    4280011, 4107301, 4107312, 4350125, 4350126, 4350127, 4350128, 4350129,
    4350130, 4350131, 4350132, 4350108,
  ],
  'Sourcing Channels': [
    4350109, 4350110, 4350111, 4350112, 4350113, 4350114, 4350115, 4350116,
    4350117,
  ],
  'Founder Screening': [
    4350118, 4350119, 4350120, 4350139, 4350140,
  ],
  'Fund Positioning': [
    4350133, 4350134, 4350135, 4350136, 4350137, 4350142,
  ],
  'Pipeline Discipline': [
    4350138, 4350141, 4350143,
  ],

  // -------------------- Chapter 3: Startup Metrics and Diligence --------------------
  'ARR & Revenue Quality': [
    4350200, 4350201, 4350202, 4350203, 4350228, 4350229, 4350230, 4350234,
    4350235, 4350236, 4350240, 4107305,
  ],
  'Retention & Cohorts': [
    4105058, 4105059, 4350204, 4350205, 4350206, 4350207, 4350213, 4350214,
    4350215, 4350216, 4350217, 4350218, 4350219, 4350220,
  ],
  'CAC & Sales Efficiency': [
    4103003, 4280020, 4350208, 4350209, 4350210, 4350211, 4350212, 4350239,
    4350241,
  ],
  'Burn & Runway': [
    4350221, 4350222, 4350223, 4350224, 4350225, 4350226, 4350227,
  ],
  'Pipeline & Sales Cycle': [
    4107313, 4350231, 4350232, 4350233,
  ],
  'Pilots & Expansion Signals': [
    4103004, 4107304, 4350237, 4350238,
  ],

  // -------------------- Chapter 4: Founder, Product, and Customer Evidence ---------
  'Founder-Market Fit': [
    4105057, 4350300, 4350301, 4350302, 4350303, 4350304,
  ],
  'Coachability & Decision-Making': [
    4103002, 4107773, 4350305, 4350306, 4350307, 4350308,
  ],
  'Cofounder Dynamics': [
    4107303, 4350309, 4350310, 4350311, 4350312, 4350313,
  ],
  'Customer Call Craft': [
    4107302, 4350314, 4350315, 4350316, 4350317, 4350318, 4350333, 4350334,
    4350335, 4350336, 4350337,
  ],
  'Product Pull': [
    4350319, 4350320, 4350321, 4350322, 4350323, 4350324,
  ],
  'Switching Costs & Roadmap Risk': [
    4280030, 4350325, 4350326, 4350327, 4350328, 4350329, 4350330, 4350331,
    4350332,
  ],
  'Sales Engineering & Conversion': [
    4350338, 4350339, 4350340, 4350341, 4350342, 4350343,
  ],

  // -------------------- Chapter 5: Terms, Memo, and Investment Decision -----------
  'Valuation & Preference Stack': [
    4103005, 4280040, 4350400, 4350401, 4350402, 4350403, 4350404,
  ],
  'Pro Rata & Anti-Dilution': [
    4105060, 4350405, 4350406, 4350407, 4350408,
  ],
  'Governance & Control': [
    4107307, 4350409, 4350410, 4350411, 4350412, 4350417, 4350418, 4350419,
    4350420, 4350421, 4350422,
  ],
  'Founder Vesting & Acceleration': [
    4350413, 4350414, 4350415, 4350416,
  ],
  'SAFE & Convertibles': [
    4107306, 4350423, 4350424, 4350425, 4350426, 4350427,
  ],
  'Option Pool & Pay-to-Play': [
    4105061, 4107776, 4350428, 4350429, 4350430, 4350431, 4350432, 4350433,
    4350434,
  ],
  'Memo Craft & Decision': [
    4103007, 4105064, 4350435, 4350436, 4350437, 4350438, 4350439, 4350440,
  ],

  // -------------------- Chapter 6: Portfolio Support and Follow-On ----------------
  'Board Cadence & KPIs': [
    4103006, 4350500, 4350501, 4350502, 4350503, 4350504, 4350505, 4350506,
    4350507,
  ],
  'Bridge & Triage': [
    4107315, 4105062, 4350508, 4350509, 4350510, 4350528, 4350529, 4350530,
  ],
  'Follow-On Math': [
    4107785, 4105063, 4350511, 4350512, 4350513, 4350539,
  ],
  'Markup & Insider Discipline': [
    4280050, 4350514, 4350515, 4350516, 4350517, 4350518, 4350519,
  ],
  'CEO Support & Hiring': [
    4350520, 4350521, 4350522, 4350523, 4350524, 4350525, 4350526, 4350527,
  ],
  'Exit Dynamics': [
    4350531, 4350532, 4350533, 4350534, 4350535,
  ],
  'Down Rounds & Founder Health': [
    4350536, 4350537, 4350538, 4350540, 4350541, 4350542, 4350543,
  ],

  // -------------------- Capstone: Investment Pack and Synthesis (FieldChart) -----
  'FieldChart: Sourcing Thesis': [
    4350600, 4350601, 4350602, 4350603, 4350604, 4350605, 4350606, 4350607,
    4350608,
  ],
  'FieldChart: Market Map and Sizing': [
    4350609, 4350610, 4350611, 4350612, 4350613, 4350614, 4350615, 4350616,
    4350617,
  ],
  'FieldChart: Diligence and Validation': [
    4350618, 4350619, 4350620, 4350621, 4350622, 4350623, 4350624, 4350625,
    4350626, 4350627,
  ],
  'FieldChart: Terms and Decision': [
    4280100, 4280101, 4280102, 4350628, 4350629, 4350630, 4350631, 4350632,
    4350633, 4350634, 4350635, 4350636, 4350637,
  ],
  'FieldChart: Portfolio and Exit': [
    4350638, 4350639, 4350640, 4350641, 4350642, 4350643, 4350644, 4350645,
    4350646,
  ],
}

export const VC_MENTOR_HINTS: Record<number, string> = {
  // ---------- Chapter 1: Venture Model and Fund Math ----------
  4200006: 'Ownership = check / post-money. Reach for that equation before any other framing.',
  4200000: 'Set exit value × ownership = fund size. Solve for exit value at the stated stake.',
  4200001: 'TVPI counts paper plus cash; DPI counts only cash. The gap is the unrealized half.',
  4200002: 'A 2% fee charged on committed capital every year for ten years compounds linearly, not annually.',
  4200003: 'Strip the 1x preferred return off the top first, then apply 20% carry to what remains.',
  4200004: 'A seed winner often absorbs 5-10x its initial check across follow-ons. Reserves are not a side budget.',
  4200005: 'Compound the dilution multiplicatively across rounds — three 20% rounds leaves you with 0.8^3, not 1 - 3×0.2.',
  4200007: 'Ask whose constraint the 10-year clock is solving: regulators, GPs, or the LPs who need return measurement.',
  4350000: 'Power law means a heavy-tailed distribution of outcomes, not an average — most companies cluster near zero.',
  4350001: 'Solve exit × ownership = $400M for exit. Then sanity-check against typical unicorn outcomes.',
  4350002: 'You have $300M to make with two exits at 12% each. Divide first, then check the per-exit number.',
  4350003: 'Strip out the 35x and re-run the multiple on the remaining 29. The number you get is the story.',
  4350004: '15% of $30M post-money. Resist any math involving pre-money or round size — those are noise.',
  4350005: '1:2 means one dollar of initials for every two of reserves. Three parts total, one of them initial.',
  4350006: 'Reserves models exist to be broken for breakouts. Ask whether this is one — not whether the rule is sacred.',
  4350007: 'Recycling lets a GP redeploy exit cash up to the cap before LPs see it. Read the percentage as a ceiling.',
  4350008: 'GP commit is a percentage of the fund, not of carry. 1-3% is the band.',
  4350009: 'Decompose "2-and-20" into two separate annual fees, then think about which compounds over ten years.',
  4350010: 'Fees step down after the investment period and usually shift basis from committed to invested. Both levers move.',
  4350011: 'European = whole-fund-first, LP-friendly. American = deal-by-deal, GP-friendly. Where does carry start in each?',
  4350012: 'A hurdle is a return threshold the LP must clear before any carry flows. Think of it as a floor on LP economics.',
  4350013: 'After the hurdle, GPs claw back to their target share before normal splits resume. The catch-up is the bridge.',
  4350014: 'MOIC has no time dimension; IRR does. Same multiple over different holds gives different IRRs.',
  4350015: 'Total value = distributions + remaining NAV. Divide by paid-in capital — do not split or weight the components.',
  4350016: 'DPI + RVPI = TVPI. Each piece answers a different question; the sum is the headline.',
  4350017: 'Year-3 markups are easier to inflate than year-8 marks. Read TVPI against vintage age.',
  4350018: 'IRR is the discount rate that zeros the NPV of fund cash flows. Time-weighting is the whole point.',
  4350019: 'Compute both IRRs. A higher multiple over a much longer hold can lose to a faster, smaller exit.',
  4350020: 'The gap between gross and net is fees plus carry — usually 0.4-0.7x on a 2-and-20 fund.',
  4350021: 'Ownership defense through Series B needs reserves heavier than initials. 50/50 rarely funds it.',
  4350022: 'Pro rata is computed on the new money raised, not on post-money valuation. 12% × $20M, full stop.',
  4350023: 'A soft cap is a partnership-decision trigger, not a hard ceiling. Name the exposure and decide explicitly.',
  4350024: 'Entry ownership is the stake on the day you invest — before any future dilution touches it.',
  4350025: 'Stakes acquired across rounds sum, then dilute together. Do not average percentages.',
  4350026: 'Pre-money pool refreshes dilute everyone who already exists, not the new lead. Trace whose denominator changes.',
  4350027: 'Pre-emptive rights guarantee the right to participate, not allocation in oversubscribed rounds.',
  4350028: 'A capital call draws committed capital from LPs as needed — committed is not the same as called.',
  4350029: 'Quarterly batched calls keep admin overhead manageable. Monthly is rare; one-shot at close hurts IRR.',
  4350030: 'Vintage is the year a fund was formed. It tags the macro cohort, not the company ages.',
  4350031: 'Different vintages catch different macro cycles. Spreading commitments is a risk lever, not a return one.',
  4350032: 'Fees front-load and exits trail. The dip is structural, not a sign of failure.',
  4350033: 'FoFs buy access and diversification at the cost of a second fee layer. The math turns on whether access is real.',
  4350034: 'Same GP pricing across two funds creates a fiduciary conflict — Fund II wants high, Fund III wants low.',
  4350035: 'Crossover funds assume late-stage private and public tech are converging into one asset class.',
  4350036: 'A 6x larger fund needs proportionally larger exits to return capital. Where does that pressure push entry stages?',
  4350037: 'An SPV is a single-deal vehicle, sitting alongside the main fund — lighter economics, deal-by-deal selection.',
  4350038: 'NAV is not cash. Until the tail companies exit, RVPI persists and final DPI stays uncertain.',
  4350039: 'Carry distribution lags through capital-account math and clawback reserves. Same-day payouts are not the norm.',
  4350040: 'Power-law math expects a high loss ratio. The top one or two outcomes carry the fund, not the bottom half.',
  4350041: 'Make the math close: check size × count + reserves = fund size, at a stated ownership target.',

  // ---------- Chapter 2: Sourcing and Market Mapping ----------
  4280010: 'Push for the discrete external change — regulation, cost curve, buyer behavior — that opens the window now.',
  4280011: 'A market map\'s job is to find the unaddressed segment, not to list the existing players.',
  4103001: 'Top-down email-user totals are not buyable. Narrow to the reachable buyer, use case, and price point.',
  4105056: 'Multiply target accounts by penetration by ACV. Do not start from a healthcare-spend aggregate.',
  4107301: 'Test the expansion logic from the wedge. A narrow start is fine if it credibly opens a larger budget.',
  4107312: 'In regulated markets, licensing gates revenue. Map the path before sizing the opportunity.',
  4350100: 'A thesis names category, why-now, the winning archetype, the founder profile, and what would falsify it.',
  4350101: 'Ask what observation would disprove the thesis. If nothing would, it is a slogan, not a thesis.',
  4350102: 'A trend is the input. A thesis names the specific business model and timing window the trend creates.',
  4350103: 'Theses are living documents. The discipline is to update on real evidence and be explicit about what changed.',
  4350104: 'Bottom-up forces buyer, price, and penetration to be testable. Top-down rarely survives scrutiny.',
  4350105: 'Segment by buyer behavior, regulation, or budget — the dimensions that change how a sale closes.',
  4350106: 'Depth, not breadth. Pick a segment narrow enough that you can describe the buyer\'s workday.',
  4350107: 'Adjacent markets are real only if the customer overlap or distribution overlap is concrete.',
  4350108: 'A map\'s output is "where is the gap?" — synthesis, not a directory.',
  4350109: 'Repeat founder networks compound the highest-conviction sourcing channel. Cold outbound rarely does.',
  4350110: 'Accelerators provide volume and pattern-matched founders, but with adverse-selection risk at top tier.',
  4350111: 'Scouts give early access to networks the GP cannot reach. The economics align if the carry split is real.',
  4350112: 'Cold outbound converts low. Use it to test thesis hypotheses, not to fill the pipeline.',
  4350113: 'A warm intro is only as good as the introducer\'s actual relationship with the founder. Probe both sides.',
  4350114: 'Conferences are expensive sourcing per dollar. Treat them as relationship maintenance, not lead generation.',
  4350115: 'Pick the events the founders you want actually attend. Coverage strategy is a network-density question.',
  4350116: 'Inbound quality drifts as the fund\'s brand grows. Track conversion rates by source, not just volume.',
  4350117: 'High inbound volume often comes with weaker average quality. Re-tune the first-meeting filter accordingly.',
  4350118: 'Verify the founder\'s claimed background — operating history, prior companies, technical depth — before conviction.',
  4350119: 'Pattern recognition runs both ways. Ask whether the pattern is the deal or the deal is just fitting a stereotype.',
  4350120: 'Repeat founders carry useful priors but also expensive ones. Past success raises entry prices and expectations.',
  4350121: 'Name the catalyst. Without a discrete external change, "why now" is a feeling, not a thesis.',
  4350122: 'Regulatory shifts create real time-bound openings. The diligence question is whether the company can move inside the window.',
  4350123: 'Cost-curve catalysts are the cleanest why-nows — unit economics that were impossible last year now work.',
  4350124: 'Buyer-behavior shifts are the slowest catalysts to verify. Demand specific evidence, not category narrative.',
  4350125: 'Category creation requires educating the buyer to recognize a budget line. That is slow and expensive.',
  4350126: 'New categories have no comp set, no buyer template, and no incumbent to displace. Conversion is uncertain by definition.',
  4350127: 'Disruption requires a structural reason the incumbent cannot or will not compete in the new segment.',
  4350128: 'Competitive density is competitors per addressable buyer, not absolute count. It predicts conversion difficulty.',
  4350129: 'In overcrowded markets, ask what specific structural advantage gets this entrant into the top tier.',
  4350130: '"No competitors" can mean white space or no market. Talk to buyers before betting on which.',
  4350131: 'Map axes are useful only if they cluster competitors visibly. If the chart is uniform, try different axes.',
  4350132: 'Apply the buyer-switch test: would a current customer of incumbent X actually switch for this feature?',
  4350133: 'Small funds cannot diligence and support globally. Geographic breadth dilutes the sourcing network.',
  4350134: 'At $40M, depth in one city usually compounds faster than three-city coverage. Bandwidth is the binding constraint.',
  4350135: 'Specialists build vertical edge; generalists need a different lever. Pick one and commit.',
  4350136: 'Pre-seed favors team conviction; seed favors data. Stage choice reshapes diligence and mortality assumptions.',
  4350137: 'The diagnostic value of an anti-portfolio is in the pattern of misses, not the individual deals.',
  4350138: 'Sourcing is volume × conversion. Work the equation backward from target investment count.',
  4350139: 'Test founder sharpness on customer, problem, and why-now in 30 minutes. Save the demo for a follow-up.',
  4350140: 'Pre-meet references are useful color, not a verdict. Depth comes later in diligence.',
  4350141: 'Hot deals need triage discipline, not diligence-skipping. Accelerate the highest-signal checks; pass if those fail.',
  4350142: 'At small fund size, vertical depth compounds faster than brand or outbound. Pick the dominant channel.',
  4350143: 'A market map\'s output is a one-page synthesis: where the gap is, who can take it, what the fund does.',

  // ---------- Chapter 3: Startup Metrics and Diligence ----------
  4103003: 'CAC payback = acquisition cost / monthly gross profit. Apply the equation, then sanity-check the period.',
  4103004: 'Pilots are not revenue. Test usage, budget ownership, and expansion intent before counting logos.',
  4105058: '115% NRR can mask 22% logo churn if expansion is concentrated. Decompose by cohort and customer size.',
  4105059: 'Downloads are top-of-funnel. PMF shows up in retained, engaged users — not in install counts.',
  4107305: 'Founder-driven onboarding is real cost off the books. Strip it out before believing the gross-margin number.',
  4107313: 'Long sales cycles compound burn and quota risk. Model cash, capacity, and pipeline timing — not the demo count.',
  4107304: 'Expansion is most of LTV in B2B SaaS. Demand evidence the motion is repeatable, not contractual hope.',
  4280020: 'Rule of 40 = growth + operating margin. Margin is negative here — net the two, do not double-count growth.',
  4350200: 'ARR is the current monthly recurring base × 12. It is a snapshot of forward run-rate, not trailing collected revenue.',
  4350201: 'CARR includes signed-but-not-live; ARR is what is invoicing now. The gap is implementation backlog.',
  4350202: 'One-time fees do not recur. Strip them out before annualizing.',
  4350203: 'A single anomalous month is not a run-rate. Anchor to the trailing three to six months.',
  4350204: 'Logo retention is an unweighted count of customers retained. It is independent of revenue size per account.',
  4350205: 'NRR adds expansion on top of GRR. NRR can exceed 100% only if expansion outweighs churn — not by definition.',
  4350206: 'When the gap is wide, expansion is concentrated. A 75% GRR with 130% NRR signals churn masked by a few accounts.',
  4350207: 'A wide gap between logo and revenue retention usually means SMB churn masked by enterprise expansion.',
  4350208: 'CAC is sales-and-marketing spend divided by new customers acquired. Be strict about which dollars and which customers count.',
  4350209: 'Payback should be calculated on gross profit, not revenue. At lower gross margins, payback periods lengthen materially.',
  4350210: 'Magic number = ARR added in quarter / sales-and-marketing in the prior quarter, annualized. Mind the timing offset.',
  4350211: 'A magic number above 1 means the business is paying back sales spend within four quarters; below 0.5, the motion is broken.',
  4350212: 'Early-stage CAC payback is forgiven; late-stage CAC payback is benchmarked. Read the number against company stage.',
  4350213: 'Day-1 retention is product activation; day-30 retention is workflow stickiness. They test different claims.',
  4350214: 'Healthy day-30 retention curves flatten after the initial drop. A still-falling curve at week 4 means no formed habit.',
  4350215: 'Enterprise logo retention should improve with cohort age — older cohorts have churned the bad fits already.',
  4350216: 'A cohort triangle exposes whether retention is stable across vintages or whether the recent cohort is structurally worse.',
  4350217: 'Logo churn = logos lost / logos at start of period. Tag the period and the denominator before comparing.',
  4350218: 'Gross revenue churn is downside only; net revenue churn nets expansion against it. The two answer different questions.',
  4350219: 'Monthly to annual churn does not multiply linearly — it compounds. 5% monthly is roughly 46% annual, not 60%.',
  4350220: 'Churn type tells you where the gap lives: usage churn means no habit; price churn means no value capture.',
  4350221: 'Net burn subtracts revenue from gross expense. Gross burn is just expense. Both matter, depending on the question.',
  4350222: 'Runway = cash / net burn. Pick the burn that reflects the next 12 months, not the trailing average.',
  4350223: 'Default-alive companies can reach profitability on current cash; default-dead cannot. Ask which side this company is on.',
  4350224: 'Cost cuts buy runway only if they do not break the growth engine. Test the cut against the milestone the company needs.',
  4350225: 'Burn multiple = net burn / net new ARR. It compares dollars consumed to dollars created.',
  4350226: 'Burn multiple under 1 is excellent; 1-2 is healthy; above 2 means the business is buying growth expensively.',
  4350227: 'Capital efficiency at Series B benchmarks total raised against ARR. Anything above 5:1 needs a story.',
  4350228: 'Services revenue scales linearly with headcount; software does not. A services disguise breaks the SaaS comp set.',
  4350229: 'Project revenue does not recur. Strip out the project work before counting "recurring" anything.',
  4350230: 'Quality of revenue integrates margin, recurrence, and concentration. Headline ARR alone never answers it.',
  4350231: 'Pipeline coverage = weighted pipeline / quota. Below 3x usually means the quarter is at risk.',
  4350232: 'Coverage shortfall predicts a miss. Diagnose whether it is generation, conversion, or velocity before responding.',
  4350233: 'Lengthening sales cycles often precede revenue misses. They signal buyer hesitation before bookings do.',
  4350234: 'Bookings is contracted future revenue; revenue is recognized over the service period. The gap is deferred revenue.',
  4350235: 'Deferred revenue is cash collected for work not yet delivered. Read it as a liability, not a revenue accelerator.',
  4350236: 'Cash collected can lead or lag revenue recognized depending on billing terms. Both numbers tell different stories.',
  4350237: 'Founder-curated dashboards self-select for what looks good. Reconcile to billing and finance systems before trusting them.',
  4350238: 'A founder-selected cohort is the best cohort, not the average. Always ask to see the broader population.',
  4350239: 'LTV/CAC ratio is a heuristic; the underlying inputs (margin, retention, CAC) all need separate inspection.',
  4350240: 'Net-new ARR is the cleanest growth metric; blended ARR mixes growth with expansion. Decide which question you are asking.',
  4350241: 'Sales efficiency integrates magic number, CAC payback, and pipeline coverage. One metric in isolation rarely diagnoses.',

  // ---------- Chapter 4: Founder, Product, and Customer Evidence ----------
  4103002: 'Coachability shows in updating behavior, not in agreeableness. Trace whether the founder actually changed after evidence.',
  4105057: 'Founder-market fit means earned insight from real operating history — not category enthusiasm.',
  4107302: 'A reference call\'s job is to surface specifics the company will not. Push past politeness for behavior.',
  4107303: 'Solo founders carry more execution risk and slower hiring. The missing function predicts the early hire-and-fail.',
  4107773: 'How a founder handles bad news under pressure is the highest-information leadership signal you can get.',
  4280030: 'Switching costs come from integration depth and workflow lock-in, not from contract terms alone.',
  4350300: 'Founder-market fit is the earned, specific insight that comes from operating in the problem space directly.',
  4350301: 'Earned insight is concrete — names of customers, specific failure modes, dollar amounts. Vague is not earned.',
  4350302: 'A founder who has tried and failed prior approaches knows the boundary conditions better than a fresh entrant.',
  4350303: 'A founder who can name the buyer\'s job title, budget owner, and weekly workflow has done the work.',
  4350304: 'Without founder-market fit, the team is competing against people who already know the buyer. That gap is structural.',
  4350305: 'Coachability is the ability to update beliefs on new evidence — not deference.',
  4350306: 'Trace what the founder did after the last hard piece of evidence. Action, not language, is the signal.',
  4350307: 'Coachability under bad news is the higher bar. Anyone updates on good news; updating on bad news is the rarer skill.',
  4350308: 'Decision under pressure integrates speed, judgment, and emotional regulation. Probe past examples specifically.',
  4350309: 'A clean cofounder split is usually 50/50 or close. Lopsided splits embed conflict that surfaces later.',
  4350310: 'A 70/20/10 split tells you the cofounders already disagree about contribution. Ask why.',
  4350311: 'Cofounder conflict that has not been resolved before the round will resolve itself badly inside the company.',
  4350312: 'A missing function (no product, no engineering, no go-to-market) predicts the first painful hire.',
  4350313: 'Cofounder breakups within the first 18 months are the single most common terminal startup event. Probe stability hard.',
  4350314: 'Customer calls test for repeat behavior, not opinion. A call that produces no behavioral specifics is not signal.',
  4350315: 'Open-ended questions invite description; leading questions invite the answer the founder wants you to hear.',
  4350316: 'Founder-provided references are selected by definition. Source additional calls from the broader logo list.',
  4350317: 'Structure customer calls by cohort and outcome — pattern across calls beats depth of any single one.',
  4350318: 'Under time pressure, prioritize 4-5 calls covering the load-bearing questions over 10 shallow ones.',
  4350319: 'Product pull is users coming back without re-acquisition. Test for it in retention, expansion, and word-of-mouth.',
  4350320: 'Organic growth is the strongest pull signal — users acquired without paid spend or sales effort.',
  4350321: 'Expansion without prompting is the highest-confidence pull signal in B2B. Users buying more without being sold to.',
  4350322: 'NPS is a thin signal — useful as a directional check, not as evidence of pull. Behavior beats survey response.',
  4350323: 'In-product depth means users adopting multiple features and workflows. Single-feature usage limits expansion.',
  4350324: 'Product pull integrates organic growth, expansion, and depth. Any one alone is necessary but not sufficient.',
  4350325: 'Switching cost is the friction of leaving — integration, data migration, retraining, contractual exit.',
  4350326: 'Integration depth predicts switching cost. A product wired into five other systems has real lock-in.',
  4350327: 'Change-management costs are political, not technical. Buyers postpone switches that require human coordination.',
  4350328: 'Implementation friction scales with org size. The same product is easy at SMB and brutal at enterprise.',
  4350329: 'Roadmap risk is execution risk on the current plan — separate from pivot risk or competitive risk.',
  4350330: 'A velocity slowdown needs a diagnosis: technical debt, team transitions, or scope creep all surface the same way.',
  4350331: 'Technical debt overhang is real cost. Ask whether the migration meaningfully unlocks future velocity or is rework.',
  4350332: 'A platform vendor sees usage data, controls pricing, and may compete. The structural risk is the relationship, not the API.',
  4350333: 'Behavior questions ("walk me through the last time you used it") beat opinion questions. Behavior is harder to fake.',
  4350334: 'Hedged renewal language ("probably renew, assuming...") is a soft conviction signal. Trace the conditional clause.',
  4350335: 'Three "greats" without specifics is the polite-default pattern. Push for behavioral specificity to test it.',
  4350336: 'Behavioral expansion (users rolling out to new teams without being asked) is the strongest urgency signal.',
  4350337: 'A multi-call pattern of vague enthusiasm usually means the product is "nice-to-have" rather than essential.',
  4350338: 'SE capacity is a delivery constraint independent of pipeline volume. Both matter, both bind.',
  4350339: 'When deal complexity rises and SE headcount holds flat, conversion drops on capacity — not on skill or product.',
  4350340: 'Weighted pipeline assumes capacity to work it. Reps + SEs + cycle time set the achievable revenue ceiling.',
  4350341: 'Pilot-to-paid conversion in the 30-50% range is healthy; under 20% needs a diagnosis on budget or sponsorship.',
  4350342: 'Single-champion accounts are fine until the champion leaves. Test for broader organizational embedding.',
  4350343: 'Integrate the four lenses (founder, product, customer, coachability) — and name the load-bearing risk explicitly.',

  // ---------- Chapter 5: Terms, Memo, and Investment Decision ----------
  4103005: 'Non-participating preferred is a choice between preference and as-converted. Participating gets both.',
  4105060: 'Pro rata is the right to maintain ownership in future rounds. It does not affect price or block new investors.',
  4105061: 'A pre-money option pool dilutes founders, not the new investor. Model the effective valuation, not the headline.',
  4107306: 'SAFEs convert into the new round\'s cap table. Build the fully diluted table before believing any ownership number.',
  4107307: 'A board seat costs governance bandwidth. Evaluate against ownership, value added, and future board effectiveness.',
  4107776: 'Pay-to-play penalizes non-participation, usually by converting preferred to common. Read the penalty carefully.',
  4280040: 'Anchor to forward ARR multiple and comparable rounds. Then test whether the implied growth assumption is achievable.',
  4103007: 'A balanced memo has thesis, evidence, risks, mitigants, and kill criteria. Hidden risks always reappear.',
  4105064: 'Kill criteria name the specific evidence that would reverse the decision. Without them, the thesis is not falsifiable.',
  4350400: 'Pre-money vs post-money changes ownership by points. Lock the basis before touching any other math.',
  4350401: 'Standard stacks pay senior-most preferred first. Last-in tends to be first-out at exit.',
  4350402: 'Participating = preference + pro rata of remaining. Non-participating = the higher of preference or as-converted.',
  4350403: 'A participation cap binds when participating math exceeds the cap. Above the cap, conversion to common wins.',
  4350404: 'Walk the waterfall senior-to-junior, paying each class in full before the next. Common gets the residual if any.',
  4350405: 'Super pro rata is the right to invest above pro rata — increasing ownership, not just maintaining it.',
  4350406: 'Waiving pro rata is a portfolio construction trade. Measure expected return impact against the alternative reserves use.',
  4350407: 'Broad-based weighted-average is the standard modern term. Full ratchet is the harsh alternative — punishing and rare.',
  4350408: 'Apply the broad-based formula: new price = old price × (existing + new at old) / (existing + new at new).',
  4350409: 'A board seat is voting; an observer attends without a vote. The right asks vary with ownership and value-add.',
  4350410: 'Seed boards are usually founder-controlled. Investor seats matter most for Series A and later.',
  4350411: 'An independent breaks ties. The composition matters less than the principle that no party holds unilateral authority.',
  4350412: 'Protective provisions require investor consent for major actions. Read them carefully — they shape the next round.',
  4350413: 'Founder vesting aligns the cap table with future work. Without it, a founder can leave with all their equity intact.',
  4350414: 'A one-year cliff means no vesting until twelve months. Then monthly vesting through year four.',
  4350415: 'Single trigger = vesting accelerates on acquisition alone. Double trigger = acquisition + termination. The latter is standard.',
  4350416: 'Acceleration negotiation matters most for the founder personally — and matters most for the acquirer evaluating retention risk.',
  4350417: 'Information rights are the floor for fund reporting. They are negotiated, not assumed.',
  4350418: 'MFN clauses bind the founder to extend the same terms to future investors. Watch the side-letter ladder carefully.',
  4350419: 'MFN reads the side letter as a floor. Anything granted later that is more favorable extends backward to the MFN holder.',
  4350420: 'Drag-along forces minority shareholders into a sale the majority approves. Read the threshold carefully.',
  4350421: 'Tag-along lets minority shareholders join the sale; drag-along forces them in. They protect against opposite scenarios.',
  4350422: 'ROFR (right of first refusal) gives existing holders priority to buy shares before a third party. It slows secondaries.',
  4350423: 'SAFEs are simpler and skip interest accrual. Notes carry interest and a maturity. Both convert at the next round.',
  4350424: 'Pre-money SAFEs dilute later-arriving holders; post-money SAFEs lock the safe holder\'s percentage. The difference is real ownership.',
  4350425: 'Cap sets the maximum conversion valuation; discount sets the minimum. The investor takes the better of the two.',
  4350426: 'MFN on a SAFE means it auto-upgrades if a later SAFE has better terms. Read what triggers the upgrade.',
  4350427: 'Notes accrue interest until conversion or maturity. The interest converts alongside principal, increasing dilution.',
  4350428: 'Pre-money pool shifts dilution to existing holders. Model the effective per-share price net of the pool.',
  4350429: 'Option pool sizing should match a 12-18 month hiring plan — not a round-bound shortcut to dilute founders harder.',
  4350430: 'Pay-to-play converts non-participating preferred to common. The penalty is severe — model the cap-table outcome.',
  4350431: 'In a washout round, pay-to-play forces existing investors to participate or lose preference entirely.',
  4350432: 'Cumulative dividends accrue whether paid or not. Read the rate and the accrual basis carefully.',
  4350433: 'Redemption rights let investors force a buyback after a holding period. They are rare but consequential.',
  4350434: 'Registration rights govern IPO participation. They matter most when the company is close to a public exit.',
  4350435: 'Memos drowning in numbers without judgment are over-quantitative. The synthesis is what the partnership reads.',
  4350436: 'A hidden risk in the memo always reappears post-investment. Surface and mitigate, do not omit.',
  4350437: 'A lead\'s diligence carries scope and depth; a co-investor\'s does not need to replicate but should test the load-bearing claims.',
  4350438: 'Hot deals reward pricing discipline. Anchor to comps and forward revenue, not to the urgency of the close.',
  4350439: 'A single deal\'s allocation has to fit the fund\'s broader construction. The right check is the one the fund can sustain.',
  4350440: 'Fight on terms that matter for the next round (preference, board, anti-dilution); concede on lower-leverage points.',

  // ---------- Chapter 6: Portfolio Support and Follow-On Decisions ----------
  4105062: 'Translate runway into months and tie it to the milestones that make the next raise credible.',
  4103006: 'Trouble in updates needs early engagement, not template polish. Cash, milestones, financing, priorities — in that order.',
  4105063: 'Milestones, not hires, set the next-round bar. Hire to milestones, not in advance of them.',
  4107785: 'Reserves follow evidence and expected return impact. Splitting evenly funds the weaker outcome and underfunds the winner.',
  4107315: 'Bridge if 3-5 months buys real proof; restructure or wind down if it just extends the same conversation.',
  4280050: 'A markup is unrealized NAV. It carries real information but is not cash until DPI converts it.',
  4350500: 'A board meeting is the CEO\'s forcing function for honest reporting and decisions — not a status review for investors.',
  4350501: 'Page 1 is 5-8 numbers with plan vs actual and one-line interpretations. Everything else drills into one of them.',
  4350502: 'Reframe each section to end in an ask or a decision. Updates without action belong in the pre-read.',
  4350503: 'Updates can be pre-read. Meeting time is for decisions that need group debate.',
  4350504: 'ARR, NRR, gross margin, burn, runway — five numbers that tell the investor whether the business is alive.',
  4350505: 'Growth without retention or runway is half the picture. Ask for the durability and survival metrics.',
  4350506: 'Pattern breaks in reporting — omitted metrics, expanded narrative — usually precede pattern breaks in the business.',
  4350507: 'Over-reporting wins is a coping behavior. The fix is structural: standardize the template so omissions become visible.',
  4350508: 'The first question is whether the bridge buys real proof, not whether existing investors are willing to write the check.',
  4350509: 'Insider bridges run 1x preference plus 15-25% discount. 1.5x and 25% is at the aggressive end and worth negotiating.',
  4350510: 'Bridge tied to a credible burn-reduction plan with named cuts. Unconditional bridges to undisciplined founders are wasted capital.',
  4350511: 'Pro rata = existing ownership × new money raised. Not new money × post-money. Not a multiple of the existing stake.',
  4350512: 'Follow-on return = new ownership × exit value. Same multiple as seed at lower variance — the trade-off worth taking.',
  4350513: 'Rank by expected return impact per reserve dollar. Concentrate on the top, do not spread sub-scale across all three.',
  4350514: 'An insider round is priced and led by existing investors. Bridges are typically unpriced; insider rounds are not.',
  4350515: 'Insider rounds signal that no outside lead was available at the price. The read is mixed and lands at the next round.',
  4350516: 'A lower outside-led price often beats a higher insider-led number. New leads bring diligence, signal, and cap-table balance.',
  4350517: 'Mark on closing of a priced round at an arm\'s-length per-share price. Earlier or later both produce worse reporting.',
  4350518: 'Hold marks flat through material impairment misrepresents NAV. Markdown discipline distinguishes top-quartile funds.',
  4350519: 'Time alone is not a markup trigger. "Flat at cost, revisit on next financing event" is a defensible LP answer.',
  4350520: 'Source 3-5 candidates through your network and run an early filter. The investor opens the door; the CEO decides.',
  4350521: 'Broad intros without target precision dilute relationship capital. Push for ICP and named accounts first.',
  4350522: 'Coaching is highest-leverage early — before patterns calcify. Frame it as performance enhancement, not crisis intervention.',
  4350523: 'A 60-minute prep call surfaces the 2-3 likely tough questions. Best leverage on a board meeting comes before the meeting.',
  4350524: 'COO works if the CEO will genuinely cede operations. Diagnose whether the CEO is a builder or an operator first.',
  4350525: 'CRO fit comes when there is a team to lead, a repeatable playbook, and a plan beyond $5M ARR. Earlier is too soon.',
  4350526: 'Past $15M ARR with no full-time finance leader is overdue. The cost of the delay is invisible until it is not.',
  4350527: 'Stage-fit beats brand at seed. A senior AE who can sell beats a VP who manages a team that does not exist.',
  4350528: 'Burn cuts first, then evaluate runway. Cutting burn during a turnaround buys time the milestones need to land.',
  4350529: 'Milestones in a turnaround should be smaller, sooner, and verifiable. The original plan rarely survives the reset.',
  4350530: 'Leadership change in turnaround is a real lever, but a last one. Most turnarounds work through the existing CEO with structural support.',
  4350531: 'Exit types — IPO, strategic M&A, financial buyer, secondary — each have different timelines and valuation logic.',
  4350532: 'IPO timing depends on the public window, not internal readiness alone. The market opens and closes on its own clock.',
  4350533: 'Multi-bidder strategics let the seller run a process. Single-bidder negotiations are about creating leverage you do not have.',
  4350534: 'In a single-bidder negotiation, the alternative is "no deal." Test whether the buyer believes that.',
  4350535: 'Earnouts smooth valuation gaps but introduce post-close conflict. Retention is usually a structural term, not an earnout.',
  4350536: 'A down round reprices the entire stack. Existing preferred holders lose the most on dilution math.',
  4350537: 'A washout round collapses the prior cap table. Founders and early investors get diluted to near-zero.',
  4350538: 'Pay-to-play in a down round separates committed investors from passive ones. Participate or lose the preference.',
  4350539: 'Late-fund-life reserves rank against each other at every checkpoint. Past commitments are not future entitlements.',
  4350540: 'Founder burnout shows in update cadence, energy in calls, and turnover around them. Raise it directly and early.',
  4350541: 'Founder-CEO transitions are rare but consequential. Try COO first; transition last.',
  4350542: 'Cross-portfolio sharing helps when companies are non-competitive and complementary. Set ground rules first.',
  4350543: 'Cross-portfolio sharing leaks when companies are adjacent. Default to compartmentalization, open the channel deliberately.',

  // ---------- Capstone: Investment Pack and Synthesis (FieldChart) ----------
  4280100: 'A memo with conflicting evidence needs an explicit synthesis. State the load-bearing question and how the evidence resolves it.',
  4280101: 'Kill criteria are specific, measurable, time-bound. "Watch for slowing growth" is not a kill criterion.',
  4350600: 'Why-now needs an external change — labor scarcity, SLA pressure, mobile expectation — not category heat.',
  4350601: 'Position against the segment ServiceTitan already owns. FieldChart\'s mid-market wedge is the differentiator, not the feature set.',
  4350602: 'Specificity beats breadth: "50-500-truck mid-market HVAC, plumbing, electrical SMBs" beats "field service operators."',
  4350603: 'Founder-market fit anchors on the CEO\'s $30M HVAC operating history. Name the earned insight specifically.',
  4350604: 'Wedge-to-platform expansion works only if the dispatch wedge credibly opens adjacent budgets (parts inventory, financing).',
  4350605: 'A moat that holds for a year is integration depth and workflow lock-in — not feature parity with incumbents.',
  4350606: 'Name the specific observation that would reverse the recommendation. Without it, the thesis is not falsifiable.',
  4350607: 'Falsifiability separates a thesis from a slogan. The memo should specify the evidence that would prove it wrong.',
  4350608: 'Pre-empt the skeptical partner by naming their objection before they do. Then engage with it on its terms.',
  4350609: 'Bottom-up: target accounts × penetration × ACV. Build from the buyer up, not from category aggregates down.',
  4350610: 'TAM realism comes from the penetration assumption. 25% of the addressable mid-market is aggressive; defend it.',
  4350611: 'ACV depends on module attach. Single-module ACV undersizes the platform claim; full-stack ACV overstates conversion.',
  4350612: 'Segmentation by truck count and trade type is the wedge-relevant cut. Segmentation by geography is decorative here.',
  4350613: 'Adjacencies are real only when the customer overlap is concrete. Parts inventory, yes; consumer marketplace, no.',
  4350614: 'The map gap is mid-market — too big for paper, too small for ServiceTitan. That is FieldChart\'s entry pocket.',
  4350615: 'Defensible market boundaries come from buyer specificity and workflow depth, not from broad category claims.',
  4350616: 'Sector and stage fit to the fund\'s thesis: vertical SaaS at Series A with bottom-up adoption.',
  4350617: 'Frame on forward 12-month ARR (~7-8x), not trailing (20x). Make the growth-rate assumption load-bearing and visible.',
  4350618: 'Mix founder-provided with independently sourced calls. Structure by cohort to read change over time, not just sentiment.',
  4350619: 'Push past "love it" with counterfactual ("what would you do without it?"), frequency, and replacement-risk questions.',
  4350620: 'Flag the 15% concentration explicitly. Set the roll-up\'s renewal as a named diligence checkpoint.',
  4350621: 'Decompose 110% NRR by decile. If the top decile carries the number, the platform claim is weaker than the headline suggests.',
  4350622: 'Decompose CAC payback by motion. Blended 18 months is the average of two different businesses.',
  4350623: 'Reconcile the metrics export against the billing system. Founder-curated dashboards always need cross-system checks.',
  4350624: 'The dissenting reference is usually the highest-information call. Treat it as the signal, not the outlier.',
  4350625: 'Size the rewrite as a milestone — scheduled, funded, and named in the use-of-proceeds.',
  4350626: 'Quantify implementation cost as a percentage of first-year ACV. Decide explicitly: software with services, or services with software.',
  4350627: 'A consistent hedge across three calls tests the platform-expansion claim directly. Name the pattern.',
  4280102: 'Calibrate the recommendation language to the actual conviction. Conditional yes, not "strong yes" with caveats.',
  4350628: 'Total preference stack is $24M. Show the partnership the exit values where preference matters and where it does not.',
  4350629: '2 founder + 1 lead + 1 independent + 1 open seat balances control without unilateral authority. Observer for seed.',
  4350630: 'Partial re-vest on 25% with double-trigger acceleration. Full re-vest is overreach; zero re-vest leaves no alignment.',
  4350631: 'Pre-money pool top-up dilutes existing holders by convention. Model the founders\' post-money ownership explicitly.',
  4350632: 'Broad-based weighted-average is the market middle ground. Drop it or push for ratchet — both are wrong moves.',
  4350633: 'Syndicate at $12-15M to preserve check-size discipline. Reserves matter more than maximum allocation on this deal.',
  4350634: 'Engage the skeptic\'s objection on its own terms. Stacking positive evidence reads as evasion.',
  4350635: 'Kill criteria are specific, measurable, dated, and tied to a partnership response. Anything looser becomes decoration.',
  4350636: 'Recommendation up top. Partners read memos to test a conclusion, not to follow the diligence journey chronologically.',
  4350637: 'Conditional yes is the recommendation type for partial conviction. Name the open items and the test that would close them.',
  4350638: 'Monthly through the first six months — rewrite, retention test, hiring — then quarterly once those questions resolve.',
  4350639: 'KPIs should map to thesis or risk the IC committed to. Mid-decile NRR, ACV trend, gross margin net of services, rewrite status.',
  4350640: 'Partial pro rata at $15M respects the reserves model. Pulling reserves from other companies is how funds break.',
  4350641: 'Distinguish execution slip (recoverable) from thesis slip (terminal). Bridge if execution; do not bridge if thesis.',
  4350642: 'VP Engineering first to anchor the rewrite. Then VP Sales, then Customer Success. CFO is a Series B hire.',
  4350643: 'Three scenarios — base, upside, downside — each tied to specific assumptions. LPs trust scenarios over point estimates.',
  4350644: 'If the conviction is still there, participate in pay-to-play. The term is doing its job, not punishing you.',
  4350645: 'Private 1:1 first, framed as a question. COO as a middle step before any founder-CEO transition conversation.',
  4350646: 'Reserves re-rank at every checkpoint. FieldChart competes against the marginal dollar for other companies.',
}

// VC_CORRECT_SHORTENED — questions where the correct answer was substantially
// longer than the longest distractor. Each entry shortens `correct` to a
// punchier line and pushes the trimmed explanatory detail into `lessonAddendum`.

export const VC_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  4350006: {
    newCorrect: 'The reserve plan is a model, not a rule — break the ratio for genuine breakouts.',
    lessonAddendum: 'A reserves model that cannot bend for a top-quartile outcome is the wrong model. Reserves exist to follow conviction; the discipline is to break the ratio for genuine outliers, not casually, and to document the call.',
  },
  4350007: {
    newCorrect: 'Up to $15M of recycled proceeds, increasing invested capital beyond the original $100M.',
    lessonAddendum: 'Recycling lets the GP redeploy exit cash up to the cap before LPs receive distributions. The 20% provision sets the ceiling; specifics about timing windows and percentage of fund vs gross proceeds vary by LPA.',
  },
  4350011: {
    newCorrect: 'GPs receive carry only after the entire fund returns committed capital to LPs.',
    lessonAddendum: 'European (whole-fund) waterfalls protect LPs by delaying carry until all capital is returned, paying carry at the fund level rather than deal by deal. American (deal-by-deal) waterfalls accelerate GP payouts and almost always include clawback provisions.',
  },
  4350013: {
    newCorrect: 'GPs receive 100% of distributions after the hurdle until they have caught up to 20% of total profits.',
    lessonAddendum: 'After the catch-up phase completes, splits revert to 80/20. Catch-up provisions reconcile two LP-friendly features (a hurdle and 80/20 splits) by ensuring the GP still ends up with their target 20% of total economics once the hurdle clears.',
  },
  4350017: {
    newCorrect: 'Fund III is plausibly more impressive — early TVPI of 1.8x in year 3 implies aggressive markups.',
    lessonAddendum: 'Fund I needs to convert more of its 2.4x to DPI to validate the number. Early-vintage TVPI is heavily marks-driven and reversible; late-vintage TVPI should be converging on DPI. Cohort-relative comparisons are more useful than absolute numbers.',
  },
  4350018: {
    newCorrect: 'The annualized return that discounts fund cash flows back to zero — time-weighted, unlike a simple multiple.',
    lessonAddendum: 'IRR is the discount rate that makes the NPV of fund cash flows equal zero. Early distributions massively boost IRR; the same MOIC over a longer hold collapses IRR. LPs use IRR for vintage-year benchmarking.',
  },
  4350019: {
    newCorrect: '2.5x in year 3 is ~35% IRR; 4x in year 7 is ~22% IRR. The early exit wins on IRR.',
    lessonAddendum: 'Earlier exits punch above their weight on IRR because compounding favors shorter periods. Fund-level math may still prefer the longer hold if the absolute dollars matter more against fund-returner economics — but on isolated-investment IRR, faster usually wins.',
  },
  4350020: {
    newCorrect: 'Gross is before fees and carry; net is after both. The gap can exceed 0.5x on a strong fund.',
    lessonAddendum: 'For a 2-and-20 fund at 3x gross MOIC, the gross-to-net gap is roughly 0.4-0.7x. LPs see net cash-on-cash; GPs talk about gross. Always anchor on net for like-for-like comparisons across funds.',
  },
  4350021: {
    newCorrect: '40/60 — leading seed positions through Series B requires reserves that 50/50 often cannot fund.',
    lessonAddendum: 'Reserves ratio is downstream of ownership defense strategy. Lead seed investors who want to maintain double-digit ownership through Series B typically need 1:1.5 to 1:2 initial-to-reserve; participating-only seed funds can run leaner reserves.',
  },
  4350023: {
    newCorrect: 'Total exposure would be 15% of the fund — well above the soft 10% cap, requiring an explicit partnership decision.',
    lessonAddendum: 'Concentration limits force a decision: is this company a fund-returner that justifies the exposure? If yes, document the call. If no, the reserve plan needs to flex elsewhere. Quietly drifting above the cap is how funds become single-company stories.',
  },
  4350033: {
    newCorrect: 'FoFs add a fee layer (typically 1% + 5% carry) but give access and diversification a single LP cannot assemble alone.',
    lessonAddendum: 'The math works when an LP cannot otherwise get into top-decile funds or when assembling 15+ direct commitments is operationally infeasible. Most institutional LPs eventually move to direct relationships as their capacity grows.',
  },
  4350034: {
    newCorrect: 'The same GP setting price across both funds creates a fiduciary conflict — Fund II wants high, Fund III wants low.',
    lessonAddendum: 'Standard handling: LPAC approval, arms-length pricing (often anchored to a new third-party lead), and explicit disclosure. The cleanest deals have a separate independent lead setting the price the GP\'s funds participate in.',
  },
  4350035: {
    newCorrect: 'Late-stage private and public tech are increasingly the same asset class — valuations and exits blur.',
    lessonAddendum: 'Crossover funds (Tiger, Coatue\'s strategy) profited heavily in 2020-21 when private and public tech valuations moved together. The 2022 reset hurt them disproportionately because the same correlation worked in reverse. LPs view the strategy as more aggressive than traditional venture.',
  },
  4350036: {
    newCorrect: 'The 6x larger fund needs proportionally larger exits, pushing the GP into later-stage or higher-valuation entries.',
    lessonAddendum: 'A $1.2B fund at 3x net needs $4.8B+ of gross exits at typical ownership. AUM growth is one of the strongest predictors of future underperformance in venture, because the math forces the GP toward sectors and stages where their edge may be smaller.',
  },
  4350039: {
    newCorrect: 'After fund-level capital account math and any clawback reserves — usually weeks to months, not the same day.',
    lessonAddendum: 'Clawback reserves (10-30% of carry held back against future underperformance) delay full GP payout. GPs do not typically see same-cycle carry; multi-fund GPs build cash flow management around the timing.',
  },
  4350040: {
    newCorrect: 'About 2% of fund return capacity — meaningful but small against a power-law portfolio carried by the top exits.',
    lessonAddendum: 'Loss ratio (percentage of fund value lost in zero outcomes) is high in seed (often 40-60% of companies). The fund still works because the top outcomes are designed to overwhelm the losses. Funds break when the top outcome fails, not when the bottom outcomes do.',
  },
  4350041: {
    newCorrect: 'About 20-25 investments at roughly 1:1.5 to 1:2 initial-to-reserve — initials of $60-75M with the rest as reserves.',
    lessonAddendum: 'Portfolio construction ties together check size, ownership target, reserves, and fund size — they have to mathematically reconcile. Inconsistencies here are the most common reason small-fund GPs miss their stated strategy in practice. The math has to close before the first investment.',
  },
  4350100: {
    newCorrect: 'The category, why-now, the winning archetype, the founder profile, and what would falsify the thesis.',
    lessonAddendum: 'A useful 3-5 sentence thesis names what you\'re looking for, why now is the time, the type of winner you expect, the founder profile that fits, and the specific evidence that would prove you wrong. Without the falsifiability clause, it is marketing language.',
  },
  4350101: {
    newCorrect: 'The thesis is not falsifiable — no observation could disprove "AI will transform every business."',
    lessonAddendum: 'A thesis that cannot be tested against portfolio outcomes is not a thesis — it is a slogan that justifies any investment. "Vertical AI for accounting wins because incumbents cannot rebuild their stack within 24 months" is testable; "AI is transformative" is not.',
  },
  4350102: {
    newCorrect: 'The statement names a trend, not a thesis — an investable thesis identifies the business model, buyer, and timing.',
    lessonAddendum: 'Trends are necessary but not sufficient. A thesis converts a trend into an investable hypothesis with a specific business model, buyer, and timing window. The discipline is "what kind of climate company wins, and why specifically now?"',
  },
  4350103: {
    newCorrect: 'Update the thesis to incorporate the new evidence — describe how AI changes the wedge, moat, and timing.',
    lessonAddendum: 'Theses are living documents. The discipline is to update on real evidence (not noise) and to be explicit about what changed. Funds that never update are usually overconfident; funds that update constantly have no thesis at all.',
  },
  4350104: {
    newCorrect: 'Bottom-up — it ties to buyers, price, and adoption that an investor can test, while top-down is hard to verify.',
    lessonAddendum: 'Bottom-up market sizing forces specificity: who buys, at what price, how many of them, and what penetration is plausible. Top-down sizing is useful as a sanity check on the bottom-up; used alone, it almost always overstates the reachable market by 10-100x.',
  },
  4350127: {
    newCorrect: 'Find a structural reason the incumbent cannot follow — channel conflict, legacy code, or pricing model.',
    lessonAddendum: 'Category disruption works when the incumbent has a structural reason not to compete — high-touch sales doesn\'t reach SMBs, legacy code can\'t support real-time, channel conflict, etc. Without that structural protection, the new entrant has to outspend the incumbent at every step.',
  },
  4350129: {
    newCorrect: 'Ask what specific advantage gives this entrant a credible path to leadership despite the crowded field.',
    lessonAddendum: 'Overcrowded markets often have one or two winners that consolidate; everyone else underperforms. The investable question is what specific reason this entrant has to be in that top tier, not whether the category is "interesting." Without a clear answer, the deal is a coin flip.',
  },
  4350130: {
    newCorrect: 'No competitors often means no validated market — buyers may not yet recognize the problem as a budget category.',
    lessonAddendum: '"No competitors" should trigger the question: is this a real market that incumbents missed, or a non-market? Verify by talking to buyers — if they say "yes I would buy this," ask "would you write a budget line item." Budget reality, not interest, defines the market.',
  },
  4350131: {
    newCorrect: 'Axes that separate competitors on strategic dimensions buyers actually care about — e.g., individual vs enterprise × stand-alone vs integrated.',
    lessonAddendum: 'Useful competitive map axes are dimensions on which buyers actually choose. The axes should produce visible clusters and visible gaps. If the axes don\'t cluster, they\'re the wrong axes; try different ones until the map reveals structure.',
  },
  4350132: {
    newCorrect: 'Ask which feature buyers can\'t get anywhere else and which one would make a buyer switch incumbents.',
    lessonAddendum: 'Real differentiation passes the buyer switch test: would a current customer of incumbent X actually switch for this feature? If yes, it\'s a differentiator. If no, it\'s a competitive parity feature. Most feature lists shrink to 1-2 real items under this test.',
  },
  4350135: {
    newCorrect: 'Specialists build vertical depth and pattern recognition; generalists have broader opportunity sets but less edge per category.',
    lessonAddendum: 'Small funds usually pick one position. Specialists build vertical edge (networks, expertise, pattern recognition) and become the default first call in their category. Generalists need other forms of edge (brand, founder relationships, speed) to compete. Hybrid positions often confuse both founders and LPs.',
  },
  4350136: {
    newCorrect: 'Pre-seed requires team conviction (little data exists), accepts higher mortality, and works only with small checks.',
    lessonAddendum: 'Stage choice shapes everything: check size, ownership math, diligence depth, expected mortality, follow-on requirements. Pre-seed favors team conviction and small check / high count; seed favors evidence-based diligence and larger checks. Funds that "do both" without clear allocation often drift to seed.',
  },
  4350137: {
    newCorrect: 'It surfaces the specific reasons the fund missed real winners, helping the partnership update its filter.',
    lessonAddendum: 'A useful anti-portfolio is analyzed, not just listed. The diagnostic question is "what about our filter caused this miss?" — and is the filter wrong for this category, or is the company an outlier our filter shouldn\'t have caught? Updates flow from the pattern, not the individual deal.',
  },
  4350138: {
    newCorrect: 'About 1,000 initial founder meetings per year — roughly 20 per week to deliver 10 investments.',
    lessonAddendum: 'Sourcing is a volume + conversion business. Most seed funds need 1,000+ first meetings per year to make 10 investments. Failing to hit volume usually means missing the year\'s deployment target; failing to convert means the thesis or process needs sharpening.',
  },
  4350141: {
    newCorrect: 'Accelerate the highest-signal checks — customer calls, references, market reality — and skip the long-tail items.',
    lessonAddendum: 'Hot deals are real and rewardable, but they need triage discipline. Prioritize the highest-signal diligence items (3-5 customer calls, 2 deep references, founder market test) and accept that some long-tail items will be skipped. If those high-signal items don\'t clear, fast or slow doesn\'t matter — pass.',
  },
  4350142: {
    newCorrect: 'Heavy on (a) — deep vertical relationships compound edge and require less capital than the alternatives.',
    lessonAddendum: 'Small funds win by being the default first call in a tightly-defined niche. That requires deep vertical relationships, sharp thesis, and visible expertise — usually in that order. Brand and outbound support the vertical strategy; they rarely replace it at sub-$50M fund size.',
  },
  4350143: {
    newCorrect: 'A one-page synthesis: where the gap is, which pipeline companies can win it, what it implies for check and ownership.',
    lessonAddendum: 'A market map\'s output is a synthesis, not a directory. Without that synthesis, the map is a tracker — useful as input but not decision-grade for the partnership.',
  },
  4350202: {
    newCorrect: 'True recurring ARR is closer to $2.6M — one-time fees do not recur and should not be annualized.',
    lessonAddendum: 'One-time fees, professional services, and implementation revenue routinely get folded into ARR. The investor\'s job is to strip them out and report only what will repeat next year without new selling effort.',
  },
  4350203: {
    newCorrect: 'A single anomalous month is not a run-rate — the trailing pattern suggests a durable base closer to $3.4M ARR.',
    lessonAddendum: 'MRR × 12 only describes the business when monthly revenue is stable. A single high month, a pull-forward, or a lumpy enterprise close can inflate ARR by multiples. Always look at the trailing three to six months before believing a headline number.',
  },
  4350206: {
    newCorrect: 'Heavy churn (25%) is being masked by aggressive expansion in a small number of accounts — concentration risk is high.',
    lessonAddendum: 'When the NRR-GRR gap is wide, expansion is typically lumpy in a handful of accounts. That makes the business vulnerable: a single large customer leaving can turn 130% NRR into 95% overnight.',
  },
  4350207: {
    newCorrect: 'Small customers are churning while a few large customers expand — the business depends on the surviving accounts.',
    lessonAddendum: 'When logo retention is much weaker than revenue retention, you are looking at SMB churn masked by enterprise expansion. The diligence question becomes whether the enterprise concentration is durable and what happens when one large account leaves.',
  },
  4350230: {
    newCorrect: 'Quality of revenue integrates margin, recurrence, concentration, and predictability — not the headline ARR.',
    lessonAddendum: 'A clean quality-of-revenue read combines: recurring vs one-time, margin profile, customer concentration, contract length and renewal proximity, and dependence on services. Headline ARR alone never answers it.',
  },
  4350340: {
    newCorrect: 'The capacity stack — reps, SEs, procurement time — may not support pipeline volume; reported pipeline overstates revenue.',
    lessonAddendum: 'The gap between weighted pipeline and bookable revenue is one of the most consistently underestimated diligence questions. Pipeline math assumes capacity to work the pipeline; when reps, SEs, or procurement throughput is constrained, the conversion rate slips below the historical assumption.',
  },
  4350343: {
    newCorrect: 'A mixed but recoverable picture — strong founder and pull, but coachability and customer conviction need explicit monitoring.',
    lessonAddendum: 'Integration across founder, product, and customer evidence is exactly the capstone diligence skill. No single dimension dominates; the partnership has to weigh each, identify the load-bearing risks, and decide whether to invest with a watch list, pass, or re-engage when specific signals improve.',
  },
  4350401: {
    newCorrect: 'Series C is senior — it gets paid first, then B, then A, with common last.',
    lessonAddendum: 'In standard stacks, later-stage preferred is senior. At a $100M exit with $160M of preferences in this structure, Series C is paid first ($80M), then Series B gets the remaining $20M, and Series A plus common get zero. Knowing seniority decides who gets wiped.',
  },
  4350402: {
    newCorrect: 'Participating: $10M + 20% of $90M = $28M. Non-participating: max($10M, $20M) = $20M.',
    lessonAddendum: 'Participating preferred ("double dip") = preference + pro rata of remaining. Non-participating = the higher of preference or as-converted. The gap widens as exit value grows — $8M difference at $100M, much larger at $500M.',
  },
  4350403: {
    newCorrect: 'The cap binds when participating math exceeds 2x ($20M). At $200M, the investor takes the higher of cap or as-converted ($40M).',
    lessonAddendum: 'A capped participating preferred lets the investor choose: cap value, or convert to common. Above the cap, conversion wins. The cap turns participation from "double dip forever" into "double dip up to a ceiling, then standard conversion behavior."',
  },
  4350404: {
    newCorrect: 'Series B receives $40M; the remaining $10M goes to Series A (two-thirds covered); Seed and common get zero.',
    lessonAddendum: 'In a sub-preference exit, the junior tranches and common are wiped. This is exactly why founders pay attention to the total preference stack accumulating across rounds — every new senior round pushes prior rounds down the waterfall.',
  },
  4350406: {
    newCorrect: 'Frame it as portfolio construction — keep pro rata if return-impact exceeds the alternative; waive if not.',
    lessonAddendum: 'Pro rata waiver is a reserves vs concentration trade-off. The right answer is rarely a reflex; it is portfolio math weighted by expected return-impact across the reserve set. Negotiate a partial pro rata if there is middle ground.',
  },
  4350407: {
    newCorrect: 'Broad-based weighted-average adjusts the conversion price modestly; full ratchet resets to the new round price entirely.',
    lessonAddendum: 'Broad-based weighted-average is the modern default and is roughly proportional to round-size impact. Full ratchet is punishing — even a tiny down round resets the entire prior conversion price. Most founders refuse full ratchet, and most institutional investors accept broad-based.',
  },
  4350408: {
    newCorrect: 'About $4.17 per share — adjusted modestly toward the down-round price by the weighted-average formula.',
    lessonAddendum: 'Broad-based weighted-average formula: new conversion price = old price × (existing shares + new money at old price) / (existing shares + new shares actually issued). Result here lands near $4.17, modestly down from $5 but well above $2.50. The investor gets some extra shares on conversion, but not the full ratchet windfall.',
  },
  4350438: {
    newCorrect: 'Anchor to comps and forward revenue. Hot deals reward pricing discipline, not urgency-driven concessions.',
    lessonAddendum: 'Pricing discipline on hot deals: forward ARR multiple, recent comparable rounds, ownership target. Headline pressure is real but the math has to close. Funds that overpay on hot deals because of urgency consistently underperform funds that pass when the math does not work.',
  },
  4350502: {
    newCorrect: 'Reframe each section to end with an explicit ask or decision needed — "I need help with X" or "we need to decide Y."',
    lessonAddendum: '"Asks not updates" is the simplest reframe for a flat board. Every section ends with either a specific ask the board can act on or a decision the board needs to make. Updates that lead to nothing actionable should be in the pre-read, not the meeting.',
  },
  4350503: {
    newCorrect: 'Decisions are the board\'s highest-leverage contribution; updates can be pre-read in writing.',
    lessonAddendum: 'The CEO\'s job in advance: send a 5-page pre-read with updates so the meeting starts at decisions. The board\'s job in the meeting: spend 70-80% of the time on the 2-3 decisions that need group debate. Updates without decisions is a calendar problem dressed up as governance.',
  },
  4350506: {
    newCorrect: 'Pattern-break signals — quietly omitted metrics, expanded commentary, rising burn — often precede explicit bad news.',
    lessonAddendum: 'Pattern breaks in reporting almost always precede pattern breaks in the business. The right move is a direct, non-confrontational question: "I noticed NRR was not in this month\'s update — what is it tracking at?"',
  },
  4350507: {
    newCorrect: 'The founder is curating for confidence rather than reporting honestly — the omitted metrics are likely deteriorating.',
    lessonAddendum: 'Over-reporting wins is a coping behavior. The fix is structural: ask the founder to standardize the monthly metric set so omissions become visible. Curation looks fine in isolation; against a standard template, it becomes obvious within one cycle.',
  },
  4350510: {
    newCorrect: 'Decline the bridge or condition it on substantial burn reduction first.',
    lessonAddendum: 'Letting burn force discipline is one of the hardest portfolio decisions. Founders read it as abandonment; partners read it as triage. The correct framing is conditional: bridge tied to a credible burn-reduction plan with named cuts and a milestone retest. Unconditional bridges to founders who will not cut are usually wasted capital.',
  },
  4350513: {
    newCorrect: 'Rank by expected return-impact per dollar and concentrate on the top one or two, not all three at sub-scale.',
    lessonAddendum: 'Reserves discipline: rank by expected return impact (probability of fund-returning outcome × ownership × exit potential). Concentrate, do not spread. Spreading $20M across three companies at sub-scale produces a worse distribution than $14M concentrated on the strongest. The discomfort of telling B and C "no" is the cost of good portfolio construction.',
  },
  4350515: {
    newCorrect: 'Mixed — it shows insider belief but raises the question of why no outside lead would price the company.',
    lessonAddendum: 'The insider-round signal is read at the next round, not at the time of the round. A flat insider round followed by strong outside-led Series C reads as "existing investors held the line through a tough quarter." Flat insider round followed by another flat insider round reads as "no one outside is willing to buy this story."',
  },
  4350516: {
    newCorrect: 'Often the outside-led round at the lower price wins — new diligence, market validation, and cap-table balance.',
    lessonAddendum: 'A new outside lead at a lower price is often more valuable than a higher insider-led number. The new lead brings diligence, validates the company in the market, and gives the next round investor someone outside the existing cap table to reference. Founders who optimize for headline valuation in this trade-off frequently regret it 12-18 months later.',
  },
  4350518: {
    newCorrect: 'Mark down to reflect impaired value — fund accounting requires writing down material impairment even absent a new round.',
    lessonAddendum: 'Markdowns are the asymmetric counterpart to markups. Most GPs are quick to write up on new rounds and slow to write down without one — that is the systematic bias auditors push back on. Honest markdown discipline often distinguishes top-quartile funds from middling ones in LP reviews. The mark should reflect a defensible best-estimate value, often using comparable transactions or a discounted cash flow proxy.',
  },
  4350524: {
    newCorrect: 'A COO works if the CEO will genuinely cede operations — diagnose whether the CEO is a builder or an operator first.',
    lessonAddendum: 'COO hires fail when the CEO cannot let go. The diagnostic question is "what does the CEO actually want to spend time on?" — if the answer is product and vision, COO works. If the answer is everything, COO becomes a frustrated layer that the CEO routes around. Make sure the CEO has actually answered that question before pushing the hire.',
  },
  4350525: {
    newCorrect: 'CRO fit needs a team to lead, a repeatable playbook, and a $5M+ ARR plan — too early and the CRO has nothing to lead.',
    lessonAddendum: 'CRO timing: usually mid-Series A through early Series B. Earlier and there is no team for them to lead. Later and the founder has already built a scaffolding that the CRO has to re-engineer. Stage-fit on the CRO\'s prior company matters more than headline brand — a CRO who scaled from $5M to $25M ARR is more relevant than one who joined at $100M.',
  },
  4350526: {
    newCorrect: 'A CFO is overdue — $15M ARR with no full-time finance leader means risk of a costly miss is now real.',
    lessonAddendum: 'CFO hires often come a quarter or two too late. The cost of the delay is rarely visible — until a fundraising process exposes a financial model the CEO patched together at midnight, or an audit catches a revenue recognition error. $15M+ ARR is past the point where one full-time finance leader more than pays for themselves.',
  },
  4350527: {
    newCorrect: 'Enterprise VPs need infrastructure that seed companies lack — the right hire at seed is usually a senior AE who can sell.',
    lessonAddendum: 'Pedigree at the wrong stage is the most common failure mode of early exec hires. Stage-fit beats brand at seed. A VP Sales of an enterprise org without BDRs, SEs, and marketing pipeline becomes a manager with nothing to manage.',
  },
  4350600: {
    newCorrect: 'Mid-market trade contractors are crossing the threshold where mobile-first dispatch is no longer optional.',
    lessonAddendum: 'Labor scarcity and customer-SLA pressure are forcing software adoption in a segment that ran on paper and ServiceTitan-for-enterprise five years ago. A real why-now cites the discrete external change, not category heat.',
  },
  4350617: {
    newCorrect: 'Frame on forward 12-month ARR (~7-8x) and compare to comparable Series A vertical SaaS rounds.',
    lessonAddendum: 'Flag the growth-rate assumption as the load-bearing input — if growth halves, the multiple roughly doubles. Forward-revenue framing is the standard language partnerships use because it keeps the growth assumption visible and the comp set legible.',
  },
  4350618: {
    newCorrect: 'Mix founder-provided references with 4-6 calls you source independently; structure by cohort to read change over time.',
    lessonAddendum: 'Founder-provided references are by definition selected. They are useful but cannot stand alone, because the load-bearing question is what non-favorable customers say. A serious customer-call plan triangulates across both source types and cohort vintages.',
  },
  4350619: {
    newCorrect: 'Ask counterfactual, frequency, replacement-risk, team-adoption-variance — the depth questions polite "love it" calls skip.',
    lessonAddendum: 'A reference call earns its keep through depth questions: counterfactual ("what would you do without it?"), frequency, replacement risk, team adoption variance. "Love it" is where the call starts, not where it ends — and the variance inside the team is usually where the most interesting signal lives.',
  },
  4350621: {
    newCorrect: 'NRR is concentrated in the top decile — the headline overstates the platform claim; test replicability in diligence.',
    lessonAddendum: 'NRR decomposition is the most important diligence move at this stage. A 110% blended figure can mean "every customer is expanding modestly" (great) or "two customers are carrying the number" (a different deal). The memo should make the partnership see which shape is true.',
  },
  4350622: {
    newCorrect: 'Decompose by motion — sales-led and self-serve almost certainly differ materially; the partnership needs both figures.',
    lessonAddendum: 'Blended CAC payback across two motions is one of the most common quietly-misleading figures in a Series A deck. The right move is always to split — sales-led versus self-serve, segment by ACV, by cohort — because the underlying economics almost always differ in ways that change the deal.',
  },
  4350624: {
    newCorrect: 'Treat the dissenting reference as the highest-information signal — warm references are the default.',
    lessonAddendum: 'Founder reference patterns mostly live in the dissenting calls. The right discipline is to treat the negative reference as the call to follow up on, not to discount — and to make the pattern (e.g. micromanagement, early-VP burn) explicit in the memo so the partnership can decide whether it is a coachable issue or a structural one.',
  },
  4350626: {
    newCorrect: 'Quantify implementation as a percentage of first-year ACV. Decide: software with services, or services with software.',
    lessonAddendum: 'The services-or-software question changes the entire shape of the business: gross margin, scalability, comp set, exit multiple. The memo has to make the partnership see which the company actually is — and either commit to the services trajectory or commit to retiring it.',
  },
  4350627: {
    newCorrect: 'The wedge works but the platform claim is weaker — customers are not replacing adjacent tools, which tests the TAM build.',
    lessonAddendum: 'Customer calls rarely deliver clean negative signal — most useful information arrives wrapped in politeness. The discipline is to notice the pattern in the hedges and trace it to the part of the thesis it tests. Here, parallel-tool usage directly probes the platform-expansion claim and should be flagged in the memo.',
  },
  4350629: {
    newCorrect: 'Two founder seats, one lead, one mutually-agreed independent, one open seat by mutual consent; observer for seed.',
    lessonAddendum: 'Board composition at Series A balances three things: founders retain operational legitimacy, investors retain oversight on consequential decisions, and an independent breaks ties on contested issues. The exact configuration matters less than the principle that no single party should hold unilateral authority.',
  },
  4350630: {
    newCorrect: 'Propose a 3-year re-vest on 25% of founder equity with a 1-year cliff and double-trigger acceleration.',
    lessonAddendum: 'Partial re-vesting with a cliff and double-trigger is the standard middle ground at Series A. It signals alignment without insulting the founders, and it gives the partnership comfort that the next four years of work are also under vest. Full re-vesting fully earned equity is overreach and will torpedo the deal.',
  },
  4350633: {
    newCorrect: 'Syndicate — write $12-15M as lead and bring in a co-investor for the remaining $5-8M.',
    lessonAddendum: 'Allocation discipline is what protects fund construction over a vintage. A single $20M check is not the problem; the problem is what it implies for the other 24 deals the fund needs to make and the reserves it needs to deploy. Syndication preserves both check-size discipline and the reserves for the company\'s Series B follow-on.',
  },
  4350634: {
    newCorrect: 'Engage her objection directly with two specific diligence steps; offer to let her drive one.',
    lessonAddendum: 'A skeptical partner is not an obstacle to route around — she is part of the diligence team. Meeting her objection on its terms (cohort-level retention check, mid-market sales-cycle review) is more persuasive than overwhelming her with positive evidence. Engaging early is what actually moves the conviction.',
  },
  4350635: {
    newCorrect: 'Two or three specific, measurable, time-bound criteria, each tied to a clear partnership response if triggered.',
    lessonAddendum: 'Kill criteria function only when they are specific, measurable, dated, and tied to a partnership response. Examples: "mid-decile NRR below 105% at the next quarter close" or "rewrite slippage past Q3." The discipline of writing them down at the moment of commitment — not later — is what makes them load-bearing rather than performative.',
  },
  4350636: {
    newCorrect: 'Recommendation first (ownership, check, conditions), then thesis, market, evidence, risks, terms.',
    lessonAddendum: 'A working IC memo leads with the recommendation (ownership, check size, conditions) and lets the body of the memo prove or disprove it. This structure works because partners read memos like a sentence with footnotes — verdict first, evidence underneath, kill criteria last.',
  },
  4350637: {
    newCorrect: 'Conditional yes — subject to closing the NRR check and the outstanding reference, with named kill criteria.',
    lessonAddendum: 'Conditional yes is the recommendation type that exists specifically for partial conviction. Naming the unresolved items, the test that would close them, and the kill criteria that would reverse the decision is what makes the recommendation honest. Partners trust honest recommendations more than confident ones.',
  },
  4350638: {
    newCorrect: 'Monthly through the first 6 months — rewrite, hiring, retention test — then quarterly once those resolve.',
    lessonAddendum: 'Board cadence should match the density of unresolved questions, not the stage of the company. For FieldChart, monthly through the first 6 months — covering the rewrite, the mid-decile retention test, and exec hiring — then quarterly is the right shape. Cadence is a tool, not a status.',
  },
  4350640: {
    newCorrect: 'Partial pro rata at $15M from reserves — preserves construction without breaking the reserves model.',
    lessonAddendum: 'Follow-on math is where fund construction discipline meets deal-level conviction. The marginal $5M would come from a new co-investor or the fund passes on the marginal dilution. Partial pro rata using the reserves committed to that company — without raiding other reserves and without breaking the model — is usually the right answer. The fund\'s job is the portfolio, not a single deal.',
  },
  4350641: {
    newCorrect: 'Distinguish execution slip (recoverable) from thesis slip (terminal) — bridge if execution, do not if thesis.',
    lessonAddendum: 'Bridge triage is execution-vs-thesis. The same surface fact — growth slipping — can mean a recoverable execution problem or a broken thesis. The honest framework is to identify which, and then size the bridge against named milestones if the answer is execution.',
  },
  4350642: {
    newCorrect: 'VP Engineering first (anchor the rewrite), then VP Sales, then VP Customer Success; CFO is a year out.',
    lessonAddendum: 'Executive hiring sequence at Series A should follow the load-bearing risks the IC memo identified. For FieldChart, that means engineering before sales before customer success — CFO is a Series-B-window hire. The wrong order produces a board year of broken handoffs.',
  },
  4350645: {
    newCorrect: 'Raise directly in a private 1:1 — framed as a question, with COO as the middle step before any transition.',
    lessonAddendum: 'Founder transitions are about the relationship as much as the business. Raising the question privately, framing it as a problem to solve together (COO first, transition later), and respecting the founder\'s dignity is the move that preserves the option to escalate later if needed.',
  },
  4350646: {
    newCorrect: 'Re-rank reserves across the portfolio — if conviction in FieldChart holds, reserves stay; if thesis bends, they rotate.',
    lessonAddendum: 'Late-fund-life reserve discipline is the hardest part of portfolio management. The partnership has to be willing to re-rank — to rotate reserves toward the companies that have earned them and away from those whose thesis is bending. The job is the vintage, not any single deal.',
  },
}
