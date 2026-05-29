# Statistics: Making Sense of Numbers
*Stop being fooled by a confident chart. Learn to read the numbers around you — averages, odds, polls, and studies — and spot when they're lying.*

**ID**: `statisticsIntro` · **Discipline**: Quantitative Literacy · **Level**: Career

## Course Aim
Statistics is everywhere in adult life: in the news, in medical results, in workplace dashboards, in the polls before an election, and in every product that claims to be "clinically proven." Yet most people were never taught how to read these numbers, so they either trust them blindly or dismiss them entirely. Both reactions are expensive. This course is for the curious adult who wants a third option: the ability to look at a statistic and ask the right questions.

The goal is intuition, not heavy math. You will not be asked to memorize formulas or grind through calculations by hand. Instead, you will build a working mental model of the handful of ideas that do most of the heavy lifting — center and spread, the shape of data, probability, sampling, correlation versus causation, and what confidence intervals and p-values can and cannot tell you. Every concept is anchored to a concrete, everyday example: home prices, weather forecasts, restaurant reviews, medical tests, coin flips, and polls.

By the end, a learner should be able to read a typical statistical claim in the wild and quickly judge whether it is solid, shaky, or misleading. That includes recognizing the classic tricks — cherry-picked time windows, truncated chart axes, survivorship bias, and base-rate neglect — that turn honest-looking numbers into propaganda. The aim is durable numeracy: the confidence to be neither gullible nor cynical, but appropriately skeptical.

## Course Design Notes
The course is sequenced to build intuition before interpretation. It opens with the vocabulary of data types and summary statistics (center and spread), because you cannot judge a number until you know what kind of thing it is. It then moves to the shape of data and the normal curve, which unlock z-scores and percentiles — the tools for judging whether a single value is unusual.

The middle of the course covers probability and sampling, the two engines behind almost every real-world statistic, with heavy emphasis on the famous traps (gambler's fallacy, selection bias, voluntary response bias). The final chapters tie everything together with the most misunderstood ideas in public life: correlation versus causation, the catalogue of statistical misuse, and the intuition behind confidence intervals, p-values, and hypothesis testing. Distractors throughout are written to mirror the specific wrong beliefs people actually hold — that a streak makes an outcome "due," that a 95% interval describes 95% of people, that statistical significance means a big effect — so the course corrects misconceptions rather than just rewarding recall.

## Chapter 1: Types of Data
**Key concepts**: categorical vs numerical, nominal vs ordinal, discrete vs continuous, labels that look like numbers, population vs sample.

**Core questions**
- Does this number measure an amount, or just name a group?
- Do these categories have a real order, or none at all?
- Are we describing everyone (population) or just the people we measured (sample)?

**Common traps**
- Averaging label-numbers like zip codes as if they were quantities.
- Treating ranked categories (Poor/Fair/Good) as exact numbers with equal gaps.

## Chapter 2: Measures of Center
**Key concepts**: mean, median, mode, balance point, skew-resistance, choosing the right center for the question.

**Core questions**
- Which "average" best describes a typical value here?
- Is the mean being dragged by an outlier?
- Does the question want the most common value, the middle value, or the balance point?

**Common traps**
- Reporting the mean for skewed data (like income) where the median is fairer.
- Confusing the mode (most frequent value) with how often it occurs.

## Chapter 3: Measures of Spread
**Key concepts**: range, variance, standard deviation, consistency vs unpredictability, why differences get squared.

**Core questions**
- How spread out is the data, not just where is its center?
- Which option is more consistent when the averages are equal?
- What does the standard deviation mean in the original units?

**Common traps**
- Assuming equal means imply equal spread.
- Reading a large standard deviation as "faster" or "better" rather than "more variable."

## Chapter 4: Distributions and Shape
**Key concepts**: normal (bell) distribution, right and left skew, symmetry, bimodal data, histograms.

**Core questions**
- What is the overall shape: symmetric, skewed, or multi-peaked?
- Which way does the tail stretch, and what does that do to the mean?
- Does a single average hide two distinct groups?

**Common traps**
- Expecting money or popularity to be bell-shaped when they are usually skewed.
- Missing a bimodal split because only the average was reported.

## Chapter 5: The Normal Curve and Z-Scores
**Key concepts**: the 68-95-99.7 empirical rule, z-scores, standardizing across scales, percentiles, spotting outliers.

**Core questions**
- How unusual is this value compared with the rest?
- How many standard deviations from the mean is it?
- How do I compare scores from two different tests or scales fairly?

**Common traps**
- Reading a z-score as raw points instead of standard deviations.
- Treating a percentile as a fraction of the average or as a probability of being "okay."

## Chapter 6: Probability Basics
**Key concepts**: probability as a 0-to-1 likelihood, independent events, multiplying for "and," the complement trick for "at least one," expected value.

**Core questions**
- Is this event independent of what came before?
- Should I multiply (both happen) or use the complement (at least one)?
- Over the long run, does this bet pay more than it costs?

**Common traps**
- The gambler's fallacy: believing an outcome is "due" after a streak.
- Comparing a jackpot to a single ticket instead of weighting it by its tiny probability.

## Chapter 7: Sampling and Bias
**Key concepts**: random sampling, representativeness, selection bias, survivorship bias, voluntary response bias, sample size, margin of error.

**Core questions**
- Did everyone in the population have a fair chance of being included?
- Who is missing from this data because they failed, dropped out, or chose not to respond?
- Does the margin of error make this "lead" a statistical tie?

**Common traps**
- Believing a bigger sample fixes a biased source.
- Studying only the survivors and crediting their habits for success.

## Chapter 8: Relationships and Misuse
**Key concepts**: correlation vs causation, correlation coefficient, confounding variables, misleading charts, cherry-picking, base-rate neglect, averages that hide a split.

**Core questions**
- Could a hidden third factor explain this link?
- Where does the chart's axis start, and what time window was chosen?
- How rare is this thing, and does that change what a positive result means?

**Common traps**
- Reading correlation as proof of causation.
- Ignoring the base rate so that false positives feel like real ones.

## Chapter 9: Confidence, P-Values, and Hypotheses
**Key concepts**: confidence intervals, confidence level as a property of the method, null and alternative hypotheses, p-values, statistical vs practical significance, multiple comparisons, replication.

**Core questions**
- What plausible range does this confidence interval describe, and for what?
- If there were truly no effect, would data this striking be surprising?
- Is this effect statistically significant but too small to matter?

**Common traps**
- Reading a p-value as "the probability the finding is real."
- Trusting one "significant" result fished from many tests, or one that has never been replicated.

## Capstone: Reading a Statistic in the Wild
Learners take a realistic, messy claim — for example, "A small online survey found coffee drinkers were 60% happier (p < 0.05)" — and run it through the full toolkit:
- What kind of data and what sample produced this?
- Is the headline number a fair center, or is it skewed or cherry-picked?
- Is this a correlation being dressed up as causation?
- What does the p-value actually support, and is the effect big enough to matter?
- What single question would most quickly expose the claim as solid or shaky?

The capstone reframes statistics as a literacy skill: the ability to stay neither gullible nor cynical, but appropriately and confidently skeptical of the numbers that shape everyday decisions.

## Assessment Ideas
- Classify a list of real variables by data type.
- Decide whether mean, median, or mode best answers a given question.
- Interpret a confidence interval and a margin of error in plain language.
- Identify the specific bias or chart trick in a set of real-world examples.
- Critique a news-style statistical claim end to end.
