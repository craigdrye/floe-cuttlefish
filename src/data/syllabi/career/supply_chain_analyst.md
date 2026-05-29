# Supply Chain Analyst
**ID**: `supplyChain` · **Discipline**: Operations · **Level**: Career

## Course Aim
A supply chain analyst is paid to turn a noisy, distributed physical system into decisions someone can act on this week. The chain is a network of demand, inventory, suppliers, factories, trucks, and warehouses, all coupled together with lead times and variability — and the analyst's job is not to admire it but to find where it is about to break, quantify the tradeoff, and tell the planner or the executive what to do. The throughline of this course is that almost every supply chain problem is a tradeoff between three things that fight each other: service (do customers get what they ordered), cost (inventory, freight, capacity, expedites), and cash (working capital tied up in stock). You cannot maximize all three; the skill is choosing the right balance for a given product and defending it with numbers.

The emphasis is on decision support, not spreadsheet decoration. Anyone can build a dashboard; the analyst earns their seat by knowing which number is the constraint, why a forecast that is "accurate on average" can still be useless, how a 95% service-level target silently sets the safety-stock bill, and what actually happens to the network when demand spikes 30% in a week. Learners practice the mechanics — forecast error and bias, reorder points and safety stock, supplier scorecards, bottleneck analysis, network and freight tradeoffs, the S&OP cycle — alongside the discipline that separates an analyst from a report-runner: stating assumptions out loud, sizing the downside, managing exceptions rather than drowning in them, and compressing analysis into a recommendation a busy decision-maker can act on.

By the end, a learner should be able to walk into an unfamiliar product line and produce a desk-grade view: map the chain and its metrics, review a forecast and judge whether it is good enough for the decision at hand, set inventory policy that names its own service/cost/cash tradeoff, score suppliers and flag the risk that averages hide, find the capacity constraint, compare logistics options on total cost rather than freight rate, run an S&OP gap to a constrained plan, and write an exception memo that ends in a recommendation and a next action. The goal is not a longer analysis but a sharper call.

## Course Design Notes
The course follows the order an analyst actually works a chain: see the whole system and its metrics first, then demand, then the inventory that buffers demand against supply, then the suppliers and the production and the freight that constitute supply, then the cross-functional S&OP process that reconciles them, and finally the resilience and communication discipline that makes the analysis land. Each chapter assumes the prior ones. Route questions here when they test supply chain mapping and metrics, demand and forecasting, inventory and service levels, sourcing and supplier risk, operations and capacity, transportation and network design, S&OP and integrated planning, or resilience, analytics, and decision communication. Keep numerical examples on round figures so learners reason about the mechanics — how safety stock scales with variability, how a service target drives cost — rather than arithmetic. Common traps are flagged in every chapter, because in supply chain the expensive mistakes are quiet: the average that hides the stockout, the forecast graded on the wrong horizon, the freight saving that blows up total cost.

## Working Rhythm and How to Use This Course
A supply chain view is built in layers, and the most common analyst failure is optimizing one layer while breaking another — cutting inventory until service collapses, or chasing a cheaper carrier until late deliveries cost more than the freight saved. The working rhythm: understand the network and the metrics that govern it, then read demand, then set the buffers, then test the supply side that has to deliver, then reconcile it all in S&OP, then stress for disruption. Treat every chapter's "Applied skills" as a deliverable you could hand a planner or an executive, not a reading. A realistic cadence is one product family per chapter for practice and one full product line for the capstone. Keep a running "exception log" across the whole course — the SKUs, suppliers, and lanes that keep showing up as problems — because in real operations the issues that matter accumulate quietly across the network rather than appearing in one headline metric.

| Layer | What you produce | Decision it supports |
|---|---|---|
| Network & metrics | Chain map with nodes, flows, owners, metrics | Where does value flow, and where would I see it fail? |
| Demand | Forecast review with error, bias, assumptions | What will we need, and how sure are we? |
| Inventory | Inventory policy with service/cost/cash tradeoff | How much stock, where, and why that much? |
| Supply | Supplier scorecard, capacity & bottleneck read | Can supply actually deliver the plan? |
| Logistics | Network/freight scenario on total landed cost | How do we move it for the best total cost? |
| S&OP | Constrained plan with gaps and a recommendation | Whose demand wins when supply can't meet all of it? |
| Resilience | Disruption scenario and exception memo | What breaks the plan, and what do we do now? |

