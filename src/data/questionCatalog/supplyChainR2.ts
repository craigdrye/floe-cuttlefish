import { makeQuestionBank } from './base'
import type { Question } from './types'

// supplyChainR2 — second-round top-up for the Supply Chain Analyst (supplyChain)
// career track, bringing the bank from 52 to 103 questions. These 51 questions
// deliberately push past the existing conceptual/judgment bank into the
// exam-grade mechanics the syllabus emphasizes: safety-stock z-factors, EOQ,
// Little's Law, takt time, queueing intuition, cash-to-cash, the perfect-order
// product, MAPE/MAD/tracking-signal, the square-root pooling law, total landed
// cost, the four causes of bullwhip, SCOR, Incoterms, and TTR/TTS. Chapter
// labels match the existing supplyChain bank exactly so the chapter grouping
// stays coherent. Facts were web-verified during authoring.

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe supplyChain 103-pass'

export const supplyChainR2Questions: Question[] = makeQuestionBank('Career Skills', [
  // ---------------------------------------------------------------------------
  // Chapter 1: Supply Chain Map and Metrics (7)
  // ---------------------------------------------------------------------------
  {
    id: 7644000,
    chapter: 'Supply Chain Map and Metrics',
    title: 'SCOR backbone',
    prompt:
      'In the ASCM/APICS SCOR model, an analyst is asked which top-level process covers receiving returned defective units from a customer and arranging their disposition. Which SCOR process is that?',
    correct: 'Return',
    wrong: [
      miss('Deliver', 'Deliver covers order management, warehousing, and outbound shipment to the customer — the forward flow, not goods coming back.', 'SCOR has six level-1 processes; one specifically names reverse flows.'),
      miss('Source', 'Source covers procuring and receiving material from suppliers, not handling goods a customer sends back.', 'Think about who the goods come from: a supplier (inbound) or a customer (reverse).'),
      miss('Make', 'Make covers production and assembly that transforms inputs into finished goods, not reverse logistics.', 'Returns are a flow direction, not a transformation step.'),
    ],
    lesson:
      'SCOR organizes a chain into six level-1 processes: Plan, Source, Make, Deliver, Return, and Enable. Return specifically governs reverse flows — defective, MRO, and excess product — including authorization, receipt, and disposition. Naming the right process keeps a chain map and its metrics aligned to standard definitions.',
    source,
    generated: true,
  },
  {
    id: 7644001,
    chapter: 'Supply Chain Map and Metrics',
    title: 'Perfect order math',
    prompt:
      'Orders this month were 95% on-time, 96% complete, 99% damage-free, and 90% with correct documentation. Using the standard perfect-order calculation, what is the perfect-order rate (rounded)?',
    correct: 'About 81%',
    wrong: [
      miss('95%', '95% is just the on-time component; the perfect-order metric requires all four conditions to hold on the same order, so it cannot equal a single dimension.', 'The perfect order needs every dimension to be right at once — combine them, do not pick one.'),
      miss('About 95%', 'Averaging the four percentages (95+96+99+90)/4 = 95% is the wrong operation; a perfect order must clear every gate simultaneously.', 'Are these independent gates an order passes in series, or numbers you average?'),
      miss('100%', 'No dimension is at 100%, and the metric multiplies down, so the result must be below the weakest component (90%).', 'The perfect-order rate can only be lower than its worst single component.'),
    ],
    lesson:
      'The perfect-order metric multiplies the component rates: 0.95 × 0.96 × 0.99 × 0.90 ≈ 0.813, or about 81%. Because the conditions compound, even individually strong components yield a much lower combined number — which is exactly why the perfect order exposes weaknesses that single KPIs (like 95% on-time) hide.',
    source,
    generated: true,
  },
  {
    id: 7644002,
    chapter: 'Supply Chain Map and Metrics',
    title: 'Cash-to-cash cycle',
    prompt:
      'A company holds inventory for 60 days (DIO), collects receivables in 45 days (DSO), and pays suppliers in 30 days (DPO). What is its cash-to-cash (cash conversion) cycle?',
    correct: '75 days',
    wrong: [
      miss('135 days', 'Adding all three (60+45+30) ignores that supplier payment terms finance part of the cycle and must be subtracted, not added.', 'Days you delay paying suppliers shorten how long your own cash is tied up.'),
      miss('45 days', '45 days is just DSO; the cycle must also account for how long cash sits in inventory before any sale.', 'The cycle spans inventory and receivables, offset by payables — not one term alone.'),
      miss('15 days', '15 days subtracts DSO and DPO from DIO (60−45−30); receivables lengthen the cash cycle, so DSO is added, not subtracted.', 'Waiting to collect from customers lengthens the cash tie-up; only supplier terms shorten it.'),
    ],
    lesson:
      'Cash-to-cash = DIO + DSO − DPO = 60 + 45 − 30 = 75 days. It measures how long working capital is tied up between paying for inputs and collecting from customers. Lower is better; stretching DPO or cutting DIO/DSO frees cash — the "cash" leg of the service/cost/cash triangle.',
    source,
    generated: true,
  },
  {
    id: 7644003,
    chapter: 'Supply Chain Map and Metrics',
    title: 'OTIF vs on-time',
    prompt:
      'A carrier reports 99% on-time delivery, but customers complain orders keep arriving short a line item. Which metric directly captures "right things, complete, on the promised date" in one number?',
    correct: 'On-time-in-full (OTIF)',
    wrong: [
      miss('Cycle service level', 'Cycle service level is the probability a replenishment cycle avoids a stockout at a stocking location — an inventory-policy measure, not a delivery-to-customer completeness measure.', 'You want a delivery metric that fails when an order is late OR incomplete.'),
      miss('Inventory turns', 'Turns measure how fast stock cycles through (COGS/avg inventory); they say nothing about whether a specific order arrived on time and complete.', 'Turns describe stock velocity, not order accuracy.'),
      miss('Forecast accuracy', 'Forecast accuracy grades the demand plan, not whether the physical order was delivered correctly.', 'This is about what the customer received, not what was predicted.'),
    ],
    lesson:
      'OTIF counts an order as a success only if it is both on time and complete (in full), so it catches the failure that 99% on-time hides — late-but-complete and on-time-but-short are both misses. It is stricter than on-time alone, which is why it tracks the customer experience more honestly.',
    source,
    generated: true,
  },
  {
    id: 7644004,
    chapter: 'Supply Chain Map and Metrics',
    title: 'Lead time decomposition',
    prompt:
      'An analyst is told replenishment "lead time" is 14 days and wants to know where to attack it. Which breakdown best reflects the components of order lead time?',
    correct: 'Order processing + supplier production/queue + transit + receiving/putaway',
    wrong: [
      miss('Only the carrier transit time', 'Transit is one slice; treating lead time as just shipping ignores order processing, supplier queue, and inbound handling, which often dominate.', 'A 14-day lead time is rarely 14 days on a truck — where else does time go?'),
      miss('Only the time the PO sits awaiting approval', 'Approval delay is a real component but a single internal step; total lead time spans processing through putaway.', 'Lead time is end-to-end, not one handoff.'),
      miss('Demand variability during the period', 'Demand variability drives safety stock, not the duration of the replenishment lead time itself.', 'Variability sizes the buffer; it is not a stage of the lead-time clock.'),
    ],
    lesson:
      'Order lead time is a chain of stages: internal order processing, the supplier\'s queue and production, outbound transit, and your inbound receiving/putaway. Decomposing it tells you where the time actually sits, so you attack the longest or most variable stage rather than assuming "lead time" means transit.',
    source,
    generated: true,
  },
  {
    id: 7644005,
    chapter: 'Supply Chain Map and Metrics',
    title: 'Cost-to-serve trap',
    prompt:
      'A product line looks profitable at the gross-margin level, but a cost-to-serve analysis reassigns warehousing, small-order picking, and expedite freight to each account. What does cost-to-serve most often reveal?',
    correct: 'Some high-revenue accounts are unprofitable once order-handling and logistics costs are traced to them',
    wrong: [
      miss('That gross margin already captures all relevant costs', 'Gross margin excludes downstream fulfillment costs (handling, freight, returns) that cost-to-serve precisely reallocates; that omission is the whole point of the analysis.', 'If gross margin captured everything, there would be no reason to run cost-to-serve.'),
      miss('That the cheapest carrier is always the right choice', 'Cost-to-serve is an account/customer profitability lens, not a carrier-selection rule, and cheapest carrier can raise service penalties.', 'This metric is about which customers cost you, not which lane is cheapest.'),
      miss('That all customers cost the same to serve', 'The reason to compute cost-to-serve is that customers differ sharply — small frequent orders and heavy expediting cost far more per unit.', 'If everyone cost the same, the analysis would be pointless.'),
    ],
    lesson:
      'Cost-to-serve traces fulfillment costs — order handling, picking, freight, returns, expedites — down to the account or order. It frequently flips the profitability picture: a large account that orders in small, frequent, rush batches can be a net loss even at healthy gross margin. It is the analyst\'s answer to "which revenue is actually worth having."',
    source,
    generated: true,
  },
  {
    id: 7644006,
    chapter: 'Supply Chain Map and Metrics',
    title: 'Information lag',
    prompt:
      'A chain map shows goods flowing supplier → factory → DC → store, but POS sales data only reaches the factory once a week in a batch upload. Why does the syllabus warn that information flow usually breaks before material flow?',
    correct: 'A lagged or batched demand signal makes upstream tiers react late and over-correct, even when trucks still run on time',
    wrong: [
      miss('Because trucks are more reliable than data, so material flow never fails', 'Material flow absolutely fails too; the point is that the order signal degrades first and silently, not that goods never break down.', 'The warning is about which failure shows up first and quietly, not which never happens.'),
      miss('Because information flow has no effect on inventory decisions', 'Information flow drives every replenishment and production decision; a lagged signal directly mis-sizes orders.', 'If information did not drive decisions, batching the data would not matter.'),
      miss('Because POS data is always perfectly accurate when it does arrive', 'Accuracy is not the issue here — timing is; even accurate data arriving weekly causes upstream tiers to react to stale demand.', 'The problem stated is the weekly batch (lag), not data quality.'),
    ],
    lesson:
      'A chain couples three flows — material, information, and cash. The information flow (the demand signal) usually distorts or lags before the physical flow visibly fails: batched, delayed POS data makes each upstream tier forecast off stale orders, amplifying swings. Mapping only the trucks misses the failure that arrives first.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 2: Demand and Forecasting (7)
  // ---------------------------------------------------------------------------
  {
    id: 7644007,
    chapter: 'Demand and Forecasting',
    title: 'MAD from errors',
    prompt:
      'Over four weeks the forecast errors (actual − forecast) were +10, −20, +30, and −40 units. What is the mean absolute deviation (MAD)?',
    correct: '25 units',
    wrong: [
      miss('-5 units', '−5 is the mean of the signed errors (which measures bias). MAD uses absolute values, so the signs are dropped before averaging.', 'MAD ignores direction — take absolute values first.'),
      miss('100 units', '100 is the sum of the absolute errors (10+20+30+40), not the mean; MAD divides by the number of periods.', 'MAD is an average, so divide the absolute-error total by 4.'),
      miss('20 units', '20 reflects only some of the errors or a miscount; |10|+|20|+|30|+|40| = 100, and 100/4 = 25.', 'Add all four absolute errors, then divide by four.'),
    ],
    lesson:
      'MAD = mean of the absolute errors = (|+10|+|−20|+|+30|+|−40|)/4 = 100/4 = 25 units. MAD measures the typical size of error regardless of direction. Note the mean signed error here is −5, which is the bias — a separate question from how big the misses are.',
    source,
    generated: true,
  },
  {
    id: 7644008,
    chapter: 'Demand and Forecasting',
    title: 'Tracking signal trips',
    prompt:
      'A planner monitors a tracking signal (cumulative forecast error ÷ MAD) and uses the common control limit of ±4. The signal reads +5.2 for three months. What does this indicate?',
    correct: 'A persistent bias — the forecast is consistently under-forecasting and the process needs correction',
    wrong: [
      miss('Healthy random error within control', 'A value of +5.2 is outside the ±4 limit, so it is precisely not within control — the signal is flagging systematic bias.', 'Compare the reading to the limit: is 5.2 inside ±4?'),
      miss('Over-forecasting that is building excess inventory', 'With error defined as actual − forecast, a large positive tracking signal means actual keeps exceeding forecast — under-forecasting, which tends to cause stockouts, not excess.', 'Positive error (actual > forecast) means forecasts came in low.'),
      miss('A data error, since a tracking signal cannot exceed 4', 'The ±4 figure is a control limit for action, not a mathematical ceiling; the signal can and does exceed it, which is the alarm.', 'The limit is a threshold to act on, not a cap on the value.'),
    ],
    lesson:
      'Tracking signal = cumulative (signed) forecast error ÷ MAD. With error = actual − forecast, a value beyond about ±4 signals bias rather than noise; +5.2 means actual keeps beating forecast — persistent under-forecasting that will starve inventory. The fix is to review assumptions, not to wait for it to average out.',
    source,
    generated: true,
  },
  {
    id: 7644009,
    chapter: 'Demand and Forecasting',
    title: 'MAPE blind spot',
    prompt:
      'An item has very low, intermittent demand — many weeks of zero, occasional spikes. Why is MAPE a poor accuracy measure here?',
    correct: 'MAPE divides error by actual demand, so weeks with zero or near-zero demand blow up or are undefined',
    wrong: [
      miss('MAPE always understates error for slow movers', 'The problem is instability and division-by-zero, not a consistent understatement; MAPE can swing wildly high on intermittent series.', 'Think about what happens to error/actual when actual is zero.'),
      miss('MAPE cannot be computed for any seasonal item', 'Seasonality is not the issue; MAPE handles steady seasonal demand fine. The breakdown is specifically zero/near-zero actuals.', 'The trigger is intermittent zeros, not a seasonal pattern.'),
      miss('MAPE is identical to bias, so it adds nothing', 'MAPE measures error magnitude as a percentage, not direction; it is distinct from bias and not redundant with it.', 'MAPE is about size of error, not direction — these are different things.'),
    ],
    lesson:
      'MAPE = mean of |actual − forecast| ÷ actual. When actual demand is zero, the term is undefined; when it is tiny, a small absolute miss becomes a huge percentage. For intermittent demand, analysts prefer measures less hostile to zeros — MAD, or scaling error against average demand — rather than MAPE.',
    source,
    generated: true,
  },
  {
    id: 7644010,
    chapter: 'Demand and Forecasting',
    title: 'Four causes of bullwhip',
    prompt:
      'In the Lee, Padmanabhan, and Whang analysis of the bullwhip effect, which of the following is one of the four operational causes of demand amplification?',
    correct: 'Order batching — placing larger, less frequent orders instead of ordering to actual consumption',
    wrong: [
      miss('Holding too little safety stock at the retailer', 'Bullwhip is about variance amplification up the chain from ordering behavior; thin retailer safety stock is not one of the four named causes (demand signal processing, batching, price fluctuation, shortage gaming).', 'The four causes are behaviors that distort the order signal, not buffer-sizing choices.'),
      miss('Using point-of-sale data to forecast', 'Sharing true POS demand actually dampens bullwhip; relying on downstream orders instead (demand signal processing) is the cause.', 'POS sharing is a cure, not a cause.'),
      miss('A single sourcing region for a component', 'Single-region sourcing is a resilience/concentration risk, not a driver of demand-variance amplification.', 'Bullwhip is about order-signal distortion, not supplier geography.'),
    ],
    lesson:
      'The classic four causes of bullwhip are demand signal processing (re-forecasting off received orders, not end demand), order batching, price fluctuation (forward-buying on promotions), and rationing/shortage gaming (inflating orders when supply is scarce). Each amplifies order variance moving upstream; countermeasures share real demand and smooth ordering.',
    source,
    generated: true,
  },
  {
    id: 7644011,
    chapter: 'Demand and Forecasting',
    title: 'Forecast value-add',
    prompt:
      'A demand-planning team adds human overrides on top of a statistical baseline. The "forecast value-add" (FVA) analysis shows the overridden forecast has worse error than the plain baseline. What is the correct conclusion?',
    correct: 'The manual overrides are destroying value and the baseline should be trusted more often',
    wrong: [
      miss('The baseline must be wrong because humans added information', 'FVA exists precisely to test that assumption; here the data show overrides made error worse, so the added "information" was net noise.', 'FVA is a measurement — let the error numbers, not the seniority of the editor, decide.'),
      miss('Override more aggressively to overcome the baseline', 'Doubling down on an intervention that already worsened accuracy compounds the damage; FVA says do less, not more.', 'If overrides hurt, the answer is fewer overrides, not bigger ones.'),
      miss('FVA cannot compare a human forecast to a statistical one', 'Comparing each step against a naive or statistical baseline is exactly what FVA does; that comparison is its core output.', 'Benchmarking process steps against a baseline is the definition of FVA.'),
    ],
    lesson:
      'Forecast value-add measures whether each process step — statistical model, then human override, then consensus — improves accuracy over a naive baseline. If overrides have worse error than the statistical forecast, they are subtracting value, and the disciplined response is to override less and let the model run. FVA keeps well-meaning judgment honest.',
    source,
    generated: true,
  },
  {
    id: 7644012,
    chapter: 'Demand and Forecasting',
    title: 'Horizon mismatch',
    prompt:
      'A part has a six-week replenishment lead time. The team proudly reports that its one-week-ahead forecast is highly accurate. Why is this reassurance misleading for the inventory decision?',
    correct: 'The replenishment decision depends on demand over the lead time, so the six-week-ahead forecast accuracy is what matters',
    wrong: [
      miss('One-week accuracy guarantees six-week accuracy', 'Error generally grows with horizon; strong one-week accuracy says little about the six-week-ahead forecast that the order actually depends on.', 'Does forecast error usually shrink or grow as you forecast further out?'),
      miss('Lead time is irrelevant to which horizon to grade', 'Lead time sets the horizon you must forecast over, because you commit the order now to cover demand that arrives a lead time later.', 'You order today for demand that lands one lead time from now — grade that window.'),
      miss('The forecast should be graded on last week\'s actuals only', 'Backward-looking actuals do not test the forward horizon the decision rides on; the relevant test is accuracy at the lead-time horizon.', 'Grade the forecast on the horizon the decision feeds, not on the past.'),
    ],
    lesson:
      'A forecast must be graded on the horizon the decision feeds. With a six-week lead time, you place an order today to cover demand six weeks out, so the six-week-ahead accuracy governs stockouts and overstock — not the easy one-week number. Aligning forecast horizon to lead time is a core demand-review discipline.',
    source,
    generated: true,
  },
  {
    id: 7644013,
    chapter: 'Demand and Forecasting',
    title: 'Accuracy versus bias',
    prompt:
      'Forecast A is off by ±40 units randomly each week, averaging to roughly zero net error. Forecast B is off by a steady +15 units every week. Which statement is correct?',
    correct: 'A is less biased but less accurate; B is more accurate on average error size but carries a persistent bias that builds excess',
    wrong: [
      miss('B is better in every way because its weekly error is smaller', 'B\'s steady +15 is a systematic bias that accumulates into excess inventory or overstated supply, even though each miss is small — "smaller error" alone is not the whole story.', 'A small but always-same-direction error compounds; size is not the only axis.'),
      miss('A is better in every way because it averages to zero', 'Averaging to zero hides large swings; A\'s ±40 still drives stockouts and overstock week to week even with no net bias.', 'Zero average net error can still mean big, costly weekly misses.'),
      miss('Bias and accuracy are the same thing, so the comparison is meaningless', 'Bias is the direction/accumulation of error; accuracy is its typical size. They are independent, which is exactly why one forecast can win on one and lose on the other.', 'One measures which way you miss; the other measures how far — different axes.'),
    ],
    lesson:
      'Accuracy (typical error size, e.g., MAD/MAPE) and bias (systematic direction, e.g., mean error/tracking signal) are independent. A forecast can be unbiased but noisy, or precise but persistently skewed. Both matter: noise drives buffer size; bias quietly builds excess stock or chronic shortage. A good review reports both.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 3: Inventory and Service Levels (9)
  // ---------------------------------------------------------------------------
  {
    id: 7644014,
    chapter: 'Inventory and Service Levels',
    title: 'EOQ formula',
    prompt:
      'Annual demand is 10,000 units, ordering cost is $50 per order, and annual holding cost is $4 per unit. Using the economic order quantity formula, what is the EOQ?',
    correct: '500 units',
    wrong: [
      miss('250 units', '250 drops the factor of 2 inside the root: √(2·10000·50/4) = √250000 = 500, not √62500.', 'Check the 2 in the numerator: EOQ = √(2DS/H).'),
      miss('1,000 units', '1,000 squares to 1,000,000, which would require 2DS/H = 1,000,000; here 2DS/H = 250,000, whose root is 500.', 'Compute 2DS/H first, then take its square root.'),
      miss('5,000 units', '5,000 looks like demand split crudely, not the EOQ; the formula balances ordering and holding cost via a square root.', 'EOQ is not a fraction of annual demand — apply √(2DS/H).'),
    ],
    lesson:
      'EOQ = √(2DS/H) = √(2·10,000·50/4) = √250,000 = 500 units. The formula finds the order size that minimizes the sum of ordering cost (falls as orders get bigger) and holding cost (rises as orders get bigger). It assumes steady demand and fixed costs — useful as a baseline, not a law.',
    source,
    generated: true,
  },
  {
    id: 7644015,
    chapter: 'Inventory and Service Levels',
    title: 'Safety stock z-factor',
    prompt:
      'Weekly demand has a standard deviation of 100 units over a fixed one-week lead time. To move from a 95% to a 99% cycle service level, the z-factor rises from about 1.65 to about 2.33. Roughly how much does required safety stock change?',
    correct: 'It rises from about 165 to about 233 units — roughly a 40% increase for the last 4 points of service',
    wrong: [
      miss('It stays about the same because both are "high" service levels', 'Safety stock = z × σ, and z jumps from 1.65 to 2.33, so the buffer rises by about 41% — the top of the service curve is expensive, not flat.', 'Safety stock is proportional to z; compare 2.33 to 1.65.'),
      miss('It rises about 4% to match the 4-point service gain', 'Safety stock scales with the z-factor, not linearly with the service percentage; a 4-point service gain near the top costs far more than 4% of stock.', 'The cost of service is nonlinear — it tracks z, not the percentage gap.'),
      miss('It falls, because higher service needs less buffer', 'Higher service requires a larger z and therefore more safety stock, not less — the relationship runs the other way.', 'More protection against stockouts means more buffer, so z and safety stock both rise.'),
    ],
    lesson:
      'Safety stock ≈ z × σ_demand × √(lead time). With σ = 100 and one-week lead time, 95% needs ≈1.65×100 = 165 units and 99% needs ≈2.33×100 = 233 units — about 40% more stock for 4 points of service. The service-to-safety-stock curve is nonlinear and steep at the top, which is why the last points of service are the most expensive.',
    source,
    generated: true,
  },
  {
    id: 7644016,
    chapter: 'Inventory and Service Levels',
    title: 'Reorder point with safety stock',
    prompt:
      'Average daily demand is 50 units, lead time is 8 days, and the policy sets safety stock at 120 units. What is the reorder point?',
    correct: '520 units',
    wrong: [
      miss('400 units', '400 is demand during lead time (50×8) but omits the safety stock; the reorder point adds the buffer on top.', 'Reorder point = lead-time demand PLUS safety stock.'),
      miss('170 units', '170 adds safety stock to one day of demand (50+120), ignoring the full 8-day lead-time demand.', 'Multiply daily demand by the whole lead time, then add the buffer.'),
      miss('640 units', '640 double-counts or mis-multiplies; the correct figure is 50×8 + 120 = 520.', 'Lead-time demand is 50×8 = 400, then add 120.'),
    ],
    lesson:
      'Reorder point = (average demand during lead time) + safety stock = (50 × 8) + 120 = 520 units. The first term covers expected demand while you wait for replenishment; the safety stock covers variability so a normal demand spike during the lead time does not cause a stockout before the order lands.',
    source,
    generated: true,
  },
  {
    id: 7644017,
    chapter: 'Inventory and Service Levels',
    title: 'Lead-time variability dominates',
    prompt:
      'Two SKUs have identical demand variability. SKU X has a rock-steady 10-day lead time; SKU Y averages 10 days but swings between 5 and 20 days. Why does Y typically need much more safety stock?',
    correct: 'Lead-time variability adds to the total variability the buffer must cover, and it often dominates demand variability',
    wrong: [
      miss('They need the same safety stock because average lead time is equal', 'Safety stock covers variability, not just the average; Y\'s swinging lead time injects extra uncertainty that the buffer must absorb.', 'Equal averages can hide very different variability — the buffer pays for variability.'),
      miss('X needs more because a steady lead time is riskier', 'A steady lead time is predictable and therefore needs less buffer; unpredictability is what drives safety stock up.', 'Predictable supply is easier to plan for, not harder.'),
      miss('Lead-time variability is irrelevant once demand variability is known', 'The standard safety-stock formula has a distinct term for lead-time variability, which frequently exceeds the demand-variability term in size.', 'There are two sources of variability here, not one.'),
    ],
    lesson:
      'Safety stock must cover combined demand and lead-time variability. The full formula includes a term proportional to demand × σ_leadtime, which is often the larger contributor. Sizing a buffer for demand swings while ignoring an erratic supplier lead time is a classic, expensive miss — Y needs far more stock than X despite the same average lead time.',
    source,
    generated: true,
  },
  {
    id: 7644018,
    chapter: 'Inventory and Service Levels',
    title: 'Inventory turns',
    prompt:
      'A warehouse has annual cost of goods sold of $6,000,000 and average inventory valued at $1,000,000. What is its inventory turnover, and roughly how many days of inventory does that imply?',
    correct: '6 turns per year, about 61 days of inventory',
    wrong: [
      miss('6 turns, about 6 days of inventory', 'Turns and days of inventory are inverses scaled by 365: 365/6 ≈ 61 days, not 6 days; the two numbers are not the same.', 'Days of inventory ≈ 365 ÷ turns — convert, do not copy the turns number.'),
      miss('0.17 turns, about 2,190 days', '0.17 inverts the ratio (inventory/COGS); turnover is COGS ÷ average inventory = 6, not inventory ÷ COGS.', 'Turns put COGS on top: COGS ÷ average inventory.'),
      miss('60 turns, about 6 days', '60 mis-scales the ratio by a factor of ten; 6,000,000 ÷ 1,000,000 = 6, not 60.', 'Divide $6.0M by $1.0M carefully — it is 6.'),
    ],
    lesson:
      'Inventory turnover = COGS ÷ average inventory = $6M ÷ $1M = 6 turns/year. Days of inventory ≈ 365 ÷ turns ≈ 61 days. High turns can mean either efficient flow or chronic stockouts; low turns can mean caution or dead stock — so the number always needs context, not a reflexive "higher is better."',
    source,
    generated: true,
  },
  {
    id: 7644019,
    chapter: 'Inventory and Service Levels',
    title: 'ABC segmentation',
    prompt:
      'In a classic ABC inventory analysis built on the Pareto principle, what typically characterizes the "A" items?',
    correct: 'A small share of SKUs (roughly the top 20%) that account for the large majority of annual usage value',
    wrong: [
      miss('The cheapest, slowest-moving SKUs that rarely sell', 'Those are typically C items; A items are the high-value, high-throughput SKUs that dominate usage value, not the slow tail.', 'A items drive most of the value — that is the opposite of slow and cheap.'),
      miss('The SKUs with the most suppliers, regardless of value', 'ABC ranks by annual usage value (unit cost × volume), not supplier count; supplier breadth is a different dimension.', 'ABC sorts by dollar usage, not how many vendors a part has.'),
      miss('An even one-third split of SKUs into A, B, and C by count', 'ABC is deliberately uneven: a few A SKUs carry most of the value, reflecting the Pareto 80/20 pattern, not equal thirds.', 'The whole point of ABC is that the classes are unequal in value.'),
    ],
    lesson:
      'ABC analysis applies Pareto: a small fraction of SKUs (the A items, often ~20%) drives most of the annual usage value (often ~80%), while many C items contribute little. This justifies tight control and higher service on A items and looser, cheaper policy on Cs — instead of one blanket policy that over-serves the tail and under-serves the vital few.',
    source,
    generated: true,
  },
  {
    id: 7644020,
    chapter: 'Inventory and Service Levels',
    title: 'Cycle service vs fill rate',
    prompt:
      'A SKU achieves a 95% cycle service level (it avoids a stockout in 95% of replenishment cycles), yet its fill rate is only 80%. How is this possible?',
    correct: 'The few cycles that do stock out involve large unmet quantities, so a high cycle service level can coexist with a lower fill rate',
    wrong: [
      miss('It is impossible; cycle service level and fill rate are always equal', 'They measure different things — frequency of any stockout versus fraction of demand met — and routinely differ, especially with lumpy demand.', 'One counts how often you stock out; the other counts how much demand you miss.'),
      miss('Fill rate must be higher than cycle service level by definition', 'Neither dominates universally; with large shortfalls in the failing cycles, fill rate can sit well below cycle service level.', 'There is no fixed ordering between the two — it depends on shortfall size.'),
      miss('The fill rate calculation must be wrong', 'Both can be correct simultaneously; a 95% cycle service level with an 80% fill rate is a normal pattern when stockouts are deep.', 'Both numbers can be right at once — they answer different questions.'),
    ],
    lesson:
      'Cycle service level (Type 1) is the probability a replenishment cycle has no stockout — a binary, per-cycle measure. Fill rate (Type 2) is the fraction of demand met immediately from stock — a volumetric measure. If the rare stockouts are large, you can stock out seldom (95% cycles clean) yet still leave 20% of demand unmet (80% fill). Always state which one a "service level" means.',
    source,
    generated: true,
  },
  {
    id: 7644021,
    chapter: 'Inventory and Service Levels',
    title: 'Anticipation stock',
    prompt:
      'A factory builds extra finished goods over the summer ahead of a predictable December sales peak it cannot fully produce in-season. What type of inventory is this?',
    correct: 'Anticipation (or seasonal) stock',
    wrong: [
      miss('Safety stock', 'Safety stock buffers random demand or supply variability; this build is a planned response to a known, predictable seasonal peak, not to uncertainty.', 'Is this covering a surprise, or a peak you can see on the calendar?'),
      miss('Cycle stock', 'Cycle stock is the working inventory between routine replenishments driven by order quantity; here the build is specifically pre-positioned for a forecasted seasonal surge.', 'Cycle stock comes from ordering in batches, not from pre-building for a season.'),
      miss('In-transit stock', 'In-transit (pipeline) stock is inventory currently moving between locations; this is finished goods held to cover a future seasonal spike.', 'In-transit means "on the truck/ship right now," not "stored for December."'),
    ],
    lesson:
      'Anticipation (seasonal) stock is built ahead of a known demand surge or supply interruption when capacity cannot meet the peak in-season. It is distinct from cycle stock (order-batch working inventory), safety stock (buffer for variability), and in-transit/pipeline stock (units currently moving). Naming the role correctly tells you why it is there and when it should draw down.',
    source,
    generated: true,
  },
  {
    id: 7644022,
    chapter: 'Inventory and Service Levels',
    title: 'XYZ overlay',
    prompt:
      'A planner already has an ABC classification by value and adds an XYZ classification. What does the XYZ axis add that ABC alone does not?',
    correct: 'It segments items by demand variability/predictability, so policy can reflect how forecastable an item is, not just how valuable',
    wrong: [
      miss('It re-ranks items by unit price only', 'Unit price feeds the value dimension ABC already captures; XYZ instead grades how steady or erratic the demand is.', 'ABC already handles value — what new dimension would justify a second axis?'),
      miss('It counts the number of suppliers per SKU', 'Supplier count is a sourcing-risk attribute, not what XYZ measures; XYZ is about demand predictability.', 'XYZ is a demand-pattern lens, not a supplier lens.'),
      miss('It replaces ABC entirely with a single combined score', 'XYZ is an overlay used alongside ABC to form a grid (e.g., AX, CZ), not a replacement that collapses the value dimension.', 'The two axes work together as a matrix, not one instead of the other.'),
    ],
    lesson:
      'ABC ranks SKUs by value; XYZ ranks them by demand variability — X = steady/predictable, Z = erratic/intermittent. Overlaying them yields a grid (AX, AZ, CX, …) that sets smarter policy: an AZ item (high value, hard to forecast) needs more buffer and attention than an AX item (high value, steady) at the same service target.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 4: Suppliers and Sourcing Risk (6)
  // ---------------------------------------------------------------------------
  {
    id: 7644023,
    chapter: 'Suppliers and Sourcing Risk',
    title: 'Total cost of ownership',
    prompt:
      'Supplier A quotes $9.50/unit; Supplier B quotes $10.00/unit but has half the defect rate, ships on time, and needs no expedites. On a total-cost-of-ownership basis, why might B win?',
    correct: 'TCO adds quality fallout, expedite freight, and the inventory carried to cover unreliability to the unit price, which can erase A\'s $0.50 edge',
    wrong: [
      miss('B can never win because its unit price is higher', 'Unit price is only one line of TCO; defects, expedites, and buffer inventory tied to A\'s unreliability are real costs that can outweigh $0.50.', 'The cheapest sticker price is not the cheapest total — what else does A cost you?'),
      miss('Only the purchase price belongs in a sourcing decision', 'Sourcing decisions explicitly include downstream costs of poor quality and delivery; ignoring them is the trap TCO exists to fix.', 'TCO is defined by counting more than the invoice — that is its whole purpose.'),
      miss('Defect rate is a quality metric and irrelevant to cost', 'Defects drive scrap, rework, returns, and lost sales — all costs; quality and cost are tightly linked in TCO.', 'A defect is not free — it shows up as cost downstream.'),
    ],
    lesson:
      'Total cost of ownership counts unit price plus the costs that price hides: quality fallout (scrap, rework, returns), late-delivery penalties and expedite freight, and the extra inventory carried to cover an unreliable source. A slightly pricier, reliable supplier often wins on TCO. Ranking on unit price alone is the most common sourcing mistake.',
    source,
    generated: true,
  },
  {
    id: 7644024,
    chapter: 'Suppliers and Sourcing Risk',
    title: 'False dual-sourcing',
    prompt:
      'A bill of materials lists two approved suppliers for a critical chip, so the part is marked "dual-sourced." A risk scan finds both suppliers buy the same wafer from one fab in one country. What is the real risk status?',
    correct: 'It is effectively single-sourced at the sub-tier — a shared upstream dependency defeats the apparent redundancy',
    wrong: [
      miss('It is genuinely dual-sourced because two suppliers are approved', 'Tier-1 redundancy is an illusion when both depend on the same sub-tier or raw material; a shock to the shared fab takes out both.', 'Trace the supply one level deeper — where does each "alternate" actually buy from?'),
      miss('Sub-tier dependencies do not matter to continuity risk', 'Sub-tier visibility is central to continuity risk; the failure that hurts you may be two levels up, not at your direct supplier.', 'Your supplier\'s supplier can stop your line just as surely as your supplier.'),
      miss('Dual-sourcing only requires two purchase orders', 'Two POs to two names is not redundancy if they converge upstream; meaningful dual-sourcing requires independent supply paths.', 'Redundancy is about independent paths, not the count of vendors on a PO.'),
    ],
    lesson:
      'Dual-sourcing only buys resilience if the two sources are truly independent — different sub-tiers, different raw-material origins, different geographies. Two approved suppliers fed by one fab share a single point of failure upstream. A single-point-of-failure scan must look past tier-1 to where the supply chains actually converge.',
    source,
    generated: true,
  },
  {
    id: 7644025,
    chapter: 'Suppliers and Sourcing Risk',
    title: 'Tail risk hides in averages',
    prompt:
      'Supplier A is 98% on-time but once every few years fails completely for two months. Supplier B is 92% on-time with only minor, frequent slips. A scorecard ranking on average on-time would prefer A. What is the danger?',
    correct: 'The average hides A\'s rare, catastrophic tail failure, which can cause far more damage than B\'s frequent minor slips',
    wrong: [
      miss('A is clearly safer because 98% beats 92%', 'A single average conflates frequent-small with rare-huge failures; A\'s two-month outage is a far bigger operational hit than B\'s small slips.', 'Ask what the worst single event looks like, not just the average.'),
      miss('B is riskier because it misses more often', 'Frequent small misses are usually absorbable with modest buffers; the rare massive outage is the one that breaks the line.', 'Which failure actually threatens continuity — many tiny ones or one huge one?'),
      miss('Tail risk is irrelevant if the average is good', 'Tail risk is exactly what averages erase, and it is where catastrophic supply failures live; resilience work targets the tail.', 'Averages smooth away the very events resilience cares about.'),
    ],
    lesson:
      'Averages smooth over distribution shape. A supplier can post a great average on-time figure yet carry a rare, correlated, catastrophic failure mode — the kind that idles a plant. Risk-aware scorecards look at the tail (worst-case duration and frequency, correlation across suppliers), not just the headline average, because the expensive failures are the quiet, infrequent ones.',
    source,
    generated: true,
  },
  {
    id: 7644026,
    chapter: 'Suppliers and Sourcing Risk',
    title: 'Weighted scorecard math',
    prompt:
      'A supplier scorecard weights cost 30%, quality 40%, delivery 20%, and responsiveness 10%. A supplier scores 60, 90, 70, and 50 (out of 100) on those. What is its weighted score?',
    correct: '73',
    wrong: [
      miss('67.5', '67.5 is the simple unweighted average of 60, 90, 70, 50; the scorecard requires applying the 30/40/20/10 weights.', 'Multiply each score by its weight before summing — do not take a plain average.'),
      miss('70', '70 ignores the weighting and lands near the middle by eye; the weighted sum is 0.3·60 + 0.4·90 + 0.2·70 + 0.1·50 = 73.', 'Compute each weighted term and add: 18 + 36 + 14 + 5.'),
      miss('90', '90 is just the quality score; weighting blends all four dimensions, it does not adopt the highest one.', 'A weighted score combines every dimension, not the best single one.'),
    ],
    lesson:
      'Weighted score = Σ(weight × dimension score) = 0.30·60 + 0.40·90 + 0.20·70 + 0.10·50 = 18 + 36 + 14 + 5 = 73. Explicit weights force the buyer to state what matters most (here, quality) and make the ranking defensible. The weights, not the raw scores, often decide the outcome — so they deserve as much scrutiny as the data.',
    source,
    generated: true,
  },
  {
    id: 7644027,
    chapter: 'Suppliers and Sourcing Risk',
    title: 'Qualification lead time',
    prompt:
      'A sole-source casting supplier in a hurricane-prone region is the only approved vendor for a safety-critical part with a 9-month qualification cycle. What is the most important resilience implication?',
    correct: 'The 9-month qualification means a backup must be developed before a disruption, because you cannot qualify a new source fast enough to recover after one hits',
    wrong: [
      miss('You can simply switch to any other casting shop the day a hurricane hits', 'A safety-critical part needs formal qualification (testing, approvals) that takes 9 months; no instant switch exists, so post-disruption scrambling fails.', 'How long does it take to approve a new source for a safety-critical part?'),
      miss('Qualification lead time is irrelevant once a disruption occurs', 'It is the dominant constraint after a disruption: recovery is gated by how fast a compliant alternate can be qualified, not by how fast you can find one.', 'After the storm, what gates how quickly you can use a different supplier?'),
      miss('Holding any safety stock makes qualification time a non-issue', 'Safety stock only buys time; if the outage exceeds coverage and qualification takes 9 months, you still face a gap unless a source was pre-qualified.', 'Buffer helps, but does it last 9 months while you qualify someone new?'),
    ],
    lesson:
      'For safety-critical or regulated parts, qualifying a new source can take many months. That lead time means resilience must be built before a disruption — pre-qualifying an alternate, or carrying enough buffer to outlast the qualification gap — because you cannot qualify a replacement quickly enough to recover after the disruption has already started.',
    source,
    generated: true,
  },
  {
    id: 7644028,
    chapter: 'Suppliers and Sourcing Risk',
    title: 'Redundancy versus flexibility',
    prompt:
      'Two resilience strategies: (1) keep a second qualified supplier on standby for each critical part; (2) design products and lines so capacity can be re-routed across plants and parts. How do these differ?',
    correct: 'Redundancy adds dedicated backup at standing cost; flexibility builds the ability to reconfigure existing resources to absorb many different shocks',
    wrong: [
      miss('They are the same strategy under two names', 'Redundancy (spare, dedicated capacity) and flexibility (reconfigurable capacity) are distinct resilience levers with different cost profiles and coverage.', 'One holds a spare; the other reshapes what it already has — not the same thing.'),
      miss('Flexibility is always cheaper and strictly better than redundancy', 'Flexibility can be powerful but is not free or universally superior; some critical, hard-to-reconfigure parts genuinely need dedicated redundancy.', 'Each lever fits different situations; neither dominates everywhere.'),
      miss('Redundancy eliminates the need to forecast disruptions', 'Redundancy reduces impact for the covered part but does not remove the need to anticipate and prioritize exposures across the network.', 'Holding a backup for one part still leaves the rest of the network to assess.'),
    ],
    lesson:
      'Resilience strategies include redundancy (dedicated spare suppliers/capacity/inventory — reliable but costly and idle), flexibility (reconfigurable capacity, multi-skilled labor, common platforms — covers many shocks at lower standing cost), and visibility (seeing disruptions early). The art is targeting the few exposures that threaten service or survival rather than holding redundancy everywhere.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 5: Operations and Capacity (7)
  // ---------------------------------------------------------------------------
  {
    id: 7644029,
    chapter: 'Operations and Capacity',
    title: "Little's Law WIP",
    prompt:
      'A fulfillment line processes 500 orders per hour (throughput) and each order spends on average 2 hours in the system. By Little\'s Law, what is the average work-in-process (WIP)?',
    correct: '1,000 orders',
    wrong: [
      miss('250 orders', '250 divides throughput by time (500/2); Little\'s Law multiplies them: WIP = throughput × flow time.', 'Little\'s Law is a product, not a quotient: WIP = throughput × time-in-system.'),
      miss('502 orders', '502 adds the two figures, but Little\'s Law combines them multiplicatively, not additively.', 'Do not add 500 and 2 — multiply them.'),
      miss('500 orders', '500 is just the hourly throughput; WIP also depends on how long each order stays, here 2 hours.', 'Throughput alone is not WIP — fold in the 2-hour dwell time.'),
    ],
    lesson:
      'Little\'s Law: WIP = throughput × flow time = 500 orders/hr × 2 hr = 1,000 orders. It links the three core flow variables, so knowing any two gives the third. It is invaluable for sanity-checking a process: if measured WIP, throughput, and lead time do not satisfy the relation, your data or your understanding is off.',
    source,
    generated: true,
  },
  {
    id: 7644030,
    chapter: 'Operations and Capacity',
    title: 'Takt time',
    prompt:
      'A line runs 8 hours a day with 60 minutes of scheduled breaks, leaving 420 productive minutes. Customer demand is 210 units per day. What is the takt time?',
    correct: '2 minutes per unit',
    wrong: [
      miss('2.29 minutes per unit', '2.29 uses the full 480 minutes instead of the 420 available after breaks; takt uses net available production time.', 'Use the productive minutes (420), not the full shift (480).'),
      miss('0.5 minutes per unit', '0.5 inverts the calculation (demand ÷ time); takt time is available time ÷ demand, giving minutes per unit.', 'Takt = available time ÷ demand, so the units are minutes per unit, not units per minute.'),
      miss('210 minutes per unit', '210 is the demand count, not a time; takt divides 420 available minutes by 210 units.', 'Divide the 420 available minutes by the 210 units of demand.'),
    ],
    lesson:
      'Takt time = available production time ÷ customer demand = 420 min ÷ 210 units = 2 minutes per unit. It is the rhythm the line must hit to exactly meet demand. If actual cycle time exceeds takt you fall behind; if it is much faster you overproduce. Takt links the floor pace directly to customer demand.',
    source,
    generated: true,
  },
  {
    id: 7644031,
    chapter: 'Operations and Capacity',
    title: 'Utilization and queues',
    prompt:
      'A single workstation with variable processing times is pushed from 80% to 95% utilization. What happens to average queue/wait time, and why?',
    correct: 'It rises sharply and nonlinearly, because with variability there is less slack to absorb bumps as utilization approaches 100%',
    wrong: [
      miss('It rises by roughly the same 15 points the utilization rose', 'Queueing is nonlinear: wait time explodes as utilization nears 100%, so a 15-point utilization rise can multiply waiting many times over.', 'Wait time does not rise in lockstep with utilization — it curves up steeply near full.'),
      miss('It falls, because higher utilization means the station is more efficient', 'High utilization keeps the resource busy but leaves no slack for variability, which lengthens queues, not shortens them.', 'Busy is not the same as fast through the queue — slack is what absorbs variability.'),
      miss('It is unchanged, because the station\'s capacity did not change', 'Capacity is fixed, but the gap between arrival rate and capacity shrank; with variability, that shrinking slack drives waiting up.', 'Same capacity, but less headroom — and headroom is what protects wait times.'),
    ],
    lesson:
      'For a resource with variability, waiting time grows nonlinearly with utilization and blows up as utilization approaches 100% — the last points of utilization are extremely expensive in lead time. This is why pushing a variable process toward full utilization, far from being efficient, can choke flow. Slack is the price of short, predictable queues.',
    source,
    generated: true,
  },
  {
    id: 7644032,
    chapter: 'Operations and Capacity',
    title: 'Effective vs theoretical capacity',
    prompt:
      'A machine is rated at 100 units/hour (theoretical capacity), but with changeovers, planned maintenance, and minor stoppages it reliably delivers 70 units/hour. Which figure should capacity planning use for committing to a demand plan?',
    correct: 'The effective capacity of ~70 units/hour, because it reflects real losses; planning on the theoretical 100 over-promises',
    wrong: [
      miss('The theoretical 100 units/hour, since that is the machine\'s rated speed', 'Rated speed ignores changeovers, maintenance, and stoppages; committing to a plan on theoretical capacity systematically over-promises and creates shortfalls.', 'Plan on what the line actually delivers, not its spec-sheet maximum.'),
      miss('The average of 100 and 70, about 85 units/hour', 'Splitting the difference is arbitrary; the defensible planning number is the demonstrated effective capacity, which accounts for the real losses.', 'Use the rate the line truly sustains, not a midpoint guess.'),
      miss('Whichever number makes the demand plan feasible', 'Choosing the number to fit the desired answer is exactly the trap; capacity should be measured honestly, then the plan reconciled to it.', 'Capacity is an input you measure, not a knob you turn to make a plan fit.'),
    ],
    lesson:
      'Theoretical (design) capacity is the ideal maximum; effective capacity subtracts predictable losses — changeovers, maintenance, quality, minor stoppages. Plans and S&OP commitments must be built on effective capacity, because promising against the theoretical number guarantees the floor falls short. The gap between the two is itself a useful improvement target.',
    source,
    generated: true,
  },
  {
    id: 7644033,
    chapter: 'Operations and Capacity',
    title: 'Theory of constraints',
    prompt:
      'In a five-step line, step 3 is the bottleneck at 60 units/hr while the rest run at 100. A team proposes speeding up step 1. By theory-of-constraints logic, what is the predicted effect on throughput?',
    correct: 'No increase in throughput — speeding a non-bottleneck only grows WIP piling up in front of the constraint',
    wrong: [
      miss('Throughput rises because the line\'s first step is faster', 'System output is set by the bottleneck (step 3 at 60/hr); a faster step 1 cannot push more through the 60/hr constraint downstream.', 'The line can only flow as fast as its slowest step — did that change?'),
      miss('Throughput rises proportionally to step 1\'s speed gain', 'Improvements upstream of the constraint do not lift system output at all; only the constraint governs throughput.', 'Gains away from the bottleneck do not move the system rate.'),
      miss('Throughput falls because the line becomes unbalanced', 'It does not fall; it stays flat at the constraint\'s rate while WIP accumulates ahead of step 3 — wasted effort, not lost output.', 'The result is piled-up WIP, not reduced output.'),
    ],
    lesson:
      'Theory of constraints: a system\'s throughput is governed by its bottleneck. Improving a non-constraint step does not raise output; it just builds work-in-process in front of the constraint. The leverage is to elevate or offload the constraint (step 3) itself. Investing upstream of the bottleneck is the classic effort that produces no throughput.',
    source,
    generated: true,
  },
  {
    id: 7644034,
    chapter: 'Operations and Capacity',
    title: 'Batch size and changeover',
    prompt:
      'A line loses 30 minutes to changeover whenever it switches products. Management wants tiny batches for responsiveness, but the bottleneck is near full. What is the key tradeoff to surface?',
    correct: 'Smaller batches improve responsiveness but multiply changeover time, consuming scarce bottleneck capacity and cutting throughput',
    wrong: [
      miss('Smaller batches are always better with no downside', 'On a near-full bottleneck, frequent changeovers burn the very capacity you cannot spare; small batches trade throughput for flexibility.', 'Each changeover eats bottleneck time — what does that cost when it is already full?'),
      miss('Changeover time is irrelevant to throughput', 'Changeover at or near the constraint directly subtracts from productive time, so it is central to throughput, not irrelevant.', 'Time lost to setup at the bottleneck is time the system cannot make product.'),
      miss('Larger batches always reduce total cost regardless of demand', 'Large batches cut changeover but raise cycle/inventory cost and response time; the optimum balances setup against holding and flexibility.', 'Bigger batches have their own costs — inventory and slow response.'),
    ],
    lesson:
      'Batch size trades responsiveness against changeover overhead. Small batches respond faster and cut inventory but multiply setups; when those setups land on a near-full bottleneck, they directly steal throughput. The analyst\'s job is to name that tradeoff — and where setup reduction (SMED) could unlock both — rather than treating "small batch" as free.',
    source,
    generated: true,
  },
  {
    id: 7644035,
    chapter: 'Operations and Capacity',
    title: 'Demand spike lead time',
    prompt:
      'A process running comfortably at 70% utilization suddenly faces a sustained 30% demand surge, pushing it toward 91% utilization. An analyst is asked what to expect on the floor first. What is the most accurate prediction?',
    correct: 'Queues and lead times grow disproportionately as utilization climbs into the 90s, well before the line hits a hard capacity wall',
    wrong: [
      miss('Nothing changes until utilization reaches exactly 100%', 'Lead times deteriorate steeply through the 90s because of variability; you do not need to hit 100% to see queues and delays balloon.', 'Trouble shows up before the wall — what happens to queues at 91%?'),
      miss('Lead times shorten because the busier line works faster', 'A busier line is not a faster line; reduced slack under variability lengthens waiting, so lead times worsen, not improve.', 'More load with less slack means longer waits, not shorter.'),
      miss('Throughput simply rises 30% with no side effects', 'If the surge pushes utilization to 91%, the system may still flow but with sharply longer queues and lead times — the side effect is exactly the delay.', 'Even if output rises, what happens to the time each order waits?'),
    ],
    lesson:
      'A demand surge that lifts utilization into the high 90s causes queues and lead times to grow disproportionately, because variability plus shrinking slack inflates waiting long before a hard capacity limit. The first symptom of a spike is usually exploding lead time and WIP, not an outright stop — which is why utilization headroom is a planning variable, not a luxury.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 6: Transportation, Warehousing, and Network Tradeoffs (6)
  // ---------------------------------------------------------------------------
  {
    id: 7644036,
    chapter: 'Transportation, Warehousing, and Network Tradeoffs',
    title: 'Total landed cost',
    prompt:
      'Ocean freight saves $2,000 per shipment versus air but adds three weeks of transit, requiring an extra $2,600 of in-transit and safety stock plus a $400 expected service penalty. On a total-landed-cost basis, which is cheaper here?',
    correct: 'Air, because the $2,000 freight saving is more than offset by $3,000 of added inventory and service cost',
    wrong: [
      miss('Ocean, because its freight rate is $2,000 lower', 'Freight rate is one line of landed cost; the $2,600 inventory and $400 service penalty the slower mode triggers ($3,000) exceed the $2,000 saving.', 'Add the inventory and service costs the slow mode causes before declaring it cheaper.'),
      miss('They cost the same because freight is the only comparable line', 'Mode choice drives inventory and service costs too; comparing only freight ignores exactly the costs that decide this case.', 'The whole point of landed cost is that freight is not the only line.'),
      miss('Ocean, because emissions are lower and that always wins', 'Lower emissions is a real factor but does not override a clear total-cost gap unless explicitly priced; here the economics favor air.', 'Emissions matter, but they do not automatically flip a quantified cost comparison.'),
    ],
    lesson:
      'Total landed cost = freight + inventory (cycle, safety, in-transit) + service penalty + duties/handling + emissions cost. Here ocean saves $2,000 in freight but adds $3,000 in inventory and service, so air is cheaper overall. Mode and inventory are substitutes: faster freight can replace safety stock, and the only fair comparison is total landed cost, not the freight invoice.',
    source,
    generated: true,
  },
  {
    id: 7644037,
    chapter: 'Transportation, Warehousing, and Network Tradeoffs',
    title: 'Square-root pooling law',
    prompt:
      'A retailer holds safety stock for one independent-demand SKU across 4 regional DCs. If it consolidates into 1 central DC, the square-root law predicts total safety stock for that SKU drops to roughly what fraction of the original?',
    correct: 'About half (1/√4 = 1/2)',
    wrong: [
      miss('One quarter (1/4)', 'Pooling scales safety stock by √N, not N; going from 4 locations to 1 multiplies by 1/√4 = 1/2, not 1/4.', 'The law uses the square root of the location count, not the count itself.'),
      miss('It stays the same', 'Consolidating independent demands pools variability, so combined safety stock falls; it does not stay flat.', 'Pooling independent demand reduces the buffer — by how much?'),
      miss('It rises, because one DC must cover all regions', 'Centralization pools variability and lowers total safety stock for a given service level; cycle stock and last-mile may rise, but the safety buffer falls.', 'Variability pooling cuts the safety buffer, even though other costs may climb.'),
    ],
    lesson:
      'The square-root law: consolidating N stocking locations with independent demand reduces total safety stock by a factor of √N for the same service level — here √4 = 2, so the buffer roughly halves. Centralization pools demand variability (good for inventory and cash) but lengthens the last mile and can raise service time, which is the offsetting cost.',
    source,
    generated: true,
  },
  {
    id: 7644038,
    chapter: 'Transportation, Warehousing, and Network Tradeoffs',
    title: 'Mode-cost ordering',
    prompt:
      'Ranking common freight modes from lowest to highest cost per unit (ignoring shipment size effects), which ordering is generally correct?',
    correct: 'Ocean < rail/intermodal < full truckload < air',
    wrong: [
      miss('Air < ocean < rail < truck', 'Air is the most expensive per unit, not the cheapest; ocean and rail are the low-cost, slower modes.', 'Air buys speed at the highest cost — it belongs at the expensive end.'),
      miss('Truckload < rail < ocean < air', 'Rail/intermodal and ocean are typically cheaper per unit than truckload over long distances, so truck is not the cheapest.', 'For long hauls, which is usually cheaper per ton — a truck or a ship/train?'),
      miss('Parcel < ocean < air < rail', 'Parcel is relatively expensive per unit for small shipments, and rail is among the cheapest, so this ordering is inverted.', 'Parcel per-unit cost is high; rail per-unit cost is low — this puts them backwards.'),
    ],
    lesson:
      'As a rule of thumb on cost per unit for larger shipments: ocean is cheapest, then rail/intermodal, then full-truckload road, then LTL/parcel, with air the most expensive. Speed runs roughly opposite. The mode choice is a speed/cost/reliability tradeoff — and it should be evaluated on total landed cost, since faster modes can substitute for inventory.',
    source,
    generated: true,
  },
  {
    id: 7644039,
    chapter: 'Transportation, Warehousing, and Network Tradeoffs',
    title: 'Incoterms cost shift',
    prompt:
      'A supplier\'s new quote is lower but switches the term from DDP to EXW. Under EXW, who bears export clearance, main carriage, insurance, and import duties?',
    correct: 'The buyer bears almost all of it — EXW places minimum obligation on the seller, so the "cheaper" price hides costs that shift to the buyer',
    wrong: [
      miss('The seller still handles everything, as under DDP', 'EXW is the opposite of DDP: it is the minimum-seller-obligation term, so the buyer takes on transport, insurance, and duties from the seller\'s door.', 'EXW and DDP sit at opposite ends — who does the least under EXW?'),
      miss('Costs are split 50/50 between buyer and seller', 'Incoterms allocate responsibility at a defined point, not by an even split; under EXW the handoff is essentially at the seller\'s premises.', 'Incoterms define a handoff point, not a 50/50 share.'),
      miss('Incoterms only affect insurance, not freight or duties', 'Incoterms allocate freight, insurance, risk transfer, and customs responsibilities together — not insurance alone.', 'The term governs the whole bundle of cost and risk, not just insurance.'),
    ],
    lesson:
      'Incoterms allocate cost, risk, and customs duties between buyer and seller. EXW (Ex Works) is the minimum-seller-obligation term: the buyer collects at the seller\'s door and pays export clearance, main carriage, insurance, and import duties. DDP is the maximum-seller-obligation term. A lower EXW price can be more expensive on a landed-cost basis once the shifted obligations are counted.',
    source,
    generated: true,
  },
  {
    id: 7644040,
    chapter: 'Transportation, Warehousing, and Network Tradeoffs',
    title: 'Cross-dock vs storage',
    prompt:
      'A DC receives full inbound truckloads and immediately sorts and re-loads them onto outbound delivery routes without putting stock on shelves. What warehouse role is this, and what does it require to work?',
    correct: 'Cross-docking — it needs tightly synchronized inbound and outbound timing and reliable volumes to avoid holding stock',
    wrong: [
      miss('Long-term storage, because goods pass through a warehouse', 'Passing through a building is not storage; cross-docking specifically avoids putaway and shelf time, flowing goods straight from inbound to outbound.', 'If nothing is shelved, is it really storage?'),
      miss('Slotting, which is the same activity as cross-docking', 'Slotting is the placement of stored SKUs by velocity to cut pick travel — a storage-optimization task, not the flow-through role described.', 'Slotting is about where you store things; this question describes not storing them.'),
      miss('Cross-docking, which works regardless of inbound/outbound timing', 'Cross-docking depends critically on synchronized timing and reliable volumes; without them, goods pile up and you are back to storage.', 'Flow-through only works if inbound and outbound line up — it is timing-sensitive.'),
    ],
    lesson:
      'Cross-docking moves goods directly from inbound to outbound with little or no storage, cutting handling and inventory. It only works with tight inbound/outbound synchronization and predictable volumes; mismatched timing forces unplanned storage. It contrasts with storage and fulfillment roles, where slotting (placing fast movers near pick paths) is the relevant optimization.',
    source,
    generated: true,
  },
  {
    id: 7644041,
    chapter: 'Transportation, Warehousing, and Network Tradeoffs',
    title: 'Expedite as a symptom',
    prompt:
      'A team\'s air-expedite spend has become a routine monthly line item, consistently covering the same few SKUs. The syllabus frames recurring expediting as what?',
    correct: 'A symptom of an upstream planning or supply failure being paid for repeatedly, not a fix',
    wrong: [
      miss('A smart, permanent service strategy worth institutionalizing', 'Routinely expediting the same SKUs signals a chronic planning gap; institutionalizing the workaround pays the premium forever instead of fixing the root cause.', 'If the same parts always expedite, what is really broken upstream?'),
      miss('Proof the carrier is unreliable and must be replaced', 'Recurring expedites usually trace to forecast, lead-time, or inventory-policy gaps for those SKUs, not to carrier performance.', 'The pattern points to planning for those SKUs, not the carrier.'),
      miss('An unavoidable cost with no underlying cause to investigate', 'A repeating, SKU-specific expedite pattern almost always has a diagnosable cause — bad forecast horizon, thin safety stock, or supplier lead-time variability.', 'A repeating pattern on the same SKUs is a clue, not an act of nature.'),
    ],
    lesson:
      'Occasional expediting is a legitimate tool for genuine surprises. But recurring expedites concentrated on the same SKUs are a symptom: you are paying an air-freight premium every month to patch an upstream planning failure (wrong forecast horizon, too little safety stock, or supplier lead-time variability). The fix is to diagnose and correct the root cause, not to budget the premium.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 7: S&OP and Cross-Functional Planning (5)
  // ---------------------------------------------------------------------------
  {
    id: 7644042,
    chapter: 'S&OP and Cross-Functional Planning',
    title: 'Constrained vs unconstrained',
    prompt:
      'A demand review produces an unconstrained plan of 12,000 units, but the supply review confirms available capacity of only 9,000 units. What must the S&OP reconciliation step produce?',
    correct: 'A constrained plan of 9,000 units with an explicit 3,000-unit gap and a recommendation for closing or allocating it',
    wrong: [
      miss('Publish the 12,000-unit demand plan as the operating plan', 'An unconstrained demand plan the floor cannot execute will simply fail on the line; reconciliation exists to surface the constraint, not bury it.', 'Can the plant make 12,000 if capacity is 9,000? Publish what is executable.'),
      miss('Average demand and supply to a 10,500-unit plan', 'Splitting the difference invents capacity that does not exist; the executable plan is bounded by the 9,000-unit constraint, with the gap named.', 'You cannot average your way past a hard capacity limit.'),
      miss('Quietly cut the demand forecast to 9,000 and move on', 'Silently rewriting demand to match supply hides the 3,000-unit gap that leadership needs to decide on (add capacity, allocate, or defer).', 'The gap is a decision for leaders, not a number to erase.'),
    ],
    lesson:
      'S&OP reconciles an unconstrained demand plan against real supply capacity to produce a constrained, executable plan. The difference — here 3,000 units — is the demand/supply gap. The reconciliation must make that gap explicit with options (add capacity, allocate, defer, expedite) and a recommendation, not publish a plan the floor cannot run or silently rewrite demand to fit.',
    source,
    generated: true,
  },
  {
    id: 7644043,
    chapter: 'S&OP and Cross-Functional Planning',
    title: 'Allocation by rule',
    prompt:
      'Supply of a scarce product covers only 70% of committed demand across many customers. What is the defensible way to allocate it during S&OP?',
    correct: 'Apply a documented, agreed allocation rule (e.g., by margin, contractual commitment, or strategic priority) consistently',
    wrong: [
      miss('Give it to whichever sales leader escalates most loudly', 'Allocating by volume of internal noise is the exact failure mode S&OP is meant to prevent; it is neither defensible nor repeatable.', 'Whose voice is loudest is not a rule you could defend in an audit.'),
      miss('Split it perfectly equally across every customer regardless of value or contract', 'Equal splits ignore contractual commitments, margin, and strategic value, and can breach service-level agreements; fairness is not the same as equality.', 'Equal is not automatically right when contracts and value differ.'),
      miss('Fulfill orders strictly in the sequence they were entered', 'First-come ordering ignores contractual priority and business impact, and can starve high-value or committed customers by accident of timing.', 'Entry order is arbitrary relative to commitments and value.'),
    ],
    lesson:
      'When supply cannot meet all demand, allocation should follow an explicit, pre-agreed rule — margin, contractual commitment, strategic-account priority, or a documented blend — applied consistently and transparently. Allocating by the loudest stakeholder, a naive equal split, or raw entry order is indefensible. The rule, decided before scarcity hits, is what makes the call survive scrutiny.',
    source,
    generated: true,
  },
  {
    id: 7644044,
    chapter: 'S&OP and Cross-Functional Planning',
    title: 'S&OP cycle stages',
    prompt:
      'Which sequence best describes the standard monthly S&OP cycle?',
    correct: 'Demand review → supply review → reconciliation (pre-S&OP) → executive review/decision',
    wrong: [
      miss('Executive decision → demand review → supply review → reconciliation', 'Executives decide last, on a reconciled plan; deciding first, before demand and supply are reviewed and reconciled, has nothing concrete to decide on.', 'Leaders sign off at the end on a prepared plan — what has to happen before they can?'),
      miss('Supply review → executive review → demand review → reconciliation', 'Demand is reviewed before (or alongside) supply, and reconciliation precedes the executive review; this ordering scrambles the dependencies.', 'You need both demand and supply on the table before reconciling and escalating.'),
      miss('Reconciliation → demand review → supply review → executive review', 'You cannot reconcile demand and supply before either has been reviewed; reconciliation is the step that follows both.', 'Reconciliation needs its inputs first — it cannot come before the reviews.'),
    ],
    lesson:
      'The classic S&OP cadence runs monthly: demand review (consensus forecast), supply review (capacity and constraints), reconciliation/pre-S&OP (close the gap, prepare options and scenarios), then executive review where leadership decides the constrained plan and resolves the gaps that exceed a planner\'s authority. Integrated business planning (IBP) extends this to tie the plan to financials.',
    source,
    generated: true,
  },
  {
    id: 7644045,
    chapter: 'S&OP and Cross-Functional Planning',
    title: 'S&OP to financial plan',
    prompt:
      'A CFO complains that the operational S&OP volume plan and the quarterly financial forecast tell different stories about next quarter. What does mature S&OP / IBP require here?',
    correct: 'The operational plan and the financial plan should be reconciled to one set of numbers and assumptions, not run in parallel',
    wrong: [
      miss('Operations and finance should keep separate plans since they serve different audiences', 'Parallel, conflicting plans are precisely the failure IBP corrects; one reconciled plan is the goal so the company commits to consistent numbers.', 'Two official sets of numbers for the same quarter is the problem, not a feature.'),
      miss('Finance should simply override operations because money outranks volume', 'Reconciliation aligns volume and value through shared assumptions; one function dictating to the other re-creates the disconnect rather than resolving it.', 'The aim is one agreed plan, not one side winning by rank.'),
      miss('The mismatch is normal and needs no reconciliation', 'A persistent volume-versus-value gap signals misaligned assumptions that will surface as missed forecasts; it needs reconciliation, not acceptance.', 'A standing gap between the two plans is a warning sign, not a normal state.'),
    ],
    lesson:
      'Integrated business planning links the operational S&OP plan to the financial plan so volume and value rest on one consistent set of assumptions. When the operational and financial views diverge, the discipline is to reconcile them to a single plan — not to maintain two competing "truths." That linkage is the main thing IBP adds over a purely operational S&OP.',
    source,
    generated: true,
  },

  // ---------------------------------------------------------------------------
  // Chapter 8: Resilience, Analytics, and Decision Communication (5)
  // ---------------------------------------------------------------------------
  {
    id: 7644046,
    chapter: 'Resilience, Analytics, and Decision Communication',
    title: 'TTR vs TTS',
    prompt:
      'A node has a time-to-recover (TTR) of 6 weeks after a disruption, while the network\'s time-to-survive (TTS) for losing that node is 10 weeks. What does this comparison imply about exposure?',
    correct: 'The node poses limited exposure here, because the network can survive (10 weeks) longer than the node takes to recover (6 weeks)',
    wrong: [
      miss('The node is critically exposed because 6 weeks is a long recovery', 'Recovery duration alone is not the risk; exposure depends on TTR versus TTS, and here TTS (10) exceeds TTR (6), so supply can be matched throughout recovery.', 'Compare the two numbers: can the network outlast the recovery?'),
      miss('TTR and TTS measure the same thing, so the comparison is redundant', 'They are distinct: TTR is how long the node needs to come back; TTS is how long the network can match demand without it. The gap between them is the risk signal.', 'One measures the node\'s recovery; the other measures the network\'s endurance — different things.'),
      miss('Exposure is high whenever TTS is greater than TTR', 'It is the reverse: exposure is high when TTR exceeds TTS (recovery outlasts survival). With TTS > TTR, the firm rides through the outage.', 'Risk appears when recovery is slower than survival, not faster.'),
    ],
    lesson:
      'Time-to-recover (TTR) is how long a disrupted node needs to regain full capacity; time-to-survive (TTS) is how long the network can keep matching supply to demand without that node. Exposure exists when TTR > TTS — recovery outlasts the buffer. Here TTS (10 wk) > TTR (6 wk), so the firm survives the outage; the stress test flags the nodes where the inequality reverses.',
    source,
    generated: true,
  },
  {
    id: 7644047,
    chapter: 'Resilience, Analytics, and Decision Communication',
    title: 'Pareto for root cause',
    prompt:
      'An analyst tallies late-shipment causes and finds that 3 of 15 causes account for ~80% of late shipments. Which analytical principle does this illustrate, and what is the implied action?',
    correct: 'The Pareto principle — focus improvement on the vital few causes that drive most of the failures',
    wrong: [
      miss('Little\'s Law — so adjust WIP to fix the lateness', 'Little\'s Law relates WIP, throughput, and lead time; it does not describe the concentration of causes that a Pareto tally reveals.', 'This is about a few causes driving most failures, not the WIP/throughput relationship.'),
      miss('The square-root law — so consolidate the causes', 'The square-root law is about inventory pooling across locations, unrelated to ranking failure causes by frequency.', 'Pooling inventory is a different idea from ranking defect causes.'),
      miss('It shows all 15 causes deserve equal attention', 'The whole Pareto insight is that causes are unequal; spreading effort evenly across all 15 wastes it on the trivial many.', 'If 3 causes drive 80%, equal effort across all 15 is misallocated.'),
    ],
    lesson:
      'The Pareto principle (80/20) says a small number of causes typically drive most of the problems. A Pareto chart ranks causes by frequency or impact so effort lands on the vital few rather than the trivial many. Paired with techniques like the 5 Whys, it turns a noisy list of issues into a focused, defensible improvement priority.',
    source,
    generated: true,
  },
  {
    id: 7644048,
    chapter: 'Resilience, Analytics, and Decision Communication',
    title: 'Signal vs noise on dashboards',
    prompt:
      'A new operations dashboard shows 40 KPIs, most flickering red or green daily, and planners have stopped reacting to it. What is the core design failure?',
    correct: 'It signals nothing actionable — too many undifferentiated alerts bury the few exceptions that actually require a decision',
    wrong: [
      miss('It has too few metrics and needs even more KPIs added', 'Adding metrics worsens the overload; the failure is lack of prioritization and thresholds, not insufficient coverage.', 'Would a 41st flickering KPI make the real exception easier or harder to find?'),
      miss('The colors are wrong and should be changed to blue and yellow', 'Re-coloring does not fix the underlying problem that everything is flagged at once; the issue is thresholding and exception focus, not the palette.', 'The problem is what gets flagged, not which colors are used.'),
      miss('Dashboards inevitably get ignored, so this is unavoidable', 'Well-designed exception-based dashboards with sensible thresholds do get used; this outcome is a design failure, not an inevitability.', 'Good alert design is precisely what prevents this — it is fixable.'),
    ],
    lesson:
      'A dashboard that flags everything signals nothing: when most indicators flicker daily, the genuine exceptions drown and people tune out. Good design manages by exception — meaningful thresholds, prioritization by impact and actionability, and few alerts that each warrant a decision. The goal is to surface the handful of things that need action today, not to display all data.',
    source,
    generated: true,
  },
  {
    id: 7644049,
    chapter: 'Resilience, Analytics, and Decision Communication',
    title: 'Communicating uncertainty',
    prompt:
      'An analyst must brief an executive on a supplier risk that is real but uncertain. Which approach best fits the syllabus\'s standard for decision communication?',
    correct: 'State the recommendation and next action clearly, while sizing the downside and naming the key uncertainty',
    wrong: [
      miss('Present every scenario and probability in full and let the executive decide unaided', 'Dumping the full analysis without a recommendation abdicates the analyst\'s job; executives need a defensible call, not raw uncertainty to sort alone.', 'The analyst owes a recommendation, not just a pile of scenarios.'),
      miss('Project total confidence and omit the uncertainty to look decisive', 'Hiding uncertainty to appear confident misleads the decision-maker and erodes trust when the downside materializes; honesty about the range is part of the call.', 'Faking certainty is not the same as giving a strong recommendation.'),
      miss('Decline to recommend anything until the uncertainty is fully resolved', 'Waiting for certainty that may never come stalls a decision the business needs now; the standard is a defensible call despite the uncertainty.', 'Most operational decisions cannot wait for certainty — give the call anyway.'),
    ],
    lesson:
      'The analyst\'s communication standard is a defensible recommendation despite uncertainty: lead with the recommendation and next action, size the downside, and name the key uncertainty honestly — short enough that a busy executive reads all of it. The two failure modes are hiding uncertainty to look confident and hiding behind it to avoid a recommendation. The job is to give a clear call, with its risk stated.',
    source,
    generated: true,
  },
  {
    id: 7644050,
    chapter: 'Resilience, Analytics, and Decision Communication',
    title: 'Resilience is targeted',
    prompt:
      'After a disruption, an executive proposes "hold more inventory everywhere" as the resilience strategy. Why does the syllabus treat this as the wrong default?',
    correct: 'Blanket inventory ties up cash on exposures that do not threaten the business; resilience should target the few nodes where TTR exceeds TTS',
    wrong: [
      miss('Because inventory never improves resilience under any circumstances', 'Targeted buffer at genuine exposures absolutely helps; the flaw is the indiscriminate "everywhere," not inventory itself.', 'Some buffer is useful — the issue is putting it everywhere, not anywhere.'),
      miss('Because resilience is purely a forecasting problem, not an inventory one', 'Resilience spans buffers, redundancy, flexibility, and visibility; it is not reducible to forecasting, and inventory can be part of a targeted answer.', 'Resilience is broader than forecasting and can include targeted stock.'),
      miss('Because cash has no role in supply chain decisions', 'Cash is a core leg of the service/cost/cash triangle; tying it up indiscriminately is exactly the cost of "inventory everywhere."', 'Working capital is central — that is what blanket inventory wastes.'),
    ],
    lesson:
      'Resilience is a targeting problem, not a "buffer everything" problem. Holding more inventory everywhere consumes cash and warehouse capacity on exposures that pose no real threat, while possibly still missing the critical ones. The disciplined approach identifies the few nodes where time-to-recover exceeds time-to-survive and applies the right mix of buffer, alternate source, or flexibility there — sized against its cost.',
    source,
    generated: true,
  },
])
