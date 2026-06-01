import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
  extra: {
    lesson?: string
    solution?: string
    mentorHint?: string
    alternatePrompts?: Question['alternatePrompts']
    challengeRating?: Question['challengeRating']
  } = {},
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson: extra.lesson ??
    'Coverage source: OpenIntro, IMS, NYSED/STAAR data-analysis items, and OER statistics collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  solution: extra.solution,
  mentorHint: extra.mentorHint,
  alternatePrompts: extra.alternatePrompts,
  challengeRating: extra.challengeRating,
  source: 'Generated from OpenIntro/IMS/OER statistics coverage',
})

export const statisticsExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(440001, 'Chapter 5: Study Design and Data Ethics', 'Voluntary response', 'A website poll asks visitors to click if they want to answer. What is the main sampling concern?', 'Voluntary response bias', [
    miss('Random assignment', 'No treatments are being assigned here.', 'Focus on how people enter the sample.'),
    miss('Blinding', 'Blinding is about hiding treatment information, not self-selection.', 'The issue is who chooses to respond.'),
    miss('Blocking', 'Blocking groups subjects before random assignment.', 'This is a sampling method problem.'),
  ], {
    solution: 'The concern is voluntary response bias. Because visitors choose whether to click and answer, the sample can overrepresent people with strong opinions or unusual experiences.',
    lesson: 'Voluntary response bias happens when people opt themselves into a sample. The loudest or most motivated people are more likely to respond, so the sample can drift away from the broader population.\n\nA website poll is a classic case: it may collect lots of answers, but the answers come from visitors who chose to participate. Random sampling is the usual fix because it gives quieter members of the population a chance to be included too.',
    mentorHint: 'Ask who controls entry into the sample: the researcher or the people deciding to click.',
    alternatePrompts: {
      plain: 'A website poll lets visitors choose whether to click and answer. What sampling bias should you worry about?',
      teaching: 'If only people who feel like clicking join the survey, why might the result fail to represent the whole population?',
    },
    challengeRating: 4,
  }),
  q(440002, 'Chapter 5: Study Design and Data Ethics', 'Random assignment purpose', 'Why is random assignment used in an experiment?', 'To make treatment groups comparable before treatment', [
    miss('To guarantee the sample represents the whole population', 'That is the role of random sampling, not random assignment.', 'Separate sampling from assignment.'),
    miss('To make the response variable normally distributed', 'Random assignment does not guarantee distribution shape.', 'It is mainly about fair group comparison.'),
    miss('To eliminate the need for a control group', 'Random assignment does not replace controls.', 'Controls and randomization solve different problems.'),
  ], {
    solution: 'Random assignment is used to make treatment groups comparable before treatment. It spreads lurking differences across groups so later outcome differences are more plausibly caused by the treatment.',
    lesson: 'Random sampling and random assignment solve different problems. Random sampling helps a sample represent a population. Random assignment helps treatment groups start out similar inside an experiment.\n\nThat second job is what supports causal reasoning. If groups are formed randomly, hidden differences like motivation, prior skill, or health are less likely to pile up on one side before the treatment begins.',
    mentorHint: 'This is about fair comparison between treatment groups, not about representing the whole population.',
    alternatePrompts: {
      plain: 'In an experiment, why randomly assign subjects to treatment groups?',
      teaching: 'What does random assignment protect against before the treatment has even started?',
    },
    challengeRating: 4,
  }),
  q(440003, 'Chapter 3: Normal Models and Standardization', 'Standard score', 'A z-score tells how many standard deviations a value is from the mean, with positive values above the mean. If a value is 2 standard deviations above the mean, what is its z-score?', '2', [
    miss('-2', 'That would be below the mean.', 'Above the mean gives a positive z-score.'),
    miss('0.5', 'That reverses the distance relationship.', 'The z-score is the number of standard deviations.'),
    miss('1', 'That would be one standard deviation above the mean.', 'Use the stated distance directly.'),
  ], {
    lesson: 'A standard score, or z-score, puts a value on a standard-deviation scale. The sign gives direction: positive means above the mean, negative means below the mean. The size gives distance, so 2 standard deviations above the mean is a z-score of +2.',
    solution: 'The value is above the mean, so the sign is positive. It is 2 standard deviations away, so the z-score is 2.',
    mentorHint: 'Use direction for the sign and standard-deviation distance for the number.',
    alternatePrompts: {
      plain: 'What z-score corresponds to a value 2 standard deviations above the mean?',
      teaching: 'If z-scores count standard deviations from the mean, why does "2 above" become +2?',
    },
    challengeRating: 4,
  }),
  q(440004, 'Chapter 3: Normal Models and Standardization', 'Empirical rule', 'In an approximately normal bell-shaped distribution, the empirical rule gives quick landmark percentages around the mean. About what percent of values lie within 2 standard deviations of the mean?', '95%', [
    miss('68%', 'That is within 1 standard deviation.', 'Use the 68-95-99.7 rule.'),
    miss('99.7%', 'That is within 3 standard deviations.', 'Two standard deviations is the middle rule.'),
    miss('50%', 'That is not the empirical-rule interval.', 'Recall the standard normal percentages.'),
  ], {
    lesson: 'The empirical rule is the 68-95-99.7 shortcut for approximately normal distributions. About 68% of values fall within 1 standard deviation of the mean, about 95% fall within 2 standard deviations, and about 99.7% fall within 3. It is a shape-based rule for bell curves, not a rule for every data set.',
    solution: 'Use the empirical rule: 1 standard deviation is about 68%, 2 standard deviations is about 95%, and 3 standard deviations is about 99.7%. The answer is 95%.',
    mentorHint: 'Recite the normal-model landmarks in order: 68, 95, 99.7.',
    alternatePrompts: {
      plain: 'For a roughly normal distribution, what percent of values are within two standard deviations of the mean?',
      teaching: 'The empirical rule has three landmarks: within 1 SD, within 2 SDs, and within 3 SDs. Which landmark belongs to two standard deviations?',
    },
    challengeRating: 4,
  }),
  q(440005, 'Chapter 7: Sampling Variability and Introductory Inference', 'Confidence meaning', 'A 95% confidence interval is made by a reliable method, but the particular interval you see is already fixed. What does the 95% confidence level actually refer to?', 'The long-run success rate of the interval method', [
    miss('The probability this fixed interval contains the parameter after it is computed', 'In frequentist language, the computed interval is fixed.', 'Confidence describes the method over repeated samples.'),
    miss('The percent of sample data inside the interval', 'A confidence interval estimates a parameter, not data coverage.', 'Do not confuse it with a prediction interval.'),
    miss('The chance the sample mean is exactly correct', 'Sample means are estimates, not exact guarantees.', 'Think repeated sampling.'),
  ], {
    lesson: 'A confidence level describes the procedure, not a magic probability attached to one finished interval. If you repeated the same sampling method many times and built a new interval each time, about 95% of those intervals would capture the true parameter. Once a single interval is computed, it either contains the parameter or it does not.',
    solution: 'The 95% refers to the long-run success rate of the interval-building method. Over many repeated samples, about 95% of intervals made this way would include the true parameter.',
    mentorHint: 'Imagine running the same sampling process again and again; confidence is about the batting average of that interval method.',
    alternatePrompts: {
      plain: 'When statisticians say an interval method has 95% confidence, what would happen if we repeated the whole sampling-and-interval process many times?',
      teaching: 'Picture a little interval factory that makes one interval per random sample. What does it mean for that factory to be a 95% confidence method?',
    },
    challengeRating: 4,
  }),
  q(440006, 'Chapter 7: Sampling Variability and Introductory Inference', 'Type I error', 'A hypothesis test starts with a null hypothesis, then decides whether the evidence is strong enough to reject it. What mistake is called a Type I error?', 'Rejecting a true null hypothesis', [
    miss('Failing to reject a false null hypothesis', 'That is a Type II error.', 'Type I is a false positive against the null.'),
    miss('Choosing the wrong sample size', 'Sample-size planning can affect errors, but this is not the definition.', 'Use the decision versus truth table.'),
    miss('Using a biased graph', 'That is not the formal testing error.', 'Focus on the null hypothesis decision.'),
  ], {
    lesson: 'A Type I error is a false positive in hypothesis testing. It happens when the null hypothesis is actually true, but the test rejects it anyway. A Type II error is the opposite kind of miss: failing to reject a null hypothesis that is false.',
    solution: 'Type I error means rejecting the null hypothesis when the null is true. In plain language, it is a false alarm.',
    mentorHint: 'Type I is the false-positive error: the test says "effect" when the null was true.',
    alternatePrompts: {
      plain: 'In hypothesis testing, what does Type I error mean?',
      teaching: 'Imagine a smoke alarm going off when there is no fire. Which hypothesis-testing error is that like?',
    },
    challengeRating: 4,
  }),
  q(440007, 'Chapter 6: Probability and Random Variables', 'Conditional probability', 'If 30 students take art, and 12 of those art students take music, what is P(music | art)?', '12/30', [
    miss('12 divided by all students in the school', 'The condition restricts the denominator to art students.', 'Use the group after the vertical bar.'),
    miss('30/12', 'That reverses part and whole.', 'Conditional probability is overlap over condition total.'),
    miss('18/30', 'That is the art students not taking music.', 'The numerator should be art-and-music.'),
  ], {
    solution: 'P(music | art) means "among art students, what fraction take music?" The condition "art" sets the denominator at 30, and 12 of those students take music, so the probability is 12/30.',
    lesson: 'Conditional probability shrinks the world to the group after the vertical bar. In P(music | art), you only look at students who take art first.\n\nOnce the art-student group is your whole mini-world, 12 of the 30 also take music. That makes the conditional probability 12/30, which simplifies to 2/5 if you want the reduced fraction.',
    mentorHint: 'Read the vertical bar as "given." Given art, the denominator is the art group.',
    alternatePrompts: {
      plain: 'Among 30 art students, 12 also take music. What is P(music given art)?',
      teaching: 'If the word "given" zooms in on art students only, what fraction of that zoomed-in group takes music?',
    },
    challengeRating: 4,
  }),
  q(440008, 'Chapter 4: Two-Variable Data and Regression', 'Correlation sign', 'A correlation of r = -0.82 is close to -1, not close to 0. What does that sign and size say about the linear relationship between the variables?', 'Strong negative linear association', [
    miss('Strong positive linear association', 'The sign is negative, not positive.', 'Use sign for direction.'),
    miss('Weak negative linear association', 'A magnitude near 1 is strong.', 'Use absolute value for strength.'),
    miss('No linear association', 'A correlation near -1 is far from zero.', 'r close to 0 would mean weak linear association.'),
  ], {
    lesson: 'Correlation has two jobs. The sign tells direction: negative means the variables tend to move in opposite directions. The absolute value tells strength: values near 1 are strong, while values near 0 are weak. So r = -0.82 is a strong negative linear association.',
    solution: 'The negative sign gives the direction, and 0.82 is close to 1 in magnitude, so the relationship is strong and negative.',
    mentorHint: 'Sign gives direction; distance from 0 gives strength.',
    alternatePrompts: {
      plain: 'What does r = -0.82 tell you about a linear relationship?',
      teaching: 'For correlation, why does the minus sign matter separately from the size 0.82?',
    },
    challengeRating: 4,
  }),
  q(440009, 'Chapter 7: Sampling Variability and Introductory Inference', 'Statistical significance', 'A test is declared statistically significant at alpha = 0.05, which means the p-value crossed the chosen cutoff. Which statement best describes that result?', 'The p-value is less than 0.05', [
    miss('The null hypothesis has probability 0.05', 'A p-value is not the probability the null is true.', 'Compare p-value to alpha.'),
    miss('The sample result is guaranteed important in practice', 'Statistical significance is not the same as practical importance.', 'Effect size matters too.'),
    miss('The confidence level must be 5%', 'Alpha 0.05 corresponds to a 95% confidence level in related settings.', 'Do not confuse alpha with confidence level.'),
  ], {
    lesson: 'Statistical significance is a threshold comparison. If alpha is 0.05, a result is significant when the p-value is below 0.05. That does not mean the null has a 5% probability, and it does not say the effect is large enough to matter in practice.',
    solution: 'At alpha = 0.05, statistical significance means p < 0.05.',
    mentorHint: 'Compare p-value to alpha; do not translate p-value into the probability that the null is true.',
    alternatePrompts: {
      plain: 'If a result is significant at alpha 0.05, how does its p-value compare with 0.05?',
      teaching: 'Why does "statistically significant at 0.05" mean crossing a cutoff rather than proving practical importance?',
    },
    challengeRating: 4,
  }),
  q(440010, 'Chapter 6: Probability and Random Variables', 'Permutation or combination', 'A race awards gold, silver, and bronze among 8 runners, and first-second-third is different from third-second-first. Which counting method fits this situation?', 'Permutation, because order matters', [
    miss('Combination, because order does not matter', 'Gold-silver-bronze positions are different outcomes.', 'Ranked awards make order matter.'),
    miss('Mean, because there are three awards', 'Mean is a summary statistic, not a counting method.', 'This is an arrangement question.'),
    miss('Complement rule, because some runners do not win', 'The complement rule is for probabilities, not counting ranked outcomes.', 'Choose based on order.'),
  ], {
    lesson: 'Permutations count arrangements where order matters. A race podium is ordered because gold, silver, and bronze are different positions. Combinations ignore order, so they would be wrong if the same three runners in a different ranking should count as a different outcome.',
    solution: 'Use a permutation because the award order matters. Gold-silver-bronze is a ranked arrangement, not just a group of three runners.',
    mentorHint: 'Ask whether swapping two selected people changes the outcome. If yes, use permutations.',
    alternatePrompts: {
      plain: 'For gold, silver, and bronze awards among 8 runners, should you use permutations or combinations?',
      teaching: 'Why does a podium finish care about order while an unordered committee does not?',
    },
    challengeRating: 4,
  }),
])
