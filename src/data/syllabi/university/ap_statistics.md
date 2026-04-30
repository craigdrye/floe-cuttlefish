# AP Statistics
**ID**: `apStatistics` · **Discipline**: Mathematics / Data Literacy · **Stage**: University Freshman (ages 17–19)
**Aligns with**: College Board AP Statistics Course and Exam Description (CED), Units 1–9; equivalent to a one-semester non-calculus introductory statistics course (STAT 101 / STAT 200)

## Course Philosophy
AP Statistics is *the* most useful course for a non-mathematician adult — every news article about a poll, a clinical trial, or a study of "X causes Y" depends on the ideas in this course. The internal goal is to build statistical literacy in two parts: (1) **rigorous skepticism** about how data is collected (random sampling vs convenience, observational vs experimental, the role of bias and confounding) and (2) **rigorous quantification** of uncertainty (sampling distributions, p-values, confidence intervals, and what they actually mean). The single biggest student trap is conflating "the probability the null is true" with "the p-value" — every module should reinforce the right interpretation. The course is light on formula manipulation but heavy on choosing the right test, checking conditions, and writing conclusions in context.

## Module 1: Exploring One-Variable Data (Unit 1, 15–23%)
- Categorical vs quantitative variables; discrete vs continuous; identifying the variable type drives every later choice
- Displaying categorical data: frequency/relative frequency tables, bar charts, pie charts; what comparisons each supports
- Displaying quantitative data: dotplots, stemplots, histograms (bin choice matters), cumulative frequency / ogive
- **Describing distributions** with SOCS: Shape (symmetric, skewed, uniform, bimodal), Outliers, Centre (mean, median), Spread (range, IQR, standard deviation, variance)
- The relationship between mean and median under skew (mean pulled toward the tail)
- Five-number summary; **boxplots** and modified boxplots; the 1.5×IQR rule for outliers
- Standard deviation as "typical distance from the mean"; population (σ) vs sample (s) — and why the n−1 in s²
- Linear transformations: effect of adding/multiplying a constant on centre and spread
- **z-scores** and percentile rank; using z to compare across distributions
- Density curves and the Empirical Rule (68–95–99.7) for the **Normal distribution**
- Standard Normal table / calculator (normalcdf, invNorm); finding probabilities and inverse problems
- Assessing Normality: shape of histogram, Normal probability plot
- **Questions**: SOCS descriptions of distributions, IQR-rule outlier identification, z-score interpretation, Normal probability and percentile problems

## Module 2: Exploring Two-Variable Data (Unit 2, 5–7%)
- Two categorical variables: two-way tables, marginal and conditional distributions, segmented bar charts; assessing association
- **Simpson's Paradox** as a warning about aggregating across groups
- Two quantitative variables: scatterplots; describing form, direction, strength, and unusual points
- **Correlation coefficient r**: interpretation, range [−1, 1], invariance under linear transformations, sensitivity to outliers; r is not causation; r ≠ 0 does not mean linear
- **Least-squares regression line**: ŷ = a + bx; slope b = r·(s_y/s_x); intercept a = ȳ − b·x̄
- Interpreting slope and y-intercept in context, including units; the line passes through (x̄, ȳ)
- **Coefficient of determination r²**: "fraction of variation in y explained by the linear model with x"
- **Residuals** and residual plots; identifying nonlinearity, non-constant variance, outliers
- Influential points and leverage (intuitive, not technical)
- Transformations to achieve linearity (log, square root, reciprocal)
- **Questions**: interpret r and r² in context, write predictions and residuals from a regression equation, diagnose violations from residual plots, distinguish association from causation

## Module 3: Collecting Data (Unit 3, 12–15%)
- **Population vs sample**; parameter (population) vs statistic (sample)
- Sources of bias: voluntary response, undercoverage, nonresponse, response bias (wording, social desirability), question order
- **Sampling methods**: simple random sample (SRS), stratified, cluster, systematic, multistage; convenience samples and why they fail
- **Observational study vs experiment**: confounding variables explain why observation alone cannot establish causation
- Components of an experiment: experimental units / subjects, factors, levels, treatments, response variables
- **Three principles of experimental design**: control, randomization, replication
- **Blocking** to reduce variation; matched-pairs design as a special case
- **Blinding**: single-blind, double-blind; placebo and the placebo effect
- Generalizability (random sample) vs cause-and-effect inference (random assignment) — the two-by-two grid is foundational
- **Questions**: identify bias type from a scenario, design a randomized comparative experiment with proper controls, decide whether causal language is justified

## Module 4: Probability, Random Variables, and Probability Distributions (Unit 4, 10–20%)
- Sample space, events, simulation as a probability tool
- Law of Large Numbers (long-run frequency interpretation); the gambler's fallacy
- Probability rules: complement, addition (P(A ∪ B) = P(A) + P(B) − P(A ∩ B)), multiplication (independence: P(A ∩ B) = P(A)P(B))
- **Conditional probability**: P(A | B) = P(A ∩ B) / P(B); independence reformulated; mutually exclusive ≠ independent (in fact, almost always the opposite)
- Tree diagrams, two-way tables, Bayes' Rule (no formal name in CED, but the calculation appears)
- **Random variables**: discrete vs continuous; pmf and cdf
- Mean (expected value) and standard deviation of a discrete RV
- Linear combinations of RVs: μ_{aX+b} = aμ_X + b; σ²_{aX+b} = a²σ²_X
- Sums of independent RVs: μ_{X±Y} = μ_X ± μ_Y; σ²_{X±Y} = σ²_X + σ²_Y (variances add even for differences if independent)
- **Binomial distribution**: B(n, p); conditions (BINS: Binary, Independent, Number fixed, Same probability); mean np, sd √(np(1−p))
- **Geometric distribution**: trials until first success; mean 1/p
- (Normal as continuous distribution, already in Module 1)
- **Questions**: classic conditional probability with two-way tables, computing E(X) and SD(X) from a probability table, identifying and computing binomial / geometric probabilities, mean and SD of linear combinations

