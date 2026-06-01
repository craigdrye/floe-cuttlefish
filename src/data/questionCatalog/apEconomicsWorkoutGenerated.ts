import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  AP_WORKOUT_MATHCS_SUB_TOPICS,
  AP_WORKOUT_MATHCS_MENTOR_HINTS,
  AP_WORKOUT_MATHCS_CORRECT_SHORTENED,
} from './apWorkoutMathCsPolish'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/Chapter 1/i.test(chapter)) {
    return `${title} is an economic-thinking building block. The useful answer is "${correct}"; focus on scarcity, tradeoffs, opportunity cost, and marginal reasoning before reaching for formulas.`
  }
  if (/Chapter 2/i.test(chapter)) {
    return `${title} is about supply, demand, elasticity, or welfare. The useful answer is "${correct}"; ask whether the prompt changes a curve, moves along a curve, changes responsiveness, or creates surplus/shortage.`
  }
  if (/Chapter 3/i.test(chapter)) {
    return `${title} is about consumers, costs, or firm decisions. The useful answer is "${correct}"; separate utility from cost, marginal from total, and explicit from implicit cost.`
  }
  if (/Chapter 4/i.test(chapter)) {
    return `${title} is about market power or market failure. The useful answer is "${correct}"; compare competitive benchmarks with monopoly behavior, external spillovers, public-good problems, and tax incidence.`
  }
  if (/Chapter 5/i.test(chapter)) {
    return `${title} is macro measurement vocabulary. The useful answer is "${correct}"; identify whether the question is measuring output, prices, unemployment, or the business-cycle cause of a labor-market change.`
  }
  if (/Chapter 6/i.test(chapter)) {
    return `${title} is about fiscal policy, money, or monetary policy. The useful answer is "${correct}"; track whether the tool changes government budgets, bank reserves, interest rates, or aggregate demand.`
  }
  if (/Chapter 7/i.test(chapter)) {
    return `${title} connects trade, exchange rates, growth, and macro graphs. The useful answer is "${correct}"; follow the relative-price or capacity change through to exports, imports, output, or employment.`
  }
  if (/Chapter 8/i.test(chapter)) {
    return `${title} is AP exam synthesis vocabulary. The useful answer is "${correct}"; connect the definition to the graph, formula, or welfare effect the exam is likely to test.`
  }
  return `${title} is an AP Economics concept. The useful answer is "${correct}"; identify the model, incentive, or measurement idea before choosing.`
}

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: lessonFor(chapter, title, correct),
  source: 'Generated from AP Economics coverage',
})

