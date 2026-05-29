import { makeSimpleQuestion } from './base'
import type { Question, Topic } from './types'

// PRIVATE EQUITY — Chapter 1: PE Model and Investment Criteria
// ----------------------------------------------------------------------------
// 47 questions (IDs 4390000–4390046) extending the existing trio in
// careerAgentGeneratedRoadmapFinance.ts (4200040, 4200041, 4200042 — platform
// vs add-on, PE vs growth equity, hold period economics). The existing three
// stay; these forty-seven layer on the broader Ch.1 surface area an associate
// is expected to internalize before touching an LBO model.
//
// Scope (per spec):
//   - PE business model: 2-and-20, 8% hurdle, waterfall, GP/LP
//   - Fund lifecycle: J-curve, investment + harvest periods
//   - Fund metrics: MOIC, DPI, TVPI, IRR (gross vs net)
//   - Return drivers: leverage ~30–40%, multiple expansion ~30%, EBITDA growth
//   - Financial criteria: $30–300M EBITDA, recurring rev, GM >30%, FCF conv >60%
//   - Strategic criteria: niche leadership, pricing power, defensible moat
//   - Sourcing: proprietary, auction, club deals, take-privates
//   - Deal types: control LBO, growth equity, secondaries, GP-led continuation
//   - Holding period (4–7y typical)
//   - PE vs strategic acquirer
//   - Vintage year impact (2008–2009, 2021–2022)
//   - Top quartile vs median (20% vs 10–12% net IRR)
//   - Fund size effects
//   - PME (Public Market Equivalent)
//   - Co-investments
//   - GP economics (carry vs mgmt fee)
//   - LP fundraising pitch
//   - Common misconceptions
//
// US-context. Delaware LP structures. ILPA reporting standards. Each
// wrong-answer rationale is bespoke; the lesson on each question is the
// integrative takeaway. No strawman distractors — every wrong answer is one
// the typical associate would actually pick.
// ----------------------------------------------------------------------------

const SOURCE = 'Floe PE Ch1 canonical bank'

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

const CHAPTER = 'PE Model and Investment Criteria'

// Difficulty distribution: 14 at 3 (~30%), 24 at 4 (~51%), 9 at 5 (~19%).
export const PE_CH1_DIFFICULTY: Record<number, 1 | 2 | 3 | 4 | 5> = {
  // Business model + GP/LP economics (4390000–4390007)
  4390000: 3, // 2-and-20 mechanics
  4390001: 3, // 8% hurdle / preferred return
  4390002: 4, // European vs American waterfall
  4390003: 4, // GP catch-up tier
  4390004: 3, // GP commit (typical 1–5%)
  4390005: 4, // Management fee offset (transaction/monitoring)
  4390006: 4, // Carry recipients — who gets paid
  4390007: 5, // Why carry > mgmt fee in GP NPV

  // Fund lifecycle (4390008–4390012)
  4390008: 3, // J-curve mechanics
  4390009: 3, // Investment period (~5y)
  4390010: 3, // Harvest period
  4390011: 4, // Fund term + extensions
  4390012: 4, // Recycling provisions

  // Fund metrics (4390013–4390019)
  4390013: 3, // MOIC definition
  4390014: 3, // DPI vs RVPI
  4390015: 3, // TVPI = DPI + RVPI
  4390016: 4, // Gross vs net IRR (fee drag)
  4390017: 4, // IRR vs MOIC tradeoff
  4390018: 5, // PME (Public Market Equivalent)
  4390019: 4, // Top quartile vs median net IRR

  // Return drivers (4390020–4390023)
  4390020: 3, // Three buckets — leverage / multiple / EBITDA
  4390021: 4, // Typical attribution mix
  4390022: 4, // Multiple expansion realism
  4390023: 5, // Decomposing returns on a sample exit

  // Investment criteria — financial (4390024–4390028)
  4390024: 3, // EBITDA size band ($30–300M)
  4390025: 4, // Recurring revenue importance
  4390026: 4, // Gross margin floor (>30%)
  4390027: 4, // FCF conversion (>60%)
  4390028: 4, // CapEx intensity screen

  // Investment criteria — strategic (4390029–4390032)
  4390029: 3, // Niche leadership thesis
  4390030: 4, // Pricing power test
  4390031: 4, // Defensible moat at mid-market scale
  4390032: 5, // Strategic screen failure mode

  // Sourcing (4390033–4390035)
  4390033: 3, // Proprietary vs auction
  4390034: 4, // Club deals
  4390035: 4, // Take-privates

  // Deal types (4390036–4390038)
  4390036: 3, // Control LBO definition
  4390037: 4, // GP-led continuation vehicles
  4390038: 5, // Secondaries (LP-led)

  // Cross-cutting (4390039–4390046)
  4390039: 4, // PE vs strategic acquirer
  4390040: 5, // Vintage year impact
  4390041: 4, // Fund size effects
  4390042: 4, // Co-investments
  4390043: 4, // LP fundraising pitch
  4390044: 5, // Common misconception — leverage = returns
  4390045: 5, // ILPA reporting expectations
  4390046: 5, // Delaware LP structure rationale
}

