import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// CLF CHAPTER 3 — LevFin Markets and Debt Capacity
// ----------------------------------------------------------------------------
// 42 new questions (IDs 4410200–4410241) extending the existing 8 Ch3 items
// in careerAgentGeneratedRoadmapFinance.ts (4103053, 4103054, 4105118,
// 4105121, 4105122, 4107400, 4107876, 4107880).
//
// Coverage targets:
//   - Syndicated loan market (~7)
//   - High-yield bond market (~7)
//   - Term loan B vs A (~5)
//   - Debt capacity sizing (~6)
//   - Pricing mechanics (~5)
//   - Refinancing dynamics (~6)
//   - CLOs as buyers (~3)
//   - Distressed exchanges (~3)
//
// Voice: matches the existing Ch3 items above and the credit_levfin_roadmap
// course design. US-context syndicated leveraged loan market. Bespoke
// whyWrong rationales — no strawman distractors.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe CLF Ch3 canonical bank'

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

const CHAPTER = 'LevFin Markets and Debt Capacity'

// Difficulty distribution: 12 at 3, 21 at 4, 9 at 5 (total 42).
export const CLF_CH3_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Syndicated loan market (4410200–4410206)
  4410200: 3, // Primary syndication mechanics
  4410201: 4, // Secondary trading vs primary
  4410202: 3, // Agent bank role
  4410203: 4, // Lead-left vs co-lead economics
  4410204: 4, // Broadly syndicated vs club
  4410205: 4, // Allocations under oversubscription
  4410206: 5, // Reverse flex on allocations

  // High-yield bond market (4410207–4410213)
  4410207: 3, // Bullet maturity vs amortizing
  4410208: 4, // Call schedule NC3/NC5 logic
  4410209: 4, // Make-whole premium
  4410210: 4, // Equity claw
  4410211: 4, // Change-of-control put at 101
  4410212: 5, // Why high-yield is bullet not amortizing
  4410213: 3, // Coupon fixed vs floating

  // Term loan B vs A (4410214–4410218)
  4410214: 3, // Institutional vs bank holders
  4410215: 4, // Floating SOFR+ vs fixed
  4410216: 4, // Amortization 1% TLB vs 5–10% TLA
  4410217: 4, // 7y TLB vs 5y TLA tenor
  4410218: 5, // Pro rata sweep behavior

  // Debt capacity sizing (4410219–4410224)
  4410219: 3, // Total leverage at entry
  4410220: 4, // FCF / Total Debt floor
  4410221: 4, // Interest coverage minimum
  4410222: 5, // Sponsor return sensitivity to leverage
  4410223: 4, // Senior secured vs total leverage
  4410224: 3, // Rating implication of higher leverage

  // Pricing mechanics (4410225–4410229)
  4410225: 3, // OID vs upfront fee economics
  4410226: 4, // SOFR + spread quotation
  4410227: 4, // Secondary par vs distressed levels
  4410228: 5, // YTM vs YTW for callable bonds
  4410229: 4, // Yield to investor with OID

  // Refinancing dynamics (4410230–4410235)
  4410230: 3, // Call optionality value to issuer
  4410231: 4, // Refi waves in benign markets
  4410232: 4, // Prepayment optionality for loans
  4410233: 4, // Voluntary vs mandatory amortization
  4410234: 5, // Repricing vs full refi
  4410235: 3, // Soft call protection

  // CLOs as buyers (4410236–4410238)
  4410236: 4, // CLO collateral test impact
  4410237: 4, // AAA tranche buyers and single-B limits
  4410238: 5, // Par dynamics and CLO bid

  // Distressed exchanges (4410239–4410241)
  4410239: 4, // Par-for-discount swap mechanics
  4410240: 4, // Exchange offer holdouts
  4410241: 3, // Coercive vs consensual exchanges
}

