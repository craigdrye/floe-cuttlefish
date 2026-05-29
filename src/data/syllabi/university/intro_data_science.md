# Introduction to Data Science
**ID**: `introDataScience` - **Discipline**: Technology - **Year**: University Freshman / High School Senior

## Course Aim
This course gives students practical, defensible fluency with the full data science workflow: ask a sharp question, acquire and clean real data, explore it honestly, reason about uncertainty, build a simple model when one is warranted, and ship a reproducible artifact that someone else can rerun. The throughline is a single discipline rarely taught alongside the tools: separating what the data shows from what we wish it showed. Students leave able to defend every claim they make, name the limits of every chart, and explain why a number is what it is.

The toolkit is deliberately modern and modest: Python, Jupyter, Pandas, NumPy, SQL, matplotlib/seaborn, and the introductory statistics needed to test a claim and report an honest interval. We treat tools as instruments, not destinations. A student who can call `.groupby()` but cannot say what grain the result is at, or who can run a t-test but cannot explain what a p-value does and does not mean, has not yet done data science. The course repeatedly forces the harder skill: interpretation under uncertainty.

Equally central is craft that survives contact with reality: readable code, documented assumptions, versioned work, and audience-aware communication. Reproducibility and ethics are not a final-week appendix here. They are threaded through every lab, because a result no one can rerun and no one can trust is not a result. By the end, each student owns a portfolio project that demonstrates the whole arc from question to honest conclusion.

## Course Design Notes
This is a hands-on lab course with short seminars for concepts and ethics. Route questions here when students need beginner-to-intermediate data analysis: Python and Jupyter notebooks, Pandas wrangling and cleaning, exploratory data analysis and visualization, statistical reasoning and A/B testing, SQL and relational data, introductory supervised machine learning, and reproducible, ethical project work. Emphasize concept-first reasoning, clear claims, versioned work, and portfolio outputs over memorizing API trivia. Where a question tests "which function" rather than "what does this result mean," prefer the meaning. Statistics content overlaps with AP Statistics but is framed for applied analysis (study design, denominators, intervals, practical vs. statistical significance) rather than exam-rubric computation. The capstone is the spine of the course; every chapter produces a component of it.

## Chapter 1: Data Questions, Notebooks, and the Workflow
- **Core questions**: What turns a vague curiosity into a measurable data question? What is the unit of analysis, and why does naming it first prevent most downstream errors? What makes a notebook genuinely reproducible rather than merely re-runnable on one laptop?
- **Key concepts**: The data science lifecycle (question, acquire, clean, explore, model, communicate); operationalizing a question into measurable variables; unit of analysis and observational unit; the tidy-data standard (each variable a column, each observation a row, each observational unit a table); Jupyter notebooks, code vs. Markdown cells, kernel state, and the computational narrative.
- **Applied skills**: Convert a fuzzy prompt ("are our users happy?") into a measurable question with a named population, metric, and comparison. Build a starter notebook with a research question, dataset description, file inventory, and environment notes. Restart-and-run-all to prove the narrative executes top to bottom.
- **Common traps**: Confusing the unit of analysis (e.g., analyzing per-transaction data to answer a per-customer question); hidden out-of-order execution where a notebook only "works" because of stale kernel state; treating a question as answerable before defining the metric; calling reshaped-but-still-messy data "tidy."

## Chapter 2: Python for Data Work
- **Core questions**: When should a value live in a list, a dictionary, or a NumPy array? Why is vectorized computation usually both faster and clearer than a Python loop? How do you read a traceback to find the actual cause rather than the symptom line?
- **Key concepts**: Values and types, mutability, lists, dictionaries, control flow, functions and arguments, imports and namespaces, exceptions and tracebacks, NumPy arrays, dtypes, broadcasting, and vectorization.
- **Applied skills**: Write a small, tested function that cleans a single value (trim, parse, validate, default). Replace a loop with a vectorized NumPy/Pandas expression. Read a traceback bottom-up to locate the failing call and the type that caused it.
- **Common traps**: Mutating a default mutable argument or a list while iterating over it; integer-vs-float and string-vs-numeric type confusion that silently corrupts arithmetic; reading only the last line of a traceback; assuming `==` on floats is exact; off-by-one and copy-vs-view surprises in array slicing.

