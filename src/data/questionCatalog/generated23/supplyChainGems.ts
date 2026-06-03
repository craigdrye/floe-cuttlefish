import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

// SHOWCASE "gems" for the Supply Chain Analyst course.
// Three chosen chapters, each tackled from its sharpest conceptual edge rather
// than its routine mechanics:
//   - Inventory and Service Levels      (the price of the last percent of perfection)
//   - Suppliers and Sourcing Risk       (the average that hides the catastrophe)
//   - S&OP and Cross-Functional Planning (who wins when there isn't enough)
export const supplyChainGems: Question[] = [
  // ---------------------------------------------------------------------------
  // Inventory and Service Levels
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10100000,
    'Supply Chain',
    'Inventory and Service Levels',
    "The price of the last percent",
    "Demand and supplier reliability are unchanged. An executive says, 'Just take every SKU to 99.9% service so we never disappoint a customer.' You hold lead-time and demand variability fixed and look only at how the service target itself scales the buffer. Why is 'never disappoint anyone' a quietly ruinous policy?",
    "Safety stock scales with the service-level z-multiplier, which climbs faster and faster as the target approaches 100% (about 1.65 at 95%, 2.33 at 99%, 3.09 at 99.9%), so the last fraction of a percent of service can cost more buffer than the entire jump from 50% to 95% did",
    [
      ["It is fine: 99.9% is only 4.9 points above 95%, so the inventory rises by about 5%", "Safety stock tracks the z-value, not the percentage, and z accelerates near 100%; a 4.9-point rise in service can multiply the buffer many times over.", "Translate each target into its z-multiplier and watch how the gaps between z-values widen as you near perfection."],
      ["It is ruinous only because demand variability would have to increase to support it", "Variability is held fixed in the setup; the cost explosion comes purely from the service target pushing z upward, with no change in demand at all.", "Hold variability constant and notice that the service target alone drives the runaway buffer through z."],
      ["It is fine in principle, but 100% service is reachable with enough stock, so 99.9% is conservative", "True 100% service needs effectively infinite stock because z diverges as the target approaches 1; you can never buy certainty, only buy down the probability of a stockout.", "Recognize that the service curve has a vertical asymptote: the closer to 100%, the steeper the price, forever."],
    ],
    "Lesson: Safety stock equals the service-level z-multiplier times the standard deviation of demand over lead time, and z rises non-linearly toward infinity as the service target approaches 100% (1.65 at 95%, 2.33 at 99%, 3.09 at 99.9%). The deep point is that perfect service is not a target you can afford but an asymptote you can only approach: every additional nine of availability costs disproportionately more than the last, so 'never disappoint anyone' is really a decision to spend without limit. The analyst's job is to choose, per SKU, where on that curve the next dollar of buffer stops being worth the service it buys.",
    "Floe generated",
    true,
    "The service target enters as a z-value, and z accelerates toward infinity as you approach 100%. What does that make 'perfect' service cost?",
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    10100001,
    'Supply Chain',
    'Inventory and Service Levels',
    "Two ways to be wrong about a forecast",
    "You are setting stock for two SKUs. SKU A is a $4 phone case, cheap to hold and easy to reorder. SKU B is a $900 medical device that becomes worthless if a newer model launches before it sells. Demand for both is equally uncertain. The team argues that since the uncertainty is identical, the inventory posture should be identical. Where is their reasoning wrong?",
    "Identical demand uncertainty does not imply identical posture, because the cost of being wrong is asymmetric: over-stocking the case is cheap and recoverable, but over-stocking the device risks a large obsolescence write-off, so you should lean toward holding more of the case and less of the device",
    [
      ["They are right; with equal demand uncertainty the optimal stock level must be the same for both", "Equal uncertainty sets the spread of outcomes, but the policy also depends on the payoff of each outcome, and an obsolescence write-off makes over-stocking the device far more costly than over-stocking the case.", "Separate how uncertain demand is from how much each kind of error costs; both feed the decision."],
      ["They are wrong, but only because the expensive device should always carry more safety stock to protect revenue", "Higher unit value alone does not justify more buffer; the device's obsolescence risk makes excess units especially dangerous, so the expensive item often warrants leaner, not deeper, stock.", "Ask which direction of error is costlier for each item, not merely which item is more expensive."],
      ["They are wrong because the cheap case obviously deserves the higher service level", "Service-level choice follows from the cost of each error, not from low unit price by itself; the case earns more buffer because its overage cost is trivial, not because it is cheap per se.", "Drive the posture from the asymmetry between understock and overstock costs for each specific SKU."],
    ],
    "Lesson: Inventory policy is a bet under uncertainty, and the right bet depends not only on how wide the distribution of demand is but on what each kind of miss costs. This is the newsvendor insight: when understocking (a lost sale) is cheap relative to overstocking (a write-off), you stock lean; when overstocking is cheap relative to a stockout, you stock deep. Two SKUs with identical demand uncertainty can rationally demand opposite postures because their cost of being wrong points in opposite directions. The lingering idea is that 'how much stock' is never answered by variability alone; it is answered by the asymmetry of regret.",
    "Floe generated",
    true,
    "Same uncertainty, but ask: if you guess too high, what does each mistake cost you? One is recoverable; the other is a write-off.",
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    10100002,
    'Supply Chain',
    'Inventory and Service Levels',
    "The average that hid the stockout",
    "A SKU finished the month at 96% average availability, comfortably above its 95% target, and the report is green. Yet the sales team complains they lost a big order. Drilling in, you find availability was 100% for 27 days and 0% for the 3 days a major customer tried to buy. What does this reveal about reading inventory performance as an average?",
    "An average over time can mask a concentrated, costly stockout: 27 perfect days plus 3 empty days averages to 96%, but if demand or value was concentrated in those 3 empty days, the average looks healthy while the business absorbed the worst possible failure",
    [
      ["Nothing is wrong; 96% beat the 95% target, so service was genuinely on plan", "The target was met on a time-average, but service is felt at the moment of demand, and all the lost demand landed in the empty window, so the average is technically true and operationally false.", "Weight availability by when demand actually occurs, not by how many calendar days looked fine."],
      ["The fix is simply to raise the average target from 95% to 98%", "A higher average target does nothing to prevent the buffer from emptying exactly when a large order arrives; the problem is the timing of the gap, not the height of the average.", "Address the variance and timing of the shortfall, and protect against demand-weighted stockouts, rather than nudging the average."],
      ["The 100% days prove the buffer was oversized, so the real lesson is to cut safety stock", "The 100% days are not evidence of waste; the failure was a 0% window during peak demand, and cutting stock would make that window more frequent, not less.", "Read the three empty days as the signal; the full days are not the problem to optimize away."],
    ],
    "Lesson: A time-averaged service number treats every day as equal, but customers and revenue do not arrive evenly, so an average can be green while the chain failed precisely when it mattered. The conceptual hook is that the average is the supply chain's most reassuring lie: it summarizes the system into one comfortable number that systematically hides the tail, where the expensive mistakes live. The discipline is to weight availability by actual demand (a fill-rate or demand-weighted view), inspect the distribution rather than the mean, and treat a clustered stockout as a failure even when the monthly average clears target.",
    "Floe generated",
    true,
    "27 good days and 3 empty ones average to 96%. Now ask: which 3 days did the big customer show up on?",
    { challengeRating: 6 },
  ),

  // ---------------------------------------------------------------------------
  // Suppliers and Sourcing Risk
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10100003,
    'Supply Chain',
    'Suppliers and Sourcing Risk',
    "The reliable supplier that ruins you",
    "Supplier P delivers on time 98% of the time, but its 2% of failures are a once-a-year plant fire that shuts you down for six weeks. Supplier Q delivers on time only 90% of the time, but its failures are scattered single late days you can absorb with a little buffer. The scorecard ranks suppliers by average on-time rate, so P scores far higher. What is the scorecard missing?",
    "The scorecard rewards the higher average while ignoring the shape of the failures: P's rare failure is catastrophic and correlated (a six-week shutdown), whereas Q's frequent failures are small and absorbable, so the supplier that scores worse on average may carry far less real risk",
    [
      ["Nothing; 98% on-time is strictly better than 90%, so ranking P above Q is correct", "Averaging on-time rate treats a six-week shutdown and a one-day delay as interchangeable units of lateness, but their business impact is wildly different, so the higher average can hide the larger exposure.", "Score not just how often a supplier fails but how badly, since the tail event is what actually threatens the business."],
      ["The scorecard should simply weight Supplier P down for being more expensive", "Cost is a separate dimension; the flaw here is that the delivery metric ignores the severity and correlation of failures, not that P costs more.", "Add a tail-risk or severity dimension to delivery scoring rather than reaching for price."],
      ["The fix is to demand 100% on-time from both suppliers in the contract", "A contractual 100% target cannot prevent a plant fire and does not capture that P's rare failure is catastrophic; it just relabels the risk instead of measuring it.", "Quantify the magnitude and recovery time of the worst plausible failure, not the promised average."],
    ],
    "Lesson: A single average on-time figure compresses two very different risk profiles into one number, treating a six-week shutdown as merely a heavier dose of the same lateness as a one-day slip. But risk lives in the tail and in correlation: a supplier that fails rarely but catastrophically can be far more dangerous than one that fails often but harmlessly. The deep idea is that the mean is the wrong summary statistic for anything where the downside is concentrated; a mature supplier scorecard scores severity and time-to-recover alongside frequency, because the failure that ends your quarter will not show up in the average until after it has happened.",
    "Floe generated",
    true,
    "Both numbers are averages of lateness. Ask what each supplier's 'bad day' actually looks like, and how long it lasts.",
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    10100004,
    'Supply Chain',
    'Suppliers and Sourcing Risk',
    "Two suppliers, one fate",
    "Proud of its resilience, a company sources a critical chip from two different Tier-1 distributors in two different countries, and calls itself safely dual-sourced. A single fab in Taiwan then halts production, and both distributors run dry within a week. How could 'two suppliers' fail as one, and what does true diversification require?",
    "Both Tier-1 suppliers depended on the same upstream fab, so the risk only looked diversified at the surface; true diversification requires the alternatives to have independent failure modes all the way up the chain, not merely different names, logos, or countries at Tier 1",
    [
      ["This is just bad luck; dual sourcing did its job and a second fab outage is what failed", "It was not luck: both 'independent' suppliers shared a single point of failure upstream, so the dual-source was an illusion from the start, not a strategy undone by chance.", "Map the sub-tiers to confirm the alternatives do not converge on one shared dependency before calling it dual-sourced."],
      ["The company should have added a third Tier-1 distributor to be safe", "A third distributor that also buys from the same fab adds no independence at all; counting Tier-1 names does nothing if they share the chokepoint below.", "Diversify the dependency, not the count of immediate vendors; trace the chain to its true source."],
      ["The lesson is that dual sourcing never works and single sourcing with a big buffer is better", "Dual sourcing fails here because the sources were not truly independent, not because the idea is unsound; genuinely independent sources do reduce correlated risk.", "Make the second source independent up the tiers rather than abandoning redundancy altogether."],
    ],
    "Lesson: Redundancy only buys resilience when the redundant paths can fail independently, and a supply chain's true dependencies often hide several tiers below the supplier you actually contract with. Two distributors in two countries can still share one fab, one raw-material origin, or one logistics corridor, so they are perfectly correlated where it counts and collapse together. The conceptual hook is that risk is about the joint distribution, not the marginal one: diversification you cannot trace to independent root causes is theater. Real dual sourcing demands sub-tier visibility and independent failure modes all the way up, not just two names on the purchase orders.",
    "Floe generated",
    true,
    "They sat in different countries but drank from the same well. Where does the chain actually converge?",
    { challengeRating: 7 },
  ),
  makeSimpleQuestion(
    10100005,
    'Supply Chain',
    'Suppliers and Sourcing Risk',
    "The cheapest part that costs the most",
    "Procurement switches a component to a supplier whose unit price is 20% lower, and reports a clean saving. Over the next year, that supplier's quality fallout triggers rework, line stoppages, expedited replacements, and extra inventory to cover its unreliability. By total cost of ownership, the 'cheaper' part ended up more expensive. What did the unit-price comparison fail to capture?",
    "Unit price is only the visible tip of total cost of ownership; the lower price hid downstream costs (quality fallout, rework, expediting, and the extra inventory needed to cover unreliability) that more than erased the 20% saving",
    [
      ["Nothing was missed; a 20% lower unit price is a real, booked saving regardless of what happened later", "The 20% appears as a saving on the purchase order, but the rework, expedites, and buffer stock are equally real costs caused by that choice, so the net effect can be a loss.", "Total cost of ownership sums acquisition plus the downstream costs the cheaper part creates, not the invoice price alone."],
      ["The comparison failed only because procurement did not negotiate the price down even further", "A still-lower price would deepen the same trap; the problem is that price ignores the quality and reliability costs the part drives, not that the discount was too small.", "Compare suppliers on total landed and lifecycle cost, where reliability and quality enter explicitly."],
      ["The fix is to hold more safety stock so the unreliable supplier's quality problems stop mattering", "More buffer is itself one of the hidden costs the cheap part created, not a free fix; it ties up cash and masks rather than removes the quality failure.", "Treat the carrying cost of that extra buffer as part of the supplier's true cost, then reconsider the choice."],
    ],
    "Lesson: Unit price is the one cost that is easy to see and easy to put in a savings report, which is exactly why it is dangerous: total cost of ownership also includes quality fallout, rework, expediting, warranty, and the inventory you must carry to insure against an unreliable source. The deep point is that optimizing the visible, measurable number tends to push cost into the invisible, unmeasured places, where it grows quietly and often larger. A defensible sourcing decision prices the whole lifecycle, because a 'saving' that is merely a transfer of cost from the purchase order to the shop floor is not a saving at all.",
    "Floe generated",
    true,
    "The 20% shows up on the invoice. Where do the rework, expedites, and extra buffer show up?",
    { challengeRating: 6 },
  ),

  // ---------------------------------------------------------------------------
  // S&OP and Cross-Functional Planning
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10100006,
    'Supply Chain',
    'S&OP and Cross-Functional Planning',
    "The plan that pretends supply is infinite",
    "At the executive S&OP review, the demand team presents a confident plan: every region's full forecast, summing to 130 units, all shown as committed. The factory can make 100. The deck never mentions this gap; it simply promises 130. What is the fundamental error, and why is an unconstrained plan presented as committed so dangerous?",
    "Presenting an unconstrained demand plan as if it were executable hides the supply constraint until it fails on the floor; the purpose of S&OP is to reconcile the 130 of demand against the 100 of supply and surface the 30-unit gap as a decision, not to promise demand the business cannot make",
    [
      ["There is no error; the demand plan should always show full unconstrained demand, and supply will simply catch up", "Supply cannot conjure 30 extra units on command, and promising 130 while making 100 guarantees a 30-unit shortfall that lands as broken commitments rather than a managed decision.", "Confront the demand plan with the supply constraint inside S&OP, producing a constrained plan that names the gap."],
      ["The error is that the demand forecast of 130 must be wrong, since the factory can only make 100", "Capacity does not refute the forecast; customers may genuinely want 130, and the unconstrained number is useful as a signal. The error is presenting it as a commitment without reconciling it to supply.", "Keep the unconstrained demand as a true signal, then build a separate constrained plan that respects the 100-unit limit."],
      ["The error is that the factory should have been told to expand capacity to 130 before the meeting", "Capacity expansion is one option to close the gap, but it is a decision for the review to weigh against its cost, not a foregone conclusion; the deeper error is hiding the gap so no decision gets made.", "Bring the gap and its closure options to the table rather than assuming away the constraint in advance."],
    ],
    "Lesson: S&OP exists to reconcile two pictures that are produced separately: the unconstrained demand plan (what customers want) and the constrained supply plan (what the business can actually deliver). The unconstrained number is valuable as a signal of true demand, but presenting it as a commitment quietly promises output that does not exist, so the shortfall surfaces later as a missed customer date instead of a board-level choice. The lingering idea is that a plan's honesty lies in whether it names its own constraint: the job of integrated planning is not to make the gap disappear but to make it visible early enough that someone can decide what to do about it.",
    "Floe generated",
    true,
    "Demand says 130, the factory makes 100. A plan that promises 130 anyway has not closed the gap; it has hidden it. Until when?",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10100007,
    'Supply Chain',
    'S&OP and Cross-Functional Planning',
    "Whose order wins when there isn't enough",
    "Supply can cover only 70% of demand this month. In the allocation meeting, the sales VP with the loudest voice and the most urgent tone walks away with the most product. A junior analyst objects. On what principle should scarce supply actually be allocated, and why does 'loudest wins' quietly damage the business?",
    "Scarce supply should be allocated by an explicit, defensible rule agreed in advance (such as margin, strategic-account commitment, or contractual obligation), because allocating by who lobbies hardest optimizes for persuasiveness rather than business value and rewards the behavior of escalating instead of the value of the order",
    [
      ["Loudest-wins is acceptable, because urgency is a fair signal of which orders matter most", "Volume of complaint correlates with assertiveness, not with margin, strategic importance, or contractual risk, so it systematically misallocates supply toward whoever escalates best.", "Allocate against a pre-agreed value rule so the decision tracks business worth, not lobbying skill."],
      ["The product should simply be split evenly across all stakeholders to be fair", "Equal splits ignore that orders differ sharply in margin, strategic value, and contractual penalty, so 'fair' shares can starve the most valuable commitments while feeding the least.", "Prioritize by an explicit value-based rule rather than treating all demand as interchangeable."],
      ["The analyst is wrong to object, since the most senior person in the room should decide allocation", "Seniority is not an allocation principle; it just relabels 'loudest wins' as 'highest-ranking wins,' and both bypass the question of which orders create the most value.", "Tie allocation to a transparent rule the whole room agreed beforehand, independent of who is in it."],
    ],
    "Lesson: When supply is scarce, allocation is a zero-sum decision about whose demand goes unmet, and the only defensible way to make it is against an explicit rule fixed before the pressure arrives (margin, strategic account, service-level commitment, contractual penalty). Allocating by volume of protest is an incentive trap: it teaches every stakeholder that escalation, not order value, is the path to supply, so next month everyone shouts louder. The deeper idea is that a good process decides on principle in advance precisely so that, in the heated moment, the answer does not bend to whoever is most persuasive or most senior.",
    "Floe generated",
    true,
    "If shouting gets you product this month, what does everyone do next month? Decide the rule before the room heats up.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10100008,
    'Supply Chain',
    'S&OP and Cross-Functional Planning',
    "Review meeting or decision forum",
    "A company's monthly S&OP runs for two hours: each function presents polished slides reviewing last month's numbers, everyone nods, and the meeting ends. No constrained plan is produced and no tradeoff is decided. Demand and supply quietly diverge until a stockout forces a scramble. What has gone wrong with this S&OP, despite its discipline?",
    "It has degenerated into a status meeting rather than a decision forum: lots of review but no constrained plan and no decision, so the demand-supply gap is described every month but never resolved, and it festers until it forces an unplanned scramble",
    [
      ["Nothing is wrong; thorough monthly review of each function's numbers is exactly what S&OP is for", "Review is an input to S&OP, not its output; without producing a constrained plan and making a tradeoff call, the meeting informs everyone of the coming problem without ever deciding to act on it.", "Judge the meeting by the decision it produces (a constrained plan, an allocation, a gap closed), not by the quality of its slides."],
      ["The fix is to make the review slides more detailed so the divergence is easier to spot", "More detailed reporting describes the gap more precisely but still does not decide anything; the failure is the absence of a decision, not a shortage of information.", "Convert the review into a forced choice with options and a recommendation, rather than adding more data to admire."],
      ["The problem is simply that the meeting is too short and should run longer than two hours", "Length is not the issue; a longer status meeting is still a status meeting. The missing element is a constrained plan and an owned decision, which no amount of extra time alone supplies.", "Add a decision step and an owner to the agenda, not more minutes of review."],
    ],
    "Lesson: The point of S&OP is not to review the past but to commit to a single reconciled plan for the future and to make the hard tradeoff calls that demand and supply cannot resolve on their own. A meeting that only reviews creates a comforting illusion of control: everyone sees the same numbers, so it feels managed, while the unresolved gap keeps widening until it detonates as a stockout or an expedite. The deep idea is that visibility is not the same as decision; the value of integrated planning is realized only at the moment someone owns a choice, and a forum that never decides is just an expensive way of watching a problem arrive.",
    "Floe generated",
    true,
    "Everyone left informed and nobody left committed. What was the meeting supposed to produce besides agreement that there's a gap?",
    { challengeRating: 6 },
  ),
]
