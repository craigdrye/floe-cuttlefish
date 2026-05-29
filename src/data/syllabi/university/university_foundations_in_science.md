# University Foundations in Science
**ID**: `uniScience` · **Discipline**: Science · **Stage**: University Freshman (ages 18-19)
**Aligns with**: introductory "How to Do Science", lab-skills, scientific methods, and research-literacy courses

## Course Aim
Most first-year students arrive able to recite scientific conclusions but unable to interrogate them. They have memorised that vaccines work, that the climate is warming, that a drug "passed its trial" — without ever asking how anyone knows, how strong the evidence is, or how it could be wrong. This course closes that gap. Its single organising goal is to turn students from consumers of scientific conclusions into careful users of scientific evidence: people who, handed an unfamiliar paper, can find the question, evaluate the design, locate the controls, read the statistics honestly, spot the limitations, weigh the ethics, and articulate the single strongest fair critique.

The course is deliberately discipline-agnostic. The same machinery — operational definitions, controls, randomisation, blinding, uncertainty, effect size, replication, peer review, and honest reporting — underlies a physics experiment, a clinical trial, a climate model, and a social-science survey. We teach that shared grammar of evidence so that a biology major can read an economics paper and a chemistry major can smell a confounded epidemiology study. Throughout, we insist on calibrated humility: knowing what a result does and does not show is the mark of a scientist, and overclaiming is the cardinal sin.

By the end, a student should be able to defend a paper critique under skeptical but fair questioning, design a small study that would survive a methods review, report a result with its uncertainty rather than a bare number, and recognise when a confident-sounding claim is built on a confounded design, a misread p-value, or a non-reproducible pipeline. These are the habits that make the difference between someone who has taken science classes and someone who can actually do and judge science.

## Course Design Notes
This course is rigorous but not bloated; it teaches reasoning skills, not a catalogue of facts. Route questions here when they concern the scientific method, experimental and observational design, measurement and uncertainty, statistical thinking and its misinterpretations, reproducibility and replicability, reading and critiquing primary literature, lab safety and notebooks, research ethics and integrity, open science, or scientific communication across disciplines. Do **not** route deep domain content (organic-chemistry mechanisms, cell biology, calculus) here — those belong to their own tracks; this course is about *how the knowledge is made and judged*, not the knowledge itself.

Questions favour applied judgement over recall: classify a claim's testability, diagnose a confound, decide what a p-value does and does not license, choose the control that isolates the variable, or pick the single sharpest critique of a study. Distractors are built from the field's most common and seductive errors (p-value as "probability the hypothesis is true", precision mistaken for accuracy, reproducibility conflated with replicability) so that getting the question right requires having genuinely understood the distinction.

## Chapter 1: What Science Is and How Models Work
- **Core questions**: What separates a scientific claim from a non-scientific one? Why is falsifiability necessary but not sufficient? How can a model be wrong in detail yet useful in practice?
- **Key concepts**: Hypothesis vs. prediction vs. theory; falsifiability and risky predictions; exploratory vs. confirmatory work; models, idealisation, and mechanism; correlation vs. causation; the difference between "unproven" and "disproven"; pseudoscience warning signs (unfalsifiable claims, ad hoc rescues, special pleading, reliance on anecdote).
- **Applied skills**: Convert a vague public claim into testable subclaims; identify when an "explanation" is an unfalsifiable ad hoc rescue; explain why "all models are wrong, some are useful" is not an excuse for sloppiness.
- **Common traps**: Treating a theory as "just a guess" (in science a theory is a well-tested explanatory framework, not a hunch); assuming an unfalsifiable claim is therefore false (it is simply outside science); believing a useful model must be literally true.

## Chapter 2: Experimental and Observational Design
- **Core questions**: What does a control group actually control for? When can you draw causal conclusions, and when are you stuck with association? Why does randomisation matter even for variables you never measured?
- **Key concepts**: Independent, dependent, and confounding variables; operational definitions; control and comparison groups; randomisation; blinding (single vs. double) and the placebo effect; replication vs. pseudoreplication; sample size and representativeness; field vs. lab tradeoffs; natural and quasi-experiments.
- **Applied skills**: Design a study for a given hypothesis with stated variables, controls, and sampling plan; diagnose the confound in a flawed design; decide whether observational data can support a causal claim or only an association.
- **Common traps**: Concluding causation from an observational correlation; assuming a "control group" with no random assignment removes confounding; confusing single-blind (subjects unaware) with double-blind (subjects and investigators unaware); treating a large sample as a cure for a biased one.

