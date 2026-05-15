# Climate Science Master
**ID**: `climateScienceMaster` - **Discipline**: Climate Science / Climate Modeling - **Level**: Beyond PhD / expert researcher

## Course Aim
Train expert-level reasoning in climate physics and climate modeling. This course is for questions that should challenge senior climate scientists, model developers, attribution researchers, and technically fluent "geek" learners. The focus is not climate trivia. The focus is mechanism, equations, diagnostics, model failure modes, uncertainty, and defensible inference under messy evidence.

## Course Design Notes
Route questions here only when the learner can handle expert climate dynamics, model diagnostics, attribution, uncertainty decomposition, and numerical-method reasoning. Prompts should combine mechanisms across domains, include plausible expert near-misses, and avoid basic climate literacy questions.

## Expected Prior Knowledge
- Graduate-level fluid dynamics, thermodynamics, radiative transfer, statistics, numerical methods, and Earth-system science.
- Familiarity with GCMs/ESMs, reanalysis products, CMIP-style ensembles, paleoclimate constraints, and detection-attribution workflows.
- Comfort with multi-step reasoning where several answers are plausible but one respects the physics, numerics, and evidence hierarchy best.

## Core Syllabus

### 1. Dynamical Core and Geophysical Fluid Dynamics
- Primitive equations, hydrostatic and nonhydrostatic limits, Boussinesq and anelastic approximations.
- Vorticity, potential vorticity inversion, Rossby waves, baroclinic instability, wave-mean-flow interaction, jet maintenance, and eddy-driven circulation.
- Hadley, Ferrel, and polar cells; ITCZ migration; monsoon dynamics; Walker circulation; annular modes.
- Quasi-geostrophic theory versus full-physics model behavior; where the approximations break.
- Stratosphere-troposphere coupling, sudden stratospheric warmings, QBO, Brewer-Dobson circulation, and ozone-climate interactions.
- Numerical grids: spectral, finite-volume, cubed-sphere, icosahedral, vertical coordinates, pressure-gradient errors, diffusion, filters, and conservation constraints.

### 2. Radiative Transfer and Forcing Diagnostics
- Line-by-line radiative transfer, correlated-k methods, pressure broadening, continuum absorption, overlap, and spectral windows.
- Radiative kernels, forcing-feedback decomposition, adjusted forcing, effective radiative forcing, rapid adjustments, and efficacy.
- Cloud radiative effects, aerosol-radiation interactions, aerosol-cloud interactions, semi-direct effects, and indirect forcing uncertainty.
- Lapse-rate, water-vapor, surface-albedo, Planck, and cloud feedbacks; kernel versus regression approaches.
- Top-of-atmosphere energy imbalance, ocean heat uptake efficiency, pattern effect, and feedback state dependence.
- Diagnosing forcing in transient versus equilibrium experiments; pitfalls in abrupt-4xCO2, historical, AMIP, and fixed-SST setups.

### 3. Clouds, Convection, and Boundary-Layer Parameterization
- Deep convection closures, entrainment, convective organization, mesoscale aggregation, cold pools, and stochastic schemes.
- Shallow convection, stratocumulus decks, marine boundary layers, cloud-top entrainment instability, drizzle, and aerosol-cloud coupling.
- Microphysics: autoconversion, ice nucleation, mixed-phase clouds, supercooled liquid, precipitation efficiency, and scale-aware parameterization.
- Cloud feedback controversies: low-cloud feedback, tropical anvil cloud response, storm-track cloud shifts, and emergent constraints.
- Superparameterization, cloud-resolving models, LES, kilometer-scale global models, and what they do and do not solve.
- Tuning ethics: compensating errors, top-of-atmosphere balance, historical trend matching, and hidden parameter dependencies.

