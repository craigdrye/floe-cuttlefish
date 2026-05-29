import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// IB CHAPTER 2 — Accounting and Financial Statement Links
// ----------------------------------------------------------------------------
// 42 new questions (IDs 4351100–4351141) extending the eight existing Ch2
// items in careerAgentGeneratedRoadmapFinance.ts under investmentBankingRoadmap
// (4103008, 4103009, 4105066, 4105067, 4107786, 4107787, 4340000, 4340001).
// The existing eight cover revenue bridge, circularity, balance-sheet plug,
// DSO forecasting, deferred revenue, working capital seasonality, capex
// split, and EBITDA add-back discipline. This file fills the rest of the
// chapter's analyst surface: three-statement linking, tax effects, deferred
// tax, SBC + EPS, working capital intuition, ASC 606 timing, goodwill,
// PP&E and capex schedules, debt schedules and revolver mechanics, minority
// interest, equity-method investees, restructuring, lease accounting under
// ASC 842, inventory under LIFO/FIFO, CFO buildup from net income, FCF
// definitions (FCFF vs FCFE), LBO/M&A normalization, NWC adjustment at
// close, purchase accounting and goodwill creation, and the NI → RE → BS
// equity link.
//
// Voice register: matches jargonBusters.ts IB section and the existing
// IB Ch2 questions in careerAgentGeneratedRoadmapFinance.ts. US-GAAP
// context throughout. Every wrong answer carries a bespoke whyWrong
// targeting a real analyst-level misconception, not a strawman.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe IB Ch2 canonical bank'
const CHAPTER = 'Accounting and Financial Statement Links'

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

// Difficulty distribution target: ~30% rated 3, ~50% rated 4, ~20% rated 5.
// 42 questions: 12 at 3 (≈29%), 21 at 4 (≈50%), 9 at 5 (≈21%).
export const IB_CH2_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  4351100: 3, // Depreciation flow IS → BS → CF
  4351101: 3, // D&A as non-cash addback in CFO
  4351102: 4, // Book vs cash taxes — current vs deferred
  4351103: 4, // DTL creation from accelerated tax depreciation
  4351104: 5, // DTA from NOL carryforward and valuation allowance
  4351105: 4, // SBC impact on EPS dilution (treasury stock method)
  4351106: 3, // SBC as a non-cash add-back on CFO
  4351107: 4, // DSO change and the cash-flow effect
  4351108: 3, // DIO intuition for a working-capital-heavy retailer
  4351109: 4, // DPO stretch and the trade-off with suppliers
  4351110: 4, // ASC 606 — when revenue lands vs when cash arrives
  4351111: 5, // ASC 606 contract modification — over-time vs point-in-time
  4351112: 3, // Goodwill — annual impairment test vs amortization
  4351113: 4, // Goodwill impairment — IS, BS, CF effects
  4351114: 4, // PP&E schedule — opening + capex − D&A = closing
  4351115: 4, // Capex spike and the cash-flow vs earnings divergence
  4351116: 3, // Debt schedule — mandatory amortization on the term loan
  4351117: 4, // Interest expense build — average vs ending balance
  4351118: 4, // Revolver mechanics — cash sweep direction
  4351119: 5, // Circular interest with iterative calc on/off
  4351120: 4, // Minority interest — consolidated revenue vs NI attribution
  4351121: 4, // Equity-method investment — IS line and BS roll-forward
  4351122: 3, // Restructuring charge — accrual vs cash timing
  4351123: 4, // One-time items — what survives EBITDA normalization
  4351124: 4, // ASC 842 — operating vs finance lease on the income statement
  4351125: 5, // ASC 842 — ROU asset and lease liability on the BS
  4351126: 4, // LIFO reserve interpretation in rising-cost environment
  4351127: 3, // FIFO vs LIFO — gross margin signal in inflation
  4351128: 4, // CFO buildup — NI + D&A − ΔNWC + other non-cash
  4351129: 3, // Unlevered FCF (FCFF) definition
  4351130: 4, // FCFE bridge from FCFF
  4351131: 5, // LBO normalization — owner perks and one-time items
  4351132: 4, // NWC peg mechanics at close
  4351133: 4, // Purchase accounting — write-ups on PP&E and intangibles
  4351134: 4, // Goodwill creation in an acquisition
  4351135: 3, // Retained earnings roll — NI − dividends
  4351136: 4, // Equity link — NI flows to RE, dividends do not hit IS
  4351137: 5, // Three-statement tie-out — change in cash equals ΔBS cash
  4351138: 4, // Pension — service cost on IS vs funding on CF
  4351139: 3, // AOCI — where unrealized AFS gains land
  4351140: 4, // Asset write-down — non-cash hit and CFO addback
  4351141: 5, // Capitalized software — IS smoothing and CF surface
}

