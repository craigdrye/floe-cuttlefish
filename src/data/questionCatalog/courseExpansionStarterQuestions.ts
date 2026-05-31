import { makeQuestionBank } from './base'
import { polish as runPolish } from './polishPipeline'
import {
  SMALL_ACADEMIC_SUB_TOPICS,
  SMALL_ACADEMIC_MENTOR_HINTS,
  SMALL_ACADEMIC_CORRECT_SHORTENED,
} from './smallAcademicPolish'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const _baseDiscreteMathematicsStarterQuestions = makeQuestionBank('University', [
  {
    id: 467001,
    chapter: 'Proof Foundations',
    title: 'Contrapositive',
    prompt: 'The contrapositive of "If P, then Q" is:',
    correct: 'If not Q, then not P',
    wrong: [
      miss('If Q, then P', 'That is the converse, which is not logically equivalent in general.', 'Reverse and negate both parts.'),
      miss('If not P, then not Q', 'That is the inverse, which is not logically equivalent in general.', 'The conclusion is negated first.'),
      miss('P and not Q', 'That is the condition that would refute the original implication.', 'Look for an equivalent implication.'),
    ],
    lesson: 'A conditional and its contrapositive are logically equivalent. This is one of the most useful proof moves in discrete mathematics.',
    mentorHint:
      'For a conditional, the contrapositive keeps the same truth value by both reversing the direction and negating each statement. Track the hypothesis and conclusion separately so you do not accidentally choose the converse or inverse.',
    source: 'Floe authored course expansion',
  },
  {
    id: 467002,
    chapter: 'Sets',
    title: 'Subset Meaning',
    prompt: 'A is a subset of B exactly when:',
    correct: 'Every element of A is also an element of B',
    wrong: [
      miss('Every element of B is also an element of A', 'That says B is a subset of A.', 'Track the direction of containment.'),
      miss('A and B have no elements in common', 'That describes disjoint sets.', 'Subset means all members are included.'),
      miss('A has more elements than B', 'Cardinality is not the defining condition.', 'Membership inclusion matters first.'),
    ],
    lesson: 'Subset claims are universal: to prove A is contained in B, take an arbitrary element of A and show it must belong to B.',
    mentorHint:
      'A subset statement is about membership, not size or visual position. Read "A is a subset of B" as a universal claim: if something is in A, then it must also be in B.',
    source: 'Floe authored course expansion',
  },
  {
    id: 467003,
    chapter: 'Relations',
    title: 'Equivalence Relation',
    prompt: 'Which three properties define an equivalence relation?',
    correct: 'Reflexive, symmetric, and transitive',
    wrong: [
      miss('Injective, surjective, and bijective', 'Those classify functions, not equivalence relations.', 'Equivalence relations behave like a generalized equality.'),
      miss('Commutative, associative, and distributive', 'Those are algebraic operation properties.', 'Think relation properties on pairs.'),
      miss('Finite, countable, and infinite', 'Those classify sizes of sets.', 'An equivalence relation needs three logical properties.'),
    ],
    lesson: 'Equivalence relations partition a set into equivalence classes, which is why the three properties matter together.',
    mentorHint:
      'Equivalence relations act like a carefully defined version of equality. Ask which properties guarantee each object relates to itself, relationships go both directions, and chains of relationships stay consistent.',
    source: 'Floe authored course expansion',
  },
  {
    id: 467004,
    chapter: 'Counting',
    title: 'Product Rule',
    prompt: 'If a password has 3 independent choices for the first character and 5 independent choices for the second, how many two-character passwords are possible?',
    correct: '15',
    wrong: [
      miss('8', 'Adding counts choices for alternatives, not sequential independent choices.', 'Use multiplication for stages.'),
      miss('2', 'That counts positions, not options.', 'Each first choice pairs with every second choice.'),
      miss('25', 'That would be 5 choices for both positions.', 'The first position has only 3 choices.'),
    ],
    lesson: 'The product rule says independent stages multiply: 3 choices followed by 5 choices gives 3 x 5 outcomes.',
    mentorHint:
      'Use the product rule when a choice happens in stages and each first-stage option can pair with every second-stage option. Addition would count alternatives, while multiplication counts combinations of independent decisions.',
    source: 'Floe authored course expansion',
  },
  {
    id: 467005,
    chapter: 'Graphs',
    title: 'Graph Degree',
    prompt: 'In an undirected graph, the degree of a vertex is:',
    correct: 'The number of edges incident to that vertex',
    wrong: [
      miss('The number of vertices in the whole graph', 'That is the graph order, not one vertex degree.', 'Focus on one vertex.'),
      miss('The length of the longest path in the graph', 'That is a different graph measure.', 'Degree counts immediate edge connections.'),
      miss('The number of colors used to draw the graph', 'Graph coloring is separate from degree.', 'Count attached edges.'),
    ],
    lesson: 'Vertex degree is local connectivity. It is one of the first quantities to check when reasoning about graph structure.',
    mentorHint:
      'Degree is a local graph property, so focus on one vertex rather than the whole graph. Count the edges touching that vertex; in an undirected graph each incident edge contributes to that vertex degree.',
    source: 'Floe authored course expansion',
  },
  {
    id: 467006,
    chapter: 'Functions',
    title: 'Injection',
    prompt: 'A function is injective when:',
    correct: 'Different inputs always have different outputs',
    wrong: [
      miss('Every possible output is hit', 'That describes surjectivity.', 'Injection prevents collisions.'),
      miss('Every input has two outputs', 'A function assigns one output to each input.', 'Do not break the definition of function.'),
      miss('The domain and codomain are both empty only', 'Empty functions can be injective, but that is not the general definition.', 'Use the no-collisions idea.'),
    ],
    lesson: 'Injective functions preserve distinctness: if f(a) = f(b), then a = b.',
    mentorHint:
      'Injection is the "no collisions" condition for a function. A useful proof form is the contrapositive-style statement: if two outputs are equal, then the original inputs must have been equal.',
    source: 'Floe authored course expansion',
  },
])

