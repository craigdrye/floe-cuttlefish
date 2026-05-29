// Combined AP Economics question bank for the `col-ap-economics` survey track.
// The HS catalog already exposes separate `highMicroeconomicsHandBankQuestions`
// and `highMacroeconomicsHandBankQuestions` for full-year AP Micro / AP Macro
// courses. This bank instead serves the combined one-year survey: roughly 25
// micro plus 25 macro items at AP rigor, mixing recognition, graph/scenario
// application, and short quantitative reasoning. Voice is sober and aligned
// to released AP Economics MCQ phrasing. Bespoke `whyWrong` for each
// distractor targets canonical student misconceptions.

import type { Question } from './types'
import { makeQuestionBank } from './base'

export const highApEconomicsQuestions: Question[] = makeQuestionBank('AP', [
  // -----------------------------------------------------------------------
  // Microeconomics: Supply & demand foundations
  // -----------------------------------------------------------------------
  {
    id: 4400500,
    chapter: 'Microeconomics: Supply and Demand',
    title: 'Demand shift vs movement',
    prompt: 'In the market for gasoline, the price of crude oil falls sharply. Holding all else constant, which of the following best describes the immediate effect on the gasoline market diagram?',
    correct: 'The supply curve shifts rightward, producing a movement down along the demand curve',
    wrong: [
      ['The demand curve shifts rightward because gasoline is now cheaper', 'A change in the price of a good itself causes a movement along its demand curve, not a shift; demand shifts only when a non-price determinant changes.', 'Distinguish change in quantity demanded from change in demand.'],
      ['The supply curve shifts leftward because input costs are lower', 'Lower input costs make production cheaper, which shifts supply to the right, not the left.', 'Cheaper inputs raise the quantity supplied at every price.'],
      ['Both curves shift rightward simultaneously', 'Only supply shifts; gasoline buyers respond by moving along their existing demand curve.', 'Only one curve has a non-price determinant changing.'],
    ],
    lesson: 'A change in an input price shifts the supply curve; the resulting equilibrium adjustment shows up as a movement along the unchanged demand curve.',
  },
  {
    id: 4400501,
    chapter: 'Microeconomics: Supply and Demand',
    title: 'Substitutes in consumption',
    prompt: 'Coffee and tea are substitutes in consumption. A frost destroys much of the coffee harvest. In the market for tea, equilibrium price and quantity will:',
    correct: 'Both rise as the demand for tea shifts rightward',
    wrong: [
      ['Both fall because tea producers panic and cut prices', 'Producer panic is not in the model; substitutes see demand rise when the price of the alternative rises.', 'Think about which curve in the tea market shifts.'],
      ['Price rises and quantity falls along an unchanged supply curve', 'A demand-side shift moves price and quantity in the same direction along supply.', 'Supply is unchanged; demand shifts right.'],
      ['Price falls and quantity rises because tea is now scarce', 'Scarcity does not lower prices; rightward demand raises both price and quantity.', 'Watch the sign of each comparative-static change.'],
    ],
    lesson: 'When a substitute becomes more expensive, demand for the other good shifts right, raising both equilibrium price and quantity.',
  },
  {
    id: 4400502,
    chapter: 'Microeconomics: Supply and Demand',
    title: 'Simultaneous shifts',
    prompt: 'In the market for new homes, construction wages fall and household incomes rise simultaneously (homes are a normal good). Which equilibrium change is determinate, and which is ambiguous without more information?',
    correct: 'Quantity definitely rises; price change is ambiguous',
    wrong: [
      ['Price definitely rises; quantity change is ambiguous', 'Both shifts move quantity the same direction (up), so quantity is determinate; price moves in opposite directions on each curve.', 'Compare directions of price impact from each shift.'],
      ['Both price and quantity definitely rise', 'Supply shifting right pushes price down, while demand shifting right pushes price up; the net is ambiguous.', 'Resolve the directional conflict on price first.'],
      ['Both price and quantity definitely fall', 'Quantity must rise because both shifts push quantity up.', 'Add the quantity effects, not the price effects.'],
    ],
    lesson: 'When supply and demand both shift right, quantity unambiguously rises; the price change depends on the relative magnitudes of the two shifts.',
  },

  // -----------------------------------------------------------------------
  // Microeconomics: Elasticity (PED, PES, YED, XED)
  // -----------------------------------------------------------------------
  {
    id: 4400503,
    chapter: 'Microeconomics: Elasticity',
    title: 'PED and total revenue',
    prompt: 'A firm raises the price of its product by 8% and observes total revenue rise by 2%. Demand for its product over this range is best described as:',
    correct: 'Inelastic, because revenue and price moved in the same direction',
    wrong: [
      ['Elastic, because revenue changed at all', 'Any non-zero elasticity produces a revenue change; the relevant test is the direction relative to the price change.', 'Use the total revenue test: if P up and TR up, then |PED| < 1.'],
      ['Unit elastic, because revenue changed by less than price', 'Unit elastic means revenue is unchanged when price changes; revenue rose here.', 'Unit elastic implies TR is flat with respect to price.'],
      ['Perfectly inelastic, because revenue rose at all', 'Perfectly inelastic demand is vertical and has zero quantity response; we cannot conclude that from a 2% revenue rise alone.', 'Perfect inelasticity is a strict zero, not just "low".'],
    ],
    lesson: 'When a price increase raises total revenue, demand over that range is inelastic; price and total revenue move together only when |PED| < 1.',
  },
  {
    id: 4400504,
    chapter: 'Microeconomics: Elasticity',
    title: 'Cross-price elasticity sign',
    prompt: 'When the price of butter rises by 10%, the quantity of margarine demanded rises by 6% with all else equal. The cross-price elasticity of margarine with respect to butter is:',
    correct: '+0.6, indicating the two goods are substitutes',
    wrong: [
      ['-0.6, indicating the two goods are complements', 'Complements have a negative cross-price elasticity; here both quantities move together, signaling substitution.', 'Check the sign before naming the relationship.'],
      ['+6, indicating the two goods are strong substitutes', 'XED = %ΔQ_margarine / %ΔP_butter = 6/10, not 60/10.', 'Plug into the elasticity ratio carefully.'],
      ['0, because the two goods are independent', 'A non-zero quantity response rules out independence.', 'Independent goods give XED ≈ 0.'],
    ],
    lesson: 'XED equals %ΔQ_A / %ΔP_B. A positive value identifies substitutes; a negative value identifies complements; a value near zero suggests independence.',
  },
  {
    id: 4400505,
    chapter: 'Microeconomics: Elasticity',
    title: 'Income elasticity classification',
    prompt: 'A study finds the income elasticity of demand for bus tickets is -0.4 and for restaurant meals is +1.8. The best classification is:',
    correct: 'Bus tickets are an inferior good; restaurant meals are a normal luxury good',
    wrong: [
      ['Both are normal goods because income matters in each case', 'A negative income elasticity defines an inferior good, regardless of the absolute size.', 'Sign of YED determines normal versus inferior.'],
      ['Bus tickets are a luxury and restaurant meals are a necessity', 'The signs are reversed: positive YED above 1 marks a luxury; negative YED marks inferior.', 'Compare YED to 0 and to 1 in order.'],
      ['Both are luxuries because the magnitudes exceed 0.3', 'Magnitude alone does not determine the category; sign and threshold of 1 matter.', 'Use both sign and the threshold at YED = 1.'],
    ],
    lesson: 'YED < 0 marks inferior; 0 < YED < 1 marks a normal necessity; YED > 1 marks a normal luxury. Sign first, then magnitude.',
  },
  {
    id: 4400506,
    chapter: 'Microeconomics: Elasticity',
    title: 'Price elasticity of supply',
    prompt: 'A 5% rise in the market price of a craft good leads to a 15% rise in the quantity supplied over the next year. The price elasticity of supply equals:',
    correct: '3.0, supply is elastic',
    wrong: [
      ['0.33, supply is inelastic', 'The student inverted the ratio; PES = %ΔQ_s / %ΔP, not the reverse.', 'Put the quantity change in the numerator.'],
      ['1.0, supply is unit elastic', 'A unit elastic supply means equal percentage changes; here the responses differ by a factor of three.', 'Compare 15 to 5, not 5 to 5.'],
      ['15, supply is perfectly elastic', 'PES is a ratio of percentage changes, not the raw quantity-change percentage.', 'Divide the percentages.'],
    ],
    lesson: 'PES = %ΔQ_s / %ΔP. Values above 1 indicate elastic supply; supply elasticity generally rises with the time available to adjust capacity.',
  },

  // -----------------------------------------------------------------------
  // Microeconomics: Surplus, taxes, and government intervention
  // -----------------------------------------------------------------------
  {
    id: 4400507,
    chapter: 'Microeconomics: Surplus and Intervention',
    title: 'Deadweight loss from a tax',
    prompt: 'In a competitive market initially at equilibrium, the government imposes a per-unit excise tax on producers. Which statement most accurately describes the resulting welfare effects?',
    correct: 'The tax creates a deadweight loss because units with willingness-to-pay above marginal cost are no longer traded',
    wrong: [
      ['Total surplus rises because the government collects revenue', 'Tax revenue is a transfer, not new surplus; the loss of mutually beneficial trades reduces total surplus.', 'Distinguish transfers from genuine surplus gains.'],
      ['Producers bear the entire burden because the tax is "on producers"', 'Statutory incidence does not determine economic incidence; the burden is split by relative elasticities.', 'Who pays in cash differs from who bears the burden.'],
      ['Consumer and producer surplus both rise after the tax', 'Both surpluses fall once a tax wedges price-paid above price-received.', 'Check the new triangles, not the labels.'],
    ],
    lesson: 'A per-unit tax wedges the price buyers pay above the price sellers receive, eliminating trades whose surplus would have been positive and creating deadweight loss.',
  },
  {
    id: 4400508,
    chapter: 'Microeconomics: Surplus and Intervention',
    title: 'Binding price ceiling',
    prompt: 'A city sets a binding rent ceiling below the equilibrium rent in its housing market. Which outcome is most consistent with the standard supply-and-demand model?',
    correct: 'A persistent shortage emerges, and search costs and non-price rationing rise',
    wrong: [
      ['The quantity of housing supplied rises because landlords compete for tenants', 'A binding ceiling reduces quantity supplied by lowering the return to landlords.', 'Trace the price drop along the supply curve.'],
      ['Total surplus rises because consumers pay less', 'Some consumers benefit, but lost trades and search costs reduce total surplus.', 'Account for the units no longer traded.'],
      ['The ceiling has no effect if landlords are profitable', 'A binding ceiling is, by definition, below the market-clearing rent and therefore alters quantity.', 'Binding means below equilibrium.'],
    ],
    lesson: 'A binding price ceiling reduces quantity supplied and produces a shortage; non-price rationing (queues, favoritism, side payments) replaces the price mechanism.',
  },
  {
    id: 4400509,
    chapter: 'Microeconomics: Surplus and Intervention',
    title: 'Tax incidence with elasticity',
    prompt: 'A per-unit tax is imposed in a market where demand is highly inelastic and supply is highly elastic. The economic burden of the tax will fall mostly on:',
    correct: 'Consumers, because they have the least ability to avoid the tax',
    wrong: [
      ['Producers, because the tax is paid to the government by sellers', 'Statutory incidence does not determine economic incidence; relative elasticities do.', 'Ignore who hands the cash to the government.'],
      ['The government, because it collects the revenue', 'The government does not bear a welfare loss from collecting revenue.', 'Burden is a welfare concept, not a cash flow.'],
      ['Both sides equally, because tax burdens are always 50/50', 'Equal sharing only occurs when elasticities are equal in absolute value.', 'Compare the slopes, not the labels.'],
    ],
    lesson: 'The side of the market with less elastic behavior bears more of the tax burden because it adjusts quantity less in response to the price wedge.',
  },
  {
    id: 4400510,
    chapter: 'Microeconomics: Surplus and Intervention',
    title: 'Subsidy welfare effects',
    prompt: 'A per-unit subsidy is granted to producers in a competitive market. Compared to the no-subsidy equilibrium, which is true?',
    correct: 'Output rises above the efficient level, generating deadweight loss equal to the value of units whose cost exceeds willingness-to-pay',
    wrong: [
      ['Output rises and total surplus also rises by the size of the subsidy', 'The subsidy is a transfer, and over-production beyond the efficient quantity creates a welfare loss.', 'Transfers and surplus are different.'],
      ['Output is unchanged because subsidies are absorbed as producer profit', 'A per-unit subsidy lowers effective marginal cost, increasing quantity supplied at each price.', 'Trace the supply curve shift.'],
      ['The subsidy eliminates any deadweight loss already present', 'In a competitive market with no externality, the no-subsidy equilibrium is already efficient; subsidizing creates a new wedge.', 'Subsidies are corrective only in the presence of positive externalities.'],
    ],
    lesson: 'In a competitive market with no externality, a per-unit subsidy creates over-production and deadweight loss; the welfare loss is the area where marginal cost exceeds willingness to pay.',
  },

  // -----------------------------------------------------------------------
  // Microeconomics: Production and costs
  // -----------------------------------------------------------------------
  {
    id: 4400511,
    chapter: 'Microeconomics: Production and Costs',
    title: 'MC and ATC relationship',
    prompt: 'For a firm with U-shaped average total cost, the marginal cost curve crosses the average total cost curve at:',
    correct: 'The minimum of ATC, from below, because pulling the average down requires MC below average',
    wrong: [
      ['The maximum of ATC, because that is where marginal cost is highest', 'MC intersects ATC at the average\'s minimum, not maximum.', 'Use the rule: when MC < ATC, ATC falls.'],
      ['Wherever MC equals price, regardless of ATC behavior', 'MC = P is a profit-maximizing rule, not a property of cost curves alone.', 'Separate cost geometry from optimal output.'],
      ['Only at the shutdown point, where ATC equals AVC', 'Those are distinct points; MC crosses AVC at minimum AVC and ATC at minimum ATC.', 'Each average has its own minimum.'],
    ],
    lesson: 'A marginal value pulls an average toward itself; MC crosses both AVC and ATC at their respective minima from below.',
  },
  {
    id: 4400512,
    chapter: 'Microeconomics: Production and Costs',
    title: 'Fixed vs variable costs',
    prompt: 'A firm in the short run faces fixed costs of $400 and a constant marginal cost of $5 per unit. Total cost of producing 60 units equals:',
    correct: '$700',
    wrong: [
      ['$300', 'The student multiplied 5 by 60 and forgot to add fixed cost.', 'Total cost is variable plus fixed cost.'],
      ['$405', 'The student added the fixed cost to one unit of marginal cost only.', 'Multiply MC by every unit, then add fixed cost.'],
      ['$1,000', 'The student likely added 400 + 600 by misreading 60 as a price.', 'Variable cost = MC × Q.'],
    ],
    lesson: 'Short-run total cost = fixed cost + variable cost; with constant MC, VC = MC × Q, so TC = FC + MC × Q.',
  },
  {
    id: 4400513,
    chapter: 'Microeconomics: Production and Costs',
    title: 'Short-run shutdown rule',
    prompt: 'In the short run, a perfectly competitive firm should continue to operate at a loss rather than shut down if:',
    correct: 'Price is at least equal to average variable cost, so the firm covers variable cost and contributes to fixed cost',
    wrong: [
      ['Price exceeds average total cost', 'That condition implies positive economic profit, not "operate at a loss".', 'Re-read the threshold for shutdown.'],
      ['Total revenue exceeds fixed cost', 'Fixed cost is sunk in the short run; the relevant comparison is to variable cost.', 'Sunk costs should not drive operating decisions.'],
      ['Marginal cost exceeds marginal revenue', 'That signals the firm is producing too much, not that it should shut down.', 'Compare MC to MR for output, not shutdown.'],
    ],
    lesson: 'Operate in the short run while P ≥ AVC; below AVC, the firm loses more by producing than by shutting down and paying only fixed cost.',
  },

  // -----------------------------------------------------------------------
  // Microeconomics: Market structures
  // -----------------------------------------------------------------------
  {
    id: 4400514,
    chapter: 'Microeconomics: Market Structures',
    title: 'Perfect competition long run',
    prompt: 'In long-run equilibrium under perfect competition, a representative firm produces where:',
    correct: 'P = MR = MC = minimum ATC, with zero economic profit',
    wrong: [
      ['P > MC, because firms always charge a markup over marginal cost', 'Markups occur in imperfect competition; perfectly competitive firms are price takers.', 'Price equals MR for price takers.'],
      ['MC = ATC > P, with persistent losses absorbed by fixed costs', 'Persistent losses cannot occur in long-run equilibrium because firms would exit.', 'Free entry and exit drive economic profit to zero.'],
      ['MR > MC, because long-run profit maximization keeps room to expand', 'Profit maximization requires MR = MC; otherwise the firm should change output.', 'Stop at MR = MC.'],
    ],
    lesson: 'Free entry and exit drive perfectly competitive firms to produce at minimum ATC with zero economic profit, where P = MR = MC.',
  },
  {
    id: 4400515,
    chapter: 'Microeconomics: Market Structures',
    title: 'Monopoly inefficiency',
    prompt: 'A single-price monopolist with positive economic profit produces an output where:',
    correct: 'MR = MC and P > MC, creating a deadweight loss relative to the competitive benchmark',
    wrong: [
      ['P = MC, because all profit-maximizing firms equate price and marginal cost', 'Only price-taking firms equate P and MC; a monopolist faces a downward-sloping demand and sets P > MC.', 'Distinguish price takers from price setters.'],
      ['All monopolies are productively and allocatively inefficient and should be broken up', 'Natural monopolies can be more cost-efficient than several smaller firms; regulation, not breakup, is often preferred.', 'Beware the "all monopolies are inefficient" overreach.'],
      ['MR > MC at the profit-maximizing output, leaving room to expand profitably', 'Profit maximization requires MR = MC, not MR > MC.', 'A profit-maximizing firm stops expanding where MR meets MC.'],
    ],
    lesson: 'A single-price monopolist maximizes profit at MR = MC and sets price along the demand curve above MC, generating deadweight loss; natural monopolies can still minimize cost relative to fragmentation.',
  },
  {
    id: 4400516,
    chapter: 'Microeconomics: Market Structures',
    title: 'Monopolistic competition long run',
    prompt: 'In long-run equilibrium, a monopolistically competitive firm produces where:',
    correct: 'P = ATC but P > MC, with excess capacity and zero economic profit',
    wrong: [
      ['P = MC = minimum ATC, identical to perfect competition', 'Product differentiation gives each firm a downward-sloping demand, so P remains above MC.', 'Differentiation breaks the perfectly competitive equality.'],
      ['P > ATC with persistent positive economic profit', 'Free entry erodes profit to zero in the long run.', 'Entry is the long-run discipline.'],
      ['MR > MC, with the firm choosing to forgo profitable expansion', 'Profit maximization still requires MR = MC.', 'Output rule does not change with structure.'],
    ],
    lesson: 'Monopolistic competition produces zero economic profit at a quantity below minimum ATC; excess capacity is the cost paid for product variety.',
  },
  {
    id: 4400517,
    chapter: 'Microeconomics: Market Structures',
    title: 'Oligopoly and kinked demand',
    prompt: 'In an oligopoly described by the kinked demand model, prices tend to be:',
    correct: 'Sticky, because rivals match price cuts but not price increases',
    wrong: [
      ['Highly volatile because firms continuously undercut each other', 'The kinked demand model predicts price stability, not volatility.', 'Read the slope of each segment.'],
      ['Always equal to the monopoly price', 'Without explicit collusion, oligopolists rarely sustain the monopoly outcome.', 'Tacit coordination differs from explicit cartel.'],
      ['Set by marginal cost equal to price', 'Oligopolists are price setters with P > MC.', 'Oligopoly is imperfect competition.'],
    ],
    lesson: 'The kinked demand curve predicts sticky oligopoly prices: rivals follow price cuts (elastic below the kink) but not price increases (inelastic above), so firms see little gain from changing price.',
  },

  // -----------------------------------------------------------------------
  // Microeconomics: Game theory
  // -----------------------------------------------------------------------
  {
    id: 4400518,
    chapter: 'Microeconomics: Game Theory',
    title: 'Prisoner\'s dilemma',
    prompt: 'Two firms simultaneously choose between cooperating (high price) and defecting (low price). If defect strictly dominates cooperate for each, the unique Nash equilibrium is:',
    correct: 'Both firms defect, even though both would earn more by cooperating',
    wrong: [
      ['Both firms cooperate, because cooperation is socially optimal', 'Social optimality does not guarantee a Nash outcome when defection dominates.', 'Compare the dominant strategy outcome to the cooperative one.'],
      ['One firm cooperates while the other defects, alternating each round', 'The game is one-shot and simultaneous; alternation requires repeated play and coordination.', 'Stick to the static game.'],
      ['No Nash equilibrium exists in pure strategies', 'A pure-strategy Nash equilibrium does exist at mutual defection.', 'Check best responses to each other\'s play.'],
    ],
    lesson: 'In a one-shot prisoner\'s dilemma, mutual defection is the unique pure-strategy Nash equilibrium even though it is Pareto-inferior to mutual cooperation.',
  },
  {
    id: 4400519,
    chapter: 'Microeconomics: Game Theory',
    title: 'Nash equilibrium definition',
    prompt: 'A pair of strategies forms a Nash equilibrium when:',
    correct: 'No player can unilaterally improve their payoff by changing their own strategy',
    wrong: [
      ['Both players choose the strategy that maximizes total joint payoff', 'That is the cooperative or social optimum, not a Nash equilibrium.', 'Nash is about individual best responses.'],
      ['Both players have the same payoff regardless of strategy', 'Equal payoffs are not required for a Nash equilibrium.', 'Symmetry is not the definition.'],
      ['Each player has a dominant strategy', 'Nash equilibria can exist without dominant strategies (e.g., coordination games).', 'Dominance is sufficient but not necessary.'],
    ],
    lesson: 'A Nash equilibrium is a strategy profile in which each player\'s choice is a best response to the others\' choices; deviations make the deviator worse off.',
  },

  // -----------------------------------------------------------------------
  // Microeconomics: Factor markets
  // -----------------------------------------------------------------------
  {
    id: 4400520,
    chapter: 'Microeconomics: Factor Markets',
    title: 'MRP hiring rule',
    prompt: 'A perfectly competitive firm hires labor in a perfectly competitive labor market. It will hire until:',
    correct: 'The marginal revenue product of labor equals the wage rate',
    wrong: [
      ['The marginal product of labor equals zero', 'A firm stops hiring well before MP_L = 0; it stops where MRP equals wage.', 'Compare value of the marginal product to wage.'],
      ['The average product of labor equals the wage rate', 'Hiring decisions are marginal, not based on averages.', 'Use the marginal benefit/cost rule.'],
      ['Marginal revenue equals marginal cost in the output market', 'That equates output, not input quantities; the hiring rule uses MRP and wage.', 'Different markets, different rules.'],
    ],
    lesson: 'A firm hires up to the point where MRP_L = wage, because beyond that the marginal worker costs more than they add in revenue.',
  },
  {
    id: 4400521,
    chapter: 'Microeconomics: Factor Markets',
    title: 'Labor demand shift',
    prompt: 'In the market for software engineers, productivity-enhancing tools raise the marginal product of labor at every level of employment. Holding wages constant initially, the labor demand curve will:',
    correct: 'Shift rightward because MRP rises at every employment level',
    wrong: [
      ['Shift leftward because firms need fewer workers per task', 'Higher MRP per worker raises the value of each worker; demand shifts right, not left.', 'Distinguish task efficiency from worker value.'],
      ['Stay fixed because productivity gains accrue only to consumers', 'Productivity gains flow into MRP, which is the height of labor demand.', 'Trace the link MP → MRP → labor demand.'],
      ['Rotate to become vertical because productivity is constant per worker', 'A shift in MRP changes the level of the curve, not its slope to vertical.', 'Higher MRP at every Q shifts, not pivots.'],
    ],
    lesson: 'Labor demand equals MRP, which equals MP times the relevant price; a rise in MP at every employment level shifts labor demand rightward.',
  },

  // -----------------------------------------------------------------------
  // Microeconomics: Market failure
  // -----------------------------------------------------------------------
  {
    id: 4400522,
    chapter: 'Microeconomics: Market Failure',
    title: 'Negative externality correction',
    prompt: 'A polluting factory imposes a negative externality on its neighbors. A Pigouvian tax equal to the marginal external cost will:',
    correct: 'Internalize the externality, aligning marginal private cost with marginal social cost',
    wrong: [
      ['Eliminate all pollution from the industry', 'The optimum is the level where marginal social benefit equals marginal social cost, which is generally positive, not zero.', 'Optimal pollution is rarely zero.'],
      ['Worsen welfare because taxes always create deadweight loss', 'In a corrective context, the tax removes a pre-existing deadweight loss rather than creating one.', 'Distinguish corrective from distortionary taxes.'],
      ['Raise output above the socially optimal level', 'A tax reduces output toward the socially optimal level, not above it.', 'Move along supply with a wedge.'],
    ],
    lesson: 'A Pigouvian tax set equal to the marginal external cost shifts effective marginal private cost up to marginal social cost, restoring the socially efficient quantity.',
  },
  {
    id: 4400523,
    chapter: 'Microeconomics: Market Failure',
    title: 'Public goods',
    prompt: 'Pure public goods are characterized by:',
    correct: 'Non-rivalry in consumption and non-excludability in use',
    wrong: [
      ['Rivalry and excludability, like ordinary private goods', 'That is the definition of a private good, the opposite of a public good.', 'Public goods reverse both properties.'],
      ['Rivalry but not excludability, like a congested fishery', 'That describes a common-pool resource, not a pure public good.', 'Keep the four-quadrant taxonomy straight.'],
      ['Excludability but not rivalry, like a streaming service', 'That describes a club good, not a public good.', 'Streaming is excludable through subscription.'],
    ],
    lesson: 'Pure public goods are non-rival (one person\'s use does not reduce another\'s) and non-excludable (use cannot be cheaply prevented); free-riding causes private under-provision.',
  },
  {
    id: 4400524,
    chapter: 'Microeconomics: Market Failure',
    title: 'Asymmetric information',
    prompt: 'In a used-car market where sellers know quality but buyers do not, the most likely outcome is:',
    correct: 'Adverse selection: high-quality sellers exit because pooled prices undervalue their cars',
    wrong: [
      ['Buyers and sellers reach the same efficient outcome as under full information', 'Asymmetric information generally distorts the market and reduces traded quality.', 'Information frictions create wedges.'],
      ['Moral hazard: buyers drive recklessly because they know the car is insured', 'Moral hazard occurs after a contract; this scenario describes a pre-trade information gap.', 'Adverse selection is pre-trade; moral hazard is post-trade.'],
      ['Sellers of low-quality cars exit because they cannot fool buyers', 'Buyers cannot distinguish quality, so low-quality sellers remain and high-quality sellers withdraw.', 'Which side has private information?'],
    ],
    lesson: 'When one side has private information about quality, pooling prices push high-quality goods out of the market, producing the classic "market for lemons" result.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: Measuring the economy
  // -----------------------------------------------------------------------
  {
    id: 4400525,
    chapter: 'Macroeconomics: Measurement',
    title: 'GDP inclusion',
    prompt: 'Which of the following is counted in current U.S. GDP?',
    correct: 'A new washing machine produced this year in Ohio and sold to a household',
    wrong: [
      ['A used car sold between two private parties this year', 'GDP counts production, not the resale of previously produced goods.', 'GDP is a flow of new production.'],
      ['Social Security benefits paid to retirees', 'Transfer payments do not represent production and are excluded.', 'Transfers are not output.'],
      ['A volunteer hour at a nonprofit shelter', 'Non-market production without a price is generally not included in measured GDP.', 'GDP measures market production.'],
    ],
    lesson: 'GDP counts only the market value of final goods and services newly produced within the country during the period; transfers, resales, and most non-market work are excluded.',
  },
  {
    id: 4400526,
    chapter: 'Macroeconomics: Measurement',
    title: 'Real vs nominal GDP',
    prompt: 'In one year, nominal GDP rose by 7% while the GDP deflator rose by 3%. The approximate growth in real GDP is:',
    correct: '4%',
    wrong: [
      ['10%', 'The student added the rates instead of subtracting inflation.', 'Real growth = nominal growth − inflation.'],
      ['2.33%', 'The student divided 7 by 3.', 'Use subtraction for small rates, not division.'],
      ['7%', 'The student ignored the deflator.', 'Adjust nominal GDP for the price-level change.'],
    ],
    lesson: 'For small rates, real GDP growth ≈ nominal GDP growth − inflation; the GDP deflator measures the price level for domestically produced output.',
  },
  {
    id: 4400527,
    chapter: 'Macroeconomics: Measurement',
    title: 'GDP deflator vs CPI',
    prompt: 'Which statement most accurately distinguishes the GDP deflator from the CPI?',
    correct: 'The deflator covers all goods produced domestically with a current-period basket; CPI uses a fixed urban consumer basket',
    wrong: [
      ['Both indices use identical baskets, so they always move together', 'They use different baskets and weights, so they routinely diverge.', 'Compare scope and weighting.'],
      ['The CPI includes investment and government purchases; the deflator does not', 'The CPI tracks consumer purchases; the deflator covers all domestic production.', 'You have the scope reversed.'],
      ['The deflator includes imported consumer goods; the CPI does not', 'The deflator excludes imports because they are not domestically produced; CPI includes imported consumer items.', 'Imports flip the comparison.'],
    ],
    lesson: 'The GDP deflator is a current-weighted index of all domestically produced output, while the CPI is a fixed-basket index of urban consumer purchases including imports.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: Unemployment
  // -----------------------------------------------------------------------
  {
    id: 4400528,
    chapter: 'Macroeconomics: Unemployment',
    title: 'Frictional vs structural',
    prompt: 'A coal miner whose mine closed permanently must retrain to find work in another industry. This unemployment is best described as:',
    correct: 'Structural, because the skills and locations of available workers do not match available jobs',
    wrong: [
      ['Frictional, because the worker is simply between jobs', 'Frictional unemployment is short, voluntary, and search-based; the miner faces a skills mismatch.', 'Mismatch in skills points to structural.'],
      ['Cyclical, because all unemployment in a recession is cyclical', 'Cyclical unemployment is driven by the business cycle, not a permanent mismatch.', 'Permanent closure is a structural cause.'],
      ['Seasonal, because mining work varies with weather', 'Seasonal unemployment recurs predictably each year; this is a permanent industry shift.', 'Permanent change is not seasonal.'],
    ],
    lesson: 'Structural unemployment results from a durable mismatch between worker skills or locations and the jobs employers offer; it typically requires retraining or relocation to resolve.',
  },
  {
    id: 4400529,
    chapter: 'Macroeconomics: Unemployment',
    title: 'Labor force participation',
    prompt: 'A discouraged worker who stops looking for a job will cause the official unemployment rate to:',
    correct: 'Fall, because the worker leaves the labor force entirely',
    wrong: [
      ['Rise, because there is now one more unemployed person', 'A discouraged worker is no longer counted as unemployed once they stop searching.', 'Check the definition of unemployed.'],
      ['Stay the same, because labor force participation is unchanged', 'The labor force shrinks by one when the worker stops searching.', 'Re-check the denominator.'],
      ['Become negative, because labor force counts go below zero', 'Rates cannot become negative; the level moves continuously.', 'Rates remain bounded.'],
    ],
    lesson: 'The unemployment rate uses only labor-force participants in the denominator; discouraged workers exit the labor force and lower the measured rate.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: Inflation
  // -----------------------------------------------------------------------
  {
    id: 4400530,
    chapter: 'Macroeconomics: Inflation',
    title: 'CPI calculation',
    prompt: 'In the base year a fixed basket cost $200. This year the same basket costs $230. The CPI for this year (base = 100) is:',
    correct: '115',
    wrong: [
      ['130', 'The student wrote the price level as the dollar value rather than indexed to 100.', 'Multiply the ratio by 100.'],
      ['15', 'The student reported the percentage change rather than the index level.', 'CPI is an index level, not a growth rate.'],
      ['230', 'The student returned the dollar cost rather than the index.', 'Index = (cost this year / cost base year) × 100.'],
    ],
    lesson: 'CPI = (cost of basket in current year / cost of basket in base year) × 100; the year-over-year percentage change in CPI is the inflation rate.',
  },
  {
    id: 4400531,
    chapter: 'Macroeconomics: Inflation',
    title: 'Demand-pull vs cost-push',
    prompt: 'A sustained rise in the price of imported oil pushes up production costs across many sectors, raising both prices and unemployment. This is most consistent with:',
    correct: 'A cost-push (adverse supply) shock that shifts SRAS leftward',
    wrong: [
      ['A demand-pull boom from rising consumer confidence', 'Demand-pull inflation typically lowers unemployment as output rises; here unemployment rises.', 'Check whether output and unemployment move together or oppositely.'],
      ['Disinflation driven by tighter monetary policy', 'Disinflation reduces inflation; this scenario raises both inflation and unemployment.', 'Disinflation lowers prices or their growth.'],
      ['A rightward shift in long-run aggregate supply', 'LRAS shifts capture changes in potential output, not short-run cost shocks.', 'LRAS reflects supply-side fundamentals.'],
    ],
    lesson: 'A cost-push shock shifts SRAS leftward, producing stagflation: higher prices alongside lower output and higher unemployment.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: AD/AS and business cycle
  // -----------------------------------------------------------------------
  {
    id: 4400532,
    chapter: 'Macroeconomics: AD/AS',
    title: 'Business cycle phases',
    prompt: 'On a standard business cycle diagram, the trough is best described as:',
    correct: 'The lowest point of real output before recovery begins',
    wrong: [
      ['The highest point of real output before contraction begins', 'That describes the peak, not the trough.', 'Peak and trough are opposite turning points.'],
      ['The level at which the economy has zero unemployment', 'Zero unemployment is not feasible; the trough still has significant unemployment.', 'Natural rate is not zero.'],
      ['The level at which inflation is exactly two percent', 'Inflation targets are policy choices and do not define business cycle phases.', 'Business cycle phases are about output, not targets.'],
    ],
    lesson: 'The business cycle has four phases — expansion, peak, contraction, trough — defined by turning points in real output around the long-run trend.',
  },
  {
    id: 4400533,
    chapter: 'Macroeconomics: AD/AS',
    title: 'AD shift drivers',
    prompt: 'Which scenario most clearly shifts aggregate demand to the right?',
    correct: 'A sustained increase in household wealth that raises consumption at every price level',
    wrong: [
      ['A rise in input prices that raises firms\' production costs', 'Higher input costs shift SRAS, not AD.', 'Cost shocks act on the supply side.'],
      ['A rise in the overall price level along an unchanged AD curve', 'A price-level change causes movement along AD, not a shift of AD.', 'Distinguish movement along from shifts.'],
      ['An increase in the natural rate of unemployment', 'Changes in the natural rate move LRAS, not AD.', 'LRAS reflects long-run supply.'],
    ],
    lesson: 'AD shifts when components C, I, G, or NX change at every price level; a price-level change alone causes movement along AD.',
  },
  {
    id: 4400534,
    chapter: 'Macroeconomics: AD/AS',
    title: 'LRAS vs SRAS',
    prompt: 'In the standard AD/AS model, the long-run aggregate supply curve is:',
    correct: 'Vertical at full-employment output, because potential output does not depend on the price level',
    wrong: [
      ['Upward sloping, because higher prices always raise long-run output', 'Upward slope describes SRAS; LRAS is vertical at potential output.', 'Distinguish short-run from long-run supply.'],
      ['Horizontal, because prices are fully flexible', 'A horizontal supply curve is a Keynesian special case; LRAS is vertical, not horizontal.', 'Check the orientation in the canonical model.'],
      ['Downward sloping, because high prices reduce purchasing power', 'A downward slope describes AD, not LRAS.', 'You may be confusing AD with LRAS.'],
    ],
    lesson: 'LRAS is vertical at potential output, because in the long run prices and wages adjust and real output is determined by resources, technology, and institutions.',
  },
  {
    id: 4400535,
    chapter: 'Macroeconomics: AD/AS',
    title: 'Self-correction',
    prompt: 'Starting from a short-run recessionary gap, with no policy response, the standard model predicts that over time:',
    correct: 'SRAS shifts rightward as wages and input prices fall, restoring full-employment output at a lower price level',
    wrong: [
      ['AD shifts rightward automatically because consumers always increase spending in recessions', 'AD does not shift back on its own; recovery in the standard model comes through SRAS adjustment.', 'Self-correction works through the supply side.'],
      ['The economy remains permanently below potential without policy', 'In the standard model, prices and wages eventually adjust to close the gap.', 'Long-run flexibility is built in.'],
      ['LRAS shifts leftward to match the lower equilibrium output', 'LRAS reflects potential output; it does not shift in response to short-run gaps.', 'Potential output is structural.'],
    ],
    lesson: 'In the standard model, a recessionary gap is closed when nominal wages and other input prices fall, shifting SRAS rightward and restoring full-employment output.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: Multipliers and fiscal policy
  // -----------------------------------------------------------------------
  {
    id: 4400536,
    chapter: 'Macroeconomics: Fiscal Policy',
    title: 'Spending multiplier',
    prompt: 'If the marginal propensity to consume is 0.75, the simple spending multiplier equals:',
    correct: '4',
    wrong: [
      ['0.25', 'That is the marginal propensity to save, not the multiplier.', 'Multiplier = 1 / (1 − MPC).'],
      ['1.33', 'The student divided 1 by 0.75 rather than by 1 − 0.75.', 'Use MPS in the denominator.'],
      ['7.5', 'The student inverted the formula and multiplied by 10.', 'Plug 0.25 into the denominator.'],
    ],
    lesson: 'The simple spending multiplier is 1 / (1 − MPC) = 1 / MPS; with MPC = 0.75, MPS = 0.25 and the multiplier equals 4.',
  },
  {
    id: 4400537,
    chapter: 'Macroeconomics: Fiscal Policy',
    title: 'Tax multiplier',
    prompt: 'With MPC = 0.75, the simple tax multiplier in absolute value equals:',
    correct: '3',
    wrong: [
      ['4', 'That is the spending multiplier; the tax multiplier is smaller by the MPC factor.', 'Use −MPC / MPS.'],
      ['0.75', 'That is the MPC itself, not the multiplier.', 'Apply the full formula.'],
      ['1', 'The balanced-budget multiplier is 1, not the tax multiplier.', 'Check the right object.'],
    ],
    lesson: 'The simple tax multiplier is −MPC / (1 − MPC); part of any tax change is initially saved, so the tax multiplier is smaller in magnitude than the spending multiplier.',
  },
  {
    id: 4400538,
    chapter: 'Macroeconomics: Fiscal Policy',
    title: 'Expansionary fiscal limits',
    prompt: 'A student claims, "Expansionary fiscal policy always raises real GDP by the full multiplier amount." The best critique is:',
    correct: 'The effect depends on the slope of SRAS and on crowding out; near full employment, the price level rises and real GDP rises by less than the textbook multiplier',
    wrong: [
      ['The multiplier formula is incorrect because MPC is rarely defined precisely', 'The textbook multiplier is well-defined; the issue is that supply-side and financing effects offset the demand stimulus.', 'Critique the application, not the formula.'],
      ['Expansionary fiscal policy always reduces real GDP because of higher taxes', 'A pure increase in government purchases is not the same as a tax hike, and contractionary effects are not automatic.', 'Read the policy direction carefully.'],
      ['Multipliers only apply in monetary policy, not fiscal policy', 'Multipliers describe the propagation of any autonomous spending change, including fiscal stimulus.', 'Multipliers apply to autonomous spending.'],
    ],
    lesson: 'Expansionary fiscal policy raises real GDP by less than the simple multiplier suggests when SRAS is steep near full employment or when crowding out reduces private investment.',
  },
  {
    id: 4400539,
    chapter: 'Macroeconomics: Fiscal Policy',
    title: 'Crowding out',
    prompt: 'Crowding out refers to:',
    correct: 'A reduction in private investment caused by higher real interest rates from government borrowing',
    wrong: [
      ['A direct ban on private investment by the government', 'Crowding out is an indirect price-mediated effect, not a regulatory ban.', 'Look for an interest-rate channel.'],
      ['A reduction in government spending caused by private competition', 'The arrow runs the other way: government borrowing affects private investment.', 'Reverse the causal direction.'],
      ['A fall in real GDP caused by lower consumer confidence', 'That is a demand shock unrelated to the loanable-funds channel.', 'Crowding out works through interest rates.'],
    ],
    lesson: 'When the government borrows more, the demand for loanable funds rises, real interest rates rise, and interest-sensitive private investment falls; the offset is called crowding out.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: Money and banking
  // -----------------------------------------------------------------------
  {
    id: 4400540,
    chapter: 'Macroeconomics: Money and Banking',
    title: 'M1 components',
    prompt: 'Which of the following is part of M1 in the standard U.S. monetary aggregates?',
    correct: 'Currency held by the public outside banks',
    wrong: [
      ['Gold bars held in private safe deposit boxes', 'Gold is a commodity, not a monetary aggregate component.', 'M1 requires liquid means-of-payment status.'],
      ['Stocks and corporate bonds held by households', 'Financial securities are not part of any monetary aggregate.', 'Money requires near-immediate spendability.'],
      ['Government bonds with maturities greater than one year', 'Long-term bonds are not money under any standard aggregate.', 'Maturity disqualifies them.'],
    ],
    lesson: 'M1 includes currency held by the public, checkable deposits, and other highly liquid balances; longer-term or non-payment assets enter broader aggregates only if at all.',
  },
  {
    id: 4400541,
    chapter: 'Macroeconomics: Money and Banking',
    title: 'Money multiplier',
    prompt: 'With a required reserve ratio of 20% and no excess reserves or cash leakage, an initial $1,000 deposit can expand the money supply by a maximum of:',
    correct: '$5,000',
    wrong: [
      ['$200', 'That is the required reserve held against the initial deposit, not the expansion.', 'Compute 1 / reserve ratio.'],
      ['$1,200', 'The student added one round of loan creation to the initial deposit.', 'Apply the full multiplier.'],
      ['$20,000', 'The student likely inverted the reserve ratio.', 'Use 1 / 0.20 = 5.'],
    ],
    lesson: 'In the simple model, the money multiplier equals 1 / required reserve ratio; with no leakages, an initial deposit can support a money expansion equal to that multiplier times the deposit.',
  },
  {
    id: 4400542,
    chapter: 'Macroeconomics: Money and Banking',
    title: 'Reserve requirement',
    prompt: 'Holding everything else equal, an increase in the required reserve ratio will:',
    correct: 'Reduce the money supply by lowering the deposit multiplier',
    wrong: [
      ['Raise the money supply by encouraging more lending', 'Higher required reserves leave less to lend, not more.', 'Trace the effect on lending capacity.'],
      ['Leave the money supply unchanged because reserves are internal to banks', 'Reserves are central to how banks create deposits; changing the requirement changes the multiplier.', 'Reserves bind the money creation process.'],
      ['Lower the federal funds rate by injecting reserves', 'A higher requirement tightens reserves and tends to raise short rates, not lower them.', 'Direction of pressure is reversed.'],
    ],
    lesson: 'Raising the required reserve ratio shrinks the money multiplier and contracts the money supply; lowering it expands the supply.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: Monetary policy
  // -----------------------------------------------------------------------
  {
    id: 4400543,
    chapter: 'Macroeconomics: Monetary Policy',
    title: 'Open market operations',
    prompt: 'To conduct expansionary monetary policy through open market operations, the Federal Reserve will:',
    correct: 'Buy government securities from banks, increasing reserves and lowering the federal funds rate',
    wrong: [
      ['Sell government securities to banks to inject cash', 'Selling securities drains reserves; expansionary policy buys, not sells.', 'Buy = inject, sell = drain.'],
      ['Raise the discount rate to encourage borrowing', 'A higher discount rate makes borrowing more expensive and is contractionary.', 'Direction is opposite.'],
      ['Increase the required reserve ratio to expand lending capacity', 'Raising the requirement reduces lending capacity, not increases it.', 'Direction is reversed.'],
    ],
    lesson: 'Expansionary OMO involves buying securities, which adds reserves to the banking system and tends to lower short-term interest rates, encouraging borrowing and spending.',
  },
  {
    id: 4400544,
    chapter: 'Macroeconomics: Monetary Policy',
    title: 'Contractionary policy effect',
    prompt: 'Contractionary monetary policy is most likely to:',
    correct: 'Raise interest rates, reduce investment, and slow inflation',
    wrong: [
      ['Lower interest rates and stimulate borrowing', 'That describes expansionary, not contractionary, policy.', 'Re-check the direction.'],
      ['Increase the money supply through securities purchases', 'Contractionary policy reduces the money supply, typically through securities sales.', 'Sales drain reserves.'],
      ['Have no effect because monetary policy is neutral in the short run', 'Monetary neutrality is a long-run proposition; short-run effects on output and prices are well documented.', 'Short run differs from long run.'],
    ],
    lesson: 'Contractionary monetary policy reduces the money supply, raises short-term interest rates, slows interest-sensitive spending, and helps lower inflation.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: Phillips curve
  // -----------------------------------------------------------------------
  {
    id: 4400545,
    chapter: 'Macroeconomics: Phillips Curve',
    title: 'Short-run Phillips trade-off',
    prompt: 'The short-run Phillips curve illustrates:',
    correct: 'A negative relationship between inflation and unemployment for given inflation expectations',
    wrong: [
      ['A positive relationship between inflation and unemployment', 'The short-run curve slopes downward, not upward.', 'Read the canonical sign.'],
      ['A long-run trade-off that policymakers can exploit indefinitely', 'In the long run, the Phillips curve is vertical at the natural rate; the trade-off vanishes.', 'Distinguish short-run from long-run.'],
      ['A trade-off only when expectations are perfectly correct', 'The short-run trade-off relies on expectations failing to adjust instantly, not on being perfectly correct.', 'Expectational rigidity is central.'],
    ],
    lesson: 'The short-run Phillips curve shows a temporary inverse relation between unemployment and inflation; it shifts when inflation expectations or supply conditions change.',
  },
  {
    id: 4400546,
    chapter: 'Macroeconomics: Phillips Curve',
    title: 'Long-run Phillips curve',
    prompt: 'The long-run Phillips curve is vertical at the natural rate of unemployment because:',
    correct: 'In the long run, inflation expectations adjust fully and unemployment returns to its natural rate',
    wrong: [
      ['Policymakers always choose zero inflation in the long run', 'Long-run inflation depends on policy choices and need not be zero; what is fixed is the natural rate.', 'The verticality is about real, not nominal, variables.'],
      ['Inflation expectations are permanently sticky', 'Permanent stickiness would imply a long-run trade-off, contradicting the vertical curve.', 'Check the assumption about expectations.'],
      ['The natural rate of unemployment falls toward zero over time', 'The natural rate is positive due to frictional and structural unemployment.', 'Zero is not the natural rate.'],
    ],
    lesson: 'Once expectations of inflation match actual inflation, unemployment returns to the natural rate, making the long-run Phillips curve vertical at that rate.',
  },

  // -----------------------------------------------------------------------
  // Macroeconomics: Trade and exchange rates
  // -----------------------------------------------------------------------
  {
    id: 4400547,
    chapter: 'Macroeconomics: Trade',
    title: 'Comparative advantage',
    prompt: 'Country A produces either 10 units of wheat or 5 units of cloth per worker; Country B produces either 6 wheat or 2 cloth per worker. Country A has the comparative advantage in:',
    correct: 'Cloth, because A\'s opportunity cost per cloth is 2 wheat versus B\'s 3 wheat',
    wrong: [
      ['Wheat, because A is more productive in absolute terms', 'Absolute advantage in both goods does not determine specialization; relative cost does.', 'Compare opportunity costs.'],
      ['Both goods, because A has higher productivity in each', 'A country can have comparative advantage in only one good (or be indifferent at equal ratios).', 'Comparative advantage is relative.'],
      ['Neither, because opportunity costs are identical', 'A pays 2 wheat per cloth and B pays 3, so the costs differ.', 'Compute each country\'s opportunity cost.'],
    ],
    lesson: 'Comparative advantage is determined by relative opportunity cost, not absolute productivity; each country gains by specializing where its opportunity cost is lower.',
  },
  {
    id: 4400548,
    chapter: 'Macroeconomics: Trade',
    title: 'Exchange rate appreciation',
    prompt: 'If the U.S. dollar appreciates against the euro, the most likely short-run effect on U.S. trade is:',
    correct: 'U.S. exports to the euro area fall and U.S. imports from the euro area rise',
    wrong: [
      ['U.S. exports rise and U.S. imports fall', 'Appreciation makes U.S. goods more expensive abroad and foreign goods cheaper at home, so the directions are reversed.', 'Walk through each price for foreign buyers.'],
      ['Both exports and imports rise equally, leaving net exports unchanged', 'Appreciation moves exports and imports in opposite directions.', 'Net exports move with the exchange rate.'],
      ['Trade flows are unaffected because contracts are sticky', 'Some short-run stickiness exists, but in the standard model trade volumes respond to the exchange rate.', 'Use the canonical model.'],
    ],
    lesson: 'A stronger domestic currency makes domestic goods more expensive for foreigners and foreign goods cheaper for domestic buyers, lowering exports and raising imports in the short run.',
  },
  {
    id: 4400549,
    chapter: 'Macroeconomics: Trade',
    title: 'Balance of payments identity',
    prompt: 'In a standard balance-of-payments accounting framework, a country running a large current-account deficit must, by identity, also have:',
    correct: 'A roughly offsetting financial-account surplus (net capital inflows)',
    wrong: [
      ['A government budget surplus of equal size', 'The "twin deficits" co-movement is empirical, not an accounting identity.', 'Identity vs correlation.'],
      ['A balanced financial account, because BOP must be zero overall', 'BOP overall sums to (approximately) zero, but a current-account deficit is offset by financial-account inflows.', 'Where do the offsetting flows show up?'],
      ['Zero foreign direct investment, because deficits block FDI', 'Current-account deficits are typically associated with net capital inflows, including FDI.', 'Capital flows in, not out.'],
    ],
    lesson: 'The balance-of-payments identity implies that a current-account deficit is matched by a financial-account surplus, reflecting net borrowing or asset sales to foreigners.',
  },
])