## Chapter 3: Pandas Wrangling and Data Cleaning
- **Core questions**: What is the grain of this DataFrame, and did a merge change it? Is a missing value missing at random, or does its absence carry information? Why did the row count change after a join, and is that a bug or expected?
- **Key concepts**: Series and DataFrames, the index, label vs. position selection (`.loc`/`.iloc`), filtering and assignment, dtypes and `astype`, missingness (`NaN`, `dropna`, `fillna`), duplicates, string and datetime methods, `groupby`-aggregate, and the four join types with their cardinality effects.
- **Applied skills**: Diagnose and fix a mistyped column; quantify and visualize missingness before deciding how to handle it; choose a correct join key and verify row counts before and after; produce a `groupby` summary and state its grain in words.
- **Common traps**: Chained-assignment / `SettingWithCopyWarning` that fails to actually modify the frame; many-to-many joins silently fanning out rows; filling missing values with a mean that distorts a skewed distribution; `groupby` that drops `NaN` keys without the analyst noticing; assuming a merge is one-to-one without checking key uniqueness.

## Chapter 4: Exploratory Data Analysis and Visualization
- **Core questions**: Which chart actually answers this question, and which one just looks impressive? When is an apparent pattern an artifact of binning, scale, or a missing denominator? How do you distinguish a visible association from a causal claim?
- **Key concepts**: Descriptive statistics (center, spread, shape), distributions, skew and outliers, the median-vs-mean choice, correlation, stratification and comparison groups, visual encoding, chart selection, matplotlib/seaborn mechanics, accessibility, and the anatomy of a misleading graph.
- **Applied skills**: Match a question to a plot type (histogram, box plot, scatter, small multiples); read a box plot and a histogram correctly; stratify to check whether a pooled trend holds within groups; write an EDA report with purposeful visualizations, takeaways, and explicit limitations.
- **Common traps**: Truncated or dual y-axes that exaggerate effects; raw counts where a rate is needed (no denominator); reporting a mean for a skewed distribution; reading correlation as causation; over-binned or under-binned histograms hiding the real shape; conflating "no visible pattern" with "no effect."

