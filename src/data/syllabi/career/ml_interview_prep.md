# Data Science / ML Interview Prep
*Reason out loud about metrics, models, and experiments the way a strong interviewer wants to hear.*

**ID**: `ml` · **Discipline**: Technology · **Level**: Career

## Course Aim
Data science and machine-learning interviews do not reward people who can recite definitions. They reward people who can take a vague business question, turn it into a measurable problem, pick a defensible model and metric, reason about what could go wrong, and explain all of it clearly. This course trains that reasoning. It is built for the take-home-and-onsite loop most companies use: a SQL screen, a statistics and probability round, a modeling or ML-fundamentals round, an A/B testing and experimentation round, and an ML system design or case round.

The voice is that of a calm senior practitioner sitting across the table. Every question hands you a concrete scenario — an imbalanced fraud dataset, a ride-sharing experiment, a recommender with no history for new items — and asks for the move a good candidate would make, not the textbook label. Distractors are the plausible-but-wrong answers real candidates give: optimizing accuracy on a 1%-positive dataset, treating correlated users as independent samples, peeking at a test until it turns significant. Knowing why each trap is wrong is most of the signal interviewers are listening for.

By the end you should be able to: write and read window-function SQL, interpret a p-value and statistical power without fooling yourself, choose between precision and recall for a real cost structure, explain the bias-variance consequences of model complexity, design an A/B test with a sound unit of randomization, and sketch an ML system that survives contact with production drift. Above all, you should be able to say what you are assuming, what you would measure, and what would change your mind.

## Course Design Notes
Chapters mirror the standard interview loop so learners can drill the exact round they have coming up. Chapter 1 covers the SQL screen (joins, aggregation, window functions, the analytics patterns that show up on every data screen). Chapters 2 and 3 cover the probability/statistics round. Chapters 4 through 6 cover the modeling round — fundamentals, evaluation metrics, and the supervised/ensemble landscape. Chapter 7 is the experimentation round, the single most-tested area for product data scientists. Chapter 8 is ML system design and the behavioral "tell me about a project" round.

Questions are scenario-first and demand a judgment, not a recall. Where a precise number or formula matters (F1 as the harmonic mean, the meaning of AUC, the CUPED variance-reduction idea), the lesson states it exactly so the learner leaves with the correct version rather than folk memory. Wrong answers are themselves common interview mistakes, each with a bespoke explanation of the distinction it blurs, so the learner can tell apart look-alikes: precision vs recall, data drift vs concept drift, bagging vs boosting, Type I vs Type II error, novelty effect vs a real treatment win.

## Chapter 1: The SQL and Data Screen
**Core questions**
- Which join and grain produce one row per the thing I am actually counting?
- When do I need a window function instead of a GROUP BY?
- Why did this aggregate quietly drop or duplicate rows?

**Key concepts**: INNER vs LEFT join, fan-out and grain, GROUP BY vs window functions, ROW_NUMBER / RANK / DENSE_RANK, PARTITION BY, running totals, NULL handling, deduplication, COUNT(*) vs COUNT(column).

**Applied skills**: write a query that returns each user's most recent event; compute a 7-day rolling metric; deduplicate to one row per entity; debug a join that inflated a sum.

**Common traps**: using GROUP BY when you need per-row ranking; letting a one-to-many join fan out and double-count revenue; forgetting that COUNT(column) skips NULLs and that NULLs never satisfy `= value`; confusing RANK (gaps after ties) with DENSE_RANK and ROW_NUMBER.

## Chapter 2: Probability for Interviews
**Core questions**
- What is the sample space, and are these events really independent?
- Is it easier to count the success or its complement?
- What does new information change about the probability?

**Key concepts**: conditional probability, Bayes' rule, independence, complements, expected value, linearity of expectation, variance, the base-rate / false-positive trap, common distributions (Bernoulli, binomial, Poisson, normal).

