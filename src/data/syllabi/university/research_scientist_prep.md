# Research Scientist Interview Prep
**ID**: `research` - **Discipline**: Research - **Year**: University Senior / Career Hopper

## Course Aim
This course prepares advanced undergraduates, master's students, and early PhD candidates to make the jump from coursework and thesis work into research scientist roles in industry labs, national labs, academic groups, and research-heavy product teams. The center of gravity is not memorizing methods but developing *research judgment*: the ability to read a paper and locate its load-bearing claim, to design a study that could actually be wrong, to reason about cause and effect when randomization is impossible, to quantify and communicate uncertainty honestly, and to defend methodological choices under hostile questioning. These are the skills that separate a candidate who can run an analysis from one who can be trusted to set the direction of an analysis.

The course is deliberately interview-shaped. Modern research scientist loops blend a paper-critique round, a research deep-dive on the candidate's own work, a methods discussion that probes statistics and causal reasoning, an applied analysis or coding exercise, and a job talk with adversarial Q&A. Every chapter therefore produces a concrete artifact (a paper critique, a pre-analysis plan, a causal diagram, a reproducibility package, an analysis notebook, a specific-aims page, a collaboration charter) that doubles as both a portfolio piece and rehearsal for a specific interview station. Students are pushed to articulate assumptions, limitations, threats to validity, and ethical exposure for every deliverable, because that is exactly what a strong committee will press on.

The course is domain-agnostic by design. Students anchor the work in their own target field, whether that is machine learning, biomedical science, social science, climate, robotics, quantitative finance, or human-computer interaction, and are encouraged to compare norms across fields rather than assume one universal research template. What stays constant is the workflow: question, evidence, method, data, analysis, communication, and revision.

## Course Design Notes
- Treat research as a workflow, not a toolbox. Sequence the chapters so that each artifact feeds the next, ending in one coherent portfolio project.
- Make critique non-personal and structured. Run a recurring paper club and peer-review rotation so students practice giving and receiving precise technical criticism that targets the work, not the person.
- Insist on falsifiability. For every hypothesis, study, or claim, require students to state what observation would change their mind and what failure mode would make the result uninterpretable.
- Separate description, prediction, and causation explicitly. A surprising amount of interview failure comes from sloppy causal language attached to observational data.
- Demand uncertainty quantification in every deliverable: effect sizes with intervals, not just point estimates; assumptions stated, not buried; limitations named, not hidden.
- Build interview stories in parallel with technical work. Each artifact should come with a 60-90 second spoken narrative about a decision the student made and why.
- Use real public materials as models: lab websites, industry research blogs, conference papers, grant abstracts, recorded job talks, and registered reports.

## Chapter 1: Research Identity and Career Translation
### Core questions
- Which research scientist competencies do you already have evidence for, and where are the gaps?
- How do you describe your research agenda differently to a principal investigator, an engineering manager, and a product leader?
- What problems do you reliably notice before others do, and how do you prove it?
- What is the strongest single piece of evidence that you can drive work beyond assigned tasks?

### Key concepts
- Mapping academic experience (coursework, thesis, lab rotations, internships, open-source) to industry and academic research competencies
- Research taste: choosing questions that are important, tractable, and original, and explaining the trade-off when they conflict
- Reading a job description for signals about domain depth, required methods, tooling, autonomy, and collaboration style
- The difference between a research narrative (a throughline of judgment) and a project list

### Applied skills
- Build a competency map that pairs each target-role skill with concrete evidence and named gaps
- Write a one-page research narrative and three audience-tuned 90-second versions
- Rewrite resume bullets to lead with question, method, decision, and measurable impact

### Common traps
- Listing tools and techniques instead of demonstrating judgment ("I used PyTorch" vs "I chose X over Y because Z")
- Claiming impact with no baseline, denominator, or counterfactual
- Pitching the same narrative to every audience instead of foregrounding what each one cares about
- Confusing effort and novelty with importance; a hard project is not automatically a valuable one

