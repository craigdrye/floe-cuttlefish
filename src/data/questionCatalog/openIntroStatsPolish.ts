// Bespoke sub-topic clusters, mentor hints, and correct-answer shortenings
// for the three OpenIntro statistics banks:
//   - openIntroImsImported.ts          (IDs 380001-380056, 56 Qs)
//   - openIntroStatsAdditionalImported.ts (IDs 386001-386030, 30 Qs)
//   - openIntroStatsSlidesImported.ts  (IDs 332001-332027, 27 Qs)
//
// OPEN_INTRO_STATS_SUB_TOPICS regroups the 113 questions across all three
// banks into one shared topical taxonomy (Study Design, Sampling, Descriptive
// Statistics, Probability, Distributions, Sampling Distributions, Confidence
// Intervals, Hypothesis Testing, Two-Sample Tests, ANOVA, Chi-Square, Linear
// Regression, Multiple Regression, Logistic Regression). The original chapter
// labels mixed sources together; the cluster surfaces in lesson scaffolding.
//
// OPEN_INTRO_STATS_MENTOR_HINTS overrides the generic catalog hint with a
// one-line, second-person nudge in the voice of a statistics teacher who
// names the deciding statistical concept — never a template.
//
// OPEN_INTRO_STATS_CORRECT_SHORTENED is kept for parity with the polish
// pattern; the current bank has no items flagged for shortening.

export const OPEN_INTRO_STATS_SUB_TOPICS: Record<string, number[]> = {
  'Study Design — Experiments vs Observational': [
    380001, 380013, 380015, 380016, 386030, 332005,
  ],
  'Study Design — Variables, Cases, and Roles': [
    380003, 380004, 380009, 380010, 380018, 380019, 380020, 380021, 386011,
    386017, 386027, 332001, 332004,
  ],
  'Sampling Methods and Bias': [
    380014, 380017, 332002, 332003,
  ],
  'Parameters vs Statistics': [
    380002, 380005, 380006, 380007, 380008, 380011, 380012,
  ],
  'Descriptive Statistics — Center, Shape, Spread': [
    380022, 380023, 380024, 380025, 380026, 380027, 380028, 380029, 332006,
    332012,
  ],
  'Probability Rules and Independence': [
    386004, 386005, 386010, 332007, 332008, 332009, 332010,
  ],
  'Expectation and Variance of Combinations': [
    386006, 386007, 386008, 386009, 332011,
  ],
  'Normal and Binomial Distributions': [
    386001, 386002, 386003, 386020, 332013, 332014, 332015,
  ],
  'Sampling Distributions': [
    386021, 386022,
  ],
  'Confidence Intervals — Interpretation and Width': [
    380056, 386012, 386023, 386024, 386025,
  ],
  'Hypothesis Testing — Setup and Logic': [
    380037, 380038, 380039, 380040, 386013, 386026,
  ],
  'Two-Sample and Paired Tests': [
    380041, 380042, 380043, 380044, 380045, 380046, 380047, 380048, 380049,
    380050, 386015, 332017, 332018,
  ],
  'ANOVA and Multiple Comparisons': [
    380051, 380052, 380053, 380054, 380055,
  ],
  'Chi-Square Tests': [
    386014, 332016,
  ],
  'Linear Regression — Correlation, Slope, Fit': [
    380030, 380031, 380032, 380033, 380034, 386016, 386028, 386029, 332019,
    332020, 332021, 332022, 332023, 332024,
  ],
  'Multiple and Logistic Regression': [
    380035, 380036, 332025, 332026, 332027,
  ],
  'Data Wrangling and Lab Setup': [
    386018, 386019,
  ],
}