**Applied skills**: compute the expected number of trials to a stopping condition; apply Bayes to a screening-test scenario; use linearity of expectation to avoid brute force.

**Common traps**: ignoring the base rate so a "99% accurate" test looks decisive when most positives are false; multiplying probabilities of events that are not independent; confusing P(A|B) with P(B|A); forgetting that expectation is linear even when variables are dependent.

## Chapter 3: Statistical Inference and Hypothesis Testing
**Core questions**
- What exactly does this p-value mean, and what does it not mean?
- Am I powered to detect the effect I care about?
- Which error am I trading away when I move the threshold?

**Key concepts**: null and alternative hypotheses, p-value (probability of data this extreme or more, assuming the null is true), significance level alpha, Type I vs Type II error, statistical power = 1 − beta, confidence intervals, the central limit theorem, standard error vs standard deviation.

**Applied skills**: state the correct interpretation of a p-value out loud; explain why a non-significant result is not proof of no effect; reason about how sample size, effect size, and alpha move power.

**Common traps**: reading the p-value as "the probability the null is true" or "the probability the result was a fluke"; treating p > 0.05 as proof of no difference; raising alpha to "find" significance; confusing standard deviation (spread of data) with standard error (spread of the estimate).

## Chapter 4: Supervised Learning Fundamentals
**Core questions**
- Is this a regression, classification, or ranking problem, and what is the label?
- Why is my training score great and my validation score terrible?
- What is leaking from the future into my features?

**Key concepts**: train/validation/test splits, cross-validation, overfitting vs underfitting, the bias-variance tradeoff, regularization (L1/Lasso vs L2/Ridge), data leakage, feature scaling, the role of a strong baseline.

**Applied skills**: diagnose overfitting from a learning curve; pick L1 when you want feature selection; design a split that prevents leakage in time-series or grouped data.

**Common traps**: tuning on the test set; scaling or imputing before the train/test split (leakage); believing more model complexity always helps; thinking Ridge (L2) zeros out coefficients (it shrinks toward zero but Lasso/L1 is the one that hits exactly zero).

## Chapter 5: Classification Metrics and Imbalanced Data
**Core questions**
- What does a false positive cost versus a false negative here?
- Is accuracy lying to me because the classes are imbalanced?
- Where should I set the decision threshold?

**Key concepts**: confusion matrix, precision = TP/(TP+FP), recall/sensitivity = TP/(TP+FN), F1 = harmonic mean of precision and recall = 2PR/(P+R), specificity, ROC and AUC (probability a random positive outranks a random negative), precision-recall curves, threshold tuning, class weighting and resampling (SMOTE).

**Applied skills**: choose precision vs recall for a stated cost structure (fraud, cancer screening, spam); read an AUC; pick PR curves over ROC for heavy imbalance; justify F1 when you need balance.

**Common traps**: optimizing accuracy on a 99%-negative dataset where "always negative" scores 99%; confusing precision (of predicted positives, how many are right) with recall (of actual positives, how many you caught); treating AUC as accuracy; oversampling the majority class instead of the minority.

## Chapter 6: Models and Ensembles
**Core questions**
- Does this method fight bias or fight variance?
- Why would I reach for a tree ensemble over linear or deep models?
- Are my trees built in parallel or in sequence, and why does that matter?

**Key concepts**: linear and logistic regression, decision trees, bagging and random forests (parallel, variance reduction), boosting / gradient boosting / XGBoost (sequential, bias reduction), k-NN, k-means vs supervised methods, the curse of dimensionality, basic neural-network intuition.

**Applied skills**: explain why a random forest reduces variance while gradient boosting reduces bias; pick a model class for tabular vs unstructured data; reason about feature importance and interpretability tradeoffs.

**Common traps**: thinking boosting and bagging do the same thing; saying random forests reduce bias (they reduce variance); confusing k-means (unsupervised clustering) with k-NN (supervised); assuming a deep net beats gradient-boosted trees on small tabular data.

