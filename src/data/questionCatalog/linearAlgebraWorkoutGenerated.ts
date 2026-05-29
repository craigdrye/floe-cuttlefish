import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  ADVANCED_MATH_WORKOUT_SUB_TOPICS,
  ADVANCED_MATH_WORKOUT_MENTOR_HINTS,
  ADVANCED_MATH_WORKOUT_CORRECT_SHORTENED,
} from './advancedMathWorkoutPolish'

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
    'Coverage source: Numbas and WeBWorK linear-algebra clusters. This is an authored Floe-native drill item, not a direct raw import.',
  source: 'Generated from Numbas/WeBWorK coverage',
})

const _baseLinearAlgebraWorkoutGeneratedQuestions = makeQuestionBank('Mathematics', [
  q(397001, 'Vectors', 'Vector addition', 'Compute <2, -1> + <3, 5>.', '<5, 4>', [
    miss('<6, -5>', 'That multiplies components instead of adding them.', 'Add corresponding components.'),
    miss('<5, -6>', 'The second component sign is wrong.', '-1 + 5 = 4.'),
    miss('<1, 6>', 'That subtracts the first components.', 'Addition is componentwise.'),
  ]),
  q(397002, 'Vectors', 'Scalar multiplication', 'Compute 4<1, -2, 3>.', '<4, -8, 12>', [
    miss('<4, -2, 3>', 'Only the first component was multiplied.', 'Multiply every component.'),
    miss('<1, -8, 12>', 'The first component was not scaled.', 'The scalar applies to all entries.'),
    miss('<5, 2, 7>', 'That adds 4 instead of multiplying by 4.', 'Scalar multiplication is repeated scaling.'),
  ]),
  q(397003, 'Vectors', 'Magnitude', 'The length of <6, 8> is:', '10', [
    miss('14', 'That adds components.', 'Use the Pythagorean theorem.'),
    miss('100', 'That is the squared length.', 'Take the square root.'),
    miss('2', 'That subtracts components.', 'Magnitude is sqrt(6^2 + 8^2).'),
  ]),
  q(397004, 'Vectors', 'Unit vector', 'A unit vector has magnitude:', '1', [
    miss('0', 'The zero vector is not a unit vector.', 'Unit means length one.'),
    miss('Any positive number', 'Unit vectors have a specific length.', 'Unit is normalized length.'),
    miss('-1', 'Magnitudes are nonnegative.', 'Length cannot be negative.'),
  ]),
  q(397005, 'Vectors', 'Dot product', 'Compute <1, 2, 3> dot <4, 0, -1>.', '1', [
    miss('3', 'That adds only visible matches incorrectly.', 'Compute 1*4 + 2*0 + 3*(-1).'),
    miss('<4, 0, -3>', 'That is componentwise multiplication, not the dot product result.', 'Dot products return scalars.'),
    miss('7', 'That ignores the negative final product.', 'Track signs carefully.'),
  ]),
  q(397006, 'Vectors', 'Orthogonal vectors', 'Two nonzero vectors are orthogonal exactly when their dot product is:', '0', [
    miss('1', 'Dot product 1 is not the general orthogonality test.', 'Perpendicular means zero dot product.'),
    miss('-1', 'That can happen for opposite unit vectors, not all orthogonal vectors.', 'Use angle 90 degrees.'),
    miss('Undefined', 'Dot products are defined for same-length vectors.', 'The orthogonality condition is numeric.'),
  ]),
  q(397007, 'Vectors', 'Projection idea', 'The projection of vector u onto vector v points in the direction of:', 'v', [
    miss('u only', 'The projection lands along the vector being projected onto.', 'Onto v means along v.'),
    miss('u + v always', 'Projection is not vector addition.', 'It is a shadow on v.'),
    miss('A perpendicular-only direction', 'The residual is perpendicular, not the projection.', 'Projection lies on the target line.'),
  ]),
  q(397008, 'Matrices', 'Matrix dimensions', 'A matrix with 3 rows and 2 columns has dimensions:', '3 x 2', [
    miss('2 x 3', 'Rows come before columns.', 'Use rows by columns.'),
    miss('6 x 1', 'That counts entries but not shape.', 'Dimensions describe layout.'),
    miss('3 + 2', 'Dimensions are not added.', 'Use row count and column count.'),
  ]),
  q(397009, 'Matrices', 'Matrix entry', 'In a matrix, entry a_ij usually means:', 'Row i, column j', [
    miss('Column i, row j', 'The standard order is row then column.', 'Remember RC: row-column.'),
    miss('The determinant of row i', 'An entry is one value, not a determinant.', 'Subscripts locate position.'),
    miss('The inverse of the matrix', 'Subscripts do not mean inverse.', 'Inverse notation is different.'),
  ]),
  q(397010, 'Matrices', 'Matrix addition', 'Two matrices can be added when they have:', 'The same dimensions', [
    miss('The same determinant only', 'Determinant equality is irrelevant.', 'Addition is entry-by-entry.'),
    miss('Any dimensions at all', 'Entries must line up.', 'Shapes must match.'),
    miss('The same first row only', 'All entries must have corresponding positions.', 'Use whole matrix shape.'),
  ]),
  q(397011, 'Matrices', 'Matrix multiplication size', 'A 2 x 3 matrix times a 3 x 4 matrix produces a:', '2 x 4 matrix', [
    miss('3 x 3 matrix', 'Inner dimensions match but do not give output size.', 'Outer dimensions become the result.'),
    miss('2 x 3 matrix', 'The number of columns changes to 4.', 'Use outside dimensions.'),
    miss('Not defined', 'The inner dimensions 3 and 3 match.', 'Multiplication is defined.'),
  ]),
  q(397012, 'Matrices', 'Undefined product', 'A 2 x 3 matrix times a 2 x 4 matrix is:', 'Not defined', [
    miss('2 x 4', 'The inner dimensions 3 and 2 do not match.', 'Columns of first must match rows of second.'),
    miss('3 x 2', 'That reverses dimensions and ignores conformability.', 'Check inner dimensions.'),
    miss('4 x 3', 'Output dimensions cannot be guessed.', 'First check if multiplication is defined.'),
  ]),
  q(397013, 'Matrices', 'Identity matrix', 'The identity matrix acts most like:', 'The number 1 under multiplication', [
    miss('The number 0 under addition', 'That is the zero matrix for addition.', 'Identity preserves products.'),
    miss('A row swap', 'Identity does not swap rows.', 'It leaves vectors/matrices unchanged.'),
    miss('A determinant only', 'Identity is a matrix, not just a scalar.', 'Think neutral multiplier.'),
  ]),
  q(397014, 'Matrices', 'Zero matrix', 'Adding the zero matrix to A gives:', 'A', [
    miss('0', 'That would be multiplying by zero in scalar arithmetic, not matrix addition.', 'Zero matrix is additive identity.'),
    miss('-A', 'That would require adding the negative of A.', 'Zero changes nothing.'),
    miss('A inverse', 'Addition does not create inverses.', 'Use additive identity.'),
  ]),
  q(397015, 'Determinants', '2x2 determinant', 'For [[a,b],[c,d]], the determinant is:', 'ad - bc', [
    miss('ab - cd', 'That multiplies across rows instead of diagonals.', 'Use main diagonal minus off diagonal.'),
    miss('ad + bc', 'The second term is subtracted.', 'Track the sign.'),
    miss('a + d', 'That is the trace.', 'Determinant uses products.'),
  ]),
  q(397016, 'Determinants', 'Singular matrix', 'A square matrix is singular when its determinant is:', '0', [
    miss('1', 'Determinant 1 matrices are invertible.', 'Singular means non-invertible.'),
    miss('-1', 'Determinant -1 matrices are invertible.', 'Only zero blocks inverse.'),
    miss('Undefined for every square matrix', 'Square matrices have determinants.', 'Use the determinant test.'),
  ]),
  q(397017, 'Determinants', 'Area scaling', 'The absolute value of a 2x2 determinant represents:', 'Area scale factor', [
    miss('Angle in degrees', 'Determinants are not directly angles.', 'Think transformed unit square area.'),
    miss('Trace of the matrix', 'Trace is sum of diagonal entries.', 'Determinant measures scaling.'),
    miss('Number of rows only', 'Matrix size is not determinant value.', 'Use geometric scaling.'),
  ]),
  q(397018, 'Inverses', 'Inverse condition', 'A square matrix A has an inverse when:', 'det(A) is not 0', [
    miss('det(A) = 0', 'That makes A singular.', 'Nonzero determinant means invertible.'),
    miss('A has more columns than rows', 'A square inverse requires square shape.', 'Start with square and nonsingular.'),
    miss('Every entry is positive', 'Positive entries do not guarantee an inverse.', 'Use determinant/rank.'),
  ]),
  q(397019, 'Inverses', 'Inverse equation', 'If A is invertible, A inverse times A equals:', 'I', [
    miss('0', 'That would be zero matrix behavior, not inverse behavior.', 'Inverse multiplication gives identity.'),
    miss('A', 'Multiplying by inverse cancels A.', 'Think reciprocal times number equals 1.'),
    miss('A squared', 'That would be A times A.', 'Use inverse relationship.'),
  ]),
  q(397020, 'Systems', 'Linear system', 'A linear system can often be written compactly as:', 'Ax = b', [
    miss('A + x = b only', 'Matrix-vector multiplication represents coefficients times variables.', 'Use coefficient matrix times variable vector.'),
    miss('x/A = b', 'Matrix division is not the standard representation.', 'Use multiplication.'),
    miss('det(x) = A', 'x is usually a vector, not a square matrix determinant.', 'Systems use Ax = b.'),
  ]),
  q(397021, 'Systems', 'Row operation', 'Which is an allowed elementary row operation?', 'Add a multiple of one row to another row', [
    miss('Square every entry in one row', 'That changes the solution set in general.', 'Allowed operations preserve equivalence.'),
    miss('Delete a variable column randomly', 'That loses information.', 'Row operations act on equations.'),
    miss('Sort entries alphabetically', 'Entries are numbers, and sorting changes equations.', 'Use standard row operations.'),
  ]),
  q(397022, 'Systems', 'Pivot', 'In row reduction, a pivot is:', 'A leading nonzero entry used to eliminate other entries', [
    miss('Any zero entry', 'Pivots must be nonzero.', 'They anchor elimination.'),
    miss('The determinant only', 'Pivots are row-reduction entries.', 'Look for leading entries.'),
    miss('The final column always', 'Pivots can occur in different columns.', 'They depend on row structure.'),
  ]),
  q(397023, 'Systems', 'Unique solution', 'For a square system Ax = b, a unique solution is guaranteed when:', 'A is invertible', [
    miss('A is singular', 'Singular systems can have none or infinitely many solutions.', 'Invertible means one solution for every b.'),
    miss('b is written in bold', 'Notation style does not determine solutions.', 'Use matrix properties.'),
    miss('A has a zero row', 'A zero row prevents full rank.', 'Full rank is needed.'),
  ]),
  q(397024, 'Span', 'Span meaning', 'The span of vectors v1 and v2 is:', 'All linear combinations of v1 and v2', [
    miss('Only v1 and v2 themselves', 'Span includes infinitely many combinations in many cases.', 'Use coefficients.'),
    miss('Only vectors perpendicular to both', 'That describes an orthogonal complement idea.', 'Span is built from the vectors.'),
    miss('The dot product v1 dot v2', 'A dot product is one scalar.', 'Span is a set of vectors.'),
  ]),
  q(397025, 'Span', 'Linear combination', 'Which is a linear combination of u and v?', '3u - 2v', [
    miss('u dot v only', 'That is a scalar product.', 'Linear combinations use scalar multiples added.'),
    miss('u cross v only', 'That is a vector product in 3D, not the general form.', 'Look for coefficients times vectors.'),
    miss('u divided by v', 'Vector division is not standard here.', 'Use addition of scalar multiples.'),
  ]),
  q(397026, 'Independence', 'Dependence clue', 'A set of vectors is linearly dependent when:', 'At least one vector can be built from the others', [
    miss('Every vector has length 1', 'Unit length does not determine dependence.', 'Dependence is about redundancy.'),
    miss('No vector can be combined with another', 'That is closer to independence.', 'Look for a redundant vector.'),
    miss('The vectors are written in columns', 'Notation does not decide dependence.', 'Use linear combinations.'),
  ]),
  q(397027, 'Independence', 'Too many vectors', 'In R^3, any set of 4 vectors is:', 'Linearly dependent', [
    miss('Always linearly independent', 'You cannot have more than 3 independent vectors in R^3.', 'Dimension limits independent sets.'),
    miss('Always orthogonal', 'Too many vectors does not imply orthogonality.', 'This is a dimension argument.'),
    miss('Not a set of vectors', 'Four vectors can form a set.', 'The question asks dependence.'),
  ]),
  q(397028, 'Basis', 'Basis definition', 'A basis for a vector space is a set that:', 'Spans the space and is linearly independent', [
    miss('Only spans the space', 'A spanning set can be redundant.', 'Basis needs no redundancy.'),
    miss('Only is linearly independent', 'Independent vectors may not cover the whole space.', 'Basis also spans.'),
    miss('Contains every vector in the space', 'A basis is usually much smaller than the whole space.', 'It generates the space.'),
  ]),
  q(397029, 'Basis', 'Standard basis R2', 'The standard basis for R^2 is:', '<1,0> and <0,1>', [
    miss('<1,1> and <1,1>', 'Those are the same direction and not independent.', 'Use x-axis and y-axis unit vectors.'),
    miss('<0,0> and <1,1>', 'The zero vector cannot be part of a basis.', 'Basis vectors must be independent.'),
    miss('<2,0> only', 'One vector cannot span all of R^2.', 'R^2 needs two independent directions.'),
  ]),
  q(397030, 'Basis', 'Dimension', 'The dimension of a vector space is:', 'The number of vectors in any basis', [
    miss('The number of all vectors in the space', 'Infinite vector spaces usually have infinitely many vectors but finite dimension.', 'Dimension counts basis directions.'),
    miss('The largest coordinate value', 'Coordinate sizes do not define dimension.', 'Use basis size.'),
    miss('Always 1', 'Many vector spaces have higher dimension.', 'R^n has dimension n.'),
  ]),
  q(397031, 'Subspaces', 'Subspace test', 'A subset W of a vector space is a subspace if it contains zero and is closed under:', 'Vector addition and scalar multiplication', [
    miss('Only dot products', 'Dot products are not the subspace closure operations.', 'Use addition and scaling.'),
    miss('Only taking square roots of entries', 'That is not a vector-space operation.', 'Subspaces preserve linear combinations.'),
    miss('Sorting coordinates', 'Sorting is not part of vector-space structure.', 'Use closure rules.'),
  ]),
  q(397032, 'Subspaces', 'Zero vector', 'Every subspace must contain:', 'The zero vector', [
    miss('Every vector in the original space', 'That would make it the whole space, not every subspace.', 'Subspaces can be smaller.'),
    miss('Only positive vectors', 'Vector spaces usually include negatives too.', 'Closure under scalar multiplication gives zero.'),
    miss('No vectors at all', 'The empty set is not a subspace.', 'Zero must be present.'),
  ]),
  q(397033, 'Linear Transformations', 'Linear transformation', 'A transformation T is linear if it preserves:', 'Addition and scalar multiplication', [
    miss('Distances and angles only', 'That describes some geometric transformations, not all linear maps.', 'Use algebraic preservation.'),
    miss('Only area', 'Area scaling alone does not define linearity.', 'Check T(u+v) and T(cu).'),
    miss('Alphabetical order', 'Ordering symbols is irrelevant.', 'Linearity is structural.'),
  ]),
  q(397034, 'Linear Transformations', 'Matrix transformation', 'Multiplying a vector by a matrix represents:', 'A linear transformation', [
    miss('A random nonlinear curve always', 'Matrix multiplication is linear.', 'It preserves linear combinations.'),
    miss('Only a determinant calculation', 'Determinants are one matrix property.', 'A matrix can act on vectors.'),
    miss('A scalar with no direction', 'The output is often a vector.', 'Matrix-vector product transforms vectors.'),
  ]),
  q(397035, 'Linear Transformations', 'Kernel', 'The kernel of T is the set of vectors that map to:', '0', [
    miss('1', 'Kernel is about the zero output.', 'Solve T(v)=0.'),
    miss('Every possible output', 'That describes range/image.', 'Kernel is the input set sent to zero.'),
    miss('The determinant', 'Kernel is a set of vectors.', 'Use transformation output.'),
  ]),
  q(397036, 'Linear Transformations', 'Image', 'The image or range of T is:', 'The set of all outputs T(v)', [
    miss('The set of inputs sent to zero', 'That is the kernel.', 'Image means outputs reached.'),
    miss('Only the zero vector', 'Some transformations have larger images.', 'Collect all possible outputs.'),
    miss('The trace of the matrix', 'Trace is a scalar matrix summary.', 'Image is a subspace of the codomain.'),
  ]),
  q(397037, 'Rank', 'Rank meaning', 'The rank of a matrix is the dimension of its:', 'Column space', [
    miss('Null space only', 'Nullity is the dimension of the null space.', 'Rank counts independent columns.'),
    miss('Set of diagonal entries', 'That is not rank.', 'Use column-space dimension.'),
    miss('Largest entry', 'Magnitude of entries does not determine rank.', 'Rank is independence count.'),
  ]),
  q(397038, 'Rank', 'Rank-nullity', 'For a matrix with n columns, rank plus nullity equals:', 'n', [
    miss('Number of rows always', 'Rank-nullity uses domain dimension, the number of columns.', 'Columns correspond to input variables.'),
    miss('det(A)', 'Rank-nullity is a dimension theorem.', 'Do not use determinant value.'),
    miss('0', 'Dimensions usually do not sum to zero except trivial cases.', 'Rank + nullity = domain dimension.'),
  ]),
  q(397039, 'Eigenvalues', 'Eigenvector', 'An eigenvector of A is a nonzero vector v such that:', 'Av is a scalar multiple of v', [
    miss('Av is always zero', 'Zero output is a kernel vector, not necessarily an eigenvector except eigenvalue 0.', 'Eigenvectors keep direction.'),
    miss('v has all entries equal to 1', 'Eigenvectors need not look like that.', 'The defining relation is Av = lambda v.'),
    miss('A is not square', 'Eigenvectors are defined for square transformations.', 'Use the equation Av = lambda v.'),
  ]),
  q(397040, 'Eigenvalues', 'Eigenvalue equation', 'The eigenvalue equation is:', 'Av = lambda v', [
    miss('A + v = lambda', 'That mixes matrix, vector, and scalar shapes.', 'Matrix times vector equals scalar times vector.'),
    miss('det(A) = v', 'A determinant is scalar, not an eigenvector equation.', 'Use transformation of v.'),
    miss('A = lambda + v', 'Shapes do not match.', 'Use Av = lambda v.'),
  ]),
  q(397041, 'Eigenvalues', 'Diagonal matrix eigenvalues', 'The eigenvalues of a diagonal matrix are:', 'Its diagonal entries', [
    miss('All off-diagonal entries', 'Off-diagonal entries are zero in a diagonal matrix.', 'Read the diagonal.'),
    miss('Only the determinant', 'The determinant is the product of eigenvalues, not the list.', 'Each diagonal entry is an eigenvalue.'),
    miss('Only the trace', 'Trace is the sum of eigenvalues.', 'The individual values are on the diagonal.'),
  ]),
  q(397042, 'Eigenvalues', 'Trace relation', 'For a square matrix, the trace equals:', 'The sum of eigenvalues, counting multiplicity', [
    miss('The product of eigenvalues', 'That is the determinant.', 'Trace corresponds to sum.'),
    miss('The largest eigenvalue only', 'Trace uses all eigenvalues.', 'Add them with multiplicity.'),
    miss('The number of columns', 'Trace is not generally matrix size.', 'It is diagonal sum and eigenvalue sum.'),
  ]),
  q(397043, 'Eigenvalues', 'Determinant relation', 'For a square matrix, the determinant equals:', 'The product of eigenvalues, counting multiplicity', [
    miss('The sum of eigenvalues', 'That is trace.', 'Determinant corresponds to product.'),
    miss('The smallest entry', 'Entry size is not determinant generally.', 'Use eigenvalue product.'),
    miss('The number of rows', 'Matrix size is not determinant value.', 'Use product relationship.'),
  ]),
  q(397044, 'Orthogonality', 'Orthonormal set', 'An orthonormal set has vectors that are:', 'Mutually orthogonal and each length 1', [
    miss('Only length 2', 'Unit length means 1.', 'Orthonormal combines orthogonal and normalized.'),
    miss('All parallel', 'Parallel nonzero vectors are not mutually orthogonal.', 'Look for perpendicular directions.'),
    miss('All zero vectors', 'Zero vectors do not have unit length.', 'Each vector must be length 1.'),
  ]),
  q(397045, 'Orthogonality', 'Orthogonal matrix', 'For an orthogonal matrix Q, Q transpose times Q equals:', 'I', [
    miss('0', 'Orthogonal matrices are invertible.', 'Columns are orthonormal.'),
    miss('Q', 'The transpose times Q gives identity, not Q.', 'Q transpose is Q inverse.'),
    miss('2I', 'Unit columns give 1s on the diagonal.', 'Use orthonormality.'),
  ]),
  q(397046, 'Least Squares', 'Least squares goal', 'Least squares chooses x to minimize:', 'The sum of squared residuals', [
    miss('The sum of raw residuals only', 'Raw residuals can cancel.', 'Squaring penalizes size.'),
    miss('The determinant of A only', 'Least squares is about approximation error.', 'Focus on residual b - Ax.'),
    miss('The number of columns', 'Column count is fixed.', 'Minimize error, not shape.'),
  ]),
  q(397047, 'Least Squares', 'Residual vector', 'In Ax approximately equals b, the residual is:', 'b - Ax', [
    miss('A - b', 'Shapes usually do not match.', 'Residual is observed target minus fitted target.'),
    miss('x - b', 'x is coefficient/input vector, not fitted output.', 'Compare b to Ax.'),
    miss('det(A)', 'A determinant is not the residual vector.', 'Use b - Ax.'),
  ]),
  q(397048, 'Matrix Factorizations', 'LU factorization', 'LU factorization writes a matrix as:', 'A lower triangular matrix times an upper triangular matrix', [
    miss('A diagonal matrix plus a vector', 'That is not LU.', 'L and U stand for lower and upper.'),
    miss('Only eigenvalues in a row', 'Eigenvalue decomposition is different.', 'LU is triangular factorization.'),
    miss('A scalar divided by a determinant', 'That is not a matrix factorization.', 'Use L times U.'),
  ]),
  q(397049, 'Matrix Factorizations', 'QR factorization', 'QR factorization writes A as:', 'An orthogonal matrix times an upper triangular matrix', [
    miss('A lower matrix times a diagonal matrix only', 'That is not QR.', 'Q is orthogonal, R is upper triangular.'),
    miss('A determinant plus a trace', 'Those are scalar summaries.', 'QR factors a matrix.'),
    miss('A vector crossed with itself', 'Cross products are unrelated.', 'Use Q and R meanings.'),
  ]),
  q(397050, 'Concept Checks', 'Noncommutativity', 'Matrix multiplication is generally:', 'Not commutative', [
    miss('Always commutative', 'Usually AB and BA differ or one may be undefined.', 'Order matters.'),
    miss('The same as scalar addition', 'Matrix multiplication has different rules.', 'Use row-column products.'),
    miss('Defined only for 1x1 matrices', 'Matrix multiplication is broadly defined when dimensions conform.', 'The issue is order, not existence.'),
  ]),
])

export const linearAlgebraWorkoutGeneratedQuestions = runPolish(_baseLinearAlgebraWorkoutGeneratedQuestions, [
  { subTopics: ADVANCED_MATH_WORKOUT_SUB_TOPICS, mentorHints: ADVANCED_MATH_WORKOUT_MENTOR_HINTS, correctShortened: ADVANCED_MATH_WORKOUT_CORRECT_SHORTENED, source: 'advancedMathWorkout' },
])
