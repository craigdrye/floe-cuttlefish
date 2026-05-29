# Sales and Trading Roadmap
**ID**: `salesTradingRoadmap` · **Discipline**: Finance · **Level**: Career

## Course Aim
A sales and trading desk exists to do one thing: stand between clients who need to buy or sell risk and a market that is constantly repricing it, and to get paid for the service without getting run over by the risk. The trader makes prices and warehouses positions; the salesperson owns the client and turns market noise into a reason to act; the sales-trader sits on the seam between them, executing client orders while reading flow. Strip away the adrenaline and the job is a discipline of inventory and information under time pressure — quote a price you are willing to be hit or lifted on, hold the resulting position only as long as the edge justifies the risk, hedge what you are not paid to own, and explain afterward exactly where the money came from. This course teaches that craft from the sell-side flow-desk seat: how markets are actually structured, what moves each product's price, how a client inquiry becomes a trade idea and then a fill, and how P&L, risk limits, and compliance bound every decision.

The emphasis throughout is on risk awareness and precision, not bravado. Anyone can have a market view; the skill is knowing what you are actually long or short after a trade, which risk you are being paid to take versus which you have accidentally inherited, what a bid-offer spread has to cover before it is profit, and what would force you to unwind at the worst possible moment. You will work in the perspective of a desk that answers to a risk manager, a compliance surveillance system, and a client who can take their flow elsewhere tomorrow: a quote is a binding offer to take on risk, an axe is an inventory you are trying to move and must disclose honestly, "color" is valuable precisely because it stops short of anything material and non-public, and a single careless chat message can end a career. The work is fast and concrete — positions, hedges, marks, and limits — but it is governed by hard lines that the spoofing, LIBOR, and FX-fixing scandals wrote into the modern rulebook.

By the end, a learner should be able to take a market situation and operate like a desk: map the players and how risk and the client relationship are owned, explain what drives a product's price and which Greek or risk measure to watch, turn a client inquiry into a timely, suitable trade idea with a defined downside and exit, quote and execute it while managing inventory and slippage, attribute the resulting P&L to its real drivers rather than to luck, and communicate all of it in language that is useful to the client, legible to risk, and clean under surveillance. The goal is not a bigger position; it is a position that is understood, hedged, sized, and defensible.

## Course Design Notes
The course follows the real arc of a trade through a flow desk: understand who does what and how the market is built, then what moves prices and how risk is measured, then how client flow becomes a trade idea, then how that idea is executed and shows up in P&L, then the risk framework that bounds it, then the regulation and communication discipline that governs all of it, and finally how the desk itself is structured and electronified. Each chapter assumes the prior ones, mirroring how a desk actually turns information into a sized, hedged decision. Route questions here when they test market structure and microstructure, products and pricing, the Greeks and risk measures, client coverage and trade ideas, order handling and execution quality, P&L attribution and risk limits, market-conduct regulation, desk communication and surveillance, or the mechanics and economics of the modern electronic desk. Numerical examples use round figures so learners reason about mechanics — what a spread must cover, how a hedge offsets a Greek, why a fill was good or bad — rather than arithmetic. Keep every answer anchored to the chain that defines the discipline: a price is an offer to take risk, the risk must be measured and hedged down to the bet you are paid for, the trade must be executed and explained, and every word of it must survive compliance. Common traps are flagged in every chapter, because on a desk the expensive mistakes are fast and subtle — the "riskless" quote that leaves you short into a squeeze, the winning day that was really just beta, the helpful chat that crossed a bright line.

## Desk Rhythm and How to Use This Course
A flow desk runs on a daily cadence, and the course mirrors it. Before the open: the morning meeting, overnight moves, the desk's axes and positions, the economic calendar, and the trade ideas sales will take to clients. Through the session: quoting, executing, hedging, and managing inventory against limits as flow arrives. After the close: marks, P&L explain, risk reports, and the desk note to clients. Treat each chapter's "Applied skills" as a deliverable a desk head or risk manager could actually use, not a reading — a desk map, a product primer, a trade idea, a trade recap, a risk status, a compliant desk note. A realistic practice cadence is one product and one client situation per chapter, building toward a full morning-to-close packet for the capstone. Keep a running "position and risk log" across the course — what you are long or short, the Greek or risk measure that matters, the hedge, the limit you are nearest to, and the catalyst — because on a desk the discipline that separates traders from gamblers is the position that is written down and understood, not the one that is felt.

| Phase | What you produce | Decision it supports |
|---|---|---|
| Structure | Desk map: roles, products, clients, risk handoffs | Who owns the client, who owns the risk? |
| Pricing and risk | Product primer: price drivers, Greeks, hedges | What moves this, and what must I watch? |
| Client flow | Trade idea: setup, expression, upside, downside, exit | Is this timely and suitable, and why now? |
| Execution and P&L | Trade recap: fill quality, inventory, P&L explain | Did execution help, and where did the money come from? |
| Risk and conduct | Risk status and compliant desk note | Am I inside limits, and is this clean to say? |

