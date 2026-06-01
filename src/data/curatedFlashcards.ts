import type { Flashcard } from '../lib/flashcards'

type CuratedDeckKey = `${string}:${string}`
type CardSeed = [title: string, front: string, back: string, tag: string]
type ConceptSeed = [title: string, meaning: string, trap: string]

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function cards(trackId: string, chapter: string, seeds: CardSeed[]): Flashcard[] {
  const prefix = `${trackId}-${slug(chapter)}`
  return seeds.map(([title, front, back, tag], index) => ({
    id: `${prefix}-${String(index + 1).padStart(2, '0')}`,
    chapter,
    title,
    front,
    back,
    tag,
  }))
}

function deck(trackId: string, chapter: string, seeds: CardSeed[]) {
  return [`${trackId}:${chapter}`, cards(trackId, chapter, seeds)] as const
}

function conceptDeck(trackId: string, chapter: string, seeds: ConceptSeed[]) {
  return deck(trackId, chapter, seeds.flatMap(([title, meaning, trap]) => [
    [title, `What does "${title}" mean in this chapter?`, meaning, 'Concept'],
    [`${title} trap`, `What mistake does "${title}" help you avoid?`, trap, 'Trap'],
  ]))
}

const quantDecks = [
  deck('quant', 'Interview Map', [
    ['The first thirty seconds', 'What should you do before solving a vague quant interview prompt?', 'State the cleanest reasonable assumptions, ask for a quick confirmation, then solve under that version. The interviewer is grading scope control as much as math.', 'Interview habit'],
    ['Prompt type', 'Why identify the round type before computing?', 'Probability, counting, puzzle, estimation, and coding prompts reward different tools. Naming the type tells you whether to draw a tree, count cases, hunt for an invariant, estimate, or write an algorithm.', 'Concept'],
    ['Representation choice', 'What does a good representation do?', 'It makes the hidden structure visible. A table exposes states, a tree exposes conditioning, a recurrence exposes smaller subproblems, and a diagram exposes symmetry or constraints.', 'Use'],
    ['Sanity check', 'What is a sanity check in quant prep?', 'A fast plausibility test before committing: sign, units, order of magnitude, boundary case, or comparison to an easy case. It catches answers that are polished but impossible.', 'Habit'],
    ['Hints', 'How should you treat an interviewer hint?', 'Treat it as new data, not a judgment. Repeat what it changes, update the plan, and keep moving. Good candidates show they can be steered without collapsing.', 'Interview habit'],
    ['Recovery', 'What is the right move after a wrong start?', 'Name the failed assumption or path, park it cleanly, and pivot to a better representation. Defending a dead end is worse than changing course out loud.', 'Trap'],
  ]),
  deck('quant', 'Probability', [
    ['Sample space', 'What is the sample space?', 'The sample space is the set of outcomes you are treating as possible and equally weighted or explicitly weighted. Most probability mistakes begin with an unclear sample space.', 'Concept'],
    ['Independence', 'What does independence really mean?', 'Events are independent when learning one does not change the probability of the other: P(A and B) = P(A)P(B). It does not mean the events cannot happen together.', 'Concept'],
    ['Mutually exclusive', 'How is mutually exclusive different from independent?', 'Mutually exclusive events cannot both happen. Independent events can happen together, but one gives no information about the other. For non-impossible events, these are almost opposites.', 'Trap'],
    ['Complement move', 'When is the complement easier?', 'Use the complement for phrases like at least one, no more than, or collision. Counting "not this" often avoids a messy pile of overlapping successful cases.', 'Use'],
    ['Bayes', 'What does Bayes rule repair?', 'Bayes rule updates a base rate with evidence. It keeps you from confusing P(signal given truth) with P(truth given signal), especially in tests, screens, and rare-event settings.', 'Concept'],
    ['Geometric setup', 'What is a geometric random variable?', 'It counts trials until the first success when each trial has success probability p. The expected wait is 1/p, a tiny formula that appears constantly in interview puzzles.', 'Concept'],
    ['Linearity of expectation', 'Why is linearity of expectation so useful?', 'You can add expected contributions even when the pieces are dependent. It lets you count expected matches, records, fixed points, or coupons without modeling the whole joint distribution.', 'Use'],
    ['Base-rate trap', 'Why can a 99% accurate test still produce many false positives?', 'If the condition is rare, the false positives from the large healthy population can outnumber true positives. Always combine test accuracy with the underlying base rate.', 'Trap'],
  ]),
  deck('quant', 'Brain Teasers', [
    ['Invariant', 'What is an invariant?', 'An invariant is something that stays unchanged while the puzzle moves. Parity, color counts, total difference, or a residue modulo 3 can prove an ending is impossible.', 'Concept'],
    ['Backward induction', 'When should you solve from the end backward?', 'Use backward induction when later choices determine earlier incentives: pirate votes, bargaining, last-move games, and rational-agent puzzles. The current move only makes sense after the future is solved.', 'Use'],
    ['Information bound', 'What is an information bound?', 'It is a limit on how much a test can distinguish. A balance scale has three outcomes, a yes/no question has two, and a strategy must separate all possible worlds within those outcomes.', 'Concept'],
    ['Pigeonhole', 'What does the pigeonhole principle guarantee?', 'If more objects go into fewer boxes, some box gets at least two. In puzzles, it proves existence without constructing the exact pair or collision.', 'Concept'],
    ['Small cases', 'Why try a tiny case first?', 'Tiny cases reveal the recurrence, invariant, or induction pattern without drowning you in arithmetic. Strong interview answers often start by solving n = 1, 2, 3 honestly.', 'Habit'],
    ['Physical channel', 'What is the hidden move in switch, rope, and coin puzzles?', 'Look for an information channel beyond the obvious: heat, elapsed burn time, flipping, ordering, or state memory. The puzzle often turns on what can be observed indirectly.', 'Use'],
    ['Volume is not enough', 'Why do packing puzzles need more than a volume check?', 'Volume can pass while structure fails. Coloring, parity, or shape constraints can prove that no arrangement exists even when the raw space looks sufficient.', 'Trap'],
    ['Name the trick', 'What should you say after solving a brain teaser?', 'Name the reusable move: invariant, parity, pigeonhole, backward induction, information bound, recurrence, or extremal case. That turns one answer into transferable skill.', 'Interview habit'],
  ]),
  deck('quant', 'Mental Math and Estimation', [
    ['Two significant figures', 'What precision is usually enough in live estimation?', 'Two significant figures plus the right order of magnitude is often better than slow exact arithmetic. The goal is a defensible decision, not a calculator recital.', 'Habit'],
    ['Unit discipline', 'Why write units during mental math?', 'Units reveal whether you are computing a rate, count, price, probability, or dollar value. A beautiful number with the wrong unit is wrong.', 'Trap'],
    ['Rule of 72', 'What does the rule of 72 estimate?', 'Divide 72 by a growth rate percentage to approximate doubling time. At 9% growth, doubling takes about 8 years.', 'Concept'],
    ['Market quote', 'What does a two-sided market quote force you to decide?', 'You need a fair value and a spread. If your fair value is above the ask, you might buy; below the bid, you might sell; inside the spread, you usually pass.', 'Use'],
    ['Fermi estimate', 'What makes a Fermi estimate credible?', 'Explicit assumptions, decomposed drivers, and a range. "People times usage times price" beats one mysterious guess because each assumption can be challenged.', 'Concept'],
    ['Decimal check', 'What is the fastest way to catch a decimal error?', 'Bracket the answer before calculating: should it be cents, dollars, thousands, or millions? Decimal mistakes usually fail an order-of-magnitude check.', 'Trap'],
  ]),
  deck('quant', 'Coding Patterns', [
    ['Brute force first', 'Why state a brute force solution before optimizing?', 'It proves you understand the problem and creates a correctness baseline. Then you can explain exactly what the better data structure improves.', 'Interview habit'],
    ['Hash map', 'What does a hash map usually buy you?', 'It turns repeated lookup into near-constant-time lookup, often changing a nested O(n squared) scan into an O(n) pass.', 'Use'],
    ['Two pointers', 'When do two pointers fit?', 'Use them on sorted arrays, paired ends, windows, or monotonic movement where each pointer only travels forward. The power is avoiding rechecking old ground.', 'Concept'],
    ['Sliding window', 'What is a sliding window?', 'A maintained range that expands and contracts while tracking a running condition: count, sum, distinct items, or validity. It is ideal for contiguous subarray/string problems.', 'Concept'],
    ['Edge cases', 'Which edge cases should you say out loud?', 'Empty input, one item, duplicates, negatives, boundaries, overflow, and ties. Naming them before coding prevents the interviewer from discovering your blind spot.', 'Habit'],
    ['Complexity wording', 'What should complexity analysis include?', 'State time and space, and say whether it is worst-case or expected. "Hash map O(1)" is expected; the nuance earns trust.', 'Trap'],
  ]),
  deck('quant', 'Mock Interview and Recovery', [
    ['Mock objective', 'What is a mock interview for?', 'It is not a performance trophy. It is a diagnostic that reveals setup errors, pacing leaks, communication gaps, and patterns you avoid when practicing alone.', 'Concept'],
    ['Pacing', 'How should you manage a 45-minute mixed screen?', 'Budget time per problem, state when you are moving on, and leave room for breadth. Four partial-but-organized attempts can beat one perfect answer and three blanks.', 'Interview habit'],
    ['Hint response', 'What should happen after a hint?', 'Repeat the useful part, connect it to the method, and make the next step. Do not apologize for needing it; show that you can convert help into progress.', 'Use'],
    ['Error log', 'What belongs in a quant prep error log?', 'Question type, miss type, trigger, correct move, and next drill. "Got it wrong" is too vague; "confused P(A|B) with P(B|A)" is actionable.', 'Habit'],
    ['Composure gap', 'What is a composure gap?', 'A problem you could solve untimed but lose under observation. The fix is spoken practice, timed sets, and recovery scripts, not more passive reading.', 'Concept'],
    ['Post-mortem', 'What is the highest-value post-mock question?', 'Ask what would have changed the outcome fastest: a concept drill, a representation habit, a sanity check, or pacing. Then train that exact leak.', 'Use'],
  ]),
  deck('quant', 'Capstone: Mixed Screen', [
    ['Mixed loop', 'Why does the capstone mix problem types?', 'Real first rounds sample breadth. You need to switch tools quickly across probability, counting, EV, puzzles, estimation, and coding while keeping a steady narrative.', 'Concept'],
    ['Assumption ledger', 'What should you track across a full screen?', 'Keep a mental ledger of assumptions, approximations, and unresolved checks. It makes follow-ups easier because you know which parts of the answer are load-bearing.', 'Habit'],
    ['Correction log', 'What makes a correction log useful?', 'It names the cause of the miss and the fix. "More practice" is foggy; "draw the sample space before Bayes problems" changes behavior.', 'Use'],
    ['One bad problem', 'How do you keep one miss from ruining the screen?', 'Close it cleanly, state what you would revisit, and reset for the next problem. Interviewers care about recovery because the job involves being wrong fast and learning.', 'Interview habit'],
  ]),
  deck('quant', 'Finance', [
    ['No-arbitrage', 'What is no-arbitrage reasoning?', 'If two portfolios have the same future payoff in every state, they must have the same price today. Otherwise a trader could lock in profit without risk.', 'Concept'],
    ['Put-call parity', 'What does put-call parity express?', 'A call minus a put with the same strike and expiry replicates a forward. The formula is a no-arbitrage relationship, not a Black-Scholes guess.', 'Use'],
    ['Greeks', 'What are option Greeks for?', 'Greeks translate a price into risks: delta for stock move, gamma for delta change, vega for volatility, theta for time decay, rho for rates.', 'Concept'],
    ['Model humility', 'Why is Black-Scholes still useful if markets violate it?', 'It gives a common language: implied volatility and Greeks. Traders know the assumptions are false, then manage the ways reality deviates.', 'Trap'],
  ]),
  deck('quant', 'Linear Algebra', [
    ['Positive definite', 'What does positive definite mean intuitively?', 'A symmetric matrix is positive definite when every nonzero direction has positive quadratic form. In finance, it is the "no impossible negative variance" condition for covariance matrices.', 'Concept'],
    ['Eigenvectors', 'What is an eigenvector?', 'An eigenvector is a direction the matrix stretches or shrinks without rotating. The eigenvalue is the stretch factor in that direction.', 'Concept'],
    ['Rank', 'What does rank tell you?', 'Rank counts independent directions in the data or transformation. Low rank means redundancy; full rank means no direction is secretly a combination of others.', 'Use'],
    ['Conditioning', 'Why do quants care about ill-conditioned matrices?', 'Small input noise can create large output swings. That matters in regression, optimization, covariance inversion, and portfolio weights.', 'Trap'],
  ]),
  deck('quant', 'Calculus', [
    ['Derivative', 'What does a derivative measure?', 'A derivative is local sensitivity: how fast an output changes for a tiny input change. In quant work it becomes marginal cost, slope, delta, or instantaneous rate.', 'Concept'],
    ['Taylor expansion', 'Why is Taylor expansion useful in interviews?', 'It approximates a function near a point and reveals which terms matter. It turns hard expressions into manageable local behavior.', 'Use'],
    ['Optimization', 'What does a first-order condition tell you?', 'At an interior optimum, the slope is zero. The second derivative or shape then tells you whether it is a max, min, or flat trap.', 'Concept'],
    ['Limit check', 'Why test limits at boundaries?', 'Boundary behavior catches formulas that only work in the middle. Let variables go to 0, infinity, or equality and ask whether the answer still makes sense.', 'Habit'],
  ]),
  deck('quant', 'Algorithms', [
    ['Asymptotics', 'What does Big-O ignore?', 'Big-O ignores constants and lower-order terms to describe growth as input size gets large. It is a map of scaling, not a stopwatch.', 'Concept'],
    ['Sorting', 'Why does sorting often change a problem?', 'Sorting creates order, which unlocks binary search, two pointers, sweep lines, and duplicate grouping. You pay O(n log n) to buy structure.', 'Use'],
    ['Dynamic programming', 'What makes a problem dynamic-programming shaped?', 'Overlapping subproblems plus a clean recurrence. If the same smaller question appears repeatedly, store it instead of recomputing it.', 'Concept'],
    ['Proof of correctness', 'What is an interview-friendly correctness proof?', 'State the invariant or recurrence that your algorithm preserves, then explain why it covers every case. Do not rely on "it seems to work."', 'Interview habit'],
  ]),
  deck('quant', 'Programming', [
    ['Implementation risk', 'What makes a simple algorithm fail in code?', 'Off-by-one boundaries, mutation while iterating, empty inputs, and assumptions about sortedness. Most coding misses are small contracts violated silently.', 'Trap'],
    ['Testing aloud', 'What test cases should you run aloud?', 'A normal case, the smallest case, a boundary case, and a case with duplicates or ties. Tiny tests expose logic bugs faster than big examples.', 'Habit'],
    ['Readable code', 'What does readable interview code optimize for?', 'Correctness, named variables, simple control flow, and visible invariants. Clever one-liners usually hide the reasoning the interviewer wants to hear.', 'Use'],
    ['Simulation', 'When is simulation acceptable in a quant screen?', 'Use simulation to check intuition or estimate when exact math is not required, but say what randomness, trials, and error bounds mean. Do not pass it off as proof.', 'Concept'],
  ]),
]

