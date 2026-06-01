import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// ER CAPSTONE — Initiation Note (MeridianHealth Systems)
// ----------------------------------------------------------------------------
// 50 integrative questions (IDs 4370500–4370549) walking a junior analyst
// through the full lifecycle of an Equity Research initiation note on a
// single fictional company so the learner experiences one ticker across all
// ten capstone lessons — the same way an associate would carry a coverage
// initiation from industry primer through forecast model, valuation
// football field, and investor-facing thesis defense.
//
// MeridianHealth Systems (NASDAQ: MHSY) context (consistent across every Q):
//   - US-listed mid-cap healthcare IT vendor; clinical decision support
//     software for hospital systems. Epic-adjacent but focused on clinical
//     workflows, not full EHR.
//   - $1.2B LTM revenue; ~85% subscription / 15% professional services;
//     22% non-GAAP operating margin.
//   - 280 hospital-system customers, including 15 of top-50 US health
//     systems.
//   - LTM growth: 14% (subscription) / 2% (services) = ~12% blended.
//   - NTM: 15–17% organic + ~2pt from announced bolt-on DiagnostixAI
//     ($40M deal, integrating).
//   - Balance sheet: net cash ~$220M, no debt.
//   - Founder-CEO still board chair; professional CEO hired 2022.
//   - Most recent quarter: missed consensus by 3% on services (project
//     deferral), beat on subscription by 2%, narrowed full-year guidance.
//   - Comps: Veeva Systems, Inovalon, Health Catalyst, R1 RCM, Premier.
//   - Stock at $48, 52-week range $35–$62.
//
// Voice: matches jargonBusters.ts and the existing VC/IB capstone files —
// specific, evidence-anchored, no filler. Each wrong-answer rationale is
// bespoke; the lesson on each question is the integrative takeaway about
// initiation craft, not just the procedural fact.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe ER capstone canonical bank'

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

const CHAPTER = 'Capstone: Initiation Note'

// Difficulty distribution target: ~30% rated 3, ~50% rated 4, ~20% rated 5.
// 50 questions: 15 at 3 (30%), 25 at 4 (50%), 10 at 5 (20%).
export const ER_CAPSTONE_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Lessons 1–2: Industry setup (10 Qs)
  4370500: 3,
  4370501: 4,
  4370502: 3,
  4370503: 4,
  4370504: 4,
  4370505: 5,
  4370506: 4,
  4370507: 3,
  4370508: 4,
  4370509: 4,

  // Lessons 3–4: Filings + earnings (10 Qs)
  4370510: 3,
  4370511: 4,
  4370512: 4,
  4370513: 3,
  4370514: 4,
  4370515: 5,
  4370516: 4,
  4370517: 3,
  4370518: 4,
  4370519: 4,

  // Lessons 5–6: Forecast model (10 Qs)
  4370520: 3,
  4370521: 4,
  4370522: 4,
  4370523: 4,
  4370524: 3,
  4370525: 5,
  4370526: 4,
  4370527: 4,
  4370528: 3,
  4370529: 5,

  // Lessons 7–8: Valuation (10 Qs)
  4370530: 3,
  4370531: 4,
  4370532: 4,
  4370533: 5,
  4370534: 4,
  4370535: 4,
  4370536: 3,
  4370537: 4,
  4370538: 5,
  4370539: 4,

  // Lessons 9–10: Initiation note + investor debate (10 Qs)
  4370540: 3,
  4370541: 4,
  4370542: 4,
  4370543: 5,
  4370544: 4,
  4370545: 4,
  4370546: 5,
  4370547: 4,
  4370548: 3,
  4370549: 5,
}

