# Differential Equations
**ID**: `differentialEquations` - **Discipline**: Mathematics - **Year**: University Junior

## Course Aim
Develop a rigorous working command of ordinary differential equations as tools for modeling dynamic systems. Students learn to formulate initial-value problems, analyze qualitative behavior, solve first-order and higher-order equations, use Laplace transforms, work with linear systems, approximate solutions numerically, and interpret models in physics, engineering, biology, chemistry, economics, and data-informed applied mathematics.

## Course Design Notes
This is a university differential equations course with sustained problem-set practice, modeling labs, phase-plane interpretation, and computational verification. Route questions here when students need direction fields, Euler's method, separable equations, linear first-order equations, exact equations, second-order linear equations, mechanical vibrations, forced response, Laplace transforms, step and impulse inputs, linear systems, eigenvalue phase portraits, numerical methods, qualitative analysis, or applications of ODEs. Emphasize assumptions, units, initial conditions, existence and uniqueness, stability, exact versus numerical solutions, and the difference between solving an equation and interpreting a model.

## Chapter 1: Modeling, Slope Fields, and First-Order Foundations
- **Key concepts**: Differential equations as rate laws, order, linearity, autonomous equations, initial-value problems, solution curves, direction fields, equilibrium solutions, qualitative behavior, Euler's method, existence and uniqueness intuition, population growth, radioactive decay, Newton's law of cooling, and mixing models.
- **Practice questions**: Classify an ODE; sketch solution curves from a slope field; use Euler's method with a fixed step size; identify equilibria and their stability in an autonomous equation.
- **Student output**: A first-order modeling notebook with slope fields, numerical approximations, equilibrium analysis, and written interpretation of parameters and initial conditions.

## Chapter 2: Analytic Methods for First-Order ODEs
- **Key concepts**: Separable equations, linear first-order equations, integrating factors, exact equations, tests for exactness, substitutions, homogeneous first-order equations, Bernoulli equations, logistic equations, terminal velocity, tank mixing, and limitations of closed-form methods.
- **Practice questions**: Solve a separable equation with an initial condition; find and apply an integrating factor; test exactness and solve an exact equation; choose an appropriate substitution for a Bernoulli equation.
- **Student output**: A methods comparison problem set that identifies equation type, justifies method choice, solves carefully, and checks the solution by substitution.

## Chapter 3: Second-Order Linear Equations
- **Key concepts**: Linear second-order initial-value problems, superposition, homogeneous equations with constant coefficients, characteristic equations, real repeated and complex roots, Wronskian, fundamental solution sets, nonhomogeneous equations, method of undetermined coefficients, variation of parameters, and boundary-value previews.
- **Practice questions**: Solve a homogeneous equation with complex roots; find a particular solution by undetermined coefficients; use variation of parameters when forcing terms do not fit trial-solution rules; verify linear independence with the Wronskian.
- **Student output**: A second-order equation packet with exact solutions, method selection notes, and verification that initial conditions and differential equations are both satisfied.

## Chapter 4: Oscillations, Forcing, and Engineering Models
- **Key concepts**: Mass-spring-damper systems, free and forced motion, underdamped overdamped and critically damped cases, resonance, beats, amplitude and phase, RLC circuits, mechanical-electrical analogies, dimensional interpretation, and steady-state versus transient response.
- **Practice questions**: Model a damped oscillator from physical parameters; classify damping from the characteristic roots; compute forced response; explain resonance in terms of forcing frequency and system behavior.
- **Student output**: An oscillation lab connecting equations, parameter values, solution forms, graphs, and physical interpretation for a mechanical or electrical system.

## Chapter 5: Laplace Transforms and Discontinuous Inputs
- **Key concepts**: Laplace transform definition, transform tables, linearity, shifting theorems, inverse transforms, partial fractions, solving initial-value problems, Heaviside step functions, piecewise forcing, impulse inputs, Dirac delta modeling, convolution, and transfer-function viewpoint.
- **Practice questions**: Compute a transform from the definition for a basic function; solve an IVP using Laplace transforms; represent a piecewise input with step functions; use convolution to express a forced response.
- **Student output**: A Laplace-transform problem set with transform-domain algebra, inverse-transform work, and graphs explaining how discontinuous or impulsive inputs affect solutions.

