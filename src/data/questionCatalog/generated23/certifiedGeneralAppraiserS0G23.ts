import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const certifiedGeneralAppraiserS0G23: Question[] = [
  makeSimpleQuestion(
    9020000,
    'Career Skills',
    'Property Rights and Market Analysis',
    "Excess versus surplus land",
    'A retail store sits on a 3-acre site. The store and its parking need only 1.8 acres. The extra 1.2 acres fronts a different street, meets the zoning minimum lot size on its own, and could be split off and sold for a separate fast-food pad. How should the appraiser classify the extra 1.2 acres, and why does it matter to value?',
    'Excess land, because it can be separated and has its own highest and best use, so it is valued separately rather than as mere support land',
    [
      ["Surplus land, because any acreage beyond what the building needs is by definition surplus", "Surplus land cannot be split off and lacks an independent highest and best use; here the parcel meets the zoning minimum, fronts its own street, and is separately marketable, which makes it excess, not surplus.", "Apply the separability test: if the extra land can be partitioned and developed on its own, it is excess and gets its own value indication."],
      ["Excess land, but it is added at the same per-acre rate as the land under the store", "Excess land is valued for its own highest and best use, which can differ from the improved parcel's rate; blending it at the store-site rate ignores that the pad site may sell at a different unit value.", "Value the excess parcel separately for its independent use, then add that indication to the value of the improved parcel."],
      ["Surplus land that should be ignored because the store does not use it", "Land that is genuinely separable and marketable carries real value; ignoring it understates the total, and it is not surplus because it has an independent use.", "Recognize separable, marketable land as excess and bring its independent value into the conclusion."],
    ],
    "Excess land is land not needed to support the existing improvement that CAN be separated and sold and has its own highest and best use, so it is valued separately. Surplus land also exceeds what the improvement needs but CANNOT be separated for an independent use, so it only adds support value. The distinguishing test is separability and an independent highest and best use, not raw acreage.",
    'Floe generated',
    true,
    "Ask one thing: can this extra land be split off and developed on its own? The answer to that, not how big it is, decides excess versus surplus.",
    { challengeRating: 5 },
  ),
  makeSimpleQuestion(
    9020001,
    'Career Skills',
    'Property Rights and Market Analysis',
    "Demolition test in highest and best use as improved",
    'An older single-story warehouse occupies an infill site now zoned for mid-rise apartments. As improved, the property is worth $1,900,000. The site as though vacant is worth $2,600,000, and demolition and site clearing would cost $250,000. Applying the highest-and-best-use-as-improved test, what does the analysis indicate?',
    'Demolition and redevelopment, because land value as vacant minus demolition cost ($2,350,000) exceeds the $1,900,000 value as improved',
    [
      ["Keep the warehouse, because tearing down a functioning building destroys value", "The test is economic, not sentimental: at $2,350,000 net of demolition the site is worth more cleared than the $1,900,000 it is worth with the warehouse, so retaining the improvement is the value-destroying choice.", "Compare value as improved against land-as-vacant net of demolition cost; whichever is higher is the highest and best use."],
      ["Keep the warehouse, because $2,600,000 vacant is only a theoretical number and the building is real", "You must net the demolition cost from the vacant value, but $2,600,000 minus $250,000 is still $2,350,000, which beats $1,900,000; the vacant value is the relevant comparison once it is adjusted for clearing.", "Subtract demolition cost from vacant land value, then compare to the as-improved value rather than dismissing the vacant figure."],
      ["Demolish, because the raw $2,600,000 vacant value alone is higher than $1,900,000", "The conclusion happens to be demolition, but the reasoning is wrong: you must first subtract the $250,000 demolition cost; skipping it would wrongly indicate demolition even in close cases where clearing cost flips the result.", "Always net demolition and clearing costs from the vacant value before the comparison so the test holds up when the margin is thin."],
    ],
    "In highest-and-best-use analysis of a property as improved, demolition is indicated when the land value as though vacant, minus the cost to demolish and clear, exceeds the value of the property as currently improved. The improvement is retained only if it adds value above the cleared-site value. Comparing the raw vacant value without netting demolition cost is the classic error that overstates the case for redevelopment.",
    'Floe generated',
    true,
    "Two numbers go head to head: value as improved versus vacant-land value after you pay to clear the site. Do not forget to pay for the clearing first.",
    { challengeRating: 6 },
  ),
  makeSimpleQuestion(
    9020002,
    'Career Skills',
    'Property Rights and Market Analysis',
    "Principle of contribution",
    'An owner spent $90,000 finishing a high-end basement in a small office building. Paired sales of similar buildings with and without finished basements show buyers pay only about $35,000 more for the feature in this market. When the appraiser estimates how the finished basement affects value, which economic principle governs, and what value contribution should be recognized?',
    'The principle of contribution, so the basement adds about $35,000, the amount the market pays, not the $90,000 it cost',
    [
      ["The principle of substitution, so the basement adds whatever a substitute basement would cost to build", "Substitution sets an upper limit on value by what an equally desirable alternative costs, but the question is how much the existing feature adds to THIS property; that is contribution, and the market shows it is $35,000, not the cost to build a substitute.", "Use contribution and read the value added straight from paired-sales market evidence."],
      ["The principle of contribution, so the basement adds the full $90,000 the owner spent", "Contribution measures the value a component adds to the whole property, which the market sets at about $35,000 here; cost spent is not value added, and using $90,000 double-counts the owner's overimprovement.", "Recognize only the market-supported contribution of $35,000 and treat the $55,000 gap as a loss the market does not reimburse."],
      ["The principle of conformity, so the basement adds value as long as it matches the neighborhood standard", "Conformity addresses whether uses and improvements harmonize with their surroundings; it does not quantify how many dollars a specific feature adds, which is the job of the contribution principle measured by paired sales.", "Apply contribution and let paired-sales evidence quantify the dollar amount the feature adds."],
    ],
    "The principle of contribution holds that the value of any component is measured by how much it adds to the value of the whole property, which is what the market is willing to pay, not by what it cost to create. Cost above market contribution is an overimprovement that is not fully recovered (diminishing returns). Paired-sales analysis is the standard way to isolate the dollar contribution of a single feature.",
    'Floe generated',
    true,
    "Separate dollars spent from dollars added. The market, read through paired sales, decides what a feature contributes, and it can be far less than its cost.",
    { challengeRating: 5 },
  ),
]
