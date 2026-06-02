import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const series79S0G23: Question[] = [
  makeSimpleQuestion(
    9080001,
    'Career Skills',
    'Financial Statement Analysis',
    "Three-statement linkage",
    'You are walking a board through a target model. Holding everything else constant, depreciation expense rises by $10 in a year where the marginal tax rate is 40%. Assuming the target is a full taxpayer, by how much does the cash balance on the balance sheet change, and does the balance sheet still balance?',
    'Cash rises by $4; the balance sheet balances because PP&E falls $10 while cash rises $4 (net assets down $6) and retained earnings fall $6.',
    [
      ["Cash falls by $10 because depreciation is a cash outflow", "Depreciation is a non-cash expense; it never moves cash directly. The only cash effect is the tax shield it creates.", "Trace the item to cash from operations: add depreciation back, and the only real cash change is lower taxes."],
      ["Cash is unchanged because depreciation is non-cash, and the balance sheet still balances", "True that depreciation is non-cash, but it lowers taxable income, so taxes paid fall and cash actually rises by the tax shield.", "Remember the tax shield: $10 of depreciation at 40% saves $4 of cash taxes."],
      ["Cash rises by $6, matching the after-tax hit to net income", "$6 is the drop in net income, not the change in cash. On the cash flow statement you start from net income (down $6) and add back the full $10 of non-cash depreciation.", "Net income down $6 plus $10 added back equals $4 of incremental operating cash."],
    ],
    'Lesson: A non-cash expense like depreciation reduces cash only through its tax shield. With a 40% rate, $10 of depreciation cuts net income by $6 but adds the full $10 back in cash from operations, so cash rises $4. The balance sheet stays balanced: PP&E falls $10 and cash rises $4 (assets net down $6) against retained earnings down $6. Memorizing this walk-through is the fastest way to catch broken three-statement links.',
    'Floe generated',
    true,
    'Separate the income-statement hit from the cash effect: only the tax change touches cash. Then check that the asset side and equity side move by the same net amount.',
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9080002,
    'Career Skills',
    'Financial Statement Analysis',
    "ASC 606 transaction price allocation",
    'A SaaS target sells a single contract bundling a software license, a one-time implementation service, and 12 months of support for a combined $1.2M. The three deliverables are distinct performance obligations with observable standalone selling prices of $900K, $300K, and $300K respectively. Under ASC 606, how should the $1.2M transaction price be recognized?',
    'Allocate the $1.2M to the three obligations in proportion to their standalone selling prices ($1.5M total), then recognize each piece as that obligation is satisfied.',
    [
      ["Recognize the full $1.2M upfront when the contract is signed", "Signing a contract is Step 1, not revenue recognition. Revenue is recognized only as each performance obligation is satisfied (Step 5), and several here are delivered over time.", "Allocate first, then recognize each obligation when control transfers, which for support is over the 12 months."],
      ["Recognize each deliverable at its full standalone price ($900K + $300K + $300K = $1.5M)", "Standalone prices are used only to set the allocation ratio, not the recognized amount. The customer agreed to pay $1.2M, so recognized revenue cannot exceed the actual transaction price.", "Scale the $1.5M of standalone prices down to the $1.2M actually charged, splitting the $300K discount across all three obligations."],
      ["Recognize revenue only when the customer pays cash", "ASC 606 is an accrual standard tied to transfer of control, not cash receipt. Cash timing affects the contract asset or deferred revenue, not when revenue is earned.", "Recognize as control transfers; cash received ahead of delivery sits in deferred (contract) liability."],
    ],
    'Lesson: ASC 606 runs a five-step model: identify the contract, identify the performance obligations, determine the transaction price, allocate it to the obligations by relative standalone selling price, then recognize as each obligation is satisfied. Here the $1.2M is allocated across $1.5M of standalone values (an 80% factor), so the license takes $720K, implementation $240K, and support $240K spread over 12 months. The discount is shared, not dumped on one line.',
    'Floe generated',
    true,
    'Standalone selling prices set the split, not the dollars recognized. The total recognized must reconcile to the contract price actually charged.',
    { challengeRating: 5 },
  ),
]
