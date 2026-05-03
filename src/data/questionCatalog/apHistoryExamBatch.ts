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
    'Coverage source: OpenTriviaQA history, AP History-aligned OER, and public history skills review collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenTriviaQA/OER AP History coverage',
})

export const apHistoryExamBatchQuestions = makeQuestionBank('AP', [
  q(454001, 'Sourcing', 'Author purpose', 'When sourcing a historical document, why should you consider the author’s purpose?', 'Purpose can shape what the author emphasizes, omits, or argues', [
    miss('Purpose proves the document is always false', 'Purpose affects interpretation, but does not automatically make a source useless.', 'Use purpose as context.'),
    miss('Purpose replaces the need for evidence', 'You still need evidence and analysis.', 'Sourcing supports, not replaces, argument.'),
    miss('Purpose only tells you the page number', 'Purpose is about why the source was created.', 'Ask what the author was trying to do.'),
  ]),
  q(454002, 'Sourcing', 'Audience', 'Why does intended audience matter for interpreting a source?', 'Authors often adjust tone and content for the people they expect to reach', [
    miss('Audience means the source has no historical value', 'Audience helps interpretation; it does not erase value.', 'Think communication strategy.'),
    miss('Audience is always identical to the historian reading today', 'Original audience can differ from modern readers.', 'Separate then and now.'),
    miss('Audience only means the source is handwritten', 'Audience is about recipients, not format.', 'Ask who was meant to hear or read it.'),
  ]),
  q(454003, 'Point of View', 'POV analysis', 'A strong point-of-view analysis explains:', 'How the author’s position or perspective may influence the source', [
    miss('Only the document’s font size', 'Font size is rarely the historical perspective.', 'Focus on social, political, or personal position.'),
    miss('That every author is perfectly neutral', 'Historical sources often reflect perspectives.', 'Look for standpoint and context.'),
    miss('The exact number of paragraphs', 'Paragraph count is structure, not point of view.', 'Analyze perspective.'),
  ]),
  q(454004, 'Continuity and Change', 'CCOT', 'A continuity-and-change answer should do what?', 'Identify what changed and what stayed similar over time', [
    miss('Discuss only one isolated event with no time span', 'CCOT requires comparison across time.', 'Track before and after.'),
    miss('Avoid mentioning continuity', 'Continuity is half of the task.', 'Look for persistence as well as change.'),
    miss('List facts in random order', 'The reasoning must organize developments over time.', 'Use chronological logic.'),
  ]),
  q(454005, 'Comparison', 'Historical comparison', 'A strong comparison should:', 'Explain meaningful similarities and differences using evidence', [
    miss('Say two societies are identical in every way', 'Comparison should handle both similarity and difference accurately.', 'Avoid overstatement.'),
    miss('Describe only one case and ignore the other', 'Comparison requires at least two cases.', 'Keep both sides in view.'),
    miss('Use no evidence because comparison is opinion', 'Historical comparison needs evidence.', 'Support the claims.'),
  ]),
  q(454006, 'Periodization', 'Turning point', 'Calling an event a turning point means it:', 'Marks a significant shift in historical development', [
    miss('Had no effects after it happened', 'A turning point matters because it changes later developments.', 'Look for before/after significance.'),
    miss('Was unimportant to chronology', 'Turning points are chronologically meaningful.', 'Use change over time.'),
    miss('Can only be a military battle', 'Turning points can be political, social, economic, cultural, or military.', 'Do not narrow the category too far.'),
  ]),
  q(454007, 'Corroboration', 'Using multiple sources', 'Corroboration means:', 'Checking one source against other evidence', [
    miss('Using only one source because it is convenient', 'Corroboration requires comparison with other evidence.', 'Think cross-checking.'),
    miss('Ignoring contradictions between sources', 'Contradictions are exactly what historians examine.', 'Compare claims carefully.'),
    miss('Changing a primary source into a map', 'That is not corroboration.', 'Use evidence against evidence.'),
  ]),
  q(454008, 'Argument', 'Counterargument in history', 'Why include a counterargument in a history essay?', 'To address a plausible alternative interpretation and strengthen the claim', [
    miss('To prove the thesis is unsupported', 'A counterargument can be answered or qualified.', 'Use it to sharpen reasoning.'),
    miss('To avoid evidence entirely', 'Counterarguments require evidence too.', 'Engage the alternative with support.'),
    miss('To turn the essay into a timeline only', 'Argument remains central.', 'Keep claim and reasoning connected.'),
  ]),
  q(454009, 'Evidence', 'Best evidence selection', 'Which evidence is strongest for a claim about economic change?', 'A source showing shifts in production, trade, labor, or prices', [
    miss('A detail about weather with no economic connection', 'Evidence must match the claim.', 'Select evidence by relevance.'),
    miss('A random quote unrelated to the period', 'Historical evidence must fit the topic and time.', 'Check relevance and context.'),
    miss('A modern opinion with no historical support', 'Opinion alone is weak evidence.', 'Use historical data or source material.'),
  ]),
  q(454010, 'Contextualization', 'Broader context', 'Effective contextualization connects an argument to:', 'Broader historical developments relevant to the topic', [
    miss('A random personal story with no historical link', 'Context should be historically relevant.', 'Widen the frame meaningfully.'),
    miss('Only the last sentence of the essay', 'Context can appear early and support the whole argument.', 'Think framing.'),
    miss('A list of unrelated dates', 'Context is not a date dump.', 'Explain broader developments.'),
  ]),
])