## Chapter 1: Desk Roles, Market Structure, and Liquidity
**Core questions**
- Who owns the client relationship and who owns the risk on a trade — and what happens at the handoff between sales, sales-trading, and the trader?
- Is the desk acting as principal (taking the other side onto its own book) or as agent (working an order into the market for a commission), and why does the distinction change everyone's incentives?
- What actually makes a market liquid or fragile — and how does that change the price a client should expect to pay?

**Key concepts**: the roles (salesperson, sales-trader, trader/market-maker, structurer, desk strategist/desk analyst) and what each is paid for; agency vs principal execution and the conflict each creates; market-making, the bid-ask spread as the dealer's compensation for risk and inventory, and the "edge" a desk earns; liquidity, depth, and immediacy; the primary vs secondary market; quote-driven (dealer) vs order-driven (exchange/order-book) markets; venues — exchanges, ECNs, dark pools, OTC/RFQ; the buy side vs the sell side and who is the desk's client.

**Applied skills**
- Build a desk map for one product area: the roles, the client types, the products quoted, and where risk is handed off from sales to trading.
- Given a trade, classify it as agency or principal, identify who bears the risk, and name the conflict of interest that arises and how it is managed.

**Common traps**
- Confusing the salesperson (owns the client, carries no overnight risk) with the trader (owns the book, takes the risk) — they are paid for different things and judged on different numbers.
- Assuming a tight quoted spread means a liquid market; depth and the ability to exit size matter more than the headline bid-offer.
- Treating "principal" and "agent" as interchangeable when they flip who eats the slippage and what must be disclosed to the client.

## Chapter 2: Products, Price Drivers, and Risk Measures
**Core questions**
- For this product, what actually moves the price — and is it the same thing the client thinks moves it?
- Which risk measure is the right lens here: duration and DV01 for a bond, delta and gamma for an option, beta for equity, basis for a hedge?
- After putting on a position, what am I actually exposed to — and how would the desk hedge the part it is not paid to own?

**Key concepts**: the major asset classes and what drives each (equities — earnings, multiples, beta; rates — yield curve, duration, DV01/PV01, convexity; credit — spread, default risk, recovery; FX — rate differentials, flows; commodities — supply/demand, carry); derivatives basics (futures, forwards, swaps, options) and why clients use them; the option Greeks (delta, gamma, vega, theta, rho) as the dimensions of options risk; basis and basis risk; carry and roll; the difference between directional risk and the spread/relative-value risk a desk prefers to warehouse.

**Applied skills**
- Write a one-page product primer for an instrument: the two or three things that move its price, the risk measure the desk watches, and the standard hedge.
- For an options position, identify the dominant Greek, state how the desk would neutralize it, and explain what residual risk (e.g., gamma, vega) remains after a delta hedge.

**Common traps**
- Hedging the obvious risk (delta) and forgetting the second-order one (gamma, vega) that does the real damage in a fast or volatile move.
- Confusing yield and price direction on a bond — yields up means prices down, and duration tells you how much.
- Calling a position "hedged" when only the directional leg is offset, leaving a live basis risk between the position and the hedge instrument.

## Chapter 3: Client Coverage, Flow, and Trade Ideas
**Core questions**
- What does this client actually need — to express a view, to hedge an exposure, to raise or deploy cash — and is the idea fit for that purpose?
- Is the idea timely: is there a catalyst, and is the entry level still attractive, or has the move already happened?
- What single risk would make this trade fail, and is there a clean way out if it does?

**Key concepts**: the client types (asset managers, hedge funds, pensions, corporates, retail intermediaries) and what each trades and why; reading flow and what an inquiry reveals; the desk's axes (inventory it wants to move) and honest axe disclosure; "color" — market context that is useful precisely because it stops short of material non-public information; the trade idea structure (thesis, expression, entry, target, stop, catalyst, time horizon); relative-value vs outright/macro ideas; suitability and know-your-client; the difference between a trade idea and a tip.

**Applied skills**
- Turn a client inquiry into a written trade idea: the setup and catalyst, the expression (instrument and direction), entry level, upside target, downside/stop, and time horizon.
- Distinguish an axe the desk is genuinely showing from a view, and disclose the desk's inventory position honestly while pitching it.

**Common traps**
- Pitching the desk's axe as a great idea for the client without disclosing that the desk is trying to clear its own inventory — a conflict that must be surfaced, not buried.
- A "trade idea" with no catalyst and no level discipline — being right eventually is not a trade, and chasing a move that already happened is not an entry.
- Recommending a position that does not fit the client's mandate or risk — a suitability failure, not just a bad call.

