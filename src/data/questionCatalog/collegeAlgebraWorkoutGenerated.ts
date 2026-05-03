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
  lesson: 'Coverage source: Numbas and WeBWorK algebra-routing clusters. This is an authored Floe-native drill item, not a direct raw import.',
  source: 'Generated from Numbas/WeBWorK coverage',
})

export const collegeAlgebraWorkoutGeneratedQuestions = makeQuestionBank('Mathematics', [
  q(392001, 'Linear Equations', 'One-step equation', 'Solve x + 9 = 14.', 'x = 5', [
    miss('x = 23', 'That adds 9 instead of subtracting it.', 'Undo addition with subtraction.'),
    miss('x = -5', 'The magnitude is right but the sign is wrong.', 'Ask what number plus 9 gives 14.'),
    miss('x = 9/14', 'This treats the equation like a ratio.', 'Use inverse operations.'),
  ]),
  q(392002, 'Linear Equations', 'Two-step equation', 'Solve 4x - 3 = 17.', 'x = 5', [
    miss('x = 14', 'That stops after adding 3.', 'After 4x = 20, divide by 4.'),
    miss('x = 20', 'That misses the coefficient on x.', 'The variable is multiplied by 4.'),
    miss('x = 3.5', 'That divides before undoing subtraction.', 'Undo the outside operation first.'),
  ]),
  q(392003, 'Linear Equations', 'Variables both sides', 'Solve 5x + 2 = 2x + 14.', 'x = 4', [
    miss('x = 12', 'That subtracts constants but ignores x terms.', 'Move x terms to one side first.'),
    miss('x = 16/7', 'That combines unlike terms incorrectly.', 'Subtract 2x and subtract 2.'),
    miss('x = -4', 'The sign is reversed.', 'You should get 3x = 12.'),
  ]),
  q(392004, 'Linear Equations', 'Distribute first', 'Solve 3(x - 2) = 15.', 'x = 7', [
    miss('x = 3', 'That divides 15 by 3 but leaves -2 unresolved.', 'After x - 2 = 5, add 2.'),
    miss('x = 5', 'That is the value of x - 2, not x.', 'Finish the final inverse step.'),
    miss('x = -7', 'The sign goes the wrong way.', 'Check by substitution.'),
  ]),
  q(392005, 'Linear Equations', 'Fraction coefficient', 'Solve x/3 + 4 = 10.', 'x = 18', [
    miss('x = 2', 'That divides 6 by 3 instead of multiplying.', 'If x/3 = 6, multiply by 3.'),
    miss('x = 6', 'That stops one step early.', 'x/3 equals 6, not x.'),
    miss('x = 42', 'That adds before isolating the fraction.', 'Subtract 4 first.'),
  ]),
  q(392006, 'Inequalities', 'Positive inequality', 'Solve 2x + 1 > 9.', 'x > 4', [
    miss('x < 4', 'The sign does not flip when dividing by a positive number.', 'Only negative division flips the sign.'),
    miss('x > 5', 'That misses the subtract 1 step.', 'First get 2x > 8.'),
    miss('x < 5', 'This combines two errors.', 'Use inverse operations, then preserve the sign.'),
  ]),
  q(392007, 'Inequalities', 'Negative inequality', 'Solve -3x >= 12.', 'x <= -4', [
    miss('x >= -4', 'The inequality sign must flip when dividing by -3.', 'Negative division reverses order.'),
    miss('x <= 4', 'The sign of the number is wrong.', '12 divided by -3 is -4.'),
    miss('x >= 4', 'Both the number and inequality direction are wrong.', 'Handle the negative coefficient carefully.'),
  ]),
  q(392008, 'Inequalities', 'Compound interval', 'Solve 1 < x + 3 < 8.', '-2 < x < 5', [
    miss('4 < x < 11', 'That adds 3 instead of subtracting it.', 'Subtract 3 from all three parts.'),
    miss('-2 > x > 5', 'The direction should not reverse here.', 'Subtracting does not flip inequalities.'),
    miss('x < -2 or x > 5', 'This turns an and interval into an or statement.', 'The middle expression must satisfy both sides.'),
  ]),
  q(392009, 'Systems', 'Elimination', 'Solve the system x + y = 7 and x - y = 1.', 'x = 4, y = 3', [
    miss('x = 3, y = 4', 'That satisfies the first equation but not the second.', 'Add the equations to eliminate y.'),
    miss('x = 7, y = 1', 'Those are equation totals, not variable values.', 'Solve both equations together.'),
    miss('x = 8, y = -1', 'This does not satisfy x + y = 7.', 'Check both equations.'),
  ]),
  q(392010, 'Systems', 'Substitution', 'If y = 2x and x + y = 12, what is x?', '4', [
    miss('6', 'That ignores y = 2x.', 'Substitute 2x for y.'),
    miss('8', 'That is y, not x.', 'The question asks for x.'),
    miss('12', 'That is the total, not one variable.', 'Solve 3x = 12.'),
  ]),
  q(392011, 'Quadratics', 'Zero product', 'If (x - 4)(x + 2) = 0, what are the solutions?', 'x = 4 or x = -2', [
    miss('x = -4 or x = 2', 'The signs are reversed.', 'Set each factor equal to zero.'),
    miss('x = 4 only', 'Both factors can make the product zero.', 'Check both factors.'),
    miss('x = 2 or x = -4', 'These do not make the factors zero.', 'Solve x - 4 = 0 and x + 2 = 0.'),
  ]),
  q(392012, 'Quadratics', 'Expand binomial', 'Expand (x + 3)^2.', 'x^2 + 6x + 9', [
    miss('x^2 + 9', 'This misses the middle term.', 'Use (a + b)^2 = a^2 + 2ab + b^2.'),
    miss('x^2 + 3x + 9', 'The middle coefficient should be 6.', 'There are two x*3 terms.'),
    miss('x^2 + 6x + 6', 'The constant should be 9.', 'Square 3.'),
  ]),
  q(392013, 'Quadratics', 'Vertex x-coordinate', 'For y = x^2 - 6x + 10, what is the x-coordinate of the vertex?', '3', [
    miss('-3', 'The sign is wrong.', 'Use -b/(2a).'),
    miss('6', 'That uses b directly.', 'Divide by 2a.'),
    miss('10', 'That is the constant term.', 'The vertex x-coordinate depends on a and b.'),
  ]),
  q(392014, 'Quadratics', 'Discriminant', 'For x^2 + 4x + 4 = 0, the discriminant is:', '0', [
    miss('4', 'That does not subtract 4ac.', 'Compute b^2 - 4ac.'),
    miss('16', 'That is b^2 only.', 'Finish the discriminant formula.'),
    miss('-4', 'The subtraction is off.', 'Here 16 - 16 = 0.'),
  ]),
  q(392015, 'Quadratics', 'Completing square', 'What number completes the square for x^2 + 10x + __?', '25', [
    miss('10', 'That repeats the middle coefficient.', 'Take half of 10, then square it.'),
    miss('5', 'That is half the coefficient, not its square.', 'Square 5.'),
    miss('100', 'That squares the whole middle coefficient.', 'Use (10/2)^2.'),
  ]),
  q(392016, 'Functions', 'Domain restriction', 'For f(x) = 1/(x - 5), which x-value is excluded from the domain?', '5', [
    miss('-5', 'That would make x + 5 zero, not x - 5.', 'Set the denominator equal to zero.'),
    miss('0', 'A zero input is allowed here.', 'Check the denominator.'),
    miss('1', 'This does not make the denominator zero.', 'Only division by zero is excluded.'),
  ]),
  q(392017, 'Functions', 'Composition', 'If f(x) = x + 2 and g(x) = 3x, what is f(g(4))?', '14', [
    miss('18', 'That applies f first, then g.', 'The inside function is g.'),
    miss('12', 'That stops after g(4).', 'Then apply f.'),
    miss('9', 'That uses 3 + 4 + 2.', 'Evaluate the function definitions exactly.'),
  ]),
  q(392018, 'Functions', 'Inverse relation', 'If f(x) = x - 8, what is f^-1(x)?', 'x + 8', [
    miss('x - 8', 'That is the original function.', 'Undo subtracting 8.'),
    miss('8 - x', 'That changes the order incorrectly.', 'Solve y = x - 8 for x.'),
    miss('x/8', 'The original operation is subtraction, not multiplication.', 'Use addition as the inverse.'),
  ]),
  q(392019, 'Functions', 'Average rate', 'If f(2) = 5 and f(6) = 17, the average rate of change from 2 to 6 is:', '3', [
    miss('12', 'That is the output change only.', 'Divide by the input change.'),
    miss('4', 'That is the input change only.', 'Use change in output over change in input.'),
    miss('22', 'That adds outputs.', 'Average rate is a slope calculation.'),
  ]),
  q(392020, 'Functions', 'Transformation', 'Compared with y = x^2, y = (x - 4)^2 shifts the graph:', 'Right 4', [
    miss('Left 4', 'The sign inside the parentheses works opposite the visible sign.', 'x - 4 means the input must be 4 larger.'),
    miss('Up 4', 'Vertical shifts happen outside the square.', 'Look inside the parentheses.'),
    miss('Down 4', 'There is no outside -4.', 'This is horizontal.'),
  ]),
  q(392021, 'Exponents', 'Product rule', 'Simplify x^3 * x^4.', 'x^7', [
    miss('x^12', 'That multiplies exponents.', 'Same base multiplication adds exponents.'),
    miss('x', 'That subtracts exponents.', 'Use the product rule.'),
    miss('2x^7', 'There is no coefficient 2.', 'Only combine the powers.'),
  ]),
  q(392022, 'Exponents', 'Power rule', 'Simplify (x^3)^4.', 'x^12', [
    miss('x^7', 'That adds exponents instead of multiplying.', 'Power of a power multiplies exponents.'),
    miss('4x^3', 'The exponent outside is not a coefficient.', 'Apply it to the exponent.'),
    miss('x^81', 'That raises 3 to the fourth.', 'Use 3*4.'),
  ]),
  q(392023, 'Exponents', 'Negative exponent', 'Simplify x^-2.', '1/x^2', [
    miss('-x^2', 'A negative exponent does not make the value negative.', 'It means reciprocal.'),
    miss('x^2', 'This ignores the negative exponent.', 'Move the power to the denominator.'),
    miss('1/x^-2', 'That has not simplified the exponent.', 'Use a positive exponent in the denominator.'),
  ]),
  q(392024, 'Exponents', 'Zero exponent', 'For x not equal to 0, x^0 equals:', '1', [
    miss('0', 'A nonzero base to the zero power is 1.', 'Use the exponent rule.'),
    miss('x', 'That would be x^1.', 'Zero exponent removes the base value.'),
    miss('undefined', 'Only 0^0 is the special case.', 'The prompt says x is not zero.'),
  ]),
  q(392025, 'Radicals', 'Square root', 'Simplify sqrt(50).', '5sqrt(2)', [
    miss('25sqrt(2)', 'Only the square root of 25 comes out.', 'Factor 50 as 25*2.'),
    miss('10sqrt(5)', 'That does not square back to 50.', 'Use the largest square factor.'),
    miss('2sqrt(25)', 'This is not simplified.', 'Take sqrt(25) out as 5.'),
  ]),
  q(392026, 'Radicals', 'Rationalize denominator', 'Rationalize 3/sqrt(5).', '3sqrt(5)/5', [
    miss('3sqrt(5)', 'The denominator also gets multiplied by sqrt(5).', 'Multiply top and bottom by sqrt(5).'),
    miss('sqrt(15)/5', 'The numerator multiplication is wrong.', '3 times sqrt(5) stays 3sqrt(5).'),
    miss('3/5', 'This drops the radical factor in the numerator.', 'Rationalizing preserves value.'),
  ]),
  q(392027, 'Polynomials', 'Add polynomials', 'Simplify (2x^2 + 3x) + (x^2 - 5x).', '3x^2 - 2x', [
    miss('3x^2 + 8x', 'The x terms have opposite signs.', 'Combine 3x and -5x.'),
    miss('2x^4 - 2x', 'Do not multiply powers when adding polynomials.', 'Combine like terms only.'),
    miss('x^2 - 2x', 'This misses one x^2 term.', '2x^2 + x^2 = 3x^2.'),
  ]),
  q(392028, 'Polynomials', 'Multiply binomials', 'Expand (x + 2)(x - 5).', 'x^2 - 3x - 10', [
    miss('x^2 + 3x - 10', 'The middle sign is wrong.', 'Combine -5x and +2x.'),
    miss('x^2 - 10', 'This misses the cross terms.', 'Use all four products.'),
    miss('x^2 - 7x - 10', 'That subtracts 5 and 2 instead of combining cross terms.', 'Middle term is -5x + 2x.'),
  ]),
  q(392029, 'Polynomials', 'Difference of squares', 'Factor x^2 - 49.', '(x - 7)(x + 7)', [
    miss('(x - 7)^2', 'That expands to x^2 - 14x + 49.', 'Difference of squares uses conjugates.'),
    miss('(x + 7)^2', 'That expands to x^2 + 14x + 49.', 'The middle term should vanish.'),
    miss('(x - 49)(x + 1)', 'That does not expand correctly.', 'Use sqrt(49) = 7.'),
  ]),
  q(392030, 'Rational Expressions', 'Cancel common factor', 'Simplify (x^2 - 9)/(x - 3), assuming x != 3.', 'x + 3', [
    miss('x - 3', 'This cancels the wrong factor.', 'Factor the numerator first.'),
    miss('x^2 + 3', 'That is not valid cancellation.', 'Use x^2 - 9 = (x - 3)(x + 3).'),
    miss('0', 'The expression is not zero for all allowed x.', 'Cancel the common factor after noting x != 3.'),
  ]),
  q(392031, 'Rational Expressions', 'Add fractions', 'Simplify 1/x + 1/3.', '(x + 3)/(3x)', [
    miss('2/(3x)', 'That adds numerators without making equivalent fractions.', 'Use a common denominator.'),
    miss('2/(x + 3)', 'Denominators do not add this way.', 'Common denominator is 3x.'),
    miss('4/x', 'This treats 1/3 as 3/x.', 'Rewrite both fractions over 3x.'),
  ]),
  q(392032, 'Rational Expressions', 'Complex fraction', 'Simplify (x/2)/(x/6), assuming x != 0.', '3', [
    miss('1/3', 'The division was inverted.', 'Multiply by the reciprocal of x/6.'),
    miss('x/12', 'That multiplies the fractions instead of dividing.', 'Division by a fraction means reciprocal.'),
    miss('x', 'The x factors cancel.', 'Track both x and constants.'),
  ]),
  q(392033, 'Logarithms', 'Log definition', 'log_2(8) equals:', '3', [
    miss('4', '2^4 is 16.', 'Ask what power of 2 gives 8.'),
    miss('6', 'That multiplies 2 and 3.', 'Logarithms ask for an exponent.'),
    miss('16', 'That squares 4 or doubles 8.', 'Use 2^? = 8.'),
  ]),
  q(392034, 'Logarithms', 'Product rule', 'log(ab) can be rewritten as:', 'log(a) + log(b)', [
    miss('log(a)log(b)', 'Logs turn products into sums, not products.', 'Use the product rule.'),
    miss('log(a + b)', 'The log of a product is not the log of a sum.', 'Keep the inside operation straight.'),
    miss('log(a) - log(b)', 'That is the quotient rule.', 'Product means sum.'),
  ]),
  q(392035, 'Logarithms', 'Exponential form', 'Rewrite log_5(x) = 2 in exponential form.', '5^2 = x', [
    miss('2^5 = x', 'The base and exponent are swapped.', 'The log base becomes the exponential base.'),
    miss('x^2 = 5', 'The variable is the result of the power.', 'Use base^exponent = argument.'),
    miss('5x = 2', 'A logarithm is not multiplication.', 'Translate to exponent form.'),
  ]),
  q(392036, 'Absolute Value', 'Absolute equation', 'Solve |x - 2| = 5.', 'x = 7 or x = -3', [
    miss('x = 7 only', 'Absolute value equations often have two branches.', 'Solve x - 2 = 5 and x - 2 = -5.'),
    miss('x = 3 or x = -7', 'The shift by 2 is handled incorrectly.', 'Add 2 after setting both branches.'),
    miss('x = 5 or x = -5', 'This ignores x - 2.', 'Solve for x, not for the inside expression.'),
  ]),
  q(392037, 'Absolute Value', 'Absolute inequality', 'Solve |x| < 4.', '-4 < x < 4', [
    miss('x < -4 or x > 4', 'That describes |x| > 4.', 'Less than means inside the interval.'),
    miss('x > 4', 'This keeps only one outside branch.', 'Think distance from zero less than 4.'),
    miss('x < 4', 'This misses the lower bound.', 'Absolute value controls both sides.'),
  ]),
  q(392038, 'Coordinate Geometry', 'Distance formula', 'What is the distance between (0, 0) and (3, 4)?', '5', [
    miss('7', 'That adds horizontal and vertical changes.', 'Use the Pythagorean theorem.'),
    miss('1', 'That subtracts changes.', 'Distance is sqrt(3^2 + 4^2).'),
    miss('25', 'That is the squared distance.', 'Take the square root.'),
  ]),
  q(392039, 'Coordinate Geometry', 'Midpoint', 'What is the midpoint of (2, 5) and (8, 1)?', '(5, 3)', [
    miss('(6, 4)', 'That subtracts coordinates instead of averaging.', 'Average x-values and y-values separately.'),
    miss('(10, 6)', 'That adds coordinates but does not divide by 2.', 'Midpoint is an average.'),
    miss('(3, 5)', 'The coordinates are mixed up.', 'Compute ((2+8)/2, (5+1)/2).'),
  ]),
  q(392040, 'Coordinate Geometry', 'Parallel slope', 'A line parallel to y = 3x - 2 has slope:', '3', [
    miss('-1/3', 'That is the perpendicular slope.', 'Parallel lines have equal slopes.'),
    miss('-2', 'That is the y-intercept.', 'Slope is the coefficient of x.'),
    miss('1/3', 'That is not parallel to slope 3.', 'Use the same slope.'),
  ]),
  q(392041, 'Coordinate Geometry', 'Perpendicular slope', 'A line perpendicular to a line with slope 2 has slope:', '-1/2', [
    miss('2', 'That would be parallel.', 'Perpendicular slopes are negative reciprocals.'),
    miss('1/2', 'The reciprocal needs a negative sign.', 'Product of perpendicular slopes is -1.'),
    miss('-2', 'That changes sign but not reciprocal.', 'Use negative reciprocal.'),
  ]),
  q(392042, 'Sequences', 'Arithmetic sequence', 'The sequence 4, 9, 14, 19 has common difference:', '5', [
    miss('4', 'That is the first term.', 'Subtract consecutive terms.'),
    miss('9', 'That is the second term.', 'Common difference is the repeated change.'),
    miss('23', 'That is the next term, not the difference.', 'The change is 9 - 4.'),
  ]),
  q(392043, 'Sequences', 'Geometric sequence', 'The sequence 3, 6, 12, 24 has common ratio:', '2', [
    miss('3', 'That is the first term.', 'Divide consecutive terms.'),
    miss('6', 'That is the second term.', 'Common ratio is multiplicative change.'),
    miss('21', 'That is the total increase from 3 to 24.', 'Use ratio, not difference.'),
  ]),
  q(392044, 'Sequences', 'Arithmetic nth term', 'For arithmetic sequence a_1 = 2 and common difference 3, what is a_5?', '14', [
    miss('17', 'That uses five jumps instead of four.', 'a_5 is four differences after a_1.'),
    miss('11', 'That uses only three jumps.', 'From term 1 to term 5 is four steps.'),
    miss('10', 'That multiplies 2 by 5.', 'Use a_n = a_1 + (n - 1)d.'),
  ]),
  q(392045, 'Sequences', 'Geometric nth term', 'For geometric sequence a_1 = 5 and ratio 2, what is a_4?', '40', [
    miss('80', 'That uses four multiplications by 2 instead of three.', 'a_4 is three ratios after a_1.'),
    miss('20', 'That uses only two multiplications.', 'Compute 5*2^3.'),
    miss('13', 'That treats the sequence as arithmetic.', 'Use multiplication, not addition.'),
  ]),
  q(392046, 'Modeling', 'Linear model', 'A taxi charges $4 plus $2 per mile. Which model gives cost C for m miles?', 'C = 4 + 2m', [
    miss('C = 2 + 4m', 'The fixed fee and per-mile fee are swapped.', 'Fixed fee is the intercept.'),
    miss('C = 6m', 'This treats the starting fee as per-mile cost.', 'Separate fixed and variable parts.'),
    miss('C = 4m + 2', 'That charges $4 per mile.', 'The coefficient of m is the per-mile charge.'),
  ]),
  q(392047, 'Modeling', 'Break-even', 'Revenue is R = 12x and cost is C = 5x + 140. Break-even occurs when x =', '20', [
    miss('7', 'That subtracts coefficients but ignores fixed cost.', 'Set R = C.'),
    miss('140', 'That is the fixed cost, not the quantity.', 'Solve 12x = 5x + 140.'),
    miss('17', 'That adds 12 and 5.', 'Use equation solving.'),
  ]),
  q(392048, 'Modeling', 'Percent decrease', 'A price of $80 is discounted by 25%. The new price is:', '$60', [
    miss('$20', 'That is the discount amount, not the new price.', 'Subtract the discount from the original.'),
    miss('$100', 'That increases the price.', 'A discount lowers the price.'),
    miss('$55', 'The arithmetic is off.', '25% of 80 is 20.'),
  ]),
  q(392049, 'Modeling', 'Mixture average', 'A class has test scores 70, 80, and 90. The mean is:', '80', [
    miss('240', 'That is the sum, not the mean.', 'Divide by the number of scores.'),
    miss('70', 'That is the minimum.', 'Mean uses all values.'),
    miss('90', 'That is the maximum.', 'Average the three scores.'),
  ]),
  q(392050, 'Modeling', 'Unit conversion', 'If 1 hour = 60 minutes, then 2.5 hours equals:', '150 minutes', [
    miss('120 minutes', 'That converts only 2 hours.', 'Include the half hour.'),
    miss('90 minutes', 'That treats 0.5 hour as 30 but misses an hour.', 'Multiply 2.5 by 60.'),
    miss('250 minutes', 'That treats hours as hundreds of minutes.', 'Use 60 minutes per hour.'),
  ]),
  q(392051, 'Linear Equations', 'Solve for x with fractions', 'Solve (1/2)x + 3 = 11.', 'x = 16', [
    miss('x = 4', 'That subtracts 3 but forgets to undo the 1/2 factor.', 'After (1/2)x = 8, multiply by 2.'),
    miss('x = 8', 'That stops after isolating (1/2)x.', 'x is double (1/2)x.'),
    miss('x = 22', 'That adds instead of subtracting 3.', 'Undo +3 with subtraction.'),
    miss('x = 5.5', 'That divides 11 by 2 and ignores the +3.', 'Use inverse operations in order.'),
  ]),
  q(392052, 'Linear Equations', 'Literal equation', 'Solve for y: 3y - 2x = 12.', 'y = (2x + 12)/3', [
    miss('y = (12 - 2x)/3', 'The sign on 2x flips when you move it to the other side.', 'Add 2x to both sides first.'),
    miss('y = 2x + 4', 'That forgets to divide by 3.', 'Isolate y by dividing the entire right side by 3.'),
    miss('y = (2x - 12)/3', 'The constant moves with a sign error.', 'Add 12 after moving terms, not subtract.'),
    miss('y = 3(2x + 12)', 'That multiplies instead of dividing.', '3y means y is being multiplied by 3.'),
  ]),
  q(392053, 'Inequalities', 'Interval notation', 'Write the solution set for x <= 3 in interval notation.', '(-inf, 3]', [
    miss('[3, inf)', 'That reverses the inequality direction.', 'Less than means to the left.'),
    miss('(-inf, 3)', 'That excludes 3, but the inequality includes it.', 'Use bracket for inclusive endpoint.'),
    miss('(3, inf)', 'That is for x > 3.', 'Check the sign.'),
    miss('[0, 3]', 'That incorrectly assumes x is nonnegative.', 'There is no lower bound.'),
  ]),
  q(392054, 'Absolute Value', 'Distance meaning', 'Which expression represents the distance between x and 5 on a number line?', '|x - 5|', [
    miss('x - 5', 'That can be negative, but distance is nonnegative.', 'Distance uses absolute value.'),
    miss('|x + 5|', 'That measures distance from -5, not 5.', 'Use subtraction for distance from a point.'),
    miss('5 - x only', 'That is negative when x > 5.', 'Absolute value fixes direction.'),
    miss('|5x|', 'That scales x; it is not a distance to 5.', 'Distance is based on a difference.'),
  ]),
  q(392055, 'Absolute Value', 'Solve absolute value', 'Solve |x - 2| = 7.', 'x = 9 or x = -5', [
    miss('x = 5', 'That uses x - 2 = 7 but misses the negative case.', 'Absolute value splits into two equations.'),
    miss('x = -9 or x = 5', 'Signs are shifted incorrectly.', 'Set x - 2 = 7 and x - 2 = -7.'),
    miss('x = 7', 'That treats |x - 2| like |x|.', 'Keep the -2 inside the absolute value.'),
    miss('No solution', 'Absolute value can equal a positive number.', 'Distance 7 from 2 has two points.'),
  ]),
  q(392056, 'Polynomials', 'FOIL expansion', 'Expand (x + 3)(x - 5).', 'x^2 - 2x - 15', [
    miss('x^2 + 8x - 15', 'The middle terms are 3x and -5x, which combine to -2x.', 'Add the cross terms carefully.'),
    miss('x^2 - 15', 'That drops the middle terms.', 'FOIL includes two cross terms.'),
    miss('x^2 - 2x + 15', 'The constant term is 3 * -5, which is -15.', 'Signs matter in the last term.'),
    miss('x^2 + 2x - 15', 'The sign on the x term is reversed.', '3x - 5x is negative.'),
  ]),
  q(392057, 'Polynomials', 'Factor common factor', 'Factor 6x^2 + 9x.', '3x(2x + 3)', [
    miss('3(2x^2 + 3x)', 'That factors 3 but leaves an extra x in common.', 'Both terms share 3x.'),
    miss('x(6x + 9)', 'That is valid but not fully factored by the GCF.', 'Take out the greatest common factor.'),
    miss('9x(2x + 1)', 'That changes the coefficients.', 'Check by multiplying back.'),
    miss('3x(2x - 3)', 'The sign on the 3 term is wrong.', 'Both original terms are positive.'),
  ]),
  q(392058, 'Quadratics', 'Factor quadratic', 'Factor x^2 + 5x + 6.', '(x + 2)(x + 3)', [
    miss('(x - 2)(x - 3)', 'That gives a positive constant but a negative middle term.', 'Signs should match +5x.'),
    miss('(x + 1)(x + 6)', 'That multiplies to +6 but adds to 7.', 'Find numbers that multiply to 6 and add to 5.'),
    miss('(x + 2)(x - 3)', 'That gives -x, not +5x.', 'Both signs should be positive.'),
    miss('x(x + 5) + 6', 'That is not a factorization.', 'Write as a product of binomials.'),
  ]),
  q(392059, 'Quadratics', 'Vertex x-value', 'For y = x^2 - 4x + 1, the x-coordinate of the vertex is:', '2', [
    miss('-2', 'The vertex x-value is -b/(2a) = -(-4)/(2*1).', 'Use -b/(2a).'),
    miss('4', 'That uses b instead of -b/(2a).', 'Divide by 2a.'),
    miss('1', 'That is the constant term, not the vertex location.', 'Vertex depends on a and b.'),
    miss('-4', 'That is b, not the vertex x-value.', 'Compute -b/(2a).'),
  ]),
  q(392060, 'Quadratics', 'Discriminant meaning', 'A quadratic has discriminant 0. How many real solutions does it have?', 'One real solution (a repeated root)', [
    miss('Two distinct real solutions', 'That corresponds to a positive discriminant.', 'Check the sign of the discriminant.'),
    miss('No real solutions', 'That corresponds to a negative discriminant.', '0 is the boundary case.'),
    miss('Infinitely many solutions', 'Quadratics do not have infinitely many distinct roots.', 'A repeated root is still one real solution.'),
    miss('It depends on a only', 'The discriminant already encodes the root count.', 'Use the discriminant rule.'),
  ]),
  q(392061, 'Functions', 'Function notation', 'If f(x) = 2x - 7, what is f(5)?', '3', [
    miss('10', 'That computes 2x but forgets the -7.', 'Substitute x = 5 fully.'),
    miss('-3', 'That subtracts 7 from 4 instead of 10.', '2*5 is 10.'),
    miss('17', 'That adds 7 instead of subtracting.', 'The rule is 2x minus 7.'),
    miss('5', 'That repeats the input value.', 'Compute the output.'),
  ]),
  q(392062, 'Functions', 'Not a function', 'Which relation is NOT a function?', 'One x-value maps to two different y-values', [
    miss('Repeated y-values occur', 'Multiple x values can share the same y.', 'The restriction is on x, not y.'),
    miss('Negative x-values occur', 'Functions can have negative inputs.', 'Negatives are allowed.'),
    miss('Decimal outputs occur', 'Functions can use real-number outputs.', 'The issue is one input giving two outputs.'),
    miss('There is a y-intercept', 'Having an intercept does not prevent being a function.', 'Use the definition.'),
  ]),
  q(392063, 'Rational Expressions', 'Simplify rational expression', 'Simplify (x^2 - 9)/(x + 3) for x != -3.', 'x - 3', [
    miss('x + 3', 'You cancel the factor (x + 3), leaving the other factor.', 'Factor the numerator first.'),
    miss('x^2 - 3', 'You cannot cancel terms inside a sum.', 'Cancel only common factors.'),
    miss('x^2 + 9', 'That changes the sign in the factorization.', 'x^2 - 9 is a difference of squares.'),
    miss('1', 'Canceling everything would be wrong here.', 'Only one factor cancels.'),
  ]),
  q(392064, 'Rational Expressions', 'Restriction / domain', 'What value must be excluded from the domain of (x + 1)/(x - 4)?', 'x = 4', [
    miss('x = -1', 'That would make the numerator zero, which is allowed.', 'Only denominators cannot be zero.'),
    miss('x = 0', '0 is fine unless it makes the denominator 0.', 'Check where x - 4 = 0.'),
    miss('x = 1', 'That does not zero the denominator.', 'Set the denominator equal to zero.'),
    miss('No restrictions', 'Rational expressions exclude denominator zeros.', 'Denominator cannot be 0.'),
  ]),
  q(392065, 'Exponents', 'Negative exponent', 'Rewrite x^-3 using a positive exponent.', '1/x^3', [
    miss('-x^3', 'Negative exponent means reciprocal, not a negative sign.', 'Use 1/x^n.'),
    miss('x/3', 'That treats the exponent like division.', 'Exponents are powers, not denominators.'),
    miss('1/(3x)', 'That moves the 3 incorrectly.', 'Only the exponent moves to the denominator.'),
    miss('x^3', 'That drops the negative without taking reciprocal.', 'Negative exponent flips the base.'),
  ]),
  q(392066, 'Exponents', 'Power of a power', 'Simplify (x^2)^5.', 'x^10', [
    miss('x^7', 'Exponents multiply, they do not add.', 'Use (x^a)^b = x^(ab).'),
    miss('x^25', 'That multiplies 5 by 5 instead of 2 by 5.', 'Multiply the exponents 2 and 5.'),
    miss('5x^2', 'That pulls the exponent out as a coefficient.', 'The exponent affects the power.'),
    miss('x^32', 'That doubles repeatedly instead of multiplying exponents.', 'It is a single multiplication.'),
  ]),
  q(392067, 'Radicals', 'Simplify radical', 'Simplify sqrt(50).', '5*sqrt(2)', [
    miss('sqrt(25) * sqrt(2)', 'That is correct but not simplified to 5*sqrt(2).', 'Pull perfect squares out of the radical.'),
    miss('25*sqrt(2)', 'That confuses sqrt(25) with 25.', 'sqrt(25) is 5.'),
    miss('sqrt(100)', 'That changes the number inside the radical.', 'Factor 50 as 25*2.'),
    miss('10*sqrt(5)', 'That squares incorrectly.', 'Check: (5*sqrt(2))^2 = 50.'),
  ]),
  q(392068, 'Radicals', 'Rationalize denominator', 'Rationalize 3/sqrt(5).', '(3*sqrt(5))/5', [
    miss('(3*sqrt(5))/sqrt(5)', 'That multiplies but does not simplify the denominator.', 'Make the denominator a rational number.'),
    miss('3*sqrt(5)', 'That ignores the original denominator.', 'You need an equivalent fraction.'),
    miss('3/5', 'That removes the radical incorrectly.', 'Multiply numerator and denominator by sqrt(5).'),
    miss('15/sqrt(5)', 'That multiplies only the numerator.', 'Multiply both top and bottom.'),
  ]),
  q(392069, 'Logarithms', 'Common log', 'If log_10(1000) = x, then x equals:', '3', [
    miss('10', 'That confuses the base with the output.', 'The log is the exponent.'),
    miss('1000', 'That repeats the input value.', 'Ask: 10^x = 1000.'),
    miss('1/3', 'That inverts incorrectly.', '10^3 is 1000, not 10^(1/3).'),
    miss('0.001', 'That is 10^-3, the reciprocal.', 'Check the power of 10.'),
  ]),
  q(392070, 'Logarithms', 'Product rule', 'Simplify log(a*b) (same base).', 'log(a) + log(b)', [
    miss('log(a) * log(b)', 'Logs turn multiplication into addition, not multiplication.', 'Use the product rule.'),
    miss('log(a - b)', 'Subtraction is not involved.', 'Only multiplication inside becomes addition outside.'),
    miss('log(a)/log(b)', 'That is not a standard product simplification.', 'Recall log properties.'),
    miss('log(a) - log(b)', 'That corresponds to division inside, not multiplication.', 'Division becomes subtraction.'),
  ]),
  q(392071, 'Systems', 'Elimination', 'Solve: x + y = 7 and x - y = 1.', 'x = 4, y = 3', [
    miss('x = 3, y = 4', 'That swaps the values.', 'Add equations to eliminate y first.'),
    miss('x = 7, y = 1', 'That treats each equation as a direct assignment.', 'Solve simultaneously, not separately.'),
    miss('x = 1, y = 7', 'That swaps again and ignores structure.', 'Compute x from adding equations.'),
    miss('x = 2, y = 5', 'That does not satisfy x - y = 1.', 'Check both equations.'),
  ]),
  q(392072, 'Systems', 'Substitution', 'If y = 2x and x + y = 9, then x equals:', '3', [
    miss('9', 'That is the sum x + y, not x.', 'Substitute y into the sum.'),
    miss('4.5', 'That would be x if y were 0.', 'You have x + 2x = 9.'),
    miss('6', 'That is y after finding x.', 'The question asks for x.'),
    miss('2', 'That makes x + y = 6, not 9.', 'Solve 3x = 9.'),
  ]),
  q(392073, 'Functions', 'Composition', 'If f(x) = x + 1 and g(x) = 2x, what is f(g(3))?', '7', [
    miss('8', 'That computes g(f(3)) instead.', 'Apply g first, then f.'),
    miss('6', 'That stops after computing g(3).', 'You must apply f to the result.'),
    miss('4', 'That computes f(3) only.', 'Use both functions in order.'),
    miss('3', 'That repeats the input.', 'Compose the functions.'),
  ]),
  q(392074, 'Sequences', 'Geometric ratio', 'The sequence 3, 6, 12, 24, ... is:', 'Geometric with common ratio 2', [
    miss('Arithmetic with common difference 3', 'Differences are 3, 6, 12, not constant.', 'Check ratios, not differences.'),
    miss('Geometric with common ratio 3', '3 to 6 doubles, it does not triple.', 'Compute term2/term1.'),
    miss('Arithmetic with common difference 6', 'Difference is not constant.', 'Arithmetic requires constant difference.'),
    miss('Neither arithmetic nor geometric', 'The ratio is consistent (2).', 'Look at multiplication factor.'),
  ]),
  q(392075, 'Sequences', 'Arithmetic term', 'An arithmetic sequence has first term 5 and common difference -2. What is the 4th term?', '-1', [
    miss('11', 'That uses +2 instead of -2.', 'The sequence decreases by 2 each step.'),
    miss('1', 'That stops too early or miscounts terms.', 'Compute terms: 5, 3, 1, -1.'),
    miss('-3', 'That goes one step too far.', 'The 4th term is after three differences.'),
    miss('3', 'That is the 2nd term.', 'Count carefully: 1st is 5.'),
  ]),
  q(392076, 'Quadratics', 'Solve by factoring', 'Solve x^2 - 9 = 0.', 'x = 3 or x = -3', [
    miss('x = 9', 'That treats the square as removable.', 'Take square roots or factor difference of squares.'),
    miss('x = 0', 'That solves x^2 = 0, not x^2 = 9.', 'Set x^2 equal to 9.'),
    miss('x = 3 only', 'You missed the negative solution.', 'Both 3 and -3 square to 9.'),
    miss('No real solution', '9 is positive, so square roots are real.', 'sqrt(9) is real.'),
  ]),
  q(392077, 'Linear Models', 'Slope from two points', 'Find the slope through (2, 3) and (6, 11).', '2', [
    miss('1/2', 'That flips rise/run.', 'Use (y2 - y1)/(x2 - x1).'),
    miss('8', 'That uses y-change only.', 'Divide rise by run.'),
    miss('4', 'That uses x-change only.', 'Slope is rise over run.'),
    miss('-2', 'That reverses one subtraction but not the other.', 'Keep subtraction order consistent.'),
  ]),
  q(392078, 'Linear Models', 'Slope-intercept form', 'A line has slope -3 and y-intercept 4. Its equation is:', 'y = -3x + 4', [
    miss('y = 3x + 4', 'That uses the wrong sign for the slope.', 'Slope -3 means decreasing.'),
    miss('y = -3x - 4', 'That uses the wrong sign for the intercept.', 'Intercept is where x = 0.'),
    miss('y = 4x - 3', 'That swaps slope and intercept.', 'Use y = mx + b.'),
    miss('x = -3y + 4', 'That puts variables on the wrong sides.', 'Slope-intercept is y in terms of x.'),
  ]),
  q(392079, 'Probability', 'Independent events', 'If P(A) = 0.4 and P(B) = 0.5 and A, B are independent, then P(A and B) is:', '0.2', [
    miss('0.9', 'That adds probabilities.', 'Use multiplication for independent intersection.'),
    miss('0.1', 'That subtracts instead of multiplying.', 'Compute 0.4 * 0.5.'),
    miss('0.4', 'That ignores event B.', 'Intersection of independent events uses both.'),
    miss('0.45', 'That averages the probabilities.', 'Do not average; multiply.'),
  ]),
  q(392080, 'Probability', 'Complement', 'If P(A) = 0.27, then P(not A) is:', '0.73', [
    miss('0.27', 'That repeats P(A).', 'Complement must add to 1.'),
    miss('1.27', 'Probabilities cannot exceed 1.', 'Compute 1 - 0.27.'),
    miss('0.3', 'That rounds incorrectly and loses meaning.', 'Use exact subtraction.'),
    miss('0.27/0.73', 'That forms an odds ratio, not a probability.', 'Complement is 1 minus the probability.'),
  ]),
])
