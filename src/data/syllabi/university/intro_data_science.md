# Introduction to Data Science
**ID**: `introDataScience` · **Discipline**: Technology · **Year**: University Freshman / High School Senior

## Course Philosophy
This course introduces the foundational skills needed to extract knowledge and insights from structured and unstructured data. It is a hands-on, programming-first course that balances data wrangling (Python/Pandas), exploratory data analysis, and basic predictive modeling without overwhelming students with advanced mathematical proofs.

## Module 1: The Data Science Workflow and Python Basics (20%)
- The Data Science Lifecycle: Business understanding, data acquisition, cleaning, exploration, modeling, deployment
- Python Fundamentals for Data: Variables, lists, dictionaries, control flow, and functions
- Introduction to Jupyter Notebooks
- Introduction to NumPy: Arrays, vectorization, and basic mathematical operations
- **Questions**: Explaining the difference between a list and a NumPy array, executing a basic vectorized operation

## Module 2: Data Wrangling and Pandas (25%)
- Introduction to Pandas: Series and DataFrames
- Data Importing: Reading CSV, Excel, and JSON files
- Data Cleaning: Handling missing values (`NaN`), dropping duplicates, changing data types, and dealing with outliers
- Data Manipulation: Filtering, sorting, grouping (`groupby`), and aggregating data
- Merging and Joining DataFrames (Inner, Left, Right joins)
- **Questions**: Writing a Pandas command to fill missing values with the column mean, using `groupby` to find the average revenue per product category

## Module 3: Exploratory Data Analysis (EDA) and Data Visualization (25%)
- The philosophy of EDA: Formulating questions, looking for patterns, and identifying anomalies
- Descriptive Statistics in Python: Mean, median, standard deviation, percentiles, and correlation matrices
- Data Visualization Principles: Choosing the right chart type, avoiding misleading graphs, the "data-ink ratio"
- Matplotlib and Seaborn: Creating histograms, scatter plots, bar charts, box plots, and heatmaps
- **Questions**: Interpreting a box plot to identify outliers and skewness, writing code to generate a scatter plot with a regression line in Seaborn

## Module 4: Introduction to Statistical Inference and A/B Testing (15%)
- Sampling: Populations vs samples, random sampling
- Hypothesis Testing basics: The Null Hypothesis, p-values, and statistical significance
- A/B Testing: Designing a simple experiment, interpreting results
- Avoiding common pitfalls: Correlation vs Causation, Simpson's Paradox
- **Questions**: Explaining the concept of a p-value in plain English, analyzing a dataset to identify an instance of Simpson's Paradox

## Module 5: Introduction to Predictive Modeling (Machine Learning Basics) (15%)
- What is Machine Learning? Supervised vs Unsupervised learning
- Linear Regression: Fitting a line to data using Scikit-Learn, interpreting the $R^2$ value and coefficients
- Classification basics: Logistic Regression or K-Nearest Neighbors (KNN)
- Model Evaluation: Training vs Testing sets (train-test split), accuracy, and the concept of overfitting
- Ethics in Data Science: Algorithmic bias, privacy, and responsible AI
- **Questions**: Splitting a dataset into training and testing sets using Scikit-Learn, identifying potential sources of bias in a predictive model trained on historical hiring data

## Stretch Zone
- Introduction to SQL for querying relational databases
- Web scraping basics using BeautifulSoup