### 4. Ocean, Cryosphere, and Coupled Dynamics
- Ocean heat uptake, mixed-layer dynamics, thermocline ventilation, mode waters, mesoscale eddies, and parameterized mixing.
- AMOC, Southern Ocean upwelling, Antarctic Circumpolar Current, eddy compensation, freshwater forcing, and tipping-risk diagnostics.
- ENSO dynamics, recharge oscillator, Bjerknes feedback, diversity of ENSO events, and teleconnection nonstationarity.
- Sea ice thermodynamics and dynamics, albedo feedback, brine rejection, snow insulation, ridging, leads, and marginal ice-zone processes.
- Ice-sheet mass balance, grounding-line instability, marine ice-cliff instability, hydrofracture, basal lubrication, and ice-ocean coupling.
- Coupled-model drift, flux adjustment history, initialization shock, spin-up, and deep-ocean equilibration.

### 5. Land Surface, Biosphere, and Carbon Cycle
- Terrestrial carbon uptake, nitrogen/phosphorus limitation, vegetation dynamics, fire regimes, soil carbon, permafrost thaw, and methane.
- Ocean carbon chemistry, Revelle factor, alkalinity, biological pump, solubility pump, acidification, and deoxygenation.
- Carbon-climate feedbacks, airborne fraction, zero-emissions commitment, TCRE, carbon budgets, overshoot, and reversibility.
- Wetlands, methane hydrates, peatlands, tropical forest dieback, and abrupt ecosystem transitions.
- Land-use forcing, albedo versus carbon tradeoffs, irrigation, afforestation, BECCS, DACCS, and permanence risk.
- Coupling biogeochemistry to physical climate without double counting or hiding process uncertainty.

### 6. Data Assimilation, Observations, and Reanalysis
- Variational and ensemble data assimilation: 3D-Var, 4D-Var, EnKF, hybrid systems, localization, inflation, and balance constraints.
- Satellite retrieval physics, radiance assimilation, observing-system experiments, structural biases, and homogenization.
- Reanalysis discontinuities, observing-network changes, spurious trends, and variable-specific reliability.
- Ocean heat content estimates, Argo sampling, deep-ocean gaps, XBT bias correction, and steric sea-level closure.
- Surface temperature products, urbanization, station moves, sea-surface temperature corrections, and uncertainty propagation.
- Paleoclimate proxies: calibration, seasonality, age models, proxy system models, data assimilation, and multi-proxy reconstruction.

### 7. Detection, Attribution, and Causal Inference
- Optimal fingerprinting, total least squares, pattern scaling, covariance estimation, control-run length, and internal variability.
- Event attribution: storyline versus risk-based methods, probability ratios, fraction of attributable risk, return periods, and selection bias.
- Compound extremes, tail dependence, nonstationarity, and physical storyline constraints.
- Causal graphs, counterfactual worlds, confounding forcings, volcanic/solar/aerosol separation, and model-observation consistency.
- Emergent constraints: selection effects, multiple testing, physical plausibility, out-of-sample validation, and overconfident narrowing.
- Attribution of impacts rather than hazards: exposure, vulnerability, adaptation, and socioeconomic counterfactuals.

### 8. Model Ensembles, Uncertainty, and Evaluation
- CMIP ensemble design, model genealogy, ensemble dependence, initial-condition ensembles, perturbed-physics ensembles, and large ensembles.
- Structural uncertainty, parametric uncertainty, scenario uncertainty, internal variability, and observational uncertainty.
- Bayesian calibration, history matching, emulator construction, Gaussian processes, hierarchical modeling, and posterior predictive checks.
- Model weighting, performance metrics, independence weighting, skill versus realism, and avoiding circular evaluation.
- Out-of-distribution behavior, high-sensitivity models, low-sensitivity models, pattern effects, and constrained projections.
- Reproducibility: experiment protocols, metadata, versioning, forcings, masks, grids, and diagnostics.

### 9. Numerical Methods and High-Performance Modeling
- Time-stepping stability, CFL constraints, split-explicit methods, implicit solvers, tracer conservation, monotonic advection, and numerical diffusion.
- Coupler architecture, remapping, conservative interpolation, flux exchange, asynchronous coupling, and parallel scaling.
- Resolution dependence, gray-zone convection, scale-aware schemes, stochastic parameterization, and computational cost tradeoffs.
- Machine-learning parameterizations, neural operators, hybrid models, online stability, conservation, interpretability, and extrapolation risk.
- Differentiable climate models, adjoints, automatic differentiation, parameter estimation, and sensitivity analysis.
- Debugging climate codes: energy leaks, water leaks, tracer nonconservation, restart reproducibility, and bit-for-bit traps.