## Chapter 4: Order Handling, Execution, and Transaction Cost Analysis
**Core questions**
- For this order, what is the right way to execute — work it patiently, take liquidity now, or use an algorithm — and what is the cost of each choice?
- Did the execution help or hurt versus a fair benchmark, and how much of the slippage was the market versus the desk's own footprint?
- Is the desk handling this order in the client's best interest, or has its own position quietly shaped the execution?

**Key concepts**: order types (market, limit, stop) and what each guarantees and risks; the bid-ask spread as a cost paid on every round trip; slippage, market impact, and the trade-off between speed and price; execution benchmarks (arrival price, VWAP, TWAP, implementation shortfall) and what each measures; execution algorithms and smart order routing; working an order vs crossing the spread; inventory management — what holding a position costs and risks; transaction cost analysis (TCA) as the scorecard for execution quality.

**Applied skills**
- Choose and justify an execution approach for an order given its size relative to average volume, the urgency, and the volatility, and state the benchmark you would be judged against.
- Write a TCA-style recap: the benchmark, the realized price, the slippage, how much was market impact, and whether the execution was good.

**Common traps**
- Crossing the full spread on a large, non-urgent order and calling the resulting market impact "the market," when patience or an algorithm would have saved it.
- Judging an execution by whether the price later went your way rather than against the benchmark that was knowable at the time.
- Letting the desk's own inventory needs steer how a client order is worked — a best-execution and conflict problem, not a technique.

## Chapter 5: P&L, Risk Limits, and the Daily Risk Cycle
**Core questions**
- Where did today's P&L actually come from — client spread earned, a directional position, a hedge, a mark change — and is that a repeatable edge or just market beta?
- What is the desk's risk right now in the measures that bind it, and which limit is closest to being breached?
- If the position is marked at a level no one will actually trade, is the P&L real?

**Key concepts**: realized vs unrealized P&L and mark-to-market; P&L explain/attribution (decomposing the day into spread/flow, position/directional, hedge, carry, and mark/curve moves); the marking process and mark integrity; risk limits (position limits, VaR limits, stop-loss, greek limits, concentration); Value at Risk (VaR) — what it captures and the fat-tail risk it misses; stress testing and scenario analysis; the limit breach and the escalation/reduce-risk response; the trader's relationship with the risk manager; carry and funding as a cost of holding inventory.

**Applied skills**
- Write a P&L explain for a trading day that splits the result into flow/spread, directional, hedge, and mark/curve components, and say which part is a durable edge.
- Produce a risk status: current position in the binding risk measures, the limit on each, the nearest breach, and the action that would bring the book back inside limits.

**Common traps**
- Crediting trading skill for a day that was really long beta into a rising market — and then sizing up into an exposure mistaken for an edge.
- Marking a position at a flattering, untradeable level so the P&L looks real — mark-to-myth, the failure that precedes every blow-up.
- Treating VaR as a hard ceiling on loss rather than a normal-day estimate that says nothing about the tail event that actually breaks the desk.

## Chapter 6: Market Conduct, Compliance, and Desk Communication
**Core questions**
- Is this piece of information material and non-public — and if so, how must the desk wall it off and refrain from trading or sharing it?
- Is this order-handling conduct legitimate, or does it cross into manipulation (spoofing, layering, front-running, marking the close)?
- Can this be said in a client chat — and would it look the same to a surveillance system reading it next year?

**Key concepts**: material non-public information (MNPI), information barriers/Chinese walls, and the wall-crossing process; the line between "color" and MNPI; best execution as a duty, not a courtesy; market manipulation — spoofing and layering, front-running, wash trades, marking the close, and the LIBOR/FX-fixing legacy that hardened the rules; suitability and fair dealing; restricted and watch lists; communications surveillance and recorded lines/chats; MiFID II research unbundling and the inducement rules; the desk's relationship with compliance and when to escalate; how a single chat message becomes evidence.

**Applied skills**
- Screen a desk scenario for MNPI, manipulation, and best-execution problems, and state the required action (wall-cross, decline, escalate, document) before any trade or message goes out.
- Rewrite a sloppy client chat into a compliant desk message that separates legitimate market color from client interest from anything restricted, and that reads cleanly under surveillance.

**Common traps**
- Treating a "tip" from a well-connected contact as color rather than potential MNPI — the helpfulness is exactly what makes it dangerous.
- Assuming a clever order pattern is just aggressive trading when the intent (to create a false impression of supply or demand) makes it spoofing or layering — a criminal-conduct line, not a style.
- Writing chats as if no one will ever read them, when surveillance and litigation routinely reconstruct a desk's intent from its own messages years later.

