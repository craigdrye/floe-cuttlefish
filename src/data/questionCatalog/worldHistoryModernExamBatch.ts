import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

function lessonFor(chapter: string, title: string, correct: string) {
  if (/atlantic|industrialization|imperialism/i.test(chapter)) {
    return `${title} is about political and economic transformation. The useful answer is "${correct}"; connect ideas about rights, factory organization, or empire to the institutions they changed.`
  }
  if (/world war|interwar|cold war/i.test(chapter)) {
    return `${title} is about conflict, ideology, and state strategy. The useful answer is "${correct}"; ask how alliances, regimes, diplomacy, and containment shaped escalation or rivalry.`
  }
  if (/decolonization|global institutions|globalization/i.test(chapter)) {
    return `${title} is about the postwar world being reorganized. The useful answer is "${correct}"; connect self-determination, international cooperation, and cross-border economic networks.`
  }
  return `${title} is a modern world history concept. The useful answer is "${correct}"; identify the process, actors, and period before choosing the explanation.`
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
  source: 'Generated from OpenTriviaQA/OER modern world-history coverage',
})

export const worldHistoryModernExamBatchQuestions = makeQuestionBank('AP', [
  q(445001, 'Atlantic Revolutions', 'Rights language', 'What idea linked many Atlantic revolutions in the late 1700s and early 1800s?', 'Claims about natural rights, citizenship, and popular sovereignty', [
    miss('A rejection of all political participation', 'Revolutionary movements often expanded claims about participation and rights.', 'Think Enlightenment political language.'),
    miss('A demand that monarchs never be challenged', 'Many revolutions challenged monarchical authority.', 'Look for anti-absolutist ideas.'),
    miss('A belief that colonies should never trade', 'Trade policy mattered, but rights and sovereignty were central links.', 'Use the broad ideological pattern.'),
  ]),
  q(445002, 'Industrialization', 'Factory system', 'What was one major social effect of the factory system?', 'More workers labored in centralized workplaces under timed discipline', [
    miss('All production returned to isolated household workshops', 'Factories centralized production rather than restoring household production.', 'Focus on workplace organization.'),
    miss('Cities became unnecessary', 'Industrialization often accelerated urbanization.', 'Link factories and cities.'),
    miss('Wage labor disappeared everywhere', 'Factory systems expanded wage labor.', 'Think labor relations.'),
  ]),
  q(445003, 'Imperialism', 'Direct rule', 'In imperial history, direct rule usually means:', 'Colonial officials govern the territory through imposed administrative structures', [
    miss('The colonized region has no contact with the empire', 'Direct rule means tighter imperial contact and control.', 'Use the governance term.'),
    miss('Local rulers control everything without imperial oversight', 'That is closer to indirect rule.', 'Direct rule reduces local autonomy.'),
    miss('A colony becomes fully independent immediately', 'Independence is the opposite of colonial rule.', 'Keep the imperial context.'),
  ]),
  q(445004, 'World War I', 'Alliance systems', 'Why did alliance systems make World War I more likely to expand?', 'They could pull multiple states into a conflict that began between fewer actors', [
    miss('They prevented every state from mobilizing', 'Alliances often encouraged mobilization commitments.', 'Think chain reaction.'),
    miss('They removed all military planning', 'Alliance commitments were tied to military planning.', 'Look at escalation.'),
    miss('They made nationalism impossible', 'Nationalism remained a major force.', 'Do not confuse causes.'),
  ]),
  q(445005, 'Interwar Politics', 'Fascism', 'Which feature was common in fascist movements?', 'Authoritarian nationalism and rejection of liberal democracy', [
    miss('Commitment to multiparty liberal democracy', 'Fascist regimes opposed liberal democracy.', 'Focus on political structure and ideology.'),
    miss('Abolition of nationalism', 'Fascism usually intensified nationalism.', 'Use the ideology’s core claims.'),
    miss('Strict refusal to use propaganda', 'Fascist movements often used propaganda heavily.', 'Think mass politics.'),
  ]),
  q(445006, 'World War II', 'Appeasement', 'In the 1930s, appeasement usually refers to:', 'Concessions to aggressive states in hopes of avoiding war', [
    miss('A policy of immediate total war against Germany in 1933', 'Appeasement was an attempt to avoid war through concessions.', 'Use the diplomatic meaning.'),
    miss('Decolonization in South Asia', 'That is a different postwar process.', 'Keep the 1930s European context.'),
    miss('Economic planning inside the Soviet Union', 'That is not appeasement.', 'Focus on diplomacy and aggression.'),
  ]),
  q(445007, 'Cold War', 'Containment', 'What was the basic goal of U.S. containment policy during the Cold War?', 'Limit the spread of communism', [
    miss('End all international alliances', 'Containment often used alliances such as NATO.', 'Think strategy against expansion.'),
    miss('Help the Soviet Union expand globally', 'Containment opposed Soviet and communist expansion.', 'Use the policy name.'),
    miss('Avoid all economic and military tools', 'Containment used multiple tools.', 'Look for the strategic objective.'),
  ]),
  q(445008, 'Decolonization', 'National liberation movements', 'What did many national liberation movements seek after World War II?', 'Political independence from colonial rule', [
    miss('Permanent expansion of European empires', 'Liberation movements challenged empire.', 'Use the meaning of decolonization.'),
    miss('The end of all national identity', 'Many movements used national identity to claim independence.', 'Think self-determination.'),
    miss('A return to direct imperial rule', 'That is the system they opposed.', 'Read liberation as anti-colonial.'),
  ]),
  q(445009, 'Global Institutions', 'United Nations', 'Why was the United Nations created after World War II?', 'To provide a forum for international cooperation and collective security', [
    miss('To abolish every national government', 'The UN is made of member states, not a world government abolishing them.', 'Think cooperation among states.'),
    miss('To prevent all diplomacy', 'The UN provides diplomatic forums.', 'Use the institution’s purpose.'),
    miss('To restart the League of Nations without changes or lessons', 'The UN was influenced by earlier failures but was a new institution.', 'Focus on postwar security aims.'),
  ]),
  q(445010, 'Globalization', 'Supply chains', 'What is one feature of late-20th-century economic globalization?', 'Production and trade networks increasingly cross national borders', [
    miss('All economies became completely isolated', 'Globalization means more cross-border connection, not isolation.', 'Use the root idea: global links.'),
    miss('International trade vanished', 'Trade expanded in many sectors.', 'Think supply chains and markets.'),
    miss('Communication technology became irrelevant', 'Communication technology helped coordinate global networks.', 'Look at transport and communication changes.'),
  ]),
])
