import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// PE CHAPTER 4 — Value Creation and Operating Plan
// ----------------------------------------------------------------------------
// 42 new questions (IDs 4390300–4390341) extending the existing 8-question
// PE Ch4 bank in careerAgentGeneratedRoadmapFinance.ts (IDs 4103036, 4103037,
// 4105100, 4105101, 4107368, 4107374, 4107378, 4107838).
//
// Scope: how a US-context middle-market PE sponsor actually creates value in
// a portfolio company. EBITDA bridge math, the 100-day plan, operating-partner
// model (Vista Consulting Group, KKR Capstone, Bain Capital Portfolio Group),
// sector playbooks, pricing/procurement/SG&A levers, talent overhaul, add-on
// M&A and synergy quantification, tech-enabled transformation, working capital
// and capex discipline, KPI/MBR cadence, communication cascade, cultural
// integration, and the warning signs that EBITDA quality is eroding.
//
// Voice and structure mirror vcCapstoneQuestions.ts — bespoke whyWrong on
// every distractor, no strawman options, evidence-anchored. The lesson on
// each question ties the choice back to the operating-plan craft.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe PE Ch4 canonical bank'

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

const CHAPTER = 'Value Creation and Operating Plan'

// Difficulty distribution: 12 at level 3, 21 at level 4, 9 at level 5.
export const PE_CH4_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  4390300: 3, // Value creation bridge decomposition
  4390301: 4, // Multiple expansion vs operational EBITDA growth
  4390302: 3, // Debt paydown as a return driver
  4390303: 4, // Reading the IRR bridge backwards
  4390304: 5, // When the bridge is mostly multiple expansion
  4390305: 3, // 100-day plan: what to sequence first
  4390306: 5, // 100-day cash visibility build
  4390307: 4, // 100-day ownership map and accountability
  4390308: 3, // Operating partner model — what they actually do
  4390309: 4, // Vista Consulting Group playbook
  4390310: 4, // KKR Capstone vs external consultants
  4390311: 5, // When the operating partner relationship breaks
  4390312: 4, // Sector playbook: distribution roll-ups
  4390313: 4, // Sector playbook: software pricing reset
  4390314: 3, // Sector playbook: healthcare services
  4390315: 4, // EBITDA lever decomposition: price/volume/cost/mix
  4390316: 3, // Pricing as the highest-leverage lever
  4390317: 4, // 1% pricing flow-through math
  4390318: 5, // Pricing system overhaul vs one-time price hike
  4390319: 4, // Procurement: indirect spend savings range
  4390320: 4, // Procurement: tail-spend consolidation
  4390321: 3, // SG&A optimization first principles
  4390322: 4, // Zero-based budgeting at a portfolio company
  4390323: 4, // Shared services design tradeoffs
  4390324: 3, // CFO swap and why it happens early
  4390325: 5, // Talent overhaul sequencing
  4390326: 4, // Add-on M&A: platform vs bolt-on logic
  4390327: 4, // Add-on synergy quantification: cost
  4390328: 5, // Add-on synergy quantification: revenue
  4390329: 4, // Tech-enabled transformation scope
  4390330: 4, // ERP replacement during hold period
  4390331: 3, // Working capital: cash conversion cycle
  4390332: 3, // DSO improvement levers
  4390333: 4, // Capex discipline: maintenance vs growth
  4390334: 5, // Capex cuts that hurt the exit
  4390335: 3, // Operational benchmarking sources
  4390336: 4, // Communication cascade in the first 100 days
  4390337: 4, // MBR and QBR cadence design
  4390338: 5, // KPI scorecard that ladders to the thesis
  4390339: 4, // Cultural integration in add-ons
  4390340: 5, // EBITDA quality erosion warnings
  4390341: 3, // Add-back discipline at exit prep
}