export const OPEN_INTRO_STATS_MENTOR_HINTS: Record<number, string> = {
  // ---------- OpenIntro IMS bank (380001-380056) ----------

  // Study Design — Experiments vs Observational
  380001: 'Random assignment to vaccine versus placebo is what makes this an experiment, not just observation of who chose what.',
  380013: 'No one was assigned to a lab section by the professor — students chose. That makes it observational, not experimental.',
  380015: 'Researchers surveyed existing stress and cramps; no one assigned stress. That is observation, so causal claims are off-limits.',
  380016: 'Observational data can show association, but unmeasured confounders block any causal conclusion about stress causing cramps.',
  380041: 'When the research question is open-ended (any difference), use population means, equality in H0, and a two-sided HA.',

  // Cases, variables, and observational units
  380002: 'Cases are participants, not disease events — add the vaccine and placebo arms to count everyone enrolled.',
  380003: 'A case is the observational unit — one row of the table — and each row here is one penguin.',
  380004: 'Bill length, depth, flipper length, body mass are all measured on a continuous scale, so they are numerical (quantitative).',
  380009: 'An observation is one record from a sampled unit — here, one American who answered the GSS.',
  380010: 'The variable is what is measured on each case — the number of hours each sampled American reports for relaxation.',
  380018: 'The response is the outcome being measured — exam performance — not the factor being manipulated.',
  380019: 'The explanatory variable is the one the experimenter sets — light level — whose effect on exams is being tested.',
  380020: 'Glasses status is not the factor of interest, but it can affect the response, so balancing on it makes it a blocking variable.',
  380021: 'Two distinct things are being varied — light level and noise level — so this is a two-factor experiment.',

  // Parameters vs statistics
  380005: 'A statistic comes from the sample of 1,500 households — $58 is the sample mean, not the population value.',
  380006: 'The $52 industry figure is the value being tested, not measured anew — it plays the role of the claimed population mean.',
  380007: 'The 6.25 hours came from 25 sampled students, so it is a sample mean, not a population parameter.',
  380008: 'The 5.5-hour newspaper claim is about all college students — it is the claimed population mean (null value).',
  380011: 'The 2% comes from a sample of 1,000 randomly picked videos, so it is a sample statistic, not the population value.',
  380012: 'A parameter describes the whole population — here, the true percent of cat videos across all YouTube videos.',

  // Sampling methods and bias
  380014: 'When you want every lab section represented, you sample within each lab — that is stratified sampling, with labs as strata.',
  380017: 'Larger families have more children, so they are more likely to be sampled — that inflates the average household size.',

  // Descriptive statistics
  380022: '64 is below the old mean of 74, so adding it pulls the average down.',
  380023: '(24*74 + 64) / 25 = (1776 + 64) / 25 = 1840 / 25 = 73.6.',
  380024: 'Removing the smallest values raises the mean of what remains — fire the employees with the fewest vacation days.',
  380025: 'Median 100 with mean 190 means a long tail of high friend counts pulls the mean above the median — right-skewed.',
  380026: 'When the standard deviation is nearly as large as the mean and the variable cannot go negative, the distribution skews right.',
  380027: 'On an easy test most scores pile up near 100, with a tail of lower scores — that is left-skewed.',
  380028: 'The midrange depends only on the max and min, so a single extreme value dominates it — it is not robust.',
  380029: 'A right tail pulls the mean above the median, so mean/median > 1 signals right skew.',

  // Linear regression
  380030: 'Correlation is unit-free — rescaling rainfall from inches to centimeters leaves r unchanged.',
  380031: 'Slope units are (units of y) per (unit of x) — calories per centimeter of width.',
  380032: 'Slope uncertainty grows with the residual scatter — more spread around the line means a less precise slope estimate.',
  380033: 'Strength of a linear association is the absolute value of r, so |-0.90| > |0.5|.',
  380034: 'Correlation measures linear association between two numerical variables only — not arbitrary pairs.',

  // Logistic and multiple regression
  380035: 'Logistic regression requires a binary outcome, but predictors can be of any type — categorical or continuous.',
  380036: 'A pass rate is a continuous proportion, not a binary outcome, so logistic regression is not the right tool here.',

  // Hypothesis testing — setup
  380037: 'The claim is "more than 25%", so the null pins p at the boundary 0.25 and the alternative is one-sided greater.',
  380038: 'The null fixes the parameter at the claimed value — H0: p = 0.60 — and you test whether the new sample contradicts it.',
  380039: 'Large n shrinks the standard error, so tiny effects can still be statistically discernible without being practically meaningful.',
  380040: 'A bootstrap resample is drawn with replacement from the original sample, so it can only contain values that already appear.',

  // Inference for means — two-sample and paired
  380042: 'A hypothesis test answers "is there a difference?" and a confidence interval estimates "how big is it?"',
  380043: 'Same 25 capitals measured in 2013 and 2014 — each city is its own pair, so use a paired t-test on the differences.',
  380044: 'Equal sample sizes do not create pairs — pairing requires a natural one-to-one matching of subjects.',
  380045: 'Each student has a before and after score on the same person, so the data are paired.',
  380046: 'Random men and random women have no one-to-one matching, so the two samples are independent, not paired.',
  380047: 'Same patient measured twice (start and two years later) — that is a within-subject paired design.',
  380048: 'Returns matched by trading day let each day serve as a pair of (Intel, Southwest) — paired data.',
  380049: 'Same item priced at both Target and Walmart — each item is its own pair, so paired comparisons are appropriate.',
  380050: '100 students sampled at each of two schools are independent samples, not pairs — use a two-sample (not paired) t-test.',

  // ANOVA
  380051: 'Comparing means across 4 groups at once is ANOVA — a two-sample t-test only handles two groups.',
  380052: 'Large between-group variation relative to within-group variation drives the F statistic up, supporting HA.',
  380053: 'To control family-wise error across more pairs, the per-test alpha goes down (Bonferroni), not up.',
  380054: 'Residual df = N - k. With k fixed, raising N raises the residual degrees of freedom.',
  380055: 'As df grows, the t-distribution loses its heavy tails and converges to the standard normal.',

  // Confidence intervals
  380056: 'A 99% interval is wider than a 95% interval from the same data, so if 95% includes 0 the 99% must too.',

  // ---------- OpenIntro Stats Additional (386001-386030) ----------

  // Normal and binomial
  386001: 'Standardize: z = (80 - 72.6) / 4.78 ≈ 1.55, and Φ(1.55) ≈ 0.94, so about 94% drive slower than 80 mph.',
  386002: 'The 95th percentile of N(72.6, 4.78) is 72.6 + 1.645·4.78 ≈ 80.5 mph.',
  386003: 'Each of 2,500 admits independently attends with p = 0.70 — that is exactly the binomial setup with n = 2,500.',
  386020: 'A roughly straight normal probability (Q-Q) plot means the data quantiles track the normal quantiles — normality is plausible.',

  // Probability
  386004: 'With 3 plays of ±$1, the net can be -3, -1, +1, or +3 — even sums are impossible from an odd number of ±$1 bets.',
  386005: 'Use Bayes: P(HIV|+) = (0.997·0.259) / (0.997·0.259 + 0.074·0.741) ≈ 0.825.',
  386010: 'Probabilities must be non-negative — a negative probability automatically invalidates the distribution.',

  // Expectation and variance of combinations
  386006: 'Expectation is linear, so E[coffee + muffin] = 1.40 + 2.50 = 3.90, independence aside.',
  386007: 'Independence means variances add: sqrt(0.30^2 + 0.15^2) ≈ sqrt(0.1125) ≈ 0.34.',
  386008: 'Var((X1+X2)/2) = (1/4)(Var(X1)+Var(X2)) = (1/4)(2σ^2) = σ^2/2.',
  386009: 'The variance of the sample mean is σ^2/n — that is why standard error shrinks like 1/√n.',

  // Sampling distributions and CIs
  386011: 'An upward scatterplot pattern means head length and skull width move together — positive association.',
  386012: 'A 95% CI of 64%-70% is interpreted about the population proportion: 95% confident the true % lies in that range.',
  386013: 'The one-proportion z-test needs np and n(1-p) at least 10 (success-failure), not a flat n ≥ 30 rule.',
  386014: 'A p-value below 0.001 is well under alpha = 0.05 — reject H0 and conclude the die is biased.',
  386015: 'The two-sample t-test only needs each group to satisfy success-failure or normality — there is no joint n ≥ 30 requirement.',
  386021: 'Two random samples from the same population will give somewhat different sample proportions — that is sampling variability.',
  386022: 'Standard error of a proportion is sqrt(p(1-p)/n), so larger n means smaller spread of the sampling distribution.',
  386023: '95% confidence is a property of the procedure: across many samples, about 95% of intervals built this way capture the true p.',
  386024: 'Lower confidence = smaller z* multiplier, so the margin of error and the interval both shrink.',
  386025: 'Higher confidence demands a bigger z* multiplier, which stretches the margin of error and widens the interval.',
  386026: 'Margin of error is maximized where p(1-p) is largest, and p(1-p) peaks at p = 0.50.',
  386027: 'Each row in the BRFSS file is one survey participant, so a case is one respondent.',

  // Regression
  386016: 'Outliers may or may not be high-leverage, and high-leverage may or may not be influential — no universal always-statement holds.',
  386017: 'Weight is the outcome predicted from volume and cover type, so weight is the response and the other two are explanatory.',
  386028: 'Plug the predictor value into the fitted equation ŷ = b0 + b1·x and read off the predicted response.',
  386029: 'Constant variability shows up as residuals evenly scattered around zero with no funnel or curve across fitted values.',
  386030: 'No treatment was assigned — beauty ratings and evaluations were collected as-is, so this is observational.',

  // Data wrangling and lab setup
  386018: 'air_time is in minutes, so dividing by 60 converts to hours; then distance / hours gives miles per hour.',
  386019: 'Two simulations from the same model will be similar in tendency but vary in random detail — same distribution, different samples.',

  // ---------- OpenIntro Stats Slides (332001-332027) ----------

  // Variables and study design
  332001: 'Area codes are labels, not measurements — arithmetic on them is meaningless, so they are categorical.',
  332002: 'Mailed surveys can be undelivered, and a 20% response rate makes non-response bias real — that gives statements I and III.',
  332003: 'Neighborhoods differ a lot, so clusters are heterogeneous within and similar across — cluster sampling is least effective here.',
  332004: 'Light and noise are the manipulated factors; gender is balanced as a block, and exam score is the response.',
  332005: 'The defining difference is random assignment — experiments use it to break confounding; observational studies do not.',

  // Descriptive stats and distributions
  332006: 'Birthdays of classmates are roughly evenly spread across the days of the month — that is approximately uniform.',
  332007: '1000 flips of a fair coin centre near 500 heads with SD ≈ 16, so seeing exactly 3 heads would be vastly more shocking.',
  332008: 'Democrat vs not-Democrat does not divide the rest into Republicans only — independents and others can hide in the complement.',
  332009: 'Subgroup proportions condition on the subgroup, so opinion and being a registered voter are dependent here.',
  332010: 'P(ace) · P(3 | ace drawn) = (4/52) · (4/51) ≈ 0.0060 without replacement.',
  332011: 'P(red) = 1/2, P(ace of clubs | red drawn) = 1/51, so expected winnings ≈ 500·(1/2·1/51) ≈ 4.90, minus $5 cost ≈ -$0.10. Times 100 plays gives roughly -10.',
  332012: 'In any distribution, the Z-score of the mean is always 0 by definition — skewness does not change that.',
  332013: 'Binomial counts successes, so k can be 0, 1, ..., n — it cannot exceed n.',
  332014: 'Normal approximation works when np ≥ 10 and n(1-p) ≥ 10 — only n = 25, p = 0.45 (np = 11.25) meets both.',
  332015: 'Normal is continuous on all real numbers — it can take negatives and non-integers, unlike binomial or Poisson.',

  // Inference for categorical / numerical
  332016: 'Chi-square gets less skewed and more symmetric as df increases, approaching normality — not more skewed.',
  332017: 'Random sampling plus the 10% rule lets us treat observations as independent — that is the condition the true statement names.',
  332018: 'A p-value is P(observed-or-more-extreme statistic | H0) — the chance of a sample at least as extreme assuming the null.',

  // Linear and multiple regression
  332019: 'Higher HS graduation should track with less poverty, so the correlation is strong and negative — about -0.75.',
  332020: 'More female-householder, no-husband households tracks with higher poverty — moderately positive, around 0.5.',
  332021: 'The intercept is the predicted y when x = 0 — predicted poverty at 0% HS graduates is 64.68%.',
  332022: 'R^2 = 0.56 means the model explains 56% of variation in poverty rate across states.',
  332023: 'R^2 measures variation explained, not how accurately individual values can be predicted — so the prediction claim is false.',
  332024: 'A slope of -0.75 means each extra 1% Hispanic residents is associated with 0.75% fewer college grads, on average.',
  332025: 'Among the four U.S. regions in the model, the Northeast has the smallest fitted poverty intercept — that is the lowest.',
  332026: 'Plug volume = 600 and paperback = 1 into the fitted equation: 197.96 + 0.72·600 - 184.05·1.',
  332027: 'p = 0.01 < 0.05 with other variables held constant — strong evidence that age is associated with rating after adjustment.',
}

export const OPEN_INTRO_STATS_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {}
