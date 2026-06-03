import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const procurementContractingRoadmapGems: Question[] = [
  // ---------------------------------------------------------------------------
  // Chapter: Pricing and Contract Types
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10076000,
    'Career Skills',
    'Pricing and Contract Types',
    'When a Quote Proves Nothing',
    'Two buys land on your desk. For the first, four independent suppliers bid on the same well-defined item and the prices cluster tightly. For the second, only one supplier can do the specialized work, and it sends you a single detailed quote. A colleague says, "Both came with quotes, so for both just confirm the price looks reasonable against the quote and move on." For which buy is that move actually inadequate, and why?',
    'The sole-source buy: with no competition there is no market to test the price against, so you must look under the price at the actual cost elements (labor, materials, overhead, fee) — a quote alone cannot prove reasonableness when nothing competes with it.',
    [
      [
        'Neither — a written quote from any supplier is itself sufficient evidence that the price is reasonable',
        'A quote is what the seller wishes to be paid, not evidence the figure is reasonable; price analysis needs an external benchmark (competition, market, history) the quote does not supply',
        'Reasonableness is a comparison, not a document — one unchallenged number compares to nothing',
      ],
      [
        'The competitive buy, because more bidders means more numbers to reconcile and a higher chance of error',
        'Reverses the logic: genuine competition is the strongest single basis for reasonableness, so it needs the least extra scrutiny, not the most',
        'Adequate price competition normally establishes a fair price on its own; the work moves to the buy that lacks that test',
      ],
      [
        'Both, because every quote must be broken down into its underlying cost elements before any award',
        'Confuses price analysis with cost analysis and over-applies the harder tool; tearing apart cost elements when real competition already proves the price wastes effort and overreaches',
        'Cost analysis is triggered by the absence of competition, not required universally; the competitive buy is already answered by the market',
      ],
    ],
    'Lesson: Procurement splits the question "is this price okay?" into two tools. Price analysis judges the total against an outside benchmark — competing bids, market or catalog prices, past buys, your own estimate — and never opens up the cost build-up. Cost analysis pries the price apart into labor, materials, overhead, and fee, and is reserved for when no benchmark exists. The deep point is that a price is only meaningful relative to something else: with real competition the rival bids do the proving for you, but a lone quote in a market of one is just a number until you reconstruct the costs beneath it. Mistaking "they sent a quote" for "the price is reasonable" is the classic confusion the discipline is built to prevent.',
    'Floe generated',
    true,
    'Ask what the price is being compared against. If the answer is "nothing," a quote cannot prove reasonableness.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10076001,
    'Career Skills',
    'Pricing and Contract Types',
    'The Price of Pretending the Scope Is Fixed',
    'A multi-year managed-service contract has scope that is only half-defined; nobody can yet say how much work the later years will involve. The budget owner insists on a firm-fixed-price contract "so the number can never move and we are fully protected." If suppliers are forced to bid one fixed price for genuinely uncertain work, what is the most likely result?',
    'Suppliers price their uncertainty as a fat contingency — they bake a risk premium into the fixed number to cover the worst case — so the buyer pays more than the work will probably cost, or capable suppliers decline to bid at all.',
    [
      [
        'Suppliers absorb the uncertainty for free, since a firm-fixed-price contract legally forbids them from charging for unknown work',
        'A fixed price is not a discount on risk; it transfers cost risk to the supplier, who rationally charges to carry it, so the buyer funds the contingency inside the headline price',
        'Fixed price moves who bears the risk, not whether it is paid for; the buyer pays for uncertainty either as a premium now or a dispute later',
      ],
      [
        'The buyer gets the lowest possible price, because fixed-price competition always forces suppliers to cut margins to the bone',
        'Confuses well-defined fixed-price competition with this case; with undefined scope there is no shared thing to compete on, so "lowest" is meaningless and bids diverge on assumptions',
        'Price competition only sharpens prices when bidders are pricing the same defined work; uncertainty reintroduces padding, not a price war',
      ],
      [
        'The scope automatically becomes clearer, because committing to a fixed price disciplines everyone into defining the work precisely',
        'A contract type cannot retroactively define a scope the parties do not yet understand; the fixed number just hides the ambiguity until it resurfaces as a change order',
        'The uncertainty does not vanish because you signed a fixed figure; it reappears as contingency, claims, or refused bids',
      ],
    ],
    'Lesson: A contract type is not a billing format — it is a deliberate decision about who carries the risk that costs turn out different from expected. Firm-fixed-price puts that risk on the supplier, which is ideal when scope is well defined and the supplier can confidently price it. But force fixed price onto genuinely undefined work and the supplier does the only rational thing: it prices the uncertainty as a contingency you pay for whether or not the bad case happens, or it walks away. The deeper, counterintuitive lesson is that demanding "the number can never move" does not eliminate the buyer\'s risk — it converts an honest unknown into a guaranteed premium. Uncertain or developmental work belongs on cost-reimbursement or T&M structures with ceilings and surveillance, where the buyer pays for what actually happens instead of for the supplier\'s fear of what might.',
    'Floe generated',
    true,
    'Fixed price does not delete risk; it sells it to the supplier, who charges you for it. Ask where the uncertainty actually lives.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10076002,
    'Career Skills',
    'Pricing and Contract Types',
    'The Lowball That Costs You More',
    'You are awarding a cost-reimbursement contract — one where the buyer pays the supplier\'s actual allowable costs plus a fee, not a locked price. One offeror proposes a strikingly low total cost: far below the others, and below your own estimate of what the work takes. A teammate cheers: "Lowest cost, and we reimburse actuals anyway, so we are protected — award it." Why is that reasoning dangerous on this exact contract type?',
    'On a cost-reimbursement contract the proposed cost is not a ceiling — the buyer pays whatever the work actually costs — so an unrealistically low bid does not save money; you should evaluate the probable cost by adjusting each offeror\'s figure to realistic levels and pick on that, not on the optimistic proposed number.',
    [
      [
        'The low bid is fine because a cost-reimbursement contract caps the buyer\'s payment at the proposed figure',
        'Inverts the defining feature of the type: the proposed cost is an estimate, not a cap, so the low number gives no real protection and the buyer absorbs the overrun',
        'The thing that would make the lowball safe — a hard ceiling — is exactly what a cost-reimbursement contract does not provide',
      ],
      [
        'The low bid is automatically the best value, since lowest evaluated cost is the deciding factor in every award',
        'Treats lowest price as a reflex and skips cost realism; the cheapest proposed number can be the most expensive outcome once it balloons into overruns and change orders',
        'Best value weighs probable cost and performance risk, not the most optimistic figure on the page',
      ],
      [
        'The low bid is a problem only because it is unfair to the higher, more honest bidders',
        'Names a fairness side effect but misses the buyer\'s own exposure; the core risk is that the buyer, not the rival bidders, pays the overrun and inherits the schedule slip',
        'The decisive flaw is financial and performance risk to the buyer, not bidder fairness; cost realism exists to protect the spend, not feelings',
      ],
    ],
    'Lesson: On a firm-fixed-price deal a too-low bid is mostly the supplier\'s problem; on a cost-reimbursement deal it is the buyer\'s. Because the buyer ultimately pays actual allowable costs, the supplier\'s optimistic number is not a promise but a forecast, and an unrealistically low one signals a buy-in: win now, overrun later. Cost realism is the defense — the buyer adjusts each proposal up to its probable cost and selects on that figure, so the bidder who lowballed cannot purchase the award with a number it could never deliver. The lingering insight is that "lowest" only means "cheapest" when the price is actually fixed; the moment the buyer carries the cost risk, the lowest proposed number can be the most expensive choice on the table.',
    'Floe generated',
    true,
    'Ask whether the proposed cost is a ceiling or just an estimate. On cost-reimbursement, the buyer eats the overrun.',
    { challengeRating: 6 },
  ),
  // ---------------------------------------------------------------------------
  // Chapter: Evaluation, Negotiation, and Award
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10076003,
    'Career Skills',
    'Evaluation, Negotiation, and Award',
    'The Capable Bidder Who Forgot a Form',
    'You ran a sealed-bid competition. The lowest bidder is a well-known, financially solid firm that has done this work for years — but its bid omitted a mandatory signed certification the solicitation required every bid to include. The next bidder is fully compliant but more expensive. A reviewer asks: should you treat the missing certification as a "responsibility" concern and just ask the low bidder to fix it after the fact?',
    'No — a bid that fails to include a required material term is nonresponsive, and responsiveness is judged from the bid as submitted at bid opening; you cannot let the bidder cure it afterward, so the noncompliant low bid is out even though the firm itself is plainly capable.',
    [
      [
        'Yes — since the firm is obviously capable and trustworthy, the missing form is a responsibility matter you can resolve before award',
        'Conflates responsiveness (did the bid meet the solicitation\'s terms?) with responsibility (can the firm perform?); a missing mandatory term is a defect in the bid, not a question about the company',
        'Capability cannot rescue a bid that failed to conform; responsiveness turns on the document submitted, not the bidder\'s reputation',
      ],
      [
        'Yes — responsiveness can be cured any time before award, just like a responsibility finding can',
        'Erases the asymmetry that protects the competition: responsiveness is locked at bid opening, while responsibility can be established right up to award, so the two are not curable on the same timeline',
        'Letting a bidder fix a nonconforming bid after opening hands it an advantage no rival had and taints the competition',
      ],
      [
        'No — but only because the lower price proves the firm is hiding something and cannot really be trusted',
        'Reaches the right disposition for the wrong reason; the bid is out because it failed to conform on its face, with nothing implied about the firm\'s honesty or capability',
        'The disqualifier is the missing material term, not a suspicion about motive; responsiveness is mechanical, not a character judgment',
      ],
    ],
    'Lesson: Two different questions decide an award, and conflating them poisons files. Responsiveness asks whether the offer itself met the solicitation\'s material terms — it is judged from the four corners of the bid as submitted, frozen at bid opening, so a missing mandatory term cannot be fixed later without giving that bidder an unfair second chance. Responsibility asks whether the supplier can actually perform — capacity, finances, past performance, integrity — and that can be investigated and established right up until award. The beautiful tension is that the same firm can be entirely responsible yet submit a nonresponsive bid: a capable company is knocked out by a clerical omission precisely because the rule protects every bidder\'s equal footing, not the buyer\'s wish to keep its favorite. Mixing the two — curing a responsiveness defect as if it were a responsibility check — is exactly how a clean award becomes a sustained protest.',
    'Floe generated',
    true,
    'Two questions: did the BID conform (responsiveness, fixed at opening) and can the FIRM perform (responsibility, curable until award)? Keep them separate.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10076004,
    'Career Skills',
    'Evaluation, Negotiation, and Award',
    'The Tradeoff That Contradicts Itself',
    'Your solicitation announced a best-value tradeoff: technical merit weighted more heavily than price, so a stronger proposal could justify paying more. After evaluation, the technically strongest proposal also costs the most. The team, nervous about the optics of the higher price, quietly awards to the cheapest acceptable offer instead — without writing down why the extra value was not worth it. What is the core defect in that award?',
    'The award contradicts the evaluation scheme it published: having promised a best-value tradeoff and found the premium offer superior, the file must explain why that superiority was not worth its price — silently defaulting to lowest price both ignores the stated criteria and leaves no rationale a protest could not unseat.',
    [
      [
        'There is no defect — choosing the lowest acceptable price is always the safest, most defensible award',
        'Treats lowest price as a reflex even after promising a tradeoff; awarding on a basis you did not announce is the textbook ground for a sustained protest, not the safe choice',
        'Defensibility comes from following the criteria you published, not from picking the cheapest number after promising to weigh value',
      ],
      [
        'The defect is purely that technical merit was weighted above price, which is itself an improper way to evaluate offers',
        'A best-value tradeoff weighting non-price factors above price is entirely legitimate; the problem is abandoning that announced scheme at award, not having it',
        'The fault is the contradiction between stated criteria and actual decision, not the decision to value quality over cost',
      ],
      [
        'The defect is that the team should have reopened the competition once it saw the best proposal cost the most',
        'Invents an unnecessary step; the buyer may award to the higher-priced superior offer or, with a documented rationale, to the lower one — what it cannot do is switch bases in silence',
        'Nothing required reopening; the missing piece is a written tradeoff rationale, not a new round of bidding',
      ],
    ],
    'Lesson: A best-value tradeoff is a promise: the buyer told bidders it would weigh quality against price and might pay more for more. Two outcomes honor that promise — award to the superior, costlier offer, or award to the cheaper one with a documented explanation of why the extra value was not worth the extra dollars. What violates it is doing best-value scoring and then quietly awarding to the lowest price as if the scoring never happened, with no rationale in the file. The deep point is that in source selection the decision and the record are inseparable: the same award is defensible with a written tradeoff and indefensible without one, because a reviewer, a losing bidder, or an auditor judges not whether you reached a tempting answer but whether the file explains it against the rules you set. An unexplained award is the contradiction a protest is built on.',
    'Floe generated',
    true,
    'You may pay more for value, or pay less with a written reason — but you may never switch bases in silence. The file must explain the tradeoff.',
    { challengeRating: 6 },
  ),
  // ---------------------------------------------------------------------------
  // Chapter: Contract Administration and Closeout
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    10076005,
    'Career Skills',
    'Contract Administration and Closeout',
    'When a Change Is Really a Whole New Contract',
    'You hold a signed contract to maintain a small office building. Midway through, the requestor wants to fold in three additional buildings, double the service hours, and add a new category of work the original solicitation never mentioned — using the same contract and supplier to "save time." The supplier is willing. Your contract has a standard changes clause allowing modifications. Why can you not simply process this as a routine modification?',
    'The expansion is a cardinal change — it so fundamentally alters the nature of the bargain that it falls outside the changes clause entirely and is effectively a new contract that should have been competed; processing it as a modification would be slipping an un-competed buy past the competition that the new work was never offered to.',
    [
      [
        'You can — a changes clause lets you modify the contract however you like as long as the supplier agrees to the new terms',
        'A changes clause covers changes within the general scope of the bargain, not a transformation of it; mutual willingness cannot convert a brand-new requirement into an in-scope modification',
        'The supplier\'s consent does not cure the lost competition; a cardinal change exceeds what the clause was ever meant to authorize',
      ],
      [
        'You can, because the supplier is already performing well, which proves it is the best value for the expanded work too',
        'Past performance on the original scope says nothing about whether the new work would have drawn better or cheaper offers in an open competition; capability is not a substitute for competing the new buy',
        'Best value for the expansion can only be established by competing it, not inferred from satisfaction with the smaller job',
      ],
      [
        'You cannot, but only because adding work always requires a price increase the budget may not cover',
        'Names a budget side issue while missing the structural defect; even fully funded, the expansion is a different contract that bypassed competition — the problem is integrity of the competition, not affordability',
        'The fatal flaw is that the new scope was never competed, not that it costs more; money cannot legitimize an un-competed buy',
      ],
    ],
    'Lesson: Not every "change" is a change the contract can hold. A modification under the changes clause adjusts work that still lives within the general scope the parties originally struck. A cardinal change is so large it alters the very nature of the bargain — different magnitude, different kind of work, a deal the original competition never offered. The reason it cannot ride in on a modification is not paperwork but principle: it is, in substance, a new contract, and awarding new work without competing it defeats the fairness the first competition was meant to guarantee. The instinct the chapter installs is to ask, when scope grows, "is this still the contract I awarded, or a different one wearing its number?" — because the modification that quietly becomes an un-competed buy is one of the surest ways a clean file turns into a protest or an audit finding.',
    'Floe generated',
    true,
    'Ask: is this still the contract I competed, or a different one wearing its number? A cardinal change is a new buy, not a mod.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10076006,
    'Career Skills',
    'Contract Administration and Closeout',
    'The Change Nobody Signed',
    'During performance, you (with authority over the contract) tell the supplier in a meeting that the deliverables must meet a tighter standard than the contract actually specifies, and you reject early work until they comply. You never issue a written modification. Months later the supplier submits a claim for the extra cost of meeting that tighter standard. On what basis can the supplier argue it is owed more, even though no one ever signed a change?',
    'A constructive change — your direction effectively required work beyond the contract\'s requirements, so even without a formal modification the supplier can claim an equitable adjustment, because the buyer\'s conduct created a change in everything but name.',
    [
      [
        'It has no basis — without a signed written modification, nothing changed and the supplier is owed exactly the original price',
        'Treats the signature as the only thing that can create a change; in fact a buyer\'s authoritative direction to exceed the contract can create a change by conduct, which is precisely what a constructive change is',
        'A change can arise from what the buyer did, not only from what the buyer signed; informal direction still carries cost consequences',
      ],
      [
        'It can claim the contract is now void, because the buyer breached it by demanding more than was promised',
        'Overshoots the remedy: directing extra work entitles the supplier to be paid for that work via equitable adjustment, not to tear up the contract; the deal stands, adjusted',
        'The remedy for a constructive change is compensation for the added work, not voiding the agreement',
      ],
      [
        'It can claim the extra cost only if it can prove the buyer acted in bad faith or intended to cheat it',
        'Imports an intent test that does not apply; a constructive change turns on whether the buyer\'s direction effectively required work beyond the contract, regardless of motive or good faith',
        'No bad faith is needed — an honest, well-meant instruction to exceed the spec can still be a compensable constructive change',
      ],
    ],
    'Lesson: A change does not require a change order. When a buyer with authority directs a supplier to do more than the contract requires — tightens a standard, rejects conforming work, insists on extra steps — and the supplier complies, the law treats that as a constructive change: a change created by conduct rather than by signature, compensable through an equitable adjustment. The unsettling implication for an administrator is that you can spend the buyer\'s money without ever meaning to, simply by how you direct and accept work day to day. That is why the disciplined move is to process every real change through the formal modification mechanism, pricing and documenting it deliberately, instead of letting informal "while you\'re at it" direction quietly rewrite the deal and then surface, months later, as a claim the file cannot explain.',
    'Floe generated',
    true,
    'A signature is not what creates a change — authoritative direction to exceed the contract is. Watch what you direct, not just what you sign.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10076007,
    'Career Skills',
    'Contract Administration and Closeout',
    'Friendship Is Not a Remedy',
    'A key supplier is slipping: deliverables are late and quality is sliding. Your vendor scorecard flags it red, and you have a good personal relationship with the account manager, who keeps promising to "make it right." A year on, performance has not recovered and you have nothing but a stack of red scorecards and friendly emails. What did the administration approach actually fail to do?',
    'It relied on a scorecard and goodwill — which give feedback but carry no enforceable consequence — instead of invoking the contract\'s remedies (a cure notice, an equitable adjustment, or termination), so when performance slipped there was nothing with teeth to compel recovery.',
    [
      [
        'Nothing — a red scorecard is itself a contractual penalty, so the consequences were already in force',
        'Confuses a scorecard (feedback that records a problem) with a contract remedy (an enforceable consequence); recording the failure is not the same as having a lever to fix it',
        'A scorecard documents performance but does not compel it; only the contract\'s remedies create consequences the supplier must answer to',
      ],
      [
        'It failed to terminate the contract immediately the first time a deliverable was late',
        'Jumps straight to the harshest remedy and skips the graduated ones; the failure was using no remedy at all, not failing to leap to termination on day one',
        'The contract typically offers a ladder — cure notice first, then adjustment or termination — and the gap was never stepping onto it',
      ],
      [
        'It failed to maintain a closer personal relationship so the account manager would have tried harder',
        'Doubles down on the exact mistake; substituting relationship for remedy is what left the buyer with no leverage when goodwill alone could not fix performance',
        'A warmer relationship does not create an enforceable consequence; the missing element is a contractual lever, not more friendship',
      ],
    ],
    'Lesson: A vendor scorecard and a contract remedy do different jobs, and trusting the first to do the second\'s work is one of the most common administration failures. A scorecard is feedback — it measures and records how the supplier is doing. A remedy is an enforceable consequence the contract gives you when performance slips: a cure notice demanding correction, an equitable adjustment, termination for cause. The deeper lesson is that goodwill is not leverage. A friendly relationship can smooth a recovery, but it cannot compel one, and "relationship over remedy" leaves you, when the relationship is not enough, with a file full of red flags and nothing that bites. The disciplined administrator documents performance and keeps the contractual ladder ready, so that when promises stop working there is something with teeth to fall back on — and so the contract can finally be closed rather than left "done but not closed."',
    'Floe generated',
    true,
    'A scorecard records the problem; a remedy fixes it. Ask what in the contract actually compels recovery when goodwill runs out.',
    { challengeRating: 6 },
  ),
]