## Chapter 1: The Supply Chain Map and the Metrics That Govern It
**Core questions**
- Where does product, money, and information actually flow through this chain, and where does information lag the goods?
- Which two or three metrics would tell you first that the system is failing — and who owns them?
- What is the unit of analysis here: a SKU, a product family, a lane, a node, or the whole network?

**Key concepts**: the plan–source–make–deliver–return model (SCOR), nodes and flows, the three coupled flows (material, information, cash), lead time and its components, throughput and cycle time, the cash-to-cash cycle, service level vs fill rate vs on-time-in-full (OTIF), cost-to-serve, the perfect-order metric, and the service/cost/cash triangle as the master tradeoff.

**Applied skills**
- Draw a supply chain map for a product family: nodes, flows, owners, lead times, governing metrics, and the points most exposed to risk.
- Pick the two or three metrics that would surface a failure earliest and explain what each one would miss on its own.

**Common traps**
- Mapping the physical flow of goods but forgetting the information flow — the order signal usually breaks before the truck does.
- Treating "service level" as one number when it can mean cycle-service-level, fill rate, or OTIF, each of which implies a different cost.
- Chasing a single KPI (utilization, cost per unit) so hard that it quietly degrades the rest of the triangle.

## Chapter 2: Demand and Forecasting
**Core questions**
- What in this demand history is signal (trend, seasonality, baseline) and what is noise or a one-off event?
- Is the forecast good enough for the decision it feeds — and which decision is that, with what horizon and lead time?
- Is the error random, or is there persistent bias the process is failing to correct?

**Key concepts**: baseline demand, trend and seasonality, intermittent vs steady demand, forecast horizon and lead-time alignment, forecast accuracy vs bias, the standard error measures (MAPE, MAD, bias/tracking signal) and when each misleads, promotions and demand shaping, the bullwhip effect, judgmental overrides, and forecast value-add (does human adjustment actually beat the statistical baseline?).

**Applied skills**
- Run a forecast review: choose the right error measure, separate accuracy from bias, and state the assumptions and the recommended adjustment.
- Diagnose bullwhip in a multi-tier demand series and identify which ordering behavior is amplifying it.

**Common traps**
- Grading a forecast on the wrong horizon — a forecast accurate next month is useless if the lead time is six.
- Reporting MAPE alone and missing a steady bias that is quietly building excess inventory or stockouts.
- "Improving" the forecast with overrides that add no value (or destroy it) versus the plain statistical baseline.

## Chapter 3: Inventory and Service Levels
**Core questions**
- What service level is actually worth its cost for this SKU, and who decided 95% rather than 90% or 99%?
- Where is the inventory in the wrong place — too much on the slow movers, too little on the items that stock out?
- How much of this stock is buffering real variability, and how much is just slow, obsolete, or excess?

**Key concepts**: the role of inventory (cycle, safety, in-transit, anticipation stock), reorder point and order-up-to level, economic order quantity (EOQ) and its limits, safety stock as a function of demand and lead-time variability and the chosen service level, the nonlinear service-level-to-safety-stock curve, lead-time variability vs demand variability, ABC/XYZ segmentation, days of inventory and inventory turns, working capital and carrying cost, obsolescence and the cost of being wrong about which way.

**Applied skills**
- Build an inventory policy table for a set of SKUs: reorder points, safety stock, target service level, and the resulting cost and working-capital implication, with exceptions flagged.
- Show how safety stock changes as you move the service target from 90% to 95% to 99%, and decide where the curve stops being worth it.

**Common traps**
- Setting one blanket service level across all SKUs instead of segmenting — the last few points of service cost the most and matter least on C-items.
- Sizing safety stock for demand variability while ignoring lead-time variability, which often dominates it.
- Confusing high inventory turns with health when they are actually frequent stockouts, or low turns with caution when they are dead stock.

## Chapter 4: Suppliers and Sourcing Risk
**Core questions**
- Which supplier is reliable but expensive, and which is cheap but a hidden single point of failure?
- What risk is being smoothed away by averages — the supplier that is 98% on-time but fails catastrophically once a year?
- If your primary source went dark tomorrow, what is the *realistic* backup, and how fast could it ramp?

