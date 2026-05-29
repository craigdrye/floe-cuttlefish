import { makeQuestionBank } from './base'
import { MISC_BANKS_SUB_TOPICS, MISC_BANKS_MENTOR_HINTS, MISC_BANKS_CORRECT_SHORTENED } from './miscBanksPolish'
import { polish as runPolish } from './polishPipeline'


const _series86ImportedBase = makeQuestionBank('Series 86', [
  {
    id: 6801,
    chapter: 'Valuation Reef',
    title: 'REIT valuation',
    prompt: 'When valuing a real estate investment trust (REIT), which of the following measures is applicable?',
    correct: 'Price/Funds from Operations',
    wrong: [
      ['EV/EBITDA', 'That metric is more common for many operating companies, but REITs are usually framed around funds from operations.', 'Start by asking which metric matches the cash economics of a REIT.'],
      ['PEG', 'PEG is not the standard first-pass lens for REIT valuation.', 'Think sector-specific valuation practice before generic growth ratios.'],
      ['Price/Sales', 'Sales alone does not capture the REIT structure well.', 'For REITs, funds from operations is the more relevant lens.'],
    ],
    lesson:
      'REITs are often valued using price-to-funds-from-operations. EV/EBITDA is more common in other depreciation-heavy operating sectors, PEG is a growth framing tool, and price-to-sales is more common when earnings quality is weaker or negative.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6802,
    chapter: 'Valuation Reef',
    title: 'Implied equity value range',
    prompt: 'Use the following information to answer the question. Sales: $280 MM. Net income: $30 MM. Forward P/E multiple range: 18.00 to 24.00. Expected growth rate: 9%. What is the implied equity value range for this company?',
    correct: '$588,600,000 to $784,800,000',
    wrong: [
      ['$540,000,000 to $720,000,000', 'That skips the growth step before applying the forward multiple.', 'Forward P/E should be applied to forward net income, not the stale base number.'],
      ['$308,600,000 to $504,800,000', 'That range understates the valuation materially.', 'Project next-period net income first, then apply the multiple band.'],
      ['$1,350,000,000 to $6,000,000,000', 'That range is far too large for the given earnings and multiple inputs.', 'Sanity-check the output against the size of earnings and the stated P/E range.'],
    ],
    lesson:
      'First grow net income by 9% to get expected net income of $32.7 MM. Then apply the forward P/E range: $32.7 MM x 18 = $588.6 MM, and $32.7 MM x 24 = $784.8 MM.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6803,
    chapter: 'Cash Flow Dock',
    title: 'Free cash flow proxy',
    prompt: 'Which one of the following calculations provides a measure of free cash flow?',
    correct: 'EBITDA minus capital expenditures',
    wrong: [
      ['Net income plus working capital', 'That does not isolate cash generation cleanly.', 'Free cash flow proxies usually start from operating cash generation, then subtract investment needs.'],
      ['Net income plus capital expenditures', 'Capital expenditures are generally a use of cash, not an add-back here.', 'Watch the sign on capex when thinking about free cash flow.'],
      ['Net income plus interest plus the effect of taxation', 'That is not the usual free-cash-flow shortcut.', 'A practical shortcut often starts with EBITDA and subtracts capex.'],
    ],
    lesson:
      'Free cash flow is the cash left after operating needs and required investment spending. A common quick proxy is EBITDA minus capital expenditures.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6804,
    chapter: 'Valuation Reef',
    title: 'Sum-of-the-parts',
    prompt: "The Fremont Corporation operates five diverse business units. Three of the business units are profitable, but the company has no net income. The company is considering a restructuring of its outstanding debt and the possible sale of one or more business units. What's the most appropriate valuation method in this situation?",
    correct: 'The sum-of-the-parts method',
    wrong: [
      ['The dividend discount model', 'That is too narrow for a mixed, restructuring story.', 'Separate the business units and value them on their own logic.'],
      ['The P/E ratio', 'A no-net-income situation makes a simple P/E framing weak.', 'If segments differ materially, a segment-by-segment approach is stronger.'],
      ['ROA', 'ROA is a performance metric, not a full valuation method.', 'Use an actual valuation framework rather than an operating ratio.'],
    ],
    lesson:
      'When a business has distinct units that may deserve different methods or multiples, a sum-of-the-parts valuation is often the cleanest way to think about value.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6806,
    chapter: 'Industry Analysis',
    title: 'Cyclical healthcare trend',
    prompt: 'Which of the following is a cyclical trend that could impact the healthcare industry?',
    correct: 'Decrease in the number of insureds as a result of higher unemployment',
    wrong: [
      ['Increased medical costs as a result of an aging population', 'That is more secular than cyclical.', 'Ask whether the force is tied to the business cycle or a longer structural trend.'],
      ['Increased research costs as a result of changing government regulations', 'That is a policy or structural issue, not the clean cyclical signal here.', 'Cyclical trends usually rise and fall with the economic cycle.'],
      ['Reduced insurance premiums as a result of the expansion of government insurance', 'That is not the best cyclical framing.', 'Look for the answer directly linked to unemployment and the economy.'],
    ],
    lesson:
      'A drop in insured lives caused by higher unemployment is cyclical because it should improve as the economy recovers. The other choices are better understood as longer-term structural or policy effects.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6807,
    chapter: 'Research Swamp',
    title: 'Executive option disclosure',
    prompt: 'Which of the following documents contain information on executive stock options?',
    correct: 'The shareholder proxy and Form 10-K footnotes',
    wrong: [
      ['Schedule 13D', 'That filing is about beneficial ownership and activist-style stakes, not standard executive option disclosure.', 'Match the filing to the type of corporate disclosure being asked about.'],
      ['Form S-1 and Form 144', 'Those filings serve different purposes.', 'Think annual-report footnotes and proxy disclosures for executive compensation detail.'],
      ['Only the Form 10-K footnotes', 'That misses the proxy, which is a key executive-compensation source.', 'Use both the proxy and the annual-report footnotes.'],
    ],
    lesson:
      'Executive stock-option detail is commonly found in the shareholder proxy and the annual-report footnotes, including the Form 10-K.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6808,
    chapter: 'Forecast Lagoon',
    title: 'Equipment-growth driver',
    prompt: 'In order to forecast financial growth for an equipment manufacturing company for the coal industry, an analyst should look at:',
    correct: 'Projected utility operational rates',
    wrong: [
      ['Historic profit margins of utility companies', 'Margins are less direct than the actual demand driver.', 'Focus on the operating variable that drives equipment demand.'],
      ['Trailing operational production levels of coal companies', 'Trailing data helps context, but the forecast needs a forward driver.', 'Project the operating demand, not just the rear-view mirror.'],
      ['Utility rate increases', 'Rate changes are not as direct as operating demand for the equipment in question.', 'Choose the variable most tied to future equipment needs.'],
    ],
    lesson:
      'Projected utility operating rates are the cleaner demand signal because they influence industry capital spending and therefore demand for coal-related equipment.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6809,
    chapter: 'Accounting Dock',
    title: 'Tangible book value',
    prompt: 'Action Traction Corporation has goodwill, patents, and copyrights on its balance sheet. In a conservative tangible book value calculation, which treatment is most appropriate?',
    correct: 'Deduct goodwill and other intangible assets from common equity, unless a specific exam instruction says otherwise',
    wrong: [
      ['Deduct only inventory because it is held for sale', 'Inventory is a tangible operating asset, not the usual intangible deduction.', 'Tangible book value removes intangible assets, not ordinary tangible working capital.'],
      ['Keep goodwill because it was paid for in an acquisition', 'Goodwill is the classic deduction in tangible book value.', 'Acquisition accounting does not make goodwill tangible.'],
      ['Keep patents and copyrights automatically in every tangible book value calculation', 'Patents and copyrights are identifiable intangibles and may be deducted in conservative tangible common equity work.', 'Read the exact exam wording.'],
    ],
    lesson:
      'Tangible book value generally subtracts intangible assets from equity. Goodwill is the classic example, but patents and copyrights are also intangible, so exam wording matters.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6811,
    chapter: 'Forecast Lagoon',
    title: 'WACC exception',
    prompt: 'When calculating the weighted average cost of capital, all of the following statements are TRUE, EXCEPT:',
    correct: 'The cost of capital on new issues is the average of the cost of capital on existing issues',
    wrong: [
      ['All elements are assigned their individual required rate of return', 'That is part of the WACC logic.', 'WACC weights each capital source by its own required return.'],
      ['Common and preferred stock usually have different required rates of return', 'That is normally true.', 'Different capital sources often carry different required returns.'],
      ['Debt instruments usually have a lower cost of capital than equity', 'That is generally true in standard capital-structure logic.', 'The false statement is the one that oversimplifies new-issue cost of capital.'],
    ],
    lesson:
      'WACC is built from the weighted required returns on the actual capital components. New-issue cost of capital is not simply the average cost of existing issues.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6813,
    chapter: 'Valuation Reef',
    title: 'EVA identity',
    prompt: 'A company earns a return on invested capital above its weighted average cost of capital. What is the most precise interpretation?',
    correct: 'The company has a positive ROIC-WACC spread, which contributes to positive EVA when multiplied by invested capital',
    wrong: [
      ['The company automatically has higher EPS than every peer', 'EPS depends on share count and accounting earnings, not just the ROIC-WACC spread.', 'Keep value spread separate from per-share earnings.'],
      ['The spread itself is exactly the dollar amount of EVA', 'EVA is a dollar measure; the spread must be applied to invested capital.', 'A percentage spread is not a dollar value.'],
      ['The company has no cost of capital', 'WACC still exists; the company is earning above it.', 'Positive spread does not mean zero cost.'],
    ],
    lesson:
      'EVA is commonly framed as NOPAT minus a capital charge, or as (ROIC - WACC) times invested capital. The ROIC-WACC difference is the spread, not the whole dollar measure by itself.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6814,
    chapter: 'Valuation Reef',
    title: 'Low P/E interpretation',
    prompt: 'The S&P 500 has an average P/E of 25. Grind and Muck Industries is trading at 8 times trailing EPS. What is the most disciplined analyst interpretation?',
    correct: 'The low multiple may reflect lower growth expectations, higher risk, cyclicality, leverage, or a company-specific overhang that needs investigation',
    wrong: [
      ["The company is definitely undervalued because lower P/E always means cheaper", 'A low multiple can be a value signal or a risk signal; it is not proof by itself.', 'Ask why the market applies the discount.'],
      ['The company must have a major lawsuit because all low multiples imply litigation', 'Litigation is one possible overhang, not an automatic implication.', 'Do not overclaim from one ratio.'],
      ['The multiple can be ignored because industrial companies never use P/E', 'P/E can still be informative, but it needs context.', 'Compare against peers, growth, risk, and earnings quality.'],
    ],
    lesson:
      'A low P/E is a prompt for analysis, not a conclusion. Good research asks whether the discount is justified by fundamentals, risk, accounting quality, or temporary overhangs.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6815,
    chapter: 'Valuation Reef',
    title: 'Bank valuation metric',
    prompt: 'Episilon Financial currently has significant loan losses and holds reserves against those loans in the event that borrowers do not repay. Which of the following metrics is the BEST valuation tool for Episilon?',
    correct: 'Price-to-book ratio',
    wrong: [
      ['Enterprise value-to-sales', 'That is not the classic first-pass bank lens.', 'For financial institutions, book value is often a much stronger anchor.'],
      ['Forward price earning ratio', 'Earnings can be noisy around reserve dynamics.', 'For banks and similar financials, book value often carries more weight.'],
      ['Losses per million', 'That is not the standard valuation metric here.', 'Use an actual valuation multiple tied to the balance sheet.'],
    ],
    lesson:
      'Financial firms like banks are often framed through price-to-book because the balance sheet is central and reserves flow through that logic more naturally than many corporate valuation metrics.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6817,
    chapter: 'Cash Flow Dock',
    title: 'Operating cash flow source',
    prompt: 'Which of the following would increase operating cash flow?',
    correct: 'Increase in accrued vacation payable',
    wrong: [
      ['Lower depreciation', 'Lower depreciation reduces the noncash add-back.', 'Remember that higher noncash charges usually support operating cash flow on the statement.'],
      ['Increasing accounts receivable', 'More receivables usually tie up cash.', 'Working-capital buildups often consume operating cash.'],
      ['Lower accounts payable', 'A decline in payables is usually a use of cash.', 'When liabilities rise, the company is effectively holding onto cash longer.'],
    ],
    lesson:
      'A rise in accrued vacation payable is a rise in a liability, which acts as a source of cash because the firm has delayed payment. In contrast, receivable growth and payable reductions usually hurt operating cash flow.',
    source: 'STC Series 86 Final Exam Review',
  },
  {
    id: 6819,
    chapter: 'Accounting Dock',
    title: 'Continuing ops vs net income',
    prompt: 'Which of the items below could be a reason for a difference between income from continuing operations and net income?',
    correct: 'Loss or gain on the sale of a business segment',
    wrong: [
      ['Non-recurring items', 'Not every non-recurring item is reported below continuing operations in the same way.', 'The question is pointing specifically to discontinued operations logic.'],
      ['Additional shares issued', 'Share issuance affects per-share metrics, not this income-line distinction directly.', 'Stay on income-statement classification, not capital-structure changes.'],
      ['Extraordinary loss on retirement of debt', 'That is not the best fit for the continuing-operations versus net-income split being asked about here.', 'Think discontinued operations from selling a business segment.'],
    ],
    lesson:
      'A gain or loss on the sale of a business segment can be reported through discontinued-operations logic, creating a difference between income from continuing operations and bottom-line net income.',
    source: 'STC Series 86 Final Exam Review',
  },
])

const _miscBundle = [{ subTopics: MISC_BANKS_SUB_TOPICS, mentorHints: MISC_BANKS_MENTOR_HINTS, correctShortened: MISC_BANKS_CORRECT_SHORTENED, source: 'miscBanks' }]

export const series86Imported = runPolish(_series86ImportedBase, _miscBundle)