export const ibCh2Questions: Question[] = [
  q(4351100, 'Depreciation flow IS to BS to CF',
    'A company adds a $100M factory with a 10-year straight-line life. In the first full year, what is the simultaneous effect on the income statement, balance sheet, and cash flow statement, ignoring taxes?',
    'IS: depreciation expense of $10M reduces operating income and net income by $10M; BS: PP&E net falls by $10M and retained earnings falls by $10M; CFS: $10M is added back as a non-cash expense inside CFO',
    [
      ['IS: $10M expense; BS: PP&E falls $10M; CFS: $10M cash outflow because depreciation is real cash leaving the business', 'Depreciation is not a cash expense. The cash left when the factory was bought (that was the prior-year investing outflow); annual depreciation is the accounting allocation of that earlier outflow.'],
      ['IS: no effect, depreciation lives only on the BS; BS: PP&E falls $10M; CFS: $10M cash outflow', 'Depreciation is an operating expense on the IS — it absolutely shows up there and reduces reported earnings. Pulling it off the IS is the classic interview slip.'],
      ['IS: $10M expense; BS: PP&E falls $10M with no equity impact; CFS: no entry needed', 'Net income falls $10M, which means retained earnings on the equity side must also fall $10M — otherwise the balance sheet would not balance. And the CFS has to add depreciation back inside CFO, or the cash bridge will break.'],
    ],
    'Depreciation is the canonical three-statement teaching moment: it lives on the IS as a real expense, depresses retained earnings via reduced NI, reduces PP&E net on the asset side (so the BS still balances), and gets added back inside CFO on the cash flow statement because no cash actually moved. If you can articulate all three legs, you can model the rest of the schedule.'),

  q(4351101, 'D and A as a non-cash addback in CFO',
    'On a sell-side QoE, the analyst sees $40M of net income, $25M of D&A, and $10M of increase in net working capital. Ignoring other items, what is approximate cash flow from operations?',
    'About $55M — start with $40M NI, add back $25M of non-cash D&A, then subtract the $10M NWC build because more working capital absorbs cash',
    [
      ['About $75M — net income plus D&A; NWC growth is irrelevant because it shows up on the balance sheet only', 'NWC absolutely flows through CFO. An increase in NWC (more receivables or inventory than payables) is a cash use, even though the offsetting balance-sheet entries are non-cash on their own.'],
      ['About $30M — net income minus D&A because D&A is an expense the business actually pays', 'D&A is non-cash by definition. You add it back to NI in the indirect method precisely because it depressed reported earnings without depressing cash.'],
      ['About $65M — net income plus D&A plus NWC, since growing NWC means the business is healthier', 'NWC growth is a cash drag, not a cash source. Customers paying slower (higher AR) or inventory building up uses cash; you subtract it, not add it.'],
    ],
    'The indirect CFO build is: start with NI, add back non-cash items (D&A, SBC, impairments, deferred tax), then subtract increases in operating assets and add increases in operating liabilities. Confusing the sign on NWC is the single most common CFO buildup mistake; remember "more AR or inventory = less cash today".'),

  q(4351102, 'Book vs cash taxes',
    'A company reports $200M of pretax income, a $50M book tax provision (25% effective rate), and a deferred tax liability that grew by $8M during the year. What was approximate cash tax paid?',
    'About $42M — book tax of $50M minus the $8M increase in DTL, since the DTL build represents tax expense recognized for book purposes but not yet paid in cash',
    [
      ['$50M — cash taxes equal the book tax provision because the IRS uses the same income statement', 'The IRS does not use book income. Tax returns are based on tax accounting (e.g., MACRS depreciation, different revenue timing), and the gap between book tax and cash tax shows up as deferred tax on the balance sheet.'],
      ['$58M — book tax plus the DTL increase, since the DTL represents future tax owed that the IRS demands now', 'A growing DTL means the company paid less to the IRS this year than the IS suggests, not more. The DTL is exactly the deferred portion — recognized on the IS, not yet handed over to the IRS.'],
      ['$25M — current taxes are usually half of book taxes because of accelerated depreciation', 'There is no "half" rule. The current/deferred split depends on the specific book-tax differences for the year; you cannot rule of thumb the cash tax bill without the schedule.'],
    ],
    'Book tax expense = current tax (cash) + deferred tax (non-cash). When the DTL grows, deferred tax expense is positive on the IS and cash tax is correspondingly lower than the provision suggests. Reversing that: cash tax ≈ book tax − ΔDTL + ΔDTA.'),

  q(4351103, 'DTL from accelerated tax depreciation',
    'A US company buys a $100M asset and uses straight-line book depreciation but bonus depreciation for tax purposes. In year 1 it deducts $100M for tax but only $10M for books. At a 25% rate, what happens on the balance sheet?',
    'A deferred tax liability of about $22.5M is created, reflecting the $90M timing difference times the 25% rate — taxable income was understated relative to book income now, but will be overstated later when book deductions continue and tax deductions are exhausted',
    [
      ['A deferred tax asset of $22.5M, because the company saved tax now and will owe more in the future', 'Saving tax now while creating a future obligation creates a *liability*, not an asset. DTAs arise when you have overpaid relative to book and will get the benefit back later (e.g., NOLs).'],
      ['Nothing changes on the BS — the cash tax saving is real and permanent', 'Bonus depreciation does not create a permanent saving; it accelerates the timing. The IRS will collect the difference back over future years as book depreciation continues without offsetting tax depreciation.'],
      ['Retained earnings is reduced by $90M to reflect the larger tax deduction', 'Retained earnings is driven by book net income, not tax deductions. The tax acceleration changes the cash tax line and creates a DTL — it does not touch book NI directly.'],
    ],
    'DTLs come from book income temporarily higher than taxable income — most commonly because the IRS lets you depreciate faster than your books do. The DTL reverses as the timing difference unwinds. Confusing DTL with DTA (or thinking the saving is permanent) are the two classic analyst slips here.'),

  q(4351104, 'DTA from NOL with valuation allowance',
    'A target has $200M of cumulative net operating loss carryforwards. At a 25% federal rate this is theoretically a $50M deferred tax asset. The company has not been profitable for five years. How should the analyst think about the DTA on the BS?',
    'The DTA may be carried at less than $50M, or fully offset by a valuation allowance, because GAAP requires that a DTA only be recognized to the extent it is "more likely than not" to be realized — and a five-year loss history is strong evidence that future taxable income may not exist',
    [
      ['The full $50M DTA should appear on the BS because NOLs are a legal right to reduce future taxes', 'Legal right is not the same as recognizable accounting asset. GAAP requires a "more likely than not" realization test, and persistent losses trigger a valuation allowance that can wipe out most or all of the DTA on the books.'],
      ['No DTA is recognized because NOLs are off-balance-sheet items disclosed only in the footnotes', 'NOLs do create a DTA — they are on the balance sheet, just subject to a valuation allowance. The footnote disclosure describes the schedule, but the DTA itself is a recognized asset (gross of the allowance).'],
      ['The DTA should be $200M because NOLs reduce taxable income dollar-for-dollar', 'The DTA is the *tax-effected* NOL — $200M NOL times the marginal tax rate, not the gross NOL itself. Carrying the gross figure on the BS would double-count the benefit.'],
    ],
    'Deferred tax assets from NOLs are real but conditional. The valuation allowance is the GAAP mechanism that prevents a balance sheet from showing tax benefits the company is unlikely to ever use. In LBO and M&A models, the buyer also has to check IRC §382 limitations on how fast the acquired NOLs can be used post-change-of-control.'),

  q(4351105, 'SBC on EPS via treasury stock method',
    'A company has 100M basic shares outstanding and 10M outstanding employee stock options with a $20 strike. The current stock price is $50. Approximately how does the treasury stock method affect diluted share count?',
    'Diluted share count rises to about 106M — the 10M options would generate $200M of cash at exercise, which "repurchases" 4M shares at the $50 market price, leaving a net 6M dilutive shares added',
    [
      ['Diluted share count rises to 110M because every outstanding option becomes a share', 'That is the gross addition without the treasury stock offset. GAAP assumes the company uses the option proceeds to buy back stock at market, so the dilution is net.'],
      ['Diluted share count stays at 100M because options are non-cash and do not affect dilution', 'Options absolutely dilute. SBC may be non-cash for CFO purposes, but the underlying instruments create real claims on future equity that count in diluted EPS.'],
      ['Diluted share count drops to 96M because the strike payments increase the treasury balance', 'The strike payments do generate cash, but the math is that the company *retires* stock with those proceeds. Net effect is a smaller dilutive increment, not a reduction below the starting basic count.'],
    ],
    'The treasury stock method asks: if every dilutive instrument were exercised, how many net new shares would actually hit the float after the company "spends" the proceeds buying its own stock back at market? In-the-money options with strikes well below market are highly dilutive; deeply out-of-the-money options are anti-dilutive and excluded.'),

  q(4351106, 'SBC as non-cash add-back',
    'A SaaS target reports $100M of GAAP net income and $40M of stock-based compensation. The buyer is building a CFO bridge. How should SBC be treated?',
    'Add SBC back inside CFO as a non-cash expense, because no cash leaves the company when shares are issued to employees — but flag for the diligence team that SBC is real economic dilution and an EBITDA "adjustment" for SBC is more controversial than it first appears',
    [
      ['Subtract SBC inside CFO because SBC represents a real future obligation that the company will have to settle in cash', 'SBC is settled in shares, not cash, by definition. The cash impact comes only if the company repurchases stock to neutralize dilution — a separate financing decision.'],
      ['Ignore SBC entirely because it is already deducted in operating expenses on the IS', 'SBC is deducted on the IS, which is why it reduced NI in the first place. The CFO buildup then *adds it back* because no cash moved — exactly the mechanic for any non-cash expense.'],
      ['Add SBC back but only the portion vested during the year, leaving unvested SBC off the cash bridge', 'GAAP recognizes SBC expense over the vesting period using grant-date fair value. The expense flowing through the IS in any given year is already the vested-during-period portion, and that whole figure is the add-back.'],
    ],
    'SBC is a textbook non-cash add-back, but high-quality analysts flag the trap: many SaaS targets pitch "EBITDA before SBC" as the run-rate number, which over-flatters profitability because the dilution is real. Treating SBC consistently between EBITDA and EPS is one of the more-watched judgment calls in tech sell-sides.'),

  q(4351107, 'DSO change cash impact',
    'A company grows revenue from $500M to $600M and DSO moves from 45 days to 60 days. What is the approximate cash impact from receivables alone?',
    'AR rises from about $62M to $99M, a $37M build — that NWC use reduces CFO by about $37M relative to a flat-DSO scenario',
    [
      ['Cash impact is zero because revenue grew faster than DSO grew', 'Both effects use cash: more revenue means more receivables at any DSO, and rising DSO means even more receivables per dollar of revenue. The two compound, they do not offset.'],
      ['Cash benefit of about $20M because higher revenue means more collection coming in', 'Higher revenue does drive collections, but the question is the AR balance change — which is the *uncollected* portion. AR rising means cash is locked in the asset, not arriving.'],
      ['Cash impact of about $10M, computed as the DSO change times average daily sales', 'You can compute it that way, but you must apply the longer DSO to the *higher* revenue base. The naive calculation often uses the wrong revenue figure and understates the build.'],
    ],
    'AR = revenue × (DSO/365). When both revenue and DSO are rising, the AR build is the difference between (new revenue × new DSO/365) and (old revenue × old DSO/365). High-growth companies with deteriorating DSO are exactly where the CFO bridge starts to surprise the deal team.'),

  q(4351108, 'DIO intuition for a retailer',
    'A retailer carries 90 days of inventory on hand (DIO = 90). What does that mean operationally and what should the analyst watch in the working capital model?',
    'It means the company holds about three months of sales on its shelves and in distribution centers; the analyst should pressure-test whether DIO is stable, seasonal, or drifting up — rising DIO with flat revenue is a leading indicator of demand softness or markdown risk',
    [
      ['It means the company turns inventory three times per year, which is good for retail because higher turnover means more profit', 'Three turns is the right math, but "good" depends on the segment. Grocery turns 12+ times; specialty apparel may turn four times; auto parts may sit longer. Benchmarking matters more than the absolute number.'],
      ['It means inventory is 90% of revenue, which is a high asset-intensity warning', 'DIO is days, not a percentage of revenue. A 90-day DIO at 30% gross margin maps to inventory ≈ COGS × (90/365), not to 90% of sales.'],
      ['It means inventory is replaced every 90 days regardless of sales — this is a fixed cycle that does not move with demand', 'DIO is a derived metric, not a replenishment policy. It moves with sales velocity, purchasing decisions, and write-downs. Treating it as fixed misses exactly the diagnostic value.'],
    ],
    'DIO = inventory / COGS × 365. Watch the direction more than the level: stable or falling DIO in a growing business is healthy; rising DIO in a flat or shrinking business is the classic leading indicator that markdowns or write-offs are coming and the next quarter\'s gross margin will tell on the story.'),

  q(4351109, 'DPO stretch trade-off',
    'A target proposes extending DPO from 30 days to 50 days "to free up working capital". The buyer asks the analyst to evaluate. What is the right framing?',
    'Stretching DPO does free cash one-time as payables build, but creates two real costs: supplier relationships deteriorate, and the cash benefit reverses out the moment the company actually has to settle the longer-dated invoices — analysts should treat the gain as non-recurring and check whether key suppliers can withhold service',
    [
      ['It is a clean win — extending DPO is free working-capital financing from suppliers and has no real cost', 'Supplier financing is not free. Suppliers either price the longer terms into their next quote, reduce service levels, demand letters of credit, or in tighter cases stop shipping. The cash gain is real, the cost just lives in lines other than the AP balance.'],
      ['It does not affect cash flow because payables are a balance sheet item that does not touch the income statement', 'Changes in payables absolutely affect cash flow — that is the whole point of the working capital section of CFO. The IS impact is indirect (via supplier price increases over time), but the cash impact is immediate and direct.'],
      ['It hurts cash flow because the company is now paying more in supplier interest', 'There is no explicit interest in a normal supplier payable. The cost shows up as worse pricing, reduced service, or lost discount — not as an interest line.'],
    ],
    'DPO stretching is one of the most-pitched "working capital improvements" in QoE narratives and one of the most-questioned in diligence. The cash benefit is one-time (the balance steps up once), the operational cost is recurring, and a target that has *already* stretched DPO has often used up that lever before the buyer arrives.'),

  q(4351110, 'ASC 606 revenue vs cash',
    'A SaaS company signs a $1.2M three-year contract billed annually at $400K per year. The customer pays the first $400K invoice on day one. What hits revenue, deferred revenue, and cash in year 1 under ASC 606?',
    'Cash: $400K received; deferred revenue: $400K booked then ratably released; revenue: $400K recognized over the year as the service is delivered, leaving zero deferred revenue at year-end from this invoice — the remaining $800K of contract value is neither billed nor recognized yet',
    [
      ['Revenue: $1.2M recognized immediately because the contract is signed and the customer has committed; cash: $400K; deferred revenue: $800K', 'ASC 606 recognizes revenue as the performance obligation is satisfied — for SaaS, that is ratably over the service period. Booking $1.2M on signature pulls forward two years of revenue that the customer has not consumed and has not paid for.'],
      ['Revenue: $400K; cash: $400K; deferred revenue: $0 because the cash exactly equals the recognized amount over the full year', 'The mechanic is correct only at year-end. During the year, deferred revenue starts at $400K (on the day cash arrives) and amortizes down to $0 as monthly revenue is recognized — analysts who only look at the year-end snapshot miss the intra-period dynamics that drive the cash flow.'],
      ['Revenue: $400K; cash: $1.2M because annual billing is treated as upfront for the full contract; deferred revenue: $800K', 'Annual billing means the customer pays one year at a time. Cash arrives in the amount of the invoice, not the contract value. Pulling forward future-year cash is the classic over-aggressive forecast assumption that breaks the deferred revenue bridge.'],
    ],
    'ASC 606 separates four cash and accounting events: contract signed (no GAAP entry), invoice issued (AR + deferred revenue, or cash + deferred revenue), service delivered (revenue + reduction in deferred revenue), and cash collected (AR converted to cash). Strong analysts can name what hits each line at each event without re-deriving from first principles.'),

  q(4351111, 'ASC 606 over-time vs point-in-time',
    'An engineering target sells custom-built industrial systems on 18-month build contracts at $20M each. The customer takes ownership at delivery. The analyst is deciding whether revenue should be recognized over time (percentage of completion) or at a single point (delivery). What is the relevant ASC 606 test?',
    'Over-time recognition applies if the customer simultaneously receives and consumes benefits as work is performed, if the customer controls the asset as it is built, or if there is no alternative use and the seller has an enforceable right to payment for work completed — otherwise revenue is recognized at the point control transfers, which for delivery-based custom equipment is typically at shipment or commissioning',
    [
      ['Over-time recognition applies whenever the contract is longer than 12 months because of the substantial-completion threshold', 'There is no 12-month threshold in ASC 606. Contract duration is irrelevant to the over-time vs point-in-time test; the test is about control transfer and benefit consumption, not calendar length.'],
      ['Point-in-time recognition is always required for custom equipment because each unit is bespoke', 'Bespoke specification does not by itself force point-in-time treatment. If the asset has no alternative use and the seller has an enforceable right to payment, ASC 606 explicitly directs over-time recognition.'],
      ['Over-time recognition is optional, and management can choose whichever method matches their forecast', 'ASC 606 prescribes the recognition pattern based on the contract substance — it is not a management choice. Picking the convenient pattern is one of the most-flagged revenue-recognition adjustments in QoE.'],
    ],
    'The over-time vs point-in-time decision is one of the most-tested ASC 606 judgments in industrial M&A. The three over-time criteria (simultaneous consumption, customer control during build, or no alternative use + enforceable right to payment) are mutually exhaustive — if any one holds, over-time applies. Otherwise revenue lands at the moment control transfers.'),

  q(4351112, 'Goodwill — impairment vs amortization',
    'A target carries $400M of goodwill on the BS from prior acquisitions. The model assumes 10-year amortization at $40M per year. The analyst should flag this. Why?',
    'Goodwill is not amortized under US GAAP for public companies — it is tested for impairment annually (and on triggering events). Building straight-line amortization understates net income and creates an artificial depreciation-like charge that is not how the statements actually behave',
    [
      ['Goodwill is amortized over 15 years for book purposes, so the 10-year assumption is too aggressive', '15 years is the *tax* life for goodwill under IRC §197 — not the book treatment. US GAAP for public companies tests goodwill for impairment and does not amortize it for book purposes.'],
      ['Goodwill amortization is allowed under US GAAP but only for private companies that elect ASU 2014-02', 'That election does exist for private companies, but the analyst should flag the assumption explicitly. Public-company models default to no amortization, and applying a private-company election without saying so is exactly the modeling slip the question is testing.'],
      ['The 10-year amortization is fine for modeling purposes because the cash effect is zero', 'The cash effect being zero is true, but reported earnings are still depressed by the artificial expense. Multiples on a comp set that does not amortize goodwill would then under-value the target — the modeling slip has real downstream consequences.'],
    ],
    'US GAAP: goodwill is not amortized for public companies; it sits on the BS until impaired. Private companies may elect amortization under ASU 2014-02. IFRS aligns with the impairment-only model. Tax law (IRC §197) is its own track — 15-year straight-line for tax purposes regardless of book treatment.'),

  q(4351113, 'Goodwill impairment — three statement effects',
    'A retailer takes a $200M goodwill impairment in Q4. Ignoring taxes, what flows through each statement?',
    'IS: $200M non-cash impairment charge reduces operating income and NI by $200M; BS: goodwill falls by $200M on the asset side, retained earnings falls by $200M on the equity side, keeping the BS balanced; CFS: the $200M is added back inside CFO as a non-cash item, leaving cash flow unchanged',
    [
      ['IS: $200M; BS: goodwill falls $200M with no equity offset; CFS: $200M cash outflow because impairment is a real economic loss', 'Impairment is real economic loss but not real cash loss — no cash moves on the impairment date. And the equity side has to take the hit (via reduced NI to RE) or the BS would not balance.'],
      ['IS: no effect because impairment is a BS item only; BS: goodwill falls $200M and is offset against APIC; CFS: no entry needed', 'Impairment hits the IS as an operating expense (or below the line in some presentations). Pulling it off the IS is the textbook error. And it offsets through RE via NI, not directly against APIC.'],
      ['IS: $200M; BS: goodwill falls $200M and offset by a DTL increase; CFS: no entry needed', 'Goodwill impairment is generally not tax-deductible for book purposes (book goodwill ≠ tax goodwill), so a DTL change is the wrong mechanic. And the CFS still needs the add-back inside CFO.'],
    ],
    'Goodwill impairment behaves exactly like depreciation in three-statement mechanics: real expense on the IS, asset write-down on the BS, retained earnings catches the equity side, and CFO adds it back as non-cash. The cash bottom line is unchanged. The diagnostic value is in flagging what triggered the impairment — usually a reporting unit\'s fair value falling below carrying value, often signaling a stale acquisition thesis.'),

  q(4351114, 'PP and E schedule roll-forward',
    'A company starts the year with $500M net PP&E. During the year it spends $80M on capex, records $60M of depreciation, and sells assets with a $10M net book value for $15M cash. What is ending PP&E?',
    'About $510M — opening $500M plus $80M capex minus $60M depreciation minus $10M disposal NBV equals $510M; the $5M gain on the disposal flows through the IS but does not affect the PP&E roll',
    [
      ['$520M — opening plus capex minus depreciation, ignoring the disposal because the company received cash', 'The disposal removes the $10M NBV from the asset side regardless of the cash received. The cash impact is on the CFS (investing) and the gain hits the IS — but the $10M still has to come off PP&E.'],
      ['$525M — opening plus capex minus depreciation plus the gain on sale', 'Gains on sale flow through the IS, not PP&E. The PP&E roll only moves on capex, depreciation, disposals at NBV, and acquisitions; gains are an accounting reconciliation, not an asset movement.'],
      ['$580M — opening plus capex; depreciation does not affect PP&E because it is a non-cash item on the CF', 'Depreciation is non-cash on the CFS but is absolutely real on the BS — it reduces PP&E net every period. That is the whole mechanic of accumulated depreciation.'],
    ],
    'PP&E roll: opening + capex − depreciation − NBV of disposals + acquisitions = closing. Memorize this and the related cash entries (capex is CFI, gain on sale is CFO add-back with sale proceeds in CFI). Mis-tracking disposals or gains is one of the more common QoE catches.'),

  q(4351115, 'Capex spike, EBITDA vs cash',
    'A target has held EBITDA flat at $50M for three years but capex jumped from $5M to $40M last year as the founder modernized the plant. The buyer is debating whether to use trailing EBITDA or a normalized number. What is the right framing?',
    'EBITDA is unchanged because capex is below the line — but unlevered free cash flow has collapsed because cash is leaving the business at the new capex pace; the buyer should value the asset on cash conversion, not headline EBITDA, and the diligence question is whether the elevated capex is one-time modernization or a new run-rate',
    [
      ['Capex affects EBITDA because depreciation will rise next year — so trailing EBITDA already reflects the increased capex', 'Depreciation flows through D&A, which is removed before EBITDA. EBITDA is by construction insulated from both depreciation and capex; the cash impact only shows up in unlevered FCF.'],
      ['Reduce EBITDA by the capex spike because the analyst should bake operational cost increases into the multiple', 'Reducing EBITDA by capex creates a non-standard, non-defensible metric. The discipline is to keep EBITDA clean and pressure-test cash conversion separately — buyers and lenders both look at the bridge from EBITDA to UFCF.'],
      ['Use trailing EBITDA as reported because capex is irrelevant to enterprise value', 'Capex is fundamental to enterprise value via UFCF. A target with high capex intensity has lower cash conversion and trades at a lower multiple than a capital-light peer for exactly that reason.'],
    ],
    'EBITDA → UFCF bridge: EBITDA − maintenance capex − ΔNWC − cash taxes = UFCF (with adjustments). When capex spikes, EBITDA is unchanged but UFCF collapses, and the multiple should reflect that. A clean analyst flags the bridge and asks whether the elevated capex is non-recurring (modernization) or the new normal (the asset is more capex-intensive than the comps suggest).'),

  q(4351116, 'Mandatory amortization on term loan',
    'A $300M term loan B carries 1% annual mandatory amortization and a 7-year tenor. What is the cash impact in year 1 and where does it land on the model?',
    'About $3M of cash leaves the business in year 1 as mandatory principal repayment — this is a financing outflow on the CFS and reduces the outstanding term loan balance on the BS; it does not affect the IS directly, though interest expense in subsequent years will be slightly lower as the principal balance amortizes',
    [
      ['$3M is an operating expense that reduces EBITDA in year 1', 'Principal repayment is not an expense — it is a return of capital to the lender. It bypasses the IS entirely. Confusing principal with interest is the cleanest test of whether someone has built a debt schedule from scratch.'],
      ['$3M shows up inside CFO because debt repayment is part of operating cash flow when the loan funds working capital', 'The use of proceeds does not determine where repayment lives. All debt principal flows (issuance and repayment) belong in CFF, regardless of whether the loan funded a factory, working capital, or a dividend.'],
      ['$0 in year 1 because TLB mandatory amortization is bullet at maturity', 'Term Loan B *typically* has 1% annual amortization with a bullet at maturity for the balance — not zero. The 1% is the market-standard nominal scrape; full bullet is more characteristic of high-yield bonds.'],
    ],
    'Debt schedule mechanics: principal amortization is CFF only (not IS, not CFO), interest expense is IS and reduces NI (and is the cash leg through CFO via NI). TLB structures typically run 1% annual / bullet at maturity in US LevFin; HY bonds typically have no scheduled amortization. Modeling this cleanly is half the debt-schedule fight.'),

  q(4351117, 'Interest expense — average vs ending balance',
    'A model computes interest expense on a term loan by multiplying the ending balance by the coupon rate. The senior models reviewer pushes back. What is the standard fix?',
    'Use the average of the opening and ending balance times the coupon — this approximates the time-weighted balance through the year and avoids the systematic understatement that comes from applying the rate only to the post-amortization closing balance',
    [
      ['Use the opening balance times the coupon, because that locks in the rate at the start of the period', 'Opening balance overstates interest because it ignores in-period amortization. Average balance is the standard approximation; opening or ending alone systematically biases the calculation.'],
      ['Use a daily average of the balance, which requires a separate daily schedule', 'Daily average is technically more accurate but is not the market-standard model build for a sell-side or LBO. The opening/closing average is the accepted shortcut; daily granularity is reserved for revolver waterfall modeling, not term debt.'],
      ['Use the ending balance plus a half-year convention adjustment of 0.5%', 'The half-year convention is a tax depreciation rule, not an interest-expense convention. Mixing the two is a frequent rookie modeling error.'],
    ],
    'Interest = average balance × rate. The average balance approximation also drives the circularity: interest depends on the revolver balance, which depends on cash flow, which depends on interest. Most models solve this with iterative calc; some solve it by using opening balance in year 1 and average thereafter, accepting a small year-1 bias for circularity-free mechanics.'),

  q(4351118, 'Revolver cash sweep',
    'In a five-year operating model, the company generates more cash than it needs in year 3 and runs short in year 4. The revolver is the cash plug. How should the model behave?',
    'In year 3, excess cash should be swept against the revolver balance, paying it down (financing outflow); in year 4, the cash shortfall should trigger a revolver draw (financing inflow); the cash balance stays at the minimum operating level throughout',
    [
      ['Year 3 excess cash builds on the BS as cash; year 4 shortfall is funded by reducing operating spending', 'Revolvers exist precisely to be the swing line — letting cash accumulate while the revolver is drawn would be paying interest unnecessarily. And cutting operating spending is not the model\'s job; the financing structure handles the swing.'],
      ['Year 3 excess cash pays down the term loan early; year 4 shortfall draws on the revolver', 'Most term loans are non-callable or carry prepayment penalties (especially TLB with soft call); the model should not sweep against the term loan unless the credit agreement allows it. The revolver is the designated swing line.'],
      ['Year 3 excess pays a dividend to equity; year 4 shortfall is covered by new equity issuance', 'In an operating model without a stated dividend policy or planned equity raise, the default cash plug is the revolver. Inventing a dividend or equity raise to solve cash imbalances is modeling beyond the assumptions provided.'],
    ],
    'Revolver mechanics: cash sweep when there is excess (subject to a minimum cash balance), revolver draw when there is shortfall. The interest expense on the revolver is one of the most circular calculations in a three-statement model — that is why most analysts have iterative calc on and a clean revolver schedule with both ends of the sweep visible.'),

  q(4351119, 'Circular interest with iterative calc',
    'An associate turns on iterative calc to handle the revolver-interest circularity. After a few iterations, the model converges to a stable answer, but the analyst notices the model occasionally fails to converge when stress-tested. What is the safer build?',
    'Add a circularity-breaker switch — a hardcoded interest expense option that the analyst can flip on when stress-testing or sharing the model — and ensure the revolver schedule uses average balance, so the system has only one circular loop rather than several feedback paths',
    [
      ['Leave iterative calc on at all times — Excel will eventually converge', 'Iterative calc is fragile: stress cases can spiral into negative cash, negative revolver, or #NUM errors that propagate before the user notices. A circularity-breaker is the standard analyst hygiene.'],
      ['Remove the revolver from the model and use a fixed debt assumption instead', 'That solves the math but loses the diagnostic. Knowing whether the company can service its capital structure under stress is exactly what the revolver is modeling.'],
      ['Replace interest expense with a fixed dollar amount based on management guidance', 'Hardcoding interest decouples the schedule from the capital structure. When debt changes or rates move, the interest line should respond — that is the whole point of building a debt schedule.'],
    ],
    'Two professional habits for circularity: (1) a hardcoded-interest switch so the model can be turned circularity-free for sharing or stress-testing, (2) average-balance interest with the only-one-loop pattern. Models with multiple circular paths (e.g., interest → cash → revolver → interest, and tax → NI → cash → revolver) are nearly impossible to debug under stress.'),

  q(4351120, 'Minority interest — consolidated revenue vs NI attribution',
    'A US parent owns 75% of a consolidated subsidiary that earned $40M of net income. How does that show up on the consolidated IS and the bottom-line attribution?',
    'The full $40M of subsidiary NI is consolidated into pretax income (revenue, expenses, etc. all roll up at 100%); below NI, $10M is attributed to non-controlling interest (25% × $40M), leaving $30M attributable to parent shareholders — diluted EPS is computed on the $30M, not the $40M',
    [
      ['Only $30M of subsidiary NI flows through the consolidated IS because the parent owns 75%', 'Consolidation is line-by-line at 100%, not pro-rata. The 25% economic interest is captured below NI via the NCI attribution, not by haircutting individual income statement lines.'],
      ['$40M flows through as NI to the parent, with the 25% NCI shown as a balance sheet liability outside the equity section', 'NCI is reported in equity on the BS (not as a liability), per ASC 810. And the IS attribution must split out the NCI portion below NI — otherwise EPS is overstated.'],
      ['$40M flows through to consolidated NI with no attribution adjustment, and EPS is computed on the full amount', 'EPS computed on undivided NI overstates per-share earnings to parent shareholders by the NCI share. That is exactly the trap MIs are designed to surface.'],
    ],
    'NCI mechanics: consolidate the sub 100% above NI; subtract NCI portion below NI; EPS based on parent-attributable NI only. In valuation, enterprise value already reflects 100% of the sub\'s value, so equity value to parent shareholders subtracts the NCI fair value (often book value as a proxy) from EV alongside debt.'),

  q(4351121, 'Equity-method investee',
    'A company owns 30% of an associate (no control, significant influence). The associate earned $20M of net income and paid $5M of dividends. How does this affect the parent\'s IS and BS?',
    'IS: $6M (30% × $20M) flows through as "equity in earnings of associate" inside operating or non-operating income; BS: the investment account rises by $6M (parent\'s share of earnings) and falls by $1.5M (30% × $5M dividend received) for a net $4.5M increase; CFS: $1.5M of cash dividend received is the cash leg, the rest is non-cash',
    [
      ['IS: 30% of associate revenue and expenses are consolidated line-by-line', 'That is consolidation accounting, used for controlled subsidiaries (typically >50% ownership). Equity-method investees are not consolidated; only the share of NI flows through one IS line.'],
      ['IS: $5M of dividend income; BS: no investment account change', 'Treating an equity-method investee as a cost-method investment (dividend income only) is wrong above the significant-influence threshold (generally 20–50% ownership). GAAP requires equity-method accounting, with the investment account adjusting for the parent\'s share of earnings.'],
      ['IS: $20M flows through as NI from the associate; BS: the parent\'s investment account rises by the full $20M', 'Only the parent\'s share (30%) flows through. Consolidating 100% of an associate the parent does not control would mis-represent the parent\'s economic exposure.'],
    ],
    'Equity-method accounting: share of investee NI flows through IS, share of dividends flows through CFS and reduces the investment account, and the investment account rolls forward year by year. In valuation, equity-method investments are typically valued separately (often as a non-operating asset added back to EV → equity bridge) rather than reflected in the parent\'s operating multiple.'),

  q(4351122, 'Restructuring — accrual vs cash',
    'A company announces $50M of restructuring charges in Q4: $30M of cash severance to be paid over the next 18 months and $20M of non-cash asset write-downs taken immediately. What hits each statement?',
    'IS: $50M total restructuring charge reduces NI immediately; BS: PP&E falls $20M (the write-down portion), accrued restructuring liability rises $30M (the future severance), retained earnings falls $50M; CFS: $20M added back as non-cash impairment, $30M added back to NI but the $30M accrued liability is also a non-cash add-back that will become a cash use as severance is actually paid over 18 months',
    [
      ['IS: $50M; BS: cash falls $50M immediately; CFS: $50M operating cash outflow', 'Only $0 of cash leaves the business on announcement day. The write-down portion is permanently non-cash; the severance portion is non-cash today and cash later as it is paid out.'],
      ['IS: $30M only because the $20M write-down is a balance-sheet event', 'Asset write-downs hit the IS — that is the whole point of impairment accounting. The $20M is real reported earnings reduction, just non-cash.'],
      ['IS: $50M; BS: accrued restructuring liability rises $50M; CFS: no entry because restructuring is excluded from operating cash flow', 'Restructuring expense flows through GAAP NI and through the CFO bridge like any other expense. The non-cash portion is added back; the cash portion is the future operating cash leg. Excluding restructuring from CFO is wrong.'],
    ],
    'Restructuring is a textbook split between non-cash write-down (immediate IS hit, immediate BS asset reduction, full CFO add-back) and accrued cash severance (immediate IS hit, accrued liability builds, cash leaves over the payout period). The bank\'s valuation case usually treats the announced charge as one-time (added back to EBITDA) but flags whether the underlying issue is truly resolving or recurring.'),

  q(4351123, 'EBITDA normalization — what survives',
    'A target presents the following adjustments: $5M one-time legal settlement, $3M of owner discretionary perks (private jet, yacht), $2M of "growth investments" with no specifics, $4M of restructuring charges (third year in a row), and $1M of one-time accounting fees for the deal process. Which survive a defensible EBITDA bridge?',
    'Legal settlement, owner perks normalization, and accounting deal fees survive (one-time, identifiable, defensible); "growth investments" without specifics fail (no QoE diligence team will accept it without invoice-level support); recurring restructuring is rejected because three consecutive years means it is not actually one-time — that is the operating reality',
    [
      ['All five survive because they are management-asserted adjustments', 'Management always asserts a generous bridge. The QoE team\'s job is selective acceptance — accepting all adjustments without support means the buyer is paying for inflated EBITDA.'],
      ['Only the legal settlement survives because it is the only item the IRS would accept as truly extraordinary', 'IRS classification is irrelevant to GAAP or to QoE normalization. The standard is "would a sophisticated buyer accept this as not part of run-rate economics?" — which legal settlement, owner perks, and deal accounting fees typically pass, and recurring restructuring or vague growth investments do not.'],
      ['All except the owner perks survive because perks are personal use and were never deductible', 'Owner-perk normalization is exactly the kind of add-back QoE accepts — the buyer will not be running a yacht or jet through the company, so removing those costs reflects the post-close cost structure. Treating it as personal/non-deductible misses the point of normalization.'],
    ],
    'Add-back discipline is the analyst skill most-judged by the QoE team. Accept what is genuinely one-time and supportable (legal settlements, owner perks, deal fees, one-time IT migrations). Reject vague labels ("growth investments", "strategic initiatives") and recurring "one-time" charges (third year of restructuring is run-rate). Documenting the rejection is as important as documenting the acceptance.'),

  q(4351124, 'ASC 842 — operating vs finance lease on IS',
    'Under ASC 842, a company signs a five-year office lease with $1M annual cash payments. The lease is classified as operating. What hits the income statement each year?',
    'A single straight-line lease expense of $1M per year (assuming no escalators or incentives), reported in operating expenses — there is no separate interest or depreciation breakout on the IS for an operating lease, even though both the ROU asset and lease liability are on the BS',
    [
      ['Depreciation expense of $200K (5-year life) and interest expense on the lease liability', 'That is the *finance lease* (formerly capital lease) IS pattern. Operating leases under ASC 842 keep the single-line straight-line expense pattern that existed before — the change in 842 was on the BS, not the IS, for operating leases.'],
      ['No IS impact because the lease is now on the balance sheet; only the cash payment shows up', 'ASC 842 puts the lease on the BS (ROU asset and lease liability) but did not eliminate the IS expense. The expense is still recognized; only the BS treatment changed for operating leases.'],
      ['Interest expense only — operating leases under ASC 842 are debt-like and treated as financing items', 'Operating lease expense under 842 remains an operating line, not interest. The economic substance (use of an asset) drives the operating classification; only finance leases bifurcate into interest + depreciation.'],
    ],
    'ASC 842 expense pattern: operating lease = single straight-line operating expense (no IS change from pre-842); finance lease = depreciation + interest, front-loaded total expense. The BS pattern is the same for both: ROU asset and lease liability. The single most-asked Ch2 question on 842 is whether the learner knows the BS changed but operating-lease IS treatment did not.'),

  q(4351125, 'ASC 842 — ROU asset and lease liability on BS',
    'A retailer with 200 store leases adopts ASC 842. The combined remaining lease payments discounted at the incremental borrowing rate equal $300M. Initial direct costs and prepayments are zero. What appears on the BS?',
    'A right-of-use asset of $300M on the asset side, and a lease liability of $300M (split between current and non-current) on the liability side — these are equal at inception, then diverge over time as the ROU asset amortizes on a straight-line basis but the lease liability amortizes on an effective-interest basis',
    [
      ['Both ROU asset and lease liability of $300M, equal in size at all times during the lease', 'They are equal *at inception only*. Operating leases under 842 amortize the ROU asset on a straight-line basis (so total expense equals lease expense) while the lease liability amortizes via the effective interest method — they diverge from year 2 onward.'],
      ['Lease liability only, on the BS; the ROU asset is disclosed in footnotes', 'The ROU asset is recognized on the BS, not in footnotes — that is the headline change of ASC 842 for operating leases. Both sides come on the BS simultaneously at inception.'],
      ['Lease commitments disclosed in footnotes only — ASC 842 did not change BS recognition for operating leases', 'ASC 842 absolutely changed BS recognition for operating leases (effective 2019 for public companies). Footnote disclosure was the pre-842 treatment, which the standard was designed to eliminate.'],
    ],
    'ASC 842 BS mechanics: ROU asset = present value of lease payments + prepayments + initial direct costs − incentives; lease liability = present value of lease payments. They are equal at inception when prepayments / incentives / IDC are zero. Over time, ROU amortizes straight-line (for operating) while the liability amortizes on effective interest — that divergence is what makes the total expense line out at straight-line.'),

  q(4351126, 'LIFO reserve in inflation',
    'A US industrial company uses LIFO inventory accounting. The LIFO reserve has grown from $30M to $50M during a year of rising input costs. How should the analyst interpret this and how does it affect comparability to FIFO peers?',
    'The growing LIFO reserve means LIFO COGS is $20M higher than FIFO COGS this year — so reported gross profit and net income are $20M lower than they would be under FIFO; to compare to FIFO peers, add the LIFO reserve change back to operating income (and the full reserve to inventory on the BS when comparing assets)',
    [
      ['The growing reserve is a cash inflow because LIFO captures more revenue', 'LIFO does not "capture more revenue" — it captures the same revenue but matches it to higher (newer) costs, lowering reported income. The cash benefit is via lower taxes paid because LIFO reduces taxable income — but the reserve itself is not cash.'],
      ['The reserve change is a BS-only adjustment that has no IS impact', 'The LIFO reserve change is exactly the difference between LIFO COGS and FIFO COGS for the period — it absolutely affects reported COGS and therefore the entire IS down to NI.'],
      ['LIFO and FIFO produce the same NI over the life of the inventory, so the reserve is informational only', 'They do produce the same cumulative NI if all inventory is eventually sold and prices return to base — but during sustained inflation, LIFO chronically understates inventory on the BS and depresses NI on the IS. The reserve is the live measure of the gap.'],
    ],
    'LIFO reserve = FIFO inventory − LIFO inventory. In US sell-sides, comparing a LIFO target to FIFO comps requires adjusting both the IS (add the ΔLIFO reserve back to operating income for the period) and the BS (add the full LIFO reserve to inventory). The tax benefit of LIFO is real cash; the reported NI penalty is a comparability headache.'),

  q(4351127, 'FIFO vs LIFO gross margin in inflation',
    'During a year of 10% input cost inflation, two competitors are otherwise identical but one uses FIFO and the other LIFO. Which reports a higher gross margin and why?',
    'FIFO reports higher gross margin in inflation because COGS reflects older, lower-cost inventory while revenue reflects current prices — LIFO matches current revenue to current (higher) costs, compressing reported gross margin even though the cash gross margin is identical',
    [
      ['LIFO reports higher gross margin because it captures the inflation tailwind in revenue', 'LIFO does not affect revenue — both methods recognize revenue identically. LIFO\'s effect is entirely on COGS, where it loads recent (higher) costs into the period\'s expense.'],
      ['Both report the same gross margin because the two methods only differ on the balance sheet', 'They differ on the IS via COGS, not just on the BS. The BS effect (different inventory carrying values) is a *consequence* of the COGS difference, not a separate phenomenon.'],
      ['FIFO reports higher gross margin because FIFO companies have more efficient inventory management', 'The accounting method does not determine inventory management efficiency. The gross margin difference is purely an accounting timing artifact of which costs are matched to which revenue.'],
    ],
    'FIFO in inflation: higher reported gross margin, higher reported inventory on BS, higher reported NI, higher taxes. LIFO in inflation: lower reported gross margin, lower inventory (LIFO reserve grows), lower NI, lower taxes (the cash benefit). When inflation reverses, the reported pattern flips. In comp tables, always normalize for method differences.'),

  q(4351128, 'CFO buildup detail',
    'Build CFO from the following: NI $80M, D&A $30M, SBC $15M, deferred tax expense $5M (DTL grew), AR up $20M, inventory up $10M, AP up $8M, accrued expenses down $5M, impairment $0. What is CFO?',
    'CFO = $80M + $30M + $15M + $5M − $20M − $10M + $8M − $5M = $103M',
    [
      ['$93M, computed as NI plus D&A plus SBC, minus AR build only', 'That ignores deferred tax (a non-cash add-back when DTL grows), inventory (NWC use), AP (NWC source), and accrued expenses (NWC use). A real CFO build has to walk every working-capital line.'],
      ['$80M, treating only NI as cash because every other item is non-cash and irrelevant', 'NI is *the starting point*, not the answer. CFO is exactly NI plus non-cash add-backs minus working-capital uses plus working-capital sources. Treating NI as CFO is the textbook beginner error.'],
      ['$148M by adding everything together with no signs', 'Working-capital changes have signs that matter: increases in operating assets are uses (subtract), increases in operating liabilities are sources (add). Sign errors are the most common CFO buildup failure on case interviews.'],
    ],
    'Indirect-method CFO discipline: NI + non-cash add-backs (D&A, SBC, deferred tax, impairments, gains/losses with sign flipped) ± working capital changes (assets are uses when they grow, liabilities are sources when they grow). Practice walking from NI to CFO at least once on every model — that is the cleanest tell of whether a candidate can think in three statements.'),

  q(4351129, 'Unlevered FCF definition',
    'A buyer asks the analyst for the target\'s unlevered FCF (FCFF) on $100M of EBITDA, $20M of D&A, 25% cash tax rate, $15M of capex, and $5M of NWC build. Compute UFCF.',
    'UFCF = EBIT(1 − t) + D&A − capex − ΔNWC = ($100M − $20M) × 0.75 + $20M − $15M − $5M = $60M + $20M − $15M − $5M = $60M',
    [
      ['$80M, computed as EBITDA minus capex minus NWC, without taxing', 'UFCF for DCF purposes must reflect cash taxes on EBIT, not on EBITDA. Skipping the tax leg overstates UFCF by the full tax shield on EBIT.'],
      ['$50M, computed as net income minus capex minus NWC plus D&A, using the actual effective tax rate after interest deduction', 'NI reflects taxes after the interest deduction — which means it captures the levered tax shield. UFCF strips the capital structure out, so the right tax computation is on unlevered EBIT, not on NI.'],
      ['$75M, computed as EBITDA × (1 − t) minus capex minus NWC, taxing EBITDA directly', 'Taxing EBITDA double-counts the tax shield on D&A — D&A is a deductible expense for tax purposes, so it has to remain in the tax computation. Taxing EBITDA produces a UFCF that is systematically too low.'],
    ],
    'UFCF = EBIT(1 − t) + D&A − capex − ΔNWC. The "EBIT then add back D&A" pattern is exactly to preserve the depreciation tax shield while removing the non-cash portion. Common errors: taxing EBITDA, using NI-based tax rate, forgetting NWC. The DCF discounts UFCF at WACC because UFCF is the cash to *all* capital providers.'),

  q(4351130, 'FCFE from FCFF',
    'Given $60M of FCFF (UFCF), $8M of after-tax interest expense, and $5M of net new debt issuance, what is FCFE (levered free cash flow)?',
    'FCFE = FCFF − after-tax interest + net new debt = $60M − $8M + $5M = $57M',
    [
      ['$60M because FCFF and FCFE are functionally the same — both are cash to investors', 'FCFF is cash to *all* investors (debt and equity); FCFE is cash to *equity* only. They differ by the cash effects of capital structure (interest, principal flows). Treating them as interchangeable is the most common LBO modeling slip.'],
      ['$52M, subtracting interest but ignoring net new debt issuance', 'Net new debt is a real cash source to equity — debt holders are putting in $5M to the business that equity does not have to. Ignoring it understates FCFE every time the capital stack is growing.'],
      ['$68M, adding interest back because it is a non-cash item like depreciation', 'Interest is absolutely a cash item — it is paid to lenders. Confusing the income-statement interest expense (recognized) with cash interest (paid) is one issue, but treating interest as non-cash like D&A is a categorical error.'],
    ],
    'FCFF → FCFE bridge: subtract after-tax interest (cash to lenders), add net new debt (cash from lenders). FCFF is discounted at WACC (all-capital); FCFE is discounted at cost of equity. In LBO returns analysis, FCFE is the relevant cash to equity sponsors; in DCF for enterprise value, FCFF is the canonical metric.'),

  q(4351131, 'LBO normalization — owner perks',
    'In an LBO sourcing memo, the analyst is normalizing a founder-owned target. Owner compensation is $4M (the market rate for the role is $1M), private jet usage is $800K, a Florida second home runs through the company at $300K, the founder\'s spouse is on payroll at $400K with no operating role, and there is $2M of "consulting fees" to the founder\'s friend with no deliverable. How much normalization is defensible?',
    'About $6.5M of EBITDA add-back is defensible — owner comp normalized down by $3M (the $4M paid minus the $1M market rate), $800K jet, $300K home, $400K spouse with no role, and $2M friend consulting — all are perks and related-party expenses that will not exist post-close under sponsor governance',
    [
      ['Zero — all owner-related expenses are real cash costs that someone has to bear', 'They are real cash costs today, but the question is whether they will be costs *post-close*. Sponsors run lean governance: no jets, no spouses on payroll, no friend-consulting. Removing those expenses to get to run-rate EBITDA is exactly the normalization mandate.'],
      ['The full $7.5M, because everything related to the founder is non-recurring once the sponsor closes', 'You cannot remove the founder\'s entire compensation — the sponsor will hire a real CEO (or pay the founder a market rate) post-close. Normalizing owner comp down to market rate is the right move; eliminating it entirely overstates EBITDA.'],
      ['About $3M — only the most flagrant items (the home and the friend consulting) survive QoE', 'Founder market-rate normalization, jet, and spouse-with-no-role are all standard QoE acceptances. Restricting to "most flagrant" leaves real normalization on the table and undervalues the asset.'],
    ],
    'LBO and M&A owner normalization standards: comp normalized to market rate (not zero), all personal-use perks removed, related-party expenses with no operating function removed. The QoE diligence team verifies each line with invoices, payroll records, and substantive interviews. Sponsors will model the target on the normalized number; the marketed EBITDA bridge has to be defensible to the QoE team or the buyer retrades on close.'),

  q(4351132, 'NWC peg at close',
    'A sell-side deal includes a working capital peg of $40M, set at the trailing-12-month average. At close, actual NWC delivered is $35M. How does this affect the purchase price?',
    'Purchase price is reduced by $5M dollar-for-dollar at close — the buyer demands delivery of the peg, and any shortfall is a price reduction (or a true-up payment) because the buyer is otherwise effectively funding $5M of working capital that should have been in the business',
    [
      ['Purchase price is unchanged because NWC is a balance sheet item and the deal is priced on EBITDA', 'NWC pegs are exactly the mechanism that ties the BS into the purchase price. Without a peg, sellers could strip working capital out before close and pocket the difference. The peg neutralizes that risk.'],
      ['Purchase price rises by $5M because the buyer is taking less working capital, which means less use of cash', 'The buyer is receiving *less than promised* — a shortfall against the peg. That is a price reduction, not an increase. The seller delivered less than the deal valued; the buyer pays less to match.'],
      ['Purchase price is adjusted by $5M but only after a 30-day post-close true-up period', 'Most deals do have a post-close true-up window, but the *direction* of the adjustment is what the question is testing — and a shortfall is always a reduction in the buyer\'s consideration, not just a delay.'],
    ],
    'NWC peg mechanics: set at the trailing average (often TTM or 3–6 month average) to capture normal operating levels; delivered at close on a dollar-for-dollar adjustment; trued up within 60–120 days when audited NWC is finalized. The peg protects the buyer from seller manipulation in the run-up to close (e.g., aggressively collecting AR or stretching AP). Set the peg too low and the seller wins; too high and the buyer wins — most peg disputes are about *how the peg was calculated*, not whether the math at close was right.'),

  q(4351133, 'Purchase accounting — PP and E and intangibles',
    'A buyer pays $1.0B for a target with $400M of book equity. The PP&E fair value is $50M above book; intangibles (customer relationships, brand) total $200M with no prior book value; deferred tax liability of $40M arises from the write-ups. What is goodwill?',
    'Goodwill = purchase price − fair value of net assets acquired = $1.0B − [$400M book equity + $50M PP&E write-up + $200M intangibles − $40M DTL on write-ups] = $1.0B − $610M = $390M',
    [
      ['Goodwill = $1.0B − $400M = $600M, with the $50M PP&E write-up and $200M intangibles ignored', 'Purchase accounting requires fair-value step-up of identifiable assets first, then goodwill catches the residual. Ignoring the write-ups overstates goodwill and understates depreciable/amortizable assets — which over-flatters future EBITDA at the expense of D&A.'],
      ['Goodwill = $1.0B − $400M − $50M − $200M = $350M, ignoring the DTL', 'The DTL on write-ups is a real liability under GAAP purchase accounting — when assets are stepped up for book but not for tax, the future incremental D&A is not tax-deductible, so a DTL is recognized. Ignoring it understates goodwill by exactly the DTL amount.'],
      ['Goodwill = $0 because the entire premium is allocated to intangibles', 'The intangibles allocation has to be supported by valuation analysis (third-party purchase price allocation, typically). The residual after identifiable assets is goodwill; allocating 100% of the premium to intangibles would require defensible identifiability and reliable measurement that rarely supports the full premium.'],
    ],
    'Purchase accounting flow: step-up identifiable assets (PP&E, inventory, intangibles) to fair value; recognize DTLs on write-ups for the book-tax basis difference; the residual purchase price above stepped-up net assets is goodwill. The DTL is a textbook detail because the write-ups generate incremental D&A that depresses post-close book NI without a matching tax benefit (since tax basis did not change). LBO models that miss this systematically over-flatter the post-close income statement.'),

  q(4351134, 'Goodwill creation mechanics',
    'In the deal above, $390M of goodwill is created. What is goodwill economically representing, and how should the buyer think about it going forward?',
    'Goodwill represents the premium paid over identifiable fair-value net assets — typically capturing synergies, control, brand value not separately identifiable, assembled workforce, and (sometimes) over-payment; it sits on the BS as a non-amortizing asset (for public companies) and is tested annually for impairment, which is the moment the over-payment portion gets recognized',
    [
      ['Goodwill is the buyer\'s expected synergy value, recognized as an asset on day one', 'Synergies are not capitalizable on day one — they have to be realized and earned over time. Goodwill captures the *premium paid*, which may or may not reflect realizable synergies; the test happens at impairment, not at close.'],
      ['Goodwill is a placeholder that will be amortized over 15 years and shrink to zero', '15-year amortization is the *tax* treatment for tax goodwill under IRC §197. Book goodwill on US GAAP for public companies is not amortized — it sits until impaired. Mixing book and tax goodwill is a common slip.'],
      ['Goodwill is a contra-equity account that offsets the buyer\'s issuance of stock to fund the deal', 'Goodwill is an asset, not a contra-equity. The funding mechanic (cash, debt, or stock) sits on the other side of the BS; goodwill is created on the asset side as the residual of the purchase price allocation.'],
    ],
    'Goodwill is the residual line in purchase accounting and the canonical M&A reminder: every dollar paid above fair-value identifiable net assets has to be justified later by performance, or it gets written off as impairment. Aggressive deals that pay 4x revenue on questionable strategic fit generate goodwill that becomes a multi-year impairment risk on the acquirer\'s BS.'),

  q(4351135, 'Retained earnings roll',
    'A company starts the year with $200M of retained earnings, earns $50M of NI, pays $10M of dividends, and repurchases $20M of stock. What is ending retained earnings?',
    'Ending RE = $200M + $50M − $10M = $240M; the $20M stock repurchase reduces APIC or treasury stock, not retained earnings, so it does not affect the RE roll directly',
    [
      ['$220M — opening plus NI minus dividends minus the stock buyback', 'Stock buybacks reduce equity but through treasury stock (or APIC), not through RE in the typical US GAAP presentation. The RE roll is exclusively NI in, dividends out.'],
      ['$250M — opening plus NI, since dividends and buybacks are both financing items that bypass equity', 'Dividends absolutely reduce RE — they are the canonical "return of earnings to shareholders" entry. Treating them as bypassing equity entirely is the cleanest test of whether the analyst has built a RE schedule.'],
      ['$240M, but the buyback also reduces RE by $20M to bring the total to $220M', 'Buybacks do reduce equity in total, but the specific line item is treasury stock (or, in some structures, APIC). RE captures the cumulative undistributed earnings of the business, which buybacks do not affect.'],
    ],
    'RE roll: opening + NI − dividends declared (whether paid or not). Buybacks reduce treasury stock (or APIC); they do not flow through RE. Both reduce total equity, but through different lines — and the three-statement model has to track them separately because the BS needs each line to balance independently.'),

  q(4351136, 'NI to RE link',
    'A company reports $80M of NI and pays a $20M dividend. The CFO says "the dividend reduces net income and we will report $60M". The analyst pushes back. Why?',
    'Dividends are paid out of retained earnings, not out of NI — they reduce equity below the IS line (after NI is reported) and flow through CFF as a cash outflow; NI is $80M as reported, and the $20M dividend reduces RE separately',
    [
      ['The CFO is right — dividends are an income statement expense that reduces NI', 'Dividends are never an IS expense. They are a distribution of after-tax earnings, recorded entirely on the BS (RE reduction) and CFS (CFF outflow). Pulling dividends through the IS is one of the cleanest accounting errors to spot.'],
      ['The CFO is right because dividends are deductible for corporate tax purposes', 'Dividends paid by a C-corp are not tax-deductible — that is the entire reason for the "double taxation" of corporate dividends (taxed at the corporate level as NI, then taxed at the individual level when received).'],
      ['The CFO is technically wrong but $60M is the right "available NI" metric for valuation', 'There is no such GAAP measure as "available NI". NI is NI; the dividend allocation decision happens after NI is reported. Inventing a sub-NI metric to support the CFO is the analyst version of pleasing the room.'],
    ],
    'NI → RE → equity link: NI hits the IS, flows to RE on the BS via the closing entry, and dividends reduce RE separately. Dividends never hit the IS. CFS shows dividend payments inside CFF. This is the cleanest three-statement test of whether someone can name what lives on each statement.'),

  q(4351137, 'Three-statement tie-out',
    'In a finished three-statement model, the change in cash on the BS does not equal the bottom line of the CFS. What does this tell the analyst?',
    'The model has a flow error — by construction, the change in BS cash equals the sum of CFO + CFI + CFF on the CFS, because the CFS is just a reorganization of the BS cash movement; any mismatch means a line is double-counted, missing, or signed incorrectly',
    [
      ['It is normal — small mismatches arise from rounding and can be ignored', 'A true three-statement model ties to the penny. Any mismatch — even of a few thousand dollars on a billion-dollar model — points at a real flow error that needs to be found, not tolerated.'],
      ['It means depreciation is missing from the CFS — that is always the cause', 'Depreciation is *one* common cause but far from the only one. NWC sign errors, missed deferred tax, mis-built CFI for acquisitions and disposals, missing dividend lines in CFF — all are equally common.'],
      ['It is fine if the CFS bottom line equals NI plus D&A — that is the right tie-out', 'NI plus D&A is *not* the cash flow tie-out; it is just one component of CFO. The right tie-out is CFO + CFI + CFF = ΔBS cash. Asking "is NI + D&A close?" instead of "does ΔBS cash equal the CFS?" is the rookie modeling mistake the question is testing.'],
    ],
    'Tie-out discipline: ΔBS cash = CFO + CFI + CFF, every period, to the penny. When it does not, walk backward through the CFS until you find the broken line. Common offenders: NWC sign flip, missing capex, missing stock buyback or dividend, double-counted debt issuance. Strong analysts build the BS cash roll as a sanity check formula and color it red until tied.'),

  q(4351138, 'Pension — service cost vs funding',
    'A company\'s defined-benefit pension plan has $20M of service cost (current-year benefit earned by employees) and $30M of cash contributions made to the plan trust during the year. What hits the IS and the CFS?',
    'IS: $20M of service cost is the operating expense; the rest of net periodic pension cost (interest cost, expected return on plan assets, amortization of prior service cost) flows through non-operating income under ASC 715. CFS: $30M of cash contribution is a CFO outflow (operating, since it relates to compensation), and the gap between expense and funding is captured by changes in the pension liability on the BS',
    [
      ['IS: $30M, equal to the cash contribution; CFS: $30M outflow', 'The IS reflects the accrual-based pension expense (service cost + interest cost − expected return ± amortization of OCI items), not the cash funding. The two diverge in any year the contribution does not equal the period expense.'],
      ['IS: $20M operating expense plus $30M as a financing charge; CFS: no impact because pensions are off-balance-sheet', 'Defined-benefit pensions are absolutely on-balance-sheet under ASC 715 — funded status (PBO − fair value of plan assets) sits on the BS. And cash contributions flow through CFO, not CFF.'],
      ['IS: nothing because pension liabilities are recognized only when paid; CFS: $30M outflow', 'Service cost is recognized every year as benefits accrue — pension accounting is one of the most rigorously accrual-based areas of GAAP, precisely to avoid the cash-only treatment the question is testing.'],
    ],
    'Pension accounting: service cost on IS as operating; other net-periodic-cost components reclassified to non-operating under ASU 2017-07. Cash contributions to the trust hit CFO. Funded status on BS. In M&A, an underfunded pension is a real liability the buyer assumes and discount-rate-sensitivity drives a wide bid-ask spread on cyclical industrial targets.'),

  q(4351139, 'AOCI — unrealized AFS gains',
    'A company holds available-for-sale debt securities that appreciated $5M during the year. The position has not been sold. How does this affect the financial statements under current US GAAP?',
    'IS: no impact because AFS unrealized gains bypass net income; OCI: $5M flows through other comprehensive income, building accumulated other comprehensive income (AOCI) on the equity side of the BS; CFS: no impact because no cash moved',
    [
      ['IS: $5M gain because all unrealized gains flow through earnings', 'AFS treatment under current GAAP bypasses NI specifically because the gains are unrealized; only when the security is sold does the gain (cumulative) flow through to NI. Pulling it through NI conflates AFS with the trading securities (held-for-trading) treatment.'],
      ['BS: the $5M increases the security and offsets against APIC', 'The offset is AOCI (accumulated other comprehensive income), not APIC. AOCI is a separate equity bucket specifically for items deferred from NI (foreign currency, AFS gains/losses, pension OCI, cash flow hedge gains/losses).'],
      ['CFS: $5M inflow because the security has appreciated', 'No cash moves on an unrealized gain — by definition, the position has not been sold. The CFS only captures actual cash movements.'],
    ],
    'OCI items under current US GAAP: foreign currency translation, unrealized AFS gains/losses (for debt securities — equity securities now flow through NI under ASU 2016-01), pension and OPEB OCI adjustments, cash flow hedge gains/losses. All of these bypass NI and accumulate in AOCI on the equity side of the BS. When the underlying position is sold, the accumulated OCI is "recycled" through NI in the period of sale (for AFS debt securities and cash flow hedges).'),

  q(4351140, 'Asset write-down mechanics',
    'A retailer writes down $50M of obsolete inventory and recognizes a $15M impairment on its Detroit store cluster. Total $65M of non-cash charges. What is the effect on EBITDA, NI, and CFO?',
    'EBITDA: typically reduced by the $50M inventory write-down (it flows through COGS) and the $15M impairment if presented in operating expenses — both reduce operating income; NI: reduced by the full $65M pretax (less tax effect); CFO: unaffected because both items are added back as non-cash charges inside CFO',
    [
      ['EBITDA: unaffected because both items are non-cash; NI: down $65M; CFO: down $65M', 'EBITDA is an operating earnings measure — non-cash status does not exclude items from EBITDA (D&A is the explicit exception). Inventory write-downs flow through COGS into EBITDA. And CFO adds them back, so CFO is *unaffected*, not reduced.'],
      ['EBITDA: down $65M; NI: down $65M; CFO: down $65M because impairments are real economic losses', 'Impairments are real economic losses but not real cash losses — CFO adds them back as non-cash. Pulling them through CFO double-counts.'],
      ['EBITDA: down by $50M inventory only; NI: down $65M; CFO: down $50M because inventory write-downs do represent inventory that was paid for', 'CFO adds back inventory write-downs because the cash for the inventory left in a prior period (when purchased). The write-down is the accounting recognition that the asset is worth less, not a current-period cash event.'],
    ],
    'Asset write-down three-statement effects: IS expense (operating, reduces EBITDA and NI), BS asset reduction, equity (RE) reduction via NI, CFO add-back as non-cash. The cash bottom line is unchanged. In sell-side analysis, recurring write-downs are a yellow flag — they signal either a stale acquisition (impairments) or aged inventory not being managed (write-downs), both of which feed into the kill-criteria conversation.'),

  q(4351141, 'Capitalized software — IS smoothing and CF surface',
    'A SaaS company capitalizes $20M of internal-use software development costs (ASC 350-40) during the year, then amortizes the cumulative capitalized balance over 3 years. The opening capitalized balance is $30M. What is the effect on the IS and CFS this year compared to expensing everything?',
    'IS: amortization expense is roughly $30M/3 + $20M/3 ≈ $17M (depending on convention) rather than the full $20M expensed under R&D treatment — net income is higher by approximately the $3M difference; CFS: capex-like outflow of $20M sits in CFI, and the amortization adds back inside CFO — so CFO is higher (less is in opex) but CFI is more negative, and the cash bottom line is identical to the expense-everything treatment',
    [
      ['IS impact is zero because capitalization is just a balance-sheet reclassification; CFS impact is zero because no cash moved differently', 'Cash did not move differently, but the *classification* of the cash absolutely changed: expensed dollars hit CFO directly, while capitalized dollars hit CFI as a capex-like outflow and only flow through CFO via amortization add-backs. CFO looks better under capitalization; cash bottom line is identical.'],
      ['IS impact is a one-time $20M income boost; CFS shows a $20M inflow because cash is preserved', 'There is no cash inflow — the company still spent the $20M. The IS impact is smoothing (lower opex now, higher amortization later), not a one-time boost. Treating capitalization as a cash event is the cleanest indicator that the analyst has not built the schedule.'],
      ['NI is exactly the same as expensing because amortization equals the capitalization amount in steady state', 'Steady state would equalize NI only if capitalized amounts are constant year-over-year. In growing SaaS, capitalized amounts grow faster than amortization (which lags by the three-year roll), so NI is systematically higher under capitalization than under expensing — that gap is the analyst flag.'],
    ],
    'Capitalized software (ASC 350-40 for internal-use software; ASC 985-20 for external products) shifts the expense recognition pattern from immediate to amortized. The classic analyst trap: SaaS companies that capitalize aggressively report higher NI and higher CFO (less in opex, more in CFI) than peers that expense — even though the cash spending is identical. Comparability requires either un-capitalizing the comp or accepting that the high-capitalizer trades at a multiple that already prices in the convention.'),
]
