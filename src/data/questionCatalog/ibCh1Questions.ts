import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// IB CHAPTER 1 EXPANSION — Banking Workflow and Client Context
// ----------------------------------------------------------------------------
// 44 new questions (IDs 4351000–4351043) extending the existing six-question
// chapter (4200010–4200015 in careerAgentGeneratedRoadmapFinance.ts).
//
// The existing six cover: coverage vs product, pitch vs live mode, the
// teaser/NDA/CIM document sequence, critical-path communication, diligence
// ownership, and signing vs closing. Those are not re-tested here.
//
// These 44 expand into the rest of the chapter's workflow surface:
//   - VDR mechanics and data-room tiering
//   - NDA / CA exchange and clean-team agreements
//   - Buyer outreach lists and process letters
//   - IOI vs LOI vs definitive agreement
//   - Exclusivity, MAC, break fees, reverse break fees
//   - Working group lists, conflict checks, KYC/AML
//   - Engagement letters: retainer, success fee, tail, expense, indemnity
//   - League tables and fairness opinions
//   - Board fiduciary duties, public vs private process tradeoffs
//   - FA vs non-FA roles, capital markets vs M&A workstream differences
//   - Sell-side vs buy-side workflow differences
//   - Weekend work norms, model versioning, working-draft etiquette
//   - Marking up CIMs, footnoting source docs, comp tables sourcing
//   - IB hierarchy interactions analyst → MD, comments-and-QC loops
//
// Voice anchor: jargonBusters.ts IB section and the existing
// careerAgentGeneratedRoadmapFinance.ts IB chapter 1 questions. Sharp,
// evidence-anchored, deal-mechanic vocabulary. Every wrong-answer
// rationale is bespoke; no DEFAULT_FLAW constants. Distractors are real
// junior-banker misconceptions, not strawmen. US context throughout.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe IB Ch1 canonical bank'

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

const CHAPTER = 'Banking Workflow and Client Context'

// Difficulty distribution: 13 at 3 (~30%), 22 at 4 (~50%), 9 at 5 (~20%).
export const IB_CH1_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  4351000: 3, // VDR tiering basics
  4351001: 4, // Clean-team agreement on customer data
  4351002: 3, // NDA vs CA terminology
  4351003: 4, // Mutual vs one-way NDA
  4351004: 3, // Day-1 vs Day-2 deal sequence
  4351005: 4, // Buyer outreach list construction
  4351006: 4, // Strategic vs sponsor buyer logic
  4351007: 3, // Process letter purpose
  4351008: 4, // First-round vs second-round process letter
  4351009: 3, // IOI vs LOI distinction
  4351010: 4, // What makes an IOI comparable
  4351011: 5, // Exclusivity tradeoff at the LOI stage
  4351012: 4, // MAC clause scope
  4351013: 5, // MAC carve-outs and how they shift risk
  4351014: 4, // Break fee vs reverse break fee
  4351015: 5, // Reverse break fee sizing intuition
  4351016: 3, // Working group list ownership
  4351017: 4, // Conflict check sequence at engagement
  4351018: 3, // KYC and AML at client onboarding
  4351019: 4, // Engagement letter retainer mechanics
  4351020: 4, // Success fee structure
  4351021: 5, // Tail provision in the engagement letter
  4351022: 4, // Expense and indemnity terms
  4351023: 3, // League tables — what they actually count
  4351024: 4, // League table credit allocation traps
  4351025: 4, // Fairness opinion purpose and limits
  4351026: 5, // Who delivers the fairness opinion and why
  4351027: 4, // Board fiduciary duties in a sale
  4351028: 5, // Revlon mode framing
  4351029: 3, // Public vs private process tradeoffs
  4351030: 4, // Go-shop vs no-shop
  4351031: 3, // FA vs non-FA roles
  4351032: 4, // Capital markets vs M&A workstreams
  4351033: 4, // ECM vs DCM cadence
  4351034: 3, // Sell-side vs buy-side workflow
  4351035: 4, // Weekend work norms and what to push back on
  4351036: 4, // Model versioning discipline
  4351037: 5, // Version-control etiquette on shared drafts
  4351038: 3, // Marking up the CIM draft
  4351039: 4, // Footnoting source documents
  4351040: 4, // Comp tables sourcing discipline
  4351041: 3, // IB hierarchy interactions
  4351042: 5, // How MDs actually consume analyst output
  4351043: 4, // Comments-and-quality-control loop
}

