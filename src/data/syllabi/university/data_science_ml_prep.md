# Data Science / ML Interview Prep
**ID**: `ml` - **Discipline**: Technology - **Year**: University Senior / Career Hopper

## Course Aim
Prepare students and career changers to handle data science and machine learning interviews by building practical fluency across the full data workflow: framing a problem, gathering and cleaning data, writing Python and SQL, reasoning statistically, training simple models, evaluating results, explaining tradeoffs, and recognizing ethical risks. The course treats interview preparation as portfolio preparation: every technical idea becomes a small artifact students can discuss clearly under pressure.

## Course Design Notes
This is a career-prep studio with short concept briefings, coding drills, case discussions, and project sprints. Route questions here when students need data science interview prep, ML fundamentals, statistics review, Pandas practice, SQL analysis, model evaluation, take-home project coaching, product experiment design, or responsible AI discussion. Emphasize clear reasoning, reproducible notebooks, defensible assumptions, and concise communication over memorized API trivia.

## Chapter 1: Data Workflow and Problem Framing
- **Key concepts**: Data science lifecycle, stakeholder questions, units of analysis, target variables, features, baselines, data provenance, reproducibility, project scoping, and technical storytelling.
- **Practice questions**: Turn a vague product question into an analysis plan; identify the observation unit in a dataset; explain how a baseline changes the meaning of model performance.
- **Student output**: A project brief with question, success metric, dataset inventory, assumptions, risks, and a short plan for analysis.

## Chapter 2: Python, Notebooks, and Pandas Fluency
- **Key concepts**: Jupyter notebooks, Python data types, functions, imports, error handling, NumPy arrays, Pandas DataFrames, filtering, sorting, grouping, merging, missing values, dates, strings, and readable notebook structure.
- **Practice questions**: Clean a messy column; write a function for repeatable preprocessing; explain why a merge changed row counts; debug a failed notebook cell.
- **Student output**: A reproducible cleaning notebook that loads raw data, validates key columns, documents transformations, and exports an analysis-ready dataset.

## Chapter 3: SQL and Relational Data for Analysts
- **Key concepts**: Tables, rows, columns, primary keys, foreign keys, query order, SELECT, WHERE, JOIN, GROUP BY, HAVING, CTEs, window functions, NULLs, grain, and metric denominators.
- **Practice questions**: Write a query for top customers by month; diagnose duplicate rows after a join; calculate a rolling average; explain when to use SQL before Pandas.
- **Student output**: A query set with staged CTEs, at least one join, one aggregation, one window function, and plain-language notes about grain and assumptions.

## Chapter 4: Probability and Statistical Reasoning
- **Key concepts**: Random variables, conditional probability, Bayes' theorem, distributions, expectation, variance, covariance, correlation, sampling, confidence intervals, hypothesis tests, p-values, effect sizes, statistical power, and Type I and Type II errors.
- **Practice questions**: Explain the central limit theorem to a nontechnical teammate; choose a test for two groups; compute and interpret a confidence interval; separate correlation from causation.
- **Student output**: A statistics memo that summarizes a dataset, states uncertainty clearly, runs one appropriate test or interval estimate, and explains limitations.

## Chapter 5: Exploratory Analysis and Product Experiments
- **Key concepts**: Exploratory data analysis, chart choice, segmentation, outliers, cohorts, funnels, A/B testing, randomization, guardrail metrics, minimum detectable effect, experiment duration, novelty effects, interference, and Simpson's paradox.
- **Practice questions**: Diagnose a drop in daily active users; design an experiment for a recommendation change; choose guardrail metrics; identify a misleading visualization.
- **Student output**: An experiment design brief with hypothesis, users, treatment, primary metric, guardrails, analysis plan, risks, and a decision rule.

## Chapter 6: Machine Learning Foundations
- **Key concepts**: Supervised learning, unsupervised learning, features, labels, train-test split, cross-validation, leakage, overfitting, underfitting, bias-variance tradeoff, linear regression, logistic regression, decision trees, random forests, gradient boosting, k-means, and PCA.
- **Practice questions**: Choose a model for a small tabular dataset; identify leakage in a feature list; explain regularization; compare an interpretable baseline with a more complex model.
- **Student output**: A modeling notebook with a baseline, one or two candidate models, documented feature choices, reproducible splits, and a concise explanation of model tradeoffs.

## Chapter 7: Evaluation, Error Analysis, and Communication
- **Key concepts**: Accuracy, precision, recall, F1, ROC AUC, PR AUC, log loss, RMSE, MAE, calibration, confusion matrices, threshold selection, class imbalance, subgroup performance, residual analysis, model cards, and interview communication.
- **Practice questions**: Pick a metric for fraud detection; explain why accuracy can fail; tune a classification threshold; interpret errors for a stakeholder.
- **Student output**: An evaluation report with metrics, confusion matrix or residual analysis, subgroup checks, threshold recommendation, and a short model card.

## Chapter 8: Ethics, Deployment Basics, and Interview Readiness
- **Key concepts**: Privacy, consent, bias, fairness, explainability, data retention, model monitoring, data drift, concept drift, batch scoring, online prediction, feature stores, model registries, take-home assignment structure, portfolio polish, and behavioral interview framing.
- **Practice questions**: Identify ethical risks in a dataset; explain how to monitor a deployed model; outline a take-home project README; answer a tradeoff question using evidence.
- **Student output**: A final interview packet with project README, ethics note, model summary, selected code excerpts, and concise talking points for technical and behavioral interviews.

## Capstone
Students complete an end-to-end data science or machine learning interview project using a real or instructor-approved dataset. The capstone must include problem framing, data cleaning, SQL or relational analysis, exploratory analysis, statistical reasoning, at least one machine learning model when appropriate, evaluation and error analysis, ethical risk review, reproducibility materials, and a presentation that explains both results and tradeoffs.

## Assessment Ideas
- Weekly coding drills in Python, Pandas, SQL, and statistics with short written explanations.
- Notebook reviews for reproducibility, clear assumptions, clean code, and meaningful interpretation.
- Mock interview prompts covering probability, ML concepts, product experiments, and model evaluation.
- Take-home project checkpoints for scoping, cleaning, modeling, communication, and ethics.
- Final portfolio review using a rubric for technical correctness, evidence quality, communication, and readiness for live discussion.

## Research Notes
- Data 8, Foundations of Data Science: https://www.data8.org/
- Pandas documentation: https://pandas.pydata.org/docs/
- scikit-learn user guide: https://scikit-learn.org/stable/user_guide.html
- Jupyter Project documentation: https://docs.jupyter.org/
- Mode SQL tutorial: https://mode.com/sql-tutorial/
- PostgreSQL documentation: https://www.postgresql.org/docs/