## Chapter 7: The Modern Desk — Electronification, Economics, and Careers
**Core questions**
- Which parts of this product's flow are now electronic (e-trading, RFQ platforms, algos) and which still need a human voice — and where has the margin gone?
- How does the desk actually make money after technology compressed spreads, and what is the desk's cost base and capital usage?
- What is the realistic career arc and skill set on a modern flow desk, and how is the seat changing?

**Key concepts**: electronification and the shift from voice to e-trading and RFQ platforms; spread compression and what it did to flow-desk economics; the rise of algorithmic and systematic market-making and the role of non-bank liquidity providers; balance-sheet and capital constraints since the post-2008 reforms (the cost of warehousing risk under modern capital rules); the split between flow and structured/exotic businesses; how desks are budgeted and how traders and salespeople are actually evaluated (P&L, client revenue, franchise value); the modern skill set — markets fluency plus data, coding, and platform literacy; the career ladder and exits.

**Applied skills**
- Map one product's workflow into its electronic and voice components, and explain where the desk still adds value and earns its spread.
- Sketch a simple desk economics view: the revenue sources (client spread, flow, fees), the main costs (capital, technology, people), and what would make the desk more or less viable.

**Common traps**
- Assuming voice trading and fat spreads still describe the modern desk — in many liquid products the margin is electronic, thin, and volume-driven.
- Ignoring the capital and balance-sheet cost of holding inventory, as if warehousing risk were free the way it seemed before the post-2008 rules.
- Confusing a high-revenue day with a valuable franchise — desks are judged on durable client revenue and risk-adjusted return on capital, not a single lucky position.

## Capstone: The Desk Day — Morning Packet to Close
Take one product area and one client situation and run a full desk day, producing a packet a desk head could use:
- a desk map: the roles, client types, products, venues, and where risk and the client relationship are handed off;
- a market recap and product primer: overnight moves, the two or three price drivers, the risk measure the desk watches, and the standard hedge;
- a client trade idea: the catalyst and thesis, the expression, entry/target/stop, time horizon, and the single risk that would make it fail, with any axe conflict disclosed;
- an execution plan and recap: the chosen order-handling approach, the benchmark, and a TCA-style read on whether the fill helped or hurt;
- a P&L explain and risk status: where the day's money came from (flow vs directional vs hedge vs mark), the position in the binding risk measures, and the nearest limit;
- a compliant desk note to the client that separates market color from client interest from restricted information and reads cleanly under surveillance;
- a one-line verdict on the position — add, hold, reduce, or close — defended by the P&L attribution and the risk status, not by the story.

## Assessment Ideas
- Desk-map and roles teardown (agency vs principal, who owns what)
- Product primer and price-driver drill across asset classes
- Greeks-and-hedging lab (delta/gamma/vega and what a hedge leaves behind)
- Client trade-idea write-up with catalyst, expression, and exit
- Order-handling and TCA exercise (benchmark, slippage, impact)
- P&L explain decomposition (flow vs directional vs hedge vs mark)
- Risk-status and limit-breach escalation scenario
- MNPI / manipulation / best-execution conduct screen
- Compliant-chat rewrite under surveillance review
- Desk-economics and electronification mapping
- Capstone desk-day packet and verdict

## Research Notes
- Desk roles, agency vs principal execution, market-making, and the bid-ask spread as compensation for risk and inventory reflect standard sell-side market-structure references (CFA Institute curriculum on market organization and structure; institutional trading desk literature).
- Product price drivers and risk measures (duration/DV01 and convexity for rates, the option Greeks, credit spread/recovery, FX rate differentials, basis and carry) follow conventional derivatives and fixed-income teaching; numerical examples are kept on round figures for mechanics.
- Execution content (order types, slippage, market impact, VWAP/TWAP/implementation-shortfall benchmarks, smart order routing, and TCA) aligns with standard transaction-cost-analysis and electronic-execution practice.
- Risk framing (mark-to-market, P&L explain/attribution, VaR and its tail-risk limitations, stress testing, limit breaches and escalation) reflects standard market-risk management; VaR is presented with its well-documented shortcomings, not as a loss ceiling.
- Conduct and compliance content reflects the U.S./global market-abuse framework: MNPI and information barriers, best-execution duties, manipulation (spoofing/layering, front-running, marking the close), the LIBOR and FX-fixing enforcement legacy, communications surveillance, and MiFID II research unbundling/inducement rules. Specific rule thresholds and the post-trade transparency regime are periodically updated and should be confirmed against current FINRA/SEC/FCA/ESMA sources before teaching as settled detail.
- Electronification, spread compression, non-bank liquidity providers, and the post-2008 capital/balance-sheet cost of warehousing risk reflect documented changes in sell-side trading economics; desk evaluation on durable client revenue and risk-adjusted return on capital is standard industry practice.
