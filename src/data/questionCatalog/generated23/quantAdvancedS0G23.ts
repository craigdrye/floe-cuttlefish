import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const quantAdvancedS0G23: Question[] = [
  // ---------------------------------------------------------------------------
  // Linear Algebra (1 new -> reaches 8)
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    8720000,
    'Quant Finance',
    'Linear Algebra',
    "Cholesky Factor for Correlated Draws",
    "You need to simulate a vector of correlated normal returns with target covariance matrix Sigma. You generate a vector z of independent standard normals. What transformation turns z into a draw with covariance Sigma, and what must Sigma satisfy for it to work?",
    "Factor Sigma = L L^T (Cholesky, L lower triangular) and set x = L z; this requires Sigma to be symmetric positive definite.",
    [
      ["Set x = Sigma z; any covariance matrix works.", "Multiplying z by Sigma itself gives covariance Sigma Sigma^T = Sigma^2, not Sigma. The transform must use a square-root factor of Sigma, not Sigma.", "Use a matrix L with L L^T = Sigma, then x = L z has Cov(x) = L L^T = Sigma."],
      ["Set x = L z where L L^T = Sigma, and this works for any symmetric Sigma including singular ones.", "The L L^T = Sigma logic is right, but the Cholesky factor only exists (with positive diagonal) when Sigma is positive definite; a singular or negative-eigenvalue matrix has no real Cholesky factor.", "Confirm Sigma is symmetric positive definite first; if it is only positive semi-definite, use an eigen/LDL or SVD-based square root instead."],
      ["Set x = L^T z where L is the Cholesky factor; the transpose is needed so the correlations point the right way.", "Using L^T (upper triangular) gives Cov(x) = L^T (L^T)^T = L^T L, which is generally not equal to Sigma. The correct factor to left-multiply by is L itself.", "Keep x = L z with the lower-triangular L from L L^T = Sigma so Cov(x) = L L^T = Sigma."],
    ],
    "To induce a target covariance Sigma, factor Sigma = L L^T with the Cholesky decomposition (L lower triangular), then transform independent standard normals z via x = L z, giving Cov(x) = L E[z z^T] L^T = L I L^T = Sigma. The Cholesky factor exists with a real, positive diagonal exactly when Sigma is symmetric positive definite; a merely positive semi-definite (e.g. perfectly collinear) matrix needs an eigendecomposition or SVD square root instead. This is the workhorse for Monte Carlo across correlated assets.",
    "Floe generated",
    true,
    "You want Cov(x) = Sigma. Which factorization of Sigma, applied to identity-covariance z, reproduces Sigma exactly, and which matrices admit it?",
    { challengeRating: 6 },
  ),

  // ---------------------------------------------------------------------------
  // Programming (6 new -> reaches 8)
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    8720100,
    'Quant Finance',
    'Programming',
    "RAII and Exception Safety",
    "Your C++ pricing routine acquires a market-data lock, allocates a scratch buffer, then runs a calibration that can throw. A teammate wraps cleanup in a manual 'unlock(); free();' at the end of the function. Why is the RAII idiom (guard objects whose destructors release the resources) the safer design?",
    "If the calibration throws, stack unwinding runs the guard objects' destructors automatically, so the lock and buffer are always released; manual end-of-function cleanup is skipped on the exception path and leaks.",
    [
      ["RAII is preferred mainly because it runs faster than calling unlock() and free() directly.", "RAII's value is correctness under exceptions and early returns, not speed; the destructor call is essentially the same work as the manual call.", "Frame RAII as a guarantee that release happens on every exit path, including thrown exceptions, not as a performance optimization."],
      ["The manual version is fine as long as you also add a catch block that calls unlock() and free() before rethrowing.", "A try/catch can work but is error-prone: every early return and every new throwing statement must be covered, and the cleanup code is duplicated. RAII makes release automatic and unconditional.", "Let destructors own release so you cannot forget a path; reserve try/catch for handling, not for resource cleanup."],
      ["RAII is unnecessary here because C++ garbage-collects locks and heap buffers when the function returns.", "C++ has no garbage collector; heap memory and OS locks are not auto-reclaimed on return. Only objects with destructors (including RAII guards) are cleaned up deterministically.", "Tie each resource to a stack object whose destructor frees it, since the language guarantees destructors run during scope exit and unwinding."],
    ],
    "RAII (Resource Acquisition Is Initialization) binds a resource's lifetime to a stack object: acquire in the constructor, release in the destructor. Because C++ guarantees destructors run when an object leaves scope for any reason, including exception unwinding and early returns, RAII gives leak-free, exception-safe cleanup with no manual bookkeeping. Manual 'cleanup at the bottom' is skipped the moment anything throws before reaching it. (Destructors used this way must not themselves throw.)",
    "Floe generated",
    true,
    "Ask what actually happens to the manual cleanup line when the calibration throws halfway through the function.",
    { challengeRating: 5 },
  ),

  makeSimpleQuestion(
    8720101,
    'Quant Finance',
    'Programming',
    "Move Semantics for Large Buffers",
    "A function builds a large std::vector<double> of simulated paths and returns it, and a caller wants to hand that vector into a results object's member. You write 'results.paths = std::move(localPaths);'. What does std::move actually do here, and why is it the right call?",
    "std::move casts localPaths to an rvalue reference so the move assignment operator transfers the buffer's pointer (a cheap pointer/size swap) instead of deep-copying every element; localPaths is left valid but unspecified afterward.",
    [
      ["std::move physically relocates the vector's data to a new memory address for better cache locality.", "std::move does not move or relocate any bytes by itself; it only changes the value category to rvalue. The actual transfer is done by the move constructor/assignment, which steals the existing pointer without relocating elements.", "Describe std::move as an unconditional cast to rvalue that enables the move operation, where the move steals the internal pointer rather than relocating data."],
      ["std::move makes a fast shallow copy, leaving both localPaths and results.paths pointing at the same buffer.", "It is not a shared shallow copy; a move transfers ownership so only the destination owns the buffer. Two owners of one heap buffer would risk a double free.", "Recognize that a move leaves the source in a valid-but-unspecified, owning-nothing state; the destination is the sole owner."],
      ["std::move is required for correctness; without it the return value would be deep-copied and the program would be wrong.", "Omitting std::move here is not incorrect, just potentially slower (a copy instead of a move). Also, returning a local by value already gets move/copy elision, so std::move is about avoiding an unnecessary copy on assignment, not correctness.", "Treat std::move as a performance choice that enables the move overload; the code still compiles and is correct without it, just with a copy."],
    ],
    "std::move is a compile-time cast that turns an lvalue into an rvalue reference, signaling that its resources may be pillaged. For a std::vector this lets the move assignment operator swap internal pointers and sizes in O(1) instead of copying every element, and it leaves the source in a valid-but-unspecified state (so do not read its contents afterward). It is an optimization enabler, not a data relocation and not required for correctness.",
    "Floe generated",
    true,
    "Separate what std::move does (a cast) from what the move operation does (steal the pointer). What happens to the source object after?",
    { challengeRating: 6 },
  ),

  makeSimpleQuestion(
    8720102,
    'Quant Finance',
    'Programming',
    "Floating-Point Equality Pitfall",
    "Two code paths compute an option price by summing discounted payoffs in different orders, then a test asserts 'priceA == priceB' with both stored as double. The math is identical on paper but the assert fails. What is the correct diagnosis and fix?",
    "Floating-point addition is not associative, so different summation orders produce tiny rounding differences; compare with a tolerance (|priceA - priceB| <= eps) rather than exact ==.",
    [
      ["One of the two code paths has a real bug; identical math must give bitwise-identical doubles.", "Identical real-number math does not guarantee identical doubles, because IEEE-754 rounding depends on operation order. The mismatch can be expected rounding, not a logic bug.", "Before hunting a logic bug, check the magnitude of the difference; if it is at the rounding-error scale, switch to a tolerance comparison."],
      ["Switch both variables to float to make the comparison reliable.", "Using float (single precision) reduces precision and makes rounding worse, not better. The associativity issue is independent of precision width.", "Keep double (or higher) for accumulation and compare within an absolute or relative epsilon."],
      ["Round both prices to two decimal places with a cast to int (cents) and compare those.", "Naive truncation/rounding to cents can still flip when a value sits right on a boundary (e.g. 1.005), so equality can still fail spuriously, and you lose sub-cent accuracy needed for risk.", "Use a principled tolerance test such as |a - b| <= eps * max(1, |a|, |b|) rather than ad hoc rounding."],
    ],
    "Doubles follow IEEE-754, where addition is commutative but NOT associative: (a+b)+c can differ from a+(b+c) by rounding at the last bits. So two algebraically identical computations done in different orders routinely differ by a few units in the last place. Never test floating-point results with ==; compare against an absolute or relative epsilon scaled to the magnitudes involved. Reserve exact == for integers and exactly representable values.",
    "Floe generated",
    true,
    "Is (a+b)+c guaranteed to equal a+(b+c) in IEEE-754 doubles? What does that imply for an exact equality test?",
    { challengeRating: 5 },
  ),

  makeSimpleQuestion(
    8720103,
    'Quant Finance',
    'Programming',
    "Vectorizing a Pricing Loop in NumPy",
    "A Python Monte Carlo prices a vanilla payoff over 10 million simulated terminal prices using a plain Python 'for' loop that calls max(S - K, 0.0) per element and accumulates the sum. It is far too slow. What is the most effective fix that keeps the same numerical result?",
    "Replace the loop with vectorized array operations, e.g. payoff = np.maximum(S - K, 0.0) then payoff.mean(), so the work runs in compiled C over the whole array instead of per-element Python bytecode.",
    [
      ["Keep the Python loop but wrap the per-element body in a try/except to skip slow branches.", "try/except adds overhead and does nothing about the core problem: per-element work executed in the Python interpreter. The payoff has no exceptional branches to skip.", "Eliminate the interpreter-level loop entirely with NumPy array ops (or a JIT) so the inner work runs in compiled code."],
      ["Convert the Python list to a NumPy array but keep iterating element-by-element with a for loop over the array.", "Indexing a NumPy array one element at a time in a Python loop is often slower than a list loop and still pays per-iteration interpreter cost. The speedup comes from operating on the whole array at once.", "Call ufuncs like np.maximum on the entire array so the loop happens inside NumPy's C implementation."],
      ["Multithread the existing Python loop to use all CPU cores.", "CPython's Global Interpreter Lock prevents pure-Python loops from running in parallel across threads, so threading gives little or no speedup for this CPU-bound loop; you would also reorder additions and risk tiny FP differences.", "Vectorize with NumPy (or use multiprocessing / a JIT like Numba) to escape the GIL on the compute path."],
    ],
    "NumPy's speed comes from vectorization: ufuncs like np.maximum apply an operation across an entire array inside compiled C, amortizing away Python's per-iteration interpreter overhead. Rewriting the payoff as np.maximum(S - K, 0.0).mean() typically runs orders of magnitude faster than an explicit Python loop and gives the same result. Threading does not help pure-Python CPU loops because of the GIL; the right tools are vectorization, multiprocessing, or a JIT.",
    "Floe generated",
    true,
    "Where is the time actually going in a 10M-iteration Python loop, and how do you move that work out of the interpreter?",
    { challengeRating: 5 },
  ),

  makeSimpleQuestion(
    8720104,
    'Quant Finance',
    'Programming',
    "Hash Map vs Tree Map Lookup",
    "A risk engine looks up positions by an integer trade id millions of times per batch, with no need to iterate ids in sorted order. A colleague defaults to std::map. For pure point lookups, what container is the better default and why?",
    "std::unordered_map, because it gives average O(1) lookup via hashing, whereas std::map is a balanced tree with O(log n) lookups; with no ordering requirement the hash map wins.",
    [
      ["std::map, because its O(log n) lookups are faster than a hash map's O(n) worst case.", "This misstates the average case: unordered_map is average O(1), and O(n) is only a degenerate worst case with bad hashing. For typical integer keys it is far faster than O(log n).", "Compare average complexities for the real workload: O(1) hashed lookups beat O(log n) tree lookups when order is irrelevant."],
      ["std::vector indexed directly by trade id, since arrays are always fastest.", "Direct indexing only works if trade ids are dense and bounded; sparse or large ids would waste enormous memory or be impossible to index. A hash map handles arbitrary id ranges.", "Use direct array indexing only for small, dense key ranges; otherwise prefer a hash map for sparse integer keys."],
      ["std::map, because std::unordered_map cannot store integer keys.", "unordered_map fully supports integer keys (std::hash<int> exists). There is no such restriction.", "Pick the container on access pattern and complexity, not on a nonexistent key-type limitation."],
    ],
    "std::map is a balanced binary search tree: keys stay sorted and operations are O(log n). std::unordered_map is a hash table: average O(1) insert/find/erase but no ordering and an O(n) pathological worst case under poor hashing. When you only do point lookups and never need sorted traversal or range queries, the hash map is the right default. Choose std::map when you genuinely need ordered iteration, predecessor/successor, or range scans.",
    "Floe generated",
    true,
    "What does std::map buy you that unordered_map does not, and does this workload need it?",
    { challengeRating: 4 },
  ),

  makeSimpleQuestion(
    8720105,
    'Quant Finance',
    'Programming',
    "Double-Free from Raw Pointer Ownership",
    "Code does: 'auto* raw = new Curve(); std::shared_ptr<Curve> a(raw); std::shared_ptr<Curve> b(raw);' to share one Curve between two consumers. The program crashes on shutdown. What is the bug, and what is the correct construction?",
    "Constructing two shared_ptrs from the same raw pointer creates two independent control blocks, so each thinks its refcount hit zero and both delete the Curve, causing a double free; instead create one shared_ptr (ideally std::make_shared<Curve>()) and copy it to b.",
    [
      ["The bug is forgetting to call delete raw manually; add delete raw at shutdown.", "Adding a manual delete makes it worse: the shared_ptrs already own and will delete the object, so a manual delete is a third deletion. The real fix is to have a single owning control block.", "Let exactly one shared_ptr own the resource and never mix manual delete with smart-pointer ownership."],
      ["The bug is using shared_ptr at all; switch both a and b to unique_ptr from the same raw pointer.", "Two unique_ptrs from one raw pointer is the same double-free bug, and unique_ptr forbids shared ownership anyway. The problem is two control blocks, not the smart-pointer type.", "Use one shared_ptr and copy it so both consumers share a single reference-counted control block."],
      ["The crash is just a memory leak that surfaces at shutdown; wrap the pointers in weak_ptr to silence it.", "It is a double free (a crash/UB), not a leak, and weak_ptr is non-owning, so making both weak would delete the object immediately or leave nothing owning it. weak_ptr addresses cycles, not this.", "Fix ownership: make_shared once, then copy the shared_ptr; reserve weak_ptr for breaking reference cycles."],
    ],
    "A shared_ptr's reference count lives in a control block created when the shared_ptr first takes ownership. Constructing two shared_ptrs separately from the same raw pointer makes two control blocks that each independently count to zero and each call delete: a double free and undefined behavior. The correct pattern is to create ownership once, ideally with std::make_shared<Curve>() (one allocation, exception-safe), then copy that shared_ptr so all owners share the same control block. Never feed a raw pointer to more than one smart pointer.",
    "Floe generated",
    true,
    "How many control blocks (reference counters) exist when you build two shared_ptrs separately from one raw pointer?",
    { challengeRating: 7 },
  ),

  // ---------------------------------------------------------------------------
  // Fixed Income (3 new -> reaches 8)
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    8720200,
    'Quant Finance',
    'Fixed Income',
    "Par Swap Rate as a Discount-Factor Average",
    "For a new fixed-for-floating interest rate swap with annual fixed payments and notional 1, you have the discount factors D(t_i) for each payment date and the final discount factor D(t_n). What is the par (fixed) swap rate S that makes the swap worth zero at inception?",
    "S = (1 - D(t_n)) / sum_i D(t_i), i.e. the par rate equals the value of the floating leg (1 - D(t_n)) divided by the annuity (sum of fixed-leg discount factors).",
    [
      ["S = the simple average of the period forward rates over the swap's life.", "The par rate is a discount-factor-weighted average of the forwards, not an unweighted average; later cash flows carry smaller weights because their discount factors are smaller.", "Weight each forward by its payment-date discount factor (the annuity weights), which is exactly what (1 - D(t_n))/sum D(t_i) encodes."],
      ["S = D(t_n) / sum_i D(t_i), the final discount factor over the annuity.", "The floating leg at par is worth 1 - D(t_n), not D(t_n); using D(t_n) alone in the numerator prices the wrong leg.", "Set the fixed-leg PV S * sum D(t_i) equal to the floating-leg PV 1 - D(t_n) and solve for S."],
      ["S = the current yield to maturity of an on-the-run government bond of the same tenor.", "A swap discounts off its own (OIS/swap) curve and equals zero PV by construction; the par swap rate is generally not the government bond YTM and differs by the swap spread.", "Derive S from the swap's own discount factors via (1 - D(t_n))/sum D(t_i), not from a government bond yield."],
    ],
    "At inception a par swap has zero value, so the fixed leg PV equals the floating leg PV. With notional 1, the floating leg is worth 1 - D(t_n) and the fixed leg is worth S times the annuity A = sum_i D(t_i). Setting them equal gives S = (1 - D(t_n)) / sum_i D(t_i). Equivalently, S is a discount-factor-weighted average of the implied forward rates, so longer-dated forwards get less weight. This is why the par rate is not a simple average of forwards.",
    "Floe generated",
    true,
    "Set fixed-leg PV equal to floating-leg PV. What is the floating leg worth at par, and what is the fixed leg's annuity?",
    { challengeRating: 6 },
  ),

  makeSimpleQuestion(
    8720201,
    'Quant Finance',
    'Fixed Income',
    "Curve Steepener and Non-Parallel Risk",
    "A desk is long 2-year notes and short 10-year notes, with the position sized to be DV01-neutral (equal and opposite dollar sensitivity to a 1bp parallel shift). The curve then steepens: short rates fall and long rates rise. Roughly what is the P&L, and what does this reveal about the hedge?",
    "The position gains: the long 2-year rallies as short rates fall while the short 10-year position gains as long rates rise; DV01-neutrality only immunizes a parallel shift, so the book is really a bet on curve shape, not a hedged position.",
    [
      ["The P&L is approximately zero because the position is DV01-neutral, so curve moves cancel.", "DV01-neutral only cancels a parallel (equal-bp) shift. A steepener moves the two tenors by different amounts and signs, so the sensitivities do not cancel.", "Recognize that matching parallel DV01 leaves full exposure to slope/twist; you need key-rate durations to see the residual bet."],
      ["The position loses money, because being long the 2-year always loses when any rate environment changes.", "Direction depends on the move: with short rates falling, the long 2-year gains, and the short 10-year gains as long yields rise. A steepener of this shape is favorable to this book.", "Trace each leg separately under the actual rate changes rather than assuming the long leg always loses."],
      ["The P&L cannot be determined without convexity, since convexity dominates a curve twist.", "For a modest twist the first-order (duration/key-rate) terms dominate; convexity is a smaller second-order correction, not the driver of the steepener P&L here.", "Estimate P&L from the per-bucket DV01s times the bucketed rate changes first, treating convexity as a small adjustment."],
    ],
    "Parallel DV01-neutrality only protects against a uniform shift in all rates. Real curves twist: steepeners and flatteners move maturities by different amounts and even opposite signs. A 2s10s book that is parallel-DV01-neutral is precisely a slope bet. To see and hedge non-parallel risk you decompose into key-rate (partial) durations or DV01 buckets and check sensitivity to each. Here a steepener (short rates down, long rates up) helps a long-2s/short-10s position.",
    "Floe generated",
    true,
    "What kind of shift does DV01-neutrality actually neutralize, and is a steepener that kind of shift?",
    { challengeRating: 7 },
  ),

  makeSimpleQuestion(
    8720202,
    'Quant Finance',
    'Fixed Income',
    "Multi-Curve Discounting After 2008",
    "Post-2008, a collateralized interest rate swap is valued with two curves: cash flows are projected using a forward (e.g. term-rate) curve, but discounted using an OIS curve. Why are two separate curves used instead of one LIBOR-style curve for both?",
    "Discounting reflects the funding/collateral rate (OIS, the rate paid on posted collateral), while projection reflects the index that sets the floating coupons; treating them as one curve ignores the basis between funding and the index and misprices the swap.",
    [
      ["Two curves are used only to make the math look more rigorous; a single curve gives the same price.", "The two curves generally differ (OIS vs the projection index carry a real basis), so single-curve and multi-curve valuations diverge, especially for off-market or long-dated swaps. It is not cosmetic.", "Treat the discount/projection split as economically required because collateralized funding is at OIS, distinct from the projected index."],
      ["The discount curve should be the projection (forward) curve, and OIS is only for uncollateralized trades.", "It is the reverse for collateralized swaps: OIS (the collateral rate) is the correct discount curve, while the index curve is used to project floating cash flows.", "Discount collateralized cash flows at the collateral rate (OIS) and project coupons off the relevant index curve."],
      ["A single curve is fine as long as you add a constant spread to every cash flow.", "A constant spread cannot capture a term-structured, maturity-dependent basis between funding and the index; the basis varies by tenor and over time.", "Build two calibrated curves so the tenor-dependent funding-vs-index basis is represented, rather than a flat spread."],
    ],
    "The crisis broke the old assumption that one curve could both discount and project. For a collateralized derivative, the economically correct discount rate is the rate earned/paid on the collateral, which under standard CSAs is OIS; the floating coupons are still set off the relevant index, projected from its own forward curve. Using a single curve ignores the funding-vs-index basis (e.g. the OIS-LIBOR/term-rate spread), which is tenor-dependent and material. Hence the multi-curve framework: project off the index curve, discount off OIS.",
    "Floe generated",
    true,
    "What rate do you actually earn on posted collateral, and is that the same as the index that sets the coupons?",
    { challengeRating: 6 },
  ),

  // ---------------------------------------------------------------------------
  // Risk Management (6 new -> reaches 8)
  // ---------------------------------------------------------------------------
  makeSimpleQuestion(
    8720300,
    'Quant Finance',
    'Risk Management',
    "When VaR Fails Subadditivity",
    "A risk officer claims that merging two desks' books can never raise total VaR because diversification only helps. You hold two independent bonds, each defaulting with probability 4%, each with a 95% one-day VaR of 0 (since default is rarer than 5%). What does combining them show, and what is the takeaway?",
    "The combined book defaults on at least one bond with probability about 7.8% (> 5%), so its 95% VaR is positive while each standalone VaR was 0; VaR can be super-additive (VaR of the sum exceeds the sum of VaRs), i.e. VaR is not subadditive.",
    [
      ["Combined VaR stays 0, because VaR is a coherent measure and diversification always reduces it.", "VaR is precisely NOT coherent: it can fail subadditivity. The premise that diversification always lowers VaR is the error this example refutes.", "Use the fact that P(at least one default) = 1 - 0.96^2 ~ 7.8% > 5%, which pushes the combined 95% VaR above zero."],
      ["Combined VaR is 0 because the two defaults are independent, so risks cancel out.", "Independence does not make losses cancel; it makes the probability of 'at least one' default larger than either single probability, which is what breaches the 95% quantile.", "Compute the combined loss distribution: independence raises the chance of a loss event into the tail the quantile cares about."],
      ["Combined VaR equals the sum of the two VaRs, which is 0 + 0 = 0, by additivity of VaR.", "VaR is not additive in general; the quantile of a sum is not the sum of quantiles. Here the combined quantile jumps above zero precisely because of that non-additivity.", "Evaluate the 95% quantile of the joint loss directly rather than adding individual VaRs."],
    ],
    "VaR is a quantile of the loss distribution and fails subadditivity: for some portfolios VaR(A+B) > VaR(A) + VaR(B), so combining books can appear to raise risk and diversification looks penalized. The classic example uses two independent low-probability default bonds whose individual 95% VaRs are 0, while the merged book's 95% VaR is positive because P(at least one default) exceeds 5%. Expected Shortfall, which is subadditive and coherent, does not have this defect, which is one reason Basel's FRTB moved to 97.5% ES.",
    "Floe generated",
    true,
    "Compute the probability that at least one of the two independent bonds defaults. Does it cross the 5% tail the 95% VaR cares about?",
    { challengeRating: 7 },
  ),

  makeSimpleQuestion(
    8720301,
    'Quant Finance',
    'Risk Management',
    "Parametric vs Historical VaR and Fat Tails",
    "A book is heavily exposed to a strategy with frequent small gains and rare large losses (negative skew, fat tails). The team computes 99% VaR by assuming returns are normal and using mean and standard deviation. What is the main flaw, and what is a better approach?",
    "The normal (parametric) assumption understates tail risk because real losses are fatter-tailed and skewed than a Gaussian, so 99% VaR is too small; use historical simulation or a fat-tailed/EVT model, and report Expected Shortfall to capture the tail.",
    [
      ["The flaw is only that they used 99% instead of 95%; switching to 95% VaR fixes it.", "Changing the confidence level does not address the wrong distributional shape; a normal model misprices the tail at any confidence level, and a lower confidence reveals even less about extremes.", "Fix the distribution (empirical/fat-tailed) rather than the confidence level, and look at ES for tail severity."],
      ["Parametric normal VaR overstates risk for fat-tailed books, so it is conservative and safe.", "It understates, not overstates: the normal distribution has thin tails, so it assigns too little probability to large losses for a fat-tailed, negatively skewed book.", "Recognize that thin Gaussian tails undercount extreme losses; move to historical or EVT-based estimates."],
      ["The fix is to use more data in the same normal formula, since more observations make the normal assumption valid.", "More data sharpens the estimates of mean and variance but cannot turn a fat-tailed, skewed sample into a Gaussian; the model misspecification remains.", "Keep the data but drop the normality assumption: use the empirical distribution or a fat-tailed model."],
    ],
    "Parametric (variance-covariance) VaR assumes a distribution, usually normal, and reads off a quantile from mean and standard deviation. For books with fat tails and negative skew (typical of short-vol or credit strategies), the normal model assigns far too little probability to large moves, so it understates 99% VaR. Historical simulation uses the empirical distribution and captures observed fat tails; EVT models the tail directly. And because VaR ignores everything beyond the quantile, report Expected Shortfall to quantify how bad the tail is.",
    "Floe generated",
    true,
    "Does a normal distribution have thinner or fatter tails than this strategy's real losses, and which way does that bias the VaR?",
    { challengeRating: 6 },
  ),

  makeSimpleQuestion(
    8720302,
    'Quant Finance',
    'Risk Management',
    "Square-Root-of-Time Scaling Assumptions",
    "A desk computes a 1-day VaR and scales it to a 10-day horizon by multiplying by sqrt(10). Under what assumptions is this valid, and what is the risk of using it blindly?",
    "It is valid only if daily P&L is approximately i.i.d. with zero mean (so variance adds linearly and volatility scales with the square root of time); with autocorrelation, volatility clustering, or non-zero drift, sqrt(time) misstates the 10-day risk.",
    [
      ["Square-root-of-time scaling always holds because variance is additive over any horizon.", "Variance adds over time only when returns are independent (uncorrelated); with serial correlation or volatility clustering the 10-day variance is not 10 times the 1-day variance.", "State the i.i.d. assumption explicitly and check for autocorrelation/clustering before scaling."],
      ["You should multiply 1-day VaR by 10, not sqrt(10), because the horizon is 10 times longer.", "Multiplying by the horizon scales the standard deviation as if it grew linearly; under independence it is variance, not standard deviation, that grows linearly, so the factor is sqrt(10).", "Scale volatility by sqrt(horizon) under independence, giving a factor of sqrt(10) for VaR, not 10."],
      ["The scaling is fine as long as the mean return is large and positive, which reduces risk.", "A large positive drift actually breaks the zero-mean assumption behind the sqrt rule and changes the quantile; sqrt-time scaling ignores drift, so a non-trivial mean makes it inaccurate.", "Use sqrt-time only when drift is negligible over the horizon; otherwise model the mean explicitly."],
    ],
    "Square-root-of-time scaling (h-day VaR ~ 1-day VaR x sqrt(h)) rests on returns being i.i.d. with (effectively) zero mean: independence makes variance additive, so standard deviation scales with sqrt(h). Real markets show volatility clustering and autocorrelation, which break additivity, and non-zero drift over longer horizons further distorts the quantile. Blind scaling can badly under- or over-state multi-day risk, so it should be sanity-checked against directly estimated multi-day distributions or stressed scenarios.",
    "Floe generated",
    true,
    "What has to be true about day-to-day returns for variance (and hence vol via a square root) to add cleanly across days?",
    { challengeRating: 6 },
  ),

  makeSimpleQuestion(
    8720303,
    'Quant Finance',
    'Risk Management',
    "Model Risk from Calibrating to Calm Markets",
    "A VaR and pricing model was calibrated entirely on data from a long, unusually calm period. A validation team reviews it before a volatile quarter. What is the primary model-risk concern, and what mitigation directly addresses it?",
    "The model will understate risk because its parameters (volatilities, correlations) reflect benign conditions and miss regime shifts; mitigate with stressed calibration / stressed VaR and explicit stress scenarios that include crisis-period data.",
    [
      ["There is no concern: a model calibrated on a long sample is well-estimated and therefore reliable.", "A long sample reduces sampling noise but does not fix regime bias; if the whole window is calm, the model encodes calm-market dynamics and will be wrong when the regime changes.", "Judge calibration data by representativeness across regimes, not just length, and add stressed scenarios."],
      ["The concern is overfitting, so the fix is simply to use fewer parameters in the model.", "Reducing parameters addresses overfitting, not the regime problem; even a parsimonious model calibrated only to calm data will understate volatility and correlation breakouts.", "Recalibrate or supplement with stress data spanning turbulent regimes rather than only trimming parameters."],
      ["The concern is that correlations were too high, so the fix is to assume zero correlation to be conservative.", "In crises correlations typically rise toward 1 (diversification fails), so calm-period correlations are too LOW for stress, not too high; assuming zero correlation understates joint losses further.", "Stress correlations upward toward their crisis behavior, since dependence tends to spike when it hurts most."],
    ],
    "Model risk is the risk the model itself is wrong, and a classic source is calibrating to a regime that does not resemble the future. A model fit only to calm data carries low volatilities and benign correlations, so it systematically understates tail risk when volatility spikes and correlations jump toward 1. Validation directly targets this with stressed VaR (calibrated to a historical crisis window) and explicit stress/scenario testing, plus backtesting and challenges to the calibration window's representativeness.",
    "Floe generated",
    true,
    "What behavior of volatilities and correlations in a crisis is simply absent from a calm-only sample?",
    { challengeRating: 5 },
  ),

  makeSimpleQuestion(
    8720304,
    'Quant Finance',
    'Risk Management',
    "CVA Versus DVA",
    "On an uncollateralized derivative with a counterparty, the desk must book both a CVA and a DVA adjustment. Precisely whose default risk does each capture, and why do they have opposite signs to your derivative value?",
    "CVA is the expected loss from the counterparty defaulting when the trade is in your favor (a charge that reduces the value to you); DVA is the expected 'gain' from your own default when the trade is against you (an offsetting benefit), so they pull the adjustment in opposite directions.",
    [
      ["CVA and DVA both capture the counterparty's default; DVA is just a more conservative version of CVA.", "DVA captures YOUR OWN default risk, not the counterparty's. Conflating the two double-counts the counterparty and ignores the own-credit term entirely.", "Keep the asymmetry: CVA is their default (a cost), DVA is your default (a benefit), each on the exposure that is in the relevant party's favor."],
      ["CVA is the funding cost of the trade and DVA is the counterparty's default cost.", "Funding cost is FVA, a separate XVA term; CVA is specifically counterparty default risk, and DVA is own default risk. This mislabels two of the three.", "Separate the family: CVA (counterparty default), DVA (own default), FVA (funding), and avoid double-counting funding with either."],
      ["Both adjustments reduce the value of the derivative to you, since any credit risk is a cost.", "Only CVA reduces value; DVA increases the reported value because your own potential default lets you 'walk away' from a liability, which is a (controversial) benefit under fair value.", "Recognize the opposite signs: subtract CVA, add DVA, even though DVA's economics are debated."],
    ],
    "CVA (credit valuation adjustment) prices the expected loss if the counterparty defaults while the contract is an asset to you, so it is a charge that lowers the value to you. DVA (debit valuation adjustment) is the mirror image: the expected benefit from your own default while the contract is a liability, which under fair-value accounting raises the reported value (an effect many find counterintuitive). They are distinct legs of the XVA family and must not be merged with each other or with FVA (funding). Mixing them up double-counts risk.",
    "Floe generated",
    true,
    "For CVA ask 'who defaults and is the trade in my favor?'; for DVA ask the same about yourself. Do they move value the same way?",
    { challengeRating: 6 },
  ),

  makeSimpleQuestion(
    8720305,
    'Quant Finance',
    'Risk Management',
    "What VaR Does Not Tell You",
    "A trader reassures management: 'Our 99% one-day VaR is 10 million dollars, so the most we can lose in a day is 10 million.' As a risk manager, what is the precise correction?",
    "VaR is a quantile, not a maximum: 99% one-day VaR of 10 million means losses exceed 10 million on about 1 day in 100, and it says nothing about how large the loss is on those tail days; Expected Shortfall is needed to describe the average loss beyond VaR.",
    [
      ["The statement is correct: 99% VaR is the worst-case daily loss with 99% certainty.", "VaR is not a worst case; it is the threshold breached with 1% probability, and on those breach days the loss can be far larger than 10 million. Calling it a maximum is the core misconception.", "Restate VaR as a quantile that is silently exceeded in the tail, and pair it with ES for tail severity."],
      ["The number should be interpreted as losing exactly 10 million about 1% of the time.", "VaR marks the threshold, not a specific loss size; on the breach days the loss is at least 10 million and typically more, with the exact distribution unspecified by VaR.", "Read VaR as 'losses exceed this on ~1% of days', not 'losses equal this on ~1% of days', and use ES for the conditional average."],
      ["The statement is fine because at 99% confidence the remaining 1% is negligible and can be ignored.", "The 1% tail is exactly where catastrophic losses live; ignoring it is how firms get blindsided. Low probability does not mean low impact.", "Treat the tail as the main event for capital and survival, and quantify it with ES and stress tests rather than dismissing it."],
    ],
    "VaR at confidence level p is the loss threshold exceeded with probability 1 - p; it is emphatically not a maximum loss. A 99% one-day VaR of 10 million means roughly one day in a hundred the loss is at least 10 million, and VaR is silent on how much worse those days get. Communicating VaR as a cap is a classic and dangerous error. Expected Shortfall (the average loss given a VaR breach) answers the 'how bad in the tail' question and is the regulator-preferred measure.",
    "Floe generated",
    true,
    "Does '99% VaR = 10M' bound the loss, or just tell you how often losses exceed 10M? What happens on the other 1% of days?",
    { challengeRating: 5 },
  ),
]