export const peCh1Questions: Question[] = [
  // ---------------------------------------------------------------------------
  // BUSINESS MODEL + GP/LP ECONOMICS (4390000–4390007)
  // ---------------------------------------------------------------------------
  q(4390000, 'Career Skills', CHAPTER, '2-and-20 mechanics',
    'A $2B Delaware LP buyout fund charges "2 and 20" with an 8% hurdle. On a single year during the investment period, what does the "2" actually generate, and on what base?',
    'Roughly $40M of management fees, charged on committed capital during the investment period — not on invested capital or NAV',
    [
      ['$40M, charged on the fund\'s current NAV', 'NAV-based management fees are the post-investment-period convention, not the investment-period default. During the investment period the standard base is committed capital, which gives the GP a stable budget to underwrite from.'],
      ['$40M, charged on invested capital only', 'Charging on invested capital during the investment period would punish the GP for pacing deals carefully. The market convention is committed capital up-front, with a step-down to invested or NAV after the investment period closes.'],
      ['$40M, but only on the LPs\' portion of commitments — the GP commit is excluded', 'The fee base is the full fund commitment. GP commit is usually fee-free as a matter of LP-friendly term sheets, but the headline 2% is quoted on total commitments and applied accordingly.'],
    ],
    'The 2% management fee is calculated on committed capital during the investment period and steps down to invested capital or NAV afterward. The base matters: associates who quote fee economics on NAV mis-size the GP\'s operating budget and misread the incentive shape.'),

  q(4390001, 'Career Skills', CHAPTER, '8% hurdle / preferred return',
    'An LP asks what the "8% preferred return" in your fund\'s LPA actually entitles them to. Which framing is correct?',
    'LPs receive their contributed capital back plus an 8% compounded annual return before the GP earns any carried interest on profits',
    [
      ['LPs are guaranteed an 8% annual return regardless of fund performance', 'A preferred return is not a guarantee — it is a priority. If the fund underperforms, LPs do not get 8%; they get whatever the fund earned. The 8% only determines the order of distributions when there are profits.'],
      ['The GP must hit 8% IRR on every deal before earning carry on that deal', 'The hurdle is measured at the fund level (or sometimes the realized-portfolio level), not deal-by-deal. Deal-level hurdles would change the entire incentive shape and are not the buyout-market standard.'],
      ['LPs receive 8% on committed capital, including capital not yet called', 'The preferred return accrues on contributed (drawn) capital, not committed capital. Charging the hurdle on uncalled commitments would put the GP in an impossible position before any deals are even funded.'],
    ],
    'The 8% hurdle is a priority distribution, not a guarantee. LPs receive their drawn capital plus 8% compounded before the GP touches profit; if the fund underperforms, the hurdle is moot. Associates who describe it as a guaranteed return mis-state the most basic piece of fund economics.'),

  q(4390002, 'Career Skills', CHAPTER, 'European vs American waterfall',
    'A US-based mid-market sponsor and a European-style fund both promise "8 and 20 with full catch-up." What is the practical difference for the GP?',
    'European-style waterfalls return all LP capital and the hurdle across the entire fund before any carry is paid; American-style waterfalls can pay carry on a deal-by-deal basis subject to clawback',
    [
      ['European waterfalls pay carry faster than American waterfalls', 'The opposite is true. American (deal-by-deal) waterfalls let the GP earn carry on early winners before the rest of the fund is realized; European (whole-fund) waterfalls delay carry until LPs are made whole across the whole fund.'],
      ['American waterfalls eliminate the need for a clawback because carry is paid per deal', 'American waterfalls require a clawback precisely because deal-by-deal carry can over-distribute to the GP if later deals underperform. The clawback is the structural counterweight.'],
      ['European waterfalls are illegal in Delaware LPs', 'Delaware LP statutes accommodate both waterfall conventions. The choice is a commercial term in the LPA, not a legal restriction.'],
    ],
    'The waterfall choice determines when the GP gets paid. European (whole-fund) is LP-friendly and delays carry; American (deal-by-deal) accelerates carry but requires a clawback. Buyout funds in the US increasingly use European to win LP allocations, especially from institutional LPs that read ILPA guidance closely.'),

  q(4390003, 'Career Skills', CHAPTER, 'GP catch-up tier',
    'Your LPA specifies an 8% preferred return followed by a 100% GP catch-up to 20%, then 80/20. What does the catch-up tier accomplish economically?',
    'Once LPs are made whole on their hurdle, 100% of the next dollars go to the GP until the GP has earned 20% of cumulative profits — restoring the 80/20 split as if there had been no hurdle',
    [
      ['It gives the GP a bonus on top of the 20% carry as a reward for clearing the hurdle', 'The catch-up is not a bonus — it is the mechanism that makes the 20% carry whole. Without a catch-up, the hurdle effectively reduces the GP\'s carry on early profits, which is exactly what the catch-up restores.'],
      ['It guarantees the GP a minimum return regardless of fund performance', 'The catch-up only triggers after LPs have received their hurdle. If the fund does not clear the hurdle, the catch-up never applies and the GP earns no carry.'],
      ['It applies only to American-style waterfalls', 'Catch-up tiers are common in both European and American waterfalls. The catch-up is independent of when carry is paid; it only governs the split once the hurdle is cleared.'],
    ],
    'A 100% catch-up makes the 20% carry effectively a "first dollar" carry once the hurdle is cleared. LPs that resist catch-ups (or negotiate a 50% catch-up) are pushing back on exactly this — they want the GP to share the hurdle drag, not be made whole on it.'),

  q(4390004, 'Career Skills', CHAPTER, 'GP commit',
    'A new $3B buyout fund prints a 2% GP commit. What is the LP-side interpretation of that number?',
    'The GP is putting $60M of partner capital alongside LPs as skin in the game, signaling alignment — most LPs view 1–5% GP commits as the credible range',
    [
      ['A 2% GP commit is unusually low and signals the GP cannot raise its own capital', '1–5% is the conventional range for buyout funds. 2% is well within the band and is read as normal alignment, not a red flag — anything below 1% would start to raise questions.'],
      ['The GP commit is a marketing figure that has no real economic effect', 'On a $3B fund, $60M of partner capital is a real concentration of personal wealth. LPs treat the GP commit as a credible alignment signal precisely because it is the GP\'s own money at risk.'],
      ['GP commits are paid in management fees rather than cash', 'GP commits are paid in cash (or financed personally by the partners through a GP loan facility). Treating it as a fee offset would convert alignment into a non-event.'],
    ],
    'GP commit is the GP\'s own capital invested alongside LPs. The 1–5% band is the LP-credible range — high enough to matter to the partners, not so high it pressures the GP\'s liquidity. ILPA guidance explicitly highlights GP commit as one of the cleanest alignment metrics LPs review.'),

  q(4390005, 'Career Skills', CHAPTER, 'Management fee offsets',
    'A portfolio company pays a sponsor $5M in transaction fees at close and $2M annually in monitoring fees. Under modern LPA terms, what happens to those fees from the LP perspective?',
    '100% of transaction and monitoring fees are offset against the management fee LPs pay — the GP no longer keeps them as separate income',
    [
      ['The GP keeps the fees on top of the management fee as additional sponsor income', 'That was the older market standard, but it has been eroded by LP pressure and ILPA reporting expectations. 100% offset is now the convention for new buyout funds raising from institutional LPs.'],
      ['Transaction fees are offset 100% but monitoring fees stay with the GP', 'Modern LPAs typically offset both. Splitting the treatment was a transitional norm a decade ago but is uncommon in current fundraises.'],
      ['Fee offsets only apply if the LP specifically negotiates them in a side letter', 'The 100% offset is now an LPA-level term, not a side-letter concession. Side letters layer on additional protections; they do not introduce the basic offset.'],
    ],
    'The migration to 100% fee offsets is one of the clearest examples of LP pressure reshaping fund economics. Associates who quote fee economics without flagging the offset misread the net cost to LPs — and misread the GP\'s actual cash compensation as well.'),

  q(4390006, 'Career Skills', CHAPTER, 'Who gets the carry',
    'A junior associate asks where the carry actually goes inside the GP. Which framing is the most accurate?',
    'Carry is distributed through the carry plan to the partners and senior investment professionals, with vesting schedules and good/bad leaver provisions — junior staff typically get small or no carry until promoted',
    [
      ['Carry is split evenly across every employee of the GP entity', 'Carry is concentrated, not spread evenly. Senior partners receive the bulk; mid-level professionals receive modest points; juniors usually receive none until they are promoted into the carry plan.'],
      ['Carry is paid only to the founding partners and never extended to new partners', 'New partners receive carry on funds raised after their promotion. The pool gets re-cut at each fund, which is one reason the most senior partners care so much about fund pacing and size.'],
      ['Carry is paid as salary on top of the GP\'s management fee budget', 'Carry is profit participation, not salary. It is paid out of fund distributions when (and if) the fund clears the hurdle — it is not a line item in the GP\'s operating budget.'],
    ],
    'The carry plan inside a GP is one of the most consequential internal documents in the firm. It determines which partners stay, which leave, and how the GP\'s incentives align with LP outcomes. Junior associates who do not understand carry concentration cannot read partner-level incentives correctly.'),

  q(4390007, 'Career Skills', CHAPTER, 'Carry > mgmt fee in GP NPV',
    'On a successful $3B fund earning a 2.5x net MOIC, why is the carry stream worth substantially more to the GP\'s partners than the cumulative management fee over the fund\'s life?',
    'Carry on a 2.5x fund delivers roughly $750M to the GP (20% of ~$3.75B of profit), dwarfing the cumulative ~$300M of management fees, and is taxed as long-term capital gains rather than ordinary income',
    [
      ['Management fees and carry are roughly equal on a successful fund, so partners are indifferent', 'On a successful fund the carry is several multiples of the cumulative fee stream. Partners on the carry plan are not indifferent — for senior partners, carry is the dominant compensation engine.'],
      ['Carry is worth more only because of the tax treatment, not the absolute dollars', 'Tax treatment helps, but the gap is primarily in the gross dollars. On a 2.5x fund, carry runs into several hundred million; management fees do not.'],
      ['Carry is worth more only because management fees step down after the investment period', 'The step-down narrows the fee stream but does not change the order-of-magnitude gap with carry. Even before the step-down, a successful fund\'s carry materially exceeds its fees.'],
    ],
    'On a successful fund, carry is the dominant economic engine for senior GPs — both in absolute dollars and after tax. The implication for associates: every decision that affects long-run carry (deal selection, hold period, exit timing) is weighted far more heavily by partners than decisions that only affect the fee stream.'),

  // ---------------------------------------------------------------------------
  // FUND LIFECYCLE (4390008–4390012)
  // ---------------------------------------------------------------------------
  q(4390008, 'Career Skills', CHAPTER, 'J-curve mechanics',
    'An LP allocator asks why your new fund is reporting a negative net IRR three years in. What is the correct explanation?',
    'Early fund years carry the full management fee drag while NAV marks lag — fees and unrealized portfolio early in life produce the classic J-curve, with returns inflecting as exits begin',
    [
      ['The fund is underperforming and the negative IRR is a permanent loss signal', 'A negative early IRR is the J-curve, not underperformance. Most institutional LPs expect it for the first three to five years of a buyout fund and would be surprised by a fund that did not show it.'],
      ['The negative IRR is a reporting artifact and has no economic meaning', 'The drag is economic — fees are real cash leaving the fund. The J-curve describes a real cost that is expected to be earned back through exits, not a reporting illusion.'],
      ['Negative early IRR means the fund\'s investment period is misaligned with the harvest period', 'The J-curve is independent of investment/harvest pacing — it is driven by the timing mismatch between fee outflows and exit inflows. Even a perfectly paced fund shows the J-curve.'],
    ],
    'The J-curve is the canonical fund-lifecycle shape: negative early years driven by fees and unrealized holdings, positive inflection as exits begin in years 4–7. LPs underwrite to the post-J-curve return, not the early years. Associates who interpret early negative IRRs as failure mis-read the entire fund-evaluation framework.'),

  q(4390009, 'Career Skills', CHAPTER, 'Investment period',
    'Your $4B Delaware LP fund just closed. The LPA defines a five-year investment period. What is true about the investment period in standard buyout LPAs?',
    'New platform investments can be initiated during the investment period — typically five to six years — and after it ends, only follow-on capital into existing portfolio companies is permitted',
    [
      ['The investment period is the time during which the GP must complete all investments and exits', 'Investments are made during the investment period; exits happen during the harvest period (or beyond). Conflating the two collapses the fund lifecycle into a single window.'],
      ['New platform investments can continue beyond the investment period if the GP requests an extension', 'Extensions cover the fund\'s overall term, not the investment period for new platforms. Once the investment period expires, the GP can typically only deploy follow-on capital, not new platforms.'],
      ['The investment period determines when LPs can be drawn — capital calls stop after it ends', 'Capital calls continue after the investment period to fund follow-ons, fees, and expenses. The investment period limits new platforms, not capital calls.'],
    ],
    'The investment period is the GP\'s window to commit new platform capital. Five to six years is the buyout standard. Associates writing fund-pacing memos who confuse "investment period" with "fund term" mis-state when the GP can still deploy and when the LPA shuts the deployment door.'),

  q(4390010, 'Career Skills', CHAPTER, 'Harvest period',
    'A first-year associate asks what happens during the "harvest period" of a buyout fund. What is the cleanest answer?',
    'The harvest period is the post-investment-period window during which the GP focuses on exiting existing portfolio companies and returning capital to LPs',
    [
      ['The harvest period is when the GP raises the successor fund', 'Successor fundraises typically overlap with the late investment period of the current fund, not the harvest period specifically. They are sequenced events, not the same period.'],
      ['The harvest period is when management fees step up to reflect more active portfolio work', 'Management fees step *down* after the investment period (often to a lower rate on invested capital), reflecting that the GP is no longer underwriting new platforms.'],
      ['The harvest period is the first three years of the fund when the GP holds capital before deploying', 'Capital is deployed during the investment period, which starts at fund close, not after a holding phase. There is no dormant pre-investment period in a standard buyout fund.'],
    ],
    'Fund lifecycle has three phases: fundraising and close, investment period (five to six years of new platforms), harvest period (exits and follow-ons). Associates who do not know which phase the fund is in cannot read partner attention correctly — different phases drive entirely different daily work.'),

  q(4390011, 'Career Skills', CHAPTER, 'Fund term and extensions',
    'Your fund LPA states a 10-year fund term with two one-year extensions at the GP\'s discretion and further extensions only with LPAC consent. What is the practical reality?',
    'Most buyout funds run 12 years or longer in practice because the harvest period frequently overruns — the LPAC extensions are routine, not exceptional',
    [
      ['Funds almost always terminate at exactly 10 years as stated in the LPA', 'In practice, very few buyout funds wind up cleanly at 10 years. The harvest period regularly overruns, and LPAC extensions are common — sometimes followed by GP-led continuation vehicles for the residual portfolio.'],
      ['LPAC extensions require unanimous LP consent', 'Extensions typically require LPAC (LP Advisory Committee) consent, not full LP consent. The LPAC is a representative subset, not the whole investor base.'],
      ['Extensions are illegal under Delaware LP statutes and require fund liquidation instead', 'Extensions are explicitly permitted under Delaware LP law and structured through the LPA. Liquidation can be forced under specific circumstances but is not the default mechanism for managing overruns.'],
    ],
    'Fund term is a target, not a deadline. Knowing that buyout funds routinely run 12+ years matters when reading LP allocation behavior, modeling GP-led continuation vehicles, and understanding why later vintages can still have unrealized positions years past their nominal expiry.'),

  q(4390012, 'Career Skills', CHAPTER, 'Recycling provisions',
    'An LPA permits the GP to "recycle" up to 120% of committed capital. What does that mean and why does it matter to LPs?',
    'The GP can re-invest exit proceeds (typically within the investment period) so that aggregate deployed capital exceeds committed capital — boosting MOIC and putting more capital to work, but with extended fee exposure',
    [
      ['It means the GP can call 120% of committed capital from LPs', 'Recycling does not increase what LPs ultimately fund — it allows exit proceeds to be redeployed rather than distributed. The 120% cap refers to total deployment, not total LP funding.'],
      ['It means the GP can extend the management fee period by 20%', 'Recycling is about capital deployment, not the fee period. The fee period is governed separately by the investment-period definition.'],
      ['It is purely a GP convenience and has no real impact on LP returns', 'Recycling materially affects fee drag and capital efficiency. LPs scrutinize recycling provisions because they trade higher gross deployment for additional fee exposure on the same dollars.'],
    ],
    'Recycling lets the GP put more capital to work without raising a bigger fund. LPs evaluate the tradeoff: higher deployment can lift MOIC, but the recycled capital is fee-exposed twice. The 100–125% band is typical; aggressive recycling provisions are an LP red flag.'),

  // ---------------------------------------------------------------------------
  // FUND METRICS (4390013–4390019)
  // ---------------------------------------------------------------------------
  q(4390013, 'Career Skills', CHAPTER, 'MOIC definition',
    'A fund reports a 2.4x gross MOIC on its 2018 vintage. What does that number mean precisely?',
    'Total value (realized distributions plus residual unrealized value) divided by invested capital — before management fees, carry, or fund expenses',
    [
      ['Realized distributions divided by invested capital, ignoring unrealized value', 'That is DPI (Distribution to Paid-In), not MOIC. MOIC includes both realized and unrealized value; ignoring the unrealized portion would understate the fund\'s current marks.'],
      ['Net returns to LPs divided by the LP commitment, after fees and carry', 'That would be net MOIC, not gross MOIC. The difference matters: net MOIC is typically 0.3–0.5x lower than gross on a successful buyout fund because of fees and carry.'],
      ['IRR converted into a multiple via the fund\'s weighted-average hold period', 'MOIC and IRR are independent metrics — one is a multiple, the other is annualized. There is no conversion; they are reported alongside each other precisely because they measure different things.'],
    ],
    'MOIC is the cleanest "did the fund make money on a multiple basis" question. Gross vs net matters; realized vs total matters. Associates who quote MOIC without specifying gross/net and realized/total leave the conversation ambiguous in a way LPs will not.'),

  q(4390014, 'Career Skills', CHAPTER, 'DPI vs RVPI',
    'A fund reports DPI of 1.2x and RVPI of 0.9x at year 8. What does this combination tell an LP?',
    'LPs have already received 1.2x their paid-in capital back as cash distributions, and remaining unrealized value (NAV) is 0.9x — combined TVPI of 2.1x with most of the upside already realized',
    [
      ['LPs are still in the hole because RVPI is below 1.0x', 'DPI of 1.2x means LPs are already above water on cash. RVPI is the *remaining* unrealized value; it does not need to clear 1.0x on its own for the fund to be in the money.'],
      ['The fund will return another 0.9x to LPs as a guaranteed distribution', 'RVPI is unrealized — it is the GP\'s mark on remaining holdings, not a committed future distribution. It can move up or down as exits occur and marks update.'],
      ['DPI and RVPI are alternative measures of the same thing', 'DPI measures realized cash; RVPI measures unrealized value. They are complements: TVPI = DPI + RVPI. Treating them as alternatives loses the realized/unrealized split that LPs care most about.'],
    ],
    'DPI is the cash LPs can see; RVPI is the GP\'s claim on what is left. At year 8, a high-DPI / lower-RVPI fund is in different shape than a low-DPI / high-RVPI fund of the same TVPI — the former has de-risked, the latter still depends on the GP\'s remaining mark assumptions.'),

  q(4390015, 'Career Skills', CHAPTER, 'TVPI = DPI + RVPI',
    'A fund reports a 2.1x net TVPI. An LP asks how to reconcile that with the 1.2x DPI you also reported. What is the right framing?',
    'TVPI is Total Value to Paid-In = DPI (realized) + RVPI (residual unrealized). The 0.9x gap is the GP\'s current mark on the remaining portfolio',
    [
      ['TVPI is gross of fees; DPI is net of fees, which explains the gap', 'Both TVPI and DPI can be reported gross or net — the convention has to be specified, but they are not gross/net counterparts of each other. The gap is the realized/unrealized split, not the fee treatment.'],
      ['TVPI is a forecast; DPI is the historical realized figure', 'TVPI includes a forecast component (the RVPI mark on unrealized holdings), but TVPI itself is reported as of a measurement date, not as a forward forecast. The split between realized and unrealized is what matters.'],
      ['TVPI and DPI are simply different ways to express the same realized return', 'They are not the same. DPI excludes unrealized value entirely; TVPI includes it. A fund that has not exited anything yet can have TVPI > 1.0x and DPI = 0.'],
    ],
    'TVPI = DPI + RVPI is the most useful identity in fund reporting. It forces the LP and GP to look at how much of the reported total has actually been realized versus what is still riding on the GP\'s marks — which is exactly where LPs apply skepticism.'),

  q(4390016, 'Career Skills', CHAPTER, 'Gross vs net IRR',
    'A buyout GP markets a "28% gross IRR" on its prior fund. The fund\'s net IRR is 20%. What accounts for the eight-point gap?',
    'Management fees, carried interest, and fund expenses — gross IRR is measured on the fund\'s investments before these costs; net IRR is what LPs actually earn after them',
    [
      ['Tax treatment at the LP level — gross IRR is pre-tax and net IRR is after-tax', 'Net IRR is reported pre-tax at the LP level (taxes vary by LP). The gross-to-net spread is fees, carry, and expenses, not taxes.'],
      ['Currency translation and FX hedging costs', 'FX effects are real for international funds but are not the standard explanation for the gross-to-net spread in a US-focused buyout fund. The spread is fees and carry, not FX.'],
      ['Public market reference returns subtracted to produce a benchmark-adjusted figure', 'That would be alpha vs PME, which is a separate computation entirely. The gross-to-net IRR spread is the GP\'s economics, not a benchmark adjustment.'],
    ],
    'The 6–10-point gross-to-net IRR spread is the canonical fee-and-carry drag on a successful buyout fund. LPs ignore gross IRR and underwrite net; GPs market gross because it looks better. Associates need to know which number is being quoted in any IC discussion.'),

  q(4390017, 'Career Skills', CHAPTER, 'IRR vs MOIC tradeoff',
    'A deal returns 3.0x MOIC over 7 years (≈17% IRR) or 2.0x MOIC over 3 years (≈26% IRR). Same money invested. Which does the GP usually prefer, and why?',
    'It depends on fund stage and reserve constraints — earlier in the fund, the higher-MOIC longer hold compounds more total value; closer to fund end, the higher-IRR shorter hold protects the headline metric LPs benchmark on',
    [
      ['Always the higher-IRR option, because IRR is the metric LPs underwrite', 'LPs underwrite both, and most allocate primarily on net IRR but cross-check MOIC. A pure IRR optimization can leave money on the table in absolute dollars, which carry recipients also care about.'],
      ['Always the higher-MOIC option, because MOIC measures real dollars created', 'Higher MOIC is not always preferred — a longer hold dilutes IRR and risks pushing the exit past the fund\'s reporting period. Many GPs will sell a 2.5x in year 4 rather than ride for 3.0x in year 6.'],
      ['The two metrics always rank deals in the same order, so there is no tradeoff', 'IRR rewards earlier exits; MOIC rewards larger absolute multiples. They can rank the same deal differently — which is exactly why both are reported and exit-timing decisions can be contested inside the GP.'],
    ],
    'The IRR/MOIC tradeoff drives exit-timing decisions. The right answer depends on where the fund is in its lifecycle and what the GP is optimizing for in carry terms. Associates who can frame this tradeoff cleanly add real value to exit-timing IC discussions.'),

  q(4390018, 'Career Skills', CHAPTER, 'PME (Public Market Equivalent)',
    'An LP says your fund\'s 19% net IRR "looks good but I want to see the PME." What is the PME measuring and why does the LP care?',
    'PME compares the fund\'s cash flows against an equivalent investment in a public benchmark (typically S&P 500), answering whether the LP would have done better just buying the index over the same call/distribution schedule',
    [
      ['PME is the public-market multiple at which the GP\'s portfolio companies could be sold', 'PME is not an exit-multiple metric. It is a return-attribution metric that compares the fund\'s actual cash flows to a hypothetical public-index investment with the same cash flow timing.'],
      ['PME is the price-to-earnings ratio of the fund as a whole', 'PME is unrelated to P/E ratios. The acronym is Public Market Equivalent — it is an alternative benchmark for private fund returns, not a valuation multiple.'],
      ['PME is a regulatory required disclosure under SEC rules', 'PME is an industry analytical tool, not a regulatory disclosure. LPs request it; the SEC does not mandate it. ILPA guidance encourages it, but that is voluntary best practice rather than rule.'],
    ],
    'PME (Kaplan-Schoar and direct-alpha variants) is how sophisticated LPs separate PE returns from public-market beta. A 19% net IRR over a decade when the S&P returned 13% is a real outperformance story; the same 19% when the S&P returned 18% is much less interesting. Associates pitching to allocators need to know which conversation they are in.'),

  q(4390019, 'Career Skills', CHAPTER, 'Top quartile vs median net IRR',
    'A first-time LP allocator asks what "top quartile" buyout net IRR realistically looks like versus the median. What is the honest answer?',
    'Top quartile buyout funds typically deliver ~18–22% net IRR over their life; median is closer to 10–12% — the dispersion is wide and persistent, which is why manager selection matters so much in PE',
    [
      ['Top quartile is around 13–15% net IRR; median is around 11%', 'That understates the top quartile. Buyout dispersion is much wider than that band suggests — top quartile is typically in the high teens to low twenties net, not the low teens.'],
      ['Top quartile and median are within a point or two of each other because the asset class has matured', 'Buyout dispersion has narrowed somewhat but remains wide. The top-quartile / median gap is on the order of 8–10 percentage points of net IRR, not 1–2.'],
      ['Top quartile is above 30% net IRR; median is around 15%', 'That overstates the top quartile across vintages. A handful of funds clear 30%, but the top-quartile *threshold* sits well below that. Confusing the threshold with the standout performers misreads the distribution.'],
    ],
    'Buyout return dispersion is wide and persists across vintages. The 20% (top quartile) vs 10–12% (median) net IRR gap is the entire reason LPs pay attention to manager selection. Associates pitching to LPs need to be able to place their fund in that distribution honestly — exaggerating the top-quartile bar invites exactly the wrong scrutiny.'),

  // ---------------------------------------------------------------------------
  // RETURN DRIVERS (4390020–4390023)
  // ---------------------------------------------------------------------------
  q(4390020, 'Career Skills', CHAPTER, 'Three return-driver buckets',
    'In a standard PE return attribution, the three primary buckets are leverage, multiple expansion, and EBITDA growth. What does each represent at exit?',
    'Leverage = debt paydown over the hold, multiple expansion = higher exit EV/EBITDA than entry, EBITDA growth = absolute growth in EBITDA between entry and exit',
    [
      ['Leverage = use of debt at close, multiple expansion = market beta, EBITDA growth = sales growth', 'Leverage in a return-attribution sense is the value created by debt paydown during the hold, not just the use of debt at entry. Multiple expansion is target-specific, not pure market beta. EBITDA growth is profit growth, not revenue.'],
      ['Leverage, multiple expansion, and EBITDA growth are three names for the same thing measured differently', 'They are independent drivers. A deal can deliver strong EBITDA growth with no multiple expansion and no debt paydown, or vice versa. Treating them as redundant collapses the entire attribution framework.'],
      ['Leverage = interest expense saved, multiple expansion = synergies realized, EBITDA growth = cost cuts only', 'Leverage in attribution is debt paydown value, not P&L interest. Multiple expansion is exit-to-entry EV/EBITDA, not synergies. EBITDA growth includes both organic revenue growth and margin improvement, not just cost cuts.'],
    ],
    'The three-bucket attribution is the standard frame for understanding where PE returns come from. Associates need to be able to point at each driver in a model and explain what would have to be true for it to materialize — which is exactly what IC asks at every step.'),

  q(4390021, 'Career Skills', CHAPTER, 'Typical attribution mix',
    'Across modern US buyouts, what is a realistic attribution mix on a successful exit?',
    'Roughly 30–40% from leverage (debt paydown), ~30% from multiple expansion, and the remainder from EBITDA growth — though EBITDA growth is the most durable contributor when multiples compress',
    [
      ['Leverage is 80%+ of returns in modern buyouts', 'That was closer to the 1980s LBO era. In the modern market, leverage typically contributes a third or so — meaningful but not dominant, because entry multiples have risen.'],
      ['Multiple expansion is the dominant driver across cycles', 'Multiple expansion is highly cycle-dependent and is the *least* reliable driver. Underwriting to it is the most common way deals miss in down cycles.'],
      ['EBITDA growth is essentially irrelevant because hold periods are too short to compound', 'EBITDA growth over a 4–7 year hold is substantial and is the most durable contributor when leverage and multiple expansion fail. Underwriting deals with no operating thesis is exactly the trap modern LPs warn about.'],
    ],
    'The "30/30/40" split is a useful mental anchor for the typical attribution. The implication: deals underwritten primarily on multiple expansion are fragile across cycles. The most resilient deals have a clear EBITDA-growth thesis that holds even if multiples come in.'),

  q(4390022, 'Career Skills', CHAPTER, 'Multiple expansion realism',
    'A model assumes entry at 12x EV/EBITDA and exit at 14x EV/EBITDA five years later. What is the right way to evaluate this assumption inside IC?',
    'Multiple expansion has to be justified by a specific business change — scale, recurring revenue, customer concentration improvement, or platform repositioning — not by "market multiples will be higher in 5 years"',
    [
      ['Assume multiple expansion based on long-run upward trend in PE entry multiples', 'A trend-based assumption is exactly what IC will reject. Past expansion does not predict future expansion, and underwriting to "multiples keep going up" is the trap that broke many 2021–2022 vintage deals.'],
      ['Multiple expansion is a fund-level assumption and does not need deal-level justification', 'Every multiple expansion assumption has to be deal-justified. Fund-level handwaving is the surest way to get a deal sent back to the team.'],
      ['Multiple expansion is conservative because the model only assumes 2 turns', 'Conservatism is not a number — it depends on what justifies the move. Two turns without a business-change thesis is more aggressive than four turns with a clear scale-up story.'],
    ],
    'Multiple expansion is the most-scrutinized assumption in any LBO model. The IC test is whether something about the *business* will be different at exit — not whether the *market* will be different. Vintage 2021–2022 funds learned this lesson the hard way.'),

  q(4390023, 'Career Skills', CHAPTER, 'Decomposing returns on a sample exit',
    'A deal entered at $500M EV, 10x EBITDA, with $300M of debt. Exited 5 years later at $1.2B EV, 12x EBITDA, with $100M of debt. How does the value attribute across the three drivers?',
    'EBITDA grew from $50M to $100M (5x→ growth bucket ≈ $500M), multiple expanded 10x→12x on $100M EBITDA (≈ $200M), debt paydown of $200M flows to equity — equity went from $200M to $1.1B, ~5.5x MOIC',
    [
      ['All $900M of value creation should be attributed to multiple expansion because the multiple went up', 'Most of the value came from EBITDA doubling, not the 2-turn multiple bump. Attributing it all to multiple expansion misreads the operating thesis entirely.'],
      ['Debt paydown is the dominant driver because the equity grew from $200M to $1.1B', 'Debt paydown contributed only $200M of the $900M of value creation. Equity growth is the *total* return, not the leverage contribution — confusing the two double-counts.'],
      ['You cannot attribute returns this cleanly because the drivers interact', 'They do interact, but the standard attribution math handles the interaction (typically by isolating EBITDA growth at entry multiples, then layering multiple expansion, then debt paydown). The decomposition is exactly what IC expects.'],
    ],
    'Decomposing returns is the single most common analytical exercise an associate runs on past deals. Getting the attribution wrong — especially over-attributing to multiple expansion when the real story is EBITDA growth — sends the wrong signal about why the firm wins. Practice it on every realized deal in the firm\'s history.'),

  // ---------------------------------------------------------------------------
  // INVESTMENT CRITERIA — FINANCIAL (4390024–4390028)
  // ---------------------------------------------------------------------------
  q(4390024, 'Career Skills', CHAPTER, 'EBITDA size band',
    'Your fund\'s mandate is "middle-market North American buyouts." A target shows $18M of EBITDA. Another shows $250M. Both clear other criteria. Which fits the typical $30–300M middle-market band, and why does the band matter?',
    'The $250M target fits; the $18M target is below the band and would typically be too small to absorb the fund\'s minimum equity check and post-close support model',
    [
      ['Both fit, because EBITDA size bands are guidelines rather than strict criteria', 'They are commercial guidelines, but they map directly onto the fund\'s minimum check size, the LPs\' expectations for the strategy, and the GP\'s operating-team bandwidth. Buying a $18M EBITDA company from a $4B fund creates real structural problems.'],
      ['Neither fits, because $30–300M is the lower-middle-market band and your fund is larger', '$30–300M is the conventional middle-market band; lower-middle-market is typically below that. Misplacing the band signals the associate has not absorbed the market segmentation.'],
      ['The $18M target fits better because smaller companies grow faster', 'Faster growth in absolute percentage terms does not solve the structural problem of writing a $400M equity check into a company too small to absorb it. Mandate fit is about check size and operating model, not growth rate.'],
    ],
    'EBITDA size bands map onto fund structure: minimum check, ownership target, and post-close support model. Associates who screen targets without checking the band waste IC time on deals the fund could never actually close at its target ownership.'),

  q(4390025, 'Career Skills', CHAPTER, 'Recurring revenue importance',
    'A target generates $80M of EBITDA on 85% contracted recurring revenue. A second target generates the same EBITDA on transactional, project-based revenue. Why does the recurring profile change the underwriting?',
    'Recurring revenue supports more leverage, more predictable cash flow for debt service, and typically higher exit multiples — the entire deal structure responds to revenue durability',
    [
      ['Recurring revenue companies always trade at higher exit multiples regardless of growth', 'Recurring profile contributes to multiple but does not override growth and quality. A flat-growth recurring business is worth less than a growing one — the recurring tag is not a license to ignore the growth profile.'],
      ['Recurring revenue is preferred only for software businesses; in services, it is irrelevant', 'Recurring revenue affects underwriting in every sector — services, industrials, distribution. The multiple premium varies, but the leverage and cash-flow predictability benefits hold across categories.'],
      ['Project-based businesses are riskier and therefore should not be underwritten by PE', 'Project-based businesses are bought regularly when other criteria (niche leadership, customer concentration profile, backlog visibility) compensate. The recurring tag changes the underwriting, not the fundability.'],
    ],
    'Recurring revenue is a leverage and multiple driver, not a binary yes/no screen. The underwriting changes shape — debt capacity, sensitivity assumptions, exit multiple — but project-based businesses with strong fundamentals are routinely bought. Associates who treat recurring as a hard cutoff miss good deals.'),

  q(4390026, 'Career Skills', CHAPTER, 'Gross margin floor',
    'Your fund screens for gross margins above 30%. A target shows 24% gross margin in industrial services with strong EBITDA conversion. How should the associate present this in screening?',
    'Below the typical screen, but worth a closer look in sectors where 24% is actually top-quartile — flag it explicitly with sector benchmarks rather than reflexively rejecting it',
    [
      ['Reject immediately because the screen is a hard rule', 'Screens are conventions, not rules. A 24% gross margin in industrial services may be top-decile even though it would be a red flag in software. The screen has to be read against the sector benchmark.'],
      ['Accept without flagging because EBITDA conversion is strong', 'Strong EBITDA conversion does not erase the gross margin question — it just shifts the lens. The screen exists for a reason; bypassing it without explanation hides the trade-off from IC.'],
      ['Apply a different screen entirely because gross margin is not a useful metric in industrials', 'Gross margin is useful in industrials — the *benchmark* is different. Saying it does not apply is a way to avoid the work of finding the sector-relevant benchmark.'],
    ],
    'Financial screens are sector-conditional. The 30% gross margin floor reflects the kind of businesses the fund typically underwrites, but a target that misses the floor in a sector where 24% is excellent should be flagged with context, not rejected outright. Associates who screen mechanically lose the deals that are most differentiated.'),

  q(4390027, 'Career Skills', CHAPTER, 'FCF conversion floor',
    'Your fund screens for free cash flow conversion above 60% of EBITDA. A target shows 45% conversion driven by working capital growth alongside topline. How should this be interpreted?',
    'Investigate whether the working capital drag is structural (the business model genuinely consumes working capital) or temporary (a growth phase that will normalize) — the answer changes the underwriting decisively',
    [
      ['Reject because below 60% is below the screen', 'A growth-driven working capital drag often normalizes as growth slows. The screen exists to catch structurally cash-poor businesses; growth-driven drag is a different story that deserves diligence rather than auto-rejection.'],
      ['Accept and assume conversion will improve to 70% in the model', 'Assuming improvement without evidence is exactly the kind of optimism IC rejects. The diligence has to confirm whether the working capital pattern actually normalizes.'],
      ['Ignore the FCF conversion metric and rely on EBITDA growth instead', 'FCF conversion is what supports debt service in an LBO. Ignoring it misses the structural question of whether the business can actually carry the leverage the deal would require.'],
    ],
    'FCF conversion is the deal\'s ability to fund debt service after working capital and capex. Failing the screen is a signal to dig, not a reason to walk — the diligence question is whether the conversion is structurally low or cyclically low. The answer drives the entire leverage assumption.'),

  q(4390028, 'Career Skills', CHAPTER, 'CapEx intensity screen',
    'A target shows capex running at 9% of revenue, well above the fund\'s typical 3–4% screen for the sector. The target has strong EBITDA growth and pricing power. What is the right framing?',
    'CapEx intensity compresses free cash flow and constrains debt capacity — even with strong EBITDA, the leverage assumption has to be re-scaled and the FCF available for debt paydown will be materially lower',
    [
      ['CapEx is irrelevant because EBITDA already accounts for asset utilization', 'EBITDA is *pre-capex*, so it does not account for cash outlays needed to maintain or grow the asset base. CapEx intensity is exactly the gap between EBITDA and free cash flow — and the gap matters for an LBO.'],
      ['CapEx intensity is a sector feature and should not affect the underwriting', 'CapEx intensity always affects underwriting because it determines how much cash is left for debt service after sustaining the business. Sector context shapes what is normal, but it does not remove the impact.'],
      ['High capex actually helps because it builds asset value at exit', 'Most capex is maintenance, not value-building. Asset value at exit is rarely the relevant exit valuation lens for operating businesses — EV/EBITDA is. High capex hurts more than it helps in standard LBO underwriting.'],
    ],
    'CapEx intensity is the silent killer of LBO returns. Associates who ignore it because EBITDA looks strong fund deals that cannot actually service their debt. The right move is always to re-scale leverage assumptions to the FCF the business actually generates net of capex.'),

  // ---------------------------------------------------------------------------
  // INVESTMENT CRITERIA — STRATEGIC (4390029–4390032)
  // ---------------------------------------------------------------------------
  q(4390029, 'Career Skills', CHAPTER, 'Niche leadership thesis',
    'A target is the #1 player in specialty industrial gases for semiconductor fabs in the US, with 38% share of a $400M niche. Why is "niche leadership" specifically attractive to a buyout sponsor?',
    'A defensible #1 position in a niche too small for diversified incumbents creates pricing power, switching costs, and scarcity value — exactly the conditions that hold up under leverage and through cycles',
    [
      ['Niche leadership is attractive because small markets grow faster than large markets', 'Smaller markets do not grow faster on average — many grow more slowly. The reason niche leadership matters is competitive structure, not growth rate.'],
      ['Niche leadership is attractive because it makes exit to a strategic guaranteed', 'Strategic exits are not guaranteed even for niche leaders. The niche-leadership thesis is about competitive durability during the hold; the exit path is a separate question.'],
      ['Niche leadership is attractive only when the niche can be expanded into adjacent segments', 'Expansion is a nice optional, but the core thesis is durability of the current position. Conditioning the thesis on expansion converts a niche-leader deal into a growth-equity deal.'],
    ],
    'Buyout sponsors love niche leadership precisely because it produces pricing power and switching costs without requiring a hyper-growth thesis. Associates who frame niche leaders as "small markets" miss the point — the size is the moat, because diversified competitors will not bother to enter.'),

  q(4390030, 'Career Skills', CHAPTER, 'Pricing power test',
    'Your IC asks how to test whether a target genuinely has pricing power. What is the strongest empirical test?',
    'Look at historical price increases — has the target taken 3–5% price annually with no measurable volume loss? — and compare attrition rates to industry peers',
    [
      ['Ask the management team whether they have pricing power and accept their answer', 'Management always says they have pricing power. The test is empirical — has the company actually taken price without losing customers? Self-reported pricing power is the cheapest signal in the room.'],
      ['Test pricing power by raising prices significantly post-close and see what happens', 'Discovering pricing power experimentally post-close is too late — by then the deal is done. The test has to happen pre-close, on historical data, before the underwriting is committed.'],
      ['Pricing power is unmeasurable — it has to be inferred from gross margin', 'Gross margin reflects pricing power partially but also reflects cost structure, mix, and scale. Direct evidence (historical price increases, attrition response) is much stronger than a gross-margin inference.'],
    ],
    'The empirical pricing-power test is one of the most useful diligence exercises in a Ch.1 screening: pull five years of price changes, attrition, and customer-renewal data. If price went up 4% a year and attrition stayed flat, you have pricing power. If price went up but attrition climbed, you have a problem the model has not surfaced yet.'),

  q(4390031, 'Career Skills', CHAPTER, 'Moat at mid-market scale',
    'A $80M EBITDA business cannot rely on scale moats (it is too small) or brand moats (its buyers are operators, not consumers). What kinds of moat are actually defensible at mid-market scale?',
    'Switching costs (workflow integration, regulatory certifications, customer-specific tooling), distribution control (long-tail customer relationships), and regulatory moats (licenses, FDA filings, state-by-state permits)',
    [
      ['Network effects and brand are the only durable moats at any scale', 'Network effects and brand are real moats but rare in mid-market. Switching costs, distribution control, and regulatory moats are the everyday durable moats in the segment buyout funds actually serve.'],
      ['There are no durable moats at mid-market scale; the thesis has to be growth instead', 'Mid-market businesses have moats; they look different from the Big Tech version. Treating mid-market as inherently moatless misreads the entire buyout opportunity set.'],
      ['IP and patents are the only legally defensible moat', 'IP is rarely the dominant moat for mid-market services and industrials. Switching costs and regulatory barriers protect far more buyout businesses than patents do.'],
    ],
    'Mid-market moat analysis looks different from the textbook frameworks built for consumer or platform businesses. Switching costs, distribution control, and regulatory moats are the durable categories — recognizing them is what separates a useful screen from a generic one.'),

  q(4390032, 'Career Skills', CHAPTER, 'Strategic screen failure mode',
    'A target hits every financial screen (EBITDA size, gross margin, FCF conversion, recurring revenue) but the strategic position is muddled — no clear #1 niche, no obvious switching costs, average pricing power. What is the right call?',
    'Pass, because the financial profile is a snapshot but the strategic position is what determines how the business holds up under leverage and through the hold — passing financial screens with a weak moat is the canonical way buyout deals miss',
    [
      ['Proceed because the financial screens are the leading indicators', 'Financial screens are lagging indicators — they describe what the business has done, not what protects it going forward. A target with strong financials and a weak moat is exactly the kind that erodes under competitive pressure during the hold.'],
      ['Proceed but apply lower leverage to compensate for the strategic weakness', 'Lower leverage reduces the failure mode but does not eliminate it. If the strategic position is fundamentally weak, no leverage assumption rescues the underwriting.'],
      ['Defer the decision until more strategic data is gathered', 'Deferring is reasonable for ambiguous cases but not for cases where the strategic position is clearly muddled. The screen has done its job by surfacing the weakness; further data is unlikely to change the call.'],
    ],
    'Financial screens describe the past; strategic screens describe whether the past is repeatable. Buyouts that pass financial screens and fail strategic screens are the canonical disappointment mode. Associates who learn to weight strategic position over financial snapshot save the firm IC time on deals that look attractive but will not hold.'),

  // ---------------------------------------------------------------------------
  // SOURCING (4390033–4390035)
  // ---------------------------------------------------------------------------
  q(4390033, 'Career Skills', CHAPTER, 'Proprietary vs auction',
    'Your firm wins a deal sourced directly from the founder with no banker involved. A peer fund wins a similar-shape deal through a Lazard-run auction. What are the practical differences for the buyer?',
    'Proprietary deals typically close at lower entry multiples and with friendlier seller-side terms, but require more in-house diligence and direct relationship work; auctions deliver clean diligence packages but bid up the price',
    [
      ['Proprietary deals are always better because they avoid competitive pressure', 'Proprietary deals can be better, but they come with information asymmetry and diligence burden. The seller may be selling because they know something the buyer does not — proprietary is not automatically advantageous.'],
      ['Auctions are always better because they ensure efficient pricing', 'Efficient pricing is exactly the problem from the buyer\'s perspective — auctions bid the price up to the marginal buyer\'s willingness to pay. Most funds prefer to source proprietary precisely to escape that dynamic.'],
      ['There is no economic difference; both processes deliver similar entry multiples', 'Proprietary entry multiples typically run a turn or more lower than comparable auctions. Sourcing model is one of the most consistent levers on entry multiple in the entire fund.'],
    ],
    'Sourcing channel is a meaningful determinant of entry multiple. Proprietary sourcing trades information work and relationship cost for price. Funds that build sourcing engines (proprietary deal flow, direct-to-founder programs) earn a structural advantage that compounds over a portfolio.'),

  q(4390034, 'Career Skills', CHAPTER, 'Club deals',
    'Your fund is invited to "club" a $5B buyout alongside two peer firms, each taking ~33% of equity. What are the LPs\' typical concerns about club deals?',
    'Diluted ownership reduces governance control, return concentration falls because each GP gets only a slice, and LPs worry about correlated exposure if they also commit to the partner funds — many LPAs limit club deal frequency',
    [
      ['LPs prefer club deals because they reduce single-fund concentration risk', 'LPs are typically *more* concerned about club deals, not less. They reduce diversification across managers from the LP\'s standpoint (the LP may be invested in multiple GPs in the same deal) and dilute single-fund returns.'],
      ['LPs do not care about club deals as long as the deal performs', 'LPs do care, and many LPAs cap the proportion of fund capital that can be deployed in club deals precisely because of the dilution and correlation concerns.'],
      ['Club deals are a regulatory category and have separate disclosure rules', 'Club deals are a commercial structure, not a regulatory category. LP concerns are economic and governance-related, not driven by regulatory disclosure.'],
    ],
    'Club deals exist because some buyouts are too large for a single GP\'s fund. LPs scrutinize them because they reduce governance control, can correlate exposure across an LP\'s GP roster, and dilute the carry-driving outsize wins LPs actually paid for. The 2006–2008 mega-club era left scars; modern LPAs reflect them.'),

  q(4390035, 'Career Skills', CHAPTER, 'Take-privates',
    'A $1.5B publicly-traded company is being evaluated for a take-private. What is the canonical reason a sponsor would prefer to own this business privately rather than leave it public?',
    'Public-market discount to intrinsic value (often driven by short-term reporting pressure, neglected mid-cap coverage, or strategic optionality the market is not pricing) plus the ability to run a multi-year value-creation plan without quarterly scrutiny',
    [
      ['Take-privates are easier than private-to-private deals because public information eliminates diligence work', 'Public information is a starting point, not a substitute for diligence. Take-privates carry significant deal complexity (proxy votes, regulatory approvals, Go-Shop periods) that private-to-private deals do not.'],
      ['Take-privates are preferred because public companies are always undervalued', 'Public companies are not systematically undervalued — many are correctly priced or overpriced. The take-private thesis has to identify a *specific* mispricing or strategic opportunity, not just a generic public-vs-private gap.'],
      ['Take-privates are tax-efficient relative to other deal structures', 'Tax treatment of take-privates is not systematically advantaged. The thesis is about valuation and operational freedom, not tax structure.'],
    ],
    'Take-privates rest on a specific mispricing claim plus a clear operational thesis that benefits from the absence of public-market scrutiny. Without one or both, the higher transaction complexity (proxy, Go-Shop, MOFCOM/CFIUS where applicable) does not pay for itself. Vintage 2007 and 2021 have many examples of take-privates that paid full public price without the operational thesis to back it up.'),

  // ---------------------------------------------------------------------------
  // DEAL TYPES (4390036–4390038)
  // ---------------------------------------------------------------------------
  q(4390036, 'Career Skills', CHAPTER, 'Control LBO definition',
    'A peer fund describes its core strategy as "control buyouts." What does "control" specifically mean in this context?',
    'The sponsor acquires majority ownership (typically 80%+) with rights to appoint the board, approve major decisions, and direct the exit — the defining feature of buyout PE versus minority growth strategies',
    [
      ['Control means owning at least 50.1% with simple-majority board rights', '50.1% with simple-majority rights is technical control but not the operating definition the buyout market uses. Buyout sponsors typically take 80%+ to ensure unambiguous governance and clean exit rights.'],
      ['Control means having a board seat and observer rights', 'A board seat alone is the growth-equity convention, not control. Buyouts require majority ownership and full governance, not a seat at the table.'],
      ['Control means owning at least 100% — there is no such thing as partial control', 'Sponsors often share equity with management rollovers (5–20%) without ceding control. The 100% framing collapses the typical ownership stack.'],
    ],
    'Control is the structural feature that distinguishes buyout PE from growth equity, secondaries, and minority co-investments. The 80%+ convention reflects how much governance certainty buyout sponsors require to underwrite their value-creation plan against the leverage they are deploying.'),

  q(4390037, 'Career Skills', CHAPTER, 'GP-led continuation vehicles',
    'A GP is approaching year 10 on a fund with one excellent remaining portfolio company. Rather than sell, the GP proposes a "continuation vehicle" to hold the asset. What is the structure and what are the LP-side concerns?',
    'The GP rolls the asset into a new vehicle, offering existing LPs the option to cash out at a marked price or roll into the new vehicle — concerns center on conflict of interest (GP sets the price on both sides) and the LPAC consent process',
    [
      ['Continuation vehicles are LP-led liquidity events with no GP discretion', 'Continuation vehicles are explicitly GP-led — that is the structural feature that distinguishes them from LP-led secondary sales. The GP sponsors and runs the transaction.'],
      ['Continuation vehicles require unanimous LP consent and cannot proceed otherwise', 'They typically require LPAC consent, not unanimous LP consent. The LPAC consent process is where the conflict-of-interest concerns get adjudicated, but it is not unanimity.'],
      ['Continuation vehicles are purely a fee-extension mechanism and offer no economic benefit to LPs', 'Continuation vehicles can deliver liquidity to LPs who want it while extending hold for those who do not — they have a legitimate economic purpose. The concern is conflict management, not a categorical objection.'],
    ],
    'GP-led continuation vehicles exploded in 2019–2022 and now represent a meaningful share of secondary volume. They solve a real problem (forced sales of strong assets at fund-life expiry) but introduce a structural conflict (the GP prices both sides). LPAC consent and third-party valuation are the standard mitigants; ILPA published specific guidance on the process in 2023.'),

  q(4390038, 'Career Skills', CHAPTER, 'Secondaries (LP-led)',
    'An LP wants to exit its commitment to a 2017 vintage buyout fund early, three years before the harvest period completes. A secondary buyer offers 92% of NAV. Why might the LP accept and what does the buyer get?',
    'The LP gets immediate liquidity and an out from future capital calls; the buyer gets a J-curve-mitigated position with most of the early fee drag already absorbed and visibility into the remaining portfolio',
    [
      ['Secondary buyers always pay above NAV because PE returns are predictably positive', 'Secondary buyers price below NAV almost always, because they bear the remaining capital calls, the residual portfolio risk, and the GP\'s mark uncertainty. Above-NAV pricing is rare and signals a hot market or an exceptional fund.'],
      ['LP-led secondaries are illegal under most LPAs without GP consent', 'Most LPAs require GP consent for an LP transfer, but the transfer itself is explicitly permitted. The consent process is administrative, not prohibitive.'],
      ['Secondaries are economically equivalent to a primary commitment because the asset is the same', 'The economics are different: secondary buyers enter mid-life with the J-curve mostly absorbed, less remaining duration, and partial visibility into outcomes. That is exactly why secondary prices and IRRs look different from primary returns.'],
    ],
    'LP-led secondaries are a mature market that exists because LP liquidity needs evolve over a 12+ year fund life. The buyer gets J-curve mitigation and visibility; the seller gets liquidity at a discount. Pricing the discount is the secondary market\'s core skill — it depends on GP quality, remaining portfolio composition, and overall market conditions.'),

  // ---------------------------------------------------------------------------
  // CROSS-CUTTING (4390039–4390046)
  // ---------------------------------------------------------------------------
  q(4390039, 'Career Skills', CHAPTER, 'PE vs strategic acquirer',
    'A target is in a sale process. Both a strategic acquirer (a public industrial conglomerate) and a PE sponsor are in the final round. How do the two typically diverge on bid logic?',
    'Strategics underwrite synergies (cost takeout, cross-sell, channel leverage) on top of standalone value; sponsors underwrite leverage and operating improvement without synergy assumptions — strategics often pay more when synergies are real',
    [
      ['Sponsors always pay more because they can use leverage to fund higher bids', 'Strategics frequently outbid sponsors when synergies justify a higher price. Leverage extends a sponsor\'s capacity but does not change the underwritten return — the strategic\'s synergy case can simply support a higher number.'],
      ['Strategics always pay more because they have a lower cost of capital', 'Cost of capital matters at the margin, but the dominant factor is synergies. A strategic without synergies often bids below a sponsor; a strategic with real synergies typically wins.'],
      ['The bids should be identical because both buyers underwrite the same business', 'They underwrite the same business through different lenses. Standalone value plus synergies (strategic) is structurally different from standalone value plus leverage and operating improvement (sponsor) — that difference is the whole reason sale processes have both bidder types.'],
    ],
    'Strategic vs sponsor bid logic is one of the most useful comparisons an associate can internalize. It explains why sponsors win some processes and lose others, and it sets up the eventual exit decision: at exit, the sponsor often sells to a strategic precisely because the strategic can layer synergies that the sponsor never could.'),

  q(4390040, 'Career Skills', CHAPTER, 'Vintage year impact',
    'A 2008 vintage buyout fund and a 2021 vintage buyout fund both delivered "successful" returns relative to their peer groups. Which actually outperformed in absolute terms, and why?',
    '2008–2009 vintages outperformed substantially because they deployed into a depressed market with low entry multiples and rode the subsequent recovery; 2021–2022 vintages have been mixed because they bought at peak multiples just before rate increases compressed multiples',
    [
      ['Vintage year is irrelevant to fund returns; GP skill dominates', 'Vintage year is one of the most consistent predictors of buyout fund returns. GP skill matters within a vintage, but cross-vintage comparisons are dominated by the entry-multiple environment at the time the fund deployed.'],
      ['2021 vintages outperformed because tech-heavy deal mix benefited from the post-COVID boom', '2021 vintages bought near multiple peaks and faced multiple compression as rates rose. The "tech tailwind" was largely priced in at entry — and reversed shortly after.'],
      ['Both vintages outperformed identically because peer-relative measurement normalizes for vintage', 'Peer-relative measurement *within* a vintage is the standard quartile comparison. Across vintages, absolute returns vary materially — that is exactly why vintage diversification is a core LP allocation principle.'],
    ],
    'Vintage year captures the entry-multiple environment at deployment, which is the single largest exogenous driver of buyout returns. LPs build vintage diversification precisely because vintage timing dominates outcomes more than they would like to admit. The 2008–2009 outperformance and 2021–2022 disappointment are the cleanest modern illustrations.'),

  q(4390041, 'Career Skills', CHAPTER, 'Fund size effects',
    'Academic and practitioner studies consistently show that smaller buyout funds outperform larger ones on average. What is the structural explanation?',
    'Smaller funds compete in a less efficient deal market (lower-middle-market sourcing has more proprietary opportunities), face less pressure to deploy quickly, and can move EBITDA materially on smaller targets with modest operational change',
    [
      ['Smaller funds underperform because they lack institutional resources', 'The data points the other way: smaller funds outperform on average. The institutional resources of large funds matter but do not overcome the structural advantages of smaller funds in deal selection and value creation.'],
      ['Smaller funds outperform only because of survivorship bias in the data', 'Survivorship bias affects all fund-return data, but the smaller-fund outperformance persists in carefully constructed studies that adjust for it. The effect is structural, not just an artifact.'],
      ['Smaller funds are riskier and outperform only on a risk-adjusted basis', 'Smaller funds outperform on absolute IRR and MOIC, not just risk-adjusted. The risk profile is different but the absolute return premium is real.'],
    ],
    'The size-return inverse is one of the most consistent empirical findings in PE. It does not mean smaller is always better — it means large funds have to work harder to overcome the structural disadvantages of competing for larger, more efficiently-priced deals. LPs build size diversification with the smaller-fund tilt in mind.'),

  q(4390042, 'Career Skills', CHAPTER, 'Co-investments',
    'A major LP is offered a $100M co-investment in your latest deal at no fee and no carry, alongside the main fund commitment. Why does the GP offer it and why does the LP take it?',
    'The GP gets additional equity firepower for the deal (closing a check it could not have written alone) and strengthens the LP relationship; the LP gets to over-weight the best deals at zero fee drag, which can lift their blended PE return materially',
    [
      ['Co-investments are a way for LPs to bypass the fund\'s management fee structure across all investments', 'Co-investments are deal-specific, not a blanket fee bypass. The LP still pays full economics on its main fund commitment — the no-fee/no-carry treatment applies only to the co-invest sleeve.'],
      ['Co-investments are economically equivalent to a larger fund commitment', 'They are not equivalent — co-investments offer deal selection (the LP chooses which deals to co-invest in) and zero economics, both of which differentiate them materially from a larger primary commitment.'],
      ['GPs offer co-investments because regulators require diversification of deal capital', 'There is no regulatory diversification requirement. GPs offer co-investments commercially to bring deals home and to deepen LP relationships, not to satisfy a regulator.'],
    ],
    'Co-investments are the single highest-return-per-dollar opportunity for LPs in PE — zero fees, picked deals. From the GP side, they are the most powerful relationship currency in the asset class. The "co-invest tax" on LPs without scale (smaller LPs do not get offered them) is one of the structural reasons large LPs out-earn small ones in PE.'),

  q(4390043, 'Career Skills', CHAPTER, 'LP fundraising pitch',
    'An associate is asked to draft the headline pitch slide for a Fund V fundraise. The team\'s prior funds delivered 18%, 22%, and 19% net IRR. What anchors the most credible pitch?',
    'Consistent net IRR across three vintages above the top-quartile threshold, with attribution showing operating improvement and EBITDA growth rather than multiple expansion — and references to specific deals that illustrate the playbook',
    [
      ['Highlight the highest-IRR deal in each fund as the headline', 'Cherry-picked top deals are exactly what LPs discount. Consistency across the portfolio (not the highest single deal) is what builds credibility for a successor fund.'],
      ['Lead with TAM and strategy slides rather than performance', 'Strategy matters, but for a Fund V the dominant question is performance attribution. TAM-first pitches read as evasion when there is a real track record to put forward.'],
      ['Lead with the team biographies because LPs back people first', 'Team backgrounds matter, but for an established firm with three prior funds, LPs back the track record. Bio-first pitches signal that the track record is the weaker story — which is the opposite of the message Fund V should send.'],
    ],
    'The Fund V pitch hierarchy: consistent performance, defensible attribution, repeatable playbook, named deals. Strategy and team are reinforcing — they are not the lead. Associates who draft pitch decks for a sophisticated LP audience need to understand the hierarchy before the deck is opened.'),

  q(4390044, 'Career Skills', CHAPTER, 'Misconception — leverage = returns',
    'A new analyst argues that the way to generate higher PE returns is simply to use more leverage. Why is this wrong as a structural strategy?',
    'Higher leverage amplifies both upside and downside, raises debt service that constrains operational flexibility, and beyond a certain point caps debt availability and increases default risk — modern buyout returns come primarily from EBITDA growth, not leverage maximization',
    [
      ['It is correct in theory; the only reason GPs do not use more leverage is regulatory limits', 'There are no regulatory limits on buyout leverage that constrain typical deals. The constraints are economic — debt service capacity, lender willingness, and downside risk under stress scenarios.'],
      ['It is wrong only because lenders restrict leverage to 6x EBITDA', 'Lender constraints matter, but the deeper point is that more leverage does not reliably produce higher returns. The 30/30/40 attribution shows leverage is a meaningful but not dominant driver — pushing it further does not proportionally increase returns.'],
      ['It is wrong because higher leverage means lower IRR mechanically', 'Higher leverage typically *raises* IRR in success cases — that is not the issue. The issue is the asymmetric downside and the constraints on operational flexibility, which the analyst\'s framing ignores entirely.'],
    ],
    'Leverage is a return amplifier, not a return source. Treating it as a strategy in itself is the canonical analyst-level misconception about how buyouts work. Modern buyout returns come from a combination of operating improvement, EBITDA growth, and disciplined leverage — not from maximizing the leverage stack.'),

  q(4390045, 'Career Skills', CHAPTER, 'ILPA reporting expectations',
    'A new LP asks what level of reporting transparency they should expect from your fund. What is the modern standard, anchored on ILPA guidance?',
    'Quarterly reporting using the ILPA Reporting Template covering fund-level performance (DPI, RVPI, TVPI, IRR), capital account statements, and fee/expense disclosures — plus annual audited financials and underlying portfolio company details',
    [
      ['Annual reporting only, because PE is a long-duration asset class', 'Modern PE reporting is quarterly at the fund level. Annual-only reporting would be well below ILPA guidance and the institutional LP expectation.'],
      ['Monthly NAV updates and daily liquidity reporting, matching public-market standards', 'PE funds do not produce monthly NAVs or daily liquidity — quarterly is the standard cadence. Public-market reporting frequency does not apply to private vehicles.'],
      ['Reporting is at the GP\'s discretion and varies fund to fund without industry standards', 'ILPA guidance has standardized reporting to a meaningful extent. While details vary, the broad framework (quarterly fund reporting, annual audited financials, standardized capital account format) is now an industry expectation, not an open question.'],
    ],
    'ILPA reporting standards are the institutional baseline. Funds that fall short of the ILPA Reporting Template (introduced 2011, refined repeatedly since) struggle to attract sophisticated LP commitments. Associates working on fundraising materials or LP-facing reports need to know the template by name.'),

  q(4390046, 'Career Skills', CHAPTER, 'Delaware LP structure rationale',
    'A first-time LP asks why almost every US buyout fund is structured as a Delaware Limited Partnership rather than a corporation or LLC. What is the structural answer?',
    'Pass-through tax treatment (no entity-level tax), well-developed Delaware case law on LP duties and partnership disputes, flexibility to structure the LPA commercially, and limited liability for LPs — the combination is unmatched by other US entity forms for pooled investment',
    [
      ['Delaware LPs are required by SEC rules for buyout funds', 'There is no SEC rule mandating Delaware LPs. The structure is a commercial and tax choice, not a regulatory requirement.'],
      ['Delaware LPs are the only structure that limits LP liability to capital committed', 'LLCs and other forms also offer limited liability for members. Delaware LP is preferred for a combination of reasons, not because it is the only limited-liability vehicle available.'],
      ['Delaware LPs avoid all federal taxation of fund income', 'The structure avoids entity-level taxation through pass-through treatment — but the underlying income is still taxed at the LP level. "Avoid all taxation" is a common misstatement of how pass-through works.'],
    ],
    'The Delaware LP is the workhorse vehicle of US private capital for specific structural reasons: pass-through tax, robust case law, commercial flexibility, limited liability. Associates who do not know why the structure exists cannot explain to LPs what they are signing into — and the LPA is the document the entire fund hangs on.'),
]
