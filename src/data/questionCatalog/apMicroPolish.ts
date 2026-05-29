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
// AP_MICRO_MENTOR_HINTS overrides the generic scaffold hint with a one-line
// second-person nudge in the voice of an AP Microeconomics teacher: name the
// model, graph, or formula that is being tested without giving away the answer.
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
  16105: 'Total economic cost = explicit (out-of-pocket) + implicit (forgone wages). Add both, do not pick one.',
  16107: 'Scarcity is the structural mismatch between finite resources and unlimited wants. Distinguish cause from symptom.',
  16121: 'Compute each country\'s opportunity cost per banana in apples. Lower opportunity cost wins the comparative advantage.',

  // ---------- Unit 2: Supply, Demand & Elasticity ----------
  16101: 'Law of demand: price and quantity demanded move inversely along a fixed demand curve.',
  16106: 'A price change moves you along the curve; only non-price determinants shift the curve itself. Mind the distinction.',
  16108: 'Income elasticity sign tells you the type. If income up and demand down, the good is inferior, not normal.',
  16110: 'Price elasticity of demand = % change in quantity demanded / % change in price. Order matters.',
  16104: 'Consumer surplus is the area between the demand curve and the price line — willingness to pay minus price paid.',
  16111: 'Tax incidence falls on the more inelastic side. Perfectly inelastic demand is the limiting case.',
  16115: 'A binding price ceiling sits below equilibrium, creates a shortage, and prevents trades whose surplus is positive.',

  // ---------- Unit 3: Production, Cost & Perfect Competition ----------
  16102: 'Marginal cost is the change in total cost from producing one additional unit. Stay incremental.',
  16704: 'For a Giffen good the income effect outweighs the substitution effect, flipping the demand curve\'s slope.',
  16709: 'Perfect complements are consumed in fixed proportions, giving L-shaped indifference curves at the kink.',
  16112: 'Profit is maximized where MR = MC, not where revenue or price is highest. Marginal logic governs.',
  16122: 'Long-run exit: P < ATC. Short-run shutdown: P < AVC. Pick the rule for the time horizon stated.',

  // ---------- Unit 4: Imperfect Competition ----------
  16103: 'Monopoly = one seller of a good with no close substitutes. Count the sellers.',
  16109: 'Pure monopoly requires a single seller, no close substitutes, and high barriers to entry.',
  16705: 'A natural monopoly arises when LRATC is downward-sloping over the entire relevant range of demand — economies of scale dominate.',
  16123: 'In first-degree price discrimination, the demand curve becomes the MR curve. Trace what that does to surplus.',
  16703: 'A perfect price discriminator charges each buyer their willingness to pay, so MR = price for every unit sold.',
  16116: 'Long-run equilibrium for monopolistic competition: P = ATC tangent, MR = MC, output below min-ATC. That gap is excess capacity.',
  16113: 'Nash equilibrium = each player\'s strategy is a best response to the other\'s. Test mutual best response, not joint payoff.',
  16117: 'Tit-for-tat works in repeated games because it is nice, retaliatory, forgiving, and clear. Each property matters.',
  16701: 'In a Prisoner\'s Dilemma, defect is dominant for both, but mutual defection is Pareto-inferior to mutual cooperation.',
  16706: 'Cournot duopolists compete on quantity simultaneously, each treating the rival\'s output as given. Reaction functions cross at equilibrium.',

  // ---------- Unit 5: Factor Markets ----------
  16114: 'In a competitive labor market, hire while MRP > wage; stop where MRP = wage. MRP = MP x P.',
  16708: 'A monopsonist faces an upward-sloping labor supply, so MFC lies above the supply curve. Hire where MRP = MFC.',

  // ---------- Unit 6: Market Failure & Inequality ----------
  16118: 'Negative externality: marginal social cost > marginal private cost, so the free market overproduces at too low a price.',
  16702: 'A Pigouvian tax equal to the marginal external cost shifts MPC up to MSC — internalizing the externality.',
  16124: 'Coase Theorem: with clear property rights and low transaction costs, private bargaining reaches the efficient outcome.',
  16119: 'Akerlof\'s Market for Lemons: asymmetric information drives quality sellers out, collapsing trade. Adverse selection at work.',
  16707: 'Adverse selection arises before the transaction when the informed side (sellers) can hide quality. Compare to moral hazard.',
  16120: 'Gini ranges 0 (perfect equality) to 1 (one person holds everything). Map 0.8 on that scale.',
  16710: 'Pareto efficiency in exchange requires MRS equal across consumers — that is the contract curve in the Edgeworth box.',
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