## Module 5: Sampling Distributions (Unit 5, 7–12%)
- Statistics vary from sample to sample — the sampling distribution is the distribution of a statistic across all possible samples
- **Sampling distribution of the sample proportion p̂**: mean = p, sd = √(p(1−p)/n); approximately Normal when np ≥ 10 and n(1−p) ≥ 10 (Large Counts condition)
- **Sampling distribution of the sample mean x̄**: mean = μ, sd = σ/√n; Normal if population is Normal *or* by the **Central Limit Theorem** (CLT) when n is large (rule of thumb n ≥ 30)
- 10% condition for independence when sampling without replacement
- Bias and variability as separate concepts; visualizing as a target/dartboard
- Difference of two sample proportions and difference of two sample means — their distributions and conditions
- **Questions**: state and check conditions for Normality of a sampling distribution, compute probabilities about p̂ or x̄ using the appropriate Normal model, distinguish the population SD, the sample SD, and the standard error of the sampling distribution

## Module 6: Inference for Categorical Data — Proportions (Unit 6, 12–15%)
- **Confidence interval for p**: p̂ ± z*·√(p̂(1−p̂)/n); interpretation ("we are C% confident…"), what a confidence level means in repeated sampling, common interpretation errors
- Margin of error and sample size determination for a desired margin of error
- **Significance test for p**: one-proportion z-test; null and alternative hypotheses, test statistic, p-value, decision and conclusion in context
- Type I and Type II errors; significance level α; power and how to increase it (larger n, larger effect size, larger α)
- **Two-proportion z-interval and z-test**: pooled proportion when assuming H₀ true (test) vs unpooled (interval)
- Conditions: Random, 10%, Large Counts (different forms for one vs two proportion)
- **Questions**: full inference template (state hypotheses, name procedure, check conditions, compute, interpret, conclude in context) for one and two proportions

## Module 7: Inference for Quantitative Data — Means (Unit 7, 10–18%)
- Why we use **t-distributions** when σ is unknown: the extra variability from estimating σ with s
- t-distribution properties: more spread than Normal, becomes Normal as df → ∞
- **One-sample t-interval and t-test for μ**: conditions (Random, 10%, Normal/Large Sample)
- **Matched-pairs t-procedures**: take differences, treat as one-sample t on the differences
- **Two-sample t-interval and t-test for μ₁ − μ₂**: independent samples; conservative df vs Satterthwaite (calculator/software)
- Robustness of t-procedures to departures from Normality, especially for moderate to large n
- **Questions**: choose between one-sample, matched-pairs, and two-sample procedures; full inference template for means; interpret t-intervals and p-values in context

## Module 8: Inference for Categorical Data — Chi-Square (Unit 8, 2–5%)
- **Chi-square goodness-of-fit test**: testing whether a single categorical variable follows a hypothesized distribution; expected counts = n·p_i; df = k − 1
- **Chi-square test for homogeneity**: comparing distributions of one categorical variable across multiple populations/groups
- **Chi-square test for independence / association**: testing association between two categorical variables in one population; expected = (row total × column total) / grand total; df = (r − 1)(c − 1)
- Conditions: Random, 10%, Large Counts (all expected counts ≥ 5)
- Why χ² tests are inherently right-tailed; using residuals (observed − expected)/√expected to find which cells contribute most to a significant result
- **Questions**: identify which chi-square test fits a scenario, compute expected counts, interpret residuals, write a context-specific conclusion

## Module 9: Inference for Quantitative Data — Slopes (Unit 9, 2–5%)
- The population regression model: y = α + βx + ε, with ε ~ N(0, σ); the assumptions L-I-N-E (Linear, Independent, Normal residuals, Equal variance)
- **Sampling distribution of the slope b**: centred at β with standard error SE_b
- **Confidence interval for the slope β**: b ± t*·SE_b with df = n − 2
- **Significance test for the slope β**: H₀: β = 0; t = b/SE_b
- Reading regression output (Estimate, SE, t-stat, p-value, df) from typical software
- **Questions**: from a regression printout, build a CI for the slope, test H₀: β = 0 in context, check the L-I-N-E conditions from a residual plot

## Stretch Zone (push beyond AP Stat)
- The frequentist vs **Bayesian** view of probability; what a "credible interval" is and how it differs from a confidence interval
- The **bootstrap** and randomization tests as a simulation-based alternative to formula-based inference
- **Multiple regression** intuition: controlling for variables; the difference between marginal and partial relationships
- The **multiple testing problem**: family-wise error rate, Bonferroni, and why p-hacking matters; replication crisis as a real-world consequence
- **Effect size** vs statistical significance; Cohen's d; practical vs statistical significance
- Why the t-distribution exists (Gosset / "Student"); the chi-square distribution as a sum of squared standard Normals
- Common interpretation errors to drill:
  - p-value is *not* P(H₀ true)
  - Confidence level is about the procedure, not "95% chance the parameter is in this interval"
  - "Failing to reject H₀" is *not* "accepting H₀"
  - Correlation ≠ causation, even with high r²
- The "garden of forking paths" and why pre-registration of analyses matters
- Causal inference: randomized experiments → causal claims; observational studies require careful confounding adjustment; instrumental variables and difference-in-differences (intuition only)
