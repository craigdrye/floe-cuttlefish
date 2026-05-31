// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the AP Microeconomics hand bank in highEconomics.ts
// (`highMicroeconomicsHandBankQuestions`).
//
// AP_MICRO_SUB_TOPICS groups questions into clusters that align with the
// six AP Microeconomics units:
//   Unit 1 - Basic Economic Concepts (scarcity, opportunity cost, PPF, comparative advantage)
//   Unit 2 - Supply & Demand (curves, equilibrium, elasticity, surplus, tax incidence)
//   Unit 3 - Production, Cost, Perfect Competition (TC/AC/MC, profit max, shutdown)
//   Unit 4 - Imperfect Competition (monopoly, monopolistic competition, oligopoly, game theory)
//   Unit 5 - Factor Markets (labor demand/supply, MRP, monopsony)
//   Unit 6 - Market Failure (externalities, public goods, asymmetric information, inequality)
//
// AP_MICRO_MENTOR_HINTS overrides the generic scaffold hint with a learner-facing
// AP Microeconomics nudge: name the model, graph, or formula being tested and
// point the learner toward the reasoning without giving away the answer.
//
// AP_MICRO_CORRECT_SHORTENED trims `correct` strings flagged by the length-heuristic
// audit (correct >=1.8x longer than longest wrong AND >=20 chars longer). Trimmed
// explanatory clauses are reattached via `lessonAddendum` so no information is lost.

export const AP_MICRO_SUB_TOPICS: Record<string, number[]> = {
  // -------------------- Unit 1: Basic Economic Concepts --------------------
  'Scarcity & Opportunity Cost': [
    16105, 16107,
  ],
  'Comparative Advantage': [
    16121,
  ],

  // -------------------- Unit 2: Supply, Demand & Elasticity --------------------
  'Demand & Supply Basics': [
    16101, 16106, 16108,
  ],
  'Elasticity': [
    16110,
  ],
  'Surplus, Taxes & Price Controls': [
    16104, 16111, 16115,
  ],

  // -------------------- Unit 3: Production, Cost & Perfect Competition --------------------
  'Costs & Marginal Analysis': [
    16102, 16704, 16709,
  ],
  'Profit Maximization & Shutdown': [
    16112, 16122,
  ],

  // -------------------- Unit 4: Imperfect Competition --------------------
  'Monopoly': [
    16103, 16109, 16705,
  ],
  'Price Discrimination': [
    16123, 16703,
  ],
  'Monopolistic Competition': [
    16116,
  ],
  'Oligopoly & Game Theory': [
    16113, 16117, 16701, 16706,
  ],

  // -------------------- Unit 5: Factor Markets --------------------
  'Labor Demand (MRP)': [
    16114,
  ],
  'Monopsony': [
    16708,
  ],

  // -------------------- Unit 6: Market Failure & Inequality --------------------
  'Externalities': [
    16118, 16702, 16124,
  ],
  'Asymmetric Information': [
    16119, 16707,
  ],
  'Inequality & Welfare': [
    16120, 16710,
  ],
}

