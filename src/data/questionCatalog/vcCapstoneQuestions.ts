import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// VC CAPSTONE — Investment Pack and Synthesis (FieldChart deal)
// ----------------------------------------------------------------------------
// 47 integrative questions (IDs 4350600–4350646) extending the existing
// capstone trio (4280100–4280102 in careerAgentGeneratedRoadmapFinance.ts).
// All set on the SAME fictional company so the learner experiences one deal
// across all five capstone lessons — same way an associate would carry a
// real Series A from sourcing memo through closing and into board meetings.
//
// FieldChart context (consistent across every question below):
//   - B2B SaaS for field service operations (HVAC, plumbing, electrical SMBs
//     and mid-market trade contractors). Dispatch, work-order routing,
//     mobile tech app, invoicing, parts inventory.
//   - $4M ARR at the pitch; 110% NRR; 88% logo retention; 200 logos.
//   - Mid-market focus (50–500 trucks per customer).
//   - Founders: CEO from operations background (ran a $30M HVAC business),
//     CTO ex-Stripe engineer. Two co-founders, working together 3 years.
//   - Recent quarter: 180% YoY ARR growth, $1.5M monthly burn.
//   - Raising Series A: $20M at $80M post-money, asking the lead for the
//     full $20M check at 25% ownership.
//
// Voice: matches jargonBusters.ts and the existing 4280100–4280102 capstone
// trio — specific, evidence-anchored, no filler, no strawman distractors.
// Each wrong-answer rationale is bespoke; the lesson on each question is
// the integrative takeaway that ties the choice back to the wider memo.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe VC capstone canonical bank'

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

const CHAPTER = 'Capstone: Investment Pack and Synthesis'

// Difficulty distribution target: ~30% rated 3, ~50% rated 4, ~20% rated 5.
// 47 questions: 14 at 3 (≈30%), 24 at 4 (≈51%), 9 at 5 (≈19%).
export const VC_CAPSTONE_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Lesson 1: Sourcing Thesis (9 Qs)
  4350600: 3, // Why-now framing for FieldChart
  4350601: 4, // Category positioning vs adjacent SaaS
  4350602: 3, // Target customer specificity inside field service
  4350603: 4, // Founder-market-fit anchor
  4350604: 4, // Wedge-to-platform expansion logic
  4350605: 4, // Competitive moat that survives a year
  4350606: 5, // What evidence would change the decision
  4350607: 4, // Falsifiability of the thesis
  4350608: 3, // Pre-empting partner skepticism

  // Lesson 2: Market Map and Sizing (9 Qs)
  4350609: 3, // Bottom-up TAM method choice
  4350610: 4, // TAM penetration realism
  4350611: 4, // ACV reasoning and how it shapes TAM
  4350612: 3, // Segmentation that matters for the wedge
  4350613: 4, // Adjacencies — which expansions are real
  4350614: 5, // Gap-spotting on the market map
  4350615: 4, // Defensible market boundary
  4350616: 3, // Sector + stage focus and fit to thesis
  4350617: 4, // Forward-revenue framing for the round

  // Lesson 3: Diligence and Customer Validation (10 Qs)
  4350618: 3, // Customer-call plan structure
  4350619: 4, // Reference depth — who, how many, what
  4350620: 4, // ARR scrutiny — quality versus headline
  4350621: 4, // NRR decomposition for FieldChart
  4350622: 5, // CAC payback under sales-led + PLG mix
  4350623: 3, // Data-quality checks on the metrics export
  4350624: 4, // Founder reference patterns and red flags
  4350625: 4, // Technical risk in the dispatch/routing core
  4350626: 5, // Services-disguised-as-software check
  4350627: 4, // Signal extraction from polite customer calls

  // Lesson 4: Terms and Investment Decision (10 Qs)
  4350628: 3, // Preference stack on a $20M / $80M post round
  4350629: 4, // Board composition at Series A
  4350630: 3, // Founder vesting reset on a re-up
  4350631: 4, // Option pool top-up math and where it lands
  4350632: 4, // Anti-dilution flavor and what it really protects
  4350633: 4, // Allocation logic — full check vs syndicate split
  4350634: 5, // Convincing a skeptical partner
  4350635: 4, // Kill criteria attached to the recommendation
  4350636: 5, // Memo structure that integrates the full pack
  4350637: 4, // Decision under partial conviction

  // Lesson 5: Portfolio Support and Path to Exit (9 Qs)
  4350638: 3, // Board cadence in the first 6 months post-close
  4350639: 4, // KPI focus for the next board meeting
  4350640: 4, // Follow-on math at the Series B markup
  4350641: 5, // Bridge triage when growth slips
  4350642: 4, // Executive hiring sequence
  4350643: 4, // Exit valuation framing across scenarios
  4350644: 4, // Down-round scenarios and pay-to-play stance
  4350645: 3, // Founder transition signals and how to raise them
  4350646: 4, // Reserve discipline late in the fund life
}