**Key concepts**: supplier performance dimensions (cost, quality, delivery/OTIF, responsiveness), supplier scorecards and weighting, total cost of ownership vs unit price, single vs dual vs multi-sourcing, the resilience-vs-cost tradeoff of redundancy, supply-chain tiers and sub-tier visibility (your supplier's supplier), concentration and geographic/geopolitical risk, contract terms and incentives, qualification lead time for a new source.

**Applied skills**
- Build a supplier scorecard across cost, quality, delivery, and risk, with explicit weights, and recommend an action (keep, develop, dual-source, exit).
- Run a single-point-of-failure scan on a bill of materials and identify the components with no viable alternate source.

**Common traps**
- Ranking suppliers on average on-time performance and missing the tail risk — rare, correlated, catastrophic failures.
- Choosing the lowest unit price while ignoring total cost of ownership (quality fallout, expedites, inventory to cover unreliability).
- Calling a chain "dual-sourced" when both sources sit in the same region, depend on the same sub-tier, or share one raw-material origin.

## Chapter 5: Operations and Capacity
**Core questions**
- Where is the constraint — the one resource that actually caps throughput for this product?
- What happens to lead time and queues when demand spikes, and at what utilization does the line start to choke?
- Which intervention would increase flow, and which would just add work in front of the bottleneck?

**Key concepts**: bottleneck and theory-of-constraints intuition, capacity vs load, utilization and why high utilization plus variability produces long queues, throughput and cycle time, Little's Law (WIP = throughput × lead time), takt time, line balancing, setup/changeover and batch size, process variability, labor and equipment constraints, the difference between effective and theoretical capacity.

**Applied skills**
- Find the bottleneck in a simple multi-step process and run a what-if for a demand spike: where does the queue build and what is the new lead time?
- Recommend a capacity intervention (debottleneck, add shift, smooth the batch, offload) and justify it against the constraint, not the symptom.

**Common traps**
- Pushing utilization toward 100% and being surprised when lead times explode — variability makes the last few points of utilization extremely expensive.
- Adding capacity or work upstream of the bottleneck, which grows WIP without adding any throughput.
- Reading average utilization as healthy while a single shared resource is starving everything downstream.

## Chapter 6: Transportation, Warehousing, and Network Tradeoffs
**Core questions**
- When is faster, more expensive shipping actually worth it, and when is it just expediting habit?
- Which network configuration — number and location of warehouses — minimizes total landed cost for the required service?
- Where does consolidating shipments help, and where does it just add delay and inventory?

**Key concepts**: freight modes and the speed/cost/reliability tradeoff (parcel, LTL, FTL, intermodal, ocean, air), total landed cost vs freight rate, warehouse roles (storage, cross-dock, fulfillment) and basic slotting, the centralization–decentralization tradeoff (fewer DCs pool inventory but lengthen the last mile), network design and facility location, last-mile economics, mode and inventory as substitutes (faster freight can replace safety stock), and the carbon/emissions dimension of mode choice.

**Applied skills**
- Compare two logistics options on total landed cost — freight plus inventory plus service penalty plus emissions — not on freight rate alone.
- Evaluate a centralize-vs-decentralize decision: what it does to inventory pooling, last-mile cost, and service.

**Common traps**
- Optimizing the freight line on the invoice while ignoring the inventory and service costs that the mode choice drives.
- Treating air freight or expedite as a "fix" when it is really paying repeatedly for an upstream planning failure.
- Centralizing to pool inventory without pricing the longer, costlier, slower last mile that results.

## Chapter 7: S&OP and Integrated Planning
**Core questions**
- When demand exceeds supply, whose demand wins — and on what rule, not whose voice is loudest?
- What is the constraint that turns an unconstrained demand plan into a plan the business can actually execute?
- Which gap between demand and supply is big enough to need a leadership decision rather than a planner adjustment?

**Key concepts**: the monthly S&OP cycle (demand review, supply review, reconciliation, executive review), unconstrained vs constrained plan, the demand/supply gap, prioritization and allocation rules, balancing service, cost, inventory, and cash at the plan level, scenario planning for executives, the link from S&OP to financial plan, and the shift toward integrated business planning (IBP).

**Applied skills**
- Build an S&OP gap view: demand vs available supply, the constraint, two or three options to close the gap, and a clear recommendation.
- Write a one-page executive S&OP briefing that frames a demand/supply tradeoff requiring a leadership call, with the cost of each option.

**Common traps**
- Presenting an unconstrained demand plan as if it were executable, hiding the supply constraint until it fails on the floor.
- Allocating scarce supply by the loudest stakeholder rather than by an explicit, defensible rule (margin, strategic account, contractual commitment).
- Running S&OP as a status meeting instead of a decision forum — lots of review, no constrained plan, no decision.

## Chapter 8: Resilience, Analytics, and Decision Communication
**Core questions**
- What single event — supplier failure, port closure, demand shock, system outage — could break this plan, and how exposed are you?
- Which signal on the dashboard actually requires an action today, and which is just noise?
- How do you explain an uncertain, probabilistic situation to a decision-maker so they act rather than freeze?

**Key concepts**: disruption and scenario planning, risk exposure and time-to-recover/time-to-survive, redundancy vs flexibility vs visibility as resilience strategies, exception management and managing by exception, dashboard and alert design (signal vs noise, thresholds), root-cause analysis (5 Whys, Pareto), communicating uncertainty and tradeoffs, and the executive memo that ends in a recommendation and a next action.

**Applied skills**
- Run a disruption scenario: identify the exposure, estimate time-to-recover, and recommend a mitigation (buffer, alternate source, flexibility) with its cost.
- Write an exception memo that translates an analysis into the tradeoff, the recommendation, the uncertainty, and the next action — short enough that a busy executive reads all of it.

**Common traps**
- Building a dashboard that shows everything and signals nothing, so the real exceptions drown in green-and-red.
- Treating resilience as "hold more inventory everywhere" rather than targeting the few exposures that actually threaten service or survival.
- Hiding uncertainty to look confident, or hiding behind it to avoid a recommendation — the analyst's job is to give a defensible call despite the uncertainty.

## Capstone: Full Supply Chain Analyst Pack
Take one product line — a fictional or real product family — and produce a complete, decision-ready analyst pack:
- a supply chain map with nodes, flows, owners, governing metrics, and the key risk points,
- a forecast review with the right error and bias measures, stated assumptions, and a recommended adjustment,
- an inventory policy table that names its service/cost/cash tradeoff per SKU segment, with exceptions flagged,
- a supplier scorecard with weighted cost/quality/delivery/risk and a single-point-of-failure scan,
- a capacity analysis identifying the bottleneck and a demand-spike scenario,
- a logistics scenario comparing options on total landed cost (and emissions), not freight rate,
- an S&OP gap and constrained plan with a prioritization rule and a recommendation,
- a resilience scenario with a time-to-recover estimate and a mitigation,
- and a one-page executive memo that compresses the whole pack into the tradeoff, the recommendation, and the next action.

## Assessment Ideas
- Supply chain mapping and metric-selection drill
- Forecast review: accuracy vs bias, right error measure, recommended adjustment
- Safety-stock and service-level sensitivity lab (90% / 95% / 99%)
- Supplier scorecard and single-point-of-failure scan
- Bottleneck identification and demand-spike what-if
- Total-landed-cost logistics comparison
- S&OP gap-to-constrained-plan and allocation-rule exercise
- Disruption scenario with time-to-recover and mitigation
- Capstone analyst pack and one-page executive memo critique

## Research Notes
- Process framing (plan–source–make–deliver–return) follows the ASCM/APICS SCOR model; service/fill/OTIF and perfect-order metric definitions align with standard supply-chain-management references.
- Forecasting content (accuracy vs bias, MAPE/MAD/tracking signal, forecast value-add, bullwhip effect) reflects conventional demand-planning practice; the bullwhip effect traces to Lee, Padmanabhan, and Whang.
- Inventory mechanics (reorder point, EOQ, safety stock as a function of demand/lead-time variability and service level, ABC/XYZ segmentation) follow standard operations-management texts (e.g., Chopra & Meindl, Silver/Pyke/Peterson).
- Capacity and flow concepts (theory of constraints, Little's Law, utilization-vs-variability queueing intuition, takt time) follow standard operations-management and factory-physics treatments.
- Network, mode, and total-landed-cost tradeoffs, plus centralization/inventory-pooling logic, align with logistics and network-design references.
- S&OP / integrated business planning cycle and resilience concepts (time-to-recover/time-to-survive, redundancy vs flexibility vs visibility) reflect ASCM and current supply-chain-risk practice.
- MITx MicroMasters in Supply Chain Management: https://micromasters.mit.edu/scm/
- ASCM (APICS) learning and certifications: https://www.ascm.org/learning-development/
- Coursera Supply Chain Analytics: https://www.coursera.org/learn/supply-chain-analytics
- Rutgers Supply Chain Management specialization: https://www.coursera.org/specializations/supply-chain-management
