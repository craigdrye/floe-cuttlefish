import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

type ImportedAssessmentQuestion = {
  id: number
  chapter: string
  title: string
  prompt: string
  correct: string
  wrong: [string, string, string][]
  sourceId: string
  sourceName: string
  sourceUrl?: string
}

const q = ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  sourceId,
  sourceName,
  sourceUrl,
}: ImportedAssessmentQuestion) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: `Converted from ${sourceName} raw item ${sourceId}. ${sourceUrl ? `Source URL: ${sourceUrl}. ` : ''}The extracted row had a usable fixed-choice prompt, complete answer choices, and answer-key evidence; explanations were authored during Floe import.`,
  source: `${sourceName} (${sourceId})`,
})

const staar2018 = 'https://tea.texas.gov/student-assessment/testing/staar/staar-released-test-questions'
const staar2021 = staar2018
const staar2022 = staar2018

export const schoolAssessmentReadingWritingQuestions = makeQuestionBank('AP', [
  q({
    id: 464001,
    chapter: 'Writing and Revision',
    title: 'Precise spelling correction',
    prompt: 'What change should Noah make in sentence 24?',
    correct: 'Change correspondense to correspondence',
    wrong: [
      miss('Insert a colon after questioning', 'The tested issue is spelling, not punctuation after the word "questioning."', 'Look for the answer that fixes an actual usage or spelling error.'),
      miss('Change different to diffrent', 'That would introduce a misspelling instead of correcting one.', 'A revision answer should improve correctness.'),
      miss('Insert a comma after conversation', 'The row gives no sentence context requiring that comma.', 'Prefer the concrete correction supported by the answer key.'),
    ],
    sourceId: 'staar-2021::english-i::17',
    sourceName: 'STAAR 2021 English I',
    sourceUrl: staar2021,
  }),
  q({
    id: 464002,
    chapter: 'Writing and Revision',
    title: 'Active precise revision',
    prompt: 'What is the most effective way to revise sentence 15?',
    correct: 'For some of the slides, Cassilly welded together the chutes of old cement mixers.',
    wrong: [
      miss('For some of the slides, the chutes and old cement mixers were welded together by Cassilly.', 'This passive wording blurs what Cassilly actually did.', 'Choose the clearest active construction.'),
      miss('Together the chutes of old cement mixtures were welded by Cassilly.', 'This is awkward and changes "mixers" to "mixtures."', 'Watch for both clarity and accurate wording.'),
      miss('The chutes were welded together by Cassilly for some of the slides by using old cement mixers.', 'The phrasing is wordy and less direct.', 'The best revision should be concise and easy to follow.'),
    ],
    sourceId: 'staar-2021::writing::3',
    sourceName: 'STAAR 2021 Grade 7 Writing',
    sourceUrl: staar2021,
  }),
  q({
    id: 464003,
    chapter: 'Writing and Revision',
    title: 'Pronoun clarity',
    prompt: 'The meaning of sentence 20 is unclear. What change should Ben make to improve the clarity of this sentence?',
    correct: 'Change they to visitors',
    wrong: [
      miss('Change the museum to it', 'Replacing a noun with a pronoun would make the sentence less specific.', 'Clarity often improves when a vague pronoun becomes a noun.'),
      miss('Change opened to began', 'That changes verb choice but does not resolve the unclear reference.', 'Ask which word creates ambiguity.'),
      miss('Change delighted to thrilled', 'That is a synonym swap, not a clarity fix.', 'The question is about meaning, not intensity.'),
    ],
    sourceId: 'staar-2021::writing::4',
    sourceName: 'STAAR 2021 Grade 7 Writing',
    sourceUrl: staar2021,
  }),
  q({
    id: 464004,
    chapter: 'Writing and Revision',
    title: 'Controlling idea',
    prompt: 'Which sentence should follow sentence 2 and serve as a controlling idea for Alicia’s paper?',
    correct: 'Wings are necessary for the butterfly’s survival.',
    wrong: [
      miss('A butterfly’s wings are there for a reason.', 'This is too vague to control the rest of the paper.', 'A controlling idea should name the paper’s main point.'),
      miss('A butterfly’s wings are exceptionally gorgeous.', 'This focuses on appearance, not the broader survival idea.', 'Choose the sentence that can organize multiple supporting details.'),
      miss('Wings allow butterflies to fly in the sky.', 'This is a detail, but it is narrower than the survival claim.', 'The controlling idea should be broad enough for a whole paper.'),
    ],
    sourceId: 'staar-2021::writing::7',
    sourceName: 'STAAR 2021 Grade 7 Writing',
    sourceUrl: staar2021,
  }),
  q({
    id: 464005,
    chapter: 'Writing and Revision',
    title: 'Concise sentence combining',
    prompt: 'What is the most effective way to combine sentences 12 and 13?',
    correct: 'Huge flames shot out of the burner, heating the air inside the balloon.',
    wrong: [
      miss('Huge flames shot out of the burner inside the balloon, which was heating the air.', 'This makes it sound as if the burner is inside the balloon.', 'Keep modifiers next to what they describe.'),
      miss('Huge flames shot out of the burner because the air inside the balloon was heated.', 'This reverses the cause-and-effect relationship.', 'The burner heats the air, not the other way around.'),
      miss('Huge flames shot out of the burner, the flames heated the air inside the balloon.', 'This creates a comma splice.', 'Combine related actions without joining two independent clauses by comma alone.'),
    ],
    sourceId: 'staar-2018::writing::2',
    sourceName: 'STAAR 2018 Grade 7 Writing',
    sourceUrl: staar2018,
  }),
  q({
    id: 464006,
    chapter: 'Writing and Revision',
    title: 'Clear transition',
    prompt: 'The transition from the third paragraph to the fourth paragraph is weak. Which sentence could best replace sentence 16 and improve the transition between these two paragraphs?',
    correct: 'Finally, it was time for the riders to climb inside the basket attached to the balloon.',
    wrong: [
      miss('Even though it was time, the strong ropes kept the balloon from taking off.', 'This introduces a contrast that does not clearly bridge the paragraphs.', 'A transition should move the event forward smoothly.'),
      miss('When it was finally time, Jayden and his father smiled.', 'This is less specific about the next action.', 'The best transition names the next stage of the experience.'),
      miss('The time had come, but Jayden began to feel a slight twinge of fear that he hadn’t expected.', 'This shifts to a new emotional detail instead of connecting paragraph ideas.', 'Use the option that clarifies sequence and topic.'),
    ],
    sourceId: 'staar-2018::writing::3',
    sourceName: 'STAAR 2018 Grade 7 Writing',
    sourceUrl: staar2018,
  }),
  q({
    id: 464007,
    chapter: 'Writing and Revision',
    title: 'Avoid repetition',
    prompt: 'How should sentence 34 be changed?',
    correct: 'Change more quieter to quieter',
    wrong: [
      miss('Change led to lead', 'The answer key does not support changing the verb tense.', 'Look for the clear comparative error.'),
      miss('Insert a comma after kennel', 'The issue is not punctuation in this item.', 'Check whether the phrase already marks comparison correctly.'),
      miss('Sentence 34 should not be changed.', 'The phrase "more quieter" is redundant.', 'Use either "more quiet" or "quieter," not both.'),
    ],
    sourceId: 'staar-2018::writing::28',
    sourceName: 'STAAR 2018 Grade 7 Writing',
    sourceUrl: staar2018,
  }),
  q({
    id: 464008,
    chapter: 'Reading and Evidence',
    title: 'Evidence for value',
    prompt: 'Which quotation from an article about forest bathing shows that forest bathing could have valuable effects?',
    correct: '“There’s a growing body of evidence that the practice can help boost immunity and mood and help reduce stress.”',
    wrong: [
      miss('“It took me a few minutes to clear out the clutter in my brain, and tune in to the natural world.”', 'This is a personal moment, not evidence of broader valuable effects.', 'Look for the quotation that states documented benefits.'),
      miss('“The Association of Nature & Forest Therapy plans to train and certify about 250 new guides next year.”', 'This shows expansion of training, not health value.', 'Separate popularity from evidence of effect.'),
      miss('“Most doctors these days agree that people younger than 60 should aim to keep their blood pressure under 140.”', 'This gives a medical benchmark but not forest bathing’s benefits.', 'Choose the quote that directly links the practice to outcomes.'),
    ],
    sourceId: 'staar-2022::english-i::38',
    sourceName: 'STAAR 2022 English I',
    sourceUrl: staar2022,
  }),
])