const financialModelingDecks = [
  deck('financialModeling', 'Modeling Standards and Architecture', [
    ['Model purpose', 'What is the first question before building a model?', 'What decision will this support? The workbook structure, detail level, outputs, and caveats should all serve that decision.', 'Concept'],
    ['Inputs vs formulas', 'Why separate inputs from formulas?', 'It makes the model auditable. A reviewer can find the assumptions, flex them, and trust that formulas are not hiding hardcoded surprises.', 'Use'],
    ['One formula per row', 'Why is one-formula-per-row discipline valuable?', 'It lets formulas copy cleanly across time and makes breaks visible. A row with mixed logic is where quiet errors hide.', 'Habit'],
    ['Checks row', 'What should a checks row do?', 'Flag whether the balance sheet balances, cash ties, debt rolls forward, and shares sum. Checks do not fix the model; they tell you where to look.', 'Concept'],
    ['Sign convention', 'Why does sign convention matter?', 'Inconsistent signs can turn an outflow into a fake inflow. Pick a convention early and make every schedule obey it.', 'Trap'],
  ]),
  deck('financialModeling', 'Historical Financials and Operating Drivers', [
    ['Driver vs decoration', 'What makes a metric a real driver?', 'A real driver explains future economics: price, volume, churn, utilization, margin, or working capital. A decorative ratio looks impressive but does not move cash.', 'Concept'],
    ['Normalization', 'Why normalize historicals?', 'Forecasts should start from a sustainable run-rate. One-time gains, litigation charges, unusual inventory builds, or pandemic spikes can distort the base year.', 'Use'],
    ['Margins', 'What is a margin?', 'A margin is a ratio, usually profit divided by revenue. It tells you efficiency, not absolute dollars.', 'Concept'],
    ['Seasonality', 'Why can seasonality mislead a model?', 'A point-in-time balance can look strong or weak because of the business cycle. Normalize working capital and revenue timing before projecting.', 'Trap'],
  ]),
  deck('financialModeling', 'Revenue, Expense, and Working Capital Forecasts', [
    ['Driver-based revenue', 'What is a driver-based forecast?', 'It builds revenue from operating logic, such as customers times price, units times ASP, bookings times conversion, or capacity times utilization.', 'Concept'],
    ['Capacity ceiling', 'Why test forecast capacity?', 'A revenue story can exceed plant capacity, sales headcount, inventory, or market size. A good model checks whether the operation can actually deliver the numbers.', 'Trap'],
    ['Cash conversion cycle', 'What does the cash conversion cycle show?', 'It tracks how long cash is tied up in receivables and inventory before payables offset some of the need. Profit can rise while cash gets consumed.', 'Concept'],
    ['Deferred revenue', 'Why is deferred revenue not ordinary revenue?', 'It is cash received before the service is earned. It can help cash flow now, but the model must recognize revenue only as obligations are performed.', 'Use'],
    ['Working capital', 'How can growth consume cash?', 'More sales often mean more receivables and inventory before the cash arrives. The income statement can look healthy while operating cash flow tightens.', 'Concept'],
  ]),
  deck('financialModeling', 'Three-Statement Integration', [
    ['Three links', 'How do the three statements connect?', 'Net income flows to retained earnings and cash flow; capex and depreciation move PP&E; debt changes affect cash, interest, and liabilities. Every assumption travels.', 'Concept'],
    ['Depreciation', 'Why is depreciation added back in cash flow?', 'It reduced accounting earnings but did not use cash in the period. The cash left earlier when capex was spent.', 'Use'],
    ['Debt schedule', 'What does a debt schedule need?', 'Beginning balance, borrowings, repayments, ending balance, and interest. Interest often depends on average debt, which can create circularity.', 'Concept'],
    ['No balance-sheet plug', 'Why should you not force the balance sheet to balance?', 'A plug hides the missing flow. The right response is to find the broken link, not create a line that absorbs the error.', 'Trap'],
  ]),
  deck('financialModeling', 'Free Cash Flow and DCF Valuation', [
    ['Unlevered FCF', 'What is unlevered free cash flow?', 'Cash available to all capital providers before financing: EBIT after tax plus D&A, minus capex, minus the increase in net working capital.', 'Concept'],
    ['WACC match', 'Why discount unlevered FCF at WACC?', 'Unlevered FCF belongs to debt and equity holders together, so the discount rate should blend their required returns. Cost of equity alone mismatches the cash flow.', 'Trap'],
    ['Terminal value', 'Why scrutinize terminal value?', 'Terminal value often drives most of enterprise value. A tiny change in growth rate, exit multiple, or WACC can dominate the conclusion.', 'Concept'],
    ['Gordon growth', 'What must be true for perpetuity growth to be sane?', 'The terminal growth rate should be below WACC and usually near long-run economy growth. If g approaches WACC, value explodes mechanically.', 'Use'],
    ['Mid-year convention', 'What does mid-year convention assume?', 'Cash flows arrive throughout the year, not all on December 31. Discounting them half a year less often better matches real operating cash generation.', 'Concept'],
  ]),
  deck('financialModeling', 'Comparables, Scenarios, and Sensitivities', [
    ['Comps', 'What makes a comparable company defensible?', 'Similar growth, margin profile, business model, risk, geography, and capital intensity. Same-sector is not enough.', 'Concept'],
    ['EV vs equity value', 'When should you use enterprise value?', 'Use EV with pre-financing metrics like revenue, EBITDA, or EBIT. Use equity value with post-interest metrics like net income or EPS.', 'Trap'],
    ['Football field', 'What does a football field show?', 'It puts valuation methods side by side as ranges, helping the client see overlap, outliers, and which method deserves weight.', 'Use'],
    ['Sensitivity', 'What is a sensitivity table for?', 'It shows how outputs move when key assumptions change. The goal is not decoration; it reveals which assumptions actually control the decision.', 'Concept'],
  ]),
  deck('financialModeling', 'Model Review, Error Detection, and Stress Testing', [
    ['Audit mindset', 'What should a reviewer test first?', 'The links that can reverse the decision: balance checks, cash ties, debt rollforward, signs, hardcodes, and assumptions that dominate valuation.', 'Habit'],
    ['Hardcode scan', 'Why scan for hardcodes?', 'A hidden hardcode inside a formula breaks flexibility and may override the stated assumption. It is one of the fastest ways to lose trust.', 'Trap'],
    ['Stress test', 'What does it mean for a model to fail gracefully?', 'When inputs move to downside cases, the model should produce warnings or plausible outputs, not broken formulas, impossible balances, or nonsense valuation.', 'Concept'],
    ['Review log', 'What belongs in a model review log?', 'Location, issue, severity, owner, fix, and status. It turns criticism into a controlled cleanup process.', 'Use'],
  ]),
  deck('financialModeling', 'Communicating the Model', [
    ['One-page output', 'What should a model output page do?', 'Give the decision-maker the conclusion, the range, the drivers, and the caveats without forcing them through every tab.', 'Concept'],
    ['Assumption bridge', 'What is an assumption bridge?', 'A clear path from key assumptions to output changes. It explains why the valuation moved, not just that it moved.', 'Use'],
    ['Range not oracle', 'Why present a range instead of one heroic number?', 'Models are structured uncertainty. A range shows judgment and sensitivity; a single point can falsely imply precision.', 'Trap'],
    ['Decision memo', 'What should the memo say?', 'The recommendation, the two or three drivers behind it, the key risk, and what evidence would change the conclusion.', 'Habit'],
  ]),
  deck('financialModeling', 'Modeling Dock', [
    ['Revenue first principles', 'What is the friendliest way to start revenue modeling?', 'Start with units times price, then add the business-specific detail only when it improves the decision.', 'Concept'],
    ['Simple shell', 'What should a first model shell separate?', 'Inputs, calculations, outputs, and checks. Even a tiny model deserves visible architecture.', 'Habit'],
    ['Cash lens', 'What should a beginner keep asking?', 'When does cash actually move? Accrual profit and cash timing are related, but not the same thing.', 'Use'],
  ]),
  deck('financialModeling', 'Modeling Reef', [
    ['Statement trio', 'What are the three core financial statements?', 'Income statement, balance sheet, and cash flow statement. A useful model makes them talk to each other.', 'Concept'],
    ['Balance sheet logic', 'What does the balance sheet enforce?', 'Assets equal liabilities plus equity. If it does not balance, some flow is missing or signed incorrectly.', 'Use'],
    ['Cash flow role', 'Why is the cash flow statement the bridge?', 'It reconciles accounting profit to actual cash movement through non-cash items, working capital, investing, and financing.', 'Concept'],
  ]),
  deck('financialModeling', 'Modeling Cove', [
    ['Sensitivity idea', 'What does sensitivity mean?', 'An output is sensitive when small assumption changes move it a lot. Those assumptions deserve the most explanation and review.', 'Concept'],
    ['Scenario thinking', 'What is the difference between a scenario and a sensitivity?', 'A scenario is a coherent story across several assumptions; a sensitivity flexes one or two variables to see mechanical impact.', 'Use'],
    ['Decision risk', 'Why care about sensitivity?', 'It tells you whether the recommendation is robust or balanced on one fragile assumption.', 'Trap'],
  ]),
  deck('financialModeling', 'Modeling Lagoon', [
    ['FCF intuition', 'What does free cash flow try to measure?', 'Cash left after operating needs and required reinvestment. It is the cash a business can theoretically distribute or use strategically.', 'Concept'],
    ['Investment spending', 'Why subtract capex from free cash flow?', 'Capex is cash spent to maintain or grow the asset base. Earnings can look strong while necessary reinvestment drains cash.', 'Use'],
    ['Working capital drag', 'What can reduce FCF even when EBITDA rises?', 'Receivables, inventory, and other working-capital needs can absorb cash as the company grows.', 'Trap'],
  ]),
]