export const erCapstoneQuestions: Question[] = [
  // -------------------------------------------------------------------------
  // LESSONS 1–2 — Industry setup (4370500–4370509)
  // Output: the industry primer section of the MHSY initiation note —
  // health IT market structure, payer/provider dynamics, what kind of moat
  // a clinical decision support vendor can actually claim. Forces the
  // analyst to commit to a structural read before touching the numbers.
  // -------------------------------------------------------------------------
  q(4370500, 'Series 86', CHAPTER, 'Framing the MHSY industry primer',
    'You are drafting the industry section of the initiation note on MeridianHealth Systems (MHSY) — a US clinical decision support software vendor selling to hospital systems. The buy-side will skim the primer in two minutes. What is the strongest one-paragraph framing of the health IT space for this initiation?',
    'US hospital IT spend is shifting from full-suite EHR replacement cycles toward best-of-breed clinical workflow software — MHSY sits in that second wave, monetizing the gap between Epic/Cerner core records and the actual decisions clinicians make at the bedside',
    [
      ['Health IT is a defensive growth sector benefiting from secular digitization tailwinds across the US healthcare system', 'This is a tagline, not a primer. Buy-side investors have heard it dozens of times and immediately discount any initiation that opens with sector-level abstraction instead of the specific category MHSY plays in.'],
      ['Health IT is dominated by Epic and Cerner, so any vendor in the space ultimately rents distribution from one of the two', 'Framing MHSY as renting distribution from Epic/Cerner mis-positions the company — clinical decision support is an attach layer, not a downstream channel. The framing decides what comps and what moat questions the rest of the note has to address.'],
      ['Health IT is a fragmented vertical SaaS market with hundreds of point solutions, and MHSY is one of the better-positioned mid-caps', 'Calling MHSY "one of the better-positioned mid-caps" is meaningless without naming the segment. A primer that does not commit to MHSY\'s segment leaves the buy-side guessing about the rest of the note.'],
    ],
    'An initiation primer is not a textbook chapter on the sector — it is a specific framing of where the company plays and why that slice of the market is interesting now. For MHSY, anchoring on the clinical-workflow gap above the EHR core sets up every later argument about moat, growth, and comps.'),

  q(4370501, 'Series 86', CHAPTER, 'Payer/provider dynamics for MHSY',
    'A senior analyst asks whether you have understood the payer/provider dynamic that drives MHSY revenue. MHSY sells software to hospital systems (providers). How should the note explain why payer behavior still matters for the thesis?',
    'Provider IT budgets are squeezed when payer reimbursement tightens — Medicare rate updates, commercial denial rates, and value-based care penalties all flow through hospital P&Ls within 12–18 months and shape whether MHSY\'s new logos slip or close',
    [
      ['Payer dynamics do not matter directly because MHSY does not sell to payers — only the provider P&L is relevant', 'This misses the transmission mechanism. Hospital IT budgets are downstream of payer reimbursement; ignoring it makes the demand model look more stable than it actually is.'],
      ['Payers will eventually become the primary buyer of clinical software as risk shifts onto them, so MHSY should pivot to selling to payers', 'This is a strategic recommendation, not an industry read. The initiation\'s job is to describe MHSY\'s actual market, not to redirect the company\'s GTM.'],
      ['Payer mix affects hospital revenue but software purchasing decisions are made on a separate cycle and decoupled from rate changes', 'Hospital capital and OpEx software cycles are not decoupled from reimbursement — value-based care and Medicare rate updates have moved the IT budget line in observable cycles since the mid-2010s.'],
    ],
    'For a provider-facing software vendor, payer dynamics never show up in the bookings line directly — they show up one cycle later in budget tightening and deal slippage. The initiation has to name that transmission so the buy-side understands the demand model, not just the GTM motion.'),

  q(4370502, 'Series 86', CHAPTER, 'Hospital IT decision-maker map',
    'The note has to describe who actually buys MHSY at a hospital system. Which decision-maker framing best matches how clinical decision support deals close in the US?',
    'CMIO (chief medical informatics officer) is the primary sponsor, CIO controls the integration risk and the contract, and the CFO signs off on the capital — three-party committee where the CMIO loses the deal if any of the other two object',
    [
      ['The CIO is the sole decision-maker because all software purchases roll up through IT', 'Calling the CIO the sole buyer is a SaaS-generalist instinct that does not match clinical software. The CMIO sponsors clinical decision support deals; CIO involvement is necessary but not sufficient.'],
      ['Clinicians at the unit level drive purchases bottom-up once the product proves out in pilots', 'Bottom-up clinician adoption is the validation mechanism, not the purchasing mechanism. Hospital systems do not sign $400K+ annual contracts off the back of unit-level enthusiasm without C-suite alignment.'],
      ['The CEO of the hospital system is the final approver and the only relevant relationship to map', 'The hospital CEO is a deal sponsor at most and only on the largest deployments. Treating the CEO as the operative decision-maker misses where the deal actually stalls — usually CIO integration risk or CFO budget timing.'],
    ],
    'Mapping the decision-maker triad explicitly tells the buy-side that the analyst understands the sales cycle. For MHSY, the CMIO/CIO/CFO committee shapes deal length, slip risk, and which quarter\'s services line gets pushed when budgets tighten.'),

  q(4370503, 'Series 86', CHAPTER, 'Best-of-breed vs full-suite competitive frame',
    'Epic and Cerner offer clinical decision support modules bundled inside the EHR. MHSY is best-of-breed. How should the initiation frame this competitive dynamic so the buy-side can evaluate moat durability?',
    'Best-of-breed wins when the bundled module is materially worse and the workflow gain is measurable — MHSY has to evidence the clinical outcome lift in published studies and customer references, because the alternative is "good enough, already paid for"',
    [
      ['MHSY has a structural advantage because it is purpose-built, while Epic and Cerner modules are afterthoughts inside larger suites', 'Calling EHR-bundled modules "afterthoughts" is a vendor talking point, not analysis. Epic in particular invests heavily in clinical decision support, and the buy-side will recognize the framing as marketing if not backed by outcome data.'],
      ['Epic and Cerner will eventually consolidate clinical decision support inside the EHR core, so MHSY is on borrowed time as a standalone', 'Treating consolidation as inevitable ignores 15 years of evidence — best-of-breed has persisted alongside EHRs precisely because the workflow depth differs. The thesis can argue either way, but it cannot assume the conclusion.'],
      ['The competition does not matter at MHSY\'s scale because the market is large enough for multiple winners', 'Market-size hand-waving is exactly the framing the buy-side discounts. Moat questions live in head-to-head sales cycles, not in TAM addition.'],
    ],
    'Best-of-breed vs full-suite is the load-bearing competitive question in clinical software. The initiation has to commit to a read on it — backed by outcome evidence and win-rate data — because every later argument about gross margin, NRR, and TAM penetration depends on whether the answer is "best-of-breed wins" or "the bundled module is good enough."'),

  q(4370504, 'Series 86', CHAPTER, 'MHSY moat assessment',
    'A senior analyst challenges you: "What stops Epic from building exactly what MHSY sells over the next 18 months and bundling it for free?" Which moat argument actually survives this question?',
    'MHSY has eight years of clinical outcome data, integration with non-Epic order entry systems, and 280 customer-specific decision rule libraries — replicating that requires either time or acquisition; bundling a thinner version of the product does not solve for the configured customer base',
    [
      ['MHSY has a better UI and faster product velocity than Epic\'s bundled module', 'UI velocity is a fragile moat against an incumbent that already owns the customer\'s system of record. The buy-side has heard "we ship faster" before and will not accept it as the answer to a serious displacement question.'],
      ['Epic will not enter the clinical decision support category because it conflicts with their core EHR positioning', 'Optimism about Epic\'s strategic focus is exactly the kind of thesis statement that ages badly — Epic has already bundled overlapping modules in adjacent categories. The moat argument has to assume the competitor looks, not hope they do not.'],
      ['MHSY\'s 280 customers create network effects that compound as the customer base grows', 'Clinical decision support does not have meaningful network effects — one hospital\'s rule library does not make another hospital\'s deployment better. Invoking network effects where they do not exist signals the analyst is reaching for a moat label.'],
    ],
    'Moat against a system-of-record incumbent is usually structural rather than feature-based. For MHSY, the answer lives in eight years of outcome studies, non-Epic integrations, and configured customer state — none of which Epic can replicate by shipping a checkbox in the next release.'),

  q(4370505, 'Series 86', CHAPTER, 'What evidence would change the rating',
    'Inside the initiation thesis you have to commit to evidence that, if it appeared in the next 18 months, would force a rating change. Which evidence threshold is most useful for MHSY?',
    'A material slowdown in net new bookings at the top-50 health system tier (MHSY\'s reference base) combined with subscription gross margin compression below 78% — both directly test the best-of-breed durability claim',
    [
      ['A general slowdown in healthcare IT sector multiples relative to broader software comps', 'Sector multiple compression is a market environment read, not a thesis test. The rating logic should depend on MHSY-specific evidence, not on whether the buy-side is feeling generous about software in general.'],
      ['Quarterly revenue beats or misses of more than 2% against consensus', 'A 2% revenue beat or miss is noise inside a single quarter at MHSY\'s scale, especially given the services lumpiness. The rating logic has to point at underlying behavior, not at headline prints.'],
      ['A change in the CEO or CFO over the next 18 months', 'Executive change is a governance event, not a thesis test. It may warrant a re-rating but does not directly speak to the load-bearing claims in the thesis.'],
    ],
    'Evidence thresholds make a thesis testable. For MHSY, the load-bearing claim is best-of-breed durability — so the falsifying evidence has to be top-tier bookings slowdown and subscription gross margin compression, both of which speak directly to whether bundled EHR modules are catching up.'),

  q(4370506, 'Series 86', CHAPTER, 'Sizing the clinical decision support segment',
    'The buy-side asks how big the clinical decision support segment actually is for a company like MHSY. Which sizing approach holds up under scrutiny?',
    'Bottom-up: ~6,100 US community hospitals × ~75% addressable (large enough for the product) × $300–500K ACV at full attach — call it a $1.5–2.0B addressable revenue pool with international optionality flagged separately',
    [
      ['Top-down from the $50B+ US health IT TAM with a 5% capture assumption for MHSY', 'Top-down with a capture percentage is the canonical sizing mistake. The buy-side immediately discounts "5% of a big number" because it tells them nothing about which hospitals actually buy, at what ACV, under what penetration assumption.'],
      ['Forward-project MHSY\'s current revenue at the implied growth rate over 10 years', 'Projecting revenue forward is a forecast, not a TAM build. The two are different exercises and conflating them hides the assumption (penetration ramp) that the buy-side most wants to see.'],
      ['Use sell-side industry reports that quote a global clinical decision support market of $2.5B', 'Sell-side industry reports tend to mix in adjacent categories (pharmacy support, imaging AI) and are rarely a clean fit for the segment a specific company plays in. Citing the headline number without decomposing it invites questions the analyst should already have answered.'],
    ],
    'Bottom-up sizing with explicit unit counts, addressability, and ACV is the only TAM approach the buy-side trusts on initiation. Showing each input makes the penetration assumption legible and gives the rest of the model a defensible ceiling rather than an aspirational one.'),

  q(4370507, 'Series 86', CHAPTER, 'Recurring vs services revenue mix',
    'MHSY reports 85% subscription / 15% professional services revenue. The note has to explain why the mix matters. Which framing is most useful for the buy-side?',
    'Subscription growth is the durable signal; services is project-driven, lumpy, and lower gross margin — the buy-side rates MHSY off the subscription line and treats services as a leading indicator (implementations) and a margin drag, not as a separate growth story',
    [
      ['85% subscription is the headline; services is administrative and not worth detailed treatment in the note', 'Calling services "administrative" misses that it leads subscription by 1–3 quarters and absorbs gross margin. The initiation has to engage with the mix, not skip it.'],
      ['Services is high-touch and creates stickiness; the note should treat it as a competitive advantage', 'Stickiness from services has a real cost in gross margin and scaling friction. The note cannot treat services as moat without first being explicit about what it costs.'],
      ['The mix is about right for a healthcare IT vendor and does not warrant special treatment', 'Saying the mix "is about right" without engaging with what it implies is exactly the kind of pattern-match the buy-side discounts. The mix has consequences for valuation comp choice and gross margin trajectory.'],
    ],
    'Subscription versus services mix is one of the load-bearing decisions the initiation has to make explicit. For MHSY, the buy-side will rate the subscription line and treat services as a leading implementation signal — not separate growth — so the note has to map the two against each other rather than blend them.'),

  q(4370508, 'Series 86', CHAPTER, 'Customer concentration in health IT',
    'MHSY has 280 hospital-system customers including 15 of the top-50 US health systems. The largest customer is ~6% of revenue. How should concentration risk be framed in the initiation?',
    'Concentration is moderate but the renewal cycle matters more than the headline percentage — health system contracts are typically 3–5 years, so concentration risk crystallizes in renewal windows; the note should disclose which top-10 customers are up for renewal in the next 8 quarters',
    [
      ['6% top customer is below the conventional 10% concentration threshold and does not need flagging', 'Threshold rules are heuristics, not policy. The risk is in renewal proximity and contract length, not in whether a single number sits above or below 10%.'],
      ['Customer concentration is not a meaningful risk for MHSY because 280 customers is a diversified base', '280 customers is diversified by SaaS standards but the top-50 health systems do a disproportionate amount of MHSY\'s expansion revenue. Treating concentration as solved by customer count misses where the risk actually lives.'],
      ['The top customer at 6% should be treated as a kill criterion if it ever exceeds 10%', 'Inventing a threshold for kill criteria without grounding it in the renewal cycle or the upsell dynamics is arbitrary. The criterion should be tied to behavior, not to a percentage line.'],
    ],
    'Concentration in health IT is a renewal-window question more than a percentage question. Health system contracts run multi-year, so the risk lives in which contracts are up and when — the note should show that calendar, not just the static percentage.'),

  q(4370509, 'Series 86', CHAPTER, 'Why-now for the MHSY thesis',
    'A senior analyst asks: "Why initiate on MHSY now rather than six months ago or six months from now?" What is the strongest "why now" framing?',
    'Hospital margin pressure has accelerated decision support adoption to manage clinician productivity and denial rates, and MHSY just absorbed DiagnostixAI — the next four quarters will show whether the integration drives the bolt-on attach into reference accounts, which is the catalyst that re-rates the stock',
    [
      ['Healthcare IT multiples have compressed and MHSY is trading cheap on forward EV/sales relative to its growth profile', 'Multiple-cheapness is a valuation observation, not a why-now. The initiation has to explain why the next four quarters will reveal something — multiples alone do not drive a buy-side decision to engage with new coverage.'],
      ['MHSY is well-positioned for long-term secular tailwinds in healthcare digitization', 'Secular-tailwind framing is the canonical hand-wave. It works for almost any health IT name and tells the buy-side nothing about why the next year matters specifically for MHSY.'],
      ['The professional CEO has been in seat since 2022 and the company is now executing more predictably than under the founder', 'Internal readiness explains the company but not the market timing. A why-now points at something measurable in the next 4–8 quarters that will resolve a debate, not at a multi-year leadership transition.'],
    ],
    'A why-now anchors on a specific event window in which the thesis becomes testable. For MHSY, the DiagnostixAI integration plus the hospital-margin-driven adoption acceleration both crystallize inside the next four quarters — that is the window the buy-side is being asked to engage with.'),

  // -------------------------------------------------------------------------
  // LESSONS 3–4 — Filings + earnings (4370510–4370519)
  // Output: reading MHSY's 10-K, parsing the recent earnings, interpreting
  // the narrowed full-year guidance. Forces the analyst to extract signal
  // from the documents rather than from management commentary.
  // -------------------------------------------------------------------------
  q(4370510, 'Series 86', CHAPTER, '10-K reading priority',
    'You have one afternoon to read MHSY\'s most recent 10-K before the initiation note draft is due. Which sections are the highest priority and why?',
    'MD&A revenue decomposition, risk factors (new ones added vs last year), contract liability and deferred revenue notes, and the customer concentration disclosure — these four sections collectively reveal what management chose to surface and what the auditor required them to surface',
    [
      ['The CEO\'s letter and the strategy section, since those describe management\'s view of the business', 'The CEO letter is the most curated piece of the document. It is useful as context but is the lowest-information section per minute spent — the rest of the 10-K has the constraints that matter.'],
      ['The financial statements alone, since the numbers are the only thing that does not get spun', 'Financial statements without the footnotes are easy to misread. The 10-K\'s information density lives in the footnotes (revenue recognition, contract liabilities, segment disclosure) and the MD&A.'],
      ['The full document in order, allocating equal time to each section', 'Equal-time allocation is how junior analysts run out of afternoon before reaching the contract liability footnote. Initiation reading should be prioritized by where the load-bearing claims live.'],
    ],
    'A 10-K read for initiation is prioritization, not coverage. The MD&A reveals which line items management defends with words; the risk factors reveal what changed year over year; the footnotes reveal revenue recognition and concentration shape. Those are the four pieces that carry into the model.'),

  q(4370511, 'Series 86', CHAPTER, 'Parsing MHSY revenue recognition',
    'MHSY\'s 10-K discloses that subscription revenue is recognized ratably over contract terms (typically 3 years) and that professional services revenue is recognized as work is performed using percent-completion. How does this shape the model?',
    'Subscription bookings show up in deferred revenue first and bleed into recognized revenue over 36 months — so deferred revenue and remaining performance obligations (RPO) are leading indicators of subscription growth; services is recognized closer to real time and is the volatile line in any given quarter',
    [
      ['Both lines should be modeled bookings-out with the same recognition schedule for simplicity', 'Modeling both lines with the same schedule misrepresents the business. Subscription and services have different recognition mechanics and different leading indicators — collapsing them hides exactly the signal the model is supposed to surface.'],
      ['Revenue recognition is an accounting detail and the model should focus on cash flow instead', 'Revenue recognition mechanics drive how bookings translate into reported revenue, which drives both EPS and the multiples buy-side investors price on. Skipping recognition to focus on cash is throwing away the analytic frame the comp set is priced on.'],
      ['Subscription should be modeled on a billings-equals-revenue basis since the company is steady-state', 'Billings equals revenue only in a steady state with flat bookings — MHSY is growing 14% on the subscription line, so the gap between billings and revenue is the leading indicator the model exists to capture.'],
    ],
    'Revenue recognition is the bridge between bookings momentum and reported revenue. For MHSY, deferred revenue and RPO lead subscription revenue by 6–18 months — modeling that correctly is the difference between a model that anticipates the print and one that follows it.'),

  q(4370512, 'Series 86', CHAPTER, 'Reading the risk factors year-over-year',
    'You compare MHSY\'s current 10-K risk factors to last year\'s. Two new items appear: language about "potential disruption from generative AI competitors" and an expanded disclosure on "data privacy and HIPAA enforcement actions." How should the note treat these additions?',
    'Flag both as management-signal disclosures — the AI risk factor previews how MHSY will defend its category against AI-native entrants, and the HIPAA expansion likely reflects either a specific enforcement action against MHSY or a peer; both belong in the risk register and warrant follow-up questions on the next call',
    [
      ['Risk factor additions are boilerplate and adding boilerplate is a standard year-end accounting exercise', 'Treating new risk factors as boilerplate is exactly the mistake the disclosures are meant to surface. Counsel adds risk-factor language deliberately, usually because something specific has changed.'],
      ['The AI risk factor is generic — every software company added one last year — but the HIPAA expansion is concerning and should be highlighted as a bear case', 'Half-acknowledging the AI risk factor misses that even generic-sounding language is added in response to specific competitive shifts. Both deserve attention; treating one as noise hides useful signal.'],
      ['Both should be treated as material risks and warrant a "Sell" rating until clarified', 'Jumping from new risk factors to a rating change is over-rotation. The right move is to add them to the risk register and pursue follow-up on the next earnings call, not to re-rate immediately.'],
    ],
    'New risk factors are one of the highest-signal disclosures in the 10-K because they cost management nothing to write but a lot if not written. Year-over-year comparison surfaces the specific changes management considers worth disclosing — for MHSY, that is AI competitive pressure and HIPAA exposure, both of which feed the bear case.'),

  q(4370513, 'Series 86', CHAPTER, 'MHSY recent earnings recap',
    'MHSY missed consensus revenue by 3% (services revenue slipped due to a project deferral with one large customer), beat subscription by 2%, and narrowed full-year guidance to the lower half of the prior range. How should the initiation summarize the quarter?',
    'Mixed quarter — subscription strength is the durable signal and supports the thesis, services slip is timing-driven and recoverable, but the guidance narrowing toward the lower half implies management is hedging on services recovery in the back half; net interpretation is neutral on the print and modestly cautious on near-term services',
    [
      ['The miss is the headline — MHSY guided down and missed top line, so the print is a clear negative', 'Reading "narrowed to the lower half" as a guide-down is technically correct but misses that the subscription line beat. The headline framing throws away the more useful decomposition.'],
      ['The beat on subscription is the headline — MHSY beat on the durable line and the services slip is timing noise', 'Treating services slip as pure noise is wishful — the company narrowed its own guidance because of it. The interpretation has to engage with the guidance change, not dismiss the line.'],
      ['Mixed quarter but ultimately positive — narrowing guidance reduces uncertainty and the subscription beat is the more important read', 'Calling guidance narrowing "reducing uncertainty" is spin — narrowing toward the lower half is a directional signal even when the range tightens. The initiation should read the direction, not just the width.'],
    ],
    'Earnings recaps in initiation notes have to decompose the print rather than collapse it to a headline. For MHSY, the subscription beat and the services slip carry different implications for the thesis — and the guidance narrowing toward the lower half is itself a signal independent of the beat/miss.'),

  q(4370514, 'Series 86', CHAPTER, 'Interpreting narrowed guidance',
    'MHSY entered the quarter guiding full-year revenue to $1.20–1.24B (midpoint $1.22B) and now guides $1.20–1.22B (midpoint $1.21B). How should the initiation interpret this?',
    'A ~$10M effective guide-down disguised as a "narrowing" — the top end moved while the bottom did not, which is the standard tell that management has lost visibility on the upside scenarios; the note should reset to the new midpoint and explain the optics',
    [
      ['Guidance was simply tightened, not lowered — the range narrowed and the bottom is unchanged, which is a neutral event', 'Calling this neutral takes management\'s framing at face value. The top end fell, so the expected outcome moved down — a tightened-but-lower range is a soft guide-down in everything but name.'],
      ['Guidance was meaningfully lowered and the print should be read as a clear negative deserving a downgrade', 'Over-rotating to "meaningfully lowered" misses that the bottom of the range held. The right read is "softened, not collapsed" — calibration matters here.'],
      ['Guidance changes mid-year are routine and the initiation should not put weight on them', 'Mid-year guidance changes are routine in frequency but not in information content. The pattern of which end of the range moves is one of the highest-signal disclosures in any quarter.'],
    ],
    'Guidance ranges carry information in shape, not just in midpoint. When the top end falls and the bottom holds, management is removing upside scenarios — for MHSY that means the buy-side should reset to the new midpoint and read the change as a soft guide-down regardless of how it is phrased on the call.'),

  q(4370515, 'Series 86', CHAPTER, 'Services project deferral diagnostic',
    'The MHSY CFO attributed the services miss to "one large customer deferring a multi-quarter implementation project." How should the initiation evaluate this attribution?',
    'A single deferral can be timing, but the analyst needs to test whether the deferral signals broader implementation backlog softness — pull RPO, services backlog, and implementation headcount changes; one customer cited specifically usually means several more are slipping more quietly',
    [
      ['Take management\'s attribution at face value since they have visibility into the customer relationship that the analyst does not', 'Taking attribution at face value is exactly what initiations are supposed to test. Management has every incentive to name a single deferral rather than a pattern; the analyst\'s job is to check whether the pattern exists.'],
      ['Treat the deferral as a kill signal for the thesis since implementation slippage usually leads subscription slippage', 'Reflexive kill-signal interpretation jumps past the diagnostic. Implementation slip can lead subscription slip but does not always — the question is whether the deferral is isolated or systemic, and the data exists to test that.'],
      ['Set up a kill criterion: if services revenue does not recover next quarter, the thesis is broken', 'A one-quarter window is too short to test services recovery — projects deferred this quarter often land 2–3 quarters out. Calibrating the criterion to the actual deferral cycle is what makes it a useful kill criterion rather than a placeholder.'],
    ],
    'Single-customer attributions for misses are management\'s preferred framing precisely because they imply isolation. The analyst\'s job is to test that — pull the backlog, the RPO, the headcount data — because the pattern usually shows up in one of those three before it shows up in the next earnings call.'),

  q(4370516, 'Series 86', CHAPTER, 'Subscription beat composition',
    'The 2% subscription beat came roughly half from a faster ramp at three top-50 customers (cross-sell expansions) and half from a new logo that closed 10 days earlier than modeled. How should the initiation weight these two contributions?',
    'Cross-sell expansion is the durable signal — it directly tests the platform thesis and implies the reference accounts are absorbing more modules; the new-logo timing is a pull-forward, valuable for the quarter but not extrapolatable; net read is constructive on the thesis even more than the headline beat suggests',
    [
      ['Both contributions equally support the beat; the composition does not change the read', 'Treating the two contributions equally collapses the most useful piece of the print. Cross-sell tells you about platform expansion; pull-forward tells you about quarter-end deal timing — they are not the same signal.'],
      ['The new logo pull-forward is the more important signal since it shows the pipeline is converting faster than expected', 'Reading a 10-day pull-forward as pipeline acceleration is over-interpretation. One deal closing slightly early is not evidence of pipeline conversion rate change.'],
      ['Both contributions are noise inside a 2% beat and should not be weighted heavily', 'A 2% beat is small in dollars but the composition is informative. Dismissing the decomposition because the headline is small is missing the point of decomposition.'],
    ],
    'Beat/miss decomposition by source is one of the highest-leverage reads in an earnings recap. For MHSY, cross-sell expansion into reference accounts tests the platform thesis directly — that is the part of the print the initiation should weight, not the timing contribution.'),

  q(4370517, 'Series 86', CHAPTER, 'Tracking RPO and deferred revenue',
    'MHSY\'s 10-K shows RPO of $1.4B (12% YoY) and current deferred revenue of $310M (10% YoY) — both growing slower than reported subscription revenue (14%). How should the initiation interpret this divergence?',
    'A modest leading-indicator softness — RPO and deferred growth running below subscription growth usually previews subscription deceleration 2–4 quarters out; the note should flag this and reset the subscription forecast for the back half rather than extrapolate the trailing 14%',
    [
      ['RPO and deferred growth are largely accounting-driven and not useful for forecasting subscription revenue', 'RPO and deferred revenue are exactly the leading indicators an analyst should be using — calling them accounting noise discards the most useful subscription forecasting data on the page.'],
      ['Subscription growth is the recognized line and is what matters; leading indicators are secondary', 'Recognized revenue is what the company reports, but the leading indicators are what the analyst is paid to surface. Treating leading indicators as secondary inverts the value of the initiation.'],
      ['12% RPO growth is strong and supports continued mid-teens subscription growth into next year', 'Reading 12% RPO growth as supportive of mid-teens subscription growth ignores that RPO is currently below reported subscription growth — directionally that previews deceleration, not continuation.'],
    ],
    'Leading-indicator decomposition is where initiations earn their keep. For MHSY, RPO and deferred growth running below subscription growth is the early signal of subscription deceleration — and the model should reflect that pattern rather than extrapolate the trailing rate.'),

  q(4370518, 'Series 86', CHAPTER, 'DiagnostixAI bolt-on accounting treatment',
    'MHSY closed the $40M DiagnostixAI acquisition mid-quarter. The 10-Q discloses ~$8M of acquired revenue contribution in the period and ~$30M expected for the next twelve months. How should the model treat this revenue contribution?',
    'Carve out the acquired revenue separately so organic growth can be measured cleanly — the buy-side rates MHSY off the organic line, and conflating organic and inorganic is one of the easiest ways to overstate the thesis case',
    [
      ['Blend the acquired revenue into the subscription line since the product is being integrated into the core platform', 'Blending inorganic into organic is the canonical valuation mistake. Even if the product is integrating, the buy-side has to see organic growth separately to evaluate the thesis on its own terms.'],
      ['Treat the acquired revenue as one-time and exclude it from the forecast', 'Excluding the acquired revenue understates total revenue and misrepresents the company\'s actual scale. The right move is to disclose it separately, not to drop it.'],
      ['Use a single blended growth rate that includes both organic and the DiagnostixAI contribution', 'A blended rate is exactly what management may prefer to report; the analyst\'s job is to decompose. The whole point of separate disclosure is that organic growth is the load-bearing number.'],
    ],
    'Inorganic revenue is always disclosed separately in a serious model — it is the only way to test the underlying growth thesis. For MHSY, DiagnostixAI contributes ~$30M of NTM revenue (~2.5% of total) and should sit on a clearly separate row from organic subscription growth.'),

  q(4370519, 'Series 86', CHAPTER, 'Reading the segment disclosure',
    'MHSY\'s 10-K provides revenue split between subscription and services but does not disclose customer segment (large health system vs community hospital) or geography. The note has to engage with the limitation. How?',
    'Reconstruct the segment view from customer count disclosures, the proxy statement\'s top-customer information, and customer references — and flag the limitation explicitly in the note so the buy-side knows which conclusions rest on triangulation rather than disclosed data',
    [
      ['Use only the disclosed segmentation since reconstructing is speculation', 'Refusing to triangulate when management discloses less than the analyst needs is exactly the gap a serious initiation fills. The right move is to triangulate carefully, not to retreat to disclosed data only.'],
      ['Push management for additional disclosure on the next call and defer the segment analysis until then', 'Deferring is a way of writing an initiation note that does not actually do the analytical work. The buy-side wants the read now, with the limitations flagged — not a placeholder.'],
      ['Estimate segment mix from sector reports and use that without flagging the source quality', 'Using sector report estimates without flagging the source is worse than not estimating at all — it presents triangulation as data. The discipline is to surface the limitation, not hide it.'],
    ],
    'When disclosure is thin, the initiation has to triangulate visibly. The combination of customer count disclosures, references, and proxy data usually supports a defensible segment read — but only when the note shows its work so the buy-side knows which conclusions are reconstructed.'),

  // -------------------------------------------------------------------------
  // LESSONS 5–6 — Forecast model (4370520–4370529)
  // Output: MHSY 5-year forecast model with subscription/services split,
  // working capital, capex, and segment-specific assumptions. Forces the
  // analyst to commit to drivers rather than backing into a growth rate.
  // -------------------------------------------------------------------------
  q(4370520, 'Series 86', CHAPTER, 'Forecast architecture for MHSY',
    'You are building the MHSY 5-year forecast. Which architecture is the right one for a healthcare IT subscription business?',
    'Subscription revenue forecast off net customer additions × ACV × NRR (with cross-sell modeled separately), services revenue forecast off implementations bookings backlog with a ~2-quarter lag, then operating model from there',
    [
      ['Top-down: apply a single revenue growth rate to total revenue and decompose into subscription/services downstream', 'A top-down single growth rate hides every assumption that matters. The buy-side cannot evaluate the model — and neither can the analyst — without driver-level visibility.'],
      ['Reverse-engineer the rate of growth implied by management\'s long-term targets and reconcile to that', 'Backing into management\'s long-term targets is anchoring on a number the analyst is supposed to independently validate. The forecast should be built from the drivers and then compared to management, not the reverse.'],
      ['Use a per-share revenue forecast since the buy-side ultimately prices on per-share metrics', 'Per-share is a downstream metric. The forecast architecture has to be operational (customers, ACV, NRR) before it becomes financial — going straight to per-share skips the analytic layer.'],
    ],
    'Forecast architecture has to match the operating model. For a subscription business like MHSY, that means logo dynamics × ACV × NRR for subscription, and services from implementation backlog with a lag. Top-down growth rates produce models that cannot be defended question-by-question with the buy-side.'),

  q(4370521, 'Series 86', CHAPTER, 'Net new logo forecast',
    'MHSY added net 22 new logos last year (gross 28, churn 6). Forward you have to assume net new logos for years 1–5. How should this assumption be made defensible?',
    'Anchor net new logo additions to sales capacity (sales rep count × productivity per rep) rather than to a growth rate — capacity has a real ceiling, so the model can be stress-tested against hiring plans and rep ramp times',
    [
      ['Extrapolate net new logos at the last-year rate and assume the trend continues', 'Trend extrapolation breaks down precisely when the buy-side cares — at the inflection points. Sales capacity grounding lets the model anticipate inflection rather than ride past it.'],
      ['Tie net new logos to addressable market penetration (e.g., assume 10% of remaining addressable logos per year)', 'Penetration-based forecasts are usually too smooth and too aggressive — they assume the sales motion can absorb a constant share each year, which rarely matches the actual hiring and ramping cadence.'],
      ['Start from management\'s long-term customer target and force a smooth annual path toward it', 'Back-solving from management targets is the opposite of independent forecasting. The model should be built from drivers and compared to targets, not constructed to land on them.'],
    ],
    'Logo additions are bounded by sales capacity, which is a real, modelable constraint — heads × productivity × ramp. Grounding the forecast there is what makes it defensible under buy-side cross-examination and what lets it predict inflections rather than ride past them.'),

  q(4370522, 'Series 86', CHAPTER, 'ACV ramp and cross-sell modeling',
    'MHSY\'s current average ACV is ~$430K. Cross-sell from the DiagnostixAI bolt-on and from new clinical modules in the roadmap is expected to push it higher. How should ACV ramp be modeled?',
    'Model ACV at the cohort level — new logos land at ~$300K and ramp toward $500K over 4–6 years through module attach; explicitly separate the new-logo land ACV from the installed-base expansion ACV',
    [
      ['Use a blended ACV that grows at 5% per year to reflect the cross-sell story', 'A blended 5% ACV growth rate hides the cohort dynamics. Cross-sell is unevenly distributed — top-50 health systems attach faster than community hospitals — so blending erases the most useful signal.'],
      ['Hold average contract value flat and let revenue growth come only from new customers', 'Holding ACV flat ignores the platform expansion thesis. If the thesis claims cross-sell drives part of the growth, the model has to reflect it.'],
      ['Model ACV at the long-term steady-state level ($500K) across all customers from year 1', 'Putting all customers at steady-state ACV from year 1 overstates near-term revenue and breaks the cohort logic. The whole point of the ramp is to show how the platform thesis plays out over time.'],
    ],
    'ACV modeling at the cohort level — separating new-logo land ACV from installed-base expansion — is the discipline that makes the cross-sell story testable. The buy-side will probe both numbers separately, so the model has to support that decomposition rather than collapse it.'),

  q(4370523, 'Series 86', CHAPTER, 'NRR forecast for MHSY',
    'MHSY discloses 109% NRR for the last fiscal year. The forward model has to commit to an NRR path. How should it be set?',
    'NRR drift toward 106–108% as the customer base matures and cross-sell penetration deepens — high NRR is hardest to sustain at scale; flag the trajectory as a key thesis-test variable and show the revenue sensitivity to each 1pt of NRR',
    [
      ['Hold NRR flat at 109% across the forecast period since that is the most recent disclosed number', 'Holding NRR flat across five years ignores the well-documented pattern that NRR drifts down as the installed base matures. The model has to engage with the drift, not pretend it does not happen.'],
      ['Forecast NRR rising to 115% as cross-sell modules attach more aggressively', 'Forecasting NRR materially above the current rate without explicit modeling of which modules drive the gain is aspirational. Higher NRR has to be earned in the model with named attach assumptions.'],
      ['Use management\'s long-term NRR target as the terminal NRR for years 4–5', 'Management targets are usually the optimistic end of plausible NRR — the forecast should commit to a path the analyst defends independently, with the gap to management\'s target shown explicitly.'],
    ],
    'NRR is the single most important metric for a subscription business and the buy-side will probe each pt of the assumption. For MHSY, modest drift toward 106–108% reflects scale dynamics honestly and lets the model show sensitivity to the key thesis variable rather than hiding behind a flat headline.'),

  q(4370524, 'Series 86', CHAPTER, 'Services revenue forecast cadence',
    'MHSY\'s services revenue grew 2% last year and is currently 15% of total. How should the services line be forecast?',
    'Services revenue forecast off implementation backlog with a 1–2 quarter lag and modeled as a percentage of subscription bookings — services usually leads subscription by ~2 quarters, so it serves as both a separate line and a check on the subscription forecast',
    [
      ['Forecast services flat at 2% growth in line with the current rate', 'Holding services at 2% ignores that the line has its own driver — implementation backlog — that the model can build directly. Treating services as a residual line gives up information.'],
      ['Forecast services to grow at the same rate as subscription since they share the same customers', 'Services and subscription do not grow at the same rate — services is project-based and lumpy, subscription is ratable. Tying them together hides the leading-indicator relationship.'],
      ['Forecast services to decline toward 0% as the company shifts toward pure subscription', 'Forecasting services to zero is wishful — implementations generate ongoing services revenue and the line will not collapse short of a major strategic shift. Modeling it that way misrepresents the operating reality.'],
    ],
    'Services revenue is its own forecast with its own driver (implementation backlog) and its own role as a leading indicator for subscription. For MHSY, modeling services off backlog with a 1–2 quarter lag preserves both the line-level forecast and the cross-check on subscription growth.'),

  q(4370525, 'Series 86', CHAPTER, 'DiagnostixAI integration assumptions',
    'The DiagnostixAI bolt-on contributes ~$30M of NTM revenue. Management expects synergies on attach rates into existing customers within 12–18 months. How should the model treat synergy revenue?',
    'Model the stand-alone DiagnostixAI revenue at the ~$30M run-rate and disclose synergy revenue as a separate upside scenario — synergies are real but rarely arrive on management\'s timeline; the base case should not assume them and the upside should size them explicitly',
    [
      ['Bake synergy revenue into the base case at management\'s guided pace', 'Baking management-guided synergies into the base case is the canonical M&A modeling mistake. Synergies routinely slip 6–12 months and miss the guided magnitude; the base case should not depend on them.'],
      ['Exclude synergy revenue from every case because management timing is uncertain', 'Leaving synergies out entirely throws away the strategic logic of the acquisition. The right move is to model them as a separate scenario with explicit assumptions, not to omit them.'],
      ['Model synergies as a permanent uplift to organic growth rates across all years', 'Treating synergies as a permanent organic uplift conflates inorganic strategy with organic execution. The decomposition has to stay clean — synergies belong on their own row, not inside the organic line.'],
    ],
    'Acquisition synergies belong in a separate scenario row, not in the base case. For MHSY and DiagnostixAI, the discipline is to base-case the stand-alone $30M run-rate and use the synergy scenario to size upside — keeping the organic thesis clean and the inorganic upside legible.'),

  q(4370526, 'Series 86', CHAPTER, 'Operating margin trajectory',
    'MHSY\'s LTM non-GAAP operating margin is 22%. The forward model has to commit to a margin path. How should it be set?',
    'Modest expansion toward 25–27% over 5 years driven by subscription gross margin scale and S&M leverage, partially offset by R&D reinvestment in AI features and integration costs from DiagnostixAI; show the bridge year by year rather than a smooth ramp',
    [
      ['Expand operating margin to 35%+ over 5 years in line with mature SaaS peer levels', 'Expanding margins to 35% over 5 years assumes MHSY scales like a pure SaaS peer, which ignores the 15% services drag. Margin expansion has to respect the operating model, not aspire past it.'],
      ['Hold operating margin flat at 22% since the company is reinvesting heavily', 'Holding margins flat ignores the natural subscription gross margin scaling. Even with reinvestment, the trajectory should reflect the mix shift toward subscription — flat is a non-decision.'],
      ['Compress operating margin to 18–20% to reflect AI competitive investment requirements', 'Compressing margins in the forecast without a specific evidenced investment plan is over-cautious. Margin expectation should engage with management\'s reinvestment posture, not preempt it.'],
    ],
    'Margin trajectory in a forecast model has to be earned line by line — gross margin scaling, S&M leverage, R&D reinvestment, services drag. For MHSY, the bridge from 22% to ~25–27% should be explicit so the buy-side can argue with each component rather than with a single ending number.'),

  q(4370527, 'Series 86', CHAPTER, 'Working capital modeling for subscription',
    'MHSY\'s deferred revenue runs at ~25% of next-twelve-months subscription revenue, reflecting annual upfront billing on most contracts. How should this shape working capital in the model?',
    'Working capital is a source of cash for MHSY — deferred revenue grows with subscription and adds to operating cash flow above net income; model deferred as a function of forward subscription rather than as a flat percentage of trailing revenue',
    [
      ['Model working capital as broadly neutral since SaaS businesses are working-capital-light', 'Calling MHSY working-capital-neutral misses that annual upfront billing makes it a positive working capital business. The cash flow profile is better than net income would imply, and the model has to show it.'],
      ['Model deferred revenue as a flat percentage of trailing revenue and let it grow proportionally', 'Tying deferred to trailing revenue lags the actual mechanic — deferred is created by forward bookings. The forecast captures more of the cash dynamic when it ties deferred to forward subscription.'],
      ['Working capital is an accounting line and does not need detailed treatment in an equity research model', 'Working capital is exactly where the difference between reported earnings and reported cash flow lives for a subscription business. Skipping it is skipping the cash conversion story.'],
    ],
    'Annual upfront billing makes subscription businesses positive on working capital — deferred revenue grows with bookings and contributes to operating cash flow above net income. For MHSY, tying deferred to forward subscription captures the dynamic correctly and supports the DCF cash flow build.'),

  q(4370528, 'Series 86', CHAPTER, 'Capex assumptions for health IT',
    'MHSY\'s capex (capitalized software development + cloud infrastructure + office) runs at ~5% of revenue. How should the forecast treat capex?',
    'Hold capex at 4–5% of revenue with capitalized software development as the largest piece — health IT vendors capitalize a meaningful share of engineering, so the ratio is structural rather than discretionary',
    [
      ['Reduce capex to 2% of revenue as the company scales operating leverage', 'Reducing capex below the structural level ignores capitalized software development, which scales with the engineering organization. The 4–5% ratio is structural for this kind of company.'],
      ['Increase capex to 8% of revenue to reflect AI infrastructure investment', 'Calling for an 8% capex level without specific evidence of an AI infrastructure buildout is speculative. The forecast should engage with management\'s stated capital plans rather than guess.'],
      ['Hold capex flat in dollars rather than as a percentage of revenue', 'Holding capex flat in dollars as revenue grows implies a thinning ratio, which contradicts the capitalized software dynamic. Capex usually scales with the engineering org, which scales with revenue.'],
    ],
    'Capex in healthcare IT is structurally ~4–5% of revenue, driven mostly by capitalized software development. Modeling it at that ratio rather than at an aspirational lower number is what keeps the cash conversion and DCF realistic.'),

  q(4370529, 'Series 86', CHAPTER, 'Stress-testing the forecast',
    'Your base-case 5-year revenue CAGR for MHSY is 13%. A senior analyst asks: "Show me what would have to be true for revenue growth to be 10% instead of 13%, and what would have to be true for it to be 16%." How should the stress-test be structured?',
    'Decompose the variance into the three drivers: net new logos, ACV ramp, and NRR — show which combination of softer-than-base on each gets to 10%, and which combination of stronger-than-base on each gets to 16%; the senior analyst is testing whether you understand which lever moves the model most',
    [
      ['Run a flat ±3 percentage point sensitivity on the headline growth rate', 'A flat sensitivity on the headline rate does not show which driver moves the result. The buy-side wants to see the operating story behind each scenario, not just the number.'],
      ['Re-run the model with bear and bull macro assumptions for healthcare IT', 'Macro framings for bear and bull cases skip the company-specific levers. The point of stress-testing is to surface which MHSY drivers carry the variance, not which macro regime applies.'],
      ['Run scenarios based on different terminal growth rates in the DCF', 'Terminal growth rate sensitivity is a valuation question, not a forecast question. The senior analyst is testing the forecast levers, which live in logos, ACV, and NRR — not in terminal value.'],
    ],
    'Stress-testing in the model is about showing which drivers carry the result. For MHSY, the three load-bearing levers are logo additions, ACV ramp, and NRR; decomposing the variance through each is what separates a model that can be defended from one that just reports a single growth rate.'),

  // -------------------------------------------------------------------------
  // LESSONS 7–8 — Valuation (4370530–4370539)
  // Output: MHSY football field — P/E, EV/EBITDA, EV/Sales applied to
  // subscription mix, DCF, target price, peer-multiple defense. Forces the
  // analyst to choose between multiples and defend each one separately.
  // -------------------------------------------------------------------------
  q(4370530, 'Series 86', CHAPTER, 'Selecting the right multiple for MHSY',
    'You are building the MHSY football field. The note will lean on one primary valuation methodology and use the others as cross-checks. Which is the right primary?',
    'EV/NTM revenue with adjustment for subscription mix and growth — for a 14%-subscription-growth software business at this stage, revenue multiples are the buy-side\'s primary frame; P/E becomes more useful as margins mature, but it is not the primary today',
    [
      ['P/E on NTM EPS, since US large- and mid-cap equity research is centered on per-share earnings', 'P/E is the standard for mature companies but is awkward for growth software where investment cycles distort EPS. For MHSY at 22% margin and reinvesting, EV/revenue is the cleaner primary.'],
      ['EV/EBITDA on NTM since it strips out non-cash items and is the standard mid-cap valuation lens', 'EV/EBITDA works for established cash-generative businesses but the SaaS comp set largely trades on revenue multiples. Anchoring on EBITDA puts MHSY into an awkward comp set fight.'],
      ['Sum-of-the-parts treating subscription and services as separate businesses with separate multiples', 'Sum-of-the-parts is rarely the primary for a single-segment software company. It can be a useful cross-check but the buy-side will not engage with it as the primary frame.'],
    ],
    'Multiple selection is a positioning decision before it is an arithmetic one. For MHSY, EV/NTM revenue is the primary because that is the lens the buy-side uses on the comp set; the others are cross-checks that show the conclusion holds across frames.'),

  q(4370531, 'Series 86', CHAPTER, 'Building the comp set',
    'You are choosing the public comp set for MHSY. Which selection is the most defensible?',
    'Veeva Systems (closest in business model — vertical SaaS to regulated buyer), Inovalon, Health Catalyst (closer in segment, weaker in execution), R1 RCM and Premier as adjacent health IT — disclose each comp\'s growth and margin profile so the buy-side can argue with which weighting matters most',
    [
      ['The entire BVP Emerging Cloud Index or the IGV ETF, since broad SaaS is the right reference set', 'Broad SaaS indices include too many businesses with different unit economics. The comp set should be narrow enough to defend but wide enough to triangulate — 5–7 specific names usually beats an index.'],
      ['Epic and Cerner since they are the dominant competitors in MHSY\'s adjacent space', 'Epic is private and Cerner is now Oracle Health. Neither trades cleanly enough to use as a public-market comp, and the analyst will not have the disclosed metrics to do the work.'],
      ['Only Veeva, since it is the only true subscription healthcare-adjacent software at scale', 'Anchoring entirely on Veeva produces a single-comp valuation that the buy-side will discount. The triangulation comes from showing how MHSY trades relative to multiple comps with different profiles.'],
    ],
    'Comp set selection is the foundation of the football field. For MHSY, the right set spans business-model comps (Veeva), sector comps (Inovalon, Health Catalyst), and adjacent health IT (R1 RCM, Premier) — and the note has to show each comp\'s growth and margin so the buy-side understands the basis of comparison.'),

  q(4370532, 'Series 86', CHAPTER, 'Adjusting for growth and margin differences',
    'MHSY trades at 4.2x NTM revenue. Veeva trades at 9.5x. A junior associate says "MHSY is cheap relative to Veeva." How should the initiation handle this comparison?',
    'Veeva grows ~15% with ~40% operating margin; MHSY grows ~13% with ~22% margin — Veeva\'s premium is mostly margin, not growth, and a margin-adjusted comparison narrows but does not close the gap; the note should show the regression of multiple vs growth + margin across the comp set',
    [
      ['Confirm the read: MHSY trades at a discount to Veeva on revenue multiple, which is the simple bull case', 'Confirming the read without margin adjustment is exactly the kind of pattern-match that gets a junior associate corrected on day two. Multiples without growth and margin adjustment are not directly comparable.'],
      ['Conclude the read is meaningless because Veeva and MHSY are different companies and cannot be compared', 'Refusing to compare because the companies differ throws away the comp set entirely. The right move is to adjust for the differences, not to abandon the comparison.'],
      ['Use only EV/EBITDA to compare since EBITDA controls for the margin difference', 'Switching to EBITDA strips out the operating leverage story that drives the multiple — the buy-side will still want to see the revenue multiple comparison, just adjusted properly.'],
    ],
    'Cross-comp multiple comparisons have to adjust for growth and margin to be meaningful. For MHSY vs Veeva, the discount narrows substantially when margin is normalized — running the comp set regression of multiple vs growth + margin is the discipline that produces a defensible target multiple.'),

  q(4370533, 'Series 86', CHAPTER, 'DCF construction for MHSY',
    'You are building the DCF for MHSY as a cross-check on the multiple-based valuation. Which construction is the most defensible?',
    'Explicit 5-year forecast with the operating model already built, then terminal value via Gordon Growth at 3.5–4% (US nominal GDP-ish) — keep the WACC in the 8.5–9.5% band, show sensitivity to terminal growth and WACC, and reconcile to the multiple-based fair value',
    [
      ['Use an exit-multiple terminal value at the average historical EV/sales of healthcare IT comps', 'Exit-multiple terminal values are circular when the multiple comparison is the primary methodology — using a multiple to validate a multiple does not add new information. Gordon Growth gives the DCF independent content.'],
      ['Run a 10-year explicit forecast with no terminal value to avoid the terminal value sensitivity issue', 'A 10-year explicit forecast at this stage has unmodelable years 6–10 and still has to handle the residual. Terminal value sensitivity is a feature of DCF, not a bug to engineer around.'],
      ['Rely only on the trading multiple because healthcare IT investors quote the sector that way', 'Dropping the DCF as a cross-check leaves the football field without a fundamentals anchor. Even an imprecise DCF disciplines the multiple analysis by surfacing what implied growth and margins the multiple actually requires.'],
    ],
    'DCF in an initiation note is a cross-check, not the primary, but the construction still has to be defensible. For MHSY, a 5-year explicit forecast plus Gordon Growth terminal, with sensitivity to WACC and terminal growth, gives the buy-side a fundamentals anchor for the multiple-based fair value.'),

  q(4370534, 'Series 86', CHAPTER, 'WACC selection',
    'For the MHSY DCF you have to pick a WACC. The company has no debt and net cash of ~$220M. Which approach is right?',
    'Cost of equity equals WACC (no debt) — beta sourced from comp set average levered beta (~1.1), risk-free rate from current 10-year Treasury, equity risk premium ~5% — show the inputs so the buy-side can argue with each rather than with the final number',
    [
      ['Use a generic 10% WACC for mid-cap healthcare IT to keep the analysis simple', 'A generic 10% WACC is the kind of placeholder that gets the analyst caught immediately. The buy-side will check whether the WACC reconciles to current rates and the comp set beta.'],
      ['Use MHSY\'s own historical levered beta from the past 5 years of stock returns', 'MHSY\'s own historical beta is noisy and reflects past capital structure; in a no-debt company, the right move is to use the comp set average levered beta with current capital structure.'],
      ['Adjust WACC downward to 7% to reflect the strong balance sheet and net cash position', 'Lowering WACC for net cash double-counts the balance sheet — the cash is already in enterprise-to-equity bridge. The discount rate for the operating business does not change because of cash on hand.'],
    ],
    'WACC selection is one of the easiest places to be caught with sloppy work. For MHSY, showing the inputs explicitly — comp set beta, current risk-free, equity risk premium — lets the buy-side argue with each piece rather than with a final headline number.'),

  q(4370535, 'Series 86', CHAPTER, 'Target price derivation',
    'Your football field shows multiple-based fair value ranges from $52 to $60, DCF-based fair value at $54. MHSY currently trades at $48. How should the target price be set?',
    'Anchor the target at ~$55–56 (12-month) — weight the EV/revenue methodology most heavily, use the DCF to confirm the range, and explain that the target reflects the comp set re-rating MHSY toward peer growth multiples as the DiagnostixAI integration progresses',
    [
      ['Set the target at $60 to be aggressive and reflect a bullish view of the business', '$60 is the top of the range and assumes everything works — setting the target at the high end signals over-confidence and gets revised quickly. A target should reflect the most likely outcome, not the upside scenario.'],
      ['Set the target at $48 to match the current price and avoid making a directional call', 'Setting the target at market is a non-recommendation — the buy-side did not pay for an initiation to learn the current price is the current price. The note has to commit to a direction.'],
      ['Set the target at the midpoint of $52 mechanically to avoid bias', 'Mechanical midpoint selection ignores that the methodologies should be weighted by relevance, not averaged. The DCF and the multiple methodologies are not equally informative — the weighting matters.'],
    ],
    'Target price is the synthesis of the football field, not the average. For MHSY, anchoring at ~$55–56 means weighting EV/revenue most heavily, confirming with DCF, and tying the path to a specific catalyst (the DiagnostixAI integration progress) — the buy-side trusts targets that reference catalysts more than ones that reference math.'),

  q(4370536, 'Series 86', CHAPTER, 'Football field presentation',
    'You are designing the football field chart for the MHSY initiation. Which presentation is the most useful for the buy-side?',
    'Horizontal bars per methodology (EV/NTM revenue, EV/NTM EBITDA, P/E, DCF, transaction comps where available) — each showing a low-mid-high range with the inputs disclosed in a footnote, and the current price and target marked as vertical lines',
    [
      ['A single chart showing the average fair value with confidence intervals', 'An average fair value across methodologies hides which methodology drives the result and which the analyst trusts. The football field exists precisely to disaggregate.'],
      ['A list of methodology results in text form rather than a chart', 'Text-form football field loses the visual comparison that makes the analysis useful. The chart is the standard format because it forces the analyst to commit to ranges per methodology and lets the buy-side see at a glance which methodologies cluster.'],
      ['Multiple charts on separate pages, one per methodology', 'Splitting the methodologies across separate charts loses the comparison that makes the football field useful. The point is to see all methodologies side by side.'],
    ],
    'Football field design has to support comparison across methodologies at a glance. For MHSY, horizontal bars per methodology with disclosed inputs and a vertical line for the target is the standard format because it does that comparison work without making the buy-side construct it.'),

  q(4370537, 'Series 86', CHAPTER, 'Defending the multiple against a bear-case analyst',
    'A bear-case buy-side analyst pushes back: "Your target implies MHSY trades at a premium to Health Catalyst, but Health Catalyst grows faster — your multiple is wrong." How should the initiation defend the target?',
    'Engage directly: Health Catalyst grows faster but has lower gross margin, lower NRR, and is unprofitable — a growth-and-quality-of-revenue adjusted multiple actually places MHSY at a fair premium, not a discount, because growth alone is not the metric the multiple should depend on',
    [
      ['Concede the point and lower the target multiple to match Health Catalyst', 'Conceding without engagement signals the target was not defensible to start with. The right move is to engage with the underlying comp logic — the bear is testing whether the analyst has thought about quality of growth, not just rate.'],
      ['Argue that Health Catalyst is not a true comp and exclude it from the comp set', 'Excluding a comp because the conclusion is inconvenient is exactly the move that destroys credibility. The right answer is to engage with the comp on the merits, not to remove it.'],
      ['Argue that valuation is uncertain and the target is one possible outcome among many', 'Retreating to "valuation is uncertain" is what analysts say when they have not done the comp work. The bear has named a specific objection; the response has to be a specific defense.'],
    ],
    'Defending a target multiple is one of the highest-leverage moments in the buy-side dialogue. For MHSY vs Health Catalyst, the right defense is on quality-of-growth, not on rate-of-growth — engaging with the comp\'s actual profile rather than excluding it is what builds credibility.'),

  q(4370538, 'Series 86', CHAPTER, 'Catalysts and target price path',
    'The MHSY target price is $55–56 vs current $48. The buy-side will ask "What gets the stock from $48 to $55 and over what period?" Which catalyst framework is most useful?',
    'Three specific catalysts in the next 12 months — Q3 DiagnostixAI synergy disclosure, FY guidance reset at the upcoming analyst day, and the renewal cycle of two top-50 customers — each tied to a specific portion of the implied re-rating, so the buy-side can track the path rather than wait for the result',
    [
      ['Set the catalyst framework as "continued execution" without naming specific events', '"Continued execution" is a non-catalyst that buy-side investors discount immediately. The whole point of catalysts is to give the investor specific dates to track.'],
      ['Identify a single binary catalyst (the next earnings release) that will resolve the thesis', 'Single binary catalysts on the next earnings print over-rotate to one event. The thesis will play out over multiple disclosures; the framework should reflect that.'],
      ['List 8–10 potential catalysts to give the buy-side maximum optionality', 'Listing 8–10 catalysts dilutes the framework. The right number is 3–4 specific, dated events that each move a portion of the thesis — anything more becomes a checklist.'],
    ],
    'Catalysts are the bridge between the target price and the calendar. For MHSY, three specific events tied to specific portions of the re-rating gives the buy-side a path to track — and it forces the analyst to commit to which events actually matter for the thesis, not just which are upcoming.'),

  q(4370539, 'Series 86', CHAPTER, 'Reconciling DCF and multiple-based valuations',
    'Your DCF gives a fair value of $54. Your EV/revenue multiple gives $58. The buy-side will ask why the two methodologies disagree. How should the note handle this?',
    'Walk through the implied long-term growth and margin in each method and show where they differ — the multiple-based value usually implies modestly higher long-term growth than the DCF terminal, which is informative about where the optimistic comps are pricing the segment',
    [
      ['Average the two methodologies and report $56 as the target', 'Averaging without explaining the gap loses the most useful part of the comparison. The gap between methodologies tells you something about how the comp set is pricing growth versus what the DCF terminal assumes.'],
      ['Use the lower fair value and describe the choice as conservatism', 'Conservatism-by-selection is not analysis. The right move is to explain why the methodologies differ, not to choose the lower number and pretend that is rigor.'],
      ['Treat the gap as noise and pick the multiple-based value since multiples are the primary methodology', 'Calling the gap noise without explanation skips the most informative comparison in the football field. The DCF-multiple gap is signal, not noise — it tells the buy-side something about the comp set\'s implied assumptions.'],
    ],
    'When DCF and multiple-based valuations disagree, the gap itself is informative. For MHSY, walking through the implied growth and margin in each — and explaining where they diverge — is what separates a rigorous note from one that reports two numbers and a target.'),

  // -------------------------------------------------------------------------
  // LESSONS 9–10 — Initiation note + investor debate (4370540–4370549)
  // Output: the actual published initiation note plus the bull/bear/variant
  // perception debate the analyst will hold with the buy-side. Forces the
  // analyst to commit to a thesis, defend it under pushback, and articulate
  // why their read differs from consensus.
  // -------------------------------------------------------------------------
  q(4370540, 'Series 86', CHAPTER, 'Initiation note structure',
    'You are finalizing the MHSY initiation note. How should it be structured to land with a buy-side reader who has 10 minutes?',
    'Rating and target up top with the 3-sentence thesis, then catalysts, then risks, then the industry/company sections, then the model and valuation — buy-side readers test the verdict first and then drill where they disagree',
    [
      ['Build chronologically: industry, company, business model, model, valuation, then rating', 'Chronological structure makes the buy-side wait for the verdict. Initiation notes lead with rating because the reader is testing the conclusion, not following the analyst\'s thinking.'],
      ['Lead with the company history and management team section to establish credibility', 'Leading with management is what corporate decks do, not what initiation notes do. The buy-side cares about the rating and the thesis first; management is part of the risk register.'],
      ['Lead with the valuation methodology so the reader knows where the target price came from', 'Leading with methodology before conclusion forces the reader through the math first. The standard is verdict, then thesis, then math — the methodology lives in the body, not the lead.'],
    ],
    'Initiation note structure has to match how the buy-side reads it: verdict, thesis, catalysts, risks, then evidence. For MHSY, opening with the rating and the 3-sentence thesis is what gets the note actually read; everything after has to support or stress-test that opening.'),

  q(4370541, 'Series 86', CHAPTER, 'MHSY three-sentence thesis',
    'You have to compress the MHSY thesis into three sentences. Which compression is the most useful for the buy-side?',
    'MHSY is the leading best-of-breed clinical decision support vendor for US hospital systems, with durable subscription growth and a defensible position above the EHR core. The DiagnostixAI integration plus hospital margin pressure should drive attach-rate acceleration in the next 4–6 quarters, supporting a re-rating toward peer multiples. We initiate at Buy with a $55 target, 15% upside.',
    [
      ['MHSY is a high-quality healthcare IT name with strong growth and good positioning. We see continued execution and rate the stock Buy with a $55 target. Risks include competition and macro pressure.', 'Generic phrasing — "high-quality" and "continued execution" — gives the buy-side nothing to engage with. A 3-sentence thesis has to commit to specifics that can be tested.'],
      ['MHSY trades cheaply versus peers on revenue multiple. We expect the discount to close as the company executes. Buy, $55 target.', 'Leading with the multiple discount makes the thesis a valuation argument, not a business argument. The buy-side will assume the analyst has not done the underlying work.'],
      ['MHSY is a healthcare IT vendor with $1.2B revenue, 85% subscription, 22% operating margin, growing 12% blended. We initiate at Buy with $55 target.', 'Reciting metrics is not a thesis. The buy-side already has the metrics — what they want is the analyst\'s read of why those metrics produce alpha.'],
    ],
    'A 3-sentence thesis has to commit to a specific business read, a specific catalyst window, and a specific valuation outcome. For MHSY, that means naming best-of-breed durability as the moat, DiagnostixAI plus margin pressure as the catalysts, and the peer re-rating as the path — generic phrasing does not survive the 10-minute read.'),

  q(4370542, 'Series 86', CHAPTER, 'Bull case construction',
    'You have to write the bull case section. How should it differ from the base case in a useful way?',
    'Bull case requires specific upside conditions — DiagnostixAI synergies arriving 2 quarters earlier and 30% larger than guided, plus NRR holding at 110%+ as the platform expands; the bull case is not "things go well" but a sized scenario that produces a specific target ($65) under named conditions',
    [
      ['Bull case is "everything in the base case plus some upside" without requiring specific conditions', 'A bull case without specific conditions is just optimism. The buy-side wants to know what would have to be true for the upside to land, not just that it might.'],
      ['Bull case is the high end of management\'s long-term guidance taken as the analyst\'s view', 'Adopting management\'s long-term guidance as the bull case is not independent analysis. The bull case has to be the analyst\'s own scenario, not management\'s.'],
      ['Bull case is a 25% upside to the target price with no specific drivers', 'A percentage-based bull case without drivers is the kind of analysis that gets dismissed immediately. The buy-side wants the operating model that produces the upside, not the headline percent.'],
    ],
    'Bull and bear cases earn their place in the note when they are specific scenarios with named conditions. For MHSY, the bull case is a faster, larger DiagnostixAI synergy plus NRR strength — both testable in the next 4 quarters — and the target produced is $65 only if those conditions land.'),

  q(4370543, 'Series 86', CHAPTER, 'Bear case construction',
    'The bear case has to be a real argument against MHSY, not a checklist of risks. How should it be structured?',
    'Specific scenario: Epic ships a competitive bundled module in the next 12 months, MHSY\'s top-50 reference accounts begin re-evaluating, win rates fall, and NRR drifts to 102–104% — produces a $38 bear-case target with named events that would trigger a rating change',
    [
      ['Bear case is "competitive pressure, macro slowdown, and execution risk could weigh on the stock"', 'A laundry-list bear case is generic and dismissed instantly. The buy-side wants to know which specific scenario could break the thesis, not which categories of risk exist.'],
      ['Bear case is the consensus bear thesis the analyst disagrees with, written sympathetically', 'Steelmanning consensus is useful as a section, but it is not a substitute for the analyst\'s own bear case. The two are different exercises.'],
      ['Bear case is a 25% downside to the target price as a generic stress test', 'Percentage-based bear cases without drivers are the same mistake as percentage-based bull cases. The downside scenario has to be operationally specific.'],
    ],
    'A bear case earns credibility when it names a specific scenario, specific drivers, and specific events that would trigger it. For MHSY, the bear case is Epic\'s bundling pressure plus NRR drift — both testable, both visible in customer references and bookings — and the buy-side trusts that more than a generic risk list.'),

  q(4370544, 'Series 86', CHAPTER, 'Variant perception vs consensus',
    'Sell-side consensus on MHSY is roughly: 11 Buys, 7 Holds, 1 Sell; mean price target $52. You are initiating Buy at $55. What is the variant perception you have to articulate?',
    'Consensus underwrites mid-teens growth but is cautious on the DiagnostixAI integration — your view is that the integration is accretive faster than consensus models because the M&A team did this kind of bolt-on twice before; the variant is on integration speed, not on the long-term story',
    [
      ['Your variant is that MHSY is a higher-quality business than the market gives credit for', '"Higher quality than the market thinks" is the lowest-information variant perception statement available. The buy-side wants to know specifically where you differ, not that you are bullish.'],
      ['You do not have a variant perception — your view is consensus and the rating reflects that', 'A "consensus Buy" initiation adds limited value to the buy-side. The point of new coverage is to bring a specific view, even if the conclusion aligns with the consensus rating.'],
      ['Your variant is that the comp set should re-rate higher across healthcare IT, including MHSY', 'A sector re-rating call is a macro view, not a stock-specific variant. The buy-side wants to know where you differ on MHSY specifically, not where you differ on the sector.'],
    ],
    'Variant perception is the most-asked question on every initiation call. For MHSY, the useful variant is on DiagnostixAI integration speed — a specific, testable difference from consensus rather than a vague claim of higher conviction. The buy-side rates the variant more than the rating.'),

  q(4370545, 'Series 86', CHAPTER, 'Engaging with the bear analyst on the call',
    'On the buy-side marketing tour, a bear-case investor pushes hard: "Epic ships features faster than you think, and your moat argument is wishful." How should you engage in real time?',
    'Acknowledge the strength of the objection, point to the specific evidence (eight years of outcome studies, non-Epic integrations, configured rule libraries) that addresses it, and concede where the argument is weakest (timing of Epic\'s next major release) — pushing back without conceding the legitimate piece loses the credibility you need on the next call',
    [
      ['Hold the line firmly and argue the bear is over-rotating to Epic\'s capabilities', 'Holding the line without engaging with the legitimate piece of the bear\'s argument loses the room. The bear has a point; the analyst\'s job is to engage with it, not deflect.'],
      ['Concede the moat argument and downgrade the rating in response', 'Conceding the entire moat argument because of one bear conversation is over-rotation in the other direction. The right move is to engage with the specific objection, not to capitulate.'],
      ['Defer to the next note update and offer to follow up after more diligence', 'Deferring on the call surrenders the conversation. The analyst is being tested on whether they can engage with pushback now, not whether they can write a follow-up later.'],
    ],
    'Investor debate is where initiation thesis is stress-tested in real time. For MHSY against an Epic bear, the answer is partial concession plus specific evidence — the analyst who can hold ground on the strong parts of the thesis while conceding where the bear has a point is the one the buy-side trusts on the next call.'),

  q(4370546, 'Series 86', CHAPTER, 'Rating logic — Buy vs Hold',
    'Your fair value is $55 vs current $48 — about 15% upside before the dividend (MHSY does not pay one). Is that enough upside for a Buy rating, or does the rating logic require a different threshold?',
    'Most shops require 10–15% expected total return for Buy; 15% upside without a dividend is at the threshold. The rating decision should also weight conviction and catalyst proximity — high conviction with a 12-month catalyst pipeline supports Buy; low conviction at 15% would default to Hold',
    [
      ['15% upside is automatically a Buy regardless of conviction', 'Mechanical 15%-equals-Buy rules ignore the conviction component. Two analysts could land on 15% upside with very different confidence levels and very different rating answers.'],
      ['15% upside is not enough for Buy — most shops require 20%+', '20% is above the threshold at most shops. The threshold is shop-specific but typically lives in the 10–15% expected total return range, not 20%.'],
      ['The rating depends on whether the upside happens in 6 or 12 months', 'Most published ratings reflect a 12-month price target; the rating threshold is calibrated to that horizon, so the 6-vs-12 question is already inside the math.'],
    ],
    'Rating logic combines fair value upside with conviction and catalyst proximity. For MHSY at 15% upside with high conviction and a 12-month catalyst pipeline, Buy is the defensible rating — but the analyst should articulate why, not assume the math alone settles it.'),

  q(4370547, 'Series 86', CHAPTER, 'Risk register for the initiation',
    'The initiation note has to include a risk register. Which structure is most useful for the buy-side?',
    'Three to five named risks with the trigger event, the size of the impact, and how the analyst will monitor each — competitive (Epic bundling), execution (DiagnostixAI integration slip), customer (top-50 churn), regulatory (HIPAA enforcement); generic risks belong in a separate boilerplate section',
    [
      ['A boilerplate risk section covering competition, regulation, macro, and execution', 'Boilerplate risk sections are skipped by every buy-side reader. The risk register has to be company-specific to add value.'],
      ['A long list of every possible risk to be comprehensive', 'A long list of risks dilutes the ones that actually matter for the thesis. Three to five named risks is the working pattern.'],
      ['Risks should be downplayed since the initiation is a Buy rating', 'Downplaying risks because of the rating is exactly the move that destroys credibility on the next print. The risks should be honest regardless of the rating.'],
    ],
    'Risk registers earn their place when they are specific, sized, and monitored. For MHSY, three to five named risks tied to the thesis — each with a monitoring plan — gives the buy-side a real view of where the analyst sees vulnerability rather than a checklist of every possible negative.'),

  q(4370548, 'Series 86', CHAPTER, 'Tracking the thesis after initiation',
    'The MHSY initiation has published. The buy-side is engaged. How should the analyst plan the next 12 months of coverage?',
    'A coverage plan with each quarterly print mapped to which part of the thesis it tests — Q1 print tests services recovery, Q2 tests DiagnostixAI synergies, Q3 tests top-50 renewal — and at least one custom field check (channel work, customer references) per quarter to surface signal before the print',
    [
      ['Cover each quarter as it comes and update the model after each print', 'Reactive coverage misses the leading indicators that the analyst is paid to surface. The plan has to be proactive — channel work, customer references, RPO tracking — between prints.'],
      ['Cover only the next two quarters in detail and reassess the longer-term plan after that', 'Two-quarter horizons are too short for a coverage plan. The thesis lives over 12 months; the plan has to cover the same window.'],
      ['Maintain the initiation thesis as written until disproven by a major event', 'A "set and hold" coverage plan abdicates the analyst\'s job. The thesis has to be tested every quarter, not just at major events — that is what the buy-side is paying for.'],
    ],
    'Coverage after initiation is the part of the job that builds reputation. For MHSY, mapping each quarterly print to a specific thesis test, plus proactive channel and reference work between prints, is what separates an analyst who anticipates the print from one who just reports it.'),

  q(4370549, 'Series 86', CHAPTER, 'Integrating the full initiation package',
    'You have completed every component of the MHSY initiation — industry primer, filings analysis, forecast model, football field, thesis, bull/bear, risk register, coverage plan. The senior analyst asks: "What is the single most important thing for the buy-side to take away from this initiation?" What is the right answer?',
    'MHSY\'s thesis lives or dies on best-of-breed durability against Epic — every other piece of the analysis (model, valuation, catalysts, risks) feeds that one question; the buy-side\'s job is to track whether bundled modules are catching up, and the analyst\'s job is to surface that signal first',
    [
      ['The single most important takeaway is the $55 target price and the 15% upside', 'Reducing the initiation to a target price misses the entire point of new coverage. The buy-side can compute upside themselves; what they pay for is the analyst\'s read of which thesis variable matters most.'],
      ['The single most important takeaway is the operating model — the forecast captures the cross-sell story that drives the valuation', 'The operating model is the substrate, not the takeaway. The buy-side cares about which conclusion the model supports, not the model itself.'],
      ['The single most important takeaway is that MHSY is a Buy', 'The rating is the headline but not the takeaway. A Buy without the underlying thesis test is just a sticker; the buy-side wants to know which variable to watch.'],
    ],
    'A great initiation reduces to one thesis variable the buy-side should track. For MHSY, that variable is best-of-breed durability against Epic — every other piece of the analysis exists to feed that test. Naming the load-bearing variable out loud is what makes the initiation memorable and what gives the buy-side the framework to track the name themselves.'),
]