// Wave 4 consolidation 2026-05-18: ExamBatch (10 items) merged into this canonical AP Econ bank.
// Chapter labels aligned to the eight AP Economics syllabus chapters.
const _baseApEconomicsWorkoutGeneratedQuestions = makeQuestionBank('AP', [
  // --- Merged from apEconomicsExamBatch.ts (was ids 449001-449010) ---
  q(449001, 'Chapter 4: Market Structures and Market Failure', 'Tax incidence', 'When demand is more inelastic than supply, who usually bears more of a per-unit tax burden?', 'Consumers', [
    miss('Producers always bear all of it', 'The burden depends on relative elasticities.', 'The less elastic side bears more burden.'),
    miss('No one bears any burden', 'A tax changes prices paid or received.', 'Think incidence, not statutory payment.'),
    miss('Only the government bears it', 'The government collects revenue; market participants bear the burden.', 'Separate tax collection from incidence.'),
  ]),
  q(449002, 'Chapter 4: Market Structures and Market Failure', 'Negative externality', 'A factory creates pollution costs not paid by the factory or its buyers. This is a:', 'Negative externality', [
    miss('Positive externality', 'A positive externality creates benefits for third parties.', 'Pollution imposes external costs.'),
    miss('Price ceiling', 'A price ceiling is a legal maximum price.', 'This is about third-party costs.'),
    miss('Public good', 'Pollution is not a nonrival, nonexcludable good.', 'Use externality language.'),
  ]),
  q(449003, 'Chapter 4: Market Structures and Market Failure', 'Monopoly output vs. competition', 'Compared with perfect competition, a profit-maximizing monopoly usually produces:', 'Less output at a higher price', [
    miss('More output at a lower price', 'That is the opposite of the standard monopoly result.', 'Market power restricts output.'),
    miss('The efficient competitive quantity automatically', 'Monopoly power creates deadweight loss in the standard model.', 'Compare MR and demand.'),
    miss('Zero output in every case', 'A monopoly can produce positive output when profitable.', 'Do not overstate.'),
  ]),
  q(449004, 'Chapter 5: Macro Measurement and Business Cycles', 'GDP category of a new home', 'A household buys a newly built house. In GDP accounting, this is counted as:', 'Investment', [
    miss('Consumption', 'New residential construction is counted as investment.', 'GDP categories have specific definitions.'),
    miss('Government purchases', 'A household purchase is not government spending.', 'Identify the buyer and category.'),
    miss('Net exports', 'This is not about exports minus imports.', 'Use domestic expenditure categories.'),
  ]),
  q(449005, 'Chapter 5: Macro Measurement and Business Cycles', 'CPI purpose', 'The Consumer Price Index is mainly used to measure:', 'Changes in the price level faced by consumers', [
    miss('Total real output produced by firms', 'That is closer to real GDP.', 'CPI tracks consumer prices.'),
    miss('The unemployment rate', 'Unemployment is a labor-market measure.', 'Use price index language.'),
    miss('The money multiplier directly', 'That belongs to banking and money creation.', 'CPI is about inflation.'),
  ]),
  q(449006, 'Chapter 5: Macro Measurement and Business Cycles', 'Cyclical vs. structural unemployment', 'A worker loses a job because a recession reduces overall spending. This is:', 'Cyclical unemployment', [
    miss('Frictional unemployment', 'Frictional unemployment comes from normal job search.', 'Recession points to the business cycle.'),
    miss('Structural unemployment', 'Structural unemployment comes from skill or industry mismatch.', 'Aggregate-demand decline is cyclical.'),
    miss('Discouraged worker status only', 'The prompt says the worker loses a job; classification depends on cause.', 'Use the recession clue.'),
  ]),
  q(449007, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'Spending multiplier from MPC', 'If the marginal propensity to consume is 0.8, what is the simple spending multiplier?', '5', [
    miss('0.2', 'That is the marginal propensity to save.', 'Multiplier is 1/(1 - MPC).'),
    miss('1.25', 'That is 1/MPC, not the spending multiplier.', 'Use MPS in the denominator.'),
    miss('8', 'That treats 0.8 like 8 directly.', 'Convert the formula carefully.'),
  ]),
  q(449008, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'Money multiplier from reserve ratio', 'If the required reserve ratio is 10%, what is the simple money multiplier?', '10', [
    miss('0.10', 'That is the reserve ratio, not the multiplier.', 'Multiplier is 1/rr.'),
    miss('90', 'That uses the excess percentage incorrectly.', 'Use 1 divided by 0.10.'),
    miss('1', 'A 10% reserve ratio allows multiple deposit expansion in the simple model.', 'Apply the formula.'),
  ]),
  q(449009, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Currency appreciation effect on exports', 'If the U.S. dollar appreciates, U.S. exports usually become:', 'More expensive for foreign buyers', [
    miss('Cheaper for foreign buyers', 'A stronger dollar raises foreign-currency cost of U.S. goods.', 'Think exchange-rate purchasing power.'),
    miss('Unchanged in every market', 'Exchange rates affect international prices.', 'Use relative currency value.'),
    miss('Illegal to sell abroad', 'Appreciation changes prices, not legality.', 'Stay with price competitiveness.'),
  ]),
  q(449010, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Comparative advantage source', 'Comparative advantage is based on:', 'Lower opportunity cost', [
    miss('Higher absolute output only', 'Absolute advantage is about producing more with the same resources.', 'Comparative advantage uses opportunity cost.'),
    miss('Having no tradeoffs', 'Scarcity means tradeoffs remain.', 'Compare what is given up.'),
    miss('Charging the highest price', 'Price may reflect many things; comparative advantage is a production-cost concept.', 'Use opportunity cost.'),
  ]),
  // --- Original Wave 1 content (chapter labels realigned to the eight AP Econ syllabus chapters) ---
  q(402001, 'Chapter 1: Economic Thinking and Graph Skills', 'Scarcity', 'Scarcity exists because:', 'Resources are limited while wants are unlimited', [miss('Money is illegal', 'Scarcity is broader than money.', 'Use resources versus wants.'), miss('Only governments make choices', 'All economic agents face choices.', 'Scarcity creates tradeoffs.'), miss('All goods are free', 'Free goods are not scarce in the same way.', 'Scarcity implies opportunity cost.')]),
  q(402002, 'Chapter 1: Economic Thinking and Graph Skills', 'Opportunity cost', 'The opportunity cost of choosing option A is:', 'The value of the next best option given up', [miss('The total value of every option available', 'Opportunity cost is next best alternative, not all alternatives.', 'Use the margin.'), miss('Only the sticker price', 'Time and forgone benefits can matter too.', 'Think sacrifice.'), miss('The benefit of option A', 'That is what you gain, not what you give up.', 'Cost is forgone alternative.')]),
  q(402003, 'Chapter 1: Economic Thinking and Graph Skills', 'Marginal analysis', 'A rational decision at the margin compares:', 'Marginal benefit and marginal cost', [miss('Total revenue and total population', 'That is not marginal decision logic.', 'Look at one more unit.'), miss('Average age and average price', 'Averages can matter, but marginal analysis uses changes.', 'One additional unit.'), miss('Only sunk costs', 'Sunk costs should not drive marginal decisions.', 'Compare future benefits and costs.')]),
  q(402004, 'Chapter 1: Economic Thinking and Graph Skills', 'Production possibilities', 'A point outside a production possibilities frontier is:', 'Currently unattainable with existing resources and technology', [miss('Efficient and attainable', 'Efficient attainable points lie on the frontier.', 'Outside means beyond capacity.'), miss('Inefficient but attainable', 'Inefficient attainable points lie inside the frontier.', 'Outside cannot be produced now.'), miss('Always impossible forever', 'Growth or technology could make it attainable later.', 'Currently is the key.')]),
  q(402005, 'Chapter 1: Economic Thinking and Graph Skills', 'Comparative advantage', 'Comparative advantage is based on lower:', 'Opportunity cost', [miss('Absolute cost only', 'Absolute advantage is about productivity, not opportunity cost.', 'Comparative means relative tradeoff.'), miss('Population size', 'Population does not define comparative advantage.', 'Use opportunity cost.'), miss('Tax rate only', 'Taxes can affect costs but are not the definition.', 'Compare forgone alternatives.')]),
  q(402006, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Law of demand', 'Holding other factors constant, as price rises, quantity demanded usually:', 'Falls', [miss('Rises', 'That reverses the law of demand.', 'Higher price discourages buyers.'), miss('Does not respond for any good', 'Some goods are less responsive, but demand law is general.', 'Quantity demanded moves along the curve.'), miss('Becomes supply', 'Demand and supply are different schedules.', 'Stay on buyer side.')]),
  q(402007, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Demand shift', 'An increase in consumer income for a normal good usually:', 'Shifts demand right', [miss('Shifts supply right', 'Income affects buyers, not producers directly.', 'Demand side changes.'), miss('Moves along demand only', 'Non-price determinants shift the curve.', 'Income is not the good’s price.'), miss('Shifts demand left', 'Normal goods are demanded more when income rises.', 'Normal means positive income effect.')]),
  q(402008, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Inferior good', 'For an inferior good, higher income causes demand to:', 'Decrease', [miss('Increase', 'That describes a normal good.', 'Inferior goods have negative income effect.'), miss('Become supply', 'Demand does not become supply.', 'Use buyer behavior.'), miss('Stay fixed by definition', 'Inferior good demand responds to income.', 'Direction is negative.')]),
  q(402009, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Supply shift', 'A decrease in input costs usually:', 'Shifts supply right', [miss('Shifts supply left', 'Lower costs make production more attractive.', 'Producers can supply more.'), miss('Shifts demand right', 'Input costs directly affect producers.', 'Supply side.'), miss('Moves along demand', 'This is not a price change for consumers.', 'It is a supply determinant.')]),
  q(402010, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Equilibrium', 'Market equilibrium occurs where:', 'Quantity demanded equals quantity supplied', [miss('Demand is zero', 'Equilibrium can have positive quantity.', 'Use intersection.'), miss('Supply is always greater than demand', 'That creates surplus, not equilibrium.', 'Quantities equal.'), miss('Price is always zero', 'Equilibrium price can be positive.', 'Market-clearing price.')]),
  q(402011, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Shortage', 'A binding price ceiling usually creates:', 'A shortage', [miss('A surplus', 'Price ceilings below equilibrium make quantity demanded exceed supplied.', 'Rent control is the classic example.'), miss('No effect ever', 'Binding means it affects the market.', 'Below equilibrium matters.'), miss('A tax revenue increase automatically', 'Ceilings are not taxes.', 'Use quantity demanded versus supplied.')]),
  q(402012, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Surplus', 'A binding price floor usually creates:', 'A surplus', [miss('A shortage', 'Floors above equilibrium make quantity supplied exceed demanded.', 'Minimum wage can create surplus labor.'), miss('A lower legal price', 'A floor is a minimum price.', 'Above equilibrium is binding.'), miss('No unsold units ever', 'Surplus means unsold excess supply.', 'Compare Qs and Qd.')]),
  q(402013, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Elastic demand', 'Demand is elastic when price elasticity of demand has absolute value:', 'Greater than 1', [miss('Less than 1', 'That is inelastic demand.', 'Elastic means quantity responds more than proportionally.'), miss('Equal to 0', 'That is perfectly inelastic.', 'No quantity response.'), miss('Always negative infinity only', 'Elastic is a range, not only perfect elasticity.', 'Use absolute value > 1.')]),
  q(402014, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Inelastic demand', 'If demand is inelastic, a price increase causes total revenue to:', 'Increase', [miss('Decrease', 'For inelastic demand, quantity falls proportionally less than price rises.', 'Revenue follows price effect.'), miss('Stay unchanged because quantity does not respond at all', 'Inelastic demand means quantity responds less than proportionally, not necessarily zero response.', 'Use elasticity-total revenue test.'), miss('Stay mathematically impossible', 'Revenue is price times quantity.', 'Compare percentage changes.')]),
  q(402015, 'Chapter 2: Supply, Demand, Elasticity, and Welfare', 'Unit elastic', 'Unit elastic demand means:', 'Percent change in quantity equals percent change in price in magnitude', [miss('Quantity never changes', 'That is perfectly inelastic.', 'Unit elastic means equal percentage response.'), miss('Price is always one dollar', 'Unit refers to elasticity value, not price level.', 'Elasticity equals 1 in magnitude.'), miss('Supply equals demand', 'That is equilibrium, not elasticity.', 'Use responsiveness.')]),
  q(402016, 'Chapter 3: Production, Costs, and Firm Decisions', 'Utility', 'Utility in economics means:', 'Satisfaction or benefit from consuming goods/services', [miss('Electric company output only', 'Utility has a broader economics meaning.', 'Think satisfaction.'), miss('Production cost', 'Cost and utility differ.', 'Consumer benefit.'), miss('Tax paid to government', 'Taxes are not utility.', 'Use preference satisfaction.')]),
  q(402017, 'Chapter 3: Production, Costs, and Firm Decisions', 'Diminishing marginal utility', 'Diminishing marginal utility means each additional unit consumed provides:', 'Less additional satisfaction than the previous unit', [miss('More additional satisfaction forever', 'That is increasing marginal utility.', 'Diminishing means falling extra benefit.'), miss('Exactly zero satisfaction always', 'It may remain positive but smaller.', 'Marginal benefit declines.'), miss('The same total utility as before', 'Total utility can still rise.', 'Marginal utility changes.')]),
  q(402018, 'Chapter 3: Production, Costs, and Firm Decisions', 'Fixed cost', 'A fixed cost is a cost that:', 'Does not change with output in the short run', [miss('Changes with every unit produced', 'That is variable cost.', 'Fixed means output-independent in short run.'), miss('Is always zero', 'Fixed costs can be positive.', 'Rent is a common example.'), miss('Only consumers pay', 'Firms pay costs.', 'Use production side.')]),
  q(402019, 'Chapter 3: Production, Costs, and Firm Decisions', 'Marginal cost', 'Marginal cost is:', 'The additional cost of producing one more unit', [miss('Total cost divided by output', 'That is average total cost.', 'Marginal means extra.'), miss('Total revenue minus total cost', 'That is profit.', 'Use cost of one more unit.'), miss('Price times quantity', 'That is total revenue.', 'Stay with cost.')]),
  q(402020, 'Chapter 3: Production, Costs, and Firm Decisions', 'Profit', 'Economic profit equals:', 'Total revenue minus explicit and implicit costs', [miss('Total revenue only', 'Profit subtracts costs.', 'Economic profit includes implicit costs.'), miss('Accounting profit plus implicit costs', 'Economic profit is usually accounting profit minus implicit costs.', 'Opportunity costs matter.'), miss('Price floor minus tax', 'Not profit formula.', 'Use TR - TC.')]),
  q(402021, 'Chapter 4: Market Structures and Market Failure', 'Perfect competition', 'A perfectly competitive firm is a:', 'Price taker', [miss('Price maker with market power', 'That describes monopoly/market power.', 'Many firms, identical product.'), miss('Only buyer in the market', 'That is monopsony-like.', 'Perfect competition has many buyers and sellers.'), miss('Government agency only', 'Not the definition.', 'Firm accepts market price.')]),
  q(402022, 'Chapter 4: Market Structures and Market Failure', 'Monopoly', 'A monopoly has:', 'A single seller with significant barriers to entry', [miss('Many identical sellers and no barriers', 'That is perfect competition.', 'Monopoly means one dominant seller.'), miss('No market power', 'Monopolies have market power.', 'Barriers protect the firm.'), miss('Only one buyer', 'That is monopsony.', 'Seller side.')]),
  q(402023, 'Chapter 4: Market Structures and Market Failure', 'Monopoly output', 'Compared with perfect competition, monopoly usually produces:', 'Less output at a higher price', [miss('More output at a lower price', 'That reverses the standard monopoly outcome.', 'Market power restricts output.'), miss('The socially efficient quantity automatically', 'Monopoly creates deadweight loss.', 'MR=MC below efficient output.'), miss('No output ever', 'Monopolies usually produce positive output.', 'But restrict relative to competition.')]),
  q(402024, 'Chapter 4: Market Structures and Market Failure', 'Oligopoly', 'Oligopoly markets are characterized by:', 'Few firms with strategic interdependence', [miss('Thousands of firms with no strategy', 'That resembles perfect competition.', 'Few firms watch each other.'), miss('Exactly one seller', 'That is monopoly.', 'Oligopoly means few.'), miss('No barriers to entry always', 'Oligopolies often have barriers.', 'Strategic behavior matters.')]),
  q(402025, 'Chapter 4: Market Structures and Market Failure', 'Dominant strategy', 'A dominant strategy is best regardless of:', 'What the other player does', [miss('Only when the other player cooperates', 'That may be conditional, not dominant.', 'Dominant means best across all opponent actions.'), miss('The player’s payoff', 'Strategies are evaluated by payoffs.', 'Use payoff table.'), miss('Market price only', 'Game theory is broader.', 'Opponent choices matter.')]),
  q(402026, 'Chapter 4: Market Structures and Market Failure', 'Negative externality', 'A negative externality occurs when:', 'A cost spills over onto third parties', [miss('A benefit spills over onto third parties', 'That is positive externality.', 'Negative means external cost.'), miss('The buyer pays the full cost only', 'Then externality may be internalized.', 'Look for third-party harm.'), miss('A firm earns profit', 'Profit alone is not externality.', 'Spillover cost.')]),
  q(402027, 'Chapter 4: Market Structures and Market Failure', 'Positive externality', 'Vaccination can create a positive externality because:', 'It can reduce disease spread to others', [miss('It only benefits the vaccinated person', 'Herd immunity affects others.', 'Look for spillover benefit.'), miss('It increases pollution', 'That would be negative externality if anything.', 'Use health spillover.'), miss('It has no social effect', 'The external benefit is social.', 'Third parties benefit.')]),
  q(402028, 'Chapter 4: Market Structures and Market Failure', 'Public good', 'A public good is:', 'Nonexcludable and nonrival', [miss('Excludable and rival', 'That is a private good.', 'Public goods are hard to exclude and shareable.'), miss('Always produced only by private clubs', 'Public goods are often government-provided but definition is about properties.', 'Use excludability/rivalry.'), miss('A good with no benefits', 'Public goods can be valuable.', 'Think national defense.')]),
  q(402029, 'Chapter 4: Market Structures and Market Failure', 'Free rider problem', 'Free riding happens when people:', 'Benefit without paying', [miss('Pay without benefiting every time', 'That is not free riding.', 'Free riders consume benefits unpaid.'), miss('Produce too much private output', 'Free riding concerns public goods.', 'Nonexcludability enables it.'), miss('Never consume anything', 'They benefit from the good.', 'Use payment issue.')]),
  q(402030, 'Chapter 5: Macro Measurement and Business Cycles', 'GDP', 'GDP measures:', 'Market value of final goods and services produced within a country in a period', [miss('Only imports bought by consumers', 'Imports are not domestic production.', 'GDP is domestic final production.'), miss('Total wealth accumulated over all history', 'GDP is a flow per period, not wealth stock.', 'Use current production.'), miss('Only government spending', 'Government spending is one component.', 'GDP includes C, I, G, net exports.')]),
  q(402031, 'Chapter 5: Macro Measurement and Business Cycles', 'Real GDP', 'Real GDP adjusts nominal GDP for:', 'Price level changes', [miss('Population only', 'Per capita GDP adjusts for population.', 'Real means inflation-adjusted.'), miss('Imports only', 'Imports affect net exports, not real adjustment.', 'Use price changes.'), miss('Unemployment only', 'Unemployment is separate.', 'Inflation adjustment.')]),
  q(402032, 'Chapter 5: Macro Measurement and Business Cycles', 'Unemployment rate', 'The unemployment rate is unemployed workers divided by:', 'The labor force', [miss('Total population', 'The denominator is labor force, not everyone.', 'Exclude people not in labor force.'), miss('Number of jobs only', 'Use people in labor force.', 'Unemployed / labor force.'), miss('GDP', 'GDP is output, not denominator.', 'Use labor-market measure.')]),
  q(402033, 'Chapter 5: Macro Measurement and Business Cycles', 'Inflation', 'Inflation is:', 'A sustained increase in the overall price level', [miss('A fall in all prices', 'That is deflation.', 'Inflation is rising price level.'), miss('An increase in real output only', 'Output growth is separate.', 'Use prices.'), miss('A one-good sale price change', 'Inflation concerns overall level, not one product.', 'Broad price index.')]),
  q(402034, 'Chapter 5: Macro Measurement and Business Cycles', 'CPI', 'The Consumer Price Index tracks:', 'Prices of a basket of consumer goods and services', [miss('Only stock prices', 'That would be a stock index.', 'CPI measures consumer prices.'), miss('Only exports', 'Exports are not CPI basket focus.', 'Household consumption basket.'), miss('Only wages', 'Wages are labor prices, not CPI basket itself.', 'Consumer goods/services.')]),
  q(402035, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'AD components', 'Aggregate demand is composed of:', 'C + I + G + NX', [miss('W + R + i + profit', 'That resembles income categories, not AD components.', 'Use expenditure approach.'), miss('Only consumption', 'Consumption is one component.', 'Include investment, government, net exports.'), miss('Only taxes and transfers', 'Fiscal policy affects AD but is not the formula.', 'Use spending components.')]),
  q(402036, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'Expansionary fiscal policy', 'Expansionary fiscal policy includes:', 'Increasing government spending or cutting taxes', [miss('Cutting government spending and raising taxes', 'That is contractionary.', 'Expansion raises aggregate demand.'), miss('Increasing reserve requirements only', 'That is monetary policy.', 'Fiscal uses spending/taxes.'), miss('Reducing money supply only', 'That is contractionary monetary policy.', 'Use government budget tools.')]),
  q(402037, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'Money functions', 'Money serves as medium of exchange, unit of account, and:', 'Store of value', [miss('Source of photosynthesis', 'Not economic function.', 'Recall the three functions.'), miss('Perfect guarantee against inflation', 'Money can lose value.', 'Store of value is one role.'), miss('Only a tax bill', 'Money is broader than taxes.', 'Use standard functions.')]),
  q(402038, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'Bank reserves', 'Bank reserves are:', 'Funds banks hold instead of lending out', [miss('Only consumer purchases', 'Reserves are bank-held funds.', 'Think vault cash or central bank deposits.'), miss('Imports minus exports', 'That is trade balance concept.', 'Banking system.'), miss('All government spending', 'Not reserves.', 'Funds held by banks.')]),
  q(402039, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'Money multiplier', 'A lower reserve requirement tends to:', 'Increase the money multiplier', [miss('Decrease the money multiplier', 'Lower reserves allow more lending.', 'Less held back means larger expansion.'), miss('Eliminate banking', 'Banks still operate.', 'Use reserve ratio relationship.'), miss('Make GDP undefined', 'GDP is measured separately; the reserve requirement changes potential deposit expansion.', 'Money multiplier changes.')]),
  q(402040, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'Expansionary monetary policy', 'Expansionary monetary policy usually aims to:', 'Lower interest rates and increase aggregate demand', [miss('Raise interest rates and lower aggregate demand', 'That is contractionary.', 'Expansion makes borrowing easier.'), miss('Ban all lending', 'That would not expand money/credit.', 'Use lower rates.'), miss('Fix every price individually', 'Monetary policy affects economy-wide conditions.', 'Central bank tools.')]),
  q(402041, 'Chapter 6: Fiscal Policy, Money, and Monetary Policy', 'Open market purchase', 'When a central bank buys government bonds, bank reserves usually:', 'Increase', [miss('Decrease', 'Purchases inject money into banking system.', 'Central bank pays for bonds.'), miss('Become zero automatically', 'A bond purchase adds reserves to the banking system rather than wiping them out.', 'Reserves rise.'), miss('Turn into tariffs', 'Tariffs are trade policy.', 'Open market operations affect reserves.')]),
  q(402042, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Tariff', 'A tariff is:', 'A tax on imports', [miss('A subsidy to exports only', 'Tariffs tax imports.', 'Trade barrier.'), miss('A limit on quantity imported', 'That is a quota.', 'Tariff is tax.'), miss('A floating exchange rate', 'That is currency regime.', 'Use import tax.')]),
  q(402043, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Quota', 'An import quota is:', 'A legal limit on the quantity imported', [miss('A tax per imported unit', 'That is a tariff.', 'Quota is quantity limit.'), miss('A central bank bond purchase', 'That is monetary policy.', 'Trade policy.'), miss('A measure of inflation', 'Not quota.', 'Use import quantity cap.')]),
  q(402044, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Exchange rate appreciation', 'If the dollar appreciates, U.S. imports become:', 'Cheaper for U.S. buyers', [miss('More expensive for U.S. buyers', 'A stronger dollar buys more foreign currency.', 'Imports cheaper.'), miss('Impossible to buy', 'Appreciation does not ban trade.', 'It changes relative prices.'), miss('Unrelated to currency', 'Exchange rates directly affect import prices.', 'Stronger domestic currency.')]),
  q(402045, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Net exports', 'Net exports equal:', 'Exports minus imports', [miss('Imports minus exports', 'That is the negative of net exports.', 'NX = X - M.'), miss('GDP minus consumption', 'Not net exports formula.', 'Use trade flows.'), miss('Tariffs plus quotas', 'Those are trade policies.', 'Net exports is export value minus import value.')]),
  q(402046, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Short-run Phillips curve', 'The short-run Phillips curve shows a tradeoff between:', 'Inflation and unemployment', [miss('GDP and exchange rates only', 'Not the Phillips curve relationship.', 'Use inflation/unemployment.'), miss('Imports and exports', 'That is trade.', 'Phillips curve is macro labor/prices.'), miss('Supply and demand in one product market', 'Phillips curve is aggregate relationship.', 'Inflation vs unemployment.')]),
  q(402047, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Economic growth', 'Long-run economic growth is best represented by:', 'An outward shift of the production possibilities frontier', [miss('A movement inside the frontier', 'Inside points are inefficient.', 'Growth expands capacity.'), miss('A shortage from a price ceiling', 'That is market control effect.', 'Growth increases potential output.'), miss('A decrease in resources', 'That would shrink capacity.', 'Outward shift.')]),
  q(402048, 'Chapter 7: Growth, Open Economy, Cross-Graph Reasoning', 'Human capital', 'Human capital refers to:', 'Skills, education, and knowledge of workers', [miss('Machines and factories only', 'That is physical capital.', 'Human capital is embodied in people.'), miss('Natural resources only', 'Land/resources are separate.', 'Use worker skills.'), miss('Money in a bank account only', 'Financial capital differs.', 'Education and training.')]),
  q(402049, 'Chapter 8: AP Economics Exam Studio', 'Automatic stabilizer', 'An automatic stabilizer is a policy feature that:', 'Changes spending or taxes without new legislation as the economy moves', [miss('Requires a new vote for every payment', 'Automatic means no new legislation each time.', 'Think unemployment insurance.'), miss('Only fixes exchange rates', 'Not the definition.', 'Fiscal response built into system.'), miss('Prevents all recessions completely', 'Stabilizers reduce swings, not eliminate all downturns.', 'Dampening effect.')]),
  q(402050, 'Chapter 8: AP Economics Exam Studio', 'Deadweight loss', 'Deadweight loss is:', 'Lost total surplus from an inefficient market outcome', [miss('Government revenue from a tax', 'Tax revenue is transferred surplus, not deadweight loss.', 'DWL is lost gains from trade.'), miss('Consumer surplus only', 'DWL includes lost total surplus.', 'Inefficiency triangle.'), miss('Producer profit only', 'Profit is not the definition.', 'Use lost surplus.')]),
])

export const apEconomicsWorkoutGeneratedQuestions = runPolish(_baseApEconomicsWorkoutGeneratedQuestions, [
  {
    subTopics: AP_WORKOUT_MATHCS_SUB_TOPICS,
    mentorHints: AP_WORKOUT_MATHCS_MENTOR_HINTS,
    correctShortened: AP_WORKOUT_MATHCS_CORRECT_SHORTENED,
    source: 'apWorkoutMathCs',
  },
])
