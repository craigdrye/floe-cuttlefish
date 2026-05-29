import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// PE CAPSTONE — BrightSpark Industries LBO
// ----------------------------------------------------------------------------
// 50 integrative questions (IDs 4390500–4390549) carrying the learner through
// a single mid-market specialty-chemicals LBO from initial screen to year-5
// exit. Same arc as the VC capstone (FieldChart): one deal, five lessons,
// every question company-specific, every wrong-answer rationale bespoke.
//
// BrightSpark Industries context (consistent across every question below):
//   - US specialty chemicals manufacturer; high-performance coatings for
//     aerospace, defense, and auto OEMs.
//   - $340M revenue, $58M EBITDA (17% margin), $48M LTM FCF (83% conversion).
//   - 28 years old, founder-CEO age 67 retiring, three family members on board.
//   - 8 US manufacturing sites, 1,400 employees, no international footprint.
//   - Top 10 customers = 55% of revenue (Boeing, Lockheed, Raytheon,
//     Northrop, Ford, GM, etc.). Growth 6% LTM, 7–8% expected.
//   - Net debt $35M at sale. 25-buyer auction narrowed to a second round of 4
//     (3 PE sponsors, 1 strategic). Sell-side ask 10–11x EBITDA = $580–640M EV.
//   - Hawthorne Capital: $2.5B Fund IV, specialty industrials focus.
//
// Voice: matches vcCapstoneQuestions.ts — specific, evidence-anchored, no
// filler, no strawman distractors. Each wrong-answer rationale is bespoke;
// the lesson on each question is the integrative takeaway tying the choice
// back to the wider deal.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe PE capstone canonical bank'

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

const CHAPTER = 'Capstone: BrightSpark Industries LBO'

// Difficulty mix: 15 at 3, 25 at 4, 10 at 5 across the 50 questions.
export const PE_CAPSTONE_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Lesson 1: Initial screen + IOI (4390500–4390509)
  4390500: 3, // Fit to Hawthorne Fund IV mandate
  4390501: 3, // First-pass thesis framing
  4390502: 4, // Value drivers — what actually moves EBITDA
  4390503: 4, // Multiple defensibility at 10–11x
  4390504: 4, // Reading the auction process
  4390505: 4, // IOI valuation range to submit
  4390506: 3, // Mgmt meeting prep — questions to bring
  4390507: 5, // Founder-CEO retirement risk framing
  4390508: 4, // Specialty chemicals comp set selection
  4390509: 3, // Internal staffing for second-round push

  // Lesson 2: Diligence (4390510–4390519)
  4390510: 4, // Customer concentration — Boeing/Lockheed quantification
  4390511: 5, // Aerospace cycle exposure read
  4390512: 4, // Operating capacity across 8 sites
  4390513: 4, // QoE adjustments to bridge to true EBITDA
  4390514: 3, // Environmental and EHS diligence scope
  4390515: 4, // Customer-call plan for defense primes
  4390516: 5, // Red flag: founder-CEO add-backs
  4390517: 4, // Working capital normalization
  4390518: 3, // Insurance and product-liability tail
  4390519: 4, // Pension and post-retirement obligations

  // Lesson 3: LBO model (4390520–4390529)
  4390520: 3, // Sources and uses build
  4390521: 4, // Debt capacity given EBITDA quality
  4390522: 4, // Debt structure mix — TLB vs unitranche
  4390523: 4, // Returns at 10.5x entry — base case IRR
  4390524: 5, // Sensitivity table — multiple vs growth vs leverage
  4390525: 4, // Management rollover and MIP modeling
  4390526: 3, // Transaction and financing fees
  4390527: 4, // Capex assumptions across 8 plants
  4390528: 4, // Cash sweep mechanics and prepayment
  4390529: 3, // Exit multiple assumption discipline

  // Lesson 4: IC memo + bid (4390530–4390539)
  4390530: 4, // IC memo structure for BrightSpark
  4390531: 5, // Final-round bid level — where to land
  4390532: 4, // Earnout vs straight cash trade-off
  4390533: 4, // Management rollover sizing
  4390534: 4, // MIP design — options pool size and vesting
  4390535: 3, // Bid letter mechanics and contingencies
  4390536: 5, // Antitrust and CFIUS read on defense exposure
  4390537: 4, // Reps and warranties insurance ask
  4390538: 3, // Financing commitment papers
  4390539: 4, // Walk-away discipline if outbid by strategic

  // Lesson 5: Operating plan + exit (4390540–4390549)
  4390540: 3, // First 100 days plan structure
  4390541: 4, // CEO succession execution
  4390542: 4, // Commercial value lever — pricing on coatings
  4390543: 4, // Operational lever — site consolidation analysis
  4390544: 5, // Add-on M&A pipeline construction
  4390545: 4, // International expansion read
  4390546: 4, // Year-5 exit path — strategic vs secondary
  4390547: 5, // Strategic buyer universe mapping
  4390548: 4, // IPO as exit path read
  4390549: 3, // Final returns recap and LP communication
}

