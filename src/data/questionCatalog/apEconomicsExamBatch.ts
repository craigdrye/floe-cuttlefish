import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

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
  lesson:
    'Coverage source: OpenStax Economics, AP Economics-aligned OER, and public economics review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenStax/OER AP Economics coverage',
})

export const apEconomicsExamBatchQuestions = makeQuestionBank('AP', [
  q(449001, 'Microeconomics', 'Tax incidence', 'When demand is more inelastic than supply, who usually bears more of a per-unit tax burden?', 'Consumers', [
    miss('Producers always bear all of it', 'The burden depends on relative elasticities.', 'The less elastic side bears more burden.'),
    miss('No one bears any burden', 'A tax changes prices paid or received.', 'Think incidence, not statutory payment.'),
    miss('Only the government bears it', 'The government collects revenue; market participants bear the burden.', 'Separate tax collection from incidence.'),
  ]),
  q(449002, 'Microeconomics', 'Negative externality', 'A factory creates pollution costs not paid by the factory or its buyers. This is a:', 'Negative externality', [
    miss('Positive externality', 'A positive externality creates benefits for third parties.', 'Pollution imposes external costs.'),
    miss('Price ceiling', 'A price ceiling is a legal maximum price.', 'This is about third-party costs.'),
    miss('Public good', 'Pollution is not a nonrival, nonexcludable good.', 'Use externality language.'),
  ]),
  q(449003, 'Market Structures', 'Monopoly output', 'Compared with perfect competition, a profit-maximizing monopoly usually produces:', 'Less output at a higher price', [
    miss('More output at a lower price', 'That is the opposite of the standard monopoly result.', 'Market power restricts output.'),
    miss('The efficient competitive quantity automatically', 'Monopoly power creates deadweight loss in the standard model.', 'Compare MR and demand.'),
    miss('Zero output in every case', 'A monopoly can produce positive output when profitable.', 'Do not overstate.'),
  ]),
  q(449004, 'Macroeconomics', 'GDP component', 'A household buys a newly built house. In GDP accounting, this is counted as:', 'Investment', [
    miss('Consumption', 'New residential construction is counted as investment.', 'GDP categories have specific definitions.'),
    miss('Government purchases', 'A household purchase is not government spending.', 'Identify the buyer and category.'),
    miss('Net exports', 'This is not about exports minus imports.', 'Use domestic expenditure categories.'),
  ]),
  q(449005, 'Inflation', 'CPI meaning', 'The Consumer Price Index is mainly used to measure:', 'Changes in the price level faced by consumers', [
    miss('Total real output produced by firms', 'That is closer to real GDP.', 'CPI tracks consumer prices.'),
    miss('The unemployment rate', 'Unemployment is a labor-market measure.', 'Use price index language.'),
    miss('The money multiplier directly', 'That belongs to banking and money creation.', 'CPI is about inflation.'),
  ]),
  q(449006, 'Labor Markets', 'Unemployment classification', 'A worker loses a job because a recession reduces overall spending. This is:', 'Cyclical unemployment', [
    miss('Frictional unemployment', 'Frictional unemployment comes from normal job search.', 'Recession points to the business cycle.'),
    miss('Structural unemployment', 'Structural unemployment comes from skill or industry mismatch.', 'Aggregate-demand decline is cyclical.'),
    miss('Discouraged worker status only', 'The prompt says the worker loses a job; classification depends on cause.', 'Use the recession clue.'),
  ]),
  q(449007, 'Fiscal Policy', 'Spending multiplier', 'If the marginal propensity to consume is 0.8, what is the simple spending multiplier?', '5', [
    miss('0.2', 'That is the marginal propensity to save.', 'Multiplier is 1/(1 - MPC).'),
    miss('1.25', 'That is 1/MPC, not the spending multiplier.', 'Use MPS in the denominator.'),
    miss('8', 'That treats 0.8 like 8 directly.', 'Convert the formula carefully.'),
  ]),
  q(449008, 'Money and Banking', 'Reserve requirement', 'If the required reserve ratio is 10%, what is the simple money multiplier?', '10', [
    miss('0.10', 'That is the reserve ratio, not the multiplier.', 'Multiplier is 1/rr.'),
    miss('90', 'That uses the excess percentage incorrectly.', 'Use 1 divided by 0.10.'),
    miss('1', 'A 10% reserve ratio allows multiple deposit expansion in the simple model.', 'Apply the formula.'),
  ]),
  q(449009, 'Open Economy', 'Currency appreciation', 'If the U.S. dollar appreciates, U.S. exports usually become:', 'More expensive for foreign buyers', [
    miss('Cheaper for foreign buyers', 'A stronger dollar raises foreign-currency cost of U.S. goods.', 'Think exchange-rate purchasing power.'),
    miss('Unchanged in every market', 'Exchange rates affect international prices.', 'Use relative currency value.'),
    miss('Illegal to sell abroad', 'Appreciation changes prices, not legality.', 'Stay with price competitiveness.'),
  ]),
  q(449010, 'Trade', 'Comparative advantage', 'Comparative advantage is based on:', 'Lower opportunity cost', [
    miss('Higher absolute output only', 'Absolute advantage is about producing more with the same resources.', 'Comparative advantage uses opportunity cost.'),
    miss('Having no tradeoffs', 'Scarcity means tradeoffs remain.', 'Compare what is given up.'),
    miss('Charging the highest price', 'Price may reflect many things; comparative advantage is a production-cost concept.', 'Use opportunity cost.'),
  ]),
])