## Chapter 3: Measurement, Data, and Statistical Thinking
- **Core questions**: What is the difference between accuracy and precision, and which does calibration fix? What does a p-value mean — and what does it not mean? What does a result *of a given size* actually matter for?
- **Key concepts**: Accuracy vs. precision; systematic error (bias) vs. random error; calibration; significant figures and uncertainty propagation; descriptive statistics and distribution shape; the p-value as P(data at least this extreme | null true); the 0.05 threshold as convention, not truth; confidence intervals; Type I (false positive, α) and Type II (false negative, β) errors and statistical power (1 − β); effect size and practical vs. statistical significance.
- **Applied skills**: Interpret error bars and confidence intervals; spot a misleading graph (truncated axis, cherry-picked range); state correctly what a p-value of 0.03 licenses; distinguish a statistically significant trivial effect from a practically important one.
- **Common traps**: Reading p as "the probability the null hypothesis is true" or "the probability the result is a fluke" (both wrong); equating "non-significant" with "no effect"; confusing precision (tight spread) with accuracy (closeness to truth); thinking calibration reduces random error rather than systematic bias.

## Chapter 4: Reading and Critiquing Scientific Literature
- **Core questions**: How do you extract a paper's actual claim and the evidence for it in three passes? What is peer review able and unable to certify? How do preprints, reviews, and primary articles differ in their warrant?
- **Key concepts**: IMRaD structure (Introduction, Methods, Results, and Discussion); the three-pass reading method (skim, content, deep critique); primary literature vs. review articles vs. preprints; what peer review checks (plausibility, method soundness) and does not (fraud detection, replication); citation chasing forwards and backwards; conflicts of interest and funding disclosures; the gap between a paper and its press release.
- **Applied skills**: State a paper's central claim in one sentence and the single strongest evidence for it; find the methods detail whose absence would block replication; compare a study's actual finding to how a headline reported it.
- **Common traps**: Assuming peer review guarantees a result is correct or reproducible; treating a preprint as equivalent to a peer-reviewed paper; reading the abstract and the press release while skipping the methods; mistaking many citations for validity.

## Chapter 5: Lab Practice, Safety, and Reproducibility
- **Core questions**: What makes a result *reproducible* versus *replicable*, and why does the difference matter? What in a workflow makes a finding hard to reproduce six months later? How do you keep a record someone else could actually follow?
- **Key concepts**: Reproducibility (same data + same code → same result) vs. replicability (new data, same question → consistent result), per the National Academies; lab notebooks and contemporaneous records; standard operating procedures; PPE, safety data sheets (SDS), and chemical/biological hazard classes; data provenance; version control; computational environments; open data and the FAIR principles (Findable, Accessible, Interoperable, Reusable).
- **Applied skills**: Improve a thin lab-notebook entry so a stranger could repeat the work; choose appropriate safety precautions for a given hazard; identify the step (unlogged parameter, manual spreadsheet edit, lost raw data) that would break reproducibility.
- **Common traps**: Using "reproducible" and "replicable" interchangeably; believing FAIR means "freely available to everyone" (it permits controlled access with clear conditions); thinking a polished final figure substitutes for archived raw data and analysis code; assuming memory or a tidied write-up can stand in for a contemporaneous record.

