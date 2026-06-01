import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe salesFundamentals top-up'

export const salesFundamentalsTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  // -------------------------------------------------------------------------
  // What Selling Is For
  // -------------------------------------------------------------------------
  {
    id: 7322000,
    chapter: 'What Selling Is For',
    title: 'Defining fit',
    prompt:
      'An early-stage SaaS rep wants to define an ideal customer profile (ICP). Which definition is most useful for focusing prospecting?',
    correct:
      'A description of the firmographics and pain that the best-fit, fastest-closing, lowest-churn customers share',
    wrong: [
      miss(
        'Any company large enough to afford the product',
        'Affordability alone says nothing about whether the product solves a real problem for them or whether they will stay.',
        'An ICP is built from your best customers’ shared traits and pain, not just their wallet size.',
      ),
      miss(
        'Whichever companies a competitor is currently selling to',
        'A competitor’s customer list reflects their fit and strategy, not evidence about who succeeds with your product.',
        'Derive the ICP from your own winning, low-churn accounts, not someone else’s pipeline.',
      ),
      miss(
        'The largest enterprise account a rep can imagine winning someday',
        'One aspirational logo is a trophy, not a profile; it does not tell a rep which segment to work daily.',
        'An ICP is a repeatable pattern across many good-fit accounts, not one dream deal.',
      ),
    ],
    lesson:
      'An ideal customer profile is reverse-engineered from your best customers: the firmographics and pain they share, how fast they close, and how well they retain. A sharp ICP makes prospecting selective and protects against winning deals that later churn.',
    source,
    generated: true,
  },
  {
    id: 7322001,
    chapter: 'What Selling Is For',
    title: 'Cost of a bad-fit win',
    prompt:
      'A rep can probably close a poor-fit prospect who lacks the use case the product is built for. Why is walking away often the better commercial decision?',
    correct:
      'A bad-fit customer is likely to churn, demand heavy support, and generate negative references, costing more than the deal earns',
    wrong: [
      miss(
        'Closing the deal would lower the rep’s commission rate for the quarter',
        'Commission structures do not generally penalize a closed deal; the real cost is churn, support load, and reputation.',
        'The reason to walk is downstream cost (churn, support, bad references), not how the commission is calculated.',
      ),
      miss(
        'Poor-fit customers are illegal to sell to under consumer protection rules',
        'Selling to a poor-fit but informed buyer is not illegal; it is simply often unprofitable and reputation-damaging.',
        'The issue is commercial value over the lifetime, not legality.',
      ),
      miss(
        'A rep should never close any deal without manager sign-off',
        'Blanket sign-off is not the principle; the principle is judging lifetime value and fit before pursuing a deal.',
        'Disqualification is about expected lifetime value, not a universal approval rule.',
      ),
    ],
    lesson:
      'Single-deal revenue is the wrong lens. A bad-fit customer often churns quickly, consumes disproportionate support, and tells peers the product did not work. Honest disqualification protects lifetime value, the forecast, and the rep’s time.',
    source,
    generated: true,
  },
  {
    id: 7322002,
    chapter: 'What Selling Is For',
    title: 'Consultative vs transactional',
    prompt:
      'Which situation most calls for a consultative selling approach rather than a fast transactional one?',
    correct:
      'A six-figure platform decision involving several departments, a formal evaluation, and a long payback horizon',
    wrong: [
      miss(
        'A one-click $9/month subscription a single user buys on impulse',
        'Low-price, single-user, self-serve purchases reward speed and simplicity, not multi-call discovery.',
        'Consultative selling pays off where the decision is complex, expensive, and multi-stakeholder.',
      ),
      miss(
        'A standardized commodity reorder the buyer makes every month',
        'Routine reorders are transactional by nature; heavy consultation would only add friction.',
        'Match effort to deal complexity; routine reorders do not need a diagnostic motion.',
      ),
      miss(
        'A small accessory add-on the customer already decided to buy',
        'When the buyer has already decided on a minor add-on, extended discovery wastes everyone’s time.',
        'Consultative depth is for considered, multi-party purchases, not foregone small add-ons.',
      ),
    ],
    lesson:
      'Consultative selling — diagnosis, multi-stakeholder discovery, and value framing — earns its cost on complex, high-value, multi-department decisions. For low-stakes, self-serve, or routine purchases, a lighter transactional motion serves the buyer better.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Prospecting and First Contact
  // -------------------------------------------------------------------------
  {
    id: 7322003,
    chapter: 'Prospecting and First Contact',
    title: 'Trigger events',
    prompt:
      'Which of these is the strongest trigger event to justify reaching out to a target account now?',
    correct:
      'The company just announced funding earmarked for expanding the exact function your product supports',
    wrong: [
      miss(
        'The company has a visually appealing website homepage',
        'Web design is not a buying signal; it says nothing about an emerging need or budget timing.',
        'A trigger event is a change that creates need or budget now — funding, hiring, a new exec, a public problem.',
      ),
      miss(
        'The company was founded more than ten years ago',
        'Company age is static background data, not a recent change that creates urgency.',
        'Triggers are recent changes, not long-standing facts about the firm.',
      ),
      miss(
        'A friend mentioned the company has a nice office',
        'Office quality is irrelevant to whether the account has a problem your product solves right now.',
        'Look for a recent, relevant change that explains why now is the right moment.',
      ),
    ],
    lesson:
      'A trigger event is a recent, observable change — new funding, a key hire, a reorg, a public incident, a competitor switch — that creates need or budget. Triggers answer "why now," which is what makes cold outreach relevant instead of random.',
    source,
    generated: true,
  },
  {
    id: 7322004,
    chapter: 'Prospecting and First Contact',
    title: 'Relevance beats volume',
    prompt:
      'A rep can send 500 identical generic emails per day or 40 researched, trigger-based, personalized emails per day. For pipeline quality, which is the better default and why?',
    correct:
      'The 40 researched emails, because relevance drives reply and meeting rates far more than raw send volume',
    wrong: [
      miss(
        'The 500 generic emails, because more sends always means more meetings',
        'Volume of irrelevant sends raises spam complaints and damages deliverability; reply rate, not send count, drives meetings.',
        'Meetings come from relevance and reply rate, not from maximizing undifferentiated sends.',
      ),
      miss(
        'The 500 emails, because personalization never changes outcomes',
        'Trigger-based personalization measurably improves reply rates; claiming it never matters contradicts how outreach performs.',
        'Personalization tied to a real trigger consistently lifts replies; that is the whole point.',
      ),
      miss(
        'Either is equal, because email outcomes are purely random',
        'Outreach outcomes are not random; relevance, timing, and a clear ask are controllable drivers of reply rate.',
        'Reply rate is driven by controllable relevance, not luck.',
      ),
    ],
    lesson:
      'Activity is not progress. High-volume generic blasts hurt deliverability and convert poorly, while fewer messages tied to a real trigger and a specific buyer earn replies. Optimize for relevant pipeline created, not emails sent.',
    source,
    generated: true,
  },
  {
    id: 7322005,
    chapter: 'Prospecting and First Contact',
    title: 'The opening line',
    prompt:
      'Which opening line for a cold email to an operations director is most likely to earn a reply?',
    correct:
      'A specific observation about a likely problem they have, tied to a recent change at their company',
    wrong: [
      miss(
        '"I hope this email finds you well. Let me tell you all about our award-winning platform."',
        'Generic pleasantries plus immediate product talk signals a mass blast and gives the reader no reason it concerns them.',
        'Lead with the buyer’s likely problem and a relevant trigger, not with your product.',
      ),
      miss(
        '"We are the leading innovative best-in-class solution in the market."',
        'Self-praise with no buyer relevance is exactly what readers learn to ignore; it makes no claim they can verify or use.',
        'Open with something true about their world, not adjectives about yours.',
      ),
      miss(
        '"Do you have 30 minutes for a quick call this week to learn about us?"',
        'Asking for time before establishing relevance gives a busy director no reason to spend it.',
        'Earn the meeting by showing relevance first; the ask comes after the reason.',
      ),
    ],
    lesson:
      'Cold outreach is read in seconds. The opening must answer "why are you contacting me, specifically, now?" A precise, problem-led observation tied to a trigger earns attention; pleasantries, self-praise, and an early ask do not.',
    source,
    generated: true,
  },
  {
    id: 7322006,
    chapter: 'Prospecting and First Contact',
    title: 'The warm path',
    prompt:
      'A rep needs to reach a VP who ignores cold email. A current happy customer knows that VP personally. What is the highest-leverage first move?',
    correct:
      'Ask the happy customer for a warm introduction or permission to mention them, then reach out',
    wrong: [
      miss(
        'Send the VP ten cold emails in a row to break through by persistence',
        'Repetition of ignored cold email tends to annoy rather than convert, and risks spam complaints and a burned account.',
        'A trusted referral path beats brute-force cold volume to a hard-to-reach exec.',
      ),
      miss(
        'Wait silently and hope the VP eventually searches for the product',
        'Passive waiting forfeits a strong, available referral channel and stalls the opportunity indefinitely.',
        'Use the warm connection you already have rather than waiting for inbound luck.',
      ),
      miss(
        'Show up unannounced at the VP’s office to demand a meeting',
        'Ambushing an executive damages reputation and the relationship far more than it helps.',
        'Leverage trust through the existing customer relationship, not surprise pressure.',
      ),
    ],
    lesson:
      'Referrals and warm paths convert far better than cold touches because they borrow existing trust. When a satisfied customer can introduce you to a hard-to-reach buyer, that path beats cold volume and reduces the buyer’s perceived risk.',
    source,
    generated: true,
  },
  {
    id: 7322007,
    chapter: 'Prospecting and First Contact',
    title: 'Open does not mean interested',
    prompt:
      'A rep reports a sequence as a success because it had a 70% open rate. The manager asks for the meaningful metric. What should the rep report instead?',
    correct:
      'The reply, qualified-meeting, and pipeline-created rates, since those reflect actual buyer interest',
    wrong: [
      miss(
        'A higher open rate next month as the only goal',
        'Open rate is a vanity metric easily inflated and unreliable; chasing it does not produce qualified meetings.',
        'Measure outcomes that signal real interest — replies, meetings booked, pipeline created.',
      ),
      miss(
        'The total number of emails sent, regardless of response',
        'Send volume measures effort, not result; it tells the manager nothing about whether outreach is working.',
        'Report results buyers caused (replies, meetings), not activity the rep controlled.',
      ),
      miss(
        'The average length of the emails written',
        'Email length is an input choice, not an outcome, and longer is not inherently better or worse.',
        'Judge the sequence by buyer responses, not by formatting characteristics.',
      ),
    ],
    lesson:
      'Opens (and clicks) are activity-adjacent vanity metrics, increasingly unreliable thanks to automated email scanning. Meaningful prospecting metrics are buyer-driven: reply rate, qualified meetings booked, and pipeline created.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Discovery
  // -------------------------------------------------------------------------
  {
    id: 7322008,
    chapter: 'Discovery',
    title: 'SPIN question types',
    prompt:
      'In SPIN selling, a rep asks, "If invoices keep going out late, what does that do to your cash flow and customer trust?" Which type of SPIN question is this?',
    correct:
      'An Implication question, because it draws out the consequences and cost of the problem',
    wrong: [
      miss(
        'A Situation question, because it gathers background facts',
        'Situation questions collect neutral context (how many invoices, what system); this question instead explores consequences.',
        'Situation questions gather facts; this one develops the cost of a problem, which is the Implication stage.',
      ),
      miss(
        'A Need-payoff question, because it describes the solution’s benefit',
        'Need-payoff questions ask the buyer to articulate the value of solving the problem; this question explores the pain’s impact instead.',
        'Need-payoff focuses on the upside of a fix; this asks about the damage of the unsolved problem.',
      ),
      miss(
        'A Problem question, because it names a difficulty',
        'A Problem question would simply surface that invoices go out late; this goes further by exploring the downstream impact.',
        'Problem questions surface the difficulty; Implication questions develop its consequences.',
      ),
    ],
    lesson:
      'SPIN questions move Situation → Problem → Implication → Need-payoff. Implication questions expose the cost of a problem and create urgency. Rackham’s research found top performers ask far more Implication questions than average reps.',
    source,
    generated: true,
  },
  {
    id: 7322009,
    chapter: 'Discovery',
    title: 'Symptom vs root problem',
    prompt:
      'A buyer says, "We need a faster reporting tool." Before agreeing, what is the best discovery instinct?',
    correct:
      'Ask what decisions the reports drive and why current speed is a problem, to find the underlying need',
    wrong: [
      miss(
        'Immediately pitch your fastest reporting tier to match the stated request',
        'The stated request is a proposed solution; pitching to it risks solving a symptom while missing the real need.',
        'Probe the underlying decision and pain before accepting the buyer’s self-diagnosis.',
      ),
      miss(
        'Tell the buyer they are wrong about needing speed',
        'Flatly contradicting the buyer damages rapport and skips the diagnosis that would reveal what they actually need.',
        'Explore, don’t argue; questions surface the root problem better than correction.',
      ),
      miss(
        'Send a proposal for the most expensive plan to be safe',
        'Pricing before understanding the real problem produces a proposal disconnected from value and easy to reject.',
        'Diagnose the underlying need first; the right scope and price follow from it.',
      ),
    ],
    lesson:
      'Buyers often arrive with a self-prescribed solution that names a symptom. Good discovery asks what outcome or decision sits behind the request, so the rep solves the root problem rather than a surface complaint.',
    source,
    generated: true,
  },
  {
    id: 7322010,
    chapter: 'Discovery',
    title: 'Talk-to-listen ratio',
    prompt:
      'Recordings show a rep talks for about 80% of every discovery call. Why is this a problem, and what is the better target?',
    correct:
      'The rep is pitching instead of diagnosing; on discovery calls the buyer should do most of the talking',
    wrong: [
      miss(
        'It is fine, because the rep who talks most demonstrates the most expertise',
        'Dominating airtime on a discovery call signals pitching, not expertise, and leaves the buyer’s real needs unexplored.',
        'Discovery is about learning the buyer; the buyer should be talking most of the time.',
      ),
      miss(
        'The rep should aim to talk 95% so no buyer objection can surface',
        'Suppressing buyer input hides the very objections and needs the rep must understand to win.',
        'You want objections and needs to surface early, which requires the buyer to talk more, not less.',
      ),
      miss(
        'It is only a problem if the call runs over the scheduled time',
        'Call length is a separate issue; the core problem is that an 80%-rep-talk discovery call learns almost nothing.',
        'The issue is who is talking, not how long the call lasts.',
      ),
    ],
    lesson:
      'On a discovery call, the goal is to learn, which means the buyer should do most of the talking — often roughly two-thirds or more. A rep dominating airtime is pitching prematurely and missing the diagnosis that earns the right pitch.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Qualification and Stakeholder Mapping
  // -------------------------------------------------------------------------
  {
    id: 7322011,
    chapter: 'Qualification and Stakeholder Mapping',
    title: 'BANT, decoded',
    prompt:
      'In the BANT qualification framework, what do the four letters stand for?',
    correct:
      'Budget, Authority, Need, Timeline',
    wrong: [
      miss(
        'Brand, Audience, Network, Trust',
        'These are marketing-positioning words, not the BANT qualification criteria.',
        'BANT is a deal-qualification checklist about money, decision power, need, and timing.',
      ),
      miss(
        'Budget, Approval, Negotiation, Terms',
        'Approval, Negotiation, and Terms describe later deal mechanics, not the original BANT criteria.',
        'The A is Authority (who can decide), the N is Need, and the T is Timeline.',
      ),
      miss(
        'Buyer, Account, Number, Target',
        'These are CRM and quota terms, not the components of BANT.',
        'BANT qualifies on Budget, Authority, Need, and Timeline.',
      ),
    ],
    lesson:
      'BANT — Budget, Authority, Need, Timeline — is a lightweight qualification framework that suits faster, lower-complexity deals with few stakeholders. For complex enterprise deals it is usually supplemented by richer frameworks like MEDDIC.',
    source,
    generated: true,
  },
  {
    id: 7322012,
    chapter: 'Qualification and Stakeholder Mapping',
    title: 'The E in MEDDIC',
    prompt:
      'In the MEDDIC qualification framework, the "E" stands for Economic Buyer. Who is that?',
    correct:
      'The person with the discretionary authority and budget to give final approval to the purchase',
    wrong: [
      miss(
        'The end user who will operate the product day to day',
        'The daily user influences requirements and adoption but usually cannot release budget or grant final approval.',
        'The Economic Buyer holds the money and the final yes, which is often not the hands-on user.',
      ),
      miss(
        'The procurement clerk who processes the purchase order',
        'Procurement administers the paperwork but does not own the business decision to fund the purchase.',
        'Look for the person with discretionary budget authority, not the one filing the PO.',
      ),
      miss(
        'Whichever stakeholder is friendliest to the rep',
        'A friendly champion may have influence but rarely holds the budget; friendliness is not authority.',
        'The Economic Buyer is defined by budget and final approval power, not rapport.',
      ),
    ],
    lesson:
      'In MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion), the Economic Buyer holds discretionary budget and the final yes. Deals that never reach the Economic Buyer commonly stall, regardless of how much the users like the product.',
    source,
    generated: true,
  },
  {
    id: 7322013,
    chapter: 'Qualification and Stakeholder Mapping',
    title: 'Champion vs blocker',
    prompt:
      'A rep maps stakeholders and finds a security lead who keeps raising hard questions and could veto the deal. How should the rep treat this person?',
    correct:
      'As a potential blocker to engage early and win over with evidence, since an ignored veto returns at signature',
    wrong: [
      miss(
        'As irrelevant, since the friendly champion will simply overrule them',
        'A champion rarely overrules a security veto; skipping the security review tends to resurface it at the worst moment, near signature.',
        'A potential vetoer must be engaged early, not assumed away by a champion’s enthusiasm.',
      ),
      miss(
        'As an enemy to avoid until the contract is already signed',
        'Avoiding a blocker until signing maximizes their leverage and is a classic way that late-stage deals die.',
        'Engage blockers early with proof; surprises at signature destroy deals.',
      ),
      miss(
        'As the economic buyer, since they ask the most questions',
        'Asking many questions signals influence or risk-ownership, not budget authority; the security lead is usually not the economic buyer.',
        'Question volume is not authority; map this person as a blocker/influencer to satisfy.',
      ),
    ],
    lesson:
      'Stakeholder mapping distinguishes champions (advocate, sell internally), economic buyers (hold budget), and blockers (can veto). A blocker like security or legal must be engaged early with evidence; an ignored veto typically reappears at signature with maximum leverage.',
    source,
    generated: true,
  },
  {
    id: 7322014,
    chapter: 'Qualification and Stakeholder Mapping',
    title: 'Naming the weakest link',
    prompt:
      'Scored against MEDDIC, a deal is strong on Metrics, Pain, and Champion but the rep has never confirmed how the company actually evaluates, approves, and signs a purchase. Which letters are weak, and what does that imply?',
    correct:
      'Decision Process and Paper Process are weak, so the deal could stall in evaluation or procurement despite genuine interest',
    wrong: [
      miss(
        'No letters are weak, because a strong champion guarantees the deal will close',
        'A champion cannot substitute for an unknown evaluation and approval path; deals with real pain still die in undocumented procurement.',
        'Genuine interest plus an unknown decision/paper process is a classic stall risk, not a guaranteed close.',
      ),
      miss(
        'Metrics is weak, because the rep should re-verify the numbers regardless',
        'The scenario states Metrics is already strong; the gap is in how the decision and paperwork actually proceed.',
        'The missing knowledge is the buying and signature path, not the value metrics.',
      ),
      miss(
        'Competition is weak, so the rep should immediately drop the price',
        'Nothing in the scenario points to competitive pressure, and reflexive discounting does not address an unknown decision process.',
        'The named gap is the process to decide and sign, not a price war.',
      ),
    ],
    lesson:
      'MEDDIC (and MEDDPICC, which adds Paper Process and Competition) is a checklist for finding a deal’s weakest link. Even with strong pain and a champion, an unknown Decision Process or Paper Process is a common reason real deals stall before signature.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Value, Proof, and ROI
  // -------------------------------------------------------------------------
  {
    id: 7322015,
    chapter: 'Value, Proof, and ROI',
    title: 'Payback period',
    prompt:
      'A solution costs $60,000 per year and is projected to save the buyer $15,000 per month in labor. Approximately what is the simple payback period?',
    correct:
      'About 4 months',
    wrong: [
      miss(
        'About 4 years',
        'This confuses the annual cost with a multi-year horizon; $15,000 saved per month covers the $60,000 cost in months, not years.',
        'Compare monthly savings to total cost: $60,000 ÷ $15,000 per month ≈ 4 months.',
      ),
      miss(
        'About 12 months',
        'Twelve months would only be right if monthly savings were $5,000; here savings are $15,000 per month.',
        'Payback = cost ÷ savings per period = $60,000 ÷ $15,000 = 4 periods (months).',
      ),
      miss(
        'About 1 month',
        'One month of savings is $15,000, which does not yet cover the $60,000 cost; it takes four such months.',
        'Divide total cost by monthly savings: 60,000 ÷ 15,000 = 4 months.',
      ),
    ],
    lesson:
      'Simple payback period = cost ÷ savings per period. Here $60,000 ÷ $15,000 per month ≈ 4 months. A short, clearly-assumed payback is one of the most persuasive value arguments, but only if the savings assumptions survive scrutiny.',
    source,
    generated: true,
  },
  {
    id: 7322016,
    chapter: 'Value, Proof, and ROI',
    title: 'Tailoring the proof point',
    prompt:
      'A rep is presenting to a CFO who cares about financial impact. Which proof point is most persuasive to this stakeholder?',
    correct:
      'A comparable customer cut DSO by 12 days, freeing roughly $2M in working capital within two quarters',
    wrong: [
      miss(
        'The product has won three design awards for its user interface',
        'Design awards may impress users but do not speak to the financial outcomes a CFO is accountable for.',
        'Match the proof to the stakeholder; a CFO weighs cash, cost, and risk, not UI accolades.',
      ),
      miss(
        'End users on a review site said the app "feels modern and fun"',
        'Subjective user sentiment does not translate into the financial case a CFO needs to justify spend.',
        'Tailor evidence to the buyer’s metrics — for a CFO, quantified financial impact.',
      ),
      miss(
        'The vendor has the largest sales team in its category',
        'Sales-team size is a vendor fact, not a buyer outcome, and is irrelevant to financial value.',
        'Persuasive proof shows the buyer’s likely result, framed in the stakeholder’s own terms.',
      ),
    ],
    lesson:
      'Persuasive value is tailored. The Challenger idea of tailoring for resonance means framing proof in the specific stakeholder’s terms: a CFO wants quantified financial outcomes (cash freed, cost cut, risk reduced) from a comparable customer, not awards or sentiment.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Objections and Negotiation
  // -------------------------------------------------------------------------
  {
    id: 7322017,
    chapter: 'Objections and Negotiation',
    title: 'Know your BATNA',
    prompt:
      'In a negotiation, what is your BATNA?',
    correct:
      'Your Best Alternative To a Negotiated Agreement — the best outcome you can get if this deal falls through',
    wrong: [
      miss(
        'The lowest price you are secretly willing to accept',
        'That describes your reservation price (your walk-away limit), not your BATNA (your best fallback option away from the table).',
        'BATNA is your best option if you walk; the walk-away price is the separate reservation price.',
      ),
      miss(
        'The first offer you put on the table to anchor the other side',
        'That is your opening anchor, a tactic; the BATNA is your underlying alternative if no deal is reached.',
        'The anchor is a move you make; the BATNA is the fallback that gives you power to make it.',
      ),
      miss(
        'The midpoint between your offer and theirs',
        'The midpoint is a possible settlement point, not your alternative to settling at all.',
        'BATNA answers "what do I do if there is no deal," not "where might we meet."',
      ),
    ],
    lesson:
      'Your BATNA is your best alternative if the negotiation fails. A strong BATNA is leverage: it lets you judge offers calmly and walk away from terms worse than your fallback. It is distinct from your reservation price (your walk-away limit) and from anchoring (your opening move).',
    source,
    generated: true,
  },
  {
    id: 7322018,
    chapter: 'Objections and Negotiation',
    title: 'The ZOPA',
    prompt:
      'A seller will not go below $80,000. A buyer will not pay above $95,000. What is the Zone of Possible Agreement (ZOPA)?',
    correct:
      '$80,000 to $95,000, since any price in that range beats both sides’ walk-away points',
    wrong: [
      miss(
        'There is no ZOPA, because the two numbers are different',
        'Different numbers do not preclude a deal; a ZOPA exists precisely because the seller’s floor is below the buyer’s ceiling.',
        'A ZOPA exists when the seller’s minimum is less than the buyer’s maximum — here, $80k < $95k.',
      ),
      miss(
        'Exactly $87,500, the midpoint, with no other price possible',
        'The midpoint is one possible settlement, not the zone; the whole $80k–$95k range is feasible.',
        'ZOPA is the overlapping range of acceptable prices, not a single midpoint.',
      ),
      miss(
        '$95,000 and above, since higher is always better for the seller',
        'Above $95,000 exceeds the buyer’s walk-away point, so no deal is possible there; that range is outside the ZOPA.',
        'The ZOPA is bounded above by the buyer’s maximum, not unbounded upward.',
      ),
    ],
    lesson:
      'The Zone of Possible Agreement is the overlap between the seller’s minimum and the buyer’s maximum reservation prices. When the seller’s floor sits below the buyer’s ceiling, that overlapping band ($80k–$95k here) is where a deal is possible.',
    source,
    generated: true,
  },
  {
    id: 7322019,
    chapter: 'Objections and Negotiation',
    title: 'Trade, do not give',
    prompt:
      'A buyer asks for a 15% discount. Which response best protects the deal’s value while keeping it alive?',
    correct:
      'Offer to consider it in exchange for something, such as a longer term or a case-study commitment',
    wrong: [
      miss(
        'Grant the full 15% immediately so the buyer stays happy',
        'Conceding instantly trains the buyer to push harder, signals the original price was inflated, and gives away margin for nothing.',
        'Every concession should buy something; never give a discount for free.',
      ),
      miss(
        'Refuse to discuss price at all and repeat the list price',
        'Flatly refusing to engage can stall the deal and ignores a chance to trade for value the seller wants.',
        'Don’t stonewall; trade the concession for a term that improves the deal.',
      ),
      miss(
        'Counter with an even higher price to punish the request',
        'Raising the price in response is punitive and erodes trust without addressing the underlying value conversation.',
        'Re-anchor on value and trade concessions; do not retaliate.',
      ),
    ],
    lesson:
      'In negotiation, every concession should buy something in return. Trading a discount for a longer term, larger commitment, faster signature, or a reference protects total value, preserves credibility, and avoids training the buyer to grind on price.',
    source,
    generated: true,
  },
  {
    id: 7322020,
    chapter: 'Objections and Negotiation',
    title: 'Stall vs real objection',
    prompt:
      'A prospect who was engaged suddenly says, "Let me think about it," and goes quiet. What is the most useful next move?',
    correct:
      'Gently probe to surface the real concern — missing information, an unconvinced stakeholder, or timing',
    wrong: [
      miss(
        'Accept it at face value and stop following up entirely',
        '"Let me think about it" usually masks an unspoken concern; dropping the deal forfeits a recoverable opportunity.',
        'Treat a vague stall as a signal to diagnose, not as a final answer.',
      ),
      miss(
        'Immediately offer a discount to break the silence',
        'A pause is often about confidence or stakeholders, not price; discounting answers a question the buyer did not ask.',
        'Find the real concern first; price may be irrelevant to this stall.',
      ),
      miss(
        'Apply heavy pressure with a fake deadline to force a decision',
        'Manufactured urgency damages trust and tends to push a hesitant buyer further away rather than resolving their concern.',
        'Replace pressure with a clarifying question that surfaces what is actually holding them back.',
      ),
    ],
    lesson:
      'A vague stall like "let me think about it" is usually a symptom, not a real objection. The skilled move is to clarify before answering: surface the actual blocker — missing proof, an unconvinced stakeholder, or timing — rather than discounting or pressuring blindly.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Pipeline and Forecast Hygiene
  // -------------------------------------------------------------------------
  {
    id: 7322021,
    chapter: 'Pipeline and Forecast Hygiene',
    title: 'Mutual action plan',
    prompt:
      'To keep a complex late-stage deal on track to a target go-live date, what tool best aligns both sides on what must happen?',
    correct:
      'A mutual action plan listing each step, owner, and date from now through signature and onboarding',
    wrong: [
      miss(
        'A reminder in the rep’s own calendar to follow up sometime',
        'A private reminder coordinates nothing on the buyer side and does not commit them to the steps a complex deal needs.',
        'Use a shared, dated plan with owners on both sides, not a one-sided note.',
      ),
      miss(
        'A larger discount to motivate the buyer to move faster',
        'Discounting addresses price, not the sequencing of legal, security, and procurement steps that govern timing.',
        'Timing is driven by a shared step-by-step plan, not by price cuts.',
      ),
      miss(
        'A weekly "just checking in" email with no specific ask',
        'Content-free check-ins create noise without advancing any concrete step or assigning ownership.',
        'Replace vague check-ins with a mutual action plan that names steps, owners, and dates.',
      ),
    ],
    lesson:
      'A mutual action plan (MAP) is a shared, dated checklist of every remaining step — evaluation, security, legal, procurement, signature, onboarding — with owners on both sides. It turns a vague "we’re close" into evidence, exposes slippage early, and keeps the buyer’s process on track.',
    source,
    generated: true,
  },

  // -------------------------------------------------------------------------
  // Learning From Wins and Losses
  // -------------------------------------------------------------------------
  {
    id: 7322022,
    chapter: 'Learning From Wins and Losses',
    title: 'Reviewing wins too',
    prompt:
      'A team only runs reviews on lost deals, never won ones. Why is reviewing wins also valuable?',
    correct:
      'Wins can be lucky or for reasons you misunderstand; reviewing them reveals what is truly repeatable',
    wrong: [
      miss(
        'There is no value; a win proves everything was done correctly',
        'A win does not prove process quality — deals are won despite mistakes or by luck, and without review those lessons are lost.',
        'A closed deal is an outcome, not proof the process was sound; review reveals what was repeatable.',
      ),
      miss(
        'Only to celebrate and boost morale, not to learn anything',
        'Celebration has its place, but the analytical value of a win review is identifying the repeatable causes of success.',
        'The point is learning what actually drove the win, not only morale.',
      ),
      miss(
        'Because the customer expects a formal review meeting after buying',
        'Win/loss review is an internal learning practice; it is not driven by customer expectation of a ceremony.',
        'Review wins to extract repeatable causes, not to satisfy a customer formality.',
      ),
    ],
    lesson:
      'Win/loss review should cover both outcomes. Losses expose what to fix; wins reveal what is genuinely repeatable versus lucky. Reviewing only losses leaves a team unable to deliberately reproduce its successes.',
    source,
    generated: true,
  },
  {
    id: 7322023,
    chapter: 'Learning From Wins and Losses',
    title: 'Why-we-lost honesty',
    prompt:
      'After a loss, where is the most reliable place to learn the real reason the buyer chose the competitor?',
    correct:
      'A neutral debrief that asks the buyer directly what drove their decision and what would have changed it',
    wrong: [
      miss(
        'The rep’s own assumption about what probably went wrong',
        'A rep’s self-generated theory is often wrong or self-serving; the buyer’s actual reasons frequently differ from what the rep assumes.',
        'Ask the buyer; internal guesses are the least reliable source of the real reason.',
      ),
      miss(
        'Whichever explanation makes the team feel least responsible',
        'Choosing the most face-saving story prevents learning and tends to repeat the same loss next quarter.',
        'Prioritize an honest, evidence-based reason over a comfortable one.',
      ),
      miss(
        'The assumption that the competitor simply bought the deal with a lower price',
        'Reflexively blaming price often masks the real driver — fit, trust, or process — and is frequently untrue.',
        'Verify the decision driver with the buyer rather than defaulting to a price story.',
      ),
    ],
    lesson:
      'The most reliable source of a loss reason is a neutral debrief with the buyer, separating facts from assumptions. Self-serving internal stories — especially reflexive "we lost on price" — block learning and repeat the loss.',
    source,
    generated: true,
  },
])