export const peCh4Questions: Question[] = [
  // -------------------------------------------------------------------------
  // VALUE CREATION DECOMPOSITION (4390300–4390304)
  // -------------------------------------------------------------------------
  q(4390300, 'Career Skills', CHAPTER, 'Value creation bridge decomposition',
    'A sponsor underwrites a 3.0x MOIC over five years. The bridge attributes 40% of value to EBITDA growth, 35% to multiple expansion, and 25% to debt paydown. Which observation is the partnership most likely to push on?',
    'Multiple expansion at 35% is a material assumption that the firm does not control — the bridge should be re-run with no multiple expansion to see whether the deal still clears the hurdle',
    [
      ['The 25% from debt paydown is too high and signals over-leverage', 'Debt paydown contribution scales with leverage and free cash flow; 25% is normal for a moderately levered middle-market deal and is not by itself a red flag.'],
      ['EBITDA growth at 40% is too low for a value-creation deal and should be at least 70%', 'A 40% EBITDA-growth contribution is squarely in the normal range for a middle-market LBO. There is no canonical floor of 70% — the question is whether the growth is underwritten with specific operating actions.'],
      ['The three buckets should each be exactly one-third for the deal to be balanced', 'There is no rule that the buckets balance to thirds. The bridge reflects the thesis — a roll-up may be EBITDA-heavy, a growth deal may lean on multiple expansion, and a recap may lean on debt paydown.'],
    ],
    'A value-creation bridge is most useful as a stress test. The single most important question is what happens to returns if multiple expansion does not materialize, because that is the bucket the GP does not actually control.'),

  q(4390301, 'Career Skills', CHAPTER, 'Multiple expansion vs operational growth',
    'In an IC review, an associate frames the deal as "operational value creation" but the bridge shows the entry multiple at 9.0x EBITDA and the exit underwriting at 11.0x. What is the right IC framing?',
    'The deal is partly an operational story and partly a multiple-expansion bet — the memo should separate the two and identify what specifically would justify 11.0x at exit (scale, growth rate, mix shift, comparable transactions)',
    [
      ['Multiple expansion is operational because better operations command higher multiples', 'Better operations can lift multiples, but conflating the two hides the fact that the multiple is set by the next buyer, not by the GP. The IC needs to see both pieces explicitly.'],
      ['Two turns of expansion is small and does not need to be justified separately', 'Two turns on entry equity often translates to 30–50% of the IRR depending on leverage. That is not a rounding error and deserves its own justification.'],
      ['Multiple expansion should be removed from the model entirely to make the case conservative', 'Removing the exit multiple makes the model unusable — every LBO needs an exit assumption. The discipline is to name and defend the assumption, not delete it.'],
    ],
    'Operational and multiple-expansion stories should be presented separately so the IC can stress each one. Mixing them obscures whether the GP is being paid for operating work or for a market call.'),

  q(4390302, 'Career Skills', CHAPTER, 'Debt paydown as a return driver',
    'A portfolio company generates $40M in free cash flow per year and uses $30M of it for mandatory debt amortization and excess-cash-flow sweeps. Over a five-year hold this paydown contributes meaningfully to MOIC. What is the cleanest description of this contribution?',
    'Debt paydown converts enterprise value held by lenders into equity value for the sponsor, even when EBITDA is flat — it is a real return driver but depends on free cash flow holding up through the hold',
    [
      ['Debt paydown is not a real return driver because the EBITDA did not grow', 'Debt paydown is a real driver because equity = EV minus net debt. Reducing net debt at constant EV directly increases equity value.'],
      ['Debt paydown only matters if interest rates fall during the hold', 'Rates affect the cost of carrying debt and the refi option, but the paydown contribution itself comes from converting debt to equity, not from rate moves.'],
      ['Debt paydown is double-counted with EBITDA growth and should be excluded from the bridge', 'Paydown and EBITDA growth are independent — one shrinks the debt stack, the other grows the EV. Standard bridges show them as separate buckets and they do not double-count.'],
    ],
    'The classic LBO return bridge has three buckets — EBITDA growth, multiple expansion, debt paydown — because each is mathematically distinct. Debt paydown is real, but it requires that free cash flow actually shows up.'),

  q(4390303, 'Career Skills', CHAPTER, 'Reading the IRR bridge backwards',
    'A GP closes the fund and shows 2.8x MOIC over 5 years on a recent exit. They claim it was an operational deal, but back-of-envelope math suggests EBITDA grew only ~25% in the hold. What does this imply about the bridge?',
    'EBITDA growth of 25% cannot account for 2.8x MOIC on its own — most of the return came from leverage, multiple expansion, or both, and the "operational deal" framing should be tested against the actual bridge',
    [
      ['25% EBITDA growth easily produces 2.8x MOIC with no leverage', 'Without leverage, equity tracks EV roughly one-for-one, so 25% EBITDA growth at constant multiple gives ~1.25x MOIC, not 2.8x. Leverage and multiple changes have to make up the gap.'],
      ['The MOIC and the EBITDA growth are unrelated numbers and cannot be compared', 'They are tightly related through the LBO equation. Anyone reading a fund report can sanity-check headline MOIC against headline EBITDA growth.'],
      ['The GP must have used a dividend recap to generate the rest of the return', 'A dividend recap is one possible source of return, but it is not the only one — multiple expansion or higher leverage at entry could also explain the gap.'],
    ],
    'LPs and IC members should sanity-check headline returns against the underlying EBITDA and leverage. A "this was operational" claim that does not survive a five-minute bridge check is worth pushing on.'),

  q(4390304, 'Career Skills', CHAPTER, 'When the bridge is mostly multiple expansion',
    'An LP is reviewing a GP\'s fund III. Across realized deals, 65% of total value creation is attributable to multiple expansion. The GP markets itself as an operating-focused firm. What is the right LP response?',
    'Ask the GP to walk through deal-by-deal what changed in the asset that justified the higher exit multiple — multiple expansion can be earned (scale, growth, durability, mix) or accidental (cycle), and the LP needs to know which',
    [
      ['Reject the fund — operational firms should not have multiple expansion in the bridge', 'Operational firms can legitimately earn multiple expansion when they grow the business into a different comparable set. The LP should not refuse to engage with the question.'],
      ['Accept the marketing claim — exit multiples reflect operational quality so the two are the same', 'Exit multiples reflect the next buyer\'s appetite, which is a function of both the asset and the market. Treating them as identical hides the cycle risk.'],
      ['Ignore the bridge and focus only on net IRR and DPI', 'Net IRR and DPI tell you what happened. The bridge tells you what is likely to repeat in fund IV. LPs underwriting the next fund need both.'],
    ],
    'Multiple expansion in the bridge is not automatically bad, but a GP that cannot explain deal-by-deal what they did to earn the higher multiple is at risk of being a beta vehicle dressed as an alpha vehicle.'),

  // -------------------------------------------------------------------------
  // 100-DAY PLAN (4390305–4390307)
  // -------------------------------------------------------------------------
  q(4390305, 'Career Skills', CHAPTER, '100-day plan: sequencing the first moves',
    'A sponsor closes on Friday. By Monday the operating team is on-site. With infinite priorities competing, what should the first two weeks actually accomplish?',
    'Lock down 13-week cash forecast, confirm bank/lender reporting, identify the top 5 value-creation initiatives with named owners, and meet the top 20 customers and top 10 employees',
    [
      ['Redesign the brand identity and refresh the website to signal a new era', 'Brand refresh is rarely a week-one priority. It consumes management attention that should be on cash visibility and customer retention right after a change of control.'],
      ['Begin a year-long ERP replacement to fix the data foundation', 'ERP replacement is a multi-year project. Starting it in week one without first establishing cash visibility and KPI reporting puts the operating plan on a system that has not landed yet.'],
      ['Defer all changes for 6 months to let management lead naturally', 'A 6-month observation period wastes the highest-leverage window for change. Customers, employees, and lenders all expect movement after close — silence reads as drift.'],
    ],
    'The 100-day plan exists because the first 100 days have asymmetric leverage. Cash visibility, lender comfort, top-customer retention, and named initiative owners are the foundation that every later move depends on.'),

  q(4390306, 'Career Skills', CHAPTER, '100-day cash visibility build',
    'The newly acquired company books cash on a monthly close 15 days after month-end. The sponsor needs to manage covenants and lender reporting on a tighter cycle. What is the right first move?',
    'Stand up a rolling 13-week cash forecast updated weekly with actuals vs forecast variance — owned by the controller, reviewed by the CFO and operating partner every Friday',
    [
      ['Replace the ERP system within 60 days so monthly close is faster', 'ERP replacement does not finish in 60 days and is the wrong solve for a weekly cash visibility need. The 13-week is a parallel tool, not a system replacement.'],
      ['Continue the existing 15-day monthly close and trust the bank covenant tests', 'A 15-day monthly close means the sponsor learns about covenant pressure two weeks after it happens. That is too slow for an LBO with maintenance covenants.'],
      ['Move to daily close so everything is real-time', 'Daily close is operationally expensive and produces noise rather than signal. A rolling 13-week weekly forecast is the standard tool for LBO cash management.'],
    ],
    'A 13-week cash forecast is the standard sponsor tool because it matches the rhythm of covenant tests, working-capital cycles, and weekly operating reviews. It is faster than monthly close and not as noisy as daily.'),

  q(4390307, 'Career Skills', CHAPTER, '100-day ownership map',
    'The operating partner inherits a list of 30 value-creation initiatives from diligence. Each one is sponsored by a different functional leader. What is the right governance move?',
    'Cut the list to 5–8 must-win initiatives, assign one named accountable owner per initiative (not a committee), and set a monthly review with red/yellow/green status against milestones',
    [
      ['Keep all 30 initiatives and assign each to a working group of 4–6 people', 'Diffuse ownership across working groups produces meetings, not outcomes. Initiatives without a single named owner default to nobody.'],
      ['Let each functional leader pick their own initiatives and report progress quarterly', 'Bottom-up initiative selection rarely ladders to the investment thesis. The sponsor needs to choose the initiatives that matter most for the bridge.'],
      ['Sequence all 30 initiatives over 5 years and start them all in year one', '30 initiatives in year one overwhelms the organization. Focused execution on 5–8 produces results; spreading the team across 30 produces motion without movement.'],
    ],
    'PE operating-plan governance lives or dies on focus and named ownership. A committee owns nothing. A short list with one owner per item is what actually moves EBITDA.'),

  // -------------------------------------------------------------------------
  // OPERATING PARTNER MODEL (4390308–4390311)
  // -------------------------------------------------------------------------
  q(4390308, 'Career Skills', CHAPTER, 'Operating partner model — what they actually do',
    'A first-year associate asks what an operating partner at the firm actually does day-to-day. What is the most accurate description?',
    'Operating partners serve as functional experts and chair-side advisors to portfolio CEOs — they help write the operating plan, recruit C-suite, broker external help, and sit on or chair portfolio boards as the sponsor\'s operating voice',
    [
      ['They run the portfolio companies directly as interim CEOs', 'Some firms use interim CEOs in crisis situations, but the standard operating partner does not run the company. The portfolio CEO runs it; the OP coaches and governs.'],
      ['They only show up for the 100-day plan and then disappear', '100-day plans are the most visible work, but operating partners stay engaged across the hold — KPI reviews, M&A integration, leadership changes, exit prep.'],
      ['They are the same as deal partners and rotate through both roles', 'Deal partners source, structure, and price; operating partners drive in-company execution. The skill sets overlap but the roles are distinct at most large firms.'],
    ],
    'The operating partner is the sponsor\'s in-house operating voice. They are not the CEO and they are not deal team — they are the third leg of the stool that connects the investment thesis to actual operating execution.'),

  q(4390309, 'Career Skills', CHAPTER, 'Vista Consulting Group playbook',
    'Vista Equity Partners is well-known for its Vista Consulting Group and the Vista Standard Operating Procedures applied to acquired software companies. What is the core design choice of this model?',
    'Apply a repeatable playbook across many similar software targets — standardized pricing, sales motion, hiring rubrics, and KPIs — so that operating improvements compound across the portfolio rather than being rebuilt each deal',
    [
      ['Buy any company at any price because the playbook fixes everything', 'No playbook fixes a bad entry price. Vista underwrites software targets specifically because the playbook is calibrated to that operating model — not as a universal solvent.'],
      ['Outsource all portfolio operations to a single external consulting firm', 'Vista Consulting Group is an in-house operating team, not an outsourced consulting engagement. That is exactly the design choice — keep the playbook proprietary and repeatable.'],
      ['Hold companies for 15+ years until the playbook fully embeds', 'Vista holds in normal PE hold-period ranges. The playbook is designed to land in standard hold periods, not to require multi-decade ownership.'],
    ],
    'The Vista model — and KKR Capstone, Bain Capital Portfolio Group, Advent Operating Partners — is a bet that a repeatable, sector-tuned playbook beats deal-by-deal customization. The leverage is in the repetition across a portfolio.'),

  q(4390310, 'Career Skills', CHAPTER, 'KKR Capstone vs external consultants',
    'A mid-market sponsor without an in-house operating team is deciding whether to build one (like KKR Capstone or Bain Capital Portfolio Group) or rely on external consultants per deal. Which factor most favors the in-house option?',
    'Portfolio scale and pattern repetition — once a firm has a consistent set of deal types, an in-house team produces compounding playbooks, shared benchmarks, and faster onboarding that external consultants restart each engagement',
    [
      ['Cost — in-house operating teams are always cheaper than consultants per deal', 'In-house teams carry fixed cost (salaries, benefits, real estate) whether or not deals close. They are cheaper at scale, but not "always" cheaper per deal at low volume.'],
      ['Confidentiality — external consultants leak information to competitors', 'Top-tier consulting firms have strong confidentiality regimes. The choice is not about leakage risk but about pattern compounding.'],
      ['Speed — external consultants always take longer to mobilize than internal teams', 'Top firms mobilize in days. Internal teams are sometimes slower because they are oversubscribed. Speed is not the decisive factor.'],
    ],
    'In-house operating teams are a fixed-cost bet on pattern repetition across a portfolio. They make sense for firms with consistent deal types and enough fund size to amortize the cost; for smaller or more eclectic portfolios, external help per deal is often the right call.'),

  q(4390311, 'Career Skills', CHAPTER, 'When the OP–CEO relationship breaks',
    'The operating partner and portfolio CEO have a deteriorating relationship — the CEO sees the OP as a backseat driver, the OP sees the CEO as resistant to the plan. The investment thesis is otherwise on track. What should the deal partner do?',
    'Meet with the CEO and OP separately first, then together — clarify decision rights (who owns the plan, who owns execution), and if the friction persists, accept that either the OP rotates off the deal or the CEO is replaced; the relationship cannot stay broken',
    [
      ['Replace the CEO immediately because the OP represents the sponsor\'s view', 'Replacing the CEO over an OP relationship problem skips the diagnosis. The CEO may be right that the OP is overstepping — the deal partner has to actually figure out which.'],
      ['Tell the OP to back off because the CEO runs the company day-to-day', 'Telling the OP to disengage abandons the sponsor\'s operating voice on the deal. That is a governance failure, not a fix.'],
      ['Let the friction continue because it produces creative tension', 'Sustained CEO–OP friction does not produce creative tension; it produces decision paralysis at the portfolio company. It needs resolution, not endurance.'],
    ],
    'OP–CEO friction is one of the most under-discussed failure modes in PE operating models. The deal partner owns resolving it because both parties report into the sponsor\'s governance — and "let it continue" is the worst option.'),

  // -------------------------------------------------------------------------
  // SECTOR PLAYBOOKS (4390312–4390314)
  // -------------------------------------------------------------------------
  q(4390312, 'Career Skills', CHAPTER, 'Sector playbook: distribution roll-ups',
    'A sponsor specializing in HVAC and plumbing distribution roll-ups acquires its tenth platform. What is the most repeatable element of the playbook across these deals?',
    'Centralize back-office (finance, IT, HR), consolidate purchasing across acquired distributors to lift gross margin, and rebrand under a single banner over 18–24 months to capture market presence and exit comparability',
    [
      ['Keep every acquired distributor fully independent with separate ERPs and brands', 'Independent operation forgoes the entire roll-up thesis — procurement leverage, shared services, and exit comparability all require some level of integration.'],
      ['Replace every owner-operator with corporate management immediately at close', 'Owner-operators often hold the local customer relationships in distribution. Replacing them at close destroys the very asset the sponsor paid for.'],
      ['Focus the playbook on revenue growth only and ignore cost synergies', 'Distribution roll-ups are mostly a cost-synergy and procurement story. Ignoring that side leaves the largest, most reliable lever on the table.'],
    ],
    'Distribution roll-up playbooks repeat because the underlying math repeats: shared back-office, consolidated procurement, and a single brand at exit. The variations are in pace and in how much local autonomy to preserve for customer relationships.'),

  q(4390313, 'Career Skills', CHAPTER, 'Sector playbook: software pricing reset',
    'A sponsor acquires a vertical SaaS company that has not raised prices in five years despite strong net revenue retention and clear customer ROI. Which playbook move is highest-priority?',
    'Run a structured pricing study — segment customers by usage and value received, test list-price increases with grandfathering on existing customers, and rebuild the price book by tier with packaging that supports up-sell',
    [
      ['Raise list prices 50% across all customers tomorrow with no segmentation', 'Blanket 50% increases create concentrated churn. Pricing playbooks segment, grandfather, and stage — they do not announce flat increases.'],
      ['Keep prices flat to preserve goodwill and rely on volume growth', 'Flat prices on a product with proven ROI is leaving real EBITDA on the table. The playbook exists because vertical SaaS is consistently under-priced at the time of acquisition.'],
      ['Cut prices to drive logo growth and worry about monetization later', 'Cutting prices on a software product with strong NRR signals that the sponsor does not understand the asset. The playbook moves the other direction.'],
    ],
    'Vertical SaaS playbooks repeat because acquired software companies are typically under-priced relative to value delivered. The discipline is in segmentation and staging — not in the headline price change.'),

  q(4390314, 'Career Skills', CHAPTER, 'Sector playbook: healthcare services',
    'A sponsor specializing in physician practice management (PPM) acquires a multi-state dermatology platform. What is the standard playbook on physician compensation post-close?',
    'Preserve clinical autonomy, keep base compensation close to pre-close levels, and shift incentives toward partnership-style profit share or equity-rollover so physicians stay engaged through the hold',
    [
      ['Cut physician comp 30% at close to expand EBITDA quickly', 'Cutting physician comp at close is the fastest way to lose the physicians and therefore the practice. The PPM model only works if the doctors stay.'],
      ['Eliminate physician input on clinical protocols and centralize all decisions', 'Centralized clinical decisions in physician services platforms drive physician attrition and regulatory scrutiny (corporate practice of medicine). It is the opposite of the right move.'],
      ['Tie 80% of physician comp to volume metrics with no quality measures', 'Pure-volume comp creates both clinical risk and regulatory exposure. Modern PPM playbooks use balanced scorecards with quality and patient experience.'],
    ],
    'Healthcare services playbooks are built around the fact that the asset is the clinician relationship. Cutting comp or eliminating autonomy at close destroys the asset. The playbook works through equity rollover and structural alignment.'),

  // -------------------------------------------------------------------------
  // EBITDA LEVERS (4390315–4390318)
  // -------------------------------------------------------------------------
  q(4390315, 'Career Skills', CHAPTER, 'EBITDA lever decomposition',
    'An operating partner is building the EBITDA bridge from year 0 to year 5. The classical decomposition splits the growth into four levers. What are they?',
    'Price, volume, cost (COGS and SG&A), and mix — each lever is independent, each can be measured separately, and most operating plans should explicitly forecast each one',
    [
      ['Revenue, expense, capex, and working capital', 'Capex and working capital are cash items, not EBITDA items. The EBITDA bridge separates revenue into price/volume/mix and expenses into cost reductions.'],
      ['Organic growth, acquisitions, FX, and divestitures', 'These are roll-forward components for a multi-entity company, not the standard EBITDA-lever decomposition the operating plan uses inside one company.'],
      ['Top-line, bottom-line, margin, and headcount', '"Top-line" and "bottom-line" are not levers; they are outcomes. The lever framework breaks them into the actual controllable inputs.'],
    ],
    'The price/volume/cost/mix decomposition is the standard operating-plan framework because each lever has different owners, different evidence, and different risk profiles. Operating partners insist on this view to avoid generic "revenue grows 8%" forecasts.'),

  q(4390316, 'Career Skills', CHAPTER, 'Pricing as the highest-leverage lever',
    'Among price, volume, cost, and mix, pricing is often described as the highest-leverage EBITDA lever. Why?',
    'A pricing increase flows almost entirely to EBITDA because incremental cost is near zero — every dollar of price typically converts to a dollar of margin, while volume requires variable cost and cost-cutting hits diminishing returns',
    [
      ['Pricing is easier to execute than the other three levers', 'Pricing is often harder to execute than volume or cost — it requires evidence, segmentation, and willingness-to-pay analysis. Its leverage comes from flow-through, not from ease.'],
      ['Pricing is the only lever that improves customer satisfaction', 'Pricing alone rarely improves customer satisfaction; in fact, it can damage it without careful execution. The argument for pricing is mathematical, not relational.'],
      ['Pricing requires no investment of any kind to execute', 'Pricing programs need pricing analytics, sales enablement, and discount governance — they are not free. They are high-leverage, not zero-cost.'],
    ],
    'Pricing\'s power comes from the fact that incremental price has almost no variable cost. Volume and cost cuts run into capacity and diminishing returns; pricing flow-through is the rare lever that scales linearly.'),

  q(4390317, 'Career Skills', CHAPTER, '1% pricing flow-through math',
    'A portfolio company has $500M revenue, 10% EBITDA margin ($50M EBITDA), and the operating partner argues that a 1% pricing increase would lift EBITDA by roughly 10%. Walk through whether the math checks.',
    '1% pricing on $500M revenue is $5M of incremental revenue at near-zero variable cost, which is $5M added to EBITDA — and $5M on a $50M base is 10%; the math holds for low-margin businesses',
    [
      ['1% pricing is too small to matter and would not move EBITDA at all', 'The arithmetic shows 1% of $500M flowing to EBITDA produces a 10% lift on a 10%-margin business. It matters precisely because of the EBITDA-margin denominator.'],
      ['1% pricing only matters if the volume also grows by 1%', 'The pricing flow-through math is independent of volume. The 10% lift happens at constant volume; volume effects are separate.'],
      ['The 10% lift only works if EBITDA margin is above 50%', 'The effect is actually largest in low-margin businesses, where the EBITDA denominator is small. High-margin businesses see a smaller percentage lift from the same pricing move.'],
    ],
    'The "1% pricing equals ~10% EBITDA" heuristic is a low-margin-business observation. It is why operating partners chase pricing first in distribution, manufacturing, and services — the arithmetic favors them more than it does software.'),

  q(4390318, 'Career Skills', CHAPTER, 'Pricing system overhaul vs one-time hike',
    'A sponsor can either (a) raise list prices 5% once or (b) rebuild the pricing function — analytics, segmentation, discount governance, willingness-to-pay studies — over 18 months. The bridge needs $20M of EBITDA from pricing. Which approach is more durable?',
    'Rebuild the pricing function — one-time hikes erode within a year as discounts creep back in, while a pricing system creates a permanent capability that compounds across years and survives leadership changes',
    [
      ['One-time hike is better because it is faster and the EBITDA shows up in year one', 'One-time hikes do show up faster, but they typically erode through discount creep within 12–18 months. The bridge needs durable EBITDA, not a one-quarter pop.'],
      ['Both produce identical EBITDA outcomes over a five-year hold', 'They do not — the rebuild compounds while the one-time hike erodes. The terminal EBITDA from the two paths can differ by a factor of two or more.'],
      ['Pricing systems take too long and should be deferred to the next owner', 'Deferring pricing system work to the next owner is leaving the largest controllable lever for someone else to capture. Sponsors that do this exit at lower multiples because the buyer sees the unrealized upside.'],
    ],
    'Pricing system overhaul is the difference between a quarter of EBITDA and a capability that compounds. Top operating partners insist on the system work even when the one-time hike is tempting because the bridge needs to hold to exit.'),

  // -------------------------------------------------------------------------
  // PROCUREMENT (4390319–4390320)
  // -------------------------------------------------------------------------
  q(4390319, 'Career Skills', CHAPTER, 'Procurement: indirect spend savings range',
    'An operating partner reviews a portfolio company\'s $200M of indirect spend (IT, telecom, professional services, MRO, freight). What is a realistic savings range from a structured procurement program?',
    '3–8% on indirect spend over 12–18 months is the standard range — $6M to $16M in this case — with most of it from supplier consolidation, RFP, and demand management rather than headline rate cuts',
    [
      ['25–40% savings is the standard outcome from indirect procurement programs', '25–40% is far outside the empirical range for indirect spend programs. Numbers like that come from category-specific one-time events, not a portfolio-wide program.'],
      ['Less than 1% savings is realistic because suppliers are already at market rates', 'Indirect spend at portfolio companies pre-PE is typically under-managed. 3–8% is achievable specifically because the starting point is below best practice.'],
      ['Savings only come from headcount reduction in the procurement function', 'Headcount in procurement is tiny relative to the spend being managed. Savings come from supplier renegotiation and demand management, not from cutting procurement staff.'],
    ],
    'Indirect procurement is a reliable 3–8% lever because most portfolio companies underinvested in the function pre-close. The range comes from years of consulting-firm benchmarking and is one of the most repeatable EBITDA wins in PE.'),

  q(4390320, 'Career Skills', CHAPTER, 'Procurement: tail-spend consolidation',
    'A portfolio company has 4,000 active suppliers across $200M of indirect spend, but the top 200 suppliers account for 80% of spend. The remaining 3,800 suppliers — the "tail" — account for the other 20%. What is the right play?',
    'Consolidate the tail aggressively — push to preferred suppliers, eliminate one-off vendors, and use P-cards or marketplace tools — because tail spend carries hidden costs (compliance, AP processing, off-contract pricing) far beyond the supplier count',
    [
      ['Leave the tail alone because 20% of spend is not worth the effort', 'Tail spend carries hidden processing and compliance costs that often double the headline number. The effort-to-savings ratio is actually attractive once those are included.'],
      ['Concentrate savings work only on the top 200 suppliers and ignore the tail', 'The top 200 are typically already negotiated. The marginal savings opportunity is often in the tail, where governance and off-contract usage are weakest.'],
      ['Add more tail suppliers to create more competition', 'Adding tail suppliers increases AP, compliance, and off-contract spending. It is the wrong direction — the goal is consolidation, not fragmentation.'],
    ],
    'Tail-spend consolidation is one of the highest-yield procurement plays because the hidden processing costs are usually larger than the spend itself. The discipline is in P-card programs, preferred-supplier lists, and procurement-policy enforcement.'),

  // -------------------------------------------------------------------------
  // SG&A OPTIMIZATION (4390321–4390323)
  // -------------------------------------------------------------------------
  q(4390321, 'Career Skills', CHAPTER, 'SG&A optimization first principles',
    'A sponsor pushes the portfolio CEO to "cut SG&A 15%" without further specification. The CEO pushes back. What is the right operating-partner framing?',
    'Anchor on benchmarked SG&A-as-percent-of-revenue versus peers, then walk the gap to specific categories (G&A, sales overhead, IT, real estate) — generic 15% targets without category specificity produce blunt cuts that hurt growth',
    [
      ['Push for an immediate 15% headcount cut across all departments equally', 'Equal cuts treat productive and unproductive departments identically and typically remove growth-critical roles alongside excess overhead.'],
      ['Defer SG&A work entirely until year 3 of the hold', 'Deferring SG&A work removes a major source of EBITDA from the early bridge and signals to lenders that the operating plan lacks teeth.'],
      ['Outsource the entire SG&A function to a single BPO provider', 'Wholesale outsourcing is rarely the right answer and often creates new costs (transition, governance, quality). SG&A optimization is about category-by-category benchmarking, not a single switch.'],
    ],
    'SG&A optimization works when the target is benchmarked and category-specific. "Cut 15%" without category framing produces blunt cuts and management resentment; "G&A is 4.0% versus peers at 3.0%" produces a focused conversation.'),

  q(4390322, 'Career Skills', CHAPTER, 'Zero-based budgeting at a portfolio company',
    'An operating partner brings zero-based budgeting (ZBB) to a portfolio company that has historically rolled forward last year\'s budget plus 3%. The CFO is skeptical. What is the strongest case for ZBB here?',
    'ZBB forces every cost center to justify its spend from zero against business outcomes, surfacing legacy spend that has been carried forward for years without a current justification — typical first-pass savings are 10–25% of overhead categories',
    [
      ['ZBB cuts every budget line to zero and then rebuilds with smaller numbers', 'ZBB does not literally start every line at zero permanently — it requires justification from zero, which is a process difference, not a target.'],
      ['ZBB is mainly a public relations tool for sponsors to claim they are aggressive', 'ZBB has real operational discipline behind it (3G, Heinz, AB InBev). It is a working tool, not a marketing label.'],
      ['ZBB only works in consumer companies and cannot be applied to industrials or services', 'ZBB has been applied successfully across consumer, industrial, and services. The mechanism — justifying spend from zero — is sector-agnostic.'],
    ],
    'ZBB\'s value is forcing organizations to justify carry-forward spend that has never been re-tested. It is operationally demanding, but the typical 10–25% first-pass savings are why operating partners reach for it even when CFOs resist.'),

  q(4390323, 'Career Skills', CHAPTER, 'Shared services design tradeoffs',
    'A sponsor consolidates finance, HR, and IT across four portfolio companies into a shared-service center to capture scale. What is the most important design choice that determines whether this works?',
    'Service-level agreements (SLAs) and clear demarcation of what stays at the business unit versus what moves to shared services — without SLAs, business units lose responsiveness and shared services becomes a complaint magnet',
    [
      ['Locate the shared-service center in the cheapest possible labor market', 'Labor cost matters, but locating in the cheapest market without SLAs produces a service-quality failure that costs more than the savings. Location is a secondary decision.'],
      ['Outsource the entire shared-service center to a BPO provider immediately', 'Outsourcing layered on top of consolidation adds transition risk to transition risk. Most sponsors stabilize the shared-service center first and only outsource selected functions later, if at all.'],
      ['Eliminate all business-unit involvement in finance, HR, and IT', 'Some business-unit-specific decisions (commercial finance, talent for sales, IT for shop-floor systems) need to stay local. Total elimination of BU involvement is a recipe for revolt.'],
    ],
    'Shared-service centers fail more often on governance than on technology. SLAs, demarcation, and BU partnership models are what determine whether the consolidated function is a service or a bottleneck.'),

  // -------------------------------------------------------------------------
  // TALENT OVERHAUL (4390324–4390325)
  // -------------------------------------------------------------------------
  q(4390324, 'Career Skills', CHAPTER, 'CFO swap — and why it happens early',
    'Industry data consistently shows that PE sponsors replace the CFO at portfolio companies more often than any other C-suite role — roughly 30% of the time and usually in the first 12 months. Why?',
    'PE governance demands a CFO who can run lender reporting, weekly cash, KPI scorecards, and exit-quality financials — pre-PE CFOs at founder- or family-owned businesses often lack this specific operating cadence even when they are good accountants',
    [
      ['Pre-PE CFOs are usually incompetent at their core job', 'Most pre-PE CFOs are competent at their pre-PE job, which is different from the PE job. The mismatch is about job design, not competence.'],
      ['Sponsors replace the CFO to install a friend from a previous deal', 'Cronyism happens, but it does not explain a systematic 30% replacement rate across the industry. The pattern reflects a real job-design mismatch.'],
      ['Replacement is mostly about saving on CFO salary', 'PE-experienced CFOs cost more, not less, than the typical founder-era CFO. The replacement is about capability, not cost.'],
    ],
    'The CFO swap pattern is so consistent because the PE-era job description is different from the pre-PE one. Operating partners often plan for it explicitly during diligence and budget for the recruiting cost in the 100-day plan.'),

  q(4390325, 'Career Skills', CHAPTER, 'Talent overhaul sequencing',
    'An operating partner concludes that of the top 12 leaders at a portfolio company, 4 will not make it through the hold. What is the right sequence and pace of change?',
    'Move first on roles where the gap is most visible and the bench is shallowest (typically CFO, then CRO/CCO), stage subsequent changes 6–9 months apart, and avoid simultaneous C-suite turnover that destabilizes the organization',
    [
      ['Replace all 4 in week one of close to start fresh', 'Simultaneous replacement of a third of the leadership team produces operational chaos, customer confusion, and lender concern. Even when all four are wrong, staging is essential.'],
      ['Avoid replacing anyone for the first 18 months to keep continuity', '18 months of continuity with the wrong leaders means 18 months of operating-plan slippage. The cost of inaction is real and shows up at exit.'],
      ['Let the CEO decide on their own timing without operating-partner input', 'CEOs often defer the hardest replacements because of personal relationships. Operating partners exist partly to make those conversations less personal and more disciplined.'],
    ],
    'Talent overhaul is one of the most underestimated execution risks in PE. Pacing matters as much as direction — sequencing prevents simultaneous chaos, and visible early wins (typically CFO) give the rest of the changes credibility.'),

  // -------------------------------------------------------------------------
  // ADD-ON M&A (4390326–4390328)
  // -------------------------------------------------------------------------
  q(4390326, 'Career Skills', CHAPTER, 'Add-on M&A: platform vs bolt-on logic',
    'A sponsor describes a deal as a "platform acquisition" with planned bolt-ons. What is the strategic difference between the two?',
    'A platform is the foundation — full operating team, scalable systems, and the entry multiple that anchors the bridge — while bolt-ons are smaller acquisitions bought at lower multiples to tuck in for synergy and multiple arbitrage',
    [
      ['Platforms and bolt-ons are the same — the labels are interchangeable', 'They are not interchangeable. Platforms are larger and carry the management team and systems; bolt-ons are smaller and ride on the platform\'s infrastructure.'],
      ['Bolt-ons must always be larger than the platform to justify the integration cost', 'Bolt-ons are by definition smaller — that is part of the multiple-arbitrage logic. Adding a larger company would be a transformative deal or a merger of equals.'],
      ['Platforms are always public companies and bolt-ons are always private', 'Most PE platforms are private companies. The public/private split is not the defining feature.'],
    ],
    'The platform/bolt-on framework is the backbone of buy-and-build strategies. Recognizing which role a given target plays drives diligence depth, integration scope, and the multiple that the sponsor is willing to pay.'),

  q(4390327, 'Career Skills', CHAPTER, 'Add-on synergy quantification: cost',
    'A platform has $20M EBITDA at 10% margin. A bolt-on has $5M EBITDA at 8% margin. The diligence team estimates $2M in cost synergies (back-office, procurement, real estate). What discipline should the operating team apply?',
    'Pressure-test each synergy line item with named owners, time-to-realization, and a discount for execution risk — and only include synergies in the bridge that pass an "is this in the operating plan with an owner" test',
    [
      ['Add the full $2M to year-1 EBITDA in the deal model', 'Synergies do not all land in year one. Typical realization curves are 30–50% in year one, 70–90% in year two, full in year three — and there is execution risk on each line.'],
      ['Ignore cost synergies because they are too uncertain to model', 'Cost synergies are real and measurable in most add-ons. Ignoring them surrenders the multiple-arbitrage and integration thesis that justifies the deal.'],
      ['Use a 100% confidence assumption on all synergy categories', '100% confidence is unrealistic on any synergy item. Operating partners typically apply 70–90% confidence on procurement, 50–70% on real estate, less on revenue.'],
    ],
    'Cost synergies are real, but they show up over a 12–36-month curve with named-owner discipline. Diligence teams that load synergies into year one and into the bridge without an operating plan to back them are setting up the next IC for failure.'),

  q(4390328, 'Career Skills', CHAPTER, 'Add-on synergy quantification: revenue',
    'The deal team adds $4M of revenue synergies to the model, claiming the platform\'s salesforce will cross-sell the bolt-on\'s product into the existing customer base. What should the IC press on?',
    'Revenue synergies are the most over-promised category in PE M&A — the IC should demand customer-by-customer evidence, named accounts, and a 50% haircut as a default given the historical realization rates',
    [
      ['Revenue synergies are reliable and should be modeled at full value', 'Industry studies (McKinsey, Bain) consistently show revenue synergies realize at 50% or less of underwriting. Modeling them at full value misprices the deal.'],
      ['Revenue synergies should be ignored entirely and only cost synergies modeled', 'Revenue synergies can be real when the customer-by-customer evidence supports them. The right move is haircutting and validation, not exclusion.'],
      ['Revenue synergies should be modeled at 200% of estimate to reflect upside', 'Revenue synergies almost never come in above estimate in the early years. 200% modeling is the opposite of the discipline the IC needs.'],
    ],
    'Revenue synergies are the asymmetric risk in add-on M&A. Cost synergies are mostly controllable; revenue synergies require the customer to do something. The discipline is haircutting hard and validating account-by-account before they enter the bridge.'),

  // -------------------------------------------------------------------------
  // TECH TRANSFORMATION (4390329–4390330)
  // -------------------------------------------------------------------------
  q(4390329, 'Career Skills', CHAPTER, 'Tech-enabled transformation scope',
    'A sponsor pitches the portfolio CEO on a "tech-enabled transformation" — data warehouse, embedded analytics, CRM cleanup, and AI in customer support. What scoping discipline should apply?',
    'Tie each technology investment to a specific EBITDA lever in the bridge — pricing analytics to pricing, CRM cleanup to sales productivity, AI support to gross margin — and refuse to fund technology that is not tied to a named lever',
    [
      ['Fund all proposed technology projects to maximize transformation impact', 'Funding everything dilutes management attention and rarely delivers EBITDA. Technology spend has to compete with other initiatives on a return basis.'],
      ['Defer all technology spend to the next owner', 'Deferring all technology leaves real EBITDA on the table and signals to the next buyer that the asset is under-invested — which lowers the exit multiple.'],
      ['Spend equally across every technology line item without prioritization', 'Equal funding across tech projects is not prioritization; it is abdication. Operating-plan discipline requires choosing what matters most.'],
    ],
    'Tech-enabled transformation is real but easily abused — it can become a portfolio-company expense line with no clear EBITDA target. The discipline is forcing every project to tie to a lever in the bridge, with named owner and realization timeline.'),

  q(4390330, 'Career Skills', CHAPTER, 'ERP replacement during hold period',
    'A portfolio company is running on a 20-year-old ERP system that the CFO wants to replace. The replacement project costs $15M, takes 24 months, and will distract leadership during a critical growth year. What should the operating partner decide?',
    'Default to deferring an ERP replacement unless the bridge demonstrably requires it — most ERP replacements eat 24+ months of management attention, deliver below original promises, and are better timed for the post-exit owner unless the existing system is actually blocking growth',
    [
      ['Start the ERP replacement immediately to get it done within the hold', '24 months of leadership distraction during the hold often costs more EBITDA than the ERP replacement creates. Sponsors are increasingly disciplined about not starting ERP projects late in a hold.'],
      ['Replace the ERP only if it can be done in 90 days', 'Real ERP replacements at portfolio-company scale rarely finish in 90 days. 90-day ERP claims are usually scope reductions that do not solve the underlying problem.'],
      ['Replace every system across the technology stack simultaneously', 'Simultaneous replacement of every system at once is the highest-risk possible move. Even firms that need transformation stage it.'],
    ],
    'ERP replacements are notoriously expensive in management attention and rarely deliver on time or scope. The mid-hold ERP project is one of the most common ways a value-creation plan gets quietly derailed — sponsors should default to skepticism, not enthusiasm.'),

  // -------------------------------------------------------------------------
  // WORKING CAPITAL & CAPEX (4390331–4390334)
  // -------------------------------------------------------------------------
  q(4390331, 'Career Skills', CHAPTER, 'Working capital: cash conversion cycle',
    'A distribution business has DSO of 65 days, DIO of 90 days, and DPO of 35 days — a cash conversion cycle (CCC) of 120 days. What is the magnitude of working-capital cash trapped on the balance sheet?',
    'Roughly one-third of annual revenue is tied up in working capital — every day of CCC reduction releases revenue/365 in cash, so a 30-day CCC improvement on $300M of revenue would release roughly $25M',
    [
      ['CCC is unrelated to cash and does not affect liquidity', 'CCC is exactly a cash-trap metric. Higher CCC means more cash trapped in receivables and inventory net of payables.'],
      ['CCC reductions only matter if the business is unprofitable', 'CCC reductions release cash regardless of profitability. They are particularly attractive in LBOs because the released cash can pay down debt.'],
      ['CCC at 120 days is best-in-class and cannot be improved', '120 days CCC is generally elevated. Top-quartile distribution businesses often run sub-60-day CCCs. There is usually significant improvement opportunity.'],
    ],
    'Working capital unlock is one of the most reliable cash levers in PE because the math is mechanical — every day saved on CCC releases revenue/365 in cash. For an LBO, that cash can prepay debt and directly improve equity returns.'),

  q(4390332, 'Career Skills', CHAPTER, 'DSO improvement levers',
    'A portfolio company has 65-day DSO against an industry median of 45 days. What is the most effective set of moves to close the gap?',
    'Tighten credit-approval discipline at new-customer onboarding, automate invoicing and dunning, install a collections cadence with named accountability, and offer modest early-pay discounts where the customer LTV justifies them',
    [
      ['Stop selling to all customers with payment-term issues', 'Refusing to sell to slower-paying customers throws out revenue with cash. The right move is to manage credit risk, not eliminate it.'],
      ['Sue every customer over 60 days past due immediately', 'Legal action is the last resort and damages commercial relationships. Modern AR programs work through dunning cadence and account management long before legal.'],
      ['Sell all receivables to a factor at a steep discount', 'Factoring is expensive and rarely the answer to an operational AR problem. It hides the root cause rather than fixing it.'],
    ],
    'DSO improvement is mostly an operational-discipline lever — credit approval, invoicing automation, dunning cadence, named collections owners. Top-quartile DSO comes from process, not from threats.'),

  q(4390333, 'Career Skills', CHAPTER, 'Capex discipline: maintenance vs growth',
    'An operating partner reviews capex requests totaling $45M for the next year against historical average capex of $25M. The CFO splits the $45M into maintenance and growth. What discipline should apply?',
    'Hold maintenance capex to a sustainable baseline tied to asset condition and safety, and require each growth capex item to compete on IRR and payback like a small investment — both buckets need named accountability',
    [
      ['Cut all capex to zero to maximize free cash flow', 'Zero capex cripples the business — equipment fails, safety degrades, growth stalls. It is the kind of cut that boosts year-one cash and destroys year-three EBITDA.'],
      ['Approve all $45M because the CFO submitted the request', 'Sponsor governance exists precisely so capex does not auto-approve. Each request should compete for capital like any other investment.'],
      ['Treat maintenance and growth capex identically and apply the same hurdle rate', 'Maintenance keeps the lights on (high importance, low IRR); growth is discretionary investment (high IRR required). Treating them identically misallocates capital.'],
    ],
    'Capex discipline is the difference between operating leverage and a financial trap. Maintenance has to be funded; growth has to be earned. Operating partners separate the two and govern each on its own terms.'),

  q(4390334, 'Career Skills', CHAPTER, 'Capex cuts that hurt at exit',
    'A sponsor cuts maintenance capex 40% in year 1 to boost year-1 free cash flow. EBITDA looks great, debt paydown accelerates. What is the likely consequence at exit?',
    'The buyer\'s diligence team will detect under-investment through asset condition, repair-and-maintenance creep, and deferred capex backlog — the exit multiple will compress to reflect the catch-up capex the next owner has to fund',
    [
      ['The buyer will not notice and the exit will price at the expected multiple', 'Top buyers run a quality-of-asset diligence that surfaces under-investment quickly. "They won\'t notice" is the wrong base case.'],
      ['Cutting maintenance capex permanently increases EBITDA quality', 'Under-investment temporarily lifts free cash flow but lowers EBITDA quality because the catch-up cost is real. Quality, not raw EBITDA, drives the multiple.'],
      ['Capex cuts have no effect on exit valuation', 'Capex cuts directly affect exit valuation through asset condition, repair costs, and the buyer\'s view of sustainable cash generation. They are one of the first things diligence checks.'],
    ],
    'Cutting maintenance capex is one of the most common ways to fake EBITDA in a hold period. The buyer\'s diligence team is specifically trained to detect it, and the multiple compresses to fund the backlog the next owner inherits.'),

  // -------------------------------------------------------------------------
  // BENCHMARKING, COMMUNICATION, KPI (4390335–4390338)
  // -------------------------------------------------------------------------
  q(4390335, 'Career Skills', CHAPTER, 'Operational benchmarking sources',
    'An operating partner needs sector-specific operational benchmarks (gross margin, SG&A%, working capital metrics) to set targets at a new portfolio company. What is the strongest combined source?',
    'Combine the firm\'s own portfolio-history database, public-company filings of comparable peers, consulting-firm sector studies, and trade-association benchmarks — triangulating multiple sources beats any single one',
    [
      ['Use only the portfolio CEO\'s opinion of what good looks like', 'CEO opinions are useful context but are not benchmarks. They are subject to anchoring on the company\'s own history.'],
      ['Use only consulting-firm benchmarks because they are most rigorous', 'Consulting benchmarks are useful but sometimes too broad. Triangulating with public filings and the firm\'s own portfolio data is what produces a defensible target.'],
      ['Avoid benchmarks because every business is unique', '"Every business is unique" is the standard excuse against benchmarking, and it is almost always wrong on operational metrics. Even unique businesses sit somewhere on a distribution.'],
    ],
    'Benchmarking is foundational to credible operating plans. The best sources are triangulated — internal portfolio data, public peers, consulting studies, trade associations — because each is limited individually but together they are decisive.'),

  q(4390336, 'Career Skills', CHAPTER, 'Communication cascade in the first 100 days',
    'A sponsor closes Friday afternoon. By Monday morning, employees, customers, suppliers, and lenders all expect to hear something. What communication cascade should the operating partner script?',
    'All-employee message Friday or first thing Monday (continuity, what changes, what does not), top-customer outreach in the first 5 business days (named relationship owners), supplier note in week 2, and lender update with the 100-day plan in week 3–4',
    [
      ['Stay silent for 30 days until the operating plan is fully ready', 'Silence reads as instability after a change of control. Employees imagine the worst, customers call competitors, and suppliers tighten terms.'],
      ['Send a single mass email to everyone — employees, customers, suppliers — at once', 'Mass communication treats all audiences the same when they have different concerns. Employees worry about jobs; customers worry about service; suppliers worry about terms.'],
      ['Let each functional leader communicate on their own timing', 'Uncoordinated communication produces conflicting messages and mixed signals. The cascade is centrally scripted even when individual leaders deliver pieces of it.'],
    ],
    'The first-100-days communication cascade is one of the most under-rehearsed pieces of operating-plan execution. Each audience has different anxieties and timing; treating them as one audience or letting communication drift creates the kind of confusion that costs customers and employees in the first quarter.'),

  q(4390337, 'Career Skills', CHAPTER, 'MBR and QBR cadence design',
    'The operating partner is setting up the portfolio reporting rhythm. What is the standard PE cadence?',
    'Weekly cash and pipeline review with the CFO/COO, monthly business review (MBR) with the full executive team on KPIs and initiatives, quarterly business review (QBR) at board level including thesis check-ins, and an annual strategy/operating-plan reset',
    [
      ['Quarterly is the only review needed — anything more frequent is micromanagement', 'Quarterly-only is far too slow for an LBO. By the time a quarterly meeting surfaces a problem, the operating plan is already two months behind.'],
      ['Daily executive reviews on every metric to maximize visibility', 'Daily executive reviews produce noise and burn out the team. Weekly is the standard cadence for cash and pipeline; monthly for the broader operating set.'],
      ['Annual reviews are sufficient because PE is long-term ownership', 'PE is long-term ownership in years but short-term governance in weeks. Annual cycles do not match either the debt service rhythm or the operating-plan rhythm.'],
    ],
    'PE\'s reporting cadence is dense by design — weekly cash, monthly MBR, quarterly QBR, annual plan. The structure exists because each layer answers a different question (liquidity, operating execution, thesis, strategy) and they all need their own rhythm.'),

  q(4390338, 'Career Skills', CHAPTER, 'KPI scorecard that ladders to the thesis',
    'A new portfolio dashboard lists 72 metrics, organized by department. The operating partner needs to redesign it. What is the right organizing principle?',
    'Lader the KPI set directly to the investment thesis — the 8–12 metrics on which the deal\'s value creation depends — and put everything else into department-level dashboards that do not surface at the executive review',
    [
      ['Display every metric on every dashboard so nothing is missed', '72 metrics on one screen produces noise, not insight. Operating teams need focus on the few KPIs that move the bridge.'],
      ['Use only revenue and EBITDA as the executive metrics', 'Top-line and bottom-line alone hide the operating dynamics underneath. The right set is 8–12 metrics that include leading indicators (pipeline, retention, productivity) alongside outcomes.'],
      ['Let each department choose its own dashboard metrics independently', 'Department-chosen metrics produce siloed scorecards that do not roll up to the thesis. The discipline is in laddering — every executive-level KPI should map to a value-creation lever.'],
    ],
    'The scorecard is the bridge to the operating plan to the IC memo to the LP pitch. A well-designed 8–12-metric scorecard tells anyone in the room which thesis levers are tracking, lagging, or broken — and the noise of 72 metrics actively prevents that.'),

  // -------------------------------------------------------------------------
  // CULTURE & EBITDA QUALITY (4390339–4390341)
  // -------------------------------------------------------------------------
  q(4390339, 'Career Skills', CHAPTER, 'Cultural integration in add-ons',
    'A sponsor integrates a $50M bolt-on into a $200M platform. The bolt-on has a craft-quality culture; the platform has a sales-driven culture. What integration approach is most likely to preserve the bolt-on\'s value?',
    'Integrate financial reporting and back-office systems on day one, preserve the bolt-on\'s product and engineering culture for at least 12 months, and only converge commercial motions after the platform has demonstrated it understands the bolt-on\'s customer',
    [
      ['Fully merge the two cultures into the platform\'s sales-driven model on day one', 'Day-one cultural merger typically destroys the bolt-on\'s talent base — the people who made the product good leave within 6 months. The sponsor then owns a damaged asset.'],
      ['Keep the bolt-on completely independent forever to preserve culture', 'Permanent independence forgoes most of the synergy that justified the deal. Some integration is necessary; the discipline is in what and when.'],
      ['Replace the bolt-on\'s leadership team with platform managers within 30 days', '30-day leadership replacement at a recently acquired bolt-on is the fastest way to lose the culture and the customer relationships that came with it.'],
    ],
    'Cultural integration is the most common reason add-on M&A under-delivers. The discipline is sequencing — financial and systems integration first (to capture cost synergies), commercial and cultural integration later (to avoid destroying the asset).'),

  q(4390340, 'Career Skills', CHAPTER, 'EBITDA quality erosion warnings',
    'Through year 3 of a 5-year hold, headline EBITDA is on plan but several signals suggest quality is eroding. Which combination is the strongest warning?',
    'Repair-and-maintenance expense creeping up, working capital expanding faster than revenue, an increasing share of EBITDA from one-time addbacks, and customer concentration rising as a few large accounts grow disproportionately',
    [
      ['Headline EBITDA growth is on plan, so there is no quality concern', 'Headline EBITDA can hide deterioration in underlying quality. The combination of capex underspend, working capital expansion, addback creep, and concentration is the classic exit-prep warning set.'],
      ['Customer satisfaction surveys are slightly below target', 'CSAT moves are useful but not by themselves a quality red flag. The structural metrics (capex, working capital, addbacks, concentration) are the ones that show up in diligence.'],
      ['The company has not increased prices in two years', 'Flat pricing is a missed opportunity, but it is not an EBITDA-quality erosion signal in the way the structural signals are. It is a different issue.'],
    ],
    'EBITDA quality erosion is the slow-motion problem that catches sponsors at exit. The warning signs accumulate quietly — deferred capex, working-capital drift, addback inflation, customer concentration — and the buyer\'s diligence team will surface every one of them.'),

  q(4390341, 'Career Skills', CHAPTER, 'Add-back discipline at exit prep',
    'A sponsor is preparing the company for sale and the CFO produces an adjusted-EBITDA bridge with 35 separate add-back line items totaling 18% of headline EBITDA. What is the right exit-prep discipline?',
    'Pre-emptively cut the add-back list to the items the buyer\'s QofE will actually accept — true one-time items, well-documented owner expenses, deal-related costs — and remove speculative or recurring items before the sell-side process starts',
    [
      ['Keep all 35 add-backs because the buyer can negotiate them later', 'Letting the buyer cut down the list is the slowest and most damaging way to handle it — every cut surfaces in negotiation as a credibility hit and a price reduction.'],
      ['Add more line items to maximize headline adjusted EBITDA', 'Inflating the add-back list invites the buyer\'s QofE to discount the entire adjusted-EBITDA framework. Credibility loss is worse than the items themselves.'],
      ['Eliminate all add-backs and present only GAAP EBITDA', 'Legitimate one-time and ownership-specific items are accepted by QofE teams. Eliminating them all leaves real EBITDA on the table.'],
    ],
    'Add-back discipline at exit prep is one of the highest-leverage moves the CFO and operating partner can make. A clean, defensible add-back schedule preserves the multiple; a bloated one invites the buyer to discount everything.'),
]
