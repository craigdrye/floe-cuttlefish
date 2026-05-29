import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// CLF CAPSTONE — Credit Decision Walkthrough (Apex Holdco LBO financing)
// ----------------------------------------------------------------------------
// 50 integrative questions (IDs 4410500–4410549) covering the full week of
// a lead underwriter taking the Apex Holdco financing from cap structure
// design through stress test and into syndication. One borrower, five
// lessons, ten questions each — same way an analyst would actually live
// through the deal.
//
// Apex Holdco context (consistent across every question below):
//   - Sponsor-backed LBO target. Glasswing Capital buying Apex at $720M EV.
//   - $115M LTM EBITDA, 16% margin, $580M revenue.
//   - Niche industrial parts distributor, mature 6% growth, sticky customer
//     base, mid-single-digit margin volatility, low capex (~1.5% of sales).
//   - Proposed funding: $250M equity + $470M debt.
//   - Debt stack proposed:
//       * $50M revolver — 5y, SOFR+275, undrawn at close
//       * $300M Term Loan B — 7y, SOFR+400, 1% SOFR floor, cov-lite
//       * $120M senior unsecured notes — 8y, 8.5% coupon, NC3
//   - Net leverage at close: ~4.1x (4.0x funded / 4.1x net of $10M est. cash).
//   - You are the lead underwriter at a major bank syndicating the TLB and
//     leading the bond marketing.
//
// Voice: matches vcCapstoneQuestions.ts and the broader CLF/IB capstone bank —
// specific, evidence-anchored, no strawman distractors. Each wrong-answer
// rationale is bespoke and reflects a real underwriter misjudgment the
// learner could plausibly make. Lesson is the integrative takeaway.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe CLF capstone canonical bank'

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

const CHAPTER = 'Capstone: Credit Decision Walkthrough'

// Difficulty distribution target: 15 at 3, 25 at 4, 10 at 5.
export const CLF_CAPSTONE_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Lesson 1: Cap structure design (10 Qs)
  4410500: 3, // Sources and uses balance for Apex
  4410501: 3, // Leverage target relative to comps
  4410502: 3, // Revolver sizing for working capital
  4410503: 4, // TLB vs notes split
  4410504: 4, // Why a TLB rather than TLA
  4410505: 3, // Notes tenor relative to TLB
  4410506: 5, // Subordinated layer — needed or not
  4410507: 4, // Equity contribution adequacy
  4410508: 4, // Pro forma rating implication
  4410509: 3, // Pricing flex assumed in the underwriting

  // Lesson 2: Credit analysis (10 Qs)
  4410510: 3, // EBITDA add-backs to challenge
  4410511: 4, // FCF conversion for Apex
  4410512: 4, // Interest coverage at close
  4410513: 4, // Revenue sensitivity to industrial cycle
  4410514: 4, // Margin sensitivity and operating leverage
  4410515: 3, // Working capital seasonality
  4410516: 5, // Customer concentration drag
  4410517: 4, // Capex truth vs sponsor model
  4410518: 4, // Cash taxes through the hold
  4410519: 3, // Quality of earnings findings to weight

  // Lesson 3: Covenant package (10 Qs)
  4410520: 3, // Cov-lite — what it does and doesn't waive
  4410521: 4, // Springing fin cov on the revolver
  4410522: 4, // EBITDA definition and add-back caps
  4410523: 5, // Restricted payments capacity
  4410524: 5, // Incremental / accordion sizing
  4410525: 4, // Mandatory prepayments from excess cash flow
  4410526: 3, // Asset sale sweep mechanics
  4410527: 4, // Permitted indebtedness baskets
  4410528: 5, // J. Crew / Chewy-style protections
  4410529: 5, // Trap doors and most-favored-nation drift

  // Lesson 4: Stress test + recovery (10 Qs)
  4410530: 3, // Downside case construction — 15% revenue decline
  4410531: 4, // EBITDA path in the downside
  4410532: 4, // Liquidity runway in stress
  4410533: 4, // Covenant headroom in the downside
  4410534: 5, // Recovery on the TLB in a default
  4410535: 5, // Recovery on the senior unsecured notes
  4410536: 4, // Enterprise value haircut assumption
  4410537: 4, // Priority of claims walk
  4410538: 4, // Refinancing risk at TLB maturity
  4410539: 3, // What recovery rating to publish

  // Lesson 5: Syndication + marketing (10 Qs)
  4410540: 3, // TLB price talk relative to comps
  4410541: 3, // OID and yield-to-three-year for the TLB
  4410542: 4, // Bond price talk and roadshow strategy
  4410543: 4, // Top three investor concerns to pre-empt
  4410544: 5, // Anchor order vs broad book strategy
  4410545: 4, // Allocation strategy for the TLB
  4410546: 5, // Flexing pricing vs flexing structure
  4410547: 3, // Marketing the notes given NC3 call
  4410548: 4, // Information delivery — lender presentation discipline
  4410549: 4, // Post-close trading and league-table read
}

