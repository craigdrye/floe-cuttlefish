import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// PE CHAPTER 3 — Business Diligence (expansion bank)
// ----------------------------------------------------------------------------
// 41 additional questions (IDs 4390200–4390240) supplementing the existing 9
// Business Diligence questions in careerAgentGeneratedRoadmapFinance.ts. The
// existing 9 already cover: QoE add-back testing, 42%-single-customer
// concentration, churn-in-disguise NRR, ERP surprise, key-person risk,
// founder dependency on sales, data-room inconsistency, cohort gross margin,
// and supplier fragility. This bank goes wider into the full diligence
// workstream apparatus a US PE associate runs in confirmatory diligence:
//   - Workstream architecture (commercial / operational / financial QoE /
//     legal / tax / HR / IT / ESG / environmental) and how they are sequenced
//   - CDD provider selection (Bain, McKinsey, LEK, A&M, EY-Parthenon)
//   - QoE deep mechanics: proof of cash, AR aging, NWC peg, debt-like items,
//     trapped cash, net debt bridge, target working capital
//   - Voice-of-customer programs, win-loss analysis, NPS interpretation
//   - Cohort retention math (SaaS 95% gross retention benchmark)
//   - Operational diligence: site visits, capex backlog, maintenance vs growth
//   - Management presentations red and green flags
//   - Background checks (D&B, Kroll), reps and warranties context
//   - IT diligence: SOC 2 Type II, ISO 27001, penetration tests, tech debt
//   - Environmental Phase I / Phase II ESA scoping
//   - HR diligence: 401(k) compliance, multi-employer pension plans (MEPP),
//     severance stack, union exposure, EEO-1 patterns, WARN act
//   - Diligence budget ($1.5M–$4M typical for mid-market)
//   - Confirmatory diligence sequencing post-LOI
//   - Red flag report structure and IC diligence question framing
//
// Voice: matches jargonBusters.ts and the existing PE Business Diligence
// bank. Specific, evidence-anchored, no filler, no strawman distractors.
// Every wrong-answer rationale is bespoke and points at a real misconception
// a career-changer or first-year PE associate would actually make.
//
// US context throughout — US GAAP, US labor law (ERISA, WARN, NLRA),
// US environmental statutes (CERCLA, RCRA), USD pricing.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe PE Ch3 canonical bank'

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

const CHAPTER = 'Business Diligence'

// Difficulty distribution target: ~29% at 3, ~51% at 4, ~20% at 5.
// 41 questions: 12 at 3, 21 at 4, 8 at 5.
export const PE_CH3_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  4390200: 3, // Diligence workstream map
  4390201: 3, // Sequencing CDD vs QoE vs legal
  4390202: 4, // CDD provider selection (Bain vs LEK vs EY-P)
  4390203: 4, // Why a sponsor hires A&M for ops not commercial
  4390204: 4, // McKinsey vs Bain CDD positioning
  4390205: 3, // QoE scope vs an audit
  4390206: 4, // Proof of cash mechanics
  4390207: 5, // AR aging signal interpretation
  4390208: 4, // NWC peg construction (12-month trailing average)
  4390209: 5, // Debt-like items in the net debt bridge
  4390210: 4, // Trapped cash and minimum operating cash
  4390211: 4, // Net debt bridge components
  4390212: 3, // Customer concentration benchmark (<10% per customer)
  4390213: 4, // Top-10 customer concentration thresholds
  4390214: 4, // Win-loss analysis design
  4390215: 4, // Voice-of-customer call program
  4390216: 5, // NPS interpretation in CDD
  4390217: 4, // SaaS gross retention benchmark (95%)
  4390218: 4, // Net revenue retention vs gross retention
  4390219: 5, // Cohort decay curve reading
  4390220: 3, // Working capital seasonality normalization
  4390221: 4, // Site visit objectives in operational diligence
  4390222: 3, // Capex backlog and maintenance vs growth
  4390223: 3, // Maintenance vs growth capex split
  4390224: 4, // Management presentation red flags
  4390225: 3, // Management presentation green flags
  4390226: 4, // Background check scope (D&B + Kroll)
  4390227: 4, // R&W insurance and diligence depth
  4390228: 4, // IT diligence SOC 2 Type I vs Type II
  4390229: 5, // ISO 27001 scope traps
  4390230: 4, // Penetration test cadence and findings
  4390231: 3, // Environmental Phase I ESA trigger
  4390232: 5, // Phase II ESA escalation logic
  4390233: 4, // HR diligence 401(k) compliance
  4390234: 5, // Multi-employer pension plan (MEPP) withdrawal liability
  4390235: 5, // Severance stack and change-of-control
  4390236: 4, // Union exposure and NLRA risk
  4390237: 3, // EEO-1 and adverse-impact patterns
  4390238: 3, // Diligence budget for mid-market deal
  4390239: 4, // Confirmatory diligence post-LOI sequencing
  4390240: 3, // Red flag report and IC diligence questions
}