export const ibCh1Questions: Question[] = [
  // ---------------------------------------------------------------------------
  // VDR and confidentiality stack (4351000–4351003)
  // ---------------------------------------------------------------------------
  q(4351000, 'Career Skills', CHAPTER, 'VDR tiering basics',
    'A sell-side data room is being populated. The seller has 200+ documents ranging from marketing collateral to top-customer contracts and supplier MSAs. How should the VDR be structured for the buyer universe?',
    'Tiered access: a Tier 1 room (corporate, financial, market) opens at NDA execution; Tier 2 (named-customer contracts, supplier terms, sensitive HR) opens only after IOIs are received and the buyer list is narrowed',
    [
      ['One folder with all documents posted at NDA execution so buyers can self-serve and the process moves quickly', 'Dumping the entire room at NDA is exactly how customer names, pricing, and supplier terms leak to competitors who only ever planned to fish for intelligence. The whole reason for tiering is that an NDA does not undo the damage of disclosure to a competitor.'],
      ['Post only the CIM and the most recent financials, and route every other document request through the banker by email', 'Email-by-request is unworkable at 30+ buyers and creates a paper trail where information disclosure is inconsistent across bidders. The VDR exists precisely so that disclosure is logged, controlled, and parallel.'],
      ['Structure the VDR by buyer rather than by document tier, so each buyer sees a curated set tailored to their interest', 'Buyer-curated rooms invite later arguments that one bidder got better information than another, which is corrosive in a competitive process. Tiered-by-document gives every bidder the same package at the same stage.'],
    ],
    'The VDR is a disclosure-control instrument, not a document dump. Tiering by sensitivity and gating each tier to a process milestone is how sell-side teams keep competitive information out of buyers who will never close while still feeding real bidders enough to underwrite.'),

  q(4351001, 'Career Skills', CHAPTER, 'Clean-team agreement on customer data',
    'A strategic buyer in a sell-side process is a direct competitor of the seller in two product lines. The seller wants to share named top-20 customer concentration and pricing data with the buyer for diligence. What is the right disclosure mechanism?',
    'A clean-team agreement that names specific buyer-side individuals (often external counsel or a third-party consultant) who can see the unredacted data, with strict prohibitions on sharing it with the buyer\'s commercial team',
    [
      ['Anonymize customer names and round pricing to nearest 10% — the buyer will fill in the gaps with industry knowledge', 'Heavy anonymization defeats the diligence purpose; the buyer cannot underwrite customer concentration risk on rounded approximations. Worse, "industry knowledge" reconstruction often does identify the customer, which means the seller exposed the data anyway with less control.'],
      ['Share the unredacted data because the NDA already prohibits competitive misuse', 'The NDA prohibits use but does not prevent the buyer\'s commercial team from internalizing what they saw, even unconsciously. Antitrust counsel routinely insist on clean teams in competitor-to-competitor diligence precisely because an NDA alone is not enough.'],
      ['Refuse to share customer-level data at all and let the buyer evaluate concentration risk from public information', 'Refusal collapses the competitive process — a serious buyer will not bid blind on a customer-concentrated business. The clean-team mechanism exists to solve exactly this tradeoff between disclosure and competitive harm.'],
    ],
    'A clean-team agreement is the standard mechanism for sharing competitively sensitive data with a strategic buyer. It names specific recipients, prohibits onward sharing to commercial teams, and is enforceable separately from the master NDA. Junior bankers should know when to push for one before the diligence list expands.'),

  q(4351002, 'Career Skills', CHAPTER, 'NDA vs CA terminology',
    'A senior banker tells the analyst to "get the CA out to the first 12 buyers tonight." The analyst is more used to hearing "NDA." Are these the same document?',
    'CA (confidentiality agreement) and NDA (non-disclosure agreement) are used interchangeably in US M&A practice — the substantive terms are the same and the choice of label varies by counsel preference',
    [
      ['A CA is more formal and includes standstill provisions; an NDA does not', 'Standstill is a discrete provision that may or may not appear in either document depending on whether the seller wants one. The CA-vs-NDA label has nothing to do with whether a standstill is inside it.'],
      ['A CA governs buyers and an NDA governs sellers — the two parties sign different forms', 'Both names refer to bilateral agreements; the same document governs both parties\' confidentiality obligations. Splitting them by side is a misconception.'],
      ['A CA is required by SEC rule and an NDA is optional', 'There is no SEC rule mandating a CA specifically. M&A confidentiality is a contract matter, not a securities-disclosure one, and the terminology is interchangeable.'],
    ],
    'NDA and CA mean the same thing in US M&A. The substantive content — what is confidential, duration, exceptions, remedies, standstill if any — is what matters. New analysts should not over-read the label.'),

  q(4351003, 'Career Skills', CHAPTER, 'Mutual vs one-way NDA',
    'A sell-side process is opening. The seller\'s counsel asks whether the form NDA should be mutual or one-way. What is the right default and why?',
    'One-way (buyer-only obligations) is the default on sell-sides — the seller is disclosing the information, the buyer is receiving it, and there is no reason to bind the seller to keep the buyer\'s information confidential',
    [
      ['Mutual is the default because both parties exchange information during diligence', 'In a sell-side process, diligence flows almost entirely one direction — buyer pulls from seller. Mutual NDAs are appropriate for partnership or JV discussions where both sides disclose; they are unnecessary friction for a normal sale.'],
      ['Mutual is the default because it is fair to both parties and faster to negotiate', 'Mutual NDAs are not faster to negotiate — they double the number of redlines because each side now scrutinizes both directions. They are also unnecessary when only one side is disclosing.'],
      ['One-way is the default but only because sellers have more leverage', 'It is the default because of the asymmetric information flow, not raw leverage. Even a distressed seller in a weak position would send a one-way NDA because the buyer is the one receiving sensitive data.'],
    ],
    'NDA directionality follows the information flow. On a sell-side, the seller discloses and the buyer receives — a one-way NDA is the correct form. Mutual NDAs belong in partnership or strategic-discussion contexts where disclosure runs both ways.'),

  // ---------------------------------------------------------------------------
  // Process sequencing and buyer outreach (4351004–4351010)
  // ---------------------------------------------------------------------------
  q(4351004, 'Career Skills', CHAPTER, 'Day-1 vs Day-2 deal sequence',
    'On a sell-side mandate, an MD references "Day 1" and "Day 2" workstreams when scoping the staffing. What is the standard meaning of those terms in this context?',
    'Day 1 covers preparation — engagement letter, kickoff, CIM and teaser drafting, buyer list build, VDR setup — before any buyer outreach; Day 2 begins when teasers go out and the live process starts',
    [
      ['Day 1 is the signing date and Day 2 is the closing date — every workstream is keyed off the signing event', 'That is integration / post-merger language, not deal-process language. In a sell-side, "Day 1" / "Day 2" refer to internal preparation phases before outreach, not the signing-to-closing period.'],
      ['Day 1 is the first 24 hours after mandate, Day 2 is the rest of the deal — the labels are about urgency more than scope', 'These are not literal calendar days. They are phase labels: prep phase and live phase. Treating them as 24-hour windows leads to chaotic scoping and burnout in week one.'],
      ['Day 1 and Day 2 refer to first-round and second-round bidder meetings respectively', 'First and second round are about bidder culling, not the prep-vs-live phase distinction. The terms refer to the seller\'s internal sequencing before the bidder rounds even start.'],
    ],
    'Day 1 / Day 2 in deal-process language separates internal preparation (CIM, teaser, buyer list, VDR) from live execution (teasers go out, NDAs come in, bidders engage). Confusing these with signing-to-closing or with bidder rounds derails staffing conversations.'),

  q(4351005, 'Career Skills', CHAPTER, 'Buyer outreach list construction',
    'The seller has approved a buyer outreach list of "around 25 names." How should the analyst structure that list before the MD reviews it?',
    'Segment by buyer type (strategic, financial sponsor, sponsor-owned platform), tier within each segment (most likely → less likely), and flag any names where conflicts, prior-look declines, or seller-imposed exclusions apply',
    [
      ['Sort the 25 names alphabetically so the MD can scan them quickly', 'Alphabetical order tells the MD nothing about why each name is on the list. The MD needs to evaluate strategic logic and prioritization, which alphabetical sort destroys.'],
      ['Sort by expected purchase price, highest first, so the most-likely-to-win bidders appear at the top', 'Expected price at list-build is a guess — the buyer list goes out before any bidder has seen the CIM, let alone given an indication. Sorting by an unfounded number anchors the MD on speculation.'],
      ['Sort by buyer revenue size so the largest potential acquirers are seen first', 'Revenue size is a poor proxy for buyer fit. A $20B conglomerate that has never done a deal in this sector is a worse bidder than a $2B strategic with a clear adjacency thesis.'],
    ],
    'Buyer-list construction is a segmentation exercise, not a sort. Strategics and sponsors evaluate the asset differently, so they belong in separate columns. Tiering within each segment captures the banker\'s actual point of view, which is what the MD is reviewing.'),

  q(4351006, 'Career Skills', CHAPTER, 'Strategic vs sponsor buyer logic',
    'The MD asks the analyst to "explain in two sentences why a strategic should pay more than a sponsor for this asset." What is the cleanest answer?',
    'Strategics can underwrite synergies (cost takeout, revenue cross-sell, channel leverage) that sponsors cannot, which lifts their willingness to pay above the standalone DCF; sponsors are bounded by their required IRR on standalone cash flows plus exit-multiple assumptions',
    [
      ['Strategics have lower cost of capital because they fund deals with corporate cash rather than committed funds', 'Cost of capital differences are second-order at best. The price gap is driven by synergies, which actually change the projected cash flows — not by a small WACC differential.'],
      ['Sponsors require a discount because they need to flip the asset in 5 years', 'Hold period affects IRR math but does not directly produce a structural discount. A sponsor who sees outsized growth still bids competitively; the gap is synergy-driven, not exit-timing-driven.'],
      ['Strategics pay more because they have more access to debt financing for acquisitions', 'Strategic debt access is mixed — many sponsors lever more aggressively than strategics. The willingness-to-pay gap comes from synergies in the strategic\'s standalone forecast, not financing capacity.'],
    ],
    'The strategic-vs-sponsor willingness-to-pay gap is fundamentally a synergy story. Strategics can defensibly add cost or revenue synergies to the standalone cash flow stream; sponsors cannot. Junior bankers who explain the gap in terms of cost of capital or hold period are reaching for the wrong lever.'),

  q(4351007, 'Career Skills', CHAPTER, 'Process letter purpose',
    'A first-round process letter is being drafted for distribution with the CIM. What is the document\'s primary purpose?',
    'Tell each invited bidder exactly what is expected — the form of the indication (IOI), the bid date and time, the required content (price range, financing certainty, conditionality, approvals timeline), and the format for submission',
    [
      ['Disclose the seller\'s minimum acceptable price so bidders know whether to participate', 'Sellers never disclose reserve prices in the process letter — doing so caps the bid distribution at exactly the floor. The letter is about format and timing, not price disclosure.'],
      ['Provide a legal description of the assets being sold so bidders can begin drafting their purchase agreements', 'Asset description and purchase agreement drafting happen later — in the CIM for the description and only after first-round bids for the agreement. The process letter is procedural, not substantive.'],
      ['Allow each bidder to request a customized diligence package based on their interests', 'Bidder-by-bidder customization defeats the purpose of a process letter, which is to enforce uniform expectations across the bidder pool. Customized diligence happens in later rounds for advancing bidders only.'],
    ],
    'The process letter is the rulebook for the round. It tells bidders what to submit, when, in what format, and what content is required for their bid to be evaluated. It does not disclose seller-side reserve prices, asset descriptions, or bidder-specific carve-outs.'),

  q(4351008, 'Career Skills', CHAPTER, 'First-round vs second-round process letter',
    'The first round of bids has come in and three bidders advance to the second round. The second-round process letter is now being drafted. What changes between the two letters?',
    'Second-round letter requires markup of the draft purchase agreement, fully financed bid (with lender commitment papers if applicable), final price (not a range), and a defined timeline to signing — first-round was a non-binding indicative bid; second-round must be near-executable',
    [
      ['The second-round letter just extends the bid deadline; the content requirements are identical to the first round', 'Bid deadline extension would defeat the point of running rounds. Second-round letters tighten every dimension: bid is final not indicative, markup is required, financing must be committed.'],
      ['The second-round letter drops most requirements because by then the bidders have invested significant time', 'The opposite — the second-round letter raises the bar precisely because advancing bidders have demonstrated commitment. The seller now demands an executable bid, not an exploratory one.'],
      ['The second-round letter shifts to a single combined oral and written submission to save time', 'Oral-only submissions are not enforceable and create disputes over what was bid. The format gets more rigorous in round two, not less; written final bids with markup are the standard.'],
    ],
    'Rounds escalate. Round one filters intent; round two filters certainty. The second-round letter requires a markup, committed financing, and a final price — moving the bidders from interested to executable. Treating the second letter as a deadline extension misses the entire purpose of multi-round process design.'),

  q(4351009, 'Career Skills', CHAPTER, 'IOI vs LOI distinction',
    'A buyer submits an "indication of interest" in round one and a "letter of intent" in round two. What is the substantive difference?',
    'An IOI is a non-binding price range and bid framework; an LOI is more specific, often with a single price, exclusivity demand, and a draft list of remaining diligence items — and may be partially binding on confidentiality and exclusivity even if non-binding on price',
    [
      ['IOIs and LOIs are the same document — different banks use different names for the round-one bid', 'They are sequenced documents on most processes. IOI comes first as a non-binding sketch; LOI comes after the bidder has done meaningful diligence and is ready to demand exclusivity.'],
      ['An IOI is binding on price and an LOI is non-binding because the LOI is a negotiation starting point', 'The directionality is reversed — IOIs are explicitly non-binding on price (often expressed as a range), and LOIs typically lock the bidder closer to a single number even if technically still non-binding on the final terms.'],
      ['An LOI is just an IOI delivered by the bidder\'s CEO instead of by their advisor', 'Delivery channel does not define the document. Both are typically delivered by the buyer\'s advisor; the distinction is about specificity, exclusivity, and timing in the process.'],
    ],
    'The IOI → LOI progression mirrors the diligence escalation. IOI is a sketch with a price range; LOI is closer to a commitment with a single price, exclusivity ask, and a path to signing. The non-binding label is mostly accurate but confidentiality and exclusivity provisions are typically binding even at LOI stage.'),

  q(4351010, 'Career Skills', CHAPTER, 'What makes an IOI comparable',
    'Three IOIs arrive: $620M cash with 5% financing contingent on lender confirmation; $590M cash unconditional; $650M with $50M rollover equity and an earn-out tied to FY+2 EBITDA. The MD asks the analyst to "make them comparable." What does that actually require?',
    'Translate each to a single risk-adjusted certain-equivalent number — discount the financing-contingent bid by the probability and cost of a failed financing, discount the rollover/earn-out bid by the expected payout probability and time value, and compare the resulting figures alongside the unconditional bid',
    [
      ['Rank them by headline price: $650M, $620M, $590M', 'Headline price is what the analyst is asked to look past. The $650M bid has $50M of contingent consideration and the $620M has financing risk; pretending the headline numbers are comparable is the basic error the MD is asking the analyst to avoid.'],
      ['Favor the all-cash bid ($590M) automatically because certainty always beats nominal price', 'Certainty matters but not unconditionally. A $590M certain bid is not obviously better than $620M with a 90% probability of closing; the analyst\'s job is to do that math, not assume away the comparison.'],
      ['Sort by closest-to-signing speed — whichever bidder claims they can sign fastest', 'Signing speed is one input but not the comparable. A 30-day signing on a $590M bid is worse than 45 days on a $650M bid if the price gap exceeds the timing cost. Single-axis sorts are exactly the wrong response to a comparability question.'],
    ],
    'IOI comparability is a probability-and-time-adjustment exercise. Each bid is translated into a certain-equivalent number that bakes in financing risk, earn-out probability, rollover liquidity, and time-to-close. The MD\'s "make them comparable" instruction is shorthand for that analytical translation, not a sort.'),

  // ---------------------------------------------------------------------------
  // Exclusivity, MAC, break fees (4351011–4351015)
  // ---------------------------------------------------------------------------
  q(4351011, 'Career Skills', CHAPTER, 'Exclusivity tradeoff at the LOI stage',
    'A bidder demands 45 days of exclusivity at the LOI stage in exchange for a $625M bid. A second bidder will not commit to exclusivity but indicates $610M. The seller asks the banker for a recommendation. What is the analytical frame?',
    'Exclusivity removes competitive tension and risks a retrade once the bidder is locked in, so the $15M premium has to compensate for that risk — quantify the probability of a retrade in exclusivity, the magnitude of likely retrade, and whether the no-exclusivity bidder is credible enough to keep tension alive',
    [
      ['Take the higher price — exclusivity is a process detail, the $15M premium is real money', 'That treats the price premium as free money. Exclusivity routinely costs the seller 5–15% via retrade once the bidder no longer faces competition. The $15M apparent gain can evaporate inside the exclusivity window.'],
      ['Refuse exclusivity always — keeping competitive tension is the banker\'s primary job', 'Universal exclusivity refusal kills serious bidders who need exclusivity to justify the diligence spend on a complex deal. The job is to negotiate exclusivity terms (duration, scope, milestones), not to reject the concept.'],
      ['Grant exclusivity to both bidders for shorter windows so neither has full leverage', 'Dual exclusivity is contradictory — exclusivity means exclusive. Promising it to two bidders simultaneously breaches both agreements and destroys process credibility.'],
    ],
    'Exclusivity is priced. The bidder who locks the seller into exclusivity buys the option to retrade without competition; the seller must therefore charge for it in headline price and tight exclusivity terms (short duration, defined milestones, automatic termination on breach). Granting exclusivity at the lower price is rarely correct; granting it at the higher price is sometimes correct only after the retrade math is done.'),

  q(4351012, 'Career Skills', CHAPTER, 'MAC clause scope',
    'The draft purchase agreement contains a Material Adverse Change clause that lets the buyer walk away between signing and closing if the target suffers a "material adverse effect." What does that clause functionally cover?',
    'Significant deteriorations specific to the target (loss of major customer, material litigation, accounting restatement) — typically excluding industry-wide effects, macroeconomic shifts, and changes the buyer was already aware of through diligence',
    [
      ['Any change in the target\'s financial performance, however small, gives the buyer an exit', 'MAC clauses are deliberately scoped to "material" effects, not "any" change. US courts have set a high bar — temporary dips and ordinary-course volatility rarely qualify.'],
      ['Macroeconomic downturns affecting all companies in the sector give the buyer an MAC out', 'Standard MAC drafting explicitly carves out general economic, industry-wide, or geopolitical conditions. The clause covers target-specific deterioration, not market-wide downturns the buyer was equally exposed to.'],
      ['MAC is purely cosmetic in US deals — courts almost never enforce it, so the language does not matter', 'Delaware courts have enforced MAC in the right circumstances (Akorn v. Fresenius is the leading case). "Almost never" overstates the position; the language matters precisely because in the rare case it is invoked, drafting determines outcome.'],
    ],
    'MAC is a buyer\'s out for target-specific material deterioration between signing and closing. Industry-wide and macroeconomic effects are carved out so the buyer cannot use a general downturn to escape. Junior bankers should know the carve-out structure because it shapes which side bears between-signing-and-closing market risk.'),

  q(4351013, 'Career Skills', CHAPTER, 'MAC carve-outs and how they shift risk',
    'A draft MAC clause has carve-outs for: industry-wide conditions, changes in law, acts of war and pandemics, and target performance below buyer\'s diligence estimates. Each carve-out is preceded by "except to the extent disproportionately affecting the target." What does that "disproportionately affecting" hedge mean in practice?',
    'It restores buyer protection where a generally-excluded category (e.g., pandemic) hits the target much harder than its industry peers — the target then loses the carve-out shield and the buyer can walk on that ground',
    [
      ['It means the buyer has unconditional protection regardless of the carve-out language', 'The disproportionate-impact qualifier does not eliminate the carve-out. It only re-engages buyer protection in the specific sub-case where the target is uniquely hit; in the general case, the carve-out still shields the seller.'],
      ['It means the seller is protected even if the target is disproportionately hit', 'The qualifier runs the opposite direction. "Disproportionately affecting the target" is bad for the seller — it carves *into* the seller\'s carve-outs.'],
      ['It means each carve-out is automatically halved in effect', 'The qualifier is not a numeric haircut. It is a sub-clause that re-engages buyer rights specifically when the target is uniquely harmed relative to peers.'],
    ],
    'MAC drafting is layered: carve-outs protect the seller from generic market events; the "disproportionately affecting" qualifier protects the buyer when those generic events nonetheless hit the target uniquely hard. The whole structure is a risk-allocation negotiation, and reading the qualifier wrong is one of the more common analyst mistakes in M&A drafting review.'),

  q(4351014, 'Career Skills', CHAPTER, 'Break fee vs reverse break fee',
    'A signed purchase agreement contains a "break fee" and a "reverse break fee." Which side pays which, and when?',
    'Break fee: seller pays buyer if the seller terminates to accept a superior proposal (typically 2–4% of equity value); reverse break fee: buyer pays seller if buyer fails to close for financing or antitrust reasons (typically 4–8%)',
    [
      ['Break fee and reverse break fee are the same payment named differently in different jurisdictions', 'They are distinct provisions running in opposite directions, both present in the same US deal. The first protects the buyer from seller switching to a higher bid; the second protects the seller from buyer walk-away on financing or regulatory grounds.'],
      ['Both fees are paid by the seller — one to the buyer and one to the bank — to compensate for deal failure', 'Reverse break fees flow from buyer to seller. The seller does not pay both sides; the directional structure is the entire point of having two named provisions.'],
      ['Break fees only apply in public-company deals; private deals never use them', 'Private deals do use break fees, particularly in auction processes where the seller has multiple LOIs in flight. Public-company deals are more standardized, but the concept is not limited to public targets.'],
    ],
    'Break fee compensates the buyer when the seller takes a better offer. Reverse break fee compensates the seller when the buyer cannot or will not close. Knowing which way each fee flows, and roughly what percent of equity value is market for each, is basic deal-mechanics literacy for any analyst on an M&A pod.'),

  q(4351015, 'Career Skills', CHAPTER, 'Reverse break fee sizing intuition',
    'A buyer requires committed debt financing of $800M to close a $1.4B deal. The seller is negotiating the reverse break fee for buyer financing failure. The buyer offers 3%; the seller is pushing 8%. How should the analyst think about what number is actually correct?',
    'The reverse break fee should reflect the seller\'s expected loss from a busted deal — re-running the process, market risk during the delay, opportunity cost — adjusted by the probability of financing failure given the lender commitment papers in hand; financing-fragile deals warrant higher reverse break fees',
    [
      ['Reverse break fees should always equal the regular break fee for symmetry', 'They are systematically asymmetric in US practice. Reverse break fees are typically 1.5–2x the break fee because financing failure is more likely and more damaging than a superior-proposal switch.'],
      ['Reverse break fees should be 1% across all deals — anything higher would deter buyers from bidding', '1% is well below US market on financing-contingent deals. Sponsor deals frequently see 5–7% reverse break fees, and high-financing-risk deals can push higher; 1% would not adequately compensate the seller.'],
      ['Reverse break fee size is determined by counsel, not the banker, so the analyst should not have a view', 'Counsel drafts the language but bankers should have a view on the economics. A reverse break fee is part of the price-and-certainty package; abdicating the view to counsel removes the banker from a value-driving negotiation.'],
    ],
    'Reverse break fee sizing reflects two things: the seller\'s expected loss in a busted deal and the buyer\'s probability of failing to close. Sponsor-led financing-contingent deals see 5–8% reverse break fees as market; cleaner deals see less. The analyst on the deal should be able to ladder the negotiating position from buyer-side counterparts to seller-side comparables.'),

  // ---------------------------------------------------------------------------
  // Working group, conflicts, KYC, engagement (4351016–4351022)
  // ---------------------------------------------------------------------------
  q(4351016, 'Career Skills', CHAPTER, 'Working group list ownership',
    'A working group list (WGL) is being assembled for a new sell-side mandate. Who owns the WGL and what does it actually do?',
    'The lead banker (typically the most senior associate or VP on the deal) maintains the WGL; it lists every named individual at the seller, banker, legal counsel, accounting advisor, and other workstreams, with contact details and code-name discipline so confidential references can be made without naming the company',
    [
      ['Counsel owns the WGL because confidentiality is a legal matter', 'Counsel maintains their own internal lists, but the deal-team WGL is a banker artifact — it covers all advisors and the client side, not just legal. Bankers update it as new diligence streams come online.'],
      ['The client owns the WGL because they are paying for the deal', 'Clients do not have the bandwidth to track every cross-firm advisor and update contact details. The WGL is a banker work product delivered as a service to the client.'],
      ['No one owns the WGL — it is a shared Google Doc that everyone updates', 'Shared-doc anarchy on a confidential deal is exactly the wrong model. The WGL is gated through one banker owner so version control, code names, and access lists are not corrupted by uncoordinated edits.'],
    ],
    'The WGL is the single source of truth for who is on the deal. It carries code names so people can discuss the deal without naming the company in email subject lines, restaurants, or cabs. The lead deal-team banker owns it; everyone routes new-joiner additions through that owner.'),

  q(4351017, 'Career Skills', CHAPTER, 'Conflict check sequence at engagement',
    'A bank is being pitched a sell-side mandate by a potential new client. Before the pitch can advance to engagement-letter discussion, what conflict-check workflow has to be completed?',
    'Internal conflicts: check whether the bank already advises the target, a likely buyer, or holds a material position in any of them; check whether another product group (e.g., research, lending, equity capital markets) has a relationship that would create an information wall problem',
    [
      ['Only client-name conflict is checked — if the bank does not advise the target on another mandate, the engagement can proceed', 'Conflicts go well beyond the target. Advising a likely buyer, holding a position in either side, or having existing research coverage on the target all create conflicts that have to be cleared before engagement.'],
      ['Conflict checks happen after the engagement letter is signed; the legal team handles them in the background', 'Conflict checks must clear before engagement, not after — engagement creates fiduciary duties that cannot be retroactively unwound if a conflict surfaces. The pitch-to-engagement gate is exactly where the conflict check sits.'],
      ['Conflict checks are a courtesy and can be waived if both parties agree', 'They are an internal compliance gate at the bank, not a courtesy to the client. Even with client consent, the bank cannot proceed past a hard conflict (e.g., advising both sides of the same trade) without firewall arrangements.'],
    ],
    'Conflict checks at engagement cover the target, likely counterparties, existing positions, and research/lending relationships. They run before engagement letter signature, not after, because engagement creates the fiduciary duty that a conflict would breach. Junior bankers should know the workflow because they often run the initial check.'),

  q(4351018, 'Career Skills', CHAPTER, 'KYC and AML at client onboarding',
    'A new client is being onboarded for a sell-side engagement. The bank\'s compliance team requires KYC and AML clearance before any work product is delivered. What does that practically require?',
    'Identity verification of the legal entity (corporate registry documents) and beneficial owners above a threshold (typically 10% or 25%), sanctions and politically-exposed-persons screening of those individuals, and confirmation of source of funds for any retainer wire',
    [
      ['Just send the engagement letter — KYC is a regulatory formality the bank completes in the background', 'KYC is a hard prerequisite to deal work in the US under Bank Secrecy Act and OFAC requirements. Engagement-letter signature is not enough; the bank must have completed beneficial-ownership identification and sanctions screening before it begins billable work.'],
      ['KYC only applies to international clients; domestic US clients are exempt', 'US clients are subject to KYC just as international clients are. The specifics (which sanctions lists, what corporate-registry evidence) vary, but the workflow itself does not skip US clients.'],
      ['KYC is the same as the conflict check and is completed in the same step', 'They are distinct gates. Conflicts asks "can this bank advise this client given other relationships?" KYC asks "who actually owns this client and are they sanctioned or risk-flagged?" Both clear independently before engagement begins.'],
    ],
    'KYC and AML are independent compliance gates from conflicts. They require entity-level documents, beneficial-ownership identification, and sanctions screening of the named owners. New analysts should know that their work product cannot be delivered until these gates clear — it is not unusual for a Day-1 schedule to slip on KYC.'),

  q(4351019, 'Career Skills', CHAPTER, 'Engagement letter retainer mechanics',
    'A draft engagement letter includes a $250K retainer payable on signing. What is the retainer\'s purpose and how does it interact with the success fee?',
    'The retainer compensates the bank for upfront work whether or not a deal closes; it is typically creditable against the success fee at closing, so a successful deal sees the retainer netted out of the final fee bill rather than added on top',
    [
      ['The retainer is the bank\'s sole compensation regardless of deal outcome', 'The retainer covers upfront work but is materially smaller than success-fee compensation on a closed deal. A $1.4B sale with a 1% success fee generates $14M; a $250K retainer is meaningful but does not replace it.'],
      ['The retainer is paid only if the deal closes and is fully refundable otherwise', 'The retainer is typically non-refundable — it compensates the bank for work performed whether or not the deal closes. That is its entire risk-allocation purpose.'],
      ['The retainer is in addition to the success fee, not netted against it', 'Most US engagement letters credit the retainer against the success fee at closing. The "in addition" structure is less common and has to be negotiated explicitly; the default is creditable.'],
    ],
    'Retainers cover upfront work and signal client commitment. They are typically non-refundable and creditable against the success fee at closing — so the bank is compensated even on a busted deal, and the client does not pay twice on a closed deal. Knowing the standard structure helps analysts read engagement letters intelligently.'),

  q(4351020, 'Career Skills', CHAPTER, 'Success fee structure',
    'A $1B sell-side engagement letter contains a tiered success fee: 1.0% on the first $800M of transaction value, 1.5% on the next $200M, and 2.0% on any consideration above $1B. What is this structure designed to do?',
    'Align banker incentives with maximizing realized price above the seller\'s baseline expectation — the marginal rate increases above the expected price, so the bank earns more aggressively on outperformance and accepts lower compensation on the baseline',
    [
      ['It is a punitive structure designed to make the bank push for a deal at any price', 'Higher marginal rates on incremental value reward outperformance, not deal-at-any-price behavior. The structure incentivizes a higher price specifically, not just any close.'],
      ['It is a flat 1.5% disguised as a tier to make the letter look more sophisticated', 'It is genuinely tiered. A $1.2B close pays 1.0% × $800M + 1.5% × $200M + 2.0% × $200M = $15M, which is materially different from 1.5% × $1.2B = $18M or 1.0% × $1.2B = $12M.'],
      ['Tiered fees only apply in deals over $5B; smaller deals use flat fees', 'Tiered fees are common across mid-market and upper-mid-market sell-sides. Deal size influences the curve shape but not whether tiering is used at all.'],
    ],
    'Tiered success fees align banker incentives with outperformance above a baseline. The lower rate covers the expected scenario; the higher rates reward beating it. Analysts negotiating engagement letters should understand that the tier breakpoints implicitly reveal the bank\'s and the seller\'s baseline price expectation.'),

  q(4351021, 'Career Skills', CHAPTER, 'Tail provision in the engagement letter',
    'The engagement letter contains a "tail" of 18 months. What does the tail do and why does the seller often push back on it?',
    'The tail says that if the seller transacts with any party introduced or contacted by the bank during the engagement period within the 18 months following termination, the success fee is still owed — sellers push back because it constrains their post-mandate flexibility',
    [
      ['The tail extends the engagement automatically for 18 months unless the client gives notice', 'A tail is a post-termination protection, not an automatic renewal. The engagement itself terminates on schedule; the tail simply ensures the bank is not cut out of fees by a delayed close with a buyer the bank surfaced.'],
      ['The tail gives the seller 18 months to find a better banker before transacting', 'It runs the opposite direction. The tail protects the bank from the seller terminating engagement and then closing with a buyer the bank already contacted, which would be a circumvention of the success fee.'],
      ['The tail is a tax structuring term unrelated to the engagement\'s fee waterfall', 'Tail has no tax meaning in this context. It is a fee-preservation clause and lives in the compensation section of the engagement letter.'],
    ],
    'The tail protects the bank from a client terminating engagement and then closing with a buyer the bank already introduced. 12–24 months is market; sellers push back because it ties their hands post-termination. A negotiated tail typically narrows to "buyers actually introduced" rather than "all buyers contacted" to address the seller\'s concern.'),

  q(4351022, 'Career Skills', CHAPTER, 'Expense and indemnity terms',
    'The engagement letter\'s "expense reimbursement and indemnification" section requires the seller to reimburse all reasonable expenses and indemnify the bank against third-party claims arising out of the engagement. Why are these standard, and where do negotiations typically focus?',
    'Standard because banks cannot do speculative work on the client\'s behalf and absorb both expenses and litigation risk; negotiations focus on caps on expense reimbursement and on indemnity carve-outs for the bank\'s own gross negligence or willful misconduct',
    [
      ['These provisions are administrative and rarely negotiated', 'Indemnity language is heavily negotiated, especially the gross-negligence carve-out and the cap on indemnity exposure. Clients\' counsel will spend hours on these provisions because they shift material risk between parties.'],
      ['Indemnity protects the seller from buyer claims after closing', 'The engagement-letter indemnity protects the *bank* from third-party claims arising from its advisory work. Buyer-vs-seller indemnity is in the purchase agreement, an entirely different document.'],
      ['Expense reimbursement only covers travel and meals, not legal or consulting expenses', 'Expense reimbursement typically covers all reasonable out-of-pocket expenses including counsel fees the bank incurs in the engagement. Caps and pre-approval thresholds are where negotiation focuses.'],
    ],
    'Expense and indemnity terms allocate two real economic risks: out-of-pocket spend and third-party litigation. Defaults heavily favor the bank; negotiations narrow the indemnity through gross-negligence carve-outs and cap the expense exposure. Junior bankers reading engagement letters should know these provisions are real money, not boilerplate.'),

  // ---------------------------------------------------------------------------
  // League tables, fairness opinions, fiduciary, public/private (4351023–4351030)
  // ---------------------------------------------------------------------------
  q(4351023, 'Career Skills', CHAPTER, 'League tables — what they actually count',
    'A pitch deck includes a league-table page showing the bank ranked #3 in US mid-market M&A. What does that ranking actually measure?',
    'Aggregate announced or closed deal value (or deal count, depending on table) credited to the advisor over a defined period and within a defined deal-size band — credit is allocated per the data provider\'s rules (full credit to all advisors, or split among multiple advisors)',
    [
      ['It measures the bank\'s revenue from M&A advisory in dollars', 'League tables count *deal value* (the size of the deals advised on), not the bank\'s actual fee revenue. A $5B deal counts as $5B in the table regardless of what fee the bank earned.'],
      ['It measures client satisfaction scores submitted to industry publications', 'No league table is built on client surveys. The data is announced or closed deal value pulled from public deal announcements, not client feedback.'],
      ['It measures the bank\'s success rate — closed deals divided by total mandates', 'Success rate is not what league tables track. They track total value advised, regardless of failure rate. A bank with 100% close rate on small deals will rank below a bank with 50% close rate on mega-deals.'],
    ],
    'League tables are deal-value rankings, not revenue or quality measures. They are constructed by Refinitiv, Dealogic, Bloomberg, and others — each with their own credit-allocation rules. Knowing what the table actually counts is necessary to read a pitch page honestly rather than treating the rank as a comprehensive quality signal.'),

  q(4351024, 'Career Skills', CHAPTER, 'League table credit allocation traps',
    'The bank advised on a $1.2B sale alongside two other advisors. The pitch deck claims "full credit" for the deal in the league table. What is the issue with that claim?',
    'Different league-table providers apply different credit rules: some give all advisors full credit (which inflates aggregate totals), others split credit pro-rata or by role. Claiming full credit when only one provider does so, or when the role was a junior co-advisor, is the kind of misrepresentation that gets pitch decks audited',
    [
      ['Full credit is always correct because the bank did real work on the deal', 'Doing real work does not equal full credit in every provider\'s table. If the bank was a junior co-advisor on a deal where another bank ran the process, the credit may be partial or zero in some tables.'],
      ['League tables do not differentiate between advisors, so any claim is equally defensible', 'They differentiate explicitly by lead vs co-advisor vs financial advisor in many providers. The defensibility of a "full credit" claim depends on the provider and the actual role.'],
      ['Pitch decks do not need to be accurate about league-table credit — it is marketing material', 'Pitch decks are seen by clients and competitors; misstatements get called out by competitor banks pitching against the same client. Accuracy is a competitive necessity, not a courtesy.'],
    ],
    'League-table credit allocation varies by provider and by deal role. Pitch decks that overstate credit are competitively risky — a competing bank can flag the misrepresentation directly to the client. Analysts building pitch pages should verify which provider\'s rules support the claim being made and footnote accordingly.'),

  q(4351025, 'Career Skills', CHAPTER, 'Fairness opinion purpose and limits',
    'A public-company target receives a binding bid and the board commissions a fairness opinion from a separate bank. What does the fairness opinion actually conclude, and what does it not conclude?',
    'It opines that the consideration to be received is fair, from a financial point of view, to the relevant shareholders as of the opinion date — it does not address whether the deal is the best available, whether to vote for it, or whether better terms could be negotiated',
    [
      ['It concludes that the deal price is the best possible price available in the market', 'Fairness opinions explicitly do not address whether a better price was available — they opine on whether the agreed price is fair, given the analysis performed. "Fair" is a range, not a point estimate of the maximum achievable price.'],
      ['It recommends to shareholders whether to vote in favor of the deal', 'Fairness opinions do not recommend votes. The board, not the bank, makes the recommendation to shareholders; the opinion is an input to the board\'s recommendation, not a substitute for it.'],
      ['It guarantees that the deal is legally compliant and will close', 'It does not address legal compliance or closing certainty. Those are counsel\'s opinions, not the bank\'s; the fairness opinion is strictly a financial-fairness conclusion.'],
    ],
    'A fairness opinion is a narrow financial-point-of-view conclusion delivered to the board. It is not a vote recommendation, a best-price guarantee, or a legal opinion. Board directors rely on it as one element of their fiduciary process; analysts assisting on the opinion need to know the scope of what is and is not being concluded.'),

  q(4351026, 'Career Skills', CHAPTER, 'Who delivers the fairness opinion and why',
    'The sell-side advisor on a deal would have a clear conflict if it also delivered the fairness opinion to the target\'s board. Why, and what is the typical structure?',
    'The sell-side advisor earns a success fee contingent on deal close, which creates a financial incentive to opine that the price is fair — boards therefore often retain a separate bank with no contingent fee to deliver the opinion, eliminating the incentive conflict',
    [
      ['The sell-side advisor can deliver the fairness opinion as long as it is disclosed', 'Disclosure does not cure the underlying incentive. Boards have been criticized in Delaware litigation for relying on a fairness opinion from the same bank earning the success fee, and many boards now retain independent opinion providers.'],
      ['Fairness opinions are delivered by counsel, not banks', 'Fairness opinions are explicitly financial opinions and are delivered by investment banks, not law firms. Counsel may advise on the board process but cannot itself opine on financial fairness.'],
      ['Any bank can deliver any opinion — there are no conflict rules', 'There are no SEC rules requiring an independent opinion provider, but Delaware case law (Lyondell, Smith v. Van Gorkom, Revlon line) has put pressure on boards to demonstrate independent process, which includes opinion-provider selection.'],
    ],
    'The fairness opinion is structurally separated from the sell-side mandate to remove the incentive conflict. The sell-side bank earns its success fee on close; an independent opinion provider earns a flat fee for the opinion regardless of outcome. Junior bankers should know this because they may staff fairness-opinion engagements where the seller\'s primary advisor is a competitor bank.'),

  q(4351027, 'Career Skills', CHAPTER, 'Board fiduciary duties in a sale',
    'A US public-company board approves a sale process. What are their core fiduciary duties in evaluating bids?',
    'Duty of care (informed, deliberate process — adequate diligence, valuation work, advisor engagement) and duty of loyalty (act in shareholders\' best interest, manage conflicts among directors and management) — together meaning they must run a defensible process, not just accept the first or highest bid',
    [
      ['Maximize the headline bid price regardless of process — duty to shareholders means highest dollar wins', 'Boards are obligated to run a defensible process, not just accept the highest number. A poorly-run process accepting a high bid can be litigation-exposed if a lower bid had higher certainty or if conflicts were not managed.'],
      ['Maintain board friendly relations with management to ensure smooth transition', 'Board duty runs to shareholders, not management. Where management interests diverge from shareholders (e.g., golden parachute structure), the board must side with shareholders.'],
      ['Avoid litigation by accepting any bid above the recent trading price', 'Litigation avoidance is not a fiduciary duty. The duties are care and loyalty, and a process designed to avoid litigation rather than maximize shareholder value would itself be a breach.'],
    ],
    'Board fiduciary duty in a sale is twofold: care (defensible process) and loyalty (shareholder interest). The Delaware case law that defines these duties (Revlon, Van Gorkom, Smith) shapes everything from board meeting cadence to fairness-opinion structure. Bankers advising boards should understand the duties even though they themselves are not fiduciaries in the same way.'),

  q(4351028, 'Career Skills', CHAPTER, 'Revlon mode framing',
    'A US public-company target enters "Revlon mode" once a sale becomes inevitable. What changes in the board\'s duties at that point, and what does that mean practically for the banker?',
    'Once a change of control becomes inevitable, the board\'s duty narrows from "long-term value" to "obtaining the best price reasonably available for shareholders in the transaction" — the banker must therefore document a competitive process, justify any decision to favor one bidder over another, and ensure the record supports the price-maximization standard',
    [
      ['Revlon mode means the board can reject any bid below the target\'s 52-week high', '52-week high is not the Revlon standard. The standard is best price reasonably available — which may be below the 52-week high if market conditions have changed, and may require accepting a bid below management\'s preferred number if the process supports it.'],
      ['Revlon mode is a tax classification triggered when the deal exceeds $1B', 'Revlon mode is a Delaware fiduciary-law concept from Revlon, Inc. v. MacAndrews & Forbes (1986). It has nothing to do with deal-size tax thresholds.'],
      ['Revlon mode only applies to hostile deals, not friendly ones', 'Revlon applies once a change of control becomes inevitable, regardless of whether the deal is friendly or hostile. A negotiated sale to a strategic also triggers Revlon duties.'],
    ],
    'Revlon mode is the Delaware standard that narrows board duty to price maximization once change of control is unavoidable. It changes how bankers document the process — competitive tension, justified bidder selection, defensible price discovery. Knowing the doctrine matters because the banker\'s process record is what the board will rely on if litigated.'),

  q(4351029, 'Career Skills', CHAPTER, 'Public vs private process tradeoffs',
    'A private-equity-owned target is considering whether to run a broad sell-side auction or a quiet bilateral negotiation with one strategic buyer. What is the core tradeoff?',
    'Broad auction maximizes competitive tension and price discovery but risks information leakage, employee disruption, and competitor intelligence gathering; bilateral preserves confidentiality and execution speed but sacrifices the price tension that an auction generates',
    [
      ['Broad auctions always produce higher prices and should be the default', 'Auctions raise price *on average* but not in every deal. A bilateral with a strategic who has clear synergies and high willingness to pay can outperform an auction, particularly where confidentiality leakage would damage the business.'],
      ['Bilateral negotiations always close faster because there is only one counterparty', 'Bilaterals are often faster but not always — a determined sole buyer can retrade aggressively without competitive pressure, dragging out negotiations. Process speed depends on bidder behavior, not just bidder count.'],
      ['Public-company targets must run auctions; private targets must run bilaterals', 'There is no such rule. Both public and private targets choose between the two based on fiduciary considerations, confidentiality concerns, and price expectations.'],
    ],
    'The auction-vs-bilateral choice is a price-vs-certainty-vs-confidentiality tradeoff. Auctions raise price expectation but increase leakage and process risk; bilaterals preserve confidentiality and execution speed but give up the tension premium. Junior bankers should be able to articulate the tradeoff because clients ask it on most early-stage sell-side conversations.'),

  q(4351030, 'Career Skills', CHAPTER, 'Go-shop vs no-shop',
    'A public-company deal has been signed with a private equity buyer and includes a "go-shop" period of 30 days. What does that allow, and how does it differ from a "no-shop"?',
    'A go-shop allows the target board to actively solicit competing bids for a defined window (typically 30–45 days) without triggering the break fee — a no-shop prohibits the board from soliciting bids at all and only permits accepting unsolicited superior proposals',
    [
      ['Go-shop and no-shop are the same — both restrict the board from new bidder solicitation', 'They are opposites. Go-shop permits active solicitation for a defined window; no-shop prohibits solicitation entirely. Confusing them inverts the seller\'s post-signing flexibility.'],
      ['Go-shop is a buyer-side protection that allows the buyer to shop the deal to lenders', 'Go-shop runs to the seller\'s board, not the buyer. The buyer is the one being shopped against, not the one shopping. This inverts the entire concept.'],
      ['Go-shop and no-shop both refer to whether the deal includes a financing condition', 'Neither term refers to financing conditions. They both govern the seller\'s post-signing latitude to solicit or accept competing bids.'],
    ],
    'Go-shop opens a window for the seller board to look for a better deal after signing — useful when the board wants Revlon-compliant price discovery but accepted a sponsor bid first. No-shop locks the seller down. The choice between them is negotiated and reflects the buyer\'s confidence that no superior bid will emerge.'),

  // ---------------------------------------------------------------------------
  // FA roles, capital markets, weekend norms (4351031–4351035)
  // ---------------------------------------------------------------------------
  q(4351031, 'Career Skills', CHAPTER, 'FA vs non-FA roles',
    'A bank is engaged as "financial advisor" (FA) on a deal and another bank is described as providing "transaction services." What is the practical difference?',
    'The FA owes fiduciary or advisory duties to the client, runs the process, and is typically compensated by success fee; transaction services (or "transaction support") roles are narrower, often fee-for-service deliverables like a market check or specific opinion, without process ownership or success fee',
    [
      ['FA and transaction services are the same role with different banks\' branding', 'They are distinct scopes. FA is the lead advisory role with process ownership; transaction services is a narrower support role, typically without success-fee economics or process ownership.'],
      ['FA refers to financial advisor as in retail wealth management, not investment banking', 'In M&A context, FA means the lead investment-banking advisor on the deal. The retail wealth-management usage is a separate industry context.'],
      ['Transaction services is a more senior role than FA because it commands premium pricing', 'The opposite — FA is the senior process-owning role. Transaction services is a narrower scope (fairness opinion, market check, due-diligence assistance) that typically pays less and carries less responsibility.'],
    ],
    'FA roles run the process and earn success fees. Transaction-services roles are narrower scope, paid for specific deliverables, and do not own the deal. Analysts should know which role their bank is in on any given engagement because it determines what work product is expected and what compensation structure is in play.'),

  q(4351032, 'Career Skills', CHAPTER, 'Capital markets vs M&A workstreams',
    'A client is considering selling the company *or* raising $300M of debt to fund a recapitalization. How do the M&A and debt capital markets (DCM) workstreams differ structurally?',
    'M&A workstream is one-counterparty, multi-month execution with extensive bilateral negotiation; DCM workstream is many-counterparty, weeks-long execution with standardized terms negotiated between issuer and lead-bank syndicate desk rather than with each lender individually',
    [
      ['Both workstreams take roughly the same time and involve the same people', 'They are materially different cadences. M&A processes run months with one signed counterparty; DCM transactions can clear in 2–4 weeks with standardized terms and a syndicate of dozens of investors.'],
      ['DCM is just smaller-version M&A — same workflow, smaller numbers', 'They have different mechanics entirely. M&A negotiates one bilateral contract; DCM markets a standardized security to a syndicate. The workflows, working hours patterns, and risk profile are not the same.'],
      ['Capital markets execution is run by counsel rather than the bank because it is a securities matter', 'The lead bank\'s capital-markets desk runs the DCM execution — counsel drafts and disclosure-reviews, but the bank prices, syndicates, and closes the transaction. Counsel does not run the workstream.'],
    ],
    'M&A and capital markets are different products with different cadences. M&A is months of bilateral negotiation on one contract; DCM is weeks of multilateral marketing on a standardized security. Analysts who only see one side of the bank often miss how different the second side\'s workflow looks day-to-day.'),

  q(4351033, 'Career Skills', CHAPTER, 'ECM vs DCM cadence',
    'A bank\'s equity capital markets (ECM) team is launching an IPO; the DCM team is concurrently pricing a $500M investment-grade bond for a different client. The ECM analyst and DCM analyst have very different week-of cadences. Why?',
    'ECM IPO timeline runs months — drafting prospectus, SEC review, roadshow over 1–2 weeks, then pricing; DCM investment-grade bond pricing can run days — desk announces in the morning, books build through the day, pricing in the afternoon, settlement T+2',
    [
      ['ECM and DCM are managed identically with the same timelines', 'They run at fundamentally different speeds. An IPO from filing to pricing is typically 4–6 months; an IG bond can launch and price in a single day.'],
      ['DCM is slower because debt investors require more diligence than equity investors', 'Investment-grade debt investors typically require less issuer-specific diligence than equity investors — they buy on credit ratings, covenant package, and pricing relative to comparables. The cadence difference runs the opposite direction.'],
      ['ECM and DCM both clear in a single afternoon — the difference is purely in the documentation', 'IPOs do not clear in an afternoon. Roadshows, SEC review, and price discovery all take time that cannot be compressed into a single execution day.'],
    ],
    'ECM and DCM have structurally different cadences. IPOs run months because the security is new and the investor base is unfamiliar; investment-grade bonds can price intraday because the issuer is already known and the security follows a standard template. Analysts assigned to capital markets desks see weeks pattern entirely differently from M&A analysts.'),

  q(4351034, 'Career Skills', CHAPTER, 'Sell-side vs buy-side workflow',
    'A bank is engaged as a sell-side advisor on one mandate and a buy-side advisor on another. What workflow differences should the analyst expect between the two roles?',
    'Sell-side: produces CIM, runs the buyer outreach process, manages bidder Q&A, drives toward signing; buy-side: evaluates targets, performs reverse-diligence on the seller\'s materials, builds the bid model, structures the offer and negotiates from the buyer\'s side of the table',
    [
      ['Sell-side and buy-side are mirror images of the same workflow', 'They share procedural milestones but the work products are different. Sell-side produces marketing materials and runs the process; buy-side produces underwriting models and structures bids. Skill emphasis differs.'],
      ['Buy-side is always more analytical than sell-side because buyers do more diligence', 'Both sides do extensive analysis — sell-side bankers also build models, run sensitivities, and benchmark valuations. The work-product emphasis differs but the analytical depth is comparable.'],
      ['Sell-side is more common because every deal has only one seller and multiple buyers', 'Many deals have only one seller and one buyer (bilateral) and many have advisors only on one side. The frequency of sell-side vs buy-side mandates depends on the bank\'s client mix, not deal mathematics.'],
    ],
    'Sell-side workflow produces the marketing materials and runs the process toward signing. Buy-side workflow evaluates and structures the offer from the buyer\'s side. Both share procedural milestones (NDA, IOI, LOI, signing, closing) but the deliverables, hours pattern, and skill emphasis differ. Junior bankers should know which side they are on every week because it changes what is expected.'),

  q(4351035, 'Career Skills', CHAPTER, 'Weekend work norms',
    'An associate emails the analyst Friday at 6pm asking for "a refreshed buyer-list segmentation by Monday morning." The analyst is uncertain whether this can wait until Monday. What is the right read?',
    'Treat the request as a Monday-morning deliverable that requires meaningful weekend work — Friday-evening "Monday morning" asks are functionally weekend asks in banking culture, and the analyst\'s job is to scope the work, raise any blocker early, and deliver on time',
    [
      ['Wait until Monday morning to start the work — the email did not explicitly say "this weekend"', 'Monday-morning deliverable implies the work is done before Monday. Starting Monday morning means missing the deliverable; the implied timeline is weekend execution unless the associate explicitly says otherwise.'],
      ['Refuse the request because it falls outside contracted working hours', 'Banking analyst roles do not have contracted hours in the way that hourly roles do; weekend work is the norm on live deals. Refusing the request would end the analyst\'s position quickly.'],
      ['Push the work onto the next analyst on the rotation', 'Workstream allocation is not the analyst\'s to redistribute. Pushing work to another analyst without coordination would create confusion and signal unwillingness to own the deliverable.'],
    ],
    'Banking culture compresses Friday-evening "Monday morning" asks into weekend work. The analyst\'s job is to scope the work early, raise scope or data blockers before the weekend starts, and deliver. New analysts who treat "Monday morning" as a literal Monday-morning start time miss the implicit weekend obligation and miss deliverables.'),

  // ---------------------------------------------------------------------------
  // Model versioning, marking up CIM, footnotes, comps (4351036–4351040)
  // ---------------------------------------------------------------------------
  q(4351036, 'Career Skills', CHAPTER, 'Model versioning discipline',
    'An analyst is working on a sell-side model that has been updated by three people across two weeks. The file currently lives as "ProjectAuroraModel_v17_jl_final2_clean_post-VP-comments.xlsx" in a shared folder. What discipline should the analyst impose to prevent a model collision?',
    'Establish a single canonical version path with sequential numeric versioning (v1, v2, v3…), a changelog at the top of the file recording who changed what when, and a rule that only one person checks out the live version at a time — everyone else works on read-only copies',
    [
      ['Keep saving with increasingly descriptive suffixes so the file history is preserved in filenames', 'Filename suffix proliferation is exactly the problem to solve. "v17_jl_final2_clean_post-VP-comments" tells no one which version is current; the discipline is to compress, not extend, the filename.'],
      ['Email the latest version to all working-group members after every change', 'Email-based versioning creates inbox-as-version-control, where the latest file depends on who looked at their inbox last. The canonical-folder approach is what large banks use precisely because email-versioning fails on deals with multiple workstreams.'],
      ['Let each contributor maintain their own copy and merge changes verbally on calls', 'Verbal merge of spreadsheet changes is unreliable and slow. Spreadsheet changes need to be in a single canonical file or in branches that get merged in a controlled way, not reconciled in conversation.'],
    ],
    'Model versioning discipline prevents the canonical sell-side failure mode: two people editing different copies and producing two different IC numbers. Sequential numeric versioning, an in-file changelog, and check-out rules are the practical mechanics. Junior bankers who do not impose this on their pod end up with the most common reason a senior banker rejects a deliverable.'),

  q(4351037, 'Career Skills', CHAPTER, 'Version-control etiquette on shared drafts',
    'A CIM draft is being marked up by three people: the VP, the associate, and the senior banker on the deal. All three are sending tracked-change Word files to the analyst. The CIM is due to the client tomorrow. What workflow keeps the comments coherent?',
    'Consolidate all three markups into a single document with each reviewer\'s name visible in the tracked changes, resolve internal conflicts by escalating to the most senior reviewer, and circulate the consolidated draft once before sending — never silently picking one reviewer\'s version over another',
    [
      ['Accept the most senior banker\'s changes and reject the others because seniority decides', 'Silently rejecting the VP\'s and associate\'s changes destroys the comment loop and will be noticed when they read the next draft. The discipline is to consolidate and escalate explicit conflicts, not to discard comments.'],
      ['Send all three marked-up files to the client and let them pick which version to use', 'Sending three conflicting markups to the client signals that the deal team is uncoordinated. The client expects one consolidated draft; comment reconciliation is the deal team\'s internal work.'],
      ['Combine all changes silently without flagging conflicts so the document looks clean', 'Silently combining conflicting comments papers over disagreements between reviewers. When the senior banker sees their change was overruled without escalation, the analyst loses credit; conflicts must be surfaced, not hidden.'],
    ],
    'Comment consolidation on shared drafts is a coordination job, not a content decision. The analyst\'s role is to surface conflicts to the most senior reviewer, document the resolution, and circulate the consolidated draft. Silently picking one reviewer\'s version (or sending all versions to the client) both fail; the deliverable is one coherent draft with documented authorship.'),

  q(4351038, 'Career Skills', CHAPTER, 'Marking up the CIM draft',
    'The CIM draft is being reviewed for the first time. The MD wants the analyst to "mark it up." What is the standard markup workflow?',
    'Read the document end-to-end, comment on substance (data inconsistencies, weak positioning, unsupported claims) using Word\'s comment feature, suggest specific replacement language inline using tracked changes, and number the comments so they can be discussed sequentially on the markup call',
    [
      ['Highlight the entire document yellow so the next reviewer sees that someone read it', 'Whole-document highlight conveys no information about what to change. Markup is meant to identify specific issues and propose specific edits, not to signal effort.'],
      ['Reply with an email summarizing the issues without editing the document', 'Email summary detaches the comments from the location in the document where they apply, which forces the next reviewer to re-find each issue. Tracked changes and comments anchor the feedback to the text.'],
      ['Print the document, mark it with red pen, and scan it back as a PDF', 'Pen-on-paper markup defeats the version control and consolidation workflow downstream. Other reviewers cannot resolve or counter-comment on a PDF scan the way they can on a Word file with tracked changes.'],
    ],
    'CIM markup is a specific workflow: end-to-end read, anchored comments at the location of the issue, inline suggested edits via tracked changes, and numbered comments for sequential discussion. Whole-doc highlighting, email summaries, and paper scans all break the consolidation workflow that comes next.'),

  q(4351039, 'Career Skills', CHAPTER, 'Footnoting source documents',
    'A CIM page includes the claim "the company is the #1 player in mid-market industrial distribution by revenue." What footnoting discipline does that claim require?',
    'Footnote citing the source (industry report by named publisher and year, internal market study with methodology, or company filings of competitors) — if the claim cannot be sourced, it must be softened ("among the leading players") or removed',
    [
      ['Footnotes are decorative — the claim stands on the deal team\'s judgment', 'CIMs are read by bidders and counsel who will challenge unsourced claims. Unsupported "#1" assertions are a litigation risk for both the seller and the bank under disclosure liability.'],
      ['Footnote with "Company management estimates" for every market claim regardless of source', 'Generic "management estimates" footnotes obscure the actual source and are noticed by sophisticated bidders. Specific named sources (IBISWorld, Gartner, S&P Capital IQ, named filings) are the discipline.'],
      ['Footnote only the financial-statement claims; market positioning claims do not need footnotes', 'Market positioning claims (#1, leading, largest) are often the most aggressive and most challenged claims in the CIM. They need sourcing precisely because they are competitive and easily disputed.'],
    ],
    'Every quantitative or competitive claim in the CIM needs a footnote citing a specific source. Generic "management estimates" footnotes invite challenge; named industry reports with methodology survive scrutiny. Analysts who skip footnotes create downstream rework when counsel insists on sourcing before distribution.'),

  q(4351040, 'Career Skills', CHAPTER, 'Comp tables sourcing discipline',
    'The analyst is building a public trading comparables table with 12 peer companies. What sourcing discipline must each row meet?',
    'Each metric tied to a specific source (Capital IQ pull date, latest 10-Q or 10-K, factset broker estimate cycle), calendarized to a common fiscal year-end, and footnoted with the date of the underlying data — comp tables go stale weekly and must show as-of date prominently',
    [
      ['Pull each company\'s headline financials from their most recent annual report and report the figures as-is', 'Annual reports are often six-plus months old by the time a comp is built. Latest-twelve-months from the most recent 10-Q is more current; mixing annual and LTM across the table creates apples-to-oranges comparisons.'],
      ['Use whichever data source is fastest to pull, since comps are illustrative', 'Comps drive valuation in the IC discussion; they are not illustrative. Source choice affects the multiples — Bloomberg, Capital IQ, and FactSet often disagree, and consistency across rows is required for the table to be defensible.'],
      ['Show the most flattering multiple for each peer to support the highest valuation range', 'Cherry-picking multiples per peer destroys the comparability the table is built on. Sophisticated reviewers (including the IC at the seller\'s board) will catch the inconsistency and discount the entire deliverable.'],
    ],
    'Comp tables are defensible only when every cell is sourced consistently. Calendarize to a common period, document the as-of date, use one primary data source for the table with named exceptions, and refresh weekly during a live process. Comps that are stale or inconsistently sourced get rejected on review.'),

  // ---------------------------------------------------------------------------
  // Hierarchy and feedback loop (4351041–4351043)
  // ---------------------------------------------------------------------------
  q(4351041, 'Career Skills', CHAPTER, 'IB hierarchy interactions',
    'A new analyst is staffed on a sell-side pod with one associate, one VP, one director, and one MD. The MD has just asked the analyst a direct question about deal sequencing in front of the client. How should the analyst answer?',
    'Answer the question directly and concisely if the analyst knows the answer, then loop in the VP or associate immediately for confirmation — the MD asked the analyst for a reason and over-deflecting to senior bankers makes the team look uncoordinated',
    [
      ['Defer to the associate or VP to answer because seniority dictates who speaks to the MD', 'Reflexive deferral signals that the analyst does not know the answer, which is worse than answering directly with appropriate caveats. The MD asked the analyst specifically; deflecting reflects poorly.'],
      ['Answer at length to demonstrate detailed knowledge to the MD', 'Long answers in front of the client are a junior-banker tell. The right register is short, precise, with explicit ladder-up to the VP if the question goes beyond the analyst\'s scope.'],
      ['Tell the MD the analyst will follow up by email after checking with the associate', 'Email-follow-up deflection in front of the client is a process foul. The client expects the team to be aligned in real time; deferring an answer that should have been ready signals lack of preparation.'],
    ],
    'IB hierarchy interactions in client settings require the analyst to answer cleanly within their scope and ladder up explicitly when the question exceeds it. Deflection and long answers both fail. The discipline is to know what the analyst owns, answer that crisply, and pass the rest to the VP or associate by name.'),

  q(4351042, 'Career Skills', CHAPTER, 'How MDs actually consume analyst output',
    'The analyst has built a 60-slide pitch book and a 200-tab Excel model for a Monday MD review. The MD has 45 minutes. What does the analyst need to anticipate about how the MD will actually consume the work?',
    'The MD reads the executive summary slide, the football field, two or three numerical sensitivities, and the recommendation page — the analyst must ensure those four artifacts are pristine, internally consistent, and ladder cleanly to the underlying model, because the MD will not read the rest before deciding',
    [
      ['The MD will read every slide and every model tab in detail given 45 minutes', 'MDs do not read 60 slides in 45 minutes. They scan for the load-bearing artifacts (exec summary, football field, recommendation) and probe two or three specific numbers. The analyst\'s job is to make those load-bearing pages bulletproof.'],
      ['The MD will only look at the executive summary and ignore everything else', 'They probe specific numbers behind the executive summary. The analyst must be ready to defend the inputs into the headline figures; the rest of the book serves as backup the MD may sample.'],
      ['The MD will reject the work because 60 slides is too long for a Monday review', 'Pitch books are routinely 60+ slides. The book is not too long; the analyst\'s anticipation should be about which pages the MD will actually open, not about cutting volume.'],
    ],
    'MDs consume analyst output by skimming load-bearing artifacts and probing specific numbers. The exec summary, football field, sensitivities, and recommendation are where attention lands. Analysts who treat every page equally distribute polish too thin; the discipline is to over-polish the artifacts that decide the call and accept that the rest serves as defensible backup.'),

  q(4351043, 'Career Skills', CHAPTER, 'Comments-and-quality-control loop',
    'A deliverable goes through analyst → associate → VP → MD comments before client distribution. Each level adds comments and sends back for revision. What is the analyst\'s role in keeping the loop functional?',
    'Track each round of comments with a comments log (reviewer, page, issue, resolution), resolve each comment in the next turn, escalate conflicts between reviewers explicitly, and confirm in writing when a round is closed — so no comment is silently dropped and no reviewer is surprised by the next draft',
    [
      ['Accept every comment from every reviewer and resolve them all in the same turn', 'Comments often conflict (associate wants more detail; VP wants less). Accepting all comments uncritically produces incoherent drafts; conflicts must be escalated and resolved before the next turn.'],
      ['Wait for all comments from all reviewers before starting any revisions', 'Sequential review means the analyst should be revising after each reviewer\'s pass, not waiting for the full chain. Waiting for everyone before starting compresses the work into a single panicked turn before client distribution.'],
      ['Treat comments as suggestions and apply them only if the analyst agrees', 'Comments from senior reviewers are not optional. The analyst\'s job is to implement, escalate conflicts, and resolve — not to gatekeep based on personal agreement.'],
    ],
    'The comments-and-QC loop is a coordination job, not a content judgment. The analyst tracks every comment, resolves or escalates each, and confirms in writing when a round is closed. Comments dropped silently or conflicts unresolved are the most common reasons senior bankers lose trust in junior bankers on a deal.'),
]