## Chapter 2: Literature Review and Scholarly Judgment
### Core questions
- What is the single strongest claim in this paper, and exactly what evidence supports it?
- Which result, if it failed to replicate, would most damage the paper's contribution?
- What missing baseline, control, dataset, or measurement would most increase your belief?
- What would you do next with one month and limited compute, samples, or field access?

### Key concepts
- Efficient structured reading: abstract, figures, claims, methods, then limitations and references
- Separating contribution, novelty, evidence quality, and scope of inference, which are four different things
- Building literature maps organized by method, dataset, theory, result, and open question
- Spotting overclaiming: conclusions that outrun the design, missing baselines, and unfair comparisons (e.g., a tuned method against untuned baselines)

### Applied skills
- Produce a two-page critique that names the load-bearing claim and its weakest support
- Assemble an annotated bibliography of 12-15 sources with a one-line "what it actually shows"
- Draw a literature map that exposes the gap your candidate question would fill

### Common traps
- Summarizing what a paper says instead of evaluating whether its evidence supports it
- Treating peer-reviewed or highly cited as equivalent to correct
- Critiquing typos and presentation while missing a confound that invalidates the central result
- Confusing statistical significance reported in the paper with practical importance

## Chapter 3: Questions, Hypotheses, and Experimental Design
### Core questions
- What observation would count as evidence *against* your favorite hypothesis?
- Which variables must be controlled, measured, randomized, or deliberately left uncontrolled, and why?
- How do you design a credible study when randomized assignment is impossible or unethical?
- What single failure mode would make your result uninterpretable rather than merely null?

### Key concepts
- Moving from broad interest to a specific, falsifiable question with operational definitions and measurable outcomes
- Design families: experimental, quasi-experimental, observational, simulation, and qualitative, with their characteristic threats to validity
- Randomization, blocking, blinding, counterbalancing, and stratification as tools against specific biases
- Internal vs external validity, and the trade-offs between them
- Pre-registration vs registered reports: a registered report adds Stage 1 peer review and in-principle acceptance *before* data collection, which guards against publication bias as well as undisclosed flexibility

### Applied skills
- Write a study design brief: question, hypothesis, design, measurements, analysis, and named risks
- Draft a pre-analysis plan that fixes the primary outcome and analysis before seeing data
- Choose and justify a design under a realistic constraint (no randomization, small n, costly measurement)

### Common traps
- Vague hypotheses that no result could contradict
- Confusing a manipulation (what you do) with the outcome (what you measure)
- Assuming "more conditions" or "bigger n" fixes a fundamentally confounded design
- Treating pre-registration as a cage rather than a transparent record that still permits clearly labeled exploratory analysis

## Chapter 4: Causal Inference and Threats to Validity
### Core questions
- What is the estimand, and what assumptions connect it to the data you actually have?
- On a causal diagram, which variables must you condition on, and which must you never condition on?
- How would you defend the key identifying assumption of your chosen design to a skeptical reviewer?
- What would falsify your causal claim, and what test approximates that falsification?