## Chapter 6: Research Ethics and Scientific Integrity
- **Core questions**: What three principles govern research with human subjects, and how do they translate into practice? Where is the line between honest error, questionable research practice, and misconduct? Who deserves authorship?
- **Key concepts**: The Belmont Report's three principles — respect for persons (autonomy and informed consent), beneficence (maximise benefit, minimise harm), and justice (fair distribution of burdens and benefits); IRB/ethics review; informed consent and vulnerable populations; the FFP definition of misconduct (fabrication, falsification, plagiarism); questionable research practices (p-hacking, HARKing, selective reporting); authorship criteria and "gift"/"ghost" authorship; conflicts of interest; dual-use research.
- **Applied skills**: Classify a scenario as honest error, QRP, or misconduct; map a study decision back to the Belmont principle it serves or violates; allocate authorship with a defensible justification.
- **Common traps**: Calling honest mistakes "misconduct" (misconduct under FFP requires intent or recklessness, not error); thinking IRB approval makes a study automatically ethical; treating funding or seniority as sufficient grounds for authorship; assuming consent forms protect subjects regardless of comprehension.

## Chapter 7: Scientific Communication and Public Trust
- **Core questions**: How do you report a result with its uncertainty instead of a bare headline number? What makes a figure honest? How do you translate for a lay audience without overclaiming?
- **Key concepts**: Audience-tuned writing (technical vs. lay); figure and table design, captions that stand alone; uncertainty and risk communication (absolute vs. relative risk); the difference between "associated with" and "causes"; overclaiming and hype; the press-release distortion pipeline; calibrated language ("suggests", "is consistent with", "demonstrates").
- **Applied skills**: Rewrite an overstrong claim into a calibrated one; turn a relative-risk scare statistic into honest absolute terms; write a figure caption that lets the figure be read without the body text; produce a lay summary that keeps the caveats.
- **Common traps**: Reporting relative risk ("doubles your risk") without the absolute baseline; swapping "causes" for "is associated with"; stripping uncertainty to sound authoritative; assuming a more confident claim is a more scientific one.

## Chapter 8: Methods Across Scientific Fields
- **Core questions**: Why can physics often run controlled experiments while astronomy and economics mostly cannot? What can a given method prove, estimate, or only suggest? When does a method fail to generalise?
- **Key concepts**: Controlled experiments vs. observational and model-based evidence; physics measurement and model-fitting; chemical synthesis and characterisation; biological assays and clinical trials (the RCT hierarchy); Earth-system and climate modelling; computational and simulation studies; social-science methods (surveys, quasi-experiments) and mixed methods; standards of evidence and their limits across fields.
- **Applied skills**: Match a research question to an appropriate method; identify when a method cannot generalise beyond its sample or setting; build a comparison of what experiment, observation, and modelling can each establish.
- **Common traps**: Assuming only randomised lab experiments are "real science" (astronomy, geology, and epidemiology rely on observation and modelling); expecting model agreement to equal proof; treating a result from one population or system as automatically transferable to another.

## Capstone
Each student selects a published paper, technical report, or preprint outside their strongest subject and produces a full scientific critique: the research question; the design and what its controls actually rule out; the data and measurement quality; the statistical reasoning (including correct reading of p-values, intervals, and effect sizes); reproducibility and what would be needed to repeat it; the ethical dimension; the quality and honesty of the communication; and a proposed next study that would address the strongest limitation. The critique is then defended orally against skeptical but fair questioning — the student must concede what is genuinely uncertain and hold firm where the evidence supports them.

## Assessment Ideas
- Weekly paper-reading drills on short excerpts, scored on extracting claim, method, and limitation.
- Study-design critiques focused specifically on controls and confounds.
- Data-interpretation prompts that reward correct uncertainty and effect-size language and penalise p-value misreadings.
- A final oral paper defence in which students answer skeptical-but-fair questions and must distinguish what they can and cannot conclude.

## Research Notes
- AAAS Vision and Change in Undergraduate Biology Education: https://www.aaas.org/resources/vision-change-undergraduate-biology-education-call-action
- NIH rigor and reproducibility resources: https://grants.nih.gov/policy/reproducibility/index.htm
- Center for Open Science materials on reproducibility and open science: https://www.cos.io/
- National Academies report on reproducibility and replicability in science: https://nap.nationalacademies.org/catalog/25303/reproducibility-and-replicability-in-science
- The Belmont Report (HHS Office for Human Research Protections): https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/index.html
- FAIR Guiding Principles (Wilkinson et al., 2016, Scientific Data): https://www.nature.com/articles/sdata201618
