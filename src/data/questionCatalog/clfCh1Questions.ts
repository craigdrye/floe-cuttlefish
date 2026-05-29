import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// CREDIT / LEVERAGED FINANCE — CHAPTER 1
// Borrower and Capital Structure Basics
// ----------------------------------------------------------------------------
// 47 questions (IDs 4410000–4410046) extending the existing trio
// (4200070–4200072 in careerAgentGeneratedRoadmapFinance.ts).
//
// US-context, syndicated loan / leveraged finance market. Covers:
//   - Capital structure waterfall and absolute priority in bankruptcy
//   - Borrower types: IG vs leveraged, sponsor vs non-sponsor, syndicated
//     vs club, middle market vs broadly syndicated
//   - Senior debt structures: revolver, TLA, TLB, ABL, cash-flow lending
//   - Subordinated debt: mezz, 2L, PIK toggle, equity kickers, intercreditor,
//     unitranche
//   - Equity layer: common, preferred (participating, convertible), warrants,
//     management sweet equity
//
// Voice: matches the existing CLF trio and the broader Floe canonical
// catalog — concrete numbers where possible, bespoke whyWrong rationales,
// no strawman distractors, no generic "this is wrong because it's wrong"
// filler.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe CLF Ch1 canonical bank'

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

const CHAPTER = 'Borrower and Capital Structure Basics'

// Difficulty: 14 at 3, 24 at 4, 9 at 5.
export const CLF_CH1_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Cap structure waterfall (4410000–4410009)
  4410000: 3, 4410001: 3, 4410002: 4, 4410003: 4, 4410004: 5,
  4410005: 3, 4410006: 4, 4410007: 4, 4410008: 5, 4410009: 4,
  // Borrower types & risk (4410010–4410019)
  4410010: 3, 4410011: 3, 4410012: 4, 4410013: 4, 4410014: 4,
  4410015: 4, 4410016: 5, 4410017: 3, 4410018: 4, 4410019: 5,
  // Senior debt structures (4410020–4410029)
  4410020: 3, 4410021: 3, 4410022: 4, 4410023: 3, 4410024: 4,
  4410025: 5, 4410026: 3, 4410027: 5, 4410028: 4, 4410029: 4,
  // Subordinated debt (4410030–4410038)
  4410030: 3, 4410031: 4, 4410032: 4, 4410033: 4, 4410034: 5,
  4410035: 4, 4410036: 5, 4410037: 3, 4410038: 4,
  // Equity layer (4410039–4410046)
  4410039: 3, 4410040: 4, 4410041: 4, 4410042: 5, 4410043: 4,
  4410044: 4, 4410045: 3, 4410046: 4,
}

