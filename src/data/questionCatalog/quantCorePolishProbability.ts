// Mentor hints and length-shortened correct answers for the Probability Core
// (quant track, chapter "Probability"). Generated as part of the Phase 4
// quality polish pass — see docs/audit/career/quant_phase4_quality_audit.md.
//
// PROBABILITY_MENTOR_HINTS provides bespoke one-line hints for the "Hint"
// button (replacing the generic "What is the fundamental mathematical or
// financial principle being tested here?" scaffold).
//
// PROBABILITY_CORRECT_SHORTENED trims long correct-answer strings that the
// audit flagged as guess-by-length. Any explanatory text removed from the
// correct option lands in `lessonAddendum` so no teaching content is lost.

export const PROBABILITY_MENTOR_HINTS: Record<number, string> = {
  19101: 'Enumerate the sample space of two-child families given the conditioning event, then count favourable cases.',
  19102: 'Compute the conditional probability that the next chamber holds a bullet given the last chamber was empty, then compare to the unconditional 2/6.',
  19103: 'Place the four aces one at a time and ask, at each step, what fraction of remaining seats are "ace-free hands".',
  19104: 'Use the martingale property of a symmetric random walk: expected final wealth equals initial wealth.',
  19105: 'Fix one point as an "anchor" and use rotational symmetry to count semicircle orientations without double-counting.',
  19106: 'P(at least one match) is easier as 1 - P(no matches). Multiply out the no-match probability and find where it crosses 1/2.',
  19107: 'Track displacements as a chain. By the time the last passenger boards, only two specific seats remain - which two?',
  19108: 'Use an indicator variable for "a loop forms at step k" and apply linearity of expectation.',
  19109: 'Set up a recursive expectation E = (mean roll) + P(roll again) * E and solve.',
  19110: 'Treat the 4 aces as dividers splitting the other 48 cards into 5 symmetric gaps. Expected first-gap size plus 1.',
  19111: 'Apply Bayes. The prior is tiny but the likelihood ratio is 1024:1 - work out which one wins.',
  19112: 'Find two outcomes with equal probability under any bias p. Hint: look at pairs of tosses.',
  19113: 'Use a geometric wait for each new coupon and sum N/(N-k) as k runs from 0 to N-1.',
  19114: 'Collisions are equivalent to ants passing through each other - so each ant just walks one direction to an edge.',
  19115: 'Find the CDF of the max (it factors as a product), differentiate to get the PDF, then integrate z * f(z).',
  19116: 'Set up the recurrence P(n) = 0.5 P(n-1) + 0.5 P(n-2) and solve via the characteristic equation.',
  19117: 'They meet in the final iff they are in different halves of the bracket. Count favourable slot placements.',
  19118: 'This is the derangement problem. Apply inclusion-exclusion and recognize the partial sum of the series for 1/e.',
  19119: 'Each family has exactly one girl. Use linearity of expectation on the geometric number of boys per family.',
  19120: 'By exchangeability, each of the n+1 darts is equally likely to be the closest to center. Use symmetry, not integration.',
  19121: 'Maximize P(first n-1 different) * P(nth matches). Differentiate (or scan) to find the sweet spot.',
  19122: 'Count distinct triples and use that exactly one of 3! orderings is increasing.',
  19123: 'Compare the conditional probabilities under "switch" vs "stay" given the host has just opened a goat door.',
  19124: 'Let P be extinction probability and write P as the average of the four offspring branches. Solve the resulting cubic.',
  19125: 'Track which color is "last out". Use symmetry of the last-out positions among the colors involved.',
  19126: 'This is Bertrand\'s Ballot Theorem - use the Reflection Principle to count paths that stay strictly above zero.',
  19127: 'The exponential interarrival time is memoryless - past quiet provides zero information about the next minute.',
  19128: 'Map arrival times to a unit square; the meeting region is the band |X - Y| < 1/4. Compute its area.',
  19129: 'Set up the triangle inequality on the three pieces and compute the area of the feasible region in the unit square.',
  19131: 'This is the secretary problem. The optimal reject-then-accept threshold scales as n/e, giving win probability 1/e.',
  19132: 'P(N > n) is the volume of the n-simplex sum < 1. Sum tail probabilities and recognize the Taylor series for e.',
  19133: 'Use the Reflection Principle on Brownian motion to derive the first-passage CDF, then identify the distribution.',
  19134: 'Apply the Reflection Principle: paths that hit level a split symmetrically about a after the hitting time.',
  19135: 'Use the martingale (q/p)^S_n and Optional Stopping at the absorbing barriers 0 and N.',
  19136: 'Recall the two conditions that together guarantee a unique stationary distribution for a finite Markov chain.',
  19137: 'Verify the detailed balance condition pi_i P_ij = pi_j P_ji with pi_i proportional to the local connectivity.',
  19146: 'The estimator maximizes the likelihood function. What does taking d/dtheta of log L tell you?',
  19147: 'Estimating the mean costs one degree of freedom. What correction is needed to make the variance estimator unbiased?',
  19148: 'Compare the two modes of convergence: in probability vs almost-sure. Which is the stronger statement?',
  19150: 'Solve the functional equation P(X > s+t) = P(X > s) P(X > t) - which continuous survival function fits?',
  19151: 'Standardize the sample mean. What distribution does it converge to, and under what moment condition?',
  19152: 'A strong correlation cannot rule out a confounder Z that drives both X and Y. Causation requires more than association.',
  19153: 'Independence is exactly the statement that conditioning on one event does not change the probability of the other.',
  19154: 'Backward induction: on each roll, accept the result iff it exceeds the expected payoff from continuing.',
  19156: 'The 3x3 correlation matrix must be positive semi-definite. That constraint gives a lower bound on Corr(A,C).',
  19159: 'For N uniform order statistics, E[max] = N/(N+1) and E[min] = 1/(N+1). Subtract.',
  19160: 'Compare tail decay rates. Which distribution\'s tails make integral of x^2 f(x) dx diverge?',
  19161: 'Convolve two rectangular densities on [0,1]. The result is piecewise linear - what shape does it make?',
  19162: 'For any weight vector w, Var(w\'X) >= 0. What does that say about w\'Cov(X)w?',
  19163: 'Apply the probability integral transform: F(X) is uniform on [0,1] when X has continuous CDF F.',
  19405: 'Apply linearity of expectation to two independent dice. No enumeration needed.',
  19812: 'Bayes: P(suspicious | flagged) = P(flagged | suspicious) P(suspicious) / P(flagged). Build the denominator carefully.',
  19813: 'Compute P(A), P(B), and P(A and B) explicitly and check whether the product rule for independence holds.',
  19814: 'Count favourable panels with C(7,2) C(5,2) and divide by C(12,4).',
  19815: 'For a binomial count of independent indicators, E[X] = n * p. Do not round it.',
  19816: 'Use the complement: P(at least one) = 1 - P(none). "None" means all 3 picks come from the clean sections.',
  19817: 'Pick the matching pair, pick the shared floor, then pick a different floor for the third. Divide by 10^3.',
  19820: 'Expected payout = sum of (probability x payoff) over every branch, including the zero-payoff branches.',
  19821: 'For a risk-neutral trader, compute the expected value of each choice and compare. Risk tolerance is a separate question.',
}

