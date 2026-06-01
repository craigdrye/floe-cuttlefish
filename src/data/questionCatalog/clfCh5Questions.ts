import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// CREDIT / LEVFIN — Chapter 5 expansion: Distress Signals and Recovery Thinking
// ----------------------------------------------------------------------------
// 40 new questions (IDs 4410400–4410439) extending the existing chapter 5
// content in careerAgentGeneratedRoadmapFinance.ts (IDs 4103055, 4105123,
// 4105124, 4105125, 4107402, 4107403, 4107407, 4107411, 4107872, 4107877).
//
// US bankruptcy framework: Chapter 11 vs Chapter 7, 363 sales, DIP financing,
// plan of reorganization, creditors committee, exit financing, absolute
// priority rule, fulcrum security, recovery waterfall, liability management,
// distressed trading cycle (par-to-80, 80-to-50, 50-to-30, sub-30 buckets).
//
// Voice and structure mirror vcCapstoneQuestions.ts — bespoke whyWrong on
// every wrong answer, single integrative lesson per question, no strawman
// distractors. Bespoke references to recent US distressed cases:
//   - J.Crew trapdoor / IP drop-down (2017)
//   - Cirque du Soleil Chapter 11 (2020)
//   - Carvana out-of-court exchange (2023)
//   - Envision, Serta, Mitel uptier transactions
//   - Hertz 2020 chapter 11 with equity recovery
//   - Belk, Revlon prepacks
// ----------------------------------------------------------------------------

const SOURCE = 'Floe CLF Ch5 canonical bank'

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

const CHAPTER = 'Distress Signals and Recovery Thinking'

// Difficulty distribution: 11 at 3, 21 at 4, 8 at 5.
export const CLF_CH5_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Distress signals (6)
  4410400: 3, // Widening secondary spreads
  4410401: 4, // Missed amortization payment
  4410402: 4, // Refinancing risk near maturity
  4410403: 4, // Leverage cliff in covenant headroom
  4410404: 3, // Drawn revolver as distress tell
  4410405: 4, // Trade payables stretch signal

  // Bankruptcy process (7)
  4410406: 3, // Chapter 11 vs Chapter 7
  4410407: 4, // 363 sale mechanics
  4410408: 4, // DIP financing role
  4410409: 4, // Plan of reorganization vote thresholds
  4410410: 4, // Creditors committee role
  4410411: 5, // Exit financing structure
  4410412: 3, // Chapter 7 trustee duties

  // Absolute priority rule (5)
  4410413: 3, // APR ordering
  4410414: 4, // Gifting around APR
  4410415: 4, // Equity recovery rare under APR
  4410416: 5, // Cram-down on dissenting class
  4410417: 4, // New value exception

  // Recovery analysis (6)
  4410418: 3, // Going-concern vs liquidation
  4410419: 4, // EV at exit anchor
  4410420: 4, // Waterfall by tranche math
  4410421: 5, // Where value breaks in the stack
  4410422: 4, // Liquidation discount on inventory
  4410423: 4, // Goodwill in liquidation

  // Liability management (4)
  4410424: 4, // Out-of-court exchange vs prepack
  4410425: 4, // J.Crew trapdoor
  4410426: 5, // Uptier exchange (Serta/Mitel)
  4410427: 3, // Carvana out-of-court precedent

  // Trading the distressed cycle (5)
  4410428: 3, // Par-to-80 deterioration trigger
  4410429: 4, // 80-to-50 reorg play
  4410430: 4, // 50-to-30 fulcrum bucket
  4410431: 5, // Sub-30 equity option
  4410432: 4, // Hertz 2020 equity surprise

  // Fulcrum security identification (4)
  4410433: 4, // Fulcrum becomes new equity
  4410434: 5, // Value-break analysis
  4410435: 4, // Why senior secured rarely fulcrum
  4410436: 3, // Subordinated notes as fulcrum example

  // DIP financing economics (3)
  4410437: 3, // Super-priority claim
  4410438: 4, // Roll-up of pre-petition debt
  4410439: 4, // DIP for 363 sale financing
}

