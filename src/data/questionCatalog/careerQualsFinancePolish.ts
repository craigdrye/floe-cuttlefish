// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the canonical Finance qualifications roadmap (CFA Level I + CPA Exam,
// ~78 questions across the two tracks).
//
// CAREER_QUALS_FINANCE_SUB_TOPICS groups each chapter's questions into
// lesson-shaped clusters (capped at 8 per chapter to match lesson grouping).
//
// CAREER_QUALS_FINANCE_MENTOR_HINTS overrides the generic Career-Skills
// scaffold hint with a one-line second-person nudge that names the reasoning
// move without giving the answer — voice: senior finance practitioner and
// CFA charterholder mentoring a junior analyst or first-year CPA candidate.
//
// CAREER_QUALS_FINANCE_CORRECT_SHORTENED trims `correct` strings flagged by
// the length-heuristic audit (correct ≥1.8x longer than longest wrong AND
// ≥20 chars longer). Trimmed explanatory clauses are reattached via
// `lessonAddendum` so no information is lost.

export const CAREER_QUALS_FINANCE_SUB_TOPICS: Record<string, number[]> = {
  // ============================================================
  // CFA LEVEL I
  // ============================================================

  // -------------------- Chapter 1: Ethics, Standards, and Professional Reflexes
  'Soft Dollars and Best Execution': [4250000],
  'Priority of Transactions': [4250001],
  'Material Nonpublic Information': [4250002],
  'Referral Fees and Disclosure': [4250003],

  // -------------------- Chapter 2: Quantitative Methods and the Analyst Calculator
  'Time Value and Annuity Timing': [4250004],
  'Geometric vs Arithmetic Returns': [4250005],
  'Nominal, Effective, and Compounding': [4250006],
  'Correlation and Causation': [4250007],
  'Bayes and Base Rates': [4250008],

  // -------------------- Chapter 3: Economics for Market Context
  'Currency Quote Conventions': [4250009],
  'Elasticity of Demand': [4250010],
  'Real Rates and Fisher': [4250011],

  // -------------------- Chapter 4: Financial Statement Analysis
  'Inventory Method Comparability': [4250012, 4250015],
  'Capitalisation vs Expense': [4250013],
  'Earnings Quality and Cash Flow': [4250014],
  'Deferred Taxes': [4250016],
  'Ratio Interpretation': [4250017],

  // -------------------- Chapter 5: Corporate Issuers and Capital Decisions
  'NPV and Decision Rules': [4250018],
  'Sunk Costs and Incremental CF': [4250019],
  'Flotation Cost Treatment': [4250020],
  'Working Capital Trade-offs': [4250021],

  // -------------------- Chapter 6: Equity Investments
  'Multiples and Normalisation': [4250022],
  'Book Value and Asset Quality': [4250023],
  'DDM vs FCF Models': [4250024],
  'Voting Rights and Governance': [4250025],
  'Order Types and Liquidity': [4250026],

  // -------------------- Chapter 7: Fixed Income
  'Duration and Rate Sensitivity': [4250027],
  'Embedded Options in Bonds': [4250028],
  'Yield Curve Shape': [4250029],
  'Credit Spreads': [4250030],
  'Bond Pricing Mechanics': [4250031],

  // -------------------- Chapter 8: Derivatives Without the Fog Machine
  'Option Payoffs at Expiry': [4250032],
  'Forwards as Commitments': [4250033],
  'Futures Mark-to-Market': [4250034],

  // -------------------- Chapter 9: Alternative Investments
  'NAV and Appraisal Smoothing': [4250035],
  'Hedge Fund Fee Economics': [4250036],
  'Private Equity J-Curve': [4250037],

  // -------------------- Chapter 10: Portfolio Management and Risk
  'Diversification vs Concentration': [4250038],
  'IPS Constraints': [4250039],
  'Rebalancing Discipline': [4250040],
  'Standard Deviation and Dispersion': [4250041],
  'Tracking Error and Active Risk': [4250042],
  'Objectives vs Tolerance': [4250043],

  // -------------------- Chapter 11: Integrated Practice and Exam Strategy
  'Except-Question Discipline': [4250044],
  'Reasonableness Checks': [4250045],
  'Recovering from Memory Gaps': [4250046],

  // ============================================================
  // CPA EXAM (Ledger Quest)
  // ============================================================

  // -------------------- Chapter 2: FAR Core
  'Subsequent Events': [4250100],
  'Capitalisation vs Repair': [4250101],
  'Lease Identification': [4250102],
  'Revenue Recognition and ASC 606': [4250103],
  'Loss Contingencies': [4250104],
  'Bond Premium Amortisation': [4250105],
  'Indirect-Method Cash Flow': [4250106],
  'Inventory Write-Downs': [4250107],
  'Consolidation Eliminations': [4250108],
  'Not-for-Profit Restrictions': [4250109],
  'Pension Discount Rates': [4250110],
  'Governmental Modified Accrual': [4250111],

  // -------------------- Chapter 3: AUD Core
  'Evidence Reliability Hierarchy': [4250200, 4250207],
  'Direction of Audit Testing': [4250201, 4250202],
  'Walkthroughs and Control Understanding': [4250203],
  'Sampling and Exceptions': [4250204, 4250209],
  'Audit Reporting Modifications': [4250205, 4250206],
  'Legal Letters and Contingencies': [4250208],
  'Aggregated Misstatements': [4250210],
  'Auditor Independence': [4250211],
  'Manual JE and Fraud Risk': [4250212],

  // -------------------- Chapter 4: REG Core
  'Mixed-Use Deductions': [4250300, 4250303],
  'Preparer Ethics and Circular 230': [4250301],
  'Dependency Tests': [4250302],
  'Like-Kind and Property Type': [4250304],
  'S Corporation Mechanics': [4250305, 4250306],
  'Estimated Payments': [4250307],
  'Agency and Authority': [4250308],
  'Suretyship and Guaranty': [4250309],

  // -------------------- Chapter 5: Discipline Choice Studio (BAR, ISC, TCP)
  'Variance Analysis': [4250400],
  'Relevant Costs and Special Orders': [4250401],
  'Constrained-Resource Ranking': [4250402],
  'Flexible Budgets': [4250403],
  'IT Access Controls': [4250404],
  'Change Management': [4250405],

  // -------------------- Chapter 6: Simulations, Research, and Workpaper Craft
  'Simulation Triage': [4250500],
  'Codification Research Precision': [4250501],
  'Tie-Out Debugging': [4250502],

  // -------------------- Chapter 7: Exam Strategy and Candidate Stamina
  'Quarterly Tax Cadence': [4250600],
}