const investmentBankingDecks = [
  deck('investmentBankingRoadmap', 'Banking Workflow and Client Context', [
    ['Pitch vs mandate', 'Why distinguish pitch work from a live mandate?', 'A pitch is speculative work to win the job. A live mandate has a signed engagement and process obligations. The certainty, urgency, and audience are different.', 'Concept'],
    ['Process map', 'What does a sell-side process map show?', 'Stages, deliverables, owners, deadlines, and dependencies from teaser and NDA through CIM, management presentations, bids, signing, and closing.', 'Use'],
    ['Signing vs closing', 'Why is signing not the finish line?', 'Signing executes the agreement; closing happens after conditions, approvals, financing, and funds movement. Many risks live between those dates.', 'Trap'],
    ['Workstream ownership', 'Why ask who owns a workstream?', 'The right answer depends on whether the issue belongs to M&A, capital markets, legal, tax, QoE, management, or the client. Asking prevents polished but useless output.', 'Habit'],
    ['Data room', 'What is a data room for?', 'It gives approved buyers controlled access to diligence materials while preserving process discipline, confidentiality, version control, and a record of what was shared.', 'Concept'],
    ['Engagement incentives', 'How do retainer and success fees shape incentives?', 'A retainer pays for availability; a success fee rewards closing. Understanding the fee model helps explain banker behavior and client expectations.', 'Use'],
  ]),
  deck('investmentBankingRoadmap', 'Accounting and Financial Statement Links', [
    ['Adjusted EBITDA', 'Why is adjusted EBITDA dangerous if accepted blindly?', 'Management may label recurring costs as one-time. A buyer pays on sustainable earnings, so every add-back needs evidence.', 'Trap'],
    ['Net debt bridge', 'What does a net debt bridge connect?', 'It moves from enterprise value to equity value by subtracting debt-like items and adding cash-like items. It decides what sellers actually receive.', 'Concept'],
    ['QoE lens', 'What is quality of earnings diligence trying to prove?', 'Whether reported earnings convert into sustainable, buyer-believable earnings. It tests revenue quality, add-backs, working capital, and one-time claims.', 'Concept'],
    ['Working capital seasonality', 'Why does seasonality matter in diligence?', 'A balance sheet date can flatter or punish cash needs. Buyers care about normalized working capital, not a lucky snapshot.', 'Use'],
    ['Enterprise vs equity', 'What is the common valuation bridge mistake?', 'Quoting enterprise value as if it were seller proceeds. Debt, cash, preferred stock, minority interests, and transaction adjustments sit between EV and equity value.', 'Trap'],
    ['Run-rate', 'What makes a run-rate defensible?', 'It reflects the ongoing business after removing unusual items, unsupported add-backs, and timing distortions. It should survive buyer pushback.', 'Habit'],
  ]),
  deck('investmentBankingRoadmap', 'Valuation Core', [
    ['Peer set', 'What makes a comp belong?', 'Similar growth, margin, business model, end market, risk, and capital intensity. A famous name in the same sector can still be a bad comp.', 'Concept'],
    ['Precedents', 'Why do precedent transactions often show higher multiples?', 'They embed control premiums, synergies, and deal-specific scarcity. They are transaction evidence, not the same signal as public trading comps.', 'Use'],
    ['Football field', 'What is the job of a football field?', 'To show valuation ranges by method and reveal where evidence overlaps or conflicts. It should guide judgment, not just decorate a deck.', 'Concept'],
    ['DCF fragility', 'What usually drives a DCF range?', 'Terminal value, WACC, growth, margin, and reinvestment assumptions. If the output rests on one heroic assumption, say so.', 'Trap'],
    ['Method weight', 'Why state which valuation method carries weight?', 'A client needs judgment. Equal-weighting every method can hide the fact that some evidence is more relevant for this company and deal context.', 'Habit'],
    ['Multiple choice', 'How do you choose the right multiple?', 'Match the multiple to the business economics and available peers: EV/EBITDA for mature cash earnings, EV/Sales for early revenue stories, P/E when capital structures are comparable.', 'Use'],
  ]),
  deck('investmentBankingRoadmap', 'M&A and Capital Markets Materials', [
    ['Strategic rationale', 'What should a deal rationale explain?', 'Why this combination creates value, why now, what the buyer gains, which synergies matter, and what risk could break the thesis.', 'Concept'],
    ['Accretion', 'Why is accretion not proof a deal is good?', 'EPS accretion can come from cheap debt or accounting mechanics while strategic value is weak. It is a signal to explain, not a verdict.', 'Trap'],
    ['Synergies', 'Why separate cost and revenue synergies?', 'Cost synergies are often more controllable; revenue synergies are usually harder and less certain. Treating them equally overstates confidence.', 'Use'],
    ['Sources and uses', 'What must a sources-and-uses table do?', 'Balance exactly. It should show where money comes from and where it goes: purchase price, fees, refinancing, minimum cash, and financing instruments.', 'Concept'],
    ['Investor story', 'What does an equity story need to defeat?', 'The main investor objection. A good story does not list features; it answers the skeptical question that could block demand.', 'Habit'],
    ['Board page', 'How is a board page different from marketing?', 'A board page supports a decision with balanced facts, risks, and recommendation. Over-selling can create credibility and liability problems.', 'Trap'],
  ]),
  deck('investmentBankingRoadmap', 'Execution, Comments, and Quality Control', [
    ['Tie-out', 'What is a tie-out?', 'Tracing every number in a deliverable to a source, model cell, filing, diligence response, or backup page. It is how analysts keep credibility.', 'Concept'],
    ['Comment log', 'Why use a comment log?', 'It records each markup, owner, status, and resolution so the team knows what changed and what still blocks release.', 'Use'],
    ['Version control', 'What is the risk of bad version control?', 'An old draft can reintroduce errors, miss comments, or contradict the model. The team loses time and trust immediately.', 'Trap'],
    ['Diligence tracker', 'What should a diligence tracker surface?', 'Open items, owners, due dates, status, blockers, and the next decision. A VP should understand the process in thirty seconds.', 'Concept'],
    ['Escalation', 'When should an analyst escalate?', 'When a number will not tie, a deadline will slip, or a comment changes the analysis. Early escalation is control; late escalation is a fire drill.', 'Habit'],
    ['Client-ready', 'What does client-ready mean?', 'Accurate, sourced, consistent, audience-fit, and carrying the right takeaway up front. Pretty formatting is not enough.', 'Use'],
  ]),
  deck('investmentBankingRoadmap', 'Capstone: Sell-Side Analyst Packet and Synthesis', [
    ['Analyst packet', 'What should the capstone packet prove?', 'That the learner can connect process, financials, valuation, materials, diligence, and recommendation into one client-usable work product.', 'Concept'],
    ['Single mandate', 'Why use one fictional mandate across the packet?', 'It forces consistency. The buyer list, valuation, rationale, financing, and diligence risks all need to describe the same business and decision.', 'Use'],
    ['Recommendation', 'What should the final recommendation sound like?', 'A clear call, two or three reasons, the key risk, and what would change the view. Senior bankers need a sentence they can repeat.', 'Habit'],
    ['Packet risk', 'What ruins an otherwise strong packet?', 'Numbers that do not tie, unsupported add-backs, a vague recommendation, or a page that hides the client decision. Execution errors can swamp smart analysis.', 'Trap'],
  ]),
]