export const vcCapstoneQuestions: Question[] = [
  // -------------------------------------------------------------------------
  // LESSON 1 — Sourcing Thesis (4350600–4350608)
  // Output: the front page of the FieldChart pack — why this company, why
  // now, why this category, why this founder pair. Forces the learner to
  // commit to a thesis that is specific enough to be falsified.
  // -------------------------------------------------------------------------
  q(4350600, 'Career Skills', CHAPTER, 'Why-now framing for FieldChart',
    'You are drafting the opening of the FieldChart sourcing memo. The CEO ran a $30M HVAC business before founding this. ARR is $4M at 180% YoY growth, mid-market trade contractors are the buyer. What is the strongest "why now" framing for the partnership?',
    'Mid-market trade contractors are crossing the threshold where mobile-first dispatch is no longer optional — labor scarcity and customer-SLA pressure are forcing software adoption in a segment that ran on paper and ServiceTitan-for-enterprise five years ago',
    [
      ['Field service software is a hot category and several funds are investing in it', 'Category heat is a market observation, not a why-now. Partnerships discount "everyone is doing it" — they need the specific change in buyer behavior that opens this window.'],
      ['The founders are ready to scale because they have raised seed capital and hired their first VP', 'Internal readiness explains the company, not the market. A why-now has to point at something outside the company that has shifted.'],
      ['AI is making vertical SaaS more interesting and field service is a clear vertical', 'Pointing at AI as the timing argument is generic and works for almost any vertical. The partnership will ask which specific buyer behavior AI has changed at FieldChart\'s scale — and "AI is interesting" does not answer that.'],
    ],
    'A why-now anchors on a specific external change — buyer behavior, regulation, cost curve, channel shift — not on the company\'s readiness or the category\'s general appeal. For FieldChart, the labor-scarcity and SLA-pressure story in mid-market trades is the change that makes the wedge land now and not three years ago.'),

  q(4350601, 'Career Skills', CHAPTER, 'Category positioning vs adjacent SaaS',
    'Inside the memo you have to position FieldChart against ServiceTitan (enterprise), Housecall Pro (SMB), and Jobber (very small SMB). FieldChart targets 50–500-truck mid-market operators. What is the cleanest one-sentence category position?',
    'FieldChart is the modern mobile-first dispatch and routing system for mid-market trade contractors — the segment too operationally complex for SMB tools and too price-sensitive for enterprise suites',
    [
      ['FieldChart is a better ServiceTitan with a cleaner UI and faster onboarding', 'Positioning as "a better X" anchors the buyer on X\'s features and price. It also surrenders the category-definition fight before it starts.'],
      ['FieldChart is the all-in-one platform for any field service business, large or small', 'An "all-in-one for everyone" position is a tell that the company has not chosen a segment. The investor memo loses force the moment FieldChart is positioned as horizontal.'],
      ['FieldChart is an AI-native field service operating system', 'Leading with "AI-native" is technology positioning, not buyer positioning. The partnership will ask which mid-market buyer is choosing FieldChart over Housecall Pro and why — AI framing skips the question.'],
    ],
    'Category positioning is about who the buyer is and what gap the product fills between adjacent tools. For FieldChart, the wedge is mid-market trade contractors who are underserved by both SMB and enterprise — saying that out loud sharpens the thesis and prevents the partnership from filing the deal next to Housecall Pro.'),

  q(4350602, 'Career Skills', CHAPTER, 'Target customer specificity',
    'The thesis has to name the FieldChart target customer precisely enough that a partner can imagine the buyer. Which framing best survives partner cross-examination?',
    'Operations directors at trade contractors running 50–500 trucks across HVAC, plumbing, and electrical — typically $10–60M revenue, currently using a mix of paper, spreadsheets, and a legacy dispatch tool they bought five years ago',
    [
      ['Owners of small service businesses who want to grow', 'Too broad to test. The partnership cannot imagine the buyer\'s desk, budget, or current workflow, so the thesis can mean anything in the room.'],
      ['Enterprise IT buyers at national service brands', 'Wrong segment for FieldChart\'s ACV and product. Naming the wrong buyer signals that the associate has not done the segmentation work.'],
      ['Field service technicians who need a better mobile experience', 'End-user benefit is not the same as the buyer. Technicians do not sign contracts at this ACV — operations directors and owner-operators do.'],
    ],
    'A target-customer line should let any partner picture the buyer\'s job title, company size, current toolset, and budget. Vagueness here cascades into a vague TAM, a vague go-to-market, and a vague kill criterion.'),

  q(4350603, 'Career Skills', CHAPTER, 'Founder-market-fit anchor',
    'FieldChart\'s CEO ran a $30M HVAC operation before founding the company. The CTO is ex-Stripe. How should this pair be framed as founder-market fit in the memo without overclaiming?',
    'CEO has lived the buyer\'s job — running dispatch, fighting parts inventory, hiring techs — and translates that into product judgment; CTO brings the payments-and-platform reliability discipline the system needs as it carries invoicing volume',
    [
      ['Both founders are credentialed: an experienced operator and a top-tier engineer, which is exactly what this market needs', 'Credentials are a biographical claim, not a fit argument. The partnership needs to know what each founder brings to *this specific buyer and product*, not that they have impressive resumes.'],
      ['The CEO\'s industry experience guarantees product-market fit because he is the buyer', 'Being a former buyer reduces some risk but does not guarantee PMF — the original 200 customers proved fit, not the CEO\'s past. Overclaiming on founder-as-buyer is a classic associate trap.'],
      ['The Stripe pedigree on the CTO side means the engineering bar is high enough for fintech adjacencies', 'Stripe pedigree is a flag, not a feature. The memo needs to connect it to the *FieldChart* technical surface — payments reliability, fault tolerance for dispatch — not to a hypothetical future adjacency.'],
    ],
    'Founder-market fit is the specific match between what each founder has done and what this company needs them to do. Resumes anchor the claim; the anchor only holds when you can map each founder\'s past work to a concrete chunk of FieldChart\'s product or buyer.'),

  q(4350604, 'Career Skills', CHAPTER, 'Wedge to platform expansion logic',
    'FieldChart starts with dispatch and routing. The thesis claims a path from this wedge into payments, parts inventory, and eventually field service financing. How should the memo present the wedge-to-platform logic?',
    'Dispatch is the daily-active surface that earns trust and data; payments and parts attach naturally because the dispatch system already knows the job, the customer, and the part — each adjacency reuses data the wedge already produced',
    [
      ['Once FieldChart has the customer they can upsell anything because switching is hard', 'Stickiness is not a thesis. The partnership will ask which specific products the customer actually wants — "anything" is exactly the kind of expansion handwave investors reject.'],
      ['Field service is a $40B market, so any platform play with strong dispatch will eventually capture multiple modules', 'Market-size hand-waving substitutes for a real expansion path. Big TAM does not tell the partnership why FieldChart\'s next product will land or who buys it.'],
      ['The CEO has a clear roadmap covering invoicing, scheduling, marketing, CRM, recruiting, and inventory, which shows ambition', 'Listing every adjacent module shows the founder has ambition but not focus. The partnership wants the *order* and the *data reuse logic*, not the menu.'],
    ],
    'Strong wedge-to-platform logic identifies the data and trust the wedge generates and shows how each next module exploits both. For FieldChart, dispatch produces structured job and customer data, which is exactly what payments and parts attach to — that is the expansion argument the partnership can stress-test.'),

  q(4350605, 'Career Skills', CHAPTER, 'Competitive moat that holds for a year',
    'A partner asks: "ServiceTitan could build mid-market FieldChart in six months. What stops them?" Which moat argument actually survives this question?',
    'Mid-market trade contractors will not deploy a product engineered for 1,000-truck enterprises — every workflow, pricing tier, and onboarding flow has to be re-thought; ServiceTitan would have to build a parallel product, not a feature, and their enterprise sales motion is the wrong shape',
    [
      ['FieldChart has a faster product velocity because they are smaller and have a modern stack', 'Velocity-as-moat is fragile against a well-resourced incumbent. The partnership has heard "we ship faster" a thousand times — it rarely holds for a year, let alone a fund-cycle.'],
      ['FieldChart has 200 customers and growing logos, which makes it harder for ServiceTitan to catch up', 'Customer count without distribution moat is just a lead — and 200 logos is well within ServiceTitan\'s reach if they decided to chase. The argument has to point at structural mismatch, not headcount.'],
      ['ServiceTitan is focused on enterprise and will not bother with the mid-market', 'Optimism about incumbent inattention is exactly what partnerships do not trust. Incumbents notice when a category is growing — the moat has to assume they look, not hope they do not.'],
    ],
    'A defensible moat against an enterprise incumbent moving down-market is usually structural — sales motion, pricing surface, product shape — rather than speed. FieldChart\'s argument is that ServiceTitan would have to *re-architect* the product and sales motion to serve mid-market, which is a multi-year decision against a category they may decide not to make.'),

  q(4350606, 'Career Skills', CHAPTER, 'What evidence would change the decision',
    'Inside the FieldChart thesis you have to name the evidence that, if absent, would kill the deal. Which evidence threshold is most useful to commit to in the memo?',
    'Mid-decile customer cohorts (not just the top 20) expanding at >115% net revenue retention and renewing at >90% logo — because the thesis assumes the product lands across the segment, not in a hand-picked top tier',
    [
      ['The founders accepting the term sheet at the offered price without much negotiation', 'Negotiation outcome is about deal mechanics, not thesis truth. A founder agreeing or not agreeing to terms says nothing about whether the underlying business works.'],
      ['Press coverage in trade publications within six months', 'Press is a marketing output, not a thesis test. Partnerships rarely change a decision based on whether trade press has picked the company up.'],
      ['Adding two more enterprise logos to the customer list', 'Enterprise logos cut against the wedge — the thesis is mid-market focus. Validating the wrong segment does not strengthen the deal; it muddies the position.'],
    ],
    'A thesis is only sharp if you name in advance the evidence that would break it. Picking the wrong evidence (deal mechanics, press, off-segment logos) is the most common way associates write a memo that sounds confident but cannot actually be tested.'),

  q(4350607, 'Career Skills', CHAPTER, 'Falsifiability of the thesis',
    'A senior partner pushes back: "Your thesis says mid-market trade contractors will adopt modern dispatch. How would I know in 18 months whether that thesis was right or wrong?" What is the strongest falsifiability statement to bring back?',
    'If FieldChart cannot sustain >100% logo retention across the mid-decile (not the top decile) and ACV is not climbing into the $40K range as customers add modules, the thesis is wrong and the recommendation reverses',
    [
      ['If FieldChart is not the market leader by ARR in 18 months, the thesis was wrong', '"Market leader" is too coarse and depends on competitor disclosure the fund cannot observe. The falsifier has to be something the fund can actually measure on FieldChart\'s own books.'],
      ['The thesis is hard to falsify because vertical SaaS plays often take longer than 18 months to validate', 'Refusing to commit to a falsifier is a way of saying the thesis is not really a thesis. Partnerships will not back a recommendation that cannot be tested within the fund\'s observation window.'],
      ['If revenue growth slows below 100% YoY at any point, the thesis is broken', 'A single growth-rate read is too noisy and too coarse — early-stage growth is lumpy. Falsifiability has to point at the underlying behavior (retention, cohort expansion), not the headline rate.'],
    ],
    'Falsifiability is the discipline that turns a thesis from an essay into a decision. The strongest falsifiers are measurable on the company\'s own books, observable in the fund\'s window, and tied directly to the specific behavior the thesis claims will happen.'),

  q(4350608, 'Career Skills', CHAPTER, 'Pre-empting partner skepticism',
    'You expect one partner to argue that field service software is "another vertical SaaS at peak hype" and another to argue that the trade-contractor buyer is too small. What is the right way to handle both objections inside the sourcing memo, before the partner meeting?',
    'Name both objections explicitly in the thesis section, present the specific evidence that addresses each, and identify which evidence is still pending — partners trust a memo that anticipates pushback more than one that hides it',
    [
      ['Wait for the partner meeting and address objections live so the memo stays positive', 'Saving objections for the meeting reads as either avoidance or surprise. Either way, the partnership trusts a written, anticipated answer more than a verbal one delivered under pressure.'],
      ['Address the strongest objection in the memo and leave the second for the meeting, so the recommendation is not weighed down by caveats', 'Selectively pre-empting one objection telegraphs that the other is the weak point. Partnerships read what is missing as carefully as what is there.'],
      ['Avoid framing the objections directly and instead pack the memo with positive evidence to make a strong case', 'A one-sided memo invites partners to surface objections themselves, which puts the associate on the back foot. A memo that names risks owns the narrative.'],
    ],
    'Sourcing memos earn trust by anticipating the room. Naming the strongest objections, presenting evidence that addresses each, and being explicit about what is still unresolved is the move that gets a deal heard properly rather than blocked at intro.'),

  // -------------------------------------------------------------------------
  // LESSON 2 — Market Map and Sizing (4350609–4350617)
  // Output: bottom-up TAM build for FieldChart, segmented map of who plays
  // where, gaps the thesis exploits. Forces the learner to size the market
  // the way an LP would believe, not the way a top-down slide pretends.
  // -------------------------------------------------------------------------
  q(4350609, 'Career Skills', CHAPTER, 'Bottom-up TAM method',
    'For the FieldChart market map you have to size mid-market trade contractors (50–500 trucks). Which bottom-up TAM build will hold up under partner scrutiny?',
    'Count of US trade-contractor businesses in the 50–500 truck band (~40,000 firms) × realistic penetration the product can reach × ACV that ramps with module attachment — show each input and what it would take to change it',
    [
      ['Take the global field service software market size from an industry report ($40B+) and apply a 1% capture target', 'Top-down "1% of a big number" is the canonical TAM mistake. Partnerships discount it immediately because it tells them nothing about who actually buys, at what ACV, or under what penetration assumption.'],
      ['Use FieldChart\'s current ARR and project five years of 100% YoY growth as the addressable opportunity', 'Projecting current revenue forward is a financial forecast, not a TAM build. TAM is the size of the prize; revenue forecast is the path through it. Conflating them hides the assumption that matters.'],
      ['Survey the customer base for stated willingness-to-pay and multiply by total industry headcount', 'Stated willingness-to-pay is famously unreliable and the multiplication base (industry headcount) is the wrong unit anyway — buyers are firms in a size band, not employees.'],
    ],
    'A bottom-up TAM has three honest inputs: number of target buyers in the named segment, realistic penetration the company can actually reach, and ACV that reflects current and future module attach. Showing each input lets the partnership argue with each separately — which is the point.'),

  q(4350610, 'Career Skills', CHAPTER, 'TAM penetration realism',
    'Your bottom-up TAM uses 40,000 US mid-market trade firms × ACV ramping to $40K × penetration. What penetration assumption can FieldChart actually defend to a partnership?',
    '15–25% penetration over a decade with current product and sales motion — leaving room for incumbents, in-house tooling, and the long tail that never adopts software, while still implying a multi-billion-dollar addressable revenue',
    [
      ['50%+ penetration because every mid-market trade firm will eventually adopt modern dispatch software', 'Half-the-market assumptions are almost never defensible against a partnership. They imply no competition, no in-house build, and no long-tail laggards — none of which match how vertical SaaS markets actually mature.'],
      ['5% penetration to stay conservative and not overpromise', 'Excess conservatism is its own problem — it implies the market is barely worth a Series A and undercuts the thesis. Penetration assumptions should be honest, not performatively modest.'],
      ['Penetration assumptions are not useful because the market will evolve unpredictably', 'Refusing to commit to a penetration number is a way of avoiding the discipline. Partnerships need a number to argue with; the discussion is exactly the point.'],
    ],
    'Penetration realism sits between the cheerleader and the pessimist. For a vertical SaaS wedge with real incumbents, 15–25% over a decade is the band partnerships have seen actually work — naming it and defending the inputs is what separates a serious TAM from a slide.'),

  q(4350611, 'Career Skills', CHAPTER, 'ACV reasoning and module attach',
    'FieldChart\'s current ACV is $20K (dispatch + routing). The thesis assumes ACV climbs to $40K as payments and parts modules attach. How should the memo present ACV inside the TAM build?',
    'Split the ACV ramp into named modules with stated attach rates and price points — show the partnership exactly how the average customer reaches $40K and which module is the riskiest piece of the climb',
    [
      ['Use a blended $40K ACV throughout the TAM because that is where mature customers land', 'A blended figure hides the ramp, which is exactly the most interrogated piece of the TAM. Partnerships want the ladder, not the average — they will ask how a year-one customer gets there.'],
      ['Use the current $20K ACV across the TAM to stay conservative', 'Using only the wedge ACV understates the thesis and effectively says modules will not attach. If the thesis claims platform expansion, the ACV build has to reflect it — being "conservative" by ignoring the story is incoherent.'],
      ['Set ACV based on enterprise field service prices ($100K+) once FieldChart moves up-market', 'Walking ACV up by moving up-market changes the segment, which changes the entire thesis. The TAM has to size *this* segment at *this* ACV trajectory, not a different company.'],
    ],
    'Module-level ACV reasoning is the bridge between the wedge thesis and the platform thesis. Showing the ladder forces honest discussion of which modules actually attach and at what rate — the answers reveal whether the platform claim is real or aspirational.'),

  q(4350612, 'Career Skills', CHAPTER, 'Segmentation that matters for the wedge',
    'Your map segments the field service market in several plausible ways. Which segmentation actually matters for the FieldChart thesis?',
    'By operator size (truck count) and trade vertical, because that is the segmentation FieldChart\'s sales motion and product depth actually map onto — the rest is interesting context but does not drive the decision',
    [
      ['By geography across all 50 states, because state-level regulation varies in field service', 'Geographic segmentation rarely drives a vertical SaaS thesis at Series A — regulation matters at scale, but at $4M ARR the operator-size and trade vertical cuts are what determine the wedge.'],
      ['By technology stack of incumbents, mapping which dispatch software each operator already uses', 'Incumbent stack matters for competitive positioning but is a slice of the map, not the primary cut. The thesis lives or dies on operator size and trade vertical first.'],
      ['By ownership structure, splitting independent operators from private-equity-backed roll-ups', 'PE roll-up dynamics are real but secondary at the wedge stage — they matter more for distribution scale-up than for the initial market-shape decision.'],
    ],
    'Segmentation should follow the thesis: cut the market on the axes the sales motion and product actually serve. Everything else is interesting commentary but does not help the partnership decide.'),

  q(4350613, 'Career Skills', CHAPTER, 'Adjacencies — which are real',
    'The market map shows possible adjacencies: residential service, commercial real estate property management, fleet telematics, payments, and small-business lending. Which adjacency is most credible as a *next* market for FieldChart and why?',
    'Payments — because every dispatched job ends in an invoice, the data is already in FieldChart, and payments attach is the most common vertical SaaS adjacency for a reason; the rest require a different buyer or a different product',
    [
      ['Small-business lending, because trade contractors need working capital and lending margins are attractive', 'Lending requires a separate regulatory stance, a different risk team, and a buyer behavior FieldChart has not yet proven. It may be the right adjacency in 5 years but it is the wrong claim for a Series A memo.'],
      ['Commercial real estate property management, because property managers also need dispatch', 'Property management is a different buyer with different workflows. Borrowing dispatch UI does not mean the business is the same — adjacency claims should follow the buyer, not the feature.'],
      ['Fleet telematics, because trade contractors operate trucks', 'Fleet telematics has its own incumbents, hardware integration challenges, and a buyer who treats telematics as a logistics function rather than an operations function. Adjacency by association is not enough.'],
    ],
    'Adjacency credibility comes from the same buyer with the same data, not the same industry or the same building. Payments wins this argument because FieldChart already runs the workflow that produces the invoice — the rest are slides, not adjacencies.'),

  q(4350614, 'Career Skills', CHAPTER, 'Gap-spotting on the market map',
    'You build the market map and there is no incumbent purpose-built for 50–500 truck mid-market trade contractors — ServiceTitan goes enterprise, Housecall Pro stops at small SMB. Which interpretation should you put in the memo?',
    'The gap is real and structural, not accidental — ServiceTitan\'s sales motion is too expensive for $20K ACVs and Housecall Pro\'s product is too thin for 100-truck operations, so neither can reach this segment without rebuilding; FieldChart sits in a defendable middle',
    [
      ['The gap exists because no one has gotten around to it yet, so first-mover advantage is the key thesis', 'First-mover-because-no-one-tried is the weakest version of a gap argument. Markets that look empty usually have a structural reason, and naming the reason is what makes the thesis durable.'],
      ['The gap is probably an illusion because if it were real, ServiceTitan or Housecall Pro would already be there', 'Markets do leave structural gaps when incumbent sales motions or product shapes do not fit the segment. The right move is to name *why* the gap is real, not assume it cannot be.'],
      ['The gap is interesting but cannot be sized confidently, so the memo should defer the question', 'Deferring the central market-shape question is exactly the opposite of what the memo is for. The associate\'s job is to commit to a read and tell the partnership how to test it.'],
    ],
    'A gap on a market map is only a thesis when it is structural — explainable by the incumbents\' product shape, sales motion, or strategic focus. Naming the structural reason is what makes the gap argument durable; treating it as luck or oversight makes it brittle.'),

  q(4350615, 'Career Skills', CHAPTER, 'Defensible market boundary',
    'A partner asks where you draw the boundary of FieldChart\'s addressable market. Including residential HVAC contractors with 5 trucks and including commercial-only firms with 800 trucks both feel wrong. Where should the boundary sit and why?',
    'Inside the 50–500 truck band, US-based, across HVAC, plumbing, and electrical — the boundary lines up with the product\'s operational complexity sweet spot and the ACV the current sales motion can win',
    [
      ['Include every field service operator in the US to maximize TAM, since FieldChart could in principle serve anyone', '"Could in principle" is the language of a TAM the partnership will discount. The boundary should match the buyer the product can actually win, not the broadest definition of the category.'],
      ['Include only HVAC operators in the 100–300 truck band where current logos are concentrated', 'Drawing the boundary tightly around current customers understates the thesis. The boundary should reflect the segment the product *can* serve within a reasonable evolution, not just today\'s book.'],
      ['Avoid drawing a boundary and let the market define itself as FieldChart grows', 'Refusing to draw a boundary is a way of avoiding the segmentation question. The partnership cannot evaluate a deal whose market shape is left undefined.'],
    ],
    'A defensible market boundary respects three things: the product\'s operational fit, the sales motion\'s reach, and the ACV the segment can pay. Drawing the boundary at the buyer the product *can* actually win — not the broadest or narrowest framing — is what makes the TAM credible.'),

  q(4350616, 'Career Skills', CHAPTER, 'Sector and stage focus',
    'Your fund\'s thesis is Series A B2B software, $20–30M check sizes, 20–25% ownership. FieldChart fits the headline. Where in the memo should the sector-and-stage fit be argued explicitly?',
    'In the opening recommendation paragraph and again in the terms section — show the partnership that the deal matches the fund\'s shape on both the qualitative thesis fit and the quantitative ownership math, so neither dimension is left unsaid',
    [
      ['Sector-and-stage fit is implicit and does not need explicit treatment', 'Implicit fit is exactly the kind of thing partnerships re-litigate during the meeting. Stating it explicitly forecloses the conversation.'],
      ['Sector-and-stage fit belongs only in the appendix because it is administrative', 'Treating the fund-fit argument as administrative misses that it is part of the *recommendation*. The associate has to show that the deal is the fund\'s shape, not just that it is a good company.'],
      ['Sector-and-stage fit should be argued separately from the deal recommendation so the two are not conflated', 'Decoupling fund-fit from recommendation invites the partnership to evaluate FieldChart as a good idea in the abstract rather than a good idea for *this* fund. The two arguments belong together.'],
    ],
    'Fund-fit is not a checkbox at the bottom of the memo — it is a load-bearing piece of the recommendation. Saying it in the opening and again in the terms section keeps the partnership inside the question they should actually be answering: should this fund invest, at this stage, in this shape.'),

  q(4350617, 'Career Skills', CHAPTER, 'Forward-revenue framing for the round',
    'FieldChart is raising $20M at $80M post-money on $4M ARR — that is 20x current ARR. Forward 12-month ARR at 180% YoY growth would be ~$11M. How should the memo frame the valuation for the partnership?',
    'Frame on forward 12-month ARR (~7–8x) and compare to recent comparable Series A vertical SaaS rounds, while flagging that the growth-rate assumption is the load-bearing input — if growth halves, the multiple roughly doubles',
    [
      ['Frame purely on current ARR (20x) and argue that vertical SaaS commands a premium for category leadership', 'Current-ARR multiples are misleading at fast-growth stages because they ignore the year ahead. Partnerships will mentally translate to forward multiples anyway — better to do it openly.'],
      ['Avoid multiple-based framing and rely on a discounted-cash-flow projection out to year five', 'DCF at Series A is largely theater — the inputs are too speculative. Forward-revenue multiples are the language partnerships use because they keep the load-bearing assumption (growth) visible.'],
      ['Argue that valuation is not the central question at Series A and focus on ownership target instead', 'Valuation drives ownership at a given check size — they are inseparable. Skipping the valuation framing leaves the ownership argument unanchored.'],
    ],
    'Forward-revenue framing is the standard language partnerships use to argue Series A valuation, because it keeps the growth assumption visible and the comp set legible. Naming the comp range *and* the growth-sensitivity is what separates a careful framing from a number on a slide.'),

  // -------------------------------------------------------------------------
  // LESSON 3 — Diligence and Customer Validation (4350618–4350627)
  // Output: customer-call plan, reference depth, metric scrutiny, technical
  // risk, services check. Forces the learner to look behind the headline
  // numbers FieldChart presents and decide which ones are load-bearing.
  // -------------------------------------------------------------------------
  q(4350618, 'Career Skills', CHAPTER, 'Customer-call plan structure',
    'You have one week to run customer diligence on FieldChart. The company offers a list of 8 reference customers. How should you build the customer-call plan?',
    'Mix references provided by the company with 4–6 calls you source independently from the broader logo list — and structure the calls by cohort (early adopters, mid-2024 land, last quarter) so you can read change over time, not just the average sentiment',
    [
      ['Take all 8 references the company provides — they are the highest-quality conversations and the company has already opened the door', 'Founder-provided references are by definition selected. They are useful but cannot stand alone, because the load-bearing question is what *non-favorable* customers say.'],
      ['Skip the founder references and only call cold logos from the broader customer list to avoid bias', 'Cold calls have their own bias — the customers willing to take a cold call from a VC may not be representative either. The right move is to mix sources, not to over-correct.'],
      ['Run only 2–3 deep calls with the best customers since quality matters more than count', 'Three calls is not enough to read variance. The whole point of customer diligence is to triangulate, and triangulation needs both volume and spread.'],
    ],
    'A serious customer-call plan mixes founder-provided references with independently sourced calls, and structures the cohort so the associate can see change over time. The pattern across the cohort is what matters, not the loudest individual call.'),

  q(4350619, 'Career Skills', CHAPTER, 'Reference depth',
    'On a 30-minute FieldChart customer call, the operations director says they "love it" and would "recommend it." What follow-up moves actually produce useful diligence signal?',
    'Ask which specific workflow used to take longer, what their alternative was before FieldChart, how often they use it weekly, what they would do if it disappeared tomorrow, and which team member uses it least and why',
    [
      ['Thank them for the recommendation and end the call early — strong positive signal does not need to be re-litigated', 'Polite "love it" calls are the lowest-information signal in venture. Ending the call early surrenders the diligence; the load-bearing follow-ups are exactly the ones you skipped.'],
      ['Ask whether they are happy with the pricing and the contract terms, since those are the easiest things to renegotiate', 'Pricing satisfaction is interesting but secondary to usage depth and counterfactual. Customers can be happy with the price of a tool they barely use.'],
      ['Ask what features they would like to see added, to assess product roadmap demand', 'Wish-list questions produce interesting but unreliable answers — customers ask for what they imagine, not what they would actually use. Reference depth lives in observed behavior, not requested features.'],
    ],
    'A reference call earns its keep through depth questions: counterfactual, frequency, replacement risk, team adoption variance. "Love it" is where the call starts, not where it ends — and the variance inside the team is usually where the most interesting signal lives.'),

  q(4350620, 'Career Skills', CHAPTER, 'ARR scrutiny — quality vs headline',
    'FieldChart reports $4M ARR with 180% YoY growth. On scrutiny you find that ~15% of that ARR is from a single mid-market roll-up that signed a one-year contract 8 months ago. How should this affect the memo?',
    'Flag the concentration explicitly — if the roll-up does not renew, ARR drops 15% and the growth story breaks; the memo should set a renewal milestone as a named diligence checkpoint before final commitment',
    [
      ['Adjust ARR down by the concentration percentage to be conservative in all forward calculations', 'Reflexive downward adjustment hides the actual risk — what matters is renewal probability, not the headline number. The partnership wants the named risk, not a quietly-shrunk figure.'],
      ['Treat the concentration as a positive signal because a roll-up of this size is a strong customer reference', 'Concentration in a fast-growth Series A is a real risk regardless of how reputable the customer is. The size makes it more reassuring as a reference and *more* concerning as a concentration.'],
      ['Concentration of 15% is below the conventional 20% threshold and does not need flagging', 'Threshold rules are heuristics, not policy — 15% with a single contract up for renewal in 4 months is a material risk regardless of where it sits on a chart.'],
    ],
    'ARR scrutiny is about the shape of the number, not the size. Concentration, contract length, renewal proximity, and customer health all change the meaning of the headline. The memo should surface the shape so the partnership can decide whether the risk is acceptable, not hide it inside a rounded figure.'),

  q(4350621, 'Career Skills', CHAPTER, 'NRR decomposition',
    'FieldChart reports 110% NRR. On decomposition, the top decile of customers expanded at 145% while the bottom half held flat or shrank slightly. What is the right read for the memo?',
    'NRR is concentrated in the top cohort and the rest of the book is not expanding — the headline NRR overstates the platform claim, and the diligence has to test whether the top-decile expansion is replicable or unique to early-adopter behavior',
    [
      ['110% NRR is above the 100% threshold and confirms the expansion thesis', 'Threshold-thinking on NRR ignores the load-bearing question of *who* is expanding. A blended number can hide a story where only a few customers carry the result.'],
      ['Top-decile concentration is expected at Series A and not worth flagging', 'Concentration at Series A is normal, but unflagged concentration is what produces broken Series B memos a year later. The right move is to name it, not normalize it.'],
      ['Focus on the bottom-half stability as the real signal, since flat retention in a fast-growth segment is reassuring', 'Flat-to-shrinking retention in a segment the company is actively selling to is not reassuring — it suggests the product is not landing across the cohort. The memo should not invert which half is the signal.'],
    ],
    'NRR decomposition is the most important diligence move at this stage. A 110% blended figure can mean "every customer is expanding modestly" (great) or "two customers are carrying the number" (a different deal). The memo should make the partnership see which shape is true.'),

  q(4350622, 'Career Skills', CHAPTER, 'CAC payback under hybrid motion',
    'FieldChart\'s sales motion is mixed: a 6-person sales team closing mid-market deals plus a self-serve onboarding path for smaller logos. Blended CAC payback is reported at 18 months. How should the memo handle this number?',
    'Decompose CAC payback by motion — the sales-led number and the self-serve number almost certainly differ materially, and the blended 18 months is the average of two different businesses; the partnership needs both figures to evaluate scale economics',
    [
      ['18 months blended is in the acceptable range for vertical SaaS and supports the unit economics story', 'Accepting the blended figure as-is is exactly the error. Blended unit economics across two motions tells the partnership very little about whether either motion scales.'],
      ['CAC payback is less important than NRR at Series A; the memo should de-emphasize it', 'De-emphasizing CAC payback at Series A is wrong — it is one of the two load-bearing metrics on the deal. The memo should engage with the number, not duck it.'],
      ['Calculate payback only on the sales-led motion since self-serve will be a marginal contribution', 'Dropping the self-serve number assumes a conclusion. If self-serve is growing as a share of logos, ignoring it materially misstates where the business is heading.'],
    ],
    'Blended CAC payback across two motions is one of the most common quietly-misleading figures in a Series A deck. The right move is always to split — sales-led versus self-serve, segment by ACV, by cohort — because the underlying economics almost always differ in ways that change the deal.'),

  q(4350623, 'Career Skills', CHAPTER, 'Data-quality checks on metrics export',
    'FieldChart sends a metrics export with ARR, MRR, customer counts, NRR, gross margin, and CAC. Which data-quality check is most useful to run before trusting the numbers?',
    'Reconcile the metrics export to the company\'s billing system: total MRR × 12 should match ARR; customer count should match invoiced logos; gross margin should reconcile to financial statements net of hosting and support costs',
    [
      ['Trust the export because the founders are reputable and have no reason to misrepresent', 'Founder reputation is not a substitute for reconciliation. Even well-intentioned founders ship metrics with subtle errors — definitional, classification, cohort — that change the meaning of the numbers.'],
      ['Ask the company to re-export the data in a different format to cross-check', 'Re-exports from the same underlying system are not independent checks — they will reproduce any definitional issues that live in the source. The reconciliation has to cross *systems*, not formats.'],
      ['Skip data reconciliation because the founders will provide audited statements at closing', 'Audited statements come later and cover financials, not SaaS metrics. Reconciliation needs to happen during diligence, not after, because the metrics drive the decision.'],
    ],
    'Cross-system reconciliation — metrics export against billing system against financial statements — is the diligence move that catches definitional drift before it lands in the IC memo. Skipping it is how memos end up presenting numbers that quietly disagree with each other.'),

  q(4350624, 'Career Skills', CHAPTER, 'Founder reference patterns',
    'You run six founder references on FieldChart\'s CEO. Four are warm-to-glowing. One is notably reserved. One says clearly: "He is good, but he micromanages and burned through two early VPs." What is the right read for the memo?',
    'Treat the dissenting reference as the highest-information signal — warm references are the default and the reserved tone of the fifth call deserves a direct follow-up; the memo should name the micromanagement pattern and explicitly assess whether it is fixable',
    [
      ['Average the references and conclude the founder is mostly positive with one outlier', 'Averaging references is exactly wrong — the outlier reference is usually the most diagnostic call. Glowing references are the floor; the negative one is the signal.'],
      ['Discount the negative reference because two early-VP departures could have many causes', 'The point of a reference call is to surface patterns the company will not. Dismissing the one call that actually revealed a pattern undoes the work the call was for.'],
      ['Treat the warm references as confirmation of strong founder-market fit and move on', 'Confirmation bias on founder references is the most expensive bias in venture. The memo has to engage with the dissent, even when the majority sentiment is positive.'],
    ],
    'Founder reference patterns mostly live in the dissenting calls. The right discipline is to treat the negative reference as the call to follow up on, not to discount — and to make the pattern (e.g. micromanagement, early-VP burn) explicit in the memo so the partnership can decide whether it is a coachable issue or a structural one.'),

  q(4350625, 'Career Skills', CHAPTER, 'Technical risk in dispatch/routing core',
    'FieldChart\'s dispatch engine is in-house, written in Python and Go, runs ~50 routes per second across the customer base. The CTO is comfortable but says the next 5x of customer growth will require an architectural rewrite. How should the memo handle technical risk?',
    'Flag the rewrite as a named milestone — sized, scheduled, and tied to the Series A use of proceeds — and treat it as a real execution risk that the partnership should weigh, not a routine engineering note',
    [
      ['Treat the rewrite as standard engineering work that does not need investor attention', 'A foundational rewrite of the core dispatch engine is not routine — it is the kind of project that consumes engineering capacity for two quarters and can stall the company. It belongs in the risk section.'],
      ['Treat the rewrite as a kill criterion since the current architecture cannot scale', 'A rewrite is not a kill criterion if it is sized, scheduled, and funded. Treating it as binary mistakes execution risk for thesis risk.'],
      ['Defer to the CTO since technical architecture is outside the diligence scope', 'Architecture is exactly inside the diligence scope at Series A when the company is mid-scaling. Deferring to the CTO without engagement is the kind of move that produces unpleasant surprises at the Series B board meeting.'],
    ],
    'Technical risk at Series A is not about whether the code is good — it is about whether the team can execute the known scale work without breaking the business in the process. Naming the rewrite as a milestone makes the risk legible and gives the partnership something specific to track.'),

  q(4350626, 'Career Skills', CHAPTER, 'Services disguised as software',
    'FieldChart\'s onboarding involves a 4–8 week implementation team that re-builds each customer\'s dispatch logic, sets up integrations, and trains the staff. Some customers describe this as the most valuable part of the product. What is the right read for the memo?',
    'Quantify the implementation cost as a percentage of first-year ACV and decide explicitly whether FieldChart is a software business with services attached, or a services business with software attached — the answer changes the gross margin profile and the comp set',
    [
      ['High-touch implementation is fine because it improves stickiness and is a competitive advantage', 'Stickiness from services is real but the cost lives in gross margin. The memo cannot treat services-as-moat without first being explicit about what the margin profile actually is.'],
      ['Most B2B SaaS has implementation services; this is not a flag', 'Most B2B SaaS has implementation, but 4–8 weeks of bespoke work per logo at this ACV is unusual and material. The memo should engage with the specifics, not normalize them away.'],
      ['Treat the services as a temporary scaffolding that will go away as the product matures', 'Hoping services will disappear with product maturity is wishful thinking unless the company can show a credible plan for it. The memo needs the plan and the timeline, not the hope.'],
    ],
    'The services-or-software question changes the entire shape of the business: gross margin, scalability, comp set, exit multiple. The memo has to make the partnership see which the company actually is — and either commit to the services trajectory or commit to retiring it.'),

  q(4350627, 'Career Skills', CHAPTER, 'Signal extraction from polite calls',
    'On three FieldChart customer calls you hear the same hedge: "It is great for dispatch, but we still use [other tool] for [adjacent workflow]." None of the customers are unhappy. What is this telling you?',
    'The wedge is working but the platform claim is weaker than the deck suggests — customers are not replacing adjacent tools, which directly tests the module-attach assumption in the TAM build and should be flagged in the memo',
    [
      ['Customers running parallel tools is normal at this stage and not worth flagging', 'Parallel tools mid-deployment can be normal, but a *consistent* pattern across three calls is a signal that should be named — especially when the thesis depends on platform expansion.'],
      ['The thesis is broken because customers are not consolidating onto FieldChart', 'A consistent pattern is a flag but not a kill. The memo should test whether the parallel-tool behavior is permanent or transitional, not jump straight to abandoning the deal.'],
      ['The hedge is polite language and probably means nothing specific', 'Polite language across multiple calls almost always means something specific. Skilled diligence treats consistent hedges as the most useful signal in the conversation, not as noise.'],
    ],
    'Customer calls rarely deliver clean negative signal — most useful information arrives wrapped in politeness. The discipline is to notice the pattern in the hedges and trace it to the part of the thesis it tests. Here, parallel-tool usage directly probes the platform-expansion claim.'),

  // -------------------------------------------------------------------------
  // LESSON 4 — Terms and Investment Decision (4350628–4350637)
  // Output: term sheet plus IC memo plus recommendation. Forces the learner
  // to synthesize sourcing + market + diligence into a partnership-ready
  // recommendation with named conditions, named kill criteria, named
  // ownership target. Most integrative section.
  // -------------------------------------------------------------------------
  q(4350628, 'Career Skills', CHAPTER, 'Preference stack on $20M / $80M post',
    'FieldChart is offering 1x non-participating preference on the $20M Series A. The seed investors hold 1x non-participating on $4M. How should the memo present the preference stack to the partnership?',
    'Total preference stack is $24M (1x non-participating throughout); below that, common holders receive nothing on a downside exit — show the partnership the exit value at which preference matters and at which it does not',
    [
      ['1x non-participating is standard and does not need explicit presentation', 'Standard does not mean implicit. The memo should still show the stack so the partnership can evaluate downside outcomes — naming the number is what makes a term acceptable, not omitting it.'],
      ['Ask for 1x participating preference to improve fund returns on downside scenarios', 'Participating preference is well outside Series A norm in this category and would damage the founder relationship for marginal downside protection. Asking is itself a signal that gets remembered.'],
      ['Preference stack is irrelevant at this stage because the company is growing and unlikely to need downside protection', 'Preference stack is exactly *for* the scenario where the company does not deliver. Dismissing it because growth is strong is the kind of optimism that produces nasty surprises at exit.'],
    ],
    'Preference stack is straightforward but worth being explicit about. Showing the total stack and the exit values where preference matters versus where it does not lets the partnership see the downside shape — and prevents the post-close conversation where someone asks "what does the stack look like again?"'),

  q(4350629, 'Career Skills', CHAPTER, 'Board composition at Series A',
    'Post-close FieldChart will have a 5-seat board. The fund taking the lead at 25% ownership will hold one seat. The seed investor wants to retain one observer seat. The founders want two seats and an independent. What composition should the memo recommend?',
    'Two founder seats, one lead investor seat (fund), one independent agreed by both parties, and one open seat to be filled by mutual consent — observer for the seed investor; this balances control without giving any party unilateral authority',
    [
      ['Two investor seats (lead + seed) plus one founder seat and two independents', 'Two investor seats at Series A unbalances the board against the founders, who still hold majority economic interest and run the company. It also signals a level of investor activism that is not warranted at this stage.'],
      ['Three founder seats plus two investor seats, since the founders are operating the company', 'Three founder seats consolidates board control with the founders and effectively makes the investor seats decorative. The investor needs at least the ability to combine with an independent to form a majority on consequential decisions.'],
      ['Defer board composition to the founders since they will be running the company day-to-day', 'Board composition is one of the few decisions the investor influences directly at Series A. Deferring it gives up the seat at the table the fund is paying $20M for.'],
    ],
    'Board composition at Series A balances three things: founders retain operational legitimacy, investors retain oversight on consequential decisions, and an independent breaks ties on contested issues. The exact configuration matters less than the principle that no single party should hold unilateral authority.'),

  q(4350630, 'Career Skills', CHAPTER, 'Founder vesting reset',
    'FieldChart\'s founders are fully vested on their seed equity (4-year vest finished). The Series A lead asks for a partial re-vest. How should the memo position this ask?',
    'Propose a 3-year re-vest on 25% of founder equity with a 1-year cliff and double-trigger acceleration on change of control — enough to keep founders aligned through the next phase without re-vesting equity they have already earned',
    [
      ['Full 4-year re-vest from scratch on all founder equity, since the new round is effectively a reset', 'Re-vesting fully earned equity from scratch is overreach and will be experienced by the founders as punitive. It also will not be agreed to by any reasonable founder and will torpedo the deal.'],
      ['No re-vest at all because the founders are already aligned through their existing equity', 'Zero re-vest leaves no incentive on the next phase of work. Founders who are fully vested can in principle leave with all their equity intact, which is exactly the alignment problem a partial re-vest solves.'],
      ['Re-vest contingent on hitting Series B milestones rather than on time', 'Performance-based re-vesting introduces ambiguity and is rarely used at Series A — it ties up the partnership in defining the milestones and creates negotiation friction every quarter.'],
    ],
    'Partial re-vesting with a cliff and double-trigger is the standard middle ground at Series A. It signals alignment without insulting the founders, and it gives the partnership comfort that the next four years of work are also under vest.'),

  q(4350631, 'Career Skills', CHAPTER, 'Option pool top-up math',
    'FieldChart\'s current option pool is 8% (mostly allocated). The lead is asking for a 12% pool post-money to cover the next two years of hiring. The founders prefer the pool top-up come from existing investors, not from their stakes. Who should the dilution land on?',
    'The pool top-up lands pre-money by convention — diluting existing holders proportionally — so the founders and seed investors absorb the dilution before the new round closes; this is the standard Series A treatment and should be modeled explicitly in the cap table',
    [
      ['Have the new round bear the pool dilution, since the new capital is funding the hiring', 'Pool top-up borne by the new round is non-standard and the lead will not agree to it — the pool is funded out of pre-money equity precisely so the new investor is not diluted by hiring that should already have been scoped.'],
      ['Split the dilution evenly between founders and the new round', 'Splitting evenly is a halfway compromise that no party actually wants and that no standard term sheet supports. The convention exists for a reason — getting it wrong signals inexperience.'],
      ['Increase the pool to 10% rather than 12% to minimize founder dilution', 'A smaller pool that fails to cover the hiring plan creates a top-up two quarters later — which is worse for the founders than doing it once and properly at the round.'],
    ],
    'Option pool top-ups land pre-money by convention. Modeling the dilution explicitly — showing the founders exactly what their post-money ownership will be — is the move that prevents the negotiation re-opening at the term sheet stage.'),

  q(4350632, 'Career Skills', CHAPTER, 'Anti-dilution flavor',
    'The term sheet draft includes broad-based weighted-average anti-dilution. The founders ask whether this is necessary. How should the memo position it?',
    'Broad-based weighted-average is the market-standard middle ground — it protects the investor against a down round without punishing the founders the way full ratchet would, and is the term to commit to without further negotiation',
    [
      ['Drop anti-dilution to make the deal more founder-friendly and accelerate signing', 'Dropping anti-dilution entirely is non-market at Series A and would not pass the partnership\'s LPA disclosures. It is also unnecessary — broad-based weighted-average is rarely the thing that breaks a deal.'],
      ['Ask for full ratchet anti-dilution to maximize investor protection', 'Full ratchet is punitive and signals to the founders that the investor is preparing for a down round before the company has even closed. It is not market and will damage the founder relationship from day one.'],
      ['Make anti-dilution contingent on hitting specific milestones', 'Conditional anti-dilution introduces unnecessary complexity and is not market. The standard treatment is broad-based weighted-average flat, full stop.'],
    ],
    'Anti-dilution flavor is one of those terms where the right answer is the market standard — broad-based weighted-average. Deviating either way (no protection or full ratchet) is the kind of move that gets remembered for the wrong reasons.'),

  q(4350633, 'Career Skills', CHAPTER, 'Allocation logic — full check vs syndicate',
    'FieldChart wants $20M from a single lead at 25% ownership. The fund is sized at $300M with a 25-company target — implying ~$12M average initial check. Should the partnership write the full $20M or syndicate?',
    'Syndicate the round — write $12–15M as lead and bring in a strong co-investor for the remaining $5–8M, preserving check-size discipline and freeing reserves for the company\'s Series B follow-on',
    [
      ['Write the full $20M because lead allocation at the target ownership justifies the size', 'Writing the full $20M sacrifices the fund\'s construction discipline for a single deal. It also leaves no co-investor to share information rights or to anchor the next round if the company stumbles.'],
      ['Pass the deal because the check size exceeds the fund\'s standard initial allocation', 'Passing on a high-conviction deal because of a check-size mismatch is a failure of imagination. Syndication is the standard tool to solve exactly this problem.'],
      ['Write the full check and reduce reserves on this company to compensate', 'Reducing reserves on the highest-conviction deal in the portfolio is exactly the wrong direction — the more conviction, the more reserves the company should have, not less.'],
    ],
    'Allocation discipline is what protects fund construction over a vintage. A single $20M check is not the problem; the problem is what it implies for the other 24 deals the fund needs to make and the reserves it needs to deploy. Syndication preserves both.'),

  q(4350634, 'Career Skills', CHAPTER, 'Convincing a skeptical partner',
    'One partner in the partnership is skeptical that mid-market trade contractors will adopt vertical SaaS at the ACV FieldChart needs. She has been right about this kind of question before. What is the best way to bring her along?',
    'Engage with her objection directly — propose two specific diligence steps (cohort-level retention check and a mid-market sales-cycle review) and offer to let her drive one of them; meeting her objection on its terms is more persuasive than overwhelming her with positive evidence',
    [
      ['Bring overwhelming positive evidence to outweigh her objection in the partnership meeting', 'Stacking positive evidence against a partner with a real prior track record on this question reads as evasion. She will not be convinced by volume — she will be convinced by engagement with her specific objection.'],
      ['Avoid her on the next round so she does not block the deal', 'Avoiding the skeptic in your partnership is a way of guaranteeing she will be the loudest objection at the partner meeting. Engaging early is what actually moves the conviction.'],
      ['Frame her objection as out-of-date since the market has matured', 'Dismissing her prior on the grounds that the market has changed is condescending and will be received as such. She is asking a real question and deserves a real answer.'],
    ],
    'A skeptical partner is not an obstacle to route around — she is part of the diligence team. Engaging her objection directly, with specific diligence steps that test it, is the move that builds conviction across the partnership rather than splitting it.'),

  q(4350635, 'Career Skills', CHAPTER, 'Kill criteria attached to recommendation',
    'You are finalizing the FieldChart recommendation. What is the right way to attach kill criteria so they actually function as kill criteria and not as decoration?',
    'Two or three specific, measurable, time-bound criteria — e.g. "mid-decile NRR below 105% at the next quarter close" or "rewrite slippage past Q3" — each tied to a clear partnership response if triggered',
    [
      ['A broad list of risk factors to monitor over time', 'A "watch list" is not a kill criterion. Kill criteria have a threshold, a measurement, a date, and a defined response. Anything looser becomes a list of vague concerns no one acts on.'],
      ['A single high-level criterion such as "watch for slowing growth"', 'Single, vague criteria are useless precisely because everything will at some point look like slowing growth. The criterion needs to be specific enough that triggering it is unambiguous.'],
      ['Kill criteria internal to the partnership only, not shared with the founders', 'Kill criteria that the founders do not know about cannot influence behavior. The criteria the partnership cares most about should usually also be visible to the founders, at least in the form of named milestones.'],
    ],
    'Kill criteria function only when they are specific, measurable, dated, and tied to a partnership response. The discipline of writing them down at the moment of commitment — not later — is what makes them load-bearing rather than performative.'),

  q(4350636, 'Career Skills', CHAPTER, 'Memo structure integrating the full pack',
    'You have completed every component of the FieldChart investment pack. How should the final IC memo be structured to integrate all five lessons of work?',
    'Recommendation up top with explicit ownership target and check size, then thesis (sourcing), then market (sizing and map), then evidence (diligence), then risks and kill criteria, then terms — partners read recommendation first, then test it against the body',
    [
      ['Chronological by diligence workstream so the partnership can follow the associate\'s path', 'Chronological structure is a journal. Partners read memos to test a conclusion, not to follow a journey. The conclusion has to come first.'],
      ['Build up from thesis through diligence to the recommendation at the end, since the recommendation is the conclusion', '"Build-up" structure forces partners to wait for the recommendation before they can interrogate it. The standard partnership memo leads with the verdict and lets the body of the memo support or undermine it.'],
      ['Lead with the team and the founder section, since people drive returns and the partnership should evaluate them first', 'Leading with the team without the recommendation defers the question the partnership came to answer. People matter — the memo should lead with the decision and let the team section back it up.'],
    ],
    'A working IC memo leads with the recommendation (ownership, check size, conditions) and lets the body of the memo prove or disprove it. This structure works because partners read recommendations like a sentence with footnotes — verdict first, evidence underneath, kill criteria last.'),

  q(4350637, 'Career Skills', CHAPTER, 'Decision under partial conviction',
    'At the partnership meeting, your conviction is genuinely partial — the thesis is strong, the founder is strong, but the mid-decile NRR question is unresolved and there is one outstanding customer reference that has not yet been completed. What is the right recommendation to bring?',
    'Conditional yes — recommend the investment subject to closing the mid-decile NRR check and completing the outstanding reference within the diligence window, with named kill criteria if either comes back wrong',
    [
      ['Unconditional yes because the rest of the pack is strong and unresolved items can be closed during the legal process', 'Closing diligence items "during legal" is a way of guaranteeing they will not actually be closed. Outstanding diligence belongs in the recommendation as a named condition, not deferred into a black box.'],
      ['Hard no because conviction is not complete', 'Hard-no on partial conviction is a failure of nerve. The discipline at Series A is to name what is missing and condition the recommendation on closing it — not to pass on every deal with an open question.'],
      ['Defer the recommendation until the partnership meeting after the round closes', 'Deferring past the closing date surrenders the decision entirely. Recommendations have to be made within the round\'s timeline or the deal goes without you.'],
    ],
    'Conditional yes is the recommendation type that exists specifically for partial conviction. Naming the unresolved items, the test that would close them, and the kill criteria that would reverse the decision is what makes the recommendation honest. Partners trust honest recommendations more than confident ones.'),

  // -------------------------------------------------------------------------
  // LESSON 5 — Portfolio Support and Path to Exit (4350638–4350646)
  // Output: post-close board cadence, follow-on math, exec hiring, exit
  // framing. Forces the learner to think past close — the part of the job
  // where most of the work actually lives and where the investor reputation
  // is built.
  // -------------------------------------------------------------------------
  q(4350638, 'Career Skills', CHAPTER, 'Board cadence in first 6 months',
    'The FieldChart Series A has closed. What board cadence should the fund propose for the first 6 months post-close?',
    'Monthly board meetings for the first 6 months — short, focused on the rewrite milestone, hiring sequence, and the mid-decile retention test — then move to quarterly once those questions are answered',
    [
      ['Quarterly board meetings from day one, since the company has just raised and needs runway to execute', 'Quarterly from day one leaves a 3-month window during which the post-close milestones can drift without the board noticing. Monthly is the right pace until the early questions are answered.'],
      ['Monthly board meetings indefinitely, since the company is early-stage and needs governance', 'Monthly indefinitely turns the board into operational management. The cadence should match the question intensity, not the stage.'],
      ['No formal cadence — communicate as needed and let the founders set the rhythm', '"As needed" boards are unaccountable boards. The fund\'s reputation depends on showing up reliably, which means a real cadence the company can plan around.'],
    ],
    'Board cadence should match the density of unresolved questions, not the stage of the company. For FieldChart, monthly through the first 6 months — covering the rewrite, the mid-decile retention test, and exec hiring — then quarterly is the right shape. Cadence is a tool, not a status.'),

  q(4350639, 'Career Skills', CHAPTER, 'KPI focus for next board meeting',
    'You are preparing the agenda for FieldChart\'s next board meeting. Which KPIs should be load-bearing in the deck?',
    'Mid-decile NRR (the load-bearing test from the IC memo), new-logo ACV trend, gross margin net of services, and the rewrite milestone status — every KPI should map to a thesis or risk the IC committed to',
    [
      ['Headline ARR, headline NRR, customer count, and burn — the standard top-line numbers', 'Top-line numbers without the IC-named risks attached is theater. The board needs to see the metrics that test the thesis, not the metrics that confirm everyone is busy.'],
      ['Whatever metrics the CEO finds most informative for his own management', 'CEO-preferred metrics are useful internally but do not necessarily test the investor thesis. The board has different questions than the operating team.'],
      ['A broad dashboard of 25+ KPIs so the board has full visibility', 'A 25-KPI dashboard is a sign that no one has decided what matters. Board decks should be opinionated about the 4–6 numbers that test the thesis and risk register.'],
    ],
    'Board KPIs should be opinionated and traceable to the IC commitments. The discipline is to ask: which numbers would change a partnership decision if they moved? Those are the numbers that belong in the deck.'),

  q(4350640, 'Career Skills', CHAPTER, 'Follow-on math at Series B markup',
    'FieldChart has hit its 12-month milestones and is raising a Series B at $250M post-money (roughly 3x the A). The fund has reserved $15M for follow-on. The pro rata to maintain ownership at the new round is $20M. What is the right move?',
    'Take pro rata partially — write $15M from reserves to roughly preserve fund construction without breaking the reserves model; the marginal $5M would come from a new co-investor or the fund passes on the marginal dilution',
    [
      ['Write the full $20M pro rata to preserve ownership at all costs', 'Breaking the reserves model for ownership preservation is a common late-cycle mistake. Ownership is one input; reserves discipline across the portfolio matters more.'],
      ['Skip the pro rata entirely since the 3x markup is a strong signal that does not need defending', 'Skipping pro rata on the highest-conviction deal in the portfolio is exactly the wrong direction — the markup is the signal that more conviction is warranted, not less.'],
      ['Pull reserves from other portfolio companies to fund the full pro rata', 'Cross-funding from other companies\' reserves is how funds end up under-reserved on the next breakout. Reserves are committed at the deal level for a reason.'],
    ],
    'Follow-on math is where fund construction discipline meets deal-level conviction. Partial pro rata using the reserves committed to that company — without raiding other reserves and without breaking the model — is usually the right answer. The fund\'s job is the portfolio, not a single deal.'),

  q(4350641, 'Career Skills', CHAPTER, 'Bridge triage when growth slips',
    'FieldChart\'s growth has slipped from 180% to 95% YoY over two quarters. The company has 9 months of runway and is asking the lead for a $10M bridge to extend to a clean Series B in 12 months. What is the right framework for the decision?',
    'Distinguish whether the slip is execution (sales team turnover, rewrite distraction) or thesis (mid-market saturation, competitive entry); bridge if execution with named milestones, do not bridge if thesis — and be honest with yourself about which it is',
    [
      ['Bridge because the company has hit milestones before and deserves another shot', 'Past performance is not a triage framework. The right question is whether the slip points at a fixable execution issue or a broken thesis — those have different answers.'],
      ['Do not bridge because growth deceleration this severe usually does not recover', 'Reflexive no on growth deceleration ignores the diagnostic question. Plenty of companies recover from execution slips — the question is whether *this* slip is execution or thesis.'],
      ['Bridge only if the founders accept a flat-or-down valuation', 'Valuation discipline matters but is not the load-bearing question. The bridge decision is about whether the company should exist at all in the portfolio — valuation is a second-order conversation.'],
    ],
    'Bridge triage is execution-vs-thesis. The same surface fact — growth slipping — can mean a recoverable execution problem or a broken thesis. The honest framework is to identify which, and then size the bridge against named milestones if the answer is execution.'),

  q(4350642, 'Career Skills', CHAPTER, 'Executive hiring sequence',
    'FieldChart needs to hire over the next 18 months. Which sequence of executive hires is most likely to support the thesis and the rewrite milestone?',
    'VP Engineering first (to anchor the rewrite), then VP Sales (to scale the mid-market motion), then VP Customer Success (to defend the NRR thesis); CFO is a year out, before the Series B',
    [
      ['CFO first to clean up financial reporting before the next raise', 'CFO-first is a public-company instinct that does not match Series A operating reality. The rewrite and the sales motion are load-bearing for the next 12 months; the CFO is a Series B hire.'],
      ['VP Sales first to accelerate the top-line growth that is driving the round', 'VP Sales without a stabilized engineering capacity means accelerating growth into a system that may break. The rewrite has to land before sales scales aggressively.'],
      ['Hire all four roles simultaneously to move quickly', 'Simultaneous executive hires overwhelm the CEO\'s ability to onboard them and produce a high-turnover board year. Sequential hires with 6-month spacing is the working pattern at Series A.'],
    ],
    'Executive hiring sequence at Series A should follow the load-bearing risks the IC memo identified. For FieldChart, that means engineering before sales before customer success — CFO is a Series-B-window hire. The wrong order produces a board year of broken handoffs.'),

  q(4350643, 'Career Skills', CHAPTER, 'Exit valuation framing across scenarios',
    'You are updating the LP letter on FieldChart with a forward exit view. What is the most useful way to frame potential exit outcomes?',
    'Three scenarios — base, upside, downside — each tied to specific assumptions (mid-decile NRR, ACV ramp, segment penetration), with the multiple of investment shown for each; LPs trust scenario framing more than a single point estimate',
    [
      ['A single most-likely exit valuation with a 10-year hold assumption', 'Single point estimates on a 10-year hold are the lowest-information forecast available. LPs immediately translate them into ranges anyway — better to show the range openly.'],
      ['Compare FieldChart to the highest-comparable exit in the category and use that as the upside', 'Top-comp framing alone overstates the expected outcome. LPs want to see what the *base* case actually pays and how it depends on the load-bearing assumptions.'],
      ['Avoid forward exit framing entirely until the company is closer to liquidity', 'Refusing to frame the forward outcome leaves LPs with an unanchored portfolio update. Scenario framing is exactly the discipline that lets LPs hold the GP accountable across the fund life.'],
    ],
    'Scenario-based exit framing — base, upside, downside, each tied to specific assumptions — is the LP-friendly way to communicate forward outcomes. It also forces the GP to commit to which assumptions are load-bearing, which is the right discipline to carry into the next board meeting.'),

  q(4350644, 'Career Skills', CHAPTER, 'Down-round and pay-to-play',
    'FieldChart\'s growth has stayed slipped and the Series B comes in at a flat-to-down valuation. The new lead is asking for pay-to-play. What is the lead investor (your fund) likely to want?',
    'Participate to maintain ownership and protect the position — pay-to-play is doing its job, separating committed investors from hangers-on; the question is whether the fund still has the conviction to write the check, not whether the term is acceptable',
    [
      ['Refuse pay-to-play and accept the conversion penalty since the deal economics have changed', 'Refusing pay-to-play on a portfolio company with a still-viable thesis surrenders ownership cheaply. The right question is conviction, not the principle of the term.'],
      ['Negotiate hard to remove pay-to-play from the new round structure', 'Pushing to remove pay-to-play from a down round signals to other investors that the fund is wobbly on the company. The term exists for a reason and the right move is usually to participate.'],
      ['Participate at a reduced amount to split the difference', 'Half-participation in a pay-to-play is often the worst outcome — it costs capital without preserving the ownership the conversion would have produced. The choice is participate fully or accept the conversion.'],
    ],
    'Pay-to-play is one of those terms where the right answer is usually to participate if the conviction is still there. The discipline is to make the conviction question the load-bearing one — and not let the optics of "doing pay-to-play" override the underlying portfolio judgment.'),

  q(4350645, 'Career Skills', CHAPTER, 'Founder transition signals',
    'Over the last six months FieldChart\'s CEO has visibly struggled with the transition from $4M ARR operator to $15M ARR executive — board prep is late, executive hires have churned, and customer escalations are stacking. How should the fund raise this?',
    'Raise it directly and early with the CEO in a private 1:1, framed as a question rather than a verdict — discuss whether a strong COO would help him scale into the role, with founder-CEO transition as a later option only if the COO does not land',
    [
      ['Raise it at the board meeting in front of the other directors to ensure transparency', 'Raising a founder-transition concern in a full board meeting is humiliating to the founder and almost guarantees a defensive response. Private first, then board only if private does not resolve.'],
      ['Avoid raising it directly and instead work through the independent board member', 'Triangulating through the independent board member is exactly the move that destroys trust. The CEO will hear about it and the relationship will be damaged for the next conversation.'],
      ['Move directly to founder-CEO transition discussion with the partnership', 'Moving straight to transition skips the COO step that often resolves the situation. Founder-CEO transitions should be the last move, not the first.'],
    ],
    'Founder transitions are about the relationship as much as the business. Raising the question privately, framing it as a problem to solve together (COO first, transition later), and respecting the founder\'s dignity is the move that preserves the option to escalate later if needed.'),

  q(4350646, 'Career Skills', CHAPTER, 'Reserve discipline late in fund life',
    'The fund is now in year 5 of a 10-year vehicle. FieldChart is one of the top 3 positions but has now had two flat-to-down quarters. Other portfolio companies are also asking for follow-on capital. How should the partnership think about reserves on FieldChart specifically?',
    'Re-rank reserves across the portfolio at this checkpoint — FieldChart competes against the other companies\' marginal dollar; if conviction in FieldChart\'s thesis has held, the reserves stay, but if the thesis is bending, those reserves rotate to better-performing companies',
    [
      ['Hold the reserves on FieldChart since they were committed at investment and are restricted to that company', 'Reserves are not legally restricted at the company level in most funds — the GP can re-rank. Treating them as locked is a way of avoiding the harder question of which companies actually deserve the marginal dollar now.'],
      ['Cut reserves on FieldChart immediately since the recent quarters are negative signal', 'Reflexive cutting on a top position over two soft quarters is itself a discipline failure. The right move is to re-evaluate the thesis, not to react to two data points.'],
      ['Increase reserves on FieldChart to defend the position through the downturn', 'Doubling down on a softening position without re-testing the thesis is exactly the behavior reserves discipline is meant to prevent. The marginal dollar has to be earned at each checkpoint, not rewarded for past conviction.'],
    ],
    'Late-fund-life reserve discipline is the hardest part of portfolio management. The partnership has to be willing to re-rank — to rotate reserves toward the companies that have earned them and away from those whose thesis is bending. The job is the vintage, not any single deal.'),
]
