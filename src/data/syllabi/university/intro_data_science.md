# Introduction to Data Science
**ID**: `introDataScience` - **Discipline**: Technology - **Year**: University Freshman / High School Senior

## Course Aim
Give students practical fluency with the data science workflow: ask a question, acquire and clean data, explore patterns, test claims, build simple models, communicate uncertainty, and ship a reproducible portfolio artifact. The course uses Python, Jupyter, Pandas, SQL, visualization, and introductory statistics without pretending that tool use is the same thing as evidence.

## Course Design Notes
This is a hands-on lab course with short seminars for concepts and ethics. Route questions here when students need beginner data analysis, Python notebooks, Pandas wrangling, exploratory data analysis, A/B testing, basic machine learning, SQL, reproducible projects, or responsible data practice. Emphasize readable code, clear claims, versioned work, and portfolio outputs over memorizing API trivia.

## Chapter 1: Data Questions, Notebooks, and the Workflow
- **Key concepts**: Data science lifecycle, question framing, units of analysis, variables, datasets, tidy data, Jupyter notebooks, Markdown cells, code cells, computational narratives, and reproducibility.
- **Practice questions**: Convert a vague curiosity into a measurable data question; identify the observation unit in a dataset; explain what makes a notebook reproducible.
- **Student output**: A starter notebook with a research question, dataset description, file inventory, environment notes, and first observations.

## Chapter 2: Python for Data Work
- **Key concepts**: Values, types, lists, dictionaries, control flow, functions, imports, errors, NumPy arrays, vectorization, and basic debugging habits.
- **Practice questions**: Write a function that cleans a single value; choose between a list, dictionary, and array; interpret a traceback from a failed notebook cell.
- **Student output**: A small Python utility notebook that loads data, validates inputs, and documents assumptions in plain language.

## Chapter 3: Pandas Wrangling and Data Cleaning
- **Key concepts**: Series, DataFrames, indexing, filtering, sorting, assigning columns, missing values, duplicates, data types, string methods, dates, groupby, aggregation, joins, and data provenance.
- **Practice questions**: Fix a column type; summarize missingness; choose a join key; explain why row counts changed after a merge.
- **Student output**: A cleaned dataset with a reproducible cleaning notebook, a data dictionary, and a short note on remaining data quality risks.

## Chapter 4: Exploratory Data Analysis and Visualization
- **Key concepts**: Descriptive statistics, distributions, outliers, correlation, stratification, comparison groups, matplotlib, seaborn, chart choice, visual encoding, accessibility, and misleading graphs.
- **Practice questions**: Select a plot for a question; interpret a box plot or histogram; distinguish a visible pattern from a causal claim.
- **Student output**: An EDA report with at least five purposeful visualizations, written takeaways, and explicit limitations.

## Chapter 5: Statistical Reasoning and A/B Testing
- **Key concepts**: Sampling, random assignment, sampling bias, confidence intervals, p-values, null hypotheses, effect sizes, power, multiple comparisons, A/B tests, practical significance, and Simpson's paradox.
- **Practice questions**: Explain a p-value without overclaiming; design a simple experiment; decide whether an observed difference is practically meaningful.
- **Student output**: An A/B testing memo with hypothesis, metric, assignment logic, analysis, uncertainty statement, and recommendation.

## Chapter 6: SQL and Relational Data
- **Key concepts**: Tables, rows, columns, primary keys, foreign keys, SELECT, WHERE, GROUP BY, HAVING, ORDER BY, joins, CTEs, query grain, NULLs, and metric denominators.
- **Practice questions**: Translate an analysis question into SQL; diagnose a duplicated join; compare SQL aggregation with Pandas groupby.
- **Student output**: A query notebook that pulls relational data into Pandas and explains the grain and joins before analysis.

## Chapter 7: Machine Learning Basics
- **Key concepts**: Supervised and unsupervised learning, features, labels, train-test split, baseline models, linear regression, logistic regression or k-nearest neighbors, model evaluation, overfitting, leakage, accuracy, precision, recall, and interpretability.
- **Practice questions**: Split data correctly; choose an evaluation metric; identify leakage; interpret a simple model's coefficients or errors.
- **Student output**: A beginner modeling card with dataset, target, features, baseline, evaluation results, error analysis, and limits of use.

## Chapter 8: Reproducibility, Ethics, and Portfolio Communication
- **Key concepts**: File organization, README files, requirements files, random seeds, version control, citations, privacy, consent, bias, fairness, data retention, responsible visualization, and audience-aware communication.
- **Practice questions**: Improve a messy project repository; identify privacy risks in a dataset; revise an overconfident model claim.
- **Student output**: A polished portfolio project with notebook, README, data documentation, ethical risk note, and concise public-facing summary.

## Capstone
Students complete a full data science portfolio project using a real or instructor-approved dataset. The project must include question framing, data acquisition notes, cleaning, EDA, at least one SQL or relational component, statistical reasoning or A/B test design, a simple predictive model if appropriate, reproducibility materials, ethics reflection, and a presentation that separates evidence from speculation.

## Assessment Ideas
- Weekly notebook labs checked for executable code, readable comments, and clear interpretation.
- Short data cleaning and SQL drills with hidden edge cases.
- EDA critiques focused on chart choice, denominators, and uncertainty.
- A/B testing memo graded on design logic rather than just calculation.
- Portfolio review using a rubric for reproducibility, ethics, communication, and technical correctness.

## Research Notes
- Data 8, Foundations of Data Science: https://www.data8.org/
- ACM Data Science Task Force curriculum materials: https://dstf.acm.org/
- American Statistical Association, Guidelines for Assessment and Instruction in Statistics Education: https://www.amstat.org/asa/education/Guidelines-for-Assessment-and-Instruction-in-Statistics-Education-Reports.aspx
- Jupyter Project documentation: https://docs.jupyter.org/
- Pandas documentation: https://pandas.pydata.org/docs/
- scikit-learn user guide: https://scikit-learn.org/stable/user_guide.html