const productManagementDecks = [
  conceptDeck('productManagement', 'The PM Role and Product Operating System', [
    ['Outcome ownership', 'The PM is accountable for the user or business outcome the product is meant to change, even though design, engineering, sales, and support all help deliver it.', 'Do not confuse shipping a feature with moving the outcome the feature was supposed to affect.'],
    ['Product trio', 'The product trio is PM, design, and engineering working together from discovery through delivery so desirability, feasibility, and viability stay connected.', 'Do not write strategy in isolation and then toss it over the wall as tickets.'],
    ['Decision rights', 'Decision rights clarify who decides, recommends, informs, or executes when tradeoffs appear.', 'Do not claim authority you do not have or leave a decision owner unnamed.'],
    ['Product operating system', 'A product operating system is the repeatable rhythm for discovery, prioritization, delivery, launch, and learning.', 'Do not let every request create a fresh, improvised process.'],
  ]),
  conceptDeck('productManagement', 'Customer Discovery and Problem Framing', [
    ['Jobs-to-be-done', 'Jobs-to-be-done asks what progress the user is trying to make in a real situation, not just which feature they requested.', 'Do not build the literal request before understanding the job underneath it.'],
    ['Continuous discovery', 'Continuous discovery keeps contact with customers frequent enough that product decisions are fed by current evidence.', 'Do not treat one annual research project as enough truth for a living product.'],
    ['Opportunity solution tree', 'An opportunity solution tree links the target outcome to user opportunities, possible solutions, and assumption tests.', 'Do not jump from outcome straight to favorite solution without mapping alternatives.'],
    ['Leading question', 'A leading question nudges the user toward the answer the team wants to hear.', 'Do not ask "Would you love this?" when you need to learn what actually happens today.'],
  ]),
  conceptDeck('productManagement', 'Strategy, Positioning, and Product Bets', [
    ['Target segment', 'A target segment is the specific group whose problem and willingness to change make the bet worth focusing on.', 'Do not say the product is for everyone; that usually means the strategy has no edge.'],
    ['Positioning', 'Positioning explains where the product fits in the mind of the buyer relative to alternatives.', 'Do not list features when the real question is why this choice should win.'],
    ['Product bet', 'A product bet is a strategy-backed investment under uncertainty with a clear thesis and success signal.', 'Do not call every backlog item a strategic bet.'],
    ['Product-market fit signal', 'A PMF signal shows users would be meaningfully disappointed without the product, often backed by retention and the Sean Ellis test.', 'Do not declare fit from press, signups, or a loud pilot alone.'],
  ]),
  conceptDeck('productManagement', 'Prioritization and Roadmapping', [
    ['RICE', 'RICE scores reach, impact, confidence, and effort so a team can compare opportunities with visible assumptions.', 'Do not treat a RICE score as truth when confidence is weak or strategy says otherwise.'],
    ['Kano model', 'Kano separates must-be basics, performance features, and delighters so teams know what creates satisfaction versus prevents dissatisfaction.', 'Do not overinvest in delighters while the basics still fail.'],
    ['Opportunity cost', 'Opportunity cost is the value of what the team cannot build because it chose this work instead.', 'Do not prioritize without naming what gets delayed or dropped.'],
    ['Now-next-later roadmap', 'A now-next-later roadmap communicates intent and sequence without pretending every future date is locked.', 'Do not use a date-stuffed roadmap to hide uncertainty.'],
  ]),
  conceptDeck('productManagement', 'Metrics, Analytics, and Experimentation', [
    ['North-star metric', 'A north-star metric is the durable signal of delivered user value that the team wants to grow.', 'Do not pick a vanity metric that rises while users get less value.'],
    ['Guardrail metric', 'A guardrail metric protects against harmful side effects while optimizing the headline metric.', 'Do not celebrate conversion lift if refunds, complaints, or churn spike.'],
    ['Cohort retention', 'Cohort retention tracks how many users from an original group return over time.', 'Do not mix new and old users together and call the average retention healthy.'],
    ['Peeking problem', 'Peeking at experiments and stopping when p looks good inflates false positives.', 'Do not call the first lucky significant result a durable product win.'],
  ]),
  conceptDeck('productManagement', 'Requirements, Design, and Delivery Partnership', [
    ['PRD', 'A PRD should explain the problem, users, scope, non-goals, risks, analytics, and rollout plan clearly enough for partners to make decisions.', 'Do not write a PRD that is just a feature wish list.'],
    ['Acceptance criteria', 'Acceptance criteria define observable conditions that make a story done and testable.', 'Do not write acceptance criteria that rely on vague feelings like "easy" or "nice."'],
    ['Non-goals', 'Non-goals make scope boundaries explicit so reasonable-sounding extras do not quietly enter the build.', 'Do not leave out-of-scope decisions trapped in hallway memory.'],
    ['Wizard-of-Oz test', 'A Wizard-of-Oz test simulates automation manually to learn whether the experience is worth building.', 'Do not automate an expensive system before testing whether users value the outcome.'],
  ]),
  conceptDeck('productManagement', 'Launch, Adoption, and Learning Loops', [
    ['Staged rollout', 'A staged rollout releases gradually through dogfood, beta, canary, or feature flags so the team can learn and limit blast radius.', 'Do not big-bang a risky feature when a controlled ramp would reveal problems early.'],
    ['Enablement', 'Enablement gives sales, support, success, and internal teams the context to explain and support the launch.', 'Do not ship a feature that customer-facing teams discover from confused users.'],
    ['Time-to-value', 'Time-to-value is how quickly a user reaches the first meaningful benefit.', 'Do not optimize onboarding screens while the first real win remains buried.'],
    ['Post-launch review', 'A post-launch review compares expected behavior, actual metrics, incidents, and lessons for the roadmap.', 'Do not treat launch day as the finish line.'],
  ]),
  conceptDeck('productManagement', 'Stakeholder Influence and Product Judgment', [
    ['Decision memo', 'A decision memo states the recommendation, evidence, alternatives rejected, risks, and revisit trigger.', 'Do not say no with no reasoning or yes with no tradeoff.'],
    ['HiPPO', 'HiPPO means the highest-paid person opinion can dominate despite weaker evidence.', 'Do not replace product judgment with seniority.'],
    ['Renewal-threat trap', 'The renewal-threat trap is overbuilding for one customer because revenue pressure feels urgent.', 'Do not let one account silently become the whole strategy without sizing the opportunity.'],
    ['Dark pattern', 'A dark pattern manipulates users into actions they did not intend.', 'Do not defend harmful friction or confusion just because a metric moved.'],
  ]),
]

