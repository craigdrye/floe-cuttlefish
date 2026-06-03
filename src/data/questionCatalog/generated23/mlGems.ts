import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

// Floe-generated SHOWCASE ("gems") bank for the Data Science / ML Interview Prep track (topic ML).
// Three chosen chapters, each with concepts that carry a genuine conceptual "aha" plus a lingering
// tension: Module 4: A/B Testing (peeking, randomization unit, Simpson's paradox),
// Module 2: Statistics (base rates, confidence-interval meaning, signal vs noise), and
// Chapter 4: Supervised Learning Fundamentals (leakage, bias-variance, discrimination vs calibration).
// Every item carries `generated: true` (internal provenance flag, never shown to learners) and is
// tagged to an EXACT chapter string from the candidate list.
export const mlGems: Question[] = [
  // ============================================================
  // Module 4: A/B Testing
  // ============================================================
  makeSimpleQuestion(
    10055000,
    'ML',
    'Module 4: A/B Testing',
    'Peeking and the moving finish line',
    "Your dashboard updates live, and you have promised yourself you will ship the moment the test crosses p < 0.05. The treatment is in truth identical to control. Over the run you glance at the result about 20 times and stop the instant you ever see significance. Even though there is no real effect, roughly how often will this habit declare a false winner, and why?",
    "Far more than 5% (empirically around 20 to 40%): each peek is another independent chance for random noise to wander across the threshold, so checking-and-stopping-at-significance compounds the 5% per-look error into a much larger cumulative false-positive rate.",
    [
      ["Exactly 5%, because the 0.05 threshold already fixes the false-positive rate no matter how often you look.", "The 5% guarantee holds only for a single pre-committed look at a fixed sample size; it says nothing about a rule that gets to retry at every peek. Optional stopping is not free.", "The 5% is a per-look budget, not a per-experiment one. Twenty looks spend the budget twenty times over, so the true error balloons."],
      ["0%, because if the treatment truly equals control the p-value can never drop below 0.05.", "P-values fluctuate by chance even under a true null; that is exactly what a 5% false-positive rate means. Random sampling noise will occasionally produce small p-values with no real effect.", "Under the null the p-value is uniform on (0,1), so it dips below 0.05 about 5% of the time per look, and peeking lets you pounce on those dips."],
      ["Switching to a Bayesian 'probability to beat control' stopping rule removes the inflation, so the answer is back down near 5%.", "Stopping the instant a Bayesian metric looks good inflates false positives too; reported runs hit 80%. The leak is the optional-stopping behavior, not the frequentist formula.", "Any rule that lets the outcome decide when to stop reopens the multiple-looks problem. The cure is a fixed horizon or a sequential test with adjusted thresholds, not a change of statistical religion."],
    ],
    "Lesson: A p-value's 5% guarantee is a contract about one pre-committed look, not about a process that keeps looking and stops on success. Each peek is a fresh draw from noise, so optional stopping turns one decision into many and silently inflates the false-positive rate to 20 to 40% (and Bayesian stopping rules leak the same way). This is deep because it shows significance is a property of the experimental procedure, not of the data alone: the same numbers are honest under a fixed-horizon design and a lie under peek-and-pounce. The fixes are a pre-registered sample size or a genuine sequential test whose thresholds are widened to pay for every look.",
    'Floe generated',
    true,
    'Ask how many chances random noise gets to cross the line. One pre-committed look spends a 5% budget once; twenty looks spend it twenty times.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10055001,
    'ML',
    'Module 4: A/B Testing',
    'The unit of randomization sets the unit of trust',
    "You are testing a new comment-ranking algorithm on a discussion forum. You randomize by request: each page load is independently assigned to treatment or control. The metric is per-user engagement. The test shows a clean, significant lift. Why might that lift be untrustworthy, and what is the cleaner design?",
    "A single user sees a mix of treatment and control page loads, so their behavior is contaminated by both arms and the two groups are no longer cleanly separated; randomize by user (cluster on the unit you measure) so each person experiences one consistent condition.",
    [
      ["The design is fine; randomizing at the finest grain (per request) maximizes sample size and therefore statistical power, which only strengthens the result.", "More rows from a leaky unit is precision around a contaminated estimate, not a cleaner answer. Splitting one person across both arms blurs the very contrast you are trying to measure.", "Power is worthless if the comparison is confounded. Match the randomization unit to the analysis unit so each user is fully in one arm."],
      ["The problem is sample size: the test simply needs to run longer until the per-request groups are perfectly balanced.", "Time does not fix a structural leak. Even with infinite requests, the same users keep appearing in both arms, so balance never restores the clean two-group comparison.", "The flaw is the unit, not the duration. Cluster-randomizing by user removes the leakage no matter how long the test runs."],
      ["Switch the metric to per-request engagement so it matches the per-request randomization, and the result becomes valid.", "Aligning the metric to the leaky unit dodges the interference but answers a question nobody asked; a user's overall engagement is the decision metric, and it spans many requests.", "When users interact across requests, the user is the natural independent unit; randomize there rather than redefining success to fit a flawed split."],
    ],
    "Lesson: An experiment is only as clean as its unit of randomization, and that unit must contain all the spillover. When the thing you measure (a user's behavior) spans many things you randomized (individual requests), each subject straddles both arms and the treatment 'leaks' across the boundary, biasing the comparison. The deep point is that the choice of randomization unit silently defines what 'two independent groups' even means: pick too fine a grain and you trade real isolation for the illusion of a larger sample. Cluster randomization (by user, by session cluster, sometimes by region) restores independence by making each subject live entirely in one world.",
    'Floe generated',
    true,
    'Trace one user through the experiment. If a single person experiences both treatment and control, your two groups are not actually separated.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10055002,
    'ML',
    'Module 4: A/B Testing',
    "Simpson's paradox: a win in every segment, a loss overall",
    "A new checkout flow is tested. Among new visitors it converts better than the old flow; among returning visitors it also converts better. Yet the overall conversion rate of the treatment is lower than control. Your colleague says one of the numbers must be a bug. What is actually going on?",
    "It is Simpson's paradox: the treatment happened to draw a larger share of the harder-converting segment (e.g. new visitors), so an unequal mix across groups drags the pooled rate down even though treatment wins inside every segment; the segment-level result is the trustworthy one here.",
    [
      ["One of the rates is computed wrong; it is mathematically impossible to win in every subgroup and lose overall, so recheck the arithmetic.", "It is fully possible and has a name. Pooling weights each subgroup by its size, so different segment mixes in the two arms can reverse the aggregate without any error.", "No arithmetic is broken. A confounding variable (segment mix) differs between arms, which is exactly what produces the reversal."],
      ["The overall number is the only one that matters because it reflects all users, so the new flow is simply worse and should be rejected.", "The aggregate is contaminated by a mix difference between the arms, so it compares apples to a different basket of apples. The within-segment comparisons hold the confounder fixed.", "When a lurking variable is unbalanced across arms, the pooled metric misleads; trust the stratified result or rebalance the mix before pooling."],
      ["Returning visitors are introducing selection bias, so the fix is to drop them and report new visitors only.", "Discarding a real segment throws away valid signal and answers a narrower question; the issue is the unequal weighting between arms, not the existence of the segment.", "The repair is to compare like with like (standardize to a common segment mix or randomize so mixes match), not to delete a population."],
    ],
    "Lesson: Aggregating across groups silently weights each group by its size, so when two arms have different internal mixes, a trend can reverse on pooling, a result that feels paradoxical but is just arithmetic plus a hidden confounder. The lasting lesson is that there is no single 'true' rate floating above the segments; the honest number depends on holding the lurking variable fixed, which is why randomization (to equalize mixes) and segmentation (to expose them) are both essential. A direction that flips when you change the level of aggregation is a signal to find the confounder, not to trust the louder number.",
    'Floe generated',
    true,
    'Ask whether the two arms contain the same mix of easy and hard cases. If the mixes differ, the pooled rate is comparing two different populations.',
    { challengeRating: 6 },
  ),

  // ============================================================
  // Module 2: Statistics
  // ============================================================
  makeSimpleQuestion(
    10055003,
    'ML',
    'Module 2: Statistics',
    'A positive test on a rare disease',
    "A screening test is 99% accurate (99% of sick people test positive, and 99% of healthy people test negative). The disease affects 1 in 1,000 people. A randomly screened patient tests positive. About how likely is it that they actually have the disease, and why does the answer feel so wrong?",
    "Only about 9%: in 100,000 people there are roughly 100 true positives but about 1,000 false positives, so positives are outnumbered ten to one by healthy people, and the rare base rate overwhelms the test's accuracy.",
    [
      ["About 99%, since the test is 99% accurate and the patient tested positive.", "That confuses the test's accuracy (P(positive | sick)) with the answer you want (P(sick | positive)); when the disease is rare, the flood of false positives from the huge healthy majority dominates.", "Count actual people: 100 true positives versus 1,000 false positives means a positive is right only about 1 in 11 times. Accuracy is not predictive value."],
      ["About 50%, because a positive result and a negative result are now equally likely so it is a coin flip.", "The two outcomes are not equally likely; the rare prevalence makes a false positive far more common than a true one, so the post-test probability stays well below 50%.", "Plug in natural frequencies: ~100 sick positives against ~1,000 healthy positives pins the answer near 9%, not 50%."],
      ["You cannot answer without the false-negative rate; the 1% of sick people who test negative is the missing piece.", "The driver is the base rate and the false positives, not the missed sick cases; with 1-in-1,000 prevalence the answer is dominated by the 1,000 false positives among the healthy.", "Sensitivity barely moves the result here because so few people are actually sick; it is the prevalence and specificity acting on the huge healthy group that decide the answer."],
    ],
    "Lesson: P(disease | positive) is not the test's accuracy; it is governed by Bayes' theorem, where the prior prevalence (base rate) weights the evidence. When a condition is rare, even a very specific test produces far more false positives (from the enormous healthy majority) than true positives, so a positive result can leave you more likely healthy than sick. This is deep because it shows evidence is meaningless without a prior: the same '99% accurate' test is nearly conclusive for a common disease and nearly useless for a rare one. Translating percentages into counts of real people (natural frequencies) makes the trap dissolve and is the single best habit for any base-rate question.",
    'Floe generated',
    true,
    'Imagine 100,000 people. Count the true positives among the sick and the false positives among the healthy, then ask which group a positive person probably belongs to.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10055004,
    'ML',
    'Module 2: Statistics',
    'What a 95% confidence interval does not mean',
    "You compute a 95% confidence interval for average revenue per user and get [4.10, 4.90]. A teammate writes in the report: 'There is a 95% probability the true average lies between 4.10 and 4.90.' You wince. What is the precise, correct interpretation, and why is the teammate's version wrong?",
    "The true average is a fixed number, so for this specific interval it is either in [4.10, 4.90] or not; '95% confidence' describes the procedure: if you repeated the sampling many times, about 95% of the intervals it produces would contain the true value.",
    [
      ["The teammate is essentially right; '95% confidence' and '95% probability the parameter is inside' are two phrasings of the same statement.", "In frequentist statistics the parameter is not random, so it cannot have a 95% probability of being anywhere; only the interval is random. The probability lives in the method, not in this one realized interval.", "The 95% attaches to the long-run hit rate of the procedure, not to a chance that a fixed constant fell inside one fixed interval."],
      ["It means 95% of users have revenue between 4.10 and 4.90.", "That describes the spread of individuals, which is a prediction interval idea; a confidence interval is about the uncertainty in the estimate of the mean, not the range of raw data.", "The interval bounds the plausible location of a single summary parameter (the mean), not where most individual observations fall."],
      ["It means if you collected more data, the new sample mean would land in [4.10, 4.90] 95% of the time.", "A confidence interval is not a forecast for the next sample's point estimate; it is a statement about how often such intervals capture the fixed true parameter across repetitions.", "The 95% refers to coverage of the true mean by the random interval, not to where a future estimate will sit."],
    ],
    "Lesson: A confidence level is a property of the interval-making procedure, not a probability statement about one interval you already computed. Because the parameter is treated as a fixed (if unknown) constant, this particular [4.10, 4.90] either contains it or does not; the 95% is the long-run fraction of such intervals that would cover the truth if you repeated the experiment. The lingering tension is that the natural, useful-sounding sentence ('95% chance the mean is in here') is precisely the Bayesian credible-interval claim, which requires a prior, and is exactly what the frequentist interval refuses to say. Knowing which question you are answering, and not smuggling in the wrong one, is the heart of statistical honesty.",
    'Floe generated',
    true,
    "Ask what is random and what is fixed. The parameter is fixed; the interval is what changes from sample to sample, so the 95% must describe the interval-making process.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10055005,
    'ML',
    'Module 2: Statistics',
    'Standard deviation versus standard error',
    "You survey 400 users and find an average session length of 30 minutes with a sample standard deviation of 20 minutes. To put error bars on your estimate of the population mean, a colleague reaches for plus-or-minus 20 minutes. What quantity should actually set the width, and what is the conceptual difference?",
    "Use the standard error, about 20 / sqrt(400) = 1 minute: the standard deviation describes the spread of individual users, while the standard error describes the uncertainty in the estimated mean, which shrinks as the sample grows.",
    [
      ["Plus-or-minus 20 minutes is correct; the standard deviation is the natural measure of how uncertain any statistic from the data is.", "The standard deviation measures variability among individuals and does not shrink with more data; uncertainty about the mean does shrink, which is why you divide by the square root of n.", "Spread of people and precision of an average are different things. Error bars on the mean use the standard error, here about 1 minute."],
      ["Neither; with 400 users the sample is large enough that the uncertainty in the mean is effectively zero, so no error bars are needed.", "Uncertainty shrinks but never vanishes at finite n; the standard error is small (about 1 minute) but real, and reporting an estimate without it overstates certainty.", "Large samples make the standard error small, not zero. Report it (~1 minute) rather than dropping the error bar entirely."],
      ["Use the full 20-minute standard deviation but multiply by sqrt(400) to scale it up to the whole population.", "Multiplying by the square root of n inflates the uncertainty in the wrong direction; gathering more data should make the mean more precise, so you divide by sqrt(n), not multiply.", "More data tightens the estimate of the mean. The standard error is the standard deviation divided by sqrt(n), which decreases as n grows."],
    ],
    "Lesson: Standard deviation and standard error answer different questions, and conflating them is one of the most common ways estimates get over- or under-stated. The standard deviation is a fixed feature of the population describing how much individuals vary; it does not change as you collect more data. The standard error is the standard deviation of the sampling distribution of the mean (sigma / sqrt(n)), and it shrinks toward zero as the sample grows. The deep idea is the central limit theorem hiding underneath: averaging many noisy individuals yields an estimate that is far more stable than any one of them, which is precisely why an average of 400 users can be known to the minute even when users themselves scatter by 20 minutes.",
    'Floe generated',
    true,
    'Ask whether you are describing how much people differ from each other, or how precisely you know their average. Only the second one divides by the square root of the sample size.',
    { challengeRating: 5 },
  ),

  // ============================================================
  // Chapter 4: Supervised Learning Fundamentals
  // ============================================================
  makeSimpleQuestion(
    10055006,
    'ML',
    'Chapter 4: Supervised Learning Fundamentals',
    'The leak that lives in your preprocessing',
    "You standardize all your features (subtract the mean, divide by the standard deviation) on the full dataset, then split into train and test sets, fit a model, and report a beautiful test accuracy. A reviewer says your evaluation is optimistically biased even though the model never saw the test labels. Where is the leak?",
    "The scaler was fit on the whole dataset, so the mean and standard deviation it used already absorbed information from the test rows; the model is evaluated on data whose summary statistics it implicitly saw, so the fix is to fit the scaler on train only and apply it to test.",
    [
      ["There is no leak: scaling uses only the feature values, never the labels, so it cannot inflate accuracy.", "Leakage is any flow of information from test to training, not just labels. The test features shaped the mean and standard deviation used to transform the training data, which is enough to bias the estimate.", "Any test-derived quantity touching the training pipeline is a leak; fitting the scaler before the split lets test feature statistics seep in."],
      ["The leak is using standardization at all; tree-based models do not need scaling, so removing it solves the problem.", "Whether the model needs scaling is beside the point; the bug is the order of operations (fit before split), and the same leak would occur with imputation or encoding fit on all rows.", "The fix is to move every fitted transform inside the training fold, not to abandon preprocessing. Leakage is about sequencing, not about scaling specifically."],
      ["The leak is that the test set is too small to estimate accuracy, so the fix is a larger test set.", "Test-set size affects variance, not this bias; even an enormous test set stays contaminated if its statistics leaked into the transform applied to training.", "Bigger test sets reduce noise but cannot undo information that already flowed backward; you must fit preprocessing on train only."],
    ],
    "Lesson: Data leakage is any path by which information from the evaluation data reaches the model before evaluation, and the most insidious cases hide in preprocessing rather than in features. Fitting a scaler, imputer, or encoder on the full dataset lets the test set's statistics shape the transform applied to training, so your reported score is rosier than reality. The deep principle is that the split must come first and the entire fitting pipeline must live strictly downstream of it (ideally inside each cross-validation fold), because the test set must be treated as data that does not yet exist. Honest evaluation is less about the model and more about disciplined sequencing of what learns from what.",
    'Floe generated',
    true,
    'Ask what the scaler learned and from which rows. If the test rows helped compute the mean and standard deviation, information has already flowed backward.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10055007,
    'ML',
    'Chapter 4: Supervised Learning Fundamentals',
    'Why adding features can make the model worse',
    "On a fixed 5,000-row dataset, you keep adding features to a flexible model. Training error keeps dropping toward zero, but validation error falls, bottoms out, and then starts climbing. Your manager asks why a richer model trained on the same data could possibly perform worse on new data. What is the explanation?",
    "Bias-variance tradeoff: extra capacity lets the model fit noise specific to the training sample (variance) rather than the underlying signal, so even as bias and training error fall, generalization error rises once added flexibility buys more variance than it removes bias.",
    [
      ["The model is underfitting; the climbing validation error means it needs even more features and capacity to capture the pattern.", "Underfitting shows as high error on both training and validation. Here training error is near zero while validation error rises, which is the signature of overfitting, the opposite problem.", "When training error falls but validation error climbs, the model is memorizing noise; the cure is less flexibility or more data, not more features."],
      ["More features always help in principle; the rising validation error must be a bug in the validation split, since extra information cannot hurt.", "Extra information can hurt generalization when data is finite: each added feature gives the model another way to fit sample-specific noise, inflating variance even if it is harmless in the infinite-data limit.", "With limited rows there is a real tradeoff; capacity that outruns the data degrades out-of-sample performance even with a correct split."],
      ["The features are simply leaking the target, which is why training error hits zero and validation error rises.", "Leakage would tend to make validation error look too good, not worse; a near-zero train error with worsening validation is the classic overfitting curve, not a leak.", "The U-shaped validation curve is the bias-variance signature; leakage produces optimistic, not pessimistic, validation scores."],
    ],
    "Lesson: Generalization error decomposes into bias (error from too-simple assumptions) and variance (sensitivity to the particular training sample), and added model capacity trades one for the other. With a fixed, finite dataset, past a certain point each new feature or parameter lets the model chase noise that will not recur, so validation error traces a U: it improves while you are still reducing bias, then worsens once you are mostly adding variance. The lasting insight is that fit-to-the-training-data and fit-to-the-world are different objectives that diverge precisely when a model is most impressive on paper, which is why a held-out signal, regularization, or simply more data, not more flexibility, is the right lever near the bottom of the U.",
    'Floe generated',
    true,
    'Watch the two curves separately. Training error near zero with validation error rising is overfitting (high variance), not a model that needs more power.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    10055008,
    'ML',
    'Chapter 4: Supervised Learning Fundamentals',
    'A model that ranks well but lies about probabilities',
    "Your risk model has an excellent ROC AUC of 0.90, so you set a treatment policy to act whenever its predicted probability exceeds 20%. An audit finds that among cases the model scored '20% risk,' the actual event rate is 40%, so you are treating far fewer people than you should. How can a high-AUC model be this wrong about probabilities?",
    "AUC measures only discrimination (whether the model ranks positives above negatives), not calibration (whether a predicted 20% means a real 20%); a model can order cases perfectly yet output systematically miscalibrated probabilities, so thresholding on its raw score misleads.",
    [
      ["A 0.90 AUC is impossible to reconcile with miscalibration; one of the two numbers must be measured incorrectly.", "Discrimination and calibration are genuinely separate properties; a model can rank cases well while its probability scale is shifted or squashed, so both numbers can be right at once.", "High AUC plus poor calibration is a known, common combination; the fix is to recalibrate the scores, not to assume a measurement error."],
      ["The AUC is too optimistic; lowering it by retraining on more data will automatically fix the probability calibration.", "More data may improve both, but a higher-AUC model is not inherently better calibrated; ranking ability and probability accuracy do not move in lockstep.", "Calibration must be addressed directly (e.g. Platt scaling or isotonic regression); chasing AUC does not guarantee trustworthy probabilities."],
      ["The threshold should just be lowered to 10% to compensate, and the calibration issue can be ignored.", "Nudging one threshold patches a single operating point while leaving the whole probability scale untrustworthy; every other decision built on these probabilities stays wrong.", "If decisions depend on probabilities (expected cost, prioritization), recalibrate the scores so they mean what they say, rather than hand-tuning one cutoff."],
    ],
    "Lesson: A model can be excellent at ranking and still be wrong about magnitudes, because discrimination (AUC: are positives scored above negatives?) and calibration (does a predicted 20% occur 20% of the time?) are independent virtues. If your decisions only need an ordering (who is riskiest first), AUC is enough; but the moment a probability feeds a threshold, an expected-cost calculation, or a price, calibration is what matters, and a high AUC offers no guarantee of it. The deep tension is that the metric everyone quotes answers a different question than the one the deployed policy actually asks, which is why calibration plots and recalibration methods (Platt, isotonic) belong in any evaluation where the numbers, not just the ranking, drive action.",
    'Floe generated',
    true,
    'Separate two questions: does the model put riskier cases above safer ones (AUC), and does a predicted 20% actually happen 20% of the time (calibration)? A policy threshold depends on the second.',
    { challengeRating: 6 },
  ),
]