const _baseAlgorithmsStarterQuestions = makeQuestionBank('Software', [
  {
    id: 468001,
    chapter: 'Algorithm Analysis',
    title: 'Big-O Purpose',
    prompt: 'Big-O notation is mainly used to describe:',
    correct: 'How resource use grows as input size grows',
    wrong: [
      miss('The exact runtime in seconds on one laptop', 'Big-O abstracts away from one machine and exact constants.', 'Think growth rate, not stopwatch time.'),
      miss('Whether code uses Python or JavaScript', 'Language can affect constants, but Big-O is about asymptotic behavior.', 'Focus on input size.'),
      miss('The number of comments in a file', 'Comments are not the resource being modeled.', 'Big-O usually describes time or space.'),
    ],
    lesson: 'Big-O is a growth-rate language for comparing algorithms as inputs become large.',
    mentorHint:
      'Big-O abstracts away machine details and constant factors so you can reason about scaling. Ask how the time or space changes when the input size grows, especially for large inputs.',
    source: 'Floe authored course expansion',
  },
  {
    id: 468002,
    chapter: 'Search',
    title: 'Binary Search Requirement',
    prompt: 'Binary search requires the search space to be:',
    correct: 'Ordered so the algorithm can discard half at each step',
    wrong: [
      miss('Randomly shuffled every step', 'Random order prevents the half-discard logic.', 'Binary search depends on order.'),
      miss('Stored only in a hash table', 'Hash tables use a different lookup strategy.', 'Think sorted array or ordered range.'),
      miss('Limited to exactly two elements', 'Binary search works on many sizes.', 'Binary refers to halving, not only two items.'),
    ],
    lesson: 'Binary search is powerful because ordering lets each comparison eliminate a large region of impossible answers.',
    mentorHint:
      'The invariant in binary search is that the target, if it exists, remains inside the current ordered interval. Each comparison is only useful because sorted order tells you which half cannot contain the answer.',
    source: 'Floe authored course expansion',
  },
  {
    id: 468003,
    chapter: 'Graphs',
    title: 'BFS Shortest Path',
    prompt: 'Why does breadth-first search find shortest paths in an unweighted graph?',
    correct: 'It explores vertices in increasing distance from the start',
    wrong: [
      miss('It always chooses the smallest numeric label', 'Labels do not determine path length.', 'Think level by level.'),
      miss('It follows one path as deep as possible before backtracking', 'That describes depth-first search.', 'BFS uses a queue.'),
      miss('It sorts all edge weights first', 'Unweighted BFS does not sort weights.', 'Each edge has equal cost.'),
    ],
    lesson: 'In an unweighted graph, every edge has the same cost, so BFS layers correspond to shortest-path distance.',
    mentorHint:
      'BFS maintains a distance-layer invariant: all vertices reached with k edges are processed before vertices that need k + 1 edges. That is why a queue, not a deep recursive path, supports shortest paths in unweighted graphs.',
    source: 'Floe authored course expansion',
  },
  {
    id: 468004,
    chapter: 'Dynamic Programming',
    title: 'Overlapping Subproblems',
    prompt: 'Dynamic programming is most useful when a problem has:',
    correct: 'Overlapping subproblems and optimal substructure',
    wrong: [
      miss('Only one possible input', 'A single input does not create a reusable subproblem structure.', 'Look for repeated subcomputations.'),
      miss('No relationship between subproblems', 'Then memoization or tabulation has little to reuse.', 'DP exploits structure.'),
      miss('A solution that cannot be broken apart', 'DP depends on decomposing the problem.', 'Substructure is the clue.'),
    ],
    lesson: 'DP saves work by solving repeated subproblems once and reusing those answers.',
    mentorHint:
      'Dynamic programming fits when the same smaller questions appear repeatedly and optimal answers can be assembled from optimal subanswers. Look for a reusable state definition before thinking about code.',
    source: 'Floe authored course expansion',
  },
])