const projectManagementDecks = [
  conceptDeck('projectManagement', 'Project Thinking and Initiation', [
    ['Project charter', 'A project charter names purpose, scope, sponsor, success criteria, risks, assumptions, milestones, and decision rights.', 'Do not start scheduling before the work has an owner and definition of done.'],
    ['Success criteria', 'Success criteria turn "do a good job" into measurable acceptance of the outcome.', 'Do not let adjectives like amazing or strategic pose as criteria.'],
    ['Sponsor', 'The sponsor owns the business outcome and has authority to unblock decisions.', 'Do not run a project whose sponsor cannot actually decide.'],
    ['Assumption log', 'An assumption log records facts the plan depends on but has not proven yet.', 'Do not let hidden assumptions become surprise issues later.'],
  ]),
  conceptDeck('projectManagement', 'Scope, Requirements, and Work Breakdown', [
    ['Scope boundary', 'A scope boundary says what is included, excluded, uncertain, and negotiable.', 'Do not rely on memory for what is out of scope.'],
    ['Requirement', 'A requirement describes the need the deliverable must satisfy, not necessarily the exact solution.', 'Do not confuse "we need a dashboard" with the underlying reporting need.'],
    ['WBS', 'A work breakdown structure decomposes deliverables into work packages with visible ownership.', 'Do not build a WBS that is only a loose activity list.'],
    ['Change request', 'A change request prices a proposed scope change in schedule, cost, quality, and risk.', 'Do not accept casual scope expansion because the wording sounded small.'],
  ]),
  conceptDeck('projectManagement', 'Stakeholders, Communication, and Operating Rhythm', [
    ['Stakeholder map', 'A stakeholder map shows who decides, approves, does, reviews, blocks, or needs reassurance.', 'Do not communicate the same way to everyone regardless of influence and concern.'],
    ['RACI', 'RACI clarifies Responsible, Accountable, Consulted, and Informed roles, with exactly one Accountable per deliverable.', 'Do not assign two Accountable owners and then wonder why nobody owns the outcome.'],
    ['Decision log', 'A decision log records the decision, owner, date, rationale, and consequences.', 'Do not relitigate settled decisions because no one captured them.'],
    ['Operating rhythm', 'Operating rhythm is the cadence of meetings, updates, artifacts, and escalations that keeps work moving.', 'Do not use meetings to read status that the tracker already shows.'],
  ]),
  conceptDeck('projectManagement', 'Schedule, Resources, and Critical Path', [
    ['Critical path', 'The critical path is the longest dependency chain that determines the finish date.', 'Do not assume the longest single task is automatically the critical path.'],
    ['Float', 'Float is how long a task can slip before it delays the project; critical-path tasks have zero float.', 'Do not spend slack accidentally without telling the plan.'],
    ['Fast-tracking', 'Fast-tracking overlaps tasks that were planned in sequence, trading schedule compression for risk.', 'Do not confuse it with adding resources.'],
    ['Crashing', 'Crashing adds resources to shorten duration, trading schedule compression for cost.', 'Do not crash work that cannot be shortened by adding people.'],
  ]),
  conceptDeck('projectManagement', 'Risk, Issues, and Change Control', [
    ['Risk vs issue', 'A risk might happen; an issue has happened and needs action.', 'Do not leave an active issue sitting in the risk register as if it were hypothetical.'],
    ['Risk response', 'Risk responses are avoid, transfer, mitigate, or accept.', 'Do not record a risk with no owner, trigger, or response.'],
    ['Contingency', 'A contingency is the planned action or reserve used if a named trigger occurs.', 'Do not say "we will handle it" without the trigger that starts the plan.'],
    ['Integrated change control', 'Integrated change control evaluates changes across scope, schedule, cost, quality, and risk before approval.', 'Do not make local changes that break the project globally.'],
  ]),
  conceptDeck('projectManagement', 'Delivery Methods: Predictive, Agile, and Hybrid', [
    ['Predictive delivery', 'Predictive delivery fits work where requirements and sequence are stable enough to plan deeply up front.', 'Do not choose waterfall for work that needs rapid user learning.'],
    ['Scrum', 'Scrum runs work in short sprints with a product backlog, sprint backlog, increment, and defined events.', 'Do not turn Daily Scrum into a manager status interrogation.'],
    ['Kanban', 'Kanban visualizes flow and limits work in progress to expose bottlenecks.', 'Do not use a board with no WIP limits and call it flow management.'],
    ['Hybrid governance', 'Hybrid governance combines iterative learning with reporting and controls needed by the organization.', 'Do not freeze learning just to make governance feel tidy.'],
  ]),
  conceptDeck('projectManagement', 'Quality, Vendors, and Implementation', [
    ['Acceptance', 'Acceptance confirms the deliverable meets agreed criteria and can be handed over.', 'Do not declare success before the receiving team can actually use the output.'],
    ['SLA', 'An SLA defines service expectations such as uptime, response time, escalation, and remedies.', 'Do not accept "timely support" without measurable terms.'],
    ['Contract type', 'Contract type determines where cost and scope risk sit between buyer and seller.', 'Do not choose cost-plus for well-defined work without understanding the risk transfer.'],
    ['Implementation checklist', 'An implementation checklist covers testing, training, support, communication, handover, and rollback.', 'Do not treat go-live as a single button press.'],
  ]),
  conceptDeck('projectManagement', 'Status, Recovery, and Retrospectives', [
    ['Watermelon status', 'Watermelon status is green outside and red inside: a healthy-looking report hides serious delivery risk.', 'Do not report green while a critical-path dependency is blocked.'],
    ['CPI', 'Cost Performance Index is EV divided by AC; below 1 means cost performance is unfavorable.', 'Do not wave away CPI below 1 as a rounding issue without checking burn.'],
    ['SPI', 'Schedule Performance Index is EV divided by PV; below 1 means schedule performance is unfavorable.', 'Do not read SPI without checking whether completed work is on the critical path.'],
    ['Retrospective', 'A retrospective turns project experience into concrete process improvement.', 'Do not finish with "communicate better" when the fix needs an owner and new behavior.'],
  ]),
]

const cybersecurityDecks = [
  conceptDeck('cybersecurity', 'Security Thinking and Risk', [
    ['CIA triad', 'The CIA triad means confidentiality, integrity, and availability: keep data private, correct, and usable.', 'Do not treat security as only secrecy while ignoring tampering and downtime.'],
    ['Threat', 'A threat is something that could exploit a weakness, such as a phisher, ransomware crew, or insider.', 'Do not call every weakness a threat; the weakness is the vulnerability.'],
    ['Vulnerability', 'A vulnerability is a weakness that could be exploited, such as missing MFA or an unpatched device.', 'Do not list a scary actor as the vulnerability.'],
    ['Risk', 'Risk combines likelihood and impact for a threat exploiting a vulnerability against an asset.', 'Do not rank risks by fear alone without likelihood and impact.'],
  ]),
  conceptDeck('cybersecurity', 'Phishing, Social Engineering, and Credential Theft', [
    ['Pretexting', 'Pretexting is a fabricated story used to make a request feel legitimate.', 'Do not trust a believable story without verifying the channel.'],
    ['Business email compromise', 'BEC tricks people into sending money, data, or approvals by impersonating trusted business relationships.', 'Do not verify payment changes using contact details inside the suspicious email.'],
    ['Credential stuffing', 'Credential stuffing tries reused passwords from one breach on other sites.', 'Do not reuse passwords and then rely on luck.'],
    ['Quishing', 'Quishing uses QR codes to send people to phishing pages or malicious destinations.', 'Do not treat a QR code as safer than a visible link.'],
  ]),
  conceptDeck('cybersecurity', 'Identity and Access', [
    ['Password manager', 'A password manager lets each account have a long, unique password without memorizing all of them.', 'Do not create memorable reused passwords just because they are convenient.'],
    ['Phishing-resistant MFA', 'Phishing-resistant MFA, such as passkeys or hardware keys, resists fake login pages better than SMS or push.', 'Do not assume every MFA method gives the same protection.'],
    ['Least privilege', 'Least privilege gives people only the access needed for their role and removes it when no longer needed.', 'Do not leave broad access in place because cleanup feels tedious.'],
    ['Joiner-mover-leaver', 'Joiner-mover-leaver is the access lifecycle for onboarding, role changes, and offboarding.', 'Do not protect new access while forgetting old access.'],
  ]),
  conceptDeck('cybersecurity', 'Devices, Networks, and Cloud Basics', [
    ['Patching', 'Patching applies security updates that close known weaknesses before attackers exploit them.', 'Do not postpone updates indefinitely because nothing bad has happened yet.'],
    ['Full-disk encryption', 'Full-disk encryption protects stored data if a device is lost or stolen.', 'Do not mistake a login password alone for data-at-rest protection.'],
    ['Shared responsibility', 'Shared responsibility means the cloud provider secures some layers while the customer still secures data, identity, and configuration.', 'Do not assume the cloud provider handles all security.'],
    ['HTTPS', 'HTTPS encrypts data in transit between browser and site.', 'Do not treat HTTPS as proof the site itself is trustworthy.'],
  ]),
  conceptDeck('cybersecurity', 'Malware, Ransomware, and Common Attacks', [
    ['Ransomware', 'Ransomware blocks access to systems or data and often threatens data exposure as well as encryption.', 'Do not assume paying guarantees recovery or silence.'],
    ['Blast radius', 'Blast radius is how far an incident can spread from the first compromised account or device.', 'Do not give one account access everywhere.'],
    ['Immutable backup', 'An immutable backup cannot be altered or deleted during its retention period.', 'Do not keep all backups writable from the same network attackers can reach.'],
    ['Lateral movement', 'Lateral movement is an attacker moving from the first foothold to other systems.', 'Do not focus only on initial infection and ignore internal spread.'],
  ]),
  conceptDeck('cybersecurity', 'Logging, Monitoring, and Detection Basics', [
    ['Audit trail', 'An audit trail records who did what, where, and when so suspicious activity can be investigated.', 'Do not log so little that no one can reconstruct the event.'],
    ['SIEM', 'A SIEM centralizes and correlates logs so patterns across systems can become alerts.', 'Do not expect a SIEM to help if logs are low quality or nobody triages them.'],
    ['False positive', 'A false positive is an alert that looks suspicious but is not actually a threat.', 'Do not close alerts blindly to make the queue look clean.'],
    ['IOC vs IOA', 'An IOC is evidence of known compromise; an IOA is behavior suggesting an attack in progress.', 'Do not rely only on old indicators when behavior is changing.'],
  ]),
  conceptDeck('cybersecurity', 'Incident Response', [
    ['Containment', 'Containment limits damage while preserving the ability to investigate.', 'Do not delete evidence in the name of cleanup.'],
    ['Eradication', 'Eradication removes the attacker, malware, or root cause after containment.', 'Do not restore systems before removing the cause of compromise.'],
    ['Chain of custody', 'Chain of custody tracks evidence handling so it remains trustworthy.', 'Do not pass evidence around casually without recording who touched it.'],
    ['Blameless review', 'A blameless review fixes systems and process rather than humiliating the reporter.', 'Do not punish people for reporting mistakes or the next mistake will stay hidden.'],
  ]),
  conceptDeck('cybersecurity', 'Security Culture and Career Paths', [
    ['Secure defaults', 'Secure defaults make the safe behavior automatic or easiest for normal users.', 'Do not rely on heroic memory when the system can choose safety by default.'],
    ['GRC', 'GRC covers governance, risk, and compliance: policies, controls, evidence, and accountability.', 'Do not treat security careers as only hacking or coding.'],
    ['SOC', 'A SOC monitors, triages, and responds to security events.', 'Do not measure a SOC only by alert volume; quality and response matter.'],
    ['Risk communication', 'Risk communication translates technical exposure into business impact and choices.', 'Do not bury decision-makers in jargon when they need action options.'],
  ]),
]

