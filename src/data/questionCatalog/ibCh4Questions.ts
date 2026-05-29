import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// IB CHAPTER 4 — M&A and Capital Markets Materials
// ----------------------------------------------------------------------------
// 41 additional questions (IDs 4351300–4351340) deepening the existing 9-question
// Chapter 4 set in careerAgentGeneratedRoadmapFinance.ts (4103012, 4103013,
// 4105071, 4107327, 4107800, 4107796, 4107791, 4340020, 4340021).
//
// The earlier 9 cover the procedural basics (IOIs, WC peg, synergy haircut,
// exclusivity, antitrust, synergy multiple separation, forecast drift,
// accretion/dilution direction, sources & uses). These 41 dig into the
// chapter's harder muscles — deal materials structure (CIM, teaser, MP
// rhythm), buyer outreach mechanics (tiered lists, strategic-vs-financial
// mix), the IOI -> LOI -> definitive progression, stapled financing,
// fairness opinions, accretion/dilution mechanics beyond direction, PPA
// basics, synergy presentation, regulatory approvals (HSR, FTC, FCC),
// consideration mix and collars, and the capital markets workbook (IPO,
// follow-on, block trade, convertible bond mechanics, HY vs IG, syndicated
// loans, league tables, ECM vs DCM vs M&A analyst day-to-day).
//
// Voice anchors on jargonBusters.ts. Each wrong answer is a bespoke
// whyWrong reflecting a real junior-banker failure mode — never the
// generic "this is too vague" filler. US context throughout: Reg S-K,
// Reg S-X, Securities Act, FINRA, HSR, FCC, no UK or EU specifics.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe IB Ch4 canonical bank'

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

const CHAPTER = 'M&A and Capital Markets Materials'

// Difficulty distribution target: ~12 at 3, ~21 at 4, ~8 at 5 (41 total).
export const IB_CH4_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Block A — Deal materials (CIM, teaser, MP) — 8 Qs (4351300–4351307)
  4351300: 3, // CIM section structure
  4351301: 3, // Teaser purpose and contents
  4351302: 4, // What goes in the financial section of a CIM
  4351303: 4, // Management presentation rhythm
  4351304: 3, // Confidentiality discipline in the CIM
  4351305: 4, // Adjusted-EBITDA bridge inside the CIM
  4351306: 4, // CIM growth section vs honest forecasting
  4351307: 5, // Teaser pricing language and "no-price" discipline

  // Block B — Buyer outreach mechanics — 6 Qs (4351308–4351313)
  4351308: 3, // Tiered buyer list construction
  4351309: 4, // Strategic vs financial mix
  4351310: 4, // Outreach sequencing (who gets called first)
  4351311: 4, // Sequenced data room access by tier
  4351312: 5, // Handling a strategic that competes with the seller's customer
  4351313: 3, // Why a no-shop / lookback differs from exclusivity

  // Block C — IOI -> LOI -> definitive agreement — 5 Qs (4351314–4351318)
  4351314: 4, // What changes between IOI and LOI
  4351315: 4, // LOI exclusivity and break provisions
  4351316: 5, // Definitive agreement reps and MAC carveouts
  4351317: 4, // R&W insurance and where it lands
  4351318: 3, // Stapled financing — what it is and who pays

  // Block D — Fairness opinion and board books — 4 Qs (4351319–4351322)
  4351319: 3, // When a fairness opinion is required
  4351320: 4, // What a fairness opinion actually covers
  4351321: 4, // Board book fairness-analysis components
  4351322: 5, // Conflicts and second fairness opinions

  // Block E — Accretion/dilution math beyond direction — 4 Qs (4351323–4351326)
  4351323: 4, // Cash vs stock impact on EPS bridge
  4351324: 4, // Synergy phasing in the EPS bridge
  4351325: 5, // Break-even synergy calculation
  4351326: 3, // Purchase price allocation basics

  // Block F — Consideration mix and collars — 3 Qs (4351327–4351329)
  4351327: 4, // Cash vs stock vs mixed consideration tradeoffs
  4351328: 4, // Fixed vs floating exchange ratio
  4351329: 5, // Collars: caps, floors, and walk-away rights

  // Block G — Regulatory approvals — 2 Qs (4351330–4351331)
  4351330: 4, // HSR timing and the FTC second request
  4351331: 4, // Industry regulators (FCC telecom, FERC energy)

  // Block H — Capital markets — IPO, follow-on, block — 5 Qs (4351332–4351336)
  4351332: 3, // S-1 process and the SEC review
  4351333: 4, // Roadshow and bookbuilding mechanics
  4351334: 4, // IPO pricing and the greenshoe
  4351335: 3, // Follow-on vs block trade
  4351336: 4, // Lock-up expiry and timing of follow-ons

  // Block I — Debt and convertibles — 3 Qs (4351337–4351339)
  4351337: 4, // Convertible bond mechanics: conversion ratio + call protection
  4351338: 4, // Mandatory vs traditional convertibles
  4351339: 3, // High-yield vs investment-grade markets

  // Block J — League tables and analyst day-to-day — 1 Q (4351340)
  4351340: 3, // League tables: what counts and sole vs joint bookrunner economics
}