export const clfCh5Questions: Question[] = [
  // -------------------------------------------------------------------------
  // DISTRESS SIGNALS (4410400–4410405)
  // -------------------------------------------------------------------------
  q(4410400, 'Career Skills', CHAPTER, 'Widening secondary spreads',
    'A $1B term loan that issued at SOFR+400 is quoted in the secondary at 78 cents to yield over 1,100 bps. The borrower has not announced anything, but the loan has dropped 12 points in three weeks. What is the cleanest read?',
    'The secondary market is pricing in materially higher default probability — the spread widening is the first observable distress signal, often ahead of public news, downgrades, or covenant breaches',
    [
      ['Secondary prices are noise and should be ignored until a downgrade prints', 'Loan prices typically lead rating actions by weeks or months. Waiting for the agency print means waiting until the signal is stale and the trade is crowded.'],
      ['The loan is just trading at a discount, which is normal for SOFR-based paper', 'A 78-cent price on a SOFR+400 loan implies a yield far above the coupon — that is distressed pricing, not a routine discount. Floating-rate paper trades near par unless the market is pricing credit risk.'],
      ['The drop is technical because hedge funds are rotating out of leveraged loans', 'Technical flows rarely move a single name 12 points in three weeks while the index is stable. A name-specific move of this size is a credit signal, not a technical one.'],
    ],
    'Secondary loan and bond prices are the earliest distress signal a credit analyst observes. A persistent gap between coupon and yield, especially a 10+ point drop in weeks, is the market pricing in default probability before downgrades, covenant trips, or public disclosure catch up.'),

  q(4410401, 'Career Skills', CHAPTER, 'Missed amortization payment',
    'A leveraged borrower fails to make a scheduled 1% amortization payment on its term loan and instead requests a 30-day forbearance from the agent. How should a credit analyst interpret this event?',
    'A missed scheduled payment, even when forbearance is granted, is a hard distress signal — it tells the market the company could not fund a relatively small obligation from operating cash or revolver capacity',
    [
      ['Forbearance is routine and the missed payment is not material because lenders agreed to wait', 'Forbearance is granted because the alternative is acceleration, not because the situation is benign. The fact that lenders had to be asked is itself the signal.'],
      ['Amortization payments are small enough that a miss reflects treasury timing, not credit stress', 'A 1% amort on a billion-dollar loan is $10M — a credit cannot fund that without liquidity stress. Healthy borrowers do not request forbearance on payments this size.'],
      ['The miss only matters if it triggers cross-default to bonds', 'Cross-default mechanics matter for legal acceleration, but the credit signal is independent — a borrower that cannot make scheduled debt service is in trouble regardless of whether bondholders can sue today.'],
    ],
    'A missed scheduled payment is one of the few binary distress signals in credit. Even a small miss says the borrower is out of options on liquidity, which is usually a precursor to a restructuring conversation within weeks or months.'),

  q(4410402, 'Career Skills', CHAPTER, 'Refinancing risk near maturity',
    'A borrower has $1.2B of unsecured notes maturing in 14 months, leverage at 6.5x, and the high-yield primary market is essentially closed for B3/B- credits. The company has not announced refi plans. What is the dominant credit concern?',
    'Refinancing risk is now the binding constraint — operating performance can be stable and the credit still defaults at maturity if access to new debt does not return inside the window',
    [
      ['Leverage at 6.5x is the main issue and refi can be solved later', 'Leverage matters for sustainability, but a maturity in 14 months with closed markets makes refi the binding constraint right now. Leverage is the steady-state problem; the wall is the imminent one.'],
      ['The notes will be refinanced at maturity because they always are in the high-yield market', 'High-yield markets close periodically and have left credits stranded — 2008, 2015-16, 2020, and parts of 2022 all saw windows shut for weaker B-flat names. "Always refinanced" is survivorship bias.'],
      ['Concern is limited because unsecured notes have no covenants that could trip', 'Covenant-light status protects against accidental default before maturity, not against a hard maturity wall. The notes still have to be repaid on the stated date.'],
    ],
    'A near-term maturity wall with shut primary markets is the cleanest example of refinancing risk dominating credit analysis. The classic case is when an otherwise stable business defaults purely because it cannot access new debt before existing debt comes due.'),

  q(4410403, 'Career Skills', CHAPTER, 'Leverage cliff in covenant headroom',
    'A maintenance covenant requires net leverage below 7.0x, tested quarterly. The borrower printed 6.4x last quarter on guided EBITDA of $400M. EBITDA is now tracking $360M and the company has $50M of incremental debt drawn. What is the immediate concern?',
    'A covenant cliff — the combination of lower EBITDA and higher debt is moving leverage from 6.4x toward roughly 7.4x, which would breach the 7.0x test at the next measurement date',
    [
      ['The covenant is fine because last quarter printed 6.4x with room to spare', 'Covenants are measured each quarter, not once. A 6.4x print does not protect against the next test if the inputs deteriorate — the credit needs the next four prints to clear, not just the last one.'],
      ['Maintenance covenants are not usually enforced as long as the company is talking to lenders', 'Lenders use covenant breaches to renegotiate terms, take fees, or demand collateral — they are not waved through. Hoping for forbearance is not a credit strategy.'],
      ['EBITDA add-backs can be increased to keep the covenant clear', 'Add-back caps and definitions limit how much management can paper over the underlying trend, and aggressive new add-backs are a separate distress signal lenders watch for. The math does not solve itself.'],
    ],
    'Maintenance covenant cliffs combine two deteriorating inputs at once — falling EBITDA and rising debt — so leverage moves faster than either factor alone suggests. Analysts should model the next two test dates explicitly, not rely on the last print.'),

  q(4410404, 'Career Skills', CHAPTER, 'Drawn revolver as a distress tell',
    'A borrower with a $500M revolver — historically used for seasonal working capital and typically drawn around $50M — has drawn $475M and capitalized the interest. The 10-Q calls this "prudent liquidity management." What is the credit read?',
    'A near-fully drawn revolver well outside the normal seasonal pattern is a classic late-stage distress signal — the company is converting committed capacity into cash because it expects access to falter',
    [
      ['Drawing the revolver is positive because it improves the cash balance', 'Cash on the balance sheet that came from drawing committed capacity is not new liquidity — it is liquidity that was already promised. The act of pulling it forward signals concern about future access.'],
      ['Revolver utilization is a routine working-capital decision and not a credit signal', 'Routine seasonal use is around historical levels; pulling 95% of capacity is not routine. The behavior, not the existence of the draw, is the signal.'],
      ['The disclosure framing as "prudent liquidity management" indicates a strong treasury function', 'Companies almost always frame distress moves as "prudent" — the language is a tell, not a reassurance. Compare the draw to history and the explanation drops out.'],
    ],
    'Sudden near-full revolver draws are one of the most reliable late-cycle distress signals because they show the treasury team has stopped trusting that the revolver will remain available. Compare current usage to a multi-year baseline rather than reading management framing.'),

  q(4410405, 'Career Skills', CHAPTER, 'Trade payables stretch signal',
    'Days payable outstanding has moved from 45 days to 78 days over two quarters, while inventory and receivables look stable. The CFO calls it "supplier-term optimization." How should a credit analyst read the change?',
    'Stretching payables by ~33 days is a liquidity-extension move — the company is financing itself off vendors because traditional liquidity sources are constrained, which often precedes vendor-confidence loss and tighter terms',
    [
      ['Longer payables are a positive working-capital efficiency that frees cash', 'Working-capital optimization at a healthy company moves payables a few days, not 30+. A 33-day stretch in two quarters is a stress signal dressed up as efficiency.'],
      ['The change is irrelevant because payables do not affect leverage metrics', 'Payables affect liquidity and vendor relationships, both of which drive going-concern viability. Leverage is not the only credit dimension that matters.'],
      ['Suppliers always extend terms in tough times, so the move is normal in the cycle', 'The opposite is generally true — suppliers tighten or demand cash-in-advance from distressed customers. The stretch reflects unilateral extension by the borrower, not negotiated terms.'],
    ],
    'Payables stretch is a quiet but powerful distress signal because it precedes the loud signals — once vendors notice and react, the company faces cash-on-delivery demands and supply disruption that accelerate the slide.'),

  // -------------------------------------------------------------------------
  // BANKRUPTCY PROCESS (4410406–4410412)
  // -------------------------------------------------------------------------
  q(4410406, 'Career Skills', CHAPTER, 'Chapter 11 vs Chapter 7',
    'A distressed retailer with a viable e-commerce business but losing brick-and-mortar stores is choosing between Chapter 11 and Chapter 7 in the US Bankruptcy Code. What is the cleanest framing of the difference?',
    'Chapter 11 is a reorganization framework that keeps the company operating under court supervision while restructuring debt and operations; Chapter 7 is a liquidation under a trustee who sells the assets and winds down the entity',
    [
      ['Chapter 11 and Chapter 7 differ mainly in filing fees and procedural timing', 'The structural difference is reorganization vs liquidation, not procedure. A Chapter 7 filing eliminates the going concern; a Chapter 11 filing tries to preserve it.'],
      ['Chapter 11 is for public companies and Chapter 7 is for private companies', 'Both public and private companies can file under either chapter — the choice depends on whether the business has going-concern value worth preserving, not on equity structure.'],
      ['Chapter 11 wipes equity; Chapter 7 preserves equity', 'Equity is generally wiped or near-wiped under both, since recovery follows the absolute priority rule. Chapter 11 may give equity a token recovery only when senior classes consent.'],
    ],
    'For any distressed credit, the first reorganization vs liquidation question is whether the going concern is worth more than the assets sold piecemeal. Chapter 11 fits when reorganization preserves value; Chapter 7 fits when liquidation is the higher outcome.'),

  q(4410407, 'Career Skills', CHAPTER, '363 sale mechanics',
    'A debtor in Chapter 11 wants to sell its core operating subsidiary "free and clear" of liens within 90 days of filing. The buyer is a financial sponsor offering $800M with a $30M break fee. What is the purpose of Section 363?',
    'Section 363 allows the debtor to sell assets free and clear of liens and claims with court approval, typically through a stalking-horse bid and auction, transferring clean title to the buyer while proceeds replace the liens at the estate level',
    [
      ['A 363 sale lets the debtor sell assets without paying creditors anything', 'Liens attach to the sale proceeds — creditors are paid out of cash instead of from the asset itself. "Free and clear" means clean title for the buyer, not zero recovery for creditors.'],
      ['A 363 sale is the same as a confirmed plan of reorganization', 'A 363 sale is an asset transaction inside a case; a plan is the comprehensive restructuring document confirmed at the end. Many cases use both — 363 to move assets quickly and a plan to wind down the shell.'],
      ['Section 363 requires unanimous creditor consent before the court can approve', 'Section 363 requires court approval after notice and a hearing — not unanimous consent. Objecting creditors can be heard but are not given a veto.'],
    ],
    'Section 363 sales are the workhorse of modern Chapter 11 — they move assets quickly to a buyer with clean title, preserve going-concern value before it erodes, and let the estate use the proceeds to satisfy claims through the priority waterfall.'),

  q(4410408, 'Career Skills', CHAPTER, 'DIP financing role',
    'A debtor entering Chapter 11 needs $250M of new liquidity to fund payroll, vendor critical-trade payments, and professional fees during the case. What role does debtor-in-possession (DIP) financing play?',
    'DIP financing provides post-petition liquidity with court-approved super-priority status, secured by the estate and ranking ahead of most pre-petition claims, in exchange for funding operations and case costs through reorganization',
    [
      ['DIP financing is the same as pre-petition revolver borrowings, just renamed after filing', 'DIP financing is a new facility approved by the bankruptcy court with its own priority, covenants, and milestones. The pre-petition revolver is typically frozen or rolled up.'],
      ['DIP financing is unsecured because secured claims are stayed in bankruptcy', 'DIPs are usually heavily secured and super-priority — that is the whole point. Lenders provide post-petition money only because they get priority that pre-petition lenders do not have.'],
      ['DIP financing is provided by the SBA or another government program', 'DIP lenders are commercial — banks, private credit, distressed funds, or the existing lender group. Government programs do not provide DIP loans as a matter of course.'],
    ],
    'DIP financing is the fuel that lets a Chapter 11 case proceed. Its super-priority status is the structural reason new money is willing to fund a debtor that just defaulted — the analyst should always know who the DIP lender is and what they require.'),

  q(4410409, 'Career Skills', CHAPTER, 'Plan of reorganization vote thresholds',
    'A plan of reorganization is being voted on. The unsecured bondholder class has 200 holders. What does the Bankruptcy Code require for that class to "accept" the plan?',
    'A class accepts when more than half in number of holders voting and at least two-thirds in dollar amount voting vote to accept — the famous "1/2 by number, 2/3 by amount" test',
    [
      ['A class accepts only with unanimous holder approval', 'Unanimity would make plans impossible to confirm. The Code uses majority-and-supermajority thresholds precisely so a small number of holdouts cannot block restructuring.'],
      ['A class accepts on simple majority dollar vote only, regardless of holder count', 'The two-prong test (holders and dollars) is intentional — it prevents a single large holder from dominating an entire class and also prevents many small holders from overruling the economic majority.'],
      ['Plan voting requires approval by the bankruptcy judge before holders are consulted', 'The judge confirms after voting and only if the legal requirements (including the class votes) are met. The court does not vote on behalf of creditors.'],
    ],
    'The 1/2-by-number and 2/3-by-amount thresholds are foundational restructuring math. They define what counts as class acceptance and therefore drive negotiation leverage between holders, who can block individually only if they can move either metric.'),

  q(4410410, 'Career Skills', CHAPTER, 'Creditors committee role',
    'In a Chapter 11 case, the US Trustee appoints an Official Committee of Unsecured Creditors (UCC). What is the committee\'s function?',
    'The UCC is a fiduciary body that represents the interests of unsecured creditors as a class, with retained advisors paid by the estate, full information access, and standing to challenge debtor decisions and the plan',
    [
      ['The UCC works for the debtor and helps management run the company in bankruptcy', 'The UCC represents creditors, not the debtor. It is structurally adversarial to management on most economic decisions, even when the case is cooperative.'],
      ['The UCC has no real authority and is mainly a discussion forum', 'UCCs negotiate plan terms, challenge insider transactions, and litigate causes of action. Their fees are paid by the estate, which gives them real working power in the case.'],
      ['The UCC represents secured creditors who would otherwise be unrepresented', 'Secured creditors usually have their own counsel and financial advisors funded by their own collateral. The UCC exists because unsecured creditors are otherwise diffuse and unrepresented.'],
    ],
    'The UCC is the structural counterweight to the debtor in Chapter 11 — its information access and estate-funded advisors are what give unsecured creditors a real seat at the table during plan negotiations.'),

  q(4410411, 'Career Skills', CHAPTER, 'Exit financing structure',
    'A reorganized retailer is emerging from Chapter 11 with $400M of new term loan and an undrawn $150M ABL revolver. What is the function of exit financing?',
    'Exit financing replaces the DIP facility and funds working capital and growth after emergence, sitting on the reorganized capital structure alongside the new equity and any reinstated debt that survives the plan',
    [
      ['Exit financing is a special form of DIP loan that continues after the case', 'DIP and exit are structurally different — the DIP terminates at emergence; exit financing is the new post-emergence capital structure, often syndicated separately and with different lenders.'],
      ['Exit financing is required by law for every Chapter 11 case', 'Many cases emerge without new debt — the reorganized company can be all-equity, or reinstated pre-petition debt can be the only debt at emergence. Exit financing is a financing choice, not a legal requirement.'],
      ['Exit financing is provided by the same DIP lender at the same terms', 'The DIP and exit are often raised competitively from different markets — DIPs are short-term super-priority paper, exits are longer-dated par-trading instruments. The lender groups overlap but the structures and pricing diverge.'],
    ],
    'Exit financing is what makes a reorganized company functional on day one — it gives the new entity working capital, refinances the DIP, and signals to the market that the post-emergence capital structure is investable. Analysts modeling recovery should always look at the post-emergence cap stack, not just the pre-petition one.'),

  q(4410412, 'Career Skills', CHAPTER, 'Chapter 7 trustee duties',
    'A retailer files Chapter 7 instead of Chapter 11. What are the trustee\'s primary duties?',
    'The Chapter 7 trustee takes control of the estate, liquidates assets, investigates the debtor and any avoidable transfers, and distributes proceeds to creditors strictly in priority order under the Code',
    [
      ['The Chapter 7 trustee tries to restructure the business and reorganize it', 'Restructuring is Chapter 11. Chapter 7 is liquidation — the trustee\'s job is to maximize asset value through sale and distribute the proceeds, not to keep the business operating long term.'],
      ['The Chapter 7 trustee represents the debtor and is hired by management', 'The trustee is appointed by the court (often from a panel) and is independent of the debtor. Management generally loses operational control on the filing date.'],
      ['The Chapter 7 trustee distributes proceeds proportionally to all creditors regardless of priority', 'Priority is the foundation of the distribution — secured, then administrative, then priority claims, then general unsecured, then equity. Pro-rata only applies within a class.'],
    ],
    'A Chapter 7 trustee is the liquidator of the estate — distinct from a Chapter 11 debtor-in-possession that keeps operating. Knowing which procedure applies sets expectations for timing, recovery, and going-concern value.'),

  // -------------------------------------------------------------------------
  // ABSOLUTE PRIORITY RULE (4410413–4410417)
  // -------------------------------------------------------------------------
  q(4410413, 'Career Skills', CHAPTER, 'APR ordering basics',
    'Under the absolute priority rule (APR) in US bankruptcy, what is the order in which claims are paid out of the estate in a non-consensual plan?',
    'Administrative and priority claims first, then secured claims to the extent of collateral value, then unsecured claims, then subordinated claims, and finally equity — each class must be paid in full before the next class receives anything',
    [
      ['Equity is paid first because the company belongs to the shareholders', 'Equity is paid last in liquidation and reorganization. The whole point of the APR is that creditors have prior claims on the assets they financed.'],
      ['All creditors share equally pro rata regardless of seniority', 'Pro-rata sharing only applies within a class of equal-ranking claims. Across classes, priority strictly governs — that is the rule.'],
      ['Secured creditors are paid only after unsecured creditors because liens are restructured first', 'The opposite is true — secured creditors are paid first up to their collateral value precisely because they bargained for the lien. The APR codifies that bargain.'],
    ],
    'The absolute priority rule is the spine of recovery analysis. Every credit decision in distress — buy the loan, hold the bond, sell the equity — implicitly asks where in this stack the security sits and what is left for the next class down.'),

  q(4410414, 'Career Skills', CHAPTER, 'Gifting around the rule',
    'In a Chapter 11 plan, senior secured lenders agree to "gift" 5% of their plan equity recovery to unsecured creditors to win their consent, even though unsecured creditors are not entitled to anything under the strict APR waterfall. What is happening?',
    'Senior lenders are voluntarily redirecting some of their own recovery to junior creditors to buy plan support and avoid litigation — courts permit gifting because it is the senior class giving up its own value, not estate value out of order',
    [
      ['The court is overriding the absolute priority rule because the unsecured class threatened to litigate', 'Courts do not generally override APR. Gifting works because the senior class gives away its own consideration after the waterfall would otherwise allocate it — APR is satisfied by the time the gift happens.'],
      ['Unsecured creditors are entitled to the gift under a separate provision of the Code', 'There is no Code provision that entitles unsecured creditors to gifted value. The transfer is contractual, driven by the senior class\'s desire for speed and plan support.'],
      ['Gifting is illegal and the plan would be rejected', 'Gifting between senior creditors and unsecured classes (skipping equity) is widely accepted. The contested area is gifting that skips classes or benefits equity over senior creditors.'],
    ],
    'Gifting is the practical workaround that lets restructurings get done without years of litigation. Senior creditors give up a small slice of their own recovery to buy junior consent — the APR is preserved because seniors are giving away what was already theirs.'),

  q(4410415, 'Career Skills', CHAPTER, 'Equity recovery rare under APR',
    'A distressed credit analyst hears that equity in a Chapter 11 case is "very likely to be wiped." Why is this typically the case under the absolute priority rule?',
    'Companies file Chapter 11 because debt exceeds enterprise value, which means by definition value runs out before reaching the equity class — under APR, equity is last and only recovers when every senior class is paid in full',
    [
      ['The court orders equity to be cancelled as a punishment for the failure', 'Equity is cancelled because it has no economic claim left after senior creditors are made whole, not as a sanction. Bankruptcy law is economic, not punitive.'],
      ['Equity is wiped because shareholders never participate in Chapter 11 cases', 'Equity holders participate procedurally (and occasionally get token recovery), but their recovery is dictated by where value breaks, not by their level of engagement.'],
      ['Equity is replaced with new equity owned by management as part of compensation', 'Management often gets a Management Incentive Plan (MIP) post-emergence, but that is separate from old equity recovery. Pre-petition shareholders are typically wiped regardless of who gets the new MIP.'],
    ],
    'Equity recovery in Chapter 11 is uncommon for a structural reason — companies file when they are insolvent, so enterprise value rarely covers the debt and never reaches equity unless something unusual happens (rising EV during the case, settlement, or surplus liquidation).'),

  q(4410416, 'Career Skills', CHAPTER, 'Cram-down on dissenting class',
    'A plan of reorganization gets unanimous support from secured creditors but the unsecured class votes to reject. The debtor wants to confirm the plan anyway through a "cram-down." What does cram-down require?',
    'The plan can be confirmed over the dissenting class only if it does not "discriminate unfairly" and is "fair and equitable" — for unsecureds, that typically means the APR is satisfied (no class junior receives anything until unsecureds are paid in full, with some exceptions)',
    [
      ['Cram-down requires the court to override the dissenting class vote with a simple majority of judges', 'There is one judge per case, and the cram-down test is about plan content, not judicial voting. The standards are fairness and APR compliance, not majority overrule.'],
      ['Cram-down requires the debtor to pay the dissenting class an extra premium', 'There is no statutory premium for dissenters. The protection is structural — APR ensures no junior class jumps the line, which is the dissenter\'s real concern.'],
      ['Cram-down is not allowed; every class must vote to accept the plan', 'Cram-down is explicitly authorized in Section 1129(b) of the Code. Without it, any single class could veto restructuring, which would make Chapter 11 unworkable.'],
    ],
    'Cram-down is the mechanism that prevents one class from holding the plan hostage. The "fair and equitable" test essentially codifies APR — dissenters cannot block confirmation, but the plan must respect priority.'),

  q(4410417, 'Career Skills', CHAPTER, 'New value exception',
    'A pre-petition shareholder offers to contribute $50M of new equity capital to the reorganized company in exchange for keeping a portion of the new equity, even though unsecured creditors are being paid less than in full. Is this allowed under the APR?',
    'It may be allowed under the narrow "new value" exception only if the contribution is new, substantial, money or money\'s worth, necessary for the plan, and reasonably equivalent to the equity received — and the courts have constrained it tightly post-LaSalle',
    [
      ['Pre-petition equity can always retain ownership by contributing new capital', 'The Supreme Court in LaSalle (1999) constrained new-value heavily — it cannot be a unilateral right of old equity, and competing bids are typically required if the right is offered at all.'],
      ['New value is prohibited by the Code under all circumstances', 'New value is not in the Code as a defined exception but has been recognized by courts in limited circumstances. "Prohibited" is the wrong frame; "narrowly available" is closer.'],
      ['The contribution is automatically approved if creditors agree by simple majority', 'Class votes alone do not validate new-value contributions — the court still tests the substantive criteria, and senior creditors typically negotiate the terms heavily.'],
    ],
    'The new-value exception is the only realistic path for pre-petition equity to retain ownership in a cram-down case, and it is hard to satisfy. The combination of substantive criteria and post-LaSalle scrutiny means most plans wipe old equity rather than try this route.'),

  // -------------------------------------------------------------------------
  // RECOVERY ANALYSIS (4410418–4410423)
  // -------------------------------------------------------------------------
  q(4410418, 'Career Skills', CHAPTER, 'Going-concern vs liquidation',
    'A distressed retailer has $1.5B of debt, generates $200M of EBITDA, and would liquidate for $700M (inventory + IP + real estate). What framework determines the recovery basis?',
    'Going-concern value compares the present value of future cash flows under continued operation to liquidation value; the higher floor anchors recovery, and creditors generally receive the better of the two outcomes',
    [
      ['Recovery is always determined by liquidation value because bankruptcy means winding down', 'Many Chapter 11 cases produce going-concern recoveries well above liquidation values — that is precisely why companies file Chapter 11 rather than Chapter 7 when going concern is more valuable.'],
      ['Recovery is always determined by face value of debt because creditors are owed par', 'Face value is the claim amount, not the recovery. Recovery depends on enterprise value, which can be well below face — that is what makes the debt distressed.'],
      ['Recovery is the average of going-concern and liquidation values', 'The basis is one or the other (or a hybrid for some assets), not an average. Mechanical averaging hides the analytical question of which scenario actually applies.'],
    ],
    'Going-concern vs liquidation is the first decision in recovery analysis. The numbers are usually quite different — a viable business is worth more operating than scrapped, and creditors negotiate over which scenario applies and at what value.'),

  q(4410419, 'Career Skills', CHAPTER, 'Enterprise value at exit anchor',
    'In a recovery model, exit EV is built as $250M EBITDA × 6.5x multiple = $1.625B, less restructuring costs and DIP repayment. What is the role of the exit EBITDA × multiple anchor?',
    'It estimates the value of the reorganized enterprise post-emergence, which is the pie that gets distributed to creditors through the waterfall — a too-high EBITDA or multiple inflates recovery assumptions for every tranche',
    [
      ['Exit EV is the price the company was sold for in the asset sale', 'Exit EV is a modeled valuation of the going concern at emergence — it may be implied by plan equity value, not the proceeds of a sale. Sale outcomes and going-concern EVs serve different purposes.'],
      ['Exit EV is the same as the company\'s pre-petition enterprise value', 'Pre-petition EV reflects the troubled business with the old capital structure; exit EV reflects the reorganized business after restructuring costs, with the new structure. They are usually different.'],
      ['Exit EV does not affect recovery because the waterfall is paid in cash', 'Most modern restructurings distribute new equity in the reorganized entity, not cash. The valuation of that equity (driven by exit EV) is the recovery for most classes below the secured.'],
    ],
    'Exit EV is the anchor that determines what each creditor class actually receives. Even small changes in EBITDA assumption or multiple flow directly into recovery percentages — which is why both the debtor and creditors fight hard over the inputs in plan negotiations.'),

  q(4410420, 'Career Skills', CHAPTER, 'Recovery waterfall by tranche',
    'A reorganized company has $1.0B enterprise value at exit. The pre-petition stack is $400M first-lien term loan, $300M second-lien notes, $400M unsecured bonds, $100M of trade payables. Administrative claims are $50M. What does each tranche recover (rough)?',
    'Admin $50M paid in full, first-lien $400M paid in full (covered by remaining $950M), second-lien recovers in full to $300M ($650M residual after first-lien), unsecured + trade share $350M against $500M claims for ~70% — equity wiped',
    [
      ['Each tranche recovers proportional to its face — first-lien 80%, second-lien 80%, unsecured 80%', 'Pro-rata-by-face ignores the entire APR. Senior classes go first and unsecureds get only the residual; the recoveries are decidedly not equal.'],
      ['First-lien recovers everything and all other classes are wiped because of seniority', 'First-lien is just $400M of a $1.0B EV — once the seniors are made whole, there is still $550M to distribute down the stack. Seniors do not absorb residual value once their claim is paid.'],
      ['Trade payables are paid first ahead of secured debt because they are operational', 'Trade payables are typically general unsecured claims (unless critical-vendor orders apply at the start of the case). They rank with bondholders, not ahead of secured creditors.'],
    ],
    'Waterfall math is mechanical: subtract admin, then pay each class in priority order until the EV runs out. The class where value breaks (here, the unsecureds) is the fulcrum, and gets new equity in the reorganized company instead of cash recovery.'),

  q(4410421, 'Career Skills', CHAPTER, 'Where value breaks in the stack',
    'A debtor\'s pre-petition stack is $500M first-lien, $400M second-lien, $600M unsecured. EV at exit is estimated at $850M. Where does value break, and what are the recovery implications?',
    'Value breaks inside the second-lien — first-lien is fully covered ($500M of $850M), second-lien recovers $350M of $400M (~88%), and unsecureds are wiped; the second-lien is the fulcrum security and gets the new equity',
    [
      ['Value breaks inside the first-lien, so first-lien gets the new equity', 'First-lien is fully covered ($500M is well inside $850M EV), so it is paid in cash or reinstated. Value cannot break in a class that recovers in full.'],
      ['Value breaks inside the unsecureds — they get the new equity and second-lien gets cash', 'For unsecureds to be the fulcrum, value would need to extend past $900M (first + second-lien at face). At $850M EV, value runs out inside second-lien, so unsecureds are the wipe class, not the fulcrum.'],
      ['Value breaks evenly across all classes pro-rata to face', 'Pro-rata-by-face is the violation of APR that the rule exists to prevent. The break happens at a specific point in the stack, not across all classes.'],
    ],
    'Finding the value-break point is the central analytical move in distressed credit. The class where value runs out is the fulcrum — they get the residual upside in the new equity, and classes below are wiped while classes above are made whole.'),

  q(4410422, 'Career Skills', CHAPTER, 'Liquidation discount on inventory',
    'A liquidation analysis for a specialty apparel retailer values inventory at 35% of book, real estate at appraised value, and IP at $0. Why is the inventory haircut so severe?',
    'Apparel inventory in liquidation is sold through going-out-of-business sales at deep markdowns — discounts of 50-80% off retail are typical, plus liquidator fees and shrinkage, which produces realization rates in the 25-45% range against book',
    [
      ['Inventory is always written down to zero in liquidation', 'Inventory has real residual value — it gets sold, just at discounts. Writing it to zero understates liquidation recovery and produces unrealistic worst-case numbers.'],
      ['Inventory is always recovered at full book because it has been sold before', 'Going-concern book value assumes orderly retail sales over a normal season. Liquidation compresses that into weeks at deep discounts — the value collapses, not stays at book.'],
      ['The 35% rate is a regulatory minimum set by the bankruptcy court', 'Liquidation recovery rates are empirical estimates from comparable cases and liquidator quotes, not regulatory floors. The court does not set recovery rates.'],
    ],
    'Inventory liquidation rates depend heavily on category, age, and seasonality. Apparel, electronics, and seasonal goods take big haircuts; commodity goods (parts, hardware) recover more. Analysts should anchor liquidation values in comparable case data, not assumptions.'),

  q(4410423, 'Career Skills', CHAPTER, 'Goodwill in liquidation',
    'A liquidation analysis assigns $0 of value to the $1.2B of goodwill carried on the balance sheet. Why?',
    'Goodwill is an accounting residual reflecting prior acquisition premiums; in liquidation, the going-concern value that goodwill represented evaporates because there is no continuing business, so it realizes nothing in a sale of assets',
    [
      ['Goodwill always realizes book value because it is on the balance sheet', 'Book carrying value reflects accounting, not recoverable cash. Goodwill is paid by an acquirer for a going concern; once the going concern is gone, the premium evaporates.'],
      ['Goodwill is paid first in liquidation as an intangible priority claim', 'Goodwill is an asset on the books, not a claim against the estate. It cannot have priority because it is on the wrong side of the balance sheet.'],
      ['Goodwill is recovered at 50% of book in most liquidation cases', 'There is no general rule that delivers 50% on goodwill. In Chapter 7 liquidation it is essentially $0; in going-concern transactions, the going-concern multiple captures it but the goodwill line itself is not separately monetized.'],
    ],
    'Goodwill is a great example of why liquidation analysis often produces values far below balance-sheet book — the intangibles that make a business worth more than its assets only have value as a going concern.'),

  // -------------------------------------------------------------------------
  // LIABILITY MANAGEMENT (4410424–4410427)
  // -------------------------------------------------------------------------
  q(4410424, 'Career Skills', CHAPTER, 'Out-of-court exchange vs prepack',
    'A distressed issuer is choosing between an out-of-court exchange offer and a pre-packaged Chapter 11 (prepack). What is the structural tradeoff?',
    'Out-of-court exchanges require very high voluntary participation (typically 95%+ for bonds via consents) and leave holdouts in place; a prepack uses court binding to capture holdouts but adds public process, professional fees, and time on the docket',
    [
      ['Out-of-court is always cheaper than a prepack', 'Out-of-court avoids court fees but often requires more aggressive consent terms (consent fees, exit consents) to get to the threshold. The all-in costs are not always lower than a prepack.'],
      ['Prepacks are slower and harder than traditional Chapter 11 cases', 'Prepacks are explicitly designed to be fast — votes are solicited pre-filing, hearings are compressed, and emergence often takes weeks rather than months. They are faster than traditional Chapter 11, not slower.'],
      ['Out-of-court exchanges and prepacks are functionally identical', 'They are not — one is consensual contract restructuring, the other is a court-supervised plan with cram-down authority. The legal mechanics produce different leverage and outcomes.'],
    ],
    'The out-of-court vs prepack choice usually comes down to holdout risk. If the issuer can clear 95%+ participation, out-of-court preserves value and avoids court; if a meaningful minority resists, the prepack\'s cram-down power becomes the only way to get the deal done.'),

  q(4410425, 'Career Skills', CHAPTER, 'J.Crew trapdoor',
    'In the J.Crew (2017) liability management transaction, the company moved intellectual property out of the restricted credit group through baskets in the loan documents, used the IP as collateral for new debt, and bought back existing debt at a discount. What was the credit lesson?',
    'Loose covenant baskets and unrestricted-subsidiary language can let issuers move valuable collateral outside the credit group ("trapdoor"), priming existing lenders without their consent — credit analysts must read documents for trapdoor mechanics, not just headline covenants',
    [
      ['The J.Crew trapdoor was illegal and the court reversed it', 'The transaction relied on existing document baskets and was not reversed by a court. The lesson is that the documents permitted the move — which is why subsequent loan documents added "J.Crew blockers" to prevent similar moves.'],
      ['The transaction had no effect on existing lenders because IP value was minimal', 'IP was the brand — material collateral for a retailer. The transaction moved valuable assets outside the credit group, materially impairing recovery for existing lenders.'],
      ['The transaction was a routine refinancing under standard covenants', 'It was anything but routine — it became a defining case for how loose docs can be weaponized. Saying it was routine is the exact analytical error the case teaches against.'],
    ],
    'J.Crew is the foundational case study for document risk in leveraged finance. The transaction was technically permitted by the docs, which is precisely the point — credit work has to model covenant baskets, not assume good behavior from the borrower.'),

  q(4410426, 'Career Skills', CHAPTER, 'Uptier exchange (Serta/Mitel)',
    'In Serta Simmons (2020) and Mitel (2022), a majority lender group amended the credit agreement to authorize a new super-priority tranche and exchanged into it at par, leaving non-participating lenders subordinated below them. What did these "uptier" transactions teach the market?',
    'Majority-lender voting provisions and weak sacred-rights protections can let a coordinated lender group prime co-lenders into a junior position through a credit agreement amendment, fragmenting what looked like a pari-passu class into senior and subordinated buckets',
    [
      ['The transactions are automatically void whenever non-participating lenders object', 'Litigation outcomes have been mixed and ongoing. Courts have permitted some uptiers and blocked others; the takeaway is that the legal risk is real, not that the transactions are always void.'],
      ['Uptiers always require unanimous lender consent', 'The whole point is that they did not — the majority used standard credit-agreement amendment thresholds (50.1%) to authorize the new tranche, with non-participating lenders unable to block.'],
      ['Uptiers affect only the borrower, not the lenders\' recoveries', 'The opposite — uptiers materially shift recovery between lenders, moving non-participants below the new super-priority tranche. They are precisely a redistribution among the lender class.'],
    ],
    'The uptier wave revealed that "pari passu" is a contract term, not an economic guarantee. Lenders who do not read amendment-vote mechanics and sacred-rights provisions can find themselves subordinated to former equals — which is why post-Serta documents added uptier protections.'),

  q(4410427, 'Career Skills', CHAPTER, 'Carvana out-of-court precedent',
    'In 2023, Carvana negotiated an out-of-court debt exchange with the majority of its bondholders, swapping unsecured notes for new secured notes with reduced principal and extended maturities. What did this achieve relative to a Chapter 11?',
    'It restructured leverage and pushed out maturities while avoiding the cost, public scrutiny, and operational disruption of a bankruptcy filing — feasible because Carvana achieved high enough bondholder participation to make a consensual deal',
    [
      ['Carvana filed for Chapter 11 to do the exchange', 'Carvana explicitly avoided Chapter 11 in 2023. The transaction was an out-of-court liability management trade, which is what made it notable as a recent case study.'],
      ['Out-of-court exchanges are not used by US issuers because of holdout risk', 'They are used routinely — Carvana, J.Crew (early), Envision, Talen, and many others. Holdout risk is real but not prohibitive when participation thresholds can be hit.'],
      ['The exchange was a recapitalization of equity, not a debt restructuring', 'The transaction touched the bondholders specifically — par-for-discount exchanges into new debt. Equity was a separate question; this trade was a debt deal.'],
    ],
    'Carvana 2023 is a recent template for distressed issuers — when the company has time, operational stability, and bondholder cooperation, an out-of-court trade can fix the balance sheet without a filing. The opposite case (low cooperation or imminent maturity) drives borrowers into Chapter 11 instead.'),

  // -------------------------------------------------------------------------
  // TRADING THE DISTRESSED CYCLE (4410428–4410432)
  // -------------------------------------------------------------------------
  q(4410428, 'Career Skills', CHAPTER, 'Par-to-80 deterioration trigger',
    'A leveraged loan has dropped from par (100) to 78 over six weeks on no formal news. A distressed-credit fund is deciding whether to engage. What does the par-to-80 move typically signal?',
    'The first move from par into the 80s usually reflects credit deterioration the market is pricing ahead of a formal trigger — covenant pressure, refi worry, earnings miss — and is the entry point for credit-focused distressed funds doing fundamental work',
    [
      ['Par-to-80 means the credit is already in bankruptcy', 'Bankruptcy filings typically print loan prices in the 50-70 range or lower (depending on recovery expectations). 78 is pre-filing distress, not post-filing.'],
      ['Par-to-80 is just noise and should not change the credit view', 'A 22-point drop in weeks is not noise — it is the market pricing material credit risk. Ignoring it is the error.'],
      ['Par-to-80 means the loan is near full recovery on default', 'Recovery on default is determined by enterprise value and capital structure, not by the secondary trading price before default. A 78 quote tells you the market\'s expected probability-weighted outcome, not the actual recovery.'],
    ],
    'The par-to-80 zone is where credit funds running fundamental distressed strategies typically engage — far enough below par that the move is meaningful, but early enough that the credit story is still forming. The work is fundamental analysis of recovery and reorganization paths.'),

  q(4410429, 'Career Skills', CHAPTER, '80-to-50 reorg play',
    'A bond trades from 78 down to 52 over three months as the borrower hires restructuring advisors and engages bondholder counsel. What does the 80-to-50 zone typically reflect?',
    'The market is pricing in a near-certain restructuring and is estimating where recovery will land — the bond is moving from "distressed credit" to "restructuring play" and trading on expected reorganization economics, not coupon and yield',
    [
      ['80-to-50 is the same trading band as par-to-80 and reflects the same view', 'The driver shifts — par-to-80 prices deterioration probability, 80-to-50 prices reorganization outcome. The analytical framework moves from credit to restructuring.'],
      ['A bond in the 50s means default has already occurred', 'Default may or may not have occurred — the price reflects expected recovery. Many bonds trade in the 50s before any formal default as the market anticipates the outcome.'],
      ['Bonds in the 50s are too risky for distressed funds', 'They are the core of where distressed funds operate. Funds specialized in reorganization play in this band, sizing positions based on expected recovery analysis.'],
    ],
    'The 80-to-50 zone is the heart of restructuring trading — the market has accepted that a default is likely and the question becomes recovery. Funds active here build detailed waterfall models and engage with the legal process directly.'),

  q(4410430, 'Career Skills', CHAPTER, '50-to-30 fulcrum bucket',
    'A second-lien note has traded from 52 to 34 as the restructuring negotiations intensify and the senior lenders propose a plan that gives them most of the new equity. What does the 50-to-30 zone usually represent?',
    'Securities in this range are often near the value-break point — they may receive partial recovery or be the fulcrum security that converts to new equity, so the trade is a play on which class breaks the value and how much equity each class receives',
    [
      ['Anything below 50 is worthless and not worth analyzing', 'The opposite — sub-50 prices are precisely where fulcrum-security analysis pays off. The work is harder, but the upside on a correct read is meaningful.'],
      ['50-to-30 means the security has already been cancelled', 'Cancellation is post-plan-confirmation. The trading price reflects expected plan economics, which is upstream of any formal cancellation.'],
      ['50-to-30 is for arbitrage between bonds of the same issuer, not credit analysis', 'Intra-issuer relative value (cap structure arb) does happen here, but the dominant play is fulcrum identification — figuring out which class converts to equity at what valuation.'],
    ],
    'The 50-to-30 zone is the fulcrum-security band where the most analytical alpha exists in distressed credit. The fund that correctly identifies which class breaks the value and at what EV captures the new-equity upside from a low cost basis.'),

  q(4410431, 'Career Skills', CHAPTER, 'Sub-30 equity option',
    'An unsecured note trades at 22, well below the value break implied by the consensus EV. A distressed fund buys it as an "option on the equity." What is the rationale?',
    'At deeply distressed prices, the bond becomes a cheap option on upside — if EV expands during the case (sector recovery, asset sales, strategic interest), the bond can recover much more than expected; the downside is bounded by the current low price',
    [
      ['Sub-30 bonds are inherently worthless and should always be sold', 'Sub-30 trades happen because the market sees deep risk, not because the security is worthless. Hertz unsecureds traded sub-30 and recovered 100%+ when EV expanded in 2020.'],
      ['Sub-30 means the bond will recover par at maturity', 'Sub-30 is the market pricing in low recovery in restructuring. Par recovery would require a dramatic shift in the credit story, which is the option the buyer is paying for.'],
      ['Sub-30 trades are insider-information-driven and not available to credit funds', 'Sub-30 prices are public market quotes available to any holder. The information advantage in distressed comes from credit and legal analysis, not insider information.'],
    ],
    'Sub-30 distressed positions function as low-cost options on upside scenarios — sector recovery, surprise asset sales, court rulings, or DIP-financing dynamics that lift EV during the case. The Hertz 2020 outcome (sub-30 bonds, eventual par+) is the textbook example.'),

  q(4410432, 'Career Skills', CHAPTER, 'Hertz 2020 equity surprise',
    'During Hertz\'s 2020 Chapter 11, the unsecured bonds traded as low as the high-20s but ultimately received par-plus-accrued recovery when used-car prices spiked and EV expanded during the case. What is the credit lesson?',
    'EV is not fixed at filing — sector dynamics, asset price moves, and time can shift recovery materially during a case, which is why distressed funds engage on probability-weighted scenarios rather than a single point estimate',
    [
      ['Hertz proves that bankruptcy always produces full recovery', 'Hertz is the unusual case, not the rule. Most Chapter 11 cases wipe equity and give unsecureds partial recovery — Hertz was an outlier driven by the pandemic-era used-car spike.'],
      ['Hertz teaches that distressed bonds should never be sold', 'Hertz teaches that timing and scenario analysis matter. Many other cases recovered far less; the lesson is to analyze scenarios, not to hold blindly.'],
      ['Hertz was decided by the court overriding the bankruptcy code', 'Hertz was decided by EV expansion during the case — the priority waterfall worked exactly as written, just with a much bigger pie. The Code was not overridden.'],
    ],
    'Hertz 2020 is the modern reminder that distressed analysis is a scenario discipline. The same capital structure can produce a wipe or a par recovery depending on what happens to EV during the case — which is why funds run probability-weighted recovery models, not single-point estimates.'),

  // -------------------------------------------------------------------------
  // FULCRUM SECURITY IDENTIFICATION (4410433–4410436)
  // -------------------------------------------------------------------------
  q(4410433, 'Career Skills', CHAPTER, 'Fulcrum becomes the new equity',
    'In a Chapter 11 plan, the second-lien notes hold 75% of the new common equity, the first-lien is paid in cash from new exit financing, and unsecureds receive warrants. Why does the second-lien get most of the new equity?',
    'The second-lien is the fulcrum security — it sits at the point where enterprise value runs out, so it converts its claim into the residual equity of the reorganized business rather than receiving cash like the fully-covered first-lien',
    [
      ['Second-lien holders are paid in equity because they negotiated a better deal than the first-lien', 'It is not a negotiation outcome — it is a structural one. The fulcrum class always receives the residual equity because that is what is left after senior classes are made whole.'],
      ['Second-lien gets equity because secured creditors always receive equity in Chapter 11', 'First-lien is also secured but received cash. The driver is not the secured/unsecured label — it is whether the class is fully covered (cash) or breaks the value (equity).'],
      ['Equity is randomly allocated to classes based on plan support', 'Allocation follows the value break, not random plan support. Voting affects whether the plan is confirmed, not the structure of who gets equity.'],
    ],
    'The fulcrum class converts its claim into new equity by structural necessity — there is no cash to pay them in full, and there are no junior classes with a higher claim. Identifying which class plays this role is the central question in distressed analysis.'),

  q(4410434, 'Career Skills', CHAPTER, 'Value-break analysis',
    'Cap structure: $600M first-lien at par, $400M second-lien trading at 60, $500M unsecured trading at 15. Sell-side EV estimate is $850M. Where does the analyst conclude value breaks, and which security is the trade?',
    'Value breaks inside the second-lien ($600M senior + partial recovery of $250M to second-lien out of $400M); the second-lien at 60 represents about 60 cents on $1 face vs ~63 cents recovery implied — close to fair; the unsecured at 15 is a cheap option but unlikely to recover much',
    [
      ['Value breaks in the unsecureds because they trade the lowest and prices reflect reality', 'Trading price is not the same as where value breaks. The break is determined by EV vs the cap structure, not by the relative pricing. At $850M EV, unsecureds get nothing because value runs out in second-lien.'],
      ['Value breaks in the first-lien because it is the largest tranche', 'Size does not determine where the break is — priority and EV do. First-lien at $600M is fully covered by an $850M EV; the break is below them.'],
      ['Value-break analysis is unnecessary because the market already prices recovery correctly', 'Markets often misprice fulcrum securities — that is the alpha. Fundamental waterfall work catches mispricing the market has not yet incorporated.'],
    ],
    'Value-break analysis is the core of distressed credit work — compare estimated EV to the cap structure, find the class where the pie runs out, and price that class against its expected recovery. Both directions (overvalued or undervalued) generate trade ideas.'),

  q(4410435, 'Career Skills', CHAPTER, 'Why senior secured rarely fulcrum',
    'A first-lien term loan at $300M face trades at 96. Sell-side EV is $1.2B against $300M first-lien, $400M second-lien, $500M unsecured. Why is the first-lien very unlikely to be the fulcrum?',
    'First-lien is well inside the EV ($300M of $1.2B), which means it will be paid in cash or reinstated and is far above any value-break point — the fulcrum is structurally below it, in the second-lien or unsecureds depending on EV exactly',
    [
      ['First-lien always recovers par, by definition', 'First-lien recovers up to collateral value, which is not always par. In a low-EV scenario, first-lien can also take a haircut — they are senior, not guaranteed.'],
      ['First-lien is fulcrum because it has the largest claim', 'Fulcrum is about where value breaks, not which claim is largest. A large claim that is fully covered is not fulcrum.'],
      ['First-lien is never affected by restructuring outcomes', 'First-lien is affected — terms can change, maturities can extend, and in low-EV scenarios they can take haircuts. They are just less likely to be the fulcrum than junior classes.'],
    ],
    'Senior secured debt is rarely the fulcrum security because companies generally do not file Chapter 11 when senior secured is impaired by a small margin — they file when value breaks well below the senior layer. When it does happen (rare), it usually means a very deep distress scenario.'),

  q(4410436, 'Career Skills', CHAPTER, 'Subordinated notes as fulcrum example',
    'In a recent Chapter 11, the subordinated notes received 90% of the new common equity while the senior unsecured received warrants and a small cash payment. What did this structure imply about enterprise value?',
    'EV was just barely below the senior unsecured claim amount — the value broke right at the subordinated notes, making them the fulcrum even though they sit below senior unsecureds in priority',
    [
      ['Subordinated notes always get the new equity because they are last', 'Last in line is usually a wipe class, not the fulcrum. Subordinated notes only become fulcrum when EV happens to break exactly at their level, which is unusual but possible.'],
      ['Senior unsecureds preferred warrants and cash so they negotiated a better deal', 'Plan economics follow the value break, not negotiation preferences. If senior unsecureds were fully covered, they would have taken cash; the partial recovery says EV barely reached them.'],
      ['Subordinated notes were paid in equity as a punishment for being junior', 'Bankruptcy does not punish — it follows priority math. Subs got equity because that is what was left in the waterfall, not as a penalty.'],
    ],
    'Fulcrum identification works through the entire cap stack — even very junior classes can be the fulcrum if EV happens to break at their level. The analyst maps EV against face, finds the inflection, and prices accordingly.'),

  // -------------------------------------------------------------------------
  // DIP FINANCING ECONOMICS (4410437–4410439)
  // -------------------------------------------------------------------------
  q(4410437, 'Career Skills', CHAPTER, 'Super-priority claim',
    'A DIP facility is approved with "super-priority administrative claim" status under Section 364 of the Code. What does this priority status mean in practice?',
    'The DIP claim ranks ahead of all pre-petition unsecured claims and most other administrative claims for repayment from estate assets — it is the highest-priority class in the case, which is what enables new money to lend to a defaulted debtor',
    [
      ['Super-priority status means the DIP is paid from a government guarantee', 'There is no government guarantee in DIP financing — super-priority is a court-granted claim against the estate, funded by recovery from estate assets at exit.'],
      ['Super-priority is the same as secured status', 'They can overlap but are not identical — DIPs are usually secured AND super-priority. Super-priority is about claim ranking within the estate; security is about specific collateral pledges.'],
      ['Super-priority claims rank behind secured creditors with pre-petition liens', 'DIPs typically prime pre-petition liens through court order — that is part of why they are called super-priority. The DIP often sits above pre-petition secured as a matter of structure.'],
    ],
    'Super-priority status is the structural reason DIP lenders are willing to fund a company that just defaulted — they get the highest claim in the case, often with security, which makes the new money safe even when older money is impaired.'),

  q(4410438, 'Career Skills', CHAPTER, 'Roll-up of pre-petition debt',
    'A DIP facility includes a "roll-up" provision that converts $200M of the pre-petition revolver into part of the new DIP facility. Why do existing lenders insist on this structure?',
    'The roll-up upgrades $200M of pre-petition revolver exposure (general claim) into super-priority DIP claim status, materially improving the lenders\' position in the case and reducing their effective recovery risk on the old debt',
    [
      ['Roll-ups are a regulatory requirement for DIP facilities', 'Roll-ups are negotiated, not required. Many DIPs have no roll-up, and the size of any roll-up is a key negotiation point with the UCC.'],
      ['Roll-ups reduce the DIP\'s priority because old debt mixes with new money', 'Roll-ups elevate the pre-petition portion to DIP priority, not the other way around. The mix is upward, not downward — that is the whole appeal to the lender.'],
      ['Roll-ups are paid in cash immediately at filing', 'Roll-ups stay outstanding under the DIP and are repaid at exit (or earlier through a sale). Immediate cash repayment would defeat the purpose of the roll-up structure.'],
    ],
    'The roll-up is one of the most powerful tools DIP lenders use to improve their position in a restructuring. Analysts looking at recovery for pre-petition lenders should always check whether (and how much) of their exposure has been rolled into the DIP — it changes the math materially.'),

  q(4410439, 'Career Skills', CHAPTER, 'DIP for 363 sale financing',
    'A debtor enters Chapter 11 planning a quick 363 sale of substantially all assets within 90 days. The DIP is sized at $150M, just enough to fund operations through the sale. What is the role of the DIP here?',
    'The DIP bridges operations from filing to closing of the 363 sale — it funds payroll, vendors, and case professional fees during the sale process, with repayment from sale proceeds at closing, and is sized tightly to the milestone calendar',
    [
      ['The DIP is sized for two years of operations because that is the standard Chapter 11 timeline', 'DIP sizing follows the case plan, not a one-size-fits-all. A 363 sale case has a short DIP; a long reorganization has a larger DIP. Sizing to a 363 timeline is the point.'],
      ['The DIP funds the buyer\'s purchase of the assets, not the debtor\'s operations', 'The DIP funds the seller (debtor) through the sale process. The buyer\'s purchase price is separate — that goes to the estate through the 363 sale itself.'],
      ['The DIP is unnecessary in a 363-sale case because the buyer funds everything at closing', 'The closing comes after weeks or months of case work — the debtor needs operating cash in the interim. The DIP exists precisely to bridge filing to closing.'],
    ],
    'DIP sizing follows the case strategy. A 363-sale case needs a short, tightly-sized DIP that bridges to closing; a long reorganization needs a larger DIP that runs to plan confirmation. The DIP terms tell you the planned shape of the case.'),
]
