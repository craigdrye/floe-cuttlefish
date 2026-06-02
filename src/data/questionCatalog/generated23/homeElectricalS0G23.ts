import { makeSimpleQuestion } from '../base'
import type { Question } from '../types'

export const homeElectricalS0G23: Question[] = [
  makeSimpleQuestion(
    9200000,
    'Career Skills',
    'Reading the Meter & Energy Use',
    "Reading a dial (clock-face) meter",
    'Your older home has a five-dial clock-face electric meter. Reading the dials right to left, the four right-hand pointers sit clearly on 4, 8, 1, 6. The leftmost (ten-thousands) pointer sits between the 3 and the 4. What number do you record for that left dial, and why?',
    'Record 3: when a pointer is between two numbers you read the lower one, so the meter reads 36,184 kWh',
    [
      ["Record 4, because the pointer has clearly moved past 3 toward 4", "Rounding to the nearest digit overcounts: a dial only fully advances to 4 once it reaches it, so a pointer sitting before 4 still represents the 3 the dial has actually completed. Reading up here would inflate the reading by a full 10,000 kWh.", "When a pointer falls between two digits, always take the lower digit; it has not yet earned the higher one."],
      ["Average the two and record 3.5 for that dial", "Meter dials report whole digits, not fractions; the in-between position is resolved by the dial to its right, not by averaging. A '3.5' is not a valid place value and cannot be combined with the other dials.", "Use the lower whole digit (3) and let the next dial down carry the finer detail; never write a fractional dial value."],
      ["Record 4 because the dial to its right reads 6, which is past 5 and rounds the next dial up", "This borrows a rounding rule that does not apply to dial meters. You only bump a pointer's digit up when that pointer is sitting exactly on a number and the dial to its right has passed zero, which is not the case here, where the left pointer is plainly between 3 and 4.", "Reserve the 'check the dial to the right' tie-breaker for pointers landing exactly on a number; an in-between pointer simply reads the lower digit."],
    ],
    'On a clock-face meter you read the dials from right to left and combine them into one cumulative kWh total. The core rule: when a pointer lands between two numbers, record the lower number (the dial has not finished traveling to the higher one). Adjacent dials turn in opposite directions by design, which is normal. The one exception is a pointer sitting exactly on a digit: then you peek at the dial to its right and, only if that dial has already passed zero, take the higher digit.',
    'Floe generated',
    true,
    'A pointer between two digits has not yet completed the higher one, so ask which digit the dial has actually finished.',
    { challengeRating: 6 },
  ),
]