export const ibCh4Questions: Question[] = [
  // -------------------------------------------------------------------------
  // BLOCK A — Deal materials (CIM, teaser, management presentation)
  // -------------------------------------------------------------------------
  q(4351300, 'Career Skills', CHAPTER, 'CIM section structure',
    'You are drafting the table of contents for a sell-side CIM for a $200M-revenue specialty chemicals business. Which section ordering is the standard a buyer expects to see?',
    'Executive summary, investment highlights, company overview, products and customers, industry and market, growth strategy, management, historical and projected financials, appendices',
    [
      ['Financials first, then everything else, because buyers only really care about the numbers', 'Buyers actually triage CIMs by reading the executive summary and investment highlights first; financials come after the qualitative case because the qualitative case sets up the multiple they are willing to pay.'],
      ['Risks and legal disclosures at the front so the buyer sees them before anything else', 'CIMs put risks in the diligence track, not the front matter. Leading with risks is how a sell-side banker telegraphs that the deal does not have a story — buyers read it as defensive.'],
      ['Management team first, since the buyer is really buying the people in a mid-market deal', 'Management matters but does not lead the CIM. The standard order anchors the buyer on the *business* first; management lands closer to the back because the question by then is "who runs this thing we just decided we like".'],
    ],
    'The CIM ordering exists because it walks the buyer up the funnel — story, business, market, growth, people, numbers, footnotes. Senior bankers will redline a deck that puts financials before the qualitative case or risks at the front, every time.'),

  q(4351301, 'Career Skills', CHAPTER, 'Teaser purpose and contents',
    'You are writing the one-page blind teaser for the same sell-side process. The banker asks: "What goes on this page and what stays off?" Which framing is correct?',
    'High-level business description (industry, geography, customer type), key financial metrics (revenue, EBITDA, growth), transaction overview, and process contact — but no company name, no customer names, and no sensitive financials that could identify the seller before NDA',
    [
      ['Same content as the CIM but compressed to one page, including company name and full P&L', 'The teaser is *blind* by definition. Putting the company name on it before NDA defeats the purpose; junior bankers do this once and never again after they get caught.'],
      ['Just the financials in a clean table, since the rest is in the CIM anyway', 'A teaser that is purely numbers will not get an NDA back. The buyer needs enough qualitative hook to decide whether the company is worth signing for — pure metrics without context is a non-starter.'],
      ['As much detail as possible to maximize the number of NDAs returned', 'More detail does not produce more NDAs; it produces more leakage. The teaser is an invitation, not a substitute for diligence.'],
    ],
    'A teaser is the smallest possible deal artifact that still generates a real NDA. Blind-but-specific is the discipline — enough to interest a real buyer, not so much that the company is identifiable to a competitor reading it cold.'),

  q(4351302, 'Career Skills', CHAPTER, 'CIM financial section composition',
    'In the financial section of the CIM, which assemblage of exhibits does a buyer expect to actually use during preliminary diligence?',
    'Three years of historical P&L and balance sheet, normalized adjusted-EBITDA bridge with footnoted adjustments, segment or product P&L if material, and a management forecast with explicit revenue and margin assumptions',
    [
      ['Five years of GAAP-only financials and nothing else, since adjustments are buyer-side work', 'Sell-side CIMs always present the seller\'s adjusted-EBITDA story. Forcing the buyer to discover normalizations from scratch wastes process time and signals the seller has not done the QoE prep.'],
      ['A single page summary because detailed financials are reserved for the data room', 'Detailed financials live in the data room, but the CIM still carries a serious financial section — three years of statements, the EBITDA bridge, and the forecast. A one-pager would not survive a real IOI request.'],
      ['Twenty years of audited financials so the buyer can see the long-term track record', 'Buyers care about the trailing three years and the forward forecast. Twenty years of history is irrelevant to the underwriting model and signals the banker did not curate the section.'],
    ],
    'The CIM financial section is where the seller\'s "quality of earnings story" lives — historical statements, the adjusted-EBITDA bridge with sourced add-backs, and a forecast with explicit drivers. Anything thinner does not produce real IOIs; anything fatter is data-room material.'),

  q(4351303, 'Career Skills', CHAPTER, 'Management presentation rhythm',
    'Management presentations begin in the second round of a sell-side process. How should the rhythm of a single MP day be structured for a serious strategic buyer?',
    'Two hours of management presentation (CEO and CFO leading), one hour of buyer Q&A, one hour facility tour or product demo, and a closed banker-only debrief after the buyer leaves to capture signal and follow-up questions',
    [
      ['Full day of presentation with the entire management team running every slide so nothing is missed', 'Buyers tune out after ninety minutes of pure slides. Real MP days mix presentation with Q&A and a tour because that is how the buyer actually evaluates the team.'],
      ['Short 30-minute presentation followed by an open-ended chat over lunch', 'A 30-minute presentation does not cover the business at the depth a strategic buyer needs before submitting a final bid. The MP is the buyer\'s one chance to test the team — it has to be substantive.'],
      ['Two days of back-to-back content with no banker-only debrief in between', 'Skipping the debrief is the bigger error — the banker\'s job is to capture what the buyer asked and how management answered. Without the debrief there is no read on the buyer\'s real conviction.'],
    ],
    'A well-run MP day is a structured choreography: presentation, Q&A, tour, debrief. The debrief in particular is where the banker captures signal — which questions the buyer asked, where management was strong, where they were weak — and feeds it into the next-round read.'),

  q(4351304, 'Career Skills', CHAPTER, 'CIM confidentiality discipline',
    'A buyer\'s NDA has been signed and the CIM is being sent. Which redaction discipline applies inside the CIM itself for a process where the seller has 3 top customers representing 38% of revenue?',
    'Name customers generically (e.g. "Customer A: global beverage manufacturer, 18% of revenue") and reveal real names only at the LOI stage in a separate customer-concentration appendix gated by an additional confidentiality covenant',
    [
      ['Name customers fully in the CIM since the NDA covers everything', 'Standard NDAs cover the existence of the process and the CIM contents but rarely deal cleanly with the situation where the buyer is a competitor of the customer. Generic naming protects against the worst case at almost zero cost.'],
      ['Omit customer concentration entirely until definitive agreement signing', 'Omitting concentration entirely is also wrong — concentration is one of the things that drives the multiple and the buyer needs to underwrite it. Tier the disclosure, do not zero it out.'],
      ['Disclose names but only revenue ranges (e.g. "10–20%") to provide cover', 'Buyers see through revenue ranges immediately when the customer is named — a named global beverage manufacturer with an obvious volume is identifiable. The right move is the inverse: identify the *type* and reveal the *amount* precisely.'],
    ],
    'Confidentiality in deal materials is a tiering exercise, not an on-off switch. Generic at CIM stage, named at LOI stage with additional covenants, full data-room access at definitive — the gradient is how serious sellers protect competitively sensitive information without starving the process of real diligence.'),

  q(4351305, 'Career Skills', CHAPTER, 'Adjusted-EBITDA bridge inside the CIM',
    'Management hands you a list of EBITDA adjustments for the CIM: $4M owner compensation above market, $2M one-time legal settlement, $5M "growth investments" with no detail, $1M severance from a 2024 reorg, and $3M of "expected synergies a buyer would capture". Which set belongs in the published adjusted-EBITDA bridge?',
    'Owner compensation normalization, legal settlement, and severance — accept the first three with proper footnotes; reject growth investments as undefined and reject pre-claimed buyer synergies as not the seller\'s to take',
    [
      ['All five adjustments because management knows the business and the buyer can negotiate down later', 'Including the $5M growth investment line with no detail invites the buyer\'s QoE firm to throw out the entire bridge. One bad adjustment poisons the credibility of the good ones.'],
      ['Only the owner compensation and legal settlement because all other items are too soft', 'Severance from a documented 2024 reorganization is a defensible nonrecurring item — excluding it gives away real EBITDA the seller is entitled to recognize. The discipline is to accept the documented items and reject the undocumented ones, not to be uniformly conservative.'],
      ['All adjustments except the synergies, since buyer synergies are obviously not the seller\'s', 'The synergy line is clearly wrong, but the $5M undefined "growth investments" line is the bigger credibility problem — undocumented add-backs are exactly what buyer QoE firms strip out first, and including one undermines the others.'],
    ],
    'The adjusted-EBITDA bridge in the CIM is where the seller\'s credibility is set. Accept the items that are documented and nonrecurring; reject the undocumented ones and the synergies that belong to the buyer. The discipline is selective acceptance, not maximalism.'),

  q(4351306, 'Career Skills', CHAPTER, 'CIM growth section vs honest forecasting',
    'The CEO wants the CIM growth section to show 25% revenue CAGR through year five, but the company has historically grown 10–12% and the 25% number requires three new product launches and entry into two new geographies. How should the banker handle this in the CIM?',
    'Present the base case at a defensible CAGR close to historical with explicit drivers, then show the upside case (25%) separately with the specific new-product and geographic-expansion assumptions called out — let the buyer underwrite the upside themselves rather than embedding it in the base',
    [
      ['Put the 25% number in the base case because that is what management believes', 'A base case that is more than double the historical run-rate will not survive buyer QoE. Buyers strip aggressive assumptions out and re-price; the seller ends up with a lower bid than if the base had been credible to start with.'],
      ['Refuse to include the 25% number at all because it is not historically supported', 'Refusing the upside entirely also leaves money on the table — strategic buyers genuinely pay for credible upside cases. The discipline is *how* the upside is presented, not whether.'],
      ['Average the historical 11% and management\'s 25% to present a single 18% case', 'Averaging is the worst of both — it neither matches the historical run-rate (so buyers will strip it) nor isolates the upside drivers (so buyers cannot credit it). Honest forecasting separates base from upside, not blends them.'],
    ],
    'The growth section of a CIM is a two-case structure: a base case the buyer\'s model can accept at face value, and an upside case with named drivers the buyer can underwrite or discount as they choose. Burying the upside in the base loses both credibility and price.'),

  q(4351307, 'Career Skills', CHAPTER, 'Teaser pricing language and no-price discipline',
    'A junior banker drafts a teaser that states "Indicative valuation in the range of $400–500M". Should the price be on the teaser, and if not, what is the right replacement language?',
    'No price on the teaser — replace with "Process intended to identify a value-maximizing transaction for shareholders" or similar, because pricing on the teaser caps the upside at the stated number and signals weakness if a buyer comes in above',
    [
      ['Yes, include the price range so buyers self-select and do not waste the seller\'s time', 'Price filtering on a teaser is a false economy. Buyers who would have come in above the range now anchor at the top of it; buyers who would have come in below skip the process entirely. Both effects compress the outcome.'],
      ['Yes, but state only a floor (e.g. "minimum $400M") to set a hard threshold', 'A stated floor is the worst variant — it tells buyers the seller has a price in mind they will accept, which becomes a magnet for bids at exactly that floor. Floors are what reserve prices in auctions are for, not teasers.'],
      ['No price on the teaser, but include the EBITDA so buyers can back into a range themselves', 'EBITDA is fine on a teaser; what is at issue is the *banker-stated valuation*. The point of no-price discipline is that the seller never voluntarily anchors the buyer — the multiple emerges from the process.'],
    ],
    'No-price discipline on the teaser is a small detail that signals process sophistication. The seller never anchors a buyer with a stated price; the buyer\'s IOI is the first time a number gets attached to the deal, and only the buyer\'s number, not the banker\'s.'),

  // -------------------------------------------------------------------------
  // BLOCK B — Buyer outreach mechanics
  // -------------------------------------------------------------------------
  q(4351308, 'Career Skills', CHAPTER, 'Tiered buyer list construction',
    'You are building the buyer list for the same sell-side. Which tiering structure should the list use, and what determines tier placement?',
    'Tier 1 (high-conviction strategics and sponsors with portfolio fit), Tier 2 (plausible strategics and sponsors with stretch fit), Tier 3 (broader outreach for process tension) — tier placement based on strategic rationale, financial capacity, and prior-deal activity in the space',
    [
      ['Single-tier list ordered alphabetically so no buyer is favored', 'Alphabetical order is not a tier; it is a way of avoiding the prioritization decision. Sell-side processes need tiers because tier-1 buyers get earlier and more sensitive access than tier-3 buyers.'],
      ['Two tiers: financial buyers in tier 1 and strategic buyers in tier 2', 'Tiering by buyer *type* (strategic vs financial) is a different decision than tiering by *fit*. A second-tier strategic with weak rationale should not be ahead of a top-tier sponsor with strong portfolio fit.'],
      ['One tier for invited buyers and one for buyers contacted only if first tier passes', 'A go/no-go gate between tiers is too rigid — real processes run multiple tiers concurrently, just with sequenced data-room access. Hard gating loses time and competitive tension.'],
    ],
    'Buyer-list tiering is a fit-based exercise, not an alphabetical or buyer-type one. The tiers determine sequencing, data-room access, and management-time allocation — get the tiers wrong and the rest of the process is misallocated.'),

  q(4351309, 'Career Skills', CHAPTER, 'Strategic vs financial mix',
    'You are recommending the strategic-vs-financial buyer mix for the sell-side. The company is a $62M-EBITDA specialty industrial distributor, family-owned, in a sector with active sponsor consolidation. What is the right mix and rationale?',
    'Run a mixed process — include 8–12 high-fit strategics and 10–15 sponsors with sector experience, because the strategic-vs-financial tension is itself the lever that pushes pricing, and a mixed process preserves optionality on deal structure (rollover, partnership) the family seller may want',
    [
      ['Strategics only, because synergies always produce the highest price', 'A strategics-only process tells sponsors the deal is not for them and removes the price tension a credible sponsor process creates. Strategics also often offer worse certainty of close and worse rollover optionality, which can matter to a family seller.'],
      ['Sponsors only, because strategics will leak the process to the market', 'Strategic leak risk is real but manageable through NDA discipline and tiering. Excluding strategics entirely sacrifices the synergy premium that often sets the ceiling of the price range.'],
      ['Sponsors only initially, then add strategics in round two if the price is weak', 'Sequential strategic outreach starting late is worse than not running them at all — by round two the data room and management time are already consumed, and strategics need the same diligence runway as sponsors.'],
    ],
    'Mixed processes win because the strategic-vs-financial tension is what produces price discovery. Strategics carry synergy premium and worse certainty; sponsors carry less premium and better certainty plus rollover. A serious seller wants both lines pulling against each other at the final round.'),

  q(4351310, 'Career Skills', CHAPTER, 'Outreach sequencing — who gets called first',
    'You are about to launch the buyer list. Forty-five contacts across the three tiers. What is the sequencing discipline for the first 48 hours of outreach?',
    'Tier 1 strategics and sponsors first (calls from a senior banker), Tier 2 within the same day via teaser email, Tier 3 within 48 hours by teaser email — all tiers receive the teaser within two business days so no buyer feels they were notified late',
    [
      ['All 45 contacts at once via blast email so no one is favored', 'Blast emails to 45 contacts produce the lowest response rate and signal an undisciplined process. Tier-1 buyers expect a personal call from a senior banker; cold emails to top targets are how a seller loses interest before the NDA is even returned.'],
      ['Tier 1 only in the first week; Tier 2 and Tier 3 only contacted if Tier 1 fails to produce IOIs', 'Sequential gating between tiers blows the timeline — by the time Tier 1 has run, Tier 3 is no longer interested or is mid-fund-cycle on something else. Concurrency with proper tiering wins.'],
      ['Tier 3 first to test the teaser language, then refine for Tier 1 and Tier 2', 'Testing the teaser on Tier 3 buyers means the seller\'s top targets see the second iteration of the deal materials. The teaser is finalized before launch; live A/B testing on the buyer list is not the way to refine it.'],
    ],
    'Outreach sequencing is about *who calls whom and when*, not gating. Top-tier buyers get senior-banker calls, mid-tier gets teaser emails, the broader list gets the same teaser slightly later — but everyone is notified within the launch window so no buyer has a legitimate "I heard about this late" complaint.'),

  q(4351311, 'Career Skills', CHAPTER, 'Sequenced data room access by tier',
    'Twenty buyers have signed NDAs and the data room is opening. Which structure for data-room access actually fits a real second-round process?',
    'All NDA\'d buyers get the CIM and a baseline data room (financial statements, top-line product information, market materials) — sensitive tabs (customer names, employee comp, IP detail, top-customer contracts) open only to buyers who pass IOI and enter the second round',
    [
      ['Open everything to everyone who signs the NDA so the process is fair', 'Universal access defeats the purpose of tiered diligence — top customer contracts and employee comp leaking to a competitor that has no real chance of winning is exactly the failure mode a sell-side banker exists to prevent.'],
      ['Limit even the baseline data room to top-three buyers only', 'Restricting baseline data room access too tightly cuts off IOI quality. Buyers who cannot see basic financials cannot submit a credible IOI, which is the opposite of what the seller wants from round one.'],
      ['Open everything immediately to financial buyers and stage access for strategics', 'Staging by buyer type rather than by round confuses the discipline — a Tier-1 strategic should see more than a Tier-3 sponsor at IOI stage, not less. The right axis is *round*, not *buyer type*.'],
    ],
    'Sequenced data-room access is a standard sell-side discipline: baseline at round one, full at round two, executive-only tabs (top-customer contracts, employee comp, source code) gated until the LOI is signed. The point is to give each round just enough information to produce a credible next-step bid, no more.'),

  q(4351312, 'Career Skills', CHAPTER, 'Strategic that competes with seller\'s customer',
    'The most attractive Tier-1 strategic on the list competes directly with the seller\'s second-largest customer (15% of revenue). The strategic is otherwise the highest probable price. What is the right disposition?',
    'Include the strategic with extra confidentiality and tiering discipline (named-customer disclosure deferred to LOI, customer-contract details to definitive agreement) and disclose to the seller\'s CEO so they can decide whether the customer risk is acceptable — the strategic likely produces the best price but the customer may walk if they learn the seller is talking to a competitor',
    [
      ['Exclude the strategic entirely because the customer relationship is more valuable than the deal premium', 'Excluding a top-price buyer to protect a 15% customer assumes the customer will discover the conversation, which good confidentiality discipline can prevent. The decision belongs to the seller, not the banker, but informed exclusion is rarely the right call.'],
      ['Include the strategic without telling the seller because the call is the banker\'s judgment', 'Hiding a known customer-conflict risk from the seller is a serious process failure. The seller is the decision-maker on tradeoffs that affect their customer relationships; the banker\'s job is to surface the tradeoff cleanly.'],
      ['Include the strategic and disclose the conflict to them in the first call so they can self-deselect', 'Telling the strategic about the conflict in the first call is exactly how the leak happens — the strategic now knows who the customer is and may use that information competitively whether they participate in the process or not.'],
    ],
    'Customer-conflict situations are surfaced to the seller, not adjudicated by the banker. The seller decides whether the deal-premium upside is worth the customer-risk exposure; the banker\'s job is to present the tradeoff with the confidentiality controls that make the upside path viable.'),

  q(4351313, 'Career Skills', CHAPTER, 'No-shop vs lookback vs exclusivity',
    'The LOI from the leading buyer has a no-shop clause, a 30-day exclusivity period, and a 10-day "lookback" window. What does each provision do, and which is the most negotiable for the seller?',
    'No-shop bars the seller from actively soliciting other offers; exclusivity bars discussions with other parties for a fixed period; lookback gives the seller a defined window to consider an *unsolicited* superior offer before terminating — exclusivity duration is typically the most negotiable because it has the clearest cost (lost competitive tension)',
    [
      ['All three are the same provision in different words and only one will appear in the LOI', 'They are three distinct provisions that often appear together. No-shop is about active solicitation; exclusivity is about discussions; lookback is about handling unsolicited bids. Conflating them suggests the LOI has not actually been read.'],
      ['The lookback is the most negotiable because no-shops are standard and exclusivity is rarely real', 'No-shops are standard but their carveouts (fiduciary outs, unsolicited-bid handling) are very real and worth negotiating. The most-negotiated number on the LOI is almost always the exclusivity period itself.'],
      ['No-shop and exclusivity are the same; the lookback is a buyer-side protection', 'No-shop and exclusivity are conceptually distinct (active solicitation vs all discussions) and both are seller-side restrictions, not buyer-side protections. Mislabeling who each provision protects is how junior bankers misread an LOI redline.'],
    ],
    'No-shop bars solicitation; exclusivity bars discussions; lookback handles unsolicited offers. All three appear in the same LOI and each is independently negotiable — the seller\'s leverage is mostly in exclusivity duration and the lookback window, since the no-shop is generally given in exchange for the buyer\'s diligence spend.'),

  // -------------------------------------------------------------------------
  // BLOCK C — IOI -> LOI -> definitive agreement progression
  // -------------------------------------------------------------------------
  q(4351314, 'Career Skills', CHAPTER, 'What changes between IOI and LOI',
    'A buyer\'s IOI came in at $740M with light conditions. They are about to submit an LOI. What should change between IOI and LOI in a real sell-side process?',
    'LOI replaces the indicative range with a single point price, names the form of consideration (cash, stock, mixed), specifies financing assumption (committed vs best-efforts), defines exclusivity terms, lists key conditions (regulatory, financing, MAC), and proposes a timeline to signing — the IOI was a screen; the LOI is a real proposal',
    [
      ['Nothing material — the LOI is just the IOI on different letterhead with a signature line', 'IOI is non-binding and indicative; LOI is the document that triggers exclusivity and starts confirmatory diligence. They are different artifacts at different decision points.'],
      ['Only the price firms up; conditions stay the same as the IOI', 'Conditions are usually the most-negotiated section of the LOI. Financing certainty, regulatory carveouts, MAC language, and exclusivity terms are all where the seller\'s leverage gets converted into specific protections.'],
      ['Price drops slightly because IOIs are aspirational and LOIs are realistic', 'IOI-to-LOI price compression is a process failure mode (called a "retrade"), not a normal feature. A buyer who drops the price moving to LOI is signaling they were anchoring high to win second-round access — the seller should push back hard.'],
    ],
    'The IOI screens buyers into round two; the LOI selects one buyer for exclusive confirmatory diligence with a real proposal attached. Movement between the two is supposed to be conditions firming up and price holding, not price softening — a soft price between IOI and LOI is a yellow flag.'),

  q(4351315, 'Career Skills', CHAPTER, 'LOI exclusivity and break provisions',
    'The leading LOI proposes 60 days of exclusivity, no break fee, and the buyer\'s right to terminate at any time. What should the banker push back on?',
    'Push back on the 60-day exclusivity (negotiate to 30–45 days) and the unilateral termination right — without a break fee or a real commitment, 60 days of exclusivity gives the buyer time to retrade with no cost; either shorten the period or attach a meaningful covenant',
    [
      ['Accept all three terms because the LOI is non-binding anyway and the seller can walk', 'The seller cannot walk during exclusivity — that is what exclusivity means. Treating an LOI as fully non-binding misses that the exclusivity clause is binding even though the price is not.'],
      ['Push back only on the no-break-fee provision and accept 60 days as standard', 'Sixty days of exclusivity is on the long end and the no-break-fee combined with unilateral buyer termination is the bigger problem. Pushing back only on the break fee leaves the bigger asymmetry intact.'],
      ['Demand a break fee equal to 10% of deal value as the only acceptable counter', 'Break fees in private M&A LOIs are uncommon and 10% is unrealistically high. The seller\'s real leverage is shortening exclusivity and constraining the buyer\'s termination right, not pretending a public-company-style break fee will hold.'],
    ],
    'LOI exclusivity is the seller\'s scarcest resource — once granted, the seller cannot run a real process for that period. The discipline is to grant the minimum exclusivity needed for the buyer to do real diligence, with cost on the buyer for unilateral termination — not 60 days with a free walk-away.'),

  q(4351316, 'Career Skills', CHAPTER, 'Definitive agreement reps and MAC carveouts',
    'The definitive agreement\'s Material Adverse Change clause defines a MAC as "any change materially adverse to the business" with carveouts for general economic conditions, industry-wide conditions, war and terrorism, pandemics, and changes in law. The buyer wants to remove the pandemic carveout. What is the seller-side push-back?',
    'Pandemic carveouts became standard post-2020 and removing the carveout would give the buyer a walk-away right for any future pandemic-driven business impact — refuse the removal and instead negotiate a "disproportionate impact" qualifier that returns the risk to the seller only if the company is hit worse than industry peers',
    [
      ['Agree to remove the pandemic carveout because pandemics are unlikely in the deal window', 'Pandemic risk is exactly what 2020 taught the market to price into MAC carveouts — removing it gives the buyer a free option to walk in the next public-health event. Probability arguments do not justify ceding the option.'],
      ['Agree to remove the pandemic carveout but add a higher MAC threshold ($50M revenue impact instead of $25M)', 'A higher threshold helps the seller in some scenarios but is much weaker protection than a carveout — the carveout removes whole categories of risk, the threshold only delays the trigger. Trading a carveout for a threshold is asymmetric in the buyer\'s favor.'],
      ['Refuse all changes to the MAC and walk away from the deal if the buyer presses', 'Walking away over a single MAC carveout is disproportionate — the disproportionate-impact qualifier is the standard middle ground that nearly every recent deal has used. Refusing to negotiate is poor process.'],
    ],
    'MAC carveouts are the seller\'s shield against buyer walk-aways for systemic events. The pandemic carveout has been standard since 2020; the modern negotiation is disproportionate-impact language, which returns the risk to the seller only if the company underperforms peers — that is the equilibrium the market has settled on.'),

  q(4351317, 'Career Skills', CHAPTER, 'R&W insurance and where it lands',
    'A definitive agreement proposes a $25M general indemnity cap, a $250K basket, and $5M of representation and warranty insurance with a 1% retention. How do these pieces fit together and which is the most-negotiated number?',
    'R&W insurance sits between the buyer\'s retention and the policy cap; the basket is the threshold below which no indemnity claim can be made; the general cap limits seller exposure above the policy — the retention (the deductible the seller still bears) and the cap are the most-negotiated numbers because they directly affect seller hold-back and post-close exposure',
    [
      ['R&W insurance replaces the indemnity entirely, so the basket and the cap are irrelevant', 'R&W is a layer on top of seller indemnity, not a replacement. Sellers still bear retention, baskets, and exposure for excluded matters (fraud, specific covenants, fundamental reps).'],
      ['The basket is the most-negotiated number because it determines indemnity frequency', 'Baskets matter but they are usually negotiated within a tight market band ($100K–$500K depending on deal size). The retention on the R&W policy and the general cap have much larger dollar consequences and are where the real negotiation happens.'],
      ['R&W insurance is buyer-side only and does not affect seller economics', 'R&W premiums and retention are typically cost-shared or seller-paid in modern deals; the seller\'s post-close exposure profile is directly shaped by the policy. Treating it as buyer-only misses that it is part of the seller\'s total consideration package.'],
    ],
    'R&W insurance restructures the indemnity stack: seller bears retention, policy covers the middle layer, indemnity cap above the policy is what the seller still owes. The negotiation is the retention size and the cap, both of which are real dollars for the seller.'),

  q(4351318, 'Career Skills', CHAPTER, 'Stapled financing — what it is and who pays',
    'You are the sell-side banker on a sponsor-targeted process and the team is considering offering stapled financing. What is staple, who provides it, and what is the cost-and-benefit calculus for the seller?',
    'Stapled financing is a pre-negotiated debt package the sell-side bank offers to buyers as a financing option — the same bank running the auction provides the debt term sheet — and the benefit is faster certainty-of-close for the seller; the cost is conflict of interest, since the bank earns fees on both sell-side advisory and debt arranging',
    [
      ['Staple is when two bidders submit a joint bid; it lowers competition so it should be discouraged', 'That is not what staple means. Staple is a financing structure offered by the sell-side bank, not a bidder structure.'],
      ['Staple is buyer-side acquisition financing, arranged by the buyer\'s lender, that the seller insists on', 'Buyer-side financing is just acquisition financing. Staple is specifically the *sell-side bank* offering a pre-negotiated package — the conflict of interest is the defining feature.'],
      ['Staple is seller-financing where the seller takes a note for part of the purchase price', 'Seller-financing is a different structure (seller paper or vendor loan). Staple has nothing to do with seller paper; it is debt the sell-side bank pre-arranges for buyers to draw down.'],
    ],
    'Stapled financing accelerates a process by giving sponsors a ready-made debt package, but the conflict (same bank earning sell-side advisory and debt-arranging fees) is a real disclosure obligation. Modern processes often use staple as a benchmark while letting buyers source their own financing, which preserves the certainty benefit without the full conflict.'),

  // -------------------------------------------------------------------------
  // BLOCK D — Fairness opinion and board books
  // -------------------------------------------------------------------------
  q(4351319, 'Career Skills', CHAPTER, 'When a fairness opinion is required',
    'A public-company target board is considering an all-cash $2.4B acquisition offer. When does the board need a fairness opinion, and who delivers it?',
    'A fairness opinion is not legally required but is effectively standard practice for public-company boards under Delaware law (Smith v. Van Gorkom precedent) — typically delivered by an investment bank other than the lead M&A advisor, or by the same advisor if the engagement letter contemplates it, to support the board\'s satisfaction of the duty of care',
    [
      ['Fairness opinions are required by SEC rule for all public-company M&A above $1B', 'There is no SEC rule mandating fairness opinions at a dollar threshold. The requirement flows from state corporate law (most often Delaware) and from the board\'s duty of care, not from federal securities rules.'],
      ['Fairness opinions are required by Delaware statute for any change-of-control transaction', 'Delaware statute does not require a fairness opinion. Delaware case law (Van Gorkom, Revlon) makes it effectively standard because boards that skip one bear more litigation risk, but the requirement is risk-management, not statutory.'],
      ['Fairness opinions are required only if the board has an independent committee', 'Independent committees are a separate governance question and often retain their own advisors and their own fairness opinions, but the fairness-opinion practice applies whether or not a special committee exists.'],
    ],
    'Fairness opinions are a Delaware-driven board-protection device, not a statutory or SEC requirement. They are standard practice because directors who approve a deal without one are exposed to a duty-of-care challenge — the opinion is the documentation that the board was informed.'),

  q(4351320, 'Career Skills', CHAPTER, 'What a fairness opinion actually covers',
    'The fairness opinion delivered to the board states the transaction is "fair, from a financial point of view, to the holders of common stock". What is and is not in scope of that opinion?',
    'In scope: whether the financial consideration is fair given comparable trading multiples, precedent transactions, DCF, and (where relevant) LBO floors — out of scope: strategic merits, deal structure, tax consequences, post-close integration, and whether a higher price could have been obtained',
    [
      ['Fairness opinion certifies the deal is the best deal available — buyers cannot improve on it', 'Fairness opinions explicitly do *not* opine on whether a higher price was available. The opinion is on the consideration relative to financial benchmarks; "best deal available" is a different question, often called a "best price" opinion, which fairness opinions exclude.'],
      ['Fairness opinion certifies the strategic logic and the operating fit', 'Strategic logic is the board\'s judgment, not the financial advisor\'s. Fairness opinions explicitly exclude strategic merits, which is why the letter scopes "from a financial point of view".'],
      ['Fairness opinion covers tax and accounting treatment of the consideration', 'Tax and accounting are excluded from fairness opinions. Boards rely on separate tax counsel and auditors for those questions; the fairness opinion is purely financial benchmarks.'],
    ],
    'A fairness opinion is a narrow financial-benchmarks letter — fairness of consideration relative to comps, precedents, DCF, LBO. The phrase "from a financial point of view" is doing real work: it excludes strategic merits, structure, tax, and the question of whether a better deal was possible.'),

  q(4351321, 'Career Skills', CHAPTER, 'Board book fairness-analysis components',
    'You are building the board book that supports the fairness opinion. Which set of analyses does the board expect to see backing the opinion?',
    'Selected public companies (trading comps), selected precedent transactions, discounted cash flow with sensitivity grid, LBO analysis if relevant, premiums-paid analysis (52-week high, recent VWAP, 90-day average) for public-target deals, and the football field summarizing the ranges',
    [
      ['Just the DCF because boards trust intrinsic valuation more than market comparables', 'Boards expect a full set of analyses precisely because no single method is sufficient — the fairness opinion supports its conclusion by triangulating across methods.'],
      ['Just the trading comps because precedent transactions are too dated to be relevant', 'Precedent transactions are a core component of every fairness analysis even when dated, because they reflect control premiums that trading comps cannot capture. Excluding them is a serious omission.'],
      ['Premiums-paid analysis only, since the board\'s real question is whether the takeover premium is reasonable', 'Premiums-paid is one of several analyses and answers only the takeover-premium question — boards also need to see intrinsic value (DCF) and trading-vs-precedent context to evaluate the full picture.'],
    ],
    'A fairness-analysis section is a multi-method board document: trading comps, precedent transactions, DCF, LBO floor, premiums-paid, football-field synthesis. Each method answers a different question, and the opinion stands on the triangulation, not on any single method.'),

  q(4351322, 'Career Skills', CHAPTER, 'Conflicts and second fairness opinions',
    'The board\'s lead financial advisor stands to earn a $50M sell-side advisory fee if the deal closes. Independent directors want a second fairness opinion. How should the board handle this, and what does Delaware case law expect?',
    'Engage a separate financial advisor with no contingent fees on the deal to deliver a confirmatory fairness opinion to the independent committee — Delaware case law (In re El Paso, In re Rural Metro) has flagged contingent advisor fees as a material conflict, and a second opinion delivered by a non-conflicted advisor is the standard cure',
    [
      ['The lead advisor\'s fairness opinion is sufficient because the engagement letter discloses the fee', 'Disclosure of the fee is necessary but Delaware case law (especially the Rural Metro decision) has held that contingent-fee disclosure alone does not cure the conflict — the board needs an independent process and often a separately retained advisor.'],
      ['The board does not need a second opinion because the directors are independent', 'Director independence is separate from advisor independence. The conflict here is the *advisor*\'s contingent fee, which a special committee\'s independent directors can mitigate but not eliminate without a separate advisor.'],
      ['A second opinion is unnecessary as long as the board has the right to terminate the engagement', 'Termination rights do not address the advisor\'s economic incentive to recommend the deal close. A second opinion from a fee-aligned (e.g. flat-fee) advisor is the cure the case law has pushed toward.'],
    ],
    'Contingent-fee structures on M&A advisors are a real conflict that Delaware courts have called out by name. Independent committees on conflicted deals routinely retain separate advisors on non-contingent fees — the cost is small relative to the litigation exposure if the conflict is left unaddressed.'),

  // -------------------------------------------------------------------------
  // BLOCK E — Accretion/dilution math beyond direction
  // -------------------------------------------------------------------------
  q(4351323, 'Career Skills', CHAPTER, 'Cash vs stock impact on EPS bridge',
    'An acquirer with $1.0B of net income and 100M shares outstanding (EPS $10) is buying a target with $200M of net income. Cash deal funded with debt at 5% after-tax cost; debt raised is $4.0B. Stand-alone, what is the pro-forma EPS and what is the directional implication?',
    'Pro-forma net income = $1.0B + $200M − ($4.0B × 5%) = $1.0B + $200M − $200M = $1.0B; share count unchanged at 100M; pro-forma EPS = $10 — exactly break-even, which tells the analyst the cost of debt equals the target\'s earnings yield at the deal price',
    [
      ['Pro-forma EPS = ($1.0B + $200M) / 100M = $12, so the deal is 20% accretive', 'Ignoring the $200M after-tax interest expense on the $4.0B of acquisition debt overstates the accretion. Cash deals funded with debt must subtract the interest cost from net income before computing pro-forma EPS.'],
      ['Pro-forma EPS = ($1.0B − $200M) / 100M = $8, so the deal is 20% dilutive', 'Subtracting the interest cost is correct in direction but the target\'s net income (+$200M) must be added in as well. Forgetting to add target earnings is a common slip on the cash-deal EPS bridge.'],
      ['Cannot compute pro-forma EPS without knowing the target\'s share count', 'In a cash deal the target\'s share count is irrelevant — only the acquirer\'s share count matters because the target shareholders are cashed out. Asking for the target share count signals the cash-vs-stock mechanic was missed.'],
    ],
    'The cash-deal EPS bridge is: acquirer NI + target NI − after-tax interest on acquisition debt, divided by acquirer\'s unchanged share count. Break-even occurs when the after-tax cost of debt equals the target\'s earnings yield at deal price. Stock deals work differently — the share count changes by the exchange ratio times the target\'s share count.'),

  q(4351324, 'Career Skills', CHAPTER, 'Synergy phasing in the EPS bridge',
    'A strategic deal projects $80M of run-rate cost synergies, fully phased in by year 3 (50% in year 1, 80% in year 2, 100% in year 3). The acquirer wants the year-1 accretion/dilution slide to reflect synergies. How should the slide present the synergy contribution to EPS?',
    'Show year-1 EPS impact with synergies phased at the realistic 50% rate, then a separate sensitivity table with year-2 (80%) and year-3 (100%) cases — and explicitly note the post-tax conversion (cost synergies are pre-tax savings, so multiply by (1 − tax rate) before adding to net income)',
    [
      ['Present year-1 EPS with full $80M of synergies because that is the deal thesis', 'Booking 100% of run-rate synergies in year 1 inflates year-1 accretion against the deal model and against any post-close tracking. The phasing schedule is part of the underwriting; ignoring it on the EPS slide misrepresents the math.'],
      ['Present year-1 EPS with no synergies because synergies are unreliable', 'Showing year-1 with zero synergies understates the strategic case and disconnects the EPS slide from the synergy work the deal team has actually done. Phased synergies are the honest middle.'],
      ['Present year-1 EPS with full $80M of synergies on a pre-tax basis because EPS is a post-tax metric', 'Booking pre-tax synergies directly into a post-tax EPS bridge double-counts the tax shield. The conversion (pre-tax synergy × (1 − tax)) is the standard adjustment; skipping it inflates EPS accretion by the tax rate.'],
    ],
    'Synergy phasing matters because year-1 accretion is what investors will see in the first set of post-close earnings — get the phasing wrong and management has a credibility problem at the first quarterly print. Pre-tax synergies must be tax-effected before they hit EPS; that conversion is the most-skipped step on the bridge.'),

  q(4351325, 'Career Skills', CHAPTER, 'Break-even synergy calculation',
    'A stock-for-stock deal is dilutive by 5% to year-1 EPS before synergies. The acquirer has 200M shares outstanding, EPS of $5, and a 25% tax rate. Approximately how much pre-tax synergy is required to make the deal break-even on year-1 EPS?',
    '$67M of pre-tax synergy — break-even requires $50M of post-tax accretion (5% × $5 × 200M = $50M), so pre-tax synergy = $50M / (1 − 0.25) = $66.7M (rounded $67M)',
    [
      ['$50M of pre-tax synergy because that exactly matches the dilution gap', '$50M is the post-tax number. Synergies enter the EPS bridge as pre-tax savings that must be tax-effected before adding to net income — using $50M pre-tax delivers only $37.5M after tax and the deal stays dilutive.'],
      ['$100M of pre-tax synergy to be safe and ensure accretion', 'Doubling the break-even is conservative but not the question — the analyst needs the actual break-even number to discuss with the deal team. "Be safe" is not a math answer.'],
      ['$200M of pre-tax synergy because the share count is 200M', 'Multiplying by share count without dividing by EPS dilution is a unit error — share count alone does not produce a dollar synergy requirement. The bridge requires both the dilution percentage and the share count.'],
    ],
    'Break-even synergy math: dilution % × stand-alone EPS × share count = post-tax synergy required; divide by (1 − tax rate) for the pre-tax number. The tax-effect step is what most analysts miss the first time they build the bridge — pre-tax savings convert to post-tax accretion at (1 − t).'),

  q(4351326, 'Career Skills', CHAPTER, 'Purchase price allocation basics',
    'A $2.4B acquisition has $400M of identifiable net assets at book value, $1.0B of tax-deductible identifiable intangibles (customer relationships, technology, trade names) created in the deal, and the rest is goodwill. What is the post-close GAAP impact and what about it surprises a first-time analyst?',
    'Goodwill = $2.4B − $400M − $1.0B = $1.0B; the $1.0B of identifiable intangibles amortizes over their useful lives (typically 5–15 years) hitting GAAP earnings as amortization expense; goodwill is not amortized but is tested annually for impairment — the surprise is that the deal looks more dilutive on GAAP than on cash EPS because of the intangible amortization drag',
    [
      ['Goodwill = $2.0B and identifiable intangibles drop into goodwill at close', 'Identifiable intangibles are separately recognized under ASC 805 and amortized through earnings — they do not collapse into goodwill. Treating intangibles as part of goodwill is the most common PPA error.'],
      ['Goodwill = $1.0B and all $1.0B of intangibles amortize over the goodwill impairment window (annually)', 'Identifiable intangibles amortize on their own useful-life schedules (often 5–15 years), separate from goodwill\'s annual impairment testing. The two are different accounting mechanics with different timing.'],
      ['Goodwill = $2.0B because identifiable intangibles do not exist at the deal level, only in the target\'s historical books', 'Acquisition accounting (ASC 805) requires recognition of intangibles created or acquired in the deal, even if the target carried them at zero. Failing to allocate to intangibles overstates goodwill and understates post-close amortization expense.'],
    ],
    'Purchase price allocation under ASC 805 separates the purchase price into net tangible assets, identifiable intangibles, and goodwill. Intangibles amortize through earnings on their useful lives; goodwill does not amortize but is impairment-tested. The GAAP-vs-cash EPS divergence after a deal is mostly intangible amortization — first-time M&A analysts are routinely surprised by this drag.'),

  // -------------------------------------------------------------------------
  // BLOCK F — Consideration mix and collars
  // -------------------------------------------------------------------------
  q(4351327, 'Career Skills', CHAPTER, 'Cash vs stock vs mixed consideration tradeoffs',
    'A strategic buyer with strong stock momentum but limited cash is considering whether to offer cash, stock, or a mix to a target. The target board has a mix of long-term holders and recent arbitrage entrants. Which consideration framing actually matches buyer-side and target-side incentives?',
    'Cash is cleaner for target shareholders (immediate liquidity, no buyer-equity risk) but uses buyer cash or debt capacity; stock preserves buyer cash but exposes target holders to post-close buyer equity risk and creates tax-deferral options; mixed consideration is common when the buyer wants to preserve cash and the target wants partial certainty — the right mix balances target\'s tax-deferral preference, buyer\'s currency cost, and deal certainty',
    [
      ['Always offer cash because target shareholders prefer certainty', 'Target shareholders do not uniformly prefer cash — long-term holders may prefer stock for tax deferral, and stock deals avoid triggering capital gains until the new stock is sold. Cash-vs-stock preference depends on the holder type and tax basis.'],
      ['Always offer stock because it preserves buyer balance sheet capacity', 'Stock deals dilute the buyer\'s shareholders and expose target holders to the buyer\'s post-close equity performance — preserving cash is one consideration among several, not the deciding factor.'],
      ['Offer cash to long-term holders and stock to arbitrage holders so each gets their preference', 'Differential consideration to different holders of the same class is generally not permitted under corporate law (one-share-one-vote, equal treatment of holders within a class). The mix is one consideration package applied to all holders of a class.'],
    ],
    'Consideration mix is a multi-axis decision: buyer\'s cash and debt capacity, target shareholders\' tax-deferral preference, target board\'s certainty preference, and the relative valuation of buyer stock. The mix is one package for all holders of a class — not differential by shareholder type.'),

  q(4351328, 'Career Skills', CHAPTER, 'Fixed vs floating exchange ratio',
    'A stock-for-stock deal proposes 0.5 shares of buyer for each target share. The buyer stock is at $100; deal signed today and closing is 6 months out. The buyer wants a fixed exchange ratio; the target wants a floating ratio. What is the actual risk allocation and what is the typical compromise?',
    'Fixed exchange ratio (0.5 shares per target share, regardless of buyer price at close) puts the buyer stock-price risk on the target between signing and close; floating exchange ratio (variable ratio so target receives a fixed dollar value) puts that risk on the buyer; the typical compromise is a fixed ratio with a collar (ceiling and floor on buyer price) that re-allocates risk only in extreme moves',
    [
      ['Fixed and floating are the same thing in practice because deals close fast enough that buyer price does not move', 'Six-month closings are routine and buyer stocks can move 20–30% in that window. Fixed vs floating is a real risk-allocation decision, not a formality.'],
      ['Fixed ratio always favors the buyer; floating always favors the target', 'Fixed ratio favors whichever party gains from buyer stock moving up between signing and close — that could be either side depending on the move. Floating ratio shifts the risk, not the direction of the favor.'],
      ['The compromise is to set both fixed and floating ratios and pick the better one at close', 'That structure (often called a "walk-away" or "two-way" mechanism) is rarely used because it produces gaming incentives. The standard compromise is the collar, which constrains risk in tails without changing the basic fixed-vs-floating choice.'],
    ],
    'Fixed vs floating exchange ratio is a real risk-allocation decision in stock deals — it determines who bears buyer-price risk between signing and close. Collars (caps and floors) are the standard compromise: fixed ratio inside the collar, partial re-allocation outside it.'),

  q(4351329, 'Career Skills', CHAPTER, 'Collars: caps, floors, and walk-away rights',
    'A stock deal has a collar with a 20% ceiling on buyer stock price ($120) and a 20% floor ($80) measured at a 10-day VWAP before close. Outside the collar, what happens, and what additional right typically attaches?',
    'If buyer stock closes above the ceiling, the target receives fewer shares (preserving dollar value); below the floor, the target receives more shares (also preserving dollar value); outside an outer band (often 30–40% below original price), the target typically has a walk-away right because dilution to receive fixed value becomes punitive to the buyer\'s shareholders',
    [
      ['Outside the collar the deal automatically terminates regardless of which side is hit', 'Automatic termination outside the collar is a stricter structure than the market norm — most collars adjust the exchange ratio within an extended band and grant walk-away rights only beyond an outer threshold.'],
      ['Outside the collar the original exchange ratio applies and the parties absorb the price change', 'That is the structure *inside* the collar, not outside. The collar exists precisely to re-allocate risk outside the inner band; saying nothing happens defeats the purpose of having the collar.'],
      ['Outside the collar the parties renegotiate the exchange ratio in good faith', '"Renegotiate in good faith" is not a deal term — it is what happens if there is no collar. Collars are precisely the mechanism that specifies the outcome outside the band so the parties do not have to renegotiate.'],
    ],
    'Collars are structured risk allocation in stock deals: fixed ratio inside the band, adjustment to preserve dollar value within the outer band, walk-away rights beyond it. The walk-away right protects the buyer from punitive dilution if its stock collapses; without the outer threshold, the buyer absorbs unlimited dilution risk.'),

  // -------------------------------------------------------------------------
  // BLOCK G — Regulatory approvals
  // -------------------------------------------------------------------------
  q(4351330, 'Career Skills', CHAPTER, 'HSR timing and the FTC second request',
    'A $1.5B acquisition crosses the HSR Act thresholds. The buyer files notification with the FTC and DOJ. What is the standard timeline, what triggers a second request, and what happens to deal certainty?',
    'Standard HSR review is a 30-day waiting period (15 days for cash tender offers) from filing; either agency can issue a "second request" before the waiting period expires, which substantially extends the timeline (often 6–12 months) and requires extensive document production — second requests are issued when the agency wants a closer look at competitive overlap, and they materially compress deal certainty',
    [
      ['HSR review is automatic 90-day approval; no second request mechanism exists', '30-day initial waiting period (or 15-day for cash tenders) with a second-request mechanism is the actual structure. A 90-day automatic clock would not give the agencies the investigatory time they actually use.'],
      ['Second request adds only 15 days to the timeline and rarely affects closing', 'Second requests routinely add 6–12 months and are one of the most material risks to deal certainty. Treating them as a 15-day extension misses that they are the primary HSR-related deal-killer.'],
      ['HSR is purely a notification filing with no agency review or extension mechanism', 'HSR is a notification *and* review framework — the agencies can use the waiting period to review and issue second requests. Treating it as a pure notification filing skips the substantive review piece entirely.'],
    ],
    'HSR has a 30-day initial waiting period (15 days for cash tenders) that is generally pro forma, but the second-request mechanism is what makes HSR a real deal-certainty risk. Bankers price second-request risk into the bid-evaluation framework via reverse termination fees and longer drop-dead dates.'),

  q(4351331, 'Career Skills', CHAPTER, 'Industry regulators — FCC, FERC, and the like',
    'A deal to acquire a regional telecom requires FCC approval in addition to HSR. How does industry-specific approval differ from antitrust review, and what is the practical impact on deal timing?',
    'Industry approvals (FCC for telecom, FERC for energy assets, OCC for banks, CFIUS for foreign acquirers) run in parallel with HSR but follow their own statutory standards and timelines — typically 6–12 months and sometimes much longer for contested matters; bankers structure reverse termination fees and outside dates to reflect the longest expected approval path, not the HSR path',
    [
      ['FCC approval is a subset of HSR review and runs on the same 30-day clock', 'FCC approval is a separate statutory framework under the Communications Act with its own standards (public-interest test) and its own multi-month timeline. It is not a subset of HSR.'],
      ['Industry approvals can be waived by buyer and seller if they jointly request a fast-track review', 'Industry regulators do not allow private parties to waive their review. The buyer and seller can request expedited consideration, but the standards and timelines are set by the regulator, not by the deal parties.'],
      ['Industry approvals are required only for cross-border transactions involving foreign buyers', 'CFIUS (Committee on Foreign Investment in the US) is the cross-border review; FCC, FERC, OCC are domestic industry regulators that apply regardless of buyer nationality. Conflating them misses which regulator does what.'],
    ],
    'Industry-specific approvals run in parallel with HSR but are governed by their own statutes, standards, and timelines. FCC (telecom), FERC (energy), OCC (banks), CFIUS (cross-border), and state PUCs (utilities) all have multi-month review windows that drive outside-date and reverse-break-fee design in regulated-industry deals.'),

  // -------------------------------------------------------------------------
  // BLOCK H — Capital markets: IPO, follow-on, block trades
  // -------------------------------------------------------------------------
  q(4351332, 'Career Skills', CHAPTER, 'S-1 process and the SEC review',
    'A late-stage private company is filing an S-1 with the SEC for an IPO. What is the timeline from confidential submission to first trade, and what are the major review steps?',
    'Confidential S-1 submission under the JOBS Act (for EGCs) → SEC review and comment letters (typically 2–3 rounds over 60–90 days) → public filing → roadshow (1–2 weeks) → pricing call → first trade — total elapsed time from confidential submission to first trade is typically 4–6 months for a smooth process',
    [
      ['Confidential S-1 to first trade takes 2 weeks because the SEC is a rubber stamp', 'SEC review is a substantive multi-round process averaging 60–90 days even for clean filings. The 2-week timeline confuses the SEC review with the roadshow, which is the visible end of the process.'],
      ['Confidential submission was abolished after the JOBS Act sunset; all S-1s are public from filing', 'The JOBS Act confidential-submission provision was made permanent and extended to all issuers (not just EGCs) by SEC guidance in 2017. Confidential filing remains the standard for IPOs and is the typical first step.'],
      ['The S-1 is filed publicly and the SEC reviews after first trade based on actual trading performance', 'SEC review happens before, not after, first trade. The S-1 must be declared effective by the SEC before pricing — there is no post-effective review of the issuer\'s trading performance as part of the IPO clearance.'],
    ],
    'The S-1 process is the SEC review machinery for IPOs: confidential submission, multi-round comment letters, public filing, roadshow, pricing. The timeline (4–6 months from confidential to first trade) is set by the SEC review cadence, not by the issuer\'s readiness — companies that misjudge the timeline miss their window.'),

  q(4351333, 'Career Skills', CHAPTER, 'Roadshow and bookbuilding mechanics',
    'The S-1 is effective and the roadshow is launching. How does bookbuilding actually work, and what is the bookrunner doing during the two-week roadshow?',
    'Bookrunner collects indications of interest from institutional investors at varying price-and-quantity levels; investors signal demand (e.g. "10M shares at $20 limit", "5M shares strikes") and the book builds in real time; at the pricing call, the bookrunner reviews the cumulative demand curve, recommends a price-and-size combination, and the issuer approves — the demand is not allocated until after pricing',
    [
      ['Investors pre-commit at the offering price and the bookrunner just confirms the math', 'Investors do not pre-commit at the offering price — they submit indications at limit prices or at "strike" (any price), and the bookrunner uses the aggregate demand curve to recommend the actual price.'],
      ['The price is set in the S-1 at filing and bookbuilding determines only allocation', 'The S-1 contains a *preliminary* price range (e.g. $18–22), not the final price. The pricing call sets the actual offering price, which can land inside, above, or below the range depending on demand.'],
      ['The roadshow is just marketing; pricing is determined by an algorithm based on comparable IPOs', 'Pricing is a human-decision call between the issuer, the lead bookrunner, and the syndicate — informed by the book and by market context, not by a comparables algorithm.'],
    ],
    'Bookbuilding is a real demand-aggregation process: investors signal price-and-quantity indications during the roadshow, the bookrunner builds the demand curve, and the pricing call converts the curve into a price-and-size decision. Allocation happens after pricing, which is the lever the bookrunner uses to reward long-term holders over momentum buyers.'),

  q(4351334, 'Career Skills', CHAPTER, 'IPO pricing and the greenshoe',
    'An IPO prices at $20 with a $200M base offering (10M shares) and a 15% greenshoe. The stock opens at $24. What is the greenshoe, who exercises it, and what is its economic purpose?',
    'The greenshoe (over-allotment option) gives the underwriters the right to sell an additional 15% (1.5M shares) within 30 days at the offering price ($20); the underwriters typically *short* the greenshoe shares at IPO and cover by exercising — if stock trades above $20 they exercise (target gets additional capital), if below they cover in the open market (which supports the price); the purpose is price-stabilization plus optionality to upsize',
    [
      ['The greenshoe is exercised by the issuer to issue more shares if the stock pops', 'The greenshoe is the *underwriters*\' option, not the issuer\'s. The underwriters decide whether to exercise based on aftermarket trading; the issuer benefits if exercise happens but does not control the decision.'],
      ['The greenshoe is a fee paid by the underwriters to the issuer if the deal underprices', 'The greenshoe is an over-allotment *option*, not a fee. Underpricing remediation is not part of the structure — the option is purely a sizing mechanism.'],
      ['The greenshoe gives the issuer the right to claw back shares if the stock drops below the offering price', 'Issuers do not have claw-back rights on issued shares in standard IPOs. The greenshoe is the underwriters\' mechanism for managing aftermarket trading; it is not a downside-protection device for the issuer.'],
    ],
    'The greenshoe (over-allotment option) is the underwriters\' tool for managing aftermarket trading: short the shoe at IPO, cover by exercising the option if the stock trades up, or cover in the open market if it trades down. Both outcomes support the offering — the upsize benefits the issuer, the open-market covering stabilizes the price.'),

  q(4351335, 'Career Skills', CHAPTER, 'Follow-on vs block trade',
    'A public-company issuer wants to raise $400M of additional equity. The bank pitches two structures: a marketed follow-on offering and an overnight block trade. What is the actual difference and when is each appropriate?',
    'A marketed follow-on takes 3–5 days with a mini-roadshow, allows full price discovery, and prices at a small discount (3–5%) to the last close; an overnight block trade is announced after market close, priced overnight with no marketing, prices at a larger discount (5–10%), and is appropriate when speed and certainty matter more than price — typically used when the issuer wants to hit a specific deal or refinancing window',
    [
      ['Follow-on and block trade are the same transaction; "block" is just informal terminology', 'They are distinct structures with different timing, marketing, pricing, and SEC-disclosure mechanics. Conflating them suggests the analyst has not seen either in practice.'],
      ['Block trades are larger than follow-ons; that is the only difference', 'Block trades are typically *smaller* than marketed follow-ons because they sacrifice price for speed. Size is not the distinguishing feature; marketing intensity and timing are.'],
      ['Follow-on is for primary offerings (new shares); block trade is for secondary offerings (existing holder selldowns) only', 'Both structures can be used for primary or secondary issuance. The choice between them is about marketing approach and timing, not about whether the issuer or an existing holder is selling.'],
    ],
    'Marketed follow-on and overnight block trade are different tools for the same outcome (raising equity capital). The follow-on optimizes for price through a short marketing process; the block trade optimizes for speed by sacrificing the marketing. The right choice depends on whether the issuer\'s constraint is price or timing.'),

  q(4351336, 'Career Skills', CHAPTER, 'Lock-up expiry and follow-on timing',
    'A recently-IPO\'d company has a 180-day lock-up that expires in three weeks. Several pre-IPO holders want to sell into a follow-on. What is the timing discipline?',
    'Follow-on offerings during the lock-up window require waivers from the underwriters, which are case-by-case; clean execution is to wait for lock-up expiry, then execute the follow-on with a brief filing-to-pricing window — pre-IPO holders selling without lock-up release violates the IPO underwriting agreement and damages bank relationships',
    [
      ['Pre-IPO holders can sell at any time after IPO; the lock-up is informal', 'The lock-up is a binding contractual agreement signed by pre-IPO holders as part of the IPO underwriting. Violating it is breach of contract, not just informally frowned upon.'],
      ['The follow-on can launch before lock-up expiry if the issuer agrees to a longer pricing window', 'Lock-up release is the underwriters\' decision, not the issuer\'s. Pricing window length does not affect the lock-up agreement; the right path is either to wait or to negotiate a release.'],
      ['Lock-ups expire automatically after 90 days under SEC rule', 'There is no SEC rule that sets a 90-day lock-up. Lock-ups are contractual (typically 180 days, sometimes 90 days or longer) and are set by the IPO underwriting agreement, not by SEC mandate.'],
    ],
    'IPO lock-ups are binding contracts (typically 180 days) between pre-IPO holders and the underwriters. Follow-on offerings during the lock-up window require underwriter consent; clean execution waits for expiry, which is why "lock-up expiry calendars" are tracked by capital markets desks alongside earnings calendars.'),

  // -------------------------------------------------------------------------
  // BLOCK I — Debt and convertibles
  // -------------------------------------------------------------------------
  q(4351337, 'Career Skills', CHAPTER, 'Convertible bond mechanics — conversion ratio and call protection',
    'A $500M convertible bond is issued at par with a 1.5% coupon, a 30% conversion premium, and a 5-year non-call period (NC5). The issuer\'s stock is at $50 at issuance. What is the conversion price, what is the conversion ratio, and what does NC5 protect?',
    'Conversion price = $50 × 1.30 = $65; conversion ratio = $1,000 par / $65 = 15.385 shares per bond; NC5 means the issuer cannot redeem the bond for 5 years, protecting investors from being called away before the option has time to gain value if the stock rallies — the call protection is the convexity buyer is paying for',
    [
      ['Conversion price = $50 (the stock price at issuance) and conversion ratio = 20 shares per bond', 'Conversion price = stock × (1 + premium), not the stock price itself. Issuing at the stock price with no premium would be selling equity at the money rather than a convertible — defeating the structure.'],
      ['NC5 means the bond matures in 5 years, not that the issuer cannot call', 'NC5 is *call protection*, not maturity. A typical 5-year-non-call convertible has a longer maturity (often 7 or 10 years) — the NC piece refers to the call-protection window, not the maturity date.'],
      ['Conversion ratio is set at issuance based on the bond\'s yield to maturity', 'Conversion ratio is derived from par divided by conversion price, both fixed at issuance. Yield-to-maturity is the holder\'s rate of return on the bond leg, not the conversion mechanic.'],
    ],
    'Convertible bond mechanics: conversion price = stock × (1 + premium); conversion ratio = par / conversion price; call protection (NCx) prevents the issuer from forcing conversion before the option has time to gain value. The investor pays a low coupon for the optionality, and call protection is the convexity safeguard that makes the optionality valuable.'),

  q(4351338, 'Career Skills', CHAPTER, 'Mandatory vs traditional convertibles',
    'A finance-sector issuer is considering a mandatory convertible vs a traditional convertible. What is the structural difference, and why would an issuer prefer mandatory in some contexts?',
    'Traditional convertibles are bonds with an investor option to convert into stock; mandatory convertibles automatically convert into stock at maturity at a formula price (with caps and floors) — mandatories are treated as equity by rating agencies, so issuers under credit pressure use them to raise quasi-equity capital without the immediate dilution of a follow-on; the cost is a higher coupon (3–6%) reflecting the forced-conversion economics',
    [
      ['Mandatory and traditional are the same; "mandatory" is just terminology for required redemption at maturity', 'Mandatory convertibles automatically convert into equity (no investor choice); traditional convertibles allow the investor to choose between cash redemption and conversion. The structural difference is whether the investor has a choice.'],
      ['Mandatory convertibles convert only if the stock rises above a threshold; otherwise they redeem in cash', 'Mandatory convertibles always convert into equity at maturity by definition — the conversion amount varies with the stock price (caps and floors), but conversion is not optional. Conditional conversion would just be a traditional convertible.'],
      ['Mandatory convertibles are used only by private companies because public companies prefer traditional structures', 'Mandatory convertibles are used by public companies under credit-rating pressure (notably financial institutions in 2008–2009 and post-COVID). Private companies typically use convertible preferred stock instead, which is a different instrument again.'],
    ],
    'Mandatory convertibles trade flexibility (forced conversion at maturity) for equity treatment from rating agencies. Issuers use them when credit pressure makes pure debt expensive or unavailable; the higher coupon (3–6% vs ~1–2% on traditional convertibles) reflects the forced-conversion economics the investor accepts.'),

  q(4351339, 'Career Skills', CHAPTER, 'High-yield vs investment-grade markets',
    'A corporate issuer is choosing between a high-yield bond offering and an investment-grade bond offering. What actually separates the two markets, and what changes about the underwriting?',
    'Investment-grade (BBB- or higher) prices off the Treasury curve at a tight spread, has minimal covenants (often just incurrence covenants), and is sold to insurance companies and pension funds; high-yield (BB+ or lower) prices off a benchmark at a wider spread, carries maintenance covenants and call schedules, is sold to dedicated HY funds and CLOs — the bank\'s syndicate desks for each market are separate, with different investor coverage and different deal mechanics',
    [
      ['IG and HY are the same market with different ratings labels; the underwriting is identical', 'IG and HY are sold to different investor bases (insurance/pension vs dedicated HY funds and CLOs) through different syndicate desks, with different covenant packages, different documentation (HY has the lengthy "Description of Notes"), and different secondary trading dynamics. The structural separation is real.'],
      ['HY is just IG with a higher coupon; the bond documentation is the same as IG', 'HY bond indentures are materially different from IG — they include detailed covenants (limitation on debt, restricted payments, asset sales), call schedules, and a "make-whole" provision before the first call date. IG indentures are typically much simpler.'],
      ['IG bonds carry maintenance covenants and HY bonds carry incurrence covenants', 'It is the reverse — IG typically has *incurrence* covenants (triggered only when the issuer takes an action like new debt), and HY (especially leveraged loans, less so HY bonds) has *maintenance* covenants (tested periodically). Reversing the convention is a common entry-level confusion.'],
    ],
    'IG and HY are structurally different markets despite sharing the "corporate bond" label: different investor base, different covenant packages, different documentation length and complexity, different syndicate-desk coverage. Junior bankers rotating between the two desks find the transition is more than a pricing-spread adjustment.'),

  // -------------------------------------------------------------------------
  // BLOCK J — League tables and analyst day-to-day
  // -------------------------------------------------------------------------
  q(4351340, 'Career Skills', CHAPTER, 'League tables and bookrunner economics',
    'A $1.5B IPO closes with three joint bookrunners and four co-managers. League tables credit each bookrunner with a portion of the deal; the bank\'s revenue allocation is different from the league-table credit. How does each work and why does the distinction matter?',
    'League-table credit splits deal size equally among joint bookrunners (sometimes with "active bookrunner" weighting); economics (underwriting fees) are split by negotiated economics on the cover (e.g. a 40/40/20 split for the three bookrunners, with co-managers receiving small pool allocations) — the distinction matters because banks pitch for league-table credit (which drives mandate-winning reputation) separately from fee economics, and the two can diverge significantly',
    [
      ['League-table credit and economics are the same; both split the deal proportionally to the bank\'s underwriting commitment', 'They diverge regularly. League tables typically split equally among bookrunners regardless of fee economics, while economics follow the negotiated split on the deal cover. Banks track both separately because they serve different strategic purposes.'],
      ['Sole bookrunners and joint bookrunners earn the same economics; the difference is only in marketing materials', 'Sole bookrunners capture all economics; joint bookrunners share. The difference is real money — typically tens of millions on a large IPO — and is the reason banks fight hard for sole vs joint mandates.'],
      ['Co-managers and bookrunners earn the same economics; the titles are interchangeable', 'Co-managers earn a fraction of the bookrunner economics (often single-digit percent of total fees) and have a much smaller role in execution. The title distinction reflects materially different responsibilities and pay.'],
    ],
    'League-table credit and deal economics are tracked separately because they serve different purposes — league tables are the marketing-and-mandate-winning metric, economics are the actual revenue. The distinction also explains why "sole bookrunner" is worth fighting for: full economics plus full league-table credit, both of which compound across the year.'),
]