## Chapter 7: Experimentation and A/B Testing
**Core questions**
- What is the unit of randomization, and is it actually independent?
- How big a sample do I need to detect an effect that matters?
- Is this lift real, or novelty, peeking, or a Simpson's-paradox artifact?

**Key concepts**: randomization unit, SUTVA and interference/network effects, minimum detectable effect (MDE), power and sample-size planning, the peeking problem and sequential testing, multiple comparisons and Bonferroni, novelty and primacy effects, Simpson's paradox, variance reduction via CUPED (Controlled-experiment Using Pre-Experiment Data; Deng et al., 2013), guardrail metrics.

**Applied skills**: pick a randomization unit that respects interference (cluster by city for marketplaces); compute the direction of a sample-size change for a smaller MDE; explain why you cannot stop a test the moment it hits p < 0.05.

**Common traps**: treating interacting users as independent samples (SUTVA violation); calling an early peek a win; running 20 metric comparisons and celebrating the one that hit p < 0.05; mistaking a short-lived novelty bump for a durable effect; trusting an aggregate winner that loses in every segment.

## Chapter 8: ML System Design and the Project Story
**Core questions**
- How do I frame a vague product goal as an ML problem with a measurable objective?
- What breaks after the model ships, and how would I know?
- Can I tell a clear story about a project: problem, decisions, tradeoffs, impact?

**Key concepts**: problem framing and objective/metric selection, offline vs online metrics, training-serving skew, data drift vs concept drift, monitoring and retraining triggers, the cold-start problem (content-based features for new items/users), latency and cost tradeoffs, feedback loops, communicating tradeoffs to non-technical stakeholders.

**Applied skills**: design a recommender that handles cold start; specify what to monitor in production and when to retrain; turn a real project into a STAR-style narrative that names the decision and the tradeoff.

**Common traps**: confusing data drift (P(X) shifts) with concept drift (P(Y|X) shifts); optimizing an offline metric that diverges from the business outcome; ignoring training-serving skew; using pure collaborative filtering for brand-new items that have no interaction history; narrating only what you did, never why.

## Capstone
Run a 75-minute mixed interview loop on a single business case (for example, "reduce fraudulent transactions" or "increase content engagement"):
- a SQL query that produces the right metric at the right grain, with one window function
- a hypothesis-test write-up that states the p-value interpretation correctly and names the relevant Type I/II tradeoff
- a model and metric choice justified by the real cost of false positives vs false negatives
- an A/B test design with a defensible randomization unit, an MDE-driven sample-size argument, and at least two guardrail metrics
- a one-paragraph system-design sketch covering monitoring, drift, and cold start
- a two-minute spoken project story (problem, decision, tradeoff, measured impact)

Submit the artifacts plus a short reflection naming the assumption you were least sure about and how you would test it.

## Assessment Ideas
- SQL and probability rounds graded on correctness and on stating assumptions before solving.
- Metric-choice answers graded on whether the cost structure (FP vs FN) actually drives the recommendation.
- A/B design graded on randomization unit, power reasoning, and resistance to peeking/novelty/multiple-comparison traps.
- Capstone graded on accuracy, communication, and the quality of the "what would change my mind" reasoning.

## Research Notes
- Deng, Xu, Kohavi, Walker (2013), "Improving the Sensitivity of Online Controlled Experiments by Utilizing Pre-Experiment Data" (CUPED): https://dl.acm.org/doi/10.1145/2433396.2433413
- Google ML Crash Course — classification metrics (accuracy, precision, recall): https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall
- Wikipedia, F-score (harmonic mean of precision and recall): https://en.wikipedia.org/wiki/F-score
- StatPearls, Type I and Type II Errors and Statistical Power: https://www.ncbi.nlm.nih.gov/books/NBK557530/
- Kohavi, Tang, Xu, "Trustworthy Online Controlled Experiments" (interference, peeking, novelty, Simpson's paradox).
