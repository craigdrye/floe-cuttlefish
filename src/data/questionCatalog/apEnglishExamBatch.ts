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
    'Coverage source: AP English-aligned OER, OpenTriviaQA literature rows, and public reading/writing review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OER/OpenTriviaQA AP English coverage',
})

export const apEnglishExamBatchQuestions = makeQuestionBank('AP', [
  q(451001, 'Argument', 'Thesis strength', 'Which thesis is strongest for an analytical essay?', 'It makes a specific, defensible claim about how the text creates meaning', [
    miss('It only announces the topic without a claim', 'A topic is not yet an argument.', 'A thesis must be arguable.'),
    miss('It summarizes the entire plot chronologically', 'Plot summary is not analysis.', 'Make a claim about meaning or technique.'),
    miss('It avoids mentioning the text at all', 'Literary analysis needs a textual focus.', 'Anchor the claim in the work.'),
  ]),
  q(451002, 'Commentary', 'Evidence explanation', 'After quoting textual evidence, what should commentary mainly do?', 'Explain how the evidence supports the claim', [
    miss('Repeat the quote in different words only', 'Paraphrase alone does not analyze.', 'Connect evidence to reasoning.'),
    miss('Start a completely unrelated topic', 'Commentary should keep the line of reasoning moving.', 'Stay tied to the claim.'),
    miss('Apologize for using evidence', 'Evidence is expected in analysis.', 'Use it purposefully.'),
  ]),
  q(451003, 'Rhetoric', 'Rhetorical situation', 'Which set best describes the rhetorical situation?', 'Speaker, audience, purpose, context, and message', [
    miss('Only rhyme, meter, and stanza length', 'Those are poetic/formal features, not the full rhetorical situation.', 'Think communication context.'),
    miss('Only the dictionary definitions of hard words', 'Vocabulary matters, but rhetorical situation is broader.', 'Include speaker and audience.'),
    miss('Only the final sentence of a passage', 'A rhetorical situation frames the whole act of communication.', 'Use the big-picture setup.'),
  ]),
  q(451004, 'Style', 'Diction effect', 'In literary analysis, diction refers to:', 'An author’s word choice', [
    miss('The order of events in the plot', 'That is plot structure, not diction.', 'Diction is about words.'),
    miss('The physical setting only', 'Setting is place and time.', 'Look at language choice.'),
    miss('The number of chapters in a novel', 'Chapter count is structure, not diction.', 'Focus on individual words and connotations.'),
  ]),
  q(451005, 'Style', 'Syntax effect', 'Syntax most directly concerns:', 'The arrangement of words and sentences', [
    miss('The historical birthplace of the author', 'That may be context, not syntax.', 'Syntax is sentence structure.'),
    miss('The literal identity of the narrator only', 'Narration and syntax can interact, but syntax is arrangement.', 'Look at sentence patterns.'),
    miss('The genre label on a book cover', 'Genre is not syntax.', 'Use grammar and sentence structure.'),
  ]),
  q(451006, 'Irony', 'Dramatic irony', 'Dramatic irony occurs when:', 'The audience knows something important that a character does not', [
    miss('A character says exactly what they mean and everyone understands equally', 'That is not ironic.', 'Dramatic irony depends on unequal knowledge.'),
    miss('A poem has fourteen lines', 'That describes a sonnet form possibility, not irony.', 'Focus on knowledge gap.'),
    miss('The setting changes from day to night', 'A setting shift is not automatically irony.', 'Look for audience-character contrast.'),
  ]),
  q(451007, 'Narration', 'Speaker vs author', 'Why should readers distinguish the speaker from the author?', 'The voice in the text may not directly represent the author’s own views', [
    miss('The speaker is always identical to the publisher', 'Publisher and speaker are different concepts.', 'Use textual voice.'),
    miss('Authors never create personas', 'Authors often create speakers or narrators.', 'Avoid assuming direct autobiography.'),
    miss('It means evidence is unnecessary', 'You still need textual evidence.', 'Distinction supports better interpretation.'),
  ]),
  q(451008, 'Structure', 'Shift in passage', 'A major shift in a passage often signals:', 'A change in focus, tone, argument, or perspective', [
    miss('That the earlier lines no longer exist', 'A shift changes development; it does not erase earlier material.', 'Track progression.'),
    miss('That analysis should stop immediately', 'Shifts are important to analyze.', 'Ask what changed and why.'),
    miss('That every word has the same connotation', 'A shift often changes meaning or tone.', 'Look for contrast.'),
  ]),
  q(451009, 'Argument', 'Counterargument', 'What is the purpose of addressing a counterargument?', 'To acknowledge an opposing view and strengthen the writer’s response', [
    miss('To abandon the thesis completely', 'A counterargument can refine or strengthen a thesis, not necessarily replace it.', 'Use rebuttal logic.'),
    miss('To avoid evidence', 'Counterarguments still require reasoning and evidence.', 'Engage the objection.'),
    miss('To make the essay only a summary', 'Argument remains central.', 'Use counterargument as part of reasoning.'),
  ]),
  q(451010, 'Line of Reasoning', 'Coherence', 'A clear line of reasoning in an essay means:', 'The claims and evidence build logically toward the thesis', [
    miss('Every paragraph makes an unrelated point', 'Unrelated paragraphs break coherence.', 'Look for logical progression.'),
    miss('The essay avoids a thesis', 'A line of reasoning usually supports a thesis.', 'Arguments need direction.'),
    miss('Only the conclusion contains evidence', 'Evidence should support claims throughout.', 'Track reasoning across the essay.'),
  ]),
])
