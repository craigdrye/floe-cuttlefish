import type { Answer, Question } from '../data/questionCatalog/types'

export type LearningSupport = {
  hint: string
  lessonParagraphs: string[]
  workedSolution: string
}

type ConceptSupport = {
  test: (context: string, question: Question) => boolean
  hint: (question: Question, correct?: Answer, selected?: Answer) => string
  lesson: (question: Question, correct?: Answer, selected?: Answer) => string[]
  worked: (question: Question, correct?: Answer, selected?: Answer) => string
}

function clean(value?: string) {
  return (value ?? '').replace(/\s+/g, ' ').trim()
}

function wordCount(value?: string) {
  return clean(value).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0
}

function correctAnswer(question: Question) {
  return question.answers.find((answer) => answer.correct)
}

function questionContext(question: Question) {
  const correct = correctAnswer(question)
  return [
    question.topic,
    question.chapter,
    question.subTopic,
    question.title,
    question.prompt,
    question.alternatePrompts?.plain,
    question.alternatePrompts?.teaching,
    correct?.label,
  ].join(' ').toLowerCase()
}

function hasAny(context: string, patterns: RegExp[]) {
  return patterns.some((pattern) => pattern.test(context))
}

function hasPhilosophySignal(context: string, question: Question) {
  return question.collection?.sourceTrackId === 'philosophy' || hasAny(context, [
    /\b(epistemology|metaphysics|ethics|moral|plato|gettier|cave|allegory|skeptic|knowledge|justified true belief|jtb)\b/,
    /\b(validity|soundness|premise|conclusion|argument|fallacy|modus ponens|categorical imperative)\b/,
    /\b(thought experiment|ship of theseus|mary's room|chinese room|euthyphro|utilitarian|deontology|virtue ethics)\b/,
  ])
}

function hasStudyDesignSignal(context: string, question: Question) {
  if (hasPhilosophySignal(context, question) && !/\b(research method|study design|sampling|survey|control group|treatment group|random assignment|randomized|observational study|selection bias|confounding)\b/.test(context)) {
    return false
  }

  return hasAny(context, [
    /\b(research method|study design|experimental design|sampling bias|random sample|self-selected sample|survey design)\b/,
    /\b(observational study|control group|treatment group|placebo|blind study|double blind)\b/,
    /\b(random assignment|randomized experiment|experiment testing|experiment tests|in an experiment)\b/,
  ])
}

function splitLesson(lesson?: string) {
  return (lesson ?? '')
    .split(/\n\s*\n/)
    .map(clean)
    .filter(Boolean)
}

function thinSolution(question: Question, correct?: Answer) {
  const solution = clean(question.solution)
  const correctLabel = clean(correct?.label)
  if (!solution) return true
  if (correctLabel && solution.toLowerCase() === correctLabel.toLowerCase()) return true
  if (/^worked solution:\s*/i.test(solution)) return true
  return wordCount(solution) < 9
}

function genericLesson(question: Question) {
  const lesson = clean(question.lesson)
  if (!lesson) return true
  if (wordCount(lesson) < 32) return true
  return [
    'is useful because it names a recurring question',
    'use the wording of the prompt',
    'decide whether it is asking for a definition',
    'correct answer:',
    'floe is still drafting',
  ].some((pattern) => lesson.toLowerCase().includes(pattern))
}

function genericHint(question: Question) {
  const hint = clean(question.mentorHint)
  if (!hint) return true
  if (wordCount(hint) < 7) return true
  return [
    'name the rule first',
    'name the quantity out loud',
    'ask what the system is optimizing',
    'ask what would have to be true',
    'rebuild the argument in plain language',
    'use the actual setup details',
    'test the mechanism, not just the vibe',
    'before choosing an answer',
  ].some((pattern) => hint.toLowerCase().includes(pattern))
}

function firstSelectedMisconception(selected?: Answer) {
  return selected?.misconceptions?.[0]
}

function correctLabel(correct?: Answer) {
  return correct?.label ?? 'the correct answer'
}

function fallbackHint(correct?: Answer) {
  const answer = correctLabel(correct)
  return `Turn the prompt into one plain-language job: what concept is being tested, what facts are given, and why would "${answer}" fit better than the tempting nearby answers?`
}

function fallbackLesson(question: Question, correct?: Answer, selected?: Answer) {
  const answer = correctLabel(correct)
  const misconception = firstSelectedMisconception(selected)
  const trap = misconception
    ? `A common trap is: ${misconception.tempting} The fix is to ask exactly where that answer breaks: ${misconception.flaw}`
    : `A common trap is choosing a familiar phrase from ${question.chapter} without checking whether it does the exact job the prompt asks for.`

  return [
    `${question.title} is the working concept in this ${question.chapter} question. The learner move is to restate the task, then test each answer against that task rather than against loose word association.`,
    `Here the answer to defend is "${answer}". ${trap}`,
  ]
}

function fallbackWorked(question: Question, correct?: Answer, selected?: Answer) {
  const answer = correctLabel(correct)
  const misconception = firstSelectedMisconception(selected)
  if (selected && !selected.correct) {
    const reason = misconception
      ? ` The selected answer breaks because ${misconception.flaw}`
      : ` The selected answer is nearby, but it does not satisfy the exact concept in the prompt.`
    return `The best answer is "${answer}". Start from the wording of the question, identify the concept "${question.title}", and eliminate answers that only name a related idea.${reason}`
  }
  return `The best answer is "${answer}" because it is the option that directly satisfies the concept being tested: ${question.title}. The other options should be checked against that same concept, not just against whether they sound related.`
}

function iqrWorked(question: Question, correct?: Answer) {
  const prompt = question.prompt
  const lower = prompt.match(/(?:lower quartile|q1)[^\d-]*(-?\d+(?:\.\d+)?)/i)
  const upper = prompt.match(/(?:upper quartile|q3)[^\d-]*(-?\d+(?:\.\d+)?)/i)
  if (lower && upper) {
    const low = Number(lower[1])
    const high = Number(upper[1])
    if (Number.isFinite(low) && Number.isFinite(high)) {
      return `IQR means upper quartile minus lower quartile. Here that is ${high} - ${low} = ${high - low}, so the correct answer is "${correctLabel(correct)}".`
    }
  }
  return `IQR means Q3 - Q1: the spread of the middle 50 percent of the data. Do not average the quartiles or use the full range; subtract the lower quartile from the upper quartile to get "${correctLabel(correct)}".`
}

const conceptSupports: ConceptSupport[] = [
  {
    test: (context) => /\b(plato'?s? cave|allegory of the cave|shadows? on (?:the )?(?:cave )?wall|sensory appearances|appearance(?:s)? (?:for|as) reality)\b/.test(context),
    hint: () => 'Pair the shadows with appearance and illusion. In the allegory, the sun and the world outside the cave carry the truth side of the contrast.',
    lesson: () => [
      'Plato\'s cave is an allegory about mistaking appearances for reality. The prisoners see shadows on a wall and treat them as the whole world because they have never turned around or left the cave.',
      'The useful contrast is appearance versus understanding. The shadows are not spooky objects; they stand for the deceptive world of sensory appearances, while leaving the cave represents the difficult turn toward deeper truth.',
    ],
    worked: (_question, correct, selected) => {
      const wrong = selected && !selected.correct ? ` The selected answer is nearby or vivid, but it misses Plato's appearance-versus-reality contrast.` : ''
      return `The answer is "${correctLabel(correct)}" because the shadows are the false appearances the prisoners mistake for reality.${wrong} The outside world and sun are the truth-and-understanding side of the allegory.`
    },
  },
  {
    test: (context) => /\b(gettier|justified true belief|jtb)\b/.test(context),
    hint: () => 'Check the three JTB ingredients: belief, truth, and justification. Then ask whether luck breaks the link between the justification and the truth.',
    lesson: () => [
      'The traditional JTB picture says knowledge is justified true belief: you believe it, it is true, and you have good reasons for believing it. Gettier cases are famous because they seem to satisfy all three ingredients while still feeling like luck rather than knowledge.',
      'A simple version: someone looks at a stopped clock that happens to show the correct time. Their belief is true, and the clock face gives them a reason, but the truth is accidental. Gettier-style examples show that JTB is not sufficient for knowledge; they do not show that knowledge is impossible.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because Gettier cases keep belief, truth, and justification in place, then add epistemic luck. The person gets the truth by accident, so justified true belief alone is not enough for knowledge.`,
  },
  {
    test: (context) => /\b(iqr|interquartile|quartile|q1|q3)\b/.test(context),
    hint: () => 'IQR is the width of the middle half of the data. Find Q3 and Q1, then subtract Q1 from Q3.',
    lesson: () => [
      'The interquartile range, or IQR, measures how spread out the middle 50 percent of a data set is. Q1 marks the lower quarter point, Q3 marks the upper quarter point, and the IQR is Q3 - Q1.',
      'IQR is useful because it ignores the most extreme low and high values. That makes it a sturdier spread measure when outliers would make the full range look dramatic.',
    ],
    worked: iqrWorked,
  },
  {
    test: (context) => /\b(contingent formula|contingent statement|tautology|contradiction)\b/.test(context),
    hint: () => 'Think in truth-table terms: tautology means always true, contradiction means always false, and contingent means true on some rows but false on others.',
    lesson: () => [
      'In logic, a contingent formula is neither guaranteed nor impossible. It comes out true under at least one assignment of truth values and false under at least one other assignment.',
      'That makes it different from a tautology, which is true on every truth-table row, and a contradiction, which is false on every row. The test is not whether the sentence sounds plausible; it is whether the truth table mixes true and false outcomes.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because a contingent formula has a mixed truth table. If every row were true it would be a tautology; if every row were false it would be a contradiction.`,
  },
  {
    test: (context) => /\b(bayes|base rate|posterior|sensitivity|specificity|p\([^)]*\|[^)]*\)|conditional probability)\b/.test(context),
    hint: (question) => {
      const context = questionContext(question)
      if (/\b(test|sensitivity|specificity|positive|false positive|diagnostic)\b/.test(context)) {
        return 'Build the positive-result bucket. Count true positives and false positives, then divide true positives by all positives.'
      }
      return 'List each possible explanation, multiply its prior by how likely the evidence is under that explanation, then normalize across all explanations.'
    },
    lesson: () => [
      'Bayes questions punish flipped conditioning. P(result | condition) is not the same as P(condition | result). To move from one to the other, you need the base rate and the false-positive or false-negative branch.',
      'A concrete crowd usually makes it click. If a rare condition affects 1 in 1000 people, even a good test can produce many more false positives than true positives. The posterior asks: among everyone who tested positive, what share are real cases?',
    ],
    worked: (question, correct) => {
      const context = questionContext(question)
      if (/\b(test|sensitivity|specificity|positive|false positive|diagnostic)\b/.test(context)) {
        return `The correct answer is "${correctLabel(correct)}" because the denominator must include every way the observed result can happen. For a positive test, that means true positives plus false positives; using sensitivity alone flips the conditional.`
      }
      return `The correct answer is "${correctLabel(correct)}" because Bayes compares explanations by prior times likelihood. The denominator must include every way the evidence could happen, not just the branch that makes the answer tempting.`
    },
  },
  {
    test: (context) => /\b(p-value|p value|type i|type ii|null hypothesis|statistical significance)\b/.test(context),
    hint: () => 'Keep the conditioning straight: assume the null first, then ask how surprising this data would be under that assumption.',
    lesson: () => [
      'A p-value is the probability of data this extreme, or more extreme, assuming the null hypothesis is true. It is not the probability that the null is true, and it is not the probability that the result will replicate.',
      'Type I error means a false positive: rejecting a true null. Type II error means a false negative: failing to reject a false null. Significance thresholds manage those error risks; they do not prove a claim by themselves.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because p-values and error types are about the testing procedure under assumptions. Do not read a p-value backward as P(hypothesis | data); it is P(data | null).`,
  },
  {
    test: (context, question) => (
      /\b(precision-recall|precision and recall|auc|roc|classifier|classification threshold)\b/.test(context) ||
      (question.topic === 'ML' && /\b(precision|recall|false positive|false negative|threshold)\b/.test(context))
    ),
    hint: () => 'Ask which mistake is expensive. Lower thresholds usually catch more positives; higher thresholds usually create fewer false alarms.',
    lesson: () => [
      'Precision asks: of the items the model flagged, how many were actually positive? Recall asks: of all actual positives, how many did the model catch? They move in tension because a threshold decides how aggressive the model is.',
      'If missing a real case is costly, you usually care about recall. If false alarms are costly, you usually care about precision. AUC summarizes ranking quality across thresholds, but it does not choose the operating threshold for you.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because the right metric depends on the cost of the mistake. Check whether the scenario is trying to avoid missed positives, false alarms, or poor ranking across thresholds.`,
  },
  {
    test: (context) => /\b(confidence interval|credible interval|coverage|margin of error)\b/.test(context),
    hint: () => 'For a frequentist confidence interval, the 95 percent belongs to the long-run method, not to this one fixed interval.',
    lesson: () => [
      'A confidence interval describes a procedure. If you repeated the sampling process many times, about 95 percent of the 95 percent intervals would contain the true fixed parameter.',
      'A Bayesian credible interval is different: it can say there is a 95 percent posterior probability that the parameter lies in the interval, given the model and prior. Many wrong answers mix those two interpretations.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because the interpretation must match the framework. Confidence intervals are about long-run coverage; credible intervals are about posterior probability under a Bayesian model.`,
  },
  {
    test: (context) => /\b(factor|factoring|polynomial|quadratic|zero product|complete the square|completing the square|roots?|zeros?)\b/.test(context),
    hint: () => 'Name the algebra form first. If it is a product equal to zero, each factor can be set to zero; if it is a quadratic, look for factoring, completing the square, or the quadratic formula.',
    lesson: () => [
      'Algebra procedure questions are less about memorizing an answer and more about choosing the right shape. A quadratic has an x-squared term, and the goal is often to rewrite it so the roots or zeros are visible.',
      'Factoring turns one expression into multiplied pieces. The zero-product property says that if two factors multiply to zero, at least one factor must be zero. That is why factoring a quadratic often turns one hard equation into two small linear equations.',
    ],
    worked: (_question, correct) => `The correct answer is "${correctLabel(correct)}". First identify the expression type, then apply the matching procedure: rewrite the expression if needed, set the relevant factor or equation to zero, and check that the result fits the original prompt.`,
  },
  {
    test: (context) => /\b(slope|intercept|linear equation|y\s*=\s*mx|system of equations|substitution|elimination|simultaneous equations)\b/.test(context),
    hint: () => 'For a line, slope is change in y divided by change in x. For a system, look for the point or values that make both equations true at the same time.',
    lesson: () => [
      'A linear equation describes a constant-rate relationship. In y = mx + b, m is the slope, meaning how much y changes for each 1-step change in x, and b is the y-intercept, where the line crosses the y-axis.',
      'A system of equations asks for values that satisfy every equation at once. Substitution replaces one variable using another equation; elimination adds or subtracts equations to cancel a variable.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because it matches the line or system constraints. For line questions, read slope and intercept separately. For systems, test that the values satisfy all equations, not just one of them.`,
  },
  {
    test: (context) => /\b(exponent|power|radical|square root|rational exponent|logarithm|log\b|scientific notation)\b/.test(context),
    hint: () => 'Translate the notation into words. Exponents repeat multiplication, roots undo powers, and logarithms ask which exponent would produce a number.',
    lesson: () => [
      'Exponent rules are bookkeeping for repeated multiplication. Multiplying same-base powers adds exponents, dividing subtracts them, and raising a power to a power multiplies exponents.',
      'Radicals and rational exponents are two ways to say the same thing: a square root is a one-half power, a cube root is a one-third power, and so on. A logarithm reverses exponentiation: log base 10 of 100 asks, "10 to what power gives 100?"',
    ],
    worked: (_question, correct) => `The correct answer is "${correctLabel(correct)}". Rewrite the expression using the matching exponent, root, or logarithm rule, then simplify one step at a time instead of treating the symbols as decoration.`,
  },
  {
    test: (context) => /\b(order of operations|evaluate (?:the )?expression|pemdas|bodmas|integer|fraction|mixed number|decimal|percentage)\b/.test(context),
    hint: () => 'Do the expression in layers: parentheses first, then powers, then multiplication/division left-to-right, then addition/subtraction left-to-right.',
    lesson: () => [
      'Order of operations is a shared convention that keeps expressions from having several possible meanings. Parentheses create the first mini-problem, multiplication and division share a level, and addition and subtraction share a level.',
      'Fractions, decimals, and percentages are three languages for parts of a whole. Many mistakes happen when a learner changes language mid-problem without preserving the same value.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}". Work through the expression in order, keeping signs attached to their numbers and only simplifying one layer at a time.`,
  },
  {
    test: (context, question) => hasStudyDesignSignal(context, question),
    hint: () => 'Ask who got included, who got left out, and whether the design can support a causal claim or only an association.',
    lesson: () => [
      'Study-design questions are about what the evidence can honestly support. A random sample helps represent a population, while random assignment helps compare treatments fairly enough to support causal claims.',
      'Bias enters when the sample or measurement process systematically favors some answers over others. Self-selected surveys, missing groups, leading questions, and unequal treatment conditions can all make a confident-looking result weak.',
    ],
    worked: (_question, correct) => `The correct answer is "${correctLabel(correct)}" because the design determines the strength of the claim. Check the sampling method, comparison group, and assignment method before deciding what the result proves.`,
  },
  {
    test: (context) => /\b(histogram|relative frequency|box plot|boxplot|scatter plot|stem-and-leaf|frequency table|bar chart|dot plot)\b/.test(context),
    hint: () => 'Read the display before interpreting it: axes, bins, scale, and what each mark or box actually represents.',
    lesson: () => [
      'Data displays turn a data set into a visual argument. Histograms show counts inside bins, scatter plots show pairs of values, box plots summarize median, quartiles, and spread, and frequency tables organize counts directly.',
      'The key is to read the structure before the story. A tall bar, wide box, or upward trend only means something after you know the axis, unit, and grouping being shown.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because it reads the correct feature of the display. Check the axis or summary statistic first, then match the visual evidence to the option.`,
  },
  {
    test: (context) => /\b(validity|soundness|premise|conclusion|inference|argument role|deductive|inductive argument)\b/.test(context),
    hint: () => 'Separate structure from truth. Validity asks whether the conclusion follows if the premises are true; soundness also asks whether those premises are actually true.',
    lesson: () => [
      'In logic, a premise is a reason offered in support of a conclusion. Validity is about the shape of the reasoning: if the premises were true, would the conclusion have to be true?',
      'Soundness adds a real-world check. An argument is sound only when it is valid and its premises are true. That is why a weird argument can be valid but unsound: the structure works, but the starting claims fail.',
    ],
    worked: (_question, correct) => `The correct answer is "${correctLabel(correct)}". First identify the premises and conclusion, then decide whether the question is testing the argument's structure, the truth of its claims, or the role a sentence plays.`,
  },
  {
    test: (context) => /\b(necessary|sufficient|only if|if and only if|antecedent|consequent|conditional statement|contrapositive)\b/.test(context),
    hint: () => 'Use the door-key test: a sufficient condition opens the door by itself; a necessary condition must be present, but may not be enough alone.',
    lesson: () => [
      'A sufficient condition guarantees the result. If being a square is sufficient for being a rectangle, then every square gets you into the rectangle category.',
      'A necessary condition is required but may not be enough. Having four sides is necessary for being a square, but it is not sufficient because many four-sided shapes are not squares. "Only if" usually points to the necessary condition.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because conditionals are about direction. Identify which side guarantees the other, then avoid reversing the arrow unless the question gives an if-and-only-if relationship.`,
  },
  {
    test: (context) => /\b(utilitarian|deontology|kant|categorical imperative|virtue ethics|consequentialism|ethics|moral theory)\b/.test(context),
    hint: () => 'Ask what the theory treats as central: consequences, duties and rules, or character and virtues.',
    lesson: () => [
      'Major ethical theories answer different questions. Utilitarianism asks which action produces the best overall consequences. Deontology asks what duty or rule must be respected. Virtue ethics asks what a good person or flourishing character would do.',
      'A quick example: lying to protect someone might look good to a utilitarian if it prevents harm, wrong to a strict Kantian because it violates a duty of honesty, and character-relevant to virtue ethics because it asks what honesty, courage, and compassion require together.',
    ],
    worked: (_question, correct) => `The correct answer is "${correctLabel(correct)}" because the prompt is asking which moral lens is doing the work. Sort the options into consequence, duty, or character before choosing.`,
  },
  {
    test: (context) => /\b(big o|recursion|base case|dynamic programming|hash table|heap|binary search|bfs|dfs|breadth-first|depth-first|data structure|algorithm)\b/.test(context),
    hint: () => 'Ask what operation must be fast: lookup, ordering, traversal, repeated subproblems, or growth as input size increases.',
    lesson: () => [
      'Algorithm questions usually test the shape of the work. Big O describes how runtime or memory grows as input size grows, not how many seconds one tiny example takes.',
      'Data structures are chosen by the operations they make cheap. Hash tables are strong for lookup, heaps for repeated min/max access, BFS for shortest paths in unweighted layers, DFS for deep exploration, and dynamic programming for reusing overlapping subproblem results.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because it matches the needed operation and growth pattern. Identify the bottleneck, then choose the algorithm or structure that handles that bottleneck directly.`,
  },
  {
    test: (context) => /\b(stoichiometry|mole|ph\b|equilibrium|newton|force|circuit|meiosis|mitosis|natural selection|photosynthesis|cellular respiration)\b/.test(context),
    hint: () => 'Ask what is conserved, what changes, and what mechanism causes the change. Science questions usually reward mechanism over vocabulary alone.',
    lesson: () => [
      'Core science concepts become easier when you track the system. In chemistry, moles count particles and balanced equations conserve atoms. In physics, forces change motion. In biology, mechanisms like selection, meiosis, and respiration explain how living systems change or keep working.',
      'The trap is often a vocabulary match with no mechanism. A strong answer says what changes, why it changes, and what stays constrained by conservation, inheritance, energy, or structure.',
    ],
    worked: (_question, correct) => `The correct answer is "${correctLabel(correct)}" because it matches the mechanism in the prompt. Look for the conserved quantity, causal process, or system rule, then reject options that only sound like nearby vocabulary.`,
  },
  {
    test: (context) => /\b(working capital|cash flow statement|income statement|balance sheet|duration|convexity|yield|bond price|cash conversion|net income)\b/.test(context),
    hint: () => 'For statements, ask where the item first appears and how cash moves. For bonds, remember that price and yield usually move in opposite directions.',
    lesson: () => [
      'The three financial statements connect different views of the same business. The income statement shows profit over a period, the balance sheet shows assets, liabilities, and equity at a point in time, and the cash flow statement explains how cash actually moved.',
      'Working capital tracks operating assets and liabilities like receivables, inventory, and payables. In fixed income, duration measures sensitivity to yield changes, and bond prices usually fall when yields rise because old coupons become less attractive.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because the finance concept has to be placed in the right statement or price/yield relationship. Trace whether the question is asking about accounting flow, balance-sheet position, cash movement, or interest-rate sensitivity.`,
  },
  {
    test: (context) => /\b(correlation|causation|causal|confounder|confounding|randomized|observational|selection bias)\b/.test(context),
    hint: () => 'Separate the pattern from the causal story. Ask what comparison, randomization, or confounder would be needed before claiming cause.',
    lesson: () => [
      'A correlation is a pattern of movement between variables; causation is a claim that changing one variable produces a change in another. Observational data can suggest a causal story, but it often leaves confounders alive.',
      'Randomization helps because it makes treatment groups comparable in expectation. Without it, a third variable might explain both the apparent cause and the outcome.',
    ],
    worked: (_question, correct) => `The correct answer is "${correctLabel(correct)}" because the strongest reasoning distinguishes evidence of association from evidence of cause. Look for random assignment, a comparison group, or a named confounder before making a causal claim.`,
  },
  {
    test: (context) => /\b(backward induction|nash equilibrium|dominant strategy|subgame|prisoner's dilemma|pirate game|centipede game)\b/.test(context),
    hint: () => 'Start at the last decision point and reason backward. Each player chooses from their own payoff, not from what seems fair.',
    lesson: () => [
      'Backward induction solves sequential games from the end. You first ask what the final player would do, then use that future choice to work out what the earlier player should do now.',
      'A Nash equilibrium is stable because no player wants to switch unilaterally. A dominant strategy is stronger: it is best no matter what the other player does. Many game-theory traps come from using fairness language instead of payoff logic.',
    ],
    worked: (_question, correct) => `The answer is "${correctLabel(correct)}" because strategic questions are solved from incentives and fallback payoffs. Work backward through the future choices, then choose the move that remains stable for the player making the decision.`,
  },
  {
    test: (context) => /\b(dcf|discounted cash flow|wacc|free cash flow|terminal value|enterprise value|equity value|ebitda|valuation multiple)\b/.test(context),
    hint: () => 'Identify whether the question is about operating cash flow, discount rate, terminal value, enterprise value, or equity value before touching the answer choices.',
    lesson: () => [
      'DCF valuation turns future free cash flows into today dollars by discounting them for risk and time. WACC is often used as the discount rate for unlevered free cash flow because it reflects the blended cost of debt and equity capital.',
      'Enterprise value prices the whole operating business before cash and debt adjustments. Equity value is what belongs to shareholders after moving from enterprise value through cash, debt, and other claims.',
    ],
    worked: (_question, correct) => `The correct answer is "${correctLabel(correct)}" because valuation questions depend on matching the metric to the claim. First decide whether the answer should affect cash flows, discount rate, terminal value, enterprise value, or equity value.`,
  },
]

export function buildLearningSupport(question: Question, selectedAnswer?: Answer): LearningSupport {
  const correct = correctAnswer(question)
  const concept = conceptSupports.find((support) => support.test(questionContext(question), question))

  const hint = concept && genericHint(question)
    ? concept.hint(question, correct, selectedAnswer)
    : clean(question.mentorHint) || fallbackHint(correct)

  const lessonParagraphs = concept && genericLesson(question)
    ? concept.lesson(question, correct, selectedAnswer)
    : splitLesson(question.lesson)

  const workedSolution = concept && thinSolution(question, correct)
    ? concept.worked(question, correct, selectedAnswer)
    : clean(question.solution) || fallbackWorked(question, correct, selectedAnswer)

  return {
    hint,
    lessonParagraphs: lessonParagraphs.length ? lessonParagraphs : fallbackLesson(question, correct, selectedAnswer),
    workedSolution: thinSolution({ ...question, solution: workedSolution }, correct)
      ? fallbackWorked(question, correct, selectedAnswer)
      : workedSolution,
  }
}