const _baseSqlFoundationsStarterQuestions = makeQuestionBank('Software', [
  {
    id: 469001,
    chapter: 'Query Basics',
    title: 'SELECT Role',
    prompt: 'In SQL, the SELECT clause primarily specifies:',
    correct: 'Which columns or expressions to return',
    wrong: [
      miss('Which table rows are filtered out', 'Filtering belongs mainly in WHERE.', 'SELECT controls the output fields.'),
      miss('Which database server to connect to', 'Connection details live outside the query.', 'Think returned columns.'),
      miss('Which index must be rebuilt', 'Index maintenance is not the SELECT clause role.', 'SELECT is part of reading data.'),
    ],
    lesson: 'A basic SQL query separates output columns in SELECT from input tables in FROM and row filters in WHERE.',
    mentorHint:
      'Separate the logical roles of the query clauses: SELECT shapes the result columns, while FROM supplies rows and WHERE filters them. Ask what the final output should display.',
    source: 'Floe authored course expansion',
  },
  {
    id: 469002,
    chapter: 'Filtering',
    title: 'WHERE Role',
    prompt: 'Which SQL clause filters rows before they appear in the result set?',
    correct: 'WHERE',
    wrong: [
      miss('SELECT', 'SELECT chooses returned expressions; WHERE filters rows.', 'Look for the condition clause.'),
      miss('ORDER BY', 'ORDER BY sorts rows after selection.', 'Sorting is not filtering.'),
      miss('LIMIT', 'LIMIT caps the number of returned rows.', 'It does not define the condition.'),
    ],
    lesson: 'WHERE applies row-level conditions such as `status = "active"` or `created_at >= "2026-01-01"`.',
    mentorHint:
      'WHERE is evaluated as a row-level predicate: each row either passes the condition or does not. Look for the clause that reduces which records flow into the result before grouping or final display.',
    source: 'Floe authored course expansion',
  },
  {
    id: 469003,
    chapter: 'Joins',
    title: 'INNER JOIN',
    prompt: 'An INNER JOIN returns:',
    correct: 'Rows where the join condition matches in both tables',
    wrong: [
      miss('All rows from the left table even with no match', 'That describes a LEFT JOIN.', 'INNER means matched rows only.'),
      miss('Only rows with NULL keys', 'NULL matching is not the purpose of an inner join.', 'Look for matching keys.'),
      miss('A random sample from both tables', 'Joins combine related rows, not random samples.', 'Use the join condition.'),
    ],
    lesson: 'INNER JOIN is the default matched-record join: unmatched rows from either side are excluded.',
    mentorHint:
      'Think of an INNER JOIN as keeping only paired rows that satisfy the relationship condition. If a row has no matching partner on the join key, it will not survive this type of join.',
    source: 'Floe authored course expansion',
  },
  {
    id: 469004,
    chapter: 'Aggregation',
    title: 'GROUP BY',
    prompt: 'GROUP BY is used when you want to:',
    correct: 'Aggregate rows into groups such as totals by customer or counts by category',
    wrong: [
      miss('Rename a table permanently', 'Renaming uses DDL or aliases, not GROUP BY.', 'Think summary rows.'),
      miss('Guarantee rows are sorted alphabetically', 'GROUP BY may not guarantee final sort order.', 'ORDER BY sorts output.'),
      miss('Delete duplicate records from the database', 'GROUP BY can reveal duplicates, but it does not delete rows by itself.', 'It summarizes.'),
    ],
    lesson: 'GROUP BY pairs with aggregates like COUNT, SUM, AVG, MIN, and MAX.',
    mentorHint:
      'GROUP BY changes the question from individual rows to summary rows. Identify the attribute that defines each bucket, then apply aggregate functions such as COUNT or SUM within each bucket.',
    source: 'Floe authored course expansion',
  },
  {
    id: 469005,
    chapter: 'Aggregation',
    title: 'HAVING',
    prompt: 'HAVING differs from WHERE because HAVING filters:',
    correct: 'Groups after aggregation',
    wrong: [
      miss('Individual rows before aggregation', 'That is WHERE.', 'HAVING sees aggregate values like COUNT(*).'),
      miss('Database users before login', 'Authentication is outside SQL query aggregation.', 'Stay inside query clauses.'),
      miss('Columns before SELECT runs', 'HAVING is not for choosing columns.', 'It filters summary groups.'),
    ],
    lesson: 'Use WHERE for row conditions and HAVING for aggregate conditions such as `COUNT(*) > 10`.',
    mentorHint:
      'HAVING is for predicates that require aggregate results, such as counts or totals, so it comes after grouping in the reasoning. If the condition can be checked on one raw row, it usually belongs in WHERE instead.',
    source: 'Floe authored course expansion',
  },
  {
    id: 469006,
    chapter: 'Window Functions',
    title: 'ROW_NUMBER',
    prompt: '`ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)` assigns:',
    correct: 'A rank-like sequence within each user, newest row first',
    wrong: [
      miss('The total number of users in the table', 'ROW_NUMBER returns a row sequence, not a table count.', 'Partitioning restarts numbering for each user.'),
      miss('A permanent primary key in the database', 'Window function output is computed for the query result.', 'It does not alter the table.'),
      miss('The average timestamp for each user', 'No averaging happens here.', 'ORDER BY controls sequence, not an average.'),
    ],
    lesson: 'Window functions compute values across related rows while keeping row-level detail in the result.',
    mentorHint:
      'Read the OVER clause in two parts: PARTITION BY restarts the calculation for each group, and ORDER BY decides the sequence inside that group. ROW_NUMBER labels rows in that ordered window without collapsing them.',
    source: 'Floe authored course expansion',
  },
  {
    id: 469007,
    chapter: 'Data Modeling',
    title: 'Primary Key',
    prompt: 'A primary key should:',
    correct: 'Uniquely identify each row in a table',
    wrong: [
      miss('Store a paragraph explaining the table', 'Documentation is useful, but not the key role.', 'A key identifies records.'),
      miss('Allow many duplicate values by design', 'Primary keys are unique.', 'Duplicates break row identity.'),
      miss('Always be the largest text column', 'Column size is not the defining property.', 'Uniqueness and stability matter.'),
    ],
    lesson: 'Primary keys give rows stable identity so other tables can reference them safely.',
    mentorHint:
      'A primary key is about row identity in a relation. It should be unique and stable enough that other tables can point to one specific record without ambiguity.',
    source: 'Floe authored course expansion',
  },
  {
    id: 469008,
    chapter: 'Data Modeling',
    title: 'Foreign Key',
    prompt: 'A foreign key is mainly used to:',
    correct: 'Link a row in one table to a related row in another table',
    wrong: [
      miss('Encrypt all values in a column', 'Foreign keys express relationships, not encryption.', 'Think references between tables.'),
      miss('Sort the database by country', 'The word foreign is not about geography here.', 'It points to another table.'),
      miss('Prevent any table from having more than one row', 'Foreign keys do not impose that rule.', 'They preserve relational integrity.'),
    ],
    lesson: 'Foreign keys are how relational schemas represent relationships like orders belonging to customers.',
    mentorHint:
      'A foreign key stores a reference from one table to a key in another table. The idea is relational integrity: relationships between records should point to real, identifiable rows.',
    source: 'Floe authored course expansion',
  },
])

