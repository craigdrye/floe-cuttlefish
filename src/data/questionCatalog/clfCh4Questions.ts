import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// CREDIT / LEVFIN CHAPTER 4 — Covenants, Documentation, and Protection
// ----------------------------------------------------------------------------
// 40 new questions (IDs 4410300–4410339) extending the existing ten Ch4 items
// that live in the broader credit/levfin roadmap. The existing ten cover the
// foundational definitions — what an affirmative covenant is, what financial
// maintenance ratios test, the basics of a credit agreement structure, and so
// on. This file builds the operating surface a real LevFin associate or
// credit analyst needs: the modern cov-lite / cov-loose split, springing
// maintenance triggers on revolvers, negative pledge architecture and how
// J.Crew, PetSmart, Cirque, and Serta blew holes through it, restricted
// payment baskets and equity cures, debt incurrence and "available amount"
// builder baskets, liability management exercises (drop-downs, up-tiers,
// priming transactions), R&W and indemnity structure in acquisition-related
// debt, cross-default and cross-acceleration, and intercreditor agreements
// (1L/2L lien subordination vs payment subordination, ABL/Term Loan ICAs).
//
// US-context throughout: NY-law credit agreements, US sponsor-backed
// leveraged loans, US LBO documentation conventions, and the real US
// case-study LMEs that have reshaped how the market negotiates these
// provisions (J.Crew 2016, PetSmart 2018, Cirque 2020, Serta 2020,
// Boardriders 2020, TriMark 2020, Envision/Centerbridge 2022).
// Voice register matches the IB and VC capstone files — every whyWrong is
// bespoke, every distractor names the specific failure mode, no strawmen.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe CLF Ch4 canonical bank'
const CHAPTER = 'Covenants, Documentation, and Protection'

function q(
  id: number,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][],
  lesson: string,
): Question {
  return makeSimpleQuestion(
    id,
    'Career Skills' as Topic,
    CHAPTER,
    title,
    prompt,
    correct,
    wrong.map(([label, why]) => [label, why, lesson] as [string, string, string]),
    lesson,
    SOURCE,
  )
}

// Difficulty distribution target: 12 at 3 (30%), 20 at 4 (50%), 8 at 5 (20%).
export const CLF_CH4_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Maintenance vs incurrence covenants (6 Qs)
  4410300: 3, // Definition: maintenance vs incurrence
  4410301: 3, // Cov-lite = incurrence only on the TL
  4410302: 4, // Cov-loose mid-ground definition
  4410303: 4, // What a maintenance leverage test actually does each quarter
  4410304: 4, // Why sponsors prefer cov-lite (no quarterly trip risk)
  4410305: 5, // Incurrence test "at the time of" — pro-forma snapshot trap

  // Springing covenants (4 Qs)
  4410306: 3, // Springing leverage test on revolver only
  4410307: 4, // 35% revolver utilization trigger
  4410308: 4, // Springing covenant only protects revolver lenders
  4410309: 5, // Cash-dominant draw to dodge the springing trigger

  // Negative pledge / restricted vs unrestricted subs (5 Qs)
  4410310: 3, // Negative pledge: what it actually prohibits
  4410311: 4, // Restricted vs unrestricted subsidiary mechanics
  4410312: 5, // J.Crew trap-door — IP transfer to unrestricted sub
  4410313: 4, // PetSmart Chewy spin via unrestricted designation
  4410314: 4, // Investment basket as the route to unrestricted sub

  // Restricted payments (5 Qs)
  4410315: 3, // RP definition and who gets paid
  4410316: 4, // Build-up basket vs general RP basket
  4410317: 4, // Dividend to sponsor via available amount
  4410318: 4, // Equity cure mechanics on a maintenance trip
  4410319: 5, // Equity cure abuse limits — 2 of 4 quarters, cap on cures

  // Debt incurrence baskets (5 Qs)
  4410320: 3, // General debt basket vs ratio debt
  4410321: 4, // Ratio debt — incurrence test pro forma
  4410322: 4, // Builder basket — how the available amount grows
  4410323: 4, // MFN protection on incremental term loans
  4410324: 5, // Free-and-clear basket layered with ratio basket

  // Liability management exercises (4 Qs)
  4410325: 4, // Drop-down financing — Cirque / J.Crew pattern
  4410326: 5, // Up-tier exchange — Serta non-pro-rata
  4410327: 4, // Boardriders priming via majority amendment
  4410328: 5, // Sacred rights and why up-tiers slipped through

  // R&W and indemnification (3 Qs)
  4410329: 3, // R&W insurance — what it actually covers
  4410330: 4, // Indemnity basket and cap structure
  4410331: 4, // Fundamental reps vs general reps survival

  // Cross-default and acceleration (4 Qs)
  4410332: 3, // Cross-default vs cross-acceleration
  4410333: 4, // Grace period mechanics on a payment default
  4410334: 4, // Materiality threshold on cross-default
  4410335: 4, // Acceleration mechanics and standstill

  // Intercreditor agreements (4 Qs)
  4410336: 3, // 1L vs 2L lien subordination basics
  4410337: 4, // Payment subordination vs lien subordination
  4410338: 4, // ABL / Term Loan ICA — split collateral pools
  4410339: 5, // Standstill period and 2L enforcement rights
}