const uxDesignDecks = [
  conceptDeck('uxDesign', 'UX Mindset and Problem Framing', [
    ['Problem brief', 'A problem brief states user, context, pain, constraint, and measurable outcome before designing screens.', 'Do not start with a layout when the problem is still vague.'],
    ['Outcome metric', 'An outcome metric shows whether the design changed user behavior or business results.', 'Do not treat "we shipped screens" as proof the design worked.'],
    ['Symptom vs problem', 'A symptom is what appears broken; the problem is the underlying user task failure.', 'Do not redesign aesthetics when the workflow itself blocks completion.'],
    ['User goal', 'A user goal is the progress the person is trying to make, not the internal team goal.', 'Do not optimize only for the business while making the user path worse.'],
  ]),
  conceptDeck('uxDesign', 'Research That Changes the Design', [
    ['Generative research', 'Generative research explores needs and context before the team has a settled solution.', 'Do not use usability testing to answer a question about what problem to solve.'],
    ['Evaluative research', 'Evaluative research tests whether a proposed design works for real users.', 'Do not ask people whether they like a prototype when you need to watch whether they can use it.'],
    ['Affinity mapping', 'Affinity mapping clusters research notes into themes and opportunities.', 'Do not cherry-pick the quote that supports your favorite design.'],
    ['Observation', 'Observation reveals behavior users may not remember or articulate in interviews.', 'Do not trust self-reported preference over what people actually do.'],
  ]),
  conceptDeck('uxDesign', 'Information Architecture and User Flows', [
    ['Mental model', 'A mental model is how users expect information and actions to be organized based on prior experience.', 'Do not label navigation with internal team language users cannot guess.'],
    ['Card sorting', 'Card sorting helps discover how users group and label content.', 'Do not reorganize a complex IA only from team intuition.'],
    ['Tree testing', 'Tree testing checks whether users can find things in a proposed navigation structure.', 'Do not wait until high-fidelity design to discover labels fail.'],
    ['Edge path', 'An edge path covers errors, empty states, exceptions, and alternate branches beyond the happy path.', 'Do not diagram only the perfect user journey.'],
  ]),
  conceptDeck('uxDesign', 'Wireframes and Interaction Structure', [
    ['Primary action', 'The primary action is the main next step the screen should make easy and visually clear.', 'Do not give every button equal weight and make the user choose by guessing.'],
    ['System status', 'System status feedback tells users what is happening: loading, saved, failed, disabled, or complete.', 'Do not leave users wondering whether their action worked.'],
    ['Progressive disclosure', 'Progressive disclosure reveals complexity only when it becomes useful.', 'Do not overload a beginner screen with every advanced option.'],
    ['Fitts law', 'Fitts law says larger and closer targets are easier to hit.', 'Do not make frequent mobile actions tiny or far from the thumb path.'],
  ]),
  conceptDeck('uxDesign', 'Prototyping and Usability Testing', [
    ['Task scenario', 'A task scenario gives the participant a realistic goal without naming the exact UI action.', 'Do not lead the participant by saying which button to press.'],
    ['Think-aloud', 'Think-aloud asks users to narrate what they expect and notice while attempting a task.', 'Do not rescue every hesitation before learning what caused it.'],
    ['Task success rate', 'Task success rate measures how many participants completed the task under defined criteria.', 'Do not report "they liked it" when the task failed.'],
    ['Severity rating', 'Severity combines frequency, impact, and persistence to prioritize usability issues.', 'Do not fix the most interesting issue before the most damaging one.'],
  ]),
  conceptDeck('uxDesign', 'Accessibility and Inclusive Design', [
    ['POUR', 'POUR means perceivable, operable, understandable, and robust.', 'Do not reduce accessibility to color contrast alone.'],
    ['Keyboard operability', 'Keyboard operability means every essential action can be completed without a mouse.', 'Do not create modals or menus that trap keyboard users.'],
    ['Contrast ratio', 'Contrast ratio measures text and background contrast; normal text needs 4.5:1 at WCAG AA.', 'Do not eyeball contrast and assume it passes.'],
    ['Color-only signal', 'A color-only signal uses color as the only way to communicate status or error.', 'Do not make red the only clue that a field failed.'],
  ]),
  conceptDeck('uxDesign', 'Product Collaboration and Handoff', [
    ['Design system', 'A design system provides reusable components, tokens, patterns, and rules for consistent product work.', 'Do not invent a new component when the system already solves the need.'],
    ['State matrix', 'A state matrix specifies default, hover, focus, loading, empty, error, disabled, and success states.', 'Do not hand off only the desktop happy path.'],
    ['Design token', 'A design token is a named value for color, spacing, type, or motion used across platforms.', 'Do not hardcode one-off values that drift from the system.'],
    ['Actionable critique', 'Actionable critique names the principle, issue, impact, and possible fix.', 'Do not say "make it pop" and expect a useful revision.'],
  ]),
  conceptDeck('uxDesign', 'Portfolio Case Study', [
    ['Case study arc', 'A case study arc moves from problem to evidence, decisions, tradeoffs, outcome, and reflection.', 'Do not show final screens with no reasoning.'],
    ['Evidence over adjectives', 'Evidence shows what changed or what users did; adjectives only say how the designer feels.', 'Do not claim impact without a metric, comparison, or user signal.'],
    ['Messy middle', 'The messy middle is where constraints, failed ideas, and tradeoffs reveal judgment.', 'Do not hide every pivot and make the project look magically linear.'],
    ['Reviewer lens', 'A reviewer wants to know what you decided, why it mattered, and how you knew.', 'Do not list tools as if tools are the work.'],
  ]),
]

const salesFundamentalsDecks = [
  conceptDeck('salesFundamentals', 'What Selling Is For', [
    ['Buyer outcome', 'Selling is helping a buyer make a better decision about a problem that matters to them.', 'Do not treat selling as pushing a product regardless of fit.'],
    ['Trust', 'Trust is built when claims match evidence and the seller respects the buyer process.', 'Do not trade long-term credibility for a short-term close.'],
    ['Problem fit', 'Problem fit means the customer has a real pain the offer can credibly solve.', 'Do not mistake curiosity for a qualified opportunity.'],
    ['Mutual value', 'Mutual value means the deal works for both customer and seller.', 'Do not create a win that the customer later regrets.'],
  ]),
  conceptDeck('salesFundamentals', 'Prospecting and First Contact', [
    ['Ideal customer profile', 'An ICP describes the kind of customer most likely to have the pain, budget, urgency, and fit.', 'Do not prospect everyone and call volume a strategy.'],
    ['Trigger event', 'A trigger event is a change that makes outreach timely, such as hiring, funding, regulation, growth, or a new initiative.', 'Do not send generic outreach with no reason for now.'],
    ['Personalization', 'Personalization connects outreach to a buyer-specific context or likely pain.', 'Do not confuse mail-merge tokens with relevance.'],
    ['Call to action', 'A call to action should be specific, low-friction, and tied to the buyer problem.', 'Do not ask for a vague chat with no value premise.'],
  ]),
  conceptDeck('salesFundamentals', 'Discovery', [
    ['Discovery question', 'A discovery question uncovers pain, context, impact, decision process, and success criteria.', 'Do not pitch before learning why the buyer might change.'],
    ['Pain impact', 'Pain impact converts a complaint into cost, risk, delay, lost revenue, or strategic drag.', 'Do not accept "annoying" as enough reason to buy.'],
    ['Current state', 'Current state is how the buyer solves the problem today, including workarounds.', 'Do not compare your product against nothing; compare against the real current behavior.'],
    ['Decision criteria', 'Decision criteria are the standards the buyer will use to choose or reject a solution.', 'Do not discover needs while ignoring how the decision will be made.'],
  ]),
  conceptDeck('salesFundamentals', 'Qualification and Stakeholder Mapping', [
    ['Qualification', 'Qualification tests whether the opportunity has pain, fit, authority, budget, urgency, and a viable process.', 'Do not keep working a deal that cannot or should not close.'],
    ['Champion', 'A champion has influence, personal stake, and willingness to sell internally.', 'Do not call a friendly user a champion if they cannot move the deal.'],
    ['Economic buyer', 'The economic buyer controls or strongly influences budget approval.', 'Do not confuse the daily user with the person who can approve spend.'],
    ['Stakeholder map', 'A stakeholder map shows supporters, blockers, users, approvers, procurement, legal, and executives.', 'Do not discover one contact and assume the organization is aligned.'],
  ]),
  conceptDeck('salesFundamentals', 'Value, Proof, and ROI', [
    ['Value hypothesis', 'A value hypothesis states the measurable improvement the buyer can expect and why.', 'Do not claim value without connecting it to the buyer economics.'],
    ['Proof point', 'A proof point is evidence that the promised value has happened for a similar customer or use case.', 'Do not use a flashy logo when the case does not match the buyer situation.'],
    ['ROI', 'ROI compares benefit against cost and implementation effort.', 'Do not present ROI as magic math built from unsupported assumptions.'],
    ['Business case', 'A business case explains why change is worth funding now.', 'Do not rely on product enthusiasm when finance will ask for impact.'],
  ]),
  conceptDeck('salesFundamentals', 'Objections and Negotiation', [
    ['Objection', 'An objection is information about risk, fit, timing, authority, value, or trust.', 'Do not treat every objection as resistance to crush.'],
    ['Price objection', 'A price objection often means value, budget, or comparison is unclear.', 'Do not discount before diagnosing which one it is.'],
    ['Concession', 'A concession gives something up in exchange for something else.', 'Do not concede unilaterally or you teach the buyer that pressure works.'],
    ['BATNA', 'BATNA is the best alternative to a negotiated agreement.', 'Do not negotiate as if you have no alternative when you do.'],
  ]),
  conceptDeck('salesFundamentals', 'Pipeline and Forecast Hygiene', [
    ['Pipeline stage', 'A pipeline stage should represent buyer progress, not seller optimism.', 'Do not advance a deal because you had a nice meeting.'],
    ['Next step', 'A real next step has owner, date, purpose, and buyer commitment.', 'Do not forecast from vague promises to circle back.'],
    ['Forecast category', 'Forecast categories express confidence based on evidence and process, not hope.', 'Do not call a deal commit when procurement, legal, or budget is unresolved.'],
    ['CRM hygiene', 'CRM hygiene keeps deal facts current so coaching and forecasting are possible.', 'Do not let the CRM become fiction written after the quarter ends.'],
  ]),
  conceptDeck('salesFundamentals', 'Learning From Wins and Losses', [
    ['Win review', 'A win review asks why the buyer chose, what proof mattered, and what could repeat.', 'Do not assume every win proves the pitch was perfect.'],
    ['Loss review', 'A loss review separates no decision, competitor loss, bad fit, price, timing, and process failure.', 'Do not file every loss under price because it feels simple.'],
    ['No decision', 'No decision means the buyer chose the status quo over change.', 'Do not treat no decision as a mystery; the business case likely was not strong enough.'],
    ['Learning loop', 'A learning loop turns deal evidence into better ICP, messaging, product feedback, and process.', 'Do not let each sales cycle teach only the individual rep.'],
  ]),
]

