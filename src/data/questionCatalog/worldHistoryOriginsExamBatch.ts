import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/early states|empires/i.test(chapter)) {
    return `${title} is about how large communities and states solve coordination problems. The useful answer is "${correct}"; connect resources, infrastructure, taxation, and administration to governing at scale.`
  }
  if (/belief|trade|maritime|exchange/i.test(chapter)) {
    return `${title} is about ideas, goods, people, and pathogens moving across regions. The useful answer is "${correct}"; look for networks that carry more than one product or belief.`
  }
  if (/disease|demography|industrialization|imperialism|global conflict/i.test(chapter)) {
    return `${title} is about large-scale change in population, production, empire, or war. The useful answer is "${correct}"; connect the event to labor, resources, markets, state power, and social disruption.`
  }
  return `${title} is a world history concept. The useful answer is "${correct}"; identify the historical process and the scale at which it operates.`
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
  source: 'Generated from OpenTriviaQA/OER world-history coverage',
})

export const worldHistoryOriginsExamBatchQuestions = makeQuestionBank('AP', [
  q(444001, 'Early States', 'River valley civilizations', 'Why did many early civilizations develop near large rivers?', 'Rivers supported farming, transport, and concentrated settlement', [
    miss('Rivers prevented all trade with nearby regions', 'Rivers often encouraged trade and movement.', 'Think about resources and transportation.'),
    miss('Rivers made agriculture impossible', 'Floodplains often supported agriculture.', 'Connect water and fertile soil to food production.'),
    miss('Rivers eliminated the need for government', 'Dense settlements often required more organization.', 'Ask what larger populations needed.'),
  ]),
  q(444002, 'Belief Systems', 'Universalizing religions', 'Which feature helped Buddhism, Christianity, and Islam spread across regions?', 'They offered teachings that could appeal beyond one ethnic or local group', [
    miss('They could only be practiced in one city each', 'These religions spread across wide regions.', 'Think universalizing rather than local-only.'),
    miss('They rejected all missionary or teaching activity', 'Teaching and conversion helped several universal religions spread.', 'Look at how beliefs moved.'),
    miss('They depended entirely on one river valley', 'Their spread was not limited to one valley.', 'Use the cross-regional pattern.'),
  ]),
  q(444003, 'Trade Networks', 'Silk Roads exchange', 'What was one major effect of Silk Roads trade?', 'Goods, technologies, religions, and diseases moved across Afro-Eurasia', [
    miss('Only silk moved, with no cultural exchange', 'Trade networks carried more than one product.', 'Think goods and ideas together.'),
    miss('All societies became politically identical', 'Exchange did not erase all differences.', 'Avoid overstatement.'),
    miss('Ocean trade stopped permanently', 'Overland and maritime routes often coexisted.', 'Do not treat one network as eliminating all others.'),
  ]),
  q(444004, 'Disease and Demography', 'Black Death impact', 'What was a major consequence of the Black Death in Afro-Eurasia?', 'Large population losses disrupted labor systems and economies', [
    miss('It caused no demographic change', 'The plague caused massive population decline.', 'Focus on population and labor effects.'),
    miss('It immediately created industrial factories everywhere', 'Industrialization came much later and through different processes.', 'Keep the period straight.'),
    miss('It ended all trade forever', 'Trade patterns changed but did not permanently end.', 'Avoid absolute claims.'),
  ]),
  q(444005, 'Empires', 'Imperial administration', 'Why did large empires often build roads, postal systems, or bureaucracies?', 'To move information, collect taxes, and govern distant territories', [
    miss('To make local administration impossible', 'These systems usually strengthened administration.', 'Ask what rulers needed across distance.'),
    miss('Only to decorate capital cities', 'Infrastructure had practical governing purposes.', 'Look for state-control functions.'),
    miss('To prevent armies from moving', 'Road systems often helped armies move faster.', 'Consider military and administrative uses.'),
  ]),
  q(444006, 'Maritime Worlds', 'Indian Ocean trade', 'What helped merchants sail seasonally across the Indian Ocean?', 'Monsoon wind patterns', [
    miss('Polar ice sheets', 'Polar ice did not drive Indian Ocean sailing seasons.', 'Think regional wind systems.'),
    miss('Steam engines in 800 CE', 'Steamships came much later.', 'Keep the technology in period.'),
    miss('The complete absence of coastal cities', 'Coastal cities were important trade nodes.', 'Look for environmental navigation aids.'),
  ]),
  q(444007, 'Early Modern Exchange', 'Columbian Exchange', 'Which example best fits the Columbian Exchange?', 'Maize, potatoes, horses, and diseases moving between hemispheres', [
    miss('Only paper money spreading inside one empire', 'The Columbian Exchange was transatlantic and biological as well as commercial.', 'Think hemispheres.'),
    miss('The invention of agriculture in one river valley', 'Agriculture began long before the Columbian Exchange.', 'Use post-1492 exchange.'),
    miss('A treaty ending World War I', 'That is a modern diplomatic event, not the Columbian Exchange.', 'Keep the period and process straight.'),
  ]),
  q(444008, 'Industrialization', 'Industrial Revolution cause', 'Which factor helped Britain industrialize early?', 'Access to coal, capital, labor, and markets', [
    miss('A total ban on machines', 'Industrialization required mechanized production.', 'Look for resources and economic conditions.'),
    miss('No connection to global trade', 'Trade and markets mattered to industrial growth.', 'Think domestic and global factors.'),
    miss('A complete lack of urban labor', 'Industrial factories drew on labor supply.', 'Urbanization and labor availability were linked.'),
  ]),
  q(444009, 'Imperialism', 'New imperialism motive', 'Why did many industrial powers expand empires in the late 1800s?', 'They sought raw materials, markets, strategic bases, and prestige', [
    miss('They wanted to abolish all access to resources', 'Industrial powers often wanted more resource access.', 'Connect industry to imperial motives.'),
    miss('They had no military or economic interests', 'Imperial expansion was tied to power and economics.', 'Look for strategic and market incentives.'),
    miss('They were avoiding all overseas influence', 'Imperialism is overseas expansion and control.', 'Use the definition of imperialism.'),
  ]),
  q(444010, 'Global Conflict', 'Total war', 'What does total war mean in modern world history?', 'States mobilize economies, civilians, and resources for a large-scale war effort', [
    miss('Only professional soldiers are affected', 'Total war reaches civilian economies and societies.', 'Think whole-society mobilization.'),
    miss('No resources are used by governments', 'War mobilization depends heavily on resources.', 'Use the scale of modern conflict.'),
    miss('A war fought without industry or propaganda', 'Modern total wars often involved industry and propaganda.', 'Look for broad mobilization.'),
  ]),
])
