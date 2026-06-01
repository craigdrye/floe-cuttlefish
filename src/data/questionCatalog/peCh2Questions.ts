import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// PE CHAPTER 2 — LBO Mechanics and Debt Capacity
// ----------------------------------------------------------------------------
// 42 questions (IDs 4390100–4390141) extending the existing 8 questions for
// 'LBO Mechanics and Debt Capacity' that live in
// careerAgentGeneratedRoadmapFinance.ts (IDs 4103034, 4103035, 4105098,
// 4105099, 4105105, 4107366, 4107373, 4107377). Together they form a
// canonical bank covering: LBO model construction, sources & uses, capital
// structure shape, debt tranches (TLB/TLA, mezz, HY), debt capacity drivers,
// leverage and coverage ratios, covenants and cov-lite, OID and cash sweeps,
// default/restructuring (363, prepacks, DIP), returns math, sensitivity
// tables, debt paydown impact, FCF math, exit assumptions, sponsor-to-sponsor
// exits, dividend recaps, add-on M&A multiple arbitrage, and returns
// waterfalls. US deal context throughout.
//
// Voice: follows the vcCapstoneQuestions.ts template — bespoke whyWrong
// rationales for each distractor, specific numbers, no strawman options.
// Source tag matches the canonical-bank convention used elsewhere.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe PE Ch2 canonical bank'

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

const CHAPTER = 'LBO Mechanics and Debt Capacity'

// Difficulty distribution: 12 at 3 (≈29%), 21 at 4 (≈50%), 9 at 5 (≈21%).
export const PE_CH2_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Block A — LBO model construction (4390100–4390106)
  4390100: 3, // Purchase price build basics
  4390101: 3, // Sources and uses balance
  4390102: 5, // Debt schedule mechanics
  4390103: 3, // Operating projection drivers
  4390104: 4, // Mandatory amortization vs cash sweep
  4390105: 4, // Returns waterfall to sponsor
  4390106: 5, // Circularity in interest calc

  // Block B — Sources and capital structure (4390107–4390113)
  4390107: 3, // Equity check sizing
  4390108: 4, // Senior debt vs mezzanine
  4390109: 3, // Seller note role
  4390110: 4, // Rollover equity mechanics
  4390111: 3, // Typical capital structure shape
  4390112: 4, // Total leverage band 5–6x
  4390113: 4, // TLB vs TLA distinctions

  // Block C — Tranches and pricing (4390114–4390119)
  4390114: 4, // Mezzanine economics
  4390115: 4, // High-yield bonds vs TLB
  4390116: 5, // OID and yield-to-maturity
  4390117: 3, // Original issue discount basics
  4390118: 4, // Floating vs fixed coupons in LBOs
  4390119: 5, // PIK toggle features

  // Block D — Debt capacity and ratios (4390120–4390124)
  4390120: 3, // Debt capacity by EBITDA
  4390121: 4, // FCF-driven capacity
  4390122: 4, // Interest coverage threshold
  4390123: 3, // Sector-driven leverage variance
  4390124: 4, // Asset-backed capacity (ABL)

  // Block E — Covenants and default (4390125–4390131)
  4390125: 3, // Maintenance vs incurrence
  4390126: 4, // Cov-lite mechanics
  4390127: 5, // EBITDA add-backs and covenant cushion
  4390128: 4, // Cash sweep trigger
  4390129: 5, // 363 sale advantages
  4390130: 4, // Prepackaged Chapter 11
  4390131: 4, // DIP financing priority

  // Block F — Returns math and sensitivities (4390132–4390137)
  4390132: 3, // IRR drivers decomposed
  4390133: 4, // Sensitivity entry x exit multiple
  4390134: 5, // EBITDA growth x exit multiple table
  4390135: 4, // Debt paydown's contribution to IRR
  4390136: 3, // FCF formula for LBO
  4390137: 5, // 5-year hold and multiple-constancy assumption

  // Block G — Sponsor-to-sponsor, recaps, add-ons (4390138–4390141)
  4390138: 4, // Sponsor-to-sponsor exits
  4390139: 5, // Dividend recap mechanics
  4390140: 4, // Add-on M&A multiple arbitrage
  4390141: 4, // Add-on accretion math
}

