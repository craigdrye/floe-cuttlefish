# Data Science / ML Interview Prep
**ID**: `ml` · **Discipline**: Technology · **Year**: University Senior / Career Hopper

## Course Philosophy
This course prepares candidates for rigorous technical interviews in Data Science and Machine Learning. It bridges theoretical statistics with applied coding (Python/SQL) and emphasizes product sense and experimental design (A/B testing).

## Module 1: SQL and Data Manipulation (20%)
- SQL Fundamentals: `JOIN`s (Inner, Left, Outer), `GROUP BY`, `HAVING`
- Advanced SQL: Window functions (`ROW_NUMBER`, `RANK`, `LEAD`, `LAG`), Common Table Expressions (CTEs), Subqueries
- Optimization: Indexing, execution plans, handling NULLs
- Python for Data Manipulation: Pandas (filtering, merging, aggregations, `apply`), NumPy
- **Questions**: Writing a SQL query to find the 3rd highest salary per department, using window functions to calculate a 7-day rolling average

## Module 2: Probability and Statistics (20%)
- Probability Theory: Bayes' Theorem, conditional probability, combinatorics
- Distributions: Normal, Binomial, Poisson, Exponential, Uniform
- Descriptive Statistics: Variance, expected value, covariance, correlation
- Inferential Statistics: Hypothesis testing (z-test, t-test, Chi-square), p-values, confidence intervals, Type I vs Type II errors
- **Questions**: Solving a classic probability interview question (e.g., "Expected number of coin flips to get two heads in a row"), explaining the central limit theorem in simple terms

## Module 3: Machine Learning Algorithms & Theory (25%)
- Supervised Learning (Regression): Linear regression (assumptions, OLS, interpreting coefficients), Ridge/Lasso regularization (L1 vs L2)
- Supervised Learning (Classification): Logistic regression, Support Vector Machines (SVMs), Naive Bayes, K-Nearest Neighbors (KNN)
- Tree-Based Models: Decision trees, Random Forests (bagging), Gradient Boosting (XGBoost, LightGBM)
- Unsupervised Learning: K-Means clustering, PCA (Principal Component Analysis)
- Evaluation Metrics: Accuracy, Precision, Recall, F1-Score, ROC/AUC, Log-Loss, RMSE, MAE
- **Questions**: Explaining the bias-variance tradeoff, choosing between a Random Forest and Logistic Regression for a specific dataset, dealing with imbalanced classes

## Module 4: Product Sense and Experimental Design (20%)
- A/B Testing: Formulating hypotheses, determining sample size/Minimum Detectable Effect (MDE), randomization, calculating duration
- Network effects and interference in A/B testing (e.g., in ride-sharing apps)
- Defining Metrics: North Star metrics, proxy metrics, guardrail metrics
- Product Case Studies: "How would you measure the success of a new feature?", "Why did engagement drop by 10% yesterday?"
- **Questions**: Designing an A/B test for a social media feed algorithm change, diagnosing a sudden drop in daily active users (DAU)

## Module 5: ML System Design and Deployment (15%)
- End-to-End ML Pipeline: Data ingestion, feature engineering, training, evaluation, deployment, monitoring
- Handling Concept Drift and Data Drift
- Batch vs Real-time predictions
- Feature Stores and Model Registries
- Cold start problems in recommendation systems
- **Questions**: Designing a real-time recommendation engine for an e-commerce site, explaining how to monitor model performance post-deployment

## Stretch Zone
- Deep Learning basics (Neural Networks, CNNs, RNNs, Transformers)
- Take-home assignment best practices (code structure, README, storytelling with data)