export const CAREER_QUALS_FINANCE_MENTOR_HINTS: Record<number, string> = {
  // ---------- CFA Level I: Chapter 1 — Ethics and Professional Reflexes ----------
  4250000: 'Standards on brokerage routing live or die on client benefit, disclosure, and best execution. Analyst convenience is not on the list.',
  4250001: 'Ask who got to act first. The Standard is about sequencing, not whether the trade itself is allowed.',
  4250002: 'MNPI liability turns on what you do with the tip, not how it landed in your lap. Trading, encouraging trades, or selective sharing all fail.',
  4250003: 'Disclosure is about timing — before the recommendation, not after the client has already acted on it.',

  // ---------- CFA Level I: Chapter 2 — Quantitative Methods ----------
  4250004: 'Beginning-of-period flows are worth one extra period of compounding. Item writers plant the ordinary-annuity number as the bait.',
  4250005: 'Wealth follows geometric math. A 20% gain followed by a 20% loss does not net to zero because the loss applies to a larger base.',
  4250006: 'Quarterly compounding pushes 6% nominal to roughly 6.14% EAR. Always restate to a common compounding basis before comparing.',
  4250007: 'Strong correlation is evidence to investigate, not a causality stamp. Reverse causality and confounders are alive until ruled out.',
  4250008: 'When the underlying event is rare, even a model with a strong-looking hit rate produces mostly false positives. Anchor on the base rate.',

  // ---------- CFA Level I: Chapter 3 — Economics for Market Context ----------
  4250009: 'Write out what one unit buys before judging direction. Fewer domestic units per foreign unit means the foreign currency got cheaper.',
  4250010: 'Compare the percentage moves. Quantity dropping 1% on a 5% price hike is elasticity well below 1 — inelastic by the textbook definition.',
  4250011: 'Fisher approximation: nominal minus inflation. 4% minus 3% is close enough under exam pressure.',

  // ---------- CFA Level I: Chapter 4 — Financial Statement Analysis ----------
  4250012: 'FIFO and weighted average produce different COGS when input costs move. Restate to a common method before crediting "efficiency."',
  4250013: 'Capitalisation moves an expense onto the balance sheet as an asset and depreciates it over time. Year-one income and assets both rise.',
  4250014: 'Accrual income minus working-capital build equals cash. When AR grows faster than collections, earnings quality is the question.',
  4250015: 'IFRS allows the write-down to reverse up to original cost. US GAAP does not — that is the testable distinction.',
  4250016: 'Deferred liability means tax was lower today and will be higher later. The word "temporary" is the entire concept.',
  4250017: 'A ratio that improved because payables got stretched is a red flag dressed as a green one. Look at the transaction behind the number.',

  // ---------- CFA Level I: Chapter 5 — Corporate Issuers and Capital Decisions ----------
  4250018: 'NPV is the value-creation rule; payback is a liquidity screen. Positive NPV with long payback is a value-versus-cash-timing trade-off.',
  4250019: 'Sunk costs are emotionally loud and economically irrelevant. Capital budgeting uses incremental future cash flows only.',
  4250020: 'Flotation costs are real cash outflows up front. Put them in the project cash flows, not into a doctored cost of equity.',
  4250021: 'Tighter terms collect cash faster but cost some customers. The trade-off is liquidity gain against revenue at risk.',

  // ---------- CFA Level I: Chapter 6 — Equity Investments ----------
  4250022: 'A high P/E driven by a depressed denominator is noise, not signal. Normalise earnings before judging the multiple.',
  4250023: 'P/B below 1 often means the market sees loss exposure ahead of book. Asset quality is the diligence step before "cheap."',
  4250024: 'When payouts are conservative, DDM under-counts value. FCFE or FCFF captures cash available to all providers of capital.',
  4250025: 'Dual-class structures split economics from control. The minority owns most of the cash flow but not the votes.',
  4250026: 'Market orders prioritise execution over price. In thin books, the print can land far from the sleepy headline quote.',

  // ---------- CFA Level I: Chapter 7 — Fixed Income ----------
  4250027: 'Longer maturity and lower coupon push duration up. When yields rise, the longer-duration bond loses more.',
  4250028: 'A call option benefits the issuer when rates fall. The investor\'s upside is capped near the call price.',
  4250029: 'Inversion is information about expectations across maturities — usually lower future rates or weaker growth, with credit unchanged.',
  4250030: 'A widening spread on an unchanged benchmark means investors want more compensation for the corporate name itself.',
  4250031: 'Clean is the quote; dirty is what changes hands. The difference is accrued interest since the last coupon.',

  // ---------- CFA Level I: Chapter 8 — Derivatives ----------
  4250032: 'Long put payoff equals max(strike − underlying, 0). 50 minus 44 is 6.',
  4250033: 'Forwards bind both sides at initiation with no money changing hands. Value is created later as the spot price drifts.',
  4250034: 'Daily mark-to-market is the cleanest exam discriminator between futures and forwards. Cash moves through margin every day.',

  // ---------- CFA Level I: Chapter 9 — Alternative Investments ----------
  4250035: 'Appraisal-based NAVs are smoother than market prices, not safer. Reported volatility is suppressed, not eliminated.',
  4250036: 'Compare net of fees and after lockups. Gross-of-fee numbers do not tell the investor what they actually keep.',
  4250037: 'Fees and investment costs arrive before exits. Early-life negative IRR is a pattern, not a verdict.',

  // ---------- CFA Level I: Chapter 10 — Portfolio Management and Risk ----------
  4250038: 'Diversification is about exposures, not name count. Thirty-two correlated regional banks behave like one big bank.',
  4250039: 'A near-term cash need translates directly into a liquidity constraint in the IPS, regardless of horizon or wealth.',
  4250040: 'Rebalancing is risk control, not a prediction. Strategic allocation exists precisely to anchor decisions against the feeling that winners keep winning.',
  4250041: 'Same expected return plus higher dispersion means more volatility. It says nothing about the mean.',
  4250042: 'Benchmark-relative mandates need benchmark-relative tools. Tracking error captures how far active returns may wander from the index.',
  4250043: 'A portfolio the client cannot live with is not well designed. Resolve the objectives-versus-tolerance conflict before choosing assets.',

  // ---------- CFA Level I: Chapter 11 — Integrated Practice and Exam Strategy ----------
  4250044: '"Except" inverts the task. Restate the question to yourself before scanning the choices, or a correct concept becomes the wrong answer.',
  4250045: 'When the number screams, the input usually whispered something wrong. A reasonableness pass catches decimal and compounding slips.',
  4250046: 'Units and directional logic recover points when a formula slips off the mental desk. Eliminate impossible answers first, then guess.',

  // ---------- CPA Exam: Chapter 2 — FAR Core ----------
  4250100: 'The subsequent-event test is whether the condition existed at the balance sheet date — that decides recognise versus disclose.',
  4250101: 'Future-benefit analysis decides capitalise versus expense. A major component replacement that extends life points up the balance sheet.',
  4250102: 'Labels do not control under ASC 842. Control of an identified asset plus payment obligations is the lease test.',
  4250103: 'ASC 606 is five steps for a reason. Identify obligations, then ask when control transfers for each one.',
  4250104: 'Probable and reasonably estimable accrues. One of the two without the other only triggers disclosure.',
  4250105: 'Premium amortises down toward face value over the life of the bond. The carrying amount marches toward par.',
  4250106: 'Indirect-method direction follows the cash effect, not a sign heuristic. AP up means cash paid was less than expense — add it back.',
  4250107: 'Net realisable value is selling price minus selling costs. When NRV is below cost, write-down analysis kicks in.',
  4250108: 'Consolidation treats the group as one economic entity. Unsold intercompany profit has not been earned from an outside party yet.',
  4250109: 'NFP net-asset classification follows donor intent, not cash timing. The restriction sticks until it is satisfied.',
  4250110: 'Lower discount rates raise present values. The pension obligation goes up, and funded status worsens, all else equal.',
  4250111: 'Governmental funds use modified accrual. "Measurable and available" is the phrase that earns the underline on exam day.',

  // ---------- CPA Exam: Chapter 3 — AUD Core ----------
  4250200: 'External evidence obtained directly by the auditor outranks internal client preparations. Source and channel decide reliability.',
  4250201: 'Source to ledger tests completeness. Tracing shipping documents into recorded sales asks whether everything got captured.',
  4250202: 'Ledger to real world tests existence. Selecting from the books and physically inspecting asks whether what was recorded actually exists.',
  4250203: 'A walkthrough orients the auditor on design and implementation. It is not a substantive conclusion about the year.',
  4250204: 'One exception is data, not noise. Evaluate nature and cause before declaring the control effective or panicking.',
  4250205: 'Material plus unable to gather evidence triggers modification. Not pervasive means qualified, not adverse.',
  4250206: 'Even alleviated going-concern doubt requires disclosure that lets users see the conditions and plans. A plan does not silence the auditor.',
  4250207: 'Direct bank confirmations beat client-provided PDFs. The reliability question is who handed it to the auditor and through what channel.',
  4250208: 'Lawyer letters give the auditor evidence about litigation, claims, and assessments. The point is contingency evaluation, not legal advice.',
  4250209: 'Tolerable misstatement and sample size are linked. Less error allowed means more precision needed, which means a larger sample.',
  4250210: 'Materiality is cumulative. Several small uncorrected items can add up past the threshold, and qualitative factors push the judgement further.',
  4250211: 'Independence rules care about who decides. Auditors can assist within limits, but management decisions belong to management.',
  4250212: 'Manual entries posted late at night near year-end are the textbook fraud-risk focus. Targeted testing — support, authorisation, business purpose — is the adult move.',

  // ---------- CPA Exam: Chapter 4 — REG Core ----------
  4250300: 'Mixed-use property requires allocation. Any-business-use does not unlock a 100% deduction, and a round percentage without records will not hold up.',
  4250301: '"Just estimate high" fails Circular 230 and AICPA standards. Positions need support — low detection risk is not a professional standard.',
  4250302: 'Dependency is a checklist: relationship, support, income, residence, age or student status. Walk the tests in order.',
  4250303: 'Regular and exclusive business use is the home-office gate. Aesthetics, inspiration, and the rest of the mortgage are not the test.',
  4250304: 'Post-TCJA Section 1031 is real property only. Equipment dropped out — that is the testable change.',
  4250305: 'Working shareholder-employees of an S corp need reasonable wages before all-distribution treatment. The IRS targets exactly this structure.',
  4250306: 'Flow-through versus entity-level taxation is the core S-election story. Keep the answer broad unless the facts ask for specifics.',
  4250307: 'Self-employment without withholding needs quarterly estimates or safe-harbor coverage. April-only payments collect penalties.',
  4250308: 'Apparent authority lives in what the third party reasonably believed based on the principal\'s conduct. Past honoured contracts feed that belief.',
  4250309: 'A guarantor signs to answer for another party\'s debt. Default triggers enforcement against the guarantor, not forgiveness.',

  // ---------- CPA Exam: Chapter 5 — Discipline Choice Studio ----------
  4250400: 'Variances connect. A favourable price variance from cheaper inputs is exactly the setup for an unfavourable usage variance — read them together.',
  4250401: 'Special-order analysis lives on incremental costs. Fixed overhead that does not change and sunk equipment cost are background, not drivers.',
  4250402: 'When a constraint binds, rank by contribution margin per unit of the scarce resource. Per-unit contribution alone is the wrong filter.',
  4250403: 'Static budgets do not adjust for volume. Stretch the budget to actual activity before judging cost control.',
  4250404: 'Least privilege says access matches duties. A payroll clerk does not need administrator rights, however convenient it feels during training.',
  4250405: 'Production changes need testing, approval, and documentation. Skipping all three turns production into an experiment.',

  // ---------- CPA Exam: Chapter 6 — Simulations, Research, and Workpaper Craft ----------
  4250500: 'The requirement is the compass. Identify the relevant exhibits first and skip the long-tail tabs that do not feed the answer.',
  4250501: 'Research credit rewards the exact paragraph. Use the codification structure to drill from broad topic to narrow subtopic.',
  4250502: 'Stubborn tie-out differences usually come from sign errors, duplicate fact use, or wrong-account postings. Debug, do not restart.',

  // ---------- CPA Exam: Chapter 7 — Exam Strategy and Candidate Stamina ----------
  4250600: 'Quarterly estimates plus safe-harbor cover the year. Set the cadence, update on actual results, and avoid the April-only trap.',
}

