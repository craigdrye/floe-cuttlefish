import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// ST CAPSTONE — Client Workflow Walkthrough (Polaris Capital deal)
// ----------------------------------------------------------------------------
// 50 integrative questions (IDs 4380500–4380549) carrying one client engagement
// across the five S&T capstone lessons. Same arc an associate covering a top
// long/short fund would actually live: morning rhythm and axe coverage, the
// pitch of a single name, building the position with mixed execution, the
// hedge overlay, and the back-end discipline of P&L attribution, MNPI
// safeguards, Reg M, and quarter-end review.
//
// Polaris Capital Management (consistent across every question below):
//   - $4.2B AUM long/short equity hedge fund, US-focused, sector tilt to
//     TMT, healthcare, and consumer.
//   - 130/30 net long, 180% gross exposure, gross +14% YTD.
//   - Active trade: building a $400M long in TechSoftCo (NASDAQ: TSCO) via
//     a mixed algo / high-touch execution, liquidating a $250M HealthCo
//     (HCO) long over the same window.
//   - Hedge overlay: SPX index puts plus TSCO/HCO single-name vol structures.
//   - PM: Anika Rao (founder, 12-year track record); senior trader: Jon Park.
//   - Coverage: cash equities sales (you), high-touch trading desk, program
//     trading, equity derivatives, prime brokerage.
//
// Voice: matches vcCapstoneQuestions.ts and the wider Floe S&T bank —
// specific, evidence-anchored, no strawman distractors. Each wrong-answer
// rationale is bespoke; the lesson on each question is the integrative
// takeaway that ties the choice back to the client workflow.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe S&T capstone canonical bank'

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

const CHAPTER = 'Capstone: Client Workflow Walkthrough'

// Difficulty distribution: 15 at 3, 25 at 4, 10 at 5 (= 50 total).
export const ST_CAPSTONE_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Lesson 1: Coverage rhythm (10 Qs)
  4380500: 3,
  4380501: 3,
  4380502: 4,
  4380503: 4,
  4380504: 3,
  4380505: 4,
  4380506: 4,
  4380507: 5,
  4380508: 4,
  4380509: 3,

  // Lesson 2: Pitching TSCO long (10 Qs)
  4380510: 3,
  4380511: 4,
  4380512: 4,
  4380513: 4,
  4380514: 5,
  4380515: 4,
  4380516: 3,
  4380517: 4,
  4380518: 5,
  4380519: 4,

  // Lesson 3: Building the $400M TSCO position (10 Qs)
  4380520: 3,
  4380521: 4,
  4380522: 4,
  4380523: 5,
  4380524: 4,
  4380525: 4,
  4380526: 5,
  4380527: 3,
  4380528: 4,
  4380529: 4,

  // Lesson 4: Hedging overlay (10 Qs)
  4380530: 3,
  4380531: 4,
  4380532: 4,
  4380533: 5,
  4380534: 4,
  4380535: 4,
  4380536: 3,
  4380537: 4,
  4380538: 5,
  4380539: 4,

  // Lesson 5: Risk + compliance + quarter-end (10 Qs)
  4380540: 3,
  4380541: 4,
  4380542: 4,
  4380543: 5,
  4380544: 4,
  4380545: 4,
  4380546: 3,
  4380547: 4,
  4380548: 5,
  4380549: 4,
}