export const clfCapstoneQuestions: Question[] = [
  // -------------------------------------------------------------------------
  // LESSON 1 — Cap structure design (4410500–4410509)
  // Output: a defensible $470M debt stack on a $720M EV LBO. Forces the
  // analyst to size each tranche against purpose, market depth, and the
  // sponsor's equity contribution rather than backing into a number.
  // -------------------------------------------------------------------------
  q(4410500, 'Career Skills', CHAPTER, 'Sources and uses balance for Apex',
    'Glasswing is buying Apex at $720M EV. The proposed sources are $250M sponsor equity, $50M revolver (undrawn at close), $300M TLB, and $120M senior unsecured notes. Uses include the purchase price, refinancing of $0 existing debt (Apex is currently family-owned, debt-free), $20M of estimated transaction fees, and a minimum cash balance. Where does the sources-and-uses gap actually sit?',
    'Sources total $420M of funded debt plus $250M equity = $670M, against $720M purchase price + $20M fees = $740M of uses, leaving a ~$70M shortfall that the proposed stack does not actually fund — the deal is short on the math as written',
    [
      ['The S&U balances cleanly because the revolver fills any gap at close', 'An undrawn revolver does not balance S&U at close — it is available capacity, not a source. Treating it as a plug is the canonical analyst error on the first read of a deal.'],
      ['The S&U balances after assuming a working-capital adjustment lowers the purchase price', 'Working-capital true-ups settle months after close; you cannot fund the close on a promised post-close adjustment. The model has to balance at close on actual committed dollars.'],
      ['The S&U overfunds by $20M which becomes minimum cash on the balance sheet', 'It does not overfund — $420M + $250M = $670M against $740M of uses is a $70M shortfall, not surplus. Walk the numbers before deciding what to do about cash.'],
    ],
    'Sources and uses on an LBO have to balance on funded sources at close — the revolver and unfunded commitments do not count. Walking the arithmetic before debating structure is the discipline that catches the most common analyst error: assuming a revolver "plugs" a gap when it cannot be drawn at close without immediate covenant problems.'),

  q(4410501, 'Career Skills', CHAPTER, 'Leverage target relative to comps',
    'Apex closes at 4.1x net leverage on $115M EBITDA. Public industrial distributor comps trade at 2.5–3.5x with investment-grade balance sheets; recent sponsor-backed deals in adjacent industrial distribution have closed at 5.5–6.5x. How should you frame Apex\'s 4.1x in the credit committee memo?',
    'Apex sits below the sponsor-LBO median (5.5–6.5x) and well above public IG comps (2.5–3.5x), reflecting a conservative LBO posture given the borrower\'s cyclical exposure and lack of operating debt history — a fair starting point but not "low leverage" by absolute standards',
    [
      ['Apex is undercapitalized at 4.1x because sponsor LBO peers run 5.5–6.5x and the deal could absorb more debt', 'Reading 4.1x as undercapitalized because peers run higher misreads the credit case. Apex\'s cyclical industrial exposure and zero debt history justify the conservative posture — pushing leverage to peer median would force a different recovery and covenant package.'],
      ['Apex is overleveraged at 4.1x because public comps run 2.5–3.5x', 'Public IG comps are the wrong reference for a sponsor LBO — those companies have different equity owners, capital plans, and dividend expectations. The right reference is the sponsor-LBO band, where 4.1x is conservative.'],
      ['Leverage at 4.1x is "moderate" without further qualification', '"Moderate" is the kind of word credit committees push back on. The memo needs to anchor leverage against the two comp sets (IG and sponsor) and explain *why* Apex sits where it does, not where it falls on a one-word scale.'],
    ],
    'Leverage framing requires two reference points: where investment-grade peers sit and where sponsor LBO peers sit. Apex at 4.1x sits between them, and the memo should explain *why* the conservative posture is appropriate given cyclicality and the lack of prior debt history — not just where the ratio lands.'),

  q(4410502, 'Career Skills', CHAPTER, 'Revolver sizing for working capital',
    'You are sizing the Apex revolver. Apex\'s working capital cycle is ~75 days (60 DSO, 90 DIO, 75 DPO), revenue is $580M, and peak-to-trough seasonal swing is roughly $25M of working capital. The sponsor wants $50M of revolver capacity. Is that the right size?',
    '$50M is roughly right — it covers the ~$25M seasonal swing with a buffer for capex timing and the occasional acquisition or working-capital shock, without overstating capacity in a way that distorts the credit picture or invites the borrower to draw chronically',
    [
      ['$50M is undersized; an industrial distributor should have a revolver equal to 15–20% of revenue ($90–115M)', 'Revolver-as-percent-of-revenue is a rough rule for retailers and seasonal businesses with much higher WC intensity. Apex\'s 75-day cycle and $25M swing do not justify $90M+ of capacity — oversizing distorts leverage optics and produces underutilized commitments.'],
      ['$50M is oversized; the seasonal swing is only $25M so a $30M revolver would be sufficient', 'Sizing exactly to the seasonal swing leaves no buffer for capex timing, supplier prepayments, or an acquisition. Revolvers are sized to seasonal swing *plus* a working capital cushion — $30M would be tight enough to force frequent drawdowns.'],
      ['Revolver size is not driven by working capital — it is a function of the leveraged loan market\'s typical 10% of total debt', 'Market convention bands are useful but not the driver. Revolver size should reflect the company\'s liquidity needs first; conventions are sanity checks, not the sizing tool.'],
    ],
    'Revolver sizing starts with the underlying liquidity need: seasonal WC swing plus buffer for capex timing, M&A optionality, and shocks. $50M on Apex is a defensible answer — large enough to absorb the $25M swing with cushion, small enough not to invite chronic borrowing or distort the leverage picture.'),

  q(4410503, 'Career Skills', CHAPTER, 'TLB vs notes split',
    'You have $420M of funded debt to split between TLB and senior unsecured notes. The proposed split is $300M TLB / $120M notes. Why might you push for more notes and less TLB inside the underwriting memo?',
    'Notes have longer tenor (8y vs 7y), fixed coupon, no maintenance covenants, and no amortization — pushing the mix toward notes gives the sponsor breathing room on refinancing risk and free cash flow, but at the cost of a higher all-in coupon and call protection inflexibility',
    [
      ['Notes are always preferable to TLBs because they are unsecured', 'Notes being unsecured is a feature of where they sit in the capital stack, not a reason to prefer them. The right question is the *tradeoff* between cost, tenor, flexibility, and call protection — not a blanket preference.'],
      ['Notes are cheaper than TLBs in the current market so the mix should shift toward notes', 'Notes are typically *more* expensive than TLBs (higher coupon for unsecured, longer tenor, fixed rate). A pure-cost argument actually pushes the opposite direction. The reason to add notes is tenor and covenant flexibility, not price.'],
      ['Notes are easier to refinance than TLBs because they are bonds', 'Notes have call protection (Apex\'s are NC3) that makes early refinancing expensive. TLBs are typically callable at par after a short soft-call period — they are *easier* to refinance, not harder. The notes case is about staying power, not exit flexibility.'],
    ],
    'TLB-vs-notes mix is the central structural decision on a sponsor LBO. TLBs are cheaper, prepayable, and floating, but come with shorter tenor and a faster amortization profile. Notes are pricier and fixed-rate with call protection but give the borrower a longer runway and no maintenance covenants. The right mix balances these for the sponsor\'s base case AND the downside.'),

  q(4410504, 'Career Skills', CHAPTER, 'Why a TLB rather than TLA',
    'Apex\'s sponsor wants a TLB rather than a TLA. The pricing of a TLA would be lower (SOFR+225 vs +400) and the relationship banks would hold it. Why is the TLB the right choice for a $300M tranche on a sponsor LBO like Apex?',
    'TLAs are bank-held with 1% mandatory amortization stepping up over time, full maintenance covenants, and shorter tenor — that profile is incompatible with a sponsor\'s hold period, deleveraging plan, and need for cov-lite flexibility; the TLB market is where this size of sponsor debt actually clears',
    [
      ['TLAs are extinct in the leveraged loan market and only TLBs are available for sponsor deals', 'TLAs still exist and are widely used for IG and crossover borrowers — they are not extinct. The right framing is that TLAs are the wrong *product* for a sponsor LBO at this size, not that they are unavailable.'],
      ['TLBs are cheaper than TLAs because the institutional market is more competitive', 'TLBs are typically *more* expensive than TLAs for the same credit (higher spread to reflect longer tenor and weaker covenant package). The reason to prefer a TLB is the structure, not the price.'],
      ['TLBs allow the sponsor to skip lender approval for portfolio decisions, whereas TLAs require it', 'Both TLAs and TLBs require lender votes for amendments — that is not the differentiator. The difference is in the covenant package, amortization profile, tenor, and who holds the paper.'],
    ],
    'TLB vs TLA is a structural choice driven by the *holder*: TLAs are bank-held with full maintenance covenants and amortization; TLBs are institutional-investor-held with cov-lite, longer tenor, and bullet maturity. The sponsor LBO model relies on the TLB profile — the TLA would force quarterly covenant tests and quicker amortization that distorts the equity returns model.'),

  q(4410505, 'Career Skills', CHAPTER, 'Notes tenor relative to TLB',
    'The proposed notes are 8-year, the TLB is 7-year. Some peers structure the notes inside or matching the TLB tenor. Why is the 8-year notes tenor (outside the TLB) the right call for Apex?',
    'Putting the notes outside the TLB maturity creates a clean refi runway — the sponsor refinances the TLB first (likely with a dividend recap or repricing 18–36 months in), then addresses the notes separately, instead of facing a wall of maturities in the same year',
    [
      ['The 8-year tenor on the notes lowers the coupon relative to a 7-year tenor', 'Longer tenor typically *increases* the coupon, not decreases — investors charge for the additional duration and refinancing risk. The reason for the longer notes tenor is maturity spacing, not cost.'],
      ['The 8-year tenor matches the standard high-yield market convention and cannot be changed', '8-year is common but not mandatory — 7y and 10y are also routinely used. The structure decision is intentional, not market-imposed, and the rationale (maturity spacing) is what the memo should articulate.'],
      ['The 8-year tenor gives the sponsor more time to execute a sale at year 5', 'Sale timing is driven by sponsor strategy, not notes tenor. The notes do not block a sale at year 5 — there is a change-of-control put that can be addressed. The real reason for the longer tenor is the maturity wall.'],
    ],
    'Spacing maturities across tranches is one of the cleanest discipline moves in cap structure design. Putting notes one year past the TLB means the borrower never faces both refis at once, and gives the sponsor optionality on the order of refinancing (TLB repricing first, notes call later). The cost is a slightly higher coupon — usually worth it.'),

  q(4410506, 'Career Skills', CHAPTER, 'Subordinated layer — needed or not',
    'A junior banker proposes adding a $40M second-lien tranche to lower the senior TLB to $260M and improve TLB recovery. The sponsor pushes back, saying the simpler structure (TLB + sr notes only) is cleaner and the second-lien would price at SOFR+725. Should the underwriter push for the second-lien?',
    'No — at 4.1x leverage and with a $120M senior unsecured cushion already behind the TLB, the second-lien adds cost and complexity without materially improving structural protection; second-lien layers earn their place at 5.5x+ leverage where the senior tranche needs the extra cushion',
    [
      ['Yes — second-liens always improve TLB recovery and should be standard at any leverage level', 'Second-liens improve TLB recovery only if the senior tranche actually needs the cushion. At 4.1x with $120M of notes behind it, the TLB is already well-covered. Adding a second-lien at SOFR+725 is expensive insurance the deal does not need.'],
      ['Yes — second-liens give the sponsor more total debt capacity and reduce equity', 'The sponsor is not constrained on total debt capacity at 4.1x — adding leverage by inserting a second-lien at +725 is the most expensive way to do it and undermines the conservative posture that is part of Apex\'s credit story.'],
      ['No — second-liens are obsolete in the current market and not available', 'Second-liens are alive and well in the LL market; the reason to skip on Apex is fit, not market availability. The memo should be specific about *why* the structure does not need one, not claim the product is gone.'],
    ],
    'Subordinated/second-lien layers earn their place when the senior tranche needs structural cushion that equity and unsecured notes cannot provide — typically at 5.5x+ leverage. At Apex\'s 4.1x with a $120M unsecured layer, the second-lien is uneconomic insurance. Knowing when *not* to add a tranche is part of the underwriter\'s discipline.'),

  q(4410507, 'Career Skills', CHAPTER, 'Equity contribution adequacy',
    'Glasswing is contributing $250M of equity into a $720M EV (~35% equity). Sponsor LBO equity contributions in industrial distribution typically run 35–45%. Why is Apex\'s 35% on the low end of the range, and is it adequate?',
    'It is at the low end and adequate but tight — Apex\'s lower leverage (4.1x vs peer 5.5x) means equity is not bearing as much risk per dollar, but the conservative posture is also why the contribution can sit lower without breaking the credit case; pushing equity below 30% would be where it becomes inadequate',
    [
      ['It is inadequate — sponsor equity should always be 40%+ on industrial LBOs', '40%+ is a rule of thumb, not a binding standard. Equity contribution needs to be sized against leverage and credit quality — Apex\'s 4.1x leverage justifies less equity than a 6x deal would.'],
      ['It is more than adequate — 35% is well above the leveraged finance market median of 25%', '25% is below where sponsors actually contribute on broadly syndicated LBOs and would not be approvable by most committees. The bar is closer to 30–40% depending on credit quality and cyclicality.'],
      ['Equity contribution is a sponsor concern and does not affect underwriting — the bank only cares about the debt', 'Equity contribution directly affects underwriting because it sets the cushion below the debt. A thinner equity layer means smaller equity wipeout before lenders take losses. This is core to the credit case.'],
    ],
    'Equity contribution sizing is the first line of recovery defense for lenders. The equity layer absorbs the first dollar of value loss, so its thickness matters as much as the leverage ratio. Apex\'s 35% is the floor of acceptability for an industrial cyclical name at this leverage — pushing lower would meaningfully change the credit case.'),

  q(4410508, 'Career Skills', CHAPTER, 'Pro forma rating implication',
    'Apex is unrated today (family-owned, no debt). The TLB pricing model assumes B1/B+ ratings. Given $115M EBITDA, 4.1x leverage, $480M of revenue exposure to industrial cycle, and a sticky customer base — what rating outcome should you assume the agencies will land on?',
    'B1/B+ is the realistic midpoint — Apex\'s scale, leverage, and FCF profile are within the B1 band, but cyclical exposure and lack of operating debt history will pin the rating at single-B rather than Ba/BB, and a downgrade trigger to B2/B is plausible if the downside case plays out',
    [
      ['Ba2/BB given the conservative leverage and sticky customer base', 'Ba/BB ratings typically require scale ($300M+ EBITDA), more diversified revenue, and demonstrated debt-service history. Apex\'s $115M EBITDA, cyclical exposure, and no debt history put it firmly in single-B territory regardless of the leverage ratio.'],
      ['B3/B- because the cyclical industrial exposure dominates the rating committee\'s view', 'B3/B- ratings imply much higher default probability and would typically come with 5.5x+ leverage, weaker FCF, or significant operating issues. Apex\'s profile is stronger than B3 — the leverage and FCF support B1/B+.'],
      ['Investment grade is achievable given the conservative leverage', 'Investment grade is structurally inconsistent with sponsor LBO ownership at 4.1x leverage. The sponsor\'s exit horizon, dividend recap optionality, and the leveraged loan tranches all push the rating into the speculative-grade band.'],
    ],
    'Rating outcomes on an LBO are driven by leverage *and* business risk *and* ownership structure. A sponsor-backed, single-product industrial distributor at 4.1x lands in the B1/B+ band — the leverage is supportive but cyclicality and sponsor ownership keep it from crossing into Ba/BB. Knowing where the rating committee will likely land informs both pricing and covenant negotiation.'),

  q(4410509, 'Career Skills', CHAPTER, 'Pricing flex assumed in the underwriting',
    'The underwriting memo for Apex assumes the TLB clears at SOFR+400 and the notes at 8.5%, but you ask Glasswing to agree to "flex" of up to 50bps on the TLB and 75bps on the notes if market conditions deteriorate. Why is this flex provision the right ask?',
    'Underwriting commitments expose the bank to syndication risk between signing and close — the flex gives the underwriter the ability to clear the deal at higher pricing without losing money, in exchange for the sponsor taking some of the market risk; without flex, the bank holds the gap',
    [
      ['Flex is automatic in leveraged finance and does not need to be negotiated', 'Flex terms are explicitly negotiated, not automatic — every commitment letter spells out flex caps and triggers. Assuming flex without locking it in leaves the bank exposed if the sponsor disagrees mid-syndication.'],
      ['Flex protects the sponsor by capping how much the bank can move pricing', 'Flex *is* the bank\'s right to move pricing — it transfers market risk to the sponsor in exchange for the underwriting commitment. From the sponsor\'s side flex is a concession, not a protection.'],
      ['Flex is only needed for the notes since bond markets are more volatile than loan markets', 'TLB pricing is also volatile — loan investor demand can shift quickly with CLO formation pace and risk appetite. Underwriters need flex on *both* tranches when committing to a deal that will syndicate over weeks.'],
    ],
    'Underwriting flex is the bank\'s insurance against the syndication window. The commitment to provide the debt is firm at signing, but pricing risk between signing and clearing the market sits with whoever did not negotiate flex. Senior underwriters insist on flex on both tranches; the size and shape of flex (pricing, OID, structure) is the negotiation that protects the bank\'s P&L on the deal.'),

  // -------------------------------------------------------------------------
  // LESSON 2 — Credit analysis (4410510–4410519)
  // Output: a defensible view of Apex's earnings power and FCF, with the
  // sensitivities the credit committee will actually ask about. Forces the
  // analyst to separate sponsor-model optimism from underwriting case.
  // -------------------------------------------------------------------------
  q(4410510, 'Career Skills', CHAPTER, 'EBITDA add-backs to challenge',
    'The Apex CIM presents $115M LTM EBITDA after $12M of add-backs: $4M sponsor synergies, $3M deal-related expenses, $3M IT system replacement project (one-time), $2M founder compensation normalization. Which add-back should the credit committee push back on hardest?',
    'The $4M sponsor synergies — Apex has not actually realized them, the sponsor has not yet owned the company, and there is no evidence of identified cost actions; this is forward-looking optimism dressed as historical normalization and should come out of LTM EBITDA',
    [
      ['The $2M founder compensation normalization — adjusting owner pay is opportunistic', 'Founder compensation normalization to a market-rate CEO salary is standard and defensible — it reflects what the cost actually will be post-close. The credit committee accepts this with documentation.'],
      ['The $3M deal-related expenses — transaction costs are part of doing the deal and should not be added back', 'Deal-related expenses (legal, advisory, accounting on the transaction) are widely accepted as one-time and add-backable. The committee rarely contests these when properly documented.'],
      ['The $3M IT system replacement — IT capex should not be in EBITDA at all', 'The IT *project* in question is described as one-time expense (not capex) — typically a system migration or implementation cost. If properly classified as one-time opex, it is a defensible add-back. The bigger issue is the synergy add-back.'],
    ],
    'EBITDA add-back scrutiny is the heart of credit committee discipline. Founder normalization and deal costs are routine; forward-looking synergies that have not been realized are the canonical red flag. The credit case should be built on EBITDA that has actually happened, with synergies treated as upside, not in the base.'),

  q(4410511, 'Career Skills', CHAPTER, 'FCF conversion for Apex',
    'Apex EBITDA is $115M. Capex runs ~1.5% of sales ($9M), interest at ~$32M, cash taxes at ~$15M, and working capital is a $2M annual drag in a flat year. What is the realistic FCF profile and how should it be framed in the memo?',
    'Roughly $57M of free cash flow ($115M EBITDA – $9M capex – $32M interest – $15M taxes – $2M WC), translating to ~50% EBITDA-to-FCF conversion — strong for a leveraged industrial credit and supports both meaningful deleveraging and the dividend recap optionality the sponsor will want',
    [
      ['~$30M of FCF, reflecting a more conservative view of working capital and taxes', 'A $30M figure implies $25M+ of additional drag from working capital or taxes that the question does not support. Underwriting cases should reflect realistic, evidence-anchored numbers rather than performative conservatism.'],
      ['~$80M of FCF, since interest expense should be net of the cash tax shield', 'The $15M cash taxes figure should already reflect the interest tax shield. Removing interest from the FCF bridge double-counts the benefit and inflates the headline.'],
      ['FCF cannot be reliably estimated until the post-close cap structure is finalized', 'Post-close cap structure is what the underwriting case is *based on* — the FCF estimate uses the proposed cap structure. Deferring the FCF answer to a future date defeats the purpose of the credit case.'],
    ],
    'FCF conversion is the most-watched metric in leveraged credit. ~50% EBITDA-to-FCF is strong for an industrial credit at this leverage and supports both the deleveraging path the credit committee wants to see and the sponsor\'s eventual recap option. Walking the bridge honestly — EBITDA, capex, interest, taxes, working capital — is what makes the case defensible.'),

  q(4410512, 'Career Skills', CHAPTER, 'Interest coverage at close',
    'Apex\'s pro forma interest expense at close is: $300M TLB at SOFR+400 (~9.3% all-in at current SOFR) = $28M, $120M notes at 8.5% = $10M, plus ~$1M revolver commitment fees and unused capacity = ~$39M of cash interest. EBITDA is $115M. What is the interest coverage ratio and how should it be framed?',
    '~2.9x EBITDA-to-interest coverage — within the 2.5–3.5x range typical for B1/B+ sponsor LBOs, but on the lower end given the floating-rate exposure on the TLB; the credit committee should ask what happens if SOFR climbs another 100bps',
    [
      ['~3.6x coverage when notes interest is excluded from the denominator', 'Notes interest is cash interest and cannot be excluded from the coverage ratio. Coverage metrics include all cash interest obligations — selectively excluding tranches is exactly the modeling trick committees catch.'],
      ['~2.0x coverage if you assume SOFR climbs another 200bps', '2.0x is the *stressed* coverage figure under a specific rate shock — useful for the sensitivity table but not the base case reading. The base case sits at ~2.9x and the rate sensitivity is a separate line.'],
      ['Coverage is not a useful metric for cov-lite credits since there is no interest coverage covenant', 'Even without an interest coverage covenant, the metric is central to credit committee analysis and rating agency views. The covenant package does not change what the metric tells you about the company\'s ability to service debt.'],
    ],
    'Interest coverage at close is one of the two primary credit metrics (along with leverage). At ~2.9x Apex sits within the B1/B+ band but on the lower end — driven by the floating-rate TLB. The right discipline is to present the base case, the rate-sensitivity table (+100/+200bps), and the floor where coverage would breach concern thresholds.'),

  q(4410513, 'Career Skills', CHAPTER, 'Revenue sensitivity to industrial cycle',
    'Apex\'s revenue grew 6% in the LTM. Industrial distribution typically sees 8–15% revenue declines during industrial recessions (e.g., 2008, 2020). The sponsor model assumes 5% growth through the hold period with no recession. How should the underwriting case treat this?',
    'Build a downside case with a 12% revenue decline in year 2 (mid-cycle recession scenario), recovering 6% in year 3 — and show the credit metrics in that case; an underwriting that assumes no recession in a 5-year hold is not an underwriting, it is a sales pitch',
    [
      ['Use the sponsor case as-is because Apex has been growing and the recession is hypothetical', 'Using the sponsor case as-is means the bank has no credit view distinct from the sponsor — the entire point of the underwriting analysis is to add a downside scenario the sponsor model omits.'],
      ['Assume a flat revenue scenario as the conservative case, since industrial recessions are unpredictable', 'Flat revenue understates the historical industrial cycle. Industrial distributors actually do decline 8–15% in recessions — a flat case is not conservative, it is wrong on the data.'],
      ['Build a 20%+ revenue decline scenario to be maximally cautious', 'A 20%+ decline is more severe than typical industrial recessions for a distributor like Apex — building an unrealistic worst case can be just as misleading as the sponsor\'s no-recession case. Anchor on actual historical declines.'],
    ],
    'Underwriting cases require an honest read of the historical cycle, not the sponsor\'s preferred case. For industrial distribution, a 10–15% peak-to-trough revenue decline is the right base downside, with a 1-year recovery thereafter. The credit metrics in that case — leverage spike, coverage compression, FCF collapse — are what the committee should be evaluating.'),

  q(4410514, 'Career Skills', CHAPTER, 'Margin sensitivity and operating leverage',
    'Apex\'s 16% EBITDA margin reflects modest operating leverage: cost of goods is ~75% of sales (largely variable), and operating costs are ~9% of sales (largely fixed). In a 12% revenue decline scenario, how does the margin actually behave?',
    'EBITDA margin compresses to ~12% because the ~9% of fixed costs do not scale down — revenue falls 12% but EBITDA falls ~33% (from $115M to ~$77M); operating leverage works in both directions and the downside model has to reflect the fixed-cost drag',
    [
      ['Margin stays at 16% because gross margin is preserved in a volume decline', 'Margin does not stay at 16% if any costs are fixed. Apex\'s ~9% fixed cost base means revenue declines hit EBITDA disproportionately — that is what operating leverage means in a downside.'],
      ['Margin expands as Apex cuts variable costs faster than revenue declines', 'You cannot cut variable costs faster than revenue — variable costs scale *with* revenue by definition. Margin in a downside compresses, not expands, on any business with meaningful fixed costs.'],
      ['Margin compresses to ~10% based on a 1:1 operating leverage assumption', 'A 1:1 operating leverage ratio is a generic rule that may not match Apex\'s actual cost structure. The math here — 75% variable, 9% fixed — gives roughly a 33% EBITDA drop on a 12% revenue drop, which is closer to ~12% margin.'],
    ],
    'Operating leverage cuts both ways. Apex\'s ~9% fixed cost base means EBITDA falls roughly 3x as fast as revenue in a downside scenario. The honest underwriting math walks the variable/fixed cost split and shows the margin path explicitly — that is how the committee sees the real downside, not just the headline revenue decline.'),

  q(4410515, 'Career Skills', CHAPTER, 'Working capital seasonality',
    'Apex\'s working capital cycle peaks in Q2 (industrial customers stocking for summer construction season) and troughs in Q4. The intra-year swing is ~$25M. What does this mean for the revolver and the FCF presentation?',
    'The revolver carries the Q2 working-capital build, so peak revolver draw of $20–25M is normal mid-year and should be modeled — and annual FCF should be reported on a fiscal-year basis to avoid masking the intra-year liquidity need',
    [
      ['Working capital is seasonal but immaterial because it averages to zero across the year', 'It averages to zero only if you ignore intra-year liquidity. The peak draw still requires committed capacity, so the revolver has to be sized for the *peak*, not the average — even though FCF on an annual basis is unaffected.'],
      ['Seasonality should push the revolver to $75M+ to handle peak working capital plus a cushion', '$25M peak swing does not require $75M of revolver capacity. The current $50M is sized to cover the peak draw plus buffer for capex and acquisitions — going to $75M is oversized capacity that the borrower will not use.'],
      ['Seasonality is a borrower problem and does not affect the bank\'s underwriting view', 'Seasonality directly affects revolver utilization, peak leverage points, and the year-end metrics presented to lenders. The bank cannot underwrite to LTM metrics if peak leverage is materially higher than year-end.'],
    ],
    'Seasonal working-capital businesses require the underwriter to look beyond LTM metrics to peak-quarter leverage and peak revolver draw. Apex\'s $25M intra-year swing is manageable inside the $50M revolver, but the committee should see the intra-year picture explicitly, not just the year-end snapshot.'),

  q(4410516, 'Career Skills', CHAPTER, 'Customer concentration drag',
    'Apex\'s top 10 customers represent 35% of revenue, with the largest single customer at 9%. None of the top 10 are concentrated in a single end-market. How should the underwriting memo treat this concentration profile?',
    'Acceptable concentration for a B-rated industrial distributor — 9% top customer is below the typical concern threshold (~15%) and the top-10 spread across multiple end-markets reduces idiosyncratic risk; flag it as a risk to monitor but not a structural issue',
    [
      ['Severe concentration risk — 35% in the top 10 means a single sectoral downturn could halve revenue', 'A 35% top-10 figure with diversified end-markets is well within acceptable distribution concentration. Calling it "severe" misreads the diversification within the top-10 list.'],
      ['No concentration risk because the top customer is below 10%', 'The top-customer test is one input but not the only one. The top-10 figure, end-market spread, and contractual structure also matter — concentration analysis is a portfolio view, not a single-customer cutoff.'],
      ['Concentration risk cannot be assessed without seeing customer contracts', 'Customer contract terms matter for cash flow timing but the *concentration* metric (top-customer, top-10) is observable from revenue data. Deferring the question for contract review is a way of avoiding the analysis.'],
    ],
    'Customer concentration scrutiny is a portfolio question: how much revenue sits in the top-N customers, are they in the same end-market, and do they have switching cost or contractual stickiness? Apex\'s profile — 9% top, 35% top-10, end-market diversified — is workable for a B-rated credit. The flag is "monitor," not "block."'),

  q(4410517, 'Career Skills', CHAPTER, 'Capex truth vs sponsor model',
    'The sponsor model shows capex declining from $9M (1.5% of revenue) today to $7M by year 3 as the sponsor "optimizes capital allocation." Apex\'s actual capex in the prior three years averaged $10M. What should the underwriting case use?',
    'Use $10–11M (a slight uplift from the trailing average), not the sponsor\'s declining number — distributors require ongoing investment in warehouses, fleet, and IT; sponsors routinely show capex declines that do not materialize, and the FCF case has to be built on what Apex actually needs to spend',
    [
      ['Use the sponsor\'s $7M figure since the sponsor has visibility into the optimization plan', 'The sponsor\'s "optimization" is the sponsor\'s pitch, not Apex\'s historical reality. The underwriter\'s job is to challenge the sponsor case, not adopt it — particularly on capex, where sponsor optimism is a documented pattern.'],
      ['Use the average of the sponsor case and the historical actuals ($8.5M)', 'Splitting the difference is not analysis. The right answer is to use what Apex actually needs to spend, not to mechanically average the two cases.'],
      ['Capex is a forecasting input that does not materially affect the credit case', 'Capex sits in the FCF bridge and directly affects deleveraging, dividend recap capacity, and refi profile. A $3M annual error compounded over 5 years is $15M of FCF mis-stated — material.'],
    ],
    'Capex is one of the canonical sponsor-optimism areas. The underwriter\'s discipline is to anchor on historical actuals plus any documented operational change, not on the sponsor\'s declining trajectory. For Apex, $10–11M is the honest number; the sponsor\'s $7M is the marketing number.'),

  q(4410518, 'Career Skills', CHAPTER, 'Cash taxes through the hold',
    'Apex is currently a pass-through S-corporation. Post-LBO it will be a C-corp with $39M of cash interest creating a tax shield. The sponsor model shows cash taxes at $8M in year 1, rising to $15M by year 5 as deleveraging shrinks the interest shield. How should the underwriting model treat this?',
    'Use the sponsor\'s general shape — taxes are low early when interest expense is high, rising as the company deleverages — but stress-test it against the slower deleveraging path the underwriting case implies, since less deleveraging means more shield and lower taxes',
    [
      ['Use a flat $15M cash tax assumption across all years to be conservative', 'Flat taxes are *less* conservative on FCF in the early years (when shield is largest) and *more* conservative later. Mechanical flattening is not a credit-positive simplification.'],
      ['Cash taxes are immaterial because the interest shield will cover them', 'The interest shield reduces taxes but does not eliminate them — Apex still owes federal and state income tax on pre-shield income. Treating taxes as zero is wrong on the math.'],
      ['Use the highest marginal corporate rate (~25%) applied to pre-shield EBIT to be conservative', 'Pre-shield EBIT taxation overstates taxes because the interest shield is real and deductible — it is not a conservatism, it is a modeling error. The right approach uses post-shield taxable income.'],
    ],
    'Cash taxes through the hold period interact directly with the interest shield and the deleveraging path. The honest model walks the tax bridge year by year, reflecting how the shield shrinks as debt is paid down. Apex\'s sponsor model has the right shape; the underwriter\'s job is to stress the path under the slower-deleveraging downside case.'),

  q(4410519, 'Career Skills', CHAPTER, 'Quality of earnings findings to weight',
    'The QofE report on Apex flags: (1) $3M of revenue from a customer that has churned post-period, (2) inventory obsolescence reserves under-provisioned by $2M, (3) accrued bonuses paid in stock rather than cash, (4) reclassification of $1M of "other income" from supplier rebates. Which finding most needs to be reflected in EBITDA?',
    'Items (1) and (2) reduce EBITDA — the churned customer\'s revenue should not be in LTM, and the inventory under-reserve overstates gross margin; these are real adjustments to the earnings base that the committee should make to LTM EBITDA',
    [
      ['Only item (1) — churn is the most material to a forward view', 'The forward view of churn matters, but the QofE\'s job is to clean *historical* EBITDA. The under-reserved inventory is a real adjustment to historical reported earnings and belongs in the cleanup as much as the churn revenue.'],
      ['Only item (3) — stock bonuses should be treated as cash compensation in EBITDA', 'Stock bonuses paid in equity are non-cash and the EBITDA treatment is consistent with GAAP — they are typically already adjusted in the cash flow statement. This is the smallest of the four findings.'],
      ['All four findings reduce EBITDA equally', 'They do not reduce EBITDA equally — the supplier rebates (#4) may legitimately be operating income if the rebates relate to ongoing supplier relationships. Treating them as one-time without analysis is the error.'],
    ],
    'QofE findings vary in materiality and the underwriter\'s job is to figure out which ones move LTM EBITDA. Churned customer revenue and under-reserved inventory both directly understate cost of revenue or overstate revenue — these are real adjustments. Stock bonuses and rebate classifications need more analysis before making the call.'),

  // -------------------------------------------------------------------------
  // LESSON 3 — Covenant package (4410520–4410529)
  // Output: a defensible cov-lite TLB and senior unsecured notes covenant
  // package for a sponsor LBO. Forces the analyst to distinguish standard
  // sponsor protections from sponsor overreach worth flexing back.
  // -------------------------------------------------------------------------
  q(4410520, 'Career Skills', CHAPTER, 'Cov-lite — what it does and doesn\'t waive',
    'The Apex TLB is proposed as cov-lite. Junior lenders sometimes assume this means "no covenants." What does cov-lite actually mean in practice for the Apex TLB?',
    'Cov-lite waives *maintenance* financial covenants (no quarterly leverage or coverage tests on the TLB) but retains incurrence-based covenants — Apex still cannot incur additional debt, make restricted payments, or sell assets without meeting incurrence tests, and the revolver typically retains a springing covenant',
    [
      ['Cov-lite means the borrower has no financial obligations to the lender other than payment', 'Cov-lite still imposes incurrence covenants, mandatory prepayment provisions, and affirmative/negative covenants. The waiver is specifically of *maintenance* tests, not all covenants — this is the most common analyst misunderstanding.'],
      ['Cov-lite means there are no covenants on the revolver either', 'Revolvers typically retain a springing financial covenant (e.g., 7.0x leverage that tests only if revolver utilization exceeds 35–40%). The TLB is cov-lite; the revolver almost never is.'],
      ['Cov-lite means the lender cannot accelerate the loan in any circumstance', 'Lenders can still accelerate for payment default, cross-default, change of control, bankruptcy, and other standard events of default. Cov-lite removes the maintenance-covenant trigger, not all triggers.'],
    ],
    'Cov-lite is one of the most misunderstood pieces of leveraged finance terminology. It specifically removes quarterly maintenance financial covenants from the TLB while leaving the broader covenant architecture intact. Knowing exactly what is removed (and what is not) is foundational to evaluating the deal.'),

  q(4410521, 'Career Skills', CHAPTER, 'Springing fin cov on the revolver',
    'The Apex revolver has a springing financial covenant at 35% utilization: if drawn above $17.5M, a 7.0x leverage covenant tests quarterly. The sponsor wants the trigger pushed to 40% and the leverage covenant to 7.5x. Should the underwriter push back?',
    'Push back on both — the springing covenant exists precisely so the revolver lenders have a brake before the borrower over-draws the line; loosening the trigger and the test together waters down the protection that justified the cov-lite TLB structure in the first place',
    [
      ['Accept the change because the springing covenant is symbolic and rarely triggers anyway', 'Springing covenants do trigger in real distress scenarios — they are the protection of last resort for revolver lenders. Treating them as symbolic is the kind of mistake that costs the bank in a workout.'],
      ['Push back only on the leverage test (keep 7.0x) but allow the 40% utilization trigger', 'Loosening either dimension waters down the protection — moving the trigger to 40% gives the borrower another 5% of utilization headroom without covenant risk, which is exactly what the covenant is designed to prevent.'],
      ['Accept the 7.5x leverage test but keep the 35% utilization trigger', 'The 7.0x leverage test is the right number for a credit with 4.1x close leverage — a 7.5x covenant would not test until the company is already deep into distress. Loosening the test undermines the design intent.'],
    ],
    'Springing financial covenants on cov-lite revolvers are the structural protection that makes the cov-lite TLB acceptable. Both the trigger (utilization threshold) and the test (leverage covenant level) are negotiated together; loosening either weakens the package. This is where sponsors routinely push and where underwriters routinely hold.'),

  q(4410522, 'Career Skills', CHAPTER, 'EBITDA definition and add-back caps',
    'The Apex credit agreement defines EBITDA with uncapped add-backs for synergies, cost savings, and "extraordinary items." The sponsor argues this is market standard. What is the underwriter\'s right ask?',
    'Cap the synergies and cost-savings add-backs at 25% of unadjusted EBITDA and require them to be projected to be realized within 18–24 months — uncapped add-backs let the borrower manufacture covenant headroom and inflate baskets, which is the central abuse that has driven recent loan-doc litigation',
    [
      ['Accept the uncapped add-backs because it is market standard for sponsor LBOs', 'Uncapped add-backs are now contested in the market and major underwriters routinely push for caps (often 20–25% of EBITDA). Calling it "standard" is shorthand for the sponsor\'s preferred starting point, not a fixed market norm.'],
      ['Eliminate all add-backs and use unadjusted GAAP EBITDA', 'Eliminating all add-backs goes beyond market practice and would not clear the deal. Reasonable add-backs (deal costs, one-time items) are accepted; the negotiation is around *uncapped* add-backs and forward-looking synergies.'],
      ['Cap only the forward-looking synergies but leave one-time items uncapped', 'One-time items also need caps in practice — without caps, "one-time" becomes a flexible category that the borrower can stretch. The right protection caps the *aggregate* add-backs to prevent manufactured headroom.'],
    ],
    'EBITDA definition and add-back caps are the load-bearing piece of the covenant package because every other test (leverage, coverage, incurrence, baskets) flows through the EBITDA number. Capping add-backs is what stops the borrower from manufacturing covenant headroom and inflating debt-incurrence capacity — this is the most important negotiation in the doc.'),

  q(4410523, 'Career Skills', CHAPTER, 'Restricted payments capacity',
    'The sponsor wants Restricted Payments capacity of $50M starter basket plus a "builder basket" that grows by 50% of cumulative consolidated net income. At 4.1x leverage and $115M EBITDA, what is the right pushback?',
    'Reduce the starter basket to $25M and cap the builder basket at $100M (or impose a leverage-based incurrence test where the basket is only usable if pro forma leverage is below 4.0x) — the structure as proposed lets the sponsor dividend-recap aggressively before any deleveraging has happened',
    [
      ['Accept the package because Restricted Payments capacity is the sponsor\'s prerogative', 'RP capacity is heavily negotiated, not a unilateral sponsor right. The lender\'s position is that dividends to the sponsor should require demonstrated deleveraging — that is what the RP covenant is for.'],
      ['Block all Restricted Payments until the TLB is fully repaid', 'Blocking all RP is non-market and the sponsor will not accept it. RP capacity exists; the negotiation is around *how much* and *when*, not whether it exists at all.'],
      ['Allow uncapped RP but require quarterly lender notification', 'Quarterly notification does not stop a payment — by the time lenders see the notice, the dividend has been paid. The protection has to be in the *capacity*, not in the notification mechanic.'],
    ],
    'Restricted Payments capacity is where the sponsor extracts equity returns through dividend recaps and where lenders push to ensure those distributions only happen after meaningful deleveraging. The right protection is a leverage-based incurrence test (only usable below a leverage threshold) plus capped starter and builder baskets — this aligns sponsor distributions with the credit story.'),

  q(4410524, 'Career Skills', CHAPTER, 'Incremental / accordion sizing',
    'The Apex credit agreement proposes an incremental facility (accordion) of "up to the greater of $150M or 100% of EBITDA" plus "unlimited if pro forma first-lien leverage is below 4.0x." What is the structural problem with this?',
    'The "unlimited below 4.0x" basket is the issue — it lets the borrower issue an unlimited amount of incremental first-lien debt as long as they pass a 4.0x test, which on $115M EBITDA means $460M+ of new first-lien debt the original TLB lenders did not consent to; cap the unlimited basket or require a leverage *ratio* test (e.g., ≤4.0x at close)',
    [
      ['The $150M fixed basket is too large — that alone could push leverage to 5.4x', '$150M of incremental on top of the existing stack is significant but governed by a leverage test in most cases. The real problem is the *unlimited* basket below 4.0x, not the fixed $150M.'],
      ['The 100% of EBITDA grower is the issue because it scales with the borrower\'s own metric', 'Grower baskets tied to EBITDA are widely accepted in market — they scale with the business. The concerning piece is the unlimited bucket, not the grower.'],
      ['Accordion facilities are dangerous in principle and should be removed entirely', 'Accordion facilities are standard and serve a legitimate purpose (acquisition financing, growth capex). The negotiation is over the *size* and the *terms* of incremental, not whether accordion exists.'],
    ],
    'Incremental/accordion sizing is one of the most quietly load-bearing pieces of the covenant package because it determines how much debt the borrower can pile on without going back to the lender group. "Unlimited if leverage below X" baskets are the canonical aggressive sponsor move — they need explicit caps or the original lenders\' protection erodes the moment leverage trends down.'),

  q(4410525, 'Career Skills', CHAPTER, 'Mandatory prepayments from excess cash flow',
    'The Apex TLB proposed Excess Cash Flow sweep is 50% with step-downs to 25% at <4.0x and 0% at <3.5x leverage. The sponsor wants a 25% sweep stepping to 0% at <4.0x. Which is the right answer for a 4.1x close leverage credit?',
    '50% with step-downs is appropriate because Apex closes at 4.1x — the sweep is the lender\'s mechanism to force deleveraging in the first 12–18 months when the credit is most exposed; loosening to 25% removes the deleveraging engine the credit case relied on',
    [
      ['The sponsor\'s 25% is fine because cov-lite credits typically have lighter ECF sweeps', 'Cov-lite credits do trend toward lighter sweeps but the *starting* level matters and Apex starts at 4.1x with no operating debt history. A 25% sweep removes most of the deleveraging discipline at exactly the moment it matters.'],
      ['Push for a 75%+ sweep with no step-downs to maximize lender protection', 'A 75% sweep with no step-downs is non-market for a sponsor LBO and would not clear the negotiation. The realistic ask is 50% with step-downs — that is what the market actually accepts at this leverage.'],
      ['ECF sweeps are not necessary because the company will deleverage organically through FCF', 'Organic deleveraging through FCF is exactly what the ECF sweep formalizes — it converts the *expectation* into an obligation. Without the sweep, FCF can be used for dividends, M&A, or sat on as cash.'],
    ],
    'Excess Cash Flow sweeps are the formal mechanism that turns a "credit case will deleverage" expectation into a contractual reality. The standard structure (50% sweep with step-downs at leverage thresholds) is the market\'s answer for sponsor LBOs at this leverage. Underwriters give up too easily on the sweep level — this is the lever that actually drives debt reduction.'),

  q(4410526, 'Career Skills', CHAPTER, 'Asset sale sweep mechanics',
    'Apex has $50M of non-core warehouse real estate that the sponsor expects to sell within 18 months for ~$30M. The TLB asset-sale prepayment provision sweeps 100% of net proceeds unless reinvested in operating assets within 12 months. The sponsor wants the reinvestment window extended to 24 months and the sweep reduced to 50%. The right response?',
    'Keep the 100% sweep and 12-month reinvestment window — at 4.1x leverage with the deal just closed, the borrower should be returning asset-sale proceeds to lenders, not extending the window to redeploy them; the warehouse sale is a deleveraging opportunity the credit case anticipates',
    [
      ['Accept both changes because asset sales are within the sponsor\'s discretion', 'Asset sales of meaningful size are explicitly governed by the credit agreement, including mandatory prepayment of proceeds. The sponsor cannot redirect $30M of proceeds to dividends or M&A without lender consent — that is the mechanism the sweep enforces.'],
      ['Accept the 24-month reinvestment but keep the 100% sweep', 'Extending the reinvestment window to 24 months is too long — the borrower can effectively hold the cash for two years, defeating the deleveraging purpose. 12 months is the market standard for a reason.'],
      ['Accept the 50% sweep but keep the 12-month reinvestment window', '50% sweep means $15M of $30M proceeds goes to dividends or general corporate purposes rather than debt reduction — this directly contradicts the deleveraging path the credit case relies on.'],
    ],
    'Asset-sale sweep mechanics are about who gets the proceeds of monetizing the balance sheet. At 4.1x close leverage, the right answer is that asset-sale proceeds deleverage the company unless promptly redeployed into operating assets — this is the discipline that turns the deleveraging case from aspiration into mechanical reality.'),

  q(4410527, 'Career Skills', CHAPTER, 'Permitted indebtedness baskets',
    'The Apex credit agreement permits the following debt baskets in addition to the senior facilities: $25M general purpose, $50M acquisition financing, $30M capital leases, $40M factoring/securitization, and unlimited "permitted refinancing." The sponsor calls this "minimal flexibility." How should the underwriter assess the aggregate?',
    'The aggregate is $145M+ of permitted incremental debt on top of $420M of funded debt — that is meaningful additional capacity (~1.25x of EBITDA) and the underwriter should ensure the *aggregate* sits within a leverage ceiling, not just check the individual baskets',
    [
      ['Each basket is reasonable in isolation so the aggregate is acceptable', 'Stacked baskets are the classic blind spot — individual lines look small but combined they create material headroom. The discipline is to look at the aggregate as a percentage of EBITDA and impose a leverage ceiling.'],
      ['The unlimited permitted refinancing basket is the only issue', 'Permitted refinancing is generally protective (it allows refi without lender vote on like-for-like terms) and is reasonable as unlimited. The aggregate of the other baskets is the more material concern.'],
      ['Permitted indebtedness baskets do not matter because they require leverage tests to access', 'Many permitted debt baskets are *uncapped by leverage test* — they are flat-dollar amounts the borrower can use regardless of leverage. That is exactly why the aggregate matters.'],
    ],
    'Permitted indebtedness analysis is the discipline of looking at the aggregate, not the individual baskets. Sponsor docs routinely list each basket as reasonable in isolation while the total adds up to 1–2x EBITDA of additional capacity. The right framing is a portfolio view with an aggregate leverage ceiling, not a basket-by-basket review.'),

  q(4410528, 'Career Skills', CHAPTER, 'J. Crew / Chewy-style protections',
    'Recent sponsor cases (J. Crew, Chewy, Envision, Serta) have featured borrowers moving collateral to unrestricted subsidiaries to raise new "priming" debt. The Apex docs propose standard "unrestricted subsidiary" language. What protection should the underwriter insist on?',
    'Require explicit blockers: a cap on the value of IP and material assets that can be transferred to unrestricted subsidiaries, an explicit prohibition on transferring material IP outside the credit group, and a leverage test that must be met before any unrestricted-sub designation — the J. Crew patterns are now well-known and lenders should price them out',
    [
      ['The standard unrestricted subsidiary language is fine because Apex is a smaller credit and not likely to attempt these moves', 'The size of the borrower is not the protection — the J. Crew patterns are well-documented templates that any sponsor can copy. The protection has to be in the docs, not in the assumption that this borrower will not try.'],
      ['Forbid unrestricted subsidiaries entirely in the credit agreement', 'Forbidding unrestricted subs entirely is non-market and would block legitimate structures (foreign subs, JVs, immaterial subs). The negotiation is over *what can be transferred*, not whether unrestricted subs exist at all.'],
      ['Rely on the implied covenant of good faith if the sponsor attempts a J. Crew move', 'Implied covenants do not stop a J. Crew-style transfer — courts have generally enforced these moves where the docs allowed them. The protection has to be specific and contractual, not implied.'],
    ],
    'J. Crew/Chewy/Serta-style maneuvers are now the central focus of leveraged loan documentation work. The protections — caps on transferable IP/assets, prohibitions on material IP transfers, leverage tests on unrestricted-sub designations — have to be specific in the docs because the courts have been unwilling to read protections into agreements that did not have them.'),

  q(4410529, 'Career Skills', CHAPTER, 'Trap doors and most-favored-nation drift',
    'The Apex docs include a most-favored-nation (MFN) provision: if Apex incurs incremental debt with higher yield than the existing TLB, the existing TLB yield steps up to match. The sponsor wants a 75bps "MFN cushion" (incremental can yield up to 75bps higher without triggering MFN) and a 12-month sunset on MFN entirely. The underwriter\'s right stance?',
    'Hold the MFN tight: 50bps cushion (not 75bps) and no sunset — the MFN is the protection that prevents the borrower from issuing a new "priming" tranche that prices above the existing TLB and effectively makes the existing TLB look mispriced; loosening it lets new lenders extract better terms at the existing lenders\' expense',
    [
      ['Accept the 75bps cushion and 12-month sunset because MFN is a sponsor-borrower concession not core to credit protection', 'MFN is core to TLB-lender protection — it ensures the existing tranche is not subordinated by pricing through new debt at better terms. Loosening it is one of the canonical aggressive sponsor moves over the last cycle.'],
      ['Eliminate MFN entirely since it complicates incremental issuance', 'Eliminating MFN entirely removes a core protection. The cleanest stance is to keep MFN with a tight cushion and no sunset — incremental issuance can still happen, but at terms that respect the existing TLB.'],
      ['Accept the sunset but hold the cushion at 50bps', 'A sunset is the more dangerous concession because it eliminates the protection entirely after 12 months. Cushion levels matter less than whether the protection persists for the life of the loan.'],
    ],
    'MFN provisions and their cushions/sunsets are where the most aggressive sponsor drift has happened in recent cycles. The protection only works if the cushion is tight (50bps not 75bps+) and persists for the life of the loan. Sunsets are particularly damaging because they remove the protection at exactly the moment the sponsor most wants to issue priming debt.'),

  // -------------------------------------------------------------------------
  // LESSON 4 — Stress test + recovery (4410530–4410539)
  // Output: a credible downside case and recovery analysis the credit
  // committee and rating agencies can stand behind. Forces the analyst to
  // model real distress mechanics rather than pretty haircuts.
  // -------------------------------------------------------------------------
  q(4410530, 'Career Skills', CHAPTER, 'Downside case construction',
    'The Apex underwriting downside case assumes a 15% revenue decline in year 2 (industrial recession scenario). How should the case be constructed beyond the headline revenue number?',
    'A 15% revenue decline drops Apex from $580M to $493M; EBITDA falls disproportionately (operating leverage on the 9% fixed cost base) from $115M to ~$60M; capex stays flat at $9–10M because Apex cannot defer maintenance indefinitely; working capital releases ~$15M as receivables and inventory shrink — net FCF turns to roughly breakeven',
    [
      ['Apply 15% to all line items mechanically — revenue, EBITDA, capex, working capital — to get a clean downside', 'Mechanical haircuts ignore operating leverage and working-capital dynamics. EBITDA does not fall 15% on a 15% revenue decline; capex is largely committed; working capital releases cash on the way down. The honest downside walks each line.'],
      ['Hold EBITDA constant and only stress the cash flow lines (capex, taxes, working capital)', 'Holding EBITDA constant in a 15% revenue decline is the central error — it ignores the entire operating leverage question. The whole point of stress testing is to see how EBITDA actually behaves.'],
      ['Use the worst quarter of the 2008–09 downturn applied as a permanent state', 'The peak-trough-recovery shape of a recession is what matters, not the worst single quarter held forever. The downside should model the trough year and a recovery year, not perpetual collapse.'],
    ],
    'Downside case construction requires walking through the operating leverage explicitly: revenue falls X%, EBITDA falls more, capex stays sticky, working capital provides a one-time cash release on the way down. The headline revenue decline is just the input — the credit-relevant outputs are the EBITDA path, the leverage path, and the cash flow path.'),

  q(4410531, 'Career Skills', CHAPTER, 'EBITDA path in the downside',
    'In the 15% revenue decline scenario, you model EBITDA falling from $115M to ~$60M (a 48% decline). The sponsor says this is "too aggressive" and proposes $80M. Where is the honest math?',
    '$60M is the honest math given Apex\'s ~9% fixed cost base — revenue falls $87M, variable costs (75% of revenue) fall by $65M, leaving a $22M gross profit shortfall that flows mostly through EBITDA after small absorption from variable opex; the sponsor\'s $80M assumes variable cost flex that the cost structure does not actually support',
    [
      ['The sponsor\'s $80M is more credible because they know the cost structure better', 'The sponsor knows the *plan*, not the math. The fixed-cost percentage is observable from historical data — if 9% of revenue is fixed, EBITDA falls roughly $40–50M on this revenue drop. The sponsor\'s $80M implies a cost structure that does not match the data.'],
      ['Split the difference at $70M to reach a middle ground', 'Splitting the difference is not analysis. The right answer is to walk the operating leverage math and defend the resulting number — anchoring on the midpoint of two views is the kind of compromise that produces a number nobody can defend.'],
      ['Use a 50% EBITDA decline as a rule of thumb for industrial cyclicals', 'Rule-of-thumb percentages are starting points, not the answer. Apex\'s actual cost structure (75% variable, 9% fixed) gives a specific number — using a generic rule when the math is available is sloppy.'],
    ],
    'EBITDA in a downside is determined by the variable/fixed cost split, not by negotiation. The discipline is to walk the math: revenue change × variable cost percent vs fixed cost stickiness. Apex\'s $60M number is what the cost structure produces; the sponsor\'s $80M is the answer they want, not the answer the data supports.'),

  q(4410532, 'Career Skills', CHAPTER, 'Liquidity runway in stress',
    'In the downside, Apex generates roughly breakeven FCF (post-interest) but has $50M of undrawn revolver capacity, ~$10M of cash at close, and the $25M working capital release. Cash interest is $39M. What is the liquidity runway?',
    'Liquidity is workable but tight — Apex has ~$60M of immediate sources (revolver + cash) plus a $25M one-time working capital release in the trough, against ~$39M of annual cash interest; the company can survive 18–24 months of stress without breaching liquidity, assuming the revolver remains accessible',
    [
      ['Liquidity is comfortable because the revolver alone covers two years of interest', 'Two years of interest at $39M is $78M, well above the $50M revolver. The runway is *workable* but not "comfortable" — and the revolver springing covenant could trigger if leverage spikes, restricting access.'],
      ['Liquidity is inadequate because the company cannot cover interest from operating cash flow', 'Inability to cover interest from FCF for one year is not the same as inadequate liquidity — that is what the revolver is for. The question is how long the runway is and whether the company can survive to recovery, which the analysis supports.'],
      ['Liquidity cannot be assessed without the year-by-year cash flow forecast', 'The high-level analysis (revolver + cash + WC release vs interest) gives a usable read of the runway. The detailed forecast refines it but the basic math is what the committee needs.'],
    ],
    'Liquidity runway in stress is the question of whether the borrower can survive to recovery. Apex\'s $50M revolver + cash + WC release provides 18–24 months of cushion against $39M annual interest — workable but contingent on the revolver remaining accessible (which depends on the springing covenant not tripping).'),

  q(4410533, 'Career Skills', CHAPTER, 'Covenant headroom in the downside',
    'The revolver has a springing 7.0x leverage covenant. In the downside, EBITDA falls to $60M and net debt rises to ~$425M (debt holds, modest cash decline). Pro forma leverage in the trough year is 7.1x. What does this mean?',
    'The covenant trips if the revolver is drawn above 35% — meaning the borrower has to choose between (a) keeping revolver utilization below the trigger or (b) seeking a covenant waiver/amendment; this is exactly the design intent of the springing covenant, which forces an early lender conversation in stress',
    [
      ['The covenant breach triggers an event of default and acceleration', 'Breach of a springing covenant typically gives the borrower a 30-day cure period and the lenders the right to declare default — but acceleration is not automatic. The first move is usually a waiver/amendment negotiation, not acceleration.'],
      ['The covenant is irrelevant since the TLB is cov-lite', 'The covenant is on the *revolver*, not the TLB — the TLB is cov-lite but the revolver retains the springing test. The breach affects revolver access, not TLB acceleration.'],
      ['7.1x is within the 7.0x test because the covenant is measured at year-end only', 'Springing covenants are typically tested quarterly when the trigger condition is met. Year-end-only measurement would not be a credible protection — the committee would not accept it.'],
    ],
    'Covenant headroom in the downside is the question of when the lenders get a seat at the table. Apex\'s springing 7.0x revolver covenant tripping at 7.1x in the trough means the lenders are invited into a conversation about waivers and amendments at exactly the right moment — before the company runs out of options. This is the design intent of the covenant package.'),

  q(4410534, 'Career Skills', CHAPTER, 'Recovery on the TLB in a default',
    'If Apex defaults at trough conditions, the enterprise value is estimated at 5.5x trough EBITDA of $60M = $330M. The $300M TLB is first-lien secured. Behind it sits $120M of unsecured notes. What recovery does the TLB get?',
    'TLB recovers ~$300M of its $300M face (100% recovery, sometimes designated "1+" or "1") because the first-lien claim sits ahead of $120M of unsecured notes and the $330M EV covers the secured claim in full; the recovery rating is "1" (90–100%)',
    [
      ['~85% recovery, since liquidation typically takes a 20%+ discount to going-concern value', 'Standard recovery analysis uses going-concern value (5.5x EBITDA), not liquidation value, because the going-concern is what the secured creditors actually receive in a typical Chapter 11. The TLB at 100% is the right read.'],
      ['~50% recovery, blended with the unsecured notes', 'TLB and notes do not blend recoveries — they sit at different priorities. The first-lien is senior to the notes by contract and the recovery analysis must respect the priority order, not blend them.'],
      ['Recovery cannot be estimated until the actual default scenario, since assets and EV are uncertain', 'Recovery analysis is a standard part of credit committee work and rating agency methodology — it does not require an actual default to estimate. The committee needs the analysis up front to evaluate the credit.'],
    ],
    'TLB recovery analysis walks a clean priority order: estimate trough EBITDA, apply an EV multiple, deduct administrative claims, then satisfy creditors by priority. At Apex, the $330M trough EV covers the $300M first-lien TLB in full — recovery rating "1" and the agency view is "1+/1." This is the analysis that justifies the TLB pricing relative to the unsecured notes.'),

  q(4410535, 'Career Skills', CHAPTER, 'Recovery on the senior unsecured notes',
    'In the same default scenario ($330M EV, $300M first-lien TLB, $120M unsecured notes), what recovery do the notes receive?',
    '~$30M of the $120M face (25% recovery, rating "4" in the 30–50% band) — the first-lien TLB takes the first $300M of EV, leaving only $30M for the unsecured notes; the notes\' recovery is the "structural subordination" cushion of the TLB',
    [
      ['~70% recovery, since the notes have a senior unsecured claim that ranks before equity', 'Senior unsecured does rank before equity but behind secured debt. With only $30M of EV remaining after the TLB is satisfied, the notes get $30M of $120M — that is 25%, not 70%.'],
      ['~0% recovery, since the TLB will likely take the full EV after admin costs', 'A small residual ($30M) does remain after the TLB at this EV level — it does not zero out the notes entirely. The recovery is low (25%) but not zero.'],
      ['~50% recovery, by splitting the residual EV pro rata across secured and unsecured', 'Recovery analysis respects priority strictly — it does not split pro rata. The TLB recovers in full before the notes receive anything. Pro rata splitting violates the priority order that defines the capital structure.'],
    ],
    'Unsecured notes recovery is the inverse of the TLB recovery — it captures only what is left after secured creditors are satisfied. At Apex\'s trough EV of $330M with a $300M TLB ahead, the notes recover ~25% (rating "4"). This is why the notes price ~400bps wide of the TLB: lower recovery in a default scenario.'),

  q(4410536, 'Career Skills', CHAPTER, 'Enterprise value haircut assumption',
    'You use a 5.5x EBITDA multiple on $60M trough EBITDA to derive $330M of EV in default. The sponsor argues that a buyer would pay 6.5x (the going-concern multiple) and recovery should be higher. What is the right framing?',
    '5.5x is the appropriate distressed-sale multiple — it reflects a 1.0x discount to the going-concern multiple to account for time-pressure, advisor fees, and the fact that the company is being sold under duress; using the going-concern multiple in a recovery analysis ignores the distress context',
    [
      ['The sponsor is right — use 6.5x because that is the comparable transaction multiple', 'Comparable transaction multiples reflect healthy, competitively-bid sales of going concerns. Distressed sales receive a discount precisely because the seller has limited time and bargaining power. Using the going-concern multiple overstates recovery.'],
      ['Use 4.0x to be very conservative — distressed sales often go below comparable multiples', '4.0x implies a 2.5-turn discount, which is more severe than typical distressed sales for an asset-heavy industrial distributor with going-concern value. 5.5x reflects the standard 1-turn distressed discount.'],
      ['The multiple does not matter because recovery analysis should use net asset value', 'Net asset value is the alternative valuation method for asset-heavy liquidations, but for a going-concern with operating value, EBITDA-multiple valuation is the standard recovery framework. NAV understates recovery for businesses where the operating value exceeds the asset value.'],
    ],
    'Enterprise value haircuts in recovery analysis reflect the distress context — typically a 0.5–1.0 turn discount to the going-concern multiple. At Apex, the 5.5x distressed multiple on $60M trough EBITDA gives $330M, which is enough to cover the TLB and provide partial unsecured recovery. The sponsor\'s 6.5x is the going-concern view; recovery analysis uses the distressed view.'),

  q(4410537, 'Career Skills', CHAPTER, 'Priority of claims walk',
    'In a hypothetical Apex Chapter 11, the claims in order would be: admin expenses, DIP financing (if any), revolver, TLB, notes, trade claims, equity. The revolver and TLB are both first-lien — how should the recovery split between them?',
    'Revolver and TLB share first-lien collateral pari passu and recover pro rata against the first-lien claim — they are not in a senior/junior relationship to each other, which is why the springing financial covenant on the revolver is the only protection that distinguishes them in the package',
    [
      ['The revolver is senior to the TLB because it has the springing financial covenant', 'The springing covenant is a *consent-and-control* protection, not a priority protection. The revolver and TLB still share collateral pari passu in a bankruptcy — they do not sit at different priorities.'],
      ['The TLB is senior to the revolver because it is larger and was committed at close', 'Size and timing of commitment do not affect priority. The revolver and TLB are both first-lien on the same collateral and share recovery pro rata.'],
      ['The revolver is senior because revolvers always sit ahead of TLBs in priority', 'There is no automatic seniority for revolvers — they sit at whatever priority the credit agreement specifies. In a standard sponsor LBO package, revolver and TLB are pari passu first-lien.'],
    ],
    'Priority of claims requires reading the credit agreement, not applying generic rules. Revolver and TLB pari passu first-lien means they recover pro rata at the first-lien level; the springing covenant gives the revolver lenders an earlier seat at the table during workouts but does not change the priority of claims at distribution.'),

  q(4410538, 'Career Skills', CHAPTER, 'Refinancing risk at TLB maturity',
    'The Apex TLB matures in year 7. The sponsor\'s base case assumes the TLB is refinanced or repriced multiple times before maturity (likely at year 2–3 and again at year 5). What is the refinancing risk if the leveraged loan market is closed at year 7?',
    'Year-7 refi risk is real but mitigated by maturity laddering with the notes (8-year) — if the LL market is closed in year 7, Apex still has the notes for one more year and can pursue an unsecured refinancing or sponsor capital injection; the bigger risk would be if both tranches matured the same year',
    [
      ['Refi risk at year 7 is negligible because leveraged loan markets are always accessible to performing credits', 'LL markets are not always accessible — they close periodically (2008, 2015 commodity wobble, 2020, late 2022). Refi risk on a year-7 maturity is real and should be disclosed; the question is mitigation, not denial.'],
      ['Refi risk is the borrower\'s problem and does not affect the underwriting view', 'Refi risk is core to the underwriting view because the bank is committing to a 7-year tranche — the credit case has to consider what happens at maturity. Pretending it is purely the borrower\'s problem misreads the analysis.'],
      ['Refi risk is solved by amortization — the TLB pays down before maturity', 'Apex\'s TLB has 1% mandatory amortization; the bulk of the balance is a bullet at year 7. Amortization mitigates refi risk modestly but does not solve it — the bullet is the load-bearing piece.'],
    ],
    'Refinancing risk at maturity is the long-tail risk on any leveraged loan. The mitigation comes from maturity laddering (notes mature one year later, providing breathing room), the sponsor\'s capital base (Glasswing can inject equity if needed), and the borrower\'s deleveraging through the hold (lower leverage means easier refi). All three should be discussed in the memo.'),

  q(4410539, 'Career Skills', CHAPTER, 'What recovery rating to publish',
    'Based on the analysis (TLB at 100% recovery, notes at 25% recovery), what recovery ratings should the credit committee assign and what is the implication?',
    'TLB: Recovery Rating "1+" (top of the 90–100% band) → notching the issue rating one notch above the issuer rating. Notes: Recovery Rating "4" (30–50% band) → notching the issue rating to match the issuer rating (no notch). The implications are different secondary trading levels and different price talk in syndication',
    [
      ['Both tranches at Recovery Rating "3" because the average across the stack is in the 50% range', 'Recovery ratings are tranche-specific, not blended across the stack. The TLB and notes have very different recoveries (100% vs 25%) and the agencies will rate them separately.'],
      ['Both tranches at Recovery Rating "1" since the company has good enterprise value', 'Recovery ratings reflect what each tranche specifically recovers in a default — the notes do not recover at the "1" level even if the company has decent EV, because they sit behind $300M of first-lien debt.'],
      ['Recovery ratings should not be published until after the deal closes and ratings are finalized', 'Recovery analysis is finalized at the issue rating stage, which happens before pricing. Pretending recovery is post-close information misreads the rating process and means the deal does not get the proper notching at pricing.'],
    ],
    'Recovery ratings directly affect the issue ratings (notching above or below the issuer credit rating) and therefore the pricing the deal can clear. At Apex, the TLB\'s "1+" recovery rating means the TLB carries a B+ issue rating against a B issuer rating (one-notch uplift), while the notes carry the issuer rating with no notch. This drives the ~400bps coupon differential between the tranches.'),

  // -------------------------------------------------------------------------
  // LESSON 5 — Syndication + marketing (4410540–4410549)
  // Output: clear the TLB and notes with the buyside, manage flex, and
  // protect the bank's economics. Forces the analyst to think like a
  // syndicate desk, not just a credit analyst.
  // -------------------------------------------------------------------------
  q(4410540, 'Career Skills', CHAPTER, 'TLB price talk relative to comps',
    'Recent B1/B+ industrial TLBs have cleared at SOFR+375 to SOFR+425 with 99 OID (1 point). The Apex underwriting assumes SOFR+400 at par (no OID). How should price talk be set for launch?',
    'Launch at SOFR+400–425 with 99 OID — slightly wide of the underwritten price but in the middle of the comp range, with the OID giving the desk room to tighten on strong demand; opening tight at SOFR+375 par leaves no room to flex up if the book is soft',
    [
      ['Launch at the underwritten price (SOFR+400 par, no OID) since that is what the bank committed to', 'The underwritten price is the *floor* the bank can clear at without losing money, not the launch price. Opening tighter than the comp range means a soft book has no path forward — the deal sticks.'],
      ['Launch at SOFR+450 OID 98 to ensure the book is oversubscribed and then tighten aggressively', 'Launching meaningfully wide of the comp range signals weakness on the deal and invites lenders to wait for the tighten. The desk should launch at the middle of the comp range, not the wide end.'],
      ['Launch at SOFR+375 with no OID and rely on heavy investor demand to clear', 'SOFR+375 is the *tight* end of recent comps and provides no room for the deal to flex if demand is soft. The discipline is to launch with room on both sides — tighter than the wide end, but with OID room as a release valve.'],
    ],
    'TLB price talk is set against the comp range, not the underwritten price. The right launch is at the middle of the recent comp range with some OID room — gives the desk flexibility to tighten on strong demand or flex modestly on soft demand without breaching the underwritten level. Underwritten level is the floor for bank P&L, not the launch number.'),

  q(4410541, 'Career Skills', CHAPTER, 'OID and yield-to-three-year for the TLB',
    'The TLB launches at SOFR+400 with 99 OID. Most TLBs are quoted on a yield-to-three-year basis assuming a three-year call. What is the yield-to-three-year and how do you communicate it to investors?',
    'YT3 ≈ SOFR + 400 + (100 OID points / 3 years) ≈ SOFR + 433 — the OID is amortized over the three-year assumed life; communicate as "SOFR+400, OID 99, ~SOFR+433 YT3" so investors can compare cleanly against other TLBs',
    [
      ['Quote as SOFR+400 only — OID is a one-time cost and does not affect the yield comparison', 'OID is a meaningful component of total return — 100bps of OID over 3 years is ~33bps of additional yield. Quoting without OID misrepresents the deal economics and investors will discount the offer.'],
      ['Quote as SOFR+500 (the spread plus the full OID) to highlight the total compensation', 'SOFR+500 overstates the yield by treating OID as if amortized over one year. The market convention is amortization over the three-year assumed life, giving ~SOFR+433.'],
      ['Quote OID separately and let investors do the math on yield-to-three-year', 'Letting investors do the math creates friction in the marketing process and inconsistency in how the offer is communicated. The desk should always quote both the headline (spread + OID) and the derived YT3.'],
    ],
    'Yield-to-three-year is the standard TLB comparison metric because most TLBs get repriced or refinanced within 2–3 years. The amortization of OID over the assumed life is what makes the YT3 meaningful — quoting in YT3 lets investors compare Apex against other deals on a like-for-like basis.'),

  q(4410542, 'Career Skills', CHAPTER, 'Bond price talk and roadshow strategy',
    'The Apex notes carry an 8.5% underwritten coupon. Recent B-rated unsecured note issues have cleared at 8.00–9.25%. The bond syndicate proposes 8.25–8.75% price talk launched with a three-day roadshow plus a one-day investor call. What is the right approach?',
    'The talk and roadshow plan are reasonable — three-day roadshow gives the buy side time to do diligence on a first-time issuer (no debt history) and the talk range covers the underwritten level on both sides; for an unrated/first-time issuer like Apex, more diligence time is better than less',
    [
      ['Compress the roadshow to one day to take advantage of strong market conditions', 'One-day roadshows are typical for known issuers refinancing existing debt — not for first-time issuers like Apex. The buy side needs diligence time on a new credit; compressing the timeline raises pricing.'],
      ['Launch with talk at 8.00% and rely on accelerated execution to maintain momentum', '8.00% is the *tight* end of comps and leaves no room to flex if the book is soft on day one. For a first-time issuer the prudent move is talk that brackets the expected clearing level.'],
      ['Skip the roadshow entirely and use only investor calls to keep the process efficient', 'Skipping the roadshow on a first-time, unrated industrial issuer is the kind of process shortcut that costs 25–50bps in pricing. The buy side equates roadshow access with diligence access.'],
    ],
    'Roadshow strategy and price talk are coordinated decisions: more diligence access lets the desk launch tighter, but only if the diligence actually changes investors\' views. For a first-time issuer like Apex, the right move is to give investors the time and access they need — and to launch with talk that brackets the underwritten level so the desk has room to tighten or flex modestly.'),

  q(4410543, 'Career Skills', CHAPTER, 'Top three investor concerns to pre-empt',
    'For Apex\'s lender presentation, you have to anticipate the top three concerns the buy side will raise. Which three concerns deserve dedicated slides and direct treatment?',
    '(1) Cyclicality — industrial distribution downturns and how Apex performed historically; (2) Customer concentration — the 9%/35% profile and end-market diversification; (3) No debt history — Apex has never carried meaningful leverage, so demonstrate sponsor pedigree and management capability to operate inside a covenant package',
    [
      ['(1) Coupon level, (2) call protection, (3) maturity — all the deal terms', 'Deal terms are mechanical and not concerns the buy side raises about the *company*. The concerns to pre-empt are the credit issues that drive the pricing, not the pricing itself.'],
      ['(1) Sponsor reputation, (2) bank underwriter quality, (3) covenant package strength', 'These are second-order considerations that experienced investors price in implicitly. The buy side raises questions about the underlying business — cycle, customers, debt capacity — not about the brokers or the sponsor.'],
      ['(1) ESG profile, (2) supply chain disclosure, (3) workforce diversity', 'These are real considerations in modern credit markets but are secondary to the core credit concerns for a B1/B+ industrial distributor. The top three credit concerns drive the pricing; ESG matters but does not move price talk by itself.'],
    ],
    'Pre-empting investor concerns is the job of the lender presentation. The right concerns to address are the ones that actually drive pricing: cycle, customers, debt history (for a first-time issuer). Spending time on second-order concerns (ESG, sponsor reputation) at the expense of the load-bearing credit issues leaves the most important questions unaddressed.'),

  q(4410544, 'Career Skills', CHAPTER, 'Anchor order vs broad book strategy',
    'The syndicate desk has two large CLO managers and one major credit fund interested in anchoring the TLB at SOFR+400, totaling $100M of commitment if the deal is priced tight. The desk could also run a broader book at SOFR+425 with 50+ accounts. Which strategy is right?',
    'Run the broad book at SOFR+425 — anchor orders at tight pricing create dependency on three accounts and risk a market read that "everyone else passed at +400"; a deeper book at +425 gives the deal price stability in secondary, better aftermarket performance, and a healthier syndication record',
    [
      ['Take the anchor orders at +400 because they price the deal tighter', 'Tighter pricing at the cost of book depth is usually false economy — secondary trading suffers when the book is thin, which affects the bank\'s next deal and the borrower\'s next refinancing. Book quality matters as much as headline price.'],
      ['Take half the anchor orders at +400 and run the rest of the book at +425 with a stratified allocation', 'Stratified allocations create resentment among investors who see others getting better terms and erode trust in future deals. The TLB market clears at a single price.'],
      ['Cancel the deal and rerun later when the market is deeper at the tight price', 'Cancelling a deal because the book is not at the tightest possible price is a major reputational and economic hit. The right move is to clear the deal at a price that supports a healthy book, not to wait for ideal conditions.'],
    ],
    'Anchor order vs broad book is one of the key syndicate strategy questions. Tight pricing with anchor concentration produces a fragile book that trades poorly in secondary and damages the bank\'s standing for future deals. Broad book at a marginally wider price produces secondary stability and a healthier ongoing relationship with the lender base.'),

  q(4410545, 'Career Skills', CHAPTER, 'Allocation strategy for the TLB',
    'The Apex TLB is 2.5x oversubscribed at SOFR+400 with 99 OID. The desk has to allocate $300M against $750M of orders. What allocation principles should drive the cut?',
    'Prioritize core CLO managers and credit funds with consistent participation in the bank\'s deals, scale down hedge funds and prop accounts that flip allocations, and ensure no single account gets more than 7–8% of the deal — the goal is a stable book that holds the paper in secondary, not maximum oversubscription metrics',
    [
      ['Pro-rata allocate against orders to be fair to all participants', 'Pro-rata is fair on paper but produces a flippy book — hedge funds receive more than they would hold, sell into secondary, and depress trading. Allocation discipline is what makes the secondary work.'],
      ['Give the largest orders the largest allocations to reward conviction', 'Largest orders are often the most opportunistic — funds order big to get more, expecting allocation cuts. Rewarding big orders incentivizes inflated orders and worsens the allocation problem.'],
      ['Allocate randomly to demonstrate impartiality and avoid favoritism complaints', 'Random allocation produces unpredictable book quality and signals to the market that the desk does not value lender relationships. Allocation is a deliberate decision about who holds the paper.'],
    ],
    'Allocation strategy is where the desk shapes who actually holds the deal in secondary. Prioritizing core participants who hold their allocations, scaling down flippers, and capping individual account size all contribute to a stable book — and the desk\'s reputation for fair, considered allocation is one of the most durable bank assets.'),

  q(4410546, 'Career Skills', CHAPTER, 'Flexing pricing vs flexing structure',
    'Two days into TLB syndication, the book is light — only $200M of orders against the $300M target. The desk can flex price (move to SOFR+425, OID 98) or flex structure (add a 0.5% amortization step or shorten tenor to 6 years). The sponsor has agreed to up to 50bps of price flex but resists structural changes. Which lever should the desk pull?',
    'Flex pricing first — within the agreed 50bps of price flex the desk can move to SOFR+425 OID 98, which is ~+450 YT3 and should bring incremental demand; structural flex is more damaging to the sponsor\'s economic case and harder to reverse, while price flex is recoverable on the next refinancing',
    [
      ['Flex structure first because price flex is more visible to the broader market', 'Price flex is more visible but recoverable — the next refi can tighten back. Structural flex (amortization, tenor) is harder to undo and changes the sponsor\'s LBO model materially. Pull the recoverable lever first.'],
      ['Flex both simultaneously to maximize the response from investors', 'Pulling both levers at once signals desperation and overcorrects — the deal may end up oversubscribed at terms that are too generous, leaving money on the table and damaging the bank\'s next deal\'s pricing.'],
      ['Hold and wait for the market to come to the deal', 'Holding a soft book past the marketing window risks the deal sticking with the underwriter — particularly in a volatile market. The right move is to flex within the agreed range, not to gamble on conditions improving.'],
    ],
    'Flexing pricing vs structure is the desk\'s key tool when a deal is soft. Pricing flex is the first lever because it is recoverable (the next refi can tighten back) and the sponsor has already agreed to a range. Structural flex (amortization, tenor) damages the LBO economics and is harder to undo — keep it in reserve.'),

  q(4410547, 'Career Skills', CHAPTER, 'Marketing the notes given NC3 call',
    'The Apex notes are NC3 (non-call for 3 years) at an 8.5% coupon. Some bond investors want NC2 to give themselves earlier refinancing optionality. The sponsor wants the longer non-call to protect against early refinancing if rates fall. How should the desk handle this in marketing?',
    'Hold the NC3 structure and explain it as standard sponsor LBO protection — investors get full call protection (no risk of being called) for 3 years, which is exactly what the coupon premium pays for; the desk can offer a make-whole call premium to address investor concerns without changing the call structure itself',
    [
      ['Move to NC2 to bring in more investors and price the deal tighter', 'NC2 weakens the sponsor\'s position and changes the LBO economics. The longer non-call is part of why the coupon is at 8.5% — shortening it requires lower coupon or other concessions, not just an investor-friendly switch.'],
      ['Keep NC3 but eliminate the make-whole call to reduce complexity', 'Eliminating the make-whole call removes a feature investors value (it lets them earn the premium if rates fall). The make-whole is a fairness mechanism that respects investor economics during the non-call period.'],
      ['Switch to NC1 to maximize the bank\'s underwriting fee for future refinancings', 'Bank fees on future refinancings should not drive the structural decision — that would be a conflict of interest. The right call structure reflects credit and market norms, not bank fee optimization.'],
    ],
    'Bond call structure (NC3, NC2, etc.) is a negotiation between sponsor refi flexibility and investor call protection. NC3 is the standard for sponsor LBOs at this credit level — it gives investors three years of locked-in coupon while preserving the sponsor\'s option to refi after year 3. Make-whole calls during the non-call period are the standard fairness mechanism.'),

  q(4410548, 'Career Skills', CHAPTER, 'Information delivery — lender presentation discipline',
    'The lender presentation for Apex must walk a fine line: enough information to enable diligence, not so much that the bank takes on Reg FD-style disclosure risk or commits to forward statements. What is the right framing?',
    'Present historical financials in detail, present management\'s base case clearly labeled as management projections (not bank views), include explicit risk factors and key sensitivities, and avoid quantitative bank-prepared downside scenarios in the public deck — the bank\'s downside lives in the underwriting memo, not the marketing deck',
    [
      ['Include the bank\'s downside case in the public deck to demonstrate analytical rigor', 'Bank-prepared downside cases in a public deck create disclosure risk and can be cited against the bank in workout situations. The bank\'s internal credit analysis stays internal; the deck presents management views with appropriate risk factors.'],
      ['Omit projections entirely to avoid forward-looking liability', 'Omitting projections entirely fails the marketing — investors need a forward view to evaluate the credit. The discipline is to clearly label projections as management\'s, not to suppress them.'],
      ['Present everything the bank has internally so investors have full information', 'Presenting bank internal work blurs the line between marketing and credit committee analysis. It also creates disclosure risk that can complicate future workouts. The deck has its job; the underwriting memo has its job.'],
    ],
    'Lender presentation discipline is one of the unwritten craft skills of leveraged finance. The deck is management\'s story with bank-supplied historical color and risk factors — not the bank\'s downside case. Confusing the two creates disclosure problems and undermines the bank\'s ability to act in workout situations.'),

  q(4410549, 'Career Skills', CHAPTER, 'Post-close trading and league-table read',
    'The Apex TLB closes at SOFR+425 OID 98 and trades to 99.25 in the first week (above issue but below par). The notes close at 8.625% (50bps wide of underwritten) and trade flat. The bank\'s P&L on the deal is essentially flat. How should the team read this outcome?',
    'A flat P&L on a meaningfully flexed deal is a successful outcome — the bank cleared the deal, protected the borrower\'s execution, and used the flex provisions exactly as designed; secondary trading above issue on the TLB validates the allocation work, and flat trading on the notes is normal for a first-time issuer',
    [
      ['Flat P&L means the deal was a failure for the bank', 'The bank\'s P&L target on a flexed underwriting is to break even — the underwriting fee and the flex absorb the syndication risk. Flat P&L on a deal that priced 50bps wide of underwritten is the design working as intended, not failure.'],
      ['The TLB trading at 99.25 indicates the deal was mispriced and could have priced tighter', '99.25 (above issue OID of 98) is a healthy secondary read — it means the allocation produced holders who valued the paper, but not so tight that the desk left no buffer. Pricing tighter would have produced a thinner book and worse trading.'],
      ['The notes trading flat suggests poor underwriting on the bond tranche', 'Flat secondary trading on a first-time issuer\'s note is normal — investors hold and observe before establishing a strong secondary. The notes did exactly what they were priced to do; trading well above issue would have meant the desk left money on the table.'],
    ],
    'Reading post-close trading and P&L is the discipline that closes the loop on the underwriting decision. Flat bank P&L plus stable secondary trading is the design — the underwriting fee covers the bank\'s syndication risk, the flex absorbs market moves, and the secondary should trade healthy but not too tight. League-table credit, borrower relationship, and bank P&L are all served by this outcome.'),
]