export const peCh3Questions: Question[] = [
  // -------------------------------------------------------------------------
  // Workstream architecture and provider selection (4390200–4390204)
  // -------------------------------------------------------------------------
  q(4390200, 'Career Skills', CHAPTER, 'Diligence workstream map',
    'You are scoping diligence on a $250M EV industrial services LBO. Which set of workstreams should appear in the kickoff plan?',
    'Commercial, operational, financial QoE, legal, tax, HR/benefits, IT/cyber, environmental, and ESG — each owned by a named provider with a deliverable date tied to the IC schedule',
    [
      ['Commercial and QoE only — the rest gets handled by lawyers during definitive docs', 'Operational, HR, IT, environmental, and tax diligence find issues lawyers will not catch. A drafting attorney does not run a Phase I ESA or audit a 401(k) plan; sponsors who skip those workstreams discover the problems after closing.'],
      ['Whatever the seller\'s data room organizes itself around', 'The seller\'s data room is organized to sell the company, not to diligence it. The buyer defines the workstreams; the data room is an input, not the plan.'],
      ['One generalist consulting firm covering every workstream in a single report', 'Single-firm coverage means none of the workstreams gets a specialist. Sponsors hire dedicated providers for QoE, CDD, environmental, and IT precisely because the skill sets are different.'],
    ],
    'Diligence is run as parallel workstreams, each with a specialist provider and a deliverable that maps to the IC date. Missing a workstream at kickoff usually means discovering the issue after closing — when it becomes the sponsor\'s problem, not the seller\'s.'),

  q(4390201, 'Career Skills', CHAPTER, 'Sequencing CDD versus QoE',
    'A sponsor signs the LOI on Monday. Commercial diligence (CDD), QoE, and legal all need to start. How should the workstreams be sequenced?',
    'CDD and QoE kick off in parallel immediately — both need the longest runway and feed the model and the IC memo; legal lags by 1–2 weeks because it depends on the QoE-cleaned financials and the negotiated definitive agreement scope',
    [
      ['Legal first because the lawyers need to write the purchase agreement', 'The purchase agreement reflects the diligence findings, not the other way around. Drafting reps and warranties before CDD and QoE are underway means writing the contract blind.'],
      ['Sequential — finish CDD, then QoE, then legal, then operational', 'A sequential schedule does not fit inside the exclusivity period. CDD and QoE have to run in parallel or the sponsor will run out of clock before IC.'],
      ['QoE first alone, because financials are the most important workstream', 'QoE is necessary but not sufficient. Without parallel CDD the sponsor reaches IC with clean numbers and no view on whether the market actually buys what the company sells.'],
    ],
    'Confirmatory diligence runs in parallel because the exclusivity window does not allow sequential workstreams. CDD and QoE start day one; legal and ESA-style workstreams layer on once scope is clear.'),

  q(4390202, 'Career Skills', CHAPTER, 'CDD provider selection',
    'You are picking a CDD provider for a $400M EV B2B software target. Bain, LEK, and EY-Parthenon are all available. What is the actual differentiator at this scale?',
    'Sector depth and recent comparable diligences — LEK and Bain both have deep B2B software practices, EY-Parthenon brings cross-Big-Four data access; the deciding question is which team has done three to five similar deals in the last two years',
    [
      ['Brand prestige — Bain is the prestige choice so Bain wins by default', 'Prestige is not a diligence input. Sponsors care about which partner-led team has actually seen this segment recently, because that is what produces a useful customer-call program.'],
      ['Lowest fee quote, since CDD is largely commoditized', 'CDD is the opposite of commoditized — the value is in interview access and pattern recognition. A 30% cheaper provider with no sector experience produces a 30% cheaper report nobody trusts at IC.'],
      ['Whichever firm is willing to commit the most consultants to the project', 'Headcount is not the input that drives CDD quality. A partner who has run the segment for ten years matters more than three extra associates on the deck.'],
    ],
    'CDD provider choice is sector-fit and team-fit, not brand. The sponsor wants the team that can call the right twenty buyers on day one and recognize the signal — that capability lives in specific partners, not in firm logos.'),

  q(4390203, 'Career Skills', CHAPTER, 'Hiring A&M for operational diligence',
    'A sponsor hires Alvarez & Marsal alongside Bain on a manufacturing LBO. Bain owns CDD; A&M owns a separate scope. What is A&M most likely doing?',
    'Operational diligence — plant walk-throughs, capex backlog assessment, maintenance versus growth split, throughput and labor productivity benchmarking, and a 100-day operational improvement plan',
    [
      ['Backup CDD in case Bain misses something', 'CDD is not duplicated — both firms would step on each other and the customer-call list would collide. A&M is in for a different workstream entirely.'],
      ['Tax structuring for the acquisition', 'Tax structuring sits with Big Four tax or the lawyers, not A&M\'s restructuring and operations practice. A&M is built for operational and turnaround work, which is where the sponsor is using them.'],
      ['QoE — A&M competes with the Big Four on financial diligence', 'A&M does have a transaction services practice, but if Bain is already on CDD the sponsor would only double up if A&M is covering a distinct workstream. The clue here is "alongside Bain" — that means operational, not financial.'],
    ],
    'A&M\'s identity in PE diligence is operational and turnaround — site visits, productivity, post-close planning. Sponsors pair them with a strategy CDD firm to cover commercial and operational lenses separately.'),

  q(4390204, 'Career Skills', CHAPTER, 'McKinsey versus Bain on CDD',
    'A partner asks why the firm tends to default to Bain on lower-mid-market CDD instead of McKinsey. What is the most accurate framing?',
    'Bain has the deepest PE-CDD muscle and is set up around 4-6 week sprint cadences with sponsor clients; McKinsey does excellent CDD but its center of gravity is corporate-strategy work and its pricing and team availability often do not fit the lower-mid-market sponsor model',
    [
      ['McKinsey does not do CDD', 'McKinsey absolutely does CDD and has a strong practice. The question is fit and frequency, not capability.'],
      ['Bain is cheaper than McKinsey on every engagement', 'Pricing is comparable at the partner level. The decision is about practice focus and sprint cadence, not a quoted rate.'],
      ['McKinsey only takes diligence work on $1B+ deals', 'There is no firm rule. McKinsey takes mid-market diligence too — but the muscle memory for short, sponsor-style CDD sits more heavily at Bain and LEK in many sponsor relationships.'],
    ],
    'CDD provider selection is partly about practice DNA. Bain and LEK live inside the sponsor sprint cadence; McKinsey, Boston Consulting, and EY-Parthenon are also strong CDD shops but bring different operating models and team rhythms.'),

  // -------------------------------------------------------------------------
  // QoE mechanics: scope, proof of cash, AR aging, NWC, net debt bridge
  // (4390205–4390211)
  // -------------------------------------------------------------------------
  q(4390205, 'Career Skills', CHAPTER, 'QoE scope versus an audit',
    'A first-year associate asks why the deal team is paying $400K for a QoE when the target already has audited financials. What is the honest answer?',
    'An audit opines on whether financials are free of material misstatement under GAAP; a QoE tests the durability and normalization of EBITDA, validates working capital trends, and surfaces debt-like items — none of which an audit opinion addresses',
    [
      ['Audits and QoEs are functionally the same and the firm pays twice for caution', 'They are not the same product. An audit is a compliance opinion; a QoE is a diligence work product built for a buyer. The questions answered are different.'],
      ['QoE replaces the audit because audits are not reliable enough for PE', 'The QoE complements the audit; it does not replace it. Sponsors rely on the audited base and the QoE work on top.'],
      ['QoE is mainly for tax purposes', 'Tax diligence is a separate workstream. QoE is about earnings quality, working capital, and net debt — not tax positions.'],
    ],
    'QoE answers a different question than an audit: how durable is the EBITDA we are paying a multiple of, and what really goes in the net debt and working capital bridges? Sponsors pay for it because the purchase price formula depends on those answers, not on a clean audit opinion.'),

  q(4390206, 'Career Skills', CHAPTER, 'Proof of cash mechanics',
    'A QoE provider says they are running a "proof of cash" on the target. What does that actually mean?',
    'Tying reported revenue and expense activity to bank statement cash receipts and disbursements over a test period to confirm that the income statement reflects real economic activity, not accounting entries',
    [
      ['Verifying the target has enough cash on hand to close', 'Cash sufficiency at close is a closing mechanic, not a QoE procedure. Proof of cash is a historical verification, not a liquidity check.'],
      ['Counting petty cash at every location', 'A literal cash count is an audit procedure for cash balances, not a QoE technique for testing earnings.'],
      ['Building a 13-week cash flow forecast', 'A 13-week cash forecast is a restructuring or treasury tool, used post-close in distressed situations. Proof of cash is a backward-looking validation, not a forecast.'],
    ],
    'Proof of cash ties the P&L back to bank activity over a sample period to confirm that recorded revenue actually showed up as cash and recorded expenses actually went out. It is the QoE provider\'s defense against accounting-only earnings that have no economic substance.'),

  q(4390207, 'Career Skills', CHAPTER, 'AR aging signal interpretation',
    'QoE work shows AR over 90 days has grown from 6% to 18% of total AR over the past four quarters, while reported revenue is up 14%. What does this combination indicate?',
    'Revenue may be pulled forward through extended terms, channel stuffing, or credit-quality deterioration — the aging trend is a leading indicator that some reported growth will not collect',
    [
      ['Strong revenue growth always increases AR aging proportionally so this is normal', 'Healthy growth grows AR roughly in line with revenue while aging mix stays stable. A tripling of >90-day AR is not the signature of healthy growth; it is the signature of credit or quality problems.'],
      ['AR aging is irrelevant to PE diligence because it is a balance sheet item', 'AR aging directly affects the working capital peg and the realizability of revenue. It is one of the more telling QoE outputs, not a balance-sheet curiosity.'],
      ['It means the customers are happy and paying when they want to', 'Customers paying late is not a satisfaction signal — it is usually a disputes, quality, or financial-distress signal. PE diligence treats it as risk, not loyalty.'],
    ],
    'A rising tail of >90-day AR while revenue accelerates is a classic late-cycle QoE flag. It can mean channel stuffing, deteriorating customer credit, or product-quality disputes; in any case it forecasts collection problems the buyer will inherit.'),

  q(4390208, 'Career Skills', CHAPTER, 'NWC peg construction',
    'You are setting the working capital peg in the purchase agreement. The target\'s business is roughly stable but seasonal. What basis produces the cleanest peg?',
    'A trailing 12-month average of monthly net working capital, normalized for known one-offs and seasonality, computed on the same definition that will be used at close',
    [
      ['The most recent month\'s NWC, because it is the most current', 'A single month is too noisy and almost certainly off-peak or on-peak by accident. The seller will manage that single month if they know you anchored on it.'],
      ['Year-end NWC, because it is audited', 'Year-end is often the lowest NWC point of the year for many businesses (inventory shipped, AR collected for tax reasons). Pegging there hands the seller a working capital tailwind.'],
      ['Whatever the seller proposes, because they know the business best', 'The seller proposes the peg most favorable to them. The buyer\'s job is to test the proposal, not adopt it.'],
    ],
    'A trailing 12-month average smooths seasonality and one-off swings, and using the same definition at close avoids the most common dispute. The peg looks like a number on a page but it is one of the more financially consequential outputs of the QoE.'),

  q(4390209, 'Career Skills', CHAPTER, 'Debt-like items in the net debt bridge',
    'A QoE identifies several items the seller does not call debt but the buyer wants treated as debt at close. Which group is most defensibly debt-like in a US mid-market deal?',
    'Unfunded pension obligations, deferred compensation and earn-out balances, accrued bonuses for the stub period, capital-lease obligations, customer deposits that will be repaid, and unpaid taxes — all reduce the equity wire at close',
    [
      ['Only the line items the target balance sheet labels as debt', 'Sellers do not label every cash-out-the-door obligation as debt. The buyer\'s discipline is economic, not labeling — what cash the buyer will have to write a check for post-close is debt-like.'],
      ['Trade payables in the ordinary course of business', 'Ordinary AP is working capital, not debt. Moving routine AP into the debt bucket double-counts the peg.'],
      ['Operating leases under ASC 842, which sit on the balance sheet', 'Operating leases are treated as off-balance-sheet for EV purposes in most US PE deals (capitalized lease debt is the carve-out). Moving every operating lease into net debt would distort the bridge.'],
    ],
    'Debt-like items are economic, not accounting. The discipline is to find every dollar the buyer will pay out for pre-close obligations and pull it into the net debt bridge so it reduces the cash to seller — sellers naturally argue the other way.'),

  q(4390210, 'Career Skills', CHAPTER, 'Trapped cash and minimum operating cash',
    'The seller wants all $42M of balance sheet cash treated as a deduction from net debt. The QoE provider pushes back. Why?',
    'Some cash is operationally trapped — held in foreign subsidiaries with repatriation friction, in restricted accounts, or as minimum cash the business actually needs to operate — and is not freely available to the buyer at close',
    [
      ['Cash is always 100% deductible from gross debt in any deal', 'Trapped cash and minimum operating cash are routine carve-outs in mid-market and larger deals. A flat 100% credit is the seller\'s opening position, not the answer.'],
      ['The buyer wants to keep cash on the balance sheet for their own purposes', 'The buyer keeps operating cash on the balance sheet because the business cannot run without it, not for strategic accumulation. It is a working capital reality, not a buyer preference.'],
      ['Trapped cash only matters for cross-border deals', 'Domestic deals also have minimum operating cash — float for payroll, sweep account minimums, restricted collateral cash. Trapped cash is not exclusively a cross-border issue.'],
    ],
    'Net cash credit in a deal is rarely the headline cash balance. The buyer pays seller for cash that is truly excess and freely usable; trapped, restricted, and minimum operating cash all reduce that credit. Sponsors who do not negotiate this leave money on the table.'),

  q(4390211, 'Career Skills', CHAPTER, 'Net debt bridge components',
    'You are presenting the net debt bridge from headline TEV to equity to seller. Which structure correctly reflects mid-market US practice?',
    'TEV, minus funded indebtedness, minus debt-like items (unfunded pensions, deferred comp, accrued unpaid taxes, capital leases, earn-outs), plus excess cash (gross cash minus trapped and minimum operating cash), plus or minus NWC peg adjustment',
    [
      ['TEV minus the balance sheet long-term debt line equals equity to seller', 'That ignores short-term debt, debt-like items, cash credit, and the NWC peg — every one of which moves the equity wire by real money in a real deal.'],
      ['TEV minus all liabilities equals equity to seller', 'AP, accrued payroll, and most current liabilities are working capital, not debt. Subtracting every liability double-counts the working capital peg.'],
      ['TEV equals equity to seller in a cash-free debt-free transaction', 'Cash-free debt-free means cash and debt are settled separately, not that there is no bridge. The bridge still runs; the labels just put cash and debt on opposite sides.'],
    ],
    'The net debt bridge translates an EV-based price into the actual check the seller receives. Mis-stating one component (a missed debt-like item, a wrong cash credit, a sloppy peg) is the most common way a sponsor over- or under-pays at close.'),

  // -------------------------------------------------------------------------
  // Customer concentration, win-loss, voice of customer, NPS
  // (4390212–4390216)
  // -------------------------------------------------------------------------
  q(4390212, 'Career Skills', CHAPTER, 'Customer concentration benchmark',
    'A target\'s largest customer is 7% of revenue, the second is 4%, and no other customer is over 3%. How should this register on the concentration workstream?',
    'Healthy by the typical PE benchmark — sponsors generally want no single customer above 10% and the top 10 below ~30% combined; this profile clears both tests and reduces revenue-at-risk exposure',
    [
      ['Concentrated — any single customer over 5% is a problem', 'There is no industry rule at 5%. The working sponsor heuristic is <10% per customer for low concentration risk; 7% sits inside that.'],
      ['Irrelevant — concentration only matters above 20%', 'By the time a customer is 20%+, concentration is already a deal-shaping issue. Sponsors care well before that level and explicitly track sub-10% as the comfortable zone.'],
      ['Cannot be evaluated without the specific industry', 'Industry context matters at the margin, but the <10% per customer benchmark holds across most mid-market sectors. Concentration is one of the more cross-cutting diligence metrics.'],
    ],
    'A practical sponsor heuristic: no customer above 10%, top 10 below roughly 30%. The deal team\'s concentration table either passes or fails on numbers like these before it gets to industry nuance.'),

  q(4390213, 'Career Skills', CHAPTER, 'Top-10 customer concentration thresholds',
    'A diligence summary shows the top 10 customers represent 58% of revenue, with the largest at 12%. What is the diligence team\'s job from here?',
    'Document each top-10 relationship — contract term, renewal date, NPS or relationship health, switching cost, alternatives in the market — and model a downside in which 2–3 top customers churn or repri ce',
    [
      ['Reject the deal because the top 10 is over 50%', 'A 58% top-10 is high but not automatically disqualifying. The job is to test the durability of each relationship, not to apply a single-threshold veto.'],
      ['Accept the deal because no single customer is over 15%', 'Single-customer cap is not the only concentration test. Top-10 above 50% is its own exposure even if no individual name is over 15%.'],
      ['Treat the top 10 as a single customer for modeling purposes', 'Collapsing 10 different relationships into one mis-models the actual correlation. Some top-10 customers churn together (industry shocks), some are entirely independent — that is what the diligence has to disentangle.'],
    ],
    'Concentrated top-10 lists require relationship-by-relationship work: contract, switching cost, satisfaction, alternative supply, and a downside model where two or three names move adversely at once. The deal-killer or deal-saver lives inside that table.'),

  q(4390214, 'Career Skills', CHAPTER, 'Win-loss analysis design',
    'CDD includes a win-loss workstream. The CDD firm proposes 25 wins and 5 losses. What is the design problem?',
    'The sample is heavily over-weighted to wins; sponsors learn more from losses (why prospects chose the alternative) and should target roughly balanced or loss-tilted samples — typically 15 wins and 15 losses, sourced independently of the seller',
    [
      ['Sample is too small overall — at least 100 interviews are needed', 'Mid-market CDD typically runs 30–50 interviews total. The issue is mix, not absolute count.'],
      ['Losses should never be interviewed because they are angry', 'Losses are the most informative interview cohort. Sponsors who skip losses learn only what wins liked, which is half of the picture.'],
      ['The seller should choose all 30 interviewees to make sure access is granted', 'Seller-curated samples are the classic CDD failure mode. The CDD firm sources independently — often via association lists, conference databases, or LinkedIn outreach — so the sample is not pre-cleaned.'],
    ],
    'A useful win-loss is balanced or loss-tilted and sourced independently of the seller. The point is to learn why the company loses, where it is being out-sold, and what would have changed the buyer\'s mind — not to confirm that wins like the product.'),

  q(4390215, 'Career Skills', CHAPTER, 'Voice-of-customer call program',
    'A sponsor wants a voice-of-customer (VoC) program on a $300M EV B2B target. What does a credible VoC program look like in confirmatory diligence?',
    '30–50 customer interviews stratified across cohort age, segment, and account size — covering current users, churned users, expansion accounts, and lost prospects — anchored by a written discussion guide and synthesized by the CDD firm with verbatim attribution',
    [
      ['Three or four conversations with the largest customers, sourced by the CEO', 'Four CEO-sourced calls with top customers is the seller\'s tour, not diligence. The biggest accounts often have the closest relationship with the seller and produce the least objective signal.'],
      ['An automated email survey sent to all customers', 'Email surveys produce poor response rates and shallow signal. VoC in CDD is structured live interviews because the signal lives in tone, hesitation, and follow-up questions.'],
      ['Only churned customers, because they are the most informative', 'Churned-only loses the comparison set. The signal comes from contrasting current, expansion, lost, and churned populations against each other.'],
    ],
    'A VoC program is structured, stratified, and independent. Stratification matters because expansion accounts, new accounts, and churned accounts each tell a different chapter of the story — and the sponsor needs all of them to underwrite the thesis.'),

  q(4390216, 'Career Skills', CHAPTER, 'NPS interpretation in CDD',
    'The target reports an NPS of 42. Diligence is asked whether that supports the thesis. What is the right answer?',
    'NPS is interpretable only relative to category benchmarks and against the company\'s own trend — 42 is "good" in many B2B categories but the diligence needs the category benchmark, the trend over 4–8 quarters, and the score by segment and tenure cohort',
    [
      ['NPS over 40 is always strong, so the score validates the thesis', '"Above 40 is strong" is a marketing factoid, not a diligence finding. The same 42 looks great against a 25 benchmark and weak against a 60 benchmark.'],
      ['NPS is meaningless and should be ignored in PE diligence', 'NPS is noisy but not meaningless. It correlates with retention and referral behavior when read alongside churn and expansion data — sponsors do use it, carefully.'],
      ['NPS only matters in consumer businesses', 'NPS is widely tracked in B2B SaaS, services, and industrials. Its interpretation differs by category but it is a real input across most PE-backable businesses.'],
    ],
    'NPS in CDD is a comparison stat — to category, to trend, and to segment cuts. A standalone number tells the sponsor little; the same score sliced by tenure or account size often reveals the real customer-health story.'),

  // -------------------------------------------------------------------------
  // Retention, cohort math, working capital seasonality (4390217–4390220)
  // -------------------------------------------------------------------------
  q(4390217, 'Career Skills', CHAPTER, 'SaaS gross retention benchmark',
    'A SaaS target reports 88% gross revenue retention. How should the diligence team frame this against benchmarks?',
    'Below the ~95% gross retention benchmark for healthy B2B SaaS — the gap of 7 points implies meaningful churn that NRR upsells may be hiding; the diligence needs cohort, segment, and churn-reason data before accepting the headline',
    [
      ['88% is excellent — anything above 80% is healthy SaaS', '80% is below the typical sponsor cutoff for healthy SaaS. The ~95% gross retention benchmark is the working anchor; 88% is a yellow flag, not a green light.'],
      ['Retention is irrelevant if NRR is strong', 'Strong NRR with weak gross retention is exactly the "churn in disguise" pattern — high-quality upsell on top of a leaky base. NRR alone does not exonerate weak gross.'],
      ['SaaS retention benchmarks do not exist in PE', 'Benchmarks absolutely exist and sponsors use them. The 95% gross retention anchor for B2B SaaS is widely tracked across CDD firms.'],
    ],
    'Healthy B2B SaaS gross retention typically sits around 95%. Numbers in the high 80s are not disqualifying but require explanation — by segment, by cohort, and by churn reason — before the sponsor underwrites the thesis.'),

  q(4390218, 'Career Skills', CHAPTER, 'Net revenue retention versus gross retention',
    'A target reports 118% NRR and 89% GRR. Which framing of this combination is most useful for IC?',
    'Expansion revenue (price, seat, module upsell) is masking a churning base — IC needs to see the upsell sustainability and the base churn separately, because each carries different durability and valuation implications',
    [
      ['118% NRR is the only metric that matters because it captures the net economic effect', 'NRR is the net of expansion and churn. Reading it alone hides whether the upsell is durable or whether the base is melting away underneath.'],
      ['89% GRR is the only metric that matters because expansion is volatile', 'Expansion can be durable, especially with module-led pricing. Ignoring NRR misses real value creation that is happening on top of the base.'],
      ['The two metrics should be averaged to get a single retention figure', 'NRR and GRR are not averaged — they decompose a single revenue base into two different forces. Averaging them throws away the diagnostic content.'],
    ],
    'GRR and NRR answer different questions: is the base sticky, and is the seller successfully expanding into it. Sponsors read both, separately, and underwrite each — sustainable upsell is valuable, but only if the base is not eroding.'),

  q(4390219, 'Career Skills', CHAPTER, 'Cohort decay curve reading',
    'A cohort table shows the 2021 cohort retaining 92% of its initial ARR after 12 months and 78% after 24 months; the 2023 cohort retains 86% after 12 months. Diligence is asked whether retention is improving or deteriorating.',
    'Deteriorating — the 2023 cohort retained 86% in its first year versus 92% for the 2021 cohort\'s first year; comparing cohorts at the same age (not at the latest snapshot) shows newer customers are churning faster than older ones did',
    [
      ['Improving — 86% in 2023 is above the 78% the 2021 cohort showed after two years', 'That compares a 12-month figure to a 24-month figure — the cohorts are at different ages. The correct read holds age constant.'],
      ['Cannot be determined without lifetime value data', 'Cohort retention at consistent ages is exactly the diagnostic for retention trend. LTV is a downstream calculation; you do not need it to read the decay curve.'],
      ['Cohort analysis only works in subscription businesses', 'Cohort analysis works for any business with repeat customers — services, industrials, healthcare. The technique is general.'],
    ],
    'Reading cohort tables requires age-matched comparison. A newer cohort retaining less at the same age than an older cohort did is unambiguously a deterioration signal — sponsors who compare at the latest snapshot frequently miss it.'),

  q(4390220, 'Career Skills', CHAPTER, 'Working capital seasonality normalization',
    'A landscaping services target generates 70% of revenue from April to September. AR peaks in July at $14M and troughs in January at $3M. How should working capital be normalized for the NWC peg?',
    'Build the peg from a 12-month average that includes both peak and trough months, ideally weighted to reflect the close month\'s expected position in the cycle',
    [
      ['Use the most recent month\'s NWC as the peg regardless of seasonality', 'A single month captures the season, not the business. Pegging at one extreme hands either the buyer or the seller a one-sided benefit.'],
      ['Use peak AR ($14M) as the peg to be conservative', 'Pegging at peak overstates the structural working capital need and would over-credit cash to the seller. The peg has to reflect the average run rate.'],
      ['Set the peg to zero because the business is seasonal', 'Seasonality does not erase working capital — it amplifies the variability. A zero peg is wrong; a 12-month average peg is the standard answer.'],
    ],
    'Seasonal businesses require seasonal NWC pegs. The standard answer is a trailing 12-month average that captures the full cycle, often with a close-date adjustment so neither party benefits from accidental timing.'),

  // -------------------------------------------------------------------------
  // Operational diligence: site visits, capex (4390221–4390223)
  // -------------------------------------------------------------------------
  q(4390221, 'Career Skills', CHAPTER, 'Site visit objectives',
    'You are joining a site visit for a $180M EV food packaging LBO. What should the visit actually accomplish?',
    'Validate plant condition and capex backlog with eyes-on observation, meet line supervisors and maintenance leads outside management\'s presence, observe shift handoffs and quality controls, and pressure-test management\'s narrative against what the floor actually looks like',
    [
      ['Tour the facility with the CFO and confirm it looks well-maintained', 'A management-led tour is a marketing exercise. The diligence value comes from time off the script — with supervisors, on the line, looking at what is actually happening.'],
      ['Photograph the equipment list to verify the fixed asset register', 'Asset verification is part of the agenda, but the bigger value is talking to operators about throughput, downtime, and what they would fix first if they had the budget.'],
      ['Confirm headcount matches the org chart', 'Headcount is on paper. The site visit is for what is not on paper — culture, condition, latent risk.'],
    ],
    'Site visits are diligence, not tours. The signal lives off the management script — line supervisors, maintenance leads, quality data on the floor. Sponsors who treat the visit as a courtesy meeting waste it.'),

  q(4390222, 'Career Skills', CHAPTER, 'Capex backlog and maintenance versus growth',
    'A manufacturing target reports $4M annual capex, of which management calls $1M maintenance and $3M growth. Operational diligence pushes back. Why?',
    'Maintenance capex is frequently understated by sellers to depress reported maintenance and inflate apparent free cash flow; the real maintenance need is tested by walking the plant, reading the asset register, and comparing to industry benchmarks for equipment of that age',
    [
      ['Sellers always classify capex accurately because their auditors check it', 'Auditors do not test maintenance versus growth — that classification is management judgment and is not part of a GAAP opinion. It is exactly the kind of judgment diligence has to test.'],
      ['Capex split is irrelevant because total capex is what matters for FCF', 'Total capex matters for current FCF, but the maintenance versus growth split matters for projected FCF and for normalizing the value creation case. Sponsors who skip the split underwrite an inflated steady-state FCF.'],
      ['Maintenance capex should always be 25% of D&A', 'There is no fixed ratio. The right number is whatever it actually costs to keep the plant operating at current capacity, which varies by equipment age, utilization, and industry.'],
    ],
    'Maintenance versus growth capex is one of the most-manipulated splits in seller financials. Operational diligence walks the plant, reads the asset register, and benchmarks against peers — because the split drives both the FCF base and the credibility of the growth-capex story.'),

  q(4390223, 'Career Skills', CHAPTER, 'Maintenance versus growth split',
    'Operational diligence concludes that true maintenance capex on a target is 2.5% of revenue, not the 1.2% management reported. What is the most direct consequence in the model?',
    'Steady-state free cash flow is lower than the seller\'s case implies, which compresses the LBO\'s debt capacity and the equity returns under the same purchase price',
    [
      ['No impact — the model uses total capex, not the maintenance split', 'The split matters in the steady-state and terminal periods. A model that assumes maintenance is 1.2% will under-spend in those periods and overstate FCF.'],
      ['Higher purchase price because the company is spending more on growth', 'Higher real maintenance is the opposite of a positive — it means less of the reported capex was building new capacity. Growth capex shrinks, not expands.'],
      ['Lower D&A because maintenance capex is expensed', 'Maintenance capex is still capitalized under GAAP; it is not expensed. The split is about classification of capitalized spending, not about D&A treatment.'],
    ],
    'A higher maintenance burden than management claimed compresses steady-state FCF and therefore debt capacity, returns, and the case for the deal price. This is one of the more financially consequential findings operational diligence produces.'),

  // -------------------------------------------------------------------------
  // Management presentation red and green flags (4390224–4390225)
  // -------------------------------------------------------------------------
  q(4390224, 'Career Skills', CHAPTER, 'Management presentation red flags',
    'Across a series of management meetings, the CEO answers every operational question by handing off to the CFO, who answers most numbers questions by referring back to "the team." What does this pattern signal?',
    'Possible operational distance — the leadership team may not own the numbers or the operations at the depth a PE owner expects; sponsors look for executives who can answer their own discipline\'s questions on the fly without constant hand-offs',
    [
      ['Healthy delegation — strong CEOs always defer to specialists', 'Specialist deference is fine for technical detail, but a CEO who cannot speak to their own operations or a CFO who cannot speak to their own numbers is a different signal — and PE sponsors notice it.'],
      ['Normal — first meetings are always cautious', 'A pattern across multiple meetings is not "first-meeting caution." Sponsors discount the first session and watch for the pattern that follows.'],
      ['Strong governance — the CEO is empowering the team', 'Empowerment looks different from constant hand-offs. The pattern described is closer to "the principals do not own the answer," which is what gets flagged.'],
    ],
    'Hand-off patterns across multiple meetings can signal that the principals are reciting a script rather than running the business. Sponsors weight this heavily because the deal\'s value creation depends on the team executing post-close.'),

  q(4390225, 'Career Skills', CHAPTER, 'Management presentation green flags',
    'The CFO walks the deal team through her own working capital model, explains why the Q3 dip in collections happened, names the customer involved, and shows how she fixed the process. What is this?',
    'A strong signal — specificity, ownership, and process improvement are the green flags PE looks for; a CFO who knows her own numbers at the customer level and can describe what she changed is the operating profile sponsors back',
    [
      ['Neutral — every CFO is supposed to know their numbers', 'In practice, many CFOs in mid-market targets cannot name the customer behind a working capital swing. When one does, sponsors treat it as a meaningful signal.'],
      ['Concerning — the CFO is too operationally involved', 'PE wants operationally involved CFOs at this size. The complaint at larger scale might be different, but for mid-market the deeper the better.'],
      ['Concerning — naming customers in a meeting is a data privacy issue', 'Customer names are routine in diligence and protected by the NDA. Naming a customer to explain a number is appropriate, not a problem.'],
    ],
    'Green flags in management meetings are specificity, ownership, and visible process improvement. A CFO who can describe a swing at the customer level and walk through the fix is the kind of executive who survives the PE operating cadence.'),

  // -------------------------------------------------------------------------
  // Background checks, R&W, IT, environmental, HR (4390226–4390237)
  // -------------------------------------------------------------------------
  q(4390226, 'Career Skills', CHAPTER, 'Background check scope',
    'A sponsor commissions D&B and Kroll background checks on the target\'s top five executives. What does each provider typically deliver, and why use both?',
    'D&B provides business credit, litigation, and entity-level credit history; Kroll runs individual-level deep-dive checks (criminal, civil litigation, regulatory, media, reputational) — sponsors use both because the entity check and the person check answer different questions',
    [
      ['They overlap entirely — using both is redundant insurance', 'They do not overlap entirely. Entity-level credit (D&B) and individual-level reputational diligence (Kroll) are different products serving different parts of the diligence file.'],
      ['Kroll is for international deals only', 'Kroll runs domestic US executive background work routinely. The product is not geography-defined.'],
      ['Background checks are only run after closing', 'Background checks are pre-close diligence inputs. Discovering an undisclosed litigation history after closing is exactly what the pre-close check exists to prevent.'],
    ],
    'D&B and Kroll cover different surfaces — entity credit and individual reputation. Sponsors run both because executive risk and entity risk are not the same risk, and either can sink the deal if missed.'),

  q(4390227, 'Career Skills', CHAPTER, 'R&W insurance and diligence depth',
    'A deal will use representations and warranties (R&W) insurance, which shifts post-close indemnity from the seller to an insurer. How does this affect the diligence plan?',
    'Diligence depth must increase, not decrease — the insurer underwrites the policy based on the buyer\'s diligence file and will exclude any area where diligence was thin; sponsors who treat R&W as a license to do less find their coverage carve-outs on the very risks they wanted insured',
    [
      ['Reduced — R&W transfers risk to the insurer so diligence can be lighter', 'That is exactly the mistake the policy exclusions are designed to catch. Insurers carve out anything that was not diligenced, so thin diligence produces thin coverage.'],
      ['Unchanged — R&W is purely a contractual mechanism', 'R&W is a contractual mechanism that depends on a diligence record. The insurer reviews the diligence file and prices and scopes the policy off it.'],
      ['Diligence becomes optional because the insurer assumes all risk', 'Insurers do not assume undiligenced risk. The policy is for surprises despite diligence, not for risks the buyer skipped.'],
    ],
    'R&W insurance is a discipline multiplier, not a discipline substitute. Insurers price and scope coverage off the diligence record — sponsors who under-diligence in reliance on the policy end up with the worst of both worlds.'),

  q(4390228, 'Career Skills', CHAPTER, 'SOC 2 Type I versus Type II',
    'A SaaS target produces a SOC 2 Type I report dated three months ago. IT diligence flags it. Why?',
    'Type I attests to controls at a point in time; Type II attests to operating effectiveness over a 6–12 month window — sponsors expect Type II for any company with enterprise customers because Type I does not prove the controls actually worked',
    [
      ['The report is too recent — older reports are more credible', 'Newer reports are not the problem; the problem is Type I versus Type II. A current Type II would be ideal; a current Type I is not the same product.'],
      ['SOC 2 is the wrong framework — they should have ISO 27001', 'SOC 2 is the standard US framework for service organizations. The issue is the type, not the framework.'],
      ['SOC 2 reports are only marketing documents', 'SOC 2 reports are independent attestations and are taken seriously by enterprise buyers and PE diligence alike. Dismissing them misreads the market.'],
    ],
    'Type I and Type II are different products. Type I is a snapshot; Type II is a period-of-time test. Enterprise SaaS targets are expected to have Type II — finding only a Type I is a flag, not because security is bad but because operating effectiveness has not been independently demonstrated.'),

  q(4390229, 'Career Skills', CHAPTER, 'ISO 27001 scope traps',
    'A target says it is "ISO 27001 certified." IT diligence asks for the certificate. What is the question to actually ask?',
    'What is the scope of certification — which entities, locations, products, and information assets are covered — because ISO 27001 certificates can cover a narrow slice of the business and still be advertised as "certified"',
    [
      ['Whether the certificate is signed by the right auditor', 'The auditor matters less than the scope. A real accredited body can certify a 50-person carve-out of a 5,000-person company.'],
      ['Whether the certificate is older than 12 months', 'ISO 27001 certificates are valid for three years with annual surveillance audits. Age is not the right question.'],
      ['Whether the company also has SOC 2', 'Having both is nice, but the immediate diligence question is the scope of what they claim to have, not whether they have a different framework as well.'],
    ],
    'ISO 27001 scope can be narrow — one product, one office, one team. A "certified" claim that covers 10% of the business is technically true and substantively misleading. Diligence reads the scope page of the certificate before reading anything else.'),

  q(4390230, 'Career Skills', CHAPTER, 'Penetration test cadence',
    'A target shares a single penetration test report from 18 months ago, run by an internal team. IT diligence flags this. Why?',
    'Industry practice is at least annual third-party pen tests with prior tests re-tested for remediation; one 18-month-old internal test fails on independence, cadence, and remediation tracking — three different controls in one finding',
    [
      ['Penetration tests are only required for regulated industries', 'Pen testing is standard practice across enterprise SaaS and most B2B targets. PE diligence expects it regardless of regulatory status.'],
      ['Internal pen tests are stronger than external ones because the team knows the system', 'Internal teams know the system but lack the independence that buyers and customers care about. The market norm is annual external testing.'],
      ['18 months is recent enough — pen tests are valid for three years', 'There is no three-year validity. Annual cadence is the working norm and most enterprise customers require it.'],
    ],
    'Annual third-party pen tests, with documented remediation, are the working standard. A single, old, internal test is three controls weak at once — and a real signal about overall security operating maturity.'),

  q(4390231, 'Career Skills', CHAPTER, 'Phase I ESA trigger',
    'You are diligencing a metals fabricator with two owned facilities. Should a Phase I Environmental Site Assessment be run?',
    'Yes — Phase I ESAs are standard practice for owned or leased real estate in any deal with industrial operations, because they establish the CERCLA innocent-landowner defense and identify recognized environmental conditions before closing',
    [
      ['No — ESAs are only needed for chemical or oil and gas companies', 'Metals fabrication generates exactly the kinds of soil and groundwater concerns ESAs are designed to surface. The scope of who needs one is much broader than "chemicals and oil."'],
      ['No — sellers always run ESAs themselves and provide them to buyers', 'Even when a seller provides an ESA, the buyer typically commissions its own to control scope and rely on it under the CERCLA framework. Reliance letters do not always transfer.'],
      ['Only if there are recognized environmental conditions already on record', 'Phase I exists precisely to discover whether such conditions exist. Waiting until they are "already on record" defeats the purpose.'],
    ],
    'Phase I ESAs are routine for any deal with owned or leased industrial property. They establish the CERCLA defense, document the site, and decide whether a Phase II is needed — skipping them at acquisition can leave the buyer holding contamination liability post-close.'),

  q(4390232, 'Career Skills', CHAPTER, 'Phase II ESA escalation',
    'A Phase I ESA finds a recognized environmental condition (REC) — a former underground storage tank on a prior-use site. What is the next step?',
    'Commission a Phase II ESA — soil and groundwater sampling at the REC location — and re-price or restructure the deal based on findings, potentially with seller indemnity, escrow, or environmental insurance to cover identified risk',
    [
      ['Proceed to closing — Phase I is the only ESA required by law', 'There is no law that mandates either Phase I or Phase II per se; the choice is risk management. Once a REC is identified, ignoring it and closing leaves the buyer holding contamination risk.'],
      ['Renegotiate price downward and skip Phase II to save time', 'Without Phase II data, the price adjustment is a guess. Sponsors run the sampling so they know what they are pricing.'],
      ['Walk from the deal — any REC is disqualifying', 'Many deals close with identified RECs handled through indemnity, escrow, or environmental insurance. RECs are managed, not automatically deal-killing.'],
    ],
    'A Phase I REC triggers Phase II sampling. The combination produces a quantified contamination risk that can be priced, indemnified, escrowed, or insured — and that informs whether the deal economics still work.'),

  q(4390233, 'Career Skills', CHAPTER, 'HR diligence 401(k) compliance',
    'HR diligence on a 350-employee target finds the 401(k) plan failed the actual deferral percentage (ADP) nondiscrimination test for two of the last three years. Why does the buyer care?',
    'Failed ADP tests require corrective distributions or QNECs, can trigger IRS penalties under ERISA, and may create successor-employer exposure for the buyer — the cost of remediation and ongoing compliance becomes the buyer\'s problem absent specific indemnity',
    [
      ['Irrelevant — 401(k) compliance is the seller\'s pre-close issue', 'Successor liability under ERISA can follow the plan into the new structure. The buyer does not get an automatic pass just because the failures pre-date the close.'],
      ['Failed ADP tests are routine and have no real consequence', 'They are not routine, and the remediation costs (corrective distributions, lost-earnings calculations, IRS penalties) are real numbers in real diligence.'],
      ['The buyer should terminate the plan immediately to avoid liability', 'Plan termination has its own ERISA mechanics and does not erase pre-close compliance failures. The fix is usually indemnity and a corrective filing, not termination.'],
    ],
    'Failed ADP nondiscrimination tests are real ERISA exposure that flows with the plan. HR diligence identifies them so the buyer can negotiate indemnity, escrow, or a clean fix — not so the issue can be ignored.'),

  q(4390234, 'Career Skills', CHAPTER, 'Multi-employer pension plan withdrawal liability',
    'A target with a unionized workforce contributes to a multi-employer pension plan (MEPP). Why is this potentially deal-altering?',
    'The buyer can inherit withdrawal liability — the target\'s allocated share of the plan\'s unfunded vested benefits — which can be a multiple of annual contributions and is a balance-sheet-sized number that frequently surprises sponsors who have not done MEPP diligence',
    [
      ['MEPPs are stable defined-benefit plans with no real risk', 'Many MEPPs are significantly underfunded, and withdrawal liability under ERISA Title IV can run into eight or nine figures even for mid-market employers.'],
      ['Withdrawal liability only applies if the buyer withdraws after close', 'Withdrawal liability can be triggered by deemed withdrawals, asset sales, and structure changes — not only by explicit withdrawal. Diligence has to map the triggers.'],
      ['Unionized workforces always come with MEPPs and it is not a buyer issue', 'Some unionized workforces are in single-employer plans, others in MEPPs. The MEPP exposure is specific, sizeable, and very much a buyer issue.'],
    ],
    'MEPP withdrawal liability can be one of the largest contingent obligations in a unionized target and is frequently missed in initial pricing. Sponsors who buy without quantifying it are buying a balance-sheet-sized surprise.'),

  q(4390235, 'Career Skills', CHAPTER, 'Severance stack and change-of-control',
    'HR diligence finds that the top eight executives have change-of-control severance equal to 2x base plus bonus, with accelerated vesting on RSUs. What is the diligence response?',
    'Quantify the total stack as a debt-like item in the net debt bridge, pressure-test whether the change of control will trigger at closing, and decide whether to renegotiate retention packages with executives the sponsor wants to keep',
    [
      ['Ignore — change-of-control packages are standard and not material', 'They are common but rarely immaterial. Eight executives at 2x base plus bonus plus accelerated equity is a real number that belongs in the bridge.'],
      ['Strike the change-of-control provisions before closing', 'Striking signed contracts unilaterally is not a remedy; renegotiation with the executives is. The diligence step is to size and plan, not to delete by fiat.'],
      ['Pay all severance at close to clear the deck', 'Severance pays out on qualifying terminations, not at close just for convenience. Paying anyway either insults the team you want to keep or rewards the team you want to lose.'],
    ],
    'Change-of-control severance and acceleration are real dollars and a real retention issue. Diligence sizes the stack, decides who the sponsor wants to keep, and negotiates new packages where the existing ones create misalignment.'),

  q(4390236, 'Career Skills', CHAPTER, 'Union exposure and NLRA risk',
    'A US manufacturing target has 60% of its workforce represented by the USW, with a CBA expiring eight months after expected closing. What is the diligence focus?',
    'Map upcoming CBA negotiations, wage and benefit trends in comparable contracts, grievance and unfair-labor-practice history, the union\'s posture on PE ownership, and the WARN Act exposure of any contemplated headcount actions',
    [
      ['Union exposure is the seller\'s problem until close, not a diligence focus', 'The CBA, grievance trajectory, and bargaining posture all transfer with the business. Pretending it is the seller\'s problem just defers discovery to the worst possible moment.'],
      ['Plan to break the union post-close to capture cost savings', 'Decertification under the NLRA is heavily regulated and rarely succeeds; planning a thesis around it is not a credible sponsor approach and exposes the deal to NLRB charges.'],
      ['Demand the seller renegotiate the CBA before signing', 'Sellers do not reopen CBAs at the buyer\'s request, and unions do not bargain with non-owners. Diligence is preparation for what the buyer will inherit, not a wishlist for the seller.'],
    ],
    'Union diligence covers the live CBA, the upcoming negotiation, the grievance and ULP record, and any WARN-triggering plans. Sponsors who skip it discover the cost of labor at the bargaining table, which is the worst possible time.'),

  q(4390237, 'Career Skills', CHAPTER, 'EEO-1 and adverse-impact patterns',
    'HR diligence pulls EEO-1 reports and notices that promotion rates differ sharply by protected class across multiple years. What is the buyer\'s exposure?',
    'Potential adverse-impact claims under Title VII and OFCCP scrutiny if the target is a federal contractor; the buyer inherits any pending or latent claims as a successor and should size remediation cost, indemnity scope, and the practical fix',
    [
      ['EEO-1 reports are public filings and disclose nothing actionable', 'EEO-1 demographic data is the data set adverse-impact analysis is built on. Patterns in it are exactly what plaintiffs\' counsel and the EEOC look at.'],
      ['Title VII claims expire on the change of control', 'They do not. Successor liability is well established for employment discrimination claims; the buyer inherits them along with the workforce.'],
      ['This is irrelevant to the diligence file', 'EEO patterns are part of standard HR diligence in any US deal with hundreds of employees. They affect indemnity scope, R&W exclusions, and post-close remediation budgets.'],
    ],
    'EEO-1 patterns can be a leading indicator of Title VII exposure. PE buyers inherit pending and latent employment claims under successor-liability doctrines, which is why HR diligence in US deals reads the EEO file carefully.'),

  // -------------------------------------------------------------------------
  // Diligence budget, sequencing, IC outputs (4390238–4390240)
  // -------------------------------------------------------------------------
  q(4390238, 'Career Skills', CHAPTER, 'Diligence budget for a mid-market deal',
    'You are building the diligence budget for a $250M EV LBO. The deal team is asked for an all-in third-party diligence cost. What range is realistic in current US mid-market practice?',
    'Roughly $1.5M–$4M depending on workstream count and complexity — typical breakdown: QoE $300–600K, CDD $500–900K, legal $250–500K, IT $100–250K, environmental and HR $100–300K combined, plus tax and ESG',
    [
      ['Around $100K — diligence is mostly internal work', 'Internal hours are not the budget line. Third-party diligence on a $250M EV deal is comfortably in the seven-figure range across providers.'],
      ['$10M+ — sponsors spend the entire fee budget on diligence', 'Diligence budgets at $250M EV are large but not that large. $10M is more consistent with very large or unusually complex deals.'],
      ['$500K total — same as a small bolt-on acquisition', 'A small bolt-on might run in the high six figures; a platform LBO at this scale runs higher because more workstreams need specialist providers.'],
    ],
    'Mid-market US PE diligence runs roughly $1.5M–$4M all-in depending on workstreams and complexity. Sponsors who underspend tend to discover the savings at IC or post-close; sponsors who overspend without scoping waste capital on duplicated providers.'),

  q(4390239, 'Career Skills', CHAPTER, 'Confirmatory diligence post-LOI sequencing',
    'The sponsor has signed the LOI with 45 days of exclusivity. How should confirmatory diligence be sequenced?',
    'Week 1 kicks off CDD and QoE in parallel with management meetings and site visits; weeks 2–4 deliver interim findings and define open items; weeks 4–5 close out legal, R&W, environmental, HR, and IT; final reports and red flag log delivered before IC',
    [
      ['Do everything in week 4 once the data room is fully populated', 'Data rooms are populated iteratively. Waiting for "complete" data means starting too late and running out of clock.'],
      ['Spend the first 30 days on legal and the last 15 days on commercial', 'CDD needs the longest interview runway. Putting it at the end means delivering a thin commercial finding to IC.'],
      ['Run sequential workstreams to keep the budget low', 'Sequential workstreams do not fit in 45 days. Mid-market confirmatory diligence is inherently parallel.'],
    ],
    'Confirmatory diligence runs in parallel inside the exclusivity window. The cadence is kick-off in week 1, interim findings by week 3, closeout by week 5, with a red flag log delivered to IC. Anything slower and the calendar wins.'),

  q(4390240, 'Career Skills', CHAPTER, 'Red flag report and IC diligence questions',
    'You are pulling together the IC pre-read. What is the right way to use the red flag report from the diligence providers?',
    'Translate the red flag log into the top 5–8 IC diligence questions that the deal team has positions on — each with a finding, a quantification, a mitigation, and a residual risk — so the IC debate is structured around the risks the deal actually has',
    [
      ['Attach the full red flag report as an appendix and let the IC read it', 'IC members do not have time to read every appendix. A diligence team that does not synthesize and prioritize is asking IC to do the deal team\'s job.'],
      ['Remove the red flag report so IC focuses on the positives', 'Hiding flags from IC destroys the deal team\'s credibility and the firm\'s decision-making process. IC exists to hear and price risk, not to be sheltered from it.'],
      ['Convert every red flag into a price reduction request to the seller', 'Some flags become price; others become indemnity, escrow, or post-close action. Treating every flag as a price ask is the lowest-leverage use of the work.'],
    ],
    'The red flag report is raw material; the IC pre-read is the synthesis. Sponsors who turn diligence findings into structured IC questions — finding, quantification, mitigation, residual risk — are the ones who use diligence to make better decisions, not just to fill a binder.'),
]