export const schoolAssessmentUsHistoryQuestions = makeQuestionBank('AP', [
  q({
    id: 464101,
    chapter: 'Colonial America',
    title: 'Distance and self-government',
    prompt: 'What was one way slow communication with the British government affected the American colonies?',
    correct: 'Self-government developed in the colonies.',
    wrong: [
      miss('The colonies united for trade and defense.', 'Intercolonial unity developed later and for different pressures.', 'Focus on what distance from Britain made practical.'),
      miss('Smuggling of goods in the colonies decreased.', 'Slow communication did not directly reduce smuggling.', 'Think about local decision-making.'),
      miss('The colonies petitioned the government to establish a navy.', 'That is not the main colonial effect of slow imperial communication.', 'Distance made local assemblies more important.'),
    ],
    sourceId: 'staar-2021::social-studies::3',
    sourceName: 'STAAR 2021 Grade 8 Social Studies',
    sourceUrl: staar2021,
  }),
  q({
    id: 464102,
    chapter: 'American Revolution',
    title: 'Intolerable Acts response',
    prompt: 'How did the American colonies react to enforcement of the Intolerable Acts?',
    correct: 'By holding the First Continental Congress to discuss unified resistance',
    wrong: [
      miss('By collecting funds to pay for the tea destroyed in Boston Harbor', 'The colonial response was organized resistance, not repayment.', 'Connect the acts to intercolonial political action.'),
      miss('By sending ambassadors to France to request military aid', 'Formal French alliance came later during the war.', 'Place the event before independence.'),
      miss('By placing a tax on all goods imported from Great Britain', 'Colonists used boycotts and congresses, not an import tax of their own.', 'Think political coordination rather than taxation.'),
    ],
    sourceId: 'staar-2022::grade-8-social-studies::4',
    sourceName: 'STAAR 2022 Grade 8 Social Studies',
    sourceUrl: staar2022,
  }),
  q({
    id: 464103,
    chapter: 'Colonial Regions',
    title: 'Tobacco settlement',
    prompt: 'An immigrant sails to North America in the early 1700s hoping to start a tobacco farm. Where is the immigrant most likely to settle?',
    correct: 'Virginia',
    wrong: [
      miss('Massachusetts', 'Massachusetts had a colder climate and a different colonial economy.', 'Tobacco was especially associated with the Chesapeake.'),
      miss('Rhode Island', 'Rhode Island was not the main tobacco-growing destination.', 'Match crop to region.'),
      miss('Pennsylvania', 'Pennsylvania had fertile farms, but tobacco plantations were centered farther south.', 'Think Virginia and the Chesapeake colonies.'),
    ],
    sourceId: 'staar-2022::grade-8-social-studies::6',
    sourceName: 'STAAR 2022 Grade 8 Social Studies',
    sourceUrl: staar2022,
  }),
  q({
    id: 464104,
    chapter: 'Industrialization',
    title: 'Factory system effect',
    prompt: 'The development of the factory system in the early 1800s caused what change?',
    correct: 'An increase in production levels',
    wrong: [
      miss('A decrease in free trade between nations', 'Factories changed production methods more directly than trade policy.', 'Ask what mechanized production did immediately.'),
      miss('An increase in government regulation of businesses', 'Regulation was not the primary early effect tested here.', 'The factory system mainly increased output.'),
      miss('A decrease in immigration', 'Industrial growth tended to attract workers rather than reduce immigration.', 'Focus on manufacturing capacity.'),
    ],
    sourceId: 'staar-2018::social-studies::3',
    sourceName: 'STAAR 2018 Grade 8 Social Studies',
    sourceUrl: staar2018,
  }),
  q({
    id: 464105,
    chapter: 'Early Republic',
    title: 'Democratic Party formation',
    prompt: 'Which event is most associated with the formation of the Democratic Party?',
    correct: 'The election of Andrew Jackson as president',
    wrong: [
      miss('The use of protective tariffs', 'Tariffs were major issues, but they do not best identify the party’s formation.', 'Connect the party to Jacksonian democracy.'),
      miss('The impeachment of President Andrew Johnson', 'That occurred decades later during Reconstruction.', 'Keep the timeline in the early republic.'),
      miss('The abolition movement', 'Abolition influenced later party conflicts, not the Democratic Party’s formation.', 'Look for the Jackson-era marker.'),
    ],
    sourceId: 'staar-2018::social-studies::7',
    sourceName: 'STAAR 2018 Grade 8 Social Studies',
    sourceUrl: staar2018,
  }),
])