### Key concepts
- Confounders, mediators, and colliders, and why conditioning on a collider *induces* spurious association (collider bias / Berkson's paradox)
- Directed acyclic graphs (DAGs) as a tool for choosing an adjustment set and exposing back-door paths
- Quasi-experimental identification: difference-in-differences (relies on the parallel-trends assumption), regression discontinuity (a sharp cutoff in a running variable), and instrumental variables (which require relevance, independence, and the exclusion restriction)
- Selection bias, survivorship bias, and the distinction between description, prediction, and causation

### Applied skills
- Draw a DAG for your project and read off the correct adjustment set
- Match an identification strategy to a realistic observational scenario and state its failure conditions
- Design a placebo or pre-trend test that would expose a violated assumption

### Common traps
- "Controlling for everything," including colliders and mediators, which biases rather than cleans the estimate
- Calling a regression coefficient a causal effect without naming an identification strategy
- Assuming difference-in-differences is valid without ever inspecting pre-treatment trends
- Treating any plausible instrument as valid while ignoring the exclusion restriction

## Chapter 5: Data, Reproducibility, and Lab Practice
### Core questions
- Could another researcher regenerate your figures from your raw data, code, and notes alone?
- Which data-quality checks must run *before* any analysis begins?
- How will you record exclusions, protocol changes, failed runs, and surprises so they cannot be quietly forgotten?
- What access controls, consent terms, and retention rules govern your dataset?

### Key concepts
- The NASEM distinction: reproducibility means same data and code yield the same result; replicability means new data and similar methods yield consistent results
- Version control for code, protocols, figures, and manuscripts; pinned environments and dependency management
- Data dictionaries, provenance, missingness handling, exclusion logging, and decision logs
- Secure, ethical, compliant handling of sensitive data (de-identification, access tiers, retention)

### Applied skills
- Build a reproducibility checklist and a repository or lab-notebook template for one project
- Write a data management plan covering collection, quality checks, storage, and retention
- Set up a pipeline that regenerates every figure from raw inputs with one command

### Common traps
- Conflating reproducibility (rerun the analysis) with replicability (rerun the study) in interviews
- Manual, undocumented "cleaning" steps that nobody, including the author, can reconstruct later
- Logging exclusions only after seeing whether they help the result
- Treating reproducibility as a paperwork chore rather than the substrate of credible claims

## Chapter 6: Statistics, Modeling, and Inference
### Core questions
- What is the estimand, what is the estimator, and what assumptions link them?
- When is a mixed-effects (hierarchical) model the right choice over ordinary regression?
- How do you explain a statistically significant but practically trivial effect to a decision-maker?
- Which robustness or sensitivity check would most strengthen confidence in this finding?

### Key concepts
- Effect sizes, uncertainty, and statistical power (1 - beta, the probability of detecting a real effect), driven by sample size, effect size, and alpha
- Correct interpretation of a 95% confidence interval (a statement about the long-run coverage of the procedure, not a 95% probability that this particular interval contains the fixed parameter) versus a Bayesian credible interval (a direct posterior-probability statement about the parameter)
- Regression, generalized linear models, and mixed-effects models for clustered or repeated-measures data
- Multiple comparisons, missing-data mechanisms (MCAR / MAR / MNAR), bootstrapping, cross-validation, and sensitivity analysis

### Applied skills
- Run and document a power analysis that justifies a chosen sample size
- Produce an analysis notebook with figures whose captions state effect sizes, intervals, and assumptions
- Write a model-choice memo defending one model over its alternatives

### Common traps
- Reading a confidence interval as a 95% probability about the parameter (a credible interval, not a confidence interval, licenses that statement)
- Confusing statistical significance with importance, and absence of significance with absence of effect
- Ignoring clustering or repeated measures and treating dependent observations as independent
- Deleting missing rows by default without diagnosing whether the data are MAR or MNAR

## Chapter 7: Research Ethics, Integrity, and Responsible Conduct
### Core questions
- Who is harmed if this research is wrong, misused, or overgeneralized beyond its sample?
- Which research decisions must be documented before you see the results, and why?
- What does responsible authorship look like for this specific collaboration?
- How would you respond if a supervisor asked you to drop a negative or inconvenient result?

### Key concepts
- Responsible conduct of research: authorship and contribution, data integrity, peer review, conflicts of interest, and mentorship
- Human subjects, animal research, biosafety, privacy, security, and dual-use considerations
- Questionable research practices and their distinctions: p-hacking (analyzing until something is significant) versus HARKing (presenting a post-hoc hypothesis as if it were a priori), plus cherry-picking, selective reporting, and publication bias
- Fairness, representation, and harm analysis in datasets and models

### Applied skills
- Write a research-ethics risk memo identifying stakeholders, harms, and realistic mitigations
- Draft an authorship and contribution plan before a collaboration begins
- Respond to a responsible-conduct scenario with a concrete escalation path

### Common traps
- Treating p-hacking and HARKing as the same thing; one manipulates analysis, the other misrepresents the timeline of the hypothesis
- Equating "I followed standard practice" with "this was ethical"
- Defining ethics narrowly as IRB paperwork while ignoring downstream misuse and overgeneralization
- Authorship decided by seniority or politics rather than documented contribution

## Chapter 8: Communication, Collaboration, and the Interview Loop
### Core questions
- What is the one-sentence contribution of your project, in language a hiring committee outside your subfield can follow?
- Which figure should a reader understand first, and what claim does it carry?
- Which methodological choice are reviewers most likely to attack, and how do you defend it?
- How do you communicate a failed experiment or a disagreement with a collaborator productively?

### Key concepts
- Scientific storytelling: problem, gap, method, evidence, contribution, limitation
- Document structure: abstracts, introductions, methods, results, discussion, and figure captions that state uncertainty
- Grant-style specific aims: significance, innovation, approach, and feasibility
- Interview formats: paper critique, research deep-dive, methods discussion, coding or analysis exercise, and job talk with adversarial Q&A
- Handling a missed confounder live: acknowledge, bound the likely direction and size of the bias, and propose a sensitivity analysis rather than dismissing or capitulating

### Applied skills
- Write a one-page specific-aims document and a job-talk outline with a clear contribution slide
- Build an interview story bank pairing each artifact with a 60-90 second decision narrative
- Run a mock Q&A drill that rehearses defending a controversial choice without overclaiming

### Common traps
- Burying the contribution in paragraph four instead of stating it in the first sentence
- Reading slides verbatim or showing raw notebook output to a non-technical audience
- Defending a weak choice aggressively instead of acknowledging the limitation and bounding it
- Telling a failure story with no reflection on the decision or what changed afterward

## Capstone
Students assemble a research scientist readiness portfolio around one domain-relevant project carried end to end through the workflow. The portfolio contains: a literature map and two-page critique, a study design brief with a pre-analysis plan, a causal diagram with a stated identification strategy, a reproducibility package (data management plan plus a repository that regenerates all figures), an analysis notebook with power analysis and uncertainty-aware figures, a research-ethics risk memo, a one-page specific-aims document, and a recorded 10-minute job talk.

The capstone defense is run as a mock interview loop. Students must explain what they studied and why it matters, which evidence they trust and why, what remains uncertain, how the work could be wrong, and what they would do next with more time, data, or compute. A panel deliberately injects an unmeasured confounder, a reproducibility challenge, and a statistical-interpretation trap; students are scored on whether they acknowledge, bound, and address each one rather than deflecting. The deliverable is judged as a hiring committee would judge it: not on whether the result was positive, but on whether the reasoning was sound, transparent, and defensible.

## Assessment Ideas
- Literature critique scored for claim identification, evidence evaluation, limitation analysis, and next-step reasoning
- Study design brief scored for hypothesis falsifiability, measurement quality, controls, feasibility, and risk awareness
- Causal reasoning exercise scored for correct DAG-based adjustment, identification strategy, and stated failure conditions
- Data and reproducibility package scored for traceability, documentation, code clarity, and integrity checks
- Statistical analysis scored for estimand clarity, assumptions, uncertainty communication, and robustness
- Ethics memo scored for stakeholder analysis, responsible conduct, and realistic mitigation
- Research talk and Q&A scored for structure, technical accuracy, figure quality, time discipline, and grace under adversarial questioning
- Peer review scored for specificity, fairness, and usefulness

## Research Notes
- NIH and NSF responsible-conduct-of-research materials anchor integrity, authorship, data management, peer review, and mentorship expectations.
- The NASEM report on reproducibility and replicability is a precise source for the same-data vs new-data distinction students routinely blur.
- The Center for Open Science (preregistration and registered reports) and Nature/Science author guidance frame transparent methods, figure design, and revision discipline.
- Domain-specific methods texts should be chosen by cohort focus, with students comparing norms across fields rather than assuming one universal template.
- Encourage students to study real lab websites, industry research blogs, conference papers, grant abstracts, and recorded job talks to learn how research careers are communicated in public.