export const peCapstoneQuestions: Question[] = [
  // -------------------------------------------------------------------------
  // LESSON 1 — Initial screen and IOI (4390500–4390509)
  // Output: the front page of the BrightSpark screening memo — does the deal
  // fit Hawthorne Fund IV, what is the underwriting thesis, what value
  // drivers actually move the needle, and what number goes on the IOI.
  // -------------------------------------------------------------------------
  q(4390500, 'Career Skills', CHAPTER, 'Fit to Hawthorne Fund IV mandate',
    'Hawthorne Capital is a $2.5B Fund IV with a specialty industrials focus. BrightSpark is a $340M revenue specialty chemicals company at $58M EBITDA, with an asking range of $580–640M EV. How does the deal fit the mandate at first glance?',
    'BrightSpark is squarely in mandate — specialty industrials sub-sector, mid-market enterprise value, and a check size of roughly $250–300M of equity that lines up with Fund IV\'s typical 10–12 deal construction over a $2.5B vintage',
    [
      ['The deal is too small for Fund IV because $580M EV implies sub-$200M equity check sizes', 'A $250–300M equity check is exactly in the meaty middle of a $2.5B fund deploying across 10–12 platforms — calling it "too small" misreads basic fund construction math.'],
      ['Specialty chemicals is adjacent to industrials but technically a different sector, so the deal needs a special-situation exception', 'Specialty chemicals for industrial end-markets (aerospace coatings, auto OEM coatings) is the canonical specialty-industrials sub-sector. Treating it as a sector exception signals the associate has not internalized the fund\'s actual mandate.'],
      ['The deal fits the mandate only if Hawthorne can write a stretch check above its typical range', 'Nothing about a $250–300M equity check is a stretch for a $2.5B fund. Framing it as a stretch fabricates a concern that does not exist in the actual fund math.'],
    ],
    'Fund-fit at first screen is two questions: sub-sector and check size. For Hawthorne Fund IV, BrightSpark passes both cleanly. Naming that explicitly in the screen memo prevents the partnership re-litigating mandate fit during the second round when everyone is busier.'),

  q(4390501, 'Career Skills', CHAPTER, 'First-pass thesis framing',
    'You are drafting the one-paragraph thesis for the BrightSpark screening memo. Which framing best captures the deal in a sentence the IC will read?',
    'Founder-led specialty chemicals platform with structural margins (17% EBITDA, 83% FCF conversion), entrenched aerospace and defense customer relationships, and a clear value-creation path through CEO succession, commercial discipline, and selective add-on M&A',
    [
      ['A high-growth chemicals business with strong margins and an experienced founder-CEO', 'Calling 6% growth "high-growth" is wrong, and naming the retiring founder as a strength without naming the transition risk shows the thesis has not engaged with the actual deal shape.'],
      ['A defensive industrials carve-out with predictable cash flows and limited downside', 'BrightSpark is not a carve-out — it is a founder-owned platform. Calling it a carve-out misrepresents the deal type, which changes the diligence shape and IC expectations.'],
      ['An aerospace and defense supplier with high customer concentration and stable end markets', 'A thesis focused only on the customer base ignores the value-creation levers (CEO succession, commercial, M&A) that justify a 10x+ multiple. The IC needs the path, not just the description.'],
    ],
    'A first-pass thesis names the asset, the structural quality (margins, conversion), and the path the sponsor will take to create value. For BrightSpark, the founder-led + succession + commercial + M&A frame is the version that justifies the bid level the IC will be asked to approve.'),

  q(4390502, 'Career Skills', CHAPTER, 'Value drivers — what actually moves EBITDA',
    'BrightSpark generates $58M EBITDA today. The screening memo has to name the 3 levers that could plausibly move EBITDA to $85–95M over a 5-year hold. Which set actually does that work?',
    'Pricing discipline on aerospace specifications (where switching costs are high), site-footprint optimization across the 8 plants, and 2–3 bolt-on acquisitions in adjacent coatings chemistries — each lever quantified with a margin or revenue contribution',
    [
      ['Top-line growth at 7–8% organically, GDP-plus margin expansion, and general overhead reduction', 'A list of generic levers is what gets memos rejected at IC. "GDP-plus margin expansion" is not a lever — it is a wish. Each lever needs a specific operational mechanism tied to BrightSpark\'s actual operations.'],
      ['Aggressive price increases across the customer base, headcount reduction at the plants, and dividend recaps to boost equity returns', 'Aggressive price increases against Boeing and Lockheed will damage the relationship and lose specifications. Plant headcount cuts in skilled chemicals manufacturing destroy capability. Dividend recaps are a financing tool, not an EBITDA lever.'],
      ['Customer diversification away from aerospace, expansion into European auto OEMs, and IT system consolidation', 'Diversifying away from aerospace customers actively destroys what makes BrightSpark valuable. European expansion is a multi-year capability build, not a 5-year lever. IT consolidation is a $1–2M item, not an EBITDA mover.'],
    ],
    'Value-creation levers have to be specific to the asset and quantifiable in dollar contribution. For BrightSpark, the pricing-on-specs, footprint, and bolt-on triad is the version that an operating partner can actually execute and an IC can actually underwrite — generic levers are how memos fail.'),

  q(4390503, 'Career Skills', CHAPTER, 'Multiple defensibility at 10–11x',
    'The seller is asking 10–11x EBITDA. Specialty chemicals comps trade at 9–12x depending on margin and growth profile. How should the screen memo defend a bid in this range?',
    'BrightSpark sits in the upper half of the comp set on margin (17% vs comp median ~14%) and FCF conversion (83% vs ~70%) but in the lower half on growth (6% vs ~8%) — the multiple defensibility is "premium margins, discount growth" and lands at roughly 10x',
    [
      ['Pay 11x because aerospace specialty chemicals always trades at a premium to the broader chemicals universe', 'Reflexive premium-for-aerospace is exactly the framing that gets sponsors to overpay. The discipline is to anchor on margins, growth, and FCF conversion against the actual comp set — not on a category narrative.'],
      ['Pay 9x because 6% growth is below the comp median and the founder transition adds risk', '9x undervalues the structural margin and FCF advantages BrightSpark genuinely has. Excessive conservatism loses the deal in a competitive process and signals the associate has not run the comps properly.'],
      ['Multiple is irrelevant if the IRR works at the underwritten growth and exit assumptions', 'Treating multiple as irrelevant to entry discipline is how sponsors talk themselves into bids they should not make. Entry multiple is the single largest determinant of returns over a 5-year hold — it is not optional.'],
    ],
    'Multiple defensibility is the discipline of placing the asset against the comp set on each load-bearing dimension — margin, growth, FCF conversion, end-market quality — and reasoning to a number. For BrightSpark, the "premium margins, discount growth" frame lands around 10x and is the version IC will accept.'),

  q(4390504, 'Career Skills', CHAPTER, 'Reading the auction process',
    'BrightSpark\'s banker ran a 25-buyer first round and narrowed to 4 in the second round — 3 PE sponsors plus 1 strategic. What does this auction shape tell you about how to approach the next phase?',
    'A 4-bidder second round with a strategic in the mix means the seller has real competitive tension and will likely push to the top of the range; Hawthorne has to assume the strategic can pay synergy-justified prices that PE sponsors cannot match without aggressive underwriting',
    [
      ['A 4-bidder process is small enough that the seller is signaling preference for a PE outcome', 'Strategics in a final round are not decoration. Sellers keep them in precisely because they pay premiums. Reading the strategic as a courtesy invite is exactly how PE sponsors get out-bid and out-prepared.'],
      ['The process is over-shopped after 25 first-round meetings, so bids in the second round will come in soft', '25 first-round buyers narrowing to 4 is a well-run process, not an over-shopped one. The narrowing is what creates urgency for the survivors — and they will bid accordingly.'],
      ['The strategic is unlikely to close because of antitrust concerns in aerospace coatings', 'Assuming the strategic will fall away on antitrust without doing the actual analysis is wishful thinking. The strategic\'s antitrust posture deserves its own diligence stream, not a hopeful dismissal.'],
    ],
    'Reading the auction shape is part of the underwriting. A 4-bidder final round with a strategic means real competitive tension and likely pricing at the top of the range — the sponsor has to bring its sharpest version of the bid, not its safest. Underestimating the process is one of the most expensive mistakes in PE.'),

  q(4390505, 'Career Skills', CHAPTER, 'IOI valuation range to submit',
    'Hawthorne has to submit an indication of interest letter with a valuation range. Sell-side ask is $580–640M EV (10–11x $58M EBITDA). What range should the IOI carry to keep Hawthorne in the second round without overcommitting?',
    'A range of $570–610M EV (9.8–10.5x), explicitly tied to confirmatory diligence on customer concentration and capex needs — high enough to make the second round, low enough to preserve flexibility on the final bid',
    [
      ['Submit at $640M (11x) to maximize the chance of advancing and use the second round to negotiate down', 'Bidding the top of the seller\'s range with the intent to "negotiate down" damages credibility — sellers and bankers remember sponsors who walk down their IOIs and treat them as unreliable next time.'],
      ['Submit at $520–560M (9–9.7x) to anchor low and create negotiating room', 'Anchoring below the seller\'s range gets the sponsor cut from the second round in a hot process. The IOI is a price of admission, not an opening offer in a one-on-one negotiation.'],
      ['Submit a single point estimate of $600M rather than a range to signal conviction', 'IOIs are typically ranges precisely because diligence is incomplete. A single point estimate without diligence basis is performative confidence that sophisticated bankers see through immediately.'],
    ],
    'IOI ranges are calibrated to keep the sponsor in the process while preserving flexibility. For BrightSpark, $570–610M tied explicitly to named diligence items signals serious engagement and credible underwriting — the two qualities that move a sponsor from the second round to the final round.'),

  q(4390506, 'Career Skills', CHAPTER, 'Mgmt meeting prep — questions to bring',
    'Hawthorne has been invited to a 3-hour management meeting with BrightSpark\'s founder-CEO and his CFO. Which set of questions earns the most diligence signal?',
    'How is pricing set on aerospace specifications, what is the CEO\'s personal succession plan and timeline, which of the 8 plants are most under-utilized, and what would each top-10 customer do if BrightSpark were acquired tomorrow',
    [
      ['Generic questions about strategy, culture, and growth ambition that let management lead the conversation', 'Open-ended strategy questions are how 3-hour management meetings produce zero signal. The discipline is to bring specific questions tied to the load-bearing risks in the deal — pricing, succession, footprint, customer reaction.'],
      ['Detailed questions about historical financials and accounting policies that the QoE team will cover separately', 'Accounting and historical financials belong with the QoE provider, not the founder-CEO. Burning a management meeting on items that will be in the data room is a waste of the most valuable hours in the diligence.'],
      ['Questions designed to test whether management will be receptive to aggressive cost cuts post-close', 'Test-the-founder questions on cost cuts at a first management meeting will get a defensive response and produce no useful signal. Cost-cut conversations come after diligence is anchored and the relationship is built.'],
    ],
    'Management meetings are the highest-information diligence hours available to the sponsor. The right questions are the ones only management can answer — pricing mechanics, succession plans, customer reactions, plant economics — and they should target the specific risks the deal hinges on, not general background.'),

  q(4390507, 'Career Skills', CHAPTER, 'Founder-CEO retirement risk framing',
    'BrightSpark\'s founder-CEO is 67, retiring within 12–18 months of close, and has built every top-10 customer relationship personally over 28 years. Three family members sit on the board. How should the screen memo frame this risk?',
    'Founder transition is the load-bearing risk on this deal — name it as such, plan for a CEO succession in months 6–12 with the founder transitioning to chairman, and identify the relationship-handover protocol for each of the top 10 customers as a 100-day priority',
    [
      ['Founder transition is standard at this stage; replace him with an external CEO at close and the risk resolves', 'Replacing a 28-year founder at close with no transition period and no relationship handover guarantees customer churn at the largest accounts. The risk is not standard — it is the deal\'s biggest single execution challenge.'],
      ['Keep the founder for 3–5 years on a consulting contract and avoid the transition entirely', 'Keeping a retiring 67-year-old in a quasi-CEO role for 3–5 years stalls every operational decision the sponsor needs to make. The transition has to happen — the question is how, not whether.'],
      ['The three family board members ensure continuity even if the CEO retires immediately', 'Family board members are not a substitute for the operating relationships the CEO built. Treating governance continuity as customer-relationship continuity is exactly the confusion that produces post-close revenue surprises.'],
    ],
    'Founder transition in a 28-year owner-operated business is the deal\'s single biggest execution risk. Naming it explicitly, planning the transition with a specific handover protocol, and treating customer-relationship handover as a 100-day workstream is what separates an underwritten succession plan from a hopeful one.'),

  q(4390508, 'Career Skills', CHAPTER, 'Specialty chemicals comp set selection',
    'For the BrightSpark valuation work, which comp set should the deal team build to support the screen memo?',
    'A focused comp set of specialty chemicals companies serving aerospace/defense/auto OEMs with EBITDA margins of 14–20% — including PPG aerospace, Sherwin-Williams aerospace, Hexcel coatings, plus 4–5 recent private-equity-backed transactions in the space',
    [
      ['The broad chemicals universe including commodity petrochemicals, agricultural chemicals, and specialty plastics', 'Commodity petrochemicals trade at 5–7x and have completely different end-market dynamics. Putting them in the comp set drags the multiple down for reasons unrelated to BrightSpark\'s actual profile.'],
      ['Aerospace primes like Boeing and Lockheed as comparable end-market businesses', 'Aerospace primes are BrightSpark\'s customers, not comps. They trade on different metrics (book-to-bill, program backlog) and at different multiples — confusing them with chemicals comps is a basic category error.'],
      ['Public industrial conglomerates with diversified portfolios, as a proxy for the chemicals exposure', 'Diversified conglomerates have so many moving parts that the implied chemicals multiple is unobservable. Comps need to be pure-play enough that the comparison is interpretable.'],
    ],
    'Comp set selection is half the valuation work. The right comp set for BrightSpark is specialty chemicals companies with similar end markets (aero/defense/auto) and similar margin profiles (14–20%) — plus relevant private transactions. Anything broader or narrower produces multiples the IC will not trust.'),

  q(4390509, 'Career Skills', CHAPTER, 'Internal staffing for second-round push',
    'Hawthorne has 6 weeks until final bids are due. The deal team is one partner, one principal, and one associate (you). What is the right way to staff the second-round push?',
    'Add a second associate from the bench for modeling and data-room coverage, bring in the in-house operating partner for chemicals to lead commercial diligence, and engage external advisors for QoE, environmental, insurance, and tax — the partner and principal stay on negotiation and IC prep',
    [
      ['Keep the team lean (partner, principal, associate) and have the associate cover everything to maintain consistency', 'A 6-week diligence on a $600M deal with 8 plants and aerospace customers cannot be covered by one associate without something material being missed. Lean staffing on a deal of this size is false economy.'],
      ['Hire a generalist consulting firm to run the entire diligence in parallel to the deal team', 'Outsourcing the entire diligence to a generalist firm without sector expertise produces a stack of decks the deal team has to translate. Specialist advisors in named workstreams plus internal deal-team ownership is the working pattern.'],
      ['Wait until the data room opens fully before adding resources, to avoid burning advisor fees on a deal that might not close', 'Waiting on staffing until the data room is fully populated wastes the early-round time advantage. Diligence at PE pace requires the team to be ready to ingest material the moment it lands.'],
    ],
    'Second-round staffing is the difference between a serious bidder and a paper one. Adding the operating partner for commercial work, engaging specialist external advisors on the named workstreams, and keeping the senior deal team on negotiation and IC prep is how the 6 weeks actually get used.'),

  // -------------------------------------------------------------------------
  // LESSON 2 — Diligence (4390510–4390519)
  // Output: BrightSpark-specific diligence findings on customer concentration,
  // operating capacity, QoE, and red flags. Forces the learner to look behind
  // the CIM and identify which numbers are load-bearing.
  // -------------------------------------------------------------------------
  q(4390510, 'Career Skills', CHAPTER, 'Customer concentration — Boeing/Lockheed quantification',
    'BrightSpark\'s top 10 customers = 55% of revenue, with Boeing and Lockheed alone at ~22% combined. How should the diligence team quantify this concentration risk?',
    'Map each top-10 customer\'s revenue contribution, contract length, qualification status (specified-in vs preferred vs second-source), and Boeing/Lockheed program exposure (e.g. 737, F-35, C-130) — concentration matters less when each dollar is specified-in on a multi-year program',
    [
      ['Apply a 20% revenue discount in the model to reflect concentration risk and move on', 'Reflexive percentage haircuts hide the actual question, which is whether each customer relationship is specified-in (sticky) or preferred (vulnerable). The model should reflect the diligence, not a generic rule of thumb.'],
      ['Concentration above 50% is a deal-killer by Hawthorne\'s portfolio policy', 'Hard-line concentration thresholds applied without sector context kill specialty chemicals deals that are perfectly investable. The right move is to understand the specification dynamic, not to apply a number from a different sector.'],
      ['Customer concentration is a feature in aerospace because primes consolidate suppliers — no further diligence needed', 'Treating concentration as a feature without doing the qualification-status diligence assumes the conclusion. Some concentration in aerospace is stickiness; some is one bad RFQ from disappearing. The diligence is the point.'],
    ],
    'Customer concentration in aerospace specialty chemicals is mostly about whether each dollar is specified-in to a program. The diligence has to map qualification status by program for every top-10 customer — that is the work that turns a headline concentration number into a real risk read.'),

  q(4390511, 'Career Skills', CHAPTER, 'Aerospace cycle exposure read',
    'BrightSpark\'s revenue is 60% aerospace and defense, 30% auto OEM, 10% other industrial. The civil aerospace cycle has been recovering post-COVID; defense is at a multi-year high. How should the IC memo frame cycle exposure?',
    'Split the 60% A&D exposure into civil aerospace (cyclical, currently recovering) and defense (counter-cyclical, multi-year backlog visibility) — and acknowledge that BrightSpark\'s revenue mix is partially self-hedging because civil and defense cycles do not move together',
    [
      ['Treat all 60% A&D as cyclical and stress-test the model with a 30% revenue decline scenario', 'Lumping defense into "cyclical" misreads the sector — defense programs have multi-year funding visibility and do not move with civil aerospace. A 30% blanket decline scenario over-states the risk on the defense piece.'],
      ['Treat all 60% A&D as stable because aerospace is regulated and specifications are sticky', 'Specifications are sticky but volumes are not. Civil aerospace volumes dropped ~40% during COVID even though specifications held. The IC memo has to model volume sensitivity, not just specification stickiness.'],
      ['Auto OEM is the bigger cycle worry because automotive is more volatile than aerospace', 'Auto OEM at 30% is real exposure, but coatings to OEMs are specified-in and less volatile than the underlying vehicle build. The bigger cycle question is civil aerospace, not auto — getting the relative magnitude wrong frames the deal incorrectly.'],
    ],
    'Cycle exposure for BrightSpark is two different cycles bundled in one number. The discipline is to split civil aerospace from defense and to model each separately — and to recognize the self-hedge that comes from carrying both. Treating the 60% A&D bucket as a single exposure is the error that produces over- or under-stated stress scenarios.'),

  q(4390512, 'Career Skills', CHAPTER, 'Operating capacity across 8 sites',
    'BrightSpark operates 8 US plants. Diligence reveals capacity utilization ranges from 92% at the largest (Ohio) site to 41% at the smallest (Alabama) site. How should this finding shape the underwriting?',
    'Footprint optimization is a real value-creation lever — model a base case that consolidates 2 sites over years 2–3 of the hold and captures $4–6M of annual EBITDA from fixed-cost reduction, with downside if customer qualifications cannot be transferred between plants',
    [
      ['Underwrite as-is because plant consolidation is operationally risky in specialty chemicals', 'Reflexive avoidance of footprint work in specialty chemicals leaves a real value lever on the table. The right move is to size the opportunity and the risk, not to dismiss the workstream because it is hard.'],
      ['Plan to consolidate to 4 plants over 24 months to maximize the cost reduction', 'Aggressive consolidation to 4 sites in 24 months ignores the qualification-transfer process, which can take 12–18 months per specification per customer. The plan has to respect the technical reality of moving specified coatings between plants.'],
      ['The 41% utilization at Alabama is a sign of customer loss, not consolidation opportunity', 'Low utilization at a single plant can have several causes — local capacity overhang from the founder\'s historical M&A, low-mix products with seasonal demand, or qualification delays. Jumping to "customer loss" without doing the diagnostic is a misread.'],
    ],
    'Footprint optimization in specialty chemicals is a real lever, but only when sized against the qualification-transfer realities. For BrightSpark, a 2-site consolidation over years 2–3 with named qualification work is the underwritable version of the lever — anything more aggressive ignores the technical reality.'),

  q(4390513, 'Career Skills', CHAPTER, 'QoE adjustments to bridge to true EBITDA',
    'The QoE report adjusts reported EBITDA of $58M down to $54M after normalizing for non-recurring items, founder-CEO compensation, and certain one-time gains. How should the deal team handle the $4M gap?',
    'Use $54M as the underwriting EBITDA in the model, and re-price the deal accordingly — at 10x, that is a $40M reduction in EV; sellers contest QoE findings in second-round, so be prepared to defend each adjustment with workpapers',
    [
      ['Negotiate the QoE findings down by half so the underwriting EBITDA lands at $56M', 'QoE findings are not a negotiation — they are an evidence-based bridge from reported to normalized EBITDA. Splitting the difference without engaging the underlying workpapers is exactly how sponsors talk themselves into overpaying.'],
      ['Use the reported $58M because QoE adjustments are typically reversed in PE underwriting', 'PE underwriting uses adjusted EBITDA, not reported EBITDA — that is the entire purpose of having a QoE provider. Using reported figures because of "convention" is a fabricated convention that does not exist in disciplined funds.'],
      ['Ignore the $4M because it is less than 10% of EBITDA and within rounding error', 'A $4M adjustment at a 10x multiple is $40M of EV — that is not rounding error, that is the size of the IRR difference between two underwriting cases. Materiality thresholds at 10% of EBITDA on a $600M deal are wrong.'],
    ],
    'QoE adjustments translate directly into EV at the entry multiple. Using the adjusted figure as the underwriting EBITDA is non-negotiable discipline — the only question is whether each adjustment is defended on the workpapers when the seller pushes back. The math is the math.'),

  q(4390514, 'Career Skills', CHAPTER, 'Environmental and EHS diligence scope',
    'BrightSpark operates 8 chemicals plants with historical operations going back to 1996. What environmental and EHS diligence scope does the deal team need to commission?',
    'Phase I environmental assessments at all 8 sites, Phase II at any sites with historical issues, full review of permit status under RCRA and Clean Air Act, and a 28-year compliance history including any consent decrees or NOVs — environmental tail is a real liability in specialty chemicals',
    [
      ['Phase I assessments at the 3 largest sites only, since smaller sites have lower exposure', 'Environmental liability does not scale with revenue contribution — a single small site with a historical spill can carry a $20M+ remediation tail. Skipping Phase I at smaller sites assumes a conclusion the diligence is supposed to test.'],
      ['Skip environmental diligence on the basis that the seller will provide reps and warranties on environmental matters', 'R&W on environmental matters typically excludes pre-existing conditions or caps them sharply. The diligence has to identify the conditions; R&W is a backstop, not a substitute.'],
      ['Run environmental diligence post-signing during the regulatory waiting period to compress the deal timeline', 'Post-signing environmental diligence means the sponsor commits before knowing the liability. Material environmental findings post-signing are extremely difficult to renegotiate — the diligence has to happen before the bid.'],
    ],
    'Environmental and EHS diligence in specialty chemicals is non-negotiable scope. Phase I at all sites, Phase II where flagged, and a full compliance history covering the asset\'s 28-year operating life is the floor. Compressing this workstream is one of the most expensive false economies in industrials PE.'),

  q(4390515, 'Career Skills', CHAPTER, 'Customer-call plan for defense primes',
    'You need to run customer-reference calls on BrightSpark\'s defense customers — Lockheed, Raytheon, Northrop. These are large, formal organizations. How should the call plan be structured?',
    'Request specific procurement and engineering contacts through the seller (clean-team protocol), prepare program-level questions (specification status on F-35, JASSM, etc.), and treat each call as a 45-minute structured interview rather than a friendly chat — defense procurement is formal and rewards prepared questioners',
    [
      ['Cold-call procurement at each prime to get unfiltered feedback outside the seller\'s control', 'Cold-calling defense primes during an active sale process is a confidentiality breach the seller and banker will treat as a serious violation. Customer calls go through the clean-team protocol, not around it.'],
      ['Skip defense customer calls because primes will not discuss procurement details on an unsigned deal', 'Defense primes will absolutely participate in structured reference calls through the clean-team protocol — this is a routine part of M&A diligence in the sector. Skipping the calls means walking into a $600M bid without testing the largest customer relationships.'],
      ['Combine all defense calls into one group session with the sales team to be efficient', 'Group sessions destroy the per-customer signal. The whole point of customer calls is to triangulate across independent perspectives, which requires separate, structured conversations with each.'],
    ],
    'Customer calls with defense primes are formal, structured, program-specific conversations through clean-team protocol. The discipline is to bring prepared questions tied to the load-bearing risks (specification status, program backlog, supplier replacement difficulty) — that is the version of the call that produces real diligence signal.'),

  q(4390516, 'Career Skills', CHAPTER, 'Red flag: founder-CEO add-backs',
    'The seller\'s adjusted EBITDA includes $3.2M of founder-CEO compensation add-backs and $1.1M of "owner-related" travel and entertainment. The QoE provider flags both as aggressive. How should the deal team handle these?',
    'Engage each add-back on the merits — the $3.2M comp add-back is legitimate only to the extent it exceeds market-rate CEO comp post-close (likely $700K–1M, so add back ~$2.2–2.5M); the $1.1M T&E add-back is almost always non-credit because most owner T&E reflects real business activity',
    [
      ['Accept both add-backs because they are standard founder-owner adjustments in PE deals', '"Standard founder add-backs" is the language sellers use to push aggressive adjustments through. Each add-back has to be defended on its specific merits — the discipline is to engage, not to defer.'],
      ['Reject both add-backs entirely as aggressive and use unadjusted reported EBITDA', 'Rejecting all founder-CEO add-backs is the opposite error. A legitimate excess-comp add-back exists when the founder is being paid above market and is leaving — refusing to recognize it is its own discipline failure.'],
      ['Negotiate the combined add-backs down to 50% and move forward', 'Reflexive 50% splits without engaging the merits of each item is the kind of move that signals to a seller the buyer is not doing real work. The right answer is item-by-item, not a haircut.'],
    ],
    'Founder-CEO add-backs are a load-bearing line in any owner-operated PE deal. The discipline is to engage each adjustment on its specific merits — comp at excess-of-market is usually legitimate; T&E and "owner-related" expenses usually are not. Splitting the difference is the wrong answer because the underlying items are not symmetric.'),

  q(4390517, 'Career Skills', CHAPTER, 'Working capital normalization',
    'BrightSpark\'s working capital at the most recent quarter-end is $52M. The trailing 12-month average is $61M. The seller wants to deliver $52M at close. How should the deal team approach the working capital peg?',
    'Negotiate a peg at the 12-month average of $61M (or higher if the LTM shows a seasonal pattern), with a true-up at close — sellers naturally want to deliver low working capital and pocket the difference; the buyer\'s job is to lock in a normalized peg, not the quarter-end snapshot',
    [
      ['Accept the $52M peg because that is the most recent and most accurate number', '"Most recent" is irrelevant if working capital is seasonal. A quarter-end snapshot $9M below the 12-month average is exactly the kind of figure sellers select for — accepting it without normalization hands the seller $9M of free EV.'],
      ['Demand a $70M peg to overcompensate for any seasonality risk', 'Demanding a peg materially above the 12-month average without supporting evidence is an unreasonable position the seller will reject and the banker will remember. The right peg is the normalized figure, not an over-correction.'],
      ['Skip the working capital negotiation and let the closing-date true-up handle it', 'Without a negotiated peg, the closing-date true-up has no reference point. Sellers and buyers fight after close in those situations and lawyers get rich. The peg has to be agreed in the SPA.'],
    ],
    'Working capital pegs are routine purchase-price adjustment mechanics, but the difference between the seller\'s preferred snapshot and the normalized 12-month average can easily be $5–15M. Locking in the right peg in the SPA is one of the highest-ROI hours an associate spends in the second round.'),

  q(4390518, 'Career Skills', CHAPTER, 'Insurance and product-liability tail',
    'BrightSpark makes coatings used on commercial aircraft and military platforms. What insurance and product-liability diligence does the deal team need to run?',
    'Review 10 years of claims history, current product-liability and general-liability policies and limits, tail coverage on departing CEO, and the specific exclusions for aerospace product applications — coatings on aircraft can carry catastrophic-loss exposure, so the policy limits matter',
    [
      ['Insurance is administrative and can be handled by counsel in the final week before close', 'Treating product-liability insurance as administrative on an aerospace coatings business is a serious misjudgment. Catastrophic-loss claims can dwarf the equity check, so the policy stack is part of the underwriting.'],
      ['BrightSpark\'s low claims history is sufficient evidence that the insurance scope is adequate', 'A low historical claims record is not the same as adequate coverage going forward. Diligence has to test the actual policy limits and exclusions, not just look at past claims.'],
      ['Rely on the strategic seller\'s existing insurance program for the first year post-close', 'Founder-owned businesses rarely have institutional-grade insurance programs that PE buyers can lean on. The new sponsor typically has to rebuild the program with appropriate limits for the underlying exposure.'],
    ],
    'Insurance and product-liability diligence in aerospace coatings is part of the underwriting, not back-office paperwork. Policy limits, exclusions, claims history, and tail coverage on the departing CEO are all in scope — the cost of getting this wrong on a coatings business serving primes is measured in the equity check.'),

  q(4390519, 'Career Skills', CHAPTER, 'Pension and post-retirement obligations',
    'BrightSpark has a frozen defined-benefit pension plan covering ~600 retirees and a self-funded retiree medical program. The PBO is $34M, funded at 88%. How should the deal team handle these obligations?',
    'Treat the underfunded PBO ($4M) and the unfunded retiree medical liability as debt-like items in the purchase price bridge — reduce equity value by the full amount, and plan to evaluate a pension risk-transfer transaction (buyout via annuity) in year 1–2 of the hold',
    [
      ['Pension is funded at 88%, so the obligation is largely covered and does not need treatment in the bridge', '12% underfunded on a $34M PBO is $4M of real economic obligation. Ignoring it in the bridge is a $4M gift to the seller that compounds at the hold-period discount rate.'],
      ['Pension obligations transfer with the company and are operational, not financial — leave them out of the bridge entirely', 'Pension underfunding is exactly the kind of item LBO bridges include, because it is a quantifiable economic obligation that affects the equity check. Treating it as operational rather than debt-like is a category error.'],
      ['Increase the bid by the full $34M PBO to keep things simple', 'Treating the entire PBO as debt-like double-counts the funded portion. The bridge captures the underfunded portion only — the funded plan assets cover the rest.'],
    ],
    'Pension and retiree medical obligations are routine debt-like items in LBO purchase-price bridges. The underfunded portion of the PBO and the full unfunded retiree medical liability reduce equity value dollar-for-dollar. Getting the bridge mechanics right on these items is associate-level work that has to be precise.'),

  // -------------------------------------------------------------------------
  // LESSON 3 — LBO model (4390520–4390529)
  // Output: sources and uses, debt capacity, returns sensitivity. Forces the
  // learner to engage the load-bearing assumptions of the model, not just
  // populate cells.
  // -------------------------------------------------------------------------
  q(4390520, 'Career Skills', CHAPTER, 'Sources and uses build',
    'At a $600M EV bid (10.3x $58M EBITDA), with $35M of existing net debt rolled off at close and $15M of transaction expenses, what does the sources and uses table look like at a 5.5x debt-to-EBITDA capital structure?',
    'Uses: $600M equity purchase + $35M debt repayment + $15M fees = $650M total. Sources: $319M new debt (5.5x × $58M) + $331M sponsor equity. Cap structure: 49% debt, 51% equity at close',
    [
      ['Uses: $600M EV + $15M fees = $615M; debt $319M, equity $296M, with existing debt rolled forward', 'Rolling existing debt forward at close is wrong on a take-private — existing lenders are taken out and replaced. The sources and uses has to repay $35M of existing debt, which is a real use of funds.'],
      ['Uses: $600M; Sources: 100% debt at 10.3x leverage to maximize equity returns', '10.3x leverage on a $58M EBITDA business is wildly beyond any covenant-light or unitranche structure that actually exists in the market. Maximum specialty industrials leverage in normal markets tops out at 6.5–7x.'],
      ['Uses: $640M (top of asking range) + $15M fees = $655M, with debt sized to maintain a 3.0x ratio', '3.0x leverage on a 17% EBITDA specialty industrials business under-levers materially relative to market. Sub-market leverage at a top-of-range purchase price produces unattractive equity returns for no good reason.'],
    ],
    'Sources and uses builds have three load-bearing inputs: enterprise value, existing debt treatment, and fees. Equity check falls out of the math. The discipline is to get each input right (especially the often-overlooked existing-debt repayment and fee load) so the equity check the IC sees is the real one.'),

  q(4390521, 'Career Skills', CHAPTER, 'Debt capacity given EBITDA quality',
    'BrightSpark generates $54M of QoE-adjusted EBITDA, 83% FCF conversion, and serves stable aerospace/defense end markets. Where does debt capacity land in today\'s market?',
    'Roughly 5.5–6.0x adjusted EBITDA on a TLB or unitranche basis — supported by the FCF conversion, end-market quality, and asset coverage, but bounded by the cyclical exposure in civil aerospace and customer concentration',
    [
      ['7.0x because the FCF conversion is exceptional and asset-light businesses can support higher leverage', 'BrightSpark is not asset-light — it operates 8 plants with material capex requirements. Pushing leverage to 7.0x on a manufacturer with concentrated customers is a structure no senior lender will underwrite.'],
      ['4.0x because customer concentration above 50% caps lender appetite at conservative levels', 'Concentration is a real factor but does not cap leverage at 4.0x for a business with specified-in aerospace revenue. Direct lenders routinely underwrite 5.5x+ for similar profiles. Over-conservatism leaves IRR on the table.'],
      ['Debt capacity is determined by interest coverage rather than leverage multiple, so the question is malformed', 'Lenders use both metrics. Leverage multiple is the headline negotiation; interest coverage and FCDR are governance covenants. Pretending the leverage question is malformed dodges the underwriting work.'],
    ],
    'Debt capacity in mid-market PE is set by the intersection of FCF conversion, end-market quality, customer concentration, asset coverage, and current market conditions. For BrightSpark, 5.5–6.0x is the band the market will support — naming the band and the constraints that bound it is the underwriting discipline.'),

  q(4390522, 'Career Skills', CHAPTER, 'Debt structure mix — TLB vs unitranche',
    'At $319M of new debt (5.5x leverage), what structure should Hawthorne pursue — broadly syndicated TLB, direct-lender unitranche, or a mix?',
    'Direct-lender unitranche at this size is competitive on terms and faster to close than a TLB syndication — at $319M, a 1–2 lender unitranche with a flexible covenant package likely beats the TLB on speed and execution certainty for a 6-week timeline',
    [
      ['Broadly syndicated TLB because pricing is always tighter in the BSL market', 'BSL pricing is typically tighter on large deals ($500M+ tranches) but not necessarily on $319M deals with a 6-week timeline. Execution certainty and speed matter at this size, and unitranche often wins on both.'],
      ['Senior secured bonds because the company has the size to support a public-debt issuance', '$319M is well below the typical size for public-debt issuance on a private-equity-owned mid-market manufacturer. Bonds are not the right tool for this deal size and the timeline does not support a road show.'],
      ['Structured stretch piece (mezzanine) to push leverage beyond what senior alone supports', 'Mezzanine on top of senior at 6.0x+ total leverage adds cost without supporting the underwriting. The deal does not need leverage above 5.5–6.0x — adding mezzanine just to push the number is structure for its own sake.'],
    ],
    'Debt structure choice at the $300M deal size is mostly about TLB versus unitranche, and the trade-off is pricing versus execution certainty. For a competitive auction with a 6-week timeline, unitranche typically wins because the speed-of-execution premium offsets the pricing differential — which is exactly the situation BrightSpark presents.'),

  q(4390523, 'Career Skills', CHAPTER, 'Returns at 10.5x entry — base case IRR',
    'At a $609M entry (10.5x adjusted EBITDA) with 5.5x leverage, base case underwriting 7% revenue growth, modest margin expansion to 19%, and exit at 10.0x in year 5 — what is the rough equity IRR and money multiple?',
    'Roughly 17–19% IRR and ~2.2x money multiple, driven by EBITDA growth (54 → ~80M), debt paydown, and a slight multiple contraction on exit — the IRR is at the lower end of what Hawthorne typically targets and leaves limited margin for execution slip',
    [
      ['25%+ IRR and 3.0x multiple, because mid-market PE deals always clear 25% in base case', 'Targeting 25% IRR in the base case at 10.5x entry on a 6% growth business is not credible. The math does not support it without aggressive multiple expansion or growth assumptions that the comp set does not justify.'],
      ['12–14% IRR, because the entry multiple is too high to generate meaningful equity returns', '10.5x entry on a high-quality specialty industrials business is reasonable — the IRR ends up at 17–19% in base case, not 12–14%. Underwriting too pessimistically loses the deal in the auction and undersells the asset.'],
      ['IRR cannot be estimated without running the full model — the question is unanswerable at this stage', 'Experienced PE professionals can sanity-check IRR by inspection from entry multiple, leverage, growth, margin, and exit multiple. Refusing to estimate is a discipline gap, not an honest answer.'],
    ],
    'Base case IRR estimation by inspection is a load-bearing skill. For BrightSpark at 10.5x entry, 5.5x leverage, 7% growth, modest margin gain, and 10.0x exit, the math lands at 17–19% IRR — that is the number the IC will see and the number the team has to be comfortable defending.'),

  q(4390524, 'Career Skills', CHAPTER, 'Sensitivity table — multiple vs growth vs leverage',
    'The IC will want to see how IRR moves across reasonable variation in entry multiple, EBITDA growth, and exit multiple. Which sensitivity construction actually informs the decision?',
    'Two-way table of exit multiple (8x–11x) × revenue growth (4%–10%), holding entry multiple, leverage, and margin constant — then a separate table of entry multiple (9.5x–11x) × exit multiple. Show base case and identify the breakeven combinations',
    [
      ['One-way sensitivity on each variable to keep the analysis simple for the IC', 'One-way sensitivities miss the interaction effects that drive returns. The IC has seen one-way sensitivities for 20 years and will ask for the two-way version anyway — better to bring it in the first deck.'],
      ['Five-way sensitivity table covering every input variable simultaneously', 'Five-way tables are unreadable and signal that the team has not chosen which variables matter. The discipline is to pick the two or three load-bearing variables and present those as two-way tables.'],
      ['Monte Carlo simulation across all input variables with probability distributions', 'Monte Carlo on an LBO is theater — the input distributions are guesses and the output spreads are uninterpretable. PE ICs want two-way sensitivities they can read and argue with, not simulations they have to take on faith.'],
    ],
    'Sensitivity tables in LBO modeling exist to make the load-bearing assumptions visible. Two-way tables on exit multiple × growth, and entry multiple × exit multiple, are the standard pair that PE ICs actually use. Anything more elaborate is misdirection; anything simpler misses the interaction effects.'),

  q(4390525, 'Career Skills', CHAPTER, 'Management rollover and MIP modeling',
    'BrightSpark\'s top 5 executives (excluding the founder) will roll over equity. The MIP (management incentive plan) is sized at 10% of common equity, with 50% time-vesting and 50% performance-vesting on returns. How should this be modeled?',
    'Reduce sponsor common ownership by the MIP allocation (10%) at the close-date cap table; performance-vested tranches dilute sponsor returns only if performance hurdles are hit, so model them as triggered at the relevant IRR/MoM thresholds in each exit scenario',
    [
      ['MIP is dilutive at close and should be modeled as a flat 10% reduction in sponsor returns across all scenarios', 'Performance-vested MIP only dilutes when performance hurdles are hit. Modeling a flat 10% across all scenarios understates returns in downside cases where the performance tranche does not vest.'],
      ['MIP is non-dilutive because it is issued from a separate option pool outside the common equity structure', 'MIP at a portfolio company comes out of common equity, which dilutes the sponsor by definition. Treating it as non-dilutive is a basic structural misunderstanding of how MIPs work.'],
      ['MIP is dilutive only at exit, so the model should ignore it during the hold period', 'MIP needs to be modeled at the close-date cap table for ownership purposes — exit-only treatment misses what the sponsor actually owns of common during the hold and at exit.'],
    ],
    'MIP modeling has two components: the time-vested tranche dilutes sponsor returns in every scenario; the performance-vested tranche dilutes only when hurdles are hit. Getting both right is what separates a serious LBO model from a textbook one — and the difference shows up directly in headline sponsor IRR.'),

  q(4390526, 'Career Skills', CHAPTER, 'Transaction and financing fees',
    'For the BrightSpark $600M EV deal, what fee load should the model carry on the sources and uses?',
    'Roughly $14–18M total: ~$5M in M&A advisory (banker + counsel), ~$6M in debt arrangement (3% on $319M of new debt), ~$1M in QoE and other diligence advisors, ~$2M in R&W insurance, plus $1–2M in regulatory, environmental, and miscellaneous costs',
    [
      ['$8–10M total — fees should be kept lean to maximize equity returns', '$8–10M total is well below market on a $600M deal. Trying to "keep fees lean" usually means under-budgeting and getting a surprise at the funding flow. The discipline is to model real fees, not aspirational ones.'],
      ['$25–30M total — fees on a deal of this size routinely run 5% of EV', '5% of EV in fees is an inflated number that does not match real fee economics on a $600M mid-market deal. Over-budgeting fees is a less common error than under-budgeting but signals the team has not actually scoped the fee load.'],
      ['Fees are de minimis at this scale and can be ignored in the sources and uses', '$14–18M of fees on a $600M deal is real money — about $1.5–2.0x EBITDA in fees, which moves the implied entry multiple by 0.25x. Ignoring fees in the bridge is associate-level sloppiness that gets caught at IC.'],
    ],
    'Transaction and financing fees on a $600M PE deal land in the $14–18M range, dominated by debt arrangement and advisory. Modeling them properly is associate hygiene — under- or over-stating fees moves the bridge enough to matter, and IC will catch it.'),

  q(4390527, 'Career Skills', CHAPTER, 'Capex assumptions across 8 plants',
    'BrightSpark\'s historical capex has averaged $11M (3.2% of revenue), split roughly 60/40 between maintenance and growth. The CFO suggests $11M is the right ongoing run-rate. What capex assumption should the model carry?',
    'Hold maintenance capex at ~$7M (2% of revenue) and add $4–6M of growth capex tied to the value-creation plan (capacity expansion at high-utilization sites, automation projects) — total $11–13M, with the growth portion explicit and gated by IRR thresholds',
    [
      ['Use the historical $11M as the run-rate forecast across the entire hold period', 'Holding capex flat at history ignores the value-creation plan. If footprint optimization and capacity expansion are real levers, they need capex. Flat capex is a forecast without a plan behind it.'],
      ['Cut capex to $6M in years 1–2 to maximize FCF for debt paydown', 'Under-investing in maintenance capex at a chemicals manufacturer accelerates equipment failure and customer-qualification problems. Cutting capex to optimize for short-term FCF is the classic LBO failure mode.'],
      ['Increase capex to $20M for an aggressive automation program across all 8 plants', 'A $20M automation program would be a major workstream requiring an operational plan and engineering scoping the deal team has not yet done. Picking that number without the underlying plan is fabricating a capex assumption.'],
    ],
    'Capex assumptions in LBO models should separate maintenance (which holds flat as a percentage of revenue) from growth (which is gated by specific value-creation initiatives and IRR thresholds). Conflating the two — either by under-investing or by adding aspirational programs — produces a forecast that is not actually a plan.'),

  q(4390528, 'Career Skills', CHAPTER, 'Cash sweep mechanics and prepayment',
    'The new TLB or unitranche will include a cash sweep — typically 50% of excess cash flow above a minimum balance. How should this be modeled, and what is the implication for hold-period returns?',
    'Model 50% excess cash sweep with a $15M minimum cash balance, stepping down to 25% sweep once leverage drops below 4.0x — debt paydown accelerates equity-value buildup in years 2–3 and is one of the largest single contributors to base-case IRR',
    [
      ['Ignore the cash sweep because it does not affect equity value at exit', 'Cash sweep affects net debt at exit by reducing the principal balance — which directly increases equity value at exit. Ignoring it understates equity returns and misrepresents the deal economics.'],
      ['Assume 100% of free cash flow is used to repay debt to maximize debt paydown', 'A 100% sweep is non-standard in TLB/unitranche structures and operationally impractical (the business needs working cash). Modeling it ignores how the actual debt papers will read.'],
      ['Cash sweep is irrelevant because the company will use cash for dividend recaps and add-on acquisitions', 'Using all excess cash for divs and M&A pre-empts the sweep mechanic that the debt papers will require. Lenders will not permit unrestricted cash use during the hold — the model has to respect the actual covenant package.'],
    ],
    'Cash sweep mechanics are one of the most under-modeled features in entry-level LBO templates and one of the most important drivers of hold-period IRR. Getting the sweep percentage, minimum balance, and step-down trigger right turns the model from a textbook into a working underwriting tool.'),

  q(4390529, 'Career Skills', CHAPTER, 'Exit multiple assumption discipline',
    'The base case exit multiple in year 5 is the single largest assumption driving IRR. What is the disciplined way to set it for BrightSpark?',
    'Anchor the exit multiple at the entry multiple (10.0–10.5x) and explicitly justify any contraction or expansion against expected end-market conditions, comp set evolution, and the platform\'s scaled profile — not on hope or rounding',
    [
      ['Assume the exit multiple expands by 1.0x because Hawthorne will have improved the business meaningfully', 'Multiple expansion is the most over-claimed source of return in PE underwriting. The IC will discount any 1.0x expansion without specific evidence — usually the case has to be made on EBITDA growth and debt paydown, not multiple.'],
      ['Assume the exit multiple contracts by 2.0x to be ultra-conservative', '2.0x contraction implies a major sector or rates dislocation that has to be justified separately. Reflexive conservatism on exit multiple under-states returns and loses the deal in the auction.'],
      ['Use the historical 10-year average for specialty chemicals exit multiples regardless of the specific situation', 'Historical averages mix in cycles that may not be representative of the exit window. The right move is to use the current comp set and the expected end-market state, not a long-run average.'],
    ],
    'Exit multiple discipline is one of the most-tested judgments in PE underwriting. The right base case is at-entry, with any deviation explicitly justified. ICs trust deals that make their money on EBITDA growth and debt paydown — they discount deals that depend on multiple expansion to clear the hurdle rate.'),

  // -------------------------------------------------------------------------
  // LESSON 4 — IC memo and final bid (4390530–4390539)
  // Output: investment committee memo and the final bid letter. Forces the
  // learner to synthesize sourcing + diligence + model into a partnership-
  // ready recommendation with named conditions and a defensible bid level.
  // -------------------------------------------------------------------------
  q(4390530, 'Career Skills', CHAPTER, 'IC memo structure for BrightSpark',
    'You are drafting the BrightSpark IC memo for Hawthorne\'s final-bid approval. How should the memo be structured?',
    'Recommendation up top (bid level, equity check, expected IRR/MoM), then thesis, then value-creation plan, then key diligence findings (customer concentration, succession, environmental), then financial model output, then risks and kill criteria, then bid mechanics — IC reads recommendation first and tests the body against it',
    [
      ['Chronological by workstream — sourcing, diligence, modeling — to let the IC follow the deal team\'s path', 'Chronological structure is a journal. ICs read memos to test a conclusion, not to follow a journey. The recommendation has to come first; the body of the memo is the evidence that supports or undermines it.'],
      ['Build up from background through diligence to the recommendation at the end, since the recommendation is the conclusion', '"Build-up" structure forces the IC to wait for the recommendation before they can interrogate it. PE memos lead with the verdict and let the body of the memo back it up — partners read in that order.'],
      ['Lead with the company history and founder story to give context before the financial analysis', 'Company history is interesting context but it is not the load-bearing argument for an IC vote. Leading with it defers the recommendation and signals that the deal team has not committed to a view.'],
    ],
    'IC memo structure for PE is recommendation-first, then thesis, then evidence, then risks, then mechanics. This structure works because ICs read recommendations like a sentence with footnotes — verdict first, evidence underneath, kill criteria last. Variations on this structure mostly produce memos that are harder to vote on.'),

  q(4390531, 'Career Skills', CHAPTER, 'Final-round bid level — where to land',
    'Final bids are due Friday. Hawthorne\'s diligence supports a base-case IRR of 18% at $609M (10.5x) and 21% at $585M (10.1x). The auction has 3 PE sponsors plus the strategic in final round. Where should the bid land?',
    '$595–605M (10.3–10.4x), with a clean structure (no earnout, no contingent payments, R&W insurance in place) and pre-committed financing — Hawthorne wins on certainty rather than headline price, and the IRR clears the 18%+ threshold by a comfortable margin',
    [
      ['$640M (top of range, 11.0x) to maximize the chance of winning and stretch the IRR through aggressive value-creation', 'Bidding the top of range to win an auction is the textbook recipe for winner\'s curse. The IRR at 11.0x falls below Hawthorne\'s threshold and depends on value-creation that has not yet been earned.'],
      ['$560M (9.6x) to anchor on returns discipline and let the strategic outbid if they wish', '9.6x undersells the asset against the comp set and likely puts Hawthorne out of the running. Discipline is not the same as under-bidding — the right bid is the highest number that still clears the return threshold with appropriate margin.'],
      ['Submit a range rather than a fixed bid to preserve flexibility in negotiation', 'Final bids are typically fixed numbers — submitting a range signals that the buyer has not committed. The seller and banker will treat range bids as soft and likely advance the fixed-number bidders.'],
    ],
    'Final bid level is the most consequential judgment of the entire deal process. For BrightSpark, the disciplined number is at the top of the IRR-clearing range with the cleanest possible structure — winning on certainty rather than headline price is the consistent move that mid-market sponsors use to beat both more aggressive PE and synergy-funded strategics.'),

  q(4390532, 'Career Skills', CHAPTER, 'Earnout vs straight cash trade-off',
    'The seller\'s banker hints that a $30M earnout tied to year-1 EBITDA performance could bridge a small gap between bids. Should Hawthorne offer one?',
    'Decline the earnout structure — earnouts on founder-owned businesses where the founder is retiring create misaligned incentives (he is leaving, but the earnout pays him to push short-term EBITDA) and litigation risk; pay the same value in clean cash if the gap can be bridged that way',
    [
      ['Offer the $30M earnout because it shifts risk to the seller and improves headline bid optics', 'Earnouts on retiring founders are operationally toxic — the founder optimizes the year-1 number rather than the long-term business, and litigation over the EBITDA calculation is near-certain. The optics gain is not worth the operating headache.'],
      ['Offer a $60M earnout to push headline price higher and signal seriousness', '$60M of contingent value to a retiring founder distorts the entire year-1 operating decision — pricing, capex, hiring all get warped. Doubling down on a structurally bad term does not make it better.'],
      ['Earnouts are standard in mid-market PE and should always be in the bid structure', 'Earnouts are situational, not standard, and are particularly poor fits for retiring founders. Treating them as a default structure rather than a tool for specific situations is a category error.'],
    ],
    'Earnouts in PE are tools for specific situations — usually where the seller stays in management and the buyer needs alignment on a forecast that is hard to underwrite at signing. BrightSpark is the opposite: a retiring founder where alignment is post-close to the new management team, not to him. Clean cash is the right structure.'),

  q(4390533, 'Career Skills', CHAPTER, 'Management rollover sizing',
    'BrightSpark\'s top 5 non-founder executives (CFO, COO, VP Sales, VP Engineering, GM Aerospace) are asked to roll over equity. What is the right rollover size?',
    'Roll over 25–40% of their after-tax sale proceeds (depending on personal wealth) into common equity at the same per-share price as the sponsor, with the same downside exposure — meaningful enough to align, not so much that they are forced to roll most of their net worth',
    [
      ['Require 100% rollover of all sale proceeds to maximize alignment', '100% rollover is an unrealistic ask that experienced executives will reject. Founders cash out for legitimate reasons — diversification and tax — and the alignment goal is met with a substantial percentage, not all of it.'],
      ['Offer 5% rollover as a token to keep things simple', '5% rollover is too small to be alignment — the executives feel like they have already cashed out and the new sponsor cannot lean on the rollover for behavior. Token alignment is no alignment.'],
      ['Skip management rollover entirely and rely on the MIP for forward alignment', 'MIP is forward alignment for the next 4–5 years. Rollover is wealth at risk in the same deal — the two are complementary, not substitutes. Skipping rollover leaves a meaningful alignment tool unused.'],
    ],
    'Management rollover sizing is about real alignment — enough that the executive\'s personal balance sheet moves with the deal, not so much that it forces unhealthy concentration. The 25–40% band is where this typically lands in mid-market PE, calibrated to each executive\'s situation.'),

  q(4390534, 'Career Skills', CHAPTER, 'MIP design — options pool size and vesting',
    'The MIP at BrightSpark will cover the new CEO, the rolled-over executives, and 10–15 next-level managers. How should the pool be sized and structured?',
    '10% of common equity total — split 4% to the new CEO, 4% across the rolled-over executives, 2% across the next-level managers; 50% time-vested over 5 years with cliff, 50% performance-vested tied to 2.0x and 2.5x MoM hurdles',
    [
      ['20% pool to attract a top-tier CEO from a competing PE-backed business', '20% is well above market for a $600M deal and dilutes sponsor returns materially. 10% is the standard band; deviating up has to be justified by a specific situation, not by general assertions about CEO quality.'],
      ['5% pool to keep dilution tight and rely on rollover for management alignment', '5% pool spreads too thin across the management group and the next-level managers feel left out. The whole point of a layered MIP is to align the top 15–20 employees, which 5% cannot do meaningfully.'],
      ['All time-vested with no performance hurdles to ensure retention through the hold', 'All-time-vested MIP pays out the same in a 1.5x deal as in a 3.0x deal, which destroys the upside alignment that is the whole reason for performance vesting. The 50/50 split is the working pattern.'],
    ],
    'MIP design balances total dilution (around 10% of common), distribution across management layers, and the mix of time- versus performance-vesting. Each variable has a market-standard band, and the discipline is to land in the standard band unless there is a specific situation that justifies deviating.'),

  q(4390535, 'Career Skills', CHAPTER, 'Bid letter mechanics and contingencies',
    'Hawthorne\'s final bid letter is due Friday at noon. What contingencies should the letter carry?',
    'Financing committed (papered with lender commitment letters attached), R&W insurance bound, customary regulatory approvals (HSR, plus any CFIUS filing on the defense exposure), no material adverse change, and a 60–90 day path to close — minimize contingencies to maximize the certainty signal',
    [
      ['Make the bid contingent on additional commercial diligence over the 90 days after signing', 'Post-signing diligence contingencies are red flags to sellers — they suggest the buyer is not ready to commit. The discipline is to complete diligence pre-bid and offer a clean signing.'],
      ['Include a financing-out clause to protect against debt markets shifting before close', 'Financing-out clauses are dealbreakers in competitive auctions — sellers will not accept them when other bidders have committed financing. The bidder either gets financing papered or does not win the deal.'],
      ['Make the bid contingent on customer-consent provisions for the top 10 accounts', 'Customer-consent contingencies are operationally impractical and unenforceable. Customer-relationship continuity is a diligence question that should be answered before the bid, not built into the bid as a contingency.'],
    ],
    'Bid letter contingencies are part of the certainty story that wins mid-market PE auctions. The clean version — financing committed, R&W bound, customary regulatory approvals only — beats the version with diligence outs or financing contingencies essentially every time, even at a slightly lower headline price.'),

  q(4390536, 'Career Skills', CHAPTER, 'Antitrust and CFIUS read on defense exposure',
    'BrightSpark serves Lockheed, Raytheon, and Northrop with coatings used on F-35, JASSM, and B-21 platforms. What regulatory analysis should the deal team complete pre-bid?',
    'HSR notification (standard size-of-transaction), plus a CFIUS analysis given the defense end-market exposure — even though Hawthorne is a US sponsor, the underlying defense work and ITAR-controlled product set may trigger a voluntary CFIUS filing as a risk-mitigation move',
    [
      ['HSR only because Hawthorne is a US-based sponsor and CFIUS only applies to foreign investors', 'CFIUS analysis is increasingly relevant even for US-fund acquirers when defense end-markets and ITAR-controlled products are involved, especially because LP composition can include non-US capital. Skipping the analysis is a regulatory miss.'],
      ['No regulatory filings because the transaction is private and falls below DOJ review thresholds', '$600M EV is well above HSR thresholds. Treating the deal as below the threshold is a basic error in transaction mechanics.'],
      ['CFIUS only, because HSR does not apply to private equity transactions', 'HSR absolutely applies to PE transactions above size-of-transaction thresholds. Confusing the two regimes signals the deal team has not done regulatory hygiene.'],
    ],
    'Regulatory analysis on defense-adjacent industrial deals has to engage both HSR (transaction size) and CFIUS (national security relevance). Even for US sponsors, the ITAR and program exposure at BrightSpark warrants the CFIUS analysis pre-bid — missing it produces a regulatory surprise post-signing.'),

  q(4390537, 'Career Skills', CHAPTER, 'Reps and warranties insurance ask',
    'For the BrightSpark SPA, how should R&W insurance be structured?',
    'Bind a buyer-side R&W policy at roughly 10% of EV ($60M) in limits, with a 0.5% retention; sellers in mid-market deals increasingly expect the buyer to insure rather than backstop, and R&W replaces most of the indemnity tail for an upfront premium of ~$1.5–2M',
    [
      ['Skip R&W and require a 12-month indemnity backstop from the founder personally', 'Personal indemnity from a retiring founder is hard to enforce and creates years of post-close friction. R&W is the standard mechanism precisely because it avoids this dynamic.'],
      ['Bind R&W at 50% of EV in limits ($300M) to maximize protection', '50% of EV in R&W limits is well above market and the premium would be prohibitive (typically 5–10% of policy limit). The market standard for limits is 10% of EV, which covers the practical risk envelope.'],
      ['R&W is for international deals and adds no value in US mid-market PE', 'R&W is now standard in US mid-market PE — over 80% of deals carry it. Treating it as international-only is a calibration error from a decade ago.'],
    ],
    'R&W insurance is now the standard backstop mechanism in mid-market PE. Buyer-side policy at ~10% of EV with a small retention covers the practical risk envelope, replaces escrow holdbacks, and produces a cleaner exit experience for the seller. Getting the structure right is associate-level work that has to be precise.'),

  q(4390538, 'Career Skills', CHAPTER, 'Financing commitment papers',
    'For the final bid, Hawthorne needs committed financing papers from the proposed lender. What should the commitment package look like?',
    'A signed commitment letter and fee letter from the lead lender(s), with customary out conditions (specific performance available, certain funds, no material adverse change in the company), and an interim term sheet attached — enough that the seller knows the financing is real and ready',
    [
      ['A best-efforts engagement letter with the lender, because committed papers cost too much in fees before knowing if Hawthorne wins', 'Best-efforts financing without commitment is exactly what loses competitive PE auctions. The lender fee for committed papers is small relative to the equity at risk in not getting the deal — sellers want certainty.'],
      ['No formal financing papers, with verbal assurance from the lender that financing is available', 'Verbal assurance is not financing. Sellers will not accept verbal lender commitments — they want signed papers. Going to final bid without papers is bringing a slingshot to a gunfight.'],
      ['Multiple competing commitment letters from 3+ lenders to show optionality', 'Multiple commitment letters at final-bid stage is operationally wasteful and confuses the financing story. Pick the right lender pre-bid, paper the commitment, and bring it. Optionality is a pre-commitment-selection conversation, not a final-bid one.'],
    ],
    'Financing commitment papers are the table stakes of competitive PE auctions. Committed papers from the lead lender(s), with appropriate out conditions, signal the kind of certainty that beats competing bids at the same headline price. Anything softer than committed papers loses the deal.'),

  q(4390539, 'Career Skills', CHAPTER, 'Walk-away discipline if outbid by strategic',
    'Final bids come in. Hawthorne bid $600M; the strategic bid $650M plus synergies. The seller asks Hawthorne to come up by $30M to match. What is the right move?',
    'Decline to move materially — Hawthorne\'s underwritten IRR at $600M is 19%; at $630M it falls to ~16% and below the threshold. The strategic\'s synergy-funded bid is not something PE can rationally match without overpaying — walking is the disciplined answer',
    [
      ['Move up to $625M to stay in the running and trust that the operating plan will close the IRR gap', 'Moving up to chase a strategic\'s synergy-funded bid is the textbook PE overpayment pattern. The operating plan does not get more aggressive because the entry multiple got worse — the math just deteriorates.'],
      ['Match the $650M bid because losing the deal damages Hawthorne\'s standing with the banker', 'Banker relationships do not depend on winning every deal — they depend on serious, well-prepared participation. Losing a deal to a synergy-funded strategic is normal and does not damage standing.'],
      ['Offer a $40M earnout to bridge the gap without increasing the headline price', 'Adding an earnout to bridge a $30M gap creates a misaligned contingent structure with a retiring founder — exactly the situation earnouts are worst suited for. Structural workarounds for an unwinnable bid are not the answer.'],
    ],
    'Walk-away discipline is the most underrated skill in PE. The strategic\'s synergy-funded bid creates a price ceiling that PE cannot rationally match — paying to win the deal at the wrong price destroys returns more reliably than losing the deal does. Walking with conviction is what builds long-term partnership returns.'),

  // -------------------------------------------------------------------------
  // LESSON 5 — Operating plan and exit (4390540–4390549)
  // Output: first 100 days, value-creation levers in execution, and the year-5
  // exit. Forces the learner to think past close — where most of PE's actual
  // work and returns are made.
  // -------------------------------------------------------------------------
  q(4390540, 'Career Skills', CHAPTER, 'First 100 days plan structure',
    'Hawthorne has won the BrightSpark auction. What should the first 100 days plan focus on?',
    'CEO succession kickoff, top-10 customer relationship handover protocols, finance and reporting build-out (monthly MD&A package, KPI dashboard), QoE-validated EBITDA baseline confirmation, and a 12-month value-creation plan with named owners for each lever',
    [
      ['Aggressive cost reduction across all 8 plants to deliver early EBITDA improvement', 'Aggressive cost cuts in the first 100 days of a specialty chemicals business — before understanding the operations — is a reliable way to break customer qualifications and degrade quality. First 100 days is about diagnosis and protocol, not blunt cuts.'],
      ['Full CEO replacement on day 1 with a Hawthorne-network operating executive', 'Day-1 CEO replacement before relationship handover destroys customer continuity. The transition has to happen, but staged — the founder transitions to chairman through month 6–12 while the new CEO builds the relationships in parallel.'],
      ['Wait 6 months before making any operational changes to avoid disruption', 'A 6-month observation period is the opposite error — it wastes the post-close energy window during which the management team is most receptive to change. The discipline is to know what to change quickly and what to leave alone.'],
    ],
    'First 100 days at a founder-owned PE acquisition is about diagnosis, protocol, and succession — not about hitting the cost-cut button or freezing the company. The named workstreams (succession, customers, finance, value-creation plan) are the load-bearing items; everything else is timing-and-sequencing around them.'),

  q(4390541, 'Career Skills', CHAPTER, 'CEO succession execution',
    'The founder-CEO will transition over 12 months. What is the right CEO succession plan?',
    'Recruit a specialty industrials CEO from Hawthorne\'s operating network, onboard parallel to founder during months 1–6, transition control during months 6–9, founder transitions to non-executive chairman by month 12 — with a customer-by-customer relationship handover plan running in parallel',
    [
      ['Promote the current COO to CEO immediately because internal continuity is the safest path', 'Internal promotion at founder transitions can work, but only if the COO is the right person — not because of "continuity." The discipline is to evaluate the COO against external candidates honestly, not to assume internal is safer.'],
      ['Run an executive search with no founder involvement to keep the process independent', 'Excluding the founder from the search produces a CEO the founder has no rapport with — which destroys the parallel-onboarding period that is the entire point of a 12-month transition. Founder involvement is structural, not optional.'],
      ['Keep the founder in the CEO role for 3 years and search later when the business is stable', 'A 3-year founder retention defers the transition past the operating-energy window of the deal. The succession has to happen during years 1–2 so the new CEO has time to deliver the value-creation plan before exit.'],
    ],
    'CEO succession at a founder-owned PE acquisition is one of the most carefully sequenced workstreams in the deal. Parallel onboarding, gradual control transfer, named customer handover, and the founder transitioning to chairman is the working pattern. Compressing the transition or extending it both produce worse outcomes than the staged 12-month version.'),

  q(4390542, 'Career Skills', CHAPTER, 'Commercial value lever — pricing on coatings',
    'Hawthorne\'s commercial diligence identified $4–6M of annual EBITDA available through pricing discipline — BrightSpark has historically under-priced specifications where it is sole-sourced or specified-in. How should this be executed in years 1–2?',
    'Map every customer × SKU combination by qualification status, identify the ~30% of SKUs where BrightSpark is sole-sourced or specified-in, raise prices on those incrementally over 12–18 months tied to contract renewals — preserve price discipline on the rest of the book to maintain volume',
    [
      ['Raise prices 8–10% across the entire book in year 1 to capture maximum revenue uplift', 'Across-the-book price increases on a customer set that includes Boeing and Lockheed will trigger formal price reviews and may lose specifications on the parts where BrightSpark is not sole-sourced. The lever has to be surgical, not blunt.'],
      ['Avoid price increases entirely and focus on volume growth to preserve customer relationships', 'Leaving the pricing lever untouched on the specified-in SKUs leaves real EBITDA on the table. Customers expect periodic price reviews — the question is which SKUs and how much, not whether.'],
      ['Outsource the pricing work to a third-party pricing consultancy', 'Pricing in specialty chemicals to aerospace primes requires customer-relationship judgment that a third-party consultancy cannot replicate. The work is internal — operating partner plus VP Sales, with diligence support.'],
    ],
    'Commercial pricing levers in specialty chemicals are surgical, not blanket. The work is to identify sole-sourced and specified-in SKUs, raise prices there at contract renewals, and protect volume on the rest of the book. Executed properly over 12–18 months, the lever delivers $4–6M of recurring EBITDA without damaging customer relationships.'),

  q(4390543, 'Career Skills', CHAPTER, 'Operational lever — site consolidation analysis',
    'The operating plan calls for consolidating 2 of the 8 plants over years 2–3 for $4–6M of annual fixed-cost savings. The candidates are the Alabama site (41% utilization) and a sub-scale New Jersey site (52% utilization). What is the right execution sequence?',
    'Sequence the work behind customer qualifications — most coatings specifications are plant-specific and require 6–12 months of qualification work to transfer; start the qualification transfers in month 6, close the first plant by month 24 and the second by month 30',
    [
      ['Close both plants in month 12 to capture the full savings in year 2', 'Closing plants before qualifications are transferred means losing the specified-in revenue at those plants. The savings number assumes the revenue moves with the qualifications — closing early defeats the entire lever.'],
      ['Close the Alabama plant immediately and re-evaluate New Jersey based on year-1 performance', 'Immediate closure at Alabama without qualification transfer is the same error compressed. The work has to be sequenced behind the technical process — the technical process does not bend to the financial calendar.'],
      ['Consolidate by selling the two plants to a competitor rather than closing them', 'Selling plants with customer-qualified specifications to a competitor likely transfers the specifications to the competitor, which is the opposite of the value-creation goal. Closure and transfer is the lever; divestiture is a different transaction.'],
    ],
    'Site consolidation in specialty chemicals is bounded by the qualification-transfer timeline, which the financial calendar cannot accelerate. The disciplined plan respects the technical reality: 6–12 months per specification × multiple specifications per customer = 18–24 months of qualification work before the first plant can close. Anything faster destroys the underlying value.'),

  q(4390544, 'Career Skills', CHAPTER, 'Add-on M&A pipeline construction',
    'The value-creation plan includes 2–3 bolt-on acquisitions in adjacent coatings chemistries over the hold period. How should the M&A pipeline be built?',
    'Map the universe of specialty coatings companies in adjacent chemistries (e.g. anti-corrosion, ceramic coatings, primers) in the $20–80M EV range — target 8–12 candidates, build relationships through proactive outreach and banker channels, and aim for first close by month 18',
    [
      ['Wait for inbound deal flow from bankers covering the platform, since adjacent deals will be shown', 'Reactive deal flow gets the leftovers — the best add-ons are proactively sourced through relationships with founders before the company is formally for sale. Waiting for bankers means paying full process price for the assets others have already passed on.'],
      ['Pursue large transformative M&A ($200M+) to accelerate scaling rather than building bolt-ons', 'Large transformative M&A on a recently-acquired platform is high-risk before the integration capabilities are tested. Bolt-on M&A in the $20–80M range is the right tool for years 1–3 of the hold; transformative deals are a later-cycle conversation.'],
      ['Build the pipeline post month 24 once the platform operations are stable', 'Waiting 24 months to start sourcing means no bolt-ons close until year 4, which leaves no time for integration and value capture before exit. M&A sourcing has to start at month 6, with first close around month 18.'],
    ],
    'Add-on M&A pipeline construction is a proactive sourcing workstream that starts at month 6. The discipline is to map the target universe, build founder relationships ahead of process, and close 2–3 deals across years 2–4 so each has time to integrate and contribute to exit EBITDA. Bolt-ons are how mid-market PE moves the platform multiple at exit.'),

  q(4390545, 'Career Skills', CHAPTER, 'International expansion read',
    'BrightSpark has zero international footprint. The new CEO suggests expanding to Europe to follow auto OEM customers. How should this be evaluated?',
    'European expansion is a multi-year capability build (regulatory, qualification, sales presence) that is unlikely to deliver in the 5-year hold — pursue it through M&A (acquire an existing European specialty coatings player) rather than greenfield, or defer to the next sponsor as part of the exit story',
    [
      ['Pursue greenfield European expansion immediately to diversify the customer base', 'Greenfield expansion in regulated specialty chemicals takes 3–5 years to break even — well past the deal\'s window for contribution to exit. The IRR math does not support greenfield in this hold period.'],
      ['Avoid international expansion entirely because it is outside Hawthorne\'s mandate', 'Hawthorne\'s mandate is specialty industrials, which can include international assets through M&A. Avoiding the question entirely is the wrong framing — the right read is method and timing, not yes/no.'],
      ['Open European sales offices in year 1 to test demand before committing to manufacturing', 'Sales offices without manufacturing capacity and local qualifications produce orders BrightSpark cannot fulfill at competitive lead times. The order has to be sales + qualifications + capacity together, not sales first.'],
    ],
    'International expansion in specialty chemicals is a real value lever but a slow one. In a 5-year hold, the right path is M&A (acquire local capability) rather than greenfield, or position the expansion as the next sponsor\'s value-creation story — which itself is part of the exit narrative.'),

  q(4390546, 'Career Skills', CHAPTER, 'Year-5 exit path — strategic vs secondary',
    'Hawthorne is approaching year 4 of the BrightSpark hold. EBITDA has grown from $54M to $82M; the platform has executed 2 bolt-ons. What is the right exit path?',
    'Run a dual-track process — invite both strategic acquirers (large coatings players, aerospace specialty chemicals consolidators) and PE secondary buyers; strategics typically pay synergy-justified premiums, secondary PE provides downside certainty with cleaner execution',
    [
      ['Sell to a strategic only because strategics pay the highest prices', 'Strategics-only is the riskiest exit path — if no strategic is interested or antitrust blocks the most logical buyer, the process collapses. Dual-track preserves competitive tension and downside coverage.'],
      ['Sell to a secondary PE buyer only because PE-to-PE deals close more reliably than strategic deals', 'PE-only exits leave strategic synergy premiums on the table. A well-run dual-track captures the strategic premium when available and falls back to a PE bid when not — that is the entire point of the structure.'],
      ['Hold beyond year 5 if neither path delivers the target multiple', 'Holding beyond year 5 in a fund vintage usually causes LP friction (capital is locked up past expectations) and rarely delivers materially better outcomes. The discipline is to exit on schedule unless there is a specific reason for the delay.'],
    ],
    'Exit path selection at year 4 is about dual-track discipline — invite both strategic and secondary PE bidders so the competitive tension between them produces the best outcome. PE that pre-commits to one path or the other loses optionality and typically realizes lower multiples than a properly run dual-track.'),

  q(4390547, 'Career Skills', CHAPTER, 'Strategic buyer universe mapping',
    'For the dual-track exit, the team needs to map the strategic buyer universe. Who are the likely strategic acquirers for BrightSpark?',
    'Large diversified coatings players (PPG, Sherwin-Williams, Axalta, AkzoNobel), specialty industrials consolidators with aerospace adjacencies (Heico, TransDigm — though aerospace-component-focused), and specialty chemicals platforms held by other sponsors approaching their own exits — map roughly 15 names with relationship strategy for each',
    [
      ['Aerospace primes (Boeing, Lockheed) as strategic buyers to vertically integrate the coatings supply', 'Aerospace primes systematically do not vertically integrate into specialty chemicals — they buy coatings, they do not own coatings companies. Including them as strategic buyers is a category error.'],
      ['Only the largest coatings player (PPG) because they are the only buyer who can afford the asset', 'A $1B+ specialty chemicals exit has 4–6 plausible strategic buyers in the global coatings universe. Single-name mapping concedes the optionality before the process begins.'],
      ['Skip strategic mapping because PE secondary buyers will pay the same price', 'PE secondary and strategic price points differ meaningfully — strategics with real synergies typically pay 1–2x multiple premium. Skipping the mapping forfeits the premium before the dual-track is even run.'],
    ],
    'Strategic buyer universe mapping for an exit is part of the value-creation work that starts in year 3, not year 4. Identifying the 10–15 plausible strategic acquirers, building relationships with them as they evolve, and presenting the platform to them ahead of process is the discipline that captures the strategic premium when it is available.'),

  q(4390548, 'Career Skills', CHAPTER, 'IPO as exit path read',
    'A junior partner suggests IPO as a potential exit path for BrightSpark. At $82M EBITDA and 7–8% growth, is this realistic?',
    'IPO is unlikely to be the right path — at $82M EBITDA, BrightSpark is below the typical mid-cap industrial IPO threshold ($150–200M EBITDA), and the public-market valuation discount versus private M&A multiples for specialty chemicals at this size makes the path uneconomic compared to dual-track sale',
    [
      ['IPO is the highest-multiple exit path for any mid-market PE deal and should always be considered', 'IPO multiples for sub-scale industrial companies are typically below private-market multiples, not above. Treating IPO as a default high-multiple exit is a 2000s-era assumption that does not match current public-market behavior for sub-$150M EBITDA industrials.'],
      ['IPO is operationally simpler than a sale process because there is no buyer to negotiate with', 'IPOs are dramatically more operationally complex than sales — SEC registration, road show, prospectus, post-IPO public-company governance buildout. "Simpler" is exactly the wrong word.'],
      ['IPO should be the primary path with sale as the backup if markets close', 'Inverting the dual-track to IPO-primary on a $82M EBITDA business is exactly the wrong calibration. Sale-primary, IPO-considered-only-if-markets-are-extraordinarily-favorable is the working pattern at this scale.'],
    ],
    'IPO as exit path for mid-market specialty industrials is a niche outcome — the size threshold and the public-market multiple discount typically make sale the higher-IRR path. The discipline is to consider IPO genuinely but not anchor on it, and to recognize that the size and growth profile of BrightSpark fit sale-primary clearly.'),

  q(4390549, 'Career Skills', CHAPTER, 'Final returns recap and LP communication',
    'Hawthorne has exited BrightSpark in year 5 at $1.1B EV (13.4x $82M EBITDA) to a strategic. The investment delivered a 2.7x money multiple and 22% gross IRR on $331M of equity. How should this be communicated to LPs?',
    'Lead with the 2.7x and 22% headline, then attribute the value creation across EBITDA growth (54 → 82M), debt paydown, and multiple expansion (10.3x → 13.4x) — being explicit that the multiple expansion came from the strategic synergy premium, not from sponsor underwriting, sets honest LP expectations',
    [
      ['Lead with the multiple expansion narrative because it shows Hawthorne\'s sourcing skill', 'Multiple expansion from strategic synergy premium is not Hawthorne\'s sourcing skill — it is the buyer\'s strategic situation. Claiming credit for it sets LP expectations that future deals will repeat the multiple expansion, which is not a defensible promise.'],
      ['Lead with the absolute dollar gain ($900M+) to emphasize the scale of the outcome', 'Absolute dollar gains are interesting but not the LP framework — LPs evaluate funds on IRR and MoM relative to vintage benchmarks. The headline metrics are the load-bearing communication, not the dollar figure.'],
      ['Avoid attribution analysis because it might highlight that multiple expansion drove a meaningful portion of returns', 'Hiding the attribution analysis from LPs is exactly the move that destroys long-term LP trust. The disciplined sponsors are explicit about what was sponsor work and what was market — that is what gets the next fund raised.'],
    ],
    'LP communication on exits has to be honest about what drove returns — EBITDA growth and debt paydown are sponsor work; multiple expansion from strategic premium is market-driven. The disciplined sponsors attribute returns transparently because that is what builds the LP trust that fundraising depends on over multiple vintages.'),
]
