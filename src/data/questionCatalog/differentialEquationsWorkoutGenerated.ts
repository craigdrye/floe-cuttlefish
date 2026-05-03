import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson:
    'Coverage source: Numbas, WeBWorK, and Khan/Kolibri differential-equation clusters. This is an authored Floe-native drill item, not a direct raw import.',
  source: 'Generated from differential-equation coverage',
})

export const differentialEquationsWorkoutGeneratedQuestions = makeQuestionBank('Mathematics', [
  q(398001, 'Foundations', 'Differential equation', 'A differential equation is an equation involving:', 'An unknown function and one or more of its derivatives', [
    miss('Only whole numbers and no variables', 'Differential equations involve rates of change.', 'Look for derivatives.'),
    miss('Only matrices and determinants', 'Those belong to linear algebra unless derivatives appear.', 'The key word is differential.'),
    miss('Only probability values', 'Probability can use differential equations, but it is not the definition.', 'Focus on unknown functions and derivatives.'),
  ]),
  q(398002, 'Foundations', 'Order', 'The order of a differential equation is determined by:', 'The highest derivative that appears', [
    miss('The number of constants in the equation', 'Constants do not determine order.', 'Look for y\', y\'\', etc.'),
    miss('The largest coefficient', 'Coefficient size is irrelevant.', 'Order tracks derivative level.'),
    miss('The number of variables in the title', 'Titles do not determine mathematical order.', 'Inspect derivatives.'),
  ]),
  q(398003, 'Foundations', 'First order', 'The equation dy/dx = 3x + y is:', 'First order', [
    miss('Second order', 'Only the first derivative appears.', 'No y\'\' is present.'),
    miss('Zero order', 'A derivative appears, so it is not zero order.', 'dy/dx is first derivative.'),
    miss('Fourth order', 'The coefficient 3 does not set the order.', 'Order is derivative order.'),
  ]),
  q(398004, 'Foundations', 'Solution meaning', 'A solution to a differential equation is:', 'A function that satisfies the equation when substituted in', [
    miss('Only a number that makes x zero', 'Solutions are usually functions, not just numbers.', 'Substitute the function and derivative.'),
    miss('A graph color', 'Visual style is irrelevant.', 'Use the equation.'),
    miss('A matrix inverse', 'That is not the general meaning here.', 'A DE solution is a function.'),
  ]),
  q(398005, 'Initial Value Problems', 'Initial condition', 'An initial condition such as y(0)=2 is used to:', 'Choose one particular solution from a family', [
    miss('Change the differential equation order', 'Initial conditions do not change order.', 'They determine constants.'),
    miss('Remove the derivative before solving', 'The derivative still matters.', 'Use it after finding the general family.'),
    miss('Make every solution linear', 'Initial values do not force linearity.', 'They pin down a constant.'),
  ]),
  q(398006, 'Initial Value Problems', 'General vs particular', 'A general solution usually contains:', 'An arbitrary constant such as C', [
    miss('No constants ever', 'Indefinite integration produces constants.', 'General families need parameters.'),
    miss('Only one numerical point', 'That is an initial condition, not a general solution.', 'Look for C.'),
    miss('Only the derivative y\'', 'A solution should describe y itself when possible.', 'General solution is a family of functions.'),
  ]),
  q(398007, 'Separable Equations', 'Separable form', 'dy/dx = x y is separable because it can be rewritten as:', 'dy/y = x dx', [
    miss('dy = y/x dx', 'That divides by the wrong variable.', 'Move y with dy.'),
    miss('dx/dy = xy', 'That inverts the derivative without solving.', 'Separate y terms and x terms.'),
    miss('y = x + C immediately', 'You still need to integrate.', 'Separate first.'),
  ]),
  q(398008, 'Separable Equations', 'Simple integration', 'Solve dy/dx = 2x.', 'y = x^2 + C', [
    miss('y = 2 + C', 'The integral of 2x is x^2, not 2.', 'Integrate with respect to x.'),
    miss('y = 2x + C', 'That copies the derivative.', 'Find an antiderivative.'),
    miss('y = x + C', 'The coefficient/power is wrong.', 'Reverse the power rule.'),
  ]),
  q(398009, 'Separable Equations', 'Exponential growth', 'Solve dy/dt = ky.', 'y = Ce^(kt)', [
    miss('y = kt + C', 'That would solve dy/dt = k.', 'Rate proportional to y gives exponential.'),
    miss('y = C e^t + k', 'k belongs in the exponent coefficient.', 'Separate dy/y = k dt.'),
    miss('y = C/t', 'Reciprocal decay is not the basic growth solution.', 'Use ln y = kt + C.'),
  ]),
  q(398010, 'Separable Equations', 'Logistic clue', 'The equation dP/dt = kP(1 - P/M) models growth that:', 'Slows as P approaches carrying capacity M', [
    miss('Accelerates without bound forever', 'The factor 1 - P/M shrinks near M.', 'Carrying capacity limits growth.'),
    miss('Is always negative for small positive P', 'For small P below M, the rate is positive.', 'Check signs.'),
    miss('Has no equilibrium', 'P=0 and P=M are equilibria.', 'Set dP/dt = 0.'),
  ]),
  q(398011, 'Equilibria', 'Equilibrium solution', 'An equilibrium solution occurs when:', 'dy/dt = 0', [
    miss('dy/dt is very large', 'Equilibrium means no change.', 'Set the rate to zero.'),
    miss('y is never defined', 'Equilibrium is a defined constant solution.', 'A constant function has zero derivative.'),
    miss('t equals every possible value', 'Time varies; the state stays constant.', 'Focus on derivative.'),
  ]),
  q(398012, 'Equilibria', 'Stable equilibrium', 'A stable equilibrium is one where nearby solutions tend to:', 'Move toward the equilibrium', [
    miss('Move away from the equilibrium', 'That is unstable.', 'Stable means attracting.'),
    miss('Become undefined instantly', 'Stability concerns nearby solution behavior.', 'Think long-run attraction.'),
    miss('Ignore the differential equation', 'Solutions follow the equation.', 'Use direction arrows.'),
  ]),
  q(398013, 'Slope Fields', 'Slope field', 'A slope field displays:', 'Small line segments showing dy/dx at many points', [
    miss('Only exact algebraic solutions', 'Slope fields show local directions even before solving.', 'Each segment is a local slope.'),
    miss('A histogram of y-values', 'Histograms are data displays.', 'Slope fields are differential equation visuals.'),
    miss('Only intercepts of a graph', 'It shows more than intercepts.', 'Look at directions across the plane.'),
  ]),
  q(398014, 'Slope Fields', 'Horizontal segments', 'In a slope field, horizontal segments indicate:', 'dy/dx = 0', [
    miss('dy/dx is undefined', 'Undefined slopes are vertical, not horizontal.', 'Horizontal means zero slope.'),
    miss('y is always zero', 'The slope can be zero away from the x-axis.', 'It depends on the differential equation.'),
    miss('The solution cannot pass there', 'Solutions can pass through horizontal-slope points.', 'The tangent is flat there.'),
  ]),
  q(398015, 'Linear First Order', 'Linear form', 'A first-order linear equation can be written as:', 'y\' + p(x)y = q(x)', [
    miss('y y\' = x only', 'That is often nonlinear in y.', 'Linear means y and y\' appear to first power and not multiplied together.'),
    miss('y^2 + y = 0 only', 'The y^2 term is nonlinear.', 'Use y\' + p(x)y = q(x).'),
    miss('sin(y) = x always', 'sin(y) is nonlinear in y.', 'Linear concerns the unknown function.'),
  ]),
  q(398016, 'Linear First Order', 'Integrating factor', 'For y\' + p(x)y = q(x), the usual integrating factor is:', 'e^(integral p(x) dx)', [
    miss('e^(integral q(x) dx)', 'The integrating factor uses the coefficient of y.', 'Use p(x), not q(x).'),
    miss('p(x) + q(x)', 'The factor is exponential of an integral.', 'Recall mu(x).'),
    miss('1/q(x)', 'That is not the standard formula.', 'Use exp of integral p.'),
  ]),
  q(398017, 'Linear First Order', 'Homogeneous linear', 'The equation y\' + 2y = 0 has general solution:', 'y = Ce^(-2x)', [
    miss('y = Ce^(2x)', 'The sign is wrong.', 'Move 2y to the right: y\' = -2y.'),
    miss('y = 2x + C', 'That would come from a constant derivative.', 'This is proportional decay.'),
    miss('y = C - 2x', 'Linear decay is not the solution.', 'Solve dy/y = -2 dx.'),
  ]),
  q(398018, 'Linear First Order', 'Particular solution', 'For y\' = 3y and y(0)=5, the solution is:', 'y = 5e^(3t)', [
    miss('y = 3e^(5t)', 'The initial value and rate are swapped.', 'Initial value is the multiplier.'),
    miss('y = 5 + 3t', 'That is linear growth, not proportional growth.', 'dy/dt proportional to y gives exponential.'),
    miss('y = e^(15t)', 'Do not multiply rate and initial value in the exponent.', 'Use Ce^(kt).'),
  ]),
  q(398019, 'Autonomous Equations', 'Autonomous equation', 'An autonomous differential equation has derivative depending on:', 'The state variable, not explicitly on time', [
    miss('Time only and never the state', 'That is not the autonomous pattern.', 'Autonomous means no explicit t.'),
    miss('Random noise only', 'Noise is a stochastic extension, not the definition.', 'Look for dy/dt = f(y).'),
    miss('The color of the graph', 'Display choices are irrelevant.', 'Use variables in the equation.'),
  ]),
  q(398020, 'Autonomous Equations', 'Phase line', 'A phase line is used mainly to analyze:', 'Equilibria and direction of motion for one-dimensional autonomous equations', [
    miss('Matrix multiplication dimensions', 'That is linear algebra.', 'Phase lines show arrows along the state axis.'),
    miss('Only second partial derivatives', 'That is multivariable calculus.', 'Phase lines are qualitative ODE tools.'),
    miss('The exact area under every curve', 'It is qualitative, not exact integration.', 'Use signs of f(y).'),
  ]),
  q(398021, 'Second Order Equations', 'Second order clue', 'Which equation is second order?', 'y\'\' + y = 0', [
    miss('y\' + y = 0', 'Only first derivative appears.', 'Second order needs y\'\'.'),
    miss('y = x^2', 'No derivative appears.', 'Look for highest derivative.'),
    miss('dy/dx = y', 'That is first order.', 'Second derivative is required.'),
  ]),
  q(398022, 'Second Order Equations', 'Characteristic equation', 'For y\'\' + 5y\' + 6y = 0, the characteristic equation is:', 'r^2 + 5r + 6 = 0', [
    miss('r + 5 + 6 = 0', 'The second derivative gives r^2.', 'Replace y\'\' by r^2 and y\' by r.'),
    miss('r^2 + 6r + 5 = 0', 'The coefficients are swapped.', 'Keep 5 with y\' and 6 with y.'),
    miss('y^2 + 5y + 6 = 0', 'The characteristic equation uses r.', 'Use trial y=e^(rx).'),
  ]),
  q(398023, 'Second Order Equations', 'Distinct roots', 'If the characteristic roots are r=2 and r=3, the homogeneous solution is:', 'C1 e^(2x) + C2 e^(3x)', [
    miss('C e^(5x)', 'Distinct roots give two independent terms, not one combined exponent.', 'Use one term per root.'),
    miss('C1 x^2 + C2 x^3', 'Characteristic roots create exponentials.', 'Use e^(rx).'),
    miss('C1 e^x + C2 e^x', 'The roots 2 and 3 must appear.', 'Use each root in the exponent.'),
  ]),
  q(398024, 'Second Order Equations', 'Repeated root', 'For a repeated characteristic root r, the two basic solution terms are:', 'e^(rx) and x e^(rx)', [
    miss('e^(rx) and e^(rx)', 'Those are not independent.', 'Multiply one term by x.'),
    miss('r and x only', 'Solutions are functions of x.', 'Use exponentials.'),
    miss('sin(rx) and cos(rx) always', 'That is for complex roots.', 'Repeated real root uses x e^(rx).'),
  ]),
  q(398025, 'Second Order Equations', 'Complex roots', 'Roots alpha plus/minus beta i lead to terms involving:', 'e^(alpha x) cos(beta x) and e^(alpha x) sin(beta x)', [
    miss('Only e^(beta x)', 'The imaginary part creates sine/cosine.', 'Use Euler-form pattern.'),
    miss('Only x e^(alpha x)', 'That is repeated-root behavior.', 'Complex roots oscillate.'),
    miss('Only constants', 'The solution varies with x.', 'Use exponential times trig.'),
  ]),
  q(398026, 'Undetermined Coefficients', 'Method fit', 'Undetermined coefficients is commonly used for:', 'Linear constant-coefficient equations with simple forcing terms', [
    miss('Every nonlinear equation', 'The method has a restricted setting.', 'It works for certain linear equations.'),
    miss('Only separable first-order equations', 'Separation is a different method.', 'Undetermined coefficients guesses a particular form.'),
    miss('Only matrix determinant problems', 'This is an ODE method.', 'Look for forcing like polynomials, exponentials, trig.'),
  ]),
  q(398027, 'Undetermined Coefficients', 'Guess for exponential', 'For forcing term 7e^(2x), a natural particular-solution guess is:', 'A e^(2x)', [
    miss('Ax + B only', 'That fits polynomial forcing.', 'Match the exponential shape.'),
    miss('A sin(2x)', 'That fits trig forcing, not exponential.', 'Use e^(2x).'),
    miss('A/x', 'That is not the standard guess.', 'Mirror the forcing type.'),
  ]),
  q(398028, 'Variation of Parameters', 'Variation of parameters', 'Variation of parameters is used to find:', 'A particular solution to a nonhomogeneous linear equation', [
    miss('Only the determinant of a matrix', 'Wronskians may appear, but the goal is a particular solution.', 'It is an ODE method.'),
    miss('Only equilibrium points of autonomous equations', 'That is phase-line analysis.', 'Variation handles nonhomogeneous linear equations.'),
    miss('Only the order of an equation', 'Order is identified before solving.', 'The method constructs a solution.'),
  ]),
  q(398029, 'Laplace Transforms', 'Laplace transform role', 'The Laplace transform often converts differential equations into:', 'Algebraic equations in a transform variable', [
    miss('Histograms', 'Laplace transforms are analytic tools.', 'They turn derivatives into algebraic expressions.'),
    miss('Truth tables', 'That is logic.', 'Think s-domain.'),
    miss('Only geometry diagrams', 'The method is symbolic.', 'Differential becomes algebraic.'),
  ]),
  q(398030, 'Laplace Transforms', 'Derivative transform', 'The Laplace transform of y\' includes:', 'sY(s) - y(0)', [
    miss('Y(s) only', 'The derivative introduces s and the initial value.', 'Initial conditions are built in.'),
    miss('y(0)/s only', 'That is not the derivative formula.', 'Use sY minus initial value.'),
    miss('s + y(0)', 'Y(s) must appear.', 'Transform the function and initial value.'),
  ]),
  q(398031, 'Systems of ODEs', 'System notation', 'A linear system of first-order ODEs is often written:', 'x\' = Ax', [
    miss('A + x = 0 only', 'Systems use matrix-vector multiplication.', 'Derivative vector equals matrix times state vector.'),
    miss('det(x) = A', 'x is a vector, not a square matrix determinant.', 'Use state vector notation.'),
    miss('x dot A = 1 only', 'Dot product is not the standard system form.', 'Use x\' = Ax.'),
  ]),
  q(398032, 'Systems of ODEs', 'Eigenvalue behavior', 'For x\' = Ax, eigenvalues of A help determine:', 'Growth, decay, and oscillation behavior', [
    miss('Only the font of the solution', 'Eigenvalues affect dynamics, not display.', 'They control modes.'),
    miss('Only whether A has integer entries', 'Integer entries are not the issue.', 'Eigenvalues determine time behavior.'),
    miss('The number of unrelated variables in the title', 'They determine solution modes.', 'Use linear-system dynamics.'),
  ]),
  q(398033, 'Numerical Methods', 'Euler method', 'Euler method updates y by using:', 'Current slope times step size', [
    miss('Future exact solution only', 'Euler is approximate and uses current information.', 'y_new = y_old + h f(x,y).'),
    miss('Only the second derivative', 'Basic Euler uses the first derivative field.', 'Use slope at current point.'),
    miss('A random jump', 'Euler follows a deterministic update rule.', 'Step along tangent direction.'),
  ]),
  q(398034, 'Numerical Methods', 'Step size', 'Reducing Euler method step size usually:', 'Improves accuracy but requires more steps', [
    miss('Always makes accuracy worse', 'Smaller steps typically reduce local approximation error.', 'Trade accuracy for computation.'),
    miss('Eliminates all error exactly', 'Numerical methods still approximate.', 'Smaller is not perfect.'),
    miss('Makes the equation non-differential', 'Step size does not change the original equation.', 'It changes numerical approximation.'),
  ]),
  q(398035, 'Qualitative Analysis', 'Direction field crossing', 'For a well-behaved first-order ODE y\'=f(x,y), solution curves usually do not cross because:', 'A point has a unique slope and solution under uniqueness conditions', [
    miss('Graphs are not allowed to intersect in algebra', 'Graphs can intersect in general.', 'Uniqueness is the ODE reason.'),
    miss('The x-axis blocks them', 'Axes do not block solutions.', 'Use uniqueness.'),
    miss('Every solution is horizontal', 'Many solutions are not horizontal.', 'Crossing would imply two futures from one point.'),
  ]),
  q(398036, 'Modeling', 'Newton cooling', 'Newton\'s law of cooling says temperature changes at a rate proportional to:', 'The difference between object temperature and ambient temperature', [
    miss('The square of time only', 'Cooling depends on temperature gap.', 'The environment matters.'),
    miss('The object mass only', 'Mass may affect constants, but the law uses temperature difference.', 'Rate follows gap to ambient.'),
    miss('The room number', 'That is irrelevant.', 'Use temperature difference.'),
  ]),
  q(398037, 'Modeling', 'Mixing model', 'A tank mixing differential equation usually tracks:', 'Amount of substance in the tank over time', [
    miss('Only the color of the tank', 'The model tracks quantity/concentration.', 'Use inflow-outflow substance balance.'),
    miss('Only a determinant', 'Mixing is an applied ODE model.', 'Track amount.'),
    miss('Only a one-time average', 'The amount changes over time.', 'Use rate in minus rate out.'),
  ]),
  q(398038, 'Modeling', 'Population growth', 'The simplest exponential population model assumes:', 'Growth rate proportional to population size', [
    miss('Growth rate independent of population size', 'That would produce linear growth.', 'Proportional rate gives exponential.'),
    miss('Population is always zero', 'That is not a growth model.', 'Use dP/dt = kP.'),
    miss('Population changes only by matrix addition', 'This is scalar population modeling.', 'Use proportional growth.'),
  ]),
  q(398039, 'Modeling', 'Half-life', 'Radioactive decay is commonly modeled by:', 'dN/dt = -kN with k > 0', [
    miss('dN/dt = kN with k > 0', 'That models growth, not decay.', 'Decay needs negative rate.'),
    miss('dN/dt = k only', 'That is linear change.', 'Radioactive decay is proportional to amount remaining.'),
    miss('N = 0 for all time only', 'Nonzero samples decay gradually.', 'Use proportional decay.'),
  ]),
  q(398040, 'Modeling', 'Forcing term', 'In y\'\' + y = cos t, cos t is a:', 'Forcing term', [
    miss('Homogeneous term', 'A nonzero right-side input makes the equation nonhomogeneous.', 'External input drives the system.'),
    miss('Derivative of y', 'cos t does not involve y here.', 'It is an input as a function of t.'),
    miss('Boundary condition', 'Boundary conditions specify values at points.', 'This is part of the equation.'),
  ]),
  q(398041, 'Boundary Value Problems', 'Boundary value problem', 'A boundary value problem specifies conditions:', 'At two or more points of the independent variable', [
    miss('Only at the initial point', 'That is an initial value problem.', 'Boundary problems often use endpoints.'),
    miss('Only on the graph color', 'Conditions are mathematical values.', 'Look for y(a), y(b).'),
    miss('Only on the coefficient names', 'Names are not boundary data.', 'Use values at boundaries.'),
  ]),
  q(398042, 'Existence and Uniqueness', 'Uniqueness idea', 'An existence and uniqueness theorem tells us:', 'Whether a solution exists and whether it is the only one near a point', [
    miss('The exact solution formula in every case', 'The theorem may guarantee without solving.', 'It is about existence/uniqueness.'),
    miss('Only the determinant of the coefficient matrix', 'That is too narrow.', 'It concerns solutions to differential equations.'),
    miss('That every equation has infinitely many solutions', 'Some have unique local solutions.', 'The theorem gives conditions.'),
  ]),
  q(398043, 'Nonlinear Equations', 'Nonlinear clue', 'Which term makes an equation nonlinear in y?', 'y^2', [
    miss('3y', 'That is linear in y.', 'Powers higher than one break linearity.'),
    miss('y\'', 'A first derivative can appear linearly.', 'Linearity concerns y and derivatives to first power.'),
    miss('sin x', 'A function of x alone can be a forcing term in a linear equation.', 'Nonlinear in the unknown function is the issue.'),
  ]),
  q(398044, 'Nonlinear Equations', 'Separable nonlinear', 'dy/dx = y^2 can be solved by:', 'Separating variables', [
    miss('Ignoring y^2', 'The y-dependence is essential.', 'Move y terms to one side.'),
    miss('Using only matrix row reduction', 'This is a scalar nonlinear ODE.', 'Separation works: dy/y^2 = dx.'),
    miss('Declaring it unsolvable always', 'Many nonlinear equations are solvable by separation.', 'Try separating variables.'),
  ]),
  q(398045, 'Exact Equations', 'Exact equation idea', 'An exact first-order equation has a left side that can be treated as:', 'The total differential of a potential function', [
    miss('A random unrelated derivative', 'Exactness has a specific potential-function meaning.', 'Think dF = M dx + N dy.'),
    miss('Only a determinant', 'Exact equations are not determinant-only problems.', 'Use total differential.'),
    miss('A histogram bin', 'That is data analysis.', 'Stay with differential forms.'),
  ]),
  q(398046, 'Exact Equations', 'Exactness test', 'For M(x,y)dx + N(x,y)dy = 0, exactness usually checks whether:', 'M_y = N_x', [
    miss('M = N always', 'The functions need not be identical.', 'Compare cross partial derivatives.'),
    miss('M_x = N_y only', 'The standard test is M_y and N_x.', 'Differentiate each with respect to the other variable.'),
    miss('M and N are both zero', 'That is sufficient but not the general condition.', 'Use cross-partials.'),
  ]),
  q(398047, 'Power Series', 'Series solution', 'A power series method assumes a solution like:', 'y = sum a_n x^n', [
    miss('y = one constant only', 'Series methods use infinitely many coefficients.', 'Look for a power expansion.'),
    miss('y = det(A)', 'That is not a function series.', 'Use coefficients a_n.'),
    miss('y = x divided by every derivative', 'That is not the standard form.', 'Power series use powers of x.'),
  ]),
  q(398048, 'Power Series', 'Recurrence relation', 'In a power-series solution, coefficients are often found using:', 'A recurrence relation', [
    miss('Alphabetical sorting', 'Coefficient relations are algebraic, not alphabetical.', 'Equate powers of x.'),
    miss('Only a graph color', 'Display is irrelevant.', 'Coefficients come from equations.'),
    miss('Guessing every coefficient independently with no equations', 'The differential equation links coefficients.', 'Use recurrence.'),
  ]),
  q(398049, 'Concept Checks', 'Linearity test', 'Which equation is linear?', 'y\' + x y = sin x', [
    miss('y\' + y^2 = x', 'The y^2 term makes it nonlinear.', 'Unknown function must appear to first power.'),
    miss('y y\' = x', 'Product of y and y\' is nonlinear.', 'No products of unknown and derivative.'),
    miss('sin(y) = x', 'A nonlinear function of y appears.', 'Linear in y and derivatives only.'),
  ]),
  q(398050, 'Concept Checks', 'Method choice', 'For dy/dx = x/y, the most natural first method is:', 'Separate variables', [
    miss('Undetermined coefficients', 'That method is for certain linear nonhomogeneous equations.', 'Here x and y can be separated.'),
    miss('Laplace transform always', 'Laplace is possible in some contexts, but this simple equation separates.', 'Move y dy = x dx.'),
    miss('Matrix diagonalization', 'This is not a linear system.', 'Use separation.'),
  ]),
])
