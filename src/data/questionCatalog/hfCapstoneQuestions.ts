import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// HF CAPSTONE — Quarterly Portfolio Review (Apex Capital Partners)
// ----------------------------------------------------------------------------
// 50 integrative questions (IDs 4400500–4400549) threaded through one shared
// fictional fund. All 50 simulate a quarterly portfolio review week — the PM
// going through each position with the analyst team, deciding what to add,
// trim, or cut; what to write in the LP letter; and how to explain the
// drawdown.
//
// Apex Capital Partners context (consistent across every question below):
//   - $3.2B long/short equity hedge fund, 130/30 net-long bias.
//   - US-focused, concentrated in TMT + Consumer + Healthcare.
//   - 6-year track record, 11% net IRR since inception.
//   - 25 longs averaging 4.5% each + 35 shorts averaging 1.5% each.
//   - Current quarter: -2% net while S&P +4% — a drawdown month.
//   - Threaded positions:
//       LONG  TCHO  (TechCo, NASDAQ)        $145M / 8% of fund — software
//       LONG  MDC   (MedDeviceCo, NYSE)     $80M  / 4% of fund — orthopedics
//       LONG  RTCO  (RetailerCo, NYSE)      $60M           — turnaround thesis
//       SHORT ACO   (AutoCo, NYSE)          $35M           — structural decline
//       SHORT BIOSP (BiotechSpec, NASDAQ)   $25M           — Phase 3 catalyst
//       PAIR  Long DataCenter / Short LegacyTelco — sector pair
//
// Voice: matches the existing capstone bank (vcCapstoneQuestions.ts) —
// specific, evidence-anchored, no filler, no strawman distractors. Each
// wrong-answer rationale is bespoke; the lesson on each question is the
// integrative takeaway that ties the choice back to the wider review.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe HF capstone canonical bank'

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

const CHAPTER = 'Capstone: Quarterly Portfolio Review'

// Difficulty distribution target: ~15 at 3, ~25 at 4, ~10 at 5 — capstone
// leans harder than a standard chapter.
export const HF_CAPSTONE_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Lessons 1–2: Long book review (4400500–4400509)
  4400500: 3, // TCHO position sizing re-check at 8% of fund
  4400501: 4, // TCHO re-underwrite — what changed in the thesis
  4400502: 4, // TCHO valuation framework under multiple compression
  4400503: 5, // TCHO trim decision under conviction + concentration tension
  4400504: 3, // MDC catalyst tracking — FDA panel timing
  4400505: 4, // MDC competitor entry and updated TAM read
  4400506: 4, // RTCO turnaround check-in — same-store comp test
  4400507: 5, // RTCO inventory and cash burn read versus thesis
  4400508: 4, // Long-book gross exposure decision under -2% drawdown
  4400509: 3, // Long-book sector tilt vs benchmark

  // Lessons 3–4: Short book review (4400510–4400519)
  4400510: 3, // ACO short thesis re-statement after activist 13D
  4400511: 4, // ACO short squeeze risk — borrow and short interest read
  4400512: 4, // ACO cover or hold under short-term pain
  4400513: 5, // ACO position sizing under elevated borrow costs
  4400514: 3, // BIOSP Phase 3 readout — expected value math
  4400515: 4, // BIOSP sizing into binary catalyst
  4400516: 4, // BIOSP options overlay vs straight short
  4400517: 5, // BIOSP risk framework if readout is delayed
  4400518: 4, // Short-book gross exposure under crowded-short tape
  4400519: 3, // Short-book diversification across theses

  // Lessons 5–6: Pair trades + factor exposure (4400520–4400529)
  4400520: 3, // DataCenter / LegacyTelco pair P&L decomposition
  4400521: 4, // Pair sizing — dollar neutral vs beta neutral
  4400522: 4, // Pair attribution — sector beta vs idiosyncratic
  4400523: 5, // Pair unwind decision when one leg breaks
  4400524: 4, // Factor exposure — momentum tilt read
  4400525: 4, // Factor exposure — quality and growth net long
  4400526: 5, // Hedging factor exposure with factor ETFs vs naming names
  4400527: 3, // Beta-adjusted net exposure read
  4400528: 4, // Crowding score on the long book
  4400529: 4, // Crowding score on the short book

  // Lessons 7–8: Drawdown root-cause (4400530–4400539)
  4400530: 4, // Decompose the -2% — alpha vs factor vs sizing
  4400531: 5, // What single position drove the most pain
  4400532: 3, // Was it the longs or the shorts that bled
  4400533: 4, // Was the drawdown a process failure or a tape failure
  4400534: 4, // Stress test against a 2018-style quality unwind
  4400535: 5, // What to communicate to LPs in the quarterly letter
  4400536: 3, // Tone of the LP letter under a drawdown month
  4400537: 4, // What numbers to lead the letter with
  4400538: 4, // Handling a redemption inquiry from a top-three LP
  4400539: 5, // Whether to discuss specific positions in the letter

  // Lessons 9–10: Forward positioning (4400540–4400549)
  4400540: 3, // New-ideas pipeline shape going into next quarter
  4400541: 4, // Rebalancing the long book — what to fund what
  4400542: 4, // Rebalancing the short book — what to cover
  4400543: 5, // Adding to TCHO into the drawdown vs trimming
  4400544: 4, // Replacing RTCO if the turnaround thesis breaks
  4400545: 4, // Risk limits review — single-name cap
  4400546: 5, // Risk limits review — sector cap when TMT is concentrated
  4400547: 4, // Net and gross exposure target heading into earnings season
  4400548: 4, // Stop-loss discipline on the BIOSP short
  4400549: 5, // The PM's one-page synthesis for the IC
}

