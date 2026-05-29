# High School Statistics
The craft of asking better questions with data - designing fair comparisons, describing patterns honestly, and quantifying how sure we can be.

**ID**: `col-high-school-statistics` · **Discipline**: Mathematics

## Course Aim
This course treats statistics as a way of reasoning under uncertainty rather than a collection of formulas. Aimed at students around ages 15-16 (roughly Year 11 / Grade 10-11), it follows the full statistical investigation cycle: pose a question that data can answer, collect or scrutinize data, analyze it with the right display and summary, and interpret the result without overclaiming. The mathematics stays accessible - arithmetic, ratios, and reading graphs - while the harder work is judgment: deciding what a number means and how much trust the evidence supports.

Students learn to describe a single variable (shape, center, spread, and outliers), model data with the normal distribution and z-scores, explore relationships between two variables with scatterplots and least-squares regression, and tell the difference between association and causation. They study how data is produced - surveys, observational studies, and experiments - because the design determines which conclusions are legitimate. Probability and random variables give the language of chance, and the course closes with an introduction to sampling variability and inference: confidence intervals, p-values, and the crucial gap between statistical significance and practical importance.

By the end, a student can take a real or simulated dataset, choose an honest display, compute and interpret the appropriate summaries, recognize bias and confounding, and write a conclusion that states both the finding and its limitations. The recurring habit is humility with data: knowing when a claim is stronger than the evidence behind it, and saying so.

## Course Design Notes
Use the GAISE investigation cycle (formulate questions, collect/consider data, analyze, interpret) as the backbone. Route questions here when they focus on data displays, distributions, the normal model, probability, study design, correlation and regression, sampling variability, or introductory inference. Chapters 1-2 build description; Chapter 3 adds the normal model; Chapter 4 covers two-variable relationships; Chapter 5 is study design and ethics; Chapter 6 is probability and random variables; Chapter 7 introduces inference; Chapter 8 is a synthesis studio on communicating with data.

Every chapter pairs a concept with interpretation in context, because at this tier the reasoning matters more than the arithmetic. "Common traps" sections target the errors that most distort statistical thinking - reading a histogram bar as a single value, confusing random sampling with random assignment, treating correlation as causation, misinterpreting a confidence interval or p-value, and conflating statistical significance with importance. The course assumes no calculus and uses calculators or simulation freely, treating the graph and the simulation as primary thinking tools.

## Chapter 1: Statistical Questions and the Data Cycle
- **Core questions**: What makes a question statistical rather than a simple lookup? Where does variability come from? What is the difference between a population and a sample, and between a parameter and a statistic?
- **Key concepts**: statistical questions and variability; populations and samples; parameters and statistics; categorical vs. quantitative variables; discrete vs. continuous data; measurement quality; sources of bias; the full statistical investigation cycle.
- **Applied skills**: sort statistical from non-statistical questions; classify variables by type; identify the population and the variable a study measures; anticipate likely sources of bias or missing context before any data is collected.
- **Common traps**: assuming a single answer exists when the question is really about variation; confusing a sample statistic with a population parameter; labeling numeric codes (like zip codes or jersey numbers) as quantitative; ignoring how the data was collected when judging its quality.

## Chapter 2: One-Variable Data
- **Core questions**: Which display fits this variable, and what does its shape tell you? When is the mean a better summary than the median, and when is it misleading? How do you compare two distributions fairly?
- **Key concepts**: dot plots, stem plots, histograms, and box plots; shape (symmetric, skewed, bimodal); center (mean, median); spread (range, IQR, standard deviation); outliers and the 1.5 x IQR rule; percentiles; comparing distributions.
- **Applied skills**: choose and read an appropriate display; compute and interpret center and spread; flag outliers; compare two groups using both a graph and numerical summaries; justify mean vs. median for a given shape.
- **Common traps**: reading a histogram bar as one exact value rather than an interval count; reporting the mean for strongly skewed data where the median is more honest; confusing frequency (height) with the variable (horizontal axis); treating any high or low value as an outlier without a rule.

## Chapter 3: Normal Models and Standardization
- **Core questions**: When is it reasonable to model data with a normal distribution? What does a z-score actually measure? How do you turn a z-score into a percentile and back?
- **Key concepts**: density curves; the normal distribution; the empirical (68-95-99.7) rule; standardization and z-scores; percentiles and areas under the curve; assessing whether a normal model fits.
- **Applied skills**: compute and interpret a z-score; use the empirical rule to estimate the percent of data within 1, 2, or 3 standard deviations; convert between values, z-scores, and percentiles; decide whether a normal model is reasonable for a given distribution.
- **Common traps**: applying the empirical rule to clearly non-normal (skewed) data; mixing up "above the mean" (positive z) with "below" (negative z); confusing the percent within an interval with the percentile of an endpoint; assuming every bell-ish histogram is exactly normal.

