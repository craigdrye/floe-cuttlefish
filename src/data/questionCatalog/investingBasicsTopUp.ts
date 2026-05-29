import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe investingBasics top-up'

export const investingBasicsTopUpQuestions: Question[] = makeQuestionBank('Career Skills', [
  {
    id: 7222049,
    chapter: 'Accounts and Where to Hold Investments',
    title: 'Roth vs traditional, in one line',
    prompt: 'You expect to be in a HIGHER tax bracket in retirement than you are today. All else equal, which account is usually more advantageous for new contributions?',
    correct: 'A Roth account — you pay tax now at the lower rate, and qualified withdrawals are tax-free',
    wrong: [
      miss('A traditional account — the upfront deduction always wins', 'The deduction helps most when your CURRENT rate is high; if your future rate is higher, paying tax now (Roth) is usually better.', 'Compare today\'s rate to your expected retirement rate.'),
      miss('It never matters — the ending balance is identical either way', 'They are only equivalent if your tax rate is the SAME now and later. Different rates break the tie.', 'The tie only holds at equal tax rates.'),
      miss('A regular taxable brokerage account', 'A taxable account gives up the tax shelter entirely; it is generally the last place to put retirement money.', 'Use tax-advantaged space first.'),
    ],
    lesson: 'Roth = pay tax now, grow and withdraw tax-free. Traditional = deduct now, pay tax on withdrawals. Rule of thumb: Roth wins if your tax rate will be higher later (or you value tax-free flexibility); traditional wins if your rate is higher now. When unsure, splitting between both hedges the bet.',
    source,
    generated: true,
  },
  {
    id: 7222050,
    chapter: 'Fees, Costs, and What They Steal',
    title: 'What a 1% fee really costs',
    prompt: 'Two funds earn the same 7% gross return, but Fund A charges a 1.0% expense ratio and Fund B charges 0.05%. Over 30 years on a $100,000 investment, the fee gap costs roughly:',
    correct: 'Tens of thousands of dollars — fees compound against you just like returns compound for you',
    wrong: [
      miss('About $285 — just 0.95% of the balance once', 'Fees are charged every year on the whole balance, so the drag compounds over decades — far more than a one-time slice.', 'A fee recurs annually and compounds.'),
      miss('Nothing meaningful — 0.95% is a rounding error', 'Small annual percentages become huge sums over long horizons because of compounding.', 'Project it across 30 years, not one.'),
      miss('Exactly $28,500 — 0.95% × 30 years, added up', 'Simple multiplication understates it; the lost money would itself have compounded, making the true gap larger.', 'Compounding makes the gap bigger than linear.'),
    ],
    lesson: 'A ~1% annual fee gap quietly compounds into tens of thousands lost over a few decades because every dollar paid in fees is also a dollar that never compounds. This is why low-cost index funds (often <0.10%) dominate the long-run math. Always check the expense ratio before buying.',
    source,
    generated: true,
  },
])
