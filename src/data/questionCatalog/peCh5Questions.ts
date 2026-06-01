import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// PRIVATE EQUITY — Chapter 5 expansion: IC Memo, Deal Process, and Exit
// ----------------------------------------------------------------------------
// 43 new questions (IDs 4390400–4390442) extending the existing 7 PE Ch5
// questions in careerAgentGeneratedRoadmapFinance.ts (IDs 4103038, 4103039,
// 4107370, 4107371, 4107840, 4107845, 4107849).
//
// US-context, Delaware-law deal-process coverage:
//   IC memo structure (thesis, market, deal terms, risks, recommendation)
//   IC dynamics (MD review, partner edits, full vote)
//   IC red flags (contradictory thesis, unrealistic synergies, over-leverage)
//   Deal sequencing (NDA -> CIM -> mgmt mtgs -> IOI -> LOI -> exclusivity ->
//     SPA -> close)
//   Auction strategies (pre-empt, first round, fold)
//   LOI vs binding offer, exclusivity windows (30-60 days)
//   Definitive agreement: SPA, disclosure schedules, R&W, MAC, indemnification,
//     escrow, R&W insurance (~3% of policy)
//   Earnouts, rollover equity (5-15% pool), management package, MIP, vesting,
//     leaver provisions, financing condition (committed financing)
//   Reps & warranties depth, closing mechanics (working capital true-up)
//   Exit strategies (secondary buyout, strategic, IPO, dividend recap,
//     continuation fund), IPO lockup, S-1, strategic premium (10-25%),
//     continuation funds (GP-led secondaries), exit timing, DPI pressure
//
// Voice and structure mirror vcCapstoneQuestions.ts and clfCh5Questions.ts —
// bespoke whyWrong on every wrong answer, single integrative lesson per
// question, no strawman distractors.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe PE Ch5 canonical bank'

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

const CHAPTER = 'IC Memo, Deal Process, and Exit'

// Difficulty distribution: 13 at 3, 22 at 4, 8 at 5 (total 43).
export const PE_CH5_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // IC memo structure (8)
  4390400: 3, // Thesis statement up front
  4390401: 3, // Company overview section purpose
  4390402: 4, // Market section depth
  4390403: 4, // Deal terms inside the memo
  4390404: 3, // Financial summary placement
  4390405: 4, // Value creation section linkage
  4390406: 4, // Risks section honesty
  4390407: 3, // Recommendation paragraph

  // IC dynamics (3)
  4390408: 3, // MD review before IC
  4390409: 4, // Partner edits and pushback
  4390410: 4, // Full IC vote mechanics

  // IC red flags (3)
  4390411: 4, // Contradictory thesis sections
  4390412: 5, // Unrealistic synergies in the model
  4390413: 4, // Over-leverage in the structure

  // Deal sequencing (4)
  4390414: 3, // NDA to CIM step
  4390415: 4, // CIM to management meetings
  4390416: 4, // IOI vs LOI
  4390417: 4, // LOI to exclusivity to SPA flow

  // Auction strategies (3)
  4390418: 4, // Pre-emptive bid logic
  4390419: 4, // First round positioning
  4390420: 3, // When to fold from a process

  // LOI vs binding offer (2)
  4390421: 4, // Non-binding LOI mechanics
  4390422: 3, // When LOI becomes binding

  // Exclusivity (2)
  4390423: 3, // 30-60 day exclusivity window
  4390424: 4, // Negotiating exclusivity extensions

  // SPA, disclosure schedules, R&W, MAC, indemnification, escrow (6)
  4390425: 3, // SPA as definitive agreement
  4390426: 4, // Disclosure schedules role
  4390427: 4, // Reps and warranties depth
  4390428: 5, // MAC clause in a downturn
  4390429: 4, // Indemnification caps and survival
  4390430: 4, // Escrow as recovery source

  // R&W insurance (1)
  4390431: 5, // R&W policy at ~3% of limit

  // Earnouts (1)
  4390432: 5, // Earnouts and the litigation tail

  // Rollover equity (1)
  4390433: 4, // 5-15% rollover pool

  // Management package (2)
  4390434: 4, // MIP vesting and cliff
  4390435: 5, // Good leaver vs bad leaver provisions

  // Financing condition (1)
  4390436: 5, // Committed financing eliminates condition

  // Closing mechanics (1)
  4390437: 3, // Working capital true-up

  // Exit strategies (3)
  4390438: 3, // Secondary buyout to another sponsor
  4390439: 4, // Strategic exit premium 10-25%
  4390440: 3, // IPO exit, S-1 and lockup

  // Continuation fund (1)
  4390441: 5, // GP-led secondary / continuation fund

  // DPI pressure (1)
  4390442: 5, // DPI pressure forces exit timing
}