## Chapter 6: Linear Systems and Phase Plane Analysis
- **Key concepts**: First-order systems, converting higher-order equations to systems, matrix form x' = Ax, eigenvalues and eigenvectors, real and complex eigenvalues, repeated eigenvalues, fundamental matrices, matrix exponentials, phase portraits, nodes, saddles, spirals, centers, stability, and linearization preview.
- **Practice questions**: Convert a second-order equation to a first-order system; solve a homogeneous linear system using eigenvalues; classify a critical point; sketch a phase portrait and interpret trajectories.
- **Student output**: A phase-plane portfolio with computed solutions, eigenvalue classifications, direction-field or software plots, and explanations of long-term behavior.

## Chapter 7: Nonlinear and Qualitative Analysis
- **Key concepts**: Autonomous nonlinear systems, equilibria, nullclines, local linearization, Jacobian matrices, stability from eigenvalues, phase-line analysis, bifurcation examples, predator-prey models, competing species, epidemic models, chemical reactions, and model sensitivity.
- **Practice questions**: Draw nullclines and infer motion in the phase plane; linearize a nonlinear system at an equilibrium; classify stability where linearization is decisive; interpret a parameter change in a population model.
- **Student output**: A qualitative-analysis memo using nullclines, equilibrium classification, and parameter interpretation to explain a nonlinear model without relying only on closed-form solutions.

## Chapter 8: Numerical Methods, Series Solutions, and Applications
- **Key concepts**: Error and step size, Euler's method, improved Euler methods, Runge-Kutta methods, numerical stability, software implementation, comparing numerical and analytic solutions, power-series solutions near ordinary points, regular singular points, Frobenius method preview, Bessel and Legendre equations, and application case studies.
- **Practice questions**: Implement RK4 for an initial-value problem; compare numerical error across step sizes; derive a recurrence relation for a power-series solution; decide when numerical evidence should be trusted cautiously.
- **Student output**: A computational lab using Python, Julia, MATLAB, Octave, or a CAS to solve and visualize an ODE model, compare methods, and discuss error and model assumptions.

## Capstone
Students complete a differential equations modeling project built around a dynamic system. The project must formulate an ODE or system of ODEs, state assumptions and units, analyze qualitative behavior, solve analytically when feasible, compute a numerical solution, compare solution methods, and interpret results in context. Suitable topics include population dynamics, epidemics, pharmacokinetics, heating and cooling, chemical mixing, mechanical vibration, RLC circuits, predator-prey systems, harvesting models, economic adjustment, or control response to discontinuous inputs.

## Assessment Ideas
- Weekly written problem sets graded for setup, method choice, algebra, initial-condition use, verification, and interpretation.
- Short quizzes on equation classification, separable equations, integrating factors, characteristic equations, Laplace transforms, eigenvalue classifications, and numerical-method steps.
- Modeling labs requiring students to state assumptions, derive equations, choose units, plot solutions, and interpret parameters.
- Computational assignments using Python, Julia, MATLAB, Octave, Mathematica, or a CAS to compare slope fields, phase portraits, and numerical approximations.
- Capstone rubric covering model formulation, mathematical correctness, qualitative analysis, numerical validation, application interpretation, and communication.

## Research Notes
- MIT OCW 18.03SC, Differential Equations: https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/
- MIT OCW 18.03, Differential Equations: https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/
- OpenStax, Differential Equations: https://openstax.org/details/books/differential-equations
- Paul's Online Notes, Differential Equations: https://tutorial.math.lamar.edu/Classes/DE/DE.aspx
- University of British Columbia, CLP Differential Equations: https://personal.math.ubc.ca/~CLP/CLP2/
- UC Davis, Differential Equations course materials: https://www.math.ucdavis.edu/~hunter/m22b/
- Virginia Tech, Differential Equations course notes: https://www.math.vt.edu/people/brown/doc/diffeq.pdf
