import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// HF CH2 — Thesis Formation and Variant Perception
// ----------------------------------------------------------------------------
// 43 new questions (IDs 4400100–4400142) extending the existing 7-question
// chapter in careerAgentGeneratedRoadmapFinance.ts (IDs 4103040, 4103041,
// 4105106, 4105107, 4107380, 4107388, 4107850).
//
// Coverage:
//   - Thesis anatomy: catalyst, horizon, sizing, exit, invalidation
//   - Variant perception: where you diverge, why the gap is durable, what
//     consensus misses
//   - Information edge: alt data, channel checks, expert networks under
//     Reg FD / MNPI constraints, satellite, scraping, credit-card panels
//   - Frameworks: scenario trees, base/bull/bear, expected value
//   - Common mistakes: anchoring to cost, confirmation bias, sunk cost
//   - Catalyst typology: hard, soft, structural
//   - Time-horizon mismatch: thesis right, timing wrong
//   - Position re-underwriting: when to re-examine
//   - Quantifying conviction: implied probabilities, Kelly intuition,
//     concentration limits
//   - Memo discipline: written thesis, kill criteria, exit plan documented
//     BEFORE entering
//
// Voice: matches jargonBusters.ts and the existing HF chapter — bespoke
// whyWrong rationales, no strawman distractors, evidence-anchored language.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe HF Ch2 canonical bank'

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

const CHAPTER = 'Thesis Formation and Variant Perception'

// Difficulty distribution: 13 at 3, 22 at 4, 8 at 5 (total 43).
export const HF_CH2_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Thesis anatomy (8 Qs)
  4400100: 3, // What a complete thesis includes
  4400101: 3, // Catalyst as required component
  4400102: 4, // Invalidation criteria written in advance
  4400103: 4, // Exit rule before entry
  4400104: 3, // Horizon explicit in the thesis
  4400105: 4, // Sizing tied to conviction not enthusiasm
  4400106: 4, // Falsifiable claim vs qualitative gut
  4400107: 5, // Distinguishing thesis from narrative

  // Variant perception (6 Qs)
  4400108: 3, // Where the divergence sits
  4400109: 4, // Why the gap is durable
  4400110: 4, // What consensus is actually pricing
  4400111: 5, // Variant view vs simply being early
  4400112: 5, // Reading sell-side consensus vs buy-side positioning
  4400113: 3, // Differentiated view requires a model of consensus

  // Information edge and Reg FD / MNPI (7 Qs)
  4400114: 4, // Expert network call mosaic theory
  4400115: 5, // MNPI red flags during an expert call
  4400116: 3, // Channel checks scope and limits
  4400117: 4, // Credit-card panel coverage bias
  4400118: 4, // Satellite imagery interpretation
  4400119: 4, // Web scraping legality and rep risk
  4400120: 3, // Reg FD selective disclosure

  // Scenario / EV framework (5 Qs)
  4400121: 3, // Base / bull / bear discipline
  4400122: 4, // Expected value vs point estimate
  4400123: 4, // Probability-weighted upside vs gut feel
  4400124: 5, // Skew and tail outcomes
  4400125: 4, // Asymmetry framing

  // Common thesis mistakes (5 Qs)
  4400126: 3, // Anchoring to entry price
  4400127: 4, // Confirmation bias in diligence
  4400128: 4, // Sunk cost in a losing position
  4400129: 3, // Falling in love with management
  4400130: 5, // Distinguishing new information from price action

  // Catalyst typology (3 Qs)
  4400131: 3, // Hard vs soft catalysts
  4400132: 4, // Structural catalysts (index rebalance, forced selling)
  4400133: 4, // Catalyst that does not move the stock

  // Time-horizon mismatch (3 Qs)
  4400134: 4, // Right thesis, wrong window
  4400135: 5, // Holding vs sizing down on timing slip
  4400136: 4, // Opportunity cost of dead money

  // Position re-underwriting (3 Qs)
  4400137: 3, // Quarterly re-underwrite cadence
  4400138: 4, // Re-underwrite after each catalyst
  4400139: 4, // Price-move triggered re-underwrite

  // Quantifying conviction (2 Qs)
  4400140: 5, // Implied probability from sizing
  4400141: 4, // Kelly intuition and over-sizing

  // Memo discipline (1 Q)
  4400142: 3, // 1-pager written before entering
}