const _baseEarthScienceStarterQuestions = makeQuestionBank('AP', [
  {
    id: 470001,
    chapter: 'Earth Systems',
    title: 'Rock Cycle',
    prompt: 'Which process turns sediment into sedimentary rock?',
    correct: 'Compaction and cementation',
    wrong: [
      miss('Melting into magma', 'Melting produces magma, not sedimentary rock.', 'Sedimentary rock forms from accumulated sediment.'),
      miss('Nuclear fusion', 'Fusion powers stars, not the rock cycle.', 'Stay with Earth surface and burial processes.'),
      miss('Evaporation of sunlight', 'Sunlight does not evaporate into rock.', 'Think pressure and mineral glue.'),
    ],
    lesson: 'Sedimentary rocks form when sediments are buried, compacted, and cemented together over time.',
    mentorHint:
      'Follow the mechanism from loose sediment to solid rock. Burial increases pressure for compaction, and dissolved minerals can act as cement that binds grains together.',
    source: 'Floe authored course expansion',
  },
  {
    id: 470002,
    chapter: 'Plate Tectonics',
    title: 'Convergent Boundary',
    prompt: 'At many convergent plate boundaries, one plate moves beneath another in a process called:',
    correct: 'Subduction',
    wrong: [
      miss('Deposition', 'Deposition is sediment settling, not plate descent.', 'A plate dives into the mantle.'),
      miss('Condensation', 'Condensation is a water-cycle process.', 'The boundary is tectonic.'),
      miss('Photosynthesis', 'Photosynthesis is biological energy capture.', 'This is plate motion.'),
    ],
    lesson: 'Subduction zones are associated with deep ocean trenches, earthquakes, and volcanic arcs.',
    mentorHint:
      'At a convergent boundary, evidence such as trenches, earthquakes, and volcanic arcs points to one plate descending beneath another. Connect the observed features to the mechanism of plate motion.',
    source: 'Floe authored course expansion',
  },
  {
    id: 470003,
    chapter: 'Weather',
    title: 'Air Pressure',
    prompt: 'Air generally moves from:',
    correct: 'High pressure toward low pressure',
    wrong: [
      miss('Low pressure toward high pressure only', 'That reverses the usual pressure-gradient direction.', 'Wind responds to pressure differences.'),
      miss('Cold oceans toward warm rocks only', 'Temperature can influence pressure, but this is not the general wind rule.', 'Use pressure first.'),
      miss('The equator directly to every city', 'Global circulation is more complex.', 'The local driver is pressure gradient.'),
    ],
    lesson: 'Wind is driven by pressure differences, then shaped by rotation, friction, and local geography.',
    mentorHint:
      'Air motion begins with a pressure-gradient force, meaning air tends to move from higher pressure toward lower pressure. Other factors can curve or slow the wind, but the pressure difference supplies the initial push.',
    source: 'Floe authored course expansion',
  },
  {
    id: 470004,
    chapter: 'Climate',
    title: 'Greenhouse Effect',
    prompt: 'The greenhouse effect warms Earth because certain gases:',
    correct: 'Absorb and re-emit infrared radiation',
    wrong: [
      miss('Block all sunlight from entering the atmosphere', 'Greenhouse gases mostly allow incoming visible light through.', 'The key is outgoing heat.'),
      miss('Create new sunlight at night', 'They do not create sunlight.', 'They interact with infrared radiation.'),
      miss('Turn oxygen into rock', 'That is unrelated to atmospheric warming.', 'Focus on radiation.'),
    ],
    lesson: 'Greenhouse gases such as water vapor, carbon dioxide, and methane interact with outgoing infrared radiation.',
    mentorHint:
      'Focus on Earth energy balance: visible sunlight mostly enters, while Earth emits energy back out as infrared radiation. Greenhouse gases warm the surface by absorbing and re-emitting some of that outgoing infrared energy.',
    source: 'Floe authored course expansion',
  },
  {
    id: 470005,
    chapter: 'Water Cycle',
    title: 'Runoff',
    prompt: 'Runoff is water that:',
    correct: 'Flows over land into streams, rivers, lakes, or oceans',
    wrong: [
      miss('Turns directly into mantle rock', 'That is not part of the water cycle.', 'Runoff stays near the surface.'),
      miss('Only exists as water vapor in clouds', 'Cloud vapor is atmospheric, not surface runoff.', 'Look for flowing over land.'),
      miss('Can never carry sediment or pollutants', 'Runoff often carries both.', 'Surface flow can transport materials.'),
    ],
    lesson: 'Runoff connects weather, erosion, watersheds, and water quality.',
    mentorHint:
      'Runoff is part of the surface-water pathway in the water cycle. Think about water that does not immediately infiltrate or evaporate, and how flowing water can move sediment, nutrients, or pollutants through a watershed.',
    source: 'Floe authored course expansion',
  },
])

const _smallAcademicPolishBundles = [
  {
    subTopics: SMALL_ACADEMIC_SUB_TOPICS,
    mentorHints: SMALL_ACADEMIC_MENTOR_HINTS,
    correctShortened: SMALL_ACADEMIC_CORRECT_SHORTENED,
    source: 'smallAcademic',
  },
]

export const discreteMathematicsStarterQuestions = runPolish(
  _baseDiscreteMathematicsStarterQuestions,
  _smallAcademicPolishBundles,
)
export const algorithmsStarterQuestions = runPolish(
  _baseAlgorithmsStarterQuestions,
  _smallAcademicPolishBundles,
)
export const sqlFoundationsStarterQuestions = runPolish(
  _baseSqlFoundationsStarterQuestions,
  _smallAcademicPolishBundles,
)
export const earthScienceStarterQuestions = runPolish(
  _baseEarthScienceStarterQuestions,
  _smallAcademicPolishBundles,
)
