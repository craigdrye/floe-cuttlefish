import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'
import { vcCapstoneQuestions, VC_CAPSTONE_DIFFICULTY } from './vcCapstoneQuestions'
import { ibCh1Questions, IB_CH1_DIFFICULTY } from './ibCh1Questions'
import { ibCh2Questions, IB_CH2_DIFFICULTY } from './ibCh2Questions'
import { ibCh3Questions, IB_CH3_DIFFICULTY } from './ibCh3Questions'
import { ibCh4Questions, IB_CH4_DIFFICULTY } from './ibCh4Questions'
import { ibCh5Questions, IB_CH5_DIFFICULTY } from './ibCh5Questions'
import { ibCapstoneQuestions, IB_CAPSTONE_DIFFICULTY } from './ibCapstoneQuestions'
import { erCh1Questions, ER_CH1_DIFFICULTY } from './erCh1Questions'
import { erCh2Questions, ER_CH2_DIFFICULTY } from './erCh2Questions'
import { erCh3Questions, ER_CH3_DIFFICULTY } from './erCh3Questions'
import { erCh4Questions, ER_CH4_DIFFICULTY } from './erCh4Questions'
import { erCh5Questions, ER_CH5_DIFFICULTY } from './erCh5Questions'
import { erCapstoneQuestions, ER_CAPSTONE_DIFFICULTY } from './erCapstoneQuestions'
import { hfCh1Questions, HF_CH1_DIFFICULTY } from './hfCh1Questions'
import { hfCh2Questions, HF_CH2_DIFFICULTY } from './hfCh2Questions'
import { hfCh3Questions, HF_CH3_DIFFICULTY } from './hfCh3Questions'
import { hfCh4Questions, HF_CH4_DIFFICULTY } from './hfCh4Questions'
import { hfCh5Questions, HF_CH5_DIFFICULTY } from './hfCh5Questions'
import { hfCapstoneQuestions, HF_CAPSTONE_DIFFICULTY } from './hfCapstoneQuestions'
import { clfCh1Questions, CLF_CH1_DIFFICULTY } from './clfCh1Questions'
import { clfCh2Questions, CLF_CH2_DIFFICULTY } from './clfCh2Questions'
import { clfCh3Questions, CLF_CH3_DIFFICULTY } from './clfCh3Questions'
import { clfCh4Questions, CLF_CH4_DIFFICULTY } from './clfCh4Questions'
import { clfCh5Questions, CLF_CH5_DIFFICULTY } from './clfCh5Questions'
import { clfCapstoneQuestions, CLF_CAPSTONE_DIFFICULTY } from './clfCapstoneQuestions'
import { bcCh1Questions, BC_CH1_DIFFICULTY } from './bcCh1Questions'
import { bcCh2Questions, BC_CH2_DIFFICULTY } from './bcCh2Questions'
import { bcCh3Questions, BC_CH3_DIFFICULTY } from './bcCh3Questions'
import { bcCh4Questions, BC_CH4_DIFFICULTY } from './bcCh4Questions'
import { bcCh5Questions, BC_CH5_DIFFICULTY } from './bcCh5Questions'
import { bcCapstoneQuestions, BC_CAPSTONE_DIFFICULTY } from './bcCapstoneQuestions'
import { stCh1Questions, ST_CH1_DIFFICULTY } from './stCh1Questions'
import { stCh2Questions, ST_CH2_DIFFICULTY } from './stCh2Questions'
import { stCh3Questions, ST_CH3_DIFFICULTY } from './stCh3Questions'
import { stCh4Questions, ST_CH4_DIFFICULTY } from './stCh4Questions'
import { stCh5Questions, ST_CH5_DIFFICULTY } from './stCh5Questions'
import { stCapstoneQuestions, ST_CAPSTONE_DIFFICULTY } from './stCapstoneQuestions'
import { peCh1Questions, PE_CH1_DIFFICULTY } from './peCh1Questions'
import { peCh2Questions, PE_CH2_DIFFICULTY } from './peCh2Questions'
import { peCh3Questions, PE_CH3_DIFFICULTY } from './peCh3Questions'
import { peCh4Questions, PE_CH4_DIFFICULTY } from './peCh4Questions'
import { peCh5Questions, PE_CH5_DIFFICULTY } from './peCh5Questions'
import { peCapstoneQuestions, PE_CAPSTONE_DIFFICULTY } from './peCapstoneQuestions'
import { VC_SUB_TOPICS, VC_MENTOR_HINTS, VC_CORRECT_SHORTENED } from './vcPolish'
import { IB_SUB_TOPICS, IB_MENTOR_HINTS, IB_CORRECT_SHORTENED } from './ibPolish'
import { ER_SUB_TOPICS, ER_MENTOR_HINTS, ER_CORRECT_SHORTENED } from './erPolish'
import { HF_SUB_TOPICS, HF_MENTOR_HINTS, HF_CORRECT_SHORTENED } from './hfPolish'
import { CLF_SUB_TOPICS, CLF_MENTOR_HINTS, CLF_CORRECT_SHORTENED } from './clfPolish'
import { BC_SUB_TOPICS, BC_MENTOR_HINTS, BC_CORRECT_SHORTENED } from './bcPolish'
import { ST_SUB_TOPICS, ST_MENTOR_HINTS, ST_CORRECT_SHORTENED } from './stPolish'
import { PE_SUB_TOPICS, PE_MENTOR_HINTS, PE_CORRECT_SHORTENED } from './pePolish'
import { polish as runPolish } from './polishPipeline'

const SOURCE = 'Floe career finance roadmap canonical bank'

// Helper: every wrong answer must carry a bespoke pedagogical "why this is wrong" line.
// No file-wide DEFAULT_FLAW constants — each distractor explanation reflects the
// specific misconception a learner might hold (see jargonBusters.ts for the voice).
function q(
  id: number,
  topic: Topic,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string][], // [label, whyWrong]
  lesson: string,
  extra?: Partial<Pick<Question, 'alternatePrompts' | 'challengeRating' | 'mentorHint' | 'solution'>>,
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
    undefined,
    extra?.mentorHint,
    extra,
  )
}

// Per-question difficulty (1 = entry-friendly, 5 = mastery-level integration).
// Used by the adaptive question-ordering picker — easier questions earlier,
// harder later in a session. Keyed by question id so it lives alongside the
// question definitions without bloating the q() helper for every track.
const VC_QUESTION_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Chapter 1: Venture Model and Fund Math
  4200006: 1, // Check size and ownership target — single-step arithmetic on post-money
  4200000: 3, // Power law math — fund-returner reasoning crossing ownership and exit value
  4200001: 2, // DPI vs TVPI — concept recognition
  4200002: 2, // Management fee drag — cumulative percentage arithmetic
  4200003: 3, // Carry waterfall — multi-step waterfall reasoning
  4200004: 3, // Reserve sizing — judgment call across portfolio construction
  4200005: 2, // Ownership at exit — compounding dilution arithmetic
  4200007: 2, // Fund life and recycling — concept rationale
  // Expansion pass (Wave 5): power-law variants, construction, fees, GP commit,
  // DPI/TVPI/MOIC arithmetic, reserves logic, ownership math, LP relationships,
  // crossover/AUM dynamics. IDs 4350000–4350041.
  4350000: 1, // Power law definition — recall framing
  4350001: 2, // Fund-returner at different fund size — single-scenario math
  4350002: 2, // Two fund-returners on a $400M fund — variant exit distribution
  4350003: 3, // Power law portfolio shape — 30-company distribution interpretation
  4350004: 1, // Check size from ownership and post-money — single-step math
  4350005: 2, // Reserves ratio decision — 1:2 initial-to-reserve mechanics
  4350006: 2, // Reserves break — when to over-pro-rata into a breakout
  4350007: 3, // Recycling provision — calculating capital base after recycling
  4350008: 2, // GP commit — calculating standard 1–2% GP contribution
  4350009: 1, // 2-and-20 definition — recall framing
  4350010: 2, // Step-down fees — fee schedule after investment period
  4350011: 3, // European vs American waterfall — distribution timing impact
  4350012: 2, // Hurdle rate mechanics — 8% preferred return calc
  4350013: 2, // Catch-up provision — bringing GP to full 20% share
  4350014: 1, // MOIC definition — distinguishing from IRR
  4350015: 2, // MOIC calculation — straight money-in / money-out
  4350016: 2, // DPI vs RVPI — splitting paper from cash
  4350017: 3, // TVPI interpretation across vintages — comparing year-3 vs year-8
  4350018: 1, // IRR definition — time-weighted return
  4350019: 3, // IRR vs MOIC tradeoff — early exit vs longer hold
  4350020: 2, // Cash-on-cash multiple — net vs gross
  4350021: 3, // Reserves model — 50/50 vs 40/60 initial-to-reserve choice
  4350022: 4, // Follow-on math under dilution — pro rata into priced round
  4350023: 3, // Concentration risk — single-company exposure limit
  4350024: 1, // Entry ownership target definition — recall
  4350025: 2, // Blended ownership across rounds — averaging entry and follow-on
  4350026: 3, // Dilution from option pool refresh at Series B — modeling
  4350027: 2, // Pre-emptive rights and ownership — single-concept application
  4350028: 1, // Capital call definition — recall
  4350029: 2, // Capital call timing — quarterly cadence
  4350030: 1, // Fund vintage definition — recall
  4350031: 2, // Vintage diversification — LP allocation logic
  4350032: 3, // J-curve interpretation — explaining negative IRR in years 1–3
  4350033: 2, // Fund-of-funds vs direct LP — fee-on-fee tradeoff
  4350034: 3, // Cross-fund conflict — same company in two vintages
  4350035: 3, // Crossover fund dynamic — late-stage vs early-stage mixing
  4350036: 4, // AUM growth and strategy drift — fund size pressure on returns
  4350037: 2, // Side car / SPV definition — single concept
  4350038: 3, // Side-pocket and tail value — interpreting after-fund-life NAV
  4350039: 2, // Carry distribution lag — timing between exit and GP payout
  4350040: 3, // Loss ratio — what percentage of fund a single zero costs
  4350041: 4, // Portfolio construction synthesis — fund size, check size, reserves, ownership trade-off

  // Chapter 2: Sourcing and Market Mapping
  4280010: 2, // Why now — single follow-up reasoning
  4280011: 2, // Category map gaps — analytical reframing
  4103001: 2, // TAM cleanup — methodology critique
  4105056: 3, // Bottom-up TAM — integrating buyers, price, adoption
  4107301: 3, // Wedge or cul-de-sac — expansion thesis judgment
  4107312: 3, // Regulated market path — multi-factor diligence (licensing + GTM)
  // Expansion pass (Wave 5): thesis framing, market mapping depth, sourcing channels,
  // events, inbound vs outbound, founder background, why-now catalysts, category creation,
  // competitive density, geographic and sector focus. IDs 4350100–4350143.
  4350100: 1, // Thesis structure — recall of 3-5 sentence frame
  4350101: 2, // Falsifiable thesis — applying the falsifiability test
  4350102: 3, // Thesis vs trend — distinguishing investable thesis from category narrative
  4350103: 2, // Thesis evolution — how a thesis updates with portfolio learning
  4350104: 1, // Top-down vs bottom-up market sizing definition
  4350105: 2, // Bottom-up market map — choosing the right segmentation axis
  4350106: 3, // Segment depth — when to split by vertical vs persona
  4350107: 2, // Adjacent-market mapping — when to include adjacencies
  4350108: 3, // Map gap synthesis — identifying the underserved buyer
  4350109: 1, // Founder network definition as a sourcing channel
  4350110: 2, // Accelerator pipeline — applying signal weight to YC vs others
  4350111: 2, // Scout program mechanics — economics of scout-sourced deals
  4350112: 3, // Cold outbound — when it works for sourcing
  4350113: 2, // Warm intro filtering — calibrating intro-quality
  4350114: 3, // Conference ROI — choosing which events matter
  4350115: 2, // Event coverage strategy — pre-meet vs walk-the-floor
  4350116: 2, // Inbound vs outbound ratios — what mix signals a healthy fund
  4350117: 3, // Inbound quality drift — interpreting volume-without-quality
  4350118: 2, // Founder background diligence — single signal interpretation
  4350119: 3, // Pattern recognition pitfalls — when "this looks like X" misleads
  4350120: 2, // Repeat founder premium — single-frame application
  4350121: 1, // Why-now catalyst definition
  4350122: 2, // Regulatory catalyst — applying to a fintech scenario
  4350123: 2, // Cost-curve catalyst — applying to AI infrastructure
  4350124: 3, // Buyer-behavior catalyst — distinguishing real shift from headline
  4350125: 2, // Category creation definition — vs disruption
  4350126: 3, // Category creation risk — education cost and timing
  4350127: 2, // Category disruption frame — applying to a specific incumbent
  4350128: 1, // Competitive density definition
  4350129: 3, // Overcrowded market read — applying competitor count + funding density
  4350130: 2, // Blue ocean caution — why "no competitors" can be a flag
  4350131: 2, // Competitive map structure — choosing axes
  4350132: 3, // Differentiation test — moving past feature lists
  4350133: 1, // Geographic focus definition
  4350134: 2, // Geographic strategy — single-market vs multi-market for seed fund
  4350135: 3, // Sector focus vs generalist — applying to a small fund context
  4350136: 2, // Stage focus — pre-seed vs seed call
  4350137: 2, // Anti-portfolio framing — what passes teach about thesis
  4350138: 3, // Pipeline math — sourcing volume to investment count
  4350139: 2, // First-meeting filter — what to test in 30 minutes
  4350140: 2, // Founder reference pre-meet — signal weight
  4350141: 3, // Hot deal triage — speed vs diligence under competitive pressure
  4350142: 4, // Sourcing thesis under capital constraint — multi-concept integration
  4350143: 3, // Map output for partnership — synthesizing thesis, map, and pipeline

  // Chapter 3: Startup Metrics and Diligence
  4103003: 2, // CAC payback check — clean arithmetic
  4103004: 2, // Logo quality — single-signal interpretation
  4105058: 3, // Retention shape — reconciling NRR vs logo
  4105059: 3, // Cohort read — multi-metric interpretation
  4107305: 3, // Services disguise — hidden-cost diagnosis
  4107313: 3, // Sales cycle clue — runway + conversion modeling
  4107304: 3, // Expansion math — repeatability + LTV reasoning
  4280020: 3, // Rule of 40 read — combining growth and margin arithmetic with interpretation
  // Expansion pass (Step 4b): ARR/MRR/CARR distinctions, NRR/GRR/logo reads, CAC variants and payback,
  // cohort curves, churn types, burn/runway/default-alive framing, cap-efficiency ratios, quality of revenue,
  // pipeline coverage and cycle, bookings vs revenue vs cash, data-quality traps, sales efficiency.
  // IDs 4350200–4350241.
  4350200: 1, // ARR vs MRR definition — recall framing
  4350201: 2, // CARR vs ARR — distinguishing contracted vs live revenue
  4350202: 2, // ARR inflation traps — one-time fees folded in
  4350203: 3, // Annualizing a single month — when MRR × 12 lies
  4350204: 1, // Logo retention definition — recall
  4350205: 2, // Gross retention vs net retention — single-frame application
  4350206: 3, // NRR + GRR combined read — diagnosing expansion vs churn drivers
  4350207: 3, // Logo retention vs revenue retention split — interpreting weighted churn
  4350208: 2, // CAC definition — fully-loaded vs blended
  4350209: 2, // CAC payback at different gross margins — adjusting the formula
  4350210: 3, // Magic number calculation — net-new ARR over sales spend
  4350211: 3, // Magic number interpretation — under 0.5 vs over 1.0
  4350212: 4, // CAC payback across stages — seed vs growth benchmarks
  4350213: 2, // Day-1 vs Day-30 retention for consumer — single concept
  4350214: 3, // Day-30 retention curve shape — flat vs decay interpretation
  4350215: 3, // Enterprise logo retention quarterly cohort — interpretation
  4350216: 4, // Cohort triangle read — diagnosing month-by-month retention drift
  4350217: 1, // Logo churn definition — recall
  4350218: 2, // Gross revenue churn vs net revenue churn — distinguishing
  4350219: 3, // Implied annual churn from monthly logo churn — compounding math
  4350220: 3, // Churn type that signals product gap — judgment
  4350221: 1, // Gross vs net burn definition — recall
  4350222: 2, // Runway math from net burn and cash — single arithmetic
  4350223: 3, // Default-alive vs default-dead framing — Graham-style judgment
  4350224: 4, // Bridging runway with cost cuts — modeling the new runway under cuts
  4350225: 2, // Burn multiple definition — Bessemer-style
  4350226: 3, // Burn multiple interpretation — best-in-class vs concerning
  4350227: 4, // Cap-efficiency at Series B — ARR per dollar raised hurdle
  4350228: 2, // Services-disguised SaaS warning — single-signal read
  4350229: 3, // Project revenue masquerading as recurring — diagnosis
  4350230: 4, // Quality of revenue assessment — multi-signal synthesis
  4350231: 2, // Pipeline coverage ratio definition — recall + framing
  4350232: 3, // Pipeline coverage shortfall — diagnosing the gap
  4350233: 3, // Sales cycle lengthening — interpreting quarter-over-quarter drift
  4350234: 2, // Bookings vs revenue distinction — single concept
  4350235: 3, // Deferred revenue read — what it signals about cash collection
  4350236: 2, // Cash collected vs revenue recognized — applied scenario
  4350237: 3, // Sample selection bias in dashboards — diagnostic
  4350238: 4, // Founder-curated cohort traps — multi-source verification logic
  4350239: 2, // LTV/CAC ratio basics — single calculation
  4350240: 3, // Blended ARR vs net-new ARR — distinguishing growth quality
  4350241: 4, // Sales efficiency synthesis — Magic Number + payback + NRR combined read

  // Chapter 4: Founder, Product, and Customer Evidence
  4103002: 2, // Coachability signal — single behavioral read
  4105057: 3, // Founder-market fit — interpreting multi-signal evidence
  4107302: 3, // Reference call read — pattern interpretation
  4107303: 3, // Missing cofounder gap — capability + GTM reasoning
  4107773: 3, // Conflict under pressure — multi-source diligence synthesis
  4280030: 3, // Switching cost evidence — interpreting customer behavior against verbal praise
  // Expansion pass (Step 4b): founder-market fit signals, coachability and decision-under-pressure,
  // cofounder dynamics, customer-call planning, product pull, implementation friction, roadmap risk,
  // reference-call construction, customer urgency vs politeness, sales-engineering bandwidth.
  // IDs 4350300–4350343.
  4350300: 1, // Founder-market fit definition — recall
  4350301: 2, // Earned insight signal — single-frame application
  4350302: 3, // Prior failed alternatives — what their specificity reveals
  4350303: 2, // Customer-ID precision — generic ICP vs named buyer
  4350304: 3, // Founder-market fit absent — when domain mastery is required vs optional
  4350305: 1, // Coachability definition — recall
  4350306: 2, // Updating-on-evidence behavior — single behavior read
  4350307: 3, // Coachability under bad news — interpreting the founder's first 24-hour response
  4350308: 4, // Decision behavior under pressure — multi-signal synthesis across references and live evidence
  4350309: 1, // Cofounder equity split definition — recall
  4350310: 2, // Lopsided split (90/10) read — what to ask
  4350311: 3, // Cofounder conflict resolution patterns — interpreting "we always agree"
  4350312: 3, // Missing function in founding team — diagnosing GTM gap
  4350313: 4, // Cofounder breakup risk — multi-source pattern read
  4350314: 1, // Customer call purpose — recall
  4350315: 2, // Open-ended vs leading questions — single-skill application
  4350316: 2, // Sourcing reference customers — founder-list vs blind-list
  4350317: 3, // Customer call structure — sequencing for honest signal
  4350318: 4, // Customer-call plan design under time pressure — selecting 5 calls from 40 logos
  4350319: 1, // Product pull definition — recall
  4350320: 2, // Organic growth signal — single read
  4350321: 2, // Expansion as pull signal — applied scenario
  4350322: 3, // NPS interpretation — score vs comments vs sample
  4350323: 3, // In-product depth signal — daily-actives vs weekly-actives interpretation
  4350324: 4, // Product pull synthesis — pull vs push framing across cohort and survey evidence
  4350325: 1, // Switching cost definition — recall
  4350326: 2, // Integration cost read — single-signal interpretation
  4350327: 3, // Change-management ask interpretation — when "we need a champion" is a flag
  4350328: 3, // Implementation friction across customer sizes — SMB vs enterprise read
  4350329: 1, // Roadmap risk definition — recall
  4350330: 2, // Engineering velocity signal — single-frame read
  4350331: 3, // Technical-debt overhang interpretation — slowing release cadence
  4350332: 4, // Platform dependency read — when relying on a vendor API is structural risk
  4350333: 2, // Reference call open question design — picking the most-revealing prompt
  4350334: 3, // Reference call conviction probe — interpreting hesitation in renewal language
  4350335: 2, // "Great call" trap — single-signal urgency-vs-politeness frame
  4350336: 3, // Customer urgency extraction — what behavioral signals beat verbal praise
  4350337: 4, // Polite-customer pattern read — synthesizing low-urgency signals across multiple calls
  4350338: 2, // Sales-engineering bandwidth — single-frame application
  4350339: 3, // Solutions-engineering gap — read on pipeline-to-closing conversion
  4350340: 4, // Gap to closing real revenue — synthesizing pipeline, SE bandwidth, and procurement load
  4350341: 2, // Pilot-to-paid conversion read — single signal
  4350342: 3, // Champion risk — what a single-buyer relationship implies
  4350343: 4, // Founder + product + customer integration — capstone-style multi-evidence judgment

  // Chapter 5: Terms, Memo, and Investment Decision
  4103005: 3, // Liquidation preference — term mechanics
  4105060: 3, // Pro rata rights — concept + use
  4105061: 4, // Option pool shuffle — pre-money dilution modeling
  4107306: 4, // SAFE conversion — fully diluted cap table mechanics
  4107307: 3, // Board seat ask — governance judgment
  4107776: 4, // Pay-to-play clause — multi-investor cap-table consequence
  4280040: 4, // Valuation reasoning — comps + forward math + ownership
  4103007: 3, // Balanced memo — structure judgment
  4105064: 3, // Kill criteria — falsifiability reasoning
  // Expansion pass (Step 4c): preference stack mechanics, participating vs non-participating, anti-dilution
  // variants, board composition and observer rights, founder vesting and acceleration, info rights and side letters,
  // drag/tag/ROFR, SAFE/note mechanics, option pool math, pay-to-play execution, memo failure modes,
  // partnership dynamics, pricing discipline, allocation logic, negotiation patterns. IDs 4350400–4350440.
  4350400: 1, // Pre-money vs post-money definition — recall
  4350401: 2, // Liquidation preference stack — seniority basics
  4350402: 3, // 1x participating vs non-participating at $100M sale — math
  4350403: 3, // Participation cap mechanics — 2x cap on participating preferred
  4350404: 4, // Preference stack at down-side exit — junior preferred wiped
  4350405: 2, // Pro rata vs super pro rata distinction
  4350406: 3, // Pro rata waiver under fund constraint — judgment
  4350407: 2, // Broad-based vs full ratchet anti-dilution — definition
  4350408: 4, // Anti-dilution math on a down round — broad-based weighted average
  4350409: 1, // Board seat vs observer right definition
  4350410: 2, // Board composition at seed — 2-1-2 logic
  4350411: 3, // Independent board seat — when to push for it
  4350412: 3, // Protective provisions — what major decisions investors gate
  4350413: 1, // Founder vesting definition
  4350414: 2, // 4-year vesting with 1-year cliff — mechanics
  4350415: 3, // Single-trigger vs double-trigger acceleration
  4350416: 3, // Acceleration negotiation — what to accept
  4350417: 2, // Information rights basics — what investors get monthly vs annually
  4350418: 2, // Side letter mechanics — MFN protection
  4350419: 3, // MFN clause interpretation — when it bites the cap table
  4350420: 2, // Drag-along definition and trigger threshold
  4350421: 3, // Tag-along vs drag-along — investor protection direction
  4350422: 2, // ROFR mechanics — secondary share transfer
  4350423: 1, // SAFE vs convertible note definition
  4350424: 2, // Pre-money SAFE vs post-money SAFE conversion difference
  4350425: 3, // SAFE cap + discount — which governs on conversion
  4350426: 3, // MFN on SAFE — what triggers the reset
  4350427: 4, // Note interest accrual on conversion — modeling extra dilution
  4350428: 3, // Option pool shuffle math — 10% pre-money pool effect on price
  4350429: 4, // Hire-to-pool gap — modeling under-sized pool surprise
  4350430: 2, // Pay-to-play execution — what triggers conversion
  4350431: 3, // Pay-to-play during washout — converting laggards to common
  4350432: 2, // Cumulative dividends definition — how they accrue
  4350433: 3, // Redemption right basics — when it actually gets used
  4350434: 2, // Registration rights — demand vs piggyback
  4350435: 2, // Memo failure mode — over-quantitative without judgment
  4350436: 3, // Memo failure mode — hidden risks resurfacing in partner meeting
  4350437: 3, // Partnership dynamics — lead vs co-investor diligence depth
  4350438: 4, // Pricing discipline — justifying a premium on a hot deal
  4350439: 3, // Allocation logic — check size against fund construction
  4350440: 4, // Negotiation pattern — which terms to fight, which to concede

  // Chapter 6: Portfolio Support and Follow-On Decisions
  4105062: 3, // Runway math — clean arithmetic but in portfolio context
  4103006: 3, // Board update triage — multi-factor support reasoning
  4105063: 4, // Milestone planning — fundraising + ops integration
  4107785: 4, // Follow-on reserve choice — portfolio construction judgment
  4107315: 4, // Bridge round triage — cash + evidence + financing integration
  4280050: 4, // Markup signaling — LP communication and fund math nuance
  // Expansion pass (Step 4c): board meeting structure, monthly metrics package, bridge triage,
  // follow-on math, insider vs outside-led, markup/markdown discipline, CEO support modes, exec hiring,
  // turnaround playbook, exit dynamics, acquisition negotiation, down-round mechanics, reserves drawdown,
  // founder mental health, cross-portfolio sharing. IDs 4350500–4350543.
  4350500: 1, // Board meeting purpose — recall
  4350501: 2, // KPI deck structure — what belongs in the board pack
  4350502: 3, // Ask-not-update framing — restructuring a board agenda
  4350503: 3, // Decisions vs updates — using board time well
  4350504: 1, // Monthly metrics package — the 5 numbers
  4350505: 2, // Metrics package gap — what's missing when only revenue is reported
  4350506: 3, // Reading a monthly update — first signal of trouble
  4350507: 4, // Founder over-reporting good news — diagnosing pattern
  4350508: 2, // Bridge round triage signal — proof gap framing
  4350509: 3, // Bridge round economics — clean terms vs preference accumulation
  4350510: 4, // When to let burn force discipline — judgment call
  4350511: 2, // Follow-on math basics — pro rata at new round
  4350512: 3, // Follow-on impact on ownership and return — modeling
  4350513: 4, // Follow-on decision under reserves constraint — return-impact framing
  4350514: 2, // Insider round definition — vs outside-led
  4350515: 3, // Insider round signal — what it tells next-round investors
  4350516: 3, // Outside-led round preference — valuation discipline
  4350517: 2, // Markup discipline — when to write up
  4350518: 3, // Markdown discipline — when to write down
  4350519: 4, // Holding marks flat — fund-level reporting judgment
  4350520: 2, // CEO support — recruiting help framing
  4350521: 2, // BD introductions — when they actually help
  4350522: 3, // Exec coaching framing — when to suggest a coach
  4350523: 3, // Board prep — investor role pre-board meeting
  4350524: 2, // COO hire signal — when ops chaos demands it
  4350525: 3, // CRO hire signal — sales engine maturity
  4350526: 3, // CFO hire signal — when finance complexity demands it
  4350527: 4, // Exec hire risk — early CRO at wrong stage
  4350528: 3, // Turnaround playbook — burn reduction first
  4350529: 3, // Milestone reset under turnaround
  4350530: 4, // Leadership change in turnaround — when to push for it
  4350531: 2, // Exit type — strategic vs PE vs IPO basics
  4350532: 3, // IPO timing signal — when company is ready
  4350533: 4, // Strategic acquirer dynamics — multiple bidders
  4350534: 3, // Acquisition negotiation — price discipline under one bidder
  4350535: 4, // Deal protection — earnout and retention design
  4350536: 3, // Down round mechanics — recap structure
  4350537: 4, // Washout round — diagnosing when it's the right move
  4350538: 4, // Pay-to-play execution in a down round — investor signaling
  4350539: 3, // Reserve drawdown pacing — vintage cohort discipline
  4350540: 3, // Founder mental health signal — recognizing burnout
  4350541: 3, // Founder-CEO transition — when to raise it
  4350542: 2, // Cross-portfolio sharing — when it helps
  4350543: 3, // Cross-portfolio sharing — when it leaks signal

  // Capstone: Investment Pack and Synthesis
  4280100: 5, // Memo structure under conflicting evidence — integrative across chapters
  4280101: 5, // Kill criterion under integrated diligence — synthesizing full pack
  4280102: 5, // Recommendation calibration — capstone decision under uncertainty
  // Capstone expansion (vcCapstoneQuestions.ts): 47 FieldChart-driven Qs across 5 lessons.
  ...VC_CAPSTONE_DIFFICULTY,
}

// Investment Banking difficulty table — aggregated from the 6 per-chapter files
// plus the original inline 4200010–4280102 set (rated implicitly by position
// in the arc; explicit ratings live in the imported per-chapter records).
const IB_QUESTION_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  ...IB_CH1_DIFFICULTY,
  ...IB_CH2_DIFFICULTY,
  ...IB_CH3_DIFFICULTY,
  ...IB_CH4_DIFFICULTY,
  ...IB_CH5_DIFFICULTY,
  ...IB_CAPSTONE_DIFFICULTY,
}

// Equity Research difficulty table — aggregated from the 6 per-chapter files.
const ER_QUESTION_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  ...ER_CH1_DIFFICULTY,
  ...ER_CH2_DIFFICULTY,
  ...ER_CH3_DIFFICULTY,
  ...ER_CH4_DIFFICULTY,
  ...ER_CH5_DIFFICULTY,
  ...ER_CAPSTONE_DIFFICULTY,
}

const HF_QUESTION_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  ...HF_CH1_DIFFICULTY,
  ...HF_CH2_DIFFICULTY,
  ...HF_CH3_DIFFICULTY,
  ...HF_CH4_DIFFICULTY,
  ...HF_CH5_DIFFICULTY,
  ...HF_CAPSTONE_DIFFICULTY,
}

const CLF_QUESTION_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  ...CLF_CH1_DIFFICULTY,
  ...CLF_CH2_DIFFICULTY,
  ...CLF_CH3_DIFFICULTY,
  ...CLF_CH4_DIFFICULTY,
  ...CLF_CH5_DIFFICULTY,
  ...CLF_CAPSTONE_DIFFICULTY,
}

const BC_QUESTION_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  ...BC_CH1_DIFFICULTY,
  ...BC_CH2_DIFFICULTY,
  ...BC_CH3_DIFFICULTY,
  ...BC_CH4_DIFFICULTY,
  ...BC_CH5_DIFFICULTY,
  ...BC_CAPSTONE_DIFFICULTY,
}

const ST_QUESTION_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  ...ST_CH1_DIFFICULTY,
  ...ST_CH2_DIFFICULTY,
  ...ST_CH3_DIFFICULTY,
  ...ST_CH4_DIFFICULTY,
  ...ST_CH5_DIFFICULTY,
  ...ST_CAPSTONE_DIFFICULTY,
}

const PE_QUESTION_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  ...PE_CH1_DIFFICULTY,
  ...PE_CH2_DIFFICULTY,
  ...PE_CH3_DIFFICULTY,
  ...PE_CH4_DIFFICULTY,
  ...PE_CH5_DIFFICULTY,
  ...PE_CAPSTONE_DIFFICULTY,
}

function tagDifficulty(questions: Question[], table: Record<number, 1 | 2 | 3 | 4 | 5>): Question[] {
  return questions.map((question) => {
    const difficulty = table[question.id]
    return difficulty ? { ...question, difficulty } : question
  })
}

export const careerAgentGeneratedRoadmapFinanceQuestionsByTrack: Record<string, Question[]> = {
  // ---------------------------------------------------------------------------
  // VENTURE CAPITAL ROADMAP
  // Syllabus chapters:
  //  1. Venture Model and Fund Math
  //  2. Sourcing and Market Mapping
  //  3. Startup Metrics and Diligence
  //  4. Founder, Product, and Customer Evidence
  //  5. Terms, Memo, and Investment Decision
  //  6. Portfolio Support and Follow-On Decisions
  // ---------------------------------------------------------------------------
  ventureCapitalRoadmap: runPolish(tagDifficulty([
    // Chapter 1: Venture Model and Fund Math
    // Difficulty arc: entry-friendly ownership math first → power-law math → fee/carry mechanics → reserves & dilution → fund life rationale.
    q(4200006, 'Career Skills', 'Venture Model and Fund Math', 'Check size and ownership target',
      'A fund wants 12% ownership at seed and the company is raising $5M post-money at a $25M cap. What check size matches the target?',
      '$3M — 12% of $25M post-money valuation',
      [
        ['$5M — the full round size', 'Writing the full round means owning 20% (5/25), not 12%. The check should size the target ownership share.'],
        ['$600K — 12% of the new money', 'Ownership is computed against the post-money valuation, not the round size. $600K of $25M is only 2.4%.'],
        ['$1.2M — 12% of pre-money', 'Pre-money is $20M ($25M − $5M); ownership is calculated on post-money. Mixing them produces a stale answer.'],
      ],
      'Ownership = check / post-money. Always size the check against the post-money cap, not the round size or pre-money, to hit a target ownership.'),
    q(4200000, 'Career Skills', 'Venture Model and Fund Math', 'Power law math',
      'A $200M seed fund needs to return 3x gross to LPs ($600M) and owns 10% of each company at exit. Roughly how large does a single fund-returning exit need to be?',
      'About $2B exit value — 10% ownership × $2B = $200M, which alone returns the fund',
      [
        ['About $200M exit value', 'That math forgets ownership: 10% of $200M is only $20M, not the full fund.'],
        ['About $60M exit value', 'A $60M exit at 10% ownership returns $6M — a rounding error against a $200M fund, not a fund-returner.'],
        ['About $600M exit value', 'A $600M exit at 10% returns $60M — meaningful, but the question asks for a single fund-returner, which needs the whole $200M back.'],
      ],
      'Venture math is dominated by the power law: a small number of outsized exits drive fund returns. To return a fund from one deal, exit value × ownership must equal the fund size.'),
    q(4200001, 'Career Skills', 'Venture Model and Fund Math', 'DPI vs TVPI',
      'A 7-year-old fund shows TVPI of 2.4x and DPI of 0.6x. What does the gap most directly tell an LP?',
      'Most of the reported value is still unrealized — held in portfolio markups rather than cash distributions',
      [
        ['The fund has lost money on most investments', 'TVPI of 2.4x means total value (cash plus paper) is 2.4x capital paid in — a strong number, not a loss.'],
        ['The fund returned 0.6x to LPs and the rest was fees', 'DPI captures distributions, not fees. The remaining 1.8x sits in unrealized NAV, not the fee line.'],
        ['DPI will always equal TVPI by year ten', 'Many funds end with DPI well below TVPI if marks were optimistic or exits never materialize. Convergence is not guaranteed.'],
      ],
      'TVPI counts paper plus cash; DPI counts only cash returned. The gap is unrealized value — a fund is only as good as its eventual DPI.'),
    q(4200002, 'Career Skills', 'Venture Model and Fund Math', 'Management fee drag',
      'A $100M fund charges 2% annual management fees over a 10-year life. Roughly how much of committed capital is consumed by fees?',
      'About $20M, leaving roughly $80M of investable capital',
      [
        ['About $2M, since the fee resets each year', 'The 2% applies to committed capital every year for 10 years — cumulative fees compound to roughly 20%, not 2%.'],
        ['About $50M, since fees scale with returns', 'Management fees are a percentage of committed capital, not returns. Carry is the returns-linked piece.'],
        ['Nothing meaningful — fees come out of carry', 'Fees and carry are separate. Fees fund GP operations regardless of performance; carry is the GP share of profits.'],
      ],
      'A standard 2-and-20 fund over 10 years burns roughly 20% of committed capital on fees. LPs need exits large enough to clear that drag before profits even start.'),
    q(4200003, 'Career Skills', 'Venture Model and Fund Math', 'Carry waterfall',
      'A fund has a 20% carry with a 1x preferred return (no catch-up). The fund invested $100M and returns $300M. How much carry do the GPs earn?',
      '$40M — 20% of the $200M profit above the $100M preferred return',
      [
        ['$60M — 20% of the total $300M distribution', 'Carry applies to profit above the preferred return, not to gross proceeds. LPs get their capital back first.'],
        ['$20M — 20% of one turn of capital', 'The profit pool is $200M ($300M − $100M), and 20% of that is $40M, not $20M.'],
        ['$0 — a 1x preferred means no carry until 2x', 'A 1x preferred return is simply return of capital. Carry starts once LPs are made whole, not at 2x.'],
      ],
      'In a typical waterfall, LPs get capital back first, then GPs share in the profit above that hurdle. Different structures (catch-up, higher hurdles) change the math.'),
    q(4200004, 'Career Skills', 'Venture Model and Fund Math', 'Reserve sizing',
      'A $150M fund makes 30 seed checks of $1M each and plans to follow on in winners. How much should typically be held as reserves?',
      'Around $120M — most of the fund is reserved for follow-on, because winners need pro rata to maintain ownership',
      [
        ['Around $30M — one extra round per company', 'Reserving only one round per company assumes every company gets exactly one follow-on, which understates how much capital winners absorb across multiple rounds.'],
        ['Around $0M — a seed fund only does seed checks', 'Most modern seed funds reserve heavily for follow-on. Initial checks are usually less than half of deployed capital.'],
        ['Around $75M — split evenly between initial and reserve', 'In practice, mature seed funds often reserve 2–3x initial check capacity to defend ownership in breakout companies.'],
      ],
      'Reserves are how a seed fund maintains ownership in winners. Underreserving is a classic mistake — pro rata into a Series C can cost as much as 20 initial seed checks combined.'),
    q(4200005, 'Career Skills', 'Venture Model and Fund Math', 'Ownership at exit',
      'A VC owns 15% at Series A. The company raises Series B, C, and D, each diluting existing investors by ~20% (no pro rata). What is approximate ownership at exit?',
      'About 7.7% — 15% x 0.8 x 0.8 x 0.8',
      [
        ['About 9% — 15% minus three 20% absolute hits', 'Dilution compounds multiplicatively (each round shrinks the slice that remains), not by subtraction.'],
        ['About 15% — pro rata defends ownership automatically', 'The scenario explicitly skips pro rata. Without participating, the investor is diluted in every round.'],
        ['About 3% — dilution doubles each round', 'Dilution does not compound at 2x. Three rounds of 20% dilution leaves roughly half of the original stake, not a quarter.'],
      ],
      'Ownership compounds down through rounds. Without follow-on capital, even early-stage winners can deliver only modest dollar returns because the slice shrinks every financing.'),
    q(4200007, 'Career Skills', 'Venture Model and Fund Math', 'Fund life and recycling',
      'Why do most venture funds have a 10-year life with a 5-year investment period rather than open-ended capital?',
      'LPs need defined timelines for capital calls, returns, and IRR measurement; finite life forces disciplined entry and exit',
      [
        ['Because regulators cap fund life at 10 years', 'There is no regulatory ceiling on fund life — the 10-year structure is a market convention, not a rule.'],
        ['Because GPs cannot manage capital longer than a decade', 'Many GPs run multiple funds simultaneously and rolling vintages. The constraint is LP economics, not management capacity.'],
        ['Because companies always exit within 5 years', 'Modern venture-backed companies often stay private 10+ years. The 10-year fund life is a forcing function, not a reflection of exit timing.'],
      ],
      'Finite fund life keeps GPs disciplined about entries and exits. Investment periods (when new bets can be made) usually run 3–5 years; the remainder is for portfolio management and exits.'),

    // Chapter 1 expansion (Wave 5): deeper power-law variants, fund construction (check sizing,
    // reserves ratio, recycling), fee mechanics (GP commit, hurdles, waterfalls), DPI/TVPI/MOIC/IRR
    // math, ownership across rounds, LP relationships (capital calls, vintage, J-curve),
    // fund-of-funds vs direct, cross-fund conflicts, crossover and AUM dynamics.
    q(4350000, 'Career Skills', 'Venture Model and Fund Math', 'Power law definition',
      'A senior partner says venture returns "follow a power law." What is the most accurate description of what that means in practice for a fund\'s portfolio?',
      'A small number of investments generate the bulk of fund returns, while most investments return little or nothing',
      [
        ['Every investment is expected to deliver a 3x return on average', 'Power-law portfolios are highly skewed — most investments lose money or return capital, with a few outliers carrying the fund. The average is a poor description of any individual outcome.'],
        ['Returns are distributed normally around a 2x mean', 'Venture returns are emphatically not normally distributed. A normal distribution would imply most companies cluster near the average, which is the opposite of how venture works.'],
        ['Each successive fund returns less than the prior fund', 'That describes a particular GP\'s decline, not power-law math. The power law is about within-fund distribution, not cross-fund.'],
      ],
      'Power law means the top one or two companies usually return the entire fund and more. The rest break even or zero. Fund strategy follows from this: every investment must have a credible path to fund-returning scale.'),
    q(4350001, 'Career Skills', 'Venture Model and Fund Math', 'Fund-returner at $400M',
      'A $400M fund owns 8% at exit of each portfolio company. Roughly how large does a single exit need to be to return the entire fund from that one company?',
      'About $5B — 8% of $5B equals $400M, the fund size',
      [
        ['About $400M — exit value equals fund size', 'That math forgets ownership. 8% of $400M is $32M, only a small fraction of the fund.'],
        ['About $1B — a unicorn outcome returns any fund', '8% of $1B is $80M. Useful, but not a fund-returner against $400M committed.'],
        ['About $50M — strong M&A exits return funds', '8% of $50M is $4M. That is a rounding error against $400M, not a fund-returner.'],
      ],
      'Fund-returner math: exit value × ownership = fund size. As funds get larger, the exit value needed for a single fund-returner scales linearly, which is why $400M+ funds chase unicorn outcomes.'),
    q(4350002, 'Career Skills', 'Venture Model and Fund Math', 'Two fund-returners',
      'A $100M seed fund wants to return 3x gross ($300M). It owns 12% on average at exit and expects roughly 25 of 30 investments to return zero or capital. How big do the two outsized exits need to be on average?',
      'About $1.25B each — two exits at 12% ownership × $1.25B = $300M combined',
      [
        ['About $150M each — totaling the fund target', '12% of $150M is $18M. Two of those is $36M — far short of the $300M needed.'],
        ['About $25M each — modest M&A exits', '12% of $25M is $3M. Two of those is $6M, which barely registers against a $100M fund.'],
        ['About $3B each — only unicorns matter', '$3B exits would return roughly 7x the fund alone. Two of them is overshooting; the target is 3x, not 7x.'],
      ],
      'When the power-law tail is concentrated in two outcomes, those two exits have to do almost all the work. Smaller average ownership demands proportionally larger exits, which is why ownership defense matters across rounds.'),
    q(4350003, 'Career Skills', 'Venture Model and Fund Math', 'Power law portfolio shape',
      'A 30-company seed fund finishes its life. The realized distribution: 12 zeros, 13 returned 0.5–2x cost, 4 returned 5x, and 1 returned 35x. The fund is roughly 3x gross. What does this shape illustrate about power-law math?',
      'The single 35x outcome carries the fund — without it, the remaining 29 companies would deliver well under 1.5x gross',
      [
        ['A balanced portfolio because most companies returned at least cost', 'Returning cost is not a positive outcome on a 10-year time horizon. The 12 zeros plus 13 marginal outcomes would crush the fund on their own.'],
        ['Evidence the fund was too concentrated in winners', '30 companies is broadly diversified for a seed fund. The concentration is in outcomes, not in initial position-sizing.'],
        ['A sign that the 4 five-x outcomes drove the result', 'Four 5x outcomes at, say, 5% ownership each adds maybe 1.0x of fund return. The 35x outcome contributes far more than the combined 5x cohort.'],
      ],
      'Power-law portfolios depend on the outlier. A seed fund without at least one 20-50x outcome is structurally hard to make work at 3x gross, even with broad diversification.'),
    q(4350004, 'Career Skills', 'Venture Model and Fund Math', 'Check size from ownership',
      'You want 15% ownership in a Series A at $30M post-money. What check size do you need to write?',
      '$4.5M — 15% of $30M post-money',
      [
        ['$3M — 15% of pre-money', 'Ownership is calculated on post-money. 15% of pre-money ($25.5M if round is $4.5M) does not equal the post-money stake you actually receive.'],
        ['$1.5M — half of 15% of round size', 'There is no math here that produces 15% ownership. Pick the check from post-money valuation, not from arbitrary fractions of the round.'],
        ['$15M — match the ownership percentage to millions of capital', 'That conflates a percentage with a dollar amount. 15% ownership of a $30M company is $4.5M, not $15M.'],
      ],
      'Ownership = check / post-money. This is the single most-used equation in seed and Series A construction; reach for it before any other calculation.'),
    q(4350005, 'Career Skills', 'Venture Model and Fund Math', 'Reserves ratio basics',
      'A $200M fund plans a 1:2 initial-to-reserve ratio (one dollar of first checks for every two dollars of follow-on). How much of the fund is for initial checks?',
      'About $67M — one-third of the fund, with $133M held for follow-on',
      [
        ['About $100M — half for initials, half for reserves', 'Half-and-half would be a 1:1 ratio, not 1:2. A 1:2 ratio puts twice as much in reserves as in initials.'],
        ['About $200M — initial checks first, follow on later', 'That assumes no reserves at all, which is the opposite of the prompt. The fund explicitly plans 2:1 reserves.'],
        ['About $40M — reserves take 80% of any seed fund', 'An 80% reserve allocation is a 1:4 ratio, not 1:2. Be exact about the math the prompt specifies.'],
      ],
      'Reserves ratio is a fund-construction lever. A 1:2 ratio is common for funds that need to defend ownership through Series B; aggressive ownership defense pushes toward 1:3 or higher.'),
    q(4350006, 'Career Skills', 'Venture Model and Fund Math', 'Breaking the reserves ratio',
      'A fund\'s reserve model says $3M per breakout company. One portfolio company is now raising a $50M Series B and the fund needs to write $6M to maintain its 10% stake. What\'s the right framing for the decision?',
      'The reserve plan is a model, not a rule — if the company is genuinely a top-quartile outcome, breaking the ratio to defend ownership is exactly what reserves are for',
      [
        ['Stick to $3M no matter what — the model exists to be honored', 'A reserves model that cannot bend for a breakout is the wrong model. Reserves exist to follow conviction, not to enforce uniformity.'],
        ['Write the full pro rata because the company is hot, regardless of fund-level concentration', 'Even breakouts have to be sized against the rest of the portfolio. Writing pro rata on every round without concentration limits is how funds break.'],
        ['Take the paper markup as enough and preserve reserves', 'Treating the markup as the whole win gives up ownership defense and signals weak support to the next lead. The markup is paper either way.'],
      ],
      'Reserves are for the breakout cases. The discipline is to break the ratio for genuine outliers, not to break it casually. The same dollar in a non-breakout is wasted capital.'),
    q(4350007, 'Career Skills', 'Venture Model and Fund Math', 'Recycling provision',
      'A $100M fund has a 20% recycling provision and exits an early investment for $15M (a 3x return on a $5M check) within the first three years. How much extra investable capital does this potentially create?',
      'Up to $15M of recycled proceeds — recycling lets the GP re-invest exit cash up to the cap, increasing invested capital beyond the original $100M',
      [
        ['$0 — exits go directly to LPs as DPI', 'Without recycling, that would be true. The 20% provision is the whole point: it lets the GP redeploy a portion of proceeds before LPs receive distributions.'],
        ['$5M — only the original cost can be recycled', 'Recycling provisions are usually based on a percentage of the fund or the gross proceeds, not the original cost basis. The $5M view systematically underestimates capacity.'],
        ['$50M — half the fund can always be recycled', 'A 50% recycling rate is far above the 20% the prompt specifies. Most funds cap recycling at 10-25% to balance LP DPI against more invested capital.'],
      ],
      'Recycling lets a GP redeploy early exit proceeds rather than distributing them immediately, effectively increasing the fund\'s invested capital base. It is bounded by both percentage caps and time windows; LPs pay attention to how aggressively GPs use it.'),
    q(4350008, 'Career Skills', 'Venture Model and Fund Math', 'GP commit',
      'A $250M fund has a standard 2% GP commit. What does that mean and roughly how much capital do the GPs themselves contribute?',
      'About $5M — the GPs invest 2% of total commitments alongside LPs, aligning skin in the game with the fund',
      [
        ['$0 — GPs only earn carry, they do not contribute capital', 'Standard LP terms require a GP commit precisely to align incentives. A 0% commit would raise serious LP concerns.'],
        ['$50M — 20% of the fund matching the carry rate', '20% would be enormous. The 20% number is carry, not GP commit, which is typically 1-3%.'],
        ['$250M — GPs guarantee the fund themselves', 'GPs do not personally backstop the fund. The commit is a meaningful percentage to align, not full coverage.'],
      ],
      'GP commit (typically 1-3% of fund size) is the GPs\' own capital invested alongside LPs. It is the simplest alignment-of-incentives mechanic in fund formation; LPs pay close attention when it is below 1% or financed via management fee offsets.'),
    q(4350009, 'Career Skills', 'Venture Model and Fund Math', '2-and-20 definition',
      'A fund describes its terms as "standard 2-and-20." What does that refer to?',
      'A 2% annual management fee on committed capital plus a 20% carried interest on profits above the preferred return',
      [
        ['A 2-year investment period with 20-year fund life', 'Most funds have a 3-5 year investment period and a 10-year life. 2-and-20 is shorthand for economics, not duration.'],
        ['A 2% GP commit with 20% LP allocation', '2% is sometimes the GP commit, but "2-and-20" specifically refers to fees and carry — the GP\'s economic relationship to the fund.'],
        ['A 2x preferred return with 20% catch-up', 'Preferred returns are typically 1x (return of capital) or an 8% hurdle, not 2x. 20% catch-up is a separate carry mechanic.'],
      ],
      '"2-and-20" is the dominant fee-and-carry structure in venture (and historically private equity and hedge funds). It compounds: 2% per year for 10 years equals roughly 20% of committed capital before any carry math.'),
    q(4350010, 'Career Skills', 'Venture Model and Fund Math', 'Step-down fees',
      'A fund has 2% management fees during a 5-year investment period, then step-down terms. After the investment period, what is the typical fee basis?',
      'Fees step down to roughly 1-1.5% and are usually charged on invested capital (rather than committed), reflecting reduced active investing',
      [
        ['Fees stay at 2% on committed capital for the full 10 years', 'That would be a flat fee structure, which is less common. Most modern funds step fees down after the investment period.'],
        ['Fees rise to 3% to reward GPs for portfolio management', 'Fees do not rise in standard structures. The step is always downward, not upward, after active deployment ends.'],
        ['Fees terminate entirely after year 5', 'Fees continue through the fund\'s life because the GP keeps managing existing portfolio. The reduction reflects scope, not termination.'],
      ],
      'Step-down fee structures keep total fee drag closer to 12-15% of committed capital rather than the full 20% a flat 2-and-20 over 10 years would produce. LPs negotiate these specifically to improve net returns.'),
    q(4350011, 'Career Skills', 'Venture Model and Fund Math', 'European vs American waterfall',
      'A fund has a "European waterfall" with a 1x preferred return. What does this mean for when GPs start receiving carry?',
      'GPs receive carry only after the entire fund has returned all committed capital to LPs — carry is paid at the fund level, not deal by deal',
      [
        ['GPs receive carry on each deal individually as exits occur', 'That describes an American (deal-by-deal) waterfall, which pays carry earlier and is more GP-friendly. European waterfalls are LP-friendly.'],
        ['GPs receive carry only after a 20% IRR hurdle is cleared', 'A 20% IRR hurdle is unusual in venture (8% is more common in PE). The European vs American distinction is about timing across the fund, not hurdle rate.'],
        ['GPs never receive carry until the fund is fully wound down', 'Even European waterfalls allow carry once the fund clears the 1x return of capital, which can happen well before final wind-down.'],
      ],
      'European (whole-fund) waterfalls protect LPs by delaying carry until all capital is returned. American (deal-by-deal) waterfalls accelerate GP payouts and almost always include clawback provisions to recover overpaid carry if later deals disappoint.'),
    q(4350012, 'Career Skills', 'Venture Model and Fund Math', 'Hurdle rate mechanics',
      'A fund offers an 8% preferred return (hurdle) before carry kicks in. The fund returns 1.6x after 10 years. What does the hurdle accomplish?',
      'LPs receive their capital plus an 8% annualized return before GPs earn any carry on the upside above that threshold',
      [
        ['GPs receive 8% of all returns automatically', 'That describes a flat fee, not a preferred return. The 8% goes to LPs first, before GPs participate in upside.'],
        ['The fund must distribute at least 8% per year to LPs', 'A hurdle is a return threshold on cumulative performance, not a required annual distribution. Most venture funds distribute lumpily as exits occur.'],
        ['Carry is capped at 8% of total proceeds', 'Carry above the hurdle is uncapped (typically 20%); the 8% is the LP-only floor, not a ceiling on GP earnings.'],
      ],
      'An 8% hurdle is rare in venture (common in PE) because venture\'s J-curve makes early returns negative. When present, it raises the bar before GPs share in upside; some funds also include a catch-up provision to restore GP\'s full 20% share once the hurdle is cleared.'),
    q(4350013, 'Career Skills', 'Venture Model and Fund Math', 'Catch-up provision',
      'A fund has an 8% hurdle followed by a 100% GP catch-up, then 80/20 splits. The fund earns enough to clear the hurdle and provide meaningful upside. What does the catch-up do?',
      'After LPs receive their 8%, GPs receive 100% of subsequent distributions until they have caught up to 20% of total profits, then splits revert to 80/20',
      [
        ['It guarantees GPs receive carry equal to the hurdle amount', 'The catch-up restores the GP\'s 20% share of total profits, not a fixed dollar amount tied to the hurdle.'],
        ['LPs and GPs share the catch-up equally', 'The catch-up specifically gives 100% (or sometimes 50-100%) of distributions to GPs during the catch-up phase to bring GPs back to their target carry share.'],
        ['It eliminates the hurdle entirely if profits are high enough', 'The hurdle is a path, not a removable feature. The catch-up follows it; profits above the catch-up are then split per the carry formula.'],
      ],
      'Catch-up provisions reconcile two LP-friendly features (a hurdle and 80/20 splits) by ensuring that once profits clear the hurdle, the GP still ends up with their target 20% of total economics. Without a catch-up, the hurdle is a permanent drag on GP economics.'),
    q(4350014, 'Career Skills', 'Venture Model and Fund Math', 'MOIC definition',
      'A fund reports a MOIC of 3.0x. What does MOIC measure and how is it different from IRR?',
      'MOIC (multiple on invested capital) measures total dollars returned per dollar invested, ignoring time — IRR is the same return expressed as an annualized rate',
      [
        ['MOIC and IRR are the same metric expressed differently', 'They are emphatically different. A 3x MOIC over 4 years versus 12 years implies very different IRRs even though MOIC is identical.'],
        ['MOIC measures only realized cash, IRR includes paper marks', 'Both MOIC and IRR can be calculated on realized or total-value bases. The distinction is time-sensitivity, not realized vs unrealized.'],
        ['MOIC is annualized; IRR is the total multiple', 'Reversed. IRR is annualized; MOIC is the total multiple without a time dimension.'],
      ],
      'MOIC is a simple multiple, IRR is time-weighted. A 3x in 4 years is roughly a 32% IRR; a 3x in 10 years is roughly 12% IRR. LPs care about both; bad GPs hide low IRRs behind decent MOICs and vice versa.'),
    q(4350015, 'Career Skills', 'Venture Model and Fund Math', 'MOIC calculation',
      'A fund deployed $80M of invested capital and has returned $200M in distributions plus $40M of remaining NAV. What is the total MOIC (TVPI basis)?',
      '3.0x — total value ($240M) divided by invested capital ($80M)',
      [
        ['2.5x — only distributions count', '$200M / $80M is 2.5x, but that is DPI (realized only). MOIC on a TVPI basis includes both distributions and remaining NAV.'],
        ['0.5x — only the NAV / invested', 'That ignores the $200M already distributed, which is the bulk of the realized return.'],
        ['1.5x — splits between cash and paper', '"Splitting" is not how MOIC works. The metric simply sums total value (cash + paper) and divides by capital invested.'],
      ],
      'TVPI MOIC is the all-in multiple: total value (distributed + unrealized) divided by paid-in capital. A 3x TVPI looks good; a 3x DPI is better because it is cash, not marks.'),
    q(4350016, 'Career Skills', 'Venture Model and Fund Math', 'DPI vs RVPI',
      'A fund reports DPI 1.4x and RVPI 1.1x. What does each number represent and what is the TVPI?',
      'DPI 1.4x is realized cash distributed; RVPI 1.1x is remaining unrealized NAV per dollar in; TVPI is 2.5x (their sum)',
      [
        ['DPI 1.4x is the IRR; RVPI 1.1x is the multiple', 'DPI and RVPI are both multiples, not rates. IRR is a separate, time-weighted metric.'],
        ['TVPI equals the higher of DPI and RVPI', 'TVPI is the sum, not the max. The whole point of breaking out DPI and RVPI is to separate the two components.'],
        ['RVPI converts to DPI automatically when the fund ends', 'Only if exits actually realize the marks. RVPI can collapse if marks are stale or optimistic; many late-fund-life RVPIs evaporate at wind-down.'],
      ],
      'DPI = realized; RVPI = unrealized; TVPI = DPI + RVPI. A mature fund\'s narrative is usually: "We have X DPI and Y RVPI we expect to convert to Z DPI by year 12." The conversion rate is the GP\'s actual track record.'),
    q(4350017, 'Career Skills', 'Venture Model and Fund Math', 'TVPI interpretation across vintages',
      'Two funds from the same firm: Fund III (year 3) shows TVPI 1.8x; Fund I (year 8) shows TVPI 2.4x. Which is more impressive on its own?',
      'Fund III is plausibly more impressive — early TVPI of 1.8x in year 3 implies aggressive markups; Fund I needs to convert more of its 2.4x to DPI to validate the number',
      [
        ['Fund I — 2.4x is a larger absolute multiple', 'Absolute multiples are not comparable across fund ages. Year-8 funds should have higher TVPI if they are performing; year-3 with 1.8x is a stronger signal.'],
        ['Fund III — it has the lower TVPI which is conservative', 'Conservative is good, but 1.8x in year 3 is not conservative — it is a strong early markup that will be tested as the fund ages.'],
        ['Neither — TVPI is the same metric so they are equivalent', 'TVPI without context is meaningless. The same number at year 3 vs year 8 implies entirely different trajectories.'],
      ],
      'Read TVPI against fund vintage. Early-vintage TVPI is heavily marks-driven and reversible; late-vintage TVPI should be converging on DPI. Cohort-relative comparisons (vs other 2018 funds, e.g.) are more useful than absolute numbers.'),
    q(4350018, 'Career Skills', 'Venture Model and Fund Math', 'IRR definition',
      'A fund reports a 22% net IRR. What does IRR measure and what makes it different from a simple multiple?',
      'The annualized return that discounts cash flows (invested capital out, distributions in) back to zero — IRR weights timing as well as size of returns',
      [
        ['The total profit as a percentage of fund size', 'That is closer to a cost-on-cost return, not IRR. IRR specifically incorporates the time value of money.'],
        ['The fund\'s gross return before fees', 'Net IRR is specifically after fees and carry. Gross IRR is a separate metric — gross-net spread is usually 5-10 points for a 2-and-20 fund.'],
        ['The carry rate applied to LP distributions', 'Carry is a percentage of profit, not a return rate. IRR is the LP\'s return metric, independent of how carry is distributed.'],
      ],
      'IRR is the discount rate that makes the NPV of fund cash flows equal zero. Early distributions massively boost IRR; the same MOIC over a longer hold collapses IRR. LPs use IRR for vintage-year benchmarking.'),
    q(4350019, 'Career Skills', 'Venture Model and Fund Math', 'IRR vs MOIC tradeoff',
      'A GP is offered an early exit on a Series A investment at 2.5x in year 3 versus an expected 4x at year 7. Which option is better on an IRR basis (ignoring fund construction)?',
      'The 2.5x in year 3 is roughly 35% IRR; the 4x in year 7 is roughly 22% IRR — the early exit wins on IRR despite the lower multiple',
      [
        ['The 4x at year 7 always wins because the multiple is higher', 'IRR is time-weighted. A higher multiple over a much longer period can produce a lower annualized rate.'],
        ['They are equivalent because returns are linear', 'Compound returns are not linear. The 2.5x in 3 years compounds faster than the 4x in 7 years on an annualized basis.'],
        ['Cannot compare without fund-level data', 'On an isolated-investment basis you can compare IRRs. The fund-level consideration is whether early DPI matters more than longer-term MOIC, which is a separate question.'],
      ],
      'Earlier exits punch above their weight on IRR. But fund-level math is messier: an early 2.5x exit may not contribute enough absolute dollars to matter against a portfolio that needs 30x outcomes. GPs balance IRR-friendly takeouts against fund-returner economics.'),
    q(4350020, 'Career Skills', 'Venture Model and Fund Math', 'Cash-on-cash multiple',
      'An LP asks for "net cash-on-cash" on a fund. What is the difference between gross and net cash-on-cash multiples?',
      'Gross is the return before fees and carry; net is what the LP actually receives after both — for a 2-and-20 fund, the gap can be 0.5x or more on a strong fund',
      [
        ['Gross and net are the same number, just different conventions', 'They are materially different. Fees of 20% of committed capital and 20% carry on profits can shave a full turn off the multiple.'],
        ['Net is before carry but after fees', 'Net is after both fees and carry. Some reports break out "net of fees only" but the standard LP-facing number is after everything.'],
        ['Gross is the lifetime number; net is annualized', 'Both are multiples, not annualized rates. Multiples have no time dimension — that\'s IRR\'s job.'],
      ],
      'LPs see net cash-on-cash. GPs talk about gross because it makes the deal-by-deal selection look strong. The gross-to-net gap on a 2-and-20 fund is roughly 0.4-0.7x at 3x gross MOIC; LPs should always anchor on net.'),
    q(4350021, 'Career Skills', 'Venture Model and Fund Math', 'Reserves model choice',
      'A new $80M seed fund is choosing between a 50/50 (initials/reserves) and a 40/60 split. The GP wants to lead and defend ownership through Series B. Which is more consistent with that strategy?',
      '40/60 — leading seed positions requires meaningful follow-on through Series A and B to defend ownership, which 50/50 often cannot fund',
      [
        ['50/50 — equal split feels balanced', '"Balanced" is not a strategy. The right ratio depends on how many initial investments the GP wants and how aggressively they need to defend ownership.'],
        ['Either is fine — reserves only matter at $200M+ funds', 'Reserves matter even more at small funds, where a single Series B can absorb a year of initials. Underreserving at $80M is a classic small-fund mistake.'],
        ['80/20 toward initials — more shots on goal', 'More initial bets without reserves means watching every winner dilute to immateriality. Shot count without ownership defense is wasted capital.'],
      ],
      'Reserves ratio is downstream of ownership defense strategy. Lead seed investors who want to maintain double-digit ownership through Series B typically need 1:1.5 to 1:2 initial-to-reserve. Participating-only seed funds can run leaner reserves.'),
    q(4350022, 'Career Skills', 'Venture Model and Fund Math', 'Follow-on math under dilution',
      'A fund owns 12% of a company after seed. The Series A is $20M at $80M post-money. To maintain 12%, what pro rata check is required?',
      '$2.4M — 12% of the $20M new money keeps ownership flat at 12% post-Series A',
      [
        ['$9.6M — 12% of post-money', 'Pro rata is calculated on the new money raised in the round, not on the full post-money valuation. Otherwise the math overstates the check.'],
        ['$1.2M — half pro rata is sufficient', 'Half pro rata gets diluted further, by definition. The question explicitly asked for ownership maintenance.'],
        ['$0 — pro rata is automatic with anti-dilution', 'Anti-dilution adjusts price in down-rounds; it does not write new checks. Pro rata is a right, not an automatic top-up.'],
      ],
      'Pro rata check = ownership percentage × new money in the round. The reserve burn scales with every up-round, which is why a winning portfolio company can consume 5-10x its initial check across its life.'),
    q(4350023, 'Career Skills', 'Venture Model and Fund Math', 'Concentration limit',
      'A $150M fund has a soft 10% single-company concentration limit. One portfolio company now represents $14M of invested capital plus a planned $8M follow-on. What\'s the implication?',
      'Total exposure would be $22M, roughly 15% of the fund — well above the soft limit, requiring an explicit partnership decision rather than a routine reserve write',
      [
        ['Stay under the soft limit by capping follow-on at $1M', '$1M is too small to defend ownership in a Series B-scale round. The decision is whether to break the limit explicitly, not to half-step it.'],
        ['Treat the soft cap as flexible because the company is outperforming', 'Soft limits exist precisely so a partnership stops and considers concentration risk. Treating them as advisory defeats the purpose.'],
        ['Sell secondary to bring exposure below 10%', 'Secondary sales are possible but rare and usually leave money on the table relative to holding. The first question is whether the concentration is warranted, not how to mask it.'],
      ],
      'Concentration limits force a decision: is this company a fund-returner that justifies the exposure? If yes, document the call. If no, the reserve plan needs to flex elsewhere. Quietly drifting above the cap is how funds become single-company stories.'),
    q(4350024, 'Career Skills', 'Venture Model and Fund Math', 'Entry ownership target',
      'A seed fund GP says they target "12-15% entry ownership" on lead investments. What does "entry ownership" mean?',
      'The ownership percentage acquired at the time of initial investment, before any future rounds dilute the stake',
      [
        ['Final ownership at exit after all rounds of dilution', 'That is exit ownership, which is much smaller after typical dilution. Entry is the starting point.'],
        ['The percentage owned by founders at the entry round', 'Entry ownership refers to the investor\'s stake, not the founder\'s. Founder ownership is a separate cap-table line.'],
        ['Ownership in the fund itself, not the portfolio company', '"Entry ownership" almost always refers to portfolio-company ownership in venture-speak. Fund-level ownership is GP commit territory.'],
      ],
      'Entry ownership is the starting position. From there, dilution chips at it over every priced round; only pro rata defends it. Targets cluster at 8-20% depending on stage and check size relative to fund size.'),
    q(4350025, 'Career Skills', 'Venture Model and Fund Math', 'Blended ownership',
      'A fund invests $2M at seed for 10% ownership and then $3M at Series A for 4% additional ownership. What is the blended entry ownership?',
      'Roughly 14% — the sum of ownership stakes acquired across both checks (subject to dilution from later rounds)',
      [
        ['7% — average of 10% and 4%', 'Ownership percentages are not averaged across rounds. They sum (and then get diluted by subsequent rounds together).'],
        ['10% — seed ownership dominates', 'The Series A check actually adds incremental ownership on top of the seed stake, so blended is above 10%, not at it.'],
        ['4% — only the last round counts', 'The seed stake does not vanish at the Series A. It dilutes at the Series A round price like every other share, but it remains.'],
      ],
      'Blended ownership across multiple rounds in the same company is the sum of stakes acquired. From there, every subsequent round dilutes the combined position. Funds that follow on aggressively can hold blended ownership well above their entry target.'),
    q(4350026, 'Career Skills', 'Venture Model and Fund Math', 'Option pool refresh at Series B',
      'A company raising Series B agrees to refresh the option pool to 15% pre-money to attract executive hires. How does this affect existing investors\' ownership?',
      'Existing investors are diluted by the pool refresh — the new shares come from pre-money, so the dilution falls on founders and existing investors, not the Series B lead',
      [
        ['Only founders are diluted; investors are protected', 'Pool refreshes from pre-money dilute everyone existing — founders most heavily, but existing investors too.'],
        ['The Series B lead bears the pool dilution', 'A pre-money pool refresh shifts dilution to existing holders precisely so the new lead is not affected. Post-money pools work the other way.'],
        ['Pool refreshes are dilution-neutral because options are not yet issued', 'Option pools dilute on a fully diluted basis from creation; unissued options still count in the cap table denominator.'],
      ],
      'Option pool timing is a real economic term. Pre-money pool refreshes are standard but should be modeled into the effective valuation; existing investors and founders share the dilution proportionally to their pre-refresh stakes.'),
    q(4350027, 'Career Skills', 'Venture Model and Fund Math', 'Pre-emptive rights',
      'A fund has pre-emptive rights (a contractual pro rata) in a portfolio company. What does that give the fund versus an investor without those rights?',
      'The contractual right — not just the opportunity — to participate in future financings up to their existing ownership share',
      [
        ['Guaranteed allocation in oversubscribed rounds', 'Pre-emptive rights guarantee the right to participate, not allocation beyond pro rata. Oversubscribed rounds still get scaled.'],
        ['A discount on the next round\'s valuation', 'Pre-emptive rights are about participation, not pricing. Discounts come from separate provisions like SAFE caps or warrants.'],
        ['Veto power over the next financing', 'Veto rights are protective provisions, not pre-emptive rights. The two are distinct governance instruments.'],
      ],
      'Pre-emptive (pro rata) rights are the cornerstone of ownership defense. They convert "we would like to follow on" into a contractual right that survives competition for allocation. Lead investors negotiate them aggressively; smaller funds often don\'t get them.'),
    q(4350028, 'Career Skills', 'Venture Model and Fund Math', 'Capital call definition',
      'A new LP asks how funding works in practice for the fund they committed to. What is a "capital call"?',
      'The mechanism by which a GP draws committed capital from LPs over time as the fund makes investments and pays expenses',
      [
        ['A one-time wire of the full commitment at fund close', 'Funds draw capital incrementally over the investment period, not all at once. This is precisely why "committed" differs from "called."'],
        ['A request for additional capital beyond the LP\'s commitment', 'Capital calls draw from the existing commitment; they never exceed it. Going above commitments requires a new fund or a co-invest vehicle.'],
        ['A quarterly distribution to LPs', 'Calls are inbound (LP to GP); distributions are outbound (GP to LP). Confusing the direction is a common new-LP mistake.'],
      ],
      'Capital calls let the GP keep LP capital invested elsewhere until it is needed for deployment. Calls usually happen on 10-30 days\' notice; LPs that default on capital calls face severe penalties including loss of carry rights or full forfeit.'),
    q(4350029, 'Career Skills', 'Venture Model and Fund Math', 'Capital call timing',
      'A venture fund typically calls capital with what cadence and trigger?',
      'On an as-needed basis when investments close or expenses are due, usually batched quarterly to reduce administrative load — not on a fixed schedule',
      [
        ['Monthly, regardless of activity', 'Most funds avoid monthly cadence because of admin overhead. Quarterly batched calls or event-driven calls are far more common.'],
        ['Only at fund close as a single tranche', 'A single up-front tranche would create idle cash and hurt IRR. Capital is called as deployed, not all at once.'],
        ['When LPs request distributions, in proportion', 'Calls and distributions are independent flows. LPs cannot accelerate or delay capital calls by asking for distributions.'],
      ],
      'Quarterly batched capital calls are the norm for venture funds — efficient for both the GP\'s admin team and LP cash management. Some early-stage funds with rapid pace do monthly or rolling calls; PE funds tend toward larger, less frequent calls.'),
    q(4350030, 'Career Skills', 'Venture Model and Fund Math', 'Fund vintage',
      'A fund manager says their "2021 vintage" performed differently from their "2018 vintage." What does "vintage" mean?',
      'The year the fund was formed and began investing — used by LPs to compare funds against peer cohorts that faced the same macro environment',
      [
        ['The age of the underlying portfolio companies', 'Vintage refers to the fund itself, not the companies. A 2021 vintage fund may invest in companies formed any year.'],
        ['The year of the highest exit in the fund', 'Vintage is fixed at fund formation; exits do not change it. The 2021 vintage is the 2021 vintage even if the best exit is in 2028.'],
        ['The number of years the fund has been deployed', 'That is fund age, not vintage. Vintage is the absolute year of formation.'],
      ],
      'LPs benchmark funds by vintage year because macro conditions (rate environment, IPO window, multiples) dominate single-year cohorts. A median 2020 fund may have looked great until rates rose; a 2023 fund will be benchmarked against tighter peers.'),
    q(4350031, 'Career Skills', 'Venture Model and Fund Math', 'Vintage diversification',
      'A large endowment wants to commit $50M per year to venture. What is the strategic rationale for spreading commitments across multiple vintage years rather than concentrating?',
      'Different vintages catch different macro cycles — spreading commitments diversifies entry valuations, exit windows, and fund-strategy luck',
      [
        ['It lowers the management fees paid to GPs', 'Vintage diversification has no impact on fees; the LP pays the standard rate per fund regardless of when commitments are made.'],
        ['Multiple vintages compound returns faster', 'Returns are determined by underlying fund performance, not the diversification across vintages. Diversification is a risk management lever, not a return accelerant.'],
        ['LPs are required by regulation to diversify across years', 'No regulation requires vintage diversification. It is a strategic choice based on the cyclicality of private market returns.'],
      ],
      'Vintage timing is a real source of variance in venture returns; 2020-21 vintages faced wildly different macro conditions than 2022-23. Endowments and pensions commit annually precisely to neutralize this single-vintage risk.'),
    q(4350032, 'Career Skills', 'Venture Model and Fund Math', 'J-curve interpretation',
      'A fund shows -8% IRR in year 2 and +25% IRR by year 7. What is the J-curve and how does it apply here?',
      'Early fund years show negative returns from fee drag and unrealized investments; as winners mark up and exit, IRR turns positive and accelerates — the classic J-curve shape',
      [
        ['The J-curve is a sign of a failing fund', 'Every venture fund shows a J-curve. Negative early IRR is structural (fees consumed before exits), not a failure signal.'],
        ['The fund should be paused until IRR turns positive', 'Pausing investments mid-fund is not an option in standard fund structures. The J-curve is expected and informs LP cash management, not GP behavior.'],
        ['The pattern means the fund has high beta', 'Beta is a public-market concept that does not map cleanly to private funds. The J-curve reflects fee timing and exit lag, not market sensitivity.'],
      ],
      'The J-curve is universal in venture and PE: fees and expenses front-load while gains realize over years. LPs underwrite to a J-curve; a fund that does not show one (because of immediate markups) usually faces a steeper test as marks get retested at exit.'),
    q(4350033, 'Career Skills', 'Venture Model and Fund Math', 'Fund-of-funds vs direct',
      'An LP can either invest in a venture fund directly or through a fund-of-funds (FoF). What is the main economic tradeoff?',
      'FoFs charge an additional fee layer (typically 1% + 5% carry on top of underlying fund fees), but give access to oversubscribed funds and diversification a single LP could not assemble alone',
      [
        ['FoFs always outperform direct fund investments', 'FoFs add a fee layer, which is a structural drag. They can outperform if access matters or if the underlying selection is genuinely better, but it is not automatic.'],
        ['Direct funds have higher minimum commitments than FoFs', 'Direct fund minimums are usually higher than FoF minimums, but FoFs aggregate to access top funds that have even larger direct minimums. The comparison is not apples-to-apples.'],
        ['FoFs eliminate the J-curve through diversification', 'FoFs may smooth the J-curve across vintages but cannot eliminate it. Underlying funds still pay fees and wait for exits.'],
      ],
      'Fund-of-funds buy access and diversification at the cost of a fee layer. The math works when an LP cannot otherwise get into top-decile funds or when assembling 15+ direct commitments is operationally infeasible. Most institutional LPs eventually move to direct relationships.'),
    q(4350034, 'Career Skills', 'Venture Model and Fund Math', 'Cross-fund conflict',
      'A GP has Fund III (deploying) and Fund II (in harvest). A portfolio company in Fund II is raising a new round and the GP wants Fund III to lead it. What is the conflict?',
      'The same GP setting the price across both funds creates a fiduciary conflict — Fund II benefits from a high markup, Fund III benefits from a low entry price',
      [
        ['No conflict exists if both funds have the same LPs', 'Even with overlapping LPs, individual LP economics differ across vintages. The conflict is structural to the GP\'s incentive across funds.'],
        ['The conflict is resolved automatically by LPA terms', 'Most LPAs require an LP advisory committee (LPAC) approval for cross-fund investments; "automatic" resolution is not the standard.'],
        ['Cross-fund investments are universally banned', 'They are not banned, just heavily governed. Most fund agreements specifically contemplate them with LPAC consent and arms-length pricing tests.'],
      ],
      'Cross-fund deals create real conflicts of interest. Standard handling: LPAC approval, arms-length pricing (often anchored to a new third-party lead), and explicit disclosure. The cleanest deals have a separate independent lead setting the price the GP\'s funds participate in.'),
    q(4350035, 'Career Skills', 'Venture Model and Fund Math', 'Crossover fund dynamic',
      'A "crossover fund" invests in both private growth-stage companies and public technology stocks. What does this strategy assume about the markets?',
      'That late-stage private and public tech are increasingly the same asset class — valuations and exit dynamics blur, so the fund can capture private markups and public re-ratings without choosing one venue',
      [
        ['Private markets are uncorrelated with public markets', 'Crossover strategies assume the opposite: that the markets converge. Uncorrelated markets would not justify a blended strategy.'],
        ['Private companies always outperform public', 'Outperformance is not the rationale. The rationale is that capturing both stages requires both venues; uncomplicated outperformance would just mean stay private.'],
        ['Public stocks are required by regulation in venture funds', 'No such regulation exists. Crossover is a strategic choice, not a compliance requirement.'],
      ],
      'Crossover funds (Tiger, Coatue\'s strategy) profited heavily in the 2020-21 cycle when private and public tech valuations moved together. The 2022 reset hurt them disproportionately because the same correlation worked in reverse. LPs view the strategy as more aggressive than traditional venture.'),
    q(4350036, 'Career Skills', 'Venture Model and Fund Math', 'AUM growth and strategy drift',
      'A GP\'s previous fund was $200M; the next fund is $1.2B. What pressure does the 6x size jump create on strategy and returns?',
      'The 6x larger fund needs proportionally larger exits to return capital, often pushing the GP into later-stage or higher-valuation entries — eroding the entry-pricing advantage that may have driven prior returns',
      [
        ['Larger funds always outperform smaller funds', 'The data shows the opposite: small funds in venture historically outperform large ones because power-law math favors concentrated bets at low entry valuations.'],
        ['No impact — strategy is decoupled from fund size', 'Strategy is tightly coupled to fund size. A $1.2B seed fund cannot exist meaningfully; the math forces the GP to write larger checks at later stages.'],
        ['The fund will return faster because more capital deploys', 'Speed of deployment does not improve returns. Faster deployment at later stages typically lengthens hold periods and lowers MOIC, not the reverse.'],
      ],
      'AUM growth is one of the strongest predictors of future underperformance in venture. The math: a $1.2B fund at 3x net needs $4.8B+ of gross exits at typical ownership — pushing the GP toward sectors and stages where their edge may be smaller. LPs scrutinize step-up funds carefully.'),
    q(4350037, 'Career Skills', 'Venture Model and Fund Math', 'SPV or sidecar',
      'A GP offers a "sidecar SPV" to LPs for an unusually large opportunity in one portfolio company. What is an SPV in this context?',
      'A single-purpose vehicle that pools capital from a subset of LPs for a single investment, outside the main fund — usually with different (often lower) economics',
      [
        ['A separate fund with the same LPs and same economics', 'SPVs are deal-specific, not fund-level. They are one-off vehicles for single investments, not parallel funds.'],
        ['A loan to the GP to make a larger check', 'SPVs raise external capital, not debt to the GP. The structure is equity from LPs into a single deal.'],
        ['A regulatory filing required for follow-on rounds', 'SPVs are a structural choice, not a filing requirement. They are formed when a GP wants to do a deal too large for the main fund.'],
      ],
      'SPVs let GPs participate in deals that exceed fund concentration limits without changing the main fund\'s mandate. Common at later stages or for breakout opportunities. Economics are typically lighter than main-fund 2-and-20 (often 0-1% mgmt fee and 10-15% carry) to compensate LPs for the deal-by-deal selection.'),
    q(4350038, 'Career Skills', 'Venture Model and Fund Math', 'Side-pocket and tail value',
      'A fund is at year 11 (past its planned 10-year life). Three portfolio companies remain unsold with material NAV. How does this affect LPs and GP economics?',
      'GPs typically request extensions in 1-2 year increments; until the tail companies exit, RVPI persists and the fund\'s final DPI remains uncertain',
      [
        ['LPs receive automatic cash distributions equal to NAV at year 10', 'NAV is not cash. Distributions happen only as exits occur; LPs cannot force NAV-to-cash conversion in venture funds.'],
        ['The fund is liquidated and remaining companies are sold at any price', 'Liquidation at any price would destroy value. Standard practice is to extend the fund life to harvest tail companies properly.'],
        ['Remaining NAV is transferred to the GP\'s next fund', 'Cross-fund transfers of NAV would create severe conflicts of interest. Tail companies stay in the original fund through extension or secondary sales.'],
      ],
      'Most venture fund lives extend past 10 years because exit windows do not match the schedule. Fund extensions (typically 1-2 years, sometimes capped at 3) are routine; long tails are a known LP frustration but accepted as the cost of holding through to good exits rather than fire-selling.'),
    q(4350039, 'Career Skills', 'Venture Model and Fund Math', 'Carry distribution lag',
      'A fund exits a position for $400M (well above the 1x preferred return threshold) on a Tuesday. When do GPs typically receive their carry?',
      'After the fund\'s capital account math is updated and any clawback reserves are set — usually weeks to months, not the same day',
      [
        ['Same-day, alongside LP distributions', 'GP carry distributions go through fund-level accounting, including clawback reserves. Same-day payouts are not the norm.'],
        ['Only at fund wind-down at year 10', 'In American (deal-by-deal) waterfalls, carry can distribute on individual exits. European waterfalls delay until the fund is whole, but that is not "wind-down."'],
        ['Carry distributes pro rata to current contributors', 'Carry follows the carry vesting and allocation among GP partners, not LP contributions. LPs and GPs are on separate distribution tracks.'],
      ],
      'Carry distribution timing depends on waterfall structure. Even in American waterfalls, clawback reserves (10-30% of carry held back against future underperformance) delay full GP payout. GPs do not typically see same-cycle carry; multi-fund GPs build cash flow management around the timing.'),
    q(4350040, 'Career Skills', 'Venture Model and Fund Math', 'Loss ratio impact',
      'A $200M seed fund with 25 investments has one company go to zero — its initial check was $4M. What does this single zero cost the fund?',
      'About 2% of fund return capacity — the $4M is permanently lost, but in a power-law portfolio, the fund\'s outcome still depends mainly on its top one or two exits',
      [
        ['25% of fund returns because 1 of 4 quartiles failed', 'Quartile thinking does not apply to power-law portfolios. The bottom 12 outcomes contribute almost nothing whether they are zeros or 0.5x.'],
        ['No impact because reserves cover the loss', 'Reserves are for follow-on, not loss recovery. A $4M zero is a $4M zero against the fund return.'],
        ['The fund is now non-viable below 3x', 'A single zero is fully expected. Power-law math assumes 30-50% of investments will go to zero; the fund returns from the top 1-2 outliers, not from the bottom half.'],
      ],
      'Loss ratio (percentage of fund value lost in zero outcomes) is high in seed (often 40-60% of companies) but the fund still works because the top outcomes are designed to overwhelm the losses. Funds break when the top outcome fails, not when the bottom outcomes do.'),
    q(4350041, 'Career Skills', 'Venture Model and Fund Math', 'Construction synthesis',
      'A new $150M seed fund GP says: "I want to lead, write $3M average initial checks, target 15% ownership, and defend through Series A." How many investments does the math support and how should the GP allocate reserves?',
      'About 20-25 investments with roughly 1:1.5 to 1:2 initial-to-reserve allocation — roughly $60-75M in initials, the rest as reserves to defend ownership through Series A pro rata',
      [
        ['50 investments at $3M each — no reserves needed', '50 × $3M is $150M, exhausting the fund on initials with nothing for follow-on. That breaks the ownership-defense strategy explicitly stated.'],
        ['10 investments at $3M each, hold $120M as reserves', '1:4 reserves are extreme — that implies 4 dollars of follow-on per dollar of initial. Most ownership defense through Series A needs 1.5-2x, not 4x.'],
        ['100 investments at $1.5M each, no reserves', '$1.5M does not buy 15% ownership in most seed rounds, and 100 investments is far beyond a single GP\'s diligence capacity. The strategy explicitly says "lead."'],
      ],
      'Portfolio construction ties together check size, ownership target, reserves, and fund size — they have to mathematically reconcile. Inconsistencies here are the most common reason small-fund GPs miss their stated strategy in practice. The math has to close before the first investment.'),

    // Chapter 2: Sourcing and Market Mapping
    // Difficulty arc: thesis "why now" → competitive map → market sizing (qualitative TAM cleanup → quantitative bottom-up) → wedge expansion → regulated-market path.
    q(4280010, 'Career Skills', 'Sourcing and Market Mapping', 'Why now',
      'A founder pitches an AI-driven workflow tool and claims "the timing is finally right." What is the single best follow-up an investor should press for?',
      'A specific recent change (regulation, technology cost curve, buyer behavior) that makes this product viable in the next 18 months when it was not before',
      [
        ['Whether the founder personally likes AI as a category', 'Founder enthusiasm is not a timing claim. "Why now" needs an external change, not a feeling.'],
        ['The total number of AI startups founded last year', 'Crowded entry is a market signal but not a timing thesis. Why-now asks what enables this specific product to work now.'],
        ['Whether competitors have raised more money', 'Competitor funding speaks to market interest, not to why the underlying conditions justify launch today.'],
      ],
      'A real "why now" cites a discrete enabler — a regulatory shift, a unit-cost drop, a buyer behavior change — that opens a window for the product. Without one, the pitch is a category trend, not a thesis.'),
    q(4280011, 'Career Skills', 'Sourcing and Market Mapping', 'Category map gaps',
      'An associate is building a market map of vertical AI for accounting. Five well-funded incumbents already exist. What is the most useful map output for the partnership?',
      'A positioning map that names the unaddressed buyer segment, workflow, or price point the new entrant can credibly win',
      [
        ['A list of every accounting software company in alphabetical order', 'Alphabetical lists do not test the entrant\'s wedge. The partnership needs the gap, not the directory.'],
        ['Logos of the largest five vendors with no commentary', 'Logos are decoration. The partnership needs to know where the new entrant can win, not who else exists.'],
        ['A note that the market is "too crowded to invest"', 'Crowded markets often hide overlooked segments. The map\'s job is to find them, not to default to a pass.'],
      ],
      'A market map is an analytic tool, not a slide. It should answer "where is the unaddressed pocket?" — if the new entrant cannot point to one, the thesis is weak.'),
    q(4103001, 'Career Skills', 'Sourcing and Market Mapping', 'TAM cleanup',
      'A startup claims a $500 billion TAM because "everyone uses email," but it sells a $12 per-seat workflow add-on for legal teams. What is the best investor response?',
      'Narrow the market model to the reachable buyer, use case, pricing, and adoption path',
      [
        ['Accept the largest number because email is common', 'Comparing addressable software spend to all email users conflates a universe with a buyable market.'],
        ['Use global GDP as the market because software affects business', 'GDP is not a customer pool. Bottom-up TAM ties price x reachable buyers, not macroeconomic aggregates.'],
        ['Treat market size as secondary because the product is narrow today', 'Market size matters for fund-returner math — the issue is methodology, not whether to estimate at all.'],
      ],
      'Market sizing should connect the actual product, buyer, price, and route to adoption. A huge adjacent market is not the same as a reachable opportunity.'),
    q(4105056, 'Career Skills', 'Sourcing and Market Mapping', 'Bottom-up TAM',
      'A vertical SaaS startup sells to 18,000 clinics, expects 25% reachable adoption, and charges $8,000 per clinic per year. What market sizing approach is most useful?',
      'Build a bottom-up reachable market from target accounts, adoption, and annual contract value',
      [
        ['Use the entire healthcare spending pool as TAM', 'Healthcare spend includes pharmaceuticals, hospitals, and insurance — none of which this product sells to.'],
        ['Multiply the founder confidence score by revenue', 'Confidence is not a market sizing input. It belongs in the founder assessment, not the TAM model.'],
        ['Model all clinics as reachable because the product solves a common pain', '100% adoption is not realistic for any new software category — the question even gives you a 25% benchmark.'],
      ],
      'Bottom-up market sizing connects buyers, penetration, and pricing. It is usually more useful than a giant top-down number that the product cannot realistically reach.'),
    q(4107301, 'Career Skills', 'Sourcing and Market Mapping', 'Wedge or cul-de-sac',
      'A startup starts with scheduling for dental offices and claims it will later run the whole clinic. What is the best market question?',
      'Whether the initial wedge creates a credible path into a much larger workflow and budget',
      [
        ['Whether dentists personally like software demos', 'Personal preference does not test whether the product expands into adjacent workflows or budgets.'],
        ['Whether the first feature can stay tiny forever', 'A narrow wedge is fine if it expands. Staying tiny forever is the opposite of what venture math needs.'],
        ['Whether every clinic has identical workflows', 'Workflows differ in every vertical — the question is whether the product can win the buyer despite that variation, not whether variation exists.'],
      ],
      'A narrow wedge can be powerful if it opens a larger market. The investor should test expansion logic, not just the elegance of the first feature.'),
    q(4107312, 'Career Skills', 'Sourcing and Market Mapping', 'Regulated market path',
      'A health fintech founder cites a huge market but has not mapped licensing or partner-bank requirements. What is the investor diligence priority?',
      'Understand the regulatory path, timeline, cost, and effect on go-to-market',
      [
        ['Use the biggest market number and move along', 'A regulated market is only addressable to companies that can legally operate in it — TAM without licensing is hypothetical.'],
        ['Underwrite a lighter regulatory path because the company is early-stage', 'Regulators apply rules uniformly across entrants. Startup status does not lower the licensing bar.'],
        ['Treat licensing as a post-launch problem the company can defer', 'In banking and health fintech, distribution often requires sponsor-bank or state licensure before a single dollar of revenue. Deferring blocks revenue, not just polish.'],
      ],
      'Market size is only useful if the company can legally and practically reach it. Regulated markets need path-to-market diligence — timeline, cost, and the specific authority that gates revenue.'),

    // Chapter 2 expansion (Wave 5): thesis development (falsifiability, 3-5 sentence framing),
    // market mapping (bottom-up vs top-down, segmentation depth), sourcing channels (network,
    // accelerator, scouts, cold outbound), events, inbound vs outbound mix, founder background
    // diligence and pattern-recognition pitfalls, why-now catalysts (regulation, cost curve,
    // buyer behavior), category creation vs disruption, competitive density, geographic and
    // sector focus, pipeline math. IDs 4350100–4350143.
    q(4350100, 'Career Skills', 'Sourcing and Market Mapping', 'Thesis structure',
      'A partner asks an associate to articulate the fund\'s "thesis" in three to five sentences. What should that statement contain?',
      'The category, why now, the type of company that wins, the unique founder profile, and what would falsify the thesis',
      [
        ['A list of every company in the category', 'A thesis is an analytical frame, not a directory. Listing every company is the output of the market map; the thesis tells you what to look for in the map.'],
        ['A guarantee that the fund will only invest in the category', 'Theses guide focus but rarely become exclusive mandates. A useful thesis is a strong default, not an absolute rule.'],
        ['The historical returns of the partner in this category', 'Track record is biographical context. The thesis is a forward-looking analytical statement about why the category will produce returns.'],
      ],
      'A useful 3-5 sentence thesis names what you\'re looking for, why now is the time, the type of winner you expect, the founder profile that fits, and the specific evidence that would prove you wrong. Without the falsifiability clause, it is marketing language.'),
    q(4350101, 'Career Skills', 'Sourcing and Market Mapping', 'Falsifiable thesis',
      'A fund\'s thesis says: "AI will transform every business." An LP asks how the GP would know if the thesis is wrong. What is the issue?',
      'The thesis is not falsifiable — no observation could disprove "AI will transform every business," so it cannot be tested against portfolio outcomes',
      [
        ['The thesis is fine; AI is obviously transformative', 'Whether it is "obvious" is irrelevant. A thesis that cannot be tested is not a thesis — it is a slogan that justifies any investment.'],
        ['The LP should not ask for falsifiability', 'Falsifiability is the LP\'s primary tool for evaluating GP discipline. Avoiding the question signals weakness in the underwriting process.'],
        ['Falsifiability is irrelevant in venture because outcomes vary widely', 'Outcome variance is exactly why falsifiability matters: without it, a GP can rationalize any result. Tested theses produce sharper portfolios.'],
      ],
      'A falsifiable thesis specifies the evidence that would change the GP\'s mind. "Vertical AI for accounting wins because incumbents cannot rebuild their stack within 24 months" is testable; "AI is transformative" is not. LPs reward sharpness.'),
    q(4350102, 'Career Skills', 'Sourcing and Market Mapping', 'Thesis vs trend',
      'An associate proposes "we should invest in climate tech because climate is a major societal issue." What is the gap between this statement and an investable thesis?',
      'The statement names a trend, not a thesis — an investable thesis identifies the specific business model, buyer, and timing window where venture-scale outcomes are achievable',
      [
        ['The statement is fine — sector identification is sufficient', 'Sector identification is step one, not the destination. A thesis must specify what kind of climate company wins, why now, and what the GP\'s edge is.'],
        ['The associate should add charts to support the trend', 'Charts decorate a trend; they do not turn it into a thesis. The missing piece is the business model and timing argument, not visuals.'],
        ['Major societal issues always produce venture returns', 'Many major societal issues have produced terrible venture returns (cleantech 1.0, education, certain healthcare verticals). Importance is not investability.'],
      ],
      'Trends are necessary but not sufficient. A thesis converts a trend into an investable hypothesis with a specific business model, buyer, and timing window. The discipline is "what kind of climate company wins, and why specifically now?"'),
    q(4350103, 'Career Skills', 'Sourcing and Market Mapping', 'Thesis evolution',
      'A fund\'s thesis on vertical SaaS was right in 2020 but is being challenged in 2024 as AI changes buyer behavior. What is the right partner-level response?',
      'Update the thesis to incorporate the new evidence — describe specifically how AI changes the wedge, the moat, and the timing for vertical SaaS',
      [
        ['Stick with the original thesis to maintain discipline', 'Discipline is not stubbornness. A thesis that ignores material new evidence is not disciplined — it is calcified.'],
        ['Abandon the thesis entirely and pivot to AI infrastructure', 'Wholesale pivots based on a single shift are overcorrections. The right move is to refine, not to discard a thesis with real evidence behind it.'],
        ['Wait for two more years of data before updating', 'Two years is roughly half the deployment period of a typical seed fund. Waiting to update means making investments under a stale thesis for half the fund.'],
      ],
      'Theses are living documents. The discipline is to update on real evidence (not noise) and to be explicit about what changed. Funds that never update are usually overconfident; funds that update constantly have no thesis at all.'),
    q(4350104, 'Career Skills', 'Sourcing and Market Mapping', 'Top-down vs bottom-up',
      'A founder says their TAM is $50B (top-down: global software spend × estimated category share). Another founder says their TAM is $480M (bottom-up: 6,000 target accounts × $80K ACV). Which framing is more useful for a seed investor?',
      'Bottom-up — it directly ties to buyers, price, and adoption assumptions, which an investor can test, while top-down numbers are hard to challenge or verify',
      [
        ['Top-down — bigger numbers indicate bigger opportunities', 'Bigger top-down numbers correlate with weak diligence, not bigger outcomes. The reachable market is what matters for the next 3-5 years.'],
        ['They are equivalent — TAM is TAM regardless of method', 'They are not equivalent. Top-down numbers usually overstate the reachable opportunity by 10-100x because they include buyers the product cannot serve.'],
        ['Neither — TAM does not matter in venture', 'TAM matters: it bounds the fund-returner case. The methodology is the question, not whether to use TAM at all.'],
      ],
      'Bottom-up market sizing forces specificity: who buys, at what price, how many of them, and what penetration is plausible. Top-down sizing is useful as a sanity check on the bottom-up; used alone, it almost always overstates the reachable market.'),
    q(4350105, 'Career Skills', 'Sourcing and Market Mapping', 'Bottom-up segmentation',
      'A startup sells workflow software to law firms. The associate is building a bottom-up market map. Which segmentation axis is most useful first?',
      'Firm size and practice area — these drive workflow complexity, willingness to pay, and buying process most strongly',
      [
        ['Geography — start by listing firms in every country', 'Geography matters at scale but rarely defines the first-order segmentation. Practice area and firm size predict buying behavior more directly.'],
        ['Alphabetical order of firm name', 'Alphabetical order has no analytical content. It produces a directory, not a segmentation.'],
        ['Year of firm founding', 'Founding date rarely predicts software adoption behavior. It is a curiosity, not a buying axis.'],
      ],
      'Useful segmentation isolates buyers with similar buying processes, budgets, and pain. For legal software, firm size (AmLaw 200 vs midsize vs solo) and practice area (litigation vs transactional) explain almost all of the variance. Always start with the axes that predict purchase behavior.'),
    q(4350106, 'Career Skills', 'Sourcing and Market Mapping', 'Segment depth',
      'A market map for B2B SaaS shows "SMB" as one segment of 5 million companies. An associate asks how deep to go. What is the right segmentation depth?',
      'Deep enough that each sub-segment has a distinct buying process, ACV range, and competitive set — usually 2-3 nested layers (e.g., industry → company size → buyer persona)',
      [
        ['One segment is enough — granularity slows the analysis', 'A single 5-million company segment is meaningless. Within "SMB" the buying process for a 5-person law firm vs a 500-person manufacturer differs enormously.'],
        ['Always break into the maximum possible segments', 'Maximum granularity is a different kind of useless — too many micro-segments hide patterns and overwhelm the analysis. The goal is meaningful structure, not exhaustive splitting.'],
        ['Use only the segmentation the company itself uses', 'The company\'s segmentation may be optimized for sales, not for investability. The investor needs their own analytical frame.'],
      ],
      'Segmentation depth is governed by the principle that each sub-segment must behave differently for the analysis to add value. If two segments have the same buying process and ACV, they are the same segment for analytical purposes; collapse them.'),
    q(4350107, 'Career Skills', 'Sourcing and Market Mapping', 'Adjacent markets',
      'A company sells fraud detection to fintechs and claims a path into adjacent markets (e-commerce, gaming, healthcare). How should the market map handle the adjacencies?',
      'Map the core market in depth and the adjacencies at higher level, then test the bridge: what evidence shows the product, distribution, or insight transfers?',
      [
        ['Map every adjacent market in full depth equally', 'Equal depth across core and adjacencies dilutes the analysis. The bet is on the core; adjacencies should be sized but not over-mapped.'],
        ['Size only the entry market because that is where revenue starts', 'For a venture-scale outcome, expansion math usually requires credible adjacencies. Ignoring them undersizes the opportunity.'],
        ['Treat adjacencies as guaranteed expansion', 'The path from fintech fraud to e-commerce fraud is plausible but not guaranteed. Different buyers, decision speeds, and integrations.'],
      ],
      'Adjacent markets are about expansion math: can the company\'s product, distribution, or domain insight transfer? The right map sizes adjacencies but stress-tests the bridge — without that, the TAM is a fantasy.'),
    q(4350108, 'Career Skills', 'Sourcing and Market Mapping', 'Map gap synthesis',
      'An associate finishes a market map for HR tech and reports "the category is crowded with 40 funded competitors." What is the more useful output for a partnership?',
      'A specific underserved segment, buyer, or workflow within the 40-competitor landscape that a new entrant could credibly own',
      [
        ['A recommendation to pass on the category', 'Crowded categories often have gaps; the analytical job is to find them, not to default to "pass."'],
        ['A list of the 40 competitors\' funding rounds', 'Funding history is interesting context but not the synthesis. The partnership needs the gap or pocket the entrant can win.'],
        ['A note that the market is saturated', '"Saturated" is a conclusion without analysis. Markets that look saturated often have segments incumbents systematically ignore (price points, geographies, personas).'],
      ],
      'Crowded markets often hide real gaps. The analytic job is to find them: an underserved persona, a workflow that incumbents won\'t touch, a price point no one defends. Without that synthesis, the market map is a directory rather than a thesis tool.'),
    q(4350109, 'Career Skills', 'Sourcing and Market Mapping', 'Founder network sourcing',
      'A new associate is told "your founder network is your single most important sourcing asset." What does that mean in practice?',
      'Founders refer other founders — the strongest seed deals usually arrive through trusted operator and founder relationships, not from cold pitches',
      [
        ['Investors should hire founders to do sourcing', 'The point is the investor builds direct relationships with founders, not that they outsource sourcing.'],
        ['Founders provide deal flow only at the partner level', 'Associate-level founder relationships compound over years. Many partners today were associates whose founder relationships matured with them.'],
        ['Founder networks are useful only for executive recruiting', 'Recruiting is one use, but the bigger one is referral pipeline. The best seed deals are warm intros from founders who have already chosen you.'],
      ],
      'Founder networks are the highest-yielding sourcing channel in early-stage venture. They take years to build, do not scale linearly with effort, and are zero-sum with other investors. The compounding starts the first time a founder you backed introduces another founder.'),
    q(4350110, 'Career Skills', 'Sourcing and Market Mapping', 'Accelerator pipeline',
      'An associate is reviewing a Y Combinator demo day batch of 200 companies. How should the signal from "YC-backed" be weighted in early sourcing?',
      'YC selection is one positive signal among many — useful to prioritize first meetings, but not a substitute for the fund\'s own diligence on founders, market, and traction',
      [
        ['YC selection guarantees the company will succeed', 'YC has produced major outliers but also many failures. Selection is a filter, not a guarantee.'],
        ['YC companies should be skipped because they are overpriced', 'Some YC rounds are aggressively priced, but blanket avoidance leaves significant outcomes on the table. The right move is selective diligence, not avoidance.'],
        ['Only YC companies are worth meeting at seed', 'YC is one pipeline among many. Funds that source exclusively from accelerators miss most of the seed universe.'],
      ],
      'Accelerator selection is a useful prior — it speeds first-meeting filtering — but it does not replace independent diligence. The fund\'s edge comes from picking better than the accelerator\'s average, not just from access to the batch.'),
    q(4350111, 'Career Skills', 'Sourcing and Market Mapping', 'Scout program mechanics',
      'A fund offers selected operators "scout checks" of $50K-$100K to invest on the fund\'s behalf. What is the strategic purpose?',
      'Extend the fund\'s sourcing reach through operators who see early deals the partners cannot, in exchange for some carry participation if the deal succeeds',
      [
        ['Scouts replace the need for partner-led sourcing', 'Scouts augment, not replace. Partner conviction is still needed for follow-on rounds; scouts source initial signal.'],
        ['Scout programs eliminate diligence requirements', 'Diligence still happens before the scout check goes out, just at a lighter touch. The scout\'s reputation and relationship are the qualifying signal.'],
        ['Scouts are paid hourly for their sourcing time', 'Scout programs are equity-based (carry on successful deals), not fee-based. The economic alignment is the whole point.'],
      ],
      'Scout programs (popularized by Sequoia) extend sourcing into networks the partners cannot reach personally. Scouts are usually operators or founders, get small checks to invest with light fund oversight, and share carry on successful outcomes. The trade is access for economics.'),
    q(4350112, 'Career Skills', 'Sourcing and Market Mapping', 'Cold outbound',
      'A new fund is asked whether cold outbound sourcing (LinkedIn messages, conference scrapes, alumni lists) can build a pipeline. What is the honest assessment?',
      'It can find specific founders matching a sharp thesis, but the conversion rate is far below warm channels and it requires consistent volume to produce 1-2 investments per year',
      [
        ['Cold outbound matches warm intros for conversion', 'Cold outbound usually converts at 1-5% of warm intros for first meetings, and far less for investments. The ratios are not close.'],
        ['Cold outbound never works in venture', 'It works for sharply targeted theses (specific verticals, specific founder profiles) but requires real volume and is less effective than warm channels.'],
        ['Cold outbound is more efficient than warm because it scales', 'It scales in volume but not in conversion. Warm channels have higher conversion and lower per-deal cost in time.'],
      ],
      'Cold outbound is real but supplementary. Funds with sharp theses (specific category + founder profile) can find founders no one else has met yet; funds without that sharpness usually find the same names as everyone else, more slowly.'),
    q(4350113, 'Career Skills', 'Sourcing and Market Mapping', 'Warm intro quality',
      'Two warm intros land on the same day: one from a respected founder who has known the entrepreneur for 8 years, another from an investor who met the entrepreneur once at a conference. How should the associate prioritize?',
      'The 8-year founder intro carries far more signal — depth of relationship correlates strongly with diligence quality of the referral',
      [
        ['Both intros are equivalent because both are warm', 'Warm intros vary enormously by depth. Treating them as equivalent strips out the actual signal.'],
        ['The investor intro is stronger because it is from a fellow VC', 'A one-meeting intro from another investor often means "I am passing — you take a look." It is not necessarily a strong signal.'],
        ['Cold intros from founders outrank warm investor intros', 'Cold founder intros do not exist by definition — if a founder is referring, the intro is warm. But the depth still matters more than the channel.'],
      ],
      'Intro quality is a function of relationship depth and the introducer\'s diligence. Deep founder intros are the highest-yielding pipeline; surface-level intros (1-meeting investor referrals) often signal a polite pass. Track conversion by intro source over time.'),
    q(4350114, 'Career Skills', 'Sourcing and Market Mapping', 'Conference ROI',
      'An associate is asked which industry conferences are worth attending for sourcing. What is the right framework?',
      'Conferences where founders the fund wants to back actually attend, weighted by the meeting density possible (1-on-1 conversations) vs presentation density (passive listening)',
      [
        ['Attend every conference to maximize exposure', 'Maximum exposure has minimum yield. Conference time has high opportunity cost; selectivity is the discipline.'],
        ['Only attend conferences where the fund partners are speaking', 'Partner speaking is one signal, but the question is whether founders the fund wants to back are also there. Speaking without attendance overlap wastes the slot.'],
        ['Treat conferences as low-yield because many are presentation-heavy', 'Some conferences (founder-only events, vertical-specific gatherings) have real density. Blanket avoidance closes a real sourcing channel.'],
      ],
      'Conference ROI = density of target founders × quality of conversations possible. A founder-only retreat with 200 attendees often outperforms a 20,000-person trade show. Track which events actually produced meetings and investments; cut the rest from next year.'),
    q(4350115, 'Career Skills', 'Sourcing and Market Mapping', 'Event coverage strategy',
      'A fund is sending two people to a major industry conference. What is the higher-yield strategy?',
      'Pre-arrange 8-12 founder meetings before the event and use the conference as the meeting venue; walking the floor for cold encounters is the lower-yield activity',
      [
        ['Rely on walk-up meetings because the whole industry is already there', 'Natural encounters at conferences are mostly low-signal. The high-yield meetings are the ones planned in advance with target founders.'],
        ['Attend every keynote to absorb category knowledge', 'Keynotes can be useful but mostly recycle published material. The unique value of being on-site is the in-person meetings, not the presentations.'],
        ['Stay at the hotel bar and wait for serendipity', 'Hotel-bar serendipity is real but unscalable. The structured meeting schedule generates 10x more sourcing yield.'],
      ],
      'The best conference operators pre-book meetings and use the conference as a meeting venue. The serendipity is a bonus on top of the structured schedule; relying on serendipity alone produces a low-yield trip.'),
    q(4350116, 'Career Skills', 'Sourcing and Market Mapping', 'Inbound vs outbound mix',
      'A seed fund reports its pipeline is 90% inbound (founders reaching out) and 10% outbound (the fund initiating). What does that ratio signal?',
      'A high inbound mix suggests strong brand and network — but if the fund has a sharp thesis, low outbound also means the fund is reacting to what comes rather than proactively building the portfolio it wants',
      [
        ['90% inbound is always healthy because it scales', 'Inbound is efficient but reactive. A fund that only takes inbound ends up with the deals everyone else is also seeing.'],
        ['90% inbound means the fund has too much deal flow', 'Volume is rarely the problem; quality and proactivity are. The ratio is about strategic posture, not raw count.'],
        ['Outbound is always more valuable than inbound regardless of ratio', 'Outbound is harder per deal but not universally better. A balanced fund usually mixes inbound brand-driven flow with proactive thesis-driven outbound.'],
      ],
      'High inbound means strong brand; high outbound means proactive thesis execution. The right mix depends on the fund\'s stage of life — newer funds typically need more outbound; established brands can run heavier inbound. 70/30 inbound to outbound is a common target.'),
    q(4350117, 'Career Skills', 'Sourcing and Market Mapping', 'Inbound quality drift',
      'A seed fund\'s inbound volume tripled year-over-year, but conversion to investment dropped by half. What is the most likely explanation?',
      'Brand reach grew faster than thesis sharpness — the fund is now seeing many low-fit companies because its visibility is wide but its filter is undefined',
      [
        ['The fund is becoming more selective which is good', 'Selectivity is good; dropping conversion is not. The diagnostic is whether the marginal company is genuinely low-fit, not whether the standards rose.'],
        ['Volume growth is always positive', 'Volume without conversion is a workload tax. More meetings of low-fit founders does not improve fund outcomes.'],
        ['The market got worse so more founders are pitching', 'Possible but rare. Inbound surges with poor conversion almost always trace to the fund\'s own positioning, not to market-wide shifts.'],
      ],
      'Inbound volume scales with visibility (podcasts, content, conference presence); conversion scales with thesis sharpness. A widening gap means the fund is becoming a "default first call" without being a "default last money," which is a soft sourcing problem to fix.'),
    q(4350118, 'Career Skills', 'Sourcing and Market Mapping', 'Founder background diligence',
      'A founder pitching a healthcare AI company has a 12-year career at a major hospital system. What is the right way to use that background in initial diligence?',
      'Treat it as evidence of likely founder-market fit (relevant networks, domain insight) but probe for the operator vs builder distinction — long employees do not always become strong founders',
      [
        ['12 years of domain experience guarantees founder strength', 'Domain experience is a positive signal but not a guarantee. Many domain experts struggle with the entrepreneurial shift from operator to builder.'],
        ['Long tenure at one company is always a negative signal', 'It can be — risk-aversion concerns are real — but the right move is to probe, not to dismiss. Some long-tenured operators become exceptional founders.'],
        ['Treat founder background as less important than the demo', 'Background and product are both inputs. Ignoring background means missing founder-market fit signals that often decide outcomes.'],
      ],
      'Founder background is a probability shaper, not a verdict. The right diligence asks what they did inside the role (built new things vs maintained existing ones?), how they think about risk, and whether their network actually transfers into a sales motion.'),
    q(4350119, 'Career Skills', 'Sourcing and Market Mapping', 'Pattern recognition pitfalls',
      'A partner says of a deal: "This looks just like Stripe in 2010." What is the risk of relying on that pattern recognition?',
      'Surface-level pattern matching often misses the specific conditions that made the original case work — the new deal may resemble Stripe without sharing the actual reasons Stripe succeeded',
      [
        ['Pattern recognition is reliable when the partner is experienced', 'Experienced pattern matchers can still misfire when the pattern is surface (founder profile, sector) rather than mechanism (specific moat, specific timing).'],
        ['Pattern recognition should not be used in venture', 'It is unavoidable and often useful. The risk is using it without examining whether the underlying mechanisms actually transfer.'],
        ['Only pattern matches to public companies are dangerous', 'Pattern matches to any prior outcome carry the same risk: confusing resemblance with mechanism. The asset class of the original doesn\'t change that.'],
      ],
      'Pattern recognition is a heuristic, not a thesis. The discipline is to name the specific mechanism (network effects in payments, distribution lock-in, etc.) that drove the original and test whether the new case actually shares it. Without that test, the analogy is decorative.'),
    q(4350120, 'Career Skills', 'Sourcing and Market Mapping', 'Repeat founder premium',
      'A founder is pitching their fourth company after one $400M exit, one acqui-hire, and one shutdown. How should this track record affect the investment decision?',
      'It is a meaningful positive signal — experienced founders typically execute faster and de-risk early — but the new company still needs to clear the thesis, market, and traction tests on its own merits',
      [
        ['Repeat founders always succeed because they have learned the lessons', 'Many repeat founders\' second and third companies underperform. Experience is helpful, not deterministic.'],
        ['Pay any premium asked because of the track record', 'Premium pricing without thesis fit is how funds destroy value. Track record reduces some risks, not all of them.'],
        ['Treat the track record as irrelevant', 'Track record is one of the strongest single signals available in seed. Ignoring it would dismiss real information.'],
      ],
      'Repeat founders tend to outperform first-timers on average, especially on execution speed and team building. But the same disciplines apply: market, thesis, terms. The premium is in conviction speed, not in skipping diligence.'),
    q(4350121, 'Career Skills', 'Sourcing and Market Mapping', 'Why-now catalyst',
      'A "why now" thesis identifies a specific catalyst that makes the company\'s opportunity available in the next 18-36 months. What types of catalyst tend to be most credible?',
      'A discrete change — regulatory shift, cost-curve crossover, buyer-behavior break — that did not exist 2-3 years ago and that the company can act on before incumbents adapt',
      [
        ['"AI is here" or other broad category narratives', 'Category narratives are not catalysts. They explain why a sector matters; they do not explain why this specific company is timed to win.'],
        ['Founder availability — the founder is finally free to build', 'Founder availability is a personal timing factor but not a market why-now. The market enabler is the question.'],
        ['Customer interest — buyers say they would consider the product', 'Buyer interest is necessary but not a catalyst. Real why-nows explain why interest converts into purchase now and not 5 years ago.'],
      ],
      'Strong why-nows name a specific external change that just happened. Regulatory shift (e.g. open banking), cost curve (e.g. inference-cost crossover for a use case), buyer behavior (e.g. CFO finally takes ownership of a category). Without one, the pitch is a trend, not a thesis.'),
    q(4350122, 'Career Skills', 'Sourcing and Market Mapping', 'Regulatory catalyst',
      'A founder pitches an instant-payments fintech and cites the recent FedNow launch as the catalyst. What does the investor need to verify to take the catalyst seriously?',
      'That FedNow adoption actually unlocks a specific buyer behavior (e.g., new use cases banks must support) and that the company\'s product captures that demand before banks build it internally',
      [
        ['That FedNow exists — that\'s sufficient', 'Existence of a regulation is not a catalyst. The catalyst is whether it changes buyer behavior in a way the company can monetize.'],
        ['That the founder personally knows the people at the Fed', 'Personal relationships are not a why-now thesis. They may help with sales but do not make the timing case.'],
        ['That competitors have not yet noticed FedNow', 'Competitor unawareness is unrealistic for a public regulation; the catalyst has to work despite competitor awareness.'],
      ],
      'Regulatory catalysts are real but need the second-order test: does the regulation actually change buyer behavior or budget in a way that creates a new purchase, and can the startup ship before banks build it internally? A catalyst without that path is decoration.'),
    q(4350123, 'Career Skills', 'Sourcing and Market Mapping', 'Cost-curve catalyst',
      'A founder argues "the cost of running large language models has dropped 90% in 18 months — now this use case is finally economic." What is the right follow-up?',
      'Confirm the unit economics work at current API costs (not projected future costs) and that the use case has not become commoditized by everyone else acting on the same cost curve',
      [
        ['Accept the cost-curve narrative at face value', 'Cost-curve narratives need specificity. The right question is whether the math works today, not whether costs might drop further.'],
        ['Wait for costs to drop another 90% before investing', 'Waiting for further drops is the opposite trade — by then the use case is commoditized and entry is too crowded.'],
        ['Underwrite future cost declines as the main margin driver', 'Future cheapness is not a thesis. Today\'s economics determine whether the business actually works in the next 24 months.'],
      ],
      'Cost-curve catalysts (inference, storage, sensors, transmission) are real but symmetric — every founder sees them. The diligence test is unit economics at today\'s cost (not projected), competitive density at the crossover point, and the company\'s defensible position once cost stops being the advantage.'),
    q(4350124, 'Career Skills', 'Sourcing and Market Mapping', 'Buyer-behavior catalyst',
      'A founder claims the timing is right because "CFOs now own this budget." What evidence would make this catalyst credible vs hand-wavy?',
      'Specific named buyers who confirm budget ownership has moved in the last 12-24 months, and a sales motion that maps to the CFO buyer rather than the prior IT buyer',
      [
        ['A McKinsey report saying CFOs are taking ownership', 'Consulting reports describe trends; they don\'t prove specific named buyers have moved. The catalyst needs primary evidence.'],
        ['The founder\'s confidence about the change', 'Founder conviction is necessary but not evidence. The investor needs the budget-ownership shift confirmed by actual buyers.'],
        ['Industry-wide adoption of the new buyer pattern', 'Industry-wide adoption means the wave has crested; the company is late, not early. The catalyst is most valuable when the shift is fresh.'],
      ],
      'Buyer-behavior catalysts are subtle and easy to overstate. The credible version names specific buyers (10+) who confirm the shift in interviews, plus a sales motion designed for the new buyer. Without that primary evidence, the catalyst is narrative dressing.'),
    q(4350125, 'Career Skills', 'Sourcing and Market Mapping', 'Category creation vs disruption',
      'A founder claims they are "creating a new category." What is the difference from "disrupting an existing category"?',
      'Category creation invents a buyer need and budget where none existed; disruption rearranges spend within a category that already exists — creation is higher reward and higher education cost',
      [
        ['Category creation and disruption are the same — both displace incumbents', 'They are different in execution. Creation must teach buyers the category exists; disruption can compete on price/feature within established buying processes.'],
        ['Creation is always better than disruption', 'Creation has higher upside but also a much harder education sales motion. Many "category creation" pitches fail because the budget never materializes.'],
        ['Disruption is faster than creation', 'Disruption is often faster because the budget exists, but creation can move quickly if the buyer pain is acute enough to displace adjacent budgets.'],
      ],
      'Category creation (e.g., Salesforce inventing on-demand CRM) requires teaching buyers the category exists, which adds 12-24 months to enterprise sales. Disruption (e.g., Notion replacing Confluence) competes for an existing budget. Investors should know which game the company is playing.'),
    q(4350126, 'Career Skills', 'Sourcing and Market Mapping', 'Category creation risk',
      'A startup pitches a genuinely new category (e.g., "AI agent operations management"). What is the dominant risk for the first 24 months?',
      'Buyers do not yet have budget for the category, so sales cycles are long and conversion is unpredictable — the company may need to subsidize education through pilots and partnerships',
      [
        ['Competition will arrive before the company can scale', 'Competition is a real risk but not the dominant one in year 1-2. The first task is establishing that the category exists at all.'],
        ['Engineering complexity will block product delivery', 'Engineering is a risk but usually manageable for capable teams. Demand creation is the structurally harder problem.'],
        ['Pricing will be too low to support a business', 'Pricing can be set high in new categories where the buyer has no anchor. Pricing is less the issue than budget existence.'],
      ],
      'New categories require buyer education, which is slow and expensive. Most category-creation failures are not technical — they are sales-cycle failures where the company runs out of cash before the buyer\'s budget category materializes. Investors underwriting these need long-runway theses.'),
    q(4350127, 'Career Skills', 'Sourcing and Market Mapping', 'Category disruption frame',
      'A startup pitches a Salesforce alternative for SMBs. The category exists, incumbents are entrenched. What is the right disruption thesis frame?',
      'Identify the specific buyer segment, workflow, or price point where the incumbent\'s economics or product structure prevents them from competing — and explain why the entrant\'s model wins there',
      [
        ['Build a better feature set across the board', 'Better-feature plays rarely beat entrenched incumbents because incumbents catch up. The disruption needs structural reasons (cost, distribution, model).'],
        ['Lower the price to undercut Salesforce', 'Pure price plays usually fail because the incumbent can match price; meanwhile distribution and switching costs protect them.'],
        ['Hope buyers eventually want change', 'Hope is not a thesis. Disruption needs a specific structural reason the incumbent cannot or will not compete in the new segment.'],
      ],
      'Category disruption works when the incumbent has a structural reason not to compete — high-touch sales doesn\'t reach SMBs, legacy code can\'t support real-time, channel conflict, etc. Without that structural protection, the new entrant has to outspend the incumbent at every step.'),
    q(4350128, 'Career Skills', 'Sourcing and Market Mapping', 'Competitive density definition',
      'A market map shows 60 funded competitors in vertical SaaS for restaurants. What does "competitive density" measure and what does this number suggest?',
      'The number of credible competitors per addressable customer segment — at 60 funded competitors, the market is densely contested and new entrants need a sharp segment or wedge advantage',
      [
        ['The total revenue across all competitors', 'Revenue across competitors is one input but not the density metric itself. Density is closer to "competitors per addressable buyer."'],
        ['The market share of the largest competitor', 'Concentration is a different measure. Density is about how many real options a buyer has, not which one is biggest.'],
        ['Density is irrelevant — every market is fine', 'Density predicts conversion difficulty and pricing pressure. Ignoring it leads to overpaying for crowded markets.'],
      ],
      'Competitive density (funded competitors per addressable buyer segment) predicts how hard sales cycles will be and how much capital is needed to win. Restaurant vertical SaaS at 60 competitors is a high-density category; entrants need a sharp wedge to matter.'),
    q(4350129, 'Career Skills', 'Sourcing and Market Mapping', 'Overcrowded market read',
      'A category has 40 funded competitors and $3B of total VC dollars invested. An associate is reviewing a new entrant. What is the right partnership-level question?',
      'What specific advantage (founder, distribution, technology, wedge) gives this entrant a credible path to a leadership position despite the crowded field?',
      [
        ['Whether the founders are nice to work with', 'Niceness is not a competitive advantage. The partnership needs a structural reason the entrant wins.'],
        ['Whether the deal can close before competitors notice', 'Speed-to-close is a tactic, not a thesis. Even if the deal closes, the underlying competitive density still determines outcomes.'],
        ['Whether the round size is small enough to be cheap', 'Cheap entry into a crowded market does not change the market dynamics. The math has to work on outcomes, not on entry price alone.'],
      ],
      'Overcrowded markets often have one or two winners that consolidate; everyone else underperforms. The investable question is what specific reason this entrant has to be in that top tier, not whether the category is "interesting." Without a clear answer, the deal is a coin flip.'),
    q(4350130, 'Career Skills', 'Sourcing and Market Mapping', 'Blue ocean caution',
      'A founder pitches a product with "no direct competitors." What is the right investor concern about that framing?',
      'No competitors often means no validated market — buyers may not yet recognize the problem as a budget category, which makes sales cycles long and conversion unpredictable',
      [
        ['No competitors is always the strongest possible signal', 'It can be a positive (real white space) or a negative (no market). The right move is to verify which.'],
        ['Competitors will arrive too quickly to matter', 'Competitor arrival is real but secondary. The first question is whether the market exists at all.'],
        ['No competitors makes pricing automatic at premium levels', 'Pricing in unproven markets is hard precisely because buyers have no anchor; "no competitors" makes pricing uncertain, not automatically premium.'],
      ],
      '"No competitors" should trigger the question: is this a real market that incumbents missed, or a non-market? Verify by talking to buyers — if they say "yes I would buy this," ask "would you write a budget line item." Budget reality, not interest, defines the market.'),
    q(4350131, 'Career Skills', 'Sourcing and Market Mapping', 'Competitive map axes',
      'A market map for AI coding tools has 25 competitors. The associate is choosing axes for a 2x2 positioning chart. Which axes are most useful?',
      'Axes that separate competitors on the strategic dimensions buyers actually care about — e.g., individual developer vs enterprise rollout × stand-alone tool vs IDE-integrated',
      [
        ['Founder seniority vs total capital raised', 'These are biographical and financial dimensions, not strategic. Buyers do not choose tools based on founder age.'],
        ['Office location vs team size', 'Geography and headcount have no analytical content for a competitive map. They reveal where competitors are, not how they compete.'],
        ['Year founded vs latest round size', 'Vintage and funding are context, not strategic positioning. The map should reveal how competitors differ on buyer-relevant dimensions.'],
      ],
      'Useful competitive map axes are dimensions on which buyers actually choose. The axes should produce visible clusters and visible gaps. If the axes don\'t cluster, they\'re the wrong axes; try different ones until the map reveals structure.'),
    q(4350132, 'Career Skills', 'Sourcing and Market Mapping', 'Differentiation test',
      'A founder lists 12 product features that are "different from competitors." How should the investor evaluate the differentiation?',
      'Ask which feature buyers can\'t get anywhere else and which one a buyer would switch incumbents for — a long feature list usually has only 1-2 real differentiators',
      [
        ['Treat all 12 features as differentiators', 'Feature lists overstate differentiation; most features have rough equivalents in competitors. Real differentiation is 1-3 items, not 12.'],
        ['Treat execution speed as enough differentiation in a crowded market', 'Execution matters, but without a real differentiator, execution alone rarely wins markets with many competitors.'],
        ['Trust the founder\'s assessment of differentiation', 'Founders almost always overestimate their differentiation. Investors need to test it against actual buyer alternatives.'],
      ],
      'Real differentiation passes the buyer switch test: would a current customer of incumbent X actually switch for this feature? If yes, it\'s a differentiator. If no, it\'s a competitive parity feature. Most feature lists shrink to 1-2 real items under this test.'),
    q(4350133, 'Career Skills', 'Sourcing and Market Mapping', 'Geographic focus',
      'A pre-seed fund has $50M to deploy. The GP says "we invest globally." What is the practical risk of geographic breadth at this fund size?',
      'A small fund cannot effectively diligence or support companies across many geographies — global pitches usually mean weaker sourcing networks and harder support in any one region',
      [
        ['Global focus always produces better returns through diversification', 'Geographic diversification at the fund level dilutes the GP\'s effective sourcing network. Most strong small funds are geographically focused.'],
        ['$50M is large enough to support global operations', 'It is not. Global sourcing and portfolio support take meaningful infrastructure that $50M cannot fund.'],
        ['Geographic focus does not matter in remote-first venture', 'Even in remote-first venture, sourcing networks are local. A founder in Singapore is rarely introduced through the same channels as a founder in Berlin.'],
      ],
      'Geographic focus is a sourcing-network reality. Small funds usually pick 1-2 hubs they can cover deeply (network, in-person meetings, portfolio support) rather than spreading thin. Stated global mandate at small fund size is a yellow flag for LPs.'),
    q(4350134, 'Career Skills', 'Sourcing and Market Mapping', 'Geographic strategy',
      'A new $40M seed fund is deciding between focusing on one city (deeply networked) or three cities (broader pipeline). What is the right tradeoff to consider?',
      'Network depth in one city often produces sharper sourcing and more support per company; three cities triples sourcing reach but stretches the GP\'s diligence and support capacity',
      [
        ['Three cities is always better because more deal flow', 'More deal flow without bandwidth to act on it is not better. The question is depth of action, not breadth of awareness.'],
        ['One city is always too narrow for a fund', 'Many top-decile small funds are city-focused. Single-city focus can produce excellent results at small fund size.'],
        ['Geography does not matter; only thesis does', 'Thesis and geography interact. A thesis that requires deep in-person founder relationships is geography-constrained even if it does not say so explicitly.'],
      ],
      'At $40M, focus usually wins. Deep network coverage in one city compounds (founder intros, portfolio gravitational pull) where broad coverage stretches the GP. As funds scale (and as remote founder relationships strengthen), the geographic constraint loosens.'),
    q(4350135, 'Career Skills', 'Sourcing and Market Mapping', 'Sector focus vs generalist',
      'A new $60M seed fund GP can position as a generalist or as a vertical specialist (e.g., healthcare AI only). What is the strategic tradeoff?',
      'Specialists build deep networks and pattern recognition in one vertical, often outperforming generalists in that vertical; generalists have larger overall opportunity sets but less edge in any single category',
      [
        ['Generalists always outperform because they can pick the best of any sector', 'Generalists usually compete against specialists in any category they enter; specialists tend to have the network and pattern-recognition edge in their vertical.'],
        ['Specialists are limited by vertical TAM', 'Vertical TAMs are usually huge in absolute terms; the constraint is sourcing edge, not market size.'],
        ['Strategy choice does not affect returns', 'Positioning strongly affects sourcing and conviction. Funds that don\'t commit either way often have neither edge.'],
      ],
      'Small funds usually pick one position. Specialists build vertical edge (networks, expertise, pattern recognition) and become the default first call in their category. Generalists need other forms of edge (brand, founder relationships, speed) to compete. Hybrid positions often confuse both founders and LPs.'),
    q(4350136, 'Career Skills', 'Sourcing and Market Mapping', 'Stage focus',
      'A new fund is debating pre-seed (sub-$2M rounds) vs traditional seed ($3-6M rounds). What is the strategic implication of this stage choice?',
      'Pre-seed requires higher conviction on team than data (often little revenue exists), accepts higher mortality, and works only if check size relative to fund size is small enough to support many bets',
      [
        ['Pre-seed and seed are interchangeable — same diligence applies', 'They are different stages with different evidence available. Pre-seed often has no product, no revenue; seed usually has both.'],
        ['Pre-seed is always more capital-efficient than seed', 'Pre-seed checks are smaller but mortality is higher, so portfolio-level efficiency depends on construction, not the stage label.'],
        ['Seed is always more attractive because of better data', 'Better data also means higher valuations and lower potential ownership for the same check. The stages have different return profiles, neither dominates.'],
      ],
      'Stage choice shapes everything: check size, ownership math, diligence depth, expected mortality, follow-on requirements. Pre-seed favors team conviction and small check / high count; seed favors evidence-based diligence and larger checks. Funds that "do both" without clear allocation often drift to seed.'),
    q(4350137, 'Career Skills', 'Sourcing and Market Mapping', 'Anti-portfolio',
      'A partner suggests building an "anti-portfolio" — a list of deals the fund passed on that became successes. What is the value of this exercise?',
      'It surfaces the specific reasons the fund missed real winners, helping the partnership update its filters where the pass-pattern reveals a blind spot',
      [
        ['It is a public-relations exercise to look humble', 'PR-only use of anti-portfolios wastes them. The internal value is much higher: detecting systematic mis-passes.'],
        ['Anti-portfolios should be ignored because past misses are unrecoverable', 'You cannot recover the missed deals, but you can update the filter that produced the miss. That is the whole point.'],
        ['Every miss represents a fund error', 'Some misses are correct (the fund\'s thesis didn\'t match the deal). The diagnostic work is to separate correct passes from systematic mistakes.'],
      ],
      'A useful anti-portfolio is analyzed, not just listed. The diagnostic question is "what about our filter caused this miss?" — and is the filter wrong for this category, or is the company an outlier our filter shouldn\'t have caught? Updates flow from the pattern, not the individual deal.'),
    q(4350138, 'Career Skills', 'Sourcing and Market Mapping', 'Pipeline math',
      'A seed fund wants to make 10 investments per year. Historical conversion: 100 founder meetings produce ~20 follow-up diligence, of which ~5 reach final review, of which ~1 becomes an investment. How many initial meetings does the fund need?',
      'About 1,000 initial founder meetings per year — roughly 20 per week to deliver 10 investments at the stated conversion rate',
      [
        ['100 — one investment per meeting is realistic', '1% close rate is far from realistic at seed. The math the prompt gives is closer to actual industry rates.'],
        ['10,000 — early-stage funds need massive volume', '10,000 founder meetings per year is impossible for any fund without industrial cold outreach. The math the prompt provides bounds it at ~1,000.'],
        ['Volume does not matter at the seed stage', 'Volume sets the upper bound on investments per year. A fund seeing 200 deals cannot make 10 investments unless its conversion is unrealistically high.'],
      ],
      'Sourcing is a volume + conversion business. Most seed funds need 1,000+ first meetings per year to make 10 investments. Failing to hit volume usually means missing the year\'s deployment target; failing to convert means the thesis or process needs sharpening.'),
    q(4350139, 'Career Skills', 'Sourcing and Market Mapping', 'First-meeting filter',
      'An associate has a 30-minute first meeting with a founder. What should the meeting prioritize?',
      'Test the founder\'s clarity on customer, problem, and why-now — leave product demo and deep diligence for later if the first signals hold',
      [
        ['Walk through the entire product demo', 'A demo eats most of the 30 minutes and tells you little about the founder\'s thinking. Save it for the second meeting.'],
        ['Negotiate term sheet considerations', 'Terms are inappropriate at first meeting; the fund hasn\'t even diligenced the deal. Premature term discussions signal poor process.'],
        ['Have the founder run through the slide deck', 'Decks are anchors, not conversations. The first meeting is for understanding how the founder thinks, not for reading slides together.'],
      ],
      'The first meeting is a triage filter. Test the founder\'s sharpness on customer/problem/why-now — these are the highest-information signals in 30 minutes. Product depth and metrics come in follow-up; the first meeting is about whether you want a follow-up at all.'),
    q(4350140, 'Career Skills', 'Sourcing and Market Mapping', 'Founder pre-meet reference',
      'Before a first meeting with a founder, an associate runs a quick reference check. How should that reference\'s signal be weighted?',
      'As one input — useful for prioritizing diligence depth but not as a substitute for the founder meeting itself, since pre-meet references are often shallow',
      [
        ['Treat a negative pre-meet reference as a final verdict', 'A single shallow reference is not enough to skip a meeting. References before meetings are usually surface-level.'],
        ['Trust the pre-meet reference more than the meeting', 'Direct founder conversation is the higher-information signal. Pre-meet references are useful color, not a verdict.'],
        ['Pre-meet references are always reliable', 'Reference reliability depends on the depth of the relationship and the questions asked. Quick pre-meet calls produce noisier signals than deep diligence references.'],
      ],
      'Pre-meet references are useful for setting expectations and prioritizing the meeting agenda. They are not deep references — those come later in diligence with structured questions. The signal-to-noise ratio improves with depth, not with quantity.'),
    q(4350141, 'Career Skills', 'Sourcing and Market Mapping', 'Hot deal triage',
      'A founder pitches and says: "We are closing the round in 5 days." The fund is interested but typically takes 3-4 weeks of diligence. What is the right framework?',
      'Match diligence depth to the deal\'s availability — accelerate the highest-signal checks (customer calls, founder references, market reality) and skip the long-tail items; conviction should not be exempt from speed',
      [
        ['Let speed substitute for diligence because the round is competitive', 'Diligence-skipping for speed is how funds make their worst investments. Some core checks (customer reality, key references) are non-negotiable.'],
        ['Refuse to participate due to the timeline', 'Many great deals run fast. Blanket refusal of fast timelines means systematically passing on the best deals.'],
        ['Ask for an extension on the close date', 'Founders running a process won\'t extend for one fund\'s pace. The choice is to accelerate or pass; "extend" is not on the table.'],
      ],
      'Hot deals are real and rewardable, but they need triage discipline. Prioritize the highest-signal diligence items (3-5 customer calls, 2 deep references, founder market test) and accept that some long-tail items will be skipped. If those high-signal items don\'t clear, fast or slow doesn\'t matter — pass.'),
    q(4350142, 'Career Skills', 'Sourcing and Market Mapping', 'Sourcing under capital constraint',
      'A $30M emerging-manager fund must allocate sourcing effort across (a) deep relationships in one vertical, (b) broad outbound, and (c) building a public brand. What\'s the right allocation given fund size?',
      'Heavy on (a) — deep vertical relationships compound the fund\'s edge and require less capital to execute; (b) and (c) are supportive but scale poorly at $30M',
      [
        ['Equal third across all three channels', 'Equal allocation produces no edge in any channel. Small funds need a dominant channel where they actually win.'],
        ['Heavy on (c) brand — get visible first', 'Brand-first works for some emerging managers but requires sustained content production and rarely produces high-conversion deals at $30M. Vertical depth tends to compound faster.'],
        ['Heavy on (b) outbound — volume wins', 'Outbound at scale requires team capacity small funds don\'t have. Without warm channels, outbound conversion is too low to sustain pipeline.'],
      ],
      'Small funds win by being the default first call in a tightly-defined niche. That requires deep vertical relationships, sharp thesis, and visible expertise — usually in that order. Brand and outbound support the vertical strategy; they rarely replace it at sub-$50M fund size.'),
    q(4350143, 'Career Skills', 'Sourcing and Market Mapping', 'Map output for partnership',
      'An associate has finished a market map of healthcare data infrastructure (14 funded companies, $850M deployed in last 24 months). What is the most useful single page to bring to the partnership?',
      'A one-page synthesis: where the unserved segment is, which 1-2 companies in the fund\'s pipeline can credibly win it, what the thesis implies for ownership and check size',
      [
        ['A 30-slide deck with every competitor profiled', '30 slides is the input data, not the output. The partnership needs the synthesis, not the working files.'],
        ['A list of all 14 companies in alphabetical order', 'A directory is not a synthesis. The partnership needs the analytical conclusion, not a sorted list.'],
        ['A recommendation to pass on the category because it is funded', 'Funded categories often have gaps the existing competitors are missing. The map\'s job is to find the gap, not to default to a pass.'],
      ],
      'A market map\'s output is a synthesis: where the gap is, which companies can take it, what that implies for the fund\'s actions. Without that synthesis, the map is a tracker — useful as input but not decision-grade for the partnership.'),

    // Chapter 3: Startup Metrics and Diligence
    // Difficulty arc: clean math (CAC payback, runway) → metric interpretation (logos, retention, cohorts) → metric-quality traps (services disguise, sales cycle, expansion repeatability, Rule of 40).
    q(4103003, 'Career Skills', 'Startup Metrics and Diligence', 'CAC payback check',
      'A SaaS company spends $1,200 to acquire a customer that contributes $200 of gross profit per month. Ignoring churn, what is the CAC payback period?',
      '6 months',
      [
        ['2 months', '$1,200 / $200 per month is 6 months, not 2 — that answer would require $600/month of gross profit.'],
        ['12 months', '12 months would require $100/month of gross profit ($1,200 / 12), half the stated rate.'],
        ['24 months', '24 months implies just $50/month gross profit — a quarter of what the prompt states.'],
      ],
      'CAC payback equals acquisition cost divided by monthly gross profit. Here, 1,200 / 200 = 6 months. Best-in-class B2B SaaS is generally under 18 months; longer payback puts more pressure on retention and capital efficiency.'),
    q(4103004, 'Career Skills', 'Startup Metrics and Diligence', 'Logo quality',
      'A seed company shows 20 pilots, but only two users log in weekly and no buyer has budgeted for expansion. What diligence risk is most important?',
      'The pilots may be curiosity-driven rather than evidence of repeatable demand',
      [
        ['The company has too many customers to diligence', '20 pilots is well within manageable diligence scope — the issue is signal quality, not volume.'],
        ['Weekly usage is irrelevant for any software product', 'Usage frequency is one of the strongest indicators of stickiness. For workflow software, weak usage is a flashing warning light.'],
        ['Budget ownership matters only after an IPO', 'Budget ownership is the single best predictor that pilots convert to revenue — it matters from day one, not at IPO.'],
      ],
      'Early traction quality matters more than raw pilot count. VC diligence should test usage, buyer commitment, expansion potential, and repeatability.'),
    q(4105058, 'Career Skills', 'Startup Metrics and Diligence', 'Retention shape',
      'A usage-based software startup shows 115% net revenue retention but only 78% logo retention. What should the investor investigate?',
      'Whether expansion from retained customers is masking churn among smaller or weaker customers',
      [
        ['Treat positive net retention as proof churn is harmless', '115% NRR can coexist with severe logo churn if a few large accounts expand fast — the headline hides the underlying churn.'],
        ['Value the company only on number of website visits', 'Web traffic is a marketing metric, not a retention diagnostic. It does not address why logos are churning.'],
        ['Ask the founder to remove logo retention from the deck', 'Hiding the metric does not change the underlying business. Investors who notice it later will trust the founder less.'],
      ],
      'Net retention and logo retention answer different questions. Strong expansion can coexist with weak customer durability, so investors should inspect cohort behavior.'),
    q(4105059, 'Career Skills', 'Startup Metrics and Diligence', 'Cohort read',
      'A consumer app reports 1 million downloads, but day-30 retention is 6% and paid acquisition is the main growth engine. What is the key diligence issue?',
      'The company may have weak engagement and paid growth that does not compound',
      [
        ['Downloads alone prove product-market fit', 'Downloads measure top-of-funnel interest. PMF is shown by retained, engaged users who come back without re-acquisition spend.'],
        ['Low retention is always solved by raising price', 'Higher prices typically lower retention further, not improve it. Pricing is not a fix for an engagement problem.'],
        ['Paid acquisition means the app has no marketing costs', 'Paid acquisition is literally a marketing cost, often the biggest line item — the opposite of free.'],
      ],
      'Traction should show durable use, not just top-of-funnel activity. Retention, acquisition cost, and organic growth determine whether usage can compound.'),
    q(4107305, 'Career Skills', 'Startup Metrics and Diligence', 'Services disguise',
      'A startup reports 85% gross margin, but customer calls reveal most onboarding work is done by untracked founder labor. What is the concern?',
      'Reported margins may overstate scalable economics if required services are not captured',
      [
        ['Founder labor is free forever because cap tables are magical', 'Founder time has real opportunity cost. Once the founder cannot personally onboard every customer, the cost reappears as headcount.'],
        ['Onboarding never affects software economics', 'Heavy implementation services can turn a "software" business into a quasi-services business with very different margins and scalability.'],
        ['Gross margin should be ignored when customers are happy', 'Happy customers do not absolve unsustainable economics. Gross margin determines whether the company can scale profitably.'],
      ],
      'VC traction should separate scalable software margin from hidden services effort. Founder heroics can hide costs that appear later.'),
    q(4107313, 'Career Skills', 'Startup Metrics and Diligence', 'Sales cycle clue',
      'A company has strong demos but enterprise deals take nine months and require heavy legal review. What should the investor model carefully?',
      'Sales cycle length, cash burn, implementation effort, and pipeline conversion timing',
      [
        ['Only demo count because demos are basically revenue', 'Demos are leading-indicator interest; they only become revenue if they close, which here takes nine months.'],
        ['A one-month sales cycle by assumption to keep the model clean', 'The prompt gives you the real cycle. Substituting a tidier number does not make the model more accurate — it makes it wrong.'],
        ['Legal review as a free line item because it is "just paperwork"', 'Enterprise legal review consumes founder and executive time and real outside-counsel fees — both are material to a small company\'s runway.'],
      ],
      'Enterprise traction depends on conversion and timing, not just interest. Long sales cycles affect runway, quota capacity, and fundraising milestones.'),
    q(4107304, 'Career Skills', 'Startup Metrics and Diligence', 'Expansion math',
      'A company lands customers at $20,000 ARR and historically expands them to $60,000 by year two. What should the investor investigate?',
      'The repeatability, timing, gross margin, and churn risk behind the expansion motion',
      [
        ['Only the initial contract value because expansion is decorative', 'Expansion is often the bulk of LTV in B2B SaaS. Ignoring it underestimates customer lifetime value by 2–3x in this scenario.'],
        ['Whether the sales team can stop tracking renewals', 'Renewals are the foundation of expansion. Stopping tracking is how net retention silently collapses.'],
        ['Whether customers expand automatically with contract age', 'Expansion requires a reason — more seats, more usage, new modules. It does not happen on a calendar; it happens because the buyer needs more.'],
      ],
      'Expansion can make early unit economics work, but it needs evidence. Investors should inspect cohorts, usage, renewal health, and sales effort required.'),
    q(4280020, 'Career Skills', 'Startup Metrics and Diligence', 'Rule of 40 read',
      'A growth-stage SaaS company shows 60% year-over-year growth and a 25% operating margin loss. What does its "Rule of 40" read tell you?',
      'The combined growth + margin score is 35% — below the 40 benchmark, signaling growth is being bought at a rate not fully justified by efficiency',
      [
        ['It clears 40 easily because growth alone is 60%', 'Rule of 40 nets growth against margin (which is negative here). 60% growth minus 25% margin loss is 35%, not 60%.'],
        ['It is irrelevant because the company is not yet public', 'Public-market analysts use Rule of 40 because it disciplines private growth-vs-burn tradeoffs too. Private companies use it for the same reason.'],
        ['It guarantees efficient unit economics at this stage', 'Rule of 40 is a portfolio-level efficiency heuristic, not a unit-economics measure. CAC payback and gross margin still need separate inspection.'],
      ],
      'Rule of 40 combines growth and profitability into one number. Above 40 is healthy; below 40 means growth is being subsidized by burn at a rate that may not scale.'),
    // Expansion pass (Step 4b): ARR/MRR/CARR distinctions, retention reads, CAC variants and payback,
    // cohort curves, churn types, burn and runway, cap-efficiency, quality-of-revenue traps, pipeline
    // coverage and cycle, bookings vs revenue vs cash, dashboard hygiene, sales efficiency. IDs 4350200–4350241.
    q(4350200, 'Career Skills', 'Startup Metrics and Diligence', 'ARR vs MRR definition',
      'A founder pitches "$1.2M ARR" on a deck that shows last month at $100K of subscription revenue. What does ARR most directly mean here?',
      'Annualized run-rate revenue — the current monthly subscription revenue extrapolated to a year, in this case $100K × 12',
      [
        ['The total revenue collected over the trailing twelve months', 'That is trailing twelve-month revenue (TTM), not ARR. ARR is forward-looking from a current monthly snapshot.'],
        ['The cumulative bookings signed across the company\'s lifetime', 'Lifetime bookings include one-time fees and historical contracts, not the current recurring base. ARR specifically captures the live subscription run-rate.'],
        ['Total contract value across all customers regardless of term length', 'TCV pools multi-year contract dollars and rolls in non-recurring items. ARR is annualized recurring revenue at this moment, not contract value.'],
      ],
      'ARR is the current monthly recurring base multiplied by twelve. It is a snapshot, not an actual or trailing number — and it only works as a metric when the underlying MRR is genuinely recurring.'),
    q(4350201, 'Career Skills', 'Startup Metrics and Diligence', 'CARR vs ARR',
      'A founder reports $4M CARR and $2.5M ARR. What is the most accurate read of the gap?',
      'About $1.5M of contracts are signed but not yet live or billing — they will only count as ARR once they begin invoicing',
      [
        ['CARR and ARR are interchangeable; the gap is a rounding error', 'A 60% gap is not rounding. CARR (contracted) includes signed contracts not yet live; ARR (live) only counts what is invoicing now.'],
        ['CARR adds future expansion estimates to ARR', 'CARR includes signed contracts, not unsigned expansion. Forecasted upsell belongs in pipeline, not CARR.'],
        ['CARR is ARR minus churn risk', 'Churn-adjusted ARR is a different concept. CARR strictly includes signed-but-not-live revenue alongside live ARR.'],
      ],
      'CARR (contracted ARR) captures signed contracts whether or not they are live. The gap to ARR is implementation backlog: how long until those contracts actually convert to recognized recurring revenue.'),
    q(4350202, 'Career Skills', 'Startup Metrics and Diligence', 'ARR inflation traps',
      'A founder reports $3M ARR. Diligence reveals $400K of that figure is one-time setup fees rolled into the annualized run-rate. What should the investor conclude?',
      'True recurring ARR is closer to $2.6M — one-time fees do not recur and should not be annualized',
      [
        ['ARR is $3M because that is what customers paid this year', 'ARR measures the recurring base, not total billings. One-time fees inflate the number by including non-repeating revenue.'],
        ['ARR is $3.4M after grossing up for under-reporting', 'Nothing in the prompt suggests under-reporting. The diligence finding points the other direction — toward inflation, not understatement.'],
        ['One-time setup fees count as ARR if they are charged annually', 'A fee that does not recur next year cannot be annualized credibly. Charging cadence does not change whether revenue is recurring.'],
      ],
      'One-time fees, professional services, and implementation revenue routinely get folded into ARR. The investor\'s job is to strip them out and report only what will repeat next year without new selling effort.'),
    q(4350203, 'Career Skills', 'Startup Metrics and Diligence', 'Annualizing a single month',
      'A founder pitches $6M ARR from a single $500K month. The prior three months averaged $280K. Why is the headline misleading?',
      'A single anomalous month is not a run-rate — the trailing pattern suggests the durable base is closer to $3.4M ARR',
      [
        ['$6M ARR is correct because the latest month is the most recent data point', 'A spike does not establish a run-rate. The point of ARR is durability, which requires a stable monthly base, not a single high reading.'],
        ['The figure is fine because seasonality always reverses', 'Some businesses are seasonal; many spikes are one-off enterprise deals or pull-forwards that never reverse. "Seasonality" is not a default explanation.'],
        ['$6M ARR is correct because next year will exceed it', 'Future-year forecasts are not ARR. ARR is a current snapshot, and inflating it with optimism conflates run-rate with projection.'],
      ],
      'MRR × 12 only describes the business when monthly revenue is stable. A single high month, a pull-forward, or a lumpy enterprise close can inflate ARR by multiples. Always look at the trailing three to six months before believing a headline number.'),
    q(4350204, 'Career Skills', 'Startup Metrics and Diligence', 'Logo retention definition',
      'A B2B SaaS reports 92% logo retention. What does that figure measure?',
      'The percentage of customer accounts (logos) retained over the period, ignoring revenue size differences between accounts',
      [
        ['The percentage of revenue retained over the period', 'Revenue retention weights accounts by dollar value. Logo retention is a count of customers, regardless of contract size.'],
        ['The percentage of new logos added over the period', 'Logo additions are a growth metric, not retention. Retention measures the customers who stay, not the ones who join.'],
        ['The percentage of users who logged in this month', 'Active-user metrics measure engagement. Logo retention measures whether the customer relationship persists, independent of usage frequency.'],
      ],
      'Logo retention is an unweighted count: of the customers who could have churned this period, what percentage stayed? It is a different question from how much revenue stayed, which is why both metrics matter.'),
    q(4350205, 'Career Skills', 'Startup Metrics and Diligence', 'Gross vs net retention',
      'A SaaS company shows 88% gross revenue retention and 112% net revenue retention. What is the most accurate description of that combination?',
      'Customers churned about 12% of revenue, but expansion from retained customers added back 24% — netting to 112%',
      [
        ['Net retention is always higher than gross retention by definition', 'NRR can be below GRR if churn outweighs expansion. They diverge based on the actual expansion-vs-churn balance, not by definition.'],
        ['The gap means expansion replaces churn one-for-one', 'A 24-point gap is not one-for-one with 12 points of churn. Expansion exceeded churn here by a 2:1 ratio.'],
        ['NRR is GRR plus new-customer revenue', 'New-logo revenue is excluded from both GRR and NRR. Both are computed on the existing-customer base only.'],
      ],
      'GRR captures only downside (churn and contraction); NRR adds expansion on top. The gap reveals whether your existing book is growing or shrinking before any new sales effort.'),
    q(4350206, 'Career Skills', 'Startup Metrics and Diligence', 'NRR + GRR combined read',
      'A company shows 75% gross retention and 130% net retention. What is the most useful diagnostic read?',
      'Heavy churn (25%) is being masked by aggressive expansion in a small number of accounts — concentration risk is high',
      [
        ['The business is healthy because NRR exceeds 120%', 'A 75% GRR is severe churn regardless of NRR. Headline NRR can hide deep churn when a few large accounts expand fast.'],
        ['The numbers are inconsistent and one must be wrong', 'Both can be true simultaneously. GRR and NRR are computed from the same cohort but measure different directions of change.'],
        ['Expansion is uniform across the customer base', 'A 55-point gap between GRR and NRR almost guarantees expansion is concentrated in a few accounts, not uniform across all retained customers.'],
      ],
      'When NRR-GRR gap is wide, expansion is typically lumpy in a handful of accounts. That makes the business vulnerable: a single large customer leaving can turn 130% NRR into 95% overnight.'),
    q(4350207, 'Career Skills', 'Startup Metrics and Diligence', 'Logo vs revenue retention split',
      'A company shows 70% logo retention but 105% net revenue retention. What is the most likely underlying pattern?',
      'Small customers are churning at high rates while a few large customers are growing — the business depends increasingly on the surviving large accounts',
      [
        ['Large customers are churning faster than small ones', 'If large customers were churning, revenue retention would collapse much faster than logo retention. The opposite pattern is shown here.'],
        ['The retention metrics are unrelated to customer size', 'A 35-point gap between logo and revenue retention is almost always a size-skewed pattern. The metrics diverge precisely because customers are unequal in size.'],
        ['Revenue retention always tracks logo retention closely', 'They only track closely when customer sizes are uniform. In most B2B businesses, the two diverge sharply because revenue concentration grows with company maturity.'],
      ],
      'When logo retention is much weaker than revenue retention, you are looking at SMB churn masked by enterprise expansion. The diligence question becomes whether the enterprise concentration is durable and what happens when one large account leaves.'),
    q(4350208, 'Career Skills', 'Startup Metrics and Diligence', 'CAC definition',
      'A founder reports CAC of $1,500 using only paid-marketing spend divided by new customers. What is most accurate to call this number?',
      'Blended paid CAC — it omits sales headcount, tooling, and content costs, so it understates fully-loaded CAC',
      [
        ['Fully-loaded CAC because all costs are typically marketing-driven', 'Paid marketing is usually only a fraction of acquisition cost. Sales salaries, BDRs, content, and tooling routinely exceed it.'],
        ['The only valid way to compute CAC for SaaS companies', 'Fully-loaded CAC is the comparable benchmark. Paid-only is useful for channel analysis but understates true cost to acquire.'],
        ['CAC by definition excludes salaries', 'Sales and marketing salaries are the largest CAC line for most B2B SaaS companies. Excluding them defeats the purpose.'],
      ],
      'Fully-loaded CAC includes everything the company spends to win a customer: paid spend, sales salaries, BDRs, tooling, content, and a share of marketing overhead. Reported CAC that excludes salaries is almost always an understatement.'),
    q(4350209, 'Career Skills', 'Startup Metrics and Diligence', 'CAC payback at different gross margins',
      'A customer costs $6,000 to acquire and pays $1,000 per month at 60% gross margin. What is the CAC payback in months?',
      '10 months — $6,000 divided by ($1,000 × 60%) = $6,000 / $600',
      [
        ['6 months — payback at gross revenue', 'That uses gross revenue, not gross profit. Payback should always be computed against the contribution margin that pays back the acquisition cost.'],
        ['12 months — annualized round number', 'There is no calculation here that yields exactly 12. The math is $6,000 / $600 = 10 months.'],
        ['15 months — using net margin instead of gross margin', 'Net-margin payback is a different metric. Standard CAC payback uses gross margin (the contribution from the customer before fixed costs).'],
      ],
      'CAC payback divides acquisition cost by monthly gross profit, not by monthly revenue. Gross margin matters because the rest pays for COGS before any contribution to recovering CAC.'),
    q(4350210, 'Career Skills', 'Startup Metrics and Diligence', 'Magic number calculation',
      'A company added $4M of net-new ARR last quarter and spent $5M on sales and marketing the prior quarter. What is its Magic Number?',
      '0.8 — net-new ARR ($4M) divided by prior-quarter S&M ($5M) yields 0.8',
      [
        ['1.25 — S&M divided by ARR', 'That ratio is inverted. Magic Number puts new ARR on top because it measures ARR generated per dollar of go-to-market spend.'],
        ['4.0 — net-new ARR alone, ignoring S&M', 'Magic Number is a ratio, not a level. Dropping the denominator removes the entire efficiency measurement.'],
        ['0.5 — averaging the two values', 'Magic Number is a quotient, not an average. The calculation is net-new ARR / prior-quarter S&M.'],
      ],
      'Magic Number = net-new ARR in a quarter divided by S&M spent in the prior quarter, then annualized. It measures how much new recurring revenue each go-to-market dollar buys, with a quarter\'s lag for the sales cycle.'),
    q(4350211, 'Career Skills', 'Startup Metrics and Diligence', 'Magic number interpretation',
      'A B2B SaaS shows a Magic Number of 0.4 sustained over four quarters. What is the most useful interpretation?',
      'Sales efficiency is weak — every dollar of go-to-market spend is producing only 40 cents of new ARR, signaling the company should slow spend until conversion improves',
      [
        ['The company should double sales spend to compound growth', 'A 0.4 Magic Number means more spend produces less than proportional ARR. Doubling down on inefficient spend burns cash faster.'],
        ['Magic Number under 1.0 is always disqualifying', 'Magic Number under 0.5 is concerning, but 0.5–1.0 is a middle zone where context (stage, expansion mix, payback) matters before disqualifying.'],
        ['The metric is irrelevant for fast-growing companies', 'Fast-growing companies are precisely where Magic Number matters — it tells you whether growth is being bought efficiently or subsidized by burn.'],
      ],
      'Above 1.0 is generally lean-in territory; 0.5–1.0 is hold; under 0.5 sustained means efficiency is broken and more spend will compound losses, not growth.'),
    q(4350212, 'Career Skills', 'Startup Metrics and Diligence', 'CAC payback across stages',
      'A seed-stage SMB SaaS reports CAC payback of 22 months. A growth-stage peer reports 14 months. How should the investor interpret the seed number?',
      'Seed-stage payback over 18 months is concerning but not disqualifying — the question is whether early-cohort payback shortens as the company scales and learns its channels',
      [
        ['22 months is acceptable because seed companies have no benchmarks', 'Seed companies do have benchmarks. Best-in-class SMB SaaS targets under 12 months; 22 sits at the edge and demands a plan to compress it.'],
        ['22 months is fine because the growth-stage peer is at 14', 'A peer\'s mature payback does not justify the seed company\'s. The trajectory matters more than the absolute number at one snapshot.'],
        ['22 months is automatically disqualifying for venture', 'It is concerning, but venture funds back companies with payback in the high teens regularly. The question is the path to improvement, not the level alone.'],
      ],
      'Stage-appropriate benchmarks matter. Seed should be improving payback quarter-over-quarter as channels mature; growth should already be at 12–18 months. The trajectory tells you more than any single reading.'),
    q(4350213, 'Career Skills', 'Startup Metrics and Diligence', 'Day-1 vs Day-30 retention',
      'A consumer app shows 60% day-1 retention and 8% day-30 retention. What does the gap most directly indicate?',
      'Users try the app but most do not form a habit — engagement decays sharply after the first visit',
      [
        ['The product has strong long-term engagement', '8% at day 30 is weak for most consumer categories. Strong consumer apps show day-30 retention in the 20–40% range or higher.'],
        ['Day-30 retention is always lower than day-1 retention by exactly that amount', 'The decay curve varies enormously across products. Sticky consumer apps lose far less between day 1 and day 30.'],
        ['Day-1 retention is the only metric that matters for consumer', 'Day-1 captures install-day return. Day-30 reveals whether the product has earned a place in the user\'s routine — both matter.'],
      ],
      'The shape of the retention curve from day 1 to day 30 tells you whether the product is forming habits or merely attracting trial. A steep decay is a habit-formation problem, not a marketing problem.'),
    q(4350214, 'Career Skills', 'Startup Metrics and Diligence', 'Day-30 retention curve shape',
      'A consumer app shows day-30 retention that flattens at 22% — meaning the curve drops then stabilizes rather than continuing to decay. What does the flat tail suggest?',
      'A loyal core has formed — roughly a fifth of installers become durable users, while the rest churn early',
      [
        ['The app has a churn problem that will eventually take all users', 'A flat tail is the opposite of continued decay — it signals a durable cohort has formed at the flatline level.'],
        ['Retention will continue to drop linearly past day 30', 'The prompt specifies the curve flattens. Linear decay would be a different shape and a worse outcome.'],
        ['Day-30 retention should always reach 100%', 'No product retains 100% of installs at day 30. The shape — decay then stabilize — is the signal, not the absolute number.'],
      ],
      'A flattening curve is the single most important shape in consumer retention. It indicates that the product has separated curious triers from a real audience. The investor should focus on the flatline level and its growth over time.'),
    q(4350215, 'Career Skills', 'Startup Metrics and Diligence', 'Enterprise logo retention by cohort',
      'An enterprise SaaS shows the Q1 cohort at 95% logo retention after a year, while the Q3 cohort is at 82%. What is the most useful interpretation?',
      'Cohort quality is deteriorating — newer customers are churning faster than earlier ones, signaling ICP drift or weaker recent sales motion',
      [
        ['Logo retention always improves with time, so this will correct', 'Cohort retention reveals trajectory. A degrading curve does not auto-correct; it usually reflects a real change in customer mix or product fit.'],
        ['The two cohorts are at the same point because retention is constant', 'The prompt explicitly gives different retention rates. The question is what the difference means, not whether they are equal.'],
        ['Newer cohorts are larger, which lowers retention mathematically', 'Cohort retention is a percentage, not affected by cohort size. Size effects show up in absolute logo counts, not in the rate.'],
      ],
      'Cohort retention by close quarter is the cleanest read on whether the business is improving or drifting. A degrading cohort curve usually traces back to ICP drift, weaker sales bar, or a product-fit erosion in a specific segment.'),
    q(4350216, 'Career Skills', 'Startup Metrics and Diligence', 'Cohort triangle read',
      'A cohort triangle shows Jan-2024 customers retained at 95/90/85/82 over four quarters, but Jun-2024 retained at 90/78/64 over three quarters. What\'s the most important diagnostic?',
      'The Jun cohort is decaying faster than Jan at every same-tenure point — something changed in the customer mix or product-fit during the first half of the year',
      [
        ['The Jun cohort is still young, so direct comparison is invalid', 'Same-tenure comparison is exactly what cohort triangles enable. At month 3, Jan was at 90 and Jun at 78 — that is comparable and tells you something is off.'],
        ['Both cohorts trend the same way, so retention is stable', 'They emphatically do not trend the same way. The slope of the Jun cohort is steeper at every comparable point.'],
        ['Retention is improving because Jan has stabilized at 82', 'Stabilization in an older cohort does not save the newer cohort that is degrading underneath it. The mix shift is the story.'],
      ],
      'Cohort triangles let you compare like-for-like across vintages. When a newer cohort decays faster at every same-tenure point, you are watching a real business deterioration — usually ICP drift, lower sales bar, or a feature regression — not a statistical artifact.'),
    q(4350217, 'Career Skills', 'Startup Metrics and Diligence', 'Logo churn definition',
      'A founder says "we have 5% monthly logo churn." What is the most direct meaning?',
      '5% of customer accounts canceled this month, independent of how much revenue those accounts represented',
      [
        ['5% of revenue was lost this month', 'That would be revenue churn, not logo churn. Logo churn counts accounts; revenue churn weights by dollars.'],
        ['5% of users stopped using the product this month', 'User churn (individual seats) is different from logo churn (whole accounts). A logo can churn while many users still exist on competing tools.'],
        ['5% of contracts were re-signed at lower price points', 'Re-signs at lower price are contraction, not churn. Churn means the account ended.'],
      ],
      'Logo churn is a count metric: how many of the accounts that could have churned did churn? It is the cleanest read of customer durability, separate from any revenue weighting.'),
    q(4350218, 'Career Skills', 'Startup Metrics and Diligence', 'Gross vs net revenue churn',
      'A founder reports "2% net revenue churn" but also mentions 8% of customers downgraded their plans. What is most likely true?',
      'Gross revenue churn is higher than 2% — expansion from other customers is netting the downgrades down to 2%',
      [
        ['Gross and net revenue churn must be equal', 'They are only equal when there is zero expansion. The presence of downgrades plus a 2% net figure implies real expansion is offsetting churn.'],
        ['Gross revenue churn is always zero in healthy SaaS', 'Some gross churn happens at every SaaS company. "Zero" is unrealistic; the question is whether it stays below benchmarks.'],
        ['Net revenue churn is 8% because that\'s the downgrade rate', 'The prompt states net churn is 2%. The 8% is a downgrade signal among gross churn drivers, not the net figure.'],
      ],
      'Gross revenue churn measures contraction and cancellations only; net adds expansion on top. A healthy net number can mask a worrying gross number — always ask for both, especially when downgrades are mentioned.'),
    q(4350219, 'Career Skills', 'Startup Metrics and Diligence', 'Monthly to annual churn',
      'A startup reports 4% monthly logo churn. Roughly what annual logo churn does that compound to?',
      'About 39% — (1 − 0.04)^12 = 0.61, so 39% of logos churn over a year',
      [
        ['Exactly 48% — 4% × 12 months', '4% × 12 = 48% only works if churn compounds linearly, which it does not. Churn rates compound multiplicatively because each month\'s base shrinks.'],
        ['About 4% — monthly churn does not compound', 'Churn compounds because each month\'s churn is applied to the surviving base. A flat 4% annual figure assumes no compounding, which is wrong.'],
        ['About 50% — half the logos always churn in a year', 'There is no math here that produces exactly 50%. The compounded math is closer to 39%.'],
      ],
      'Monthly churn compounds multiplicatively: surviving fraction is (1 − monthly rate)^12. A 4% monthly churn yields roughly 39% annual loss, not 48%. This matters enormously when comparing monthly and annual benchmarks.'),
    q(4350220, 'Career Skills', 'Startup Metrics and Diligence', 'Churn type signals product gap',
      'A B2B SaaS shows healthy logo retention overall, but a cluster of customers cancels within the first 90 days citing "could not get value." What does this most directly suggest?',
      'A time-to-value or onboarding problem — customers leave before realizing the product\'s benefits, likely indicating product gaps or implementation friction',
      [
        ['A pricing problem — these customers cannot afford the product', 'The prompt cites "could not get value," not price. Cancellation language is the most direct signal of root cause.'],
        ['A sales problem — these customers were never qualified', 'Mis-qualification produces cancellations early in the sales cycle, not after purchase. Post-purchase churn citing value usually points to product or onboarding gaps.'],
        ['A churn that is normal and untracked', 'Early-tenure churn citing value gaps is exactly what should be tracked. Ignoring it leaves a fixable product problem untreated.'],
      ],
      'Churn reasons matter as much as churn rate. Early-tenure cancellations citing "could not get value" usually indicate onboarding or activation gaps. Those are typically fixable with product investment — but only if you diagnose them.'),
    q(4350221, 'Career Skills', 'Startup Metrics and Diligence', 'Gross vs net burn',
      'A startup\'s gross monthly burn is $800K and gross monthly revenue is $300K. What is net burn?',
      '$500K per month — gross expenses minus gross revenue',
      [
        ['$1,100K per month — expenses plus revenue', 'That adds the two, which makes no economic sense. Net burn subtracts revenue from gross expenses because revenue offsets cash outflow.'],
        ['$300K per month — revenue alone', 'Revenue is the offset, not the burn. Net burn is the cash leaving the business after accounting for revenue.'],
        ['$800K per month — gross burn ignores revenue', 'That is gross burn by definition. Net burn explicitly nets revenue against it.'],
      ],
      'Gross burn is total monthly cash expenses. Net burn is gross burn minus revenue (or any other inflows). Runway calculations use net burn because that is the actual rate at which cash depletes.'),
    q(4350222, 'Career Skills', 'Startup Metrics and Diligence', 'Runway from net burn',
      'A startup has $12M in the bank and net burn of $750K per month. How many months of runway?',
      '16 months — $12M divided by $750K per month',
      [
        ['9 months — $12M divided by gross burn assumptions', 'Runway is computed against net burn, which the prompt specifies as $750K. Substituting a higher gross figure produces a shorter — and incorrect — runway.'],
        ['24 months — $12M divided by net burn rounded down', '$12M / $750K = 16, not 24. Rounding the denominator down to $500K gets you 24, but the prompt specifies $750K.'],
        ['12 months — assume one year by convention', 'Runway is a calculation, not a convention. The math here yields 16 months, not a round number.'],
      ],
      'Runway = cash on hand / net burn rate. Investors use this constantly to gauge how long until the next raise. Anything under 12 months is fundraising mode; anything over 24 is comfort to invest in growth.'),
    q(4350223, 'Career Skills', 'Startup Metrics and Diligence', 'Default-alive vs default-dead',
      'A company has 14 months of runway, is growing 8% month-over-month, and would reach breakeven in 9 months at current spend if growth continues. Paul Graham would call this:',
      'Default-alive — the trajectory reaches breakeven inside the runway, assuming growth holds',
      [
        ['Default-dead — runway is under 24 months', 'Default-alive/dead is not about runway length. It is about whether the trajectory crosses breakeven before cash runs out.'],
        ['Default-alive only when revenue exceeds expenses today', 'That confuses profitable with default-alive. Default-alive means reaching profitability before cash runs out, not being there now.'],
        ['Default-dead because growth is below 10% monthly', '8% monthly is 150% annual growth. The default-alive test compares trajectory to runway, not absolute growth rates.'],
      ],
      'Default-alive means a company\'s growth-and-spend trajectory crosses breakeven before runway expires. Default-dead means it does not — meaning the company has to either raise capital, cut spend, or grow faster to survive. The frame focuses fundraising urgency on the right companies.'),
    q(4350224, 'Career Skills', 'Startup Metrics and Diligence', 'Bridging runway with cost cuts',
      'A company has 8 months of runway at $1M net burn. The CEO proposes cutting $400K of monthly spend, but $250K of that came from sales — so revenue growth would slow by an estimated $150K of monthly net-new ARR contribution. What\'s the new runway?',
      'About 13 months — $8M of cash divided by new net burn of $600K (cut spend $600K minus revenue impact of zero in month one), trending shorter as growth slows',
      [
        ['20 months — $8M divided by $400K of cuts', 'The cut is from $1M to $600K, not to $400K. Runway uses the new net burn, not the magnitude of the cut.'],
        ['8 months — runway is fixed once set', 'Runway is not fixed; it updates with every spend change. The whole point of cuts is to extend it.'],
        ['Infinity — $400K of cuts always solves runway', 'Cuts extend runway but rarely eliminate it. And cuts that reduce sales spend slow growth, which compounds the problem over time.'],
      ],
      'Cost-cut math has to account for both the immediate spend reduction and the downstream growth impact. Cutting $400K of sales spend extends runway today but slows ARR growth, which compounds into fundraising risk later. Always model both halves.'),
    q(4350225, 'Career Skills', 'Startup Metrics and Diligence', 'Burn multiple definition',
      'A company adds $5M of net-new ARR in a year and burned $10M of cash to do it. What is its burn multiple?',
      '2.0 — net burn divided by net-new ARR',
      [
        ['0.5 — net-new ARR divided by burn', 'That is the inverse — also called the efficiency ratio. Burn multiple specifically inverts that: burn over ARR.'],
        ['10 — net burn alone, ignoring ARR', 'Burn multiple is a ratio, not a level. The denominator is net-new ARR added in the same period.'],
        ['5 — net-new ARR alone', 'That is just net-new ARR. Burn multiple is the ratio of cash burned to ARR added.'],
      ],
      'Burn multiple = net burn / net-new ARR over the same period. Bessemer popularized it because it captures capital efficiency in a single number that scales across stages.'),
    q(4350226, 'Career Skills', 'Startup Metrics and Diligence', 'Burn multiple interpretation',
      'A growth-stage SaaS reports a burn multiple of 1.2. Bessemer\'s benchmark for "great" is under 1.0 and "good" is under 1.5. What is the most useful interpretation?',
      'Above average but not best-in-class — the company is burning $1.20 for each $1 of new ARR, signaling decent but not category-leading capital efficiency',
      [
        ['Best-in-class because below 2.0', '2.0 is the threshold for "suspect," not the bar for best-in-class. Best is under 1.0.'],
        ['Disqualifying because not under 1.0', '1.2 sits in Bessemer\'s "good" band. It is not category-leading but is also not disqualifying for growth-stage.'],
        ['Irrelevant for venture because Bessemer is a different firm', 'Burn multiple is a generally-adopted benchmark across venture, regardless of which firm coined it.'],
      ],
      'Bessemer\'s scale: under 1.0 is great, 1.0–1.5 is good, 1.5–2.0 is suspect, over 2.0 is bad. The metric travels across stages because it normalizes for company size, making cross-portfolio comparison clean.'),
    q(4350227, 'Career Skills', 'Startup Metrics and Diligence', 'Cap efficiency at Series B',
      'A Series B SaaS has $15M of ARR and has raised $40M cumulatively. What does that capital efficiency suggest?',
      'ARR per dollar raised is about $0.38 — below the $0.50–$1.00 range typical of efficient Series B companies, suggesting heavy spend or slower revenue compounding than peers',
      [
        ['Highly efficient because ARR exceeds $10M', 'Absolute ARR does not measure efficiency. The right question is ARR per dollar raised, which is below typical benchmarks here.'],
        ['Capital efficiency is irrelevant at Series B', 'Capital efficiency matters at every stage. At Series B it becomes the central question because Series C investors look for it.'],
        ['Average for the stage because most companies are at $0.40', 'Series B efficiency benchmarks typically sit between $0.50 and $1.00 ARR per dollar raised. $0.38 sits below the band, not at the median.'],
      ],
      'Cap efficiency (ARR / total raised) is one of the cleanest cross-stage benchmarks. Series B companies that fall well below $0.50 face fundraising friction at C because growth-stage investors price efficiency heavily.'),
    q(4350228, 'Career Skills', 'Startup Metrics and Diligence', 'Services-disguised SaaS warning',
      'A "SaaS" startup reports 65% gross margin. Most peers report 75–85%. What is the most likely explanation?',
      'A meaningful share of revenue is implementation, services, or hosting cost that compresses margin below software norms',
      [
        ['Pure software always has 65% gross margin', '65% is well below standard SaaS margin benchmarks of 75–85%. A pure software business should sit in the higher band.'],
        ['Gross margin is unrelated to whether a business is true SaaS', 'Gross margin is one of the clearest tells of whether revenue is software or services. The two have very different cost structures.'],
        ['Lower gross margin always means a better business', 'Lower gross margin means less contribution to fixed costs. It is rarely a positive signal for a software business.'],
      ],
      'SaaS gross margin under 70% almost always indicates services or implementation cost compressing the headline. The valuation implications are large because software businesses trade at very different multiples from services businesses.'),
    q(4350229, 'Career Skills', 'Startup Metrics and Diligence', 'Project revenue masquerading',
      'A company shows "ARR" growth from $2M to $5M over a year, but the underlying contracts are 12-month custom builds with no renewal language and no recurring software access. What\'s the most accurate read?',
      'The revenue is project-based, not recurring — calling it ARR is a category error, and renewal evidence is required before treating it as a SaaS business',
      [
        ['The growth is real and the labeling does not matter', 'Labeling matters enormously for valuation and diligence. Project revenue and recurring revenue have different durability and earn very different multiples.'],
        ['Custom builds that grow year-over-year always become SaaS', 'Many services businesses grow without ever becoming SaaS. The shift requires productized delivery and renewal contracts, not just larger projects.'],
        ['The company has no growth because revenue is not recurring', 'The company is growing — but the growth is project-based, not recurring. The question is durability, not whether growth exists.'],
      ],
      'Project revenue without renewal language is not ARR. Investors who accept the label uncritically pay SaaS multiples for services businesses. The diligence question is whether the underlying contracts compound or whether each year requires fresh selling.'),
    q(4350230, 'Career Skills', 'Startup Metrics and Diligence', 'Quality of revenue synthesis',
      'A company has $8M ARR but: 40% comes from one customer, 25% is custom-build services, 20% is from contracts that auto-cancel quarterly, and 15% is genuine recurring software. What is the durable software ARR most defensibly?',
      'About $1.2M — only the 15% slice clearly meets the recurring-software definition, with the rest needing customer-by-customer renewal evidence',
      [
        ['$8M — all reported ARR is durable by default', 'Reported ARR is a starting point, not a conclusion. Customer concentration, services, and short renewal terms each compress durable ARR.'],
        ['$3.2M — the 40% concentration is fine because the customer is locked in', 'Concentration plus quarterly auto-cancel is the opposite of locked in. Durable ARR strips out concentration risk and short-term contracts.'],
        ['$5.6M — keep everything except the services slice', 'Customer concentration and auto-cancel contracts also compress durable ARR. Removing only services understates the haircut.'],
      ],
      'Quality of revenue means asking which dollars will still be there next year without new selling effort. Concentration, services, and short auto-cancel terms each take a haircut. The durable ARR is usually much smaller than the headline.'),
    q(4350231, 'Career Skills', 'Startup Metrics and Diligence', 'Pipeline coverage ratio',
      'A B2B sales team needs to close $4M next quarter and has $12M of weighted pipeline. What is the pipeline coverage ratio and is it healthy?',
      '3x coverage — a typical benchmark, generally adequate for a mature sales team with reliable conversion rates',
      [
        ['1x coverage — pipeline equals quota', '$12M / $4M = 3, not 1. 1x coverage would be severely under-pipelined.'],
        ['12x coverage — gross pipeline ignores weighting', 'The prompt specifies $12M weighted, which already accounts for stage-weighted probabilities. 12x would be unweighted.'],
        ['0.33x coverage — quota divided by pipeline', 'That is inverted. Coverage puts pipeline on top because it measures how much pipeline you have relative to quota.'],
      ],
      'Pipeline coverage = weighted pipeline / quota. 3x is the standard benchmark for healthy B2B sales teams; under 2x is a concern; over 4x suggests a hygiene problem (deals stuck in pipeline without progress).'),
    q(4350232, 'Career Skills', 'Startup Metrics and Diligence', 'Pipeline coverage shortfall',
      'A sales team that historically converts pipeline at 30% suddenly shows 5x coverage but is missing quota. What is the most likely diagnosis?',
      'Pipeline hygiene has broken down — deals are sitting in stages they should have advanced past or closed-lost, inflating coverage without producing revenue',
      [
        ['The team needs to add more pipeline because 5x is low', '5x is well above the 3x benchmark, not low. Adding more pipeline does not fix the issue if the existing pipeline is not converting.'],
        ['The team is on track because high coverage guarantees closes', 'Coverage is a leading indicator, not a guarantee. If deals are stuck or stale, high coverage can coexist with missing quota.'],
        ['The conversion rate was always wrong and should be ignored', 'Historical conversion is the baseline. The right question is what changed — usually deal quality or sales process discipline.'],
      ],
      'When coverage rises but conversion falls, the pipeline is full of stale deals. Hygiene matters: a 3x clean pipeline beats a 6x dirty one. The diagnostic is to age the pipeline and look at conversion by stage.'),
    q(4350233, 'Career Skills', 'Startup Metrics and Diligence', 'Sales cycle lengthening',
      'A B2B SaaS\'s average sales cycle has drifted from 45 days to 72 days over three quarters. Win rates are unchanged. What is the most important diagnostic?',
      'Whether the team is moving up-market into larger deals (longer cycle is expected) or whether the same buyers are taking longer to decide (a demand-side warning)',
      [
        ['Sales is broken because cycles are longer', 'Longer cycles can reflect a deliberate up-market shift, which is often healthy. The diagnostic is intent vs drift.'],
        ['Win rates are unchanged, so nothing matters', 'Cycle elongation has real cash implications regardless of win rates. Longer cycles burn more runway per deal closed.'],
        ['Cycles always lengthen as companies scale', 'Cycles can shorten as products mature and channels become known. Lengthening is a signal, not an inevitability.'],
      ],
      'Cycle length drift is one of the earliest warnings of either a deliberate up-market move (manageable) or a demand softening (urgent). The two require very different responses, so diagnosing intent vs drift is the first task.'),
    q(4350234, 'Career Skills', 'Startup Metrics and Diligence', 'Bookings vs revenue',
      'A SaaS company books a $120K annual contract starting next month, billed up front. What changes immediately and what happens over the year?',
      'Bookings increase by $120K today; revenue is recognized at $10K per month over the contract; cash collected jumps by the up-front payment',
      [
        ['Revenue increases by $120K today because the contract is signed', 'Revenue recognition is monthly under standard SaaS accounting. Signing a contract does not recognize all the revenue immediately.'],
        ['Cash and revenue both change identically at month-end', 'They move on different schedules. Cash collected can be up-front; revenue is recognized monthly; bookings happen at signing.'],
        ['Nothing changes until the customer is live', 'Bookings record the commitment at signing; cash records the payment when received; revenue records use over time. All three move independently.'],
      ],
      'Bookings, revenue, and cash are three different timelines in SaaS. Bookings reflect commitments, revenue reflects use over time, and cash reflects collection. Confusing them is one of the most common diligence errors.'),
    q(4350235, 'Career Skills', 'Startup Metrics and Diligence', 'Deferred revenue read',
      'A SaaS company shows $4M of deferred revenue on its balance sheet. What does that figure most directly indicate?',
      'Cash has been collected for services not yet delivered — usually annual prepayments that will be recognized as revenue over the next twelve months',
      [
        ['The company has lost $4M of revenue', 'Deferred revenue is a liability because revenue is owed to customers, but it represents collected cash, not a loss.'],
        ['The company has $4M of cash it cannot use', 'Deferred revenue is a non-cash liability. The underlying cash has typically been collected and can be used; the obligation is to deliver service.'],
        ['The company is in default on $4M of contracts', 'Deferred revenue is a normal liability, not a default. It tracks cash collected ahead of revenue recognition.'],
      ],
      'Deferred revenue indicates strong cash collection — customers are pre-paying. The asset side (cash) and the liability side (revenue owed) both grow, but the cash is real and usable. Growing deferred revenue is usually a positive signal of contract durability and annual billing terms.'),
    q(4350236, 'Career Skills', 'Startup Metrics and Diligence', 'Cash collected vs revenue recognized',
      'A startup books a $60K annual contract, paid quarterly. After three months, what is recognized as revenue and how much cash has been collected?',
      '$15K of revenue recognized and $15K of cash collected — both align to the first quarter of monthly recognition',
      [
        ['$60K revenue and $60K cash because the contract is signed', 'Annual contract value is not all-at-once revenue. Revenue is recognized monthly; cash arrives quarterly.'],
        ['$15K revenue and $60K cash because cash always leads', 'Quarterly billing means $15K of cash, not $60K. Cash schedules depend on the billing terms specified in the contract.'],
        ['$60K revenue and $15K cash because revenue accrues faster', 'Revenue recognition follows service delivery monthly. After three months, recognized revenue equals $15K, not $60K.'],
      ],
      'Quarterly-billed annual contracts produce $15K of revenue and $15K of cash every quarter. Annual prepayments shift the cash forward but keep revenue recognition monthly. The cash and revenue timelines are tools the investor uses to understand working capital and DPO/DSO dynamics.'),
    q(4350237, 'Career Skills', 'Startup Metrics and Diligence', 'Sample selection bias in dashboards',
      'A founder shows a dashboard of "active customers" with 95% net retention. Diligence reveals the dashboard filters out customers inactive for 60+ days. What is the diligence risk?',
      'The cohort being measured is self-selected to exclude churners — true retention across the full customer base is materially lower',
      [
        ['The 95% is still accurate for active customers', 'It is accurate for the filtered subset but does not represent the business. Calling it the company\'s retention figure misrepresents the business.'],
        ['Inactive customers should always be excluded from retention math', 'Standard retention math includes all customers in the starting cohort, regardless of subsequent activity. Filtering out inactivity hides churn.'],
        ['The dashboard is fine because it shows the engaged base', 'Engaged-only retention is a different metric. Reporting it as overall retention is misleading.'],
      ],
      'Cohort selection rules are the first thing to inspect in any dashboard. Survivorship bias — measuring only the customers still around — inflates retention. The right denominator is everyone who was a customer at the start of the period.'),
    q(4350238, 'Career Skills', 'Startup Metrics and Diligence', 'Founder-curated cohort traps',
      'A founder presents three reference cohorts showing strong retention. Diligence shows the company has 40 cohorts and only the top three were shared. What\'s the right diagnostic action?',
      'Ask for the full cohort table and triangulate with raw billing data — selective sharing is a yellow flag that the population is heterogeneous and the headline cohorts are not representative',
      [
        ['Accept the three cohorts because they are the best evidence', 'Selective evidence is the opposite of evidence. The diligence value lies in seeing the population, not the cherry-picked sample.'],
        ['Trust the founder\'s sample because all founders share their best data', 'That conflates "is normal" with "is informative." Best-cohort sharing tells you about the founder\'s framing, not the business.'],
        ['Treat the sample size problem as a reason to look only at headline retention', 'Cohort analysis is essential. The right move is to expand the sample, not to drop the analysis.'],
      ],
      'When a founder shares a curated sample, the diligence question is what the unshared data looks like. The right move is to ask for the full table and verify against billing data — disagreement between the curated and full views is the most informative signal of the diligence call.'),
    q(4350239, 'Career Skills', 'Startup Metrics and Diligence', 'LTV/CAC basics',
      'A customer pays $400 per month at 70% gross margin, churns at 2% monthly, and costs $4,000 to acquire. What is LTV/CAC?',
      'About 3.5 — LTV is $400 × 70% / 0.02 = $14,000; LTV/CAC = $14,000 / $4,000',
      [
        ['About 1.0 — LTV equals CAC', 'LTV uses gross margin and churn-adjusted lifetime. $14,000 / $4,000 = 3.5, not 1.'],
        ['About 0.1 — CAC dwarfs monthly revenue', 'Monthly revenue alone is not LTV. The lifetime calculation multiplies gross profit by expected customer life, which here is 50 months.'],
        ['About 5.0 — ignore gross margin in LTV', 'Ignoring gross margin yields $20,000 / $4,000 = 5, which overstates LTV. LTV should always use gross profit, not revenue.'],
      ],
      'LTV = monthly gross profit / monthly churn rate. The standard benchmark is LTV/CAC of 3x or better for healthy unit economics. Always use gross margin in the LTV calc — using gross revenue inflates the ratio by the cost of goods sold.'),
    q(4350240, 'Career Skills', 'Startup Metrics and Diligence', 'Blended vs net-new ARR',
      'A founder reports "$2M of ARR growth this quarter." Diligence shows $2.4M of new ARR was added, $0.5M was lost to churn, and $0.1M was expansion from existing customers. What is net-new ARR?',
      '$2M — gross new of $2.4M plus $0.1M of expansion minus $0.5M of churn equals $2M net-new ARR',
      [
        ['$2.4M — gross new only, ignoring churn', 'Net-new ARR explicitly nets churn against new bookings. Ignoring churn overstates true growth.'],
        ['$2.9M — gross new plus contraction added back', 'Adding contraction to growth is double-counting in the wrong direction. Contraction is a subtraction, not an addition.'],
        ['$0.5M — only the churn line matters', 'Net-new ARR is a composite of all three flows. Reporting only churn would understate growth.'],
      ],
      'Net-new ARR = gross new + expansion − contraction − churn. It is the single number that tells you how much the recurring base is actually growing. Reporting only gross new flatters the picture; net-new is the honest read.'),
    q(4350241, 'Career Skills', 'Startup Metrics and Diligence', 'Sales efficiency synthesis',
      'A Series A SaaS shows Magic Number 0.6, CAC payback 22 months, and NRR 95%. What is the integrated read?',
      'Sales efficiency is weak across all three lenses — go-to-market spend is producing sub-1.0 efficiency, payback is past 18 months, and existing customers are slightly contracting',
      [
        ['NRR 95% is fine, so the rest is irrelevant', 'NRR 95% is below 100%, meaning the existing base is contracting. Combined with weak Magic Number and long payback, that signals systemic issues, not just one metric.'],
        ['One of the three must be wrong because they disagree', 'They agree directionally — all three point to sales efficiency problems. The question is whether to invest, not which number to discount.'],
        ['Magic Number is the only metric that matters', 'Each of the three captures a different lens (go-to-market efficiency, individual customer payback, base durability). Looking at all three is the point.'],
      ],
      'Sales efficiency is multi-dimensional. Magic Number, CAC payback, and NRR each capture one lens — go-to-market efficiency, customer payback, and base durability. When all three are weak, the company is buying growth inefficiently from a contracting base; the integrated read should weigh more heavily than any single metric.'),

    // Chapter 4: Founder, Product, and Customer Evidence
    // Difficulty arc: single-signal reads (coachability, founder-market fit) → multi-signal interpretation (reference call, team gap) → behavioral patterns (conflict, switching cost).
    q(4103002, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Coachability signal',
      'During diligence, a founder receives customer churn data that contradicts the original story and immediately proposes two specific tests. What does this most directly support?',
      'The founder may be coachable and able to update based on evidence',
      [
        ['The company has no risk because the founder changed the plan', 'Coachability reduces execution risk but does not eliminate the underlying churn signal that triggered the conversation.'],
        ['The churn data should be ignored because it is uncomfortable', 'Discomfort is irrelevant to the truth value of the data. The founder\'s response actually models the right behavior — engage, don\'t bury.'],
        ['The investor should demand a complete pivot before learning more', 'A pivot is a big move; the founder\'s proposed tests are a smaller, more appropriate first step.'],
      ],
      'Founder assessment looks for judgment under pressure. Updating a plan from real evidence is a positive signal, even when the underlying data reveals risk.'),
    q(4105057, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Founder-market fit',
      'A founder building fraud tools previously led risk operations at a fintech and can name the exact budget owner, workflow pain, and failed alternatives. What does this support?',
      'Strong founder-market fit because the founder understands the buyer, pain, and operating context',
      [
        ['Proof the company will never face competition', 'Founder-market fit is about access and insight, not competitive moat. Strong incumbents can still attack.'],
        ['A reason to skip customer calls entirely', 'Founder knowledge is one input. Customer calls validate whether the broader market shares the founder\'s view.'],
        ['Evidence that pricing no longer matters', 'Pricing always matters. Domain expertise helps with packaging, but does not eliminate price sensitivity in the buyer.'],
      ],
      'Founder-market fit is about earned insight into the problem and customer. It strengthens diligence, but it still needs evidence from customers, product, and economics.'),
    q(4107302, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Reference call read',
      'A former manager says the founder is brilliant but often ignored customer feedback until churn appeared. What should the investor do with that signal?',
      'Probe how the founder now gathers, weighs, and acts on customer evidence',
      [
        ['Treat brilliance as a full replacement for listening', 'Brilliant founders who ignore customers ship the wrong product fast. Intelligence does not substitute for listening.'],
        ['Reject the deal without any follow-up questions', 'A single backward-looking data point does not justify a no. The question is whether the pattern has changed.'],
        ['Treat the reference as personal opinion and disregard it', 'Pattern-of-behavior references are diligence gold. Discarding them because they are uncomfortable removes one of the few honest data points available.'],
      ],
      'Founder references are useful when they point to behavior under stress. The diligence question is whether the pattern still exists and how it affects execution.'),
    q(4107303, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Missing cofounder gap',
      'A solo technical founder has strong product instincts but no sales experience, and the target buyer is enterprise procurement. What is the practical diligence issue?',
      'Whether the team can build enterprise go-to-market capability fast enough for the plan',
      [
        ['Whether technical founders should avoid customers forever', 'Founder-led selling is often the best early-stage discovery tool. The issue is scale, not whether to engage customers at all.'],
        ['Whether procurement can be skipped because the demo is nice', 'Enterprise procurement is the gatekeeper to budget. A nice demo does not bypass the legal, security, and budget gates.'],
        ['Whether sales experience matters only after IPO', 'Sales capacity is critical from the first enterprise pilot. Waiting for IPO would leave years of revenue uncaptured.'],
      ],
      'Team assessment includes capability gaps. A great product still needs a route through buyer process, procurement, security, and expansion.'),
    q(4107773, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Conflict under pressure',
      'Customer references praise the product, but former teammates say the founders avoid hard operating decisions. What should diligence probe?',
      'How the founders make tradeoffs, resolve conflict, and hold each other accountable under stress',
      [
        ['Whether customers can run the company for them', 'Customers buy the product; they cannot make founder-level operational decisions. The risk is real and internal.'],
        ['Whether conflict disappears after funding', 'Funding amplifies operating pressure, not reduces it. More money usually means harder, faster decisions.'],
        ['Whether former teammates are reliable enough to count', 'Dismissing references blocks learning. Even imperfect testimony reveals patterns worth probing further with additional references.'],
      ],
      'Founder assessment includes decision behavior, not just product talent. Avoided conflict can become expensive when the company grows.'),
    q(4280030, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Switching cost evidence',
      'A reference customer says the product is "great" but admits they still run the incumbent tool in parallel six months after purchase. What does that signal?',
      'Adoption is partial — the product has not yet earned the customer\'s primary workflow, so renewal and expansion are at risk',
      [
        ['Strong endorsement because the customer used the word "great"', 'Verbal praise is not adoption. Parallel-running means the buyer has not committed the workflow.'],
        ['Healthy diversification by the customer', 'Diversification of vendors usually means low switching cost has not been earned — the opposite of stickiness.'],
        ['Evidence that the incumbent is about to fail', 'The opposite — the incumbent is still trusted enough to run in parallel six months in. The new product has not displaced it yet.'],
      ],
      'Real adoption shows up in workflow ownership, not in survey responses. Parallel-tool running is a yellow flag: the buyer hedged the purchase and may not renew at full value.'),
    // Expansion pass (Step 4b): founder-market fit signals, coachability and decision-under-pressure,
    // cofounder dynamics, customer-call planning, product pull, implementation friction, roadmap risk,
    // reference construction, customer urgency vs politeness, sales-engineering bandwidth. IDs 4350300–4350343.
    q(4350300, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Founder-market fit definition',
      'An investor describes a founder as having "strong founder-market fit." What does that phrase most directly mean?',
      'The founder has earned insight into the buyer, problem, and operating context that makes them uniquely positioned to build the solution',
      [
        ['The founder has raised more capital than competitors', 'Capital raised is a fundraising outcome, not a fit signal. Founder-market fit is about insight, access, and credibility, not balance sheet.'],
        ['The founder has a degree in the field', 'Credentials can correlate with fit but are not the same thing. Earned insight from operating experience usually beats credentials alone.'],
        ['The founder has a personal preference for the category', 'Preference is not insight. Founder-market fit requires credible understanding of the buyer and problem, not just enthusiasm for the space.'],
      ],
      'Founder-market fit is earned, not declared. The strongest signal is when the founder can articulate the buyer\'s workflow, prior failed attempts, and budget context with specificity that only comes from inside the problem.'),
    q(4350301, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Earned insight signal',
      'A founder building developer tools previously spent four years as a platform engineer at a fast-growing infrastructure company. What is the most useful interpretation?',
      'The founder likely has earned insight into the specific pain points, vendor selection patterns, and buyer personas in their target market',
      [
        ['Proof the company will succeed', 'Founder background reduces some risk but does not guarantee execution. Many domain-expert founders still struggle with product, GTM, or fundraising.'],
        ['Evidence that no diligence is required', 'Strong founder background is one input. Customer calls, product evidence, and market work still need to happen.'],
        ['A reason to expect lower valuation', 'Strong founder-market fit usually pushes valuation up, not down. The premium reflects reduced execution risk in the founder dimension.'],
      ],
      'Domain operating experience is one of the highest-signal founder background patterns. The diligence question is whether the insight has translated into a credible product wedge, not just a believable origin story.'),
    q(4350302, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Prior failed alternatives',
      'A founder can name three specific tools the target buyer tried and abandoned, including what each missed and how procurement reacted. What does that specificity reveal?',
      'Deep buyer-side knowledge — the founder has likely been in the buyer\'s seat or done extensive customer discovery before pitching',
      [
        ['The market is too crowded if three tools have already failed', 'Three failed prior attempts often signals a real, unsolved pain. The pattern of failure usually points to the wedge an attentive new entrant can take.'],
        ['The founder is biased and ignoring competitor strengths', 'Specificity about what competitors missed is not bias. It reflects buyer-side fluency, which is exactly the signal you want.'],
        ['Procurement reaction is irrelevant for product diligence', 'Procurement is often the gatekeeper to budget. Knowing how procurement reacted to prior tools is a high-value diligence signal.'],
      ],
      'Specificity about prior failed alternatives is one of the strongest founder-market fit signals because it requires real buyer-side context. Generic answers about "the existing tools don\'t work" usually mean the founder has not done the homework yet.'),
    q(4350303, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Customer-ID precision',
      'Founder A says "we sell to enterprise companies." Founder B says "we sell to the VP of Revenue Operations at $50–500M B2B SaaS companies with at least 20 sales reps, who owns the CRM budget line." What does the difference reveal?',
      'Founder B has actually identified their buyer with budget authority — Founder A has only identified a market segment',
      [
        ['Both founders are equally precise about their buyer', 'They are not even close. Founder A names a segment; Founder B names a person, a budget line, and a qualifying threshold.'],
        ['Founder A is more flexible and can sell to anyone', 'Sales-to-anyone is sales-to-no-one. Without a buyer profile, the team cannot focus messaging, pricing, or sales hiring.'],
        ['Founder B is over-specifying and will miss adjacent buyers', 'Tight ICP definition does not preclude expansion. It just ensures the first wave of selling is focused, which is exactly what early-stage companies need.'],
      ],
      'Specificity about the buyer is one of the highest-signal founder-market fit reads. Vague answers correlate with vague pipelines. Founders who can name the persona, the budget, and the qualifying threshold typically have sales pipelines that close.'),
    q(4350304, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Founder-market fit absent',
      'A first-time founder with no industry background is building a tool for healthcare-payor claims adjudication. When is the missing domain expertise most disqualifying?',
      'When the buying process, regulation, and workflow depend on undocumented institutional knowledge that takes years to learn from the outside',
      [
        ['Always — first-time founders should not build in regulated markets', 'Many successful founders have built in adjacent industries. The disqualifier is undocumented complexity, not the founder\'s prior CV.'],
        ['Never — domain expertise can always be hired', 'Some domains have institutional knowledge that cannot be hired in quickly. Hiring helps but does not always close the gap.'],
        ['Only if the founder has no co-founders at all', 'Cofounders help, but if no one on the team has the domain depth, the gap remains. The structural question is about combined team capability.'],
      ],
      'Founder-market fit is most critical in domains where buyer behavior, regulation, or workflow are non-obvious. The diligence question becomes: can the team acquire this insight in time, or is it a structural disadvantage that compounds with every customer call?'),
    q(4350305, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Coachability definition',
      'A partner says a founder "seems coachable." What does that most directly mean in venture context?',
      'The founder updates their beliefs and actions based on new evidence, including evidence that contradicts their prior view',
      [
        ['The founder does whatever the investor tells them to do', 'Compliance is not coachability. The best founders push back on bad advice while updating on real evidence — that combination is what investors look for.'],
        ['The founder has no opinions of their own', 'Lack of conviction is not coachability — it is a different problem. Coachable founders have strong views, held loosely, and update them on data.'],
        ['The founder agrees with every reference call', 'Agreement with references is not the test. The test is what they do with surprising feedback, not whether they accept comfortable feedback.'],
      ],
      'Coachability is the habit of updating on evidence. It is one of the highest-correlated founder traits with venture outcomes because companies change strategy many times, and founders who cannot update get stuck on bad bets.'),
    q(4350306, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Updating on evidence',
      'During a diligence call, an investor mentions a competitor the founder hadn\'t known about. The founder asks specific follow-up questions and emails back two days later with a comparison matrix and a revised positioning frame. What does this most directly suggest?',
      'High coachability and intellectual honesty — the founder treats new information as input, not threat',
      [
        ['Weakness because they didn\'t know the competitor', 'Knowing every competitor is impossible. The signal is how the founder responds to the gap, not the gap\'s existence.'],
        ['Excessive eagerness to please the investor', 'A two-day, evidence-based response is methodical, not sycophantic. Pleasing-mode answers come in two minutes, not two days.'],
        ['Coachability that doesn\'t scale because founders should already know everything', 'No one already knows everything. Coachability is exactly the trait that scales because it determines how fast the founder updates as conditions change.'],
      ],
      'Coachability shows up in real diligence interactions. A founder who gathers new information, sits with it, and returns with structured thinking is showing the exact behavior you want at the next-round inflection.'),
    q(4350307, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Coachability under bad news',
      'A founder receives a critical customer reference call relayed back to them, calling out slow product velocity. In the next 24 hours: they email the customer to thank them, share the feedback with the team, and propose two concrete velocity changes. What\'s the most useful read?',
      'Mature, coachable handling under pressure — the response is owner-mode, action-oriented, and externally honest with the customer',
      [
        ['Defensive behavior because they emailed the customer immediately', 'Acknowledging a customer\'s criticism is the opposite of defensive. Defensiveness shows up in deflection or denial, not in thanking the source.'],
        ['Overreaction that signals poor judgment under stress', 'Two concrete proposed changes in 24 hours is responsive, not overreactive. Overreaction would be sweeping team changes or strategy pivots.'],
        ['Performative coachability that means nothing', 'The action set — customer thanks, team transparency, concrete proposals — is exactly the substantive response pattern, not performance.'],
      ],
      'The first 24 hours after bad news is one of the most diagnostic windows for founder coachability. Owner-mode founders absorb, share, and move; defensive founders attack the source. This is observable behavior, not pattern-matching.'),
    q(4350308, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Decision under pressure synthesis',
      'Across two reference calls and one live diligence interaction, the founder: (a) admitted a hiring mistake from last year, (b) reversed a pricing strategy after seeing churn data, (c) defended a controversial market choice with specific reasoning. What is the integrated read?',
      'Strong decision-making under pressure — the founder updates when evidence warrants and holds the line when reasoning warrants, which is the right combination',
      [
        ['Inconsistent because they updated some decisions and not others', 'Updating on evidence and holding on reasoned conviction are both correct behaviors. Consistency would be either always-update or never-update, both of which are worse.'],
        ['Weak because they admitted a hiring mistake', 'Admitting a prior mistake is a strong signal, not a weak one. Founders who cannot acknowledge errors usually compound them.'],
        ['Strong only because they defended the market choice', 'Defense alone would suggest stubbornness. The integrated read combines updates and holds — both are needed.'],
      ],
      'The combination of "updates on evidence" and "holds on reasoning" is the highest-quality founder decision pattern. Most founders fail in one direction or the other — either too rigid or too pliable. Multi-source evidence of both behaviors is rare and valuable.'),
    q(4350309, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Cofounder equity split definition',
      'Two technical cofounders started a company together; one joined six months earlier and the team agreed to a 55/45 equity split. What does this most directly reflect?',
      'A negotiated allocation that accounts for time-in-seat differences while keeping both cofounders heavily invested',
      [
        ['Equal contribution from both founders', 'A 55/45 split is not equal. The difference reflects some asymmetry — usually time, capital, or role weight.'],
        ['One founder is significantly more important than the other', 'Material role asymmetry usually shows up in larger gaps (70/30 or wider). 55/45 typically reflects modest timing or contribution differences with both staying heavily invested.'],
        ['A red flag that the founders cannot agree on basics', 'Negotiated splits that account for real differences are healthy. Red flags appear when splits are arbitrary or hide unresolved disagreements.'],
      ],
      'Cofounder equity splits are a window into how cofounders negotiate hard conversations. Slightly uneven splits that reflect real contribution differences usually indicate a healthy partnership. Equal splits and lopsided splits both demand more diligence.'),
    q(4350310, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Lopsided split read',
      'A two-cofounder team has a 90/10 equity split. What is the most useful question to ask?',
      'What did the 10% cofounder contribute, what is their role going forward, and is the split intended to be permanent or to evolve with vesting milestones?',
      [
        ['Whether the 10% cofounder should be replaced immediately', 'Replacement is premature. The first move is to understand the structure, not to act on it.'],
        ['Whether the 90% founder is doing all the work', 'The 90% number could reflect many things — capital contribution, prior IP, time-in-seat. Asking the right question is more useful than assuming.'],
        ['Whether the split violates startup norms', 'Norms are descriptive, not prescriptive. The diligence question is whether the structure aligns the team for the next four years, not whether it conforms to averages.'],
      ],
      'Lopsided splits warrant questions, not conclusions. The 10% cofounder may be an early employee with co-founder title, a former cofounder who left technically, or a true co-builder underpaid in equity. The diligence work is to find out which.'),
    q(4350311, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Cofounder conflict resolution',
      'During a reference call, a former colleague says of two cofounders: "I never saw them disagree." What is the most useful interpretation?',
      'A yellow flag — cofounders making any meaningful decisions will disagree regularly, so the absence of visible conflict suggests either suppression or unresolved drift',
      [
        ['A green flag — alignment is the goal', 'Healthy partnerships disagree productively. Total absence of disagreement usually signals one cofounder dominates or that conflict is being suppressed.'],
        ['Irrelevant because cofounder dynamics are private', 'Cofounder dynamics determine company outcomes. They are central to diligence, not private.'],
        ['Evidence the team will scale well', 'Scaling demands harder decisions, which create more conflict. Teams who avoid conflict at low stakes usually break at higher stakes.'],
      ],
      'The healthy pattern is visible disagreement followed by visible resolution. "We always agree" usually means one cofounder defers or that conflict is being privately stored. Both compound badly under operational pressure.'),
    q(4350312, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Missing function gap',
      'A two-cofounder team has strong engineering and product, no GTM experience, and is targeting enterprise procurement. What is the most useful diligence question?',
      'Whether the founders have a credible plan to add GTM leadership (hire, advisor, or cofounder-equivalent) within 6–12 months given enterprise sales cycles',
      [
        ['Whether the missing function disqualifies the deal', 'Missing functions are normal at seed stage. The question is the plan to fill them, not whether to walk away.'],
        ['Whether the engineers can run GTM themselves', 'Engineer-led GTM can work in PLG businesses. For enterprise procurement, the gap is structural and usually requires dedicated leadership.'],
        ['Whether the company should pivot to PLG to avoid GTM', 'Pivoting product strategy to match team gaps is rarely correct. The right move is usually to fill the gap, not to redesign the company around it.'],
      ],
      'Team gap diligence is about plan and timing, not headcount. Enterprise GTM gaps typically need to be closed within the first 12 months of selling because cycles are long. Founders who do not have a credible plan usually struggle to close the gap before it becomes a fundraising obstacle.'),
    q(4350313, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Cofounder breakup risk',
      'Across multiple references, you hear: cofounders met three months before incorporation, they have not had a formal conflict-resolution conversation, one cofounder has hinted to friends about starting something else, and equity is split 50/50. What\'s the integrated read?',
      'High cofounder breakup risk — short relationship history, no conflict mechanism, divergent signaling, and rigid equity structure together compound into a near-future split risk',
      [
        ['Normal early-stage friction with no specific concern', 'The combination of indicators is more than friction. Each one is a yellow flag; together they form a pattern.'],
        ['Only the equity split matters', '50/50 alone is workable; combined with the other signals it amplifies the risk. The pattern matters more than any single element.'],
        ['Cofounder breakups are rare and overweighted by investors', 'Cofounder breakups are one of the most common reasons seed-stage companies fail. The risk is real and worth diligencing carefully.'],
      ],
      'Cofounder breakup risk is rarely a single signal — it is a pattern. Short history, no conflict-resolution mechanism, divergent ambitions, and rigid structure together create the conditions for a split. Diligence should weigh the combination, not any single piece.'),
    q(4350314, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Customer call purpose',
      'An associate is preparing for a customer reference call. What is the primary purpose of the call?',
      'To verify the founder\'s claims about the product, buyer, and motion with someone whose incentives differ from the founder\'s',
      [
        ['To get the customer to validate the investment thesis', 'Validation-seeking biases the call. The purpose is to gather independent evidence, not to confirm a preferred narrative.'],
        ['To recruit the customer as a co-investor', 'Customer co-investment is a separate motion; reference calls are diligence. Confusing the two compromises the diligence signal.'],
        ['To benchmark the product against competitors', 'Competitive benchmarking can happen, but the primary purpose is to verify the founder\'s claims with an independent voice.'],
      ],
      'Customer reference calls are the single most important external diligence channel for venture deals. The purpose is independent verification — and independent means the call should be structured to reveal what the founder\'s pitch could be hiding.'),
    q(4350315, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Open-ended vs leading questions',
      'Which question is most likely to produce honest signal in a customer reference call?',
      '"Walk me through how you currently use the product, day to day."',
      [
        ['"You love the product, right?"', 'A leading question primes a positive answer regardless of truth. Customers usually take the easy yes.'],
        ['"Is the product better than the competition?"', 'A binary leading question gives the customer two choices and primes a comparison. Open-ended questions reveal usage truth.'],
        ['"Would you recommend it to a peer?"', 'Recommendation questions invite politeness. Asking about actual workflow reveals real adoption.'],
      ],
      'Open-ended, behavior-anchored questions ("walk me through," "tell me about a time," "what happens when") consistently produce more honest signal than leading or yes/no questions. The customer reveals workflow truth when given room to describe it.'),
    q(4350316, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Sourcing reference customers',
      'A founder offers four reference customers. The investor also independently identifies five customers via the founder\'s public website. What is the right move?',
      'Call a mix of founder-provided and independently-sourced references to balance curated signal with unfiltered signal',
      [
        ['Only call the founder-provided references because they will be most informative', 'Founder-provided references are pre-selected for friendliness. They produce ceiling signal, not floor signal.'],
        ['Only call independently-sourced customers because founder references are biased', 'Founder-provided references can still be useful — they reveal what the founder considers a "best case." The bias is informative if you also have unfiltered calls.'],
        ['Rely only on the references the founder has already warmed up', 'Tip-off risk is real but manageable with timing and independent sourcing. The reference signal is too valuable to skip.'],
      ],
      'The best reference call pipeline combines founder-provided (which reveals the founder\'s framing of "best") with independently-sourced (which reveals the unfiltered base rate). The gap between the two is one of the highest-signal diligence inputs available.'),
    q(4350317, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Customer call structure',
      'In a 30-minute customer reference call, what is the most useful question sequencing?',
      'Open with workflow ("how do you use it?"), then move to outcomes ("what changed for your team?"), then probe risk ("what would make you stop using it?"), then close with comparison',
      [
        ['Open with "would you recommend?" to establish tone', 'Recommendation framing biases the rest of the call positively. Open with behavior, not endorsement.'],
        ['Open with pricing to establish willingness to pay', 'Pricing early in the call signals commercial intent and tightens the customer\'s responses. Save it for later, after rapport is established.'],
        ['Open with churn risk to test for vulnerabilities', 'Leading with churn risk feels adversarial and shuts down the customer. Build rapport with workflow first, then probe risk.'],
      ],
      'The optimal call structure builds from concrete behavior outward to interpretation. Customers answer behavior questions honestly; they hedge interpretation questions. Sequencing matters — workflow first, outcomes second, risk third, comparison last.'),
    q(4350318, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Customer-call plan under time pressure',
      'You have time for 5 customer reference calls and the founder has shared a list of 40 customers. How should you select?',
      'Pick 2 from the founder list (curated best-case), 2 from independently-sourced contacts in similar segments (unfiltered base case), and 1 from a known churned account (worst-case)',
      [
        ['Call only the five largest customers because they have the most context', 'Size alone is a poor selector. The largest customers are usually the founder\'s most-prepared references, which gives you only one slice of signal.'],
        ['Pick all 5 from the founder list to get the most generous read', 'A 5-of-5 friendly-sample produces a ceiling estimate, not an honest one. The base case and worst case are where the real signal lives.'],
        ['Pick 5 random customers from the full list', 'Pure randomness misses the structural questions (best case, base case, worst case). Stratified selection produces more diagnostic signal.'],
      ],
      'Reference-call selection under time pressure is a stratified-sampling problem. The investor needs to see the ceiling, the floor, and the middle to triangulate truth. Founder-provided + independent + churned is the cleanest three-axis sample.'),
    q(4350319, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Product pull definition',
      'A partner refers to a product as having "real pull." What does that phrase most directly mean?',
      'Customers seek out the product, use it deeply, and expand without heavy sales effort — demand exceeds the push that the company is generating',
      [
        ['The product is on a popular list of tools', 'Listings are a marketing artifact, not a pull signal. Pull lives in usage and customer-initiated expansion.'],
        ['The product has been featured in a major publication', 'Press generates trial, not pull. Pull is what happens after the article: do users come back, expand, and bring others?'],
        ['The product has the most features in its category', 'Feature counts do not generate pull. Workflow ownership does.'],
      ],
      'Product pull is the cleanest single signal of product-market fit. The classic shape is: customers find you on their own, sign up faster than your sales team can manage, expand without prompting, and bring colleagues. Push-driven adoption looks like the opposite.'),
    q(4350320, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Organic growth signal',
      'A B2B SaaS reports that 40% of new pipeline came from inbound referrals from existing customers without any incentive program. What does this most directly indicate?',
      'Strong product pull — existing customers are unprompted advocates, suggesting real value delivery and likely high retention downstream',
      [
        ['Weak sales motion because outbound is underperforming', 'High inbound from referrals is a strength, not a weakness. It usually means outbound can scale on top of a healthy base, not that outbound is broken.'],
        ['Random fluctuation that should not be treated as signal', '40% unprompted referral is far outside random variation. It is a strong pull signal that warrants further diligence.'],
        ['A risk because the company depends on a few enthusiastic users', 'Many referrals across many customers is the opposite of concentration risk. The diligence question is referral concentration, not the level itself.'],
      ],
      'Unincentivized referral rates are one of the highest-correlated signals with downstream retention. Customers who refer peers are typically in the deepest workflow ownership; their advocacy compounds the company\'s pull over time.'),
    q(4350321, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Expansion as pull signal',
      'A SaaS customer expands from 10 seats to 80 seats over 18 months without a sales rep touching the account. What is the most useful read?',
      'Strong product pull — usage drove organic expansion, and the customer is now a structurally important account worth supporting',
      [
        ['A risk that the customer is now too large to manage', 'Organic expansion is a strength. Concentration risk is real but is a separate question; the expansion itself is positive signal.'],
        ['Sales rep should have been involved to maximize value', 'Sales-touch-free expansion is the cleanest pull signal. Adding a rep retroactively does not improve the signal; it just changes attribution.'],
        ['Expansion at this scale always means the company is plateauing', 'Expansion is growth, not plateau. Plateau would mean no new logos plus flat existing accounts — the opposite of what is described.'],
      ],
      'Organic expansion is the gold standard of product pull because it requires no marketing or sales effort. When usage genuinely drives growth, the LTV/CAC math becomes very favorable and the company\'s capital efficiency scales.'),
    q(4350322, 'Career Skills', 'Founder, Product, and Customer Evidence', 'NPS interpretation',
      'A founder reports an NPS of 65. What is the most useful interpretation?',
      'A high score worth investigating — but the sample size, response rate, and verbatim comments matter more than the headline number',
      [
        ['Excellent score — the product has strong pull', 'NPS scores are easily inflated by small samples or self-selection. The score is a hypothesis to verify, not a conclusion.'],
        ['Meaningless score — NPS does not predict anything', 'NPS, when sampled honestly, correlates with retention and referral in many categories. The diligence is on sampling, not on dismissing the metric.'],
        ['Below benchmark for B2B SaaS', '65 is at or above benchmark for most SaaS categories. The score is not the problem; the sampling is the question.'],
      ],
      'NPS by itself is a 30-second metric. The diligence weight comes from sample size, response rate, the customer segment surveyed, and especially the verbatim comments. A 65 with 12 responses out of 80 customers is much less interesting than a 50 with 200 responses out of 250.'),
    q(4350323, 'Career Skills', 'Founder, Product, and Customer Evidence', 'In-product depth signal',
      'A B2B SaaS shows weekly active users of 80% of seats but daily active users of only 12%. What does the ratio most directly suggest?',
      'The product is used periodically rather than as a daily workflow — usage is real but shallow, raising questions about how central it is to the buyer\'s work',
      [
        ['Strong engagement because WAU is above 50%', '80% WAU is healthy at the surface, but the DAU/WAU ratio of 15% suggests the product is used occasionally rather than continuously.'],
        ['Weak engagement because DAU is below 20%', 'For some product categories (analytics, weekly reporting tools), low DAU is normal. The signal depends on category expectations.'],
        ['DAU and WAU should always be equal', 'They rarely are. The ratio between them is the signal — a high ratio means daily workflow, a low ratio means periodic use.'],
      ],
      'DAU/WAU ratio captures workflow depth. High ratios (above 50%) indicate daily-workflow products that are deeply embedded; low ratios indicate periodic or reporting use that is more vulnerable to displacement. The category matters: analytics tools are not Slack.'),
    q(4350324, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Product pull synthesis',
      'A SaaS shows: 35% referral-driven pipeline, 110% NRR, 65% DAU/WAU ratio, and four customer-call references describing the product as "essential to weekly close." What is the integrated read?',
      'Strong product pull across multiple lenses — referral, expansion, engagement, and customer-stated centrality all point to the same conclusion',
      [
        ['Mixed signals because no single metric is over 90%', 'Each metric is at or above strong benchmarks for its respective dimension. The convergence is the signal, not any one number.'],
        ['Weak pull because DAU/WAU is only 65%', '65% DAU/WAU is strong for most B2B SaaS categories. Daily-essential workflows usually live in the 50–80% band.'],
        ['Pull is only proven by referral percentage', 'Pull is multi-dimensional. Referral is one lens; expansion, engagement, and qualitative customer language are others. Triangulation across them is the diligence move.'],
      ],
      'Product-market fit shows up across multiple lenses simultaneously. When referral, expansion, engagement, and customer language all align, the diagnosis is strong pull. When they disagree, the diligence work is to figure out which lens is misleading.'),
    q(4350325, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Switching cost definition',
      'A product has "high switching cost." What does that phrase most directly mean for the customer?',
      'Replacing the product would require significant time, retraining, data migration, or integration rework — making churn expensive and unlikely',
      [
        ['The product is expensive to buy', 'Purchase price is acquisition cost, not switching cost. Switching cost is about the cost of leaving.'],
        ['The product is hard to evaluate before buying', 'Evaluation difficulty is a sales-cycle concept, not a switching-cost concept. They are distinct.'],
        ['The product cannot be canceled mid-contract', 'Contract terms create lock-in but not switching cost. True switching cost survives contract end and applies even when the customer is free to leave.'],
      ],
      'Switching cost is one of the strongest durable advantages a product can build. It can come from data lock-in, integration depth, workflow embedding, retraining cost, or compliance dependency. It is the technical underpinning of high retention.'),
    q(4350326, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Integration cost read',
      'A B2B SaaS integrates with 8 systems at each customer site, including HRIS, billing, and ticketing. What does that integration footprint suggest about switching cost?',
      'High switching cost — replacing the product means rebuilding 8 integrations, which is expensive and risky for the customer to undertake',
      [
        ['Low switching cost because integrations are easy to copy', 'Integrations are individually replicable but collectively expensive. Eight integrations represent months of work to rebuild plus production risk.'],
        ['Integrations have no impact on switching cost', 'Integration depth is one of the most reliable sources of switching cost. The customer has invested implementation effort that does not transfer to a competitor.'],
        ['The integration footprint creates fragility, not stickiness', 'Integration footprint can create both — fragility for the customer, stickiness for the vendor. The diligence question is whether the integrations are maintained well.'],
      ],
      'Integration depth is one of the cleanest sources of switching cost. Each integration is a sunk cost from the customer\'s side that they would have to rebuild to switch — and 8 integrations across critical systems make that rebuild a major project.'),
    q(4350327, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Change-management ask',
      'A reference customer says "the product is great, but we need an internal champion to keep using it because our team forgets." What\'s the most useful read?',
      'A yellow flag — the product is not self-sustaining in the workflow, and renewal depends on the champion staying engaged',
      [
        ['Green flag — the customer has a champion', 'Needing a champion to drive usage is a workflow-fit problem, not strength. Strong product pull does not require a champion to remind users.'],
        ['Neutral because every product needs champions', 'Some products do; the strongest ones do not. Daily-workflow products with high pull get used because users want to, not because a champion enforces it.'],
        ['Strong signal because the customer named a champion', 'The champion frame is doing the work of describing dependency. If the champion left, would usage continue? That is the diligence question.'],
      ],
      'Champion-dependent usage is a workflow-fit yellow flag. When customers describe needing internal cheerleading to maintain adoption, the product has not been pulled into the workflow on its own. Champion turnover then becomes a churn vector.'),
    q(4350328, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Implementation friction by size',
      'A B2B SaaS shows 2-week implementation for SMB customers but 6-month implementation for enterprise customers. What is the most useful diligence question?',
      'Whether the enterprise implementation friction is structural (regulated industry, complex integrations) or operational (incomplete product, manual setup) — the answer determines whether enterprise can scale',
      [
        ['Whether enterprise should be dropped because of friction', 'Long implementations are normal for enterprise. The question is whether they can be shortened with product investment.'],
        ['Whether SMB customers should be charged enterprise pricing', 'Pricing is independent of implementation friction. Conflating them muddles two separate decisions.'],
        ['Whether the company should only sell to enterprise', 'Implementation friction is a reason to invest in onboarding tooling, not a reason to abandon the SMB segment that is implementing in 2 weeks.'],
      ],
      'Implementation friction by segment is one of the cleanest reads on whether a product is built for self-service or requires services. Six months for enterprise can be expected (regulated industries), or it can signal an under-productized solution that consumes founder time. The diligence work is to distinguish.'),
    q(4350329, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Roadmap risk definition',
      'A partner mentions "roadmap risk" in a memo. What does that phrase most directly mean?',
      'The risk that the company cannot ship the product capabilities required to meet its commercial milestones in the planned timeframe',
      [
        ['The risk that the company will pivot away from the current product', 'Pivot risk is related but distinct. Roadmap risk is specifically about delivery against the current plan, not about strategy change.'],
        ['The risk that competitors will release similar features', 'Competitive risk is a different category. Roadmap risk is internal to the company\'s own delivery capability.'],
        ['The risk that the product roadmap document will leak', 'Confidentiality is a different concern. Roadmap risk is about execution, not information security.'],
      ],
      'Roadmap risk is one of the most underweighted diligence dimensions. Most pitches assume the product will arrive on schedule; many do not. The diligence work is to inspect velocity, technical debt, team capacity, and dependency-on-others.'),
    q(4350330, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Engineering velocity signal',
      'An engineering team of 8 has shipped 4 minor features and zero major features over the last quarter, while the prior quarter shipped 2 major features. What\'s the most useful diagnostic?',
      'A velocity slowdown is occurring — diagnose whether it\'s technical debt, team transitions, or scope creep before assuming the team\'s capacity is broken',
      [
        ['The team is broken and should be replaced', 'Replacement is a last resort. The first move is to understand the cause: technical debt, attrition, or planning issues each call for different responses.'],
        ['Velocity is irrelevant because feature counts are arbitrary', 'Feature counts are imperfect but informative. A clear slowdown is a signal worth diagnosing, even if the metric is rough.'],
        ['Feature velocity is the only meaningful signal of engineering health', 'Velocity is one signal; quality, defect rates, and outage frequency matter too. But velocity is a meaningful starting point.'],
      ],
      'Engineering velocity is a leading indicator of product roadmap execution. Quarter-over-quarter slowdowns warrant diagnosis: technical debt accumulation, attrition, scope inflation, and refactoring all produce the same surface metric but require different interventions.'),
    q(4350331, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Technical-debt overhang',
      'A company\'s release cadence has slowed from weekly to monthly over six quarters. The CTO mentions ongoing migration to a new infrastructure stack. What\'s the most useful interpretation?',
      'Technical debt is now consuming engineering capacity — the migration is a real investment, but the cadence drop means feature delivery is paused while the foundation is rebuilt',
      [
        ['The team is lazy and should be pushed harder', 'Pushing harder during a migration usually accelerates technical debt accumulation, not feature shipping. The diagnosis is structural, not motivational.'],
        ['Migrations are always unnecessary and indicate weak engineering', 'Some migrations are necessary; some are vanity. The diligence question is whether the migration meaningfully unlocks future velocity or whether it is rework.'],
        ['Release cadence is irrelevant to the business', 'Release cadence directly affects what gets sold. Slower cadence means commitments to customers are harder to meet.'],
      ],
      'Technical debt overhang is a real and common roadmap risk. The diligence question is whether the team has correctly identified the debt, whether the migration will pay back, and whether the cadence drop will reverse on a predictable timeline.'),
    q(4350332, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Platform dependency read',
      'A startup\'s product is built on top of a single vendor\'s API (e.g., a payments rail or a model provider). What is the structural risk?',
      'The vendor controls pricing, terms, and feature availability — and may compete with the startup directly, build the same product, or limit access',
      [
        ['No risk because vendor relationships are stable', 'Vendor relationships change rapidly, especially as the dependent ecosystem grows. Stability today does not guarantee stability tomorrow.'],
        ['The startup should sue if the vendor raises prices', 'Litigation against a critical platform vendor is rarely a viable strategy. The structural risk is contract terms, not enforceable rights.'],
        ['Platform dependency is irrelevant if the startup adds value', 'Adding value reduces but does not eliminate platform risk. The platform can still squeeze pricing, copy features, or restrict access.'],
      ],
      'Platform dependency is one of the most common roadmap risks and one of the most chronically underweighted. The vendor sees usage data, controls pricing, and can choose to compete. The diligence question is whether the startup is building a moat fast enough to survive a platform pivot.'),
    q(4350333, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Reference call open question design',
      'In a 30-minute reference call, what is the single most-revealing opening question?',
      '"Walk me through the last time you used the product — what were you trying to do?"',
      [
        ['"Do you like the product?"', 'A binary preference question invites a polite yes. Behavior questions invite description, which is harder to fake.'],
        ['"Would you recommend the product?"', 'Recommendation framing is socially loaded — customers default to "yes" to be polite. The behavior alternative ("walk me through usage") is more revealing.'],
        ['"How is the customer support?"', 'Support questions are narrow and lead to a single dimension. Workflow questions open the whole conversation.'],
      ],
      'The best opening question gets the customer describing actual behavior. Behavior is harder to fake than opinion. "Walk me through the last time…" extracts specific, recent, observable detail — exactly what diligence needs.'),
    q(4350334, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Conviction probe',
      'During a reference call, when asked about renewal, the customer says "we will probably renew, assuming things stay roughly where they are." What\'s the most useful interpretation?',
      'Soft conviction with conditional language — the customer is signaling renewal is not certain and depends on continued performance',
      [
        ['Strong renewal because "probably" indicates intent', '"Probably" is hedged language. The "assuming" clause adds further conditionality. Together they describe weak conviction, not strong intent.'],
        ['Definite churn because of the qualifiers', 'Qualified language is not the same as churn intent. The customer is signaling uncertainty, not departure.'],
        ['Irrelevant because all customers hedge', 'Some customers express clear conviction ("we are locked in"). Hedged language is informative, not a universal default.'],
      ],
      'Renewal language is one of the highest-signal reference-call extractions. "We will renew" is strong; "we will probably renew, assuming..." is medium; "we are evaluating alternatives" is weak. The hedge structure tells you exactly where the customer sits.'),
    q(4350335, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Great-call trap',
      'After a reference call where the customer said "great product, great team, great experience," the investor logs the call as "strong reference." What is the diligence risk?',
      'The investor mistook politeness for conviction — three generic "greats" without specific behavioral or workflow evidence is closer to a friendly default than a strong endorsement',
      [
        ['No risk because the customer was clearly positive', 'Verbal positivity is the easiest reference signal to fake. Without specific behavioral or workflow detail, it is closer to politeness than to evidence.'],
        ['Risk only if the customer was being paid to say it', 'Paid testimonials are one risk; polite-but-empty references are a much more common one. Most customers default to nice in a short call.'],
        ['No risk because customers always tell the truth in reference calls', 'Customers often soften criticism, especially when called on short notice. The diligence work is to probe past the surface politeness.'],
      ],
      'Generic enthusiasm without specifics is the most common reference-call trap. The diagnostic move is to ask follow-up questions that require behavioral specificity ("when did you last open the product?", "what would make you stop?"). Politeness collapses under specifics.'),
    q(4350336, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Customer urgency extraction',
      'In a customer reference, which behavioral signal most strongly indicates real urgency for the product?',
      'The customer rolled out the product to additional teams without being asked by the vendor',
      [
        ['The customer said "we love the product"', 'Verbal affection is the lowest-signal urgency indicator. Behavioral expansion is much stronger.'],
        ['The customer has the product on a list of "tools we use"', 'Listings are passive use. Active expansion to new teams is structurally different.'],
        ['The customer attended a vendor user conference', 'Conference attendance is engagement, not urgency. Many engaged customers still do not expand.'],
      ],
      'Real urgency reveals itself in behavior, not language. Customers who actively expand the product into adjacent teams without being prompted are demonstrating workflow urgency that translates into revenue. Verbal enthusiasm without expansion is closer to politeness than commitment.'),
    q(4350337, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Polite-customer pattern read',
      'Across five reference calls, every customer says the product is "great," none mention specific use cases, none describe expansion plans, and three mention "we should use it more." What is the integrated read?',
      'Polite-customer pattern — the product is liked but not workflow-essential, and renewal is at risk because the customers themselves cannot articulate why they need it',
      [
        ['Strong product because all five customers said "great"', 'Five "greats" without specifics is exactly the polite-default pattern. Strong references include concrete use cases, expansion plans, and renewal certainty.'],
        ['One bad reference would change the read', 'The integrated read is already concerning. A single negative reference would confirm the pattern, but the silence on specifics is already the signal.'],
        ['Customers always default to "great" so the pattern is meaningless', 'Many customers do describe specific use cases when prompted. Universal vagueness is informative — it means no customer found the product central to their work.'],
      ],
      'Multi-call patterns are more revealing than any single call. When every customer is polite but no one is specific, the diagnosis is usually that the product is "nice to have" rather than "must have." That distinction maps directly to renewal risk.'),
    q(4350338, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Sales-engineering bandwidth',
      'A B2B SaaS\'s pipeline has 12 active deals, each requiring sales engineer (SE) involvement for technical proof-of-concept work. The company has 2 SEs. What is the structural concern?',
      'SE capacity is the bottleneck — each SE supports roughly 6 active deals, which limits how many can progress simultaneously and creates a closing-time ceiling',
      [
        ['SE bandwidth is irrelevant because pipeline coverage is sufficient', 'Pipeline coverage is a quantity metric; SE bandwidth is a delivery constraint. They are independent and both matter.'],
        ['The team should disqualify deals that need SE support', 'Disqualifying technical buyers usually shrinks the addressable market. The right move is to expand SE capacity, not to abandon the buyers who need it.'],
        ['SE capacity does not affect deal velocity', 'SE capacity directly affects how fast technical proof-of-concept work completes. It is one of the most common closing-time bottlenecks in enterprise SaaS.'],
      ],
      'SE bandwidth is one of the most underweighted operational metrics in growth-stage diligence. Pipeline coverage tells you whether enough deals exist; SE bandwidth tells you whether the team can actually move them through proof-of-concept. Both bind.'),
    q(4350339, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Solutions-engineering gap',
      'A pipeline-to-closing conversion rate has dropped from 28% to 14% while SE headcount stayed flat and average deal complexity rose (more integrations per deal). What\'s the most likely cause?',
      'SE capacity has not kept up with deal complexity — each deal now consumes more SE time, so fewer deals finish proof-of-concept within sales cycle windows',
      [
        ['Sales reps are getting worse at selling', 'Rep effectiveness can vary, but the prompt specifically mentions deal complexity increase and flat SE headcount — that combination produces capacity strain, not skill decline.'],
        ['The product is broken', 'A halving of conversion in this configuration usually traces to capacity, not product. The clue is the rising deal complexity, not product reliability.'],
        ['The pipeline quality has dropped', 'Pipeline quality might be a factor, but the prompt anchors the deal-complexity rise. SE capacity strain is the more direct cause of the conversion drop.'],
      ],
      'When deal complexity outgrows SE capacity, pipeline-to-closing conversion drops even when sales and product are healthy. The diligence question is whether the company recognizes the capacity gap and has a hiring plan, or whether it is silently absorbing the conversion loss.'),
    q(4350340, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Gap to closing real revenue',
      'A SaaS has $20M of weighted pipeline, 2 sales reps, 1 SE, average deal complexity of 6 integrations per customer, and 9-month sales cycles. What\'s the most important integrated diagnostic?',
      'The capacity stack — reps, SEs, and procurement-cycle time — may not support the pipeline volume, so reported pipeline likely overstates achievable revenue inside the next 12 months',
      [
        ['Pipeline volume guarantees revenue at standard conversion rates', 'Standard conversion assumes adequate capacity. With 1 SE for 6 integrations per deal across 2 reps\' worth of pipeline, capacity is the binding constraint.'],
        ['Sales cycle length is the only relevant variable', 'Sales cycle is one factor; SE bandwidth and rep capacity are equally important. The integrated read combines all three.'],
        ['Pipeline always converts at the historical rate regardless of capacity', 'Historical conversion was achieved under prior capacity constraints. Current constraints can produce different conversion, especially if deal complexity rose.'],
      ],
      'The gap between weighted pipeline and bookable revenue is one of the most consistently underestimated diligence questions. Pipeline math assumes capacity to work the pipeline; when reps, SEs, or procurement throughput is constrained, the conversion rate slips below the historical assumption.'),
    q(4350341, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Pilot-to-paid conversion',
      'A founder reports 22 pilots and 4 paid conversions over six months — an 18% pilot-to-paid rate. What\'s the most useful read?',
      'Below the 30–50% range typical of healthy pilot programs — the diligence question is what is blocking conversion: budget, executive sponsorship, or product readiness',
      [
        ['Above benchmark because 18% beats typical SaaS', 'For active pilots (not lead conversions), 30–50% conversion is the typical healthy band. 18% is below, not above.'],
        ['Below benchmark and the company should stop running pilots', 'Stopping pilots removes the diagnostic. The right move is to figure out what kills conversion, not to remove the test.'],
        ['Conversion rate does not matter as long as pilots are running', 'Pilots that do not convert consume founder and engineering time without revenue. The conversion rate is precisely what matters.'],
      ],
      'Pilot-to-paid conversion is one of the cleanest unit-tests of product-market fit at the deal level. Healthy pilots convert 30–50% within 6–12 months. Conversion below 20% usually traces to budget, sponsorship, or product readiness gaps that diligence should diagnose.'),
    q(4350342, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Champion risk',
      'A SaaS\'s largest customer is championed by a single VP who personally selected the tool and has overseen all expansion. What\'s the structural risk?',
      'Champion turnover risk — if the VP leaves or changes priorities, the renewal is exposed because no broader organizational endorsement exists',
      [
        ['No risk because the VP is committed to the product', 'Individual commitment is one input. The structural risk is the absence of organizational embedding beyond that individual.'],
        ['Risk only if the VP is junior in the organization', 'Champion risk applies at every seniority level. Senior champions leave too, and their departure can be even more disruptive to renewal.'],
        ['Single-champion dynamics always mean immediate churn', 'Many single-champion accounts renew for years. The risk is conditional on champion turnover, not immediate.'],
      ],
      'Champion concentration is one of the most common B2B SaaS structural risks. The diligence question is whether the product has earned broader organizational embedding — multiple internal users, multiple budget owners, integration with shared systems — that survives champion turnover.'),
    q(4350343, 'Career Skills', 'Founder, Product, and Customer Evidence', 'Founder + product + customer integration',
      'A capstone diligence summary shows: strong founder-market fit, weak coachability signals from references, strong product pull metrics, and polite-but-vague customer references. What\'s the integrated investment read?',
      'A mixed but recoverable picture — strong founder and product pull are positive structural factors, but the coachability and customer-conviction gaps create execution risk that warrants explicit milestone-based monitoring',
      [
        ['Invest because two of the four lenses are positive', 'Counting positives is not the same as integrating signals. Coachability and customer conviction are not interchangeable with founder fit and product pull.'],
        ['Overweight the two negative lenses without testing whether the risks are addressable', 'Two negatives in a four-lens framework is not automatically disqualifying — many great companies have specific weaknesses to manage. The question is whether the weaknesses are addressable.'],
        ['Wait and re-diligence in six months', 'Waiting can be the right answer in some cases, but the prompt asks for an integrated read. "Wait" is a passive non-decision that does not actually integrate the signals.'],
      ],
      'Integration across founder, product, and customer evidence is exactly the capstone diligence skill. No single dimension dominates; the partnership has to weigh each, identify the load-bearing risks, and decide whether to invest with a watch list, pass, or re-engage when specific signals improve.'),

    // Chapter 5: Terms, Memo, and Investment Decision
    // Difficulty arc: single-term reads (liq pref, pro rata) → cap-table mechanics (option pool, SAFE conversion, pay-to-play) → governance and memo judgment (board seat, balanced memo, kill criteria, valuation reasoning).
    q(4103005, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Liquidation preference',
      'A term sheet offers a 1x non-participating liquidation preference. What does that usually mean for the investor in an exit?',
      'The investor typically chooses between getting invested capital back or converting to common for upside',
      [
        ['The investor receives invested capital plus unlimited common upside automatically', 'That describes a participating preferred ("double dip"), not a non-participating one. The non-participating investor must choose between the two.'],
        ['The founder must repay the investment personally', 'Liquidation preferences attach to corporate proceeds in an exit. Founders are not personally liable.'],
        ['The preference only applies if the company has no cash', 'The preference applies on any liquidation event — sale, merger, dissolution — regardless of cash position.'],
      ],
      'A non-participating preference generally creates a choice between preference value and as-converted ownership. It protects downside without double-dipping.'),
    q(4105060, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Pro rata rights',
      'A seed investor asks for pro rata rights in the financing documents. What practical benefit are they seeking?',
      'The ability to maintain ownership by participating in future financing rounds',
      [
        ['A guarantee that the startup will be profitable', 'Pro rata is an ownership-defense tool. It has no influence on whether the company achieves profitability.'],
        ['The right to force a sale next quarter', 'Forcing a sale requires drag-along or board control, neither of which pro rata grants.'],
        ['A promise that future investors cannot invest', 'Pro rata lets the existing investor participate alongside new investors — it does not exclude them.'],
      ],
      'Pro rata rights help early investors protect ownership if the company raises more capital. They matter most when later rounds are competitive.'),
    q(4105061, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Option pool shuffle',
      'A term sheet requires a larger employee option pool created pre-money — reducing founder ownership before the new investor buys shares. What should the team model?',
      'The pre-money option pool impact on founder dilution and effective valuation',
      [
        ['Only the headline valuation because dilution is decorative', 'A 10% pre-money pool reduces effective valuation by roughly 10%. That is not decorative — it is a major economic term.'],
        ['Treat the option pool as a post-money expense after closing', 'The whole point is that the pool is created pre-money, so dilution falls on founders. Modeling it as post-money hides the real economics.'],
        ['A revenue forecast with no share count', 'Revenue forecasts and option pool math are independent. Ignoring the pool means missing founder dilution entirely.'],
      ],
      'Option pool timing can shift economics between founders and investors. Associates should model ownership, dilution, and effective price per share clearly — and call out a pre-money pool ask explicitly.'),
    q(4107306, 'Career Skills', 'Terms, Memo, and Investment Decision', 'SAFE conversion',
      'A seed round includes prior SAFEs with valuation caps that convert at closing. What should the associate model?',
      'The post-conversion ownership and dilution for founders, new investors, and SAFE holders',
      [
        ['Only the new money check size', 'SAFEs convert into the same cap table as the new round. Ignoring them understates total dilution materially.'],
        ['Convert SAFEs only if the new round price is below the cap', 'Cap-based SAFEs convert when the round closes, period. Whether the cap or discount governs the price is a separate question.'],
        ['A cap table that ignores prior instruments', 'Prior SAFEs are real claims on equity. Ignoring them produces an incorrect ownership picture at closing.'],
      ],
      'Prior SAFEs and notes affect ownership when they convert. Deal work needs a clean fully diluted cap table before anyone celebrates the headline valuation.'),
    q(4107307, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Board seat ask',
      'A small seed fund asks for a board seat despite investing less than the lead. What question matters most?',
      'Whether the governance request fits ownership, value added, and future board effectiveness',
      [
        ['Whether every investor should get a board seat for morale', 'Board seats are governance, not morale. Adding seats dilutes decision-making and can crowd out future leads.'],
        ['Whether board meetings can replace customer calls', 'Board meetings and customer calls serve different purposes — both are needed, neither substitutes for the other.'],
        ['Whether governance terms ever bind founders', 'Governance terms shape every major decision: hiring, M&A, financing. They bind founders constantly.'],
      ],
      'Board structure should help the company govern well. Rights should be evaluated against ownership, expertise, control, and future financing needs.'),
    q(4107776, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Pay-to-play clause',
      'A financing draft includes a pay-to-play provision affecting investors who skip future rounds. What should the associate understand?',
      'How the clause changes rights or preferences for non-participating investors — typically converting their preferred to common if they do not participate pro rata',
      [
        ['That it requires existing investors to lead the next round', 'Pay-to-play pressures participation, not leadership. Existing investors typically only need to take their pro rata share.'],
        ['That it guarantees every future round is oversubscribed', 'Pay-to-play pressures existing investors to participate; it does nothing to attract new ones.'],
        ['That it grants founders the right to remove preferred rights at will', 'Investor rights are contractual. Pay-to-play conversion is an automatic consequence of non-participation, not a founder discretionary power.'],
      ],
      'Deal terms shape future incentives. Pay-to-play provisions push existing investors to support down or flat rounds; they need clear modeling because they change the preference stack of any investor who sits one out.'),
    q(4280040, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Valuation reasoning',
      'A founder asks $40M post-money on $400K ARR with 12 months of growth data. The associate is asked to defend or push back. What is the most useful frame?',
      'Anchor valuation to forward ARR multiple and comparable late-seed rounds in this category, then test whether the implied growth assumption is achievable',
      [
        ['Accept the founder\'s number because seed valuations are arbitrary', 'Seed valuations have benchmarks. $40M on $400K is 100x trailing ARR — well above category norms and worth a defensible justification.'],
        ['Counter with exactly half the asking valuation because it sounds fair', '"Half" is a negotiation reflex, not a valuation. The associate needs to anchor to comps and growth math, not split-the-difference heuristics.'],
        ['Refuse to discuss valuation until the company is profitable', 'Most venture-backed companies never raise from profitability. Refusing to value pre-profit means refusing to invest in venture at all.'],
      ],
      'Valuation should connect to comparable rounds, forward-revenue math, and the ownership the fund needs to make the deal matter. Headline numbers without that scaffolding are negotiation theater.'),
    q(4103007, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Balanced memo',
      'An associate loves a deal but found high churn, strong founder-market fit, and strong customer pull in one segment. What memo structure is most useful for the partnership?',
      'State the investment thesis, key evidence, main risks, mitigants, and what would change the decision',
      [
        ['Hide the churn issue so the memo feels decisive', 'Hidden risks reappear after investment. The partnership will lose trust in the associate, and the deal will face the same churn problem.'],
        ['List every diligence call chronologically with no conclusion', 'A diary is not a memo. Partners need an opinionated synthesis, not raw notes.'],
        ['Use only superlatives because conviction matters more than analysis', 'Superlatives without evidence read as marketing, not judgment. Conviction is built on evidence, not adjectives.'],
      ],
      'A strong VC memo is opinionated and balanced. It shows why the deal could work, why it could fail, and which evidence should drive the decision.'),
    q(4105064, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Kill criteria',
      'A partner asks what would make the team pass on an otherwise exciting deal. What is the best associate response?',
      'Name the specific diligence findings that would break the thesis, such as weak retention or no budget owner',
      [
        ['Say nothing could ever change the decision', 'A deal with no kill criteria has no thesis — just enthusiasm. Partners will read it as weak judgment.'],
        ['List every minor typo in the data room', 'Typos do not kill venture deals. Kill criteria should be material to the underlying business case.'],
        ['Defer the question until after the round closes', 'Decisions need to be made before commitment, not after. Waiting until the round closes means you have no leverage and no out.'],
      ],
      'Good investment judgment includes falsifiability. Clear kill criteria prevent enthusiasm from swallowing the evidence.'),

    // Chapter 5 expansion (Step 4c): preference stack mechanics, anti-dilution variants, board composition,
    // founder vesting, info rights, drag/tag/ROFR, SAFE/note mechanics, option pool math, pay-to-play,
    // memo failure modes, partnership dynamics, pricing discipline, allocation, negotiation patterns.
    q(4350400, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Pre-money vs post-money',
      'A founder pitches a "$20M valuation" on a $5M round. Without further clarification, how should the associate read the number?',
      'Ambiguous — it must be confirmed as pre-money or post-money before doing any ownership math',
      [
        ['Always post-money — that is the modern convention', 'Convention has shifted but the term still gets used loosely. Treating ambiguity as resolved is how associates miscalculate the new investor\'s ownership by several points.'],
        ['Always pre-money — that is how cap tables are written', 'Cap tables can present either basis; the spoken number in a pitch is genuinely ambiguous. Pre-money + round = post-money, so the gap between the two on a $5M round is meaningful.'],
        ['Doesn\'t matter because the check size is what determines ownership', 'Check / post-money = ownership. If post-money is $20M, $5M is 25%. If pre-money is $20M, post-money is $25M and $5M is 20%. Five points of ownership rides on the question.'],
      ],
      'The first associate task on any new term sheet is locking the valuation basis. Pre-money + new money = post-money; ownership comes off post-money. Never proceed on a verbal number without confirming which one.'),
    q(4350401, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Preference stack seniority',
      'A Series C company has $30M of Series A preferred, $50M of Series B preferred, and $80M of Series C preferred outstanding. The company sells for $100M. In a typical pari-passu-within-class, senior-to-junior stack, who gets paid first?',
      'Series C investors are senior — they receive their preference first, then Series B, then Series A, with common last',
      [
        ['Series A is senior because they invested first', 'Standard preference stacks are senior on a last-in, first-out basis. Earliest investors are usually most junior, which is why early preferred can be wiped in a low exit.'],
        ['All preferred share pro rata regardless of series', 'That describes a pari-passu-across-classes structure. Most stacks are pari-passu within a class but senior to junior across classes.'],
        ['Common gets paid first because founders need protection', 'Common is at the bottom of the stack by definition. Founder protection comes from other mechanisms (vesting, carve-outs), not from preference reordering.'],
      ],
      'In standard stacks, later-stage preferred is senior. At a $100M exit with $160M of preferences in this structure, Series C is paid first ($80M), then Series B gets the remaining $20M, and Series A plus common get zero. Knowing seniority decides who gets wiped.'),
    q(4350402, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Participating vs non-participating',
      'An investor put in $10M for a 20% stake with a 1x participating preferred. The company sells for $100M with $10M total preferences ahead of common. How much does this investor receive vs the non-participating case?',
      'Participating: $10M preference + 20% of remaining $90M = $28M. Non-participating: max($10M, 20% of $100M) = $20M',
      [
        ['Both yield $20M because preferences round trip', 'That ignores participation. The participating investor takes the preference AND the pro rata share of remaining proceeds — the "double dip" that the term is named for.'],
        ['Participating yields $10M because preferences exclude common upside', 'Participation is exactly the right to share in common upside on top of the preference. That description inverts the term.'],
        ['Non-participating yields $30M because they get the higher of preference and conversion', 'They do, but conversion math here gives 20% of $100M = $20M, not $30M. The conversion test caps the non-participating investor at the as-converted share.'],
      ],
      'Participating preferred ("double dip") = preference + pro rata of remaining. Non-participating = the higher of preference or as-converted. The gap widens as exit value grows — $8M difference at $100M, much larger at $500M.'),
    q(4350403, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Participation cap',
      'A term sheet has 1x participating preferred with a 2x cap. The investor puts in $10M for 20%. At what exit value does the cap start to bind, and what does the investor receive at a $200M sale?',
      'The cap binds when total proceeds reach 2x ($20M). At $200M, participating math yields preference $10M + 20% × $190M = $48M; the cap binds, the investor takes the higher of $20M (cap) or $40M (as-converted) = $40M',
      [
        ['The cap binds at $50M because that is when the investor has $20M of returns', 'Cap binds when the participating math would exceed 2x ($20M). The math + comparison to as-converted is the right framing, not a hard threshold linked to total exit.'],
        ['The cap means the investor cannot earn more than $20M regardless of exit size', 'The cap is on the participating mechanic specifically. Above the cap, the investor can still convert to common and take the higher as-converted share, which uncaps the upside.'],
        ['The cap only applies if the company sells for less than 2x the preference', 'It is the reverse — the cap matters in higher exits where participation would otherwise yield more than the cap. Below the cap, participation pays out normally.'],
      ],
      'A capped participating preferred lets the investor choose: cap value, or convert to common. Above the cap, conversion wins. The cap turns participation from "double dip forever" into "double dip up to a ceiling, then standard conversion behavior."'),
    q(4350404, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Down-side exit preference math',
      'A company has $5M Series Seed, $15M Series A, and $40M Series B all at 1x non-participating preferred, senior-junior stack. It sells for $50M. Walk the waterfall.',
      'Series B receives $40M; remaining $10M goes to Series A (only two-thirds covered); Seed and common receive zero',
      [
        ['Each class receives pro rata of $50M based on dollars invested', 'That ignores seniority. Standard stacks pay junior-most class first in full before any senior class receives anything; pro rata sharing happens only within a class, not across.'],
        ['Series Seed receives their $5M first because earliest investors get priority', 'Earliest investors are typically most junior. Series Seed is at the bottom of the preference stack and gets wiped in a sub-$60M outcome here.'],
        ['Common receives the residual after all preferences', 'There is no residual here. $50M exit minus $60M of preferences = negative. Common gets zero whenever total preferences exceed exit proceeds.'],
      ],
      'In a sub-preference exit, the junior tranches and common are wiped. This is exactly why founders pay attention to the total preference stack accumulating across rounds — every new senior round pushes prior rounds down the waterfall.'),
    q(4350405, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Super pro rata',
      'A seed investor at 10% ownership asks for "super pro rata" rights at the Series A. What are they negotiating for?',
      'The right to invest more than their pro rata share in the next round — increasing ownership rather than merely maintaining it',
      [
        ['The right to invest less than pro rata while keeping anti-dilution protection', 'That is the opposite of super pro rata. Less than pro rata is a partial waiver, which dilutes the investor.'],
        ['A guaranteed allocation regardless of whether the company wants the capital', 'Super pro rata is a contractual right to participate above pro rata, but founders typically retain consent. It is a negotiated allocation, not a blank check.'],
        ['The right to take other investors\' pro rata shares automatically if they pass', 'That is pro rata waiver reallocation, sometimes a separate clause. Super pro rata specifically refers to a percentage above the existing stake.'],
      ],
      'Super pro rata is how seed investors defend or grow ownership through priced rounds. Founders push back because it shrinks the lead\'s allocation; whether it is granted often signals how much value the seed investor adds beyond capital.'),
    q(4350406, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Pro rata waiver',
      'A fund holds pro rata rights in a Series A breakout but has only $1M of reserves left in the vintage and three other companies asking. The Series A lead asks them to waive pro rata to make room. What is the right associate framing?',
      'Frame it as a portfolio construction decision: keep pro rata if the breakout return-impact exceeds reserving for the other three combined, waive if not — and negotiate a partial-pro-rata if there is middle ground',
      [
        ['Always exercise pro rata because waiving hurts ownership', 'Reserves are finite. Defending ownership in one company at the cost of three others is portfolio construction failure, not a victory.'],
        ['Always waive because the lead asked nicely', 'Politeness is not a reason. The fund\'s job is to maximize fund-level return, not to make leads comfortable.'],
        ['Take secondary instead of writing the pro rata check', 'Secondary on a hot round is rarely on offer at par to primary, and selling into a markup contradicts ownership defense logic. It is a fallback move, not a default.'],
      ],
      'Pro rata waiver is a reserves vs concentration trade-off. The right answer is rarely a reflex; it is portfolio math weighted by expected return-impact across the reserve set.'),
    q(4350407, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Anti-dilution variants',
      'A term sheet offers "broad-based weighted average anti-dilution." What does that mean compared to "full ratchet"?',
      'Broad-based weighted average adjusts the conversion price modestly based on the size and price of the new dilutive round; full ratchet resets the prior price to the new round price regardless of size',
      [
        ['Both terms describe the same mechanic; broad-based is just a longer name', 'They are materially different. Full ratchet is investor-friendly and rare in modern term sheets; broad-based is the standard and far more measured.'],
        ['Broad-based protects only common shareholders, full ratchet protects only preferred', 'Both protect preferred shareholders. The difference is the formula severity, not who is protected.'],
        ['Full ratchet only applies in IPOs, broad-based applies in private rounds', 'Anti-dilution applies to private down-rounds. Neither is IPO-specific; IPOs typically convert all preferred to common.'],
      ],
      'Broad-based weighted-average is the modern default and is roughly proportional to round-size impact. Full ratchet is punishing — even a tiny down round resets the entire prior conversion price. Most founders refuse full ratchet, and most institutional investors accept broad-based.'),
    q(4350408, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Anti-dilution math',
      'A Series A investor put in $10M at $5 per share (2M shares). The company does a down round at $2.50 per share for $5M new money, with 10M total shares outstanding before the down round. Under broad-based weighted average, roughly what new conversion price does the Series A end up at?',
      'About $4.17 per share — adjusted modestly toward the down-round price by the weighted-average formula',
      [
        ['$2.50 per share — the down-round price applies directly', 'That is full ratchet, not broad-based. Broad-based dampens the adjustment by weighting against total shares outstanding plus new money.'],
        ['$5.00 per share — broad-based does not actually adjust the price', 'Broad-based does adjust, just less severely than full ratchet. Saying it does not adjust at all is a common misread.'],
        ['$3.75 per share — split the difference between old and new', 'Splitting the difference is not the formula. Broad-based weights the old price by existing shares + new money raised at old price, divided by existing shares + new shares actually issued.'],
      ],
      'Broad-based weighted-average formula: new conversion price = old price × (existing shares + new money at old price) / (existing shares + new shares actually issued). Result here lands near $4.17, modestly down from $5 but well above $2.50. The investor gets some extra shares on conversion, but not the full ratchet windfall.'),
    q(4350409, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Board seat vs observer',
      'A seed lead asks for either a board seat or a board observer right. What is the practical difference for the company and the investor?',
      'Board seat carries voting power and fiduciary duties; observer can attend and speak but cannot vote and has lower legal exposure',
      [
        ['Both are voting positions; observer is just the cheaper name', 'Observers explicitly do not vote. Calling them a "cheaper voting seat" misrepresents the legal structure.'],
        ['Observer means the investor cannot speak in meetings', 'Observers typically can speak and contribute, just not vote. Many high-value investors prefer observer status to reduce legal exposure.'],
        ['Board seats have no fiduciary duty in early-stage companies', 'Fiduciary duty attaches to board members regardless of company stage. That duty is precisely why some investors prefer observer status — to advise without legal exposure.'],
      ],
      'Observer rights give influence without the legal weight of a directorship. Many experienced investors choose observer rather than full board seats specifically to reduce conflict risk across portfolio companies. Founders prefer observers to seats because the cap table fills up with directors otherwise.'),
    q(4350410, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Board composition at seed',
      'A seed-stage company is setting up its first formal board. The lead investor proposes a 3-person board: one founder, one investor, one mutually agreed independent. Why is this structure common at seed?',
      'It balances founder voice, investor governance, and an independent tie-breaker — small enough to be efficient, broad enough to avoid 1-on-1 deadlocks',
      [
        ['It guarantees the lead investor can pass any resolution', 'A 3-person board with one investor seat does not give the investor control. The lead needs the independent to side with them on contested votes.'],
        ['It is required by Delaware law for venture-backed companies', 'Delaware does not mandate board size for private companies. Board structure is contractual, not statutory.'],
        ['Larger boards always make better decisions', 'Larger boards are slower and harder to coordinate. Seed-stage companies usually keep boards small and add seats at Series A or B as needed.'],
      ],
      'A 2-1-2 or 1-1-1 board at seed is conventional. The independent seat matters more than people think — it is the swing vote on contested decisions like CEO succession or M&A. Picking a good independent is part of governance design, not an afterthought.'),
    q(4350411, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Independent board seat',
      'At Series A, the founders and lead investor are debating whether to add an independent director. The founders worry it dilutes their control. What is the most useful framing for them?',
      'The independent is a tie-breaker and a source of outside operating experience; if chosen jointly, they protect against founder-investor deadlock and add expertise that neither side has',
      [
        ['Independents are window dressing and rarely vote', 'A well-chosen independent is often the most active board member because they have no other conflict. Treating them as window dressing wastes the seat.'],
        ['Independents are controlled by the investor and serve as a second investor vote', 'A true independent is jointly approved and has no fiduciary alignment with the investor. If they functionally vote with the investor every time, the choice was bad.'],
        ['Founders should refuse any non-employee, non-investor seat as a matter of principle', 'That principle costs the company access to operating expertise and a tie-breaker for hard calls. Refusing independents categorically is bad governance design.'],
      ],
      'A good independent is the most underrated board mechanic at Series A. They break deadlocks, model executive behavior, and bring relationships neither side has. Bad independents are passive or captured; the choice matters more than the seat count.'),
    q(4350412, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Protective provisions',
      'A term sheet lists "protective provisions" requiring investor consent for certain major decisions. Which decision is typically gated?',
      'Sale of the company, raising new senior preferred, and changing the share class structure — major economic events that affect the investor\'s preference',
      [
        ['Day-to-day hiring decisions below the C-suite', 'Protective provisions cover structural and economic decisions, not operational hiring. Investors who veto everyday hires are micromanaging, not governing.'],
        ['Marketing budget approvals over $10K', 'Marketing spend is operational. Protective provisions are for terms that change the investor\'s economic position.'],
        ['The founder\'s personal email signature line', 'Protective provisions are not about personal preferences. They protect specific economic rights tied to the security.'],
      ],
      'Protective provisions are the "supermajority required" list. They include M&A, raising senior or pari-passu preferred, dividend changes, charter amendments, and changes to the preferred series itself. They give minority preferred holders a veto on the decisions that would otherwise wipe their economics.'),
    q(4350413, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Founder vesting',
      'A solo founder is closing a seed round and the investor proposes 4-year founder vesting with a 1-year cliff. The founder asks why this applies if they already own the shares. What is the cleanest explanation?',
      'Founder vesting means the company can repurchase unvested shares at cost if the founder leaves; it protects remaining founders and investors against a co-founder walking away with full equity',
      [
        ['Vesting prevents the founder from selling shares before exit', 'That confuses vesting with transfer restrictions. Vesting only affects what happens if the founder leaves; while they stay, they keep the shares.'],
        ['Vesting means the founder pays the investor for the shares over four years', 'No payment is involved. Vesting is a repurchase right on the company side, exercised only if the founder departs.'],
        ['Vesting is a tax requirement under U.S. law', 'Vesting affects 83(b) elections and tax treatment but is not a legal requirement. It is a contractual norm investors insist on for alignment.'],
      ],
      'Founder vesting solves the "co-founder leaves in year two with all their shares" problem. Standard is 4-year with a 1-year cliff. Solo founders also accept it because investors will not invest otherwise; the alignment logic still holds.'),
    q(4350414, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Vesting cliff mechanics',
      'A founder is 11 months into a 4-year vesting schedule with a 1-year cliff. They decide to leave. How much of their stock has vested?',
      'Zero — the 1-year cliff means no shares vest until the full first year is completed; leaving at month 11 means losing all unvested equity',
      [
        ['11/48 — 11 months of pro rata vesting', 'That ignores the cliff. The cliff is exactly the mechanism that converts month-by-month vesting into a one-year hold-or-lose-it structure for the first year.'],
        ['25% — the first year vests fully on day one and is irrevocable', 'The cliff is the inverse: nothing vests until month 12, at which point 25% vests in one cliff event. Leaving before then forfeits everything.'],
        ['100% — vesting only matters if the founder is fired, not if they quit voluntarily', 'Vesting applies to any termination of service, voluntary or involuntary. Founders walking away pre-cliff lose everything.'],
      ],
      'The cliff is brutal but intentional. It ensures that a co-founder who flames out in the first nine months walks away with no equity. Past the cliff, vesting moves to monthly accrual at 1/48 per month for the remaining three years.'),
    q(4350415, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Single vs double trigger acceleration',
      'A founder is negotiating acceleration on a change of control. The investor offers "double-trigger" acceleration. What does that mean?',
      'Both a change of control AND involuntary termination within a window are required for acceleration to vest unvested equity; single-trigger would vest on the change of control alone',
      [
        ['Two events must happen at the same time, like a sale and an IPO', 'The two triggers are change of control plus termination, not two simultaneous corporate events.'],
        ['Acceleration kicks in only after the second board meeting following the sale', 'Triggers are corporate and employment events, not meeting counts.'],
        ['The founder gets twice the acceleration of a single-trigger', 'Both single and double trigger typically accelerate 50-100% of unvested equity; the difference is what events trigger it, not how much accelerates.'],
      ],
      'Double-trigger is the modern norm because it protects acquirers from buying a company whose founders all vest and leave immediately. Single-trigger is rare and acquirer-hostile. Acceleration percentage (50% vs 100%) is a separate negotiating point.'),
    q(4350416, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Acceleration negotiation',
      'A founder wants 100% single-trigger acceleration on change of control. The lead investor pushes back. What is the most useful negotiation framing for the founder to take?',
      'Accept double-trigger with 50-100% acceleration — protects against being fired post-acquisition without scaring acquirers away from the deal',
      [
        ['Hold firm on 100% single-trigger because anything less is investor manipulation', 'Single-trigger acceleration measurably depresses acquisition offers because acquirers price in the founder retention risk. Holding firm can cost the founders more than it gains.'],
        ['Accept zero acceleration because acquirers value clean cap tables', 'Zero acceleration leaves founders with no protection if they are terminated immediately post-close. Some acceleration is standard.'],
        ['Push for triple-trigger to maximize protection', 'Triple-trigger is not a standard term. Adding triggers reduces protection rather than increasing it — each additional condition is another way the right does not activate.'],
      ],
      'Double-trigger with meaningful acceleration percentage is the realistic ask. It says: "If the company is sold and I am fired in the new structure, my equity vests." Acquirers can live with that; the founder gets real protection. The investor accepts because the trigger requires actual termination, not just a sale.'),
    q(4350417, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Information rights',
      'A seed investor at 8% ownership negotiates information rights. What is reasonable to ask for at that stake?',
      'Quarterly financials, an annual budget, and reasonable access to management — without daily operational data dumps',
      [
        ['Real-time access to the company\'s bank account', 'Real-time financial access is not standard and would create operational burden. Information rights are about periodic visibility, not live observability.'],
        ['Approval rights over every hiring decision', 'Information rights are reporting rights, not approval rights. Approval rights are governance, which comes through board seats or protective provisions.'],
        ['The right to publish the company\'s metrics to LPs verbatim', 'Information rights almost always include confidentiality. LP communication about portfolio companies happens at aggregate or specifically permitted levels.'],
      ],
      'Information rights scale with ownership and value-added. Quarterly financials and an annual operating plan are the floor; major investors get monthly KPI packages plus standard board materials. Information overload is a real cost to early-stage founders — ask for what you will actually use.'),
    q(4350418, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Side letter and MFN',
      'A small fund negotiates a side letter with the company. What is the most common protection they ask for?',
      'A "most-favored-nation" (MFN) clause — if any other investor in the same round receives better terms via side letter, this investor gets the same',
      [
        ['Guaranteed first look at any future round regardless of price', 'That is super pro rata or a right of first refusal, not a side letter MFN. MFN is about parity with other side-letter terms, not new-round access.'],
        ['Personal liability protection for the fund\'s GP', 'Personal liability protection sits in fund formation documents, not in the company side letter. Side letters are between the fund and the portfolio company.'],
        ['The right to vote the lead investor\'s shares', 'No side letter transfers voting rights from another investor. Voting is share-attached.'],
      ],
      'MFN side letters are how smaller LPs and funds avoid being side-stepped when larger investors negotiate sweeter terms. They are common, low-friction, and read as "what they got, we get too." Worth asking for in any non-lead position.'),
    q(4350419, 'Career Skills', 'Terms, Memo, and Investment Decision', 'MFN clause interpretation',
      'A seed investor has an MFN clause from the original financing. At Series A, the new lead negotiates a side letter granting expanded information rights and a board observer seat. What does the MFN entitle the seed investor to?',
      'The expanded information rights and observer seat — MFN reaches any improved terms in the relevant scope, not just price-related ones',
      [
        ['Nothing — MFN only applies to economic terms, not governance', 'Most MFN clauses are broad and reach any terms, not just economics. Reading "economics-only" into MFN is a frequent associate mistake.'],
        ['Only the information rights, because observer seats are not contractual', 'Observer rights are contractual and assignable. The MFN would reach this.'],
        ['Only if the seed investor matches the Series A check size', 'MFN parity is not contingent on writing the new check. That would be pro rata participation, not MFN.'],
      ],
      'MFN is broader than associates expect. It can convert a quiet side letter to the lead into a portfolio-wide upgrade in rights. Founders should read MFN scope carefully before granting it; investors should read scope carefully before relying on it.'),
    q(4350420, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Drag-along',
      'A term sheet includes a drag-along right that activates with majority preferred consent and majority board consent. What does this allow?',
      'Investors holding the requisite majority can force minority shareholders (including common) to vote for and participate in a sale of the company on the same terms',
      [
        ['Investors can force the company to raise more capital', 'Drag-along is about exits, not financings. Forcing financing is not what drag-along does.'],
        ['Investors can force individual founders to stay on through the sale process', 'Drag-along forces voting and share transfer, not employment. Founder retention post-sale is a separate negotiation with the acquirer.'],
        ['Minority shareholders can block sales they disagree with', 'That is the opposite of drag-along. Drag-along specifically eliminates that block; it exists because minority blocks would otherwise prevent sales.'],
      ],
      'Drag-along is how venture-backed sales actually close — without it, a single dissenting common holder could block a $500M acquisition. The activation threshold (typically 50%+ preferred and majority board) is what associates should look at closely.'),
    q(4350421, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Tag-along vs drag-along',
      'A founder is selling secondary shares to an outside buyer. The early seed investor has a tag-along right. What can they do?',
      'Participate in the sale on the same terms — selling a pro rata portion of their own shares alongside the founder',
      [
        ['Block the sale until they approve the buyer', 'That is a ROFR (right of first refusal), not tag-along. Tag-along grants participation, not veto.'],
        ['Force the founder to sell additional shares to satisfy the investor\'s exit', 'Tag-along is participation alongside, not force. Forcing additional founder dilution is not how tag-along works.'],
        ['Take the founder\'s shares at cost basis instead of letting them sell externally', 'Taking shares at cost basis would be punitive and is not what tag-along does. Tag-along simply joins the same transaction.'],
      ],
      'Tag-along protects minority investors from being left behind when a majority holder finds liquidity. Drag-along forces minorities into a sale; tag-along lets minorities join a sale. Both clauses appear in well-drafted financings.'),
    q(4350422, 'Career Skills', 'Terms, Memo, and Investment Decision', 'ROFR mechanics',
      'A founder wants to sell secondary shares to a new outside investor at a strong markup. The company and existing investors hold ROFR. What does the founder need to do?',
      'Notify the company and existing investors of the proposed terms; they have a defined window to match the offer before the outside sale can close',
      [
        ['Get unanimous board approval before any external conversation', 'ROFR is a structured notice-and-match right, not a vote. The board does not need to pre-approve the external conversation itself.'],
        ['Sell to existing investors at a discount because they have priority', 'ROFR is a right to match the external price, not to buy at a discount. The whole point is that existing holders pay the same the external buyer would.'],
        ['Cancel the sale because ROFR makes secondary impossible', 'ROFR does not block secondary; it gives existing parties first opportunity at the same terms. If they pass, the external sale proceeds.'],
      ],
      'ROFR is a notice + matching window mechanism. It does not prevent secondary; it just lets existing holders absorb the shares first at the offered price. Most cap tables have ROFR plus tag-along — different protections for different stakeholders on the same transaction.'),
    q(4350423, 'Career Skills', 'Terms, Memo, and Investment Decision', 'SAFE vs convertible note',
      'A founder asks the associate to explain the practical difference between a SAFE and a convertible note for a $1M pre-seed.',
      'A SAFE is an equity instrument with no maturity or interest; a convertible note is debt with a maturity date and accrues interest, both convert to equity in the next priced round',
      [
        ['SAFEs are debt, convertible notes are equity', 'That reverses the actual structure. SAFE = Simple Agreement for Future Equity (equity); convertible note = note (debt).'],
        ['Both instruments require monthly interest payments to the investor', 'SAFEs have no interest. Notes accrue interest but typically do not require monthly cash payments; the interest converts with principal at the priced round.'],
        ['SAFEs always convert at a higher price than notes', 'Conversion price depends on the cap and discount, not on instrument type. There is no built-in price premium for either form.'],
      ],
      'SAFEs are simpler and friendlier to founders (no maturity, no interest, no creditor status). Notes are slightly investor-friendlier (interest accrual, maturity date as a forcing function). The choice usually reflects investor preference and what is standard in the market when the round is done.'),
    q(4350424, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Pre-money vs post-money SAFE',
      'A founder uses a post-money SAFE at a $20M cap rather than a pre-money SAFE at the same cap. What is the practical difference at conversion?',
      'A post-money SAFE locks the SAFE holder\'s ownership percentage at conversion — they get exactly cap-share of post-conversion fully-diluted equity, regardless of how many other SAFEs convert alongside',
      [
        ['No practical difference — the cap is the same number', 'The cap is calculated against different bases. Post-money SAFEs are tighter for the founder because additional SAFEs dilute the founder, not the SAFE holders.'],
        ['Post-money SAFEs convert at half the cap of pre-money SAFEs', 'There is no automatic 50% adjustment. The same headline cap on a post-money basis is generally more dilutive to founders.'],
        ['Pre-money SAFEs convert faster than post-money SAFEs', 'Conversion timing is the same — at the next priced round. The difference is conversion math, not speed.'],
      ],
      'YC\'s 2018 switch to post-money SAFEs was a meaningful change. On a post-money SAFE, the investor knows their exact percentage at the next round; on a pre-money SAFE, that percentage depends on how many other SAFEs convert alongside. Founders frequently misread the dilution impact of stacking post-money SAFEs.'),
    q(4350425, 'Career Skills', 'Terms, Memo, and Investment Decision', 'SAFE cap and discount',
      'A SAFE has a $10M cap and a 20% discount. The next priced round is at $15M pre-money. Which governs the conversion price?',
      'The cap governs — converting at the $10M cap valuation is more favorable to the SAFE holder than a 20% discount on $15M ($12M effective)',
      [
        ['The discount governs because it always wins', 'The SAFE typically converts at the lower of cap or discount. Here, cap ($10M) is lower than discount-adjusted price ($12M), so cap wins.'],
        ['Both apply simultaneously, stacking to a 40% effective discount', 'Cap and discount do not stack. The SAFE converts at the better of the two for the investor — whichever produces a lower conversion price.'],
        ['The next-round price always governs regardless of SAFE terms', 'That would defeat the purpose of cap and discount. The SAFE holder gets the benefit of the more favorable of the two prior-negotiated mechanisms.'],
      ],
      'Cap and discount are alternatives, not additives. The SAFE typically converts at the better of the two for the holder. As the priced round\'s valuation grows past the cap, cap binds; below it, discount may be more favorable. Modeling both at conversion is associate-level table stakes.'),
    q(4350426, 'Career Skills', 'Terms, Memo, and Investment Decision', 'MFN on a SAFE',
      'A SAFE includes an MFN provision. Six months later the founder issues additional SAFEs with a lower cap. What happens?',
      'The MFN-holder gets the option to swap their SAFE terms for the new SAFE terms, including the lower cap — leveling the holder up to whichever later terms are more favorable',
      [
        ['Nothing — MFN does not apply to instruments issued after the original SAFE', 'MFN specifically applies to subsequent issuances of comparable instruments. That is its whole purpose on a SAFE.'],
        ['The MFN-holder receives a cash refund for the difference in cap value', 'MFN swaps terms, not cash. The economic value comes through the upgraded conversion, not a payment.'],
        ['The new SAFE holders match up to the original SAFE\'s cap', 'That would be the reverse. MFN protects the earliest holder by letting them take the newer (better) terms, not by dragging the newer holders to the older terms.'],
      ],
      'MFN on a SAFE is the early investor\'s protection against the founder issuing better terms to later investors. It pressures founders to keep cap discipline; if you give a lower cap to a later SAFE, every prior MFN-holder gets to claim it.'),
    q(4350427, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Note interest accrual',
      'A $500K convertible note accrues 6% simple interest. At conversion 18 months later in a priced round, how much principal-plus-interest converts?',
      'About $545K — $500K + ($500K × 0.06 × 1.5) = $500K + $45K interest = $545K, dividing by conversion price to get share count',
      [
        ['$500K — interest is paid in cash separately at maturity', 'Convertible notes typically convert principal plus accrued interest into equity at conversion. Cash interest payments are rare on venture notes.'],
        ['$590K — interest compounds monthly at 6% annual', 'Most venture notes use simple interest, not monthly compounding. At simple interest 6% × 1.5 years = 9%, yielding $545K, not $590K.'],
        ['$530K — interest stops at month 12 even though conversion is at month 18', 'Interest accrues until conversion or repayment, not just for the first year. Unless the note caps interest by term, the full duration applies.'],
      ],
      'Note conversion includes accrued interest, which slightly dilutes founders relative to the headline principal. On a small note this is a rounding error; on a larger $5M-10M note stack at 8% over two years, the interest can convert into a non-trivial extra ownership chunk that founders forget to model.'),
    q(4350428, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Option pool shuffle math',
      'A founder is raising $5M at $20M post-money. The investor requires a 10% post-money option pool created pre-money. What is the effective pre-money valuation the founder is really getting?',
      'About $13.5M — the pre-money is $15M nominally, but pulling 10% of post-money ($2M) out of pre-money equity reduces the founder\'s effective valuation by that amount',
      [
        ['$15M — pre-money is pre-money, the option pool does not affect it', 'That is the headline; the economic reality is different. A pre-money pool reduces the founder\'s effective price per share because the pool dilutes them, not the new investor.'],
        ['$20M — the post-money is the founder\'s valuation', 'Post-money includes the new money. Founder valuation is pre-money basis, adjusted for the option pool shuffle.'],
        ['$10M — the pool takes half the pre-money', 'A 10% pool takes 10% of post-money ($2M), not 50% of pre-money. The math gives $13.5M effective, not $10M.'],
      ],
      'Option pool shuffle is the most-missed term-sheet trick. The headline pre-money is not what the founder actually sells at — the pre-money pool reduces founder ownership effectively before the new investor buys their shares. Always re-quote the effective pre-money before celebrating a high headline number.'),
    q(4350429, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Option pool sizing',
      'A founder has agreed to a 12% post-money option pool but the hiring plan only needs 7% over the next 18 months. What is the practical consequence?',
      'The founder over-dilutes themselves by ~5 points to fund options that will not actually be granted; the right move is to negotiate the pool to match the hiring plan',
      [
        ['No consequence — unused options expire and return to founders', 'Unused pool options sit in the pool, not in founder hands. They are typically used in subsequent rounds or absorbed by the next round\'s pool refresh, which compounds dilution.'],
        ['The investor returns the dilution at next round to fairness-balance', 'Investors do not return dilution. The unallocated pool is dilutive to whoever bears the pool refresh — usually the founder again at Series A.'],
        ['Larger pools always increase the company\'s value', 'A pool that exceeds hiring needs is a pure dilution transfer from founders to no-one. It has no operational value.'],
      ],
      'Right-sizing the option pool to the hiring plan is one of the highest-leverage founder negotiations in a term sheet. Investors prefer larger pools (less dilution at next refresh); founders should defend by walking through actual headcount and equity grants planned in the window.'),
    q(4350430, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Pay-to-play execution',
      'A pay-to-play provision triggers in a down round. An existing preferred investor takes only half of their pro rata. What is the typical mechanical consequence?',
      'A pro rata portion of their preferred converts to common, losing the preferences (liquidation, anti-dilution) on the converted portion',
      [
        ['They lose their entire preferred position regardless of partial participation', 'Most pay-to-play conversions are pro rata to participation shortfall. Partial participation loses partial preferences, not all of them.'],
        ['They are required to sell their shares back to the company at original cost', 'Pay-to-play converts, it does not redeem. The investor still holds the shares; they just become common.'],
        ['They are excluded from board representation but keep all economic rights', 'Pay-to-play conversion strips economic preferences (liquidation, anti-dilution). It is precisely the economic rights that go, not just governance.'],
      ],
      'Pay-to-play is the cleanup tool in a down round. It turns hesitant existing investors into either supporters (write the check) or unprotected common holders (lose preferences). Executing the conversion takes a few weeks of legal work but is mechanically straightforward; the friction is usually political.'),
    q(4350431, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Pay-to-play in washout',
      'A washout round at $5M pre-money on a company with $40M of stacked preferences requires pay-to-play. Three of seven prior investors decline to participate. What happens to them?',
      'Their preferred converts to common, they are no longer in the preference stack, and their economic position is dramatically reduced — the survivors\' preferences dominate the cap table',
      [
        ['They receive a cash redemption at par value', 'Cash redemption is a different mechanic (redemption rights). Pay-to-play converts to common, it does not cash out.'],
        ['They retain preferred but lose anti-dilution only', 'Standard pay-to-play conversion is full to common, not selective stripping of one right. Some deals are structured selectively, but the default is full conversion.'],
        ['They keep their preferred and the round cannot close', 'A properly drafted pay-to-play does not give individual investors veto. The conversion happens automatically when participation is below threshold.'],
      ],
      'Washout rounds with pay-to-play are how venture cap tables get cleaned up after a hard reset. The non-participants take a brutal economic hit, which is the whole point — it forces re-up commitment from investors who genuinely believe, and removes economic interest from those who do not.'),
    q(4350432, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Cumulative dividends',
      'A term sheet includes 6% cumulative dividends on the preferred. Five years pass with no dividend declared. What happens at a $100M exit on a $20M preferred position?',
      'The accrued dividends ($20M × 6% × 5 = $6M, simple) are paid before common participation, on top of the $20M preference — a $26M preferred return before common gets anything',
      [
        ['Dividends are forgiven if never declared during the holding period', 'That is non-cumulative dividends. Cumulative explicitly accrue regardless of declaration and must be paid out before common gets anything.'],
        ['Dividends only apply if the company is profitable in any year', 'Cumulative dividends are contractual accruals, not profit-contingent. They accrue whether the company is profitable or not.'],
        ['The 6% rate applies to the founder\'s common shares too', 'Dividends are typically a preferred-class right, not a common right. Founders only get a share of dividends if the term explicitly grants it.'],
      ],
      'Cumulative dividends are a quiet drag on exit proceeds for common holders. Over 5-7 years at 6-8%, they can compound into a 40-50% additional preference on top of the original capital. Investors push for them; founders push back; most modern Series A and B avoid them in favor of cleaner preference stacks.'),
    q(4350433, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Redemption rights',
      'A Series A term sheet includes redemption rights after year 5 at 1x cost. What is the practical reality of redemption?',
      'Redemption is rarely exercised because the company usually cannot afford it, but it creates pressure for liquidity events and signals investor patience limits',
      [
        ['Investors regularly cash out via redemption at year 5', 'Most venture-backed companies cannot pay a cash redemption — they have no excess cash. Redemption is leverage, not a real cash-out mechanism in most cases.'],
        ['Redemption is automatic at the 5-year mark', 'Redemption is investor-initiated at the holder\'s option, not automatic. Most investors hold past the trigger window because they have no use for $20M of capital back in a fund context.'],
        ['Redemption eliminates the investor\'s ability to participate in upside', 'If exercised, yes. But the optionality remains — investors can hold and choose to redeem or stay. It is a put option, not a forced surrender of upside.'],
      ],
      'Redemption rights are a forcing function for liquidity, not a real cash-out path in most companies. They show up in late-stage terms more than early, and the threat alone often produces a sale or recap conversation. Few deals see actual redemption; many see redemption-triggered negotiations.'),
    q(4350434, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Registration rights',
      'A Series B term sheet includes demand and piggyback registration rights. What do these grant the investor in an IPO context?',
      'Demand: the right to require the company to register their shares for public sale; piggyback: the right to include their shares in any registration the company initiates',
      [
        ['Demand: voting rights at the IPO; piggyback: a discount on IPO shares', 'Registration rights are about share registration for resale, not voting or pricing.'],
        ['Both grant the investor the right to set the IPO price', 'IPO pricing is set by the underwriters and the company. Investors do not set the price even with registration rights.'],
        ['Demand applies to common only; piggyback applies to preferred only', 'Registration rights typically apply to the investor\'s shares regardless of class at registration time. Restricted-share status matters more than original class.'],
      ],
      'Registration rights are largely dormant until an IPO is in play, but they matter at that point because they determine which secondary sellers can join the offering. Demand rights are rarely exercised forcefully (it strains the company relationship); piggyback rights are exercised routinely.'),
    q(4350435, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Memo failure mode: over-quantitative',
      'An associate writes a 22-page IC memo for a Series A deal, half of which is detailed financial modeling and sensitivity tables. The partnership pushes back. What is the most likely problem?',
      'The memo buries the thesis under quantitative detail; it shows analysis but not judgment, leaving the partnership to construct the recommendation themselves',
      [
        ['The numbers are wrong and the partnership noticed', 'The complaint is structural, not arithmetic. Even right numbers presented without judgment fail the IC test.'],
        ['Partnership prefers short memos under any circumstances', 'Length is not the issue; structure is. A 22-page memo with a clear thesis and recommendation can pass; a 6-page memo without one will fail.'],
        ['The associate should have built more sensitivity scenarios', 'More sensitivities would make the over-quantitative problem worse. The fix is to reduce the math footprint and elevate the judgment.'],
      ],
      'Over-quantitative memos are a common associate failure. The model is the workpaper, not the memo. The memo states the thesis, the evidence, the risks, the mitigants, and the recommendation; the model lives in an appendix or a separate file for partners who want to interrogate it.'),
    q(4350436, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Memo failure mode: hidden risk',
      'An associate writes a glowing IC memo. In partnership discussion, a partner asks about retention; the associate admits logo retention is 65% but says it "did not feel important to highlight." What is the cost of this pattern?',
      'Hidden risks always resurface, usually at the worst moment — the associate loses partnership trust for future memos, and the deal is now defended from a weaker position than if the risk had been front-loaded',
      [
        ['Minimal cost — partners catch what matters in discussion anyway', 'The cost is large: trust is the associate\'s most valuable asset. A memo that hid one risk is presumed to hide more on the next deal.'],
        ['The associate should have argued more forcefully that retention was fine', 'Arguing past a real number is worse than hiding it. The fix is to surface and reason about the risk, not to obfuscate harder.'],
        ['The deal will fail because of the retention issue', 'The deal may or may not fail. The professional failure is the omission, not the metric — and that failure is on the associate regardless of deal outcome.'],
      ],
      'Hidden-risk memos are how associates lose partnership trust. The right pattern is to surface every material risk explicitly, propose mitigants, and name kill criteria. Partners reward the associate who brings them the hard fact early; they distrust the associate who brings it up only when cornered.'),
    q(4350437, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Lead vs co-investor diligence',
      'A fund is co-investing in a Series A led by a top-tier firm. The lead has done 6 weeks of diligence. How much of that diligence should the co-investor rely on vs replicate?',
      'Rely on the lead\'s baseline diligence but independently verify the 2-3 most material risks specific to the co-investor\'s thesis — never co-invest on someone else\'s memo alone',
      [
        ['Replicate every reference call and customer interview the lead did', 'Full replication wastes founder time and the co-investor\'s resources. The lead has done it; verification of key risks is the right delta.'],
        ['Rely entirely on the lead — they have already validated the deal', 'The lead\'s thesis may differ from the co-investor\'s, and their risk tolerance may differ. Pure reliance means inheriting their blind spots without examining them.'],
        ['Co-investors do not need to do diligence; that is the lead\'s job', 'Every investor signs their own check. Skipping diligence because the lead exists is a path to losing money on a deal that fit the lead\'s portfolio but not yours.'],
      ],
      'Co-investor diligence is the highest-leverage activity in venture: 2-3 calls to verify the most material risks, layered on the lead\'s package. Doing zero is reckless; doing full replication is wasteful. The middle path is targeted validation of what specifically threatens the thesis.'),
    q(4350438, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Pricing discipline on a hot deal',
      'A founder shows a competitive term sheet at $80M post-money on $1M ARR. The associate\'s comps suggest the fair range is $40-50M. The partnership wants to know whether to match the price.',
      'Justify the premium with specific thesis-level reasoning — outlier founder, defensible moat, category timing — or walk away; matching price without that reasoning is paying premium for the privilege of feeling included',
      [
        ['Match the price because losing the deal is worse than overpaying', 'Overpaying on a long enough tail of deals is how funds underperform. "FOMO is not a thesis" is a cliche because it is true.'],
        ['Offer half because that is the comps midpoint', 'Half is a number, not an argument. The partnership needs a reason to either pay or pass, not a split-the-difference reflex.'],
        ['Demand the founder reduce the price unilaterally', 'Founders with competitive sheets do not reduce price on demand. The leverage is the associate\'s — either justify the premium internally or pass.'],
      ],
      'Pricing discipline is anti-anchoring discipline. Hot deals create pressure to accept a high number because everyone else seems to; the antidote is to anchor on comps and forward-revenue math, then either name a reason the premium is justified or pass. "We paid up because they were hot" is the worst possible memo line at year 5.'),
    q(4350439, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Allocation against fund construction',
      'A $150M seed fund typically writes $3-4M checks for ~10% ownership. A specific deal offers them only $1.5M allocation at 3% ownership in a strong company. What is the right framing?',
      'A $1.5M check is too small to matter at the fund-level even if the company succeeds — either negotiate up to a meaningful allocation or pass, because sub-scale positions waste a portfolio slot',
      [
        ['Take the $1.5M because some allocation is better than none', '"Some is better than none" ignores opportunity cost. Each portfolio slot has a return ceiling; sub-scale positions cap upside on a slot that could hold a meaningful check.'],
        ['Take the $1.5M and supplement via secondary later', 'Secondary in successful private companies is rarely available at par and is expensive when it is. Building position via secondary is not a primary strategy.'],
        ['Take the $1.5M for relationship reasons only', 'Relationship-only checks corrode portfolio construction. Funds that write them routinely end up with diluted return distributions and slot exhaustion.'],
      ],
      'Allocation discipline is unsexy but decisive. A fund of size N writing checks of size M with target ownership O has a finite number of positions; spending one on a sub-scale check costs a future position. Either you have a real position or you do not.'),
    q(4350440, 'Career Skills', 'Terms, Memo, and Investment Decision', 'Negotiation: fight vs concede',
      'A lead investor\'s term sheet has: 1x non-participating preferred (standard), 2x participating preferred (aggressive), broad-based anti-dilution (standard), full board control (aggressive), 4-year founder vesting (standard). The founder asks which terms to fight on.',
      'Fight the 2x participating preferred and the full board control; concede on the standard terms; trade — if needed, accept one aggressive term to push back the other',
      [
        ['Fight all five because investors should accept founder-friendly terms', 'Fighting standard terms is how founders signal inexperience. Investors expect 1x non-participating, broad-based anti-dilution, and 4-year vesting; refusing them slows the deal without gain.'],
        ['Concede everything because investor pressure means market terms', 'Conceding aggressive terms because they were offered does not make them market. The 2x participating and full board control are not market for a normal Series A and should be pushed back hard.'],
        ['Negotiate only the headline valuation; terms do not matter', 'Terms compound. A 2x participating preferred on a $20M check is worth more economically than $5M of headline valuation. Negotiating valuation while accepting bad terms is a losing trade.'],
      ],
      'Pick fights on terms that are economically meaningful AND outside market. Concede on standard terms quickly to build credibility for the real fights. Anchor-and-trade is the practical pattern — give on one aggressive term to roll back another, and document the trades clearly so nothing is conceded twice.'),

    // Chapter 6: Portfolio Support and Follow-On Decisions
    // Difficulty arc: simple math (runway) → operating support (board update, milestone planning) → judgment under constraint (reserve allocation, bridge triage, markup signaling).
    q(4105062, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Runway math',
      'A portfolio company has $4.8 million of cash and burns $400,000 per month. If burn stays flat, what is its runway?',
      '12 months',
      [
        ['4 months', '4 months would require $1.2M/month of burn ($4.8M / 4), three times the actual rate.'],
        ['8 months', '8 months implies $600K/month of burn — 50% higher than stated.'],
        ['24 months', '24 months would require $200K/month of burn ($4.8M / 24), half the actual rate.'],
      ],
      'Runway equals cash divided by monthly burn. Here, 4.8 million / 400,000 = 12 months before any financing or burn changes.'),
    q(4103006, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Board update triage',
      'A portfolio company misses plan, cash runway falls to nine months, and enterprise pipeline slips. What is the most useful investor follow-up?',
      'Focus on runway, burn reduction options, pipeline quality, and the milestones needed before the next raise',
      [
        ['Ask for a prettier update template first', 'Template aesthetics do not affect runway. The cash clock keeps ticking regardless of slide design.'],
        ['Wait until runway is one month because early planning is distracting', 'Nine months is barely enough time to either raise or restructure. Waiting until one month forecloses every option.'],
        ['Discuss only branding because revenue is uncomfortable', 'Avoiding the revenue conversation is how companies die. Investor value comes from engaging the hard problems.'],
      ],
      'Portfolio work is practical. When plan and runway deteriorate, the investor should help clarify cash, milestones, financing options, and operating priorities.'),
    q(4105063, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Milestone planning',
      'A Series A company has 14 months of runway and needs stronger enterprise proof before Series B. What is the best investor support?',
      'Define the few revenue, retention, and pipeline milestones that make the next round credible',
      [
        ['Encourage hiring across every function immediately', 'Mass hiring burns the runway that buys time for the milestones. Hire to milestones, not in advance of them.'],
        ['Wait until the final month to plan fundraising', 'Series B prep needs 4–6 months of pipeline-building. Starting in month 13 of 14 leaves no margin.'],
        ['Tell the company that valuation will solve execution gaps', 'Valuation is set by traction, not the reverse. A great valuation does not appear without the underlying milestones.'],
      ],
      'Portfolio support should connect runway to fundable milestones. Clear operating proof gives founders a better chance to raise from strength.'),
    q(4107785, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Follow-on reserve choice',
      'A fund has limited reserves and two portfolio companies asking for support, one with strong new proof and one mostly hoping. What should guide the decision?',
      'Use evidence, ownership goals, financing path, and expected return impact to allocate reserves',
      [
        ['Split the money evenly to avoid awkward calls', 'Reserves are finite and follow conviction. Splitting evenly funds the weaker outcome and underfunds the winner.'],
        ['Fund the loudest founder first', 'Volume does not equal merit. Allocating to noise rather than evidence is how reserves get wasted.'],
        ['Make reserve decisions only when companies are almost out of cash', 'Out-of-cash decisions happen under duress with no leverage. Reserve planning belongs earlier in the cycle.'],
      ],
      'Reserve decisions are portfolio construction in miniature. Support should follow evidence and expected fund impact, with empathy intact.'),
    q(4107315, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Bridge round triage',
      'A portfolio company has six months of runway, improving retention, and a Series A likely needs two more quarters of proof. What should the investor help decide?',
      'Whether a bridge, burn reduction, or milestone reset gives the company a credible financing path',
      [
        ['Wait five months before discussing cash', 'Six months is already tight. Waiting five more leaves a single month to execute either a raise or a wind-down.'],
        ['Raise prices across all customers without diligence', 'Untested pricing changes break customer trust and may not even move revenue in time to matter.'],
        ['Send a glossy update with no runway math', 'Glossy updates without numbers signal trouble to LPs and existing investors. Transparency is more valuable than polish.'],
      ],
      'Portfolio triage connects cash, evidence, and financing options. Early planning keeps a tough situation from becoming a calendar emergency.'),
    q(4280050, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Markup signaling',
      'A fund\'s seed investment marks up 6x on a Series B led by a top-tier firm. What is the most honest read for the GP\'s own LPs?',
      'The markup is a paper signal — informative because a credible new lead repriced the company, but it is unrealized and reversible until DPI converts the gain to cash',
      [
        ['Treat the markup as a realized return for the fund', 'Markups are unrealized NAV. They count for TVPI but not for DPI; LPs are paid in cash, not in marks.'],
        ['Discount the markup entirely because it does not reflect intrinsic value', 'A credible new lead at arm\'s length is the strongest signal of value available in private markets. Dismissing it underweights real information.'],
        ['Recycle the markup as new committed capital to the fund', 'Marks are not cash and cannot be redeployed. Recycling provisions usually apply to realized exits within a defined window, not to paper gains.'],
      ],
      'Markups carry real information (a credible new investor repriced the company) but are not cash. Honest fund reporting names them as unrealized and explains what would convert them to DPI.'),

    // Chapter 6 expansion (Step 4c): board meeting structure, monthly metrics package, bridge triage,
    // follow-on math, insider vs outside-led, markup/markdown discipline, CEO support modes, exec hiring,
    // turnaround playbook, exit dynamics, acquisition negotiation, down-round mechanics, reserves drawdown,
    // founder mental health, cross-portfolio sharing.
    q(4350500, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Board meeting purpose',
      'A first-time founder asks what a board meeting is actually for. What is the cleanest answer?',
      'A forcing function for the CEO to step back, report honestly on progress and risks, and get help on decisions that matter — not a status review for the investor',
      [
        ['A formal review where the board grades the CEO\'s performance', 'Boards do evaluate CEO performance, but a meeting framed as "grading" creates defensive reporting and is worse for governance than a problem-solving frame.'],
        ['A presentation to entertain investors with progress slides', 'Entertainment framing produces a polished but useless meeting. Investors want hard updates and decisions, not theater.'],
        ['A legal requirement with no strategic purpose', 'Board meetings have legal weight but the operating value is the discipline of structured reporting and decision-making — not the legal compliance alone.'],
      ],
      'A good board meeting is 60% honest reporting on plan vs actual, 30% decisions where the board can help, 10% strategy. Bad board meetings are 90% slide-walking and 10% awkward silence. The CEO sets that ratio; experienced board members protect it.'),
    q(4350501, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'KPI deck structure',
      'A CEO asks an investor what should be on the first page of the board KPI deck. What is the most useful suggestion?',
      'The 5-8 numbers that define the business this quarter: revenue, growth, retention, burn, runway — with plan vs actual and a one-line interpretation each',
      [
        ['A two-page narrative explaining strategic vision', 'Vision belongs later in the deck. Page 1 is the operating dashboard — numbers, deltas, interpretations.'],
        ['Every metric the company tracks, organized by department', 'Department-level metric dumps drown the headline numbers. Page 1 is the executive summary, not the data warehouse.'],
        ['A list of competitors with their recent funding announcements', 'Competitor news is interesting but not the dashboard. It belongs in a market update section, not on page 1.'],
      ],
      'Page 1 is the 5-8 numbers that matter most this quarter, with plan vs actual and a sentence each. If the board can answer "is the business on track?" from page 1 alone, the deck is well-designed. Every subsequent page should drill into one of those numbers.'),
    q(4350502, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Ask-not-update framing',
      'A CEO\'s board pack consists of 40 slides of progress updates and zero explicit asks. The investor wants to reshape this. What is the right framing?',
      'Reframe each section to end with either a specific ask or a decision needed — "I need help with X" or "we need to decide Y" — converting update time into useful time',
      [
        ['Cut the deck to 10 slides and force the CEO to wing the rest', 'Cutting volume without restructuring leaves the same pattern in less time. The fix is structural: asks and decisions, not slide count.'],
        ['Tell the CEO to skip the deck and just talk through the quarter', 'No deck means no structured reporting — that produces worse meetings, not better. The deck is fine; the framing is the issue.'],
        ['Schedule longer meetings so all the updates can be delivered', 'Longer meetings amplify the wrong pattern. The cost of an unfocused board meeting is not solved by giving it more time.'],
      ],
      '"Asks not updates" is the simplest reframe for a flat board. Every section ends with either a specific ask the board can act on or a decision the board needs to make. Updates that lead to nothing actionable should be in the pre-read, not the meeting.'),
    q(4350503, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Decisions vs updates',
      'A 90-minute board meeting has 70 minutes of updates and 20 minutes of decisions. The investor suggests inverting this. Why?',
      'Decisions are the board\'s highest leverage contribution; updates can be pre-read in writing, freeing meeting time for the few questions that actually need group debate',
      [
        ['Updates are unimportant and should be removed from board meetings entirely', 'Updates are important context — but they should be delivered as a written pre-read, not consumed in expensive synchronous time.'],
        ['Decisions take longer than updates and should fill the meeting', 'The right framing is value per minute, not length. Decisions are higher value because they cannot happen asynchronously the way updates can.'],
        ['Boards should not make decisions; they should advise only', 'Boards have decision authority on specific governance matters and add value as decision partners on others. Stripping decisions from board time leaves only advice, which is less useful.'],
      ],
      'The CEO\'s job in advance: send a 5-page pre-read with updates so the meeting starts at decisions. The board\'s job in the meeting: spend 70-80% of the time on the 2-3 decisions that need group debate. Updates without decisions is a calendar problem dressed up as governance.'),
    q(4350504, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Monthly metrics: the 5 numbers',
      'An investor asks the CEO for a monthly metrics email. Which 5 numbers should anchor it for a SaaS Series A company?',
      'ARR (and net new), net revenue retention, gross margin, monthly burn, cash and runway',
      [
        ['Total registered users, total demo requests, total website visits, total app downloads, total newsletter subscribers', 'These are vanity metrics. None of them tell the investor whether the business is working.'],
        ['Headcount, office expenses, marketing spend, travel spend, total opex', 'Cost-only metrics show spend but not whether the company is succeeding. Need at least one revenue or retention metric to balance.'],
        ['The CEO\'s gut feeling, founder energy level, market vibes, competitor news, fundraising mood', 'Qualitative-only updates without numbers obscure the business state. The 5 numbers are quantitative on purpose.'],
      ],
      'The 5 numbers that matter for SaaS: ARR with net-new, NRR, gross margin, burn, cash/runway. For consumer, swap ARR for active users and add D7/D30 retention. For marketplaces, GMV and take rate. The pattern is the same: 5 numbers that tell the investor whether the business is alive and trending.'),
    q(4350505, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Metrics gap',
      'A monthly update reports ARR ($2.4M), new logos (12), and pipeline ($8M). What\'s most likely missing that the investor needs to ask for?',
      'Net retention, burn, and runway — without these, the investor cannot tell whether growth is durable or whether the company can survive long enough to compound',
      [
        ['Customer testimonials and case studies', 'Testimonials are useful marketing but not metric package material. The gap is operating metrics, not marketing collateral.'],
        ['Detailed pipeline coverage by sales rep', 'Rep-level pipeline is operational detail beyond what a monthly update should carry. The gap is at the headline level (retention, burn, runway), not in pipeline granularity.'],
        ['Product roadmap milestones for the next quarter', 'Roadmap matters but does not fill the metric package gap. The missing pieces are health metrics (retention, burn, runway), not product plans.'],
      ],
      'New ARR and pipeline are forward growth indicators. NRR is the durability test (is the growth net of churn?). Burn and runway are the survival test. Reporting growth without these three is a partial picture; investors will always ask.'),
    q(4350506, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'First trouble signal',
      'A portfolio company\'s monthly update has been steady for six months. This month: same revenue number but the founder\'s commentary is unusually long, the burn went up 15%, and a key metric (NRR) was omitted entirely. What is the right read?',
      'These are pattern-break signals — quietly omitted metrics, expanded commentary, rising burn — that often precede explicit bad news; the investor should ask directly about NRR and burn',
      [
        ['Nothing is wrong because revenue is the most important metric', 'Pattern breaks in reporting almost always precede pattern breaks in the business. Revenue can be steady for a quarter even as durability metrics turn bad.'],
        ['The founder is doing more thoughtful analysis than usual', 'Increased commentary on a flat update is rarely thoroughness. It is usually narrative compensation for a number that has gone the wrong way.'],
        ['Wait for the quarterly update for clarification', 'A quarter is enough time to compound the issue. Direct questions now cost the investor nothing and surface real information faster.'],
      ],
      'Pattern breaks in reporting — omitted metrics, expanded narrative, missing benchmarks — are some of the most reliable early signals of trouble. The right move is a direct, non-confrontational question: "I noticed NRR was not in this month\'s update — what is it tracking at?"'),
    q(4350507, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Founder over-reporting',
      'A founder\'s updates lead with wins for 8 months running. The investor notices that customer health and pipeline conversion are never discussed, but every new logo is celebrated. What is the diagnosis?',
      'The founder is curating for confidence rather than reporting honestly; the omitted metrics are likely deteriorating and the pattern of selective reporting itself is now the warning sign',
      [
        ['The company is genuinely excellent and the investor should celebrate too', 'Companies that are genuinely excellent do not need 8 months of selective reporting; they show wins AND honest metrics. The selection is the signal.'],
        ['The founder is trying to maintain investor morale during a difficult period', 'Curated reporting during difficulty makes difficulty worse — when the truth surfaces, trust has eroded. Honest reporting in tough times is what good founders do.'],
        ['Investor concern is overreach — founders set the update format', 'Investors are entitled to ask about omitted metrics. Format flexibility does not excuse omission of fundamental business health data.'],
      ],
      'Over-reporting wins is a coping behavior. The fix is structural: ask the founder to standardize the monthly metric set so omissions become visible. Curation looks fine in isolation; against a standard template, it becomes obvious within one cycle.'),
    q(4350508, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Bridge round triage signal',
      'A company has 5 months of runway and the Series A round target needs 8-10 months of further proof. The investor is considering a bridge. What is the first question to answer?',
      'Whether the additional 3-5 months of runway buys real proof points that would change a Series A investor\'s view — if not, the bridge just delays the wind-down',
      [
        ['Whether existing investors are willing to write the bridge check', 'Investor willingness is necessary but not sufficient. A bridge that does not change the company\'s fundability is wasted regardless of who funds it.'],
        ['Whether the bridge can be done as a SAFE to avoid pricing the company', 'Structure (SAFE vs note vs priced) is a downstream question. The first question is whether the bridge buys real proof.'],
        ['Whether the founder is willing to take a 50% pay cut', 'Founder pay is rarely the variable that decides a bridge. The decision is about runway use and proof-point achievability, not personal economics.'],
      ],
      'The proof-gap test is the bridge round triage question. If 3-5 months gets the company to a milestone that would change the next-round investor\'s thesis — bridge. If 3-5 months just extends the same conversation that is failing now — don\'t bridge, restructure or wind down.'),
    q(4350509, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Bridge round economics',
      'A portfolio company needs a $2M bridge. Existing investors lead. The lead proposes a 1.5x liquidation preference on the bridge and a 25% discount to the next round. What is the right read for the company?',
      'The 1.5x preference is moderately aggressive for an insider bridge — clean terms (1x non-participating, modest discount) would be friendlier; this is a real negotiation point',
      [
        ['Accept immediately — any bridge terms are better than a wind-down', 'Bridge terms set the preference stack into the next round. Accepting aggressive terms because the situation is tight compounds the cap-table problem for future rounds.'],
        ['Refuse the bridge because the preference is too high', 'Refusing without counter-proposal accelerates the wind-down. The right move is to negotiate, not to walk.'],
        ['Demand the bridge be free of any terms at all', 'Zero-term capital is not a real proposal. Some preference and some discount is market for an insider bridge; what to negotiate is the level, not the existence.'],
      ],
      'Insider bridges typically run 1x preference + 15-25% discount, or a SAFE with a meaningful discount and no cap. 1.5x and 25% is at the aggressive end and is a legitimate negotiation. Founders should push back; investors who genuinely believe will moderate. Investors who do not will hold firm — and that itself is information.'),
    q(4350510, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Letting burn force discipline',
      'A portfolio company asks for a bridge to extend runway from 6 months to 12. The investor believes the underlying issue is that the company is over-spending without product-market fit. What is the harder but often-correct call?',
      'Decline the bridge or condition it on substantial burn reduction first; runway extension without operating change just buys more burn at worse terms',
      [
        ['Always bridge — sustained burn is the lifeblood of growth', 'Sustained unproductive burn is the lifeblood of failure. Bridging without a burn fix delays the same conversation by six months.'],
        ['Always wind down — once burn is questioned, the company is finished', 'Plenty of companies turn around with disciplined burn cuts. The question is whether the founder will execute the cut, not whether the cut is conceptually possible.'],
        ['Demand the CEO be replaced as a condition of bridging', 'CEO replacement is rare and traumatic. Burn discipline is achievable without it in most cases — the right ask is structural, not personal, in the first instance.'],
      ],
      'Letting burn force discipline is one of the hardest portfolio decisions. Founders read it as abandonment; partners read it as triage. The correct framing is conditional: bridge tied to a credible burn-reduction plan with named cuts and a milestone retest. Unconditional bridges to founders who will not cut are usually wasted capital.'),
    q(4350511, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Follow-on math basics',
      'A fund owns 12% of a company entering a Series B. The Series B raises $30M at $120M post-money. To maintain 12%, what check does the fund need to write?',
      '12% × $30M = $3.6M to maintain ownership at the Series B',
      [
        ['12% × $120M = $14.4M', '$14.4M is the value of the existing stake at the new valuation, not the pro rata check needed. Pro rata is the percentage of the new money, not the new post-money.'],
        ['$30M to lead the round and protect ownership', 'Leading the round and pro rata are different. Pro rata is by definition the maintenance check, not the lead check.'],
        ['$0 — ownership is automatically preserved through pro rata rights', 'Pro rata is the right to invest, not automatic ownership preservation. Without writing the check, the ownership dilutes.'],
      ],
      'Pro rata = ownership × new money raised. Simple but commonly inverted. The mental shortcut is "I get to write a check sized to my percentage of the new round." Anything else is wrong arithmetic.'),
    q(4350512, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Follow-on impact on return',
      'A fund\'s seed position in a company is now valued at 5x invested cost. A Series B opportunity allows $5M follow-on at $200M post-money for 2.5% additional ownership. The expected exit is $1B in 4 years. What is the return impact framing?',
      '2.5% × $1B = $25M return on $5M check = 5x — same multiple as the seed, with much lower variance because the company is more de-risked',
      [
        ['No impact — follow-ons just maintain the original return profile', 'Follow-ons add or subtract from total return depending on the price and ownership achieved. They are an independent investment, not a maintenance no-op.'],
        ['10x return because Series B always outperforms seed', 'Stage does not produce mechanical multiples. The return is set by the price paid and the eventual exit, not by stage.'],
        ['Zero return because the company is already de-risked', 'De-risking lowers variance, not expected return. A 2.5% stake at exit value is still a real return on the follow-on check.'],
      ],
      'Follow-on math: ownership × exit value = return on the follow-on check. Same multiple as seed at this price, but lower risk. That tradeoff is the whole reason to follow on — accept a similar multiple at lower variance to compound the position.'),
    q(4350513, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Follow-on under reserves constraint',
      'A fund has $20M of reserves and three portfolio companies asking for follow-on: A wants $8M at 3x markup (strong proof), B wants $6M at flat (mixed proof), C wants $10M at 1.5x (early traction). The fund cannot fund all three. What is the right framing?',
      'Rank by expected return-impact per reserve dollar — including markup signal, ownership defense, and probability of fund-returning outcome — and concentrate reserves on the top one or two, not all three at sub-scale',
      [
        ['Fund all three at half the requested size', 'Half-checks at sub-scale dilute the reserve impact without satisfying any of the three. It is the worst portfolio construction outcome for a constrained reserve pool.'],
        ['Fund the cheapest one (B) to maximize per-dollar ownership', 'Cheapest is not the same as highest return-impact. The B is flat for a reason — markup discipline says flat at this stage is a signal, not a discount.'],
        ['Fund only C because the markup is smallest', 'Smallest markup does not mean best opportunity. The right framing is fund-level return impact, not markup multiple.'],
      ],
      'Reserves discipline: rank by expected return impact (probability of fund-returning outcome × ownership × exit potential). Concentrate, do not spread. Spreading $20M across three companies at sub-scale produces a worse distribution than $14M concentrated on the strongest. The discomfort of telling B and C "no" is the cost of good portfolio construction.'),
    q(4350514, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Insider round definition',
      'A company\'s "Series A2" is led entirely by existing seed investors with no new outside lead. What term describes this round?',
      'An insider round — financed by existing investors without an outside-led pricing event',
      [
        ['A bridge round — any extension financing counts as a bridge', 'Bridges are typically short-term and unpriced (notes or SAFEs). An A2 led by insiders is a priced round, structurally different from a bridge.'],
        ['A down round — insider rounds are always at lower valuations', 'Insider rounds can be flat, up, or down. "Insider" describes who, not at what price.'],
        ['A pre-emption round — only existing investors can participate by right', 'Pre-emption (pro rata) is a participation right, not a round designation. Insider rounds happen because outside investors did not lead, not because outsiders were excluded.'],
      ],
      'Insider rounds are common and consequential. They signal that no outside lead was willing or available at the price the company wanted. Sometimes that is fine (existing investors have the most information); sometimes it is a warning. The signal depends on context.'),
    q(4350515, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Insider round signal',
      'A Series B is led by existing Series A investors at a flat valuation. Next-round outside investors look at this. What signal does the insider-led flat round send?',
      'Mixed — it shows existing investors believe enough to keep funding, but it raises the question of why no outside lead was willing to price the company at all',
      [
        ['Strong positive — existing investors are the best judges of value', 'Existing investors are biased toward continued support. Their willingness to price-up the round is informative, but a market validation by an outside lead is generally stronger.'],
        ['Strong negative — flat insider rounds always precede failure', 'Many flat insider rounds are followed by strong outside-led Series C\'s. The signal is mixed, not definitive.'],
        ['Neutral — insider rounds are operationally identical to outside-led rounds', 'They are not. Pricing discipline is different when no outside party is anchoring the valuation, and next-round investors read it as such.'],
      ],
      'The insider-round signal is read at the next round, not at the time of the round. A flat insider round followed by strong outside-led Series C reads as "existing investors held the line through a tough quarter." Flat insider round followed by another flat insider round reads as "no one outside is willing to buy this story."'),
    q(4350516, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Outside-led discipline',
      'A founder is debating insider-led at $80M post-money vs outside-led at $60M post-money. Both rounds clear the same capital. What is the right framing?',
      'Often the outside-led round at the lower price is the better long-term move — it brings a new lead\'s diligence, validates the company in the market, and avoids cap-table concentration on insiders',
      [
        ['Always take the higher valuation regardless of source', 'Higher valuation looks better at signing and worse at the next round if the company has not grown into it. Markup discipline is a portfolio-construction question, not a vanity question.'],
        ['Always take the insider-led round to reward loyalty', 'Loyalty is not the right axis. Outside leads add real value (diligence, signal, relationship); refusing them to favor insiders is bad strategy.'],
        ['Both options are economically identical so flip a coin', 'They are not identical. Cap-table composition and next-round signaling differ substantially between insider and outside-led rounds.'],
      ],
      'A new outside lead at a lower price is often more valuable than a higher insider-led number. The new lead brings diligence, validates the company in the market, and gives the next round investor someone outside the existing cap table to reference. Founders who optimize for headline valuation in this trade-off frequently regret it 12-18 months later.'),
    q(4350517, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Markup discipline: when to write up',
      'A portfolio company closes a Series B led by a credible top-tier firm at a 4x markup on the seed. The fund\'s policy is to mark to the new round. When should the fund write up?',
      'On closing of the priced round led by an arm\'s-length investor at a defined per-share price — that is the cleanest objective marker for a fair-value adjustment',
      [
        ['On the day the term sheet is signed but before closing', 'Term sheets fall through. Marking on signing rather than closing creates reversals that erode reporting credibility.'],
        ['Only when DPI is realized through an exit', 'That ignores TVPI conventions entirely. Marks are explicitly the unrealized portion of fund value; waiting for DPI to mark is incorrect accounting.'],
        ['When the founder verbally claims the company is worth more', 'Marks are based on observable transactions, not founder estimates. Verbal claims are not a defensible basis for a NAV adjustment.'],
      ],
      'Standard practice: mark on closing of a priced round led by an arm\'s-length party. Marking earlier (term-sheet signing) or later (post-realization) both produce worse reporting. Auditors and LPs expect the closing-date convention; deviations require explanation.'),
    q(4350518, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Markdown discipline',
      'A portfolio company\'s revenue has dropped 40% over the last two quarters, but they have not raised a new round. The mark is currently held at last-round value. What is the right action?',
      'Mark down to reflect impaired value — fund accounting requires writing down material impairment even absent a new pricing round, often using comparable transactions or a discounted cash flow proxy',
      [
        ['Keep the mark flat because no new round has set a price', 'Holding flat through material impairment misrepresents NAV. Auditors expect impairment writedowns even without a new round.'],
        ['Mark to zero because revenue is declining', 'Revenue decline is not the same as a zero outcome. The mark should reflect a defensible best-estimate value, often the lower of a comparable-transaction read or DCF.'],
        ['Wait until the company raises again or shuts down', 'Waiting is misreporting. NAV is a quarterly fair-value estimate, not a wait-and-see field.'],
      ],
      'Markdowns are the asymmetric counterpart to markups. Most GPs are quick to write up on new rounds and slow to write down without one — that is the systematic bias auditors push back on. Honest markdown discipline often distinguishes top-quartile funds from middling ones in LP reviews.'),
    q(4350519, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Holding marks flat',
      'A portfolio company has had no new round for 30 months but appears stable. The current mark is the original cost. An LP asks why no markup. What is the most defensible answer?',
      'Without a recent arm\'s-length transaction or substantial operating progress, holding flat at cost is conservative and defensible — markups require objective triggers, not optimism',
      [
        ['Markup discipline does not apply after 24 months — the mark should be the GP\'s estimate', 'Time alone is not a markup trigger. The same arm\'s-length-transaction-or-impairment framework applies regardless of how long the position has been held.'],
        ['The company is undervalued and the GP should mark it up to reflect intrinsic value', 'GP intrinsic-value markups are exactly the bias that LP audits push back against. Unsupported markups erode reporting credibility.'],
        ['The mark should be removed entirely until the next financing event', 'Removing the mark would understate NAV. The position is held at cost, which is the standard treatment in the absence of a new transaction.'],
      ],
      'Holding marks flat for long periods is fine and often correct. The mistake is letting time create pressure for an upward adjustment without a defensible trigger. "Flat at cost, will revisit on next financing event" is a clean, defensible LP answer.'),
    q(4350520, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'CEO support: recruiting',
      'A Series A CEO is recruiting their first VP Sales. The investor is being asked to help. What is the highest-leverage form of help?',
      'Source 3-5 high-quality candidates from the investor\'s network and run an early-stage filter before the CEO\'s full interview process',
      [
        ['Treat the investor\'s preferred candidate as the CEO\'s hire', 'Picking the hire usurps the CEO\'s call and creates accountability problems if the hire fails. The investor sources and filters; the CEO decides.'],
        ['Provide a list of recruiters the CEO can pay separately', 'Recruiters are a tool the CEO can already access. Investor leverage is in network access the CEO cannot get themselves.'],
        ['Tell the CEO to wait until Series B to hire a VP Sales', 'Delaying the hire delays revenue. The right move is to help find the right person, not to defer the hire on principle.'],
      ],
      'Recruiting is the most under-leveraged investor activity. Sourcing 3-5 strong candidates through the investor\'s network shaves months off the search and lifts the candidate quality bar. The investor does not interview-then-hire; the CEO does. The investor opens the door.'),
    q(4350521, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'BD introductions',
      'A portfolio CEO asks for BD intros to "any large enterprise that might buy our product." What is the right response?',
      'Push back to define a specific ICP and 5-10 named target accounts; broad intros without target precision dilute the investor\'s relationship capital without producing useful conversations',
      [
        ['Make 20 broad intros and let the CEO sort the responses', 'Broad intros without precision look like a CEO who has not done sales targeting. Sending those intros damages both the investor\'s relationships and the CEO\'s pipeline credibility.'],
        ['Refuse to make intros because BD is the CEO\'s job', 'BD intros are a legitimate ask. The right move is to focus them, not refuse them.'],
        ['Charge the CEO a fee for each intro to maintain professional boundaries', 'Charging fees for portfolio support is outside standard practice and would damage relationships. The investor\'s value-add is part of the deal.'],
      ],
      'High-leverage intros are precise: named buyer, specific use case, articulated reason this account matters. Investors should resist making broad intros — every loose intro slightly erodes the response rate on the next one. A well-formed ask earns precise help; a vague ask earns vague help.'),
    q(4350522, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Exec coaching',
      'A Series A CEO is struggling with team-management decisions and the board sees the pattern repeat. The investor is considering recommending an executive coach. When is the right moment?',
      'Now — early stage CEOs benefit most from coaching before patterns calcify; framing it as performance enhancement (not crisis intervention) makes the recommendation easier to accept',
      [
        ['Wait until the board votes to terminate so the recommendation has teeth', 'Coaching at termination time is too late. The point of coaching is to build the skill before the crisis, not after.'],
        ['Never recommend a coach because it implies the CEO is failing', 'Top CEOs use coaches routinely. Treating it as a sign of failure rather than performance is bad framing.'],
        ['Send the CEO articles about leadership instead of suggesting a coach', 'Reading material is not the same as a coaching relationship. The two address different parts of the problem.'],
      ],
      'Coaching is highest-leverage early. The framing matters: not "you need a coach because you are failing" but "your job is changing every six months — a coach helps you grow into the next version faster." Most top-tier funds have a small list of coaches they recommend; offering the introduction is itself the value-add.'),
    q(4350523, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Board prep',
      'A new CEO is preparing for their first board meeting. What is the most useful investor pre-board contribution?',
      'A 1-hour prep call to surface the 2-3 likely tough questions and rehearse the CEO\'s honest answers — so the meeting itself is not the first time those questions get processed',
      [
        ['Write the CEO\'s board script for them', 'Scripting the CEO produces brittle answers in the meeting. Prep should rehearse honest reasoning, not memorize lines.'],
        ['Tell the CEO that no prep is needed if the company is on plan', 'Even on-plan companies face hard questions in board meetings. Prep is cheap insurance.'],
        ['Schedule the prep call after the board meeting for retrospective learning', 'Retrospective learning is fine, but pre-meeting prep is the higher leverage. The board meeting is not a graded test you should walk into cold.'],
      ],
      'Board prep is one of the highest-leverage 60 minutes an investor spends. The goal is not to coach the CEO into a polished performance but to surface the questions before the meeting so the answers can be honest rather than reactive. CEOs who prep with their investor for 60 minutes have noticeably better board meetings; the cost is trivial.'),
    q(4350524, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'COO hire signal',
      'A Series B CEO is overwhelmed by operational coordination across product, engineering, sales, and customer success. The investor is being asked whether to recommend a COO hire. What is the right framing?',
      'A COO can help — but the underlying question is whether the CEO is a builder or an operator; the COO works if the CEO will genuinely cede operations and focus on product/vision, fails if the CEO micromanages instead',
      [
        ['Always hire a COO at Series B — it is the standard playbook', 'Many top companies do not have a COO. The hire is contextual, not automatic.'],
        ['Never hire a COO — it dilutes the CEO\'s authority', 'Plenty of companies benefit substantially from a strong COO. Categorical opposition is wrong.'],
        ['Hire a consultant instead of a COO to avoid headcount cost', 'Consultants do not replicate COO accountability. The structural authority and ownership of execution that a COO carries is qualitatively different.'],
      ],
      'COO hires fail when the CEO cannot let go. The diagnostic question is "what does the CEO actually want to spend time on?" — if the answer is product and vision, COO works. If the answer is everything, COO becomes a frustrated layer that the CEO routes around. Make sure the CEO has actually answered that question before pushing the hire.'),
    q(4350525, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'CRO hire signal',
      'A Series A company has $3M ARR with sales led by a strong founder-AE. The investor is being asked whether to recommend a CRO hire. What signals matter?',
      'CRO hire makes sense when the company has 3-5 reps, a repeatable playbook, and a $5M+ ARR plan that requires scaling sales operations — too early and the CRO has nothing to lead',
      [
        ['Hire a CRO at first dollar of ARR — earlier is always better', 'A CRO with no team and no repeatable playbook is an expensive hire who will look for a team and a playbook. The role does not fit at first ARR.'],
        ['Never hire a CRO — the founder should always lead sales', 'Founder-led sales eventually becomes a constraint. The transition is real and needs to happen at some scale point.'],
        ['Hire a CRO from a much larger company to skip the scaling curve', 'CROs from $100M+ ARR companies often fail at $3M ARR because they cannot operate without the infrastructure. Stage-matched experience matters.'],
      ],
      'CRO timing: usually mid-Series A through early Series B. Earlier and there is no team for them to lead. Later and the founder has already built a scaffolding that the CRO has to re-engineer. Stage-fit on the CRO\'s prior company matters more than headline brand — a CRO who scaled from $5M to $25M ARR is more relevant than one who joined at $100M.'),
    q(4350526, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'CFO hire signal',
      'A Series B company at $15M ARR has a part-time bookkeeper and the CEO doing all financial planning. The investor is being asked about a CFO hire. What is the right read?',
      'A CFO is overdue — $15M ARR with no full-time finance leader means the CEO is doing planning, forecasting, and investor reporting that should be delegated; risk of a costly miss is now real',
      [
        ['Wait until the company is profitable to add finance overhead', 'Profitable companies need CFOs more, not less. A profitable company without a CFO is delaying tax, audit, and reporting risks that compound.'],
        ['A controller is enough; CFOs are for $100M+ companies', 'Controllers handle accounting; CFOs handle planning, fundraising support, and strategic finance. At $15M ARR scaling toward Series C, the CFO function is needed even if the title is debatable.'],
        ['Outsource financial planning to a fractional CFO permanently', 'Fractional CFOs are useful as a bridge but rarely a permanent solution past Series B. The depth of relationship with the business and the leverage on strategic decisions require an in-house seat.'],
      ],
      'CFO hires often come a quarter or two too late. The cost of the delay is rarely visible — until a fundraising process exposes a financial model the CEO patched together at midnight, or an audit catches a revenue recognition error. $15M+ ARR is past the point where one full-time finance leader more than pays for themselves.'),
    q(4350527, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Wrong-stage exec hire',
      'A seed-stage CEO is convinced they need a "VP Sales" with 15 years of enterprise sales experience to close enterprise deals. The investor is skeptical. What is the diagnostic?',
      'Enterprise VPs need infrastructure (BDRs, SEs, marketing pipeline, product maturity) that seed companies do not have; the right hire at seed is often a senior AE who can sell, not a VP who manages a team that does not exist',
      [
        ['Always hire the most senior person available — pedigree wins', 'Pedigree at the wrong stage is the most common failure mode of early exec hires. Stage-fit beats brand at seed.'],
        ['Refuse to fund any sales hire before Series B', 'Founder-led sales has a ceiling. Some sales hire is needed; the question is what level and what scope.'],
        ['Hire a fractional VP Sales who works 20% time', 'Fractional VPs at seed produce fractional ownership of outcomes. The role at this stage needs full accountability, not partial attention.'],
      ],
      'Stage-mismatched exec hires are expensive failures. At seed, the company needs sellers, not sales managers. At Series A, a sales leader who can build the team. At Series B, a CRO who can scale it. Skipping stages — bringing in a $100M-stage VP at seed — almost never works.'),
    q(4350528, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Turnaround: burn first',
      'A portfolio company has 7 months of runway, missed plan by 50%, and the CEO wants to "lean into growth" with more sales hires. The investor is helping plan a turnaround. What is the first move?',
      'Cut burn first — typically 25-40% of opex — to extend runway to 12+ months; you cannot turn around a company that runs out of cash in 7 months while you try',
      [
        ['Hire more sales reps to grow into the plan', 'Adding burn to a missed-plan company is how 7 months becomes 4 months. Cuts come first; growth investments come after runway is stabilized.'],
        ['Raise an emergency bridge before anything else', 'Bridges are easier to raise when the company has shown discipline. Raising without cutting first is paying for the same dysfunction at worse terms.'],
        ['Replace the CEO immediately as the turnaround signal', 'CEO replacement is a last-resort move, not the opening play. Burn cuts come first; leadership change only if burn cuts fail.'],
      ],
      'Turnaround sequence: cut burn, set a milestone reset, restructure go-to-market if needed, then evaluate leadership. Reversing this order — leadership-first or growth-first — typically wastes 3-6 months that the company does not have.'),
    q(4350529, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Milestone reset',
      'After a 30% burn cut, a portfolio company has 14 months of runway and needs to redefine the milestones for the next raise. The investor is helping. What is the most useful framing?',
      'Set 2-3 specific, observable milestones that a next-round investor would actually care about — e.g., $X net new ARR, Y% retention, Z named enterprise logos — with explicit timing',
      [
        ['Set 15-20 milestones to show ambition across every dimension', 'Twenty milestones is a wishlist, not a plan. Investors look at 2-3 numbers and ignore the rest; the plan should reflect that reality.'],
        ['Set one milestone (revenue) and ignore everything else', 'One metric is too narrow. Revenue + retention + a qualitative signal (named logos, enterprise contracts) tells the story; revenue alone can be gamed.'],
        ['Set no specific milestones to preserve flexibility', 'No milestones means no accountability. The point of the reset is to create a credible target the team and investors can both believe in.'],
      ],
      'Milestone resets after a turnaround are 2-3 numbers, observable, with explicit timing. They should be the same numbers the next-round investor will ask about. Anything else is internal motivational language, not a fundability plan.'),
    q(4350530, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Leadership change in turnaround',
      'A portfolio company has cut burn, reset milestones, and missed them again. The board is debating CEO replacement. What is the right framing?',
      'CEO change is appropriate when the pattern is structural (founder cannot execute the operating role required) rather than situational; cofounder dynamics, board support, and successor pipeline all need to be aligned before the change',
      [
        ['Replace immediately — missed milestones twice is sufficient evidence', 'Two-strike rules without contextual analysis cause replacements that destabilize without solving the underlying issue. The replacement needs to be the right move, not just an action.'],
        ['Never replace a founder-CEO under any circumstance', 'Some founders are not the right operators at later scale. Holding categorically to founder-CEO continuity costs companies that need to evolve.'],
        ['Let the CEO decide whether to stay', 'Self-deciding under pressure produces bad decisions. The board has a fiduciary role in this call; abdicating to the CEO is governance failure.'],
      ],
      'CEO replacement is among the hardest portfolio decisions. The framing has to be structural (this founder cannot do what this stage requires) rather than tactical (we are frustrated). Successor pipeline matters — replacing without a credible incoming option is usually worse than holding. And the conversation has to be done with grace; the founder is often the largest shareholder and a critical asset to the eventual outcome regardless of role.'),
    q(4350531, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Exit types',
      'A portfolio CEO asks about exit types. What is the cleanest framing of the three major paths?',
      'Strategic acquirer (corporate buyer paying for synergy or technology), private equity (financial buyer at multiples of EBITDA or revenue), IPO (public-market listing at growth-stage multiples)',
      [
        ['All exits are basically the same once the cash arrives', 'They are structurally different in process, timing, and price. The buyer\'s logic shapes everything from valuation to deal protection.'],
        ['IPO is always the best outcome; the others are consolation prizes', 'IPO is one path. Many strategic acquisitions produce higher per-share outcomes than what an IPO would have yielded; PE rollups can produce strong outcomes at scale.'],
        ['Exit type is decided by the company at sale time, not by the buyer', 'Exit type is decided by which buyers exist and what they will pay. The company can prefer one but cannot manufacture buyers of a specific type that do not exist.'],
      ],
      'Strategic vs PE vs IPO have different valuation logic, different process requirements, and different deal protection structures. A company that thinks of itself as IPO-track but has only strategic buyers in the funnel is mis-targeting; the converse also happens. Knowing the realistic exit path informs how the company is built years in advance.'),
    q(4350532, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'IPO timing signal',
      'A portfolio company at $100M ARR growing 50% with 75% gross margins and NRR of 125% is being courted by underwriters about an IPO. What signals matter for whether the company is ready?',
      'Predictability of growth (3+ consecutive quarters beating plan), Rule of 40 above benchmark, audit-ready financials, and a CEO/CFO who can handle public-market reporting cadence',
      [
        ['$100M ARR is the threshold — everything else is detail', 'Plenty of $100M ARR companies are not IPO-ready (predictability, governance, financial controls). Revenue scale is necessary, not sufficient.'],
        ['IPO whenever the window is open regardless of company readiness', 'IPOs of unprepared companies routinely lose 50%+ of value post-listing. Window timing is a factor but not a substitute for readiness.'],
        ['Only go public after exiting unprofitability', 'Plenty of high-growth IPOs are unprofitable; the public market accepts that with growth and Rule of 40 above thresholds. Profitability is one signal among several, not a requirement.'],
      ],
      'IPO readiness is a bundle: predictability, governance, financial controls, leadership team. $100M ARR with strong durability metrics is in the zone, but readiness checks come from CFO-and-banker conversations and a clear-eyed look at whether the company can survive quarterly reporting pressure. Going public unprepared is one of the most expensive corporate decisions a CEO can make.'),
    q(4350533, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Multi-bidder strategic',
      'A strategic acquirer offers $400M for a portfolio company. The CEO wants to take it. The investor knows there are likely two other strategic buyers. What is the right move?',
      'Run a brief, structured process with at least the other two strategics — even a 4-week window typically produces a 20-50% price lift through competitive pressure, and the process itself protects against acquirer renegotiation',
      [
        ['Take the $400M immediately to avoid losing the offer', 'Taking the first offer without exploring alternatives leaves substantial value on the table. Most well-run sale processes deliver materially better outcomes than the opening bid.'],
        ['Counter at $800M and walk if not matched', 'Aggressive countering without a competitive process is bluffing. The leverage comes from real alternatives, not from a number.'],
        ['Decline and run a 12-month IPO process instead', '12 months is a long horizon. The opportunity at the table needs to be either tested competitively now or declined for clear strategic reasons.'],
      ],
      'Multiple-bidder dynamics produce real price lift. The investor\'s role is often to push the CEO past the comfort of a confirmed offer and into a process that tests the market. The cost is a few weeks; the benefit is typically tens of millions of dollars and better deal terms. Single-bidder negotiations are an asymmetric trap.'),
    q(4350534, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Single-bidder negotiation',
      'A strategic acquirer is the only realistic buyer for a portfolio company. They open at $200M. The CEO wants the investor\'s help to maximize price. What is the right approach?',
      'Anchor the negotiation on the strategic value to the acquirer (revenue impact, synergy, defensive value) rather than the company\'s standalone valuation; the acquirer\'s WTP is set by their gain, not the seller\'s ask',
      [
        ['Demand a 4x multiple of current ARR as a starting counter', 'ARR multiples are a generic frame. The right anchor is the strategic value to this specific acquirer — what does the acquirer gain from buying the company that they would not have otherwise?'],
        ['Threaten to take the company public if they do not pay more', 'Public-market threats from non-IPO-ready companies are not credible. The acquirer reads the bluff and discounts the negotiation.'],
        ['Bring in a banker to run the process even with one bidder', 'A banker on a single-bidder deal can help with process discipline, but they cannot manufacture leverage that the bidder pool does not provide.'],
      ],
      'Single-bidder negotiations are won on the value-to-acquirer frame. Concrete examples: "this product would take you 3 years and $200M to build internally" or "buying this protects you from competitor X buying it instead." Anchoring on the buyer\'s gain rather than the seller\'s ask is the highest-leverage negotiating move.'),
    q(4350535, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Earnout and retention',
      'A $500M acquisition includes $300M cash at close and $200M earnout over 3 years tied to revenue targets. Founders also have 3-year retention packages. What should the investor watch for?',
      'Earnouts in acquirer-controlled environments rarely pay out fully — push for clear, controllable triggers and consider negotiating a higher cash-at-close in exchange for a smaller earnout',
      [
        ['Earnouts always pay out because the acquirer wants the founders to succeed', 'Acquirer interests diverge post-close. Earnouts paid based on metrics the acquirer controls (revenue, customer retention) routinely underperform expectations.'],
        ['Retention packages always retain founders — that is what they are for', 'Retention packages reduce founder exit risk but do not eliminate it. Many acquired founders leave at the first vesting cliff regardless of retention.'],
        ['Cash at close and earnout are economically equivalent', 'Cash at close is certain; earnout is contingent and often paid less than 100%. Treating them as equivalent dollar-for-dollar overstates expected proceeds.'],
      ],
      'Earnout discipline: discount earnouts by 30-50% in expected-value terms; push for triggers the company can control rather than the acquirer; and consider trading earnout for higher cash-at-close at a 0.7-0.8x ratio. Retention packages are similar — useful but not bankable in full. The cash-at-close number is the only number truly under the seller\'s control.'),
    q(4350536, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Down round mechanics',
      'A company\'s last round was at $200M post-money. Eighteen months later, growth has stalled and they need to raise at $100M post-money — a down round. What is the typical structural response?',
      'Recapitalize with broad-based anti-dilution adjustments to prior preferred, often combined with a pay-to-play to force participation, and frequently a refresh of the option pool to retain employees',
      [
        ['Refuse to take a down round under any circumstance', 'Refusing capital to avoid pricing reality often leads to wind-down. Down rounds are painful but routinely survivable; refusing capital is usually worse.'],
        ['Treat it as a normal round at a lower price', 'Down rounds trigger anti-dilution adjustments and often pay-to-play execution. They are structurally different from flat or up rounds.'],
        ['Wipe out all prior preferred and start clean at the new price', 'A full wipeout is a washout round, which is the extreme case. Most down rounds use anti-dilution adjustments without full wipeout.'],
      ],
      'Down rounds are mechanically complex: anti-dilution math, pay-to-play execution, option pool refresh to keep employees motivated, and often a reset of board composition. Done well, they are a hard restart with the same investors; done poorly, they are a slow death. The structure matters as much as the price.'),
    q(4350537, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Washout round',
      'A portfolio company has $80M in preferences stacked above common, no growth, and 4 months of runway. New investors are willing to invest $20M only if existing preferences are washed out. What is the right diagnostic?',
      'A washout is appropriate when prior preferences would otherwise prevent new capital from coming in at a viable price — the existing preferred holders are choosing between a wipe at full preference or a tiny stake in a survivable business',
      [
        ['Refuse the washout to protect existing preferred', 'Refusing the washout means refusing the capital, which means winding down. Existing preferred face a binary: small stake in surviving company or zero stake in liquidated company.'],
        ['Accept the washout only if the founders agree to take a pay cut', 'Founder compensation is a downstream cost discussion. The structural question is whether the cap table can absorb new capital, not what the CEO is paid.'],
        ['Defer the decision until after Q4 results', 'With 4 months of runway, deferral past Q4 is not an option. The decision has to happen now or the company runs out of cash.'],
      ],
      'Washout rounds are corporate triage. The existing preferred holders take a brutal hit; the new investors get a clean cap table at a low entry price. It is the right move when the alternative is a wind-down with full preference but no proceeds — small piece of something usually beats large piece of nothing. The legal mechanics are painful but well-trodden.'),
    q(4350538, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Pay-to-play in a down round',
      'A down round at half the prior valuation invokes pay-to-play. An existing investor has $10M reserved but does not believe in the company anymore. What are their realistic options?',
      'Participate to preserve preferred status, accept conversion to common and write down the position, or sell to an existing-investor secondary buyer if one is available',
      [
        ['Force the company to drop pay-to-play through threats', 'Pay-to-play is in the financing docs and triggers automatically. Threats do not change the contractual mechanic.'],
        ['Sue the company to recover the original investment', 'Equity is at risk capital. There is no breach of contract in a down round; suing would fail and damage relationships further.'],
        ['Let the pay-to-play trigger run without making an explicit decision', 'Ignoring triggers automatic conversion to common. "Hope" is not a strategy when contractual triggers will execute regardless.'],
      ],
      'Pay-to-play execution forces a real decision: write the check, take the conversion to common, or find a secondary buyer. Each path has clear consequences. The right move depends on the investor\'s view of the company; pay-to-play surfaces who actually believes and who is just holding paper.'),
    q(4350539, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Reserves drawdown pacing',
      'A $200M fund is 4 years into deployment with 30 portfolio companies and $80M of reserves left. The fund GP is considering pacing for the remaining 6 years. What is the right discipline?',
      'Pace reserves to support 6-10 of the strongest companies through 2-3 follow-on rounds each, accepting that the remaining 20+ portfolio companies will dilute without support',
      [
        ['Distribute reserves evenly across all 30 companies to be fair', 'Even distribution dilutes the fund\'s impact on every winner. Reserves should follow conviction, which is concentrated by definition.'],
        ['Reserve nothing further and treat the remaining $80M as a new fund', 'Treating reserves as a new fund violates the original LP agreement. Reserves are committed to the existing vintage, not redeployable as new capital.'],
        ['Spend all $80M in the next 12 months to keep pace', 'Front-loading reserves leaves nothing for late-cycle Series C and D follow-ons. Reserves are paced over the fund life, not consumed early.'],
      ],
      'Reserve pacing is portfolio construction over time. The 80/20 rule applies: most reserve capital should compound on the top 20-25% of the portfolio. The remaining companies will dilute through subsequent rounds; that is an expected outcome of a concentrated reserve strategy, not a failure of the GP\'s commitment.'),
    q(4350540, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Founder burnout signal',
      'A portfolio CEO who used to send detailed weekly updates is now sending short, defensive ones. Board calls are tense. They cancelled the last two 1:1s with the investor. What is the right read?',
      'Likely burnout — the behavior pattern (withdrawal, defensiveness, cancelled check-ins) is more diagnostic than any single business metric; the conversation needs to be about wellbeing before tactics',
      [
        ['The company is failing and the investor should plan for wind-down', 'Burnout is recoverable; conflating it with business failure rushes the wrong decisions. Address the human pattern before the business pattern.'],
        ['The CEO is hiding bad news and should be replaced', 'Withdrawal can come from burnout, conflict, or genuine personal crisis. Replacement is a last-step decision, not a first read.'],
        ['Send harder operational asks to re-engage the CEO', 'Adding pressure to a burned-out CEO worsens the pattern. The right move is to surface the underlying issue with care, not pile on demands.'],
      ],
      'Founder burnout is one of the most under-discussed portfolio risks. The signs are behavioral: withdrawal, defensiveness, missed check-ins, deteriorating decision quality. Effective investor support starts with a direct, low-pressure conversation about how the founder is doing — not a tactical agenda. The business is downstream of the founder; ignoring burnout is ignoring the business risk it produces.'),
    q(4350541, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Founder-CEO transition',
      'A Series C company at $40M ARR has a founder-CEO who openly says they prefer product to operations and have not enjoyed the last six months of scaling. What is the right framing?',
      'Founder-led companies often benefit from a CEO transition where the founder takes a Chief Product or CTO role; the question is whether the founder is genuinely ready to step back, not whether the company "needs" it',
      [
        ['Never replace a founder-CEO — it always damages the company', 'Many of the most successful late-stage companies have had founder-to-professional-CEO transitions. Categorical opposition costs companies that would benefit.'],
        ['Replace the CEO immediately because they have admitted they do not enjoy the job', 'Admission alone is not a trigger. The transition needs successor pipeline, founder consent, and board alignment — not a unilateral move.'],
        ['Tell the founder to push through until exit', 'Pushing through misery for years usually produces worse outcomes than a well-managed transition. The "push through" answer ignores how much the company can grow into a CEO who actually wants the operating role.'],
      ],
      'Founder-CEO transitions work when the founder genuinely wants out of the operating role and into a creative/product role they care about. They fail when they are forced. The investor\'s role is to surface the question honestly, support succession planning, and protect the founder\'s relationship to the company through the change.'),
    q(4350542, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Cross-portfolio sharing: when it helps',
      'A portfolio CEO asks if the investor can connect them with another CEO in the portfolio who solved a similar GTM problem 18 months ago. What is the right response?',
      'Make the intro with the receiving CEO\'s consent and a specific scope — "X solved this problem at this stage, would you spend 30 minutes with our CEO?" — concrete asks produce useful conversations',
      [
        ['Never connect portfolio CEOs to each other to protect each one\'s independence', 'Cross-portfolio learning is one of the highest-leverage investor services. Withholding it does no one any favors.'],
        ['Forward the asking CEO\'s deck to the other CEO for context', 'Forwarding decks without consent crosses confidentiality lines. The intro happens with both parties\' consent, and decks are not shared at intro time.'],
        ['Charge a fee for each intro to make it sustainable', 'Cross-portfolio intros are part of investor value-add, not a separate service. Charging fees would distort relationships and is non-standard.'],
      ],
      'Cross-portfolio intros are highest-leverage when scoped: specific problem, specific stage, time-bounded ask. CEOs help each other most willingly when the ask is precise and the value is mutual; vague "have you tried talking to X?" intros waste both parties\' time. The investor\'s role is to source the right pairing and define the ask.'),
    q(4350543, 'Career Skills', 'Portfolio Support and Follow-On Decisions', 'Cross-portfolio sharing: when it leaks',
      'A portfolio CEO confides serious financial trouble. Another portfolio CEO operates in an adjacent space and would benefit commercially from knowing. What is the right boundary?',
      'Confidential information stays confidential — even within the same fund\'s portfolio; cross-portfolio learning is for problem patterns, not for company-specific intelligence',
      [
        ['Share because both companies are in the fund and information flows freely within the family', 'Portfolio companies are not a "family" with free information flow. Each company is owed confidentiality regardless of common investor.'],
        ['Share because the adjacent company would clearly benefit', 'Benefit to one company at the expense of breaching another\'s confidence is exactly the breach the prohibition exists to prevent.'],
        ['Tell the troubled CEO that confidentiality cannot be maintained across portfolio peers', 'Confidentiality can and must be maintained. Telling the CEO otherwise damages trust and prevents them from sharing real information with the investor in future.'],
      ],
      'The line between helpful cross-portfolio sharing and information leakage is sharp. Share patterns ("a few companies have had this issue at this stage") not specifics ("Company X has 3 months of runway"). Funds that build a reputation for leakage lose the trust of the best founders, which is more expensive than the short-term value of any one piece of shared intel.'),

    // Capstone: Investment Pack and Synthesis
    // The syllabus capstone work-output is "a venture investment pack for a fictional startup: sourcing thesis,
    // market map, diligence checklist, customer-call plan, fund-math note, and one-page investment recommendation."
    // These questions simulate that integrative work — each forces the learner to choose across chapters
    // (memo structure, kill criterion, recommendation calibration) rather than recall a single concept.
    q(4280100, 'Career Skills', 'Capstone: Investment Pack and Synthesis', 'Memo structure under conflicting evidence',
      'You are preparing the IC memo for FieldChart, a Series A clinical-workflow SaaS. The pack so far: thesis says category leader in dental analytics; market map shows two well-funded incumbents; diligence shows 130% NRR on top decile of customers but 72% logo retention; customer calls show two evangelists and four lukewarm pilots; fund math says you need 12% ownership and the round is at $45M post-money. What is the most useful memo structure to bring to the partnership?',
      'Lead with the thesis, then evidence (strong NRR signal + weak logo retention), then the specific risk (whether top-decile expansion is replicable), then mitigants and kill criteria, then the recommendation with check size and ownership',
      [
        ['Lead with the recommendation and a confident number, then back it up with supporting points only', 'Partner-grade memos lay out evidence and risks before the conclusion so the partnership can stress-test the reasoning, not just react to the ask.'],
        ['Walk through diligence in chronological order, then ask the partnership for their view', 'A chronology is a journal, not a memo. The partnership reads memos to follow the associate\'s synthesis, not their calendar.'],
        ['Open with the market map and finish with founder bios; leave terms and ownership for a separate discussion', 'Splitting economics out of the IC memo defers the partnership\'s most important decision. Terms and ownership belong in the same document as the thesis.'],
      ],
      'A capstone memo integrates every chapter: thesis (Ch2), metrics (Ch3), founder/customer evidence (Ch4), terms and ownership (Ch5), and the partnership decision (Ch5/Ch6). The structure forces the writer to connect them, not just stack sections.'),
    q(4280101, 'Career Skills', 'Capstone: Investment Pack and Synthesis', 'Kill criterion under integrated diligence',
      'For the FieldChart deal above, the partnership asks you to name one kill criterion to test in final diligence. Given the pattern of evidence — strong expansion in a narrow cohort, weak overall logo retention, two well-funded incumbents, regulated buyer — which kill criterion is most likely to actually decide the deal?',
      'A customer-call sample showing that mid-decile customers (not just the top cohort) renew and expand in line with the thesis — if mid-decile churn is the main story, the NRR is concentrated and the thesis breaks',
      [
        ['Confirmation that the founders attended a top-tier business school', 'Education is biographical, not diagnostic. It does not test whether the business works.'],
        ['Whether the incumbents have publicly commented on the company', 'Competitor silence or noise reveals very little about the underlying business. The thesis turns on customer durability, not on competitor PR.'],
        ['Whether the company can demo a roadmap of unreleased features', 'Roadmap demos test imagination, not adoption. The risk on this deal is retention quality, not feature breadth.'],
      ],
      'A useful kill criterion is the test most likely to break the thesis if the company is mispriced. Here, the diligence pattern points at retention concentration — so the kill criterion has to be a real mid-decile retention check, not a peripheral signal.'),
    q(4280102, 'Career Skills', 'Capstone: Investment Pack and Synthesis', 'Recommendation calibration',
      'You have completed the full pack on FieldChart: thesis sound, expansion strong in top decile, mid-decile retention test pending, incumbents real, terms at $45M post-money with 1x non-participating preference and pro rata. What is the most useful recommendation to bring to the partnership?',
      'Conditional yes — recommend the investment subject to a mid-decile retention check, with check size sized to a 12% ownership target and clear named kill criteria',
      [
        ['Unconditional yes at the asking valuation because the top-decile signal is strong', 'A strong signal in one cohort is not yet a full thesis. The unresolved retention question is exactly the kind of risk a conditional recommendation is for.'],
        ['Unconditional no because weak logo retention always outweighs every expansion signal', 'Weak logo retention is a major warning sign, but the evidence is mixed: top-decile expansion may still support the thesis if the mid-decile test confirms durability. The right move is conditional, not automatic.'],
        ['Defer the recommendation until after the round closes', 'Deferring past the closing date means surrendering the decision entirely. Recommendations have to be made within the round\'s timeline or the deal goes without you.'],
      ],
      'A capstone recommendation is not a single word. It states the verdict, the conditions, the check size, and the kill criteria — and connects every piece back to evidence the partnership can interrogate. That is what the syllabus capstone work-output asks for.'),
    // Capstone expansion: 47 additional FieldChart investment-pack questions
    // across 5 lessons (Sourcing Thesis, Market Map, Diligence, Terms, Portfolio).
    ...vcCapstoneQuestions,
  ], VC_QUESTION_DIFFICULTY), [{ subTopics: VC_SUB_TOPICS, mentorHints: VC_MENTOR_HINTS, correctShortened: VC_CORRECT_SHORTENED, source: 'vc' }]),

  // ---------------------------------------------------------------------------
  // INVESTMENT BANKING ROADMAP
  // Syllabus chapters:
  //  1. Banking Workflow and Client Context
  //  2. Accounting and Financial Statement Links
  //  3. Valuation Core
  //  4. M&A and Capital Markets Materials
  //  5. Execution, Comments, and Quality Control
  //  + Capstone: Sell-Side Analyst Packet and Synthesis (Northwind Industries)
  // Flagship review: docs/audit/career/_flagship/investmentBankingRoadmap_review.md
  // ---------------------------------------------------------------------------
  investmentBankingRoadmap: runPolish(tagDifficulty([
    // Chapter 1: Banking Workflow and Client Context
    // Difficulty arc: foundational org structure → pitch-vs-live mode → document sequence → analyst output discipline (critical path, diligence ownership) → signing vs closing (closes with the most consequential procedural distinction).
    q(4200010, 'Career Skills', 'Banking Workflow and Client Context', 'Coverage vs product',
      'A consumer-retail client is considering both a strategic sale and a high-yield refinancing. Which two groups primarily own each workstream inside the bank?',
      'The retail coverage team owns the client relationship; M&A advisory and leveraged finance product groups own the respective execution',
      [
        ['Coverage owns both because they know the client', 'Coverage manages the relationship, but product groups bring the technical execution skill (M&A processes, debt syndication) that the client is actually buying.'],
        ['Leveraged finance owns both because debt funds the deal', 'A sale and a refi are different products. LevFin executes debt; M&A advisory runs sale processes.'],
        ['The analyst pool owns the workstream allocation', 'Analysts staff the workstreams but do not own the client or product. Coverage MDs and product MDs make that call.'],
      ],
      'Investment banks are organized along two axes: industry coverage (relationship) and product groups (execution capability). Most deals require one of each.'),
    q(4200011, 'Career Skills', 'Banking Workflow and Client Context', 'Pitch vs live deal',
      'An MD asks for "the standard live-deal turnaround" on a buyer outreach list. What does that imply about urgency and process compared to a pitch?',
      'Live deals have signed engagement letters, real deadlines, and named accountable workstreams — outputs are hours-to-days, not weeks',
      [
        ['No difference — pitch and live deal both involve slides', 'Pitches are speculative marketing; live deals are paid execution with binding deadlines. The work cadence is entirely different.'],
        ['Pitches are higher priority because they win mandates', 'A live deal is a paid engagement with reputational and financial consequences. It outranks a hypothetical pitch every time.'],
        ['Live deals have looser timelines because the mandate is already won', 'The opposite — winning a mandate starts a clock against closing, with weekly board, lender, and counsel touchpoints.'],
      ],
      'Pitching is sales; live-deal execution is delivery. Knowing which mode you are in determines whose deadline drives the work.'),
    q(4200012, 'Career Skills', 'Banking Workflow and Client Context', 'CIM vs teaser sequence',
      'On a sell-side, what is the typical sequence of buyer-facing documents and when does each go out?',
      'Teaser (no NDA, broad outreach) → NDA executed → CIM (full marketing book) → process letter and management presentation',
      [
        ['CIM first, then NDA, then teaser', 'The CIM contains confidential data and only goes to NDA-signing buyers. Sending it first would breach confidentiality.'],
        ['NDA, then teaser, then CIM', 'Teasers are anonymized one-pagers used before NDAs to filter interest. Requiring an NDA up front kills outreach efficiency.'],
        ['CIM and teaser sent together to maximize information', 'Combining them defeats the purpose of the teaser, which is to screen buyers before disclosing the company name and data.'],
      ],
      'The teaser-then-NDA-then-CIM sequence is how sell-sides control confidentiality while building a buyer funnel. Skipping steps leaks information or starves the process.'),
    q(4200013, 'Career Skills', 'Banking Workflow and Client Context', 'Workstream ownership',
      'A client asks "what is the next bottleneck on our deal?" The analyst lists ten open items. What is the better answer?',
      'Identify the single critical-path item (typically the gating workstream) and name its owner, due date, and dependencies',
      [
        ['Send the full ten-item list so the client can pick', 'Clients hire bankers to synthesize, not relay. Ten items is a tracker; the answer is which one is blocking the close.'],
        ['Tell the client everything is on track', 'Vague reassurance is worse than no answer. Clients want to know what could derail the deal so they can pull levers.'],
        ['Wait until the next weekly call to discuss', 'Real-time critical-path questions deserve real-time answers. Weekly cadences are for status, not blockers.'],
      ],
      'Good banking communication ladders detail to the audience. MDs and clients need critical-path clarity; the full tracker lives in the project file.'),
    q(4200014, 'Career Skills', 'Banking Workflow and Client Context', 'Diligence request scope',
      'A buyer\'s diligence list has 800 line items spanning legal, financial, commercial, and HR. Who at the seller should own coordination?',
      'A single seller-side project manager (often the CFO or a deal lead) routes requests to functional owners and gates responses through the banker and counsel',
      [
        ['The CEO personally answers each item', 'CEO time is the scarcest resource. Routing 800 items through the CEO would stall both the company and the deal.'],
        ['Each functional team responds directly to the buyer', 'Uncoordinated direct contact creates inconsistent answers, leaked information, and version conflicts. Centralized gating is essential.'],
        ['The banker drafts every response', 'Bankers manage flow and quality; functional owners know the answers. The right structure is collaborative, not banker-as-bottleneck.'],
      ],
      'Diligence management is project management. One owner, one queue, gated review — without it, the seller looks disorganized and answers contradict.'),
    q(4200015, 'Career Skills', 'Banking Workflow and Client Context', 'Signing vs closing',
      'A client asks why the deal is "signed but not closed" and whether they have been sold. What is the accurate explanation?',
      'Signing executes the purchase agreement; closing transfers ownership and cash and only happens after conditions (regulatory, financing, MAC) are satisfied',
      [
        ['Signing and closing are the same event', 'In any meaningful M&A deal they are separated by weeks or months for regulatory review, financing, and consent waterfalls.'],
        ['Closing comes first, signing comes after the press release', 'You cannot close without a signed agreement. Signing always precedes closing.'],
        ['Signing is informal; only closing has legal force', 'Signing creates binding contractual obligations — failure to close triggers reverse break fees or specific performance claims.'],
      ],
      'Sign-to-close is the period of regulatory, financing, and consent risk. The seller is contractually committed but not yet paid.'),

    // Chapter 2: Accounting and Financial Statement Links
    q(4103008, 'Career Skills', 'Accounting and Financial Statement Links', 'Revenue bridge',
      'A banker is building a three-statement model for a company whose revenue depends on price and volume. What is the strongest modeling approach?',
      'Forecast price, volume, and mix drivers explicitly before flowing revenue into the statements',
      [
        ['Grow revenue by the same percentage forever without support', 'Flat-percent growth has no diagnostic value — sensitizing the model means changing one number, not testing real drivers.'],
        ['Hardcode EBITDA and ignore revenue', 'EBITDA is an output of revenue and cost assumptions, not an input. Hardcoding it disconnects the model from operating reality.'],
        ['Forecast customer count only and assume every account pays the same price', 'Customer count is useful volume input, but it misses pricing, contract size, product mix, and upsell. Revenue needs both volume and price/mix drivers.'],
      ],
      'Banking models should expose the operating drivers behind the forecast. Driver-based revenue builds make assumptions easier to review and sensitize.'),
    q(4103009, 'Career Skills', 'Accounting and Financial Statement Links', 'Circularity warning',
      'A model interest expense calculation keeps changing after each recalculation because debt depends on cash flow and cash flow depends on interest. What issue is likely present?',
      'A circular reference that needs controlled handling or a simpler debt schedule approach',
      [
        ['A formatting problem caused by cell color', 'Cell color is cosmetic. Recalculation changing numbers is a logic loop, not a formatting issue.'],
        ['A valuation premium created by complexity', 'Circularity does not create value — it creates instability. The numbers are unreliable until the loop is resolved.'],
        ['A sign that interest expense should be deleted', 'Interest expense is real and material. The fix is to break the loop (iterative calc, average balance), not delete the line.'],
      ],
      'Debt, cash, and interest can create circularity. Analysts need to manage it deliberately so the model remains stable and reviewable.'),
    q(4105066, 'Career Skills', 'Accounting and Financial Statement Links', 'Balance sheet plug',
      'An analyst finishes a three-statement model and the balance sheet is off by exactly the annual change in debt. What should they check first?',
      'Whether debt financing flows through the cash flow statement and ending debt schedule correctly',
      [
        ['Whether the font size changed in the output tab', 'Font does not affect totals. A balance-sheet plug equal to debt change is a flow error, not a formatting issue.'],
        ['Whether revenue should be negative', 'Revenue is positive in normal operations; the imbalance is on the financing side, not revenue.'],
        ['Whether retained earnings ties to net income before checking the debt flow', 'Retained earnings is one place imbalances surface, but a plug that equals the annual change in debt points squarely at the financing flow, not the net income roll-forward.'],
      ],
      'A balance sheet that does not balance usually points to a broken flow between statements. Debt, cash, working capital, and retained earnings are common places to inspect.'),
    q(4105067, 'Career Skills', 'Accounting and Financial Statement Links', 'Working capital forecast',
      'A company is growing quickly and historically carries receivables near 60 days of sales. What is a practical way to forecast accounts receivable?',
      'Use days sales outstanding or another operating driver tied to revenue',
      [
        ['Hold receivables flat forever while revenue doubles', 'If receivables stay flat while sales double, DSO halves — implying customers pay twice as fast, which has no basis.'],
        ['Set receivables equal to EBITDA margin', 'EBITDA margin is a ratio of profitability; it has no mechanical link to collection timing.'],
        ['Forecast receivables as a fixed dollar amount carried forward from last year', 'A fixed dollar AR while sales grow implies collection cycles compress for no reason. The driver tying AR to sales is the relationship that makes the forecast defensible.'],
      ],
      'Working capital forecasts should follow business drivers. DSO links receivables to sales and makes cash flow assumptions easier to review.'),
    q(4107786, 'Career Skills', 'Accounting and Financial Statement Links', 'Deferred revenue bridge',
      'A subscription company bills annually, but the revenue forecast grows faster than deferred revenue supports. What should the analyst check?',
      'Whether billings, revenue recognition, deferred revenue, and cash collection assumptions reconcile',
      [
        ['Whether the model can recognize all annual billings as revenue on the invoice date', 'Annual billings are collected up front but recognized ratably over the contract term. Recognizing on invoice would overstate revenue and zero out deferred revenue.'],
        ['Whether cash can be ignored because EBITDA is busy', 'For subscription businesses, the deferred-revenue-to-cash bridge is often the most important diagnostic in the model.'],
        ['Whether deferred revenue belongs in the logo appendix', 'Deferred revenue is a balance-sheet line, not a slide. It directly affects valuation, working capital, and revenue quality.'],
      ],
      'Subscription models need clean links between bookings, billings, revenue, cash, and deferred revenue. The balance sheet often tells on the story.'),
    q(4107787, 'Career Skills', 'Accounting and Financial Statement Links', 'Working capital seasonality',
      'A retailer has heavy inventory builds before the holidays, but the model uses one flat working capital percentage. What is the better approach?',
      'Model seasonal inventory, payables, and cash needs based on the operating cycle',
      [
        ['Smooth everything because seasons are untidy', 'Smoothing hides the borrowing peak. Lenders care about peak working-capital needs, not the average.'],
        ['Use the same working capital days as a software company', 'Software has near-zero physical inventory; retail builds and sells through physical goods. The patterns are completely different.'],
        ['Let the revolver absorb mystery cash swings', 'Revolvers are limited; if seasonal needs exceed availability, the company breaches covenants or runs out of cash mid-quarter.'],
      ],
      'Working capital should reflect how the business actually uses cash. Seasonality can change borrowing needs and valuation outputs.'),
    q(4340000, 'Career Skills', 'Accounting and Financial Statement Links', 'Capex vs maintenance split',
      'An industrial target reports $80M of total capex on a $400M revenue base. The CIM does not split maintenance from growth. Why does this matter for the model?',
      'Maintenance capex sets a floor on the unlevered cash flow used in DCF and credit underwriting; growth capex can be flexed against IRR — without the split, the analyst cannot defend the cash conversion or the leverage capacity',
      [
        ['It does not matter — total capex is the only number lenders care about', 'Lenders explicitly underwrite to maintenance capex when sizing debt. A target showing 20% capex intensity may have 8% maintenance and 12% growth, or the reverse, and the credit case is wholly different.'],
        ['Growth capex should be reclassified as opex to lift EBITDA', 'Reclassifying capex as opex understates EBITDA and is non-GAAP without justification. The fix is disclosure of the split, not relabeling the spending.'],
        ['The split only matters once the target is public', 'Private-target diligence relies on a maintenance/growth split more than public reporting does, because the buyer is the one setting the post-close capex plan.'],
      ],
      'Capex intensity drives unlevered FCF and debt capacity. Sponsors and strategics both ask for a maintenance/growth split early because it changes both valuation and financing structure.'),
    q(4340001, 'Career Skills', 'Accounting and Financial Statement Links', 'EBITDA add-back discipline',
      'A seller proposes adjusted EBITDA of $52M from reported $40M. The bridge includes $4M legal settlement, $3M founder compensation normalization, $2M ERP implementation, and $3M "growth investments" with no detail. How should the banker treat the bridge in the marketing materials?',
      'Accept the legal settlement and founder comp normalization as standard QoE add-backs; flag the ERP cost for one-time treatment with a finite tail; reject the "growth investments" line until management can specify what was spent and why it is not recurring',
      [
        ['Accept the full bridge because management built it and they know the business', 'Management always builds the bridge optimistically. The banker\'s job is to filter what survives QoE so the marketed EBITDA is defensible, not to ratify every add-back.'],
        ['Reject every add-back and market on reported EBITDA only', 'Reported EBITDA includes one-time items that genuinely distort run-rate economics. The discipline is selective, not categorical refusal.'],
        ['Run two bridges — full management case and zero add-backs — and let buyers choose', 'Letting buyers pick their own EBITDA invites a race to the bottom on price. A single defensible adjusted number with a footnoted bridge is how serious sell-sides present.'],
      ],
      'Add-back discipline is one of the most-judged skills on a sell-side. Defensible normalizations (one-time legal, founder comp, owner perks) survive QoE; vague "investments" usually do not.'),

    // Chapter 3: Valuation Core
    q(4103010, 'Career Skills', 'Valuation Core', 'Multiple selection',
      'For a profitable software company with recurring revenue, which comparable-company metric is often useful alongside growth and margin context?',
      'Enterprise value to revenue or EBITDA, selected based on maturity and profitability',
      [
        ['Price per employee as the only valuation method', 'Price per employee is occasionally cited for industry color but has no defensible link to cash flow or earnings.'],
        ['Share price alone without share count', 'Share price is meaningless without share count — Coca-Cola and Berkshire have vastly different prices but comparable economic reality.'],
        ['Office rent divided by revenue', 'Rent-to-revenue is a cost-line ratio, not a valuation multiple. It tells you nothing about what the equity is worth.'],
      ],
      'Comps should match business model and maturity. Revenue multiples may fit high-growth software, while EBITDA multiples become more useful as profitability stabilizes.'),
    q(4103011, 'Career Skills', 'Valuation Core', 'DCF sanity',
      'A DCF implies a terminal value equal to 92% of enterprise value. What should the analyst do?',
      'Check whether long-term growth, margin, reinvestment, and exit assumptions are carrying too much of the valuation',
      [
        ['Delete the explicit forecast because terminal value is easier', 'Terminal value is more sensitive to assumptions than the explicit period. Removing the explicit forecast makes the model less defensible, not more.'],
        ['Trust the DCF output because the model is highly detailed', 'Tab count is not a quality indicator. A 92% terminal weighting is a structural concern regardless of model size.'],
        ['Raise the discount rate randomly until the output looks familiar', 'Random discount rate changes destroy defensibility. The fix is to address the assumptions causing the concentration.'],
      ],
      'A DCF can be overly dependent on terminal assumptions. Analysts should test whether long-term inputs are realistic and whether near-term cash flows support the conclusion.'),
    q(4105068, 'Career Skills', 'Valuation Core', 'Precedent filter',
      'A precedent transaction set includes deals from ten years ago, different geographies, and much larger targets. What should the banker do?',
      'Screen for transactions with comparable business models, size, geography, timing, and deal context',
      [
        ['Average every transaction because more rows always mean better analysis', 'Averaging garbage in produces garbage out. A clean set of three relevant comps beats a polluted set of twenty.'],
        ['Use only the highest multiple to please the client', 'Cherry-picking destroys credibility with the buy side and the board. Sophisticated reviewers will catch it immediately.'],
        ['Delete precedent analysis because it requires judgment', 'Every valuation method requires judgment. Precedents anchor in actual transaction prices, which is exactly why they are useful.'],
      ],
      'Precedent transactions are useful only when the set is relevant. Timing, market conditions, target profile, and deal structure all affect observed multiples.'),
    q(4105069, 'Career Skills', 'Valuation Core', 'Enterprise value bridge',
      'A public company has a $2.0 billion equity value, $500 million of debt, and $100 million of cash. What is enterprise value?',
      '$2.4 billion',
      [
        ['$1.6 billion', 'That subtracts both debt and cash. The formula adds debt and subtracts cash: 2.0 + 0.5 − 0.1 = 2.4.'],
        ['$2.5 billion', 'That adds debt but forgets to subtract cash. Cash reduces the net consideration a buyer would pay.'],
        ['$2.6 billion', 'That double-counts somewhere — likely adding both debt and cash. Cash is netted against debt, not added.'],
      ],
      'Enterprise value equals equity value plus debt minus cash, with other claims included when applicable. Here, 2.0 + 0.5 - 0.1 = 2.4 billion.'),
    q(4107318, 'Career Skills', 'Valuation Core', 'Calendar mismatch',
      'A comps table mixes calendar-year EBITDA for one company with fiscal-year EBITDA for another. What is the issue?',
      'The multiples may not be comparable unless periods are aligned or clearly adjusted',
      [
        ['Different calendars make valuation more creative', 'Inconsistent periods produce inconsistent multiples. Creativity is not the goal — comparability is.'],
        ['Comps never need period labels', 'Period labels are essential. NTM vs LTM vs CY produces materially different multiples in growing companies.'],
        ['Fiscal years matter only to auditors', 'Fiscal year alignment matters to anyone using the comps for valuation. A Q4-ending company at LTM is six months ahead of a Q2-ender.'],
      ],
      'Comparable analysis needs consistent time periods. Calendar mismatches can distort growth, margins, and valuation multiples.'),
    q(4107788, 'Career Skills', 'Valuation Core', 'Lease treatment',
      'A comps table compares companies with very different lease accounting and store footprints. What should the banker review?',
      'Whether enterprise value, EBITDA, and leverage metrics are lease-adjusted consistently',
      [
        ['Whether to use EV/EBITDAR (pre-rent) for every retail comp regardless of lease terms', 'EBITDAR is one way to normalize, but applying it universally without checking lease term, classification, and lease-adjusted debt mixes two different comparability fixes and creates fresh inconsistencies.'],
        ['Whether leases can be ignored because they are not loans', 'Operating leases are debt-like obligations. Post-ASC 842, they sit on the balance sheet and affect EBITDA depending on classification.'],
        ['Whether the highest multiple solves comparability', 'Picking a high multiple does not fix the underlying definitional mismatch. The fix is consistent treatment.'],
      ],
      'Lease treatment can distort valuation and credit metrics. Comparable analysis needs consistent definitions.'),
    q(4107331, 'Career Skills', 'Valuation Core', 'Share count cleanup',
      'A public comps output looks wrong because options and convertibles were ignored for one company. What should the banker fix?',
      'Use a proper diluted equity value calculation where dilutive securities matter',
      [
        ['Use basic shares for every company because it is faster', 'Basic shares understate equity value when companies have meaningful options or converts in the money.'],
        ['Remove the company ticker from the table', 'Removing comps to dodge a calculation issue narrows the analysis without fixing the methodology.'],
        ['Value the company based on website traffic', 'Web traffic is not a valuation metric and does not address the share-count question.'],
      ],
      'Equity value needs the right share count and treatment of dilutive instruments. Small shortcuts can create large valuation errors.'),
    q(4340010, 'Career Skills', 'Valuation Core', 'WACC build',
      'A mid-cap US industrials target has a target capital structure of 30% debt / 70% equity, a marginal tax rate of 25%, a pre-tax cost of debt of 6%, a risk-free rate of 4.0%, an equity risk premium of 5.5%, and a relevered beta of 1.2. What is the WACC, and which input is the most common source of error for a career-changer?',
      'WACC is approximately 8.8% (0.30 × 6.0% × (1−0.25) + 0.70 × (4.0% + 1.2 × 5.5%)); the most common error is using observed (levered) beta from a screen instead of unlevering, applying the target capital structure, and relevering',
      [
        ['WACC is approximately 7.2% — use the after-tax cost of debt for the equity leg too', 'The tax shield applies only to debt. Tax-effecting the equity cost confuses the capital structure with the tax structure and understates WACC.'],
        ['WACC is approximately 10.6% — skip the tax shield on debt and use a Bloomberg raw beta', 'Skipping the tax shield overstates the cost of capital and ignores why debt financing is favored. Raw beta also imports the comparable\'s leverage rather than reflecting the target.'],
        ['WACC is approximately 5.5% — equity risk premium is the cost of equity directly', 'ERP is added to the risk-free rate and scaled by beta. Using ERP alone strips out the most-important driver of equity cost.'],
      ],
      'WACC = (D/V) × Kd × (1−t) + (E/V) × Ke, with Ke from CAPM (Rf + β × ERP). The beta workflow (unlever comps, average, relever to target capital structure) is where most career-changers slip.'),
    q(4340011, 'Career Skills', 'Valuation Core', 'Football field synthesis',
      'A football field for a sell-side target shows: trading comps $1.8B–$2.4B (EV/EBITDA 9.0x–11.5x on $200M EBITDA), precedent transactions $2.2B–$2.8B, DCF $2.0B–$2.6B, 52-week trading range $1.6B–$2.1B, and LBO $1.7B–$2.0B at 22% IRR. Which framing is most useful for the IC discussion?',
      'Anchor the recommendation in the overlap zone roughly $2.0B–$2.4B, note that LBO and trading-range floors set walk-away psychology while precedent transactions set the strategic ceiling, and identify why each methodology produces its range so buyers cannot anchor on the outliers',
      [
        ['Average all five midpoints and recommend $2.15B', 'Averaging across methodologies treats them as equally weighted observations, which they are not. LBO floors and precedent ceilings carry different meanings for different buyer types.'],
        ['Recommend the top of the precedent range because it is the highest defensible number', 'Anchoring on the highest range tells buyers the seller is reaching. A football field is meant to show the band, not pick the top.'],
        ['Show only the methodologies that agree and drop the LBO and trading range', 'Hiding methodologies that produce lower numbers is the opposite of the football field\'s purpose. The discipline is to show the full band and explain why each range exists.'],
      ],
      'A football field is a synthesis tool, not a single number. Strategic buyers anchor near precedent transactions; sponsors anchor near LBO; public-market investors anchor near trading. The overlap zone is where the deal usually clears.'),

    // Chapter 4: M&A and Capital Markets Materials
    q(4103012, 'Career Skills', 'M&A and Capital Markets Materials', 'Process letter',
      'In a sell-side M&A process, why does the team ask bidders to submit indications of interest by a deadline with valuation range and key assumptions?',
      'To compare buyer interest, valuation logic, conditions, and next-round selection on a common basis',
      [
        ['To make bidders write more pages for no reason', 'IOIs are deliberately short. The structure exists to enable comparison, not to add busywork.'],
        ['To replace all confirmatory diligence', 'IOIs are preliminary, non-binding indications. Confirmatory diligence happens between LOI and signing.'],
        ['To guarantee that every bidder will close at the highest number', 'IOIs are non-binding; bidders routinely retrade or drop out. The IOI is a screening tool, not a price guarantee.'],
      ],
      'Process discipline helps a seller compare bids fairly. Valuation range, assumptions, financing, and conditions matter as much as headline interest.'),
    q(4103013, 'Career Skills', 'M&A and Capital Markets Materials', 'Working capital peg',
      'A buyer proposes a purchase price assuming a normal level of working capital at close. What is the purpose of the working capital peg?',
      'To prevent value leakage by ensuring the business is delivered with a normal operating level of working capital',
      [
        ['To make the buyer pay twice for cash', 'The peg is a settlement mechanism, not double payment. Cash is typically handled separately as a "cash-free, debt-free" adjustment.'],
        ['To eliminate the need for a closing balance sheet', 'The peg requires a closing balance sheet to true up against. It is the opposite of eliminating one.'],
        ['To guarantee that inventory can never change', 'Inventory will change between signing and closing — the peg measures and adjusts for that change, not prevents it.'],
      ],
      'A working capital peg protects the economics of the deal. It separates normal operating capital from value shifts that occur before closing.'),
    q(4105071, 'Career Skills', 'M&A and Capital Markets Materials', 'Synergy haircut',
      'A strategic buyer claims $80 million of cost synergies, but half depend on closing plants in countries with strict labor rules. What should the banker sensitize?',
      'Probability, timing, cost-to-achieve, and execution risk around the synergy estimate',
      [
        ['Use the full synergy number with no discount', 'Synergies with execution risk should be probability-weighted. Crediting them at face value inflates the deal economics.'],
        ['Credit the full synergy run-rate as if it arrives immediately', 'Synergies are realized post-close, often over 2–3 years. Pulling them forward distorts the IRR and accretion math.'],
        ['Exclude synergies entirely because they are uncertain', 'Synergies often justify the entire deal premium for strategic acquirers. Ignoring them misses the core thesis.'],
      ],
      'Synergies can drive value, but they are not magic confetti. Bankers should test timing, achievability, costs, and execution constraints.'),
    q(4107327, 'Career Skills', 'M&A and Capital Markets Materials', 'Exclusivity clock',
      'A buyer asks for 60 days of exclusivity after submitting an attractive but conditional bid. What should the seller evaluate?',
      'Whether the price, certainty, diligence scope, and process leverage justify pausing discussions with others',
      [
        ['Grant exclusivity because the number is pretty', 'A high price with weak certainty can collapse during exclusivity, leaving the seller with no fallback. Exclusivity should be earned with certainty, not just price.'],
        ['Never grant exclusivity under any circumstances', 'Most serious buyers will not invest in confirmatory diligence without exclusivity. Blanket refusal kills good deals.'],
        ['Let the buyer decide all deadlines after exclusivity', 'Exclusivity periods are negotiated. Letting the buyer control the clock removes the seller\'s pressure to close.'],
      ],
      'Exclusivity can help close a deal but reduces competitive tension. Sellers should trade it for enough value and certainty.'),
    q(4107800, 'Career Skills', 'M&A and Capital Markets Materials', 'Regulatory closing risk',
      'The highest bidder has antitrust overlap with the seller in two key markets. What should the banker compare?',
      'Price against regulatory risk, remedies, timing, reverse break fees, and certainty of close',
      [
        ['Only the headline bid because bigger is tidy', 'A higher bid with antitrust risk can fail to close, costing the seller months of process time and a public failed deal.'],
        ['Whether antitrust lawyers seem relaxed at lunch', 'Lawyer mood is not a diligence input. Formal antitrust analysis identifies HHI changes, market definitions, and likely remedies.'],
        ['Whether closing risk can wait until after signing', 'Closing risk needs to be priced into bid selection at signing. After signing the seller is locked in and the buyer holds all the leverage.'],
      ],
      'Deal value includes certainty. A lower price with a cleaner path can be better than a fragile headline number.'),
    q(4107796, 'Career Skills', 'M&A and Capital Markets Materials', 'Synergy multiple',
      'A buyer justifies a high price because of large cost synergies. How should the banker separate the analysis?',
      'Show standalone value, synergy value, execution risk, and how much value is shared with the seller',
      [
        ['Blend everything into one heroic multiple', 'Blending hides whether the buyer is overpaying. Separation lets the board see who captures the synergy value.'],
        ['Model the whole synergy case as day-one value', 'Synergies take 12–36 months to realize. Day-one assumption inflates accretion and IRR optics dishonestly.'],
        ['Exclude synergies from the analysis because they are not standalone value', 'Strategic buyers explicitly underwrite synergies. Ignoring them disconnects the model from the actual buying rationale.'],
      ],
      'Synergies can explain price, but they are not the same as standalone value. Clear separation helps negotiation and board review.'),
    q(4107791, 'Career Skills', 'M&A and Capital Markets Materials', 'Management forecast drift',
      'Management quietly lowers next year revenue in a working file after first-round bids are received. What should the banker escalate?',
      'Whether updated forecasts affect buyer communication, valuation, process credibility, and disclosure obligations',
      [
        ['Hide the file because bids are already in', 'Hiding material updates creates fraud risk if buyers later argue they were misled. Selective disclosure is worse than transparent revision.'],
        ['Rename the forecast optimistic-case', 'Relabeling without disclosing the change still misleads buyers who relied on the original forecast.'],
        ['Treat the forecast change as a post-signing cleanup item', 'Buyers who discover material changes post-signing pursue price adjustments or walk-away rights. Surprises destroy deals.'],
      ],
      'Forecast changes during a process require disciplined handling. Credibility depends on consistent, accurate information.'),
    q(4340020, 'Career Skills', 'M&A and Capital Markets Materials', 'Accretion / dilution read',
      'A strategic acquirer with a P/E of 22x is considering an all-stock acquisition of a target trading at an implied P/E of 16x. Before any synergies, what does this tell the analyst about the deal\'s likely accretion/dilution profile, and what is the right warning to put on the slide?',
      'Accretive on a static EPS basis because the buyer\'s P/E exceeds the target\'s — but the slide should warn that EPS accretion is not value creation, and that a stock-for-stock deal can be EPS-accretive while still destroying value if the strategic premium plus dilution exceed standalone value plus synergies',
      [
        ['Dilutive — the higher-P/E company always dilutes itself when buying a lower-P/E target', 'The standard accretion/dilution rule runs the opposite way: a higher-P/E buyer purchasing a lower-P/E target on stock is generally accretive before synergies, not dilutive.'],
        ['Accretive and therefore the deal creates shareholder value', 'EPS accretion is an accounting outcome driven by P/E differential. Value creation requires synergies (or strategic positioning) to exceed the control premium and integration costs.'],
        ['Cannot be determined without knowing the targets debt balance', 'Debt affects the financing mix and net income, but the accretion/dilution direction in an all-stock deal is set primarily by the P/E differential — debt is a refinement.'],
      ],
      'Accretion/dilution math is the most-requested public-company M&A slide. The mechanic (buyer P/E > target P/E in stock = accretion before synergies) is foundational; the discipline is separating EPS optics from value creation in the talking points.'),
    q(4340021, 'Career Skills', 'M&A and Capital Markets Materials', 'Sources and uses / debt capacity',
      'A sponsor proposes a $1.5B LBO of a software target with $150M of LTM EBITDA. Lenders indicate the market will support 6.0x first lien and 1.5x second lien at total leverage of 7.5x. The sponsor wants to write a $400M equity check. Does the sources-and-uses balance, and where is the risk in the structure?',
      'Uses are roughly $1.5B purchase plus ~$50M of fees and OID; sources are $900M first lien + $225M second lien + $400M equity = $1.525B, which balances within rounding — the risk is that 7.5x total leverage is at the top of market and any EBITDA miss compresses the cash-flow cushion against interest and amortization',
      [
        ['The deal does not work because the sponsor needs to write a larger equity check than $400M', 'Equity in the mid-20s percent of capitalization is well within typical sponsor LBO structures. The check size is consistent with the leverage levels indicated.'],
        ['Sources exceed uses by $200M and the surplus becomes a special dividend', 'Surplus on a sources-and-uses bridge is a sign of an arithmetic error, not a payout. Sources and uses must balance — the bridge is a constraint, not a cash distribution mechanism.'],
        ['Leverage is irrelevant because cash flow alone determines whether the deal works', 'Cash flow drives serviceability, but leverage covenants and ratings set the financing menu the sponsor can actually access. A deal that prices at 7.5x in a tight market may not clear at 7.5x six months later.'],
      ],
      'Sources and uses is the LBO bridge: purchase + refinancing + fees + OID on the uses side, debt tranches + rollover equity + sponsor equity on the sources side. The discipline is checking that the leverage stack is market-clearable and that EBITDA cushion supports the interest load.'),

    // Chapter 5: Execution, Comments, and Quality Control
    q(4103015, 'Career Skills', 'Execution, Comments, and Quality Control', 'Version control',
      'Two analysts are editing different copies of a live buyer list before a management presentation. What is the safest process move?',
      'Create one controlled master file, assign owners for edits, and reconcile changes before sending',
      [
        ['Let both files circulate and hope the newest one wins', 'Parallel editing produces conflicting versions sent to different parties. There is no winner — only confusion.'],
        ['Rename both files final and attach them together', 'Two "final" files defeats the entire point of a final version. Recipients will pick the wrong one.'],
        ['Ask the client to identify which version is correct', 'The banker controls the deal materials. Asking the client to disambiguate signals lack of process discipline.'],
      ],
      'Banking execution depends on version control. One source of truth and clear ownership reduce avoidable client-facing errors.'),
    q(4105074, 'Career Skills', 'Execution, Comments, and Quality Control', 'Footnote mismatch',
      'Minutes before sending a board deck, an analyst notices the summary page says 9.5x EBITDA while the valuation appendix says 9.1x. What is the right move?',
      'Pause the send, reconcile the source, update the deck consistently, and alert the team if timing is affected',
      [
        ['Send it because the numbers are close enough', 'Boards notice internal inconsistencies and lose confidence. Closeness is not consistency.'],
        ['Remove the appendix to hide the mismatch', 'Deleting the supporting work removes the audit trail. The summary number still needs to be verified, not abandoned.'],
        ['Change one number at random so the pages match', 'Forcing consistency without finding the source preserves the error and hides it. The actual fix requires identifying which number is correct.'],
      ],
      'Execution quality is built on consistency and escalation. Small-looking mismatches can damage credibility if they reach a client or board.'),
    q(4107320, 'Career Skills', 'Execution, Comments, and Quality Control', 'Buyer question log',
      'During diligence, three buyers ask overlapping questions and the client answers slightly differently each time. What should the deal team implement?',
      'A controlled Q&A log with reviewed responses and consistent data room updates',
      [
        ['Let each buyer receive a custom version of the facts', 'Buyers compare notes after the auction. Inconsistent answers across bidders surface as red flags and can be cited at signing.'],
        ['Ask buyers to stop being curious', 'Curiosity is exactly what bidders are paid to bring. Suppressing diligence questions reduces bid quality and certainty.'],
        ['Move all answers to phone calls with no notes', 'Phone-only answers create no audit trail, leak inconsistencies, and expose the seller to "you told me X" disputes later.'],
      ],
      'M&A processes need consistent information flow. A Q&A log reduces confusion, protects credibility, and creates a record.'),
    q(4107794, 'Career Skills', 'Execution, Comments, and Quality Control', 'Currency mismatch',
      'A cross-border acquisition model mixes euro revenue with dollar debt without a clear FX assumption. What is the issue?',
      'Currency assumptions should be explicit so revenue, debt, interest, and valuation are translated consistently',
      [
        ['Use a single spot rate on the model date and apply it forward across all years', 'A flat spot rate ignores forward curves, hedge programs, and translation vs transaction exposure. For a multi-year acquisition model the FX assumption deserves its own input row, not a hardcoded constant.'],
        ['Translate the income statement at the average rate but leave debt at historical cost', 'Mixed conventions produce a balance sheet that does not tie. Debt issued in a foreign currency must be remeasured each period or the leverage and interest-coverage metrics will drift.'],
        ['Defer the FX question until after the LOI is signed', 'Currency assumptions feed directly into purchase price, financing capacity, and accretion math. Waiting until post-LOI means the bid was supported by undefined numbers.'],
      ],
      'Cross-border models need clear FX conventions. Currency mismatches can quietly distort leverage, earnings, and purchase price analysis.'),
    q(4107793, 'Career Skills', 'Execution, Comments, and Quality Control', 'Formula break',
      'Right before a client call, an output tab shows a margin dip caused by a broken link to an old case. What should the analyst do?',
      'Fix the link, trace affected outputs, document the change, and alert the team if materials changed',
      [
        ['Change the chart scale until the dip vanishes', 'Hiding the visual symptom does not fix the broken formula. The underlying numbers are still wrong.'],
        ['Present anyway and note the dip in the appendix as a caveat', 'A live call is the wrong place to disclose a model break the team has not diagnosed. Pause, trace, and reissue if material — caveating a wrong number is still presenting a wrong number.'],
        ['Hardcode the prior-case output over the broken formula to preserve the chart', 'Hardcoding over a broken link hides the issue from the next reviewer and disconnects downstream outputs that may rely on the same formula chain.'],
      ],
      'Execution discipline means tracing errors to their impact. Fast fixes still need review when client materials may be affected.'),
    q(4107799, 'Career Skills', 'Execution, Comments, and Quality Control', 'Distribution list check',
      'A draft deck contains confidential auction updates and is about to be sent to a broad internal list. What is the right habit?',
      'Confirm recipients, permissions, and document version before sending sensitive materials',
      [
        ['Use the biggest list so nobody feels left out', 'Inclusion is the enemy of confidentiality. Auction materials should reach only the cleared deal team.'],
        ['Send first and rely on Outlook recall if the wrong person opens it', 'Outlook recall only works on the same Exchange tenant and only before the message is read. For live auction materials, send-then-recall is effectively a permanent breach.'],
        ['Remove confidentiality labels to reduce anxiety', 'Removing labels does not change the confidentiality of the content — it just removes the legal notice protecting it.'],
      ],
      'Sensitive deal materials need distribution discipline. Recipient checks are small steps that prevent large messes.'),
    q(4340030, 'Career Skills', 'Execution, Comments, and Quality Control', 'Tie-out discipline',
      'An MD asks for a "full tie-out" of a 90-page CIM the morning it ships. What does that workflow actually require, and what is the most common analyst miss?',
      'Every number on every page traces back to a sourced exhibit (audited statement, internal report, or labeled model cell); each footnote, header date, and chart label is cross-checked against the source — the most common miss is the second occurrence of a number that was tied out the first time but pasted from a stale tab in a later section',
      [
        ['Spot-check the headline numbers on the first three slides and skim the rest', 'A tie-out is not a spot check. Boards and buyers will notice the page where a single number drifts, regardless of how clean the rest of the book is.'],
        ['Verify the cover page, table of contents, and disclaimers and trust the body', 'The cover and disclaimers are template content. The risk lives in the body — financials, comps, and footnotes — which is what a real tie-out covers.'],
        ['Print the deck, hand it to the associate, and let them mark it up', 'A tie-out belongs to the analyst who knows the source files. Delegating without a source-file pass produces a paper-flat review that misses paste-error drift.'],
      ],
      'Tie-out is foundational analyst hygiene. The discipline: every number sourced, every number consistent across appearances, every date and label internally consistent. The trap is repeated numbers that drift between sections.'),
    q(4340031, 'Career Skills', 'Execution, Comments, and Quality Control', 'Management presentation prep',
      'Two weeks before management presentations on a sell-side, the CEO has not seen the buyer Q&A doc. The MD is on vacation, the VP is buried, and the analyst owns prep coordination. What is the highest-leverage move?',
      'Build a draft Q&A from the CIM, the data room flags, and the model sensitivities; circulate it to the VP for review; book two CEO rehearsal sessions and a mock Q&A with deal counsel — the deliverable is a CEO who answers from talking points, not improvises',
      [
        ['Wait for the MD to return and run rehearsals the day before the meeting', 'Twenty-four hours is not enough time for a CEO to internalize hard-question answers. Buyer meetings turn on whether the CEO answers customer concentration and margin questions credibly under pressure.'],
        ['Send the CIM to the CEO and trust they will prepare from it on their own', 'A CIM is a marketing document. It does not anticipate the buyer\'s hard questions — that is what the Q&A and the rehearsal are for.'],
        ['Treat rehearsals as optional polish instead of core preparation', 'Under-prepared CEOs sound improvised and lose credibility on customer concentration, churn, or margin questions. Rehearsal builds confidence, not staginess.'],
      ],
      'Management meeting prep is a real banker workstream. The deliverables are a written Q&A, two rehearsal sessions, and a mock under pressure. The trap is treating it as optional polish when the buyer meeting is the single highest-stakes moment in the process.'),

    // Capstone: Sell-Side Analyst Packet and Synthesis
    // The syllabus capstone work-output is "an analyst packet for a fictional sell-side process:
    // company profile, financial summary, valuation range, buyer rationale page, diligence tracker,
    // and client-ready recommendation." These three questions simulate that integrative work
    // around a shared fictional client — Northwind Industries, a US specialty industrial
    // distributor — so the learner follows one deal across all three decision points.
    q(4340100, 'Career Skills', 'Capstone: Sell-Side Analyst Packet and Synthesis', 'Football field reconciliation for the IC',
      'You are the analyst on a sell-side mandate for Northwind Industries, a US specialty industrial distributor: $450M revenue, $55M adjusted EBITDA, 4% LTM growth (NTM expected ~6% post-bolt-on), $80M net debt, primarily family-owned with the founder-CEO retiring, considering a sale to either a strategic distributor or a private equity sponsor. Your football field: trading comps $495M–$605M (9.0x–11.0x EBITDA), precedent transactions $660M–$770M, DCF $580M–$680M, LBO $530M–$605M at 22% IRR. Management wants to anchor on the high end of precedent transactions ($770M) in the CIM. What is the most useful position to bring to the IC meeting?',
      'Recommend marketing the football field with all four methodologies and anchoring the discussion in the overlap zone $580M–$660M; explain that strategic buyers may pay near precedent ceilings if synergies justify the premium but that anchoring the CIM on $770M sets seller expectations buyers will retrade against',
      [
        ['Defer to management and lead the CIM with the $770M anchor', 'Anchoring on the highest precedent in the CIM signals to buyers that the seller is reaching, which invites a retrade and damages process credibility before bids arrive.'],
        ['Drop precedent transactions from the football field because they reflect a different cycle', 'Dropping a methodology to suppress a range hides analysis the IC needs. The discipline is to show the band and explain why each methodology produces its number.'],
        ['Recommend a pre-emptive sale to the strategic at $770M and skip the auction', 'A pre-emptive sale forfeits competitive tension that may have produced an even better number, and skipping the auction without a clear bidder commitment is rarely the right move.'],
      ],
      'A capstone packet integrates valuation methodology selection (Ch3), buyer-rationale logic (Ch4), and client-management discipline (Ch1). The football field is the analyst\'s synthesis tool — the IC discussion is where the analyst calibrates seller expectation against likely buyer behavior, not where they hand the client what they want to hear.'),
    q(4340101, 'Career Skills', 'Capstone: Sell-Side Analyst Packet and Synthesis', 'Buyer-list construction for Northwind',
      'For Northwind, the MD asks you to build a 30-name buyer list mixing strategics and sponsors for first-round outreach. The CEO wants to exclude two of the most logical strategic acquirers (competitors in the home market) because of competitive sensitivity. Working capital is seasonal and the model has confidential customer concentration data (top 3 customers = 38% of revenue). How do you structure the list and outreach sequence?',
      'Honor the CEO\'s two-name exclusion list as a documented client direction; segment remaining strategics by deal logic (geographic adjacency, product complementarity, channel) and sponsors by sector fit and platform-vs-add-on thesis; sequence teaser-then-NDA-then-CIM with the customer concentration data gated behind a second-tier NDA in the data room, not in the CIM',
      [
        ['Include the two excluded competitors anyway because the buyer list should be exhaustive', 'A sell-side buyer list runs at the client\'s direction. Including names the CEO excluded violates the engagement and risks leaking strategic information to direct competitors.'],
        ['Put the customer concentration data in the CIM to demonstrate transparency', 'Top-3 customer concentration is exactly the data that belongs behind a second NDA tier or in a management session, not in the broadly-distributed CIM. Transparency in process does not mean disclosing concentration risk to the entire buyer universe upfront.'],
        ['Only approach sponsors because strategics will leak the process', 'Strategic buyers often pay the highest prices because of synergies. Excluding them categorically forfeits the price ceiling — leak risk is managed through NDA discipline and staged disclosure, not exclusion.'],
      ],
      'Buyer-list construction integrates client relationship management (Ch1), confidentiality discipline (Ch5), and buyer-rationale logic (Ch4). The discipline is honoring client direction while structuring outreach and data disclosure to preserve the highest-value bidders without exposing sensitive information prematurely.'),
    q(4340102, 'Career Skills', 'Capstone: Sell-Side Analyst Packet and Synthesis', 'Client recommendation calibration',
      'Two weeks before signing on Northwind, the field has narrowed to two bidders: a strategic at $660M all-cash with a 4-month antitrust closing path and a 2% reverse break fee, and a sponsor at $680M with rollover equity and a financing condition (debt commitment letter received, no closing condition removal yet). The board asks for your recommendation. What is the most defensible IC-style answer?',
      'Recommend the strategic at $660M as the higher-certainty path: the $20M premium from the sponsor is more than offset by financing-condition risk and a longer fragility window — but propose first asking the sponsor to remove the financing condition or improve the reverse termination fee, and proceed with the strategic if the sponsor will not match certainty',
      [
        ['Recommend the sponsor unconditionally because the headline price is $20M higher', 'A higher headline with a financing condition and weaker reverse fee is not necessarily a higher cleared price. The discipline is to weigh certainty against price, not pick the bigger number.'],
        ['Recommend the strategic and stop engaging the sponsor immediately', 'Walking away from the second bidder destroys competitive tension and process leverage. The right move is to use the strategic\'s certainty as a lever to improve the sponsor\'s certainty before deciding.'],
        ['Recommend reopening the auction to a third round so the board can pick from a wider field', 'A third round at this stage signals indecision and risks both bidders dropping out. The board hired the bank to recommend, not to refer the question back.'],
      ],
      'A capstone recommendation integrates valuation (Ch3), deal mechanics (Ch4), execution discipline (Ch5), and client communication (Ch1). The form is not "pick the higher number" — it is "name the verdict, the conditions, the leverage move, and the fallback" in the same paragraph. That is the analyst packet the syllabus capstone asks for.'),
    // Chapter expansions (per-file banks): Ch1–5 + Capstone.
    ...ibCh1Questions,
    ...ibCh2Questions,
    ...ibCh3Questions,
    ...ibCh4Questions,
    ...ibCh5Questions,
    ...ibCapstoneQuestions,
  ], IB_QUESTION_DIFFICULTY), [{ subTopics: IB_SUB_TOPICS, mentorHints: IB_MENTOR_HINTS, correctShortened: IB_CORRECT_SHORTENED, source: 'ib' }]),

  // ---------------------------------------------------------------------------
  // EQUITY RESEARCH ROADMAP
  // Syllabus chapters:
  //  1. Company and Industry Setup
  //  2. Filings, Earnings, and Management Commentary
  //  3. Forecasting and Model Discipline
  //  4. Valuation and Rating Logic
  //  5. Research Note and Investor Debate
  // Note: topic normalized to 'Career Skills' across the cluster.
  // ---------------------------------------------------------------------------
  equityResearchRoadmap: runPolish(tagDifficulty([
    // Chapter 1: Company and Industry Setup
    q(4103020, 'Career Skills', 'Company and Industry Setup', 'Channel check bias',
      'An analyst speaks with three enthusiastic resellers and wants to raise the full-year industry forecast. What should happen before relying on the checks?',
      'Assess sample representativeness, incentives, contrary evidence, and how the data maps to reported revenue',
      [
        ['Use the comments directly because positive checks are always predictive', 'Three resellers is a tiny sample, and resellers have incentives to talk up their pipeline regardless of true demand.'],
        ['Discount every channel check because the sample is biased', 'Channel checks are a core variant-perception tool when used carefully. Blanket dismissal forecloses the right kind of edge.'],
        ['Ask only the largest reseller and stop there', 'Concentrating on one source ignores selection bias. Big resellers may have very different incentives than the broader channel.'],
      ],
      'Channel checks can be useful but biased. Analysts need to evaluate sample quality, incentives, triangulation, and whether checks actually connect to company results.'),
    q(4105080, 'Career Skills', 'Company and Industry Setup', 'Share versus market',
      'An apparel company grows revenue 6% while the category grows 12%. What industry question should the analyst ask?',
      'Whether the company is losing market share despite absolute revenue growth',
      [
        ['Whether the category should be ignored because company sales grew', 'Growing slower than the category means losing share, which often precedes margin pressure as the company chases customers back.'],
        ['Whether all competitors must be shrinking', 'Logically false — if the category grows 12% and this company grows 6%, other competitors must be growing faster than 12%.'],
        ['Whether market share is always unchanged when sales rise', 'Share is a relative metric. Rising sales below the market rate is share loss by definition.'],
      ],
      'Company growth needs industry context. A business can grow revenue and still lose share if the market is expanding faster.'),
    q(4105081, 'Career Skills', 'Company and Industry Setup', 'Input cost read',
      'A packaged food company faces rising commodity costs but has announced price increases that take effect next quarter. What should the analyst model?',
      'Near-term margin pressure and possible later recovery depending on pricing power and volume elasticity',
      [
        ['Immediate margin expansion with no customer reaction', 'Price increases lag cost increases here, and customers may trade down. Both effects work against immediate margin expansion.'],
        ['No effect because commodity costs are outside the company', 'Commodity costs flow directly into COGS. They are firmly inside the income statement.'],
        ['A permanent revenue decline by definition', 'Price increases typically raise revenue per unit; the volume response determines net effect. Permanent decline is not the default.'],
      ],
      'Input cost inflation flows through margins based on timing, hedging, pricing power, and volume response. Analysts should model both cost lag and demand risk.'),
    q(4107337, 'Career Skills', 'Company and Industry Setup', 'Capacity wave',
      'Several competitors announce new capacity in a market with slowing demand. What is the likely industry question?',
      'Whether oversupply could pressure pricing, utilization, and margins',
      [
        ['Whether more capacity always raises prices', 'Excess capacity in a slowing market is the textbook setup for price wars, not price increases.'],
        ['Whether demand stops mattering after factories open', 'Demand drives utilization. Factories without orders sit idle and erode margins faster than they help.'],
        ['Whether competitors coordinate perfectly forever', 'Tacit coordination breaks under capacity pressure — someone always defects to fill plants, and pricing collapses.'],
      ],
      'Industry structure shapes earnings. Capacity additions can hurt pricing if demand does not absorb supply.'),
    q(4107807, 'Career Skills', 'Company and Industry Setup', 'New entrant pricing',
      'A well-funded entrant starts discounting in the company\'s core market. What is the research issue?',
      'Whether competition could pressure pricing, share, margins, or customer acquisition costs',
      [
        ['Whether discounts are automatically temporary', 'Well-funded entrants can sustain discounts for years. Assuming temporary discounting misses the durability of the competitive threat.'],
        ['Whether incumbents are immune to new logos', 'No incumbent is immune. Even strong brands lose share to new entrants when pricing pressure is sustained.'],
        ['Whether market maps should stay pretty', 'Aesthetics are not the issue. The forecast model needs updating, not the chart palette.'],
      ],
      'Industry structure affects estimates. New competition can alter growth and profitability even before reported numbers move.'),
    q(4107816, 'Career Skills', 'Company and Industry Setup', 'Regulation cost pass-through',
      'New regulation raises compliance costs across the industry, but larger competitors may absorb it more easily. What should the analyst study?',
      'Cost pass-through, scale advantage, pricing behavior, and potential share shifts',
      [
        ['Whether regulation affects everyone identically', 'Fixed compliance costs are regressive at scale — small competitors lose margin faster than large ones, creating share opportunity.'],
        ['Whether smaller companies can ignore rules politely', 'Regulation is enforced. Ignoring it leads to penalties or exit, not cost relief.'],
        ['Whether cost increases improve margins automatically', 'Cost increases pressure margins unless fully passed through to customers, which depends on pricing power.'],
      ],
      'Regulation can reshape competitive dynamics. The impact depends on scale, pricing power, and customer behavior.'),

    // Chapter 2: Filings, Earnings, and Management Commentary
    q(4103021, 'Career Skills', 'Filings, Earnings, and Management Commentary', 'Guidance cut',
      'A company cuts guidance because a major customer delayed orders, but backlog remains intact and delivery shifts by one quarter. What is the best first-pass interpretation?',
      'Distinguish timing delay from demand destruction before changing the long-term thesis',
      [
        ['Treat the delay as permanent demand destruction', 'A one-quarter shift with intact backlog is the textbook definition of timing, not loss. Overreacting kills the thesis on noise.'],
        ['Treat intact backlog as guaranteed conversion', 'Backlog conversion is conditional. The analyst should track the next quarter\'s actual conversion, not assume it.'],
        ['Raise estimates because delayed orders sound mysterious', 'Delayed orders mean revenue is later, not higher. Raising estimates without basis is the opposite of analytical rigor.'],
      ],
      'Research judgment separates timing from structural change. Backlog quality, customer behavior, and margin impact determine whether the thesis changed.'),
    q(4105082, 'Career Skills', 'Filings, Earnings, and Management Commentary', 'Beat quality',
      'A company beats EPS because tax rate was lower than expected, while operating profit missed. What is the best note angle?',
      'Highlight that the headline beat was lower quality because operating performance was weaker',
      [
        ['Call it a clean beat because EPS is the only line that matters', 'EPS quality matters as much as EPS level. A tax-driven beat does not repeat the way an operating beat does.'],
        ['Treat the low tax rate as equivalent to operating improvement', 'Tax rate is highly recurring at a normalized level. The issue is that this quarter\'s rate was below the normal level.'],
        ['Upgrade automatically because any beat is bullish', 'Operating misses with tax beats often precede further weakness. Automatic upgrades miss the warning signal.'],
      ],
      'Earnings quality matters. Analysts should separate operating performance from below-the-line items before changing estimates or recommendations.'),
    q(4105083, 'Career Skills', 'Filings, Earnings, and Management Commentary', 'Catalyst calendar',
      'A Buy-rated stock needs evidence of demand recovery, and the next two data points are monthly industry shipments and management guidance. What should the analyst do?',
      'Tie the catalyst path to those data points and define what would confirm or challenge the thesis',
      [
        ['Wait for the stock to move before updating the thesis', 'Price-reactive research is by definition lagging. The thesis should set expectations before the data, not after.'],
        ['Remove catalysts because they add accountability', 'Catalysts force accountability, which is what makes research credible. Removing them undermines the rating.'],
        ['Use only the annual report from last year', 'Old data does not move the thesis. The catalyst calendar exists because new information is what changes estimates.'],
      ],
      'A useful research thesis has observable milestones. Catalyst calendars help investors understand what evidence matters and when it may arrive.'),
    q(4107339, 'Career Skills', 'Filings, Earnings, and Management Commentary', 'Backlog conversion',
      'A machinery company reports record backlog, but management says component shortages will delay shipments. What should the analyst model?',
      'The timing of backlog conversion, revenue recognition, working capital, and margin impact',
      [
        ['Immediate revenue for the full backlog', 'Backlog converts as units ship and pass revenue-recognition criteria. Component shortages explicitly push that timing.'],
        ['No revenue ever because delays exist', 'Delays shift timing, not existence. The backlog still converts eventually, just later than originally modeled.'],
        ['A price target based only on backlog size', 'Backlog size means nothing without conversion timing and margin. A target price built on backlog alone ignores cash flow timing.'],
      ],
      'Backlog is not the same as current revenue. Conversion timing and execution constraints matter for estimates.'),
    q(4107809, 'Career Skills', 'Filings, Earnings, and Management Commentary', 'Guidance wording',
      'Management keeps annual guidance but says the back half now requires stronger conversion than usual. What should the analyst flag?',
      'The guidance may carry higher execution risk even without a formal cut',
      [
        ['Guidance is unchanged, so risk is unchanged', 'Unchanged numbers with harder underlying assumptions are riskier numbers. Risk is about probability, not just the central case.'],
        ['Back-half weighting is always free', 'Back-half weighting concentrates execution risk into one quarter. A miss in Q4 leaves no time to recover.'],
        ['Conversion rates are only a sales-team hobby', 'Conversion rates are how pipeline becomes revenue. They drive whether guidance is achievable.'],
      ],
      'Subtle guidance language can matter. Analysts should identify when unchanged numbers depend on tougher assumptions.'),
    q(4107817, 'Career Skills', 'Filings, Earnings, and Management Commentary', 'Preannounce read',
      'A company preannounces weak revenue but says demand is already recovering. What should the analyst look for next?',
      'Evidence in orders, backlog, channel checks, and management credibility before rebuilding estimates',
      [
        ['Build recovery into the model because management sounded confident', 'Management always frames preannouncements with forward optimism. The analyst job is to verify with independent evidence.'],
        ['Cut estimates to zero for dramatic effect', 'Zero estimates ignore the company continuing to generate revenue. Discipline requires calibration, not theater.'],
        ['Wait for the annual report before updating the thesis', 'Preannouncements move stocks immediately. Waiting for the 10-K means missing the actionable window.'],
      ],
      'Newsflow should be translated into evidence and estimates. Recovery claims need support before they become model assumptions.'),

    // Chapter 3: Forecasting and Model Discipline
    q(4103016, 'Career Skills', 'Forecasting and Model Discipline', 'Segment mix',
      'A retailer revenue beat came entirely from a low-margin wholesale segment while the high-margin direct segment declined. What should the analyst examine first?',
      'Whether the revenue mix shift changes gross margin, earnings quality, and the forward thesis',
      [
        ['Raise the target price because all revenue is equally valuable', 'Revenue value depends on margin. A wholesale dollar can be worth a fraction of a direct dollar at the EBITDA line.'],
        ['Treat the total revenue beat as enough evidence', 'Segment detail is exactly what diagnoses earnings quality. Total sales is the headline, not the story.'],
        ['Apply direct-channel margins to wholesale revenue', 'Wholesale typically carries lower gross margins than direct in this business model. Mix shift compresses margins, not expands.'],
      ],
      'Equity research analysis should connect revenue composition to margin and thesis quality. A headline beat can hide a weaker earnings mix.'),
    q(4103017, 'Career Skills', 'Forecasting and Model Discipline', 'DSO clue',
      'A company reports 10% sales growth, but receivables grow 40% and days sales outstanding rises sharply. What is the best research concern?',
      'Cash collection or revenue quality may be weakening',
      [
        ['The stock must be undervalued because receivables are assets', 'Receivables growing 4× sales growth often signal channel stuffing or collection problems — quality issues, not value.'],
        ['Sales growth is automatically higher quality when cash lags', 'The opposite — cash conversion is a quality marker. Cash lagging revenue is a warning, not a strength.'],
        ['The balance sheet can be ignored in earnings season', 'Balance sheet signals are often the leading indicator. Earnings-only analysis misses the receivables warning entirely.'],
      ],
      'Receivables rising faster than sales can indicate collection pressure or aggressive recognition. It is a signal to investigate, not an automatic conclusion.'),
    q(4103022, 'Career Skills', 'Forecasting and Model Discipline', 'Operating leverage',
      'Revenue is expected to grow 8%, while fixed costs grow only 2%. What margin concept should the analyst consider?',
      'Positive operating leverage if incremental revenue carries higher contribution after fixed costs',
      [
        ['Negative working capital because costs changed', 'Operating leverage is an income-statement concept about margin expansion, not working capital.'],
        ['Dilution from share count alone', 'Share count is unaffected by cost growth. Dilution is unrelated to the operating leverage question.'],
        ['A lower gross margin by definition', 'Gross margin can expand if contribution margin is high and fixed cost growth is slow. The setup typically favors expansion, not compression.'],
      ],
      'Operating leverage occurs when revenue grows faster than fixed operating costs, allowing margins to expand if variable costs and mix cooperate.'),
    q(4105076, 'Career Skills', 'Forecasting and Model Discipline', 'Inventory buildup',
      'A manufacturer reports flat sales but inventory rises 28% ahead of a slowing order environment. What should the analyst investigate?',
      'Whether demand is weakening, production is ahead of sales, and future margins may face pressure',
      [
        ['Treat the inventory build as proof of future sales', 'In a slowing market, rising inventory often signals overproduction, future markdowns, or obsolescence — not bullish demand.'],
        ['Treat inventory as irrelevant because it sits on the balance sheet', 'Inventory builds become future COGS and write-downs that hit the income statement. Ignoring them misses the lag.'],
        ['Raise estimates because warehouses look confident', 'Warehouses are storage, not signal. The signal is whether the build matches forward demand, which the prompt says it does not.'],
      ],
      'Balance sheet signals can foreshadow earnings risk. Inventory growth should be compared with demand, production plans, obsolescence risk, and margin assumptions.'),
    q(4105077, 'Career Skills', 'Forecasting and Model Discipline', 'Estimate flow-through',
      'A company guides revenue $50 million below prior expectations with a 30% contribution margin. Ignoring offsets, what EBITDA impact should the model reflect?',
      'A $15 million EBITDA reduction',
      [
        ['$5 million reduction', '$5M would imply a 10% contribution margin, not the 30% stated.'],
        ['$30 million increase', 'Revenue cuts reduce EBITDA, not increase it. The direction is wrong.'],
        ['$50 million reduction', '$50M would imply 100% contribution margin — impossible since variable costs accompany the revenue.'],
      ],
      'Contribution margin estimates how much revenue change flows to profit. Here, 30% of $50 million is a $15 million EBITDA headwind.'),
    q(4105084, 'Career Skills', 'Forecasting and Model Discipline', 'Deferred revenue clue',
      'A subscription company reports billings growth above revenue growth and deferred revenue rises. What might this indicate?',
      'Bookings or invoicing momentum may be ahead of recognized revenue, subject to contract and renewal details',
      [
        ['Revenue recognition rules no longer apply', 'GAAP recognition rules always apply. Deferred revenue is the mechanism by which they apply, not an exception.'],
        ['The company has collected no cash', 'Deferred revenue typically reflects cash already collected for services to be delivered. Collection has happened, recognition has not.'],
        ['All deferred revenue is bad debt', 'Deferred revenue is a liability for services owed, not a doubtful receivable. It is the opposite of bad debt.'],
      ],
      'Deferred revenue can show cash collected or billed before revenue recognition. Analysts should connect billings, contract duration, renewals, and revenue conversion.'),
    q(4107802, 'Career Skills', 'Forecasting and Model Discipline', 'Billings slowdown',
      'A software company beats revenue but billings growth slows sharply. What should the analyst examine?',
      'Whether future revenue growth is weakening despite the current reported beat',
      [
        ['Whether billings are too boring for investors', 'Billings are arguably the most important leading indicator for subscription businesses. Boring is not the issue — predictive power is.'],
        ['Whether revenue beats erase all forward risk', 'Revenue is backward-looking; billings tell you about next quarter. A beat with weakening billings is a setup for a future miss.'],
        ['Whether subscription companies should avoid balance sheets', 'Subscription analysis depends on the balance sheet (deferred revenue, RPO). Avoiding it loses the most informative data.'],
      ],
      'Equity research looks through reported results to forward indicators. Billings can signal future subscription momentum.'),
    q(4107814, 'Career Skills', 'Forecasting and Model Discipline', 'Pricing versus volume',
      'A manufacturer reports revenue growth from price increases while units decline. What should the model test?',
      'Whether pricing power can offset volume weakness without damaging demand or margins',
      [
        ['Model unlimited price increases with no elasticity response', 'Price elasticity bites eventually. Repeated increases past a threshold accelerate volume loss faster than price compensates.'],
        ['Focus only on units because price is decorative', 'Price is the lever that drives revenue per unit. Ignoring it misses the entire growth source.'],
        ['Use revenue growth as proof that all is well', 'Price-led growth with volume decline can be the warning signal for share loss or trade-down — not proof of health.'],
      ],
      'Revenue drivers tell different stories. Price-led growth may be healthy or fragile depending on elasticity and competition.'),

    // Chapter 4: Valuation and Rating Logic
    q(4103018, 'Career Skills', 'Valuation and Rating Logic', 'Multiple discipline',
      'A stock trades above peers, but it also has faster growth, higher margins, and better free cash conversion. What is the most disciplined valuation response?',
      'Test whether the premium is justified by fundamentals and scenario risk',
      [
        ['Call it expensive solely because the multiple is higher', 'Higher multiples are rational for better businesses. Headline-only analysis misses the quality justification.'],
        ['Call it cheap solely because management is confident', 'Management confidence is not a valuation input. The analyst must do the quality-vs-price work independently.'],
        ['Use only an absolute valuation view with no peer anchor', 'Peer context is what makes relative valuation possible. Ignoring comps means no anchor for the multiple.'],
      ],
      'Relative valuation needs context. A premium multiple may be justified if growth, margins, cash conversion, and risk support it.'),
    q(4103019, 'Career Skills', 'Valuation and Rating Logic', 'Target price bridge',
      'An analyst moves from Hold to Buy after raising estimates and the target multiple. What should the published note clearly explain?',
      'The estimate changes, valuation assumptions, catalyst path, and risks to the new recommendation',
      [
        ['Only that the analyst feels more positive', 'Sentiment is not a thesis. Clients need an auditable chain from evidence to estimates to target.'],
        ['The exact color used in the valuation chart', 'Visual choices are presentation, not analysis. The substance is the math behind the chart.'],
        ['A recommendation change with no target price support', 'A rating without a defensible target is unenforceable. Compliance and clients both require the math.'],
      ],
      'A recommendation change needs a clear bridge from evidence to estimates, valuation, catalysts, and risks. Readers should be able to audit the reasoning.'),
    q(4105078, 'Career Skills', 'Valuation and Rating Logic', 'Risk-reward math',
      'A stock trades at $40, the analyst base-case target is $52, and downside support is estimated at $34. What is the cleanest risk-reward framing?',
      'About $12 upside versus $6 downside, or roughly 2-to-1 upside to downside',
      [
        ['Equal upside and downside because both are estimates', 'The math gives different magnitudes: $12 vs $6. Treating them as equal ignores the asymmetry the analyst identified.'],
        ['No downside because the analyst has a target price', 'Target prices are base cases. Downside support is a separate scenario, and it implies a real $6 loss.'],
        ['A guaranteed 30% return', 'Targets are estimates, not guarantees. Treating them as certain misrepresents the risk to clients.'],
      ],
      'Risk-reward frames upside and downside against current price. It is not a guarantee, but it helps connect recommendation strength to scenario outcomes.'),
    q(4105079, 'Career Skills', 'Valuation and Rating Logic', 'Multiple compression',
      'A company beats EPS, but the stock falls because management lowers long-term growth expectations. What likely happened?',
      'The market reduced the valuation multiple because future growth quality looked weaker',
      [
        ['EPS beats always force stocks up', 'Stocks discount forward expectations. A current beat with a forward cut nets to multiple compression.'],
        ['The income statement stopped mattering forever', 'The income statement matters — but the forward-looking part (growth) reset, which moves the multiple immediately.'],
        ['The stock price changed only because of the ticker symbol', 'Ticker symbols are identifiers, not price drivers. The cause was the forward growth reset.'],
      ],
      'Stocks react to expectations, not just reported numbers. A beat can be outweighed by weaker forward growth, margins, risk, or valuation support.'),
    q(4107334, 'Career Skills', 'Valuation and Rating Logic', 'Sum-of-parts moment',
      'A conglomerate has a fast-growing software segment and a shrinking hardware segment. What valuation approach may help?',
      'A sum-of-the-parts analysis using appropriate metrics for each segment',
      [
        ['One blended multiple with no segment discussion', 'A blend hides the value of the better segment by averaging it down with the worse one. SOTP reveals what is actually inside.'],
        ['Value every segment at the highest software multiple', 'Cherry-picking the highest multiple inflates valuation. Each segment deserves its own appropriate comp set.'],
        ['Exclude the hardware segment because the software story is more fashionable', 'Fashion is not analysis. A shrinking segment still generates cash and consumes capital; both matter.'],
      ],
      'Different businesses may deserve different valuation frameworks. SOTP analysis can reveal what the market is assigning to each piece.'),
    q(4107805, 'Career Skills', 'Valuation and Rating Logic', 'Terminal growth check',
      'A DCF uses terminal growth above expected long-term industry growth. What should the analyst do?',
      'Justify or revise the assumption so terminal value does not overstate durable economics',
      [
        ['Use a higher rate because the model likes it', 'Terminal growth above long-term industry growth implies infinite share gain, which is impossible.'],
        ['Hide the terminal assumptions in tiny text', 'Hidden assumptions get caught in review. Defensibility requires explicit, visible inputs.'],
        ['Use a terminal growth rate above long-run market capacity', 'No company outgrows its market in perpetuity. Terminal assumptions must respect mathematical limits.'],
      ],
      'Valuation assumptions need economic plausibility. Terminal value is powerful enough to deserve adult supervision.'),
    q(4107815, 'Career Skills', 'Valuation and Rating Logic', 'Scenario-weighted view',
      'A turnaround stock has a wide range of outcomes tied to debt refinancing. What valuation framing may help clients?',
      'A scenario-weighted analysis showing upside, base, downside, and key probabilities',
      [
        ['One precise target price with no caveats', 'A point target hides the binary risk. Refinancing success/failure produces very different valuations.'],
        ['Value it only on last year earnings', 'Last year\'s earnings do not capture refinancing risk. Forward scenarios are the entire analytical question.'],
        ['Leave the refinancing wall outside the scenario model', 'Refinancing is the single largest swing factor here. Ignoring it leaves no thesis.'],
      ],
      'When outcomes are wide, scenario work can communicate risk-reward better than false precision.'),
    q(4107804, 'Career Skills', 'Valuation and Rating Logic', 'Rating after rerate',
      'A stock reaches the analyst target price after multiple expansion, but estimates are unchanged. What should the analyst reassess?',
      'Whether the current risk-reward still supports the rating and target price',
      [
        ['Keep the rating because changing views is awkward', 'A target reached is signal that the call worked — and that the upside case may now be smaller. Awkwardness is not a thesis input.'],
        ['Raise the target solely because the stock went up', 'Price-following targets create chase-the-rally ratings that disconnect from fundamentals.'],
        ['Let familiarity with the thesis override the new valuation risk', 'Familiarity does not improve risk-reward. Rerating compresses forward returns regardless of how comfortable the position feels.'],
      ],
      'Recommendations should update with price and fundamentals. A good thesis can become a weaker stock call at the wrong valuation.'),

    // Chapter 5: Research Note and Investor Debate
    q(4103023, 'Career Skills', 'Research Note and Investor Debate', 'Material nonpublic hint',
      'A supplier privately tells an analyst that a public company will miss the quarter before the company has announced results. What is the safest response?',
      'Stop and escalate under firm policy because the information may be material nonpublic information',
      [
        ['Trade immediately before the information spreads', 'Trading on potential MNPI is insider trading — a criminal offense, not a research edge.'],
        ['Publish the note without naming the supplier', 'Source anonymization does not legalize the use of MNPI. The information itself is the problem.'],
        ['Ask the supplier for even more confidential details', 'Doubling down on potential MNPI compounds the legal exposure. The right move is to stop and escalate.'],
      ],
      'Equity research must handle possible MNPI carefully. Potentially material, nonpublic information should be escalated according to policy before use.'),
    q(4105085, 'Career Skills', 'Research Note and Investor Debate', 'Balanced risk section',
      'An analyst has a Buy rating but sees customer concentration, FX exposure, and execution risk. How should those risks be handled in the report?',
      'Disclose and analyze the risks clearly while explaining why the thesis still supports the rating',
      [
        ['Delete risks because they weaken conviction', 'Honest risk disclosure builds credibility. Hidden risks reappear in client conversations and erode trust permanently.'],
        ['Mention risks only after clients complain', 'Reactive risk disclosure is too late — it follows the stock down. Risks belong in the original note.'],
        ['Turn every risk into a price target increase', 'Risks do not improve the target. Pretending otherwise damages both analytical and ethical credibility.'],
      ],
      'Research communication should be clear, balanced, and auditable. A positive rating can coexist with real risks if the reasoning is transparent.'),
    q(4107342, 'Career Skills', 'Research Note and Investor Debate', 'Banking pressure',
      'An investment banker asks an analyst to soften a risk paragraph because the company may hire the bank. What is the right response?',
      'Maintain independent research judgment and follow firm conflict and review policies',
      [
        ['Change the note to win the mandate', 'This is exactly the conflict that post-Global-Analyst-Settlement firewalls were built to prevent. Compliance escalation is mandatory.'],
        ['Let banking approve the rating', 'Allowing banking to gate research violates the structural separation required by US securities regulation.'],
        ['Delete every risk because relationships are delicate', 'Risk disclosure is a regulatory requirement, not a relationship lever. Removing risks creates regulatory liability.'],
      ],
      'Research independence matters. Potential banking business should not drive ratings, estimates, or risk disclosure.'),
    q(4107343, 'Career Skills', 'Research Note and Investor Debate', 'Selective preview',
      'A favored client asks for the recommendation change before publication so they can prepare. What should the analyst do?',
      'Decline and follow the firm process for fair dissemination of research',
      [
        ['Share it quietly because the client asked nicely', 'Selective disclosure violates Reg FD-equivalent firm policies and can trigger enforcement action.'],
        ['Send only the target price as a hint', 'A target price hint is selective disclosure of material research. The portion shared does not change the rule.'],
        ['Publish later so the client has more time', 'Delaying publication for one client systematically advantages them — same disclosure issue, different shape.'],
      ],
      'Research communication must avoid selective disclosure of material research views. Distribution rules protect market integrity and the analyst.'),
    q(4107812, 'Career Skills', 'Research Note and Investor Debate', 'Expert network boundary',
      'An expert begins describing confidential customer contract terms not publicly known. What should the analyst do?',
      'Stop the discussion, avoid using the information, and follow firm compliance procedures',
      [
        ['Ask for more detail before the line gets blurry', 'Asking for more crosses the line definitively. The moment the disclosure starts, the call ends.'],
        ['Use the information if it improves the model', 'Improving the model with MNPI is the textbook insider trading setup. Compliance violations are not offset by analytical quality.'],
        ['Only disclose it to favorite clients', 'Selective sharing of MNPI multiplies the violation. The information should not leave the call.'],
      ],
      'Research ethics require avoiding material nonpublic information. When a call crosses a line, process matters immediately.'),
    q(4107813, 'Career Skills', 'Research Note and Investor Debate', 'Tone after downgrade',
      'A company IR team is upset after a downgrade and asks to review the next note before publication. What is the right response?',
      'Maintain independent research process and use normal fact-check procedures only where permitted',
      [
        ['Let IR edit the conclusion for harmony', 'Issuer-edited research is by definition not research. Allowing this destroys analytical independence.'],
        ['Delay publication to avoid explaining the uncomfortable call', 'Skipping publication after a downgrade leaves clients without ongoing coverage. The conclusion stands until evidence changes it.'],
        ['Offer a softer rating privately', 'A private softer rating contradicts the published one and creates conflict-of-interest exposure.'],
      ],
      'Research must remain independent. Issuers can help verify facts, but they should not shape the recommendation.'),
    // Chapter expansions (per-file banks): Ch1–5 + Capstone (MeridianHealth).
    ...erCh1Questions,
    ...erCh2Questions,
    ...erCh3Questions,
    ...erCh4Questions,
    ...erCh5Questions,
    ...erCapstoneQuestions,
  ], ER_QUESTION_DIFFICULTY), [{ subTopics: ER_SUB_TOPICS, mentorHints: ER_MENTOR_HINTS, correctShortened: ER_CORRECT_SHORTENED, source: 'er' }]),

  // ---------------------------------------------------------------------------
  // SALES AND TRADING ROADMAP
  // Syllabus chapters:
  //  1. Desk Roles and Market Structure
  //  2. Products, Pricing, and Risk Measures
  //  3. Client Flow and Trade Ideas
  //  4. Execution, P&L, and Limits
  //  5. Regulation and Desk Communication
  // ---------------------------------------------------------------------------
  salesTradingRoadmap: runPolish(tagDifficulty([
    // Chapter 1: Desk Roles and Market Structure (NEW — closing the gap)
    q(4200020, 'Career Skills', 'Desk Roles and Market Structure', 'Sales vs trader',
      'A long-only client calls asking about credit exposure in a name the desk does not actively make markets in. Who owns the conversation and who owns the trade if it happens?',
      'The salesperson owns the client conversation and routes the trade to a trader; the trader takes risk or sources liquidity externally',
      [
        ['The trader takes the call directly and skips sales', 'Sales own the relationship and product fit. Routing client calls directly to traders bypasses suitability and coverage standards.'],
        ['The salesperson takes the trade directly into their own book', 'Salespeople do not warehouse risk. Trades go through traders who manage inventory and limits.'],
        ['Both functions are combined in modern desks with no distinction', 'On most institutional desks, sales and trading remain distinct roles for regulatory and risk-management reasons.'],
      ],
      'Sales own the client relationship; traders own risk. Confusing the two creates compliance gaps and uncontrolled inventory exposure.'),
    q(4200021, 'Career Skills', 'Desk Roles and Market Structure', 'Principal vs agency',
      'A client wants to sell a corporate bond. The desk offers to "bid the bond" and put it on the desk\'s book. What execution model is this?',
      'Principal execution — the dealer takes the position onto its own book and assumes price risk',
      [
        ['Agency execution because the dealer accepts the order', 'Agency means the dealer routes the trade to another counterparty for a commission. Putting the bond on the book is principal, by definition.'],
        ['Riskless principal because the price was committed', 'Riskless principal requires an offsetting trade is found before commitment. Warehousing the position is full principal risk.'],
        ['Pure brokerage with no balance sheet usage', 'Pure brokerage does not use the dealer\'s balance sheet. Putting the bond on the book uses balance sheet directly.'],
      ],
      'Principal execution commits the firm\'s capital and risk. Agency models pass the trade through without warehousing. The line determines who bears price risk between trade and unwind.'),
    q(4200022, 'Career Skills', 'Desk Roles and Market Structure', 'Market maker obligations',
      'A market maker in a listed equity is generally expected to do what during normal trading?',
      'Provide two-way quotes within reasonable spreads, even when the maker would prefer not to trade',
      [
        ['Quote only on the side that benefits the firm\'s inventory', 'One-sided quoting defeats the market-making function. Listed market makers face quoting obligations precisely to prevent this.'],
        ['Refuse to trade when volatility is high', 'Refusing to make markets during volatility breaks the obligation that earns market makers their economic privileges.'],
        ['Wait for a customer to call before showing a price', 'Market makers post continuous quotes to the venue. Waiting for inbound calls is broker behavior, not market making.'],
      ],
      'Market makers earn quoting privileges by providing liquidity, including in tough conditions. Stepping away in stress is what regulators and clients remember.'),
    q(4200023, 'Career Skills', 'Desk Roles and Market Structure', 'Liquidity definition',
      'What most directly characterizes a "liquid" market in a trading context?',
      'Tight bid-ask spreads, deep size at the top of book, and rapid recovery after a trade',
      [
        ['A market with many ticker symbols listed on the exchange', 'Liquidity is about depth and resilience per instrument, not the count of instruments listed.'],
        ['A market with low volatility in headline prices', 'Liquid markets can be volatile; the test is whether you can transact size at quoted prices, not whether prices are stable.'],
        ['A market where prices never change', 'Markets where prices never change are typically illiquid (no trading) rather than liquid. Liquidity requires actual trading activity.'],
      ],
      'Liquidity = tight spreads + depth + resilience. A liquid market lets you trade size without moving the price materially, and the market recovers between trades.'),
    q(4200024, 'Career Skills', 'Desk Roles and Market Structure', 'Structurer role',
      'A pension fund wants a payoff that pays principal plus 80% of S&P 500 appreciation but no downside. Which desk function builds and prices this for the salesperson?',
      'The structurer (or structured products desk) — combining options and fixed income to create custom payoff',
      [
        ['The salesperson alone, with a simple cash equity trade', 'The custom payoff requires combining a zero-coupon bond and call options. A salesperson packages but does not engineer the structure.'],
        ['The agency trading desk routing to an exchange', 'No single exchange-listed instrument creates this payoff. Structured products live off-exchange via bespoke structures.'],
        ['The compliance team since it has no risk', 'Compliance reviews, but does not build. The product has very real market and counterparty risk that requires desk pricing.'],
      ],
      'Structurers engineer custom payoffs by combining vanilla products. They price the components, manage the risk decomposition, and partner with sales on client suitability.'),

    // Chapter 2: Products, Pricing, and Risk Measures
    q(4103024, 'Career Skills', 'Products, Pricing, and Risk Measures', 'Bid-ask basics',
      'A client asks why buying immediately at the offer costs more than waiting at the bid. What is the best explanation?',
      'Crossing the spread pays for immediacy, while resting at the bid may save spread but risks no fill',
      [
        ['The offer is always the fair value and the bid is always wrong', 'Bid and offer are two sides of the same market. Neither is uniquely "right" — they reflect demand for immediacy.'],
        ['Waiting at the bid guarantees execution', 'A resting bid only fills if a seller crosses to it. If the market moves up, the bid may never fill.'],
        ['Spreads exist only because quotes are decorative', 'Spreads compensate market makers for adverse selection and inventory risk. They are the price of liquidity.'],
      ],
      'Bid-ask spread reflects liquidity and immediacy. Clients trade off execution certainty, price improvement, and market movement risk.'),
    q(4103025, 'Career Skills', 'Products, Pricing, and Risk Measures', 'Order type fit',
      'A portfolio manager wants to buy only if the stock trades down to $42 or better. Which order type best matches that instruction?',
      'A limit buy order at $42',
      [
        ['A market buy order', 'Market orders execute at the prevailing offer, which may be well above $42. That violates the PM\'s constraint.'],
        ['A market-on-open order at any price', 'MOO orders execute at the opening print regardless of level. No price control means the $42 constraint is ignored.'],
        ['A stop buy order above the market', 'Stop buys trigger when price rises above the stop, which is the opposite of waiting for the price to come down.'],
      ],
      'A limit buy sets the maximum acceptable purchase price. It protects price but does not guarantee execution.'),
    q(4105087, 'Career Skills', 'Products, Pricing, and Risk Measures', 'Duration mismatch',
      'A rates client owns long-duration bonds and worries yields will rise next month. What is the basic price risk?',
      'Long-duration bond prices generally fall when yields rise',
      [
        ['Long-duration bonds always rise when yields rise', 'Duration captures the inverse price-yield relationship. Higher yields mean lower prices, not higher.'],
        ['Duration removes all interest-rate risk', 'Duration measures interest-rate risk; it does not remove it. The longer the duration, the larger the price move per basis point.'],
        ['Yield changes affect only equity prices', 'Bonds are explicitly priced from yields — equities feel rate impact indirectly, bonds feel it directly through discounting.'],
      ],
      'Duration measures interest-rate sensitivity. Longer-duration bonds usually have larger price moves for a given change in yields.'),
    q(4105094, 'Career Skills', 'Products, Pricing, and Risk Measures', 'Options premium',
      'A client buys a put option to protect a stock position before earnings. What is the client paying for?',
      'Downside protection below the strike, limited by the option terms and premium paid',
      [
        ['Unlimited upside in the stock with no cost', 'Puts hedge downside, not enhance upside. The premium is real out-of-pocket cost.'],
        ['A guaranteed profit if the stock goes up', 'A put loses value if the stock goes up. The hedge cost reduces net upside in that scenario.'],
        ['Ownership of every share in the company', 'A put is a contract, not a share. The buyer holds an option on shares, not the shares themselves.'],
      ],
      'Options can reshape payoff profiles. A protective put costs premium and may limit downside below the strike, but it does not make risk disappear.'),
    q(4107349, 'Career Skills', 'Products, Pricing, and Risk Measures', 'Callable bond risk',
      'A client likes a high-yielding callable bond but expects rates to fall. What risk should the salesperson explain?',
      'The issuer may call the bond, limiting upside and reinvestment options',
      [
        ['The client can force the issuer to keep paying forever', 'Callable bonds give the call right to the issuer, not the holder. The holder has no power to prevent the call.'],
        ['Callable bonds never respond to rates', 'Callable bonds are highly rate-sensitive — especially around the call price, where call probability changes the duration.'],
        ['Higher yield removes all structure risk', 'Higher yield is compensation for structure risk. The risk is still real; the holder is being paid for it.'],
      ],
      'Callable bonds can be redeemed by the issuer under specified terms. Yield should be evaluated with call risk and reinvestment risk.'),
    q(4107356, 'Career Skills', 'Products, Pricing, and Risk Measures', 'Treasury quote',
      'A rates client asks for a two-way market in a Treasury. What are they asking for?',
      'A bid and offer at which the desk may buy or sell, subject to size and conditions',
      [
        ['Only the last traded price', 'Last trade is historical. A two-way market is a forward commitment to transact on either side.'],
        ['A promise to fill unlimited size', 'Two-way markets are subject to size and conditions. Unlimited size is not a feature of any standard quote.'],
        ['A personal opinion on the central bank', 'A two-way market is an executable quote, not commentary. The client wants prices to act on.'],
      ],
      'Two-way markets show executable or indicative buying and selling levels. Size, liquidity, and timing matter.'),
    q(4107360, 'Career Skills', 'Products, Pricing, and Risk Measures', 'ETF creation clue',
      'An ETF trades at a premium to its underlying basket during heavy demand. What mechanism can help pull price back toward NAV?',
      'Authorized participants can create ETF shares by delivering the underlying basket',
      [
        ['The exchange manually resets every ETF price', 'Exchanges do not reset prices. The creation/redemption mechanism is the structural arbitrage that aligns ETFs to NAV.'],
        ['Premiums prove the underlying stocks are worthless', 'Premiums reflect demand for the ETF wrapper, not zero value in the underlying.'],
        ['ETF prices never relate to baskets', 'ETF prices are tightly linked to baskets via the creation/redemption process. The relationship is the entire design.'],
      ],
      'ETF creation and redemption help align market price with underlying value, though stress and liquidity can widen gaps.'),
    q(4107826, 'Career Skills', 'Products, Pricing, and Risk Measures', 'ETF premium',
      'An ETF is trading at a noticeable premium to its net asset value during market stress. What should the salesperson explain?',
      'The premium may reflect underlying liquidity, creation-redemption frictions, and price discovery',
      [
        ['NAV is always irrelevant', 'NAV is the fair value benchmark for the basket. It cannot be ignored when explaining a premium.'],
        ['The ETF price is guaranteed wrong', 'The ETF price may be the most current price-discovery signal when underlying markets are illiquid or closed.'],
        ['Premiums exist only because screens are moody', 'Premiums reflect economic forces — stressed underlying liquidity, creation friction, and demand for the wrapper.'],
      ],
      'ETF prices can diverge from NAV when underlying markets are stressed. Structure and liquidity drive the gap.'),
    q(4107348, 'Career Skills', 'Products, Pricing, and Risk Measures', 'Iceberg order',
      'A client wants to buy shares without showing the full order size to the market. Which tool may help?',
      'An iceberg or reserve order that displays only part of the full size',
      [
        ['A market order that announces urgency', 'Market orders take liquidity immediately at any price — the opposite of hiding intent.'],
        ['A press release about the order', 'Press releases are public disclosure, which is exactly what the client is trying to avoid.'],
        ['A limit order with no quantity', 'A limit order without quantity is not a valid order type. Iceberg orders explicitly mask quantity, not omit it.'],
      ],
      'Order types can manage signaling and execution. Hidden size may reduce information leakage, though it does not guarantee a fill.'),

    // Chapter 3: Client Flow and Trade Ideas
    q(4103028, 'Career Skills', 'Client Flow and Trade Ideas', 'Color versus advice',
      'A salesperson tells a client, "Real-money accounts are net buyers this morning, but liquidity is thin around the data release." What type of value is this providing?',
      'Market color that helps the client understand flows, liquidity, and execution risk',
      [
        ['A guaranteed investment recommendation', 'Color is observational, not advisory. The salesperson is reporting flow context, not making a buy/sell call.'],
        ['A promise that the market will rise', 'Color describes current conditions, not future direction. Promises about price are inappropriate and unenforceable.'],
        ['A replacement for the client investment policy', 'Color informs trading; it does not override the client\'s mandate or investment policy.'],
      ],
      'Sales and trading coverage often provides market color. Good color clarifies flows and liquidity without overstating certainty.'),
    q(4103027, 'Career Skills', 'Client Flow and Trade Ideas', 'Hedge intent',
      'A trader is long a basket of airline stocks and fears a near-term oil price spike. What hedge is most directly related to that risk?',
      'Use an energy or fuel-linked hedge that offsets sensitivity to rising oil prices',
      [
        ['Buy more airline stocks because concentration reduces risk', 'Adding to the long position concentrates risk further. Concentration is the opposite of hedging.'],
        ['Hedge with an unrelated software index', 'Software indices have no economic linkage to jet fuel costs. The hedge would track the wrong risk factor.'],
        ['Model airlines from passenger counts without fuel-cost exposure', 'Jet fuel is the second-largest cost line for airlines. Ignoring it misses a major driver of margins.'],
      ],
      'A useful hedge targets the actual exposure. Airline margins can be sensitive to fuel costs, so the hedge should address that risk driver.'),
    q(4105090, 'Career Skills', 'Client Flow and Trade Ideas', 'Mandate-aware pitch',
      'A pension client with low turnover and strict investment-grade guidelines asks about a high-beta small-cap trade. What should the salesperson do?',
      'Frame any discussion around the client mandate and avoid pushing an unsuitable trade',
      [
        ['Pitch it harder because excitement beats guidelines', 'Guidelines are contractual constraints, not preferences. Pushing past them creates suitability and fiduciary liability.'],
        ['Answer outside the mandate because the client raised the topic', 'Asking does not mean buying. A good salesperson uses the question to reaffirm what does fit.'],
        ['Say investment grade applies only to bonds and never risk appetite', 'IG guidelines on a pension reflect overall risk appetite. Equity beta is in scope even when bond ratings aren\'t.'],
      ],
      'Client coverage starts with mandate and suitability. A good salesperson filters ideas through the client\'s objectives, constraints, and risk tolerance.'),
    q(4105091, 'Career Skills', 'Client Flow and Trade Ideas', 'Morning call value',
      'Before the open, a salesperson summarizes overnight macro moves, sector flows, and key earnings surprises for clients. What is the main goal?',
      'Help clients prepare for liquidity, risk, and relevant trading opportunities',
      [
        ['Guarantee the exact closing price', 'Closing prices are unknowable in the morning. Morning calls inform, they do not predict.'],
        ['Replace each client\'s investment committee', 'Investment committees set policy; morning calls inform tactics. The roles do not overlap.'],
        ['Avoid answering any follow-up questions', 'Morning calls open dialogue. Refusing follow-ups undermines the relationship and the call itself.'],
      ],
      'Morning coverage is useful when it organizes market-moving information into actionable context. It should be timely, relevant, and appropriately caveated.'),
    q(4107352, 'Career Skills', 'Client Flow and Trade Ideas', 'Flow context',
      'A client asks why a stock is heavy despite no company news. The salesperson sees sector ETF selling and weak futures. What response is most useful?',
      'Explain the observed flows and broader market pressure with appropriate caveats',
      [
        ['Invent a company-specific rumor', 'Inventing rumors is fabrication, which damages credibility and may breach market-conduct rules.'],
        ['Promise the pressure will reverse by lunch', 'Intraday predictions are not flow color. Specific time-and-price promises overstep what the desk can know.'],
        ['Say flow context never matters', 'Flow context often explains short-term price action better than fundamentals — exactly what the client is asking about.'],
      ],
      'Market color should be factual and caveated. Flow context helps clients understand price action without pretending to know the future.'),
    q(4107358, 'Career Skills', 'Client Flow and Trade Ideas', 'Best idea filter',
      'A hedge fund client asks for the desk best idea, but their book is already crowded in the same factor. What should coverage consider?',
      'Whether the idea adds useful exposure or simply doubles down on an existing risk',
      [
        ['Pitch the idea without asking about fit', 'Pitching a duplicative exposure helps neither the client nor the relationship. Coverage value comes from tailoring.'],
        ['Recommend only the highest-volatility name', 'Volatility is not the same as fit. The client needs orthogonal exposure, not amplified existing exposure.'],
        ['Evaluate the idea without mapping it to current portfolio exposures', 'Clever ideas in the wrong portfolio context can blow up the book. Context is the whole game.'],
      ],
      'Good coverage tailors ideas to the client. A smart trade can be a poor fit if it worsens concentration.'),
    q(4107828, 'Career Skills', 'Client Flow and Trade Ideas', 'Cross-sell restraint',
      'A relationship manager wants to pitch a complex structured note to a client who asked for simple cash management. What should the desk do?',
      'Confirm client objective, sophistication, suitability, and whether the product actually addresses the need',
      [
        ['Pitch it because complexity sounds premium', 'Selling complex products to clients with simple needs is a textbook suitability violation.'],
        ['Treat a cash-management conversation as permission to pitch leverage', 'Cash management means safety and liquidity, not leverage. Translating it otherwise is rationalization.'],
        ['Leave disclosures until later because the client is busy', 'Disclosures are required by rule. Client time pressure does not waive them.'],
      ],
      'Client coverage should solve the client\'s problem, not just display the product shelf. Suitability comes first.'),

    // Chapter 4: Execution, P&L, and Limits
    q(4103030, 'Career Skills', 'Execution, P&L, and Limits', 'Partial fill',
      'A trader receives only a partial fill on a client order before the market moves away. What communication is most useful?',
      'Report the filled quantity, average price, remaining balance, market context, and execution options',
      [
        ['Say only that the order is being handled', 'Vague status updates leave the client unable to make decisions about the remaining balance.'],
        ['Wait until the end of the month to summarize', 'Execution decisions need real-time information. Monthly summaries are statements, not coverage.'],
        ['Cancel the remainder without instructions or explanation', 'Cancelling without authority violates the client mandate. The client should make the call on the remaining balance.'],
      ],
      'Execution communication should be timely and specific. Clients need to understand what happened, what remains, and what choices are available.'),
    q(4103031, 'Career Skills', 'Execution, P&L, and Limits', 'Fat-finger response',
      'A junior trader realizes they entered one extra zero on an order that just executed. What is the best immediate response?',
      'Escalate immediately under error procedures and preserve the facts for correction and client communication',
      [
        ['Try to trade out quietly and mention it only if asked', 'Unauthorized "fix" trades multiply the original error and may breach internal controls. Escalation is mandatory.'],
        ['Delete messages about the order', 'Destroying records is obstruction. Audit trails must be preserved regardless of the underlying error.'],
        ['Blame the exchange before checking records', 'Pre-emptive blame without diagnosis damages the firm\'s relationship with the venue and the client.'],
      ],
      'Trading errors require fast escalation and documentation. Early transparency helps manage market, client, regulatory, and operational risk.'),
    q(4105086, 'Career Skills', 'Execution, P&L, and Limits', 'VWAP fit',
      'A client wants to buy 300,000 shares over the day while minimizing market impact versus the day\'s volume profile. Which execution approach may fit?',
      'A VWAP-style algorithm that participates through the session according to expected volume',
      [
        ['A single market order for the full amount at the open', 'A large open-print market order maximizes impact and signaling — the exact opposite of the client objective.'],
        ['A stop-loss order above the market', 'Stop orders are protective triggers, not impact-minimizing execution strategies.'],
        ['A handwritten note to the exchange', 'Exchanges accept electronic orders, not paper notes. Execution requires the order management system.'],
      ],
      'VWAP-style execution can help spread a large order across the trading day. It reduces immediacy but may lower signaling and market impact.'),
    q(4105088, 'Career Skills', 'Execution, P&L, and Limits', 'Stop-loss purpose',
      'A trader sets a stop-loss level before entering a position. What is the main risk management purpose?',
      'To define an exit point if the market moves against the trade beyond the planned loss tolerance',
      [
        ['To guarantee the trade will be profitable', 'Stops define exits when trades go wrong; they do not create profits when trades go right.'],
        ['To avoid knowing the position size', 'Position size is set explicitly. The stop interacts with size to define dollar loss tolerance.'],
        ['To make the market respect the trader\'s view', 'Markets do not respect anyone\'s views. The stop is for the trader\'s discipline, not market behavior.'],
      ],
      'Stop-loss planning creates discipline around downside. It does not remove gap or execution risk, but it helps prevent thesis drift under pressure.'),
    q(4105089, 'Career Skills', 'Execution, P&L, and Limits', 'Correlation surprise',
      'A desk thinks it is diversified across five bank stocks, but all positions sell off together after a rates shock. What risk was underestimated?',
      'Correlation and common factor exposure across apparently separate positions',
      [
        ['The spelling risk of the ticker symbols', 'Spelling has nothing to do with risk. The risk is concentrated factor exposure.'],
        ['The benefit of owning only one sector', 'Owning one sector concentrates factor risk. The "benefit" framing inverts the lesson.'],
        ['The fact that diversification eliminates all loss', 'Diversification reduces idiosyncratic risk only. Common factor exposure survives diversification across the same factor.'],
      ],
      'Positions can share hidden drivers. Sector, factor, macro, and liquidity correlations matter when estimating portfolio risk.'),
    q(4105095, 'Career Skills', 'Execution, P&L, and Limits', 'P&L attribution',
      'A desk loses money on a rates position even though the main yield view was correct because the curve steepened unexpectedly. What should risk review examine?',
      'Which risk factors drove P&L, including curve exposure rather than only the headline directional view',
      [
        ['Whether the trader liked the trade enough', 'Conviction is not a P&L factor. Attribution looks at which risk factors moved against the position.'],
        ['Only the final daily P&L number with no drivers', 'The total is a result, not a diagnosis. Decomposing the number is what makes attribution useful.'],
        ['The marketing deck from last quarter', 'Marketing materials are unrelated to position-level P&L analysis.'],
      ],
      'P&L attribution explains what actually drove gains and losses. Direction, curve, spread, volatility, and basis exposures can matter more than the headline thesis.'),
    q(4107357, 'Career Skills', 'Execution, P&L, and Limits', 'Gap risk',
      'A trader sets a stop at $50, but bad news opens the stock at $43. What risk does this illustrate?',
      'Gap risk, where execution may occur far from the intended stop level',
      [
        ['A stop order guarantees the exact stop price', 'Stops convert to market orders when triggered. In a gap, the fill is wherever the market trades, not the stop level.'],
        ['The trader avoided all downside by planning', '$7 of slippage past the stop is real loss. Planning helps but does not guarantee execution at the planned level.'],
        ['Opening prices cannot move after news', 'News-driven opens often gap precisely because new information re-prices the stock all at once.'],
      ],
      'Stops help discipline, but they do not eliminate gap and liquidity risk. Markets can jump past planned levels.'),
    q(4103026, 'Career Skills', 'Execution, P&L, and Limits', 'Inventory shock',
      'A trader buys a large block from a client and now holds more inventory than the desk limit allows. What is the most prudent next step?',
      'Notify the appropriate desk lead or risk process and plan an orderly hedge or unwind',
      [
        ['Hide the position until it becomes profitable', 'Hidden positions become forced sales. Risk discovers them at the worst possible time, and the trader loses their job and clients.'],
        ['Double the position to improve average price', 'Doubling violates the limit further and creates larger exposure. Discipline is reduction, not amplification.'],
        ['Treat client service as an exception to the risk limit', 'Limits exist to protect the firm regardless of client size. No client transaction overrides risk policy.'],
      ],
      'Trading desks manage market and inventory risk through limits and escalation. A large position should be addressed transparently and promptly.'),
    q(4107350, 'Career Skills', 'Execution, P&L, and Limits', 'Limit breach morning',
      'A desk opens with a position over its overnight risk limit after a late client trade. What should happen first?',
      'Escalate through the desk risk process and agree on a hedge or reduction plan',
      [
        ['Wait for a lucky price move before telling anyone', 'Waiting compounds the breach. Risk management discovers it through end-of-day reports anyway.'],
        ['Move the position to an untracked spreadsheet', 'Off-system positions violate every firm policy and most regulations. This is a fraud-adjacent move.'],
        ['Treat a client request as overriding the formal risk limit', 'No client trade exempts the desk from risk limits. Limits protect the firm, not the client.'],
      ],
      'Risk limits are useful only when breaches are surfaced. Escalation creates accountability and a plan.'),

    // Chapter 5: Regulation and Desk Communication (NEW + strengthened)
    q(4200030, 'Career Skills', 'Regulation and Desk Communication', 'Best execution',
      'What does a "best execution" obligation typically require a broker to consider for a client order?',
      'Price, speed, likelihood of execution, market conditions, and the client\'s objectives — not solely the lowest commission',
      [
        ['Only the venue with the lowest commission per trade', 'Best ex is a multi-factor test. Picking solely on commission ignores price improvement, fill rates, and impact.'],
        ['Whatever venue the trader prefers personally', 'Personal preference is not a permissible best-ex factor. Documented analysis must support the routing.'],
        ['The first venue to acknowledge the order', 'First acknowledgement is meaningless if the fill is poor. Best ex examines outcome quality, not response time alone.'],
      ],
      'Best execution is a multi-factor obligation. Brokers must consider price, liquidity, certainty, and client objectives, not optimize a single dimension.'),
    q(4200031, 'Career Skills', 'Regulation and Desk Communication', 'Restricted list mechanics',
      'A company is added to the firm\'s restricted list while the desk is in the middle of a client trade in that name. What is the typical action?',
      'Stop new principal activity in the name and escalate to compliance to determine whether the in-flight order can continue',
      [
        ['Finish the trade quietly because it was already started', 'Restricted-list breaches can occur even with in-flight trades. Compliance escalation determines the correct action.'],
        ['Tell the client they can no longer trade the name anywhere', 'The restriction applies to the firm, not the client. Other firms remain available to the client.'],
        ['Treat personal conviction as enough to override a restricted-list block', 'Personal conviction does not override restricted-list rules. The list exists precisely because conviction can mislead.'],
      ],
      'Restricted lists are how firms manage information barriers. Trades in restricted names need compliance review, not trader discretion.'),
    q(4200032, 'Career Skills', 'Regulation and Desk Communication', 'Surveillance trigger',
      'A trader buys a stock at 9:30 and the firm publishes a positive research upgrade at 10:00. What is the most likely surveillance flag?',
      'Potential front-running of research — pre-publication trading ahead of a known catalyst',
      [
        ['Standard alpha capture and a sign of good intuition', 'Trading ahead of unpublished research is not alpha — it is misuse of inside information about the firm\'s own actions.'],
        ['No issue because the upgrade was the trader\'s personal view', 'Personal view does not absolve the timing pattern. Surveillance triggers on observable behavior, not intent.'],
        ['Surveillance does not monitor first-30-minute trading', 'Surveillance monitors all trading windows, especially around known firm catalysts like research publications.'],
      ],
      'Front-running research is a textbook surveillance trigger. Information barriers exist to prevent the appearance and the reality of this pattern.'),
    q(4107362, 'Career Skills', 'Regulation and Desk Communication', 'Quiet compliance line',
      'A client presses for color on another client order they suspect is moving the market. What should the salesperson do?',
      'Protect client confidentiality while offering general, non-confidential market context',
      [
        ['Confirm the other client name to be helpful', 'Confirming client identity is a breach of confidentiality with serious regulatory consequences.'],
        ['Share the order size if the client promises discretion', 'Discretion promises do not unwind disclosure. The information is confidential whether the asking client keeps it quiet or not.'],
        ['Make up a story to end the call', 'Fabrication compounds the issue and may breach market-conduct rules around false information.'],
      ],
      'Client coverage must respect confidentiality. Useful market color does not require revealing another client activity.'),
    q(4107832, 'Career Skills', 'Regulation and Desk Communication', 'Research versus trading',
      'A client asks the trader for a rating change rumor before the research note is published. What is the right response?',
      'Do not share unpublished research information and follow information-barrier procedures',
      [
        ['Hint dramatically if the client is important', 'Hinting is selective disclosure of MNPI. Client importance does not change the rule.'],
        ['Share it only verbally', 'Verbal MNPI is still MNPI. Channel does not change the regulatory exposure.'],
        ['Trade ahead because rumors are basically research', 'Trading on unpublished firm research is front-running. It is one of the highest-risk behaviors on a desk.'],
      ],
      'Information barriers protect market integrity. Client service does not include leaking unpublished research.'),
    q(4107823, 'Career Skills', 'Regulation and Desk Communication', 'Market color boundary',
      'A client asks whether another fund is selling a specific position today. What is the right boundary?',
      'Provide appropriate aggregated market color without revealing confidential client activity',
      [
        ['Name the fund if the client asks nicely', 'Politeness of the request does not change the confidentiality rule. Client names are off-limits.'],
        ['Invent flow color to sound informed', 'Inventing flow data is fabrication. It risks regulatory exposure under false-information rules.'],
        ['Say confidentiality applies only after lunch', 'Confidentiality is constant, not time-of-day. The rule applies every minute.'],
      ],
      'Sales and trading trust depends on confidentiality. Market color should be useful without exposing client-specific information.'),
    q(4107833, 'Career Skills', 'Regulation and Desk Communication', 'Allocation fairness',
      'A hot new issue is oversubscribed, and several clients want more bonds than the desk can allocate. What should guide allocation?',
      'Use fair allocation procedures based on policy, client orders, and documented rationale',
      [
        ['Allocate first to the client with the highest expected secondary-market trading volume', 'Trading relationship may be one input only if policy permits it, but it cannot override order size, suitability, fairness, and documented allocation procedures.'],
        ['Allocate only to the loudest account', 'Loudness is not policy. Allocation favoritism without basis creates enforcement risk.'],
        ['Make allocation decisions after seeing first trade performance', 'Post-issuance allocation based on performance is "flipping" the allocation — a classic enforcement target.'],
      ],
      'Allocations need fairness and documentation. Scarce supply is exactly when process matters.'),
    // Chapter expansions (per-file banks): Ch1–5 + Capstone (Polaris workflow).
    ...stCh1Questions,
    ...stCh2Questions,
    ...stCh3Questions,
    ...stCh4Questions,
    ...stCh5Questions,
    ...stCapstoneQuestions,
  ], ST_QUESTION_DIFFICULTY), [{ subTopics: ST_SUB_TOPICS, mentorHints: ST_MENTOR_HINTS, correctShortened: ST_CORRECT_SHORTENED, source: 'st' }]),

  // ---------------------------------------------------------------------------
  // PRIVATE EQUITY ROADMAP
  // Syllabus chapters:
  //  1. PE Model and Investment Criteria
  //  2. Business Diligence
  //  3. LBO Mechanics and Debt Capacity
  //  4. Value Creation and Operating Plan
  //  5. IC Memo, Deal Process, and Exit
  // ---------------------------------------------------------------------------
  privateEquityRoadmap: runPolish(tagDifficulty([
    // Chapter 1: PE Model and Investment Criteria (NEW framing questions)
    q(4200040, 'Career Skills', 'PE Model and Investment Criteria', 'Platform vs add-on',
      'A sponsor is evaluating a $400M EBITDA industrial services business and a $30M EBITDA bolt-on candidate. Which is typically the platform, and what does that distinction drive?',
      'The $400M business is the platform — it carries the management team, systems, and capital structure that add-ons plug into',
      [
        ['The smaller company is always the platform because it scales faster', 'Platforms are typically larger, established businesses with infrastructure. Smaller companies usually plug in as add-ons.'],
        ['There is no functional difference between platform and add-on', 'The distinction drives valuation (platform pays a higher multiple), integration approach, and management structure.'],
        ['Platform status only matters at exit', 'Platform decisions shape day-one organizational structure, integration approach, and reporting infrastructure.'],
      ],
      'Platform investments anchor a roll-up strategy with infrastructure and management; add-ons are bought at lower multiples and integrated into the platform\'s systems.'),
    q(4200041, 'Career Skills', 'PE Model and Investment Criteria', 'PE vs growth equity',
      'A profitable but slow-growing services business with stable cash flow is being evaluated. Why is this typically a PE target rather than a growth equity target?',
      'PE underwrites cash flow that can service debt; growth equity underwrites revenue growth and typically uses no leverage',
      [
        ['Because PE firms only buy unprofitable companies', 'PE typically requires profitability and cash flow to service the deal\'s debt. Unprofitable companies are not financeable in standard LBOs.'],
        ['Because growth equity only invests in tech companies', 'Growth equity invests across sectors. The defining feature is the underwriting model (revenue growth, no leverage), not the industry.'],
        ['Because the two strategies are functionally identical', 'PE and growth equity have very different value creation models, risk profiles, and return expectations. They are distinct strategies.'],
      ],
      'PE uses leverage and operating improvement to earn returns; growth equity uses unlevered capital to fund expansion. The right strategy depends on the target\'s cash flow and growth profile.'),
    q(4200042, 'Career Skills', 'PE Model and Investment Criteria', 'Hold period economics',
      'A sponsor model shows a 25% gross IRR at year 3 vs 18% at year 5 for the same MOIC of 2.0x. What does this illustrate about hold period?',
      'Shorter holds produce higher IRRs for the same MOIC because IRR annualizes the return',
      [
        ['Longer holds always produce higher returns', 'Longer holds dilute IRR even when MOIC is identical. The longer the hold, the more time the multiple is spread across.'],
        ['IRR and MOIC always move in the same direction', 'IRR and MOIC measure different things. Same MOIC over different holds produces different IRRs.'],
        ['The model must be wrong because returns are fixed', 'Both numbers are mathematically consistent. The lesson is that hold period and IRR interact.'],
      ],
      'IRR rewards earlier exits. Sponsors often face a tradeoff between holding for higher MOIC and exiting earlier for higher IRR.'),

    // Chapter 2: Business Diligence
    q(4103032, 'Career Skills', 'Business Diligence', 'Quality of earnings',
      'A target company shows strong EBITDA growth, but most of the increase comes from add-backs for one-time consulting fees and owner expenses. What should the deal team do?',
      'Test whether the add-backs are truly nonrecurring and supportable in normalized EBITDA',
      [
        ['Accept every add-back because sellers propose them', 'Sellers propose add-backs to maximize price. The buyer\'s job is to test whether each one is truly nonrecurring.'],
        ['Value the business only on revenue despite earnings-quality concerns', 'Revenue alone misses the entire profitability picture. EBITDA matters; the question is which EBITDA is sustainable.'],
        ['Treat every owner expense as recurring without reviewing add-back support', 'Some owner expenses (private jet, personal salaries) genuinely won\'t recur; others (real management compensation) absolutely will. The diligence determines which.'],
      ],
      'Quality of earnings work tests the durability of earnings. Add-backs can be valid, but they need evidence and a clear normalization rationale.'),
    q(4103033, 'Career Skills', 'Business Diligence', 'Customer concentration',
      'A target has 42% of revenue from one customer whose contract renews in six months. What is the key diligence focus?',
      'Assess renewal probability, pricing power, relationship strength, and downside case impact',
      [
        ['Accept customer concentration because the revenue is easier to track', 'Concentration is the largest single-name risk in the deal. Ignoring it means missing the deal-breaking exposure.'],
        ['Use historical revenue as proof the customer will renew', 'Historical revenue does not predict renewal. Contract structure, relationship depth, and switching costs do.'],
        ['Value the business as if no contract could ever expire', 'Every contract expires. Assuming perpetuity in the model is a structural error that overstates value.'],
      ],
      'Customer concentration can change risk, leverage capacity, and valuation. Diligence should test contract terms, stickiness, alternatives, and downside exposure.'),
    q(4105097, 'Career Skills', 'Business Diligence', 'Churn in disguise',
      'A subscription target reports 95% revenue retention, but it replaces many lost small customers with price increases on remaining accounts. What is the concern?',
      'Headline retention may hide logo churn, customer dissatisfaction, or limits to future price increases',
      [
        ['Price increases mean churn can never matter', 'Price increases mask churn only as long as remaining customers tolerate the increases. The mask eventually breaks.'],
        ['Small customers are always irrelevant', 'Small customer churn is often the leading indicator of larger customer churn. Dismissing it loses the signal.'],
        ['Revenue retention should never be analyzed by cohort', 'Cohort analysis is the only way to detect this exact pattern. Without it, the headline metric is uninterpretable.'],
      ],
      'Retention quality matters. Sponsors should examine logo churn, cohort behavior, price versus volume, and whether expansion is sustainable.'),
    q(4107365, 'Career Skills', 'Business Diligence', 'ERP surprise',
      'A target has attractive margins but runs operations through manual spreadsheets and an outdated ERP. What is the diligence implication?',
      'The deal may need systems investment and carry reporting, integration, and execution risk',
      [
        ['Manual systems make the company easier to scale', 'Manual systems do not scale. They are the typical bottleneck that requires post-close investment.'],
        ['Technology diligence is only for software companies', 'Every business has systems risk. ERP gaps affect cash management, reporting accuracy, and integration capacity.'],
        ['ERP issues cannot affect cash flow', 'Bad ERP causes late billing, mispriced contracts, and inventory errors — all of which directly hit cash flow.'],
      ],
      'Infrastructure matters in PE ownership. Weak systems can limit reporting, controls, growth, and add-on integration.'),
    q(4107364, 'Career Skills', 'Business Diligence', 'Key person risk',
      'A niche services target wins work because one founder has every major client relationship. What should the PE team diligence?',
      'Relationship durability, succession plans, retention incentives, and revenue downside if the founder leaves',
      [
        ['Model the founder as permanently available to run every relationship', 'Founders sell because they want liquidity, often to retire. Assuming permanence ignores the obvious next move.'],
        ['Treat historical EBITDA as independent of founder relationships', 'Historical EBITDA was generated by current relationships. Severing them changes future EBITDA.'],
        ['Value the business only on the founder biography', 'A biography is not a business. Diligence should test whether revenue is transferable to a broader team.'],
      ],
      'Key person risk can affect growth, financing, and exit value. Sponsors need a plan to institutionalize the business.'),
    q(4107834, 'Career Skills', 'Business Diligence', 'Founder dependency',
      'A founder-owned services business wins most new work through the founder\'s personal relationships. What should PE diligence test?',
      'Whether revenue can continue through institutional sales processes and a deeper management team',
      [
        ['Whether the founder can personally scale forever', 'Personal scale is finite. Institutional sales processes are what allow growth past the founder\'s bandwidth.'],
        ['Whether relationship revenue is always recurring', 'Relationship revenue is precisely what walks out the door when the founder leaves. It is the least durable kind.'],
        ['Whether customers enjoy the founder\'s calendar', 'Customer satisfaction with the founder is the problem, not the solution — it concentrates value in one person.'],
      ],
      'PE diligence should separate company capability from founder heroics. Transferable sales process matters after closing.'),
    q(4107835, 'Career Skills', 'Business Diligence', 'Data room inconsistency',
      'The data room shows customer retention that differs from management\'s presentation. What should the associate do?',
      'Reconcile definitions, source data, time periods, and the impact on the investment thesis',
      [
        ['Use whichever number supports the deal', 'Picking the favorable number means buying based on a story, not facts. The discrepancy itself is diligence signal.'],
        ['Treat close-but-different data-room numbers as immaterial', '"Spiritually close" is not analytical. The actual number drives the model; both cannot be right.'],
        ['Delete retention from the diligence list', 'Retention is core to subscription valuation. Removing it from diligence is removing the most important metric.'],
      ],
      'Data inconsistencies are diligence opportunities. Definitions and source systems often reveal the real operating picture.'),
    q(4107842, 'Career Skills', 'Business Diligence', 'Cohort gross margin',
      'Newer customer cohorts grow faster but carry lower gross margins than legacy customers. What should diligence determine?',
      'Whether growth is coming from attractive customers or from lower-quality revenue',
      [
        ['Whether all revenue deserves the same multiple', 'A mix shift toward lower-margin cohorts deserves a different valuation framework. Treating all revenue as equal misses the quality issue.'],
        ['Whether cohort analysis is only for software companies', 'Cohort analysis works for any recurring-customer business. The technique is industry-agnostic.'],
        ['Whether legacy customers can be ignored', 'Legacy customers are the historical proof point of unit economics. Ignoring them removes the benchmark.'],
      ],
      'Quality of growth matters in PE. Cohort economics can reveal whether expansion improves or dilutes value.'),
    q(4107846, 'Career Skills', 'Business Diligence', 'Supplier fragility',
      'A target relies on one overseas supplier for a critical component with no backup. What diligence work is needed?',
      'Assess supplier concentration, switching cost, inventory buffers, contracts, and mitigation plans',
      [
        ['Treat recent on-time production as proof that the single-source supplier risk is immaterial', 'Single-source supply chains are operational time bombs. COVID and shipping disruption made this risk concrete for every PE firm.'],
        ['Value the company as if nothing ever ships late', 'Shipping delays are normal. The diligence question is whether the business has buffer to absorb them.'],
        ['Accept management’s statement that the supplier relationship is strong without testing contract rights or alternatives', 'Verbal comfort is not enforceable inventory. Real mitigation requires contracts, alternative sources, or buffer stock.'],
      ],
      'Operational fragility can become financial risk. Supplier concentration belongs in the investment thesis and value-creation plan.'),

    // Chapter 3: LBO Mechanics and Debt Capacity
    q(4103034, 'Career Skills', 'LBO Mechanics and Debt Capacity', 'Debt paydown',
      'In an LBO model, why does excess free cash flow often reduce debt over the hold period?',
      'Debt amortization and cash sweeps increase equity value by lowering net debt at exit',
      [
        ['Debt paydown increases purchase price automatically', 'Purchase price was fixed at entry. Debt paydown affects exit equity, not entry pricing.'],
        ['Free cash flow belongs only to the seller after close', 'Post-close cash flow belongs to the new owner (the sponsor). The seller is gone.'],
        ['Lower debt always lowers enterprise value by the same amount', 'EV is roughly preserved (it\'s equity + debt). Debt paydown converts debt value into equity value at exit.'],
      ],
      'LBO returns come from entry valuation, operating growth, margin improvement, cash generation, deleveraging, and exit valuation. Debt paydown is a key equity value driver.'),
    q(4103035, 'Career Skills', 'LBO Mechanics and Debt Capacity', 'IRR versus MOIC',
      'A deal returns 2.0x invested capital in three years, while another returns 2.0x in seven years. What distinguishes the outcomes?',
      'The shorter hold has a higher IRR even though both have the same MOIC',
      [
        ['Both have identical IRR because MOIC is identical', 'MOIC ignores time; IRR includes it. Same MOIC over different holds produces materially different IRRs.'],
        ['The longer hold has higher IRR because it lasted longer', 'Longer holds dilute IRR — the same multiple is spread over more years.'],
        ['MOIC is invalid unless debt is zero', 'MOIC works at all debt levels. It is simply total cash returned divided by capital invested.'],
      ],
      'MOIC measures total multiple of money. IRR also reflects time, so the same multiple over a shorter period produces a higher annualized return.'),
    q(4105098, 'Career Skills', 'LBO Mechanics and Debt Capacity', 'Entry multiple effect',
      'Two LBO cases have the same operating forecast and exit multiple, but one pays 9x EBITDA and the other pays 11x. What happens all else equal?',
      'The lower entry multiple generally produces higher equity returns',
      [
        ['The higher entry multiple always improves IRR', 'Paying more for the same cash flows reduces returns. The relationship is the opposite of what the answer claims.'],
        ['Entry price does not matter after debt is added', 'Entry price determines purchase price and therefore equity required. It matters fundamentally.'],
        ['Both cases must have identical returns', 'Same exit at different entry prices produces different returns. The math is direct.'],
      ],
      'Entry valuation is a major LBO return driver. Paying less for the same cash flows and exit value usually increases sponsor returns.'),
    q(4105099, 'Career Skills', 'LBO Mechanics and Debt Capacity', 'Management rollover',
      'A founder rolls over $30 million of equity into the sponsor deal instead of selling all shares at close. Why does this matter?',
      'It can align management incentives and reduce required new sponsor equity',
      [
        ['It means the founder has no future economics', 'Rollover gives the founder direct future economic upside through the new equity stake.'],
        ['It eliminates the need for governance', 'Governance terms are negotiated separately. Rollover affects economics, not the board structure.'],
        ['It guarantees the company will hit plan', 'Alignment improves incentives but does not guarantee execution. Plans still need to be achieved.'],
      ],
      'Management rollover can signal alignment and affect sources and uses. It does not remove execution risk, but it keeps leaders economically invested.'),
    q(4105105, 'Career Skills', 'LBO Mechanics and Debt Capacity', 'Exit EBITDA bridge',
      'A model assumes EBITDA grows from $80 million to $120 million and the exit multiple stays at 10x. How much does enterprise value increase from EBITDA growth alone?',
      '$400 million',
      [
        ['$40 million', '$40M is the EBITDA increase, not the EV change. EV change = EBITDA change × multiple = 40 × 10.'],
        ['$120 million', '$120M is the new EBITDA, not the EV change. The EV change is multiple × EBITDA growth.'],
        ['$800 million', '$800M would require an 80M increase at a different multiple. The math here is 40 × 10 = 400.'],
      ],
      'At a constant multiple, enterprise value change from EBITDA growth equals the EBITDA increase times the multiple. Here, 40 million x 10 = 400 million.'),
    q(4107366, 'Career Skills', 'LBO Mechanics and Debt Capacity', 'Cash-free debt-free',
      'A seller quotes enterprise value on a cash-free, debt-free basis. What must the model bridge to equity purchase price?',
      'Debt, cash, working capital adjustments, and transaction expenses as applicable',
      [
        ['Only the headline enterprise value', 'EV is the starting point. Equity purchase price requires bridging through net debt and working capital.'],
        ['Revenue plus cash with no debt adjustment', 'Revenue is irrelevant to purchase price. Net debt is the largest adjustment item from EV to equity.'],
        ['The seller vacation schedule', 'Seller vacation has no role in purchase price mechanics.'],
      ],
      'Purchase price mechanics translate enterprise value into actual funding needs. Cash, debt, and working capital adjustments matter.'),
    q(4107373, 'Career Skills', 'LBO Mechanics and Debt Capacity', 'Sponsor equity bridge',
      'An LBO sources and uses table is short by $25 million after fees are added. What usually fills the gap?',
      'Additional sponsor equity or another identified source of funds',
      [
        ['A negative fee line with no explanation', 'Fees are real cash outflows. Subtracting them on paper does not fund them.'],
        ['Unmodeled enthusiasm', 'Enthusiasm is not capital. Every dollar of uses needs a dollar of identified source.'],
        ['A reduction in purchase price without seller agreement', 'Purchase price is the seller\'s number, not the buyer\'s. Reducing unilaterally is not a financing source.'],
      ],
      'Sources must equal uses. When costs rise and debt is fixed, equity often fills the gap.'),
    q(4107377, 'Career Skills', 'LBO Mechanics and Debt Capacity', 'Covenant cushion',
      'A downside case keeps first-lien leverage only 0.1x below the covenant limit. What should the team consider?',
      'Whether the plan has enough covenant cushion after normal forecast volatility',
      [
        ['That 0.1x is plenty because models are exact', 'Models are estimates. A 0.1x cushion is one quarter of forecast noise away from a breach.'],
        ['That covenants never matter after signing', 'Maintenance covenants are tested every quarter. They matter every quarter.'],
        ['That downside cases should always pass easily', 'Downside cases that pass easily are not downside cases. The point is to test the threshold.'],
      ],
      'Thin covenant cushion can create negotiation risk. Forecasts are estimates, so downside resilience matters.'),

    // Chapter 4: Value Creation and Operating Plan
    q(4103036, 'Career Skills', 'Value Creation and Operating Plan', 'First 100 days',
      'A PE firm closes a platform acquisition with underdeveloped reporting and a thin sales pipeline. What is a practical first-100-days priority?',
      'Establish KPI reporting, cash visibility, ownership of initiatives, and a focused pipeline plan',
      [
        ['Focus first on a broad rebrand to signal momentum before building reporting cadence', 'A rebrand may help later, but it does not solve cash visibility, weak reporting, or pipeline accountability. First-100-days work starts with control, measurement, and ownership.'],
        ['Wait a year before measuring performance', 'Waiting a year is waiting through the first reporting cycle without visibility — the opposite of what value creation requires.'],
        ['Replace every manager before learning the business', 'Mass replacement before understanding the business loses institutional knowledge and disrupts customer relationships.'],
      ],
      'Value creation begins with visibility and accountability. Reporting, cash discipline, and initiative ownership help the sponsor manage the investment thesis.'),
    q(4103037, 'Career Skills', 'Value Creation and Operating Plan', 'Add-on logic',
      'A platform company can acquire a smaller competitor at a lower multiple and cross-sell into its customer base. What PE strategy is being tested?',
      'A buy-and-build strategy using add-on acquisitions and potential multiple arbitrage',
      [
        ['A dividend recap by definition', 'A dividend recap is a refinancing to extract cash. This is an acquisition, not a refinancing.'],
        ['A public-market pairs trade', 'Pairs trades are public-market long/short strategies. Buying and integrating a private competitor is not a pairs trade.'],
        ['A pure liquidation strategy', 'Liquidation sells assets. Buy-and-build acquires and combines them — the opposite operation.'],
      ],
      'Buy-and-build strategies seek growth, synergies, and sometimes multiple arbitrage by adding smaller acquisitions to a platform.'),
    q(4105100, 'Career Skills', 'Value Creation and Operating Plan', 'Pricing lever',
      'A portfolio company has not raised prices in four years despite high renewal rates and clear customer ROI. What value creation initiative may be worth testing?',
      'A disciplined pricing analysis that measures willingness to pay, churn risk, and margin impact',
      [
        ['A blanket 200% price increase tomorrow', '200% increases are not disciplined. They are negligence dressed as strategy and would destroy retention.'],
        ['A ban on customer feedback', 'Customer feedback is the only way to estimate elasticity. Banning it makes pricing decisions blind.'],
        ['A plan to cut product quality first', 'Cutting quality is a different lever (margin via cost), not pricing. They have opposite effects on the customer relationship.'],
      ],
      'Pricing can create value when it is evidence-based. Sponsors should test customer segments, competitive alternatives, elasticity, and implementation risk.'),
    q(4105101, 'Career Skills', 'Value Creation and Operating Plan', 'Procurement savings',
      'A platform and add-on company buy the same raw materials from different suppliers at different prices. What post-close opportunity is most direct?',
      'Combine purchasing scale and renegotiate supplier terms where service and quality allow',
      [
        ['Keep all supplier contracts separate forever', 'Separation forgoes the entire procurement synergy that justifies the add-on multiple.'],
        ['Cut inventory records so savings look larger', 'Faking savings is fraud. Real procurement savings require renegotiation, not record manipulation.'],
        ['Treat procurement savings as operational housekeeping rather than EBITDA upside', 'Procurement savings flow directly to gross margin and EBITDA. They are one of the most direct synergies.'],
      ],
      'Operational value creation often comes from practical synergies. Procurement savings need validation, implementation ownership, and attention to service levels.'),
    q(4107368, 'Career Skills', 'Value Creation and Operating Plan', 'Salesforce cleanup',
      'A portfolio company has many inactive reps and no clear pipeline stages. What value creation move is most practical?',
      'Define pipeline stages, rep productivity metrics, and accountability for conversion',
      [
        ['Hire more reps before measuring the current team', 'Adding more reps to a broken system multiplies the dysfunction. Measurement comes first.'],
        ['Ban CRM usage because it reveals problems', 'CRM is the diagnostic tool. Banning it hides the problem rather than fixing it.'],
        ['Measure only total headcount', 'Headcount doesn\'t produce revenue. Productivity per rep is the actual lever.'],
      ],
      'Commercial value creation starts with visibility. Pipeline quality and rep productivity show where growth is actually coming from.'),
    q(4107374, 'Career Skills', 'Value Creation and Operating Plan', 'KPI overload',
      'A new portfolio dashboard has 72 metrics and managers cannot tell which ones drive the plan. What should the operating partner do?',
      'Focus on the few KPIs tied to the investment thesis, cash, growth, and accountability',
      [
        ['Add more charts until clarity appears', 'More metrics produces less focus. Clarity comes from subtraction, not addition.'],
        ['Track only revenue and ignore operations', 'Revenue without operational visibility creates blind spots. The fix is focused KPIs, not a single one.'],
        ['Let every department choose unrelated vanity metrics', 'Department-specific vanity metrics produce no shared accountability. KPIs should ladder to the thesis.'],
      ],
      'Dashboards should guide action. Too many metrics can hide the handful that actually move value.'),
    q(4107378, 'Career Skills', 'Value Creation and Operating Plan', 'Working capital unlock',
      'A distributor has strong EBITDA but slow collections and excess inventory. What value creation lever should be tested?',
      'Improve working capital through collections discipline, inventory planning, and supplier terms',
      [
        ['Let EBITDA quality distract from working-capital cash leakage', 'Strong EBITDA with weak cash conversion is a classic warning. Cash, not EBITDA, services the debt.'],
        ['Cut all inventory regardless of service levels', 'Aggressive inventory cuts can cause stockouts and lost sales. Service-level testing is essential.'],
        ['Delay supplier payments without a plan', 'Unilateral payment delay damages supplier relationships and can trigger COD demands or supply disruption.'],
      ],
      'Cash conversion is a real value driver. Working capital improvements need operational discipline, not random squeezing.'),
    q(4107838, 'Career Skills', 'Value Creation and Operating Plan', 'Pricing leakage',
      'A portfolio company has list price increases, but sales reps discount heavily to close deals. What value-creation work is most useful?',
      'Analyze discounting, approval controls, customer segments, and price realization',
      [
        ['Announce another list price increase and celebrate', 'List increases that get discounted away accomplish nothing except documentation. Discount discipline is the real lever.'],
        ['Eliminate all discounting without testing churn and renewal risk', 'Some discounts retain valuable customers. Blanket bans can destroy revenue faster than they improve margin.'],
        ['Use list price as realized price without discount leakage analysis', 'List price is rarely realized price in B2B. Realization is the metric that matters.'],
      ],
      'Pricing value comes from realization, not just announcements. Discount discipline can improve margins when handled carefully.'),

    // Chapter 5: IC Memo, Deal Process, and Exit
    q(4103038, 'Career Skills', 'IC Memo, Deal Process, and Exit', 'IC risk framing',
      'An associate writes that a target is "recession-resistant" because revenue grew last year. What should the investment committee ask for?',
      'Evidence across cycles, customer budgets, contract terms, churn, and downside cases',
      [
        ['A stronger adjective in the memo', 'Adjectives are not evidence. The IC needs cross-cycle data, not language upgrades.'],
        ['Only last year results because recent data is enough', 'Recession resistance requires testing across at least one downturn. One year of growth is the opposite of cycle data.'],
        ['A guarantee from management that recessions are harmless', 'No management can guarantee recession outcomes. Verbal assurances are not underwriting.'],
      ],
      'Investment committee claims need support. Recession resistance should be tested with historical behavior, customer need, contracts, and stress scenarios.'),
    q(4103039, 'Career Skills', 'IC Memo, Deal Process, and Exit', 'Exit path',
      'A deal underwrites a 12x exit multiple after buying at 11x, but the base case shows limited growth. What is the best IC challenge?',
      'Ask what evidence supports multiple expansion and what returns look like without it',
      [
        ['Underwrite a richer future exit multiple without buyer evidence', 'Multiple expansion is not guaranteed. Many deals exit at the same or lower multiple than entry.'],
        ['Remove the exit multiple from the model', 'The exit multiple is the single largest IRR driver. Removing it makes the model unusable.'],
        ['Call the deal low risk because one turn is small', 'One turn of multiple expansion is 9% of the price. On a leveraged deal that swings IRR meaningfully.'],
      ],
      'PE underwriting should not rely casually on exit multiple expansion. The committee should test value creation, market comps, and downside returns.'),
    q(4107370, 'Career Skills', 'IC Memo, Deal Process, and Exit', 'Deal captain summary',
      'An IC member asks why this deal should win capital over three others this month. What should the associate answer?',
      'Summarize the differentiated thesis, return drivers, downside protection, and resource requirements',
      [
        ['Recite the entire data room index', 'The data room index is not a thesis. IC needs synthesis, not inventory.'],
        ['Say the deal team likes management', 'Liking management is not a differentiated thesis. Every team likes management going in.'],
        ['Point to the tallest bar in the model', 'Bar height is presentation, not analysis. The IC needs the reasoning, not the chart.'],
      ],
      'Investment committees allocate scarce capital. The answer should connect conviction, risk, and opportunity cost.'),
    q(4107371, 'Career Skills', 'IC Memo, Deal Process, and Exit', 'Exit buyer map',
      'A deal thesis assumes sale to a strategic buyer, but no likely acquirers have done deals in the category. What should IC ask for?',
      'A realistic exit map with buyer universe, rationale, valuation support, and backup paths',
      [
        ['Treat eventual buyer interest as guaranteed without mapping likely acquirers', 'Assumption-based exits leave the sponsor stuck holding the asset. Concrete buyer mapping is required.'],
        ['Use an exit multiple because spreadsheets need endings', 'The exit multiple needs a buyer to pay it. Without buyer rationale, the multiple is fiction.'],
        ['Postpone exit planning until the hold period is nearly over', 'Year five is too late for exit planning. The exit thesis should be tested at IC, not at sale.'],
      ],
      'PE underwriting should include plausible exit routes. A beautiful entry story still needs a buyer later.'),
    q(4107840, 'Career Skills', 'IC Memo, Deal Process, and Exit', 'Red-team question',
      'Before IC, a principal asks the associate to argue the bear case. What should the associate prepare?',
      'The strongest reasons the thesis could fail and the evidence that would confirm or reduce those risks',
      [
        ['Only minor risks that sound manageable', 'Minor risks do not test the thesis. The IC needs the genuine bear case to make an informed decision.'],
        ['A speech about how negativity hurts momentum', 'Sentiment management is not analysis. The point of red-teaming is to surface real risks.'],
        ['The same bull case with quieter adjectives', 'A subdued bull case is still a bull case. The IC needs the actual counter-thesis.'],
      ],
      'Investment committees need real debate. A strong bear case improves decision quality and post-close planning.'),
    q(4107845, 'Career Skills', 'IC Memo, Deal Process, and Exit', 'Exit route realism',
      'An IC memo lists IPO as the exit path for a niche industrial distributor. What should be challenged?',
      'Whether strategic buyers, sponsors, or realistic public-market criteria better match the asset',
      [
        ['Whether IPO sounds more glamorous', 'Glamour is not exit value. Most niche industrial distributors exit to strategic buyers or sponsors, not the public market.'],
        ['Whether all companies become public eventually', 'Most companies never go public. IPO is an option for a narrow set of qualifying businesses.'],
        ['Whether exit planning is optional until year five', 'Exit planning shapes entry pricing. Year-one underwriting needs realistic exit paths.'],
      ],
      'Exit planning should fit the business. Return cases are stronger when exit routes are realistic and buyer-backed.'),
    q(4107849, 'Career Skills', 'IC Memo, Deal Process, and Exit', 'Diligence open item',
      'A legal diligence item remains unresolved two days before IC and could affect required licenses. What should the team do?',
      'Flag the open item, decision impact, mitigation options, and whether approval should be conditional',
      [
        ['Bury it in the appendix until closing', 'Burying material risks compounds them at closing. IC will discover the issue and lose trust.'],
        ['Treat unresolved legal issues as self-correcting before close', 'Legal issues require active resolution. They do not improve by being ignored.'],
        ['Approve first and learn later', 'Approve-then-learn means committing capital without knowing if the company can operate legally.'],
      ],
      'IC materials should make unresolved risks explicit. Conditional approvals can work when the decision impact is clearly understood.'),
    // Chapter expansions (per-file banks): Ch1–5 + Capstone (BrightSpark LBO).
    ...peCh1Questions,
    ...peCh2Questions,
    ...peCh3Questions,
    ...peCh4Questions,
    ...peCh5Questions,
    ...peCapstoneQuestions,
  ], PE_QUESTION_DIFFICULTY), [{ subTopics: PE_SUB_TOPICS, mentorHints: PE_MENTOR_HINTS, correctShortened: PE_CORRECT_SHORTENED, source: 'pe' }]),

  // ---------------------------------------------------------------------------
  // HEDGE FUNDS ROADMAP
  // Syllabus chapters:
  //  1. Strategy, Mandate, and Edge
  //  2. Thesis Formation and Variant Perception
  //  3. Modeling, Valuation, and Scenario Work
  //  4. Shorts, Crowding, and Risk Control
  //  5. Portfolio Review and Performance Attribution
  // ---------------------------------------------------------------------------
  hedgeFundsRoadmap: runPolish(tagDifficulty([
    // Chapter 1: Strategy, Mandate, and Edge (NEW — closing the gap)
    q(4200050, 'Career Skills', 'Strategy, Mandate, and Edge', 'L/S vs event-driven',
      'A fund mandate says "long/short equity, US large cap, target net 50%." Which idea fits this mandate best?',
      'A pair-traded long/short call on two consumer staples names, expressed across one to three quarters',
      [
        ['A two-week merger arbitrage spread on a closing acquisition', 'Merger arb is event-driven, not L/S equity. Different mandate, different risk profile.'],
        ['A leveraged macro view on Brazilian rates', 'Macro rates trading violates both the equity and US-large-cap mandate constraints.'],
        ['A distressed credit bet on a defaulted leveraged loan', 'Distressed credit is a separate strategy with different liquidity, hold period, and skill set.'],
      ],
      'Strategy mandate is a hard constraint. Even brilliant ideas in the wrong mandate cannot be expressed by the fund and waste the analyst\'s research time.'),
    q(4200051, 'Career Skills', 'Strategy, Mandate, and Edge', 'Source of edge',
      'A long/short equity analyst claims edge in industrials. Which of these is the most defensible edge?',
      'Deep channel relationships and historical pattern recognition across multiple business cycles',
      [
        ['Speed of execution faster than other funds', 'Execution speed is a quant/HFT edge, not a fundamental L/S edge. Fundamental funds win on insight, not milliseconds.'],
        ['Access to material nonpublic information from corporate insiders', 'MNPI is illegal, not an edge. Acting on it is the textbook insider trading violation.'],
        ['Lower management fees than peers', 'Fees affect net returns to LPs but are not an investment edge. Edge means generating gross alpha.'],
      ],
      'Edge in fundamental L/S comes from informational, analytical, or behavioral advantage — built legally through deep work, not speed or insider access.'),
    q(4200052, 'Career Skills', 'Strategy, Mandate, and Edge', 'Beta vs alpha',
      'A long-only equity fund returned 22% in a year when the S&P 500 returned 20%. What does this most directly suggest about alpha?',
      'About 2% of the return may be alpha; the bulk is market beta',
      [
        ['The full 22% return is alpha because it beat the market', 'Beta is the market-driven portion. The 20% market return is beta; only the 2% excess is potentially alpha.'],
        ['There is no alpha because every return has a market component', 'Alpha is the residual after adjusting for market exposure. Some returns are pure alpha.'],
        ['Alpha cannot be measured without options pricing', 'Alpha is a residual return measurement that does not require options. CAPM-style attribution works with cash equities.'],
      ],
      'Alpha is market-adjusted return. Distinguishing alpha from beta is the first step in attribution and is essential to honest fund evaluation.'),

    // Chapter 2: Thesis Formation and Variant Perception
    q(4103040, 'Career Skills', 'Thesis Formation and Variant Perception', 'Variant view',
      'A stock screens cheap on consensus numbers, but the market already expects a weak quarter. What does a hedge fund analyst need most?',
      'A differentiated view on earnings power, timing, or catalyst that is not already priced in',
      [
        ['A cheap multiple alone', 'Cheap multiples often reflect known weakness. Edge requires a view beyond what is already discounted.'],
        ['A management quote from the annual report only', 'Management quotes are public information already in consensus. They do not create variant perception.'],
        ['A chart color that makes the stock look overlooked', 'Chart aesthetics are not analysis. Variant perception is about content, not presentation.'],
      ],
      'Public-market investing rewards variant perception. The question is not only whether a stock looks cheap, but what the market misunderstands.'),
    q(4103041, 'Career Skills', 'Thesis Formation and Variant Perception', 'Catalyst fit',
      'An analyst has a good long-term thesis, but no expected event or data point for two years. What portfolio question matters most for a catalyst-driven fund?',
      'Whether the expected timing fits the fund strategy, opportunity cost, and risk budget',
      [
        ['Whether the thesis sounds intelligent in isolation', 'A smart thesis with no catalyst window may never compensate for the holding cost. Intelligence in isolation does not pay.'],
        ['Whether waiting forever reduces all risk', 'Waiting accumulates time decay and opportunity cost. It does not reduce risk; it converts thesis risk into time risk.'],
        ['Whether the stock ticker is memorable', 'Memorability is not a fund process input. The catalyst calendar is the relevant question.'],
      ],
      'Different funds need different timing profiles. Catalyst-driven strategies must consider when the market may recognize the thesis and what capital is tied up meanwhile.'),
    q(4105106, 'Career Skills', 'Thesis Formation and Variant Perception', 'Consensus gap',
      'Consensus expects 3% same-store sales growth, but credit card data, web traffic, and store checks suggest closer to 8%. What is the analyst building?',
      'A variant view that estimates results differently from market expectations',
      [
        ['A risk-free arbitrage because three signals agree', 'Three signals agreeing does not make the trade risk-free. Public-market positions always carry market and timing risk.'],
        ['A reason to ignore valuation', 'A consensus gap creates an opportunity, but valuation still matters for sizing and risk-reward.'],
        ['A compliance excuse to trade on confidential earnings', 'Credit card data and channel checks are alternative data, not earnings. The thesis must be built on legal sources only.'],
      ],
      'Hedge fund ideas often start with a gap between expectations and likely outcomes. The edge still needs legality, sizing discipline, and valuation support.'),
    q(4105107, 'Career Skills', 'Thesis Formation and Variant Perception', 'Crowded long',
      'A long idea has strong fundamentals, but ownership is crowded among similar funds and the next catalyst is well known. What should the analyst consider?',
      'Whether good news is already priced in and positioning creates downside if expectations slip',
      [
        ['Crowding is always bullish because everyone agrees', 'Crowded longs have everyone on the same side. A small disappointment triggers everyone selling at once.'],
        ['Catalysts are irrelevant once a company is good', 'Catalysts move stocks. A "good" company can fall on a missed expectation if everyone is already positioned for the catalyst.'],
        ['The fund should size it maximum by default', 'Maximum sizing in crowded names creates maximum drawdown when the crowd unwinds. Sizing should reflect crowding risk.'],
      ],
      'A good company can be a risky trade if expectations and positioning are stretched. Variant perception includes what the market already believes.'),
    q(4107380, 'Career Skills', 'Thesis Formation and Variant Perception', 'Consensus whisper',
      'Consensus numbers look low, but every investor the analyst calls already expects a beat. What is the problem?',
      'The variant view may be less differentiated than the published estimates suggest',
      [
        ['A beat is guaranteed because everyone whispers it', 'Whispers raise the bar above published consensus. Beating consensus may still disappoint the whisper.'],
        ['Consensus estimates are the only expectations that matter', 'The market trades on actual investor expectations (whispers), not just published estimates.'],
        ['The analyst should ignore positioning', 'Positioning is what determines whether a thesis is differentiated. Ignoring it means ignoring the variant perception question.'],
      ],
      'Market expectations include more than consensus models. A trade needs edge versus what investors actually believe.'),
    q(4107388, 'Career Skills', 'Thesis Formation and Variant Perception', 'Capital allocation tell',
      'A company says demand is strong but quietly cuts growth capex and raises buybacks. What should the analyst ask?',
      'Whether management actions conflict with the public growth narrative',
      [
        ['Whether buybacks always prove growth is better', 'Buybacks return cash to shareholders, often because management lacks high-return reinvestment options. That is not a growth signal.'],
        ['Whether capex decisions are irrelevant', 'Capex decisions reveal management\'s view of future opportunity. They are the most direct read on internal growth expectations.'],
        ['Whether the company should never return cash', 'Cash return is appropriate at times. The question is whether the timing contradicts the narrative.'],
      ],
      'Capital allocation can reveal management expectations. Actions sometimes speak more clearly than conference-call adjectives.'),
    q(4107850, 'Career Skills', 'Thesis Formation and Variant Perception', 'Margin inflection',
      'Consensus expects flat margins, but your work suggests freight costs are falling faster than pricing. What is the variant perception?',
      'Margins may inflect upward before consensus estimates reflect the cost improvement',
      [
        ['The stock is interesting because charts are colorful', 'Charts are not theses. The variant perception is the margin inflection model, not visual appeal.'],
        ['Freight costs never affect earnings', 'Freight is a meaningful cost line for goods producers. Changes flow directly to gross margin.'],
        ['Consensus must be right because it is popular', 'Variant perception by definition assumes consensus may be wrong on this specific question. Popularity is not accuracy.'],
      ],
      'A variant view identifies where the market may be wrong and why. The best ideas connect evidence to estimate change.'),

    // Chapter 3: Modeling, Valuation, and Scenario Work
    q(4103044, 'Career Skills', 'Modeling, Valuation, and Scenario Work', 'Mosaic discipline',
      'A hedge fund analyst gathers store visits, web traffic, app downloads, and supplier commentary before earnings. What is the best use of this mosaic?',
      'Triangulate signals while checking bias, legality, and how each signal maps to financial results',
      [
        ['Treat any one positive signal as proof', 'Single signals are noisy. The point of a mosaic is triangulation across multiple sources.'],
        ['Use confidential information if it improves accuracy', 'Confidential information is MNPI. Using it is illegal regardless of accuracy benefit.'],
        ['Prefer newer alternative data over company filings without reconciliation', 'Filings remain the official record. Alternative data complements them, not replaces them.'],
      ],
      'A research mosaic can improve insight, but each input must be lawful, representative, and connected to revenue, margins, or valuation.'),
    q(4103045, 'Career Skills', 'Modeling, Valuation, and Scenario Work', 'Thesis drift',
      'A long position was initiated for margin expansion, but new data shows margins falling while revenue growth beats. What should the analyst do?',
      'Reassess the original thesis and decide whether the new facts justify holding, resizing, or exiting',
      [
        ['Keep the position because any beat is good', 'A beat on the wrong line item does not validate the original thesis. The fund is being paid for the original thesis, not a different one.'],
        ['Change the thesis silently after the fact', 'Silent thesis changes are how funds rationalize losing positions. Honest reassessment requires acknowledging the original thesis broke.'],
        ['Wait for year-end margin data before updating the thesis', 'Margin data is the original thesis driver. Ignoring it means abandoning the analytical framework.'],
      ],
      'Hedge fund discipline requires tracking the original underwriting. New facts may create a new thesis, but that decision should be explicit and risk-aware.'),
    q(4105110, 'Career Skills', 'Modeling, Valuation, and Scenario Work', 'Channel check conflict',
      'A hedge-fund analyst sees strong app-download data for a consumer company, but supplier checks show weak reorder activity. The signals conflict, so what should the analyst do before changing the model?',
      'Investigate why the signals conflict and which one better maps to revenue, margin, and timing',
      [
        ['Raise estimates using downloads alone because customer interest is the earliest signal', 'Downloads may be a useful leading indicator, but they might not translate into paid orders, revenue, inventory turns, or margin.'],
        ['Average the signals without understanding them', 'Averaging conflicting signals produces a noise result. Resolution requires understanding which signal is leading.'],
        ['Discard all data because it is imperfect', 'All data is imperfect. The skill is weighting and triangulating, not abandoning evidence.'],
      ],
      'Conflicting channel checks are normal in public-market diligence. Downloads, web traffic, supplier reorders, card data, and management commentary can each point to a different part of the business model. The analyst has to map each signal to the revenue chain, timing lag, and margin impact before deciding whether the thesis actually changed.',
      {
        solution: 'The right move is to investigate the conflict and decide which signal better maps to the company\'s economics. Downloads may show interest, while supplier reorders may reveal sell-through or inventory timing, so the analyst should triangulate before changing estimates.',
        mentorHint: 'Translate each signal into the business model: demand, conversion, inventory, revenue timing, or margin. Then decide which one should move the forecast.',
        alternatePrompts: {
          plain: 'If app-download data is bullish but supplier checks are weak, what should a hedge-fund analyst do before revising estimates?',
          teaching: 'Why is a conflict between channel checks often a prompt for triangulation rather than a reason to cherry-pick the signal you like?',
        },
        challengeRating: 5,
      }),
    q(4105111, 'Career Skills', 'Modeling, Valuation, and Scenario Work', 'Unit economics short',
      'A short thesis argues a delivery company grows revenue by subsidizing orders with negative contribution margin. What model output is most important?',
      'Cohort-level contribution margin and cash burn as incentives normalize',
      [
        ['Only gross order volume with no cost data', 'Volume without unit economics is the bull narrative. The short thesis is about whether each order makes or loses money.'],
        ['The founder\'s follower count', 'Social metrics are unrelated to unit economics or financial outcomes.'],
        ['A revenue multiple that ignores losses forever', 'Ignoring losses ignores the entire short thesis. Sustained losses force capital raises or exit.'],
      ],
      'Short work often tests whether growth is economically real. Unit economics, cohort behavior, and funding needs can reveal fragile revenue.'),
    q(4107390, 'Career Skills', 'Modeling, Valuation, and Scenario Work', 'Segment hidden loss',
      'A company reports strong consolidated margin, but the growth segment loses money and is buried in disclosures. What should the analyst build?',
      'A segment model that separates mature profit from growth losses and tests the path to profitability',
      [
        ['Use only consolidated margin forever', 'Consolidated margin hides the segment story. The growth segment may be the entire valuation question.'],
        ['Exclude the new growth segment from the loss analysis', 'New segments are often where the equity value sits. Ignoring them misses the core thesis.'],
        ['Value losses as revenue by another name', 'Losses are losses; they consume capital and need profitability paths. Conflating them with revenue is the bull narrative trap.'],
      ],
      'Segment work can reveal what the market is really paying for. Growth that consumes cash needs a credible profitability path.'),
    q(4107394, 'Career Skills', 'Modeling, Valuation, and Scenario Work', 'Estimate sensitivity',
      'A thesis depends on gross margin rising 300 bps, but the model barely changes value when margin moves. What should the analyst check?',
      'Whether the model correctly links margin assumptions to earnings, cash flow, and valuation',
      [
        ['Whether sensitivity tables are decorative', 'Sensitivity tables are diagnostic tools. If they are insensitive to the thesis driver, the model is wired wrong.'],
        ['Whether the thesis can ignore its main driver', 'A thesis that ignores its main driver is not a thesis. The sensitivity points to a model bug, not a strategic insight.'],
        ['Whether valuation should be hardcoded', 'Hardcoded valuation breaks the link between assumptions and output, which is the entire purpose of a model.'],
      ],
      'Models should be sensitive to the assumptions that matter. If they are not, formulas or thesis framing may be wrong.'),
    q(4107854, 'Career Skills', 'Modeling, Valuation, and Scenario Work', 'Channel check sample',
      'Three channel checks support your short thesis, but all came from one region hit by bad weather. What should you do?',
      'Broaden the sample and separate local noise from company-wide demand weakness',
      [
        ['Publish the idea because three is a crowd', 'Three calls from one region is a sample of one, not three. Geographic diversification is essential to read a national company.'],
        ['Leave weather out of the channel-check interpretation', 'Weather is the obvious confounding variable here. Ignoring it means misreading local noise as company weakness.'],
        ['Use only the calls that support the short', 'Selection bias destroys diligence quality. The point is to test the thesis, not confirm it.'],
      ],
      'Diligence quality matters. A narrow sample can create false confidence if local factors drive the signal.'),

    // Chapter 4: Shorts, Crowding, and Risk Control
    q(4103042, 'Career Skills', 'Shorts, Crowding, and Risk Control', 'Gross and net',
      'A fund is 140% long and 80% short. What are gross and net exposure?',
      'Gross exposure is 220% and net exposure is 60% long',
      [
        ['Gross exposure is 60% and net exposure is 220%', 'The definitions are inverted. Gross adds; net subtracts.'],
        ['Gross exposure is 140% and net exposure is 80%', 'Gross is the sum of long and short magnitudes; net is the difference. Neither equals the individual leg.'],
        ['Gross exposure is 20% and net exposure is 60% short', 'A book that is more long than short cannot be net short. The math is 140 − 80 = 60 long.'],
      ],
      'Gross exposure adds long and short exposure, while net exposure subtracts shorts from longs. Here, gross is 140% + 80% = 220%; net is 60% long.'),
    q(4103043, 'Career Skills', 'Shorts, Crowding, and Risk Control', 'Short squeeze setup',
      'A short has high borrow cost, crowded positioning, and an upcoming positive data event. What risk should the analyst highlight?',
      'A short squeeze or rapid mark-to-market loss if positive news forces covering',
      [
        ['A guaranteed profit because crowded shorts are always right', 'Crowded shorts have all the risk in one direction. Positive news triggers a forced-cover stampede.'],
        ['No risk because shorts can only lose the initial price', 'Shorts have unlimited downside (the stock can rise indefinitely). The "initial price" framing is wrong.'],
        ['A liquidity benefit from higher borrow cost', 'High borrow cost is a sign of constrained supply and squeeze risk, not liquidity benefit.'],
      ],
      'Short positions have asymmetric risk and can be vulnerable to crowding, borrow pressure, and positive catalysts. Risk management must address path, not only thesis.'),
    q(4105108, 'Career Skills', 'Shorts, Crowding, and Risk Control', 'Drawdown response',
      'A position falls 18% after news that partially weakens, but does not destroy, the thesis. What is the best risk process?',
      'Re-underwrite the thesis, downside, sizing, and stop-loss discipline before deciding to add, hold, reduce, or exit',
      [
        ['Double down automatically to lower average cost', 'Averaging down on a weakened thesis adds capital to a deteriorating position. Discipline requires re-underwriting first.'],
        ['Treat the original memo as sufficient despite a new drawdown', 'The memo was written before the news. New information requires fresh analysis, not adherence to the original.'],
        ['Exit every losing position without analysis', 'Mechanical exits on any decline destroy compounding. The discipline is analysis, not panic.'],
      ],
      'Risk management requires fresh underwriting when facts change. Price movement alone is not the thesis, but losses demand disciplined review.'),
    q(4105109, 'Career Skills', 'Shorts, Crowding, and Risk Control', 'Factor exposure',
      'A portfolio of unrelated stock picks loses money on a day when high-growth stocks sell off broadly. What should the PM ask?',
      'Whether the book has unintended factor exposure to growth, duration, or momentum',
      [
        ['Whether every analyst used the same font', 'Font is not a portfolio risk. The risk is shared factor exposure across "unrelated" picks.'],
        ['Whether company-specific research no longer matters', 'Company research matters, but it cannot diversify away common factor exposure.'],
        ['Whether the market should be ignored', 'The market reveals factor risk. Ignoring it leaves the fund blind to the very risk that hurt it.'],
      ],
      'Single-name research can still create portfolio-level factor bets. Funds should monitor exposures that may dominate idiosyncratic alpha.'),
    q(4105115, 'Career Skills', 'Shorts, Crowding, and Risk Control', 'Borrow recall',
      'A fund is short a small-cap stock with limited lend, and the prime broker warns borrow may be recalled. What risk should be addressed?',
      'Forced buy-in or expensive borrow that can disrupt the short thesis and sizing',
      [
        ['A guaranteed lower stock price', 'Borrow stress causes forced covers, which push prices up — the opposite of guaranteed declines.'],
        ['A benefit because scarce borrow pays the short seller', 'Scarce borrow costs the short seller (high rebate or hard-to-borrow fees), not pays them.'],
        ['No risk because short positions never require financing', 'Short positions absolutely require borrow. Failed borrow triggers buy-ins at market price.'],
      ],
      'Shorts carry borrow and recall risk in addition to thesis risk. Financing terms can force timing decisions even when the investment view has not played out.'),
    q(4107382, 'Career Skills', 'Shorts, Crowding, and Risk Control', 'Stop versus thesis',
      'A PM says the stop-loss hit, but the analyst argues the thesis is unchanged. What should the team decide?',
      'Whether the risk rule, new facts, liquidity, and portfolio role justify exiting or resizing',
      [
        ['Let conviction override the predefined stop-loss process', 'Stops exist to override conviction in losses. Ignoring them is how funds blow up.'],
        ['Exit immediately based on the drawdown alone', 'Mechanical stops without analysis can exit good ideas at the worst time. Process matters.'],
        ['Rename the stop-loss a suggestion', 'Renaming the rule does not change the loss. The stop existed for risk management — disable it and risk management fails.'],
      ],
      'Risk rules and thesis work must talk to each other. A stop can force discipline even when the story still sounds appealing.'),
    q(4107389, 'Career Skills', 'Shorts, Crowding, and Risk Control', 'Short borrow math',
      'A short has 25% expected downside but borrow costs 12% annually and the catalyst may take two years. What should be assessed?',
      'Whether expected return still compensates for borrow cost, timing, and squeeze risk',
      [
        ['Treat borrow cost as a later detail instead of a current return drag', '12% × 2 years = 24% of carrying cost, almost entirely offsetting the 25% expected downside. Borrow is the dominant variable.'],
        ['Underwrite the short around an imminent catalyst without timing evidence', 'Timing assumptions should match evidence, not optimism. A two-year catalyst is a two-year cost.'],
        ['Short only because the company is annoying', 'Annoyance is not an investment thesis. The economics need to work.'],
      ],
      'Short economics include borrow and time. A correct thesis can be a poor trade if carrying costs overwhelm it.'),
    q(4107863, 'Career Skills', 'Shorts, Crowding, and Risk Control', 'Crowded exit',
      'A popular long misses guidance and many funds own it for the same catalyst. What risk should the PM consider?',
      'Crowded positioning may amplify downside and reduce exit liquidity',
      [
        ['Crowding only matters when the idea is boring', 'Crowding matters more when the idea is exciting because more funds rush for the same door.'],
        ['Everyone can exit first if they decide quickly', 'Speed does not create liquidity. When everyone exits at once, the bid disappears for everyone.'],
        ['Guidance misses create extra liquidity by magic', 'Guidance misses kill liquidity. Buyers step away precisely when sellers want to exit.'],
      ],
      'Crowded trades can move violently when the thesis breaks. Risk management includes who else may need the door.'),

    // Chapter 5: Portfolio Review and Performance Attribution (NEW + strengthened)
    q(4200060, 'Career Skills', 'Portfolio Review and Performance Attribution', 'Hit rate vs slugging',
      'Analyst A makes 100 picks with a 60% hit rate and average winner of 5%, average loser of 4%. Analyst B has a 40% hit rate but average winner of 15% and loser of 3%. Who is better?',
      'Analyst B — expected value per pick is 4.2%, vs 1.4% for A',
      [
        ['Analyst A because hit rate is higher', 'Hit rate alone is misleading. A higher hit rate with small wins and big losses can produce worse expected value.'],
        ['Both are equally good because returns vary', 'Expected value math is deterministic given the inputs. The two analysts have measurably different productivity.'],
        ['Analyst A because losing 4% is worse than losing 3%', 'Loss size matters, but so do win size and frequency. The full expected value combines all four.'],
      ],
      'Performance attribution requires looking at hit rate, win size, and loss size together. Slugging matters as much as batting average.'),
    q(4200061, 'Career Skills', 'Portfolio Review and Performance Attribution', 'Contribution analysis',
      'A long/short fund returned 12% net. Three names contributed 18% to gross return, while the rest of the book lost 4%. What should the PM examine?',
      'Whether the book is over-reliant on a few names and what would happen if those names reversed',
      [
        ['Celebrate because returns are positive', 'Positive returns hide structural fragility. If those three names reverse, the fund\'s return profile collapses.'],
        ['Cut the winning positions immediately', 'Cutting winners without analysis discards what works. The question is concentration risk, not winner discipline.'],
        ['Rely on total return while leaving position contribution unexplained', 'Total return tells you what happened; contribution tells you how reproducible it is. Process review needs contribution.'],
      ],
      'Contribution attribution reveals whether returns came from many ideas or few. Concentration risk hides inside positive headline returns.'),
    q(4200062, 'Career Skills', 'Portfolio Review and Performance Attribution', 'Add cut or hold',
      'A position is up 30% on the original thesis but the catalyst has played out and the upside case is now smaller. What should attribution-based discipline suggest?',
      'Reassess sizing — the position may need to be trimmed back to reflect compressed forward risk-reward',
      [
        ['Hold the full position forever because it worked', 'Forward risk-reward changes after the catalyst. Holding the full size means accepting a worse risk profile.'],
        ['Sell the entire position immediately', 'Full exits should be based on the new risk-reward, not a mechanical rule. Some forward upside may still justify a smaller position.'],
        ['Double the position to celebrate momentum', 'Doubling after the catalyst played out increases risk with reduced reward. The opposite of disciplined.'],
      ],
      'Attribution-driven discipline keeps position sizing aligned with current risk-reward, not historical conviction or sunk cost.'),
    q(4103046, 'Career Skills', 'Portfolio Review and Performance Attribution', 'Position sizing',
      'Two ideas have similar upside, but one has higher liquidity risk and a wider range of outcomes. How should sizing generally respond?',
      'Size the higher-uncertainty idea smaller or require stronger expected return for the risk',
      [
        ['Size both equally because upside is all that matters', 'Equal sizing on unequal risk produces unequal contribution to risk. Position sizing must reflect uncertainty.'],
        ['Make the riskier idea larger to prove conviction', 'Sizing as conviction signaling is how funds blow up. Sizing should reflect risk-adjusted expected return.'],
        ['Treat liquidity as fine until the market is visibly shut', 'Liquidity determines whether you can exit. Ignoring it means accepting forced-hold risk.'],
      ],
      'Position size should reflect upside, downside, liquidity, confidence, correlation, and portfolio role. Similar upside does not mean similar risk-adjusted size.'),
    q(4103047, 'Career Skills', 'Portfolio Review and Performance Attribution', 'Pair trade purpose',
      'A fund is long a strong retailer and short a weaker retailer in the same sector. What is the main portfolio purpose of this pair trade?',
      'Express relative company view while reducing some sector and market exposure',
      [
        ['Eliminate all possible risk', 'Pair trades hedge sector beta but retain idiosyncratic, basis, and timing risk. They do not eliminate all risk.'],
        ['Guarantee both legs make money', 'Pair trades make money on the spread. One leg often loses; profit comes from the other leg outperforming.'],
        ['Avoid having to research either company', 'Pair trades require deep research on both companies to identify the divergence. Less research means worse outcomes.'],
      ],
      'A pair trade can isolate relative performance by hedging some common factor exposure. It still carries basis, timing, borrow, and thesis risk.'),
    q(4105112, 'Career Skills', 'Portfolio Review and Performance Attribution', 'Liquidity sizing',
      'An idea has 60% upside but trades only $3 million of value per day, and the fund manages $2 billion. What should sizing reflect?',
      'Liquidity limits, exit risk, position concentration, and the time needed to build or unwind',
      [
        ['Only the upside target', 'A 60% upside is meaningless if you cannot enter or exit the position at scale. Liquidity is a hard constraint.'],
        ['A position larger than daily volume because conviction is loud', 'A position multiple times daily volume cannot be exited cleanly. Building it would move the price against you immediately.'],
        ['No limit because public stocks are always liquid', 'Public listing does not equal liquidity. Many listed stocks are highly illiquid in size.'],
      ],
      'Liquidity affects real-world returns. Funds need to size positions so they can enter, exit, and manage risk without overwhelming the market.'),
    q(4107856, 'Career Skills', 'Portfolio Review and Performance Attribution', 'Net exposure creep',
      'Several longs rally while shorts are covered, leaving the book with more net long exposure than intended. What should the PM review?',
      'Whether net, gross, factor, and sector exposures still match the fund\'s mandate and risk appetite',
      [
        ['Celebrate and stop measuring exposure', 'Drift left unmeasured becomes drift left unmanaged. The fund could be running 80% net long without realizing it.'],
        ['Call it alpha until the market turns', 'Net exposure creep is beta, not alpha. Calling it alpha misattributes returns and risks.'],
        ['Model short availability as guaranteed when the fund needs it', 'Shorts require thesis development, borrow, and entry timing. They do not reappear on demand when net exposure overshoots.'],
      ],
      'Portfolio exposure can drift through performance and trading. Construction discipline keeps returns tied to intended risk.'),
    q(4107865, 'Career Skills', 'Portfolio Review and Performance Attribution', 'Sizing after win',
      'A medium-conviction position doubles and becomes one of the fund\'s largest weights. What should the team decide?',
      'Whether the new size still fits conviction, liquidity, upside, and portfolio risk',
      [
        ['Let winners resize the book without review', 'Letting winners resize means accepting whatever concentration the market hands the fund. Discipline requires active sizing.'],
        ['Sell everything immediately because gains are suspicious', 'Mechanical exit on a winner discards forward upside. The decision should reflect updated risk-reward.'],
        ['Keep size because taxes are the only consideration', 'Hedge funds with limited LP redemptions usually have low tax friction. Tax cannot override sizing discipline.'],
      ],
      'Position size should reflect current risk-reward, not just historical cost. Winners need fresh portfolio review.'),
    // Chapter expansions (per-file banks): Ch1–5 + Capstone (Apex Capital).
    ...hfCh1Questions,
    ...hfCh2Questions,
    ...hfCh3Questions,
    ...hfCh4Questions,
    ...hfCh5Questions,
    ...hfCapstoneQuestions,
  ], HF_QUESTION_DIFFICULTY), [{ subTopics: HF_SUB_TOPICS, mentorHints: HF_MENTOR_HINTS, correctShortened: HF_CORRECT_SHORTENED, source: 'hf' }]),

  // ---------------------------------------------------------------------------
  // CREDIT AND LEVFIN ROADMAP
  // Syllabus chapters:
  //  1. Borrower and Capital Structure Basics
  //  2. Credit Metrics and Cash Flow
  //  3. LevFin Markets and Debt Capacity
  //  4. Covenants, Documentation, and Protection
  //  5. Distress Signals and Recovery Thinking
  // ---------------------------------------------------------------------------
  creditLevFinRoadmap: runPolish(tagDifficulty([
    // Chapter 1: Borrower and Capital Structure Basics (NEW cap-structure mapping)
    q(4200070, 'Career Skills', 'Borrower and Capital Structure Basics', 'Priority waterfall',
      'A borrower has a $100M revolver, $300M first-lien term loan, $200M second-lien term loan, $250M senior unsecured notes, and $150M subordinated notes. In a liquidation, who gets paid first from collateral proceeds?',
      'The revolver and first-lien term loan (pari passu on the collateral), then second-lien, then unsecured, then sub',
      [
        ['Subordinated notes first because they have the highest coupon', 'Coupon size does not determine priority. Subordinated debt is explicitly last in line by contract.'],
        ['All creditors pro rata based on principal amount', 'Pro rata sharing only applies within a tranche. Across tranches, the waterfall is strict priority by lien/seniority.'],
        ['Unsecured notes first because they are simpler', 'Unsecured notes have no collateral claim. They recover only after all secured claims are satisfied.'],
      ],
      'Capital structure priority is contractual: secured first (by lien priority), unsecured next, subordinated last. The waterfall is the foundation of credit analysis.'),
    q(4200071, 'Career Skills', 'Borrower and Capital Structure Basics', 'Revolver vs term loan',
      'What is the typical structural difference between a revolver and a term loan in a leveraged credit facility?',
      'A revolver allows the borrower to draw, repay, and re-borrow; a term loan is drawn once and amortizes (or matures) without re-borrowing',
      [
        ['Revolvers are unsecured, term loans are secured', 'Revolvers and term loans in a credit agreement are typically both secured by the same collateral package, often pari passu.'],
        ['Term loans always carry higher coupons than revolvers', 'Pricing depends on tenor, seniority, and market — not the loan type alone. Revolvers can price above or below term loans.'],
        ['Revolvers have no maintenance covenants', 'Revolvers often carry the maintenance covenants for the entire facility (springing or fixed), making them more covenant-sensitive than the term loan.'],
      ],
      'Revolvers provide working-capital flexibility; term loans are committed long-term financing. Both can be secured at the same priority but serve very different functions.'),
    q(4200072, 'Career Skills', 'Borrower and Capital Structure Basics', 'Enterprise value to debt',
      'A borrower has $500M of senior secured debt and $300M of unsecured notes. The business is sold in a distressed scenario for $600M enterprise value. What do the secured and unsecured lenders recover?',
      'Secured lenders fully repaid ($500M of $600M); unsecured lenders recover $100M out of $300M, or ~33%',
      [
        ['Both tranches pro rata: secured 62.5%, unsecured 37.5%', 'Pro rata sharing ignores priority. Secured lenders get paid in full before unsecured see a dollar.'],
        ['Both tranches recover 75% based on total debt to EV', 'A blended recovery ignores the waterfall. Different tranches recover very differently.'],
        ['Unsecured first because their notes are older', 'Issuance date does not determine priority. Lien/seniority does.'],
      ],
      'In distress, enterprise value cascades down the priority waterfall. Secured lenders are made whole first; unsecured only recover the residual.'),

    // Chapter 2: Credit Metrics and Cash Flow
    q(4103048, 'Career Skills', 'Credit Metrics and Cash Flow', 'Leverage math',
      'A borrower has $600 million of debt and $150 million of EBITDA. What is total debt to EBITDA?',
      '4.0x',
      [
        ['0.25x', 'That inverts the ratio: 150/600 = 0.25 is EBITDA-to-debt, not the other way.'],
        ['2.5x', '2.5x would require $375M debt against $150M EBITDA. The actual debt is $600M.'],
        ['7.5x', '7.5x would require $1,125M debt. The actual debt is $600M.'],
      ],
      'Leverage equals debt divided by EBITDA. Here, 600 / 150 = 4.0x.'),
    q(4103049, 'Career Skills', 'Credit Metrics and Cash Flow', 'Interest coverage',
      'A company has EBITDA of $120 million and annual cash interest of $30 million. What is EBITDA interest coverage?',
      '4.0x',
      [
        ['0.25x', 'That inverts the ratio: 30/120 = 0.25 is the inverse. Coverage is EBITDA over interest.'],
        ['2.0x', '2.0x would require $60M interest expense. The actual interest is $30M.'],
        ['6.0x', '6.0x would require $20M interest expense. The actual interest is $30M.'],
      ],
      'Interest coverage measures ability to service debt from earnings. EBITDA / cash interest = 120 / 30 = 4.0x.'),
    q(4103050, 'Career Skills', 'Credit Metrics and Cash Flow', 'Cyclical borrower',
      'A leveraged borrower sells discretionary products and EBITDA fell 35% in the last downturn. What should a credit memo emphasize?',
      'Downside EBITDA, liquidity, covenant headroom, and ability to service debt through a cycle',
      [
        ['Only the latest good quarter', 'Cyclical borrowers should be analyzed at trough, not peak. The latest quarter says nothing about downturn capacity.'],
        ['Brand preference with no cash-flow analysis', 'Brand strength matters at the margin but does not service debt. Cash flow does.'],
        ['The fact that leverage is lower when EBITDA is ignored', 'Removing EBITDA from the calculation removes the denominator. The ratio becomes meaningless, not better.'],
      ],
      'Credit analysis focuses on downside protection and repayment capacity. Cyclicality requires stress cases, liquidity review, and covenant analysis.'),
    q(4105116, 'Career Skills', 'Credit Metrics and Cash Flow', 'Free cash flow focus',
      'A borrower reports $200 million of EBITDA but spends $90 million on capex and $55 million on cash interest each year. What should the credit analyst emphasize?',
      'Cash flow after capex and interest, because EBITDA alone overstates debt service capacity',
      [
        ['Only EBITDA because capex and interest are small details', 'Capex and interest consume $145M of $200M EBITDA. They are the entire conversion story.'],
        ['Revenue growth with no cash conversion review', 'Growing revenue with weak cash conversion just funds more capex. Lenders need cash to service debt.'],
        ['The coupon font in the bond offering memo', 'Font is irrelevant. Cash conversion math is the actual question.'],
      ],
      'Credit analysis cares about actual cash available to service and repay debt. EBITDA is a starting point, not the finish line.'),
    q(4105117, 'Career Skills', 'Credit Metrics and Cash Flow', 'Pro forma leverage',
      'A company with $300 million of existing debt raises $200 million more to acquire a business with $50 million of EBITDA. Combined EBITDA will be $125 million. What is pro forma debt to EBITDA?',
      '4.0x',
      [
        ['2.4x', '2.4x uses only the existing $300M / $125M = 2.4. The pro forma includes the new $200M.'],
        ['5.0x', '5.0x would imply $625M debt or $100M EBITDA. The math is $500M / $125M = 4.0x.'],
        ['6.7x', '6.7x ignores the EBITDA acquired. The deal brings $50M of new EBITDA against $200M of new debt.'],
      ],
      'Pro forma leverage uses total debt and combined EBITDA after the transaction. Here, 500 million / 125 million = 4.0x.'),
    q(4107396, 'Career Skills', 'Credit Metrics and Cash Flow', 'Lease-adjusted leverage',
      'A retailer has moderate debt but very large lease obligations. What should the credit analyst consider?',
      'Lease-adjusted leverage and fixed-charge burden, not just funded debt',
      [
        ['Exclude lease obligations because the store base looks productive', 'Operating leases are debt-like obligations under ASC 842 and are part of the fixed-charge burden whether on or off the funded-debt line.'],
        ['Treat lease expense as revenue', 'Lease expense is a cost, not revenue. Treating it as revenue inverts the income statement.'],
        ['Treat lease liabilities as fully flexible despite contractual terms', 'Most leases are long-dated and difficult to break. Treating them as cancelable optionality understates the contractual obligation.'],
      ],
      'Credit risk includes contractual obligations beyond funded debt. Leases can reduce flexibility through a downturn.'),
    q(4107866, 'Career Skills', 'Credit Metrics and Cash Flow', 'Cash flow conversion',
      'A borrower reports strong EBITDA, but cash flow is weak because receivables and inventory keep rising. What should credit analysis focus on?',
      'Whether EBITDA converts to cash available for debt service through the cycle',
      [
        ['Whether EBITDA sounds more cheerful than cash', 'Lenders are repaid in cash, not adjectives. The conversion gap is the question.'],
        ['Whether working capital can be ignored forever', 'Working capital builds permanently absorb cash. Ignoring them means missing the leakage.'],
        ['Whether lenders are paid in adjusted earnings', 'Lenders are paid in cash. Adjusted earnings are accounting; cash is the deliverable.'],
      ],
      'Credit investors get repaid with cash, not presentation EBITDA. Working capital quality matters.'),
    q(4107878, 'Career Skills', 'Credit Metrics and Cash Flow', 'Customer concentration contract',
      'A borrower\'s largest customer is 35% of revenue, and the contract renews next year. What is the credit concern?',
      'Loss or repricing of the customer could materially reduce EBITDA and debt service capacity',
      [
        ['Large customers are always safer customers', 'Single-customer concentration is the highest-risk revenue structure. Large customers can also walk.'],
        ['Renewal dates matter only to sales teams', 'Renewal dates determine when 35% of revenue is at risk. They are central to credit analysis.'],
        ['Revenue concentration improves diversification', 'Concentration is the opposite of diversification. The two terms are antonyms.'],
      ],
      'Customer concentration can create step-change credit risk. Contract terms and renewal probability matter.'),

    // Chapter 3: LevFin Markets and Debt Capacity
    q(4103053, 'Career Skills', 'LevFin Markets and Debt Capacity', 'Use of proceeds',
      'A company raises new secured debt to fund an acquisition and refinance existing notes. Why does the use of proceeds matter to a levfin banker?',
      'It affects pro forma capitalization, leverage, covenant capacity, ratings, and investor marketing',
      [
        ['It only matters to the company treasurer after closing', 'Use of proceeds shapes how investors price the deal. It is a primary marketing input, not a treasury detail.'],
        ['It replaces the need for a sources and uses table', 'Use of proceeds is the labeling on the sources and uses table. They are complementary, not substitutes.'],
        ['It has no effect on credit risk', 'Whether the new debt funds growth, refinancing, or a dividend changes leverage, liquidity, and lender protection materially.'],
      ],
      'Use of proceeds drives the pro forma capital structure and credit story. Investors and ratings analysts need to understand what debt funds and how risk changes.'),
    q(4103054, 'Career Skills', 'LevFin Markets and Debt Capacity', 'Sources and uses',
      'A sponsor buys a company for $1,000 million, pays $40 million of fees, raises $650 million of debt, and contributes the rest as equity. How much equity is needed?',
      '$390 million',
      [
        ['$350 million', '$350M leaves the sources and uses unbalanced by $40M (the fees). Sources must cover uses including fees.'],
        ['$610 million', '$610M would imply only $390M of debt. The prompt states $650M of debt.'],
        ['$1,690 million', 'That double-counts somewhere — total uses are $1,040M, not $1,690M.'],
      ],
      'Sources must equal uses. Total uses are 1,000 + 40 = 1,040; debt funds 650, so equity is 390.'),
    q(4105122, 'Career Skills', 'LevFin Markets and Debt Capacity', 'OID math',
      'A loan is issued at 98 OID, meaning investors pay 98 cents on the dollar for $100 of face value. What is the immediate effect?',
      'The borrower receives less cash than face amount, while investors still hold full principal claim',
      [
        ['The borrower receives $102 for every $100 borrowed', '98 OID means the borrower receives $98, not $102. OID below par reduces proceeds.'],
        ['The loan has no principal amount', 'The face value remains $100. OID changes proceeds, not the principal claim.'],
        ['The interest rate becomes zero by definition', 'OID and interest rate are separate. Many OID-discounted loans still carry significant coupon.'],
      ],
      'Original issue discount affects proceeds and investor yield. A 98 OID means $98 of cash proceeds per $100 of loan face before fees and expenses.'),
    q(4105118, 'Career Skills', 'LevFin Markets and Debt Capacity', 'Rating agency lens',
      'A company wants a higher leverage loan package but already has weak free cash flow and volatile margins. What rating concern is most relevant?',
      'Higher leverage may weaken credit metrics, liquidity, and resilience through a downturn',
      [
        ['More debt always improves ratings because cash increases at closing', 'New debt proceeds are typically used immediately (acquisition, refi, dividend). Ratings look at pro forma leverage, not transient cash.'],
        ['Ratings depend only on company size', 'Size is one factor among many. Leverage, coverage, and business risk drive ratings more directly.'],
        ['Volatile margins are irrelevant for lenders', 'Volatile margins are highly relevant — they determine downside coverage and covenant headroom.'],
      ],
      'Ratings and credit investors focus on leverage, coverage, cash flow, business risk, and liquidity. Extra debt can reduce flexibility even if proceeds are useful.'),
    q(4105121, 'Career Skills', 'LevFin Markets and Debt Capacity', 'Flex language',
      'Investor demand is weaker than expected during syndication, and the commitment papers allow pricing flex. What can arrangers usually do?',
      'Adjust pricing or terms within agreed limits to clear the market',
      [
        ['Change the borrower without telling anyone', 'Flex applies to pricing and terms, not borrower identity. Substituting the borrower is not a flex right.'],
        ['Cancel all covenants automatically', 'Flex usually tightens covenants, not eliminates them. Covenants are the lender protections being negotiated.'],
        ['Force investors to buy at any price', 'Flex is the arranger\'s right to adjust terms to attract investors, not coerce them. Investors retain discretion.'],
      ],
      'Flex provisions help arrangers respond to market demand. They may allow changes to spread, discount, structure, or terms within negotiated boundaries.'),
    q(4107400, 'Career Skills', 'LevFin Markets and Debt Capacity', 'Ratings meeting prep',
      'A borrower is meeting rating agencies before a bond launch. What should the levfin team prepare?',
      'A clear credit story covering business risk, leverage, cash flow, liquidity, and financial policy',
      [
        ['Only the most optimistic revenue slide', 'Agencies focus on downside resilience. Optimism without stress cases is the opposite of what they need.'],
        ['A promise that ratings never change', 'Rating actions are common and unilateral. Agencies do not accept commitment promises against future review.'],
        ['A list of investors who like lunch', 'Agencies are independent of investor demand. Investor preferences are irrelevant to the rating analysis.'],
      ],
      'Ratings work needs a credible full credit profile. Agencies look beyond the transaction marketing headline.'),
    q(4107880, 'Career Skills', 'LevFin Markets and Debt Capacity', 'Bridge loan risk',
      'A bank commits to a bridge loan if a bond financing cannot be placed. What risk is the bank taking?',
      'It may be forced to fund and hold exposure if markets do not support the permanent financing',
      [
        ['The risk that the bridge is too short to see', 'The "bridge" name is metaphorical. The risk is balance-sheet exposure if the takeout fails.'],
        ['No risk because bonds always price', 'Bonds do not always price. Bridge commitments exist precisely because markets can close (2008, 2020, 2022 examples).'],
        ['Only administrative risk from more paperwork', 'Bridge underwriting is real capital commitment, often hundreds of millions of dollars of balance-sheet risk.'],
      ],
      'Bridge commitments support transactions but create underwriting exposure. Market windows can close at inconvenient times.'),
    q(4107876, 'Career Skills', 'LevFin Markets and Debt Capacity', 'Rating agency adjustment',
      'Management presents leverage using generous add-backs, but rating agencies use a stricter EBITDA view. What should the team compare?',
      'Company-adjusted leverage versus agency-adjusted leverage and implications for rating and pricing',
      [
        ['Use only management numbers because they are friendlier', 'Agencies will rate on their own EBITDA view. Using management numbers misleads internal sizing and rating expectations.'],
        ['Treat every company adjustment as rating-agency accepted', 'Agencies explicitly haircut aggressive add-backs (savings not yet realized, run-rate synergies). Their view is usually more conservative.'],
        ['Wait to check rating impact until after capital is allocated', 'Ratings affect pricing and demand. Surprising the market with a worse rating after allocation breaks the deal.'],
      ],
      'Different EBITDA definitions can change leverage and marketability. LevFin teams need to anticipate rating agency treatment.'),

    // Chapter 4: Covenants, Documentation, and Protection
    q(4103051, 'Career Skills', 'Covenants, Documentation, and Protection', 'Maintenance covenant',
      'A term loan requires the borrower to keep first-lien leverage below 5.0x each quarter. What kind of protection is this?',
      'A maintenance covenant that tests leverage periodically',
      [
        ['An incurrence covenant only tested when new debt is issued', 'Incurrence covenants test at the moment of action. This is a quarterly test, which makes it maintenance.'],
        ['A call protection fee', 'Call protection limits prepayment; it is unrelated to leverage testing.'],
        ['A voting agreement for board seats', 'Voting agreements are governance terms. This is a financial covenant in a credit agreement.'],
      ],
      'Maintenance covenants require ongoing compliance, often quarterly. They can create early warning and negotiation rights before maturity.'),
    q(4103052, 'Career Skills', 'Covenants, Documentation, and Protection', 'Restricted payment basket',
      'A high-yield bond indenture limits dividends and equity buybacks unless capacity is available. What lender concern is this addressing?',
      'Preventing cash leakage to equity holders when creditors need repayment protection',
      [
        ['Preventing the company from paying suppliers', 'Suppliers are operating creditors, not equity holders. Restricted payments target equity distributions specifically.'],
        ['Forcing the borrower to issue common stock', 'Restricted payment baskets restrict, not require, equity-related actions.'],
        ['Guaranteeing the bond will trade above par', 'Indenture terms do not guarantee secondary market prices. Trading levels reflect market conditions.'],
      ],
      'Restricted payment covenants help preserve value inside the credit group. They limit distributions that could weaken creditor recovery prospects.'),
    q(4105119, 'Career Skills', 'Covenants, Documentation, and Protection', 'Incurrence test',
      'A bond permits additional debt only if the issuer can meet a 2.0x fixed charge coverage ratio at the time of issuance. What kind of covenant is this?',
      'An incurrence covenant tested when the company takes a specified action',
      [
        ['A maintenance covenant tested every morning', 'Maintenance covenants are quarterly or annual. This covenant only triggers on a specific action (debt issuance).'],
        ['A dividend payment by definition', 'A coverage test is a covenant, not a payment. Dividends might be subject to a separate restricted-payment test.'],
        ['A collateral appraisal requirement only', 'Collateral appraisals value assets. This test is about cash flow coverage.'],
      ],
      'Incurrence covenants restrict actions such as debt issuance or restricted payments unless tests are met. They are different from periodic maintenance tests.'),
    q(4105120, 'Career Skills', 'Covenants, Documentation, and Protection', 'Collateral package',
      'A lender is offered first-priority liens on receivables, inventory, and equipment. What does this mainly affect?',
      'The lender\'s secured claim and potential recovery if the borrower defaults',
      [
        ['The borrower\'s revenue recognition policy', 'Lien arrangements affect collateral rights, not GAAP revenue policy.'],
        ['The equity ticker symbol', 'Ticker symbols are corporate identifiers unrelated to lien priority.'],
        ['A guarantee that default can never happen', 'Collateral protects recovery in default; it does not prevent default itself.'],
      ],
      'Collateral supports recovery, not perfection. Secured lenders analyze lien priority, asset value, documentation, and downside scenarios.'),
    q(4107398, 'Career Skills', 'Covenants, Documentation, and Protection', 'EBITDA add-back cap',
      'A loan agreement caps pro forma cost-savings add-backs at 25% of EBITDA. What is the purpose?',
      'Limit how much adjusted EBITDA can rely on projected or less certain savings',
      [
        ['Force the borrower to stop saving money', 'The cap limits the add-back, not the underlying savings effort. Savings can still be pursued.'],
        ['Make all add-backs illegal', 'Add-backs within the cap are permitted. The cap is a ceiling, not a prohibition.'],
        ['Guarantee the company will hit projections', 'Caps acknowledge that projections are uncertain. They protect lenders, not borrower performance.'],
      ],
      'Add-back caps protect lenders from overly aggressive adjusted EBITDA. They keep covenant and leverage calculations more grounded.'),
    q(4107399, 'Career Skills', 'Covenants, Documentation, and Protection', 'Asset sale sweep',
      'A credit agreement requires proceeds from certain asset sales to repay debt. What lender protection is this?',
      'An asset sale sweep that keeps collateral value from leaving the credit without repayment',
      [
        ['A dividend to equity holders', 'Asset sale sweeps direct proceeds to lenders, not equity. The provision exists precisely to prevent that leakage.'],
        ['A rule that assets can never be sold', 'Sweeps permit asset sales but channel the proceeds. They are not outright prohibitions.'],
        ['A marketing fee for arrangers', 'Arranger fees are paid at closing. Asset sale sweeps are ongoing structural protections.'],
      ],
      'Asset sale covenants can preserve lender recovery by directing proceeds to reinvestment or debt repayment.'),
    q(4107409, 'Career Skills', 'Covenants, Documentation, and Protection', 'Most favored nation',
      'A loan has MFN protection on incremental debt pricing. What is it designed to do?',
      'Protect existing lenders if later pari passu debt is issued at materially higher yield',
      [
        ['Guarantee the borrower can never raise debt', 'MFN does not block additional debt; it adjusts existing pricing if new debt prices materially higher.'],
        ['Give lenders the best office snacks', 'MFN is a pricing protection, not a perk. The "favored nation" framing is contractual.'],
        ['Make all future debt junior automatically', 'Subordination of future debt is a different protection. MFN addresses pricing parity, not seniority.'],
      ],
      'MFN provisions can adjust existing loan pricing when new similar debt is issued richer. It protects against being underpriced relative to later lenders.'),
    q(4107405, 'Career Skills', 'Covenants, Documentation, and Protection', 'Portability feature',
      'A bond allows a change of control without repayment if leverage stays below a set level. What is this feature?',
      'Portability, which can allow the debt to remain outstanding after a qualifying sale',
      [
        ['A mandatory bankruptcy filing', 'Portability is the opposite — it allows the deal to continue, not trigger insolvency proceedings.'],
        ['A ban on selling the company', 'Portability accommodates sales; it does not prohibit them.'],
        ['An automatic upgrade to secured status', 'Portability is a CoC put waiver, not a structural change to seniority.'],
      ],
      'Portability affects investor protection in a sale. Creditors should understand when change-of-control puts do or do not apply.'),
    q(4107868, 'Career Skills', 'Covenants, Documentation, and Protection', 'Covenant headroom',
      'A borrower has a 5.0x leverage covenant and opens at 4.8x pro forma. What is the issue?',
      'There is very little cushion if EBITDA misses, add-backs fail, or debt increases',
      [
        ['The covenant is irrelevant because it technically passes', 'Passing on day one with 0.2x cushion is a setup for breach on day 90. Maintenance covenants are tested quarterly.'],
        ['A 0.2x cushion is always luxurious', 'A 0.2x cushion on 5.0x is 4% of headroom — barely enough for one quarter of forecast noise.'],
        ['Leverage covenants only matter after default', 'Leverage covenants are continuous obligations. Breach itself constitutes default.'],
      ],
      'Covenant headroom matters before a breach. Thin cushion can change lender risk and borrower flexibility.'),
    q(4107879, 'Career Skills', 'Covenants, Documentation, and Protection', 'EBITDA grower',
      'A credit agreement lets future cost savings be added back before they are realized. What should lenders evaluate?',
      'Caps, timing, evidence requirements, and whether add-backs overstate actual repayment capacity',
      [
        ['Credit future savings before the company has delivered them', 'Hoping savings arrive early is not lender protection. Most never fully arrive at the projected pace.'],
        ['Treat add-backs as cash in the bank', 'Add-backs are accounting estimates of future actions. Cash arrives when actions execute.'],
        ['Exclude earnout or adjustment caps from the EBITDA bridge', 'Caps are the primary protection against unbounded add-backs. Ignoring them defeats the structural protection.'],
      ],
      'Add-back language can inflate covenant capacity. Lenders should read definitions as economics, not just drafting.'),

    // Chapter 5: Distress Signals and Recovery Thinking
    q(4103055, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Recovery mindset',
      'A distressed borrower has declining EBITDA, limited cash, and secured lenders ahead of unsecured bonds. What should an unsecured bond analyst focus on?',
      'Enterprise value downside, priority of claims, collateral, liquidity runway, and likely recovery',
      [
        ['Only the original coupon rate', 'Coupon is a cash flow timing question. Recovery analysis is about principal value at restructuring.'],
        ['Whether the bond once traded at par', 'Historical trading does not predict recovery. The question is what the bond is worth now in a stressed scenario.'],
        ['The company slogan because brand value always repays debt', 'Brand value rarely services debt directly. The waterfall depends on enterprise value and claim priority.'],
      ],
      'Distressed credit analysis starts with cash runway, enterprise value, claim priority, collateral, and recovery scenarios. Coupon alone does not determine recovery.'),
    q(4105123, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Liquidity runway',
      'A distressed company has $45 million of cash and burns $9 million per month while negotiating with lenders. What is its simple cash runway?',
      '5 months',
      [
        ['3 months', '3 months would require $15M monthly burn ($45M / 3). Actual burn is $9M.'],
        ['9 months', '9 months would require $5M monthly burn. Actual is $9M.'],
        ['45 months', '45 months ignores monthly burn entirely. Runway = cash / burn = 45 / 9 = 5.'],
      ],
      'Liquidity runway equals cash divided by monthly burn. Here, 45 million / 9 million = 5 months, before any new financing or operational change.'),
    q(4105124, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Priming risk',
      'A distressed borrower seeks new super-priority financing that would rank ahead of existing lenders. What should existing creditors evaluate?',
      'Whether the new money primes their claims and how it affects collateral coverage and recovery',
      [
        ['Whether the new loan improves their priority automatically', 'New super-priority debt by definition moves above existing claims, not below. Priority gets worse for existing creditors.'],
        ['Only the headline interest rate on old debt', 'Existing rates do not change with priming. The recovery economics do.'],
        ['The borrower\'s logo redesign', 'Branding is not relevant to recovery analysis in priming negotiations.'],
      ],
      'Priming debt can change recovery economics. Creditors should analyze priority, collateral value, consent rights, liquidity need, and restructuring alternatives.'),
    q(4105125, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Exchange offer',
      'A highly levered issuer offers bondholders new longer-dated notes at a lower principal amount to avoid near-term default. What is this transaction trying to do?',
      'Reduce or extend debt obligations through a negotiated liability management transaction',
      [
        ['Increase near-term maturities on purpose', 'The exchange explicitly extends maturity. Increasing near-term obligations would worsen the problem.'],
        ['Convert every creditor into a common customer', 'Creditors remain creditors with new debt terms. The exchange is debt-for-debt, not debt-for-customer.'],
        ['Eliminate the need to analyze recovery', 'Exchange offers are part of the recovery analysis. Bondholders need to compare exchange economics to recovery in default.'],
      ],
      'Exchange offers and liability management transactions can address maturity walls or leverage. Creditors should compare economics, priority, participation risk, and alternatives.'),
    q(4107402, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Maturity wall',
      'A borrower has manageable leverage but 70% of debt matures in nine months and markets are shut. What is the main credit issue?',
      'Refinancing and liquidity risk from the near-term maturity wall',
      [
        ['Leverage is the only credit metric', 'Leverage is one input; maturity profile is independently critical. A 3x leveraged borrower can default at maturity with no refi access.'],
        ['Maturities matter only after default', 'Maturities cause default if not refinanced. They are pre-default risk, not post-default.'],
        ['Closed markets improve refinancing options', 'Closed markets eliminate refinancing options. They are the precise reason the maturity wall is dangerous.'],
      ],
      'Credit analysis must consider timing of obligations. A maturity wall can create distress even before operating performance collapses.'),
    q(4107403, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Waterfall read',
      'In a downside valuation, secured debt is covered but unsecured notes receive little value. What explains the outcome?',
      'Priority of claims and collateral coverage in the recovery waterfall',
      [
        ['Unsecured notes always recover first', 'Unsecured notes recover after secured by contractual priority. They are explicitly later in line.'],
        ['All creditors share equally regardless of documents', 'Equal sharing only applies within a class. Across classes, priority governs.'],
        ['Recovery depends only on coupon size', 'Coupon affects ongoing payments, not principal recovery at restructuring.'],
      ],
      'Recovery analysis follows claim priority, collateral, and enterprise value. Capital structure position matters.'),
    q(4107407, 'Career Skills', 'Distress Signals and Recovery Thinking', 'DIP financing purpose',
      'A company in chapter 11 seeks debtor-in-possession financing. What is the financing meant to provide?',
      'Liquidity to operate during the case, often with court-approved priority and protections',
      [
        ['A dividend for prepetition equity', 'DIP financing protects the estate, not equity. Equity is typically wiped or last in line.'],
        ['A way to erase all vendors instantly', 'DIPs let the company pay critical vendors to keep operating, not erase obligations.'],
        ['A replacement for a business plan', 'DIPs require a budget and plan as conditions. They reinforce, not replace, business planning.'],
      ],
      'DIP financing can keep a debtor operating during restructuring. Existing creditors analyze priority, budget, and impact on recovery.'),
    q(4107872, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Liquidity leak',
      'A distressed company has cash today but is burning it quickly while vendors tighten terms. What should the advisor build?',
      'A weekly liquidity forecast showing receipts, disbursements, borrowing availability, and covenant pressure',
      [
        ['An annual EBITDA forecast only', 'Annual EBITDA misses the weekly cash crisis that drives restructuring decisions.'],
        ['A mood board for vendor confidence', 'Vendor sentiment matters operationally, but the analytical tool needed is a cash forecast.'],
        ['A budget that assumes every payable waits kindly', 'Vendors tightening terms is the opposite of waiting kindly. The forecast must model actual behavior.'],
      ],
      'Restructuring work starts with liquidity. Weekly cash visibility drives options and urgency.'),
    q(4107411, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Make-whole dispute',
      'A distressed issuer may refinance notes before maturity, but the make-whole premium is disputed. What should creditors analyze?',
      'Document language, legal priority, economics, and expected recovery under each outcome',
      [
        ['Only the face amount of the notes', 'Face amount is the starting point; the make-whole can add or remove tens of millions.'],
        ['Treat contract disputes as legal noise with no valuation effect', 'Contract disputes routinely change recoveries by 10-30%. Document language is core to the analysis.'],
        ['Let the finance model override legal advice on enforceability', 'Distressed outcomes turn on legal interpretation as much as enterprise value. Both matter.'],
      ],
      'Distressed outcomes often turn on documents as well as enterprise value. Legal economics should be reflected in recovery analysis.'),
    q(4107877, 'Career Skills', 'Distress Signals and Recovery Thinking', 'Out-of-court option',
      'A company can amend maturities with lender consent or file for court protection if talks fail. What should advisors compare?',
      'Cost, timing, creditor consent, business disruption, liquidity, and recovery outcomes',
      [
        ['Favor the restructuring path that sounds simpler', 'Out-of-court is shorter to say but can be longer to execute. The actual tradeoffs are economic.'],
        ['Treat court-supervised restructuring as automatically cleaner', 'Court is rarely "cleaner" — it adds public scrutiny, judicial process, and DIP financing requirements.'],
        ['Avoid comparing options because distress is awkward', 'Avoiding comparison removes the basis for decision. The fiduciary duty is to compare and choose.'],
      ],
      'Restructuring strategy weighs practical tradeoffs. Out-of-court solutions can preserve value when consent is achievable.'),
    // Chapter expansions (per-file banks): Ch1–5 + Capstone (Apex Holdco LBO).
    ...clfCh1Questions,
    ...clfCh2Questions,
    ...clfCh3Questions,
    ...clfCh4Questions,
    ...clfCh5Questions,
    ...clfCapstoneQuestions,
  ], CLF_QUESTION_DIFFICULTY), [{ subTopics: CLF_SUB_TOPICS, mentorHints: CLF_MENTOR_HINTS, correctShortened: CLF_CORRECT_SHORTENED, source: 'clf' }]),

  // ---------------------------------------------------------------------------
  // BANK COMPLIANCE / AML ROADMAP
  // Syllabus chapters:
  //  1. Bank Compliance Foundations
  //  2. KYC and Customer Risk
  //  3. Sanctions and Screening
  //  4. Transaction Monitoring and Alerts
  //  5. Investigations, SARs, and Quality Control
  // Note: this track also receives anchor content from
  // careerAgentGeneratedRoadmapGovernment.ts. The Finance triplet contributed
  // the questions consolidated here; bank-compliance authoring lives elsewhere too.
  // ---------------------------------------------------------------------------
  bankComplianceAmlRoadmap: runPolish(tagDifficulty([
    // Chapter 1: Bank Compliance Foundations
    q(4200080, 'Career Skills', 'Bank Compliance Foundations', 'Three lines of defense',
      'In a bank\'s three lines of defense model, which function owns front-line transaction monitoring decisions?',
      'The first line — business units and front-office operations that execute the activity and apply primary controls',
      [
        ['Internal audit, because they are the most independent', 'Internal audit is the third line and reviews the system; they do not make day-to-day monitoring decisions.'],
        ['Compliance, because they own the AML program', 'Compliance is the second line — they design the program and oversee, but front-line monitoring decisions sit with the first line.'],
        ['The regulator, because they have ultimate authority', 'Regulators examine and enforce, but they do not make individual transaction decisions for the bank.'],
      ],
      'The three lines model assigns ownership: 1st = operations, 2nd = compliance/risk oversight, 3rd = internal audit. Clarity on roles is the foundation of a defensible program.'),
    q(4200081, 'Career Skills', 'Bank Compliance Foundations', 'BSA program elements',
      'A US bank\'s BSA/AML program is required to include which core elements?',
      'Internal controls, designated BSA officer, employee training, and independent testing',
      [
        ['Only customer identification verification at account opening', 'CIP is one element. The BSA program also requires controls, training, testing, and a designated officer.'],
        ['Quarterly profit reviews and product launch sign-offs', 'Those are governance activities but not the four BSA program pillars.'],
        ['A single risk score for every customer with no further review', 'Risk rating is part of customer due diligence, not the program structure. The four pillars define the program.'],
      ],
      'The BSA "four pillars" (now five with the beneficial ownership rule) define the minimum AML program structure for US banks. Examiners test all of them.'),
    q(4200082, 'Career Skills', 'Bank Compliance Foundations', 'Issue management',
      'An audit finding identifies that 12% of high-risk customer files lack source-of-wealth documentation. What is the right issue-management response?',
      'Assign an owner, root-cause analysis, remediation plan with milestones, and tracking through closure with QA validation',
      [
        ['Close the finding by adding a footnote to the policy', 'Policy footnotes do not fix the operational gap. The 12% of files still lack documentation.'],
        ['Hire more staff and stop tracking the finding', 'Staffing may help, but tracking is what proves the remediation worked. Closing without validation is reopening risk.'],
        ['Argue with the auditor about the sample size', 'Disputing the finding without addressing it leaves the underlying control gap exposed to the next exam.'],
      ],
      'Defensible issue management requires owner, plan, milestones, and independent validation. Audit findings closed without remediation reopen as exam findings.'),

    // Chapter 2: KYC and Customer Risk
    q(4107412, 'Career Skills', 'KYC and Customer Risk', 'Address mismatch',
      'A new business customer provides a formation address, operating address, and mailing address that do not match. What should the analyst do?',
      'Clarify and document the addresses, purpose, and any risk implications before approval',
      [
        ['Trust the most polished address without reconciling entity records', 'Address selection without documentation leaves an unexplained discrepancy in the file for the next reviewer.'],
        ['Reject every customer with more than one address', 'Multi-address structures are normal for many legitimate businesses. The KYC requirement is documentation, not exclusion.'],
        ['Treat address mismatches as irrelevant to customer identity', 'Revenue motivation does not override KYC requirements. CIP rules apply to every account.'],
      ],
      'KYC work verifies identity and risk context. Mismatched information may be normal, but it needs explanation and evidence.'),
    q(4107413, 'Career Skills', 'KYC and Customer Risk', 'Beneficial owner fog',
      'A customer uses three holding companies and resists identifying the people who ultimately own it. What is the key compliance concern?',
      'The bank may not understand beneficial ownership and control risk',
      [
        ['Complex ownership proves the customer is high quality', 'Complex structures with resistance are textbook risk indicators, not quality markers.'],
        ['Ownership is irrelevant once an account is profitable', 'Beneficial ownership is a regulatory requirement (FinCEN CDD rule). Profitability does not waive it.'],
        ['Only the first company name matters', 'Beneficial ownership must reach the natural persons behind the entities. Stopping at the first holdco misses the entire requirement.'],
      ],
      'Beneficial ownership helps banks know who they are serving. Opaque structures require careful review and escalation where appropriate.'),
    q(4107424, 'Career Skills', 'KYC and Customer Risk', 'PEP onboarding',
      'A prospective customer is a politically exposed person with legitimate wealth but complex offshore entities. What is the right posture?',
      'Apply enhanced due diligence proportional to PEP, source-of-wealth, and ownership risks',
      [
        ['Automatically reject every PEP without review', 'Banking PEPs is permitted with EDD. Blanket rejection forgoes legitimate business and conflicts with the proportionate-risk approach.'],
        ['Onboard immediately because wealth is legitimate', 'Legitimate wealth still requires documented source-of-wealth and EDD for PEPs. Speed cannot override the controls.'],
        ['Treat a reassuring relationship as enough to clear offshore-entity risk', 'Charm is not a risk control. Offshore entities require beneficial-ownership and source-of-funds work regardless.'],
      ],
      'Higher-risk customers may be banked with appropriate controls. Enhanced diligence helps understand source of wealth and corruption risk.'),
    q(4107882, 'Career Skills', 'KYC and Customer Risk', 'Source of wealth gap',
      'A new private banking client has complex offshore wealth and vague explanations for recent transfers. What should KYC require?',
      'Documented source of wealth, source of funds, ownership, purpose, and escalation if gaps remain',
      [
        ['Accept the account because the balance is large', 'Large balances with vague explanations are precisely the AML risk profile that requires more diligence, not less.'],
        ['Ask fewer questions to preserve the relationship', 'Skipping questions is how banks end up in enforcement actions. Relationship preservation cannot override AML controls.'],
        ['Accept an offshore structure without tracing source of wealth and control', 'Offshore structures require explicit documentation of why they exist and how the wealth was generated.'],
      ],
      'Higher-risk onboarding needs evidence. KYC should understand who owns the money and how it was generated.'),
    q(4107894, 'Career Skills', 'KYC and Customer Risk', 'Nominee director clue',
      'A corporate customer lists nominee directors and cannot clearly explain who controls decisions. What should KYC focus on?',
      'Identifying true control persons, beneficial owners, business purpose, and escalation needs',
      [
        ['Accept nominees as the final answer', 'Nominees are by definition placeholders. The KYC requirement is the natural person behind the nominee.'],
        ['Treat listed directors as proof of true control', 'Control is a separate concept from formal directorship. AML rules require identifying actual control, not titular roles.'],
        ['Ask only for a nicer org chart', 'An org chart shows the structure; KYC needs the human owners and controllers.'],
      ],
      'KYC should understand control, not just formal names. Nominee structures may require enhanced review.'),
    q(4107883, 'Career Skills', 'KYC and Customer Risk', 'Business purpose change',
      'A customer onboarded as a local wholesaler now says it will process payments for unrelated merchants. What should compliance do?',
      'Refresh the customer profile, risk rating, expected activity, and required approvals',
      [
        ['Treat the old profile as good forever', 'Customer profiles capture activity at onboarding. Material activity changes invalidate the profile.'],
        ['Approve because more activity means more fees', 'Fee motivation cannot override risk reassessment. Processing payments for others triggers MSB and BSA considerations.'],
        ['Accept the customer explanation without reviewing the changed business purpose', 'Customer confidence is not evidence. New business purpose requires fresh underwriting.'],
      ],
      'Customer risk changes when business purpose changes. KYC profiles should stay aligned with actual activity.'),

    // Chapter 3: Sanctions and Screening
    q(4107416, 'Career Skills', 'Sanctions and Screening', 'Name match triage',
      'A customer name partially matches a sanctions list, but birth date and location differ. What should the analyst do?',
      'Resolve the potential match using documented identifiers and escalation rules',
      [
        ['Treat partial name matches as permanent false positives', 'Some partial matches are real hits with intentionally misrepresented identifiers. Each needs investigation.'],
        ['Treat a partial name match as a confirmed sanctions hit', 'Freezing every partial match disrupts legitimate customers and floods compliance with reversals.'],
        ['Ask the customer whether sanctions are inconvenient', 'Sanctions are a regulatory matter, not a customer-preference question. The bank must apply the law.'],
      ],
      'Screening requires careful false-positive resolution. Analysts should compare identifiers and follow firm procedure.'),
    q(4107417, 'Career Skills', 'Sanctions and Screening', 'Vessel clue',
      'A trade finance file lists a vessel recently flagged in sanctions news. What should compliance review?',
      'Vessel identity, ownership, routing, cargo, counterparties, and applicable sanctions exposure',
      [
        ['Only the customer invoice total', 'Invoice totals do not capture sanctions exposure routed through the vessel. The chain is the analysis.'],
        ['Whether the vessel name sounds friendly', 'Vessel names are not the risk signal. Identity, flag, ownership, and recent activity are.'],
        ['Treat vessel and shipping details as outside financial-crime risk', 'Trade finance puts the bank squarely in the shipping chain. OFAC violations can result from vessel-based exposure.'],
      ],
      'Sanctions risk can appear through vessels, ports, goods, ownership, and counterparties. Trade files need full-context review.'),
    q(4107426, 'Career Skills', 'Sanctions and Screening', 'Country exposure',
      'A payment route includes an intermediary bank in a high-risk jurisdiction not mentioned by the customer. What should sanctions compliance check?',
      'The full payment chain, jurisdiction exposure, parties, and whether enhanced review or blocking is required',
      [
        ['Review only the originator name', 'Sanctions risk lives anywhere in the chain — intermediaries can sit on sanctioned jurisdictions or entities.'],
        ['Treat intermediary-bank geography as irrelevant to country exposure', 'Intermediary banks are part of the payment. Their jurisdiction and ownership affect the bank\'s sanctions exposure.'],
        ['Approve it because the final beneficiary is familiar', 'Familiar beneficiaries can still receive funds through sanctioned intermediaries. Full-chain review is required.'],
      ],
      'Sanctions and AML risk can sit anywhere in the payment chain. Intermediaries and routing details matter.'),
    q(4107886, 'Career Skills', 'Sanctions and Screening', 'Ownership sanctions link',
      'A payment beneficiary is not listed, but public records show majority ownership by a sanctioned person. What should screening consider?',
      'Sanctions may apply through ownership or control, requiring escalation under policy',
      [
        ['Only exact listed names matter', 'OFAC\'s 50 Percent Rule extends sanctions to entities owned 50%+ by sanctioned persons, even if the entity is not listed.'],
        ['Ownership is irrelevant if the invoice is neat', 'Invoice quality has no bearing on ownership-based sanctions exposure.'],
        ['Approve quickly because the beneficiary sounds separate', 'Beneficial ownership through sanctioned persons creates real sanctions liability, regardless of how the entity name sounds.'],
      ],
      'Sanctions risk can arise through ownership and control. Screening should look beyond the immediate name.'),
    q(4107887, 'Career Skills', 'Sanctions and Screening', 'Goods description',
      'A trade payment describes goods only as "equipment" and involves a restricted jurisdiction. What should compliance request?',
      'More detail on goods, parties, routing, end use, and sanctions or export-control exposure',
      [
        ['Approve because equipment is a calming word', 'Vague goods descriptions are a common red flag for dual-use or sanctioned goods. Calming language is not evidence.'],
        ['Ask the customer to shorten descriptions further', 'Shorter descriptions worsen the problem. Compliance needs more detail, not less.'],
        ['Review only the dollar amount', 'Dollar amount does not reveal what is being shipped. Sanctions and export-control issues depend on the goods.'],
      ],
      'Trade sanctions review depends on context. Vague goods descriptions can hide restricted activity.'),
    q(4107896, 'Career Skills', 'Sanctions and Screening', 'False positive evidence',
      'An analyst clears a sanctions hit but documents only "not our customer." What is missing?',
      'Specific identifiers and rationale showing why the hit is a false positive under procedure',
      [
        ['A shorter note because sanctions teams love mystery', 'Brevity is fine; lack of identifiers is not. The note must show which identifiers proved the false positive.'],
        ['No documentation if the analyst feels sure', 'Documentation is required for examiner and audit review. Analyst confidence is not a substitute for evidence.'],
        ['A joke about common names', 'Audit trails require evidence. Humor does not support repeat review or examiner defense.'],
      ],
      'Sanctions decisions need defensible evidence. Clear false-positive documentation supports audit and repeat review.'),

    // Chapter 4: Transaction Monitoring and Alerts
    q(4107414, 'Career Skills', 'Transaction Monitoring and Alerts', 'Round-dollar pattern',
      'A small importer suddenly begins sending repeated round-dollar wires just below an internal review threshold. What should monitoring consider?',
      'Whether the pattern suggests structuring or activity inconsistent with the customer profile',
      [
        ['That round numbers are always harmless', 'Repeated round-dollar amounts just under thresholds are textbook structuring patterns. Harmlessness is not the default reading.'],
        ['That thresholds make nearby activity automatically safe', 'Thresholds are reporting triggers; deliberate avoidance of them is itself a SAR indicator under 31 USC 5324.'],
        ['That importers never send wires', 'Importers routinely send wires. The issue is the pattern, not whether wires are normal.'],
      ],
      'Transaction monitoring looks for patterns in context. Activity near thresholds can require review when it appears designed to avoid scrutiny.'),
    q(4107415, 'Career Skills', 'Transaction Monitoring and Alerts', 'Dormant account wakes',
      'A dormant personal account receives several international deposits and quickly wires funds onward. What is the best next step?',
      'Review source, purpose, customer profile, and whether escalation is required',
      [
        ['Celebrate reactivation and close the alert', 'Dormant accounts that suddenly receive international flows and forward them are a classic layering pattern, not a reason to celebrate.'],
        ['Treat every international wire as suspicious without transactional context', 'Many international flows are legitimate. Review is required, not preemptive judgment.'],
        ['Ask the customer to use less noticeable amounts', 'Coaching customers to evade monitoring is a serious compliance violation and likely tipping-off.'],
      ],
      'Unusual account activity should be investigated against expected behavior. The goal is fact-based review, not panic or passivity.'),
    q(4107425, 'Career Skills', 'Transaction Monitoring and Alerts', 'Crypto exchange flow',
      'A customer previously used the account for payroll but now sends frequent transfers to crypto exchanges. What should the analyst assess?',
      'Whether the new activity fits the customer profile, stated purpose, risk rating, and source of funds',
      [
        ['Treat crypto activity as inherently criminal without reviewing counterparties', 'Crypto is widely used legitimately. The diligence is fit to profile, not blanket suspicion.'],
        ['Treat crypto exposure as outside the bank\'s AML perimeter', 'Crypto on-ramps and off-ramps run through banks. They are inside the AML perimeter.'],
        ['Tell the customer to use rounder amounts', 'Suggesting structuring techniques to a customer is a textbook tipping-off violation.'],
      ],
      'Monitoring should evaluate changed behavior in context. Crypto-related flows can be legitimate, risky, or suspicious depending on facts.'),
    q(4107884, 'Career Skills', 'Transaction Monitoring and Alerts', 'Layering pattern',
      'An account receives funds from many unrelated parties, moves them through several internal accounts, then wires them offshore. What should the analyst assess?',
      'Whether the activity suggests layering, unusual purpose, or movement inconsistent with the customer profile',
      [
        ['Whether internal transfers make activity automatically safe', 'Internal transfers are often the layering step that disguises source. They are not a safety signal.'],
        ['Whether offshore wires are too common to review', 'Offshore wires that follow layering patterns are the textbook AML pattern. Commonness does not mean innocence.'],
        ['Whether many counterparties prove popularity', 'Many unrelated counterparties feeding one account is a layering indicator, not a popularity contest.'],
      ],
      'Monitoring looks for patterns that obscure source or purpose. Movement through accounts can be relevant context.'),
    q(4107885, 'Career Skills', 'Transaction Monitoring and Alerts', 'Cash-intensive mismatch',
      'A consulting firm with no retail storefront starts depositing large amounts of cash weekly. What is the key issue?',
      'The cash activity may be inconsistent with the stated business model and should be investigated',
      [
        ['Consultants often carry briefcases of cash for ambiance', 'Consultants are typically paid by wire or check. Cash flows in a non-cash business are a classic AML indicator.'],
        ['Cash deposits are always harmless under the limit', 'Currency Transaction Reports are required at $10K; activity below that, especially repeatedly, is the structuring pattern that triggers SARs.'],
        ['Business models never matter after onboarding', 'Business models are the baseline against which activity is judged. They matter at every monitoring decision.'],
      ],
      'Expected activity is central to monitoring. Cash-intensive behavior should fit the customer profile or be explained.'),
    q(4107895, 'Career Skills', 'Transaction Monitoring and Alerts', 'Rapid pass-through',
      'Funds arrive from a high-risk jurisdiction and leave the account within hours with little account balance retained. What should monitoring consider?',
      'Whether rapid pass-through activity lacks economic purpose and fits suspicious movement patterns',
      [
        ['Whether speed proves operational excellence', 'Speed of fund movement combined with no retained balance is a pass-through pattern often associated with laundering layering.'],
        ['Whether low balances mean low risk', 'Low retained balances are a feature of pass-through accounts, which are higher risk, not lower.'],
        ['Whether high-risk jurisdictions are always irrelevant', 'High-risk jurisdiction sources are explicitly red-flag indicators in BSA examination guidance.'],
      ],
      'Rapid movement can be legitimate or suspicious depending on context. Analysts should test purpose, profile, and counterparties.'),

    // Chapter 5: Investigations, SARs, and Quality Control
    q(4107418, 'Career Skills', 'Investigations, SARs, and Quality Control', 'Narrative discipline',
      'An investigator closes an alert with "customer seems fine" after reviewing several transactions. What is missing?',
      'A clear narrative explaining facts reviewed, rationale, and why escalation was or was not needed',
      [
        ['A shorter note with fewer facts', 'Shorter notes worsen the audit trail. The narrative must show the evidence behind the disposition.'],
        ['A personal opinion about the customer', 'Personal opinions are not evidence. AML decisions require factual support.'],
        ['No notes because the alert closed', 'Closing without notes leaves no audit trail. Examiners review closed alerts as carefully as escalated ones.'],
      ],
      'AML decisions need defensible documentation. Good narratives show the evidence and reasoning behind closure or escalation.'),
    q(4107419, 'Career Skills', 'Investigations, SARs, and Quality Control', 'Escalation threshold',
      'An alert review finds no single smoking gun, but multiple facts do not fit the customer profile. What should the investigator do?',
      'Escalate when the total pattern creates reasonable suspicion under policy',
      [
        ['Close it because one perfect fact is missing', 'SAR standards do not require a smoking gun. Reasonable suspicion based on the totality of facts is enough.'],
        ['Wait until the customer explains everything voluntarily', 'Waiting for voluntary explanation can take months. AML timelines do not permit indefinite delay.'],
        ['Delete the weaker facts from the file', 'Destroying records is obstruction. All facts reviewed must be preserved.'],
      ],
      'AML investigations often rely on patterns. Escalation can be appropriate when the combined facts are suspicious.'),
    q(4107888, 'Career Skills', 'Investigations, SARs, and Quality Control', 'Negative news triage',
      'An alert links a customer to adverse media, but the article involves a person with the same common name. What should the investigator do?',
      'Use identifiers and reliable sources to determine whether it is a true match before deciding risk impact',
      [
        ['Treat every common-name article as proof', 'Common-name false positives are frequent in negative news screening. Verification with identifiers is required.'],
        ['Dismiss adverse media because common names create false positives', 'Adverse media is a legitimate AML input. The discipline is verification, not dismissal.'],
        ['Ask the customer to rate the article', 'Customer-rated reliability is not a verification method. Identifiers and reliable sources are.'],
      ],
      'Alert investigation requires careful matching. False positives and real risk both need documented reasoning.'),
    q(4107889, 'Career Skills', 'Investigations, SARs, and Quality Control', 'Customer explanation',
      'A customer explains unusual wires as family support, but amounts and counterparties do not match the story. What is the next step?',
      'Corroborate the explanation with transaction facts, documentation, profile, and escalation standards',
      [
        ['Accept any explanation if it is friendly', 'Friendly explanations do not validate themselves. The facts must support the story.'],
        ['Close the alert because family is relatable', 'Relatable stories that conflict with the facts are exactly when AML training applies. The conflict is the signal.'],
        ['Ask the customer which facts to ignore', 'Customers cannot direct the investigation. The bank must evaluate all facts.'],
      ],
      'Customer explanations are evidence to test, not magic erasers. Investigators should compare the story with the activity.'),
    q(4107420, 'Career Skills', 'Investigations, SARs, and Quality Control', 'SAR clock',
      'An investigator determines activity is suspicious and policy requires SAR consideration. What matters operationally?',
      'Follow reporting timelines, approvals, confidentiality, and documentation requirements',
      [
        ['Tell the customer a SAR may be filed', 'Notifying the customer is a tipping-off violation, a separate federal crime under 31 USC 5318(g)(2).'],
        ['Wait until quarter-end for convenience', 'SAR filing deadlines are 30 days from initial detection (60 with extension). Quarter-end is not the trigger.'],
        ['File based on suspicion without documenting the supporting narrative', 'SAR narratives require detailed factual support. Skipping documentation invalidates the filing.'],
      ],
      'SAR processes have timing and confidentiality requirements. Documentation and escalation keep the bank compliant.'),
    q(4107421, 'Career Skills', 'Investigations, SARs, and Quality Control', 'Tipping-off risk',
      'A relationship manager wants to warn a customer that compliance is reviewing their wires. What should compliance advise?',
      'Avoid tipping off and route customer communications through approved procedures',
      [
        ['Explain every alert detail to preserve rapport', 'Detailed alert disclosure is a textbook tipping-off violation, a federal crime.'],
        ['Ask the customer to rewrite old wire memos', 'Asking the customer to alter past records is obstruction and tipping-off combined.'],
        ['Post the alert status in the client portal', 'Customer-facing disclosure of monitoring activity violates SAR confidentiality.'],
      ],
      'AML confidentiality matters. Customer contact during investigations should be controlled to avoid tipping-off risk.'),
    q(4107890, 'Career Skills', 'Investigations, SARs, and Quality Control', 'No tipping script',
      'A relationship manager asks what to tell a customer whose account activity led to a SAR review. What should compliance provide?',
      'Approved, limited language that avoids revealing SAR consideration or investigation details',
      [
        ['Tell the customer exactly what triggered the review', 'Revealing triggers is tipping-off. The RM needs scripted, generic language.'],
        ['Say a SAR is coming unless they explain quickly', 'Threatening SAR filing as a negotiating tactic is multiple violations at once.'],
        ['Forward internal investigation notes', 'Internal investigation notes are confidential. Forwarding them to the customer is a serious breach.'],
      ],
      'SAR confidentiality is strict. Customer communications should be controlled and carefully worded.'),
    q(4107891, 'Career Skills', 'Investigations, SARs, and Quality Control', 'Continuing activity',
      'After a SAR is filed, similar suspicious activity continues for several months. What should the team track?',
      'Continuing activity reviews, supplemental filings if required, monitoring, and relationship decisions',
      [
        ['Treat the first SAR as covering all future related activity', 'SAR guidance requires continuing-activity reports at defined intervals (typically every 90 days). The first SAR is a starting point.'],
        ['Stop monitoring because paperwork is done', 'Filing a SAR does not pause the monitoring obligation. Continuing activity requires continuing review.'],
        ['Tell the customer to pause until next quarter', 'Instructing the customer to pause is tipping-off and operational coordination with potentially suspicious activity.'],
      ],
      'SAR work may continue after the first filing. Ongoing suspicious activity needs monitoring and possible follow-up reporting.'),
    q(4107892, 'Career Skills', 'Investigations, SARs, and Quality Control', 'Quality assurance trend',
      'QA finds several investigators closing alerts without documenting source-of-funds analysis. What should management do?',
      'Identify root cause, retrain or coach, update procedures if needed, and monitor remediation',
      [
        ['Send one stern email and call it governance', 'Emails do not fix systemic gaps. Root cause and structured remediation are required.'],
        ['Treat closed alerts as proof the QA trend is harmless', 'Closed alerts without documentation are exactly the QA finding. The closure itself is not the test.'],
        ['Remove source-of-funds from every checklist', 'Removing the requirement to fix the documentation gap is removing the control, not fixing it.'],
      ],
      'Governance responds to patterns, not just individual misses. QA findings should lead to durable control improvements.'),
    // Chapter expansions (per-file banks): Ch1–5 + Capstone (First Heritage Bank).
    ...bcCh1Questions,
    ...bcCh2Questions,
    ...bcCh3Questions,
    ...bcCh4Questions,
    ...bcCh5Questions,
    ...bcCapstoneQuestions,
  ], BC_QUESTION_DIFFICULTY), [{ subTopics: BC_SUB_TOPICS, mentorHints: BC_MENTOR_HINTS, correctShortened: BC_CORRECT_SHORTENED, source: 'bc' }]),
}