export const PROBABILITY_CORRECT_SHORTENED: Record<
  number,
  { newCorrect?: string; lessonAddendum?: string }
> = {
  19102: {
    newCorrect: 'Do not spin',
    lessonAddendum:
      'Quick numeric check: given the previous chamber was empty, P(die without spinning) = 1/4 (only one of the four empty positions is followed by a bullet). P(die if you spin) = 2/6 = 1/3. Since 1/4 < 1/3, do not spin.',
  },
  19103: {
    newCorrect: 'Approximately 10.5%',
    lessonAddendum:
      'Numerically: (39/51) x (26/50) x (13/49) ~= 0.105.',
  },
  19108: {
    newCorrect: 'Sum from k=1 to 100 of 1/(2k-1)',
    lessonAddendum:
      'Equivalently 1 + 1/3 + 1/5 + ... + 1/199, which is approximately (1/2) ln(200) + gamma/2 ~= 3.28 expected loops.',
  },
  19112: {
    newCorrect: 'Toss twice. Map HT to Heads, TH to Tails, and retry on HH or TT',
    lessonAddendum:
      'This is Von Neumann\'s trick: P(HT) = p(1-p) = P(TH) regardless of bias, so the two events have equal probability.',
  },
  19114: {
    newCorrect: 'Expected maximum of 500 independent uniform[0,1] travel times: 500/501 minutes',
    lessonAddendum:
      'Each ant\'s travel time to the nearest end is max(x, 1-x), which is Uniform[1/2, 1]. The maximum of 500 such variables has mean 1/2 + (1/2)(500/501) = 500/501 ~= 0.999.',
  },
  19123: {
    newCorrect: 'Yes, switch',
    lessonAddendum:
      'Switching wins whenever your original pick was a goat (probability 2/3). Staying wins only when your original pick was the car (1/3). So switching doubles your win probability from 1/3 to 2/3.',
  },
  19124: {
    newCorrect: 'sqrt(2) - 1',
    lessonAddendum:
      'Numerically about 0.414. Comes from solving P^3 + P^2 - 3P + 1 = 0 and taking the root in (0, 1).',
  },
  19131: {
    newCorrect: 'Reject the first n/e candidates, then take the first one better than all previous',
    lessonAddendum:
      'This "look then leap" strategy maximizes the probability of selecting the true best candidate, achieving roughly 1/e ~= 36.8% success regardless of n.',
  },
  19133: {
    newCorrect: 'Inverse Gaussian (Levy) distribution',
    lessonAddendum:
      'Specifically, the first-passage density is f(t) = (a / sqrt(2 pi t^3)) exp(-a^2 / (2t)). Remarkably, E[T_a] is infinite even though T_a < infinity almost surely.',
  },
  19135: {
    newCorrect: '((q/p)^i - 1) / ((q/p)^N - 1)',
    lessonAddendum:
      'Here q = 1 - p. As p -> 1/2, the formula degenerates to the symmetric-walk result i/N via L\'Hopital.',
  },
  19146: {
    newCorrect: 'Choose parameter values that maximize the likelihood of the observed data',
    lessonAddendum:
      'Operationally, you maximize the log-likelihood (sums are nicer than products) by setting d(log L)/d theta = 0. MLEs are consistent and asymptotically efficient, but can be biased in small samples.',
  },
  19147: {
    newCorrect: 'To make the estimator unbiased - dividing by n underestimates the population variance',
    lessonAddendum:
      'This is Bessel\'s correction. Estimating the mean uses one degree of freedom, so only n-1 deviations are independent; dividing by n-1 gives E[s^2] = sigma^2 exactly.',
  },
  19148: {
    newCorrect: 'Weak Law gives convergence in probability; Strong Law gives almost-sure convergence',
    lessonAddendum:
      'Almost-sure convergence is strictly stronger: the Weak Law allows the sample mean to wander outside any band infinitely often (as long as such events become rare), while the Strong Law forbids this.',
  },
  19151: {
    newCorrect: 'The standardized sum tends to a Normal distribution as N grows, regardless of the original distribution',
    lessonAddendum:
      'Formally, sqrt(n)(X_bar - mu)/sigma -> N(0, 1) in distribution, provided the underlying variance is finite. This is why z-tests and t-tests apply broadly even when the data is non-Normal.',
  },
  19152: {
    newCorrect: 'No - there could be a latent common cause Z, or it could be coincidence',
    lessonAddendum:
      'A correlation of 0.9 is consistent with X causing Y, Y causing X, or a confounder Z driving both. Establishing causation requires randomization, intervention, or careful causal-inference techniques (IV, DiD, etc.).',
  },
  19156: {
    newCorrect: 'No - the minimum is roughly 0.46',
    lessonAddendum:
      'The bound comes from positive semi-definiteness of the 3x3 correlation matrix: rho_min = rho_AB * rho_BC - sqrt((1 - rho_AB^2)(1 - rho_BC^2)) = 0.72 - sqrt(0.19 * 0.36) ~= 0.46. So 0.1 is infeasible.',
  },
  19162: {
    newCorrect: 'Because the variance of any linear combination of the variables is non-negative',
    lessonAddendum:
      'For any weight vector w, Var(w\'X) = w\' C w >= 0 since variance is the expected value of a square. That is precisely the definition of positive semi-definite, which forces all eigenvalues of C to be >= 0.',
  },
  19405: {
    newCorrect: '7',
    lessonAddendum:
      'By linearity of expectation, E[X + Y] = E[X] + E[Y] = 3.5 + 3.5 = 7 for two independent fair dice. (The mode is also 7, but that is a separate coincidence.)',
  },
}