export const schoolAssessmentLogicArgumentationQuestions = makeQuestionBank('Extension', [
  q({
    id: 464201,
    chapter: 'Argument Structure',
    title: 'Controlling claim',
    prompt: 'Which sentence best functions as a controlling idea for a paper about butterfly wings?',
    correct: 'Wings are necessary for the butterfly’s survival.',
    wrong: [
      miss('A butterfly’s wings are there for a reason.', 'This claim is too vague to guide an argument.', 'A controlling idea should be specific and defensible.'),
      miss('A butterfly’s wings are exceptionally gorgeous.', 'This is an opinion about appearance, not a broad organizing claim.', 'Choose the answer that can support multiple reasons.'),
      miss('Wings allow butterflies to fly in the sky.', 'This is true but too narrow for the whole argument.', 'A central claim usually has room for several supporting points.'),
    ],
    sourceId: 'staar-2021::writing::7::argument-transfer',
    sourceName: 'STAAR 2021 Grade 7 Writing',
    sourceUrl: staar2021,
  }),
  q({
    id: 464202,
    chapter: 'Evidence Evaluation',
    title: 'Evidence versus popularity',
    prompt: 'Which quotation best supports the claim that a practice could have valuable effects?',
    correct: '“There’s a growing body of evidence that the practice can help boost immunity and mood and help reduce stress.”',
    wrong: [
      miss('A quotation about taking a few minutes to tune in to nature', 'That is anecdotal experience, not direct evidence for a broader claim.', 'Look for explicit evidence and outcomes.'),
      miss('A quotation about training 250 new guides next year', 'Growth in training does not prove the practice has valuable effects.', 'Popularity is different from evidence.'),
      miss('A quotation about doctors recommending blood-pressure targets', 'That medical fact does not by itself support the practice.', 'The best evidence must connect to the claim.'),
    ],
    sourceId: 'staar-2022::english-i::38::argument-transfer',
    sourceName: 'STAAR 2022 English I',
    sourceUrl: staar2022,
  }),
])