export const clfCh3Questions: Question[] = [
  // -------------------------------------------------------------------------
  // SYNDICATED LOAN MARKET (4410200–4410206)
  // -------------------------------------------------------------------------
  q(4410200, 'Career Skills', CHAPTER, 'Primary syndication mechanics',
    'A lead arranger underwrites a $1.0bn term loan B for a sponsor LBO and then takes the loan to the institutional market. What is the arranger actually doing in primary syndication?',
    'Selling slices of the underwritten commitment to CLOs, loan funds, and other institutional buyers so the bank does not hold the loan on its balance sheet',
    [
      ['Holding the entire loan on its balance sheet for the life of the deal', 'Banks underwrite leveraged loans on a best-efforts or backstopped basis specifically to distribute them. Holding $1bn of a sponsor TLB on the balance sheet is the failure mode, not the plan.'],
      ['Auctioning the loan to retail investors via a public offering', 'Leveraged loans are private securities sold to qualified institutional buyers under bank-loan documentation, not registered public offerings. There is no retail bid.'],
      ['Repackaging the loan into bonds and listing it on an exchange', 'Repackaging into bonds is a separate product (a high-yield bond or CLO tranche). Primary loan syndication itself is direct sale of loan participations, not bond conversion.'],
    ],
    'Primary syndication is the distribution step. The arranger commits to the borrower, then sells the loan down to institutional accounts during the launch period — that\'s how leveraged loans actually move off the bank\'s balance sheet.'),

  q(4410201, 'Career Skills', CHAPTER, 'Secondary trading vs primary',
    'A $500mm TLB closed six months ago at par. It now trades at 97.5 in the secondary market. What does the secondary level tell the levfin team about the credit?',
    'The market is pricing in some combination of credit deterioration, sector pressure, or repricing risk relative to where the loan cleared at launch',
    [
      ['Nothing — secondary prices are random and uncorrelated with credit', 'Secondary loan prices reflect real demand from CLOs, loan funds, and managed accounts. A 250bps drop from par is a market signal, not noise.'],
      ['The loan must be in default because it trades below par', 'Performing loans routinely trade in the high 90s when credit softens or the coupon is below market. Default-level pricing is typically below 80 and signals impairment, not a 97.5 print.'],
      ['It means the arranger overpriced the loan at launch and owes the borrower a rebate', 'Secondary moves after the deal closes are market-driven, not arranger errors. There is no rebate mechanism on a closed loan — the price is just where new buyers will transact.'],
    ],
    'Secondary trading levels are the live read on how the market values the credit today. A loan drifting from par to 97.5 is the first signal levfin teams use to gauge whether a refi window is open and what new-issue pricing would look like.'),

  q(4410202, 'Career Skills', CHAPTER, 'Agent bank role',
    'The credit agreement names one of the lead banks as the "Administrative Agent" for a $750mm syndicated term loan. What does this role actually do day-to-day?',
    'Acts as the operational hub — collecting interest and principal from the borrower, distributing to lenders, processing assignments, and coordinating amendment votes',
    [
      ['Guarantees repayment to the other lenders if the borrower defaults', 'Agents are operational intermediaries, not credit guarantors. Each lender takes its own credit risk on the borrower — the agent does not stand behind the loan.'],
      ['Sets the interest rate unilaterally each quarter', 'Interest rate is contractual — SOFR plus a fixed spread set at closing or via repricing. The agent calculates and distributes, but does not set, the rate.'],
      ['Underwrites the entire facility on its own balance sheet', 'Underwriting is the arranger function at deal launch. The administrative agent role is post-close servicing — separate function, often the same bank, but a distinct hat.'],
    ],
    'The administrative agent is the plumbing of a syndicated loan: payments, notices, assignments, voting. Lenders rely on the agent to keep the loan operating cleanly, but the agent does not bear the credit risk of the underlying borrower.'),

  q(4410203, 'Career Skills', CHAPTER, 'Lead-left vs co-lead economics',
    'On an LBO financing the bookrunner positions are listed as "JPMorgan (left) / Goldman / Morgan Stanley." Why does the lead-left position matter beyond the cover page?',
    'The lead-left typically runs the book, controls allocations, earns the largest share of the arrangement fee, and gets league-table credit as the bookrunner of record',
    [
      ['It is alphabetical — banks are always listed left to right by name', 'Bookrunner order is negotiated, not alphabetical. JPMorgan left of Goldman of Morgan Stanley is a sponsor decision based on relationship, balance-sheet commitment, and fee split.'],
      ['Only the lead-left lends; the co-leads are advisory titles with no commitment', 'All named bookrunners commit balance sheet. The difference is share of the underwriting and fees, not whether a bank is actually lending.'],
      ['Lead-left position rotates each calendar quarter between the banks', 'Position is set at the time the engagement letter is signed and stays for the life of the financing. There is no quarterly rotation.'],
    ],
    'Lead-left runs the book — that means controlling allocations, presenting to investors, and earning the headline fee share. Co-leads share the commitment and fees pro rata to their underwriting share but do not run the process.'),

  q(4410204, 'Career Skills', CHAPTER, 'Broadly syndicated vs club',
    'A $400mm financing is described as a "club deal" rather than a broadly syndicated transaction. What does that distinction mean operationally?',
    'A small group of relationship banks (typically 3–8) holds the loan to maturity without selling it down to the institutional market',
    [
      ['Club deals are riskier because they have fewer protections than broadly syndicated loans', 'Documentation is similar in both cases — covenants, security, and reps largely mirror BSL standards. The difference is distribution breadth, not investor protection level.'],
      ['Club deals must be at least $1bn to qualify for that label', 'Club is about lender count, not size. Most club deals are smaller ($100mm–$500mm) precisely because they fit a small relationship bank group without needing institutional distribution.'],
      ['Club deals trade actively in the secondary market alongside BSLs', 'Club loans rarely trade — relationship banks hold them. BSLs trade because CLOs and loan funds actively rebalance positions. Liquidity is a key differentiator.'],
    ],
    'Club deals stay in the bank market with a small lender group. Broadly syndicated loans (BSLs) are distributed to institutional investors and trade in the secondary market. The choice depends on size, sponsor preference, and whether the borrower wants the flexibility (or scrutiny) of institutional ownership.'),

  q(4410205, 'Career Skills', CHAPTER, 'Allocations under oversubscription',
    'A TLB launches at SOFR+400 with 99.5 OID and the order book closes 3x oversubscribed. How does the arranger typically respond?',
    'Reverse flex pricing tighter (lower spread, higher OID toward par) and scale back allocations pro rata across the order book',
    [
      ['Allocate full orders to whoever submitted them first', 'First-come first-served is not how loan allocations work. Arrangers allocate based on account type, relationship, and order size — not submission timestamp.'],
      ['Cancel the deal and relaunch at a wider spread to capture more demand', 'Oversubscription means demand is strong at the launch terms. Widening would leave money on the table for the borrower and damage arranger credibility.'],
      ['Increase the size of the loan to absorb all orders', 'Loan size is fixed by the borrower\'s use of proceeds (LBO check, refi amount, etc.) — it cannot be upsized arbitrarily to soak up investor demand without changing the underlying use.'],
    ],
    'Oversubscription gives the arranger pricing power. The standard response is reverse flex — tighten spread or OID — and cut allocations pro rata. The borrower gets better terms; investors get less paper than they ordered.'),

  q(4410206, 'Career Skills', CHAPTER, 'Reverse flex on allocations',
    'The same TLB above reverse-flexes from SOFR+400/99.5 OID to SOFR+375/par. Some accounts drop their orders entirely after the flex. What does that signal?',
    'Those accounts had a yield threshold the new terms no longer meet — they were marginal buyers, not core conviction holders',
    [
      ['Accounts must accept the flexed terms or face penalties from the arranger', 'Loan investors retain discretion through the commitment period. Reverse-flexing tighter is a renegotiation; investors can walk if the new terms do not clear their hurdle rate.'],
      ['The arranger must revert because pricing can only flex wider', 'Commitment papers typically permit flex within agreed boundaries in either direction. Reverse flex is a normal feature, not a violation.'],
      ['Those accounts are signaling credit concerns about the borrower', 'Credit-driven drops would show up in the original book. Drops after a reverse flex are usually pure yield-threshold drops — the credit was fine at the wider price, not at the tighter one.'],
    ],
    'When reverse flex pushes pricing tighter, the marginal yield-sensitive accounts fall away. The arrangers watch carefully — losing too much of the book at the new terms means the flex went too far and the deal may need to flex back out.'),

  // -------------------------------------------------------------------------
  // HIGH-YIELD BOND MARKET (4410207–4410213)
  // -------------------------------------------------------------------------
  q(4410207, 'Career Skills', CHAPTER, 'Bullet maturity vs amortizing',
    'An 8-year senior unsecured high-yield bond has a stated maturity of 2033 with no scheduled principal payments before then. What is the lender repayment profile?',
    'No principal until 2033 — the entire face amount is due as a bullet payment at maturity, with interest paid semi-annually until then',
    [
      ['1% per year amortization with the balance due at maturity', '1% per year amortization is the standard TLB convention, not high-yield bond convention. HY bonds are bullets — zero scheduled principal until maturity.'],
      ['Equal principal payments spread over the 8-year tenor', 'Equal amortization is a TLA/bank-market convention. HY bonds do not amortize — investors expect cash flows from coupon and full principal at maturity.'],
      ['Principal is repaid only if the company chooses to call the bond', 'The bond definitely repays at maturity (assuming no default). Calls are optional refinancing — the maturity date is the contractual final payment, not an optional one.'],
    ],
    'High-yield bonds are bullet instruments. That structure is why issuers like them — no scheduled principal drag during the life of the deal — and why investors price them with bullet refinancing risk in mind.'),

  q(4410208, 'Career Skills', CHAPTER, 'Call schedule NC3/NC5 logic',
    'A new 8-year senior unsecured bond is structured as NC3 — non-callable for the first three years, then callable at a declining premium schedule. Why do issuers typically negotiate NC3 rather than NC5?',
    'NC3 gives the issuer earlier refinancing optionality if rates fall or credit improves, in exchange for accepting a slightly higher coupon at issuance',
    [
      ['NC3 is required by SEC rules for senior unsecured bonds', 'There is no SEC mandate on call protection length. NC3 vs NC5 is a market-negotiated term reflecting issuer optionality vs investor protection.'],
      ['NC3 means the bond cannot be called for three years and then must be called immediately', '"Non-callable for three years" means callable on or after year 3, not required to be called. Call exercise is at issuer discretion.'],
      ['NC3 is cheaper for the issuer because investors require less yield', 'Shorter call protection (NC3 vs NC5) means investors give up more optionality, so they typically demand higher yield, not less. NC3 is more issuer-friendly and therefore more expensive in coupon terms.'],
    ],
    'Call protection is a yield-vs-optionality trade. NC3 buys the issuer earlier refi rights at a coupon premium; NC5 saves coupon but locks the issuer out of refinancing for longer. The right structure depends on the issuer\'s view on rates and credit trajectory.'),

  q(4410209, 'Career Skills', CHAPTER, 'Make-whole premium',
    'During the non-call period of a high-yield bond, the issuer wants to redeem early. What price does the issuer typically have to pay under a standard make-whole provision?',
    'The greater of par or the present value of remaining coupons and principal discounted at a Treasury rate plus 50bps',
    [
      ['Par flat, with no premium for early redemption', 'Par would defeat the purpose of call protection. Make-whole is designed to compensate investors for losing the remaining yield premium over Treasuries.'],
      ['Two times par as a punitive premium', '2x par is not a market convention — it would block all early redemption. Make-whole is calibrated to economic compensation, not punishment.'],
      ['The original issue price (typically par or 99.5 OID)', 'Make-whole references future cash flows discounted at a Treasury rate, not the issue price. The whole point is to deliver economic value equivalent to holding to first call.'],
    ],
    'Make-whole is the financial equivalent of paying investors what they would have earned if the bond ran to first call. The T+50bps spread is the standard discount rate — tight enough to make early redemption expensive but not impossible.'),

  q(4410210, 'Career Skills', CHAPTER, 'Equity claw',
    'A new HY bond includes an "equity claw" allowing the issuer to redeem up to 40% of the bonds at 103 within the first three years using proceeds from a qualified equity offering. Why is this feature commonly included?',
    'It lets the issuer deleverage from IPO or secondary equity proceeds during the otherwise non-callable period, at a fixed premium investors can price',
    [
      ['Equity claws give bondholders the right to convert into common stock', 'Convertibility is a different feature entirely. Equity claws are issuer redemption rights funded by equity issuance, not bondholder conversion rights.'],
      ['It is required by stock exchange listing rules for any LBO bond', 'No exchange mandates equity claws. They are a market-negotiated feature, common in sponsor-backed deals where an IPO exit is plausible.'],
      ['It gives investors the right to demand equity if the bond defaults', 'Default remedies are governed by the indenture covenants and the bankruptcy stack, not the equity claw. The claw is an issuer call right, not an investor remedy.'],
    ],
    'Equity claws make sense for sponsor deals: if the company IPOs within three years, the sponsor wants the option to use primary proceeds to pay down expensive bond debt at a known premium. Investors accept the 40% / 103 because the premium compensates them for losing yield on those bonds.'),

  q(4410211, 'Career Skills', CHAPTER, 'Change-of-control put at 101',
    'A standard HY bond indenture includes a 101 change-of-control put. A new sponsor acquires the issuer in an LBO. What right do bondholders have?',
    'The right (but not obligation) to require the issuer to repurchase their bonds at 101% of face plus accrued interest',
    [
      ['The bonds automatically accelerate and become due at face value', 'COC puts are optional rights, not automatic acceleration. Bondholders choose whether to put each bond individually.'],
      ['Bondholders must approve the transaction or it cannot close', 'COC puts trigger after closing; they are not consent rights. Many bondholders simply hold through a COC if the new owner\'s credit is acceptable.'],
      ['The bonds convert into common stock of the acquirer', 'Conversion is a feature of convertible bonds, not standard HY. COC puts are a cash redemption right at 101.'],
    ],
    'The 101 COC put is a minimal protection: bondholders can exit at a small premium if a new owner they did not underwrite takes over. In benign markets bonds trade above 101 and the put is worthless; in stress, it can be the only escape and worth taking.'),

  q(4410212, 'Career Skills', CHAPTER, 'Why high-yield is bullet not amortizing',
    'High-yield bonds are almost always bullets while term loans typically amortize. From the issuer\'s perspective, why is the bullet structure attractive enough to pay the coupon premium HY commands?',
    'Bullet structure preserves cash flow during the life of the deal for capex, M&A, and dividends — the issuer only needs to find refi capacity at maturity, not service principal each quarter',
    [
      ['Bond investors cannot legally accept amortizing structures', 'There is no legal barrier — amortizing bonds exist (e.g., asset-backed). The HY market evolved as a bullet market because issuers value the cash-flow profile and investors price the bullet risk.'],
      ['Amortizing bonds are taxed differently and the tax difference makes bullet structures mandatory', 'No tax mandate exists. Interest deductibility works the same; the choice is structural and market-convention driven, not tax-driven.'],
      ['Bullet bonds default less often than amortizing bonds, so investors prefer them', 'Bullet structure does not lower default risk — if anything, the refinancing wall at maturity creates concentrated default risk. Investors accept the bullet because of yield, not because of safety.'],
    ],
    'Bullet structure is the operational advantage of HY bonds. The issuer trades a higher coupon for the freedom to deploy operating cash flow elsewhere during the bond\'s life. The bet is that maturity-date refinancing markets will be open — when they are not, the bullet is exactly where the company gets into trouble.'),

  q(4410213, 'Career Skills', CHAPTER, 'Coupon fixed vs floating',
    'A new 8-year senior unsecured bond is issued at 7.5% fixed. A pari-passu TLB on the same issuer is at SOFR+400. What is the practical effect of the different rate structures?',
    'The bond locks in 7.5% for the life of the deal; the loan floats with SOFR, so the borrower\'s loan interest moves up and down with short rates while the bond interest does not',
    [
      ['Both instruments will pay the same yield because they are pari passu', 'Pari passu refers to ranking in the capital structure, not coupon. A bond and a loan can rank equally and pay very different yields based on instrument type and tenor.'],
      ['The TLB rate is fixed because the spread component is fixed', 'The 400bps spread is fixed, but the SOFR base rate floats. Total interest expense on the TLB moves with SOFR — that\'s the entire point of floating-rate instruments.'],
      ['The bond floats because the issuer can call and reissue at a new rate', 'Calls are optional refinancings, not floating rates. Until called, the bond pays 7.5% regardless of where SOFR moves.'],
    ],
    'Fixed-rate bonds and floating-rate loans behave differently as rates move. Issuers and investors choose the mix deliberately — bonds give predictable cash interest, loans give upside (or downside) to short-rate moves. Mixed capital structures spread the rate risk.'),

  // -------------------------------------------------------------------------
  // TERM LOAN B vs A (4410214–4410218)
  // -------------------------------------------------------------------------
  q(4410214, 'Career Skills', CHAPTER, 'Institutional vs bank holders',
    'A capital structure includes both a $200mm Term Loan A and a $700mm Term Loan B. Who typically holds each tranche after syndication?',
    'TLA is held mostly by commercial banks; TLB is held primarily by CLOs, loan funds, and managed accounts',
    [
      ['Both tranches are held by the same investor base in equal proportions', 'TLA and TLB attract structurally different investors precisely because of tenor and amortization profile. Mixing the holder base obscures why the two tranches exist.'],
      ['TLA is held by hedge funds and TLB by retail investors', 'Retail does not buy leveraged loans directly. TLA is the bank product; TLB is the institutional product. Hedge funds participate in TLB secondary, not TLA primary.'],
      ['Both are held by the bond market through CUSIP-listed securities', 'Loans are not CUSIP bonds — they trade under LSTA bank-loan documentation in a private market. Mistaking loans for bonds is a structural confusion.'],
    ],
    'The TLA/TLB split is a market segmentation by investor type. Banks fund their TLA through deposits and prefer the amortization. CLOs and loan funds fund their TLB through tranched liabilities and accept bullet-like profiles. The two markets clear at different prices for that reason.'),

  q(4410215, 'Career Skills', CHAPTER, 'Floating SOFR+ vs fixed',
    'Both TLA and TLB on a leveraged borrower are priced as SOFR + spread (floating). Why are leveraged loans floating-rate while HY bonds are typically fixed?',
    'Loans are held by leveraged buyers (banks, CLOs) whose funding cost also floats with SOFR — floating-rate assets match their floating-rate liabilities',
    [
      ['Floating rates are required by federal banking regulation', 'No regulation mandates floating rates. Market structure evolved that way because lenders\' funding is floating, not because of a rule.'],
      ['Fixed-rate loans cannot be syndicated', 'Fixed-rate loans exist (typically in the private placement market) but do not dominate the syndicated leveraged loan market because they do not fit institutional buyers\' liability structure.'],
      ['Floating rates protect borrowers from rate increases', 'Floating rates expose borrowers to rate increases. The borrower bears that risk in exchange for narrower spreads vs fixed-rate alternatives.'],
    ],
    'Floating rates reflect lender asset/liability matching. CLOs fund their AAA tranches at SOFR-plus, so their loans need to pay SOFR-plus too. Borrowers accept the floating exposure as the cost of accessing the cheaper, deeper institutional loan market.'),

  q(4410216, 'Career Skills', CHAPTER, 'Amortization 1% TLB vs TLA',
    'A $200mm TLA amortizes 5%/10%/15%/20% over four years with the balance at maturity; a $700mm TLB amortizes 1% per year. Why the difference?',
    'TLA is structured for banks that want principal pay-down to reduce hold size; TLB is structured for CLOs that want maximum coupon and minimal cash drag from amortization',
    [
      ['TLA amortizes faster because it ranks senior to TLB', 'TLA and TLB are typically pari passu on the same security. Amortization profile is investor-driven, not seniority-driven.'],
      ['TLB has higher amortization than TLA because it is bigger', 'TLB has lower amortization (1%/yr) than TLA. Size does not drive the amortization schedule — investor type does.'],
      ['Amortization differences are accounting conventions with no economic substance', 'Amortization is real cash leaving the company. The economic effect on liquidity and refinancing risk is material — not a convention.'],
    ],
    'TLA amortization reflects bank preferences (pay down the exposure). TLB amortization at 1%/year is a near-bullet, which preserves the institutional yield profile CLOs need. The 1% serves as a token nod to amortization while leaving most of the principal at maturity.'),

  q(4410217, 'Career Skills', CHAPTER, '7y TLB vs 5y TLA tenor',
    'A pro rata facility has TLA and revolver at 5-year tenor; the TLB sits at 7 years. Why the tenor split?',
    'Banks limit their leveraged loan exposure to 5 years to match their funding and capital cycles; CLOs and institutional buyers will hold 7-year paper because their vehicles have longer reinvestment periods',
    [
      ['Federal Reserve rules cap bank loans at 5 years', 'No Fed rule caps loan tenor at 5 years. The 5-year bank convention reflects capital, liquidity, and internal hold-policy choices, not regulation.'],
      ['Borrowers prefer shorter tenor on TLA because of lower interest cost', 'Borrowers generally prefer longer tenor — less refinancing risk. The tenor split reflects investor preferences (and pricing), not borrower preference.'],
      ['TLB is always shorter than TLA because it amortizes less', 'TLB is typically longer than TLA. Tenor and amortization are separate dimensions chosen independently.'],
    ],
    'The 5y/7y split mirrors investor risk appetite. Banks operate on shorter tenor; institutional money — especially CLO reinvestment periods of 4–5 years plus tail — supports the longer TLB. The tenor mismatch is real for the borrower: TLA matures first and creates refi work two years before TLB.'),

  q(4410218, 'Career Skills', CHAPTER, 'Pro rata sweep behavior',
    'The credit agreement requires excess cash flow sweeps to be applied "pro rata across the term loans." How does this affect the TLA and TLB amortization profile?',
    'Sweep proceeds are applied to TLA and TLB in proportion to outstanding balances, reducing both — which accelerates TLA payoff and shortens the TLB principal more than the scheduled 1%',
    [
      ['Sweeps only apply to the TLA because it amortizes', 'Pro rata sweep means both tranches participate. TLA-only sweeps would be called "applied first to TLA," not pro rata.'],
      ['Sweeps go to the revolver first and reduce undrawn capacity', 'Sweeps are typically applied to amortizing term debt, not revolver capacity. Reducing the revolver would just reduce liquidity headroom without paying down anything outstanding.'],
      ['Sweeps replace scheduled amortization and pause the 1% TLB payments', 'Sweeps are additional, not substitutive. The 1% TLB amortization continues even when sweeps are made, accelerating total principal reduction.'],
    ],
    'Pro rata sweep behavior is one of the more subtle features of the pro rata facility. CLOs care because it accelerates TLB amortization (which costs them yield); banks care because it lets them recoup TLA exposure faster. Negotiation often pivots on the sweep waterfall.'),

  // -------------------------------------------------------------------------
  // DEBT CAPACITY SIZING (4410219–4410224)
  // -------------------------------------------------------------------------
  q(4410219, 'Career Skills', CHAPTER, 'Total leverage at entry',
    'A sponsor is buying a target at 11.0x EBITDA. The current market clears LBOs at 5.5x–6.5x total leverage at entry depending on sector. What is the practical implication for the sponsor?',
    'Roughly half the purchase price must be funded with equity (sponsor check), with the balance from debt across senior secured and unsecured tranches',
    [
      ['The sponsor can lever the deal at 10x because EBITDA supports it', 'Market debt capacity is determined by what investors will fund, not by what management thinks EBITDA can carry. Going materially above market clearing levels usually means the deal does not get done.'],
      ['Leverage at entry has no relationship to the entry multiple', 'Entry multiple and leverage at entry are tightly linked because purchase price determines total funding need. Higher multiple at fixed leverage means more equity.'],
      ['The sponsor will fund 100% with debt and reduce the equity check to zero', 'No leveraged loan or HY market will fund 100% of an 11.0x purchase. The institutional debt markets cap leverage at multiples calibrated to coverage and recovery.'],
    ],
    'Entry multiple minus market debt capacity equals required equity check. At 11.0x entry and 6.0x debt, the sponsor writes a 5.0x EBITDA equity check. That math drives whether the deal works at the sponsor\'s return targets — and is usually the first sanity check in deal review.'),

  q(4410220, 'Career Skills', CHAPTER, 'FCF / Total Debt floor',
    'Rating agencies and credit investors generally want to see FCF / Total Debt above some minimum threshold for a single-B credit. What does that ratio actually measure?',
    'The percentage of total debt that free cash flow could pay down per year — a proxy for how many years it would take to deleverage organically',
    [
      ['The ratio of cash earnings to interest expense', 'FCF / Total Debt is principal-focused. Interest coverage uses EBITDA or EBIT over interest. The two ratios test different things.'],
      ['Working capital efficiency relative to revenue', 'Working capital efficiency is measured by DSO, DIO, DPO. FCF / Total Debt is a deleveraging ratio, not a working capital ratio.'],
      ['The discount rate used to value the firm', 'Discount rate is a WACC concept. FCF / Total Debt is a leverage cash-flow ratio with no role in valuation.'],
    ],
    'FCF / Total Debt of 5% implies ~20 years to delever fully from cash flow alone — typical of single-B credits. Investors and agencies use this as a sanity check: at single-B, the company cannot delever organically in any reasonable window, so refinancing risk is permanent until the company sells or grows into the structure.'),

  q(4410221, 'Career Skills', CHAPTER, 'Interest coverage minimum',
    'A levfin team is sizing a TLB and HY package for a leveraged borrower. The base-case EBITDA / cash interest is 2.4x. The team wants to stress-test against a 25% EBITDA decline. What is the relevant question?',
    'Whether interest coverage stays above 1.5x–2.0x in the downside case — if it dips below, the credit cannot service interest from operations and the cap structure is over-levered',
    [
      ['Whether EBITDA stays positive in the downside case', 'EBITDA positive is far too loose. Companies need to cover interest with a meaningful margin to survive normal volatility. A 1.0x coverage credit is in trouble.'],
      ['Whether revenue grows in the downside case', 'Revenue growth is irrelevant if EBITDA collapses. Interest is paid from EBITDA, not from top-line.'],
      ['Whether the sponsor commits to additional equity', 'Sponsor commitment is a backstop, not a sizing input. Debt should be sized so the company services it from operations, not from sponsor injections.'],
    ],
    'Interest coverage thresholds are the operational debt-service test. Below ~1.5x, the company cannot fund interest from cash flow and starts depleting liquidity. Sizing the cap structure so coverage holds at 1.5x+ even in downside is the basic discipline.'),

  q(4410222, 'Career Skills', CHAPTER, 'Sponsor return sensitivity',
    'A sponsor model shows 22% IRR at 6.5x total leverage and 18% IRR at 5.5x total leverage, holding exit multiple constant. Why the gap?',
    'Higher leverage reduces the equity check, so the same dollar of exit value translates into a higher multiple of invested equity capital — sponsor IRR is mechanically levered by debt at entry',
    [
      ['Higher leverage increases EBITDA growth and so increases exit value', 'Capital structure does not change operating EBITDA growth. The IRR gap comes from equity-check size, not from operating performance.'],
      ['Higher leverage lets the sponsor pay a higher purchase multiple', 'In this scenario the entry multiple is held constant. The IRR gap is pure leverage effect on the equity check, separate from purchase-price effects.'],
      ['Higher leverage reduces taxes paid which improves IRR', 'Tax shield matters but is second-order vs the equity-check effect. The dominant driver is the size of the equity at entry relative to the same exit value.'],
    ],
    'IRR is mechanically levered. Going from 5.5x to 6.5x debt on the same purchase price cuts the equity check by ~1.0x EBITDA. The same exit return spreads across less equity — and IRR jumps. The discipline is to make sure the higher leverage actually clears the market and that the downside coverage still holds.'),

  q(4410223, 'Career Skills', CHAPTER, 'Senior secured vs total leverage',
    'A credit clears at 4.5x senior secured / 6.5x total leverage. What does the 2.0x gap represent?',
    'Junior debt sitting behind the senior secured loans — typically HY bonds or unsecured/subordinated notes that take recovery risk after the secured lenders are paid',
    [
      ['Cash on the balance sheet that nets down gross debt', 'Total leverage is typically quoted gross of cash. The 2.0x gap is junior debt layered on top of the senior secured, not a cash netting effect.'],
      ['Working capital facilities included in total but not senior leverage', 'Working capital revolvers, when drawn, are senior secured and would be inside the 4.5x — they don\'t create the gap to total leverage.'],
      ['Operating leases that get capitalized only in total leverage', 'Leases may be added by rating agencies but are not the main driver of the 4.5x/6.5x gap in a leveraged finance package. The gap is a real junior-debt tranche.'],
    ],
    'The senior-vs-total gap is where junior capital lives. Investors price the junior tranche to reflect the worse recovery position. The size of the gap depends on how aggressive the sponsor wants to be — more junior capital means higher purchase multiple but lower expected recovery for the junior holders if things go wrong.'),

  q(4410224, 'Career Skills', CHAPTER, 'Rating implication of leverage',
    'A borrower currently rated B+/B1 wants to add 1.5 turns of leverage to fund a dividend recap. What is the most likely rating outcome?',
    'A one-notch downgrade to B/B2 with potential for a further notch if interest coverage drops materially',
    [
      ['No rating change because dividend recaps are common and well-understood', 'Common does not mean rating-neutral. Agencies downgrade for leverage increases regardless of whether the use is a dividend, M&A, or general corporate purposes.'],
      ['Upgrade to BB- because the sponsor is committed to the company', 'Sponsor commitment does not improve rating. More leverage means weaker credit metrics, which is the direction ratings move on.'],
      ['Default rating immediately because of the extractive nature of the dividend', 'A dividend recap is not a default event. Ratings reflect ongoing credit quality, not transactional intent — bonds and loans continue to perform through recaps.'],
    ],
    'Rating actions track credit metrics. An additional 1.5 turns of leverage at single-B is enough to warrant a one-notch downgrade in most agency frameworks. Levfin teams pre-brief agencies to manage the size of the downgrade and avoid two-notch surprises.'),

  // -------------------------------------------------------------------------
  // PRICING MECHANICS (4410225–4410229)
  // -------------------------------------------------------------------------
  q(4410225, 'Career Skills', CHAPTER, 'OID vs upfront fee',
    'A TLB launches at SOFR+400 with 99 OID. How does the OID compare to a 1% upfront fee paid at closing?',
    'Economically very similar — both reduce proceeds to the borrower by 1% — but OID is amortized into yield for investors over the loan life while a fee is recognized at closing',
    [
      ['OID is interest expense; upfront fees are not deductible at all', 'Upfront fees are typically deductible (often over the life of the loan, similar to OID). The deductibility timing differs but neither is non-deductible.'],
      ['OID reduces the loan face amount while upfront fees increase it', 'Both reduce proceeds. Neither changes the loan face — that remains at par. The difference is how the discount is recognized over time, not at par.'],
      ['Upfront fees are paid by lenders to the borrower', 'Upfront fees flow from the borrower to the arrangers/lenders, not the other way. OID similarly reduces what the borrower receives.'],
    ],
    'OID and upfront fees are economically close substitutes — both ways for the borrower to pay extra to clear the market without raising the headline coupon. Investors generally prefer OID because it produces yield to maturity rather than a one-time fee; arrangers prefer fees for syndication economics. The choice is negotiated.'),

  q(4410226, 'Career Skills', CHAPTER, 'SOFR + spread quotation',
    'A loan is quoted as "SOFR + 400 with a 0.50% floor." What does the floor do?',
    'It sets the minimum SOFR component used to calculate interest, so if SOFR falls below 0.50% the borrower still pays as if SOFR were 0.50%',
    [
      ['It caps the maximum interest rate at 400bps over SOFR', 'The floor sets a floor on SOFR, not a cap on total interest. A cap would be a separate clause limiting maximum rate exposure.'],
      ['It guarantees lenders a 0.50% return regardless of credit performance', 'The floor is a base-rate floor, not a credit-return guarantee. Defaults still affect lender returns regardless of the floor.'],
      ['It applies only when the loan is in default', 'The floor applies whenever SOFR is below the floor level, not only in default. It is a permanent feature of the interest calculation.'],
    ],
    'SOFR floors became standard after the 2020 rate collapse. With SOFR near zero, floating-rate investors needed a base-rate floor to preserve yield — 0.50% or 0.75% became the convention. As short rates rose, floors stopped binding, but they remain in documentation.'),

  q(4410227, 'Career Skills', CHAPTER, 'Secondary par vs distressed levels',
    'Three loans on different borrowers trade at 99.5, 92, and 68 in the secondary market. How would a credit desk classify each?',
    '99.5 is performing/par; 92 is stressed or weak performing; 68 is distressed and likely on a watchlist with workout teams involved',
    [
      ['All three are performing because none are in default', 'Default is a legal event; market price reflects expected default and recovery. A loan can trade at 68 long before legal default — distressed pricing signals the market is preparing for impairment.'],
      ['99.5 is distressed because it is below par', 'Performing loans routinely trade at 99–101 depending on coupon vs market spreads. 99.5 is firmly performing, not distressed.'],
      ['92 is performing because it is above 80', 'No single threshold defines distressed, but mid-90s is typically classified as stressed or weakening — desk and investment committee start paying attention. 92 is not "fine."'],
    ],
    'Secondary loan prices are a continuous credit signal. Around par means market is comfortable; mid-90s means watchlist; below 80 means distressed with realistic loss-given-default scenarios in play. CLO managers and loan funds track this every day for portfolio management.'),

  q(4410228, 'Career Skills', CHAPTER, 'YTM vs YTW for callable bonds',
    'A callable HY bond is quoted with both a yield-to-maturity (YTM) of 7.8% and a yield-to-worst (YTW) of 7.2%. Why is YTW lower than YTM here?',
    'The bond is trading above par, so the worst-case yield comes from being called early at the next call price — losing the premium reduces yield versus holding to maturity',
    [
      ['YTW is always lower than YTM by convention', 'YTW can be either higher or lower than YTM depending on premium/discount and call schedule. For a discount bond, YTW often equals YTM if called below market value is not relevant.'],
      ['YTW reflects default scenarios while YTM ignores them', 'Both YTM and YTW assume no default. Default-adjusted yield is a different concept. YTW is just the minimum yield across all call/maturity scenarios assuming no default.'],
      ['YTW applies only to convertible bonds', 'YTW is the standard quotation convention for all callable bonds, not just convertibles. Quoting just YTM on a callable bond trading above par would overstate the realistic yield to an investor.'],
    ],
    'For premium-priced callable bonds, YTW is the relevant return because the issuer will likely call. Investors price to YTW, not YTM — losing the premium on early call is the realistic scenario, and pretending otherwise overstates the yield available.'),

  q(4410229, 'Career Skills', CHAPTER, 'Yield with OID',
    'A 5-year bullet bond is issued at 98 OID with a 7.0% coupon. Approximately what yield are investors earning?',
    'Slightly higher than 7.0% — the OID is amortized into yield over the bond life, adding roughly 40–50bps depending on the exact compounding',
    [
      ['Exactly 7.0% — the OID does not affect investor yield', 'OID directly affects yield. Buying at 98 and receiving 100 at maturity plus 7% coupons produces a yield above 7%. Ignoring OID misstates the economics.'],
      ['Roughly 9.0% — OID adds 200bps because the bond was issued at 98', 'The 200bps discount is spread over 5 years and compounded with the coupon. The effective yield uplift is ~40–50bps, not 200bps.'],
      ['Exactly 5.0% — the OID reduces the yield by 200bps', 'OID reduces proceeds, which increases yield (investor pays less for the same face cash flow). The direction is the opposite of what this answer suggests.'],
    ],
    'OID pricing math: investor pays 98, receives 100 at maturity plus 7% on 100 each year. The IRR on those cash flows is roughly 7.45% over 5 years. Levfin teams use the all-in yield (coupon + OID amortized) to compare offerings, not just the coupon.'),

  // -------------------------------------------------------------------------
  // REFINANCING DYNAMICS (4410230–4410235)
  // -------------------------------------------------------------------------
  q(4410230, 'Career Skills', CHAPTER, 'Call optionality value',
    'A 5-year-old HY bond is now past its call protection period. The bond trades at 104 and the issuer can call at 102. Should the issuer call?',
    'Call only makes economic sense if the issuer can refinance into new debt at a lower all-in cost than the existing 7.5% coupon, after issuance fees and OID',
    [
      ['Always call as soon as call protection ends to capture optionality', 'Calling without a refi at a better rate just replaces the bond with itself at a 200bps premium cost. The call is only valuable when the new market rate is lower.'],
      ['Never call because the bond trades above par', 'Trading above par is exactly the condition under which the call may be valuable — current market rates are below the bond coupon. The bond trading at 104 against a 102 call means a call is at least worth pricing.'],
      ['Wait until the bond trades at par before calling', 'Bonds trading at par on a 7.5% coupon mean rates have risen to 7.5%, so refinancing would not save money. The call is most valuable when the bond trades well above par, not at par.'],
    ],
    'Call optionality is a refinancing decision, not a mechanical trigger. The math is straightforward: cost of calling (102) plus new issuance fees vs PV of interest savings on the new lower-coupon debt. When the savings exceed the cost, the call is exercised.'),

  q(4410231, 'Career Skills', CHAPTER, 'Refi waves in benign markets',
    'In 2021 the leveraged loan market saw a record wave of refinancings and repricings — billions of dollars of loans were touched even though most were not maturing for years. What drives refi waves like this?',
    'Tight spreads and strong investor demand let issuers reprice existing loans to lower coupons or refinance early at better terms — the option value of waiting falls to zero',
    [
      ['Regulatory mandates required all loans to be refinanced', 'No regulatory refi mandate exists. The wave was a market-driven response to spread compression and strong CLO demand.'],
      ['Borrowers were facing imminent default and had to refinance', 'Refi waves in benign markets are by performing borrowers, not distressed ones. Borrowers refinance because they can save money, not because they have to.'],
      ['Banks were forced to recall their loans early', 'Banks do not have unilateral recall rights on leveraged loans. Refinancing is borrower-initiated, not lender-forced.'],
    ],
    'Refi waves are the way borrowers extract value from benign credit markets. When spreads tighten 50–100bps from where existing loans cleared, repricing becomes economic and CLOs accept it because the alternative (the loan refinancing away from them entirely) is worse. The result is a self-reinforcing cycle that compresses spreads further.'),

  q(4410232, 'Career Skills', CHAPTER, 'Prepayment optionality',
    'A standard TLB is callable at any time at par after a brief six-month soft call period. Why is this so much more issuer-friendly than HY bond call schedules?',
    'Loans can be refinanced at any time with no premium, whereas bonds require a multi-year non-call period and pay call premiums to redeem — loans give the issuer continuous refi optionality',
    [
      ['Loans have no soft call protection at all', 'The standard six-month 101 soft call is real protection — it prevents pure rate-driven repricing in the immediate post-close window. But after that, loans are callable at par, unlike bonds.'],
      ['Bonds are also callable at par at any time', 'HY bonds have multi-year NC periods followed by declining premium schedules. Calling at par typically only applies in the last year or two of the bond\'s life.'],
      ['Prepayment optionality is symmetric between loans and bonds', 'It is asymmetric. Loans give the issuer dramatically more flexibility; bonds give investors much stronger call protection. That asymmetry is one of the key reasons borrowers choose loans for portions of the cap stack.'],
    ],
    'Loan prepayment optionality is one of the underrated features of the leveraged loan market. Borrowers can refinance whenever rates move — that flexibility has real economic value, and it is part of why CLOs accept lower spreads on loans than HY bonds on the same credit.'),

  q(4410233, 'Career Skills', CHAPTER, 'Voluntary vs mandatory amortization',
    'A TLB has 1% scheduled amortization but the borrower wants to make a voluntary $100mm paydown using cash on the balance sheet. What can the borrower do?',
    'Apply the voluntary prepayment at par, typically reducing future scheduled amortization payments in inverse order of maturity (or as documented)',
    [
      ['Voluntary prepayments are prohibited outside the scheduled amortization', 'Standard TLB documents allow voluntary prepayments at par after the soft call period. Restricting voluntary paydowns would be unusual and borrower-unfriendly.'],
      ['Voluntary prepayments require lender consent on an individual basis', 'Voluntary paydowns at par are a borrower right under standard credit agreements — no special consent needed beyond the documented mechanics.'],
      ['Voluntary prepayments must be paid at 101 to compensate lenders', 'There is no premium on voluntary par prepayments after the soft call period. Premium only applies to a refinancing in the soft call window, not to balance-sheet cash paydowns.'],
    ],
    'Voluntary vs mandatory amortization is a key flexibility feature. Mandatory amortization is the scheduled 1%/year drag. Voluntary prepayments — from excess cash, asset sales, or debt issuance — are issuer-elected and apply at par. The credit agreement specifies the application order against future scheduled payments.'),

  q(4410234, 'Career Skills', CHAPTER, 'Repricing vs full refi',
    'A borrower with an existing $700mm TLB at SOFR+400 sees the market clearing similar credits at SOFR+325. Should the borrower do a repricing or a full refinancing?',
    'Repricing if the existing investor base is willing to roll into the new rate — it avoids full new-issue fees; full refi if the existing investors will not accept tighter pricing',
    [
      ['Always do a full refinancing because it is the standard market practice', 'Repricings are extremely common in the loan market precisely because they are cheaper than full refis. They are not exceptional — they are the default approach when investors will accept it.'],
      ['Repricing requires the borrower to first redeem all existing loans', 'Repricing keeps the existing loan and amends its pricing terms, with non-consenting lenders being replaced. It does not require full redemption.'],
      ['Repricing is only allowed once per loan', 'There is no contractual limit on repricing frequency. Some loans get repriced multiple times during their life as markets move.'],
    ],
    'Repricing vs refi is a fees-vs-flexibility decision. Repricing keeps the existing tenor and just amends the rate, with non-consenting lenders replaced via assignment. Full refi resets everything (tenor, terms, lender base) but costs full OID and arrangement fees. In benign markets, repricing is the dominant choice.'),

  q(4410235, 'Career Skills', CHAPTER, 'Soft call protection',
    'A new TLB launches with "101 soft call for six months." What does this mean for an investor buying at par at launch?',
    'If the issuer refinances or reprices the loan within six months, the loan is repaid at 101 — investors get a 1% premium for the optionality being taken back early',
    [
      ['The loan cannot be prepaid for the first six months under any circumstances', 'Soft call permits prepayment; it just requires a 1% premium. Hard non-call would prohibit prepayment entirely.'],
      ['Soft call applies for the full life of the loan, not just six months', 'Standard soft call windows are 6–12 months at launch. After the window, loans are callable at par without premium.'],
      ['The 101 premium is paid by the lenders to the borrower', 'The premium flows from the borrower to the lenders. It compensates lenders for losing yield to an early refi.'],
    ],
    'Soft call is the minimal floor of call protection in the loan market. Six months at 101 stops opportunistic immediate-post-close repricing but does not block ordinary refinancing optionality. CLOs price loans assuming they will refi away in 2–3 years, so the soft call mainly affects the very near-term window.'),

  // -------------------------------------------------------------------------
  // CLOs AS BUYERS (4410236–4410238)
  // -------------------------------------------------------------------------
  q(4410236, 'Career Skills', CHAPTER, 'CLO collateral test impact',
    'A CLO holds 80% of its portfolio in single-B-rated loans and is approaching its triple-C bucket limit. A new TLB is rated B-. How does the CLO\'s position affect its bid?',
    'The CLO is constrained — it can still buy single-B paper but is sensitive to any single-B that might get downgraded to triple-C and breach its concentration test',
    [
      ['CLOs can buy any loan without restriction', 'CLOs operate under strict collateral quality tests — concentration limits on triple-C, weighted average rating factor (WARF), industry diversification, and others. Restrictions shape every buy decision.'],
      ['CLOs only buy triple-C loans because they pay higher yields', 'CLOs are limited to a small triple-C bucket (typically 7.5%). They are dominant buyers of single-B and double-B paper, not triple-C concentrated.'],
      ['Collateral tests do not apply during a reinvestment period', 'Collateral tests apply continuously during the reinvestment period. They are the rules of the CLO\'s investment management.'],
    ],
    'CLO collateral tests shape new-issue demand in real ways. When the market\'s single-B exposure is already heavy and downgrade risk is rising, CLOs become more selective on additional single-B paper. Levfin teams track CLO positioning because it directly affects whether a new B- TLB clears.'),

  q(4410237, 'Career Skills', CHAPTER, 'AAA tranche buyers and limits',
    'A CLO is funded with multiple tranches — AAA, AA, A, BBB, BB, and equity. The AAA tranche is the largest. Who buys it and why does that matter for the loan market?',
    'AAA buyers are insurance companies, pension funds, and bank treasuries seeking high-rated floating-rate paper — their demand sets the cost of CLO liabilities, which in turn sets what spreads CLOs need on the underlying loans',
    [
      ['AAA tranches are bought by hedge funds chasing yield', 'AAA is bought by conservative real-money investors. Hedge funds tend to buy the equity tranche or mezzanine pieces, not the AAA — the yields are too low for hedge fund mandates.'],
      ['AAA tranches are issued to retail investors', 'CLO tranches are private securities sold to qualified institutional buyers. Retail is not in this market.'],
      ['AAA buyers determine which loans the CLO buys', 'CLO managers select underlying loans; AAA buyers set the cost of CLO liabilities but do not pick specific loans. The two roles are separate.'],
    ],
    'CLO arbitrage works only when the spread on the loan portfolio exceeds the weighted cost of the CLO\'s liability tranches plus management fees. AAA demand is the biggest single driver of liability cost. When AAA spreads tighten, the arbitrage opens and CLOs raise more vehicles — which then bid for more loans, tightening loan spreads further.'),

  q(4410238, 'Career Skills', CHAPTER, 'Par dynamics and CLO bid',
    'A CLO manager wants to add a new loan to the portfolio but the only available paper trades at 99.5 in the secondary. Why might the CLO be reluctant to buy below par?',
    'Buying below par creates an OID position that may impact the CLO\'s par coverage tests — if too much of the portfolio is bought at a discount, par coverage can degrade and limit equity distributions',
    [
      ['CLOs are legally prohibited from buying below par', 'CLOs can buy discount loans, but documentation often imposes haircuts or par-build incentives. The constraint is economic, not legal.'],
      ['Loans below par cannot be held by institutional investors', 'Institutional investors routinely hold loans trading at any price. The CLO concern is structural to CLO documentation, not a general institutional rule.'],
      ['Below-par loans are always distressed and require regulatory approval', '99.5 is performing. Buying performing paper below par is normal — the CLO-specific concern is about par-coverage math, not regulatory approval.'],
    ],
    'CLO par tests are an underappreciated driver of new-issue loan demand. Managers prefer to buy at or near par to preserve par-coverage capacity, which is one reason new TLBs typically clear at 99.5 or 99 OID (close to par) rather than at deeper discounts. The CLO bid drives the OID convention.'),

  // -------------------------------------------------------------------------
  // DISTRESSED EXCHANGES (4410239–4410241)
  // -------------------------------------------------------------------------
  q(4410239, 'Career Skills', CHAPTER, 'Par-for-discount swap',
    'A distressed borrower offers existing bondholders the chance to swap their 7% senior unsecured notes (currently trading at 60) for new 9% senior secured notes at 75 cents on the dollar. Why would bondholders accept a discount on face?',
    'They give up principal to move up the priority stack and add security — the new instrument has better recovery prospects, so the discounted face is worth more economically than the old par claim',
    [
      ['It is a punishment for not voting yes earlier', 'Distressed exchanges are voluntary economic offers, not punitive. Bondholders accept because the new instrument has better expected value, not because of punishment.'],
      ['The swap is required by SEC rules', 'No SEC rule requires bondholders to swap. Each bondholder evaluates the trade individually.'],
      ['The new notes pay coupons in stock, not cash', 'The new notes here pay cash coupons. PIK or stock coupons are a different structural feature. The discount-for-priority trade is the core of this exchange.'],
    ],
    'Par-for-discount swaps are the classic distressed exchange structure. Holders accept less face in exchange for better priority and security. The trade only works when the new instrument\'s expected recovery exceeds the old instrument\'s expected recovery — math the issuer\'s advisors and the bondholder advisors both run carefully.'),

  q(4410240, 'Career Skills', CHAPTER, 'Exchange offer holdouts',
    'A distressed exchange has been launched and 85% of bondholders have tendered. The remaining 15% hold out. What is the issuer\'s typical concern with holdouts?',
    'Holdouts continue to hold the original instrument at original terms and may extract better treatment later, undermining the equity of the deal for participants',
    [
      ['Holdouts will be sued by the company and forced to participate', 'Bondholders cannot be forced to tender in a voluntary exchange. Litigation against holdouts is rare and rarely successful — coercion comes from deal design, not lawsuits.'],
      ['Holdouts automatically lose their bonds after the offer expires', 'Bondholders retain their bonds if they do not tender. Loss of holdings is not automatic — that would be inconsistent with the voluntary nature of an exchange offer.'],
      ['Holdouts have no impact on the deal once 50% have tendered', 'Holdouts matter at every level of participation. They retain par claims that can compete with the new instruments and may need to be addressed in any subsequent restructuring.'],
    ],
    'Holdouts are the structural problem of any out-of-court exchange. Issuers use exit consents, security stripping, and other "coercive" features to make the original bonds less attractive after the exchange. The goal is to push participation as high as possible — typically 90%+ — to avoid leaving an awkward residual class of unhappy original-instrument holders.'),

  q(4410241, 'Career Skills', CHAPTER, 'Coercive vs consensual exchanges',
    'A distressed issuer is choosing between (a) a consensual exchange offer to all bondholders at the same terms, or (b) a coercive exchange that strips covenants from the existing bonds via exit consent. What is the trade-off?',
    'Consensual offers preserve relationships and broad participation but may need to be more generous; coercive structures drive higher participation but create litigation risk and reputational cost with the credit investor base',
    [
      ['Coercive exchanges are illegal and cannot be used', 'Coercive structures (exit consents, drop-down financings, J.Crew and Serta-style maneuvers) are widely used and largely legal. They are aggressive, not unlawful.'],
      ['Consensual exchanges are always required by indenture terms', 'Indentures often allow majority bondholders to modify many terms via consent — the basis for coercive structures. Consensual is a choice, not a requirement.'],
      ['Both approaches deliver identical recoveries to bondholders', 'Recoveries differ materially. Coercive exchanges deliver worse outcomes to non-participating bondholders, which is the entire point — they create pressure to tender.'],
    ],
    'Coercive vs consensual is one of the live debates in modern LME (liability management exercise) practice. Sponsors have used aggressive coercive techniques to extract value at the expense of holdout creditors, generating both record participation rates and significant litigation. Issuers weigh participation, recovery economics, and the long-term cost of damaging the credit market relationships they will need at the next refi.'),
]