const peopleManagementDecks = [
  conceptDeck('peopleManagement', 'The Manager Job', [
    ['Manager leverage', 'A manager creates results through focus, context, coaching, systems, and team health.', 'Do not measure management by how many tasks the manager personally does.'],
    ['Role clarity', 'Role clarity tells people what outcomes they own and how success is judged.', 'Do not leave people guessing and then call misses performance problems.'],
    ['Context sharing', 'Context sharing gives people the why behind priorities so they can make better local decisions.', 'Do not hoard context and create dependency on approvals.'],
    ['Trust', 'Trust grows when expectations, follow-through, and fairness are consistent.', 'Do not confuse friendliness with trustworthiness.'],
  ]),
  conceptDeck('peopleManagement', 'Goals, Priorities, and Operating Rhythm', [
    ['Goal', 'A goal names the outcome the team is trying to create.', 'Do not confuse a list of activities with a goal.'],
    ['Priority', 'A priority is a choice about what matters most when capacity is limited.', 'Do not call everything priority one.'],
    ['Operating rhythm', 'Operating rhythm is the cadence of planning, execution, review, and adjustment.', 'Do not let urgency create a new process every week.'],
    ['Focus', 'Focus protects the team from scattered effort and hidden overload.', 'Do not reward constant context switching and then blame slow delivery.'],
  ]),
  conceptDeck('peopleManagement', 'Delegation and Ownership', [
    ['Delegation level', 'Delegation level clarifies whether someone should research, recommend, decide, execute, or own end-to-end.', 'Do not delegate a task while secretly keeping all decision rights.'],
    ['Ownership', 'Ownership means responsibility for outcome, communication, and follow-through.', 'Do not assign ownership without authority or resources.'],
    ['Check-in', 'A check-in reviews progress, blockers, and decisions without taking the work back.', 'Do not turn every check-in into rescue mode.'],
    ['Development delegation', 'Development delegation gives stretch work with support so skill grows.', 'Do not delegate only leftover chores and call it growth.'],
  ]),
  conceptDeck('peopleManagement', 'Feedback, Coaching, and Performance Diagnosis', [
    ['Feedback', 'Feedback names observed behavior, impact, and expected change.', 'Do not give vague personality labels when behavior is what can change.'],
    ['Coaching', 'Coaching helps someone improve their thinking or skill through questions, practice, and reflection.', 'Do not solve every problem for the person and call it coaching.'],
    ['Performance diagnosis', 'Performance diagnosis separates skill, will, clarity, capacity, tools, and incentives.', 'Do not assume every miss is motivation.'],
    ['Specificity', 'Specificity makes feedback useful by anchoring it to examples and outcomes.', 'Do not say "be more strategic" with no evidence or model.'],
  ]),
  conceptDeck('peopleManagement', 'Difficult Conversations, Conflict, and Fair Process', [
    ['Fair process', 'Fair process gives people voice, clarity, consistency, and a reasoned decision.', 'Do not equate fairness with everyone getting the answer they wanted.'],
    ['Conflict source', 'Conflict may come from goals, roles, facts, values, process, or relationship damage.', 'Do not mediate symptoms without naming the conflict type.'],
    ['Directness with care', 'Directness with care means telling the truth clearly while preserving dignity.', 'Do not hide the message in softness until it disappears.'],
    ['Escalation', 'Escalation brings the right authority or decision path when peers cannot resolve the issue.', 'Do not escalate as a surprise attack.'],
  ]),
  conceptDeck('peopleManagement', 'Performance Management and Fairness', [
    ['Performance standard', 'A performance standard defines expected outcomes and behaviors for the role.', 'Do not judge people against standards never stated.'],
    ['Calibration', 'Calibration checks that ratings and expectations are applied consistently across people.', 'Do not let one manager grade harshly and another grade softly without review.'],
    ['Documentation', 'Documentation records expectations, feedback, support, and decisions.', 'Do not rely on memory for serious performance decisions.'],
    ['Improvement plan', 'An improvement plan names the gap, support, measurable expectations, and timeline.', 'Do not use a plan as theater when the outcome is already secretly decided.'],
  ]),
  conceptDeck('peopleManagement', 'Hiring, Onboarding, and Team Design', [
    ['Role scorecard', 'A role scorecard defines outcomes, competencies, and signals before interviewing.', 'Do not interview from vibes and then rationalize the favorite candidate.'],
    ['Structured interview', 'A structured interview uses consistent questions and rubrics to compare evidence.', 'Do not let charm replace job-relevant signal.'],
    ['Onboarding', 'Onboarding helps a new hire learn context, relationships, expectations, and early wins.', 'Do not confuse account setup with onboarding.'],
    ['Team design', 'Team design matches roles, interfaces, and capacity to the work system.', 'Do not hire one person to patch a process problem nobody has named.'],
  ]),
  conceptDeck('peopleManagement', 'Inclusion, Motivation, and Team Health', [
    ['Psychological safety', 'Psychological safety means people can raise risks, questions, and mistakes without humiliation.', 'Do not mistake silence for alignment.'],
    ['Motivation', 'Motivation is shaped by purpose, autonomy, mastery, fairness, recognition, and workload.', 'Do not assume money is the only lever or that praise fixes burnout.'],
    ['Inclusion', 'Inclusion means people can contribute and be heard without needing to fit one narrow mold.', 'Do not invite diversity and then reward only one communication style.'],
    ['Team health', 'Team health combines trust, clarity, sustainable pace, and ability to resolve conflict.', 'Do not celebrate output while the system burns people out.'],
  ]),
]

