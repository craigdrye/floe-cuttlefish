import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// IB CAPSTONE — Sell-Side Analyst Packet and Synthesis (Northwind Industries)
// ----------------------------------------------------------------------------
// 47 integrative questions (IDs 4351500–4351546) extending the existing
// capstone trio (4340100–4340102 in careerAgentGeneratedRoadmapFinance.ts).
// All set on the SAME fictional client so the learner walks Northwind from
// teaser through closing — the way an analyst actually experiences a sell-side
// mandate across all five capstone lessons.
//
// Northwind Industries context (consistent across every question below):
//   - US specialty industrial distributor (electrical components and
//     industrial fasteners, primarily) serving the Northeast and
//     Mid-Atlantic. Mature mid-market, regional footprint.
//   - ~$450M LTM revenue, ~$55M adjusted EBITDA (~12% margin).
//   - Founder-CEO age 64, retiring; family minority stake stays post-close.
//   - LTM growth 4%, NTM expected 6% (bolt-on pipeline lifts the curve).
//   - Working capital intensive: DSO 52, DIO 88, DPO 41 — a real cash drag
//     that bidders interrogate.
//   - $80M net debt entering the process; senior leverage refinanceable.
//   - 2024 bolt-on completed ($30M deal, integrated; ~$3M run-rate EBITDA
//     synergies still being booked).
//   - Sell-side process: 12 strategic buyers + 8 financial sponsors targeted
//     for first-round outreach.
//
// Voice: matches jargonBusters.ts and the existing 4340100–4340102 capstone
// trio — specific, evidence-anchored, no filler, no strawman distractors.
// Each wrong-answer rationale is bespoke; the lesson on each question is the
// integrative takeaway that ties the choice back to the wider deal craft.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe IB capstone canonical bank'

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

const CHAPTER = 'Capstone: Sell-Side Analyst Packet and Synthesis'

// Difficulty distribution target: ~30% rated 3, ~50% rated 4, ~20% rated 5.
// 47 questions: 14 at 3 (≈30%), 24 at 4 (≈51%), 9 at 5 (≈19%).
export const IB_CAPSTONE_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Lessons 1–2: Teaser + CIM, buyer list, outreach (10 Qs)
  4351500: 3, // Teaser anonymization for Northwind
  4351501: 4, // CIM positioning of the 2024 bolt-on
  4351502: 4, // Adjusted EBITDA bridge — owner add-backs
  4351503: 3, // Working-capital narrative in the CIM
  4351504: 4, // Buyer list — 12 strategics vs 8 sponsors balance
  4351505: 5, // Customer concentration disclosure timing
  4351506: 4, // NDA tiering for the data room
  4351507: 3, // Outreach sequencing and process letter
  4351508: 4, // Pre-marketing meetings with sponsor short list
  4351509: 4, // Founder-CEO messaging on retirement and continuity

  // Lessons 3–4: Management meetings, IOIs, second round (10 Qs)
  4351510: 3, // Management presentation deck structure
  4351511: 4, // Rehearsing the CEO on customer concentration
  4351512: 4, // Reading IOI quality across 14 responses
  4351513: 4, // IOI valuation range triangulation
  4351514: 5, // Down-selecting from 14 IOIs to 6 second-rounders
  4351515: 4, // Second-round bid instructions and process letter v2
  4351516: 3, // Data room build-out for second round
  4351517: 4, // Expert calls and customer reference protocol
  4351518: 4, // Quality of earnings — handling pro-forma adjustments
  4351519: 5, // Reading bidder behavior between rounds

  // Lessons 5–6: Bid evaluation, valuation triangulation, recommendation (10 Qs)
  4351520: 3, // Final bid arrival — apples-to-apples normalization
  4351521: 4, // DCF triangulation for Northwind
  4351522: 4, // Trading comps selection for a specialty distributor
  4351523: 4, // Precedent transactions — distribution roll-up cycle
  4351524: 5, // LBO triangulation — what sponsors will actually pay
  4351525: 4, // Synergy crediting in strategic bids
  4351526: 3, // Bid stack ranking — cash vs rollover vs earnout
  4351527: 4, // Reverse termination fee asymmetry
  4351528: 5, // Recommendation drafting under split board preferences
  4351529: 4, // Family minority rollover mechanics

  // Lessons 7–8: LOI, exclusivity, definitive agreement, fairness (10 Qs)
  4351530: 3, // LOI economic vs non-economic terms
  4351531: 4, // Exclusivity period length and standstill
  4351532: 4, // Confidentiality during exclusivity
  4351533: 4, // Definitive agreement workstream sequencing
  4351534: 5, // Reps and warranties scope for Northwind
  4351535: 4, // R&W insurance — retention and policy limit
  4351536: 4, // Material adverse effect carve-outs
  4351537: 3, // Indemnification caps and survival periods
  4351538: 4, // Fairness opinion scope and audience
  4351539: 5, // Specific performance vs reverse break fee

  // Lessons 9–10: Signing, regulatory, closing, post-close, board fiduciary (7 Qs)
  4351540: 3, // Signing-day press release and 8-K coordination
  4351541: 4, // HSR filing strategy and second-request risk
  4351542: 4, // Working-capital true-up at closing
  4351543: 4, // Closing checklist and funds flow
  4351544: 3, // Post-close transition services and integration handoff
  4351545: 5, // Board fiduciary observations under Revlon
  4351546: 4, // League-table credit and post-close lessons file
}