export const AP_MICRO_MENTOR_HINTS: Record<number, string> = {
  // ---------- Unit 1: Basic Economic Concepts ----------
  16105: 'Economic cost includes both the money you actually pay and the best alternative you give up. Convert the time into forgone wages, then combine that implicit cost with the explicit ticket cost.',
  16107: 'Scarcity is not a temporary shortage or a moral judgment about people. It is the basic economic condition that forces choices because resources have limits while wants keep extending beyond them.',
  16121: 'Comparative advantage is about opportunity cost, not who can produce more in absolute terms. For each country, translate one banana into the number of apples sacrificed, then compare those tradeoffs.',

  // ---------- Unit 2: Supply, Demand & Elasticity ----------
  16101: 'Use the law of demand on a single fixed demand curve. When the good\'s own price changes, ask how buyers adjust the quantity they are willing and able to buy.',
  16106: 'Separate a change in quantity demanded from a change in demand. The good\'s own price moves the point on the existing curve, while income, tastes, related goods, expectations, and number of buyers shift the whole curve.',
  16108: 'Income elasticity is about how demand responds when income changes. If a higher income makes buyers switch away from a good, classify the good by the sign of that relationship rather than by whether it is cheap or common.',
  16110: 'Price elasticity of demand uses percent change in quantity demanded divided by percent change in price. After calculating the absolute value, compare it with 1 to decide whether buyers are relatively responsive.',
  16104: 'Consumer surplus measures the buyer\'s net gain from trade. On a demand graph, picture the space between what buyers were willing to pay and the market price they actually face.',
  16111: 'Tax incidence depends on relative elasticity, not on who physically sends the tax payment to the government. The side that has fewer good substitutes, and therefore adjusts quantity less, absorbs more of the burden.',
  16115: 'A binding price ceiling is set below equilibrium, so quantity demanded exceeds quantity supplied. The deadweight loss comes from trades that would have created gains for both sides but no longer happen.',

  // ---------- Unit 3: Production, Cost & Perfect Competition ----------
  16102: 'Marginal analysis focuses on the next unit, not the entire production process. Ask how total cost changes when output rises by exactly one more unit.',
  16704: 'A Giffen good is an extreme inferior-good case where the income effect overpowers the substitution effect. Think through what happens when a price increase makes a poor consumer feel poorer and pushes them toward more of the staple good.',
  16709: 'Perfect complements are goods used together in fixed proportions. Extra units of only one good add little or no utility, which is why the indifference curve has a sharp corner at the useful bundle ratio.',
  16112: 'Use marginal profit logic: if the next unit adds more revenue than cost, producing it helps; if it adds more cost than revenue, it hurts. The stopping rule is about the last unit, not total revenue or the highest possible price.',
  16122: 'Pay attention to the time horizon. In the short run, variable cost determines whether to shut down temporarily; in the long run, all costs must be covered for the firm to remain in the market.',

  // ---------- Unit 4: Imperfect Competition ----------
  16103: 'Classify the market by the seller side first. A monopoly has market power because buyers cannot easily turn to many equivalent sellers offering close substitutes.',
  16109: 'A pure monopoly needs both market concentration and protection from entry. Check whether the option rules out close substitutes and explains why rivals cannot quickly compete away the market power.',
  16705: 'Natural monopoly is an economies-of-scale story, not mainly a legal privilege or resource ownership story. If one large network can serve the relevant market at lower average cost than multiple smaller firms, the cost curve explains the structure.',
  16123: 'First-degree price discrimination lets the firm tailor price to each buyer\'s willingness to pay. Trace the demand curve as marginal revenue and ask where the surplus goes when every buyer pays their maximum.',
  16703: 'With perfect price discrimination, selling one more unit does not require cutting the price on earlier units. That changes the monopolist\'s marginal revenue calculation and pushes output toward the efficient quantity.',
  16116: 'In monopolistic competition, free entry removes economic profit in the long run, but product differentiation leaves the firm facing a downward-sloping demand curve. The tangency with ATC occurs before minimum efficient scale, creating excess capacity.',
  16113: 'For a Nash equilibrium, hold one player\'s choice fixed and ask whether the other player would switch; then reverse the test. Stability comes from mutual best responses, even if the outcome is not the best total payoff.',
  16117: 'Tit-for-tat supports cooperation in repeated games by making behavior predictable and conditional. It rewards cooperation, responds to cheating, and then allows cooperation to restart after punishment.',
  16701: 'A Prisoner\'s Dilemma separates individual incentives from collective welfare. Each player can have a privately rational move that leaves both players worse off than a cooperative outcome would have.',
  16706: 'Cournot is the quantity-competition model: each firm chooses output while treating the rival\'s output as fixed. The equilibrium comes where both firms\' reaction functions are consistent with each other.',

  // ---------- Unit 5: Factor Markets ----------
  16114: 'Labor hiring is a marginal benefit versus marginal cost decision. The benefit of one more worker is that worker\'s marginal revenue product, so compare that value with the wage.',
  16708: 'A monopsonist is the buyer with wage-setting power in a labor market. Because hiring another worker requires raising pay along an upward-sloping labor supply curve, marginal factor cost sits above the wage curve.',

  // ---------- Unit 6: Market Failure & Inequality ----------
  16118: 'For a negative production externality, private decision makers ignore part of the social cost. Draw marginal social cost above marginal private cost, then compare the market outcome with the socially efficient outcome.',
  16702: 'A Pigouvian tax is designed to make private decision makers face the external damage their production creates. On the graph, it raises the private supply/cost curve toward the social cost curve.',
  16124: 'The Coase Theorem is about private bargaining over externalities. It works only when the parties know who owns the relevant rights and bargaining itself is cheap enough to make negotiation practical.',
  16119: 'The lemons model is an adverse selection story: one side knows quality before trade and the other side cannot verify it. Think through why average pricing can push high-quality sellers away and make the market unravel.',
  16707: 'Adverse selection happens before a transaction because hidden information affects who chooses to participate. Compare that with moral hazard, where behavior changes after the transaction because one side is insulated from consequences.',
  16120: 'The Gini coefficient measures distribution, not output growth or poverty by itself. Values closer to 0 mean more equal incomes, while values closer to 1 mean income is much more concentrated.',
  16710: 'Pareto efficiency in exchange means there are no mutually beneficial trades left between consumers. In an Edgeworth box, that condition occurs where consumers value the tradeoff between goods at the same marginal rate.',
}