export const hfCh2Questions: Question[] = [
  // -------------------------------------------------------------------------
  // THESIS ANATOMY (4400100–4400107)
  // -------------------------------------------------------------------------
  q(4400100, 'Career Skills', CHAPTER, 'Thesis anatomy',
    'An analyst pitches a long: "Stock trades 12x forward earnings, business is high quality, management is excellent." A senior PM rejects it. What is missing that the PM needs before sizing?',
    'Catalyst, horizon, sizing rationale, exit rule, and the specific evidence that would invalidate the thesis',
    [
      ['A more detailed DCF with five sensitivity tables', 'A thicker model does not turn a description into a thesis. The PM rejected the pitch because it has no claim that can be tested or invalidated, not because the math was thin.'],
      ['A higher conviction tone and a clearer recommendation to buy', 'Conviction is an output of the work, not a substitute for it. Rephrasing the same description more confidently will get rejected for the same reason.'],
      ['A quote from the CEO on the recent earnings call', 'Public CEO commentary is already in consensus. Pulling a quote adds nothing the PM cannot read in the transcript.'],
    ],
    'A real thesis names what will happen, when, why the market will recognize it, how it sizes in the book, what the exit looks like, and what would prove it wrong. Anything less is a description of a company, not a position.'),

  q(4400101, 'Career Skills', CHAPTER, 'Catalyst as a required component',
    'A pitch claims a stock is structurally undervalued but identifies no event over the next 12–18 months that would force the market to reprice. Why does this trouble a catalyst-driven PM?',
    'Without a catalyst, the fund pays carry on a position whose only path to repricing is the market eventually agreeing — and "eventually" is not a fund-cycle answer',
    [
      ['Stocks always need a catalyst to move, so the thesis is automatically wrong', 'Stocks can drift higher on fundamentals without a single named event. The issue is not that catalysts are required for any move, but that catalyst absence makes timing indefinite for a fund that must report PnL.'],
      ['The thesis must be wrong because cheap stocks always stay cheap without a catalyst', 'Cheap stocks sometimes do re-rate without a clear catalyst. The PM\'s concern is opportunity cost and timing, not a guaranteed value trap.'],
      ['Catalysts are a sell-side concept and not relevant to fundamental investing', 'Catalysts are central to hedge-fund underwriting precisely because the fund holds capital that could be invested elsewhere. Calling them sell-side concepts misreads the strategy.'],
    ],
    'A catalyst is the bridge between "I am right" and "the market agrees within my horizon." A thesis with no catalyst is a bet that conviction alone will eventually pay — which works in academic finance, not in a fund that marks to market quarterly.'),

  q(4400102, 'Career Skills', CHAPTER, 'Invalidation criteria written in advance',
    'A PM insists every memo include "what would make me sell this even at a loss." Why is writing the invalidation criteria before entry, rather than reacting to news as it arrives, important?',
    'Once a position is on, motivated reasoning and loss aversion reshape how the analyst reads new information — the pre-entry criteria preserve the judgment of the unbiased analyst',
    [
      ['Pre-written criteria let the analyst avoid all losses by exiting before any drawdown', 'Invalidation criteria do not prevent drawdowns — they prevent indefinite holding of a broken thesis. Some loss between entry and invalidation is normal.'],
      ['It is a compliance requirement that the SEC enforces on hedge fund memos', 'Pre-written kill criteria are a discipline, not a regulatory mandate. The SEC does not police thesis structure.'],
      ['Writing it down makes the thesis impossible to change later', 'Pre-written criteria can be updated when new information arrives — they are not a vow of silence. The point is to make changes deliberate rather than rationalised after the fact.'],
    ],
    'The analyst before the trade and the analyst three weeks into a losing position are not the same person. Committing kill criteria to paper while you are still neutral is the cheapest insurance against the version of you that wants the position to work.'),

  q(4400103, 'Career Skills', CHAPTER, 'Exit rule documented before entry',
    'A long thesis hits its 12-month price target six weeks early. The PM and analyst had not discussed exit. What is the cost of having waited until now to think about it?',
    'The exit decision is being made under the influence of recent gains, which biases the analyst toward holding for "a little more" rather than evaluating fresh',
    [
      ['No cost — exits are best made in real time with all current information', 'Real-time exits with no prior framework are the most heavily biased decisions an analyst makes. Recency, anchoring, and house-money effects all push toward holding too long.'],
      ['The cost is that the fund will be forced to sell at the price target regardless of new information', 'A pre-set exit rule is not a robot — it is a framework that says when and why. New information can override it, but only deliberately.'],
      ['No cost because price targets are arbitrary and should always be ignored', 'If price targets are arbitrary, the original sizing was arbitrary, and the thesis was never falsifiable. The fix is sharper targets, not abandoning them.'],
    ],
    'An exit rule written before the trade is a contract with your unbiased self. Once the position is making or losing money, you are no longer that person — which is exactly when you most need the contract.'),

  q(4400104, 'Career Skills', CHAPTER, 'Horizon explicit in the thesis',
    'Two analysts pitch the same name. One says "this works over 12–18 months on the margin recovery." The other says "this is a great long-term compounder." Why does the PM treat these differently for the same book?',
    'A named horizon makes the thesis measurable inside the fund\'s observation window; "long-term compounder" defers measurement indefinitely and resists falsification',
    [
      ['Long-term theses are always wrong because hedge funds cannot hold positions for long periods', 'Plenty of hedge funds hold positions for years. The issue is not duration — it is whether the duration is named and tested, or left open-ended as a defense against being wrong.'],
      ['The 12–18 month thesis is automatically better because shorter horizons are always preferable', 'Short horizons are not inherently better; some theses genuinely need years to play out. The point is naming the horizon, not minimizing it.'],
      ['Long-term framing is preferred because it removes the pressure of quarterly performance', 'Removing measurement pressure is exactly the wrong reason to choose a long horizon. Horizons should reflect the thesis, not the analyst\'s comfort.'],
    ],
    'Horizon is one of the load-bearing parts of a thesis. Named horizons get tested; unnamed horizons quietly extend every time the thesis is missed, which is how a 12-month idea becomes a 5-year apology.'),

  q(4400105, 'Career Skills', CHAPTER, 'Sizing tied to conviction not enthusiasm',
    'An analyst loves a name and wants it at 5% of the book. The PM asks: "What is the implied probability you are assigning to your bull case?" The analyst has not done that math. Why does this matter?',
    'Position size should reflect the probability-weighted reward versus loss, not how excited the analyst feels — without the math, enthusiasm and conviction are indistinguishable',
    [
      ['It does not matter — experienced analysts can size by intuition without explicit probabilities', 'Intuition without a probability check is exactly how analysts oversize favorites and undersize uncomfortable but high-EV positions. The math is a check on enthusiasm, not a replacement for judgment.'],
      ['Sizing should always equal a fixed percentage regardless of conviction', 'Equal-weight sizing is a portfolio choice, but for an idea-driven hedge fund it surrenders the main lever the analyst has — concentrating capital behind the best work.'],
      ['Conviction and enthusiasm are the same thing in practice', 'They are systematically not the same. Enthusiasm is how the analyst feels about a story; conviction is how much of the book the analyst will stake on a falsifiable claim. Confusing them is the most common HF sizing error.'],
    ],
    'Sizing is the price you pay for being wrong. Translating a thesis into implied probabilities and asymmetric payoffs is how a 5% position survives partner cross-examination, while "I love this one" rarely does.'),

  q(4400106, 'Career Skills', CHAPTER, 'Falsifiable claim vs qualitative gut',
    'In a pitch the analyst says: "I love this management team, so the thesis is good." Why does this not survive as a thesis even if the manager is genuinely excellent?',
    'It contains no claim that could be proven wrong with future evidence — there is no measurable behavior of the business that would force the analyst to admit the thesis was mistaken',
    [
      ['Management quality is never relevant to a long thesis', 'Management quality is highly relevant — it is just not, by itself, a thesis. Stating it without a claim about specific business outcomes leaves nothing to test.'],
      ['Liking management is a sell-side anchor and disqualifies the pitch', 'Plenty of legitimate theses rest in part on management judgment. The issue is not the input — it is that "I love the team" has no observable consequence to track.'],
      ['It is fine as long as the analyst has met management in person', 'Personal meetings do not turn a qualitative impression into a falsifiable claim. The question remains: what would have to happen in the business for this thesis to be wrong?'],
    ],
    'A real thesis says: management will allocate capital in this specific way, the business will compound at this rate, retention will hold at this level — claims that future quarters can confirm or refute. "I love this team" is a feeling, not a position.'),

  q(4400107, 'Career Skills', CHAPTER, 'Distinguishing thesis from narrative',
    'A junior analyst presents a beautifully written story: declining incumbent, ascendant challenger, demographic tailwinds, AI-enabled product. The PM says, "This is a narrative, not a thesis." What is the actual distinction the PM is drawing?',
    'A narrative explains why the story is appealing; a thesis names the specific financial behavior, timing, evidence, and invalidation that turn the story into a testable, sized position',
    [
      ['Narratives are always wrong and theses are always right', 'Both can be right or wrong — the distinction is testability, not accuracy. A correct narrative without measurable consequences is still not a thesis.'],
      ['Narratives are for marketing and theses are for internal use, but they contain the same information', 'They contain materially different information. A narrative can omit numbers, horizon, sizing, and kill criteria; a thesis must include them.'],
      ['The PM is being pedantic — a good story is a good thesis', 'Plenty of good stories are bad trades. The PM is not being pedantic; she is asking what about the story is supposed to make the fund money in a specific window.'],
    ],
    'A narrative draws the analyst and reader to a conclusion. A thesis names the operations the conclusion implies, the evidence that would prove it, and the size that follows from probability-weighted payoff. Most pitches that fail confuse the two.'),

  // -------------------------------------------------------------------------
  // VARIANT PERCEPTION (4400108–4400113)
  // -------------------------------------------------------------------------
  q(4400108, 'Career Skills', CHAPTER, 'Where the divergence sits',
    'Variant perception requires naming where you disagree with consensus. An analyst says "I think this stock will go up." Why is this not yet a variant view?',
    'It identifies a direction but not the specific input — revenue trajectory, margin path, capital allocation, terminal value — where the analyst\'s number differs from the Street\'s number',
    [
      ['"I think this stock will go up" is sufficient because it is directional', 'Direction without locus is just a guess. The fund cannot size or test the position without knowing which line item the analyst is taking the other side of.'],
      ['Variant perception is only about price targets, not financial inputs', 'Price targets are downstream of input differences. A variant view that does not anchor on a specific input is not really variant — it is just a different target.'],
      ['Consensus is unknowable so variant perception cannot be measured', 'Consensus is observable in sell-side estimates, options-implied moves, positioning data, and call commentary. It is messy but absolutely measurable.'],
    ],
    'Variant perception is locating the specific line — gross margin, ARR growth, customer churn, terminal multiple — where you and the Street meaningfully disagree. Without the locus, there is no edge to defend.'),

  q(4400109, 'Career Skills', CHAPTER, 'Why the gap is durable',
    'The analyst sees gross margin 200 bps above consensus. The PM asks: "Why has the Street not caught up?" Why does this question matter even when the analyst\'s number is right?',
    'If the gap closes the day the next sell-side note refreshes its model, there is no time to build the position — durability of the gap is what determines whether the fund can actually capture the spread',
    [
      ['Durability does not matter because being right is enough', 'Being right is necessary but not sufficient. If the fund cannot build the position before the Street prints the same number, the gap evaporates into someone else\'s spread.'],
      ['The Street is always wrong, so gaps are always durable', 'The Street is wrong in specific places and right in others. Assuming systematic error is a way to avoid the harder question of why this particular gap persists.'],
      ['Durability is only relevant for shorts, not longs', 'Durability matters for both sides. A long with a one-day gap is as hard to capture as a short with the same window.'],
    ],
    'Variant perception is about edge, but edge has to be capturable. A view that the market will agree with tomorrow is not edge — it is regret. Durability comes from structural mispricing: coverage gaps, framing differences, time horizons the Street will not hold to.'),

  q(4400110, 'Career Skills', CHAPTER, 'What consensus is actually pricing',
    'Sell-side consensus EPS for next year is $4.20. The analyst projects $4.40. The stock falls on the print at $4.35. What did the analyst likely miss about consensus?',
    'Buy-side whisper expectations were above published sell-side, so $4.35 missed the bar the actual marginal trader was using',
    [
      ['The market is irrational and the move was wrong', 'Defaulting to "the market is irrational" is how analysts avoid learning what they missed. The move was not random — it priced an expectation the analyst was not measuring.'],
      ['Consensus and reported numbers are unrelated to stock moves', 'Consensus is exactly what the print is being measured against. Disconnecting the two abandons the variant-perception framework entirely.'],
      ['The company should have guided higher to set the bar correctly', 'Guidance practices vary, but the analyst\'s job is to understand the bar the buyer was actually using, not to wish the company had set it differently.'],
    ],
    'Published consensus is a floor, not the ceiling. The marginal trader is positioning against buy-side whispers, options-implied moves, and conviction patterns from the holder base. A serious thesis names which of these the analyst is taking the other side of.'),

  q(4400111, 'Career Skills', CHAPTER, 'Variant view vs simply being early',
    'An analyst is right that a name re-rates — three years after entering, after holding through a 40% drawdown. The PM says: "You were not early, you were wrong about the catalyst." Why does the PM frame it this way?',
    'A variant view that ignores horizon and catalyst is operationally indistinguishable from being wrong — the fund cannot live on right-eventually because intermediate drawdowns end positions and funds',
    [
      ['Being right is the same as being early, regardless of duration', 'In academic finance maybe; in fund management, a 40% drawdown often forces stop-outs, redemptions, or sizing down at exactly the worst moment. Eventually-right is wrong for the fund.'],
      ['The PM is being unfair because the trade ultimately worked', 'The trade worked for someone — possibly not the fund that held through the drawdown. PnL has a path, not just a destination.'],
      ['Horizons do not matter for variant perception', 'Horizons are part of variant perception precisely because they define when the gap closes. A view with no timing is a view with no falsifiability.'],
    ],
    'Variant perception lives or dies on horizon. "I am right and the market will agree eventually" is not a thesis — it is a hope. The discipline is naming the window in which the gap should close, and treating timing slips as evidence rather than vindication.'),

  q(4400112, 'Career Skills', CHAPTER, 'Reading consensus vs positioning',
    'Sell-side estimates are uniformly bullish. Short interest is at multi-year highs and the cost to borrow has climbed. How should an analyst reconcile published consensus with positioning data?',
    'Published estimates and actual positioning are separate signals — bullish estimates with heavy short positioning suggests the marginal trader is fading the sell-side view, and the analyst\'s variant view must account for both',
    [
      ['Estimates are the only consensus that matters; positioning is noise', 'Positioning often diverges from published estimates because the buy-side trades against narrative it does not believe. Treating positioning as noise misses half the picture.'],
      ['Short interest is always bearish and always correct', 'Short interest can reflect genuine bearish conviction, but it can also reflect hedging, pair trades, or a crowded short setting up for a squeeze. It is a signal, not an oracle.'],
      ['When estimates and positioning disagree, ignore both and use technicals', 'Switching frameworks because one signal contradicts another is how analysts end up with no framework. The reconciliation is the work, not the escape.'],
    ],
    'Consensus is a stack: published estimates, whispers, positioning, options-implied moves. When they diverge, the divergence itself is information about which group of investors is most committed to which view. A variant thesis must name which layer it is fading.'),

  q(4400113, 'Career Skills', CHAPTER, 'Differentiated view requires a model of consensus',
    'An analyst presents a thesis but cannot articulate what the market currently believes. The PM says: "You cannot be differentiated if you do not know what you are differentiated from." Why is this not a rhetorical jab?',
    'Without an explicit model of consensus, the analyst cannot prove the view is actually different — and may be paying for a position the market already holds',
    [
      ['The PM is being rhetorical; knowing consensus is optional for good analysis', 'It is not optional — it is the comparator. A view with no comparator cannot be sized as variant; it can only be sized as a guess.'],
      ['Consensus does not exist in any measurable form', 'Consensus is messily but measurably observable. Refusing to estimate it is refusing to do the variant-perception work.'],
      ['Modeling consensus is a sell-side activity, not buy-side', 'The sell-side publishes its own model of consensus. The buy-side has to build its own, because the published version is incomplete and lagging.'],
    ],
    'A differentiated view requires two models: yours and the market\'s. Without the second, the first is just an opinion. The hardest part of variant perception is often the consensus-modeling step, not the original-view step.'),

  // -------------------------------------------------------------------------
  // INFORMATION EDGE AND REG FD / MNPI (4400114–4400120)
  // -------------------------------------------------------------------------
  q(4400114, 'Career Skills', CHAPTER, 'Expert network call mosaic theory',
    'An analyst takes a call with a former regional VP from a target company. The expert offers detailed views on competitor pricing, sector hiring trends, and industry capital cycles — but explicitly declines to discuss his former employer\'s undisclosed numbers. How should the analyst use this call?',
    'As one input in a broader mosaic of industry signals — the expert\'s framing of pricing and hiring helps interpret public data, but it is not used to back into the former employer\'s undisclosed financials',
    [
      ['Press the expert for any specific information about his former employer, since the call was paid for', 'Paying for a call does not entitle the analyst to MNPI. Pressing past the expert\'s stated guardrails crosses both the expert network\'s policies and securities law.'],
      ['Discard the entire call because the expert refused to discuss his former employer', 'The industry context is the legitimate, valuable part of the call. Discarding it confuses MNPI guardrails with general unhelpfulness.'],
      ['Use the expert\'s general comments as a direct proxy for the former employer\'s numbers', 'Treating industry color as a stand-in for the specific company\'s undisclosed numbers is exactly the chain MNPI rules are designed to interrupt.'],
    ],
    'Expert networks are legitimate when the call sticks to industry context and the expert\'s general expertise. They become a problem when analysts use them to reconstruct an issuer\'s undisclosed numbers indirectly. The mosaic theory is sound; the moment a single call becomes the locus of the thesis, the analyst is in dangerous territory.'),

  q(4400115, 'Career Skills', CHAPTER, 'MNPI red flags during an expert call',
    'On an expert network call, the expert — still an employee of a publicly traded supplier — says: "I should not say this, but our biggest customer just cut their Q3 order by 40%, that has not been disclosed yet." What is the analyst\'s obligation?',
    'End the call immediately, document the disclosure, restrict trading in both the expert\'s employer and the customer until cleared by compliance, and treat the information as MNPI received',
    [
      ['Continue the call but discount the comment because the expert hedged with "I should not say this"', 'The hedge does not neutralize the information — if anything, it confirms the expert knew it was nonpublic. Continuing to listen extends the contamination.'],
      ['Trade on the information immediately since it was unsolicited', 'Unsolicited MNPI is still MNPI. Trading on it is securities fraud regardless of who initiated the disclosure.'],
      ['Tell the expert network the call was unproductive and move on without flagging compliance', 'Failing to flag is a compliance violation in its own right and exposes the firm and the analyst to severe consequences if the disclosure later surfaces.'],
    ],
    'Receiving MNPI by accident is the most dangerous moment in a hedge-fund analyst\'s week. The discipline is to end the call, restrict, document, and escalate — not to dilute or rationalize. Every serious shop has this protocol; the analyst\'s job is to execute it without hesitation.'),

  q(4400116, 'Career Skills', CHAPTER, 'Channel checks scope and limits',
    'An analyst calls 20 dealer locations to gauge inventory of a consumer product. Three locations report shortages. How should the analyst weight this signal?',
    'As an early, low-sample data point that suggests deeper sampling is worth doing — not as proof of sector-wide shortage',
    [
      ['Three confirmations are enough to size up the position immediately', 'Three out of 20 is 15% — directionally interesting, statistically tiny, and easily explained by store-specific factors. Sizing on this would be premature.'],
      ['Channel checks are unreliable and should be discarded', 'Channel checks are unreliable in isolation but informative in aggregate. Discarding the method because of one shallow sample misreads the technique.'],
      ['Ignore the three positive readings because 17 locations had inventory', 'The 17 locations with inventory are also data — but ignoring the three flags treats every observation symmetrically when the question is whether tail signals are pointing at a real trend.'],
    ],
    'Channel checks are a triangulation tool, not a verdict. Twenty calls is a starting sample; the answer it returns is "do more work" or "drop this thread," not "buy" or "sell." Treating shallow sampling as proof is one of the fastest ways an analyst learns the limits of the technique.'),

  q(4400117, 'Career Skills', CHAPTER, 'Credit-card panel coverage bias',
    'A credit-card panel shows 12% YoY growth for a consumer brand. The brand has expanded heavily into international markets, lower-income demographics, and cash-heavy regions over the past year. What is the panel most likely to be missing?',
    'Coverage of segments where the panel under-indexes — international, cash transactions, prepaid usage — meaning the panel\'s 12% may understate or overstate true growth depending on which segment drove the change',
    [
      ['Nothing — credit-card panels capture all consumer spending', 'Panels capture a sample, biased toward US, banked, credit-card-using consumers. They miss international, cash, debit, and prepaid in varying degrees depending on the panel.'],
      ['Credit-card panels are noise and should be ignored', 'Panels are noisy but useful when their coverage matches the company\'s footprint. They become misleading when the company\'s growth is in segments the panel does not cover well.'],
      ['The panel reading must be wrong because the company guided differently', 'Company guidance and panel data can both be partial views of the same reality. The question is not which is right but where each is most likely to be biased.'],
    ],
    'Every alt-data source has a coverage shape — what it sees clearly, what it sees partially, what it cannot see at all. Using credit-card panels well means knowing which of the company\'s revenue lines the panel actually represents, and discounting accordingly.'),

  q(4400118, 'Career Skills', CHAPTER, 'Satellite imagery interpretation',
    'Satellite parking-lot counts at a retailer\'s flagship stores show traffic up 8% YoY. The retailer has also closed a quarter of its smaller stores, redirecting traffic. How should the analyst interpret the satellite signal?',
    'The 8% lift may reflect traffic concentration from closed stores rather than organic same-store growth — the signal needs to be decomposed against the store-closure footprint',
    [
      ['8% confirms strong same-store sales and supports a long thesis', 'Conflating flagship parking-lot growth with same-store sales misses the store-closure migration. The same customers moving to fewer stores look like growth if the analyst ignores the denominator.'],
      ['Satellite data is too remote to be useful for analyst work', 'Satellite is genuinely useful when interpreted with the company\'s store-level footprint in mind. The issue is interpretation, not the data source.'],
      ['The 8% must be wrong because the company guided lower comp growth', 'Guidance and satellite can both be true if you understand what each measures. Calling the satellite wrong skips the decomposition work.'],
    ],
    'Alt data points at a phenomenon; the analyst has to determine what the phenomenon means. A naive read of flagship parking lots will read store-closure concentration as organic growth — exactly the trap satellite data sets for analysts who skip the decomposition.'),

  q(4400119, 'Career Skills', CHAPTER, 'Web scraping legality and reputation risk',
    'An analyst proposes scraping a competitor\'s website to track product pricing daily. Compliance flags the request. What are the substantive concerns beyond compliance saying "no"?',
    'Terms of service, computer fraud statutes, IP-rate throttling, and the reputational risk of being identified as the scraper all need to be evaluated — even when the data itself is publicly displayed',
    [
      ['Public web pages are always legal to scrape at any volume', 'Public display does not waive terms of service, and some statutes treat circumventing technical access controls as a separate violation regardless of public visibility.'],
      ['Compliance refusal ends the inquiry without further analysis', 'Understanding *why* compliance refused is part of building judgment for the next request. Treating it as a black box leaves the analyst guessing on every future case.'],
      ['Scraping is only a concern if the data contains personal information', 'PII raises additional concerns, but commercial scraping issues exist even for pure pricing data — terms of service, CFAA risk, and reputational exposure.'],
    ],
    'Web scraping sits in a genuinely gray legal area. The discipline is asking whether the technique is defensible if the company being scraped finds out, whether the terms of service prohibit it, and whether the volume of access is a problem under access-control statutes. Compliance is the floor of the analysis, not the ceiling.'),

  q(4400120, 'Career Skills', CHAPTER, 'Reg FD selective disclosure',
    'At an investor conference, a CFO answers a one-on-one question with detail that has not been disclosed publicly. The analyst asking the question is now in possession of what?',
    'Material nonpublic information if the disclosure is material — Reg FD obligates the issuer to broadly disclose, but the analyst who received it is not free to trade on it before that disclosure',
    [
      ['Public information, because it was said at a conference', 'Reg FD distinguishes between broad disclosure and selective disclosure. Being at a public venue does not make a one-on-one detail public.'],
      ['Confidential information that the analyst can trade on at will', 'Selective disclosure does not grant trading rights. If the information is material, Reg FD requires the issuer to broadly disclose, and trading before that disclosure is the canonical violation.'],
      ['Nothing actionable, because conference comments are always immaterial', 'Some conference comments are immaterial; others are deeply material. Categorically dismissing them removes the obligation to assess each case.'],
    ],
    'Reg FD shifts the burden to the issuer to broadly disclose, but the analyst still has to act as if selective disclosures may be MNPI. The safest reflex is to flag, restrict, and let compliance evaluate — not to assume the venue or format neutralizes the information.'),

  // -------------------------------------------------------------------------
  // SCENARIO / EV FRAMEWORK (4400121–4400125)
  // -------------------------------------------------------------------------
  q(4400121, 'Career Skills', CHAPTER, 'Base / bull / bear discipline',
    'An analyst presents a base case price target of $80 and stops there. The PM asks for bull and bear. Why is the single point estimate insufficient for sizing?',
    'Sizing requires the probability-weighted distribution of outcomes, not just the most-likely point — without bull and bear scenarios the asymmetry of the trade is invisible',
    [
      ['Single-point targets are sufficient because the base case is the most likely outcome', 'Most-likely is necessary but not sufficient. A symmetric base case is sized very differently from an asymmetric one, and the analyst cannot tell which it is without bull and bear.'],
      ['Scenarios are sell-side theater and do not belong in a buy-side memo', 'Sell-side scenarios can be theatrical, but the buy-side use of scenarios is operational — it determines sizing. Skipping it surrenders the sizing lever.'],
      ['The bear case is irrelevant once the analyst is confident in the long', 'Confidence is exactly when the bear case matters most. The point of the bear scenario is to test conviction against downside, not to reflect doubt.'],
    ],
    'A scenario tree exists to expose asymmetry. A 50/30/20 base/bull/bear distribution sizes differently than a 70/15/15 one, even with the same expected value — and the difference shows up in how much pain the position has to survive before working.'),

  q(4400122, 'Career Skills', CHAPTER, 'Expected value vs point estimate',
    'A position has 60% chance of +30% return, 30% chance of +5%, 10% chance of -40%. What is the cleanest way to summarize this for sizing?',
    'Probability-weighted expected return is +15.5%, but the distribution is left-skewed; sizing should reflect both the EV and the tail',
    [
      ['Just use the base case (+30%) since it is most likely', 'Using only the most-likely outcome ignores the -40% tail that determines drawdown risk. Sizing on the base alone systematically oversizes left-tail-heavy positions.'],
      ['The EV is what matters and the tail can be ignored', 'EV is necessary but not sufficient. Two positions with the same EV can have very different tails, and the tail determines whether the fund can hold the position through the drawdown.'],
      ['Probabilities are subjective and should not influence sizing', 'They are subjective but also explicit — naming them is exactly how the analyst makes sizing decisions auditable. Refusing to assign them does not remove the implicit probabilities; it just hides them.'],
    ],
    'Expected value summarises the central tendency; tail shape summarises the survivability. Both matter for sizing. A high-EV idea with a punishing left tail is often a smaller position than a lower-EV idea with a tight distribution.'),

  q(4400123, 'Career Skills', CHAPTER, 'Probability-weighted upside vs gut feel',
    'An analyst pitches "I see 40% upside." The PM presses: "Probability-weighted across your scenarios, what is the expected return?" The analyst recomputes: 18%. Why does the PM care about the difference?',
    'The 40% figure is the bull case; the 18% is the EV — and EV is what determines whether the trade clears the fund\'s hurdle rate and how it sizes against alternatives',
    [
      ['The 40% number is fine because it is the most exciting outcome', 'Sizing on the bull case rather than the EV consistently overweights the most attractive scenario at the cost of left-tail exposure. The PM is calibrating against this exact bias.'],
      ['Probability-weighting reduces upside artificially', 'It does not reduce upside — it reweights it to reflect probability. The 18% is what the analyst should actually expect to earn across many repeats of this kind of bet.'],
      ['EV is academic; trading is about conviction in the bull case', 'EV is operational, not academic — it is the number the fund\'s capital allocation has to clear. Conviction in the bull is an input to the probability, not a substitute for the weighted return.'],
    ],
    '"I see X% upside" usually means "in my bull case." Translating that into EV is the discipline that makes positions comparable and prevents the analyst from systematically oversizing the most exciting ideas in the book.'),

  q(4400124, 'Career Skills', CHAPTER, 'Skew and tail outcomes',
    'Position A: 80% chance of +10%, 20% chance of -10%. Position B: 50% chance of +30%, 50% chance of -10%. Both have EV of +6%. How should the PM think about choosing between them?',
    'Same EV, very different distributions — A is tighter and more capital-efficient, B has wider dispersion; the choice depends on portfolio context, correlation, and hold tolerance',
    [
      ['They are identical because EV is equal', 'EV equality hides the very different drawdown patterns and capital costs. A scattergun of 30/-10 positions delivers a much rougher PnL path than a series of 10/-10 positions, even with the same long-run mean.'],
      ['Always prefer position B because the upside is larger', 'Larger upside at the same EV always comes with larger dispersion. Preferring B reflexively means systematically choosing wider distributions, which can blow through risk budgets.'],
      ['EV is irrelevant; only the bull case matters', 'Skipping EV entirely throws away the comparator and reduces sizing to enthusiasm. The skew question only arises *after* EV is held constant.'],
    ],
    'Two positions with the same EV are not interchangeable. The tighter distribution is usually preferred at the margin for capital efficiency and drawdown control; the wider one may earn a place in the book when correlation, optionality, or thesis quality compensate. Naming the difference is the whole point.'),

  q(4400125, 'Career Skills', CHAPTER, 'Asymmetry framing',
    'An analyst frames a trade as "limited downside, large upside." The PM asks: "What is your downside in dollars at full size, and how does it compare to the probability-weighted upside?" Why is this the right pushback?',
    '"Limited" is qualitative; the trade has to be sized against actual probability-weighted PnL, and the comparison is between expected loss times probability and expected gain times probability — not labels',
    [
      ['"Limited downside, large upside" is sufficient because the asymmetry is obvious', 'It is only obvious in the absence of numbers. Many "asymmetric" pitches are symmetric or worse once probabilities are assigned and sized for the book.'],
      ['Downside framing is pessimistic and should be avoided in pitches', 'Avoiding the downside is exactly how oversizing and surprise losses happen. The pitch is stronger, not weaker, for being explicit about loss.'],
      ['Asymmetry can be assessed without dollar amounts', 'Asymmetry expressed in percentages is meaningful only when sizing is also expressed in percentages. The dollars are where the sizing decision actually lands.'],
    ],
    'Asymmetry is a sizing argument, and sizing arguments are in dollars. "Limited downside, large upside" should always survive translation to "expected loss is X dollars, expected gain is Y dollars, position size is Z." If the translation breaks, the asymmetry was rhetorical.'),

  // -------------------------------------------------------------------------
  // COMMON THESIS MISTAKES (4400126–4400130)
  // -------------------------------------------------------------------------
  q(4400126, 'Career Skills', CHAPTER, 'Anchoring to entry price',
    'A position is down 15% from entry. The analyst argues against selling because "we paid $50 and the stock is only at $42.50, so it would be a loss." Why does the PM reject this as a reason to hold?',
    'The entry price is sunk — the decision today is whether $42.50 is a better use of capital than the next-best alternative, regardless of what was paid',
    [
      ['Holding to "get back to entry" is a sound discipline', 'Holding to recover is a textbook behavioural error. The fund\'s capital is allocated against forward returns, not against the analyst\'s emotional comfort with the entry price.'],
      ['Selling at a loss is forbidden by hedge-fund policy', 'No serious hedge fund forbids selling at a loss — they forbid holding broken theses for emotional reasons. Selling losers fast is part of the craft.'],
      ['Entry price is the correct anchor because it represents the analyst\'s conviction', 'Entry price represents an old judgment under old information. Anchoring there ignores everything that has happened since.'],
    ],
    'Markets do not care what you paid. The position\'s current price is its forward starting line, and the only question that matters is whether the forward expected return justifies the capital at risk now. Anchoring to entry is how losers grow into albatrosses.'),

  q(4400127, 'Career Skills', CHAPTER, 'Confirmation bias in diligence',
    'An analyst is long a name. On diligence calls she asks customers, "What do you love about the product?" The PM tells her to redesign the questionnaire. What is the underlying problem?',
    'Asking only for positive evidence creates a one-sided picture that confirms the existing thesis; balanced diligence asks what would make the customer leave, what almost went wrong, and what alternatives they considered',
    [
      ['The question is fine because positive customer feedback is the goal', 'The goal is accurate customer feedback, not positive feedback. Designing for positive answers guarantees a positive-looking diligence file regardless of reality.'],
      ['The questionnaire is irrelevant because all customers say the same things', 'Customers respond very differently to "what do you love" versus "what would make you switch." Question design is one of the biggest determinants of diligence quality.'],
      ['Confirmation bias is unavoidable so the analyst should not bother addressing it', 'It is unavoidable in the sense of being a default, but specifically defended against by question design, devil\'s-advocate review, and structured red-team passes. Surrendering to it is a choice.'],
    ],
    'Diligence that only asks loaded questions returns loaded answers. The discipline is asking the questions whose answers would change the position — and treating evasions, hesitations, and qualified responses as data. A diligence file that confirms everything is usually a sign the questions were wrong.'),

  q(4400128, 'Career Skills', CHAPTER, 'Sunk cost in a losing position',
    'A position is down 35% and the original thesis is unchanged. The analyst argues: "We have already taken the pain, selling now locks it in." How should the PM reframe this?',
    'The 35% loss is sunk; the forward question is whether the capital at risk today, given the unchanged thesis and current price, has a better expected return than alternatives',
    [
      ['"Locking in the loss" is a real consideration when sizing a sell decision', 'There is no such thing as locking in a loss versus carrying an unrealized one — the PnL exists either way. The phrase masks an emotional reluctance to act.'],
      ['Selling after a drawdown is always wrong because reversals are common', 'Reversals are common but not universal. The decision to hold has to clear the same forward expected-return test as a new entry, regardless of where the stock has been.'],
      ['The thesis being unchanged automatically justifies holding', 'An unchanged thesis at a lower price may justify holding or even adding — but only after the forward EV is recomputed. "The thesis is unchanged" cannot be a synonym for "I do not want to think about this."'],
    ],
    'The cleanest test for sunk-cost thinking: would the analyst buy this stock today at this price with this thesis if she had no existing position? If the answer is no, the position is being held for emotional reasons, not for forward expected return.'),

  q(4400129, 'Career Skills', CHAPTER, 'Falling in love with management',
    'After three years on a position, the analyst has met the CEO eight times and considers him a friend. The thesis is breaking on operating metrics. What is the most likely hazard?',
    'The personal relationship will color how the analyst reads new information — she will discount disappointing data and amplify management\'s explanations, prolonging exposure to a broken thesis',
    [
      ['Personal relationships with management make analyst work more accurate', 'They produce access, but access is not accuracy. Personal closeness systematically biases interpretation toward management\'s framing of every disappointment.'],
      ['Friendship with management is a sign the thesis is correct', 'It is a sign the analyst has invested time in the position. It says nothing about whether the business is performing.'],
      ['The analyst should sell only when the CEO suggests doing so', 'The CEO is structurally the worst possible source of "should you exit" advice on his own stock. Deferring to him on the exit decision is a category error.'],
    ],
    'Access is valuable; identification with management is dangerous. The discipline is treating management exactly as one source among many — heard, weighed, and discounted for the obvious conflict — rather than as a friend whose explanations carry extra credit.'),

  q(4400130, 'Career Skills', CHAPTER, 'Distinguishing new information from price action',
    'A position is down 12% on no news the analyst can identify. The analyst tells the PM: "Nothing has changed, the thesis is intact." Why is this an incomplete analysis?',
    'Price moves are themselves information about what other holders are doing and what they know — "nothing has changed" assumes the analyst\'s information set equals the market\'s, which is rarely true',
    [
      ['Price action without news is always noise and can be ignored', 'Some price action is noise; some reflects positioning, leakage of information not yet public, or shifts in sentiment that precede news. Defaulting to "noise" is how analysts miss early signals.'],
      ['A 12% move without news proves the market is irrational', 'The market is composed of holders with different information sets and time horizons. Calling it irrational because the analyst cannot identify the news abdicates the work of finding out.'],
      ['Price moves should override the thesis automatically', 'Capitulating to every price move is the opposite mistake — analysts who treat price as the master signal end up trading noise. The discipline is reading price as one input, not as truth.'],
    ],
    'Price moves are evidence — sometimes weak, sometimes strong. The analyst\'s job is to ask what other holders might know that she does not, who is buying the other side, and whether the move is consistent with the thesis or quietly breaking it. "Nothing has changed" is rarely the final answer.'),

  // -------------------------------------------------------------------------
  // CATALYST TYPOLOGY (4400131–4400133)
  // -------------------------------------------------------------------------
  q(4400131, 'Career Skills', CHAPTER, 'Hard vs soft catalysts',
    'An analyst lists "FDA Phase 3 readout in October" and "improving market sentiment" as catalysts. Why does the PM treat these differently?',
    'The FDA readout is a hard catalyst — scheduled, observable, binary; sentiment shift is a soft catalyst — diffuse, hard to time, hard to falsify',
    [
      ['Hard and soft catalysts are equivalent for sizing purposes', 'They are not equivalent. Hard catalysts allow position structuring around a known date; soft catalysts give no anchor for sizing or risk management.'],
      ['Soft catalysts are always preferable because they create more upside', 'Soft catalysts can produce upside, but the inability to time them means the fund pays carry while waiting — often longer than the thesis assumed.'],
      ['Hard catalysts are uninvestable because they are binary risk events', 'Hard catalysts are highly investable — they are exactly the events that allow structured positions, options overlays, and clear before-and-after thesis tests.'],
    ],
    'A catalyst calendar should distinguish hard, soft, and structural. Hard catalysts are dated and observable; soft catalysts are real but diffuse; structural catalysts are mechanical. The same thesis can be sized very differently depending on which category the next catalyst falls into.'),

  q(4400132, 'Career Skills', CHAPTER, 'Structural catalysts: index rebalance and forced selling',
    'A stock is being removed from a major index next quarter, triggering forced index-fund selling. How should an analyst think about this kind of catalyst?',
    'Structural catalysts are mechanical and price-pressure-driven — they create predictable, time-bound dislocation that often reverses, and the analyst\'s edge is in the reversal rather than the move itself',
    [
      ['Structural catalysts are the same as fundamental catalysts', 'Mechanical pressure from forced sellers is not a change in fundamentals. Confusing the two leads to the analyst betting on the wrong side of the dislocation.'],
      ['Index removal is always bearish in the long run', 'Index removal often produces short-term selling pressure that subsequently reverses. Treating it as a long-run bearish signal misses the structure of the move.'],
      ['Forced selling is irrelevant because the fundamental value is unchanged', 'Fundamental value may be unchanged, but the price path is not — and the fund\'s PnL lives on the path, not the eventual destination.'],
    ],
    'Structural catalysts (index changes, forced selling from fund liquidations, ratings-driven flows) are some of the cleanest setups in hedge-fund work because they are mechanical and observable. The edge is usually in fading the dislocation, not riding it — which is the opposite of how the same setup would be played on a fundamental catalyst.'),

  q(4400133, 'Career Skills', CHAPTER, 'Catalyst fires but stock does not move',
    'A long position\'s major catalyst — a product launch — fires cleanly. The launch goes well. The stock does not move. What does this tell the analyst?',
    'The launch was likely already in consensus, meaning the analyst\'s variant view was less differentiated than thought — and the next leg of the thesis needs to be re-examined',
    [
      ['The stock will move soon; the market is slow', 'Sometimes markets are slow, but "the market will catch up" is the standard rationalization for theses that were not actually differentiated. The first hypothesis to test is that the news was already priced.'],
      ['The thesis is wrong and the position should be exited immediately', 'A single catalyst not moving the stock is information but not necessarily a kill — the rest of the thesis may still play out. The right response is re-examination, not reflex.'],
      ['The market is irrational and the catalyst should have moved the stock', 'Defaulting to irrationality is how analysts avoid learning. A more useful default is: the catalyst was already in the price, and the analyst over-estimated the variant component of the view.'],
    ],
    'A catalyst that fires without a price move is one of the most informative single events in the life of a position. It usually means the variant view was not as variant as the analyst believed — and that the rest of the thesis needs to be re-underwritten before the next chip is added.'),

  // -------------------------------------------------------------------------
  // TIME HORIZON MISMATCH (4400134–4400136)
  // -------------------------------------------------------------------------
  q(4400134, 'Career Skills', CHAPTER, 'Thesis right, timing wrong',
    'An analyst has been long for 18 months waiting for a margin inflection. Fundamentals are fine but the inflection keeps slipping by a quarter. How should the analyst frame this?',
    'Timing slips are evidence that need to be weighed: a single slip may be noise, but repeated slips suggest the analyst\'s model of when the inflection lands is broken even if the directional view is correct',
    [
      ['Repeated slips do not matter as long as the directional view is correct', 'Repeated slips matter enormously — they are the difference between a position that compounds and one that bleeds carry while waiting. Direction without timing is half a thesis.'],
      ['One slip is enough to exit; the position should already be closed', 'A single slip can be noise. Reflexive exit on the first miss prevents the analyst from holding any position that ever disappoints, which is most of them.'],
      ['The analyst should add aggressively because the thesis is still intact', 'Adding to a thesis whose timing model is breaking concentrates risk into exactly the source of error. The thesis being directionally right does not mean it is right now.'],
    ],
    'Timing is part of the thesis, not a separate consideration. Repeated timing slips are evidence that the analyst\'s model of why the move happens at this time is wrong — and a wrong timing model often signals a misunderstanding of the catalyst itself, not just a delay.'),

  q(4400135, 'Career Skills', CHAPTER, 'Holding vs sizing down on timing slip',
    'A long thesis is intact but the catalyst has slipped two quarters. Other positions in the book are demanding capital. How should the analyst think about size?',
    'Size down to reflect the lower probability-weighted return per unit of carry — the thesis may still work, but it deserves less of the book while alternatives compete for the same capital',
    [
      ['Hold full size because the thesis has not changed', 'The thesis being directionally intact does not preserve its sizing claim — slipping catalysts reduce expected return per unit of time, which is the relevant metric for capital allocation.'],
      ['Exit completely because any timing slip kills the trade', 'Exit is one option but not the only one. Sizing down preserves optionality on the original thesis while freeing capital for better-timed alternatives.'],
      ['Double the position to express conviction', 'Doubling into timing weakness concentrates risk in exactly the source of error. Conviction in direction is not the same as conviction in timing.'],
    ],
    'Sizing is the lever between conviction and prudence. When timing slips but direction holds, sizing down is the way to express the change in expected return per unit of carry without abandoning the work entirely. Pure exit and pure hold are usually both wrong.'),

  q(4400136, 'Career Skills', CHAPTER, 'Opportunity cost of dead money',
    'A position has gone sideways for nine months. The thesis is intact. The PM says: "Capital has a cost." What is the PM\'s actual concern?',
    'The position consumes capital that could be deployed in higher-EV-per-time ideas; "intact thesis" is necessary but not sufficient when alternatives compete for the same dollar',
    [
      ['Sideways positions cannot be the right call ever', 'Sideways can absolutely be the right call when the catalyst window is approaching and alternatives are weaker. The PM\'s concern is alternatives, not motion.'],
      ['The PM wants the analyst to sell at a loss', 'The PM is asking about expected return per unit of time relative to alternatives — not demanding a sale. A reframing, not an order.'],
      ['Capital has no cost as long as the position is not losing money', 'Capital has an opportunity cost regardless of whether the position is up or down. Flat is not free.'],
    ],
    'A hedge fund is a portfolio, not a single position. Every dollar in an intact-but-dormant thesis is a dollar that is not in the best available alternative. Sizing decisions are always relative, and "the thesis is fine" is not an answer to "is this the best use of these dollars."'),

  // -------------------------------------------------------------------------
  // POSITION RE-UNDERWRITING (4400137–4400139)
  // -------------------------------------------------------------------------
  q(4400137, 'Career Skills', CHAPTER, 'Quarterly re-underwrite cadence',
    'A fund mandates that every position be re-underwritten quarterly — the analyst writes a fresh memo as if entering the position today, ignoring the existing book. Why is this discipline imposed?',
    'It forces the analyst out of holder bias — the fresh-entry framing strips away anchoring, sunk cost, and identification with the position so the forward EV is evaluated honestly',
    [
      ['Quarterly re-underwriting is a make-work exercise that does not change decisions', 'It changes decisions exactly when the prior holding rationale was emotional rather than analytical. The exercise surfaces those positions that the analyst would not enter today.'],
      ['Re-underwriting more often than annually is excessive', 'Quarterly is standard precisely because earnings cycles and information cadences operate on that timescale. Annual is too slow for positions whose theses move on quarterly news.'],
      ['Re-underwriting is irrelevant for long-duration positions', 'Long-duration positions are where holder bias accumulates fastest. The longer the position, the more critical the periodic fresh-entry test.'],
    ],
    'The hardest thing to do as an analyst is treat a position you have held for 18 months as if you were seeing it for the first time. Quarterly re-underwriting institutionalizes that perspective so that every position has to clear the same bar today that it had to clear at entry.'),

  q(4400138, 'Career Skills', CHAPTER, 'Re-underwrite after each catalyst',
    'A position\'s major catalyst — an earnings print — has just fired. The analyst marks the catalyst as "passed" and moves on. The PM says: "Re-underwrite first." Why?',
    'Each catalyst either confirms or modifies the thesis; treating it as "passed" without re-underwriting skips the moment when the thesis is most testable and most updateable',
    [
      ['Catalysts do not require re-underwriting if the position is up', 'Up positions are the most dangerous time to skip re-underwriting because the gains reinforce holder bias and discourage critical review.'],
      ['Re-underwriting after every catalyst is excessive', 'Catalysts are exactly the events that produce new information — they are the natural cadence for re-underwriting, not an excessive one.'],
      ['The thesis is unchanged after the catalyst by default', 'The thesis is rarely unchanged after a catalyst — the data has shifted, even if the directional view holds. Assuming continuity skips the work of measuring the shift.'],
    ],
    'Catalysts are information events. Each one updates the thesis whether the analyst writes it down or not. Re-underwriting at the catalyst forces the update to be explicit, which prevents the slow drift of theses that are technically still on the books but have not been examined against new evidence.'),

  q(4400139, 'Career Skills', CHAPTER, 'Price-move triggered re-underwrite',
    'A position is down 20% in three weeks with no news the analyst can identify. The PM asks for a fresh memo. What does this discipline accomplish?',
    'It forces the analyst to consider what other holders may know or be doing — the price move itself becomes a hypothesis to test, not a fact to dismiss',
    [
      ['Price-move triggered re-underwriting is reactive and analyst-disrespectful', 'It is reactive in the same sense that earnings re-underwriting is reactive — to new information. A 20% move without news is unusual enough to be informative.'],
      ['Price moves should always be ignored when the thesis is intact', 'They should be examined, not ignored. The thesis being intact in the analyst\'s view is consistent with new information existing that the analyst does not yet have.'],
      ['Down 20% is automatically a buy signal', 'It might be a buy signal or a warning of broken thesis. The point of re-underwriting is to determine which, not to default to either.'],
    ],
    'A meaningful price move with no obvious cause is a market signal that the analyst\'s information set may be incomplete. The re-underwrite forces the analyst to ask what other holders might know, what the move is consistent with, and whether the thesis survives the new hypothesis. "Down with no news" is exactly when reflexive confidence is most dangerous.'),

  // -------------------------------------------------------------------------
  // QUANTIFYING CONVICTION (4400140–4400141)
  // -------------------------------------------------------------------------
  q(4400140, 'Career Skills', CHAPTER, 'Implied probability from sizing',
    'An analyst sizes a position at 8% of the book. Working backward from the book\'s risk budget and the position\'s expected loss, the implied probability of the bull case is 70%. The analyst said her bull case was "around 40% probable." What does this reveal?',
    'Sizing is implicitly assigning a higher probability than the analyst stated — either the sizing is too aggressive for the stated probabilities, or the analyst\'s stated probability is lower than what she really believes',
    [
      ['Implied probability from sizing has no relationship to stated probability', 'They are exactly two sides of the same decision. Sizing is the operationalization of probability — divergence between them indicates one of the two is wrong.'],
      ['8% is a standard sizing regardless of probability', 'Standard sizing without probability adjustment is how books drift into systematic over- or under-weighting. The whole point of probability discipline is to make sizing proportional.'],
      ['The analyst\'s stated probability is correct and the sizing is irrelevant', 'If sizing implies a different probability, one of the numbers is being treated as decoration. Reconciling them is exactly the discipline that prevents implicit overconfidence.'],
    ],
    'Sizing reveals implicit beliefs. If the stated probability is 40% but the size is consistent with 70%, the analyst is either bigger than she thinks she should be or more confident than she has admitted. Either way, the discrepancy is the most useful thing on the page.'),

  q(4400141, 'Career Skills', CHAPTER, 'Kelly intuition and over-sizing',
    'Kelly criterion suggests an optimal bet size given edge and odds. Most hedge funds size meaningfully below Kelly. Why?',
    'Kelly assumes perfectly known probabilities and tolerates extreme volatility; with uncertain probabilities and real-world drawdown limits, fractional Kelly (typically 25–50%) produces survivable, repeatable PnL paths',
    [
      ['Kelly is wrong and should be ignored', 'Kelly is not wrong — it is precisely right under its assumptions. The assumptions just rarely hold in practice, which is why fractional Kelly is the standard adjustment.'],
      ['Full Kelly is the correct sizing for every position', 'Full Kelly with uncertain probabilities produces ruin risk that no real fund can accept. Theoretical optima do not survive operational constraints.'],
      ['Sizing should always be equal-weight regardless of edge', 'Equal-weight abandons the main lever the fund has — concentrating capital behind the best work. It is a default for index funds, not for conviction-driven hedge funds.'],
    ],
    'Kelly is the right framework for thinking about sizing — it just needs to be deflated for the gap between stated and true probabilities, the path-dependence of drawdowns, and the survival cost of being wrong. Fractional Kelly is the practical compromise that captures Kelly\'s logic without inheriting its fragility.'),

  // -------------------------------------------------------------------------
  // MEMO DISCIPLINE (4400142)
  // -------------------------------------------------------------------------
  q(4400142, 'Career Skills', CHAPTER, '1-pager thesis written before entering',
    'A PM mandates a 1-page written thesis — claim, catalyst, horizon, sizing, exit, invalidation — for every new position, completed before the first share is bought. Why before entry, not after?',
    'Once the position is on, the analyst\'s judgment is biased by ownership; the pre-entry memo captures the unbiased version of the analysis as a reference for future re-underwriting',
    [
      ['Pre-entry memos slow execution and are not worth the time cost', 'Slowing execution is the point — most position regret comes from positions entered without a written falsifiable thesis. The time cost is the friction that catches bad ideas.'],
      ['Post-entry memos are equivalent because the thesis is the same', 'Post-entry memos are systematically biased by ownership. The "thesis" reconstructed after the fact tends to be more confident, more elaborate, and less testable than the pre-entry version would have been.'],
      ['Written memos are not necessary for experienced analysts', 'Experienced analysts are exactly the ones most prone to skipping the write-up — and the position regret literature suggests they pay the highest cost for doing so.'],
    ],
    'A pre-entry 1-pager is the cheapest behavioral defense an analyst has. It captures the neutral version of the analysis before the position\'s PnL starts editing the analyst\'s memory of what she thought going in. Every future re-underwrite is calibrated against that document — which only exists if it was written before the position was on.'),
]