export const stCapstoneQuestions: Question[] = [
  // -------------------------------------------------------------------------
  // LESSON 1 — Coverage rhythm (4380500–4380509)
  // Morning huddle, axe communication, sales coverage of Polaris. Forces the
  // learner to translate desk inventory and color into something a $4.2B
  // long/short fund actually wants to hear before 9:30.
  // -------------------------------------------------------------------------
  q(4380500, 'Career Skills', CHAPTER, 'Morning huddle priorities',
    'It is 7:15 ET. You cover Polaris Capital ($4.2B long/short, TMT+HC+Consumer focus). Overnight: TSCO printed an unexpected hyperscaler win, Asia tech sold off 1.2%, your desk has a $80M block of HCO offered. What do you walk into the morning huddle ready to surface first?',
    'The TSCO hyperscaler win and the HCO block — both are specific to Polaris\'s active positions and the desk\'s current axe, and the huddle is the only forum to align trading, derivatives, and program coverage before Polaris calls',
    [
      ['The Asia tech sell-off, because macro overnight moves set the tone for the day', 'Macro overnight is context, not coverage. The huddle exists to align the desk on what is actionable for *this* client — Polaris is already long TSCO and selling HCO, so the position-specific items lead.'],
      ['A summary of every overnight headline so the desk has full information', 'The huddle is not a news round-up. Surfacing everything dilutes the items the desk actually needs to coordinate on and signals that the salesperson has not prioritised.'],
      ['Nothing yet — wait for Polaris to call so you can react to what they ask about', 'Reactive coverage loses the morning. Polaris\'s PM expects you to walk into the call already knowing which items are live; surfacing them in the huddle is how you get there.'],
    ],
    'A morning huddle earns its keep by aligning the desk on the items that are specific to the client\'s book and the desk\'s axe. Position-relevant overnight news plus the live block beats a generic news scan every time.'),

  q(4380501, 'Career Skills', CHAPTER, 'Defining the axe for Polaris',
    'Your desk is a natural buyer of HCO this morning (a different client is unwinding a $120M long). Polaris is liquidating HCO. How do you describe the axe to Polaris in the 7:45 call?',
    '"We are a natural buyer of HCO today in size — there is real other-side interest on the desk, so you can work a block with us at a tighter spread than the screen suggests"',
    [
      ['"We are interested in HCO if you have any to sell" — leave it open so Polaris can fish for size', 'Vague axe language wastes the client\'s time and your edge. Polaris\'s PM has a list of brokers; the one who names size and color gets the call back, not the one who hedges.'],
      ['"The desk has been working some HCO flow lately and you should send us your order" — emphasise the relationship', 'Relationship language without specifics reads as a soft pitch. Polaris cares whether you have other-side interest *today*, not whether your desk generally trades the name.'],
      ['"There is institutional interest in HCO across the Street" — point at the broader market', 'Generalising to "the Street" surrenders the axe. The point of telling Polaris is that *your* desk has the natural other side; broad market color is something they already get from screens.'],
    ],
    'An axe is a specific statement of where the desk has natural interest and at what size, framed so the client can act on it. Vague language or relationship gloss surrenders the very edge that makes the axe worth communicating.'),

  q(4380502, 'Career Skills', CHAPTER, 'Axe distribution discipline',
    'You have the HCO natural-buyer axe. Polaris is your top-tier coverage but you also cover three smaller funds with HCO exposure. How do you sequence the axe distribution this morning?',
    'Polaris first because they are the largest natural seller and the relationship priority, then the smaller funds with HCO exposure — within minutes of each other, not hours, so no one feels back-of-the-line',
    [
      ['Send the axe to every covered account simultaneously by blast email so no client has an information advantage', 'A blast email treats the axe as broadcast. Top-tier coverage exists precisely so the desk can sequence — Polaris gets a call, not a CC, and the others get prompt follow-up.'],
      ['Tell Polaris first and hold the axe back from the smaller funds for an hour to maximise the desk\'s edge with Polaris', 'Hoarding an axe past the point of edge erodes the smaller relationships. Sequence by priority, but do not stretch the gap into something the desk has to explain later.'],
      ['Wait until Polaris\'s morning call slot to mention it, since the relationship cadence is fixed', 'Letting a calendar slot sit on a live axe is how the desk loses it. Coverage cadence sets the floor; live axes get surfaced immediately to the relevant accounts.'],
    ],
    'Axe distribution is a sequencing problem, not a fairness problem. Top-tier accounts get the call first; smaller accounts get the prompt follow-up. Stretching the gap or blasting everyone at once both fail — the first hurts the relationship, the second erases the edge.'),

  q(4380503, 'Career Skills', CHAPTER, 'Color vs MNPI on TSCO',
    'In your TSCO call with Polaris you want to share that "another long/short fund unwound a TSCO short into yesterday\'s close." Where is the line between desk color and MNPI?',
    'The aggregate observation that "shorts covered into the close" is desk color and shareable; naming the specific fund, the size, or anything traceable to a single client crosses into MNPI territory and is not',
    [
      ['Any reference to another client\'s activity is MNPI and must never be shared', 'Aggregate flow color is a normal and legitimate part of sales coverage. The line is around identifiability and specificity, not the existence of color itself.'],
      ['If the information came from your desk\'s own trades it is fine to share in any form', 'Source on your desk does not sanitise client-identifiable information. The line lives at *what is identifiable*, not at *whose system the data came out of*.'],
      ['Anything that has already printed on the tape is fully shareable in any form, including which fund did it', 'Prints on the tape are public, but the *attribution* of a print to a specific client is not. Tying a print to "the long/short fund that holds 8% of TSCO" can be MNPI even when the trade itself is public.'],
    ],
    'Desk color lives in the aggregate: directional flow, broad cohort behaviour, sentiment shifts. The moment the color names a client, a specific size traceable to one fund, or anything a reasonable person could re-identify, it is MNPI. The judgment is about identifiability, not source.'),

  q(4380504, 'Career Skills', CHAPTER, 'Reading Polaris\'s morning call',
    'Anika Rao opens the 7:45 call: "Quick today — what do you have on TSCO and HCO?" How do you structure the next 90 seconds?',
    'TSCO first because of the overnight hyperscaler print and her active build, HCO second with the natural-buyer axe — total under 90 seconds, named sizes and prices where possible, then stop talking',
    [
      ['Walk through the broader market open, then sector commentary, then the specific names so she has full context', 'She asked for TSCO and HCO. Padding the answer with market color when she has signalled "quick today" loses her attention and tells her you do not listen.'],
      ['Ask her what she wants to know first, since you do not want to waste her time on irrelevant items', 'She already told you what she wants to know. Asking again is a tell that you did not prepare; the call expects you to walk in with the items already prioritised.'],
      ['Lead with HCO because it is the live axe and TSCO is just news', 'TSCO has actionable overnight news that intersects her active build — that is more decision-relevant than the axe, which is informational. Lead with what changes her actions.'],
    ],
    'Reading a PM\'s morning call is about responding to the signal in their question. "Quick today" means lead with what changes her decisions, name sizes and prices, and stop when the answer is delivered.'),

  q(4380505, 'Career Skills', CHAPTER, 'Translating research for the PM',
    'Your equity research analyst publishes a TSCO note overnight: "Maintain Buy, PT $215 from $200, hyperscaler win adds $0.35 to FY26 EPS." Polaris is mid-build and asks "what does our research add to the variant view?" How do you frame the answer?',
    'Frame the model delta (the $0.35 EPS lift and the durability assumption behind it) and where it agrees or disagrees with her variant — then name the specific input she should pressure-test, not just the new PT',
    [
      ['Read her the headline: Buy, PT $215, $0.35 EPS lift', 'Reading the headline is what the Bloomberg pop-up already did. A PM asks "what does it add" because she wants the load-bearing assumption, not the summary.'],
      ['Say research broadly agrees with her thesis, which is the supportive answer', 'Cheerleading the agreement misses the question. She wants to know which input is the actual driver and where her view differs — agreement framing leaves both unsaid.'],
      ['Recommend she defer to her own model since research is for the sell-side audience', 'Telling a PM that research is not for her flattens the value of coverage. The right move is to translate research into the PM\'s decision frame, not deflect.'],
    ],
    'Translating research is about extracting the load-bearing assumption and mapping it to the PM\'s variant. The headline is what she already saw; the value is in naming the specific input and the disagreement she should pressure-test.'),

  q(4380506, 'Career Skills', CHAPTER, 'Coverage cadence by client type',
    'Polaris runs 130/30 with active single-name conviction and turnover around 200% annually. A different long-only client you cover runs 30% turnover. How should your coverage cadence differ?',
    'Polaris gets daily morning calls plus event-driven pings during the day; the long-only gets a weekly themed call and an event-driven escalation only on names where they hold size — same coverage relationship, different rhythm',
    [
      ['Both clients should get the same cadence so neither feels under-covered', 'Same cadence on different turnover wastes the long-only\'s time and underserves Polaris. Coverage is a function of how often the client acts, not how nice you want to be.'],
      ['Polaris gets daily and the long-only gets nothing unless they ask', 'Reactive-only coverage of the long-only abandons the relationship. The cadence should be lighter, not absent — weekly themed plus event escalation is the right shape.'],
      ['Coverage cadence should follow asset size, not turnover, so the larger client always gets more attention', 'Asset size is one input but turnover is what determines actionable coverage frequency. A $10B long-only can be lower cadence than a $4B fast-turnover fund.'],
    ],
    'Coverage cadence follows how often the client makes decisions, not how big they are or how much you like them. High-turnover books need daily rhythm and intra-day pings; low-turnover books prefer thematic depth and event-driven escalation.'),

  q(4380507, 'Career Skills', CHAPTER, 'Earning the next call back',
    'You have run six weeks of daily Polaris coverage. The PM has acted on two of your ideas (one worked, one did not) and ignored four. Your competing covering broker has had three of theirs traded. What is the right read and the right adjustment?',
    'Two-acted-of-six is healthy hit-rate territory; the issue is likely *which ideas* you are surfacing — narrow toward Polaris\'s named exposures and away from generic sector calls, and discuss honestly whether your axe surfacing matches her book',
    [
      ['Increase the number of ideas per day to improve the chance of hits', 'Volume is the wrong axis. More mediocre ideas dilute the trust the good ones earn — and PMs read frequency without specificity as low signal.'],
      ['Match your competitor\'s framing more closely so your ideas look comparable on the screen', 'Imitating a competitor concedes the relationship. The path back is sharper coverage of *her* book, not a louder version of someone else\'s.'],
      ['Accept that hit rates are stochastic at this scale and keep doing the same thing', 'Treating six weeks as pure noise refuses to look at the actual signal in the pattern. The ideas she ignored are the data; the response is to ask which were off-thesis.'],
    ],
    'Earning the call back is about sharpening the *fit* of what you surface to the client\'s actual exposure and decision rhythm. Volume, imitation, and noise-as-excuse all dodge the real question: are you covering her book or covering the sector.'),

  q(4380508, 'Career Skills', CHAPTER, 'Handing off to high-touch trading',
    'Polaris wants to test putting $50M of the TSCO build through a high-touch trader rather than the algo channel today. As the salesperson, what is your handoff to the high-touch desk?',
    'Walk the high-touch trader through Polaris\'s urgency, size remaining in the parent order, recent algo VWAP vs arrival, and the PM\'s tolerance on price drift — then step back and let the trader own the working order',
    [
      ['Forward the email thread to the trader and let them figure out the context', 'Email-forward handoffs lose half the information. The high-touch trader needs the urgency frame and the parent-order context spoken, not a thread to mine.'],
      ['Stay on the line and manage every fill so Polaris has one point of contact', 'Sitting on top of the trader\'s fills muddies execution. The salesperson\'s job is context and relationship; once the order is in high-touch hands, the trader owns the working.'],
      ['Tell the trader the price target and let them work without size or urgency context', 'Price target without size and urgency is half a working order. The trader needs all three to actually choose the working strategy.'],
    ],
    'A clean handoff to high-touch transfers four things: urgency, residual size, recent execution context, and price tolerance. Anything less leaves the trader guessing; anything more (the salesperson hovering on every fill) muddies the execution.'),

  q(4380509, 'Career Skills', CHAPTER, 'Reading the room on a slow morning',
    'A morning comes with no overnight news on TSCO or HCO, no live axes, and a quiet open. Polaris\'s PM picks up the 7:45 call. What is the right call shape?',
    'Acknowledge it is quiet, surface one piece of thematic color that intersects her book (e.g. peer earnings tonight, a sector flow trend), and keep the call short — wasting her time on padding is worse than a short call',
    [
      ['Fill the time with sector commentary so the call feels substantive', 'Padding a quiet call is exactly how PMs learn to skip the slot. A short, honest call protects the relationship; a padded one erodes it.'],
      ['Skip the call entirely if there is nothing live', 'Skipping the cadence reads as flaky. The right move is to keep the slot, name that it is quiet, and exit fast — preserving the rhythm without manufacturing substance.'],
      ['Pitch a new idea you have been working on, since the quiet window is an opening', 'A quiet morning is not a free slot to push unsolicited ideas. New pitches deserve their own setup; jamming one into a quiet call mixes signal and erodes trust.'],
    ],
    'Reading the room on a slow morning means respecting the PM\'s time more than the calendar slot. A short, honest call with one piece of relevant thematic color outperforms padded substance or a skipped slot.'),

  // -------------------------------------------------------------------------
  // LESSON 2 — Pitching TSCO long (4380510–4380519)
  // Variant perception, risk-reward sizing. Forces the learner to commit to a
  // single-name view that earns Polaris\'s capital, with explicit upside,
  // downside, and what would change the call.
  // -------------------------------------------------------------------------
  q(4380510, 'Career Skills', CHAPTER, 'Anatomy of a single-name pitch',
    'You are pitching TSCO long to Polaris pre-build. What is the right shape of the pitch in 3–5 minutes?',
    'Variant view (where consensus is wrong), the catalyst path, sizing logic at Polaris\'s book, downside scenario with a stop, and one specific data point that would invalidate the call — in that order',
    [
      ['Detailed financial model walkthrough with revenue, margins, and cash flow over five years', 'A PM does not need the model walkthrough — she has her own. The pitch is about variant view and catalyst, not a recitation of line items.'],
      ['Why TSCO is a great company, supported by its market share and management quality', 'Quality narrative without a variant view is not a pitch — it is a description. The PM\'s question is "what does the Street miss," not "is this a good business."'],
      ['Recent technical setup on the chart with support levels and momentum indicators', 'Technicals can be a sizing or entry input but they are not the pitch for a fundamental long/short fund. The variant view has to live in the fundamentals, with technicals at most a timing overlay.'],
    ],
    'A single-name pitch to a fundamental PM is variant-view-first. The pitch lives or dies on whether you can name what consensus has wrong, the path to repricing, and what would tell you the call is broken.'),

  q(4380511, 'Career Skills', CHAPTER, 'Variant perception specificity',
    'Your variant view on TSCO: Street expects 18% FY26 revenue growth; you think the hyperscaler win plus pipeline implies 24%. How sharp does the variant claim need to be in the pitch?',
    'Name the specific Street number, your number, the bridge between them (which products, which customers, which quarters), and the one input that would have to be wrong for the variant to break',
    [
      ['"We think TSCO grows faster than expected" — keep it qualitative so it is harder to be wrong', 'Qualitative variants are uninteresting because they are unfalsifiable. The PM will only act on a number she can argue with, and the act of being specific is the act of being trustworthy.'],
      ['"We think TSCO is undervalued" — focus on the multiple rather than the operating estimate', 'Multiple-based variants without an operating driver are sentiment, not analysis. The PM wants the line on the model that moves; the multiple follows.'],
      ['Quote a wide range (20–30% growth) to capture the uncertainty', 'A range that wide reads as not committing to a view. Variants are sharper at a single point with named sensitivity, not at a vague band.'],
    ],
    'Variant perception is sharpest when it is a number you can put on a slide next to the Street number, with the bridge between them named. Qualitative or wide-range variants are easy to defend and impossible to act on.'),

  q(4380512, 'Career Skills', CHAPTER, 'Risk-reward framing',
    'TSCO at $180, your 12-month base case $220, downside $150. Polaris\'s book typically sizes single-name longs to 2-3% gross. How do you frame risk-reward in the pitch?',
    'Upside $40 (22%), downside $30 (17%), so reward-to-risk ~1.3x — call out that this is at the low end of what Polaris usually sizes to 2-3%, so the *catalyst confidence* has to carry the size decision',
    [
      ['Frame upside as $40 to $70 and downside as small because the company is high quality', 'Ranging the upside high and dismissing the downside is exactly the framing PMs distrust. Honest pitches name the downside in equal specificity to the upside.'],
      ['Lead with the upside percentage and leave the downside for questions', 'Holding the downside back tells the PM the pitch is selling, not analysing. Strong pitches lead with the full risk-reward shape because that is what the sizing decision needs.'],
      ['Quote a probability-weighted expected value of $215 without naming the scenarios', 'PEV without scenarios is mathematical theatre — the PM cannot interrogate the inputs. Name the scenarios first; the weighted average is a follow-up at best.'],
    ],
    'Risk-reward framing is upside, downside, and the ratio between them — named with the same specificity. A 1.3x setup is fine if the catalyst confidence is high; the pitch is honest only when both sides are equally legible.'),

  q(4380513, 'Career Skills', CHAPTER, 'Sizing logic at Polaris',
    'Polaris\'s gross is 180%, single longs typically 2-3%. A $400M TSCO long is 9-10% of NAV — a much larger position than typical. How do you handle the sizing question in the pitch?',
    'Acknowledge upfront that 9-10% is concentrated by Polaris standards, ask whether this is a deliberate conviction-size position or whether the PM intends to scale it back, and have the catalyst-confidence and downside-stop logic ready for either case',
    [
      ['Avoid the sizing question because that is the PM\'s decision, not the salesperson\'s', 'Sidestepping sizing in the pitch when the size is unusually large dodges the most important framing question. The pitch is the right place to surface it explicitly.'],
      ['Encourage the larger size because the catalyst is strong', 'A salesperson cheering on outsized sizing is exactly the wrong incentive — and Polaris\'s risk team will read it the same way. Surface the question; do not push the size.'],
      ['Tell the PM that 9% is a typical position size for funds with conviction', 'Generalising about "conviction sizing" without naming the specifics of Polaris\'s book is generic. The conversation has to be about *this* fund\'s actual sizing norms.'],
    ],
    'Sizing logic is the salesperson\'s opening to a more honest conversation, not a number to push. When the planned size is unusual, surfacing it explicitly invites the PM\'s real reasoning and gives the desk the context it needs to execute.'),

  q(4380514, 'Career Skills', CHAPTER, 'Catalyst path and timing',
    'Your TSCO thesis has three catalysts: Q1 print (8 weeks out), AI product launch (Q2), and FY26 guide (Q3). How do you structure the catalyst path in the pitch?',
    'Q1 print is the proximate catalyst — earliest, lowest variance from consensus, biggest risk if it disappoints; AI launch and FY26 guide are the durability catalysts that extend the position\'s life if Q1 confirms',
    [
      ['Group all three catalysts as equally important so the PM sees the full path', 'Equal-weighting catalysts hides which one is the gating event. The proximate catalyst sets the position\'s life expectancy if it disappoints — naming the hierarchy is the work.'],
      ['Lead with the FY26 guide because it has the biggest impact on the model', 'Biggest model impact is not the right ordering — proximity is. A catalyst 9 months out cannot carry a position through a Q1 disappointment.'],
      ['Avoid the catalyst question because catalysts are unpredictable', 'Catalysts are the structure of the position\'s life. A pitch without a catalyst path is a pitch without a thesis on *when* the variant gets re-priced.'],
    ],
    'Catalyst paths order by proximity, not by magnitude. The proximate catalyst is the position\'s first gating event; the later ones extend the life of the trade if the proximate confirms.'),

  q(4380515, 'Career Skills', CHAPTER, 'What would invalidate the call',
    'Polaris\'s PM asks: "What kills your TSCO long?" What is the right kill-criterion to bring?',
    'A Q1 print showing hyperscaler revenue decelerating sequentially, or a customer-concentration disclosure showing the top three customers above 45% of revenue — both attack the variant directly and would be visible within the position\'s horizon',
    [
      ['"The market dropping" — broad market drawdown is the obvious risk', 'Market beta is not a thesis kill — it is a hedging question. Polaris already runs SPX puts; the kill criterion has to attack the *idiosyncratic* view.'],
      ['"Management leaving" — execution risk is always the biggest concern', 'Management turnover is real but generic — every long is exposed to it. The kill criterion has to point at the *specific variant* the pitch claims is true.'],
      ['"Valuation getting too expensive on the rerate" — that is when we trim, not when the call is wrong', 'A multiple expanding is not the call being wrong — it is the call working. Conflating "trim signal" with "kill criterion" muddies the discipline.'],
    ],
    'Kill criteria attack the variant view, not the market or generic risks. The right answer points at the specific operating data that would tell the PM the thesis is broken — observable within the position\'s horizon and directly tied to what the pitch claims.'),

  q(4380516, 'Career Skills', CHAPTER, 'Pitching against consensus',
    'Sell-side consensus on TSCO is 22 Buys, 6 Holds, 1 Sell. Your variant is more bullish than even most Buys. How do you handle the "everyone is already long" question?',
    'Distinguish between "consensus rating" (which is bullish) and "consensus FY26 number" (which is meaningfully below where you think it lands) — the variant lives in the estimate, not the rating distribution',
    [
      ['Argue that consensus is wrong because most analysts are too cautious by nature', 'Generic "sell-side is cautious" framing is a tell that the variant is not really specific. The argument has to point at *which input* consensus has wrong, not at analyst psychology.'],
      ['Acknowledge consensus is bullish and pitch on momentum rather than variant', 'Switching to momentum framing when the variant is questioned concedes the analytical case. The strong pitch keeps the variant; it just relocates it from rating to estimate.'],
      ['Drop the pitch because crowded longs are unattractive', 'Crowded longs are a sizing input, not a kill. The question is whether the *number* is right, not whether other people own the name.'],
    ],
    'Crowded ratings do not mean consensus has the right number. The pitch survives the "everyone is long" question by pointing at where the *estimate* differs from the rating distribution — that is where the variant actually lives.'),

  q(4380517, 'Career Skills', CHAPTER, 'Pre-empting the short interest question',
    'TSCO has 8% short interest, elevated for a large-cap name. Polaris will ask why. How do you bring it into the pitch?',
    'Surface it openly: name the short thesis (high multiple, customer concentration), say where you agree and disagree, and frame the elevated short as a *positioning tailwind* if the Q1 print confirms — not a contradiction of the long thesis',
    [
      ['Avoid the short-interest question because it is a market microstructure detail', 'Eight percent short on a large cap is not microstructure — it is a signal Polaris will already have seen. Ignoring it in the pitch is exactly how you lose credibility.'],
      ['Dismiss the short thesis as wrong and move on', 'Dismissing a thesis the market is paying for is the weakest version of the answer. Engaging with it — naming where you agree and disagree — is what builds trust.'],
      ['Recommend Polaris wait for shorts to cover before initiating', 'Waiting for shorts to cover is the wrong tactical conclusion from elevated short interest. Squeezes work *for* a long; the recommendation is to engage, not wait.'],
    ],
    'Elevated short interest is information the PM has already seen. Pre-empting it — by naming the short thesis, engaging where it has weight, and framing positioning as a tailwind — is what separates a sales pitch from an honest pitch.'),

  q(4380518, 'Career Skills', CHAPTER, 'When research and your variant disagree',
    'Your firm\'s research analyst has TSCO at FY26 revenue $9.5B; your sales pitch implies $10.2B. Compliance allows you to share a variant view, but how do you handle the disagreement in the call?',
    'Name your firm\'s research number first, then say where your variant differs and why — flagging that this is sales color rather than the research analyst\'s view, so Polaris can weight each input correctly',
    [
      ['Present only your variant number and leave the research disagreement out so the pitch is cleaner', 'Hiding the research number when it is publicly your firm\'s view is a credibility problem if Polaris notices. Naming the disagreement openly is the only honest path.'],
      ['Tell Polaris the research number is wrong and stick with your variant only', 'Trashing your own research analyst is the worst version of the answer. The right framing is "different lens, different number," not "research is wrong."'],
      ['Defer to research entirely and abandon the variant', 'Surrendering the variant the moment research disagrees turns sales coverage into a research-redistribution function. The variant is the value-add — own it, but frame it honestly.'],
    ],
    'When sales color disagrees with the firm\'s research analyst, the move is to name both numbers, name the disagreement, and let the PM weight the inputs. Hiding one or trashing the other both fail — the first is dishonest, the second is unprofessional.'),

  q(4380519, 'Career Skills', CHAPTER, 'Closing the pitch with an ask',
    'You finish the TSCO pitch. The PM is engaged. What is the right ask to close on?',
    '"Want us to start working a $50M starter through algo today against VWAP, and we can revisit sizing after Q1?" — concrete, sized, time-bound, and respects that the PM may want to scale in rather than commit to the full $400M today',
    [
      ['"Let me know what you think" — leave it open for the PM to come back', 'Open-ended closes leave the pitch in limbo. The PM\'s calendar will move on; a concrete ask gives the conversation a next step.'],
      ['"We think you should buy $400M today" — push for the full size now', 'Pushing for full size at the end of a pitch reads as transactional. The starter-and-scale ask matches how the PM actually deploys conviction.'],
      ['"Should we send you the model?" — extend the diligence', 'Asking to send the model is fine as a side action but not as the close. The close should propose execution; diligence supports the decision, it does not replace it.'],
    ],
    'The close of a pitch is a concrete, sized, time-bound ask that matches how the PM actually deploys capital. Open-ended closes lose to the calendar; full-size pushes lose to discipline; a starter-with-scale-up frame respects both the conviction and the build.'),

  // -------------------------------------------------------------------------
  // LESSON 3 — Building the $400M TSCO position (4380520–4380529)
  // Algo + high-touch mix, TCA pre/post, market impact mitigation. Forces the
  // learner to translate parent-order intent into execution that minimises
  // information leakage and impact while delivering the size.
  // -------------------------------------------------------------------------
  q(4380520, 'Career Skills', CHAPTER, 'Sizing the algo vs high-touch split',
    'Polaris has committed to the full $400M TSCO build over 10 trading days. ADV is ~$1.2B. What is the right initial split between algo and high-touch?',
    'Roughly 60-70% through algos (VWAP and POV blends) for the steady working, 30-40% reserved for high-touch to catch blocks and to handle days when news or flow creates an opportunistic window',
    [
      ['100% algo because algos provide the lowest market impact at this size relative to ADV', 'All-algo at 3-4% of ADV per day misses the natural blocks a high-touch trader can source. Algos optimise for steady; high-touch optimises for opportunistic.'],
      ['100% high-touch so Polaris\'s trader has a single point of contact for the build', 'All-high-touch on a 10-day build leaks the size. The discipline is to keep most of the volume inside algos and use high-touch for the blocks and the contingencies.'],
      ['90% high-touch and 10% algo so the desk can build relationships through the order', 'Relationship-building is not the execution objective. The split should be driven by impact and opportunity, not by which channel the desk prefers to talk through.'],
    ],
    'The algo / high-touch split is an execution decision, not a relationship one. Algos carry the steady volume; high-touch carries the opportunistic blocks. Tilting too far either way costs the client — leakage on one side, missed blocks on the other.'),

  q(4380521, 'Career Skills', CHAPTER, 'Choosing the right algo strategy',
    'For the daily algo slice of TSCO (roughly $25M per day, ~2% of ADV), which algo strategy fits best given Polaris\'s priorities of low information leakage and benchmark to arrival price?',
    'A POV (percent-of-volume) algo at 8-10% participation with an arrival-price benchmark and dark-pool preference — keeps participation steady, hides the parent intent, and benchmarks against what matters to the PM',
    [
      ['A pure VWAP-day strategy because VWAP is the industry-standard benchmark', 'VWAP-day rewards filling on a schedule regardless of price drift, which can drag arrival-price performance. The benchmark Polaris cares about is arrival, not VWAP.'],
      ['An IS (implementation shortfall) algo at aggressive participation to finish early', 'Aggressive IS at this size telegraphs the order and lifts the offer. The whole point of the 10-day spread is to mask intent — front-loading defeats it.'],
      ['A simple TWAP algo because it is the most predictable schedule', 'TWAP is mechanically predictable, which is exactly what a sophisticated counterparty can detect and trade against. Predictable participation at $25M/day leaks.'],
    ],
    'Algo selection is about matching the strategy to the benchmark and the leakage tolerance. A POV blend with dark-pool preference and an arrival-price benchmark fits a stealth build; pure VWAP, aggressive IS, or TWAP each fail on one of those axes.'),

  q(4380522, 'Career Skills', CHAPTER, 'Pre-trade TCA inputs',
    'The desk runs a pre-trade TCA on the TSCO build. Which inputs are load-bearing and which are window dressing for the PM\'s decision?',
    'Load-bearing: expected market impact in bps at the chosen participation rate, historical spread and depth at this size, and a sensitivity to participation rate; window dressing: generic volatility statistics and average daily volume without intraday distribution',
    [
      ['Load-bearing: the historical average price over 90 days; window dressing: market impact estimates', 'Historical 90-day average is irrelevant to executing the next 10 days. Market impact estimates are the load-bearing input — they price the cost of the build.'],
      ['Load-bearing: the analyst price target; window dressing: spread and depth', 'Price target is a sizing input, not a TCA input. Spread and depth are exactly what determines execution cost — they are not window dressing.'],
      ['All TCA inputs are window dressing because impact estimates are unreliable', 'Impact estimates are imperfect but they are the desk\'s best read on what the build will cost. Treating them as theatre throws out the discipline that disciplines participation.'],
    ],
    'Pre-trade TCA earns its keep by pricing market impact at the proposed participation rate and showing the sensitivity. Generic volatility and headline ADV are commentary; impact-at-participation is the input the PM actually uses to decide.'),

  q(4380523, 'Career Skills', CHAPTER, 'Information leakage discipline',
    'Day 3 of the TSCO build: the desk notices the offer is lifting one tick ahead of your child orders and another broker\'s block desk has been calling around asking about TSCO supply. What is the right response?',
    'Pause the algo for the rest of the morning, switch to opportunistic-only via high-touch, and have the trader investigate whether the leakage is from venue routing, broker chatter, or coincidence — resuming only after diagnosing',
    [
      ['Increase participation to finish before the leakage gets worse', 'Sprinting through suspected leakage is exactly how to maximise impact. The right move is to pause, diagnose, and restart with the leakage source addressed.'],
      ['Switch brokers immediately to a different firm to escape the leakage', 'Switching brokers mid-build does not fix routing-level leakage and breaks the relationship with the desk that has the context. Pause and diagnose first.'],
      ['Continue as planned because algos are designed to minimise leakage already', 'Algos minimise expected leakage; observed leakage is a different signal. Continuing as planned when the market is reading the order is the costliest possible response.'],
    ],
    'Information leakage is the costliest execution failure on a stealth build. Pause-and-diagnose is the right reflex; sprinting, switching brokers, or assuming the algo will handle it each fails differently.'),

  q(4380524, 'Career Skills', CHAPTER, 'Catching a block opportunistically',
    'Day 6 of the build. Your high-touch trader gets a call: another fund has $60M of TSCO to offer at a 5bp discount to last. Polaris still has $180M of parent order remaining. What is the right play?',
    'Take the block in full — $60M at 5bp through last is meaningful price improvement vs the algo\'s expected cost, and clearing a third of the residual size accelerates the build at favourable terms',
    [
      ['Pass on the block because the algo is on schedule and unscheduled adds disturb the plan', 'A block at price improvement is the exact reason high-touch is in the mix. Passing on it is a refusal to use the optionality the desk preserved.'],
      ['Take half the block ($30M) to split the risk', 'Splitting the block when the price is right is leaving free money — and may push the seller to find another buyer for the rest, undermining the relationship.'],
      ['Take the block but pause the algo for the rest of the build to avoid over-buying', 'Pausing the algo after a block is reasonable for a day to digest, but pausing for the rest of the build slows the parent order without an analytical reason.'],
    ],
    'Opportunistic blocks at price improvement are the whole reason to reserve high-touch capacity on a stealth build. Pass-on, split-and-trim, or kill-the-algo each give back the optionality that was deliberately preserved.'),

  q(4380525, 'Career Skills', CHAPTER, 'Adjusting to intraday news',
    'Day 8 of the build, mid-morning. A peer of TSCO (also large-cap software) prints a strong quarter and the sector lifts 2.5%. TSCO is up 3.2%. How should the algo respond?',
    'Reduce participation rate temporarily — the lift compresses the variant view in the near term and chasing into a sector rally trades worse than waiting; restart full participation once the move settles',
    [
      ['Increase participation to ride the momentum higher', 'Chasing a sector rally on a build trades worse, not better — the impact cost rises with the lift and the entry price deteriorates. Restraint is the discipline here.'],
      ['Stop the build entirely and wait for a pullback', 'Stopping the build entirely on a 3% intraday move overreacts. The right adjustment is to reduce, not pause, and only if the move persists into the next day reassess.'],
      ['Continue at planned participation because the algo is benchmark-anchored and intraday moves wash out', 'Continuing at planned participation through a 3%+ intraday move locks in worse fills than the benchmark assumed. A small downward adjustment is cheap insurance.'],
    ],
    'Intraday news that compresses the variant view in the short term is a reason to reduce participation, not stop or chase. The algo benchmark is a guide; the trader\'s judgment about entry price is the override.'),

  q(4380526, 'Career Skills', CHAPTER, 'Concurrent HCO liquidation conflict',
    'You are simultaneously building $400M TSCO and liquidating $250M HCO for Polaris. The trading desk asks whether the two orders should share information across pods. What is the right boundary?',
    'Same client and same desk, so internal coordination is appropriate — but Chinese-walled from any other client trading TSCO or HCO, and the size, timing, and participation rate of each order remain confidential outside Polaris\'s coverage team',
    [
      ['Strict information barrier between the two orders because they are different names', 'Two orders for the same client with the same desk should coordinate on execution to avoid stepping on each other (e.g. release of buying power for cash). Walling them off internally invents a barrier that does not serve the client.'],
      ['Share the full context including with the desk\'s prop traders so the firm has the best read', 'Sharing client order context with prop traders crosses a hard line — that is exactly the conflict structure Chinese walls are designed to prevent.'],
      ['Share the size with other clients who are also active in TSCO so the market knows there is liquidity', 'Disclosing client order size to other clients is a serious breach. Order information stays inside the client\'s coverage team plus the executing trader.'],
    ],
    'Information boundaries on concurrent client orders sit at the client/firm and client/client lines, not between two orders for the same client. Internal coordination for the same client is appropriate; cross-client disclosure or prop visibility is not.'),

  q(4380527, 'Career Skills', CHAPTER, 'Post-trade TCA framing',
    'The TSCO build finishes on Day 10. Realised cost was 18bp vs arrival benchmark; pre-trade estimate was 22bp. How do you frame the post-trade TCA for Polaris?',
    'Beat the pre-trade estimate by 4bp, decomposed into how much came from the algo (steady working), how much from the block on Day 6, and how much from the participation reduction on Day 8 — so the PM sees what worked and what to repeat',
    [
      ['Just report the 18bp headline and let the PM ask follow-ups', 'Headline-only TCA reads as light. The PM\'s next question will be "why" — leading with the decomposition shows the desk understands its own execution.'],
      ['Frame the beat as random good luck so as not to overpromise on future builds', 'Calling the beat luck is the wrong overcorrection. The decomposition shows which decisions earned the bps; that is the basis of future trust, not luck framing.'],
      ['Compare 18bp to the VWAP benchmark instead because that is the industry standard', 'Switching benchmarks post hoc is exactly the move TCA discipline is meant to prevent. The benchmark Polaris cared about was arrival; report against it.'],
    ],
    'Post-trade TCA earns its keep by decomposing the result into the decisions that produced it. Headline-only, luck framing, or post-hoc benchmark switching each waste the chance to convert one good execution into the basis of the next.'),

  q(4380528, 'Career Skills', CHAPTER, 'Handling a missed block',
    'Day 9. Another fund offers $40M of TSCO and your high-touch trader cannot reach Polaris\'s trader fast enough to confirm; the block goes to a competitor. How do you handle the post-mortem with Polaris?',
    'Raise it explicitly with Polaris\'s trader in the EOD recap, name the latency that cost the block, and propose a standing pre-authorisation for blocks under a defined size threshold so the next one is captured',
    [
      ['Skip mentioning it because the block is gone and the build is nearly complete', 'Hiding a missed block when the post-trade context will surface it anyway is worse than naming it. Raising it builds trust; hiding it erodes it.'],
      ['Blame the desk routing for the latency without proposing a fix', 'Naming a problem without a proposed fix is half the work. The trust comes from the fix proposal, not the surfacing.'],
      ['Propose Polaris route future orders to a different broker', 'Recommending Polaris switch brokers because of one missed block is wildly outsized. The fix lives in the workflow, not in the relationship.'],
    ],
    'Missed blocks are a workflow problem with a workflow solution. Raising it openly with a concrete fix (standing pre-authorisation) is what converts a one-off failure into a structural improvement. Hiding or blame-shifting each erode the relationship.'),

  q(4380529, 'Career Skills', CHAPTER, 'Liquidating HCO on the other side',
    'The $250M HCO liquidation runs parallel to the TSCO build. ADV is ~$600M. How do you size the liquidation participation given the natural-buyer axe on your desk?',
    'Use the desk\'s natural buyer to clear a $80-100M block early at a tight spread, then run the residual through algos at 6-8% POV over the remaining days — captures the axe and protects the residual from leakage',
    [
      ['Run the full $250M through algos at 15% POV to finish fast', 'Fifteen percent POV on a name where the desk is a natural buyer wastes the block opportunity. The axe is exactly the kind of edge a thoughtful build uses.'],
      ['Hold off all execution until the desk\'s natural buyer can absorb the entire $250M', 'Holding the full liquidation against a single counterparty\'s appetite stalls the parent order. Use the axe to clear part; algo the rest.'],
      ['Use the algo only and ignore the natural buyer to keep the execution channels separate', 'Ignoring the natural buyer because of channel hygiene leaves price improvement on the table. The desk\'s axe is exactly what the natural-buyer side of high-touch is for.'],
    ],
    'A natural-buyer axe on the other side of a liquidation is an edge to use, not a channel to ignore. Clear the size you can at price improvement, then algo the residual — the discipline is to deploy both channels for what each does best.'),

  // -------------------------------------------------------------------------
  // LESSON 4 — Hedging overlay (4380530–4380539)
  // SPX puts, TSCO/HCO single-name vol structures. Forces the learner to
  // price and structure the hedge that Polaris\'s book actually needs, with
  // explicit cost-benefit framing.
  // -------------------------------------------------------------------------
  q(4380530, 'Career Skills', CHAPTER, 'Why SPX puts vs other index hedges',
    'Polaris\'s net exposure is +130%, gross 180%, US-focused TMT/HC/Consumer. They want a tail hedge. Why SPX puts rather than NDX or RTY?',
    'SPX has the deepest options liquidity, tightest spreads at scale, and the broadest correlation to Polaris\'s diversified US book — NDX over-hedges the TMT tilt at the expense of HC/Consumer, RTY mismatches a large-cap book',
    [
      ['NDX puts are better because Polaris\'s biggest sector is TMT', 'A correct hedge matches the *whole book*, not the biggest sector. NDX puts the HC and Consumer sleeves under-hedged; SPX captures all three.'],
      ['RTY puts are better because small-cap volatility is higher and the hedge is cheaper per unit of notional', 'Cheaper-per-unit only matters if the hedge actually covers the exposure. Polaris runs large/mid-cap longs, so RTY would be the wrong correlation.'],
      ['VIX call options are the right tail hedge because they directly buy volatility', 'VIX calls are a vol hedge, not a market hedge — and the path-dependency and pricing make them an expensive way to insure a directional long. SPX puts are the standard for that job.'],
    ],
    'Index hedge selection is about correlation to the book, liquidity at the chosen size, and clean execution at the strike grid you need. SPX wins on all three for a diversified large-cap US fund; NDX, RTY, and VIX each fail on one of those axes.'),

  q(4380531, 'Career Skills', CHAPTER, 'Strike and tenor on the SPX put',
    'Polaris wants $200M notional of SPX put protection over the next 90 days. Spot SPX is 5400. Which structure fits the brief?',
    '90-day 5% out-of-the-money puts (strike ~5130) — sit at the edge of typical drawdown frequency, give meaningful gamma without the cost of ATM, and the tenor matches the catalyst calendar over Q1',
    [
      ['ATM 30-day puts because they have the highest delta', 'ATM puts at 30 days are very expensive insurance — they pay off on small moves but the theta decay is brutal over the period Polaris wants covered.'],
      ['25% out-of-the-money 1-year puts because deep tail protection is the cheapest per unit', 'Twenty-five percent OTM over a year is so far out that it rarely pays. It is the "wing" that looks cheap and never works as the hedge the PM thought she bought.'],
      ['ATM 6-month puts because they balance cost and protection', 'Six-month ATM is roughly the most expensive structure available for the protection profile. The brief is a tactical Q1 hedge — tenor and strike should match it.'],
    ],
    'Strike and tenor are the load-bearing choices on an index hedge. 5% OTM at 90 days for a Q1 tactical hedge balances cost, gamma, and tenor; ATM short-dated, deep-tail long-dated, and ATM mid-dated each fail one of those tests.'),

  q(4380532, 'Career Skills', CHAPTER, 'Funding the put with a call sell',
    'The straight 90-day 5130 puts cost ~95bp of notional. Polaris\'s PM asks whether a put-spread collar would lower the cost. How do you frame the trade-off?',
    'A 5130/4900 put spread roughly halves the premium but caps payoff at the lower strike — appropriate if Polaris\'s tail concern is a 5-10% drawdown rather than a 1987-style crash; pair it with a covered call only if she is willing to give up upside on the index',
    [
      ['Always sell a call to fund the put because cost-zero collars are optimal', 'Cost-zero collars cap upside, which a +130% net-long book is structurally exposed to. The funding decision has to weigh giving up index upside against the premium saving.'],
      ['Never sell calls because Polaris\'s book has equity upside exposure', 'Sometimes a measured call sell is fine if it is far OTM and the PM is comfortable with the cap. "Never" is too rigid.'],
      ['Use a put ratio instead because it gives leverage at low cost', 'Put ratios create open downside risk past the lower strike — exactly the tail Polaris is trying to hedge. The structure inverts the brief.'],
    ],
    'Funding choices on a hedge sit on the trade between premium saved and payoff capped. Put spreads cap the payoff; call sells cap the upside; ratios re-introduce tail risk. Match the structure to what Polaris is actually worried about, not to what looks cheapest.'),

  q(4380533, 'Career Skills', CHAPTER, 'TSCO single-name vol structure',
    'Polaris wants to hedge the TSCO position around the Q1 print (8 weeks out). Implied vol on TSCO 8-week ATM is 42 (rich vs 30-day realised 28). What structure fits?',
    'Buy a put spread (5% OTM down to 15% OTM) — captures defined downside if Q1 disappoints, lowers cost relative to outright puts when IV is rich, and the wing limit is acceptable because earnings gaps rarely exceed 15%',
    [
      ['Buy an outright ATM put because the print is the binary event', 'ATM puts at 42 vol are paying full price for the binary. Put spreads exploit the elevated IV by selling the wing back; the structure is cheaper for the protection Polaris actually needs.'],
      ['Sell volatility because IV is rich vs realised', 'Selling vol on a long position you are hedging is the opposite of the brief — it doubles the long exposure. Rich IV is a reason to buy spreads, not to sell straddles into the print.'],
      ['Use a collar by selling a call to fund the put', 'A collar on TSCO into Q1 caps the upside Polaris is paying for in the long. The hedge brief is downside; the call sell undoes the position.'],
    ],
    'Single-name vol hedges around earnings exploit the IV term structure and the elevation vs realised. Put spreads capture defined downside while monetising the rich wing; outright puts overpay; vol sells and collars run against the brief.'),

  q(4380534, 'Career Skills', CHAPTER, 'HCO short-vol on the liquidation',
    'Polaris is selling HCO and will be flat the name within 10 days. The PM asks whether to overlay any options. What is the right answer?',
    'No overlay — once the cash position is flat, there is nothing to hedge or enhance, and adding options to a position you are exiting introduces a new exposure rather than managing the old one',
    [
      ['Sell covered calls against the residual long to harvest premium', 'Selling calls against a position you are exiting limits the upside on the exit and complicates the unwind. The simple answer (no overlay) is the right one.'],
      ['Buy puts to lock in the price during the 10-day liquidation', 'Buying puts on a position you are actively selling double-pays: you pay the spread on the cash exit and the premium on the put. The right hedge for a 10-day liquidation is faster execution, not options.'],
      ['Sell straddles to harvest vol while the position is being unwound', 'Selling straddles into a 10-day exit window introduces gamma risk just as the cash position decays. The overlay creates new exposure, not protection.'],
    ],
    'A position being actively exited does not need an options overlay — the cash trade is doing the work. Adding options to a winding-down position layers exposure rather than managing it; the discipline is to let the unwind finish clean.'),

  q(4380535, 'Career Skills', CHAPTER, 'Pricing the SPX put with the desk',
    'Equity derivatives quotes the 90-day SPX 5130 put at 96bp mid, 99bp offer. The screen shows 94/97. How do you handle the negotiation for Polaris on $200M notional?',
    'Push back on the offer with the screen as reference, ask for 96bp on the size given it is a clean tactical hedge with a known client — and be ready to take 97 if the desk holds, since the spread is reasonable for the size',
    [
      ['Take the 99bp offer because the desk is the natural counterparty', 'Taking the offer without pushing is leaving bps on the table on a $200M notional ticket. The screen is the reference; the desk\'s number should respond to it.'],
      ['Demand the bid (94bp) because the screen is the true market', 'Demanding the bid on a buy ticket is theatrical and signals you do not understand spread mechanics at size. The push is toward mid, not through it.'],
      ['Ask three brokers to compete on the trade simultaneously', 'Three-way competition on a single hedge ticket signals to the market that Polaris is buying SPX puts in size — exactly the leakage a single-counterparty hedge avoids.'],
    ],
    'Pricing a hedge with the desk is a calibrated push toward mid using the screen as reference, with awareness that the size and the cleanliness of the client justify holding fast. Taking the offer, demanding the bid, or shopping the trade each fail differently.'),

  q(4380536, 'Career Skills', CHAPTER, 'Delta-hedging concerns at expiry',
    'The 90-day SPX put expires on the third Friday of the month. Polaris asks whether to roll early or hold to expiry. What is the right framing?',
    'Roll 5-10 days before expiry to avoid the gamma whip near the strike and the liquidity squeeze on the last few days — the small theta given up is worth the cleaner exit and pricing',
    [
      ['Hold to expiry to capture the last of the theta in the desk\'s favour', 'Holding deep into expiry on a put hedge invites a gamma whip if the index hovers near the strike, and the bid-offer widens. The small theta is not worth the execution noise.'],
      ['Roll the day before expiry to maximise the theta capture', 'One-day roll is the worst of both worlds — full gamma exposure and the worst liquidity window. The standard practice is 5-10 days out.'],
      ['Always close at the start of the contract to avoid any expiry risk', 'Closing early in the contract leaves protection on the table and racks up unnecessary turnover. The roll discipline is *near* expiry, not at the front of the contract.'],
    ],
    'Expiry management on index puts is about timing the roll to avoid gamma noise and liquidity widening, not maximising theta capture or eliminating expiry risk entirely. Five to ten days before is the standard window for clean execution at size.'),

  q(4380537, 'Career Skills', CHAPTER, 'Cross-hedge mismatch',
    'A junior coverage colleague suggests hedging Polaris\'s entire TMT exposure with SPX puts alone, no single-name overlay. What is wrong with that frame?',
    'SPX is correlated to TMT but not perfectly — single-name idiosyncratic risk in TSCO around Q1 print is not captured by an index hedge, so the TSCO put-spread overlay is doing a different job than the SPX hedge',
    [
      ['Nothing is wrong — SPX hedges everything correlated to the market', 'Index hedges capture beta, not idiosyncratic event risk. The TSCO Q1 print can move the name 10% while SPX moves 1%; the cross-hedge does not catch it.'],
      ['SPX is uncorrelated to TMT so it is the wrong hedge at all', 'SPX is significantly correlated to large-cap TMT; the criticism is that the correlation is incomplete, not that there is no correlation.'],
      ['Single-name vol is always more expensive so the index hedge is correct', 'Single-name vol is often more expensive per dollar of notional, but that is a cost question, not a coverage question. The two hedges do different jobs.'],
    ],
    'Cross-hedges work for the beta they actually capture and fail for the idiosyncratic risk they do not. SPX hedges market drawdown across the book; single-name puts hedge event risk in concentrated positions. They are complements, not substitutes.'),

  q(4380538, 'Career Skills', CHAPTER, 'Vega exposure across the hedge book',
    'After putting on $200M SPX put notional and the TSCO put spread, Polaris\'s overall portfolio vega is meaningfully long. The risk team flags it. How should the desk think about this?',
    'Long vega is the natural result of buying protection at scale — flag it explicitly to the PM as a known feature of the hedge structure, and discuss whether trimming the SPX put size or shortening tenor would bring vega back to a level the risk team accepts',
    [
      ['Sell volatility somewhere else to offset the vega without changing the hedge', 'Layering a vol sell to offset bought protection introduces a new exposure rather than managing the existing one. The cleanest fix is in the hedge itself, not on top of it.'],
      ['Ignore the flag because vega is a derivative metric and what matters is dollar payoff', 'Vega is exactly what governs the path of the hedge\'s value before payoff. Ignoring it leaves the PM exposed to mark-to-market swings she may not have signed up for.'],
      ['Replace the puts with futures to remove vega entirely', 'Replacing protective puts with futures sells the optionality the hedge was designed to give. The right adjustment is sizing or tenor, not changing the instrument.'],
    ],
    'Vega is a known feature of a protective hedge book — name it, size it, and discuss whether the hedge\'s structure (size, tenor, strike) needs adjusting. Layering offsets, ignoring the flag, or swapping out the protection each lose part of what the hedge is supposed to do.'),

  q(4380539, 'Career Skills', CHAPTER, 'Stress-testing the hedge against the long',
    'Polaris asks: if SPX drops 8% and TSCO drops 12% in the same week, what does the hedge book actually pay? How should you walk her through it?',
    'Walk the scenario step by step — SPX puts move from 5% OTM toward ITM and pay roughly the index move times delta plus gamma, TSCO put spread moves toward the lower strike and caps near the wing, net hedge payoff covers a defined fraction of the long P&L',
    [
      ['Reassure her that the hedges will work without walking specifics', 'Reassurance without the scenario walk is exactly what hedge buyers should not accept. The walk is how she knows the hedge actually fits the tail she fears.'],
      ['Send her a model output table and let her work through it', 'Sending a table is supporting material but it does not replace walking the scenario with her. The walk is where the load-bearing assumptions come out.'],
      ['Tell her the hedges are designed for this exact scenario', 'Saying "designed for this scenario" is salesmanship, not analysis. The PM needs the numbers, the strikes, and the assumptions — walk them.'],
    ],
    'Stress-testing a hedge against the long is the conversation that earns the hedge\'s purchase. Walking specific moves, deltas, and payoff caps — not reassurance or a table — is what makes the protection credible before the tail event arrives.'),

  // -------------------------------------------------------------------------
  // LESSON 5 — Risk + compliance + quarter-end (4380540–4380549)
  // P&L attribution, MNPI safeguards, Reg M, end-of-quarter review. Forces
  // the learner to close the loop on the build with the back-end discipline
  // that separates a one-off win from a durable relationship.
  // -------------------------------------------------------------------------
  q(4380540, 'Career Skills', CHAPTER, 'P&L attribution structure',
    'Quarter-end review with Polaris. You want to attribute the TSCO build\'s P&L cleanly. Which decomposition is most useful?',
    'Underlying TSCO move (mark-to-market on the long), execution cost vs arrival benchmark, hedge cost (SPX puts + TSCO put spread), and financing — four separate lines so the PM sees each lever\'s contribution',
    [
      ['One total P&L number for the TSCO trade complex including hedge', 'A single number hides which decisions worked. The four-line decomposition is what tells the PM whether to repeat the execution choices, the hedge sizing, or both.'],
      ['Underlying move plus hedge offset, with execution and financing grouped as "trading costs"', 'Grouping execution and financing buries the execution decisions in noise. The PM cares whether the algo split worked — it deserves its own line.'],
      ['Mark-to-market versus the entry price, full stop', 'MTM vs entry ignores the hedge cost and the financing entirely. It is the headline number the PM already sees on her own screen.'],
    ],
    'P&L attribution earns its keep by exposing each decision\'s contribution. Four lines (underlying, execution, hedge, financing) give the PM the levers to repeat or adjust; bundled numbers waste the post-mortem.'),

  q(4380541, 'Career Skills', CHAPTER, 'MNPI safeguards on the desk',
    'During the build, your equity research analyst published a TSCO note. You also had ongoing dialogue with TSCO\'s investor relations team. Where do the MNPI safeguards bite?',
    'Research analyst dialogue is on the public side of the wall; IR conversations stay within the parameters of public disclosure (no selective material non-public detail) — the safeguard is that any selectively-shared MNPI from IR would taint the desk\'s ability to trade, so the rule is to confine IR dialogue to public information',
    [
      ['Any contact between sales-trading and the company is MNPI exposure and must be avoided', 'Sales-trading desks routinely engage with companies on public information. The line is at *selectively-disclosed non-public material* information, not at contact itself.'],
      ['Once research has published the note, anything the analyst learned is fully public', 'Research analysts can carry non-public information that is not in the published note. The wall around the research analyst\'s broader knowledge persists past the publication.'],
      ['MNPI safeguards only apply to corporate-finance side and not to S&T', 'S&T is fully subject to MNPI rules. The "side" distinction is about underwriting flow, not about whether MNPI rules apply to trading.'],
    ],
    'MNPI safeguards on a trading desk are about confining sources to public information and walling off any non-public material flow. Contact with the company is allowed; selective disclosure is not. The safeguard lives at the *type* of information, not the existence of dialogue.'),

  q(4380542, 'Career Skills', CHAPTER, 'Reg M applicability check',
    'Polaris asks if there are any Reg M restrictions to be aware of on the TSCO build. TSCO has no pending equity offering. How do you answer?',
    'Reg M restricts trading during the restricted period of a distribution (an offering by the issuer or a major shareholder). With no pending offering, Reg M does not apply — but the question is the right one to ask because the answer would be different if TSCO were in the middle of a follow-on',
    [
      ['Reg M always applies to large-cap equities so the build needs to slow down', 'Reg M is event-driven, not size-driven. With no distribution in flight, it does not bite — the slowdown reason has to be impact, not regulation.'],
      ['Reg M is irrelevant to S&T and only applies to underwriting', 'Reg M directly governs trading by participants during a distribution. Saying it is "only underwriting" is the kind of half-answer compliance officers correct.'],
      ['Reg M applies only to short selling, so a long build is unaffected', 'Rule 105 (a piece of Reg M) restricts short selling before an offering, but the broader Reg M framework also restricts certain bids and purchases by distribution participants. Reducing Reg M to short-sale rules misstates the regime.'],
    ],
    'Reg M is an event-triggered regime tied to distributions, with specific rules for distribution participants. Knowing when it applies and when it does not is part of every build conversation; defaulting to "always" or "never" both mislead.'),

  q(4380543, 'Career Skills', CHAPTER, 'Best-execution documentation',
    'Compliance reviews the TSCO build for best-execution evidence. What documentation matters?',
    'Pre-trade TCA estimate, the algo/high-touch split rationale, post-trade TCA with decomposition, justification for the block taken on Day 6, and the participation adjustment on Day 8 — the chain shows the desk acted on a documented plan with reasoned deviations',
    [
      ['The final execution price relative to VWAP, full stop', 'A single benchmark comparison is the thinnest possible best-ex evidence. The documentation chain shows the *reasoning* behind each decision; the price alone shows the outcome but not the discipline.'],
      ['Internal emails between the salesperson and trader during the build', 'Emails alone are not best-ex documentation — they are noise unless they show the documented decision points. The structured TCA and rationale chain is what compliance needs.'],
      ['The fact that the order was filled at a price the PM accepted', 'PM acceptance is irrelevant to best-execution evidence. Best-ex is about the desk\'s process, not the client\'s sign-off.'],
    ],
    'Best-execution documentation lives in the chain of reasoned decisions: pre-trade plan, in-flight deviations with reasons, post-trade decomposition. Single benchmarks, raw email trails, or client sign-off each miss what compliance is actually checking for.'),

  q(4380544, 'Career Skills', CHAPTER, 'Risk team flagging concentration',
    'Polaris\'s own risk team flags that TSCO at 9-10% of NAV exceeds their typical single-name cap of 6%. Your salesperson role is to coverage; how do you handle the conversation when the PM asks for your view?',
    'Acknowledge it is well outside the policy norm, note that the catalyst path and hedge overlay are what would justify the exception, and suggest the PM document the exception process with her own risk team — coverage does not adjudicate her internal policy',
    [
      ['Tell the PM to ignore the risk team because the desk has confidence in the trade', 'Telling a PM to ignore her own risk team is the worst possible coverage response. The internal risk process is hers; coverage informs, it does not override.'],
      ['Insist the PM cut the position to meet the 6% cap', 'Insisting on a position cut is also outside coverage\'s role. The right move is to support the PM\'s process and surface the relevant analytical inputs.'],
      ['Decline to comment because the policy is internal to Polaris', 'Declining to comment leaves the PM without the analytical support she asked for. The right answer is to inform the discussion, not to abdicate it.'],
    ],
    'Coverage of a fund respects the fund\'s internal policy process. The salesperson\'s role on a concentration flag is to surface the analytical inputs (catalyst, hedge, exception logic) — not to override the risk team or refuse to engage.'),

  q(4380545, 'Career Skills', CHAPTER, 'Compliance check on selective color',
    'A few weeks after the build, Polaris\'s PM thanks you for "the color you shared on which other funds were active in TSCO." You do not recall sharing client-identifiable information. How do you handle?',
    'Treat it seriously: revisit your own notes, raise it with compliance proactively so the conversation is documented from your side, and be careful in future calls to keep aggregate color aggregate — the compliment is the warning sign',
    [
      ['Take the compliment and move on because the PM\'s framing is her interpretation', 'Letting the compliment slide on potentially client-identifiable color is the path to a much bigger problem later. Surface it with compliance immediately.'],
      ['Tell the PM she misremembered to set the record straight', 'Telling the client she misremembered is defensive and unhelpful. The action is internal documentation and tightening of future color, not pushing back on the client.'],
      ['Ask the PM to be more careful about what she repeats so it does not come back to you', 'Asking the client to manage her own discretion shifts the problem the wrong way. The desk is responsible for what it shares; the fix lives on your side.'],
    ],
    'A client compliment that implies you shared identifiable color is a compliance signal, not a relationship win. Proactive documentation and tightening of future color is what keeps the line clean; defensive pushback or shifting the burden to the client both fail.'),

  q(4380546, 'Career Skills', CHAPTER, 'EOQ commission run',
    'Quarter-end. Polaris is reviewing its commission allocations across brokers. Your firm executed the TSCO build and HCO liquidation, plus daily coverage. What does Polaris look at?',
    'Total commission paid, allocated by service tier (research, execution, capital introduction, coverage), with execution quality (TCA results) and idea quality (hit rates on shared ideas) as qualitative overlays — Polaris will reward the firms whose value-add was traceable',
    [
      ['Total commission paid, full stop', 'Total alone does not tell Polaris which firm earned which dollar. The service-tier breakdown is what informs next quarter\'s allocation.'],
      ['Number of trades routed to the firm', 'Trade count is a weak proxy — a single $80M block matters more than 50 small algo slices. The lens is dollar commission and tier, not count.'],
      ['The personal relationship strength between the PM and the salesperson', 'Personal relationship affects the close calls but is not the structure of how funds allocate commissions. The frame is service tier with relationship as one input, not the whole.'],
    ],
    'End-of-quarter commission review is structured: tier breakdown plus traceable value-add. Headline totals, trade counts, and relationship-only framing each miss how funds actually defend their allocation choices to their own management.'),

  q(4380547, 'Career Skills', CHAPTER, 'Cross-product P&L conversation',
    'In the EOQ review, Polaris\'s COO asks about total wallet share: cash equities, derivatives, prime brokerage, capital introduction. How do you frame your firm\'s value across products?',
    'Walk each product line with concrete examples — the TSCO build through cash equities, the SPX puts through derivatives, the margin financing through PB — and acknowledge gaps (e.g. capital intro under-delivered this quarter) honestly to set up next quarter\'s commitment',
    [
      ['Defend the wallet share aggressively to maximise next quarter\'s allocation', 'Aggressive defence reads as transactional. The COO is testing the firm\'s self-awareness; honest acknowledgement of gaps wins the next quarter more than defensiveness.'],
      ['Stick to cash equities since that is your direct relationship area', 'A COO\'s wallet conversation is cross-product by design. Sticking to your lane misses the chance to position the firm as a coordinated counterparty.'],
      ['Avoid the gaps and emphasise only the wins', 'Avoiding gaps invites the COO to surface them. Owning them — and naming the fix — is what converts a quarter-end review into next quarter\'s mandate.'],
    ],
    'Cross-product wallet conversations live on honest self-assessment plus concrete examples. Aggressive defence, single-product framing, and gap-avoidance each lose the conversation; naming the wins, the gaps, and the next-quarter commitment is what earns the wallet.'),

  q(4380548, 'Career Skills', CHAPTER, 'When the hedge under-performs',
    'The quarter ends with TSCO up 14% and the put spread expiring worthless. The hedge cost ~70bp of notional. The PM mutters that the hedge was a waste. How do you frame the conversation?',
    'Reframe: the put spread did exactly its job — it priced and protected an asymmetric Q1 risk that did not materialise; the cost was the insurance premium, not a loss. Show the alternative-scenario payoff to anchor that the hedge is judged ex ante, not ex post',
    [
      ['Agree the hedge was unnecessary and recommend lighter coverage next time', 'Agreeing that an insurance premium was a waste because the bad outcome did not happen is the canonical hedge fallacy. Insurance is judged ex ante; the cost is the price of optionality.'],
      ['Argue the hedge would have paid had the print been worse, leaving the framing implicit', 'A vague "it would have paid" without the alternative-scenario walk does not anchor the lesson. Show the numbers in the bad outcome so the framing sticks.'],
      ['Pivot away from the hedge discussion entirely', 'Pivoting away leaves the PM\'s remark as the last word on hedging policy. The conversation has to happen — the alternative is that next quarter\'s hedge does not get put on.'],
    ],
    'Hedge under-performance in a positive market is the standard test of hedge discipline. Reframe as the cost of optionality, show the alternative scenario, and protect the policy — agreeing or pivoting each erode the structure that will be needed when the tail does arrive.'),

  q(4380549, 'Career Skills', CHAPTER, 'Setting up next quarter',
    'You wrap the EOQ review with Polaris. The TSCO build worked; the HCO liquidation worked; the hedge performed its insurance function. What is the right close for the meeting?',
    'Name three concrete commitments for next quarter — a specific coverage rhythm change Polaris asked for, one product-area improvement you owe (e.g. capital intro), and one analytical investment (e.g. deeper consumer-discretionary coverage) — so the next quarter starts with a documented plan',
    [
      ['"It was a great quarter, thanks for the partnership" — keep it relational', 'A relational-only close ends the meeting without forward structure. The next quarter starts from nothing instead of from a documented plan.'],
      ['Run through the wins one more time so the PM remembers them at allocation time', 'Re-running the wins reads as fishing for commission and wastes the close. The PM remembers the wins; what she wants is the forward plan.'],
      ['Promise broad improvement across every product line', 'Vague improvement promises are the opposite of commitment. Three concrete items, with named owners, is what a serious counterparty offers at quarter-end.'],
    ],
    'EOQ closes earn next quarter by being concrete and forward-looking. Three specific commitments — rhythm, product gap, analytical investment — give the relationship structure; relational warmth, retrospective wins, and vague promises each lose the chance to lock the next mandate in.'),
]