export const clfCh1Questions: Question[] = [
  // -------------------------------------------------------------------------
  // CAPITAL STRUCTURE WATERFALL (4410000–4410009)
  // Priority of claims across first-lien, second-lien, senior unsecured,
  // subordinated, preferred, common. Absolute priority rule in Chapter 11.
  // -------------------------------------------------------------------------
  q(4410000, 'Career Skills', CHAPTER, 'Order of the waterfall',
    'List the standard priority of claims in a US leveraged borrower\'s cap structure, from first paid in liquidation to last.',
    'First-lien secured debt, second-lien secured debt, senior unsecured notes, subordinated notes, preferred equity, common equity',
    [
      ['Senior unsecured notes, first-lien debt, second-lien debt, subordinated notes, preferred, common', 'Unsecured notes do not jump ahead of secured debt. Liens on collateral mean first-lien lenders are paid out of collateral proceeds before any unsecured creditor sees a dollar.'],
      ['First-lien, second-lien, subordinated notes, senior unsecured notes, preferred, common', 'Subordinated notes are explicitly contractually subordinated to senior unsecured notes via indenture language. They sit below — not above — senior unsecured.'],
      ['Common equity, preferred equity, first-lien, second-lien, senior unsecured, subordinated', 'Equity is residual — it gets paid only after every creditor class is satisfied. Putting equity at the top inverts the entire waterfall.'],
    ],
    'The waterfall reflects contractual priority: lien priority within secured debt, then contractual subordination between unsecured and subordinated, then equity classes by their own preference. Every leveraged credit memo starts here.'),

  q(4410001, 'Career Skills', CHAPTER, 'Absolute priority rule',
    'In a US Chapter 11 reorganization, what does the "absolute priority rule" actually require?',
    'A class of claims cannot receive any recovery until every senior class has been paid in full or has consented — junior classes are paid only after seniors are made whole',
    [
      ['Every class recovers something so long as the plan is approved by a majority of creditors', 'A majority vote does not override seniority. A senior class that is impaired and rejects the plan can block any distribution to junior classes under the rule.'],
      ['Secured creditors must accept the same percentage recovery as unsecured creditors', 'Absolute priority is the opposite — secureds are paid first and in full out of their collateral before unsecureds get anything. Equal recovery would invert the rule.'],
      ['The bankruptcy judge decides recoveries class by class with discretion to reward cooperative creditors', 'Judicial discretion does not extend to reordering priority. Cooperation may shape negotiations, but the rule itself is hard contractual hierarchy.'],
    ],
    'Absolute priority is the spine of bankruptcy distribution: seniors are paid in full (or consent to less) before juniors recover anything. Plans that violate it are non-confirmable absent class consent.'),

  q(4410002, 'Career Skills', CHAPTER, 'Pari passu within a class',
    'A borrower has a $200M revolver and a $400M first-lien term loan, both secured by the same collateral package under a single credit agreement. The company liquidates and collateral proceeds total $450M. How is the $450M distributed between the revolver and TLB?',
    'Pro rata within the first-lien class: revolver receives ~$150M (200/600 × 450) and TLB receives ~$300M (400/600 × 450)',
    [
      ['Revolver paid in full first, then TLB receives the remaining $250M', 'Revolver and TLB under the same credit agreement on the same collateral are pari passu — neither has priority over the other. They share proceeds pro rata, not sequentially.'],
      ['TLB paid in full first because term loans have longer tenor, revolver receives $50M', 'Tenor does not create priority. Within the first-lien class on shared collateral, the loans rank equally regardless of maturity.'],
      ['Both paid in full because $450M exceeds either tranche individually', 'Total claims are $600M against $450M of proceeds. Neither tranche is paid in full — they share a shortfall pro rata.'],
    ],
    'Inside a single lien class, recoveries are pro rata by claim size. Priority kicks in across classes; within a class, claimholders share proceeds in proportion to their exposure.'),

  q(4410003, 'Career Skills', CHAPTER, 'Structural vs contractual subordination',
    'A holding company has issued $300M of unsecured notes. Its operating subsidiary has $500M of senior unsecured bank debt and $200M of trade payables. The HoldCo notes are explicitly senior in the indenture. In an OpCo bankruptcy, where do the HoldCo notes rank?',
    'Behind all OpCo creditors — HoldCo notes are structurally subordinated to OpCo debt because the HoldCo claim is only against OpCo equity, which is residual',
    [
      ['Senior to all OpCo claims because the indenture explicitly calls them senior notes', 'An indenture cannot grant priority over creditors of a different legal entity. Contractual seniority operates within an entity; structural subordination operates across entities.'],
      ['Pari passu with the OpCo bank debt because both are unsecured', 'Pari passu requires creditors of the same obligor. HoldCo noteholders have no direct claim on OpCo assets — only on OpCo\'s equity after every OpCo creditor is paid.'],
      ['Ahead of OpCo trade payables but behind OpCo bank debt', 'Both OpCo claims have to be satisfied in full before any value reaches HoldCo. Trade payables and bank debt are both OpCo creditors; HoldCo notes are not.'],
    ],
    'Structural subordination is a function of corporate boxes, not contracts. A claim against the parent only reaches subsidiary assets through the residual equity stub — after every subsidiary creditor is paid.'),

  q(4410004, 'Career Skills', CHAPTER, 'APR and the gifting exception',
    'In a Chapter 11 plan, a class of senior unsecured noteholders agrees to share a portion of its recovery with out-of-the-money equityholders to win their support, while a junior class of subordinated notes receives zero. Is this consistent with absolute priority?',
    'Yes — the senior class can voluntarily "gift" some of its own recovery to a junior class without violating APR, provided the gift comes from the senior\'s own pocket and not from skipping an intermediate class',
    [
      ['No — any distribution to equity while subordinated notes recover zero violates APR regardless of who funds it', 'APR is violated when value that would have gone to a skipped class is redirected. If seniors voluntarily share their own recovery, APR is preserved as to the estate distribution.'],
      ['Yes — APR only applies to secured creditors, so the unsecured layer can distribute as it chooses', 'APR applies across all classes, not only secureds. The reason this gifting is permissible is the voluntary-share doctrine, not an unsecured carve-out.'],
      ['No — the subordinated class\'s zero recovery automatically blocks any plan that pays equity', 'Junior creditor recovery does not itself dictate the plan. A consenting senior can structure a gift; a rejecting junior can object, but the issue is consent, not arithmetic.'],
    ],
    'Courts have generally permitted senior creditors to share their own recovery with junior classes to grease plan confirmation, so long as no intermediate class is improperly skipped. The Jevic decision narrowed this in structured dismissals but it survives in plan contexts.'),

  q(4410005, 'Career Skills', CHAPTER, 'Where preferred equity sits',
    'In a typical leveraged borrower\'s capital structure, where does preferred equity rank?',
    'Below all debt (senior, secured, unsecured, subordinated) but ahead of common equity',
    [
      ['Above subordinated notes because preferred carries a fixed return like debt', 'A fixed dividend does not make preferred a debt instrument. It is equity for waterfall purposes — every debt claim is paid before preferred sees anything.'],
      ['Pari passu with subordinated notes because both are deeply subordinated', 'Subordinated notes are still debt. They have a contractual claim on cash flow and the right to file for default. Preferred is equity and ranks below all debt.'],
      ['Below common equity because preferred holders typically lack voting rights', 'Voting rights do not determine waterfall position. Preferred ranks ahead of common because of its liquidation preference, not despite its lack of votes.'],
    ],
    'Preferred equity is equity for priority purposes. It comes after every debt class and before common. Its "fixed-income feel" comes from dividend mechanics, not from any senior position over debt.'),

  q(4410006, 'Career Skills', CHAPTER, 'Recovery math on a 2L tranche',
    'A borrower has $400M first-lien debt, $200M second-lien debt, and $300M of senior unsecured notes. The business is sold in distress for $500M of enterprise value, all of which is collateral proceeds. What does the 2L tranche recover?',
    '$100M, or 50% — first-lien takes the first $400M, the 2L takes the next $100M, and the unsecured tranche recovers zero',
    [
      ['$200M, full recovery — because 2L is also secured', '2L being secured does not give it priority over 1L on the same collateral. The intercreditor agreement explicitly subordinates 2L liens to 1L liens — same collateral, junior priority.'],
      ['Zero — secured collateral is exhausted by 1L', '1L claims $400M against $500M of collateral, leaving $100M behind for 2L. The 2L is not wiped out unless the collateral fails to cover 1L in full.'],
      ['$66.7M — pro rata with unsecured on residual after 1L', '2L is not pari passu with unsecured. 2L\'s lien on collateral gives it the next claim on collateral proceeds. Unsecured only sees what is left after both lien classes.'],
    ],
    'A 2L lender\'s recovery depends entirely on how much collateral value remains after 1L is paid in full. Here, 1L takes $400M of the $500M proceeds, 2L takes the remaining $100M (50% of $200M), and the unsecured layer is wiped out.'),

  q(4410007, 'Career Skills', CHAPTER, 'DIP financing and the waterfall',
    'A Chapter 11 debtor obtains a $150M DIP loan to fund operations during the case. The pre-petition cap structure is $400M first-lien, $200M second-lien, and $300M unsecured. Where does the DIP sit in the waterfall?',
    'Ahead of all pre-petition debt — DIP loans typically receive a "superpriority" administrative claim and often prime existing liens with court approval',
    [
      ['Pari passu with first-lien because DIP loans are secured', 'DIP loans are usually granted priority above pre-petition first-lien, either by lien priming or by structural superpriority. Pari passu would defeat the purpose — no one would lend post-petition.'],
      ['Behind first-lien but ahead of second-lien because the DIP is junior to existing senior collateral', 'A DIP that ranks below pre-petition 1L would rarely get funded. The whole point of the superpriority order is to get the DIP to the very top of the stack.'],
      ['As an administrative expense, ranking with employee wages and trade payables incurred post-petition', 'Ordinary administrative expense is below superpriority. A DIP order typically grants 364(c) or (d) treatment that elevates it above general admin claims.'],
    ],
    'DIP financing only works because the court grants the lender superpriority — either by priming pre-petition liens (with adequate protection) or by granting an administrative claim above all other admin claims. Without that, no one would extend credit to a debtor.'),

  q(4410008, 'Career Skills', CHAPTER, 'Cramdown of a secured class',
    'A Chapter 11 plan offers the secured class new notes worth $250M against a $400M secured claim, while a junior class consents and equity is wiped out. The secured class rejects. Can the plan be confirmed under cramdown?',
    'No — cramdown requires the secured class to receive deferred cash payments with a present value equal to the full secured claim or retain its lien against the collateral, not 62.5% of claim value',
    [
      ['Yes — cramdown allows the court to confirm over any class\'s objection if at least one impaired class accepts', 'One accepting impaired class is necessary but not sufficient. Cramdown still requires the plan to be "fair and equitable" to the rejecting class, which for secureds means full present value.'],
      ['Yes — cramdown lets the court substitute its valuation for the secured class\'s claim figure', 'A court can determine the value of the secured claim, but the rejecting secured class is still entitled to the full present value of that determined claim, not a haircut.'],
      ['No — cramdown is unavailable when the equity class is wiped out', 'Wiping out equity is consistent with APR, not in tension with cramdown. The defect here is the secured class\'s present-value shortfall, not the equity treatment.'],
    ],
    'Cramdown of a secured class requires the secured creditor either to retain its lien and receive payments with present value equal to the secured claim, or to receive the "indubitable equivalent." Anything less is non-confirmable over the secured class\'s objection.'),

  q(4410009, 'Career Skills', CHAPTER, 'Guarantor coverage and structural risk',
    'A borrower\'s $500M senior unsecured notes are issued by the parent. The parent\'s operating subsidiaries do not guarantee the notes. The same subsidiaries owe $700M of bank debt. In an enterprise-wide distress, how should a credit analyst think about the notes?',
    'They are structurally subordinated to the sub bank debt — the noteholders only access OpCo cash flow as a residual equity claim after the bank debt is satisfied',
    [
      ['They are pari passu with the bank debt because both are unsecured', 'Pari passu requires the same obligor. The notes are at the parent, the bank debt is at the OpCos — different boxes, different recoveries.'],
      ['They are senior to the bank debt because they are public debt and the bank debt is private', 'Public vs private has no bearing on priority. Structural position is governed by which entity issues the obligation and which entities guarantee it.'],
      ['They are senior to the bank debt by virtue of the parent being the legal employer of the management team', 'The parent\'s management role does not create priority over OpCo creditors. Priority is determined by entity-level claims and guarantees, not corporate function.'],
    ],
    'When sub guarantees are missing, parent-level debt becomes structurally subordinated to sub-level debt. A credit memo must reflect this — the headline "senior unsecured" label is misleading without the guarantee structure mapped out.'),

  // -------------------------------------------------------------------------
  // BORROWER TYPES AND RISK (4410010–4410019)
  // IG vs leveraged, sponsor vs non-sponsor, syndicated vs club,
  // middle market vs broadly syndicated.
  // -------------------------------------------------------------------------
  q(4410010, 'Career Skills', CHAPTER, 'IG vs leveraged loan threshold',
    'What is the conventional cutoff between an investment-grade borrower and a leveraged borrower in the US syndicated loan market?',
    'A corporate family rating of BB+/Ba1 or lower (or, by some bank definitions, a spread of LIBOR/SOFR + 125 bps or higher) puts the credit into leveraged territory; BBB-/Baa3 or higher is investment grade',
    [
      ['Total debt above $1 billion automatically marks a borrower as leveraged regardless of rating', 'Issue size is independent of credit quality. A $5B IG issuer like a large utility is still IG; a $200M LBO is still leveraged. Rating, not absolute size, is the line.'],
      ['Any borrower owned by a private equity sponsor is by definition leveraged', 'Sponsor ownership correlates with leveraged status but does not define it. The Fed and SNC criteria look at rating and spread, not ownership.'],
      ['Borrowers with negative tangible net worth are by definition below investment grade', 'Plenty of IG borrowers (large M&A acquirers, large buyback issuers) carry negative tangible net worth. The IG/leveraged line is set by agency ratings and market pricing, not balance-sheet sign.'],
    ],
    'The IG/leveraged boundary is conventional: BBB-/Baa3 is the lowest IG rating; one notch below (BB+/Ba1) starts the leveraged universe. Pricing-based definitions (e.g., the Shared National Credit threshold) approximate the same line.'),

  q(4410011, 'Career Skills', CHAPTER, 'Sponsor-backed LBO borrower profile',
    'A US middle-market manufacturer is being taken private by a PE sponsor. Compared to a similarly sized non-sponsor public-company borrower, what is the most defensible characterization of the sponsor-backed credit?',
    'Higher initial leverage (often 5–7x EBITDA), aggressive add-back culture in EBITDA, tighter documentation flexibility negotiated by the sponsor, and a clear equity check that signals sponsor commitment',
    [
      ['Lower leverage because sponsors are required by their LPAs to maintain conservative capital structures', 'PE LPAs do not prescribe portfolio company leverage. Sponsors deliberately push leverage as high as the market will bear to amplify equity returns.'],
      ['No add-backs to EBITDA because lenders require pure GAAP earnings', 'Sponsor deals are famous for run-rate, cost-savings, and synergy add-backs — often 10–25% of headline EBITDA. Lenders accept this within negotiated caps.'],
      ['Tighter covenants than non-sponsor deals because sponsors must signal credit discipline', 'The opposite is typical. Sponsors negotiate broader baskets, more flexible covenant definitions, and more carve-outs than a comparable non-sponsor would receive.'],
    ],
    'Sponsor-backed credits look different from corporate borrowers: higher leverage, more aggressive EBITDA add-backs, and looser documentation. The credit story leans on the sponsor\'s equity check, track record, and willingness to support — not on a conservative balance sheet.'),

  q(4410012, 'Career Skills', CHAPTER, 'Syndicated vs club deal',
    'A $1.2B leveraged term loan is being arranged for an LBO. The arranger expects to place the loan with roughly 80 institutional investors via a flex process. Is this a syndicated deal or a club deal?',
    'Syndicated — a broad institutional placement with flex pricing is the classic definition; a club deal is a small group (typically 3–8 relationship lenders) committing without a syndication process',
    [
      ['Club — because the deal is being placed with multiple investors rather than held by one bank', 'Multiple investors is true of both. A club is defined by the small, pre-arranged group of relationship lenders with no marketing process. 80 investors via flex is the opposite.'],
      ['Neither — only the revolver tranche can be syndicated, while a TLB of this size is bilateral', 'A $1.2B institutional TLB is the prototypical syndicated product. Bilateral loans of this size are vanishingly rare in the US leveraged market.'],
      ['Both — syndicated and club mean the same thing in US market practice', 'The terms are distinct. A syndication implies a broad placement process and ratings; a club is intentionally small, often relationship-driven, and skips the syndication marketing.'],
    ],
    'Syndication and club are different distribution models. Syndicated deals are sold widely through a marketed process with price flex; club deals are quietly placed with a small, known lender group. The distinction matters for execution risk, pricing, and documentation flexibility.'),

  q(4410013, 'Career Skills', CHAPTER, 'Middle market vs broadly syndicated',
    'A $400M term loan B for a US software company is being arranged. The borrower has $80M of EBITDA. Should this credit be characterized as middle market or broadly syndicated?',
    'Middle market — both EBITDA scale (under $100M) and deal size sit below the conventional broadly syndicated threshold of roughly $500M deal size and $100M+ EBITDA',
    [
      ['Broadly syndicated — any TLB with institutional investors is by definition broadly syndicated', 'Institutional investor participation is a feature of both segments. The line is set by deal size and EBITDA scale, not by investor type.'],
      ['Middle market only if the loan is unrated', 'Many middle-market deals are rated; many broadly syndicated deals are not (e.g., second-lien). The market segment is driven by size and depth of secondary trading, not by rating status.'],
      ['Broadly syndicated — because software companies trade on EBITDA multiples, valuation is large enough to qualify', 'Enterprise value drives valuation but not market segment. Lenders care about debt quantum and the borrower\'s scale, not the multiple at which equity trades.'],
    ],
    'Middle-market and broadly syndicated segments differ in investor base, liquidity, and documentation patterns. The convention in the US market is roughly: deals under ~$500M facility size and borrowers under ~$100M EBITDA are middle market; above is broadly syndicated.'),

  q(4410014, 'Career Skills', CHAPTER, 'Non-sponsor corporate borrower',
    'A US public-company industrial issuer with $1.5B of EBITDA is refinancing $4B of existing senior secured term loans. The company is not owned by a sponsor. What credit characteristics should a memo emphasize compared with a sponsor-backed deal?',
    'Lower leverage targets (typically 2–4x), more conservative covenant package, longer institutional holder relationships, and a focus on rating maintenance rather than sponsor IRR maximization',
    [
      ['Higher leverage tolerance because the public market punishes under-levered balance sheets', 'Public industrials typically optimize for rating and cost of capital, not maximum leverage. Sponsor structures push leverage; corporates rarely do.'],
      ['The same documentation as a sponsor deal because the institutional market dictates terms', 'Documentation differs materially. Non-sponsor corporates accept tighter covenants and fewer carve-outs because they are not optimizing flexibility for a future dividend recap or sponsor exit.'],
      ['Tighter add-back rules but otherwise identical underwriting', 'Add-backs are one of many differences. The underwriting also weighs sponsor equity, exit plan, and dividend recap risk in sponsor deals — irrelevant in non-sponsor credits.'],
    ],
    'Non-sponsor borrowers underwrite to ratings, cost of capital, and operating flexibility. Sponsor borrowers underwrite to IRR, exit multiple, and document flexibility for future capital events. Both can be senior secured TLBs, but the credit stories are different.'),

  q(4410015, 'Career Skills', CHAPTER, 'Recurring revenue loans',
    'A growth-stage SaaS borrower has $40M of ARR but is unprofitable on an EBITDA basis. A lender proposes a "recurring revenue" loan sized at 2.0x ARR. How should the credit be assessed compared with a traditional EBITDA-based facility?',
    'Loan-to-ARR replaces leverage as the key metric, with covenants tied to ARR growth, retention, and minimum liquidity; the credit relies on enterprise value and refinancing risk rather than near-term cash flow coverage',
    [
      ['It is essentially an unsecured facility because there is no EBITDA to secure the loan', 'Recurring revenue loans are typically first-lien on all assets, including IP. Lack of EBITDA does not mean lack of collateral — the collateral is the contracted revenue stream and the enterprise.'],
      ['ARR coverage is irrelevant because retention is implied at 100% in SaaS', 'Net dollar retention is empirically below 100% for many SaaS borrowers, and gross retention churn is the central credit risk. Covenants test these directly.'],
      ['Standard EBITDA covenants still apply, just with a higher leverage cap', 'EBITDA covenants do not work when EBITDA is negative or near zero. The whole point of an ARR-based facility is to substitute revenue-based covenants entirely.'],
    ],
    'Recurring-revenue lending evolved to serve growth SaaS borrowers that throw off contracted revenue but consume cash. The credit case is enterprise-value coverage and retention math, with exit assumed via refinancing or M&A rather than amortization from cash flow.'),

  q(4410016, 'Career Skills', CHAPTER, 'Dividend recap risk in sponsor deals',
    'A sponsor-backed borrower at 4.5x net leverage has performed well, with EBITDA growing 30% since the LBO close. The sponsor signals interest in a dividend recap that would re-lever to 6.0x. As an existing TLB lender, how should this risk be framed?',
    'A dividend recap converts equity buffer into incremental debt without operational improvement — covenant headroom shrinks, incremental ratable carve-outs are likely to be used, and the credit\'s downside protection weakens despite the headline EBITDA growth',
    [
      ['It is neutral because total leverage returns to the original 4.5x close level only adjusted for growth', 'It is not neutral — the equity that would otherwise absorb downside is paid out. Leverage at the new EBITDA looks similar, but the absolute debt quantum is higher and equity cushion is thinner.'],
      ['It is positive because higher leverage signals confidence and tightens lender alignment with sponsor', 'Higher leverage in a recap is a cash distribution to the sponsor, not a confidence signal. The sponsor takes chips off the table; lenders absorb more risk for the same coupon.'],
      ['It is irrelevant because the existing TLB will be repaid in full as part of the refinancing', 'A typical recap is incremental, not a refinancing — the existing TLB stays in place and is joined by an add-on. Even if refinanced, the new credit at 6.0x is materially weaker.'],
    ],
    'Dividend recaps are a classic late-cycle risk for TLB lenders. They monetize sponsor equity without improving the business, weaken the credit, and often exploit covenant flexibility (incremental ratable, available amount, builder basket) negotiated at close.'),

  q(4410017, 'Career Skills', CHAPTER, 'Why an IG borrower issues commercial paper',
    'A large IG-rated US industrial maintains a $3B revolving credit facility but actually funds short-term working capital via commercial paper backstopped by the revolver. Why is this structure standard for IG borrowers?',
    'CP pricing is materially below revolver drawn pricing for high-rated names; the revolver serves as a 364-day liquidity backstop required by rating agencies, not as the primary funding source',
    [
      ['Banks require IG borrowers to use CP because revolvers cannot legally be drawn for working capital', 'Revolvers can absolutely be drawn for working capital. CP is preferred because it is cheaper, not because it is required.'],
      ['Commercial paper carries no maturity risk because investors automatically roll', 'CP has rollover risk — the GFC and 2020 dislocation are exactly the case studies. The revolver backstop exists because CP cannot always be rolled.'],
      ['CP is cheaper because it is secured by the same collateral that secures the revolver', 'IG CP is unsecured and ranks pari passu with other senior unsecured obligations. Its pricing advantage comes from short tenor and credit quality, not collateral.'],
    ],
    'High-rated IG issuers fund daily liquidity with CP and keep an undrawn revolver as a regulatory and rating-agency liquidity backstop. The whole structure depends on credit quality — sub-IG borrowers cannot reliably tap CP and have to draw revolvers instead.'),

  q(4410018, 'Career Skills', CHAPTER, 'Direct lending vs syndicated TLB',
    'A private-credit fund offers a sponsor a $600M unitranche commitment for a take-private. The alternative is a marketed $400M TLB + $200M second-lien through the syndicated market. What is the most accurate trade-off?',
    'Direct lending offers execution certainty, a single counterparty, and faster close at the cost of higher all-in coupon; syndicated execution offers lower coupon and broader investor base but with market risk and a flex spread',
    [
      ['Direct lending is always cheaper because no syndication fee is paid', 'Direct lenders typically charge 100–300 bps above broadly syndicated pricing in exchange for execution certainty. The "no syndication fee" is more than offset by spread.'],
      ['Syndicated execution is always faster because banks have established processes', 'A marketed syndication takes 4–8 weeks from launch through allocation; direct lenders frequently commit in 2–4 weeks. Speed favors direct lending in most cases.'],
      ['The two are economically identical once intercreditor mechanics are factored in', 'They are not. Unitranche removes the 1L/2L split and the agreement-among-lenders complexity, but the all-in cost and lender relationships are materially different.'],
    ],
    'The sponsor\'s choice between direct lending and syndicated execution is execution certainty and speed versus cost. Unitranche compresses the cap structure into a single tranche; syndicated execution unbundles 1L and 2L at lower headline cost but with market risk and lender count.'),

  q(4410019, 'Career Skills', CHAPTER, 'Cyclical borrower at trough',
    'A leveraged auto-parts supplier reports trailing EBITDA of $180M, peak-cycle EBITDA of $260M, and trough-cycle EBITDA in the last recession of $90M. Senior secured debt outstanding is $700M. How should a TLB credit memo characterize leverage?',
    'Through-cycle: leverage looks 3.9x on trailing, but trough leverage is 7.8x — a leveraged credit memo should anchor on the trough case for covenant headroom and downside scenarios, not the trailing print',
    [
      ['Trailing-only at 3.9x — this is the figure lenders reference for covenant compliance', 'Lenders may use trailing for compliance arithmetic, but the credit assessment must stress to trough. A covenant set at 5.0x looks safe at 3.9x and breaks at 7.8x — that is the analytical point.'],
      ['Peak-only at 2.7x — peak EBITDA represents the company\'s earnings power and is most relevant to enterprise value', 'Peak EBITDA flatters leverage in a cyclical business. Lenders care about coverage in the next downturn, not the last upturn. Peak is misleading for downside analysis.'],
      ['Average of trailing and trough at 5.9x — average smooths cyclicality without losing the trailing print', 'A simple average obscures the entire point of cyclical analysis. The credit either survives trough or it does not; averaging makes a binary risk question disappear.'],
    ],
    'Cyclical borrowers must be underwritten to trough EBITDA. Headline leverage on trailing earnings hides the dynamic. The right framing for the IC is: "we are at 3.9x today, 7.8x at trough — here is the liquidity, covenant headroom, and covenant flex that gets us through."'),

  // -------------------------------------------------------------------------
  // SENIOR DEBT STRUCTURES (4410020–4410029)
  // Revolver, TLA, TLB, ABL vs cash flow, secured vs unsecured.
  // -------------------------------------------------------------------------
  q(4410020, 'Career Skills', CHAPTER, 'TLA vs TLB amortization',
    'How do a Term Loan A and a Term Loan B typically differ on amortization?',
    'TLA amortizes meaningfully (often 5–10% per year scaling up, ~50% of principal paid by maturity); TLB amortizes nominally (typically 1% per year with a bullet at maturity)',
    [
      ['Both amortize identically on a straight-line basis over their tenor', 'TLA and TLB are explicitly designed to look different. Banks holding TLA want amortization for capital purposes; institutional TLB holders prefer minimal amortization and a bullet.'],
      ['TLA is fully bullet; TLB amortizes on a fixed schedule', 'The opposite. TLA is the amortizing bank tranche; TLB is the institutional bullet tranche with token 1% annual amortization.'],
      ['TLB amortizes faster because institutional investors require quicker principal return', 'Institutional investors actually prefer the opposite. They want the loan outstanding to earn coupon; mandatory amortization shortens duration and forces reinvestment.'],
    ],
    'TLA is the bank tranche — amortizing, shorter tenor, lower spread, held by relationship banks for capital and regulatory reasons. TLB is the institutional tranche — bullet, longer tenor, higher spread, held by CLOs and credit funds.'),

  q(4410021, 'Career Skills', CHAPTER, 'Revolver utility',
    'A leveraged borrower with $40M of TTM EBITDA puts in place a $50M revolver alongside a $200M TLB at close. What is the primary purpose of the revolver?',
    'Working-capital liquidity and contingent funding for seasonal swings, acquisitions, or unexpected cash needs — not a substitute for the TLB, which provides the committed long-term capital',
    [
      ['To refinance the TLB if institutional pricing widens before close', 'A revolver is sized for working capital, not to refinance the institutional tranche. The revolver is fully drawn before it could cover a $200M TLB.'],
      ['To fund the sponsor equity check on day one', 'Sponsor equity is funded from the fund, not from the borrower\'s revolver. Funding equity from debt would defeat the entire point of the equity check.'],
      ['To pay the upfront fees on the TLB syndication', 'Upfront fees are typically deducted from TLB proceeds at close, not financed via a separate revolver draw. The revolver is left available for operating needs.'],
    ],
    'A revolver provides flexibility — the option to draw cash when needed and repay when not. In a leveraged structure, the revolver is the operating safety valve; the TLB is the permanent capital. Conflating the two is a common analytical error.'),

  q(4410022, 'Career Skills', CHAPTER, 'ABL borrowing base mechanics',
    'A US distributor uses an Asset-Based Lending revolver. The borrowing base is set at 85% of eligible receivables ($150M) plus 60% of eligible inventory ($80M). Eligibility excludes receivables more than 90 days past due. What is the borrower\'s maximum availability?',
    '$127.5M + $48M = $175.5M of borrowing base, subject to any reserves or sub-limits in the credit agreement',
    [
      ['$230M — total eligible collateral with no advance rate haircut', 'Advance rates exist precisely to discount collateral against liquidation value and dilution risk. Without the haircut, the lender has zero margin for AR collection issues or inventory markdowns.'],
      ['$195.5M — receivables at 100% and inventory at 60%', 'AR carries dilution and collection risk; lenders advance against it at a discount (typically 80–90%), not at face. Receivables are not cash.'],
      ['$150M — receivables alone, with inventory excluded', 'Eligible inventory is part of the borrowing base in an ABL structure. Excluding it ignores the second-largest collateral pool in most distributor balance sheets.'],
    ],
    'ABL availability is a formula: advance rate × eligible collateral, subject to reserves and sub-limits. The borrowing base is recomputed monthly (often weekly in stressed scenarios). A credit analyst has to map both the formula and the lender\'s ability to tighten advance rates and reserves dynamically.'),

  q(4410023, 'Career Skills', CHAPTER, 'ABL vs cash-flow lending',
    'A US food-services distributor with thin margins and large working capital swings is choosing between an ABL revolver and a traditional cash-flow revolver. What is the strongest argument for the ABL structure?',
    'ABL availability scales with collateral (receivables and inventory) rather than EBITDA, providing reliable liquidity even when earnings compress — exactly when a thin-margin distributor most needs the line',
    [
      ['ABL revolvers carry lower spreads because they have no maintenance covenants', 'ABL revolvers do have covenants — typically a springing fixed-charge coverage covenant triggered by low availability. Spreads are often lower because of collateral support, not because of covenant absence.'],
      ['ABL allows the borrower to draw against future revenue projections', 'ABL is explicitly backward-looking — it advances against existing AR and inventory, not against forecasts. That is the whole point of the collateral discipline.'],
      ['ABL is fully committed regardless of borrowing base — the line is sized at the facility cap', 'Availability is the lesser of the facility cap and the borrowing base. The line is committed but availability fluctuates with collateral, often well below the cap.'],
    ],
    'ABL is the right tool when collateral is liquid and predictable but earnings are volatile or thin. Cash-flow lending is the right tool when EBITDA is durable. Mismatching borrower type to facility type is a frequent and avoidable structuring error.'),

  q(4410024, 'Career Skills', CHAPTER, 'Senior secured vs senior unsecured',
    'A leveraged borrower issues $500M of senior secured term loans and $300M of senior unsecured notes. The notes indenture refers to the notes as "senior" obligations. In a liquidation, what does "senior" mean for the notes?',
    'Senior in payment priority versus contractually subordinated debt within the same entity, but junior in collateral priority to the secured term loans — "senior" refers to the obligor\'s contractual ranking, not to lien position',
    [
      ['Pari passu with the secured term loans because both are called senior', 'The senior label refers to subordination, not to liens. Senior unsecured notes rank below senior secured loans because the secured lenders have a lien on collateral and the notes do not.'],
      ['Ahead of the secured term loans because notes are typically issued before bank debt closes', 'Issuance order has no effect on priority. Liens determine collateral priority, indenture subordination determines unsecured priority — issuance date is irrelevant.'],
      ['Identical to subordinated notes because both are unsecured', 'Senior unsecured and subordinated unsecured are different. Senior unsecured ranks ahead of subordinated by indenture; both rank behind secured by lien.'],
    ],
    '"Senior" and "secured" are independent dimensions. Senior unsecured notes are senior in the contractual subordination sense — ahead of subordinated obligations — but unsecured against secured obligations. Lenders must read both layers, not just the headline label.'),

  q(4410025, 'Career Skills', CHAPTER, 'Springing covenant on a TLB',
    'A TLB credit agreement contains no financial maintenance covenant. The revolver in the same agreement contains a 6.0x net leverage springing maintenance covenant tested only when revolver utilization exceeds 35%. What does this structure mean for the TLB lenders?',
    'TLB lenders have no direct covenant protection — they rely on the revolver covenant to spring as an early warning, but if the revolver is undrawn or below the threshold, the borrower can deteriorate without breaching anything',
    [
      ['TLB lenders share the springing covenant pari passu — any default flows to both tranches', 'The covenant runs to the revolver lenders only. A breach is a revolver default that triggers cross-default into the TLB, but the springing covenant itself is not a TLB protection.'],
      ['TLB lenders have stronger covenants than the revolver because the bullet structure compensates with tighter terms', 'The opposite is true. TLB documentation is famously cov-lite; the revolver lenders carry whatever financial covenant exists, and even that is springing.'],
      ['The covenant springs into the TLB tranche if the revolver tranche is repaid', 'Springing covenants drop away when the revolver is repaid or below the utilization threshold. There is no mechanism that promotes them into the TLB tranche.'],
    ],
    'Cov-lite TLBs rely on the revolver\'s springing covenant for any maintenance protection. When the revolver is undrawn — which is most of the time for a healthy borrower — the covenant never tests. By the time it springs (heavy revolver use), the credit is often already deteriorating.'),

  q(4410026, 'Career Skills', CHAPTER, 'Delayed draw term loan',
    'A sponsor-backed borrower puts in place a $300M committed TLB and a $100M Delayed Draw Term Loan (DDTL) with a 24-month availability period for acquisitions. How should a lender think about the DDTL?',
    'The DDTL is a committed but undrawn loan with a ticking fee — the lender earns a fee for the commitment, and the borrower draws as acquisitions close within the availability window',
    [
      ['The DDTL is a separate tranche that ranks junior to the TLB', 'DDTL typically draws pari passu with the existing TLB on the same collateral and at the same priority. Junior ranking would require explicit subordination, which is not standard.'],
      ['The DDTL is uncommitted — the lender can decline to fund any individual draw', 'DDTL is committed financing, subject only to standard conditions (no default, accuracy of reps). That commitment is what justifies the ticking fee.'],
      ['The DDTL replaces the revolver for working-capital purposes', 'DDTL is purpose-built for acquisitions and capex, not working capital. The revolver remains the working-capital line; the two serve distinct functions.'],
    ],
    'DDTL is a useful structuring tool when the sponsor has an active M&A pipeline. The lender commits capital, charges a ticking fee for availability, and funds when the borrower pulls. It is committed paper, not optional, and ranks alongside the existing term loan.'),

  q(4410027, 'Career Skills', CHAPTER, 'Incremental ratable carve-out',
    'A TLB credit agreement contains an incremental facility allowing the borrower to incur up to $200M of additional first-lien debt or any amount that keeps senior secured leverage at or below the closing date level. The borrower closed at 4.0x and EBITDA has grown 25%. How much incremental first-lien is available?',
    'The $200M fixed basket plus an unlimited ratable amount that keeps first-lien leverage at 4.0x — combining both gives the borrower significant headroom against the closing-date constraint',
    [
      ['Only $200M, because the ratable test is replaced by the fixed basket once any incremental is incurred', 'The two baskets stack rather than substitute. Most documents permit a fixed dollar basket plus a separate ratio-based amount, and the borrower can typically draw from both.'],
      ['Zero, because incremental capacity is recomputed annually rather than at incurrence', 'Incremental capacity is tested at incurrence under most modern credit agreements, not on an annual reset. EBITDA growth between closing and the incurrence date expands the ratable amount.'],
      ['$200M only, because the ratio test is only available after the fixed basket is fully drawn', 'The ratio test is generally available immediately, often in combination with the fixed basket. Sequencing requirements would be unusual in a modern sponsor credit agreement.'],
    ],
    'Incremental ratable carve-outs are one of the most important credit-agreement flex levers. A sponsor that grows EBITDA expands its ratable capacity automatically, on top of the fixed basket, often enabling material re-leveraging without lender consent.'),

  q(4410028, 'Career Skills', CHAPTER, 'Letter of credit sub-limit',
    'A $250M revolving credit facility contains a $75M letter of credit sub-limit. The borrower has $60M of cash borrowings drawn and $50M of letters of credit outstanding. What is the borrower\'s remaining availability for a new $40M cash borrowing?',
    '$140M — total availability ($250M) less drawn cash ($60M) less LCs outstanding ($50M) equals $140M, well above the $40M ask',
    [
      ['$75M — only the LC sub-limit matters for availability calculations', 'The LC sub-limit caps LC issuance, not total revolver availability. Cash borrowings are computed against the full $250M facility net of all utilization.'],
      ['$190M — LCs do not reduce revolver availability because they are off balance sheet', 'LCs use revolver availability under the credit agreement regardless of GAAP treatment. Each LC issued reduces the cash borrowing capacity dollar for dollar.'],
      ['Zero — the borrower is already at maximum LC issuance ($50M of $75M sub-limit), blocking new cash draws', 'LC sub-limit at $50M of $75M does not affect cash borrowing capacity. The sub-limit constrains LC issuance only; cash borrowing capacity sits on top.'],
    ],
    'LCs and cash borrowings both consume revolver availability under the standard credit agreement, but the LC sub-limit only caps LC issuance. Computing availability correctly means tracking both balances against the total commitment and the LC sub-limit separately.'),

  q(4410029, 'Career Skills', CHAPTER, 'Most-favored-nation pricing on incremental',
    'A TLB closes at SOFR + 400 bps with a 50 bps MFN provision. The borrower draws $150M of incremental first-lien debt at SOFR + 525 bps, six months after close. What does the MFN clause require?',
    'The existing TLB spread must be repriced up to at least SOFR + 475 bps — the incremental yield (525) minus the MFN cushion (50) — to prevent the new tranche from pricing materially through the existing paper',
    [
      ['Nothing — MFN only applies if the new tranche is issued at the same priority level', 'MFN typically applies to pari passu incremental of the same lien level. A first-lien incremental on a first-lien TLB is precisely the case MFN is designed for.'],
      ['The new $150M tranche must be repriced down to SOFR + 450 bps to match the existing TLB', 'MFN repricing flows the other direction. The existing tranche moves up to within 50 bps of the new tranche, not vice versa.'],
      ['Both tranches must reprice to the average of the two spreads (462.5 bps)', 'MFN is not an averaging mechanism. It is a one-way protection for existing lenders against new tranches pricing through them, with the existing spread stepping up to a defined floor.'],
    ],
    'MFN clauses protect existing lenders by forcing the original spread up if the borrower issues new pari passu debt at higher pricing. The cushion (often 50 bps, sometimes with a sunset of 6–18 months) caps how far through existing paper the incremental can price.'),

  // -------------------------------------------------------------------------
  // SUBORDINATED DEBT (4410030–4410038)
  // Mezz, 2L, PIK toggle, equity kickers, intercreditor, unitranche.
  // -------------------------------------------------------------------------
  q(4410030, 'Career Skills', CHAPTER, 'Mezzanine debt position',
    'A middle-market LBO uses a $250M first-lien TLB, $80M of mezzanine notes, and $200M of sponsor equity. Where does mezzanine sit in the cap structure?',
    'Below the senior secured TLB and above the equity — typically unsecured or deeply subordinated, often with a higher cash coupon plus PIK interest and warrants or detachable equity upside',
    [
      ['Pari passu with the TLB because both are senior layers of the cap structure', 'Mezzanine is explicitly subordinated to the senior secured layer. Pari passu would defeat the structural purpose of taking mezzanine risk for mezzanine returns.'],
      ['Above the TLB because mezzanine carries a higher coupon and is therefore senior', 'Coupon size reflects risk, not priority. Higher coupon is compensation for being deeper in the stack, not a marker of seniority.'],
      ['Below the common equity because mezzanine has equity-like features', 'Mezzanine is debt with equity-like upside (warrants, PIK), not equity. It ranks above common — equity is always residual.'],
    ],
    'Mezzanine sits between senior secured debt and equity. It absorbs more risk than senior debt and earns higher returns, typically through a blend of cash coupon, PIK interest, and warrants or co-investment equity for additional upside.'),

  q(4410031, 'Career Skills', CHAPTER, 'PIK toggle mechanics',
    'A second-lien tranche carries a SOFR + 700 cash coupon with a PIK toggle option that allows the borrower to elect PIK interest at SOFR + 800 instead. The borrower is approaching tight liquidity and elects PIK for two consecutive quarters. What happens?',
    'Accrued interest is capitalized into the principal at the PIK rate, increasing the loan balance and future interest base — the borrower preserves cash today but pays higher absolute interest going forward',
    [
      ['The borrower is in default because PIK can only be elected by lenders, not by the borrower', 'A PIK toggle is by definition borrower-elected within defined limits. Lender-elected PIK is a different structure (PIK during default), not a toggle.'],
      ['The cash coupon is permanently waived and replaced with the PIK rate', 'PIK toggle is quarter-by-quarter (or period-by-period) at borrower election. It is not a permanent conversion; the borrower can toggle back to cash if liquidity recovers.'],
      ['The PIK election reduces the loan principal because accrued interest offsets the balance', 'PIK does the opposite — interest that would otherwise be paid in cash is added to principal, growing the loan balance. The phrase is "payment in kind," not "payment by reduction."'],
    ],
    'PIK toggles are designed for liquidity flexibility: the borrower can preserve cash by capitalizing interest, at the cost of a higher coupon on a growing balance. They are common in mezzanine and 2L. From a credit perspective, sustained PIK toggling is a warning signal.'),

  q(4410032, 'Career Skills', CHAPTER, 'Warrant attached to mezzanine',
    'A mezzanine note carries a 12% cash coupon and 2% detachable warrants on the borrower\'s equity, struck at the LBO price. The sponsor exits five years later at 2.5x money. What is the warrant\'s return?',
    'The 2% warrants entitle the holder to 2% of the equity at the strike (LBO) price; at 2.5x money the warrant value is roughly 2% × (2.5 − 1.0) of the equity check — a 1.5x boost on the warrant\'s base',
    [
      ['The warrants pay a 2% dividend on the borrower\'s equity for the holding period', 'Warrants are not dividend instruments. They are the right to subscribe equity at a strike price; the return is realized at exit through the share price appreciation.'],
      ['The warrants vest into 2% of the mezzanine principal, not 2% of equity', 'Warrants are equity instruments. They convert into 2% of the equity, not into a percentage of the debt principal — that is what would distinguish them from a price-bumped coupon.'],
      ['The warrants expire worthless because mezzanine matures at the same time as the exit', 'Warrant detachment exists precisely to survive debt maturity. They are typically exercisable through the exit or for a defined period afterward, capturing equity upside independent of the loan.'],
    ],
    'Warrants on mezzanine deliver equity upside on top of the cash coupon — converting mezzanine returns from pure debt yield into a hybrid yield-plus-equity profile. The warrant percentage and strike are heavily negotiated and materially shift mezzanine economics.'),

  q(4410033, 'Career Skills', CHAPTER, '1L/2L intercreditor agreement',
    'A 1L/2L intercreditor agreement between first-lien and second-lien lenders typically gives which class control over collateral?',
    'The first-lien lenders control enforcement decisions on the collateral; the second-lien lenders agree to a standstill period (often 90–180 days) before they can independently enforce, even after default',
    [
      ['Second-lien lenders, because they have less collateral coverage and therefore need control', 'The opposite — collateral is controlled by the lien class with first priority. Second-lien lenders accept reduced enforcement rights as part of taking the junior position.'],
      ['Both classes equally, with consent from each required for any enforcement action', 'Joint enforcement would paralyze the workout process. The structure is exactly designed to avoid that — the 1L runs the process and the 2L stands still.'],
      ['Neither class — the borrower retains full control of collateral and lenders only direct cash distribution', 'Lenders have collateral rights that supersede the borrower\'s control upon default. The intercreditor allocates those rights between the two lien classes, not back to the borrower.'],
    ],
    '1L/2L intercreditor agreements concentrate workout control in the senior lien class. The 2L gets paid out of residual collateral value but does not direct strategy. A 2L lender investing in a credit must accept this — control is the price of priority.'),

  q(4410034, 'Career Skills', CHAPTER, 'Unitranche mechanics',
    'A unitranche loan combines what would otherwise be a first-lien and second-lien tranche into a single instrument. Internally, the direct lender often enters into an "Agreement Among Lenders" (AAL). What does the AAL do?',
    'Allocates economics between a notional "first-out" and "last-out" portion within the same tranche — externally the borrower sees one loan, but lenders divide priority on collateral proceeds and interest waterfalls internally',
    [
      ['Subordinates the unitranche to senior unsecured notes the borrower may later issue', 'AAL is an internal lender-to-lender document. It does not contract with future external debt. Subordination to future debt would be governed by the credit agreement itself.'],
      ['Eliminates the unitranche\'s priority and treats it as pari passu with trade payables', 'A unitranche is a fully secured senior facility regardless of internal economics. The AAL is invisible to other creditors and does not affect external priority.'],
      ['Allows the unitranche lender to convert the loan into equity at its discretion', 'Conversion features would sit in the credit agreement and would be a major commercial point. AAL is a back-office allocation document, not a conversion mechanism.'],
    ],
    'Unitranche externally looks like a single first-lien loan; internally, the AAL splits it into a first-out (lower rate, lower risk) and last-out (higher rate, higher risk) so different lender pockets can participate. The borrower benefits from a single agreement; lenders preserve risk segmentation.'),

  q(4410035, 'Career Skills', CHAPTER, '2L recovery sensitivity',
    'A borrower has $400M of 1L debt and $150M of 2L debt secured by the same collateral. The 1L is fully covered at $500M of enterprise value. How sensitive is the 2L recovery to a 10% decline in EV from $500M to $450M?',
    'The 2L recovery falls from $100M (66.7%) at $500M EV to $50M (33.3%) at $450M EV — a 10% EV decline cuts the 2L recovery in half because 2L sits in the levered slice of the cap structure',
    [
      ['It is unchanged because 2L is also secured and ranks alongside 1L on collateral', '2L is junior in lien priority on the same collateral. 1L gets $400M off the top regardless of EV — the 2L\'s slice is exactly what changes when EV moves.'],
      ['It falls roughly 10% in proportion to the EV decline because both classes share collateral pro rata', 'Pro rata sharing is not the mechanic. EV declines erode the levered slice (2L) far more than proportionally — leverage compounds in both directions.'],
      ['It rises because senior lenders absorb the EV decline first under intercreditor', 'Senior lenders absorb decline only when they themselves are impaired. As long as 1L is fully covered, every dollar of EV decline goes straight through 2L recovery.'],
    ],
    'Junior tranche recoveries are levered to enterprise value. Small EV moves translate into large recovery swings for whoever sits at the top of the residual. This is why 2L and mezzanine returns demand premium spreads — and why credit memos stress-test EV directly.'),

  q(4410036, 'Career Skills', CHAPTER, 'Holdco PIK notes',
    'A sponsor adds a $200M HoldCo PIK note on top of an existing OpCo capital structure to fund a dividend recap. The HoldCo note PIKs at 12% and matures in 7 years. How should an existing OpCo TLB lender think about this?',
    'The HoldCo note is structurally subordinated to all OpCo debt — recovery comes from residual OpCo equity value — but it adds pressure on OpCo cash flow if dividends are required to service the HoldCo, and signals sponsor aggressiveness',
    [
      ['It is pari passu with OpCo subordinated debt and consumes OpCo cash flow directly', 'HoldCo notes are not OpCo obligations. They rank behind every OpCo creditor in priority and only receive servicing via permitted dividends from OpCo to HoldCo.'],
      ['It increases the OpCo TLB\'s collateral coverage by adding sponsor support', 'HoldCo PIK is a sponsor liquidity event, not collateral support. The sponsor monetizes equity; the OpCo balance sheet is unchanged but the equity cushion above it is converted to debt above it.'],
      ['It directly defaults the OpCo TLB if the HoldCo note misses a payment', 'HoldCo and OpCo are separate obligors. A HoldCo default does not cross into the OpCo unless the credit agreement specifically includes parent-level cross-default — which is uncommon for HoldCo PIK structures.'],
    ],
    'HoldCo PIK is a financial-engineering move that increases sponsor leverage at the consolidated level without directly burdening OpCo obligations. From a credit perspective, it signals a shift in sponsor stance — and often presages further leveraging at OpCo as well.'),

  q(4410037, 'Career Skills', CHAPTER, 'Subordinated note features',
    'In a US leveraged credit, what features typically distinguish subordinated notes from senior unsecured notes?',
    'Subordinated notes are contractually subordinated in right of payment to senior unsecured obligations, usually carry a higher coupon, often include longer call protection, and may include PIK or equity-kicker features uncommon in senior unsecured',
    [
      ['Subordinated notes always carry a lower coupon because they have weaker covenants', 'Subordinated notes are deeper in the stack and accept more risk — they price higher than senior unsecured, not lower. Covenant strength does not reverse the risk-return tradeoff.'],
      ['Subordinated notes are typically secured by junior liens', 'Subordinated notes are typically unsecured by definition — the subordination is contractual, not collateral-based. Junior liens belong to second-lien debt, which is a different instrument.'],
      ['Subordinated notes have shorter maturities than senior unsecured to compensate for their deeper position', 'The opposite is common — subordinated notes typically have longer maturities (8–10 years) than senior unsecured, with longer call protection. Tenor does not compensate for subordination; coupon does.'],
    ],
    'Subordinated notes are the deepest debt layer. Contractual subordination, higher coupon, longer call protection, and frequent inclusion of PIK or equity kickers are the standard markers. They rank above only preferred and common equity.'),

  q(4410038, 'Career Skills', CHAPTER, 'Equity cure rights',
    'A leveraged credit agreement contains an equity cure right allowing the sponsor to contribute equity to cure financial covenant breaches. The agreement caps cures at two per year and five over the life of the loan. The borrower has used three cures already and breaches the covenant in year four. What is the lender position?',
    'The sponsor has two cures remaining (5 minus 3 used), but is also constrained by the two-per-year cap — if a fourth cure is within the same year as a recent third, it may be blocked by the annual limit',
    [
      ['The sponsor can cure without limit because equity cures are a borrower right, not a lender concession', 'Equity cures are heavily negotiated and capped precisely because lenders do not want unlimited paper-fix-ups. The caps are real constraints, not formalities.'],
      ['The lender has no recourse — covenant breach is automatically cured by the equity contribution', 'Cures must comply with the credit agreement\'s mechanical requirements (timing, amount, EBITDA addition, leverage recalculation) and the caps. A cure that violates the caps does not cure the breach.'],
      ['The two-per-year cap is advisory and lenders typically waive it for a sponsor in good standing', 'Caps are contractual and enforced. A lender may waive in practice for a relationship reason, but the right to insist is binding and is the credit-agreement protection itself.'],
    ],
    'Equity cure rights are a flex feature for sponsors — useful in a hiccup, but lender protections come from the caps (per year and lifetime), the timing windows, and the EBITDA addition rules. Tracking cures used is part of running the credit.'),

  // -------------------------------------------------------------------------
  // EQUITY LAYER (4410039–4410046)
  // Common, preferred (participating, convertible), warrants, sweet equity.
  // -------------------------------------------------------------------------
  q(4410039, 'Career Skills', CHAPTER, 'Common equity in the waterfall',
    'In a leveraged borrower\'s cap structure, when do common equityholders typically receive distributions on an exit or liquidation?',
    'Only after every debt class and every senior equity preference (preferred liquidation preferences, accrued PIK on preferred) has been satisfied — common is the pure residual claim',
    [
      ['Pro rata with subordinated notes because both are deep in the stack', 'Subordinated notes are still debt and have a contractual claim ahead of any equity. Common shares the waterfall with no other class above zero — it is residual, not pari passu with debt.'],
      ['Ahead of preferred shareholders when the sponsor owns the majority of the common', 'Sponsor ownership does not invert preferred priority. Preferred ranks ahead of common by definition; the sponsor\'s ownership stake does not change the waterfall.'],
      ['Common is paid before debt in a US LBO because management holds rollover equity', 'Rollover equity is common equity. It ranks below all debt and below any preferred, regardless of who holds it. Management rollover is not a senior class.'],
    ],
    'Common equity is the residual. In an LBO it is the high-beta layer: wiped out in distress, lottery-ticket value at the upside. Every cap-structure analysis ends with common as the catcher of whatever remains after all debt and preferred preferences are satisfied.'),

  q(4410040, 'Career Skills', CHAPTER, 'Participating preferred mechanics',
    'A growth-equity round is structured as participating preferred with a 1x liquidation preference. The fund invests $50M for 20% of the post-money. The company sells for $400M. How much does the participating preferred receive?',
    '$50M (return of preference) + 20% of the remaining $350M = $50M + $70M = $120M, compared with $80M under straight (non-participating) preferred',
    [
      ['$50M — only the liquidation preference, because participating preferred caps at preference', 'Participating preferred explicitly does not cap. It gets the preference plus its as-converted share of the residual — that is what "participating" means.'],
      ['$80M — 20% of $400M, ignoring the liquidation preference', 'Ignoring the preference treats the round as common equity, not preferred. The 1x preference is what makes it preferred at all.'],
      ['$160M — the preference plus a full 20% of $400M with no preference netting', 'The participation runs on the residual after the preference is paid, not on the full proceeds. Computing 20% of $400M after also paying the preference double-counts the preferred\'s claim.'],
    ],
    'Participating preferred takes the preference and then shares pro rata in the residual. It is more favorable to the investor than straight preferred and is more common in down-rounds, distressed rounds, or sponsor-backed structures than in friendly venture rounds.'),

  q(4410041, 'Career Skills', CHAPTER, 'Convertible preferred decision',
    'A convertible preferred investor with a 1x liquidation preference holds 25% of the company on an as-converted basis. The company sells for $200M and the investor invested $40M. Should the investor take the preference or convert?',
    'Convert — 25% of $200M ($50M) exceeds the $40M liquidation preference, so the investor converts to common and captures the full residual share',
    [
      ['Take the preference — $40M is locked in, conversion is speculative', 'Conversion at exit is not speculative; the price is fixed. The investor compares $40M (preference) to $50M (as-converted) and takes the larger.'],
      ['Take both — convert into common and also collect the preference', 'Convertible preferred is "either / or" at exit, not both. The investor cannot collect the preference and then also convert to share — converting waives the preference.'],
      ['It does not matter — preferred and common share pro rata above the preference', 'That description fits participating preferred, not convertible preferred. Convertible is the one-way election between taking the preference or converting to common.'],
    ],
    'Convertible preferred is a one-way election at exit: take the preference, or convert to common. The investor compares the two and chooses the larger. This is why convertible preferred is friendlier to founders than participating preferred — the investor cannot double-dip.'),

  q(4410042, 'Career Skills', CHAPTER, 'Stacked preferred priority',
    'A company has Series A preferred ($20M at 1x), Series B preferred ($40M at 1x), and Series C preferred ($60M at 1x), all non-participating. The company sells for $90M. In what order are preferences paid?',
    'Series C first ($60M), then Series B ($30M of $40M, partial), then Series A ($0) — under standard stacked seniority, later series rank ahead of earlier series',
    [
      ['Series A first because it was issued earliest', 'Issuance order is the opposite of priority for stacked preferred. Later series typically negotiate seniority over earlier series as part of their terms.'],
      ['Pro rata across all three series because they are all preferred', 'Pari passu treatment is a specific deal term (sometimes called pari passu seniority). Standard practice in venture and growth is stacked seniority, where later rounds rank ahead.'],
      ['Common shareholders share with preferred holders pro rata after Series C is satisfied', 'After preferred preferences are paid, common receives the residual. Here there is no residual — $90M is fully consumed by C and partial B, with A and common wiped out.'],
    ],
    'Stacked seniority is the default in venture and growth equity: the latest round ranks ahead of earlier rounds for liquidation preferences. In a sub-preference exit, junior preferred and common are wiped out before senior preferred is fully paid.'),

  q(4410043, 'Career Skills', CHAPTER, 'Sweet equity for management',
    'In a UK or European-style LBO, "sweet equity" refers to a management equity instrument that is structured differently from the sponsor\'s preferred. How does sweet equity typically work?',
    'Management subscribes for ordinary shares (or a deeply discounted strip) at a low price; sponsor capital is mostly in preferred or shareholder loans that rank ahead, so management\'s economics are levered to the value above the sponsor\'s preference',
    [
      ['Management receives sponsor preferred at the same price as the sponsor, pro rata to their ownership stake', 'That would be ordinary co-investment, not sweet equity. The point of sweet equity is the structural mismatch — management gets cheaper, more levered equity to amplify upside on operational outperformance.'],
      ['Management receives stock options that vest only on a specific revenue target', 'Stock options are a US-style equity-incentive plan, not sweet equity. Sweet equity is a different instrument — purchased shares at a discount, not options on shares.'],
      ['Sweet equity is a synonym for the sponsor\'s rollover equity from a predecessor deal', 'Sponsor rollover and management sweet equity are different things. The former is the sponsor reinvesting from a prior deal; the latter is the management team\'s incentive equity in the current deal.'],
    ],
    'Sweet equity is the European LBO market\'s way of giving management levered upside. Sponsor capital sits in preferred or shareholder loans with a hurdle return; management\'s ordinary equity participates only after the hurdle, which converts a 2.5x sponsor deal into a 5x+ management outcome on the same value creation.'),

  q(4410044, 'Career Skills', CHAPTER, 'Warrants vs convertible notes',
    'A mezzanine lender receives detachable warrants for 3% of the company\'s common equity, struck at the LBO close price. How is this economically different from receiving a convertible note for the same 3%?',
    'Warrants are a right to acquire equity at the strike price, separable from the debt — the loan repays on its own schedule and the warrant survives; a convertible converts the debt itself into equity, extinguishing the loan in the process',
    [
      ['They are economically identical because both deliver 3% of equity', 'The mechanics differ materially. Warrants preserve the debt cash flows and add upside; converting a note replaces the debt with equity and changes the lender\'s cash-flow profile entirely.'],
      ['Convertibles are senior to warrants in the cap structure', 'Convertibility does not change priority — it changes form. A convertible note pre-conversion ranks where the note ranks; a warrant is an equity option ranking with common.'],
      ['Warrants must be exercised at maturity of the underlying debt', 'Detachable warrants typically have their own expiry — often 7–10 years — independent of the debt\'s maturity. That independence is the whole point of "detachable."'],
    ],
    'Detachable warrants are equity options bolted on to debt; they do not consume the loan. Convertible debt extinguishes the loan in exchange for equity. The two deliver different return profiles and different lender outcomes — a warrant gives a yield-plus-upside hybrid; a convert gives an option to swap one instrument for another.'),

  q(4410045, 'Career Skills', CHAPTER, 'Why preferred is not subordinated debt',
    'A junior member of the credit team asks why preferred equity is treated as equity rather than as the deepest layer of debt, given that it pays a fixed dividend. What is the clearest answer?',
    'Preferred has no maturity, no mandatory cash interest in most structures, and no ability to file for default — its dividends are at-the-board\'s-discretion in many forms; it lacks the contractual remedies that define debt',
    [
      ['Preferred is treated as debt under GAAP and as equity only for tax purposes', 'Preferred treatment under GAAP depends on structure — some preferred is liability-classified, but most equity preferred sits in mezzanine equity or permanent equity. The credit-priority distinction is contractual, not driven by GAAP labels.'],
      ['Preferred ranks ahead of common but behind debt because the rating agencies require it', 'Agency methodology reflects priority; it does not create it. The priority is contractual — what preferred holders can do on missed payments (typically nothing material) is the practical distinction.'],
      ['Preferred has the same legal status as subordinated debt in bankruptcy', 'Preferred ranks below all debt in bankruptcy, including subordinated debt. Subordinated debt is still debt with the right to file, accelerate, and sue; preferred has none of those remedies.'],
    ],
    'The line between debt and preferred is the bundle of contractual remedies that comes with debt — maturity, mandatory interest, default rights, the ability to push the borrower into bankruptcy. Preferred lacks these; it is equity that looks like debt only when everything is going well.'),

  q(4410046, 'Career Skills', CHAPTER, 'Putting the full waterfall together',
    'A leveraged borrower has $300M 1L term loan, $150M 2L term loan, $200M senior unsecured notes, $100M subordinated PIK notes, $80M of participating preferred (1x preference), and common equity. The business sells for $750M. How much does the common receive?',
    '$750M − $300M (1L) − $150M (2L) − $200M (senior unsecured) − $100M (sub PIK) − $80M (preferred preference) = $0 of preference remaining; common shares with preferred in the residual ($-80M reserved, so $0 of additional residual). Net: common receives $0',
    [
      ['$120M, computed as enterprise value minus only the first-lien tranche', 'Every debt class is paid before equity, not just the first-lien. The full debt stack ($300M + $150M + $200M + $100M = $750M) exactly absorbs the proceeds before the preferred or common see anything.'],
      ['$80M, equal to the preferred\'s liquidation preference, with common sharing in the remainder', 'Common is residual after preferred preference. In this scenario the debt stack alone consumes $750M; there is nothing for the preferred preference, let alone for the residual that common would share.'],
      ['$300M, treating the equity as a 40% pro-rata claim on enterprise value alongside debt', 'Equity is not pro-rata with debt at any layer. Debt is paid first in full; equity claims arise only on the residual. Pro-rata sharing across debt and equity is the textbook misconception this question is built to expose.'],
    ],
    'The full waterfall: $300M (1L) + $150M (2L) + $200M (senior unsecured) + $100M (sub PIK) = $750M exactly absorbs the sale proceeds. The preferred receives $0 of its $80M preference and common receives $0. A small change in sale price (down to $700M) wipes out a slice of the sub PIK; (up to $850M) gets the preferred whole and starts the common share — that is the sensitivity the cap structure delivers.'),
]
