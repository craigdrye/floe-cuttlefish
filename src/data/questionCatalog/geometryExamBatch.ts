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
    'Coverage source: NYSED Geometry, STAAR geometry-aligned, and OER geometry collections, adapted into a fixed-choice Floe-native drill. This is not a direct raw import.',
  source: 'Generated from NYSED/STAAR/OER Geometry coverage',
})

export const geometryExamBatchQuestions = makeQuestionBank('Mathematics', [
  q(437001, 'Proofs', 'Vertical angles', 'Two lines intersect. Which statement is always true about a pair of vertical angles?', 'They are congruent', [
    miss('They are supplementary only', 'Vertical angles can be supplementary in special cases, but congruence is the guaranteed fact.', 'Recall the vertical angles theorem.'),
    miss('They are complementary', 'Complementary angles add to 90 degrees, which is not guaranteed.', 'Intersecting lines create equal opposite angles.'),
    miss('They have no relationship', 'There is a standard theorem for vertical angles.', 'Look at the opposite angles.'),
  ]),
  q(437002, 'Parallel Lines', 'Corresponding angles', 'Two parallel lines are cut by a transversal. If one corresponding angle is 72 degrees, what is the other corresponding angle?', '72 degrees', [
    miss('108 degrees', 'That would be a supplementary angle, not the corresponding one.', 'Corresponding angles are congruent when lines are parallel.'),
    miss('18 degrees', 'That uses complement logic, which does not apply.', 'Use the parallel-line angle relationship.'),
    miss('144 degrees', 'That doubles the angle without a theorem.', 'Match corresponding positions.'),
  ]),
  q(437003, 'Triangle Congruence', 'SAS criterion', 'Which information is enough to prove two triangles congruent by SAS?', 'Two pairs of corresponding sides and the included angle', [
    miss('Three corresponding angles only', 'AAA proves similarity, not congruence.', 'Congruence needs size information.'),
    miss('Two angles and a non-included side', 'That is AAS, not SAS.', 'SAS uses side-angle-side.'),
    miss('One side and one angle only', 'That is not enough information.', 'You need three matching parts in a valid pattern.'),
  ]),
  q(437004, 'Similarity', 'AA similarity', 'Which condition is enough to prove two triangles are similar?', 'Two pairs of corresponding angles are congruent', [
    miss('Only one pair of sides is congruent', 'One side pair does not establish the shape relationship.', 'Similarity is about equal angles or proportional sides.'),
    miss('The perimeters are equal', 'Equal perimeters do not guarantee equal shape.', 'Look for angle or proportional side evidence.'),
    miss('One pair of angles is supplementary', 'Supplementary angles do not establish matching triangle shapes.', 'AA needs congruent angle pairs.'),
  ]),
  q(437005, 'Right Triangles', 'Pythagorean converse', 'A triangle has side lengths 7, 24, and 25. What can you conclude?', 'It is a right triangle', [
    miss('It is equilateral', 'The side lengths are not all equal.', 'Check the square relationship.'),
    miss('It is impossible to form a triangle', 'These lengths satisfy the triangle inequality.', 'Compare 7^2 + 24^2 with 25^2.'),
    miss('It must be obtuse', 'The Pythagorean relationship is exact, not greater than.', 'Use the converse of the Pythagorean theorem.'),
  ]),
  q(437006, 'Circles', 'Tangent radius', 'A radius is drawn to a point of tangency on a circle. What angle does it make with the tangent line?', '90 degrees', [
    miss('45 degrees', 'There is no general 45-degree tangent rule.', 'Tangent and radius are perpendicular at the point of tangency.'),
    miss('180 degrees', 'That would mean the two lines are straight through each other.', 'Think perpendicular, not collinear.'),
    miss('It depends on the radius length', 'The angle rule is independent of circle size.', 'Use the tangent-radius theorem.'),
  ]),
  q(437007, 'Coordinate Geometry', 'Parallel slopes', 'A line has slope -2. What is the slope of any line parallel to it?', '-2', [
    miss('2', 'That changes the sign and would not be parallel.', 'Parallel lines have equal slopes.'),
    miss('1/2', 'That is related to a perpendicular slope, not parallel.', 'Do not take the reciprocal for parallel lines.'),
    miss('-1/2', 'That is the negative reciprocal relationship for perpendicular lines.', 'Parallel keeps the same slope.'),
  ]),
  q(437008, 'Coordinate Geometry', 'Perpendicular slopes', 'A line has slope 3/4. What is the slope of a line perpendicular to it?', '-4/3', [
    miss('4/3', 'That is the reciprocal but not negative.', 'Perpendicular slopes are negative reciprocals.'),
    miss('3/4', 'That would be parallel, not perpendicular.', 'Change both sign and reciprocal.'),
    miss('-3/4', 'That changes sign only.', 'Use the negative reciprocal.'),
  ]),
  q(437009, 'Transformations', 'Reflection over y-axis', 'Reflect the point (-5, 2) over the y-axis. What is the image?', '(5, 2)', [
    miss('(-5, -2)', 'That reflects over the x-axis.', 'Reflection over the y-axis changes x, not y.'),
    miss('(5, -2)', 'That changes both coordinates.', 'Only the x-coordinate changes sign.'),
    miss('(-2, 5)', 'That swaps coordinates instead of reflecting.', 'Keep the coordinate order.'),
  ]),
  q(437010, 'Volume', 'Cylinder volume', 'What is the volume of a cylinder with radius 3 and height 10?', '90pi', [
    miss('30pi', 'That uses pi r h and misses the square on r.', 'Cylinder volume is pi r^2 h.'),
    miss('60pi', 'That resembles lateral circumference times height without the right area base.', 'Use circular base area times height.'),
    miss('9pi', 'That is only the base area.', 'Multiply the base area by height.'),
  ]),
])
