import { makeQuestionBank } from './base'

const pharmaLesson = (sourceId: string, note: string) =>
  `Source: Pharma hands-on lab ${sourceId}. ${note}`

const openIntroLesson = (sourceId: string, note: string) =>
  `Source: OpenIntro lab ${sourceId}. ${note}`

export const careerLabsMedicalQuestions = makeQuestionBank('Medical', [
  {
    id: 4210001,
    chapter: 'Clinical Data Basics',
    title: 'ADSL row meaning',
    prompt: 'A clinical ADaM ADSL data set has 254 rows and includes variables such as USUBJID, AGE, SEX, RACE, and TRT01A. In this kind of subject-level data set, what does one row usually represent?',
    correct: 'One study subject',
    wrong: [
      ['One lab test result', 'A lab-result data set would usually have multiple records per subject and test.', 'ADSL is subject-level, so the row is the participant.'],
      ['One treatment arm', 'Treatment arm is a variable recorded for subjects, not the row unit.', 'Look for the observational unit.'],
      ['One demographic variable', 'Variables are columns such as AGE or SEX.', 'Rows are cases; columns are variables.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject1::3', 'The source notes that the ADSL object has 254 rows and 48 columns; the converted concept check asks for the case represented by each subject-level row.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210002,
    chapter: 'Clinical Data Basics',
    title: 'Efficacy flag filter',
    prompt: 'In a clinical analysis workflow, the data are filtered to EFFFL == "Y" before creating an efficacy analysis data object. What is the main purpose of that filter?',
    correct: 'Keep only subjects in the efficacy analysis population',
    wrong: [
      ['Convert all numeric columns to character columns', 'Filtering rows does not change column types by itself.', 'The flag defines which records stay in the analysis set.'],
      ['Randomly assign subjects to treatment groups', 'Randomization would happen before analysis data filtering.', 'EFFFL is an analysis population flag.'],
      ['Remove every subject with any adverse event', 'The source filter is for the efficacy flag, not adverse-event status.', 'Use the stated flag meaning.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject1::7', 'The lab creates adsl_eff by filtering the ADSL data object where EFFFL has value Y.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210003,
    chapter: 'Clinical Demographics',
    title: 'Treatment denominator',
    prompt: 'A demography table reports counts and percentages by treatment group. The workflow first calculates the marginal total N for each treatment group. What is that N used for?',
    correct: 'As the denominator for percentages within each treatment group',
    wrong: [
      ['As the number of columns in the table', 'The denominator is about subjects in a treatment group, not table width.', 'Percentages need a group total.'],
      ['As the p-value for the comparison', 'A marginal total is a count, not an inference result.', 'Do not confuse descriptive denominators with hypothesis tests.'],
      ['As the number of trial sites', 'Treatment-group N counts subjects, not sites.', 'Track the unit being counted.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject2::3', 'The source explicitly counts treatment-group marginal totals to act as denominators for table percentages.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210004,
    chapter: 'Clinical Demographics',
    title: 'Small n split',
    prompt: 'A clinical table workflow groups ADSL records by treatment arm and SEX to calculate small n counts. What does each small n represent?',
    correct: 'The number of subjects in a specific sex category within a treatment arm',
    wrong: [
      ['The total number of treatment arms in the trial', 'That would count groups, not subjects inside a group.', 'Small n is a cell count.'],
      ['The mean age for all subjects combined', 'Mean age is a continuous summary, not a categorical count.', 'The grouping variables define the table cell.'],
      ['The number of variables selected for the listing', 'Selected variables are columns, not category counts.', 'Follow the group_by variables.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject2::4', 'The source adds SEX to the grouping so counts are calculated for each treatment-by-sex combination.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210005,
    chapter: 'Clinical Data Basics',
    title: 'Subject identifier',
    prompt: 'A listing is sorted by USUBJID after filtering the ADSL efficacy population. Why is USUBJID a natural sort key for a subject listing?',
    correct: 'It identifies individual study subjects, making records easier to trace',
    wrong: [
      ['It stores the displayed treatment label only', 'Treatment label is represented by variables such as TRT01A.', 'USUBJID is the subject identifier.'],
      ['It is the calculated percentage for a table row', 'Percentages are derived summary values, not subject IDs.', 'A listing needs traceable subject order.'],
      ['It records whether a variable is numeric', 'Column class checks are separate from subject identifiers.', 'Use identifiers for traceability.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject1::8', 'The lab sorts the filtered ADSL data object by USUBJID before preparing a subject listing.'),
    source: 'Pharma hands-on',
  },
])

export const careerLabsClinicalResearchQuestions = makeQuestionBank('Clinical Research', [
  {
    id: 4210101,
    chapter: 'Clinical Data Operations',
    title: 'Source import choice',
    prompt: 'A study workflow imports a CDISC ADaM ADSL .xpt file before analysis. Why is choosing an import method that preserves the data structure important?',
    correct: 'It helps keep the clinical analysis data traceable and usable for later summaries',
    wrong: [
      ['It proves the treatment is effective before analysis', 'Importing data does not establish clinical efficacy.', 'The import step preserves the data for analysis.'],
      ['It removes the need to check variable names or types', 'The source lab still checks classes and variables after import.', 'Import is only the start of quality review.'],
      ['It automatically writes the final clinical study report', 'A data import does not create the report by itself.', 'The data still need analysis and documentation.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject1::2', 'The source discusses reading CDISC ADSL XPT data into R and checking documentation for import functions.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210102,
    chapter: 'Clinical Data Operations',
    title: 'Case-sensitive variables',
    prompt: 'A clinical data script filters on EFFFL == "Y". The lab warns that R is case-sensitive and SAS-style variable names are often uppercase. What error would EFFFL vs Efffl most likely create?',
    correct: 'The script may fail or filter the wrong object because the variable name does not match exactly',
    wrong: [
      ['The code will always treat EFFFL and Efffl as the same variable', 'Case-sensitive languages do not ignore capitalization.', 'Exact variable names matter.'],
      ['The analysis population will be randomized again', 'A capitalization mistake does not perform randomization.', 'This is a data reference problem.'],
      ['The treatment label will be translated automatically', 'Case sensitivity does not translate values or labels.', 'Use the exact column name.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject1::7', 'The source warns that R is case-sensitive and the EFFFL variable must be typed in uppercase.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210103,
    chapter: 'Clinical Data Operations',
    title: 'Class check',
    prompt: 'Before summarizing a clinical variable such as AGE or RACE, why would an analyst check whether the column is numeric, character, or another class?',
    correct: 'The correct summary and operations depend on the variable type',
    wrong: [
      ['Variable type determines whether the participant consented', 'Consent status is not inferred from the software class of AGE or RACE.', 'Type affects analysis operations.'],
      ['Every class must be summarized with a mean', 'Means are appropriate for many numeric variables, not all variable types.', 'Categorical and numeric variables need different summaries.'],
      ['Class checks replace source data verification', 'They are useful checks, but they do not replace the source record.', 'Use them as part of data quality review.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject1::4', 'The lab uses functions such as sapply and class to inspect whether columns are character, numeric, integer, double, factor, and similar types.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210104,
    chapter: 'Clinical Data Operations',
    title: 'Grouping carryover',
    prompt: 'After calculating grouped clinical table counts, the lab recommends ungrouping before the next action. Why is that a good data-analysis habit?',
    correct: 'Later calculations may otherwise run separately within old groups by accident',
    wrong: [
      ['Ungrouping deletes the source data permanently', 'Ungrouping changes grouping metadata, not the raw source file.', 'It controls how later operations are applied.'],
      ['Ungrouping changes every treatment assignment', 'Group metadata does not randomize or reassign subjects.', 'It affects calculations, not trial allocation.'],
      ['Ungrouping is only needed for images', 'The source issue is table/data operations.', 'Grouping state can carry into later summaries.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject2::11', 'The source notes that grouped data should be ungrouped before the next action so R does not keep applying operations by old groups.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210105,
    chapter: 'Clinical Data Operations',
    title: 'Reproducible example',
    prompt: 'A clinical analyst asks for help with an R error. The lab says a good reproducible example should include libraries, data setup, and minimal code. What is the main reason?',
    correct: 'It lets someone else recreate the issue without guessing hidden setup steps',
    wrong: [
      ['It hides the data path so the error cannot be checked', 'A reproducible example should reduce hidden context, not add it.', 'The goal is recreating the issue.'],
      ['It proves the final results are clinically significant', 'A reproducible example is a debugging tool, not a clinical inference result.', 'Keep debugging separate from inference.'],
      ['It makes every code sample as long as possible', 'The source recommends minimal code needed to reproduce the error.', 'Small and complete is the target.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject9::2', 'The source recommends including complete setup, library calls, data needed, and minimal code required to reproduce the issue.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210106,
    chapter: 'Applied Data Interpretation',
    title: 'Mean or median delay',
    prompt: 'An OpenIntro lab asks whether a traveler should use the lowest mean or lowest median departure delay to choose a travel month. What is the key statistical tradeoff?',
    correct: 'The mean uses all values but is more affected by extreme delays; the median is more resistant',
    wrong: [
      ['The median uses every value equally in arithmetic', 'That describes the mean more closely.', 'Median is position-based and resistant to extremes.'],
      ['The mean is always better because it cannot be affected by outliers', 'Means can be strongly affected by extreme values.', 'Choose the summary that fits the distribution and decision.'],
      ['The two summaries must always rank months identically', 'Skew and outliers can make mean and median tell different stories.', 'Compare both when delays are skewed.'],
    ],
    lesson: openIntroLesson('openintro-labs-rguroo::02_intro_to_data::1', 'The source asks students to compare mean and median delay choices and discuss pros and cons.'),
    source: 'OpenIntro Labs',
  },
  {
    id: 4210107,
    chapter: 'Applied Data Interpretation',
    title: 'IQR for variability',
    prompt: 'An OpenIntro lab asks which airline carrier has the most variable arrival delays using median and interquartile range. What does a larger IQR indicate?',
    correct: 'The middle 50% of delays are more spread out',
    wrong: [
      ['Every delay is exactly the same', 'A larger IQR means more spread in the middle half, not no spread.', 'IQR measures variability.'],
      ['The carrier has the highest mean delay by definition', 'IQR measures spread, not the average.', 'Center and variability are different summaries.'],
      ['The sample size must be smaller', 'IQR is not a direct count of observations.', 'It summarizes dispersion among values.'],
    ],
    lesson: openIntroLesson('openintro-labs-rguroo::02_intro_to_data::1', 'The source asks students to use median and IQR for arrival delays grouped by carrier.'),
    source: 'OpenIntro Labs',
  },
  {
    id: 4210108,
    chapter: 'Applied Data Interpretation',
    title: 'Simulation comparison',
    prompt: 'An OpenIntro probability lab compares an observed shooting streak distribution with simulated independent shooting. What is the purpose of the simulation comparison?',
    correct: 'To judge whether the observed streaks look unusual under an independence model',
    wrong: [
      ['To prove every shot caused the next shot', 'The simulation is built to compare against independence, not prove dependence automatically.', 'Use the simulated reference distribution.'],
      ['To remove the need for any observed data', 'The comparison needs both observed and simulated patterns.', 'Simulation gives a benchmark.'],
      ['To guarantee the same streak lengths every time', 'Random simulation varies across runs.', 'Look for patterns across a reference process.'],
    ],
    lesson: openIntroLesson('openintro-labs-rguroo::03_probability::1', 'The source introduces independence and simulated shooting as a comparison for observed streak lengths.'),
    source: 'OpenIntro Labs',
  },
])

export const careerLabsRegulatoryQuestions = makeQuestionBank('Regulatory', [
  {
    id: 4210201,
    chapter: 'Submission Data Traceability',
    title: 'Presentation labels',
    prompt: 'A clinical table workflow changes raw SEX values such as M and F into more readable labels for presentation. What is the best regulatory-quality interpretation of that step?',
    correct: 'Presentation labels should be clear while the transformation remains documented and traceable',
    wrong: [
      ['Raw values should be changed without any record so the table looks cleaner', 'Unrecorded transformations weaken traceability.', 'Clarity and audit trail both matter.'],
      ['Readable labels make source data verification unnecessary', 'Presentation labels do not replace source verification.', 'Reviewers still need the path from source to output.'],
      ['Labels should be chosen after submission to save time', 'Submission outputs should be controlled before filing.', 'Do the transformation deliberately and document it.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject2::10', 'The source recodes M and F into Male and Female for a more interpretable table.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210202,
    chapter: 'Submission Data Traceability',
    title: 'Controlled output format',
    prompt: 'A clinical table workflow formats percentages to one decimal place and combines count plus percentage for display. Why does this matter for regulated reporting?',
    correct: 'Consistent formatting makes outputs easier to review, reproduce, and compare',
    wrong: [
      ['Formatting changes the underlying treatment assignment', 'Display formatting should not change the source clinical data.', 'Separate analysis values from presentation.'],
      ['One decimal place proves the result is statistically significant', 'Rounding format does not establish significance.', 'Formatting supports readability, not inference.'],
      ['Combining count and percentage removes the need for denominators', 'The denominator logic still matters.', 'Counts, percentages, and N should remain traceable.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject2::7', 'The source rounds percentages to one decimal place before table display.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210203,
    chapter: 'Submission Data Traceability',
    title: 'Zero-count handling',
    prompt: 'A summary-table lab calls out handling zero counts. Why should a regulated clinical table workflow handle zero-count categories deliberately?',
    correct: 'Omitted zero categories can make the table misleading or hard to reconcile',
    wrong: [
      ['Zero counts should always be hidden because they are not data', 'A zero can be meaningful evidence that no subjects fell in a category.', 'Absence can still need display or reconciliation.'],
      ['Zero counts automatically invalidate the trial', 'A zero cell may be expected depending on the category and sample.', 'The issue is transparent handling.'],
      ['Zero counts prove the denominator was also zero', 'A category count can be zero while the treatment-arm denominator is positive.', 'Keep cell counts and denominators separate.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject4::2', 'The source flags zero-count handling while building clinical summary table data.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210204,
    chapter: 'Submission Data Traceability',
    title: 'Clean analysis environment',
    prompt: 'A debugging lab warns that old objects in the R environment can interfere with current analysis. What is the regulatory-quality risk?',
    correct: 'The output may depend on stale objects that are not part of the intended reproducible workflow',
    wrong: [
      ['Old objects automatically improve validation because more data are present', 'Uncontrolled extra objects create ambiguity, not validation.', 'Use controlled inputs.'],
      ['A clean environment makes audit trails unnecessary', 'Clean execution supports reproducibility but does not replace documentation.', 'Both are needed.'],
      ['The risk is only visual styling in the IDE', 'The source concern is using unintended objects in analysis.', 'Environment state can affect results.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject10::4', 'The source warns that accumulated objects in R can cause a current analysis to use an unintended old object with the same name.'),
    source: 'Pharma hands-on',
  },
  {
    id: 4210205,
    chapter: 'Submission Data Traceability',
    title: 'Pipeline trace',
    prompt: 'A table workflow chains filtering, grouping, joining, calculating, formatting, and reshaping steps with a pipe. What makes this valuable for submission-quality analysis?',
    correct: 'The sequence of data transformations is explicit and easier to review',
    wrong: [
      ['A pipe guarantees every result is clinically correct', 'Readable code still needs validation and review.', 'The pipe helps show the transformation path.'],
      ['A pipe hides intermediate logic from reviewers', 'A well-written pipeline should make the logic more visible.', 'Traceability improves when steps are explicit.'],
      ['A pipe replaces the need for controlled source data', 'Workflow clarity does not replace controlled inputs.', 'Both data and transformations need control.'],
    ],
    lesson: pharmaLesson('pharma-hands-on::miniproject2::12', 'The source chains merge, percentage calculation, formatting, and table-preparation steps in one pipeline.'),
    source: 'Pharma hands-on',
  },
])

