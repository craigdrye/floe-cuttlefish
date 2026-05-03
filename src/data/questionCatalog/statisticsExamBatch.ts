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
    'Coverage source: OpenIntro, IMS, NYSED/STAAR data-analysis items, and OER statistics collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from OpenIntro/IMS/OER statistics coverage',
})

export const statisticsExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(440001, 'Sampling', 'Voluntary response', 'A website poll asks visitors to click if they want to answer. What is the main sampling concern?', 'Voluntary response bias', [
    miss('Random assignment', 'No treatments are being assigned here.', 'Focus on how people enter the sample.'),
    miss('Blinding', 'Blinding is about hiding treatment information, not self-selection.', 'The issue is who chooses to respond.'),
    miss('Blocking', 'Blocking groups subjects before random assignment.', 'This is a sampling method problem.'),
  ]),
  q(440002, 'Experiments', 'Random assignment purpose', 'Why is random assignment used in an experiment?', 'To make treatment groups comparable before treatment', [
    miss('To guarantee the sample represents the whole population', 'That is the role of random sampling, not random assignment.', 'Separate sampling from assignment.'),
    miss('To make the response variable normally distributed', 'Random assignment does not guarantee distribution shape.', 'It is mainly about fair group comparison.'),
    miss('To eliminate the need for a control group', 'Random assignment does not replace controls.', 'Controls and randomization solve different problems.'),
  ]),
  q(440003, 'Distributions', 'Standard score', 'A value is 2 standard deviations above the mean. What is its z-score?', '2', [
    miss('-2', 'That would be below the mean.', 'Above the mean gives a positive z-score.'),
    miss('0.5', 'That reverses the distance relationship.', 'The z-score is the number of standard deviations.'),
    miss('1', 'That would be one standard deviation above the mean.', 'Use the stated distance directly.'),
  ]),
  q(440004, 'Normal Models', 'Empirical rule', 'In an approximately normal distribution, about what percent of values lie within 2 standard deviations of the mean?', '95%', [
    miss('68%', 'That is within 1 standard deviation.', 'Use the 68-95-99.7 rule.'),
    miss('99.7%', 'That is within 3 standard deviations.', 'Two standard deviations is the middle rule.'),
    miss('50%', 'That is not the empirical-rule interval.', 'Recall the standard normal percentages.'),
  ]),
  q(440005, 'Confidence Intervals', 'Confidence meaning', 'A 95% confidence interval is made by a reliable method. What does 95% refer to?', 'The long-run success rate of the interval method', [
    miss('The probability this fixed interval contains the parameter after it is computed', 'In frequentist language, the computed interval is fixed.', 'Confidence describes the method over repeated samples.'),
    miss('The percent of sample data inside the interval', 'A confidence interval estimates a parameter, not data coverage.', 'Do not confuse it with a prediction interval.'),
    miss('The chance the sample mean is exactly correct', 'Sample means are estimates, not exact guarantees.', 'Think repeated sampling.'),
  ]),
  q(440006, 'Hypothesis Tests', 'Type I error', 'In a hypothesis test, what is a Type I error?', 'Rejecting a true null hypothesis', [
    miss('Failing to reject a false null hypothesis', 'That is a Type II error.', 'Type I is a false positive against the null.'),
    miss('Choosing the wrong sample size', 'Sample-size planning can affect errors, but this is not the definition.', 'Use the decision versus truth table.'),
    miss('Using a biased graph', 'That is not the formal testing error.', 'Focus on the null hypothesis decision.'),
  ]),
  q(440007, 'Conditional Probability', 'Conditional probability', 'If 30 students take art, and 12 of those art students take music, what is P(music | art)?', '12/30', [
    miss('12 divided by all students in the school', 'The condition restricts the denominator to art students.', 'Use the group after the vertical bar.'),
    miss('30/12', 'That reverses part and whole.', 'Conditional probability is overlap over condition total.'),
    miss('18/30', 'That is the art students not taking music.', 'The numerator should be art-and-music.'),
  ]),
  q(440008, 'Regression', 'Correlation sign', 'If correlation r = -0.82, what does that say about the linear relationship?', 'Strong negative linear association', [
    miss('Strong positive linear association', 'The sign is negative, not positive.', 'Use sign for direction.'),
    miss('Weak negative linear association', 'A magnitude near 1 is strong.', 'Use absolute value for strength.'),
    miss('No linear association', 'A correlation near -1 is far from zero.', 'r close to 0 would mean weak linear association.'),
  ]),
  q(440009, 'Inference', 'Statistical significance', 'A test result is statistically significant at alpha = 0.05. Which statement is best?', 'The p-value is less than 0.05', [
    miss('The null hypothesis has probability 0.05', 'A p-value is not the probability the null is true.', 'Compare p-value to alpha.'),
    miss('The sample result is guaranteed important in practice', 'Statistical significance is not the same as practical importance.', 'Effect size matters too.'),
    miss('The confidence level must be 5%', 'Alpha 0.05 corresponds to a 95% confidence level in related settings.', 'Do not confuse alpha with confidence level.'),
  ]),
  q(440010, 'Counting', 'Permutation or combination', 'A race awards gold, silver, and bronze among 8 runners. Which counting method fits?', 'Permutation, because order matters', [
    miss('Combination, because order does not matter', 'Gold-silver-bronze positions are different outcomes.', 'Ranked awards make order matter.'),
    miss('Mean, because there are three awards', 'Mean is a summary statistic, not a counting method.', 'This is an arrangement question.'),
    miss('Complement rule, because some runners do not win', 'The complement rule is for probabilities, not counting ranked outcomes.', 'Choose based on order.'),
  ]),
])
