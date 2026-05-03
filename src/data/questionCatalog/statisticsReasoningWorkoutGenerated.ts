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
    'Coverage source: OpenIntro Statistics and Introduction to Modern Statistics raw collections. This is an authored Floe-native drill item, not a direct raw import.',
  source: 'Generated from OpenIntro/IMS coverage',
})

export const statisticsReasoningWorkoutGeneratedQuestions = makeQuestionBank('Statistics', [
  q(394001, 'Data and Variables', 'Variable type', 'A student records each person\'s blood type as A, B, AB, or O. What type of variable is blood type?', 'Categorical nominal', [
    miss('Numerical continuous', 'Blood type is a label, not a measured quantity.', 'Ask whether arithmetic on the values would make sense.'),
    miss('Categorical ordinal', 'The categories have no natural ranking.', 'Ordinal categories have order.'),
    miss('Numerical discrete', 'The values are not counts.', 'Discrete numerical variables are numbers like 0, 1, 2.'),
  ]),
  q(394002, 'Data and Variables', 'Ordinal variable', 'Survey responses are recorded as strongly disagree, disagree, neutral, agree, strongly agree. What type of variable is this?', 'Categorical ordinal', [
    miss('Categorical nominal', 'There is a meaningful order from disagreement to agreement.', 'Look for ranking among labels.'),
    miss('Numerical continuous', 'The responses are ordered labels, not measurements.', 'Do not treat labels as continuous numbers.'),
    miss('Numerical discrete', 'The raw responses are categories, even if coded 1-5 later.', 'Coding does not change the variable concept.'),
  ]),
  q(394003, 'Data and Variables', 'Unit of observation', 'A dataset has one row per hospital and columns for beds, region, and annual admissions. What is the observational unit?', 'Hospital', [
    miss('Bed', 'Beds are a variable value for each row, not the row entity.', 'Ask what one row represents.'),
    miss('Region', 'Region describes each hospital.', 'A variable is not usually the observational unit.'),
    miss('Annual admissions', 'Admissions is measured for each hospital.', 'Find the entity being measured.'),
  ]),
  q(394004, 'Study Design', 'Observational or experiment', 'Researchers compare sleep quality between people who already drink coffee and people who do not, without assigning coffee intake. What kind of study is this?', 'Observational study', [
    miss('Randomized experiment', 'No treatment was assigned by researchers.', 'Experiments impose treatments.'),
    miss('Matched-pairs experiment', 'There is no paired assignment structure.', 'Matching still requires design details.'),
    miss('Double-blind experiment', 'There is no experimental treatment to blind.', 'Blinding applies to assigned interventions.'),
  ]),
  q(394005, 'Study Design', 'Random assignment', 'In an experiment, what is the main purpose of random assignment?', 'To balance confounding variables across treatment groups', [
    miss('To guarantee the sample represents the population', 'That is the role of random sampling, not assignment.', 'Separate sampling from assignment.'),
    miss('To increase the treatment effect', 'Random assignment does not make effects larger.', 'It improves causal comparison.'),
    miss('To remove all measurement error', 'Measurement error can remain after random assignment.', 'Assignment handles confounding, not measurement.'),
  ]),
  q(394006, 'Study Design', 'Random sampling', 'A pollster uses a random sample from all registered voters. What does random sampling mainly support?', 'Generalizing from the sample to the population', [
    miss('Proving causation', 'Causation needs random assignment or strong causal design.', 'Sampling and assignment answer different questions.'),
    miss('Eliminating nonresponse bias completely', 'Random selection does not force everyone to respond.', 'Nonresponse can still bias results.'),
    miss('Making the sample size irrelevant', 'Sample size still affects precision.', 'Randomness does not replace precision.'),
  ]),
  q(394007, 'Study Design', 'Confounding', 'Ice cream sales and drowning incidents both rise in summer. Temperature is best described as:', 'A confounding variable', [
    miss('A response variable', 'Temperature is not the outcome being compared.', 'It influences both variables.'),
    miss('A placebo', 'Placebos belong to experiments.', 'This is an observational association issue.'),
    miss('A sampling frame', 'A sampling frame is a list used to sample units.', 'Think third variable.'),
  ]),
  q(394008, 'Study Design', 'Blocking', 'An experiment blocks by age group before randomly assigning treatments. Why block?', 'To compare treatments within groups that may respond differently', [
    miss('To avoid random assignment', 'Blocking usually happens before random assignment within blocks.', 'Blocks organize the randomization.'),
    miss('To make the study observational', 'Blocking is compatible with experiments.', 'It is a design tool.'),
    miss('To hide treatment labels from participants', 'That is blinding.', 'Blocking is about known sources of variation.'),
  ]),
  q(394009, 'Sampling', 'Stratified sample', 'A researcher samples 50 students from each grade level. This is closest to:', 'Stratified sampling', [
    miss('Cluster sampling', 'Cluster sampling selects whole groups, not samples within every group.', 'Strata are represented deliberately.'),
    miss('Convenience sampling', 'The design is structured by grade level.', 'Convenience uses what is easy to reach.'),
    miss('Voluntary response sampling', 'There is no self-selected response mechanism described.', 'Voluntary response depends on who chooses to reply.'),
  ]),
  q(394010, 'Sampling', 'Cluster sample', 'A city randomly chooses 10 apartment buildings and surveys every resident in those buildings. This is closest to:', 'Cluster sampling', [
    miss('Stratified sampling', 'Stratified sampling samples from each group, not all people in selected groups.', 'Whole selected groups are the clue.'),
    miss('Simple random sampling of residents', 'Buildings, not individual residents, were sampled first.', 'Identify the first-stage unit.'),
    miss('Systematic sampling', 'There is no every-kth selection rule.', 'Systematic sampling follows a fixed interval.'),
  ]),
  q(394011, 'Exploring Data', 'Mean sensitivity', 'Which summary statistic is most sensitive to extreme outliers?', 'Mean', [
    miss('Median', 'The median depends on position and is more resistant.', 'Outliers pull averages.'),
    miss('Interquartile range', 'IQR ignores the most extreme quarters.', 'IQR is resistant to tails.'),
    miss('Mode', 'Mode depends on frequency, not magnitude.', 'Extreme values often occur once.'),
  ]),
  q(394012, 'Exploring Data', 'Skew direction', 'A distribution has a long tail to the right. How is it described?', 'Right-skewed', [
    miss('Left-skewed', 'Skew is named for the tail direction.', 'Look at the long tail, not the peak.'),
    miss('Symmetric', 'A long tail on one side breaks symmetry.', 'Symmetry has balanced tails.'),
    miss('Uniform', 'Uniform means roughly equal frequencies across values.', 'A tail is not uniformity.'),
  ]),
  q(394013, 'Exploring Data', 'Median in skew', 'For a strongly right-skewed income distribution, which measure usually better describes a typical person?', 'Median', [
    miss('Mean', 'High incomes can pull the mean above typical values.', 'Use resistant summaries for skew.'),
    miss('Range', 'Range describes spread, not center.', 'The question asks typical value.'),
    miss('Standard deviation', 'Standard deviation describes variability.', 'Use a center statistic.'),
  ]),
  q(394014, 'Exploring Data', 'IQR meaning', 'What does the interquartile range measure?', 'The spread of the middle 50% of the data', [
    miss('The distance between the minimum and maximum', 'That is the range.', 'Quartiles cut the data into four parts.'),
    miss('The average distance from the mean', 'That is closer to standard deviation logic.', 'IQR uses Q1 and Q3.'),
    miss('The number of repeated values', 'That is about frequency, not spread.', 'IQR is Q3 minus Q1.'),
  ]),
  q(394015, 'Exploring Data', 'Outlier rule', 'Using the 1.5 IQR rule, a high outlier is above:', 'Q3 + 1.5 * IQR', [
    miss('Q1 - 1.5 * IQR', 'That is the low-outlier fence.', 'High outliers are above the upper quartile.'),
    miss('Mean + 1.5 * IQR', 'The boxplot rule uses quartiles, not the mean.', 'Start from Q3.'),
    miss('Q3 - 1.5 * IQR', 'That moves in the wrong direction.', 'Upper fence adds.'),
  ]),
  q(394016, 'Exploring Data', 'Standard deviation', 'If every value in a dataset is identical, the standard deviation is:', '0', [
    miss('1', 'There is no spread at all.', 'Standard deviation measures distance from the mean.'),
    miss('The mean', 'Center and spread are different summaries.', 'Identical values have zero variation.'),
    miss('Undefined', 'Standard deviation is defined when variation is zero.', 'Zero spread is allowed.'),
  ]),
  q(394017, 'Probability', 'Complement', 'If P(A) = 0.72, what is P(not A)?', '0.28', [
    miss('0.72', 'The complement is what remains outside A.', 'Use 1 - P(A).'),
    miss('1.72', 'Probabilities cannot exceed 1.', 'Complements subtract from 1.'),
    miss('0.36', 'That halves the probability for no reason.', 'Use the complement rule.'),
  ]),
  q(394018, 'Probability', 'Disjoint events', 'If two events are disjoint, then:', 'They cannot happen at the same time', [
    miss('They must be independent', 'Disjoint events with positive probabilities are not independent.', 'If one happens, the other is impossible.'),
    miss('They always have equal probabilities', 'Disjointness says nothing about size.', 'It is about overlap.'),
    miss('Their probabilities must add to 1', 'Only complementary events must exhaust the sample space.', 'Disjoint does not mean complete.'),
  ]),
  q(394019, 'Probability', 'Conditional probability', 'P(A | B) means:', 'The probability of A given that B has occurred', [
    miss('The probability of B given that A has occurred', 'The order is reversed.', 'The condition is after the vertical bar.'),
    miss('The probability of A or B', 'That is a union probability.', 'The bar means given.'),
    miss('The probability of A and B divided by P(A)', 'That formula gives P(B | A).', 'Divide by the event after the bar.'),
  ]),
  q(394020, 'Probability', 'Independence check', 'If P(A) = 0.4 and P(A | B) = 0.4, what does this suggest about A and B?', 'A and B may be independent', [
    miss('A and B are disjoint', 'If B does not change A, that is independence logic, not disjointness.', 'Compare conditional and unconditional probability.'),
    miss('B causes A', 'Probability equality does not prove causation.', 'This is about association.'),
    miss('A is impossible', 'P(A) is 0.4, not 0.', 'Impossible events have probability 0.'),
  ]),
  q(394021, 'Probability', 'Expected value', 'A game pays $10 with probability 0.2 and $0 otherwise. What is the expected payout before costs?', '$2', [
    miss('$10', 'That is the payout only when you win.', 'Weight outcomes by probabilities.'),
    miss('$8', 'That subtracts from 10 instead of weighting.', 'Expected value is 10 * 0.2 + 0 * 0.8.'),
    miss('$0.20', 'That uses the probability as dollars.', 'Multiply payout by probability.'),
  ]),
  q(394022, 'Probability', 'Without replacement', 'Drawing two cards without replacement makes the second draw:', 'Dependent on the first draw', [
    miss('Independent of the first draw', 'The deck composition changes after the first card.', 'Without replacement changes probabilities.'),
    miss('Impossible', 'A second draw is still possible.', 'Only the probabilities shift.'),
    miss('A stratified sample', 'This is a probability dependency issue, not a sampling design.', 'Focus on replacement.'),
  ]),
  q(394023, 'Distributions', 'Normal curve', 'A normal distribution is:', 'Symmetric and bell-shaped', [
    miss('Always right-skewed', 'Normal distributions are symmetric.', 'Think bell curve.'),
    miss('Uniform across all values', 'Uniform distributions are flat, not bell-shaped.', 'Normal curves peak near the mean.'),
    miss('Only defined for positive integers', 'Normal variables can take continuous values.', 'Counts use other distributions.'),
  ]),
  q(394024, 'Distributions', 'Z-score', 'A z-score of 2 means the value is:', 'Two standard deviations above the mean', [
    miss('Two units above the median', 'Z-scores use the mean and standard deviation.', 'The units are standard deviations.'),
    miss('Half a standard deviation below the mean', 'Positive z-scores are above the mean.', 'Sign gives direction.'),
    miss('Twice the sample size', 'Z-scores are standardized values, not counts.', 'Use center and spread.'),
  ]),
  q(394025, 'Distributions', 'Empirical rule', 'In a normal distribution, about what percent of values are within 1 standard deviation of the mean?', '68%', [
    miss('95%', 'That is about within 2 standard deviations.', 'Use the 68-95-99.7 rule.'),
    miss('50%', 'That is not the empirical-rule value.', 'One standard deviation captures more than half.'),
    miss('99.7%', 'That is about within 3 standard deviations.', 'Match the number of SDs.'),
  ]),
  q(394026, 'Distributions', 'Binomial setting', 'Which condition is required for a binomial model?', 'A fixed number of independent trials with the same success probability', [
    miss('A changing success probability on every trial', 'Binomial assumes constant p.', 'Check the BINS conditions.'),
    miss('A continuous response variable', 'Binomial counts successes.', 'It is discrete.'),
    miss('At least three possible outcomes per trial', 'Binomial trials have success/failure outcomes.', 'There are two outcome categories.'),
  ]),
  q(394027, 'Distributions', 'Binomial mean', 'For X ~ Binomial(n = 20, p = 0.3), what is the mean of X?', '6', [
    miss('0.3', 'That is p, not the mean count.', 'Use np.'),
    miss('14', 'That is expected failures.', 'The question asks successes.'),
    miss('20.3', 'Do not add n and p.', 'Multiply n by p.'),
  ]),
  q(394028, 'Distributions', 'Sampling distribution', 'A sampling distribution describes:', 'How a statistic varies across repeated samples', [
    miss('The raw values in one sample only', 'That is the sample distribution.', 'Sampling distributions are about statistics.'),
    miss('The population values exactly', 'The population distribution is different.', 'Repeated samples are the clue.'),
    miss('Only biased samples', 'Sampling distributions can be studied for many designs.', 'It is not limited to bias.'),
  ]),
  q(394029, 'Inference Foundations', 'Standard error', 'Standard error measures:', 'Typical sampling variability of a statistic', [
    miss('A mistake in data entry', 'Standard error is not an error in that everyday sense.', 'It is about sample-to-sample variation.'),
    miss('The spread of individual observations only', 'That is closer to standard deviation.', 'SE describes a statistic.'),
    miss('The probability the null is true', 'That is not what standard error reports.', 'SE is measured on the statistic scale.'),
  ]),
  q(394030, 'Inference Foundations', 'Confidence interval meaning', 'A 95% confidence interval means that in repeated use, the method would capture the true parameter about:', '95% of the time', [
    miss('The parameter has a 95% chance of moving inside this fixed interval', 'In frequentist language the parameter is fixed.', 'The long-run method has 95% capture.'),
    miss('95% of sample values are inside the interval', 'A confidence interval estimates a parameter, not individual values.', 'Do not confuse data spread with parameter uncertainty.'),
    miss('The null hypothesis is 95% likely false', 'Confidence level is not a posterior probability of the null.', 'It is about interval procedure reliability.'),
  ]),
  q(394031, 'Inference Foundations', 'Margin of error', 'If the confidence interval is estimate plus or minus 4, the margin of error is:', '4', [
    miss('8', 'That is the full width, not the margin.', 'Margin is one side of the interval.'),
    miss('2', 'That would be half of the margin.', 'The plus-or-minus value is the margin.'),
    miss('The sample size', 'Margin of error is a distance around an estimate.', 'Read the ± value.'),
  ]),
  q(394032, 'Inference Foundations', 'Larger sample size', 'All else equal, increasing sample size usually makes a confidence interval:', 'Narrower', [
    miss('Wider', 'More data usually reduces sampling variability.', 'Standard error often shrinks with n.'),
    miss('Unchanged', 'Sample size is part of standard error.', 'Precision changes with n.'),
    miss('Invalid automatically', 'Large samples are not automatically invalid.', 'Check assumptions separately.'),
  ]),
  q(394033, 'Inference Foundations', 'P-value', 'A p-value is the probability of observing results at least this extreme, assuming:', 'The null hypothesis is true', [
    miss('The alternative hypothesis is true', 'P-values are computed under the null model.', 'Start from the null.'),
    miss('The sample was biased', 'Bias is not assumed by the p-value definition.', 'Use the test model.'),
    miss('The result is practically important', 'Statistical significance and practical importance differ.', 'P-values measure surprise under the null.'),
  ]),
  q(394034, 'Inference Foundations', 'Small p-value', 'A very small p-value provides evidence:', 'Against the null hypothesis', [
    miss('That the null hypothesis is definitely true', 'Small p-values mean the data are surprising under the null.', 'Surprise under null points away from null.'),
    miss('That the sample size was too small to analyze', 'Small p-values can occur with many sample sizes.', 'Interpret the test result.'),
    miss('That the effect is large enough to matter in practice', 'A small p-value does not guarantee practical importance.', 'Check effect size separately.'),
  ]),
  q(394035, 'Inference Foundations', 'Type I error', 'A Type I error occurs when we:', 'Reject a true null hypothesis', [
    miss('Fail to reject a false null hypothesis', 'That is a Type II error.', 'Type I is a false positive.'),
    miss('Collect too small a sample', 'Small samples can affect errors but are not the definition.', 'Use reject/fail-to-reject language.'),
    miss('Accept the alternative when it is true', 'That is a correct decision, not an error.', 'Type I rejects a true null.'),
  ]),
  q(394036, 'Inference Foundations', 'Power', 'The power of a test is the probability of:', 'Rejecting the null when the alternative is true', [
    miss('Rejecting the null when the null is true', 'That is Type I error probability.', 'Power is a true positive rate.'),
    miss('Failing to reject any null hypothesis', 'Power is about detecting real effects.', 'Think sensitivity.'),
    miss('The null hypothesis being true', 'Power is a property of the test under alternatives.', 'It is not a belief in the null.'),
  ]),
  q(394037, 'One Proportion', 'Proportion parameter', 'In a one-proportion problem, p usually represents:', 'The population proportion', [
    miss('The sample size', 'Sample size is usually n.', 'p is a proportion parameter.'),
    miss('The sample mean', 'Means usually use x-bar or mu.', 'This is a proportion setting.'),
    miss('The standard deviation', 'Standard deviation uses sigma or s.', 'p is probability/proportion.'),
  ]),
  q(394038, 'One Proportion', 'Sample proportion', 'If 42 out of 100 sampled voters support a policy, the sample proportion is:', '0.42', [
    miss('42', 'That is the count, not the proportion.', 'Divide by the sample size.'),
    miss('0.58', 'That is the sample proportion opposed if only two categories exist.', 'Use supporters over total.'),
    miss('100/42', 'The ratio is inverted.', 'Successes divided by total.'),
  ]),
  q(394039, 'One Proportion', 'Null value', 'Testing whether a coin is fair usually uses null hypothesis:', 'p = 0.5', [
    miss('p > 0.5', 'That is a one-sided alternative, not the fairness null.', 'Fair means equal heads and tails probability.'),
    miss('p = 1', 'A fair coin does not always land heads.', 'Use half.'),
    miss('n = 0.5', 'n is sample size, not probability.', 'The parameter is p.'),
  ]),
  q(394040, 'Two Proportions', 'Difference in proportions', 'A study compares the proportion passing in Course A and Course B. The natural parameter is:', 'p_A - p_B', [
    miss('mu_A - mu_B', 'Means use mu; proportions use p.', 'The outcome is pass/fail.'),
    miss('s_A / s_B', 'Standard deviations are not the target here.', 'Compare proportions.'),
    miss('n_A + n_B', 'Sample sizes are not the effect parameter.', 'Parameter describes populations.'),
  ]),
  q(394041, 'One Mean', 'Mean parameter', 'For estimating average commute time for all workers in a city, the parameter is:', 'The population mean commute time', [
    miss('The sample mean commute time', 'The sample mean is the statistic used to estimate the parameter.', 'Parameter belongs to the population.'),
    miss('The population proportion who commute', 'The variable is commute time, not yes/no commute status.', 'Time is quantitative.'),
    miss('The largest commute in the sample', 'A maximum is not the average.', 'Average points to a mean.'),
  ]),
  q(394042, 'One Mean', 'T distribution', 'For inference about a mean with unknown population standard deviation, we usually use:', 'A t distribution', [
    miss('A chi-square distribution for proportions', 'Chi-square is not the usual one-mean interval model.', 'Unknown sigma points to t.'),
    miss('A binomial distribution', 'Binomial is for counts of successes.', 'The response is quantitative.'),
    miss('No distribution ever', 'Inference needs a sampling model.', 'Use the one-sample t framework.'),
  ]),
  q(394043, 'Two Means', 'Paired data', 'Before-and-after blood pressure on the same people should usually be analyzed as:', 'Paired differences', [
    miss('Two independent samples', 'The measurements are linked within each person.', 'Same subjects create pairing.'),
    miss('A one-proportion problem', 'Blood pressure is quantitative, not binary.', 'Use differences in measurements.'),
    miss('A chi-square goodness-of-fit test', 'This is not categorical count fitting.', 'Look at matched quantitative observations.'),
  ]),
  q(394044, 'Two Means', 'Independent samples', 'Comparing average exam scores from two unrelated classes is usually a:', 'Two independent means problem', [
    miss('Paired means problem', 'Students are not matched or measured twice.', 'Pairing needs a natural link.'),
    miss('One-proportion problem', 'Exam score is quantitative, not success/failure as stated.', 'Means fit quantitative outcomes.'),
    miss('Simple linear regression problem', 'There is no quantitative predictor-response relationship described.', 'It is a two-group comparison.'),
  ]),
  q(394045, 'Categorical Inference', 'Chi-square test', 'A chi-square test is most naturally used for:', 'Categorical count data', [
    miss('Estimating a single quantitative mean', 'That points to t methods, not chi-square counts.', 'Chi-square works with tables of counts.'),
    miss('Predicting a quantitative response with a slope', 'That points to regression.', 'Use categories and counts.'),
    miss('Finding the median of a skewed distribution', 'That is descriptive statistics.', 'Chi-square is an inference test.'),
  ]),
  q(394046, 'Categorical Inference', 'Expected counts', 'In a chi-square test, expected counts are calculated assuming:', 'The null hypothesis is true', [
    miss('The alternative hypothesis is true', 'Expected counts represent the null model.', 'Compare observed counts to null-expected counts.'),
    miss('Every observed count is equal', 'Expected counts need not all be identical.', 'They depend on margins or hypothesized proportions.'),
    miss('The sample contains no random variation', 'Expected counts are model averages, not a claim of no variation.', 'Observed counts can differ by chance.'),
  ]),
  q(394047, 'Regression', 'Slope interpretation', 'In a regression predicting weight from height, a slope of 4 means:', 'Predicted weight increases by 4 units for each 1-unit increase in height', [
    miss('Height increases by 4 units for each 1-unit increase in weight', 'That reverses predictor and response.', 'Slope follows response over predictor.'),
    miss('The correlation is exactly 4', 'Correlation must be between -1 and 1.', 'Slope is not correlation.'),
    miss('Everyone gains exactly 4 units of weight', 'Regression describes predicted average change, not exact individual change.', 'Use expected/predicted language.'),
  ]),
  q(394048, 'Regression', 'Correlation range', 'A correlation coefficient must be between:', '-1 and 1', [
    miss('0 and 100', 'Correlation is not a percentage scale.', 'It is unitless and bounded.'),
    miss('0 and infinity', 'Negative association is possible.', 'Correlation can be negative.'),
    miss('-100 and 100', 'That would be percent-style scaling, not r.', 'Use the standard r range.'),
  ]),
  q(394049, 'Regression', 'Residual', 'A residual is:', 'Observed value minus predicted value', [
    miss('Predicted value minus sample size', 'Sample size is not part of residual calculation.', 'Residual compares observed to fitted.'),
    miss('The slope of the regression line', 'Slope is a model coefficient.', 'Residual is an error term for one point.'),
    miss('The correlation squared', 'That is R-squared, not residual.', 'Residuals are point-level differences.'),
  ]),
  q(394050, 'Regression', 'Extrapolation', 'Using a regression line to predict far outside the observed x range is risky because it is:', 'Extrapolation', [
    miss('Random assignment', 'Random assignment is an experimental design feature.', 'This is about prediction range.'),
    miss('Stratification', 'Stratification is a sampling design.', 'Look at x-values outside the data.'),
    miss('Standardization', 'Standardization rescales values.', 'Predicting beyond data is extrapolation.'),
  ]),
])