export const AP_MICRO_CORRECT_SHORTENED: Record<number, { newCorrect?: string; lessonAddendum?: string }> = {
  16104: {
    newCorrect: 'Willingness to pay minus price actually paid.',
    lessonAddendum: 'Consumer surplus is the gap between the maximum a buyer would have paid and the market price — graphically, the area under the demand curve and above the price line.',
  },
  16124: {
    newCorrect: 'Property rights are clear and transaction costs are low.',
    lessonAddendum: 'The Coase Theorem says that when property rights are well-defined and bargaining is cheap, private parties can negotiate to the efficient level of an externality regardless of how rights are initially assigned. Allocation affects distribution but not efficiency.',
  },
  16123: {
    newCorrect: 'Zero consumer surplus, no deadweight loss.',
    lessonAddendum: 'Under perfect (first-degree) price discrimination the firm charges each buyer their exact willingness to pay. The demand curve becomes the MR curve, so output expands to the competitive level and every unit of consumer surplus is converted into producer surplus.',
  },
  16701: {
    newCorrect: 'Mutual defection is Pareto-inferior to mutual cooperation.',
    lessonAddendum: 'Each player has a dominant strategy to defect, so rational play converges on the (defect, defect) outcome. Yet both would have been strictly better off cooperating — the equilibrium is individually rational but collectively suboptimal.',
  },
  16702: {
    newCorrect: 'It forces marginal private cost up to marginal social cost.',
    lessonAddendum: 'A Pigouvian tax equal to the marginal external damage internalizes the externality. The supply curve shifts up by the tax, output falls to the socially optimal quantity, and deadweight loss from the externality is eliminated.',
  },
  16703: {
    newCorrect: 'They capture all consumer surplus, so MR equals price for every unit.',
    lessonAddendum: 'Because the firm charges each buyer their exact willingness to pay, selling one more unit no longer requires lowering the price on previous units. MR coincides with the demand curve, so the profit-maximizing output is identical to the competitive outcome and deadweight loss is zero.',
  },
  16704: {
    newCorrect: 'The income effect dominates the substitution effect.',
    lessonAddendum: 'Giffen goods are extreme inferior goods (typically a staple in a low-income setting). A price increase makes consumers feel poorer, and because the good is inferior they consume more of it — producing the rare upward-sloping demand curve.',
  },
  16705: {
    newCorrect: 'LRATC declines over the full range of market demand.',
    lessonAddendum: 'A natural monopoly arises from economies of scale: long-run average total cost keeps falling as output grows, so one firm can supply the entire market more cheaply than two or more firms could. Think water networks, electricity transmission, rail.',
  },
  16706: {
    newCorrect: 'They simultaneously choose quantities, taking the rival\'s output as given.',
    lessonAddendum: 'Cournot competition: each firm picks its profit-maximizing quantity assuming the rival\'s quantity is fixed. Reaction functions cross at the Nash equilibrium, producing an output between monopoly and perfect-competition levels.',
  },
  16707: {
    newCorrect: 'Sellers know quality buyers cannot verify, so good cars exit the market.',
    lessonAddendum: 'Akerlof\'s lemons model: when only sellers know true quality, buyers offer an average price. Owners of high-quality cars refuse that price and withdraw, pushing average quality down further — an adverse selection spiral that can collapse the market entirely.',
  },
  16708: {
    newCorrect: 'MRP equals MFC, so wages sit below the competitive level.',
    lessonAddendum: 'A monopsonist must raise the wage for all workers to hire one more, so the marginal factor cost curve lies above the labor supply curve. Hiring where MRP = MFC yields fewer workers and a lower wage (read off the supply curve) than the competitive MRP = wage outcome.',
  },
}
