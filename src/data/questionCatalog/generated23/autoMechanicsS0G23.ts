import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const autoMechanicsS0G23: Question[] = [
  makeSimpleQuestion(
    9180000,
    'Career Skills',
    'Cooling & Temperature',
    "Why coolant is mixed roughly 50/50",
    'Your reservoir is a little low and you have a jug of full-strength antifreeze concentrate on the shelf. A friend says "skip the water, pour in pure concentrate so it is extra protected and runs cooler." For a normal daily-driver car in a typical climate, what is the right move?',
    'Dilute the concentrate to about a 50/50 mix (with distilled water), because straight antifreeze actually transfers heat worse and even freezes at a higher temperature than the mix',
    [
      ["Pour in pure concentrate, since more antifreeze always means a lower freezing point and better protection", "It is not linear: water is a far better heat conductor than glycol, and 100% antifreeze freezes near 0 F while a ~50/50 mix protects to roughly -34 F. Going to pure concentrate raises the freeze point and makes the engine run hotter, the opposite of the intent.", "Cut the concentrate to about 50/50 so heat transfer and freeze protection are both near their best."],
      ["Top it off with plain tap water only, since the system already has plenty of antifreeze in it", "Adding only water dilutes the antifreeze below its protective ratio, and tap water carries minerals (calcium, chlorides) that scale up passages and corrode aluminum. The ratio drifts wrong and you introduce contaminants.", "Add a correctly proportioned 50/50 mix using distilled or deionized water, not straight tap water, to hold the ratio and avoid mineral deposits."],
      ["Use whatever coolant color is cheapest, because all antifreeze is the same chemistry once diluted", "Coolant types (IAT, OAT, HOAT) use different corrosion-inhibitor packages and are not freely interchangeable; mixing the wrong type can gel or strip protection even at the right ratio. Color is a rough hint, not a guarantee of compatibility.", "Match the coolant type your manual specifies, then dilute that type to the correct ratio."],
    ],
    'Engine coolant is antifreeze concentrate (usually ethylene or propylene glycol) blended with water, typically near 50/50. Water transfers heat much better than glycol, so pure concentrate actually runs hotter and, counterintuitively, freezes at a higher temperature (~0 F) than the mix (~-34 F); the ratio is a balance of heat transfer, freeze and boil protection, and corrosion inhibition. Use the coolant type the manual specifies and dilute with distilled water to avoid mineral scale and corrosion.',
    'Floe generated',
    true,
    'Think about why a cooling system needs water at all, and whether "more antifreeze" moves heat transfer and the freeze point in the direction you would expect.',
    { challengeRating: 6 },
  ),
]