### 10. Extremes, Risk, and Tails
- Extreme value theory, block maxima, peaks-over-threshold, nonstationary GEV/GPD, and covariate selection.
- Heat stress metrics, wet-bulb temperature, urban heat, compound heat-drought events, and physiological thresholds.
- Hydrologic extremes: atmospheric rivers, snowpack, rain-on-snow, soil moisture feedback, flood frequency, and drought propagation.
- Tropical cyclones, extratropical storms, blocking, jet shifts, mesoscale convective systems, and model-resolution limitations.
- Low-likelihood high-impact outcomes, deep uncertainty, robust decision making, storylines, and stress testing.
- Cascading risk: food systems, power grids, migration, insurance, finance, conflict, and adaptation limits.

### 11. Scenarios, Mitigation, and Integrated Assessment
- SSP/RCP architecture, forcing pathways, baseline construction, IAM assumptions, discounting, technology constraints, and damage functions.
- Net zero, overshoot, carbon dioxide removal, short-lived climate pollutants, methane mitigation, and aerosol masking.
- Geoengineering: stratospheric aerosol injection, marine cloud brightening, termination shock, governance, and regional precipitation risk.
- Mitigation pathways by sector: power, transport, buildings, industry, land, agriculture, aviation, shipping, and non-CO2 gases.
- Justice, loss and damage, adaptation finance, historical responsibility, and distributional risk.
- How to keep policy reasoning separate from physical climate inference while still making decision-relevant science.

## Question Generation Rules
- Questions must be beyond basic PhD recall. They should require multi-step reasoning across physics, numerics, observations, and uncertainty.
- Every question should use at least two syllabus areas. Very hard questions should usually combine three or more.
- Prefer prompts where plausible experts could disagree until the decision hinge is noticed.
- Include at least two strong near-miss distractors. A wrong answer should often contain correct ingredients in the wrong order, wrong scale, or wrong diagnostic context.
- Do not let the correct answer be obviously longest or most sober.
- Use clear but slightly silly wording: smug aerosols, grumpy kernels, overconfident reanalyses, moody stratocumulus decks, carbon accountants, or a coupler wearing a fake mustache are acceptable if the science remains precise.
- Good questions test: mechanism, counterfactual reasoning, diagnostic choice, model pathology, uncertainty decomposition, or safe interpretation of evidence.

## Difficulty Bands
- **Medium**: requires two linked expert concepts, such as distinguishing forcing from feedback while interpreting a model experiment.
- **Hard**: requires three linked concepts and rejection of a tempting but flawed diagnostic, parameterization, or attribution claim.
- **Very hard**: requires at least four reasoning steps across coupled dynamics, observations, numerical modeling, and uncertainty. The best answer should feel like the one a careful senior scientist would defend in a hostile seminar.

## Reject If
- The question is just "is climate change real?"
- The prompt treats weather and climate as interchangeable.
- The correct answer depends on an up-to-the-minute statistic without a date or source context.
- The distractors are denialist caricatures rather than plausible expert mistakes.
- The question tests only acronym recognition or a single definition.
- The model answer ignores conservation, scale, internal variability, observational uncertainty, or counterfactual framing where those matter.

## Capstone
Learners complete an expert diagnostic dossier on a climate-model or attribution problem, combining dynamics, radiation, observations, uncertainty, numerical constraints, and communication of defensible inference.

## Assessment Ideas
Use multi-domain diagnostic prompts, model-failure autopsies, attribution critiques, uncertainty decomposition tasks, seminar defenses, and capstone dossiers. Assess whether the answer respects physics, numerics, evidence hierarchy, scale, and counterfactual framing.

## Research Notes
- IPCC Sixth Assessment Report, Working Group I: https://www.ipcc.ch/report/ar6/wg1/
- CMIP overview and data access: https://wcrp-cmip.org/
- NASA Global Climate Change resources: https://climate.nasa.gov/
- NOAA Climate.gov: https://www.climate.gov/
- NCAR Climate Data Guide: https://climatedataguide.ucar.edu/
