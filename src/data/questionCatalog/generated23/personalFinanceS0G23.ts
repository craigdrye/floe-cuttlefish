import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const personalFinanceS0G23: Question[] = [
  makeSimpleQuestion(
    9320000,
    'Career Skills',
    'Putting It All Together',
    "Net worth as the master metric",
    'Two coworkers earn the same $70,000 salary. Jordan has $40,000 in savings and investments and $15,000 of debt; Riley has $8,000 in savings and $25,000 of debt. If you want one number that best shows who is actually further ahead financially, you should compare their:',
    "Net worth: total assets minus total liabilities (Jordan +$25,000 vs Riley -$17,000)",
    [
      ["Annual salary, since they earn the same it is a tie", "Income is what comes in, not what you keep; equal salaries can hide very different financial positions once savings and debt are counted.", "Income measures earning, net worth measures keeping. Subtract each person's debts from their assets to see who is truly ahead."],
      ["Cash in the checking account alone", "A single account balance ignores investments, other assets, and all debts, so it can flatter someone who is actually deep in the red.", "Add up everything owned and subtract everything owed; one account tells you almost nothing about the whole picture."],
      ["Total debt, where the one who owes less is automatically ahead", "Debt is only half the equation; someone with more debt but far more assets can still have a higher net worth.", "Pair liabilities with assets. Net worth nets the two together rather than ranking people by debt alone."],
    ],
    "Net worth equals everything you own (cash, investments, home equity, vehicles) minus everything you owe (credit cards, loans, mortgage). It is the single best gauge of financial progress because it captures both saving and debt payoff in one number, and it is largely independent of income: a modest earner who saves and avoids debt can outrank a high earner who spends and borrows. Tracking net worth over time, rather than salary or one account balance, shows whether you are building wealth or treading water.",
    "Floe generated",
    true,
    "Ask which single figure folds together both what each person owns and what each person owes, not just one side of the ledger.",
    { challengeRating: 6 },
  ),
]