export const CAREER_QUALS_FINANCE_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  // ---------- CFA Level I: Chapter 1 — Ethics ----------
  4250001: {
    newCorrect: 'Priority of Transactions',
    lessonAddendum: 'Priority of Transactions requires that clients have a fair opportunity to act on the recommendation before the analyst trades for personal accounts. Personal accounts come last, after clients have had a fair chance to act.',
  },

  // ---------- CFA Level I: Chapter 2 — Quantitative Methods ----------
  4250005: {
    newCorrect: 'Use the geometric return',
    lessonAddendum: 'Geometric return captures compounding: a 20% gain followed by a 20% loss does not net to zero because the loss applies to a base that was already grown. The ending value is below the starting value.',
  },
  4250007: {
    newCorrect: 'The variables moved together in the sample, but correlation alone does not prove causation',
    lessonAddendum: 'Strong correlation between analyst coverage and returns could run either way — coverage could drive returns, or returns could attract coverage, or a third factor could drive both. Correlation is evidence to investigate, not a causality stamp.',
  },

  // ---------- CFA Level I: Chapter 4 — Financial Statement Analysis ----------
  4250014: {
    newCorrect: 'Earnings quality may be deteriorating because revenue growth has not converted to cash',
    lessonAddendum: 'When receivables grow sharply after looser credit terms, accrual income outpaces cash collected. That gap is exactly the early signal FSA looks for between strong reported earnings and weak operating cash flow.',
  },
  4250017: {
    newCorrect: 'A better ratio can still signal liquidity stress when the cause is stretched payables',
    lessonAddendum: 'A higher current ratio achieved by squeezing suppliers signals stress, not strength. Both numerator and denominator can move in ways that flatter the ratio while the underlying liquidity position weakens.',
  },

  // ---------- CFA Level I: Chapter 5 — Corporate Issuers ----------
  4250018: {
    newCorrect: 'Positive NPV indicates expected value creation; payback flags a timing concern',
    lessonAddendum: 'NPV is the value-creation rule because it discounts all future cash flows. Payback ignores time value and any cash flow beyond the cutoff — useful as a liquidity screen but not as a substitute decision rule.',
  },

  // ---------- CFA Level I: Chapter 7 — Fixed Income ----------
  4250029: {
    newCorrect: 'Short-term yields exceed long-term yields, suggesting expectations of lower future rates',
    lessonAddendum: 'An inverted curve with stable credit spreads is a clue about rate expectations or growth — not about credit. The shape says markets expect lower future rates or weaker growth ahead.',
  },

  // ---------- CFA Level I: Chapter 9 — Alternative Investments ----------
  4250037: {
    newCorrect: 'The J-curve effect',
    lessonAddendum: 'Early net returns in a PE fund are often negative because management fees and investment costs hit before any exits. The pattern reverses as portfolio companies mature and exits return capital — that is the J-curve, not a verdict on the fund.',
  },

  // ---------- CFA Level I: Chapter 10 — Portfolio Management ----------
  4250038: {
    newCorrect: 'The portfolio carries concentrated sector and factor risk despite holding many names',
    lessonAddendum: 'Idiosyncratic risk depends on correlations, not on holding count. Thirty-two regional banks exposed to the same credit cycle behave like one big bank when the cycle turns.',
  },
  4250040: {
    newCorrect: 'Discuss rebalancing toward the strategic allocation',
    lessonAddendum: 'Rebalancing is risk control, not a prediction that winners are bad. The strategic allocation exists precisely to anchor decisions against the feeling that recent winners keep winning, and the conversation with the client names the risk exposure now being taken.',
  },
  4250042: {
    newCorrect: 'Tracking error',
    lessonAddendum: 'Tracking error is the standard deviation of active returns — manager returns minus benchmark returns. It is the right risk measure when the mandate is benchmark-relative, because it captures how far active returns may wander from the index.',
  },

  // ---------- CFA Level I: Chapter 11 — Exam Strategy ----------
  4250044: {
    newCorrect: 'Restate the exception task and evaluate each choice against duration drivers',
    lessonAddendum: 'In an except question, true statements are the trap. Restating the task to yourself before scanning the choices prevents a correct concept from becoming the wrong answer.',
  },
  4250045: {
    newCorrect: 'Pause for a reasonableness check and look for an input or decimal error',
    lessonAddendum: 'Calculators reproduce the inputs you give them, including decimal and compounding mistakes. A required return of 83% on a stable utility is the kind of result a quick sanity pass would catch before you select it.',
  },

  // ---------- CPA Exam: Chapter 2 — FAR Core ----------
  4250100: {
    newCorrect: 'Whether the event provides evidence about conditions that existed at the balance sheet date',
    lessonAddendum: 'Type I subsequent events confirm a condition that existed at year-end and are recognised in the financial statements. Type II events reflect new conditions arising after year-end and are typically disclosed only. The bankruptcy of a customer that was already in trouble at year-end points to Type I.',
  },
  4250101: {
    newCorrect: 'Whether the cost should be capitalised because it extends the asset beyond ordinary repairs',
    lessonAddendum: 'Capitalisation tests look for future benefit — improvement, life extension, or capacity increase — beyond what ordinary maintenance preserves. Cash outflow timing does not determine the answer; the future-benefit analysis does.',
  },
  4250102: {
    newCorrect: 'Whether the arrangement contains a lease under ASC 842',
    lessonAddendum: 'ASC 842 looks at substance over labels: control of an identified asset, payment obligations, and the right to direct use. If the test is met, a right-of-use asset and corresponding lease liability are recognised.',
  },
  4250206: {
    newCorrect: 'Whether disclosures are adequate and whether the report needs going-concern language',
    lessonAddendum: 'Even when management plans alleviate substantial doubt, users still need to see the conditions and the plans. Disclosure adequacy and emphasis-of-matter language carry the communication; a plan does not silence the auditor.',
  },

  // ---------- CPA Exam: Chapter 3 — AUD Core ----------
  4250212: {
    newCorrect: 'Evaluate the entries for fraud risk and test support, authorisation, and recording',
    lessonAddendum: 'Manual journal entries posted late at night near year-end by a senior accountant are exactly the pattern fraud-risk auditing focuses on. Targeted testing — support, authorisation, business purpose, and proper recording — is the standard response.',
  },

  // ---------- CPA Exam: Chapter 4 — REG Core ----------
  4250309: {
    newCorrect: 'Suretyship or guaranty obligations',
    lessonAddendum: 'A guarantor signs to answer for another party\'s debt if the principal debtor defaults. When the company defaults, the lender can seek payment from the owner-guarantor under the guaranty contract — multiple signatures usually create more enforcement avenues, not fewer.',
  },

  // ---------- CPA Exam: Chapter 6 — Simulations ----------
  4250500: {
    newCorrect: 'Read the requirement first, identify the relevant exhibits, and triage the tabs',
    lessonAddendum: 'CPA simulations reward controlled triage. The requirement tells you which evidence matters, so let it steer which tabs deserve time and which can be skimmed. Equal time on every tab is the failure mode the simulation tests for.',
  },
  4250502: {
    newCorrect: 'Tie each adjustment to the requirement and check signs, accounts, and duplicate fact use',
    lessonAddendum: 'Stubborn tie-out differences in a simulation are usually small: a sign error, an account mistyped, or an exhibit fact used twice. Targeted debugging in the remaining minutes recovers more points than restarting or plugging the difference into miscellaneous expense.',
  },

  // ---------- CPA Exam: Chapter 7 — Exam Strategy ----------
  4250600: {
    newCorrect: 'Set a quarterly estimated-payment cadence using safe-harbor rules',
    lessonAddendum: 'Quarterly estimates with annual safe-harbor coverage prevent underpayment penalties for self-employed taxpayers with no withholding. Update through the year as income changes — set-and-forget in January and April-only payments both collect penalties.',
  },
}
