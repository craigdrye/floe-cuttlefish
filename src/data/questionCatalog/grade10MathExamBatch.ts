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
    'Coverage source: NYSED, STAAR, and OER Grade 10 algebra/geometry collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from NYSED/STAAR/OER Grade 10 math coverage',
})

export const grade10MathExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(435001, 'Quadratics', 'Discriminant', 'For x^2 - 4x + 4 = 0, what does the discriminant tell you?', 'There is one repeated real solution', [
    miss('There are two distinct real solutions', 'That would require a positive discriminant.', 'Compute b^2 - 4ac.'),
    miss('There are no real solutions', 'That would require a negative discriminant.', 'The discriminant here is zero.'),
    miss('There are infinitely many solutions', 'A quadratic equation does not become an identity here.', 'Use the discriminant classification.'),
  ]),
  q(435002, 'Quadratics', 'Vertex axis', 'For y = (x - 4)^2 + 7, what is the axis of symmetry?', 'x = 4', [
    miss('x = -4', 'That reverses the sign inside vertex form.', 'In (x - h)^2 + k, the axis is x = h.'),
    miss('y = 7', 'That is the vertical coordinate of the vertex, not the axis.', 'The axis is a vertical line.'),
    miss('x = 7', 'That uses the y-coordinate as the x-coordinate.', 'Use the value inside the square.'),
  ]),
  q(435003, 'Trigonometry', 'Sine ratio', 'In a right triangle, an acute angle has opposite side 6 and hypotenuse 10. What is sin of the angle?', '3/5', [
    miss('4/5', 'That would use an adjacent side of 8 over the hypotenuse.', 'Sine is opposite over hypotenuse.'),
    miss('5/3', 'That reverses the ratio.', 'The hypotenuse goes in the denominator.'),
    miss('3/4', 'That compares opposite to adjacent.', 'Use SOH: sine = opposite/hypotenuse.'),
  ]),
  q(435004, 'Trigonometry', 'Cosine ratio', 'In a right triangle, an acute angle has adjacent side 8 and hypotenuse 17. What is cos of the angle?', '8/17', [
    miss('15/17', 'That would be sine if the opposite side were 15.', 'Cosine uses adjacent over hypotenuse.'),
    miss('17/8', 'That reverses the ratio.', 'Trig ratios are side over hypotenuse here, not hypotenuse over side.'),
    miss('8/15', 'That compares adjacent to opposite.', 'Use CAH: cosine = adjacent/hypotenuse.'),
  ]),
  q(435005, 'Circle Geometry', 'Circle area', 'Using pi ≈ 3.14, what is the area of a circle with radius 6?', '113.04', [
    miss('37.68', 'That is circumference, not area.', 'Area uses pi r^2.'),
    miss('18.84', 'That is pi times the diameter without the full circumference relationship.', 'Square the radius for area.'),
    miss('36', 'That is only r^2 and misses pi.', 'Multiply 36 by 3.14.'),
  ]),
  q(435006, 'Circle Geometry', 'Arc length fraction', 'A 90-degree central angle cuts an arc from a circle. What fraction of the circle is the arc?', '1/4', [
    miss('1/2', 'That would be 180 degrees.', 'Compare 90 to 360.'),
    miss('1/3', 'That would be 120 degrees.', 'A full circle has 360 degrees.'),
    miss('90', 'That is the angle measure, not the fraction.', 'Write 90/360 in simplest form.'),
  ]),
  q(435007, 'Coordinate Geometry', 'Midpoint', 'What is the midpoint of the segment from (2, -1) to (8, 5)?', '(5, 2)', [
    miss('(6, 6)', 'That subtracts or mixes coordinates instead of averaging them.', 'Average x-values and y-values separately.'),
    miss('(10, 4)', 'That adds coordinates without dividing by 2.', 'Midpoint uses averages.'),
    miss('(3, 3)', 'That uses half the coordinate differences from the origin.', 'Use both endpoints.'),
  ]),
  q(435008, 'Coordinate Geometry', 'Line through points', 'What is the slope of the line through (0, 4) and (3, 10)?', '2', [
    miss('6', 'That is only the change in y.', 'Divide rise by run.'),
    miss('3', 'That is only the change in x.', 'Slope is change in y over change in x.'),
    miss('1/2', 'That reverses rise and run.', 'Compute (10 - 4)/(3 - 0).'),
  ]),
  q(435009, 'Polynomials', 'Remainder theorem', 'If p(x) = x^2 - 1, what is p(3)?', '8', [
    miss('6', 'That subtracts 3 instead of 1 after squaring.', 'Substitute 3 into x^2 - 1.'),
    miss('2', 'That evaluates x - 1, not x^2 - 1.', 'Square first.'),
    miss('10', 'That adds 1 instead of subtracting it.', 'Follow the sign in the polynomial.'),
  ]),
  q(435010, 'Similarity', 'Scale factor area', 'Two similar figures have side-length scale factor 3. What is the area scale factor?', '9', [
    miss('3', 'That is the length scale factor, not the area scale factor.', 'Area scales by the square of the side scale factor.'),
    miss('6', 'That doubles the side scale factor instead of squaring it.', 'Use 3^2.'),
    miss('27', 'That is the volume scale factor.', 'For area, use two dimensions.'),
  ]),
])