export const peCh5Questions: Question[] = [
  // -------------------------------------------------------------------------
  // IC MEMO STRUCTURE (4390400–4390407)
  // The memo is the artifact that gets the deal heard. Each section has a
  // specific job, and IC reads them in order. Vague sections get the deal
  // tabled or sent back for rework before the partnership ever votes.
  // -------------------------------------------------------------------------
  q(4390400, 'Career Skills', CHAPTER, 'Thesis statement up front',
    'You are drafting the IC memo for a $1.2B take-private of a fragmented commercial HVAC services platform. Where in the memo should the investment thesis sit, and what should it actually contain?',
    'On the first page as a 3-5 sentence statement that names the target, the entry multiple, the value-creation levers, the exit thesis, and the IRR range — so any partner reading only page one knows what the deal is and why',
    [
      ['In the conclusion at the end of the memo, after the reader has absorbed the full evidence base', 'Investment committees read the thesis first and decide whether to engage with the rest. Burying it on the last page means partners form opinions from the appendix and the memo loses control of the narrative.'],
      ['As a one-line tagline at the top, with the actual reasoning distributed across the section headers', 'A tagline is marketing, not a thesis. IC needs to see the actual chain — entry, levers, exit, returns — in one coherent statement, not reconstructed from headers.'],
      ['Implicit in the financial summary, since the model already shows the returns the thesis would produce', 'The model is the output, not the thesis. A thesis names *why* the model holds — without that, IC is reading numbers without the reasoning that supports them.'],
    ],
    'The thesis statement is the load-bearing paragraph of any IC memo. It should sit on page one and contain the target, entry, value-creation plan, exit, and expected returns in a few sentences — so the rest of the memo is read as supporting evidence for a claim the partnership has already seen.'),

  q(4390401, 'Career Skills', CHAPTER, 'Company overview section purpose',
    'The deal team is debating how detailed the company overview section should be in an IC memo on a niche specialty chemicals platform. What is the right scope for this section?',
    'A focused 1-2 page overview that gives IC the buyer perspective on what the company sells, to whom, how it makes money, and where it sits in its value chain — not a recap of the CIM',
    [
      ['A comprehensive corporate history including founding, every acquisition, and full management bios', 'IC does not need the corporate biography. The overview should give partners enough context to evaluate the thesis, not relitigate every event in the company history.'],
      ['A copy-paste of the CIM executive summary since the seller has already framed the business well', 'The CIM is sell-side framing. Importing it wholesale means IC reads the seller\'s pitch instead of the buyer\'s read — which is exactly the role the memo is supposed to play.'],
      ['Just the headline financials, since the rest is appendix material', 'Headline financials without product, customer, and value-chain context cannot be evaluated. A partner reading only EBITDA cannot tell why margins are what they are or whether they will hold.'],
    ],
    'The company overview is the buyer\'s framing of the business — focused, dense, and oriented around what matters for the thesis. It is not the CIM, not the bio book, and not a number dump; it is the lens that makes the rest of the memo legible.'),

  q(4390402, 'Career Skills', CHAPTER, 'Market section depth',
    'For a $600M aerospace components platform, the associate has drafted a market section that lists TAM at $40B and references three industry reports. The MD says it is not IC-ready. What is the most likely fix?',
    'Replace the $40B headline with a bottom-up sizing of the actual served segment (parts category, aircraft platforms covered, OEM and aftermarket mix) and tie the size to the company\'s realistic share — IC discounts top-down TAM figures',
    [
      ['Add more industry reports to triangulate the $40B number across more sources', 'Triangulating a top-down figure with more top-down figures does not produce a defensible market size. The fix is method, not citation count.'],
      ['Move the market section to the appendix since the company is the focus, not the industry', 'IC needs to understand the market the thesis depends on — pricing, cyclicality, competitive structure. Demoting the section to appendix removes context the recommendation depends on.'],
      ['Replace the figure with management\'s view of the market, since they know it best', 'Management\'s market view is part of the sell side. The buyer\'s job is to size and segment independently, not to import the seller\'s framing of their own market.'],
    ],
    'IC market sections live or die on bottom-up rigor. Naming the served segment, the buyer, the share the company can realistically hold, and the dynamics that drive growth is what separates a memo that earns engagement from one that gets sent back for rework.'),

  q(4390403, 'Career Skills', CHAPTER, 'Deal terms inside the memo',
    'In the deal terms section of an IC memo for a $850M acquisition, which content most directly enables the partnership\'s decision?',
    'Sources and uses, purchase price construction (cash-free debt-free bridge), financing package (debt commitments, equity check), management rollover, and any earnout or escrow mechanics that move risk between buyer and seller',
    [
      ['A copy of the LOI draft with all legal markup attached for context', 'IC reads decisions, not legal markup. The associate\'s job is to summarize the deal economics and risk allocation, not to make partners parse redlines.'],
      ['Just the headline enterprise value and the equity check size, since the rest is mechanics', 'The mechanics are exactly what IC needs to evaluate — leverage, rollover, escrow, and earnouts shape returns and risk allocation. Reducing to two numbers strips out the substance.'],
      ['A sensitivity table showing IRR across exit multiples without explaining the term structure', 'A sensitivity table without the term sheet behind it is decorative. IC needs both the structure and the returns it produces.'],
    ],
    'The deal terms section is where economics and risk allocation meet on the page. Sources and uses, the cash-free debt-free bridge, financing commitments, rollover, and earnout / escrow mechanics are the substance — IC decides on the term structure, not just on the headline price.'),

  q(4390404, 'Career Skills', CHAPTER, 'Financial summary placement',
    'The MD has asked you to tighten the IC memo. The financial summary currently shows a five-year P&L, balance sheet, cash flow, and LBO outputs across base, upside, and downside cases. What belongs on the main page versus the appendix?',
    'Main page: 5-year P&L summary, base / upside / downside IRR and MOIC, leverage at close and exit, free cash flow generation. Appendix: full three-statement model, debt schedule, working capital build, sensitivity grids',
    [
      ['Put everything in the appendix and use the main page for the thesis narrative only', 'IC cannot decide without seeing the key numbers in line. Banishing all financials to the appendix forces partners to flip between sections to check the thesis.'],
      ['Put everything on the main page so partners do not need to consult the appendix', 'Overloading the main page with three statements and full debt schedules buries the few numbers that drive the decision. The right move is selection, not inclusion.'],
      ['Show only base case IRR and MOIC since downside scenarios make the deal look weaker', 'Hiding downside is exactly the move that erodes IC trust. Partners want to see how the thesis handles stress, and a memo that conceals it gets sent back or rejected outright.'],
    ],
    'Financial summary placement is an editing problem: the few numbers that drive the recommendation belong in line, and the supporting machinery (three statements, debt schedule, sensitivities) belongs in the appendix. The discipline is selection — and including the downside case is non-negotiable.'),

  q(4390405, 'Career Skills', CHAPTER, 'Value creation linkage',
    'The IC memo lists six value-creation initiatives totalling $45M of EBITDA expansion over five years. The deal MD wants the section restructured. What is the strongest restructuring?',
    'For each initiative, name the owner, the timing, the EBITDA impact, the evidence base from diligence, and the risk to execution — so IC can stress-test each line and the cumulative number behind the recommendation',
    [
      ['Combine all six initiatives into a single $45M EBITDA expansion bucket to keep the section tight', 'Combining initiatives into a single bucket hides exactly what IC wants to interrogate — which lever drives which dollar, and which is the riskiest piece of the plan.'],
      ['Move the value creation section to the appendix since it depends on post-close execution', 'Value creation is the underwriting case for the deal, not a post-close detail. Demoting it removes the largest single category of return drivers from the recommendation.'],
      ['Replace the dollar figures with qualitative descriptions to avoid being held to specific numbers', 'Qualitative descriptions make the plan unfalsifiable. IC needs numbers it can hold the team to, and removing them signals the team is not confident in the underwriting.'],
    ],
    'A value-creation section earns IC engagement when each initiative names its owner, timing, EBITDA impact, evidence, and execution risk. Without that structure, the cumulative number is a wish list, not an underwriting case the partnership can test.'),

  q(4390406, 'Career Skills', CHAPTER, 'Risks section honesty',
    'Your draft IC memo lists three risks in the risks section. The MD says she expects to see the deal\'s real risks, not a softened version. What should the rewrite look like?',
    'Name the 4-6 risks that genuinely could break the thesis (customer concentration, key person, cycle exposure, regulatory, integration risk) and pair each with the mitigation plan and the residual risk that remains after mitigation',
    [
      ['Keep the three risks as written but reframe them as "considerations" to soften the language', 'Renaming risks as considerations is the move IC trusts least. It signals the team is more interested in approval than in honest underwriting.'],
      ['Add many more minor risks so the section looks thorough', 'Padding with minor risks dilutes the real ones. IC reads the risks section for the 4-6 things that could actually break the deal, not for completeness theater.'],
      ['Only include risks that have already been fully mitigated, since IC will worry about unresolved items', 'Unresolved risks are precisely what IC needs to see — that is where the conditional approval lives. Hiding them is a fast way to lose the partnership\'s trust.'],
    ],
    'The risks section is the integrity test of an IC memo. Name the real risks, pair each with mitigation and residual exposure, and trust IC to handle the truth. Softened risks are the surest way to get a deal sent back or rejected after closing surprises.'),

  q(4390407, 'Career Skills', CHAPTER, 'Recommendation paragraph',
    'You are writing the closing recommendation of an IC memo for a $750M software services platform. What should the recommendation actually say?',
    'A clear ask: approve / reject / approve subject to conditions; the price, structure, and check size being approved; and the specific conditions or open diligence items that must close before signing',
    [
      ['A general statement that the deal team is excited about the opportunity', 'IC is not voting on enthusiasm. The recommendation has to name the specific decision being asked for — without it, the partnership has nothing concrete to approve.'],
      ['A list of further analysis the team would like to run before recommending anything', 'A memo that asks for more time instead of a decision is a status update, not a recommendation. If diligence is incomplete, the recommendation should be a conditional approval, not a request to come back.'],
      ['A summary of the thesis without the specific price, structure, or check the IC is being asked to approve', 'Without naming the price, structure, and check, the IC has nothing actionable. The recommendation paragraph is the line the partnership votes on.'],
    ],
    'The recommendation paragraph is the only line of the memo that the IC actually votes on. It has to name the decision, the price and structure being approved, and the conditions that close the loop before signing. Anything less is a status update.'),

  // -------------------------------------------------------------------------
  // IC DYNAMICS (4390408–4390410)
  // How the memo moves through the firm — MD review, partner edits, the
  // full vote. Understanding the chain is part of getting deals approved.
  // -------------------------------------------------------------------------
  q(4390408, 'Career Skills', CHAPTER, 'MD review before IC',
    'You are the associate on a deal. The MD has scheduled an internal review of the IC memo 48 hours before the IC vote. What is the right way to use this review?',
    'Treat it as the partnership rehearsal — bring the live memo, the model, and the diligence open items; the MD\'s job is to pressure-test the thesis, expose weak sections, and make sure the team will not be ambushed by predictable IC questions',
    [
      ['Bring a polished final draft and avoid raising open issues so the MD sees the deal at its strongest', 'Hiding open issues from the MD is the surest way to be ambushed at IC. The MD is on your side — the review is the moment to surface uncertainty before partners do.'],
      ['Treat the review as optional if the memo already reads cleanly and the model ties', 'A clean memo and tying model are not the same as an IC-ready thesis. The MD review is the last pressure-test before the partnership sees the deal.'],
      ['Use the meeting to ask the MD which sections to cut for length, not to debate the thesis', 'Reducing the MD review to a formatting exercise wastes the most valuable feedback loop the team has. The thesis is exactly what should be argued in this meeting.'],
    ],
    'The pre-IC MD review is the rehearsal that prevents avoidable IC failures. Bring the live document, surface open issues, and use the MD\'s pressure to harden the memo before the partnership reads it. Polishing instead of stress-testing is the most common preventable mistake in deal staffing.'),

  q(4390409, 'Career Skills', CHAPTER, 'Partner edits and pushback',
    'A senior partner reads the pre-IC draft and writes detailed comments challenging the customer concentration risk framing and the exit multiple assumption. What is the right associate response?',
    'Address each comment in writing within 24 hours — accept the edits where the partner is right, push back with evidence where the original framing was correct, and surface the genuinely open questions for the partnership to debate at IC',
    [
      ['Accept every edit without question to show deference and avoid confrontation', 'Reflexive acceptance signals the associate either does not understand the underwriting or does not have a view. Partners want pushback when evidence supports it — that is what conviction looks like.'],
      ['Defer all comments to be discussed live at IC, where the conversation can be more nuanced', 'Deferring partner comments to the IC meeting itself wastes the partnership\'s time and looks like the team did not engage with the feedback. Comments deserve a written response before IC.'],
      ['Argue every edit aggressively to defend the original draft and demonstrate conviction', 'Reflexive defense is as bad as reflexive acceptance. Conviction means engaging the evidence — accepting good edits, pushing back on weak ones, and flagging genuine open questions.'],
    ],
    'Partner edits are the highest-leverage feedback an associate gets on a deal. The right response is evidence-based and prompt: accept what is right, push back with data where the original was correct, and flag what is still open so the partnership can debate the live questions, not the stale ones.'),

  q(4390410, 'Career Skills', CHAPTER, 'Full IC vote mechanics',
    'Your firm has 8 voting partners on its investment committee. The standard policy is that a deal needs unanimous approval to proceed. Two partners vote no on your $900M deal, citing different concerns. What happens next?',
    'The deal is on hold — the team has to either address each dissenting partner\'s specific concern with more work and a re-vote, restructure the deal to address the concerns, or accept that the deal does not pass the firm\'s test and move on',
    [
      ['The deal proceeds because 6 of 8 partners voted yes, which is a strong majority', 'Unanimous-approval firms mean exactly that: any single no is a block. Reframing 6-of-8 as a majority is not how the rule works, and pushing forward erodes the partnership norm that gives IC its weight.'],
      ['The dissenting partners should be overruled by the managing partner since they are outvoted', 'Managing partners do not unilaterally overrule IC dissents at unanimous-approval firms. The whole point of the structure is that any partner can veto, and respecting that rule is how the firm stays disciplined.'],
      ['The team appeals to a separate committee that resolves IC disputes', 'Most PE firms do not have appeal committees. The deal team\'s only path is to address the substance of the concerns or accept the IC outcome.'],
    ],
    'A unanimous-approval IC means any partner can block. When dissents land, the deal team\'s job is to engage the substance — address concerns with more work, restructure the deal, or accept the partnership\'s judgment. Trying to route around dissent is what damages firms in the long run.'),

  // -------------------------------------------------------------------------
  // IC RED FLAGS (4390411–4390413)
  // What partners look for when reading a memo skeptically.
  // -------------------------------------------------------------------------
  q(4390411, 'Career Skills', CHAPTER, 'Contradictory thesis sections',
    'A partner reading the IC memo notices that the market section claims the target operates in a high-growth segment, while the financial summary uses a 3% revenue growth assumption in the base case. What is the right read?',
    'A contradiction between thesis sections is a structural red flag — either the market framing is overstated or the base case is too conservative; the team needs to reconcile the two and choose which read the partnership is being asked to underwrite',
    [
      ['It is not a problem because the market grows faster than any single company within it', 'That gap can be real, but the memo has to name it explicitly — not leave the partner to construct the reconciliation on their own. Unreconciled gaps read as carelessness, not nuance.'],
      ['The base case is conservative on purpose, so the contradiction is intentional and helpful', 'Conservatism is fine, but it has to be framed as such. Letting two sections of the memo say different things without acknowledging the gap erodes IC trust in the entire document.'],
      ['Partners should ignore minor inconsistencies between sections and focus on the recommendation', 'Internal consistency is the floor IC expects from a memo. Inconsistent thesis sections are exactly what partners read carefully — they signal either confusion or selective presentation.'],
    ],
    'Contradictions between memo sections are one of the most common red flags partners surface at IC. The market story, the model assumptions, the value-creation case, and the exit thesis all have to fit together — when they do not, the memo signals either that the underwriting is confused or that the team is hoping no one reads it carefully.'),

  q(4390412, 'Career Skills', CHAPTER, 'Unrealistic synergies in the model',
    'A buy-and-build deal model shows $80M of run-rate synergies on a platform with $120M of EBITDA — a 67% synergy uplift over the existing earnings base. A senior partner flags this in IC. Why is this a red flag and how should the team respond?',
    'Synergies that approach or exceed the platform\'s standalone EBITDA are typically over-modeled — the team needs to decompose the $80M by lever (procurement, headcount, real estate, revenue cross-sell), show evidence for each, and risk-adjust the total to a defensible number',
    [
      ['The team should defend the $80M because it was built from a detailed bottom-up synergy plan', 'A bottom-up plan is necessary but not sufficient. The benchmark for synergy realism is also empirical — synergies at this scale almost always under-deliver, and IC wants to see the risk-adjustment, not just the build.'],
      ['Synergies at 67% of standalone EBITDA are aggressive but common in buy-and-build, so no adjustment is needed', 'Common-in-models is not the same as common-in-realization. Industry studies repeatedly show synergy capture below plan, and IC partners discount large synergy numbers as a matter of pattern recognition.'],
      ['The synergy estimate should be left alone since reducing it would kill the deal returns', 'If the deal only works at unrealistic synergy levels, the deal does not work. Adjusting the synergy number is the integrity move; refusing to adjust is exactly the behavior that creates over-promised deals.'],
    ],
    'Synergy numbers that approach or exceed standalone EBITDA are one of the cleanest IC red flags. The discipline is decomposition by lever, evidence per line, risk-adjustment for execution, and willingness to revise the total. Defending an unrealistic number because the deal needs it is how sponsors end up writing down platforms two years later.'),

  q(4390413, 'Career Skills', CHAPTER, 'Over-leverage in the structure',
    'A proposed LBO uses 7.5x first-lien plus 1.5x second-lien for total opening leverage of 9x on a cyclical industrial business. The downside case shows leverage rising to 11x in a recession. What is the right IC concern?',
    '9x opening leverage on a cyclical business with 11x downside leverage is structurally fragile — the covenant headroom is too thin, refinancing risk is concentrated, and the equity has almost no margin against forecast error; the structure needs less leverage or a different target',
    [
      ['9x leverage is acceptable because the lenders agreed to underwrite it', 'Lender appetite tells you the financing exists, not that the structure is prudent. In frothy credit markets, lenders underwrite leverage that turns into restructurings two years later — that is the sponsor\'s problem, not theirs.'],
      ['Cyclical leverage is fine if the model shows the company can service the debt in the base case', 'The base case is the optimistic scenario. The IC question is whether the structure survives the downside — and 11x downside leverage is the answer that says no.'],
      ['The team should accept the leverage and plan to refinance at the bottom of the cycle if needed', 'Hoping to refinance in a downturn is not a plan. Credit markets close exactly when over-levered cyclicals need them open, and assuming otherwise is the textbook way over-levered deals become workouts.'],
    ],
    'Over-leverage is one of the most consequential IC red flags because it is structural — once the deal closes at 9x on a cyclical business, the equity can do almost nothing if the cycle turns. Partners reading a memo with this kind of structure should push the team to either de-lever the deal or walk away.'),

  // -------------------------------------------------------------------------
  // DEAL SEQUENCING (4390414–4390417)
  // The standard flow: NDA -> CIM -> mgmt mtgs -> IOI -> LOI -> exclusivity
  // -> SPA -> close. Each step has a purpose.
  // -------------------------------------------------------------------------
  q(4390414, 'Career Skills', CHAPTER, 'NDA to CIM step',
    'You receive a teaser from a sell-side banker on a $400M healthcare services platform. The teaser is anonymized. What is the right next step if your fund is interested?',
    'Sign the NDA so the banker can release the full Confidential Information Memorandum (CIM) — the CIM names the company, provides financials and management bios, and is what enables a real preliminary read',
    [
      ['Ask the banker for the CIM and management access before signing anything', 'Sell-side bankers do not release the CIM or schedule management access before the NDA. The NDA is the gating step, not paperwork after the real diligence starts.'],
      ['Make a preliminary bid based on the teaser alone, since speed signals interest', 'Bidding off a teaser alone is uninformed bidding. The teaser is intentionally thin; making an offer without the CIM\'s financials and management context is not aggressive, it is sloppy.'],
      ['Wait for the banker to send the CIM unprompted as a courtesy after the teaser', 'Bankers do not unsolicit CIMs. The process is buyer-initiated: NDA in, CIM out, every time.'],
    ],
    'The NDA is the first gating step in any sponsor-led auction. It costs almost nothing and unlocks the CIM, which is the document that turns an anonymous teaser into a real opportunity. Skipping or stalling the NDA is the surest way to fall behind in a process.'),

  q(4390415, 'Career Skills', CHAPTER, 'CIM to management meetings',
    'After reading the CIM on a $600M industrial distribution platform, your team is interested. The banker has invited you to attend a management presentation in two weeks. What is the right preparation?',
    'Prepare a short list of substantive questions that test the load-bearing parts of the thesis (customer concentration, contract structure, growth drivers, margin trajectory, key person risk) — management meetings are where you separate the CIM narrative from the operating reality',
    [
      ['Show up with general questions and let management drive the agenda so the conversation flows', 'Letting management drive the agenda means hearing the rehearsed pitch. The buyer\'s job is to pressure-test the load-bearing claims, which only happens with prepared, specific questions.'],
      ['Prepare only a firm overview and rely on management to walk through the operating story', 'Management meetings happen on a tight calendar. The buyer needs specific thesis-testing questions, not just a rapport-building introduction.'],
      ['Send the question list in advance so management can prepare polished answers', 'Sending questions in advance produces rehearsed answers and lower diligence value. The questions are designed to test on-the-spot reasoning, not generate prepared scripts.'],
    ],
    'Management meetings are where the CIM narrative meets the operating reality. The buyer\'s job is to come prepared with specific, evidence-seeking questions and to read the answers — both the substance and the way management handles pressure. Wasted management meetings cannot be re-run.'),

  q(4390416, 'Career Skills', CHAPTER, 'IOI vs LOI',
    'The banker has asked for an Indication of Interest (IOI) at the first round of bidding on an $800M deal. The associate on your team asks whether an IOI is the same as a Letter of Intent (LOI). What is the right distinction?',
    'An IOI is a non-binding first-round bid that names a valuation range and key terms — bankers use IOIs to narrow the field; an LOI is a more detailed, typically exclusive (or near-exclusive) second-round bid that includes specific price, financing source, and material terms',
    [
      ['IOIs and LOIs are interchangeable terms for the same first-round document', 'They are sequential steps in a process, not synonyms. Treating an IOI like an LOI overcommits early; treating an LOI like an IOI underbids when precision is required.'],
      ['An IOI is binding while an LOI is non-binding, since the IOI comes earlier', 'It is the reverse — IOIs are explicitly non-binding range indications, and LOIs, while typically non-binding on price, include exclusivity provisions that *are* binding. The directionality matters.'],
      ['An LOI is just an internal document for the sponsor and never goes to the seller', 'LOIs are the formal second-round bid document submitted to the seller and become the basis for moving into exclusivity. They are external, not internal.'],
    ],
    'IOI and LOI are sequential stages in a standard sponsor-led process: IOI for the first round to clear the field, LOI for the second round to win exclusivity. Confusing the two leads to bids that are either too precise too early or not precise enough when it matters.'),

  q(4390417, 'Career Skills', CHAPTER, 'LOI to exclusivity to SPA flow',
    'Your fund\'s LOI on a $1.1B platform is accepted. The banker confirms you have exclusivity. What is the standard sequence from here through close?',
    'Exclusivity (30-60 days) for confirmatory diligence and SPA negotiation; SPA execution at signing; then a period between sign and close to satisfy conditions (regulatory, financing, third-party consents); then closing when conditions clear',
    [
      ['Sign the SPA immediately and run diligence after signing to compress the timeline', 'Signing the SPA before diligence completes inverts the process. Diligence informs SPA negotiation (price adjustments, indemnities, MAC, reps); doing them in the wrong order forecloses the leverage the diligence creates.'],
      ['Close the deal at the same moment the SPA is signed by wiring funds simultaneously', 'Sign-and-close on the same day is rare except in small or simple deals. Most platform deals have regulatory (HSR), consents, and financing conditions that take weeks to clear between sign and close.'],
      ['Exclusivity, SPA, and close happen in any order depending on what the parties prefer', 'The sequence is standard for a reason — each step builds on the last. Reordering breaks the legal and economic logic of how deal risk transfers between buyer and seller.'],
    ],
    'The post-LOI flow is one of the most reliable patterns in deal-making: exclusivity for confirmatory diligence and SPA negotiation, signing when the document is ready, then a sign-to-close period to clear conditions. Each stage exists because the prior one would not function without it.'),

  // -------------------------------------------------------------------------
  // AUCTION STRATEGIES (4390418–4390420)
  // -------------------------------------------------------------------------
  q(4390418, 'Career Skills', CHAPTER, 'Pre-emptive bid logic',
    'A sell-side banker has indicated the auction process for a $500M specialty distributor will run with 8 bidders in round one. Your fund has high conviction. When does a pre-emptive bid make sense and what does it cost?',
    'Pre-empt when the asset is high-conviction, scarce, and likely to clear above your underwriting in a competitive process; pre-empt requires paying full value upfront, but it buys you exclusivity early, faster diligence access, and a chance to lock the deal before competing bidders sharpen their pencils',
    [
      ['Pre-empt every time to avoid auction premium and competitive bidding', 'Pre-empting indiscriminately means paying full value on deals that might have cleared lower in a competitive process. The discipline is to pre-empt only where conviction is high enough to justify the premium.'],
      ['Never pre-empt because going through the full auction always produces better terms for the buyer', 'A full auction often produces a higher clearing price, not a better outcome for the buyer. Pre-empting on the right asset can save the auction premium entirely if the seller takes the bird-in-hand.'],
      ['Pre-empt only on small deals where the full auction is not worth the seller\'s time', 'Pre-emption is more common on large deals where the seller wants speed and certainty, not on small ones. The asset characteristics, not the size, drive the decision.'],
    ],
    'Pre-emptive bids are a conviction-and-scarcity play. They cost a full price upfront but buy speed, exclusivity, and certainty — and on the right asset, they prevent the seller from running the bidders against each other. The skill is knowing which assets are worth the premium and which clear lower in a competitive process.'),

  q(4390419, 'Career Skills', CHAPTER, 'First round positioning',
    'You are submitting a first-round IOI for a $700M business services platform. The banker has hinted that 5 bidders will advance to round two. What is the right strategic posture for the IOI?',
    'Bid a valuation range that lands inside the top tier of likely bids but does not commit to a final price — the goal of round one is to make round two; underbidding gets you cut, overbidding eliminates negotiating room at LOI',
    [
      ['Bid the highest possible number to ensure advancement and worry about price discipline at LOI', 'Bidding the highest number at IOI sets an anchor you cannot retreat from at LOI without looking weak. Round-one bids are sticky — banks remember.'],
      ['Bid the lowest defensible number to preserve maximum negotiating room for the LOI', 'A low round-one bid often gets cut from round two regardless of conviction. The banker is filtering for credibility and engagement, not auctioneering ability.'],
      ['Submit a non-numerical letter of interest to keep all options open through round two', 'Bankers running structured processes require numerical IOIs to narrow the field. A non-numerical letter typically does not advance.'],
    ],
    'First-round IOIs are about making the cut to round two with credibility intact. The valuation range should be in the top tier of likely bids but should not overshoot the LOI — the round-one number becomes the anchor for everything that follows, so positioning, not maximization, is the discipline.'),

  q(4390420, 'Career Skills', CHAPTER, 'When to fold from a process',
    'After confirmatory diligence on a $600M target, your team identifies a customer-concentration issue and a working capital understatement that together change the underwriting materially. You are in exclusivity with the SPA being drafted. What is the right move?',
    'Fold or renegotiate — present the findings to the seller with a clear price adjustment or term change, and walk away if the seller cannot accommodate; staying in a deal where the underwriting has broken is how sponsors close bad deals',
    [
      ['Push through to close because backing out at this stage damages the fund\'s reputation with bankers', 'Walking away from a deal where diligence breaks the thesis is the discipline bankers actually respect. Pushing through to a known bad deal is what damages reputation — and the fund.'],
      ['Close at the original price and use the indemnification package to recover the working capital shortfall later', 'Indemnification is not a substitute for getting the price right at signing. Litigating recovery post-close is slow, contested, and rarely makes the buyer whole.'],
      ['Accept the broken underwriting because losing exclusivity would restart a long process', 'Exclusivity pressure is exactly when discipline matters most. Closing a known bad deal because the alternative is slow is the textbook sunk-cost mistake.'],
    ],
    'Folding from a deal is a real skill. When confirmatory diligence breaks the underwriting, the right move is to either renegotiate the terms to restore the case or walk away. Closing a bad deal to avoid the cost of folding is how sponsors end up with write-downs they could have prevented.'),

  // -------------------------------------------------------------------------
  // LOI vs BINDING (4390421–4390422)
  // -------------------------------------------------------------------------
  q(4390421, 'Career Skills', CHAPTER, 'Non-binding LOI mechanics',
    'Your firm has signed an LOI on a $450M acquisition. The LOI states it is "non-binding except for exclusivity, confidentiality, and expense provisions." What does this actually mean?',
    'The price and most commercial terms are non-binding — either party can walk before SPA execution — but the exclusivity (no-shop), confidentiality, and reimbursement clauses are binding from signature; this is the standard US LOI structure',
    [
      ['The entire LOI is non-binding, so the exclusivity and confidentiality language has no legal effect', 'Selective binding is the entire point of the language. Confidentiality and exclusivity are binding precisely so the buyer can invest in diligence without the seller running a parallel process.'],
      ['The LOI binds the buyer to close at the stated price unless diligence finds something material', 'Non-binding price terms mean the buyer can walk for any reason or no reason. They do not lock the price the way a binding offer would.'],
      ['Non-binding LOIs cannot include enforceable provisions of any kind under US law', 'Non-binding LOIs routinely include enforceable provisions — exclusivity, confidentiality, expense reimbursement, governing law. The "non-binding" label refers to commercial terms, not to every clause.'],
    ],
    'A typical US LOI is selectively binding: commercial terms (price, structure) are non-binding so diligence can drive renegotiation, but exclusivity, confidentiality, and expense provisions are binding so the buyer can spend on diligence with confidence the seller is not shopping. Understanding the split is the difference between a useful LOI and a confusing one.'),

  q(4390422, 'Career Skills', CHAPTER, 'When LOI becomes binding',
    'A buyer asks the seller to sign a "binding LOI" instead of a typical non-binding LOI on a $300M deal. What does a binding LOI commit the parties to?',
    'A binding LOI commits both parties to close at the stated terms subject only to specified conditions (financing, regulatory, no MAC) — it is effectively a short-form purchase agreement and skips the gap between LOI and SPA',
    [
      ['A binding LOI commits to negotiating in good faith but not to closing', 'Good-faith negotiation is a feature of non-binding LOIs too. A binding LOI goes further — it commits to the substantive close subject to named conditions.'],
      ['Binding LOIs are not legally enforceable in Delaware and are used only symbolically', 'Binding LOIs are enforceable in Delaware. Courts will enforce specific performance or damages depending on the breach.'],
      ['Binding LOIs are the same as non-binding LOIs except for the title', 'The title carries real legal weight. A binding LOI shifts the buyer\'s ability to walk and creates a contractual obligation to close on specified terms.'],
    ],
    'Binding LOIs are rare but real — they commit both parties to close on the stated terms subject only to named conditions, and they skip the SPA negotiation gap. They are used when the seller wants certainty and the buyer is willing to lock in early without the typical diligence-driven renegotiation window.'),

  // -------------------------------------------------------------------------
  // EXCLUSIVITY (4390423–4390424)
  // -------------------------------------------------------------------------
  q(4390423, 'Career Skills', CHAPTER, '30-60 day exclusivity window',
    'Your fund\'s LOI on a $550M deal includes 45 days of exclusivity. The associate asks why the window is set at this length. What is the standard logic for a 30-60 day exclusivity period?',
    'It balances the buyer\'s need for sufficient diligence and SPA negotiation time against the seller\'s reluctance to remove the asset from the market for too long — most US PE processes settle in the 30-60 day band based on deal complexity',
    [
      ['Exclusivity is always 90 days regardless of deal complexity', 'Exclusivity periods scale with deal size and complexity. Small or simple deals can close in 30 days; complex regulated deals run 60-90, but the typical sponsor band is 30-60.'],
      ['Exclusivity periods are set by Delaware statute at 30 days', 'There is no statutory exclusivity period. The length is negotiated case by case based on the diligence and documentation work required.'],
      ['Sellers always prefer the longest exclusivity period because it reduces process burden', 'Sellers want exclusivity short, not long — every day off-market is a day the seller cannot run an alternative process if the buyer slips. The negotiation is buyer-pushing-long against seller-pushing-short.'],
    ],
    'A 30-60 day exclusivity window is the market norm for US PE deals because it balances diligence depth against the seller\'s exposure to an off-market period. Shorter windows compress diligence; longer ones expose the seller to buyer drag — and the band has settled where most deals can actually be done.'),

  q(4390424, 'Career Skills', CHAPTER, 'Negotiating exclusivity extensions',
    'You are in day 38 of a 45-day exclusivity window. Confirmatory diligence has surfaced an environmental issue that requires a Phase II site assessment that will take another 21 days. The SPA is otherwise close to final. How should the team approach the seller?',
    'Request a targeted extension (e.g., 21 days) specifically tied to the Phase II work, with a written explanation of the scope and timeline — sellers will usually grant a substantive extension on a real diligence item, but resist open-ended or vague requests',
    [
      ['Let exclusivity expire and pick the negotiation back up afterward, since the deal is mostly done', 'Letting exclusivity expire lets the seller restart the process. Even if the original buyer is the frontrunner, the seller now has leverage to reopen price or accept a competing bid.'],
      ['Ask for a 90-day extension to give the team comfortable headroom for any remaining issues', 'Open-ended extension requests signal buyer disorganization. Sellers grant tied, time-boxed extensions on identified issues; vague requests get refused or come with a price concession.'],
      ['Force the SPA to signing with the environmental issue unresolved and handle it via indemnification post-close', 'Closing with a known unresolved environmental issue and trusting the indemnification package is exactly the kind of unforced error sellers exploit. The Phase II work is the right diligence step.'],
    ],
    'Exclusivity extensions are negotiated, not assumed. A targeted, time-boxed request tied to a specific diligence item is usually granted; an open-ended or vague request signals disorganization and gives the seller leverage. The discipline is to ask once, ask specifically, and tie the ask to identifiable work.'),

  // -------------------------------------------------------------------------
  // SPA / DEFINITIVE AGREEMENT (4390425–4390430)
  // -------------------------------------------------------------------------
  q(4390425, 'Career Skills', CHAPTER, 'SPA as definitive agreement',
    'After exclusivity, the deal team is negotiating the definitive agreement. The associate asks what the SPA actually contains. What is the right framing?',
    'The Stock Purchase Agreement (or in asset deals, Asset Purchase Agreement) is the binding contract that defines purchase price, structure, reps and warranties, covenants, conditions to closing, indemnification, MAC, and termination rights — it is the document the deal closes on',
    [
      ['The SPA is just the binding version of the LOI with the same content and longer language', 'The SPA goes well beyond the LOI — it includes detailed reps, disclosure schedules, covenants, indemnification mechanics, and closing conditions that the LOI typically does not address.'],
      ['The SPA covers only the purchase price and structure; everything else is in side agreements', 'The SPA is the master document. Side agreements (employment, escrow, transition services) live separately, but the SPA itself covers the core deal economics, allocation of risk, and closing mechanics.'],
      ['The SPA is non-binding until closing happens, at which point it becomes binding', 'The SPA is binding from execution. Closing is the satisfaction of conditions, not the moment the contract becomes legally effective.'],
    ],
    'The SPA is the definitive agreement — the binding contract that defines economics, risk allocation, and closing mechanics. It is the document the deal closes on and the document that governs disputes after close, so its terms (reps, covenants, conditions, indemnification, MAC) deserve the same attention as the price.'),

  q(4390426, 'Career Skills', CHAPTER, 'Disclosure schedules role',
    'The seller\'s counsel has delivered 80 pages of disclosure schedules to accompany the SPA representations and warranties. The associate asks what these schedules do. What is the right answer?',
    'Disclosure schedules carve out specific exceptions to the reps and warranties — the seller lists known issues (pending litigation, named contracts, environmental matters, etc.) so the buyer cannot later claim a breach for items disclosed; reviewing the schedules is core diligence',
    [
      ['Disclosure schedules are administrative and do not affect the legal effect of the reps', 'Disclosure schedules are dispositive. Anything properly disclosed is not a breach of the corresponding rep, which directly affects the buyer\'s post-close indemnification rights.'],
      ['Disclosure schedules are drafted by the buyer to flag concerns from diligence', 'It is the reverse — disclosure schedules are drafted by the seller to list known exceptions to their reps. They are the seller\'s tool to limit indemnification exposure.'],
      ['Reviewing disclosure schedules is a legal task only and not part of the diligence workflow', 'Disclosure schedules are where seller diligence concentrates. They surface known liabilities and shape the risk allocation — the deal team has to review them in detail, not just the lawyers.'],
    ],
    'Disclosure schedules are the seller\'s carve-out from the reps and warranties — they list every known exception the seller wants protected from being treated as a breach. Reviewing them carefully is one of the highest-leverage diligence steps because they often reveal liabilities not surfaced in the data room.'),

  q(4390427, 'Career Skills', CHAPTER, 'Reps and warranties depth',
    'The SPA on a $400M software acquisition includes 30 pages of seller representations and warranties. What is the buyer trying to accomplish with this level of depth?',
    'Reps and warranties allocate risk between seller and buyer by having the seller affirmatively state facts about the business (financial statements accurate, no undisclosed liabilities, IP owned, no material litigation) — breaches give the buyer indemnification rights for losses suffered',
    [
      ['Reps and warranties are a legal formality and do not affect deal economics', 'Reps and warranties are the primary mechanism for shifting risk in a US deal. A weak rep package leaves the buyer exposed to losses the seller knew about; a strong package gives recovery rights for years post-close.'],
      ['Reps and warranties only matter if the buyer purchases R&W insurance', 'R&W insurance amplifies the value of strong reps, but even without insurance, reps are the contractual basis for indemnification claims. They matter independently of the insurance layer.'],
      ['Reps and warranties become irrelevant after the closing date', 'Most reps survive for 12-24 months post-closing (longer for fundamental and tax reps), which is exactly when the buyer is most likely to discover undisclosed issues that the reps protect against.'],
    ],
    'Reps and warranties are the contract\'s primary risk-allocation tool. Each rep is a statement the seller affirms is true; breaches give the buyer indemnification rights. The depth of the rep package shapes how much risk transfers from seller to buyer at signing — which is why reps get negotiated as hard as the price.'),

  q(4390428, 'Career Skills', CHAPTER, 'MAC clause in a downturn',
    'Between signing and closing on a $900M deal, the target\'s end-market experiences a sharp downturn, with revenue declining 35% over 90 days. The SPA includes a Material Adverse Change (MAC) clause. Can the buyer walk?',
    'Probably not — Delaware courts (Akorn v. Fresenius is the leading case) set a very high bar for MAC invocation: the change must be durationally significant, business-specific (not industry-wide), and not subject to standard MAC carve-outs (general economic conditions, industry-wide effects); short-term industry-wide declines usually do not qualify',
    [
      ['Yes — a 35% revenue decline is clearly material and triggers the MAC clause', 'MAC analysis is not just about magnitude. Delaware courts apply a multi-factor test: duration, business-specific impact, and carve-out exclusions. A short-term industry-wide decline almost never qualifies regardless of size.'],
      ['Yes — any MAC clause allows buyer termination at the buyer\'s discretion if conditions deteriorate', 'MAC clauses are not buyer-discretion options. They are narrowly construed by Delaware courts, and Akorn remains the only modern case where invocation succeeded.'],
      ['No — MAC clauses are unenforceable in Delaware and serve only as negotiating leverage', 'MAC clauses are enforceable in Delaware; they are just very hard to invoke successfully. The clause has legal force, but the bar for triggering it is high.'],
    ],
    'MAC clauses are a feature of every modern SPA but rarely a true buyer exit. Delaware\'s Akorn v. Fresenius standard requires durationally significant, business-specific deterioration outside standard carve-outs (general economic conditions, industry-wide effects). Most buyers who walk under "MAC" are really negotiating a price reduction, not exercising a termination right.'),

  q(4390429, 'Career Skills', CHAPTER, 'Indemnification caps and survival',
    'The SPA on a $500M deal has indemnification provisions including a $25M cap, a 12-month survival period for general reps, and a $500K deductible (basket). What does each term do?',
    'The $25M cap is the maximum the seller has to pay for rep breaches; the 12-month survival is the window during which the buyer must bring claims; the $500K deductible is the threshold the buyer must absorb before the seller pays — together they bound seller exposure',
    [
      ['The cap is the maximum the buyer can claim regardless of survival or deductible', 'The cap, survival, and deductible work together. The cap bounds total exposure, survival bounds the time window, and the deductible bounds the threshold — losing on any one element forecloses recovery.'],
      ['Survival periods can be extended unilaterally by the buyer after closing', 'Survival is a fixed contractual window that cannot be extended unilaterally. After it expires, claims for breach are foreclosed except for fundamental reps and fraud.'],
      ['The deductible only applies if the cap has already been reached', 'The deductible (sometimes called the basket) applies first — the buyer absorbs losses up to that amount, and only excess losses count against the cap. The two work in sequence, not in conflict.'],
    ],
    'Indemnification caps, survival, and deductibles are the three knobs that bound seller exposure in a US deal. The cap sets the maximum; survival sets the window; the deductible sets the threshold. Buyers negotiate for larger caps, longer survival, smaller deductibles; sellers push the other way. Understanding the interaction is core SPA literacy.'),

  q(4390430, 'Career Skills', CHAPTER, 'Escrow as recovery source',
    'The SPA on a $300M deal includes a $15M escrow held by a third-party agent for 18 months. The associate asks what the escrow is for. What is the right framing?',
    'The escrow is the buyer\'s primary recovery source for rep breaches — funds are held by an independent escrow agent and released to either party based on the SPA\'s claim and release mechanics; it converts the seller\'s indemnification obligation from an unsecured promise into a funded reserve',
    [
      ['The escrow is held by the buyer until the survival period expires, then returned to the seller', 'Escrows are held by independent third-party agents, not by the buyer. The third party prevents either party from controlling the funds during the survival window.'],
      ['Escrow funds are released only at the survival period expiration with no interim payouts', 'Funds can be released during the survival period in response to validated claims. The release mechanics are part of the SPA, and partial releases at milestone dates are common.'],
      ['Escrows are only used when the seller is a distressed or low-creditworthiness entity', 'Escrows are standard in mid-market US PE deals regardless of seller creditworthiness, because they convert the seller\'s post-close indemnity into a funded reserve the buyer can actually access.'],
    ],
    'The escrow is the engine that makes indemnification real. A great rep package and a generous cap are worth less if the seller is illiquid or contested in 18 months. The escrow turns indemnification from a litigation prospect into a contractually controlled reserve — which is why it is a standard feature of US PE deals.'),

  // -------------------------------------------------------------------------
  // R&W INSURANCE (4390431)
  // -------------------------------------------------------------------------
  q(4390431, 'Career Skills', CHAPTER, 'R&W policy at ~3% of limit',
    'On a $700M deal, the buyer is considering a $70M Representations and Warranties insurance policy. The broker quotes a premium of approximately $2.1M plus underwriting fees and retention. What is the role of the R&W policy and is the pricing typical?',
    'R&W insurance shifts indemnification risk from the seller to an insurer — premiums in the US market typically run 2.5-4% of the policy limit, so $2.1M on a $70M policy (3%) is in the standard range; in exchange, the seller\'s indemnification obligation is reduced (often to a small "sandbag") and the buyer recovers from the insurer for covered breaches',
    [
      ['R&W insurance is unusual in US PE and is mainly used in European deals', 'R&W insurance has become near-standard in US sponsor-led mid-market deals over the last decade. It is one of the most-used insurance products in M&A.'],
      ['R&W premiums typically run 8-10% of policy limit because the underwriting is intensive', 'Premiums are 2.5-4% of the limit, not 8-10%. The pricing reflects the underwriting risk and competitive insurance market.'],
      ['R&W insurance replaces the SPA reps entirely — no rep package is needed when a policy is in place', 'R&W policies cover the SPA reps as drafted. A weak rep package leaves the buyer uncovered for the gaps; the insurance is layered on top of the contractual reps, not a substitute.'],
    ],
    'R&W insurance at roughly 3% of policy limit has become the standard recovery layer in US mid-market PE deals. It shifts indemnification from the seller to an insurer, reduces post-close seller exposure to a small sandbag, and gives the buyer a creditworthy counterparty for claims — all in exchange for a 2.5-4% premium that the deal usually splits or that the buyer absorbs.'),

  // -------------------------------------------------------------------------
  // EARNOUTS (4390432)
  // -------------------------------------------------------------------------
  q(4390432, 'Career Skills', CHAPTER, 'Earnouts and the litigation tail',
    'A founder-owned target is asking $400M but the buyer\'s model only supports $340M. The seller proposes a $60M earnout payable over three years based on EBITDA milestones. What is the right way to evaluate the earnout?',
    'Earnouts are litigation magnets — buyers and sellers fight over EBITDA definitions, operating decisions that affect the metric (capex, hiring, integration), and good-faith conduct; the right approach is to use earnouts only when the gap is real and uncertain, define the metric mechanically, and price the litigation risk into the structure',
    [
      ['Earnouts close the bid-ask gap and should be used whenever the buyer and seller disagree on price', 'Earnouts that paper over a price disagreement instead of resolving a real uncertainty almost always end in dispute. The right test is whether the metric is genuinely uncertain — not whether the price gap is uncomfortable.'],
      ['Earnouts are simple deferred-payment mechanisms that resolve themselves automatically based on the metric', 'Earnouts are routinely litigated in Delaware over implied covenants of good faith, EBITDA definitions, and post-close operating decisions. Treating them as automatic is exactly the mistake that creates the litigation.'],
      ['Earnouts always favor the buyer because the buyer controls operations post-close', 'Earnouts can favor either party depending on how the metric and good-faith obligations are drafted. Sellers regularly recover earnouts even when buyers manage the business — and sometimes recover precisely because the buyer manipulated the metric.'],
    ],
    'Earnouts are not a price-gap solution; they are a structured bet on a genuinely uncertain outcome. Used poorly, they paper over disagreement and produce years of litigation. Used well, they share risk on a real uncertainty (e.g., FDA approval, contract renewal) with a mechanically defined metric. The Delaware case law on implied good faith is the reason they deserve careful drafting, not casual use.'),

  // -------------------------------------------------------------------------
  // ROLLOVER (4390433)
  // -------------------------------------------------------------------------
  q(4390433, 'Career Skills', CHAPTER, '5-15% rollover pool',
    'On a $600M founder-owned acquisition, the sponsor is requesting that management roll over equity into the new deal. The founder asks how much rollover is typical. What is the right answer?',
    'Rollover is usually 5-15% of the new equity, scaled to seniority and conviction — the founder may roll a larger percentage of personal proceeds, while other senior managers roll proportionally less; the goal is alignment, not maximum capital extraction from the management team',
    [
      ['Sponsors typically require 50% or more rollover from the founder to ensure alignment', '50% rollover is unusual and would leave the founder with limited liquidity from the sale. Standard practice is 5-15% of the new equity, with the founder personally rolling a larger share of their proceeds.'],
      ['Rollover is optional and has no impact on deal structure or alignment', 'Rollover is a standard alignment tool. Sponsors structure it deliberately to keep management economically invested — the absence of rollover is itself a deal signal.'],
      ['Rollover is taxed as ordinary income at closing regardless of structure', 'Rollover is typically structured to qualify for tax deferral (Section 351 or similar mechanics), which is one of the reasons it is attractive to management. Treating it as taxable at closing misunderstands the tax mechanic.'],
    ],
    'Rollover at 5-15% of new equity is the standard alignment lever in US PE. The founder typically rolls a larger personal percentage of proceeds, other senior managers roll proportionally less, and the rollover is structured for tax deferral. The discipline is to set the rollover to match the alignment you actually want, not to maximize the management capital at risk.'),

  // -------------------------------------------------------------------------
  // MANAGEMENT PACKAGE (4390434–4390435)
  // -------------------------------------------------------------------------
  q(4390434, 'Career Skills', CHAPTER, 'MIP vesting and cliff',
    'The Management Incentive Plan (MIP) on a $500M acquisition allocates 10% of the equity to a pool with 5-year vesting and a 1-year cliff. What is the function of the cliff and the vesting schedule?',
    'The vesting schedule (typically 4-5 years) keeps management economically tied to the hold period; the 1-year cliff means managers forfeit unvested equity if they leave in year one — both are alignment tools designed to retain the team through the value-creation period',
    [
      ['Vesting and cliff are administrative formalities that do not affect retention behavior', 'Vesting and cliff are core retention mechanics. They directly shape when management can leave with vested equity, and they materially affect departures in the first year.'],
      ['The cliff means managers receive no equity for 5 years and then receive all equity at year 5', 'The 1-year cliff means *no vesting until year 1* — after year 1, equity vests according to the schedule (often monthly or annually) over the full 4-5 year period. It is a floor, not a backloaded grant.'],
      ['Vesting schedules are set by Delaware statute and cannot be modified by the sponsor', 'Vesting is contractual and freely negotiable. Sponsors customize vesting to fit hold-period expectations, with 4-5 years and a 1-year cliff being the dominant pattern.'],
    ],
    'MIP vesting and cliff are the standard retention machinery in PE management packages. The cliff prevents early-departure equity capture; the multi-year vest keeps managers economically tied to the value-creation period. The structure is a deliberate alignment tool, not a formality.'),

  q(4390435, 'Career Skills', CHAPTER, 'Good leaver vs bad leaver provisions',
    'The MIP agreement defines "good leaver" and "bad leaver" departures with different equity treatment. The associate asks how these provisions actually operate. What is the right framing?',
    'Good leaver (death, disability, retirement, termination without cause) keeps vested equity at fair value; bad leaver (resignation without good reason, termination for cause) typically forfeits unvested equity and often loses vested equity at the lower of cost and fair value — the provisions shape the cost of leaving',
    [
      ['Good and bad leaver categories are interchangeable and produce the same equity outcome', 'They are deliberately asymmetric. The whole point is to align manager incentives with sponsor expectations — leaving "well" preserves equity, leaving "badly" forfeits or repurchases at unfavorable terms.'],
      ['Bad leaver provisions are unenforceable in Delaware and serve only as drafting boilerplate', 'Leaver provisions are enforceable in Delaware. They have been litigated extensively and courts generally uphold the contractual treatment so long as the definitions are clear and not punitive beyond contract norms.'],
      ['Good leaver provisions apply to the company\'s discretion and bad leaver provisions are automatic', 'Both categories are defined by contractual triggers (death, disability, cause definitions, good reason definitions), not by company discretion. The category determines the equity treatment automatically once the trigger is met.'],
    ],
    'Good leaver and bad leaver provisions are the contractual machinery that makes management equity asymmetric — leaving for the right reasons preserves value, leaving for the wrong reasons forfeits or repurchases unfavorably. The asymmetry is deliberate, and the careful drafting of the trigger definitions (especially "cause" and "good reason") is where the alignment lives.'),

  // -------------------------------------------------------------------------
  // FINANCING CONDITION (4390436)
  // -------------------------------------------------------------------------
  q(4390436, 'Career Skills', CHAPTER, 'Committed financing eliminates condition',
    'The SPA on a $1B acquisition contains no financing condition. The seller\'s counsel notes this means the buyer cannot walk if financing falls through. How is this typically handled in modern US PE deals?',
    'Sponsors deliver committed financing (lender debt commitment letters and equity commitment letters from the fund) at signing, which eliminates the need for a financing condition in the SPA — sellers strongly prefer this because it converts the buyer\'s commitment from "subject to financing" into a firm obligation backed by lender commitments',
    [
      ['Financing conditions are standard in US PE deals and almost never excluded from the SPA', 'Financing conditions have become rare in competitive sponsor-led processes because sellers require certainty. Committed financing is now the market norm for mid-market and large deals.'],
      ['Sponsors never sign without a financing condition because lender pullout is too common', 'Lender pullout from a fully committed debt commitment letter is rare and usually contested. Sponsors accept this risk in exchange for being competitive on certainty-of-close.'],
      ['Financing conditions are enforced by Delaware courts only if explicitly written into the LOI', 'Financing conditions are SPA provisions, not LOI provisions. Their enforceability depends on the SPA drafting, not on prior documents.'],
    ],
    'Committed financing has displaced the financing condition in modern US sponsor-led deals. Sponsors deliver debt commitment letters from lenders and equity commitment letters from the fund at signing, which converts the buyer\'s obligation into a firm commitment. The trade-off is real — the buyer assumes financing risk — but it is the price of being competitive on certainty.'),

  // -------------------------------------------------------------------------
  // CLOSING MECHANICS (4390437)
  // -------------------------------------------------------------------------
  q(4390437, 'Career Skills', CHAPTER, 'Working capital true-up',
    'The SPA defines a target working capital of $42M with a true-up mechanism at closing and a post-closing adjustment 90 days after close. Why is this mechanism standard?',
    'Working capital fluctuates between signing and closing, so the SPA sets a target (usually the trailing 12-month average) and adjusts the purchase price dollar-for-dollar at close based on actual closing-date working capital, with a post-closing true-up window to verify the numbers — this prevents the seller from extracting cash or stretching payables before close',
    [
      ['The working capital true-up only matters if the parties dispute the closing accounts', 'The true-up happens on every deal, not just disputed ones. It is the standard adjustment mechanic that prevents seller manipulation of working capital between signing and closing.'],
      ['Working capital is fixed at signing and does not move between signing and closing', 'Working capital is a living balance and moves daily. The whole reason for the true-up mechanism is that signing-to-close periods can run 30-90 days and the working capital moves with them.'],
      ['The post-closing adjustment is optional and most deals skip it to simplify the close', 'Post-closing adjustments are standard and explicitly negotiated. Skipping the true-up leaves both parties exposed to working capital swings — buyers and sellers both insist on it.'],
    ],
    'Working capital true-up is the standard closing mechanic in US PE deals. The SPA sets a target, the closing purchase price adjusts dollar-for-dollar based on actual closing-date working capital, and a post-closing window verifies the numbers — together they neutralize the incentive for the seller to extract cash or stretch payables before the close.'),

  // -------------------------------------------------------------------------
  // EXIT STRATEGIES (4390438–4390440)
  // -------------------------------------------------------------------------
  q(4390438, 'Career Skills', CHAPTER, 'Secondary buyout to another sponsor',
    'After a 4-year hold, your fund is exiting a $1.5B platform. The likely buyer is another PE firm. What is a secondary buyout and how does it compare to other exit options?',
    'A secondary buyout (sponsor-to-sponsor sale) is one of the three primary PE exit paths alongside strategic sale and IPO — it tends to clear closer to the original sponsor\'s exit multiple, gives certainty of close, and is common for well-run platforms whose growth runway exceeds the seller\'s remaining hold period',
    [
      ['Secondary buyouts are rare because PE firms prefer not to buy from each other', 'Secondary buyouts are one of the most common PE exit paths. PE firms routinely buy from each other when the platform still has value-creation runway under a new owner.'],
      ['Secondary buyouts always clear at a discount to strategic exits because they lack synergies', 'Secondary buyouts often clear at competitive valuations, especially when financing markets are open and PE buyers have dry powder. The discount-vs-strategic relationship is situational, not structural.'],
      ['Secondary buyouts are barred by SEC regulations on related-party transactions', 'Secondary buyouts are arm\'s-length transactions between unrelated PE firms and are not restricted by securities regulations.'],
    ],
    'Secondary buyouts are a standard PE exit path — well-run platforms with remaining runway often clear to other PE firms, especially when financing markets are open and dry powder is abundant. The exit choice between secondary, strategic, and IPO depends on the asset, the cycle, and the buyer universe — not on a default preference.'),

  q(4390439, 'Career Skills', CHAPTER, 'Strategic exit premium 10-25%',
    'Your fund\'s exit advisor is comparing offers on a $900M industrial platform. The lead PE bidder is at $1.6B; the lead strategic bidder is at $1.9B. The advisor flags the strategic premium. What drives the gap and how should you read it?',
    'Strategic buyers typically pay 10-25% more than PE buyers because they can capture synergies (cost takeout, revenue cross-sell, distribution leverage) that PE buyers cannot — when synergies are real, the strategic premium reflects value creation the PE buyer is structurally unable to access',
    [
      ['Strategic buyers always pay more than PE buyers regardless of synergies', 'Strategic premium depends on the strategic\'s ability to realize synergies. Without synergies, strategics often pay less than PE buyers because they apply more conservative public-company underwriting.'],
      ['Strategic premium is usually 50%+ and a 10-25% premium suggests the strategic is underbidding', 'The 10-25% band is the well-documented historical norm for strategic premium in US M&A. Higher premiums occur but are not the typical pattern.'],
      ['Strategic premium reflects the strategic\'s desire to remove a competitor from the market, not synergies', 'Competitor removal can be one driver but is rarely the dominant explanation. Synergy capture (procurement, distribution, headcount, revenue) is the well-documented source of most strategic premiums.'],
    ],
    'Strategic premium of 10-25% over PE clearing prices is the historical norm in US M&A and is driven primarily by synergy capture. When strategics see real synergies, they outbid PE on the same asset because they can pay for value the PE buyer cannot create. The exit advisor\'s job is to test whether the strategic premium is real (synergy-driven, sustainable) or whispered (strategic posturing in process).'),

  q(4390440, 'Career Skills', CHAPTER, 'IPO exit, S-1 and lockup',
    'Your fund is preparing a $3B portfolio company for an IPO exit. The associate asks about the S-1 process and the lockup. What are the key features?',
    'The S-1 is the SEC registration statement filed before the IPO — it contains the prospectus, audited financials, risk factors, and management bios; after IPO, the sponsor is typically subject to a 180-day lockup preventing share sales, after which secondary sales begin (usually staggered to avoid market disruption)',
    [
      ['The S-1 is an internal sponsor document and not filed publicly with the SEC', 'The S-1 is the public SEC filing that registers the IPO shares. It is published on EDGAR and is the primary document for institutional investor review.'],
      ['The IPO lockup is typically 30 days, after which the sponsor can sell freely', 'The standard IPO lockup is 180 days, not 30. After the lockup expires, sponsors typically still stagger sales over multiple secondary offerings to avoid market disruption.'],
      ['The sponsor can sell its entire position at the IPO without any lockup restriction', 'Sponsors are bound by lockup agreements at IPO. The position is typically held through the 180-day lockup and exited via secondary offerings over the following 12-24 months.'],
    ],
    'The IPO exit is a multi-year process, not a single moment. The S-1 registers the shares with the SEC, the IPO prices a portion of the float, and the sponsor is locked up for 180 days before staggered secondary offerings sell down the position. DPI from an IPO exit is realized over years, not days, which shapes how sponsors weigh IPO against secondary buyout or strategic sale.'),

  // -------------------------------------------------------------------------
  // CONTINUATION FUND (4390441)
  // -------------------------------------------------------------------------
  q(4390441, 'Career Skills', CHAPTER, 'GP-led secondary / continuation fund',
    'Your fund is approaching the end of its 10-year vehicle and holds a single high-conviction platform that the GP believes still has 3-5 years of value creation ahead. What is a continuation fund and when does it make sense?',
    'A continuation fund is a GP-led secondary where the existing fund sells the asset to a new vehicle (the continuation fund) that the same GP manages — LPs in the original fund can either cash out at the secondary price or roll into the continuation fund; the structure provides liquidity to those who need it while letting the GP continue managing the asset, but the conflict of interest requires LP advisory committee approval and independent fairness opinions',
    [
      ['Continuation funds are illegal because the GP is on both sides of the transaction', 'Continuation funds are legal and have become a major LP secondary market segment. The conflict is managed through LP advisory committee approval, independent fairness opinions, and disclosed process — not through prohibition.'],
      ['Continuation funds always force LPs to roll into the new vehicle without a cash option', 'LPs in continuation fund transactions typically have a choice — cash out at the secondary price or roll into the continuation fund. The election is usually time-bound and structured to give each LP optionality.'],
      ['Continuation funds are uncommon and used only in distressed situations', 'GP-led secondaries (including continuation funds) have become one of the largest segments of the secondary market over the last decade. They are used routinely for high-conviction assets where the fund life is the binding constraint, not for distress.'],
    ],
    'Continuation funds resolve a tension between fund-life constraints and remaining value-creation runway on a single asset. The structure is legal but conflict-heavy — LP advisory committee approval, fairness opinions, and a cash-or-roll election for LPs are the governance machinery that makes the transaction defensible. The continuation fund market has grown into a major exit path precisely because it lets GPs hold high-conviction assets past the original fund\'s expiration without forcing a suboptimal sale.'),

  // -------------------------------------------------------------------------
  // DPI PRESSURE (4390442)
  // -------------------------------------------------------------------------
  q(4390442, 'Career Skills', CHAPTER, 'DPI pressure forces exit timing',
    'Your fund is in year 7 of a 10-year vehicle. Several LPs have asked about DPI (Distributions to Paid-In Capital) at the latest annual meeting. The fund has 3.0x unrealized TVPI but only 0.4x DPI. How should this affect exit decisions on portfolio companies?',
    'DPI is the cash actually returned to LPs and is the metric that drives LP perception, re-up decisions, and the next fund\'s raise — late in fund life, low DPI creates pressure to exit even when underlying conviction would argue for holding; the GP\'s job is to balance the LPs\' need for realized returns against the temptation to hold for marks',
    [
      ['DPI is a backward-looking metric and should not influence exit timing decisions', 'DPI is the metric LPs use to evaluate the next fund\'s raise. Ignoring it means raising the next fund into a tougher reception, which has direct economic consequences for the firm and the team.'],
      ['Unrealized TVPI of 3.0x is sufficient and DPI catches up automatically as exits happen', 'Marked TVPI does not pay LP distributions. Until exits convert TVPI into DPI, LPs are holding paper marks that may or may not realize. Late-fund LPs increasingly weight DPI over TVPI for exactly this reason.'],
      ['DPI pressure only matters at the end of fund life and not in year 7 of a 10-year vehicle', 'LPs evaluate funds well before final wind-down, and the next-fund raise typically happens around year 6-8. DPI in year 7 directly shapes whether the next fund clears its target.'],
    ],
    'DPI is the metric that translates GP performance into LP outcomes, and late-fund DPI pressure is a real economic force on exit timing. The discipline is to recognize that holding for marks is not the same as creating value for LPs, and that re-up decisions on the next fund are driven by realized cash, not paper TVPI. The exit calculus has to balance asset-level conviction against the firm-level cost of low DPI heading into the next fundraise.'),
]