export const clfCh4Questions: Question[] = [
  // -------------------------------------------------------------------------
  // MAINTENANCE vs INCURRENCE COVENANTS (4410300–4410305)
  // -------------------------------------------------------------------------
  q(4410300, 'Maintenance vs incurrence covenants',
    'A sponsor-backed borrower is negotiating a $600M first-lien term loan and a $100M revolver. The credit agreement contains both a maximum total leverage ratio tested every quarter and a debt incurrence ratio that must be met before issuing new debt. How should the analyst describe the operative distinction between these two covenant types?',
    'A maintenance covenant is tested at every measurement date regardless of borrower action and can trip on operating deterioration alone; an incurrence covenant is tested only at the moment the borrower takes a specified action (issuing debt, paying a dividend, making an investment) and never trips passively from a bad quarter',
    [
      ['Maintenance covenants apply to revolvers and incurrence covenants apply to term loans, by market convention', 'The split is conceptual, not by instrument. Plenty of revolver-only structures still have maintenance tests, and many term loans have ratio incurrence tests on top of maintenance — the distinction is *when* the test runs, not which tranche carries it.'],
      ['Maintenance covenants set a hard ceiling on leverage; incurrence covenants only set a floor on coverage', 'Both flavors can be written as leverage or coverage tests. Confusing the covenant *type* with the metric *being tested* is the most common analyst trip — the structural point is timing of the test, not whether the ratio is leverage or coverage.'],
      ['Incurrence covenants are stricter than maintenance covenants because they must be satisfied on a pro-forma basis', 'Pro-forma testing on incurrence is a mechanic, not a stringency claim. In practice incurrence covenants are *looser* protection for lenders because they only bite when the borrower acts — and the borrower controls whether to act.'],
    ],
    'Maintenance covenants run on a clock; incurrence covenants run on an event. The credit-quality implication is that a passively deteriorating borrower under a cov-lite (incurrence-only) deal never trips a covenant until they need to do something — by which point the lender has lost the early-warning trigger maintenance tests were designed to deliver.'),

  q(4410301, 'Cov-lite definition',
    'A research note describes a new $1.2B Term Loan B as "cov-lite." A junior analyst on the credit desk asks what that actually means for the term-loan tranche specifically. What is the precise operative meaning of "cov-lite" in the modern US leveraged-loan market?',
    'The term-loan tranche carries no financial maintenance covenant — only incurrence-based ratio tests that bite when the borrower issues debt, pays a restricted payment, or makes an investment; the revolver may still carry a springing maintenance covenant that does not flow through to the term loan',
    [
      ['The term loan carries weaker maintenance covenants than a traditional structure — e.g., 7.5x leverage versus 6.0x', '"Lite" does not mean "looser maintenance." It means *no* maintenance. A looser-but-still-present maintenance test is called cov-loose, which is a different category.'],
      ['The credit agreement has fewer affirmative and negative covenants overall, making documentation shorter', 'Cov-lite refers specifically to the absence of financial maintenance covenants on the term loan, not to the broader covenant package. The negative covenants (debt, liens, RPs, investments) are still extensively documented — often in 100+ pages.'],
      ['Lenders waive their right to declare default until two consecutive quarters of breach', 'No such "two-quarter waiver" is standard in cov-lite. The structural feature is that there is nothing to breach at the maintenance level on the TL in the first place — not a delayed acceleration mechanic.'],
    ],
    'Cov-lite is precisely defined: the term loan has zero financial maintenance covenants. The revolver typically still has a springing covenant, but that covenant does not flow through to the TLB lenders. This is why TLB holders in a stressed cov-lite credit often watch the company deteriorate for many quarters with no lender lever to pull until the borrower needs to incur new debt or pay an RP.'),

  q(4410302, 'Cov-loose structures',
    'A market commentator distinguishes between "cov-lite" and "cov-loose" deals. The borrower in question has a 7.25x maximum total leverage maintenance covenant on its term loan, tested quarterly, with the closing-date leverage at 6.0x. Which classification fits and why?',
    'Cov-loose: a maintenance covenant exists on the term loan but with a cushion so wide (here ~21% relative to opening leverage) that operational deterioration would have to be severe before it trips — preserving the form of lender protection while removing most of its practical bite',
    [
      ['Cov-lite, because the cushion is wide enough that lenders are effectively unprotected', 'Cov-lite is a structural classification (no maintenance test at all), not a "how wide is the cushion" judgment. As long as a quarterly maintenance test exists, the deal is not cov-lite no matter how generous the level is.'],
      ['Cov-heavy, because the deal retains a maintenance covenant unlike modern sponsor-backed loans', 'Cov-heavy / traditional implies a tight cushion (e.g., 10–15% headroom) with step-downs over time. A 21% opening cushion with no step-down is the canonical cov-loose pattern, not traditional.'],
      ['Cov-lite with a courtesy financial covenant, because the test is too loose to be operative', 'The market does not classify deals by whether lenders subjectively feel protected. The presence of a real maintenance test — even a generous one — is the structural divider between lite and loose.'],
    ],
    'The three-way taxonomy is sharper than it first appears: cov-lite (no TL maintenance), cov-loose (TL maintenance exists with a wide cushion and often no step-down), traditional (tight cushion, periodic step-downs, equity-cure caps). The structural question is whether a maintenance covenant is on the page; the *operational* question is how much room it gives the borrower.'),

  q(4410303, 'What a maintenance test does each quarter',
    'A traditional credit agreement requires the borrower to maintain Total Net Leverage ≤ 5.50x, tested as of the last day of each fiscal quarter. The borrower\'s Q3 covenant compliance certificate shows TNL of 5.65x. Assuming no equity cure, what is the immediate consequence under a standard credit agreement?',
    'The borrower is in breach of a financial covenant, which is typically an immediate event of default (sometimes after a short cure period of 5–30 days for delivery defects but not for the underlying ratio breach itself) — entitling the required lenders to accelerate the loans and exercise remedies',
    [
      ['The borrower has a 90-day grace period before the breach matures into an event of default', '90 days is not the standard grace for a financial covenant breach. Maintenance covenant breaches typically mature into EOD immediately or with very short cure windows. Cross-default to other debt may have a 30-day grace, but the underlying maintenance breach itself does not.'],
      ['The lenders may charge default interest but cannot accelerate without a separate vote at the next administrative agent meeting', 'Default interest accrual is automatic in many agreements, but acceleration on a covenant EOD requires only the required lenders\' direction (usually >50% of the principal) — not a separate scheduled meeting.'],
      ['The breach is cured automatically at the next quarter-end if leverage falls back below 5.50x', 'Maintenance breaches do not auto-cure on the next test date. Until waived or cured (typically by an equity cure or amendment), the EOD persists. This is the entire point of maintenance protection vs incurrence.'],
    ],
    'A maintenance breach is a hard EOD trigger as of the measurement date. The borrower\'s only outs are (a) negotiate a waiver/amendment with lenders, (b) deploy an equity cure if the agreement permits one, or (c) refinance. This is also why sponsors hate maintenance covenants and pay (through pricing or structure) to avoid them.'),

  q(4410304, 'Sponsor preference for cov-lite',
    'A sponsor on a $1.5B LBO is willing to pay 25–50 bps higher pricing in exchange for a cov-lite term loan rather than a traditional structure with a 6.0x maintenance covenant. The CFO asks the credit advisor to explain why this trade is worth it from the sponsor\'s perspective. What is the strongest single argument?',
    'A maintenance covenant gives lenders an early lever to renegotiate the deal at the moment of operational weakness — precisely when the sponsor has least leverage; the 25–50 bps is cheap insurance against being forced into a costly amendment or equity injection during a bad quarter that has nothing to do with the long-term thesis',
    [
      ['Cov-lite loans have lower interest rates than traditional loans, so the sponsor saves money on debt service', 'This is the opposite of the actual price relationship — sponsors pay *up* for cov-lite, not down. The price differential exists precisely because lenders demand compensation for giving up the maintenance test.'],
      ['Cov-lite documents are shorter, which reduces legal fees on the closing', 'Cov-lite agreements are not materially shorter — the negative covenant package, baskets, and definitions are essentially identical. The closing fees difference is rounding error on a $1.5B deal.'],
      ['Cov-lite loans permit higher leverage at close, allowing the sponsor to put less equity into the deal', 'Closing-date leverage is set by the financing market and the LBO model, not by the maintenance covenant package. A cov-lite structure does not directly raise closing leverage — though it may, in a hot market, *correlate* with higher leverage.'],
    ],
    'The sponsor calculus on cov-lite is about avoiding amendment cycles in stressed quarters, not about base-rate savings. A 6.0x maintenance covenant with a 5.5x opening leverage gives lenders a renegotiation trigger after one weak quarter — and that trigger is worth far more to lenders than 25–50 bps of running spread, which is why the trade-off pencils out.'),

  q(4410305, 'Pro-forma snapshot on incurrence tests',
    'A borrower with a cov-lite TLB wants to issue $200M of incremental term loans under a ratio-based incurrence basket that requires Total Net Leverage ≤ 6.0x "at the time of and after giving pro-forma effect to" the incurrence. Current LTM EBITDA is $200M and existing net debt is $1.15B (5.75x). The borrower argues the new debt is permitted because, with $200M of "run-rate cost savings" added back, pro-forma EBITDA is $260M, making pro-forma leverage $1.35B / $260M = 5.19x. What is the correct analyst response?',
    'The structural answer depends entirely on how "EBITDA" is defined in the credit agreement — modern sponsor docs typically permit run-rate savings add-backs subject to caps (often 25% of EBITDA, sometimes uncapped) and time horizons (often 24 months); the lender check is to read the EBITDA definition word-for-word, not to push back on the concept',
    [
      ['The add-back is impermissible because GAAP EBITDA does not allow forward-looking cost savings, only historical adjustments', 'Credit-agreement EBITDA is a contractual definition, not GAAP EBITDA. It almost always permits adjustments that GAAP would never allow — the question is exactly what the document permits, not what GAAP permits.'],
      ['The incurrence test should be calculated using EBITDA before any synergies because incurrence is a backward-looking test', 'Incurrence tests in modern docs are explicitly forward-looking ("pro-forma effect"). Refusing to honor the add-back framework because incurrence "should" be backward-looking ignores how these agreements actually read.'],
      ['The 6.0x limit is met because pro-forma leverage is 5.19x, so the analyst should approve regardless of how the add-back was calculated', 'Mechanical acceptance without checking the EBITDA definition is the error LevFin analysts get fired for. The 5.19x is only valid if the add-back conforms to the agreement\'s caps, time limits, and certification mechanics — which the analyst must verify.'],
    ],
    'Incurrence tests live and die by the EBITDA definition in Article I of the credit agreement. The single biggest lender protection erosion of the past decade has been the expansion of permitted EBITDA add-backs — synergies, run-rate savings, pro-forma acquisitions, unusual items — often without caps. A LevFin analyst\'s job on an incurrence test is to read those definitions, not just plug ratios.'),

  // -------------------------------------------------------------------------
  // SPRINGING COVENANTS (4410306–4410309)
  // -------------------------------------------------------------------------
  q(4410306, 'Springing maintenance covenant basics',
    'A cov-lite credit agreement has no maintenance covenant on the term loan but contains a "springing" first-lien net leverage maintenance test set at 7.0x. The test only applies under specified conditions. When does the test "spring" in the standard sponsor-backed structure?',
    'When revolver utilization (drawn revolver plus undrawn letters of credit, often net of a small unrestricted cash cushion) exceeds a threshold of total revolver commitments — typically 35–40% — as of the test date',
    [
      ['When EBITDA drops more than 20% from the closing-date EBITDA, signaling deterioration', 'Springing triggers are tied to revolver draw, not to EBITDA movement. The test is designed to protect revolver lenders when they have actual exposure outstanding — not to track operating performance generically.'],
      ['When the borrower issues incremental debt or pays a dividend, the maintenance test springs alongside the incurrence test', 'Action-based incurrence tests are a separate mechanism. Springing maintenance is specifically about revolver utilization — the structural logic is "if revolver lenders have money out, they get a maintenance test."'],
      ['Quarterly automatically, but lenders only enforce it when revolver utilization exceeds 35%', 'Springing tests are not "always tested but only enforced when triggered." They are not tested at all when the trigger condition is unmet. If the revolver is not drawn beyond the threshold on the test date, the test simply does not run.'],
    ],
    'The springing covenant solves a specific structural problem: revolver lenders need maintenance protection because they have committed liquidity, but term-loan lenders waive that protection in exchange for pricing. The trigger threshold (usually 35% of revolver commitments) is the point at which revolver lenders have enough drawn exposure that they demand the test be active.'),

  q(4410307, '35% revolver utilization trigger',
    'A borrower has a $150M revolver. The credit agreement\'s springing covenant tests First-Lien Net Leverage ≤ 7.0x only "as of any fiscal quarter end on which Revolver Utilization exceeds 35% of Revolving Commitments." On Q3 quarter-end, the borrower has $40M drawn on the revolver and $15M of letters of credit outstanding. What is the springing test status?',
    'The test springs: utilization is $55M / $150M = 36.7%, which exceeds the 35% threshold, so the 7.0x first-lien net leverage maintenance test must be satisfied as of Q3 quarter-end',
    [
      ['The test does not spring because only cash drawings count toward utilization, not letters of credit', 'Standard sponsor-backed docs include LCs in revolver utilization because they consume the same commitment capacity as cash draws. The borrower cannot escape the trigger by issuing LCs instead of borrowing cash — the document is written precisely to prevent that.'],
      ['The test springs but only on the drawn portion of $40M, so the maintenance ratio applies to that exposure only', 'The maintenance test is a leverage ratio at the borrower level — it covers all first-lien debt, not just the drawn revolver. The trigger is per-deal, not per-dollar.'],
      ['The test does not spring because the borrower can repay $5M before quarter-end to fall below 35%', 'Period-end management to dodge the trigger is exactly the behavior modern docs try to prevent through anti-cash-hoarding language and bring-down certifications. Strategically repaying on December 30 and redrawing on January 2 is a documented gameable hole, and many recent agreements close it.'],
    ],
    'The 35% trigger is one of the few hard numbers in modern leveraged-finance documentation that has stayed durable across cycles. The lender protection question is always: what counts as "utilization" (LCs in or out? swingline?), what cushion against the threshold exists (sometimes 35.0%, sometimes 35.1%), and how is borrower behavior near the trigger constrained.'),

  q(4410308, 'Who benefits from the springing covenant',
    'A junior analyst notes that a cov-lite deal has a springing first-lien net leverage maintenance covenant. They ask whether the term-loan B holders can declare a default if the springing covenant is breached at quarter-end. What is the correct structural answer?',
    'No — the springing covenant typically benefits only the revolver lenders, and a breach is an event of default solely under the revolving facility; the TLB lenders cannot accelerate on it and have no direct lever, though cross-default provisions may eventually pull them in if the revolver matures into a payment default',
    [
      ['Yes — once a maintenance covenant trips, it is an event of default under the entire credit agreement and all lenders may accelerate', 'This was historically true when there was a single class of lenders. Modern cov-lite/springing structures explicitly carve the maintenance covenant so that only the revolving lenders have voting rights to declare an EOD on its breach — the TLB is intentionally excluded.'],
      ['Yes — the TLB holders can accelerate but only after a 30-day grace period during which the revolver lenders may waive the breach', 'There is no such "first-look" mechanic for the revolver. The springing covenant simply isn\'t a TLB-class covenant in the first place — there is no 30-day deferral, there is no TLB right to accelerate.'],
      ['No — but the TLB holders gain the right to put the loans back to the borrower at par upon any maintenance breach', 'There is no standard put-right mechanism for TLB holders on a revolver-only covenant breach. The TLB simply has to wait for cross-default or cross-acceleration to mature, which can take quarters.'],
    ],
    'Springing covenants are class-specific lender protection: the revolver class paid for it (by being the only ones with committed liquidity exposure) and they are the only ones who can enforce it. This is also why distressed TLB holders in a stressed cov-lite credit have historically been so passive — they often have no contractual lever to pull until the revolver lenders act, or until the borrower needs an amendment.'),

  q(4410309, 'Dodging the springing trigger',
    'A levered borrower with a 35%-trigger springing covenant is approaching the threshold on a $200M revolver as Q2 quarter-end nears. The treasurer arranges to fully draw $80M two weeks before quarter-end, hold the cash on the balance sheet, and repay $20M on June 30 so that utilization on the test date is $60M / $200M = 30%. The auditor flags the pattern. Which structural lender protection most directly attacks this behavior?',
    'Modern agreements increasingly include "anti-cash-hoarding" or "no period-end cleanup" provisions that count revolver loans as outstanding for utilization purposes if they were outstanding within a specified window (e.g., five business days) before the test date, plus a requirement to certify the absence of manipulation in the compliance certificate',
    [
      ['The cross-default provision: once the revolver hits 35% mid-quarter, it is automatically deemed to have tripped the springing test for that quarter', 'Cross-default protects against actual defaults on other debt, not against intra-quarter revolver utilization patterns. There is no "deemed trip" mechanic in standard docs that retroactively re-tests on an intra-quarter peak.'],
      ['The administrative agent\'s discretion to demand the test be run at any month-end if utilization spikes', 'Admin agents do not have unilateral discretion to redefine the test date. Test dates are contractual; the admin agent can administer the test but cannot move when it runs.'],
      ['The MAC (material adverse change) provision: drawing the revolver before quarter-end is a MAC because it shows liquidity stress', 'MAC clauses are notoriously difficult to invoke and are almost never used in syndicated credit facilities. A borrower drawing its revolver is contractually permitted and is not a MAC by any reasonable reading.'],
    ],
    'Period-end cleanup of the revolver to dodge springing triggers is a real and recurring borrower behavior. The lender protections that work are documentation-based: (1) measure utilization as the maximum over a trailing window, not just on the test date; (2) require an officer certificate that no transactions were entered into with the principal purpose of dodging the springing test; (3) close definitions of "cash" so that hoarded cash from a draw does not reduce net leverage.'),

  // -------------------------------------------------------------------------
  // NEGATIVE PLEDGE / RESTRICTED vs UNRESTRICTED SUBS (4410310–4410314)
  // -------------------------------------------------------------------------
  q(4410310, 'What a negative pledge actually prohibits',
    'A credit agreement\'s negative pledge clause states that "neither the Borrower nor any Restricted Subsidiary shall create, incur, assume or suffer to exist any Lien upon any of its property, whether now owned or hereafter acquired." A senior lender asks what this protects against in plain terms.',
    'It prevents the borrower group from pledging any of its assets to a third-party lender — including future lenders — as collateral, thereby preserving the existing lenders\' claim on the unencumbered asset pool; it does not stop asset sales or transfers, only the granting of new liens',
    [
      ['It prevents the borrower from incurring any new debt, secured or unsecured, while the loan is outstanding', 'Negative pledges target *liens*, not debt per se. Unsecured debt can be permitted under a separate debt incurrence basket without violating the negative pledge. Conflating the two is a classic analyst error.'],
      ['It prevents the borrower from selling assets without lender consent', 'Asset sales are policed by a separate covenant (asset sale covenant / mandatory prepayment from asset sale proceeds). The negative pledge says nothing about selling assets — it only restricts pledging them to a new secured creditor.'],
      ['It prevents the borrower from making distributions to equity holders while the lien is in effect', 'Distributions to equity are policed by the restricted payments covenant. The negative pledge is exclusively about granting third-party liens on the company\'s property.'],
    ],
    'The negative pledge is a narrow, specific protection: no new third-party liens on the borrower-group\'s assets. Its strength depends on (a) the breadth of "Restricted Subsidiary" — i.e., who is bound — and (b) the permitted liens list, which usually contains dozens of carve-outs. The famous case studies of negative pledge failures (J.Crew, PetSmart) all turned on getting assets *out of* the restricted group, not on directly piercing the negative pledge.'),

  q(4410311, 'Restricted vs unrestricted subsidiary',
    'In a sponsor-backed credit agreement, the borrower has the right to "designate" subsidiaries as Restricted or Unrestricted. Why does this designation matter, and what changes structurally when a subsidiary is designated Unrestricted?',
    'An Unrestricted Subsidiary is outside the covenant perimeter — it is not bound by the negative pledge, debt incurrence, or restricted payments covenants and its EBITDA and debt are typically excluded from the credit-agreement ratios; the borrower can transfer assets to it (subject to the investment basket) and let it issue its own debt secured by those assets, none of which counts as a covenant breach',
    [
      ['Unrestricted Subsidiaries are subject to the same covenants but are excluded from the borrower\'s consolidated reporting', 'Unrestricted Subs are *outside* the covenant package entirely — that is the whole point of the designation. They may be excluded from reporting, but the substantive change is the covenant escape, not the reporting treatment.'],
      ['Unrestricted Subsidiaries can incur debt up to a higher cap than Restricted Subsidiaries but are otherwise subject to the same negative pledge', 'There is no higher cap inside the covenant perimeter for Unrestricted Subs because they are outside the perimeter. The negative pledge does not bind them at all.'],
      ['Unrestricted Subsidiaries must contribute their EBITDA to the borrower\'s leverage calculation but their debt does not count', 'The standard mechanic is the opposite of helpful for lenders: in many agreements, Unrestricted Sub EBITDA *is* excluded from credit-agreement EBITDA but the sub\'s debt is also excluded — and the lender gets neither benefit. Asymmetric inclusion in the borrower\'s favor is not the standard rule.'],
    ],
    'The Restricted/Unrestricted toggle is the most powerful structural lever in modern leveraged credit documentation. It is the mechanism that made every famous LME of the past decade possible. When an analyst reads a credit agreement, the first question is always: how broad is the investment basket that can fund an Unrestricted Sub designation, and which assets can be transferred there?'),

  q(4410312, 'J.Crew trap-door',
    'In 2016, J.Crew transferred a portion of its IP (specifically, the J.Crew brand) to an Unrestricted Subsidiary, which then licensed the IP back to J.Crew and used it as collateral for new debt. Existing first-lien term loan holders objected but ultimately lost in court. Which feature of the J.Crew credit agreement enabled the maneuver?',
    'The credit agreement permitted Investments in Unrestricted Subsidiaries via a basket that included an "available amount" or "investments basket" sized large enough to capture the value of the transferred IP, and the negative pledge bound only Restricted Subsidiaries — so once the IP was in the Unrestricted Sub, it was outside the lien perimeter and could be pledged to new lenders',
    [
      ['J.Crew used a fraudulent conveyance to move the IP without lender consent, but the court ruled the transfer was protected by the business judgment rule', 'The maneuver was contractually permitted — it was not a fraudulent conveyance. The whole shock of J.Crew was that the credit agreement *as written* allowed it, which is why it triggered a documentation arms race rather than a litigation arms race.'],
      ['The credit agreement\'s negative pledge had an exception for intellectual property that allowed J.Crew to pledge the IP directly to new lenders', 'There was no IP-specific negative pledge carve-out. The IP escaped through being transferred *out of the restricted group*, not through an exception to the negative pledge itself. The negative pledge held — but only over the property of Restricted Subs.'],
      ['The credit agreement gave J.Crew the unilateral right to release the lien on any asset upon delivering a fairness opinion', 'There was no fairness-opinion lien-release mechanic in the J.Crew docs. The path through was the investment basket plus the unrestricted designation, not a release mechanism inside the lien package.'],
    ],
    'J.Crew is the case study every modern LevFin analyst reads. The lesson: lender protection is only as strong as the weakest combination of the investment basket, the restricted/unrestricted toggle, and the negative pledge perimeter. After J.Crew, sponsor docs began including (and lenders began demanding) "J.Crew blockers" — explicit prohibitions on transferring material IP to Unrestricted Subsidiaries and on Unrestricted Subs pledging assets transferred from the borrower group.'),

  q(4410313, 'PetSmart Chewy spin',
    'In 2018, PetSmart designated its newly-acquired subsidiary Chewy.com (or, in restructuring discussions, a portion of its equity in Chewy) as an Unrestricted Subsidiary and transferred or distributed a substantial equity interest in Chewy outside the credit-agreement perimeter. First-lien lenders objected. What is the cleanest description of the structural mechanic PetSmart used?',
    'The credit agreement permitted designation of subsidiaries as Unrestricted subject to investment-basket capacity and a leverage test; PetSmart used a combination of the investment basket and an asset-sale/dividend mechanism to move Chewy equity outside the lien perimeter so that the equity could be used to raise new financing without being subject to existing lenders\' liens',
    [
      ['PetSmart was permitted to sell Chewy directly to third-party investors at fair value because the asset-sale covenant only restricted sales above a $500M threshold', 'The structural mechanic was about moving Chewy *out of the restricted perimeter*, not about a permitted third-party sale within the perimeter. An ordinary asset sale would have triggered mandatory prepayment of the term loans, defeating the purpose.'],
      ['PetSmart pledged Chewy directly to new junior lenders under a permitted liens exception for "after-acquired property"', 'There is no standard after-acquired property carve-out from the negative pledge for transformative acquisitions — and pledging Chewy directly while it was a Restricted Sub would have violated the negative pledge. The transfer of Chewy out of the perimeter was the precondition.'],
      ['PetSmart converted Chewy from a wholly-owned subsidiary to a joint venture, which exempted it from the negative pledge under a JV exception', 'There was no JV conversion. The mechanic was Restricted/Unrestricted designation, not a structural recharacterization. Most JV exceptions in negative pledges require minority ownership thresholds that PetSmart\'s Chewy stake would not have met anyway.'],
    ],
    'PetSmart/Chewy is the second canonical case in the negative-pledge erosion story. Where J.Crew was about brand IP, PetSmart was about a high-growth subsidiary. The structural lesson is identical: anywhere the credit agreement permits Investments in Unrestricted Subsidiaries that exceeds the value of a valuable asset, that asset is at risk of being moved outside the lien perimeter. Modern lender protections include caps on transfers to Unrestricted Subs of "Material IP," equity in subsidiaries above a value threshold, and specific named assets.'),

  q(4410314, 'Investment basket as the route',
    'A credit analyst is stress-testing a new sponsor credit agreement for "J.Crew risk." The investment basket permits investments in Unrestricted Subsidiaries up to the greater of $500M and 50% of LTM EBITDA, plus an unlimited amount subject to a 5.0x first-lien net leverage incurrence test. Current FLNL is 4.7x. Which single line in the document is the lender most at risk from?',
    'The unlimited basket subject to the 5.0x FLNL test — because at 4.7x current leverage, the borrower has unlimited investment capacity right now and could transfer any amount of assets to an Unrestricted Sub (subject only to the ratio test holding pro-forma), making the dollar basket essentially irrelevant',
    [
      ['The $500M / 50% EBITDA hard-dollar basket, because it is uncapped at large EBITDA levels', 'A $500M hard-dollar basket is the *less dangerous* of the two — it is capped at a calculable dollar amount. The ratio-based unlimited basket is the open door, because it scales with no upper bound as long as the leverage test holds.'],
      ['The negative pledge — because if it has an exception for "investments permitted under this Agreement," it is automatically pierced by any investment basket', 'Negative pledges with investment basket carve-outs are a real concern but secondary. The first-order risk is the size of the investment basket itself — the negative pledge interaction matters only if the basket is big enough to move meaningful assets.'],
      ['The asset-sale covenant, because transfers to an Unrestricted Sub are technically asset sales requiring mandatory prepayment', 'Transfers to Unrestricted Subs are typically defined as Investments, not asset sales, under modern credit agreements — precisely so they do not trigger the asset-sale prepayment waterfall. The borrower\'s playbook depends on this characterization.'],
    ],
    'The single biggest lender-protection question on any modern credit agreement is: how much can the borrower invest in Unrestricted Subsidiaries, and is that capacity capped by a hard dollar number, a ratio, or both? Unlimited ratio-based capacity at moderate current leverage is the open door to a J.Crew-style transfer. Reading these baskets line-by-line is the work — not summarizing the covenant package as "tight" or "loose."'),

  // -------------------------------------------------------------------------
  // RESTRICTED PAYMENTS (4410315–4410319)
  // -------------------------------------------------------------------------
  q(4410315, 'What a restricted payment is',
    'A credit analyst is asked to list what counts as a "Restricted Payment" under a standard sponsor-backed credit agreement. Which definition is correct?',
    'Restricted Payments typically include dividends and distributions on equity, repurchases or redemptions of equity, payments on subordinated debt (prepayments, redemptions), and certain payments to sponsors (management fees in excess of permitted amounts) — i.e., outflows of value from the borrower group to equity holders or to junior creditors',
    [
      ['Restricted Payments include all payments to non-Restricted Subsidiaries, including ordinary-course inter-company loans', 'Inter-company transfers are governed by the Investments covenant, not the RP covenant. RPs are specifically value leakage to equity holders or junior creditors — not movements within the corporate family that stay inside the perimeter.'],
      ['Restricted Payments include any payment over $1M without lender consent, regardless of recipient', 'There is no general size-based RP definition — the RP covenant is recipient-defined (equity, subordinated debt holders) and uses baskets and ratio tests for permission, not a one-size cap.'],
      ['Restricted Payments include interest payments on the term loan itself because they are payments out of the borrower group', 'Term loan debt service is not an RP — RPs are specifically outflows to junior capital. Senior debt service is the *purpose* of the covenant package; restricting it would be self-defeating.'],
    ],
    'The RP covenant is the lender\'s primary protection against value leakage to equity holders. It covers dividends, buybacks, subordinated debt prepayments, and excess management fees. The mechanics are almost always baskets-based (general basket, builder basket, investment-related baskets) plus ratio tests. The "available amount" or "builder basket" is where most of the analytical work lives.'),

  q(4410316, 'Build-up vs general basket',
    'A sponsor-backed credit agreement contains both a "general RP basket" of the greater of $100M and 25% of EBITDA, and a "build-up basket" (also called "available amount") that starts at zero at closing and grows by 50% of cumulative consolidated net income since closing plus certain other components. What is the structural difference and why do both exist?',
    'The general basket is a fixed cushion the sponsor can use immediately regardless of performance; the builder basket is a performance-linked basket that grows with the borrower\'s retained earnings — so it rewards real value creation and stays small if the company underperforms; together they let the sponsor extract value both day-one and over time as the company earns it',
    [
      ['The general basket is unsecured and the build-up basket is secured by collateral, reflecting different risk profiles', 'RP baskets are not secured or unsecured — they are permissions to make payments, not debt instruments. The distinction is about how the basket capacity is sized and replenished, not collateralization.'],
      ['The general basket can only be used for dividends, and the build-up basket can only be used for share repurchases', 'Both baskets can typically be used for any RP type. The structural distinction is sizing methodology (fixed dollar vs accreting based on retained earnings), not use case.'],
      ['The general basket resets each year; the build-up basket is one-time', 'The general basket does not annually reset in standard sponsor docs — it is a cumulative capacity. The build-up basket accretes over time. Neither is annual or one-time in the way described.'],
    ],
    'The two-basket structure (general + builder) is the modern norm. The lender protection question for the general basket is its absolute size relative to the company\'s equity. The lender protection question for the builder basket is which items count toward the build-up (just 50% of net income, or also asset sale proceeds, equity issuance proceeds, returns of capital from investments, etc.) — because every additional component is another inflow that grows the dividend capacity over time.'),

  q(4410317, 'Sponsor dividend via available amount',
    'A portfolio company two years after LBO has cumulative consolidated net income of $250M. The builder basket accretes at 50% of CNI. The general RP basket is the greater of $100M and 25% of LTM EBITDA ($60M). The sponsor wants to pay itself a $200M dividend. The credit agreement requires only that no default exists and (for the builder basket) that pro-forma First-Lien Leverage be ≤ 4.5x at the time of the RP. FLNL is currently 4.2x. What is the analyst\'s assessment of capacity?',
    'Combined capacity is $100M (general basket, greater of $100M and 25% EBITDA = $100M) + $125M (50% × $250M builder basket) = $225M, which covers the $200M dividend; the FLNL incurrence test at 4.2x current leverage is also met, so the sponsor dividend is permitted under the document',
    [
      ['The dividend is impermissible because the general basket alone is only $100M, which is less than $200M', 'RP baskets are typically additive — the sponsor can stack the general basket and the builder basket for a single RP. Treating each basket as a standalone limit is a common analyst error.'],
      ['The dividend is impermissible because builder basket usage requires FLNL ≤ 4.0x, which the borrower does not meet at 4.2x', 'Builder basket leverage gates in sponsor docs are often set at 0.25–0.5x inside the maintenance covenant, but the specific number is contractual. Assuming a 4.0x test without reading the agreement is the error. The question states the gate is 4.5x.'],
      ['The dividend is permissible without using any basket because dividends to the sponsor are excluded from the RP definition when the sponsor is the controlling shareholder', 'There is no controlling-shareholder exclusion from RPs. Sponsor dividends are the canonical RP — they are precisely what the covenant is designed to limit. Believing otherwise is the most dangerous misreading.'],
    ],
    'A $200M sponsor dividend two years into an LBO is exactly the value-extraction event the RP covenant is structured to police. The analytical move is to stack each available basket, check each gating condition (no default, ratio test, certificate delivery), and verify that the EBITDA inputs to the ratio test are calculated under the credit-agreement definition with all permitted add-backs. The arithmetic above shows how a sponsor can pull $200M out of a 4.2x-levered company without ever asking for lender consent.'),

  q(4410318, 'Equity cure mechanics',
    'A traditional credit agreement with a 5.50x maximum total leverage maintenance covenant tested at quarter-end has an equity cure provision. At Q3, leverage is 5.75x (a breach). The sponsor wants to "cure" by contributing $25M of equity. The agreement permits equity cures and specifies that the cure amount is added to EBITDA for purposes of the covenant calculation. LTM EBITDA is $100M and total debt is $575M. After applying the cure, what is the calculated covenant ratio?',
    'Adding $25M to LTM EBITDA brings it to $125M; the leverage ratio becomes $575M / $125M = 4.60x, which is below 5.50x — the covenant is cured for the Q3 test date and the EOD is deemed waived',
    [
      ['The cure reduces total debt by $25M (because the equity contribution pays down debt), bringing leverage to $550M / $100M = 5.50x — exactly at the limit', 'Most equity cure provisions add the contribution to EBITDA, not to debt repayment. Some agreements require the cure to be used for debt repayment as well, but the covenant calculation typically uses the EBITDA-additive convention, which is more sponsor-favorable.'],
      ['The cure adds $25M to EBITDA but only for future quarters, not retroactively to Q3, so the Q3 breach remains', 'The whole point of an equity cure is retroactive — it cures the breach as of the test date on which it was made. A prospective-only cure would not function as a cure at all.'],
      ['The cure reduces leverage by changing the denominator from LTM EBITDA to LTM EBITDA + projected cost savings of $25M', 'Equity cures are based on actual cash contributions, not projected savings. The $25M is real equity dollars contributed by the sponsor — not a synergy add-back.'],
    ],
    'Equity cures are the sponsor\'s release valve when maintenance covenants trip. The structural protections lenders demand are: (a) caps on how many quarters out of how many the cure can be used (typically 2 of 4 or 5 of total deal life), (b) minimum cure amounts (so a sponsor cannot cure with $1), (c) maximum cure amounts (so the cure does not over-cure into a synthetic future cushion), and (d) sometimes a requirement that the cure proceeds be used to repay debt rather than just credited to EBITDA.'),

  q(4410319, 'Equity cure abuse limits',
    'A sponsor-backed agreement permits up to four equity cures over the life of the loan, with a cap of "two equity cures in any consecutive four-fiscal-quarter period." In Q1 and Q2, the sponsor used cures of $20M each to avoid breaches. In Q3, leverage trips again. The sponsor wants to cure again. Is the cure permitted, and what is the structural logic of the "2 of 4" limit?',
    'The Q3 cure is NOT permitted: with cures already used in Q1 and Q2, a Q3 cure would be the third cure inside the rolling four-quarter window (Q1–Q4), which exceeds the 2-of-4 cap; the structural purpose of the rolling cap is precisely to prevent serial cures that mask sustained underperformance, and the cap binds even though lifetime cure capacity remains',
    [
      ['The Q3 cure is permitted because the sponsor still has two unused cures within the four total permitted over the life of the loan', 'The lifetime cap and the rolling-window cap operate independently — both must be satisfied. Treating the lifetime cap as the only constraint ignores the rolling limit, which is the more restrictive of the two when cures cluster.'],
      ['The Q3 cure is permitted but requires lender consent because it exceeds the rolling limit', 'The rolling limit is a hard contractual cap, not a consent gate. Exceeding it means the cure cannot be used to deem the covenant satisfied — and the EOD stands unless lenders waive separately.'],
      ['The Q3 cure is not permitted because all four lifetime cures must be used in consecutive quarters or not at all', 'There is no consecutive-use requirement on lifetime cures. The sponsor can cure in any quarter as long as the rolling-window and lifetime caps are both respected.'],
    ],
    'The 2-of-4 rolling limit on equity cures is the lender\'s structural answer to the "serial curer" — a sponsor who cures every quarter to keep a fundamentally underperforming company technically compliant. Once the rolling cap is hit, lenders get a real default trigger that cannot be papered over with another wire. Reading these limits carefully — and modeling them out across stress scenarios — is core LevFin analyst work on any deal with equity cures.'),

  // -------------------------------------------------------------------------
  // DEBT INCURRENCE BASKETS (4410320–4410324)
  // -------------------------------------------------------------------------
  q(4410320, 'General debt basket vs ratio debt',
    'A credit agreement permits the borrower to incur additional debt under (a) a "general debt basket" of the greater of $200M and 50% of LTM EBITDA, and (b) "ratio debt" subject to satisfying a 6.0x total leverage incurrence test on a pro-forma basis. What is the structural difference between these two paths and why does sponsor-backed financing typically include both?',
    'The general basket is available regardless of leverage — it gives the borrower fixed-dollar flexibility for tuck-in acquisitions or modest debt needs even when leverage is elevated; ratio debt is uncapped in dollar terms but only available when the borrower meets a leverage test, so it scales with the company\'s capacity to support more debt; together they let the borrower add debt both opportunistically and when ratios allow large transactions',
    [
      ['The general basket can only be used for working-capital purposes; the ratio basket can be used for any purpose', 'Standard general baskets do not have use-of-proceeds restrictions tied to working capital. Use restrictions, when they exist, are typically in a separate purpose-limited basket (e.g., "permitted acquisitions basket").'],
      ['The general basket is junior to the existing loans; the ratio basket can be issued pari passu', 'Seniority is set by the lien and intercreditor mechanics, not by which basket the debt comes from. Both baskets can typically be used to incur pari debt, junior debt, or unsecured debt depending on the specific basket\'s terms.'],
      ['The general basket can only be drawn at closing; the ratio basket is available throughout the life of the loan', 'Both baskets are typically available throughout the life of the loan. There is no closing-date-only restriction on standard general baskets.'],
    ],
    'The two-track debt incurrence structure (fixed dollar + ratio) is the modern default. The lender protection question for the general basket is its absolute size — too large relative to the original deal size and it becomes a back-door way to materially re-lever. The lender protection question for ratio debt is the ratio level (typically the same as the closing-date leverage, sometimes a touch lower) and whether the test is "no worse than at closing" or a fixed absolute number.'),

  q(4410321, 'Ratio debt incurrence pro-forma',
    'A borrower has $1.0B of total debt and $200M of LTM EBITDA (5.0x). The credit agreement permits ratio debt subject to a 5.5x total leverage incurrence test on a pro-forma basis. The borrower wants to issue $200M of new term loans to fund a $250M acquisition that contributes $50M of LTM EBITDA. What is the pro-forma calculation, and is the ratio debt incurrence permitted?',
    'Pro-forma debt is $1.0B + $200M = $1.2B; pro-forma EBITDA is $200M + $50M = $250M; pro-forma leverage is $1.2B / $250M = 4.80x, which is below 5.50x — the incurrence is permitted under the ratio basket',
    [
      ['Pro-forma leverage uses only the existing EBITDA ($200M) and the new debt ($1.2B), so the ratio is 6.0x — incurrence is not permitted', '"Pro-forma" means giving effect to the entire transaction, which includes the EBITDA of the target acquired with the proceeds. Excluding target EBITDA produces a misleading ratio and is not how the document reads.'],
      ['Pro-forma leverage adds expected synergies of $25M to target EBITDA, bringing pro-forma EBITDA to $275M and leverage to 4.36x', 'Synergy add-backs are permissible only to the extent the EBITDA definition allows them and within the specified cap (often 25% of EBITDA, time-limited to 24 months). Assuming synergies without verifying the agreement\'s allowance overstates capacity.'],
      ['Pro-forma leverage cannot include the target EBITDA until 12 months post-close, so the borrower must wait', 'Pro-forma effect for incurrence tests is calculated as if the transaction had occurred at the start of the LTM period — there is no 12-month waiting period. The whole point of pro-forma testing is to size capacity before closing the transaction.'],
    ],
    'Pro-forma testing is the standard mechanic for ratio incurrence tests. The trickiest piece in practice is the EBITDA definition: which add-backs are permitted, how synergies are calculated, what the "transaction" boundary is. A LevFin analyst running an incurrence test should always (a) define the transaction, (b) compute pro-forma debt and pro-forma EBITDA under the agreement\'s definitions, and (c) check whether the calculated ratio fits within the permitted cap.'),

  q(4410322, 'Builder basket / available amount',
    'A credit agreement defines the "Available Amount" as the sum of: (a) $0 at closing, (b) 50% of cumulative consolidated net income since closing, (c) 100% of equity contribution proceeds, (d) returns of capital from investments, and (e) other specified amounts. The Available Amount can be used for restricted payments, investments, and prepayments of junior debt. After three years, CNI is $300M, equity contributions total $50M, and there have been no investment returns. What is the Available Amount?',
    '$0 + (50% × $300M) + $50M = $200M, of which the borrower can use any portion for any of the permitted purposes (RPs, investments, junior debt prepayments) subject to the usual conditions (no default, ratio tests where applicable)',
    [
      ['The Available Amount is only $150M because equity contributions are excluded — they reduce future capacity rather than build it', 'Equity contribution proceeds are a standard input to the Available Amount build-up. Excluding them is contrary to standard sponsor docs and would meaningfully understate the basket.'],
      ['The Available Amount is $300M because CNI is included at 100% under the builder basket', 'The CNI multiplier is typically 50% (not 100%) — this is one of the most negotiated numbers in sponsor docs. A 50% multiplier means lenders share half of retained earnings with equity holders\' eventual access; 100% would mean every dollar of retained earnings becomes extractable.'],
      ['The Available Amount is reset annually to zero, so the relevant figure is only the current-year contribution', 'The Available Amount is cumulative since closing — it does not reset annually. It is a true builder basket that accretes over the life of the loan, which is why its tail risk for lenders grows materially over time.'],
    ],
    'The Available Amount / builder basket is the most underappreciated lender risk in modern docs. It starts at zero at closing and is therefore invisible at the time of pricing — but five years in, it can be hundreds of millions of dollars of "permitted" dividend, investment, or junior-debt-prepayment capacity. Lenders who do not stress-test the builder basket\'s trajectory over the loan life are systematically missing the leakage that compounds quietly across the deal.'),

  q(4410323, 'MFN protection on incremental term loans',
    'A credit agreement permits incremental term loans (an "accordion") up to a stated dollar amount and includes a "Most-Favored-Nation" (MFN) protection of 50 basis points with a 12-month sunset. The borrower issues a new $300M incremental term loan at SOFR + 575 bps when the original TLB carries SOFR + 425 bps. What is the consequence under the MFN clause, and what is the MFN\'s purpose?',
    'The original TLB pricing is automatically increased to SOFR + 525 bps (the new pricing minus the 50 bps MFN cushion) so the original TLB lenders are kept within 50 bps of the new debt — but only if the new debt is issued within 12 months of closing; the MFN exists to prevent the borrower from issuing new debt at much higher yields, thereby damaging the secondary market price of the original TLB',
    [
      ['The original TLB pricing is increased to SOFR + 575 bps to match the new debt, eliminating any pricing gap', 'MFN typically protects within a cushion (here 50 bps), not to identical pricing. A zero-bp MFN ("perfect MFN") exists in some negotiations but the standard sponsor-backed cushion is 50 bps.'],
      ['The new debt cannot be issued at all because it priced higher than the original — the MFN is a prohibition, not a re-pricing mechanic', 'MFN is a re-pricing mechanic, not a prohibition. The borrower is permitted to issue at any rate; the MFN simply requires the original TLB pricing to step up if the new pricing is too far apart.'],
      ['The MFN never applies because incremental debt under the accordion is not subject to MFN — only debt outside the accordion is', 'MFN typically applies precisely to accordion / incremental debt, not to outside debt. The whole point is to protect existing lenders from yield deterioration on additional pari debt issued under the same credit agreement.'],
    ],
    'MFN clauses live and die by (a) the cushion (50 bps standard, 0 bps in tight markets, 75–100 bps in loose markets), (b) the sunset (6, 12, 18 months — sometimes no sunset), and (c) the carve-outs (does it apply to new-money only, or also to refinancings? Does it apply to non-pari debt? Does it apply across currencies?). Sponsors have systematically eroded MFNs over the past decade, and a 12-month sunset with multiple carve-outs is often weak protection in practice.'),

  q(4410324, 'Free-and-clear basket layered with ratio',
    'A modern credit agreement permits incremental term loans under two stacked baskets: (a) a "free-and-clear" basket of the greater of $400M and 100% of LTM EBITDA, available without any ratio test, and (b) ratio debt subject to a 5.0x first-lien net leverage incurrence test. The borrower has $400M LTM EBITDA, current FLNL of 4.5x, and $1.8B of first-lien debt. How much incremental first-lien debt can the borrower issue?',
    'Free-and-clear capacity is the greater of $400M and 100% × $400M = $400M; the ratio basket allows incurrence up to 5.0x FLNL pro forma, which on $400M EBITDA implies $2.0B of first-lien debt, leaving $200M of headroom over current $1.8B — so total incremental capacity is $400M (free-and-clear) + $200M (ratio) = $600M, though the precise ordering and stacking convention matters',
    [
      ['Total capacity is $400M because the free-and-clear basket and the ratio basket are alternative paths, not stackable', 'Modern sponsor docs explicitly permit stacking of the free-and-clear and ratio baskets — the free-and-clear is sized at the start, and ratio capacity is calculated *after* giving effect to the free-and-clear draw. Treating them as alternative is a typical analyst error.'],
      ['Total capacity is unlimited because the ratio basket alone permits any amount of debt up to 5.0x leverage', 'The ratio basket is constrained by the leverage ceiling — at 4.5x current FLNL and $400M EBITDA, only $200M of additional first-lien debt fits below 5.0x. "Unlimited" is wrong even before considering the free-and-clear stack.'],
      ['Total capacity is $400M (free-and-clear) but only if the ratio test is also satisfied as a separate condition', 'The free-and-clear basket\'s defining feature is that it is *not* subject to a ratio test. Conditioning it on the ratio defeats its purpose; the document specifically permits it without ratio compliance.'],
    ],
    'The "stacked basket" structure (free-and-clear + ratio) plus the order of operations is one of the most consequential drafting points in modern docs. Sponsors push for ratio capacity to be calculated *after* giving effect to the free-and-clear draw (maximizing total capacity); lenders push for the reverse. The dollar implications run into the hundreds of millions on large deals and are precisely where a careful LevFin analyst earns their fee.'),

  // -------------------------------------------------------------------------
  // LIABILITY MANAGEMENT EXERCISES (4410325–4410328)
  // -------------------------------------------------------------------------
  q(4410325, 'Drop-down financing pattern',
    'In 2020, Cirque du Soleil — like J.Crew before it — transferred valuable assets to an Unrestricted Subsidiary and then financed those assets with new debt outside the existing lenders\' lien perimeter. This pattern is now called a "drop-down" financing. What is the structural sequence, and what document feature must be open for it to work?',
    'Step 1: borrower identifies an investment basket large enough to capture the value of target assets (often the unlimited ratio-based basket or a designated builder basket); step 2: borrower transfers assets to an Unrestricted Subsidiary using that investment basket; step 3: the Unrestricted Sub raises new debt secured by the transferred assets, outside the existing lien perimeter; step 4: proceeds flow back as a permitted investment or dividend — the entire chain requires that the investment basket be open, that the assets are not protected by specific transfer restrictions, and that the negative pledge does not bind the Unrestricted Sub',
    [
      ['The borrower obtains lender consent to amend the credit agreement so that specified assets become unencumbered, then pledges them to new lenders', 'Drop-down financings are precisely the moves that *avoid* needing consent. If lender consent were required, the structure would not be controversial — it would just be a normal amendment. The whole point is that the document as written permits the transfer.'],
      ['The borrower sells the assets to a third party, pays down existing lenders with the proceeds, then repurchases the assets with new financing', 'A third-party asset sale would trigger the asset-sale prepayment waterfall, which is the opposite of what the borrower wants. Drop-downs are designed to *avoid* triggering mandatory prepayment.'],
      ['The borrower negotiates a release of the lien on specific assets in exchange for a fee paid to existing lenders, then pledges those assets to new lenders', 'Lien releases via consent are a separate (non-controversial) mechanic and not what "drop-down" refers to. The drop-down structure uses the Unrestricted Sub designation to escape the lien perimeter without any consent or fee.'],
    ],
    'Drop-down financings are now a defined pattern in distressed credit. The structural prerequisites are (a) a permissive investment basket, (b) absence of specific transfer protections on the target assets (the post-J.Crew "J.Crew blocker" being the key defense), and (c) a flexible Unrestricted Subsidiary designation mechanic. After Cirque, lenders began demanding explicit blockers on Material IP transfers, on transfers of subsidiaries holding more than a specified portion of EBITDA or assets, and on Unrestricted Sub debt being secured by transferred assets — the so-called "Cirque blockers."'),

  q(4410326, 'Serta up-tier exchange',
    'In June 2020, Serta Simmons executed an "up-tier" exchange transaction in which a majority of its first-lien lenders (51%+) agreed to exchange their existing first-lien debt for new debt that primed the non-participating first-lien lenders. Non-participating lenders sued, alleging the transaction violated the credit agreement. What was the structural mechanic, and which contractual provision did Serta\'s majority lenders use?',
    'The Required Lenders (>50%) used their amendment authority to permit the issuance of new "super-priority" debt that ranked ahead of the existing first-lien debt; participating lenders exchanged their existing debt for the new super-priority debt at a discount, leaving non-participating lenders subordinated below the new tranche — the mechanic exploited the fact that "Required Lenders" amendment power did not require unanimous consent for the type of subordination the deal achieved',
    [
      ['Serta exercised a contractual right to subordinate dissenting lenders without their consent because the credit agreement gave the borrower unilateral authority to amend lien priority', 'No standard agreement gives the borrower unilateral lien-priority amendment authority. The mechanic was through the Required Lenders (>50% of holders) acting collectively, not the borrower alone.'],
      ['Serta moved assets to an Unrestricted Subsidiary and pledged them to the new lenders, identical to the J.Crew structure', 'Serta is the canonical *up-tier* case (priming through new tranche issuance), distinct from J.Crew\'s *drop-down* (asset transfer to Unrestricted Sub). The two patterns are different mechanically — Serta did not need to transfer assets out of the perimeter.'],
      ['Serta refinanced the entire credit facility with new lenders, and dissenting lenders were forced to accept par repayment under the refinancing mechanic', 'There was no full refinancing. The existing facility remained in place; the up-tier added a new senior tranche above it. Non-participating lenders were not repaid — they were left behind in the existing tranche, now junior to the new super-priority debt.'],
    ],
    'Serta is the canonical "non-pro-rata" up-tier transaction. The fundamental contractual question was whether the Required Lenders\' amendment authority could be used to permit a transaction that effectively subordinated a minority of the same class. The case has driven a wave of "sacred rights" amendments to sponsor docs — defining lien priority, pro-rata sharing, and payment priority changes as requiring unanimous consent (or at least the consent of every adversely-affected lender) rather than simple majority.'),

  q(4410327, 'Boardriders priming via majority amendment',
    'In August 2020, Boardriders executed a transaction in which a majority of its first-lien lenders amended the credit agreement to permit new super-priority debt to be incurred ahead of the existing first-lien debt, and exchanged their own holdings into the new super-priority tranche. Non-participating lenders\' existing debt remained outstanding but was now junior. Which structural feature of the original credit agreement was the most important enabler?',
    'The credit agreement\'s amendment mechanic permitted "Required Lenders" (50.1%) to amend the agreement broadly, and the specific protections that would have prevented the priming — "sacred rights" provisions requiring unanimous or affected-lender consent for changes to lien priority, payment priority, or pro-rata sharing — were either absent or narrowly drafted',
    [
      ['Boardriders had a uniquely permissive lien subordination clause that allowed minority lenders to be subordinated by majority vote', 'There is no industry-standard "lien subordination by majority vote" clause. The vulnerability was the absence of strong sacred-rights protections combined with broad Required Lenders authority — not a specific subordination permission.'],
      ['Boardriders used an Unrestricted Subsidiary structure identical to J.Crew\'s', 'Boardriders is an up-tier (priming) case, not a drop-down (Unrestricted Sub) case. The mechanic was at the tranche/lien-priority level, not at the entity-perimeter level.'],
      ['Boardriders bought out non-participating lenders at par as required by the credit agreement\'s "take-or-leave" provision', 'There was no take-or-leave provision and no par buyout. Non-participating lenders were simply left in the original (now-junior) tranche without compensation for the priming.'],
    ],
    'Boardriders, Serta, and TriMark together drove the most significant intercreditor rewrite in modern sponsor docs. Post-2020 agreements typically include expanded sacred-rights provisions: any amendment that subordinates a lender\'s lien, changes a lender\'s payment priority, or permits non-pro-rata debt issuance requires the consent of *each adversely affected lender*. The market shorthand is "Serta blockers" — and their presence (or absence) is now a top-tier diligence question on any new sponsor-backed credit agreement.'),

  q(4410328, 'Sacred rights gaps',
    'A credit analyst is reviewing a new sponsor-backed credit agreement and is specifically looking for protection against an "up-tier exchange" of the type Serta and Boardriders executed. Which of the following document features is the strongest single protection?',
    'A "sacred rights" provision that requires the consent of each adversely-affected lender — not just the Required Lenders — for any amendment that (i) subordinates the lien securing the obligations to any other lien, (ii) subordinates the payment priority of the obligations, or (iii) permits the issuance of debt senior in lien or payment priority to the existing obligations',
    [
      ['A prohibition on the borrower issuing any new secured debt without unanimous lender consent', 'A blanket unanimous consent for all secured debt issuance is too broad to be commercially acceptable to a sponsor; the protection mechanism works by carving out specific subordination/priming changes for unanimous (or affected-lender) consent, not by blocking all secured debt.'],
      ['A negative pledge with no exceptions for permitted liens', 'A negative pledge cannot prevent the Required Lenders themselves from amending the agreement to permit the new lien. The up-tier mechanic operates through amendment authority, not through evasion of the negative pledge — so a tighter negative pledge does not address the vulnerability.'],
      ['A requirement that the borrower offer all lenders pro-rata participation in any new debt issuance', 'A pro-rata offer requirement is a partial protection — and was used as a defense argument by some lenders post-Serta — but it operates after the priming has been permitted. The structural protection is to prevent the priming from being permittable in the first place.'],
    ],
    'Sacred rights are the cleanest single defense against up-tier exchanges. The drafting question is precisely which amendments require which consent threshold — and the post-Serta market norm has shifted toward "each adversely affected lender" rather than Required Lenders for priming, payment priority, and pro-rata sharing changes. An analyst reviewing a new deal should map every amendment provision to its consent threshold and confirm that priming-related amendments fall in the "affected lender" or "all lenders" bucket.'),

  // -------------------------------------------------------------------------
  // R&W AND INDEMNIFICATION (4410329–4410331)
  // -------------------------------------------------------------------------
  q(4410329, 'R&W insurance — what it covers',
    'In a recent leveraged buyout, the equity purchase agreement includes Representations & Warranties Insurance ("R&W insurance") with a $50M limit and a 0.5% retention (tipping to 0.25%). The credit advisor is asked what this insurance product actually covers and why it is now standard in US sponsor deals.',
    'R&W insurance covers losses arising from breaches of the seller\'s representations and warranties in the purchase agreement (typically excluding known issues, certain fundamental reps, and specifically negotiated carve-outs); it is now standard because it allows sellers to walk away with most of their proceeds at close (without sizeable escrows) while still giving the buyer a remedy for unknown breaches — buyer pays the premium and recovers from the insurer rather than from the seller',
    [
      ['R&W insurance covers the buyer against general financial losses from the acquired business over the first 12–24 months post-close', 'R&W is rep-breach insurance, not general business-performance insurance. Losses from the business underperforming projections are not covered; only losses tied to a specific rep being inaccurate at signing/close.'],
      ['R&W insurance covers the lenders\' losses if the borrower defaults on the loan within the policy period', 'R&W insurance has nothing to do with lender protection on the loan. It is a transactional insurance product covering the buyer-seller representations, not the credit risk of the underlying loan.'],
      ['R&W insurance covers the seller\'s litigation costs if the buyer sues for fraud post-close', 'R&W covers buyer\'s losses on rep breaches, not seller\'s defense costs. In most policies, fraud is also excluded from coverage entirely.'],
    ],
    'R&W insurance has become the dominant indemnification structure in US mid-market and upper-mid-market sponsor deals. The structural advantages for the deal are clean: seller takes proceeds without large escrow; buyer has insurer to recover from; both sides avoid a multi-year post-close litigation dance. For a LevFin analyst, the R&W policy is a credit positive (less seller hold-back means less negotiated structure complexity) but worth diligencing — the retention, the exclusions, and any specific known-issue carve-outs all matter for residual buyer exposure.'),

  q(4410330, 'Indemnity basket and cap structure',
    'A purchase agreement contains an indemnification clause with a $1M de minimis (per-claim threshold), a $5M basket (deductible), and a $50M cap on general rep indemnification. The buyer suffers a $10M loss from a breach of a general representation. How much can the buyer recover?',
    '$10M − $5M (basket) = $5M, assuming each underlying claim exceeds the $1M de minimis — the basket functions like an insurance deductible (only losses above $5M flow through), and the recovery is capped at $50M for general reps',
    [
      ['The buyer recovers the full $10M because the loss exceeds both the de minimis and the basket', 'The basket operates as a deductible — only the *excess* over the basket flows through, not the full loss. Treating the basket as a "threshold to qualify" rather than a deductible is the most common error.'],
      ['The buyer recovers $0 because the loss is below the $50M cap and indemnification only applies above the cap', 'The cap is a ceiling on recovery, not a threshold to qualify. Losses below the cap are recoverable (subject to the basket); losses above the cap are limited to the cap.'],
      ['The buyer recovers $9M because the $1M de minimis is subtracted from the loss', 'The de minimis is a per-claim qualification threshold — claims below $1M are simply ignored entirely. It is not subtracted from larger claims; the larger claim flows through subject to the basket (deductible) treatment.'],
    ],
    'The standard indemnification stack in US private deals is de minimis (per-claim qualifier, e.g., $100K–$1M), basket (deductible, e.g., 0.5%–1% of deal value), and cap (ceiling on general rep recovery, e.g., 10% of deal value). Fundamental reps and specific indemnities typically have higher caps (often equal to purchase price) and may have lower or zero baskets. When R&W insurance is in place, much of this structure is replaced by the policy\'s retention and limit — but the analytical method (deductible-then-cap) is the same.'),

  q(4410331, 'Fundamental reps survival',
    'A purchase agreement provides for "general representations and warranties" to survive for 18 months post-close and "fundamental representations" (organization, authorization, capitalization, ownership of equity) to survive for 6 years post-close. Why is this differential survival period industry standard, and which category does an environmental representation typically fall into?',
    'Fundamental reps go to the heart of the deal\'s existence — without them being true, there is no transaction (e.g., seller does not actually own the equity being sold); they survive much longer to match the lifetime risk profile of a fundamentally void deal. General reps are about ordinary business issues that surface within a normal post-close discovery window. Environmental representations are typically a *specially negotiated* category that survives somewhere between the two (often 3–5 years) because environmental liabilities have a longer tail than ordinary business issues but are not deal-existential.',
    [
      ['Fundamental reps survive longer because they are easier to breach, so buyers need more time to discover the breach', 'The survival period reflects the risk profile and stakes, not the ease of breach. Fundamental reps are *harder* to breach (they cover basic facts like ownership and authorization) but the consequences of a breach are catastrophic, which is why the protection is long-lived.'],
      ['All reps survive for 18 months and "fundamental" is a marketing term for buyer-favored reps with no legal distinction', 'Fundamental reps are a well-established legal category with longer survival, different (often higher) caps, and sometimes no basket. The distinction is real, well-litigated, and central to indemnification drafting.'],
      ['Environmental reps always fall under fundamental reps because environmental liability is uncapped', 'Environmental liability is often heavily negotiated and frequently carved into its own specific indemnity rather than rolled into fundamental reps. The treatment varies — but it is rarely default-fundamental.'],
    ],
    'Survival periods in purchase agreements form a tiered structure: general reps (12–24 months, basket and cap apply), fundamental reps (5–6 years or longer, often no basket and very high cap), specific indemnities (negotiated case-by-case based on identified risk — tax, environmental, IP, regulatory). The R&W policy typically follows this tiering, with longer policy periods and higher coverage for fundamental reps. Reading the survival schedule alongside the indemnification mechanics is essential because each category has a different stack of basket / cap / time-limit.'),

  // -------------------------------------------------------------------------
  // CROSS-DEFAULT AND ACCELERATION (4410332–4410335)
  // -------------------------------------------------------------------------
  q(4410332, 'Cross-default vs cross-acceleration',
    'A credit agreement has a cross-acceleration clause keyed to "material indebtedness" over $50M. The borrower has $400M of senior notes outstanding. The notes contain a 1.0x interest coverage maintenance covenant which the borrower breaches at quarter-end. The notes\' trustee has not yet accelerated. Is the term loan in default under the cross-acceleration clause, and how does this differ from a cross-default clause?',
    'No — cross-acceleration only triggers when the other debt has actually been accelerated (or when the holders have the right to and have taken steps to accelerate). A breach without acceleration of the notes does not cross-accelerate the term loan. A cross-*default* clause, by contrast, would trigger on the underlying default itself regardless of whether the other lenders accelerated — making it a much earlier and broader trigger',
    [
      ['Yes — any default on material indebtedness triggers the cross-acceleration clause, regardless of whether the other lenders have accelerated', 'This describes a cross-default clause, not cross-acceleration. The distinction is precise: cross-default triggers on the default; cross-acceleration triggers only on actual acceleration (or the right and steps to accelerate).'],
      ['Yes — the breach of any covenant in any debt over $50M automatically results in cross-acceleration', 'Cross-acceleration is not automatic on covenant breach. It requires actual acceleration of the other debt (or the right and steps to accelerate). A breach alone is necessary but not sufficient.'],
      ['No — cross-acceleration only triggers if the other debt is paid in default for more than 30 days, regardless of acceleration', 'A 30-day payment default trigger is a separate mechanic (sometimes called a "cross-payment-default") and is independent of cross-acceleration. The standard cross-acceleration trigger is acceleration itself, not just continued payment default.'],
    ],
    'The distinction between cross-default and cross-acceleration is one of the most important in credit documentation. Cross-default is the broader, earlier trigger and is more lender-friendly; cross-acceleration is narrower and is sponsor-friendly because it requires the other lenders to actually have made a move. Most modern sponsor-backed agreements use cross-acceleration (often combined with cross-payment-default after a grace period) rather than cross-default to give the borrower more room to work out covenant defaults on other instruments without pulling the entire capital structure into default simultaneously.'),

  q(4410333, 'Grace period mechanics on payment default',
    'A credit agreement provides that "failure by the Borrower to pay any principal of the Loans when due" is an immediate event of default, but "failure to pay any interest, fee, or other amount within 5 business days of when due" is an event of default after the grace period. The borrower misses a $2M interest payment due Monday. Day 5 falls on Friday of the following week. When does the EOD mature?',
    'On Friday of the following week (the close of the 5th business day after the missed Monday payment); during the 5-business-day grace period, the missed interest payment is a default but not yet an event of default — meaning lenders cannot accelerate but the borrower is on notice and any cure within the grace period restores compliance',
    [
      ['Immediately on Monday — interest payment defaults do not have a grace period under standard credit agreements', 'Standard credit agreements distinguish between principal (no grace) and interest/fees (typically a 3–5 business day grace). The grace period for interest is precisely to permit administrative cures (wire failures, holiday delays) without triggering EODs.'],
      ['On the Tuesday after the missed Monday payment because the grace runs from the morning after default', 'The grace period typically runs from the date of the missed payment, measured in business days. A 5-business-day grace from Monday matures on Friday of the next week (assuming no intervening holidays), not on Tuesday.'],
      ['Never — interest defaults can be cured indefinitely by paying default interest, without ever maturing into an EOD', 'Interest defaults mature into EODs once the grace expires. Default interest accrues during the period but does not extend the cure window. The grace period is a finite administrative cure window, not an open-ended option.'],
    ],
    'Grace periods on payment defaults are universal in syndicated credit agreements but the specific duration varies: principal has no grace (or 1 business day in some agreements), interest typically has 3–5 business days, and non-payment of fees/other amounts may have 30 days. The structural logic is that principal payments are predictable and discrete, while interest and fees have more administrative complexity and merit a small cushion for wire and processing issues.'),

  q(4410334, 'Materiality threshold on cross-default',
    'A credit agreement has a cross-acceleration clause that triggers only on default of "Material Indebtedness," defined as indebtedness with an aggregate principal amount outstanding of $75M or more. The borrower has $50M of equipment financing outstanding that goes into default after a payment miss. Are the term-loan lenders\' cross-acceleration rights triggered?',
    'No — the equipment financing falls below the $75M materiality threshold, so its default does not constitute a default of Material Indebtedness; the term loan is not cross-accelerated. The materiality threshold exists to prevent small, ordinary-course defaults (equipment liens, small operating leases) from triggering catastrophic cross-default across the capital structure',
    [
      ['Yes — any default on any debt above $1M triggers the cross-acceleration clause to protect lenders broadly', 'Cross-acceleration thresholds typically range from $25M to $100M+ depending on deal size — not $1M. The whole point of the threshold is to give the borrower room on small obligations.'],
      ['Yes — the equipment financing default is aggregated with all other debt to determine materiality, so $50M + $200M of senior notes = $250M, triggering the clause', 'Materiality is per-instrument or per-instrument-class, not aggregated across all debt. A $50M equipment default does not "borrow" the materiality from other debts that are not themselves in default.'],
      ['No — but only if the borrower cures within 30 days, otherwise the threshold is waived and the default flows through', 'Cure rules apply to the underlying default but do not change the materiality threshold. A sub-threshold default never triggers cross-acceleration regardless of whether it is cured — the threshold is a permanent gate on the trigger.'],
    ],
    'Materiality thresholds on cross-default and cross-acceleration are the borrower\'s protection against minor defaults pulling the entire capital structure into default. The standard threshold scales with deal size (typically $25–100M+ in sponsor-backed deals) and may be expressed as a fixed dollar amount, a percentage of consolidated debt, or the greater of the two. An analyst checking lender protection should always identify the threshold and consider what classes of debt fall below it.'),

  q(4410335, 'Acceleration mechanics and standstill',
    'After a maintenance covenant breach matures into an event of default, the credit agreement provides that "the Required Lenders may, by notice to the Borrower, declare the unpaid principal, accrued interest, and all other obligations to be immediately due and payable." The borrower\'s notes indenture has a 90-day standstill provision preventing the notes\' trustee from accelerating during a senior credit-facility default. What is the practical sequence of events?',
    'The credit-facility Required Lenders may accelerate by notice at any time after the EOD; the notes\' trustee is contractually delayed from accelerating for 90 days to give the senior lenders first move; during the standstill, the senior lenders can work out terms (forbearance, amendment, refinancing) with the borrower without the notes simultaneously triggering — but if the senior default persists past 90 days, the notes can also accelerate, layering the defaults',
    [
      ['Acceleration happens automatically on EOD without notice, so the standstill is irrelevant — both sets of lenders accelerate the same day', 'Acceleration in syndicated credit agreements is typically NOT automatic — it requires a notice from the Required Lenders. The standstill exists precisely because acceleration is a discretionary step the senior lenders take, and the notes\' standstill is timed off when (or whether) the senior lenders make that move.'],
      ['The notes\' trustee accelerates first because the indenture\'s acceleration mechanic is automatic on EOD, even though the credit facility requires Required Lender direction', 'The notes\' standstill is precisely intended to subordinate the notes\' timing to the senior facility. The notes do not accelerate first; the standstill makes them go last.'],
      ['The standstill is unenforceable as a matter of New York law because it is an "ipso facto" provision that violates the borrower\'s acceleration rights', 'Standstill provisions in intercreditor and indenture documents are routinely enforced in New York and are not ipso facto provisions in the bankruptcy sense. The challenge in restructuring is who gets to drive the workout, and standstills are the contractual answer.'],
    ],
    'The choreography of acceleration in a multi-tranche capital structure is governed by intercreditor agreements and standstill provisions. Senior lenders typically move first because they have the cleanest contractual path; subordinated lenders are delayed by standstills (often 90, 120, or 180 days) to give the senior lenders space to drive the outcome. A LevFin analyst modeling a stress scenario needs to know precisely when each tranche can accelerate, what triggers consent vs notice, and which intercreditor terms govern the sequence.'),

  // -------------------------------------------------------------------------
  // INTERCREDITOR AGREEMENTS (4410336–4410339)
  // -------------------------------------------------------------------------
  q(4410336, 'First-lien vs second-lien intercreditor',
    'A borrower has $1.0B of first-lien term loans and $300M of second-lien notes, both secured by the same collateral pool. The two tranches are governed by an intercreditor agreement. What is the operative rule on lien priority in a payment waterfall after collateral enforcement?',
    'Proceeds from collateral are applied first to repay the first-lien obligations in full (principal, interest, fees, expenses), and only after the first lien is fully satisfied do any remaining proceeds flow to the second-lien obligations — this is "lien subordination," the structural protection that defines 1L/2L relative position',
    [
      ['The proceeds are shared pro-rata between first lien and second lien based on principal amount, so 1L gets ~77% and 2L gets ~23%', 'Pro-rata sharing between 1L and 2L would defeat the entire point of lien priority. The 2L lenders accepted a higher coupon precisely because they would be paid last in the waterfall — pro-rata would erase that bargain.'],
      ['The proceeds flow first to the trustee of whichever tranche enforced the collateral, then to the other tranche', 'Waterfall priority is not based on who enforces — it is based on lien priority as set in the intercreditor. The 2L trustee enforcing the collateral does not give the 2L holders a priority over the 1L; the 1L is paid first regardless of who pulled the trigger.'],
      ['The proceeds are escrowed pending court approval, with priority determined later by the bankruptcy judge based on equitable considerations', 'Lien priority is contractually determined and is not subject to bankruptcy-court re-ordering absent extraordinary circumstances (substantive consolidation, fraudulent conveyance findings). The waterfall runs on the intercreditor as written.'],
    ],
    'First-lien / second-lien intercreditors are the standard structure for the modern leveraged capital stack. The first-lien gets the senior position in the waterfall and the strongest enforcement rights; the second-lien gets a higher coupon (often 200–400 bps over the first lien) and is structurally and contractually subordinated. The intercreditor agreement is where every operational detail — enforcement, standstill, voting rights, amendments — is negotiated.'),

  q(4410337, 'Payment subordination vs lien subordination',
    'A credit analyst is reviewing two different deal structures: (a) a 1L term loan and a 2L term loan, both secured by the same collateral with the 2L "lien-subordinated"; and (b) a 1L term loan and unsecured subordinated notes, with the subordinated notes "payment-subordinated." What is the operative difference between lien subordination and payment subordination?',
    'Lien subordination orders the *collateral waterfall* — both tranches can be paid contractually until enforcement, but on collateral enforcement the senior lien is paid first. Payment subordination orders the *ordinary debt service* itself — the subordinated holder agrees not to receive any payment (interest or principal) while the senior debt is in default, and in some agreements not even when the senior debt is current if certain blockage provisions are active',
    [
      ['Lien subordination subordinates everything (including payment); payment subordination only subordinates payment of principal at maturity', 'Lien subordination does not by itself subordinate ordinary payments — both lien-subordinated tranches typically receive interest and scheduled principal in the ordinary course. Payment subordination is the broader and more restrictive form.'],
      ['Payment subordination only applies in bankruptcy; lien subordination only applies outside bankruptcy', 'Both subordination types apply both in and out of bankruptcy. Inside bankruptcy, both flow into the priority of distributions; outside, each governs its own scope (waterfall for lien sub, ordinary service for payment sub).'],
      ['Payment subordination is a feature of secured debt; lien subordination is a feature of unsecured debt', 'This reverses reality. Lien subordination is by definition a feature of secured debt (both tranches must have liens); payment subordination is the standard form for unsecured subordinated debt that has no lien at all.'],
    ],
    'The two subordination flavors live in different places in the capital structure. Lien subordination is the modern norm for 2L term loans / notes — both tranches are secured, both get paid in the ordinary course, but the senior tranche eats first if enforcement happens. Payment subordination is the older and broader convention for unsecured "subordinated" or "junior" debt — the subordinated holder can be blocked from receiving payments at all when the senior is in trouble.'),

  q(4410338, 'ABL / Term Loan ICA — split collateral pools',
    'A borrower has an Asset-Based Lending revolver ($200M, secured primarily by accounts receivable and inventory) and a Term Loan B ($600M, secured primarily by intangibles, real estate, and equipment). Both facilities are governed by an ABL/Term Loan intercreditor agreement. How is collateral priority typically structured in this arrangement?',
    'The ABL has a first-priority lien on "ABL Priority Collateral" (typically receivables, inventory, cash, and related assets — i.e., the working-capital collateral pool) and a second-priority lien on "Term Loan Priority Collateral" (real estate, equipment, IP, equity in subsidiaries); the TL has the reverse priorities — first on Term Loan Priority Collateral, second on ABL Priority Collateral. Each tranche has waterfall priority on its named collateral pool',
    [
      ['The ABL has first priority on all collateral because it is the most senior tranche in the capital structure', 'ABL is not necessarily "more senior" overall — it has priority only on its own collateral pool (receivables, inventory). On the term-loan collateral (real estate, equipment, IP), the term loan is senior and the ABL is junior.'],
      ['The two facilities share collateral pro-rata based on outstanding amounts, with the ABL getting more priority in bankruptcy', 'Pro-rata sharing of collateral defeats the entire premise of the split-pool ABL/Term Loan structure. The two facilities have explicitly different collateral, with cross-lien priorities — they do not share pro-rata.'],
      ['The ABL and TL share a single first-lien collateral pool with pari passu treatment in any waterfall', 'Pari passu sharing is the structure for two pari first-lien tranches, not for ABL and TL. The whole point of the ABL/TL structure is that each tranche has *primary* claim on the collateral suited to its risk profile and *secondary* claim on the other pool.'],
    ],
    'ABL/Term Loan intercreditors split the collateral universe rationally: receivables and inventory (which fluctuate with operations and require borrowing-base monitoring) belong to the ABL; long-lived assets (real estate, equipment, IP, equity) belong to the term loan. Each facility is sized off its own collateral pool — the ABL through a borrowing base, the TL through enterprise-value coverage. The intercreditor governs every cross-pool issue: cash management, enforcement standstills, dilution of the other lien, etc.'),

  q(4410339, 'Standstill and 2L enforcement rights',
    'A 1L/2L intercreditor agreement provides that "during the Standstill Period, the Second-Lien Agent shall not exercise any remedies against the Collateral." The standstill period is 180 days from the date the 2L Agent delivers a notice of intent to enforce, but ends earlier if (i) the 1L Agent commences enforcement or (ii) the bankruptcy of the borrower is filed. The 2L gives notice on day 1; the 1L does not commence enforcement and there is no bankruptcy. On day 90, the 2L Agent is contemplating enforcement. What is the position?',
    'The 2L Agent must wait until day 180 (or earlier if the 1L commences enforcement or a bankruptcy is filed); the standstill is precisely the period during which the 1L has priority over the enforcement decision — even if the 2L is unpaid and contractually in default. The 1L can choose to enforce or not enforce, and the 2L has no remedy lever until the standstill expires',
    [
      ['The 2L Agent can enforce at any time after delivering notice — the standstill is just an advance-notice requirement, not a prohibition', 'Standstills in 1L/2L intercreditors are real prohibitions on enforcement, not notice formalities. The 2L is contractually barred from enforcing during the period regardless of whether notice has been given.'],
      ['The 2L Agent can enforce after 90 days because the 1L has waived its standstill by not commencing enforcement', 'Inaction by the 1L is not a waiver of the standstill — the standstill runs for its full term regardless of whether the 1L moves. The whole point is to give the 1L the *option* to enforce or work things out, not to require them to act.'],
      ['The 2L Agent can enforce only with the written consent of the 1L Agent, which can be granted at any time', 'The 2L can enforce without consent once the standstill expires; written consent is not the gating condition. The structural mechanic is time-based (180 days) with specific triggering events that can end the standstill early.'],
    ],
    'Standstill periods are the single most important enforcement protection in 1L/2L intercreditors. They give the senior lender complete control of the enforcement decision for a defined period (typically 90–180 days in sponsor-backed deals). The structural logic is that the senior lender is best positioned to drive a workout — and the junior lender, having accepted a higher coupon for accepting lien subordination, has also accepted that they sit on the sidelines for the standstill window. Diligencing intercreditor standstill terms (length, exceptions, payment blockage interactions) is core analyst work on any 2L deal.'),
]