export const hfCapstoneQuestions: Question[] = [
  // -------------------------------------------------------------------------
  // LESSONS 1–2 — Long book review (4400500–4400509)
  // TCHO re-underwrite, MDC catalyst tracking, RTCO turnaround check-in.
  // -------------------------------------------------------------------------
  q(4400500, 'Career Skills', CHAPTER, 'TCHO position sizing re-check',
    'Apex Capital Partners holds a $145M long position in TCHO — 8% of the $3.2B fund. Single-name cap in the prospectus is 10%. The position has appreciated 35% over six quarters and you have not trimmed. The PM asks the analyst team whether the size is still appropriate. What is the cleanest read for the quarterly review?',
    'The 8% weight is the *output* of conviction × appreciation, not an input — the question is whether you would buy TCHO to 8% today with fresh capital; if the answer is no, the size is being held by inertia rather than by underwriting',
    [
      ['8% is below the 10% single-name cap, so the position is within risk policy and no action is required', 'Compliance with the cap is the floor of the question, not the question itself. A position held only because it has not breached a limit is not the same as a position you would size to 8% with new dollars — the difference is what the review is for.'],
      ['Trim mechanically back to the original 5% cost weight to bank the gains', 'Mechanical trimming back to cost weight ignores conviction. If TCHO\'s thesis has strengthened with execution, a 5% target is too small; if it has weakened, 5% is still too big. The cost weight is not the right anchor.'],
      ['Hold at 8% because trimming a winner is one of the most common Apex mistakes', '"Don\'t trim winners" is folk wisdom, not a sizing framework. The right test is the would-you-buy-it-today test on current price, current thesis, and current concentration risk to the fund.'],
    ],
    'Position sizing in a quarterly review is the would-you-buy-it-today test, not the don\'t-touch-winners reflex and not the mechanical-trim reflex. The size should equal current conviction at current price — and an 8% weight at $145M deserves an explicit re-underwrite, not an inertia hold.'),

  q(4400501, 'Career Skills', CHAPTER, 'TCHO re-underwrite',
    'The TCHO long thesis at entry was: durable double-digit ARR growth, expanding gross margin into the high 70s, and a path to GAAP profitability within 8 quarters. Two of three have materialized; ARR growth has decelerated from 38% to 26%. How should the analyst frame the re-underwrite for the PM?',
    'Two of three thesis pillars are intact; the deceleration is the load-bearing data point — name whether it reflects pull-forward, competitive pressure, or end-market softness, because the cause changes the read on whether the remaining growth trajectory still supports the multiple',
    [
      ['The thesis is broken because the headline growth rate has dropped by a third', 'A drop from 38% to 26% is a deceleration, not a broken thesis. The analyst\'s job is to read *why* the rate dropped — pull-forward, competition, end-market — because the meaning of the number lives in the cause, not the delta.'],
      ['Two of three pillars are intact, so the thesis remains on track and no action is needed', 'Counting pillars is the wrong frame. The growth pillar is the one that drives the valuation; you cannot offset it with gross margin and profitability progress because the multiple lives on top of the growth rate.'],
      ['Wait for one more quarter of data before forming a view on the deceleration', 'Waiting to act when the data is already in front of you is exactly the failure mode the quarterly review is built to prevent. The PM does not need certainty — they need the analyst\'s current best read, named explicitly.'],
    ],
    'A thesis re-underwrite is not pillar-counting and not waiting for more data. It is identifying which pillar is the load-bearing one for the current price, naming the specific cause of any change in that pillar, and committing to a read the PM can argue with.'),

  q(4400502, 'Career Skills', CHAPTER, 'TCHO valuation under multiple compression',
    'TCHO trades at 11x forward revenue versus 16x at entry. The comp set has compressed from a median of 14x to 9x over the same period. The PM asks whether TCHO is now cheaper or more expensive in relative terms. What is the right framework?',
    'TCHO has gone from a 14% discount to the comp median to a 22% premium — even though the absolute multiple compressed, the relative premium expanded, and the question becomes whether TCHO\'s growth and margin profile justifies the wider premium or whether the comp compression is dragging on a re-rate from below',
    [
      ['TCHO is cheaper because the multiple has compressed from 16x to 11x', 'Absolute multiple compression in a rising-rates or de-rating environment is meaningless without the comp set. A name that compresses less than its comps has become *more* expensive in relative terms, even though the headline number is lower.'],
      ['TCHO is more expensive because the relative premium has expanded', 'Saying it is "more expensive" without testing whether the premium is justified leaves the analysis halfway. The premium expansion is the question, not the conclusion — and the answer depends on whether TCHO\'s fundamentals support the gap.'],
      ['Multiples are a sentiment indicator and the right framework is DCF', 'DCF at high-growth software with a 6-year track record is largely an exercise in choosing the terminal multiple — which is the multiple framework with extra steps. Comp-relative is the language the PM and the IC actually use.'],
    ],
    'Multiple compression in a comp set is a relative game, not an absolute one. The right read is whether the premium or discount to comps has tightened or widened — and whether the fundamental gap to those comps justifies the new spread. TCHO becoming a wider premium is what deserves the next question, not the headline 11x.'),

  q(4400503, 'Career Skills', CHAPTER, 'TCHO trim decision',
    'The PM is on the fence: the TCHO thesis is largely intact, deceleration is explainable, the position is 8% of the fund, and the fund just had a -2% net month. The risk team has flagged TCHO concentration as the single largest contributor to portfolio volatility. What is the right call for the review?',
    'Trim 1.5–2% of fund to bring TCHO back into the 6–6.5% band — the move is not about the thesis, it is about the fund\'s ability to absorb a TCHO-specific shock during a drawdown when LP attention is already heightened; conviction trims and concentration trims are different decisions',
    [
      ['Hold at 8% because the thesis is intact and you do not trim on volatility', 'Holding at 8% during a drawdown because "the thesis is intact" conflates conviction with concentration. The thesis can be intact and the position can still be too large for the fund\'s current risk budget — those are separate questions.'],
      ['Cut to 4% to halve the exposure and reduce concentration aggressively', 'Cutting in half is overreaction. The thesis has not changed materially; the size is too large for the current drawdown context, not too large for the conviction. A 1.5–2% trim addresses the concentration risk without surrendering the conviction.'],
      ['Add 1% to TCHO into the drawdown because the multiple has compressed and the thesis is intact', 'Adding to an already-8% position when the fund is in a -2% drawdown and risk has flagged TCHO as the top vol contributor is exactly the move LPs notice. Conviction-add into a concentrated drawdown position is a sizing decision dressed up as a thesis decision.'],
    ],
    'Trim decisions during a drawdown should disentangle conviction from concentration. The TCHO thesis is intact; the concentration is the problem. A 1.5–2% trim back to a 6–6.5% weight preserves conviction while restoring the fund\'s ability to absorb a TCHO-specific shock — which is what the risk team is asking the PM to do.'),

  q(4400504, 'Career Skills', CHAPTER, 'MDC catalyst tracking',
    'Apex holds a $80M long in MDC (orthopedics, 4% of fund). The thesis turns on an FDA advisory panel scheduled in 7 weeks for the next-gen knee implant. The analyst has been tracking three catalyst inputs: panel composition, prior FDA correspondence, and competitor product withdrawals. Which input is the most diagnostic for the panel outcome?',
    'Prior FDA correspondence — specifically the most recent Complete Response Letter and the company\'s response — because that document tells you exactly what the agency wants to see at the panel; panel composition matters at the margin but the FDA\'s own questions are the script',
    [
      ['Panel composition, because the voting members\' prior public statements predict their votes', 'Panel composition is a real input but it is the noisiest of the three. Members\' prior statements rarely map cleanly to votes on a specific molecule, and the prediction power versus the FDA\'s own correspondence is much lower.'],
      ['Competitor product withdrawals, because they tell you the regulatory environment for the category', 'Competitor withdrawals matter for the post-approval market environment, not for this specific panel vote. They will move into the read after the catalyst, not before it.'],
      ['All three inputs equally, since catalyst forecasting requires triangulation', 'Triangulation language sounds disciplined but ducks the load-bearing question. The PM is asking which input you would weight most — answering "all three equally" is the analyst version of refusing to commit.'],
    ],
    'Catalyst tracking lives in the document trail. For an FDA panel, the most recent CRL and the company\'s response is the closest thing to a script you will get — panel composition and category context are useful color but secondary. Naming the load-bearing input lets the PM size the position into the catalyst with eyes open.'),

  q(4400505, 'Career Skills', CHAPTER, 'MDC competitor entry',
    'Two weeks before the MDC panel, a large-cap medical device peer announces a competing knee implant entering Phase 3, with potential approval in 18 months. The analyst\'s reaction is to immediately cut MDC. What is the more careful read?',
    'Eighteen months from a Phase 3 start is at minimum 2.5–3 years to commercial launch even with clean trials — MDC, if approved at the panel, has a clear first-mover window with reimbursement codes and orthopedic surgeon training already in place; the competitor announcement does not change the panel outcome and barely changes the first-cycle revenue',
    [
      ['Cut MDC immediately because the competitive landscape has materially changed', 'A Phase 3 announcement does not materially change the 12–24 month landscape — orthopedics has long surgeon adoption curves and reimbursement timelines that protect the first mover. Cutting on the announcement confuses tape reaction with thesis reaction.'],
      ['Add to MDC into the weakness because the market is over-reacting to the competitor news', 'Adding into the weakness assumes you know the panel outcome — and the panel is still 2 weeks away. Adding into binary catalyst risk on a tape-noise pretext is the kind of move that produces an awkward post-mortem.'],
      ['Wait until after the panel to re-evaluate the competitive impact', 'Waiting on the panel is correct for the panel decision; it is not the right frame for the competitor analysis. The two reads are separable — the competitor announcement deserves its own assessment regardless of what happens at the panel.'],
    ],
    'Competitor entry in medical devices is a long-cycle event. The analyst\'s job is to separate the tape reaction (immediate) from the commercial impact (years away) and to give the PM a read that does not conflate the two. MDC\'s near-term catalyst — the panel — is largely independent of the competitor announcement; conflating them is how you over-react.'),

  q(4400506, 'Career Skills', CHAPTER, 'RTCO turnaround check-in',
    'Apex holds $60M long in RTCO (retailer turnaround thesis). The thesis at entry was: new CEO would cut SG&A by 200 bps, narrow the assortment by 30%, and return to positive same-store-comp growth by Q4. SG&A is down 180 bps, assortment is down 22%, same-store-comp is -2% versus the +1% expected. How should the analyst frame the check-in?',
    'Two of three operational levers have moved largely as expected; the comp miss is the load-bearing data point — name whether the gap is execution (new merchandise not landing), macro (category softness), or measurement (calendar shift, weather), because the cause changes the read on whether the thesis is delayed or broken',
    [
      ['The thesis is on track because SG&A and assortment are within tolerance of the original plan', 'Operational execution is a leading indicator, but the comp number is the result the thesis was actually betting on. Calling the thesis "on track" when the headline outcome missed is the kind of optimism that ages badly across the next two quarters.'],
      ['The thesis is broken because the comp number missed materially', 'A 3-point comp miss in a single quarter is not enough to call the thesis broken when two of three input levers are functioning. The analyst has to test the cause before committing to a structural conclusion.'],
      ['Hold the position and wait for the next quarter\'s comp print before forming a view', 'Waiting for one more print is the default that prevents the analyst from doing the actual work. The PM needs a current read on whether the miss is delay or breakage — that read is what the quarterly review is for.'],
    ],
    'Turnaround check-ins live in the gap between input execution and output result. RTCO has moved the inputs the CEO promised; the output has missed. The right work is to test why — execution, macro, or measurement — and to give the PM a read on whether the thesis is delayed (sizing intact) or breaking (sizing decision).'),

  q(4400507, 'Career Skills', CHAPTER, 'RTCO inventory and cash burn read',
    'On deeper RTCO diligence, inventory is up 14% YoY against flat sales, days of inventory has climbed from 92 to 108, and the company has drawn an additional $80M on its revolver. The analyst is debating whether this is normal turnaround friction or thesis-breaking. What is the right read for the PM?',
    'The pattern — inventory growing into soft sales while the revolver is being drawn — is exactly the operational tell that distinguishes a delayed turnaround from a breaking one; the question is no longer whether SG&A came in, it is whether RTCO has the liquidity to fund the assortment reset through the next selling season',
    [
      ['Normal turnaround friction; inventory builds before the assortment reset lands', 'Inventory builds during an assortment reset can be normal, but the build happening *alongside* a revolver draw and a comp miss is the combination that is not normal. The PM needs the joint read, not the isolated explanation.'],
      ['Thesis-breaking; the company is heading for a liquidity event and the position should be exited', 'Liquidity is a real risk but is not yet a covenant or refinancing event — the right move is to size the exposure to the worst-case scenario, not to exit on the inference. Premature exit on a turnaround is the symmetric error to holding too long.'],
      ['The inventory build is a positive sign because it means the company is investing in the assortment', 'Inventory growth against flat sales is a negative indicator regardless of intent. Calling it "investment" is the kind of reframe that protects the position from the data rather than the other way around.'],
    ],
    'The diagnostic pattern in a turnaround is the *combination* of operational signals, not any single one. Inventory + revolver + comp miss together changes the read in a way none of them does alone. The PM\'s question becomes liquidity-runway, and the analyst\'s job is to model the scenarios — not to defend the entry thesis.'),

  q(4400508, 'Career Skills', CHAPTER, 'Long-book gross exposure decision',
    'Apex\'s long book gross is 130% (the long side of the 130/30). After a -2% net month, the PM is debating whether to reduce long gross to 120% to lower volatility, or maintain at 130% because conviction has not changed. What is the more careful framing?',
    'Gross exposure is a portfolio-level decision separate from any single position\'s conviction — the question is whether the *fund* should be running at 130% long gross given the current factor backdrop and the LPs\' tolerance for a continued drawdown, not whether each long is still a buy',
    [
      ['Maintain at 130% because cutting gross during a drawdown locks in losses', '"Don\'t cut into weakness" is a trader\'s reflex, not a portfolio framework. The question is what gross is right for the fund\'s current risk budget — and locking in losses is a separate concern from setting gross.'],
      ['Reduce to 120% mechanically because drawdowns trigger gross reduction', 'Mechanical gross reduction without a view on the factor backdrop is also incomplete. The right answer depends on whether the drawdown was driven by gross exposure or by something else.'],
      ['Reduce to 100% to neutralize equity exposure until the drawdown resolves', 'Cutting to 100% long gross is a much larger move than the situation calls for and effectively suspends the fund\'s strategy. Apex is a 130/30 — running at 100% gross is not a measured response, it is a different fund.'],
    ],
    'Gross exposure decisions are portfolio-level decisions, not aggregated single-name decisions. Distinguishing the two is what separates a PM\'s review from an analyst\'s review — and the right answer to "should we reduce gross" depends on the factor backdrop and the LP context, not on whether each long is still a buy.'),

  q(4400509, 'Career Skills', CHAPTER, 'Long-book sector tilt',
    'The long book is concentrated in TMT, Consumer, and Healthcare. Versus the S&P 500, Apex is 18 points overweight TMT, 8 overweight Consumer, and 6 overweight Healthcare, with offsetting underweights in Financials and Energy. The PM asks whether this is the right tilt for the next quarter. What is the cleanest framework?',
    'Sector tilts should reflect where the fund believes the best idiosyncratic ideas live — the bench of names, not the macro view; if the TMT overweight is the result of 12 high-conviction names and the Financials underweight reflects no actionable ideas, the tilt is the output of the process and the question is whether the process is working',
    [
      ['Rebalance toward sector neutrality because concentrated sector exposure is a risk factor', 'Mechanical sector-neutral construction surrenders the alpha source of a fundamental long/short fund. The tilt is supposed to come from idea quality; flattening it because it is concentrated treats sector exposure as the problem when the underlying ideas are the actual driver.'],
      ['Increase the TMT overweight because that is where the highest conviction names are', 'Concentration on conviction is reasonable up to a point, but ratcheting it up without testing factor and macro sensitivity ignores that an 18-point overweight already runs material sector risk. The right move is to test the existing tilt, not to widen it.'],
      ['Reduce TMT and Consumer because they are the highest-beta sectors during a drawdown', 'Reducing sector overweights because of beta during a drawdown is a tape reaction. The drawdown may or may not be sector-driven, and beta-based rebalancing replaces the idea-quality framework with a macro one — which is a different strategy.'],
    ],
    'Sector tilt is the output of an idea-quality process, not an independent decision. The right review question is whether the ideas driving each overweight still meet the bar — and whether the tilt as a whole still reflects the bench. Mechanical neutrality and tape-driven reduction both replace the process with a heuristic.'),

  // -------------------------------------------------------------------------
  // LESSONS 3–4 — Short book review (4400510–4400519)
  // ACO short squeeze risk, BIOSP Phase 3 catalyst sizing.
  // -------------------------------------------------------------------------
  q(4400510, 'Career Skills', CHAPTER, 'ACO short thesis re-statement',
    'Apex is short $35M of ACO (auto OEM, structural decline thesis). An activist files a 13D announcing a 7% stake and a plan to push for a spin-off of the financing arm. The PM asks the analyst to re-state the short thesis in light of the 13D. What is the right move?',
    'Re-state the thesis explicitly — Apex was short on structural unit-volume decline and margin compression, not on capital allocation; the 13D introduces a new bull case (sum-of-parts unlock) that is independent of the original thesis and has to be sized separately, not blended in',
    [
      ['Cover the short because the activist will close the SOTP discount and the thesis is now broken', 'Covering on the activist filing assumes the SOTP unlock will land and that it dominates the structural thesis — both are unproven. The right move is to size the new variable, not to surrender the position to it.'],
      ['Hold the short unchanged because the structural thesis is independent of capital allocation', 'Holding unchanged ignores that the 13D has materially changed the short-term risk-reward, even if it does not invalidate the long-term thesis. Refusing to update the position on new information is its own kind of error.'],
      ['Double the short into the activist-driven rally because the structural thesis is intact', 'Doubling into a 13D-driven rally is exactly the move that produces a margin call rather than a profitable short. The activist\'s ability to move the stock in the short term is independent of whether the long-term thesis is right.'],
    ],
    'Re-stating a short thesis after new information separates the original variables from the new one. ACO\'s structural thesis is intact; the 13D introduces a new path that has to be sized on its own merits. Blending the two — or refusing to update — both miss the discipline of stating what you actually believe at the new price.'),

  q(4400511, 'Career Skills', CHAPTER, 'ACO short squeeze risk',
    'ACO short interest has climbed from 8% to 22% of float since Apex entered. Borrow rates have moved from 50 bps to 380 bps. Days-to-cover sits at 9 versus a long-term average of 3. The analyst is debating whether to flag squeeze risk to the PM. What is the right read?',
    'Twenty-two percent short interest with 9 days-to-cover and a 380 bp borrow is the canonical pre-squeeze setup — the position should be sized smaller regardless of conviction, because the path of the trade now includes a non-trivial probability of a forced cover at a price the analyst would not voluntarily pay',
    [
      ['Borrow at 380 bps is annoying but not yet expensive enough to change sizing', '380 bp borrow on a 35M short is meaningful annual carry on its own, but the load-bearing concern is not the carry — it is the days-to-cover and the joint probability of a squeeze. Treating the borrow rate in isolation misses the picture.'],
      ['Short interest at 22% is high but not unusual for a structural-decline name and squeeze risk is low', '22% short interest combined with 9 days-to-cover is the joint signal that matters. Citing the level in isolation is exactly the analytical mistake the PM is testing — the combination is what produces a squeeze, not either input alone.'],
      ['Cover the position entirely because squeeze risk has become unacceptable', 'Covering entirely surrenders the thesis on path-dependent risk. The right move is to size down to a level where a squeeze does not break the fund, not to abandon the trade.'],
    ],
    'Squeeze risk is a joint-signal problem: short interest *and* days-to-cover *and* borrow cost together produce the regime where forced covering becomes the dominant scenario. Sizing — not covering — is the response. The PM\'s job is to keep the thesis exposure on while making sure the path-dependent risk cannot break the fund.'),

  q(4400512, 'Career Skills', CHAPTER, 'ACO cover or hold under short-term pain',
    'ACO has rallied 24% over six weeks on the 13D and improving consumer credit data. Apex is down ~$8M on the short. The structural thesis (EV transition, dealer-network erosion, financing arm risk) is unchanged. The PM is asking: cover, hold, or add. What is the right framing?',
    'Hold and trim — the thesis is intact but the position has run against you with elevated squeeze risk; trimming preserves the directional view while reducing path-dependent risk, and the trim level should map to the new days-to-cover, not to the P&L',
    [
      ['Cover entirely because being wrong on a short for six weeks is enough evidence to step away', 'Six weeks of adverse price action is not evidence the thesis is wrong — structural shorts often take quarters to play out. Covering on time-elapsed is a discipline failure, not a discipline.'],
      ['Add to the short because the rally is technical and the thesis is unchanged', 'Adding into a rally with 22% short interest and 9 days-to-cover is exactly the move that produces a forced cover. The thesis being intact is necessary but not sufficient — the path-dependent risk has to be sized too.'],
      ['Hold at current size because trimming on adverse price is selling at the wrong time', '"Don\'t trim into weakness" applied to a short is "don\'t cover into strength" — same reflex, wrong frame. The trim is not P&L-driven, it is risk-driven, and the squeeze setup is the actual reason to size down.'],
    ],
    'Cover-or-hold on an adverse short is the test of separating thesis from risk. The thesis on ACO is intact; the position\'s risk profile has changed because the squeeze setup has tightened. A trim that maps to the new risk — not to the P&L — is the move that lets the PM keep the thesis on without inviting a forced cover.'),

  q(4400513, 'Career Skills', CHAPTER, 'ACO position sizing under elevated borrow',
    'Borrow on ACO has climbed to 380 bps annualized on a $35M short — roughly $1.3M per year in carry against an expected 18-month thesis play-out. The PM asks the analyst to recommend a sizing-and-carry math for the position. What is the right framework?',
    'Size the position so that the expected P&L from the thesis (downside × probability × time-to-realize) covers at least 2.5–3x the expected carry over the holding period; under that hurdle a smaller position has better risk-adjusted economics than a larger one because carry compounds and thesis play-out is uncertain',
    [
      ['Maintain the $35M size because the thesis economics dominate the carry cost', 'Saying "thesis dominates carry" without doing the math is exactly the kind of hand-wave that produces a $2M carry bill against a $4M expected P&L. The PM is asking for the calculation, not the assertion.'],
      ['Reduce the position to a level where the carry is below 50 bps of fund AUM regardless of thesis math', 'Fund-AUM-relative carry caps are a real risk policy, but using them as the *sole* sizing rule decouples sizing from expected return. The right framework integrates carry into the thesis math, not as a separate cap.'],
      ['Borrow cost is a transaction cost and not a sizing input', 'Borrow at 380 bps over 18 months is roughly 5.7% of position value — that is not a transaction cost, that is a material headwind that the sizing has to clear. Treating it as a transaction cost understates it by an order of magnitude.'],
    ],
    'Sizing a short under elevated borrow is a carry-versus-expected-P&L calculation, not a rule of thumb. The position has to clear a 2.5–3x hurdle on expected P&L over carry to justify the same size; below the hurdle, smaller is better risk-adjusted. The math is what turns the borrow rate into a sizing decision rather than a complaint.'),

  q(4400514, 'Career Skills', CHAPTER, 'BIOSP Phase 3 readout — EV math',
    'Apex is short $25M of BIOSP into a Phase 3 oncology readout in 11 weeks. The analyst models: 35% probability of success (stock +180%), 65% probability of failure (stock -65%). What is the expected value of the short and how should it inform sizing?',
    'Expected return on the short is roughly (0.65 × 65%) − (0.35 × 180%) = ~ -20.75%, i.e. the short has negative expected value at the current size; the position is justifiable only if Apex believes the analyst\'s probability estimate is too generous to success, or as part of a paired structure',
    [
      ['The expected value is positive because the 65% failure case is more likely than the 35% success case', 'Probability-weighted return is not the same as expected value — the size of the payoff in each case matters too. The +180% in the success case is large enough that the 35% probability outweighs the 65% × 65% on the failure side.'],
      ['Expected value math does not apply to binary catalysts because the outcome is not a continuous distribution', 'Expected value applies to any probability-weighted payoff structure, binary or continuous. Refusing to apply it because the outcome is binary is a way of avoiding the discipline that exposes the trade.'],
      ['The short is justified because the analyst has a 65% probability that the trial fails', 'A 65% probability of failure does not automatically justify a short — the payoff asymmetry has to be tested too. A short with negative expected value on the analyst\'s own inputs is not justified by the higher probability of the favorable outcome.'],
    ],
    'EV math on binary catalysts is the gating discipline before sizing. BIOSP at a 35/65 split with a +180/-65 payoff structure has negative expected value as a naked short — the size should not match the analyst\'s probability conviction, it should reflect the asymmetric payoff. Sizing without the EV math is sizing on intuition.'),

  q(4400515, 'Career Skills', CHAPTER, 'BIOSP sizing into binary catalyst',
    'Given the EV math on BIOSP (slightly negative on the naked short), the PM asks whether the position should be sized differently or restructured. What is the right move?',
    'Reduce the short to a smaller core position ($10–15M) sized to a "thesis vote" rather than an EV-positive trade, and overlay a call-spread hedge to cap the upside damage if the trial succeeds — turns a negative-EV naked short into a positive-EV structured trade',
    [
      ['Exit BIOSP entirely because the EV is negative on the analyst\'s own numbers', 'Exiting on EV grounds alone surrenders the analyst\'s edge — the inputs are estimates, and the right move is to structure the position to be EV-positive, not to abandon it. Edge expressed through structure is still edge.'],
      ['Maintain $25M because the analyst\'s conviction is higher than the model implies', 'Overriding the EV math with "conviction" is exactly the kind of un-disciplined sizing that breaks fund returns. If the conviction is higher than the model, the model needs to be re-estimated, not bypassed.'],
      ['Double the short to $50M to express the high-conviction thesis', 'Doubling a position with negative model-EV is the most expensive expression of conviction — it widens the negative-EV exposure rather than restructuring it. Sizing up before structuring is the wrong order of operations.'],
    ],
    'Sizing into a binary catalyst requires structure as much as size. A negative-EV naked short becomes EV-positive when paired with a call-spread that caps the success-case damage. The PM\'s job is to convert conviction into a position that survives both scenarios — not to size up on conviction alone.'),

  q(4400516, 'Career Skills', CHAPTER, 'BIOSP options overlay vs straight short',
    'The analyst proposes replacing the naked BIOSP short with an out-of-the-money put spread expiring after the readout. The PM is skeptical because options are expensive into a high-implied-vol catalyst. How should the trade-off be framed?',
    'Long put spread caps the downside loss at the spread cost and defines the maximum drawdown around the catalyst; the implied vol is expensive because the catalyst is risky, but the structured position is paid for with a known loss rather than an open-ended one — the cost is the price of capping the squeeze tail',
    [
      ['Naked short is cheaper because there is no option premium to pay', 'Naked short is "cheaper" only if the trial fails; if the trial succeeds, the cost is unbounded. Comparing premium versus naked-short cost on the assumption of the favorable outcome is exactly how shorts blow up.'],
      ['Use a put spread but sell calls to fund the premium', 'Selling calls into a binary catalyst is the worst expression — it caps the favorable outcome\'s payoff and exposes the position to unbounded loss in the adverse outcome. It compounds the original problem of the naked short.'],
      ['Skip options entirely and size the naked short smaller to manage risk', 'Sizing down a naked short reduces the exposure linearly but does not change the open-ended loss shape on the success scenario. A smaller naked short still has unbounded upside risk — just on a smaller base.'],
    ],
    'The options overlay versus naked short trade-off is a question of loss shape, not loss size. The put spread converts an open-ended loss into a known loss at the cost of the premium. Into a high-vol catalyst, paying for the cap is the price of being able to hold the position with eyes open — and that price is what makes the trade survivable.'),

  q(4400517, 'Career Skills', CHAPTER, 'BIOSP readout delay risk',
    'Six weeks before the expected readout, BIOSP announces a 4-month delay in the Phase 3 primary endpoint analysis. Implied vol on the catalyst dates collapses and rebuilds around the new date. The short is now flat. What is the right framework for the PM?',
    'A trial delay is information — it usually means the primary endpoint analysis is more involved than expected, which can correlate with marginal data; size up modestly if the structural read on the data is unchanged, but rebuild the put spread around the new date so the catalyst is still capped',
    [
      ['Treat the delay as neutral and maintain the position structure unchanged', 'Delays are rarely neutral — they carry information about the analysis complexity and often correlate with marginal data. Treating the delay as a non-event misses the signal in the announcement.'],
      ['Cover the position because a delay always signals a positive readout', '"Delays always signal positive" is folk wisdom that does not survive base-rate testing. Delays correlate with marginal data as often as with positive data, and the right read depends on the specific reason for the delay.'],
      ['Add aggressively because the delay is a stalling tactic before bad news', '"Delays mean bad news" is the symmetric folk wisdom and equally unreliable. The right move is to look at the stated reason for the delay and the specifics of the trial design — not to apply a directional heuristic.'],
    ],
    'Trial delays are information, not just timing changes. The base rate on what delays correlate with is closer to neutral than to either folk-wisdom direction. The right work is to read the stated reason, test it against the trial design, and rebuild the position structure (especially the option overlay) around the new date — not to apply a directional reflex.'),

  q(4400518, 'Career Skills', CHAPTER, 'Short-book gross under crowded-short tape',
    'The S&P short-interest index has climbed to its 95th percentile over the past decade. Several of Apex\'s shorts (including ACO and BIOSP) appear on the top-50 crowded-short lists at prime brokers. The PM asks whether the short book should be reduced. What is the right framework?',
    'Crowded-short tape elevates the probability of a coordinated squeeze across multiple positions simultaneously — the right move is to reduce gross on the *most* crowded names and replace some short exposure with index hedges or factor shorts, not to abandon the short book or maintain it unchanged',
    [
      ['Maintain the short book because each thesis is independent of the crowding', 'Crowding is exactly what breaks the assumption of independence — a squeeze in one crowded name is correlated with squeezes in others through the same prime brokers and the same momentum trades. Independence is the assumption crowding violates.'],
      ['Cover all crowded shorts to eliminate squeeze risk entirely', 'Covering all crowded shorts is overreaction and surrenders meaningful alpha. The right discipline is selective reduction on the most crowded names, not blanket exit.'],
      ['Reduce gross uniformly across the short book by 20%', 'Uniform reduction is the easy answer that does not engage with the actual crowding map. The right move is differentiated — cut more on the crowded names, leave the uncrowded ones intact.'],
    ],
    'Crowded-short tape changes the joint risk profile of the short book in a way that single-name analysis misses. The right response is differentiated reduction on the most crowded names, combined with index or factor hedges that retain net-short exposure without single-name squeeze risk. Treating each short as independent is exactly the assumption the crowding breaks.'),

  q(4400519, 'Career Skills', CHAPTER, 'Short-book diversification across theses',
    'Apex\'s 35 shorts decompose roughly into: 14 structural-decline shorts, 11 valuation shorts, 6 binary-catalyst shorts (including BIOSP), and 4 fraud/accounting shorts. The PM asks whether this mix is well-diversified. What is the cleanest framework?',
    'Diversification on the short book is about the joint distribution of payoffs, not the count by thesis type — the question is whether the short book performs in different macro and factor regimes, and the structural-decline + valuation cluster (25 of 35) probably moves together in a quality-driven tape',
    [
      ['The mix is diversified because four thesis types is more than two and the count looks balanced', 'Count diversification across thesis types is the same fallacy as count diversification across sectors — what matters is the joint payoff distribution, not the labels. Four buckets can still move together if they share the same factor exposure.'],
      ['The mix is under-diversified because there are too few binary-catalyst shorts', 'Binary catalysts are not "diversification" — they are payoff-asymmetric trades that should be sized on their merits, not added for diversity. The argument for more binary shorts has to come from idea quality, not from balance.'],
      ['Diversification on shorts does not matter because shorts are paired against longs', 'Long-short pairing reduces market beta but does not eliminate within-short-book correlation. The short book\'s own diversification matters separately from how it interacts with the long book.'],
    ],
    'Short-book diversification is a joint-payoff question, not a label-count question. The right test is how the short book performs across factor regimes — quality unwinds, momentum reversals, rate moves — and whether the bench has shorts that work in each. Counting thesis types misses the underlying correlation.'),

  // -------------------------------------------------------------------------
  // LESSONS 5–6 — Pair trades + factor exposure (4400520–4400529)
  // -------------------------------------------------------------------------
  q(4400520, 'Career Skills', CHAPTER, 'DataCenter / LegacyTelco P&L decomposition',
    'Apex runs a sector pair: long $40M DataCenter operator, short $40M LegacyTelco. Over the quarter, DataCenter is +6%, LegacyTelco is +12%. The pair has lost ~$2.4M on a $40M notional per side. The PM asks the analyst to decompose the loss. What is the right framework?',
    'Both legs went in the same direction (up); the loss came from the *spread* — LegacyTelco outperformed DataCenter by 6 points despite the structural thesis being the opposite; decompose by separating sector beta (telecom + tech both rallied) from idiosyncratic (LegacyTelco-specific catalyst), because the implication for the next quarter depends on which dominated',
    [
      ['The pair lost because shorting an up-tape is always loss-generating', 'Shorting an up-tape produces a loss on the short, but the long side rallied too — the pair is supposed to be dollar-neutral and immune to the up-tape direction. The loss is in the spread, not in the direction.'],
      ['DataCenter underperformed, so the long thesis is broken', 'Underperformance versus the short leg is not the same as a broken long thesis. DataCenter was up 6 percent — that is positive absolute return; the question is why LegacyTelco beat it, not whether DataCenter\'s thesis broke.'],
      ['The pair sizing was wrong because LegacyTelco rallied more than DataCenter', 'Saying "sizing was wrong in retrospect" describes the outcome without explaining it. The PM wants the cause — sector beta or idiosyncratic — because the response to each is different.'],
    ],
    'Pair P&L decomposition starts with the recognition that the loss came from the spread, not the direction. The next move is to split sector beta from idiosyncratic effect — if sector beta drove the spread, the pair construction may be miscalibrated; if idiosyncratic drove it, the long or short thesis has new information. The decomposition is the path to the right response.'),

  q(4400521, 'Career Skills', CHAPTER, 'Pair sizing — dollar vs beta neutral',
    'The DataCenter / LegacyTelco pair was constructed dollar-neutral ($40M each). DataCenter\'s beta to the S&P is roughly 1.3; LegacyTelco\'s beta is roughly 0.6. The analyst proposes converting to beta-neutral sizing for next quarter. What is the right framework?',
    'Beta-neutral sizing would mean shorting ~$87M of LegacyTelco against the $40M DataCenter long, or trimming DataCenter to ~$18M — the conversion fixes market-beta neutrality but materially increases the LegacyTelco notional, which carries its own borrow, financing, and concentration cost; the choice depends on whether the pair is meant to be a market hedge or a pure spread bet',
    [
      ['Convert to beta-neutral because dollar-neutral is the lazy approximation', 'Dollar-neutral is an approximation, but it is not "lazy" — it has lower complexity and avoids over-hedging on noisy beta estimates. Calling it lazy without the trade-off ducks the question of whether the conversion is actually worth the cost.'],
      ['Maintain dollar-neutral because beta-neutral introduces unnecessary complexity', 'Dollar-neutral leaves the pair with material residual beta — DataCenter has 2.2x the market sensitivity of LegacyTelco. The complexity is real but the residual beta is also real, and the answer is the trade-off between them.'],
      ['Convert by sector-neutral sizing instead because telecom and tech are different sectors', 'Sector-neutral sizing is yet a third construction with its own trade-offs. The PM\'s question is dollar versus beta — answering with a different framework is sidestepping the choice.'],
    ],
    'Pair sizing methodology — dollar, beta, or sector neutral — depends on what the pair is for. A pure spread bet should be beta-neutral if the thesis is on the spread independent of market direction; a market hedge should be dollar-neutral to keep the notionals manageable. The PM needs the explicit choice, not the default.'),

  q(4400522, 'Career Skills', CHAPTER, 'Pair attribution — sector vs idiosyncratic',
    'Decomposition of the pair loss shows: sector beta accounted for ~40% of the spread move (telecom outperformed tech this quarter), while ~60% was idiosyncratic to LegacyTelco (an M&A rumor lifted the stock). How should the analyst frame this for the PM?',
    'The pair construction handled the direction correctly but missed the M&A optionality embedded in the short leg — the right next move is to scrub the short book for embedded M&A optionality more broadly, because LegacyTelco was not unique, it is a category of risk (low-multiple, takeable assets) that may exist elsewhere in the book',
    [
      ['The loss is mostly idiosyncratic so the construction was fine', 'Calling 60% idiosyncratic "fine" misses that the idiosyncratic component was an M&A rumor — which is a *type* of risk that lives in other positions too. The single-pair attribution opens a portfolio question, and stopping at "fine" closes it too early.'],
      ['The loss is mostly sector beta so the construction was wrong', 'Forty percent sector beta is meaningful but not majority. Calling the construction "wrong" overstates the sector contribution and misses the idiosyncratic story, which is where the actionable lesson lives.'],
      ['The decomposition does not matter because the loss is realized', 'Decomposition is exactly the point of the review — even on realized losses, the cause determines the response. Treating attribution as moot once the P&L is in is the discipline failure the review is meant to catch.'],
    ],
    'Pair attribution opens portfolio-level questions that single-pair analysis closes. The LegacyTelco M&A rumor is not unique to LegacyTelco — it is a category of optionality that may exist across the short book. The analyst\'s job is to extend the attribution into a portfolio scrub, not to stop at the pair.'),

  q(4400523, 'Career Skills', CHAPTER, 'Pair unwind when one leg breaks',
    'The LegacyTelco M&A rumor firms up into an announcement and the stock gaps +28%. The short on LegacyTelco is now causing the pair to bleed. The DataCenter long thesis is unchanged. What is the right move?',
    'Unwind the pair structure — cover the LegacyTelco short and keep DataCenter as a standalone long if conviction supports it; M&A on the short leg breaks the spread thesis even if the long thesis is intact, and continuing to hold the structure for "discipline" loses on both ends',
    [
      ['Hold the pair because pair discipline requires not breaking the structure on a single event', 'Pair discipline is a means, not an end. The structure exists to express a spread thesis; once an exogenous event breaks the spread, holding the structure for its own sake is exactly the discipline that loses money.'],
      ['Cover the LegacyTelco short and cover the DataCenter long simultaneously to close the pair cleanly', 'Closing both legs assumes the long thesis is contingent on the short — it is not. DataCenter\'s standalone conviction is the relevant question, and selling it alongside the short surrenders that conviction without justification.'],
      ['Add to the LegacyTelco short on the spike because M&A rumors often fail to close', 'Adding to a short into a confirmed M&A announcement is materially different from adding into a rumor. Once the announcement is made, the path-dependent risk has shifted decisively, and adding into it is the textbook way to lose more.'],
    ],
    'Pair unwind decisions disentangle the structure from the underlying theses. When an exogenous event breaks the spread but not the standalone conviction on one leg, the right move is to unwind the structure and re-evaluate each leg on its own merits. Treating the pair as inviolable is how you compound the loss.'),

  q(4400524, 'Career Skills', CHAPTER, 'Factor exposure — momentum tilt',
    'Apex\'s risk system reports a +0.4 momentum factor exposure on the net book — meaningful but not extreme. Over the past month, momentum has underperformed value by 6 points. The PM asks whether this exposure is intentional or accidental. What is the right read?',
    'A +0.4 momentum tilt is large enough to materially explain a -2% drawdown in a value-leading tape — the question is whether the tilt is the output of the idea process (analyst conviction concentrated in names that have already run) or an unintended consequence; if the latter, the answer is to surface the contributors, not to neutralize the factor',
    [
      ['Neutralize the momentum exposure with factor ETFs because factor tilts hurt returns', 'Mechanical factor neutralization can mute the alpha source of a fundamental fund — many high-conviction longs are by definition momentum names. Neutralizing without distinguishing intentional from unintended tilt destroys alpha.'],
      ['Ignore the factor exposure because Apex is fundamental, not factor-driven', 'Fundamental funds still carry factor exposure as a byproduct of the names they pick. Ignoring the exposure because the process is fundamental is exactly how funds get surprised by factor unwinds.'],
      ['Reduce the longs that contribute most to momentum without testing whether the tilt is intentional', 'Reducing the contributors without separating intentional from unintentional throws out the conviction-driven names along with the unintended ones. The first step is to surface the contributors, then decide which to keep.'],
    ],
    'Factor exposure on a fundamental book is a byproduct of name selection, not a separate decision. The right discipline is to surface the contributors to each tilt and decide which are conviction-driven (keep) versus accidental (consider trimming). Neutralizing the tilt mechanically muddies the alpha source; ignoring it leaves the fund exposed to factor unwinds.'),

  q(4400525, 'Career Skills', CHAPTER, 'Factor exposure — quality and growth',
    'Apex\'s risk system also reports a +0.6 quality net exposure and +0.5 growth net exposure on top of the +0.4 momentum tilt. The PM observes that this is a classic "quality growth" portfolio. What does this imply for forward risk?',
    'The portfolio is highly exposed to a quality-growth unwind — a regime where high-quality, high-growth names underperform value and lower-quality names (as happened in 2022 and parts of 2018); the question is whether the LPs are aware that Apex is effectively a leveraged quality-growth bet, and whether the fund is comfortable with that being one of the largest factor exposures',
    [
      ['Quality and growth tilts are positive signals because quality and growth outperform over long horizons', 'Long-horizon outperformance does not exempt the fund from short-horizon drawdowns during factor unwinds. The PM is not arguing against quality-growth as a long-term factor; they are flagging the joint exposure as a risk concentration.'],
      ['The exposures are small and within normal hedge-fund tolerance', '+0.6 quality + +0.5 growth + +0.4 momentum is not "small" — it is a heavily-tilted factor footprint that explains a meaningful portion of the fund\'s return variance. Calling it normal misstates the magnitude.'],
      ['Add value and low-quality longs to neutralize the tilt', 'Adding value/low-quality longs purely to neutralize factor exposure is the worst version of factor management — it forces the fund to buy names without idea-driven conviction. The right move is to surface the tilt and choose, not to paper over it.'],
    ],
    'Joint factor exposure — quality + growth + momentum — describes a specific style of fund whether or not the fund describes itself that way. The PM\'s discipline is to make the style explicit, communicate it to LPs, and decide whether to size the exposure down (by trimming contributors) or to embrace it (by sizing risk for the corresponding unwinds).'),

  q(4400526, 'Career Skills', CHAPTER, 'Hedging factor exposure',
    'The PM is debating whether to hedge the quality-growth tilt with factor ETFs (long value ETF, short quality ETF) or by adjusting names in the book. What is the cleanest framework?',
    'Adjust names in the book where possible — factor ETF hedges are blunt instruments that introduce basis risk, financing cost, and an opaque second layer of exposure; if the names in the book are conviction-driven, the tilt is the price of the strategy and the hedge introduces new problems without solving the old one',
    [
      ['Hedge with factor ETFs because it is faster and cleaner than rebalancing 25 longs', 'Factor ETF hedges feel clean but introduce basis risk that materializes exactly when the factor moves the most — defeating the hedge. Adjusting names is slower but produces no second-order surprise.'],
      ['Hedge with factor ETFs but only the momentum factor, because momentum is the most liquid', 'Liquidity is real but is not the criterion for which factor to hedge. The choice should follow the magnitude of the unintended exposure, not the convenience of the hedge instrument.'],
      ['Do not hedge at all because hedging is for funds that lack conviction', 'Refusing to hedge on principle ignores that some factor tilts are unintended and large enough to materially affect returns. The right answer is to first surface the tilt, then decide whether to hedge by names or by instruments — not to dismiss the question.'],
    ],
    'Factor hedging by ETF versus by name is a basis-risk-versus-execution-cost trade-off. Name adjustment is slower but cleaner; ETF hedges introduce a new source of risk (basis) that often materializes precisely when the hedge is supposed to work. The PM\'s default should be name adjustment, with ETF hedges reserved for tactical, time-limited exposures.'),

  q(4400527, 'Career Skills', CHAPTER, 'Beta-adjusted net exposure',
    'Apex\'s notional net is 100% long (130% long - 30% short). The risk system reports a beta-adjusted net of 1.15 because the longs have higher average beta than the shorts. The PM asks whether the fund is more or less exposed than the headline 100% suggests. What is the right read?',
    'Beta-adjusted net of 1.15 means the fund\'s market exposure is 15% higher than the notional net suggests — for every 1% move in the market, Apex would move ~1.15% from beta alone; LPs reading the 100% net likely under-estimate the equity sensitivity, and the LP letter should note both figures',
    [
      ['Notional net is the right measure because beta estimates are noisy', 'Beta estimates are noisy but they are the only systematic way to express the actual market sensitivity of the book. Using notional net only because beta is noisy is the analytical equivalent of measuring with the wrong ruler.'],
      ['Beta-adjusted net of 1.15 is within normal hedge-fund range and does not deserve flagging', '1.15 is within normal range but is meaningfully different from the 1.00 implied by the notional net. LPs interpreting Apex\'s drawdown will reach for the market exposure number, and giving them the wrong one creates a problem at exactly the wrong moment.'],
      ['Beta-adjusted net is a backward-looking measure and not useful for the current quarter', 'Trailing beta is by definition backward-looking, but it is the best available estimate of current market sensitivity. The alternative is no estimate, which is worse than a flawed one.'],
    ],
    'Notional net and beta-adjusted net are two different statements of equity exposure. When they diverge meaningfully, the gap is information the LP letter has to surface — particularly during a drawdown, where LPs are looking carefully at what the fund\'s "100% long" actually means. Reporting both figures is the move that prevents the LP question from becoming a complaint.'),

  q(4400528, 'Career Skills', CHAPTER, 'Crowding score on the long book',
    'A prime broker report shows that 8 of Apex\'s 25 longs (including TCHO and 4 other TMT names) appear on the top-25 most-owned-by-hedge-funds list. The PM asks whether long-book crowding matters as much as short-book crowding. What is the right framework?',
    'Long-book crowding is asymmetric: shorts get squeezed (forced cover), longs get sold (forced sales when crowded holders de-risk together) — the consequence is different but the mechanism is similar; high overlap with hedge-fund consensus elevates the probability of a coordinated de-grossing in a stress event, regardless of the underlying thesis',
    [
      ['Long-book crowding does not matter because longs cannot be squeezed', 'Squeeze is not the only crowding risk — coordinated forced selling by crowded holders during a stress event is the long-side equivalent and is just as real. The 2018 quality unwind and the early 2021 hedge-fund de-grossing both showed this clearly.'],
      ['Long-book crowding is positive because consensus validates the conviction', 'Hedge-fund consensus does not validate conviction — it concentrates risk. The longs Apex shares with other hedge funds are the ones most exposed to a coordinated de-gross, not the ones most likely to outperform.'],
      ['Long-book crowding only matters during forced selling, which is rare', 'Forced selling is rare but is exactly the regime where crowding matters most. Treating rare events as ignorable misses that the worst drawdowns happen precisely when crowded positions unwind together.'],
    ],
    'Long-book crowding is asymmetric but real. The mechanism is coordinated de-grossing during stress, and the consequence is correlated selling that turns crowded names into the worst performers regardless of fundamental quality. Surfacing the overlap with hedge-fund consensus is the discipline that lets the PM choose which crowded positions to keep on conviction and which to size down on risk.'),

  q(4400529, 'Career Skills', CHAPTER, 'Crowding score on the short book',
    'The same prime broker report flags 12 of Apex\'s 35 shorts (including ACO and BIOSP) as among the most-shorted-by-hedge-funds. The PM asks whether to treat short-book crowding as an additive risk to the squeeze-risk analysis already done on ACO. What is the right move?',
    'Short-book crowding is the multi-name version of single-name squeeze risk — the joint probability of multiple squeezes happening together during a hedge-fund de-grossing is materially higher than the product of independent probabilities; the right response is to reduce the most-crowded short positions even if each individually looks fine on borrow and days-to-cover',
    [
      ['Short-book crowding is already captured by the single-name squeeze metrics on each position', 'Single-name metrics (borrow, days-to-cover, short interest) miss the joint-stress risk — the squeeze in one name during a de-grossing triggers covering in others through the same prime broker exposure. The metrics are necessary but not sufficient.'],
      ['Treat the crowded shorts as positive signal because hedge-fund consensus is usually right on shorts', 'Hedge-fund consensus on shorts has the same crowding-equals-risk dynamic as on longs. Treating the consensus as validation is exactly the move that surprised everyone in January 2021.'],
      ['Reduce the entire short book uniformly to manage crowding risk', 'Uniform reduction ignores the differentiated crowding across positions. The right move is to cut the most-crowded shorts hardest and leave the less-crowded ones less affected.'],
    ],
    'Short-book crowding multiplies single-name squeeze risk in a way the per-name metrics do not capture. The right discipline is to overlay the crowding map on the single-name analysis and reduce the most-crowded positions further than the per-name metrics alone would suggest. Joint risk is not the sum of independent risks.'),

  // -------------------------------------------------------------------------
  // LESSONS 7–8 — Drawdown root-cause (4400530–4400539)
  // -------------------------------------------------------------------------
  q(4400530, 'Career Skills', CHAPTER, 'Decompose the -2% drawdown',
    'Apex was -2% net in a +4% S&P month. The PM asks the analyst team to attribute the 6-point underperformance across three buckets: factor exposure, sizing/concentration, and idiosyncratic stock-picking. What is the cleanest first move?',
    'Run the risk system\'s factor attribution first to size the factor contribution (likely 1.5–2.5 points of the 6 given the quality-growth tilt and the value-leading tape), then attribute the residual to sizing and idiosyncratic by name — the discipline is to let the math constrain the narrative, not the other way around',
    [
      ['Start with the analyst team\'s narrative of what went wrong by name, then back into the factor numbers', 'Starting with narrative and back-fitting numbers is the most common analytical error in drawdown reviews. The narrative will rationalize whatever the team already believed; the math is the only constraint on that bias.'],
      ['Skip factor attribution because Apex is fundamental and idiosyncratic stock-picking is the only relevant lens', 'Refusing to look at factor attribution because the fund is fundamental is exactly how fundamental funds get repeatedly surprised by factor unwinds. The fact that the process is name-driven does not mean the outcome is factor-immune.'],
      ['Attribute the drawdown entirely to the largest single position (TCHO) since it is the biggest concentration', 'Attribution to the biggest position by inspection is a guess, not an analysis. TCHO may have driven a lot of the drawdown or very little — the attribution math is the only way to know, and starting with the conclusion poisons the analysis.'],
    ],
    'Drawdown decomposition starts with factor attribution because it is the only piece of the math that can constrain the narrative. Letting the team tell the story first and back-fitting numbers later produces a comfortable post-mortem that will be wrong in the same way next quarter. Math first, narrative second is the discipline that makes the review actually useful.'),

  q(4400531, 'Career Skills', CHAPTER, 'Single largest pain contributor',
    'After attribution, the analyst team identifies the largest single contributor to the drawdown: TCHO\'s -14% move, contributing -1.1% to the fund alone. The PM asks whether this is a sizing problem, an idea problem, or a tape problem. What is the right read?',
    'It is a sizing problem layered on a tape problem — TCHO\'s -14% reflects the factor backdrop (quality-growth unwind) more than any company-specific news, but the 8% position size meant the fund absorbed the full factor move on a single name; the lesson is concentration sizing in factor-exposed names, not the idea itself',
    [
      ['It is an idea problem because TCHO\'s thesis must have weakened to produce a -14% move', 'A -14% move on a high-multiple software name during a quality-growth unwind is often a factor move, not a thesis move. Calling it an idea problem without testing the factor backdrop confuses the cause and produces the wrong corrective action.'],
      ['It is purely a tape problem because the factor backdrop drove the move', 'Calling it purely a tape problem is half-right — the factor drove the per-share move, but the *fund-level pain* came from the 8% size. The sizing decision is the lever the PM controls, and ignoring it leaves the same exposure for next quarter.'],
      ['The attribution is unclear and the PM should wait for next quarter to read the pattern', 'Waiting on attribution that is already in front of you is the same discipline failure as in any other analytical question. The PM\'s job is to commit to a read on the available information, not to defer.'],
    ],
    'Single-name pain attribution separates the per-share move (often factor) from the fund-level pain (always sizing). TCHO\'s drawdown was a factor move, but the fund-level damage came from a position that was too big for the factor exposure it carried. The lesson is sizing discipline on factor-exposed concentrations, not TCHO as a name.'),

  q(4400532, 'Career Skills', CHAPTER, 'Longs or shorts',
    'The attribution shows: longs contributed -3.8% of the -6-point underperformance versus the index; shorts contributed -2.2% (the shorts went up). The PM asks whether the drawdown was primarily a long-book or short-book event. What is the right read?',
    'Both — but the longs hurt more, which is the expected shape during a quality-growth unwind because the long book carries the factor exposure; the short book added pain because crowded shorts rallied on de-grossing, which the single-name analysis missed; the answer is "joint failure" with longs as the larger contributor',
    [
      ['Mostly longs because they contributed more to the drawdown', 'Naming "mostly longs" is technically right but stops at the headline. The PM needs the joint-failure read because the short book\'s contribution is not zero, and treating the short pain as a sidebar misses the crowding lesson.'],
      ['Mostly shorts because shorting in an up-tape is supposed to lose money', 'Shorts contributing 2.2 points is real, but a 30% short book in an up-tape should lose only ~1.2 points to direction (30% × 4% rally). The extra point is the crowded-short signal — calling it "expected from the up-tape" misses what is actually being said.'],
      ['Neither — the drawdown was driven by a single position', 'No single position explains -6 points relative. TCHO at 1.1 points is the biggest single name but the rest of the gap came from the rest of the book. Single-position explanations of multi-point relative drawdowns are usually wrong.'],
    ],
    'Long-versus-short attribution during a drawdown is rarely a clean split — it is usually a joint failure with one side larger. The discipline is to name both contributions, identify the factor or crowding mechanism behind each, and not let the larger side\'s share obscure the lesson on the smaller side. Both books need a corrective response, even if the magnitudes differ.'),

  q(4400533, 'Career Skills', CHAPTER, 'Process failure or tape failure',
    'After full decomposition, the PM asks the analyst team a sharper question: was this drawdown a process failure (we did the work and made the wrong calls) or a tape failure (the work was right and the tape moved against us)? What is the most useful framing?',
    'Mostly a tape failure with one process element — the quality-growth tilt and the crowded-short exposure were known and accepted, so the tape moving against them is not a process failure; but the 8% TCHO sizing was a process choice that did not adequately weight factor concentration, and that piece is the corrective lesson',
    [
      ['Pure process failure because a -2% month means the team made wrong calls', 'Calling any drawdown a pure process failure is the over-correction that breaks fund culture. Tapes move against well-constructed portfolios regularly, and conflating tape with process produces over-reactions that compound the damage.'],
      ['Pure tape failure because the factor backdrop drove the loss', 'Calling it pure tape failure absolves the PM from the sizing discussion. The factor backdrop was foreseeable in shape if not in timing, and the sizing decision is part of the process — treating the whole drawdown as tape lets the process error escape review.'],
      ['The distinction does not matter because the P&L is the same either way', 'The distinction is exactly what determines the corrective response. Tape failures call for patience and possibly modest re-positioning; process failures call for structural change. Treating them as interchangeable is the failure to learn from the drawdown.'],
    ],
    'Process-versus-tape attribution determines the corrective response. The Apex drawdown was mostly tape (quality-growth unwind in a value-leading month) with one process element (factor-concentrated sizing on TCHO). Naming the split — not collapsing to one or the other — is what lets the PM correct the right thing without over-correcting the rest.'),

  q(4400534, 'Career Skills', CHAPTER, 'Stress test against a 2018-style unwind',
    'The PM asks the risk team to stress-test the portfolio against a repeat of the Q4 2018 quality-growth unwind (when the same factor combination Apex carries today saw a -8% to -12% relative move). What is the most useful framework for the test?',
    'Run two scenarios: a base case using 2018 factor moves applied to the current book\'s factor exposures, and an adjusted case using current crowding and de-grossing dynamics (which were less severe in 2018); the gap between the two is the additional risk Apex carries today that the historical analog understates',
    [
      ['Apply 2018\'s sector and factor moves to today\'s book as a single scenario', 'A single-scenario stress test using 2018 moves understates the current risk because the crowding environment is more concentrated than it was in 2018. The right test acknowledges that the historical analog is a floor, not a complete forecast.'],
      ['Stress tests on historical analogs are not useful because the next drawdown will be different', 'Historical analogs are imperfect but they are the only systematic way to test joint-factor exposures under stress. Refusing the test because the future will differ leaves the fund with no quantitative read on tail risk.'],
      ['Stress-test only the worst-performing day of 2018 to bound the worst case', 'Single-day stress tests under-estimate cumulative drawdown risk because de-grossing tends to be multi-day. The right test covers the full episode, not the single worst print.'],
    ],
    'Stress testing against historical analogs is the discipline that turns "we have a factor tilt" into "this is how much it costs us if the factor unwinds." Running two scenarios — base case and crowding-adjusted — surfaces the additional risk that the historical analog understates. The gap is what the PM has to be comfortable with at current sizing.'),

  q(4400535, 'Career Skills', CHAPTER, 'LP letter communication',
    'The PM has to write the LP letter explaining the -2% quarter. Apex\'s LPs are mostly endowments and family offices who have seen Apex through one prior drawdown. The PM is debating how much detail to include on the factor attribution. What is the right framing?',
    'Lead with the factor attribution because LPs sophisticated enough to invest in long/short hedge funds will respect a clear quantitative explanation more than a narrative one; name the quality-growth unwind, the size of the contribution, and the lesson on sizing — and explicitly state what is being changed and what is not',
    [
      ['Keep the letter brief and high-level — LPs do not want technical detail during a drawdown', 'Brief and high-level letters during a drawdown read as evasive. Endowment and family-office LPs are exactly the audience that wants the quantitative breakdown, and giving them less than they want produces more questions, not fewer.'],
      ['Lead with the narrative of why the team remains confident in the strategy', 'Leading with confidence before explanation reads as defensive. The letter has to first earn the trust by being clear about what happened, then make the case for what stays the same.'],
      ['Avoid mentioning the factor exposure to keep the focus on stock-picking', 'Hiding the factor attribution because it might worry LPs is the move that produces a much larger problem six months later when the next drawdown reveals the same exposure. Transparency during the first drawdown is the only credibility currency available for the second.'],
    ],
    'LP letters during a drawdown earn or lose trust based on whether the explanation matches the sophistication of the audience. Endowment and family-office LPs read the letter for clarity, not comfort — leading with the factor attribution, the sizing lesson, and the explicit list of changes (and non-changes) is the move that preserves trust through the next quarter.'),

  q(4400536, 'Career Skills', CHAPTER, 'Tone of the LP letter',
    'The drafting analyst proposes opening the LP letter with: "We are disappointed in this quarter\'s result and want to address it directly." The PM is debating whether this is the right tone. What is the more careful framing?',
    'The tone is right — direct acknowledgment without over-apology — but pair it with a specific framing of what "disappointed" actually means in numbers: -2% net versus +4% S&P, year-to-date still positive, three-year track record intact; tone without specifics reads as performative, specifics without tone reads as cold',
    [
      ['Replace "disappointed" with "we underperformed" to be more neutral and factual', '"Underperformed" is more neutral but is also more clinical and reads as not taking responsibility. "Disappointed" is the right register for a fund that takes its results seriously — the fix is to add specifics, not to soften the language.'],
      ['Strengthen the language to "we are deeply concerned about this quarter" to show appropriate gravity', 'Escalating the language from "disappointed" to "deeply concerned" overstates the situation and invites LPs to read more into the result than the data supports. The tone should match the magnitude, not exceed it.'],
      ['Skip the apology language entirely and lead with the results and the explanation', 'Skipping acknowledgment entirely is the move that reads as defensive. Sophisticated LPs notice when a letter jumps straight to explanation without naming the disappointment — it is the small move that loses trust.'],
    ],
    'LP letter tone is a calibration problem: direct enough to acknowledge the result, specific enough to avoid being performative, and not so escalated that it overstates the magnitude. "Disappointed" paired with the actual numbers and the three-year context is the right register for a drawdown month that does not break the longer-term thesis.'),

  q(4400537, 'Career Skills', CHAPTER, 'Numbers to lead the LP letter',
    'The PM is choosing which numbers to lead the LP letter with. Options: (a) -2% net for the quarter, (b) +9% YTD, (c) 11% net IRR since inception, (d) 0.8 Sharpe since inception. What is the right lead?',
    'Lead with the quarterly number (-2%) and the comparison to the index (+4%), then immediately follow with YTD and since-inception context — sophisticated LPs will read the quarterly number first regardless of what you lead with, and burying it behind better numbers reads as evasive',
    [
      ['Lead with since-inception IRR to anchor on the long-term track record', 'Anchoring on since-inception IRR before addressing the quarterly result is exactly the move LPs notice as defensive. They came to the letter to read about the quarter; the long-term context is supportive, not load-bearing as the lead.'],
      ['Lead with YTD because it is still positive and contextualizes the quarter', 'YTD is useful context but also reads as cherry-picking if it precedes the quarterly result. The quarter is the topic of the letter; leading with anything else feels like avoidance even when YTD is favorable.'],
      ['Lead with Sharpe ratio to focus on risk-adjusted performance', 'Sharpe is a sophisticated framing but is the wrong lead for a quarterly drawdown letter — it reads as switching the metric to win the argument. Lead with what LPs are looking for, then add the supporting metrics.'],
    ],
    'LP letter leads should match what the audience is already looking for — and during a drawdown quarter that is the quarterly number versus the benchmark. Leading with anything else reads as evasive, even when the alternative number is genuinely flattering. Lead with the quarter, then add the context; the order is the message.'),

  q(4400538, 'Career Skills', CHAPTER, 'Handling a top-three LP redemption inquiry',
    'Three days after the LP letter goes out, the head of investments at one of Apex\'s top-three LPs calls the PM to ask whether they should consider a redemption at the next quarterly window. The PM is on the call. What is the right move?',
    'Acknowledge the question directly, offer an in-person follow-up to walk through the full attribution and forward positioning, and do not attempt to talk them out of redemption on the call; the goal is to earn another conversation in which the LP can make an informed decision, not to win the current one',
    [
      ['Make the case for retention on the call by walking through the factor attribution and the three-year track record', 'Making the retention case on the inquiry call reads as defensive and rushed. The right move is to offer a deeper conversation where the LP can absorb the full picture — the call is for acknowledgment, the follow-up is for substance.'],
      ['Ask the LP what would change their view and address those concerns specifically on the call', 'Asking what would change their view is well-intentioned but puts the LP in the position of having to articulate a position they may not yet have formed. The right move is to offer the substance proactively, not to extract a counter-position.'],
      ['Stay neutral on the inquiry and acknowledge that redemption is the LP\'s right', 'Treating the inquiry as purely procedural surrenders the relationship. The LP called for a reason — they are inviting engagement, not announcing a decision. The right response is to engage, just not to close the sale on the inquiry call.'],
    ],
    'LP redemption inquiries are invitations to engage, not announcements. The right move is to acknowledge directly, offer the deeper conversation, and resist the urge to win the current call. Sophisticated LPs notice the move toward substance and the avoidance of defensive selling — the discipline is to earn the next conversation, not to close the current one.'),

  q(4400539, 'Career Skills', CHAPTER, 'Discussing specific positions in the LP letter',
    'The PM is debating whether to name TCHO specifically as the largest contributor to the drawdown in the LP letter. Naming it is more transparent but creates a marker LPs may track; not naming it is conservative but less specific. What is the right call?',
    'Name TCHO — the LPs know it is a top position and inferring it from the attribution is trivial; refusing to name it after they have already inferred it reads as opacity; pair the naming with a clear statement of forward conviction (or trim) so that the position is contextualized in a forward decision, not just a backward attribution',
    [
      ['Do not name TCHO because it creates an LP-tracked marker that constrains future flexibility', 'LPs will track the position whether or not you name it — TCHO is a top-three holding by size. Refusing to name it does not give you flexibility; it gives you an opacity tax on the next conversation.'],
      ['Name TCHO only if the position has been trimmed, so the naming is paired with action', 'Conditioning the naming on having taken action makes the letter feel choreographed and is also impossible to apply consistently across all top positions. The discipline is transparency, not action-conditional disclosure.'],
      ['Name every contributor in the top five to give a complete picture', 'Naming every contributor flattens the signal — LPs read a long list of named positions as a different kind of opacity (information dump). Name the load-bearing one, contextualize it, and give the others by category.'],
    ],
    'Naming specific positions in the LP letter is a transparency-versus-flexibility trade-off, but the trade-off is usually false: LPs already know the top positions. Naming the load-bearing contributor (TCHO) with a forward-conviction statement is more credible than withholding it, and the apparent flexibility cost is mostly imaginary. Transparency on the load-bearing names is the move that compounds trust.'),

  // -------------------------------------------------------------------------
  // LESSONS 9–10 — Forward positioning (4400540–4400549)
  // -------------------------------------------------------------------------
  q(4400540, 'Career Skills', CHAPTER, 'New-ideas pipeline shape',
    'Heading into next quarter, Apex\'s new-ideas pipeline holds 14 long candidates and 7 short candidates, with the longs concentrated in software and consumer (matching the existing tilt). The PM asks the analyst team to evaluate the pipeline shape. What is the right read?',
    'The pipeline is concentrated in the same factor exposures the fund is already long — adding from it would deepen the quality-growth tilt that just drove the drawdown; the right work is not to scrap the pipeline but to ask whether the team has been sourcing toward the existing book or toward the diversifying ideas the fund actually needs',
    [
      ['The pipeline is healthy with 14 long candidates — execute on the best ideas', 'Pipeline count is not a quality measure when the count is concentrated in the same factor exposure. Adding from a same-tilt pipeline compounds the exposure that just hurt, regardless of how good any individual idea is.'],
      ['The pipeline is poor because it lacks diversity — pause new positions until balance returns', 'Pausing the pipeline is over-correction. The right move is to consciously source diversifying ideas alongside the existing pipeline, not to freeze the team.'],
      ['Pipeline composition is the team\'s judgment and the PM should not override it', 'Pipeline composition is a portfolio-construction question, which is exactly the PM\'s judgment. Letting the team\'s sourcing biases determine the book\'s factor exposure is how funds drift into unintended tilts.'],
    ],
    'New-ideas pipeline shape reveals the team\'s sourcing biases, which feed directly into the portfolio\'s factor exposure. A same-tilt pipeline compounds the existing exposure; the discipline is to consciously source diversifying ideas, not to scrap the pipeline or to defer to it. The PM\'s judgment on pipeline shape is part of the portfolio decision, not separate from it.'),

  q(4400541, 'Career Skills', CHAPTER, 'Rebalancing the long book',
    'The PM decides to trim TCHO by 1.5% and MDC by 0.5%, freeing ~$65M of capacity. Two of the strongest new-idea candidates are also software names with similar factor exposure. What is the right allocation?',
    'Allocate ~$25M to a diversifying idea outside TMT (the team has two consumer staples candidates that would reduce growth-factor exposure) and hold the remaining ~$40M as dry powder; refilling capacity with same-tilt names defeats the purpose of the trim',
    [
      ['Allocate the full $65M to the two software candidates since they are the highest-conviction ideas', 'Refilling the freed capacity with same-tilt ideas exactly undoes the trim. The trim is meant to reduce factor concentration; replacing it with similar exposure is bookkeeping, not portfolio construction.'],
      ['Allocate proportionally across all 14 long candidates to maximize idea diversification', 'Proportional allocation across 14 names dilutes conviction and defeats the concentrated-bet philosophy of a $3.2B fund. Idea diversification is not the same as broad allocation — it is concentrated bets in different parts of the factor space.'],
      ['Hold the full $65M as dry powder until the drawdown resolves', 'Holding all the freed capacity as dry powder under-utilizes the trim. Some dry powder is reasonable; full reservation effectively turns the trim into a gross-reduction decision, which is a separate question.'],
    ],
    'Rebalancing the long book uses the trim to change the factor profile, not just the size. The right work is to deploy some of the freed capacity into diversifying ideas (different factor space), hold some as dry powder, and resist the urge to refill with the same exposures. Trimming and refilling in the same factor is a procedural exercise that produces no portfolio change.'),

  q(4400542, 'Career Skills', CHAPTER, 'Rebalancing the short book',
    'The PM has decided to cover the LegacyTelco short (M&A announcement) and trim ACO by 30% (squeeze risk). This reduces gross short by ~$50M. Of the 7 short-idea candidates, 4 are crowded-short names. What is the right move?',
    'Allocate selectively — avoid the crowded-short candidates entirely given the current crowding context, deploy ~$20M to the two non-crowded ideas the team has, and reduce the short book\'s aggregate crowding score; the rebalance is the moment to deliberately lower crowding exposure, not to refill with similar profiles',
    [
      ['Allocate to all 7 candidates proportionally to maintain short-book count', 'Maintaining count for its own sake mistakes activity for portfolio change. The short book\'s count is less important than its joint risk profile, and replacing the LegacyTelco/ACO reductions with crowded shorts re-creates the problem.'],
      ['Skip the crowded shorts but full-size into the non-crowded names', 'Full-sizing into the non-crowded names without considering single-name diligence depth produces a sizing decision driven by avoidance, not conviction. The right move is to allocate selectively at conviction-driven sizes, not maximally into the alternative.'],
      ['Reduce overall short exposure and increase index hedges to replace the directional component', 'Replacing single-name shorts with index hedges is a real option but is a different strategic decision — it changes the alpha source. The current rebalance is for the short book; the index-hedge decision belongs at the gross-exposure conversation.'],
    ],
    'Short-book rebalancing is the moment to act on the crowding read from the prior lesson. Selectively avoiding crowded candidates, deploying conviction-sized to non-crowded ones, and accepting a smaller short book is the move that lowers joint-stress risk without surrendering alpha. The discipline is to lower the crowding score by composition, not by count.'),

  q(4400543, 'Career Skills', CHAPTER, 'Adding to TCHO into the drawdown',
    'After the trim, TCHO sits at 6.5% of the fund. The stock has fallen another 4% in two weeks and the analyst team is now arguing for adding 1% back into the weakness because the thesis is intact and the price is lower. What is the right call?',
    'Do not add back — the trim was driven by concentration and factor exposure, not by price, and adding back on a price-only argument re-creates the exact sizing risk that just hurt the fund; the right move is to wait for new information (next earnings, factor backdrop change), not for a lower price',
    [
      ['Add 1% because the thesis is intact and the multiple has compressed further', 'Adding on multiple compression without a change in the concentration or factor argument is exactly the move that produced the drawdown in the first place. Price-only adds are sizing decisions dressed up as conviction decisions.'],
      ['Add 0.5% as a compromise that signals conviction without re-creating concentration', 'Compromise adds are usually the worst version of the decision — small enough that they do not meaningfully express conviction, large enough that they re-introduce the sizing risk. Either the case is strong enough to add meaningfully or it is not strong enough to add at all.'],
      ['Trim further to 5% to take more risk off until the factor backdrop normalizes', 'Further trim on a stable thesis is over-correction. The 6.5% is the deliberate post-trim size; moving it again without new information is the kind of churning that LPs notice and that adds no alpha.'],
    ],
    'Adding into a drawdown is justified by new information, not by price. The TCHO trim was a concentration decision; adding back because the price has moved further down is the exact framework the trim was meant to escape. Discipline is holding the new size until something material changes — not until the price hits a number that feels comfortable.'),

  q(4400544, 'Career Skills', CHAPTER, 'Replacing RTCO if the thesis breaks',
    'The PM has decided RTCO\'s turnaround is delayed-to-breaking and will exit the position over the next two weeks. The retail sector still has ideas the team likes (mostly off-price retailers with positive comps). What is the right framework for the replacement?',
    'Do not feel obligated to maintain sector exposure — RTCO was a specific turnaround thesis, not a generic retail position; if the team\'s best retail ideas are off-price names with comp momentum (a different thesis), evaluate them on their own merits, but the fund does not "owe" the sector any allocation',
    [
      ['Replace RTCO with an equal-sized off-price name to maintain retail sector exposure', 'Sector-exposure replacement is exactly the wrong framework — RTCO\'s capital is now uncommitted, and putting it back into retail because retail "needs to be represented" is procedural thinking. The right framework evaluates ideas on conviction, not on sector continuity.'],
      ['Hold RTCO\'s capital as dry powder indefinitely', 'Holding indefinitely is also procedural — it treats the exit as a defensive move rather than a portfolio decision. Some dry powder is fine; permanently retaining the capacity without evaluating the bench is under-utilization.'],
      ['Replace RTCO with the highest-conviction long candidate regardless of sector', 'This is closer to right but misses that "highest conviction" should be weighted by what the existing portfolio already has too much of. The right framework is conviction + portfolio fit, not conviction alone.'],
    ],
    'Replacement decisions after an exit should free the PM from sector-continuity thinking. RTCO\'s capital is uncommitted; the next allocation should follow conviction and portfolio fit, not the gap left in retail. The fund does not owe any sector representation, and treating exits as sector-replacement events is procedural construction rather than idea-driven construction.'),

  q(4400545, 'Career Skills', CHAPTER, 'Risk limits review — single-name cap',
    'After the TCHO experience, the risk team proposes lowering the single-name cap from 10% to 7%. The PM is debating whether this is the right corrective action. What is the cleanest framework?',
    'Lower the cap with a factor-adjusted overlay — a flat 7% cap solves the TCHO-style problem but is too restrictive for low-factor-exposed names; the more useful policy is "7% for factor-exposed names, 10% for factor-neutral names" so that the cap reflects the joint sizing-and-factor risk, not just the notional weight',
    [
      ['Lower to 7% flat to avoid recurrence of the TCHO concentration', 'Flat caps over-correct on the simple cases and miss the harder ones — a factor-neutral name at 8% is materially less risky than a factor-exposed name at 8%, but a flat 7% cap treats them identically.'],
      ['Keep at 10% because the policy worked as designed and the issue was sizing judgment within the policy', 'Keeping the policy unchanged ignores that the existing limit allowed a sizing that did real damage. Some policy refinement is warranted; saying "the policy is fine, just exercise better judgment" is the easiest way to repeat the mistake.'],
      ['Lower to 5% to be conservative until the team has rebuilt confidence', 'Lowering to 5% is over-correction and reduces the fund\'s ability to express conviction on its highest-quality ideas. The right adjustment is targeted at the joint factor-and-sizing risk, not the headline concentration alone.'],
    ],
    'Risk limit reviews after a drawdown should respond to the specific failure mode without over-constraining the rest of the strategy. The TCHO lesson was sizing-meets-factor-exposure, not raw concentration — so the policy refinement should make the cap factor-aware, not just lower. Surgical policy changes beat blunt ones.'),

  q(4400546, 'Career Skills', CHAPTER, 'Risk limits review — sector cap',
    'TMT is currently 47% of the long book versus the prospectus cap of 50%. The risk team proposes lowering the sector cap to 40%. The PM is concerned this will force selling of high-conviction names. What is the right balance?',
    'Lower the cap to 42–43% rather than 40% — the existing 47% is uncomfortably close to the old cap and exposes the fund to a forced trim if any single TMT name appreciates; a modest reduction creates a real buffer without forcing the immediate sale of high-conviction names',
    [
      ['Lower to 40% as proposed even if it forces high-conviction trims', 'Lowering by 7 points immediately forces ~$200M of TMT trims at the moment LPs are watching most carefully. The right policy change is one that does not require firefighting at the same time it is implemented.'],
      ['Hold the cap at 50% because no one is at the limit', '47% is "no one is at the limit" only on a generous read — the buffer is 3 points, which a single TCHO-style move can erase in a week. The PM\'s job is to set the buffer before it is needed, not to argue the limit is not binding.'],
      ['Eliminate sector caps and rely on factor exposure limits instead', 'Replacing sector caps with factor limits is a real reform but is a much larger policy change than the current review can accommodate. The risk policy should evolve in steps the team can implement and LPs can absorb.'],
    ],
    'Sector cap reviews should create a usable buffer between the current exposure and the limit, not redefine the limit so aggressively that immediate trimming is required. 42–43% gives the fund breathing room while signaling to LPs that concentration is actively managed. Surgical policy refinement, not headline numbers, is what changes behavior in the next quarter.'),

  q(4400547, 'Career Skills', CHAPTER, 'Net and gross exposure into earnings',
    'Earnings season starts in three weeks. Apex is currently at 130% long gross / 30% short gross (100% net). Historically the fund has reduced gross by 10–15 points into earnings season to dampen idiosyncratic risk. The PM asks whether to follow the historical pattern. What is the right read?',
    'Reduce gross modestly (5–10 points) but not by the full historical amount — the drawdown context means the fund\'s risk budget is already constrained, and a large gross reduction on top of the drawdown effectively becomes a signal that something is wrong; modest gross reduction handles earnings-specific risk without compounding the LP message',
    [
      ['Reduce by the full historical 10–15 points because the pattern is well-established', 'Mechanical adherence to historical patterns ignores the current context. The right gross level into earnings season depends on the current risk budget, not on the standard playbook applied without modification.'],
      ['Hold gross flat because reducing during a drawdown signals weakness to LPs', 'Holding flat ignores that earnings season does carry real idiosyncratic risk regardless of LP perception. The discipline is to find the modest reduction that addresses the risk without amplifying the LP signal — not to choose between the two.'],
      ['Increase gross to take advantage of dispersion during earnings season', 'Increasing gross during a drawdown into a high-idiosyncratic-risk window is the textbook sizing error. The dispersion case is real but the timing — coming off a drawdown — makes the cost-of-being-wrong asymmetric.'],
    ],
    'Net and gross exposure decisions during a drawdown have to balance the standard playbook against the LP context. The historical 10–15 point reduction into earnings is right in normal conditions; a 5–10 point modest reduction is right when the fund is already in a drawdown and LP attention is heightened. Context-sensitive application of the playbook is the discipline that beats either mechanical adherence or context-free escalation.'),

  q(4400548, 'Career Skills', CHAPTER, 'Stop-loss discipline on the BIOSP short',
    'BIOSP has rallied 18% since Apex entered the short. The fund\'s informal stop-loss convention is to review at -15% and consider action at -25%. The PM asks whether the convention should be applied mechanically. What is the right framework?',
    'Use the stop as a *review trigger*, not as a mechanical exit — a structural short with a defined catalyst (Phase 3 readout) has a different risk profile than a momentum short, and an 18% adverse move ahead of the catalyst is not the same signal as an 18% move after the catalyst; the discipline is to apply the stop\'s logic, not its mechanics',
    [
      ['Apply the stop mechanically at -25% to enforce discipline regardless of thesis', 'Mechanical stops on structural shorts with defined catalysts produce the worst outcome — exiting before the catalyst resolves and forfeiting the asymmetric payoff. Stops are heuristics, not laws.'],
      ['Ignore the stop because the thesis is intact and the catalyst is approaching', 'Ignoring the stop is the symmetric error to mechanical application. The stop\'s purpose is to force a re-underwriting at adverse price action, and skipping that re-underwriting because the thesis is intact misses the discipline the stop is meant to enforce.'],
      ['Tighten the stop to -10% to limit further losses', 'Tightening the stop ahead of the catalyst makes a forced cover before the catalyst more likely — exactly the outcome the put-spread overlay was meant to prevent. The structure already exists to manage the path-dependent risk; tightening the stop duplicates and overrides it.'],
    ],
    'Stop-loss discipline is a re-underwriting trigger, not a mechanical exit. On a structural short into a defined catalyst, the right work at an adverse price is to confirm the thesis, confirm the option structure, and decide whether to hold — not to exit on the price level. Applying the stop\'s *logic* (force re-underwriting) without its *mechanics* (auto-exit) is the discipline.'),

  q(4400549, 'Career Skills', CHAPTER, 'PM\'s one-page IC synthesis',
    'The PM has to deliver a one-page synthesis to the Apex investment committee summarizing the quarter, the corrective actions, and the forward positioning. The analyst team has provided full attribution decks and forward-pipeline notes. What is the cleanest structure for the one-pager?',
    'Three sections: (1) what happened — factor-attributed drawdown with named contributors (TCHO, crowded shorts); (2) what we are changing — TCHO trim, ACO reduction, LegacyTelco unwind, factor-aware single-name cap; (3) what we are not changing — strategy, quality-growth tilt as a deliberate choice, sector tilts as idea-driven outputs; the discipline is to be explicit about both what changes and what does not',
    [
      ['Lead with the strategy unchanged, then list the tactical adjustments, then close with the attribution', 'Leading with "strategy unchanged" reads as defensive — the IC wants to see the attribution first because that is what determines whether the changes are adequate. Burying the attribution behind the reassurance loses the room\'s trust before the substance lands.'],
      ['Single-section summary with the attribution and the changes interwoven', 'A single-section interwoven format loses the IC reader, who needs the clear hierarchy of "what happened / what changes / what stays" to absorb the synthesis quickly. Structure is the load-bearing piece of the one-pager.'],
      ['Two sections: attribution and forward positioning, omitting the "what we are not changing" section', 'Omitting the explicit list of unchanged elements is the most common one-pager mistake. The IC needs to know what stays in place as much as what changes — silence on unchanged elements reads as "everything is up for grabs," which is rarely the right signal.'],
    ],
    'The PM\'s one-page IC synthesis is structured around the three questions the IC actually asks: what happened, what are you changing, what are you keeping the same. Each section earns its place — attribution earns the case for the changes, the changes earn the credibility for the unchanged elements, and the explicit list of unchanged elements prevents the IC from over-reading the corrective actions. Three sections, in order, each load-bearing.'),
]