## Chapter 4: Two-Variable Data and Regression
- **Core questions**: How do you describe the relationship between two quantitative variables? What do the slope, intercept, and correlation really mean in context? Why can a strong correlation still fail to prove causation?
- **Key concepts**: scatterplots; direction, form, and strength of association; correlation coefficient r and the coefficient of determination; explanatory vs. response variables; least-squares regression line; residuals and residual plots; influential points; interpolation vs. extrapolation.
- **Applied skills**: describe an association from a scatterplot; interpret slope and intercept in context with units; use the regression equation to predict and recognize when prediction is unsafe; read a residual plot to judge model fit; explain why association does not establish causation.
- **Common traps**: claiming causation from an observational association; extrapolating far beyond the data range; interpreting r as a slope or as a percentage; ignoring an influential point that distorts the line; confusing a strong r with a good linear fit when the pattern is curved.

## Chapter 5: Study Design and Data Ethics
- **Core questions**: What kind of study is this, and what conclusions does it permit? How does random sampling differ from random assignment, and why does each matter? What ethical obligations come with collecting data about people?
- **Key concepts**: surveys, observational studies, and experiments; random sampling vs. random assignment; bias (voluntary response, undercoverage, nonresponse, wording); control groups, treatments, and the placebo effect; blinding, blocking, confounding, and replication; privacy, consent, and responsible data use.
- **Applied skills**: identify the study type and the strongest defensible conclusion; diagnose the bias in a flawed sampling plan; redesign a study to reduce bias or support a causal claim; flag ethical risks in how data is gathered or shared.
- **Common traps**: confusing random sampling (about generalizing) with random assignment (about causation); concluding cause and effect from an observational study; assuming a large sample fixes a biased sampling method; overlooking confounding variables.

## Chapter 6: Probability and Random Variables
- **Core questions**: How do you compute and combine probabilities? What does conditional probability mean, and when are two events independent? How do you find the expected value of a random variable?
- **Key concepts**: sample spaces and basic probability rules; complement, addition, and multiplication rules; independence and conditional probability; two-way tables; discrete random variables; expected value (mean) of a random variable; binomial settings; simulation.
- **Applied skills**: compute probabilities from two-way tables and tree diagrams; calculate conditional probabilities and test for independence; find the expected value of a discrete random variable; design a simulation to estimate a probability and compare it to a theoretical value.
- **Common traps**: adding probabilities of non-mutually-exclusive events without subtracting the overlap; multiplying probabilities of dependent events as if independent; confusing P(A and B) with P(A given B); treating expected value as a guaranteed outcome rather than a long-run average.

## Chapter 7: Sampling Variability and Introductory Inference
- **Core questions**: Why do sample results vary from sample to sample, and how is that variation predictable? What does a confidence interval actually claim? What does a p-value say - and what does it not say?
- **Key concepts**: sampling distributions; sampling variability and the role of sample size; margin of error and confidence intervals; null and alternative hypotheses; p-values and statistical significance; Type I and Type II errors (intuitively); statistical vs. practical significance.
- **Applied skills**: interpret a confidence interval in plain language for a specific context; interpret a p-value as evidence against a null hypothesis; explain how sample size affects margin of error; distinguish a result that is statistically significant from one that matters in practice.
- **Common traps**: claiming "95% probability the true value is in this interval" instead of describing the long-run method; reading a small p-value as proof of a large or important effect; treating "not significant" as proof of no effect; forgetting that a biased sample invalidates the whole inference.

## Chapter 8: Data Story Studio
- **Core questions**: What evidence would a public claim actually need? How can a graph mislead even when its numbers are correct? How do you communicate uncertainty to a non-technical audience?
- **Key concepts**: reproducible analysis habits; graph integrity (truncated axes, misleading area, cherry-picked ranges); annotation and clear labeling; dashboard and summary-display basics; uncertainty in public claims; revision after critique.
- **Applied skills**: spot and fix a misleading graph choice; revise an overstated data claim into a defensible one; identify what evidence a headline would require; write a short, honest uncertainty statement for general readers.
- **Common traps**: trusting a chart because the data is real while the axis or scaling distorts it; stating a conclusion with more confidence than the design supports; omitting limitations and sample details; presenting a single statistic with no measure of variability.

## Capstone
Students complete a full statistical investigation from question to interpretation. Working from a real, public, or simulated dataset, they pose a statistical question, justify a data-collection or selection plan, analyze the data with appropriate displays and summaries (including at least one relationship or comparison), and quantify uncertainty where relevant. The final product can be a written report, a slide briefing, or an interactive notebook, but it must make its design choices explicit, present honest visualizations, address possible bias or confounding, and end with a clear answer to the original question together with a candid statement of limitations.