const negotiationDecks = [
  conceptDeck('negotiation', 'Negotiation Fundamentals', [
    ['Interest', 'An interest is the underlying need, concern, or goal behind a position.', 'Do not bargain only over positions and miss the reason each side cares.'],
    ['Position', 'A position is the specific demand someone says they want.', 'Do not assume the first demand is the only acceptable solution.'],
    ['BATNA', 'BATNA is your best alternative if no agreement is reached.', 'Do not negotiate without knowing what walking away really means.'],
    ['Reservation value', 'Reservation value is the worst deal you would still accept before choosing your BATNA.', 'Do not reveal or ignore your walk-away line casually.'],
  ]),
  conceptDeck('negotiation', 'Creating Value Before Claiming It', [
    ['Integrative negotiation', 'Integrative negotiation looks for trades that make both sides better off.', 'Do not assume every negotiation is fixed-pie from the start.'],
    ['Tradeoff', 'A tradeoff exchanges things that each side values differently.', 'Do not give away a low-cost item without getting something valuable back.'],
    ['Package offer', 'A package offer combines multiple terms so priorities can be traded intelligently.', 'Do not negotiate one issue at a time when the issues interact.'],
    ['Information sharing', 'Useful information sharing reveals priorities without exposing your walk-away point.', 'Do not either hide everything or disclose your full vulnerability.'],
  ]),
  conceptDeck('negotiation', 'Claiming Value and Bargaining Tactics', [
    ['Anchor', 'An anchor is the first serious number or frame that pulls discussion toward it.', 'Do not accept the other side anchor as neutral reality.'],
    ['Concession pattern', 'Concession pattern is the pace and size of movement during bargaining.', 'Do not make large fast concessions that signal your first number was fake.'],
    ['Objective standard', 'An objective standard uses market data, precedent, policy, or expert benchmarks.', 'Do not let the negotiation become only a contest of preferences.'],
    ['Walk-away', 'A walk-away is the point where no deal is better than the proposed deal.', 'Do not keep negotiating past your reservation value because momentum feels awkward.'],
  ]),
  conceptDeck('negotiation', 'Communication, Emotion, and Trust', [
    ['Active listening', 'Active listening reflects substance and emotion so the other side feels heard and corrects misunderstandings.', 'Do not prepare your rebuttal while missing the actual concern.'],
    ['Labeling', 'Labeling names the emotion or dynamic without accusing: "It sounds like timing is the worry."', 'Do not tell people how they feel as if you know better than they do.'],
    ['Trust repair', 'Trust repair requires acknowledging the break, explaining the fix, and showing reliable follow-through.', 'Do not ask for trust while changing none of the behavior that broke it.'],
    ['Face-saving', 'Face-saving lets someone change position without public humiliation.', 'Do not make being right so costly that the other side must resist.'],
  ]),
  conceptDeck('negotiation', 'Power, Ethics, and Difficult Tactics', [
    ['Power', 'Power comes from alternatives, information, legitimacy, relationships, timing, and ability to walk away.', 'Do not equate power only with title or volume.'],
    ['Bluff', 'A bluff is a claim about strength or intention that may not be true.', 'Do not bluff in ways that destroy credibility if tested.'],
    ['Threat', 'A threat promises harm for noncompliance.', 'Do not use threats when a legitimate standard or trade could solve the problem.'],
    ['Ethical line', 'An ethical line separates persuasion from deception, coercion, or hidden harm.', 'Do not call manipulation strategy just because it worked once.'],
  ]),
  conceptDeck('negotiation', 'Internal and Multi-Party Negotiation', [
    ['Coalition', 'A coalition is a group whose aligned interests can shape the outcome.', 'Do not assume the person across from you is the only stakeholder.'],
    ['Internal alignment', 'Internal alignment means your own side agrees on goals, authority, and tradeoffs before negotiating externally.', 'Do not discover internal disagreement in front of the other side.'],
    ['Process agreement', 'A process agreement defines agenda, sequence, decision rules, and information sharing.', 'Do not let a multi-party negotiation drift without rules.'],
    ['Stakeholder veto', 'A stakeholder veto is the ability of someone not at the table to block implementation.', 'Do not close with one person while ignoring the real blocker.'],
  ]),
  conceptDeck('negotiation', 'Closing, Documentation, and Implementation', [
    ['Term sheet', 'A term sheet captures key deal terms before final documentation.', 'Do not treat vague verbal alignment as a finished agreement.'],
    ['Implementation risk', 'Implementation risk is the chance the deal fails after agreement because execution was unclear.', 'Do not celebrate signature while responsibilities remain fuzzy.'],
    ['Contingency clause', 'A contingency clause says what happens if a future event or assumption changes.', 'Do not leave foreseeable uncertainty outside the agreement.'],
    ['Commitment', 'A commitment is a clear, owned promise with timing and consequences.', 'Do not close on enthusiasm without specific next actions.'],
  ]),
  conceptDeck('negotiation', 'Negotiation Labs', [
    ['Role play', 'A role play lets you practice moves, listening, and tradeoffs before stakes are real.', 'Do not only read negotiation advice and expect performance under pressure.'],
    ['Debrief', 'A debrief turns negotiation behavior into learning: what worked, what failed, what to try next.', 'Do not judge only by outcome; a lucky deal can hide poor process.'],
    ['Preparation sheet', 'A preparation sheet names interests, BATNA, reservation value, targets, options, and questions.', 'Do not enter a negotiation with only a desired price.'],
    ['Rehearsed opening', 'A rehearsed opening sets tone, agenda, and curiosity before bargaining begins.', 'Do not improvise the first minute if it frames the whole conversation.'],
  ]),
]

const publicSpeakingDecks = [
  conceptDeck('publicSpeaking', 'Speaker Mindset and Audience Analysis', [
    ['Audience outcome', 'Audience outcome is what listeners should understand, feel, or do after the talk.', 'Do not build slides before knowing what the audience needs.'],
    ['Speaker anxiety', 'Speaker anxiety is normal arousal that can be managed with preparation, breathing, and focus.', 'Do not interpret nerves as proof you should avoid speaking.'],
    ['Audience analysis', 'Audience analysis considers knowledge, stakes, objections, context, and desired action.', 'Do not give the same talk to executives, peers, and beginners.'],
    ['Credibility', 'Credibility comes from relevance, evidence, clarity, and honesty about limits.', 'Do not confuse sounding fancy with being trustworthy.'],
  ]),
  conceptDeck('publicSpeaking', 'Message Design and Structure', [
    ['Thesis', 'A thesis is the central point the audience should remember.', 'Do not bury the main point until the final minute.'],
    ['Signposting', 'Signposting tells listeners where the talk is going and why each part matters.', 'Do not make the audience infer the structure while listening live.'],
    ['Three-part structure', 'A three-part structure gives people a simple map for memory and pacing.', 'Do not overload the talk with ten equal ideas.'],
    ['So what', 'The "so what" explains why a fact matters for the audience decision or action.', 'Do not stack facts without consequence.'],
  ]),
  conceptDeck('publicSpeaking', 'Evidence, Story, and Clarity', [
    ['Story', 'A story gives evidence a human sequence: situation, tension, choice, result.', 'Do not tell a cute anecdote that does not support the message.'],
    ['Concrete detail', 'Concrete detail makes abstract claims easier to picture and remember.', 'Do not rely only on broad adjectives like innovative or impactful.'],
    ['Evidence hierarchy', 'Evidence hierarchy ranks proof by relevance and strength, from direct data to examples to expert support.', 'Do not use weak evidence for a high-stakes claim.'],
    ['Plain language', 'Plain language helps listeners spend attention on the idea, not decoding the sentence.', 'Do not use jargon to signal expertise when clarity would serve better.'],
  ]),
  conceptDeck('publicSpeaking', 'Delivery Mechanics', [
    ['Pacing', 'Pacing is controlled speed, pauses, and emphasis that help listeners process ideas.', 'Do not rush because you are nervous and then blame the audience for missing it.'],
    ['Pause', 'A pause gives weight to a point and lets the audience catch up.', 'Do not fill every silence with verbal clutter.'],
    ['Vocal variety', 'Vocal variety changes pitch, pace, volume, and emphasis to show structure and energy.', 'Do not deliver every sentence with the same weight.'],
    ['Gesture', 'Gesture should support meaning, point to structure, or release energy naturally.', 'Do not choreograph every movement until it looks artificial.'],
  ]),
  conceptDeck('publicSpeaking', 'Visuals and Presentation Aids', [
    ['Slide headline', 'A slide headline should state the takeaway, not just name the topic.', 'Do not title a slide "Results" when the point is "Retention improved in week two."'],
    ['Data-ink', 'Data-ink is visual detail that communicates data rather than decoration.', 'Do not add chart clutter that makes the signal harder to see.'],
    ['One idea per slide', 'One idea per slide keeps visual attention aligned with the spoken point.', 'Do not make the audience read a document while you talk over it.'],
    ['Accessibility', 'Accessible visuals use readable type, contrast, labels, and alternatives for key information.', 'Do not rely on tiny text or color-only distinctions.'],
  ]),
  conceptDeck('publicSpeaking', 'Informative, Persuasive, and Executive Speaking', [
    ['Informative talk', 'An informative talk helps the audience understand something accurately.', 'Do not smuggle in a recommendation while pretending only to explain.'],
    ['Persuasive talk', 'A persuasive talk asks the audience to believe, choose, or act.', 'Do not persuade with emotion alone when the audience needs evidence.'],
    ['Executive summary', 'An executive summary leads with answer, reason, risk, and ask.', 'Do not make senior listeners wait through the whole analysis for the decision.'],
    ['Recommendation', 'A recommendation states what should happen and why.', 'Do not hedge so much that no one knows what you want done.'],
  ]),
  conceptDeck('publicSpeaking', 'Q&A, Panels, and Impromptu Speaking', [
    ['Bridge', 'A bridge answers the question and connects back to the core message.', 'Do not dodge the question and call it bridging.'],
    ['Hostile question', 'A hostile question needs calm acknowledgment, a short answer, and a return to facts.', 'Do not match the heat of the question.'],
    ['Panel contribution', 'A good panel contribution is brief, additive, and responsive to what came before.', 'Do not repeat your prepared point regardless of the conversation.'],
    ['Impromptu frame', 'An impromptu frame gives quick structure, such as point, reason, example, point.', 'Do not ramble while searching for the structure aloud.'],
  ]),
  conceptDeck('publicSpeaking', 'Virtual and Hybrid Presentation Skills', [
    ['Camera presence', 'Camera presence means eye line, framing, lighting, and energy adapted for a screen.', 'Do not speak to a tiny self-view instead of the audience.'],
    ['Hybrid equity', 'Hybrid equity means remote and in-room participants can hear, contribute, and be noticed.', 'Do not design the meeting only for the room.'],
    ['Chat management', 'Chat management uses a plan for questions, links, and side comments without derailing the talk.', 'Do not ignore the chat until it becomes a second meeting.'],
    ['Tech rehearsal', 'A tech rehearsal checks audio, screen share, permissions, backup files, and timing.', 'Do not discover access or microphone problems live.'],
  ]),
]

export const CURATED_FLASHCARD_DECKS: Record<CuratedDeckKey, Flashcard[]> = Object.fromEntries([
  ...quantDecks,
  ...financialModelingDecks,
  ...investmentBankingDecks,
  ...productManagementDecks,
  ...projectManagementDecks,
  ...cybersecurityDecks,
  ...uxDesignDecks,
  ...salesFundamentalsDecks,
  ...peopleManagementDecks,
  ...negotiationDecks,
  ...publicSpeakingDecks,
]) as Record<CuratedDeckKey, Flashcard[]>