export const peCh2Questions: Question[] = [
  // ---------------------------------------------------------------------------
  // BLOCK A — LBO MODEL CONSTRUCTION (4390100–4390106)
  // The mechanical core: purchase price build, sources and uses, debt
  // schedules with mandatory amort and sweeps, operating projection drivers,
  // and the returns waterfall the model has to land at.
  // ---------------------------------------------------------------------------
  q(4390100, 'Career Skills', CHAPTER, 'Purchase price build basics',
    'A sponsor agrees to buy a US-based industrial distributor for 10x LTM EBITDA of $80M. The target has $50M of existing funded debt and $10M of cash on the balance sheet at close. What is the equity purchase price on a cash-free, debt-free basis?',
    '$760M — enterprise value of $800M less $50M debt plus $10M cash',
    [
      ['$800M, because that is the agreed enterprise value', 'Enterprise value is the headline, not what the equity-holder receives. Bridging through net debt is exactly the work this question is testing.'],
      ['$850M, because debt assumed by the buyer adds to what the seller is paid', 'Debt is repaid at close out of sources, not added to seller proceeds. Adding debt to the headline double-counts it relative to the EV definition.'],
      ['$740M, because cash always reduces purchase price below EV by more than debt increases it', 'Net debt is debt *minus* cash. Here that is +$50M − $10M = +$40M, so equity is $800M − $40M = $760M, not $740M.'],
    ],
    'On a cash-free, debt-free basis, equity purchase price equals enterprise value minus net debt. Get the sign right: existing debt reduces what the seller receives because the buyer has to refinance it; existing cash increases it because the buyer takes the cash with the company.'),

  q(4390101, 'Career Skills', CHAPTER, 'Sources and uses balance',
    'In an $800M EV LBO with $760M equity purchase price, $20M of transaction fees, and $50M of existing debt to be refinanced, total uses are $830M. Sources include $500M new term loan B and $50M revolver draw at close. How much sponsor equity is required?',
    '$280M — uses of $830M minus debt sources of $550M',
    [
      ['$330M, because the seller note can substitute for any equity gap', 'The question does not mention a seller note. Inventing one to balance sources is exactly the type of source manufacturing real models punish — every source has to be identified and committed.'],
      ['$230M, because cash on the balance sheet is a source', 'Cash on the balance sheet was already netted into the $760M equity purchase price via the cash-free, debt-free bridge. Counting it again is double-dipping.'],
      ['$260M, after deducting $20M of fees from the equity check', 'Fees are uses, not a reduction of equity. The equity check has to fund both the purchase price and the fees, which is why uses include the $20M line in the first place.'],
    ],
    'Sources must equal uses to the dollar. Existing debt being refinanced and transaction fees both appear on the uses side; new debt and sponsor equity fill the sources side. Plug equity to balance — but only after every other source is identified and committed.'),

  q(4390102, 'Career Skills', CHAPTER, 'Debt schedule mechanics',
    'A $500M TLB at SOFR + 450 bps with a 7-year tenor has 1% mandatory annual amortization and a 75% excess cash flow sweep above $50M minimum cash. In year 1, EBITDA is $90M, cash interest is $40M, taxes are $10M, capex is $15M, NWC builds $5M, and beginning cash is $30M. What is the year-1 debt paydown?',
    '$20M — $5M mandatory amort plus $15M cash sweep (75% of $20M excess above the cash floor)',
    [
      ['$25M, treating mandatory amort as 5% and ignoring the cash sweep', '1% mandatory amort of $500M is $5M, not $25M. Pulling 5% from somewhere else (such as TLB step-down at maturity) misreads the term-sheet line.'],
      ['$15M, applying the 75% sweep to all $20M of FCF instead of only the excess above the cash floor', 'The sweep applies to *excess* cash above the minimum cash level. FCF of $20M leaves $50M at the floor exactly, so the sweep base is the amount above the floor only — and mandatory amort is separate.'],
      ['$40M, because the entire FCF should be applied to debt', 'Cash sweeps are partial (typically 50–75%) and have a minimum cash carve-out. Modeling 100% of FCF as paydown ignores both the sponsor cushion and the term-sheet mechanics.'],
    ],
    'A debt schedule layers mandatory amortization (a stated percentage of original principal) with a cash sweep (a percentage of excess cash flow above a minimum cash floor). Mandatory amort is not optional; the sweep is mechanical but typically partial. Both work together each period.'),

  q(4390103, 'Career Skills', CHAPTER, 'Operating projection drivers',
    'A first-cut LBO model assumes revenue grows 6% per year and EBITDA margin expands 100 bps per year for five straight years with no underlying operational thesis. What is the most important critique of this projection structure?',
    'It is "straight-line optimism" — every year improves with no driver, no investment cost, and no margin trade-off, which is rarely how operating reality works',
    [
      ['Six percent revenue growth is too high for any LBO target', 'Six percent is well within the range of plenty of LBO sectors. The issue is not the headline number, it is the absence of drivers behind it.'],
      ['Margin expansion of 100 bps per year is impossible without acquisitions', 'Organic margin expansion of 100 bps per year is achievable in many sectors through pricing, mix, or scale. The problem is unsupported assumption, not infeasibility.'],
      ['The five-year horizon is too long for any operating projection', 'Five years is the standard LBO model horizon precisely because PE hold periods cluster at 4–6 years. The horizon is fine; the lack of underlying drivers is the flaw.'],
    ],
    'Operating projections in an LBO model have to be driver-based — pricing, volume, mix, capacity, headcount, productivity — and every year of improvement should map to a named initiative with a stated cost. Year-after-year improvement with no story is the canonical model red flag.'),

  q(4390104, 'Career Skills', CHAPTER, 'Mandatory amortization vs cash sweep',
    'A sponsor pushes back on a credit term sheet that requires 5% annual mandatory amortization plus a 100% excess cash flow sweep. Which negotiation pivot most preserves operating flexibility while protecting lender economics?',
    'Lower mandatory amort to 1% and reduce the sweep to 50%, then add leverage-based step-downs so the sweep falls to 0% below 4.0x net leverage',
    [
      ['Eliminate both mandatory amort and the sweep entirely', 'Eliminating both leaves lenders with no scheduled deleveraging at all. Most loan documents will not get past credit committee without at least some paydown mechanic.'],
      ['Keep the 5% mandatory amort but eliminate the sweep', '5% annual mandatory amort on a 6x leverage deal consumes too much FCF — it locks the sponsor into paydown even when growth capex or M&A would create more value.'],
      ['Raise the sweep to 100% but eliminate mandatory amort', 'A 100% sweep is more punitive than the original term sheet on the cash-flow side. This makes operating reinvestment harder, not easier — the opposite of the goal.'],
    ],
    'Mandatory amortization is a fixed claim on cash regardless of performance; the sweep scales with performance. A balanced LBO debt package keeps mandatory amort modest (often 1% on TLBs), uses a partial sweep (50–75%) with a cash floor, and includes leverage-based step-downs that reward the sponsor for deleveraging.'),

  q(4390105, 'Career Skills', CHAPTER, 'Returns waterfall to sponsor',
    'At exit, the company has $200M of net debt, an enterprise value of $1.2B, and the sponsor invested $280M of equity at entry over a five-year hold. Management rolled $20M in and has a 10% strip plus a 5% sweet-equity option tranche struck at cost. What does the sponsor receive on a pre-carry basis?',
    'Roughly $850M — $1.0B equity value times approximately 85% effective sponsor share after management strip and option dilution',
    [
      ['The full $1.0B, because management options are a separate expense line', 'Management options dilute the sponsor at exit by sharing the equity value above the strike. They are not an operating expense, they are an equity claim that has to be netted out of the waterfall.'],
      ['$720M, equal to the equity value minus the $280M sponsor check', 'Subtracting the sponsor check from equity value is not a waterfall — it is computing MOIC denominator. The waterfall question is what slice of the $1.0B equity value the sponsor actually owns.'],
      ['$900M, ignoring the option tranche because it is out of the money', 'A 5% sweet-equity option struck at cost is in the money any time exit equity exceeds entry equity. At a 3.6x equity multiple here, the option is deeply in the money.'],
    ],
    'A returns waterfall translates exit equity value into sponsor dollars by stripping out management economics: the common rollover, sweet-equity options that strike at cost or at a hurdle, and any preferred or junior tranches above the sponsor. Carry economics then run on top of that pre-carry sponsor number.'),

  q(4390106, 'Career Skills', CHAPTER, 'Circularity in interest calculation',
    'Your LBO model has a circular reference: the cash sweep depends on FCF, FCF depends on cash interest, cash interest depends on the average debt balance, and the debt balance depends on the cash sweep. The model is throwing a #REF error. What is the cleanest production fix?',
    'Enable iterative calculation with a tight tolerance and seed the interest expense with an opening balance — or break the circularity by basing interest on the prior period\'s ending debt balance',
    [
      ['Hard-code the cash interest line so the model stops iterating', 'Hard-coding cash interest defeats the point of a debt schedule — the model can no longer respond to sources changes, refi, or sensitivity runs. It also creates a hidden error the next associate will not see.'],
      ['Set the cash sweep to zero, because the circularity comes from the sweep', 'Setting the sweep to zero breaks the model rather than fixing it. The circularity is real and standard; the fix is calculation method, not removing the feature.'],
      ['Add more decimal places to the iterative calculation tolerance', 'More decimals do not fix the underlying convergence — they just make the iteration slower. The structural choice is iterative calc vs prior-period referencing, not precision.'],
    ],
    'LBO debt schedules are inherently circular: interest expense feeds into FCF, FCF feeds into the sweep, the sweep feeds into the debt balance, the debt balance feeds back into interest. The two standard fixes are enabling Excel iterative calculation or referencing the prior period\'s ending balance for interest. Both are acceptable; ad-hoc workarounds are not.'),

  // ---------------------------------------------------------------------------
  // BLOCK B — SOURCES AND CAPITAL STRUCTURE (4390107–4390113)
  // ---------------------------------------------------------------------------
  q(4390107, 'Career Skills', CHAPTER, 'Equity check sizing',
    'A sponsor is buying a business at 10x LTM EBITDA of $100M. The committed debt package is 5.5x leverage and there are $30M of transaction fees. Assume no rollover and no seller note. What sponsor equity check is required?',
    '$480M — total uses of $1.03B (purchase price plus fees) minus $550M of debt',
    [
      ['$450M, ignoring fees and applying 4.5x equity to EBITDA', 'Equity-to-EBITDA is not how equity is sized. Equity fills the gap between total uses and committed debt — the fees are a real use and have to be funded.'],
      ['$500M, half of EV by reflex', 'Default 50/50 equity/debt is wrong on a 5.5x leverage deal. The committed debt determines the debt side; equity is the plug to total uses.'],
      ['$430M, treating fees as a non-cash item', 'Transaction fees are real cash at close — legal, banker, accounting, financing fees. They are uses that must be funded, not memo items.'],
    ],
    'Equity check sizing is the residual of sources and uses. Build total uses (purchase price plus all transaction fees), subtract every committed source of debt and any seller note or rollover, and the remainder is the sponsor equity check. Fees are real cash.'),

  q(4390108, 'Career Skills', CHAPTER, 'Senior debt vs mezzanine',
    'A sponsor is structuring an LBO and considering whether the last turn of leverage should be a stretched TLB or a mezzanine tranche. Senior pricing is SOFR + 475 bps; mezz pricing is 11% cash plus 2% PIK. Which framing best captures the real tradeoff?',
    'Mezz is more expensive but expands total leverage without breaching senior lender appetite and offers more flexible covenants — it buys headroom that senior cannot',
    [
      ['Mezz is always preferable because the PIK component delays cash interest', 'PIK delays cash but accrues principal, so the eventual payoff is larger. Mezz has a place but is not "always" anything — the comparison is total cost vs flexibility.'],
      ['Senior debt is always preferable because the all-in coupon is lower', 'A lower coupon is irrelevant if senior lenders refuse to provide the last turn. Mezz exists because senior lenders cap their leverage; price is the cost of getting capacity senior will not provide.'],
      ['The choice does not affect returns because cost of capital is symmetric', 'Cost of capital is not symmetric across the cap stack. Mezz at 13% all-in versus TLB at SOFR + 475 (often ~9–10% all-in) is a real cost the equity bears.'],
    ],
    'Mezzanine sits between senior debt and equity. It is more expensive than TLB but more flexible on covenants and pushes total leverage beyond what senior lenders alone will fund. The right question is whether the incremental leverage capacity is worth the spread differential — usually a function of equity check sizing and sponsor IRR sensitivity.'),

  q(4390109, 'Career Skills', CHAPTER, 'Seller note role',
    'A founder is selling a business and the sponsor offers a $40M seller note as part of consideration: 8% coupon, 6-year tenor, contractually subordinated to senior debt with PIK during covenant cure periods. What does the seller note accomplish?',
    'It bridges valuation gaps between buyer and seller, reduces the sponsor equity check, and signals seller belief in post-close performance — though it leaves the seller with credit exposure',
    [
      ['It is identical economically to taking cash at close', 'Cash at close is risk-free to the seller; a subordinated seller note is exposed to the deal\'s performance and to the senior lenders being repaid first. The two are not the same.'],
      ['It replaces the need for senior debt entirely', 'Seller notes are typically a small slice of total consideration (5–15%). They sit junior to senior debt, not in place of it. They cannot fund the bulk of an LBO.'],
      ['It increases the senior lenders\' security because it is subordinated', 'Subordination orders the claims; it does not enhance senior security in any direct way. Senior lenders rarely give credit for a seller note in capacity calculations.'],
    ],
    'Seller notes serve three purposes: bridge a buyer-seller price gap, reduce sponsor equity required, and provide an alignment signal from the seller. They sit junior to senior debt, often carry PIK toggles for covenant cures, and leave the seller with real credit exposure they have to underwrite themselves.'),

  q(4390110, 'Career Skills', CHAPTER, 'Rollover equity mechanics',
    'A founder agrees to roll over $30M of equity value into the new sponsor-controlled company alongside selling $170M for cash. The rollover is structured at the same per-share price as the new sponsor equity, with the same security class. What is the most important downstream consequence?',
    'The founder shares pro-rata in the equity upside and downside on the same terms as the sponsor, and the sponsor equity check is $30M lower than it would have been with no rollover',
    [
      ['The founder gets preferred treatment because of the rollover commitment', 'Rolling at the same price into the same security is explicitly pari passu with the sponsor. Preferred treatment requires a separate preferred tranche, which the question rules out.'],
      ['The rollover is purely cosmetic because the founder is leaving anyway', 'Rollovers are usually tied to retention or earn-out arrangements. Even if the founder transitions out, rolled equity remains an economic claim on exit — it is not cosmetic.'],
      ['The sponsor avoids paying any income tax on the rolled equity', 'Tax treatment of rollover (often deferred under Section 351 or 721 structures) sits with the *seller*, not the sponsor. The sponsor does not avoid tax via the rollover.'],
    ],
    'Rollover equity reduces the sponsor equity check, aligns the founder economically with the sponsor on the same terms (when pari passu), and is usually structured to be tax-deferred for the seller. It is one of the highest-signal pieces of an LBO sources table — it tells lenders and the board that the seller believes in the post-close plan.'),

  q(4390111, 'Career Skills', CHAPTER, 'Typical capital structure shape',
    'You are sketching a first-cut capital structure for a sponsor-owned $100M EBITDA US software business at 10x EV. The deal benchmarks against typical large-cap LBO capital structures. Which split is most representative as a starting point?',
    'Roughly 35% sponsor equity and 65% debt — within the 5–6x total leverage band for a credit of this size and quality',
    [
      ['90% debt and 10% equity to maximize leverage', '90% debt at this EBITDA quality is well above LBO norms. Senior lenders cap at 4–5x and even with mezz total leverage rarely exceeds 7x for a credit of this size.'],
      ['80% equity and 20% debt because software LBOs are equity-heavy', 'Software LBOs are typically more leverageable than equity-heavy. Recurring revenue and sticky cash flow support 6–7x leverage in many cases, not the opposite.'],
      ['50/50 equity to debt to balance risk', '50/50 is conservative for a quality LBO credit. Lenders and sponsors usually push toward the 60–70% debt range to amplify equity returns, subject to debt capacity constraints.'],
    ],
    'A representative LBO capital structure for a quality credit is 30–40% sponsor equity and 60–70% debt, with total leverage in the 5–6x range. Higher quality recurring-revenue businesses can push higher; cyclical or asset-light businesses come in lower. The exact mix depends on credit quality, sector, and rate environment.'),

  q(4390112, 'Career Skills', CHAPTER, 'Total leverage band 5–6x',
    'A sponsor is structuring a $100M EBITDA industrials LBO. Senior lenders quote first-lien capacity of 4.5x. Mezz capacity is another 1.5x available at 12% cash plus 2% PIK. Which total leverage level is most appropriate given current rate environment and credit cycle considerations?',
    'Stretch to 5.5x — take the full first-lien at 4.5x plus one turn of mezz, leaving cushion against the mezz cap and matching market-standard total leverage for this credit',
    [
      ['Take 6.0x by using full first-lien and full mezz capacity', 'Taking every turn lenders will offer leaves zero cushion if performance softens or covenants tighten. Most disciplined sponsors leave at least half a turn of slack against committed capacity.'],
      ['Cap at 4.5x and skip mezz to minimize interest cost', 'Skipping mezz forgoes leverage that improves equity returns when the spread between debt cost and asset returns is meaningful. The right question is whether the incremental cost is justified, not whether to take it at all.'],
      ['Take 7.0x by negotiating uncapped flex provisions', 'Flex provisions allow lenders to reprice or adjust terms, not to add leverage capacity. They are not a path to more debt — they are a path to more expensive debt at the original capacity.'],
    ],
    'Total leverage in the 5–6x range is standard for quality LBO credits in the US large-cap market. Taking every turn the lenders offer is rarely the disciplined answer — sponsors leave cushion for covenant compliance, future M&A capacity, and dividend recap optionality.'),

  q(4390113, 'Career Skills', CHAPTER, 'TLB vs TLA distinctions',
    'A first-time LBO modeler asks why the credit package has a $100M TLA at SOFR + 250 and a $400M TLB at SOFR + 450, instead of one $500M loan. What is the cleanest explanation of the distinction?',
    'TLA is bank-held, amortizing, with shorter tenor and tighter covenants; TLB is institutionally syndicated, mostly bullet-payment, longer tenor, looser covenants, and priced wider to compensate institutional buyers',
    [
      ['TLA and TLB are pricing labels with no structural difference', 'The labels mark structurally different instruments — different holders, amortization, tenor, covenant packages, and ranking are all distinct between TLA and TLB.'],
      ['TLA is senior to TLB in the capital structure', 'TLA and TLB are typically pari passu first-lien tranches with the same security and ranking. The differences are tenor, amortization, holder base, and pricing — not ranking.'],
      ['TLB is held by banks and TLA is held by CLOs', 'The opposite is true. TLA is the bank-held tranche (held to maturity by relationship banks); TLB is the institutional tranche bought by CLOs, credit funds, and loan investors.'],
    ],
    'TLA and TLB are both first-lien term loans but serve different lender bases. TLA is shorter, amortizing, bank-held, with tighter covenants and inside pricing. TLB is longer, bullet-payment (with 1% mandatory amort), institutionally syndicated, with looser covenants and wider pricing. Most US large-cap LBOs are TLB-only today; TLA is more common in middle market or relationship-bank deals.'),

  // ---------------------------------------------------------------------------
  // BLOCK C — TRANCHES AND PRICING (4390114–4390119)
  // ---------------------------------------------------------------------------
  q(4390114, 'Career Skills', CHAPTER, 'Mezzanine economics',
    'A $75M mezzanine tranche is priced at 11% cash + 2% PIK with 5-year warrants for 2% of fully-diluted equity. The instrument is second-lien with a non-call period of three years. What is the all-in cost of capital from the issuer\'s perspective?',
    'Roughly 14–16% including the warrant value — cash coupon plus PIK accretion plus the equity option value granted to the lender',
    [
      ['Exactly 11% because the cash coupon is the only out-of-pocket cost', 'PIK accrues to principal (so the issuer eventually pays more), and the warrants give the lender equity that dilutes the sponsor at exit. Both are real costs the equity bears.'],
      ['13% — just cash coupon plus PIK', 'The warrants are real economic value granted to the lender. Excluding them understates the all-in cost; mezz packages with warrants are commonly priced 200–500 bps higher all-in than the stated coupon.'],
      ['Approximately 25% because mezz is essentially equity', 'Mezz is debt, not equity — it has a contractual coupon, a stated maturity, and ranks above common stock. 25% is more typical of unitranche-plus-warrants or junior preferred, not standard mezz.'],
    ],
    'Mezzanine all-in cost combines three pieces: the cash coupon (paid in cash each period), the PIK (capitalized to principal, paid at maturity), and warrant value (equity granted to the lender). The combined economics typically land in the 13–17% range, materially above senior debt but below pure equity cost.'),

  q(4390115, 'Career Skills', CHAPTER, 'High-yield bonds vs TLB',
    'A sponsor is sizing a $1.5B financing for a large LBO and choosing between a TLB-heavy structure and a TLB plus high-yield bond structure. What is the strongest case for including the HY bond tranche?',
    'Fixed-rate, longer-tenor (8–10 year) capital with bullet maturity and no maintenance covenants — useful for locking in rates and reducing refi risk, at the cost of tighter call protection and wider spread',
    [
      ['HY bonds always price tighter than TLB', 'HY bonds typically price wider than TLB on an all-in basis because they are unsecured or subordinated and carry longer tenor. Pricing is rarely the case for choosing HY.'],
      ['HY bonds have no covenants', 'HY bonds have incurrence covenants (triggered when the issuer takes a specific action) but no maintenance covenants. Incurrence covenants are real and constrain dividends, M&A, and refinancing.'],
      ['HY bonds give the sponsor full prepayment flexibility', 'HY bonds typically have non-call periods (often 3–4 years) and make-whole provisions that make early prepayment expensive. This is the opposite of TLB flexibility, which is one of TLB\'s advantages.'],
    ],
    'High-yield bonds bring fixed-rate, long-tenor, bullet-maturity capital with no maintenance covenants — useful for term-locking and rate certainty. The tradeoffs are wider spread, non-call periods, and incurrence covenants that constrain corporate actions. The choice between TLB and HY usually comes down to rate view, tenor needs, and call flexibility priorities.'),

  q(4390116, 'Career Skills', CHAPTER, 'OID and yield-to-maturity',
    'A $500M TLB is issued at a 98 OID (98% of par) at a stated coupon of SOFR + 450 bps with a 7-year tenor. The current SOFR is 5%. What is the approximate yield-to-maturity to the investor?',
    'Approximately 9.8% — the all-in coupon of ~9.5% plus roughly 30 bps from accreting the 2-point OID over 7 years',
    [
      ['Exactly 9.5% — the OID does not affect yield, only cash flow at issue', 'OID is a real return component. The investor pays 98 for the loan and receives 100 at maturity, which adds yield on an annualized basis. Ignoring it understates yield-to-maturity.'],
      ['Approximately 11.5% — the OID adds 200 bps to the annual coupon', 'A 2-point OID amortized over 7 years adds ~30 bps annually, not 200 bps. Treating the OID as a single-year yield enhancement overstates by an order of magnitude.'],
      ['Approximately 7.5% — the OID reduces yield because the investor paid less', 'OID *increases* yield, not decreases. The investor pays less than par for the same coupon stream and the same par redemption — that is a yield pickup, not a yield drag.'],
    ],
    'OID (original issue discount) is the amount by which a loan is issued below par. It compensates the investor for taking pricing risk and accretes back to par over the loan\'s life. Yield-to-maturity equals the stated coupon plus the annualized OID accretion (OID divided by tenor, roughly). A 98 OID over 7 years adds ~30 bps.'),

  q(4390117, 'Career Skills', CHAPTER, 'Original issue discount basics',
    'In a competitive LBO financing, the bookrunner indicates the TLB will price at "98 OID, SOFR + 450 bps." What does the OID specifically represent?',
    'A discount to par at issue — the issuer receives $98M of cash for every $100M of principal, and the $2M discount accretes back to par over the loan\'s life',
    [
      ['The annual cash coupon paid to lenders', 'The coupon is SOFR + 450 — that is the periodic cash interest. OID is a one-time pricing adjustment at issue, not a periodic flow.'],
      ['A penalty paid by the issuer for prepayment', 'Prepayment penalties are a separate concept (call protection, soft call, make-whole). OID is paid at issue, not on prepayment.'],
      ['The yield premium above the risk-free rate', 'OID is part of yield, but it is not the full yield premium above risk-free. The yield premium is the spread (450 bps) plus the OID accretion combined.'],
    ],
    'OID is the issue-price discount to par. A 98 OID means the issuer receives 98 cents on the dollar at funding, even though the issuer owes the full dollar at maturity. The 2-point gap accretes back to par over the loan\'s tenor and is an economic cost to the issuer (and yield pickup to the lender) on top of the stated coupon.'),

  q(4390118, 'Career Skills', CHAPTER, 'Floating vs fixed coupons in LBOs',
    'In a rising-rate environment, a sponsor is choosing between a floating-rate TLB at SOFR + 450 and a fixed-rate HY bond at 9.5%. Current SOFR is 5%, and the rate curve implies SOFR declining to 4% over the next 3 years. What is the most balanced read?',
    'The floating TLB is cheaper at spot (~9.5% all-in) and gets cheaper as SOFR falls, but the sponsor takes rate risk if SOFR rises instead — many sponsors hedge with a SOFR cap or swap rather than choose fixed outright',
    [
      ['The fixed-rate bond is always better in any rate environment', 'Fixed-rate is not universally better. It locks in cost (good in rising rates) but forfeits the benefit of falling rates and typically costs more in tenor and call flexibility.'],
      ['The floating-rate TLB is always cheaper because spreads are tighter', 'Spreads on TLB are typically tighter than HY, but the floating base rate moves with SOFR. "Always cheaper" depends on the rate path, not the spread alone.'],
      ['Rate environment is irrelevant because the rate gets passed through to operating performance', 'Rate cost flows directly through the P&L as cash interest. It is not "passed through" to anything — it reduces FCF and equity returns in real time.'],
    ],
    'Floating-rate TLB carries SOFR risk; fixed-rate HY locks rate at higher spread plus less call flexibility. Most LBO sponsors run floating-rate TLB and overlay a SOFR cap or swap to hedge the upside risk — that gives them the cost advantage of TLB with bounded downside if rates spike.'),

  q(4390119, 'Career Skills', CHAPTER, 'PIK toggle features',
    'A second-lien tranche carries a 12% coupon with a "PIK toggle" — meaning the issuer can elect cash-pay, all-PIK, or 50/50 split each period. What is the most likely circumstance in which the sponsor elects all-PIK?',
    'When cash interest coverage is tight or the company needs to preserve liquidity for capex or M&A — PIK trades cash savings now for higher principal at maturity',
    [
      ['When rates fall, because PIK is cheaper than cash', 'PIK is typically more expensive than cash-pay (often 25–75 bps step-up) because the lender takes accrual risk. Falling rates do not change this calculus.'],
      ['When the sponsor wants to exit, because PIK lowers reported leverage', 'PIK increases reported leverage over time because the principal balance compounds. It does not flatter leverage ratios — it raises them.'],
      ['Always, because PIK is the default election', 'Cash-pay is the typical default. PIK toggle elections are usually disclosed and require a covenant compliance check before election in many credit agreements.'],
    ],
    'PIK toggle features give the issuer flexibility to capitalize interest into principal when cash is tight — useful for preserving liquidity during downturns, integration spend, or growth capex. The cost is that the principal balance compounds (often at a premium coupon) and the eventual repayment is larger.'),

  // ---------------------------------------------------------------------------
  // BLOCK D — DEBT CAPACITY AND RATIOS (4390120–4390124)
  // ---------------------------------------------------------------------------
  q(4390120, 'Career Skills', CHAPTER, 'Debt capacity by EBITDA',
    'A US industrial services business has $80M of stable LTM EBITDA, 90% revenue from recurring service contracts, $10M of annual maintenance capex, and a 5-year contract backlog. What is a defensible first-look total leverage estimate for an LBO structure?',
    '5.5–6.5x EBITDA — recurring revenue and contract backlog support stretch leverage, though final capacity depends on FCF conversion and sector multiples',
    [
      ['8.0x because recurring revenue means more leverage', 'Eight turns is software-territory leverage, not industrial services. Even with high recurring revenue, industrials don\'t typically reach the 8x range because of capex and cyclicality risks.'],
      ['3.0x because industrial businesses are inherently cyclical', 'Three turns is undercutting the credit. Service-contract industrials with low capex and visible revenue can support meaningfully more leverage than asset-heavy industrials.'],
      ['Leverage is determined entirely by sector, not by company-specific metrics', 'Sector sets the band; company specifics (revenue quality, capex, customer concentration, growth) determine where in the band the deal lands. Both matter.'],
    ],
    'Debt capacity by EBITDA is a starting point: 4–5x for cyclical industrials, 5–6x for stable services, 6–7x for software and healthcare with recurring revenue. Final capacity depends on FCF conversion after capex and taxes, sector comp leverage, and lender appetite at the current point in the credit cycle.'),

  q(4390121, 'Career Skills', CHAPTER, 'FCF-driven capacity',
    'Two businesses have identical $100M EBITDA. Company A has $20M maintenance capex and 25% effective tax rate; Company B has $5M maintenance capex and 20% effective tax rate. Both have stable working capital. What does this imply for relative debt capacity?',
    'Company B can support meaningfully more leverage because it converts more EBITDA to FCF available for debt service — roughly $76M vs $60M after capex and taxes on EBIT',
    [
      ['Both can support identical leverage because EBITDA is the same', 'EBITDA is a starting point, not the limit. Capex and taxes consume real cash and reduce the FCF available to service debt — lenders look through to cash conversion.'],
      ['Company A supports more leverage because higher capex means more asset coverage', 'High capex does sometimes increase asset coverage but it reduces FCF — and senior cash flow lenders care about cash flow first, asset coverage second. The capex penalty usually outweighs.'],
      ['Tax rate is irrelevant to debt capacity', 'Tax rate affects FCF directly via cash taxes paid. A 5-point tax difference on a $100M EBITDA business is roughly $5M of cash — that is real debt service capacity.'],
    ],
    'EBITDA is a debt-capacity starting point; FCF is the binding constraint. Two businesses with identical EBITDA but different capex and tax profiles have meaningfully different cash available to service debt. Lenders increasingly look at FCF-to-debt and FCF-to-interest ratios alongside EBITDA multiples.'),

  q(4390122, 'Career Skills', CHAPTER, 'Interest coverage threshold',
    'A credit agreement requires EBITDA / cash interest of at least 2.0x as a maintenance covenant. The company has $80M EBITDA and $35M cash interest expense. The covenant is set with what cushion?',
    'About 14% cushion — actual ratio of 2.29x vs covenant level of 2.0x',
    [
      ['About 30% cushion because cash interest is $35M not $40M', '$40M is not the covenant threshold — the threshold is the ratio of 2.0x, which equates to EBITDA of $70M against $35M of interest. Cushion is computed against the ratio, not against an arbitrary EBITDA level.'],
      ['No cushion — the company is exactly at the covenant level', 'EBITDA of $80M against $35M of interest is 2.29x, not 2.0x. There is real cushion above the covenant floor.'],
      ['About 50% cushion because EBITDA covers interest 2.29x', '2.29x is the actual coverage ratio, not the cushion. Cushion is the gap between actual and required, expressed as a percentage of the required level: (2.29 − 2.0) / 2.0 = 14.5%.'],
    ],
    'Interest coverage cushion is the percentage gap between the actual ratio and the covenant requirement. At $80M EBITDA and $35M cash interest, actual coverage is 2.29x and the required level is 2.0x — a cushion of roughly 14%. Lenders typically want 25–35% covenant cushion at closing on most maintenance covenants.'),

  q(4390123, 'Career Skills', CHAPTER, 'Sector-driven leverage variance',
    'A sponsor explains to a new associate why a healthcare software LBO might lever 7x while a metals processor might lever only 4x even when both are quality businesses. What is the cleanest summary?',
    'Sectors with recurring revenue, low capex, sticky customers, and counter-cyclical or non-cyclical demand support more leverage; capital-intensive cyclical sectors support less because FCF is more volatile and asset values move with the cycle',
    [
      ['Lenders set sector caps arbitrarily based on relationship history', 'Lender practice does include sector banding, but the bands are not arbitrary — they reflect historical default rates, recovery values, and FCF volatility by sector.'],
      ['Healthcare always levers higher because regulation protects margins', 'Healthcare is heterogeneous — providers, payers, services, software, devices, and pharma have very different leverage profiles. "Healthcare" alone is not a sector for leverage purposes.'],
      ['Metals and software are leverageable identically because EBITDA is EBITDA', 'EBITDA quality varies dramatically by sector. Software\'s EBITDA is typically more durable than metals because demand is more recurring and capex is lower.'],
    ],
    'Sector leverage variance reflects underlying differences in revenue quality, capex intensity, cyclicality, and asset coverage. Software, healthcare services with payer diversification, and consumer staples can support 6–7x. Capital-intensive cyclicals (metals, paper, basic chemicals) typically support 3–5x. Sponsors and lenders both calibrate to these bands at the underwriting stage.'),

  q(4390124, 'Career Skills', CHAPTER, 'Asset-backed capacity (ABL)',
    'A US distribution company has $200M of receivables, $150M of finished goods inventory, $100M of LTM EBITDA, and $50M of net PP&E. The sponsor is sizing an asset-based revolver alongside the cash flow TLB. What is a typical ABL borrowing base build for the revolver?',
    'Approximately $150M — roughly 85% of eligible receivables and 50–60% of eligible inventory, subject to advance rates and ineligibles',
    [
      ['$350M, equal to the full A/R plus inventory book value', 'Advance rates of 85% on A/R and 50–60% on inventory typically discount the gross book values. The borrowing base is always materially below gross asset value because ineligibles and reserves apply.'],
      ['$100M, equal to one turn of EBITDA', 'ABL borrowing bases are computed off the asset base (A/R and inventory), not off EBITDA. EBITDA-based capacity is the TLB question, not the ABL question.'],
      ['$500M, full A/R plus inventory plus PP&E', 'PP&E is typically not included in the borrowing base for a standard ABL — that would be a term loan secured by fixed assets. ABL revolvers are built on liquid working capital assets.'],
    ],
    'ABL revolvers are sized by a borrowing base formula: typically 85% of eligible receivables plus 50–60% of eligible inventory, after ineligibles (concentration, aging, contra accounts, etc.). The revolver is pari passu with TLB on the working-capital collateral pool and provides liquidity for cyclical inventory and AR builds.'),

  // ---------------------------------------------------------------------------
  // BLOCK E — COVENANTS AND DEFAULT (4390125–4390131)
  // ---------------------------------------------------------------------------
  q(4390125, 'Career Skills', CHAPTER, 'Maintenance vs incurrence',
    'A credit agreement contains a "net leverage ratio shall not exceed 5.5x, tested quarterly" alongside a separate "permitted debt basket of up to $50M of incremental term loans subject to 4.5x pro forma net leverage." How do these two covenants differ?',
    'The first is a maintenance covenant tested every quarter regardless of action; the second is an incurrence covenant tested only when the borrower takes the specific action (here, incurring incremental debt)',
    [
      ['They are identical — both are maintenance covenants triggered quarterly', 'Incurrence covenants are tested only when the relevant action is taken — debt issuance, dividend, M&A. Quarterly testing is the defining feature of maintenance covenants.'],
      ['Both are incurrence covenants because they include leverage thresholds', 'A leverage threshold can appear in either type of covenant. The classification depends on *when* it is tested, not on whether it contains a number.'],
      ['Maintenance covenants only apply to first-lien debt', 'Maintenance covenants apply to whichever instrument the agreement specifies. They are common in TLA and revolver agreements; less common (or absent) in cov-lite TLBs and HY bonds.'],
    ],
    'Maintenance covenants test compliance every period (typically quarterly) regardless of action — a breach is a default even if nothing changed. Incurrence covenants test only when the borrower takes a specific action. Cov-lite structures eliminate maintenance covenants and rely entirely on incurrence — a meaningful difference for borrower flexibility.'),

  q(4390126, 'Career Skills', CHAPTER, 'Cov-lite mechanics',
    'A cov-lite TLB has no maintenance covenants but the revolver has a "springing" leverage covenant tested only when revolver utilization exceeds 35% of commitment. How does this typically protect lenders?',
    'The springing covenant only kicks in when the revolver is drawn, which is when the company most needs liquidity — protecting bank lenders from being exposed to a stressed borrower without recourse',
    [
      ['The springing covenant is meaningless because it never gets tested', 'Springing covenants are tested precisely when distress is most likely — revolver draws spike when working capital tightens or cash runs short. The mechanic is targeted, not absent.'],
      ['The cov-lite TLB has stronger covenants than a traditional TLB', 'Cov-lite has *fewer* maintenance covenants than a traditional package. The "lite" refers to the absence of standard maintenance tests, not their addition.'],
      ['Springing covenants are tested in every quarter the company underperforms', 'Springing covenants are tested based on the specified trigger (revolver utilization, leverage, fixed-charge coverage), not on subjective performance. The trigger is mechanical.'],
    ],
    'Cov-lite structures eliminate maintenance covenants on the TLB while retaining springing covenants on the revolver that only activate when utilization exceeds a threshold. This protects bank lenders during stress (when revolver is drawn) without constraining the sponsor in normal operating periods. Cov-lite has dominated US large-cap LBO TLBs since the mid-2010s.'),

  q(4390127, 'Career Skills', CHAPTER, 'EBITDA add-backs and covenant cushion',
    'A sponsor proposes $25M of EBITDA add-backs to a $75M LTM base: $10M for synergies, $8M for non-recurring legal costs, $5M for management fees being eliminated, and $2M for pro-forma adjustments. The credit agreement caps total add-backs at 25% of unadjusted EBITDA. What is the most defensible covenant EBITDA?',
    'Approximately $93.75M — base EBITDA of $75M plus the capped add-back of $18.75M (25% of unadjusted), with synergies likely subject to additional 12–24 month realization timing limits',
    [
      ['$100M because all proposed add-backs should be credited', 'The credit agreement caps add-backs at 25% of unadjusted EBITDA precisely to prevent unlimited adjustment. Even before the cap, lenders increasingly limit synergy add-backs by realization period.'],
      ['$75M because add-backs should never be credited in covenant EBITDA', 'Reasonable, documented add-backs (non-recurring, one-time, sponsor management fee elimination) are routinely accepted in credit agreements. Refusing all add-backs is more conservative than market practice.'],
      ['$83M because only the synergies and pro-forma should be excluded', 'There is no standard convention that excludes synergies and pro-formas specifically. The 25% cap is the contractual mechanism that governs allowable add-backs in this fact pattern.'],
    ],
    'Aggressive EBITDA add-backs erode real covenant cushion because they inflate the denominator of leverage ratios without inflating the cash flow that services debt. Modern credit agreements typically cap total add-backs at 20–30% of unadjusted EBITDA and limit synergy add-backs to 12–24 month realization windows. Sponsors push the cap; lenders resist; the cushion that remains is what survives.'),

  q(4390128, 'Career Skills', CHAPTER, 'Cash sweep trigger',
    'A TLB credit agreement has a 75% excess cash flow sweep with leverage-based step-downs: 75% above 4.5x net leverage, 50% between 3.5x and 4.5x, 25% between 2.5x and 3.5x, and 0% below 2.5x. The company is at 4.0x and generates $40M of excess cash flow. What is the mandatory paydown from the sweep?',
    '$20M — 50% of $40M, because the leverage is in the 3.5–4.5x band',
    [
      ['$30M because the sweep is 75%', 'The 75% rate applies above 4.5x. At 4.0x, the company is in the 50% band — the leverage-based step-down kicks in below 4.5x.'],
      ['$10M because the sweep steps down once leverage falls below 5.0x', 'There is no 5.0x band in the step-down schedule. The bands are 4.5x, 3.5x, and 2.5x — the question is which band the current leverage falls into.'],
      ['$0M because the company is below 4.5x leverage', 'Below-4.5x reduces the sweep rate but does not zero it. The sweep only zeros out below 2.5x in this agreement.'],
    ],
    'Excess cash flow sweeps with leverage-based step-downs reward deleveraging — as the company pays down debt, the sweep rate falls and more cash flows to the equity. The mechanic incentivizes both sponsor and lenders: lenders get faster paydown when leverage is high, sponsor retains more upside as leverage falls.'),

  q(4390129, 'Career Skills', CHAPTER, '363 sale advantages',
    'A portfolio company breaches covenants, enters distressed M&A, and a buyer wants to acquire the operating business but not the legacy litigation exposure. The sponsor structures the transaction as a Section 363 sale under Chapter 11. What is the principal advantage to the buyer?',
    'A 363 sale provides court-approved transfer of assets "free and clear" of liens, claims, and successor liability — giving the buyer a clean title that an out-of-court asset purchase cannot match',
    [
      ['363 sales are faster than out-of-court asset purchases', '363 sales typically require 45–90 days of court process plus stalking-horse bid procedures. They are not faster than a clean out-of-court deal; they are faster than confirming a full plan of reorganization.'],
      ['363 sales eliminate the need for buyer financing', 'A 363 sale is a transfer of assets — the buyer still needs to fund the purchase price. The court process governs the sale; it does not provide financing.'],
      ['363 sales preserve all existing employment contracts automatically', 'Section 363 does not automatically preserve contracts — executory contracts may be assumed or rejected. Employment contracts are typically renegotiated and the buyer chooses which to assume.'],
    ],
    'A Section 363 sale is a court-approved sale of assets during a Chapter 11 case that conveys title "free and clear" of liens, claims, and successor liability. The free-and-clear feature is the key buyer advantage — it allows the buyer to acquire the operating business without inheriting the seller\'s legacy contingent liabilities. Common in distressed PE situations where the asset is worth more than the cap stack supports.'),

  q(4390130, 'Career Skills', CHAPTER, 'Prepackaged Chapter 11',
    'A sponsor-backed company has $1.2B of debt against $800M of asset value and needs to restructure. The sponsor negotiates with senior lenders pre-petition and proposes a prepackaged Chapter 11 with confirmation in 45 days. What is the principal motivation for the prepack?',
    'Speed and certainty — the plan is fully negotiated with key creditor classes before filing, minimizing time in court, operational disruption, and professional fees',
    [
      ['Prepacks avoid the need for any creditor approval', 'Prepacks still require creditor voting and court confirmation. They differ from free-fall Chapter 11s in that the votes are gathered pre-petition, but the process is not voteless.'],
      ['Prepacks eliminate the absolute priority rule', 'The absolute priority rule still applies — senior claims are paid before junior claims absent class consent. Prepacks negotiate consent more efficiently; they do not override the underlying priority structure.'],
      ['Prepacks always preserve equity ownership for the sponsor', 'Equity preservation depends on the value reorganization implies — if the business is worth less than senior debt, equity is impaired and the sponsor may lose ownership. Prepack speed does not change valuation reality.'],
    ],
    'Prepackaged Chapter 11s compress the bankruptcy timeline by negotiating the plan and gathering votes pre-petition. Confirmation in 30–60 days is achievable in clean situations, vs 12–18 months for a free-fall case. The speed reduces professional fees, operational disruption, customer/supplier flight, and gives the company a faster path back to normal operations.'),

  q(4390131, 'Career Skills', CHAPTER, 'DIP financing priority',
    'A company files Chapter 11 with $1B of pre-petition senior debt secured by all assets. The debtor needs $100M of new working capital financing to operate during the case. The lender for the DIP requires "priming" of the pre-petition lien. How is this typically achieved?',
    'The court grants the DIP lender a super-priority senior lien that primes the pre-petition lender — usually with the pre-petition lender\'s consent or, less commonly, over its objection if the court finds adequate protection',
    [
      ['DIP financing is automatically senior to all pre-petition claims', 'DIP super-priority requires court approval and either consensual subordination or adequate protection findings. It is not automatic — the court must explicitly grant the priming order.'],
      ['DIP financing must be funded only by the pre-petition lender', 'DIP financing is often provided by the pre-petition lender (to protect their existing exposure) but can come from any approved third party. Many DIP lenders are specialized credit funds, not the incumbent lender.'],
      ['DIP financing is unsecured by definition', 'DIP financing is typically secured — and often super-priority secured. Unsecured DIP financing is rare and would carry much higher pricing because of the recovery risk.'],
    ],
    'DIP (debtor-in-possession) financing is post-petition working capital for a company in Chapter 11. It typically carries super-priority status — primed over pre-petition liens — either with the consent of the pre-petition lender or under court findings of adequate protection. Pre-petition lenders often roll up into the DIP to protect their position. The mechanic enables operations to continue while the plan is negotiated.'),

  // ---------------------------------------------------------------------------
  // BLOCK F — RETURNS MATH AND SENSITIVITIES (4390132–4390137)
  // ---------------------------------------------------------------------------
  q(4390132, 'Career Skills', CHAPTER, 'IRR drivers decomposed',
    'A sponsor LBO generates 3.0x MOIC over a 5-year hold. Entry EBITDA was $100M at 10x ($1B EV, $400M equity); exit EBITDA is $150M at 10x ($1.5B EV). The company paid down $300M of net debt over the hold. Decomposing the IRR, which drivers contribute?',
    'EBITDA growth from $100M to $150M at constant 10x adds $500M of EV; debt paydown of $300M converts debt value into equity value at exit — both compound into the sponsor\'s 3.0x MOIC at ~24.6% IRR',
    [
      ['Only EBITDA growth contributes to IRR; debt paydown is irrelevant', 'Debt paydown is one of the three classic LBO return drivers. Reducing debt converts EV ownership from lenders to equity at exit, even at a constant exit multiple.'],
      ['Multiple expansion is the dominant driver here', 'The exit multiple is constant at 10x — there is no multiple expansion in this scenario. EBITDA growth and debt paydown are doing all the work.'],
      ['The 3.0x MOIC is independent of how the underlying drivers contributed', 'MOIC is the total result, but the *composition* matters for risk and for understanding what the sponsor underwrote. Two 3.0x deals can have very different driver mixes and very different downside profiles.'],
    ],
    'LBO returns decompose into three drivers: EBITDA growth, multiple expansion (or contraction), and debt paydown. At constant exit multiple, EBITDA growth scales EV and debt paydown converts the debt portion of EV into equity at exit. Understanding the mix matters — multiple-expansion-heavy deals are riskier than EBITDA-growth-driven deals because exit multiple is exogenous.'),

  q(4390133, 'Career Skills', CHAPTER, 'Sensitivity entry x exit multiple',
    'You build a 5x5 sensitivity table on IRR varying entry multiple (9x to 11x) and exit multiple (8x to 12x). The sponsor base case is 10x entry, 10x exit, generating 22% IRR. Which read of the table is most useful to put in front of the IC?',
    'The downside cases (paying 11x and exiting at 8x) and the corner (paying 9x and exiting at 12x) — show the IC how returns flex when entry discipline and exit-multiple risk move together',
    [
      ['The diagonal where entry equals exit, to demonstrate base-case stability', 'A diagonal where entry equals exit shows the multiple-constant scenario, which is the *base case assumption*. The IC has already seen this — the sensitivity is for moves away from the diagonal.'],
      ['Only the upside corner (paying 9x and exiting at 12x), to show maximum upside', 'Showing only the upside corner makes the IC dismiss the analysis as cheerleading. Sensitivity tables earn credibility by showing the downside alongside the upside.'],
      ['The single cell at base case, to confirm the headline IRR', 'A single cell is not a sensitivity. The purpose of the 5x5 grid is exactly to show how IRR moves when the two key multiples move — collapsing to one number defeats the purpose.'],
    ],
    'Entry-by-exit-multiple sensitivity tables are an IC staple because they isolate the two valuation assumptions that drive returns most directly. The useful reads are the corners (best and worst combinations) and the cells where entry and exit move against the sponsor — these show the IC what the deal looks like when valuation discipline at entry combines with exit-multiple compression.'),

  q(4390134, 'Career Skills', CHAPTER, 'EBITDA growth x exit multiple table',
    'The sponsor base case assumes EBITDA grows 8% per year over a 5-year hold, exiting at a constant 10x multiple, generating 22% IRR. A separate 5x5 grid varies EBITDA CAGR (4–12%) and exit multiple (8–12x). At 4% CAGR and 8x exit, IRR drops to 9%; at 12% CAGR and 12x exit, IRR is 31%. What is the most important IC takeaway?',
    'Returns are vulnerable to combined multiple compression and growth disappointment — the deal works at the base case but a two-variable downside (growth slows AND multiple compresses) takes IRR well below the fund\'s cost of capital',
    [
      ['The deal is safe because the central cell stays above 20% IRR', 'A 5x5 grid is built to test resilience away from the central cell. The IC needs to know how returns move in adverse cases, not just confirm the central case.'],
      ['The grid is irrelevant because EBITDA growth and exit multiple are independent', 'In practice, growth disappointment and multiple compression often coincide — buyers pay less for lower-growth businesses. The grid is most useful precisely where the two are correlated.'],
      ['The upside scenario (31% IRR) is the most actionable read', 'Upside cases are reassuring but do not inform the decision. The IC question is whether the downside is survivable, not whether the upside is exciting.'],
    ],
    'Two-variable sensitivities (EBITDA growth × exit multiple) are more revealing than single-variable runs because the two variables often co-move negatively for the sponsor. The IC takeaway is usually about the joint downside — does the deal hold up if both go wrong? — rather than the headline IRR or the upside corner.'),

  q(4390135, 'Career Skills', CHAPTER, "Debt paydown's contribution to IRR",
    'In a five-year LBO at 6x entry leverage, the sponsor pays down 3.0x of leverage over the hold. EBITDA grows from $100M to $130M and exit multiple holds at 10x. The sponsor MOIC is 2.8x. Without the deleveraging — if the same debt balance had simply rolled to exit — what is the approximate MOIC instead?',
    'Roughly 2.0–2.2x — debt paydown of $300M (3.0x × $100M) converts directly into equity at exit, accounting for roughly $300M of the equity gain on a $400M equity check',
    [
      ['The same 2.8x MOIC because EBITDA growth alone drove returns', 'EBITDA growth contributes $300M of EV (30 × 10) but debt paydown contributes another ~$300M of equity by converting debt into equity at exit. Removing deleveraging removes that second leg.'],
      ['Roughly 1.5x because debt paydown is the dominant return driver', 'Debt paydown is meaningful but not dominant here — EBITDA growth and entry multiple stability also contribute. Removing only deleveraging leaves a meaningful but materially lower MOIC.'],
      ['MOIC would be lower than 1.0x without debt paydown', 'A 1.0x MOIC means losing money. EBITDA growth alone at constant multiple still generates positive equity returns; removing deleveraging reduces the magnitude, it does not turn returns negative.'],
    ],
    'Debt paydown is a major LBO return driver: every dollar of debt repaid during the hold becomes a dollar of equity at exit (assuming constant EV). For a typical 5–6x leverage LBO, debt paydown can contribute one-third to one-half of total equity returns depending on cash conversion. Stripping it out is a useful sensitivity to understand how much the deal depends on cash flow vs operating growth vs multiple.'),

  q(4390136, 'Career Skills', CHAPTER, 'FCF formula for LBO',
    'A new associate asks for the canonical free cash flow build that an LBO debt schedule uses each period. Which formula best captures the standard LBO FCF definition?',
    'EBITDA minus cash taxes (computed off EBIT) minus capex minus working capital change minus cash interest — what is left available for mandatory amort, sweep, and discretionary uses',
    [
      ['EBITDA minus capex, ignoring taxes and interest', 'Taxes and cash interest are real cash outflows that consume FCF before any paydown or sweep. Ignoring them overstates FCF and the implied debt service capacity.'],
      ['Net income minus capex plus depreciation', 'This is a starting point for unlevered FCF, but the LBO build starts from EBITDA and explicitly accounts for cash interest separately — net income already reflects interest expense, which would double-count.'],
      ['Revenue minus operating expenses minus capex', 'Revenue minus operating expense is EBITDA, but the LBO FCF build still needs taxes, NWC, and cash interest to land on cash available for debt service.'],
    ],
    'Standard LBO FCF: EBITDA − cash taxes − capex − working capital change − cash interest. The order matters because taxes are computed off EBIT (so depreciation shields), interest is cash interest only (PIK is separate), and capex is total cash capex (maintenance plus growth). The output is what feeds the cash sweep and mandatory amortization.'),

  q(4390137, 'Career Skills', CHAPTER, '5-year hold and multiple-constancy assumption',
    'Most LBO base cases assume a 5-year hold and a constant exit multiple equal to the entry multiple. A new IC member asks: "Why do we assume the multiple stays the same?" What is the most honest answer?',
    'Multiple-constancy is a disciplined default that forces the model to earn returns from operating performance, not from a beneficial valuation environment the sponsor cannot control — upside or downside multiple cases are run separately as sensitivities',
    [
      ['Because exit multiples always equal entry multiples in stable companies', 'Exit multiples vary materially with rate environment, sector cycles, buyer composition, and growth profile. They do not "always equal" entry multiples — the constancy assumption is a modeling discipline, not an empirical claim.'],
      ['Because forecasting exit multiples is impossible', 'Forecasting any specific exit multiple is imprecise, but the question is not "can we forecast it" — it is "should the base case rely on multiple changes". The discipline answer is no.'],
      ['Because the sponsor has no control over the exit multiple', 'The sponsor has limited but real influence — through the company\'s growth profile at exit, the choice of buyer universe, and the timing of process launch. The constancy assumption acknowledges this is not the sponsor\'s primary control surface.'],
    ],
    'Multiple-constancy in the base case forces honest accounting: any return that requires multiple expansion has to be argued separately and tested in a sensitivity. It also calibrates the sponsor and lender on the same valuation reality. Upside and downside multiple scenarios then bracket the base — but the headline IRR should not rely on a beneficial multiple shift the sponsor cannot underwrite.'),

  // ---------------------------------------------------------------------------
  // BLOCK G — SPONSOR-TO-SPONSOR, RECAPS, ADD-ONS (4390138–4390141)
  // ---------------------------------------------------------------------------
  q(4390138, 'Career Skills', CHAPTER, 'Sponsor-to-sponsor exits',
    'A US software business owned by a mid-market sponsor is being marketed to large-cap sponsors at a meaningfully higher multiple than the entry deal. A skeptical LP asks why this is not "passing the parcel." What is the strongest defense for the buying sponsor?',
    'The buyer believes incremental value-creation levers remain — scale-up M&A, international expansion, pricing optimization, or enterprise mix-shift — that the seller could not execute at the seller\'s fund size or sector capability',
    [
      ['Sponsor-to-sponsor deals always work because PE firms know each other', 'Familiarity between sponsors does not create value — it may speed diligence, but the buying sponsor still has to underwrite a real value-creation plan. "PE firms know each other" is not a thesis.'],
      ['The buyer is funded by recent capital raises and needs to deploy', 'Deployment pressure is a real fund-level dynamic but is not a defense to an LP. LPs explicitly do not want sponsors buying for deployment\'s sake — that is the failure mode they ask about.'],
      ['Sponsor-to-sponsor deals are always cheaper than primary deals', 'Sponsor-to-sponsor deals are typically *more* expensive than primary deals because the seller has groomed the company for sale, scrubbed reporting, and presented best-foot-forward financials. "Cheaper" is the opposite of typical.'],
    ],
    'Sponsor-to-sponsor exits are common — roughly 40% of US PE exits in recent years. The honest defense is that the buying sponsor has a value-creation thesis the selling sponsor could not execute: different fund size, different sector capability, different geographic reach, different M&A capacity. Without a specific thesis, the LP critique ("passing the parcel") lands.'),

  q(4390139, 'Career Skills', CHAPTER, 'Dividend recap mechanics',
    'A portfolio company has been held for three years, EBITDA has grown from $50M to $90M, and net leverage has fallen from 6.0x to 3.0x. The sponsor refinances the cap stack to 5.5x leverage, returning $200M of capital to LPs as a dividend. What is the strongest critique of this transaction?',
    'The recap re-levers the business to near-entry leverage and pulls forward equity returns, but it also reduces the company\'s cushion against future shocks and forfeits the deleveraging the sponsor already achieved',
    [
      ['Dividend recaps always destroy returns because debt service goes up', 'Dividend recaps typically *enhance* sponsor IRR by pulling forward cash returns — that is exactly why they are done. The critique is about risk and capacity preservation, not about return destruction.'],
      ['Recaps are prohibited whenever lenders lose balance-sheet cushion', 'Recaps can be contractually permitted under the credit agreement\'s dividend baskets. Lenders price the option ex ante; the recap is not a violation, even if lenders dislike it.'],
      ['Dividend recaps eliminate the need for a future exit', 'Recaps return capital but typically leave the equity stake intact. A future exit is still required to realize the residual equity value — the recap is a partial liquidation, not a substitute for exit.'],
    ],
    'Dividend recaps return capital to LPs by re-levering the company. They pull forward IRR (because cash returns earlier compound faster) and de-risk the fund-level position. The cost is reduced cushion against future operational shocks and forfeiting hard-won deleveraging. Recaps are most defensible after material EBITDA growth has created genuine new capacity, not after passive cash flow has just paid down a starting-leverage cap stack.'),

  q(4390140, 'Career Skills', CHAPTER, 'Add-on M&A multiple arbitrage',
    'A platform company trades at 12x EBITDA. The sponsor identifies a $10M EBITDA add-on at 7x. After acquisition and integration, the add-on is expected to be valued at the platform\'s 12x multiple. Why does this multiple arbitrage work, and what is the most important risk?',
    'It works because smaller, less professionalized targets typically trade at lower multiples than scaled platforms — the value capture is 5x × $10M = $50M of theoretical multiple uplift, but realization requires actual integration and customer retention',
    [
      ['Multiple arbitrage is automatic — the add-on instantly trades at the platform multiple', 'Multiple uplift is the *opportunity*, not the *outcome*. It is realized only if the add-on actually integrates, retains customers, and gets credit from the eventual exit buyer for being part of the platform.'],
      ['The arbitrage does not exist because efficient markets price all M&A correctly', 'Private M&A multiples are stratified by size — smaller targets trade lower for real reasons (less scale, more concentration, weaker reporting). The arbitrage is real but requires execution.'],
      ['The risk is regulatory antitrust review', 'Antitrust review is a possible issue for very large add-ons in concentrated sectors, but most $10M-EBITDA add-ons to mid-sized platforms fall well below review thresholds. Integration execution is the more universal risk.'],
    ],
    'Multiple arbitrage in add-on M&A is real — smaller targets trade at lower multiples than scaled platforms because of size, concentration, and reporting differences. The arithmetic ($5x × $10M = $50M) is the theoretical capture. The risk is execution: customer retention, integration costs, cultural fit, and whether the exit buyer ultimately credits the platform multiple to the integrated whole.'),

  q(4390141, 'Career Skills', CHAPTER, 'Add-on accretion math',
    'A platform business has $100M EBITDA and $600M of debt at 6x leverage. It acquires a $20M EBITDA add-on for $140M, funded with $100M of incremental debt at the platform\'s 4% effective interest cost and $40M of additional sponsor equity. Pre-deal sponsor equity was $400M. Is the add-on accretive to sponsor returns at exit, assuming a 10x exit multiple and no synergies?',
    'Yes — the add-on adds $20M × 10x = $200M of EV at exit for $40M of incremental equity and $100M of incremental debt, vs the $140M total acquisition cost. The equity creation per dollar of equity invested is meaningfully positive.',
    [
      ['No, because the platform is paying a higher absolute price than the EBITDA', '$140M for $20M EBITDA is 7x — *below* the platform\'s 10x exit multiple. The 7x entry and 10x exit are the source of the value creation, not a problem.'],
      ['Neutral because the debt and equity scale proportionally', 'Debt and equity do not scale proportionally — the question fact pattern uses $100M debt and $40M equity (5:2 ratio), which is more debt-heavy than the original 60/40 cap structure. The mix matters and is accretive here.'],
      ['Yes, but only because the platform was undervalued', 'Platform undervaluation is not the mechanic. The arbitrage is paying 7x (small-target multiple) and exiting at 10x (platform multiple). The platform\'s own multiple is consistent before and after.'],
    ],
    'Add-on accretion math at constant multiple: target is acquired at a lower multiple than platform exit multiple, so each dollar of acquired EBITDA generates EV at the higher exit multiple. The equity check needed is small relative to the EV created because debt finances most of the acquisition. The cleanest version of the math compares incremental equity invested ($40M) to incremental equity value created ($200M EV − $100M debt = $100M equity gain, less the $40M check).'),
]
