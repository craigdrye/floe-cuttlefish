# Linear Algebra
**ID**: `linearAlgebra` - **Discipline**: Mathematics - **Year**: University Sophomore

## Course Aim
Build a rigorous working command of finite-dimensional linear algebra as both a computational language and a proof-based theory. Students learn to solve systems, reason with vectors and matrices, describe subspaces and linear maps, use determinants and eigenstructure, work with orthogonality and least squares, and apply diagonalization and singular value methods to models in science, engineering, economics, computer science, and data analysis.

## Course Design Notes
This is a proof-aware university course with regular problem sets, short computational labs, and careful attention to definitions. Route questions here when students need vectors, matrices, Gaussian elimination, span, independence, bases, rank, null spaces, column spaces, linear transformations, determinants, eigenvalues, diagonalization, orthogonality, least squares, symmetric matrices, SVD, or applications such as Markov chains, differential equations, networks, graphics, and PCA. Emphasize exact language, matrix-vector geometry, row-reduction discipline, proof of general claims, and interpretation of numerical output.

## Chapter 1: Vectors, Systems, and Row Reduction
- **Key concepts**: Vectors in R^n, linear combinations, span, vector equations, systems of linear equations, augmented matrices, row operations, echelon form, reduced row echelon form, pivots, free variables, consistency, homogeneous systems, and parametric solution sets.
- **Practice questions**: Row-reduce a system and describe all solutions; decide whether a vector lies in a span; classify a system by pivots; construct a homogeneous system with a prescribed solution line.
- **Student output**: A systems problem set with exact row-reduction work, geometric interpretations in R^2 or R^3, and written explanations of consistency and free-variable structure.

## Chapter 2: Matrices, Linear Maps, and Invertibility
- **Key concepts**: Matrix-vector products, matrix multiplication, identity matrices, inverses, transpose, block matrices, linear transformations, standard matrices, composition, one-to-one and onto maps, the Invertible Matrix Theorem, and elementary matrices.
- **Practice questions**: Find the matrix for a linear transformation; test invertibility by row reduction; prove a map is linear or not linear; interpret a matrix as a geometric transformation.
- **Student output**: A linear-maps dossier connecting algebraic operations, transformation diagrams, and at least one proof using the definition of linearity.

## Chapter 3: Subspaces, Bases, Dimension, and Rank
- **Key concepts**: Subspaces, span, linear independence, bases, coordinates, dimension, null space, column space, row space, rank, nullity, Rank-Nullity Theorem, coordinate vectors, and change of basis.
- **Practice questions**: Find bases for null and column spaces; determine whether a set is a basis; compute coordinates relative to a nonstandard basis; prove a set is or is not a subspace.
- **Student output**: A subspace portfolio with basis computations, dimension checks, rank-nullity explanations, and concise proofs about span, independence, and subspace closure.

## Chapter 4: Determinants, Volume, and Orientation
- **Key concepts**: Determinants of square matrices, cofactor expansion, row-operation properties, triangular matrices, determinant of a product, invertibility criterion, area and volume scaling, orientation, Cramer's Rule, and the determinant as a measure of transformation behavior.
- **Practice questions**: Compute determinants using efficient methods; use determinant properties to avoid expansion; interpret the sign and size of a determinant geometrically; prove a determinant identity for a special class of matrices.
- **Student output**: A determinant memo comparing computational methods and explaining how determinant behavior reflects invertibility, volume scaling, and orientation.

## Chapter 5: Eigenvalues, Eigenvectors, and Dynamical Systems
- **Key concepts**: Eigenvalues, eigenvectors, eigenspaces, characteristic polynomial, algebraic and geometric multiplicity, diagonalization, powers of a matrix, complex eigenvalues, Markov chains, linear recurrence systems, and stability intuition.
- **Practice questions**: Compute eigenspaces; decide whether a matrix is diagonalizable; use diagonalization to calculate A^n; analyze the long-run behavior of a simple Markov chain or discrete dynamical system.
- **Student output**: An eigenstructure problem set with exact computations, diagonalization decisions, and a short model interpretation for a dynamical system.

## Chapter 6: Orthogonality, Projections, and Least Squares
- **Key concepts**: Dot products, norms, distance, angles, orthogonal complements, orthogonal bases, orthonormal bases, projections, Gram-Schmidt process, QR factorization, normal equations, least-squares solutions, and residuals.
- **Practice questions**: Build an orthonormal basis; project a vector onto a subspace; solve an inconsistent system by least squares; interpret residual size in a data-fitting problem.
- **Student output**: A least-squares lab combining hand computation and software verification, with a written account of projection geometry and error interpretation.

## Chapter 7: Symmetric Matrices, Quadratic Forms, and Spectral Theory
- **Key concepts**: Symmetric matrices, orthogonal diagonalization, Spectral Theorem, real eigenvalues, orthogonal eigenvectors, quadratic forms, positive definite matrices, change of variables for quadratic forms, principal axes, and constrained optimization links.
- **Practice questions**: Orthogonally diagonalize a symmetric matrix; classify a quadratic form; test positive definiteness; explain why symmetry improves eigenvalue behavior.
- **Student output**: A spectral-theory packet with proofs of selected symmetric-matrix facts, quadratic-form classifications, and geometric sketches of level sets.

## Chapter 8: SVD, Numerical Thinking, and Applications
- **Key concepts**: Singular values, singular vectors, Singular Value Decomposition, rank approximation, conditioning, numerical stability, matrix norms preview, principal component analysis, image compression, networks, recommendation systems, and limits of numerical computation.
- **Practice questions**: Compute or interpret a small SVD; compare rank-k approximations; identify when a system is ill-conditioned; connect singular values to variance or compression.
- **Student output**: An applied linear algebra report using SVD or least squares on a dataset, image, network, or model, with mathematical explanation and limitations.

## Capstone
Students complete a linear algebra modeling and analysis project. The project must define a vector space or matrix model, justify the relevant subspaces or transformations, use at least three major course tools such as row reduction, rank-nullity, determinants, eigenanalysis, orthogonality, least squares, diagonalization, or SVD, and communicate both exact mathematical reasoning and applied interpretation. Suitable topics include Markov chains, population models, network centrality, image compression, PCA, least-squares regression, electrical networks, graphics transformations, vibration modes, or small recommendation systems.

## Assessment Ideas
- Weekly written problem sets graded for correct computation, notation, proof quality, and interpretation.
- Short quizzes on row reduction, invertibility, subspaces, bases, determinants, eigenvalues, projections, and least squares.
- Proof assignments focused on definitions, counterexamples, rank-nullity, invertibility equivalences, and symmetric-matrix properties.
- Computational labs using a CAS, Python, Julia, MATLAB, or Octave to check matrix calculations and explore numerical behavior.
- Capstone rubric covering model formulation, mathematical correctness, proof clarity, computational validation, and application-aware explanation.

## Research Notes
- MIT OCW 18.06, Linear Algebra: https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/
- MIT OCW 18.065, Matrix Methods in Data Analysis, Signal Processing, and Machine Learning: https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/
- Gilbert Strang, Introduction to Linear Algebra and MIT materials: https://math.mit.edu/~gs/linearalgebra/
- OpenStax, Linear Algebra with Applications: https://openstax.org/details/books/linear-algebra
- Jim Hefferon, Linear Algebra: https://hefferon.net/linearalgebra/
- UC Davis, Linear Algebra course materials: https://www.math.ucdavis.edu/~linear/
- Paul's Online Notes, Linear Algebra: https://tutorial.math.lamar.edu/Classes/LinAlg/LinAlg.aspx