export const ibCapstoneQuestions: Question[] = [
  // -------------------------------------------------------------------------
  // LESSONS 1–2 — Teaser, CIM, buyer list, outreach mechanics (4351500–4351509)
  // Output: the front of the Northwind packet — anonymized teaser, full CIM,
  // buyer list with rationale, NDA-tiered data room, outreach sequence. Forces
  // the learner to make disclosure and process choices that compound through
  // the rest of the deal.
  // -------------------------------------------------------------------------
  q(4351500, 'Career Skills', CHAPTER, 'Teaser anonymization for Northwind',
    'You are drafting the one-page teaser for Northwind: $450M revenue, $55M EBITDA, Northeast and Mid-Atlantic specialty industrial distributor with a recent $30M bolt-on. The MD wants the teaser to circulate broadly under code name "Project Anchor." Which combination of facts and omissions actually preserves anonymity while pulling buyer interest?',
    'Disclose region ("Northeastern US"), broad sector ("specialty industrial distribution"), revenue and EBITDA bands ($425–475M / $50–60M), and growth profile — but omit the bolt-on, specific product lines, and any customer or geography count that would let a competitor triangulate the name',
    [
      ['Include the exact $450M / $55M figures because precision attracts serious buyers and bands look evasive', 'Exact figures at this size narrow the candidate set materially — there are only a handful of distributors in this band in the Northeast, and a competitor will name it within an afternoon. The teaser is supposed to be anonymous; precision defeats that.'],
      ['Name the bolt-on transaction in the teaser to demonstrate growth and M&A capability', 'The 2024 bolt-on is publicly indexed in trade press and SEC filings of the acquired entity\'s prior owner. Including it in the teaser is functionally naming Northwind to any buyer familiar with the sector.'],
      ['Use the legal name in the teaser since NDAs will follow before any sensitive material is shared', 'Teasers go out before NDAs, by design — the entire point of "Project Anchor" branding is that buyers see the opportunity before signing. Using the legal name skips the gate.'],
    ],
    'A teaser is an anonymization exercise dressed as a marketing document. Bands instead of points, region instead of state, sector instead of product line — these are the disciplines that keep the seller\'s position intact through first-round outreach. Naming any fact that triangulates to the company defeats the document.'),

  q(4351501, 'Career Skills', CHAPTER, 'CIM positioning of the 2024 bolt-on',
    'In the Northwind CIM you have to present the 2024 bolt-on ($30M deal, ~$3M run-rate synergies, integrated for 11 months). Management wants the synergies presented as fully realized. The synergies are partly realized but procurement consolidation is still in progress. How should the CIM frame this?',
    'Show LTM as-reported EBITDA, an adjusted figure that adds the contractually documented run-rate synergies with a footnote on the procurement piece still in flight, and a separate "annualized run-rate" view — letting buyers see each layer and decide which to underwrite',
    [
      ['Present a single adjusted EBITDA that includes all $3M synergies because management has signed off and the buyer will adjust anyway', 'Sole-figure presentation of partly-realized synergies invites the retrade. Buyers compare CIM figures to their own QofE and the gap becomes the renegotiation lever — the CIM should anticipate the QofE, not paper over it.'],
      ['Exclude the synergies entirely and let buyers ask about the bolt-on in management meetings', 'Hiding documented synergies undersells the asset. The point of a CIM is to make the strongest defensible case — leaving real, supported adjustments off the page is just as poor a discipline as overstating them.'],
      ['Show only the run-rate annualized figure since that is the steady-state number buyers care about', 'Skipping the LTM and the bridge robs buyers of the audit trail. They will rebuild it themselves and the version they reconstruct will be less generous than the one the CIM could have shown openly.'],
    ],
    'CIM EBITDA presentation is layered, not single-figure. Showing as-reported, adjusted with documented add-backs, and run-rate with footnotes lets the buyer follow the bridge — and it pre-empts the QofE that would otherwise become the retrade conversation in the second round.'),

  q(4351502, 'Career Skills', CHAPTER, 'Adjusted EBITDA bridge — owner add-backs',
    'The founder-CEO\'s 2024 compensation was $2.8M plus a $400K family-owned aircraft charter expense booked in SG&A. Market CEO compensation for a $450M distributor is ~$1.2M. How should the EBITDA bridge present the owner add-backs?',
    'Add back the $1.6M comp differential and the $400K aircraft expense as separately labeled owner-related normalizations, with documentation in the data room (employment agreements, market comp survey, aircraft charter logs) so QofE can re-perform the adjustment',
    [
      ['Bundle both into a single $2M "owner adjustments" line to keep the bridge clean', 'A bundled line hides which piece is the comp normalization and which is the discretionary perk. QofE will unbundle it and challenge the soft piece; the bridge should separate them so the defensible piece is not contaminated by the questionable one.'],
      ['Add back the full $2.8M of CEO compensation because the new owner will replace the CEO', 'Adding back the entire $2.8M overstates the adjustment — the new owner still pays a CEO. The market-rate differential is the defensible piece; full add-back is the move that invites the largest haircut in QofE.'],
      ['Exclude the aircraft expense from the bridge to avoid drawing attention to family perks', 'Hiding the aircraft does not make it go away — QofE will surface every non-recurring or discretionary expense in the financials. Concealing it gives the buyer the bridge they would have built anyway, minus the seller\'s explanation.'],
    ],
    'Owner add-backs are the most-interrogated line in any sponsor-led QofE. The discipline is to separate market-rate normalizations from discretionary perks, document each with primary evidence, and let the buyer see the math — that is what gets the adjustment credited rather than haircut.'),

  q(4351503, 'Career Skills', CHAPTER, 'Working-capital narrative in the CIM',
    'Northwind\'s working capital is DSO 52, DIO 88, DPO 41 — a real cash drag for a $450M business. The CIM has to address this honestly because buyers will model it. What is the right narrative?',
    'Frame it as structural to specialty distribution (long inventory turns are how the business serves emergency electrical and fastener orders) and present a documented working-capital improvement plan — DSO down 5 days through credit policy tightening already underway, DIO targeted down 10 days through SKU rationalization the new owner can accelerate',
    [
      ['Present working capital as a temporary drag from the 2024 bolt-on that will normalize in 12 months', 'Blaming the bolt-on for structural working-capital intensity will not survive QofE — the pre-bolt-on figures show the same pattern. Manufacturing a temporary story makes the seller look either unaware or evasive.'],
      ['Omit the working-capital discussion from the CIM because it is below the EBITDA line', 'Working capital below EBITDA on the income statement does not mean it is below the buyer\'s attention. Sponsors model the cash conversion cycle line by line — silence in the CIM means they build their own story, usually less generous.'],
      ['Present an aggressive normalization assuming DSO drops to 35 and DIO to 60, sized to peer benchmarks', 'Peer-benchmark normalization without an execution plan is wishful thinking. Buyers credit working-capital improvement plans that are already in motion, not aspirational targets pinned to comp medians.'],
    ],
    'Working-capital narrative is a credibility test. Buyers know the figures and will model them — the CIM\'s job is to frame the structural reasons, document what is already in flight, and identify the levers a new owner can pull. Anything more aggressive than that gets discounted; anything less leaves money on the table.'),

  q(4351504, 'Career Skills', CHAPTER, 'Buyer list — 12 strategics vs 8 sponsors',
    'The MD wants a 20-name buyer list for Northwind: 12 strategics and 8 sponsors. Two of the strongest strategic candidates are direct regional competitors that the CEO is uncomfortable approaching. How should you build the list?',
    'Honor the CEO\'s exclusion with a documented note in the engagement file; replace the two excluded names with adjacent-product strategics (industrial fasteners and electrical distribution from non-overlapping regions) and one strategic from a complementary vertical (MRO), preserving competitive tension without burning the relationship',
    [
      ['Include the two excluded competitors anyway because the buyer list should be exhaustive and the bank works for the seller\'s best price', 'A sell-side mandate runs at the client\'s direction. Overriding a documented exclusion on a confidentiality concern damages the relationship and exposes the bank if a leak ever occurs from that channel.'],
      ['Drop the two excluded names and shrink the strategic list to 10 — the lower count is fine because financial sponsors will carry the auction', 'Shrinking the strategic side concedes the price ceiling. Strategics often pay highest because of synergies; the right move is to backfill with adjacent names, not to thin the field.'],
      ['Approach the two excluded competitors quietly through a side channel without naming Northwind, to test interest before going to the CEO', 'Side-channel outreach is exactly the kind of process discipline failure that surfaces later in litigation or in trade press. Buyer-list decisions belong on the documented record and inside the client\'s direction.'],
    ],
    'Buyer-list construction integrates competitive logic with client direction. Honoring the CEO\'s exclusion with documentation and backfilling with credible adjacent names preserves both the auction tension and the trust relationship — those compound through the next four months of the process.'),

  q(4351505, 'Career Skills', CHAPTER, 'Customer concentration disclosure timing',
    'Northwind\'s top 5 customers are 31% of revenue and the largest customer (a national electrical contractor) is 11%. The CIM is going to 20 parties. When should customer concentration be disclosed and at what level of detail?',
    'Disclose aggregate concentration percentages (top 5 = 31%, top 10 = 44%) in the CIM with no customer names; release named customer detail and contract terms only behind a second-tier NDA into the data room for second-round bidders, and the largest customer\'s contract specifics only in management sessions',
    [
      ['Disclose named customer detail in the CIM under the master NDA — buyers need it to underwrite revenue durability', 'Naming the largest customer to 20 first-round parties — several of whom are direct competitors — hands them the most valuable strategic information Northwind owns. Master NDAs do not provide enough protection for this level of detail.'],
      ['Omit concentration entirely and let bidders ask in management sessions if they want to model it', 'Omitting concentration figures is a tell. Sophisticated sponsors assume the worst when a figure that material is missing, and they price the assumed worst case rather than the actual band.'],
      ['Disclose concentration only to financial sponsors, since strategics already know Northwind\'s customers from competing in the market', 'Discriminatory disclosure violates the level-playing-field discipline the process letter promises. Even if strategics have informational advantage, the bank cannot codify it through differential CIM content.'],
    ],
    'Concentration disclosure is gated by purpose and tier. Aggregate in the CIM, named behind a second NDA, contract specifics in management sessions — each tier matches the information to the bidder commitment, and the discipline protects the seller through the months when the leak risk is highest.'),

  q(4351506, 'Career Skills', CHAPTER, 'NDA tiering for the data room',
    'For Northwind\'s virtual data room you are designing the disclosure tiers. Which structure actually balances bidder due diligence needs against leak risk through the four-month process?',
    'Three tiers: Tier 1 (CIM-equivalent, available on master NDA), Tier 2 (named customer detail, contract terms, financial detail at SKU level — released to second-round bidders under enhanced NDA), Tier 3 (employment contracts, customer-specific pricing, environmental reports — released to LOI signers only)',
    [
      ['Single-tier data room with everything available to anyone signing the master NDA — bidders need full information to bid well', 'A single-tier room exposes the most sensitive contracts and pricing to bidders who may drop out after first round, walking away with strategic intelligence the seller cannot recover. The leak risk multiplies with each tier compressed into the master NDA.'],
      ['Two tiers: master NDA gets everything except customer names; LOI signers see the rest', 'Two tiers is too coarse — second-round bidders need named customer detail and contract terms to make a credible bid, but they should not yet see employment contracts or environmental specifics. The gate between rounds and the gate at LOI are different gates.'],
      ['Tier disclosures by bidder identity — strategics see less than sponsors regardless of round', 'Identity-based tiering creates legal exposure (level-playing-field claims) and operational chaos (audit-trailing which file each bidder saw). Tiering by process stage is defensible; tiering by bidder type is not.'],
    ],
    'Data room tiering is a process-stage discipline. Each tier matches information sensitivity to bidder commitment depth — master NDA, enhanced NDA at second round, LOI gate — and the structure is documented in the process letter so no bidder can claim differential treatment.'),

  q(4351507, 'Career Skills', CHAPTER, 'Outreach sequencing and process letter',
    'The Northwind buyer list is finalized. How should the first-round outreach be sequenced and what does the process letter need to communicate?',
    'Send teaser + NDA to all 20 names within a 48-hour window so the process opens uniformly; release CIM and process letter on NDA execution; process letter specifies non-binding IOI deadline (4 weeks), required content (price range, structure, financing source, expected diligence, key conditions), and signals second-round selection criteria — without committing the seller to any selection rule',
    [
      ['Send to strategics first (week one) and sponsors second (week two), since strategics may need more internal approvals', 'Staggered outreach by bidder type creates a stale-information asymmetry — the first wave gets days of head start on diligence prep, and the second wave senses they were the backup list. Uniformity opens the process cleanly.'],
      ['Hold back the process letter until IOIs arrive, to keep bidders\' expectations malleable', 'Bidders need the process letter upfront to know what to submit. Withholding it produces IOIs that miss required content, forcing the bank to re-request — which signals process disorganization and weakens leverage.'],
      ['Commit to a specific number of second-round bidders in the process letter (e.g., "top 5 will advance") to anchor expectations', 'Committing to a specific count constrains the seller\'s flexibility. The process letter should describe selection criteria and reserve the seller\'s discretion, not pre-commit to a head count that becomes a contractual-like expectation.'],
    ],
    'First-round outreach is a uniformity exercise. Same documents, same deadlines, same process letter language — the discipline is what allows the bank to compare IOIs apples-to-apples four weeks later. Asymmetry at the gate compounds into asymmetry at the bid stack.'),

  q(4351508, 'Career Skills', CHAPTER, 'Pre-marketing meetings with sponsor short list',
    'Three financial sponsors with strong industrial distribution track records reach out informally before formal outreach launches. They want pre-marketing meetings with the MD and the CEO. How should you handle this?',
    'Decline pre-marketing meetings before formal launch — accepting them would create a process asymmetry the other 17 names could later challenge; instead, note the interest, ensure these three are on the formal list, and let them go through the standard sequence with everyone else',
    [
      ['Accept the pre-marketing meetings with all three to build relationships and gauge interest, while keeping the discussion at a high level', 'Pre-marketing meetings with a subset of bidders are exactly the asymmetry that produces fairness opinion challenges and litigation exposure. "High level" does not cure the structural problem — the other 17 bidders did not get the meeting.'],
      ['Accept meetings with the highest-conviction sponsor only to gauge a pre-empt, and pause the broader process if a pre-empt emerges', 'Pursuing a pre-empt before the auction has opened forfeits the price discovery the seller hired the bank to run. The board will ask whether the auction would have produced a higher number — and the bank cannot answer.'],
      ['Accept meetings with all three but document the conversations carefully so the audit trail is clean', 'Documentation does not cure the underlying preferential treatment. The other bidders did not have the meeting at all — no amount of careful notes makes the access equal.'],
    ],
    'Process uniformity is a fiduciary discipline as much as a procedural one. Pre-marketing access to a subset is the kind of choice that looks fine in the moment and becomes a fairness opinion problem at signing — declining the meetings preserves the seller\'s ability to claim a clean process when the board needs to defend the outcome.'),

  q(4351509, 'Career Skills', CHAPTER, 'Founder-CEO messaging on retirement',
    'Northwind\'s founder-CEO is 64 and retiring at close. The family retains a minority stake and a board seat. How should the CIM and management meetings address the leadership transition without scaring buyers?',
    'Name the transition explicitly in the CIM with the planned timing (CEO transitions 6 months post-close to chairman emeritus), highlight the CFO and COO continuity (both under 50, with succession development underway for 18 months), and structure family minority rollover as alignment evidence — not as an awkward fact to soften',
    [
      ['Downplay the CEO\'s retirement and frame him as "evaluating long-term role" until the buyer is locked in', 'Hiding the retirement until after bid evaluation creates a credibility problem the moment QofE or management interviews surface it. The buyer assumes worse facts than the truth and prices accordingly.'],
      ['Present the CEO as committed to remain for three years post-close to maximize transition stability', 'Misrepresenting the CEO\'s intent is a reps-and-warranties problem at signing and a litigation risk afterward. The bank cannot author a continuity story the CEO has not committed to in writing.'],
      ['Treat the retirement as a sponsor-only disclosure since strategics often install their own CEO anyway', 'Differential disclosure creates the same level-playing-field exposure as pre-marketing meetings. Retirement timing is a material fact; it belongs in the CIM for every bidder.'],
    ],
    'Founder-transition messaging works when it is explicit, documented, and framed around the continuity that actually exists. The family rollover is alignment evidence; the CFO and COO bench is real; the CEO\'s timing is the seller\'s choice to disclose. Anything that softens or hides those facts becomes the bidder\'s leverage point in second round.'),

  // -------------------------------------------------------------------------
  // LESSONS 3–4 — Management meetings, IOIs, second-round selection (4351510–4351519)
  // Output: management presentation, IOI evaluation matrix, second-round process
  // letter, data room v2, expert calls. Forces the learner to read bidder behavior
  // and structure the second round to maximize cleared price and certainty.
  // -------------------------------------------------------------------------
  q(4351510, 'Career Skills', CHAPTER, 'Management presentation deck structure',
    'You are building the Northwind management presentation deck for second-round bidder meetings. The MD wants it to land as the strongest possible articulation of the business. What is the right structure?',
    'Start with the business overview (who Northwind serves, why it wins), then commercial momentum (customer wins, share gains, bolt-on integration), then financial detail and the working-capital improvement plan, then growth roadmap with credible NTM and 3-year framework — closing with the leadership transition and the family rollover as continuity evidence',
    [
      ['Lead with financial results and EBITDA bridge since that is what sponsors care about most', 'Leading with financials lets bidders anchor on the number before understanding the business — and the EBITDA bridge becomes the entire conversation rather than the business case for the multiple. The order matters because attention is finite in a two-hour meeting.'],
      ['Lead with growth roadmap and NTM forecast to set an optimistic tone', 'Leading with forecast tells bidders the seller is selling the future before they have understood the past. Sophisticated buyers discount forecast-led pitches because the underlying business has not been established.'],
      ['Put working capital only in the appendix because EBITDA multiple, not cash conversion, drives second-round value', 'Working capital will be raised in Q&A regardless; addressing it proactively in the deck signals confidence and pre-empts the bidder building their own less-favorable story. Reactive answers in Q&A always carry less weight.'],
    ],
    'A management deck builds the case in the order a buyer\'s skeptical brain processes it: business first, momentum next, financials third, forecast fourth, continuity last. Skipping or reordering pieces tells the buyer what the seller is uncomfortable with — and that becomes the second-round retrade point.'),

  q(4351511, 'Career Skills', CHAPTER, 'Rehearsing the CEO on customer concentration',
    'The CEO will be asked in every management meeting about the 11% customer (a national electrical contractor). Two rehearsals with the MD have shown the CEO defaulting to a defensive answer ("they have been with us 14 years, no risk"). How should you prepare him?',
    'Script a three-part answer: tenure and contract structure (14-year relationship, 5-year master agreement with auto-renew), the operational depth that makes Northwind hard to switch (integrated EDI, regional warehouse network, named-account service), and the active risk mitigation (account diversification underway in adjacent verticals) — and run two more rehearsals until the CEO delivers it crisply',
    [
      ['Coach the CEO to deflect the concentration question to the CFO who can speak to it more technically', 'Deflecting on the most material risk in the business signals avoidance. Buyers want to hear the CEO articulate the relationship and the mitigation — passing it to the CFO is exactly the move that telegraphs discomfort.'],
      ['Have the CEO acknowledge the risk briefly and pivot to growth in adjacent verticals', 'Brief acknowledgment without substantive answer leaves the buyer to build their own story about the relationship. The pivot to growth is fine after the substance, not instead of it.'],
      ['Prepare a written FAQ but skip live rehearsal — the CEO will sound more natural unrehearsed', 'Unrehearsed CEOs sound improvised on the highest-stakes question of the day. "Natural" is what rehearsal produces; "improvised" is what no rehearsal produces.'],
    ],
    'Management meeting prep is a structured rehearsal discipline, not a polish exercise. The concentration answer is the most-asked question in the room — scripting the substance, running multiple rehearsals, and listening for confidence in delivery is what separates a strong management session from one that becomes a second-round price reduction.'),

  q(4351512, 'Career Skills', CHAPTER, 'Reading IOI quality across 14 responses',
    'Fourteen of the 20 parties submitted IOIs. The range is $580M to $760M. How do you read IOI quality beyond the headline number?',
    'Evaluate each IOI on five dimensions: stated price and structure, named financing source (committed vs to-be-arranged), explicit diligence requirements and timeline, key conditions called out (regulatory, financing, board), and the language quality — a sponsor that articulates a thesis reads as more durable than a generic letter',
    [
      ['Rank the IOIs by headline price and advance the top six', 'Headline-price ranking ignores certainty, structure, and bidder seriousness. The highest IOI may have the weakest financing path; the third-highest may be a strategic with synergy upside the bank has not yet credited. The matrix is the discipline.'],
      ['Discount strategic IOIs by 10% because strategics typically come down in second round', 'Across-the-board discounting by bidder type is too coarse — some strategics are disciplined, others stretch. The right move is to read each letter on its own and grade certainty case by case.'],
      ['Treat all IOIs above the $640M DCF midpoint as serious and ignore the rest', 'A DCF midpoint is one valuation reference point, not a bid-quality cutoff. Some IOIs below the midpoint may still develop into competitive second-round bids — the bank\'s job is to read the trajectory, not gate on a static number.'],
    ],
    'IOI evaluation is multidimensional. The headline number anchors the conversation but the certainty signals — financing source, condition language, thesis articulation — determine which bidders can deliver. Reading those five dimensions is what produces a second-round field that actually converts to a deal.'),

  q(4351513, 'Career Skills', CHAPTER, 'IOI valuation range triangulation',
    'The 14 IOIs cluster: 4 strategics at $700–760M, 4 sponsors at $640–700M, 6 mixed at $580–640M. How should this distribution be read against the football field for the next IC update?',
    'The strategic cluster at $700–760M is consistent with synergy-credited precedents; the sponsor cluster at $640–700M maps cleanly to LBO returns underwriting at current debt markets; the bottom cluster is showing they are unwilling to stretch and will likely fall out — present the bid distribution as confirming the football field rather than driving a new one',
    [
      ['The bid distribution proves the football field overstated value — recommend lowering seller expectations and re-running with a $640M anchor', 'Lowering expectations to the midpoint of the lowest cluster discards the highest-conviction bidders, who are the bidders the seller actually transacts with. The football field describes the range; the IOIs say the strategic ceiling is real.'],
      ['The bid distribution shows sponsors are uncompetitive at this size and the second round should be strategic-only', 'Cutting sponsors at this stage forfeits competitive tension across the second round. Sponsors clustering at $640–700M is still a credible band — and one of them may stretch on rollover or earnout creativity.'],
      ['The bid distribution is too wide to be informative — the football field should be set aside until management meetings produce more signal', 'Setting aside the football field after IOIs land is exactly when it becomes most useful — it explains the bid distribution. IOIs do not invalidate valuation triangulation; they map onto it.'],
    ],
    'IOI distributions confirm or stress-test the football field; they do not replace it. The discipline is reading which bidder cluster maps to which valuation methodology, naming the gap if any cluster surprises, and using the read to inform second-round selection — not to reset the seller\'s expectations every time a number arrives.'),

  q(4351514, 'Career Skills', CHAPTER, 'Down-selecting 14 IOIs to 6 second-rounders',
    'You have to recommend 6 of 14 IOIs to advance. The MD asks for the matrix. Which selection logic actually maximizes cleared price and process certainty?',
    'Advance the 4 strategics in the $700–760M cluster (highest ceiling, real synergies), 2 sponsors with the strongest financing certainty and explicit deal experience in distribution roll-ups — even if one of the advanced sponsors is at $680M rather than $700M, because their certainty matters more than a $20M IOI gap that will move in second round',
    [
      ['Advance the top 6 by headline price regardless of bidder type — the auction is about price discovery', 'Price-only selection mixes high-headline-low-certainty bids into the second round and crowds out strategic depth. Certainty is part of price; ignoring it produces an apparently competitive second round that delivers a less-clearable final bid.'],
      ['Advance 3 strategics and 3 sponsors regardless of bid level to keep balance across bidder type', 'Balance-for-balance discards the read of the IOIs. If the strategic cluster is materially higher and the sponsor cluster has weaker financing, forcing a 3/3 split sacrifices realizable price for symmetry.'],
      ['Advance 8 bidders rather than 6 to maintain maximum tension into final round', 'Eight bidders in a second round dilutes management time, multiplies leak risk, and signals to bidders that the field is not curated. Six is the standard for a reason — it preserves tension without breaking the seller\'s capacity.'],
    ],
    'Down-selection is where the bank converts IOI signal into deal certainty. The matrix weighs price, structure, financing, and thesis articulation; the call is whether to advance a $680M certain bidder over a $700M shaky one. Most of the time the answer is yes — but only if the matrix has surfaced the certainty signal cleanly.'),

  q(4351515, 'Career Skills', CHAPTER, 'Second-round process letter v2',
    'The second-round process letter has to push the 6 advanced bidders into committed final bids. What language and requirements actually convert?',
    'Specify final bid deadline (3 weeks from process letter), required deliverables (markup of the draft definitive agreement, fully committed financing for sponsors, board approval for strategics, equity commitment letter, specifying disclosure schedules), and explicit signal that conditionality will be the differentiator at this stage — not just price',
    [
      ['Require only a final price and structure — the legal markup can come after bidder selection', 'Soliciting price without legal markup means the bid stack cannot be compared on real terms. A bidder who leaves all litigation reps open is offering a different deal than one who accepts them — the markup is the bid.'],
      ['Leave deliverables vague to let bidders surface creativity in how they present their bids', 'Vague second-round letters produce bids that cannot be ranked apples-to-apples. The seller loses the discipline that lets the board make a clean decision — and the bidders sense the disorganization.'],
      ['Specify only price and timing — financing detail and legal markup are post-selection workstreams', 'Treating financing and legal as post-selection means the cleared bid is uncertain. Sponsors without committed financing fall through; strategics without board approval drift. The whole point of second round is to lock those down before selecting.'],
    ],
    'Second-round process letters are where conditionality becomes the language of the bid. The seller is buying certainty as much as price — and the letter has to instruct bidders to put their certainty on the table, in the markup, the financing letter, and the disclosure schedule. Without that instruction, the cleared price is theoretical.'),

  q(4351516, 'Career Skills', CHAPTER, 'Data room build-out for second round',
    'For the Northwind second round you are populating Tier 2 of the data room. Which content set actually enables credible final bids without exposing material that should wait for LOI?',
    'Named customer detail and contract terms for the top 20 customers, SKU-level revenue and margin detail, full 2024 bolt-on diligence file, working-capital model with monthly cash conversion cycle history, employee headcount and compensation by function (not by name), audited financials with footnotes, environmental Phase I reports',
    [
      ['Release everything including individual employment contracts and customer-specific pricing — second-round bidders need to know everything', 'Individual employment contracts and customer-specific pricing are the most sensitive items in the room. Releasing them at second round exposes the most poachable personnel and the most retradeable pricing structures to bidders who may still drop out.'],
      ['Hold back the bolt-on diligence file because it contains advisor opinions and management projections from 2024', 'The bolt-on diligence file is what supports the synergy add-back in the EBITDA bridge. Withholding it forces bidders to discount the adjustment — which is exactly the outcome the seller does not want at this stage.'],
      ['Release only what bidders ask for, on request, to control the disclosure perimeter', 'On-request disclosure produces inconsistent information across bidders and reads as evasive. The Tier 2 release is a uniform delivery to advanced bidders; on-request access creates the level-playing-field problem.'],
    ],
    'Data room population is a tiering and uniformity discipline. Tier 2 release matches the bidder commitment at second round — enough to bid finally, not enough to walk away with the most sensitive operational intelligence. The discipline of releasing the right things to all six bidders at the same time is what holds the auction together.'),

  q(4351517, 'Career Skills', CHAPTER, 'Expert calls and customer references',
    'Two of the second-round sponsors request customer reference calls before submitting final bids. The CEO is uncomfortable because customers do not know Northwind is being sold. How do you structure this?',
    'Frame it as a "strategic review" customer reference (the CEO can credibly say Northwind is evaluating partnership and growth opportunities), curate the 3–4 customers willing to take the call, run them through the CEO before the call so customers are not surprised, and limit each bidder to the same call list so disclosure stays controlled and equitable',
    [
      ['Decline the customer reference requests to protect the confidentiality of the process', 'Refusing customer references at this stage tells sponsors the seller is hiding something — and they will price the assumed worst. The right move is to control the conversation, not refuse it.'],
      ['Let bidders contact customers directly through their own networks since they will do it anyway', 'Direct bidder outreach to customers leaks the process broadly and may reach competitors. Channeling through the bank and the seller is exactly the discipline that keeps confidentiality intact while still permitting reference diligence.'],
      ['Allow customer references for only the highest sponsor and decline the other to manage volume', 'Differential access in second round is the level-playing-field problem repeating itself. Either all advanced bidders get reference access on the same terms, or none of them do.'],
    ],
    'Customer reference calls in a sell-side process are a controlled exercise. The seller and the bank decide which customers, the CEO prepares the customers, and every advanced bidder gets the same access. The discipline lets bidders satisfy diligence without leaking the process — and lets the seller preserve auction tension across the six.'),

  q(4351518, 'Career Skills', CHAPTER, 'Quality of earnings — handling pro-formas',
    'The buyers\' QofE teams are pushing back on $4M of EBITDA adjustments — primarily the bolt-on synergies and a $1.5M "one-time" legal settlement add-back. Management wants to defend all adjustments aggressively. How should you advise?',
    'Defend the bolt-on synergies with the integration timeline and procurement contract evidence — those are documented and credible; concede the legal settlement add-back is partly pattern (a prior $900K settlement in 2022 makes "one-time" hard to sustain) and propose a 50% credit ($750K) with documentation — the partial concession protects the more important adjustments',
    [
      ['Defend all adjustments aggressively and refuse to concede any until QofE produces its own written position', 'Refusing to concede on a weak adjustment burns negotiation capital that the seller needs for the stronger adjustments. The legal-settlement add-back is the one most easily challenged — defending it as hard as the synergies blurs the credibility of both.'],
      ['Concede all $4M of adjustments to demonstrate good faith and accelerate the diligence', 'Wholesale concession of documented adjustments leaves $4M of real EBITDA on the table — at a 9x multiple, that is $36M of enterprise value forfeited. Good-faith negotiation is not unilateral surrender.'],
      ['Defer the discussion to the lawyers and let definitive agreement language resolve it', 'Pushing EBITDA adjustments to the legal drafting phase means the bidder builds its bid on the lower number and the higher number never enters the price. The negotiation has to happen in QofE, while the bid is still being formed.'],
    ],
    'QofE negotiation is a discipline of conceding the weak adjustments to protect the strong ones. The bank\'s read of which adjustments are documented and which are pattern determines where to fight and where to concede — and the partial concession on the legal settlement preserves the bolt-on synergy credit, which is the larger and more durable piece.'),

  q(4351519, 'Career Skills', CHAPTER, 'Reading bidder behavior between rounds',
    'Between IOI and final bid, one of the sponsors goes quiet for 10 days while the others are actively in the data room. The MD asks what to read into it. What is the right interpretation and what do you do?',
    'Quiet sponsors between rounds usually means internal IC reservations, financing market changes, or competing capital allocation — the right move is a direct call from the MD to the sponsor partner to surface the issue without applying pressure, since the seller needs to know whether to plan around a drop-out or to address whatever concern is forming',
    [
      ['Treat ten days of no data-room activity as proof the sponsor\'s IC has rejected the deal', 'Assuming a drop-out before confirming closes a real bidder. The cost of the call is low; the cost of losing a $700M bidder over uninformed assumption is high.'],
      ['Apply pressure by setting a hard deliverable deadline to force the sponsor to engage or fall out', 'Pressure without diagnosis can accelerate a drop-out that a conversation would have prevented. The point of the call is to understand the issue, not to force a decision before the issue is known.'],
      ['Tell the CEO that one sponsor has gone quiet and let him decide whether to make personal outreach', 'CEO outreach to one bidder in mid-process creates the level-playing-field problem and crosses the discipline that the bank manages communications. The MD-to-partner call is the right channel.'],
    ],
    'Reading bidder behavior between rounds is a deal-craft skill. Silence usually means something the bidder has not yet decided to articulate — and the bank\'s job is to surface the issue early enough to address it or to plan around it. The call is the move; assumption and pressure are both ways of losing information.'),

  // -------------------------------------------------------------------------
  // LESSONS 5–6 — Bid evaluation, valuation triangulation, recommendation (4351520–4351529)
  // Output: bid stack, DCF/comps/LBO triangulation, synergy crediting, board
  // recommendation. Forces the learner to integrate valuation methodology with
  // bid mechanics and produce a recommendation the board can actually act on.
  // -------------------------------------------------------------------------
  q(4351520, 'Career Skills', CHAPTER, 'Final bids — apples-to-apples normalization',
    'Final bids arrive. Headline numbers: Strategic A $750M cash, Strategic B $735M (90% cash, 10% acquirer stock), Sponsor C $760M (cash with financing commitment), Sponsor D $745M (cash with 5% management rollover at sponsor pricing). How do you normalize?',
    'Build a normalized table: headline price, cash-equivalent value (mark Strategic B\'s stock at current trading minus a discount for restriction; mark Sponsor D\'s rollover at the same multiple it implies for the rest of the equity), conditionality (financing risk, antitrust risk, board risk), and time-to-close — present cleared price ranking, not headline ranking',
    [
      ['Rank by headline price: Sponsor C ($760M) wins, then Strategic A ($750M), then Sponsor D ($745M), then Strategic B ($735M)', 'Headline ranking ignores that Strategic B\'s stock has restrictions and Sponsor D\'s rollover has its own value implication. The seller\'s cleared cash is what matters; headline price does not translate one-to-one to cleared cash across these four.'],
      ['Discount any stock or rollover component to zero because the seller wants cash certainty', 'Zeroing the non-cash component overstates the gap. Strategic B\'s stock has real value (just discounted for restriction); Sponsor D\'s rollover demonstrates alignment and has a quantifiable value at the deal multiple. Zero is wrong; discount is right.'],
      ['Normalize all bids to a 5-year hold IRR for the seller — that is the cleanest comparison', 'IRR-to-seller is not how an exiting seller evaluates an offer. The framework is cleared cash at close, plus the value of any non-cash component, plus the conditionality discount. IRR is a sponsor metric, not a seller metric.'],
    ],
    'Bid normalization is the load-bearing analysis at this stage. Cash equivalent, conditionality, and time-to-close are the three axes that turn headline ranking into cleared-price ranking — and the board makes its decision off the cleared-price table, not the headline. Skipping the normalization is the move that produces "we picked the wrong bid" post-mortems.'),

  q(4351521, 'Career Skills', CHAPTER, 'DCF triangulation for Northwind',
    'Your DCF on Northwind produces a value range of $640–760M based on a NTM EBITDA of $58M growing to $72M over 5 years, exit multiple 9.0–10.5x, WACC 9.5–10.5%. The bid range is $735–760M. How should the DCF inform the board recommendation?',
    'Frame the DCF range as the intrinsic-value reference point — bids at $735–760M are at the top of the DCF range, which means the auction has cleared near intrinsic value plus some strategic premium; the recommendation should note that further price-pushing risks bidder walkaway since the field is already above the DCF midpoint',
    [
      ['Recalibrate the DCF upward to support pushing for a higher final bid — exit multiple to 11.0x', 'Recalibrating the DCF to chase the bid is exactly the discipline failure that erodes the football field\'s credibility. The DCF describes intrinsic value with defensible inputs; moving it to justify pushing harder makes it a marketing tool, not an analysis tool.'],
      ['Drop the DCF from the recommendation since bids are higher than the midpoint anyway', 'Dropping the DCF when it produces a useful read is wasteful — it tells the board that the bids are at or above intrinsic, which informs how hard to push and how much to risk a walkaway.'],
      ['Use only the high end of the DCF ($760M) to anchor the board\'s expectation of acceptable bids', 'Anchoring on the high end of the DCF range without showing the full range hides the analyst\'s judgment. The board needs to see the band and the mid; otherwise the recommendation looks like advocacy rather than analysis.'],
    ],
    'DCF triangulation at the recommendation stage is about calibrating push versus close. Bids above the DCF midpoint signal the auction is approaching intrinsic ceiling; pushing further risks walkaway. Bids below would signal the seller has more room. The DCF is the analyst\'s read of how much room remains — the recommendation lives off that read.'),

  q(4351522, 'Career Skills', CHAPTER, 'Trading comps selection',
    'Which trading-comp set actually informs Northwind\'s valuation, and how should outliers be handled?',
    'Use specialty industrial distributors in the $300M–$1B revenue band trading on US exchanges: 5–6 names with comparable margin and growth profiles; show median, mean, and the full range (not just the median), and call out which comp is the closest match by product mix and geography — comp valuation is a range exercise, not a single multiple',
    [
      ['Use the full distribution index (50+ industrial distributors of any size) and apply the index median multiple', 'A broad index of any size and any sub-vertical washes out the specialty-distributor signal. Northwind\'s multiple should reflect its sub-vertical and size, not the cap-weighted average of dissimilar companies.'],
      ['Use only the closest single comp and apply its current multiple directly', 'Single-comp valuation is fragile — a market dislocation or one-name idiosyncrasy distorts the read. The point of comps is the range; reducing to one name removes the discipline.'],
      ['Exclude trading comps because public-market multiples do not apply to private mid-market deals', 'Trading comps inform private valuation through control-premium and illiquidity-discount adjustments, both of which are standard. Excluding the methodology removes a market-anchored reference the board uses to triangulate.'],
    ],
    'Trading-comp selection is a curation discipline. Right size band, right sub-vertical, named outliers — the analyst\'s judgment is which 5–6 names actually represent the asset and how to adjust for the differences. A clean comp set with explicit explanation is more useful than a wide index with a median pulled from a screener.'),

  q(4351523, 'Career Skills', CHAPTER, 'Precedent transactions — distribution cycle',
    'Precedent transactions in industrial distribution show a wide range over the last 5 years: 8x–13x EBITDA. The 2022–2023 deals clustered at 11–13x; 2024–2025 deals at 8.5–10x as financing markets tightened. How should you present this range for Northwind?',
    'Anchor on 2024–2025 precedents (8.5–10x) as the realistic current-cycle band, show the 2022–2023 cluster as historical context with a footnote on the financing-market shift, and call out 1–2 closest-fit precedents by size and geography — the recommendation lives off the current-cycle range, not the cycle-average',
    [
      ['Use the full 5-year median (10.5x) since that represents through-cycle valuation', 'Through-cycle median is misleading when the financing market has shifted materially. The bidders are underwriting today\'s financing, not the average of the last 5 years — the precedent range that matters is the current cycle.'],
      ['Use only the 2022–2023 cluster (11–13x) since those are the most reflective of strong-market specialty-distribution pricing', 'Citing peak-cycle precedents in a non-peak market is exactly what produces seller expectations that bidders cannot meet. The precedent range has to reflect the market the deal is actually in.'],
      ['Exclude precedents and rely on trading comps and DCF only since each precedent is unique', 'Each precedent is unique but the cluster is informative — and bidders use precedents to justify their bids. Excluding the methodology removes a reference the seller and the bidders are both using anyway.'],
    ],
    'Precedent transactions are a cycle-aware methodology. The analyst\'s job is to identify the relevant cycle, anchor the range on it, and show historical context as context rather than as the answer. Cycle-blindness is the most common mistake on the precedents page — and it is the one that makes the football field look credible to a sophisticated bidder.'),

  q(4351524, 'Career Skills', CHAPTER, 'LBO triangulation — sponsor ceiling',
    'Running an LBO model on Northwind at $750M equity value, 5.5x net leverage, current cost of debt, 5-year hold: the model produces ~22% IRR with conservative exit assumptions (9.5x exit multiple). What does this tell you about the sponsor ceiling?',
    'A 22% IRR at $750M is consistent with where the sponsor bids cleared — sponsors typically underwrite to 20–25% returns, and the current bid range maps to that band; if a sponsor were to stretch to $780M+ they would underwrite below 20%, which is below their fund\'s typical hurdle and unlikely without unusual conviction',
    [
      ['The LBO returns suggest sponsors have meaningful room to stretch — push them to $800M+ to capture more value', 'Pushing past the LBO ceiling without explicit sponsor concession is how processes lose bidders. The 22% IRR at $750M is already at the lower end of typical sponsor hurdles; another $50M takes the IRR below acceptable for most funds.'],
      ['The LBO model is irrelevant since strategics are the high bidders — sponsors will not set the price', 'The LBO model is the floor that establishes how hard strategics need to bid to win. Without the sponsor floor, the strategic does not feel the pressure that produces the highest cleared price.'],
      ['The 22% IRR proves the deal is mispriced and sponsors should bid materially higher', 'A 22% IRR is roughly at the sponsor hurdle, not above it — the model says the deal is fairly priced for the sponsor, not mispriced. Misreading the LBO as cheap is how analysts produce recommendations that overshoot what the market clears.'],
    ],
    'LBO triangulation at the recommendation stage tells the seller how much push is left in the sponsor lane. Modeling the buyer\'s economics is how the bank knows when it is asking for the last dollar — and when it is asking for the dollar that loses the bidder. Reading the IRR against fund hurdles is the discipline that produces the right recommendation.'),

  q(4351525, 'Career Skills', CHAPTER, 'Synergy crediting in strategic bids',
    'Strategic A claims their $750M bid reflects $8M of run-rate cost synergies (procurement, branch consolidation, back-office). Their financial buyer floor would be ~$680M. How should the recommendation treat the synergy credit?',
    'Acknowledge the $8M synergy in the rationale but note that strategics typically share 30–50% of synergies with sellers (the rest is their return justification); a $70M premium over the financial floor is consistent with ~50% synergy sharing — and that means the strategic may have a small amount of additional room if their internal IC accepts a tighter share',
    [
      ['Treat the full $8M synergy as the seller\'s — push the strategic to $750M + 8.5x × $8M = $818M', 'Asking the strategic to give 100% of synergies to the seller is the move that loses the strategic. Synergies are partly the strategic\'s return on integration risk; the seller captures the share that competitive tension produces, not the full amount.'],
      ['Treat the strategic premium as buyer-specific goodwill rather than modelable synergy value', 'Ignoring synergies treats the strategic\'s $70M premium as unexplained, which means the recommendation cannot tell the board why the strategic is paying more than the sponsor. Synergies are the explanation — they have to be in the document.'],
      ['Discount the strategic\'s claimed synergies by 50% to be conservative on integration risk', 'Discounting the strategic\'s own claimed synergies is wrong — the strategic has done its own integration math and is using its own conviction in the bid. The seller does not need to discount the strategic\'s claim; the seller needs to read where the share split is landing.'],
    ],
    'Synergy crediting in strategic bids is a sharing exercise. The bank\'s job is to read how much of the synergy the strategic is willing to give the seller versus retain — and a ~50% share is the typical band that competitive tension produces. Asking for 100% loses the bidder; asking for 30% leaves money on the table. The middle is where the deal clears.'),

  q(4351526, 'Career Skills', CHAPTER, 'Bid stack ranking — cash, rollover, earnout',
    'Bid stack: Strategic A $750M all-cash, Sponsor C $760M cash with financing commitment, Sponsor D $745M cash + 5% rollover at sponsor pricing, Strategic B $735M cash + stock. Family minority is rolling 8% in any sponsor deal. Which bid actually delivers the highest cleared value to the exiting seller?',
    'Sponsor C at $760M cash with committed financing delivers the highest cleared cash, subject to financing-condition language; Strategic A at $750M is the highest certainty all-cash; Sponsor D\'s rollover and Strategic B\'s stock have real but discounted value — the cleared-cash ranking is Sponsor C > Strategic A > Sponsor D > Strategic B, with certainty inverting some of that order',
    [
      ['Strategic A wins because $750M all-cash is the highest cash with no conditionality', 'Sponsor C\'s $760M with a financing commitment is higher headline cash, and a committed financing letter is not "no certainty" — it is a different certainty profile. The ranking has to weigh both axes; Strategic A is high-certainty but not high-cash.'],
      ['Sponsor D wins because the rollover demonstrates the strongest alignment with management', 'Alignment is not the seller\'s objective at exit — cleared cash is. Sponsor D\'s $745M with rollover is lower-cash than Sponsor C\'s $760M; the rollover is value but discounted for liquidity and risk.'],
      ['Strategic B wins because the stock component provides upside participation in the buyer', 'Stock upside is real but the exiting seller may not value it the same way as cash. Strategic B\'s headline is also the lowest — even with full credit for the stock, the cleared value lags Sponsor C and Strategic A.'],
    ],
    'Bid stack ranking is two-dimensional: cleared cash and certainty. The exiting seller wants to maximize the first subject to acceptable risk on the second — and the bank\'s recommendation has to show both axes so the board can choose where it sits on the tradeoff. One-axis ranking is the move that produces a board surprise three months into a failed close.'),

  q(4351527, 'Career Skills', CHAPTER, 'Reverse termination fee asymmetry',
    'Sponsor C\'s draft definitive agreement has a reverse termination fee of 2% if financing fails. Strategic A has no reverse termination fee — they are signing without a financing condition and would be liable for specific performance. How should the board weigh this?',
    'Strategic A\'s no-financing-condition structure is stronger by an order of magnitude than Sponsor C\'s 2% reverse termination fee — specific performance with full obligation to close (subject only to regulatory) versus a $15M walk option is a materially different deal; the recommendation should value Strategic A\'s certainty premium at well above the $10M headline gap',
    [
      ['The 2% reverse fee is a standard sponsor protection and not a meaningful certainty difference', 'A 2% reverse fee gives the sponsor a $15M walk option on a $760M deal. That is a real option that prices the rest of the certainty — calling it "standard" is exactly the kind of analytical shortcut that produces a failed close.'],
      ['The reverse fee should be renegotiated to 6% but otherwise the bids are comparable', 'A 6% reverse fee is meaningfully better than 2% but still less certain than no financing condition. The structural difference between "specific performance" and "pay a fee and walk" is not closed by tuning the fee — they are different deals.'],
      ['Strategic A\'s lack of reverse fee is irrelevant since strategics rarely walk anyway', 'Frequency of walk is not the same as the legal exposure. The bid that requires the buyer to close (subject to regulatory only) is a different bid than one that lets the buyer walk for a fee — even if the empirical rate of walking is low.'],
    ],
    'Reverse termination fee asymmetry is where the gap between headline price and cleared price most often hides. A 2% reverse fee is a financing-option price; specific performance is no option at all. The recommendation has to value the structural difference — and a $10M headline gap can easily be worth $30–50M of certainty premium in the right direction.'),

  q(4351528, 'Career Skills', CHAPTER, 'Recommendation under split board preferences',
    'The Northwind board has the founder-CEO, two family directors, and three outside directors. The CEO and family want the strategic ("better cultural fit, customer continuity"); the outside directors want the sponsor ("higher price, family rollover preserves upside"). What is the right form of the recommendation?',
    'Present the analysis in the form the board can actually act on: name the cleared-price ranking, the certainty ranking, the cultural-continuity considerations, and the family-alignment considerations — then recommend Strategic A at $750M if certainty is the board\'s priority, Sponsor C at $760M if cleared price is, and identify the lever (push Sponsor C\'s reverse fee from 2% to 5% or specific performance) that would resolve the gap',
    [
      ['Recommend the sponsor unconditionally because the headline price is higher and the board\'s job is to maximize price', 'The board\'s fiduciary duty is to a defensible decision, not a one-axis ranking. Recommending unconditionally on price ignores the certainty axis the board actually has to weigh — and the recommendation does not equip the board to defend it.'],
      ['Recommend the strategic unconditionally because cultural fit and continuity matter most for the founder family', 'A recommendation that defers to cultural fit over $10M of cleared cash is the move that produces a Revlon claim if any board member dissents. The recommendation has to lay out the framework, not pick a side based on family preference.'],
      ['Recommend reopening the auction to a third round to let both bidders sharpen', 'A third round at this stage signals indecision and risks both bidders dropping out. The board hired the bank to recommend; reopening is the failure mode of recommendation, not its execution.'],
    ],
    'A board recommendation under split preferences is not a tiebreaker — it is a framework. The bank lays out the axes the board has to weigh, identifies the lever that would resolve them (the reverse fee push on Sponsor C), and presents the recommendation in a form that lets the board reach a defensible decision either way. Picking a side without the framework is exactly what gets banks named in fiduciary litigation.'),

  q(4351529, 'Career Skills', CHAPTER, 'Family minority rollover mechanics',
    'The family wants to roll 8% of its stake into the sponsor deal at the sponsor\'s pricing (~5x EBITDA equity value), preserving a board seat and tag-along rights. What does the bank need to structure into the LOI and the definitive agreement?',
    'LOI specifies the rollover percentage, pricing methodology (sponsor\'s equity valuation), board representation (one seat with information rights), and tag-along on sponsor exits; definitive agreement includes shareholders agreement with drag-along (sponsor can drag at sponsor exit), tag-along, customary minority protections, and an exit-mechanism waterfall that does not subordinate the family below the sponsor at exit',
    [
      ['Roll the family equity at the headline deal valuation rather than the sponsor equity valuation', 'Rolling at headline deal valuation (which includes leverage) means the family pays back the leverage on the rolled stake — the rollover loses meaningful value. The convention is to roll at the sponsor\'s equity check valuation, not the enterprise valuation.'],
      ['Use only tag-along rights and the board seat, assuming statutory minority rights cover the rest', 'State-law minority protections are weaker than what a private-equity rollover requires — without explicit tag, drag, information, and waterfall language, the family is exposed to exit terms that disadvantage them relative to the sponsor.'],
      ['Roll the family equity but waive the board seat to keep the sponsor\'s governance clean', 'Waiving the board seat removes the family\'s informational and oversight position — and the family is the seller, not a passive minority. The board seat is the alignment the seller is receiving in exchange for the rollover; surrendering it is asymmetric.'],
    ],
    'Family rollover structuring is a long list of small terms that compound. Equity valuation, board seat, tag, drag, information rights, exit waterfall — each is a place where a hurried LOI loses the family value at the next exit. The bank\'s job is to surface these terms in the LOI before they become a redrafting fight in the definitive agreement.'),

  // -------------------------------------------------------------------------
  // LESSONS 7–8 — LOI, exclusivity, definitive agreement, fairness (4351530–4351539)
  // Output: LOI markup, exclusivity term, definitive agreement workstream, R&W
  // insurance, MAE language, indemnification, fairness opinion. Forces the
  // learner to navigate the legal workstream that locks the deal in.
  // -------------------------------------------------------------------------
  q(4351530, 'Career Skills', CHAPTER, 'LOI economic vs non-economic terms',
    'Strategic A has won and offered to sign an LOI at $750M. The CEO wants to sign quickly to lock the price. Which non-economic LOI terms actually matter as much as the headline price?',
    'Exclusivity period and break conditions, deposit or reverse termination structure if any, scope of confidentiality during exclusivity, treatment of the family rollover (if it applies), employment terms for the CEO and key executives, treatment of in-flight bolt-on pipeline, and timeline to definitive agreement — these are the levers that will get retraded if the LOI is loose',
    [
      ['Focus on the headline price and structure; non-economic terms can be negotiated into the definitive agreement', 'Non-economic terms negotiated into the definitive agreement are negotiated under exclusivity — when the seller has no leverage. The LOI is the only moment the seller has competing bidders behind them; loose non-economic terms get retraded once exclusivity is signed.'],
      ['Sign quickly on the headline and use the 60-day definitive agreement period to negotiate everything else', 'Sixty days under exclusivity with no other bidders is a structural disadvantage. The terms the seller wanted at LOI become the buyer\'s asks; the seller\'s "lock in the price" instinct works against them.'],
      ['Negotiate exclusivity to be the only non-economic term in the LOI to keep the document simple', 'A one-clause LOI is a buyer\'s LOI. Every term the seller leaves out is a term the buyer will introduce at the definitive agreement, when leverage has shifted. The LOI is loaded on purpose to preserve leverage.'],
    ],
    'LOI discipline is about loading the document while leverage still exists. Exclusivity, scope, family rollover, executive terms, bolt-on treatment — each term negotiated at LOI is a term that does not get retraded under exclusivity. "Sign quickly" is the seller\'s instinct that costs the most on the back side.'),

  q(4351531, 'Career Skills', CHAPTER, 'Exclusivity period length',
    'Strategic A is asking for 90 days of exclusivity to negotiate the definitive agreement, conduct confirmatory diligence, and complete regulatory pre-filing. What length actually balances buyer needs with seller leverage preservation?',
    '45 days with an automatic 30-day extension if the parties are actively negotiating in good faith and confirmatory diligence is progressing — gates the extension on milestones (definitive agreement at 80% completion, HSR filing prepared) and preserves the seller\'s exit if the buyer slow-walks',
    [
      ['Accept 90 days because confirmatory diligence and HSR pre-filing realistically take that long', '90-day exclusivity with no milestone gating gives the buyer the option to slow-walk through the period and retrade at day 80. The seller is locked out of the market with no leverage and no recourse — the milestones are what protect against drift.'],
      ['Negotiate 30 days with no extension to force urgency on the buyer', '30 days without extension is too tight for a $750M deal — HSR filing alone often requires more than 30 days of pre-filing preparation. Pushing this hard often produces a "we cannot commit to that timeline" response that loses the bidder.'],
      ['Accept 90 days but only if the buyer pays a deposit refundable on closing', 'A deposit changes the economics but does not solve the leverage problem. The seller is still off-market for 90 days; the deposit is at best a partial compensation, and most strategics will not pay one.'],
    ],
    'Exclusivity is a leverage-management exercise. The seller is paying with optionality — every day under exclusivity is a day the seller cannot run a competing process. Length plus milestone gating is the discipline; pure length without gating is the structure that produces the post-exclusivity retrade.'),

  q(4351532, 'Career Skills', CHAPTER, 'Confidentiality during exclusivity',
    'During exclusivity, leaks would damage the seller materially — customers and employees do not know the company is selling. What confidentiality discipline does the LOI need to specify?',
    'Mutual confidentiality covering the fact of the deal and the terms, with named permitted disclosures (advisors, lenders, regulators, board members under their own confidentiality), a specified communication protocol if any disclosure becomes required (joint statement, advance notice), and an enhanced remedy (injunctive relief, no need to prove damages) for breach',
    [
      ['Rely on the original master NDA which already covers confidentiality through the process', 'The master NDA covers process information but not the fact of an executed LOI and the impending transaction. LOI-specific confidentiality is a different scope — it has to cover the deal itself, not just the data room.'],
      ['Use monetary damages as the sole remedy because any leaked deal terms can be quantified after breach', 'Damages are exactly the reason injunctive relief is the right remedy — proving dollar damages from a customer loss is hard, but injunctive relief lets the seller stop the disclosure mid-flight. Skipping the remedy weakens the deterrent.'],
      ['Limit confidentiality to executive-level disclosures and let lenders and advisors share on need-to-know without specifics', 'Lender and advisor disclosure is exactly where the leaks happen most often. The LOI has to name them as permitted recipients but bind them through their own confidentiality obligations — not waive the discipline at the channel that carries the most volume.'],
    ],
    'LOI confidentiality is purpose-built for the exclusivity window. The master NDA does not cover the deal itself; the LOI confidentiality does. Permitted disclosures, communication protocol, and injunctive remedy are the three pieces — and the discipline is what protects the seller through the 45–75 days when leak risk is highest.'),

  q(4351533, 'Career Skills', CHAPTER, 'Definitive agreement workstream sequencing',
    'You have 45 days under exclusivity to deliver a signed definitive agreement. The buyer\'s counsel wants to start with reps and warranties; the seller\'s counsel wants to start with conditions and indemnification. What is the right sequencing?',
    'Parallel workstreams: reps and warranties (often the longest), conditions precedent, indemnification structure, ancillary agreements (employment, transition services, family rollover documents) — week 1 issue list and structural agreement on each, weeks 2–4 drafting and counter-drafting, week 5 issue resolution, week 6 final markup and signing prep',
    [
      ['Sequential: start with reps and warranties since they are the longest, then conditions, then indemnification', 'Sequential sequencing of 45-day workstreams is how deals miss exclusivity expiration. Each workstream has its own counterparty bandwidth — drafting them in parallel is how a $750M deal closes on time.'],
      ['Defer ancillary agreements (employment, transition services) until after definitive agreement signing to keep the main document moving', 'Ancillary agreements are often economic — employment terms affect the CEO\'s consideration, transition services affect the buyer\'s integration cost. Deferring them past signing leaves them open to retrade and creates execution surprises.'],
      ['Let the buyer\'s counsel drive the workstream order since they are the document custodian on the main agreement', 'Letting the buyer drive sequencing is the move that produces a buyer-favorable definitive agreement. The seller\'s counsel and the bank coordinate the workstreams; the buyer drafts but does not set the order.'],
    ],
    'Definitive agreement workstream sequencing is a project management discipline. Parallel tracks, weekly issue lists, named owners, and milestone gates are the structure that delivers a signed document inside exclusivity. Sequential or buyer-driven workstreams are how deals slip — and slippage under exclusivity is when retrades happen.'),

  q(4351534, 'Career Skills', CHAPTER, 'Reps and warranties scope for Northwind',
    'The buyer is pushing for fundamental reps (organization, capitalization, authority) plus operating reps (financial statements, no undisclosed liabilities, customer contracts, environmental, IP, employment, taxes). For Northwind specifically, which reps need the most scrutiny in scope?',
    'Customer contract reps (top 20 customers, change-of-control language), environmental reps (industrial distribution sites — historical and current), employee benefits and union reps (legacy plans and any organized facilities), and the operating reps tied to the 2024 bolt-on (representation that integration is complete, no undisclosed liabilities at the acquired entity) — these are the reps with the most Northwind-specific risk',
    [
      ['Accept broad rep language across the board and let R&W insurance carry the risk', 'R&W insurance has retentions and exclusions — broad rep language without R&W coverage on the highest-risk items is exposed. The discipline is to scope the reps to what is truly knowable and use insurance for the residual.'],
      ['Resist all rep language beyond the fundamentals and offer indemnification only', 'No-rep deals are not standard in mid-market — buyers will not accept them, and resisting reps on this scale signals seller fragility. The right move is to negotiate the scope, not the existence.'],
      ['Use the buyer\'s standard rep template without modifications since template reps are pre-negotiated market', 'Template reps drift toward buyer-favorable across the market. Customer contract scope, environmental coverage period, and bolt-on language all need Northwind-specific negotiation — accepting templates surrenders the asset-specific risk allocation.'],
    ],
    'Reps and warranties scope is asset-specific. Northwind\'s customer concentration, environmental footprint, legacy benefits, and bolt-on integration are the four areas where rep language has to be calibrated to the actual risk. Broad acceptance or blanket resistance both miss the discipline — scope negotiation is the bank-counsel-client work of the next four weeks.'),

  q(4351535, 'Career Skills', CHAPTER, 'R&W insurance — retention and policy limit',
    'The deal will use R&W insurance to backstop the rep package. The market for $750M deals is policy limit ~10% of EV ($75M), retention 0.5% of EV ($3.75M) dropping to 0.25% after 12 months. How should the bank structure the program for Northwind?',
    'Place a $75M policy with a 0.5% / 0.25% retention structure as primary, evaluate whether to add an excess layer above $75M for the highest-risk reps (environmental, customer contracts), and split the retention 50/50 between seller and buyer below the retention drop — the structure preserves seller recovery for the highest exposures while keeping premium reasonable',
    [
      ['Use a smaller policy ($40M, ~5% of EV) to keep premium low — the retention is the meaningful piece of the program anyway', 'Underwriting at 5% of EV leaves the high-tail exposures uncovered. The premium savings ($300–500K) are small relative to a $40M uncovered loss event on, say, an environmental claim — sizing should reflect risk, not premium minimization.'],
      ['Replace the R&W policy with a 10% escrow matching the operating-rep cap', 'Indemnification-only structures require a large escrow (typically 10%+ of EV) tied up for 12–24 months. R&W insurance frees the seller\'s proceeds and is now market standard above $250M — skipping it is non-market.'],
      ['Place the full retention on the seller to lower premium and accept the higher seller exposure', 'Full-seller retention undermines the alignment R&W insurance is designed to produce — the buyer has no skin in the game below retention and is incentivized to find claims. The 50/50 split below retention is the market structure for a reason.'],
    ],
    'R&W insurance structuring is a calibration exercise. Policy limit sizes the high tail; retention sizes the low-frequency claims; the split structures incentive alignment. The bank\'s job is to read the asset-specific risk profile and size each layer accordingly — not to default to a template that under- or over-insures the actual exposure.'),

  q(4351536, 'Career Skills', CHAPTER, 'Material adverse effect carve-outs',
    'The MAE clause in the definitive agreement is being negotiated. The buyer wants a broad MAE; the seller wants narrow MAE with extensive carve-outs. For Northwind, which carve-outs actually matter?',
    'Carve out: general economic conditions, industry-wide conditions, financial market changes, changes in law or regulation, acts of war or terrorism, weather events, and pandemics — with disproportionate-impact language (MAE only if Northwind is impacted disproportionately compared to comparable companies) for the industry and economic carve-outs',
    [
      ['Push for the broadest possible carve-outs with no disproportionate-impact language', 'Carve-outs without disproportionate-impact language are too broad — a true Northwind-specific catastrophe (a fire at the main warehouse, a major customer bankruptcy) would not be MAE if a general economic carve-out covers it. The disproportionate-impact qualifier is what preserves the buyer\'s legitimate MAE protection while protecting the seller from being blamed for the macro.'],
      ['Accept a broad MAE without carve-outs in exchange for a higher purchase price', 'Broad MAE without carve-outs trades a $5–10M price increase for a $750M deal certainty risk. The MAE clause is the buyer\'s most powerful walk option — pricing it via a small headline increase is a structurally bad trade for the seller.'],
      ['Resist the MAE clause entirely since the deal is signed and the buyer should have no walk option', 'Sale agreements between signing and closing almost always include an MAE clause — refusing one is non-market and will not survive negotiation. The discipline is scoping the clause, not eliminating it.'],
    ],
    'MAE clause craft is the most-litigated language in M&A. The carve-outs allocate macro risk to the buyer (where it belongs) and asset-specific risk to the seller (where it belongs); the disproportionate-impact qualifier on the macro carve-outs preserves the buyer\'s legitimate protection. Getting the balance right is what makes the MAE clause a real walk gate rather than a structurally unfair option.'),

  q(4351537, 'Career Skills', CHAPTER, 'Indemnification caps and survival',
    'For the Northwind deal, indemnification is structured: fundamental reps survive indefinitely with no cap, operating reps survive 18 months with cap of 10% of EV ($75M), special indemnities (taxes, environmental) survive 5 years uncapped. With R&W insurance in place, what is the right calibration?',
    'With R&W insurance, the operating rep cap can drop to the policy retention ($3.75M) — buyer recovers above retention from the insurance, not from the seller; the special indemnities for taxes and environmental remain seller-backed because R&W policies typically exclude them; fundamental reps remain uncapped as standard',
    [
      ['Keep the operating rep cap at 10% of EV ($75M) regardless of R&W insurance — the seller should backstop the insurance', 'Dual coverage at 10% of EV is non-market in current R&W structures. The whole point of R&W is to free the seller\'s proceeds; capping the seller at the policy limit (effectively duplicating insurance) defeats the purpose.'],
      ['Eliminate seller indemnification entirely since R&W insurance covers everything', 'R&W insurance does not cover everything — taxes, environmental, and certain special items are typically excluded. Eliminating seller indemnification creates uncovered exposures for the buyer and will not survive negotiation.'],
      ['Extend operating rep survival to 5 years to match the special indemnities', 'A 5-year operating rep survival period is non-market — 18 months is standard, with R&W extending the practical recovery window for the buyer. Extending survival on operating reps creates seller exposure that buyers do not typically require.'],
    ],
    'Indemnification calibration with R&W insurance is a layered structure. Fundamental reps uncapped, operating reps capped at policy retention, special indemnities at separate caps and longer survival. The discipline is matching each rep category to the layer that actually backs it — and not duplicating coverage between insurance and seller indemnity.'),

  q(4351538, 'Career Skills', CHAPTER, 'Fairness opinion scope and audience',
    'The Northwind board has asked for a fairness opinion to support its decision. The bank is also the sell-side advisor receiving a success fee on closing. What does the fairness opinion engagement need to specify and address?',
    'A separate engagement letter for the fairness opinion (often from a different team within the bank or a separate firm), explicit conflict disclosure of the success fee, opinion scope limited to "fair from a financial point of view" to the company\'s shareholders, methodology disclosure (DCF, comps, precedents) with explicit valuation ranges, and explicit statement of what the opinion does not address (strategic merit, post-closing performance, individual shareholder tax)',
    [
      ['Use the auction bid stack as the fairness record without commissioning a separate opinion', 'Auction-as-fairness is a common shortcut but does not substitute for the formal opinion the board\'s fiduciary record needs. The opinion is the document the board produces when challenged — and the auction outcome is one input to it, not a replacement for it.'],
      ['Provide the fairness opinion without a separate engagement letter since the M&A engagement covers it', 'Fairness opinions almost always require a separate engagement to specify scope, fees independent of deal closing (so the opinion is not contingent on the recommendation), and conflict disclosures. Folding it into the M&A engagement compromises the independence the opinion needs to carry weight.'],
      ['Make the fairness opinion address strategic merit and post-closing fit to be more useful to the board', 'Fairness opinions are scoped to financial fairness intentionally — broadening to strategic merit puts the opinion in territory the analytics cannot support and exposes the bank to claims it could not defend. The narrow scope is the discipline.'],
    ],
    'Fairness opinions are a fiduciary document, not a marketing one. The scope is narrow, the engagement is separate, the conflicts are disclosed, and the opinion is what the board points to when its decision is challenged. Treating it as a checkbox or broadening the scope are both ways the opinion fails its purpose.'),

  q(4351539, 'Career Skills', CHAPTER, 'Specific performance vs reverse break fee',
    'The strategic\'s definitive agreement provides for specific performance (buyer must close, subject only to regulatory) with no reverse break fee. The sponsor\'s draft provides for a 2% reverse break fee with financing condition. The seller asks the board: which remedy structure actually delivers the deal?',
    'Specific performance is materially stronger — it forces close (or court-ordered specific performance) versus a 2% walk option, and courts have enforced it in M&A; the sponsor\'s reverse break fee is a priced walk, which is a real option not a binding commitment. The seller\'s certainty is fundamentally different across the two structures',
    [
      ['Specific performance is unenforceable in practice — courts rarely order an unwilling buyer to close', 'Courts have ordered specific performance in M&A more than the conventional wisdom suggests, particularly when damages are inadequate and the buyer is solvent. The doctrine is not absolute but it is not toothless either — sophisticated counterparties treat it as binding.'],
      ['The 2% reverse break fee is functionally equivalent to specific performance because no rational sponsor walks for a 2% cost', 'Sponsors do walk for 2% when financing markets shift or when better deployment opportunities emerge — the historical record shows this. Specific performance removes the option; reverse break fee prices it. Treating them as equivalent is the analytical mistake.'],
      ['The two are equally good remedies and the seller should be indifferent between them', 'They are not equally good — specific performance is the strongest seller remedy, and a 2% reverse break fee is a relatively weak one. The board needs to see the gap, not be told the structures are interchangeable.'],
    ],
    'Specific performance versus reverse break fee is the most consequential certainty distinction in M&A. The bank\'s job is to translate the legal structure into the cleared-deal probability the board is actually evaluating — and to surface that a $10M headline gap can map to a $50–100M certainty premium when the remedy structure differs this materially.'),

  // -------------------------------------------------------------------------
  // LESSONS 9–10 — Signing, regulatory, closing, post-close, board fiduciary (4351540–4351546)
  // Output: signing-day mechanics, HSR filing, working-capital true-up, closing
  // checklist, post-close handoffs, board observations, lessons file. Closes
  // the deal and turns the experience into reusable craft.
  // -------------------------------------------------------------------------
  q(4351540, 'Career Skills', CHAPTER, 'Signing-day press release and 8-K',
    'The Northwind deal signs Tuesday after market close. The buyer (Strategic A) is public and will need to file an 8-K. The seller is private. What does signing-day coordination actually require?',
    'Coordinate the press release joint statement (drafted by both sides over the prior 5 days, factual and tone-aligned), the buyer\'s 8-K filing within 4 business days (so the next morning after Tuesday close), customer and employee communications scripted for Wednesday morning (CEO speaks to top 20 customers, all-hands within 24 hours), and a press contact protocol for media inquiries',
    [
      ['Let the buyer handle the press release and 8-K since they are the public party and the seller is private', 'The seller has equal stake in the press release tone and factual accuracy — customer and employee perception is shaped by it, and the seller\'s post-close enterprise value depends on continuity. Letting the buyer drive solo is the move that produces a one-sided release.'],
      ['Hold customer and employee communications for two weeks after signing to coordinate with integration planning', 'Two-week delay after a buyer\'s 8-K filing means customers and employees learn from public sources, not from the company. The communication has to lead the news, not trail it.'],
      ['Issue the press release Wednesday morning after the 8-K to let the public filing carry the news first', 'Press release timing typically matches signing announcement — Tuesday after close is the convention. Delaying to Wednesday creates a 12-hour window where the 8-K is public but the seller has not communicated, which is exactly when inaccurate narratives form.'],
    ],
    'Signing-day mechanics are a choreographed rollout. Press release, 8-K, customer calls, all-hands, media protocol — each piece has a timing and an owner, and the bank\'s job is to make sure the seller is not surprised by the buyer\'s public disclosure rhythm. The 24 hours after signing shape the next six months of customer and employee perception.'),

  q(4351541, 'Career Skills', CHAPTER, 'HSR filing strategy and second-request risk',
    'Strategic A is the largest competitor of Northwind in 3 of the Northeast metros. HSR filing is required. The risk of a second request is real — the deal value clears reporting thresholds. How do you structure the regulatory workstream?',
    'Engage antitrust counsel pre-signing to map overlap markets and develop the substantive position, file HSR within 10 business days of signing with a thorough Item 4(c) submission designed to forestall a second request, pre-arrange divestiture commitments if needed (specific branches in overlap metros), and condition the closing on regulatory clearance with an outside date of 6 months',
    [
      ['File the standard HSR form without overlap analysis since the agencies will request what they need', 'Standard filings without proactive overlap analysis maximize the probability of a second request — which can extend the regulatory timeline by 6–12 months. Pre-filing antitrust work is what shortens the timeline; reactive filing is what extends it.'],
      ['Wait to identify branch divestitures until the agency defines the overlap markets', 'Pre-arranged divestitures with a credible divestiture buyer in the bag are how mid-market overlap deals clear without second requests. Reactive divestiture negotiation under second-request pressure is materially weaker leverage and longer timeline.'],
      ['Set the outside date at 12 months to give maximum regulatory runway', 'A 12-month outside date is too long — it exposes the seller to financing market changes, business deterioration, and a year of distraction with no certainty. The convention is 4–6 months with a single extension option for regulatory cause.'],
    ],
    'HSR strategy is a pre-signing workstream that determines closing certainty. Overlap analysis, Item 4(c) discipline, pre-arranged divestitures, and an outside date calibrated to the regulatory risk — these are the moves that turn an antitrust-exposed deal into one that clears. Reactive antitrust work is how 4-month closing timelines become 14-month timelines.'),

  q(4351542, 'Career Skills', CHAPTER, 'Working-capital true-up at closing',
    'The deal price is $750M, subject to a working-capital adjustment based on a target of $42M of net working capital (the 12-month average). At closing, an estimated balance sheet will be delivered; 60 days post-close the final balance sheet trues up. Northwind is seasonal — net working capital varies $35M to $55M through the year. How should you handle this?',
    'Negotiate a normalized working-capital target that reflects the closing-month seasonality (e.g., if closing in April when NWC averages $48M, target $48M not the 12-month average $42M), or alternatively a corridor adjustment that only triggers if final NWC is more than ±$3M from target — the structure should compensate for seasonality rather than penalize it',
    [
      ['Accept the $42M 12-month average target since that is the standard convention', '$42M average against a seasonal swing of $35M–$55M means the closing-month working capital will rarely match the target — and the true-up will move price by potentially $5–10M based on closing timing rather than business performance. The seasonality has to be baked in.'],
      ['Treat the $42M target as a locked economic term and remove the true-up mechanism', 'Skipping the working-capital adjustment exposes the buyer to a closing-date balance sheet that is materially below normalized levels — which is a real economic transfer. Buyers will not accept skipping; the negotiation is on the target and the methodology, not the existence.'],
      ['Use a peak-of-cycle target to maximize the seller\'s closing-day proceeds', 'Peak-of-cycle targets transfer working capital risk to the buyer in a way the buyer will not accept and that the true-up will reverse anyway. The discipline is normalization to the closing month, not maximization through gaming the target.'],
    ],
    'Working-capital true-up structuring is where seasonal businesses lose money to convention. The 12-month average looks neutral but creates closing-date asymmetry; the normalized target or corridor adjustment is the discipline that aligns the true-up to actual business performance rather than closing-date accident. Getting this right is worth $5–10M on a $750M deal.'),

  q(4351543, 'Career Skills', CHAPTER, 'Closing checklist and funds flow',
    'Closing is scheduled for Friday, March 21. What does the closing checklist and funds flow actually need to address to ensure a clean close?',
    'Closing checklist with named owners for each deliverable (signatures, board resolutions, officer certificates, lien releases, FIRPTA certificates, R&W policy bind, escrow agreement, paying agent agreement); funds flow with wire instructions, exact closing-day amounts (price minus estimated working-capital adjustment, minus escrow, minus paying agent fee, minus debt payoff to lender), and a backup contact at the wire bank — and a dry run on the Thursday before',
    [
      ['Rely on the buyer\'s counsel closing checklist since they typically manage the closing mechanics', 'Buyer\'s counsel manages the buyer\'s side; the seller needs its own list to ensure the seller\'s deliverables (resolutions, officer certificates, R&W policy in place, lien releases on senior debt) are ready. A one-side checklist is how deliverables get missed at the table.'],
      ['Run wires from the final spreadsheet on closing morning after counsel signs off', 'Funds flow at $750M is a multi-party wire involving the buyer, the seller, the senior lender, the escrow agent, the paying agent, and advisors — wire reversal mid-transfer is operationally expensive. The Thursday dry run is the discipline that catches the typo or the missing intermediary bank.'],
      ['Combine the closing checklist with the working-capital adjustment to streamline the timeline', 'Working-capital adjustment is a 60-day post-close workstream; closing is a same-day workstream. Combining the two confuses the timeline and creates the impression that the working-capital number is finalized at close when it is not.'],
    ],
    'Closing mechanics are unglamorous but consequential. A named-owner checklist, a dry-run funds flow, and explicit attention to the seller\'s deliverables are what get the money to the seller\'s account by 11 AM Friday. Sloppy closing mechanics are how deals close late, miss the wire window, or surface a missing signature at the worst possible moment.'),

  q(4351544, 'Career Skills', CHAPTER, 'Post-close transition and integration handoff',
    'The Northwind deal closes Friday. The transition services agreement gives the buyer 6 months of seller IT support, 9 months of seller payroll services, and 12 months of seller real estate support. The CEO retires on close. How do you structure the post-close handoff?',
    'Pre-close, assign a senior banker as post-close coordinator for the first 90 days; deliver a transition document covering open items (any post-close working-capital true-up, R&W policy claims protocol, escrow release timing, family rollover documentation, indemnification claim mechanism); CEO transitions to chairman emeritus role with named cadence for buyer-side contact; integration team owner identified for ongoing operational decisions',
    [
      ['The deal closes Friday and the bank\'s role ends Friday — post-close is the buyer\'s and the seller\'s issue', 'Post-close is exactly where banking relationships become long-term. The 90-day coordination is the bridge that protects the seller through escrow, true-up, R&W claims, and any retrade attempts — and it is how the bank earns the next mandate.'],
      ['Defer all post-close coordination to the lawyers since the open items are legal', 'Open items are partly legal (R&W claims, indemnification) and partly financial (working-capital true-up, earnout if any, escrow release) and partly operational (transition services execution). The bank coordinates across all three; defaulting to legal-only misses the financial and operational pieces.'],
      ['Hand off CEO transition to the buyer\'s integration team without a defined cadence', 'No defined cadence means the CEO is unsure when to engage and the buyer\'s integration team is unsure when to escalate. The defined cadence (weekly for first month, biweekly for months 2–3) is what makes the transition orderly.'],
    ],
    'Post-close coordination is the unsexy work that determines whether the seller experiences the deal as clean or as endless. Named coordinator, transition document, escalation cadence, open items list — these are the structures that protect the seller through the months when retrade attempts and operational surprises are most likely. The 90 days after closing are where deal craft compounds into relationship.'),

  q(4351545, 'Career Skills', CHAPTER, 'Board fiduciary observations under Revlon',
    'The Northwind board sold to Strategic A at $750M when Sponsor C offered $760M, citing certainty (no financing condition, specific performance). Months after close, a former shareholder challenges the board\'s decision under Revlon duties. What does the record need to show?',
    'The record needs the full bid comparison table (cleared cash, certainty, conditionality, time-to-close), the bank\'s recommendation memo showing the framework not the conclusion alone, the fairness opinion with methodology and valuation ranges, board minutes recording each consideration weighted, the explicit consideration of the $10M headline gap and the certainty premium that offset it — and documentation that the board considered the higher headline bid rather than dismissing it',
    [
      ['The record only needs to show the board accepted the bank\'s recommendation — the bank\'s judgment carries fiduciary weight', 'Revlon duties are the board\'s, not the bank\'s. The record has to show the board considered alternatives and made an informed decision; "the bank said so" is not enough to defend.'],
      ['The board can defend the decision by showing the $750M was above the fairness opinion range', 'Above-range alone does not defend Revlon — the question is whether the board reasonably maximized value. Selecting a lower headline when a higher headline existed requires the documented certainty reasoning, not just the fairness opinion floor.'],
      ['The record can rely on the executed definitive agreement as evidence of board diligence', 'An executed agreement shows the deal happened, not how the board reached the decision. Revlon defense lives in the minutes, the materials presented, and the deliberation record — the contract itself is the outcome, not the process.'],
    ],
    'Board fiduciary defense under Revlon is a documentation discipline that runs through the entire process. Bid comparison tables, recommendation frameworks, fairness opinion methodology, minutes that record deliberation — these are not afterthoughts; they are the record the board needs when challenged. The bank that produces these documents cleanly is the bank that protects its client\'s board from litigation and protects itself from being named.'),

  q(4351546, 'Career Skills', CHAPTER, 'League-table credit and lessons file',
    'The Northwind deal closes at $750M, the bank gets league-table credit, and the senior team moves to the next mandate. What does a serious post-mortem produce that compounds for the next deal?',
    'A documented lessons file: which buyer-list names converted to IOIs vs went silent and why; which CIM sections produced the most buyer questions (those are the under-developed sections to strengthen on the next deal); which QofE adjustments held and which got haircut; which definitive agreement terms got retraded and which held; the family rollover and reverse fee learnings; and one named principal who owns the file going forward',
    [
      ['Move to the next mandate without a structured post-mortem since each deal is unique and lessons do not transfer', 'Most deal craft compounds — buyer behavior patterns, CIM section weaknesses, QofE adjustment patterns are reusable across deals in the same sector. Not building the lessons file forfeits the institutional knowledge that produces shorter timelines and higher cleared prices on the next mandate.'],
      ['Write a short summary memo for the partner credit file and call that the post-mortem', 'A partner credit memo is a marketing document; a post-mortem is a craft document. They serve different audiences and different purposes — conflating them gives the bank a marketing file and no learnings.'],
      ['Conduct the post-mortem only on deals that did not close to focus on failure analysis', 'Closed deals contain as much learning as failed ones — what worked is as informative as what did not. Limiting post-mortems to failures discards the structural patterns that produce repeatable wins.'],
    ],
    'Lessons files are the difference between an experienced banker and an experienced banking team. Buyer behavior, CIM weaknesses, QofE patterns, retrade history — these compound when documented and decay when not. The deal closed; the craft only compounds if the post-mortem is built deliberately. That is the capstone discipline that turns a single mandate into the next five.'),
]