## Chapter 5: Statistical Reasoning and A/B Testing
- **Core questions**: What does a p-value actually quantify, and what does it not? When is a statistically significant difference not practically meaningful? Why can a treatment look beneficial overall yet harmful within every subgroup (Simpson's paradox)?
- **Key concepts**: Populations and samples, sampling bias, random assignment vs. random sampling, sampling distributions, confidence intervals, null hypotheses, p-values, effect size, statistical power, multiple comparisons, practical significance, and A/B test design.
- **Applied skills**: State a p-value's meaning in one honest sentence; design a simple experiment with a hypothesis, primary metric, assignment logic, and success threshold; compute and interpret a confidence interval; judge whether an observed difference is large enough to act on.
- **Common traps**: Reading a p-value as the probability the null is true, or as effect size; "p-hacking" via many comparisons without correction; peeking and stopping a test early when it looks significant; confusing confidence-interval coverage with a probability about the parameter; ignoring practical significance once a result is "significant"; pooling groups and falling into Simpson's paradox.

## Chapter 6: SQL and Relational Data
- **Core questions**: At what grain does this query return rows, and is that the grain the question needs? Why did a join inflate the totals? Which rows does a `WHERE` filter on a `LEFT JOIN`ed column quietly drop?
- **Key concepts**: Tables, rows, columns, primary and foreign keys, `SELECT`/`WHERE`/`GROUP BY`/`HAVING`/`ORDER BY`, the four join types, common table expressions (CTEs), query grain, three-valued logic and `NULL` handling, aggregation, and metric denominators.
- **Applied skills**: Translate an analysis question into SQL and state its grain before reading results; diagnose a duplicated-row join and fix the key; use a CTE to make a multi-step query readable; pull relational data into Pandas and reconcile a SQL `GROUP BY` against a Pandas `groupby`.
- **Common traps**: `COUNT(*)` inflated by a fan-out join; `WHERE` vs. `HAVING` confusion; `NULL` comparisons returning unknown so rows vanish (`= NULL` instead of `IS NULL`); a `WHERE` clause on a right-table column turning a `LEFT JOIN` into an `INNER JOIN`; averaging pre-aggregated averages and losing the true denominator.

## Chapter 7: Machine Learning Basics
- **Core questions**: How do you split data so your evaluation is honest? Which metric matches the cost of the mistake you actually care about? Where could information from the future or the target leak into your features?
- **Key concepts**: Supervised vs. unsupervised learning, features and labels, train/validation/test splits, baseline models, linear and logistic regression, k-nearest neighbors, bias-variance and overfitting, data leakage, and classification metrics (accuracy, precision, recall, the precision-recall tradeoff, confusion matrix).
- **Applied skills**: Split data and fit any scaler or imputer on the training set only (ideally inside a pipeline); build and beat a sensible baseline; choose a metric justified by the decision (e.g., recall for screening); interpret a logistic-regression coefficient or a kNN decision in plain language; do basic error analysis.
- **Common traps**: Fitting preprocessing on the full dataset before splitting (leakage); using accuracy on an imbalanced dataset; including a feature that encodes the label or future information; tuning on the test set; reporting a model without a baseline; reading correlation in coefficients as causation; mistaking memorization (overfit) for skill.

## Chapter 8: Reproducibility, Ethics, and Portfolio Communication
- **Core questions**: Could a stranger clone this repo and reproduce every figure? What in this dataset could harm a real person, and who is missing from it? Where did this analysis overclaim, and how should the claim be softened to match the evidence?
- **Key concepts**: Project structure and READMEs, pinned dependencies (`requirements.txt`/environment files), random seeds, version control and meaningful commits, data and code citation, privacy and consent, re-identification risk, sampling and labeling bias, fairness, data retention, responsible visualization, and audience-aware writing.
- **Applied skills**: Refactor a messy repo into a documented, runnable project with pinned dependencies and a seed; identify privacy and re-identification risks and propose mitigations; audit a dataset for who is under- or unrepresented; rewrite an overconfident conclusion into a calibrated one with stated limitations.
- **Common traps**: "Works on my machine" repos with unpinned versions and absolute paths; unset seeds making results non-reproducible; treating anonymized data as risk-free when quasi-identifiers enable re-identification; assuming a model is fair because it never sees a protected attribute (proxy variables); burying limitations or omitting them from the public summary.

## Capstone
Students complete a full data science portfolio project on a real or instructor-approved dataset, demonstrating the whole arc rather than any single tool. The deliverable must include: a sharp, operationalized question with a named unit of analysis; data acquisition and provenance notes; a reproducible cleaning notebook with a data dictionary and documented decisions; an EDA report with purposeful, honest visualizations and stated limitations; at least one SQL or relational component with its grain explained; statistical reasoning or a designed A/B test with an uncertainty statement; a simple predictive model with a baseline, leakage check, and justified metric where one is warranted (or a clear argument for why modeling is inappropriate); reproducibility materials (README, pinned dependencies, seed, version history); an ethics and limitations reflection covering privacy, bias, and what the result does not prove; and a concise, audience-aware presentation that visibly separates evidence from speculation. Grading rewards defensible claims and honest uncertainty over the most impressive-looking result.

## Assessment Ideas
- Weekly notebook labs checked for executable, restart-and-run-all code, readable comments, and clear interpretation.
- Data cleaning and SQL drills with hidden edge cases (duplicate keys, `NULL`s, mistyped columns) that punish unverified assumptions.
- EDA critiques focused on chart choice, denominators, stratification, and uncertainty rather than aesthetics.
- An A/B testing memo graded on design logic and honest uncertainty, not just whether the arithmetic is right.
- A modeling card requiring a baseline, a leakage check, and a metric justified by the decision the model supports.
- Final portfolio review using a rubric weighting reproducibility, ethics, communication, and technical correctness equally.

## Research Notes
- Data 8, Foundations of Data Science (UC Berkeley): https://www.data8.org/
- ACM Data Science Task Force curriculum materials: https://dstf.acm.org/
- ASA Guidelines for Assessment and Instruction in Statistics Education (GAISE): https://www.amstat.org/asa/education/Guidelines-for-Assessment-and-Instruction-in-Statistics-Education-Reports.aspx
- Wickham, "Tidy Data," Journal of Statistical Software, 2014: https://www.jstatsoft.org/v59/i10/
- Jupyter Project documentation: https://docs.jupyter.org/
- Pandas documentation: https://pandas.pydata.org/docs/
- scikit-learn user guide and common pitfalls (data leakage): https://scikit-learn.org/stable/common_pitfalls.html
