import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson:
    'Coverage source: NYSED, STAAR, and OER middle-school math collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from NYSED/STAAR/OER middle-school math coverage',
})

export const middleMathExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(433001, 'Ratios', 'Equivalent ratio', 'Which ratio is equivalent to 4:10?', '2:5', [
    miss('4:5', 'That halves only the second number.', 'Divide both parts of the ratio by the same number.'),
    miss('8:10', 'That doubles only the first number.', 'Equivalent ratios scale both parts equally.'),
    miss('10:4', 'That reverses the ratio.', 'Order matters in a ratio.'),
  ]),
  q(433002, 'Fractions', 'Fraction multiplication', 'What is 2/3 of 15?', '10', [
    miss('5', 'That finds one third, not two thirds.', 'Find 1/3 of 15, then double it.'),
    miss('12', 'That subtracts 3 from 15.', 'The word "of" means multiply here.'),
    miss('22.5', 'That multiplies by 3/2 instead of 2/3.', 'Use the fraction as written.'),
  ]),
  q(433003, 'Decimals', 'Decimal multiplication', 'What is 0.4 x 0.6?', '0.24', [
    miss('2.4', 'That puts the decimal point one place too far right.', 'Estimate: less than 1 times less than 1 is less than 1.'),
    miss('0.10', 'That adds the decimals instead of multiplying.', 'Multiply 4 x 6, then place decimal digits.'),
    miss('24', 'That ignores both decimal points.', 'There are two decimal places in the factors total.'),
  ]),
  q(433004, 'Expressions', 'Combine like terms', 'Simplify 3x + 2x + 7.', '5x + 7', [
    miss('12x', 'That combines the constant with x terms incorrectly.', 'Only like terms combine.'),
    miss('5x', 'That drops the +7.', 'Keep constants that cannot combine with x.'),
    miss('3x + 9', 'That combines 2x with 7 even though they are unlike terms.', 'Terms with variables and constants are different types.'),
  ]),
  q(433005, 'Equations', 'One-step division equation', 'Solve x/4 = 9.', '36', [
    miss('13', 'That adds 4 instead of multiplying by 4.', 'Undo division by multiplying.'),
    miss('2.25', 'That divides 9 by 4.', 'x divided by 4 already equals 9.'),
    miss('5', 'That subtracts 4 from 9.', 'Use inverse operations.'),
  ]),
  q(433006, 'Coordinate Plane', 'Quadrants', 'In which quadrant is the point (-3, 5)?', 'Quadrant II', [
    miss('Quadrant I', 'Quadrant I has positive x and positive y.', 'Check the sign of each coordinate.'),
    miss('Quadrant III', 'Quadrant III has both coordinates negative.', 'Here x is negative and y is positive.'),
    miss('Quadrant IV', 'Quadrant IV has positive x and negative y.', 'Use the ordered pair signs.'),
  ]),
  q(433007, 'Geometry', 'Triangle area', 'A triangle has base 10 cm and height 6 cm. What is its area?', '30 square cm', [
    miss('60 square cm', 'That uses base times height but misses the one-half.', 'Triangle area is half of rectangle area.'),
    miss('16 square cm', 'That adds base and height.', 'Area requires multiplication, then half.'),
    miss('300 square cm', 'That multiplies by an extra factor of 10.', 'Use (1/2) x 10 x 6.'),
  ]),
  q(433008, 'Volume', 'Rectangular prism volume', 'A rectangular prism is 4 units long, 3 units wide, and 5 units tall. What is its volume?', '60 cubic units', [
    miss('12 cubic units', 'That uses only length times width.', 'Volume uses all three dimensions.'),
    miss('24 cubic units', 'That misses the height of 5.', 'Multiply 4 x 3 x 5.'),
    miss('47 cubic units', 'That adds or mixes operations instead of multiplying dimensions.', 'Rectangular prism volume is l x w x h.'),
  ]),
  q(433009, 'Data', 'Mean from total', 'Five numbers have a total of 45. What is their mean?', '9', [
    miss('40', 'That subtracts the count instead of dividing.', 'Mean is total divided by number of values.'),
    miss('50', 'That adds the count.', 'Use the total and the count as a quotient.'),
    miss('225', 'That multiplies total by count.', 'Average splits the total evenly.'),
  ]),
  q(433010, 'Inequalities', 'Inequality solution', 'Which number is a solution to x > -2?', '0', [
    miss('-3', 'That is less than -2, not greater.', 'Use the number line direction.'),
    miss('-2', 'The symbol is greater than, not greater than or equal to.', 'Strict inequalities do not include the boundary.'),
    miss('-5', 'That moves farther left from -2.', 'Greater numbers are to the right.'),
  ]),
])
